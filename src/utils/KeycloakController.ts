import Keycloak, {KeycloakPromise} from 'keycloak-js';
import {useAuthStore} from 'stores/authDataStore';
import {date} from 'quasar';
import {useRouter} from 'vue-router';

class KeycloakController {
  private static _instance: KeycloakController;
  public static get Instance(): KeycloakController {
    return this._instance || (this._instance = new this());
  }


  private keycloak: Keycloak;
  private authStore = useAuthStore();
  private constructor() {
    this.keycloak = new Keycloak(window.location.origin + '/tlmc-player-vue' + '/keycloak.json');
  }

  private async ResumeSession() : Promise<boolean> {
    if (localStorage.getItem('OfflineToken')) {
      console.log('Offline token found. Attempting to refresh token.');
      this.keycloak.refreshToken = localStorage.getItem('OfflineToken') || undefined;
      const refreshed = await this.keycloak.updateToken(-1);
      if (refreshed) {
        console.log('Successfully reauthenticated with offline token.');
        this.authStore.authenticationComplete(this.keycloak.tokenParsed?.preferred_username, this.keycloak.tokenParsed?.sub);
        return true;
      } else {
        console.warn('Failed to reauthenticate with offline token. Logging out.');
        this.keycloak.refreshToken = undefined;
        localStorage.removeItem('OfflineToken');
        this.keycloak.logout();
        return false;
      }
    }

    return false;
  }

  public async Init() {
    console.log('Initializing Keycloak');

    try {
      const authenticated = await this.keycloak.init({
        onLoad: 'check-sso',
        scope: 'openid offline_access',
        checkLoginIframe: false,
        silentCheckSsoRedirectUri: window.location.origin + '/tlmc-player-vue' + '/silent-check-sso.html'
      });

      this.authStore.ready = true;
      if (authenticated) {
        console.log('User is authenticated (auth init)');
        this.authStore.authenticationComplete(this.keycloak.tokenParsed?.preferred_username, this.keycloak.tokenParsed?.sub);

        localStorage.setItem('OfflineToken', this.keycloak.refreshToken!);
      } else {

        if (await this.ResumeSession()) {
          console.log('User is authenticated (offline token)');
          return;
        }

        console.log('User is **not** authenticated');
      }
    } catch (error) {
      console.error('Keycloak initialization failed', error);
      return;
    }
  }

  public Login() {
    this.keycloak.login({
      scope: 'openid offline_access'
    }).then((success) => {
      console.log(`Login success: ${success}`);
    });
  }

  public Register() {
    this.keycloak.register();
  }

  public ModifyAccount() {
    this.keycloak.accountManagement();
  }

  public IsLoggedIn(): boolean {
    return this.keycloak?.authenticated || false;
  }

  public GetToken(): string | undefined {
    return this.keycloak?.token;
  }

  public GetTokenParsed(): Keycloak.KeycloakTokenParsed | undefined {
    return this.keycloak?.tokenParsed;
  }

  public GetTokenExpiration(): Date | undefined {
    if (!this.keycloak?.tokenParsed?.exp) {
      return undefined;
    }

    return new Date(this.keycloak.tokenParsed.exp * 1000);
  }

  public Logout() {
    // TODO: Need to revoke offline token using /realms/MusicPlayer/protocol/openid-connect/revoke
    localStorage.removeItem('OfflineToken');
    this.keycloak.logout();
  }

  public RefreshToken(callback?: (success: boolean) => void) {
    this.keycloak.updateToken(5).then((refreshed) => {
      if (refreshed) {
        console.log('Token refreshed');
      } else {
        console.log('Token not refreshed, valid for '
          + Math.round(this.keycloak.tokenParsed!.exp! + this.keycloak.timeSkew! - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch((reason) => {
      console.log('Failed to refresh token, reason: ' + reason);
    });
  }

  public async RefreshTokenAsync(): Promise<boolean> {
    try {
      const refreshed = await this.keycloak.updateToken(5);

      if (refreshed) {
        console.log('Token refreshed');
      } else {
        console.log('Token not refreshed, valid for '
          + Math.round(this.keycloak.tokenParsed!.exp! + this.keycloak.timeSkew! - new Date().getTime() / 1000) + ' seconds');
      }

      return refreshed;
    } catch (e) {
      console.log('Failed to refresh token. Exception: ' + e);
      return false;
    }
  }

  public IsTokenExpired(): boolean {
    return this.keycloak.isTokenExpired();
  }
}

export {
  KeycloakController
};

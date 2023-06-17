import Keycloak, {KeycloakPromise} from "keycloak-js";
import {useAuthStore} from "stores/authDataStore";
import {date} from "quasar";

class KeycloakController {
  private static _instance: KeycloakController;
  public static get Instance(): KeycloakController {
    return this._instance || (this._instance = new this());
  }


  private keycloak: Keycloak;
  private authStore = useAuthStore();
  constructor() {
    if (KeycloakController._instance) {
      throw new Error(
        'Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.'
      );
    }
    KeycloakController._instance = this;


    this.keycloak = new Keycloak()

    console.log('Initializing Keycloak');
    this.keycloak.init({
      checkLoginIframe: false,
      onLoad: 'check-sso',
      // silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    }).then(authenticated => {
      if (authenticated) {
        console.log('User is authenticated');
        this.authStore.authenticated = true;

        console.dir(this.keycloak.tokenParsed)

        this.authStore.authenticationComplete(
          this.keycloak.tokenParsed?.preferred_username,
          <string>this.keycloak.tokenParsed?.sub
        );
      } else {
        console.log('User is **not** authenticated');
        this.authStore.authenticated = false;
      }
    })
      .catch((e) => {
        console.dir(e);
        console.log(`keycloak init exception: ${e}`);
        throw e;
      });
  }

  public Login() {
    this.keycloak.login();
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
    }).catch(() => {
      console.log('Failed to refresh token');
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

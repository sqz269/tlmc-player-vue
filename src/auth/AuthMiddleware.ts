import {AuthApi, FetchParams, Middleware, RequestContext, ResponseContext} from 'app/backend-service-api';
import {useAuthStore} from 'stores/authDataStore';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {computed, ComputedRef} from 'vue';
import {AuthToken} from 'app/backend-service-api';

class AuthMiddleware implements Middleware {
  private _authStore;
  private readonly _authApi;
  private readonly _authInfo: ComputedRef<AuthToken | null>;
  private readonly _jwtToken: ComputedRef<string | null>;
  private readonly _refreshToken: ComputedRef<string | null>;

  constructor() {
    this._authStore = useAuthStore();
    this._authInfo = computed(() => this._authStore.authInfo);
    this._jwtToken = computed(() => this._authStore.jwtToken);
    this._refreshToken = computed(() => this._authStore.refreshToken);

    const apiConfig = ApiConfigProvider.getInstance().getApiConfig(false);
    this._authApi = new AuthApi(apiConfig);
  }

  private async refreshJwtToken(): Promise<boolean> {
    if (this._refreshToken === null) {
      return false;
    }

    let result;
    try {
      result = await this._authApi.getNewToken({ body: this._refreshToken.value! });
    } catch (e) {
      return false;
    }

    if (result.token === undefined ||
      result.authInfo === undefined) {
      alert('Failed to renew Jwt via refreshToken. Is the refresh token invalid/revoked? Or the auth server may be down');

      return false;
    }

    this._authStore.updateTokenFromRenewResult(result);
    this._authStore.saveAuthDataToLocalStorage();

    return true;
  }

  async getJwt(): Promise<string | null> {
    if (this._jwtToken === null) {
      return null;
    }

    if (this._refreshToken === null) {
      return null;
    }

    // we need to get new _authInfo using our refresh token
    if (this._authInfo === null) {
      const success = await this.refreshJwtToken();
      if (!success) {
        return null;
      }
    }

    // Token has expired
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (this._authInfo?.value?.exp < (Date.now() / 1000)) {
      const success = await this.refreshJwtToken();
      if (!success) {
        return null;
      }
    }

    return this._jwtToken.value;
  }

  async pre(context: RequestContext): Promise<FetchParams | void> {
    const jwt = await this.getJwt();

    if (jwt !== null) {
      const headers = new Headers(context.init.headers);
      headers.append('Authorization', `Jwt ${jwt}`)

      context.init.headers = headers;
    } else {
      console.log('No active Auth token, sending request without a jwt.');
    }

    return Promise.resolve( { url: context.url, init: context.init } );
  }

  async post(context: ResponseContext): Promise<Response | void> {
    if (context.response.status === 401) {
      alert('User is Unauthenticated');
    }

    if (context.response.status === 403) {
      alert('Access Denied')
    }

    return Promise.resolve(context.response);
  }
}

export {AuthMiddleware}

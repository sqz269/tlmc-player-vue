import {AuthApi, AuthToken, AuthTokenToJSON, LoginResult, UserApi} from 'app/backend-service-api';
import {apiConfig} from "boot/backend-api";

class AuthController
{
  private _jwtToken: string | null = null;
  private _refreshToken: string | null = null;
  private _authInfo: AuthToken | null = null;

  private _username: string | null = null;

  private _authApi: AuthApi | null = null;
  private _userApi: UserApi | null = null;

  constructor() {
    this.initFromLocalStorage();

    window.onbeforeunload = () => {
      this.saveToLocalStorage();
    }
  }

  get username() {
    return this._username;
  }

  // Defer Api Initialization
  private initApi(): void {
    this._authApi = new AuthApi(apiConfig);
    this._userApi = new UserApi(apiConfig);
  }

  public isLoggedIn() : boolean {
    return this._refreshToken !== null;
  }

  /**
   * Gets the current user's JWT token
   * <br>
   * If current JWT token is expired this method will automatically attempt to refresh the JWT token and return the new JWT
   *
   * <br>
   * @returns the user's jwt token, if the user is not logged in, then return null
   */
  public async getJwtToken() : Promise<string | null> {
    if (this._authApi === null || this._userApi === null) {
      this.initApi();
    }

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
    if (this._authInfo?.exp < Date.now()) {
      const success = await this.refreshJwtToken();
      if (!success) {
        return null;
      }
    }

    return this._jwtToken;
  }

  public useLoginResult(result: LoginResult) {
    this._jwtToken = result.jwtToken!;
    this._refreshToken = result.refreshToken!;
    this._authInfo = result.authInfo!;

    this._username = this._authInfo.user!;
  }

  private async refreshJwtToken(): Promise<boolean> {
    if (this._authApi === null || this._userApi === null) {
      this.initApi();
    }

    if (this._refreshToken === null) {
      return false;
    }

    let result;
    try {
      result = await this._authApi!.getNewToken({ body: this._refreshToken });
    } catch (e) {
      return false;
    }

    if (result.token) {
      this._jwtToken = result.token;
    } else {
      alert('Authentication server did not respond with a jwt token (impossible)');
      return false;
    }

    if (result.authInfo) {
      this._authInfo = result.authInfo;
    } else {
      alert('Authentication server did not respond with an auth struct (even more impossible)');
      return false;
    }

    return true;
  }

  private initFromLocalStorage() {
    this._jwtToken = localStorage.getItem('auth_jwtToken');
    this._refreshToken = localStorage.getItem('auth_refreshToken');

    const authInfo = localStorage.getItem('auth_authInfo');
    if (authInfo === null) {
      this._authInfo = null;
    }
    else {
      this._authInfo = JSON.parse(authInfo) as AuthToken;
    }
  }

  private saveToLocalStorage() {
    if (this._jwtToken)
    {
      localStorage.setItem('auth_jwtToken', this._jwtToken);
    }
    if (this._refreshToken)
    {
      localStorage.setItem('auth_refreshToken', this._refreshToken);
    }

    if (this._authInfo)
    {
      localStorage.setItem('auth_authInfo', AuthTokenToJSON(this._authInfo));
    }
  }
}

export { AuthController }

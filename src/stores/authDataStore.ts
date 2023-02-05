import { defineStore } from 'pinia';
import {AuthToken, AuthTokenToJSON, JwtRenewResult, LoginResult} from "app/backend-service-api";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loaded: false,
    jwtToken: null as string | null,
    refreshToken: null as string | null,
    authInfo: null as AuthToken | null
  }),
  getters: {
    getJwtToken: (state) => {
      return state.jwtToken;
    },
    getRefreshToken: (state) => {
      return state.refreshToken;
    },
    getAuthInfo: (state) => {
      return state.authInfo
    },

    getUsername: (state) => {
      return state?.authInfo?.user;
    },

    isLoggedIn: (state) => {
      return state?.refreshToken !== null;
    }
  },
  actions: {
    setAuthFromLoginResult(result: LoginResult) {
      if (result.authInfo === undefined ||
        result.refreshToken === undefined ||
        result.jwtToken === undefined) {
        return;
      }

      this.jwtToken = result.jwtToken;
      this.refreshToken = result.refreshToken;
      this.authInfo = result.authInfo;

      this.saveAuthDataToLocalStorage();
    },

    updateTokenFromRenewResult(result: JwtRenewResult) {
      if (result.token === undefined ||
          result.authInfo === undefined) {
        throw 'Invalid JwtRenewResult passed to UpdateTokenFromRenewResult';
      }

      this.jwtToken = result.token;
      this.authInfo = result.authInfo;
    },

    loadAuthFromLocalStorage() {
      this.loaded = true;
      this.jwtToken = localStorage.getItem('auth_jwtToken');
      this.refreshToken = localStorage.getItem('auth_refreshToken');

      const authInfo = localStorage.getItem('auth_authInfo');
      if (authInfo === null) {
        this.authInfo = null;
      }
      else {
        this.authInfo = JSON.parse(authInfo) as AuthToken;
      }
    },

    saveAuthDataToLocalStorage() {
      if (this.jwtToken)
      {
        localStorage.setItem('auth_jwtToken', this.jwtToken);
      }
      if (this.refreshToken)
      {
        localStorage.setItem('auth_refreshToken', this.refreshToken);
      }

      if (this.authInfo)
      {
        localStorage.setItem('auth_authInfo', JSON.stringify(AuthTokenToJSON(this.authInfo)));
      }
    },
  },
});

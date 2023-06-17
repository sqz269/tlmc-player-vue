import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    username: undefined as string | undefined,
    userId: undefined as string | undefined,
  }),
  getters: {
    isAuthenticated: (state): boolean => {
      return state.authenticated;
    },
    getUsername: (state): string | undefined => {
      return state.username;
    },
    getUserId: (state): string | undefined => {
      return state.userId;
    }
  },
  actions: {
    authenticationComplete(username: string, userId: string) {
      this.authenticated = true;
      this.username = username;
      this.userId = userId;
    }
  },
});

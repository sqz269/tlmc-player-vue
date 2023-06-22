import {FetchParams, Middleware, RequestContext, ResponseContext} from 'app/backend-service-api';
import {useAuthStore} from 'stores/authDataStore';
import {KeycloakController} from "src/utils/KeycloakController";
class AuthMiddleware implements Middleware {
  constructor() {
    console.log('AuthMiddleware constructor');
  }

  async pre(context: RequestContext): Promise<FetchParams | void> {
    const authStore = useAuthStore();
    if (!authStore.authenticated) {
      console.log('Sending request w/o authentication');
      return Promise.resolve({ url: context.url, init: context.init });
    }

    if (KeycloakController.Instance.IsTokenExpired()) {
      console.log('Token expired. Refreshing...');
      const refreshed = await KeycloakController.Instance.RefreshTokenAsync();
      if (!refreshed) {
        alert('Token refresh failed, please login again');
        KeycloakController.Instance.Logout();
      }
    } else {
      console.log('Token not expired');
    }

    const token = KeycloakController.Instance.GetToken();

    const headers = new Headers(context.init.headers);
    headers.set('Authorization', `Bearer ${token}`);
    context.init.headers = headers;

    return Promise.resolve({ url: context.url, init: context.init });
  }

  async post(context: ResponseContext): Promise<Response | void> {
    if (context.response.status === 401) {
      alert('User is not authenticated');
    }

    if (context.response.status === 403) {
      alert('User is not authorized');
    }

    return Promise.resolve(context.response);
  }
}

export {AuthMiddleware}

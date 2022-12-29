import {FetchParams, Middleware, RequestContext, ResponseContext} from "app/backend-service-api";
import {AuthController} from "src/auth/AuthController";
import {authController} from "boot/authController";

class AuthMiddleware implements Middleware {
  private _authController: AuthController;

  constructor() {
    this._authController = authController;
  }

  async pre(context: RequestContext): Promise<FetchParams | void> {
    const jwt = await this._authController.getJwtToken();

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

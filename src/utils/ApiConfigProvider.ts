import {Configuration, Middleware} from "app/backend-service-api";
import {AuthMiddleware} from "src/auth/AuthMiddleware";

class ApiConfigProvider {
  private static _instance: ApiConfigProvider | null = null;

  private _basePath = 'https://music.marisad.me';
  private _debugPath = 'http://home.internal.com';

  private _middleware: Middleware[] | null = null;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
  }

  public get basePath() {
    return this._basePath;
  }

  public getApiConfig(withAuthMiddleware=true) {
    if (withAuthMiddleware) {
      if (this._middleware === null) {
        this._middleware = [
          new AuthMiddleware()
        ];
      }

      return new Configuration({
        basePath: this._basePath,
        middleware: this._middleware,
      });
    }

    return new Configuration({
      basePath: this._basePath,});
  }

  public static getInstance() : ApiConfigProvider {
    if (ApiConfigProvider._instance === null) {
      ApiConfigProvider._instance = new ApiConfigProvider();
    }

    return ApiConfigProvider._instance;
  }
}

export {ApiConfigProvider}

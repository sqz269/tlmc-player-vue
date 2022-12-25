/* tslint:disable */
/* eslint-disable */
/**
 * AuthenticationService
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  LoginResult,
  ProblemDetails,
  User,
  UserCredentialsDto,
} from '../models';
import {
    LoginResultFromJSON,
    LoginResultToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    UserFromJSON,
    UserToJSON,
    UserCredentialsDtoFromJSON,
    UserCredentialsDtoToJSON,
} from '../models';

export interface ApiUserLoginPostRequest {
    userCredentialsDto?: UserCredentialsDto;
}

export interface ApiUserRegisterPostRequest {
    userCredentialsDto?: UserCredentialsDto;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     */
    async apiUserAllGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Jwt authentication
        }

        const response = await this.request({
            path: `/api/user/all`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     */
    async apiUserAllGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.apiUserAllGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserLoginPostRaw(requestParameters: ApiUserLoginPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Jwt authentication
        }

        const response = await this.request({
            path: `/api/user/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserCredentialsDtoToJSON(requestParameters.userCredentialsDto),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResultFromJSON(jsonValue));
    }

    /**
     */
    async apiUserLoginPost(requestParameters: ApiUserLoginPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResult> {
        const response = await this.apiUserLoginPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserRegisterPostRaw(requestParameters: ApiUserRegisterPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Jwt authentication
        }

        const response = await this.request({
            path: `/api/user/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserCredentialsDtoToJSON(requestParameters.userCredentialsDto),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async apiUserRegisterPost(requestParameters: ApiUserRegisterPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.apiUserRegisterPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

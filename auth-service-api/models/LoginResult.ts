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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LoginResult
 */
export interface LoginResult {
    /**
     * 
     * @type {string}
     * @memberof LoginResult
     */
    jwtToken?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginResult
     */
    refreshToken?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof LoginResult
     */
    roles?: Array<string> | null;
}

/**
 * Check if a given object implements the LoginResult interface.
 */
export function instanceOfLoginResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LoginResultFromJSON(json: any): LoginResult {
    return LoginResultFromJSONTyped(json, false);
}

export function LoginResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jwtToken': !exists(json, 'jwtToken') ? undefined : json['jwtToken'],
        'refreshToken': !exists(json, 'refreshToken') ? undefined : json['refreshToken'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
    };
}

export function LoginResultToJSON(value?: LoginResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jwtToken': value.jwtToken,
        'refreshToken': value.refreshToken,
        'roles': value.roles,
    };
}


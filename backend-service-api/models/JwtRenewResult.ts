/* tslint:disable */
/* eslint-disable */
/**
 * MusicDataService
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
import type { AuthToken } from './AuthToken';
import {
    AuthTokenFromJSON,
    AuthTokenFromJSONTyped,
    AuthTokenToJSON,
} from './AuthToken';

/**
 * 
 * @export
 * @interface JwtRenewResult
 */
export interface JwtRenewResult {
    /**
     * 
     * @type {string}
     * @memberof JwtRenewResult
     */
    token?: string | null;
    /**
     * 
     * @type {AuthToken}
     * @memberof JwtRenewResult
     */
    authInfo?: AuthToken;
}

/**
 * Check if a given object implements the JwtRenewResult interface.
 */
export function instanceOfJwtRenewResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function JwtRenewResultFromJSON(json: any): JwtRenewResult {
    return JwtRenewResultFromJSONTyped(json, false);
}

export function JwtRenewResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): JwtRenewResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
        'authInfo': !exists(json, 'authInfo') ? undefined : AuthTokenFromJSON(json['authInfo']),
    };
}

export function JwtRenewResultToJSON(value?: JwtRenewResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
        'authInfo': AuthTokenToJSON(value.authInfo),
    };
}

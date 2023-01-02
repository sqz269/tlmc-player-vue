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
 * @interface AuthToken
 */
export interface AuthToken {
    /**
     * 
     * @type {string}
     * @memberof AuthToken
     */
    iss?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AuthToken
     */
    iat?: number;
    /**
     * 
     * @type {number}
     * @memberof AuthToken
     */
    exp?: number;
    /**
     * 
     * @type {string}
     * @memberof AuthToken
     */
    user?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AuthToken
     */
    userId?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AuthToken
     */
    roles?: Array<string> | null;
}

/**
 * Check if a given object implements the AuthToken interface.
 */
export function instanceOfAuthToken(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthTokenFromJSON(json: any): AuthToken {
    return AuthTokenFromJSONTyped(json, false);
}

export function AuthTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iss': !exists(json, 'iss') ? undefined : json['iss'],
        'iat': !exists(json, 'iat') ? undefined : json['iat'],
        'exp': !exists(json, 'exp') ? undefined : json['exp'],
        'user': !exists(json, 'user') ? undefined : json['user'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
        'roles': !exists(json, 'roles') ? undefined : json['roles'],
    };
}

export function AuthTokenToJSON(value?: AuthToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iss': value.iss,
        'iat': value.iat,
        'exp': value.exp,
        'user': value.user,
        'user_id': value.userId,
        'roles': value.roles,
    };
}


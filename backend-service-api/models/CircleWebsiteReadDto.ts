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
/**
 * 
 * @export
 * @interface CircleWebsiteReadDto
 */
export interface CircleWebsiteReadDto {
    /**
     * 
     * @type {string}
     * @memberof CircleWebsiteReadDto
     */
    url?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CircleWebsiteReadDto
     */
    invalid?: boolean;
}

/**
 * Check if a given object implements the CircleWebsiteReadDto interface.
 */
export function instanceOfCircleWebsiteReadDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CircleWebsiteReadDtoFromJSON(json: any): CircleWebsiteReadDto {
    return CircleWebsiteReadDtoFromJSONTyped(json, false);
}

export function CircleWebsiteReadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CircleWebsiteReadDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'invalid': !exists(json, 'invalid') ? undefined : json['invalid'],
    };
}

export function CircleWebsiteReadDtoToJSON(value?: CircleWebsiteReadDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'invalid': value.invalid,
    };
}


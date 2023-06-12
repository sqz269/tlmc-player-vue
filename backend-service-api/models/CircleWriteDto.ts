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
 * @interface CircleWriteDto
 */
export interface CircleWriteDto {
    /**
     * 
     * @type {string}
     * @memberof CircleWriteDto
     */
    name?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CircleWriteDto
     */
    alias?: Array<string> | null;
}

/**
 * Check if a given object implements the CircleWriteDto interface.
 */
export function instanceOfCircleWriteDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CircleWriteDtoFromJSON(json: any): CircleWriteDto {
    return CircleWriteDtoFromJSONTyped(json, false);
}

export function CircleWriteDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CircleWriteDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'alias': !exists(json, 'alias') ? undefined : json['alias'],
    };
}

export function CircleWriteDtoToJSON(value?: CircleWriteDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'alias': value.alias,
    };
}

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
 * @interface AssetReadDto
 */
export interface AssetReadDto {
    /**
     * 
     * @type {string}
     * @memberof AssetReadDto
     */
    assetId?: string;
    /**
     * 
     * @type {string}
     * @memberof AssetReadDto
     */
    assetName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AssetReadDto
     */
    assetMime?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AssetReadDto
     */
    large?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AssetReadDto
     */
    url?: string | null;
}

/**
 * Check if a given object implements the AssetReadDto interface.
 */
export function instanceOfAssetReadDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AssetReadDtoFromJSON(json: any): AssetReadDto {
    return AssetReadDtoFromJSONTyped(json, false);
}

export function AssetReadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetReadDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assetId': !exists(json, 'assetId') ? undefined : json['assetId'],
        'assetName': !exists(json, 'assetName') ? undefined : json['assetName'],
        'assetMime': !exists(json, 'assetMime') ? undefined : json['assetMime'],
        'large': !exists(json, 'large') ? undefined : json['large'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function AssetReadDtoToJSON(value?: AssetReadDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assetId': value.assetId,
        'assetName': value.assetName,
        'assetMime': value.assetMime,
        'large': value.large,
        'url': value.url,
    };
}

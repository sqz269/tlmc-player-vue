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
import type { HlsPlaylistType } from './HlsPlaylistType';
import {
    HlsPlaylistTypeFromJSON,
    HlsPlaylistTypeFromJSONTyped,
    HlsPlaylistTypeToJSON,
} from './HlsPlaylistType';

/**
 * 
 * @export
 * @interface HlsPlaylistWriteDto
 */
export interface HlsPlaylistWriteDto {
    /**
     * 
     * @type {string}
     * @memberof HlsPlaylistWriteDto
     */
    id?: string;
    /**
     * 
     * @type {HlsPlaylistType}
     * @memberof HlsPlaylistWriteDto
     */
    type?: HlsPlaylistType;
    /**
     * 
     * @type {number}
     * @memberof HlsPlaylistWriteDto
     */
    bitrate?: number | null;
    /**
     * 
     * @type {string}
     * @memberof HlsPlaylistWriteDto
     */
    hlsPlaylistPath?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HlsPlaylistWriteDto
     */
    trackId?: string;
}

/**
 * Check if a given object implements the HlsPlaylistWriteDto interface.
 */
export function instanceOfHlsPlaylistWriteDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HlsPlaylistWriteDtoFromJSON(json: any): HlsPlaylistWriteDto {
    return HlsPlaylistWriteDtoFromJSONTyped(json, false);
}

export function HlsPlaylistWriteDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): HlsPlaylistWriteDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : HlsPlaylistTypeFromJSON(json['type']),
        'bitrate': !exists(json, 'bitrate') ? undefined : json['bitrate'],
        'hlsPlaylistPath': !exists(json, 'hlsPlaylistPath') ? undefined : json['hlsPlaylistPath'],
        'trackId': !exists(json, 'trackId') ? undefined : json['trackId'],
    };
}

export function HlsPlaylistWriteDtoToJSON(value?: HlsPlaylistWriteDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': HlsPlaylistTypeToJSON(value.type),
        'bitrate': value.bitrate,
        'hlsPlaylistPath': value.hlsPlaylistPath,
        'trackId': value.trackId,
    };
}

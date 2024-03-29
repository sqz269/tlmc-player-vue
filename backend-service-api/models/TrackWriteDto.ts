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
import type { LocalizedField } from './LocalizedField';
import {
    LocalizedFieldFromJSON,
    LocalizedFieldFromJSONTyped,
    LocalizedFieldToJSON,
} from './LocalizedField';

/**
 * 
 * @export
 * @interface TrackWriteDto
 */
export interface TrackWriteDto {
    /**
     * 
     * @type {LocalizedField}
     * @memberof TrackWriteDto
     */
    name: LocalizedField;
    /**
     * 
     * @type {number}
     * @memberof TrackWriteDto
     */
    index: number;
    /**
     * 
     * @type {number}
     * @memberof TrackWriteDto
     */
    disc: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    genre?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    staff?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    arrangement?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    vocalist?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    lyricist?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackWriteDto
     */
    original?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof TrackWriteDto
     */
    originalNonTouhou?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof TrackWriteDto
     */
    trackFile?: string | null;
}

/**
 * Check if a given object implements the TrackWriteDto interface.
 */
export function instanceOfTrackWriteDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "index" in value;
    isInstance = isInstance && "disc" in value;

    return isInstance;
}

export function TrackWriteDtoFromJSON(json: any): TrackWriteDto {
    return TrackWriteDtoFromJSONTyped(json, false);
}

export function TrackWriteDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackWriteDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': LocalizedFieldFromJSON(json['name']),
        'index': json['index'],
        'disc': json['disc'],
        'genre': !exists(json, 'genre') ? undefined : json['genre'],
        'staff': !exists(json, 'staff') ? undefined : json['staff'],
        'arrangement': !exists(json, 'arrangement') ? undefined : json['arrangement'],
        'vocalist': !exists(json, 'vocalist') ? undefined : json['vocalist'],
        'lyricist': !exists(json, 'lyricist') ? undefined : json['lyricist'],
        'original': !exists(json, 'original') ? undefined : json['original'],
        'originalNonTouhou': !exists(json, 'originalNonTouhou') ? undefined : json['originalNonTouhou'],
        'trackFile': !exists(json, 'trackFile') ? undefined : json['trackFile'],
    };
}

export function TrackWriteDtoToJSON(value?: TrackWriteDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': LocalizedFieldToJSON(value.name),
        'index': value.index,
        'disc': value.disc,
        'genre': value.genre,
        'staff': value.staff,
        'arrangement': value.arrangement,
        'vocalist': value.vocalist,
        'lyricist': value.lyricist,
        'original': value.original,
        'originalNonTouhou': value.originalNonTouhou,
        'trackFile': value.trackFile,
    };
}


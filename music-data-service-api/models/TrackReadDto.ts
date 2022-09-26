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
import type { AlbumReadDto } from './AlbumReadDto';
import {
    AlbumReadDtoFromJSON,
    AlbumReadDtoFromJSONTyped,
    AlbumReadDtoToJSON,
} from './AlbumReadDto';
import type { AssetReadDto } from './AssetReadDto';
import {
    AssetReadDtoFromJSON,
    AssetReadDtoFromJSONTyped,
    AssetReadDtoToJSON,
} from './AssetReadDto';
import type { LocalizedField } from './LocalizedField';
import {
    LocalizedFieldFromJSON,
    LocalizedFieldFromJSONTyped,
    LocalizedFieldToJSON,
} from './LocalizedField';
import type { OriginalTrackReadDto } from './OriginalTrackReadDto';
import {
    OriginalTrackReadDtoFromJSON,
    OriginalTrackReadDtoFromJSONTyped,
    OriginalTrackReadDtoToJSON,
} from './OriginalTrackReadDto';

/**
 * 
 * @export
 * @interface TrackReadDto
 */
export interface TrackReadDto {
    /**
     * 
     * @type {string}
     * @memberof TrackReadDto
     */
    id?: string;
    /**
     * 
     * @type {LocalizedField}
     * @memberof TrackReadDto
     */
    name?: LocalizedField;
    /**
     * 
     * @type {number}
     * @memberof TrackReadDto
     */
    index?: number | null;
    /**
     * 
     * @type {number}
     * @memberof TrackReadDto
     */
    disc?: number | null;
    /**
     * 
     * @type {string}
     * @memberof TrackReadDto
     */
    duration?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackReadDto
     */
    genre?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackReadDto
     */
    staff?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackReadDto
     */
    arrangement?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackReadDto
     */
    vocalist?: Array<string> | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof TrackReadDto
     */
    lyricist?: Array<string> | null;
    /**
     * 
     * @type {Array<OriginalTrackReadDto>}
     * @memberof TrackReadDto
     */
    original?: Array<OriginalTrackReadDto> | null;
    /**
     * 
     * @type {boolean}
     * @memberof TrackReadDto
     */
    originalNonTouhou?: boolean | null;
    /**
     * 
     * @type {AlbumReadDto}
     * @memberof TrackReadDto
     */
    album?: AlbumReadDto;
    /**
     * 
     * @type {AssetReadDto}
     * @memberof TrackReadDto
     */
    trackFile?: AssetReadDto;
}

/**
 * Check if a given object implements the TrackReadDto interface.
 */
export function instanceOfTrackReadDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TrackReadDtoFromJSON(json: any): TrackReadDto {
    return TrackReadDtoFromJSONTyped(json, false);
}

export function TrackReadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackReadDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : LocalizedFieldFromJSON(json['name']),
        'index': !exists(json, 'index') ? undefined : json['index'],
        'disc': !exists(json, 'disc') ? undefined : json['disc'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'genre': !exists(json, 'genre') ? undefined : json['genre'],
        'staff': !exists(json, 'staff') ? undefined : json['staff'],
        'arrangement': !exists(json, 'arrangement') ? undefined : json['arrangement'],
        'vocalist': !exists(json, 'vocalist') ? undefined : json['vocalist'],
        'lyricist': !exists(json, 'lyricist') ? undefined : json['lyricist'],
        'original': !exists(json, 'original') ? undefined : (json['original'] === null ? null : (json['original'] as Array<any>).map(OriginalTrackReadDtoFromJSON)),
        'originalNonTouhou': !exists(json, 'originalNonTouhou') ? undefined : json['originalNonTouhou'],
        'album': !exists(json, 'album') ? undefined : AlbumReadDtoFromJSON(json['album']),
        'trackFile': !exists(json, 'trackFile') ? undefined : AssetReadDtoFromJSON(json['trackFile']),
    };
}

export function TrackReadDtoToJSON(value?: TrackReadDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': LocalizedFieldToJSON(value.name),
        'index': value.index,
        'disc': value.disc,
        'duration': value.duration,
        'genre': value.genre,
        'staff': value.staff,
        'arrangement': value.arrangement,
        'vocalist': value.vocalist,
        'lyricist': value.lyricist,
        'original': value.original === undefined ? undefined : (value.original === null ? null : (value.original as Array<any>).map(OriginalTrackReadDtoToJSON)),
        'originalNonTouhou': value.originalNonTouhou,
        'album': AlbumReadDtoToJSON(value.album),
        'trackFile': AssetReadDtoToJSON(value.trackFile),
    };
}


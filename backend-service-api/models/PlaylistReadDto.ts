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
import type { PlaylistItemReadDto } from './PlaylistItemReadDto';
import {
    PlaylistItemReadDtoFromJSON,
    PlaylistItemReadDtoFromJSONTyped,
    PlaylistItemReadDtoToJSON,
} from './PlaylistItemReadDto';
import type { PlaylistType } from './PlaylistType';
import {
    PlaylistTypeFromJSON,
    PlaylistTypeFromJSONTyped,
    PlaylistTypeToJSON,
} from './PlaylistType';
import type { PlaylistVisibility } from './PlaylistVisibility';
import {
    PlaylistVisibilityFromJSON,
    PlaylistVisibilityFromJSONTyped,
    PlaylistVisibilityToJSON,
} from './PlaylistVisibility';

/**
 * 
 * @export
 * @interface PlaylistReadDto
 */
export interface PlaylistReadDto {
    /**
     * 
     * @type {string}
     * @memberof PlaylistReadDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaylistReadDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PlaylistReadDto
     */
    userId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaylistReadDto
     */
    username?: string | null;
    /**
     * 
     * @type {PlaylistVisibility}
     * @memberof PlaylistReadDto
     */
    visibility?: PlaylistVisibility;
    /**
     * 
     * @type {PlaylistType}
     * @memberof PlaylistReadDto
     */
    type?: PlaylistType;
    /**
     * 
     * @type {Date}
     * @memberof PlaylistReadDto
     */
    lastModified?: Date;
    /**
     * 
     * @type {number}
     * @memberof PlaylistReadDto
     */
    numberOfTracks?: number;
    /**
     * 
     * @type {Array<PlaylistItemReadDto>}
     * @memberof PlaylistReadDto
     */
    tracks?: Array<PlaylistItemReadDto> | null;
}

/**
 * Check if a given object implements the PlaylistReadDto interface.
 */
export function instanceOfPlaylistReadDto(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlaylistReadDtoFromJSON(json: any): PlaylistReadDto {
    return PlaylistReadDtoFromJSONTyped(json, false);
}

export function PlaylistReadDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaylistReadDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'visibility': !exists(json, 'visibility') ? undefined : PlaylistVisibilityFromJSON(json['visibility']),
        'type': !exists(json, 'type') ? undefined : PlaylistTypeFromJSON(json['type']),
        'lastModified': !exists(json, 'lastModified') ? undefined : (new Date(json['lastModified'])),
        'numberOfTracks': !exists(json, 'numberOfTracks') ? undefined : json['numberOfTracks'],
        'tracks': !exists(json, 'tracks') ? undefined : (json['tracks'] === null ? null : (json['tracks'] as Array<any>).map(PlaylistItemReadDtoFromJSON)),
    };
}

export function PlaylistReadDtoToJSON(value?: PlaylistReadDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'userId': value.userId,
        'username': value.username,
        'visibility': PlaylistVisibilityToJSON(value.visibility),
        'type': PlaylistTypeToJSON(value.type),
        'lastModified': value.lastModified === undefined ? undefined : (value.lastModified.toISOString()),
        'numberOfTracks': value.numberOfTracks,
        'tracks': value.tracks === undefined ? undefined : (value.tracks === null ? null : (value.tracks as Array<any>).map(PlaylistItemReadDtoToJSON)),
    };
}


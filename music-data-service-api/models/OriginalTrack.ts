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
import type { OriginalAlbum } from './OriginalAlbum';
import {
    OriginalAlbumFromJSON,
    OriginalAlbumFromJSONTyped,
    OriginalAlbumToJSON,
} from './OriginalAlbum';
import type { Track } from './Track';
import {
    TrackFromJSON,
    TrackFromJSONTyped,
    TrackToJSON,
} from './Track';

/**
 * 
 * @export
 * @interface OriginalTrack
 */
export interface OriginalTrack {
    /**
     * 
     * @type {string}
     * @memberof OriginalTrack
     */
    id: string;
    /**
     * 
     * @type {LocalizedField}
     * @memberof OriginalTrack
     */
    title?: LocalizedField;
    /**
     * 
     * @type {string}
     * @memberof OriginalTrack
     */
    externalReference?: string | null;
    /**
     * 
     * @type {OriginalAlbum}
     * @memberof OriginalTrack
     */
    album?: OriginalAlbum;
    /**
     * 
     * @type {Array<Track>}
     * @memberof OriginalTrack
     */
    tracks?: Array<Track> | null;
}

/**
 * Check if a given object implements the OriginalTrack interface.
 */
export function instanceOfOriginalTrack(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function OriginalTrackFromJSON(json: any): OriginalTrack {
    return OriginalTrackFromJSONTyped(json, false);
}

export function OriginalTrackFromJSONTyped(json: any, ignoreDiscriminator: boolean): OriginalTrack {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': !exists(json, 'title') ? undefined : LocalizedFieldFromJSON(json['title']),
        'externalReference': !exists(json, 'externalReference') ? undefined : json['externalReference'],
        'album': !exists(json, 'album') ? undefined : OriginalAlbumFromJSON(json['album']),
        'tracks': !exists(json, 'tracks') ? undefined : (json['tracks'] === null ? null : (json['tracks'] as Array<any>).map(TrackFromJSON)),
    };
}

export function OriginalTrackToJSON(value?: OriginalTrack | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': LocalizedFieldToJSON(value.title),
        'externalReference': value.externalReference,
        'album': OriginalAlbumToJSON(value.album),
        'tracks': value.tracks === undefined ? undefined : (value.tracks === null ? null : (value.tracks as Array<any>).map(TrackToJSON)),
    };
}


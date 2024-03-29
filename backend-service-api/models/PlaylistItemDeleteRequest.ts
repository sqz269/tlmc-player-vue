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
 * @interface PlaylistItemDeleteRequest
 */
export interface PlaylistItemDeleteRequest {
    /**
     * 
     * @type {string}
     * @memberof PlaylistItemDeleteRequest
     */
    playlistId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaylistItemDeleteRequest
     */
    playlistItemId?: string;
}

/**
 * Check if a given object implements the PlaylistItemDeleteRequest interface.
 */
export function instanceOfPlaylistItemDeleteRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PlaylistItemDeleteRequestFromJSON(json: any): PlaylistItemDeleteRequest {
    return PlaylistItemDeleteRequestFromJSONTyped(json, false);
}

export function PlaylistItemDeleteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaylistItemDeleteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'playlistId': !exists(json, 'playlistId') ? undefined : json['playlistId'],
        'playlistItemId': !exists(json, 'playlistItemId') ? undefined : json['playlistItemId'],
    };
}

export function PlaylistItemDeleteRequestToJSON(value?: PlaylistItemDeleteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'playlistId': value.playlistId,
        'playlistItemId': value.playlistItemId,
    };
}


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


/**
 * 
 * @export
 */
export const PlaylistType = {
    Normal: 'Normal',
    Favorite: 'Favorite',
    History: 'History',
    Queue: 'Queue'
} as const;
export type PlaylistType = typeof PlaylistType[keyof typeof PlaylistType];


export function PlaylistTypeFromJSON(json: any): PlaylistType {
    return PlaylistTypeFromJSONTyped(json, false);
}

export function PlaylistTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaylistType {
    return json as PlaylistType;
}

export function PlaylistTypeToJSON(value?: PlaylistType | null): any {
    return value as any;
}

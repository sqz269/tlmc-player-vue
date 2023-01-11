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
import type { OriginalTrackReadDto } from './OriginalTrackReadDto';
import {
    OriginalTrackReadDtoFromJSON,
    OriginalTrackReadDtoFromJSONTyped,
    OriginalTrackReadDtoToJSON,
} from './OriginalTrackReadDto';

/**
 * 
 * @export
 * @interface OriginalTrackReadDtoActionResult
 */
export interface OriginalTrackReadDtoActionResult {
    /**
     * 
     * @type {object}
     * @memberof OriginalTrackReadDtoActionResult
     */
    result?: object;
    /**
     * 
     * @type {OriginalTrackReadDto}
     * @memberof OriginalTrackReadDtoActionResult
     */
    value?: OriginalTrackReadDto;
}

/**
 * Check if a given object implements the OriginalTrackReadDtoActionResult interface.
 */
export function instanceOfOriginalTrackReadDtoActionResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OriginalTrackReadDtoActionResultFromJSON(json: any): OriginalTrackReadDtoActionResult {
    return OriginalTrackReadDtoActionResultFromJSONTyped(json, false);
}

export function OriginalTrackReadDtoActionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): OriginalTrackReadDtoActionResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': !exists(json, 'result') ? undefined : json['result'],
        'value': !exists(json, 'value') ? undefined : OriginalTrackReadDtoFromJSON(json['value']),
    };
}

export function OriginalTrackReadDtoActionResultToJSON(value?: OriginalTrackReadDtoActionResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'value': OriginalTrackReadDtoToJSON(value.value),
    };
}

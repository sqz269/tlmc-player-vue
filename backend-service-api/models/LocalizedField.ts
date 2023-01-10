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
 * @interface LocalizedField
 */
export interface LocalizedField {
    /**
     * 
     * @type {string}
     * @memberof LocalizedField
     */
    _default: string;
    /**
     * 
     * @type {string}
     * @memberof LocalizedField
     */
    en?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocalizedField
     */
    zh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LocalizedField
     */
    jp?: string | null;
}

/**
 * Check if a given object implements the LocalizedField interface.
 */
export function instanceOfLocalizedField(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "_default" in value;

    return isInstance;
}

export function LocalizedFieldFromJSON(json: any): LocalizedField {
    return LocalizedFieldFromJSONTyped(json, false);
}

export function LocalizedFieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocalizedField {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_default': json['default'],
        'en': !exists(json, 'en') ? undefined : json['en'],
        'zh': !exists(json, 'zh') ? undefined : json['zh'],
        'jp': !exists(json, 'jp') ? undefined : json['jp'],
    };
}

export function LocalizedFieldToJSON(value?: LocalizedField | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default': value._default,
        'en': value.en,
        'zh': value.zh,
        'jp': value.jp,
    };
}


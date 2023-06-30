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


import * as runtime from '../runtime';
import type {
  PlaylistItemAddRequest,
  PlaylistItemDeleteRequest,
  PlaylistItemReadDto,
  ProblemDetails,
} from '../models';
import {
    PlaylistItemAddRequestFromJSON,
    PlaylistItemAddRequestToJSON,
    PlaylistItemDeleteRequestFromJSON,
    PlaylistItemDeleteRequestToJSON,
    PlaylistItemReadDtoFromJSON,
    PlaylistItemReadDtoToJSON,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models';

export interface AddPlaylistItemToPlaylistRequest {
    playlistItemAddRequest?: PlaylistItemAddRequest;
}

export interface DeletePlaylistItemFromPlaylistRequest {
    playlistItemDeleteRequest?: PlaylistItemDeleteRequest;
}

export interface IncrementPlayCountRequest {
    playlistId?: string;
    trackId?: string;
}

/**
 * 
 */
export class PlaylistItemApi extends runtime.BaseAPI {

    /**
     */
    async addPlaylistItemToPlaylistRaw(requestParameters: AddPlaylistItemToPlaylistRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlaylistItemReadDto>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/playlistItem`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PlaylistItemAddRequestToJSON(requestParameters.playlistItemAddRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlaylistItemReadDtoFromJSON(jsonValue));
    }

    /**
     */
    async addPlaylistItemToPlaylist(requestParameters: AddPlaylistItemToPlaylistRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlaylistItemReadDto> {
        const response = await this.addPlaylistItemToPlaylistRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async deletePlaylistItemFromPlaylistRaw(requestParameters: DeletePlaylistItemFromPlaylistRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/playlistItem`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: PlaylistItemDeleteRequestToJSON(requestParameters.playlistItemDeleteRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deletePlaylistItemFromPlaylist(requestParameters: DeletePlaylistItemFromPlaylistRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deletePlaylistItemFromPlaylistRaw(requestParameters, initOverrides);
    }

    /**
     */
    async incrementPlayCountRaw(requestParameters: IncrementPlayCountRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.playlistId !== undefined) {
            queryParameters['PlaylistId'] = requestParameters.playlistId;
        }

        if (requestParameters.trackId !== undefined) {
            queryParameters['TrackId'] = requestParameters.trackId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/playlistItem/inc`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async incrementPlayCount(requestParameters: IncrementPlayCountRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.incrementPlayCountRaw(requestParameters, initOverrides);
    }

}
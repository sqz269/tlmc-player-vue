import { defineStore } from 'pinia';
import {AlbumApi, TrackReadDto} from 'app/music-data-service-api';
import {apiConfig} from 'boot/backend-api';

export const useSongQueueStore = defineStore('counter', {
  state: () => ({
    queueIndex: -1,
    queue: [] as TrackReadDto[],
    currentTrack: null as TrackReadDto | null
  }),

  getters: {
    getCurrentlyPlaying (state) : TrackReadDto | null {
      return state.currentTrack;
    }
  },

  actions: {
    async addTrackToQueue(trackId: string) {
      const trackApi = new AlbumApi(apiConfig);
      const track = await trackApi.getTrack({id: trackId});
      this.queue.push(track);
    }
  }
});

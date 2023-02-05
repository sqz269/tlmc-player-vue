import {defineStore} from "pinia";
import {PlaylistItemReadDto, PlaylistReadDto} from "app/backend-service-api";

export const usePlaylistStore = defineStore('playlist', {
  state: () => ({
    //      Map<PlaylistId, PlaylistObject>
    playlistsMap: new Map<string, PlaylistReadDto>(),
    //      Map<PlaylistId, PlaylistItemId>
    playlistItemMap: new Map<string, Set<string>>() ,
  }),
  getters: {
    getPlaylists: (state): PlaylistReadDto[] => {
      return Array.from(state.playlistsMap.values());
    }
  },
  actions: {
    setPlaylists(playlists: PlaylistReadDto[]) {
      playlists.forEach(e => {
        this.playlistsMap.set(e.id!, e);

        const tracks = e.tracks!.map(i => i.trackId!);
        this.playlistItemMap.set(e.id!, new Set(tracks));
      });
    },
    addPlaylist(playlist: PlaylistReadDto) {
      this.playlistsMap.set(playlist.id!, playlist);
    },
    addPlaylistItem(playlist: string, playlistItem: PlaylistItemReadDto) {
      this.playlistItemMap.get(playlist)?.add(playlistItem.trackId!);
    },
    removePlaylistItem(playlist: string, playlistItem: string) {
      this.playlistItemMap.get(playlist)?.delete(playlistItem);
    },
    hasPlaylistItem(playlist: string, playlistItem: string): boolean {
      const p = this.playlistItemMap.get(playlist);
      if (!p) {
        return false;
      }

      return p.has(playlistItem);
    }
  }
});

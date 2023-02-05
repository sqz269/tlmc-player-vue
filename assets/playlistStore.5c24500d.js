import { ad as defineStore } from "./index.47bc951f.js";
const usePlaylistStore = defineStore("playlist", {
  state: () => ({
    playlistsMap: /* @__PURE__ */ new Map(),
    playlistItemMap: /* @__PURE__ */ new Map()
  }),
  getters: {
    getPlaylists: (state) => {
      return Array.from(state.playlistsMap.values());
    }
  },
  actions: {
    setPlaylists(playlists) {
      playlists.forEach((e) => {
        this.playlistsMap.set(e.id, e);
        const tracks = e.tracks.map((i) => i.trackId);
        this.playlistItemMap.set(e.id, new Set(tracks));
      });
    },
    addPlaylist(playlist) {
      this.playlistsMap.set(playlist.id, playlist);
    },
    addPlaylistItem(playlist, playlistItem) {
      var _a;
      (_a = this.playlistItemMap.get(playlist)) == null ? void 0 : _a.add(playlistItem.trackId);
    },
    removePlaylistItem(playlist, playlistItem) {
      var _a;
      (_a = this.playlistItemMap.get(playlist)) == null ? void 0 : _a.delete(playlistItem);
    },
    hasPlaylistItem(playlist, playlistItem) {
      const p = this.playlistItemMap.get(playlist);
      if (!p) {
        return false;
      }
      return p.has(playlistItem);
    }
  }
});
export { usePlaylistStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWxpc3RTdG9yZS41YzI0NTAwZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3N0b3Jlcy9wbGF5bGlzdFN0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGVmaW5lU3RvcmV9IGZyb20gXCJwaW5pYVwiO1xuaW1wb3J0IHtQbGF5bGlzdEl0ZW1SZWFkRHRvLCBQbGF5bGlzdFJlYWREdG99IGZyb20gXCJhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaVwiO1xuXG5leHBvcnQgY29uc3QgdXNlUGxheWxpc3RTdG9yZSA9IGRlZmluZVN0b3JlKCdwbGF5bGlzdCcsIHtcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgLy8gICAgICBNYXA8UGxheWxpc3RJZCwgUGxheWxpc3RPYmplY3Q+XG4gICAgcGxheWxpc3RzTWFwOiBuZXcgTWFwPHN0cmluZywgUGxheWxpc3RSZWFkRHRvPigpLFxuICAgIC8vICAgICAgTWFwPFBsYXlsaXN0SWQsIFBsYXlsaXN0SXRlbUlkPlxuICAgIHBsYXlsaXN0SXRlbU1hcDogbmV3IE1hcDxzdHJpbmcsIFNldDxzdHJpbmc+PigpICxcbiAgfSksXG4gIGdldHRlcnM6IHtcbiAgICBnZXRQbGF5bGlzdHM6IChzdGF0ZSk6IFBsYXlsaXN0UmVhZER0b1tdID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHN0YXRlLnBsYXlsaXN0c01hcC52YWx1ZXMoKSk7XG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgc2V0UGxheWxpc3RzKHBsYXlsaXN0czogUGxheWxpc3RSZWFkRHRvW10pIHtcbiAgICAgIHBsYXlsaXN0cy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICB0aGlzLnBsYXlsaXN0c01hcC5zZXQoZS5pZCEsIGUpO1xuXG4gICAgICAgIGNvbnN0IHRyYWNrcyA9IGUudHJhY2tzIS5tYXAoaSA9PiBpLnRyYWNrSWQhKTtcbiAgICAgICAgdGhpcy5wbGF5bGlzdEl0ZW1NYXAuc2V0KGUuaWQhLCBuZXcgU2V0KHRyYWNrcykpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBhZGRQbGF5bGlzdChwbGF5bGlzdDogUGxheWxpc3RSZWFkRHRvKSB7XG4gICAgICB0aGlzLnBsYXlsaXN0c01hcC5zZXQocGxheWxpc3QuaWQhLCBwbGF5bGlzdCk7XG4gICAgfSxcbiAgICBhZGRQbGF5bGlzdEl0ZW0ocGxheWxpc3Q6IHN0cmluZywgcGxheWxpc3RJdGVtOiBQbGF5bGlzdEl0ZW1SZWFkRHRvKSB7XG4gICAgICB0aGlzLnBsYXlsaXN0SXRlbU1hcC5nZXQocGxheWxpc3QpPy5hZGQocGxheWxpc3RJdGVtLnRyYWNrSWQhKTtcbiAgICB9LFxuICAgIHJlbW92ZVBsYXlsaXN0SXRlbShwbGF5bGlzdDogc3RyaW5nLCBwbGF5bGlzdEl0ZW06IHN0cmluZykge1xuICAgICAgdGhpcy5wbGF5bGlzdEl0ZW1NYXAuZ2V0KHBsYXlsaXN0KT8uZGVsZXRlKHBsYXlsaXN0SXRlbSk7XG4gICAgfSxcbiAgICBoYXNQbGF5bGlzdEl0ZW0ocGxheWxpc3Q6IHN0cmluZywgcGxheWxpc3RJdGVtOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnBsYXlsaXN0SXRlbU1hcC5nZXQocGxheWxpc3QpO1xuICAgICAgaWYgKCFwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHAuaGFzKHBsYXlsaXN0SXRlbSk7XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR2EsTUFBQSxtQkFBbUIsWUFBWSxZQUFZO0FBQUEsRUFDdEQsT0FBTyxPQUFPO0FBQUEsSUFFWixrQ0FBa0IsSUFBNkI7QUFBQSxJQUUvQyxxQ0FBcUIsSUFBeUI7QUFBQSxFQUFBO0FBQUEsRUFFaEQsU0FBUztBQUFBLElBQ1AsY0FBYyxDQUFDLFVBQTZCO0FBQzFDLGFBQU8sTUFBTSxLQUFLLE1BQU0sYUFBYSxPQUFRLENBQUE7QUFBQSxJQUMvQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGFBQWEsV0FBOEI7QUFDekMsZ0JBQVUsUUFBUSxDQUFLLE1BQUE7QUFDckIsYUFBSyxhQUFhLElBQUksRUFBRSxJQUFLLENBQUM7QUFFOUIsY0FBTSxTQUFTLEVBQUUsT0FBUSxJQUFJLENBQUEsTUFBSyxFQUFFLE9BQVE7QUFDNUMsYUFBSyxnQkFBZ0IsSUFBSSxFQUFFLElBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQztBQUFBLE1BQUEsQ0FDaEQ7QUFBQSxJQUNIO0FBQUEsSUFDQSxZQUFZLFVBQTJCO0FBQ3JDLFdBQUssYUFBYSxJQUFJLFNBQVMsSUFBSyxRQUFRO0FBQUEsSUFDOUM7QUFBQSxJQUNBLGdCQUFnQixVQUFrQixjQUFtQzs7QUFDbkUsaUJBQUssZ0JBQWdCLElBQUksUUFBUSxNQUFqQyxtQkFBb0MsSUFBSSxhQUFhO0FBQUEsSUFDdkQ7QUFBQSxJQUNBLG1CQUFtQixVQUFrQixjQUFzQjs7QUFDekQsaUJBQUssZ0JBQWdCLElBQUksUUFBUSxNQUFqQyxtQkFBb0MsT0FBTztBQUFBLElBQzdDO0FBQUEsSUFDQSxnQkFBZ0IsVUFBa0IsY0FBK0I7QUFDL0QsWUFBTSxJQUFJLEtBQUssZ0JBQWdCLElBQUksUUFBUTtBQUMzQyxVQUFJLENBQUMsR0FBRztBQUNDLGVBQUE7QUFBQSxNQUNUO0FBRU8sYUFBQSxFQUFFLElBQUksWUFBWTtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUNGLENBQUM7OyJ9

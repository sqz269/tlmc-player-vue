import { B as BaseAPI, J as JSONApiResponse, bx as VoidApiResponse, af as defineStore, _ as _export_sfc, P as defineComponent, c as computed, aB as ApiConfigProvider, r as ref, w as watch, o as onMounted, U as openBlock, V as createBlock, W as withCtx, d as createVNode, ag as QIcon, a3 as createCommentVNode, ac as createElementBlock, Y as createBaseVNode, aC as QInput, a0 as QBtn, al as QSeparator, ar as renderList, E as withDirectives, aG as Ripple, by as QCheckbox, a1 as unref, b as isRef, ad as createTextVNode, Z as toDisplayString, F as Fragment } from "./index.a0cb291c.js";
import { a as QItem, Q as QItemSection, b as QMenu } from "./QMenu.28965936.js";
import { Q as QItemLabel, a as QSelect } from "./QSelect.323b7d6d.js";
import { Q as QList } from "./QList.b4e8a974.js";
import { a as PlaylistItemReadDtoFromJSON, P as PlaylistApi, b as PlaylistVisibility } from "./ClosePopup.23d6e2a9.js";
import { u as useQuasar } from "./use-quasar.d42054d9.js";
function PlaylistItemAddRequestToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "playlistId": value.playlistId,
    "playlistItemId": value.playlistItemId
  };
}
function PlaylistItemDeleteRequestToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "playlistId": value.playlistId,
    "playlistItemId": value.playlistItemId
  };
}
class PlaylistItemApi extends BaseAPI {
  async addPlaylistItemToPlaylistRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json-patch+json";
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/playlistItem`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: PlaylistItemAddRequestToJSON(requestParameters.playlistItemAddRequest)
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => PlaylistItemReadDtoFromJSON(jsonValue));
  }
  async addPlaylistItemToPlaylist(requestParameters = {}, initOverrides) {
    const response = await this.addPlaylistItemToPlaylistRaw(requestParameters, initOverrides);
    return await response.value();
  }
  async deletePlaylistItemFromPlaylistRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json-patch+json";
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/playlistItem`,
      method: "DELETE",
      headers: headerParameters,
      query: queryParameters,
      body: PlaylistItemDeleteRequestToJSON(requestParameters.playlistItemDeleteRequest)
    }, initOverrides);
    return new VoidApiResponse(response);
  }
  async deletePlaylistItemFromPlaylist(requestParameters = {}, initOverrides) {
    await this.deletePlaylistItemFromPlaylistRaw(requestParameters, initOverrides);
  }
  async incrementPlayCountRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    if (requestParameters.playlistId !== void 0) {
      queryParameters["PlaylistId"] = requestParameters.playlistId;
    }
    if (requestParameters.trackId !== void 0) {
      queryParameters["TrackId"] = requestParameters.trackId;
    }
    const headerParameters = {};
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/playlistItem/inc`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new VoidApiResponse(response);
  }
  async incrementPlayCount(requestParameters = {}, initOverrides) {
    await this.incrementPlayCountRaw(requestParameters, initOverrides);
  }
}
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
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Create Playlist");
const _hoisted_2 = {
  key: 1,
  class: "row no-wrap q-px-md q-pt-md"
};
const _hoisted_3 = { class: "column" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle1 q-mb-sm" }, "Create Playlist", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddToPlaylistSelector",
  props: {
    trackId: null
  },
  setup(__props) {
    const props = __props;
    let firstActivate = true;
    const $q = useQuasar();
    const playlistStore = usePlaylistStore();
    const playlists = computed(() => playlistStore.getPlaylists);
    const playlistApi = new PlaylistApi(ApiConfigProvider.getInstance().getApiConfig());
    const playlistItemApi = new PlaylistItemApi(ApiConfigProvider.getInstance().getApiConfig());
    const onPlaylistCreateBtnClick = () => {
      playlistCreateActive.value = true;
    };
    const playlistCreateActive = ref(false);
    const playlistName = ref();
    const playlistVisibility = ref(PlaylistVisibility.Private);
    const visibilityOptions = [PlaylistVisibility.Public, PlaylistVisibility.Unlisted, PlaylistVisibility.Private];
    const createPlaylist = async () => {
      const result = await playlistApi.createPlaylist({
        playlistCreateRequest: {
          name: playlistName.value,
          visibility: playlistVisibility.value
        }
      });
      playlistStore.addPlaylist(result);
      $q.notify({
        position: "top",
        type: "secondary",
        message: `Playlist Created`
      });
      const r = await playlistItemApi.addPlaylistItemToPlaylist({ playlistItemAddRequest: {
        playlistId: result.id,
        playlistItemId: props.trackId
      } });
      playlistStore.addPlaylistItem(result.id, r);
      $q.notify({
        position: "top",
        type: "secondary",
        message: `Added to Playlist`
      });
      playlistCreateActive.value = false;
    };
    let playlistStatus = ref([]);
    watch(playlistStatus, async (value, oldValue) => {
      if (firstActivate) {
        firstActivate = false;
        return;
      }
      const difference = value.filter((x) => !oldValue.includes(x)).concat(oldValue.filter((x) => !value.includes(x)));
      if (!difference || difference.length == 0) {
        return;
      }
      if (difference.length > 1) {
        alert(`Playlist Delta > 1 (Actual: ${difference.length}). Cannot proceed`);
      }
      const isAdd = value.length > oldValue.length;
      const adm = isAdd ? "Added" : "Removed";
      console.log(adm.toString() + difference.toString());
      if (isAdd) {
        const result = await playlistItemApi.addPlaylistItemToPlaylist({
          playlistItemAddRequest: {
            playlistItemId: props.trackId,
            playlistId: difference[0]
          }
        });
        playlistStore.addPlaylistItem(difference[0], result);
        $q.notify({
          position: "top",
          type: "secondary",
          message: `Added to Playlist`
        });
      } else {
        await playlistItemApi.deletePlaylistItemFromPlaylist({
          playlistItemDeleteRequest: {
            playlistItemId: props.trackId,
            playlistId: difference[0]
          }
        });
        playlistStore.removePlaylistItem(difference[0], props.trackId);
        $q.notify({
          position: "top",
          type: "secondary",
          message: `Deleted from Playlist`
        });
      }
    }, { deep: true });
    onMounted(() => {
      playlistStatus.value = playlists.value.filter((i) => playlistStore.hasPlaylistItem(i.id, props.trackId)).map((e) => e.id);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QMenu, {
        anchor: "top end",
        self: "top start"
      }, {
        default: withCtx(() => [
          createVNode(QList, { style: { "min-width": "150px" } }, {
            default: withCtx(() => [
              !playlistCreateActive.value ? (openBlock(), createBlock(QItem, {
                key: 0,
                class: "q-mt-sm",
                clickable: "",
                onClick: onPlaylistCreateBtnClick
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { side: "" }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: "playlist_add",
                        size: "24px",
                        class: "q-px-sm"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          _hoisted_1
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              playlistCreateActive.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  _hoisted_4,
                  createVNode(QInput, {
                    standout: "bg-primary text-white",
                    "input-style": "color: #FFFFFF",
                    modelValue: playlistName.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => playlistName.value = $event),
                    label: "Name"
                  }, null, 8, ["modelValue"]),
                  createVNode(QSelect, {
                    modelValue: playlistVisibility.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => playlistVisibility.value = $event),
                    options: visibilityOptions,
                    label: "Visibility",
                    "popup-content-style": "background-color: #000000"
                  }, null, 8, ["modelValue"]),
                  createVNode(QBtn, {
                    outline: "",
                    class: "q-mt-sm",
                    label: "Create",
                    onClick: createPlaylist
                  })
                ])
              ])) : createCommentVNode("", true),
              createVNode(QSeparator, { spaced: "" }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(playlists), (item) => {
                return withDirectives((openBlock(), createBlock(QItem, {
                  tag: "label",
                  key: item.id
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, {
                      side: "",
                      top: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QCheckbox, {
                          val: item.id,
                          modelValue: unref(playlistStatus),
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(playlistStatus) ? playlistStatus.value = $event : playlistStatus = $event)
                        }, null, 8, ["val", "modelValue"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.name), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)), [
                  [Ripple]
                ]);
              }), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var AddToPlaylistSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AddToPlaylistSelector.vue"]]);
export { AddToPlaylistSelector as A, usePlaylistStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVG9QbGF5bGlzdFNlbGVjdG9yLjJjZjZlODg5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9QbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvYXBpcy9QbGF5bGlzdEl0ZW1BcGkudHMiLCIuLi8uLi8uLi9zcmMvc3RvcmVzL3BsYXlsaXN0U3RvcmUudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BZGRUb1BsYXlsaXN0U2VsZWN0b3IudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cbmltcG9ydCB7IGV4aXN0cywgbWFwVmFsdWVzIH0gZnJvbSAnLi4vcnVudGltZSc7XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RJdGVtQWRkUmVxdWVzdCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUGxheWxpc3RJdGVtQWRkUmVxdWVzdFxuICAgICAqL1xuICAgIHBsYXlsaXN0SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUGxheWxpc3RJdGVtQWRkUmVxdWVzdFxuICAgICAqL1xuICAgIHBsYXlsaXN0SXRlbUlkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3QgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VPZlBsYXlsaXN0SXRlbUFkZFJlcXVlc3QodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWxpc3RJdGVtQWRkUmVxdWVzdEZyb21KU09OKGpzb246IGFueSk6IFBsYXlsaXN0SXRlbUFkZFJlcXVlc3Qge1xuICAgIHJldHVybiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0RnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0RnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0IHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3BsYXlsaXN0SWQnOiAhZXhpc3RzKGpzb24sICdwbGF5bGlzdElkJykgPyB1bmRlZmluZWQgOiBqc29uWydwbGF5bGlzdElkJ10sXG4gICAgICAgICdwbGF5bGlzdEl0ZW1JZCc6ICFleGlzdHMoanNvbiwgJ3BsYXlsaXN0SXRlbUlkJykgPyB1bmRlZmluZWQgOiBqc29uWydwbGF5bGlzdEl0ZW1JZCddLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0VG9KU09OKHZhbHVlPzogUGxheWxpc3RJdGVtQWRkUmVxdWVzdCB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdwbGF5bGlzdElkJzogdmFsdWUucGxheWxpc3RJZCxcbiAgICAgICAgJ3BsYXlsaXN0SXRlbUlkJzogdmFsdWUucGxheWxpc3RJdGVtSWQsXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0XG4gICAgICovXG4gICAgcGxheWxpc3RJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0XG4gICAgICovXG4gICAgcGxheWxpc3RJdGVtSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBnaXZlbiBvYmplY3QgaW1wbGVtZW50cyB0aGUgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCh2YWx1ZTogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgbGV0IGlzSW5zdGFuY2UgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0RnJvbUpTT04oanNvbjogYW55KTogUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCB7XG4gICAgcmV0dXJuIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RGcm9tSlNPTlR5cGVkKGpzb246IGFueSwgaWdub3JlRGlzY3JpbWluYXRvcjogYm9vbGVhbik6IFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3Qge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAncGxheWxpc3RJZCc6ICFleGlzdHMoanNvbiwgJ3BsYXlsaXN0SWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3BsYXlsaXN0SWQnXSxcbiAgICAgICAgJ3BsYXlsaXN0SXRlbUlkJzogIWV4aXN0cyhqc29uLCAncGxheWxpc3RJdGVtSWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3BsYXlsaXN0SXRlbUlkJ10sXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RUb0pTT04odmFsdWU/OiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0IHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3BsYXlsaXN0SWQnOiB2YWx1ZS5wbGF5bGlzdElkLFxuICAgICAgICAncGxheWxpc3RJdGVtSWQnOiB2YWx1ZS5wbGF5bGlzdEl0ZW1JZCxcbiAgICB9O1xufVxuXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5cbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7XG4gIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3QsXG4gIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3QsXG4gIFBsYXlsaXN0SXRlbVJlYWREdG8sXG4gIFByb2JsZW1EZXRhaWxzLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgICBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0RnJvbUpTT04sXG4gICAgUGxheWxpc3RJdGVtQWRkUmVxdWVzdFRvSlNPTixcbiAgICBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0RnJvbUpTT04sXG4gICAgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdFRvSlNPTixcbiAgICBQbGF5bGlzdEl0ZW1SZWFkRHRvRnJvbUpTT04sXG4gICAgUGxheWxpc3RJdGVtUmVhZER0b1RvSlNPTixcbiAgICBQcm9ibGVtRGV0YWlsc0Zyb21KU09OLFxuICAgIFByb2JsZW1EZXRhaWxzVG9KU09OLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSZXF1ZXN0IHtcbiAgICBwbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0PzogUGxheWxpc3RJdGVtQWRkUmVxdWVzdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxldGVQbGF5bGlzdEl0ZW1Gcm9tUGxheWxpc3RSZXF1ZXN0IHtcbiAgICBwbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0PzogUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbmNyZW1lbnRQbGF5Q291bnRSZXF1ZXN0IHtcbiAgICBwbGF5bGlzdElkPzogc3RyaW5nO1xuICAgIHRyYWNrSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogXG4gKi9cbmV4cG9ydCBjbGFzcyBQbGF5bGlzdEl0ZW1BcGkgZXh0ZW5kcyBydW50aW1lLkJhc2VBUEkge1xuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgYWRkUGxheWxpc3RJdGVtVG9QbGF5bGlzdFJhdyhyZXF1ZXN0UGFyYW1ldGVyczogQWRkUGxheWxpc3RJdGVtVG9QbGF5bGlzdFJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8UGxheWxpc3RJdGVtUmVhZER0bz4+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbi1wYXRjaCtqc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvcGxheWxpc3RJdGVtYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1ldGVycyxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgICAgICBib2R5OiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0VG9KU09OKHJlcXVlc3RQYXJhbWV0ZXJzLnBsYXlsaXN0SXRlbUFkZFJlcXVlc3QpLFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuSlNPTkFwaVJlc3BvbnNlKHJlc3BvbnNlLCAoanNvblZhbHVlKSA9PiBQbGF5bGlzdEl0ZW1SZWFkRHRvRnJvbUpTT04oanNvblZhbHVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgYWRkUGxheWxpc3RJdGVtVG9QbGF5bGlzdChyZXF1ZXN0UGFyYW1ldGVyczogQWRkUGxheWxpc3RJdGVtVG9QbGF5bGlzdFJlcXVlc3QgPSB7fSwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8UGxheWxpc3RJdGVtUmVhZER0bz4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYWRkUGxheWxpc3RJdGVtVG9QbGF5bGlzdFJhdyhyZXF1ZXN0UGFyYW1ldGVycywgaW5pdE92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS52YWx1ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGRlbGV0ZVBsYXlsaXN0SXRlbUZyb21QbGF5bGlzdFJhdyhyZXF1ZXN0UGFyYW1ldGVyczogRGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0UmVxdWVzdCwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8cnVudGltZS5BcGlSZXNwb25zZTx2b2lkPj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uLXBhdGNoK2pzb24nO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKTsgLy8gSnd0IGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICBwYXRoOiBgL2FwaS9wbGF5bGlzdEl0ZW1gLFxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgYm9keTogUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdFRvSlNPTihyZXF1ZXN0UGFyYW1ldGVycy5wbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0KSxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLlZvaWRBcGlSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0KHJlcXVlc3RQYXJhbWV0ZXJzOiBEZWxldGVQbGF5bGlzdEl0ZW1Gcm9tUGxheWxpc3RSZXF1ZXN0ID0ge30sIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVQbGF5bGlzdEl0ZW1Gcm9tUGxheWxpc3RSYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGluY3JlbWVudFBsYXlDb3VudFJhdyhyZXF1ZXN0UGFyYW1ldGVyczogSW5jcmVtZW50UGxheUNvdW50UmVxdWVzdCwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8cnVudGltZS5BcGlSZXNwb25zZTx2b2lkPj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGlmIChyZXF1ZXN0UGFyYW1ldGVycy5wbGF5bGlzdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snUGxheWxpc3RJZCddID0gcmVxdWVzdFBhcmFtZXRlcnMucGxheWxpc3RJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0UGFyYW1ldGVycy50cmFja0lkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1ldGVyc1snVHJhY2tJZCddID0gcmVxdWVzdFBhcmFtZXRlcnMudHJhY2tJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvcGxheWxpc3RJdGVtL2luY2AsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuVm9pZEFwaVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBpbmNyZW1lbnRQbGF5Q291bnQocmVxdWVzdFBhcmFtZXRlcnM6IEluY3JlbWVudFBsYXlDb3VudFJlcXVlc3QgPSB7fSwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmluY3JlbWVudFBsYXlDb3VudFJhdyhyZXF1ZXN0UGFyYW1ldGVycywgaW5pdE92ZXJyaWRlcyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge2RlZmluZVN0b3JlfSBmcm9tIFwicGluaWFcIjtcbmltcG9ydCB7UGxheWxpc3RJdGVtUmVhZER0bywgUGxheWxpc3RSZWFkRHRvfSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcblxuZXhwb3J0IGNvbnN0IHVzZVBsYXlsaXN0U3RvcmUgPSBkZWZpbmVTdG9yZSgncGxheWxpc3QnLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIC8vICAgICAgTWFwPFBsYXlsaXN0SWQsIFBsYXlsaXN0T2JqZWN0PlxuICAgIHBsYXlsaXN0c01hcDogbmV3IE1hcDxzdHJpbmcsIFBsYXlsaXN0UmVhZER0bz4oKSxcbiAgICAvLyAgICAgIE1hcDxQbGF5bGlzdElkLCBQbGF5bGlzdEl0ZW1JZD5cbiAgICBwbGF5bGlzdEl0ZW1NYXA6IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKSAsXG4gIH0pLFxuICBnZXR0ZXJzOiB7XG4gICAgZ2V0UGxheWxpc3RzOiAoc3RhdGUpOiBQbGF5bGlzdFJlYWREdG9bXSA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShzdGF0ZS5wbGF5bGlzdHNNYXAudmFsdWVzKCkpO1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIHNldFBsYXlsaXN0cyhwbGF5bGlzdHM6IFBsYXlsaXN0UmVhZER0b1tdKSB7XG4gICAgICBwbGF5bGlzdHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgdGhpcy5wbGF5bGlzdHNNYXAuc2V0KGUuaWQhLCBlKTtcblxuICAgICAgICBjb25zdCB0cmFja3MgPSBlLnRyYWNrcyEubWFwKGkgPT4gaS50cmFja0lkISk7XG4gICAgICAgIHRoaXMucGxheWxpc3RJdGVtTWFwLnNldChlLmlkISwgbmV3IFNldCh0cmFja3MpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWRkUGxheWxpc3QocGxheWxpc3Q6IFBsYXlsaXN0UmVhZER0bykge1xuICAgICAgdGhpcy5wbGF5bGlzdHNNYXAuc2V0KHBsYXlsaXN0LmlkISwgcGxheWxpc3QpO1xuICAgIH0sXG4gICAgYWRkUGxheWxpc3RJdGVtKHBsYXlsaXN0OiBzdHJpbmcsIHBsYXlsaXN0SXRlbTogUGxheWxpc3RJdGVtUmVhZER0bykge1xuICAgICAgdGhpcy5wbGF5bGlzdEl0ZW1NYXAuZ2V0KHBsYXlsaXN0KT8uYWRkKHBsYXlsaXN0SXRlbS50cmFja0lkISk7XG4gICAgfSxcbiAgICByZW1vdmVQbGF5bGlzdEl0ZW0ocGxheWxpc3Q6IHN0cmluZywgcGxheWxpc3RJdGVtOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMucGxheWxpc3RJdGVtTWFwLmdldChwbGF5bGlzdCk/LmRlbGV0ZShwbGF5bGlzdEl0ZW0pO1xuICAgIH0sXG4gICAgaGFzUGxheWxpc3RJdGVtKHBsYXlsaXN0OiBzdHJpbmcsIHBsYXlsaXN0SXRlbTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICBjb25zdCBwID0gdGhpcy5wbGF5bGlzdEl0ZW1NYXAuZ2V0KHBsYXlsaXN0KTtcbiAgICAgIGlmICghcCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwLmhhcyhwbGF5bGlzdEl0ZW0pO1xuICAgIH1cbiAgfVxufSk7XG4iLCI8dGVtcGxhdGU+XG4gIDxxLW1lbnVcbiAgICBhbmNob3I9XCJ0b3AgZW5kXCJcbiAgICBzZWxmPVwidG9wIHN0YXJ0XCJcbiAgPlxuICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4O1wiPlxuICAgICAgPHEtaXRlbSBjbGFzcz1cInEtbXQtc21cIiBjbGlja2FibGUgQGNsaWNrPVwib25QbGF5bGlzdENyZWF0ZUJ0bkNsaWNrXCIgdi1pZj1cIiFwbGF5bGlzdENyZWF0ZUFjdGl2ZVwiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJwbGF5bGlzdF9hZGRcIiBzaXplPVwiMjRweFwiIGNsYXNzPVwicS1weC1zbVwiLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+Q3JlYXRlIFBsYXlsaXN0PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBuby13cmFwIHEtcHgtbWQgcS1wdC1tZFwiIHYtaWY9XCJwbGF5bGlzdENyZWF0ZUFjdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxIHEtbWItc21cIj5DcmVhdGUgUGxheWxpc3Q8L2Rpdj5cbiAgICAgICAgICA8cS1pbnB1dCBzdGFuZG91dD1cImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIGlucHV0LXN0eWxlPVwiY29sb3I6ICNGRkZGRkZcIiB2LW1vZGVsPVwicGxheWxpc3ROYW1lXCIgbGFiZWw9XCJOYW1lXCIvPlxuICAgICAgICAgIDxxLXNlbGVjdCB2LW1vZGVsPVwicGxheWxpc3RWaXNpYmlsaXR5XCIgOm9wdGlvbnM9XCJ2aXNpYmlsaXR5T3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVmlzaWJpbGl0eVwiXG4gICAgICAgICAgICAgICAgICAgIHBvcHVwLWNvbnRlbnQtc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwXCIgLz5cbiAgICAgICAgICA8cS1idG4gb3V0bGluZSBjbGFzcz1cInEtbXQtc21cIiBsYWJlbD1cIkNyZWF0ZVwiIEBjbGljaz1cImNyZWF0ZVBsYXlsaXN0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHEtc2VwYXJhdG9yIHNwYWNlZCAvPlxuICAgICAgPHEtaXRlbSB0YWc9XCJsYWJlbFwiIHYtcmlwcGxlIHYtZm9yPVwiKGl0ZW0pIGluIHBsYXlsaXN0c1wiIDprZXk9XCJpdGVtLmlkXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIHRvcD5cbiAgICAgICAgICA8cS1jaGVja2JveCA6dmFsPVwiaXRlbS5pZFwiIHYtbW9kZWw9XCJwbGF5bGlzdFN0YXR1c1wiLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+e3sgaXRlbS5uYW1lIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cbiAgPC9xLW1lbnU+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHt1c2VQbGF5bGlzdFN0b3JlfSBmcm9tICdzdG9yZXMvcGxheWxpc3RTdG9yZSc7XG5pbXBvcnQge2NvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1BsYXlsaXN0QXBpLCBQbGF5bGlzdEl0ZW1BcGksIFBsYXlsaXN0VmlzaWJpbGl0eX0gZnJvbSBcImFwcC9iYWNrZW5kLXNlcnZpY2UtYXBpXCI7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tIFwic3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyXCI7XG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSBcInF1YXNhclwiO1xuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIHRyYWNrSWQ6IHN0cmluZ1xufT4oKTtcblxubGV0IGZpcnN0QWN0aXZhdGUgPSB0cnVlO1xuXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuY29uc3QgcGxheWxpc3RTdG9yZSA9IHVzZVBsYXlsaXN0U3RvcmUoKTtcblxuY29uc3QgcGxheWxpc3RzID0gY29tcHV0ZWQoKCkgPT4gcGxheWxpc3RTdG9yZS5nZXRQbGF5bGlzdHMpO1xuY29uc3QgcGxheWxpc3RBcGkgPSBuZXcgUGxheWxpc3RBcGkoQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKSk7XG5jb25zdCBwbGF5bGlzdEl0ZW1BcGkgPSBuZXcgUGxheWxpc3RJdGVtQXBpKEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKCkpO1xuXG5jb25zdCBvblBsYXlsaXN0Q3JlYXRlQnRuQ2xpY2sgPSAoKSA9PiB7IHBsYXlsaXN0Q3JlYXRlQWN0aXZlLnZhbHVlID0gdHJ1ZSB9XG5jb25zdCBwbGF5bGlzdENyZWF0ZUFjdGl2ZSA9IHJlZihmYWxzZSk7XG5jb25zdCBwbGF5bGlzdE5hbWUgPSByZWYoKTtcbmNvbnN0IHBsYXlsaXN0VmlzaWJpbGl0eSA9IHJlZihQbGF5bGlzdFZpc2liaWxpdHkuUHJpdmF0ZSk7XG5jb25zdCB2aXNpYmlsaXR5T3B0aW9ucyA9IFtQbGF5bGlzdFZpc2liaWxpdHkuUHVibGljLCBQbGF5bGlzdFZpc2liaWxpdHkuVW5saXN0ZWQsIFBsYXlsaXN0VmlzaWJpbGl0eS5Qcml2YXRlXVxuY29uc3QgY3JlYXRlUGxheWxpc3QgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBsYXlsaXN0QXBpLmNyZWF0ZVBsYXlsaXN0KHtcbiAgICBwbGF5bGlzdENyZWF0ZVJlcXVlc3Q6IHtcbiAgICAgIG5hbWU6IHBsYXlsaXN0TmFtZS52YWx1ZSxcbiAgICAgIHZpc2liaWxpdHk6IHBsYXlsaXN0VmlzaWJpbGl0eS52YWx1ZVxuICAgIH1cbiAgfSk7XG5cbiAgcGxheWxpc3RTdG9yZS5hZGRQbGF5bGlzdChyZXN1bHQpO1xuICAkcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiBgUGxheWxpc3QgQ3JlYXRlZGBcbiAgfSk7XG5cbiAgY29uc3QgciA9IGF3YWl0IHBsYXlsaXN0SXRlbUFwaS5hZGRQbGF5bGlzdEl0ZW1Ub1BsYXlsaXN0KHtwbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0OiB7XG4gICAgICBwbGF5bGlzdElkOiByZXN1bHQuaWQhLFxuICAgICAgcGxheWxpc3RJdGVtSWQ6IHByb3BzLnRyYWNrSWRcbiAgICB9fSk7XG5cbiAgcGxheWxpc3RTdG9yZS5hZGRQbGF5bGlzdEl0ZW0ocmVzdWx0LmlkISwgcik7XG5cbiAgJHEubm90aWZ5KHtcbiAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgdHlwZTogJ3NlY29uZGFyeScsXG4gICAgbWVzc2FnZTogYEFkZGVkIHRvIFBsYXlsaXN0YFxuICB9KTtcblxuICBwbGF5bGlzdENyZWF0ZUFjdGl2ZS52YWx1ZSA9IGZhbHNlO1xufVxuXG5sZXQgcGxheWxpc3RTdGF0dXMgPSByZWY8c3RyaW5nW10+KFtdKTtcblxud2F0Y2gocGxheWxpc3RTdGF0dXMsIGFzeW5jICh2YWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgaWYgKGZpcnN0QWN0aXZhdGUpIHtcbiAgICBmaXJzdEFjdGl2YXRlID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSB2YWx1ZSFcbiAgICAuZmlsdGVyKHggPT4gIW9sZFZhbHVlIS5pbmNsdWRlcyh4KSlcbiAgICAuY29uY2F0KG9sZFZhbHVlIS5maWx0ZXIoeCA9PiAhdmFsdWUhLmluY2x1ZGVzKHgpKSk7XG5cbiAgaWYgKCFkaWZmZXJlbmNlIHx8IGRpZmZlcmVuY2UubGVuZ3RoID09IDApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZGlmZmVyZW5jZS5sZW5ndGggPiAxKSB7XG4gICAgYWxlcnQoYFBsYXlsaXN0IERlbHRhID4gMSAoQWN0dWFsOiAke2RpZmZlcmVuY2UubGVuZ3RofSkuIENhbm5vdCBwcm9jZWVkYClcbiAgfVxuXG4gIGNvbnN0IGlzQWRkID0gdmFsdWUubGVuZ3RoID4gb2xkVmFsdWUubGVuZ3RoO1xuICBjb25zdCBhZG0gPSBpc0FkZCA/ICdBZGRlZCcgOiAnUmVtb3ZlZCc7XG4gIGNvbnNvbGUubG9nKGFkbS50b1N0cmluZygpICsgZGlmZmVyZW5jZS50b1N0cmluZygpKVxuXG4gIGlmIChpc0FkZCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBsYXlsaXN0SXRlbUFwaS5hZGRQbGF5bGlzdEl0ZW1Ub1BsYXlsaXN0KHtcbiAgICAgIHBsYXlsaXN0SXRlbUFkZFJlcXVlc3Q6IHtcbiAgICAgICAgcGxheWxpc3RJdGVtSWQ6IHByb3BzLnRyYWNrSWQsXG4gICAgICAgIHBsYXlsaXN0SWQ6IGRpZmZlcmVuY2VbMF1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXlsaXN0U3RvcmUuYWRkUGxheWxpc3RJdGVtKGRpZmZlcmVuY2VbMF0sIHJlc3VsdCk7XG4gICAgJHEubm90aWZ5KHtcbiAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgICAgbWVzc2FnZTogYEFkZGVkIHRvIFBsYXlsaXN0YFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBsYXlsaXN0SXRlbUFwaS5kZWxldGVQbGF5bGlzdEl0ZW1Gcm9tUGxheWxpc3Qoe1xuICAgICAgcGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdDoge1xuICAgICAgICBwbGF5bGlzdEl0ZW1JZDogcHJvcHMudHJhY2tJZCxcbiAgICAgICAgcGxheWxpc3RJZDogZGlmZmVyZW5jZVswXVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWxpc3RTdG9yZS5yZW1vdmVQbGF5bGlzdEl0ZW0oZGlmZmVyZW5jZVswXSwgcHJvcHMudHJhY2tJZCk7XG4gICAgJHEubm90aWZ5KHtcbiAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgICAgbWVzc2FnZTogYERlbGV0ZWQgZnJvbSBQbGF5bGlzdGBcbiAgICB9KTtcbiAgfVxufSwge2RlZXA6IHRydWV9KVxuXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBwbGF5bGlzdFN0YXR1cy52YWx1ZSA9IHBsYXlsaXN0cy52YWx1ZS5maWx0ZXIoaSA9PiBwbGF5bGlzdFN0b3JlLmhhc1BsYXlsaXN0SXRlbShpLmlkISwgcHJvcHMudHJhY2tJZCkpLm1hcChlID0+IGUuaWQhKTtcbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJydW50aW1lLkJhc2VBUEkiLCJydW50aW1lLkpTT05BcGlSZXNwb25zZSIsInJ1bnRpbWUuVm9pZEFwaVJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUEyRE8sU0FBUyw2QkFBNkIsT0FBNEM7QUFDckYsTUFBSSxVQUFVLFFBQVc7QUFDZCxXQUFBO0FBQUEsRUFDWDtBQUNBLE1BQUksVUFBVSxNQUFNO0FBQ1QsV0FBQTtBQUFBLEVBQ1g7QUFDTyxTQUFBO0FB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Q2hCLE9BQU8sT0FBSyxDQUFDLFNBQVUsU0FBUyxDQUFDLENBQUMsRUFDbEMsT0FBTyxTQUFVLE9BQU8sQ0FBSyxNQUFBLENBQUMsTUFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBRXBELFVBQUksQ0FBQyxjQUFjLFdBQVcsVUFBVSxHQUFHO0FBQ3pDO0FBQUEsTUFDRjtBQUVJLFVBQUEsV0FBVyxTQUFTLEdBQUc7QUFDbkIsY0FBQSwrQkFBK0IsV0FBVyx5QkFBeUI7QUFBQSxNQUMzRTtBQUVNLFlBQUEsUUFBUSxNQUFNLFNBQVMsU0FBUztBQUNoQyxZQUFBLE1BQU0sUUFBUSxVQUFVO0FBQzlCLGNBQVEsSUFBSSxJQUFJLFNBQWEsSUFBQSxXQUFXLFVBQVU7QUFFbEQsVUFBSSxPQUFPO0FBQ0gsY0FBQSxTQUFTLE1BQU0sZ0JBQWdCLDBCQUEwQjtBQUFBLFVBQzdELHdCQUF3QjtBQUFBLFlBQ3RCLGdCQUFnQixNQUFNO0FBQUEsWUFDdEIsWUFBWSxXQUFXO0FBQUEsVUFDekI7QUFBQSxRQUFBLENBQ0Q7QUFFYSxzQkFBQSxnQkFBZ0IsV0FBVyxJQUFJLE1BQU07QUFDbkQsV0FBRyxPQUFPO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsUUFBQSxDQUNWO0FBQUEsTUFBQSxPQUNJO0FBQ1UsY0FBTSxnQkFBZ0IsK0JBQStCO0FBQUEsVUFDbEUsMkJBQTJCO0FBQUEsWUFDekIsZ0JBQWdCLE1BQU07QUFBQSxZQUN0QixZQUFZLFdBQVc7QUFBQSxVQUN6QjtBQUFBLFFBQUEsQ0FDRDtBQUVELHNCQUFjLG1CQUFtQixXQUFXLElBQUksTUFBTSxPQUFPO0FBQzdELFdBQUcsT0FBTztBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFFBQUEsQ0FDVjtBQUFBLE1BQ0g7QUFBQSxJQUFBLEdBQ0MsRUFBQyxNQUFNLEtBQUEsQ0FBSztBQUVmLGNBQVUsTUFBTTtBQUNkLHFCQUFlLFFBQVEsVUFBVSxNQUFNLE9BQU8sQ0FBQSxNQUFLLGNBQWMsZ0JBQWdCLEVBQUUsSUFBSyxNQUFNLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQSxNQUFLLEVBQUUsRUFBRztBQUFBLElBQUEsQ0FDdkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

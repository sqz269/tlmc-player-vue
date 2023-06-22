import { bn as BaseAPI, bo as JSONApiResponse, bt as VoidApiResponse, ac as defineStore, _ as _export_sfc, M as defineComponent, c as computed, aN as ApiConfigProvider, r as ref, w as watch, o as onMounted, P as openBlock, R as createBlock, S as withCtx, d as createVNode, ad as QIcon, a0 as createCommentVNode, a9 as createElementBlock, V as createBaseVNode, bu as QInput, Y as QBtn, ai as QSeparator, ao as renderList, B as withDirectives, av as Ripple, bv as QCheckbox, Z as unref, b as isRef, aa as createTextVNode, W as toDisplayString, F as Fragment } from "./index.b3ce9310.js";
import { a as QItem, Q as QItemSection, b as QMenu } from "./QMenu.7b28f804.js";
import { Q as QItemLabel, a as QSelect } from "./QSelect.6866b138.js";
import { Q as QList } from "./QList.80458232.js";
import { a as PlaylistItemReadDtoFromJSON, P as PlaylistApi, b as PlaylistVisibility } from "./ClosePopup.a457828b.js";
import { u as useQuasar } from "./use-quasar.5e4ff705.js";
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
      if (!this.playlistsMap.has(playlist)) {
        alert("Playlist Does Not Exist");
        return;
      }
      (_a = this.playlistItemMap.get(playlist)) == null ? void 0 : _a.add(playlistItem.trackId);
      this.playlistsMap.get(playlist).lastModified = new Date();
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
    const playlists = computed(() => {
      const pl = playlistStore.getPlaylists;
      return pl.sort((a, b) => a.lastModified.getTime() - b.lastModified.getTime()).reverse();
    });
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
      playlistStatus.value.push(result.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVG9QbGF5bGlzdFNlbGVjdG9yLmY5YWFlMjYyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9QbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvYXBpcy9QbGF5bGlzdEl0ZW1BcGkudHMiLCIuLi8uLi8uLi9zcmMvc3RvcmVzL3BsYXlsaXN0U3RvcmUudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BZGRUb1BsYXlsaXN0U2VsZWN0b3IudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cbmltcG9ydCB7IGV4aXN0cywgbWFwVmFsdWVzIH0gZnJvbSAnLi4vcnVudGltZSc7XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RJdGVtQWRkUmVxdWVzdCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUGxheWxpc3RJdGVtQWRkUmVxdWVzdFxuICAgICAqL1xuICAgIHBsYXlsaXN0SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUGxheWxpc3RJdGVtQWRkUmVxdWVzdFxuICAgICAqL1xuICAgIHBsYXlsaXN0SXRlbUlkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3QgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VPZlBsYXlsaXN0SXRlbUFkZFJlcXVlc3QodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWxpc3RJdGVtQWRkUmVxdWVzdEZyb21KU09OKGpzb246IGFueSk6IFBsYXlsaXN0SXRlbUFkZFJlcXVlc3Qge1xuICAgIHJldHVybiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0RnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0RnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0IHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3BsYXlsaXN0SWQnOiAhZXhpc3RzKGpzb24sICdwbGF5bGlzdElkJykgPyB1bmRlZmluZWQgOiBqc29uWydwbGF5bGlzdElkJ10sXG4gICAgICAgICdwbGF5bGlzdEl0ZW1JZCc6ICFleGlzdHMoanNvbiwgJ3BsYXlsaXN0SXRlbUlkJykgPyB1bmRlZmluZWQgOiBqc29uWydwbGF5bGlzdEl0ZW1JZCddLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0VG9KU09OKHZhbHVlPzogUGxheWxpc3RJdGVtQWRkUmVxdWVzdCB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdwbGF5bGlzdElkJzogdmFsdWUucGxheWxpc3RJZCxcbiAgICAgICAgJ3BsYXlsaXN0SXRlbUlkJzogdmFsdWUucGxheWxpc3RJdGVtSWQsXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0XG4gICAgICovXG4gICAgcGxheWxpc3RJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0XG4gICAgICovXG4gICAgcGxheWxpc3RJdGVtSWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBnaXZlbiBvYmplY3QgaW1wbGVtZW50cyB0aGUgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCh2YWx1ZTogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgbGV0IGlzSW5zdGFuY2UgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0RnJvbUpTT04oanNvbjogYW55KTogUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCB7XG4gICAgcmV0dXJuIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RGcm9tSlNPTlR5cGVkKGpzb246IGFueSwgaWdub3JlRGlzY3JpbWluYXRvcjogYm9vbGVhbik6IFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3Qge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAncGxheWxpc3RJZCc6ICFleGlzdHMoanNvbiwgJ3BsYXlsaXN0SWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3BsYXlsaXN0SWQnXSxcbiAgICAgICAgJ3BsYXlsaXN0SXRlbUlkJzogIWV4aXN0cyhqc29uLCAncGxheWxpc3RJdGVtSWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3BsYXlsaXN0SXRlbUlkJ10sXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RUb0pTT04odmFsdWU/OiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0IHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3BsYXlsaXN0SWQnOiB2YWx1ZS5wbGF5bGlzdElkLFxuICAgICAgICAncGxheWxpc3RJdGVtSWQnOiB2YWx1ZS5wbGF5bGlzdEl0ZW1JZCxcbiAgICB9O1xufVxuXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5cbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi4vcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7XG4gIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3QsXG4gIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3QsXG4gIFBsYXlsaXN0SXRlbVJlYWREdG8sXG4gIFByb2JsZW1EZXRhaWxzLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgICBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0RnJvbUpTT04sXG4gICAgUGxheWxpc3RJdGVtQWRkUmVxdWVzdFRvSlNPTixcbiAgICBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0RnJvbUpTT04sXG4gICAgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdFRvSlNPTixcbiAgICBQbGF5bGlzdEl0ZW1SZWFkRHRvRnJvbUpTT04sXG4gICAgUGxheWxpc3RJdGVtUmVhZER0b1RvSlNPTixcbiAgICBQcm9ibGVtRGV0YWlsc0Zyb21KU09OLFxuICAgIFByb2JsZW1EZXRhaWxzVG9KU09OLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSZXF1ZXN0IHtcbiAgICBwbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0PzogUGxheWxpc3RJdGVtQWRkUmVxdWVzdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEZWxldGVQbGF5bGlzdEl0ZW1Gcm9tUGxheWxpc3RSZXF1ZXN0IHtcbiAgICBwbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0PzogUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdDtcbn1cblxuLyoqXG4gKiBcbiAqL1xuZXhwb3J0IGNsYXNzIFBsYXlsaXN0SXRlbUFwaSBleHRlbmRzIHJ1bnRpbWUuQmFzZUFQSSB7XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBhZGRQbGF5bGlzdEl0ZW1Ub1BsYXlsaXN0UmF3KHJlcXVlc3RQYXJhbWV0ZXJzOiBBZGRQbGF5bGlzdEl0ZW1Ub1BsYXlsaXN0UmVxdWVzdCwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8cnVudGltZS5BcGlSZXNwb25zZTxQbGF5bGlzdEl0ZW1SZWFkRHRvPj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uLXBhdGNoK2pzb24nO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKTsgLy8gSnd0IGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICBwYXRoOiBgL2FwaS9wbGF5bGlzdEl0ZW1gLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgIGJvZHk6IFBsYXlsaXN0SXRlbUFkZFJlcXVlc3RUb0pTT04ocmVxdWVzdFBhcmFtZXRlcnMucGxheWxpc3RJdGVtQWRkUmVxdWVzdCksXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5KU09OQXBpUmVzcG9uc2UocmVzcG9uc2UsIChqc29uVmFsdWUpID0+IFBsYXlsaXN0SXRlbVJlYWREdG9Gcm9tSlNPTihqc29uVmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBhZGRQbGF5bGlzdEl0ZW1Ub1BsYXlsaXN0KHJlcXVlc3RQYXJhbWV0ZXJzOiBBZGRQbGF5bGlzdEl0ZW1Ub1BsYXlsaXN0UmVxdWVzdCA9IHt9LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxQbGF5bGlzdEl0ZW1SZWFkRHRvPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5hZGRQbGF5bGlzdEl0ZW1Ub1BsYXlsaXN0UmF3KHJlcXVlc3RQYXJhbWV0ZXJzLCBpbml0T3ZlcnJpZGVzKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnZhbHVlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0UmF3KHJlcXVlc3RQYXJhbWV0ZXJzOiBEZWxldGVQbGF5bGlzdEl0ZW1Gcm9tUGxheWxpc3RSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPHZvaWQ+PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1ldGVyczogYW55ID0ge307XG5cbiAgICAgICAgY29uc3QgaGVhZGVyUGFyYW1ldGVyczogcnVudGltZS5IVFRQSGVhZGVycyA9IHt9O1xuXG4gICAgICAgIGhlYWRlclBhcmFtZXRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24tcGF0Y2granNvbic7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL3BsYXlsaXN0SXRlbWAsXG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1ldGVycyxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgICAgICBib2R5OiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0VG9KU09OKHJlcXVlc3RQYXJhbWV0ZXJzLnBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3QpLFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuVm9pZEFwaVJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBkZWxldGVQbGF5bGlzdEl0ZW1Gcm9tUGxheWxpc3QocmVxdWVzdFBhcmFtZXRlcnM6IERlbGV0ZVBsYXlsaXN0SXRlbUZyb21QbGF5bGlzdFJlcXVlc3QgPSB7fSwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLmRlbGV0ZVBsYXlsaXN0SXRlbUZyb21QbGF5bGlzdFJhdyhyZXF1ZXN0UGFyYW1ldGVycywgaW5pdE92ZXJyaWRlcyk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQge2RlZmluZVN0b3JlfSBmcm9tIFwicGluaWFcIjtcbmltcG9ydCB7UGxheWxpc3RJdGVtUmVhZER0bywgUGxheWxpc3RSZWFkRHRvfSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcblxuZXhwb3J0IGNvbnN0IHVzZVBsYXlsaXN0U3RvcmUgPSBkZWZpbmVTdG9yZSgncGxheWxpc3QnLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIC8vICAgICAgTWFwPFBsYXlsaXN0SWQsIFBsYXlsaXN0T2JqZWN0PlxuICAgIHBsYXlsaXN0c01hcDogbmV3IE1hcDxzdHJpbmcsIFBsYXlsaXN0UmVhZER0bz4oKSxcbiAgICAvLyAgICAgIE1hcDxQbGF5bGlzdElkLCBQbGF5bGlzdEl0ZW1JZD5cbiAgICBwbGF5bGlzdEl0ZW1NYXA6IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKSAsXG4gIH0pLFxuICBnZXR0ZXJzOiB7XG4gICAgZ2V0UGxheWxpc3RzOiAoc3RhdGUpOiBQbGF5bGlzdFJlYWREdG9bXSA9PiB7XG4gICAgICByZXR1cm4gQXJyYXkuZnJvbShzdGF0ZS5wbGF5bGlzdHNNYXAudmFsdWVzKCkpO1xuICAgIH1cbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIHNldFBsYXlsaXN0cyhwbGF5bGlzdHM6IFBsYXlsaXN0UmVhZER0b1tdKSB7XG4gICAgICBwbGF5bGlzdHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgdGhpcy5wbGF5bGlzdHNNYXAuc2V0KGUuaWQhLCBlKTtcblxuICAgICAgICBjb25zdCB0cmFja3MgPSBlLnRyYWNrcyEubWFwKGkgPT4gaS50cmFja0lkISk7XG4gICAgICAgIHRoaXMucGxheWxpc3RJdGVtTWFwLnNldChlLmlkISwgbmV3IFNldCh0cmFja3MpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgYWRkUGxheWxpc3QocGxheWxpc3Q6IFBsYXlsaXN0UmVhZER0bykge1xuICAgICAgdGhpcy5wbGF5bGlzdHNNYXAuc2V0KHBsYXlsaXN0LmlkISwgcGxheWxpc3QpO1xuICAgIH0sXG4gICAgYWRkUGxheWxpc3RJdGVtKHBsYXlsaXN0OiBzdHJpbmcsIHBsYXlsaXN0SXRlbTogUGxheWxpc3RJdGVtUmVhZER0bykge1xuICAgICAgaWYgKCF0aGlzLnBsYXlsaXN0c01hcC5oYXMocGxheWxpc3QpKSB7XG4gICAgICAgIGFsZXJ0KCdQbGF5bGlzdCBEb2VzIE5vdCBFeGlzdCcpXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wbGF5bGlzdEl0ZW1NYXAuZ2V0KHBsYXlsaXN0KT8uYWRkKHBsYXlsaXN0SXRlbS50cmFja0lkISk7XG4gICAgICB0aGlzLnBsYXlsaXN0c01hcC5nZXQocGxheWxpc3QpIS5sYXN0TW9kaWZpZWQgPSBuZXcgRGF0ZSgpO1xuICAgIH0sXG4gICAgcmVtb3ZlUGxheWxpc3RJdGVtKHBsYXlsaXN0OiBzdHJpbmcsIHBsYXlsaXN0SXRlbTogc3RyaW5nKSB7XG4gICAgICB0aGlzLnBsYXlsaXN0SXRlbU1hcC5nZXQocGxheWxpc3QpPy5kZWxldGUocGxheWxpc3RJdGVtKTtcbiAgICB9LFxuICAgIGhhc1BsYXlsaXN0SXRlbShwbGF5bGlzdDogc3RyaW5nLCBwbGF5bGlzdEl0ZW06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgcCA9IHRoaXMucGxheWxpc3RJdGVtTWFwLmdldChwbGF5bGlzdCk7XG4gICAgICBpZiAoIXApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcC5oYXMocGxheWxpc3RJdGVtKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiPHRlbXBsYXRlPlxuICA8cS1tZW51XG4gICAgYW5jaG9yPVwidG9wIGVuZFwiXG4gICAgc2VsZj1cInRvcCBzdGFydFwiXG4gID5cbiAgICA8cS1saXN0IHN0eWxlPVwibWluLXdpZHRoOiAxNTBweDtcIj5cbiAgICAgIDxxLWl0ZW0gY2xhc3M9XCJxLW10LXNtXCIgY2xpY2thYmxlIEBjbGljaz1cIm9uUGxheWxpc3RDcmVhdGVCdG5DbGlja1wiIHYtaWY9XCIhcGxheWxpc3RDcmVhdGVBY3RpdmVcIj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtaWNvbiBuYW1lPVwicGxheWxpc3RfYWRkXCIgc2l6ZT1cIjI0cHhcIiBjbGFzcz1cInEtcHgtc21cIi8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPkNyZWF0ZSBQbGF5bGlzdDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbm8td3JhcCBxLXB4LW1kIHEtcHQtbWRcIiB2LWlmPVwicGxheWxpc3RDcmVhdGVBY3RpdmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSBxLW1iLXNtXCI+Q3JlYXRlIFBsYXlsaXN0PC9kaXY+XG4gICAgICAgICAgPHEtaW5wdXQgc3RhbmRvdXQ9XCJiZy1wcmltYXJ5IHRleHQtd2hpdGVcIiBpbnB1dC1zdHlsZT1cImNvbG9yOiAjRkZGRkZGXCIgdi1tb2RlbD1cInBsYXlsaXN0TmFtZVwiIGxhYmVsPVwiTmFtZVwiLz5cbiAgICAgICAgICA8cS1zZWxlY3Qgdi1tb2RlbD1cInBsYXlsaXN0VmlzaWJpbGl0eVwiIDpvcHRpb25zPVwidmlzaWJpbGl0eU9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxuICAgICAgICAgICAgICAgICAgICBwb3B1cC1jb250ZW50LXN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMFwiIC8+XG4gICAgICAgICAgPHEtYnRuIG91dGxpbmUgY2xhc3M9XCJxLW10LXNtXCIgbGFiZWw9XCJDcmVhdGVcIiBAY2xpY2s9XCJjcmVhdGVQbGF5bGlzdFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxxLXNlcGFyYXRvciBzcGFjZWQgLz5cbiAgICAgIDxxLWl0ZW0gdGFnPVwibGFiZWxcIiB2LXJpcHBsZSB2LWZvcj1cIihpdGVtKSBpbiBwbGF5bGlzdHNcIiA6a2V5PVwiaXRlbS5pZFwiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZSB0b3A+XG4gICAgICAgICAgPHEtY2hlY2tib3ggOnZhbD1cIml0ZW0uaWRcIiB2LW1vZGVsPVwicGxheWxpc3RTdGF0dXNcIi8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPnt7IGl0ZW0ubmFtZSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gIDwvcS1tZW51PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7dXNlUGxheWxpc3RTdG9yZX0gZnJvbSAnc3RvcmVzL3BsYXlsaXN0U3RvcmUnO1xuaW1wb3J0IHtjb21wdXRlZCwgb25Nb3VudGVkLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHtQbGF5bGlzdEFwaSwgUGxheWxpc3RJdGVtQXBpLCBQbGF5bGlzdFZpc2liaWxpdHl9IGZyb20gXCJhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaVwiO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSBcInNyYy91dGlscy9BcGlDb25maWdQcm92aWRlclwiO1xuaW1wb3J0IHt1c2VRdWFzYXJ9IGZyb20gXCJxdWFzYXJcIjtcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICB0cmFja0lkOiBzdHJpbmdcbn0+KCk7XG5cbmxldCBmaXJzdEFjdGl2YXRlID0gdHJ1ZTtcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHBsYXlsaXN0U3RvcmUgPSB1c2VQbGF5bGlzdFN0b3JlKCk7XG5cbmNvbnN0IHBsYXlsaXN0cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgY29uc3QgcGwgPSBwbGF5bGlzdFN0b3JlLmdldFBsYXlsaXN0cztcbiAgcmV0dXJuIHBsLnNvcnQoKGEsIGIpID0+IChhLmxhc3RNb2RpZmllZCEuZ2V0VGltZSgpIC0gYi5sYXN0TW9kaWZpZWQhLmdldFRpbWUoKSkpLnJldmVyc2UoKVxufSk7XG5jb25zdCBwbGF5bGlzdEFwaSA9IG5ldyBQbGF5bGlzdEFwaShBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpKTtcbmNvbnN0IHBsYXlsaXN0SXRlbUFwaSA9IG5ldyBQbGF5bGlzdEl0ZW1BcGkoQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKSk7XG5cbmNvbnN0IG9uUGxheWxpc3RDcmVhdGVCdG5DbGljayA9ICgpID0+IHsgcGxheWxpc3RDcmVhdGVBY3RpdmUudmFsdWUgPSB0cnVlIH1cbmNvbnN0IHBsYXlsaXN0Q3JlYXRlQWN0aXZlID0gcmVmKGZhbHNlKTtcbmNvbnN0IHBsYXlsaXN0TmFtZSA9IHJlZigpO1xuY29uc3QgcGxheWxpc3RWaXNpYmlsaXR5ID0gcmVmKFBsYXlsaXN0VmlzaWJpbGl0eS5Qcml2YXRlKTtcbmNvbnN0IHZpc2liaWxpdHlPcHRpb25zID0gW1BsYXlsaXN0VmlzaWJpbGl0eS5QdWJsaWMsIFBsYXlsaXN0VmlzaWJpbGl0eS5Vbmxpc3RlZCwgUGxheWxpc3RWaXNpYmlsaXR5LlByaXZhdGVdXG5jb25zdCBjcmVhdGVQbGF5bGlzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGxheWxpc3RBcGkuY3JlYXRlUGxheWxpc3Qoe1xuICAgIHBsYXlsaXN0Q3JlYXRlUmVxdWVzdDoge1xuICAgICAgbmFtZTogcGxheWxpc3ROYW1lLnZhbHVlLFxuICAgICAgdmlzaWJpbGl0eTogcGxheWxpc3RWaXNpYmlsaXR5LnZhbHVlXG4gICAgfVxuICB9KTtcblxuICBwbGF5bGlzdFN0b3JlLmFkZFBsYXlsaXN0KHJlc3VsdCk7XG4gICRxLm5vdGlmeSh7XG4gICAgcG9zaXRpb246ICd0b3AnLFxuICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgIG1lc3NhZ2U6IGBQbGF5bGlzdCBDcmVhdGVkYFxuICB9KTtcblxuICAvLyBjb25zdCByID0gYXdhaXQgcGxheWxpc3RJdGVtQXBpLmFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3Qoe3BsYXlsaXN0SXRlbUFkZFJlcXVlc3Q6IHtcbiAgLy8gICAgIHBsYXlsaXN0SWQ6IHJlc3VsdC5pZCEsXG4gIC8vICAgICBwbGF5bGlzdEl0ZW1JZDogcHJvcHMudHJhY2tJZFxuICAvLyAgIH19KTtcblxuICBwbGF5bGlzdFN0YXR1cy52YWx1ZS5wdXNoKHJlc3VsdC5pZCEpO1xuXG4gICRxLm5vdGlmeSh7XG4gICAgcG9zaXRpb246ICd0b3AnLFxuICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgIG1lc3NhZ2U6IGBBZGRlZCB0byBQbGF5bGlzdGBcbiAgfSk7XG5cbiAgcGxheWxpc3RDcmVhdGVBY3RpdmUudmFsdWUgPSBmYWxzZTtcbn1cblxubGV0IHBsYXlsaXN0U3RhdHVzID0gcmVmPHN0cmluZ1tdPihbXSk7XG5cbndhdGNoKHBsYXlsaXN0U3RhdHVzLCBhc3luYyAodmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gIGlmIChmaXJzdEFjdGl2YXRlKSB7XG4gICAgZmlyc3RBY3RpdmF0ZSA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkaWZmZXJlbmNlID0gdmFsdWUhXG4gICAgLmZpbHRlcih4ID0+ICFvbGRWYWx1ZSEuaW5jbHVkZXMoeCkpXG4gICAgLmNvbmNhdChvbGRWYWx1ZSEuZmlsdGVyKHggPT4gIXZhbHVlIS5pbmNsdWRlcyh4KSkpO1xuXG4gIGlmICghZGlmZmVyZW5jZSB8fCBkaWZmZXJlbmNlLmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRpZmZlcmVuY2UubGVuZ3RoID4gMSkge1xuICAgIGFsZXJ0KGBQbGF5bGlzdCBEZWx0YSA+IDEgKEFjdHVhbDogJHtkaWZmZXJlbmNlLmxlbmd0aH0pLiBDYW5ub3QgcHJvY2VlZGApXG4gIH1cblxuICBjb25zdCBpc0FkZCA9IHZhbHVlLmxlbmd0aCA+IG9sZFZhbHVlLmxlbmd0aDtcbiAgY29uc3QgYWRtID0gaXNBZGQgPyAnQWRkZWQnIDogJ1JlbW92ZWQnO1xuICBjb25zb2xlLmxvZyhhZG0udG9TdHJpbmcoKSArIGRpZmZlcmVuY2UudG9TdHJpbmcoKSlcblxuICBpZiAoaXNBZGQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwbGF5bGlzdEl0ZW1BcGkuYWRkUGxheWxpc3RJdGVtVG9QbGF5bGlzdCh7XG4gICAgICBwbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0OiB7XG4gICAgICAgIHBsYXlsaXN0SXRlbUlkOiBwcm9wcy50cmFja0lkLFxuICAgICAgICBwbGF5bGlzdElkOiBkaWZmZXJlbmNlWzBdXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5bGlzdFN0b3JlLmFkZFBsYXlsaXN0SXRlbShkaWZmZXJlbmNlWzBdLCByZXN1bHQpO1xuICAgICRxLm5vdGlmeSh7XG4gICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICAgIG1lc3NhZ2U6IGBBZGRlZCB0byBQbGF5bGlzdGBcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwbGF5bGlzdEl0ZW1BcGkuZGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0KHtcbiAgICAgIHBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3Q6IHtcbiAgICAgICAgcGxheWxpc3RJdGVtSWQ6IHByb3BzLnRyYWNrSWQsXG4gICAgICAgIHBsYXlsaXN0SWQ6IGRpZmZlcmVuY2VbMF1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXlsaXN0U3RvcmUucmVtb3ZlUGxheWxpc3RJdGVtKGRpZmZlcmVuY2VbMF0sIHByb3BzLnRyYWNrSWQpO1xuICAgICRxLm5vdGlmeSh7XG4gICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICAgIG1lc3NhZ2U6IGBEZWxldGVkIGZyb20gUGxheWxpc3RgXG4gICAgfSk7XG4gIH1cbn0sIHtkZWVwOiB0cnVlfSlcblxub25Nb3VudGVkKCgpID0+IHtcbiAgcGxheWxpc3RTdGF0dXMudmFsdWUgPSBwbGF5bGlzdHMudmFsdWUuZmlsdGVyKGkgPT4gcGxheWxpc3RTdG9yZS5oYXNQbGF5bGlzdEl0ZW0oaS5pZCEsIHByb3BzLnRyYWNrSWQpKS5tYXAoZSA9PiBlLmlkISk7XG59KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsicnVudGltZS5CYXNlQVBJIiwicnVudGltZS5KU09OQXBpUmVzcG9uc2UiLCJydW50aW1lLlZvaWRBcGlSZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBMkRPLFNBQVMsNkJBQTZCLE9BQTRDO0FBQ3JGLE1BQUksVUFBVSxRQUFXO0FBQ2QsV0FBQTtBQUFBLEVBQ1g7QUFDQSxNQUFJLFVBQVUsTUFBTTtBQUNULFdBQUE7QUFBQSxFQUNYO0FBQ08sU0FBQTtBQUFBLElBRUgsY0FBYyxNQUFNO0FBQUEsSUFDcEIsa0JBQWtCLE1BQU07QUFBQSxFQUFBO0FBRWhDO0FDWk8sU0FBUyxnQ0FBZ0MsT0FBK0M7QUFDM0YsTUFBSSxVQUFVLFFBQVc7QUFDZCxXQUFBO0FBQUEsRUFDWDtBQUNBLE1BQUksVUFBVSxNQUFNO0FBQ1QsV0FBQTtBQUFBLEVBQ1g7QUFDTyxTQUFBO0FBQUEsSUFFSCxjQUFjLE1BQU07QUFBQSxJQUNwQixrQkFBa0IsTUFBTTtBQUFBLEVBQUE7QUFFaEM7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
import { a as QItemSection, b as QItem, Q as QMenu } from "./QItem.2dfe0bb5.js";
import { B as BaseAPI, J as JSONApiResponse, bv as VoidApiResponse, ad as defineStore, _ as _export_sfc, P as defineComponent, c as computed, aA as ApiConfigProvider, r as ref, w as watch, o as onMounted, U as openBlock, V as createBlock, W as withCtx, d as createVNode, ae as QIcon, a2 as createCommentVNode, ab as createElementBlock, Y as createBaseVNode, aB as QInput, a0 as QBtn, aj as QSeparator, aq as renderList, E as withDirectives, an as Ripple, bw as QCheckbox, S as unref, b as isRef, ac as createTextVNode, Z as toDisplayString, F as Fragment } from "./index.b87ff47c.js";
import { Q as QItemLabel, a as QSelect } from "./QSelect.dccdf4ba.js";
import { Q as QList } from "./QList.6dd31c56.js";
import { a as PlaylistItemReadDtoFromJSON, P as PlaylistApi, b as PlaylistVisibility } from "./ClosePopup.f268bfbb.js";
import { u as useQuasar } from "./use-quasar.751c9523.js";
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
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Add To Playlist");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Create Playlist");
const _hoisted_3 = {
  key: 1,
  class: "row no-wrap q-px-md q-pt-md"
};
const _hoisted_4 = { class: "column" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle1 q-mb-sm" }, "Create Playlist", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddToPlaylistMenu",
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
      return openBlock(), createBlock(QItem, { clickable: "" }, {
        default: withCtx(() => [
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }),
          createVNode(QItemSection, { side: "" }, {
            default: withCtx(() => [
              createVNode(QIcon, { name: "keyboard_arrow_right" })
            ]),
            _: 1
          }),
          createVNode(QMenu, {
            class: "bg-black border border-white",
            anchor: "top end",
            self: "top start"
          }, {
            default: withCtx(() => [
              createVNode(QList, { style: { "min-width": "150px" } }, {
                default: withCtx(() => [
                  !playlistCreateActive.value ? (openBlock(), createBlock(QItem, {
                    key: 0,
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
                              _hoisted_2
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  playlistCreateActive.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                    createBaseVNode("div", _hoisted_4, [
                      _hoisted_5,
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
          })
        ]),
        _: 1
      });
    };
  }
});
var AddToPlaylistMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AddToPlaylistMenu.vue"]]);
export { AddToPlaylistMenu as A, usePlaylistStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkVG9QbGF5bGlzdE1lbnUuMDllYmU5NmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvbW9kZWxzL1BsYXlsaXN0SXRlbUFkZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9QbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9hcGlzL1BsYXlsaXN0SXRlbUFwaS50cyIsIi4uLy4uLy4uL3NyYy9zdG9yZXMvcGxheWxpc3RTdG9yZS50cyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZFRvUGxheWxpc3RNZW51LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUGxheWxpc3RJdGVtQWRkUmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3Qge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3RcbiAgICAgKi9cbiAgICBwbGF5bGlzdElkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3RcbiAgICAgKi9cbiAgICBwbGF5bGlzdEl0ZW1JZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0IGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0KHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG5cbiAgICByZXR1cm4gaXNJbnN0YW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3RGcm9tSlNPTihqc29uOiBhbnkpOiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0IHtcbiAgICByZXR1cm4gUGxheWxpc3RJdGVtQWRkUmVxdWVzdEZyb21KU09OVHlwZWQoanNvbiwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWxpc3RJdGVtQWRkUmVxdWVzdEZyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogUGxheWxpc3RJdGVtQWRkUmVxdWVzdCB7XG4gICAgaWYgKChqc29uID09PSB1bmRlZmluZWQpIHx8IChqc29uID09PSBudWxsKSkge1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdwbGF5bGlzdElkJzogIWV4aXN0cyhqc29uLCAncGxheWxpc3RJZCcpID8gdW5kZWZpbmVkIDoganNvblsncGxheWxpc3RJZCddLFxuICAgICAgICAncGxheWxpc3RJdGVtSWQnOiAhZXhpc3RzKGpzb24sICdwbGF5bGlzdEl0ZW1JZCcpID8gdW5kZWZpbmVkIDoganNvblsncGxheWxpc3RJdGVtSWQnXSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWxpc3RJdGVtQWRkUmVxdWVzdFRvSlNPTih2YWx1ZT86IFBsYXlsaXN0SXRlbUFkZFJlcXVlc3QgfCBudWxsKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAncGxheWxpc3RJZCc6IHZhbHVlLnBsYXlsaXN0SWQsXG4gICAgICAgICdwbGF5bGlzdEl0ZW1JZCc6IHZhbHVlLnBsYXlsaXN0SXRlbUlkLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cbmltcG9ydCB7IGV4aXN0cywgbWFwVmFsdWVzIH0gZnJvbSAnLi4vcnVudGltZSc7XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdFxuICAgICAqL1xuICAgIHBsYXlsaXN0SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdFxuICAgICAqL1xuICAgIHBsYXlsaXN0SXRlbUlkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3QgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VPZlBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3QodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdEZyb21KU09OKGpzb246IGFueSk6IFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3Qge1xuICAgIHJldHVybiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0RnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0RnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0IHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3BsYXlsaXN0SWQnOiAhZXhpc3RzKGpzb24sICdwbGF5bGlzdElkJykgPyB1bmRlZmluZWQgOiBqc29uWydwbGF5bGlzdElkJ10sXG4gICAgICAgICdwbGF5bGlzdEl0ZW1JZCc6ICFleGlzdHMoanNvbiwgJ3BsYXlsaXN0SXRlbUlkJykgPyB1bmRlZmluZWQgOiBqc29uWydwbGF5bGlzdEl0ZW1JZCddLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0VG9KU09OKHZhbHVlPzogUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdwbGF5bGlzdElkJzogdmFsdWUucGxheWxpc3RJZCxcbiAgICAgICAgJ3BsYXlsaXN0SXRlbUlkJzogdmFsdWUucGxheWxpc3RJdGVtSWQsXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBydW50aW1lIGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHR5cGUge1xuICBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0LFxuICBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0LFxuICBQbGF5bGlzdEl0ZW1SZWFkRHRvLFxuICBQcm9ibGVtRGV0YWlscyxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7XG4gICAgUGxheWxpc3RJdGVtQWRkUmVxdWVzdEZyb21KU09OLFxuICAgIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3RUb0pTT04sXG4gICAgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdEZyb21KU09OLFxuICAgIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RUb0pTT04sXG4gICAgUGxheWxpc3RJdGVtUmVhZER0b0Zyb21KU09OLFxuICAgIFBsYXlsaXN0SXRlbVJlYWREdG9Ub0pTT04sXG4gICAgUHJvYmxlbURldGFpbHNGcm9tSlNPTixcbiAgICBQcm9ibGVtRGV0YWlsc1RvSlNPTixcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBBZGRQbGF5bGlzdEl0ZW1Ub1BsYXlsaXN0UmVxdWVzdCB7XG4gICAgcGxheWxpc3RJdGVtQWRkUmVxdWVzdD86IFBsYXlsaXN0SXRlbUFkZFJlcXVlc3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0UmVxdWVzdCB7XG4gICAgcGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdD86IFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5jcmVtZW50UGxheUNvdW50UmVxdWVzdCB7XG4gICAgcGxheWxpc3RJZD86IHN0cmluZztcbiAgICB0cmFja0lkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgUGxheWxpc3RJdGVtQXBpIGV4dGVuZHMgcnVudGltZS5CYXNlQVBJIHtcblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSYXcocmVxdWVzdFBhcmFtZXRlcnM6IEFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPFBsYXlsaXN0SXRlbVJlYWREdG8+PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1ldGVyczogYW55ID0ge307XG5cbiAgICAgICAgY29uc3QgaGVhZGVyUGFyYW1ldGVyczogcnVudGltZS5IVFRQSGVhZGVycyA9IHt9O1xuXG4gICAgICAgIGhlYWRlclBhcmFtZXRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24tcGF0Y2granNvbic7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL3BsYXlsaXN0SXRlbWAsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgYm9keTogUGxheWxpc3RJdGVtQWRkUmVxdWVzdFRvSlNPTihyZXF1ZXN0UGFyYW1ldGVycy5wbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0KSxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLkpTT05BcGlSZXNwb25zZShyZXNwb25zZSwgKGpzb25WYWx1ZSkgPT4gUGxheWxpc3RJdGVtUmVhZER0b0Zyb21KU09OKGpzb25WYWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3QocmVxdWVzdFBhcmFtZXRlcnM6IEFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSZXF1ZXN0ID0ge30sIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPFBsYXlsaXN0SXRlbVJlYWREdG8+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudmFsdWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBkZWxldGVQbGF5bGlzdEl0ZW1Gcm9tUGxheWxpc3RSYXcocmVxdWVzdFBhcmFtZXRlcnM6IERlbGV0ZVBsYXlsaXN0SXRlbUZyb21QbGF5bGlzdFJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8dm9pZD4+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbi1wYXRjaCtqc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvcGxheWxpc3RJdGVtYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgIGJvZHk6IFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RUb0pTT04ocmVxdWVzdFBhcmFtZXRlcnMucGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCksXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5Wb2lkQXBpUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGRlbGV0ZVBsYXlsaXN0SXRlbUZyb21QbGF5bGlzdChyZXF1ZXN0UGFyYW1ldGVyczogRGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0UmVxdWVzdCA9IHt9LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0UmF3KHJlcXVlc3RQYXJhbWV0ZXJzLCBpbml0T3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBpbmNyZW1lbnRQbGF5Q291bnRSYXcocmVxdWVzdFBhcmFtZXRlcnM6IEluY3JlbWVudFBsYXlDb3VudFJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8dm9pZD4+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBpZiAocmVxdWVzdFBhcmFtZXRlcnMucGxheWxpc3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ1BsYXlsaXN0SWQnXSA9IHJlcXVlc3RQYXJhbWV0ZXJzLnBsYXlsaXN0SWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdFBhcmFtZXRlcnMudHJhY2tJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ1RyYWNrSWQnXSA9IHJlcXVlc3RQYXJhbWV0ZXJzLnRyYWNrSWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL3BsYXlsaXN0SXRlbS9pbmNgLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLlZvaWRBcGlSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgaW5jcmVtZW50UGxheUNvdW50KHJlcXVlc3RQYXJhbWV0ZXJzOiBJbmNyZW1lbnRQbGF5Q291bnRSZXF1ZXN0ID0ge30sIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbmNyZW1lbnRQbGF5Q291bnRSYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHtkZWZpbmVTdG9yZX0gZnJvbSBcInBpbmlhXCI7XG5pbXBvcnQge1BsYXlsaXN0SXRlbVJlYWREdG8sIFBsYXlsaXN0UmVhZER0b30gZnJvbSBcImFwcC9iYWNrZW5kLXNlcnZpY2UtYXBpXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VQbGF5bGlzdFN0b3JlID0gZGVmaW5lU3RvcmUoJ3BsYXlsaXN0Jywge1xuICBzdGF0ZTogKCkgPT4gKHtcbiAgICAvLyAgICAgIE1hcDxQbGF5bGlzdElkLCBQbGF5bGlzdE9iamVjdD5cbiAgICBwbGF5bGlzdHNNYXA6IG5ldyBNYXA8c3RyaW5nLCBQbGF5bGlzdFJlYWREdG8+KCksXG4gICAgLy8gICAgICBNYXA8UGxheWxpc3RJZCwgUGxheWxpc3RJdGVtSWQ+XG4gICAgcGxheWxpc3RJdGVtTWFwOiBuZXcgTWFwPHN0cmluZywgU2V0PHN0cmluZz4+KCkgLFxuICB9KSxcbiAgZ2V0dGVyczoge1xuICAgIGdldFBsYXlsaXN0czogKHN0YXRlKTogUGxheWxpc3RSZWFkRHRvW10gPT4ge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20oc3RhdGUucGxheWxpc3RzTWFwLnZhbHVlcygpKTtcbiAgICB9XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBzZXRQbGF5bGlzdHMocGxheWxpc3RzOiBQbGF5bGlzdFJlYWREdG9bXSkge1xuICAgICAgcGxheWxpc3RzLmZvckVhY2goZSA9PiB7XG4gICAgICAgIHRoaXMucGxheWxpc3RzTWFwLnNldChlLmlkISwgZSk7XG5cbiAgICAgICAgY29uc3QgdHJhY2tzID0gZS50cmFja3MhLm1hcChpID0+IGkudHJhY2tJZCEpO1xuICAgICAgICB0aGlzLnBsYXlsaXN0SXRlbU1hcC5zZXQoZS5pZCEsIG5ldyBTZXQodHJhY2tzKSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGFkZFBsYXlsaXN0KHBsYXlsaXN0OiBQbGF5bGlzdFJlYWREdG8pIHtcbiAgICAgIHRoaXMucGxheWxpc3RzTWFwLnNldChwbGF5bGlzdC5pZCEsIHBsYXlsaXN0KTtcbiAgICB9LFxuICAgIGFkZFBsYXlsaXN0SXRlbShwbGF5bGlzdDogc3RyaW5nLCBwbGF5bGlzdEl0ZW06IFBsYXlsaXN0SXRlbVJlYWREdG8pIHtcbiAgICAgIHRoaXMucGxheWxpc3RJdGVtTWFwLmdldChwbGF5bGlzdCk/LmFkZChwbGF5bGlzdEl0ZW0udHJhY2tJZCEpO1xuICAgIH0sXG4gICAgcmVtb3ZlUGxheWxpc3RJdGVtKHBsYXlsaXN0OiBzdHJpbmcsIHBsYXlsaXN0SXRlbTogc3RyaW5nKSB7XG4gICAgICB0aGlzLnBsYXlsaXN0SXRlbU1hcC5nZXQocGxheWxpc3QpPy5kZWxldGUocGxheWxpc3RJdGVtKTtcbiAgICB9LFxuICAgIGhhc1BsYXlsaXN0SXRlbShwbGF5bGlzdDogc3RyaW5nLCBwbGF5bGlzdEl0ZW06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgY29uc3QgcCA9IHRoaXMucGxheWxpc3RJdGVtTWFwLmdldChwbGF5bGlzdCk7XG4gICAgICBpZiAoIXApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcC5oYXMocGxheWxpc3RJdGVtKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiPHRlbXBsYXRlPlxuICA8cS1pdGVtIGNsaWNrYWJsZT5cbiAgICA8cS1pdGVtLXNlY3Rpb24+QWRkIFRvIFBsYXlsaXN0PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgIDxxLWljb24gbmFtZT1cImtleWJvYXJkX2Fycm93X3JpZ2h0XCIgLz5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLW1lbnVcbiAgICAgIGNsYXNzPVwiYmctYmxhY2sgYm9yZGVyIGJvcmRlci13aGl0ZVwiXG4gICAgICBhbmNob3I9XCJ0b3AgZW5kXCJcbiAgICAgIHNlbGY9XCJ0b3Agc3RhcnRcIlxuICAgID5cbiAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSBAY2xpY2s9XCJvblBsYXlsaXN0Q3JlYXRlQnRuQ2xpY2tcIiB2LWlmPVwiIXBsYXlsaXN0Q3JlYXRlQWN0aXZlXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJwbGF5bGlzdF9hZGRcIiBzaXplPVwiMjRweFwiIGNsYXNzPVwicS1weC1zbVwiLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+Q3JlYXRlIFBsYXlsaXN0PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBuby13cmFwIHEtcHgtbWQgcS1wdC1tZFwiIHYtaWY9XCJwbGF5bGlzdENyZWF0ZUFjdGl2ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSBxLW1iLXNtXCI+Q3JlYXRlIFBsYXlsaXN0PC9kaXY+XG4gICAgICAgICAgICA8cS1pbnB1dCBzdGFuZG91dD1cImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIGlucHV0LXN0eWxlPVwiY29sb3I6ICNGRkZGRkZcIiB2LW1vZGVsPVwicGxheWxpc3ROYW1lXCIgbGFiZWw9XCJOYW1lXCIvPlxuICAgICAgICAgICAgPHEtc2VsZWN0IHYtbW9kZWw9XCJwbGF5bGlzdFZpc2liaWxpdHlcIiA6b3B0aW9ucz1cInZpc2liaWxpdHlPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLWNvbnRlbnQtc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwXCIgLz5cbiAgICAgICAgICAgIDxxLWJ0biBvdXRsaW5lIGNsYXNzPVwicS1tdC1zbVwiIGxhYmVsPVwiQ3JlYXRlXCIgQGNsaWNrPVwiY3JlYXRlUGxheWxpc3RcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICAgIDxxLWl0ZW0gdGFnPVwibGFiZWxcIiB2LXJpcHBsZSB2LWZvcj1cIihpdGVtKSBpbiBwbGF5bGlzdHNcIiA6a2V5PVwiaXRlbS5pZFwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIHRvcD5cbiAgICAgICAgICAgIDxxLWNoZWNrYm94IDp2YWw9XCJpdGVtLmlkXCIgdi1tb2RlbD1cInBsYXlsaXN0U3RhdHVzXCIvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBpdGVtLm5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1tZW51PlxuICA8L3EtaXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3VzZVBsYXlsaXN0U3RvcmV9IGZyb20gJ3N0b3Jlcy9wbGF5bGlzdFN0b3JlJztcbmltcG9ydCB7Y29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7UGxheWxpc3RBcGksIFBsYXlsaXN0SXRlbUFwaSwgUGxheWxpc3RWaXNpYmlsaXR5fSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gXCJzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXJcIjtcbmltcG9ydCB7dXNlUXVhc2FyfSBmcm9tIFwicXVhc2FyXCI7XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgdHJhY2tJZDogc3RyaW5nXG59PigpO1xuXG5sZXQgZmlyc3RBY3RpdmF0ZSA9IHRydWU7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCBwbGF5bGlzdFN0b3JlID0gdXNlUGxheWxpc3RTdG9yZSgpO1xuXG5jb25zdCBwbGF5bGlzdHMgPSBjb21wdXRlZCgoKSA9PiBwbGF5bGlzdFN0b3JlLmdldFBsYXlsaXN0cyk7XG5jb25zdCBwbGF5bGlzdEFwaSA9IG5ldyBQbGF5bGlzdEFwaShBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpKTtcbmNvbnN0IHBsYXlsaXN0SXRlbUFwaSA9IG5ldyBQbGF5bGlzdEl0ZW1BcGkoQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKSk7XG5cbmNvbnN0IG9uUGxheWxpc3RDcmVhdGVCdG5DbGljayA9ICgpID0+IHsgcGxheWxpc3RDcmVhdGVBY3RpdmUudmFsdWUgPSB0cnVlIH1cbmNvbnN0IHBsYXlsaXN0Q3JlYXRlQWN0aXZlID0gcmVmKGZhbHNlKTtcbmNvbnN0IHBsYXlsaXN0TmFtZSA9IHJlZigpO1xuY29uc3QgcGxheWxpc3RWaXNpYmlsaXR5ID0gcmVmKFBsYXlsaXN0VmlzaWJpbGl0eS5Qcml2YXRlKTtcbmNvbnN0IHZpc2liaWxpdHlPcHRpb25zID0gW1BsYXlsaXN0VmlzaWJpbGl0eS5QdWJsaWMsIFBsYXlsaXN0VmlzaWJpbGl0eS5Vbmxpc3RlZCwgUGxheWxpc3RWaXNpYmlsaXR5LlByaXZhdGVdXG5jb25zdCBjcmVhdGVQbGF5bGlzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGxheWxpc3RBcGkuY3JlYXRlUGxheWxpc3Qoe1xuICAgIHBsYXlsaXN0Q3JlYXRlUmVxdWVzdDoge1xuICAgICAgbmFtZTogcGxheWxpc3ROYW1lLnZhbHVlLFxuICAgICAgdmlzaWJpbGl0eTogcGxheWxpc3RWaXNpYmlsaXR5LnZhbHVlXG4gICAgfVxuICB9KTtcblxuICBwbGF5bGlzdFN0b3JlLmFkZFBsYXlsaXN0KHJlc3VsdCk7XG4gICRxLm5vdGlmeSh7XG4gICAgcG9zaXRpb246ICd0b3AnLFxuICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgIG1lc3NhZ2U6IGBQbGF5bGlzdCBDcmVhdGVkYFxuICB9KTtcblxuICBjb25zdCByID0gYXdhaXQgcGxheWxpc3RJdGVtQXBpLmFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3Qoe3BsYXlsaXN0SXRlbUFkZFJlcXVlc3Q6IHtcbiAgICBwbGF5bGlzdElkOiByZXN1bHQuaWQhLFxuICAgIHBsYXlsaXN0SXRlbUlkOiBwcm9wcy50cmFja0lkXG4gIH19KTtcblxuICBwbGF5bGlzdFN0b3JlLmFkZFBsYXlsaXN0SXRlbShyZXN1bHQuaWQhLCByKTtcblxuICAkcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiBgQWRkZWQgdG8gUGxheWxpc3RgXG4gIH0pO1xuXG4gIHBsYXlsaXN0Q3JlYXRlQWN0aXZlLnZhbHVlID0gZmFsc2U7XG59XG5cbmxldCBwbGF5bGlzdFN0YXR1cyA9IHJlZjxzdHJpbmdbXT4oW10pO1xuXG53YXRjaChwbGF5bGlzdFN0YXR1cywgYXN5bmMgKHZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICBpZiAoZmlyc3RBY3RpdmF0ZSkge1xuICAgIGZpcnN0QWN0aXZhdGUgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGlmZmVyZW5jZSA9IHZhbHVlIVxuICAgIC5maWx0ZXIoeCA9PiAhb2xkVmFsdWUhLmluY2x1ZGVzKHgpKVxuICAgIC5jb25jYXQob2xkVmFsdWUhLmZpbHRlcih4ID0+ICF2YWx1ZSEuaW5jbHVkZXMoeCkpKTtcblxuICBpZiAoIWRpZmZlcmVuY2UgfHwgZGlmZmVyZW5jZS5sZW5ndGggPT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChkaWZmZXJlbmNlLmxlbmd0aCA+IDEpIHtcbiAgICBhbGVydChgUGxheWxpc3QgRGVsdGEgPiAxIChBY3R1YWw6ICR7ZGlmZmVyZW5jZS5sZW5ndGh9KS4gQ2Fubm90IHByb2NlZWRgKVxuICB9XG5cbiAgY29uc3QgaXNBZGQgPSB2YWx1ZS5sZW5ndGggPiBvbGRWYWx1ZS5sZW5ndGg7XG4gIGNvbnN0IGFkbSA9IGlzQWRkID8gJ0FkZGVkJyA6ICdSZW1vdmVkJztcbiAgY29uc29sZS5sb2coYWRtLnRvU3RyaW5nKCkgKyBkaWZmZXJlbmNlLnRvU3RyaW5nKCkpXG5cbiAgaWYgKGlzQWRkKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGxheWxpc3RJdGVtQXBpLmFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3Qoe1xuICAgICAgcGxheWxpc3RJdGVtQWRkUmVxdWVzdDoge1xuICAgICAgICBwbGF5bGlzdEl0ZW1JZDogcHJvcHMudHJhY2tJZCxcbiAgICAgICAgcGxheWxpc3RJZDogZGlmZmVyZW5jZVswXVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWxpc3RTdG9yZS5hZGRQbGF5bGlzdEl0ZW0oZGlmZmVyZW5jZVswXSwgcmVzdWx0KTtcbiAgICAkcS5ub3RpZnkoe1xuICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgdHlwZTogJ3NlY29uZGFyeScsXG4gICAgICBtZXNzYWdlOiBgQWRkZWQgdG8gUGxheWxpc3RgXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGxheWxpc3RJdGVtQXBpLmRlbGV0ZVBsYXlsaXN0SXRlbUZyb21QbGF5bGlzdCh7XG4gICAgICBwbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0OiB7XG4gICAgICAgIHBsYXlsaXN0SXRlbUlkOiBwcm9wcy50cmFja0lkLFxuICAgICAgICBwbGF5bGlzdElkOiBkaWZmZXJlbmNlWzBdXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5bGlzdFN0b3JlLnJlbW92ZVBsYXlsaXN0SXRlbShkaWZmZXJlbmNlWzBdLCBwcm9wcy50cmFja0lkKTtcbiAgICAkcS5ub3RpZnkoe1xuICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgdHlwZTogJ3NlY29uZGFyeScsXG4gICAgICBtZXNzYWdlOiBgRGVsZXRlZCBmcm9tIFBsYXlsaXN0YFxuICAgIH0pO1xuICB9XG59LCB7ZGVlcDogdHJ1ZX0pXG5cbm9uTW91bnRlZCgoKSA9PiB7XG4gIHBsYXlsaXN0U3RhdHVzLnZhbHVlID0gcGxheWxpc3RzLnZhbHVlLmZpbHRlcihpID0+IHBsYXlsaXN0U3RvcmUuaGFzUGxheWxpc3RJdGVtKGkuaWQhLCBwcm9wcy50cmFja0lkKSkubWFwKGUgPT4gZS5pZCEpO1xufSlcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbInJ1bnRpbWUuQmFzZUFQSSIsInJ1bnRpbWUuSlNPTkFwaVJlc3BvbnNlIiwicnVudGltZS5Wb2lkQXBpUmVzcG9uc2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQTJETyxTQUFTLDZCQUE2QixPQUE0QztBQUNyRixNQUFJLFVBQVUsUUFBVztBQUNkLFdBQUE7QUFBQSxFQUNYO0FBQ0EsTUFBSSxVQUFVLE1BQU07QUFDVCxXQUFBO0FBQUEsRUFDWDtBQUNPLFNBQUE7QUFBQSxJQUVILGNBQWMsTUFBTTtBQUFBLElBQ3BCLGtCQUFrQixNQUFNO0FBQUEsRUFBQTtBQUVoQztBQ1pPLFNBQVMsZ0NBQWdDLE9BQStDO0FBQzNGLE1BQUksVUFBVSxRQUFXO0FBQ2QsV0FBQTtBQUFBLEVBQ1g7QUFDQSxNQUFJLFVBQVUsTUFBTTtBQUNULFdBQUE7QUFBQSxFQUNYO0FBQ08sU0FBQTtBQUFBLElBRUgsY0FBYyxNQUFNO0FBQUEsSUFDcEIsa0JBQWtCLE1BQU07QUFBQSxFQUFBO0FBRWhDO0FDdEJhLE1BQUEsd0JBQXdCQSxRQUFnQjtBQUFBLEVBSWpELE1BQU0sNkJBQTZCLG1CQUFxRCxlQUErRztBQUNuTSxVQUFNLGtCQUF1QixDQUFBO0FBRTdCLFVBQU0sbUJBQXdDLENBQUE7QUFFOUMscUJBQWlCLGtCQUFrQjtBQUVuQyxRQUFJLEtBQUssaUJBQWlCLEtBQUssY0FBYyxRQUFRO0FBQ2pELHVCQUFpQixtQkFBbUIsS0FBSyxjQUFjLE9BQU8sZUFBZTtBQUFBLElBQ2pGO0FBRU0sVUFBQSxXQUFXLE1BQU0sS0FBSyxRQUFRO0FBQUEsTUFDaEMsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsTUFBTSw2QkFBNkIsa0JBQWtCLHNCQUFzQjtBQUFBLE9BQzVFLGFBQWE7QUFFVCxXQUFBLElBQUlDLGdCQUF3QixVQUFVLENBQUMsY0FBYyw0QkFBNEIsU0FBUyxDQUFDO0FBQUEsRUFDdEc7QUFBQSxFQUlBLE1BQU0sMEJBQTBCLG9CQUFzRCxJQUFJLGVBQTBGO0FBQ2hMLFVBQU0sV0FBVyxNQUFNLEtBQUssNkJBQTZCLG1CQUFtQixhQUFhO0FBQ2xGLFdBQUEsTUFBTSxTQUFTO0VBQzFCO0FBQUEsRUFJQSxNQUFNLGtDQUFrQyxtQkFBMEQsZUFBZ0c7QUFDOUwsVUFBTSxrQkFBdUIsQ0FBQTtBQUU3QixVQUFNLG1CQUF3QyxDQUFBO0FBRTlDLHFCQUFpQixrQkFBa0I7QUFFbkMsUUFBSSxLQUFLLGlCQUFpQixLQUFLLGNBQWMsUUFBUTtBQUNqRCx1QkFBaUIsbUJBQW1CLEtBQUssY0FBYyxPQUFPLGVBQWU7QUFBQSxJQUNqRjtBQUVNLFVBQUEsV0FBVyxNQUFNLEtBQUssUUFBUTtBQUFBLE1BQ2hDLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE1BQU0sZ0NBQWdDLGtCQUFrQix5QkFBeUI7QUFBQSxPQUNsRixhQUFhO0FBRVQsV0FBQSxJQUFJQyxnQkFBd0IsUUFBUTtBQUFBLEVBQy9DO0FBQUEsRUFJQSxNQUFNLCtCQUErQixvQkFBMkQsSUFBSSxlQUEyRTtBQUNySyxVQUFBLEtBQUssa0NBQWtDLG1CQUFtQixhQUFhO0FBQUEsRUFDakY7QUFBQSxFQUlBLE1BQU0sc0JBQXNCLG1CQUE4QyxlQUFnRztBQUN0SyxVQUFNLGtCQUF1QixDQUFBO0FBRXpCLFFBQUEsa0JBQWtCLGVBQWUsUUFBVztBQUM1QyxzQkFBZ0IsZ0JBQWdCLGtCQUFrQjtBQUFBLElBQ3REO0FBRUksUUFBQSxrQkFBa0IsWUFBWSxRQUFXO0FBQ3pDLHNCQUFnQixhQUFhLGtCQUFrQjtBQUFBLElBQ25EO0FBRUEsVUFBTSxtQkFBd0MsQ0FBQTtBQUU5QyxRQUFJLEtBQUssaUJBQWlCLEtBQUssY0FBYyxRQUFRO0FBQ2pELHVCQUFpQixtQkFBbUIsS0FBSyxjQUFjLE9BQU8sZUFBZTtBQUFBLElBQ2pGO0FBRU0sVUFBQSxXQUFXLE1BQU0sS0FBSyxRQUFRO0FBQUEsTUFDaEMsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE9BQ1IsYUFBYTtBQUVULFdBQUEsSUFBSUEsZ0JBQXdCLFFBQVE7QUFBQSxFQUMvQztBQUFBLEVBSUEsTUFBTSxtQkFBbUIsb0JBQStDLElBQUksZUFBMkU7QUFDN0ksVUFBQSxLQUFLLHNCQUFzQixtQkFBbUIsYUFBYTtBQUFBLEVBQ3JFO0FBRUo7QUNoSmEsTUFBQSxtQkFBbUIsWUFBWSxZQUFZO0FBQUEsRUFDdEQsT0FBTyxPQUFPO0FBQUEsSUFFWixrQ0FBa0IsSUFBNkI7QUFBQSxJQUUvQyxxQ0FBcUIsSUFBeUI7QUFBQSxFQUFBO0FBQUEsRUFFaEQsU0FBUztBQUFBLElBQ1AsY0FBYyxDQUFDLFVBQTZCO0FBQzFDLGFBQU8sTUFBTSxLQUFLLE1BQU0sYUFBYSxPQUFRLENBQUE7QUFBQSxJQUMvQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLGFBQWEsV0FBOEI7QUFDekMsZ0JBQVUsUUFBUSxDQUFLLE1BQUE7QUFDckIsYUFBSyxhQUFhLElBQUksRUFBRSxJQUFLLENBQUM7QUFFOUIsY0FBTSxTQUFTLEVBQUUsT0FBUSxJQUFJLENBQUEsTUFBSyxFQUFFLE9BQVE7QUFDNUMsYUFBSyxnQkFBZ0IsSUFBSSxFQUFFLElBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQztBQUFBLE1BQUEsQ0FDaEQ7QUFBQSxJQUNIO0FBQUEsSUFDQSxZQUFZLFVBQTJCO0FBQ3JDLFdBQUssYUFBYSxJQUFJLFNBQVMsSUFBSyxRQUFRO0FBQUEsSUFDOUM7QUFBQSxJQUNBLGdCQUFnQixVQUFrQixjQUFtQzs7QUFDbkUsaUJBQUssZ0JBQWdCLElBQUksUUFBUSxNQUFqQyxtQkFBb0MsSUFBSSxhQUFhO0FBQUEsSUFDdkQ7QUFBQSxJQUNBLG1CQUFtQixVQUFrQixjQUFzQjs7QUFDekQsaUJBQUssZ0JBQWdCLElBQUksUUFBUSxNQUFqQyxtQkFBb0MsT0FBTztBQUFBLElBQzdDO0FBQUEsSUFDQSxnQkFBZ0IsVUFBa0IsY0FBK0I7QUFDL0QsWUFBTSxJQUFJLEtBQUssZ0JBQWdCLElBQUksUUFBUTtBQUMzQyxVQUFJLENBQUMsR0FBRztBQUNDLGVBQUE7QUFBQSxNQUNUO0FBRU8sYUFBQSxFQUFFLElBQUksWUFBWTtBQUFBLElBQzNCO0FBQUEsRUFDRjtBQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNjRCxRQUFJLGdCQUFnQjtBQUVwQixVQUFNLEtBQUs7QUFDWCxVQUFNLGdCQUFnQjtBQUV0QixVQUFNLFlBQVksU0FBUyxNQUFNLGNBQWMsWUFBWTtBQUMzRCxVQUFNLGNBQWMsSUFBSSxZQUFZLGtCQUFrQixZQUFZLEVBQUUsY0FBYztBQUNsRixVQUFNLGtCQUFrQixJQUFJLGdCQUFnQixrQkFBa0IsWUFBWSxFQUFFLGNBQWM7QUFFMUYsVUFBTSwyQkFBMkIsTUFBTTtBQUFFLDJCQUFxQixRQUFRO0FBQUEsSUFBQTtBQUNoRSxVQUFBLHVCQUF1QixJQUFJLEtBQUs7QUFDdEMsVUFBTSxlQUFlO0FBQ2YsVUFBQSxxQkFBcUIsSUFBSSxtQkFBbUIsT0FBTztBQUN6RCxVQUFNLG9CQUFvQixDQUFDLG1CQUFtQixRQUFRLG1CQUFtQixVQUFVLG1CQUFtQixPQUFPO0FBQzdHLFVBQU0saUJBQWlCLFlBQVk7QUFDM0IsWUFBQSxTQUFTLE1BQU0sWUFBWSxlQUFlO0FBQUEsUUFDOUMsdUJBQXVCO0FBQUEsVUFDckIsTUFBTSxhQUFhO0FBQUEsVUFDbkIsWUFBWSxtQkFBbUI7QUFBQSxRQUNqQztBQUFBLE1BQUEsQ0FDRDtBQUVELG9CQUFjLFlBQVksTUFBTTtBQUNoQyxTQUFHLE9BQU87QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUFBLENBQ1Y7QUFFRCxZQUFNLElBQUksTUFBTSxnQkFBZ0IsMEJBQTBCLEVBQUMsd0JBQXdCO0FBQUEsUUFDakYsWUFBWSxPQUFPO0FBQUEsUUFDbkIsZ0JBQWdCLE1BQU07QUFBQSxTQUN0QjtBQUVZLG9CQUFBLGdCQUFnQixPQUFPLElBQUssQ0FBQztBQUUzQyxTQUFHLE9BQU87QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUFBLENBQ1Y7QUFFRCwyQkFBcUIsUUFBUTtBQUFBLElBQUE7QUFHM0IsUUFBQSxpQkFBaUIsSUFBYyxDQUFBLENBQUU7QUFFL0IsVUFBQSxnQkFBZ0IsT0FBTyxPQUFPLGFBQWE7QUFDL0MsVUFBSSxlQUFlO0FBQ0Qsd0JBQUE7QUFDaEI7QUFBQSxNQUNGO0FBQ0EsWUFBTSxhQUFhLE1BQ2hCLE9BQU8sT0FBSyxDQUFDLFNBQVUsU0FBUyxDQUFDLENBQUMsRUFDbEMsT0FBTyxTQUFVLE9BQU8sQ0FBSyxNQUFBLENBQUMsTUFBTyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBRXBELFVBQUksQ0FBQyxjQUFjLFdBQVcsVUFBVSxHQUFHO0FBQ3pDO0FBQUEsTUFDRjtBQUVJLFVBQUEsV0FBVyxTQUFTLEdBQUc7QUFDbkIsY0FBQSwrQkFBK0IsV0FBVyx5QkFBeUI7QUFBQSxNQUMzRTtBQUVNLFlBQUEsUUFBUSxNQUFNLFNBQVMsU0FBUztBQUNoQyxZQUFBLE1BQU0sUUFBUSxVQUFVO0FBQzlCLGNBQVEsSUFBSSxJQUFJLFNBQWEsSUFBQSxXQUFXLFVBQVU7QUFFbEQsVUFBSSxPQUFPO0FBQ0gsY0FBQSxTQUFTLE1BQU0sZ0JBQWdCLDBCQUEwQjtBQUFBLFVBQzdELHdCQUF3QjtBQUFBLFlBQ3RCLGdCQUFnQixNQUFNO0FBQUEsWUFDdEIsWUFBWSxXQUFXO0FBQUEsVUFDekI7QUFBQSxRQUFBLENBQ0Q7QUFFYSxzQkFBQSxnQkFBZ0IsV0FBVyxJQUFJLE1BQU07QUFDbkQsV0FBRyxPQUFPO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsUUFBQSxDQUNWO0FBQUEsTUFBQSxPQUNJO0FBQ1UsY0FBTSxnQkFBZ0IsK0JBQStCO0FBQUEsVUFDbEUsMkJBQTJCO0FBQUEsWUFDekIsZ0JBQWdCLE1BQU07QUFBQSxZQUN0QixZQUFZLFdBQVc7QUFBQSxVQUN6QjtBQUFBLFFBQUEsQ0FDRDtBQUVELHNCQUFjLG1CQUFtQixXQUFXLElBQUksTUFBTSxPQUFPO0FBQzdELFdBQUcsT0FBTztBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFFBQUEsQ0FDVjtBQUFBLE1BQ0g7QUFBQSxJQUFBLEdBQ0MsRUFBQyxNQUFNLEtBQUEsQ0FBSztBQUVmLGNBQVUsTUFBTTtBQUNkLHFCQUFlLFFBQVEsVUFBVSxNQUFNLE9BQU8sQ0FBQSxNQUFLLGNBQWMsZ0JBQWdCLEVBQUUsSUFBSyxNQUFNLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQSxNQUFLLEVBQUUsRUFBRztBQUFBLElBQUEsQ0FDdkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

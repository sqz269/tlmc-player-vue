import { Q as QImg } from "./QImg.0473b14f.js";
import { B as BaseAPI, J as JSONApiResponse, bD as VoidApiResponse, _ as _export_sfc, P as defineComponent, c as computed, aA as ApiConfigProvider, r as ref, w as watch, o as onMounted, U as openBlock, V as createBlock, W as withCtx, d as createVNode, ae as QIcon, a2 as createCommentVNode, ab as createElementBlock, Y as createBaseVNode, aB as QInput, a0 as QBtn, aj as QSeparator, aq as renderList, E as withDirectives, an as Ripple, bE as QCheckbox, S as unref, b as isRef, ac as createTextVNode, Z as toDisplayString, F as Fragment, R as useRouter, bk as AlbumApi, Q as QueueController, bl as onUpdated, ao as QAvatar } from "./index.47bc951f.js";
import { Q as QTooltip, c as outlinedPlayArrow, o as outlinedFavoriteBorder, t as outlinedDescription, u as outlinedTipsAndUpdates, v as outlinedMoreHoriz } from "./index.221c4e13.js";
import { Q as QItemSection, a as QItem, b as QMenu } from "./QMenu.a93edd36.js";
import { Q as QList } from "./QList.1956b306.js";
import { Q as QTr, a as QTd, b as QTable, c as QTh } from "./QTable.d8cc3dd6.js";
import { Q as QSelect, a as QChip } from "./QSelect.9ad4de40.js";
import { Q as QPage } from "./QPage.92cb7a58.js";
import { a as PlaylistItemReadDtoFromJSON, P as PlaylistApi, b as PlaylistVisibility, C as ClosePopup } from "./ClosePopup.cc52804a.js";
import { a as sumDurations, f as formatDuration } from "./durationUtils.f059d1b6.js";
import { u as useQuasar } from "./use-quasar.50103501.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.aef9d798.js";
import { Q as QItemLabel } from "./rtl.c9bb81c1.js";
import { u as usePlaylistStore } from "./playlistStore.5c24500d.js";
import "./position-engine.16a45534.js";
import "./format.a33550d6.js";
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
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Add To Playlist");
const _hoisted_2$1 = /* @__PURE__ */ createTextVNode("Create Playlist");
const _hoisted_3$1 = {
  key: 1,
  class: "row no-wrap q-px-md q-pt-md"
};
const _hoisted_4$1 = { class: "column" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle1 q-mb-sm" }, "Create Playlist", -1);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
              _hoisted_1$1
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
                              _hoisted_2$1
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  playlistCreateActive.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                    createBaseVNode("div", _hoisted_4$1, [
                      _hoisted_5$1,
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
var AddToPlaylistMenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "AddToPlaylistMenu.vue"]]);
const _hoisted_1 = {
  key: 0,
  class: "row full-width q-px-none q-pt-lg"
};
const _hoisted_2 = {
  class: "col-4 q-px-md",
  style: { "max-width": "230px" }
};
const _hoisted_3 = { class: "col-8" };
const _hoisted_4 = { class: "row full-width full-height items-end" };
const _hoisted_5 = { class: "col-12" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Album", -1);
const _hoisted_7 = { class: "q-mb-sm-sm q-mb-none q-mt-md" };
const _hoisted_8 = { class: "col-12" };
const _hoisted_9 = { class: "row full-width" };
const _hoisted_10 = {
  key: 0,
  class: "text-subtitle1"
};
const _hoisted_11 = { class: "text-subtitle1" };
const _hoisted_12 = { class: "text-subtitle1" };
const _hoisted_13 = { class: "page-section-blur col-all q-mt-lg row" };
const _hoisted_14 = { class: "col-12 q-pt-md" };
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Play");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Play Next");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Add to Queue");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Save");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("View Full Metadata");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("Suggest an Edit");
const _hoisted_21 = { class: "col-12 q-pt-md q-px-md" };
const _hoisted_22 = { class: "flex row items-center text-subtitle1 text-bold" };
const _hoisted_23 = ["onClick"];
const _hoisted_24 = /* @__PURE__ */ createTextVNode("Play Next");
const _hoisted_25 = /* @__PURE__ */ createTextVNode("Add to Queue");
const _hoisted_26 = /* @__PURE__ */ createTextVNode("Copy Track Url");
const _hoisted_27 = /* @__PURE__ */ createTextVNode("View Metadata");
const __default__ = defineComponent({
  name: "AlbumPage"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const router = useRouter();
    const q = useQuasar();
    const { setColors } = usePageContainerBgStyleStore();
    const hoveringWhich = ref();
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
    const albumApi = new AlbumApi(apiConfig);
    const albumInfo = ref();
    const trackList = ref();
    const songQueue = QueueController.getInstance();
    const copyTrackUrl = (trackId) => {
      const loc = router.resolve({ name: "track", params: { trackId } });
      console.log(loc);
      let url = new URL(window.location.origin);
      url.pathname = window.location.pathname;
      url.hash = loc.href;
      navigator.clipboard.writeText(url.toString());
    };
    const gotoArtist = () => {
      router.push({ name: "artist", params: { artist: albumInfo.value.albumArtist[0].name } });
    };
    const gotoTrack = (trackId) => {
      router.push({ name: "track", params: { trackId } });
    };
    const getAlbumImage = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return ((_c = (_b = (_a = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.medium) == null ? void 0 : _c.url) === null ? "http://via.placeholder.com/640x360" : (_f = (_e = (_d = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _d.thumbnail) == null ? void 0 : _e.medium) == null ? void 0 : _f.url;
    });
    function viewMetadata() {
      var _a;
      router.push({ name: "albumMetadata", params: { albumId: (_a = albumInfo.value) == null ? void 0 : _a.id } });
    }
    function playAlbum(addToFront = true, playImmediately = true) {
      var _a;
      const albumTrackList = trackList.value;
      q.notify({
        position: "top",
        type: "secondary",
        message: `Added ${(_a = trackList.value) == null ? void 0 : _a.length} tracks to Queue`
      });
      songQueue.addTrackToQueueByIdBatch(albumTrackList == null ? void 0 : albumTrackList.map((e) => e == null ? void 0 : e.id), addToFront, playImmediately);
    }
    async function playTrack(trackId, addToFront = true, playImmediately = true) {
      let trackToPlay = null;
      if (!trackList.value) {
        alert("Empty Tracklist");
        return;
      }
      for (let track of trackList.value) {
        if (track.id == trackId) {
          trackToPlay = track;
          break;
        }
      }
      if (trackToPlay === null) {
        alert("Invalid Index. No Index: " + trackId + ". in track list.");
        return;
      }
      await songQueue.addTrackToQueueById(trackToPlay.id, addToFront, playImmediately);
      q.notify({
        position: "top",
        type: "secondary",
        message: "Added to Queue"
      });
    }
    async function fetchAlbum(albumId) {
      return albumApi.getAlbum({ id: albumId });
    }
    async function setAlbumPage() {
      var _a, _b, _c, _d, _e;
      albumInfo.value = await fetchAlbum(router.currentRoute.value.params.albumId);
      if ((_a = albumInfo.value) == null ? void 0 : _a.tracks) {
        (_b = albumInfo.value) == null ? void 0 : _b.tracks.sort((ta, tb) => {
          return ta.index - tb.index;
        });
        trackList.value = (_c = albumInfo.value) == null ? void 0 : _c.tracks;
      }
      setColors((_e = (_d = albumInfo.value) == null ? void 0 : _d.thumbnail) == null ? void 0 : _e.colors);
    }
    onMounted(async () => {
      await setAlbumPage();
    });
    onUpdated(async () => {
      await setAlbumPage();
    });
    const columns = [
      {
        name: "index",
        required: true,
        label: "#",
        align: "center",
        field: (row) => row.index,
        format: (val) => `${val}`,
        style: "width: 24px",
        sortable: false
      },
      {
        name: "title",
        required: true,
        label: "TITLE",
        align: "left",
        field: (row) => {
          var _a;
          return (_a = row.name) == null ? void 0 : _a._default;
        },
        format: (val) => `${val}`,
        classes: "text-h4",
        sortable: false
      },
      {
        name: "original",
        required: false,
        label: "ORIGINAL",
        align: "left",
        field: (row) => row.original,
        classes: "text-bold",
        sortable: false
      },
      {
        name: "duration",
        required: true,
        label: "DURATION",
        align: "right",
        field: (row) => row.duration,
        format: (val) => `${formatDuration(val)}`,
        classes: "text-grey-4",
        sortable: false
      }
    ];
    let totalDuration = computed(() => {
      var _a, _b;
      let allDurations = [];
      (_b = (_a = albumInfo.value) == null ? void 0 : _a.tracks) == null ? void 0 : _b.forEach((t) => {
        if (t.duration)
          allDurations.push(t.duration);
      });
      return sumDurations(allDurations);
    });
    const pagination = {
      rowsPerPage: 0,
      descending: true
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => {
          var _a;
          return [
            albumInfo.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QImg, {
                  src: unref(getAlbumImage),
                  ratio: "1"
                }, null, 8, ["src"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    _hoisted_6,
                    createBaseVNode("h3", _hoisted_7, toDisplayString(albumInfo.value.albumName._default), 1)
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", {
                        class: "text-subtitle1 text-bold cursor-pointer",
                        onClick: gotoArtist
                      }, toDisplayString(albumInfo.value.albumArtist[0].name), 1),
                      albumInfo.value.releaseDate ? (openBlock(), createBlock(QSeparator, {
                        key: 0,
                        vertical: "",
                        spaced: ""
                      })) : createCommentVNode("", true),
                      createBaseVNode("div", null, [
                        albumInfo.value.releaseDate ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString((_a = albumInfo.value.releaseDate) == null ? void 0 : _a.toLocaleDateString()), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(QSeparator, {
                        vertical: "",
                        spaced: ""
                      }),
                      createBaseVNode("div", _hoisted_11, toDisplayString(albumInfo.value.tracks.length) + " Tracks", 1),
                      createVNode(QSeparator, {
                        vertical: "",
                        spaced: ""
                      }),
                      createBaseVNode("div", _hoisted_12, toDisplayString(unref(totalDuration)), 1)
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createVNode(QBtn, {
                    fab: "",
                    class: "q-mx-md",
                    round: "",
                    icon: unref(outlinedPlayArrow),
                    color: "black",
                    "text-color": "white",
                    onClick: playAlbum
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          _hoisted_15
                        ]),
                        _: 1
                      }),
                      createVNode(QMenu, {
                        class: "bg-black border border-white",
                        "touch-position": "",
                        "context-menu": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QList, { style: { "min-width": "150px" } }, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, {
                                    onClick: _cache[0] || (_cache[0] = ($event) => playAlbum(true, false))
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_16
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, {
                                    onClick: _cache[1] || (_cache[1] = ($event) => playAlbum(false, false))
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_17
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode(QBtn, {
                    fab: "",
                    flat: "",
                    class: "q-mx-md",
                    round: "",
                    icon: unref(outlinedFavoriteBorder)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          _hoisted_18
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode(QBtn, {
                    fab: "",
                    flat: "",
                    class: "q-mx-md",
                    round: "",
                    icon: unref(outlinedMoreHoriz)
                  }, {
                    default: withCtx(() => [
                      createVNode(QMenu, {
                        fit: "",
                        anchor: "center middle",
                        self: "top middle"
                      }, {
                        default: withCtx(() => [
                          createVNode(QList, null, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                class: "bg-dark",
                                onClick: viewMetadata
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QAvatar, { icon: unref(outlinedDescription) }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      _hoisted_19
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                class: "bg-dark"
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QAvatar, { icon: unref(outlinedTipsAndUpdates) }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      _hoisted_20
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"])
                ]),
                createBaseVNode("div", _hoisted_21, [
                  createVNode(QTable, {
                    rows: trackList.value,
                    class: "transparent",
                    columns,
                    pagination,
                    separator: "none",
                    "row-key": "id",
                    flat: "",
                    "hide-bottom": "",
                    "virtual-scroll": "",
                    "hide-pagination": ""
                  }, {
                    header: withCtx((props) => [
                      createVNode(QTr, { props }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(props.cols, (col) => {
                            return openBlock(), createBlock(QTh, {
                              key: col.name,
                              props,
                              class: "text-grey border-bottom-thin"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(col.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["props"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell-index": withCtx((props) => [
                      createVNode(QTd, {
                        props,
                        class: "q-pa-sm"
                      }, {
                        default: withCtx(() => [
                          createVNode(QBtn, {
                            flat: "",
                            round: "",
                            class: "text-grey-5",
                            size: "13px",
                            onMouseover: ($event) => hoveringWhich.value = props.key,
                            onMouseleave: _cache[2] || (_cache[2] = ($event) => hoveringWhich.value = void 0),
                            onClick: ($event) => playTrack(props.key),
                            label: hoveringWhich.value !== props.key ? props.value : void 0,
                            icon: hoveringWhich.value === props.key ? unref(outlinedPlayArrow) : void 0
                          }, null, 8, ["onMouseover", "onClick", "label", "icon"])
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell-title": withCtx((props) => [
                      createVNode(QTd, { props }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_22, [
                            createBaseVNode("div", {
                              class: "underline-on-hover pointer-on-hover",
                              onClick: ($event) => gotoTrack(props.key)
                            }, toDisplayString(props.value), 9, _hoisted_23)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell-original": withCtx((props) => [
                      createVNode(QTd, { props }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(props.value, (prop) => {
                            return openBlock(), createBlock(QChip, {
                              square: "",
                              class: "bg-white-a-5",
                              key: prop.id
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(prop.title.en), 1)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    "body-cell": withCtx((props) => [
                      createVNode(QTd, { props }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(props.value), 1)
                        ]),
                        _: 2
                      }, 1032, ["props"]),
                      createVNode(QMenu, {
                        class: "bg-black border border-white",
                        "context-menu": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QList, { style: { "min-width": "150px" } }, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, {
                                    onClick: ($event) => playTrack(props.key, true, false)
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_24
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, {
                                    onClick: ($event) => playTrack(props.key, false, false)
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_25
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)), [
                                [ClosePopup]
                              ]),
                              createVNode(AddToPlaylistMenu, {
                                "track-id": props.key
                              }, null, 8, ["track-id"]),
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, {
                                    onClick: ($event) => copyTrackUrl(props.key)
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_26
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      _hoisted_27
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 1
                  }, 8, ["rows"])
                ])
              ])
            ])) : createCommentVNode("", true)
          ];
        }),
        _: 1
      });
    };
  }
});
var AlbumPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AlbumPage.vue"]]);
export { AlbumPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLmY4ODJiYmI1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9QbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvYXBpcy9QbGF5bGlzdEl0ZW1BcGkudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BZGRUb1BsYXlsaXN0TWVudS52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUGxheWxpc3RJdGVtQWRkUmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3Qge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3RcbiAgICAgKi9cbiAgICBwbGF5bGlzdElkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3RcbiAgICAgKi9cbiAgICBwbGF5bGlzdEl0ZW1JZD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0IGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0KHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG5cbiAgICByZXR1cm4gaXNJbnN0YW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3RGcm9tSlNPTihqc29uOiBhbnkpOiBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0IHtcbiAgICByZXR1cm4gUGxheWxpc3RJdGVtQWRkUmVxdWVzdEZyb21KU09OVHlwZWQoanNvbiwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWxpc3RJdGVtQWRkUmVxdWVzdEZyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogUGxheWxpc3RJdGVtQWRkUmVxdWVzdCB7XG4gICAgaWYgKChqc29uID09PSB1bmRlZmluZWQpIHx8IChqc29uID09PSBudWxsKSkge1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdwbGF5bGlzdElkJzogIWV4aXN0cyhqc29uLCAncGxheWxpc3RJZCcpID8gdW5kZWZpbmVkIDoganNvblsncGxheWxpc3RJZCddLFxuICAgICAgICAncGxheWxpc3RJdGVtSWQnOiAhZXhpc3RzKGpzb24sICdwbGF5bGlzdEl0ZW1JZCcpID8gdW5kZWZpbmVkIDoganNvblsncGxheWxpc3RJdGVtSWQnXSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWxpc3RJdGVtQWRkUmVxdWVzdFRvSlNPTih2YWx1ZT86IFBsYXlsaXN0SXRlbUFkZFJlcXVlc3QgfCBudWxsKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAncGxheWxpc3RJZCc6IHZhbHVlLnBsYXlsaXN0SWQsXG4gICAgICAgICdwbGF5bGlzdEl0ZW1JZCc6IHZhbHVlLnBsYXlsaXN0SXRlbUlkLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cbmltcG9ydCB7IGV4aXN0cywgbWFwVmFsdWVzIH0gZnJvbSAnLi4vcnVudGltZSc7XG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdFxuICAgICAqL1xuICAgIHBsYXlsaXN0SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdFxuICAgICAqL1xuICAgIHBsYXlsaXN0SXRlbUlkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3QgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VPZlBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3QodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdEZyb21KU09OKGpzb246IGFueSk6IFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3Qge1xuICAgIHJldHVybiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0RnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0RnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0IHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3BsYXlsaXN0SWQnOiAhZXhpc3RzKGpzb24sICdwbGF5bGlzdElkJykgPyB1bmRlZmluZWQgOiBqc29uWydwbGF5bGlzdElkJ10sXG4gICAgICAgICdwbGF5bGlzdEl0ZW1JZCc6ICFleGlzdHMoanNvbiwgJ3BsYXlsaXN0SXRlbUlkJykgPyB1bmRlZmluZWQgOiBqc29uWydwbGF5bGlzdEl0ZW1JZCddLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0VG9KU09OKHZhbHVlPzogUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdwbGF5bGlzdElkJzogdmFsdWUucGxheWxpc3RJZCxcbiAgICAgICAgJ3BsYXlsaXN0SXRlbUlkJzogdmFsdWUucGxheWxpc3RJdGVtSWQsXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuXG5pbXBvcnQgKiBhcyBydW50aW1lIGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHR5cGUge1xuICBQbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0LFxuICBQbGF5bGlzdEl0ZW1EZWxldGVSZXF1ZXN0LFxuICBQbGF5bGlzdEl0ZW1SZWFkRHRvLFxuICBQcm9ibGVtRGV0YWlscyxcbn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7XG4gICAgUGxheWxpc3RJdGVtQWRkUmVxdWVzdEZyb21KU09OLFxuICAgIFBsYXlsaXN0SXRlbUFkZFJlcXVlc3RUb0pTT04sXG4gICAgUGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdEZyb21KU09OLFxuICAgIFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RUb0pTT04sXG4gICAgUGxheWxpc3RJdGVtUmVhZER0b0Zyb21KU09OLFxuICAgIFBsYXlsaXN0SXRlbVJlYWREdG9Ub0pTT04sXG4gICAgUHJvYmxlbURldGFpbHNGcm9tSlNPTixcbiAgICBQcm9ibGVtRGV0YWlsc1RvSlNPTixcbn0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBBZGRQbGF5bGlzdEl0ZW1Ub1BsYXlsaXN0UmVxdWVzdCB7XG4gICAgcGxheWxpc3RJdGVtQWRkUmVxdWVzdD86IFBsYXlsaXN0SXRlbUFkZFJlcXVlc3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0UmVxdWVzdCB7XG4gICAgcGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdD86IFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5jcmVtZW50UGxheUNvdW50UmVxdWVzdCB7XG4gICAgcGxheWxpc3RJZD86IHN0cmluZztcbiAgICB0cmFja0lkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgUGxheWxpc3RJdGVtQXBpIGV4dGVuZHMgcnVudGltZS5CYXNlQVBJIHtcblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSYXcocmVxdWVzdFBhcmFtZXRlcnM6IEFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPFBsYXlsaXN0SXRlbVJlYWREdG8+PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1ldGVyczogYW55ID0ge307XG5cbiAgICAgICAgY29uc3QgaGVhZGVyUGFyYW1ldGVyczogcnVudGltZS5IVFRQSGVhZGVycyA9IHt9O1xuXG4gICAgICAgIGhlYWRlclBhcmFtZXRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24tcGF0Y2granNvbic7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL3BsYXlsaXN0SXRlbWAsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgYm9keTogUGxheWxpc3RJdGVtQWRkUmVxdWVzdFRvSlNPTihyZXF1ZXN0UGFyYW1ldGVycy5wbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0KSxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLkpTT05BcGlSZXNwb25zZShyZXNwb25zZSwgKGpzb25WYWx1ZSkgPT4gUGxheWxpc3RJdGVtUmVhZER0b0Zyb21KU09OKGpzb25WYWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3QocmVxdWVzdFBhcmFtZXRlcnM6IEFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSZXF1ZXN0ID0ge30sIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPFBsYXlsaXN0SXRlbVJlYWREdG8+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFkZFBsYXlsaXN0SXRlbVRvUGxheWxpc3RSYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudmFsdWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBkZWxldGVQbGF5bGlzdEl0ZW1Gcm9tUGxheWxpc3RSYXcocmVxdWVzdFBhcmFtZXRlcnM6IERlbGV0ZVBsYXlsaXN0SXRlbUZyb21QbGF5bGlzdFJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8dm9pZD4+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbi1wYXRjaCtqc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvcGxheWxpc3RJdGVtYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgIGJvZHk6IFBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3RUb0pTT04ocmVxdWVzdFBhcmFtZXRlcnMucGxheWxpc3RJdGVtRGVsZXRlUmVxdWVzdCksXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5Wb2lkQXBpUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGRlbGV0ZVBsYXlsaXN0SXRlbUZyb21QbGF5bGlzdChyZXF1ZXN0UGFyYW1ldGVyczogRGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0UmVxdWVzdCA9IHt9LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0UmF3KHJlcXVlc3RQYXJhbWV0ZXJzLCBpbml0T3ZlcnJpZGVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBpbmNyZW1lbnRQbGF5Q291bnRSYXcocmVxdWVzdFBhcmFtZXRlcnM6IEluY3JlbWVudFBsYXlDb3VudFJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8dm9pZD4+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBpZiAocmVxdWVzdFBhcmFtZXRlcnMucGxheWxpc3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ1BsYXlsaXN0SWQnXSA9IHJlcXVlc3RQYXJhbWV0ZXJzLnBsYXlsaXN0SWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdFBhcmFtZXRlcnMudHJhY2tJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtZXRlcnNbJ1RyYWNrSWQnXSA9IHJlcXVlc3RQYXJhbWV0ZXJzLnRyYWNrSWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL3BsYXlsaXN0SXRlbS9pbmNgLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLlZvaWRBcGlSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgaW5jcmVtZW50UGxheUNvdW50KHJlcXVlc3RQYXJhbWV0ZXJzOiBJbmNyZW1lbnRQbGF5Q291bnRSZXF1ZXN0ID0ge30sIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5pbmNyZW1lbnRQbGF5Q291bnRSYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgIH1cblxufVxuIiwiPHRlbXBsYXRlPlxuICA8cS1pdGVtIGNsaWNrYWJsZT5cbiAgICA8cS1pdGVtLXNlY3Rpb24+QWRkIFRvIFBsYXlsaXN0PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgIDxxLWljb24gbmFtZT1cImtleWJvYXJkX2Fycm93X3JpZ2h0XCIgLz5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLW1lbnVcbiAgICAgIGNsYXNzPVwiYmctYmxhY2sgYm9yZGVyIGJvcmRlci13aGl0ZVwiXG4gICAgICBhbmNob3I9XCJ0b3AgZW5kXCJcbiAgICAgIHNlbGY9XCJ0b3Agc3RhcnRcIlxuICAgID5cbiAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSBAY2xpY2s9XCJvblBsYXlsaXN0Q3JlYXRlQnRuQ2xpY2tcIiB2LWlmPVwiIXBsYXlsaXN0Q3JlYXRlQWN0aXZlXCI+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgICA8cS1pY29uIG5hbWU9XCJwbGF5bGlzdF9hZGRcIiBzaXplPVwiMjRweFwiIGNsYXNzPVwicS1weC1zbVwiLz5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+Q3JlYXRlIFBsYXlsaXN0PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBuby13cmFwIHEtcHgtbWQgcS1wdC1tZFwiIHYtaWY9XCJwbGF5bGlzdENyZWF0ZUFjdGl2ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSBxLW1iLXNtXCI+Q3JlYXRlIFBsYXlsaXN0PC9kaXY+XG4gICAgICAgICAgICA8cS1pbnB1dCBzdGFuZG91dD1cImJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIGlucHV0LXN0eWxlPVwiY29sb3I6ICNGRkZGRkZcIiB2LW1vZGVsPVwicGxheWxpc3ROYW1lXCIgbGFiZWw9XCJOYW1lXCIvPlxuICAgICAgICAgICAgPHEtc2VsZWN0IHYtbW9kZWw9XCJwbGF5bGlzdFZpc2liaWxpdHlcIiA6b3B0aW9ucz1cInZpc2liaWxpdHlPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZpc2liaWxpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgIHBvcHVwLWNvbnRlbnQtc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwXCIgLz5cbiAgICAgICAgICAgIDxxLWJ0biBvdXRsaW5lIGNsYXNzPVwicS1tdC1zbVwiIGxhYmVsPVwiQ3JlYXRlXCIgQGNsaWNrPVwiY3JlYXRlUGxheWxpc3RcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cS1zZXBhcmF0b3Igc3BhY2VkIC8+XG4gICAgICAgIDxxLWl0ZW0gdGFnPVwibGFiZWxcIiB2LXJpcHBsZSB2LWZvcj1cIihpdGVtKSBpbiBwbGF5bGlzdHNcIiA6a2V5PVwiaXRlbS5pZFwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIHRvcD5cbiAgICAgICAgICAgIDxxLWNoZWNrYm94IDp2YWw9XCJpdGVtLmlkXCIgdi1tb2RlbD1cInBsYXlsaXN0U3RhdHVzXCIvPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD57eyBpdGVtLm5hbWUgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1tZW51PlxuICA8L3EtaXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3VzZVBsYXlsaXN0U3RvcmV9IGZyb20gJ3N0b3Jlcy9wbGF5bGlzdFN0b3JlJztcbmltcG9ydCB7Y29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7UGxheWxpc3RBcGksIFBsYXlsaXN0SXRlbUFwaSwgUGxheWxpc3RWaXNpYmlsaXR5fSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gXCJzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXJcIjtcbmltcG9ydCB7dXNlUXVhc2FyfSBmcm9tIFwicXVhc2FyXCI7XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgdHJhY2tJZDogc3RyaW5nXG59PigpO1xuXG5sZXQgZmlyc3RBY3RpdmF0ZSA9IHRydWU7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCBwbGF5bGlzdFN0b3JlID0gdXNlUGxheWxpc3RTdG9yZSgpO1xuXG5jb25zdCBwbGF5bGlzdHMgPSBjb21wdXRlZCgoKSA9PiBwbGF5bGlzdFN0b3JlLmdldFBsYXlsaXN0cyk7XG5jb25zdCBwbGF5bGlzdEFwaSA9IG5ldyBQbGF5bGlzdEFwaShBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpKTtcbmNvbnN0IHBsYXlsaXN0SXRlbUFwaSA9IG5ldyBQbGF5bGlzdEl0ZW1BcGkoQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKSk7XG5cbmNvbnN0IG9uUGxheWxpc3RDcmVhdGVCdG5DbGljayA9ICgpID0+IHsgcGxheWxpc3RDcmVhdGVBY3RpdmUudmFsdWUgPSB0cnVlIH1cbmNvbnN0IHBsYXlsaXN0Q3JlYXRlQWN0aXZlID0gcmVmKGZhbHNlKTtcbmNvbnN0IHBsYXlsaXN0TmFtZSA9IHJlZigpO1xuY29uc3QgcGxheWxpc3RWaXNpYmlsaXR5ID0gcmVmKFBsYXlsaXN0VmlzaWJpbGl0eS5Qcml2YXRlKTtcbmNvbnN0IHZpc2liaWxpdHlPcHRpb25zID0gW1BsYXlsaXN0VmlzaWJpbGl0eS5QdWJsaWMsIFBsYXlsaXN0VmlzaWJpbGl0eS5Vbmxpc3RlZCwgUGxheWxpc3RWaXNpYmlsaXR5LlByaXZhdGVdXG5jb25zdCBjcmVhdGVQbGF5bGlzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcGxheWxpc3RBcGkuY3JlYXRlUGxheWxpc3Qoe1xuICAgIHBsYXlsaXN0Q3JlYXRlUmVxdWVzdDoge1xuICAgICAgbmFtZTogcGxheWxpc3ROYW1lLnZhbHVlLFxuICAgICAgdmlzaWJpbGl0eTogcGxheWxpc3RWaXNpYmlsaXR5LnZhbHVlXG4gICAgfVxuICB9KTtcblxuICBwbGF5bGlzdFN0b3JlLmFkZFBsYXlsaXN0KHJlc3VsdCk7XG4gICRxLm5vdGlmeSh7XG4gICAgcG9zaXRpb246ICd0b3AnLFxuICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgIG1lc3NhZ2U6IGBQbGF5bGlzdCBDcmVhdGVkYFxuICB9KTtcbn1cblxubGV0IHBsYXlsaXN0U3RhdHVzID0gcmVmPHN0cmluZ1tdPihbXSk7XG5cbndhdGNoKHBsYXlsaXN0U3RhdHVzLCBhc3luYyAodmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gIGlmIChmaXJzdEFjdGl2YXRlKSB7XG4gICAgZmlyc3RBY3RpdmF0ZSA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkaWZmZXJlbmNlID0gdmFsdWUhXG4gICAgLmZpbHRlcih4ID0+ICFvbGRWYWx1ZSEuaW5jbHVkZXMoeCkpXG4gICAgLmNvbmNhdChvbGRWYWx1ZSEuZmlsdGVyKHggPT4gIXZhbHVlIS5pbmNsdWRlcyh4KSkpO1xuXG4gIGlmICghZGlmZmVyZW5jZSB8fCBkaWZmZXJlbmNlLmxlbmd0aCA9PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGRpZmZlcmVuY2UubGVuZ3RoID4gMSkge1xuICAgIGFsZXJ0KGBQbGF5bGlzdCBEZWx0YSA+IDEgKEFjdHVhbDogJHtkaWZmZXJlbmNlLmxlbmd0aH0pLiBDYW5ub3QgcHJvY2VlZGApXG4gIH1cblxuICBjb25zdCBpc0FkZCA9IHZhbHVlLmxlbmd0aCA+IG9sZFZhbHVlLmxlbmd0aDtcbiAgY29uc3QgYWRtID0gaXNBZGQgPyAnQWRkZWQnIDogJ1JlbW92ZWQnO1xuICBjb25zb2xlLmxvZyhhZG0udG9TdHJpbmcoKSArIGRpZmZlcmVuY2UudG9TdHJpbmcoKSlcblxuICBpZiAoaXNBZGQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwbGF5bGlzdEl0ZW1BcGkuYWRkUGxheWxpc3RJdGVtVG9QbGF5bGlzdCh7XG4gICAgICBwbGF5bGlzdEl0ZW1BZGRSZXF1ZXN0OiB7XG4gICAgICAgIHBsYXlsaXN0SXRlbUlkOiBwcm9wcy50cmFja0lkLFxuICAgICAgICBwbGF5bGlzdElkOiBkaWZmZXJlbmNlWzBdXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwbGF5bGlzdFN0b3JlLmFkZFBsYXlsaXN0SXRlbShkaWZmZXJlbmNlWzBdLCByZXN1bHQpO1xuICAgICRxLm5vdGlmeSh7XG4gICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICAgIG1lc3NhZ2U6IGBBZGRlZCB0byBQbGF5bGlzdGBcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwbGF5bGlzdEl0ZW1BcGkuZGVsZXRlUGxheWxpc3RJdGVtRnJvbVBsYXlsaXN0KHtcbiAgICAgIHBsYXlsaXN0SXRlbURlbGV0ZVJlcXVlc3Q6IHtcbiAgICAgICAgcGxheWxpc3RJdGVtSWQ6IHByb3BzLnRyYWNrSWQsXG4gICAgICAgIHBsYXlsaXN0SWQ6IGRpZmZlcmVuY2VbMF1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXlsaXN0U3RvcmUucmVtb3ZlUGxheWxpc3RJdGVtKGRpZmZlcmVuY2VbMF0sIHByb3BzLnRyYWNrSWQpO1xuICAgICRxLm5vdGlmeSh7XG4gICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICAgIG1lc3NhZ2U6IGBEZWxldGVkIGZyb20gUGxheWxpc3RgXG4gICAgfSk7XG4gIH1cbn0sIHtkZWVwOiB0cnVlfSlcblxub25Nb3VudGVkKCgpID0+IHtcbiAgcGxheWxpc3RTdGF0dXMudmFsdWUgPSBwbGF5bGlzdHMudmFsdWUuZmlsdGVyKGkgPT4gcGxheWxpc3RTdG9yZS5oYXNQbGF5bGlzdEl0ZW0oaS5pZCEsIHByb3BzLnRyYWNrSWQpKS5tYXAoZSA9PiBlLmlkISk7XG59KVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cImFsYnVtSW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHEtcHgtbWRcIiBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1nZXRBbGJ1bUltYWdlXG4gICAgICAgICAgcmF0aW89XCIxXCI+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5BbGJ1bTwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPnt7IGFsYnVtSW5mby5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGQgY3Vyc29yLXBvaW50ZXJcIiBAY2xpY2s9XCJnb3RvQXJ0aXN0XCI+XG4gICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLnRyYWNrcy5sZW5ndGggfX0gVHJhY2tzPC9kaXY+XG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgdG90YWxEdXJhdGlvbiB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXNlY3Rpb24tYmx1ciBjb2wtYWxsIHEtbXQtbGcgcm93XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiIEBjbGljaz1cInBsYXlBbGJ1bVwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlXCJcblxuICAgICAgICAgICAgICB0b3VjaC1wb3NpdGlvblxuICAgICAgICAgICAgICBjb250ZXh0LW1lbnVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMTUwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBAY2xpY2s9XCJwbGF5QWxidW0odHJ1ZSwgZmFsc2UpXCI+UGxheSBOZXh0PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIEBjbGljaz1cInBsYXlBbGJ1bShmYWxzZSwgZmFsc2UpXCI+QWRkIHRvIFF1ZXVlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgPHEtYnRuIGZhYiBmbGF0IGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIDppY29uPVwib3V0bGluZWRGYXZvcml0ZUJvcmRlclwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5TYXZlPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCI+XG4gICAgICAgICAgICA8cS1tZW51IGZpdCBhbmNob3I9XCJjZW50ZXIgbWlkZGxlXCIgc2VsZj1cInRvcCBtaWRkbGVcIj5cbiAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwIGNsYXNzPVwiYmctZGFya1wiIEBjbGljaz1cInZpZXdNZXRhZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPVwib3V0bGluZWREZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlZpZXcgRnVsbCBNZXRhZGF0YTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cCBjbGFzcz1cImJnLWRhcmtcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1cIm91dGxpbmVkVGlwc0FuZFVwZGF0ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5TdWdnZXN0IGFuIEVkaXQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWQgcS1weC1tZFwiPlxuICAgICAgICAgIDxxLXRhYmxlIDpyb3dzPVwidHJhY2tMaXN0XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgcm93LWtleT1cImlkXCJcbiAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgaGlkZS1ib3R0b21cbiAgICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICAgIGhpZGUtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdHIgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8cS10aCB2LWZvcj1cImNvbCBpbiBwcm9wcy5jb2xzXCIgOmtleT1cImNvbC5uYW1lXCIgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXkgYm9yZGVyLWJvdHRvbS10aGluXCI+XG4gICAgICAgICAgICAgICAgICB7eyBjb2wubGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L3EtdGg+XG4gICAgICAgICAgICAgIDwvcS10cj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLWluZGV4PVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIiBjbGFzcz1cInEtcGEtc21cIj5cbiAgICAgICAgICAgICAgICA8cS1idG4gZmxhdCByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwiaG92ZXJpbmdXaGljaCA9IHByb3BzLmtleVwiIEBtb3VzZWxlYXZlPVwiaG92ZXJpbmdXaGljaCA9IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBsYXlUcmFjayhwcm9wcy5rZXkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiaG92ZXJpbmdXaGljaCAhPT0gcHJvcHMua2V5ID8gcHJvcHMudmFsdWUgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICA6aWNvbj1cImhvdmVyaW5nV2hpY2ggPT09IHByb3BzLmtleSA/IG91dGxpbmVkUGxheUFycm93IDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtdGl0bGU9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHJvdyBpdGVtcy1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5kZXJsaW5lLW9uLWhvdmVyIHBvaW50ZXItb24taG92ZXJcIiBAY2xpY2s9XCJnb3RvVHJhY2socHJvcHMua2V5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9wcy52YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLW9yaWdpbmFsPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8cS1jaGlwIHNxdWFyZSBjbGFzcz1cImJnLXdoaXRlLWEtNVwiIHYtZm9yPVwicHJvcCBpbiBwcm9wcy52YWx1ZVwiIDprZXk9XCJwcm9wLmlkXCI+XG4gICAgICAgICAgICAgICAgICB7eyBwcm9wLnRpdGxlLmVuIH19XG4gICAgICAgICAgICAgICAgPC9xLWNoaXA+XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICB7e3Byb3BzLnZhbHVlfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0LW1lbnVcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIEBjbGljaz1cInBsYXlUcmFjayhwcm9wcy5rZXksIHRydWUsIGZhbHNlKVwiPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBAY2xpY2s9XCJwbGF5VHJhY2socHJvcHMua2V5LCBmYWxzZSwgZmFsc2UpXCI+QWRkIHRvIFF1ZXVlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8QWRkVG9QbGF5bGlzdE1lbnUgOnRyYWNrLWlkPVwicHJvcHMua2V5XCI+PC9BZGRUb1BsYXlsaXN0TWVudT5cblxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIEBjbGljaz1cImNvcHlUcmFja1VybChwcm9wcy5rZXkpXCI+Q29weSBUcmFjayBVcmw8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VmlldyBNZXRhZGF0YTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS10YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0FsYnVtUGFnZSdcbn0pXG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheUFycm93LFxuICBvdXRsaW5lZE1vcmVIb3JpeixcbiAgb3V0bGluZWRGYXZvcml0ZUJvcmRlcixcbiAgb3V0bGluZWRQbGF5bGlzdEFkZCxcbiAgb3V0bGluZWREZXNjcmlwdGlvbixcbiAgb3V0bGluZWRUaXBzQW5kVXBkYXRlc1xufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7Y29tcHV0ZWQsIG9uTW91bnRlZCwgb25VcGRhdGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge0FsYnVtQXBpLCBPcmlnaW5hbFRyYWNrUmVhZER0b30gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7IGZvcm1hdER1cmF0aW9uLCBzdW1EdXJhdGlvbnMgfSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuaW1wb3J0IHtRdWV1ZUNvbnRyb2xsZXJ9IGZyb20gJ3NyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXInO1xuaW1wb3J0IHtyb3V0ZX0gZnJvbSBcInF1YXNhci93cmFwcGVyc1wiO1xuaW1wb3J0IEFkZFRvUGxheWxpc3RNZW51IGZyb20gXCJjb21wb25lbnRzL0FkZFRvUGxheWxpc3RNZW51LnZ1ZVwiO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHsgc2V0Q29sb3JzIH0gPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IGhvdmVyaW5nV2hpY2ggPSByZWY8bnVtYmVyPigpO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpO1xuY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcbmNvbnN0IGFsYnVtSW5mbyA9IHJlZjxBbGJ1bVJlYWREdG8+KCk7XG5jb25zdCB0cmFja0xpc3QgPSByZWY8VHJhY2tSZWFkRHRvW10+KCk7XG5cbmNvbnN0IHNvbmdRdWV1ZSA9IFF1ZXVlQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xuXG5jb25zdCBjb3B5VHJhY2tVcmwgPSAodHJhY2tJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGxvYyA9IHJvdXRlci5yZXNvbHZlKHsgbmFtZTogJ3RyYWNrJywgcGFyYW1zOiB7IHRyYWNrSWQ6IHRyYWNrSWQgfX0pO1xuICBjb25zb2xlLmxvZyhsb2MpO1xuXG4gIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xuICB1cmwucGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIHVybC5oYXNoID0gbG9jLmhyZWY7XG5cbiAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodXJsLnRvU3RyaW5nKCkpO1xufVxuXG5jb25zdCBnb3RvQXJ0aXN0ID0gKCkgPT4ge1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhcnRpc3QnLCBwYXJhbXM6IHsgYXJ0aXN0OiBhbGJ1bUluZm8udmFsdWUuYWxidW1BcnRpc3RbMF0ubmFtZSB9IH0pXG59XG5cbmNvbnN0IGdvdG9UcmFjayA9ICh0cmFja0lkOiBzdHJpbmcpID0+IHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAndHJhY2snLCBwYXJhbXM6IHsgdHJhY2tJZDogdHJhY2tJZCB9IH0pXG59XG5cbmNvbnN0IGdldEFsYnVtSW1hZ2UgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBhbGJ1bUluZm8/LnZhbHVlPy50aHVtYm5haWw/Lm1lZGl1bT8udXJsID09PSBudWxsID9cbiAgICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4MzYwJyA6IGFsYnVtSW5mbz8udmFsdWU/LnRodW1ibmFpbD8ubWVkaXVtPy51cmxcbn0pXG5cbmZ1bmN0aW9uIHZpZXdNZXRhZGF0YSgpIHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAnYWxidW1NZXRhZGF0YScsIHBhcmFtczogeyBhbGJ1bUlkOiBhbGJ1bUluZm8udmFsdWU/LmlkIH0gfSlcbn1cblxuZnVuY3Rpb24gcGxheUFsYnVtKGFkZFRvRnJvbnQ9dHJ1ZSwgcGxheUltbWVkaWF0ZWx5PXRydWUpIHtcbiAgY29uc3QgYWxidW1UcmFja0xpc3QgPSB0cmFja0xpc3QudmFsdWU7XG5cbiAgLy8gYWxidW1UcmFja0xpc3Q/LnNvcnQoKGUxLCBlMikgPT4ge1xuICAvLyAgIHJldHVybiA8bnVtYmVyPmUyLmluZGV4IC0gPG51bWJlcj5lMS5pbmRleDtcbiAgLy8gfSk7XG5cbiAgcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiBgQWRkZWQgJHt0cmFja0xpc3QudmFsdWU/Lmxlbmd0aH0gdHJhY2tzIHRvIFF1ZXVlYFxuICB9KVxuXG4gIC8vIGNvbnN0IHRvYWRkID0gPHN0cmluZ1tdPmFsYnVtVHJhY2tMaXN0Py5tYXAoZSA9PiBlPy5pZCkucmV2ZXJzZSgpO1xuICBzb25nUXVldWUuYWRkVHJhY2tUb1F1ZXVlQnlJZEJhdGNoKDxzdHJpbmdbXT5hbGJ1bVRyYWNrTGlzdD8ubWFwKGUgPT4gZT8uaWQpLCBhZGRUb0Zyb250LCBwbGF5SW1tZWRpYXRlbHkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwbGF5VHJhY2sodHJhY2tJZDogc3RyaW5nLCBhZGRUb0Zyb250PXRydWUsIHBsYXlJbW1lZGlhdGVseT10cnVlKSB7XG4gIGxldCB0cmFja1RvUGxheSA9IG51bGw7XG4gIGlmICghdHJhY2tMaXN0LnZhbHVlKSB7XG4gICAgYWxlcnQoJ0VtcHR5IFRyYWNrbGlzdCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IHRyYWNrIG9mIHRyYWNrTGlzdC52YWx1ZSkge1xuICAgIGlmICh0cmFjay5pZCA9PSB0cmFja0lkKSB7XG4gICAgICB0cmFja1RvUGxheSA9IHRyYWNrO1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAodHJhY2tUb1BsYXkgPT09IG51bGwpIHtcbiAgICBhbGVydCgnSW52YWxpZCBJbmRleC4gTm8gSW5kZXg6ICcgKyB0cmFja0lkICsgJy4gaW4gdHJhY2sgbGlzdC4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBhd2FpdCBzb25nUXVldWUuYWRkVHJhY2tUb1F1ZXVlQnlJZCg8c3RyaW5nPiB0cmFja1RvUGxheS5pZCwgYWRkVG9Gcm9udCwgcGxheUltbWVkaWF0ZWx5KTtcbiAgcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiAnQWRkZWQgdG8gUXVldWUnXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFsYnVtKGFsYnVtSWQ6IHN0cmluZyk6IFByb21pc2U8QWxidW1SZWFkRHRvPiB7XG4gIHJldHVybiBhbGJ1bUFwaS5nZXRBbGJ1bSh7aWQ6IGFsYnVtSWR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0QWxidW1QYWdlKCkge1xuICBhbGJ1bUluZm8udmFsdWUgPSBhd2FpdCBmZXRjaEFsYnVtKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuYWxidW1JZCk7XG4gIGlmIChhbGJ1bUluZm8udmFsdWU/LnRyYWNrcykge1xuICAgIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzLnNvcnQoKHRhLCB0YikgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgIHJldHVybiB0YS5pbmRleCEgLSB0Yi5pbmRleCFcbiAgICB9KVxuICAgIHRyYWNrTGlzdC52YWx1ZSA9IGFsYnVtSW5mby52YWx1ZT8udHJhY2tzO1xuICB9XG4gIHNldENvbG9ycyg8c3RyaW5nW10+YWxidW1JbmZvLnZhbHVlPy50aHVtYm5haWw/LmNvbG9ycyk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHNldEFsYnVtUGFnZSgpO1xufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XG59KVxuXG5jb25zdCBjb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2luZGV4JyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJyMnLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuaW5kZXgsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIHN0eWxlOiAnd2lkdGg6IDI0cHgnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ1RJVExFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5uYW1lPy5fZGVmYXVsdCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtaDQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ29yaWdpbmFsJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgbGFiZWw6ICdPUklHSU5BTCcsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cub3JpZ2luYWwsXG4gICAgLy8gZm9ybWF0OiAodmFsOiBPcmlnaW5hbFRyYWNrUmVhZER0b1tdKSA9PiB2YWwubWFwKGUgPT4gZS50aXRsZT8uZW4pLmpvaW4oJyDilIIgJyksXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5kdXJhdGlvbixcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7Zm9ybWF0RHVyYXRpb24odmFsKX1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWdyZXktNCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH1cbl1cblxubGV0IHRvdGFsRHVyYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gIGxldCBhbGxEdXJhdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgYWxidW1JbmZvLnZhbHVlPy50cmFja3M/LmZvckVhY2godCA9PiB7XG4gICAgaWYgKHQuZHVyYXRpb24pIGFsbER1cmF0aW9ucy5wdXNoKHQuZHVyYXRpb24pXG4gIH0pO1xuICByZXR1cm4gc3VtRHVyYXRpb25zKGFsbER1cmF0aW9ucyk7XG59KVxuXG5jb25zdCBwYWdpbmF0aW9uID0ge1xuICByb3dzUGVyUGFnZTogMCxcbiAgZGVzY2VuZGluZzogdHJ1ZVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsicnVudGltZS5CYXNlQVBJIiwicnVudGltZS5KU09OQXBpUmVzcG9uc2UiLCJydW50aW1lLlZvaWRBcGlSZXNwb25zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQTJETyxTQUFTLDZCQUE2QixPQUE0QztBQUNyRixNQUFJLFVBQVUsUUFBVztBQUNkLFdBQUE7QUFBQSxFQUNYO0FBQ0EsTUFBSSxVQUFVLE1BQU07QUFDVCxXQUFBO0FBQUEsRUFDWDtBQUNPLFNBQUE7QUFBQSxJQUVILGNBQWMsTUFBTTtBQUFBLElBQ3BCLGtCQUFrQixNQUFNO0FBQUEsRUFBQTtBQUVoQztBQ1pPLFNBQVMsZ0NBQWdDLE9BQStDO0FBQzNGLE1BQUksVUFBVSxRQUFXO0FBQ2QsV0FBQTtBQUFBLEVBQ1g7QUFDQSxNQUFJLFVBQVUsTUFBTTtBQUNULFdBQUE7QUFBQSxFQUNYO0FBQ08sU0FBQTtBQUFBLElBRUgsY0FBYyxNQUFNO0FBQUEsSUFDcEIsa0JBQWtCLE1BQU07QUFBQSxFQUFBO0FBRWhDO0FDdEJhLE1BQUEsd0JBQXdCQSxRQUFnQjtBQUFBLEVBSWpELE1BQU0sNkJBQTZCLG1CQUFxRCxlQUErRztBQUNuTSxVQUFNLGtCQUF1QixDQUFBO0FBRTdCLFVBQU0sbUJBQXdDLENBQUE7QUFFOUMscUJBQWlCLGtCQUFrQjtBQUVuQyxRQUFJLEtBQUssaUJBQWlCLEtBQUssY0FBYyxRQUFRO0FBQ2pELHVCQUFpQixtQkFBbUIsS0FBSyxjQUFjLE9BQU8sZUFBZTtBQUFBLElBQ2pGO0FBRU0sVUFBQSxXQUFXLE1BQU0sS0FBSyxRQUFRO0FBQUEsTUFDaEMsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsTUFBTSw2QkFBNkIsa0JBQWtCLHNCQUFzQjtBQUFBLE9BQzVFLGFBQWE7QUFFVCxXQUFBLElBQUlDLGdCQUF3QixVQUFVLENBQUMsY0FBYyw0QkFBNEIsU0FBUyxDQUFDO0FBQUEsRUFDdEc7QUFBQSxFQUlBLE1BQU0sMEJBQTBCLG9CQUFzRCxJQUFJLGVBQTBGO0FBQ2hMLFVBQU0sV0FBVyxNQUFNLEtBQUssNkJBQTZCLG1CQUFtQixhQUFhO0FBQ2xGLFdBQUEsTUFBTSxTQUFTO0VBQzFCO0FBQUEsRUFJQSxNQUFNLGtDQUFrQyxtQkFBMEQsZUFBZ0c7QUFDOUwsVUFBTSxrQkFBdUIsQ0FBQTtBQUU3QixVQUFNLG1CQUF3QyxDQUFBO0FBRTlDLHFCQUFpQixrQkFBa0I7QUFFbkMsUUFBSSxLQUFLLGlCQUFpQixLQUFLLGNBQWMsUUFBUTtBQUNqRCx1QkFBaUIsbUJBQW1CLEtBQUssY0FBYyxPQUFPLGVBQWU7QUFBQSxJQUNqRjtBQUVNLFVBQUEsV0FBVyxNQUFNLEtBQUssUUFBUTtBQUFBLE1BQ2hDLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULE9BQU87QUFBQSxNQUNQLE1BQU0sZ0NBQWdDLGtCQUFrQix5QkFBeUI7QUFBQSxPQUNsRixhQUFhO0FBRVQsV0FBQSxJQUFJQyxnQkFBd0IsUUFBUTtBQUFBLEVBQy9DO0FBQUEsRUFJQSxNQUFNLCtCQUErQixvQkFBMkQsSUFBSSxlQUEyRTtBQUNySyxVQUFBLEtBQUssa0NBQWtDLG1CQUFtQixhQUFhO0FBQUEsRUFDakY7QUFBQSxFQUlBLE1BQU0sc0JBQXNCLG1CQUE4QyxlQUFnRztBQUN0SyxVQUFNLGtCQUF1QixDQUFBO0FBRXpCLFFBQUEsa0JBQWtCLGVBQWUsUUFBVztBQUM1QyxzQkFBZ0IsZ0JBQWdCLGtCQUFrQjtBQUFBLElBQ3REO0FBRUksUUFBQSxrQkFBa0IsWUFBWSxRQUFXO0FBQ3pDLHNCQUFnQixhQUFhLGtCQUFrQjtBQUFBLElBQ25EO0FBRUEsVUFBTSxtQkFBd0MsQ0FBQTtBQUU5QyxRQUFJLEtBQUssaUJBQWlCLEtBQUssY0FBYyxRQUFRO0FBQ2pELHVCQUFpQixtQkFBbUIsS0FBSyxjQUFjLE9BQU8sZUFBZTtBQUFBLElBQ2pGO0FBRU0sVUFBQSxXQUFXLE1BQU0sS0FBSyxRQUFRO0FBQUEsTUFDaEMsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE9BQ1IsYUFBYTtBQUVULFdBQUEsSUFBSUEsZ0JBQXdCLFFBQVE7QUFBQSxFQUMvQztBQUFBLEVBSUEsTUFBTSxtQkFBbUIsb0JBQStDLElBQUksZUFBMkU7QUFDN0ksVUFBQSxLQUFLLHNCQUFzQixtQkFBbUIsYUFBYTtBQUFBLEVBQ3JFO0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkEsUUFBSSxnQkFBZ0I7QUFFcEIsVUFBTSxLQUFLO0FBQ1gsVUFBTSxnQkFBZ0I7QUFFdEIsVUFBTSxZQUFZLFNBQVMsTUFBTSxjQUFjLFlBQVk7QUFDM0QsVUFBTSxjQUFjLElBQUksWUFBWSxrQkFBa0IsWUFBWSxFQUFFLGNBQWM7QUFDbEYsVUFBTSxrQkFBa0IsSUFBSSxnQkFBZ0Isa0JBQWtCLFlBQVksRUFBRSxjQUFjO0FBRTFGLFVBQU0sMkJBQTJCLE1BQU07QUFBRSwyQkFBcUIsUUFBUTtBQUFBLElBQUE7QUFDaEUsVUFBQSx1QkFBdUIsSUFBSSxLQUFLO0FBQ3RDLFVBQU0sZUFBZTtBQUNmLFVBQUEscUJBQXFCLElBQUksbUJBQW1CLE9BQU87QUFDekQsVUFBTSxvQkFBb0IsQ0FBQyxtQkFBbUIsUUFBUSxtQkFBbUIsVUFBVSxtQkFBbUIsT0FBTztBQUM3RyxVQUFNLGlCQUFpQixZQUFZO0FBQzNCLFlBQUEsU0FBUyxNQUFNLFlBQVksZUFBZTtBQUFBLFFBQzlDLHVCQUF1QjtBQUFBLFVBQ3JCLE1BQU0sYUFBYTtBQUFBLFVBQ25CLFlBQVksbUJBQW1CO0FBQUEsUUFDakM7QUFBQSxNQUFBLENBQ0Q7QUFFRCxvQkFBYyxZQUFZLE1BQU07QUFDaEMsU0FBRyxPQUFPO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFBQSxDQUNWO0FBQUEsSUFBQTtBQUdDLFFBQUEsaUJBQWlCLElBQWMsQ0FBQSxDQUFFO0FBRS9CLFVBQUEsZ0JBQWdCLE9BQU8sT0FBTyxhQUFhO0FBQy9DLFVBQUksZUFBZTtBQUNELHdCQUFBO0FBQ2hCO0FBQUEsTUFDRjtBQUNBLFlBQU0sYUFBYSxNQUNoQixPQUFPLE9BQUssQ0FBQyxTQUFVLFNBQVMsQ0FBQyxDQUFDLEVBQ2xDLE9BQU8sU0FBVSxPQUFPLENBQUssTUFBQSxDQUFDLE1BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQztBQUVwRCxVQUFJLENBQUMsY0FBYyxXQUFXLFVBQVUsR0FBRztBQUN6QztBQUFBLE1BQ0Y7QUFFSSxVQUFBLFdBQVcsU0FBUyxHQUFHO0FBQ25CLGNBQUEsK0JBQStCLFdBQVcseUJBQXlCO0FBQUEsTUFDM0U7QUFFTSxZQUFBLFFBQVEsTUFBTSxTQUFTLFNBQVM7QUFDaEMsWUFBQSxNQUFNLFFBQVEsVUFBVTtBQUM5QixjQUFRLElBQUksSUFBSSxTQUFhLElBQUEsV0FBVyxVQUFVO0FBRWxELFVBQUksT0FBTztBQUNILGNBQUEsU0FBUyxNQUFNLGdCQUFnQiwwQkFBMEI7QUFBQSxVQUM3RCx3QkFBd0I7QUFBQSxZQUN0QixnQkFBZ0IsTUFBTTtBQUFBLFlBQ3RCLFlBQVksV0FBVztBQUFBLFVBQ3pCO0FBQUEsUUFBQSxDQUNEO0FBRWEsc0JBQUEsZ0JBQWdCLFdBQVcsSUFBSSxNQUFNO0FBQ25ELFdBQUcsT0FBTztBQUFBLFVBQ1IsVUFBVTtBQUFBLFVBQ1YsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFFBQUEsQ0FDVjtBQUFBLE1BQUEsT0FDSTtBQUNVLGNBQU0sZ0JBQWdCLCtCQUErQjtBQUFBLFVBQ2xFLDJCQUEyQjtBQUFBLFlBQ3pCLGdCQUFnQixNQUFNO0FBQUEsWUFDdEIsWUFBWSxXQUFXO0FBQUEsVUFDekI7QUFBQSxRQUFBLENBQ0Q7QUFFRCxzQkFBYyxtQkFBbUIsV0FBVyxJQUFJLE1BQU0sT0FBTztBQUM3RCxXQUFHLE9BQU87QUFBQSxVQUNSLFVBQVU7QUFBQSxVQUNWLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxRQUFBLENBQ1Y7QUFBQSxNQUNIO0FBQUEsSUFBQSxHQUNDLEVBQUMsTUFBTSxLQUFBLENBQUs7QUFFZixjQUFVLE1BQU07QUFDZCxxQkFBZSxRQUFRLFVBQVUsTUFBTSxPQUFPLENBQUEsTUFBSyxjQUFjLGdCQUFnQixFQUFFLElBQUssTUFBTSxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUEsTUFBSyxFQUFFLEVBQUc7QUFBQSxJQUFBLENBQ3ZIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM4QkQsTUFBQSxjQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFDUixDQUFDOzs7O0FBeUJELFVBQU0sU0FBUztBQUNmLFVBQU0sSUFBSTtBQUNKLFVBQUEsRUFBRSxjQUFjO0FBRXRCLFVBQU0sZ0JBQWdCO0FBRXRCLFVBQU0sWUFBWSxrQkFBa0IsWUFBWSxFQUFFLGFBQWE7QUFDekQsVUFBQSxXQUFXLElBQUksU0FBUyxTQUFTO0FBQ3ZDLFVBQU0sWUFBWTtBQUNsQixVQUFNLFlBQVk7QUFFWixVQUFBLFlBQVksZ0JBQWdCO0FBRTVCLFVBQUEsZUFBZSxDQUFDLFlBQW9CO0FBQ2xDLFlBQUEsTUFBTSxPQUFPLFFBQVEsRUFBRSxNQUFNLFNBQVMsUUFBUSxFQUFFLFFBQWlCLEVBQUEsQ0FBRTtBQUN6RSxjQUFRLElBQUksR0FBRztBQUVmLFVBQUksTUFBTSxJQUFJLElBQUksT0FBTyxTQUFTLE1BQU07QUFDcEMsVUFBQSxXQUFXLE9BQU8sU0FBUztBQUMvQixVQUFJLE9BQU8sSUFBSTtBQUVmLGdCQUFVLFVBQVUsVUFBVSxJQUFJLFNBQVUsQ0FBQTtBQUFBLElBQUE7QUFHOUMsVUFBTSxhQUFhLE1BQU07QUFDdkIsYUFBTyxLQUFLLEVBQUUsTUFBTSxVQUFVLFFBQVEsRUFBRSxRQUFRLFVBQVUsTUFBTSxZQUFZLEdBQUcsS0FBQSxFQUFRLENBQUE7QUFBQSxJQUFBO0FBR25GLFVBQUEsWUFBWSxDQUFDLFlBQW9CO0FBQzlCLGFBQUEsS0FBSyxFQUFFLE1BQU0sU0FBUyxRQUFRLEVBQUUsV0FBb0I7QUFBQSxJQUFBO0FBR3ZELFVBQUEsZ0JBQWdCLFNBQVMsTUFBTTs7QUFDNUIsZUFBQSx3REFBVyxVQUFYLG1CQUFrQixjQUFsQixtQkFBNkIsV0FBN0IsbUJBQXFDLFNBQVEsT0FDaEQsd0NBQXVDLHdEQUFXLFVBQVgsbUJBQWtCLGNBQWxCLG1CQUE2QixXQUE3QixtQkFBcUM7QUFBQSxJQUFBLENBQ2pGO0FBRUQsYUFBUyxlQUFlOztBQUNmLGFBQUEsS0FBSyxFQUFFLE1BQU0saUJBQWlCLFFBQVEsRUFBRSxVQUFTLGVBQVUsVUFBVixtQkFBaUIsR0FBRyxFQUFHLENBQUE7QUFBQSxJQUNqRjtBQUVBLGFBQVMsVUFBVSxhQUFXLE1BQU0sa0JBQWdCLE1BQU07O0FBQ3hELFlBQU0saUJBQWlCLFVBQVU7QUFNakMsUUFBRSxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixTQUFTLFVBQVMsZUFBVSxVQUFWLG1CQUFpQjtBQUFBLE1BQUEsQ0FDcEM7QUFHUyxnQkFBQSx5QkFBbUMsaURBQWdCLElBQUksQ0FBQSxNQUFLLHVCQUFHLEtBQUssWUFBWSxlQUFlO0FBQUEsSUFDM0c7QUFFQSxtQkFBZSxVQUFVLFNBQWlCLGFBQVcsTUFBTSxrQkFBZ0IsTUFBTTtBQUMvRSxVQUFJLGNBQWM7QUFDZCxVQUFBLENBQUMsVUFBVSxPQUFPO0FBQ3BCLGNBQU0saUJBQWlCO0FBQ3ZCO0FBQUEsTUFDRjtBQUVTLGVBQUEsU0FBUyxVQUFVLE9BQU87QUFDN0IsWUFBQSxNQUFNLE1BQU0sU0FBUztBQUNULHdCQUFBO0FBQ2Q7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUVBLFVBQUksZ0JBQWdCLE1BQU07QUFDbEIsY0FBQSw4QkFBOEIsVUFBVSxrQkFBa0I7QUFDaEU7QUFBQSxNQUNGO0FBRUEsWUFBTSxVQUFVLG9CQUE2QixZQUFZLElBQUksWUFBWSxlQUFlO0FBQ3hGLFFBQUUsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQUEsQ0FDVjtBQUFBLElBQ0g7QUFFQSxtQkFBZSxXQUFXLFNBQXdDO0FBQ2hFLGFBQU8sU0FBUyxTQUFTLEVBQUMsSUFBSSxRQUFRLENBQUE7QUFBQSxJQUN4QztBQUVBLG1CQUFlLGVBQWU7O0FBQzVCLGdCQUFVLFFBQVEsTUFBTSxXQUFtQixPQUFPLGFBQWEsTUFBTSxPQUFPLE9BQU87QUFDL0UsV0FBQSxlQUFVLFVBQVYsbUJBQWlCLFFBQVE7QUFDM0Isd0JBQVUsVUFBVixtQkFBaUIsT0FBTyxLQUFLLENBQUMsSUFBSSxPQUFPO0FBRWhDLGlCQUFBLEdBQUcsUUFBUyxHQUFHO0FBQUEsUUFBQTtBQUVkLGtCQUFBLFNBQVEsZUFBVSxVQUFWLG1CQUFpQjtBQUFBLE1BQ3JDO0FBQ29CLGlCQUFBLHFCQUFVLFVBQVYsbUJBQWlCLGNBQWpCLG1CQUE0QixNQUFNO0FBQUEsSUFDeEQ7QUFFQSxjQUFVLFlBQVk7QUFDcEIsWUFBTSxhQUFhO0FBQUEsSUFBQSxDQUNwQjtBQUVELGNBQVUsWUFBWTtBQUNwQixZQUFNLGFBQWE7QUFBQSxJQUFBLENBQ3BCO0FBRUQsVUFBTSxVQUFVO0FBQUEsTUFDZDtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDLFFBQXNCLElBQUk7QUFBQSxRQUNsQyxRQUFRLENBQUMsUUFBZ0IsR0FBRztBQUFBLFFBQzVCLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDOztBQUFzQiwyQkFBSSxTQUFKLG1CQUFVO0FBQUE7QUFBQSxRQUN4QyxRQUFRLENBQUMsUUFBZ0IsR0FBRztBQUFBLFFBQzVCLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDLFFBQXNCLElBQUk7QUFBQSxRQUVsQyxTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFzQixJQUFJO0FBQUEsUUFDbEMsUUFBUSxDQUFDLFFBQWdCLEdBQUcsZUFBZSxHQUFHO0FBQUEsUUFDOUMsU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLE1BQ1o7QUFBQSxJQUFBO0FBR0UsUUFBQSxnQkFBZ0IsU0FBUyxNQUFNOztBQUNqQyxVQUFJLGVBQXlCLENBQUE7QUFDbkIsNEJBQUEsVUFBQSxtQkFBTyxXQUFQLG1CQUFlLFFBQVEsQ0FBSyxNQUFBO0FBQ3BDLFlBQUksRUFBRTtBQUF1Qix1QkFBQSxLQUFLLEVBQUUsUUFBUTtBQUFBLE1BQUE7QUFFOUMsYUFBTyxhQUFhLFlBQVk7QUFBQSxJQUFBLENBQ2pDO0FBRUQsVUFBTSxhQUFhO0FBQUEsTUFDakIsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

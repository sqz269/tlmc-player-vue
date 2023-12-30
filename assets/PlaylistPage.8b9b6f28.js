import { Q as QImg, u as usePageContainerBgStyleStore } from "./pageContainerBg.fe650ae6.js";
import { _ as _export_sfc, M as defineComponent, P as openBlock, R as createBlock, S as withCtx, d as createVNode, U as QCardSection, V as createBaseVNode, Y as QBtn, Z as unref, W as toDisplayString, $ as QCard, aN as ApiConfigProvider, bA as AlbumApi, O as useRouter, c as computed, r as ref, Q as QueueController, o as onMounted, w as watch, aa as createElementBlock, F as Fragment, ao as renderList, a0 as createCommentVNode, ai as QSeparator, B as withDirectives, ab as createTextVNode, bN as pushScopeId, bO as popScopeId } from "./index.71ce5da1.js";
import { c as outlinedPlayArrow, Q as QTooltip } from "./index.98bcc658.js";
import { b as QMenu, a as QItem, Q as QItemSection } from "./QMenu.06d64dfb.js";
import { Q as QList } from "./QList.81cb3fd5.js";
import { Q as QPage } from "./QPage.04e43f1b.js";
import { P as PlaylistApi, C as ClosePopup } from "./ClosePopup.1fbcaa2b.js";
import { f as formatDuration } from "./durationUtils.f059d1b6.js";
import "./position-engine.1272083b.js";
var PlaylistTrackItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "text-subtitle2 text-center" };
const _hoisted_2$1 = { class: "row full-width" };
const _hoisted_3$1 = { class: "text-subtitle1 ellipsis" };
const _hoisted_4$1 = { class: "text-caption" };
const _hoisted_5$1 = { class: "text-caption" };
const _hoisted_6$1 = { class: "text-caption" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PlaylistTrackItem",
  props: {
    item: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QCard, { class: "card bg-transparent q-py-sm" }, {
        default: withCtx(() => [
          createVNode(QCardSection, { horizontal: "" }, {
            default: withCtx(() => {
              var _a;
              return [
                createVNode(QCardSection, { class: "justify-around q-py-none q-px-md flex column" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$1, [
                      createVNode(QBtn, {
                        flat: "",
                        round: "",
                        class: "text-grey-5",
                        size: "13px",
                        icon: unref(outlinedPlayArrow)
                      }, null, 8, ["icon"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(QImg, {
                  style: { "height": "50px", "max-width": "50px" },
                  src: (_a = __props.item.Track.album.thumbnail) == null ? void 0 : _a.tiny.url
                }, null, 8, ["src"]),
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(QCardSection, { class: "justify-around q-py-none col-7" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_3$1, toDisplayString(__props.item.Track.name._default), 1),
                      createBaseVNode("div", _hoisted_4$1, toDisplayString(__props.item.Track.album.albumName._default), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, { class: "justify-around q-py-none col-4 flex column" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_5$1, toDisplayString(__props.item.Playlist.dateAdded.toLocaleDateString()), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QCardSection, { class: "justify-around q-py-none col-1 flex column" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_6$1, toDisplayString(unref(formatDuration)(__props.item.Track.duration)), 1)
                    ]),
                    _: 1
                  })
                ])
              ];
            }),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var PlaylistTrackItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dfd15650"], ["__file", "PlaylistTrackItem.vue"]]);
var PlaylistPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-a179e83e"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "row full-width q-px-none q-pt-lg"
};
const _hoisted_2 = {
  class: "col-4 q-px-md",
  style: { "max-width": "230px" }
};
const _hoisted_3 = {
  key: 0,
  class: "row"
};
const _hoisted_4 = { class: "col-8" };
const _hoisted_5 = { class: "row full-width full-height items-end" };
const _hoisted_6 = { class: "col-12" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Playlist", -1));
const _hoisted_8 = { class: "q-mb-sm-sm q-mb-none q-mt-md" };
const _hoisted_9 = { class: "col-12" };
const _hoisted_10 = { class: "row full-width" };
const _hoisted_11 = { class: "text-subtitle1" };
const _hoisted_12 = { class: "text-subtitle1" };
const _hoisted_13 = { class: "text-subtitle1" };
const _hoisted_14 = { class: "page-section-blur col-all q-mt-lg row" };
const _hoisted_15 = { class: "col-12 q-pt-md" };
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Play");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Play Next");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Add to Queue");
const _hoisted_19 = { class: "col-12 q-pt-md q-px-md" };
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle2 text-center" }, "#", -1));
const _hoisted_21 = { class: "row full-width" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle1 ellipsis" }, "Title", -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-caption" }, "Date Added", -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-caption" }, "Duration", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PlaylistPage",
  setup(__props) {
    const playlistApi = new PlaylistApi(ApiConfigProvider.getInstance().getApiConfig());
    const albumApi = new AlbumApi(ApiConfigProvider.getInstance().getApiConfig());
    const router = useRouter();
    const bgColorStore = usePageContainerBgStyleStore();
    const playlistImages = computed(() => {
      var _a, _b;
      const visited = /* @__PURE__ */ new Set();
      const thumbs = [];
      for (let item of playlistItemsExist.value) {
        if (!((_a = item.Track.album) == null ? void 0 : _a.id)) {
          continue;
        }
        if (!visited.has((_b = item.Track.album) == null ? void 0 : _b.id)) {
          visited.add(item.Track.album.id);
          if (!item.Track.album.thumbnail) {
            continue;
          }
          thumbs.push(item.Track.album.thumbnail);
          if (thumbs.length === 4)
            break;
        }
      }
      return thumbs;
    });
    const playlistMetadata = ref();
    const playlistItemsExist = ref();
    const playlistItemsNotFound = ref();
    const songQueue = QueueController.getInstance();
    const playPlaylist = (addToFront = true, playImmediately = true) => {
      var _a;
      const tracks = (_a = playlistItemsExist.value) == null ? void 0 : _a.map((e) => e.Track.id);
      if (!tracks) {
        return;
      }
      songQueue.addTrackToQueueByIdBatch(tracks, addToFront, playImmediately);
    };
    async function setPlaylistPage() {
      var _a, _b, _c;
      let playlistId = router.currentRoute.value.params.playlistId;
      let playlistItems = await playlistApi.getPlaylist({ playlistId });
      playlistMetadata.value = playlistItems;
      let trackIds = (_a = playlistItems.tracks) == null ? void 0 : _a.map((p) => p.trackId);
      let trackPlaylistItemMap = new Map(
        (_b = playlistItems.tracks) == null ? void 0 : _b.map((p) => [p.trackId, p])
      );
      if (!trackIds) {
        return;
      }
      let trackObj = await albumApi.getTracks({
        requestBody: trackIds
      });
      if (!trackObj.tracks) {
        alert("Invalid AlbumApi.GetTracks response. Invalid Track Attribute");
        return;
      }
      let playlistEntries = (_c = trackObj.tracks) == null ? void 0 : _c.map((o) => {
        return {
          Track: o,
          Playlist: trackPlaylistItemMap.get(o.id)
        };
      });
      playlistEntries.sort((a, b) => a.Playlist.index - b.Playlist.index);
      playlistItemsExist.value = playlistEntries;
      playlistItemsNotFound.value = trackObj.notFound;
      computeColor();
    }
    const computeColor = () => {
      const colors = playlistImages.value.map((thumb) => thumb.colors);
      const primaryColors = [];
      colors.forEach((c) => {
        if (c.slice(0, 1)) {
          primaryColors.push(...c.slice(0, 1));
        }
      });
      console.log(`Color: ${primaryColors}`);
      bgColorStore.setColors(primaryColors);
    };
    onMounted(async () => {
      await setPlaylistPage();
      watch(() => router.currentRoute.value.params.playlistId, (to, from) => {
        if (router.currentRoute.value.name !== "playlist") {
          return;
        }
        setPlaylistPage();
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          playlistItemsExist.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              unref(playlistImages) ? (openBlock(), createElementBlock("div", _hoisted_3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(playlistImages), (thumb) => {
                  return openBlock(), createElementBlock("div", {
                    class: "col-6",
                    key: thumb.small.assetId
                  }, [
                    createVNode(QImg, {
                      ratio: "1",
                      src: thumb.small.url
                    }, null, 8, ["src"])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  _hoisted_7,
                  createBaseVNode("h3", _hoisted_8, toDisplayString(playlistMetadata.value.name), 1)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_11, toDisplayString(playlistMetadata.value.visibility), 1)
                    ]),
                    createVNode(QSeparator, {
                      vertical: "",
                      spaced: ""
                    }),
                    createBaseVNode("div", _hoisted_12, toDisplayString(playlistMetadata.value.numberOfTracks) + " Tracks", 1),
                    createVNode(QSeparator, {
                      vertical: "",
                      spaced: ""
                    }),
                    createBaseVNode("div", _hoisted_13, toDisplayString(playlistMetadata.value.lastModified.toLocaleDateString()), 1)
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createVNode(QBtn, {
                  fab: "",
                  class: "q-mx-md",
                  round: "",
                  icon: unref(outlinedPlayArrow),
                  color: "black",
                  "text-color": "white",
                  onClick: playPlaylist
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => [
                        _hoisted_16
                      ]),
                      _: 1
                    }),
                    createVNode(QMenu, {
                      class: "border border-white",
                      "touch-position": "",
                      "context-menu": ""
                    }, {
                      default: withCtx(() => [
                        createVNode(QList, { style: { "min-width": "150px" } }, {
                          default: withCtx(() => [
                            withDirectives((openBlock(), createBlock(QItem, {
                              clickable: "",
                              onClick: _cache[0] || (_cache[0] = ($event) => playPlaylist(true, false))
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    _hoisted_17
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
                              onClick: _cache[1] || (_cache[1] = ($event) => playPlaylist(false, false))
                            }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    _hoisted_18
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
              createBaseVNode("div", _hoisted_19, [
                createVNode(QCard, {
                  class: "my-card bg-transparent q-py-sm",
                  flat: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, { horizontal: "" }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, { class: "justify-around q-py-none q-px-sm flex column" }, {
                          default: withCtx(() => [
                            _hoisted_20
                          ]),
                          _: 1
                        }),
                        createVNode(QImg, { style: { "height": "50px", "max-width": "50px" } }),
                        createBaseVNode("div", _hoisted_21, [
                          createVNode(QCardSection, { class: "justify-around q-py-none col-7 flex column" }, {
                            default: withCtx(() => [
                              _hoisted_22
                            ]),
                            _: 1
                          }),
                          createVNode(QCardSection, { class: "justify-around q-py-none col-4 flex column" }, {
                            default: withCtx(() => [
                              _hoisted_23
                            ]),
                            _: 1
                          }),
                          createVNode(QCardSection, { class: "justify-around q-py-none col-1 flex column" }, {
                            default: withCtx(() => [
                              _hoisted_24
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                (openBlock(true), createElementBlock(Fragment, null, renderList(playlistItemsExist.value, (item) => {
                  return openBlock(), createBlock(PlaylistTrackItem, {
                    key: item.Track.id,
                    item
                  }, null, 8, ["item"]);
                }), 128))
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
var PlaylistPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a179e83e"], ["__file", "PlaylistPage.vue"]]);
export { PlaylistPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RQYWdlLjhiOWI2ZjI4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvUGxheWxpc3RQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cInBsYXlsaXN0SXRlbXNFeGlzdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHEtcHgtbWRcIiBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJwbGF5bGlzdEltYWdlc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiIHYtZm9yPVwidGh1bWIgaW4gcGxheWxpc3RJbWFnZXNcIiA6a2V5PVwidGh1bWIuc21hbGwuYXNzZXRJZFwiPlxuICAgICAgICAgICAgPHEtaW1nIHJhdGlvPVwiMVwiIDpzcmM9XCJ0aHVtYi5zbWFsbC51cmxcIj48L3EtaW1nPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbjwhLS0gICAgICAgIDxxLWltZy0tPlxuPCEtLSAgICAgICAgICByYXRpbz1cIjFcIj4tLT5cbjwhLS0gICAgICAgIDwvcS1pbWc+LS0+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5QbGF5bGlzdDwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPnt7IHBsYXlsaXN0TWV0YWRhdGEubmFtZSB9fTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgICAgICAgIHt7IHBsYXlsaXN0TWV0YWRhdGEudmlzaWJpbGl0eSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IHBsYXlsaXN0TWV0YWRhdGEubnVtYmVyT2ZUcmFja3MgfX0gVHJhY2tzPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZD48L3Etc2VwYXJhdG9yPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBwbGF5bGlzdE1ldGFkYXRhLmxhc3RNb2RpZmllZC50b0xvY2FsZURhdGVTdHJpbmcoKSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXNlY3Rpb24tYmx1ciBjb2wtYWxsIHEtbXQtbGcgcm93XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiIEBjbGljaz1cInBsYXlQbGF5bGlzdFwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLXdoaXRlXCJcbiAgICAgICAgICAgICAgdG91Y2gtcG9zaXRpb25cbiAgICAgICAgICAgICAgY29udGV4dC1tZW51XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXAgQGNsaWNrPVwicGxheVBsYXlsaXN0KHRydWUsIGZhbHNlKVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cCBAY2xpY2s9XCJwbGF5UGxheWxpc3QoZmFsc2UsIGZhbHNlKVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkFkZCB0byBRdWV1ZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZCBxLXB4LW1kXCI+XG4gICAgICAgICAgPHEtY2FyZCBjbGFzcz1cIm15LWNhcmQgYmctdHJhbnNwYXJlbnQgcS1weS1zbVwiIGZsYXQ+XG4gICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gaG9yaXpvbnRhbD5cbiAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lIHEtcHgtc20gZmxleCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTIgdGV4dC1jZW50ZXJcIj4jPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDUwcHg7IG1heC13aWR0aDogNTBweFwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lIGNvbC03IGZsZXggY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTEgZWxsaXBzaXNcIj5UaXRsZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB5LW5vbmUgY29sLTQgZmxleCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj5EYXRlIEFkZGVkPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB5LW5vbmUgY29sLTEgZmxleCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj5EdXJhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8L3EtY2FyZD5cbiAgICAgICAgICA8UGxheWxpc3RUcmFja0l0ZW0gdi1mb3I9XCJpdGVtIGluIHBsYXlsaXN0SXRlbXNFeGlzdFwiIDprZXk9XCJpdGVtLlRyYWNrLmlkXCIgOml0ZW09XCJpdGVtXCI+PC9QbGF5bGlzdFRyYWNrSXRlbT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRQbGF5QXJyb3dcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge1xuICBBbGJ1bUFwaSxcbiAgUGxheWxpc3RBcGksXG4gIFBsYXlsaXN0SXRlbVJlYWREdG8sXG4gIFRyYWNrUmVhZER0byxcbiAgUGxheWxpc3RSZWFkRHRvLFxuICBUaHVtYm5haWxSZWFkRHRvXG59IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gJ3NyYy91dGlscy9BcGlDb25maWdQcm92aWRlcic7XG5pbXBvcnQge2NvbXB1dGVkLCBvbk1vdW50ZWQsIG9uVXBkYXRlZCwgcmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7Zm9ybWF0RHVyYXRpb259IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcbmltcG9ydCB7UXVldWVDb250cm9sbGVyfSBmcm9tIFwic3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlclwiO1xuaW1wb3J0IHt1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlfSBmcm9tIFwic3RvcmVzL3BhZ2VDb250YWluZXJCZ1wiO1xuaW1wb3J0IHtQbGF5bGlzdEVudHJ5fSBmcm9tIFwic3JjL3V0aWxzL0hlbHBlckludGVyZmFjZVwiO1xuaW1wb3J0IFBsYXlsaXN0VHJhY2tJdGVtIGZyb20gXCJjb21wb25lbnRzL1BsYXlsaXN0VHJhY2tJdGVtLnZ1ZVwiO1xuXG5jb25zdCBwbGF5bGlzdEFwaSA9IG5ldyBQbGF5bGlzdEFwaShBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpKTtcbmNvbnN0IGFsYnVtQXBpID0gbmV3IEFsYnVtQXBpKEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKCkpO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IGJnQ29sb3JTdG9yZSA9IHVzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUoKTtcblxuY29uc3QgcGxheWxpc3RJbWFnZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gIGNvbnN0IHZpc2l0ZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3QgdGh1bWJzOiBUaHVtYm5haWxSZWFkRHRvW10gPSBbXTtcblxuICBmb3IgKGxldCBpdGVtIG9mIHBsYXlsaXN0SXRlbXNFeGlzdC52YWx1ZSEpIHtcbiAgICBpZiAoIWl0ZW0uVHJhY2suYWxidW0/LmlkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoIXZpc2l0ZWQuaGFzKGl0ZW0uVHJhY2suYWxidW0/LmlkKSkge1xuICAgICAgdmlzaXRlZC5hZGQoaXRlbS5UcmFjay5hbGJ1bS5pZCk7XG5cbiAgICAgIGlmICghaXRlbS5UcmFjay5hbGJ1bS50aHVtYm5haWwpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHRodW1icy5wdXNoKGl0ZW0uVHJhY2suYWxidW0udGh1bWJuYWlsKTtcblxuICAgICAgaWYgKHRodW1icy5sZW5ndGggPT09IDQpIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGh1bWJzO1xufSlcblxuY29uc3QgcGxheWxpc3RNZXRhZGF0YSA9IHJlZjxQbGF5bGlzdFJlYWREdG8+KClcbmNvbnN0IHBsYXlsaXN0SXRlbXNFeGlzdCA9IHJlZjxQbGF5bGlzdEVudHJ5W10+KCk7XG5jb25zdCBwbGF5bGlzdEl0ZW1zTm90Rm91bmQgPSByZWY8c3RyaW5nW10+KCk7XG5cbmNvbnN0IHNvbmdRdWV1ZSA9IFF1ZXVlQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xuXG5jb25zdCBwbGF5UGxheWxpc3QgPSAoYWRkVG9Gcm9udD10cnVlLCBwbGF5SW1tZWRpYXRlbHk9dHJ1ZSkgPT4ge1xuICBjb25zdCB0cmFja3MgPSBwbGF5bGlzdEl0ZW1zRXhpc3QudmFsdWU/Lm1hcChlID0+IGUuVHJhY2suaWQhKTtcbiAgaWYgKCF0cmFja3MpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzb25nUXVldWUuYWRkVHJhY2tUb1F1ZXVlQnlJZEJhdGNoKHRyYWNrcywgYWRkVG9Gcm9udCwgcGxheUltbWVkaWF0ZWx5KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0UGxheWxpc3RQYWdlKCkge1xuICBsZXQgcGxheWxpc3RJZCA9IDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMucGxheWxpc3RJZDtcblxuICBsZXQgcGxheWxpc3RJdGVtcyA9IGF3YWl0IHBsYXlsaXN0QXBpLmdldFBsYXlsaXN0KHtwbGF5bGlzdElkOiBwbGF5bGlzdElkfSk7XG5cbiAgcGxheWxpc3RNZXRhZGF0YS52YWx1ZSA9IHBsYXlsaXN0SXRlbXM7XG5cbiAgbGV0IHRyYWNrSWRzID0gcGxheWxpc3RJdGVtcy50cmFja3M/Lm1hcChwID0+IHAudHJhY2tJZCEpO1xuXG4gIGxldCB0cmFja1BsYXlsaXN0SXRlbU1hcCA9IG5ldyBNYXAoXG4gICAgcGxheWxpc3RJdGVtcy50cmFja3M/Lm1hcChwID0+IFtwLnRyYWNrSWQhLCBwXSBhcyBbc3RyaW5nLCBQbGF5bGlzdEl0ZW1SZWFkRHRvXSkpO1xuXG4gIGlmICghdHJhY2tJZHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgdHJhY2tPYmogPSBhd2FpdCBhbGJ1bUFwaS5nZXRUcmFja3Moe1xuICAgIHJlcXVlc3RCb2R5OiB0cmFja0lkc1xuICB9KTtcblxuICBpZiAoIXRyYWNrT2JqLnRyYWNrcykge1xuICAgIGFsZXJ0KCdJbnZhbGlkIEFsYnVtQXBpLkdldFRyYWNrcyByZXNwb25zZS4gSW52YWxpZCBUcmFjayBBdHRyaWJ1dGUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgcGxheWxpc3RFbnRyaWVzOiBQbGF5bGlzdEVudHJ5W10gPSB0cmFja09iai50cmFja3M/Lm1hcChvID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgVHJhY2s6IG8sXG4gICAgICBQbGF5bGlzdDogdHJhY2tQbGF5bGlzdEl0ZW1NYXAuZ2V0KG8uaWQhKVxuICAgIH0gYXMgUGxheWxpc3RFbnRyeTtcbiAgfSk7XG5cbiAgcGxheWxpc3RFbnRyaWVzLnNvcnQoKGEsIGIpID0+IGEuUGxheWxpc3QuaW5kZXghIC0gYi5QbGF5bGlzdC5pbmRleCEpO1xuXG4gIHBsYXlsaXN0SXRlbXNFeGlzdC52YWx1ZSA9IHBsYXlsaXN0RW50cmllcztcbiAgcGxheWxpc3RJdGVtc05vdEZvdW5kLnZhbHVlID0gdHJhY2tPYmoubm90Rm91bmQhXG5cbiAgY29tcHV0ZUNvbG9yKCk7XG59XG5cbmNvbnN0IGNvbXB1dGVDb2xvciA9ICgpID0+IHtcbiAgY29uc3QgY29sb3JzID0gcGxheWxpc3RJbWFnZXMudmFsdWUubWFwKHRodW1iID0+IHRodW1iLmNvbG9ycyEpO1xuICBjb25zdCBwcmltYXJ5Q29sb3JzOiBzdHJpbmdbXSA9IFtdO1xuICBjb2xvcnMuZm9yRWFjaChjID0+IHtcbiAgICBpZiAoYy5zbGljZSgwLCAxKSkge1xuICAgICAgcHJpbWFyeUNvbG9ycy5wdXNoKC4uLmMuc2xpY2UoMCwgMSkpO1xuICAgIH1cbiAgfSk7XG4gIGNvbnNvbGUubG9nKGBDb2xvcjogJHtwcmltYXJ5Q29sb3JzfWApXG4gIGJnQ29sb3JTdG9yZS5zZXRDb2xvcnMocHJpbWFyeUNvbG9ycyk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHNldFBsYXlsaXN0UGFnZSgpO1xuICB3YXRjaCgoKSA9PiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wbGF5bGlzdElkLCAodG8sIGZyb20pID0+IHtcbiAgICBpZiAocm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5uYW1lICE9PSAncGxheWxpc3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEFsc28gbmVlZCB0byBjaGVjayBpZlxuICAgIHNldFBsYXlsaXN0UGFnZSgpO1xuICB9KTtcbn0pXG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnaW5kZXgnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnIycsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBQbGF5bGlzdEVudHJ5KSA9PiByb3cuUGxheWxpc3QuaW5kZXgsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIHN0eWxlOiAnd2lkdGg6IDI0cHgnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ1RJVExFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBQbGF5bGlzdEVudHJ5KSA9PiByb3cuVHJhY2s/Lm5hbWU/Ll9kZWZhdWx0LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1oNCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYWxidW0nLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBsYWJlbDogJ0FMQlVNJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBQbGF5bGlzdEVudHJ5KSA9PiByb3cuVHJhY2suYWxidW0/LmFsYnVtTmFtZT8uX2RlZmF1bHQsXG4gICAgLy8gZm9ybWF0OiAodmFsOiBPcmlnaW5hbFRyYWNrUmVhZER0b1tdKSA9PiB2YWwubWFwKGUgPT4gZS50aXRsZT8uZW4pLmpvaW4oJyDilIIgJyksXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGF0ZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdEQVRFIEFEREVEJyxcbiAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICBmaWVsZDogKHJvdzogUGxheWxpc3RFbnRyeSkgPT4gcm93LlBsYXlsaXN0LmRhdGVBZGRlZCxcbiAgICBmb3JtYXQ6ICh2YWw6IERhdGUpID0+IGAke3ZhbC50b0xvY2FsZURhdGVTdHJpbmcoKX1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWdyZXktNCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBQbGF5bGlzdEVudHJ5KSA9PiByb3cuVHJhY2suZHVyYXRpb24sXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+IGAke2Zvcm1hdER1cmF0aW9uKHZhbCl9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1ncmV5LTQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9XG5dXG5cbmNvbnN0IHBhZ2luYXRpb24gPSB7XG4gIHJvd3NQZXJQYWdlOiAwLFxuICBkZXNjZW5kaW5nOiB0cnVlXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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

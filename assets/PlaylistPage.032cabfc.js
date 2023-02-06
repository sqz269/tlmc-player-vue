import { Q as QImg } from "./QImg.f71d0f96.js";
import { _ as _export_sfc, P as defineComponent, aA as ApiConfigProvider, bA as AlbumApi, R as useRouter, r as ref, Q as QueueController, o as onMounted, w as watch, U as openBlock, V as createBlock, W as withCtx, ab as createElementBlock, Y as createBaseVNode, d as createVNode, Z as toDisplayString, aj as QSeparator, E as withDirectives, S as unref, a0 as QBtn, X as QCardSection, a1 as QCard, F as Fragment, aq as renderList, a2 as createCommentVNode, ac as createTextVNode, bN as pushScopeId, bO as popScopeId } from "./index.18e4bb4c.js";
import { Q as QTooltip, c as outlinedPlayArrow } from "./index.23d39097.js";
import { Q as QMenu, b as QItem, a as QItemSection } from "./QItem.7e5b67b2.js";
import { Q as QList } from "./QList.4b939d7f.js";
import { Q as QPage } from "./QPage.ab5da8f0.js";
import { P as PlaylistApi, C as ClosePopup } from "./ClosePopup.c77ec73b.js";
import { f as formatDuration } from "./durationUtils.f059d1b6.js";
import "./position-engine.852dcea9.js";
var PlaylistPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-3a1fa496"), n = n(), popScopeId(), n);
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
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Playlist", -1));
const _hoisted_7 = { class: "q-mb-sm-sm q-mb-none q-mt-md" };
const _hoisted_8 = { class: "col-12" };
const _hoisted_9 = { class: "row full-width" };
const _hoisted_10 = { class: "text-subtitle1" };
const _hoisted_11 = { class: "text-subtitle1" };
const _hoisted_12 = { class: "text-subtitle1" };
const _hoisted_13 = { class: "page-section-blur col-all q-mt-lg row" };
const _hoisted_14 = { class: "col-12 q-pt-md" };
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Play");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Play Next");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Add to Queue");
const _hoisted_18 = { class: "col-12 q-pt-md q-px-md" };
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle2 text-center" }, "#", -1));
const _hoisted_20 = { class: "row full-width" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle1 ellipsis" }, "Title", -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-caption" }, "Date Added", -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-caption" }, "Duration", -1));
const _hoisted_24 = { class: "text-subtitle2 text-center" };
const _hoisted_25 = { class: "row full-width" };
const _hoisted_26 = { class: "text-subtitle1 ellipsis" };
const _hoisted_27 = { class: "text-caption" };
const _hoisted_28 = { class: "text-caption" };
const _hoisted_29 = { class: "text-caption" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PlaylistPage",
  setup(__props) {
    const playlistApi = new PlaylistApi(ApiConfigProvider.getInstance().getApiConfig());
    const albumApi = new AlbumApi(ApiConfigProvider.getInstance().getApiConfig());
    const router = useRouter();
    const playlistMetadata = ref();
    const playlistItemsExist = ref();
    const playlistItemsNotFound = ref();
    const songQueue = QueueController.getInstance();
    const playPlaylist = (addToFront = true, playImmediately = true) => {
      var _a;
      const tracks = (_a = playlistItemsExist.value) == null ? void 0 : _a.map((e) => e.Track.id);
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
    }
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
              createVNode(QImg, { ratio: "1" })
            ]),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  _hoisted_6,
                  createBaseVNode("h3", _hoisted_7, toDisplayString(playlistMetadata.value.name), 1)
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("div", null, [
                      createBaseVNode("div", _hoisted_10, toDisplayString(playlistMetadata.value.visibility), 1)
                    ]),
                    createVNode(QSeparator, {
                      vertical: "",
                      spaced: ""
                    }),
                    createBaseVNode("div", _hoisted_11, toDisplayString(playlistMetadata.value.numberOfTracks) + " Tracks", 1),
                    createVNode(QSeparator, {
                      vertical: "",
                      spaced: ""
                    }),
                    createBaseVNode("div", _hoisted_12, toDisplayString(playlistMetadata.value.lastModified.toLocaleDateString()), 1)
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
                  onClick: playPlaylist
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => [
                        _hoisted_15
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
                                    _hoisted_16
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
                }, 8, ["icon"])
              ]),
              createBaseVNode("div", _hoisted_18, [
                createVNode(QCard, {
                  class: "my-card bg-transparent q-py-sm",
                  flat: ""
                }, {
                  default: withCtx(() => [
                    createVNode(QCardSection, { horizontal: "" }, {
                      default: withCtx(() => [
                        createVNode(QCardSection, { class: "justify-around q-py-none q-px-sm flex column" }, {
                          default: withCtx(() => [
                            _hoisted_19
                          ]),
                          _: 1
                        }),
                        createVNode(QImg, { style: { "height": "50px", "max-width": "50px" } }),
                        createBaseVNode("div", _hoisted_20, [
                          createVNode(QCardSection, { class: "justify-around q-py-none col-7 flex column" }, {
                            default: withCtx(() => [
                              _hoisted_21
                            ]),
                            _: 1
                          }),
                          createVNode(QCardSection, { class: "justify-around q-py-none col-4 flex column" }, {
                            default: withCtx(() => [
                              _hoisted_22
                            ]),
                            _: 1
                          }),
                          createVNode(QCardSection, { class: "justify-around q-py-none col-1 flex column" }, {
                            default: withCtx(() => [
                              _hoisted_23
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
                  return openBlock(), createBlock(QCard, {
                    class: "my-card bg-transparent q-py-sm",
                    flat: "",
                    key: item.Track.id
                  }, {
                    default: withCtx(() => [
                      createVNode(QCardSection, { horizontal: "" }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createVNode(QCardSection, { class: "justify-around q-py-none q-px-md flex column" }, {
                              default: withCtx(() => [
                                createBaseVNode("div", _hoisted_24, toDisplayString(item.Playlist.index), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(QImg, {
                              style: { "height": "50px", "max-width": "50px" },
                              src: (_a = item.Track.album.thumbnail) == null ? void 0 : _a.tiny.url
                            }, null, 8, ["src"]),
                            createBaseVNode("div", _hoisted_25, [
                              createVNode(QCardSection, { class: "justify-around q-py-none col-7" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_26, toDisplayString(item.Track.name._default), 1),
                                  createBaseVNode("div", _hoisted_27, toDisplayString(item.Track.album.albumName._default), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QCardSection, { class: "justify-around q-py-none col-4 flex column" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_28, toDisplayString(item.Playlist.dateAdded.toLocaleDateString()), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(QCardSection, { class: "justify-around q-py-none col-1 flex column" }, {
                                default: withCtx(() => [
                                  createBaseVNode("div", _hoisted_29, toDisplayString(unref(formatDuration)(item.Track.duration)), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ];
                        }),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
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
var PlaylistPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3a1fa496"], ["__file", "PlaylistPage.vue"]]);
export { PlaylistPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWxpc3RQYWdlLjAzMmNhYmZjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvUGxheWxpc3RQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cInBsYXlsaXN0SXRlbXNFeGlzdFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHEtcHgtbWRcIiBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgcmF0aW89XCIxXCI+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5QbGF5bGlzdDwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPnt7IHBsYXlsaXN0TWV0YWRhdGEubmFtZSB9fTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj5cbiAgICAgICAgICAgICAgICAgIHt7IHBsYXlsaXN0TWV0YWRhdGEudmlzaWJpbGl0eSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IHBsYXlsaXN0TWV0YWRhdGEubnVtYmVyT2ZUcmFja3MgfX0gVHJhY2tzPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZD48L3Etc2VwYXJhdG9yPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBwbGF5bGlzdE1ldGFkYXRhLmxhc3RNb2RpZmllZC50b0xvY2FsZURhdGVTdHJpbmcoKSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXNlY3Rpb24tYmx1ciBjb2wtYWxsIHEtbXQtbGcgcm93XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiIEBjbGljaz1cInBsYXlQbGF5bGlzdFwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgY2xhc3M9XCJib3JkZXIgYm9yZGVyLXdoaXRlXCJcbiAgICAgICAgICAgICAgdG91Y2gtcG9zaXRpb25cbiAgICAgICAgICAgICAgY29udGV4dC1tZW51XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXAgQGNsaWNrPVwicGxheVBsYXlsaXN0KHRydWUsIGZhbHNlKVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cCBAY2xpY2s9XCJwbGF5UGxheWxpc3QoZmFsc2UsIGZhbHNlKVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkFkZCB0byBRdWV1ZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZCBxLXB4LW1kXCI+XG4gICAgICAgICAgPHEtY2FyZCBjbGFzcz1cIm15LWNhcmQgYmctdHJhbnNwYXJlbnQgcS1weS1zbVwiIGZsYXQ+XG4gICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gaG9yaXpvbnRhbD5cbiAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lIHEtcHgtc20gZmxleCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTIgdGV4dC1jZW50ZXJcIj4jPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgPHEtaW1nXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDUwcHg7IG1heC13aWR0aDogNTBweFwiXG4gICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lIGNvbC03IGZsZXggY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTEgZWxsaXBzaXNcIj5UaXRsZTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB5LW5vbmUgY29sLTQgZmxleCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj5EYXRlIEFkZGVkPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB5LW5vbmUgY29sLTEgZmxleCBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj5EdXJhdGlvbjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICA8L3EtY2FyZD5cblxuICAgICAgICAgIDxxLWNhcmQgY2xhc3M9XCJteS1jYXJkIGJnLXRyYW5zcGFyZW50IHEtcHktc21cIiBmbGF0IHYtZm9yPVwiaXRlbSBpbiBwbGF5bGlzdEl0ZW1zRXhpc3RcIiA6a2V5PVwiaXRlbS5UcmFjay5pZFwiPlxuICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGhvcml6b250YWw+XG4gICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cImp1c3RpZnktYXJvdW5kIHEtcHktbm9uZSBxLXB4LW1kIGZsZXggY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUyIHRleHQtY2VudGVyXCI+e3sgaXRlbS5QbGF5bGlzdC5pbmRleCB9fTwvZGl2PlxuICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICAgIDxxLWltZ1xuICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA1MHB4OyBtYXgtd2lkdGg6IDUwcHhcIlxuICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtLlRyYWNrLmFsYnVtLnRodW1ibmFpbD8udGlueS51cmxcIlxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cImp1c3RpZnktYXJvdW5kIHEtcHktbm9uZSBjb2wtN1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxIGVsbGlwc2lzXCI+e3sgaXRlbS5UcmFjay5uYW1lLl9kZWZhdWx0IH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jYXB0aW9uXCI+e3sgaXRlbS5UcmFjay5hbGJ1bS5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lIGNvbC00IGZsZXggY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jYXB0aW9uXCI+e3sgaXRlbS5QbGF5bGlzdC5kYXRlQWRkZWQudG9Mb2NhbGVEYXRlU3RyaW5nKCkgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cImp1c3RpZnktYXJvdW5kIHEtcHktbm9uZSBjb2wtMSBmbGV4IGNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2FwdGlvblwiPnt7IGZvcm1hdER1cmF0aW9uKGl0ZW0uVHJhY2suZHVyYXRpb24pIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgIDwvcS1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvd1xufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7QWxidW1BcGksIFBsYXlsaXN0QXBpLCBQbGF5bGlzdEl0ZW1SZWFkRHRvLCBUcmFja1JlYWREdG8sIFBsYXlsaXN0UmVhZER0b30gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSAnc3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyJztcbmltcG9ydCB7b25Nb3VudGVkLCBvblVwZGF0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge2Zvcm1hdER1cmF0aW9ufSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSBcInNyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgcGxheWxpc3RBcGkgPSBuZXcgUGxheWxpc3RBcGkoQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKSk7XG5jb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpKTtcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmludGVyZmFjZSBQbGF5bGlzdEVudHJ5IHtcbiAgVHJhY2s6IFRyYWNrUmVhZER0byxcbiAgUGxheWxpc3Q6IFBsYXlsaXN0SXRlbVJlYWREdG9cbn1cblxuY29uc3QgcGxheWxpc3RNZXRhZGF0YSA9IHJlZjxQbGF5bGlzdFJlYWREdG8+KClcbmNvbnN0IHBsYXlsaXN0SXRlbXNFeGlzdCA9IHJlZjxQbGF5bGlzdEVudHJ5W10+KCk7XG5jb25zdCBwbGF5bGlzdEl0ZW1zTm90Rm91bmQgPSByZWY8c3RyaW5nW10+KCk7XG5cblxuY29uc3Qgc29uZ1F1ZXVlID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbmNvbnN0IHBsYXlQbGF5bGlzdCA9IChhZGRUb0Zyb250PXRydWUsIHBsYXlJbW1lZGlhdGVseT10cnVlKSA9PiB7XG4gIGNvbnN0IHRyYWNrcyA9IHBsYXlsaXN0SXRlbXNFeGlzdC52YWx1ZT8ubWFwKGUgPT4gZS5UcmFjay5pZCk7XG5cbiAgc29uZ1F1ZXVlLmFkZFRyYWNrVG9RdWV1ZUJ5SWRCYXRjaCh0cmFja3MsIGFkZFRvRnJvbnQsIHBsYXlJbW1lZGlhdGVseSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldFBsYXlsaXN0UGFnZSgpIHtcbiAgbGV0IHBsYXlsaXN0SWQgPSA8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLnBsYXlsaXN0SWQ7XG5cbiAgbGV0IHBsYXlsaXN0SXRlbXMgPSBhd2FpdCBwbGF5bGlzdEFwaS5nZXRQbGF5bGlzdCh7cGxheWxpc3RJZDogcGxheWxpc3RJZH0pO1xuXG4gIHBsYXlsaXN0TWV0YWRhdGEudmFsdWUgPSBwbGF5bGlzdEl0ZW1zO1xuXG4gIGxldCB0cmFja0lkcyA9IHBsYXlsaXN0SXRlbXMudHJhY2tzPy5tYXAocCA9PiBwLnRyYWNrSWQhKTtcblxuICBsZXQgdHJhY2tQbGF5bGlzdEl0ZW1NYXAgPSBuZXcgTWFwKFxuICAgIHBsYXlsaXN0SXRlbXMudHJhY2tzPy5tYXAocCA9PiBbcC50cmFja0lkISwgcF0gYXMgW3N0cmluZywgUGxheWxpc3RJdGVtUmVhZER0b10pKTtcblxuICBpZiAoIXRyYWNrSWRzKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHRyYWNrT2JqID0gYXdhaXQgYWxidW1BcGkuZ2V0VHJhY2tzKHtcbiAgICByZXF1ZXN0Qm9keTogdHJhY2tJZHNcbiAgfSk7XG5cbiAgaWYgKCF0cmFja09iai50cmFja3MpIHtcbiAgICBhbGVydCgnSW52YWxpZCBBbGJ1bUFwaS5HZXRUcmFja3MgcmVzcG9uc2UuIEludmFsaWQgVHJhY2sgQXR0cmlidXRlJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IHBsYXlsaXN0RW50cmllczogUGxheWxpc3RFbnRyeVtdID0gdHJhY2tPYmoudHJhY2tzPy5tYXAobyA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFRyYWNrOiBvLFxuICAgICAgUGxheWxpc3Q6IHRyYWNrUGxheWxpc3RJdGVtTWFwLmdldChvLmlkISlcbiAgICB9IGFzIFBsYXlsaXN0RW50cnk7XG4gIH0pO1xuXG4gIHBsYXlsaXN0RW50cmllcy5zb3J0KChhLCBiKSA9PiBhLlBsYXlsaXN0LmluZGV4ISAtIGIuUGxheWxpc3QuaW5kZXghKTtcblxuICBwbGF5bGlzdEl0ZW1zRXhpc3QudmFsdWUgPSBwbGF5bGlzdEVudHJpZXM7XG4gIHBsYXlsaXN0SXRlbXNOb3RGb3VuZC52YWx1ZSA9IHRyYWNrT2JqLm5vdEZvdW5kIVxufVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzZXRQbGF5bGlzdFBhZ2UoKTtcblxuICB3YXRjaCgoKSA9PiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wbGF5bGlzdElkLCAodG8sIGZyb20pID0+IHtcbiAgICBpZiAocm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5uYW1lICE9PSAncGxheWxpc3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEFsc28gbmVlZCB0byBjaGVjayBpZlxuICAgIHNldFBsYXlsaXN0UGFnZSgpO1xuICB9KTtcbn0pXG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnaW5kZXgnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnIycsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBQbGF5bGlzdEVudHJ5KSA9PiByb3cuUGxheWxpc3QuaW5kZXgsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIHN0eWxlOiAnd2lkdGg6IDI0cHgnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ1RJVExFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBQbGF5bGlzdEVudHJ5KSA9PiByb3cuVHJhY2s/Lm5hbWU/Ll9kZWZhdWx0LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1oNCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnYWxidW0nLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBsYWJlbDogJ0FMQlVNJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBQbGF5bGlzdEVudHJ5KSA9PiByb3cuVHJhY2suYWxidW0/LmFsYnVtTmFtZT8uX2RlZmF1bHQsXG4gICAgLy8gZm9ybWF0OiAodmFsOiBPcmlnaW5hbFRyYWNrUmVhZER0b1tdKSA9PiB2YWwubWFwKGUgPT4gZS50aXRsZT8uZW4pLmpvaW4oJyDilIIgJyksXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZGF0ZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdEQVRFIEFEREVEJyxcbiAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICBmaWVsZDogKHJvdzogUGxheWxpc3RFbnRyeSkgPT4gcm93LlBsYXlsaXN0LmRhdGVBZGRlZCxcbiAgICBmb3JtYXQ6ICh2YWw6IERhdGUpID0+IGAke3ZhbC50b0xvY2FsZURhdGVTdHJpbmcoKX1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWdyZXktNCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBQbGF5bGlzdEVudHJ5KSA9PiByb3cuVHJhY2suZHVyYXRpb24sXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+IGAke2Zvcm1hdER1cmF0aW9uKHZhbCl9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1ncmV5LTQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9XG5dXG5cbmNvbnN0IHBhZ2luYXRpb24gPSB7XG4gIHJvd3NQZXJQYWdlOiAwLFxuICBkZXNjZW5kaW5nOiB0cnVlXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuLmJvcmRlci1zaGFycCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ibGFjay10cDUwIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTApICFpbXBvcnRhbnQ7XG59XG5cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZIQSxVQUFNLGNBQWMsSUFBSSxZQUFZLGtCQUFrQixZQUFZLEVBQUUsY0FBYztBQUNsRixVQUFNLFdBQVcsSUFBSSxTQUFTLGtCQUFrQixZQUFZLEVBQUUsY0FBYztBQUU1RSxVQUFNLFNBQVM7QUFPZixVQUFNLG1CQUFtQjtBQUN6QixVQUFNLHFCQUFxQjtBQUMzQixVQUFNLHdCQUF3QjtBQUd4QixVQUFBLFlBQVksZ0JBQWdCO0FBRWxDLFVBQU0sZUFBZSxDQUFDLGFBQVcsTUFBTSxrQkFBZ0IsU0FBUzs7QUFDOUQsWUFBTSxVQUFTLHdCQUFtQixVQUFuQixtQkFBMEIsSUFBSSxDQUFLLE1BQUEsRUFBRSxNQUFNO0FBRWhELGdCQUFBLHlCQUF5QixRQUFRLFlBQVksZUFBZTtBQUFBLElBQUE7QUFHeEUsbUJBQWUsa0JBQWtCOztBQUMvQixVQUFJLGFBQXFCLE9BQU8sYUFBYSxNQUFNLE9BQU87QUFFMUQsVUFBSSxnQkFBZ0IsTUFBTSxZQUFZLFlBQVksRUFBQyxXQUF1QixDQUFBO0FBRTFFLHVCQUFpQixRQUFRO0FBRXpCLFVBQUksWUFBVyxtQkFBYyxXQUFkLG1CQUFzQixJQUFJLENBQUEsTUFBSyxFQUFFO0FBRWhELFVBQUksdUJBQXVCLElBQUk7QUFBQSxTQUM3QixtQkFBYyxXQUFkLG1CQUFzQixJQUFJLENBQUEsTUFBSyxDQUFDLEVBQUUsU0FBVSxDQUFDO0FBQUEsTUFBa0M7QUFFakYsVUFBSSxDQUFDLFVBQVU7QUFDYjtBQUFBLE1BQ0Y7QUFFSSxVQUFBLFdBQVcsTUFBTSxTQUFTLFVBQVU7QUFBQSxRQUN0QyxhQUFhO0FBQUEsTUFBQSxDQUNkO0FBRUcsVUFBQSxDQUFDLFNBQVMsUUFBUTtBQUNwQixjQUFNLDhEQUE4RDtBQUNwRTtBQUFBLE1BQ0Y7QUFFQSxVQUFJLG1CQUFtQyxjQUFTLFdBQVQsbUJBQWlCLElBQUksQ0FBSyxNQUFBO0FBQ3hELGVBQUE7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFVBQVUscUJBQXFCLElBQUksRUFBRSxFQUFHO0FBQUEsUUFBQTtBQUFBLE1BQzFDO0FBR2Msc0JBQUEsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFNBQVMsUUFBUyxFQUFFLFNBQVMsS0FBTTtBQUVwRSx5QkFBbUIsUUFBUTtBQUMzQiw0QkFBc0IsUUFBUSxTQUFTO0FBQUEsSUFDekM7QUFFQSxjQUFVLFlBQVk7QUFDcEIsWUFBTSxnQkFBZ0I7QUFFaEIsWUFBQSxNQUFNLE9BQU8sYUFBYSxNQUFNLE9BQU8sWUFBWSxDQUFDLElBQUksU0FBUztBQUNyRSxZQUFJLE9BQU8sYUFBYSxNQUFNLFNBQVMsWUFBWTtBQUNqRDtBQUFBLFFBQ0Y7QUFFZ0I7TUFBQSxDQUNqQjtBQUFBLElBQUEsQ0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

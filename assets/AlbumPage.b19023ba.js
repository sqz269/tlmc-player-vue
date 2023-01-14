import { u as usePageContainerBgStyleStore, Q as QImg } from "./pageContainerBg.3d5549dd.js";
import { _ as _export_sfc, P as defineComponent, R as useRouter, r as ref, aA as ApiConfigProvider, bi as AlbumApi, Q as QueueController, c as computed, o as onMounted, bj as onUpdated, U as openBlock, V as createBlock, W as withCtx, ab as createElementBlock, Y as createBaseVNode, d as createVNode, S as unref, Z as toDisplayString, aj as QSeparator, a2 as createCommentVNode, E as withDirectives, a0 as QBtn, ao as QAvatar, F as Fragment, aq as renderList, ac as createTextVNode } from "./index.98c8768e.js";
import { u as useQuasar, Q as QTooltip, c as outlinedPlayArrow, o as outlinedFavoriteBorder, v as outlinedDescription, w as outlinedTipsAndUpdates, x as outlinedMoreHoriz } from "./use-quasar.ceb41ac0.js";
import { c as QMenu, a as QItem, Q as QItemSection } from "./rtl.21d10627.js";
import { Q as QList } from "./QList.f4a77eb8.js";
import { Q as QTr, a as QTd, b as QTable, c as QTh } from "./QTable.466f1c92.js";
import { a as QChip } from "./QSelect.62fc1a6f.js";
import { Q as QPage } from "./QPage.796b69c2.js";
import { C as ClosePopup } from "./ClosePopup.a964589e.js";
import { a as sumDurations, f as formatDuration } from "./durationUtils.f059d1b6.js";
import "./format.e3c7d45c.js";
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
const _hoisted_26 = /* @__PURE__ */ createTextVNode("Add to Playlist");
const _hoisted_27 = /* @__PURE__ */ createTextVNode("Copy Track Url");
const _hoisted_28 = /* @__PURE__ */ createTextVNode("View Metadata");
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
                        "touch-position": "",
                        "context-menu": "",
                        "auto-close": ""
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
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      _hoisted_26
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
                                    onClick: ($event) => copyTrackUrl(props.key)
                                  }, {
                                    default: withCtx(() => [
                                      _hoisted_27
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
                                      _hoisted_28
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLmIxOTAyM2JhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cImFsYnVtSW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHEtcHgtbWRcIiBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1nZXRBbGJ1bUltYWdlXG4gICAgICAgICAgcmF0aW89XCIxXCI+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5BbGJ1bTwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPnt7IGFsYnVtSW5mby5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGQgY3Vyc29yLXBvaW50ZXJcIiBAY2xpY2s9XCJnb3RvQXJ0aXN0XCI+XG4gICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLnRyYWNrcy5sZW5ndGggfX0gVHJhY2tzPC9kaXY+XG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgdG90YWxEdXJhdGlvbiB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXNlY3Rpb24tYmx1ciBjb2wtYWxsIHEtbXQtbGcgcm93XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiIEBjbGljaz1cInBsYXlBbGJ1bVwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlXCJcblxuICAgICAgICAgICAgICB0b3VjaC1wb3NpdGlvblxuICAgICAgICAgICAgICBjb250ZXh0LW1lbnVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMTUwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBAY2xpY2s9XCJwbGF5QWxidW0odHJ1ZSwgZmFsc2UpXCI+UGxheSBOZXh0PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIEBjbGljaz1cInBsYXlBbGJ1bShmYWxzZSwgZmFsc2UpXCI+QWRkIHRvIFF1ZXVlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgPHEtYnRuIGZhYiBmbGF0IGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIDppY29uPVwib3V0bGluZWRGYXZvcml0ZUJvcmRlclwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5TYXZlPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCI+XG4gICAgICAgICAgICA8cS1tZW51IGZpdCBhbmNob3I9XCJjZW50ZXIgbWlkZGxlXCIgc2VsZj1cInRvcCBtaWRkbGVcIj5cbiAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwIGNsYXNzPVwiYmctZGFya1wiIEBjbGljaz1cInZpZXdNZXRhZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPVwib3V0bGluZWREZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlZpZXcgRnVsbCBNZXRhZGF0YTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cCBjbGFzcz1cImJnLWRhcmtcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1cIm91dGxpbmVkVGlwc0FuZFVwZGF0ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5TdWdnZXN0IGFuIEVkaXQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWQgcS1weC1tZFwiPlxuICAgICAgICAgIDxxLXRhYmxlIDpyb3dzPVwidHJhY2tMaXN0XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgcm93LWtleT1cImlkXCJcbiAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgaGlkZS1ib3R0b21cbiAgICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICAgIGhpZGUtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdHIgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8cS10aCB2LWZvcj1cImNvbCBpbiBwcm9wcy5jb2xzXCIgOmtleT1cImNvbC5uYW1lXCIgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXkgYm9yZGVyLWJvdHRvbS10aGluXCI+XG4gICAgICAgICAgICAgICAgICB7eyBjb2wubGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L3EtdGg+XG4gICAgICAgICAgICAgIDwvcS10cj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLWluZGV4PVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIiBjbGFzcz1cInEtcGEtc21cIj5cbiAgICAgICAgICAgICAgICA8cS1idG4gZmxhdCByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwiaG92ZXJpbmdXaGljaCA9IHByb3BzLmtleVwiIEBtb3VzZWxlYXZlPVwiaG92ZXJpbmdXaGljaCA9IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBsYXlUcmFjayhwcm9wcy5rZXkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiaG92ZXJpbmdXaGljaCAhPT0gcHJvcHMua2V5ID8gcHJvcHMudmFsdWUgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICA6aWNvbj1cImhvdmVyaW5nV2hpY2ggPT09IHByb3BzLmtleSA/IG91dGxpbmVkUGxheUFycm93IDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtdGl0bGU9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHJvdyBpdGVtcy1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5kZXJsaW5lLW9uLWhvdmVyIHBvaW50ZXItb24taG92ZXJcIiBAY2xpY2s9XCJnb3RvVHJhY2socHJvcHMua2V5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9wcy52YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLW9yaWdpbmFsPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8cS1jaGlwIHNxdWFyZSBjbGFzcz1cImJnLXdoaXRlLWEtNVwiIHYtZm9yPVwicHJvcCBpbiBwcm9wcy52YWx1ZVwiIDprZXk9XCJwcm9wLmlkXCI+XG4gICAgICAgICAgICAgICAgICB7eyBwcm9wLnRpdGxlLmVuIH19XG4gICAgICAgICAgICAgICAgPC9xLWNoaXA+XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICB7e3Byb3BzLnZhbHVlfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlXCJcbiAgICAgICAgICAgICAgICB0b3VjaC1wb3NpdGlvblxuICAgICAgICAgICAgICAgIGNvbnRleHQtbWVudVxuICAgICAgICAgICAgICAgIGF1dG8tY2xvc2VcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIEBjbGljaz1cInBsYXlUcmFjayhwcm9wcy5rZXksIHRydWUsIGZhbHNlKVwiPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBAY2xpY2s9XCJwbGF5VHJhY2socHJvcHMua2V5LCBmYWxzZSwgZmFsc2UpXCI+QWRkIHRvIFF1ZXVlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkFkZCB0byBQbGF5bGlzdDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBAY2xpY2s9XCJjb3B5VHJhY2tVcmwocHJvcHMua2V5KVwiPkNvcHkgVHJhY2sgVXJsPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlZpZXcgTWV0YWRhdGE8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDwvcS10YWJsZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdBbGJ1bVBhZ2UnXG59KVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRNb3JlSG9yaXosXG4gIG91dGxpbmVkRmF2b3JpdGVCb3JkZXIsXG4gIG91dGxpbmVkRGVzY3JpcHRpb24sXG4gIG91dGxpbmVkVGlwc0FuZFVwZGF0ZXNcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge2NvbXB1dGVkLCBvbk1vdW50ZWQsIG9uVXBkYXRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtBbGJ1bUFwaSwgT3JpZ2luYWxUcmFja1JlYWREdG99IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBmb3JtYXREdXJhdGlvbiwgc3VtRHVyYXRpb25zIH0gZnJvbSAnc3JjL3V0aWxzL2R1cmF0aW9uVXRpbHMnO1xuaW1wb3J0IHt1c2VRdWFzYXJ9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQge3VzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmV9IGZyb20gJ3N0b3Jlcy9wYWdlQ29udGFpbmVyQmcnO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSAnc3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyJztcbmltcG9ydCB7UXVldWVDb250cm9sbGVyfSBmcm9tICdzcmMvdXRpbHMvUXVldWVDb250cm9sbGVyJztcbmltcG9ydCB7cm91dGV9IGZyb20gXCJxdWFzYXIvd3JhcHBlcnNcIjtcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBxID0gdXNlUXVhc2FyKCk7XG5jb25zdCB7IHNldENvbG9ycyB9ID0gdXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZSgpO1xuXG5jb25zdCBob3ZlcmluZ1doaWNoID0gcmVmPG51bWJlcj4oKTtcblxuY29uc3QgYXBpQ29uZmlnID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKTtcbmNvbnN0IGFsYnVtQXBpID0gbmV3IEFsYnVtQXBpKGFwaUNvbmZpZyk7XG5jb25zdCBhbGJ1bUluZm8gPSByZWY8QWxidW1SZWFkRHRvPigpO1xuY29uc3QgdHJhY2tMaXN0ID0gcmVmPFRyYWNrUmVhZER0b1tdPigpO1xuXG5jb25zdCBzb25nUXVldWUgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcblxuY29uc3QgY29weVRyYWNrVXJsID0gKHRyYWNrSWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBsb2MgPSByb3V0ZXIucmVzb2x2ZSh7IG5hbWU6ICd0cmFjaycsIHBhcmFtczogeyB0cmFja0lkOiB0cmFja0lkIH19KTtcbiAgY29uc29sZS5sb2cobG9jKTtcblxuICBsZXQgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24ub3JpZ2luKTtcbiAgdXJsLnBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICB1cmwuaGFzaCA9IGxvYy5ocmVmO1xuXG4gIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHVybC50b1N0cmluZygpKTtcbn1cblxuY29uc3QgZ290b0FydGlzdCA9ICgpID0+IHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAnYXJ0aXN0JywgcGFyYW1zOiB7IGFydGlzdDogYWxidW1JbmZvLnZhbHVlLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfSB9KVxufVxuXG5jb25zdCBnb3RvVHJhY2sgPSAodHJhY2tJZDogc3RyaW5nKSA9PiB7XG4gIHJvdXRlci5wdXNoKHsgbmFtZTogJ3RyYWNrJywgcGFyYW1zOiB7IHRyYWNrSWQ6IHRyYWNrSWQgfSB9KVxufVxuXG5jb25zdCBnZXRBbGJ1bUltYWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybCA9PT0gbnVsbCA/XG4gICAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDM2MCcgOiBhbGJ1bUluZm8/LnZhbHVlPy50aHVtYm5haWw/Lm1lZGl1bT8udXJsXG59KVxuXG5mdW5jdGlvbiB2aWV3TWV0YWRhdGEoKSB7XG4gIHJvdXRlci5wdXNoKHsgbmFtZTogJ2FsYnVtTWV0YWRhdGEnLCBwYXJhbXM6IHsgYWxidW1JZDogYWxidW1JbmZvLnZhbHVlPy5pZCB9IH0pXG59XG5cbmZ1bmN0aW9uIHBsYXlBbGJ1bShhZGRUb0Zyb250PXRydWUsIHBsYXlJbW1lZGlhdGVseT10cnVlKSB7XG4gIGNvbnN0IGFsYnVtVHJhY2tMaXN0ID0gdHJhY2tMaXN0LnZhbHVlO1xuXG4gIC8vIGFsYnVtVHJhY2tMaXN0Py5zb3J0KChlMSwgZTIpID0+IHtcbiAgLy8gICByZXR1cm4gPG51bWJlcj5lMi5pbmRleCAtIDxudW1iZXI+ZTEuaW5kZXg7XG4gIC8vIH0pO1xuXG4gIHEubm90aWZ5KHtcbiAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgdHlwZTogJ3NlY29uZGFyeScsXG4gICAgbWVzc2FnZTogYEFkZGVkICR7dHJhY2tMaXN0LnZhbHVlPy5sZW5ndGh9IHRyYWNrcyB0byBRdWV1ZWBcbiAgfSlcblxuICAvLyBjb25zdCB0b2FkZCA9IDxzdHJpbmdbXT5hbGJ1bVRyYWNrTGlzdD8ubWFwKGUgPT4gZT8uaWQpLnJldmVyc2UoKTtcbiAgc29uZ1F1ZXVlLmFkZFRyYWNrVG9RdWV1ZUJ5SWRCYXRjaCg8c3RyaW5nW10+YWxidW1UcmFja0xpc3Q/Lm1hcChlID0+IGU/LmlkKSwgYWRkVG9Gcm9udCwgcGxheUltbWVkaWF0ZWx5KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGxheVRyYWNrKHRyYWNrSWQ6IHN0cmluZywgYWRkVG9Gcm9udD10cnVlLCBwbGF5SW1tZWRpYXRlbHk9dHJ1ZSkge1xuICBsZXQgdHJhY2tUb1BsYXkgPSBudWxsO1xuICBpZiAoIXRyYWNrTGlzdC52YWx1ZSkge1xuICAgIGFsZXJ0KCdFbXB0eSBUcmFja2xpc3QnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3IgKGxldCB0cmFjayBvZiB0cmFja0xpc3QudmFsdWUpIHtcbiAgICBpZiAodHJhY2suaWQgPT0gdHJhY2tJZCkge1xuICAgICAgdHJhY2tUb1BsYXkgPSB0cmFjaztcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHRyYWNrVG9QbGF5ID09PSBudWxsKSB7XG4gICAgYWxlcnQoJ0ludmFsaWQgSW5kZXguIE5vIEluZGV4OiAnICsgdHJhY2tJZCArICcuIGluIHRyYWNrIGxpc3QuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXdhaXQgc29uZ1F1ZXVlLmFkZFRyYWNrVG9RdWV1ZUJ5SWQoPHN0cmluZz4gdHJhY2tUb1BsYXkuaWQsIGFkZFRvRnJvbnQsIHBsYXlJbW1lZGlhdGVseSk7XG4gIHEubm90aWZ5KHtcbiAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgdHlwZTogJ3NlY29uZGFyeScsXG4gICAgbWVzc2FnZTogJ0FkZGVkIHRvIFF1ZXVlJ1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGJ1bShhbGJ1bUlkOiBzdHJpbmcpOiBQcm9taXNlPEFsYnVtUmVhZER0bz4ge1xuICByZXR1cm4gYWxidW1BcGkuZ2V0QWxidW0oe2lkOiBhbGJ1bUlkfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEFsYnVtUGFnZSgpIHtcbiAgYWxidW1JbmZvLnZhbHVlID0gYXdhaXQgZmV0Y2hBbGJ1bSg8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLmFsYnVtSWQpO1xuICBpZiAoYWxidW1JbmZvLnZhbHVlPy50cmFja3MpIHtcbiAgICBhbGJ1bUluZm8udmFsdWU/LnRyYWNrcy5zb3J0KCh0YSwgdGIpID0+IHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICByZXR1cm4gdGEuaW5kZXghIC0gdGIuaW5kZXghXG4gICAgfSlcbiAgICB0cmFja0xpc3QudmFsdWUgPSBhbGJ1bUluZm8udmFsdWU/LnRyYWNrcztcbiAgfVxuICBzZXRDb2xvcnMoPHN0cmluZ1tdPmFsYnVtSW5mby52YWx1ZT8udGh1bWJuYWlsPy5jb2xvcnMpO1xufVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzZXRBbGJ1bVBhZ2UoKTtcbn0pXG5cbm9uVXBkYXRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHNldEFsYnVtUGFnZSgpO1xufSlcblxuY29uc3QgY29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdpbmRleCcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICcjJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmluZGV4LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBzdHlsZTogJ3dpZHRoOiAyNHB4JyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0aXRsZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdUSVRMRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cubmFtZT8uX2RlZmF1bHQsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWg0JyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdvcmlnaW5hbCcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIGxhYmVsOiAnT1JJR0lOQUwnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93Lm9yaWdpbmFsLFxuICAgIC8vIGZvcm1hdDogKHZhbDogT3JpZ2luYWxUcmFja1JlYWREdG9bXSkgPT4gdmFsLm1hcChlID0+IGUudGl0bGU/LmVuKS5qb2luKCcg4pSCICcpLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ0RVUkFUSU9OJyxcbiAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuZHVyYXRpb24sXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+IGAke2Zvcm1hdER1cmF0aW9uKHZhbCl9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1ncmV5LTQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9XG5dXG5cbmxldCB0b3RhbER1cmF0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICBsZXQgYWxsRHVyYXRpb25zOiBzdHJpbmdbXSA9IFtdXG4gIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzPy5mb3JFYWNoKHQgPT4ge1xuICAgIGlmICh0LmR1cmF0aW9uKSBhbGxEdXJhdGlvbnMucHVzaCh0LmR1cmF0aW9uKVxuICB9KTtcbiAgcmV0dXJuIHN1bUR1cmF0aW9ucyhhbGxEdXJhdGlvbnMpO1xufSlcblxuY29uc3QgcGFnaW5hdGlvbiA9IHtcbiAgcm93c1BlclBhZ2U6IDAsXG4gIGRlc2NlbmRpbmc6IHRydWVcbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlMQSxNQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUNSLENBQUM7Ozs7QUF1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

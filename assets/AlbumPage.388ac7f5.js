import { Q as QImg } from "./QImg.f71d0f96.js";
import { _ as _export_sfc, P as defineComponent, R as useRouter, r as ref, aA as ApiConfigProvider, bA as AlbumApi, Q as QueueController, c as computed, o as onMounted, bh as onUpdated, U as openBlock, V as createBlock, W as withCtx, ab as createElementBlock, Y as createBaseVNode, d as createVNode, S as unref, Z as toDisplayString, aj as QSeparator, a2 as createCommentVNode, E as withDirectives, a0 as QBtn, ao as QAvatar, F as Fragment, aq as renderList, ac as createTextVNode } from "./index.18e4bb4c.js";
import { Q as QTooltip, c as outlinedPlayArrow, o as outlinedFavoriteBorder, t as outlinedDescription, u as outlinedTipsAndUpdates, v as outlinedMoreHoriz } from "./index.23d39097.js";
import { Q as QMenu, b as QItem, a as QItemSection } from "./QItem.7e5b67b2.js";
import { Q as QList } from "./QList.4b939d7f.js";
import { Q as QTr, a as QTd, b as QTable, c as QTh } from "./QTable.c52f9ece.js";
import { b as QChip } from "./QSelect.cd208700.js";
import { Q as QPage } from "./QPage.ab5da8f0.js";
import { C as ClosePopup } from "./ClosePopup.c77ec73b.js";
import { a as sumDurations, f as formatDuration } from "./durationUtils.f059d1b6.js";
import { u as useQuasar } from "./use-quasar.50089cc8.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.7b61c3c8.js";
import { A as AddToPlaylistMenu } from "./AddToPlaylistMenu.fdfbf260.js";
import "./position-engine.852dcea9.js";
import "./format.a33550d6.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLjM4OGFjN2Y1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cImFsYnVtSW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHEtcHgtbWRcIiBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1nZXRBbGJ1bUltYWdlXG4gICAgICAgICAgcmF0aW89XCIxXCI+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5BbGJ1bTwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPnt7IGFsYnVtSW5mby5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGQgY3Vyc29yLXBvaW50ZXJcIiBAY2xpY2s9XCJnb3RvQXJ0aXN0XCI+XG4gICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLnRyYWNrcy5sZW5ndGggfX0gVHJhY2tzPC9kaXY+XG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgdG90YWxEdXJhdGlvbiB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXNlY3Rpb24tYmx1ciBjb2wtYWxsIHEtbXQtbGcgcm93XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiIEBjbGljaz1cInBsYXlBbGJ1bVwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlXCJcblxuICAgICAgICAgICAgICB0b3VjaC1wb3NpdGlvblxuICAgICAgICAgICAgICBjb250ZXh0LW1lbnVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMTUwcHg7XCI+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBAY2xpY2s9XCJwbGF5QWxidW0odHJ1ZSwgZmFsc2UpXCI+UGxheSBOZXh0PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIEBjbGljaz1cInBsYXlBbGJ1bShmYWxzZSwgZmFsc2UpXCI+QWRkIHRvIFF1ZXVlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgPHEtYnRuIGZhYiBmbGF0IGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIDppY29uPVwib3V0bGluZWRGYXZvcml0ZUJvcmRlclwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5TYXZlPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCI+XG4gICAgICAgICAgICA8cS1tZW51IGZpdCBhbmNob3I9XCJjZW50ZXIgbWlkZGxlXCIgc2VsZj1cInRvcCBtaWRkbGVcIj5cbiAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwIGNsYXNzPVwiYmctZGFya1wiIEBjbGljaz1cInZpZXdNZXRhZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPVwib3V0bGluZWREZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlZpZXcgRnVsbCBNZXRhZGF0YTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cCBjbGFzcz1cImJnLWRhcmtcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1cIm91dGxpbmVkVGlwc0FuZFVwZGF0ZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5TdWdnZXN0IGFuIEVkaXQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWQgcS1weC1tZFwiPlxuICAgICAgICAgIDxxLXRhYmxlIDpyb3dzPVwidHJhY2tMaXN0XCJcbiAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICAgcm93LWtleT1cImlkXCJcbiAgICAgICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgICAgICAgaGlkZS1ib3R0b21cbiAgICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICAgIGhpZGUtcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6aGVhZGVyPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdHIgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8cS10aCB2LWZvcj1cImNvbCBpbiBwcm9wcy5jb2xzXCIgOmtleT1cImNvbC5uYW1lXCIgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXkgYm9yZGVyLWJvdHRvbS10aGluXCI+XG4gICAgICAgICAgICAgICAgICB7eyBjb2wubGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L3EtdGg+XG4gICAgICAgICAgICAgIDwvcS10cj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLWluZGV4PVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIiBjbGFzcz1cInEtcGEtc21cIj5cbiAgICAgICAgICAgICAgICA8cS1idG4gZmxhdCByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleS01XCJcbiAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjEzcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICBAbW91c2VvdmVyPVwiaG92ZXJpbmdXaGljaCA9IHByb3BzLmtleVwiIEBtb3VzZWxlYXZlPVwiaG92ZXJpbmdXaGljaCA9IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBsYXlUcmFjayhwcm9wcy5rZXkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiaG92ZXJpbmdXaGljaCAhPT0gcHJvcHMua2V5ID8gcHJvcHMudmFsdWUgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICA6aWNvbj1cImhvdmVyaW5nV2hpY2ggPT09IHByb3BzLmtleSA/IG91dGxpbmVkUGxheUFycm93IDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtdGl0bGU9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHJvdyBpdGVtcy1jZW50ZXIgdGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5kZXJsaW5lLW9uLWhvdmVyIHBvaW50ZXItb24taG92ZXJcIiBAY2xpY2s9XCJnb3RvVHJhY2socHJvcHMua2V5KVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwcm9wcy52YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLW9yaWdpbmFsPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8cS1jaGlwIHNxdWFyZSBjbGFzcz1cImJnLXdoaXRlLWEtNVwiIHYtZm9yPVwicHJvcCBpbiBwcm9wcy52YWx1ZVwiIDprZXk9XCJwcm9wLmlkXCI+XG4gICAgICAgICAgICAgICAgICB7eyBwcm9wLnRpdGxlLmVuIH19XG4gICAgICAgICAgICAgICAgPC9xLWNoaXA+XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICB7e3Byb3BzLnZhbHVlfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiZy1ibGFjayBib3JkZXIgYm9yZGVyLXdoaXRlXCJcbiAgICAgICAgICAgICAgICBjb250ZXh0LW1lbnVcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIEBjbGljaz1cInBsYXlUcmFjayhwcm9wcy5rZXksIHRydWUsIGZhbHNlKVwiPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBAY2xpY2s9XCJwbGF5VHJhY2socHJvcHMua2V5LCBmYWxzZSwgZmFsc2UpXCI+QWRkIHRvIFF1ZXVlPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8QWRkVG9QbGF5bGlzdE1lbnUgOnRyYWNrLWlkPVwicHJvcHMua2V5XCI+PC9BZGRUb1BsYXlsaXN0TWVudT5cblxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIEBjbGljaz1cImNvcHlUcmFja1VybChwcm9wcy5rZXkpXCI+Q29weSBUcmFjayBVcmw8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VmlldyBNZXRhZGF0YTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDwvcS10YWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0FsYnVtUGFnZSdcbn0pXG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheUFycm93LFxuICBvdXRsaW5lZE1vcmVIb3JpeixcbiAgb3V0bGluZWRGYXZvcml0ZUJvcmRlcixcbiAgb3V0bGluZWRQbGF5bGlzdEFkZCxcbiAgb3V0bGluZWREZXNjcmlwdGlvbixcbiAgb3V0bGluZWRUaXBzQW5kVXBkYXRlc1xufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7Y29tcHV0ZWQsIG9uTW91bnRlZCwgb25VcGRhdGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge0FsYnVtQXBpLCBPcmlnaW5hbFRyYWNrUmVhZER0b30gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7IGZvcm1hdER1cmF0aW9uLCBzdW1EdXJhdGlvbnMgfSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuaW1wb3J0IHtRdWV1ZUNvbnRyb2xsZXJ9IGZyb20gJ3NyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXInO1xuaW1wb3J0IHtyb3V0ZX0gZnJvbSBcInF1YXNhci93cmFwcGVyc1wiO1xuaW1wb3J0IEFkZFRvUGxheWxpc3RNZW51IGZyb20gXCJjb21wb25lbnRzL0FkZFRvUGxheWxpc3RNZW51LnZ1ZVwiO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHsgc2V0Q29sb3JzIH0gPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IGhvdmVyaW5nV2hpY2ggPSByZWY8bnVtYmVyPigpO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpO1xuY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcbmNvbnN0IGFsYnVtSW5mbyA9IHJlZjxBbGJ1bVJlYWREdG8+KCk7XG5jb25zdCB0cmFja0xpc3QgPSByZWY8VHJhY2tSZWFkRHRvW10+KCk7XG5cbmNvbnN0IHNvbmdRdWV1ZSA9IFF1ZXVlQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xuXG5jb25zdCBjb3B5VHJhY2tVcmwgPSAodHJhY2tJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGxvYyA9IHJvdXRlci5yZXNvbHZlKHsgbmFtZTogJ3RyYWNrJywgcGFyYW1zOiB7IHRyYWNrSWQ6IHRyYWNrSWQgfX0pO1xuICBjb25zb2xlLmxvZyhsb2MpO1xuXG4gIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pO1xuICB1cmwucGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gIHVybC5oYXNoID0gbG9jLmhyZWY7XG5cbiAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodXJsLnRvU3RyaW5nKCkpO1xufVxuXG5jb25zdCBnb3RvQXJ0aXN0ID0gKCkgPT4ge1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhcnRpc3QnLCBwYXJhbXM6IHsgYXJ0aXN0OiBhbGJ1bUluZm8udmFsdWUuYWxidW1BcnRpc3RbMF0ubmFtZSB9IH0pXG59XG5cbmNvbnN0IGdvdG9UcmFjayA9ICh0cmFja0lkOiBzdHJpbmcpID0+IHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAndHJhY2snLCBwYXJhbXM6IHsgdHJhY2tJZDogdHJhY2tJZCB9IH0pXG59XG5cbmNvbnN0IGdldEFsYnVtSW1hZ2UgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBhbGJ1bUluZm8/LnZhbHVlPy50aHVtYm5haWw/Lm1lZGl1bT8udXJsID09PSBudWxsID9cbiAgICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4MzYwJyA6IGFsYnVtSW5mbz8udmFsdWU/LnRodW1ibmFpbD8ubWVkaXVtPy51cmxcbn0pXG5cbmZ1bmN0aW9uIHZpZXdNZXRhZGF0YSgpIHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAnYWxidW1NZXRhZGF0YScsIHBhcmFtczogeyBhbGJ1bUlkOiBhbGJ1bUluZm8udmFsdWU/LmlkIH0gfSlcbn1cblxuZnVuY3Rpb24gcGxheUFsYnVtKGFkZFRvRnJvbnQ9dHJ1ZSwgcGxheUltbWVkaWF0ZWx5PXRydWUpIHtcbiAgY29uc3QgYWxidW1UcmFja0xpc3QgPSB0cmFja0xpc3QudmFsdWU7XG5cbiAgLy8gYWxidW1UcmFja0xpc3Q/LnNvcnQoKGUxLCBlMikgPT4ge1xuICAvLyAgIHJldHVybiA8bnVtYmVyPmUyLmluZGV4IC0gPG51bWJlcj5lMS5pbmRleDtcbiAgLy8gfSk7XG5cbiAgcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiBgQWRkZWQgJHt0cmFja0xpc3QudmFsdWU/Lmxlbmd0aH0gdHJhY2tzIHRvIFF1ZXVlYFxuICB9KVxuXG4gIC8vIGNvbnN0IHRvYWRkID0gPHN0cmluZ1tdPmFsYnVtVHJhY2tMaXN0Py5tYXAoZSA9PiBlPy5pZCkucmV2ZXJzZSgpO1xuICBzb25nUXVldWUuYWRkVHJhY2tUb1F1ZXVlQnlJZEJhdGNoKDxzdHJpbmdbXT5hbGJ1bVRyYWNrTGlzdD8ubWFwKGUgPT4gZT8uaWQpLCBhZGRUb0Zyb250LCBwbGF5SW1tZWRpYXRlbHkpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwbGF5VHJhY2sodHJhY2tJZDogc3RyaW5nLCBhZGRUb0Zyb250PXRydWUsIHBsYXlJbW1lZGlhdGVseT10cnVlKSB7XG4gIGxldCB0cmFja1RvUGxheSA9IG51bGw7XG4gIGlmICghdHJhY2tMaXN0LnZhbHVlKSB7XG4gICAgYWxlcnQoJ0VtcHR5IFRyYWNrbGlzdCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IHRyYWNrIG9mIHRyYWNrTGlzdC52YWx1ZSkge1xuICAgIGlmICh0cmFjay5pZCA9PSB0cmFja0lkKSB7XG4gICAgICB0cmFja1RvUGxheSA9IHRyYWNrO1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAodHJhY2tUb1BsYXkgPT09IG51bGwpIHtcbiAgICBhbGVydCgnSW52YWxpZCBJbmRleC4gTm8gSW5kZXg6ICcgKyB0cmFja0lkICsgJy4gaW4gdHJhY2sgbGlzdC4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBhd2FpdCBzb25nUXVldWUuYWRkVHJhY2tUb1F1ZXVlQnlJZCg8c3RyaW5nPiB0cmFja1RvUGxheS5pZCwgYWRkVG9Gcm9udCwgcGxheUltbWVkaWF0ZWx5KTtcbiAgcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiAnQWRkZWQgdG8gUXVldWUnXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFsYnVtKGFsYnVtSWQ6IHN0cmluZyk6IFByb21pc2U8QWxidW1SZWFkRHRvPiB7XG4gIHJldHVybiBhbGJ1bUFwaS5nZXRBbGJ1bSh7aWQ6IGFsYnVtSWR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0QWxidW1QYWdlKCkge1xuICBhbGJ1bUluZm8udmFsdWUgPSBhd2FpdCBmZXRjaEFsYnVtKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuYWxidW1JZCk7XG4gIGlmIChhbGJ1bUluZm8udmFsdWU/LnRyYWNrcykge1xuICAgIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzLnNvcnQoKHRhLCB0YikgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgIHJldHVybiB0YS5pbmRleCEgLSB0Yi5pbmRleCFcbiAgICB9KVxuICAgIHRyYWNrTGlzdC52YWx1ZSA9IGFsYnVtSW5mby52YWx1ZT8udHJhY2tzO1xuICB9XG4gIHNldENvbG9ycyg8c3RyaW5nW10+YWxidW1JbmZvLnZhbHVlPy50aHVtYm5haWw/LmNvbG9ycyk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHNldEFsYnVtUGFnZSgpO1xufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XG59KVxuXG5jb25zdCBjb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2luZGV4JyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJyMnLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuaW5kZXgsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIHN0eWxlOiAnd2lkdGg6IDI0cHgnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ1RJVExFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5uYW1lPy5fZGVmYXVsdCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtaDQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ29yaWdpbmFsJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgbGFiZWw6ICdPUklHSU5BTCcsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cub3JpZ2luYWwsXG4gICAgLy8gZm9ybWF0OiAodmFsOiBPcmlnaW5hbFRyYWNrUmVhZER0b1tdKSA9PiB2YWwubWFwKGUgPT4gZS50aXRsZT8uZW4pLmpvaW4oJyDilIIgJyksXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5kdXJhdGlvbixcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7Zm9ybWF0RHVyYXRpb24odmFsKX1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWdyZXktNCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH1cbl1cblxubGV0IHRvdGFsRHVyYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gIGxldCBhbGxEdXJhdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgYWxidW1JbmZvLnZhbHVlPy50cmFja3M/LmZvckVhY2godCA9PiB7XG4gICAgaWYgKHQuZHVyYXRpb24pIGFsbER1cmF0aW9ucy5wdXNoKHQuZHVyYXRpb24pXG4gIH0pO1xuICByZXR1cm4gc3VtRHVyYXRpb25zKGFsbER1cmF0aW9ucyk7XG59KVxuXG5jb25zdCBwYWdpbmF0aW9uID0ge1xuICByb3dzUGVyUGFnZTogMCxcbiAgZGVzY2VuZGluZzogdHJ1ZVxufVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEtBLE1BQUEsY0FBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQ1IsQ0FBQzs7OztBQXlCRCxVQUFNLFNBQVM7QUFDZixVQUFNLElBQUk7QUFDSixV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

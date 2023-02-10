import { Q as QImg } from "./QImg.c55d7a89.js";
import { _ as _export_sfc, P as defineComponent, U as openBlock, V as createBlock, W as withCtx, d as createVNode, ag as QIcon, ad as createTextVNode, S as useRouter, r as ref, aB as ApiConfigProvider, bC as AlbumApi, Q as QueueController, c as computed, o as onMounted, bj as onUpdated, ac as createElementBlock, Y as createBaseVNode, a1 as unref, Z as toDisplayString, al as QSeparator, a3 as createCommentVNode, E as withDirectives, a0 as QBtn, ap as QAvatar, F as Fragment, ar as renderList } from "./index.95369fcb.js";
import { Q as QTooltip, c as outlinedPlayArrow, o as outlinedFavoriteBorder, u as outlinedDescription, v as outlinedTipsAndUpdates, w as outlinedMoreHoriz } from "./index.2273a747.js";
import { Q as QItemSection, a as QItem, b as QMenu } from "./QMenu.6c2cbd36.js";
import { Q as QList } from "./QList.dea54d52.js";
import { Q as QTr, a as QTd, b as QTable, c as QTh } from "./QTable.c2e6475f.js";
import { b as QChip } from "./QSelect.c92c0067.js";
import { Q as QPage } from "./QPage.f8a05bec.js";
import { C as ClosePopup } from "./ClosePopup.c88b10fa.js";
import { a as sumDurations, f as formatDuration } from "./durationUtils.f059d1b6.js";
import { u as useQuasar } from "./use-quasar.59ef0a44.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.b66dc448.js";
import { A as AddToPlaylistSelector } from "./AddToPlaylistSelector.7a438244.js";
import "./position-engine.25daec0d.js";
import "./format.a33550d6.js";
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode("Add To Playlist");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AddToPlaylistMenu",
  props: {
    trackId: null
  },
  setup(__props) {
    const props = __props;
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
          createVNode(AddToPlaylistSelector, {
            "track-id": props.trackId
          }, null, 8, ["track-id"])
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
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
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
                      createVNode(QMenu, { "context-menu": "" }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLjhlMTQzNjA4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cImFsYnVtSW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHEtcHgtbWRcIiBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1nZXRBbGJ1bUltYWdlXG4gICAgICAgICAgcmF0aW89XCIxXCI+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5BbGJ1bTwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPnt7IGFsYnVtSW5mby5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGQgY3Vyc29yLXBvaW50ZXJcIiBAY2xpY2s9XCJnb3RvQXJ0aXN0XCI+XG4gICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLnRyYWNrcy5sZW5ndGggfX0gVHJhY2tzPC9kaXY+XG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgdG90YWxEdXJhdGlvbiB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLXNlY3Rpb24tYmx1ciBjb2wtYWxsIHEtbXQtbGcgcm93XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiIEBjbGljaz1cInBsYXlBbGJ1bVwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XG5cbiAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgdG91Y2gtcG9zaXRpb25cbiAgICAgICAgICAgICAgY29udGV4dC1tZW51XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4O1wiPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gQGNsaWNrPVwicGxheUFsYnVtKHRydWUsIGZhbHNlKVwiPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBAY2xpY2s9XCJwbGF5QWxidW0oZmFsc2UsIGZhbHNlKVwiPkFkZCB0byBRdWV1ZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkRmF2b3JpdGVCb3JkZXJcIj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXA+U2F2ZTwvcS10b29sdGlwPlxuICAgICAgICAgIDwvcS1idG4+XG5cbiAgICAgICAgICA8cS1idG4gZmFiIGZsYXQgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZE1vcmVIb3JpelwiPlxuICAgICAgICAgICAgPHEtbWVudSBmaXQgYW5jaG9yPVwiY2VudGVyIG1pZGRsZVwiIHNlbGY9XCJ0b3AgbWlkZGxlXCI+XG4gICAgICAgICAgICAgIDxxLWxpc3Q+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cCBAY2xpY2s9XCJ2aWV3TWV0YWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1cIm91dGxpbmVkRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5WaWV3IEZ1bGwgTWV0YWRhdGE8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXIgOmljb249XCJvdXRsaW5lZFRpcHNBbmRVcGRhdGVzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+U3VnZ2VzdCBhbiBFZGl0PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kIHEtcHgtbWRcIj5cbiAgICAgICAgICA8cS10YWJsZSA6cm93cz1cInRyYWNrTGlzdFwiXG4gICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvcj1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgIHJvdy1rZXk9XCJpZFwiXG4gICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgIGhpZGUtYm90dG9tXG4gICAgICAgICAgICAgICAgICAgdmlydHVhbC1zY3JvbGxcbiAgICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj1cInByb3BzXCI+XG4gICAgICAgICAgICAgIDxxLXRyIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgPHEtdGggdi1mb3I9XCJjb2wgaW4gcHJvcHMuY29sc1wiIDprZXk9XCJjb2wubmFtZVwiIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1ncmV5IGJvcmRlci1ib3R0b20tdGhpblwiPlxuICAgICAgICAgICAgICAgICAge3sgY29sLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9xLXRoPlxuICAgICAgICAgICAgICA8L3EtdHI+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD1cInByb3BzXCI+XG4gICAgICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCIgY2xhc3M9XCJxLXBhLXNtXCI+XG4gICAgICAgICAgICAgICAgPHEtYnRuIGZsYXQgcm91bmRcbiAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXktNVwiXG4gICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIxM3B4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cImhvdmVyaW5nV2hpY2ggPSBwcm9wcy5rZXlcIiBAbW91c2VsZWF2ZT1cImhvdmVyaW5nV2hpY2ggPSB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwbGF5VHJhY2socHJvcHMua2V5KVwiXG4gICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImhvdmVyaW5nV2hpY2ggIT09IHByb3BzLmtleSA/IHByb3BzLnZhbHVlIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJob3ZlcmluZ1doaWNoID09PSBwcm9wcy5rZXkgPyBvdXRsaW5lZFBsYXlBcnJvdyA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLXRpdGxlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByb3cgaXRlbXMtY2VudGVyIHRleHQtc3VidGl0bGUxIHRleHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVuZGVybGluZS1vbi1ob3ZlciBwb2ludGVyLW9uLWhvdmVyXCIgQGNsaWNrPVwiZ290b1RyYWNrKHByb3BzLmtleSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcHJvcHMudmFsdWUgfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1vcmlnaW5hbD1cInByb3BzXCI+XG4gICAgICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgPHEtY2hpcCBzcXVhcmUgY2xhc3M9XCJiZy13aGl0ZS1hLTVcIiB2LWZvcj1cInByb3AgaW4gcHJvcHMudmFsdWVcIiA6a2V5PVwicHJvcC5pZFwiPlxuICAgICAgICAgICAgICAgICAge3sgcHJvcC50aXRsZS5lbiB9fVxuICAgICAgICAgICAgICAgIDwvcS1jaGlwPlxuICAgICAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbD1cInByb3BzXCI+XG4gICAgICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAge3twcm9wcy52YWx1ZX19XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgICAgPHEtbWVudSBjb250ZXh0LW1lbnU+XG4gICAgICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMTUwcHg7XCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gQGNsaWNrPVwicGxheVRyYWNrKHByb3BzLmtleSwgdHJ1ZSwgZmFsc2UpXCI+UGxheSBOZXh0PC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIEBjbGljaz1cInBsYXlUcmFjayhwcm9wcy5rZXksIGZhbHNlLCBmYWxzZSlcIj5BZGQgdG8gUXVldWU8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxBZGRUb1BsYXlsaXN0TWVudSA6dHJhY2staWQ9XCJwcm9wcy5rZXlcIj48L0FkZFRvUGxheWxpc3RNZW51PlxuXG4gICAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gQGNsaWNrPVwiY29weVRyYWNrVXJsKHByb3BzLmtleSlcIj5Db3B5IFRyYWNrIFVybDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5WaWV3IE1ldGFkYXRhPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9xLXRhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnQWxidW1QYWdlJ1xufSlcbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRQbGF5QXJyb3csXG4gIG91dGxpbmVkTW9yZUhvcml6LFxuICBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyLFxuICBvdXRsaW5lZFBsYXlsaXN0QWRkLFxuICBvdXRsaW5lZERlc2NyaXB0aW9uLFxuICBvdXRsaW5lZFRpcHNBbmRVcGRhdGVzXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcblxuaW1wb3J0IHtjb21wdXRlZCwgb25Nb3VudGVkLCBvblVwZGF0ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7QWxidW1BcGksIE9yaWdpbmFsVHJhY2tSZWFkRHRvfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgZm9ybWF0RHVyYXRpb24sIHN1bUR1cmF0aW9ucyB9IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcbmltcG9ydCB7dXNlUXVhc2FyfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHt1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlfSBmcm9tICdzdG9yZXMvcGFnZUNvbnRhaW5lckJnJztcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gJ3NyYy91dGlscy9BcGlDb25maWdQcm92aWRlcic7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSAnc3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlcic7XG5pbXBvcnQge3JvdXRlfSBmcm9tIFwicXVhc2FyL3dyYXBwZXJzXCI7XG5pbXBvcnQgQWRkVG9QbGF5bGlzdE1lbnUgZnJvbSBcImNvbXBvbmVudHMvQWRkVG9QbGF5bGlzdE1lbnUudnVlXCI7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgcSA9IHVzZVF1YXNhcigpO1xuY29uc3QgeyBzZXRDb2xvcnMgfSA9IHVzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUoKTtcblxuY29uc3QgaG92ZXJpbmdXaGljaCA9IHJlZjxudW1iZXI+KCk7XG5cbmNvbnN0IGFwaUNvbmZpZyA9IEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKCk7XG5jb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShhcGlDb25maWcpO1xuY29uc3QgYWxidW1JbmZvID0gcmVmPEFsYnVtUmVhZER0bz4oKTtcbmNvbnN0IHRyYWNrTGlzdCA9IHJlZjxUcmFja1JlYWREdG9bXT4oKTtcblxuY29uc3Qgc29uZ1F1ZXVlID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbmNvbnN0IGNvcHlUcmFja1VybCA9ICh0cmFja0lkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgbG9jID0gcm91dGVyLnJlc29sdmUoeyBuYW1lOiAndHJhY2snLCBwYXJhbXM6IHsgdHJhY2tJZDogdHJhY2tJZCB9fSk7XG4gIGNvbnNvbGUubG9nKGxvYyk7XG5cbiAgbGV0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLm9yaWdpbik7XG4gIHVybC5wYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgdXJsLmhhc2ggPSBsb2MuaHJlZjtcblxuICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh1cmwudG9TdHJpbmcoKSk7XG59XG5cbmNvbnN0IGdvdG9BcnRpc3QgPSAoKSA9PiB7XG4gIHJvdXRlci5wdXNoKHsgbmFtZTogJ2FydGlzdCcsIHBhcmFtczogeyBhcnRpc3Q6IGFsYnVtSW5mby52YWx1ZS5hbGJ1bUFydGlzdFswXS5uYW1lIH0gfSlcbn1cblxuY29uc3QgZ290b1RyYWNrID0gKHRyYWNrSWQ6IHN0cmluZykgPT4ge1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICd0cmFjaycsIHBhcmFtczogeyB0cmFja0lkOiB0cmFja0lkIH0gfSlcbn1cblxuY29uc3QgZ2V0QWxidW1JbWFnZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGFsYnVtSW5mbz8udmFsdWU/LnRodW1ibmFpbD8ubWVkaXVtPy51cmwgPT09IG51bGwgP1xuICAgICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHgzNjAnIDogYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybFxufSlcblxuZnVuY3Rpb24gdmlld01ldGFkYXRhKCkge1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhbGJ1bU1ldGFkYXRhJywgcGFyYW1zOiB7IGFsYnVtSWQ6IGFsYnVtSW5mby52YWx1ZT8uaWQgfSB9KVxufVxuXG5mdW5jdGlvbiBwbGF5QWxidW0oYWRkVG9Gcm9udD10cnVlLCBwbGF5SW1tZWRpYXRlbHk9dHJ1ZSkge1xuICBjb25zdCBhbGJ1bVRyYWNrTGlzdCA9IHRyYWNrTGlzdC52YWx1ZTtcblxuICAvLyBhbGJ1bVRyYWNrTGlzdD8uc29ydCgoZTEsIGUyKSA9PiB7XG4gIC8vICAgcmV0dXJuIDxudW1iZXI+ZTIuaW5kZXggLSA8bnVtYmVyPmUxLmluZGV4O1xuICAvLyB9KTtcblxuICBxLm5vdGlmeSh7XG4gICAgcG9zaXRpb246ICd0b3AnLFxuICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgIG1lc3NhZ2U6IGBBZGRlZCAke3RyYWNrTGlzdC52YWx1ZT8ubGVuZ3RofSB0cmFja3MgdG8gUXVldWVgXG4gIH0pXG5cbiAgLy8gY29uc3QgdG9hZGQgPSA8c3RyaW5nW10+YWxidW1UcmFja0xpc3Q/Lm1hcChlID0+IGU/LmlkKS5yZXZlcnNlKCk7XG4gIHNvbmdRdWV1ZS5hZGRUcmFja1RvUXVldWVCeUlkQmF0Y2goPHN0cmluZ1tdPmFsYnVtVHJhY2tMaXN0Py5tYXAoZSA9PiBlPy5pZCksIGFkZFRvRnJvbnQsIHBsYXlJbW1lZGlhdGVseSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBsYXlUcmFjayh0cmFja0lkOiBzdHJpbmcsIGFkZFRvRnJvbnQ9dHJ1ZSwgcGxheUltbWVkaWF0ZWx5PXRydWUpIHtcbiAgbGV0IHRyYWNrVG9QbGF5ID0gbnVsbDtcbiAgaWYgKCF0cmFja0xpc3QudmFsdWUpIHtcbiAgICBhbGVydCgnRW1wdHkgVHJhY2tsaXN0Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQgdHJhY2sgb2YgdHJhY2tMaXN0LnZhbHVlKSB7XG4gICAgaWYgKHRyYWNrLmlkID09IHRyYWNrSWQpIHtcbiAgICAgIHRyYWNrVG9QbGF5ID0gdHJhY2s7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh0cmFja1RvUGxheSA9PT0gbnVsbCkge1xuICAgIGFsZXJ0KCdJbnZhbGlkIEluZGV4LiBObyBJbmRleDogJyArIHRyYWNrSWQgKyAnLiBpbiB0cmFjayBsaXN0LicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGF3YWl0IHNvbmdRdWV1ZS5hZGRUcmFja1RvUXVldWVCeUlkKDxzdHJpbmc+IHRyYWNrVG9QbGF5LmlkLCBhZGRUb0Zyb250LCBwbGF5SW1tZWRpYXRlbHkpO1xuICBxLm5vdGlmeSh7XG4gICAgcG9zaXRpb246ICd0b3AnLFxuICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgIG1lc3NhZ2U6ICdBZGRlZCB0byBRdWV1ZSdcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQWxidW0oYWxidW1JZDogc3RyaW5nKTogUHJvbWlzZTxBbGJ1bVJlYWREdG8+IHtcbiAgcmV0dXJuIGFsYnVtQXBpLmdldEFsYnVtKHtpZDogYWxidW1JZH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRBbGJ1bVBhZ2UoKSB7XG4gIGFsYnVtSW5mby52YWx1ZSA9IGF3YWl0IGZldGNoQWxidW0oPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hbGJ1bUlkKTtcbiAgaWYgKGFsYnVtSW5mby52YWx1ZT8udHJhY2tzKSB7XG4gICAgYWxidW1JbmZvLnZhbHVlPy50cmFja3Muc29ydCgodGEsIHRiKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgcmV0dXJuIHRhLmluZGV4ISAtIHRiLmluZGV4IVxuICAgIH0pXG4gICAgdHJhY2tMaXN0LnZhbHVlID0gYWxidW1JbmZvLnZhbHVlPy50cmFja3M7XG4gIH1cbiAgc2V0Q29sb3JzKDxzdHJpbmdbXT5hbGJ1bUluZm8udmFsdWU/LnRodW1ibmFpbD8uY29sb3JzKTtcbn1cblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XG59KVxuXG5vblVwZGF0ZWQoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzZXRBbGJ1bVBhZ2UoKTtcbn0pXG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnaW5kZXgnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnIycsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5pbmRleCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgc3R5bGU6ICd3aWR0aDogMjRweCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndGl0bGUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnVElUTEUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93Lm5hbWU/Ll9kZWZhdWx0LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1oNCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnb3JpZ2luYWwnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBsYWJlbDogJ09SSUdJTkFMJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5vcmlnaW5hbCxcbiAgICAvLyBmb3JtYXQ6ICh2YWw6IE9yaWdpbmFsVHJhY2tSZWFkRHRvW10pID0+IHZhbC5tYXAoZSA9PiBlLnRpdGxlPy5lbikuam9pbignIOKUgiAnKSxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkdXJhdGlvbicsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdEVVJBVElPTicsXG4gICAgYWxpZ246ICdyaWdodCcsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmR1cmF0aW9uLFxuICAgIGZvcm1hdDogKHZhbDogc3RyaW5nKSA9PiBgJHtmb3JtYXREdXJhdGlvbih2YWwpfWAsXG4gICAgY2xhc3NlczogJ3RleHQtZ3JleS00JyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfVxuXVxuXG5sZXQgdG90YWxEdXJhdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgbGV0IGFsbER1cmF0aW9uczogc3RyaW5nW10gPSBbXVxuICBhbGJ1bUluZm8udmFsdWU/LnRyYWNrcz8uZm9yRWFjaCh0ID0+IHtcbiAgICBpZiAodC5kdXJhdGlvbikgYWxsRHVyYXRpb25zLnB1c2godC5kdXJhdGlvbilcbiAgfSk7XG4gIHJldHVybiBzdW1EdXJhdGlvbnMoYWxsRHVyYXRpb25zKTtcbn0pXG5cbmNvbnN0IHBhZ2luYXRpb24gPSB7XG4gIHJvd3NQZXJQYWdlOiAwLFxuICBkZXNjZW5kaW5nOiB0cnVlXG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1S0EsTUFBQSxjQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFDUixDQUFDOzs7O0FBeUJELFVBQU0sU0FBUztBQUNmLFVBQU0sSUFBSTtBQUNKLFVBQUEsRUFBRSxjQUFjO0FBRXRCLFVBQU0sZ0JBQWdCO0FBRXRCLFVBQU0sWUFBWSxrQkFBa0IsWUFBWSxFQUFFLGFBQWE7QUFDekQsVUFBQSxXQUFXLElBQUksU0FBUyxTQUFTO0FBQ3ZDLFVBQU0sWUFBWTtBQUNsQixVQUFNLFlBQVk7QUFFWixVQUFBLFlBQVks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QVk7QUFBQSxJQUFBLENBQ2pDO0FBRUQsVUFBTSxhQUFhO0FBQUEsTUFDakIsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

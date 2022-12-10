import { Q as QImg } from "./QImg.e59c5954.js";
import { a2 as _export_sfc, a3 as defineComponent, aA as useRouter, r as ref, b2 as AlbumApi, b3 as apiConfig, c as computed, o as onMounted, b4 as onUpdated, a5 as openBlock, a6 as createBlock, a7 as withCtx, al as createElementBlock, a9 as createBaseVNode, d as createVNode, a4 as unref, aa as toDisplayString, as as QSeparator, ad as createCommentVNode, l as QBtn, S as withDirectives, ax as QAvatar, am as createTextVNode, ae as queueController } from "./index.ec3603dc.js";
import { Q as QTooltip, c as outlinedPlayArrow, u as outlinedStarBorder, v as outlinedDescription, w as outlinedTipsAndUpdates, x as outlinedMoreHoriz } from "./index.cadde48a.js";
import { m as sumDurations, Q as QMenu, g as QList, b as QItem, a as QItemSection, f as formatDuration } from "./durationUtils.58a87b4b.js";
import { Q as QTd } from "./QTd.9b8c17b2.js";
import { Q as QTable } from "./QTable.834084e1.js";
import { Q as QPage } from "./QPage.a9b2710b.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar.b843d900.js";
const _hoisted_1 = {
  key: 0,
  class: "row full-width"
};
const _hoisted_2 = {
  class: "col-4 q-px-md",
  style: { "max-width": "230px" }
};
const _hoisted_3 = { class: "col-8" };
const _hoisted_4 = { class: "row full-width full-height items-end" };
const _hoisted_5 = { class: "col-12" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-body1" }, "Album", -1);
const _hoisted_7 = { class: "q-mb-sm-sm q-mb-none q-mt-md" };
const _hoisted_8 = { class: "col-12" };
const _hoisted_9 = { class: "row full-width" };
const _hoisted_10 = { class: "text-subtitle1 text-bold" };
const _hoisted_11 = {
  key: 0,
  class: "text-subtitle1"
};
const _hoisted_12 = { class: "text-subtitle1" };
const _hoisted_13 = { class: "text-subtitle1" };
const _hoisted_14 = { class: "col-12 q-pt-md" };
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Play");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Save");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("View Full Metadata");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("Suggest an Edit");
const _hoisted_19 = { class: "col-12 q-pt-md q-px-md" };
const __default__ = defineComponent({
  name: "AlbumPage"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const router = useRouter();
    const q = useQuasar();
    const hoveringWhich = ref();
    const albumApi = new AlbumApi(apiConfig);
    const albumInfo = ref();
    const trackList = ref();
    const songQueue = queueController;
    const getAlbumImage = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return ((_c = (_b = (_a = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.medium) == null ? void 0 : _c.url) === null ? "http://via.placeholder.com/640x360" : (_f = (_e = (_d = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _d.thumbnail) == null ? void 0 : _e.medium) == null ? void 0 : _f.url;
    });
    function viewMetadata() {
      var _a;
      router.push({ name: "albumMetadata", params: { albumId: (_a = albumInfo.value) == null ? void 0 : _a.id } });
    }
    function playAlbum() {
      var _a, _b, _c;
      (_a = trackList.value) == null ? void 0 : _a.sort((e1, e2) => {
        return e2.index - e1.index;
      });
      console.log(trackList.value);
      q.notify({
        position: "top",
        type: "secondary",
        message: `Added ${(_b = trackList.value) == null ? void 0 : _b.length} tracks to Queue`
      });
      const toadd = (_c = trackList.value) == null ? void 0 : _c.map((e) => e == null ? void 0 : e.id).reverse();
      console.log(toadd);
      songQueue.addTrackToQueueByIdBatch(toadd, true, true);
    }
    async function playTrack(trackIndex) {
      console.log(trackIndex);
      const trackIndexNum = parseInt(trackIndex);
      let trackToPlay = null;
      if (!trackList.value) {
        alert("Empty Tracklist");
        return;
      }
      for (let track of trackList.value) {
        if (track.index === trackIndexNum) {
          trackToPlay = track;
          break;
        }
      }
      if (trackToPlay === null) {
        console.log("Invalid Index. No Index: " + trackIndex + ". in track list.");
        return;
      }
      await songQueue.addTrackToQueueById(trackToPlay.id, true, true);
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
      var _a, _b, _c;
      albumInfo.value = await fetchAlbum(router.currentRoute.value.params.albumId);
      if ((_a = albumInfo.value) == null ? void 0 : _a.tracks) {
        (_b = albumInfo.value) == null ? void 0 : _b.tracks.sort((ta, tb) => {
          return ta.index - tb.index;
        });
        trackList.value = (_c = albumInfo.value) == null ? void 0 : _c.tracks;
      }
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
        style: "width: 100px",
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
        classes: "text-bold",
        sortable: false
      },
      {
        name: "original",
        required: false,
        label: "ORIGINAL",
        align: "left",
        field: (row) => row.original,
        format: (val) => val.map((e) => {
          var _a;
          return (_a = e.title) == null ? void 0 : _a._default;
        }).join(" \u2502 "),
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
        classes: "text-bold",
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
      return openBlock(), createBlock(QPage, { padding: "" }, {
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
                      createBaseVNode("div", _hoisted_10, toDisplayString(albumInfo.value.albumArtist[0].name), 1),
                      albumInfo.value.releaseDate ? (openBlock(), createBlock(QSeparator, {
                        key: 0,
                        vertical: "",
                        spaced: ""
                      })) : createCommentVNode("", true),
                      createBaseVNode("div", null, [
                        albumInfo.value.releaseDate ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString((_a = albumInfo.value.releaseDate) == null ? void 0 : _a.toLocaleDateString()), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(QSeparator, {
                        vertical: "",
                        spaced: ""
                      }),
                      createBaseVNode("div", _hoisted_12, toDisplayString(albumInfo.value.tracks.length) + " Tracks", 1),
                      createVNode(QSeparator, {
                        vertical: "",
                        spaced: ""
                      }),
                      createBaseVNode("div", _hoisted_13, toDisplayString(unref(totalDuration)), 1)
                    ])
                  ])
                ])
              ]),
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
                    })
                  ]),
                  _: 1
                }, 8, ["icon"]),
                createVNode(QBtn, {
                  fab: "",
                  flat: "",
                  class: "q-mx-md",
                  round: "",
                  icon: unref(outlinedStarBorder)
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => [
                        _hoisted_16
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
                createVNode(QTable, {
                  rows: trackList.value,
                  columns,
                  pagination,
                  separator: "none",
                  "row-key": "index",
                  flat: "",
                  "hide-bottom": "",
                  "virtual-scroll": "",
                  "hide-pagination": ""
                }, {
                  "body-cell-index": withCtx((props) => [
                    createVNode(QTd, { props }, {
                      default: withCtx(() => [
                        createVNode(QBtn, {
                          flat: "",
                          onMouseover: ($event) => hoveringWhich.value = props.value,
                          onMouseleave: _cache[0] || (_cache[0] = ($event) => hoveringWhich.value = void 0),
                          onClick: ($event) => playTrack(props.value),
                          label: hoveringWhich.value !== props.value ? props.value : void 0,
                          icon: hoveringWhich.value === props.value ? unref(outlinedPlayArrow) : void 0
                        }, null, 8, ["onMouseover", "onClick", "label", "icon"])
                      ]),
                      _: 2
                    }, 1032, ["props"])
                  ]),
                  _: 1
                }, 8, ["rows"])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLmZmMjAzYmUzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIiB2LWlmPVwiYWxidW1JbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICA6c3JjPWdldEFsYnVtSW1hZ2VcbiAgICAgICAgICByYXRpbz1cIjFcIj5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5MVwiPkFsYnVtPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJxLW1iLXNtLXNtIHEtbWItbm9uZSBxLW10LW1kXCI+e3sgYWxidW1JbmZvLmFsYnVtTmFtZS5fZGVmYXVsdCB9fTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxIHRleHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHt7IGFsYnVtSW5mby5hbGJ1bUFydGlzdFswXS5uYW1lIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQgdi1pZj1cImFsYnVtSW5mby5yZWxlYXNlRGF0ZVwiPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCIgdi1pZj1cImFsYnVtSW5mby5yZWxlYXNlRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLnJlbGVhc2VEYXRlPy50b0xvY2FsZURhdGVTdHJpbmcoKSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IGFsYnVtSW5mby50cmFja3MubGVuZ3RoIH19IFRyYWNrczwvZGl2PlxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IHRvdGFsRHVyYXRpb24gfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgIDxxLWJ0biBmYWIgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZFBsYXlBcnJvd1wiIGNvbG9yPVwiYmxhY2tcIiB0ZXh0LWNvbG9yPVwid2hpdGVcIiBAY2xpY2s9XCJwbGF5QWxidW1cIj5cbiAgICAgICAgICA8cS10b29sdGlwPlBsYXk8L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICA8cS1idG4gZmFiIGZsYXQgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZFN0YXJCb3JkZXJcIj5cbiAgICAgICAgICA8cS10b29sdGlwPlNhdmU8L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICA8cS1idG4gZmFiIGZsYXQgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZE1vcmVIb3JpelwiPlxuICAgICAgICAgIDxxLW1lbnUgZml0IGFuY2hvcj1cImNlbnRlciBtaWRkbGVcIiBzZWxmPVwidG9wIG1pZGRsZVwiPlxuICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cCBjbGFzcz1cImJnLWRhcmtcIiBAY2xpY2s9XCJ2aWV3TWV0YWRhdGFcIj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPVwib3V0bGluZWREZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VmlldyBGdWxsIE1ldGFkYXRhPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXAgY2xhc3M9XCJiZy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1cIm91dGxpbmVkVGlwc0FuZFVwZGF0ZXNcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlN1Z2dlc3QgYW4gRWRpdDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtdGFibGUgOnJvd3M9XCJ0cmFja0xpc3RcIlxuICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgcm93LWtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtaW5kZXg9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtYnRuIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XCJob3ZlcmluZ1doaWNoID0gcHJvcHMudmFsdWVcIiBAbW91c2VsZWF2ZT1cImhvdmVyaW5nV2hpY2ggPSB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicGxheVRyYWNrKHByb3BzLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJob3ZlcmluZ1doaWNoICE9PSBwcm9wcy52YWx1ZSA/IHByb3BzLnZhbHVlIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgIDppY29uPVwiaG92ZXJpbmdXaGljaCA9PT0gcHJvcHMudmFsdWUgPyBvdXRsaW5lZFBsYXlBcnJvdyA6IHVuZGVmaW5lZFwiPlxuICAgICAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgICAgPC9xLXRkPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS10YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnQWxidW1QYWdlJ1xufSlcbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRQbGF5QXJyb3csXG4gIG91dGxpbmVkTW9yZUhvcml6LFxuICBvdXRsaW5lZFN0YXJCb3JkZXIsXG4gIG91dGxpbmVkRGVzY3JpcHRpb24sXG4gIG91dGxpbmVkVGlwc0FuZFVwZGF0ZXNcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge2NvbXB1dGVkLCBvbk1vdW50ZWQsIG9uVXBkYXRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgYXBpQ29uZmlnIH0gZnJvbSAnYm9vdC9iYWNrZW5kLWFwaSc7XG5pbXBvcnQge0FsYnVtQXBpLCBPcmlnaW5hbFRyYWNrUmVhZER0b30gZnJvbSAnYXBwL211c2ljLWRhdGEtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvbXVzaWMtZGF0YS1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7IGZvcm1hdER1cmF0aW9uLCBzdW1EdXJhdGlvbnMgfSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7cXVldWVDb250cm9sbGVyfSBmcm9tICdib290L3NvbmdRdWV1ZSc7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBob3ZlcmluZ1doaWNoID0gcmVmPG51bWJlcj4oKTtcblxuY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcbmNvbnN0IGFsYnVtSW5mbyA9IHJlZjxBbGJ1bVJlYWREdG8+KCk7XG5jb25zdCB0cmFja0xpc3QgPSByZWY8VHJhY2tSZWFkRHRvW10+KCk7XG5cbmNvbnN0IHNvbmdRdWV1ZSA9IHF1ZXVlQ29udHJvbGxlcjtcblxuY29uc3QgZ2V0QWxidW1JbWFnZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGFsYnVtSW5mbz8udmFsdWU/LnRodW1ibmFpbD8ubWVkaXVtPy51cmwgPT09IG51bGwgP1xuICAgICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHgzNjAnIDogYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybFxufSlcblxuZnVuY3Rpb24gdmlld01ldGFkYXRhKCkge1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhbGJ1bU1ldGFkYXRhJywgcGFyYW1zOiB7IGFsYnVtSWQ6IGFsYnVtSW5mby52YWx1ZT8uaWQgfSB9KVxufVxuXG5mdW5jdGlvbiBwbGF5QWxidW0oKSB7XG4gIHRyYWNrTGlzdC52YWx1ZT8uc29ydCgoZTEsIGUyKSA9PiB7XG4gICAgcmV0dXJuIDxudW1iZXI+ZTIuaW5kZXggLSA8bnVtYmVyPmUxLmluZGV4O1xuICB9KTtcblxuICBjb25zb2xlLmxvZyh0cmFja0xpc3QudmFsdWUpXG5cbiAgcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiBgQWRkZWQgJHt0cmFja0xpc3QudmFsdWU/Lmxlbmd0aH0gdHJhY2tzIHRvIFF1ZXVlYFxuICB9KVxuXG4gIGNvbnN0IHRvYWRkID0gPHN0cmluZ1tdPnRyYWNrTGlzdC52YWx1ZT8ubWFwKGUgPT4gZT8uaWQpLnJldmVyc2UoKTtcbiAgY29uc29sZS5sb2codG9hZGQpO1xuICBzb25nUXVldWUuYWRkVHJhY2tUb1F1ZXVlQnlJZEJhdGNoKHRvYWRkLCB0cnVlLCB0cnVlKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGxheVRyYWNrKHRyYWNrSW5kZXg6IHN0cmluZykge1xuICBjb25zb2xlLmxvZyh0cmFja0luZGV4KTtcbiAgY29uc3QgdHJhY2tJbmRleE51bSA9IHBhcnNlSW50KHRyYWNrSW5kZXgpO1xuXG4gIGxldCB0cmFja1RvUGxheSA9IG51bGw7XG4gIGlmICghdHJhY2tMaXN0LnZhbHVlKSB7XG4gICAgYWxlcnQoJ0VtcHR5IFRyYWNrbGlzdCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZvciAobGV0IHRyYWNrIG9mIHRyYWNrTGlzdC52YWx1ZSkge1xuICAgIGlmICh0cmFjay5pbmRleCA9PT0gdHJhY2tJbmRleE51bSkge1xuICAgICAgdHJhY2tUb1BsYXkgPSB0cmFjaztcbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHRyYWNrVG9QbGF5ID09PSBudWxsKSB7XG4gICAgY29uc29sZS5sb2coJ0ludmFsaWQgSW5kZXguIE5vIEluZGV4OiAnICsgdHJhY2tJbmRleCArICcuIGluIHRyYWNrIGxpc3QuJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYXdhaXQgc29uZ1F1ZXVlLmFkZFRyYWNrVG9RdWV1ZUJ5SWQoPHN0cmluZz4gdHJhY2tUb1BsYXkuaWQsIHRydWUsIHRydWUpO1xuICBxLm5vdGlmeSh7XG4gICAgcG9zaXRpb246ICd0b3AnLFxuICAgIHR5cGU6ICdzZWNvbmRhcnknLFxuICAgIG1lc3NhZ2U6ICdBZGRlZCB0byBRdWV1ZSdcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQWxidW0oYWxidW1JZDogc3RyaW5nKTogUHJvbWlzZTxBbGJ1bVJlYWREdG8+IHtcbiAgcmV0dXJuIGFsYnVtQXBpLmdldEFsYnVtKHtpZDogYWxidW1JZH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRBbGJ1bVBhZ2UoKSB7XG4gIGFsYnVtSW5mby52YWx1ZSA9IGF3YWl0IGZldGNoQWxidW0oPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hbGJ1bUlkKTtcbiAgaWYgKGFsYnVtSW5mby52YWx1ZT8udHJhY2tzKSB7XG4gICAgYWxidW1JbmZvLnZhbHVlPy50cmFja3Muc29ydCgodGEsIHRiKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgcmV0dXJuIHRhLmluZGV4ISAtIHRiLmluZGV4IVxuICAgIH0pXG4gICAgdHJhY2tMaXN0LnZhbHVlID0gYWxidW1JbmZvLnZhbHVlPy50cmFja3M7XG4gIH1cbn1cblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XG59KVxuXG5vblVwZGF0ZWQoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzZXRBbGJ1bVBhZ2UoKTtcbn0pXG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnaW5kZXgnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnIycsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5pbmRleCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgc3R5bGU6ICd3aWR0aDogMTAwcHgnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ1RJVExFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5uYW1lPy5fZGVmYXVsdCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnb3JpZ2luYWwnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBsYWJlbDogJ09SSUdJTkFMJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5vcmlnaW5hbCxcbiAgICBmb3JtYXQ6ICh2YWw6IE9yaWdpbmFsVHJhY2tSZWFkRHRvW10pID0+IHZhbC5tYXAoZSA9PiBlLnRpdGxlPy5fZGVmYXVsdCkuam9pbignIOKUgiAnKSxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdkdXJhdGlvbicsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdEVVJBVElPTicsXG4gICAgYWxpZ246ICdyaWdodCcsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmR1cmF0aW9uLFxuICAgIGZvcm1hdDogKHZhbDogc3RyaW5nKSA9PiBgJHtmb3JtYXREdXJhdGlvbih2YWwpfWAsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH1cbl1cblxubGV0IHRvdGFsRHVyYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gIGxldCBhbGxEdXJhdGlvbnM6IHN0cmluZ1tdID0gW11cbiAgYWxidW1JbmZvLnZhbHVlPy50cmFja3M/LmZvckVhY2godCA9PiB7XG4gICAgaWYgKHQuZHVyYXRpb24pIGFsbER1cmF0aW9ucy5wdXNoKHQuZHVyYXRpb24pXG4gIH0pO1xuICByZXR1cm4gc3VtRHVyYXRpb25zKGFsbER1cmF0aW9ucyk7XG59KVxuXG5jb25zdCBwYWdpbmF0aW9uID0ge1xuICByb3dzUGVy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UUFDVixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPLENBQUMsUUFBc0IsSUFBSTtBQUFBLFFBQ2xDLFFBQVEsQ0FBQyxRQUFnQixHQUFHO0FBQUEsUUFDNUIsT0FBTztBQUFBLFFBQ1AsVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPLENBQUM7O0FBQXNCLDJCQUFJLFNBQUosbUJBQVU7QUFBQTtBQUFBLFFBQ3hDLFFBQVEsQ0FBQyxRQUFnQixHQUFHO0FBQUEsUUFDNUIsU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPLENBQUMsUUFBc0IsSUFBSTtBQUFBLFFBQ2xDLFFBQVEsQ0FBQyxRQUFnQyxJQUFJLElBQUksQ0FBSzs7QUFBQSx5QkFBRSxVQUFGLG1CQUFTO0FBQUEsU0FBUSxFQUFFLEtBQUssVUFBSztBQUFBLFFBQ25GLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDLFFBQXNCLElBQUk7QUFBQSxRQUNsQyxRQUFRLENBQUMsUUFBZ0IsR0FBRyxlQUFlLEdBQUc7QUFBQSxRQUM5QyxTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsTUFDWjtBQUFBLElBQUE7QUFHRSxRQUFBLGdCQUFnQixTQUFTLE1BQU07O0FBQ2pDLFVBQUksZUFBeUIsQ0FBQTtBQUNuQiw0QkFBQSxVQUFBLG1CQUFPLFdBQVAsbUJBQWUsUUFBUSxDQUFLLE1BQUE7QUFDcEMsWUFBSSxFQUFFO0FBQXVCLHVCQUFBLEtBQUssRUFBRSxRQUFRO0FBQUEsTUFBQTtBQUU5QyxhQUFPLGFBQWEsWUFBWTtBQUFBLElBQUEsQ0FDakM7QUFFRCxVQUFNLGFBQWE7QUFBQSxNQUNqQixhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

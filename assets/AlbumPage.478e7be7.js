import { Q as QImg } from "./QImg.276e5a6d.js";
import { a2 as _export_sfc, a3 as defineComponent, aA as useRouter, r as ref, b2 as AlbumApi, b3 as apiConfig, c as computed, o as onMounted, b4 as onUpdated, a5 as openBlock, a6 as createBlock, a7 as withCtx, al as createElementBlock, a9 as createBaseVNode, d as createVNode, a4 as unref, aa as toDisplayString, as as QSeparator, ad as createCommentVNode, l as QBtn, S as withDirectives, ax as QAvatar, am as createTextVNode, ae as queueController } from "./index.e1084ec4.js";
import { Q as QTooltip, c as outlinedPlayArrow, u as outlinedStarBorder, v as outlinedDescription, w as outlinedTipsAndUpdates, x as outlinedMoreHoriz } from "./index.aac9142d.js";
import { m as sumDurations, Q as QMenu, g as QList, b as QItem, a as QItemSection, f as formatDuration } from "./durationUtils.f4258b37.js";
import { Q as QTd } from "./QTd.b1ed1303.js";
import { Q as QTable } from "./QTable.0cb1beac.js";
import { Q as QPage } from "./QPage.f56883a0.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar.44e6a30b.js";
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
    async function playTrack(trackId) {
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
        console.log("Invalid Index. No Index: " + trackId + ". in track list.");
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
                  "row-key": "id",
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
                          onMouseover: ($event) => hoveringWhich.value = props.key,
                          onMouseleave: _cache[0] || (_cache[0] = ($event) => hoveringWhich.value = void 0),
                          onClick: ($event) => playTrack(props.key),
                          label: hoveringWhich.value !== props.key ? props.value : void 0,
                          icon: hoveringWhich.value === props.key ? unref(outlinedPlayArrow) : void 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLjQ3OGU3YmU3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIiB2LWlmPVwiYWxidW1JbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICA6c3JjPWdldEFsYnVtSW1hZ2VcbiAgICAgICAgICByYXRpbz1cIjFcIj5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5MVwiPkFsYnVtPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJxLW1iLXNtLXNtIHEtbWItbm9uZSBxLW10LW1kXCI+e3sgYWxidW1JbmZvLmFsYnVtTmFtZS5fZGVmYXVsdCB9fTwvaDM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxIHRleHQtYm9sZFwiPlxuICAgICAgICAgICAgICAgIHt7IGFsYnVtSW5mby5hbGJ1bUFydGlzdFswXS5uYW1lIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQgdi1pZj1cImFsYnVtSW5mby5yZWxlYXNlRGF0ZVwiPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCIgdi1pZj1cImFsYnVtSW5mby5yZWxlYXNlRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLnJlbGVhc2VEYXRlPy50b0xvY2FsZURhdGVTdHJpbmcoKSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IGFsYnVtSW5mby50cmFja3MubGVuZ3RoIH19IFRyYWNrczwvZGl2PlxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IHRvdGFsRHVyYXRpb24gfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgIDxxLWJ0biBmYWIgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZFBsYXlBcnJvd1wiIGNvbG9yPVwiYmxhY2tcIiB0ZXh0LWNvbG9yPVwid2hpdGVcIiBAY2xpY2s9XCJwbGF5QWxidW1cIj5cbiAgICAgICAgICA8cS10b29sdGlwPlBsYXk8L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICA8cS1idG4gZmFiIGZsYXQgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZFN0YXJCb3JkZXJcIj5cbiAgICAgICAgICA8cS10b29sdGlwPlNhdmU8L3EtdG9vbHRpcD5cbiAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICA8cS1idG4gZmFiIGZsYXQgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZE1vcmVIb3JpelwiPlxuICAgICAgICAgIDxxLW1lbnUgZml0IGFuY2hvcj1cImNlbnRlciBtaWRkbGVcIiBzZWxmPVwidG9wIG1pZGRsZVwiPlxuICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cCBjbGFzcz1cImJnLWRhcmtcIiBAY2xpY2s9XCJ2aWV3TWV0YWRhdGFcIj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPVwib3V0bGluZWREZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+VmlldyBGdWxsIE1ldGFkYXRhPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXAgY2xhc3M9XCJiZy1kYXJrXCI+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1cIm91dGxpbmVkVGlwc0FuZFVwZGF0ZXNcIiAvPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlN1Z2dlc3QgYW4gRWRpdDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtdGFibGUgOnJvd3M9XCJ0cmFja0xpc3RcIlxuICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxuICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgcm93LWtleT1cImlkXCJcbiAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtaW5kZXg9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtYnRuIGZsYXRcbiAgICAgICAgICAgICAgICAgICAgIEBtb3VzZW92ZXI9XCJob3ZlcmluZ1doaWNoID0gcHJvcHMua2V5XCIgQG1vdXNlbGVhdmU9XCJob3ZlcmluZ1doaWNoID0gdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBsYXlUcmFjayhwcm9wcy5rZXkpXCJcbiAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImhvdmVyaW5nV2hpY2ggIT09IHByb3BzLmtleSA/IHByb3BzLnZhbHVlIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgIDppY29uPVwiaG92ZXJpbmdXaGljaCA9PT0gcHJvcHMua2V5ID8gb3V0bGluZWRQbGF5QXJyb3cgOiB1bmRlZmluZWRcIj5cbiAgICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0FsYnVtUGFnZSdcbn0pXG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheUFycm93LFxuICBvdXRsaW5lZE1vcmVIb3JpeixcbiAgb3V0bGluZWRTdGFyQm9yZGVyLFxuICBvdXRsaW5lZERlc2NyaXB0aW9uLFxuICBvdXRsaW5lZFRpcHNBbmRVcGRhdGVzXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcblxuaW1wb3J0IHtjb21wdXRlZCwgb25Nb3VudGVkLCBvblVwZGF0ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7IGFwaUNvbmZpZyB9IGZyb20gJ2Jvb3QvYmFja2VuZC1hcGknO1xuaW1wb3J0IHtBbGJ1bUFwaSwgT3JpZ2luYWxUcmFja1JlYWREdG99IGZyb20gJ2FwcC9tdXNpYy1kYXRhLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvIH0gZnJvbSAnYXBwL211c2ljLWRhdGEtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBmb3JtYXREdXJhdGlvbiwgc3VtRHVyYXRpb25zIH0gZnJvbSAnc3JjL3V0aWxzL2R1cmF0aW9uVXRpbHMnO1xuaW1wb3J0IHt1c2VRdWFzYXJ9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQge3F1ZXVlQ29udHJvbGxlcn0gZnJvbSAnYm9vdC9zb25nUXVldWUnO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHEgPSB1c2VRdWFzYXIoKTtcblxuY29uc3QgaG92ZXJpbmdXaGljaCA9IHJlZjxudW1iZXI+KCk7XG5cbmNvbnN0IGFsYnVtQXBpID0gbmV3IEFsYnVtQXBpKGFwaUNvbmZpZyk7XG5jb25zdCBhbGJ1bUluZm8gPSByZWY8QWxidW1SZWFkRHRvPigpO1xuY29uc3QgdHJhY2tMaXN0ID0gcmVmPFRyYWNrUmVhZER0b1tdPigpO1xuXG5jb25zdCBzb25nUXVldWUgPSBxdWV1ZUNvbnRyb2xsZXI7XG5cbmNvbnN0IGdldEFsYnVtSW1hZ2UgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBhbGJ1bUluZm8/LnZhbHVlPy50aHVtYm5haWw/Lm1lZGl1bT8udXJsID09PSBudWxsID9cbiAgICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4MzYwJyA6IGFsYnVtSW5mbz8udmFsdWU/LnRodW1ibmFpbD8ubWVkaXVtPy51cmxcbn0pXG5cbmZ1bmN0aW9uIHZpZXdNZXRhZGF0YSgpIHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAnYWxidW1NZXRhZGF0YScsIHBhcmFtczogeyBhbGJ1bUlkOiBhbGJ1bUluZm8udmFsdWU/LmlkIH0gfSlcbn1cblxuZnVuY3Rpb24gcGxheUFsYnVtKCkge1xuICB0cmFja0xpc3QudmFsdWU/LnNvcnQoKGUxLCBlMikgPT4ge1xuICAgIHJldHVybiA8bnVtYmVyPmUyLmluZGV4IC0gPG51bWJlcj5lMS5pbmRleDtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2codHJhY2tMaXN0LnZhbHVlKVxuXG4gIHEubm90aWZ5KHtcbiAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgdHlwZTogJ3NlY29uZGFyeScsXG4gICAgbWVzc2FnZTogYEFkZGVkICR7dHJhY2tMaXN0LnZhbHVlPy5sZW5ndGh9IHRyYWNrcyB0byBRdWV1ZWBcbiAgfSlcblxuICBjb25zdCB0b2FkZCA9IDxzdHJpbmdbXT50cmFja0xpc3QudmFsdWU/Lm1hcChlID0+IGU/LmlkKS5yZXZlcnNlKCk7XG4gIGNvbnNvbGUubG9nKHRvYWRkKTtcbiAgc29uZ1F1ZXVlLmFkZFRyYWNrVG9RdWV1ZUJ5SWRCYXRjaCh0b2FkZCwgdHJ1ZSwgdHJ1ZSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHBsYXlUcmFjayh0cmFja0lkOiBzdHJpbmcpIHtcbiAgbGV0IHRyYWNrVG9QbGF5ID0gbnVsbDtcbiAgaWYgKCF0cmFja0xpc3QudmFsdWUpIHtcbiAgICBhbGVydCgnRW1wdHkgVHJhY2tsaXN0Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yIChsZXQgdHJhY2sgb2YgdHJhY2tMaXN0LnZhbHVlKSB7XG4gICAgaWYgKHRyYWNrLmlkID09IHRyYWNrSWQpIHtcbiAgICAgIHRyYWNrVG9QbGF5ID0gdHJhY2s7XG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh0cmFja1RvUGxheSA9PT0gbnVsbCkge1xuICAgIGNvbnNvbGUubG9nKCdJbnZhbGlkIEluZGV4LiBObyBJbmRleDogJyArIHRyYWNrSWQgKyAnLiBpbiB0cmFjayBsaXN0LicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGF3YWl0IHNvbmdRdWV1ZS5hZGRUcmFja1RvUXVldWVCeUlkKDxzdHJpbmc+IHRyYWNrVG9QbGF5LmlkLCB0cnVlLCB0cnVlKTtcbiAgcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiAnQWRkZWQgdG8gUXVldWUnXG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFsYnVtKGFsYnVtSWQ6IHN0cmluZyk6IFByb21pc2U8QWxidW1SZWFkRHRvPiB7XG4gIHJldHVybiBhbGJ1bUFwaS5nZXRBbGJ1bSh7aWQ6IGFsYnVtSWR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0QWxidW1QYWdlKCkge1xuICBhbGJ1bUluZm8udmFsdWUgPSBhd2FpdCBmZXRjaEFsYnVtKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuYWxidW1JZCk7XG4gIGlmIChhbGJ1bUluZm8udmFsdWU/LnRyYWNrcykge1xuICAgIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzLnNvcnQoKHRhLCB0YikgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgIHJldHVybiB0YS5pbmRleCEgLSB0Yi5pbmRleCFcbiAgICB9KVxuICAgIHRyYWNrTGlzdC52YWx1ZSA9IGFsYnVtSW5mby52YWx1ZT8udHJhY2tzO1xuICB9XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHNldEFsYnVtUGFnZSgpO1xufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XG59KVxuXG5jb25zdCBjb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2luZGV4JyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJyMnLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuaW5kZXgsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIHN0eWxlOiAnd2lkdGg6IDEwMHB4JyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0aXRsZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdUSVRMRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cubmFtZT8uX2RlZmF1bHQsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ29yaWdpbmFsJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgbGFiZWw6ICdPUklHSU5BTCcsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cub3JpZ2luYWwsXG4gICAgZm9ybWF0OiAodmFsOiBPcmlnaW5hbFRyYWNrUmVhZER0b1tdKSA9PiB2YWwubWFwKGUgPT4gZS50aXRsZT8uX2RlZmF1bHQpLmpvaW4oJyDilIIgJyksXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5kdXJhdGlvbixcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7Zm9ybWF0RHVyYXRpb24odmFsKX1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9XG5dXG5cbmxldCB0b3RhbER1cmF0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICBsZXQgYWxsRHVyYXRpb25zOiBzdHJpbmdbXSA9IFtdXG4gIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzPy5mb3JFYWNoKHQgPT4ge1xuICAgIGlmICh0LmR1cmF0aW9uKSBhbGxEdXJhdGlvbnMucHVzaCh0LmR1cmF0aW9uKVxuICB9KTtcbiAgcmV0dXJuIHN1bUR1cmF0aW9ucyhhbGxEdXJhdGlvbnMpO1xufSlcblxuY29uc3QgcGFnaW5hdGlvbiA9IHtcbiAgcm93c1BlclBhZ2U6IDAsXG4gIGRlc2NlbmRpbmc6IHRydWVcbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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

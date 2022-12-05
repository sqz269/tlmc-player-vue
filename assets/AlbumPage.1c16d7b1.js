import { Q as QImg } from "./QImg.f6fff003.js";
import { a2 as _export_sfc, a3 as defineComponent, aA as useRouter, r as ref, b2 as AlbumApi, b3 as apiConfig, c as computed, o as onMounted, b4 as onUpdated, a5 as openBlock, a6 as createBlock, a7 as withCtx, al as createElementBlock, a9 as createBaseVNode, d as createVNode, a4 as unref, aa as toDisplayString, as as QSeparator, ad as createCommentVNode, l as QBtn, S as withDirectives, ax as QAvatar, am as createTextVNode, ae as queueController } from "./index.8aadcb4c.js";
import { Q as QTooltip, c as outlinedPlayArrow, u as outlinedStarBorder, v as outlinedDescription, w as outlinedTipsAndUpdates, x as outlinedMoreHoriz } from "./index.d3efcba3.js";
import { m as sumDurations, Q as QMenu, g as QList, b as QItem, a as QItemSection, f as formatDuration } from "./durationUtils.3313ee32.js";
import { Q as QTd } from "./QTd.e826f2ef.js";
import { Q as QTable } from "./QTable.22da09a5.js";
import { Q as QPage } from "./QPage.2c100235.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar.84429823.js";
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
      var _a, _b, _c, _d;
      return ((_b = (_a = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _a.albumImage) == null ? void 0 : _b.url) === null ? "http://via.placeholder.com/640x360" : (_d = (_c = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _c.albumImage) == null ? void 0 : _d.url;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLjFjMTZkN2IxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1QYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPHEtcGFnZSBwYWRkaW5nPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCIgdi1pZj1cImFsYnVtSW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxyXG4gICAgICAgIDxxLWltZ1xyXG4gICAgICAgICAgOnNyYz1nZXRBbGJ1bUltYWdlXHJcbiAgICAgICAgICByYXRpbz1cIjFcIj5cclxuICAgICAgICA8L3EtaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5MVwiPkFsYnVtPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInEtbWItc20tc20gcS1tYi1ub25lIHEtbXQtbWRcIj57eyBhbGJ1bUluZm8uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxIHRleHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCIgdi1pZj1cImFsYnVtSW5mby5yZWxlYXNlRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZD48L3Etc2VwYXJhdG9yPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IGFsYnVtSW5mby50cmFja3MubGVuZ3RoIH19IFRyYWNrczwvZGl2PlxyXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyB0b3RhbER1cmF0aW9uIH19PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj5cclxuICAgICAgICA8cS1idG4gZmFiIGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIDppY29uPVwib3V0bGluZWRQbGF5QXJyb3dcIiBjb2xvcj1cImJsYWNrXCIgdGV4dC1jb2xvcj1cIndoaXRlXCIgQGNsaWNrPVwicGxheUFsYnVtXCI+XHJcbiAgICAgICAgICA8cS10b29sdGlwPlBsYXk8L3EtdG9vbHRpcD5cclxuICAgICAgICA8L3EtYnRuPlxyXG5cclxuICAgICAgICA8cS1idG4gZmFiIGZsYXQgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZFN0YXJCb3JkZXJcIj5cclxuICAgICAgICAgIDxxLXRvb2x0aXA+U2F2ZTwvcS10b29sdGlwPlxyXG4gICAgICAgIDwvcS1idG4+XHJcblxyXG4gICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCI+XHJcbiAgICAgICAgICA8cS1tZW51IGZpdCBhbmNob3I9XCJjZW50ZXIgbWlkZGxlXCIgc2VsZj1cInRvcCBtaWRkbGVcIj5cclxuICAgICAgICAgICAgPHEtbGlzdD5cclxuICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwIGNsYXNzPVwiYmctZGFya1wiIEBjbGljaz1cInZpZXdNZXRhZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cclxuICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPVwib3V0bGluZWREZXNjcmlwdGlvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlZpZXcgRnVsbCBNZXRhZGF0YTwvcS1pdGVtLXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgPC9xLWl0ZW0+XHJcbiAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cCBjbGFzcz1cImJnLWRhcmtcIj5cclxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1cIm91dGxpbmVkVGlwc0FuZFVwZGF0ZXNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5TdWdnZXN0IGFuIEVkaXQ8L3EtaXRlbS1zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxyXG4gICAgICAgICAgICA8L3EtbGlzdD5cclxuICAgICAgICAgIDwvcS1tZW51PlxyXG4gICAgICAgIDwvcS1idG4+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kIHEtcHgtbWRcIj5cclxuICAgICAgICA8cS10YWJsZSA6cm93cz1cInRyYWNrTGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcclxuICAgICAgICAgICAgICAgICA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgIHNlcGFyYXRvcj1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgIHJvdy1rZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgZmxhdFxyXG4gICAgICAgICAgICAgICAgIGhpZGUtYm90dG9tXHJcbiAgICAgICAgICAgICAgICAgdmlydHVhbC1zY3JvbGxcclxuICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XHJcbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD1cInByb3BzXCI+XHJcbiAgICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XHJcbiAgICAgICAgICAgICAgPHEtYnRuIGZsYXRcclxuICAgICAgICAgICAgICAgICAgICAgQG1vdXNlb3Zlcj1cImhvdmVyaW5nV2hpY2ggPSBwcm9wcy52YWx1ZVwiIEBtb3VzZWxlYXZlPVwiaG92ZXJpbmdXaGljaCA9IHVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBsYXlUcmFjayhwcm9wcy52YWx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJob3ZlcmluZ1doaWNoICE9PSBwcm9wcy52YWx1ZSA/IHByb3BzLnZhbHVlIDogdW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgOmljb249XCJob3ZlcmluZ1doaWNoID09PSBwcm9wcy52YWx1ZSA/IG91dGxpbmVkUGxheUFycm93IDogdW5kZWZpbmVkXCI+XHJcbiAgICAgICAgICAgICAgPC9xLWJ0bj5cclxuICAgICAgICAgICAgPC9xLXRkPlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3EtdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9xLXBhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgbmFtZTogJ0FsYnVtUGFnZSdcclxufSlcclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQge1xyXG4gIG91dGxpbmVkUGxheUFycm93LFxyXG4gIG91dGxpbmVkTW9yZUhvcml6LFxyXG4gIG91dGxpbmVkU3RhckJvcmRlcixcclxuICBvdXRsaW5lZERlc2NyaXB0aW9uLFxyXG4gIG91dGxpbmVkVGlwc0FuZFVwZGF0ZXNcclxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XHJcblxyXG5pbXBvcnQge2NvbXB1dGVkLCBvbk1vdW50ZWQsIG9uVXBkYXRlZCwgcmVmfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBhcGlDb25maWcgfSBmcm9tICdib290L2JhY2tlbmQtYXBpJztcclxuaW1wb3J0IHtBbGJ1bUFwaSwgT3JpZ2luYWxUcmFja1JlYWREdG99IGZyb20gJ2FwcC9tdXNpYy1kYXRhLXNlcnZpY2UtYXBpJztcclxuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvbXVzaWMtZGF0YS1zZXJ2aWNlLWFwaSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBmb3JtYXREdXJhdGlvbiwgc3VtRHVyYXRpb25zIH0gZnJvbSAnc3JjL3V0aWxzL2R1cmF0aW9uVXRpbHMnO1xyXG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSAncXVhc2FyJztcclxuaW1wb3J0IHtxdWV1ZUNvbnRyb2xsZXJ9IGZyb20gJ2Jvb3Qvc29uZ1F1ZXVlJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5jb25zdCBxID0gdXNlUXVhc2FyKCk7XHJcblxyXG5jb25zdCBob3ZlcmluZ1doaWNoID0gcmVmPG51bWJlcj4oKTtcclxuXHJcbmNvbnN0IGFsYnVtQXBpID0gbmV3IEFsYnVtQXBpKGFwaUNvbmZpZyk7XHJcbmNvbnN0IGFsYnVtSW5mbyA9IHJlZjxBbGJ1bVJlYWREdG8+KCk7XHJcbmNvbnN0IHRyYWNrTGlzdCA9IHJlZjxUcmFja1JlYWREdG9bXT4oKTtcclxuXHJcbmNvbnN0IHNvbmdRdWV1ZSA9IHF1ZXVlQ29udHJvbGxlcjtcclxuXHJcbmNvbnN0IGdldEFsYnVtSW1hZ2UgPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgcmV0dXJuIGFsYnVtSW5mbz8udmFsdWU/LmFsYnVtSW1hZ2U/LnVybCA9PT0gbnVsbCA/XHJcbiAgICAgICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4MzYwJyA6IGFsYnVtSW5mbz8udmFsdWU/LmFsYnVtSW1hZ2U/LnVybFxyXG59KVxyXG5cclxuZnVuY3Rpb24gdmlld01ldGFkYXRhKCkge1xyXG4gIHJvdXRlci5wdXNoKHsgbmFtZTogJ2FsYnVtTWV0YWRhdGEnLCBwYXJhbXM6IHsgYWxidW1JZDogYWxidW1JbmZvLnZhbHVlPy5pZCB9IH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYXlBbGJ1bSgpIHtcclxuICB0cmFja0xpc3QudmFsdWU/LnNvcnQoKGUxLCBlMikgPT4ge1xyXG4gICAgcmV0dXJuIDxudW1iZXI+ZTIuaW5kZXggLSA8bnVtYmVyPmUxLmluZGV4O1xyXG4gIH0pO1xyXG5cclxuICBjb25zb2xlLmxvZyh0cmFja0xpc3QudmFsdWUpXHJcblxyXG4gIHEubm90aWZ5KHtcclxuICAgIHBvc2l0aW9uOiAndG9wJyxcclxuICAgIHR5cGU6ICdzZWNvbmRhcnknLFxyXG4gICAgbWVzc2FnZTogYEFkZGVkICR7dHJhY2tMaXN0LnZhbHVlPy5sZW5ndGh9IHRyYWNrcyB0byBRdWV1ZWBcclxuICB9KVxyXG5cclxuICBjb25zdCB0b2FkZCA9IDxzdHJpbmdbXT50cmFja0xpc3QudmFsdWU/Lm1hcChlID0+IGU/LmlkKS5yZXZlcnNlKCk7XHJcbiAgY29uc29sZS5sb2codG9hZGQpO1xyXG4gIHNvbmdRdWV1ZS5hZGRUcmFja1RvUXVldWVCeUlkQmF0Y2godG9hZGQsIHRydWUsIHRydWUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwbGF5VHJhY2sodHJhY2tJbmRleDogc3RyaW5nKSB7XHJcbiAgY29uc29sZS5sb2codHJhY2tJbmRleCk7XHJcbiAgY29uc3QgdHJhY2tJbmRleE51bSA9IHBhcnNlSW50KHRyYWNrSW5kZXgpO1xyXG5cclxuICBsZXQgdHJhY2tUb1BsYXkgPSBudWxsO1xyXG4gIGlmICghdHJhY2tMaXN0LnZhbHVlKSB7XHJcbiAgICBhbGVydCgnRW1wdHkgVHJhY2tsaXN0Jyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCB0cmFjayBvZiB0cmFja0xpc3QudmFsdWUpIHtcclxuICAgIGlmICh0cmFjay5pbmRleCA9PT0gdHJhY2tJbmRleE51bSkge1xyXG4gICAgICB0cmFja1RvUGxheSA9IHRyYWNrO1xyXG4gICAgICBicmVha1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKHRyYWNrVG9QbGF5ID09PSBudWxsKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSW52YWxpZCBJbmRleC4gTm8gSW5kZXg6ICcgKyB0cmFja0luZGV4ICsgJy4gaW4gdHJhY2sgbGlzdC4nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGF3YWl0IHNvbmdRdWV1ZS5hZGRUcmFja1RvUXVldWVCeUlkKDxzdHJpbmc+IHRyYWNrVG9QbGF5LmlkLCB0cnVlLCB0cnVlKTtcclxuICBxLm5vdGlmeSh7XHJcbiAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcclxuICAgIG1lc3NhZ2U6ICdBZGRlZCB0byBRdWV1ZSdcclxuICB9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGJ1bShhbGJ1bUlkOiBzdHJpbmcpOiBQcm9taXNlPEFsYnVtUmVhZER0bz4ge1xyXG4gIHJldHVybiBhbGJ1bUFwaS5nZXRBbGJ1bSh7aWQ6IGFsYnVtSWR9KTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2V0QWxidW1QYWdlKCkge1xyXG4gIGFsYnVtSW5mby52YWx1ZSA9IGF3YWl0IGZldGNoQWxidW0oPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hbGJ1bUlkKTtcclxuICBpZiAoYWxidW1JbmZvLnZhbHVlPy50cmFja3MpIHtcclxuICAgIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzLnNvcnQoKHRhLCB0YikgPT4ge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxyXG4gICAgICByZXR1cm4gdGEuaW5kZXghIC0gdGIuaW5kZXghXHJcbiAgICB9KVxyXG4gICAgdHJhY2tMaXN0LnZhbHVlID0gYWxidW1JbmZvLnZhbHVlPy50cmFja3M7XHJcbiAgfVxyXG59XHJcblxyXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IHNldEFsYnVtUGFnZSgpO1xyXG59KVxyXG5cclxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBzZXRBbGJ1bVBhZ2UoKTtcclxufSlcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ2luZGV4JyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbGFiZWw6ICcjJyxcclxuICAgIGFsaWduOiAnY2VudGVyJyxcclxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5pbmRleCxcclxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcclxuICAgIHN0eWxlOiAnd2lkdGg6IDEwMHB4JyxcclxuICAgIHNvcnRhYmxlOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ3RpdGxlJyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbGFiZWw6ICdUSVRMRScsXHJcbiAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93Lm5hbWU/Ll9kZWZhdWx0LFxyXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxyXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXHJcbiAgICBzb3J0YWJsZTogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdvcmlnaW5hbCcsXHJcbiAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICBsYWJlbDogJ09SSUdJTkFMJyxcclxuICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cub3JpZ2luYWwsXHJcbiAgICBmb3JtYXQ6ICh2YWw6IE9yaWdpbmFsVHJhY2tSZWFkRHRvW10pID0+IHZhbC5tYXAoZSA9PiBlLnRpdGxlPy5fZGVmYXVsdCkuam9pbignIOKUgiAnKSxcclxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxyXG4gICAgc29ydGFibGU6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBsYWJlbDogJ0RVUkFUSU9OJyxcclxuICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmR1cmF0aW9uLFxyXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+IGAke2Zvcm1hdER1cmF0aW9uKHZhbCl9YCxcclxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxyXG4gICAgc29ydGFibGU6IGZhbHNlXHJcbiAgfVxyXG5dXHJcblxyXG5sZXQgdG90YWxEdXJhdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcclxuICBsZXQgYWxsRHVyYXRpb25zOiBzdHJpbmdbXSA9IFtdXHJcbiAgYWxidW1JbmZvLnZhbHVlPy50cmFja3M/LmZvckVhY2godCA9PiB7XHJcbiAgICBpZiAodC5kdXJhdGlvbikgYWxsRHVyYXRpb25zLnB1c2godC5kdXJhdGlvbilcclxuICB9KTtcclxuICByZXR1cm4gc3VtRHVyYXRpb25zKGFsbER1cmF0aW9ucyk7XHJcbn0pXHJcblxyXG5jb25zdCBwYWdpbmF0aW9uID0ge1xyXG4gIHJvd3NQZXJQYWdlOiAwLFxyXG4gIGRlc2NlbmRpbmc6IHRydWVcclxufVxyXG48L3NjcmlwdD5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThGQSxNQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUNSLENBQUM7Ozs7QUFxQkQsVUFBTSxTQUFTO0FBQ2YsVUFBTSxJQUFJO0FBRVYsVUFBTSxnQkFBZ0I7QUFFaEIsVUFBQSxXQUFXLElBQUksU0FBUyxTQUFTO0FBQ3ZDLFVBQU0sWUFBWTtBQUNsQixVQUFNLFlBQVk7QUFFbEIsVUFBTSxZQUFZO0FBRVosVUFBQSxnQkFBZ0IsU0FBUyxNQUFNOztBQUM1QixlQUFBLGtEQUFXLFVBQVgsbUJBQWtCLGVBQWxCLG1CQUE4QixTQUFRLE9BQ3pDLHdDQUF1QyxrREFBVyxVQUFYLG1CQUFrQixlQUFsQixtQkFBOEI7QUFBQSxJQUFBLENBQzFFO0FBRUQsYUFBUyxlQUFlOztBQUNmLGFBQUEsS0FBSyxFQUFFLE1BQU0saUJBQWlCLFFBQVEsRUFBRSxVQUFTLGVBQVUsVUFBVixtQkFBaUIsR0FBRyxFQUFHLENBQUE7QUFBQSxJQUNqRjtBQUVBLGFBQVMsWUFBWTs7QUFDbkIsc0JBQVUsVUFBVixtQkFBaUIsS0FBSyxDQUFDLElBQUksT0FBTztBQUNqQixlQUFBLEdBQUcsUUFBZ0IsR0FBRztBQUFBLE1BQUE7QUFHL0IsY0FBQSxJQUFJLFVBQVUsS0FBSztBQUUzQixRQUFFLE9BQU87QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLE1BQU07QUFBQSxRQUNOLFNBQVMsVUFBUyxlQUFVLFVBQVYsbUJBQWlCO0FBQUEsTUFBQSxDQUNwQztBQUVLLFlBQUEsU0FBa0IsZUFBVSxVQUFWLG1CQUFpQixJQUFJLE9BQUssdUJBQUcsSUFBSTtBQUN6RCxjQUFRLElBQUksS0FBSztBQUNQLGdCQUFBLHlCQUF5QixPQUFPLE1BQU0sSUFBSTtBQUFBLElBQ3REO0FBRUEsbUJBQWUsVUFBVSxZQUFvQjtBQUMzQyxjQUFRLElBQUksVUFBVTtBQUNoQixZQUFBLGdCQUFnQixTQUFTLFVBQVU7QUFFekMsVUFBSSxjQUFjO0FBQ2QsVUFBQSxDQUFDLFVBQVUsT0FBTztBQUNwQixjQUFNLGlCQUFpQjtBQUN2QjtBQUFBLE1BQ0Y7QUFFUyxlQUFBLFNBQVMsVUFBVSxPQUFPO0FBQzdCLFlBQUEsTUFBTSxVQUFVLGVBQWU7QUFDbkIsd0JBQUE7QUFDZDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBRUEsVUFBSSxnQkFBZ0IsTUFBTTtBQUNoQixnQkFBQSxJQUFJLDhCQUE4QixhQUFhLGtCQUFrQjtBQUN6RTtBQUFBLE1BQ0Y7QUFFQSxZQUFNLFVBQVUsb0JBQTZCLFlBQVksSUFBSSxNQUFNLElBQUk7QUFDdkUsUUFBRSxPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFBQSxDQUNWO0FBQUEsSUFDSDtBQUVBLG1CQUFlLFdBQVcsU0FBd0M7QUFDaEUsYUFBTyxTQUFTLFNBQVMsRUFBQyxJQUFJLFFBQVEsQ0FBQTtBQUFBLElBQ3hDO0FBRUEsbUJBQWUsZUFBZTs7QUFDNUIsZ0JBQVUsUUFBUSxNQUFNLFdBQW1CLE9BQU8sYUFBYSxNQUFNLE9BQU8sT0FBTztBQUMvRSxXQUFBLGVBQVUsVUFBVixtQkFBaUIsUUFBUTtBQUMzQix3QkFBVSxVQUFWLG1CQUFpQixPQUFPLEtBQUssQ0FBQyxJQUFJLE9BQU87QUFFaEMsaUJBQUEsR0FBRyxRQUFTLEdBQUc7QUFBQSxRQUFBO0FBRWQsa0JBQUEsU0FBUSxlQUFVLFVBQVYsbUJBQWlCO0FBQUEsTUFDckM7QUFBQSxJQUNGO0FBRUEsY0FBVSxZQUFZO0FBQ3BCLFlBQU0sYUFBYTtBQUFBLElBQUEsQ0FDcEI7QUFFRCxjQUFVLFlBQVk7QUFDcEIsWUFBTSxhQUFhO0FBQUEsSUFBQSxDQUNwQjtBQUVELFVBQU0sVUFBVTtBQUFBLE1BQ2Q7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFzQixJQUFJO0FBQUEsUUFDbEMsUUFBUSxDQUFDLFFBQWdCLEdBQUc7QUFBQSxRQUM1QixPQUFPO0FBQUEsUUFDUCxVQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQzs7QUFBc0IsMkJBQUksU0FBSixtQkFBVTtBQUFBO0FBQUEsUUFDeEMsUUFBUSxDQUFDLFFBQWdCLEdBQUc7QUFBQSxRQUM1QixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFzQixJQUFJO0FBQUEsUUFDbEMsUUFBUSxDQUFDLFFBQWdDLElBQUksSUFBSSxDQUFLOztBQUFBLHlCQUFFLFVBQUYsbUJBQVM7QUFBQSxTQUFRLEVBQUUsS0FBSyxVQUFLO0FBQUEsUUFDbkYsU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLE1BQ1o7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixVQUFVO0FBQUEsUUFDVixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPLENBQUMsUUFBc0IsSUFBSTtBQUFBLFFBQ2xDLFFBQVEsQ0FBQyxRQUFnQixHQUFHLGVBQWUsR0FBRztBQUFBLFFBQzlDLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFBQTtBQUdFLFFBQUEsZ0JBQWdCLFNBQVMsTUFBTTs7QUFDakMsVUFBSSxlQUF5QixDQUFBO0FBQ25CLDRCQUFBLFVBQUEsbUJBQU8sV0FBUCxtQkFBZSxRQUFRLENBQUssTUFBQTtBQUNwQyxZQUFJLEVBQUU7QUFBdUIsdUJBQUEsS0FBSyxFQUFFLFFBQVE7QUFBQSxNQUFBO0FBRTlDLGFBQU8sYUFBYSxZQUFZO0FBQUEsSUFBQSxDQUNqQztBQUVELFVBQU0sYUFBYTtBQUFBLE1BQ2pCLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxJQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

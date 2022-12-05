import { Q as QImg } from "./QImg.efb57f2d.js";
import { a2 as _export_sfc, a3 as defineComponent, aA as useRouter, b2 as AlbumApi, b3 as apiConfig, r as ref, c as computed, o as onMounted, b4 as onUpdated, a5 as openBlock, a6 as createBlock, a7 as withCtx, al as createElementBlock, a9 as createBaseVNode, d as createVNode, aa as toDisplayString, as as QSeparator, ad as createCommentVNode, a4 as unref, l as QBtn, am as createTextVNode } from "./index.6d1b1638.js";
import { Q as QTooltip, c as outlinedPlayArrow, u as outlinedStarBorder, x as outlinedMoreHoriz } from "./index.91a206ed.js";
import { Q as QTable } from "./QTable.308bee86.js";
import { Q as QPage } from "./QPage.ba85c39c.js";
import { f as formatDuration } from "./durationUtils.ada1e9cf.js";
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
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-body1" }, "Track", -1);
const _hoisted_7 = { class: "q-mb-sm-sm q-mb-none q-mt-md" };
const _hoisted_8 = { class: "col-12" };
const _hoisted_9 = { class: "row full-width" };
const _hoisted_10 = { class: "text-subtitle1 text-bold" };
const _hoisted_11 = {
  key: 0,
  class: "text-subtitle1"
};
const _hoisted_12 = { class: "text-subtitle1" };
const _hoisted_13 = { class: "col-12 q-pt-md" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Play");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Save");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("More");
const _hoisted_17 = { class: "col-12 q-pt-md" };
const _hoisted_18 = { class: "col-12 q-pt-md" };
const __default__ = defineComponent({
  name: "PageName"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const metadataColumns = [
      {
        name: "metadata",
        label: "FIELD",
        align: "left",
        field: (row) => row.name
      },
      {
        name: "value",
        label: "VALUE",
        align: "left",
        field: (row) => row.value
      }
    ];
    const originalColumns = [
      {
        name: "metadata",
        label: "Track",
        align: "left",
        field: (row) => row.value
      },
      {
        name: "value",
        label: "Album",
        align: "left",
        field: (row) => row.name
      }
    ];
    const pagination = {
      rowsPerPage: 0,
      descending: true,
      field: (row) => row.value
    };
    const router = useRouter();
    const trackApi = new AlbumApi(apiConfig);
    const trackInfo = ref();
    const albumInfo = ref();
    const trackMetadata = computed(() => {
      if (trackInfo.value)
        return fmtMetadata(trackInfo.value);
      return null;
    });
    const originalTracks = computed(() => {
      if (trackInfo.value)
        return fmtOriginalTracks(trackInfo.value);
      return null;
    });
    function fmtOriginalTracks(track) {
      var _a, _b, _c;
      const originals = [];
      if (track.original) {
        for (let i = 0; i < track.original.length; i++) {
          const original = track.original[i];
          const originalAlbumName = (_b = (_a = original == null ? void 0 : original.album) == null ? void 0 : _a.fullName) == null ? void 0 : _b._default;
          if (!originalAlbumName) {
            console.log("One of the original album's name is undefined");
            continue;
          }
          originals.push({ name: originalAlbumName, value: (_c = original.title) == null ? void 0 : _c.en });
        }
      }
      return originals;
    }
    function fmtMetadata(track) {
      const metadata = [];
      const metadataIndex = [
        "staff",
        "arrangement",
        "vocalist",
        "lyricist",
        "genre"
      ];
      const trackDict = track;
      for (let knownDataIndex of metadataIndex) {
        const d = trackDict[knownDataIndex];
        console.log(d);
        if ((d == null ? void 0 : d.length) != 0) {
          metadata.push({ name: knownDataIndex, value: d.join(",") });
        }
      }
      return metadata;
    }
    async function setTrackPage(trackId) {
      var _a;
      trackInfo.value = await trackApi.getTrack({ id: trackId });
      albumInfo.value = (_a = trackInfo.value) == null ? void 0 : _a.album;
      console.log(trackInfo.value);
    }
    onMounted(async () => {
      console.log("Mounted");
      await setTrackPage(router.currentRoute.value.params.trackId);
      console.log(fmtOriginalTracks(trackInfo.value));
      console.log(fmtMetadata(trackInfo.value));
    });
    onUpdated(async () => {
      console.log("Updated");
      await setTrackPage(router.currentRoute.value.params.trackId);
      console.log(fmtOriginalTracks(trackInfo.value));
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { padding: "" }, {
        default: withCtx(() => {
          var _a;
          return [
            trackInfo.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QImg, {
                  src: albumInfo.value.albumImage.url,
                  ratio: "1"
                }, null, 8, ["src"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    _hoisted_6,
                    createBaseVNode("h3", _hoisted_7, toDisplayString(trackInfo.value.name._default), 1)
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", _hoisted_10, toDisplayString(albumInfo.value.albumArtist[0]), 1),
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
                      createBaseVNode("div", _hoisted_12, toDisplayString(unref(formatDuration)(trackInfo.value.duration)), 1)
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createVNode(QBtn, {
                  fab: "",
                  class: "q-mx-md",
                  round: "",
                  icon: unref(outlinedPlayArrow),
                  color: "black",
                  "text-color": "white"
                }, {
                  default: withCtx(() => [
                    createVNode(QTooltip, null, {
                      default: withCtx(() => [
                        _hoisted_14
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
                  icon: unref(outlinedMoreHoriz)
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
                }, 8, ["icon"])
              ]),
              createBaseVNode("div", _hoisted_17, [
                createVNode(QTable, {
                  rows: unref(originalTracks),
                  columns: originalColumns,
                  pagination,
                  title: "Original",
                  separator: "horizontal",
                  "row-key": "index",
                  flat: "",
                  "hide-bottom": "",
                  "virtual-scroll": "",
                  "hide-pagination": ""
                }, null, 8, ["rows"])
              ]),
              createBaseVNode("div", _hoisted_18, [
                createVNode(QTable, {
                  rows: unref(trackMetadata),
                  columns: metadataColumns,
                  pagination,
                  title: "Metadata",
                  separator: "cell",
                  "row-key": "index",
                  flat: "",
                  "hide-bottom": "",
                  "virtual-scroll": "",
                  "hide-header": "",
                  "hide-pagination": ""
                }, null, 8, ["rows"])
              ])
            ])) : createCommentVNode("", true)
          ];
        }),
        _: 1
      });
    };
  }
});
var TrackPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "TrackPage.vue"]]);
export { TrackPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2tQYWdlLmYxNTI1MDcwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvVHJhY2tQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPHEtcGFnZSBwYWRkaW5nPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCIgdi1pZj1cInRyYWNrSW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxyXG4gICAgICAgIDxxLWltZ1xyXG4gICAgICAgICAgOnNyYz1cImFsYnVtSW5mby5hbGJ1bUltYWdlLnVybFwiXHJcbiAgICAgICAgICByYXRpbz1cIjFcIj5cclxuICAgICAgICA8L3EtaW1nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGl0ZW1zLWVuZFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5MVwiPlRyYWNrPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInEtbWItc20tc20gcS1tYi1ub25lIHEtbXQtbWRcIj57eyB0cmFja0luZm8ubmFtZS5fZGVmYXVsdCB9fTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIHt7IGFsYnVtSW5mby5hbGJ1bUFydGlzdFswXSB9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkIHYtaWY9XCJhbGJ1bUluZm8ucmVsZWFzZURhdGVcIj48L3Etc2VwYXJhdG9yPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGFsYnVtSW5mby5yZWxlYXNlRGF0ZT8udG9Mb2NhbGVEYXRlU3RyaW5nKCkgfX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkPjwvcS1zZXBhcmF0b3I+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgZm9ybWF0RHVyYXRpb24odHJhY2tJbmZvLmR1cmF0aW9uKSB9fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XHJcbiAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XHJcbiAgICAgICAgPC9xLWJ0bj5cclxuXHJcbiAgICAgICAgPHEtYnRuIGZhYiBmbGF0IGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIDppY29uPVwib3V0bGluZWRTdGFyQm9yZGVyXCI+XHJcbiAgICAgICAgICA8cS10b29sdGlwPlNhdmU8L3EtdG9vbHRpcD5cclxuICAgICAgICA8L3EtYnRuPlxyXG5cclxuICAgICAgICA8cS1idG4gZmFiIGZsYXQgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZE1vcmVIb3JpelwiPlxyXG4gICAgICAgICAgPHEtdG9vbHRpcD5Nb3JlPC9xLXRvb2x0aXA+XHJcbiAgICAgICAgPC9xLWJ0bj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj5cclxuICAgICAgICA8cS10YWJsZSA6cm93cz1cIm9yaWdpbmFsVHJhY2tzXCJcclxuICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cIm9yaWdpbmFsQ29sdW1uc1wiXHJcbiAgICAgICAgICAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICB0aXRsZT1cIk9yaWdpbmFsXCJcclxuICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgICByb3cta2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgIGZsYXRcclxuICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxyXG4gICAgICAgICAgICAgICAgIHZpcnR1YWwtc2Nyb2xsXHJcbiAgICAgICAgICAgICAgICAgaGlkZS1wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgPCEtLSAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD4tLT5cclxuXHJcbiAgICAgICAgICA8IS0tICAgICAgICAgIDwvdGVtcGxhdGU+LS0+XHJcbiAgICAgICAgPC9xLXRhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZFwiPlxyXG4gICAgICAgIDxxLXRhYmxlIDpyb3dzPVwidHJhY2tNZXRhZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgOmNvbHVtbnM9XCJtZXRhZGF0YUNvbHVtbnNcIlxyXG4gICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgdGl0bGU9XCJNZXRhZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgc2VwYXJhdG9yPVwiY2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgcm93LWtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICBmbGF0XHJcbiAgICAgICAgICAgICAgICAgaGlkZS1ib3R0b21cclxuICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxyXG4gICAgICAgICAgICAgICAgIGhpZGUtaGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgaGlkZS1wYWdpbmF0aW9uPlxyXG4gICAgICAgICAgPCEtLSAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD4tLT5cclxuICAgICAgICAgIDwhLS0gICAgICAgICAgPC90ZW1wbGF0ZT4tLT5cclxuICAgICAgICA8L3EtdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9xLXBhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgbmFtZTogJ1BhZ2VOYW1lJ1xyXG59KVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7XHJcbiAgb3V0bGluZWRQbGF5QXJyb3csXHJcbiAgb3V0bGluZWRNb3JlSG9yaXosXHJcbiAgb3V0bGluZWRTdGFyQm9yZGVyXHJcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xyXG5cclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBhcGlDb25maWcgfSBmcm9tICdib290L2JhY2tlbmQtYXBpJztcclxuaW1wb3J0IHsgQWxidW1BcGkgfSBmcm9tICdhcHAvbXVzaWMtZGF0YS1zZXJ2aWNlLWFwaSc7XHJcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvLCBPcmlnaW5hbFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9tdXNpYy1kYXRhLXNlcnZpY2UtYXBpJztcclxuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgb25VcGRhdGVkLCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBmb3JtYXREdXJhdGlvbiB9IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcclxuXHJcbnR5cGUgTWV0YWRhdGEgPSB7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9O1xyXG5cclxuY29uc3QgbWV0YWRhdGFDb2x1bW5zID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdtZXRhZGF0YScsXHJcbiAgICBsYWJlbDogJ0ZJRUxEJyxcclxuICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy5uYW1lXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAndmFsdWUnLFxyXG4gICAgbGFiZWw6ICdWQUxVRScsXHJcbiAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cudmFsdWVcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IG9yaWdpbmFsQ29sdW1ucyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnbWV0YWRhdGEnLFxyXG4gICAgbGFiZWw6ICdUcmFjaycsXHJcbiAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cudmFsdWVcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICd2YWx1ZScsXHJcbiAgICBsYWJlbDogJ0FsYnVtJyxcclxuICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy5uYW1lXHJcbiAgfVxyXG5dXHJcblxyXG5jb25zdCBwYWdpbmF0aW9uID0ge1xyXG4gIHJvd3NQZXJQYWdlOiAwLFxyXG4gIGRlc2NlbmRpbmc6IHRydWUsXHJcbiAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cudmFsdWVcclxufVxyXG5cclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5jb25zdCB0cmFja0FwaSA9IG5ldyBBbGJ1bUFwaShhcGlDb25maWcpO1xyXG5jb25zdCB0cmFja0luZm8gPSByZWY8VHJhY2tSZWFkRHRvPigpO1xyXG5jb25zdCBhbGJ1bUluZm8gPSByZWY8QWxidW1SZWFkRHRvPigpO1xyXG5cclxuY29uc3QgdHJhY2tNZXRhZGF0YSA9IGNvbXB1dGVkKCgpID0+IHtcclxuICBpZiAodHJhY2tJbmZvLnZhbHVlKVxyXG4gICAgcmV0dXJuIGZtdE1ldGFkYXRhKHRyYWNrSW5mby52YWx1ZSk7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn0pXHJcblxyXG5jb25zdCBvcmlnaW5hbFRyYWNrcyA9IGNvbXB1dGVkKCgpID0+IHtcclxuICBpZiAodHJhY2tJbmZvLnZhbHVlKVxyXG4gICAgcmV0dXJuIGZtdE9yaWdpbmFsVHJhY2tzKHRyYWNrSW5mby52YWx1ZSk7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn0pXHJcblxyXG4vKipcclxuICogRXh0cmFjdCBPcmlnaW5hbCB0cmFjayBpbmZvIGZyb20gdGhlIEFQSSByZXNwb25zZSBvYmplY3RcclxuICogQHBhcmFtIHRyYWNrXHJcbiAqL1xyXG5mdW5jdGlvbiBmbXRPcmlnaW5hbFRyYWNrcyh0cmFjazogVHJhY2tSZWFkRHRvKTogTWV0YWRhdGFbXSB7XHJcbiAgY29uc3Qgb3JpZ2luYWxzOiBNZXRhZGF0YVtdID0gW11cclxuICBpZiAodHJhY2sub3JpZ2luYWwpXHJcbiAge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0cmFjay5vcmlnaW5hbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBvcmlnaW5hbDogT3JpZ2luYWxUcmFja1JlYWREdG8gPSB0cmFjay5vcmlnaW5hbFtpXTtcclxuXHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsQWxidW1OYW1lID0gb3JpZ2luYWw/LmFsYnVtPy5mdWxsTmFtZT8uX2RlZmF1bHQ7XHJcbiAgICAgIGlmICghb3JpZ2luYWxBbGJ1bU5hbWUpXHJcbiAgICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uZSBvZiB0aGUgb3JpZ2luYWwgYWxidW0ncyBuYW1lIGlzIHVuZGVmaW5lZFwiKVxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBvcmlnaW5hbHMucHVzaCh7bmFtZTogb3JpZ2luYWxBbGJ1bU5hbWUsIHZhbHVlOiA8c3RyaW5nPm9yaWdpbmFsLnRpdGxlPy5lbn0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb3JpZ2luYWxzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbXRNZXRhZGF0YSh0cmFjazogVHJhY2tSZWFkRHRvKTogTWV0YWRhdGFbXSB7XHJcbiAgY29uc3QgbWV0YWRhdGE6IE1ldGFkYXRhW10gPSBbXTtcclxuICBjb25zdCBtZXRhZGF0YUluZGV4ID0gW1xyXG4gICAgJ3N0YWZmJyxcclxuICAgICdhcnJhbmdlbWVudCcsXHJcbiAgICAndm9jYWxpc3QnLFxyXG4gICAgJ2x5cmljaXN0JyxcclxuICAgICdnZW5yZSdcclxuICBdXHJcblxyXG4gIGNvbnN0IHRyYWNrRGljdCA9IHRyYWNrIGFzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nW10gfCBudWxsIH1cclxuICBmb3IgKGxldCBrbm93bkRhdGFJbmRleCBvZiBtZXRhZGF0YUluZGV4KSB7XHJcbiAgICBjb25zdCBkID0gdHJhY2tEaWN0W2tub3duRGF0YUluZGV4XVxyXG4gICAgY29uc29sZS5sb2coZClcclxuICAgIGlmIChkPy5sZW5ndGggIT0gMCkge1xyXG4gICAgICBtZXRhZGF0YS5wdXNoKHtuYW1lOiBrbm93bkRhdGFJbmRleCwgdmFsdWU6IGQuam9pbignLCcpfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWV0YWRhdGE7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNldFRyYWNrUGFnZSh0cmFja0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAvLyBGZXRjaCB0cmFja1xyXG4gIHRyYWNrSW5mby52YWx1ZSA9IGF3YWl0IHRyYWNrQXBpLmdldFRyYWNrKHtpZDogdHJhY2tJZH0pXHJcbiAgYWxidW1JbmZvLnZhbHVlID0gdHJhY2tJbmZvLnZhbHVlPy5hbGJ1bTtcclxuICBjb25zb2xlLmxvZyh0cmFja0luZm8udmFsdWUpO1xyXG59XHJcblxyXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdNb3VudGVkJyk7XHJcbiAgYXdhaXQgc2V0VHJhY2tQYWdlKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMudHJhY2tJZClcclxuICBjb25zb2xlLmxvZyhmbXRPcmlnaW5hbFRyYWNrcyg8VHJhY2tSZWFkRHRvPnRyYWNrSW5mby52YWx1ZSkpXHJcbiAgY29uc29sZS5sb2coZm10TWV0YWRhdGEoPFRyYWNrUmVhZER0bz50cmFja0luZm8udmFsdWUpKVxyXG59KVxyXG5cclxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcclxuICBjb25zb2xlLmxvZygnVXBkYXRlZCcpXHJcbiAgYXdhaXQgc2V0VHJhY2tQYWdlKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMudHJhY2tJZClcclxuICBjb25zb2xlLmxvZyhmbXRPcmlnaW5hbFRyYWNrcyg8VHJhY2tSZWFkRHRvPnRyYWNrSW5mby52YWx1ZSkpO1xyXG59KVxyXG48L3NjcmlwdD5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdGQSxNQUFBLGNB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

import { Q as QImg } from "./QImg.b951dfc5.js";
import { a3 as _export_sfc, a4 as defineComponent, a6 as useRouter, aM as ApiConfigProvider, bi as AlbumApi, r as ref, c as computed, o as onMounted, bj as onUpdated, a8 as openBlock, a9 as createBlock, aa as withCtx, ao as createElementBlock, ac as createBaseVNode, d as createVNode, ad as toDisplayString, aw as QSeparator, ah as createCommentVNode, a7 as unref, af as QBtn, ap as createTextVNode } from "./index.5f2969d0.js";
import { Q as QTooltip, c as outlinedPlayArrow, x as outlinedStarBorder, w as outlinedMoreHoriz } from "./index.21870eda.js";
import { Q as QTable } from "./QTable.e0020297.js";
import { Q as QPage } from "./QPage.c9004b2d.js";
import { f as formatDuration } from "./QList.104c8c2e.js";
import "./rtl.c2e9dcb8.js";
import "./QSelect.6ccec858.js";
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
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
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
    }
    onMounted(async () => {
      await setTrackPage(router.currentRoute.value.params.trackId);
    });
    onUpdated(async () => {
      await setTrackPage(router.currentRoute.value.params.trackId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2tQYWdlLjI2YzAyYWUzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvVHJhY2tQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIiB2LWlmPVwidHJhY2tJbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICA6c3JjPVwiYWxidW1JbmZvLmFsYnVtSW1hZ2UudXJsXCJcbiAgICAgICAgICByYXRpbz1cIjFcIj5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5MVwiPlRyYWNrPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJxLW1iLXNtLXNtIHEtbWItbm9uZSBxLW10LW1kXCI+e3sgdHJhY2tJbmZvLm5hbWUuX2RlZmF1bHQgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8uYWxidW1BcnRpc3RbMF0gfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgZm9ybWF0RHVyYXRpb24odHJhY2tJbmZvLmR1cmF0aW9uKSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj5cbiAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgIDxxLXRvb2x0aXA+UGxheTwvcS10b29sdGlwPlxuICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkU3RhckJvcmRlclwiPlxuICAgICAgICAgIDxxLXRvb2x0aXA+U2F2ZTwvcS10b29sdGlwPlxuICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCI+XG4gICAgICAgICAgPHEtdG9vbHRpcD5Nb3JlPC9xLXRvb2x0aXA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgIDxxLXRhYmxlIDpyb3dzPVwib3JpZ2luYWxUcmFja3NcIlxuICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cIm9yaWdpbmFsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgIHRpdGxlPVwiT3JpZ2luYWxcIlxuICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgcm93LWtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XG4gICAgICAgICAgPCEtLSAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD4tLT5cblxuICAgICAgICAgIDwhLS0gICAgICAgICAgPC90ZW1wbGF0ZT4tLT5cbiAgICAgICAgPC9xLXRhYmxlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZFwiPlxuICAgICAgICA8cS10YWJsZSA6cm93cz1cInRyYWNrTWV0YWRhdGFcIlxuICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cIm1ldGFkYXRhQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgIHRpdGxlPVwiTWV0YWRhdGFcIlxuICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgcm93LWtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICBoaWRlLWhlYWRlclxuICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XG4gICAgICAgICAgPCEtLSAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD4tLT5cbiAgICAgICAgICA8IS0tICAgICAgICAgIDwvdGVtcGxhdGU+LS0+XG4gICAgICAgIDwvcS10YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnUGFnZU5hbWUnXG59KVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRNb3JlSG9yaXosXG4gIG91dGxpbmVkU3RhckJvcmRlclxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBBbGJ1bUFwaSB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvLCBPcmlnaW5hbFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIG9uVXBkYXRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IGZvcm1hdER1cmF0aW9uIH0gZnJvbSAnc3JjL3V0aWxzL2R1cmF0aW9uVXRpbHMnO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSAnc3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyJztcblxudHlwZSBNZXRhZGF0YSA9IHsgbmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH07XG5cbmNvbnN0IG1ldGFkYXRhQ29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdtZXRhZGF0YScsXG4gICAgbGFiZWw6ICdGSUVMRCcsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy5uYW1lXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndmFsdWUnLFxuICAgIGxhYmVsOiAnVkFMVUUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cudmFsdWVcbiAgfVxuXVxuXG5jb25zdCBvcmlnaW5hbENvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnbWV0YWRhdGEnLFxuICAgIGxhYmVsOiAnVHJhY2snLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cudmFsdWVcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd2YWx1ZScsXG4gICAgbGFiZWw6ICdBbGJ1bScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy5uYW1lXG4gIH1cbl1cblxuY29uc3QgcGFnaW5hdGlvbiA9IHtcbiAgcm93c1BlclBhZ2U6IDAsXG4gIGRlc2NlbmRpbmc6IHRydWUsXG4gIGZpZWxkOiAocm93OiBNZXRhZGF0YSkgPT4gcm93LnZhbHVlXG59XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpO1xuY29uc3QgdHJhY2tBcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcbmNvbnN0IHRyYWNrSW5mbyA9IHJlZjxUcmFja1JlYWREdG8+KCk7XG5jb25zdCBhbGJ1bUluZm8gPSByZWY8QWxidW1SZWFkRHRvPigpO1xuXG5jb25zdCB0cmFja01ldGFkYXRhID0gY29tcHV0ZWQoKCkgPT4ge1xuICBpZiAodHJhY2tJbmZvLnZhbHVlKVxuICAgIHJldHVybiBmbXRNZXRhZGF0YSh0cmFja0luZm8udmFsdWUpO1xuICByZXR1cm4gbnVsbDtcbn0pXG5cbmNvbnN0IG9yaWdpbmFsVHJhY2tzID0gY29tcHV0ZWQoKCkgPT4ge1xuICBpZiAodHJhY2tJbmZvLnZhbHVlKVxuICAgIHJldHVybiBmbXRPcmlnaW5hbFRyYWNrcyh0cmFja0luZm8udmFsdWUpO1xuICByZXR1cm4gbnVsbDtcbn0pXG5cbi8qKlxuICogRXh0cmFjdCBPcmlnaW5hbCB0cmFjayBpbmZvIGZyb20gdGhlIEFQSSByZXNwb25zZSBvYmplY3RcbiAqIEBwYXJhbSB0cmFja1xuICovXG5mdW5jdGlvbiBmbXRPcmlnaW5hbFRyYWNrcyh0cmFjazogVHJhY2tSZWFkRHRvKTogTWV0YWRhdGFbXSB7XG4gIGNvbnN0IG9yaWdpbmFsczogTWV0YWRhdGFbXSA9IFtdXG4gIGlmICh0cmFjay5vcmlnaW5hbClcbiAge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2sub3JpZ2luYWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsOiBPcmlnaW5hbFRyYWNrUmVhZER0byA9IHRyYWNrLm9yaWdpbmFsW2ldO1xuXG4gICAgICBjb25zdCBvcmlnaW5hbEFsYnVtTmFtZSA9IG9yaWdpbmFsPy5hbGJ1bT8uZnVsbE5hbWU/Ll9kZWZhdWx0O1xuICAgICAgaWYgKCFvcmlnaW5hbEFsYnVtTmFtZSlcbiAgICAgIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG9yaWdpbmFscy5wdXNoKHtuYW1lOiBvcmlnaW5hbEFsYnVtTmFtZSwgdmFsdWU6IDxzdHJpbmc+b3JpZ2luYWwudGl0bGU/LmVufSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3JpZ2luYWxzO1xufVxuXG5mdW5jdGlvbiBmbXRNZXRhZGF0YSh0cmFjazogVHJhY2tSZWFkRHRvKTogTWV0YWRhdGFbXSB7XG4gIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YVtdID0gW107XG4gIGNvbnN0IG1ldGFkYXRhSW5kZXggPSBbXG4gICAgJ3N0YWZmJyxcbiAgICAnYXJyYW5nZW1lbnQnLFxuICAgICd2b2NhbGlzdCcsXG4gICAgJ2x5cmljaXN0JyxcbiAgICAnZ2VucmUnXG4gIF1cblxuICBjb25zdCB0cmFja0RpY3QgPSB0cmFjayBhcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIHwgbnVsbCB9XG4gIGZvciAobGV0IGtub3duRGF0YUluZGV4IG9mIG1ldGFkYXRhSW5kZXgpIHtcbiAgICBjb25zdCBkID0gdHJhY2tEaWN0W2tub3duRGF0YUluZGV4XVxuICAgIGlmIChkPy5sZW5ndGggIT0gMCkge1xuICAgICAgbWV0YWRhdGEucHVzaCh7bmFtZToga25vd25EYXRhSW5kZXgsIHZhbHVlOiBkLmpvaW4oJywnKX0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRhZGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0VHJhY2tQYWdlKHRyYWNrSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBGZXRjaCB0cmFja1xuICB0cmFja0luZm8udmFsdWUgPSBhd2FpdCB0cmFja0FwaS5nZXRUcmFjayh7aWQ6IHRyYWNrSWR9KVxuICBhbGJ1bUluZm8udmFsdWUgPSB0cmFja0luZm8udmFsdWU/LmFsYnVtO1xufVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzZXRUcmFja1BhZ2UoPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy50cmFja0lkKVxufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0VHJhY2tQYWdlKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMudHJhY2tJZClcbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdGQSxNQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUNSLENBQUM7Ozs7QUFvQkQsVUFBTSxrQkFBa0I7QUFBQSxNQUN0QjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDLFFBQWtCLElBQUk7QUFBQSxNQUNoQztBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFrQixJQUFJO0FBQUEsTUFDaEM7QUFBQSxJQUFBO0FBR0YsVUFBTSxrQkFBa0I7QUFBQSxNQUN0QjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDLFFBQWtCLElBQUk7QUFBQSxNQUNoQztBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFrQixJQUFJO0FBQUEsTUFDaEM7QUFBQSxJQUFBO0FBR0YsVUFBTSxhQUFhO0FBQUEsTUFDakIsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osT0FBTyxDQUFDLFFBQWtCLElBQUk7QUFBQSxJQUFBO0FBR2hDLFVBQU0sU0FBUztBQUVmLFVBQU0sWUFBWSxrQkFBa0IsWUFBWSxFQUFFLGFBQWE7QUFDekQsVUFBQSxXQUFXLElBQUksU0FBUyxTQUFTO0FBQ3ZDLFVBQU0sWUFBWTtBQUNsQixVQUFNLFlBQVk7QUFFWixVQUFBLGdCQUFnQixTQUFTLE1BQU07QUFDbkMsVUFBSSxVQUFVO0FBQ0wsZUFBQSxZQUFZLFVBQVUsS0FBSztBQUM3QixhQUFBO0FBQUEsSUFBQSxDQUNSO0FBRUssVUFBQSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3BDLFVBQUksVUFBVTtBQUNMLGVBQUEsa0JBQWtCLFVBQVUsS0FBSztBQUNuQyxhQUFBO0FBQUEsSUFBQSxDQUNSO0FBTUQsYUFBUyxrQkFBa0IsT0FBaUM7O0FBQzFELFlBQU0sWUFBd0IsQ0FBQTtBQUM5QixVQUFJLE1BQU0sVUFDVjtBQUNFLGlCQUFTLElBQUksR0FBRyxJQUFJLE1BQU0sU0FBUyxRQUFRLEtBQUs7QUFDeEMsZ0JBQUEsV0FBaUMsTUFBTSxTQUFTO0FBRWhELGdCQUFBLHFCQUFvQixnREFBVSxVQUFWLG1CQUFpQixhQUFqQixtQkFBMkI7QUFDckQsY0FBSSxDQUFDLG1CQUNMO0FBQ0U7QUFBQSxVQUNGO0FBRVUsb0JBQUEsS0FBSyxFQUFDLE1BQU0sbUJBQW1CLFFBQWUsY0FBUyxVQUFULG1CQUFnQixJQUFHO0FBQUEsUUFDN0U7QUFBQSxNQUNGO0FBRU8sYUFBQTtBQUFBLElBQ1Q7QUFFQSxhQUFTLFlBQVksT0FBaUM7QUFDcEQsWUFBTSxXQUF1QixDQUFBO0FBQzdCLFlBQU0sZ0JBQWdCO0FBQUEsUUFDcEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFBQTtBQUdGLFlBQU0sWUFBWTtBQUNsQixlQUFTLGtCQUFrQixlQUFlO0FBQ3hDLGNBQU0sSUFBSSxVQUFVO0FBQ2hCLGFBQUEsdUJBQUcsV0FBVSxHQUFHO0FBQ1QsbUJBQUEsS0FBSyxFQUFDLE1BQU0sZ0JBQWdCLE9BQU8sRUFBRSxLQUFLLEdBQUcsRUFBQSxDQUFFO0FBQUEsUUFDMUQ7QUFBQSxNQUNGO0FBRU8sYUFBQTtBQUFBLElBQ1Q7QUFFQSxtQkFBZSxhQUFhLFNBQWdDOztBQUUxRCxnQkFBVSxRQUFRLE1BQU0sU0FBUyxTQUFTLEVBQUMsSUFBSSxTQUFRO0FBQzdDLGdCQUFBLFNBQVEsZUFBVSxVQUFWLG1CQUFpQjtBQUFBLElBQ3JDO0FBRUEsY0FBVSxZQUFZO0FBQ3BCLFlBQU0sYUFBcUIsT0FBTyxhQUFhLE1BQU0sT0FBTyxPQUFPO0FBQUEsSUFBQSxDQUNwRTtBQUVELGNBQVUsWUFBWTtBQUNwQixZQUFNLGFBQXFCLE9BQU8sYUFBYSxNQUFNLE9BQU8sT0FBTztBQUFBLElBQUEsQ0FDcEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

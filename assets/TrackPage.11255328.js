import { Q as QImg } from "./QImg.276e5a6d.js";
import { a2 as _export_sfc, a3 as defineComponent, aA as useRouter, b2 as AlbumApi, b3 as apiConfig, r as ref, c as computed, o as onMounted, b4 as onUpdated, a5 as openBlock, a6 as createBlock, a7 as withCtx, al as createElementBlock, a9 as createBaseVNode, d as createVNode, aa as toDisplayString, as as QSeparator, ad as createCommentVNode, a4 as unref, l as QBtn, am as createTextVNode } from "./index.e1084ec4.js";
import { Q as QTooltip, c as outlinedPlayArrow, u as outlinedStarBorder, x as outlinedMoreHoriz } from "./index.aac9142d.js";
import { Q as QTable } from "./QTable.0cb1beac.js";
import { Q as QPage } from "./QPage.f56883a0.js";
import { f as formatDuration } from "./durationUtils.f4258b37.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2tQYWdlLjExMjU1MzI4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvVHJhY2tQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIiB2LWlmPVwidHJhY2tJbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICA6c3JjPVwiYWxidW1JbmZvLmFsYnVtSW1hZ2UudXJsXCJcbiAgICAgICAgICByYXRpbz1cIjFcIj5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5MVwiPlRyYWNrPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJxLW1iLXNtLXNtIHEtbWItbm9uZSBxLW10LW1kXCI+e3sgdHJhY2tJbmZvLm5hbWUuX2RlZmF1bHQgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8uYWxidW1BcnRpc3RbMF0gfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgZm9ybWF0RHVyYXRpb24odHJhY2tJbmZvLmR1cmF0aW9uKSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj5cbiAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgIDxxLXRvb2x0aXA+UGxheTwvcS10b29sdGlwPlxuICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkU3RhckJvcmRlclwiPlxuICAgICAgICAgIDxxLXRvb2x0aXA+U2F2ZTwvcS10b29sdGlwPlxuICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCI+XG4gICAgICAgICAgPHEtdG9vbHRpcD5Nb3JlPC9xLXRvb2x0aXA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgIDxxLXRhYmxlIDpyb3dzPVwib3JpZ2luYWxUcmFja3NcIlxuICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cIm9yaWdpbmFsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgIHRpdGxlPVwiT3JpZ2luYWxcIlxuICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgcm93LWtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XG4gICAgICAgICAgPCEtLSAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD4tLT5cblxuICAgICAgICAgIDwhLS0gICAgICAgICAgPC90ZW1wbGF0ZT4tLT5cbiAgICAgICAgPC9xLXRhYmxlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZFwiPlxuICAgICAgICA8cS10YWJsZSA6cm93cz1cInRyYWNrTWV0YWRhdGFcIlxuICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cIm1ldGFkYXRhQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgIHRpdGxlPVwiTWV0YWRhdGFcIlxuICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgcm93LWtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICBoaWRlLWhlYWRlclxuICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XG4gICAgICAgICAgPCEtLSAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD4tLT5cbiAgICAgICAgICA8IS0tICAgICAgICAgIDwvdGVtcGxhdGU+LS0+XG4gICAgICAgIDwvcS10YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnUGFnZU5hbWUnXG59KVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRNb3JlSG9yaXosXG4gIG91dGxpbmVkU3RhckJvcmRlclxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBhcGlDb25maWcgfSBmcm9tICdib290L2JhY2tlbmQtYXBpJztcbmltcG9ydCB7IEFsYnVtQXBpIH0gZnJvbSAnYXBwL211c2ljLWRhdGEtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8sIE9yaWdpbmFsVHJhY2tSZWFkRHRvIH0gZnJvbSAnYXBwL211c2ljLWRhdGEtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgb25VcGRhdGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgZm9ybWF0RHVyYXRpb24gfSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5cbnR5cGUgTWV0YWRhdGEgPSB7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9O1xuXG5jb25zdCBtZXRhZGF0YUNvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnbWV0YWRhdGEnLFxuICAgIGxhYmVsOiAnRklFTEQnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cubmFtZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3ZhbHVlJyxcbiAgICBsYWJlbDogJ1ZBTFVFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBNZXRhZGF0YSkgPT4gcm93LnZhbHVlXG4gIH1cbl1cblxuY29uc3Qgb3JpZ2luYWxDb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ21ldGFkYXRhJyxcbiAgICBsYWJlbDogJ1RyYWNrJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBNZXRhZGF0YSkgPT4gcm93LnZhbHVlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndmFsdWUnLFxuICAgIGxhYmVsOiAnQWxidW0nLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cubmFtZVxuICB9XG5dXG5cbmNvbnN0IHBhZ2luYXRpb24gPSB7XG4gIHJvd3NQZXJQYWdlOiAwLFxuICBkZXNjZW5kaW5nOiB0cnVlLFxuICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy52YWx1ZVxufVxuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgdHJhY2tBcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcbmNvbnN0IHRyYWNrSW5mbyA9IHJlZjxUcmFja1JlYWREdG8+KCk7XG5jb25zdCBhbGJ1bUluZm8gPSByZWY8QWxidW1SZWFkRHRvPigpO1xuXG5jb25zdCB0cmFja01ldGFkYXRhID0gY29tcHV0ZWQoKCkgPT4ge1xuICBpZiAodHJhY2tJbmZvLnZhbHVlKVxuICAgIHJldHVybiBmbXRNZXRhZGF0YSh0cmFja0luZm8udmFsdWUpO1xuICByZXR1cm4gbnVsbDtcbn0pXG5cbmNvbnN0IG9yaWdpbmFsVHJhY2tzID0gY29tcHV0ZWQoKCkgPT4ge1xuICBpZiAodHJhY2tJbmZvLnZhbHVlKVxuICAgIHJldHVybiBmbXRPcmlnaW5hbFRyYWNrcyh0cmFja0luZm8udmFsdWUpO1xuICByZXR1cm4gbnVsbDtcbn0pXG5cbi8qKlxuICogRXh0cmFjdCBPcmlnaW5hbCB0cmFjayBpbmZvIGZyb20gdGhlIEFQSSByZXNwb25zZSBvYmplY3RcbiAqIEBwYXJhbSB0cmFja1xuICovXG5mdW5jdGlvbiBmbXRPcmlnaW5hbFRyYWNrcyh0cmFjazogVHJhY2tSZWFkRHRvKTogTWV0YWRhdGFbXSB7XG4gIGNvbnN0IG9yaWdpbmFsczogTWV0YWRhdGFbXSA9IFtdXG4gIGlmICh0cmFjay5vcmlnaW5hbClcbiAge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2sub3JpZ2luYWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9yaWdpbmFsOiBPcmlnaW5hbFRyYWNrUmVhZER0byA9IHRyYWNrLm9yaWdpbmFsW2ldO1xuXG4gICAgICBjb25zdCBvcmlnaW5hbEFsYnVtTmFtZSA9IG9yaWdpbmFsPy5hbGJ1bT8uZnVsbE5hbWU/Ll9kZWZhdWx0O1xuICAgICAgaWYgKCFvcmlnaW5hbEFsYnVtTmFtZSlcbiAgICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPbmUgb2YgdGhlIG9yaWdpbmFsIGFsYnVtJ3MgbmFtZSBpcyB1bmRlZmluZWRcIilcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIG9yaWdpbmFscy5wdXNoKHtuYW1lOiBvcmlnaW5hbEFsYnVtTmFtZSwgdmFsdWU6IDxzdHJpbmc+b3JpZ2luYWwudGl0bGU/LmVufSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3JpZ2luYWxzO1xufVxuXG5mdW5jdGlvbiBmbXRNZXRhZGF0YSh0cmFjazogVHJhY2tSZWFkRHRvKTogTWV0YWRhdGFbXSB7XG4gIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YVtdID0gW107XG4gIGNvbnN0IG1ldGFkYXRhSW5kZXggPSBbXG4gICAgJ3N0YWZmJyxcbiAgICAnYXJyYW5nZW1lbnQnLFxuICAgICd2b2NhbGlzdCcsXG4gICAgJ2x5cmljaXN0JyxcbiAgICAnZ2VucmUnXG4gIF1cblxuICBjb25zdCB0cmFja0RpY3QgPSB0cmFjayBhcyB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIHwgbnVsbCB9XG4gIGZvciAobGV0IGtub3duRGF0YUluZGV4IG9mIG1ldGFkYXRhSW5kZXgpIHtcbiAgICBjb25zdCBkID0gdHJhY2tEaWN0W2tub3duRGF0YUluZGV4XVxuICAgIGNvbnNvbGUubG9nKGQpXG4gICAgaWYgKGQ/Lmxlbmd0aCAhPSAwKSB7XG4gICAgICBtZXRhZGF0YS5wdXNoKHtuYW1lOiBrbm93bkRhdGFJbmRleCwgdmFsdWU6IGQuam9pbignLCcpfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGFkYXRhO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRUcmFja1BhZ2UodHJhY2tJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIEZldGNoIHRyYWNrXG4gIHRyYWNrSW5mby52YWx1ZSA9IGF3YWl0IHRyYWNrQXBpLmdldFRyYWNrKHtpZDogdHJhY2tJZH0pXG4gIGFsYnVtSW5mby52YWx1ZSA9IHRyYWNrSW5mby52YWx1ZT8uYWxidW07XG4gIGNvbnNvbGUubG9nKHRyYWNrSW5mby52YWx1ZSk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdNb3VudGVkJyk7XG4gIGF3YWl0IHNldFRyYWNrUGFnZSg8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLnRyYWNrSWQpXG4gIGNvbnNvbGUubG9nKGZtdE9yaWdpbmFsVHJhY2tzKDxUcmFja1JlYWREdG8+dHJhY2tJbmZvLnZhbHVlKSlcbiAgY29uc29sZS5sb2coZm10TWV0YWRhdGEoPFRyYWNrUmVhZER0bz50cmFja0luZm8udmFsdWUpKVxufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coJ1VwZGF0ZWQnKVxuICBhd2FpdCBzZXRUcmFja1BhZ2UoPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy50cmFja0lkKVxuICBjb25zb2xlLmxvZyhmbXRPcmlnaW5hbFRyYWNrcyg8VHJhY2tSZWFkRHRvPnRyYWNrSW5mby52YWx1ZSkpO1xufSlcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdGQSxNQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUNSLENBQUM7Ozs7QUFvQkQsVUFBTSxrQkFBa0I7QUFBQSxNQUN0QjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDLFFBQWtCLElBQUk7QUFBQSxNQUNoQztBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFrQixJQUFJO0FBQUEsTUFDaEM7QUFBQSxJQUFBO0FBR0YsVUFBTSxrQkFBa0I7QUFBQSxNQUN0QjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFFBQ1AsT0FBTztBQUFBLFFBQ1AsT0FBTyxDQUFDLFFBQWtCLElBQUk7QUFBQSxNQUNoQztBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFrQixJQUFJ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

import { Q as QImg } from "./QImg.f4e44421.js";
import { a3 as _export_sfc, a4 as defineComponent, aM as useRouter, aI as ApiConfigProvider, bc as AlbumApi, r as ref, c as computed, o as onMounted, bd as onUpdated, a7 as openBlock, a8 as createBlock, a9 as withCtx, an as createElementBlock, ab as createBaseVNode, d as createVNode, ac as toDisplayString, av as QSeparator, ag as createCommentVNode, a6 as unref, ae as QBtn, ao as createTextVNode } from "./index.bfbdb738.js";
import { Q as QTooltip, c as outlinedPlayArrow, u as outlinedStarBorder, x as outlinedMoreHoriz } from "./index.79c53e66.js";
import { Q as QTable } from "./QTable.41a3f204.js";
import { Q as QPage } from "./QPage.0eafd9a5.js";
import { f as formatDuration } from "./QMenu.babff4f4.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2tQYWdlLmQ0NGFjZmVlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvVHJhY2tQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIiB2LWlmPVwidHJhY2tJbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICA6c3JjPVwiYWxidW1JbmZvLmFsYnVtSW1hZ2UudXJsXCJcbiAgICAgICAgICByYXRpbz1cIjFcIj5cbiAgICAgICAgPC9xLWltZz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ib2R5MVwiPlRyYWNrPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJxLW1iLXNtLXNtIHEtbWItbm9uZSBxLW10LW1kXCI+e3sgdHJhY2tJbmZvLm5hbWUuX2RlZmF1bHQgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8uYWxidW1BcnRpc3RbMF0gfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgZm9ybWF0RHVyYXRpb24odHJhY2tJbmZvLmR1cmF0aW9uKSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj5cbiAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgIDxxLXRvb2x0aXA+UGxheTwvcS10b29sdGlwPlxuICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkU3RhckJvcmRlclwiPlxuICAgICAgICAgIDxxLXRvb2x0aXA+U2F2ZTwvcS10b29sdGlwPlxuICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCI+XG4gICAgICAgICAgPHEtdG9vbHRpcD5Nb3JlPC9xLXRvb2x0aXA+XG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgIDxxLXRhYmxlIDpyb3dzPVwib3JpZ2luYWxUcmFja3NcIlxuICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cIm9yaWdpbmFsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgIHRpdGxlPVwiT3JpZ2luYWxcIlxuICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJob3Jpem9udGFsXCJcbiAgICAgICAgICAgICAgICAgcm93LWtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XG4gICAgICAgICAgPCEtLSAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD4tLT5cblxuICAgICAgICAgIDwhLS0gICAgICAgICAgPC90ZW1wbGF0ZT4tLT5cbiAgICAgICAgPC9xLXRhYmxlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZFwiPlxuICAgICAgICA8cS10YWJsZSA6cm93cz1cInRyYWNrTWV0YWRhdGFcIlxuICAgICAgICAgICAgICAgICA6Y29sdW1ucz1cIm1ldGFkYXRhQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICAgIHRpdGxlPVwiTWV0YWRhdGFcIlxuICAgICAgICAgICAgICAgICBzZXBhcmF0b3I9XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgcm93LWtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICAgICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICAgICAgICAgICBoaWRlLWhlYWRlclxuICAgICAgICAgICAgICAgICBoaWRlLXBhZ2luYXRpb24+XG4gICAgICAgICAgPCEtLSAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD4tLT5cbiAgICAgICAgICA8IS0tICAgICAgICAgIDwvdGVtcGxhdGU+LS0+XG4gICAgICAgIDwvcS10YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnUGFnZU5hbWUnXG59KVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRNb3JlSG9yaXosXG4gIG91dGxpbmVkU3RhckJvcmRlclxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBBbGJ1bUFwaSB9IGZyb20gXCJhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaVwiO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8sIE9yaWdpbmFsVHJhY2tSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgY29tcHV0ZWQsIG9uTW91bnRlZCwgb25VcGRhdGVkLCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgZm9ybWF0RHVyYXRpb24gfSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tIFwic3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyXCI7XG5cbnR5cGUgTWV0YWRhdGEgPSB7IG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9O1xuXG5jb25zdCBtZXRhZGF0YUNvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnbWV0YWRhdGEnLFxuICAgIGxhYmVsOiAnRklFTEQnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cubmFtZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3ZhbHVlJyxcbiAgICBsYWJlbDogJ1ZBTFVFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBNZXRhZGF0YSkgPT4gcm93LnZhbHVlXG4gIH1cbl1cblxuY29uc3Qgb3JpZ2luYWxDb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ21ldGFkYXRhJyxcbiAgICBsYWJlbDogJ1RyYWNrJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBNZXRhZGF0YSkgPT4gcm93LnZhbHVlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndmFsdWUnLFxuICAgIGxhYmVsOiAnQWxidW0nLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cubmFtZVxuICB9XG5dXG5cbmNvbnN0IHBhZ2luYXRpb24gPSB7XG4gIHJvd3NQZXJQYWdlOiAwLFxuICBkZXNjZW5kaW5nOiB0cnVlLFxuICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy52YWx1ZVxufVxuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgYXBpQ29uZmlnID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKTtcbmNvbnN0IHRyYWNrQXBpID0gbmV3IEFsYnVtQXBpKGFwaUNvbmZpZyk7XG5jb25zdCB0cmFja0luZm8gPSByZWY8VHJhY2tSZWFkRHRvPigpO1xuY29uc3QgYWxidW1JbmZvID0gcmVmPEFsYnVtUmVhZER0bz4oKTtcblxuY29uc3QgdHJhY2tNZXRhZGF0YSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgaWYgKHRyYWNrSW5mby52YWx1ZSlcbiAgICByZXR1cm4gZm10TWV0YWRhdGEodHJhY2tJbmZvLnZhbHVlKTtcbiAgcmV0dXJuIG51bGw7XG59KVxuXG5jb25zdCBvcmlnaW5hbFRyYWNrcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgaWYgKHRyYWNrSW5mby52YWx1ZSlcbiAgICByZXR1cm4gZm10T3JpZ2luYWxUcmFja3ModHJhY2tJbmZvLnZhbHVlKTtcbiAgcmV0dXJuIG51bGw7XG59KVxuXG4vKipcbiAqIEV4dHJhY3QgT3JpZ2luYWwgdHJhY2sgaW5mbyBmcm9tIHRoZSBBUEkgcmVzcG9uc2Ugb2JqZWN0XG4gKiBAcGFyYW0gdHJhY2tcbiAqL1xuZnVuY3Rpb24gZm10T3JpZ2luYWxUcmFja3ModHJhY2s6IFRyYWNrUmVhZER0byk6IE1ldGFkYXRhW10ge1xuICBjb25zdCBvcmlnaW5hbHM6IE1ldGFkYXRhW10gPSBbXVxuICBpZiAodHJhY2sub3JpZ2luYWwpXG4gIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYWNrLm9yaWdpbmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvcmlnaW5hbDogT3JpZ2luYWxUcmFja1JlYWREdG8gPSB0cmFjay5vcmlnaW5hbFtpXTtcblxuICAgICAgY29uc3Qgb3JpZ2luYWxBbGJ1bU5hbWUgPSBvcmlnaW5hbD8uYWxidW0/LmZ1bGxOYW1lPy5fZGVmYXVsdDtcbiAgICAgIGlmICghb3JpZ2luYWxBbGJ1bU5hbWUpXG4gICAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT25lIG9mIHRoZSBvcmlnaW5hbCBhbGJ1bSdzIG5hbWUgaXMgdW5kZWZpbmVkXCIpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5hbHMucHVzaCh7bmFtZTogb3JpZ2luYWxBbGJ1bU5hbWUsIHZhbHVlOiA8c3RyaW5nPm9yaWdpbmFsLnRpdGxlPy5lbn0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9yaWdpbmFscztcbn1cblxuZnVuY3Rpb24gZm10TWV0YWRhdGEodHJhY2s6IFRyYWNrUmVhZER0byk6IE1ldGFkYXRhW10ge1xuICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGFbXSA9IFtdO1xuICBjb25zdCBtZXRhZGF0YUluZGV4ID0gW1xuICAgICdzdGFmZicsXG4gICAgJ2FycmFuZ2VtZW50JyxcbiAgICAndm9jYWxpc3QnLFxuICAgICdseXJpY2lzdCcsXG4gICAgJ2dlbnJlJ1xuICBdXG5cbiAgY29uc3QgdHJhY2tEaWN0ID0gdHJhY2sgYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmdbXSB8IG51bGwgfVxuICBmb3IgKGxldCBrbm93bkRhdGFJbmRleCBvZiBtZXRhZGF0YUluZGV4KSB7XG4gICAgY29uc3QgZCA9IHRyYWNrRGljdFtrbm93bkRhdGFJbmRleF1cbiAgICBjb25zb2xlLmxvZyhkKVxuICAgIGlmIChkPy5sZW5ndGggIT0gMCkge1xuICAgICAgbWV0YWRhdGEucHVzaCh7bmFtZToga25vd25EYXRhSW5kZXgsIHZhbHVlOiBkLmpvaW4oJywnKX0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXRhZGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0VHJhY2tQYWdlKHRyYWNrSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBGZXRjaCB0cmFja1xuICB0cmFja0luZm8udmFsdWUgPSBhd2FpdCB0cmFja0FwaS5nZXRUcmFjayh7aWQ6IHRyYWNrSWR9KVxuICBhbGJ1bUluZm8udmFsdWUgPSB0cmFja0luZm8udmFsdWU/LmFsYnVtO1xuICBjb25zb2xlLmxvZyh0cmFja0luZm8udmFsdWUpO1xufVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBjb25zb2xlLmxvZygnTW91bnRlZCcpO1xuICBhd2FpdCBzZXRUcmFja1BhZ2UoPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy50cmFja0lkKVxuICBjb25zb2xlLmxvZyhmbXRPcmlnaW5hbFRyYWNrcyg8VHJhY2tSZWFkRHRvPnRyYWNrSW5mby52YWx1ZSkpXG4gIGNvbnNvbGUubG9nKGZtdE1ldGFkYXRhKDxUcmFja1JlYWREdG8+dHJhY2tJbmZvLnZhbHVlKSlcbn0pXG5cbm9uVXBkYXRlZChhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdVcGRhdGVkJylcbiAgYXdhaXQgc2V0VHJhY2tQYWdlKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMudHJhY2tJZClcbiAgY29uc29sZS5sb2coZm10T3JpZ2luYWxUcmFja3MoPFRyYWNrUmVhZER0bz50cmFja0luZm8udmFsdWUpKTtcbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RkEsTUFBQSxjQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFDUixDQUFDOzs7O0FBb0JELFVBQU0sa0JBQWtCO0FBQUEsTUFDdEI7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFrQixJQUFJO0FBQUEsTUFDaEM7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsUUFDUCxPQUFPO0FBQUEsUUFDUCxPQUFPLENBQUMsUUFBa0IsSUFBSTtBQUFBLE1BQ2hDO0FBQUEsSUFBQTtBQUdGLFVBQU0sa0JBQWtCO0FBQUEsTUFDdEI7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLE9BQU8sQ0FBQyxRQUFrQixJQUFJO0FBQUEsTUFDaEM7QUFB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

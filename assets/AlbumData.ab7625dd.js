import { Q as QImg } from "./QImg.efb57f2d.js";
import { a2 as _export_sfc, a3 as defineComponent, aA as useRouter, b2 as AlbumApi, b3 as apiConfig, r as ref, c as computed, o as onMounted, b4 as onUpdated, a5 as openBlock, a6 as createBlock, a7 as withCtx, al as createElementBlock, a9 as createBaseVNode, d as createVNode, a4 as unref, aa as toDisplayString, as as QSeparator, ad as createCommentVNode, l as QBtn } from "./index.6d1b1638.js";
import { Q as QTable } from "./QTable.308bee86.js";
import { Q as QTd } from "./QTd.341bd329.js";
import { Q as QPage } from "./QPage.ba85c39c.js";
import { m as sumDurations, f as formatDuration } from "./durationUtils.ada1e9cf.js";
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
const _hoisted_14 = { class: "q-pa-md" };
const _hoisted_15 = { class: "q-pa-md" };
const _hoisted_16 = { class: "my-table-details" };
const _hoisted_17 = { class: "q-pa-md" };
const __default__ = defineComponent({
  name: "AlbumPage"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const router = useRouter();
    const albumApi = new AlbumApi(apiConfig);
    const albumInfo = ref();
    const trackList = ref();
    const albumAssets = ref([]);
    const albumMetadata = ref([]);
    const getAlbumImage = computed(() => {
      var _a, _b, _c, _d;
      return ((_b = (_a = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _a.albumImage) == null ? void 0 : _b.url) === null ? "http://via.placeholder.com/640x360" : (_d = (_c = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _c.albumImage) == null ? void 0 : _d.url;
    });
    async function fetchAlbum(albumId) {
      return albumApi.getAlbum({ id: albumId });
    }
    function setAlbumMetadata(albumData) {
      const metadata = [];
      const metadataIndex = [
        "releaseDate",
        "releaseConvention",
        "catalogNumber",
        "numberOfDiscs",
        "website",
        "albumArtist",
        "dataSource"
      ];
      const albumDict = albumData;
      for (let key of metadataIndex) {
        const d = albumDict[key];
        console.log(d);
        if (d) {
          metadata.push({ name: key, value: d });
        }
      }
      albumMetadata.value = metadata;
    }
    function setAlbumAsset() {
      var _a, _b, _c, _d, _e, _f, _g;
      if ((_a = albumInfo.value) == null ? void 0 : _a.albumImage) {
        (_c = albumAssets.value) == null ? void 0 : _c.push((_b = albumInfo.value) == null ? void 0 : _b.albumImage);
      }
      if ((_d = albumInfo.value) == null ? void 0 : _d.otherImages) {
        (_f = albumAssets.value) == null ? void 0 : _f.push(...(_e = albumInfo.value) == null ? void 0 : _e.otherImages);
      }
      (_g = trackList.value) == null ? void 0 : _g.forEach((e) => {
        var _a2;
        if (e.trackFile)
          (_a2 = albumAssets.value) == null ? void 0 : _a2.push(e == null ? void 0 : e.trackFile);
      });
    }
    async function setAlbumPage() {
      var _a, _b, _c;
      trackList.value = [];
      albumInfo.value = void 0;
      albumAssets.value = [];
      albumMetadata.value = [];
      const albumData = await fetchAlbum(router.currentRoute.value.params.albumId);
      albumInfo.value = albumData;
      if ((_a = albumInfo.value) == null ? void 0 : _a.tracks) {
        (_b = albumInfo.value) == null ? void 0 : _b.tracks.sort((ta, tb) => {
          return ta.index - tb.index;
        });
        console.log(albumInfo.value);
        trackList.value = (_c = albumInfo.value) == null ? void 0 : _c.tracks;
        setAlbumAsset();
        setAlbumMetadata(albumData);
      }
    }
    onMounted(async () => {
      await setAlbumPage();
    });
    onUpdated(async () => {
      await setAlbumPage();
    });
    const tracksColumn = [
      {
        name: "index",
        required: true,
        label: "#",
        align: "center",
        field: (row) => row.index,
        format: (val) => `${val}`,
        style: "width: 100px",
        sortable: true
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
        name: "id",
        required: true,
        label: "ID",
        align: "left",
        field: (row) => row.id,
        format: (val) => `${val}`,
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
    const albumAssetColumn = [
      {
        name: "id",
        required: true,
        label: "ID",
        align: "left",
        field: (row) => row,
        classes: "text-bold",
        sortable: false
      },
      {
        name: "name",
        required: true,
        label: "NAME",
        align: "left",
        field: (row) => row.assetName,
        format: (val) => `${val}`,
        classes: "text-bold",
        sortable: false
      },
      {
        name: "mime",
        required: true,
        label: "MIME",
        align: "left",
        field: (row) => row.assetMime,
        format: (val) => `${val}`,
        classes: "text-bold",
        sortable: false
      },
      {
        name: "large",
        required: true,
        label: "LARGE",
        align: "right",
        field: (row) => row.large,
        format: (val) => `${val}`,
        classes: "text-bold",
        sortable: false
      }
    ];
    const albumMetadataColumns = [
      {
        name: "field",
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
    computed(() => {
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
                      createBaseVNode("div", _hoisted_12, toDisplayString(albumInfo.value.tracks.length) + " Tracks", 1),
                      createVNode(QSeparator, {
                        vertical: "",
                        spaced: ""
                      }),
                      createBaseVNode("div", _hoisted_13, toDisplayString(albumInfo.value.id), 1)
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_14, [
              createVNode(QTable, {
                title: "ALBUM METADATA",
                rows: albumMetadata.value,
                columns: albumMetadataColumns,
                "row-key": "field",
                "virtual-scroll": "",
                "hide-pagination": "",
                pagination
              }, null, 8, ["rows"])
            ]),
            createBaseVNode("div", _hoisted_15, [
              createVNode(QTable, {
                title: "ALBUM ASSETS",
                rows: albumAssets.value,
                columns: albumAssetColumn,
                "row-key": "name",
                "virtual-scroll": "",
                "hide-pagination": "",
                pagination
              }, {
                "body-cell-id": withCtx((props) => [
                  createVNode(QTd, { props }, {
                    default: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(QBtn, {
                          label: props.value.assetId,
                          href: props.value.url,
                          target: "_blank",
                          unelevated: ""
                        }, null, 8, ["label", "href"])
                      ]),
                      createBaseVNode("div", _hoisted_16, toDisplayString(props.row.details), 1)
                    ]),
                    _: 2
                  }, 1032, ["props"])
                ]),
                _: 1
              }, 8, ["rows"])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createVNode(QTable, {
                title: "TRACKS",
                rows: trackList.value,
                columns: tracksColumn,
                "row-key": "name",
                "virtual-scroll": "",
                "hide-pagination": "",
                pagination
              }, null, 8, ["rows"])
            ])
          ];
        }),
        _: 1
      });
    };
  }
});
var AlbumData = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AlbumData.vue"]]);
export { AlbumData as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1EYXRhLmFiNzYyNWRkLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1EYXRhLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPHEtcGFnZSBwYWRkaW5nPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCIgdi1pZj1cImFsYnVtSW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxyXG4gICAgICAgIDxxLWltZ1xyXG4gICAgICAgICAgOnNyYz1cImdldEFsYnVtSW1hZ2VcIlxyXG4gICAgICAgICAgcmF0aW89XCIxXCI+XHJcbiAgICAgICAgPC9xLWltZz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBpdGVtcy1lbmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYm9keTFcIj5BbGJ1bTwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJxLW1iLXNtLXNtIHEtbWItbm9uZSBxLW10LW1kXCI+e3sgYWxidW1JbmZvLmFsYnVtTmFtZS5fZGVmYXVsdCB9fTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIHt7IGFsYnVtSW5mby5hbGJ1bUFydGlzdFswXSB9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkIHYtaWY9XCJhbGJ1bUluZm8ucmVsZWFzZURhdGVcIj48L3Etc2VwYXJhdG9yPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7IGFsYnVtSW5mby5yZWxlYXNlRGF0ZT8udG9Mb2NhbGVEYXRlU3RyaW5nKCkgfX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkPjwvcS1zZXBhcmF0b3I+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLnRyYWNrcy5sZW5ndGggfX0gVHJhY2tzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZD48L3Etc2VwYXJhdG9yPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IGFsYnVtSW5mby5pZCB9fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuPCEtLSAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZFwiPi0tPlxyXG48IS0tICAgICAgICA8cS1idG4gZmFiLW1pbmkgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgOmljb249XCJvdXRsaW5lZEVkaXRcIj4tLT5cclxuPCEtLSAgICAgICAgICA8cS10b29sdGlwPkVkaXQ8L3EtdG9vbHRpcD4tLT5cclxuPCEtLSAgICAgICAgPC9xLWJ0bj4tLT5cclxuPCEtLSAgICAgIDwvZGl2Pi0tPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInEtcGEtbWRcIj5cclxuICAgICAgPHEtdGFibGVcclxuICAgICAgICB0aXRsZT1cIkFMQlVNIE1FVEFEQVRBXCJcclxuICAgICAgICA6cm93cz1cImFsYnVtTWV0YWRhdGFcIlxyXG4gICAgICAgIDpjb2x1bW5zPVwiYWxidW1NZXRhZGF0YUNvbHVtbnNcIlxyXG4gICAgICAgIHJvdy1rZXk9XCJmaWVsZFwiXHJcbiAgICAgICAgdmlydHVhbC1zY3JvbGxcclxuICAgICAgICBoaWRlLXBhZ2luYXRpb25cclxuICAgICAgICA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInEtcGEtbWRcIj5cclxuICAgICAgPHEtdGFibGVcclxuICAgICAgICB0aXRsZT1cIkFMQlVNIEFTU0VUU1wiXHJcbiAgICAgICAgOnJvd3M9XCJhbGJ1bUFzc2V0c1wiXHJcbiAgICAgICAgOmNvbHVtbnM9XCJhbGJ1bUFzc2V0Q29sdW1uXCJcclxuICAgICAgICByb3cta2V5PVwibmFtZVwiXHJcbiAgICAgICAgdmlydHVhbC1zY3JvbGxcclxuICAgICAgICBoaWRlLXBhZ2luYXRpb25cclxuICAgICAgICA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtaWQ9XCJwcm9wc1wiPlxyXG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8cS1idG4gOmxhYmVsPVwicHJvcHMudmFsdWUuYXNzZXRJZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwicHJvcHMudmFsdWUudXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZD48L3EtYnRuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LXRhYmxlLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cuZGV0YWlscyB9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvcS10ZD5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3EtdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxyXG4gICAgICA8cS10YWJsZVxyXG4gICAgICAgIHRpdGxlPVwiVFJBQ0tTXCJcclxuICAgICAgICA6cm93cz1cInRyYWNrTGlzdFwiXHJcbiAgICAgICAgOmNvbHVtbnM9XCJ0cmFja3NDb2x1bW5cIlxyXG4gICAgICAgIHJvdy1rZXk9XCJuYW1lXCJcclxuICAgICAgICB2aXJ0dWFsLXNjcm9sbFxyXG4gICAgICAgIGhpZGUtcGFnaW5hdGlvblxyXG4gICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L3EtcGFnZT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcclxuICBuYW1lOiAnQWxidW1QYWdlJ1xyXG59KVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7XHJcbiAgb3V0bGluZWRPcGVuSW5OZXdcclxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XHJcblxyXG5pbXBvcnQge2NvbXB1dGVkLCBvbk1vdW50ZWQsIG9uVXBkYXRlZCwgcmVmfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBhcGlDb25maWcgfSBmcm9tICdib290L2JhY2tlbmQtYXBpJztcclxuaW1wb3J0IHsgQWxidW1BcGkgfSBmcm9tICdhcHAvbXVzaWMtZGF0YS1zZXJ2aWNlLWFwaSc7XHJcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvLCBBc3NldFJlYWREdG8gfSBmcm9tICdhcHAvbXVzaWMtZGF0YS1zZXJ2aWNlLWFwaSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBmb3JtYXREdXJhdGlvbiwgc3VtRHVyYXRpb25zIH0gZnJvbSAnc3JjL3V0aWxzL2R1cmF0aW9uVXRpbHMnO1xyXG5cclxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5jb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShhcGlDb25maWcpO1xyXG5jb25zdCBhbGJ1bUluZm8gPSByZWY8QWxidW1SZWFkRHRvPigpO1xyXG5jb25zdCB0cmFja0xpc3QgPSByZWY8VHJhY2tSZWFkRHRvW10+KCk7XHJcbmNvbnN0IGFsYnVtQXNzZXRzID0gcmVmPEFzc2V0UmVhZER0b1tdPihbXSk7XHJcbmNvbnN0IGFsYnVtTWV0YWRhdGEgPSByZWY8TWV0YWRhdGFbXT4oW10pO1xyXG5cclxuY29uc3QgZ2V0QWxidW1JbWFnZSA9IGNvbXB1dGVkKCgpID0+IHtcclxuICByZXR1cm4gYWxidW1JbmZvPy52YWx1ZT8uYWxidW1JbWFnZT8udXJsID09PSBudWxsID8gJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHgzNjAnIDogYWxidW1JbmZvPy52YWx1ZT8uYWxidW1JbWFnZT8udXJsXHJcbn0pXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGJ1bShhbGJ1bUlkOiBzdHJpbmcpOiBQcm9taXNlPEFsYnVtUmVhZER0bz4ge1xyXG4gIHJldHVybiBhbGJ1bUFwaS5nZXRBbGJ1bSh7aWQ6IGFsYnVtSWR9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWxidW1NZXRhZGF0YShhbGJ1bURhdGE6IEFsYnVtUmVhZER0bykge1xyXG4gIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YVtdID0gW107XHJcbiAgY29uc3QgbWV0YWRhdGFJbmRleCA9IFtcclxuICAgICdyZWxlYXNlRGF0ZScsXHJcbiAgICAncmVsZWFzZUNvbnZlbnRpb24nLFxyXG4gICAgJ2NhdGFsb2dOdW1iZXInLFxyXG4gICAgJ251bWJlck9mRGlzY3MnLFxyXG4gICAgJ3dlYnNpdGUnLFxyXG4gICAgJ2FsYnVtQXJ0aXN0JyxcclxuICAgICdkYXRhU291cmNlJ1xyXG4gIF1cclxuXHJcbiAgY29uc3QgYWxidW1EaWN0ID0gYWxidW1EYXRhIGFzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cclxuXHJcbiAgZm9yIChsZXQga2V5IG9mIG1ldGFkYXRhSW5kZXgpIHtcclxuICAgIGNvbnN0ICBkID0gYWxidW1EaWN0W2tleV07XHJcbiAgICBjb25zb2xlLmxvZyhkKTtcclxuICAgIGlmIChkKSB7XHJcbiAgICAgIG1ldGFkYXRhLnB1c2goe25hbWU6IGtleSwgdmFsdWU6IGR9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFsYnVtTWV0YWRhdGEudmFsdWUgPSBtZXRhZGF0YTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0QWxidW1Bc3NldCgpIHtcclxuICAvLyBUT0RPOiBORVdFU1QgVVBEQVRFIENIQU5HRUQgT1RIRVJJTUFHRVMgVE8gT1RIRVJGSUxFU1xyXG4gIGlmIChhbGJ1bUluZm8udmFsdWU/LmFsYnVtSW1hZ2UpIHtcclxuICAgIGFsYnVtQXNzZXRzLnZhbHVlPy5wdXNoKGFsYnVtSW5mby52YWx1ZT8uYWxidW1JbWFnZSlcclxuICB9XHJcblxyXG4gIGlmIChhbGJ1bUluZm8udmFsdWU/Lm90aGVySW1hZ2VzKSB7XHJcbiAgICBhbGJ1bUFzc2V0cy52YWx1ZT8ucHVzaCguLi5hbGJ1bUluZm8udmFsdWU/Lm90aGVySW1hZ2VzKTtcclxuICB9XHJcblxyXG4gIHRyYWNrTGlzdC52YWx1ZT8uZm9yRWFjaChlID0+IHtcclxuICAgIGlmIChlLnRyYWNrRmlsZSlcclxuICAgICAgYWxidW1Bc3NldHMudmFsdWU/LnB1c2goZT8udHJhY2tGaWxlKTtcclxuICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZXRBbGJ1bVBhZ2UoKSB7XHJcbiAgdHJhY2tMaXN0LnZhbHVlID0gW107XHJcbiAgYWxidW1JbmZvLnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gIGFsYnVtQXNzZXRzLnZhbHVlID0gW107XHJcbiAgYWxidW1NZXRhZGF0YS52YWx1ZSA9W107XHJcblxyXG4gIGNvbnN0IGFsYnVtRGF0YSA9IGF3YWl0IGZldGNoQWxidW0oPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hbGJ1bUlkKTtcclxuICBhbGJ1bUluZm8udmFsdWUgPSBhbGJ1bURhdGE7XHJcbiAgaWYgKGFsYnVtSW5mby52YWx1ZT8udHJhY2tzKSB7XHJcbiAgICBhbGJ1bUluZm8udmFsdWU/LnRyYWNrcy5zb3J0KCh0YSwgdGIpID0+IHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cclxuICAgICAgcmV0dXJuIHRhLmluZGV4ISAtIHRiLmluZGV4IVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGFsYnVtSW5mby52YWx1ZSlcclxuICAgIHRyYWNrTGlzdC52YWx1ZSA9IGFsYnVtSW5mby52YWx1ZT8udHJhY2tzO1xyXG5cclxuICAgIHNldEFsYnVtQXNzZXQoKTtcclxuICAgIHNldEFsYnVtTWV0YWRhdGEoYWxidW1EYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XHJcbn0pXHJcblxyXG5vblVwZGF0ZWQoYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IHNldEFsYnVtUGFnZSgpO1xyXG59KVxyXG5cclxuY29uc3QgdHJhY2tzQ29sdW1uID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdpbmRleCcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGxhYmVsOiAnIycsXHJcbiAgICBhbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuaW5kZXgsXHJcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXHJcbiAgICBzdHlsZTogJ3dpZHRoOiAxMDBweCcsXHJcbiAgICBzb3J0YWJsZTogdHJ1ZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ3RpdGxlJyxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgbGFiZWw6ICdUSVRMRScsXHJcbiAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93Lm5hbWU/Ll9kZWZhdWx0LFxyXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxyXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXHJcbiAgICBzb3J0YWJsZTogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdpZCcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGxhYmVsOiAnSUQnLFxyXG4gICAgYWxpZ246ICdsZWZ0JyxcclxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5pZCxcclxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcclxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxyXG4gICAgc29ydGFibGU6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBsYWJlbDogJ0RVUkFUSU9OJyxcclxuICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmR1cmF0aW9uLFxyXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+IGAke2Zvcm1hdER1cmF0aW9uKHZhbCl9YCxcclxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxyXG4gICAgc29ydGFibGU6IGZhbHNlXHJcbiAgfVxyXG5dXHJcblxyXG5jb25zdCBhbGJ1bUFzc2V0Q29sdW1uID0gW1xyXG4gIHtcclxuICAgIG5hbWU6ICdpZCcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGxhYmVsOiAnSUQnLFxyXG4gICAgYWxpZ246ICdsZWZ0JyxcclxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdyxcclxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxyXG4gICAgc29ydGFibGU6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnbmFtZScsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGxhYmVsOiAnTkFNRScsXHJcbiAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LmFzc2V0TmFtZSxcclxuICAgIGZvcm1hdDogKHZhbDogc3RyaW5nKSA9PiBgJHt2YWx9YCxcclxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxyXG4gICAgc29ydGFibGU6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnbWltZScsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGxhYmVsOiAnTUlNRScsXHJcbiAgICBhbGlnbjogJ2xlZnQnLFxyXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LmFzc2V0TWltZSxcclxuICAgIGZvcm1hdDogKHZhbDogc3RyaW5nKSA9PiBgJHt2YWx9YCxcclxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxyXG4gICAgc29ydGFibGU6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnbGFyZ2UnLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBsYWJlbDogJ0xBUkdFJyxcclxuICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LmxhcmdlLFxyXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+IGAke3ZhbH1gLFxyXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXHJcbiAgICBzb3J0YWJsZTogZmFsc2VcclxuICB9XHJcbl1cclxuXHJcbnR5cGUgTWV0YWRhdGEgPSB7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVxyXG5cclxuY29uc3QgYWxidW1NZXRhZGF0YUNvbHVtbnMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ2ZpZWxkJyxcclxuICAgIGxhYmVsOiAnRklFTEQnLFxyXG4gICAgYWxpZ246ICdsZWZ0JyxcclxuICAgIGZpZWxkOiAocm93OiBNZXRhZGF0YSkgPT4gcm93Lm5hbWVcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICd2YWx1ZScsXHJcbiAgICBsYWJlbDogJ1ZBTFVFJyxcclxuICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy52YWx1ZVxyXG4gIH1cclxuXVxyXG5cclxubGV0IHRvdGFsRHVyYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgbGV0IGFsbER1cmF0aW9uczogc3RyaW5nW10gPSBbXVxyXG4gIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzPy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgaWYgKHQuZHVyYXRpb24pIGFsbER1cmF0aW9ucy5wdXNoKHQuZHVyYXRpb24pXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHN1bUR1cmF0aW9ucyhhbGxEdXJhdGlvbnMpO1xyXG59KVxyXG5cclxuY29uc3QgcGFnaW5hdGlvbiA9IHtcclxuICByb3dzUGVyUGFnZTogMCxcclxuICBkZXNjZW5kaW5nOiB0cnVlXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6WyJfYSJdLCJt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

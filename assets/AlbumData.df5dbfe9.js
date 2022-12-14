import { Q as QImg } from "./QImg.276e5a6d.js";
import { a2 as _export_sfc, a3 as defineComponent, aA as useRouter, b2 as AlbumApi, b3 as apiConfig, r as ref, c as computed, o as onMounted, b4 as onUpdated, a5 as openBlock, a6 as createBlock, a7 as withCtx, al as createElementBlock, a9 as createBaseVNode, d as createVNode, a4 as unref, aa as toDisplayString, as as QSeparator, ad as createCommentVNode, l as QBtn } from "./index.e1084ec4.js";
import { Q as QTable } from "./QTable.0cb1beac.js";
import { Q as QTd } from "./QTd.b1ed1303.js";
import { Q as QPage } from "./QPage.f56883a0.js";
import { m as sumDurations, f as formatDuration } from "./durationUtils.f4258b37.js";
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
      var _a, _b, _c, _d, _e, _f;
      return ((_c = (_b = (_a = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.medium) == null ? void 0 : _c.url) === null ? "http://via.placeholder.com/640x360" : (_f = (_e = (_d = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _d.thumbnail) == null ? void 0 : _e.medium) == null ? void 0 : _f.url;
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
      var _a, _b, _c, _d, _e, _f, _g, _h;
      if ((_b = (_a = albumInfo.value) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.original) {
        (_d = albumAssets.value) == null ? void 0 : _d.push((_c = albumInfo.value) == null ? void 0 : _c.thumbnail.original);
      }
      if ((_e = albumInfo.value) == null ? void 0 : _e.otherFiles) {
        (_g = albumAssets.value) == null ? void 0 : _g.push(...(_f = albumInfo.value) == null ? void 0 : _f.otherFiles);
      }
      (_h = trackList.value) == null ? void 0 : _h.forEach((e) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1EYXRhLmRmNWRiZmU5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1EYXRhLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGhcIiB2LWlmPVwiYWxidW1JbmZvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICA6c3JjPVwiZ2V0QWxidW1JbWFnZVwiXG4gICAgICAgICAgcmF0aW89XCIxXCI+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYm9keTFcIj5BbGJ1bTwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPnt7IGFsYnVtSW5mby5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2gzPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8uYWxidW1BcnRpc3RbMF0gfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLnRyYWNrcy5sZW5ndGggfX0gVHJhY2tzPC9kaXY+XG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLmlkIH19PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjwhLS0gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj4tLT5cbjwhLS0gICAgICAgIDxxLWJ0biBmYWItbWluaSBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkRWRpdFwiPi0tPlxuPCEtLSAgICAgICAgICA8cS10b29sdGlwPkVkaXQ8L3EtdG9vbHRpcD4tLT5cbjwhLS0gICAgICAgIDwvcS1idG4+LS0+XG48IS0tICAgICAgPC9kaXY+LS0+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxuICAgICAgPHEtdGFibGVcbiAgICAgICAgdGl0bGU9XCJBTEJVTSBNRVRBREFUQVwiXG4gICAgICAgIDpyb3dzPVwiYWxidW1NZXRhZGF0YVwiXG4gICAgICAgIDpjb2x1bW5zPVwiYWxidW1NZXRhZGF0YUNvbHVtbnNcIlxuICAgICAgICByb3cta2V5PVwiZmllbGRcIlxuICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICBoaWRlLXBhZ2luYXRpb25cbiAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxuICAgICAgPHEtdGFibGVcbiAgICAgICAgdGl0bGU9XCJBTEJVTSBBU1NFVFNcIlxuICAgICAgICA6cm93cz1cImFsYnVtQXNzZXRzXCJcbiAgICAgICAgOmNvbHVtbnM9XCJhbGJ1bUFzc2V0Q29sdW1uXCJcbiAgICAgICAgcm93LWtleT1cIm5hbWVcIlxuICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICBoaWRlLXBhZ2luYXRpb25cbiAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtaWQ9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cS1idG4gOmxhYmVsPVwicHJvcHMudmFsdWUuYXNzZXRJZFwiXG4gICAgICAgICAgICAgICAgICAgICA6aHJlZj1cInByb3BzLnZhbHVlLnVybFwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICB1bmVsZXZhdGVkPjwvcS1idG4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS10YWJsZS1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5kZXRhaWxzIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3EtdGFibGU+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxuICAgICAgPHEtdGFibGVcbiAgICAgICAgdGl0bGU9XCJUUkFDS1NcIlxuICAgICAgICA6cm93cz1cInRyYWNrTGlzdFwiXG4gICAgICAgIDpjb2x1bW5zPVwidHJhY2tzQ29sdW1uXCJcbiAgICAgICAgcm93LWtleT1cIm5hbWVcIlxuICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICBoaWRlLXBhZ2luYXRpb25cbiAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdBbGJ1bVBhZ2UnXG59KVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZE9wZW5Jbk5ld1xufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7Y29tcHV0ZWQsIG9uTW91bnRlZCwgb25VcGRhdGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyBhcGlDb25maWcgfSBmcm9tICdib290L2JhY2tlbmQtYXBpJztcbmltcG9ydCB7IEFsYnVtQXBpIH0gZnJvbSAnYXBwL211c2ljLWRhdGEtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG8sIEFzc2V0UmVhZER0byB9IGZyb20gJ2FwcC9tdXNpYy1kYXRhLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgZm9ybWF0RHVyYXRpb24sIHN1bUR1cmF0aW9ucyB9IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmNvbnN0IGFsYnVtQXBpID0gbmV3IEFsYnVtQXBpKGFwaUNvbmZpZyk7XG5jb25zdCBhbGJ1bUluZm8gPSByZWY8QWxidW1SZWFkRHRvPigpO1xuY29uc3QgdHJhY2tMaXN0ID0gcmVmPFRyYWNrUmVhZER0b1tdPigpO1xuY29uc3QgYWxidW1Bc3NldHMgPSByZWY8QXNzZXRSZWFkRHRvW10+KFtdKTtcbmNvbnN0IGFsYnVtTWV0YWRhdGEgPSByZWY8TWV0YWRhdGFbXT4oW10pO1xuXG5jb25zdCBnZXRBbGJ1bUltYWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybCA9PT0gbnVsbCA/ICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4MzYwJ1xuICAgIDogYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybFxufSlcblxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFsYnVtKGFsYnVtSWQ6IHN0cmluZyk6IFByb21pc2U8QWxidW1SZWFkRHRvPiB7XG4gIHJldHVybiBhbGJ1bUFwaS5nZXRBbGJ1bSh7aWQ6IGFsYnVtSWR9KTtcbn1cblxuZnVuY3Rpb24gc2V0QWxidW1NZXRhZGF0YShhbGJ1bURhdGE6IEFsYnVtUmVhZER0bykge1xuICBjb25zdCBtZXRhZGF0YTogTWV0YWRhdGFbXSA9IFtdO1xuICBjb25zdCBtZXRhZGF0YUluZGV4ID0gW1xuICAgICdyZWxlYXNlRGF0ZScsXG4gICAgJ3JlbGVhc2VDb252ZW50aW9uJyxcbiAgICAnY2F0YWxvZ051bWJlcicsXG4gICAgJ251bWJlck9mRGlzY3MnLFxuICAgICd3ZWJzaXRlJyxcbiAgICAnYWxidW1BcnRpc3QnLFxuICAgICdkYXRhU291cmNlJ1xuICBdXG5cbiAgY29uc3QgYWxidW1EaWN0ID0gYWxidW1EYXRhIGFzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cblxuICBmb3IgKGxldCBrZXkgb2YgbWV0YWRhdGFJbmRleCkge1xuICAgIGNvbnN0ICBkID0gYWxidW1EaWN0W2tleV07XG4gICAgY29uc29sZS5sb2coZCk7XG4gICAgaWYgKGQpIHtcbiAgICAgIG1ldGFkYXRhLnB1c2goe25hbWU6IGtleSwgdmFsdWU6IGR9KTtcbiAgICB9XG4gIH1cblxuICBhbGJ1bU1ldGFkYXRhLnZhbHVlID0gbWV0YWRhdGE7XG59XG5cbmZ1bmN0aW9uIHNldEFsYnVtQXNzZXQoKSB7XG4gIC8vIFRPRE86IE5FV0VTVCBVUERBVEUgQ0hBTkdFRCBPVEhFUklNQUdFUyBUTyBPVEhFUkZJTEVTXG4gIGlmIChhbGJ1bUluZm8udmFsdWU/LnRodW1ibmFpbD8ub3JpZ2luYWwpIHtcbiAgICBhbGJ1bUFzc2V0cy52YWx1ZT8ucHVzaChhbGJ1bUluZm8udmFsdWU/LnRodW1ibmFpbC5vcmlnaW5hbClcbiAgfVxuXG4gIGlmIChhbGJ1bUluZm8udmFsdWU/Lm90aGVyRmlsZXMpIHtcbiAgICBhbGJ1bUFzc2V0cy52YWx1ZT8ucHVzaCguLi5hbGJ1bUluZm8udmFsdWU/Lm90aGVyRmlsZXMpO1xuICB9XG5cbiAgdHJhY2tMaXN0LnZhbHVlPy5mb3JFYWNoKGUgPT4ge1xuICAgIGlmIChlLnRyYWNrRmlsZSlcbiAgICAgIGFsYnVtQXNzZXRzLnZhbHVlPy5wdXNoKGU/LnRyYWNrRmlsZSk7XG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEFsYnVtUGFnZSgpIHtcbiAgdHJhY2tMaXN0LnZhbHVlID0gW107XG4gIGFsYnVtSW5mby52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgYWxidW1Bc3NldHMudmFsdWUgPSBbXTtcbiAgYWxidW1NZXRhZGF0YS52YWx1ZSA9W107XG5cbiAgY29uc3QgYWxidW1EYXRhID0gYXdhaXQgZmV0Y2hBbGJ1bSg8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLmFsYnVtSWQpO1xuICBhbGJ1bUluZm8udmFsdWUgPSBhbGJ1bURhdGE7XG4gIGlmIChhbGJ1bUluZm8udmFsdWU/LnRyYWNrcykge1xuICAgIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzLnNvcnQoKHRhLCB0YikgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgIHJldHVybiB0YS5pbmRleCEgLSB0Yi5pbmRleCFcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGFsYnVtSW5mby52YWx1ZSlcbiAgICB0cmFja0xpc3QudmFsdWUgPSBhbGJ1bUluZm8udmFsdWU/LnRyYWNrcztcblxuICAgIHNldEFsYnVtQXNzZXQoKTtcbiAgICBzZXRBbGJ1bU1ldGFkYXRhKGFsYnVtRGF0YSk7XG4gIH1cbn1cblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XG59KVxuXG5vblVwZGF0ZWQoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzZXRBbGJ1bVBhZ2UoKTtcbn0pXG5cbmNvbnN0IHRyYWNrc0NvbHVtbiA9IFtcbiAge1xuICAgIG5hbWU6ICdpbmRleCcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICcjJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmluZGV4LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBzdHlsZTogJ3dpZHRoOiAxMDBweCcsXG4gICAgc29ydGFibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0aXRsZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdUSVRMRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cubmFtZT8uX2RlZmF1bHQsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2lkJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ0lEJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5pZCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5kdXJhdGlvbixcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7Zm9ybWF0RHVyYXRpb24odmFsKX1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9XG5dXG5cbmNvbnN0IGFsYnVtQXNzZXRDb2x1bW4gPSBbXG4gIHtcbiAgICBuYW1lOiAnaWQnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnSUQnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ25hbWUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnTkFNRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cuYXNzZXROYW1lLFxuICAgIGZvcm1hdDogKHZhbDogc3RyaW5nKSA9PiBgJHt2YWx9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtaW1lJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ01JTUUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LmFzc2V0TWltZSxcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGFyZ2UnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnTEFSR0UnLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5sYXJnZSxcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH1cbl1cblxudHlwZSBNZXRhZGF0YSA9IHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9XG5cbmNvbnN0IGFsYnVtTWV0YWRhdGFDb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2ZpZWxkJyxcbiAgICBsYWJlbDogJ0ZJRUxEJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBNZXRhZGF0YSkgPT4gcm93Lm5hbWVcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd2YWx1ZScsXG4gICAgbGFiZWw6ICdWQUxVRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy52YWx1ZVxuICB9XG5dXG5cbmxldCB0b3RhbER1cmF0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICBsZXQgYWxsRHVyYXRpb25zOiBzdHJpbmdbXSA9IFtdXG4gIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzPy5mb3JFYWNoKHQgPT4ge1xuICAgIGlmICh0LmR1cmF0aW9uKSBhbGxEdXJhdGlvbnMucHVzaCh0LmR1cmF0aW9uKVxuICB9KTtcbiAgcmV0dXJuIHN1bUR1cmF0aW9ucyhhbGxEdXJhdGlvbnMpO1xufSlcblxuY29uc3QgcGFnaW5hdGlvbiA9IHtcbiAgcm93c1BlclBhZ2U6IDAsXG4gIGRlc2NlbmRpbmc6IHRydWVcbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlHQSxNQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUNSLENBQUM7Ozs7QUFlRCxVQUFNLFNBQVM7QUFFVCxVQUFBLFdBQVcsSUFBSSxTQUFTLFNBQVM7QUFDdkMsVUFBTSxZQUFZO0FBQ2xCLFVBQU0sWUFBWTtBQUNaLFVBQUEsY0FBYyxJQUFvQixDQUFBLENBQUU7QUFDcEMsVUFBQSxnQkFBZ0IsSUFBZ0IsQ0FBQSxDQUFFO0FBRWxDLFVBQUEsZ0JBQWdCLFNBQVMsTUFBTTs7QUFDNUIsZUFBQSx3REFBVyxVQUFYLG1CQUFrQixjQUFsQixtQkFBNkIsV0FBN0IsbUJBQXFDLFNBQVEsT0FBTyx3Q0FDdkQsd0RBQVcsVUFBWCxtQkFBa0IsY0FBbEIsbUJBQTZCLFdBQTdCLG1CQUFxQztBQUFBLElBQUEsQ0FDMUM7QUFHRCxtQkFBZSxXQUFXLFNBQXdDO0FBQ2hFLGFBQU8sU0FBUyxTQUFTLEVBQUMsSUFBSSxRQUFRLENBQUE7QUFBQSxJQUN4QztBQUVBLGFBQVMsaUJBQWlCLFdBQXlCO0FBQ2pELFlBQU0sV0FBdUIsQ0FBQTtBQUM3QixZQUFNLGdCQUFnQjtBQUFBLFFBQ3BCO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFB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

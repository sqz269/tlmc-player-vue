import { u as usePageContainerBgStyleStore, Q as QImg } from "./pageContainerBg.49e5152d.js";
import { _ as _export_sfc, P as defineComponent, R as useRouter, aA as ApiConfigProvider, bi as AlbumApi, r as ref, c as computed, o as onMounted, U as openBlock, V as createBlock, W as withCtx, ab as createElementBlock, Y as createBaseVNode, d as createVNode, S as unref, Z as toDisplayString, aj as QSeparator, a2 as createCommentVNode, aq as renderList, F as Fragment, a0 as QBtn, ac as createTextVNode } from "./index.e16f57cd.js";
import { Q as QTr, b as QTable, a as QTd, c as QTh } from "./QTable.b5bdfe7f.js";
import { Q as QPage } from "./QPage.1d53fdb8.js";
import { f as formatDuration } from "./durationUtils.f059d1b6.js";
import "./QList.99a5bc6b.js";
import "./QSelect.3402c0e2.js";
import "./rtl.378264c1.js";
import "./format.79015755.js";
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
const _hoisted_14 = { class: "page-section-blur col-all q-mt-lg row q-pb-lg" };
const _hoisted_15 = { class: "col-all q-pt-md q-px-md" };
const _hoisted_16 = { class: "col-all q-pt-md q-px-md" };
const _hoisted_17 = { class: "my-table-details" };
const _hoisted_18 = { class: "col-all q-pt-md q-px-md" };
const __default__ = defineComponent({
  name: "AlbumPage"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const router = useRouter();
    const { setColors } = usePageContainerBgStyleStore();
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
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
        "numberOfDiscs"
      ];
      const albumDict = albumData;
      for (let key of metadataIndex) {
        const d = albumDict[key];
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
      var _a, _b, _c, _d;
      trackList.value = [];
      albumInfo.value = void 0;
      albumAssets.value = [];
      albumMetadata.value = [];
      const albumData = await fetchAlbum(router.currentRoute.value.params.albumId);
      setColors((_a = albumData == null ? void 0 : albumData.thumbnail) == null ? void 0 : _a.colors);
      albumInfo.value = albumData;
      if ((_b = albumInfo.value) == null ? void 0 : _b.tracks) {
        (_c = albumInfo.value) == null ? void 0 : _c.tracks.sort((ta, tb) => {
          return ta.index - tb.index;
        });
        trackList.value = (_d = albumInfo.value) == null ? void 0 : _d.tracks;
        setAlbumAsset();
        setAlbumMetadata(albumData);
      }
    }
    onMounted(async () => {
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
                      createBaseVNode("div", _hoisted_13, toDisplayString(albumInfo.value.id), 1)
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", _hoisted_15, [
                createVNode(QTable, {
                  title: "ALBUM METADATA",
                  rows: albumMetadata.value,
                  columns: albumMetadataColumns,
                  "row-key": "field",
                  "hide-pagination": "",
                  pagination,
                  class: "transparent",
                  separator: "none",
                  flat: ""
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
                  _: 1
                }, 8, ["rows"])
              ]),
              createBaseVNode("div", _hoisted_16, [
                createVNode(QTable, {
                  title: "ALBUM ASSETS",
                  rows: albumAssets.value,
                  columns: albumAssetColumn,
                  "row-key": "name",
                  "hide-pagination": "",
                  pagination,
                  class: "transparent",
                  separator: "none",
                  flat: ""
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
                        createBaseVNode("div", _hoisted_17, toDisplayString(props.row.details), 1)
                      ]),
                      _: 2
                    }, 1032, ["props"])
                  ]),
                  _: 1
                }, 8, ["rows"])
              ]),
              createBaseVNode("div", _hoisted_18, [
                createVNode(QTable, {
                  title: "TRACKS",
                  rows: trackList.value,
                  columns: tracksColumn,
                  "row-key": "name",
                  "hide-pagination": "",
                  pagination,
                  class: "transparent",
                  separator: "none",
                  flat: ""
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
                  _: 1
                }, 8, ["rows"])
              ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1EYXRhLmZiOTJjNjZiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1EYXRhLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cImFsYnVtSW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHEtcHgtbWRcIiBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1cImdldEFsYnVtSW1hZ2VcIlxuICAgICAgICAgIHJhdGlvPVwiMVwiPlxuICAgICAgICA8L3EtaW1nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGl0ZW1zLWVuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJvZHkxXCI+QWxidW08L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInEtbWItc20tc20gcS1tYi1ub25lIHEtbXQtbWRcIj57eyBhbGJ1bUluZm8uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkXCI+XG4gICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLnRyYWNrcy5sZW5ndGggfX0gVHJhY2tzPC9kaXY+XG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLmlkIH19PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjwhLS0gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj4tLT5cbjwhLS0gICAgICAgIDxxLWJ0biBmYWItbWluaSBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkRWRpdFwiPi0tPlxuPCEtLSAgICAgICAgICA8cS10b29sdGlwPkVkaXQ8L3EtdG9vbHRpcD4tLT5cbjwhLS0gICAgICAgIDwvcS1idG4+LS0+XG48IS0tICAgICAgPC9kaXY+LS0+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1zZWN0aW9uLWJsdXIgY29sLWFsbCBxLW10LWxnIHJvdyBxLXBiLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWFsbCBxLXB0LW1kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtdGFibGVcbiAgICAgICAgICB0aXRsZT1cIkFMQlVNIE1FVEFEQVRBXCJcbiAgICAgICAgICA6cm93cz1cImFsYnVtTWV0YWRhdGFcIlxuICAgICAgICAgIDpjb2x1bW5zPVwiYWxidW1NZXRhZGF0YUNvbHVtbnNcIlxuICAgICAgICAgIHJvdy1rZXk9XCJmaWVsZFwiXG4gICAgICAgICAgaGlkZS1wYWdpbmF0aW9uXG4gICAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICBzZXBhcmF0b3I9XCJub25lXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj1cInByb3BzXCI+XG4gICAgICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10aCB2LWZvcj1cImNvbCBpbiBwcm9wcy5jb2xzXCIgOmtleT1cImNvbC5uYW1lXCIgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleSBib3JkZXItYm90dG9tLXRoaW5cIj5cbiAgICAgICAgICAgICAgICB7eyBjb2wubGFiZWwgfX1cbiAgICAgICAgICAgICAgPC9xLXRoPlxuICAgICAgICAgICAgPC9xLXRyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS10YWJsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWFsbCBxLXB0LW1kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtdGFibGVcbiAgICAgICAgICB0aXRsZT1cIkFMQlVNIEFTU0VUU1wiXG4gICAgICAgICAgOnJvd3M9XCJhbGJ1bUFzc2V0c1wiXG4gICAgICAgICAgOmNvbHVtbnM9XCJhbGJ1bUFzc2V0Q29sdW1uXCJcbiAgICAgICAgICByb3cta2V5PVwibmFtZVwiXG4gICAgICAgICAgaGlkZS1wYWdpbmF0aW9uXG4gICAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICBzZXBhcmF0b3I9XCJub25lXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj1cInByb3BzXCI+XG4gICAgICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10aCB2LWZvcj1cImNvbCBpbiBwcm9wcy5jb2xzXCIgOmtleT1cImNvbC5uYW1lXCIgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleSBib3JkZXItYm90dG9tLXRoaW5cIj5cbiAgICAgICAgICAgICAgICB7eyBjb2wubGFiZWwgfX1cbiAgICAgICAgICAgICAgPC9xLXRoPlxuICAgICAgICAgICAgPC9xLXRyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtaWQ9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cS1idG4gOmxhYmVsPVwicHJvcHMudmFsdWUuYXNzZXRJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwicHJvcHMudmFsdWUudXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZD48L3EtYnRuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LXRhYmxlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cuZGV0YWlscyB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtdGFibGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1hbGwgcS1wdC1tZCBxLXB4LW1kXCI+XG4gICAgICAgIDxxLXRhYmxlXG4gICAgICAgICAgdGl0bGU9XCJUUkFDS1NcIlxuICAgICAgICAgIDpyb3dzPVwidHJhY2tMaXN0XCJcbiAgICAgICAgICA6Y29sdW1ucz1cInRyYWNrc0NvbHVtblwiXG4gICAgICAgICAgcm93LWtleT1cIm5hbWVcIlxuICAgICAgICAgIGhpZGUtcGFnaW5hdGlvblxuICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgc2VwYXJhdG9yPVwibm9uZVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXI9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdHIgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGggdi1mb3I9XCJjb2wgaW4gcHJvcHMuY29sc1wiIDprZXk9XCJjb2wubmFtZVwiIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXkgYm9yZGVyLWJvdHRvbS10aGluXCI+XG4gICAgICAgICAgICAgICAge3sgY29sLmxhYmVsIH19XG4gICAgICAgICAgICAgIDwvcS10aD5cbiAgICAgICAgICAgIDwvcS10cj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0FsYnVtUGFnZSdcbn0pXG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Y29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgQWxidW1BcGkgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0bywgQXNzZXRSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgeyBmb3JtYXREdXJhdGlvbiB9IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgeyBzZXRDb2xvcnMgfSA9IHVzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUoKTtcblxuY29uc3QgYXBpQ29uZmlnID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKTtcbmNvbnN0IGFsYnVtQXBpID0gbmV3IEFsYnVtQXBpKGFwaUNvbmZpZyk7XG5jb25zdCBhbGJ1bUluZm8gPSByZWY8QWxidW1SZWFkRHRvPigpO1xuY29uc3QgdHJhY2tMaXN0ID0gcmVmPFRyYWNrUmVhZER0b1tdPigpO1xuY29uc3QgYWxidW1Bc3NldHMgPSByZWY8QXNzZXRSZWFkRHRvW10+KFtdKTtcbmNvbnN0IGFsYnVtTWV0YWRhdGEgPSByZWY8TWV0YWRhdGFbXT4oW10pO1xuXG5jb25zdCBnZXRBbGJ1bUltYWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybCA9PT0gbnVsbCA/ICdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS82NDB4MzYwJ1xuICAgIDogYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybFxufSlcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBbGJ1bShhbGJ1bUlkOiBzdHJpbmcpOiBQcm9taXNlPEFsYnVtUmVhZER0bz4ge1xuICByZXR1cm4gYWxidW1BcGkuZ2V0QWxidW0oe2lkOiBhbGJ1bUlkfSk7XG59XG5cbmZ1bmN0aW9uIHNldEFsYnVtTWV0YWRhdGEoYWxidW1EYXRhOiBBbGJ1bVJlYWREdG8pIHtcbiAgY29uc3QgbWV0YWRhdGE6IE1ldGFkYXRhW10gPSBbXTtcbiAgY29uc3QgbWV0YWRhdGFJbmRleCA9IFtcbiAgICAncmVsZWFzZURhdGUnLFxuICAgICdyZWxlYXNlQ29udmVudGlvbicsXG4gICAgJ2NhdGFsb2dOdW1iZXInLFxuICAgICdudW1iZXJPZkRpc2NzJyxcbiAgICAvKiBUT0RPICovXG4gICAgLy8gJ3dlYnNpdGUnLFxuICAgIC8vICdhbGJ1bUFydGlzdCcsXG4gICAgLy8gJ2RhdGFTb3VyY2UnXG4gIF1cblxuICBjb25zdCBhbGJ1bURpY3QgPSBhbGJ1bURhdGEgYXMgeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfVxuXG4gIGZvciAobGV0IGtleSBvZiBtZXRhZGF0YUluZGV4KSB7XG4gICAgY29uc3QgIGQgPSBhbGJ1bURpY3Rba2V5XTtcbiAgICBpZiAoZCkge1xuICAgICAgbWV0YWRhdGEucHVzaCh7bmFtZToga2V5LCB2YWx1ZTogZH0pO1xuICAgIH1cbiAgfVxuXG4gIGFsYnVtTWV0YWRhdGEudmFsdWUgPSBtZXRhZGF0YTtcbn1cblxuZnVuY3Rpb24gc2V0QWxidW1Bc3NldCgpIHtcbiAgaWYgKGFsYnVtSW5mby52YWx1ZT8udGh1bWJuYWlsPy5vcmlnaW5hbCkge1xuICAgIGFsYnVtQXNzZXRzLnZhbHVlPy5wdXNoKGFsYnVtSW5mby52YWx1ZT8udGh1bWJuYWlsLm9yaWdpbmFsKVxuICB9XG5cbiAgaWYgKGFsYnVtSW5mby52YWx1ZT8ub3RoZXJGaWxlcykge1xuICAgIGFsYnVtQXNzZXRzLnZhbHVlPy5wdXNoKC4uLmFsYnVtSW5mby52YWx1ZT8ub3RoZXJGaWxlcyk7XG4gIH1cblxuICB0cmFja0xpc3QudmFsdWU/LmZvckVhY2goZSA9PiB7XG4gICAgaWYgKGUudHJhY2tGaWxlKVxuICAgICAgYWxidW1Bc3NldHMudmFsdWU/LnB1c2goZT8udHJhY2tGaWxlKTtcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0QWxidW1QYWdlKCkge1xuICB0cmFja0xpc3QudmFsdWUgPSBbXTtcbiAgYWxidW1JbmZvLnZhbHVlID0gdW5kZWZpbmVkO1xuICBhbGJ1bUFzc2V0cy52YWx1ZSA9IFtdO1xuICBhbGJ1bU1ldGFkYXRhLnZhbHVlID1bXTtcblxuICBjb25zdCBhbGJ1bURhdGEgPSBhd2FpdCBmZXRjaEFsYnVtKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuYWxidW1JZCk7XG4gIHNldENvbG9ycyg8c3RyaW5nW10+YWxidW1EYXRhPy50aHVtYm5haWw/LmNvbG9ycyk7XG4gIGFsYnVtSW5mby52YWx1ZSA9IGFsYnVtRGF0YTtcbiAgaWYgKGFsYnVtSW5mby52YWx1ZT8udHJhY2tzKSB7XG4gICAgYWxidW1JbmZvLnZhbHVlPy50cmFja3Muc29ydCgodGEsIHRiKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgcmV0dXJuIHRhLmluZGV4ISAtIHRiLmluZGV4IVxuICAgIH0pXG4gICAgdHJhY2tMaXN0LnZhbHVlID0gYWxidW1JbmZvLnZhbHVlPy50cmFja3M7XG5cbiAgICBzZXRBbGJ1bUFzc2V0KCk7XG4gICAgc2V0QWxidW1NZXRhZGF0YShhbGJ1bURhdGEpO1xuICB9XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHNldEFsYnVtUGFnZSgpO1xufSlcblxuLy8gb25VcGRhdGVkKGFzeW5jICgpID0+IHtcbi8vICAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XG4vLyB9KVxuXG5jb25zdCB0cmFja3NDb2x1bW4gPSBbXG4gIHtcbiAgICBuYW1lOiAnaW5kZXgnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnIycsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5pbmRleCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgc3R5bGU6ICd3aWR0aDogMTAwcHgnLFxuICAgIHNvcnRhYmxlOiB0cnVlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndGl0bGUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnVElUTEUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93Lm5hbWU/Ll9kZWZhdWx0LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpZCcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdJRCcsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuaWQsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ0RVUkFUSU9OJyxcbiAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuZHVyYXRpb24sXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+IGAke2Zvcm1hdER1cmF0aW9uKHZhbCl9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfVxuXVxuXG5jb25zdCBhbGJ1bUFzc2V0Q29sdW1uID0gW1xuICB7XG4gICAgbmFtZTogJ2lkJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ0lEJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdyxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICduYW1lJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ05BTUUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LmFzc2V0TmFtZSxcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWltZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdNSU1FJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5hc3NldE1pbWUsXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+IGAke3ZhbH1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xhcmdlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ0xBUkdFJyxcbiAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cubGFyZ2UsXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+IGAke3ZhbH1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9XG5dXG5cbnR5cGUgTWV0YWRhdGEgPSB7bmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVxuXG5jb25zdCBhbGJ1bU1ldGFkYXRhQ29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdmaWVsZCcsXG4gICAgbGFiZWw6ICdGSUVMRCcsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy5uYW1lXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndmFsdWUnLFxuICAgIGxhYmVsOiAnVkFMVUUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IE1ldGFkYXRhKSA9PiByb3cudmFsdWVcbiAgfVxuXVxuXG4vLyBsZXQgdG90YWxEdXJhdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbi8vICAgbGV0IGFsbER1cmF0aW9uczogc3RyaW5nW10gPSBbXVxuLy8gICBhbGJ1bUluZm8udmFsdWU/LnRyYWNrcz8uZm9yRWFjaCh0ID0+IHtcbi8vICAgICBpZiAodC5kdXJhdGlvbikgYWxsRHVyYXRpb25zLnB1c2godC5kdXJhdGlvbilcbi8vICAgfSk7XG4vLyAgIHJldHVybiBzdW1EdXJhdGlvbnMoYWxsRHVyYXRpb25zKTtcbi8vIH0pXG5cbmNvbnN0IHBhZ2luYXRpb24gPSB7XG4gIHJvd3NQZXJQYWdlOiAwLFxuICBkZXNjZW5kaW5nOiB0cnVlXG59XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJf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

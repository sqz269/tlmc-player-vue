import { Q as QImg } from "./QImg.f4e44421.js";
import { a3 as _export_sfc, a4 as defineComponent, aM as useRouter, aI as ApiConfigProvider, bc as AlbumApi, r as ref, c as computed, o as onMounted, a7 as openBlock, a8 as createBlock, a9 as withCtx, an as createElementBlock, ab as createBaseVNode, d as createVNode, a6 as unref, ac as toDisplayString, av as QSeparator, ag as createCommentVNode, aC as renderList, F as Fragment, ae as QBtn, ao as createTextVNode } from "./index.bfbdb738.js";
import { Q as QTable, a as QTh } from "./QTable.41a3f204.js";
import { Q as QTr, a as QTd } from "./QTd.569ca842.js";
import { Q as QPage } from "./QPage.0eafd9a5.js";
import { m as sumDurations, f as formatDuration } from "./QMenu.babff4f4.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.5acf1885.js";
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
        console.log(albumInfo.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1EYXRhLjVlM2MzMWE2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFnZXMvQWxidW1EYXRhLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cImFsYnVtSW5mb1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC00IHEtcHgtbWRcIiBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIj5cbiAgICAgICAgPHEtaW1nXG4gICAgICAgICAgOnNyYz1cImdldEFsYnVtSW1hZ2VcIlxuICAgICAgICAgIHJhdGlvPVwiMVwiPlxuICAgICAgICA8L3EtaW1nPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLThcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGl0ZW1zLWVuZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWJvZHkxXCI+QWxidW08L2Rpdj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInEtbWItc20tc20gcS1tYi1ub25lIHEtbXQtbWRcIj57eyBhbGJ1bUluZm8uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkXCI+XG4gICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIHZlcnRpY2FsIHNwYWNlZCB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIiB2LWlmPVwiYWxidW1JbmZvLnJlbGVhc2VEYXRlXCI+XG4gICAgICAgICAgICAgICAgICB7eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLnRyYWNrcy5sZW5ndGggfX0gVHJhY2tzPC9kaXY+XG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQ+PC9xLXNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgYWxidW1JbmZvLmlkIH19PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbjwhLS0gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWRcIj4tLT5cbjwhLS0gICAgICAgIDxxLWJ0biBmYWItbWluaSBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkRWRpdFwiPi0tPlxuPCEtLSAgICAgICAgICA8cS10b29sdGlwPkVkaXQ8L3EtdG9vbHRpcD4tLT5cbjwhLS0gICAgICAgIDwvcS1idG4+LS0+XG48IS0tICAgICAgPC9kaXY+LS0+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicGFnZS1zZWN0aW9uLWJsdXIgY29sLWFsbCBxLW10LWxnIHJvdyBxLXBiLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWFsbCBxLXB0LW1kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtdGFibGVcbiAgICAgICAgICB0aXRsZT1cIkFMQlVNIE1FVEFEQVRBXCJcbiAgICAgICAgICA6cm93cz1cImFsYnVtTWV0YWRhdGFcIlxuICAgICAgICAgIDpjb2x1bW5zPVwiYWxidW1NZXRhZGF0YUNvbHVtbnNcIlxuICAgICAgICAgIHJvdy1rZXk9XCJmaWVsZFwiXG4gICAgICAgICAgaGlkZS1wYWdpbmF0aW9uXG4gICAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICBzZXBhcmF0b3I9XCJub25lXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj1cInByb3BzXCI+XG4gICAgICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10aCB2LWZvcj1cImNvbCBpbiBwcm9wcy5jb2xzXCIgOmtleT1cImNvbC5uYW1lXCIgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleSBib3JkZXItYm90dG9tLXRoaW5cIj5cbiAgICAgICAgICAgICAgICB7eyBjb2wubGFiZWwgfX1cbiAgICAgICAgICAgICAgPC9xLXRoPlxuICAgICAgICAgICAgPC9xLXRyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvcS10YWJsZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWFsbCBxLXB0LW1kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtdGFibGVcbiAgICAgICAgICB0aXRsZT1cIkFMQlVNIEFTU0VUU1wiXG4gICAgICAgICAgOnJvd3M9XCJhbGJ1bUFzc2V0c1wiXG4gICAgICAgICAgOmNvbHVtbnM9XCJhbGJ1bUFzc2V0Q29sdW1uXCJcbiAgICAgICAgICByb3cta2V5PVwibmFtZVwiXG4gICAgICAgICAgaGlkZS1wYWdpbmF0aW9uXG4gICAgICAgICAgOnBhZ2luYXRpb249XCJwYWdpbmF0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgICBzZXBhcmF0b3I9XCJub25lXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj1cInByb3BzXCI+XG4gICAgICAgICAgICA8cS10ciA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICA8cS10aCB2LWZvcj1cImNvbCBpbiBwcm9wcy5jb2xzXCIgOmtleT1cImNvbC5uYW1lXCIgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZ3JleSBib3JkZXItYm90dG9tLXRoaW5cIj5cbiAgICAgICAgICAgICAgICB7eyBjb2wubGFiZWwgfX1cbiAgICAgICAgICAgICAgPC9xLXRoPlxuICAgICAgICAgICAgPC9xLXRyPlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtaWQ9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cS1idG4gOmxhYmVsPVwicHJvcHMudmFsdWUuYXNzZXRJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwicHJvcHMudmFsdWUudXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgdW5lbGV2YXRlZD48L3EtYnRuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm15LXRhYmxlLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cuZGV0YWlscyB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtdGFibGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1hbGwgcS1wdC1tZCBxLXB4LW1kXCI+XG4gICAgICAgIDxxLXRhYmxlXG4gICAgICAgICAgdGl0bGU9XCJUUkFDS1NcIlxuICAgICAgICAgIDpyb3dzPVwidHJhY2tMaXN0XCJcbiAgICAgICAgICA6Y29sdW1ucz1cInRyYWNrc0NvbHVtblwiXG4gICAgICAgICAgcm93LWtleT1cIm5hbWVcIlxuICAgICAgICAgIGhpZGUtcGFnaW5hdGlvblxuICAgICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJ0cmFuc3BhcmVudFwiXG4gICAgICAgICAgc2VwYXJhdG9yPVwibm9uZVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXI9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdHIgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGggdi1mb3I9XCJjb2wgaW4gcHJvcHMuY29sc1wiIDprZXk9XCJjb2wubmFtZVwiIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWdyZXkgYm9yZGVyLWJvdHRvbS10aGluXCI+XG4gICAgICAgICAgICAgICAge3sgY29sLmxhYmVsIH19XG4gICAgICAgICAgICAgIDwvcS10aD5cbiAgICAgICAgICAgIDwvcS10cj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0FsYnVtUGFnZSdcbn0pXG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkT3BlbkluTmV3LFxuICBvdXRsaW5lZEVkaXRcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge2NvbXB1dGVkLCBvbk1vdW50ZWQsIG9uVXBkYXRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgQWxidW1BcGkgfSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvLCBBc3NldFJlYWREdG8gfSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgZm9ybWF0RHVyYXRpb24sIHN1bUR1cmF0aW9ucyB9IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSBcInN0b3Jlcy9wYWdlQ29udGFpbmVyQmdcIjtcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gXCJzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXJcIjtcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmNvbnN0IHsgc2V0Q29sb3JzIH0gPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IGFwaUNvbmZpZyA9IEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKCk7XG5jb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShhcGlDb25maWcpO1xuY29uc3QgYWxidW1JbmZvID0gcmVmPEFsYnVtUmVhZER0bz4oKTtcbmNvbnN0IHRyYWNrTGlzdCA9IHJlZjxUcmFja1JlYWREdG9bXT4oKTtcbmNvbnN0IGFsYnVtQXNzZXRzID0gcmVmPEFzc2V0UmVhZER0b1tdPihbXSk7XG5jb25zdCBhbGJ1bU1ldGFkYXRhID0gcmVmPE1ldGFkYXRhW10+KFtdKTtcblxuY29uc3QgZ2V0QWxidW1JbWFnZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGFsYnVtSW5mbz8udmFsdWU/LnRodW1ibmFpbD8ubWVkaXVtPy51cmwgPT09IG51bGwgPyAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDM2MCdcbiAgICA6IGFsYnVtSW5mbz8udmFsdWU/LnRodW1ibmFpbD8ubWVkaXVtPy51cmxcbn0pXG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoQWxidW0oYWxidW1JZDogc3RyaW5nKTogUHJvbWlzZTxBbGJ1bVJlYWREdG8+IHtcbiAgcmV0dXJuIGFsYnVtQXBpLmdldEFsYnVtKHtpZDogYWxidW1JZH0pO1xufVxuXG5mdW5jdGlvbiBzZXRBbGJ1bU1ldGFkYXRhKGFsYnVtRGF0YTogQWxidW1SZWFkRHRvKSB7XG4gIGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YVtdID0gW107XG4gIGNvbnN0IG1ldGFkYXRhSW5kZXggPSBbXG4gICAgJ3JlbGVhc2VEYXRlJyxcbiAgICAncmVsZWFzZUNvbnZlbnRpb24nLFxuICAgICdjYXRhbG9nTnVtYmVyJyxcbiAgICAnbnVtYmVyT2ZEaXNjcycsXG4gICAgLyogVE9ETyAqL1xuICAgIC8vICd3ZWJzaXRlJyxcbiAgICAvLyAnYWxidW1BcnRpc3QnLFxuICAgIC8vICdkYXRhU291cmNlJ1xuICBdXG5cbiAgY29uc3QgYWxidW1EaWN0ID0gYWxidW1EYXRhIGFzIHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH1cblxuICBmb3IgKGxldCBrZXkgb2YgbWV0YWRhdGFJbmRleCkge1xuICAgIGNvbnN0ICBkID0gYWxidW1EaWN0W2tleV07XG4gICAgY29uc29sZS5sb2coZCk7XG4gICAgaWYgKGQpIHtcbiAgICAgIG1ldGFkYXRhLnB1c2goe25hbWU6IGtleSwgdmFsdWU6IGR9KTtcbiAgICB9XG4gIH1cblxuICBhbGJ1bU1ldGFkYXRhLnZhbHVlID0gbWV0YWRhdGE7XG59XG5cbmZ1bmN0aW9uIHNldEFsYnVtQXNzZXQoKSB7XG4gIC8vIFRPRE86IE5FV0VTVCBVUERBVEUgQ0hBTkdFRCBPVEhFUklNQUdFUyBUTyBPVEhFUkZJTEVTXG4gIGlmIChhbGJ1bUluZm8udmFsdWU/LnRodW1ibmFpbD8ub3JpZ2luYWwpIHtcbiAgICBhbGJ1bUFzc2V0cy52YWx1ZT8ucHVzaChhbGJ1bUluZm8udmFsdWU/LnRodW1ibmFpbC5vcmlnaW5hbClcbiAgfVxuXG4gIGlmIChhbGJ1bUluZm8udmFsdWU/Lm90aGVyRmlsZXMpIHtcbiAgICBhbGJ1bUFzc2V0cy52YWx1ZT8ucHVzaCguLi5hbGJ1bUluZm8udmFsdWU/Lm90aGVyRmlsZXMpO1xuICB9XG5cbiAgdHJhY2tMaXN0LnZhbHVlPy5mb3JFYWNoKGUgPT4ge1xuICAgIGlmIChlLnRyYWNrRmlsZSlcbiAgICAgIGFsYnVtQXNzZXRzLnZhbHVlPy5wdXNoKGU/LnRyYWNrRmlsZSk7XG4gIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEFsYnVtUGFnZSgpIHtcbiAgdHJhY2tMaXN0LnZhbHVlID0gW107XG4gIGFsYnVtSW5mby52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgYWxidW1Bc3NldHMudmFsdWUgPSBbXTtcbiAgYWxidW1NZXRhZGF0YS52YWx1ZSA9W107XG5cbiAgY29uc3QgYWxidW1EYXRhID0gYXdhaXQgZmV0Y2hBbGJ1bSg8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLmFsYnVtSWQpO1xuICBzZXRDb2xvcnMoPHN0cmluZ1tdPmFsYnVtRGF0YT8udGh1bWJuYWlsPy5jb2xvcnMpO1xuICBhbGJ1bUluZm8udmFsdWUgPSBhbGJ1bURhdGE7XG4gIGlmIChhbGJ1bUluZm8udmFsdWU/LnRyYWNrcykge1xuICAgIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzLnNvcnQoKHRhLCB0YikgPT4ge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgIHJldHVybiB0YS5pbmRleCEgLSB0Yi5pbmRleCFcbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGFsYnVtSW5mby52YWx1ZSlcbiAgICB0cmFja0xpc3QudmFsdWUgPSBhbGJ1bUluZm8udmFsdWU/LnRyYWNrcztcblxuICAgIHNldEFsYnVtQXNzZXQoKTtcbiAgICBzZXRBbGJ1bU1ldGFkYXRhKGFsYnVtRGF0YSk7XG4gIH1cbn1cblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0QWxidW1QYWdlKCk7XG59KVxuXG4vLyBvblVwZGF0ZWQoYXN5bmMgKCkgPT4ge1xuLy8gICBhd2FpdCBzZXRBbGJ1bVBhZ2UoKTtcbi8vIH0pXG5cbmNvbnN0IHRyYWNrc0NvbHVtbiA9IFtcbiAge1xuICAgIG5hbWU6ICdpbmRleCcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICcjJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmluZGV4LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBzdHlsZTogJ3dpZHRoOiAxMDBweCcsXG4gICAgc29ydGFibGU6IHRydWVcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd0aXRsZScsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICdUSVRMRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cubmFtZT8uX2RlZmF1bHQsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAke3ZhbH1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ2lkJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ0lEJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5pZCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5kdXJhdGlvbixcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7Zm9ybWF0RHVyYXRpb24odmFsKX1gLFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9XG5dXG5cbmNvbnN0IGFsYnVtQXNzZXRDb2x1bW4gPSBbXG4gIHtcbiAgICBuYW1lOiAnaWQnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnSUQnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LFxuICAgIGNsYXNzZXM6ICd0ZXh0LWJvbGQnLFxuICAgIHNvcnRhYmxlOiBmYWxzZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ25hbWUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnTkFNRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cuYXNzZXROYW1lLFxuICAgIGZvcm1hdDogKHZhbDogc3RyaW5nKSA9PiBgJHt2YWx9YCxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2VcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdtaW1lJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ01JTUUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LmFzc2V0TWltZSxcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGFyZ2UnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnTEFSR0UnLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5sYXJnZSxcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT4gYCR7dmFsfWAsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlXG4gIH1cbl1cblxudHlwZSBNZXRhZGF0YSA9IHtuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9XG5cbmNvbnN0IGFsYnVtTWV0YWRhdGFDb2x1bW5zID0gW1xuICB7XG4gICAgbmFtZTogJ2ZpZWxkJyxcbiAgICBsYWJlbDogJ0ZJRUxEJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBNZXRhZGF0YSkgPT4gcm93Lm5hbWVcbiAgfSxcbiAge1xuICAgIG5hbWU6ICd2YWx1ZScsXG4gICAgbGFiZWw6ICdWQUxVRScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogTWV0YWRhdGEpID0+IHJvdy52YWx1ZVxuICB9XG5dXG5cbmxldCB0b3RhbER1cmF0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICBsZXQgYWxsRHVyYXRpb25zOiBzdHJpbmdbXSA9IFtdXG4gIGFsYnVtSW5mby52YWx1ZT8udHJhY2tzPy5mb3JFYWNoKHQgPT4ge1xuICAgIGlmICh0LmR1cmF0aW9uKSBhbGxEdXJhdGlvbnMucHVzaCh0LmR1cmF0aW9uKVxuICB9KTtcbiAgcmV0dXJuIHN1bUR1cmF0aW9ucyhhbGxEdXJhdGlvbnMpO1xufSlcblxuY29uc3QgcGFnaW5hdGlvbiA9IHtcbiAgcm93c1BlclBhZ2U6IDAsXG4gIGRlc2NlbmRpbmc6IHRydWVcbn1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUlBLE1BQUEsY0FBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQ1IsQ0FBQzs7OztBQWlCRCxVQUFNLFNBQVM7QUFFVCxVQUFBLEVBQUUsY0FBYztBQUV0QixVQUFNLFlBQVksa0JBQWtCLFlBQVksRUFBRSxhQUFhO0FBQ3pELFVBQUEsV0FBVyxJQUFJLFNBQVMsU0FBUztBQUN2QyxVQUFNLFlBQVk7QUFDbEIsVUFBTSxZQUFZO0FBQ1osVUFBQSxjQUFjLElBQW9CLENBQUEsQ0FBRTtBQUNwQyxVQUFBLGdCQUFnQixJQUFnQixDQUFBLENBQUU7QUFFbEMsVUFBQSxnQkFBZ0IsU0FBUyxNQUFNOztBQUM1QixlQUFBLHdEQUFXLFVBQVgsbUJBQWtCLGNBQWxCLG1CQUE2QixXQUE3QixtQkFBcUMsU0FBUSxPQUFPLHdDQUN2RCx3REFBVyxVQUFYLG1CQUFrQixjQUFsQixtQkFBNkIsV0FBN0IsbUJBQXFDO0FBQUEsSUFBQSxDQUMxQztBQUVELG1CQUFlLFdBQVcsU0FBd0M7QUFDaEUsYUFBTyxTQUFTLFNBQVMsRUFBQyxJQUFJLFFBQVEsQ0FBQTtBQUFBLElBQ3hDO0FBRUEsYUFBUyxpQkFBaUIsV0FBeUI7QUFDakQsWUFBTSxXQUF1QixDQUFBO0FBQzdCLFlBQU0sZ0JBQWdCO0FBQUEsUUFDcEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUFBO0FBT0YsWUFBTSxZQUFZO0FBRWxC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

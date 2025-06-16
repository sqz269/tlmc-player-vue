import { Q as QSpinnerGears } from "./QSpinnerGears.ed41e565.js";
import { Q as QTooltip } from "./QTooltip.18e7480a.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.1baeabda.js";
import { Q as QList } from "./QList.77788d0a.js";
import { j as useVirtualScrollProps, k as useVirtualScroll, l as commonVirtScrollPropsList, Q as QSelect, m as QChip, a as QMenu } from "./QSelect.2cf6d795.js";
import { E as defineComponent, S as useRouter, G as openBlock, U as createElementBlock, J as createVNode, T as unref, R as createBaseVNode, H as createBlock, aa as createCommentVNode, $ as toDisplayString, X as Fragment, Y as renderList, V as QSeparator, _ as _export_sfc, bt as pushScopeId, bu as popScopeId, c as createComponent, m as h, q as hSlot, a1 as hUniqueSlot, Z as QIcon, t as getCurrentInstance, g as computed, a as useDarkProps, d as useDark, aw as scrollTargetProp, r as ref, w as watch, aj as onBeforeMount, o as onMounted, aX as onActivated, aW as onDeactivated, k as onBeforeUnmount, ax as getScrollTarget, av as listenOpts, A as hMergeSlot, aF as useSizeProps, aG as useSize, bv as vmHasRouter, bw as History, ab as isNumber, bx as isDate, ac as isObject, n as nextTick, by as injectMultipleProps, bz as QCheckbox, bh as injectProp, N as QBtn, bc as useLoadableController, ba as TrackApi, bb as apiConfigurationProvider, I as withCtx, Q as QDialog, K as QCardSection, a7 as QSpinner, O as QCard, F as useQuasar, i as inject, W as createTextVNode, bA as QueueAddMode, ai as Duration, l as withDirectives, b8 as QAvatar, M as QCardActions, bp as AlbumApi } from "./index.8df2ea7a.js";
import { Q as QPage } from "./QPage.876da103.js";
import { C as ClosePopup } from "./ClosePopup.068df8eb.js";
import { p as outlinedPlayArrow, s as outlinedLyrics, c as outlinedFavoriteBorder, w as outlinedMoreHoriz, x as outlinedDescription, y as outlinedEditNote } from "./index.b9ab0592.js";
import { L as LoadableElement } from "./LoadableElement.e4d470ac.js";
import { Q as QImg } from "./QImg.6f3273a3.js";
import { D as DataSourceButton } from "./DataSourceButton.f7340dd8.js";
import { T as TrackMenu, a as TrackMenuOptionsBuilder } from "./TrackMenuOptionBuilder.1836f48e.js";
import { c as QToolbar, Q as QToolbarTitle, e as matPreview, f as matOpenInNew, g as matFileDownload } from "./QToolbar.aafaa41f.js";
import "./UrlUtils.da180cca.js";
var AlbumInfoSection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-74c424d0"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "row full-width q-px-none q-pt-lg" };
const _hoisted_2$4 = {
  class: "col-4 q-px-md",
  style: { "max-width": "230px" }
};
const _hoisted_3$2 = { class: "col-8" };
const _hoisted_4$1 = { class: "row full-width full-height items-end" };
const _hoisted_5$1 = { class: "col-12" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Album", -1));
const _hoisted_7 = { class: "q-mb-sm-sm q-mb-none q-mt-md" };
const _hoisted_8 = { class: "col-12" };
const _hoisted_9 = { class: "row full-width" };
const _hoisted_10 = {
  id: "artists",
  class: "metadata-entry"
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = {
  key: 0,
  id: "release-date",
  class: "metadata-entry"
};
const _hoisted_13 = { class: "text-subtitle1" };
const _sfc_main$5 = defineComponent({
  __name: "AlbumInfoSection",
  props: {
    album: {}
  },
  setup(__props) {
    const $router = useRouter();
    const props = __props;
    const initializeViewModel = () => {
      var _a, _b, _c, _d;
      const albumArtists = (_a = props.album.albumArtist) == null ? void 0 : _a.reduce((acc, artist) => {
        acc[artist.id] = artist.name;
        return acc;
      }, {});
      console.log("albumArtists", albumArtists);
      return {
        albumName: ((_b = props.album.name) == null ? void 0 : _b._default) || "",
        albumArtists,
        albumCoverUrl: ((_d = (_c = props.album.thumbnail) == null ? void 0 : _c.large) == null ? void 0 : _d.url) || null,
        releaseDate: props.album.releaseDate || null,
        dataSources: props.album.dataSource || []
      };
    };
    const viewModel = initializeViewModel();
    const gotoCircle = (circleId) => {
      $router.push({
        name: "CircleAlbums",
        params: { circleId, page: "1" }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createVNode(DataSourceButton, {
          dataSources: unref(viewModel).dataSources
        }, null, 8, ["dataSources"]),
        createBaseVNode("div", _hoisted_2$4, [
          unref(viewModel).albumCoverUrl ? (openBlock(), createBlock(QImg, {
            key: 0,
            src: unref(viewModel).albumCoverUrl,
            ratio: "1"
          }, null, 8, ["src"])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("div", _hoisted_5$1, [
              _hoisted_6$1,
              createBaseVNode("h3", _hoisted_7, toDisplayString(unref(viewModel).albumName), 1)
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("div", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(viewModel).albumArtists, (artistName, artistId) => {
                    return openBlock(), createElementBlock("span", {
                      class: "text-subtitle1 text-bold cursor-pointer artist-name",
                      onClick: ($event) => gotoCircle(artistId),
                      key: artistId
                    }, toDisplayString(artistName), 9, _hoisted_11);
                  }), 128))
                ]),
                createVNode(QSeparator, {
                  vertical: "",
                  spaced: ""
                }),
                unref(viewModel).releaseDate ? (openBlock(), createElementBlock("div", _hoisted_12, [
                  createBaseVNode("div", _hoisted_13, toDisplayString(unref(viewModel).releaseDate.toLocaleDateString()), 1)
                ])) : createCommentVNode("", true)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var AlbumInfoSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-74c424d0"], ["__file", "AlbumInfoSection.vue"]]);
var QTh = createComponent({
  name: "QTh",
  props: {
    props: Object,
    autoWidth: Boolean
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const onClick = (evt) => {
      emit("click", evt);
    };
    return () => {
      if (props.props === void 0) {
        return h("th", {
          class: props.autoWidth === true ? "q-table--col-auto-width" : "",
          onClick
        }, hSlot(slots.default));
      }
      let col, child;
      const name = vm.vnode.key;
      if (name) {
        col = props.props.colsMap[name];
        if (col === void 0)
          return;
      } else {
        col = props.props.col;
      }
      if (col.sortable === true) {
        const action = col.align === "right" ? "unshift" : "push";
        child = hUniqueSlot(slots.default, []);
        child[action](
          h(QIcon, {
            class: col.__iconClass,
            name: $q.iconSet.table.arrowUp
          })
        );
      } else {
        child = hSlot(slots.default);
      }
      const data = {
        class: col.__thClass + (props.autoWidth === true ? " q-table--col-auto-width" : ""),
        style: col.headerStyle,
        onClick: (evt) => {
          col.sortable === true && props.props.sort(col);
          onClick(evt);
        }
      };
      return h("th", data, child);
    };
  }
});
var QTr = createComponent({
  name: "QTr",
  props: {
    props: Object,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-tr" + (props.props === void 0 || props.props.header === true ? "" : " " + props.props.__trClass) + (props.noHover === true ? " q-tr--no-hover" : "")
    );
    return () => {
      var _a;
      return h("tr", {
        style: (_a = props.props) == null ? void 0 : _a.__trStyle,
        class: classes.value
      }, hSlot(slots.default));
    };
  }
});
var QTd = createComponent({
  name: "QTd",
  props: {
    props: Object,
    autoWidth: Boolean,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const classes = computed(
      () => "q-td" + (props.autoWidth === true ? " q-table--col-auto-width" : "") + (props.noHover === true ? " q-td--no-hover" : "") + " "
    );
    return () => {
      if (props.props === void 0) {
        return h("td", { class: classes.value }, hSlot(slots.default));
      }
      const name = vm.vnode.key;
      const col = (props.props.colsMap !== void 0 ? props.props.colsMap[name] : null) || props.props.col;
      if (col === void 0)
        return;
      const { row } = props.props;
      return h("td", {
        class: classes.value + col.__tdClass(row),
        style: col.__tdStyle(row)
      }, hSlot(slots.default));
    };
  }
});
const separatorValues = ["horizontal", "vertical", "cell", "none"];
var QMarkupTable = createComponent({
  name: "QMarkupTable",
  props: {
    ...useDarkProps,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    wrapCells: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => separatorValues.includes(v)
    }
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const classes = computed(
      () => `q-markup-table q-table__container q-table__card q-table--${props.separator}-separator` + (isDark.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "") + (props.square === true ? " q-table--square" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "")
    );
    return () => h("div", {
      class: classes.value
    }, [
      h("table", { class: "q-table" }, hSlot(slots.default))
    ]);
  }
});
function getTableMiddle(props, content) {
  return h("div", props, [
    h("table", { class: "q-table" }, content)
  ]);
}
const comps = {
  list: QList,
  table: QMarkupTable
};
const typeOptions = ["list", "table", "__qtable"];
var QVirtualScroll = createComponent({
  name: "QVirtualScroll",
  props: {
    ...useVirtualScrollProps,
    type: {
      type: String,
      default: "list",
      validator: (v) => typeOptions.includes(v)
    },
    items: {
      type: Array,
      default: () => []
    },
    itemsFn: Function,
    itemsSize: Number,
    scrollTarget: scrollTargetProp
  },
  setup(props, { slots, attrs }) {
    let localScrollTarget;
    const rootRef = ref(null);
    const virtualScrollLength = computed(() => props.itemsSize >= 0 && props.itemsFn !== void 0 ? parseInt(props.itemsSize, 10) : Array.isArray(props.items) ? props.items.length : 0);
    const {
      virtualScrollSliceRange,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl
    });
    const virtualScrollScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const mapFn = (item, i) => ({
        index: virtualScrollSliceRange.value.from + i,
        item
      });
      return props.itemsFn === void 0 ? props.items.slice(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to).map(mapFn) : props.itemsFn(virtualScrollSliceRange.value.from, virtualScrollSliceRange.value.to - virtualScrollSliceRange.value.from).map(mapFn);
    });
    const classes = computed(
      () => "q-virtual-scroll q-virtual-scroll" + (props.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (props.scrollTarget !== void 0 ? "" : " scroll")
    );
    const attributes = computed(() => props.scrollTarget !== void 0 ? {} : { tabindex: 0 });
    watch(virtualScrollLength, () => {
      localResetVirtualScroll();
    });
    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function getVirtualScrollEl() {
      return rootRef.value.$el || rootRef.value;
    }
    function getVirtualScrollTarget() {
      return localScrollTarget;
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(getVirtualScrollEl(), props.scrollTarget);
      localScrollTarget.addEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", onVirtualScrollEvt, listenOpts.passive);
        localScrollTarget = void 0;
      }
    }
    function __getVirtualChildren() {
      let child = padVirtualScroll(
        props.type === "list" ? "div" : "tbody",
        virtualScrollScope.value.map(slots.default)
      );
      if (slots.before !== void 0) {
        child = slots.before().concat(child);
      }
      return hMergeSlot(slots.after, child);
    }
    onBeforeMount(() => {
      localResetVirtualScroll();
    });
    onMounted(() => {
      configureScrollTarget();
    });
    onActivated(() => {
      configureScrollTarget();
    });
    onDeactivated(() => {
      unconfigureScrollTarget();
    });
    onBeforeUnmount(() => {
      unconfigureScrollTarget();
    });
    return () => {
      if (slots.default === void 0) {
        console.error("QVirtualScroll: default scoped slot is required for rendering");
        return;
      }
      return props.type === "__qtable" ? getTableMiddle(
        { ref: rootRef, class: "q-table__middle " + classes.value },
        __getVirtualChildren()
      ) : h(comps[props.type], {
        ...attrs,
        ref: rootRef,
        class: [attrs.class, classes.value],
        ...attributes.value
      }, __getVirtualChildren);
    };
  }
});
const defaultSizes = {
  xs: 2,
  sm: 4,
  md: 6,
  lg: 10,
  xl: 14
};
function width(val, reverse, $q) {
  return {
    transform: reverse === true ? `translateX(${$q.lang.rtl === true ? "-" : ""}100%) scale3d(${-val},1,1)` : `scale3d(${val},1,1)`
  };
}
var QLinearProgress = createComponent({
  name: "QLinearProgress",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    value: {
      type: Number,
      default: 0
    },
    buffer: Number,
    color: String,
    trackColor: String,
    reverse: Boolean,
    stripe: Boolean,
    indeterminate: Boolean,
    query: Boolean,
    rounded: Boolean,
    animationSpeed: {
      type: [String, Number],
      default: 2100
    },
    instantFeedback: Boolean
  },
  setup(props, { slots }) {
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    const sizeStyle = useSize(props, defaultSizes);
    const motion = computed(() => props.indeterminate === true || props.query === true);
    const widthReverse = computed(() => props.reverse !== props.query);
    const style = computed(() => ({
      ...sizeStyle.value !== null ? sizeStyle.value : {},
      "--q-linear-progress-speed": `${props.animationSpeed}ms`
    }));
    const classes = computed(
      () => "q-linear-progress" + (props.color !== void 0 ? ` text-${props.color}` : "") + (props.reverse === true || props.query === true ? " q-linear-progress--reverse" : "") + (props.rounded === true ? " rounded-borders" : "")
    );
    const trackStyle = computed(() => width(props.buffer !== void 0 ? props.buffer : 1, widthReverse.value, proxy.$q));
    const transitionSuffix = computed(() => `with${props.instantFeedback === true ? "out" : ""}-transition`);
    const trackClass = computed(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--${transitionSuffix.value} q-linear-progress__track--${isDark.value === true ? "dark" : "light"}` + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
    );
    const modelStyle = computed(() => width(motion.value === true ? 1 : props.value, widthReverse.value, proxy.$q));
    const modelClass = computed(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--${transitionSuffix.value} q-linear-progress__model--${motion.value === true ? "in" : ""}determinate`
    );
    const stripeStyle = computed(() => ({ width: `${props.value * 100}%` }));
    const stripeClass = computed(
      () => `q-linear-progress__stripe absolute-${props.reverse === true ? "right" : "left"} q-linear-progress__stripe--${transitionSuffix.value}`
    );
    return () => {
      const child = [
        h("div", {
          class: trackClass.value,
          style: trackStyle.value
        }),
        h("div", {
          class: modelClass.value,
          style: modelStyle.value
        })
      ];
      props.stripe === true && motion.value === false && child.push(
        h("div", {
          class: stripeClass.value,
          style: stripeStyle.value
        })
      );
      return h("div", {
        class: classes.value,
        style: style.value,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 1,
        "aria-valuenow": props.indeterminate === true ? void 0 : props.value
      }, hMergeSlot(slots.default, child));
    };
  }
});
let counter = 0;
const useFullscreenProps = {
  fullscreen: Boolean,
  noRouteFullscreenExit: Boolean
};
const useFullscreenEmits = ["update:fullscreen", "fullscreen"];
function useFullscreen() {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  let historyEntry, fullscreenFillerNode, container;
  const inFullscreen = ref(false);
  vmHasRouter(vm) === true && watch(() => proxy.$route.fullPath, () => {
    props.noRouteFullscreenExit !== true && exitFullscreen();
  });
  watch(() => props.fullscreen, (v) => {
    if (inFullscreen.value !== v) {
      toggleFullscreen();
    }
  });
  watch(inFullscreen, (v) => {
    emit("update:fullscreen", v);
    emit("fullscreen", v);
  });
  function toggleFullscreen() {
    if (inFullscreen.value === true) {
      exitFullscreen();
    } else {
      setFullscreen();
    }
  }
  function setFullscreen() {
    if (inFullscreen.value === true)
      return;
    inFullscreen.value = true;
    container = proxy.$el.parentNode;
    container.replaceChild(fullscreenFillerNode, proxy.$el);
    document.body.appendChild(proxy.$el);
    counter++;
    if (counter === 1) {
      document.body.classList.add("q-body--fullscreen-mixin");
    }
    historyEntry = {
      handler: exitFullscreen
    };
    History.add(historyEntry);
  }
  function exitFullscreen() {
    if (inFullscreen.value !== true)
      return;
    if (historyEntry !== void 0) {
      History.remove(historyEntry);
      historyEntry = void 0;
    }
    container.replaceChild(proxy.$el, fullscreenFillerNode);
    inFullscreen.value = false;
    counter = Math.max(0, counter - 1);
    if (counter === 0) {
      document.body.classList.remove("q-body--fullscreen-mixin");
      if (proxy.$el.scrollIntoView !== void 0) {
        setTimeout(() => {
          proxy.$el.scrollIntoView();
        });
      }
    }
  }
  onBeforeMount(() => {
    fullscreenFillerNode = document.createElement("span");
  });
  onMounted(() => {
    props.fullscreen === true && setFullscreen();
  });
  onBeforeUnmount(exitFullscreen);
  Object.assign(proxy, {
    toggleFullscreen,
    setFullscreen,
    exitFullscreen
  });
  return {
    inFullscreen,
    toggleFullscreen
  };
}
function sortDate(a, b) {
  return new Date(a) - new Date(b);
}
const useTableSortProps = {
  sortMethod: Function,
  binaryStateSort: Boolean,
  columnSortOrder: {
    type: String,
    validator: (v) => v === "ad" || v === "da",
    default: "ad"
  }
};
function useTableSort(props, computedPagination, colList, setPagination) {
  const columnToSort = computed(() => {
    const { sortBy } = computedPagination.value;
    return sortBy ? colList.value.find((def) => def.name === sortBy) || null : null;
  });
  const computedSortMethod = computed(() => props.sortMethod !== void 0 ? props.sortMethod : (data, sortBy, descending) => {
    const col = colList.value.find((def) => def.name === sortBy);
    if (col === void 0 || col.field === void 0) {
      return data;
    }
    const dir = descending === true ? -1 : 1, val = typeof col.field === "function" ? (v) => col.field(v) : (v) => v[col.field];
    return data.sort((a, b) => {
      let A = val(a), B = val(b);
      if (col.rawSort !== void 0) {
        return col.rawSort(A, B, a, b) * dir;
      }
      if (A === null || A === void 0) {
        return -1 * dir;
      }
      if (B === null || B === void 0) {
        return 1 * dir;
      }
      if (col.sort !== void 0) {
        return col.sort(A, B, a, b) * dir;
      }
      if (isNumber(A) === true && isNumber(B) === true) {
        return (A - B) * dir;
      }
      if (isDate(A) === true && isDate(B) === true) {
        return sortDate(A, B) * dir;
      }
      if (typeof A === "boolean" && typeof B === "boolean") {
        return (A - B) * dir;
      }
      [A, B] = [A, B].map((s) => (s + "").toLocaleString().toLowerCase());
      return A < B ? -1 * dir : A === B ? 0 : dir;
    });
  });
  function sort(col) {
    let sortOrder = props.columnSortOrder;
    if (isObject(col) === true) {
      if (col.sortOrder) {
        sortOrder = col.sortOrder;
      }
      col = col.name;
    } else {
      const def = colList.value.find((def2) => def2.name === col);
      if (def == null ? void 0 : def.sortOrder) {
        sortOrder = def.sortOrder;
      }
    }
    let { sortBy, descending } = computedPagination.value;
    if (sortBy !== col) {
      sortBy = col;
      descending = sortOrder === "da";
    } else if (props.binaryStateSort === true) {
      descending = !descending;
    } else if (descending === true) {
      if (sortOrder === "ad") {
        sortBy = null;
      } else {
        descending = false;
      }
    } else {
      if (sortOrder === "ad") {
        descending = true;
      } else {
        sortBy = null;
      }
    }
    setPagination({ sortBy, descending, page: 1 });
  }
  return {
    columnToSort,
    computedSortMethod,
    sort
  };
}
const useTableFilterProps = {
  filter: [String, Object],
  filterMethod: Function
};
function useTableFilter(props, setPagination) {
  const computedFilterMethod = computed(() => props.filterMethod !== void 0 ? props.filterMethod : (rows, terms, cols, cellValue) => {
    const lowerTerms = terms ? terms.toLowerCase() : "";
    return rows.filter(
      (row) => cols.some((col) => {
        const val = cellValue(col, row) + "";
        const haystack = val === "undefined" || val === "null" ? "" : val.toLowerCase();
        return haystack.indexOf(lowerTerms) !== -1;
      })
    );
  });
  watch(
    () => props.filter,
    () => {
      nextTick(() => {
        setPagination({ page: 1 }, true);
      });
    },
    { deep: true }
  );
  return { computedFilterMethod };
}
function samePagination(oldPag, newPag) {
  for (const prop in newPag) {
    if (newPag[prop] !== oldPag[prop]) {
      return false;
    }
  }
  return true;
}
function fixPagination(p) {
  if (p.page < 1) {
    p.page = 1;
  }
  if (p.rowsPerPage !== void 0 && p.rowsPerPage < 1) {
    p.rowsPerPage = 0;
  }
  return p;
}
const useTablePaginationProps = {
  pagination: Object,
  rowsPerPageOptions: {
    type: Array,
    default: () => [5, 7, 10, 15, 20, 25, 50, 0]
  },
  "onUpdate:pagination": [Function, Array]
};
function useTablePaginationState(vm, getCellValue) {
  const { props, emit } = vm;
  const innerPagination = ref(
    Object.assign({
      sortBy: null,
      descending: false,
      page: 1,
      rowsPerPage: props.rowsPerPageOptions.length !== 0 ? props.rowsPerPageOptions[0] : 5
    }, props.pagination)
  );
  const computedPagination = computed(() => {
    const pag = props["onUpdate:pagination"] !== void 0 ? { ...innerPagination.value, ...props.pagination } : innerPagination.value;
    return fixPagination(pag);
  });
  const isServerSide = computed(() => computedPagination.value.rowsNumber !== void 0);
  function sendServerRequest(pagination) {
    requestServerInteraction({
      pagination,
      filter: props.filter
    });
  }
  function requestServerInteraction(prop = {}) {
    nextTick(() => {
      emit("request", {
        pagination: prop.pagination || computedPagination.value,
        filter: prop.filter || props.filter,
        getCellValue
      });
    });
  }
  function setPagination(val, forceServerRequest) {
    const newPagination = fixPagination({
      ...computedPagination.value,
      ...val
    });
    if (samePagination(computedPagination.value, newPagination) === true) {
      if (isServerSide.value === true && forceServerRequest === true) {
        sendServerRequest(newPagination);
      }
      return;
    }
    if (isServerSide.value === true) {
      sendServerRequest(newPagination);
      return;
    }
    if (props.pagination !== void 0 && props["onUpdate:pagination"] !== void 0) {
      emit("update:pagination", newPagination);
    } else {
      innerPagination.value = newPagination;
    }
  }
  return {
    innerPagination,
    computedPagination,
    isServerSide,
    requestServerInteraction,
    setPagination
  };
}
function useTablePagination(vm, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber) {
  const { props, emit, proxy: { $q } } = vm;
  const computedRowsNumber = computed(() => isServerSide.value === true ? computedPagination.value.rowsNumber || 0 : filteredSortedRowsNumber.value);
  const firstRowIndex = computed(() => {
    const { page, rowsPerPage } = computedPagination.value;
    return (page - 1) * rowsPerPage;
  });
  const lastRowIndex = computed(() => {
    const { page, rowsPerPage } = computedPagination.value;
    return page * rowsPerPage;
  });
  const isFirstPage = computed(() => computedPagination.value.page === 1);
  const pagesNumber = computed(() => computedPagination.value.rowsPerPage === 0 ? 1 : Math.max(
    1,
    Math.ceil(computedRowsNumber.value / computedPagination.value.rowsPerPage)
  ));
  const isLastPage = computed(() => lastRowIndex.value === 0 ? true : computedPagination.value.page >= pagesNumber.value);
  const computedRowsPerPageOptions = computed(() => {
    const opts = props.rowsPerPageOptions.includes(innerPagination.value.rowsPerPage) ? props.rowsPerPageOptions : [innerPagination.value.rowsPerPage].concat(props.rowsPerPageOptions);
    return opts.map((count) => ({
      label: count === 0 ? $q.lang.table.allRows : "" + count,
      value: count
    }));
  });
  watch(pagesNumber, (lastPage2, oldLastPage) => {
    if (lastPage2 === oldLastPage)
      return;
    const currentPage = computedPagination.value.page;
    if (lastPage2 && !currentPage) {
      setPagination({ page: 1 });
    } else if (lastPage2 < currentPage) {
      setPagination({ page: lastPage2 });
    }
  });
  function firstPage() {
    setPagination({ page: 1 });
  }
  function prevPage() {
    const { page } = computedPagination.value;
    if (page > 1) {
      setPagination({ page: page - 1 });
    }
  }
  function nextPage() {
    const { page, rowsPerPage } = computedPagination.value;
    if (lastRowIndex.value > 0 && page * rowsPerPage < computedRowsNumber.value) {
      setPagination({ page: page + 1 });
    }
  }
  function lastPage() {
    setPagination({ page: pagesNumber.value });
  }
  if (props["onUpdate:pagination"] !== void 0) {
    emit("update:pagination", { ...computedPagination.value });
  }
  return {
    firstRowIndex,
    lastRowIndex,
    isFirstPage,
    isLastPage,
    pagesNumber,
    computedRowsPerPageOptions,
    computedRowsNumber,
    firstPage,
    prevPage,
    nextPage,
    lastPage
  };
}
const useTableRowSelectionProps = {
  selection: {
    type: String,
    default: "none",
    validator: (v) => ["single", "multiple", "none"].includes(v)
  },
  selected: {
    type: Array,
    default: () => []
  }
};
const useTableRowSelectionEmits = ["update:selected", "selection"];
function useTableRowSelection(props, emit, computedRows, getRowKey) {
  const selectedKeys = computed(() => {
    const keys = {};
    props.selected.map(getRowKey.value).forEach((key) => {
      keys[key] = true;
    });
    return keys;
  });
  const hasSelectionMode = computed(() => {
    return props.selection !== "none";
  });
  const singleSelection = computed(() => {
    return props.selection === "single";
  });
  const multipleSelection = computed(() => {
    return props.selection === "multiple";
  });
  const allRowsSelected = computed(
    () => computedRows.value.length !== 0 && computedRows.value.every(
      (row) => selectedKeys.value[getRowKey.value(row)] === true
    )
  );
  const someRowsSelected = computed(
    () => allRowsSelected.value !== true && computedRows.value.some((row) => selectedKeys.value[getRowKey.value(row)] === true)
  );
  const rowsSelectedNumber = computed(() => props.selected.length);
  function isRowSelected(key) {
    return selectedKeys.value[key] === true;
  }
  function clearSelection() {
    emit("update:selected", []);
  }
  function updateSelection(keys, rows, added, evt) {
    emit("selection", { rows, added, keys, evt });
    const payload = singleSelection.value === true ? added === true ? rows : [] : added === true ? props.selected.concat(rows) : props.selected.filter(
      (row) => keys.includes(getRowKey.value(row)) === false
    );
    emit("update:selected", payload);
  }
  return {
    hasSelectionMode,
    singleSelection,
    multipleSelection,
    allRowsSelected,
    someRowsSelected,
    rowsSelectedNumber,
    isRowSelected,
    clearSelection,
    updateSelection
  };
}
function getVal(val) {
  return Array.isArray(val) ? val.slice() : [];
}
const useTableRowExpandProps = {
  expanded: Array
};
const useTableRowExpandEmits = ["update:expanded"];
function useTableRowExpand(props, emit) {
  const innerExpanded = ref(getVal(props.expanded));
  watch(() => props.expanded, (val) => {
    innerExpanded.value = getVal(val);
  });
  function isRowExpanded(key) {
    return innerExpanded.value.includes(key);
  }
  function setExpanded(val) {
    if (props.expanded !== void 0) {
      emit("update:expanded", val);
    } else {
      innerExpanded.value = val;
    }
  }
  function updateExpanded(key, add) {
    const target = innerExpanded.value.slice();
    const index = target.indexOf(key);
    if (add === true) {
      if (index === -1) {
        target.push(key);
        setExpanded(target);
      }
    } else if (index !== -1) {
      target.splice(index, 1);
      setExpanded(target);
    }
  }
  return {
    isRowExpanded,
    setExpanded,
    updateExpanded
  };
}
const useTableColumnSelectionProps = {
  visibleColumns: Array
};
function useTableColumnSelection(props, computedPagination, hasSelectionMode) {
  const colList = computed(() => {
    if (props.columns !== void 0) {
      return props.columns;
    }
    const row = props.rows[0];
    return row !== void 0 ? Object.keys(row).map((name) => ({
      name,
      label: name.toUpperCase(),
      field: name,
      align: isNumber(row[name]) ? "right" : "left",
      sortable: true
    })) : [];
  });
  const computedCols = computed(() => {
    const { sortBy, descending } = computedPagination.value;
    const cols = props.visibleColumns !== void 0 ? colList.value.filter((col) => col.required === true || props.visibleColumns.includes(col.name) === true) : colList.value;
    return cols.map((col) => {
      const align = col.align || "right";
      const alignClass = `text-${align}`;
      return {
        ...col,
        align,
        __iconClass: `q-table__sort-icon q-table__sort-icon--${align}`,
        __thClass: alignClass + (col.headerClasses !== void 0 ? " " + col.headerClasses : "") + (col.sortable === true ? " sortable" : "") + (col.name === sortBy ? ` sorted ${descending === true ? "sort-desc" : ""}` : ""),
        __tdStyle: col.style !== void 0 ? typeof col.style !== "function" ? () => col.style : col.style : () => null,
        __tdClass: col.classes !== void 0 ? typeof col.classes !== "function" ? () => alignClass + " " + col.classes : (row) => alignClass + " " + col.classes(row) : () => alignClass
      };
    });
  });
  const computedColsMap = computed(() => {
    const names = {};
    computedCols.value.forEach((col) => {
      names[col.name] = col;
    });
    return names;
  });
  const computedColspan = computed(() => {
    return props.tableColspan !== void 0 ? props.tableColspan : computedCols.value.length + (hasSelectionMode.value === true ? 1 : 0);
  });
  return {
    colList,
    computedCols,
    computedColsMap,
    computedColspan
  };
}
const bottomClass = "q-table__bottom row items-center";
const virtScrollPassthroughProps = {};
commonVirtScrollPropsList.forEach((p) => {
  virtScrollPassthroughProps[p] = {};
});
var QTable = createComponent({
  name: "QTable",
  props: {
    rows: {
      type: Array,
      required: true
    },
    rowKey: {
      type: [String, Function],
      default: "id"
    },
    columns: Array,
    loading: Boolean,
    iconFirstPage: String,
    iconPrevPage: String,
    iconNextPage: String,
    iconLastPage: String,
    title: String,
    hideHeader: Boolean,
    grid: Boolean,
    gridHeader: Boolean,
    dense: Boolean,
    flat: Boolean,
    bordered: Boolean,
    square: Boolean,
    separator: {
      type: String,
      default: "horizontal",
      validator: (v) => ["horizontal", "vertical", "cell", "none"].includes(v)
    },
    wrapCells: Boolean,
    virtualScroll: Boolean,
    virtualScrollTarget: {},
    ...virtScrollPassthroughProps,
    noDataLabel: String,
    noResultsLabel: String,
    loadingLabel: String,
    selectedRowsLabel: Function,
    rowsPerPageLabel: String,
    paginationLabel: Function,
    color: {
      type: String,
      default: "grey-8"
    },
    titleClass: [String, Array, Object],
    tableStyle: [String, Array, Object],
    tableClass: [String, Array, Object],
    tableHeaderStyle: [String, Array, Object],
    tableHeaderClass: [String, Array, Object],
    tableRowStyleFn: Function,
    tableRowClassFn: Function,
    cardContainerClass: [String, Array, Object],
    cardContainerStyle: [String, Array, Object],
    cardStyle: [String, Array, Object],
    cardClass: [String, Array, Object],
    cardStyleFn: Function,
    cardClassFn: Function,
    hideBottom: Boolean,
    hideSelectedBanner: Boolean,
    hideNoData: Boolean,
    hidePagination: Boolean,
    onRowClick: Function,
    onRowDblclick: Function,
    onRowContextmenu: Function,
    ...useDarkProps,
    ...useFullscreenProps,
    ...useTableColumnSelectionProps,
    ...useTableFilterProps,
    ...useTablePaginationProps,
    ...useTableRowExpandProps,
    ...useTableRowSelectionProps,
    ...useTableSortProps
  },
  emits: [
    "request",
    "virtualScroll",
    ...useFullscreenEmits,
    ...useTableRowExpandEmits,
    ...useTableRowSelectionEmits
  ],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const isDark = useDark(props, $q);
    const { inFullscreen, toggleFullscreen } = useFullscreen();
    const getRowKey = computed(() => typeof props.rowKey === "function" ? props.rowKey : (row) => row[props.rowKey]);
    const rootRef = ref(null);
    const virtScrollRef = ref(null);
    const hasVirtScroll = computed(() => props.grid !== true && props.virtualScroll === true);
    const cardDefaultClass = computed(
      () => " q-table__card" + (isDark.value === true ? " q-table__card--dark q-dark" : "") + (props.square === true ? " q-table--square" : "") + (props.flat === true ? " q-table--flat" : "") + (props.bordered === true ? " q-table--bordered" : "")
    );
    const containerClass = computed(
      () => `q-table__container q-table--${props.separator}-separator column no-wrap` + (props.grid === true ? " q-table--grid" : cardDefaultClass.value) + (isDark.value === true ? " q-table--dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "") + (inFullscreen.value === true ? " fullscreen scroll" : "")
    );
    const rootContainerClass = computed(
      () => containerClass.value + (props.loading === true ? " q-table--loading" : "")
    );
    watch(
      () => props.tableStyle + props.tableClass + props.tableHeaderStyle + props.tableHeaderClass + containerClass.value,
      () => {
        var _a;
        hasVirtScroll.value === true && ((_a = virtScrollRef.value) == null ? void 0 : _a.reset());
      }
    );
    const {
      innerPagination,
      computedPagination,
      isServerSide,
      requestServerInteraction,
      setPagination
    } = useTablePaginationState(vm, getCellValue);
    const { computedFilterMethod } = useTableFilter(props, setPagination);
    const { isRowExpanded, setExpanded, updateExpanded } = useTableRowExpand(props, emit);
    const filteredSortedRows = computed(() => {
      let rows = props.rows;
      if (isServerSide.value === true || rows.length === 0) {
        return rows;
      }
      const { sortBy, descending } = computedPagination.value;
      if (props.filter) {
        rows = computedFilterMethod.value(rows, props.filter, computedCols.value, getCellValue);
      }
      if (columnToSort.value !== null) {
        rows = computedSortMethod.value(
          props.rows === rows ? rows.slice() : rows,
          sortBy,
          descending
        );
      }
      return rows;
    });
    const filteredSortedRowsNumber = computed(() => filteredSortedRows.value.length);
    const computedRows = computed(() => {
      let rows = filteredSortedRows.value;
      if (isServerSide.value === true) {
        return rows;
      }
      const { rowsPerPage } = computedPagination.value;
      if (rowsPerPage !== 0) {
        if (firstRowIndex.value === 0 && props.rows !== rows) {
          if (rows.length > lastRowIndex.value) {
            rows = rows.slice(0, lastRowIndex.value);
          }
        } else {
          rows = rows.slice(firstRowIndex.value, lastRowIndex.value);
        }
      }
      return rows;
    });
    const {
      hasSelectionMode,
      singleSelection,
      multipleSelection,
      allRowsSelected,
      someRowsSelected,
      rowsSelectedNumber,
      isRowSelected,
      clearSelection,
      updateSelection
    } = useTableRowSelection(props, emit, computedRows, getRowKey);
    const { colList, computedCols, computedColsMap, computedColspan } = useTableColumnSelection(props, computedPagination, hasSelectionMode);
    const { columnToSort, computedSortMethod, sort } = useTableSort(props, computedPagination, colList, setPagination);
    const {
      firstRowIndex,
      lastRowIndex,
      isFirstPage,
      isLastPage,
      pagesNumber,
      computedRowsPerPageOptions,
      computedRowsNumber,
      firstPage,
      prevPage,
      nextPage,
      lastPage
    } = useTablePagination(vm, innerPagination, computedPagination, isServerSide, setPagination, filteredSortedRowsNumber);
    const nothingToDisplay = computed(() => computedRows.value.length === 0);
    const virtProps = computed(() => {
      const acc = {};
      commonVirtScrollPropsList.forEach((p) => {
        acc[p] = props[p];
      });
      if (acc.virtualScrollItemSize === void 0) {
        acc.virtualScrollItemSize = props.dense === true ? 28 : 48;
      }
      return acc;
    });
    function resetVirtualScroll() {
      hasVirtScroll.value === true && virtScrollRef.value.reset();
    }
    function getBody() {
      if (props.grid === true) {
        return getGridBody();
      }
      const header = props.hideHeader !== true ? getTHead : null;
      if (hasVirtScroll.value === true) {
        const topRow = slots["top-row"];
        const bottomRow = slots["bottom-row"];
        const virtSlots = {
          default: (props2) => getTBodyTR(props2.item, slots.body, props2.index)
        };
        if (topRow !== void 0) {
          const topContent = h("tbody", topRow({ cols: computedCols.value }));
          virtSlots.before = header === null ? () => topContent : () => [header()].concat(topContent);
        } else if (header !== null) {
          virtSlots.before = header;
        }
        if (bottomRow !== void 0) {
          virtSlots.after = () => h("tbody", bottomRow({ cols: computedCols.value }));
        }
        return h(QVirtualScroll, {
          ref: virtScrollRef,
          class: props.tableClass,
          style: props.tableStyle,
          ...virtProps.value,
          scrollTarget: props.virtualScrollTarget,
          items: computedRows.value,
          type: "__qtable",
          tableColspan: computedColspan.value,
          onVirtualScroll: onVScroll
        }, virtSlots);
      }
      const child = [
        getTBody()
      ];
      if (header !== null) {
        child.unshift(header());
      }
      return getTableMiddle({
        class: ["q-table__middle scroll", props.tableClass],
        style: props.tableStyle
      }, child);
    }
    function scrollTo(toIndex, edge) {
      if (virtScrollRef.value !== null) {
        virtScrollRef.value.scrollTo(toIndex, edge);
        return;
      }
      toIndex = parseInt(toIndex, 10);
      const rowEl = rootRef.value.querySelector(`tbody tr:nth-of-type(${toIndex + 1})`);
      if (rowEl !== null) {
        const scrollTarget = rootRef.value.querySelector(".q-table__middle.scroll");
        const offsetTop = rowEl.offsetTop - props.virtualScrollStickySizeStart;
        const direction = offsetTop < scrollTarget.scrollTop ? "decrease" : "increase";
        scrollTarget.scrollTop = offsetTop;
        emit("virtualScroll", {
          index: toIndex,
          from: 0,
          to: innerPagination.value.rowsPerPage - 1,
          direction
        });
      }
    }
    function onVScroll(info) {
      emit("virtualScroll", info);
    }
    function getProgress() {
      return [
        h(QLinearProgress, {
          class: "q-table__linear-progress",
          color: props.color,
          dark: isDark.value,
          indeterminate: true,
          trackColor: "transparent"
        })
      ];
    }
    function getTBodyTR(row, bodySlot, pageIndex) {
      const key = getRowKey.value(row), selected = isRowSelected(key);
      if (bodySlot !== void 0) {
        const cfg = {
          key,
          row,
          pageIndex,
          __trClass: selected ? "selected" : ""
        };
        if (props.tableRowStyleFn !== void 0) {
          cfg.__trStyle = props.tableRowStyleFn(row);
        }
        if (props.tableRowClassFn !== void 0) {
          const cls = props.tableRowClassFn(row);
          if (cls) {
            cfg.__trClass = `${cls} ${cfg.__trClass}`;
          }
        }
        return bodySlot(
          getBodyScope(cfg)
        );
      }
      const bodyCell = slots["body-cell"], child = computedCols.value.map((col) => {
        const bodyCellCol = slots[`body-cell-${col.name}`], slot = bodyCellCol !== void 0 ? bodyCellCol : bodyCell;
        return slot !== void 0 ? slot(getBodyCellScope({ key, row, pageIndex, col })) : h("td", {
          class: col.__tdClass(row),
          style: col.__tdStyle(row)
        }, getCellValue(col, row));
      });
      if (hasSelectionMode.value === true) {
        const slot = slots["body-selection"];
        const content = slot !== void 0 ? slot(getBodySelectionScope({ key, row, pageIndex })) : [
          h(QCheckbox, {
            modelValue: selected,
            color: props.color,
            dark: isDark.value,
            dense: props.dense,
            "onUpdate:modelValue": (adding, evt) => {
              updateSelection([key], [row], adding, evt);
            }
          })
        ];
        child.unshift(
          h("td", { class: "q-table--col-auto-width" }, content)
        );
      }
      const data = { key, class: { selected } };
      if (props.onRowClick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onClick = (evt) => {
          emit("rowClick", evt, row, pageIndex);
        };
      }
      if (props.onRowDblclick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onDblclick = (evt) => {
          emit("rowDblclick", evt, row, pageIndex);
        };
      }
      if (props.onRowContextmenu !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onContextmenu = (evt) => {
          emit("rowContextmenu", evt, row, pageIndex);
        };
      }
      if (props.tableRowStyleFn !== void 0) {
        data.style = props.tableRowStyleFn(row);
      }
      if (props.tableRowClassFn !== void 0) {
        const cls = props.tableRowClassFn(row);
        if (cls) {
          data.class[cls] = true;
        }
      }
      return h("tr", data, child);
    }
    function getTBody() {
      const body = slots.body, topRow = slots["top-row"], bottomRow = slots["bottom-row"];
      let child = computedRows.value.map(
        (row, pageIndex) => getTBodyTR(row, body, pageIndex)
      );
      if (topRow !== void 0) {
        child = topRow({ cols: computedCols.value }).concat(child);
      }
      if (bottomRow !== void 0) {
        child = child.concat(bottomRow({ cols: computedCols.value }));
      }
      return h("tbody", child);
    }
    function getBodyScope(data) {
      injectBodyCommonScope(data);
      data.cols = data.cols.map(
        (col) => injectProp({ ...col }, "value", () => getCellValue(col, data.row))
      );
      return data;
    }
    function getBodyCellScope(data) {
      injectBodyCommonScope(data);
      injectProp(data, "value", () => getCellValue(data.col, data.row));
      return data;
    }
    function getBodySelectionScope(data) {
      injectBodyCommonScope(data);
      return data;
    }
    function injectBodyCommonScope(data) {
      Object.assign(data, {
        cols: computedCols.value,
        colsMap: computedColsMap.value,
        sort,
        rowIndex: firstRowIndex.value + data.pageIndex,
        color: props.color,
        dark: isDark.value,
        dense: props.dense
      });
      hasSelectionMode.value === true && injectProp(
        data,
        "selected",
        () => isRowSelected(data.key),
        (adding, evt) => {
          updateSelection([data.key], [data.row], adding, evt);
        }
      );
      injectProp(
        data,
        "expand",
        () => isRowExpanded(data.key),
        (adding) => {
          updateExpanded(data.key, adding);
        }
      );
    }
    function getCellValue(col, row) {
      const val = typeof col.field === "function" ? col.field(row) : row[col.field];
      return col.format !== void 0 ? col.format(val, row) : val;
    }
    const marginalsScope = computed(() => ({
      pagination: computedPagination.value,
      pagesNumber: pagesNumber.value,
      isFirstPage: isFirstPage.value,
      isLastPage: isLastPage.value,
      firstPage,
      prevPage,
      nextPage,
      lastPage,
      inFullscreen: inFullscreen.value,
      toggleFullscreen
    }));
    function getTopDiv() {
      const top = slots.top, topLeft = slots["top-left"], topRight = slots["top-right"], topSelection = slots["top-selection"], hasSelection = hasSelectionMode.value === true && topSelection !== void 0 && rowsSelectedNumber.value > 0, topClass = "q-table__top relative-position row items-center";
      if (top !== void 0) {
        return h("div", { class: topClass }, [top(marginalsScope.value)]);
      }
      let child;
      if (hasSelection === true) {
        child = topSelection(marginalsScope.value).slice();
      } else {
        child = [];
        if (topLeft !== void 0) {
          child.push(
            h("div", { class: "q-table__control" }, [
              topLeft(marginalsScope.value)
            ])
          );
        } else if (props.title) {
          child.push(
            h("div", { class: "q-table__control" }, [
              h("div", {
                class: ["q-table__title", props.titleClass]
              }, props.title)
            ])
          );
        }
      }
      if (topRight !== void 0) {
        child.push(
          h("div", { class: "q-table__separator col" })
        );
        child.push(
          h("div", { class: "q-table__control" }, [
            topRight(marginalsScope.value)
          ])
        );
      }
      if (child.length === 0)
        return;
      return h("div", { class: topClass }, child);
    }
    const headerSelectedValue = computed(() => someRowsSelected.value === true ? null : allRowsSelected.value);
    function getTHead() {
      const child = getTHeadTR();
      if (props.loading === true && slots.loading === void 0) {
        child.push(
          h("tr", { class: "q-table__progress" }, [
            h("th", {
              class: "relative-position",
              colspan: computedColspan.value
            }, getProgress())
          ])
        );
      }
      return h("thead", child);
    }
    function getTHeadTR() {
      const header = slots.header, headerCell = slots["header-cell"];
      if (header !== void 0) {
        return header(
          getHeaderScope({ header: true })
        ).slice();
      }
      const child = computedCols.value.map((col) => {
        const headerCellCol = slots[`header-cell-${col.name}`], slot = headerCellCol !== void 0 ? headerCellCol : headerCell, props2 = getHeaderScope({ col });
        return slot !== void 0 ? slot(props2) : h(QTh, {
          key: col.name,
          props: props2
        }, () => col.label);
      });
      if (singleSelection.value === true && props.grid !== true) {
        child.unshift(
          h("th", { class: "q-table--col-auto-width" }, " ")
        );
      } else if (multipleSelection.value === true) {
        const slot = slots["header-selection"];
        const content = slot !== void 0 ? slot(getHeaderScope({})) : [
          h(QCheckbox, {
            color: props.color,
            modelValue: headerSelectedValue.value,
            dark: isDark.value,
            dense: props.dense,
            "onUpdate:modelValue": onMultipleSelectionSet
          })
        ];
        child.unshift(
          h("th", { class: "q-table--col-auto-width" }, content)
        );
      }
      return [
        h("tr", {
          class: props.tableHeaderClass,
          style: props.tableHeaderStyle
        }, child)
      ];
    }
    function getHeaderScope(data) {
      Object.assign(data, {
        cols: computedCols.value,
        sort,
        colsMap: computedColsMap.value,
        color: props.color,
        dark: isDark.value,
        dense: props.dense
      });
      if (multipleSelection.value === true) {
        injectProp(
          data,
          "selected",
          () => headerSelectedValue.value,
          onMultipleSelectionSet
        );
      }
      return data;
    }
    function onMultipleSelectionSet(val) {
      if (someRowsSelected.value === true) {
        val = false;
      }
      updateSelection(
        computedRows.value.map(getRowKey.value),
        computedRows.value,
        val
      );
    }
    const navIcon = computed(() => {
      const ico = [
        props.iconFirstPage || $q.iconSet.table.firstPage,
        props.iconPrevPage || $q.iconSet.table.prevPage,
        props.iconNextPage || $q.iconSet.table.nextPage,
        props.iconLastPage || $q.iconSet.table.lastPage
      ];
      return $q.lang.rtl === true ? ico.reverse() : ico;
    });
    function getBottomDiv() {
      if (props.hideBottom === true)
        return;
      if (nothingToDisplay.value === true) {
        if (props.hideNoData === true)
          return;
        const message = props.loading === true ? props.loadingLabel || $q.lang.table.loading : props.filter ? props.noResultsLabel || $q.lang.table.noResults : props.noDataLabel || $q.lang.table.noData;
        const noData = slots["no-data"];
        const children = noData !== void 0 ? [noData({ message, icon: $q.iconSet.table.warning, filter: props.filter })] : [
          h(QIcon, {
            class: "q-table__bottom-nodata-icon",
            name: $q.iconSet.table.warning
          }),
          message
        ];
        return h("div", { class: bottomClass + " q-table__bottom--nodata" }, children);
      }
      const bottom = slots.bottom;
      if (bottom !== void 0) {
        return h("div", { class: bottomClass }, [bottom(marginalsScope.value)]);
      }
      const child = props.hideSelectedBanner !== true && hasSelectionMode.value === true && rowsSelectedNumber.value > 0 ? [
        h("div", { class: "q-table__control" }, [
          h("div", [
            (props.selectedRowsLabel || $q.lang.table.selectedRecords)(rowsSelectedNumber.value)
          ])
        ])
      ] : [];
      if (props.hidePagination !== true) {
        return h("div", {
          class: bottomClass + " justify-end"
        }, getPaginationDiv(child));
      }
      if (child.length !== 0) {
        return h("div", { class: bottomClass }, child);
      }
    }
    function onPagSelection(pag) {
      setPagination({
        page: 1,
        rowsPerPage: pag.value
      });
    }
    function getPaginationDiv(child) {
      let control;
      const { rowsPerPage } = computedPagination.value, paginationLabel = props.paginationLabel || $q.lang.table.pagination, paginationSlot = slots.pagination, hasOpts = props.rowsPerPageOptions.length > 1;
      child.push(
        h("div", { class: "q-table__separator col" })
      );
      hasOpts === true && child.push(
        h("div", { class: "q-table__control" }, [
          h("span", { class: "q-table__bottom-item" }, [
            props.rowsPerPageLabel || $q.lang.table.recordsPerPage
          ]),
          h(QSelect, {
            class: "q-table__select inline q-table__bottom-item",
            color: props.color,
            modelValue: rowsPerPage,
            options: computedRowsPerPageOptions.value,
            displayValue: rowsPerPage === 0 ? $q.lang.table.allRows : rowsPerPage,
            dark: isDark.value,
            borderless: true,
            dense: true,
            optionsDense: true,
            optionsCover: true,
            "onUpdate:modelValue": onPagSelection
          })
        ])
      );
      if (paginationSlot !== void 0) {
        control = paginationSlot(marginalsScope.value);
      } else {
        control = [
          h("span", rowsPerPage !== 0 ? { class: "q-table__bottom-item" } : {}, [
            rowsPerPage ? paginationLabel(firstRowIndex.value + 1, Math.min(lastRowIndex.value, computedRowsNumber.value), computedRowsNumber.value) : paginationLabel(1, filteredSortedRowsNumber.value, computedRowsNumber.value)
          ])
        ];
        if (rowsPerPage !== 0 && pagesNumber.value > 1) {
          const btnProps = {
            color: props.color,
            round: true,
            dense: true,
            flat: true
          };
          if (props.dense === true) {
            btnProps.size = "sm";
          }
          pagesNumber.value > 2 && control.push(
            h(QBtn, {
              key: "pgFirst",
              ...btnProps,
              icon: navIcon.value[0],
              disable: isFirstPage.value,
              ariaLabel: $q.lang.pagination.first,
              onClick: firstPage
            })
          );
          control.push(
            h(QBtn, {
              key: "pgPrev",
              ...btnProps,
              icon: navIcon.value[1],
              disable: isFirstPage.value,
              ariaLabel: $q.lang.pagination.prev,
              onClick: prevPage
            }),
            h(QBtn, {
              key: "pgNext",
              ...btnProps,
              icon: navIcon.value[2],
              disable: isLastPage.value,
              ariaLabel: $q.lang.pagination.next,
              onClick: nextPage
            })
          );
          pagesNumber.value > 2 && control.push(
            h(QBtn, {
              key: "pgLast",
              ...btnProps,
              icon: navIcon.value[3],
              disable: isLastPage.value,
              ariaLabel: $q.lang.pagination.last,
              onClick: lastPage
            })
          );
        }
      }
      child.push(
        h("div", { class: "q-table__control" }, control)
      );
      return child;
    }
    function getGridHeader() {
      const child = props.gridHeader === true ? [
        h("table", { class: "q-table" }, [
          getTHead()
        ])
      ] : props.loading === true && slots.loading === void 0 ? getProgress() : void 0;
      return h("div", { class: "q-table__middle" }, child);
    }
    function getGridBody() {
      const item = slots.item !== void 0 ? slots.item : (scope) => {
        const child = scope.cols.map(
          (col) => h("div", { class: "q-table__grid-item-row" }, [
            h("div", { class: "q-table__grid-item-title" }, [col.label]),
            h("div", { class: "q-table__grid-item-value" }, [col.value])
          ])
        );
        if (hasSelectionMode.value === true) {
          const slot = slots["body-selection"];
          const content = slot !== void 0 ? slot(scope) : [
            h(QCheckbox, {
              modelValue: scope.selected,
              color: props.color,
              dark: isDark.value,
              dense: props.dense,
              "onUpdate:modelValue": (adding, evt) => {
                updateSelection([scope.key], [scope.row], adding, evt);
              }
            })
          ];
          child.unshift(
            h("div", { class: "q-table__grid-item-row" }, content),
            h(QSeparator, { dark: isDark.value })
          );
        }
        const data = {
          class: [
            "q-table__grid-item-card" + cardDefaultClass.value,
            props.cardClass
          ],
          style: props.cardStyle
        };
        if (props.cardStyleFn !== void 0) {
          data.style = [data.style, props.cardStyleFn(scope.row)];
        }
        if (props.cardClassFn !== void 0) {
          const cls = props.cardClassFn(scope.row);
          if (cls) {
            data.class[0] += ` ${cls}`;
          }
        }
        if (props.onRowClick !== void 0 || props.onRowDblclick !== void 0 || props.onRowContextmenu !== void 0) {
          data.class[0] += " cursor-pointer";
          if (props.onRowClick !== void 0) {
            data.onClick = (evt) => {
              emit("RowClick", evt, scope.row, scope.pageIndex);
            };
          }
          if (props.onRowDblclick !== void 0) {
            data.onDblclick = (evt) => {
              emit("RowDblclick", evt, scope.row, scope.pageIndex);
            };
          }
          if (props.onRowContextmenu !== void 0) {
            data.onContextmenu = (evt) => {
              emit("rowContextmenu", evt, scope.row, scope.pageIndex);
            };
          }
        }
        return h("div", {
          class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (scope.selected === true ? " q-table__grid-item--selected" : "")
        }, [
          h("div", data, child)
        ]);
      };
      return h("div", {
        class: [
          "q-table__grid-content row",
          props.cardContainerClass
        ],
        style: props.cardContainerStyle
      }, computedRows.value.map((row, pageIndex) => {
        return item(getBodyScope({
          key: getRowKey.value(row),
          row,
          pageIndex
        }));
      }));
    }
    Object.assign(vm.proxy, {
      requestServerInteraction,
      setPagination,
      firstPage,
      prevPage,
      nextPage,
      lastPage,
      isRowSelected,
      clearSelection,
      isRowExpanded,
      setExpanded,
      sort,
      resetVirtualScroll,
      scrollTo,
      getCellValue
    });
    injectMultipleProps(vm.proxy, {
      filteredSortedRows: () => filteredSortedRows.value,
      computedRows: () => computedRows.value,
      computedRowsNumber: () => computedRowsNumber.value
    });
    return () => {
      const child = [getTopDiv()];
      const data = { ref: rootRef, class: rootContainerClass.value };
      if (props.grid === true) {
        child.push(getGridHeader());
      } else {
        Object.assign(data, {
          class: [data.class, props.cardClass],
          style: props.cardStyle
        });
      }
      child.push(
        getBody(),
        getBottomDiv()
      );
      if (props.loading === true && slots.loading !== void 0) {
        child.push(
          slots.loading()
        );
      }
      return h("div", data, child);
    };
  }
});
var LyricsViewDialog_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-6cd81aa5"), n = n(), popScopeId(), n);
const _hoisted_1$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Lyrics", -1));
const _hoisted_2$3 = { class: "row col-all justify-center" };
const _sfc_main$4 = defineComponent({
  __name: "LyricsViewDialog",
  props: {
    trackId: {}
  },
  setup(__props) {
    const props = __props;
    const controller = useLoadableController();
    const trackApi = new TrackApi(apiConfigurationProvider.getApiConfiguration());
    const tableColumnsCustomized = [
      { name: "time", label: "Time", align: "left", field: "time", sortable: false }
    ];
    const tableRows = [];
    const constructUiElements = (lyricsDto) => {
      var _a;
      const possibleLangs = /* @__PURE__ */ new Set();
      (_a = lyricsDto.variants) == null ? void 0 : _a.forEach((variant) => {
        var _a2;
        (_a2 = variant.lines) == null ? void 0 : _a2.forEach((line) => {
          var _a3;
          const base = {
            "time": line.time || "-"
          };
          (_a3 = line.blocks) == null ? void 0 : _a3.forEach((block) => {
            possibleLangs.add(block.lang);
            base[block.lang] = block.text;
          });
          tableRows.push(base);
        });
      });
      possibleLangs.forEach((lang) => {
        tableColumnsCustomized.push({
          name: lang,
          label: lang,
          align: "left",
          field: lang,
          sortable: false
        });
      });
    };
    onMounted(async () => {
      controller.setLoading();
      try {
        const result = await trackApi.getLyrics({ trackId: props.trackId });
        constructUiElements(result);
        console.log(tableRows);
        controller.setSuccess(result);
      } catch (error) {
        controller.setError(error);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        position: "top",
        "backdrop-filter": "blur(3px)"
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "max-width": "100vw", "min-width": "60vw", "max-height": "90vh", "margin-top": "5vh", "border-radius": "5px" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1$4
                ]),
                _: 1
              }),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createVNode(LoadableElement, { "state-controller": unref(controller) }, {
                    loading: withCtx(() => [
                      createBaseVNode("div", _hoisted_2$3, [
                        createVNode(QSpinner, {
                          color: "primary",
                          size: "3em"
                        })
                      ])
                    ]),
                    default: withCtx(() => [
                      createVNode(QTable, {
                        flat: "",
                        bordered: "",
                        dense: "",
                        class: "bg-transparent",
                        "row-key": "index",
                        "hide-bottom": "",
                        "virtual-scroll": "",
                        "rows-per-page-options": [0],
                        columns: tableColumnsCustomized,
                        rows: tableRows
                      })
                    ]),
                    _: 1
                  }, 8, ["state-controller"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var LyricsViewDialog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6cd81aa5"], ["__file", "LyricsViewDialog.vue"]]);
const _hoisted_1$3 = { class: "track-list-table row full-width q-px-none q-pt-lg" };
const _hoisted_2$2 = { class: "flex row items-center text-subtitle1 text-bold" };
const _hoisted_3$1 = { class: "col-12 underline-on-hover pointer-on-hover flex justify-between content-center" };
const _sfc_main$3 = defineComponent({
  __name: "TrackListTable",
  props: {
    tracks: {}
  },
  setup(__props) {
    const $q = useQuasar();
    const $router = useRouter();
    const queueService = inject("queueService");
    const hoveringWhich = ref();
    const trackMenuOptionsCreator = (track, album) => new TrackMenuOptionsBuilder(track, album).addPlayNextOption().addAddToQueueOption().addSearchOnYoutubeOption().build();
    const pagination = {
      rowsPerPage: 0,
      descending: true
    };
    const columns = [
      {
        name: "index",
        required: true,
        label: "#",
        align: "center",
        field: (row) => row.index,
        format: (val) => `${val}`,
        style: "width: 24px",
        sortable: false
      },
      {
        name: "title",
        required: true,
        label: "TITLE",
        align: "left",
        field: (row) => row,
        classes: "text-h4",
        sortable: false
      },
      {
        name: "original",
        required: false,
        label: "ORIGINAL",
        align: "left",
        field: (row) => row.original,
        classes: "text-bold",
        sortable: false
      },
      {
        name: "duration",
        required: true,
        label: "DURATION",
        align: "right",
        field: (row) => row.duration,
        format: (val) => `${Duration.fromDurationString(val).toDurationString()}`,
        sortable: false
      }
    ];
    const props = __props;
    const goToOriginalTrackPage = (originalTrackId) => {
      $router.push({
        name: "OriginalTrack",
        params: { originalId: originalTrackId, page: 1 }
      });
    };
    const showLyrics = (trackId) => {
      console.log(trackId);
      $q.dialog(
        {
          component: LyricsViewDialog,
          componentProps: {
            trackId
          }
        }
      );
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.tracks.entries(), ([disc, tracks]) => {
          return openBlock(), createElementBlock("div", {
            key: disc.id,
            class: "col-12 q-pt-md q-px-md q-pb-lg"
          }, [
            createVNode(unref(QTable), {
              rows: tracks,
              class: "bg-transparent",
              columns,
              pagination,
              separator: "none",
              "row-key": "id",
              flat: "",
              "hide-bottom": "",
              "virtual-scroll": "",
              "hide-pagination": ""
            }, {
              header: withCtx((props2) => [
                createVNode(QTr, { props: props2 }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(props2.cols, (col) => {
                      return openBlock(), createBlock(QTh, {
                        key: col.name,
                        props: props2,
                        class: "border-bottom-thin"
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
              "body-cell-index": withCtx((props2) => [
                createVNode(QTd, {
                  props: props2,
                  class: "q-pa-sm"
                }, {
                  default: withCtx(() => [
                    createVNode(QBtn, {
                      flat: "",
                      round: "",
                      size: "13px",
                      onMouseover: ($event) => hoveringWhich.value = props2.key,
                      onMouseleave: _cache[0] || (_cache[0] = ($event) => hoveringWhich.value = void 0),
                      label: hoveringWhich.value !== props2.key ? props2.value : void 0,
                      icon: hoveringWhich.value === props2.key ? unref(outlinedPlayArrow) : void 0,
                      onClick: ($event) => {
                        var _a;
                        return (_a = unref(queueService)) == null ? void 0 : _a.addTrackById(props2.key, unref(QueueAddMode).PLAY_IMMEDIATELY);
                      }
                    }, null, 8, ["onMouseover", "label", "icon", "onClick"])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-title": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2$2, [
                      createBaseVNode("div", _hoisted_3$1, [
                        createTextVNode(toDisplayString(props2.value.name._default) + " ", 1),
                        props2.value.hasLyrics ? (openBlock(), createBlock(QBtn, {
                          key: 0,
                          round: "",
                          flat: "",
                          dense: "",
                          size: "13px",
                          class: "q-ml-sm",
                          icon: unref(outlinedLyrics),
                          color: "primary",
                          onClick: ($event) => showLyrics(props2.key)
                        }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell-original": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(props2.value, (prop) => {
                      return openBlock(), createBlock(QChip, {
                        square: "",
                        key: prop.id,
                        clickable: "",
                        onClick: ($event) => goToOriginalTrackPage(prop.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(prop.title.en), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]);
                    }), 128))
                  ]),
                  _: 2
                }, 1032, ["props"])
              ]),
              "body-cell": withCtx((props2) => [
                createVNode(QTd, { props: props2 }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(props2.value), 1)
                  ]),
                  _: 2
                }, 1032, ["props"]),
                createVNode(TrackMenu, {
                  options: trackMenuOptionsCreator(props2.row, disc)
                }, null, 8, ["options"])
              ]),
              _: 2
            }, 1032, ["rows"])
          ]);
        }), 128))
      ]);
    };
  }
});
var TrackListTable = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "TrackListTable.vue"]]);
class AssetUtils {
  static downloadAsset(asset) {
    const a = document.createElement("a");
    a.href = `${asset.url}?download=true`;
    a.target = "_blank";
    a.click();
  }
  static openAssetInNewTab(asset) {
    window.open(asset.url, "_blank");
  }
}
const _hoisted_1$2 = ["src"];
const _sfc_main$2 = defineComponent({
  __name: "AssetPreviewDialog",
  props: {
    asset: {}
  },
  setup(__props) {
    const PREVIEWABLE_MIME_TYPES = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/bmp",
      "image/webp",
      "image/x-icon",
      "text/plain",
      "text/html",
      "text/xml",
      "video/mp4",
      "video/webm",
      "video/mpeg",
      "audio/mpeg3",
      "audio/ogg",
      "audio/mp4",
      "audio/flac",
      "audio/midi"
    ];
    const isPreviewable = (asset) => {
      if (!asset.mime) {
        return false;
      }
      return PREVIEWABLE_MIME_TYPES.includes(asset.mime);
    };
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        position: "top",
        "backdrop-filter": "brightness(50%)"
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "1200px", "max-width": "80vw", "margin-top": "10vh", "border-radius": "5px" } }, {
            default: withCtx(() => [
              createVNode(QToolbar, { class: "bg-primary" }, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createTextVNode(" Preview of " + toDisplayString(props.asset.name), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(QBtn, {
                    flat: "",
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(AssetUtils).downloadAsset(props.asset))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Download ")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              isPreviewable(props.asset) ? (openBlock(), createBlock(QCardSection, { key: 0 }, {
                default: withCtx(() => [
                  createBaseVNode("iframe", {
                    src: props.asset.url,
                    width: "100%",
                    height: "600"
                  }, null, 8, _hoisted_1$2)
                ]),
                _: 1
              })) : (openBlock(), createBlock(QCardSection, { key: 1 }, {
                default: withCtx(() => [
                  createTextVNode(" Preview not available for this asset. (Unsupported MIME type: " + toDisplayString(props.asset.mime) + ") ", 1)
                ]),
                _: 1
              }))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var AssetPreviewDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "AssetPreviewDialog.vue"]]);
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Album Assets", -1);
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h6 text-center" }, "No assets found", -1);
const _sfc_main$1 = defineComponent({
  __name: "AlbumAssetsViewerDialog",
  props: {
    album: {}
  },
  setup(__props) {
    const $q = useQuasar();
    const props = __props;
    const albumAssets = computed(() => {
      return props.album.otherFiles.sort((a, b) => {
        if (!a.name)
          return 1;
        if (!b.name)
          return -1;
        return a.name.localeCompare(b.name);
      });
    });
    const previewAsset = (asset) => {
      $q.dialog({
        component: AssetPreviewDialog,
        componentProps: {
          asset
        }
      });
    };
    const tableColumns = [
      {
        name: "id",
        label: "Asset ID",
        align: "center",
        field: (row) => row.id
      },
      {
        name: "name",
        label: "Name",
        align: "left",
        field: (row) => row.name
      },
      {
        name: "size",
        label: "Size (MB)",
        align: "center",
        field: (row) => row.size,
        format: (val) => `${(val / 1024 / 1024).toFixed(2)}`
      },
      {
        name: "mime-type",
        label: "Content Type",
        align: "center",
        field: (row) => row.mime
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(QDialog), {
        position: "top",
        "backdrop-filter": "brightness(50%)"
      }, {
        default: withCtx(() => [
          createVNode(QCard, { style: { "width": "1200px", "max-width": "80vw", "margin-top": "10vh", "border-radius": "5px" } }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1$1
                ]),
                _: 1
              }),
              albumAssets.value.length > 0 ? (openBlock(), createBlock(QCardSection, {
                key: 0,
                class: "q-pt-none"
              }, {
                default: withCtx(() => [
                  createVNode(QTable, {
                    rows: albumAssets.value,
                    columns: tableColumns,
                    class: "bg-transparent",
                    "row-key": "id",
                    "rows-per-page-options": [10, 20, 50, 100],
                    flat: ""
                  }, {
                    body: withCtx((props2) => [
                      createVNode(QTr, { props: props2 }, {
                        default: withCtx(() => [
                          createVNode(QTd, {
                            key: "id",
                            props: props2
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props2.row.id), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(QTd, {
                            key: "name",
                            props: props2
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props2.row.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(QTd, {
                            key: "size",
                            props: props2
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString((props2.row.size / 1024 / 1024).toFixed(2)), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(QTd, {
                            key: "mime-type",
                            props: props2
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(props2.row.mime), 1)
                            ]),
                            _: 2
                          }, 1032, ["props"]),
                          createVNode(QMenu, { "touch-position": "" }, {
                            default: withCtx(() => [
                              createVNode(QList, { style: { "min-width": "100px" } }, {
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    onClick: ($event) => previewAsset(props2.row)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(QAvatar, { icon: unref(matPreview) }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Preview")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [ClosePopup]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    onClick: ($event) => unref(AssetUtils).openAssetInNewTab(props2.row)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(QAvatar, { icon: unref(matOpenInNew) }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Open in new tab")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [ClosePopup]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    onClick: ($event) => unref(AssetUtils).downloadAsset(props2.row)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, { avatar: "" }, {
                                        default: withCtx(() => [
                                          createVNode(QAvatar, { icon: unref(matFileDownload) }, null, 8, ["icon"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Download")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])), [
                                    [ClosePopup]
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["props"])
                    ]),
                    _: 1
                  }, 8, ["rows"])
                ]),
                _: 1
              })) : (openBlock(), createBlock(QCardSection, {
                key: 1,
                class: "q-pb-none"
              }, {
                default: withCtx(() => [
                  _hoisted_2$1
                ]),
                _: 1
              })),
              createVNode(QCardActions, { align: "right" }, {
                default: withCtx(() => [
                  withDirectives(createVNode(QBtn, {
                    flat: "",
                    label: "Close"
                  }, null, 512), [
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
      });
    };
  }
});
var AlbumAssetsViewerDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "AlbumAssetsViewerDialog.vue"]]);
var AlbumPage_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-180fb008"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row col-all q-mt-lg album-page-body" };
const _hoisted_2 = { class: "col-12 q-pt-md" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Error", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle1" }, "Failed to load album", -1));
const _hoisted_5 = { class: "text-caption" };
const _hoisted_6 = { class: "text-caption" };
const _sfc_main = defineComponent({
  __name: "AlbumPage",
  setup(__props) {
    const apiConfigProvider = inject("apiConfigProvider");
    if (!apiConfigProvider) {
      throw new Error("API configuration provider not found");
    }
    const $q = useQuasar();
    const $router = useRouter();
    const routeParams = {
      albumId: computed(() => $router.currentRoute.value.params.albumId)
    };
    const controller = useLoadableController();
    const queueService = inject("queueService");
    const initializeViewModelSingleDisc = (master) => {
      const tracks = /* @__PURE__ */ new Map();
      if (master.tracks) {
        master.tracks.sort((a, b) => a.index - b.index);
        tracks.set(master, master.tracks);
      }
      return {
        masterAlbum: master,
        discs: [],
        tracks
      };
    };
    const initializeViewModelMultiDisc = (master, discs) => {
      const tracks = /* @__PURE__ */ new Map();
      if (master.tracks) {
        tracks.set(master, master.tracks);
      }
      discs.forEach((disc) => {
        if (disc.tracks) {
          disc.tracks.sort((a, b) => a.index - b.index);
          tracks.set(disc, disc.tracks);
        }
      });
      return {
        masterAlbum: master,
        discs,
        tracks
      };
    };
    const initializeViewModel = (master, discs) => {
      if (discs.length > 0) {
        return initializeViewModelMultiDisc(master, discs);
      } else {
        return initializeViewModelSingleDisc(master);
      }
    };
    const loadMultiDiscAlbum = async (masterAlbumId) => {
      var _a;
      const albumApi = new AlbumApi(
        apiConfigProvider.getApiConfigurationWithAuth()
      );
      const masterAlbum = await albumApi.getAlbum({
        id: masterAlbumId
      });
      const discs = await Promise.all(
        ((_a = masterAlbum.childAlbums) == null ? void 0 : _a.map(
          (childAlbum) => albumApi.getAlbum({
            id: childAlbum.id
          })
        )) || []
      );
      return {
        master: masterAlbum,
        discs
      };
    };
    const load = async (albumId) => {
      var _a;
      controller.setLoading();
      try {
        const albumApi = new AlbumApi(
          apiConfigProvider.getApiConfigurationWithAuth()
        );
        const album = await albumApi.getAlbum({
          id: albumId
        });
        const isMultiDisc = album.parentAlbum || (((_a = album == null ? void 0 : album.childAlbums) == null ? void 0 : _a.length) || 0) > 0;
        let viewModel;
        if (isMultiDisc) {
          const isMaster = !album.parentAlbum && album.discNumber === 0;
          if (!isMaster) {
            $router.replace({
              name: "Album",
              params: { albumId: album.parentAlbum.id }
            });
          }
          const masterAlbumId = album.id;
          const { master, discs } = await loadMultiDiscAlbum(masterAlbumId);
          viewModel = initializeViewModel(master, discs);
        } else {
          viewModel = initializeViewModel(album, []);
        }
        controller.setSuccess(viewModel);
      } catch (error) {
        controller.setError(error);
        throw error;
      }
    };
    const showAlbumAssetDialog = (album) => {
      $q.dialog(
        {
          component: AlbumAssetsViewerDialog,
          componentProps: {
            album
          }
        }
      );
    };
    const playAlbum = (viewModel, addMode) => {
      const tracks = Array.from(viewModel.tracks.values()).reduce((acc, val) => acc.concat(val), []);
      const trackIds = tracks.map((track) => track.id);
      queueService == null ? void 0 : queueService.addTracksByIds(trackIds, addMode);
    };
    onMounted(() => {
      load(routeParams.albumId.value);
      watch(routeParams.albumId, async (albumId) => {
        await load(albumId);
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(LoadableElement, { "state-controller": unref(controller) }, {
            loading: withCtx(() => [
              createVNode(QSpinnerGears, { size: "100px" })
            ]),
            default: withCtx(({ data }) => [
              createVNode(AlbumInfoSection, {
                album: data.masterAlbum
              }, null, 8, ["album"]),
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", _hoisted_2, [
                  createVNode(QBtn, {
                    fab: "",
                    round: "",
                    class: "play-btn q-mx-md",
                    icon: unref(outlinedPlayArrow),
                    onClick: ($event) => playAlbum(data, unref(QueueAddMode).PLAY_IMMEDIATELY)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          createTextVNode("Play")
                        ]),
                        _: 1
                      }),
                      createVNode(QMenu, {
                        "touch-position": "",
                        "context-menu": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QList, { style: { "min-width": "150px" } }, {
                            default: withCtx(() => [
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                onClick: ($event) => playAlbum(data, unref(QueueAddMode).APPEND_NEXT)
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Play Next")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, {
                                clickable: "",
                                onClick: ($event) => playAlbum(data, unref(QueueAddMode).APPEND_LAST)
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Add to Queue")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["icon", "onClick"]),
                  createVNode(QBtn, {
                    fab: "",
                    flat: "",
                    class: "like-btn q-mx-md",
                    icon: unref(outlinedFavoriteBorder)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          createTextVNode("Save")
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
                                onClick: ($event) => showAlbumAssetDialog(data.masterAlbum)
                              }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QAvatar, {
                                        icon: unref(outlinedDescription),
                                        size: "lg"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("View Other Assets")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])), [
                                [ClosePopup]
                              ]),
                              withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                                default: withCtx(() => [
                                  createVNode(QItemSection, { avatar: "" }, {
                                    default: withCtx(() => [
                                      createVNode(QAvatar, {
                                        icon: unref(outlinedEditNote),
                                        size: "lg"
                                      }, null, 8, ["icon"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(QItemSection, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Attribute Editor")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })), [
                                [ClosePopup]
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["icon"])
                ]),
                createVNode(TrackListTable, {
                  tracks: data.tracks
                }, null, 8, ["tracks"])
              ])
            ]),
            error: withCtx(({ error }) => [
              createVNode(unref(QCard), {
                class: "q-ma-md",
                style: { "max-width": "400px" }
              }, {
                default: withCtx(() => [
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      _hoisted_3,
                      _hoisted_4,
                      createBaseVNode("div", _hoisted_5, toDisplayString(error == null ? void 0 : error.message), 1),
                      createBaseVNode("div", _hoisted_6, toDisplayString(error == null ? void 0 : error.stack), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QSeparator, { inset: "" }),
                  createVNode(QCardSection, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(error == null ? void 0 : error.stack), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 1
          }, 8, ["state-controller"])
        ]),
        _: 1
      });
    };
  }
});
var AlbumPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-180fb008"], ["__file", "AlbumPage.vue"]]);
export { AlbumPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLjAxMTFhMGZjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvQWxidW1JbmZvU2VjdGlvbi52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZnVsbHNjcmVlbi91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUuc29ydC9zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1maWx0ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXBhZ2luYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1leHBhbmQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWNvbHVtbi1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUYWJsZS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvTHlyaWNzVmlld0RpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvVHJhY2tMaXN0VGFibGUudnVlIiwiLi4vLi4vLi4vc3JjL3V0aWxzL0Fzc2V0VXRpbHMudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EaWFsb2dzL0Fzc2V0UHJldmlld0RpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EaWFsb2dzL0FsYnVtQXNzZXRzVmlld2VyRGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9BbGJ1bVBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCI+XG4gICAgPERhdGFTb3VyY2VCdXR0b24gOmRhdGFTb3VyY2VzPVwidmlld01vZGVsLmRhdGFTb3VyY2VzXCI+PC9EYXRhU291cmNlQnV0dG9uPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiY29sLTQgcS1weC1tZFwiXG4gICAgICBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIlxuICAgID5cbiAgICAgIDxxLWltZ1xuICAgICAgICA6c3JjPVwidmlld01vZGVsLmFsYnVtQ292ZXJVcmxcIlxuICAgICAgICByYXRpbz1cIjFcIlxuICAgICAgICB2LWlmPVwidmlld01vZGVsLmFsYnVtQ292ZXJVcmxcIlxuICAgICAgPlxuICAgICAgPC9xLWltZz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGl0ZW1zLWVuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5BbGJ1bTwvZGl2PlxuICAgICAgICAgIDxoMyBjbGFzcz1cInEtbWItc20tc20gcS1tYi1ub25lIHEtbXQtbWRcIj5cbiAgICAgICAgICAgIHt7IHZpZXdNb2RlbC5hbGJ1bU5hbWUgfX1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwiYXJ0aXN0c1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWV0YWRhdGEtZW50cnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkIGN1cnNvci1wb2ludGVyIGFydGlzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJnb3RvQ2lyY2xlKGFydGlzdElkIGFzIHN0cmluZylcIlxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKGFydGlzdE5hbWUsIGFydGlzdElkKSBpbiB2aWV3TW9kZWwuYWxidW1BcnRpc3RzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiYXJ0aXN0SWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgYXJ0aXN0TmFtZSB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yXG4gICAgICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgICAgICAgIHNwYWNlZFxuICAgICAgICAgICAgPjwvcS1zZXBhcmF0b3I+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJyZWxlYXNlLWRhdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1ldGFkYXRhLWVudHJ5XCJcbiAgICAgICAgICAgICAgdi1pZj1cInZpZXdNb2RlbC5yZWxlYXNlRGF0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgICAgIHt7IHZpZXdNb2RlbC5yZWxlYXNlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8gfSBmcm9tICdiYWNrZW5kLWFwaS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge1xuICBvdXRsaW5lZEluZm8sXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCBEYXRhU291cmNlQnV0dG9uIGZyb20gJy4uL0RhdGFTb3VyY2VCdG4vRGF0YVNvdXJjZUJ1dHRvbi52dWUnO1xuXG5pbnRlcmZhY2UgQWxidW1JbmZvU2VjdGlvblByb3BzIHtcbiAgYWxidW06IEFsYnVtUmVhZER0bztcbn1cblxuaW50ZXJmYWNlIEFsYnVtSW5mb1NlY3Rpb25WaWV3TW9kZWwge1xuICBhbGJ1bU5hbWU6IHN0cmluZztcbiAgLy8gQXJ0aXN0IGlkIC0+IGFydGlzdCBuYW1lLCBpZCBuZWVkZWQgZm9yIG5hdmlnYXRpb25cbiAgYWxidW1BcnRpc3RzOiB7IFthcnRpc3RJZDogc3RyaW5nXTogc3RyaW5nIH07XG4gIGFsYnVtQ292ZXJVcmw6IHN0cmluZyB8IG51bGw7XG5cbiAgcmVsZWFzZURhdGU6IERhdGUgfCBudWxsO1xuXG4gIC8vIERhdGEgcHJvdmlkZXJzXG4gIGRhdGFTb3VyY2VzOiBzdHJpbmdbXTtcbn1cblxuLy8gSW5qZWN0ZWQgc2VydmljZXMvZGF0YVxuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxBbGJ1bUluZm9TZWN0aW9uUHJvcHM+KCk7XG5jb25zdCBpbml0aWFsaXplVmlld01vZGVsID0gKCk6IEFsYnVtSW5mb1NlY3Rpb25WaWV3TW9kZWwgPT4ge1xuICBjb25zdCBhbGJ1bUFydGlzdHMgPSBwcm9wcy5hbGJ1bS5hbGJ1bUFydGlzdD8ucmVkdWNlKChhY2MsIGFydGlzdCkgPT4ge1xuICAgIGFjY1thcnRpc3QuaWQhXSA9IGFydGlzdC5uYW1lITtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSBhcyB7IFthcnRpc3RJZDogc3RyaW5nXTogc3RyaW5nIH0pO1xuXG4gIGNvbnNvbGUubG9nKCdhbGJ1bUFydGlzdHMnLCBhbGJ1bUFydGlzdHMpO1xuXG4gIHJldHVybiB7XG4gICAgYWxidW1OYW1lOiBwcm9wcy5hbGJ1bS5uYW1lPy5fZGVmYXVsdCB8fCAnJyxcbiAgICBhbGJ1bUFydGlzdHMsXG4gICAgYWxidW1Db3ZlclVybDogcHJvcHMuYWxidW0udGh1bWJuYWlsPy5sYXJnZT8udXJsIHx8IG51bGwsXG4gICAgcmVsZWFzZURhdGU6IHByb3BzLmFsYnVtLnJlbGVhc2VEYXRlIHx8IG51bGwsXG4gICAgZGF0YVNvdXJjZXM6IHByb3BzLmFsYnVtLmRhdGFTb3VyY2UgfHwgW10sXG4gIH0gYXMgQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbDtcbn07XG5cbmNvbnN0IHZpZXdNb2RlbDogQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbCA9IGluaXRpYWxpemVWaWV3TW9kZWwoKTtcblxuY29uc3QgZ290b0NpcmNsZSA9IChjaXJjbGVJZDogc3RyaW5nKSA9PiB7XG4gICRyb3V0ZXIucHVzaCh7XG4gICAgbmFtZTogJ0NpcmNsZUFsYnVtcycsXG4gICAgcGFyYW1zOiB7IGNpcmNsZUlkLCBwYWdlOiAnMScgfSxcbiAgfSk7XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jYXJ0aXN0cyAuYXJ0aXN0LW5hbWU6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuICBjb250ZW50OiAnLCAnO1xufVxuXG4ucS1pbWcge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRoJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgYXV0b1dpZHRoOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IG9uQ2xpY2sgPSBldnQgPT4geyBlbWl0KCdjbGljaycsIGV2dCkgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0aCcsIHtcbiAgICAgICAgICBjbGFzczogcHJvcHMuYXV0b1dpZHRoID09PSB0cnVlID8gJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnLFxuICAgICAgICAgIG9uQ2xpY2tcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGxldCBjb2wsIGNoaWxkXG4gICAgICBjb25zdCBuYW1lID0gdm0udm5vZGUua2V5XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGNvbCA9IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXVxuICAgICAgICBpZiAoY29sID09PSB2b2lkIDApIHJldHVyblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbCA9IHByb3BzLnByb3BzLmNvbFxuICAgICAgfVxuXG4gICAgICBpZiAoY29sLnNvcnRhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNvbC5hbGlnbiA9PT0gJ3JpZ2h0J1xuICAgICAgICAgID8gJ3Vuc2hpZnQnXG4gICAgICAgICAgOiAncHVzaCdcblxuICAgICAgICBjaGlsZCA9IGhVbmlxdWVTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuICAgICAgICBjaGlsZFsgYWN0aW9uIF0oXG4gICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgY2xhc3M6IGNvbC5fX2ljb25DbGFzcyxcbiAgICAgICAgICAgIG5hbWU6ICRxLmljb25TZXQudGFibGUuYXJyb3dVcFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGNsYXNzOiBjb2wuX190aENsYXNzXG4gICAgICAgICAgKyAocHJvcHMuYXV0b1dpZHRoID09PSB0cnVlID8gJyBxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgOiAnJyksXG4gICAgICAgIHN0eWxlOiBjb2wuaGVhZGVyU3R5bGUsXG4gICAgICAgIG9uQ2xpY2s6IGV2dCA9PiB7XG4gICAgICAgICAgY29sLnNvcnRhYmxlID09PSB0cnVlICYmIHByb3BzLnByb3BzLnNvcnQoY29sKVxuICAgICAgICAgIG9uQ2xpY2soZXZ0KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0aCcsIGRhdGEsIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUcicsXG5cbiAgcHJvcHM6IHtcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIG5vSG92ZXI6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdHInXG4gICAgICArIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwIHx8IHByb3BzLnByb3BzLmhlYWRlciA9PT0gdHJ1ZSA/ICcnIDogJyAnICsgcHJvcHMucHJvcHMuX190ckNsYXNzKVxuICAgICAgKyAocHJvcHMubm9Ib3ZlciA9PT0gdHJ1ZSA/ICcgcS10ci0tbm8taG92ZXInIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ3RyJywge1xuICAgICAgc3R5bGU6IHByb3BzLnByb3BzPy5fX3RyU3R5bGUsXG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZVxuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGQnLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBhdXRvV2lkdGg6IEJvb2xlYW4sXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGQnICsgKHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRkLS1uby1ob3ZlcicgOiAnJylcbiAgICAgICsgJyAnXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0ZCcsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hbWUgPSB2bS52bm9kZS5rZXlcbiAgICAgIGNvbnN0IGNvbCA9IChcbiAgICAgICAgKHByb3BzLnByb3BzLmNvbHNNYXAgIT09IHZvaWQgMCA/IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXSA6IG51bGwpXG4gICAgICAgIHx8IHByb3BzLnByb3BzLmNvbFxuICAgICAgKVxuXG4gICAgICBpZiAoY29sID09PSB2b2lkIDApIHJldHVyblxuXG4gICAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHMucHJvcHNcblxuICAgICAgcmV0dXJuIGgoJ3RkJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSArIGNvbC5fX3RkQ2xhc3Mocm93KSxcbiAgICAgICAgc3R5bGU6IGNvbC5fX3RkU3R5bGUocm93KVxuICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUxpc3QgZnJvbSAnLi4vaXRlbS9RTGlzdC5qcydcbmltcG9ydCBRTWFya3VwVGFibGUgZnJvbSAnLi4vbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcydcbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuLi90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0LCBzY3JvbGxUYXJnZXRQcm9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC9ldmVudC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IGNvbXBzID0ge1xuICBsaXN0OiBRTGlzdCxcbiAgdGFibGU6IFFNYXJrdXBUYWJsZVxufVxuXG5jb25zdCB0eXBlT3B0aW9ucyA9IFsgJ2xpc3QnLCAndGFibGUnLCAnX19xdGFibGUnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FWaXJ0dWFsU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsaXN0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBpdGVtc0ZuOiBGdW5jdGlvbixcbiAgICBpdGVtc1NpemU6IE51bWJlcixcblxuICAgIHNjcm9sbFRhcmdldDogc2Nyb2xsVGFyZ2V0UHJvcFxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgYXR0cnMgfSkge1xuICAgIGxldCBsb2NhbFNjcm9sbFRhcmdldFxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pdGVtc1NpemUgPj0gMCAmJiBwcm9wcy5pdGVtc0ZuICE9PSB2b2lkIDBcbiAgICAgICAgPyBwYXJzZUludChwcm9wcy5pdGVtc1NpemUsIDEwKVxuICAgICAgICA6IChBcnJheS5pc0FycmF5KHByb3BzLml0ZW1zKSA/IHByb3BzLml0ZW1zLmxlbmd0aCA6IDApXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsXG4gICAgfSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBGbiA9IChpdGVtLCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSArIGksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwcm9wcy5pdGVtc0ZuID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5pdGVtcy5zbGljZSh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50bykubWFwKG1hcEZuKVxuICAgICAgICA6IHByb3BzLml0ZW1zRm4odmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKS5tYXAobWFwRm4pXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdmlydHVhbC1zY3JvbGwgcS12aXJ0dWFsLXNjcm9sbCcgKyAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnLS1ob3Jpem9udGFsJyA6ICctLXZlcnRpY2FsJylcbiAgICAgICsgKHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gJycgOiAnIHNjcm9sbCcpXG4gICAgKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8ge30gOiB7IHRhYmluZGV4OiAwIH1cbiAgICApKVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxFbCAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS4kZWwgfHwgcm9vdFJlZi52YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KGdldFZpcnR1YWxTY3JvbGxFbCgpLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfX2dldFZpcnR1YWxDaGlsZHJlbiAoKSB7XG4gICAgICBsZXQgY2hpbGQgPSBwYWRWaXJ0dWFsU2Nyb2xsKFxuICAgICAgICBwcm9wcy50eXBlID09PSAnbGlzdCcgPyAnZGl2JyA6ICd0Ym9keScsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxTY29wZS52YWx1ZS5tYXAoc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHNsb3RzLmJlZm9yZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gc2xvdHMuYmVmb3JlKCkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5hZnRlciwgY2hpbGQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzbG90cy5kZWZhdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUVZpcnR1YWxTY3JvbGw6IGRlZmF1bHQgc2NvcGVkIHNsb3QgaXMgcmVxdWlyZWQgZm9yIHJlbmRlcmluZycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHMudHlwZSA9PT0gJ19fcXRhYmxlJ1xuICAgICAgICA/IGdldFRhYmxlTWlkZGxlKFxuICAgICAgICAgIHsgcmVmOiByb290UmVmLCBjbGFzczogJ3EtdGFibGVfX21pZGRsZSAnICsgY2xhc3Nlcy52YWx1ZSB9LFxuICAgICAgICAgIF9fZ2V0VmlydHVhbENoaWxkcmVuKClcbiAgICAgICAgKVxuICAgICAgICA6IGgoY29tcHNbIHByb3BzLnR5cGUgXSwge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgICBjbGFzczogWyBhdHRycy5jbGFzcywgY2xhc3Nlcy52YWx1ZSBdLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWVcbiAgICAgICAgfSwgX19nZXRWaXJ0dWFsQ2hpbGRyZW4pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLXNpemUvdXNlLXNpemUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnJlbmRlci9yZW5kZXIuanMnXG5cbmNvbnN0IGRlZmF1bHRTaXplcyA9IHtcbiAgeHM6IDIsXG4gIHNtOiA0LFxuICBtZDogNixcbiAgbGc6IDEwLFxuICB4bDogMTRcbn1cblxuZnVuY3Rpb24gd2lkdGggKHZhbCwgcmV2ZXJzZSwgJHEpIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2Zvcm06IHJldmVyc2UgPT09IHRydWVcbiAgICAgID8gYHRyYW5zbGF0ZVgoJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnLScgOiAnJyB9MTAwJSkgc2NhbGUzZCgkeyAtdmFsIH0sMSwxKWBcbiAgICAgIDogYHNjYWxlM2QoJHsgdmFsIH0sMSwxKWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxpbmVhclByb2dyZXNzJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VTaXplUHJvcHMsXG5cbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgYnVmZmVyOiBOdW1iZXIsXG5cbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHRyYWNrQ29sb3I6IFN0cmluZyxcblxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgc3RyaXBlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG4gICAgcXVlcnk6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcblxuICAgIGFuaW1hdGlvblNwZWVkOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAyMTAwXG4gICAgfSxcblxuICAgIGluc3RhbnRGZWVkYmFjazogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG5cbiAgICBjb25zdCBtb3Rpb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlIHx8IHByb3BzLnF1ZXJ5ID09PSB0cnVlKVxuICAgIGNvbnN0IHdpZHRoUmV2ZXJzZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnJldmVyc2UgIT09IHByb3BzLnF1ZXJ5KVxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLihzaXplU3R5bGUudmFsdWUgIT09IG51bGwgPyBzaXplU3R5bGUudmFsdWUgOiB7fSksXG4gICAgICAnLS1xLWxpbmVhci1wcm9ncmVzcy1zcGVlZCc6IGAkeyBwcm9wcy5hbmltYXRpb25TcGVlZCB9bXNgXG4gICAgfSkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzcydcbiAgICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICsgKHByb3BzLnJldmVyc2UgPT09IHRydWUgfHwgcHJvcHMucXVlcnkgPT09IHRydWUgPyAnIHEtbGluZWFyLXByb2dyZXNzLS1yZXZlcnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMucm91bmRlZCA9PT0gdHJ1ZSA/ICcgcm91bmRlZC1ib3JkZXJzJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB3aWR0aChwcm9wcy5idWZmZXIgIT09IHZvaWQgMCA/IHByb3BzLmJ1ZmZlciA6IDEsIHdpZHRoUmV2ZXJzZS52YWx1ZSwgcHJveHkuJHEpKVxuICAgIGNvbnN0IHRyYW5zaXRpb25TdWZmaXggPSBjb21wdXRlZCgoKSA9PiBgd2l0aCR7IHByb3BzLmluc3RhbnRGZWVkYmFjayA9PT0gdHJ1ZSA/ICdvdXQnIDogJycgfS10cmFuc2l0aW9uYClcblxuICAgIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzX190cmFjayBhYnNvbHV0ZS1mdWxsJ1xuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJ2RhcmsnIDogJ2xpZ2h0JyB9YFxuICAgICAgKyAocHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy50cmFja0NvbG9yIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgbW9kZWxTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHdpZHRoKG1vdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiBwcm9wcy52YWx1ZSwgd2lkdGhSZXZlcnNlLnZhbHVlLCBwcm94eS4kcSkpXG4gICAgY29uc3QgbW9kZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsIGFic29sdXRlLWZ1bGwnXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyBtb3Rpb24udmFsdWUgPT09IHRydWUgPyAnaW4nIDogJycgfWRldGVybWluYXRlYFxuICAgIClcblxuICAgIGNvbnN0IHN0cmlwZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHsgd2lkdGg6IGAkeyBwcm9wcy52YWx1ZSAqIDEwMCB9JWAgfSkpXG4gICAgY29uc3Qgc3RyaXBlQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtbGluZWFyLXByb2dyZXNzX19zdHJpcGUgYWJzb2x1dGUtJHsgcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fc3RyaXBlLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGUudmFsdWVcbiAgICAgICAgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBtb2RlbENsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBtb2RlbFN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIHByb3BzLnN0cmlwZSA9PT0gdHJ1ZSAmJiBtb3Rpb24udmFsdWUgPT09IGZhbHNlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc3RyaXBlQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHN0cmlwZVN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiAxLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWVcbiAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgIDogcHJvcHMudmFsdWVcbiAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgY2hpbGQpKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IHJlZiwgd2F0Y2gsIG9uQmVmb3JlTW91bnQsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL3BsdWdpbnMvcHJpdmF0ZS5oaXN0b3J5L0hpc3RvcnkuanMnXG5pbXBvcnQgeyB2bUhhc1JvdXRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUudm0vdm0uanMnXG5cbmxldCBjb3VudGVyID0gMFxuXG5leHBvcnQgY29uc3QgdXNlRnVsbHNjcmVlblByb3BzID0ge1xuICBmdWxsc2NyZWVuOiBCb29sZWFuLFxuICBub1JvdXRlRnVsbHNjcmVlbkV4aXQ6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5FbWl0cyA9IFsgJ3VwZGF0ZTpmdWxsc2NyZWVuJywgJ2Z1bGxzY3JlZW4nIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHByb3h5IH0gPSB2bVxuXG4gIGxldCBoaXN0b3J5RW50cnksIGZ1bGxzY3JlZW5GaWxsZXJOb2RlLCBjb250YWluZXJcbiAgY29uc3QgaW5GdWxsc2NyZWVuID0gcmVmKGZhbHNlKVxuXG4gIHZtSGFzUm91dGVyKHZtKSA9PT0gdHJ1ZSAmJiB3YXRjaCgoKSA9PiBwcm94eS4kcm91dGUuZnVsbFBhdGgsICgpID0+IHtcbiAgICBwcm9wcy5ub1JvdXRlRnVsbHNjcmVlbkV4aXQgIT09IHRydWUgJiYgZXhpdEZ1bGxzY3JlZW4oKVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmZ1bGxzY3JlZW4sIHYgPT4ge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHYpIHtcbiAgICAgIHRvZ2dsZUZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfSlcblxuICB3YXRjaChpbkZ1bGxzY3JlZW4sIHYgPT4ge1xuICAgIGVtaXQoJ3VwZGF0ZTpmdWxsc2NyZWVuJywgdilcbiAgICBlbWl0KCdmdWxsc2NyZWVuJywgdilcbiAgfSlcblxuICBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBleGl0RnVsbHNjcmVlbigpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0RnVsbHNjcmVlbigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICBpbkZ1bGxzY3JlZW4udmFsdWUgPSB0cnVlXG4gICAgY29udGFpbmVyID0gcHJveHkuJGVsLnBhcmVudE5vZGVcbiAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKGZ1bGxzY3JlZW5GaWxsZXJOb2RlLCBwcm94eS4kZWwpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm94eS4kZWwpXG5cbiAgICBjb3VudGVyKytcbiAgICBpZiAoY291bnRlciA9PT0gMSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuICAgIH1cblxuICAgIGhpc3RvcnlFbnRyeSA9IHtcbiAgICAgIGhhbmRsZXI6IGV4aXRGdWxsc2NyZWVuXG4gICAgfVxuICAgIEhpc3RvcnkuYWRkKGhpc3RvcnlFbnRyeSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGV4aXRGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB0cnVlKSByZXR1cm5cblxuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm94eS4kZWwsIGZ1bGxzY3JlZW5GaWxsZXJOb2RlKVxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlXG5cbiAgICBjb3VudGVyID0gTWF0aC5tYXgoMCwgY291bnRlciAtIDEpXG5cbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuXG4gICAgICBpZiAocHJveHkuJGVsLnNjcm9sbEludG9WaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldygpIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgZnVsbHNjcmVlbkZpbGxlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUgJiYgc2V0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KGV4aXRGdWxsc2NyZWVuKVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICBzZXRGdWxsc2NyZWVuLFxuICAgIGV4aXRGdWxsc2NyZWVuXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbkZ1bGxzY3JlZW4sXG4gICAgdG9nZ2xlRnVsbHNjcmVlblxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc29ydERhdGUgKGEsIGIpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShhKSkgLSAobmV3IERhdGUoYikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0Qm9vbGVhbiAoYSwgYikge1xuICByZXR1cm4gYSAmJiAhYlxuICAgID8gLTFcbiAgICA6ICghYSAmJiBiID8gMSA6IDApXG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc29ydERhdGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnNvcnQvc29ydC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc0RhdGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMvaXMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVNvcnRQcm9wcyA9IHtcbiAgc29ydE1ldGhvZDogRnVuY3Rpb24sXG4gIGJpbmFyeVN0YXRlU29ydDogQm9vbGVhbixcbiAgY29sdW1uU29ydE9yZGVyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbGlkYXRvcjogdiA9PiB2ID09PSAnYWQnIHx8IHYgPT09ICdkYScsXG4gICAgZGVmYXVsdDogJ2FkJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVNvcnQgKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGNvbExpc3QsIHNldFBhZ2luYXRpb24pIHtcbiAgY29uc3QgY29sdW1uVG9Tb3J0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgc29ydEJ5IH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIHJldHVybiBzb3J0QnlcbiAgICAgID8gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gc29ydEJ5KSB8fCBudWxsXG4gICAgICA6IG51bGxcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZFNvcnRNZXRob2QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuc29ydE1ldGhvZCAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnNvcnRNZXRob2RcbiAgICAgIDogKGRhdGEsIHNvcnRCeSwgZGVzY2VuZGluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbCA9IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSlcbiAgICAgICAgICBpZiAoY29sID09PSB2b2lkIDAgfHwgY29sLmZpZWxkID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGRpciA9IGRlc2NlbmRpbmcgPT09IHRydWUgPyAtMSA6IDEsXG4gICAgICAgICAgICB2YWwgPSB0eXBlb2YgY29sLmZpZWxkID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgID8gdiA9PiBjb2wuZmllbGQodilcbiAgICAgICAgICAgICAgOiB2ID0+IHZbIGNvbC5maWVsZCBdXG5cbiAgICAgICAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgQSA9IHZhbChhKSxcbiAgICAgICAgICAgICAgQiA9IHZhbChiKVxuXG4gICAgICAgICAgICBpZiAoY29sLnJhd1NvcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gY29sLnJhd1NvcnQoQSwgQiwgYSwgYikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBID09PSBudWxsIHx8IEEgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gLTEgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCID09PSBudWxsIHx8IEIgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gMSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbC5zb3J0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgLy8gZ2V0cyBjYWxsZWQgd2l0aG91dCByb3dzIHRoYXQgaGF2ZSBudWxsL3VuZGVmaW5lZCBhcyB2YWx1ZVxuICAgICAgICAgICAgICAvLyBkdWUgdG8gdGhlIGFib3ZlIHR3byBzdGF0ZW1lbnRzXG4gICAgICAgICAgICAgIHJldHVybiBjb2wuc29ydChBLCBCLCBhLCBiKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTnVtYmVyKEEpID09PSB0cnVlICYmIGlzTnVtYmVyKEIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEYXRlKEEpID09PSB0cnVlICYmIGlzRGF0ZShCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc29ydERhdGUoQSwgQikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgQSA9PT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiBCID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChBIC0gQikgKiBkaXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgWyBBLCBCIF0gPSBbIEEsIEIgXS5tYXAocyA9PiAocyArICcnKS50b0xvY2FsZVN0cmluZygpLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgICAgICAgIHJldHVybiBBIDwgQlxuICAgICAgICAgICAgICA/IC0xICogZGlyXG4gICAgICAgICAgICAgIDogKEEgPT09IEIgPyAwIDogZGlyKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgKSlcblxuICBmdW5jdGlvbiBzb3J0IChjb2wgLyogU3RyaW5nKGNvbCBuYW1lKSBvciBPYmplY3QoY29sIGRlZmluaXRpb24pICovKSB7XG4gICAgbGV0IHNvcnRPcmRlciA9IHByb3BzLmNvbHVtblNvcnRPcmRlclxuXG4gICAgaWYgKGlzT2JqZWN0KGNvbCkgPT09IHRydWUpIHtcbiAgICAgIGlmIChjb2wuc29ydE9yZGVyKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IGNvbC5zb3J0T3JkZXJcbiAgICAgIH1cblxuICAgICAgY29sID0gY29sLm5hbWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBkZWYgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBjb2wpXG4gICAgICBpZiAoZGVmPy5zb3J0T3JkZXIpIHtcbiAgICAgICAgc29ydE9yZGVyID0gZGVmLnNvcnRPcmRlclxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICBpZiAoc29ydEJ5ICE9PSBjb2wpIHtcbiAgICAgIHNvcnRCeSA9IGNvbFxuICAgICAgZGVzY2VuZGluZyA9IHNvcnRPcmRlciA9PT0gJ2RhJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5iaW5hcnlTdGF0ZVNvcnQgPT09IHRydWUpIHtcbiAgICAgIGRlc2NlbmRpbmcgPSAhZGVzY2VuZGluZ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZXNjZW5kaW5nID09PSB0cnVlKSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXNjZW5kaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7IC8vIGFzY2VuZGluZ1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gJ2FkJykge1xuICAgICAgICBkZXNjZW5kaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWdpbmF0aW9uKHsgc29ydEJ5LCBkZXNjZW5kaW5nLCBwYWdlOiAxIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbHVtblRvU29ydCxcbiAgICBjb21wdXRlZFNvcnRNZXRob2QsXG4gICAgc29ydFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVGaWx0ZXJQcm9wcyA9IHtcbiAgZmlsdGVyOiBbIFN0cmluZywgT2JqZWN0IF0sXG4gIGZpbHRlck1ldGhvZDogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlRmlsdGVyIChwcm9wcywgc2V0UGFnaW5hdGlvbikge1xuICBjb25zdCBjb21wdXRlZEZpbHRlck1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5maWx0ZXJNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5maWx0ZXJNZXRob2RcbiAgICAgIDogKHJvd3MsIHRlcm1zLCBjb2xzLCBjZWxsVmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlclRlcm1zID0gdGVybXMgPyB0ZXJtcy50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIoXG4gICAgICAgICAgICByb3cgPT4gY29scy5zb21lKGNvbCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNlbGxWYWx1ZShjb2wsIHJvdykgKyAnJ1xuICAgICAgICAgICAgICBjb25zdCBoYXlzdGFjayA9ICh2YWwgPT09ICd1bmRlZmluZWQnIHx8IHZhbCA9PT0gJ251bGwnKSA/ICcnIDogdmFsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobG93ZXJUZXJtcykgIT09IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICApKVxuXG4gIHdhdGNoKFxuICAgICgpID0+IHByb3BzLmZpbHRlcixcbiAgICAoKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0sIHRydWUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgeyBkZWVwOiB0cnVlIH1cbiAgKVxuXG4gIHJldHVybiB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gc2FtZVBhZ2luYXRpb24gKG9sZFBhZywgbmV3UGFnKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBuZXdQYWcpIHtcbiAgICBpZiAobmV3UGFnWyBwcm9wIF0gIT09IG9sZFBhZ1sgcHJvcCBdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZml4UGFnaW5hdGlvbiAocCkge1xuICBpZiAocC5wYWdlIDwgMSkge1xuICAgIHAucGFnZSA9IDFcbiAgfVxuICBpZiAocC5yb3dzUGVyUGFnZSAhPT0gdm9pZCAwICYmIHAucm93c1BlclBhZ2UgPCAxKSB7XG4gICAgcC5yb3dzUGVyUGFnZSA9IDBcbiAgfVxuICByZXR1cm4gcFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgPSB7XG4gIHBhZ2luYXRpb246IE9iamVjdCxcbiAgcm93c1BlclBhZ2VPcHRpb25zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gWyA1LCA3LCAxMCwgMTUsIDIwLCAyNSwgNTAsIDAgXVxuICB9LFxuXG4gICdvblVwZGF0ZTpwYWdpbmF0aW9uJzogWyBGdW5jdGlvbiwgQXJyYXkgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUgKHZtLCBnZXRDZWxsVmFsdWUpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCB9ID0gdm1cblxuICBjb25zdCBpbm5lclBhZ2luYXRpb24gPSByZWYoXG4gICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICBkZXNjZW5kaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICByb3dzUGVyUGFnZTogcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCAhPT0gMFxuICAgICAgICA/IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9uc1sgMCBdXG4gICAgICAgIDogNVxuICAgIH0sIHByb3BzLnBhZ2luYXRpb24pXG4gIClcblxuICBjb25zdCBjb21wdXRlZFBhZ2luYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcGFnID0gcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICAgID8geyAuLi5pbm5lclBhZ2luYXRpb24udmFsdWUsIC4uLnByb3BzLnBhZ2luYXRpb24gfVxuICAgICAgOiBpbm5lclBhZ2luYXRpb24udmFsdWVcblxuICAgIHJldHVybiBmaXhQYWdpbmF0aW9uKHBhZylcbiAgfSlcblxuICBjb25zdCBpc1NlcnZlclNpZGUgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c051bWJlciAhPT0gdm9pZCAwKVxuXG4gIGZ1bmN0aW9uIHNlbmRTZXJ2ZXJSZXF1ZXN0IChwYWdpbmF0aW9uKSB7XG4gICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uKHtcbiAgICAgIHBhZ2luYXRpb24sXG4gICAgICBmaWx0ZXI6IHByb3BzLmZpbHRlclxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24gKHByb3AgPSB7fSkge1xuICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGVtaXQoJ3JlcXVlc3QnLCB7XG4gICAgICAgIHBhZ2luYXRpb246IHByb3AucGFnaW5hdGlvbiB8fCBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAgIGZpbHRlcjogcHJvcC5maWx0ZXIgfHwgcHJvcHMuZmlsdGVyLFxuICAgICAgICBnZXRDZWxsVmFsdWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBhZ2luYXRpb24gKHZhbCwgZm9yY2VTZXJ2ZXJSZXF1ZXN0KSB7XG4gICAgY29uc3QgbmV3UGFnaW5hdGlvbiA9IGZpeFBhZ2luYXRpb24oe1xuICAgICAgLi4uY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgLi4udmFsXG4gICAgfSlcblxuICAgIGlmIChzYW1lUGFnaW5hdGlvbihjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsIG5ld1BhZ2luYXRpb24pID09PSB0cnVlKSB7XG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlICYmIGZvcmNlU2VydmVyUmVxdWVzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBzZW5kU2VydmVyUmVxdWVzdChuZXdQYWdpbmF0aW9uKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgc2VuZFNlcnZlclJlcXVlc3QobmV3UGFnaW5hdGlvbilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByb3BzLnBhZ2luYXRpb24gIT09IHZvaWQgMFxuICAgICAgJiYgcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgbmV3UGFnaW5hdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lclBhZ2luYXRpb24udmFsdWUgPSBuZXdQYWdpbmF0aW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbm5lclBhZ2luYXRpb24sXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLFxuICAgIGlzU2VydmVyU2lkZSxcblxuICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICBzZXRQYWdpbmF0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUGFnaW5hdGlvbiAodm0sIGlubmVyUGFnaW5hdGlvbiwgY29tcHV0ZWRQYWdpbmF0aW9uLCBpc1NlcnZlclNpZGUsIHNldFBhZ2luYXRpb24sIGZpbHRlcmVkU29ydGVkUm93c051bWJlcikge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c051bWJlciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgID8gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NOdW1iZXIgfHwgMFxuICAgICAgOiBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIudmFsdWVcbiAgKSlcblxuICBjb25zdCBmaXJzdFJvd0luZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIHJldHVybiAocGFnZSAtIDEpICogcm93c1BlclBhZ2VcbiAgfSlcblxuICBjb25zdCBsYXN0Um93SW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlLCByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgcmV0dXJuIHBhZ2UgKiByb3dzUGVyUGFnZVxuICB9KVxuXG4gIGNvbnN0IGlzRmlyc3RQYWdlID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2UgPT09IDEpXG5cbiAgY29uc3QgcGFnZXNOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlID09PSAwXG4gICAgICA/IDFcbiAgICAgIDogTWF0aC5tYXgoXG4gICAgICAgIDEsXG4gICAgICAgIE1hdGguY2VpbChjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUgLyBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UpXG4gICAgICApXG4gICkpXG5cbiAgY29uc3QgaXNMYXN0UGFnZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBsYXN0Um93SW5kZXgudmFsdWUgPT09IDBcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZSA+PSBwYWdlc051bWJlci52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IG9wdHMgPSBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMuaW5jbHVkZXMoaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlKVxuICAgICAgPyBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnNcbiAgICAgIDogWyBpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgXS5jb25jYXQocHJvcHMucm93c1BlclBhZ2VPcHRpb25zKVxuXG4gICAgcmV0dXJuIG9wdHMubWFwKGNvdW50ID0+ICh7XG4gICAgICBsYWJlbDogY291bnQgPT09IDAgPyAkcS5sYW5nLnRhYmxlLmFsbFJvd3MgOiAnJyArIGNvdW50LFxuICAgICAgdmFsdWU6IGNvdW50XG4gICAgfSkpXG4gIH0pXG5cbiAgd2F0Y2gocGFnZXNOdW1iZXIsIChsYXN0UGFnZSwgb2xkTGFzdFBhZ2UpID0+IHtcbiAgICBpZiAobGFzdFBhZ2UgPT09IG9sZExhc3RQYWdlKSByZXR1cm5cblxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2VcbiAgICBpZiAobGFzdFBhZ2UgJiYgIWN1cnJlbnRQYWdlKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogMSB9KVxuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0UGFnZSA8IGN1cnJlbnRQYWdlKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogbGFzdFBhZ2UgfSlcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZmlyc3RQYWdlICgpIHtcbiAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogMSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcHJldlBhZ2UgKCkge1xuICAgIGNvbnN0IHsgcGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZSAtIDEgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0UGFnZSAoKSB7XG4gICAgY29uc3QgeyBwYWdlLCByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgaWYgKGxhc3RSb3dJbmRleC52YWx1ZSA+IDAgJiYgcGFnZSAqIHJvd3NQZXJQYWdlIDwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZSArIDEgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsYXN0UGFnZSAoKSB7XG4gICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IHBhZ2VzTnVtYmVyLnZhbHVlIH0pXG4gIH1cblxuICBpZiAocHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDApIHtcbiAgICBlbWl0KCd1cGRhdGU6cGFnaW5hdGlvbicsIHsgLi4uY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpcnN0Um93SW5kZXgsXG4gICAgbGFzdFJvd0luZGV4LFxuICAgIGlzRmlyc3RQYWdlLFxuICAgIGlzTGFzdFBhZ2UsXG4gICAgcGFnZXNOdW1iZXIsXG4gICAgY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMsXG4gICAgY29tcHV0ZWRSb3dzTnVtYmVyLFxuXG4gICAgZmlyc3RQYWdlLFxuICAgIHByZXZQYWdlLFxuICAgIG5leHRQYWdlLFxuICAgIGxhc3RQYWdlXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dTZWxlY3Rpb25Qcm9wcyA9IHtcbiAgc2VsZWN0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdub25lJyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gWyAnc2luZ2xlJywgJ211bHRpcGxlJywgJ25vbmUnIF0uaW5jbHVkZXModilcbiAgfSxcbiAgc2VsZWN0ZWQ6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd1NlbGVjdGlvbkVtaXRzID0gWyAndXBkYXRlOnNlbGVjdGVkJywgJ3NlbGVjdGlvbicgXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVSb3dTZWxlY3Rpb24gKHByb3BzLCBlbWl0LCBjb21wdXRlZFJvd3MsIGdldFJvd0tleSkge1xuICBjb25zdCBzZWxlY3RlZEtleXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IHt9XG4gICAgcHJvcHMuc2VsZWN0ZWQubWFwKGdldFJvd0tleS52YWx1ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAga2V5c1sga2V5IF0gPSB0cnVlXG4gICAgfSlcbiAgICByZXR1cm4ga2V5c1xuICB9KVxuXG4gIGNvbnN0IGhhc1NlbGVjdGlvbk1vZGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiAhPT0gJ25vbmUnXG4gIH0pXG5cbiAgY29uc3Qgc2luZ2xlU2VsZWN0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5zZWxlY3Rpb24gPT09ICdzaW5nbGUnXG4gIH0pXG5cbiAgY29uc3QgbXVsdGlwbGVTZWxlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiA9PT0gJ211bHRpcGxlJ1xuICB9KVxuXG4gIGNvbnN0IGFsbFJvd3NTZWxlY3RlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgY29tcHV0ZWRSb3dzLnZhbHVlLmxlbmd0aCAhPT0gMCAmJiBjb21wdXRlZFJvd3MudmFsdWUuZXZlcnkoXG4gICAgICByb3cgPT4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBnZXRSb3dLZXkudmFsdWUocm93KSBdID09PSB0cnVlXG4gICAgKVxuICApXG5cbiAgY29uc3Qgc29tZVJvd3NTZWxlY3RlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgYWxsUm93c1NlbGVjdGVkLnZhbHVlICE9PSB0cnVlXG4gICAgJiYgY29tcHV0ZWRSb3dzLnZhbHVlLnNvbWUocm93ID0+IHNlbGVjdGVkS2V5cy52YWx1ZVsgZ2V0Um93S2V5LnZhbHVlKHJvdykgXSA9PT0gdHJ1ZSlcbiAgKVxuXG4gIGNvbnN0IHJvd3NTZWxlY3RlZE51bWJlciA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkLmxlbmd0aClcblxuICBmdW5jdGlvbiBpc1Jvd1NlbGVjdGVkIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBrZXkgXSA9PT0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24gKCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZCcsIFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9uIChrZXlzLCByb3dzLCBhZGRlZCwgZXZ0KSB7XG4gICAgZW1pdCgnc2VsZWN0aW9uJywgeyByb3dzLCBhZGRlZCwga2V5cywgZXZ0IH0pXG5cbiAgICBjb25zdCBwYXlsb2FkID0gc2luZ2xlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlXG4gICAgICA/IChhZGRlZCA9PT0gdHJ1ZSA/IHJvd3MgOiBbXSlcbiAgICAgIDogKFxuICAgICAgICAgIGFkZGVkID09PSB0cnVlXG4gICAgICAgICAgICA/IHByb3BzLnNlbGVjdGVkLmNvbmNhdChyb3dzKVxuICAgICAgICAgICAgOiBwcm9wcy5zZWxlY3RlZC5maWx0ZXIoXG4gICAgICAgICAgICAgIHJvdyA9PiBrZXlzLmluY2x1ZGVzKGdldFJvd0tleS52YWx1ZShyb3cpKSA9PT0gZmFsc2VcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgcGF5bG9hZClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFzU2VsZWN0aW9uTW9kZSxcbiAgICBzaW5nbGVTZWxlY3Rpb24sXG4gICAgbXVsdGlwbGVTZWxlY3Rpb24sXG4gICAgYWxsUm93c1NlbGVjdGVkLFxuICAgIHNvbWVSb3dzU2VsZWN0ZWQsXG4gICAgcm93c1NlbGVjdGVkTnVtYmVyLFxuXG4gICAgaXNSb3dTZWxlY3RlZCxcbiAgICBjbGVhclNlbGVjdGlvbixcbiAgICB1cGRhdGVTZWxlY3Rpb25cbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gZ2V0VmFsICh2YWwpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKVxuICAgID8gdmFsLnNsaWNlKClcbiAgICA6IFtdXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd0V4cGFuZFByb3BzID0ge1xuICBleHBhbmRlZDogQXJyYXkgLy8gdi1tb2RlbDpleHBhbmRlZFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyA9IFsgJ3VwZGF0ZTpleHBhbmRlZCcgXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVSb3dFeHBhbmQgKHByb3BzLCBlbWl0KSB7XG4gIGNvbnN0IGlubmVyRXhwYW5kZWQgPSByZWYoZ2V0VmFsKHByb3BzLmV4cGFuZGVkKSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5leHBhbmRlZCwgdmFsID0+IHtcbiAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gZ2V0VmFsKHZhbClcbiAgfSlcblxuICBmdW5jdGlvbiBpc1Jvd0V4cGFuZGVkIChrZXkpIHtcbiAgICByZXR1cm4gaW5uZXJFeHBhbmRlZC52YWx1ZS5pbmNsdWRlcyhrZXkpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRFeHBhbmRlZCAodmFsKSB7XG4gICAgaWYgKHByb3BzLmV4cGFuZGVkICE9PSB2b2lkIDApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpleHBhbmRlZCcsIHZhbClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gdmFsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRXhwYW5kZWQgKGtleSwgYWRkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaW5uZXJFeHBhbmRlZC52YWx1ZS5zbGljZSgpXG4gICAgY29uc3QgaW5kZXggPSB0YXJnZXQuaW5kZXhPZihrZXkpXG5cbiAgICBpZiAoYWRkID09PSB0cnVlKSB7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRhcmdldC5wdXNoKGtleSlcbiAgICAgICAgc2V0RXhwYW5kZWQodGFyZ2V0KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRhcmdldC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzZXRFeHBhbmRlZCh0YXJnZXQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1Jvd0V4cGFuZGVkLFxuICAgIHNldEV4cGFuZGVkLFxuICAgIHVwZGF0ZUV4cGFuZGVkXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2lzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb25Qcm9wcyA9IHtcbiAgdmlzaWJsZUNvbHVtbnM6IEFycmF5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbiAocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgaGFzU2VsZWN0aW9uTW9kZSkge1xuICBjb25zdCBjb2xMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5jb2x1bW5zICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2x1bW5zXG4gICAgfVxuXG4gICAgLy8gd2UgaW5mZXIgY29sdW1ucyBmcm9tIGZpcnN0IHJvd1xuICAgIGNvbnN0IHJvdyA9IHByb3BzLnJvd3NbIDAgXVxuXG4gICAgcmV0dXJuIHJvdyAhPT0gdm9pZCAwXG4gICAgICA/IE9iamVjdC5rZXlzKHJvdykubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGFiZWw6IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgZmllbGQ6IG5hbWUsXG4gICAgICAgIGFsaWduOiBpc051bWJlcihyb3dbIG5hbWUgXSkgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSkpXG4gICAgICA6IFtdXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIGNvbnN0IGNvbHMgPSBwcm9wcy52aXNpYmxlQ29sdW1ucyAhPT0gdm9pZCAwXG4gICAgICA/IGNvbExpc3QudmFsdWUuZmlsdGVyKGNvbCA9PiBjb2wucmVxdWlyZWQgPT09IHRydWUgfHwgcHJvcHMudmlzaWJsZUNvbHVtbnMuaW5jbHVkZXMoY29sLm5hbWUpID09PSB0cnVlKVxuICAgICAgOiBjb2xMaXN0LnZhbHVlXG5cbiAgICByZXR1cm4gY29scy5tYXAoY29sID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gY29sLmFsaWduIHx8ICdyaWdodCdcbiAgICAgIGNvbnN0IGFsaWduQ2xhc3MgPSBgdGV4dC0keyBhbGlnbiB9YFxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb2wsXG4gICAgICAgIGFsaWduLFxuICAgICAgICBfX2ljb25DbGFzczogYHEtdGFibGVfX3NvcnQtaWNvbiBxLXRhYmxlX19zb3J0LWljb24tLSR7IGFsaWduIH1gLFxuICAgICAgICBfX3RoQ2xhc3M6IGFsaWduQ2xhc3NcbiAgICAgICAgICArIChjb2wuaGVhZGVyQ2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgY29sLmhlYWRlckNsYXNzZXMgOiAnJylcbiAgICAgICAgICArIChjb2wuc29ydGFibGUgPT09IHRydWUgPyAnIHNvcnRhYmxlJyA6ICcnKVxuICAgICAgICAgICsgKGNvbC5uYW1lID09PSBzb3J0QnkgPyBgIHNvcnRlZCAkeyBkZXNjZW5kaW5nID09PSB0cnVlID8gJ3NvcnQtZGVzYycgOiAnJyB9YCA6ICcnKSxcblxuICAgICAgICBfX3RkU3R5bGU6IGNvbC5zdHlsZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb2wuc3R5bGUgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGNvbC5zdHlsZVxuICAgICAgICAgICAgICAgIDogY29sLnN0eWxlXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBudWxsLFxuXG4gICAgICAgIF9fdGRDbGFzczogY29sLmNsYXNzZXMgIT09IHZvaWQgMFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgICB0eXBlb2YgY29sLmNsYXNzZXMgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlc1xuICAgICAgICAgICAgICAgIDogcm93ID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlcyhyb3cpXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBhbGlnbkNsYXNzXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSB7fVxuICAgIGNvbXB1dGVkQ29scy52YWx1ZS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICBuYW1lc1sgY29sLm5hbWUgXSA9IGNvbFxuICAgIH0pXG4gICAgcmV0dXJuIG5hbWVzXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzcGFuID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy50YWJsZUNvbHNwYW4gIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy50YWJsZUNvbHNwYW5cbiAgICAgIDogY29tcHV0ZWRDb2xzLnZhbHVlLmxlbmd0aCArIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlID8gMSA6IDApXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBjb2xMaXN0LFxuICAgIGNvbXB1dGVkQ29scyxcbiAgICBjb21wdXRlZENvbHNNYXAsXG4gICAgY29tcHV0ZWRDb2xzcGFuXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRVGggZnJvbSAnLi9RVGguanMnXG5cbmltcG9ydCBRU2VwYXJhdG9yIGZyb20gJy4uL3NlcGFyYXRvci9RU2VwYXJhdG9yLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVZpcnR1YWxTY3JvbGwgZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvUVZpcnR1YWxTY3JvbGwuanMnXG5pbXBvcnQgUVNlbGVjdCBmcm9tICcuLi9zZWxlY3QvUVNlbGVjdC5qcydcbmltcG9ydCBRTGluZWFyUHJvZ3Jlc3MgZnJvbSAnLi4vbGluZWFyLXByb2dyZXNzL1FMaW5lYXJQcm9ncmVzcy5qcydcbmltcG9ydCBRQ2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3gvUUNoZWNrYm94LmpzJ1xuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5cbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuL2dldC10YWJsZS1taWRkbGUuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyBjb21tb25WaXJ0U2Nyb2xsUHJvcHNMaXN0IH0gZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvdXNlLXZpcnR1YWwtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZUZ1bGxzY3JlZW4sIHsgdXNlRnVsbHNjcmVlblByb3BzLCB1c2VGdWxsc2NyZWVuRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1mdWxsc2NyZWVuL3VzZS1mdWxsc2NyZWVuLmpzJ1xuXG5pbXBvcnQgeyB1c2VUYWJsZVNvcnQsIHVzZVRhYmxlU29ydFByb3BzIH0gZnJvbSAnLi90YWJsZS1zb3J0LmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVGaWx0ZXIsIHVzZVRhYmxlRmlsdGVyUHJvcHMgfSBmcm9tICcuL3RhYmxlLWZpbHRlci5qcydcbmltcG9ydCB7IHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlLCB1c2VUYWJsZVBhZ2luYXRpb24sIHVzZVRhYmxlUGFnaW5hdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1wYWdpbmF0aW9uLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVSb3dTZWxlY3Rpb24sIHVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMsIHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgfSBmcm9tICcuL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMnXG5pbXBvcnQgeyB1c2VUYWJsZVJvd0V4cGFuZCwgdXNlVGFibGVSb3dFeHBhbmRQcm9wcywgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyB9IGZyb20gJy4vdGFibGUtcm93LWV4cGFuZC5qcydcbmltcG9ydCB7IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uLCB1c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzJ1xuXG5pbXBvcnQgeyBpbmplY3RQcm9wLCBpbmplY3RNdWx0aXBsZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5pbmplY3Qtb2JqLXByb3AvaW5qZWN0LW9iai1wcm9wLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBib3R0b21DbGFzcyA9ICdxLXRhYmxlX19ib3R0b20gcm93IGl0ZW1zLWNlbnRlcidcblxuY29uc3QgdmlydFNjcm9sbFBhc3N0aHJvdWdoUHJvcHMgPSB7fVxuY29tbW9uVmlydFNjcm9sbFByb3BzTGlzdC5mb3JFYWNoKHAgPT4geyB2aXJ0U2Nyb2xsUGFzc3Rocm91Z2hQcm9wc1sgcCBdID0ge30gfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByb3dLZXk6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBGdW5jdGlvbiBdLFxuICAgICAgZGVmYXVsdDogJ2lkJ1xuICAgIH0sXG5cbiAgICBjb2x1bW5zOiBBcnJheSxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuXG4gICAgaWNvbkZpcnN0UGFnZTogU3RyaW5nLFxuICAgIGljb25QcmV2UGFnZTogU3RyaW5nLFxuICAgIGljb25OZXh0UGFnZTogU3RyaW5nLFxuICAgIGljb25MYXN0UGFnZTogU3RyaW5nLFxuXG4gICAgdGl0bGU6IFN0cmluZyxcblxuICAgIGhpZGVIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBncmlkOiBCb29sZWFuLFxuICAgIGdyaWRIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBzZXBhcmF0b3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdob3Jpem9udGFsJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2NlbGwnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgdmlydHVhbFNjcm9sbDogQm9vbGVhbixcbiAgICB2aXJ0dWFsU2Nyb2xsVGFyZ2V0OiB7fSxcbiAgICAuLi52aXJ0U2Nyb2xsUGFzc3Rocm91Z2hQcm9wcyxcblxuICAgIG5vRGF0YUxhYmVsOiBTdHJpbmcsXG4gICAgbm9SZXN1bHRzTGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nTGFiZWw6IFN0cmluZyxcbiAgICBzZWxlY3RlZFJvd3NMYWJlbDogRnVuY3Rpb24sXG4gICAgcm93c1BlclBhZ2VMYWJlbDogU3RyaW5nLFxuICAgIHBhZ2luYXRpb25MYWJlbDogRnVuY3Rpb24sXG5cbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2dyZXktOCdcbiAgICB9LFxuXG4gICAgdGl0bGVDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZVN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVIZWFkZXJTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUhlYWRlckNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlUm93U3R5bGVGbjogRnVuY3Rpb24sXG4gICAgdGFibGVSb3dDbGFzc0ZuOiBGdW5jdGlvbixcbiAgICBjYXJkQ29udGFpbmVyQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENvbnRhaW5lclN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZFN0eWxlRm46IEZ1bmN0aW9uLFxuICAgIGNhcmRDbGFzc0ZuOiBGdW5jdGlvbixcblxuICAgIGhpZGVCb3R0b206IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkQmFubmVyOiBCb29sZWFuLFxuICAgIGhpZGVOb0RhdGE6IEJvb2xlYW4sXG4gICAgaGlkZVBhZ2luYXRpb246IEJvb2xlYW4sXG5cbiAgICBvblJvd0NsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0RibGNsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0NvbnRleHRtZW51OiBGdW5jdGlvbixcblxuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VGdWxsc2NyZWVuUHJvcHMsXG5cbiAgICAuLi51c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlRmlsdGVyUHJvcHMsXG4gICAgLi4udXNlVGFibGVQYWdpbmF0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVSb3dFeHBhbmRQcm9wcyxcbiAgICAuLi51c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlU29ydFByb3BzXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAncmVxdWVzdCcsICd2aXJ0dWFsU2Nyb2xsJyxcbiAgICAuLi51c2VGdWxsc2NyZWVuRW1pdHMsXG4gICAgLi4udXNlVGFibGVSb3dFeHBhbmRFbWl0cyxcbiAgICAuLi51c2VUYWJsZVJvd1NlbGVjdGlvbkVtaXRzXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBpbkZ1bGxzY3JlZW4sIHRvZ2dsZUZ1bGxzY3JlZW4gfSA9IHVzZUZ1bGxzY3JlZW4oKVxuXG4gICAgY29uc3QgZ2V0Um93S2V5ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZW9mIHByb3BzLnJvd0tleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BzLnJvd0tleVxuICAgICAgICA6IHJvdyA9PiByb3dbIHByb3BzLnJvd0tleSBdXG4gICAgKSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCB2aXJ0U2Nyb2xsUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgaGFzVmlydFNjcm9sbCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmdyaWQgIT09IHRydWUgJiYgcHJvcHMudmlydHVhbFNjcm9sbCA9PT0gdHJ1ZSlcblxuICAgIGNvbnN0IGNhcmREZWZhdWx0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJyBxLXRhYmxlX19jYXJkJ1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlX19jYXJkLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBjb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGUtLSR7IHByb3BzLnNlcGFyYXRvciB9LXNlcGFyYXRvciBjb2x1bW4gbm8td3JhcGBcbiAgICAgICsgKHByb3BzLmdyaWQgPT09IHRydWUgPyAnIHEtdGFibGUtLWdyaWQnIDogY2FyZERlZmF1bHRDbGFzcy52YWx1ZSlcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLndyYXBDZWxscyA9PT0gZmFsc2UgPyAnIHEtdGFibGUtLW5vLXdyYXAnIDogJycpXG4gICAgICArIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUgPyAnIGZ1bGxzY3JlZW4gc2Nyb2xsJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHJvb3RDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBjb250YWluZXJDbGFzcy52YWx1ZSArIChwcm9wcy5sb2FkaW5nID09PSB0cnVlID8gJyBxLXRhYmxlLS1sb2FkaW5nJyA6ICcnKVxuICAgIClcblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gcHJvcHMudGFibGVTdHlsZSArIHByb3BzLnRhYmxlQ2xhc3MgKyBwcm9wcy50YWJsZUhlYWRlclN0eWxlICsgcHJvcHMudGFibGVIZWFkZXJDbGFzcyArIGNvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgKCkgPT4geyBoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlICYmIHZpcnRTY3JvbGxSZWYudmFsdWU/LnJlc2V0KCkgfVxuICAgIClcblxuICAgIGNvbnN0IHtcbiAgICAgIGlubmVyUGFnaW5hdGlvbixcbiAgICAgIGNvbXB1dGVkUGFnaW5hdGlvbixcbiAgICAgIGlzU2VydmVyU2lkZSxcblxuICAgICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uLFxuICAgICAgc2V0UGFnaW5hdGlvblxuICAgIH0gPSB1c2VUYWJsZVBhZ2luYXRpb25TdGF0ZSh2bSwgZ2V0Q2VsbFZhbHVlKVxuXG4gICAgY29uc3QgeyBjb21wdXRlZEZpbHRlck1ldGhvZCB9ID0gdXNlVGFibGVGaWx0ZXIocHJvcHMsIHNldFBhZ2luYXRpb24pXG4gICAgY29uc3QgeyBpc1Jvd0V4cGFuZGVkLCBzZXRFeHBhbmRlZCwgdXBkYXRlRXhwYW5kZWQgfSA9IHVzZVRhYmxlUm93RXhwYW5kKHByb3BzLCBlbWl0KVxuXG4gICAgY29uc3QgZmlsdGVyZWRTb3J0ZWRSb3dzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBwcm9wcy5yb3dzXG5cbiAgICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUgfHwgcm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBzb3J0QnksIGRlc2NlbmRpbmcgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgICBpZiAocHJvcHMuZmlsdGVyKSB7XG4gICAgICAgIHJvd3MgPSBjb21wdXRlZEZpbHRlck1ldGhvZC52YWx1ZShyb3dzLCBwcm9wcy5maWx0ZXIsIGNvbXB1dGVkQ29scy52YWx1ZSwgZ2V0Q2VsbFZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sdW1uVG9Tb3J0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJvd3MgPSBjb21wdXRlZFNvcnRNZXRob2QudmFsdWUoXG4gICAgICAgICAgcHJvcHMucm93cyA9PT0gcm93cyA/IHJvd3Muc2xpY2UoKSA6IHJvd3MsXG4gICAgICAgICAgc29ydEJ5LFxuICAgICAgICAgIGRlc2NlbmRpbmdcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93c1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWUubGVuZ3RoKVxuXG4gICAgY29uc3QgY29tcHV0ZWRSb3dzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWVcblxuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcm93c1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgICAgaWYgKHJvd3NQZXJQYWdlICE9PSAwKSB7XG4gICAgICAgIGlmIChmaXJzdFJvd0luZGV4LnZhbHVlID09PSAwICYmIHByb3BzLnJvd3MgIT09IHJvd3MpIHtcbiAgICAgICAgICBpZiAocm93cy5sZW5ndGggPiBsYXN0Um93SW5kZXgudmFsdWUpIHtcbiAgICAgICAgICAgIHJvd3MgPSByb3dzLnNsaWNlKDAsIGxhc3RSb3dJbmRleC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcm93cyA9IHJvd3Muc2xpY2UoZmlyc3RSb3dJbmRleC52YWx1ZSwgbGFzdFJvd0luZGV4LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzXG4gICAgfSlcblxuICAgIGNvbnN0IHtcbiAgICAgIGhhc1NlbGVjdGlvbk1vZGUsXG4gICAgICBzaW5nbGVTZWxlY3Rpb24sXG4gICAgICBtdWx0aXBsZVNlbGVjdGlvbixcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIHNvbWVSb3dzU2VsZWN0ZWQsXG4gICAgICByb3dzU2VsZWN0ZWROdW1iZXIsXG5cbiAgICAgIGlzUm93U2VsZWN0ZWQsXG4gICAgICBjbGVhclNlbGVjdGlvbixcbiAgICAgIHVwZGF0ZVNlbGVjdGlvblxuICAgIH0gPSB1c2VUYWJsZVJvd1NlbGVjdGlvbihwcm9wcywgZW1pdCwgY29tcHV0ZWRSb3dzLCBnZXRSb3dLZXkpXG5cbiAgICBjb25zdCB7IGNvbExpc3QsIGNvbXB1dGVkQ29scywgY29tcHV0ZWRDb2xzTWFwLCBjb21wdXRlZENvbHNwYW4gfSA9IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGhhc1NlbGVjdGlvbk1vZGUpXG5cbiAgICBjb25zdCB7IGNvbHVtblRvU29ydCwgY29tcHV0ZWRTb3J0TWV0aG9kLCBzb3J0IH0gPSB1c2VUYWJsZVNvcnQocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgY29sTGlzdCwgc2V0UGFnaW5hdGlvbilcblxuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0Um93SW5kZXgsXG4gICAgICBsYXN0Um93SW5kZXgsXG4gICAgICBpc0ZpcnN0UGFnZSxcbiAgICAgIGlzTGFzdFBhZ2UsXG4gICAgICBwYWdlc051bWJlcixcbiAgICAgIGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLFxuICAgICAgY29tcHV0ZWRSb3dzTnVtYmVyLFxuXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2VcbiAgICB9ID0gdXNlVGFibGVQYWdpbmF0aW9uKHZtLCBpbm5lclBhZ2luYXRpb24sIGNvbXB1dGVkUGFnaW5hdGlvbiwgaXNTZXJ2ZXJTaWRlLCBzZXRQYWdpbmF0aW9uLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIpXG5cbiAgICBjb25zdCBub3RoaW5nVG9EaXNwbGF5ID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRSb3dzLnZhbHVlLmxlbmd0aCA9PT0gMClcblxuICAgIGNvbnN0IHZpcnRQcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHt9XG5cbiAgICAgIGNvbW1vblZpcnRTY3JvbGxQcm9wc0xpc3RcbiAgICAgICAgLmZvckVhY2gocCA9PiB7IGFjY1sgcCBdID0gcHJvcHNbIHAgXSB9KVxuXG4gICAgICBpZiAoYWNjLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFjYy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgPSBwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/IDI4IDogNDhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiByZXNldFZpcnR1YWxTY3JvbGwgKCkge1xuICAgICAgaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnJlc2V0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5ICgpIHtcbiAgICAgIGlmIChwcm9wcy5ncmlkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBnZXRHcmlkQm9keSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IHByb3BzLmhpZGVIZWFkZXIgIT09IHRydWUgPyBnZXRUSGVhZCA6IG51bGxcblxuICAgICAgaWYgKGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9wUm93ID0gc2xvdHNbICd0b3Atcm93JyBdXG4gICAgICAgIGNvbnN0IGJvdHRvbVJvdyA9IHNsb3RzWyAnYm90dG9tLXJvdycgXVxuXG4gICAgICAgIGNvbnN0IHZpcnRTbG90cyA9IHtcbiAgICAgICAgICBkZWZhdWx0OiBwcm9wcyA9PiBnZXRUQm9keVRSKHByb3BzLml0ZW0sIHNsb3RzLmJvZHksIHByb3BzLmluZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcFJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29uc3QgdG9wQ29udGVudCA9IGgoJ3Rib2R5JywgdG9wUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuXG4gICAgICAgICAgdmlydFNsb3RzLmJlZm9yZSA9IGhlYWRlciA9PT0gbnVsbFxuICAgICAgICAgICAgPyAoKSA9PiB0b3BDb250ZW50XG4gICAgICAgICAgICA6ICgpID0+IFsgaGVhZGVyKCkgXS5jb25jYXQodG9wQ29udGVudClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgICB2aXJ0U2xvdHMuYmVmb3JlID0gaGVhZGVyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm90dG9tUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICB2aXJ0U2xvdHMuYWZ0ZXIgPSAoKSA9PiBoKCd0Ym9keScsIGJvdHRvbVJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoKFFWaXJ0dWFsU2Nyb2xsLCB7XG4gICAgICAgICAgcmVmOiB2aXJ0U2Nyb2xsUmVmLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy50YWJsZUNsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZVN0eWxlLFxuICAgICAgICAgIC4uLnZpcnRQcm9wcy52YWx1ZSxcbiAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHByb3BzLnZpcnR1YWxTY3JvbGxUYXJnZXQsXG4gICAgICAgICAgaXRlbXM6IGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgICAgICB0eXBlOiAnX19xdGFibGUnLFxuICAgICAgICAgIHRhYmxlQ29sc3BhbjogY29tcHV0ZWRDb2xzcGFuLnZhbHVlLFxuICAgICAgICAgIG9uVmlydHVhbFNjcm9sbDogb25WU2Nyb2xsXG4gICAgICAgIH0sIHZpcnRTbG90cylcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGdldFRCb2R5KClcbiAgICAgIF1cblxuICAgICAgaWYgKGhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgICBjaGlsZC51bnNoaWZ0KGhlYWRlcigpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0VGFibGVNaWRkbGUoe1xuICAgICAgICBjbGFzczogWyAncS10YWJsZV9fbWlkZGxlIHNjcm9sbCcsIHByb3BzLnRhYmxlQ2xhc3MgXSxcbiAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlU3R5bGVcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvICh0b0luZGV4LCBlZGdlKSB7XG4gICAgICBpZiAodmlydFNjcm9sbFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnNjcm9sbFRvKHRvSW5kZXgsIGVkZ2UpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0b0luZGV4ID0gcGFyc2VJbnQodG9JbmRleCwgMTApXG4gICAgICBjb25zdCByb3dFbCA9IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcihgdGJvZHkgdHI6bnRoLW9mLXR5cGUoJHsgdG9JbmRleCArIDEgfSlgKVxuXG4gICAgICBpZiAocm93RWwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCcucS10YWJsZV9fbWlkZGxlLnNjcm9sbCcpXG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHJvd0VsLm9mZnNldFRvcCAtIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnRcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gb2Zmc2V0VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA/ICdkZWNyZWFzZScgOiAnaW5jcmVhc2UnXG5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IG9mZnNldFRvcFxuXG4gICAgICAgIGVtaXQoJ3ZpcnR1YWxTY3JvbGwnLCB7XG4gICAgICAgICAgaW5kZXg6IHRvSW5kZXgsXG4gICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICB0bzogaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlIC0gMSxcbiAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblZTY3JvbGwgKGluZm8pIHtcbiAgICAgIGVtaXQoJ3ZpcnR1YWxTY3JvbGwnLCBpbmZvKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2dyZXNzICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoUUxpbmVhclByb2dyZXNzLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19saW5lYXItcHJvZ3Jlc3MnLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFja0NvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEJvZHlUUiAocm93LCBib2R5U2xvdCwgcGFnZUluZGV4KSB7XG4gICAgICBjb25zdFxuICAgICAgICBrZXkgPSBnZXRSb3dLZXkudmFsdWUocm93KSxcbiAgICAgICAgc2VsZWN0ZWQgPSBpc1Jvd1NlbGVjdGVkKGtleSlcblxuICAgICAgaWYgKGJvZHlTbG90ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgY2ZnID0ge1xuICAgICAgICAgIGtleSxcbiAgICAgICAgICByb3csXG4gICAgICAgICAgcGFnZUluZGV4LFxuICAgICAgICAgIF9fdHJDbGFzczogc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy50YWJsZVJvd1N0eWxlRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNmZy5fX3RyU3R5bGUgPSBwcm9wcy50YWJsZVJvd1N0eWxlRm4ocm93KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnRhYmxlUm93Q2xhc3NGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29uc3QgY2xzID0gcHJvcHMudGFibGVSb3dDbGFzc0ZuKHJvdylcbiAgICAgICAgICBpZiAoY2xzKSB7XG4gICAgICAgICAgICBjZmcuX190ckNsYXNzID0gYCR7IGNscyB9ICR7IGNmZy5fX3RyQ2xhc3MgfWBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYm9keVNsb3QoXG4gICAgICAgICAgZ2V0Qm9keVNjb3BlKGNmZylcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICBib2R5Q2VsbCA9IHNsb3RzWyAnYm9keS1jZWxsJyBdLFxuICAgICAgICBjaGlsZCA9IGNvbXB1dGVkQ29scy52YWx1ZS5tYXAoY29sID0+IHtcbiAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgYm9keUNlbGxDb2wgPSBzbG90c1sgYGJvZHktY2VsbC0keyBjb2wubmFtZSB9YCBdLFxuICAgICAgICAgICAgc2xvdCA9IGJvZHlDZWxsQ29sICE9PSB2b2lkIDAgPyBib2R5Q2VsbENvbCA6IGJvZHlDZWxsXG5cbiAgICAgICAgICByZXR1cm4gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgICA/IHNsb3QoZ2V0Qm9keUNlbGxTY29wZSh7IGtleSwgcm93LCBwYWdlSW5kZXgsIGNvbCB9KSlcbiAgICAgICAgICAgIDogaCgndGQnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBjb2wuX190ZENsYXNzKHJvdyksXG4gICAgICAgICAgICAgIHN0eWxlOiBjb2wuX190ZFN0eWxlKHJvdylcbiAgICAgICAgICAgIH0sIGdldENlbGxWYWx1ZShjb2wsIHJvdykpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2JvZHktc2VsZWN0aW9uJyBdXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QoZ2V0Qm9keVNlbGVjdGlvblNjb3BlKHsga2V5LCByb3csIHBhZ2VJbmRleCB9KSlcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKFsga2V5IF0sIFsgcm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RkJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCBjb250ZW50KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7IGtleSwgY2xhc3M6IHsgc2VsZWN0ZWQgfSB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ3Jvd0NsaWNrJywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkRibGNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdyb3dEYmxjbGljaycsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93Q29udGV4dG1lbnUgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25Db250ZXh0bWVudSA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgncm93Q29udGV4dG1lbnUnLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy50YWJsZVJvd1N0eWxlRm4gIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLnN0eWxlID0gcHJvcHMudGFibGVSb3dTdHlsZUZuKHJvdylcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnRhYmxlUm93Q2xhc3NGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IGNscyA9IHByb3BzLnRhYmxlUm93Q2xhc3NGbihyb3cpXG4gICAgICAgIGlmIChjbHMpIHtcbiAgICAgICAgICBkYXRhLmNsYXNzWyBjbHMgXSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndHInLCBkYXRhLCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUQm9keSAoKSB7XG4gICAgICBjb25zdFxuICAgICAgICBib2R5ID0gc2xvdHMuYm9keSxcbiAgICAgICAgdG9wUm93ID0gc2xvdHNbICd0b3Atcm93JyBdLFxuICAgICAgICBib3R0b21Sb3cgPSBzbG90c1sgJ2JvdHRvbS1yb3cnIF1cblxuICAgICAgbGV0IGNoaWxkID0gY29tcHV0ZWRSb3dzLnZhbHVlLm1hcChcbiAgICAgICAgKHJvdywgcGFnZUluZGV4KSA9PiBnZXRUQm9keVRSKHJvdywgYm9keSwgcGFnZUluZGV4KVxuICAgICAgKVxuXG4gICAgICBpZiAodG9wUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQgPSB0b3BSb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuICAgICAgaWYgKGJvdHRvbVJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gY2hpbGQuY29uY2F0KGJvdHRvbVJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3Rib2R5JywgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keVNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcblxuICAgICAgZGF0YS5jb2xzID0gZGF0YS5jb2xzLm1hcChcbiAgICAgICAgY29sID0+IGluamVjdFByb3AoeyAuLi5jb2wgfSwgJ3ZhbHVlJywgKCkgPT4gZ2V0Q2VsbFZhbHVlKGNvbCwgZGF0YS5yb3cpKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlDZWxsU2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuICAgICAgaW5qZWN0UHJvcChkYXRhLCAndmFsdWUnLCAoKSA9PiBnZXRDZWxsVmFsdWUoZGF0YS5jb2wsIGRhdGEucm93KSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keVNlbGVjdGlvblNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5qZWN0Qm9keUNvbW1vblNjb3BlIChkYXRhKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlLFxuICAgICAgICBjb2xzTWFwOiBjb21wdXRlZENvbHNNYXAudmFsdWUsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIHJvd0luZGV4OiBmaXJzdFJvd0luZGV4LnZhbHVlICsgZGF0YS5wYWdlSW5kZXgsXG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2VcbiAgICAgIH0pXG5cbiAgICAgIGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgJiYgaW5qZWN0UHJvcChcbiAgICAgICAgZGF0YSxcbiAgICAgICAgJ3NlbGVjdGVkJyxcbiAgICAgICAgKCkgPT4gaXNSb3dTZWxlY3RlZChkYXRhLmtleSksXG4gICAgICAgIChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIGRhdGEua2V5IF0sIFsgZGF0YS5yb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaW5qZWN0UHJvcChcbiAgICAgICAgZGF0YSxcbiAgICAgICAgJ2V4cGFuZCcsXG4gICAgICAgICgpID0+IGlzUm93RXhwYW5kZWQoZGF0YS5rZXkpLFxuICAgICAgICBhZGRpbmcgPT4geyB1cGRhdGVFeHBhbmRlZChkYXRhLmtleSwgYWRkaW5nKSB9XG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2VsbFZhbHVlIChjb2wsIHJvdykge1xuICAgICAgY29uc3QgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5maWVsZChyb3cpIDogcm93WyBjb2wuZmllbGQgXVxuICAgICAgcmV0dXJuIGNvbC5mb3JtYXQgIT09IHZvaWQgMCA/IGNvbC5mb3JtYXQodmFsLCByb3cpIDogdmFsXG4gICAgfVxuXG4gICAgY29uc3QgbWFyZ2luYWxzU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgcGFnaW5hdGlvbjogY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgcGFnZXNOdW1iZXI6IHBhZ2VzTnVtYmVyLnZhbHVlLFxuICAgICAgaXNGaXJzdFBhZ2U6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgaXNMYXN0UGFnZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZSxcblxuICAgICAgaW5GdWxsc2NyZWVuOiBpbkZ1bGxzY3JlZW4udmFsdWUsXG4gICAgICB0b2dnbGVGdWxsc2NyZWVuXG4gICAgfSkpXG5cbiAgICBmdW5jdGlvbiBnZXRUb3BEaXYgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgdG9wID0gc2xvdHMudG9wLFxuICAgICAgICB0b3BMZWZ0ID0gc2xvdHNbICd0b3AtbGVmdCcgXSxcbiAgICAgICAgdG9wUmlnaHQgPSBzbG90c1sgJ3RvcC1yaWdodCcgXSxcbiAgICAgICAgdG9wU2VsZWN0aW9uID0gc2xvdHNbICd0b3Atc2VsZWN0aW9uJyBdLFxuICAgICAgICBoYXNTZWxlY3Rpb24gPSBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgJiYgdG9wU2VsZWN0aW9uICE9PSB2b2lkIDBcbiAgICAgICAgICAmJiByb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUgPiAwLFxuICAgICAgICB0b3BDbGFzcyA9ICdxLXRhYmxlX190b3AgcmVsYXRpdmUtcG9zaXRpb24gcm93IGl0ZW1zLWNlbnRlcidcblxuICAgICAgaWYgKHRvcCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiB0b3BDbGFzcyB9LCBbIHRvcChtYXJnaW5hbHNTY29wZS52YWx1ZSkgXSlcbiAgICAgIH1cblxuICAgICAgbGV0IGNoaWxkXG5cbiAgICAgIGlmIChoYXNTZWxlY3Rpb24gPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQgPSB0b3BTZWxlY3Rpb24obWFyZ2luYWxzU2NvcGUudmFsdWUpLnNsaWNlKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IFtdXG5cbiAgICAgICAgaWYgKHRvcExlZnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICB0b3BMZWZ0KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbICdxLXRhYmxlX190aXRsZScsIHByb3BzLnRpdGxlQ2xhc3MgXVxuICAgICAgICAgICAgICB9LCBwcm9wcy50aXRsZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b3BSaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX3NlcGFyYXRvciBjb2wnIH0pXG4gICAgICAgIClcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgdG9wUmlnaHQobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQubGVuZ3RoID09PSAwKSByZXR1cm5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiB0b3BDbGFzcyB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJTZWxlY3RlZFZhbHVlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc29tZVJvd3NTZWxlY3RlZC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBhbGxSb3dzU2VsZWN0ZWQudmFsdWVcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gZ2V0VEhlYWQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBnZXRUSGVhZFRSKClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgndHInLCB7IGNsYXNzOiAncS10YWJsZV9fcHJvZ3Jlc3MnIH0sIFtcbiAgICAgICAgICAgIGgoJ3RoJywge1xuICAgICAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uJyxcbiAgICAgICAgICAgICAgY29sc3BhbjogY29tcHV0ZWRDb2xzcGFuLnZhbHVlXG4gICAgICAgICAgICB9LCBnZXRQcm9ncmVzcygpKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RoZWFkJywgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEhlYWRUUiAoKSB7XG4gICAgICBjb25zdFxuICAgICAgICBoZWFkZXIgPSBzbG90cy5oZWFkZXIsXG4gICAgICAgIGhlYWRlckNlbGwgPSBzbG90c1sgJ2hlYWRlci1jZWxsJyBdXG5cbiAgICAgIGlmIChoZWFkZXIgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaGVhZGVyKFxuICAgICAgICAgIGdldEhlYWRlclNjb3BlKHsgaGVhZGVyOiB0cnVlIH0pXG4gICAgICAgICkuc2xpY2UoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IGNvbXB1dGVkQ29scy52YWx1ZS5tYXAoY29sID0+IHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICBoZWFkZXJDZWxsQ29sID0gc2xvdHNbIGBoZWFkZXItY2VsbC0keyBjb2wubmFtZSB9YCBdLFxuICAgICAgICAgIHNsb3QgPSBoZWFkZXJDZWxsQ29sICE9PSB2b2lkIDAgPyBoZWFkZXJDZWxsQ29sIDogaGVhZGVyQ2VsbCxcbiAgICAgICAgICBwcm9wcyA9IGdldEhlYWRlclNjb3BlKHsgY29sIH0pXG5cbiAgICAgICAgcmV0dXJuIHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChwcm9wcylcbiAgICAgICAgICA6IGgoUVRoLCB7XG4gICAgICAgICAgICBrZXk6IGNvbC5uYW1lLFxuICAgICAgICAgICAgcHJvcHNcbiAgICAgICAgICB9LCAoKSA9PiBjb2wubGFiZWwpXG4gICAgICB9KVxuXG4gICAgICBpZiAoc2luZ2xlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlICYmIHByb3BzLmdyaWQgIT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICBoKCd0aCcsIHsgY2xhc3M6ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgfSwgJyAnKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChtdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbICdoZWFkZXItc2VsZWN0aW9uJyBdXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QoZ2V0SGVhZGVyU2NvcGUoe30pKVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBoZWFkZXJTZWxlY3RlZFZhbHVlLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBvbk11bHRpcGxlU2VsZWN0aW9uU2V0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICBoKCd0aCcsIHsgY2xhc3M6ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgfSwgY29udGVudClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCd0cicsIHtcbiAgICAgICAgICBjbGFzczogcHJvcHMudGFibGVIZWFkZXJDbGFzcyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMudGFibGVIZWFkZXJTdHlsZVxuICAgICAgICB9LCBjaGlsZClcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXJTY29wZSAoZGF0YSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgIGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSxcbiAgICAgICAgc29ydCxcbiAgICAgICAgY29sc01hcDogY29tcHV0ZWRDb2xzTWFwLnZhbHVlLFxuICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlXG4gICAgICB9KVxuXG4gICAgICBpZiAobXVsdGlwbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaW5qZWN0UHJvcChcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgICdzZWxlY3RlZCcsXG4gICAgICAgICAgKCkgPT4gaGVhZGVyU2VsZWN0ZWRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICBvbk11bHRpcGxlU2VsZWN0aW9uU2V0XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk11bHRpcGxlU2VsZWN0aW9uU2V0ICh2YWwpIHtcbiAgICAgIGlmIChzb21lUm93c1NlbGVjdGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHZhbCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVNlbGVjdGlvbihcbiAgICAgICAgY29tcHV0ZWRSb3dzLnZhbHVlLm1hcChnZXRSb3dLZXkudmFsdWUpLFxuICAgICAgICBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICAgIHZhbFxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG5hdkljb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBpY28gPSBbXG4gICAgICAgIHByb3BzLmljb25GaXJzdFBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5maXJzdFBhZ2UsXG4gICAgICAgIHByb3BzLmljb25QcmV2UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLnByZXZQYWdlLFxuICAgICAgICBwcm9wcy5pY29uTmV4dFBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5uZXh0UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvbkxhc3RQYWdlIHx8ICRxLmljb25TZXQudGFibGUubGFzdFBhZ2VcbiAgICAgIF1cbiAgICAgIHJldHVybiAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGljby5yZXZlcnNlKCkgOiBpY29cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm90dG9tRGl2ICgpIHtcbiAgICAgIGlmIChwcm9wcy5oaWRlQm90dG9tID09PSB0cnVlKSByZXR1cm5cblxuICAgICAgaWYgKG5vdGhpbmdUb0Rpc3BsYXkudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHByb3BzLmhpZGVOb0RhdGEgPT09IHRydWUpIHJldHVyblxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBwcm9wcy5sb2FkaW5nID09PSB0cnVlXG4gICAgICAgICAgPyBwcm9wcy5sb2FkaW5nTGFiZWwgfHwgJHEubGFuZy50YWJsZS5sb2FkaW5nXG4gICAgICAgICAgOiAocHJvcHMuZmlsdGVyID8gcHJvcHMubm9SZXN1bHRzTGFiZWwgfHwgJHEubGFuZy50YWJsZS5ub1Jlc3VsdHMgOiBwcm9wcy5ub0RhdGFMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLm5vRGF0YSlcblxuICAgICAgICBjb25zdCBub0RhdGEgPSBzbG90c1sgJ25vLWRhdGEnIF1cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub0RhdGEgIT09IHZvaWQgMFxuICAgICAgICAgID8gWyBub0RhdGEoeyBtZXNzYWdlLCBpY29uOiAkcS5pY29uU2V0LnRhYmxlLndhcm5pbmcsIGZpbHRlcjogcHJvcHMuZmlsdGVyIH0pIF1cbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fYm90dG9tLW5vZGF0YS1pY29uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAkcS5pY29uU2V0LnRhYmxlLndhcm5pbmdcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIF1cblxuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgKyAnIHEtdGFibGVfX2JvdHRvbS0tbm9kYXRhJyB9LCBjaGlsZHJlbilcbiAgICAgIH1cblxuICAgICAgY29uc3QgYm90dG9tID0gc2xvdHMuYm90dG9tXG5cbiAgICAgIGlmIChib3R0b20gIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgfSwgWyBib3R0b20obWFyZ2luYWxzU2NvcGUudmFsdWUpIF0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuaGlkZVNlbGVjdGVkQmFubmVyICE9PSB0cnVlICYmIGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgJiYgcm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlID4gMFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAocHJvcHMuc2VsZWN0ZWRSb3dzTGFiZWwgfHwgJHEubGFuZy50YWJsZS5zZWxlY3RlZFJlY29yZHMpKHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdXG5cbiAgICAgIGlmIChwcm9wcy5oaWRlUGFnaW5hdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBib3R0b21DbGFzcyArICcganVzdGlmeS1lbmQnXG4gICAgICAgIH0sIGdldFBhZ2luYXRpb25EaXYoY2hpbGQpKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyB9LCBjaGlsZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ1NlbGVjdGlvbiAocGFnKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgcm93c1BlclBhZ2U6IHBhZy52YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYWdpbmF0aW9uRGl2IChjaGlsZCkge1xuICAgICAgbGV0IGNvbnRyb2xcbiAgICAgIGNvbnN0XG4gICAgICAgIHsgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgICAgcGFnaW5hdGlvbkxhYmVsID0gcHJvcHMucGFnaW5hdGlvbkxhYmVsIHx8ICRxLmxhbmcudGFibGUucGFnaW5hdGlvbixcbiAgICAgICAgcGFnaW5hdGlvblNsb3QgPSBzbG90cy5wYWdpbmF0aW9uLFxuICAgICAgICBoYXNPcHRzID0gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCA+IDFcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX3NlcGFyYXRvciBjb2wnIH0pXG4gICAgICApXG5cbiAgICAgIGhhc09wdHMgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1pdGVtJyB9LCBbXG4gICAgICAgICAgICBwcm9wcy5yb3dzUGVyUGFnZUxhYmVsIHx8ICRxLmxhbmcudGFibGUucmVjb3Jkc1BlclBhZ2VcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBoKFFTZWxlY3QsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fc2VsZWN0IGlubGluZSBxLXRhYmxlX19ib3R0b20taXRlbScsXG4gICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICBtb2RlbFZhbHVlOiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLnZhbHVlLFxuICAgICAgICAgICAgZGlzcGxheVZhbHVlOiByb3dzUGVyUGFnZSA9PT0gMFxuICAgICAgICAgICAgICA/ICRxLmxhbmcudGFibGUuYWxsUm93c1xuICAgICAgICAgICAgICA6IHJvd3NQZXJQYWdlLFxuICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZSxcbiAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW9uc0RlbnNlOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW9uc0NvdmVyOiB0cnVlLFxuICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBvblBhZ1NlbGVjdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICApXG5cbiAgICAgIGlmIChwYWdpbmF0aW9uU2xvdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnRyb2wgPSBwYWdpbmF0aW9uU2xvdChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb250cm9sID0gW1xuICAgICAgICAgIGgoJ3NwYW4nLCByb3dzUGVyUGFnZSAhPT0gMCA/IHsgY2xhc3M6ICdxLXRhYmxlX19ib3R0b20taXRlbScgfSA6IHt9LCBbXG4gICAgICAgICAgICByb3dzUGVyUGFnZVxuICAgICAgICAgICAgICA/IHBhZ2luYXRpb25MYWJlbChmaXJzdFJvd0luZGV4LnZhbHVlICsgMSwgTWF0aC5taW4obGFzdFJvd0luZGV4LnZhbHVlLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpXG4gICAgICAgICAgICAgIDogcGFnaW5hdGlvbkxhYmVsKDEsIGZpbHRlcmVkU29ydGVkUm93c051bWJlci52YWx1ZSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cblxuICAgICAgICBpZiAocm93c1BlclBhZ2UgIT09IDAgJiYgcGFnZXNOdW1iZXIudmFsdWUgPiAxKSB7XG4gICAgICAgICAgY29uc3QgYnRuUHJvcHMgPSB7XG4gICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYnRuUHJvcHMuc2l6ZSA9ICdzbSdcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYWdlc051bWJlci52YWx1ZSA+IDIgJiYgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnRmlyc3QnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMCBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0ZpcnN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgYXJpYUxhYmVsOiAkcS5sYW5nLnBhZ2luYXRpb24uZmlyc3QsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZpcnN0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdQcmV2JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDEgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIGFyaWFMYWJlbDogJHEubGFuZy5wYWdpbmF0aW9uLnByZXYsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IHByZXZQYWdlXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnTmV4dCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAyIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIGFyaWFMYWJlbDogJHEubGFuZy5wYWdpbmF0aW9uLm5leHQsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG5leHRQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICAgIHBhZ2VzTnVtYmVyLnZhbHVlID4gMiAmJiBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdMYXN0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDMgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgYXJpYUxhYmVsOiAkcS5sYW5nLnBhZ2luYXRpb24ubGFzdCxcbiAgICAgICAgICAgICAgb25DbGljazogbGFzdFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBjb250cm9sKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkSGVhZGVyICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuZ3JpZEhlYWRlciA9PT0gdHJ1ZVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIFtcbiAgICAgICAgICAgICAgZ2V0VEhlYWQoaClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gZ2V0UHJvZ3Jlc3MoaClcbiAgICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fbWlkZGxlJyB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkQm9keSAoKSB7XG4gICAgICBjb25zdCBpdGVtID0gc2xvdHMuaXRlbSAhPT0gdm9pZCAwXG4gICAgICAgID8gc2xvdHMuaXRlbVxuICAgICAgICA6IHNjb3BlID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IHNjb3BlLmNvbHMubWFwKFxuICAgICAgICAgICAgY29sID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tdGl0bGUnIH0sIFsgY29sLmxhYmVsIF0pLFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXZhbHVlJyB9LCBbIGNvbC52YWx1ZSBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBzbG90KHNjb3BlKVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNjb3BlLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIHNjb3BlLmtleSBdLCBbIHNjb3BlLnJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBjb250ZW50KSxcbiAgICAgICAgICAgICAgaChRU2VwYXJhdG9yLCB7IGRhcms6IGlzRGFyay52YWx1ZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAncS10YWJsZV9fZ3JpZC1pdGVtLWNhcmQnICsgY2FyZERlZmF1bHRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgcHJvcHMuY2FyZENsYXNzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRTdHlsZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9wcy5jYXJkU3R5bGVGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBkYXRhLnN0eWxlID0gWyBkYXRhLnN0eWxlLCBwcm9wcy5jYXJkU3R5bGVGbihzY29wZS5yb3cpIF1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvcHMuY2FyZENsYXNzRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY29uc3QgY2xzID0gcHJvcHMuY2FyZENsYXNzRm4oc2NvcGUucm93KVxuICAgICAgICAgICAgaWYgKGNscykge1xuICAgICAgICAgICAgICBkYXRhLmNsYXNzWyAwIF0gKz0gYCAkeyBjbHMgfWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDBcbiAgICAgICAgICAgIHx8IHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMFxuICAgICAgICAgICAgfHwgcHJvcHMub25Sb3dDb250ZXh0bWVudSAhPT0gdm9pZCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzWyAwIF0gKz0gJyBjdXJzb3ItcG9pbnRlcidcblxuICAgICAgICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXQoJ1Jvd0NsaWNrJywgZXZ0LCBzY29wZS5yb3csIHNjb3BlLnBhZ2VJbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGRhdGEub25EYmxjbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgZW1pdCgnUm93RGJsY2xpY2snLCBldnQsIHNjb3BlLnJvdywgc2NvcGUucGFnZUluZGV4KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5vblJvd0NvbnRleHRtZW51ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YS5vbkNvbnRleHRtZW51ID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBlbWl0KCdyb3dDb250ZXh0bWVudScsIGV2dCwgc2NvcGUucm93LCBzY29wZS5wYWdlSW5kZXgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0gY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0zJ1xuICAgICAgICAgICAgICArIChzY29wZS5zZWxlY3RlZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZV9fZ3JpZC1pdGVtLS1zZWxlY3RlZCcgOiAnJylcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCBkYXRhLCBjaGlsZClcbiAgICAgICAgICBdKVxuICAgICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgJ3EtdGFibGVfX2dyaWQtY29udGVudCByb3cnLFxuICAgICAgICAgIHByb3BzLmNhcmRDb250YWluZXJDbGFzc1xuICAgICAgICBdLFxuICAgICAgICBzdHlsZTogcHJvcHMuY2FyZENvbnRhaW5lclN0eWxlXG4gICAgICB9LCBjb21wdXRlZFJvd3MudmFsdWUubWFwKChyb3csIHBhZ2VJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbShnZXRCb2R5U2NvcGUoe1xuICAgICAgICAgIGtleTogZ2V0Um93S2V5LnZhbHVlKHJvdyksXG4gICAgICAgICAgcm93LFxuICAgICAgICAgIHBhZ2VJbmRleFxuICAgICAgICB9KSlcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kcyBhbmQgbmVlZGVkIGNvbXB1dGVkIHByb3BzXG4gICAgT2JqZWN0LmFzc2lnbih2bS5wcm94eSwge1xuICAgICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uLFxuICAgICAgc2V0UGFnaW5hdGlvbixcbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZSxcbiAgICAgIGlzUm93U2VsZWN0ZWQsXG4gICAgICBjbGVhclNlbGVjdGlvbixcbiAgICAgIGlzUm93RXhwYW5kZWQsXG4gICAgICBzZXRFeHBhbmRlZCxcbiAgICAgIHNvcnQsXG4gICAgICByZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBzY3JvbGxUbyxcbiAgICAgIGdldENlbGxWYWx1ZVxuICAgIH0pXG5cbiAgICBpbmplY3RNdWx0aXBsZVByb3BzKHZtLnByb3h5LCB7XG4gICAgICBmaWx0ZXJlZFNvcnRlZFJvd3M6ICgpID0+IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZSxcbiAgICAgIGNvbXB1dGVkUm93czogKCkgPT4gY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgY29tcHV0ZWRSb3dzTnVtYmVyOiAoKSA9PiBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gWyBnZXRUb3BEaXYoKSBdXG4gICAgICBjb25zdCBkYXRhID0geyByZWY6IHJvb3RSZWYsIGNsYXNzOiByb290Q29udGFpbmVyQ2xhc3MudmFsdWUgfVxuXG4gICAgICBpZiAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC5wdXNoKGdldEdyaWRIZWFkZXIoKSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICBjbGFzczogWyBkYXRhLmNsYXNzLCBwcm9wcy5jYXJkQ2xhc3MgXSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuY2FyZFN0eWxlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGdldEJvZHkoKSxcbiAgICAgICAgZ2V0Qm90dG9tRGl2KClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgc2xvdHMubG9hZGluZygpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgcG9zaXRpb249XCJ0b3BcIlxuICAgIGJhY2tkcm9wLWZpbHRlcj1cImJsdXIoM3B4KVwiXG4gID5cbiAgICA8cS1jYXJkIHN0eWxlPVwibWF4LXdpZHRoOiAxMDB2dzsgbWluLXdpZHRoOiA2MHZ3OyBtYXgtaGVpZ2h0OiA5MHZoOyBtYXJnaW4tdG9wOiA1dmg7IGJvcmRlci1yYWRpdXM6IDVweDtcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5MeXJpY3M8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPExvYWRhYmxlRWxlbWVudCA6c3RhdGUtY29udHJvbGxlcj1cImNvbnRyb2xsZXJcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgI2xvYWRpbmc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGNvbC1hbGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHEtc3Bpbm5lciBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwiM2VtXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJcIj5cbiAgICAgICAgICAgIDxxLXRhYmxlXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgYm9yZGVyZWRcbiAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgY2xhc3M9XCJiZy10cmFuc3BhcmVudFwiXG4gICAgICAgICAgICAgIHJvdy1rZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgIGhpZGUtYm90dG9tXG4gICAgICAgICAgICAgIHZpcnR1YWwtc2Nyb2xsXG4gICAgICAgICAgICAgIDpyb3dzLXBlci1wYWdlLW9wdGlvbnM9XCJbMF1cIlxuICAgICAgICAgICAgICA6Y29sdW1ucz1cInRhYmxlQ29sdW1uc0N1c3RvbWl6ZWRcIlxuICAgICAgICAgICAgICA6cm93cz1cInRhYmxlUm93c1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L3EtdGFibGU+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9Mb2FkYWJsZUVsZW1lbnQ+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEx5cmljc1JlYWREdG8sIFRyYWNrQXBpIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgYXBpQ29uZmlndXJhdGlvblByb3ZpZGVyIH0gZnJvbSAnc3JjL3NlcnZpY2VzL19zZXJ2aWNlcyc7XG5pbXBvcnQgeyB1c2VMb2FkYWJsZUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVDb250cm9sbGVyJztcbmltcG9ydCBMb2FkYWJsZUVsZW1lbnQgZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlRWxlbWVudC52dWUnO1xuaW1wb3J0IHsgb25Nb3VudGVkIH0gZnJvbSAndnVlJztcblxuLy8gUHJvcHNcbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICB0cmFja0lkOiBzdHJpbmdcbn0+KCk7XG5cbi8vIENvbnRyb2xsZXJcbmNvbnN0IGNvbnRyb2xsZXIgPSB1c2VMb2FkYWJsZUNvbnRyb2xsZXI8THlyaWNzUmVhZER0bz4oKTtcbmNvbnN0IHRyYWNrQXBpID0gbmV3IFRyYWNrQXBpKGFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uKCkpO1xuXG5jb25zdCB0YWJsZUNvbHVtbnNDdXN0b21pemVkID0gW1xuICB7IG5hbWU6ICd0aW1lJywgbGFiZWw6ICdUaW1lJywgYWxpZ246ICdsZWZ0JywgZmllbGQ6ICd0aW1lJywgc29ydGFibGU6IGZhbHNlIH0sXG5dXG5cbmNvbnN0IHRhYmxlUm93czogQXJyYXk8e1trZXk6IHN0cmluZ106IHN0cmluZ30+ID0gW107XG5cbmNvbnN0IGNvbnN0cnVjdFVpRWxlbWVudHMgPSAobHlyaWNzRHRvOiBMeXJpY3NSZWFkRHRvKSA9PiB7XG4gIGNvbnN0IHBvc3NpYmxlTGFuZ3M6IFNldDxzdHJpbmc+ID0gbmV3IFNldCgpO1xuICBseXJpY3NEdG8udmFyaWFudHM/LmZvckVhY2goKHZhcmlhbnQpID0+IHtcbiAgICAvLyBpdGVyYXRlIG92ZXIgbGluZXNcbiAgICB2YXJpYW50LmxpbmVzPy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICBjb25zdCBiYXNlOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcbiAgICAgICAgJ3RpbWUnOiBsaW5lLnRpbWUgfHwgJy0nLFxuICAgICAgfTtcblxuICAgICAgbGluZS5ibG9ja3M/LmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgIHBvc3NpYmxlTGFuZ3MuYWRkKGJsb2NrLmxhbmchKTtcbiAgICAgICAgYmFzZVtibG9jay5sYW5nIV0gPSBibG9jay50ZXh0ITtcbiAgICAgIH0pO1xuXG4gICAgICB0YWJsZVJvd3MucHVzaChiYXNlKTtcbiAgICB9KVxuICB9KTtcbiAgcG9zc2libGVMYW5ncy5mb3JFYWNoKChsYW5nKSA9PiB7XG4gICAgdGFibGVDb2x1bW5zQ3VzdG9taXplZC5wdXNoKHtcbiAgICAgIG5hbWU6IGxhbmcsXG4gICAgICBsYWJlbDogbGFuZyxcbiAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICBmaWVsZDogbGFuZyxcbiAgICAgIHNvcnRhYmxlOiBmYWxzZVxuICAgIH0pXG4gIH0pXG59XG5cbi8vIEZldGNoIEx5cmljcyBEYXRhXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBjb250cm9sbGVyLnNldExvYWRpbmcoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0cmFja0FwaS5nZXRMeXJpY3MoeyB0cmFja0lkOiBwcm9wcy50cmFja0lkIH0pO1xuXG4gICAgY29uc3RydWN0VWlFbGVtZW50cyhyZXN1bHQpO1xuXG4gICAgY29uc29sZS5sb2codGFibGVSb3dzKTtcblxuICAgIGNvbnRyb2xsZXIuc2V0U3VjY2VzcyhyZXN1bHQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnRyb2xsZXIuc2V0RXJyb3IoZXJyb3IgYXMgRXJyb3IpO1xuICB9XG59KTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLyogU3R5bGluZyB0byBrZWVwIHRoZSBsYXlvdXQgbmVhdCAqL1xuLnEtdGFibGUge1xuICBtYXgtaGVpZ2h0OiA1MHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRyYWNrLWxpc3QtdGFibGUgcm93IGZ1bGwtd2lkdGggcS1weC1ub25lIHEtcHQtbGdcIj5cbiAgICA8ZGl2XG4gICAgICB2LWZvcj1cIltkaXNjLCB0cmFja3NdIGluIHByb3BzLnRyYWNrcy5lbnRyaWVzKClcIlxuICAgICAgdi1iaW5kOmtleT1cImRpc2MuaWQhXCJcbiAgICAgIGNsYXNzPVwiY29sLTEyIHEtcHQtbWQgcS1weC1tZCBxLXBiLWxnXCJcbiAgICA+XG4gICAgICA8cS10YWJsZVxuICAgICAgICA6cm93cz1cInRyYWNrc1wiXG4gICAgICAgIGNsYXNzPVwiYmctdHJhbnNwYXJlbnRcIlxuICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIlxuICAgICAgICBzZXBhcmF0b3I9XCJub25lXCJcbiAgICAgICAgcm93LWtleT1cImlkXCJcbiAgICAgICAgZmxhdFxuICAgICAgICBoaWRlLWJvdHRvbVxuICAgICAgICB2aXJ0dWFsLXNjcm9sbFxuICAgICAgICBoaWRlLXBhZ2luYXRpb25cbiAgICAgID5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpoZWFkZXI9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRyIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICA8cS10aFxuICAgICAgICAgICAgICB2LWZvcj1cImNvbCBpbiBwcm9wcy5jb2xzXCJcbiAgICAgICAgICAgICAgOmtleT1cImNvbC5uYW1lXCJcbiAgICAgICAgICAgICAgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJvcmRlci1ib3R0b20tdGhpblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IGNvbC5sYWJlbCB9fVxuICAgICAgICAgICAgPC9xLXRoPlxuICAgICAgICAgIDwvcS10cj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1pbmRleD1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGRcbiAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1wYS1zbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgc2l6ZT1cIjEzcHhcIlxuICAgICAgICAgICAgICBAbW91c2VvdmVyPVwiaG92ZXJpbmdXaGljaCA9IHByb3BzLmtleVwiXG4gICAgICAgICAgICAgIEBtb3VzZWxlYXZlPVwiaG92ZXJpbmdXaGljaCA9IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgIDpsYWJlbD1cImhvdmVyaW5nV2hpY2ggIT09IHByb3BzLmtleSA/IHByb3BzLnZhbHVlIDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgOmljb249XCJob3ZlcmluZ1doaWNoID09PSBwcm9wcy5rZXkgPyBvdXRsaW5lZFBsYXlBcnJvdyA6IHVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgIEBjbGljaz1cInF1ZXVlU2VydmljZT8uYWRkVHJhY2tCeUlkKHByb3BzLmtleSwgUXVldWVBZGRNb2RlLlBMQVlfSU1NRURJQVRFTFkpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPC9xLXRkPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLXRpdGxlPVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ZCA6cHJvcHM9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggcm93IGl0ZW1zLWNlbnRlciB0ZXh0LXN1YnRpdGxlMSB0ZXh0LWJvbGRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiB1bmRlcmxpbmUtb24taG92ZXIgcG9pbnRlci1vbi1ob3ZlciBmbGV4IGp1c3RpZnktYmV0d2VlbiBjb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHt7IHByb3BzLnZhbHVlLm5hbWUuX2RlZmF1bHQgfX1cbiAgICAgICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgICAgIHYtaWY9XCJwcm9wcy52YWx1ZS5oYXNMeXJpY3NcIlxuICAgICAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICAgICAgICBzaXplPVwiMTNweFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInEtbWwtc21cIlxuICAgICAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZEx5cmljc1wiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd0x5cmljcyhwcm9wcy5rZXkpXCJcbiAgICAgICAgICAgICAgICA+PC9xLWJ0bj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtb3JpZ2luYWw9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICA8cS1jaGlwXG4gICAgICAgICAgICAgIHNxdWFyZVxuICAgICAgICAgICAgICB2LWZvcj1cInByb3AgaW4gcHJvcHMudmFsdWVcIlxuICAgICAgICAgICAgICA6a2V5PVwicHJvcC5pZFwiXG4gICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICBAY2xpY2s9XCJnb1RvT3JpZ2luYWxUcmFja1BhZ2UocHJvcC5pZClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBwcm9wLnRpdGxlLmVuIH19XG4gICAgICAgICAgICA8L3EtY2hpcD5cbiAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGw9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICB7e1xuICBwcm9wcy52YWx1ZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgICAgPFRyYWNrTWVudSA6b3B0aW9ucz1cInRyYWNrTWVudU9wdGlvbnNDcmVhdG9yKHByb3BzLnJvdywgZGlzYylcIj48L1RyYWNrTWVudT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvcS10YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgb3V0bGluZWRQbGF5QXJyb3cgfSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IFFUYWJsZSwgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnc3JjL21vZGVscy9EdXJhdGlvbic7XG5pbXBvcnQgUXVldWVTZXJ2aWNlIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUXVldWVTZXJ2aWNlJztcbmltcG9ydCB7IGluamVjdCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IFF1ZXVlQWRkTW9kZSB9IGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vUXVldWVTZXJ2aWNlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IFRyYWNrTWVudSBmcm9tICcuLi9NZW51T3B0aW9ucy9UcmFja01lbnVPcHRpb25zQnVpbGRlci9UcmFja01lbnUudnVlJztcbmltcG9ydCBUcmFja01lbnVPcHRpb25zQnVpbGRlciBmcm9tICcuLi9NZW51T3B0aW9ucy9UcmFja01lbnVPcHRpb25zQnVpbGRlci9UcmFja01lbnVPcHRpb25CdWlsZGVyJztcbmltcG9ydCB7XG4gIG91dGxpbmVkTHlyaWNzXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCBMeXJpY3NWaWV3RGlhbG9nIGZyb20gJy4uL0RpYWxvZ3MvTHlyaWNzVmlld0RpYWxvZy52dWUnO1xuXG5pbnRlcmZhY2UgVHJhY2tMaXN0VGFibGVQcm9wcyB7XG4gIHRyYWNrczogTWFwPEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvW10+O1xufVxuXG4vLyBJbmplY3RlZCBzZXJ2aWNlcy9kYXRhXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgcXVldWVTZXJ2aWNlID0gaW5qZWN0PFF1ZXVlU2VydmljZT4oJ3F1ZXVlU2VydmljZScpO1xuXG5jb25zdCBob3ZlcmluZ1doaWNoID0gcmVmPG51bWJlcj4oKTtcblxuLy8gTWVudSBvcHRpb25zXG5jb25zdCB0cmFja01lbnVPcHRpb25zQ3JlYXRvciA9ICh0cmFjazogVHJhY2tSZWFkRHRvLCBhbGJ1bTogQWxidW1SZWFkRHRvKSA9PlxuICBuZXcgVHJhY2tNZW51T3B0aW9uc0J1aWxkZXIodHJhY2ssIGFsYnVtKVxuICAgIC5hZGRQbGF5TmV4dE9wdGlvbigpXG4gICAgLmFkZEFkZFRvUXVldWVPcHRpb24oKVxuICAgIC5hZGRTZWFyY2hPbllvdXR1YmVPcHRpb24oKVxuICAgIC5idWlsZCgpO1xuXG5jb25zdCBwYWdpbmF0aW9uID0ge1xuICByb3dzUGVyUGFnZTogMCxcbiAgZGVzY2VuZGluZzogdHJ1ZSxcbn07XG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnaW5kZXgnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnIycsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5pbmRleCxcbiAgICBmb3JtYXQ6ICh2YWw6IG51bWJlcikgPT4gYCR7dmFsfWAsXG4gICAgc3R5bGU6ICd3aWR0aDogMjRweCcsXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3RpdGxlJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ1RJVExFJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdyxcbiAgICBjbGFzc2VzOiAndGV4dC1oNCcsXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ29yaWdpbmFsJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgbGFiZWw6ICdPUklHSU5BTCcsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cub3JpZ2luYWwsXG4gICAgY2xhc3NlczogJ3RleHQtYm9sZCcsXG4gICAgc29ydGFibGU6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2R1cmF0aW9uJyxcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBsYWJlbDogJ0RVUkFUSU9OJyxcbiAgICBhbGlnbjogJ3JpZ2h0JyxcbiAgICBmaWVsZDogKHJvdzogVHJhY2tSZWFkRHRvKSA9PiByb3cuZHVyYXRpb24sXG4gICAgZm9ybWF0OiAodmFsOiBzdHJpbmcpID0+XG4gICAgICBgJHtEdXJhdGlvbi5mcm9tRHVyYXRpb25TdHJpbmcodmFsKS50b0R1cmF0aW9uU3RyaW5nKCl9YCxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG5dO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPFRyYWNrTGlzdFRhYmxlUHJvcHM+KCk7XG5cbmNvbnN0IGdvVG9PcmlnaW5hbFRyYWNrUGFnZSA9IChvcmlnaW5hbFRyYWNrSWQ6IHN0cmluZykgPT4ge1xuICAkcm91dGVyLnB1c2goe1xuICAgIG5hbWU6ICdPcmlnaW5hbFRyYWNrJyxcbiAgICBwYXJhbXM6IHsgb3JpZ2luYWxJZDogb3JpZ2luYWxUcmFja0lkLCBwYWdlOiAxIH0sXG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd0x5cmljcyA9ICh0cmFja0lkOiBzdHJpbmcpID0+IHtcbiAgY29uc29sZS5sb2codHJhY2tJZCk7XG4gICRxLmRpYWxvZyhcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IEx5cmljc1ZpZXdEaWFsb2csXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICB0cmFja0lkLFxuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IEFzc2V0UmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldFV0aWxzIHtcbiAgc3RhdGljIGRvd25sb2FkQXNzZXQoYXNzZXQ6IEFzc2V0UmVhZER0byk6IHZvaWQge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gYCR7YXNzZXQudXJsfT9kb3dubG9hZD10cnVlYDtcbiAgICBhLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGEuY2xpY2soKTtcbiAgfVxuXG4gIHN0YXRpYyBvcGVuQXNzZXRJbk5ld1RhYihhc3NldDogQXNzZXRSZWFkRHRvKTogdm9pZCB7XG4gICAgd2luZG93Lm9wZW4oYXNzZXQudXJsLCAnX2JsYW5rJyk7XG4gIH1cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgcG9zaXRpb249XCJ0b3BcIlxuICAgIGJhY2tkcm9wLWZpbHRlcj1cImJyaWdodG5lc3MoNTAlKVwiXG4gID5cbiAgICA8cS1jYXJkIHN0eWxlPVwid2lkdGg6IDEyMDBweDsgbWF4LXdpZHRoOiA4MHZ3OyBtYXJnaW4tdG9wOiAxMHZoOyBib3JkZXItcmFkaXVzOiA1cHg7XCI+XG4gICAgICA8cS10b29sYmFyIGNsYXNzPVwiYmctcHJpbWFyeVwiPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlPlxuICAgICAgICAgIFByZXZpZXcgb2Yge3sgcHJvcHMuYXNzZXQubmFtZSB9fVxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cblxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgQGNsaWNrPVwiQXNzZXRVdGlscy5kb3dubG9hZEFzc2V0KHByb3BzLmFzc2V0KVwiXG4gICAgICAgID5cbiAgICAgICAgICBEb3dubG9hZFxuICAgICAgICA8L3EtYnRuPlxuICAgICAgPC9xLXRvb2xiYXI+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiB2LWlmPVwiaXNQcmV2aWV3YWJsZShwcm9wcy5hc3NldClcIj5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIDpzcmM9XCJwcm9wcy5hc3NldC51cmxcIlxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgaGVpZ2h0PVwiNjAwXCJcbiAgICAgICAgPlxuICAgICAgICA8L2lmcmFtZT5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24gdi1lbHNlPlxuICAgICAgICBQcmV2aWV3IG5vdCBhdmFpbGFibGUgZm9yIHRoaXMgYXNzZXQuIChVbnN1cHBvcnRlZCBNSU1FIHR5cGU6IHt7IHByb3BzLmFzc2V0Lm1pbWUgfX0pXG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgQXNzZXRSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGkvZGlzdCc7XG5pbXBvcnQgQXNzZXRVdGlscyBmcm9tICdzcmMvdXRpbHMvQXNzZXRVdGlscyc7XG5cbmNvbnN0IFBSRVZJRVdBQkxFX01JTUVfVFlQRVMgPSBbXG4gICdpbWFnZS9qcGVnJyxcbiAgJ2ltYWdlL3BuZycsXG4gICdpbWFnZS9naWYnLFxuICAnaW1hZ2UvYm1wJyxcbiAgJ2ltYWdlL3dlYnAnLFxuICAnaW1hZ2UveC1pY29uJyxcbiAgJ3RleHQvcGxhaW4nLFxuICAndGV4dC9odG1sJyxcbiAgJ3RleHQveG1sJyxcbiAgJ3ZpZGVvL21wNCcsXG4gICd2aWRlby93ZWJtJyxcbiAgJ3ZpZGVvL21wZWcnLFxuICAnYXVkaW8vbXBlZzMnLFxuICAnYXVkaW8vb2dnJyxcbiAgJ2F1ZGlvL21wNCcsXG4gICdhdWRpby9mbGFjJyxcbiAgJ2F1ZGlvL21pZGknLFxuXTtcblxuY29uc3QgaXNQcmV2aWV3YWJsZSA9IChhc3NldDogQXNzZXRSZWFkRHRvKSA9PiB7XG4gIGlmICghYXNzZXQubWltZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gUFJFVklFV0FCTEVfTUlNRV9UWVBFUy5pbmNsdWRlcyhhc3NldC5taW1lKTtcbn07XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBhc3NldDogQXNzZXRSZWFkRHRvO1xufT4oKTtcbjwvc2NyaXB0PlxuIiwiPCEtLSBlc2xpbnQtZGlzYWJsZSB2dWUvbm8tdW51c2VkLXZhcnMgLS0+XG48dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgICBiYWNrZHJvcC1maWx0ZXI9XCJicmlnaHRuZXNzKDUwJSlcIlxuICA+XG4gICAgPHEtY2FyZCBzdHlsZT1cIndpZHRoOiAxMjAwcHg7IG1heC13aWR0aDogODB2dzsgbWFyZ2luLXRvcDogMTB2aDsgYm9yZGVyLXJhZGl1czogNXB4O1wiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkFsYnVtIEFzc2V0czwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwicS1wdC1ub25lXCJcbiAgICAgICAgdi1pZj1cImFsYnVtQXNzZXRzLmxlbmd0aCA+IDBcIlxuICAgICAgPlxuICAgICAgICA8cS10YWJsZVxuICAgICAgICAgIDpyb3dzPVwiYWxidW1Bc3NldHNcIlxuICAgICAgICAgIDpjb2x1bW5zPVwidGFibGVDb2x1bW5zXCJcbiAgICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICByb3cta2V5PVwiaWRcIlxuICAgICAgICAgIDpyb3dzLXBlci1wYWdlLW9wdGlvbnM9XCJbMTAsIDIwLCA1MCwgMTAwXVwiXG4gICAgICAgICAgZmxhdFxuICAgICAgICA+XG4gICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5PVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxxLXRyIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICAgICAga2V5PVwiaWRcIlxuICAgICAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5pZCB9fVxuICAgICAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICAgICAga2V5PVwibmFtZVwiXG4gICAgICAgICAgICAgICAgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgcHJvcHMucm93Lm5hbWUgfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuXG4gICAgICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICAgICAga2V5PVwic2l6ZVwiXG4gICAgICAgICAgICAgICAgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgKHByb3BzLnJvdy5zaXplIC8gMTAyNCAvIDEwMjQpLnRvRml4ZWQoMikgfX1cbiAgICAgICAgICAgICAgPC9xLXRkPlxuXG4gICAgICAgICAgICAgIDxxLXRkXG4gICAgICAgICAgICAgICAga2V5PVwibWltZS10eXBlXCJcbiAgICAgICAgICAgICAgICA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cubWltZSB9fVxuICAgICAgICAgICAgICA8L3EtdGQ+XG5cbiAgICAgICAgICAgICAgPHEtbWVudSB0b3VjaC1wb3NpdGlvbj5cbiAgICAgICAgICAgICAgICA8cS1saXN0IHN0eWxlPVwibWluLXdpZHRoOiAxMDBweFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwcmV2aWV3QXNzZXQocHJvcHMucm93KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPW1hdFByZXZpZXcgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+UHJldmlldzwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIkFzc2V0VXRpbHMub3BlbkFzc2V0SW5OZXdUYWIocHJvcHMucm93KVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtYXZhdGFyIDppY29uPW1hdE9wZW5Jbk5ldyAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5PcGVuIGluIG5ldyB0YWI8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIkFzc2V0VXRpbHMuZG93bmxvYWRBc3NldChwcm9wcy5yb3cpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXIgOmljb249bWF0RmlsZURvd25sb2FkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkRvd25sb2FkPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtdHI+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9xLXRhYmxlPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uXG4gICAgICAgIGNsYXNzPVwicS1wYi1ub25lXCJcbiAgICAgICAgdi1lbHNlXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2IHRleHQtY2VudGVyXCI+Tm8gYXNzZXRzIGZvdW5kPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLWFjdGlvbnMgYWxpZ249XCJyaWdodFwiPlxuICAgICAgICA8cS1idG5cbiAgICAgICAgICBmbGF0XG4gICAgICAgICAgbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBtYXRGaWxlRG93bmxvYWQsXG4gIG1hdFByZXZpZXcsXG4gIG1hdE9wZW5Jbk5ld1xufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucyc7XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8sIEFzc2V0UmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpL2Rpc3QnO1xuaW1wb3J0IHsgUURpYWxvZywgdXNlUXVhc2FyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJztcbmltcG9ydCBBc3NldFByZXZpZXdEaWFsb2cgZnJvbSAnLi9Bc3NldFByZXZpZXdEaWFsb2cudnVlJztcbmltcG9ydCBBc3NldFV0aWxzIGZyb20gJ3NyYy91dGlscy9Bc3NldFV0aWxzJztcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcblxuaW50ZXJmYWNlIEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nUHJvcHMge1xuICBhbGJ1bTogQWxidW1SZWFkRHRvO1xufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nUHJvcHM+KCk7XG5cbmNvbnN0IGFsYnVtQXNzZXRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gcHJvcHMuYWxidW0ub3RoZXJGaWxlcyEuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmICghYS5uYW1lKSByZXR1cm4gMTtcbiAgICBpZiAoIWIubmFtZSkgcmV0dXJuIC0xO1xuICAgIHJldHVybiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBwcmV2aWV3QXNzZXQgPSAoYXNzZXQ6IEFzc2V0UmVhZER0bykgPT4ge1xuICAkcS5kaWFsb2coe1xuICAgIGNvbXBvbmVudDogQXNzZXRQcmV2aWV3RGlhbG9nLFxuICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICBhc3NldFxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCB0YWJsZUNvbHVtbnMgPSBbXG4gIHtcbiAgICBuYW1lOiAnaWQnLFxuICAgIGxhYmVsOiAnQXNzZXQgSUQnLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cuaWRcbiAgfSxcbiAge1xuICAgIG5hbWU6ICduYW1lJyxcbiAgICBsYWJlbDogJ05hbWUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93Lm5hbWVcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzaXplJyxcbiAgICBsYWJlbDogJ1NpemUgKE1CKScsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5zaXplLFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHsodmFsIC8gMTAyNCAvIDEwMjQpLnRvRml4ZWQoMil9YFxuICB9LFxuICB7XG4gICAgbmFtZTogJ21pbWUtdHlwZScsXG4gICAgbGFiZWw6ICdDb250ZW50IFR5cGUnLFxuICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cubWltZVxuICB9XG5dO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPExvYWRhYmxlRWxlbWVudCA6c3RhdGUtY29udHJvbGxlcj1cImNvbnRyb2xsZXJcIj5cbiAgICAgIDx0ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICAgICAgPHEtc3Bpbm5lci1nZWFycyBzaXplPVwiMTAwcHhcIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PVwieyBkYXRhIH1cIj5cbiAgICAgICAgPEFsYnVtSW5mb1NlY3Rpb24gOmFsYnVtPVwiZGF0YSEubWFzdGVyQWxidW1cIiAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sLWFsbCBxLW10LWxnIGFsYnVtLXBhZ2UtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZFwiPlxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICBjbGFzcz1cInBsYXktYnRuIHEtbXgtbWRcIlxuICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwicGxheUFsYnVtKGRhdGEhLCBRdWV1ZUFkZE1vZGUuUExBWV9JTU1FRElBVEVMWSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS10b29sdGlwPlBsYXk8L3EtdG9vbHRpcD5cblxuICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgdG91Y2gtcG9zaXRpb25cbiAgICAgICAgICAgICAgICBjb250ZXh0LW1lbnVcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDE1MHB4XCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBsYXlBbGJ1bShkYXRhISwgUXVldWVBZGRNb2RlLkFQUEVORF9ORVhUKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5QbGF5IE5leHQ8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInBsYXlBbGJ1bShkYXRhISwgUXVldWVBZGRNb2RlLkFQUEVORF9MQVNUKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5BZGQgdG8gUXVldWU8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIGNsYXNzPVwibGlrZS1idG4gcS1teC1tZFwiXG4gICAgICAgICAgICAgIDppY29uPVwib3V0bGluZWRGYXZvcml0ZUJvcmRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLXRvb2x0aXA+U2F2ZTwvcS10b29sdGlwPlxuICAgICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgICAgPHEtYnRuXG4gICAgICAgICAgICAgIGZhYlxuICAgICAgICAgICAgICBmbGF0XG4gICAgICAgICAgICAgIGNsYXNzPVwicS1teC1tZFwiXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIDppY29uPVwib3V0bGluZWRNb3JlSG9yaXpcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cS1tZW51XG4gICAgICAgICAgICAgICAgZml0XG4gICAgICAgICAgICAgICAgYW5jaG9yPVwiY2VudGVyIG1pZGRsZVwiXG4gICAgICAgICAgICAgICAgc2VsZj1cInRvcCBtaWRkbGVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtbGlzdD5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd0FsYnVtQXNzZXREaWFsb2coZGF0YSEubWFzdGVyQWxidW0pXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwib3V0bGluZWREZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5WaWV3IE90aGVyIEFzc2V0czwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDppY29uPVwib3V0bGluZWRFZGl0Tm90ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5BdHRyaWJ1dGUgRWRpdG9yPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8VHJhY2tMaXN0VGFibGUgOnRyYWNrcz1cImRhdGEhLnRyYWNrc1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlICNlcnJvcj1cInsgZXJyb3IgfVwiPlxuICAgICAgICA8cS1jYXJkXG4gICAgICAgICAgY2xhc3M9XCJxLW1hLW1kXCJcbiAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogNDAwcHhcIlxuICAgICAgICA+XG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5FcnJvcjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+RmFpbGVkIHRvIGxvYWQgYWxidW08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNhcHRpb25cIj57eyBlcnJvcj8ubWVzc2FnZSB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2FwdGlvblwiPnt7IGVycm9yPy5zdGFjayB9fTwvZGl2PlxuICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgICAgICA8cS1zZXBhcmF0b3IgaW5zZXQgLz5cblxuICAgICAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgICAgIHt7IGVycm9yPy5zdGFjayB9fVxuICAgICAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L0xvYWRhYmxlRWxlbWVudD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRQbGF5QXJyb3csXG4gIG91dGxpbmVkTW9yZUhvcml6LFxuICBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyLFxuICBvdXRsaW5lZERlc2NyaXB0aW9uLFxuICBvdXRsaW5lZEVkaXROb3RlXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgQWxidW1BcGkgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBDb25maWd1cmF0aW9uIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlciBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL0FwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcic7XG5pbXBvcnQgeyBjb21wdXRlZCwgQ29tcHV0ZWRSZWYsIGluamVjdCwgb25Nb3VudGVkLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7IHVzZUxvYWRhYmxlQ29udHJvbGxlciB9IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUNvbnRyb2xsZXInO1xuaW1wb3J0IExvYWRhYmxlRWxlbWVudCBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVFbGVtZW50LnZ1ZSc7XG5pbXBvcnQgeyBUcmFja1JlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgQWxidW1JbmZvU2VjdGlvbiBmcm9tICdzcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvQWxidW1JbmZvU2VjdGlvbi52dWUnO1xuaW1wb3J0IFRyYWNrTGlzdFRhYmxlIGZyb20gJ3NyYy9jb21wb25lbnRzL0FsYnVtUGFnZS9UcmFja0xpc3RUYWJsZS52dWUnO1xuaW1wb3J0IHsgUUNhcmQsIHVzZVF1YXNhciwgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nIGZyb20gJ3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2cudnVlJztcbmltcG9ydCBRdWV1ZVNlcnZpY2UsIHsgUXVldWVBZGRNb2RlIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IEx5cmljc1ZpZXdEaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9MeXJpY3NWaWV3RGlhbG9nLnZ1ZSc7XG5cbi8vIFZpZXcgTW9kZWxzXG5pbnRlcmZhY2UgQWxidW1QYWdlUm91dGVQYXJhbWV0ZXJzIHtcbiAgYWxidW1JZDogQ29tcHV0ZWRSZWY8c3RyaW5nPjtcbn1cblxuaW50ZXJmYWNlIEFsYnVtUGFnZVZpZXdNb2RlbCB7XG4gIG1hc3RlckFsYnVtOiBBbGJ1bVJlYWREdG87XG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXTtcblxuICAvLyBBbGJ1bSAtPiBUcmFja3MgaW4gQWxidW0sIGZvciBlYWNoIGFsYnVtXG4gIHRyYWNrczogTWFwPEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvW10+O1xufVxuXG4vLyBJbmplY3QvZ2V0IHJlcXVpcmVkIHNlcnZjaWVzXG5jb25zdCBhcGlDb25maWdQcm92aWRlciA9XG4gIGluamVjdDxBcGlDb25maWd1cmF0aW9uUHJvdmlkZXI8Q29uZmlndXJhdGlvbj4+KCdhcGlDb25maWdQcm92aWRlcicpO1xuaWYgKCFhcGlDb25maWdQcm92aWRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0FQSSBjb25maWd1cmF0aW9uIHByb3ZpZGVyIG5vdCBmb3VuZCcpO1xufVxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0ICRyb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHJvdXRlUGFyYW1zID0ge1xuICBhbGJ1bUlkOiBjb21wdXRlZCgoKSA9PiAkcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuYWxidW1JZCksXG59O1xuY29uc3QgY29udHJvbGxlciA9IHVzZUxvYWRhYmxlQ29udHJvbGxlcjxBbGJ1bVBhZ2VWaWV3TW9kZWw+KCk7XG5jb25zdCBxdWV1ZVNlcnZpY2UgPSBpbmplY3Q8UXVldWVTZXJ2aWNlPigncXVldWVTZXJ2aWNlJyk7XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWxTaW5nbGVEaXNjID0gKFxuICBtYXN0ZXI6IEFsYnVtUmVhZER0b1xuKTogQWxidW1QYWdlVmlld01vZGVsID0+IHtcbiAgY29uc3QgdHJhY2tzID0gbmV3IE1hcDxBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0b1tdPigpO1xuXG4gIGlmIChtYXN0ZXIudHJhY2tzKSB7XG4gICAgbWFzdGVyLnRyYWNrcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4ISAtIGIuaW5kZXghKTtcbiAgICB0cmFja3Muc2V0KG1hc3RlciwgbWFzdGVyLnRyYWNrcyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1hc3RlckFsYnVtOiBtYXN0ZXIsXG4gICAgZGlzY3M6IFtdLFxuICAgIHRyYWNrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWxNdWx0aURpc2MgPSAoXG4gIG1hc3RlcjogQWxidW1SZWFkRHRvLFxuICBkaXNjczogQWxidW1SZWFkRHRvW11cbik6IEFsYnVtUGFnZVZpZXdNb2RlbCA9PiB7XG4gIGNvbnN0IHRyYWNrcyA9IG5ldyBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT4oKTtcblxuICBpZiAobWFzdGVyLnRyYWNrcykge1xuICAgIHRyYWNrcy5zZXQobWFzdGVyLCBtYXN0ZXIudHJhY2tzKTtcbiAgfVxuXG4gIGRpc2NzLmZvckVhY2goKGRpc2MpID0+IHtcbiAgICBpZiAoZGlzYy50cmFja3MpIHtcbiAgICAgIC8vIFNvcnQgdHJhY2tzIGJ5IGluZGV4XG4gICAgICBkaXNjLnRyYWNrcy5zb3J0KChhLCBiKSA9PiBhLmluZGV4ISAtIGIuaW5kZXghKTtcbiAgICAgIHRyYWNrcy5zZXQoZGlzYywgZGlzYy50cmFja3MpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBtYXN0ZXJBbGJ1bTogbWFzdGVyLFxuICAgIGRpc2NzLFxuICAgIHRyYWNrcyxcbiAgfTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVWaWV3TW9kZWwgPSAoXG4gIG1hc3RlcjogQWxidW1SZWFkRHRvLFxuICBkaXNjczogQWxidW1SZWFkRHRvW11cbik6IEFsYnVtUGFnZVZpZXdNb2RlbCA9PiB7XG4gIGlmIChkaXNjcy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVWaWV3TW9kZWxNdWx0aURpc2MobWFzdGVyLCBkaXNjcyk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVWaWV3TW9kZWxTaW5nbGVEaXNjKG1hc3Rlcik7XG4gIH1cbn07XG5cbmNvbnN0IGxvYWRNdWx0aURpc2NBbGJ1bSA9IGFzeW5jIChcbiAgbWFzdGVyQWxidW1JZDogc3RyaW5nXG4pOiBQcm9taXNlPHtcbiAgbWFzdGVyOiBBbGJ1bVJlYWREdG87XG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXTtcbn0+ID0+IHtcbiAgY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoXG4gICAgYXBpQ29uZmlnUHJvdmlkZXIuZ2V0QXBpQ29uZmlndXJhdGlvbldpdGhBdXRoKClcbiAgKTtcblxuICBjb25zdCBtYXN0ZXJBbGJ1bSA9IGF3YWl0IGFsYnVtQXBpLmdldEFsYnVtKHtcbiAgICBpZDogbWFzdGVyQWxidW1JZCxcbiAgfSk7XG5cbiAgY29uc3QgZGlzY3MgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBtYXN0ZXJBbGJ1bS5jaGlsZEFsYnVtcz8ubWFwKChjaGlsZEFsYnVtKSA9PlxuICAgICAgYWxidW1BcGkuZ2V0QWxidW0oe1xuICAgICAgICBpZDogY2hpbGRBbGJ1bS5pZCEsXG4gICAgICB9KVxuICAgICkgfHwgW11cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIG1hc3RlcjogbWFzdGVyQWxidW0sXG4gICAgZGlzY3M6IGRpc2NzLFxuICB9O1xufTtcblxuY29uc3QgbG9hZCA9IGFzeW5jIChhbGJ1bUlkOiBzdHJpbmcpID0+IHtcbiAgY29udHJvbGxlci5zZXRMb2FkaW5nKCk7XG4gIHRyeSB7XG4gICAgY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoXG4gICAgICBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKVxuICAgICk7XG5cbiAgICBjb25zdCBhbGJ1bSA9IGF3YWl0IGFsYnVtQXBpLmdldEFsYnVtKHtcbiAgICAgIGlkOiBhbGJ1bUlkLFxuICAgIH0pO1xuXG4gICAgLy8gTmVlZCB0byBjaGVjayBpZiB0aGUgYWxidW0gaGFzIGRpc2NzIG9yIHRoZSBhbGJ1bSBpdHNlbGYgaXMgYSBkaXNjc1xuICAgIGNvbnN0IGlzTXVsdGlEaXNjID1cbiAgICAgIGFsYnVtLnBhcmVudEFsYnVtIHx8IChhbGJ1bT8uY2hpbGRBbGJ1bXM/Lmxlbmd0aCB8fCAwKSA+IDA7XG5cbiAgICBsZXQgdmlld01vZGVsOiBBbGJ1bVBhZ2VWaWV3TW9kZWw7XG4gICAgaWYgKGlzTXVsdGlEaXNjKSB7XG4gICAgICBjb25zdCBpc01hc3RlciA9ICFhbGJ1bS5wYXJlbnRBbGJ1bSAmJiBhbGJ1bS5kaXNjTnVtYmVyID09PSAwO1xuICAgICAgaWYgKCFpc01hc3Rlcikge1xuICAgICAgICAkcm91dGVyLnJlcGxhY2Uoe1xuICAgICAgICAgIG5hbWU6ICdBbGJ1bScsXG4gICAgICAgICAgcGFyYW1zOiB7IGFsYnVtSWQ6IGFsYnVtLnBhcmVudEFsYnVtIS5pZCEgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hc3RlckFsYnVtSWQgPSBhbGJ1bS5pZCE7XG4gICAgICBjb25zdCB7IG1hc3RlciwgZGlzY3MgfSA9IGF3YWl0IGxvYWRNdWx0aURpc2NBbGJ1bShtYXN0ZXJBbGJ1bUlkKTtcblxuICAgICAgdmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbChtYXN0ZXIsIGRpc2NzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmlld01vZGVsID0gaW5pdGlhbGl6ZVZpZXdNb2RlbChhbGJ1bSwgW10pO1xuICAgIH1cblxuICAgIGNvbnRyb2xsZXIuc2V0U3VjY2Vzcyh2aWV3TW9kZWwpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnRyb2xsZXIuc2V0RXJyb3IoZXJyb3IgYXMgRXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5jb25zdCBzaG93QWxidW1Bc3NldERpYWxvZyA9IChhbGJ1bTogQWxidW1SZWFkRHRvKSA9PiB7XG4gICRxLmRpYWxvZyhcbiAgICB7XG4gICAgICBjb21wb25lbnQ6IEFsYnVtQXNzZXRzVmlld2VyRGlhbG9nLFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgYWxidW0sXG4gICAgICB9XG4gICAgfVxuICApO1xufVxuXG5jb25zdCBwbGF5QWxidW0gPSAodmlld01vZGVsOiBBbGJ1bVBhZ2VWaWV3TW9kZWwsIGFkZE1vZGU6IFF1ZXVlQWRkTW9kZSkgPT4ge1xuICBjb25zdCB0cmFja3MgPSBBcnJheS5mcm9tKHZpZXdNb2RlbC50cmFja3MudmFsdWVzKCkpXG4gICAgLnJlZHVjZSgoYWNjLCB2YWwpID0+IGFjYy5jb25jYXQodmFsKSwgW10pO1xuXG4gIGNvbnN0IHRyYWNrSWRzID0gdHJhY2tzLm1hcCgodHJhY2spID0+IHRyYWNrLmlkISk7XG5cbiAgcXVldWVTZXJ2aWNlPy5hZGRUcmFja3NCeUlkcyh0cmFja0lkcywgYWRkTW9kZSk7XG59O1xuXG4vLyBiaW5kIGhvb2tzIHRvIHVwZGF0ZSBjb250cm9sbGVyIGlmIHRoZSByb3V0ZSBjaGFuZ2VzXG5vbk1vdW50ZWQoKCkgPT4ge1xuICBsb2FkKHJvdXRlUGFyYW1zLmFsYnVtSWQudmFsdWUgYXMgc3RyaW5nKTtcblxuICB3YXRjaChyb3V0ZVBhcmFtcy5hbGJ1bUlkLCBhc3luYyAoYWxidW1JZCkgPT4ge1xuICAgIGF3YWl0IGxvYWQoYWxidW1JZCBhcyBzdHJpbmcpO1xuICB9KTtcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cbi5ib2R5LS1saWdodCAubGlrZS1idG4ge1xuICBjb2xvcjogJG5lZ2F0aXZlXG59XG5cbi5ib2R5LS1kYXJrIC5saWtlLWJ0biB7XG4gIGNvbG9yOiAkbmVnYXRpdmVcbn1cblxuLmJvZHktLWRhcmsgLnBsYXktYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudFxufVxuXG4uYm9keS0tbGlnaHQgLnBsYXktYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudFxufVxuXG4uYm9keS0tbGlnaHQgLmFsYnVtLXBhZ2UtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZGZkZmRmLCAkYWxwaGE6IDAuNClcbn1cblxuLmJvZHktLWRhcmsgLmFsYnVtLXBhZ2UtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNClcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiZGVmIiwibGFzdFBhZ2UiLCJwcm9wcyIsIl9hIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZBLFVBQU0sVUFBVTtBQUNoQixVQUFNLFFBQVE7QUFDZCxVQUFNLHNCQUFzQixNQUFpQzs7QUFDM0QsWUFBTSxnQkFBZSxXQUFNLE1BQU0sZ0JBQVosbUJBQXlCLE9BQU8sQ0FBQyxLQUFLLFdBQVc7QUFDaEUsWUFBQSxPQUFPLE1BQU8sT0FBTztBQUNsQixlQUFBO0FBQUEsTUFDVCxHQUFHLENBQW9DO0FBRS9CLGNBQUEs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

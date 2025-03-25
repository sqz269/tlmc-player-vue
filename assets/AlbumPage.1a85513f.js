import { Q as QSpinnerGears } from "./QSpinnerGears.bd115b6d.js";
import { Q as QTooltip } from "./QTooltip.1ddcfe9f.js";
import { Q as QItem, a as QItemSection, b as QItemLabel } from "./QItem.4d313b24.js";
import { Q as QList } from "./QList.c1d88121.js";
import { j as useVirtualScrollProps, k as useVirtualScroll, l as commonVirtScrollPropsList, Q as QSelect, m as QChip, a as QMenu } from "./QSelect.21d3da9f.js";
import { E as defineComponent, S as useRouter, G as openBlock, U as createElementBlock, J as createVNode, T as unref, R as createBaseVNode, H as createBlock, aa as createCommentVNode, $ as toDisplayString, X as Fragment, Y as renderList, V as QSeparator, _ as _export_sfc, bt as pushScopeId, bu as popScopeId, c as createComponent, m as h, q as hSlot, a1 as hUniqueSlot, Z as QIcon, t as getCurrentInstance, g as computed, a as useDarkProps, d as useDark, aw as scrollTargetProp, r as ref, w as watch, aj as onBeforeMount, o as onMounted, aX as onActivated, aW as onDeactivated, k as onBeforeUnmount, ax as getScrollTarget, av as listenOpts, A as hMergeSlot, aF as useSizeProps, aG as useSize, bv as vmHasRouter, bw as History, ab as isNumber, bx as isDate, ac as isObject, n as nextTick, by as injectMultipleProps, bz as QCheckbox, bh as injectProp, N as QBtn, bc as useLoadableController, ba as TrackApi, bb as apiConfigurationProvider, I as withCtx, Q as QDialog, K as QCardSection, a7 as QSpinner, O as QCard, F as useQuasar, i as inject, W as createTextVNode, bA as QueueAddMode, ai as Duration, l as withDirectives, b8 as QAvatar, M as QCardActions, bp as AlbumApi } from "./index.67231471.js";
import { Q as QPage } from "./QPage.0cc62060.js";
import { C as ClosePopup } from "./ClosePopup.ea8c8906.js";
import { p as outlinedPlayArrow, s as outlinedLyrics, c as outlinedFavoriteBorder, w as outlinedMoreHoriz, x as outlinedDescription, y as outlinedEditNote } from "./index.b9ab0592.js";
import { L as LoadableElement } from "./LoadableElement.5abfd192.js";
import { Q as QImg } from "./QImg.b4514f27.js";
import { D as DataSourceButton } from "./DataSourceButton.00cb4b04.js";
import { T as TrackMenu, a as TrackMenuOptionsBuilder } from "./TrackMenuOptionBuilder.2f88aabb.js";
import { c as QToolbar, Q as QToolbarTitle, e as matPreview, f as matOpenInNew, g as matFileDownload } from "./QToolbar.ceef1c98.js";
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
    return () => h("tr", { class: classes.value }, hSlot(slots.default));
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
      if (def !== void 0 && def.sortOrder) {
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
    cardContainerClass: [String, Array, Object],
    cardContainerStyle: [String, Array, Object],
    cardStyle: [String, Array, Object],
    cardClass: [String, Array, Object],
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
    const __containerClass = computed(
      () => `q-table__container q-table--${props.separator}-separator column no-wrap` + (props.grid === true ? " q-table--grid" : cardDefaultClass.value) + (isDark.value === true ? " q-table--dark" : "") + (props.dense === true ? " q-table--dense" : "") + (props.wrapCells === false ? " q-table--no-wrap" : "") + (inFullscreen.value === true ? " fullscreen scroll" : "")
    );
    const containerClass = computed(
      () => __containerClass.value + (props.loading === true ? " q-table--loading" : "")
    );
    watch(
      () => props.tableStyle + props.tableClass + props.tableHeaderStyle + props.tableHeaderClass + __containerClass.value,
      () => {
        hasVirtScroll.value === true && virtScrollRef.value !== null && virtScrollRef.value.reset();
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
        return bodySlot(
          getBodyScope({
            key,
            row,
            pageIndex,
            __trClass: selected ? "selected" : ""
          })
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
      if (hasOpts === true) {
        child.push(
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
      }
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
              onClick: firstPage
            })
          );
          control.push(
            h(QBtn, {
              key: "pgPrev",
              ...btnProps,
              icon: navIcon.value[1],
              disable: isFirstPage.value,
              onClick: prevPage
            }),
            h(QBtn, {
              key: "pgNext",
              ...btnProps,
              icon: navIcon.value[2],
              disable: isLastPage.value,
              onClick: nextPage
            })
          );
          pagesNumber.value > 2 && control.push(
            h(QBtn, {
              key: "pgLast",
              ...btnProps,
              icon: navIcon.value[3],
              disable: isLastPage.value,
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
        if (props.onRowClick !== void 0 || props.onRowDblclick !== void 0) {
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
      const data = { ref: rootRef, class: containerClass.value };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1QYWdlLjFhODU1MTNmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvQWxidW1JbmZvU2VjdGlvbi52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZnVsbHNjcmVlbi91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUuc29ydC9zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1maWx0ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXBhZ2luYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1leHBhbmQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWNvbHVtbi1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUYWJsZS5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RpYWxvZ3MvTHlyaWNzVmlld0RpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bVBhZ2UvVHJhY2tMaXN0VGFibGUudnVlIiwiLi4vLi4vLi4vc3JjL3V0aWxzL0Fzc2V0VXRpbHMudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EaWFsb2dzL0Fzc2V0UHJldmlld0RpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EaWFsb2dzL0FsYnVtQXNzZXRzVmlld2VyRGlhbG9nLnZ1ZSIsIi4uLy4uLy4uL3NyYy9wYWdlcy9BbGJ1bVBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCI+XG4gICAgPERhdGFTb3VyY2VCdXR0b24gOmRhdGFTb3VyY2VzPVwidmlld01vZGVsLmRhdGFTb3VyY2VzXCI+PC9EYXRhU291cmNlQnV0dG9uPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiY29sLTQgcS1weC1tZFwiXG4gICAgICBzdHlsZT1cIm1heC13aWR0aDogMjMwcHhcIlxuICAgID5cbiAgICAgIDxxLWltZ1xuICAgICAgICA6c3JjPVwidmlld01vZGVsLmFsYnVtQ292ZXJVcmxcIlxuICAgICAgICByYXRpbz1cIjFcIlxuICAgICAgICB2LWlmPVwidmlld01vZGVsLmFsYnVtQ292ZXJVcmxcIlxuICAgICAgPlxuICAgICAgPC9xLWltZz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGl0ZW1zLWVuZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5BbGJ1bTwvZGl2PlxuICAgICAgICAgIDxoMyBjbGFzcz1cInEtbWItc20tc20gcS1tYi1ub25lIHEtbXQtbWRcIj5cbiAgICAgICAgICAgIHt7IHZpZXdNb2RlbC5hbGJ1bU5hbWUgfX1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGlkPVwiYXJ0aXN0c1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWV0YWRhdGEtZW50cnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkIGN1cnNvci1wb2ludGVyIGFydGlzdC1uYW1lXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJnb3RvQ2lyY2xlKGFydGlzdElkIGFzIHN0cmluZylcIlxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKGFydGlzdE5hbWUsIGFydGlzdElkKSBpbiB2aWV3TW9kZWwuYWxidW1BcnRpc3RzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiYXJ0aXN0SWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgYXJ0aXN0TmFtZSB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yXG4gICAgICAgICAgICAgIHZlcnRpY2FsXG4gICAgICAgICAgICAgIHNwYWNlZFxuICAgICAgICAgICAgPjwvcS1zZXBhcmF0b3I+XG5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJyZWxlYXNlLWRhdGVcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1ldGFkYXRhLWVudHJ5XCJcbiAgICAgICAgICAgICAgdi1pZj1cInZpZXdNb2RlbC5yZWxlYXNlRGF0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgICAgIHt7IHZpZXdNb2RlbC5yZWxlYXNlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8gfSBmcm9tICdiYWNrZW5kLWFwaS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge1xuICBvdXRsaW5lZEluZm8sXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCBEYXRhU291cmNlQnV0dG9uIGZyb20gJy4uL0RhdGFTb3VyY2VCdG4vRGF0YVNvdXJjZUJ1dHRvbi52dWUnO1xuXG5pbnRlcmZhY2UgQWxidW1JbmZvU2VjdGlvblByb3BzIHtcbiAgYWxidW06IEFsYnVtUmVhZER0bztcbn1cblxuaW50ZXJmYWNlIEFsYnVtSW5mb1NlY3Rpb25WaWV3TW9kZWwge1xuICBhbGJ1bU5hbWU6IHN0cmluZztcbiAgLy8gQXJ0aXN0IGlkIC0+IGFydGlzdCBuYW1lLCBpZCBuZWVkZWQgZm9yIG5hdmlnYXRpb25cbiAgYWxidW1BcnRpc3RzOiB7IFthcnRpc3RJZDogc3RyaW5nXTogc3RyaW5nIH07XG4gIGFsYnVtQ292ZXJVcmw6IHN0cmluZyB8IG51bGw7XG5cbiAgcmVsZWFzZURhdGU6IERhdGUgfCBudWxsO1xuXG4gIC8vIERhdGEgcHJvdmlkZXJzXG4gIGRhdGFTb3VyY2VzOiBzdHJpbmdbXTtcbn1cblxuLy8gSW5qZWN0ZWQgc2VydmljZXMvZGF0YVxuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxBbGJ1bUluZm9TZWN0aW9uUHJvcHM+KCk7XG5jb25zdCBpbml0aWFsaXplVmlld01vZGVsID0gKCk6IEFsYnVtSW5mb1NlY3Rpb25WaWV3TW9kZWwgPT4ge1xuICBjb25zdCBhbGJ1bUFydGlzdHMgPSBwcm9wcy5hbGJ1bS5hbGJ1bUFydGlzdD8ucmVkdWNlKChhY2MsIGFydGlzdCkgPT4ge1xuICAgIGFjY1thcnRpc3QuaWQhXSA9IGFydGlzdC5uYW1lITtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSBhcyB7IFthcnRpc3RJZDogc3RyaW5nXTogc3RyaW5nIH0pO1xuXG4gIGNvbnNvbGUubG9nKCdhbGJ1bUFydGlzdHMnLCBhbGJ1bUFydGlzdHMpO1xuXG4gIHJldHVybiB7XG4gICAgYWxidW1OYW1lOiBwcm9wcy5hbGJ1bS5uYW1lPy5fZGVmYXVsdCB8fCAnJyxcbiAgICBhbGJ1bUFydGlzdHMsXG4gICAgYWxidW1Db3ZlclVybDogcHJvcHMuYWxidW0udGh1bWJuYWlsPy5sYXJnZT8udXJsIHx8IG51bGwsXG4gICAgcmVsZWFzZURhdGU6IHByb3BzLmFsYnVtLnJlbGVhc2VEYXRlIHx8IG51bGwsXG4gICAgZGF0YVNvdXJjZXM6IHByb3BzLmFsYnVtLmRhdGFTb3VyY2UgfHwgW10sXG4gIH0gYXMgQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbDtcbn07XG5cbmNvbnN0IHZpZXdNb2RlbDogQWxidW1JbmZvU2VjdGlvblZpZXdNb2RlbCA9IGluaXRpYWxpemVWaWV3TW9kZWwoKTtcblxuY29uc3QgZ290b0NpcmNsZSA9IChjaXJjbGVJZDogc3RyaW5nKSA9PiB7XG4gICRyb3V0ZXIucHVzaCh7XG4gICAgbmFtZTogJ0NpcmNsZUFsYnVtcycsXG4gICAgcGFyYW1zOiB7IGNpcmNsZUlkLCBwYWdlOiAnMScgfSxcbiAgfSk7XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4jYXJ0aXN0cyAuYXJ0aXN0LW5hbWU6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xuICBjb250ZW50OiAnLCAnO1xufVxuXG4ucS1pbWcge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRoJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgYXV0b1dpZHRoOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IG9uQ2xpY2sgPSBldnQgPT4geyBlbWl0KCdjbGljaycsIGV2dCkgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0aCcsIHtcbiAgICAgICAgICBjbGFzczogcHJvcHMuYXV0b1dpZHRoID09PSB0cnVlID8gJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnLFxuICAgICAgICAgIG9uQ2xpY2tcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGxldCBjb2wsIGNoaWxkXG4gICAgICBjb25zdCBuYW1lID0gdm0udm5vZGUua2V5XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGNvbCA9IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXVxuICAgICAgICBpZiAoY29sID09PSB2b2lkIDApIHJldHVyblxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbCA9IHByb3BzLnByb3BzLmNvbFxuICAgICAgfVxuXG4gICAgICBpZiAoY29sLnNvcnRhYmxlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNvbC5hbGlnbiA9PT0gJ3JpZ2h0J1xuICAgICAgICAgID8gJ3Vuc2hpZnQnXG4gICAgICAgICAgOiAncHVzaCdcblxuICAgICAgICBjaGlsZCA9IGhVbmlxdWVTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuICAgICAgICBjaGlsZFsgYWN0aW9uIF0oXG4gICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgY2xhc3M6IGNvbC5fX2ljb25DbGFzcyxcbiAgICAgICAgICAgIG5hbWU6ICRxLmljb25TZXQudGFibGUuYXJyb3dVcFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGNsYXNzOiBjb2wuX190aENsYXNzXG4gICAgICAgICAgKyAocHJvcHMuYXV0b1dpZHRoID09PSB0cnVlID8gJyBxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgOiAnJyksXG4gICAgICAgIHN0eWxlOiBjb2wuaGVhZGVyU3R5bGUsXG4gICAgICAgIG9uQ2xpY2s6IGV2dCA9PiB7XG4gICAgICAgICAgY29sLnNvcnRhYmxlID09PSB0cnVlICYmIHByb3BzLnByb3BzLnNvcnQoY29sKVxuICAgICAgICAgIG9uQ2xpY2soZXZ0KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0aCcsIGRhdGEsIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUucmVuZGVyL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUcicsXG5cbiAgcHJvcHM6IHtcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIG5vSG92ZXI6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdHInXG4gICAgICArIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwIHx8IHByb3BzLnByb3BzLmhlYWRlciA9PT0gdHJ1ZSA/ICcnIDogJyAnICsgcHJvcHMucHJvcHMuX190ckNsYXNzKVxuICAgICAgKyAocHJvcHMubm9Ib3ZlciA9PT0gdHJ1ZSA/ICcgcS10ci0tbm8taG92ZXInIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ3RyJywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRkJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgYXV0b1dpZHRoOiBCb29sZWFuLFxuICAgIG5vSG92ZXI6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRkJyArIChwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAnIHEtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnKVxuICAgICAgKyAocHJvcHMubm9Ib3ZlciA9PT0gdHJ1ZSA/ICcgcS10ZC0tbm8taG92ZXInIDogJycpXG4gICAgICArICcgJ1xuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMucHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgndGQnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuYW1lID0gdm0udm5vZGUua2V5XG4gICAgICBjb25zdCBjb2wgPSAoXG4gICAgICAgIChwcm9wcy5wcm9wcy5jb2xzTWFwICE9PSB2b2lkIDAgPyBwcm9wcy5wcm9wcy5jb2xzTWFwWyBuYW1lIF0gOiBudWxsKVxuICAgICAgICB8fCBwcm9wcy5wcm9wcy5jb2xcbiAgICAgIClcblxuICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwKSByZXR1cm5cblxuICAgICAgY29uc3QgeyByb3cgfSA9IHByb3BzLnByb3BzXG5cbiAgICAgIHJldHVybiBoKCd0ZCcsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUgKyBjb2wuX190ZENsYXNzKHJvdyksXG4gICAgICAgIHN0eWxlOiBjb2wuX190ZFN0eWxlKHJvdylcbiAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBzZXBhcmF0b3JWYWx1ZXMgPSBbICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2NlbGwnLCAnbm9uZScgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUU1hcmt1cFRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIHdyYXBDZWxsczogQm9vbGVhbixcblxuICAgIHNlcGFyYXRvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hvcml6b250YWwnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHNlcGFyYXRvclZhbHVlcy5pbmNsdWRlcyh2KVxuICAgIH1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCB2bS5wcm94eS4kcSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbWFya3VwLXRhYmxlIHEtdGFibGVfX2NvbnRhaW5lciBxLXRhYmxlX19jYXJkJ1xuICAgICAgKyBgIHEtdGFibGUtLSR7IHByb3BzLnNlcGFyYXRvciB9LXNlcGFyYXRvcmBcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGFyayBxLXRhYmxlX19jYXJkLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLmZsYXQgPT09IHRydWUgPyAnIHEtdGFibGUtLWZsYXQnIDogJycpXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtdGFibGUtLXNxdWFyZScgOiAnJylcbiAgICAgICsgKHByb3BzLndyYXBDZWxscyA9PT0gZmFsc2UgPyAnIHEtdGFibGUtLW5vLXdyYXAnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlXG4gICAgfSwgW1xuICAgICAgaCgndGFibGUnLCB7IGNsYXNzOiAncS10YWJsZScgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgXSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgY29udGVudCkge1xuICByZXR1cm4gaCgnZGl2JywgcHJvcHMsIFtcbiAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBjb250ZW50KVxuICBdKVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlTW91bnQsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFMaXN0IGZyb20gJy4uL2l0ZW0vUUxpc3QuanMnXG5pbXBvcnQgUU1hcmt1cFRhYmxlIGZyb20gJy4uL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMnXG5pbXBvcnQgZ2V0VGFibGVNaWRkbGUgZnJvbSAnLi4vdGFibGUvZ2V0LXRhYmxlLW1pZGRsZS5qcydcblxuaW1wb3J0IHsgdXNlVmlydHVhbFNjcm9sbCwgdXNlVmlydHVhbFNjcm9sbFByb3BzIH0gZnJvbSAnLi91c2UtdmlydHVhbC1zY3JvbGwuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUuY3JlYXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCwgc2Nyb2xsVGFyZ2V0UHJvcCB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQvZXZlbnQuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBjb21wcyA9IHtcbiAgbGlzdDogUUxpc3QsXG4gIHRhYmxlOiBRTWFya3VwVGFibGVcbn1cblxuY29uc3QgdHlwZU9wdGlvbnMgPSBbICdsaXN0JywgJ3RhYmxlJywgJ19fcXRhYmxlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVmlydHVhbFNjcm9sbCcsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VWaXJ0dWFsU2Nyb2xsUHJvcHMsXG5cbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbGlzdCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gdHlwZU9wdGlvbnMuaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuXG4gICAgaXRlbXNGbjogRnVuY3Rpb24sXG4gICAgaXRlbXNTaXplOiBOdW1iZXIsXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHNjcm9sbFRhcmdldFByb3BcbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGF0dHJzIH0pIHtcbiAgICBsZXQgbG9jYWxTY3JvbGxUYXJnZXRcbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuaXRlbXNTaXplID49IDAgJiYgcHJvcHMuaXRlbXNGbiAhPT0gdm9pZCAwXG4gICAgICAgID8gcGFyc2VJbnQocHJvcHMuaXRlbXNTaXplLCAxMClcbiAgICAgICAgOiAoQXJyYXkuaXNBcnJheShwcm9wcy5pdGVtcykgPyBwcm9wcy5pdGVtcy5sZW5ndGggOiAwKVxuICAgICkpXG5cbiAgICBjb25zdCB7XG4gICAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSxcbiAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgcGFkVmlydHVhbFNjcm9sbCxcbiAgICAgIG9uVmlydHVhbFNjcm9sbEV2dFxuICAgIH0gPSB1c2VWaXJ0dWFsU2Nyb2xsKHtcbiAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgsIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQsIGdldFZpcnR1YWxTY3JvbGxFbFxuICAgIH0pXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsU2NvcGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAodmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwRm4gPSAoaXRlbSwgaSkgPT4gKHtcbiAgICAgICAgaW5kZXg6IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20gKyBpLFxuICAgICAgICBpdGVtXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcHJvcHMuaXRlbXNGbiA9PT0gdm9pZCAwXG4gICAgICAgID8gcHJvcHMuaXRlbXMuc2xpY2UodmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8pLm1hcChtYXBGbilcbiAgICAgICAgOiBwcm9wcy5pdGVtc0ZuKHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvIC0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSkubWFwKG1hcEZuKVxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXZpcnR1YWwtc2Nyb2xsIHEtdmlydHVhbC1zY3JvbGwnICsgKHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsID09PSB0cnVlID8gJy0taG9yaXpvbnRhbCcgOiAnLS12ZXJ0aWNhbCcpXG4gICAgICArIChwcm9wcy5zY3JvbGxUYXJnZXQgIT09IHZvaWQgMCA/ICcnIDogJyBzY3JvbGwnKVxuICAgIClcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5zY3JvbGxUYXJnZXQgIT09IHZvaWQgMCA/IHt9IDogeyB0YWJpbmRleDogMCB9XG4gICAgKSlcblxuICAgIHdhdGNoKHZpcnR1YWxTY3JvbGxMZW5ndGgsICgpID0+IHtcbiAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCAoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsRWwgKCkge1xuICAgICAgcmV0dXJuIHJvb3RSZWYudmFsdWUuJGVsIHx8IHJvb3RSZWYudmFsdWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIHJldHVybiBsb2NhbFNjcm9sbFRhcmdldFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChnZXRWaXJ0dWFsU2Nyb2xsRWwoKSwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25WaXJ0dWFsU2Nyb2xsRXZ0LCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25WaXJ0dWFsU2Nyb2xsRXZ0LCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gdm9pZCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX19nZXRWaXJ0dWFsQ2hpbGRyZW4gKCkge1xuICAgICAgbGV0IGNoaWxkID0gcGFkVmlydHVhbFNjcm9sbChcbiAgICAgICAgcHJvcHMudHlwZSA9PT0gJ2xpc3QnID8gJ2RpdicgOiAndGJvZHknLFxuICAgICAgICB2aXJ0dWFsU2Nyb2xsU2NvcGUudmFsdWUubWFwKHNsb3RzLmRlZmF1bHQpXG4gICAgICApXG5cbiAgICAgIGlmIChzbG90cy5iZWZvcmUgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IHNsb3RzLmJlZm9yZSgpLmNvbmNhdChjaGlsZClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhNZXJnZVNsb3Qoc2xvdHMuYWZ0ZXIsIGNoaWxkKVxuICAgIH1cblxuICAgIG9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoc2xvdHMuZGVmYXVsdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1FWaXJ0dWFsU2Nyb2xsOiBkZWZhdWx0IHNjb3BlZCBzbG90IGlzIHJlcXVpcmVkIGZvciByZW5kZXJpbmcnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BzLnR5cGUgPT09ICdfX3F0YWJsZSdcbiAgICAgICAgPyBnZXRUYWJsZU1pZGRsZShcbiAgICAgICAgICB7IHJlZjogcm9vdFJlZiwgY2xhc3M6ICdxLXRhYmxlX19taWRkbGUgJyArIGNsYXNzZXMudmFsdWUgfSxcbiAgICAgICAgICBfX2dldFZpcnR1YWxDaGlsZHJlbigpXG4gICAgICAgIClcbiAgICAgICAgOiBoKGNvbXBzWyBwcm9wcy50eXBlIF0sIHtcbiAgICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgICAgY2xhc3M6IFsgYXR0cnMuY2xhc3MsIGNsYXNzZXMudmFsdWUgXSxcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICAgIH0sIF9fZ2V0VmlydHVhbENoaWxkcmVuKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlU2l6ZSwgeyB1c2VTaXplUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1zaXplL3VzZS1zaXplLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5yZW5kZXIvcmVuZGVyLmpzJ1xuXG5jb25zdCBkZWZhdWx0U2l6ZXMgPSB7XG4gIHhzOiAyLFxuICBzbTogNCxcbiAgbWQ6IDYsXG4gIGxnOiAxMCxcbiAgeGw6IDE0XG59XG5cbmZ1bmN0aW9uIHdpZHRoICh2YWwsIHJldmVyc2UsICRxKSB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNmb3JtOiByZXZlcnNlID09PSB0cnVlXG4gICAgICA/IGB0cmFuc2xhdGVYKCR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJy0nIDogJycgfTEwMCUpIHNjYWxlM2QoJHsgLXZhbCB9LDEsMSlgXG4gICAgICA6IGBzY2FsZTNkKCR7IHZhbCB9LDEsMSlgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FMaW5lYXJQcm9ncmVzcycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlU2l6ZVByb3BzLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGJ1ZmZlcjogTnVtYmVyLFxuXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0cmFja0NvbG9yOiBTdHJpbmcsXG5cbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHN0cmlwZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIHF1ZXJ5OiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBhbmltYXRpb25TcGVlZDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMjEwMFxuICAgIH0sXG5cbiAgICBpbnN0YW50RmVlZGJhY2s6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgcHJveHkuJHEpXG4gICAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgZGVmYXVsdFNpemVzKVxuXG4gICAgY29uc3QgbW90aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZSB8fCBwcm9wcy5xdWVyeSA9PT0gdHJ1ZSlcbiAgICBjb25zdCB3aWR0aFJldmVyc2UgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5yZXZlcnNlICE9PSBwcm9wcy5xdWVyeSlcbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi4oc2l6ZVN0eWxlLnZhbHVlICE9PSBudWxsID8gc2l6ZVN0eWxlLnZhbHVlIDoge30pLFxuICAgICAgJy0tcS1saW5lYXItcHJvZ3Jlc3Mtc3BlZWQnOiBgJHsgcHJvcHMuYW5pbWF0aW9uU3BlZWQgfW1zYFxuICAgIH0pKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3MnXG4gICAgICArIChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICArIChwcm9wcy5yZXZlcnNlID09PSB0cnVlIHx8IHByb3BzLnF1ZXJ5ID09PSB0cnVlID8gJyBxLWxpbmVhci1wcm9ncmVzcy0tcmV2ZXJzZScgOiAnJylcbiAgICAgICsgKHByb3BzLnJvdW5kZWQgPT09IHRydWUgPyAnIHJvdW5kZWQtYm9yZGVycycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4gd2lkdGgocHJvcHMuYnVmZmVyICE9PSB2b2lkIDAgPyBwcm9wcy5idWZmZXIgOiAxLCB3aWR0aFJldmVyc2UudmFsdWUsIHByb3h5LiRxKSlcbiAgICBjb25zdCB0cmFuc2l0aW9uU3VmZml4ID0gY29tcHV0ZWQoKCkgPT4gYHdpdGgkeyBwcm9wcy5pbnN0YW50RmVlZGJhY2sgPT09IHRydWUgPyAnb3V0JyA6ICcnIH0tdHJhbnNpdGlvbmApXG5cbiAgICBjb25zdCB0cmFja0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzc19fdHJhY2sgYWJzb2x1dGUtZnVsbCdcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fdHJhY2stLSR7IHRyYW5zaXRpb25TdWZmaXgudmFsdWUgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fdHJhY2stLSR7IGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICdkYXJrJyA6ICdsaWdodCcgfWBcbiAgICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG1vZGVsU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB3aWR0aChtb3Rpb24udmFsdWUgPT09IHRydWUgPyAxIDogcHJvcHMudmFsdWUsIHdpZHRoUmV2ZXJzZS52YWx1ZSwgcHJveHkuJHEpKVxuICAgIGNvbnN0IG1vZGVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzX19tb2RlbCBhYnNvbHV0ZS1mdWxsJ1xuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX19tb2RlbC0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX19tb2RlbC0tJHsgbW90aW9uLnZhbHVlID09PSB0cnVlID8gJ2luJyA6ICcnIH1kZXRlcm1pbmF0ZWBcbiAgICApXG5cbiAgICBjb25zdCBzdHJpcGVTdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7IHdpZHRoOiBgJHsgcHJvcHMudmFsdWUgKiAxMDAgfSVgIH0pKVxuICAgIGNvbnN0IHN0cmlwZUNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWxpbmVhci1wcm9ncmVzc19fc3RyaXBlIGFic29sdXRlLSR7IHByb3BzLnJldmVyc2UgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX3N0cmlwZS0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiB0cmFja0NsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogbW9kZWxDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogbW9kZWxTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5zdHJpcGUgPT09IHRydWUgJiYgbW90aW9uLnZhbHVlID09PSBmYWxzZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHN0cmlwZUNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBzdHJpcGVTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogMSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlXG4gICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICA6IHByb3BzLnZhbHVlXG4gICAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNoaWxkKSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9wbHVnaW5zL3ByaXZhdGUuaGlzdG9yeS9IaXN0b3J5LmpzJ1xuaW1wb3J0IHsgdm1IYXNSb3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLnZtL3ZtLmpzJ1xuXG5sZXQgY291bnRlciA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5Qcm9wcyA9IHtcbiAgZnVsbHNjcmVlbjogQm9vbGVhbixcbiAgbm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0OiBCb29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGdWxsc2NyZWVuRW1pdHMgPSBbICd1cGRhdGU6ZnVsbHNjcmVlbicsICdmdWxsc2NyZWVuJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cblxuICBsZXQgaGlzdG9yeUVudHJ5LCBmdWxsc2NyZWVuRmlsbGVyTm9kZSwgY29udGFpbmVyXG4gIGNvbnN0IGluRnVsbHNjcmVlbiA9IHJlZihmYWxzZSlcblxuICB2bUhhc1JvdXRlcih2bSkgPT09IHRydWUgJiYgd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCAoKSA9PiB7XG4gICAgcHJvcHMubm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0ICE9PSB0cnVlICYmIGV4aXRGdWxsc2NyZWVuKClcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5mdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB2KSB7XG4gICAgICB0b2dnbGVGdWxsc2NyZWVuKClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goaW5GdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBlbWl0KCd1cGRhdGU6ZnVsbHNjcmVlbicsIHYpXG4gICAgZW1pdCgnZnVsbHNjcmVlbicsIHYpXG4gIH0pXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUpIHJldHVyblxuXG4gICAgaW5GdWxsc2NyZWVuLnZhbHVlID0gdHJ1ZVxuICAgIGNvbnRhaW5lciA9IHByb3h5LiRlbC5wYXJlbnROb2RlXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChmdWxsc2NyZWVuRmlsbGVyTm9kZSwgcHJveHkuJGVsKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJveHkuJGVsKVxuXG4gICAgY291bnRlcisrXG4gICAgaWYgKGNvdW50ZXIgPT09IDEpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncS1ib2R5LS1mdWxsc2NyZWVuLW1peGluJylcbiAgICB9XG5cbiAgICBoaXN0b3J5RW50cnkgPSB7XG4gICAgICBoYW5kbGVyOiBleGl0RnVsbHNjcmVlblxuICAgIH1cbiAgICBIaXN0b3J5LmFkZChoaXN0b3J5RW50cnkpXG4gIH1cblxuICBmdW5jdGlvbiBleGl0RnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSAhPT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICBpZiAoaGlzdG9yeUVudHJ5ICE9PSB2b2lkIDApIHtcbiAgICAgIEhpc3RvcnkucmVtb3ZlKGhpc3RvcnlFbnRyeSlcbiAgICAgIGhpc3RvcnlFbnRyeSA9IHZvaWQgMFxuICAgIH1cblxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQocHJveHkuJGVsLCBmdWxsc2NyZWVuRmlsbGVyTm9kZSlcbiAgICBpbkZ1bGxzY3JlZW4udmFsdWUgPSBmYWxzZVxuXG4gICAgY291bnRlciA9IE1hdGgubWF4KDAsIGNvdW50ZXIgLSAxKVxuXG4gICAgaWYgKGNvdW50ZXIgPT09IDApIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncS1ib2R5LS1mdWxsc2NyZWVuLW1peGluJylcblxuICAgICAgaWYgKHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBwcm94eS4kZWwuc2Nyb2xsSW50b1ZpZXcoKSB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICAgIGZ1bGxzY3JlZW5GaWxsZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gIH0pXG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICBwcm9wcy5mdWxsc2NyZWVuID09PSB0cnVlICYmIHNldEZ1bGxzY3JlZW4oKVxuICB9KVxuXG4gIG9uQmVmb3JlVW5tb3VudChleGl0RnVsbHNjcmVlbilcblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgIHRvZ2dsZUZ1bGxzY3JlZW4sXG4gICAgc2V0RnVsbHNjcmVlbixcbiAgICBleGl0RnVsbHNjcmVlblxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgaW5GdWxsc2NyZWVuLFxuICAgIHRvZ2dsZUZ1bGxzY3JlZW5cbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNvcnREYXRlIChhLCBiKSB7XG4gIHJldHVybiAobmV3IERhdGUoYSkpIC0gKG5ldyBEYXRlKGIpKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydEJvb2xlYW4gKGEsIGIpIHtcbiAgcmV0dXJuIGEgJiYgIWJcbiAgICA/IC0xXG4gICAgOiAoIWEgJiYgYiA/IDEgOiAwKVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHNvcnREYXRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5zb3J0L3NvcnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNEYXRlLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVTb3J0UHJvcHMgPSB7XG4gIHNvcnRNZXRob2Q6IEZ1bmN0aW9uLFxuICBiaW5hcnlTdGF0ZVNvcnQ6IEJvb2xlYW4sXG4gIGNvbHVtblNvcnRPcmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA9PT0gJ2FkJyB8fCB2ID09PSAnZGEnLFxuICAgIGRlZmF1bHQ6ICdhZCdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVTb3J0IChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKSB7XG4gIGNvbnN0IGNvbHVtblRvU29ydCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHNvcnRCeSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gc29ydEJ5XG4gICAgICA/IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSkgfHwgbnVsbFxuICAgICAgOiBudWxsXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRTb3J0TWV0aG9kID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnNvcnRNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5zb3J0TWV0aG9kXG4gICAgICA6IChkYXRhLCBzb3J0QnksIGRlc2NlbmRpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2wgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBzb3J0QnkpXG4gICAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwIHx8IGNvbC5maWVsZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBkaXIgPSBkZXNjZW5kaW5nID09PSB0cnVlID8gLTEgOiAxLFxuICAgICAgICAgICAgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IHYgPT4gY29sLmZpZWxkKHYpXG4gICAgICAgICAgICAgIDogdiA9PiB2WyBjb2wuZmllbGQgXVxuXG4gICAgICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgIEEgPSB2YWwoYSksXG4gICAgICAgICAgICAgIEIgPSB2YWwoYilcblxuICAgICAgICAgICAgaWYgKGNvbC5yYXdTb3J0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbC5yYXdTb3J0KEEsIEIsIGEsIGIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQSA9PT0gbnVsbCB8fCBBID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQiA9PT0gbnVsbCB8fCBCID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDEgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2wuc29ydCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIC8vIGdldHMgY2FsbGVkIHdpdGhvdXQgcm93cyB0aGF0IGhhdmUgbnVsbC91bmRlZmluZWQgYXMgdmFsdWVcbiAgICAgICAgICAgICAgLy8gZHVlIHRvIHRoZSBhYm92ZSB0d28gc3RhdGVtZW50c1xuICAgICAgICAgICAgICByZXR1cm4gY29sLnNvcnQoQSwgQiwgYSwgYikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc051bWJlcihBKSA9PT0gdHJ1ZSAmJiBpc051bWJlcihCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKEEgLSBCKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGF0ZShBKSA9PT0gdHJ1ZSAmJiBpc0RhdGUoQikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNvcnREYXRlKEEsIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIEEgPT09ICdib29sZWFuJyAmJiB0eXBlb2YgQiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFsgQSwgQiBdID0gWyBBLCBCIF0ubWFwKHMgPT4gKHMgKyAnJykudG9Mb2NhbGVTdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICAgICAgICByZXR1cm4gQSA8IEJcbiAgICAgICAgICAgICAgPyAtMSAqIGRpclxuICAgICAgICAgICAgICA6IChBID09PSBCID8gMCA6IGRpcilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICkpXG5cbiAgZnVuY3Rpb24gc29ydCAoY29sIC8qIFN0cmluZyhjb2wgbmFtZSkgb3IgT2JqZWN0KGNvbCBkZWZpbml0aW9uKSAqLykge1xuICAgIGxldCBzb3J0T3JkZXIgPSBwcm9wcy5jb2x1bW5Tb3J0T3JkZXJcblxuICAgIGlmIChpc09iamVjdChjb2wpID09PSB0cnVlKSB7XG4gICAgICBpZiAoY29sLnNvcnRPcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBjb2wuc29ydE9yZGVyXG4gICAgICB9XG5cbiAgICAgIGNvbCA9IGNvbC5uYW1lXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZGVmID0gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gY29sKVxuICAgICAgaWYgKGRlZiAhPT0gdm9pZCAwICYmIGRlZi5zb3J0T3JkZXIpIHtcbiAgICAgICAgc29ydE9yZGVyID0gZGVmLnNvcnRPcmRlclxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICBpZiAoc29ydEJ5ICE9PSBjb2wpIHtcbiAgICAgIHNvcnRCeSA9IGNvbFxuICAgICAgZGVzY2VuZGluZyA9IHNvcnRPcmRlciA9PT0gJ2RhJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5iaW5hcnlTdGF0ZVNvcnQgPT09IHRydWUpIHtcbiAgICAgIGRlc2NlbmRpbmcgPSAhZGVzY2VuZGluZ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZXNjZW5kaW5nID09PSB0cnVlKSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXNjZW5kaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7IC8vIGFzY2VuZGluZ1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gJ2FkJykge1xuICAgICAgICBkZXNjZW5kaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWdpbmF0aW9uKHsgc29ydEJ5LCBkZXNjZW5kaW5nLCBwYWdlOiAxIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbHVtblRvU29ydCxcbiAgICBjb21wdXRlZFNvcnRNZXRob2QsXG4gICAgc29ydFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVGaWx0ZXJQcm9wcyA9IHtcbiAgZmlsdGVyOiBbIFN0cmluZywgT2JqZWN0IF0sXG4gIGZpbHRlck1ldGhvZDogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlRmlsdGVyIChwcm9wcywgc2V0UGFnaW5hdGlvbikge1xuICBjb25zdCBjb21wdXRlZEZpbHRlck1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5maWx0ZXJNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5maWx0ZXJNZXRob2RcbiAgICAgIDogKHJvd3MsIHRlcm1zLCBjb2xzLCBjZWxsVmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlclRlcm1zID0gdGVybXMgPyB0ZXJtcy50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIoXG4gICAgICAgICAgICByb3cgPT4gY29scy5zb21lKGNvbCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNlbGxWYWx1ZShjb2wsIHJvdykgKyAnJ1xuICAgICAgICAgICAgICBjb25zdCBoYXlzdGFjayA9ICh2YWwgPT09ICd1bmRlZmluZWQnIHx8IHZhbCA9PT0gJ251bGwnKSA/ICcnIDogdmFsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobG93ZXJUZXJtcykgIT09IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICApKVxuXG4gIHdhdGNoKFxuICAgICgpID0+IHByb3BzLmZpbHRlcixcbiAgICAoKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0sIHRydWUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgeyBkZWVwOiB0cnVlIH1cbiAgKVxuXG4gIHJldHVybiB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gc2FtZVBhZ2luYXRpb24gKG9sZFBhZywgbmV3UGFnKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBuZXdQYWcpIHtcbiAgICBpZiAobmV3UGFnWyBwcm9wIF0gIT09IG9sZFBhZ1sgcHJvcCBdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZml4UGFnaW5hdGlvbiAocCkge1xuICBpZiAocC5wYWdlIDwgMSkge1xuICAgIHAucGFnZSA9IDFcbiAgfVxuICBpZiAocC5yb3dzUGVyUGFnZSAhPT0gdm9pZCAwICYmIHAucm93c1BlclBhZ2UgPCAxKSB7XG4gICAgcC5yb3dzUGVyUGFnZSA9IDBcbiAgfVxuICByZXR1cm4gcFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgPSB7XG4gIHBhZ2luYXRpb246IE9iamVjdCxcbiAgcm93c1BlclBhZ2VPcHRpb25zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gWyA1LCA3LCAxMCwgMTUsIDIwLCAyNSwgNTAsIDAgXVxuICB9LFxuXG4gICdvblVwZGF0ZTpwYWdpbmF0aW9uJzogWyBGdW5jdGlvbiwgQXJyYXkgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUgKHZtLCBnZXRDZWxsVmFsdWUpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCB9ID0gdm1cblxuICBjb25zdCBpbm5lclBhZ2luYXRpb24gPSByZWYoXG4gICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICBkZXNjZW5kaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICByb3dzUGVyUGFnZTogcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCAhPT0gMFxuICAgICAgICA/IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9uc1sgMCBdXG4gICAgICAgIDogNVxuICAgIH0sIHByb3BzLnBhZ2luYXRpb24pXG4gIClcblxuICBjb25zdCBjb21wdXRlZFBhZ2luYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcGFnID0gcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICAgID8geyAuLi5pbm5lclBhZ2luYXRpb24udmFsdWUsIC4uLnByb3BzLnBhZ2luYXRpb24gfVxuICAgICAgOiBpbm5lclBhZ2luYXRpb24udmFsdWVcblxuICAgIHJldHVybiBmaXhQYWdpbmF0aW9uKHBhZylcbiAgfSlcblxuICBjb25zdCBpc1NlcnZlclNpZGUgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c051bWJlciAhPT0gdm9pZCAwKVxuXG4gIGZ1bmN0aW9uIHNlbmRTZXJ2ZXJSZXF1ZXN0IChwYWdpbmF0aW9uKSB7XG4gICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uKHtcbiAgICAgIHBhZ2luYXRpb24sXG4gICAgICBmaWx0ZXI6IHByb3BzLmZpbHRlclxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24gKHByb3AgPSB7fSkge1xuICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGVtaXQoJ3JlcXVlc3QnLCB7XG4gICAgICAgIHBhZ2luYXRpb246IHByb3AucGFnaW5hdGlvbiB8fCBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAgIGZpbHRlcjogcHJvcC5maWx0ZXIgfHwgcHJvcHMuZmlsdGVyLFxuICAgICAgICBnZXRDZWxsVmFsdWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBhZ2luYXRpb24gKHZhbCwgZm9yY2VTZXJ2ZXJSZXF1ZXN0KSB7XG4gICAgY29uc3QgbmV3UGFnaW5hdGlvbiA9IGZpeFBhZ2luYXRpb24oe1xuICAgICAgLi4uY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgLi4udmFsXG4gICAgfSlcblxuICAgIGlmIChzYW1lUGFnaW5hdGlvbihjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsIG5ld1BhZ2luYXRpb24pID09PSB0cnVlKSB7XG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlICYmIGZvcmNlU2VydmVyUmVxdWVzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBzZW5kU2VydmVyUmVxdWVzdChuZXdQYWdpbmF0aW9uKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgc2VuZFNlcnZlclJlcXVlc3QobmV3UGFnaW5hdGlvbilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByb3BzLnBhZ2luYXRpb24gIT09IHZvaWQgMFxuICAgICAgJiYgcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgbmV3UGFnaW5hdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lclBhZ2luYXRpb24udmFsdWUgPSBuZXdQYWdpbmF0aW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbm5lclBhZ2luYXRpb24sXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLFxuICAgIGlzU2VydmVyU2lkZSxcblxuICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICBzZXRQYWdpbmF0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUGFnaW5hdGlvbiAodm0sIGlubmVyUGFnaW5hdGlvbiwgY29tcHV0ZWRQYWdpbmF0aW9uLCBpc1NlcnZlclNpZGUsIHNldFBhZ2luYXRpb24sIGZpbHRlcmVkU29ydGVkUm93c051bWJlcikge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c051bWJlciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgID8gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NOdW1iZXIgfHwgMFxuICAgICAgOiBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIudmFsdWVcbiAgKSlcblxuICBjb25zdCBmaXJzdFJvd0luZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIHJldHVybiAocGFnZSAtIDEpICogcm93c1BlclBhZ2VcbiAgfSlcblxuICBjb25zdCBsYXN0Um93SW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlLCByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgcmV0dXJuIHBhZ2UgKiByb3dzUGVyUGFnZVxuICB9KVxuXG4gIGNvbnN0IGlzRmlyc3RQYWdlID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2UgPT09IDEpXG5cbiAgY29uc3QgcGFnZXNOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlID09PSAwXG4gICAgICA/IDFcbiAgICAgIDogTWF0aC5tYXgoXG4gICAgICAgIDEsXG4gICAgICAgIE1hdGguY2VpbChjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUgLyBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UpXG4gICAgICApXG4gICkpXG5cbiAgY29uc3QgaXNMYXN0UGFnZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBsYXN0Um93SW5kZXgudmFsdWUgPT09IDBcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZSA+PSBwYWdlc051bWJlci52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IG9wdHMgPSBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMuaW5jbHVkZXMoaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlKVxuICAgICAgPyBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnNcbiAgICAgIDogWyBpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgXS5jb25jYXQocHJvcHMucm93c1BlclBhZ2VPcHRpb25zKVxuXG4gICAgcmV0dXJuIG9wdHMubWFwKGNvdW50ID0+ICh7XG4gICAgICBsYWJlbDogY291bnQgPT09IDAgPyAkcS5sYW5nLnRhYmxlLmFsbFJvd3MgOiAnJyArIGNvdW50LFxuICAgICAgdmFsdWU6IGNvdW50XG4gICAgfSkpXG4gIH0pXG5cbiAgd2F0Y2gocGFnZXNOdW1iZXIsIChsYXN0UGFnZSwgb2xkTGFzdFBhZ2UpID0+IHtcbiAgICBpZiAobGFzdFBhZ2UgPT09IG9sZExhc3RQYWdlKSByZXR1cm5cblxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2VcbiAgICBpZiAobGFzdFBhZ2UgJiYgIWN1cnJlbnRQYWdlKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogMSB9KVxuICAgIH1cbiAgICBlbHNlIGlmIChsYXN0UGFnZSA8IGN1cnJlbnRQYWdlKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogbGFzdFBhZ2UgfSlcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gZmlyc3RQYWdlICgpIHtcbiAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogMSB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcHJldlBhZ2UgKCkge1xuICAgIGNvbnN0IHsgcGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgaWYgKHBhZ2UgPiAxKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZSAtIDEgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0UGFnZSAoKSB7XG4gICAgY29uc3QgeyBwYWdlLCByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgaWYgKGxhc3RSb3dJbmRleC52YWx1ZSA+IDAgJiYgcGFnZSAqIHJvd3NQZXJQYWdlIDwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZSArIDEgfSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsYXN0UGFnZSAoKSB7XG4gICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IHBhZ2VzTnVtYmVyLnZhbHVlIH0pXG4gIH1cblxuICBpZiAocHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDApIHtcbiAgICBlbWl0KCd1cGRhdGU6cGFnaW5hdGlvbicsIHsgLi4uY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpcnN0Um93SW5kZXgsXG4gICAgbGFzdFJvd0luZGV4LFxuICAgIGlzRmlyc3RQYWdlLFxuICAgIGlzTGFzdFBhZ2UsXG4gICAgcGFnZXNOdW1iZXIsXG4gICAgY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMsXG4gICAgY29tcHV0ZWRSb3dzTnVtYmVyLFxuXG4gICAgZmlyc3RQYWdlLFxuICAgIHByZXZQYWdlLFxuICAgIG5leHRQYWdlLFxuICAgIGxhc3RQYWdlXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dTZWxlY3Rpb25Qcm9wcyA9IHtcbiAgc2VsZWN0aW9uOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdub25lJyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gWyAnc2luZ2xlJywgJ211bHRpcGxlJywgJ25vbmUnIF0uaW5jbHVkZXModilcbiAgfSxcbiAgc2VsZWN0ZWQ6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd1NlbGVjdGlvbkVtaXRzID0gWyAndXBkYXRlOnNlbGVjdGVkJywgJ3NlbGVjdGlvbicgXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVSb3dTZWxlY3Rpb24gKHByb3BzLCBlbWl0LCBjb21wdXRlZFJvd3MsIGdldFJvd0tleSkge1xuICBjb25zdCBzZWxlY3RlZEtleXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IHt9XG4gICAgcHJvcHMuc2VsZWN0ZWQubWFwKGdldFJvd0tleS52YWx1ZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAga2V5c1sga2V5IF0gPSB0cnVlXG4gICAgfSlcbiAgICByZXR1cm4ga2V5c1xuICB9KVxuXG4gIGNvbnN0IGhhc1NlbGVjdGlvbk1vZGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiAhPT0gJ25vbmUnXG4gIH0pXG5cbiAgY29uc3Qgc2luZ2xlU2VsZWN0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5zZWxlY3Rpb24gPT09ICdzaW5nbGUnXG4gIH0pXG5cbiAgY29uc3QgbXVsdGlwbGVTZWxlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiA9PT0gJ211bHRpcGxlJ1xuICB9KVxuXG4gIGNvbnN0IGFsbFJvd3NTZWxlY3RlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgY29tcHV0ZWRSb3dzLnZhbHVlLmxlbmd0aCAhPT0gMCAmJiBjb21wdXRlZFJvd3MudmFsdWUuZXZlcnkoXG4gICAgICByb3cgPT4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBnZXRSb3dLZXkudmFsdWUocm93KSBdID09PSB0cnVlXG4gICAgKVxuICApXG5cbiAgY29uc3Qgc29tZVJvd3NTZWxlY3RlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgYWxsUm93c1NlbGVjdGVkLnZhbHVlICE9PSB0cnVlXG4gICAgJiYgY29tcHV0ZWRSb3dzLnZhbHVlLnNvbWUocm93ID0+IHNlbGVjdGVkS2V5cy52YWx1ZVsgZ2V0Um93S2V5LnZhbHVlKHJvdykgXSA9PT0gdHJ1ZSlcbiAgKVxuXG4gIGNvbnN0IHJvd3NTZWxlY3RlZE51bWJlciA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkLmxlbmd0aClcblxuICBmdW5jdGlvbiBpc1Jvd1NlbGVjdGVkIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBrZXkgXSA9PT0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24gKCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZCcsIFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9uIChrZXlzLCByb3dzLCBhZGRlZCwgZXZ0KSB7XG4gICAgZW1pdCgnc2VsZWN0aW9uJywgeyByb3dzLCBhZGRlZCwga2V5cywgZXZ0IH0pXG5cbiAgICBjb25zdCBwYXlsb2FkID0gc2luZ2xlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlXG4gICAgICA/IChhZGRlZCA9PT0gdHJ1ZSA/IHJvd3MgOiBbXSlcbiAgICAgIDogKFxuICAgICAgICAgIGFkZGVkID09PSB0cnVlXG4gICAgICAgICAgICA/IHByb3BzLnNlbGVjdGVkLmNvbmNhdChyb3dzKVxuICAgICAgICAgICAgOiBwcm9wcy5zZWxlY3RlZC5maWx0ZXIoXG4gICAgICAgICAgICAgIHJvdyA9PiBrZXlzLmluY2x1ZGVzKGdldFJvd0tleS52YWx1ZShyb3cpKSA9PT0gZmFsc2VcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgcGF5bG9hZClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFzU2VsZWN0aW9uTW9kZSxcbiAgICBzaW5nbGVTZWxlY3Rpb24sXG4gICAgbXVsdGlwbGVTZWxlY3Rpb24sXG4gICAgYWxsUm93c1NlbGVjdGVkLFxuICAgIHNvbWVSb3dzU2VsZWN0ZWQsXG4gICAgcm93c1NlbGVjdGVkTnVtYmVyLFxuXG4gICAgaXNSb3dTZWxlY3RlZCxcbiAgICBjbGVhclNlbGVjdGlvbixcbiAgICB1cGRhdGVTZWxlY3Rpb25cbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gZ2V0VmFsICh2YWwpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKVxuICAgID8gdmFsLnNsaWNlKClcbiAgICA6IFtdXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd0V4cGFuZFByb3BzID0ge1xuICBleHBhbmRlZDogQXJyYXkgLy8gdi1tb2RlbDpleHBhbmRlZFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyA9IFsgJ3VwZGF0ZTpleHBhbmRlZCcgXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVSb3dFeHBhbmQgKHByb3BzLCBlbWl0KSB7XG4gIGNvbnN0IGlubmVyRXhwYW5kZWQgPSByZWYoZ2V0VmFsKHByb3BzLmV4cGFuZGVkKSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5leHBhbmRlZCwgdmFsID0+IHtcbiAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gZ2V0VmFsKHZhbClcbiAgfSlcblxuICBmdW5jdGlvbiBpc1Jvd0V4cGFuZGVkIChrZXkpIHtcbiAgICByZXR1cm4gaW5uZXJFeHBhbmRlZC52YWx1ZS5pbmNsdWRlcyhrZXkpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRFeHBhbmRlZCAodmFsKSB7XG4gICAgaWYgKHByb3BzLmV4cGFuZGVkICE9PSB2b2lkIDApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpleHBhbmRlZCcsIHZhbClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gdmFsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRXhwYW5kZWQgKGtleSwgYWRkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaW5uZXJFeHBhbmRlZC52YWx1ZS5zbGljZSgpXG4gICAgY29uc3QgaW5kZXggPSB0YXJnZXQuaW5kZXhPZihrZXkpXG5cbiAgICBpZiAoYWRkID09PSB0cnVlKSB7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRhcmdldC5wdXNoKGtleSlcbiAgICAgICAgc2V0RXhwYW5kZWQodGFyZ2V0KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRhcmdldC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzZXRFeHBhbmRlZCh0YXJnZXQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1Jvd0V4cGFuZGVkLFxuICAgIHNldEV4cGFuZGVkLFxuICAgIHVwZGF0ZUV4cGFuZGVkXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2lzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb25Qcm9wcyA9IHtcbiAgdmlzaWJsZUNvbHVtbnM6IEFycmF5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbiAocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgaGFzU2VsZWN0aW9uTW9kZSkge1xuICBjb25zdCBjb2xMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5jb2x1bW5zICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2x1bW5zXG4gICAgfVxuXG4gICAgLy8gd2UgaW5mZXIgY29sdW1ucyBmcm9tIGZpcnN0IHJvd1xuICAgIGNvbnN0IHJvdyA9IHByb3BzLnJvd3NbIDAgXVxuXG4gICAgcmV0dXJuIHJvdyAhPT0gdm9pZCAwXG4gICAgICA/IE9iamVjdC5rZXlzKHJvdykubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGFiZWw6IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgZmllbGQ6IG5hbWUsXG4gICAgICAgIGFsaWduOiBpc051bWJlcihyb3dbIG5hbWUgXSkgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSkpXG4gICAgICA6IFtdXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIGNvbnN0IGNvbHMgPSBwcm9wcy52aXNpYmxlQ29sdW1ucyAhPT0gdm9pZCAwXG4gICAgICA/IGNvbExpc3QudmFsdWUuZmlsdGVyKGNvbCA9PiBjb2wucmVxdWlyZWQgPT09IHRydWUgfHwgcHJvcHMudmlzaWJsZUNvbHVtbnMuaW5jbHVkZXMoY29sLm5hbWUpID09PSB0cnVlKVxuICAgICAgOiBjb2xMaXN0LnZhbHVlXG5cbiAgICByZXR1cm4gY29scy5tYXAoY29sID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gY29sLmFsaWduIHx8ICdyaWdodCdcbiAgICAgIGNvbnN0IGFsaWduQ2xhc3MgPSBgdGV4dC0keyBhbGlnbiB9YFxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb2wsXG4gICAgICAgIGFsaWduLFxuICAgICAgICBfX2ljb25DbGFzczogYHEtdGFibGVfX3NvcnQtaWNvbiBxLXRhYmxlX19zb3J0LWljb24tLSR7IGFsaWduIH1gLFxuICAgICAgICBfX3RoQ2xhc3M6IGFsaWduQ2xhc3NcbiAgICAgICAgICArIChjb2wuaGVhZGVyQ2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgY29sLmhlYWRlckNsYXNzZXMgOiAnJylcbiAgICAgICAgICArIChjb2wuc29ydGFibGUgPT09IHRydWUgPyAnIHNvcnRhYmxlJyA6ICcnKVxuICAgICAgICAgICsgKGNvbC5uYW1lID09PSBzb3J0QnkgPyBgIHNvcnRlZCAkeyBkZXNjZW5kaW5nID09PSB0cnVlID8gJ3NvcnQtZGVzYycgOiAnJyB9YCA6ICcnKSxcblxuICAgICAgICBfX3RkU3R5bGU6IGNvbC5zdHlsZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb2wuc3R5bGUgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGNvbC5zdHlsZVxuICAgICAgICAgICAgICAgIDogY29sLnN0eWxlXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBudWxsLFxuXG4gICAgICAgIF9fdGRDbGFzczogY29sLmNsYXNzZXMgIT09IHZvaWQgMFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgICB0eXBlb2YgY29sLmNsYXNzZXMgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlc1xuICAgICAgICAgICAgICAgIDogcm93ID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlcyhyb3cpXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBhbGlnbkNsYXNzXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSB7fVxuICAgIGNvbXB1dGVkQ29scy52YWx1ZS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICBuYW1lc1sgY29sLm5hbWUgXSA9IGNvbFxuICAgIH0pXG4gICAgcmV0dXJuIG5hbWVzXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzcGFuID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy50YWJsZUNvbHNwYW4gIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy50YWJsZUNvbHNwYW5cbiAgICAgIDogY29tcHV0ZWRDb2xzLnZhbHVlLmxlbmd0aCArIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlID8gMSA6IDApXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBjb2xMaXN0LFxuICAgIGNvbXB1dGVkQ29scyxcbiAgICBjb21wdXRlZENvbHNNYXAsXG4gICAgY29tcHV0ZWRDb2xzcGFuXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRVGggZnJvbSAnLi9RVGguanMnXG5cbmltcG9ydCBRU2VwYXJhdG9yIGZyb20gJy4uL3NlcGFyYXRvci9RU2VwYXJhdG9yLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVZpcnR1YWxTY3JvbGwgZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvUVZpcnR1YWxTY3JvbGwuanMnXG5pbXBvcnQgUVNlbGVjdCBmcm9tICcuLi9zZWxlY3QvUVNlbGVjdC5qcydcbmltcG9ydCBRTGluZWFyUHJvZ3Jlc3MgZnJvbSAnLi4vbGluZWFyLXByb2dyZXNzL1FMaW5lYXJQcm9ncmVzcy5qcydcbmltcG9ydCBRQ2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3gvUUNoZWNrYm94LmpzJ1xuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5cbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuL2dldC10YWJsZS1taWRkbGUuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUudXNlLWRhcmsvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyBjb21tb25WaXJ0U2Nyb2xsUHJvcHNMaXN0IH0gZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvdXNlLXZpcnR1YWwtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZUZ1bGxzY3JlZW4sIHsgdXNlRnVsbHNjcmVlblByb3BzLCB1c2VGdWxsc2NyZWVuRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlLnVzZS1mdWxsc2NyZWVuL3VzZS1mdWxsc2NyZWVuLmpzJ1xuXG5pbXBvcnQgeyB1c2VUYWJsZVNvcnQsIHVzZVRhYmxlU29ydFByb3BzIH0gZnJvbSAnLi90YWJsZS1zb3J0LmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVGaWx0ZXIsIHVzZVRhYmxlRmlsdGVyUHJvcHMgfSBmcm9tICcuL3RhYmxlLWZpbHRlci5qcydcbmltcG9ydCB7IHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlLCB1c2VUYWJsZVBhZ2luYXRpb24sIHVzZVRhYmxlUGFnaW5hdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1wYWdpbmF0aW9uLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVSb3dTZWxlY3Rpb24sIHVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMsIHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgfSBmcm9tICcuL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMnXG5pbXBvcnQgeyB1c2VUYWJsZVJvd0V4cGFuZCwgdXNlVGFibGVSb3dFeHBhbmRQcm9wcywgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyB9IGZyb20gJy4vdGFibGUtcm93LWV4cGFuZC5qcydcbmltcG9ydCB7IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uLCB1c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzJ1xuXG5pbXBvcnQgeyBpbmplY3RQcm9wLCBpbmplY3RNdWx0aXBsZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5pbmplY3Qtb2JqLXByb3AvaW5qZWN0LW9iai1wcm9wLmpzJ1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS5jcmVhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBib3R0b21DbGFzcyA9ICdxLXRhYmxlX19ib3R0b20gcm93IGl0ZW1zLWNlbnRlcidcblxuY29uc3QgdmlydFNjcm9sbFBhc3N0aHJvdWdoUHJvcHMgPSB7fVxuY29tbW9uVmlydFNjcm9sbFByb3BzTGlzdC5mb3JFYWNoKHAgPT4geyB2aXJ0U2Nyb2xsUGFzc3Rocm91Z2hQcm9wc1sgcCBdID0ge30gfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICByb3dLZXk6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBGdW5jdGlvbiBdLFxuICAgICAgZGVmYXVsdDogJ2lkJ1xuICAgIH0sXG5cbiAgICBjb2x1bW5zOiBBcnJheSxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuXG4gICAgaWNvbkZpcnN0UGFnZTogU3RyaW5nLFxuICAgIGljb25QcmV2UGFnZTogU3RyaW5nLFxuICAgIGljb25OZXh0UGFnZTogU3RyaW5nLFxuICAgIGljb25MYXN0UGFnZTogU3RyaW5nLFxuXG4gICAgdGl0bGU6IFN0cmluZyxcblxuICAgIGhpZGVIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBncmlkOiBCb29sZWFuLFxuICAgIGdyaWRIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBzZXBhcmF0b3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdob3Jpem9udGFsJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2NlbGwnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgdmlydHVhbFNjcm9sbDogQm9vbGVhbixcbiAgICB2aXJ0dWFsU2Nyb2xsVGFyZ2V0OiB7fSxcbiAgICAuLi52aXJ0U2Nyb2xsUGFzc3Rocm91Z2hQcm9wcyxcblxuICAgIG5vRGF0YUxhYmVsOiBTdHJpbmcsXG4gICAgbm9SZXN1bHRzTGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nTGFiZWw6IFN0cmluZyxcbiAgICBzZWxlY3RlZFJvd3NMYWJlbDogRnVuY3Rpb24sXG4gICAgcm93c1BlclBhZ2VMYWJlbDogU3RyaW5nLFxuICAgIHBhZ2luYXRpb25MYWJlbDogRnVuY3Rpb24sXG5cbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2dyZXktOCdcbiAgICB9LFxuXG4gICAgdGl0bGVDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZVN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVIZWFkZXJTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUhlYWRlckNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDb250YWluZXJDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkQ29udGFpbmVyU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZFN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcblxuICAgIGhpZGVCb3R0b206IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkQmFubmVyOiBCb29sZWFuLFxuICAgIGhpZGVOb0RhdGE6IEJvb2xlYW4sXG4gICAgaGlkZVBhZ2luYXRpb246IEJvb2xlYW4sXG5cbiAgICBvblJvd0NsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0RibGNsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0NvbnRleHRtZW51OiBGdW5jdGlvbixcblxuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VGdWxsc2NyZWVuUHJvcHMsXG5cbiAgICAuLi51c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlRmlsdGVyUHJvcHMsXG4gICAgLi4udXNlVGFibGVQYWdpbmF0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVSb3dFeHBhbmRQcm9wcyxcbiAgICAuLi51c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlU29ydFByb3BzXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAncmVxdWVzdCcsICd2aXJ0dWFsU2Nyb2xsJyxcbiAgICAuLi51c2VGdWxsc2NyZWVuRW1pdHMsXG4gICAgLi4udXNlVGFibGVSb3dFeHBhbmRFbWl0cyxcbiAgICAuLi51c2VUYWJsZVJvd1NlbGVjdGlvbkVtaXRzXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBpbkZ1bGxzY3JlZW4sIHRvZ2dsZUZ1bGxzY3JlZW4gfSA9IHVzZUZ1bGxzY3JlZW4oKVxuXG4gICAgY29uc3QgZ2V0Um93S2V5ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZW9mIHByb3BzLnJvd0tleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BzLnJvd0tleVxuICAgICAgICA6IHJvdyA9PiByb3dbIHByb3BzLnJvd0tleSBdXG4gICAgKSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCB2aXJ0U2Nyb2xsUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgaGFzVmlydFNjcm9sbCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmdyaWQgIT09IHRydWUgJiYgcHJvcHMudmlydHVhbFNjcm9sbCA9PT0gdHJ1ZSlcblxuICAgIGNvbnN0IGNhcmREZWZhdWx0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJyBxLXRhYmxlX19jYXJkJ1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlX19jYXJkLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBfX2NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXRhYmxlX19jb250YWluZXIgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yIGNvbHVtbiBuby13cmFwYFxuICAgICAgKyAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZ3JpZCcgOiBjYXJkRGVmYXVsdENsYXNzLnZhbHVlKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICAgICsgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgZnVsbHNjcmVlbiBzY3JvbGwnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgX19jb250YWluZXJDbGFzcy52YWx1ZSArIChwcm9wcy5sb2FkaW5nID09PSB0cnVlID8gJyBxLXRhYmxlLS1sb2FkaW5nJyA6ICcnKVxuICAgIClcblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gcHJvcHMudGFibGVTdHlsZSArIHByb3BzLnRhYmxlQ2xhc3MgKyBwcm9wcy50YWJsZUhlYWRlclN0eWxlICsgcHJvcHMudGFibGVIZWFkZXJDbGFzcyArIF9fY29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAoKSA9PiB7IGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUgJiYgdmlydFNjcm9sbFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnJlc2V0KCkgfVxuICAgIClcblxuICAgIGNvbnN0IHtcbiAgICAgIGlubmVyUGFnaW5hdGlvbixcbiAgICAgIGNvbXB1dGVkUGFnaW5hdGlvbixcbiAgICAgIGlzU2VydmVyU2lkZSxcblxuICAgICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uLFxuICAgICAgc2V0UGFnaW5hdGlvblxuICAgIH0gPSB1c2VUYWJsZVBhZ2luYXRpb25TdGF0ZSh2bSwgZ2V0Q2VsbFZhbHVlKVxuXG4gICAgY29uc3QgeyBjb21wdXRlZEZpbHRlck1ldGhvZCB9ID0gdXNlVGFibGVGaWx0ZXIocHJvcHMsIHNldFBhZ2luYXRpb24pXG4gICAgY29uc3QgeyBpc1Jvd0V4cGFuZGVkLCBzZXRFeHBhbmRlZCwgdXBkYXRlRXhwYW5kZWQgfSA9IHVzZVRhYmxlUm93RXhwYW5kKHByb3BzLCBlbWl0KVxuXG4gICAgY29uc3QgZmlsdGVyZWRTb3J0ZWRSb3dzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBwcm9wcy5yb3dzXG5cbiAgICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUgfHwgcm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBzb3J0QnksIGRlc2NlbmRpbmcgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgICBpZiAocHJvcHMuZmlsdGVyKSB7XG4gICAgICAgIHJvd3MgPSBjb21wdXRlZEZpbHRlck1ldGhvZC52YWx1ZShyb3dzLCBwcm9wcy5maWx0ZXIsIGNvbXB1dGVkQ29scy52YWx1ZSwgZ2V0Q2VsbFZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sdW1uVG9Tb3J0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJvd3MgPSBjb21wdXRlZFNvcnRNZXRob2QudmFsdWUoXG4gICAgICAgICAgcHJvcHMucm93cyA9PT0gcm93cyA/IHJvd3Muc2xpY2UoKSA6IHJvd3MsXG4gICAgICAgICAgc29ydEJ5LFxuICAgICAgICAgIGRlc2NlbmRpbmdcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93c1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWUubGVuZ3RoKVxuXG4gICAgY29uc3QgY29tcHV0ZWRSb3dzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWVcblxuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcm93c1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgICAgaWYgKHJvd3NQZXJQYWdlICE9PSAwKSB7XG4gICAgICAgIGlmIChmaXJzdFJvd0luZGV4LnZhbHVlID09PSAwICYmIHByb3BzLnJvd3MgIT09IHJvd3MpIHtcbiAgICAgICAgICBpZiAocm93cy5sZW5ndGggPiBsYXN0Um93SW5kZXgudmFsdWUpIHtcbiAgICAgICAgICAgIHJvd3MgPSByb3dzLnNsaWNlKDAsIGxhc3RSb3dJbmRleC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcm93cyA9IHJvd3Muc2xpY2UoZmlyc3RSb3dJbmRleC52YWx1ZSwgbGFzdFJvd0luZGV4LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzXG4gICAgfSlcblxuICAgIGNvbnN0IHtcbiAgICAgIGhhc1NlbGVjdGlvbk1vZGUsXG4gICAgICBzaW5nbGVTZWxlY3Rpb24sXG4gICAgICBtdWx0aXBsZVNlbGVjdGlvbixcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIHNvbWVSb3dzU2VsZWN0ZWQsXG4gICAgICByb3dzU2VsZWN0ZWROdW1iZXIsXG5cbiAgICAgIGlzUm93U2VsZWN0ZWQsXG4gICAgICBjbGVhclNlbGVjdGlvbixcbiAgICAgIHVwZGF0ZVNlbGVjdGlvblxuICAgIH0gPSB1c2VUYWJsZVJvd1NlbGVjdGlvbihwcm9wcywgZW1pdCwgY29tcHV0ZWRSb3dzLCBnZXRSb3dLZXkpXG5cbiAgICBjb25zdCB7IGNvbExpc3QsIGNvbXB1dGVkQ29scywgY29tcHV0ZWRDb2xzTWFwLCBjb21wdXRlZENvbHNwYW4gfSA9IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGhhc1NlbGVjdGlvbk1vZGUpXG5cbiAgICBjb25zdCB7IGNvbHVtblRvU29ydCwgY29tcHV0ZWRTb3J0TWV0aG9kLCBzb3J0IH0gPSB1c2VUYWJsZVNvcnQocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgY29sTGlzdCwgc2V0UGFnaW5hdGlvbilcblxuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0Um93SW5kZXgsXG4gICAgICBsYXN0Um93SW5kZXgsXG4gICAgICBpc0ZpcnN0UGFnZSxcbiAgICAgIGlzTGFzdFBhZ2UsXG4gICAgICBwYWdlc051bWJlcixcbiAgICAgIGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLFxuICAgICAgY29tcHV0ZWRSb3dzTnVtYmVyLFxuXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2VcbiAgICB9ID0gdXNlVGFibGVQYWdpbmF0aW9uKHZtLCBpbm5lclBhZ2luYXRpb24sIGNvbXB1dGVkUGFnaW5hdGlvbiwgaXNTZXJ2ZXJTaWRlLCBzZXRQYWdpbmF0aW9uLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIpXG5cbiAgICBjb25zdCBub3RoaW5nVG9EaXNwbGF5ID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRSb3dzLnZhbHVlLmxlbmd0aCA9PT0gMClcblxuICAgIGNvbnN0IHZpcnRQcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHt9XG5cbiAgICAgIGNvbW1vblZpcnRTY3JvbGxQcm9wc0xpc3RcbiAgICAgICAgLmZvckVhY2gocCA9PiB7IGFjY1sgcCBdID0gcHJvcHNbIHAgXSB9KVxuXG4gICAgICBpZiAoYWNjLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFjYy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgPSBwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/IDI4IDogNDhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiByZXNldFZpcnR1YWxTY3JvbGwgKCkge1xuICAgICAgaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnJlc2V0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5ICgpIHtcbiAgICAgIGlmIChwcm9wcy5ncmlkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBnZXRHcmlkQm9keSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IHByb3BzLmhpZGVIZWFkZXIgIT09IHRydWUgPyBnZXRUSGVhZCA6IG51bGxcblxuICAgICAgaWYgKGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9wUm93ID0gc2xvdHNbICd0b3Atcm93JyBdXG4gICAgICAgIGNvbnN0IGJvdHRvbVJvdyA9IHNsb3RzWyAnYm90dG9tLXJvdycgXVxuXG4gICAgICAgIGNvbnN0IHZpcnRTbG90cyA9IHtcbiAgICAgICAgICBkZWZhdWx0OiBwcm9wcyA9PiBnZXRUQm9keVRSKHByb3BzLml0ZW0sIHNsb3RzLmJvZHksIHByb3BzLmluZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcFJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29uc3QgdG9wQ29udGVudCA9IGgoJ3Rib2R5JywgdG9wUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuXG4gICAgICAgICAgdmlydFNsb3RzLmJlZm9yZSA9IGhlYWRlciA9PT0gbnVsbFxuICAgICAgICAgICAgPyAoKSA9PiB0b3BDb250ZW50XG4gICAgICAgICAgICA6ICgpID0+IFsgaGVhZGVyKCkgXS5jb25jYXQodG9wQ29udGVudClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgICB2aXJ0U2xvdHMuYmVmb3JlID0gaGVhZGVyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm90dG9tUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICB2aXJ0U2xvdHMuYWZ0ZXIgPSAoKSA9PiBoKCd0Ym9keScsIGJvdHRvbVJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoKFFWaXJ0dWFsU2Nyb2xsLCB7XG4gICAgICAgICAgcmVmOiB2aXJ0U2Nyb2xsUmVmLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy50YWJsZUNsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZVN0eWxlLFxuICAgICAgICAgIC4uLnZpcnRQcm9wcy52YWx1ZSxcbiAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHByb3BzLnZpcnR1YWxTY3JvbGxUYXJnZXQsXG4gICAgICAgICAgaXRlbXM6IGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgICAgICB0eXBlOiAnX19xdGFibGUnLFxuICAgICAgICAgIHRhYmxlQ29sc3BhbjogY29tcHV0ZWRDb2xzcGFuLnZhbHVlLFxuICAgICAgICAgIG9uVmlydHVhbFNjcm9sbDogb25WU2Nyb2xsXG4gICAgICAgIH0sIHZpcnRTbG90cylcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGdldFRCb2R5KClcbiAgICAgIF1cblxuICAgICAgaWYgKGhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgICBjaGlsZC51bnNoaWZ0KGhlYWRlcigpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0VGFibGVNaWRkbGUoe1xuICAgICAgICBjbGFzczogWyAncS10YWJsZV9fbWlkZGxlIHNjcm9sbCcsIHByb3BzLnRhYmxlQ2xhc3MgXSxcbiAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlU3R5bGVcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvICh0b0luZGV4LCBlZGdlKSB7XG4gICAgICBpZiAodmlydFNjcm9sbFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnNjcm9sbFRvKHRvSW5kZXgsIGVkZ2UpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0b0luZGV4ID0gcGFyc2VJbnQodG9JbmRleCwgMTApXG4gICAgICBjb25zdCByb3dFbCA9IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcihgdGJvZHkgdHI6bnRoLW9mLXR5cGUoJHsgdG9JbmRleCArIDEgfSlgKVxuXG4gICAgICBpZiAocm93RWwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCcucS10YWJsZV9fbWlkZGxlLnNjcm9sbCcpXG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHJvd0VsLm9mZnNldFRvcCAtIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnRcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gb2Zmc2V0VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA/ICdkZWNyZWFzZScgOiAnaW5jcmVhc2UnXG5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IG9mZnNldFRvcFxuXG4gICAgICAgIGVtaXQoJ3ZpcnR1YWxTY3JvbGwnLCB7XG4gICAgICAgICAgaW5kZXg6IHRvSW5kZXgsXG4gICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICB0bzogaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlIC0gMSxcbiAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblZTY3JvbGwgKGluZm8pIHtcbiAgICAgIGVtaXQoJ3ZpcnR1YWxTY3JvbGwnLCBpbmZvKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2dyZXNzICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoUUxpbmVhclByb2dyZXNzLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19saW5lYXItcHJvZ3Jlc3MnLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFja0NvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEJvZHlUUiAocm93LCBib2R5U2xvdCwgcGFnZUluZGV4KSB7XG4gICAgICBjb25zdFxuICAgICAgICBrZXkgPSBnZXRSb3dLZXkudmFsdWUocm93KSxcbiAgICAgICAgc2VsZWN0ZWQgPSBpc1Jvd1NlbGVjdGVkKGtleSlcblxuICAgICAgaWYgKGJvZHlTbG90ICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGJvZHlTbG90KFxuICAgICAgICAgIGdldEJvZHlTY29wZSh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBwYWdlSW5kZXgsXG4gICAgICAgICAgICBfX3RyQ2xhc3M6IHNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICBib2R5Q2VsbCA9IHNsb3RzWyAnYm9keS1jZWxsJyBdLFxuICAgICAgICBjaGlsZCA9IGNvbXB1dGVkQ29scy52YWx1ZS5tYXAoY29sID0+IHtcbiAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgYm9keUNlbGxDb2wgPSBzbG90c1sgYGJvZHktY2VsbC0keyBjb2wubmFtZSB9YCBdLFxuICAgICAgICAgICAgc2xvdCA9IGJvZHlDZWxsQ29sICE9PSB2b2lkIDAgPyBib2R5Q2VsbENvbCA6IGJvZHlDZWxsXG5cbiAgICAgICAgICByZXR1cm4gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgICA/IHNsb3QoZ2V0Qm9keUNlbGxTY29wZSh7IGtleSwgcm93LCBwYWdlSW5kZXgsIGNvbCB9KSlcbiAgICAgICAgICAgIDogaCgndGQnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBjb2wuX190ZENsYXNzKHJvdyksXG4gICAgICAgICAgICAgIHN0eWxlOiBjb2wuX190ZFN0eWxlKHJvdylcbiAgICAgICAgICAgIH0sIGdldENlbGxWYWx1ZShjb2wsIHJvdykpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2JvZHktc2VsZWN0aW9uJyBdXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QoZ2V0Qm9keVNlbGVjdGlvblNjb3BlKHsga2V5LCByb3csIHBhZ2VJbmRleCB9KSlcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKFsga2V5IF0sIFsgcm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RkJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCBjb250ZW50KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7IGtleSwgY2xhc3M6IHsgc2VsZWN0ZWQgfSB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ3Jvd0NsaWNrJywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkRibGNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdyb3dEYmxjbGljaycsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93Q29udGV4dG1lbnUgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25Db250ZXh0bWVudSA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgncm93Q29udGV4dG1lbnUnLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0cicsIGRhdGEsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRCb2R5ICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGJvZHkgPSBzbG90cy5ib2R5LFxuICAgICAgICB0b3BSb3cgPSBzbG90c1sgJ3RvcC1yb3cnIF0sXG4gICAgICAgIGJvdHRvbVJvdyA9IHNsb3RzWyAnYm90dG9tLXJvdycgXVxuXG4gICAgICBsZXQgY2hpbGQgPSBjb21wdXRlZFJvd3MudmFsdWUubWFwKFxuICAgICAgICAocm93LCBwYWdlSW5kZXgpID0+IGdldFRCb2R5VFIocm93LCBib2R5LCBwYWdlSW5kZXgpXG4gICAgICApXG5cbiAgICAgIGlmICh0b3BSb3cgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IHRvcFJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KS5jb25jYXQoY2hpbGQpXG4gICAgICB9XG4gICAgICBpZiAoYm90dG9tUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5jb25jYXQoYm90dG9tUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGJvZHknLCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5U2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuXG4gICAgICBkYXRhLmNvbHMgPSBkYXRhLmNvbHMubWFwKFxuICAgICAgICBjb2wgPT4gaW5qZWN0UHJvcCh7IC4uLmNvbCB9LCAndmFsdWUnLCAoKSA9PiBnZXRDZWxsVmFsdWUoY29sLCBkYXRhLnJvdykpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keUNlbGxTY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG4gICAgICBpbmplY3RQcm9wKGRhdGEsICd2YWx1ZScsICgpID0+IGdldENlbGxWYWx1ZShkYXRhLmNvbCwgZGF0YS5yb3cpKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5U2VsZWN0aW9uU2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmplY3RCb2R5Q29tbW9uU2NvcGUgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUsXG4gICAgICAgIGNvbHNNYXA6IGNvbXB1dGVkQ29sc01hcC52YWx1ZSxcbiAgICAgICAgc29ydCxcbiAgICAgICAgcm93SW5kZXg6IGZpcnN0Um93SW5kZXgudmFsdWUgKyBkYXRhLnBhZ2VJbmRleCxcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZVxuICAgICAgfSlcblxuICAgICAgaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSAmJiBpbmplY3RQcm9wKFxuICAgICAgICBkYXRhLFxuICAgICAgICAnc2VsZWN0ZWQnLFxuICAgICAgICAoKSA9PiBpc1Jvd1NlbGVjdGVkKGRhdGEua2V5KSxcbiAgICAgICAgKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKFsgZGF0YS5rZXkgXSwgWyBkYXRhLnJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpbmplY3RQcm9wKFxuICAgICAgICBkYXRhLFxuICAgICAgICAnZXhwYW5kJyxcbiAgICAgICAgKCkgPT4gaXNSb3dFeHBhbmRlZChkYXRhLmtleSksXG4gICAgICAgIGFkZGluZyA9PiB7IHVwZGF0ZUV4cGFuZGVkKGRhdGEua2V5LCBhZGRpbmcpIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDZWxsVmFsdWUgKGNvbCwgcm93KSB7XG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2YgY29sLmZpZWxkID09PSAnZnVuY3Rpb24nID8gY29sLmZpZWxkKHJvdykgOiByb3dbIGNvbC5maWVsZCBdXG4gICAgICByZXR1cm4gY29sLmZvcm1hdCAhPT0gdm9pZCAwID8gY29sLmZvcm1hdCh2YWwsIHJvdykgOiB2YWxcbiAgICB9XG5cbiAgICBjb25zdCBtYXJnaW5hbHNTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBwYWdpbmF0aW9uOiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICBwYWdlc051bWJlcjogcGFnZXNOdW1iZXIudmFsdWUsXG4gICAgICBpc0ZpcnN0UGFnZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICBpc0xhc3RQYWdlOiBpc0xhc3RQYWdlLnZhbHVlLFxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlLFxuXG4gICAgICBpbkZ1bGxzY3JlZW46IGluRnVsbHNjcmVlbi52YWx1ZSxcbiAgICAgIHRvZ2dsZUZ1bGxzY3JlZW5cbiAgICB9KSlcblxuICAgIGZ1bmN0aW9uIGdldFRvcERpdiAoKSB7XG4gICAgICBjb25zdFxuICAgICAgICB0b3AgPSBzbG90cy50b3AsXG4gICAgICAgIHRvcExlZnQgPSBzbG90c1sgJ3RvcC1sZWZ0JyBdLFxuICAgICAgICB0b3BSaWdodCA9IHNsb3RzWyAndG9wLXJpZ2h0JyBdLFxuICAgICAgICB0b3BTZWxlY3Rpb24gPSBzbG90c1sgJ3RvcC1zZWxlY3Rpb24nIF0sXG4gICAgICAgIGhhc1NlbGVjdGlvbiA9IGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiB0b3BTZWxlY3Rpb24gIT09IHZvaWQgMFxuICAgICAgICAgICYmIHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSA+IDAsXG4gICAgICAgIHRvcENsYXNzID0gJ3EtdGFibGVfX3RvcCByZWxhdGl2ZS1wb3NpdGlvbiByb3cgaXRlbXMtY2VudGVyJ1xuXG4gICAgICBpZiAodG9wICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IHRvcENsYXNzIH0sIFsgdG9wKG1hcmdpbmFsc1Njb3BlLnZhbHVlKSBdKVxuICAgICAgfVxuXG4gICAgICBsZXQgY2hpbGRcblxuICAgICAgaWYgKGhhc1NlbGVjdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZCA9IHRvcFNlbGVjdGlvbihtYXJnaW5hbHNTY29wZS52YWx1ZSkuc2xpY2UoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gW11cblxuICAgICAgICBpZiAodG9wTGVmdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIHRvcExlZnQobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wcy50aXRsZSkge1xuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFsgJ3EtdGFibGVfX3RpdGxlJywgcHJvcHMudGl0bGVDbGFzcyBdXG4gICAgICAgICAgICAgIH0sIHByb3BzLnRpdGxlKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRvcFJpZ2h0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fc2VwYXJhdG9yIGNvbCcgfSlcbiAgICAgICAgKVxuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICB0b3BSaWdodChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5sZW5ndGggPT09IDApIHJldHVyblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IHRvcENsYXNzIH0sIGNoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlclNlbGVjdGVkVmFsdWUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzb21lUm93c1NlbGVjdGVkLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IGFsbFJvd3NTZWxlY3RlZC52YWx1ZVxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBnZXRUSGVhZCAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGdldFRIZWFkVFIoKVxuXG4gICAgICBpZiAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSAmJiBzbG90cy5sb2FkaW5nID09PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCd0cicsIHsgY2xhc3M6ICdxLXRhYmxlX19wcm9ncmVzcycgfSwgW1xuICAgICAgICAgICAgaCgndGgnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncmVsYXRpdmUtcG9zaXRpb24nLFxuICAgICAgICAgICAgICBjb2xzcGFuOiBjb21wdXRlZENvbHNwYW4udmFsdWVcbiAgICAgICAgICAgIH0sIGdldFByb2dyZXNzKCkpXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGhlYWQnLCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUSGVhZFRSICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGhlYWRlciA9IHNsb3RzLmhlYWRlcixcbiAgICAgICAgaGVhZGVyQ2VsbCA9IHNsb3RzWyAnaGVhZGVyLWNlbGwnIF1cblxuICAgICAgaWYgKGhlYWRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoZWFkZXIoXG4gICAgICAgICAgZ2V0SGVhZGVyU2NvcGUoeyBoZWFkZXI6IHRydWUgfSlcbiAgICAgICAgKS5zbGljZSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gY29tcHV0ZWRDb2xzLnZhbHVlLm1hcChjb2wgPT4ge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIGhlYWRlckNlbGxDb2wgPSBzbG90c1sgYGhlYWRlci1jZWxsLSR7IGNvbC5uYW1lIH1gIF0sXG4gICAgICAgICAgc2xvdCA9IGhlYWRlckNlbGxDb2wgIT09IHZvaWQgMCA/IGhlYWRlckNlbGxDb2wgOiBoZWFkZXJDZWxsLFxuICAgICAgICAgIHByb3BzID0gZ2V0SGVhZGVyU2NvcGUoeyBjb2wgfSlcblxuICAgICAgICByZXR1cm4gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KHByb3BzKVxuICAgICAgICAgIDogaChRVGgsIHtcbiAgICAgICAgICAgIGtleTogY29sLm5hbWUsXG4gICAgICAgICAgICBwcm9wc1xuICAgICAgICAgIH0sICgpID0+IGNvbC5sYWJlbClcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzaW5nbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUgJiYgcHJvcHMuZ3JpZCAhPT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RoJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCAnICcpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG11bHRpcGxlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2hlYWRlci1zZWxlY3Rpb24nIF1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChnZXRIZWFkZXJTY29wZSh7fSkpXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IGhlYWRlclNlbGVjdGVkVmFsdWUudmFsdWUsXG4gICAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IG9uTXVsdGlwbGVTZWxlY3Rpb25TZXRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RoJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCBjb250ZW50KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ3RyJywge1xuICAgICAgICAgIGNsYXNzOiBwcm9wcy50YWJsZUhlYWRlckNsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZUhlYWRlclN0eWxlXG4gICAgICAgIH0sIGNoaWxkKVxuICAgICAgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlclNjb3BlIChkYXRhKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlLFxuICAgICAgICBzb3J0LFxuICAgICAgICBjb2xzTWFwOiBjb21wdXRlZENvbHNNYXAudmFsdWUsXG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2VcbiAgICAgIH0pXG5cbiAgICAgIGlmIChtdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpbmplY3RQcm9wKFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgJ3NlbGVjdGVkJyxcbiAgICAgICAgICAoKSA9PiBoZWFkZXJTZWxlY3RlZFZhbHVlLnZhbHVlLFxuICAgICAgICAgIG9uTXVsdGlwbGVTZWxlY3Rpb25TZXRcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTXVsdGlwbGVTZWxlY3Rpb25TZXQgKHZhbCkge1xuICAgICAgaWYgKHNvbWVSb3dzU2VsZWN0ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdmFsID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdXBkYXRlU2VsZWN0aW9uKFxuICAgICAgICBjb21wdXRlZFJvd3MudmFsdWUubWFwKGdldFJvd0tleS52YWx1ZSksXG4gICAgICAgIGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgICAgdmFsXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbmF2SWNvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGljbyA9IFtcbiAgICAgICAgcHJvcHMuaWNvbkZpcnN0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLmZpcnN0UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvblByZXZQYWdlIHx8ICRxLmljb25TZXQudGFibGUucHJldlBhZ2UsXG4gICAgICAgIHByb3BzLmljb25OZXh0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLm5leHRQYWdlLFxuICAgICAgICBwcm9wcy5pY29uTGFzdFBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5sYXN0UGFnZVxuICAgICAgXVxuICAgICAgcmV0dXJuICRxLmxhbmcucnRsID09PSB0cnVlID8gaWNvLnJldmVyc2UoKSA6IGljb1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRCb3R0b21EaXYgKCkge1xuICAgICAgaWYgKHByb3BzLmhpZGVCb3R0b20gPT09IHRydWUpIHJldHVyblxuXG4gICAgICBpZiAobm90aGluZ1RvRGlzcGxheS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvcHMuaGlkZU5vRGF0YSA9PT0gdHJ1ZSkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHByb3BzLmxvYWRpbmcgPT09IHRydWVcbiAgICAgICAgICA/IHByb3BzLmxvYWRpbmdMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLmxvYWRpbmdcbiAgICAgICAgICA6IChwcm9wcy5maWx0ZXIgPyBwcm9wcy5ub1Jlc3VsdHNMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLm5vUmVzdWx0cyA6IHByb3BzLm5vRGF0YUxhYmVsIHx8ICRxLmxhbmcudGFibGUubm9EYXRhKVxuXG4gICAgICAgIGNvbnN0IG5vRGF0YSA9IHNsb3RzWyAnbm8tZGF0YScgXVxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vRGF0YSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBbIG5vRGF0YSh7IG1lc3NhZ2UsIGljb246ICRxLmljb25TZXQudGFibGUud2FybmluZywgZmlsdGVyOiBwcm9wcy5maWx0ZXIgfSkgXVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19ib3R0b20tbm9kYXRhLWljb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICRxLmljb25TZXQudGFibGUud2FybmluZ1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyArICcgcS10YWJsZV9fYm90dG9tLS1ub2RhdGEnIH0sIGNoaWxkcmVuKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBib3R0b20gPSBzbG90cy5ib3R0b21cblxuICAgICAgaWYgKGJvdHRvbSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyB9LCBbIGJvdHRvbShtYXJnaW5hbHNTY29wZS52YWx1ZSkgXSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBwcm9wcy5oaWRlU2VsZWN0ZWRCYW5uZXIgIT09IHRydWUgJiYgaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSAmJiByb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUgPiAwXG4gICAgICAgID8gW1xuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgIChwcm9wcy5zZWxlY3RlZFJvd3NMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnNlbGVjdGVkUmVjb3Jkcykocm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW11cblxuICAgICAgaWYgKHByb3BzLmhpZGVQYWdpbmF0aW9uICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGJvdHRvbUNsYXNzICsgJyBqdXN0aWZ5LWVuZCdcbiAgICAgICAgfSwgZ2V0UGFnaW5hdGlvbkRpdihjaGlsZCkpXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzIH0sIGNoaWxkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFnU2VsZWN0aW9uIChwYWcpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oe1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICByb3dzUGVyUGFnZTogcGFnLnZhbHVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZ2luYXRpb25EaXYgKGNoaWxkKSB7XG4gICAgICBsZXQgY29udHJvbFxuICAgICAgY29uc3RcbiAgICAgICAgeyByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgICBwYWdpbmF0aW9uTGFiZWwgPSBwcm9wcy5wYWdpbmF0aW9uTGFiZWwgfHwgJHEubGFuZy50YWJsZS5wYWdpbmF0aW9uLFxuICAgICAgICBwYWdpbmF0aW9uU2xvdCA9IHNsb3RzLnBhZ2luYXRpb24sXG4gICAgICAgIGhhc09wdHMgPSBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMubGVuZ3RoID4gMVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fc2VwYXJhdG9yIGNvbCcgfSlcbiAgICAgIClcblxuICAgICAgaWYgKGhhc09wdHMgPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6ICdxLXRhYmxlX19ib3R0b20taXRlbScgfSwgW1xuICAgICAgICAgICAgICBwcm9wcy5yb3dzUGVyUGFnZUxhYmVsIHx8ICRxLmxhbmcudGFibGUucmVjb3Jkc1BlclBhZ2VcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgaChRU2VsZWN0LCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fc2VsZWN0IGlubGluZSBxLXRhYmxlX19ib3R0b20taXRlbScsXG4gICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogcm93c1BlclBhZ2UsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLnZhbHVlLFxuICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU6IHJvd3NQZXJQYWdlID09PSAwXG4gICAgICAgICAgICAgICAgPyAkcS5sYW5nLnRhYmxlLmFsbFJvd3NcbiAgICAgICAgICAgICAgICA6IHJvd3NQZXJQYWdlLFxuICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgIGJvcmRlcmxlc3M6IHRydWUsXG4gICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICBvcHRpb25zRGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIG9wdGlvbnNDb3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBvblBhZ1NlbGVjdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChwYWdpbmF0aW9uU2xvdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnRyb2wgPSBwYWdpbmF0aW9uU2xvdChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb250cm9sID0gW1xuICAgICAgICAgIGgoJ3NwYW4nLCByb3dzUGVyUGFnZSAhPT0gMCA/IHsgY2xhc3M6ICdxLXRhYmxlX19ib3R0b20taXRlbScgfSA6IHt9LCBbXG4gICAgICAgICAgICByb3dzUGVyUGFnZVxuICAgICAgICAgICAgICA/IHBhZ2luYXRpb25MYWJlbChmaXJzdFJvd0luZGV4LnZhbHVlICsgMSwgTWF0aC5taW4obGFzdFJvd0luZGV4LnZhbHVlLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpXG4gICAgICAgICAgICAgIDogcGFnaW5hdGlvbkxhYmVsKDEsIGZpbHRlcmVkU29ydGVkUm93c051bWJlci52YWx1ZSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cblxuICAgICAgICBpZiAocm93c1BlclBhZ2UgIT09IDAgJiYgcGFnZXNOdW1iZXIudmFsdWUgPiAxKSB7XG4gICAgICAgICAgY29uc3QgYnRuUHJvcHMgPSB7XG4gICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYnRuUHJvcHMuc2l6ZSA9ICdzbSdcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYWdlc051bWJlci52YWx1ZSA+IDIgJiYgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnRmlyc3QnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMCBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0ZpcnN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogZmlyc3RQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnRyb2wucHVzaChcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ1ByZXYnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0ZpcnN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogcHJldlBhZ2VcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdOZXh0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDIgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogbmV4dFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgcGFnZXNOdW1iZXIudmFsdWUgPiAyICYmIGNvbnRyb2wucHVzaChcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ0xhc3QnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMyBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0xhc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBsYXN0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIGNvbnRyb2wpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEdyaWRIZWFkZXIgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBwcm9wcy5ncmlkSGVhZGVyID09PSB0cnVlXG4gICAgICAgID8gW1xuICAgICAgICAgICAgaCgndGFibGUnLCB7IGNsYXNzOiAncS10YWJsZScgfSwgW1xuICAgICAgICAgICAgICBnZXRUSGVhZChoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIDogKFxuICAgICAgICAgICAgcHJvcHMubG9hZGluZyA9PT0gdHJ1ZSAmJiBzbG90cy5sb2FkaW5nID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBnZXRQcm9ncmVzcyhoKVxuICAgICAgICAgICAgICA6IHZvaWQgMFxuICAgICAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19taWRkbGUnIH0sIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEdyaWRCb2R5ICgpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBzbG90cy5pdGVtICE9PSB2b2lkIDBcbiAgICAgICAgPyBzbG90cy5pdGVtXG4gICAgICAgIDogc2NvcGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkID0gc2NvcGUuY29scy5tYXAoXG4gICAgICAgICAgICBjb2wgPT4gaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS1yb3cnIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS10aXRsZScgfSwgWyBjb2wubGFiZWwgXSksXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tdmFsdWUnIH0sIFsgY29sLnZhbHVlIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbICdib2R5LXNlbGVjdGlvbicgXVxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgICAgICA/IHNsb3Qoc2NvcGUpXG4gICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogc2NvcGUuc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKFsgc2NvcGUua2V5IF0sIFsgc2NvcGUucm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS1yb3cnIH0sIGNvbnRlbnQpLFxuICAgICAgICAgICAgICBoKFFTZXBhcmF0b3IsIHsgZGFyazogaXNEYXJrLnZhbHVlIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICdxLXRhYmxlX19ncmlkLWl0ZW0tY2FyZCcgKyBjYXJkRGVmYXVsdENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBwcm9wcy5jYXJkQ2xhc3NcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdHlsZTogcHJvcHMuY2FyZFN0eWxlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvcHMub25Sb3dDbGljayAhPT0gdm9pZCAwXG4gICAgICAgICAgICB8fCBwcm9wcy5vblJvd0RibGNsaWNrICE9PSB2b2lkIDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGRhdGEuY2xhc3NbIDAgXSArPSAnIGN1cnNvci1wb2ludGVyJ1xuXG4gICAgICAgICAgICBpZiAocHJvcHMub25Sb3dDbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGRhdGEub25DbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgZW1pdCgnUm93Q2xpY2snLCBldnQsIHNjb3BlLnJvdywgc2NvcGUucGFnZUluZGV4KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5vblJvd0RibGNsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YS5vbkRibGNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBlbWl0KCdSb3dEYmxjbGljaycsIGV2dCwgc2NvcGUucm93LCBzY29wZS5wYWdlSW5kZXgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0gY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0zJ1xuICAgICAgICAgICAgICArIChzY29wZS5zZWxlY3RlZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZV9fZ3JpZC1pdGVtLS1zZWxlY3RlZCcgOiAnJylcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCBkYXRhLCBjaGlsZClcbiAgICAgICAgICBdKVxuICAgICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgJ3EtdGFibGVfX2dyaWQtY29udGVudCByb3cnLFxuICAgICAgICAgIHByb3BzLmNhcmRDb250YWluZXJDbGFzc1xuICAgICAgICBdLFxuICAgICAgICBzdHlsZTogcHJvcHMuY2FyZENvbnRhaW5lclN0eWxlXG4gICAgICB9LCBjb21wdXRlZFJvd3MudmFsdWUubWFwKChyb3csIHBhZ2VJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbShnZXRCb2R5U2NvcGUoe1xuICAgICAgICAgIGtleTogZ2V0Um93S2V5LnZhbHVlKHJvdyksXG4gICAgICAgICAgcm93LFxuICAgICAgICAgIHBhZ2VJbmRleFxuICAgICAgICB9KSlcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kcyBhbmQgbmVlZGVkIGNvbXB1dGVkIHByb3BzXG4gICAgT2JqZWN0LmFzc2lnbih2bS5wcm94eSwge1xuICAgICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uLFxuICAgICAgc2V0UGFnaW5hdGlvbixcbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZSxcbiAgICAgIGlzUm93U2VsZWN0ZWQsXG4gICAgICBjbGVhclNlbGVjdGlvbixcbiAgICAgIGlzUm93RXhwYW5kZWQsXG4gICAgICBzZXRFeHBhbmRlZCxcbiAgICAgIHNvcnQsXG4gICAgICByZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBzY3JvbGxUbyxcbiAgICAgIGdldENlbGxWYWx1ZVxuICAgIH0pXG5cbiAgICBpbmplY3RNdWx0aXBsZVByb3BzKHZtLnByb3h5LCB7XG4gICAgICBmaWx0ZXJlZFNvcnRlZFJvd3M6ICgpID0+IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZSxcbiAgICAgIGNvbXB1dGVkUm93czogKCkgPT4gY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgY29tcHV0ZWRSb3dzTnVtYmVyOiAoKSA9PiBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gWyBnZXRUb3BEaXYoKSBdXG4gICAgICBjb25zdCBkYXRhID0geyByZWY6IHJvb3RSZWYsIGNsYXNzOiBjb250YWluZXJDbGFzcy52YWx1ZSB9XG5cbiAgICAgIGlmIChwcm9wcy5ncmlkID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnB1c2goZ2V0R3JpZEhlYWRlcigpKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgIGNsYXNzOiBbIGRhdGEuY2xhc3MsIHByb3BzLmNhcmRDbGFzcyBdLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkU3R5bGVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgZ2V0Qm9keSgpLFxuICAgICAgICBnZXRCb3R0b21EaXYoKVxuICAgICAgKVxuXG4gICAgICBpZiAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSAmJiBzbG90cy5sb2FkaW5nICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBzbG90cy5sb2FkaW5nKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICBwb3NpdGlvbj1cInRvcFwiXG4gICAgYmFja2Ryb3AtZmlsdGVyPVwiYmx1cigzcHgpXCJcbiAgPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMHZ3OyBtaW4td2lkdGg6IDYwdnc7IG1heC1oZWlnaHQ6IDkwdmg7IG1hcmdpbi10b3A6IDV2aDsgYm9yZGVyLXJhZGl1czogNXB4O1wiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkx5cmljczwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8TG9hZGFibGVFbGVtZW50IDpzdGF0ZS1jb250cm9sbGVyPVwiY29udHJvbGxlclwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSAjbG9hZGluZz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgY29sLWFsbCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8cS1zcGlubmVyIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCIzZW1cIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cIlwiPlxuICAgICAgICAgICAgPHEtdGFibGVcbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICBib3JkZXJlZFxuICAgICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgICBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgICAgICAgcm93LWtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgaGlkZS1ib3R0b21cbiAgICAgICAgICAgICAgdmlydHVhbC1zY3JvbGxcbiAgICAgICAgICAgICAgOnJvd3MtcGVyLXBhZ2Utb3B0aW9ucz1cIlswXVwiXG4gICAgICAgICAgICAgIDpjb2x1bW5zPVwidGFibGVDb2x1bW5zQ3VzdG9taXplZFwiXG4gICAgICAgICAgICAgIDpyb3dzPVwidGFibGVSb3dzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvcS10YWJsZT5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L0xvYWRhYmxlRWxlbWVudD5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgTHlyaWNzUmVhZER0bywgVHJhY2tBcGkgfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgeyBhcGlDb25maWd1cmF0aW9uUHJvdmlkZXIgfSBmcm9tICdzcmMvc2VydmljZXMvX3NlcnZpY2VzJztcbmltcG9ydCB7IHVzZUxvYWRhYmxlQ29udHJvbGxlciB9IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUNvbnRyb2xsZXInO1xuaW1wb3J0IExvYWRhYmxlRWxlbWVudCBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVFbGVtZW50LnZ1ZSc7XG5pbXBvcnQgeyBvbk1vdW50ZWQgfSBmcm9tICd2dWUnO1xuXG4vLyBQcm9wc1xuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIHRyYWNrSWQ6IHN0cmluZ1xufT4oKTtcblxuLy8gQ29udHJvbGxlclxuY29uc3QgY29udHJvbGxlciA9IHVzZUxvYWRhYmxlQ29udHJvbGxlcjxMeXJpY3NSZWFkRHRvPigpO1xuY29uc3QgdHJhY2tBcGkgPSBuZXcgVHJhY2tBcGkoYXBpQ29uZmlndXJhdGlvblByb3ZpZGVyLmdldEFwaUNvbmZpZ3VyYXRpb24oKSk7XG5cbmNvbnN0IHRhYmxlQ29sdW1uc0N1c3RvbWl6ZWQgPSBbXG4gIHsgbmFtZTogJ3RpbWUnLCBsYWJlbDogJ1RpbWUnLCBhbGlnbjogJ2xlZnQnLCBmaWVsZDogJ3RpbWUnLCBzb3J0YWJsZTogZmFsc2UgfSxcbl1cblxuY29uc3QgdGFibGVSb3dzOiBBcnJheTx7W2tleTogc3RyaW5nXTogc3RyaW5nfT4gPSBbXTtcblxuY29uc3QgY29uc3RydWN0VWlFbGVtZW50cyA9IChseXJpY3NEdG86IEx5cmljc1JlYWREdG8pID0+IHtcbiAgY29uc3QgcG9zc2libGVMYW5nczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG4gIGx5cmljc0R0by52YXJpYW50cz8uZm9yRWFjaCgodmFyaWFudCkgPT4ge1xuICAgIC8vIGl0ZXJhdGUgb3ZlciBsaW5lc1xuICAgIHZhcmlhbnQubGluZXM/LmZvckVhY2goKGxpbmUpID0+IHtcbiAgICAgIGNvbnN0IGJhc2U6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xuICAgICAgICAndGltZSc6IGxpbmUudGltZSB8fCAnLScsXG4gICAgICB9O1xuXG4gICAgICBsaW5lLmJsb2Nrcz8uZm9yRWFjaCgoYmxvY2spID0+IHtcbiAgICAgICAgcG9zc2libGVMYW5ncy5hZGQoYmxvY2subGFuZyEpO1xuICAgICAgICBiYXNlW2Jsb2NrLmxhbmchXSA9IGJsb2NrLnRleHQhO1xuICAgICAgfSk7XG5cbiAgICAgIHRhYmxlUm93cy5wdXNoKGJhc2UpO1xuICAgIH0pXG4gIH0pO1xuICBwb3NzaWJsZUxhbmdzLmZvckVhY2goKGxhbmcpID0+IHtcbiAgICB0YWJsZUNvbHVtbnNDdXN0b21pemVkLnB1c2goe1xuICAgICAgbmFtZTogbGFuZyxcbiAgICAgIGxhYmVsOiBsYW5nLFxuICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgIGZpZWxkOiBsYW5nLFxuICAgICAgc29ydGFibGU6IGZhbHNlXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gRmV0Y2ggTHlyaWNzIERhdGFcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGNvbnRyb2xsZXIuc2V0TG9hZGluZygpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRyYWNrQXBpLmdldEx5cmljcyh7IHRyYWNrSWQ6IHByb3BzLnRyYWNrSWQgfSk7XG5cbiAgICBjb25zdHJ1Y3RVaUVsZW1lbnRzKHJlc3VsdCk7XG5cbiAgICBjb25zb2xlLmxvZyh0YWJsZVJvd3MpO1xuXG4gICAgY29udHJvbGxlci5zZXRTdWNjZXNzKHJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29udHJvbGxlci5zZXRFcnJvcihlcnJvciBhcyBFcnJvcik7XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4vKiBTdHlsaW5nIHRvIGtlZXAgdGhlIGxheW91dCBuZWF0ICovXG4ucS10YWJsZSB7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwidHJhY2stbGlzdC10YWJsZSByb3cgZnVsbC13aWR0aCBxLXB4LW5vbmUgcS1wdC1sZ1wiPlxuICAgIDxkaXZcbiAgICAgIHYtZm9yPVwiW2Rpc2MsIHRyYWNrc10gaW4gcHJvcHMudHJhY2tzLmVudHJpZXMoKVwiXG4gICAgICB2LWJpbmQ6a2V5PVwiZGlzYy5pZCFcIlxuICAgICAgY2xhc3M9XCJjb2wtMTIgcS1wdC1tZCBxLXB4LW1kIHEtcGItbGdcIlxuICAgID5cbiAgICAgIDxxLXRhYmxlXG4gICAgICAgIDpyb3dzPVwidHJhY2tzXCJcbiAgICAgICAgY2xhc3M9XCJiZy10cmFuc3BhcmVudFwiXG4gICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXG4gICAgICAgIDpwYWdpbmF0aW9uPVwicGFnaW5hdGlvblwiXG4gICAgICAgIHNlcGFyYXRvcj1cIm5vbmVcIlxuICAgICAgICByb3cta2V5PVwiaWRcIlxuICAgICAgICBmbGF0XG4gICAgICAgIGhpZGUtYm90dG9tXG4gICAgICAgIHZpcnR1YWwtc2Nyb2xsXG4gICAgICAgIGhpZGUtcGFnaW5hdGlvblxuICAgICAgPlxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdHIgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxxLXRoXG4gICAgICAgICAgICAgIHYtZm9yPVwiY29sIGluIHByb3BzLmNvbHNcIlxuICAgICAgICAgICAgICA6a2V5PVwiY29sLm5hbWVcIlxuICAgICAgICAgICAgICA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYm9yZGVyLWJvdHRvbS10aGluXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgY29sLmxhYmVsIH19XG4gICAgICAgICAgICA8L3EtdGg+XG4gICAgICAgICAgPC9xLXRyPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keS1jZWxsLWluZGV4PVwicHJvcHNcIj5cbiAgICAgICAgICA8cS10ZFxuICAgICAgICAgICAgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLXBhLXNtXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICBzaXplPVwiMTNweFwiXG4gICAgICAgICAgICAgIEBtb3VzZW92ZXI9XCJob3ZlcmluZ1doaWNoID0gcHJvcHMua2V5XCJcbiAgICAgICAgICAgICAgQG1vdXNlbGVhdmU9XCJob3ZlcmluZ1doaWNoID0gdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgOmxhYmVsPVwiaG92ZXJpbmdXaGljaCAhPT0gcHJvcHMua2V5ID8gcHJvcHMudmFsdWUgOiB1bmRlZmluZWRcIlxuICAgICAgICAgICAgICA6aWNvbj1cImhvdmVyaW5nV2hpY2ggPT09IHByb3BzLmtleSA/IG91dGxpbmVkUGxheUFycm93IDogdW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwicXVldWVTZXJ2aWNlPy5hZGRUcmFja0J5SWQocHJvcHMua2V5LCBRdWV1ZUFkZE1vZGUuUExBWV9JTU1FRElBVEVMWSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8L3EtdGQ+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpib2R5LWNlbGwtdGl0bGU9XCJwcm9wc1wiPlxuICAgICAgICAgIDxxLXRkIDpwcm9wcz1cInByb3BzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCByb3cgaXRlbXMtY2VudGVyIHRleHQtc3VidGl0bGUxIHRleHQtYm9sZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHVuZGVybGluZS1vbi1ob3ZlciBwb2ludGVyLW9uLWhvdmVyIGZsZXgganVzdGlmeS1iZXR3ZWVuIGNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAge3sgcHJvcHMudmFsdWUubmFtZS5fZGVmYXVsdCB9fVxuICAgICAgICAgICAgICAgIDxxLWJ0blxuICAgICAgICAgICAgICAgICAgdi1pZj1cInByb3BzLnZhbHVlLmhhc0x5cmljc1wiXG4gICAgICAgICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgICAgICAgZmxhdFxuICAgICAgICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIxM3B4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicS1tbC1zbVwiXG4gICAgICAgICAgICAgICAgICA6aWNvbj1cIm91dGxpbmVkTHlyaWNzXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzaG93THlyaWNzKHByb3BzLmtleSlcIlxuICAgICAgICAgICAgICAgID48L3EtYnRuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbC1vcmlnaW5hbD1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIDxxLWNoaXBcbiAgICAgICAgICAgICAgc3F1YXJlXG4gICAgICAgICAgICAgIHYtZm9yPVwicHJvcCBpbiBwcm9wcy52YWx1ZVwiXG4gICAgICAgICAgICAgIDprZXk9XCJwcm9wLmlkXCJcbiAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgIEBjbGljaz1cImdvVG9PcmlnaW5hbFRyYWNrUGFnZShwcm9wLmlkKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7IHByb3AudGl0bGUuZW4gfX1cbiAgICAgICAgICAgIDwvcS1jaGlwPlxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHktY2VsbD1cInByb3BzXCI+XG4gICAgICAgICAgPHEtdGQgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgIHt7XG4gIHByb3BzLnZhbHVlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICA8VHJhY2tNZW51IDpvcHRpb25zPVwidHJhY2tNZW51T3B0aW9uc0NyZWF0b3IocHJvcHMucm93LCBkaXNjKVwiPjwvVHJhY2tNZW51PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9xLXRhYmxlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBvdXRsaW5lZFBsYXlBcnJvdyB9IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHsgUVRhYmxlLCB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICdzcmMvbW9kZWxzL0R1cmF0aW9uJztcbmltcG9ydCBRdWV1ZVNlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IHsgaW5qZWN0LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgUXVldWVBZGRNb2RlIH0gZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9RdWV1ZVNlcnZpY2UnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgVHJhY2tNZW51IGZyb20gJy4uL01lbnVPcHRpb25zL1RyYWNrTWVudU9wdGlvbnNCdWlsZGVyL1RyYWNrTWVudS52dWUnO1xuaW1wb3J0IFRyYWNrTWVudU9wdGlvbnNCdWlsZGVyIGZyb20gJy4uL01lbnVPcHRpb25zL1RyYWNrTWVudU9wdGlvbnNCdWlsZGVyL1RyYWNrTWVudU9wdGlvbkJ1aWxkZXInO1xuaW1wb3J0IHtcbiAgb3V0bGluZWRMeXJpY3Ncbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IEx5cmljc1ZpZXdEaWFsb2cgZnJvbSAnLi4vRGlhbG9ncy9MeXJpY3NWaWV3RGlhbG9nLnZ1ZSc7XG5cbmludGVyZmFjZSBUcmFja0xpc3RUYWJsZVByb3BzIHtcbiAgdHJhY2tzOiBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT47XG59XG5cbi8vIEluamVjdGVkIHNlcnZpY2VzL2RhdGFcbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCAkcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBxdWV1ZVNlcnZpY2UgPSBpbmplY3Q8UXVldWVTZXJ2aWNlPigncXVldWVTZXJ2aWNlJyk7XG5cbmNvbnN0IGhvdmVyaW5nV2hpY2ggPSByZWY8bnVtYmVyPigpO1xuXG4vLyBNZW51IG9wdGlvbnNcbmNvbnN0IHRyYWNrTWVudU9wdGlvbnNDcmVhdG9yID0gKHRyYWNrOiBUcmFja1JlYWREdG8sIGFsYnVtOiBBbGJ1bVJlYWREdG8pID0+XG4gIG5ldyBUcmFja01lbnVPcHRpb25zQnVpbGRlcih0cmFjaywgYWxidW0pXG4gICAgLmFkZFBsYXlOZXh0T3B0aW9uKClcbiAgICAuYWRkQWRkVG9RdWV1ZU9wdGlvbigpXG4gICAgLmFkZFNlYXJjaE9uWW91dHViZU9wdGlvbigpXG4gICAgLmJ1aWxkKCk7XG5cbmNvbnN0IHBhZ2luYXRpb24gPSB7XG4gIHJvd3NQZXJQYWdlOiAwLFxuICBkZXNjZW5kaW5nOiB0cnVlLFxufTtcblxuY29uc3QgY29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdpbmRleCcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgbGFiZWw6ICcjJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LmluZGV4LFxuICAgIGZvcm1hdDogKHZhbDogbnVtYmVyKSA9PiBgJHt2YWx9YCxcbiAgICBzdHlsZTogJ3dpZHRoOiAyNHB4JyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAndGl0bGUnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnVElUTEUnLFxuICAgIGFsaWduOiAnbGVmdCcsXG4gICAgZmllbGQ6IChyb3c6IFRyYWNrUmVhZER0bykgPT4gcm93LFxuICAgIGNsYXNzZXM6ICd0ZXh0LWg0JyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnb3JpZ2luYWwnLFxuICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICBsYWJlbDogJ09SSUdJTkFMJyxcbiAgICBhbGlnbjogJ2xlZnQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5vcmlnaW5hbCxcbiAgICBjbGFzc2VzOiAndGV4dC1ib2xkJyxcbiAgICBzb3J0YWJsZTogZmFsc2UsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnZHVyYXRpb24nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGxhYmVsOiAnRFVSQVRJT04nLFxuICAgIGFsaWduOiAncmlnaHQnLFxuICAgIGZpZWxkOiAocm93OiBUcmFja1JlYWREdG8pID0+IHJvdy5kdXJhdGlvbixcbiAgICBmb3JtYXQ6ICh2YWw6IHN0cmluZykgPT5cbiAgICAgIGAke0R1cmF0aW9uLmZyb21EdXJhdGlvblN0cmluZyh2YWwpLnRvRHVyYXRpb25TdHJpbmcoKX1gLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgfSxcbl07XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8VHJhY2tMaXN0VGFibGVQcm9wcz4oKTtcblxuY29uc3QgZ29Ub09yaWdpbmFsVHJhY2tQYWdlID0gKG9yaWdpbmFsVHJhY2tJZDogc3RyaW5nKSA9PiB7XG4gICRyb3V0ZXIucHVzaCh7XG4gICAgbmFtZTogJ09yaWdpbmFsVHJhY2snLFxuICAgIHBhcmFtczogeyBvcmlnaW5hbElkOiBvcmlnaW5hbFRyYWNrSWQsIHBhZ2U6IDEgfSxcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93THlyaWNzID0gKHRyYWNrSWQ6IHN0cmluZykgPT4ge1xuICBjb25zb2xlLmxvZyh0cmFja0lkKTtcbiAgJHEuZGlhbG9nKFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogTHlyaWNzVmlld0RpYWxvZyxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIHRyYWNrSWQsXG4gICAgICB9XG4gICAgfVxuICApO1xufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgQXNzZXRSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGkvZGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0VXRpbHMge1xuICBzdGF0aWMgZG93bmxvYWRBc3NldChhc3NldDogQXNzZXRSZWFkRHRvKTogdm9pZCB7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSBgJHthc3NldC51cmx9P2Rvd25sb2FkPXRydWVgO1xuICAgIGEudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgYS5jbGljaygpO1xuICB9XG5cbiAgc3RhdGljIG9wZW5Bc3NldEluTmV3VGFiKGFzc2V0OiBBc3NldFJlYWREdG8pOiB2b2lkIHtcbiAgICB3aW5kb3cub3Blbihhc3NldC51cmwsICdfYmxhbmsnKTtcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICBwb3NpdGlvbj1cInRvcFwiXG4gICAgYmFja2Ryb3AtZmlsdGVyPVwiYnJpZ2h0bmVzcyg1MCUpXCJcbiAgPlxuICAgIDxxLWNhcmQgc3R5bGU9XCJ3aWR0aDogMTIwMHB4OyBtYXgtd2lkdGg6IDgwdnc7IG1hcmdpbi10b3A6IDEwdmg7IGJvcmRlci1yYWRpdXM6IDVweDtcIj5cbiAgICAgIDxxLXRvb2xiYXIgY2xhc3M9XCJiZy1wcmltYXJ5XCI+XG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgUHJldmlldyBvZiB7eyBwcm9wcy5hc3NldC5uYW1lIH19XG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBAY2xpY2s9XCJBc3NldFV0aWxzLmRvd25sb2FkQXNzZXQocHJvcHMuYXNzZXQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIERvd25sb2FkXG4gICAgICAgIDwvcS1idG4+XG4gICAgICA8L3EtdG9vbGJhcj5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uIHYtaWY9XCJpc1ByZXZpZXdhYmxlKHByb3BzLmFzc2V0KVwiPlxuICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgOnNyYz1cInByb3BzLmFzc2V0LnVybFwiXG4gICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICBoZWlnaHQ9XCI2MDBcIlxuICAgICAgICA+XG4gICAgICAgIDwvaWZyYW1lPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiB2LWVsc2U+XG4gICAgICAgIFByZXZpZXcgbm90IGF2YWlsYWJsZSBmb3IgdGhpcyBhc3NldC4gKFVuc3VwcG9ydGVkIE1JTUUgdHlwZToge3sgcHJvcHMuYXNzZXQubWltZSB9fSlcbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBBc3NldFJlYWREdG8gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaS9kaXN0JztcbmltcG9ydCBBc3NldFV0aWxzIGZyb20gJ3NyYy91dGlscy9Bc3NldFV0aWxzJztcblxuY29uc3QgUFJFVklFV0FCTEVfTUlNRV9UWVBFUyA9IFtcbiAgJ2ltYWdlL2pwZWcnLFxuICAnaW1hZ2UvcG5nJyxcbiAgJ2ltYWdlL2dpZicsXG4gICdpbWFnZS9ibXAnLFxuICAnaW1hZ2Uvd2VicCcsXG4gICdpbWFnZS94LWljb24nLFxuICAndGV4dC9wbGFpbicsXG4gICd0ZXh0L2h0bWwnLFxuICAndGV4dC94bWwnLFxuICAndmlkZW8vbXA0JyxcbiAgJ3ZpZGVvL3dlYm0nLFxuICAndmlkZW8vbXBlZycsXG4gICdhdWRpby9tcGVnMycsXG4gICdhdWRpby9vZ2cnLFxuICAnYXVkaW8vbXA0JyxcbiAgJ2F1ZGlvL2ZsYWMnLFxuICAnYXVkaW8vbWlkaScsXG5dO1xuXG5jb25zdCBpc1ByZXZpZXdhYmxlID0gKGFzc2V0OiBBc3NldFJlYWREdG8pID0+IHtcbiAgaWYgKCFhc3NldC5taW1lKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBQUkVWSUVXQUJMRV9NSU1FX1RZUEVTLmluY2x1ZGVzKGFzc2V0Lm1pbWUpO1xufTtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGFzc2V0OiBBc3NldFJlYWREdG87XG59PigpO1xuPC9zY3JpcHQ+XG4iLCI8IS0tIGVzbGludC1kaXNhYmxlIHZ1ZS9uby11bnVzZWQtdmFycyAtLT5cbjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgcG9zaXRpb249XCJ0b3BcIlxuICAgIGJhY2tkcm9wLWZpbHRlcj1cImJyaWdodG5lc3MoNTAlKVwiXG4gID5cbiAgICA8cS1jYXJkIHN0eWxlPVwid2lkdGg6IDEyMDBweDsgbWF4LXdpZHRoOiA4MHZ3OyBtYXJnaW4tdG9wOiAxMHZoOyBib3JkZXItcmFkaXVzOiA1cHg7XCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+QWxidW0gQXNzZXRzPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb25cbiAgICAgICAgY2xhc3M9XCJxLXB0LW5vbmVcIlxuICAgICAgICB2LWlmPVwiYWxidW1Bc3NldHMubGVuZ3RoID4gMFwiXG4gICAgICA+XG4gICAgICAgIDxxLXRhYmxlXG4gICAgICAgICAgOnJvd3M9XCJhbGJ1bUFzc2V0c1wiXG4gICAgICAgICAgOmNvbHVtbnM9XCJ0YWJsZUNvbHVtbnNcIlxuICAgICAgICAgIGNsYXNzPVwiYmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgIHJvdy1rZXk9XCJpZFwiXG4gICAgICAgICAgOnJvd3MtcGVyLXBhZ2Utb3B0aW9ucz1cIlsxMCwgMjAsIDUwLCAxMDBdXCJcbiAgICAgICAgICBmbGF0XG4gICAgICAgID5cbiAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OmJvZHk9XCJwcm9wc1wiPlxuICAgICAgICAgICAgPHEtdHIgOnByb3BzPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgPHEtdGRcbiAgICAgICAgICAgICAgICBrZXk9XCJpZFwiXG4gICAgICAgICAgICAgICAgOnByb3BzPVwicHJvcHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgcHJvcHMucm93LmlkIH19XG4gICAgICAgICAgICAgIDwvcS10ZD5cbiAgICAgICAgICAgICAgPHEtdGRcbiAgICAgICAgICAgICAgICBrZXk9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyBwcm9wcy5yb3cubmFtZSB9fVxuICAgICAgICAgICAgICA8L3EtdGQ+XG5cbiAgICAgICAgICAgICAgPHEtdGRcbiAgICAgICAgICAgICAgICBrZXk9XCJzaXplXCJcbiAgICAgICAgICAgICAgICA6cHJvcHM9XCJwcm9wc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7eyAocHJvcHMucm93LnNpemUgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCgyKSB9fVxuICAgICAgICAgICAgICA8L3EtdGQ+XG5cbiAgICAgICAgICAgICAgPHEtdGRcbiAgICAgICAgICAgICAgICBrZXk9XCJtaW1lLXR5cGVcIlxuICAgICAgICAgICAgICAgIDpwcm9wcz1cInByb3BzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IHByb3BzLnJvdy5taW1lIH19XG4gICAgICAgICAgICAgIDwvcS10ZD5cblxuICAgICAgICAgICAgICA8cS1tZW51IHRvdWNoLXBvc2l0aW9uPlxuICAgICAgICAgICAgICAgIDxxLWxpc3Qgc3R5bGU9XCJtaW4td2lkdGg6IDEwMHB4XCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInByZXZpZXdBc3NldChwcm9wcy5yb3cpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXIgOmljb249bWF0UHJldmlldyAvPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5QcmV2aWV3PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiQXNzZXRVdGlscy5vcGVuQXNzZXRJbk5ld1RhYihwcm9wcy5yb3cpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1hdmF0YXIgOmljb249bWF0T3BlbkluTmV3IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPk9wZW4gaW4gbmV3IHRhYjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiQXNzZXRVdGlscy5kb3dubG9hZEFzc2V0KHByb3BzLnJvdylcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhciA6aWNvbj1tYXRGaWxlRG93bmxvYWQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+RG93bmxvYWQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgICAgIDwvcS10cj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3EtdGFibGU+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb25cbiAgICAgICAgY2xhc3M9XCJxLXBiLW5vbmVcIlxuICAgICAgICB2LWVsc2VcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDYgdGV4dC1jZW50ZXJcIj5ObyBhc3NldHMgZm91bmQ8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyBhbGlnbj1cInJpZ2h0XCI+XG4gICAgICAgIDxxLWJ0blxuICAgICAgICAgIGZsYXRcbiAgICAgICAgICBsYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICB2LWNsb3NlLXBvcHVwXG4gICAgICAgIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG1hdEZpbGVEb3dubG9hZCxcbiAgbWF0UHJldmlldyxcbiAgbWF0T3BlbkluTmV3XG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zJztcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgQXNzZXRSZWFkRHRvIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGkvZGlzdCc7XG5pbXBvcnQgeyBRRGlhbG9nLCB1c2VRdWFzYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFzc2V0UHJldmlld0RpYWxvZyBmcm9tICcuL0Fzc2V0UHJldmlld0RpYWxvZy52dWUnO1xuaW1wb3J0IEFzc2V0VXRpbHMgZnJvbSAnc3JjL3V0aWxzL0Fzc2V0VXRpbHMnO1xuXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG5pbnRlcmZhY2UgQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2dQcm9wcyB7XG4gIGFsYnVtOiBBbGJ1bVJlYWREdG87XG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8QWxidW1Bc3NldHNWaWV3ZXJEaWFsb2dQcm9wcz4oKTtcblxuY29uc3QgYWxidW1Bc3NldHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBwcm9wcy5hbGJ1bS5vdGhlckZpbGVzIS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKCFhLm5hbWUpIHJldHVybiAxO1xuICAgIGlmICghYi5uYW1lKSByZXR1cm4gLTE7XG4gICAgcmV0dXJuIGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IHByZXZpZXdBc3NldCA9IChhc3NldDogQXNzZXRSZWFkRHRvKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBBc3NldFByZXZpZXdEaWFsb2csXG4gICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgIGFzc2V0XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHRhYmxlQ29sdW1ucyA9IFtcbiAge1xuICAgIG5hbWU6ICdpZCcsXG4gICAgbGFiZWw6ICdBc3NldCBJRCcsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5pZFxuICB9LFxuICB7XG4gICAgbmFtZTogJ25hbWUnLFxuICAgIGxhYmVsOiAnTmFtZScsXG4gICAgYWxpZ246ICdsZWZ0JyxcbiAgICBmaWVsZDogKHJvdzogQXNzZXRSZWFkRHRvKSA9PiByb3cubmFtZVxuICB9LFxuICB7XG4gICAgbmFtZTogJ3NpemUnLFxuICAgIGxhYmVsOiAnU2l6ZSAoTUIpJyxcbiAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgZmllbGQ6IChyb3c6IEFzc2V0UmVhZER0bykgPT4gcm93LnNpemUsXG4gICAgZm9ybWF0OiAodmFsOiBudW1iZXIpID0+IGAkeyh2YWwgLyAxMDI0IC8gMTAyNCkudG9GaXhlZCgyKX1gXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbWltZS10eXBlJyxcbiAgICBsYWJlbDogJ0NvbnRlbnQgVHlwZScsXG4gICAgYWxpZ246ICdjZW50ZXInLFxuICAgIGZpZWxkOiAocm93OiBBc3NldFJlYWREdG8pID0+IHJvdy5taW1lXG4gIH1cbl07XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZT5cbiAgICA8TG9hZGFibGVFbGVtZW50IDpzdGF0ZS1jb250cm9sbGVyPVwiY29udHJvbGxlclwiPlxuICAgICAgPHRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgICA8cS1zcGlubmVyLWdlYXJzIHNpemU9XCIxMDBweFwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJ7IGRhdGEgfVwiPlxuICAgICAgICA8QWxidW1JbmZvU2VjdGlvbiA6YWxidW09XCJkYXRhIS5tYXN0ZXJBbGJ1bVwiIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBjb2wtYWxsIHEtbXQtbGcgYWxidW0tcGFnZS1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICAgIGNsYXNzPVwicGxheS1idG4gcS1teC1tZFwiXG4gICAgICAgICAgICAgIDppY29uPVwib3V0bGluZWRQbGF5QXJyb3dcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJwbGF5QWxidW0oZGF0YSEsIFF1ZXVlQWRkTW9kZS5QTEFZX0lNTUVESUFURUxZKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLXRvb2x0aXA+UGxheTwvcS10b29sdGlwPlxuXG4gICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICB0b3VjaC1wb3NpdGlvblxuICAgICAgICAgICAgICAgIGNvbnRleHQtbWVudVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHEtbGlzdCBzdHlsZT1cIm1pbi13aWR0aDogMTUwcHhcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicGxheUFsYnVtKGRhdGEhLCBRdWV1ZUFkZE1vZGUuQVBQRU5EX05FWFQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlBsYXkgTmV4dDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICAgICAgICAgIHYtY2xvc2UtcG9wdXBcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicGxheUFsYnVtKGRhdGEhLCBRdWV1ZUFkZE1vZGUuQVBQRU5EX0xBU1QpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkFkZCB0byBRdWV1ZTwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgICAgPC9xLW1lbnU+XG4gICAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgY2xhc3M9XCJsaWtlLWJ0biBxLW14LW1kXCJcbiAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHEtdG9vbHRpcD5TYXZlPC9xLXRvb2x0aXA+XG4gICAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgICA8cS1idG5cbiAgICAgICAgICAgICAgZmFiXG4gICAgICAgICAgICAgIGZsYXRcbiAgICAgICAgICAgICAgY2xhc3M9XCJxLW14LW1kXCJcbiAgICAgICAgICAgICAgcm91bmRcbiAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZE1vcmVIb3JpelwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxxLW1lbnVcbiAgICAgICAgICAgICAgICBmaXRcbiAgICAgICAgICAgICAgICBhbmNob3I9XCJjZW50ZXIgbWlkZGxlXCJcbiAgICAgICAgICAgICAgICBzZWxmPVwidG9wIG1pZGRsZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzaG93QWxidW1Bc3NldERpYWxvZyhkYXRhIS5tYXN0ZXJBbGJ1bSlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlZpZXcgT3RoZXIgQXNzZXRzPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbVxuICAgICAgICAgICAgICAgICAgICBjbGlja2FibGVcbiAgICAgICAgICAgICAgICAgICAgdi1jbG9zZS1wb3B1cFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLWF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgOmljb249XCJvdXRsaW5lZEVkaXROb3RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPkF0dHJpYnV0ZSBFZGl0b3I8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICAgIDwvcS1tZW51PlxuICAgICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxUcmFja0xpc3RUYWJsZSA6dHJhY2tzPVwiZGF0YSEudHJhY2tzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGUgI2Vycm9yPVwieyBlcnJvciB9XCI+XG4gICAgICAgIDxxLWNhcmRcbiAgICAgICAgICBjbGFzcz1cInEtbWEtbWRcIlxuICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiA0MDBweFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkVycm9yPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj5GYWlsZWQgdG8gbG9hZCBhbGJ1bTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2FwdGlvblwiPnt7IGVycm9yPy5tZXNzYWdlIH19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jYXB0aW9uXCI+e3sgZXJyb3I/LnN0YWNrIH19PC9kaXY+XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvciBpbnNldCAvPlxuXG4gICAgICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICAgICAge3sgZXJyb3I/LnN0YWNrIH19XG4gICAgICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvTG9hZGFibGVFbGVtZW50PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRNb3JlSG9yaXosXG4gIG91dGxpbmVkRmF2b3JpdGVCb3JkZXIsXG4gIG91dGxpbmVkRGVzY3JpcHRpb24sXG4gIG91dGxpbmVkRWRpdE5vdGVcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvLCBBbGJ1bUFwaSB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgQXBpQ29uZmlndXJhdGlvblByb3ZpZGVyIGZyb20gJ3NyYy9zZXJ2aWNlcy9kb21haW4vQXBpQ29uZmlndXJhdGlvblByb3ZpZGVyJztcbmltcG9ydCB7IGNvbXB1dGVkLCBDb21wdXRlZFJlZiwgaW5qZWN0LCBvbk1vdW50ZWQsIHdhdGNoIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHsgdXNlTG9hZGFibGVDb250cm9sbGVyIH0gZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlQ29udHJvbGxlcic7XG5pbXBvcnQgTG9hZGFibGVFbGVtZW50IGZyb20gJ3NyYy91dGlscy9Mb2FkYWJsZS9Mb2FkYWJsZUVsZW1lbnQudnVlJztcbmltcG9ydCB7IFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCBBbGJ1bUluZm9TZWN0aW9uIGZyb20gJ3NyYy9jb21wb25lbnRzL0FsYnVtUGFnZS9BbGJ1bUluZm9TZWN0aW9uLnZ1ZSc7XG5pbXBvcnQgVHJhY2tMaXN0VGFibGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvQWxidW1QYWdlL1RyYWNrTGlzdFRhYmxlLnZ1ZSc7XG5pbXBvcnQgeyBRQ2FyZCwgdXNlUXVhc2FyLCB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2cgZnJvbSAnc3JjL2NvbXBvbmVudHMvRGlhbG9ncy9BbGJ1bUFzc2V0c1ZpZXdlckRpYWxvZy52dWUnO1xuaW1wb3J0IFF1ZXVlU2VydmljZSwgeyBRdWV1ZUFkZE1vZGUgfSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1F1ZXVlU2VydmljZSc7XG5pbXBvcnQgTHlyaWNzVmlld0RpYWxvZyBmcm9tICdzcmMvY29tcG9uZW50cy9EaWFsb2dzL0x5cmljc1ZpZXdEaWFsb2cudnVlJztcblxuLy8gVmlldyBNb2RlbHNcbmludGVyZmFjZSBBbGJ1bVBhZ2VSb3V0ZVBhcmFtZXRlcnMge1xuICBhbGJ1bUlkOiBDb21wdXRlZFJlZjxzdHJpbmc+O1xufVxuXG5pbnRlcmZhY2UgQWxidW1QYWdlVmlld01vZGVsIHtcbiAgbWFzdGVyQWxidW06IEFsYnVtUmVhZER0bztcbiAgZGlzY3M6IEFsYnVtUmVhZER0b1tdO1xuXG4gIC8vIEFsYnVtIC0+IFRyYWNrcyBpbiBBbGJ1bSwgZm9yIGVhY2ggYWxidW1cbiAgdHJhY2tzOiBNYXA8QWxidW1SZWFkRHRvLCBUcmFja1JlYWREdG9bXT47XG59XG5cbi8vIEluamVjdC9nZXQgcmVxdWlyZWQgc2VydmNpZXNcbmNvbnN0IGFwaUNvbmZpZ1Byb3ZpZGVyID1cbiAgaW5qZWN0PEFwaUNvbmZpZ3VyYXRpb25Qcm92aWRlcjxDb25maWd1cmF0aW9uPj4oJ2FwaUNvbmZpZ1Byb3ZpZGVyJyk7XG5pZiAoIWFwaUNvbmZpZ1Byb3ZpZGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcignQVBJIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXIgbm90IGZvdW5kJyk7XG59XG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuY29uc3QgJHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3Qgcm91dGVQYXJhbXMgPSB7XG4gIGFsYnVtSWQ6IGNvbXB1dGVkKCgpID0+ICRyb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hbGJ1bUlkKSxcbn07XG5jb25zdCBjb250cm9sbGVyID0gdXNlTG9hZGFibGVDb250cm9sbGVyPEFsYnVtUGFnZVZpZXdNb2RlbD4oKTtcbmNvbnN0IHF1ZXVlU2VydmljZSA9IGluamVjdDxRdWV1ZVNlcnZpY2U+KCdxdWV1ZVNlcnZpY2UnKTtcblxuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbFNpbmdsZURpc2MgPSAoXG4gIG1hc3RlcjogQWxidW1SZWFkRHRvXG4pOiBBbGJ1bVBhZ2VWaWV3TW9kZWwgPT4ge1xuICBjb25zdCB0cmFja3MgPSBuZXcgTWFwPEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvW10+KCk7XG5cbiAgaWYgKG1hc3Rlci50cmFja3MpIHtcbiAgICBtYXN0ZXIudHJhY2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXghIC0gYi5pbmRleCEpO1xuICAgIHRyYWNrcy5zZXQobWFzdGVyLCBtYXN0ZXIudHJhY2tzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWFzdGVyQWxidW06IG1hc3RlcixcbiAgICBkaXNjczogW10sXG4gICAgdHJhY2tzLFxuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbE11bHRpRGlzYyA9IChcbiAgbWFzdGVyOiBBbGJ1bVJlYWREdG8sXG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXVxuKTogQWxidW1QYWdlVmlld01vZGVsID0+IHtcbiAgY29uc3QgdHJhY2tzID0gbmV3IE1hcDxBbGJ1bVJlYWREdG8sIFRyYWNrUmVhZER0b1tdPigpO1xuXG4gIGlmIChtYXN0ZXIudHJhY2tzKSB7XG4gICAgdHJhY2tzLnNldChtYXN0ZXIsIG1hc3Rlci50cmFja3MpO1xuICB9XG5cbiAgZGlzY3MuZm9yRWFjaCgoZGlzYykgPT4ge1xuICAgIGlmIChkaXNjLnRyYWNrcykge1xuICAgICAgLy8gU29ydCB0cmFja3MgYnkgaW5kZXhcbiAgICAgIGRpc2MudHJhY2tzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXghIC0gYi5pbmRleCEpO1xuICAgICAgdHJhY2tzLnNldChkaXNjLCBkaXNjLnRyYWNrcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge1xuICAgIG1hc3RlckFsYnVtOiBtYXN0ZXIsXG4gICAgZGlzY3MsXG4gICAgdHJhY2tzLFxuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZVZpZXdNb2RlbCA9IChcbiAgbWFzdGVyOiBBbGJ1bVJlYWREdG8sXG4gIGRpc2NzOiBBbGJ1bVJlYWREdG9bXVxuKTogQWxidW1QYWdlVmlld01vZGVsID0+IHtcbiAgaWYgKGRpc2NzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVZpZXdNb2RlbE11bHRpRGlzYyhtYXN0ZXIsIGRpc2NzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaW5pdGlhbGl6ZVZpZXdNb2RlbFNpbmdsZURpc2MobWFzdGVyKTtcbiAgfVxufTtcblxuY29uc3QgbG9hZE11bHRpRGlzY0FsYnVtID0gYXN5bmMgKFxuICBtYXN0ZXJBbGJ1bUlkOiBzdHJpbmdcbik6IFByb21pc2U8e1xuICBtYXN0ZXI6IEFsYnVtUmVhZER0bztcbiAgZGlzY3M6IEFsYnVtUmVhZER0b1tdO1xufT4gPT4ge1xuICBjb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShcbiAgICBhcGlDb25maWdQcm92aWRlci5nZXRBcGlDb25maWd1cmF0aW9uV2l0aEF1dGgoKVxuICApO1xuXG4gIGNvbnN0IG1hc3RlckFsYnVtID0gYXdhaXQgYWxidW1BcGkuZ2V0QWxidW0oe1xuICAgIGlkOiBtYXN0ZXJBbGJ1bUlkLFxuICB9KTtcblxuICBjb25zdCBkaXNjcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIG1hc3RlckFsYnVtLmNoaWxkQWxidW1zPy5tYXAoKGNoaWxkQWxidW0pID0+XG4gICAgICBhbGJ1bUFwaS5nZXRBbGJ1bSh7XG4gICAgICAgIGlkOiBjaGlsZEFsYnVtLmlkISxcbiAgICAgIH0pXG4gICAgKSB8fCBbXVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgbWFzdGVyOiBtYXN0ZXJBbGJ1bSxcbiAgICBkaXNjczogZGlzY3MsXG4gIH07XG59O1xuXG5jb25zdCBsb2FkID0gYXN5bmMgKGFsYnVtSWQ6IHN0cmluZykgPT4ge1xuICBjb250cm9sbGVyLnNldExvYWRpbmcoKTtcbiAgdHJ5IHtcbiAgICBjb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShcbiAgICAgIGFwaUNvbmZpZ1Byb3ZpZGVyLmdldEFwaUNvbmZpZ3VyYXRpb25XaXRoQXV0aCgpXG4gICAgKTtcblxuICAgIGNvbnN0IGFsYnVtID0gYXdhaXQgYWxidW1BcGkuZ2V0QWxidW0oe1xuICAgICAgaWQ6IGFsYnVtSWQsXG4gICAgfSk7XG5cbiAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIHRoZSBhbGJ1bSBoYXMgZGlzY3Mgb3IgdGhlIGFsYnVtIGl0c2VsZiBpcyBhIGRpc2NzXG4gICAgY29uc3QgaXNNdWx0aURpc2MgPVxuICAgICAgYWxidW0ucGFyZW50QWxidW0gfHwgKGFsYnVtPy5jaGlsZEFsYnVtcz8ubGVuZ3RoIHx8IDApID4gMDtcblxuICAgIGxldCB2aWV3TW9kZWw6IEFsYnVtUGFnZVZpZXdNb2RlbDtcbiAgICBpZiAoaXNNdWx0aURpc2MpIHtcbiAgICAgIGNvbnN0IGlzTWFzdGVyID0gIWFsYnVtLnBhcmVudEFsYnVtICYmIGFsYnVtLmRpc2NOdW1iZXIgPT09IDA7XG4gICAgICBpZiAoIWlzTWFzdGVyKSB7XG4gICAgICAgICRyb3V0ZXIucmVwbGFjZSh7XG4gICAgICAgICAgbmFtZTogJ0FsYnVtJyxcbiAgICAgICAgICBwYXJhbXM6IHsgYWxidW1JZDogYWxidW0ucGFyZW50QWxidW0hLmlkISB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFzdGVyQWxidW1JZCA9IGFsYnVtLmlkITtcbiAgICAgIGNvbnN0IHsgbWFzdGVyLCBkaXNjcyB9ID0gYXdhaXQgbG9hZE11bHRpRGlzY0FsYnVtKG1hc3RlckFsYnVtSWQpO1xuXG4gICAgICB2aWV3TW9kZWwgPSBpbml0aWFsaXplVmlld01vZGVsKG1hc3RlciwgZGlzY3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aWV3TW9kZWwgPSBpbml0aWFsaXplVmlld01vZGVsKGFsYnVtLCBbXSk7XG4gICAgfVxuXG4gICAgY29udHJvbGxlci5zZXRTdWNjZXNzKHZpZXdNb2RlbCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29udHJvbGxlci5zZXRFcnJvcihlcnJvciBhcyBFcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmNvbnN0IHNob3dBbGJ1bUFzc2V0RGlhbG9nID0gKGFsYnVtOiBBbGJ1bVJlYWREdG8pID0+IHtcbiAgJHEuZGlhbG9nKFxuICAgIHtcbiAgICAgIGNvbXBvbmVudDogQWxidW1Bc3NldHNWaWV3ZXJEaWFsb2csXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBhbGJ1bSxcbiAgICAgIH1cbiAgICB9XG4gICk7XG59XG5cbmNvbnN0IHBsYXlBbGJ1bSA9ICh2aWV3TW9kZWw6IEFsYnVtUGFnZVZpZXdNb2RlbCwgYWRkTW9kZTogUXVldWVBZGRNb2RlKSA9PiB7XG4gIGNvbnN0IHRyYWNrcyA9IEFycmF5LmZyb20odmlld01vZGVsLnRyYWNrcy52YWx1ZXMoKSlcbiAgICAucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XG5cbiAgY29uc3QgdHJhY2tJZHMgPSB0cmFja3MubWFwKCh0cmFjaykgPT4gdHJhY2suaWQhKTtcblxuICBxdWV1ZVNlcnZpY2U/LmFkZFRyYWNrc0J5SWRzKHRyYWNrSWRzLCBhZGRNb2RlKTtcbn07XG5cbi8vIGJpbmQgaG9va3MgdG8gdXBkYXRlIGNvbnRyb2xsZXIgaWYgdGhlIHJvdXRlIGNoYW5nZXNcbm9uTW91bnRlZCgoKSA9PiB7XG4gIGxvYWQocm91dGVQYXJhbXMuYWxidW1JZC52YWx1ZSBhcyBzdHJpbmcpO1xuXG4gIHdhdGNoKHJvdXRlUGFyYW1zLmFsYnVtSWQsIGFzeW5jIChhbGJ1bUlkKSA9PiB7XG4gICAgYXdhaXQgbG9hZChhbGJ1bUlkIGFzIHN0cmluZyk7XG4gIH0pO1xufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxuLmJvZHktLWxpZ2h0IC5saWtlLWJ0biB7XG4gIGNvbG9yOiAkbmVnYXRpdmVcbn1cblxuLmJvZHktLWRhcmsgLmxpa2UtYnRuIHtcbiAgY29sb3I6ICRuZWdhdGl2ZVxufVxuXG4uYm9keS0tZGFyayAucGxheS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50XG59XG5cbi5ib2R5LS1saWdodCAucGxheS1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50XG59XG5cbi5ib2R5LS1saWdodCAuYWxidW0tcGFnZS1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNkZmRmZGYsICRhbHBoYTogMC40KVxufVxuXG4uYm9keS0tZGFyayAuYWxidW0tcGFnZS1ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KVxufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJkZWYiLCJsYXN0UGFnZSIsInByb3BzIiwiX2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRkEsVUFBTSxVQUFVO0FBQ2hCLFVBQU0sUUFBUTtBQUNkLFVBQU0sc0JBQXNCLE1BQWlDOztBQUMzRCxZQUFNLGdCQUFlLFdBQU0sTUFBTSxnQkFBWixtQkFBeUIsT0FBTyxDQUFDLEtBQUssV0FBVztBQUNoRSxZQUFBLE9BQU8sTUFBTyxPQUFPO0FBQ2xCLGVBQUE7QUFBQSxNQUNULEdBQUcsQ0FBb0M7QUFFL0IsY0FBQSxJQUFJLGdCQUFnQixZQUFZO0FBRWpDLGFBQUE7QUFBQSxRQUNMLGFBQVcsV0FBTSxNQUFNLFNBQVosbUJBQWtCLGFBQVk7QUFBQSxRQUN6QztBQUFBLFFBQ0EsaUJBQWUsaUJBQU0sTUFBTSxjQUFaLG1CQUF1QixVQUF2QixtQkFBOEIsUUFBTztBQUFBLFFBQ3BELGFBQWEsTUFBTSxNQUFNLGVBQWU7QUFBQSxRQUN4QyxhQUFhLE1BQU0sTUFBTSxjQUFjLENBQUM7QUFBQSxNQUFBO0FBQUEsSUFDMUM7QUFHRixVQUFNLFlBQXVDO0FBRXZDLFVBQUEsYUFBYSxDQUFDLGFBQXFCO0FBQ3ZDLGNBQVEsS0FBSztBQUFBLFFBQ1gsTUFBTTtBQUFBLFFBQ04sUUFBUSxFQUFFLFVBQVUsTUFBTSxJQUFJO0FBQUEsTUFBQSxDQUMvQjtBQUFBLElBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4R0gsSUFBQSxNQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxFQUNaO0FBQUEsRUFFRCxPQUFPLENBQUUsT0FBUztBQUFBLEVBRWxCLE1BQU8sT0FBTyxFQUFFLE9BQU8sS0FBSSxHQUFJO0FBQzdCLFVB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

import { j as createComponent, h, k as hSlot, n as hUniqueSlot, ad as QIcon, g as getCurrentInstance, c as computed, q as useDarkProps, v as useDark, r as ref, w as watch, b9 as onBeforeMount, o as onMounted, aB as onActivated, aA as onDeactivated, m as onBeforeUnmount, aU as getScrollTarget, aZ as listenOpts, I as hMergeSlot, b5 as useSizeProps, b6 as useSize, bF as vmHasRouter, bG as History, a1 as isNumber, bH as isDate, a2 as isObject, A as nextTick, bI as injectMultipleProps, bw as QCheckbox, bJ as injectProp, Y as QBtn, ai as QSeparator } from "./index.d8725c78.js";
import { Q as QList } from "./QList.b67fdb16.js";
import { u as useVirtualScrollProps, c as useVirtualScroll, d as commonVirtPropsList, a as QSelect } from "./QSelect.a560c2a5.js";
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
        if (col === void 0) {
          return;
        }
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
      if (col === void 0) {
        return;
      }
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
    scrollTarget: {
      default: void 0
    }
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
    if (inFullscreen.value === true) {
      return;
    }
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
    if (inFullscreen.value !== true) {
      return;
    }
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
      rowsPerPage: props.rowsPerPageOptions.length > 0 ? props.rowsPerPageOptions[0] : 5
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
    if (lastPage2 === oldLastPage) {
      return;
    }
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
    () => computedRows.value.length > 0 && computedRows.value.every(
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
const commonVirtPropsObj = {};
commonVirtPropsList.forEach((p) => {
  commonVirtPropsObj[p] = {};
});
var QTable = createComponent({
  name: "QTable",
  props: {
    rows: {
      type: Array,
      default: () => []
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
    virtualScrollTarget: {
      default: void 0
    },
    ...commonVirtPropsObj,
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
      commonVirtPropsList.forEach((p) => {
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
          emit("RowClick", evt, row, pageIndex);
        };
      }
      if (props.onRowDblclick !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onDblclick = (evt) => {
          emit("RowDblclick", evt, row, pageIndex);
        };
      }
      if (props.onRowContextmenu !== void 0) {
        data.class["cursor-pointer"] = true;
        data.onContextmenu = (evt) => {
          emit("RowContextmenu", evt, row, pageIndex);
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
      if (child.length === 0) {
        return;
      }
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
      if (props.hideBottom === true) {
        return;
      }
      if (nothingToDisplay.value === true) {
        if (props.hideNoData === true) {
          return;
        }
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
      if (child.length > 0) {
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
export { QTr as Q, QTh as a, QTd as b, QTable as c };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVRhYmxlLjQyMDVjZmI3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtZmlsdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1wYWdpbmF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctZXhwYW5kLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCwgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUaCcsXG5cbiAgcHJvcHM6IHtcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGF1dG9XaWR0aDogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbICdjbGljaycgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBvbkNsaWNrID0gZXZ0ID0+IHsgZW1pdCgnY2xpY2snLCBldnQpIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMucHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgndGgnLCB7XG4gICAgICAgICAgY2xhc3M6IHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgOiAnJyxcbiAgICAgICAgICBvbkNsaWNrXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgfVxuXG4gICAgICBsZXQgY29sLCBjaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IHZtLnZub2RlLmtleVxuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBjb2wgPSBwcm9wcy5wcm9wcy5jb2xzTWFwWyBuYW1lIF1cbiAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwKSB7IHJldHVybiB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sID0gcHJvcHMucHJvcHMuY29sXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2wuc29ydGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gY29sLmFsaWduID09PSAncmlnaHQnXG4gICAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICAgIGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG4gICAgICAgIGNoaWxkWyBhY3Rpb24gXShcbiAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICBjbGFzczogY29sLl9faWNvbkNsYXNzLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS5hcnJvd1VwXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IGNvbC5fX3RoQ2xhc3NcbiAgICAgICAgICArIChwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAnIHEtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnKSxcbiAgICAgICAgc3R5bGU6IGNvbC5oZWFkZXJTdHlsZSxcbiAgICAgICAgb25DbGljazogZXZ0ID0+IHtcbiAgICAgICAgICBjb2wuc29ydGFibGUgPT09IHRydWUgJiYgcHJvcHMucHJvcHMuc29ydChjb2wpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICBvbkNsaWNrKGV2dClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGgnLCBkYXRhLCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRyJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10cidcbiAgICAgICsgKHByb3BzLnByb3BzID09PSB2b2lkIDAgfHwgcHJvcHMucHJvcHMuaGVhZGVyID09PSB0cnVlID8gJycgOiAnICcgKyBwcm9wcy5wcm9wcy5fX3RyQ2xhc3MpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRyLS1uby1ob3ZlcicgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgndHInLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRkJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgYXV0b1dpZHRoOiBCb29sZWFuLFxuICAgIG5vSG92ZXI6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRkJyArIChwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAnIHEtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnKVxuICAgICAgKyAocHJvcHMubm9Ib3ZlciA9PT0gdHJ1ZSA/ICcgcS10ZC0tbm8taG92ZXInIDogJycpXG4gICAgICArICcgJ1xuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMucHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgndGQnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuYW1lID0gdm0udm5vZGUua2V5XG4gICAgICBjb25zdCBjb2wgPSAoXG4gICAgICAgIChwcm9wcy5wcm9wcy5jb2xzTWFwICE9PSB2b2lkIDAgPyBwcm9wcy5wcm9wcy5jb2xzTWFwWyBuYW1lIF0gOiBudWxsKVxuICAgICAgICB8fCBwcm9wcy5wcm9wcy5jb2xcbiAgICAgIClcblxuICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHsgcm93IH0gPSBwcm9wcy5wcm9wc1xuXG4gICAgICByZXR1cm4gaCgndGQnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlICsgY29sLl9fdGRDbGFzcyhyb3cpLFxuICAgICAgICBzdHlsZTogY29sLl9fdGRTdHlsZShyb3cpXG4gICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUxpc3QgZnJvbSAnLi4vaXRlbS9RTGlzdC5qcydcbmltcG9ydCBRTWFya3VwVGFibGUgZnJvbSAnLi4vbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcydcbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuLi90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQgfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGNvbXBzID0ge1xuICBsaXN0OiBRTGlzdCxcbiAgdGFibGU6IFFNYXJrdXBUYWJsZVxufVxuXG5jb25zdCB0eXBlT3B0aW9ucyA9IFsgJ2xpc3QnLCAndGFibGUnLCAnX19xdGFibGUnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FWaXJ0dWFsU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsaXN0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBpdGVtc0ZuOiBGdW5jdGlvbixcbiAgICBpdGVtc1NpemU6IE51bWJlcixcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgYXR0cnMgfSkge1xuICAgIGxldCBsb2NhbFNjcm9sbFRhcmdldFxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pdGVtc1NpemUgPj0gMCAmJiBwcm9wcy5pdGVtc0ZuICE9PSB2b2lkIDBcbiAgICAgICAgPyBwYXJzZUludChwcm9wcy5pdGVtc1NpemUsIDEwKVxuICAgICAgICA6IChBcnJheS5pc0FycmF5KHByb3BzLml0ZW1zKSA/IHByb3BzLml0ZW1zLmxlbmd0aCA6IDApXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsXG4gICAgfSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBGbiA9IChpdGVtLCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSArIGksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwcm9wcy5pdGVtc0ZuID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5pdGVtcy5zbGljZSh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50bykubWFwKG1hcEZuKVxuICAgICAgICA6IHByb3BzLml0ZW1zRm4odmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKS5tYXAobWFwRm4pXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdmlydHVhbC1zY3JvbGwgcS12aXJ0dWFsLXNjcm9sbCcgKyAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnLS1ob3Jpem9udGFsJyA6ICctLXZlcnRpY2FsJylcbiAgICAgICsgKHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gJycgOiAnIHNjcm9sbCcpXG4gICAgKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8ge30gOiB7IHRhYmluZGV4OiAwIH1cbiAgICApKVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxFbCAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS4kZWwgfHwgcm9vdFJlZi52YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KGdldFZpcnR1YWxTY3JvbGxFbCgpLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfX2dldFZpcnR1YWxDaGlsZHJlbiAoKSB7XG4gICAgICBsZXQgY2hpbGQgPSBwYWRWaXJ0dWFsU2Nyb2xsKFxuICAgICAgICBwcm9wcy50eXBlID09PSAnbGlzdCcgPyAnZGl2JyA6ICd0Ym9keScsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxTY29wZS52YWx1ZS5tYXAoc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHNsb3RzLmJlZm9yZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gc2xvdHMuYmVmb3JlKCkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5hZnRlciwgY2hpbGQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzbG90cy5kZWZhdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUVZpcnR1YWxTY3JvbGw6IGRlZmF1bHQgc2NvcGVkIHNsb3QgaXMgcmVxdWlyZWQgZm9yIHJlbmRlcmluZycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHMudHlwZSA9PT0gJ19fcXRhYmxlJ1xuICAgICAgICA/IGdldFRhYmxlTWlkZGxlKFxuICAgICAgICAgIHsgcmVmOiByb290UmVmLCBjbGFzczogJ3EtdGFibGVfX21pZGRsZSAnICsgY2xhc3Nlcy52YWx1ZSB9LFxuICAgICAgICAgIF9fZ2V0VmlydHVhbENoaWxkcmVuKClcbiAgICAgICAgKVxuICAgICAgICA6IGgoY29tcHNbIHByb3BzLnR5cGUgXSwge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgICBjbGFzczogWyBhdHRycy5jbGFzcywgY2xhc3Nlcy52YWx1ZSBdLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWVcbiAgICAgICAgfSwgX19nZXRWaXJ0dWFsQ2hpbGRyZW4pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBkZWZhdWx0U2l6ZXMgPSB7XG4gIHhzOiAyLFxuICBzbTogNCxcbiAgbWQ6IDYsXG4gIGxnOiAxMCxcbiAgeGw6IDE0XG59XG5cbmZ1bmN0aW9uIHdpZHRoICh2YWwsIHJldmVyc2UsICRxKSB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNmb3JtOiByZXZlcnNlID09PSB0cnVlXG4gICAgICA/IGB0cmFuc2xhdGVYKCR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJy0nIDogJycgfTEwMCUpIHNjYWxlM2QoJHsgLXZhbCB9LDEsMSlgXG4gICAgICA6IGBzY2FsZTNkKCR7IHZhbCB9LDEsMSlgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FMaW5lYXJQcm9ncmVzcycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlU2l6ZVByb3BzLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGJ1ZmZlcjogTnVtYmVyLFxuXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0cmFja0NvbG9yOiBTdHJpbmcsXG5cbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHN0cmlwZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIHF1ZXJ5OiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBhbmltYXRpb25TcGVlZDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMjEwMFxuICAgIH0sXG5cbiAgICBpbnN0YW50RmVlZGJhY2s6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgcHJveHkuJHEpXG4gICAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgZGVmYXVsdFNpemVzKVxuXG4gICAgY29uc3QgbW90aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZSB8fCBwcm9wcy5xdWVyeSA9PT0gdHJ1ZSlcbiAgICBjb25zdCB3aWR0aFJldmVyc2UgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5yZXZlcnNlICE9PSBwcm9wcy5xdWVyeSlcbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi4oc2l6ZVN0eWxlLnZhbHVlICE9PSBudWxsID8gc2l6ZVN0eWxlLnZhbHVlIDoge30pLFxuICAgICAgJy0tcS1saW5lYXItcHJvZ3Jlc3Mtc3BlZWQnOiBgJHsgcHJvcHMuYW5pbWF0aW9uU3BlZWQgfW1zYFxuICAgIH0pKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3MnXG4gICAgICArIChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICArIChwcm9wcy5yZXZlcnNlID09PSB0cnVlIHx8IHByb3BzLnF1ZXJ5ID09PSB0cnVlID8gJyBxLWxpbmVhci1wcm9ncmVzcy0tcmV2ZXJzZScgOiAnJylcbiAgICAgICsgKHByb3BzLnJvdW5kZWQgPT09IHRydWUgPyAnIHJvdW5kZWQtYm9yZGVycycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4gd2lkdGgocHJvcHMuYnVmZmVyICE9PSB2b2lkIDAgPyBwcm9wcy5idWZmZXIgOiAxLCB3aWR0aFJldmVyc2UudmFsdWUsIHByb3h5LiRxKSlcbiAgICBjb25zdCB0cmFuc2l0aW9uU3VmZml4ID0gY29tcHV0ZWQoKCkgPT4gYHdpdGgkeyBwcm9wcy5pbnN0YW50RmVlZGJhY2sgPT09IHRydWUgPyAnb3V0JyA6ICcnIH0tdHJhbnNpdGlvbmApXG5cbiAgICBjb25zdCB0cmFja0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzc19fdHJhY2sgYWJzb2x1dGUtZnVsbCdcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fdHJhY2stLSR7IHRyYW5zaXRpb25TdWZmaXgudmFsdWUgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fdHJhY2stLSR7IGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICdkYXJrJyA6ICdsaWdodCcgfWBcbiAgICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG1vZGVsU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB3aWR0aChtb3Rpb24udmFsdWUgPT09IHRydWUgPyAxIDogcHJvcHMudmFsdWUsIHdpZHRoUmV2ZXJzZS52YWx1ZSwgcHJveHkuJHEpKVxuICAgIGNvbnN0IG1vZGVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzX19tb2RlbCBhYnNvbHV0ZS1mdWxsJ1xuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX19tb2RlbC0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX19tb2RlbC0tJHsgbW90aW9uLnZhbHVlID09PSB0cnVlID8gJ2luJyA6ICcnIH1kZXRlcm1pbmF0ZWBcbiAgICApXG5cbiAgICBjb25zdCBzdHJpcGVTdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7IHdpZHRoOiBgJHsgcHJvcHMudmFsdWUgKiAxMDAgfSVgIH0pKVxuICAgIGNvbnN0IHN0cmlwZUNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWxpbmVhci1wcm9ncmVzc19fc3RyaXBlIGFic29sdXRlLSR7IHByb3BzLnJldmVyc2UgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX3N0cmlwZS0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiB0cmFja0NsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogbW9kZWxDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogbW9kZWxTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5zdHJpcGUgPT09IHRydWUgJiYgbW90aW9uLnZhbHVlID09PSBmYWxzZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHN0cmlwZUNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBzdHJpcGVTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogMSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlXG4gICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICA6IHByb3BzLnZhbHVlXG4gICAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNoaWxkKSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5LmpzJ1xuaW1wb3J0IHsgdm1IYXNSb3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG5sZXQgY291bnRlciA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5Qcm9wcyA9IHtcbiAgZnVsbHNjcmVlbjogQm9vbGVhbixcbiAgbm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0OiBCb29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGdWxsc2NyZWVuRW1pdHMgPSBbICd1cGRhdGU6ZnVsbHNjcmVlbicsICdmdWxsc2NyZWVuJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cblxuICBsZXQgaGlzdG9yeUVudHJ5LCBmdWxsc2NyZWVuRmlsbGVyTm9kZSwgY29udGFpbmVyXG4gIGNvbnN0IGluRnVsbHNjcmVlbiA9IHJlZihmYWxzZSlcblxuICB2bUhhc1JvdXRlcih2bSkgPT09IHRydWUgJiYgd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCAoKSA9PiB7XG4gICAgcHJvcHMubm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0ICE9PSB0cnVlICYmIGV4aXRGdWxsc2NyZWVuKClcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5mdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB2KSB7XG4gICAgICB0b2dnbGVGdWxsc2NyZWVuKClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goaW5GdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBlbWl0KCd1cGRhdGU6ZnVsbHNjcmVlbicsIHYpXG4gICAgZW1pdCgnZnVsbHNjcmVlbicsIHYpXG4gIH0pXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IHRydWVcbiAgICBjb250YWluZXIgPSBwcm94eS4kZWwucGFyZW50Tm9kZVxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZnVsbHNjcmVlbkZpbGxlck5vZGUsIHByb3h5LiRlbClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb3h5LiRlbClcblxuICAgIGNvdW50ZXIrK1xuICAgIGlmIChjb3VudGVyID09PSAxKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tZnVsbHNjcmVlbi1taXhpbicpXG4gICAgfVxuXG4gICAgaGlzdG9yeUVudHJ5ID0ge1xuICAgICAgaGFuZGxlcjogZXhpdEZ1bGxzY3JlZW5cbiAgICB9XG4gICAgSGlzdG9yeS5hZGQoaGlzdG9yeUVudHJ5KVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm94eS4kZWwsIGZ1bGxzY3JlZW5GaWxsZXJOb2RlKVxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlXG5cbiAgICBjb3VudGVyID0gTWF0aC5tYXgoMCwgY291bnRlciAtIDEpXG5cbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuXG4gICAgICBpZiAocHJveHkuJGVsLnNjcm9sbEludG9WaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldygpIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgZnVsbHNjcmVlbkZpbGxlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUgJiYgc2V0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KGV4aXRGdWxsc2NyZWVuKVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICBzZXRGdWxsc2NyZWVuLFxuICAgIGV4aXRGdWxsc2NyZWVuXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbkZ1bGxzY3JlZW4sXG4gICAgdG9nZ2xlRnVsbHNjcmVlblxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc29ydERhdGUgKGEsIGIpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShhKSkgLSAobmV3IERhdGUoYikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0Qm9vbGVhbiAoYSwgYikge1xuICByZXR1cm4gYSAmJiAhYlxuICAgID8gLTFcbiAgICA6ICghYSAmJiBiID8gMSA6IDApXG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc29ydERhdGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3NvcnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNEYXRlLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVTb3J0UHJvcHMgPSB7XG4gIHNvcnRNZXRob2Q6IEZ1bmN0aW9uLFxuICBiaW5hcnlTdGF0ZVNvcnQ6IEJvb2xlYW4sXG4gIGNvbHVtblNvcnRPcmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA9PT0gJ2FkJyB8fCB2ID09PSAnZGEnLFxuICAgIGRlZmF1bHQ6ICdhZCdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVTb3J0IChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKSB7XG4gIGNvbnN0IGNvbHVtblRvU29ydCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHNvcnRCeSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gc29ydEJ5XG4gICAgICA/IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSkgfHwgbnVsbFxuICAgICAgOiBudWxsXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRTb3J0TWV0aG9kID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnNvcnRNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5zb3J0TWV0aG9kXG4gICAgICA6IChkYXRhLCBzb3J0QnksIGRlc2NlbmRpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2wgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBzb3J0QnkpXG4gICAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwIHx8IGNvbC5maWVsZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBkaXIgPSBkZXNjZW5kaW5nID09PSB0cnVlID8gLTEgOiAxLFxuICAgICAgICAgICAgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IHYgPT4gY29sLmZpZWxkKHYpXG4gICAgICAgICAgICAgIDogdiA9PiB2WyBjb2wuZmllbGQgXVxuXG4gICAgICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgIEEgPSB2YWwoYSksXG4gICAgICAgICAgICAgIEIgPSB2YWwoYilcblxuICAgICAgICAgICAgaWYgKEEgPT09IG51bGwgfHwgQSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAtMSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEIgPT09IG51bGwgfHwgQiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sLnNvcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gY29sLnNvcnQoQSwgQiwgYSwgYikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc051bWJlcihBKSA9PT0gdHJ1ZSAmJiBpc051bWJlcihCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKEEgLSBCKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGF0ZShBKSA9PT0gdHJ1ZSAmJiBpc0RhdGUoQikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNvcnREYXRlKEEsIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIEEgPT09ICdib29sZWFuJyAmJiB0eXBlb2YgQiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFsgQSwgQiBdID0gWyBBLCBCIF0ubWFwKHMgPT4gKHMgKyAnJykudG9Mb2NhbGVTdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICAgICAgICByZXR1cm4gQSA8IEJcbiAgICAgICAgICAgICAgPyAtMSAqIGRpclxuICAgICAgICAgICAgICA6IChBID09PSBCID8gMCA6IGRpcilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICkpXG5cbiAgZnVuY3Rpb24gc29ydCAoY29sIC8qIFN0cmluZyhjb2wgbmFtZSkgb3IgT2JqZWN0KGNvbCBkZWZpbml0aW9uKSAqLykge1xuICAgIGxldCBzb3J0T3JkZXIgPSBwcm9wcy5jb2x1bW5Tb3J0T3JkZXJcblxuICAgIGlmIChpc09iamVjdChjb2wpID09PSB0cnVlKSB7XG4gICAgICBpZiAoY29sLnNvcnRPcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBjb2wuc29ydE9yZGVyXG4gICAgICB9XG5cbiAgICAgIGNvbCA9IGNvbC5uYW1lXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZGVmID0gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gY29sKVxuICAgICAgaWYgKGRlZiAhPT0gdm9pZCAwICYmIGRlZi5zb3J0T3JkZXIpIHtcbiAgICAgICAgc29ydE9yZGVyID0gZGVmLnNvcnRPcmRlclxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICBpZiAoc29ydEJ5ICE9PSBjb2wpIHtcbiAgICAgIHNvcnRCeSA9IGNvbFxuICAgICAgZGVzY2VuZGluZyA9IHNvcnRPcmRlciA9PT0gJ2RhJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5iaW5hcnlTdGF0ZVNvcnQgPT09IHRydWUpIHtcbiAgICAgIGRlc2NlbmRpbmcgPSAhZGVzY2VuZGluZ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZXNjZW5kaW5nID09PSB0cnVlKSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXNjZW5kaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7IC8vIGFzY2VuZGluZ1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gJ2FkJykge1xuICAgICAgICBkZXNjZW5kaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWdpbmF0aW9uKHsgc29ydEJ5LCBkZXNjZW5kaW5nLCBwYWdlOiAxIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbHVtblRvU29ydCxcbiAgICBjb21wdXRlZFNvcnRNZXRob2QsXG4gICAgc29ydFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVGaWx0ZXJQcm9wcyA9IHtcbiAgZmlsdGVyOiBbIFN0cmluZywgT2JqZWN0IF0sXG4gIGZpbHRlck1ldGhvZDogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlRmlsdGVyIChwcm9wcywgc2V0UGFnaW5hdGlvbikge1xuICBjb25zdCBjb21wdXRlZEZpbHRlck1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5maWx0ZXJNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5maWx0ZXJNZXRob2RcbiAgICAgIDogKHJvd3MsIHRlcm1zLCBjb2xzLCBjZWxsVmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlclRlcm1zID0gdGVybXMgPyB0ZXJtcy50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIoXG4gICAgICAgICAgICByb3cgPT4gY29scy5zb21lKGNvbCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNlbGxWYWx1ZShjb2wsIHJvdykgKyAnJ1xuICAgICAgICAgICAgICBjb25zdCBoYXlzdGFjayA9ICh2YWwgPT09ICd1bmRlZmluZWQnIHx8IHZhbCA9PT0gJ251bGwnKSA/ICcnIDogdmFsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobG93ZXJUZXJtcykgIT09IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICApKVxuXG4gIHdhdGNoKFxuICAgICgpID0+IHByb3BzLmZpbHRlcixcbiAgICAoKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0sIHRydWUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgeyBkZWVwOiB0cnVlIH1cbiAgKVxuXG4gIHJldHVybiB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gc2FtZVBhZ2luYXRpb24gKG9sZFBhZywgbmV3UGFnKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBuZXdQYWcpIHtcbiAgICBpZiAobmV3UGFnWyBwcm9wIF0gIT09IG9sZFBhZ1sgcHJvcCBdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZml4UGFnaW5hdGlvbiAocCkge1xuICBpZiAocC5wYWdlIDwgMSkge1xuICAgIHAucGFnZSA9IDFcbiAgfVxuICBpZiAocC5yb3dzUGVyUGFnZSAhPT0gdm9pZCAwICYmIHAucm93c1BlclBhZ2UgPCAxKSB7XG4gICAgcC5yb3dzUGVyUGFnZSA9IDBcbiAgfVxuICByZXR1cm4gcFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgPSB7XG4gIHBhZ2luYXRpb246IE9iamVjdCxcbiAgcm93c1BlclBhZ2VPcHRpb25zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gWyA1LCA3LCAxMCwgMTUsIDIwLCAyNSwgNTAsIDAgXVxuICB9LFxuXG4gICdvblVwZGF0ZTpwYWdpbmF0aW9uJzogWyBGdW5jdGlvbiwgQXJyYXkgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUgKHZtLCBnZXRDZWxsVmFsdWUpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCB9ID0gdm1cblxuICBjb25zdCBpbm5lclBhZ2luYXRpb24gPSByZWYoXG4gICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICBkZXNjZW5kaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICByb3dzUGVyUGFnZTogcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgPyBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnNbIDAgXVxuICAgICAgICA6IDVcbiAgICB9LCBwcm9wcy5wYWdpbmF0aW9uKVxuICApXG5cbiAgY29uc3QgY29tcHV0ZWRQYWdpbmF0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHBhZyA9IHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgICA/IHsgLi4uaW5uZXJQYWdpbmF0aW9uLnZhbHVlLCAuLi5wcm9wcy5wYWdpbmF0aW9uIH1cbiAgICAgIDogaW5uZXJQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gZml4UGFnaW5hdGlvbihwYWcpXG4gIH0pXG5cbiAgY29uc3QgaXNTZXJ2ZXJTaWRlID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NOdW1iZXIgIT09IHZvaWQgMClcblxuICBmdW5jdGlvbiBzZW5kU2VydmVyUmVxdWVzdCAocGFnaW5hdGlvbikge1xuICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbih7XG4gICAgICBwYWdpbmF0aW9uLFxuICAgICAgZmlsdGVyOiBwcm9wcy5maWx0ZXJcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWVzdFNlcnZlckludGVyYWN0aW9uIChwcm9wID0ge30pIHtcbiAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICBlbWl0KCdyZXF1ZXN0Jywge1xuICAgICAgICBwYWdpbmF0aW9uOiBwcm9wLnBhZ2luYXRpb24gfHwgY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgICBmaWx0ZXI6IHByb3AuZmlsdGVyIHx8IHByb3BzLmZpbHRlcixcbiAgICAgICAgZ2V0Q2VsbFZhbHVlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzZXRQYWdpbmF0aW9uICh2YWwsIGZvcmNlU2VydmVyUmVxdWVzdCkge1xuICAgIGNvbnN0IG5ld1BhZ2luYXRpb24gPSBmaXhQYWdpbmF0aW9uKHtcbiAgICAgIC4uLmNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgIC4uLnZhbFxuICAgIH0pXG5cbiAgICBpZiAoc2FtZVBhZ2luYXRpb24oY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLCBuZXdQYWdpbmF0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSAmJiBmb3JjZVNlcnZlclJlcXVlc3QgPT09IHRydWUpIHtcbiAgICAgICAgc2VuZFNlcnZlclJlcXVlc3QobmV3UGFnaW5hdGlvbilcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHNlbmRTZXJ2ZXJSZXF1ZXN0KG5ld1BhZ2luYXRpb24pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9wcy5wYWdpbmF0aW9uICE9PSB2b2lkIDBcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6cGFnaW5hdGlvbicsIG5ld1BhZ2luYXRpb24pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5uZXJQYWdpbmF0aW9uLnZhbHVlID0gbmV3UGFnaW5hdGlvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5uZXJQYWdpbmF0aW9uLFxuICAgIGNvbXB1dGVkUGFnaW5hdGlvbixcbiAgICBpc1NlcnZlclNpZGUsXG5cbiAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgc2V0UGFnaW5hdGlvblxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVBhZ2luYXRpb24gKHZtLCBpbm5lclBhZ2luYXRpb24sIGNvbXB1dGVkUGFnaW5hdGlvbiwgaXNTZXJ2ZXJTaWRlLCBzZXRQYWdpbmF0aW9uLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICBjb25zdCBjb21wdXRlZFJvd3NOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICA/IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzTnVtYmVyIHx8IDBcbiAgICAgIDogZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyLnZhbHVlXG4gICkpXG5cbiAgY29uc3QgZmlyc3RSb3dJbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICByZXR1cm4gKHBhZ2UgLSAxKSAqIHJvd3NQZXJQYWdlXG4gIH0pXG5cbiAgY29uc3QgbGFzdFJvd0luZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIHJldHVybiBwYWdlICogcm93c1BlclBhZ2VcbiAgfSlcblxuICBjb25zdCBpc0ZpcnN0UGFnZSA9IGNvbXB1dGVkKCgpID0+IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5wYWdlID09PSAxKVxuXG4gIGNvbnN0IHBhZ2VzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSA9PT0gMFxuICAgICAgPyAxXG4gICAgICA6IE1hdGgubWF4KFxuICAgICAgICAxLFxuICAgICAgICBNYXRoLmNlaWwoY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlIC8gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlKVxuICAgICAgKVxuICApKVxuXG4gIGNvbnN0IGlzTGFzdFBhZ2UgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgbGFzdFJvd0luZGV4LnZhbHVlID09PSAwXG4gICAgICA/IHRydWVcbiAgICAgIDogY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2UgPj0gcGFnZXNOdW1iZXIudmFsdWVcbiAgKSlcblxuICBjb25zdCBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBvcHRzID0gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmluY2x1ZGVzKGlubmVyUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSlcbiAgICAgID8gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zXG4gICAgICA6IFsgaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlIF0uY29uY2F0KHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucylcblxuICAgIHJldHVybiBvcHRzLm1hcChjb3VudCA9PiAoe1xuICAgICAgbGFiZWw6IGNvdW50ID09PSAwID8gJHEubGFuZy50YWJsZS5hbGxSb3dzIDogJycgKyBjb3VudCxcbiAgICAgIHZhbHVlOiBjb3VudFxuICAgIH0pKVxuICB9KVxuXG4gIHdhdGNoKHBhZ2VzTnVtYmVyLCAobGFzdFBhZ2UsIG9sZExhc3RQYWdlKSA9PiB7XG4gICAgaWYgKGxhc3RQYWdlID09PSBvbGRMYXN0UGFnZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZVxuICAgIGlmIChsYXN0UGFnZSAmJiAhY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RQYWdlIDwgY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBsYXN0UGFnZSB9KVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBmaXJzdFBhZ2UgKCkge1xuICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmV2UGFnZSAoKSB7XG4gICAgY29uc3QgeyBwYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlIC0gMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRQYWdlICgpIHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAobGFzdFJvd0luZGV4LnZhbHVlID4gMCAmJiBwYWdlICogcm93c1BlclBhZ2UgPCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlICsgMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxhc3RQYWdlICgpIHtcbiAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZXNOdW1iZXIudmFsdWUgfSlcbiAgfVxuXG4gIGlmIChwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgeyAuLi5jb21wdXRlZFBhZ2luYXRpb24udmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlyc3RSb3dJbmRleCxcbiAgICBsYXN0Um93SW5kZXgsXG4gICAgaXNGaXJzdFBhZ2UsXG4gICAgaXNMYXN0UGFnZSxcbiAgICBwYWdlc051bWJlcixcbiAgICBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICBmaXJzdFBhZ2UsXG4gICAgcHJldlBhZ2UsXG4gICAgbmV4dFBhZ2UsXG4gICAgbGFzdFBhZ2VcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzID0ge1xuICBzZWxlY3Rpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ25vbmUnLFxuICAgIHZhbGlkYXRvcjogdiA9PiBbICdzaW5nbGUnLCAnbXVsdGlwbGUnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICB9LFxuICBzZWxlY3RlZDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgPSBbICd1cGRhdGU6c2VsZWN0ZWQnLCAnc2VsZWN0aW9uJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd1NlbGVjdGlvbiAocHJvcHMsIGVtaXQsIGNvbXB1dGVkUm93cywgZ2V0Um93S2V5KSB7XG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0ge31cbiAgICBwcm9wcy5zZWxlY3RlZC5tYXAoZ2V0Um93S2V5LnZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBrZXlzWyBrZXkgXSA9IHRydWVcbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH0pXG5cbiAgY29uc3QgaGFzU2VsZWN0aW9uTW9kZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uICE9PSAnbm9uZSdcbiAgfSlcblxuICBjb25zdCBzaW5nbGVTZWxlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiA9PT0gJ3NpbmdsZSdcbiAgfSlcblxuICBjb25zdCBtdWx0aXBsZVNlbGVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uID09PSAnbXVsdGlwbGUnXG4gIH0pXG5cbiAgY29uc3QgYWxsUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoID4gMCAmJiBjb21wdXRlZFJvd3MudmFsdWUuZXZlcnkoXG4gICAgICByb3cgPT4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBnZXRSb3dLZXkudmFsdWUocm93KSBdID09PSB0cnVlXG4gICAgKVxuICApXG5cbiAgY29uc3Qgc29tZVJvd3NTZWxlY3RlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgYWxsUm93c1NlbGVjdGVkLnZhbHVlICE9PSB0cnVlXG4gICAgJiYgY29tcHV0ZWRSb3dzLnZhbHVlLnNvbWUocm93ID0+IHNlbGVjdGVkS2V5cy52YWx1ZVsgZ2V0Um93S2V5LnZhbHVlKHJvdykgXSA9PT0gdHJ1ZSlcbiAgKVxuXG4gIGNvbnN0IHJvd3NTZWxlY3RlZE51bWJlciA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkLmxlbmd0aClcblxuICBmdW5jdGlvbiBpc1Jvd1NlbGVjdGVkIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBrZXkgXSA9PT0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24gKCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZCcsIFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9uIChrZXlzLCByb3dzLCBhZGRlZCwgZXZ0KSB7XG4gICAgZW1pdCgnc2VsZWN0aW9uJywgeyByb3dzLCBhZGRlZCwga2V5cywgZXZ0IH0pXG5cbiAgICBjb25zdCBwYXlsb2FkID0gc2luZ2xlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlXG4gICAgICA/IChhZGRlZCA9PT0gdHJ1ZSA/IHJvd3MgOiBbXSlcbiAgICAgIDogKFxuICAgICAgICAgIGFkZGVkID09PSB0cnVlXG4gICAgICAgICAgICA/IHByb3BzLnNlbGVjdGVkLmNvbmNhdChyb3dzKVxuICAgICAgICAgICAgOiBwcm9wcy5zZWxlY3RlZC5maWx0ZXIoXG4gICAgICAgICAgICAgIHJvdyA9PiBrZXlzLmluY2x1ZGVzKGdldFJvd0tleS52YWx1ZShyb3cpKSA9PT0gZmFsc2VcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgcGF5bG9hZClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFzU2VsZWN0aW9uTW9kZSxcbiAgICBzaW5nbGVTZWxlY3Rpb24sXG4gICAgbXVsdGlwbGVTZWxlY3Rpb24sXG4gICAgYWxsUm93c1NlbGVjdGVkLFxuICAgIHNvbWVSb3dzU2VsZWN0ZWQsXG4gICAgcm93c1NlbGVjdGVkTnVtYmVyLFxuXG4gICAgaXNSb3dTZWxlY3RlZCxcbiAgICBjbGVhclNlbGVjdGlvbixcbiAgICB1cGRhdGVTZWxlY3Rpb25cbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gZ2V0VmFsICh2YWwpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKVxuICAgID8gdmFsLnNsaWNlKClcbiAgICA6IFtdXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd0V4cGFuZFByb3BzID0ge1xuICBleHBhbmRlZDogQXJyYXkgLy8gdi1tb2RlbDpleHBhbmRlZFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyA9IFsgJ3VwZGF0ZTpleHBhbmRlZCcgXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVSb3dFeHBhbmQgKHByb3BzLCBlbWl0KSB7XG4gIGNvbnN0IGlubmVyRXhwYW5kZWQgPSByZWYoZ2V0VmFsKHByb3BzLmV4cGFuZGVkKSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5leHBhbmRlZCwgdmFsID0+IHtcbiAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gZ2V0VmFsKHZhbClcbiAgfSlcblxuICBmdW5jdGlvbiBpc1Jvd0V4cGFuZGVkIChrZXkpIHtcbiAgICByZXR1cm4gaW5uZXJFeHBhbmRlZC52YWx1ZS5pbmNsdWRlcyhrZXkpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRFeHBhbmRlZCAodmFsKSB7XG4gICAgaWYgKHByb3BzLmV4cGFuZGVkICE9PSB2b2lkIDApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpleHBhbmRlZCcsIHZhbClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gdmFsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRXhwYW5kZWQgKGtleSwgYWRkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaW5uZXJFeHBhbmRlZC52YWx1ZS5zbGljZSgpXG4gICAgY29uc3QgaW5kZXggPSB0YXJnZXQuaW5kZXhPZihrZXkpXG5cbiAgICBpZiAoYWRkID09PSB0cnVlKSB7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRhcmdldC5wdXNoKGtleSlcbiAgICAgICAgc2V0RXhwYW5kZWQodGFyZ2V0KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRhcmdldC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzZXRFeHBhbmRlZCh0YXJnZXQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1Jvd0V4cGFuZGVkLFxuICAgIHNldEV4cGFuZGVkLFxuICAgIHVwZGF0ZUV4cGFuZGVkXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb25Qcm9wcyA9IHtcbiAgdmlzaWJsZUNvbHVtbnM6IEFycmF5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbiAocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgaGFzU2VsZWN0aW9uTW9kZSkge1xuICBjb25zdCBjb2xMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5jb2x1bW5zICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2x1bW5zXG4gICAgfVxuXG4gICAgLy8gd2UgaW5mZXIgY29sdW1ucyBmcm9tIGZpcnN0IHJvd1xuICAgIGNvbnN0IHJvdyA9IHByb3BzLnJvd3NbIDAgXVxuXG4gICAgcmV0dXJuIHJvdyAhPT0gdm9pZCAwXG4gICAgICA/IE9iamVjdC5rZXlzKHJvdykubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGFiZWw6IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgZmllbGQ6IG5hbWUsXG4gICAgICAgIGFsaWduOiBpc051bWJlcihyb3dbIG5hbWUgXSkgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSkpXG4gICAgICA6IFtdXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIGNvbnN0IGNvbHMgPSBwcm9wcy52aXNpYmxlQ29sdW1ucyAhPT0gdm9pZCAwXG4gICAgICA/IGNvbExpc3QudmFsdWUuZmlsdGVyKGNvbCA9PiBjb2wucmVxdWlyZWQgPT09IHRydWUgfHwgcHJvcHMudmlzaWJsZUNvbHVtbnMuaW5jbHVkZXMoY29sLm5hbWUpID09PSB0cnVlKVxuICAgICAgOiBjb2xMaXN0LnZhbHVlXG5cbiAgICByZXR1cm4gY29scy5tYXAoY29sID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gY29sLmFsaWduIHx8ICdyaWdodCdcbiAgICAgIGNvbnN0IGFsaWduQ2xhc3MgPSBgdGV4dC0keyBhbGlnbiB9YFxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb2wsXG4gICAgICAgIGFsaWduLFxuICAgICAgICBfX2ljb25DbGFzczogYHEtdGFibGVfX3NvcnQtaWNvbiBxLXRhYmxlX19zb3J0LWljb24tLSR7IGFsaWduIH1gLFxuICAgICAgICBfX3RoQ2xhc3M6IGFsaWduQ2xhc3NcbiAgICAgICAgICArIChjb2wuaGVhZGVyQ2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgY29sLmhlYWRlckNsYXNzZXMgOiAnJylcbiAgICAgICAgICArIChjb2wuc29ydGFibGUgPT09IHRydWUgPyAnIHNvcnRhYmxlJyA6ICcnKVxuICAgICAgICAgICsgKGNvbC5uYW1lID09PSBzb3J0QnkgPyBgIHNvcnRlZCAkeyBkZXNjZW5kaW5nID09PSB0cnVlID8gJ3NvcnQtZGVzYycgOiAnJyB9YCA6ICcnKSxcblxuICAgICAgICBfX3RkU3R5bGU6IGNvbC5zdHlsZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb2wuc3R5bGUgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGNvbC5zdHlsZVxuICAgICAgICAgICAgICAgIDogY29sLnN0eWxlXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBudWxsLFxuXG4gICAgICAgIF9fdGRDbGFzczogY29sLmNsYXNzZXMgIT09IHZvaWQgMFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgICB0eXBlb2YgY29sLmNsYXNzZXMgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlc1xuICAgICAgICAgICAgICAgIDogcm93ID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlcyhyb3cpXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBhbGlnbkNsYXNzXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSB7fVxuICAgIGNvbXB1dGVkQ29scy52YWx1ZS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICBuYW1lc1sgY29sLm5hbWUgXSA9IGNvbFxuICAgIH0pXG4gICAgcmV0dXJuIG5hbWVzXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzcGFuID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy50YWJsZUNvbHNwYW4gIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy50YWJsZUNvbHNwYW5cbiAgICAgIDogY29tcHV0ZWRDb2xzLnZhbHVlLmxlbmd0aCArIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlID8gMSA6IDApXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBjb2xMaXN0LFxuICAgIGNvbXB1dGVkQ29scyxcbiAgICBjb21wdXRlZENvbHNNYXAsXG4gICAgY29tcHV0ZWRDb2xzcGFuXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRVGggZnJvbSAnLi9RVGguanMnXG5cbmltcG9ydCBRU2VwYXJhdG9yIGZyb20gJy4uL3NlcGFyYXRvci9RU2VwYXJhdG9yLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVZpcnR1YWxTY3JvbGwgZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvUVZpcnR1YWxTY3JvbGwuanMnXG5pbXBvcnQgUVNlbGVjdCBmcm9tICcuLi9zZWxlY3QvUVNlbGVjdC5qcydcbmltcG9ydCBRTGluZWFyUHJvZ3Jlc3MgZnJvbSAnLi4vbGluZWFyLXByb2dyZXNzL1FMaW5lYXJQcm9ncmVzcy5qcydcbmltcG9ydCBRQ2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3gvUUNoZWNrYm94LmpzJ1xuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5cbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuL2dldC10YWJsZS1taWRkbGUuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyBjb21tb25WaXJ0UHJvcHNMaXN0IH0gZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvdXNlLXZpcnR1YWwtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZUZ1bGxzY3JlZW4sIHsgdXNlRnVsbHNjcmVlblByb3BzLCB1c2VGdWxsc2NyZWVuRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mdWxsc2NyZWVuLmpzJ1xuXG5pbXBvcnQgeyB1c2VUYWJsZVNvcnQsIHVzZVRhYmxlU29ydFByb3BzIH0gZnJvbSAnLi90YWJsZS1zb3J0LmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVGaWx0ZXIsIHVzZVRhYmxlRmlsdGVyUHJvcHMgfSBmcm9tICcuL3RhYmxlLWZpbHRlci5qcydcbmltcG9ydCB7IHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlLCB1c2VUYWJsZVBhZ2luYXRpb24sIHVzZVRhYmxlUGFnaW5hdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1wYWdpbmF0aW9uLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVSb3dTZWxlY3Rpb24sIHVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMsIHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgfSBmcm9tICcuL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMnXG5pbXBvcnQgeyB1c2VUYWJsZVJvd0V4cGFuZCwgdXNlVGFibGVSb3dFeHBhbmRQcm9wcywgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyB9IGZyb20gJy4vdGFibGUtcm93LWV4cGFuZC5qcydcbmltcG9ydCB7IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uLCB1c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzJ1xuXG5pbXBvcnQgeyBpbmplY3RQcm9wLCBpbmplY3RNdWx0aXBsZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9pbmplY3Qtb2JqLXByb3AuanMnXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3QgYm90dG9tQ2xhc3MgPSAncS10YWJsZV9fYm90dG9tIHJvdyBpdGVtcy1jZW50ZXInXG5cbmNvbnN0IGNvbW1vblZpcnRQcm9wc09iaiA9IHt9XG5jb21tb25WaXJ0UHJvcHNMaXN0LmZvckVhY2gocCA9PiB7IGNvbW1vblZpcnRQcm9wc09ialsgcCBdID0ge30gfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgfSxcbiAgICByb3dLZXk6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBGdW5jdGlvbiBdLFxuICAgICAgZGVmYXVsdDogJ2lkJ1xuICAgIH0sXG5cbiAgICBjb2x1bW5zOiBBcnJheSxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuXG4gICAgaWNvbkZpcnN0UGFnZTogU3RyaW5nLFxuICAgIGljb25QcmV2UGFnZTogU3RyaW5nLFxuICAgIGljb25OZXh0UGFnZTogU3RyaW5nLFxuICAgIGljb25MYXN0UGFnZTogU3RyaW5nLFxuXG4gICAgdGl0bGU6IFN0cmluZyxcblxuICAgIGhpZGVIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBncmlkOiBCb29sZWFuLFxuICAgIGdyaWRIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBzZXBhcmF0b3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdob3Jpem9udGFsJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2NlbGwnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgdmlydHVhbFNjcm9sbDogQm9vbGVhbixcbiAgICB2aXJ0dWFsU2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9LFxuICAgIC4uLmNvbW1vblZpcnRQcm9wc09iaixcblxuICAgIG5vRGF0YUxhYmVsOiBTdHJpbmcsXG4gICAgbm9SZXN1bHRzTGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nTGFiZWw6IFN0cmluZyxcbiAgICBzZWxlY3RlZFJvd3NMYWJlbDogRnVuY3Rpb24sXG4gICAgcm93c1BlclBhZ2VMYWJlbDogU3RyaW5nLFxuICAgIHBhZ2luYXRpb25MYWJlbDogRnVuY3Rpb24sXG5cbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2dyZXktOCdcbiAgICB9LFxuXG4gICAgdGl0bGVDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZVN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVIZWFkZXJTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUhlYWRlckNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDb250YWluZXJDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkQ29udGFpbmVyU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZFN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcblxuICAgIGhpZGVCb3R0b206IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkQmFubmVyOiBCb29sZWFuLFxuICAgIGhpZGVOb0RhdGE6IEJvb2xlYW4sXG4gICAgaGlkZVBhZ2luYXRpb246IEJvb2xlYW4sXG5cbiAgICBvblJvd0NsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0RibGNsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0NvbnRleHRtZW51OiBGdW5jdGlvbixcblxuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VGdWxsc2NyZWVuUHJvcHMsXG5cbiAgICAuLi51c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlRmlsdGVyUHJvcHMsXG4gICAgLi4udXNlVGFibGVQYWdpbmF0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVSb3dFeHBhbmRQcm9wcyxcbiAgICAuLi51c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlU29ydFByb3BzXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAncmVxdWVzdCcsICd2aXJ0dWFsU2Nyb2xsJyxcbiAgICAuLi51c2VGdWxsc2NyZWVuRW1pdHMsXG4gICAgLi4udXNlVGFibGVSb3dFeHBhbmRFbWl0cyxcbiAgICAuLi51c2VUYWJsZVJvd1NlbGVjdGlvbkVtaXRzXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBpbkZ1bGxzY3JlZW4sIHRvZ2dsZUZ1bGxzY3JlZW4gfSA9IHVzZUZ1bGxzY3JlZW4oKVxuXG4gICAgY29uc3QgZ2V0Um93S2V5ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZW9mIHByb3BzLnJvd0tleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BzLnJvd0tleVxuICAgICAgICA6IHJvdyA9PiByb3dbIHByb3BzLnJvd0tleSBdXG4gICAgKSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCB2aXJ0U2Nyb2xsUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgaGFzVmlydFNjcm9sbCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmdyaWQgIT09IHRydWUgJiYgcHJvcHMudmlydHVhbFNjcm9sbCA9PT0gdHJ1ZSlcblxuICAgIGNvbnN0IGNhcmREZWZhdWx0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJyBxLXRhYmxlX19jYXJkJ1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlX19jYXJkLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBfX2NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXRhYmxlX19jb250YWluZXIgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yIGNvbHVtbiBuby13cmFwYFxuICAgICAgKyAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZ3JpZCcgOiBjYXJkRGVmYXVsdENsYXNzLnZhbHVlKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICAgICsgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgZnVsbHNjcmVlbiBzY3JvbGwnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgX19jb250YWluZXJDbGFzcy52YWx1ZSArIChwcm9wcy5sb2FkaW5nID09PSB0cnVlID8gJyBxLXRhYmxlLS1sb2FkaW5nJyA6ICcnKVxuICAgIClcblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gcHJvcHMudGFibGVTdHlsZSArIHByb3BzLnRhYmxlQ2xhc3MgKyBwcm9wcy50YWJsZUhlYWRlclN0eWxlICsgcHJvcHMudGFibGVIZWFkZXJDbGFzcyArIF9fY29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAoKSA9PiB7IGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUgJiYgdmlydFNjcm9sbFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnJlc2V0KCkgfVxuICAgIClcblxuICAgIGNvbnN0IHtcbiAgICAgIGlubmVyUGFnaW5hdGlvbixcbiAgICAgIGNvbXB1dGVkUGFnaW5hdGlvbixcbiAgICAgIGlzU2VydmVyU2lkZSxcblxuICAgICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uLFxuICAgICAgc2V0UGFnaW5hdGlvblxuICAgIH0gPSB1c2VUYWJsZVBhZ2luYXRpb25TdGF0ZSh2bSwgZ2V0Q2VsbFZhbHVlKVxuXG4gICAgY29uc3QgeyBjb21wdXRlZEZpbHRlck1ldGhvZCB9ID0gdXNlVGFibGVGaWx0ZXIocHJvcHMsIHNldFBhZ2luYXRpb24pXG4gICAgY29uc3QgeyBpc1Jvd0V4cGFuZGVkLCBzZXRFeHBhbmRlZCwgdXBkYXRlRXhwYW5kZWQgfSA9IHVzZVRhYmxlUm93RXhwYW5kKHByb3BzLCBlbWl0KVxuXG4gICAgY29uc3QgZmlsdGVyZWRTb3J0ZWRSb3dzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBwcm9wcy5yb3dzXG5cbiAgICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUgfHwgcm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBzb3J0QnksIGRlc2NlbmRpbmcgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgICBpZiAocHJvcHMuZmlsdGVyKSB7XG4gICAgICAgIHJvd3MgPSBjb21wdXRlZEZpbHRlck1ldGhvZC52YWx1ZShyb3dzLCBwcm9wcy5maWx0ZXIsIGNvbXB1dGVkQ29scy52YWx1ZSwgZ2V0Q2VsbFZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sdW1uVG9Tb3J0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJvd3MgPSBjb21wdXRlZFNvcnRNZXRob2QudmFsdWUoXG4gICAgICAgICAgcHJvcHMucm93cyA9PT0gcm93cyA/IHJvd3Muc2xpY2UoKSA6IHJvd3MsXG4gICAgICAgICAgc29ydEJ5LFxuICAgICAgICAgIGRlc2NlbmRpbmdcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93c1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWUubGVuZ3RoKVxuXG4gICAgY29uc3QgY29tcHV0ZWRSb3dzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWVcblxuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcm93c1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgICAgaWYgKHJvd3NQZXJQYWdlICE9PSAwKSB7XG4gICAgICAgIGlmIChmaXJzdFJvd0luZGV4LnZhbHVlID09PSAwICYmIHByb3BzLnJvd3MgIT09IHJvd3MpIHtcbiAgICAgICAgICBpZiAocm93cy5sZW5ndGggPiBsYXN0Um93SW5kZXgudmFsdWUpIHtcbiAgICAgICAgICAgIHJvd3MgPSByb3dzLnNsaWNlKDAsIGxhc3RSb3dJbmRleC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcm93cyA9IHJvd3Muc2xpY2UoZmlyc3RSb3dJbmRleC52YWx1ZSwgbGFzdFJvd0luZGV4LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzXG4gICAgfSlcblxuICAgIGNvbnN0IHtcbiAgICAgIGhhc1NlbGVjdGlvbk1vZGUsXG4gICAgICBzaW5nbGVTZWxlY3Rpb24sXG4gICAgICBtdWx0aXBsZVNlbGVjdGlvbixcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIHNvbWVSb3dzU2VsZWN0ZWQsXG4gICAgICByb3dzU2VsZWN0ZWROdW1iZXIsXG5cbiAgICAgIGlzUm93U2VsZWN0ZWQsXG4gICAgICBjbGVhclNlbGVjdGlvbixcbiAgICAgIHVwZGF0ZVNlbGVjdGlvblxuICAgIH0gPSB1c2VUYWJsZVJvd1NlbGVjdGlvbihwcm9wcywgZW1pdCwgY29tcHV0ZWRSb3dzLCBnZXRSb3dLZXkpXG5cbiAgICBjb25zdCB7IGNvbExpc3QsIGNvbXB1dGVkQ29scywgY29tcHV0ZWRDb2xzTWFwLCBjb21wdXRlZENvbHNwYW4gfSA9IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGhhc1NlbGVjdGlvbk1vZGUpXG5cbiAgICBjb25zdCB7IGNvbHVtblRvU29ydCwgY29tcHV0ZWRTb3J0TWV0aG9kLCBzb3J0IH0gPSB1c2VUYWJsZVNvcnQocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgY29sTGlzdCwgc2V0UGFnaW5hdGlvbilcblxuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0Um93SW5kZXgsXG4gICAgICBsYXN0Um93SW5kZXgsXG4gICAgICBpc0ZpcnN0UGFnZSxcbiAgICAgIGlzTGFzdFBhZ2UsXG4gICAgICBwYWdlc051bWJlcixcbiAgICAgIGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLFxuICAgICAgY29tcHV0ZWRSb3dzTnVtYmVyLFxuXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2VcbiAgICB9ID0gdXNlVGFibGVQYWdpbmF0aW9uKHZtLCBpbm5lclBhZ2luYXRpb24sIGNvbXB1dGVkUGFnaW5hdGlvbiwgaXNTZXJ2ZXJTaWRlLCBzZXRQYWdpbmF0aW9uLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIpXG5cbiAgICBjb25zdCBub3RoaW5nVG9EaXNwbGF5ID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRSb3dzLnZhbHVlLmxlbmd0aCA9PT0gMClcblxuICAgIGNvbnN0IHZpcnRQcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHt9XG5cbiAgICAgIGNvbW1vblZpcnRQcm9wc0xpc3RcbiAgICAgICAgLmZvckVhY2gocCA9PiB7IGFjY1sgcCBdID0gcHJvcHNbIHAgXSB9KVxuXG4gICAgICBpZiAoYWNjLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFjYy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgPSBwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/IDI4IDogNDhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiByZXNldFZpcnR1YWxTY3JvbGwgKCkge1xuICAgICAgaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnJlc2V0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5ICgpIHtcbiAgICAgIGlmIChwcm9wcy5ncmlkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBnZXRHcmlkQm9keSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IHByb3BzLmhpZGVIZWFkZXIgIT09IHRydWUgPyBnZXRUSGVhZCA6IG51bGxcblxuICAgICAgaWYgKGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9wUm93ID0gc2xvdHNbICd0b3Atcm93JyBdXG4gICAgICAgIGNvbnN0IGJvdHRvbVJvdyA9IHNsb3RzWyAnYm90dG9tLXJvdycgXVxuXG4gICAgICAgIGNvbnN0IHZpcnRTbG90cyA9IHtcbiAgICAgICAgICBkZWZhdWx0OiBwcm9wcyA9PiBnZXRUQm9keVRSKHByb3BzLml0ZW0sIHNsb3RzLmJvZHksIHByb3BzLmluZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcFJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29uc3QgdG9wQ29udGVudCA9IGgoJ3Rib2R5JywgdG9wUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuXG4gICAgICAgICAgdmlydFNsb3RzLmJlZm9yZSA9IGhlYWRlciA9PT0gbnVsbFxuICAgICAgICAgICAgPyAoKSA9PiB0b3BDb250ZW50XG4gICAgICAgICAgICA6ICgpID0+IFsgaGVhZGVyKCkgXS5jb25jYXQodG9wQ29udGVudClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgICB2aXJ0U2xvdHMuYmVmb3JlID0gaGVhZGVyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm90dG9tUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICB2aXJ0U2xvdHMuYWZ0ZXIgPSAoKSA9PiBoKCd0Ym9keScsIGJvdHRvbVJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoKFFWaXJ0dWFsU2Nyb2xsLCB7XG4gICAgICAgICAgcmVmOiB2aXJ0U2Nyb2xsUmVmLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy50YWJsZUNsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZVN0eWxlLFxuICAgICAgICAgIC4uLnZpcnRQcm9wcy52YWx1ZSxcbiAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHByb3BzLnZpcnR1YWxTY3JvbGxUYXJnZXQsXG4gICAgICAgICAgaXRlbXM6IGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgICAgICB0eXBlOiAnX19xdGFibGUnLFxuICAgICAgICAgIHRhYmxlQ29sc3BhbjogY29tcHV0ZWRDb2xzcGFuLnZhbHVlLFxuICAgICAgICAgIG9uVmlydHVhbFNjcm9sbDogb25WU2Nyb2xsXG4gICAgICAgIH0sIHZpcnRTbG90cylcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGdldFRCb2R5KClcbiAgICAgIF1cblxuICAgICAgaWYgKGhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgICBjaGlsZC51bnNoaWZ0KGhlYWRlcigpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0VGFibGVNaWRkbGUoe1xuICAgICAgICBjbGFzczogWyAncS10YWJsZV9fbWlkZGxlIHNjcm9sbCcsIHByb3BzLnRhYmxlQ2xhc3MgXSxcbiAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlU3R5bGVcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvICh0b0luZGV4LCBlZGdlKSB7XG4gICAgICBpZiAodmlydFNjcm9sbFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnNjcm9sbFRvKHRvSW5kZXgsIGVkZ2UpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0b0luZGV4ID0gcGFyc2VJbnQodG9JbmRleCwgMTApXG4gICAgICBjb25zdCByb3dFbCA9IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcihgdGJvZHkgdHI6bnRoLW9mLXR5cGUoJHsgdG9JbmRleCArIDEgfSlgKVxuXG4gICAgICBpZiAocm93RWwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCcucS10YWJsZV9fbWlkZGxlLnNjcm9sbCcpXG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHJvd0VsLm9mZnNldFRvcCAtIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnRcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gb2Zmc2V0VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA/ICdkZWNyZWFzZScgOiAnaW5jcmVhc2UnXG5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IG9mZnNldFRvcFxuXG4gICAgICAgIGVtaXQoJ3ZpcnR1YWxTY3JvbGwnLCB7XG4gICAgICAgICAgaW5kZXg6IHRvSW5kZXgsXG4gICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICB0bzogaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlIC0gMSxcbiAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblZTY3JvbGwgKGluZm8pIHtcbiAgICAgIGVtaXQoJ3ZpcnR1YWxTY3JvbGwnLCBpbmZvKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2dyZXNzICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoUUxpbmVhclByb2dyZXNzLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19saW5lYXItcHJvZ3Jlc3MnLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFja0NvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEJvZHlUUiAocm93LCBib2R5U2xvdCwgcGFnZUluZGV4KSB7XG4gICAgICBjb25zdFxuICAgICAgICBrZXkgPSBnZXRSb3dLZXkudmFsdWUocm93KSxcbiAgICAgICAgc2VsZWN0ZWQgPSBpc1Jvd1NlbGVjdGVkKGtleSlcblxuICAgICAgaWYgKGJvZHlTbG90ICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGJvZHlTbG90KFxuICAgICAgICAgIGdldEJvZHlTY29wZSh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBwYWdlSW5kZXgsXG4gICAgICAgICAgICBfX3RyQ2xhc3M6IHNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICBib2R5Q2VsbCA9IHNsb3RzWyAnYm9keS1jZWxsJyBdLFxuICAgICAgICBjaGlsZCA9IGNvbXB1dGVkQ29scy52YWx1ZS5tYXAoY29sID0+IHtcbiAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgYm9keUNlbGxDb2wgPSBzbG90c1sgYGJvZHktY2VsbC0keyBjb2wubmFtZSB9YCBdLFxuICAgICAgICAgICAgc2xvdCA9IGJvZHlDZWxsQ29sICE9PSB2b2lkIDAgPyBib2R5Q2VsbENvbCA6IGJvZHlDZWxsXG5cbiAgICAgICAgICByZXR1cm4gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgICA/IHNsb3QoZ2V0Qm9keUNlbGxTY29wZSh7IGtleSwgcm93LCBwYWdlSW5kZXgsIGNvbCB9KSlcbiAgICAgICAgICAgIDogaCgndGQnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBjb2wuX190ZENsYXNzKHJvdyksXG4gICAgICAgICAgICAgIHN0eWxlOiBjb2wuX190ZFN0eWxlKHJvdylcbiAgICAgICAgICAgIH0sIGdldENlbGxWYWx1ZShjb2wsIHJvdykpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2JvZHktc2VsZWN0aW9uJyBdXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QoZ2V0Qm9keVNlbGVjdGlvblNjb3BlKHsga2V5LCByb3csIHBhZ2VJbmRleCB9KSlcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKFsga2V5IF0sIFsgcm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RkJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCBjb250ZW50KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7IGtleSwgY2xhc3M6IHsgc2VsZWN0ZWQgfSB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ1Jvd0NsaWNrJywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkRibGNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdSb3dEYmxjbGljaycsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93Q29udGV4dG1lbnUgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25Db250ZXh0bWVudSA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgnUm93Q29udGV4dG1lbnUnLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0cicsIGRhdGEsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRCb2R5ICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGJvZHkgPSBzbG90cy5ib2R5LFxuICAgICAgICB0b3BSb3cgPSBzbG90c1sgJ3RvcC1yb3cnIF0sXG4gICAgICAgIGJvdHRvbVJvdyA9IHNsb3RzWyAnYm90dG9tLXJvdycgXVxuXG4gICAgICBsZXQgY2hpbGQgPSBjb21wdXRlZFJvd3MudmFsdWUubWFwKFxuICAgICAgICAocm93LCBwYWdlSW5kZXgpID0+IGdldFRCb2R5VFIocm93LCBib2R5LCBwYWdlSW5kZXgpXG4gICAgICApXG5cbiAgICAgIGlmICh0b3BSb3cgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IHRvcFJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KS5jb25jYXQoY2hpbGQpXG4gICAgICB9XG4gICAgICBpZiAoYm90dG9tUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5jb25jYXQoYm90dG9tUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGJvZHknLCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5U2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuXG4gICAgICBkYXRhLmNvbHMgPSBkYXRhLmNvbHMubWFwKFxuICAgICAgICBjb2wgPT4gaW5qZWN0UHJvcCh7IC4uLmNvbCB9LCAndmFsdWUnLCAoKSA9PiBnZXRDZWxsVmFsdWUoY29sLCBkYXRhLnJvdykpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keUNlbGxTY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG4gICAgICBpbmplY3RQcm9wKGRhdGEsICd2YWx1ZScsICgpID0+IGdldENlbGxWYWx1ZShkYXRhLmNvbCwgZGF0YS5yb3cpKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5U2VsZWN0aW9uU2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmplY3RCb2R5Q29tbW9uU2NvcGUgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUsXG4gICAgICAgIGNvbHNNYXA6IGNvbXB1dGVkQ29sc01hcC52YWx1ZSxcbiAgICAgICAgc29ydCxcbiAgICAgICAgcm93SW5kZXg6IGZpcnN0Um93SW5kZXgudmFsdWUgKyBkYXRhLnBhZ2VJbmRleCxcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZVxuICAgICAgfSlcblxuICAgICAgaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSAmJiBpbmplY3RQcm9wKFxuICAgICAgICBkYXRhLFxuICAgICAgICAnc2VsZWN0ZWQnLFxuICAgICAgICAoKSA9PiBpc1Jvd1NlbGVjdGVkKGRhdGEua2V5KSxcbiAgICAgICAgKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKFsgZGF0YS5rZXkgXSwgWyBkYXRhLnJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpbmplY3RQcm9wKFxuICAgICAgICBkYXRhLFxuICAgICAgICAnZXhwYW5kJyxcbiAgICAgICAgKCkgPT4gaXNSb3dFeHBhbmRlZChkYXRhLmtleSksXG4gICAgICAgIGFkZGluZyA9PiB7IHVwZGF0ZUV4cGFuZGVkKGRhdGEua2V5LCBhZGRpbmcpIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDZWxsVmFsdWUgKGNvbCwgcm93KSB7XG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2YgY29sLmZpZWxkID09PSAnZnVuY3Rpb24nID8gY29sLmZpZWxkKHJvdykgOiByb3dbIGNvbC5maWVsZCBdXG4gICAgICByZXR1cm4gY29sLmZvcm1hdCAhPT0gdm9pZCAwID8gY29sLmZvcm1hdCh2YWwsIHJvdykgOiB2YWxcbiAgICB9XG5cbiAgICBjb25zdCBtYXJnaW5hbHNTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBwYWdpbmF0aW9uOiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICBwYWdlc051bWJlcjogcGFnZXNOdW1iZXIudmFsdWUsXG4gICAgICBpc0ZpcnN0UGFnZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICBpc0xhc3RQYWdlOiBpc0xhc3RQYWdlLnZhbHVlLFxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlLFxuXG4gICAgICBpbkZ1bGxzY3JlZW46IGluRnVsbHNjcmVlbi52YWx1ZSxcbiAgICAgIHRvZ2dsZUZ1bGxzY3JlZW5cbiAgICB9KSlcblxuICAgIGZ1bmN0aW9uIGdldFRvcERpdiAoKSB7XG4gICAgICBjb25zdFxuICAgICAgICB0b3AgPSBzbG90cy50b3AsXG4gICAgICAgIHRvcExlZnQgPSBzbG90c1sgJ3RvcC1sZWZ0JyBdLFxuICAgICAgICB0b3BSaWdodCA9IHNsb3RzWyAndG9wLXJpZ2h0JyBdLFxuICAgICAgICB0b3BTZWxlY3Rpb24gPSBzbG90c1sgJ3RvcC1zZWxlY3Rpb24nIF0sXG4gICAgICAgIGhhc1NlbGVjdGlvbiA9IGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiB0b3BTZWxlY3Rpb24gIT09IHZvaWQgMFxuICAgICAgICAgICYmIHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSA+IDAsXG4gICAgICAgIHRvcENsYXNzID0gJ3EtdGFibGVfX3RvcCByZWxhdGl2ZS1wb3NpdGlvbiByb3cgaXRlbXMtY2VudGVyJ1xuXG4gICAgICBpZiAodG9wICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IHRvcENsYXNzIH0sIFsgdG9wKG1hcmdpbmFsc1Njb3BlLnZhbHVlKSBdKVxuICAgICAgfVxuXG4gICAgICBsZXQgY2hpbGRcblxuICAgICAgaWYgKGhhc1NlbGVjdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZCA9IHRvcFNlbGVjdGlvbihtYXJnaW5hbHNTY29wZS52YWx1ZSkuc2xpY2UoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gW11cblxuICAgICAgICBpZiAodG9wTGVmdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIHRvcExlZnQobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wcy50aXRsZSkge1xuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFsgJ3EtdGFibGVfX3RpdGxlJywgcHJvcHMudGl0bGVDbGFzcyBdXG4gICAgICAgICAgICAgIH0sIHByb3BzLnRpdGxlKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRvcFJpZ2h0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fc2VwYXJhdG9yIGNvbCcgfSlcbiAgICAgICAgKVxuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICB0b3BSaWdodChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiB0b3BDbGFzcyB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJTZWxlY3RlZFZhbHVlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc29tZVJvd3NTZWxlY3RlZC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBhbGxSb3dzU2VsZWN0ZWQudmFsdWVcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gZ2V0VEhlYWQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBnZXRUSGVhZFRSKClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgndHInLCB7IGNsYXNzOiAncS10YWJsZV9fcHJvZ3Jlc3MnIH0sIFtcbiAgICAgICAgICAgIGgoJ3RoJywge1xuICAgICAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uJyxcbiAgICAgICAgICAgICAgY29sc3BhbjogY29tcHV0ZWRDb2xzcGFuLnZhbHVlXG4gICAgICAgICAgICB9LCBnZXRQcm9ncmVzcygpKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RoZWFkJywgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEhlYWRUUiAoKSB7XG4gICAgICBjb25zdFxuICAgICAgICBoZWFkZXIgPSBzbG90cy5oZWFkZXIsXG4gICAgICAgIGhlYWRlckNlbGwgPSBzbG90c1sgJ2hlYWRlci1jZWxsJyBdXG5cbiAgICAgIGlmIChoZWFkZXIgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaGVhZGVyKFxuICAgICAgICAgIGdldEhlYWRlclNjb3BlKHsgaGVhZGVyOiB0cnVlIH0pXG4gICAgICAgICkuc2xpY2UoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IGNvbXB1dGVkQ29scy52YWx1ZS5tYXAoY29sID0+IHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICBoZWFkZXJDZWxsQ29sID0gc2xvdHNbIGBoZWFkZXItY2VsbC0keyBjb2wubmFtZSB9YCBdLFxuICAgICAgICAgIHNsb3QgPSBoZWFkZXJDZWxsQ29sICE9PSB2b2lkIDAgPyBoZWFkZXJDZWxsQ29sIDogaGVhZGVyQ2VsbCxcbiAgICAgICAgICBwcm9wcyA9IGdldEhlYWRlclNjb3BlKHsgY29sIH0pXG5cbiAgICAgICAgcmV0dXJuIHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChwcm9wcylcbiAgICAgICAgICA6IGgoUVRoLCB7XG4gICAgICAgICAgICBrZXk6IGNvbC5uYW1lLFxuICAgICAgICAgICAgcHJvcHNcbiAgICAgICAgICB9LCAoKSA9PiBjb2wubGFiZWwpXG4gICAgICB9KVxuXG4gICAgICBpZiAoc2luZ2xlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlICYmIHByb3BzLmdyaWQgIT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICBoKCd0aCcsIHsgY2xhc3M6ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgfSwgJyAnKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChtdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbICdoZWFkZXItc2VsZWN0aW9uJyBdXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QoZ2V0SGVhZGVyU2NvcGUoe30pKVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBoZWFkZXJTZWxlY3RlZFZhbHVlLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBvbk11bHRpcGxlU2VsZWN0aW9uU2V0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICBoKCd0aCcsIHsgY2xhc3M6ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgfSwgY29udGVudClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCd0cicsIHtcbiAgICAgICAgICBjbGFzczogcHJvcHMudGFibGVIZWFkZXJDbGFzcyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMudGFibGVIZWFkZXJTdHlsZVxuICAgICAgICB9LCBjaGlsZClcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXJTY29wZSAoZGF0YSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgIGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSxcbiAgICAgICAgc29ydCxcbiAgICAgICAgY29sc01hcDogY29tcHV0ZWRDb2xzTWFwLnZhbHVlLFxuICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlXG4gICAgICB9KVxuXG4gICAgICBpZiAobXVsdGlwbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaW5qZWN0UHJvcChcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgICdzZWxlY3RlZCcsXG4gICAgICAgICAgKCkgPT4gaGVhZGVyU2VsZWN0ZWRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICBvbk11bHRpcGxlU2VsZWN0aW9uU2V0XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk11bHRpcGxlU2VsZWN0aW9uU2V0ICh2YWwpIHtcbiAgICAgIGlmIChzb21lUm93c1NlbGVjdGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHZhbCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVNlbGVjdGlvbihcbiAgICAgICAgY29tcHV0ZWRSb3dzLnZhbHVlLm1hcChnZXRSb3dLZXkudmFsdWUpLFxuICAgICAgICBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICAgIHZhbFxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG5hdkljb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBpY28gPSBbXG4gICAgICAgIHByb3BzLmljb25GaXJzdFBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5maXJzdFBhZ2UsXG4gICAgICAgIHByb3BzLmljb25QcmV2UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLnByZXZQYWdlLFxuICAgICAgICBwcm9wcy5pY29uTmV4dFBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5uZXh0UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvbkxhc3RQYWdlIHx8ICRxLmljb25TZXQudGFibGUubGFzdFBhZ2VcbiAgICAgIF1cbiAgICAgIHJldHVybiAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGljby5yZXZlcnNlKCkgOiBpY29cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm90dG9tRGl2ICgpIHtcbiAgICAgIGlmIChwcm9wcy5oaWRlQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAobm90aGluZ1RvRGlzcGxheS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvcHMuaGlkZU5vRGF0YSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHByb3BzLmxvYWRpbmcgPT09IHRydWVcbiAgICAgICAgICA/IHByb3BzLmxvYWRpbmdMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLmxvYWRpbmdcbiAgICAgICAgICA6IChwcm9wcy5maWx0ZXIgPyBwcm9wcy5ub1Jlc3VsdHNMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLm5vUmVzdWx0cyA6IHByb3BzLm5vRGF0YUxhYmVsIHx8ICRxLmxhbmcudGFibGUubm9EYXRhKVxuXG4gICAgICAgIGNvbnN0IG5vRGF0YSA9IHNsb3RzWyAnbm8tZGF0YScgXVxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vRGF0YSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBbIG5vRGF0YSh7IG1lc3NhZ2UsIGljb246ICRxLmljb25TZXQudGFibGUud2FybmluZywgZmlsdGVyOiBwcm9wcy5maWx0ZXIgfSkgXVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19ib3R0b20tbm9kYXRhLWljb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICRxLmljb25TZXQudGFibGUud2FybmluZ1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyArICcgcS10YWJsZV9fYm90dG9tLS1ub2RhdGEnIH0sIGNoaWxkcmVuKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBib3R0b20gPSBzbG90cy5ib3R0b21cblxuICAgICAgaWYgKGJvdHRvbSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyB9LCBbIGJvdHRvbShtYXJnaW5hbHNTY29wZS52YWx1ZSkgXSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBwcm9wcy5oaWRlU2VsZWN0ZWRCYW5uZXIgIT09IHRydWUgJiYgaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSAmJiByb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUgPiAwXG4gICAgICAgID8gW1xuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgIChwcm9wcy5zZWxlY3RlZFJvd3NMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnNlbGVjdGVkUmVjb3Jkcykocm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW11cblxuICAgICAgaWYgKHByb3BzLmhpZGVQYWdpbmF0aW9uICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGJvdHRvbUNsYXNzICsgJyBqdXN0aWZ5LWVuZCdcbiAgICAgICAgfSwgZ2V0UGFnaW5hdGlvbkRpdihjaGlsZCkpXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyB9LCBjaGlsZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ1NlbGVjdGlvbiAocGFnKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgcm93c1BlclBhZ2U6IHBhZy52YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYWdpbmF0aW9uRGl2IChjaGlsZCkge1xuICAgICAgbGV0IGNvbnRyb2xcbiAgICAgIGNvbnN0XG4gICAgICAgIHsgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgICAgcGFnaW5hdGlvbkxhYmVsID0gcHJvcHMucGFnaW5hdGlvbkxhYmVsIHx8ICRxLmxhbmcudGFibGUucGFnaW5hdGlvbixcbiAgICAgICAgcGFnaW5hdGlvblNsb3QgPSBzbG90cy5wYWdpbmF0aW9uLFxuICAgICAgICBoYXNPcHRzID0gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCA+IDFcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX3NlcGFyYXRvciBjb2wnIH0pXG4gICAgICApXG5cbiAgICAgIGlmIChoYXNPcHRzID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiAncS10YWJsZV9fYm90dG9tLWl0ZW0nIH0sIFtcbiAgICAgICAgICAgICAgcHJvcHMucm93c1BlclBhZ2VMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnJlY29yZHNQZXJQYWdlXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIGgoUVNlbGVjdCwge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX3NlbGVjdCBpbmxpbmUgcS10YWJsZV9fYm90dG9tLWl0ZW0nLFxuICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHJvd3NQZXJQYWdlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucy52YWx1ZSxcbiAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiByb3dzUGVyUGFnZSA9PT0gMFxuICAgICAgICAgICAgICAgID8gJHEubGFuZy50YWJsZS5hbGxSb3dzXG4gICAgICAgICAgICAgICAgOiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICBib3JkZXJsZXNzOiB0cnVlLFxuICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3B0aW9uc0RlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICBvcHRpb25zQ292ZXI6IHRydWUsXG4gICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25QYWdTZWxlY3Rpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocGFnaW5hdGlvblNsb3QgIT09IHZvaWQgMCkge1xuICAgICAgICBjb250cm9sID0gcGFnaW5hdGlvblNsb3QobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29udHJvbCA9IFtcbiAgICAgICAgICBoKCdzcGFuJywgcm93c1BlclBhZ2UgIT09IDAgPyB7IGNsYXNzOiAncS10YWJsZV9fYm90dG9tLWl0ZW0nIH0gOiB7fSwgW1xuICAgICAgICAgICAgcm93c1BlclBhZ2VcbiAgICAgICAgICAgICAgPyBwYWdpbmF0aW9uTGFiZWwoZmlyc3RSb3dJbmRleC52YWx1ZSArIDEsIE1hdGgubWluKGxhc3RSb3dJbmRleC52YWx1ZSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKVxuICAgICAgICAgICAgICA6IHBhZ2luYXRpb25MYWJlbCgxLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIudmFsdWUsIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG5cbiAgICAgICAgaWYgKHJvd3NQZXJQYWdlICE9PSAwICYmIHBhZ2VzTnVtYmVyLnZhbHVlID4gMSkge1xuICAgICAgICAgIGNvbnN0IGJ0blByb3BzID0ge1xuICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgIGZsYXQ6IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvcHMuZGVuc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJ0blByb3BzLnNpemUgPSAnc20nXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFnZXNOdW1iZXIudmFsdWUgPiAyICYmIGNvbnRyb2wucHVzaChcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ0ZpcnN0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDAgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZpcnN0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdQcmV2JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDEgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IHByZXZQYWdlXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnTmV4dCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAyIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG5leHRQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICAgIHBhZ2VzTnVtYmVyLnZhbHVlID4gMiAmJiBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdMYXN0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDMgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogbGFzdFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBjb250cm9sKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkSGVhZGVyICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuZ3JpZEhlYWRlciA9PT0gdHJ1ZVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIFtcbiAgICAgICAgICAgICAgZ2V0VEhlYWQoaClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gZ2V0UHJvZ3Jlc3MoaClcbiAgICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fbWlkZGxlJyB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkQm9keSAoKSB7XG4gICAgICBjb25zdCBpdGVtID0gc2xvdHMuaXRlbSAhPT0gdm9pZCAwXG4gICAgICAgID8gc2xvdHMuaXRlbVxuICAgICAgICA6IHNjb3BlID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IHNjb3BlLmNvbHMubWFwKFxuICAgICAgICAgICAgY29sID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tdGl0bGUnIH0sIFsgY29sLmxhYmVsIF0pLFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXZhbHVlJyB9LCBbIGNvbC52YWx1ZSBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBzbG90KHNjb3BlKVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNjb3BlLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIHNjb3BlLmtleSBdLCBbIHNjb3BlLnJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBjb250ZW50KSxcbiAgICAgICAgICAgICAgaChRU2VwYXJhdG9yLCB7IGRhcms6IGlzRGFyay52YWx1ZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAncS10YWJsZV9fZ3JpZC1pdGVtLWNhcmQnICsgY2FyZERlZmF1bHRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgcHJvcHMuY2FyZENsYXNzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRTdHlsZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMFxuICAgICAgICAgICAgfHwgcHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzWyAwIF0gKz0gJyBjdXJzb3ItcG9pbnRlcidcblxuICAgICAgICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXQoJ1Jvd0NsaWNrJywgZXZ0LCBzY29wZS5yb3csIHNjb3BlLnBhZ2VJbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGRhdGEub25EYmxjbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgZW1pdCgnUm93RGJsY2xpY2snLCBldnQsIHNjb3BlLnJvdywgc2NvcGUucGFnZUluZGV4KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtIGNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMydcbiAgICAgICAgICAgICAgKyAoc2NvcGUuc2VsZWN0ZWQgPT09IHRydWUgPyAnIHEtdGFibGVfX2dyaWQtaXRlbS0tc2VsZWN0ZWQnIDogJycpXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2JywgZGF0YSwgY2hpbGQpXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogW1xuICAgICAgICAgICdxLXRhYmxlX19ncmlkLWNvbnRlbnQgcm93JyxcbiAgICAgICAgICBwcm9wcy5jYXJkQ29udGFpbmVyQ2xhc3NcbiAgICAgICAgXSxcbiAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRDb250YWluZXJTdHlsZVxuICAgICAgfSwgY29tcHV0ZWRSb3dzLnZhbHVlLm1hcCgocm93LCBwYWdlSW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0oZ2V0Qm9keVNjb3BlKHtcbiAgICAgICAgICBrZXk6IGdldFJvd0tleS52YWx1ZShyb3cpLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBwYWdlSW5kZXhcbiAgICAgICAgfSkpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHMgYW5kIG5lZWRlZCBjb21wdXRlZCBwcm9wc1xuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICAgIHNldFBhZ2luYXRpb24sXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2UsXG4gICAgICBpc1Jvd1NlbGVjdGVkLFxuICAgICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgICBpc1Jvd0V4cGFuZGVkLFxuICAgICAgc2V0RXhwYW5kZWQsXG4gICAgICBzb3J0LFxuICAgICAgcmVzZXRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgc2Nyb2xsVG8sXG4gICAgICBnZXRDZWxsVmFsdWVcbiAgICB9KVxuXG4gICAgaW5qZWN0TXVsdGlwbGVQcm9wcyh2bS5wcm94eSwge1xuICAgICAgZmlsdGVyZWRTb3J0ZWRSb3dzOiAoKSA9PiBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWUsXG4gICAgICBjb21wdXRlZFJvd3M6ICgpID0+IGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgIGNvbXB1dGVkUm93c051bWJlcjogKCkgPT4gY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFsgZ2V0VG9wRGl2KCkgXVxuICAgICAgY29uc3QgZGF0YSA9IHsgcmVmOiByb290UmVmLCBjbGFzczogY29udGFpbmVyQ2xhc3MudmFsdWUgfVxuXG4gICAgICBpZiAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC5wdXNoKGdldEdyaWRIZWFkZXIoKSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICBjbGFzczogWyBkYXRhLmNsYXNzLCBwcm9wcy5jYXJkQ2xhc3MgXSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuY2FyZFN0eWxlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGdldEJvZHkoKSxcbiAgICAgICAgZ2V0Qm90dG9tRGl2KClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgc2xvdHMubG9hZGluZygpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJkZWYiLCJsYXN0UGFnZSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7QUFPQSxJQUFBLE1BQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLEVBQ1o7QUFBQSxFQUVELE9BQU8sQ0FBRSxPQUFTO0FBQUEsRUFFbEIsTUFBTyxPQUFPLEVBQUUsT0FBTyxLQUFJLEdBQUk7QUFDN0IsVUFBTSxLQUFLLG1CQUFvQjtBQUMvQixVQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUUsRUFBSSxJQUFHO0FBRTFCLFVBQU0sVUFBVSxTQUFPO0FBQUUsV0FBSyxTQUFTLEdBQUc7QUFBQSxJQUFHO0FBRTdDLFdBQU8sTUFBTTtBQUNYLFVBQUksTUFBTSxVQUFVLFFBQVE7QUFDMUIsZUFBTyxFQUFFLE1BQU07QUFBQSxVQUNiLE9BQU8sTUFBTSxjQUFjLE9BQU8sNEJBQTRCO0FBQUEsVUFDOUQ7QUFBQSxRQUNWLEdBQVcsTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLE1BQ3hCO0FBRUQsVUFBSSxLQUFLO0FBQ1QsWUFBTSxPQUFPLEdBQUcsTUFBTTtBQUV0QixVQUFJLE1BQU07QUFDUixjQUFNLE1BQU0sTUFBTSxRQUFTO0FBQzNCLFlBQUksUUFBUSxRQUFRO0FBQUU7QUFBQSxRQUFRO0FBQUEsTUFDL0IsT0FDSTtBQUNILGNBQU0sTUFBTSxNQUFNO0FBQUEsTUFDbkI7QUFFRCxVQUFJLElBQUksYUFBYSxNQUFNO0FBQ3pCLGNBQU0sU0FBUyxJQUFJLFVBQVUsVUFDekIsWUFDQTtBQUVKLGdCQUFRLFlBQVksTUFBTSxTQUFTLENBQUEsQ0FBRTtBQUNyQyxjQUFPO0FBQUEsVUFDTCxFQUFFLE9BQU87QUFBQSxZQUNQLE9BQU8sSUFBSTtBQUFBLFlBQ1gsTUFBTSxHQUFHLFFBQVEsTUFBTTtBQUFBLFVBQ25DLENBQVc7QUFB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

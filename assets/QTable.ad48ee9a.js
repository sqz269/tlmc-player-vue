import { k as createComponent, h, l as hSlot, p as hUniqueSlot, ae as QIcon, g as getCurrentInstance, c as computed, t as useDarkProps, x as useDark, r as ref, w as watch, bt as onBeforeMount, o as onMounted, aw as onActivated, av as onDeactivated, n as onBeforeUnmount, aZ as getScrollTarget, b2 as listenOpts, M as hMergeSlot, bp as useSizeProps, bq as useSize, bB as vmHasRouter, bC as History, a3 as isNumber, bD as isDate, a4 as isObject, D as nextTick, bE as injectMultipleProps, bF as QCheckbox, bG as injectProp, a0 as QBtn, aj as QSeparator } from "./index.1370cf05.js";
import { Q as QList } from "./QList.4ced6d4f.js";
import { u as useVirtualScrollProps, b as useVirtualScroll, c as commonVirtPropsList, Q as QSelect } from "./QSelect.6d4296f1.js";
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
            h("div", { class: "q-table-control" }, [
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
export { QTr as Q, QTd as a, QTable as b, QTh as c };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVRhYmxlLmFkNDhlZTlhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvUVRyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtZmlsdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1wYWdpbmF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctZXhwYW5kLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCwgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUaCcsXG5cbiAgcHJvcHM6IHtcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGF1dG9XaWR0aDogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbICdjbGljaycgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBvbkNsaWNrID0gZXZ0ID0+IHsgZW1pdCgnY2xpY2snLCBldnQpIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMucHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgndGgnLCB7XG4gICAgICAgICAgY2xhc3M6IHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgOiAnJyxcbiAgICAgICAgICBvbkNsaWNrXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgfVxuXG4gICAgICBsZXQgY29sLCBjaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IHZtLnZub2RlLmtleVxuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBjb2wgPSBwcm9wcy5wcm9wcy5jb2xzTWFwWyBuYW1lIF1cbiAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwKSB7IHJldHVybiB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sID0gcHJvcHMucHJvcHMuY29sXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2wuc29ydGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gY29sLmFsaWduID09PSAncmlnaHQnXG4gICAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICAgIGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG4gICAgICAgIGNoaWxkWyBhY3Rpb24gXShcbiAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICBjbGFzczogY29sLl9faWNvbkNsYXNzLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS5hcnJvd1VwXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IGNvbC5fX3RoQ2xhc3NcbiAgICAgICAgICArIChwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAnIHEtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnKSxcbiAgICAgICAgc3R5bGU6IGNvbC5oZWFkZXJTdHlsZSxcbiAgICAgICAgb25DbGljazogZXZ0ID0+IHtcbiAgICAgICAgICBjb2wuc29ydGFibGUgPT09IHRydWUgJiYgcHJvcHMucHJvcHMuc29ydChjb2wpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICBvbkNsaWNrKGV2dClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGgnLCBkYXRhLCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRyJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10cidcbiAgICAgICsgKHByb3BzLnByb3BzID09PSB2b2lkIDAgfHwgcHJvcHMucHJvcHMuaGVhZGVyID09PSB0cnVlID8gJycgOiAnICcgKyBwcm9wcy5wcm9wcy5fX3RyQ2xhc3MpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRyLS1uby1ob3ZlcicgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgndHInLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRkJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgYXV0b1dpZHRoOiBCb29sZWFuLFxuICAgIG5vSG92ZXI6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRkJyArIChwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAnIHEtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnKVxuICAgICAgKyAocHJvcHMubm9Ib3ZlciA9PT0gdHJ1ZSA/ICcgcS10ZC0tbm8taG92ZXInIDogJycpXG4gICAgICArICcgJ1xuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMucHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgndGQnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBuYW1lID0gdm0udm5vZGUua2V5XG4gICAgICBjb25zdCBjb2wgPSAoXG4gICAgICAgIChwcm9wcy5wcm9wcy5jb2xzTWFwICE9PSB2b2lkIDAgPyBwcm9wcy5wcm9wcy5jb2xzTWFwWyBuYW1lIF0gOiBudWxsKVxuICAgICAgICB8fCBwcm9wcy5wcm9wcy5jb2xcbiAgICAgIClcblxuICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHsgcm93IH0gPSBwcm9wcy5wcm9wc1xuXG4gICAgICByZXR1cm4gaCgndGQnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlICsgY29sLl9fdGRDbGFzcyhyb3cpLFxuICAgICAgICBzdHlsZTogY29sLl9fdGRTdHlsZShyb3cpXG4gICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVNb3VudCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUxpc3QgZnJvbSAnLi4vaXRlbS9RTGlzdC5qcydcbmltcG9ydCBRTWFya3VwVGFibGUgZnJvbSAnLi4vbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcydcbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuLi90YWJsZS9nZXQtdGFibGUtbWlkZGxlLmpzJ1xuXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuL3VzZS12aXJ0dWFsLXNjcm9sbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQgfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGNvbXBzID0ge1xuICBsaXN0OiBRTGlzdCxcbiAgdGFibGU6IFFNYXJrdXBUYWJsZVxufVxuXG5jb25zdCB0eXBlT3B0aW9ucyA9IFsgJ2xpc3QnLCAndGFibGUnLCAnX19xdGFibGUnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FWaXJ0dWFsU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcblxuICAgIHR5cGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdsaXN0JyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICBpdGVtczoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICBkZWZhdWx0OiAoKSA9PiBbXVxuICAgIH0sXG5cbiAgICBpdGVtc0ZuOiBGdW5jdGlvbixcbiAgICBpdGVtc1NpemU6IE51bWJlcixcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgYXR0cnMgfSkge1xuICAgIGxldCBsb2NhbFNjcm9sbFRhcmdldFxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxMZW5ndGggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5pdGVtc1NpemUgPj0gMCAmJiBwcm9wcy5pdGVtc0ZuICE9PSB2b2lkIDBcbiAgICAgICAgPyBwYXJzZUludChwcm9wcy5pdGVtc1NpemUsIDEwKVxuICAgICAgICA6IChBcnJheS5pc0FycmF5KHByb3BzLml0ZW1zKSA/IHByb3BzLml0ZW1zLmxlbmd0aCA6IDApXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgfSA9IHVzZVZpcnR1YWxTY3JvbGwoe1xuICAgICAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsXG4gICAgfSlcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBGbiA9IChpdGVtLCBpKSA9PiAoe1xuICAgICAgICBpbmRleDogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSArIGksXG4gICAgICAgIGl0ZW1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBwcm9wcy5pdGVtc0ZuID09PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5pdGVtcy5zbGljZSh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50bykubWFwKG1hcEZuKVxuICAgICAgICA6IHByb3BzLml0ZW1zRm4odmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKS5tYXAobWFwRm4pXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdmlydHVhbC1zY3JvbGwgcS12aXJ0dWFsLXNjcm9sbCcgKyAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnLS1ob3Jpem9udGFsJyA6ICctLXZlcnRpY2FsJylcbiAgICAgICsgKHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8gJycgOiAnIHNjcm9sbCcpXG4gICAgKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwID8ge30gOiB7IHRhYmluZGV4OiAwIH1cbiAgICApKVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxFbCAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS4kZWwgfHwgcm9vdFJlZi52YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KGdldFZpcnR1YWxTY3JvbGxFbCgpLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblZpcnR1YWxTY3JvbGxFdnQsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfX2dldFZpcnR1YWxDaGlsZHJlbiAoKSB7XG4gICAgICBsZXQgY2hpbGQgPSBwYWRWaXJ0dWFsU2Nyb2xsKFxuICAgICAgICBwcm9wcy50eXBlID09PSAnbGlzdCcgPyAnZGl2JyA6ICd0Ym9keScsXG4gICAgICAgIHZpcnR1YWxTY3JvbGxTY29wZS52YWx1ZS5tYXAoc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHNsb3RzLmJlZm9yZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gc2xvdHMuYmVmb3JlKCkuY29uY2F0KGNoaWxkKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90cy5hZnRlciwgY2hpbGQpXG4gICAgfVxuXG4gICAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChzbG90cy5kZWZhdWx0ID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignUVZpcnR1YWxTY3JvbGw6IGRlZmF1bHQgc2NvcGVkIHNsb3QgaXMgcmVxdWlyZWQgZm9yIHJlbmRlcmluZycpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJvcHMudHlwZSA9PT0gJ19fcXRhYmxlJ1xuICAgICAgICA/IGdldFRhYmxlTWlkZGxlKFxuICAgICAgICAgIHsgcmVmOiByb290UmVmLCBjbGFzczogJ3EtdGFibGVfX21pZGRsZSAnICsgY2xhc3Nlcy52YWx1ZSB9LFxuICAgICAgICAgIF9fZ2V0VmlydHVhbENoaWxkcmVuKClcbiAgICAgICAgKVxuICAgICAgICA6IGgoY29tcHNbIHByb3BzLnR5cGUgXSwge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgICBjbGFzczogWyBhdHRycy5jbGFzcywgY2xhc3Nlcy52YWx1ZSBdLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWVcbiAgICAgICAgfSwgX19nZXRWaXJ0dWFsQ2hpbGRyZW4pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBkZWZhdWx0U2l6ZXMgPSB7XG4gIHhzOiAyLFxuICBzbTogNCxcbiAgbWQ6IDYsXG4gIGxnOiAxMCxcbiAgeGw6IDE0XG59XG5cbmZ1bmN0aW9uIHdpZHRoICh2YWwsIHJldmVyc2UsICRxKSB7XG4gIHJldHVybiB7XG4gICAgdHJhbnNmb3JtOiByZXZlcnNlID09PSB0cnVlXG4gICAgICA/IGB0cmFuc2xhdGVYKCR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJy0nIDogJycgfTEwMCUpIHNjYWxlM2QoJHsgLXZhbCB9LDEsMSlgXG4gICAgICA6IGBzY2FsZTNkKCR7IHZhbCB9LDEsMSlgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FMaW5lYXJQcm9ncmVzcycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG4gICAgLi4udXNlU2l6ZVByb3BzLFxuXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGJ1ZmZlcjogTnVtYmVyLFxuXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0cmFja0NvbG9yOiBTdHJpbmcsXG5cbiAgICByZXZlcnNlOiBCb29sZWFuLFxuICAgIHN0cmlwZTogQm9vbGVhbixcbiAgICBpbmRldGVybWluYXRlOiBCb29sZWFuLFxuICAgIHF1ZXJ5OiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBhbmltYXRpb25TcGVlZDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMjEwMFxuICAgIH0sXG5cbiAgICBpbnN0YW50RmVlZGJhY2s6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgcHJveHkuJHEpXG4gICAgY29uc3Qgc2l6ZVN0eWxlID0gdXNlU2l6ZShwcm9wcywgZGVmYXVsdFNpemVzKVxuXG4gICAgY29uc3QgbW90aW9uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuaW5kZXRlcm1pbmF0ZSA9PT0gdHJ1ZSB8fCBwcm9wcy5xdWVyeSA9PT0gdHJ1ZSlcbiAgICBjb25zdCB3aWR0aFJldmVyc2UgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5yZXZlcnNlICE9PSBwcm9wcy5xdWVyeSlcbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi4oc2l6ZVN0eWxlLnZhbHVlICE9PSBudWxsID8gc2l6ZVN0eWxlLnZhbHVlIDoge30pLFxuICAgICAgJy0tcS1saW5lYXItcHJvZ3Jlc3Mtc3BlZWQnOiBgJHsgcHJvcHMuYW5pbWF0aW9uU3BlZWQgfW1zYFxuICAgIH0pKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3MnXG4gICAgICArIChwcm9wcy5jb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICArIChwcm9wcy5yZXZlcnNlID09PSB0cnVlIHx8IHByb3BzLnF1ZXJ5ID09PSB0cnVlID8gJyBxLWxpbmVhci1wcm9ncmVzcy0tcmV2ZXJzZScgOiAnJylcbiAgICAgICsgKHByb3BzLnJvdW5kZWQgPT09IHRydWUgPyAnIHJvdW5kZWQtYm9yZGVycycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4gd2lkdGgocHJvcHMuYnVmZmVyICE9PSB2b2lkIDAgPyBwcm9wcy5idWZmZXIgOiAxLCB3aWR0aFJldmVyc2UudmFsdWUsIHByb3h5LiRxKSlcbiAgICBjb25zdCB0cmFuc2l0aW9uU3VmZml4ID0gY29tcHV0ZWQoKCkgPT4gYHdpdGgkeyBwcm9wcy5pbnN0YW50RmVlZGJhY2sgPT09IHRydWUgPyAnb3V0JyA6ICcnIH0tdHJhbnNpdGlvbmApXG5cbiAgICBjb25zdCB0cmFja0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzc19fdHJhY2sgYWJzb2x1dGUtZnVsbCdcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fdHJhY2stLSR7IHRyYW5zaXRpb25TdWZmaXgudmFsdWUgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fdHJhY2stLSR7IGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICdkYXJrJyA6ICdsaWdodCcgfWBcbiAgICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IG1vZGVsU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB3aWR0aChtb3Rpb24udmFsdWUgPT09IHRydWUgPyAxIDogcHJvcHMudmFsdWUsIHdpZHRoUmV2ZXJzZS52YWx1ZSwgcHJveHkuJHEpKVxuICAgIGNvbnN0IG1vZGVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzX19tb2RlbCBhYnNvbHV0ZS1mdWxsJ1xuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX19tb2RlbC0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX19tb2RlbC0tJHsgbW90aW9uLnZhbHVlID09PSB0cnVlID8gJ2luJyA6ICcnIH1kZXRlcm1pbmF0ZWBcbiAgICApXG5cbiAgICBjb25zdCBzdHJpcGVTdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7IHdpZHRoOiBgJHsgcHJvcHMudmFsdWUgKiAxMDAgfSVgIH0pKVxuICAgIGNvbnN0IHN0cmlwZUNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWxpbmVhci1wcm9ncmVzc19fc3RyaXBlIGFic29sdXRlLSR7IHByb3BzLnJldmVyc2UgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX3N0cmlwZS0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiB0cmFja0NsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogbW9kZWxDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogbW9kZWxTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5zdHJpcGUgPT09IHRydWUgJiYgbW90aW9uLnZhbHVlID09PSBmYWxzZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHN0cmlwZUNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBzdHJpcGVTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogMSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlXG4gICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICA6IHByb3BzLnZhbHVlXG4gICAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNoaWxkKSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5LmpzJ1xuaW1wb3J0IHsgdm1IYXNSb3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG5sZXQgY291bnRlciA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5Qcm9wcyA9IHtcbiAgZnVsbHNjcmVlbjogQm9vbGVhbixcbiAgbm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0OiBCb29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGdWxsc2NyZWVuRW1pdHMgPSBbICd1cGRhdGU6ZnVsbHNjcmVlbicsICdmdWxsc2NyZWVuJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cblxuICBsZXQgaGlzdG9yeUVudHJ5LCBmdWxsc2NyZWVuRmlsbGVyTm9kZSwgY29udGFpbmVyXG4gIGNvbnN0IGluRnVsbHNjcmVlbiA9IHJlZihmYWxzZSlcblxuICB2bUhhc1JvdXRlcih2bSkgPT09IHRydWUgJiYgd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCAoKSA9PiB7XG4gICAgcHJvcHMubm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0ICE9PSB0cnVlICYmIGV4aXRGdWxsc2NyZWVuKClcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5mdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB2KSB7XG4gICAgICB0b2dnbGVGdWxsc2NyZWVuKClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goaW5GdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBlbWl0KCd1cGRhdGU6ZnVsbHNjcmVlbicsIHYpXG4gICAgZW1pdCgnZnVsbHNjcmVlbicsIHYpXG4gIH0pXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IHRydWVcbiAgICBjb250YWluZXIgPSBwcm94eS4kZWwucGFyZW50Tm9kZVxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZnVsbHNjcmVlbkZpbGxlck5vZGUsIHByb3h5LiRlbClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb3h5LiRlbClcblxuICAgIGNvdW50ZXIrK1xuICAgIGlmIChjb3VudGVyID09PSAxKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tZnVsbHNjcmVlbi1taXhpbicpXG4gICAgfVxuXG4gICAgaGlzdG9yeUVudHJ5ID0ge1xuICAgICAgaGFuZGxlcjogZXhpdEZ1bGxzY3JlZW5cbiAgICB9XG4gICAgSGlzdG9yeS5hZGQoaGlzdG9yeUVudHJ5KVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm94eS4kZWwsIGZ1bGxzY3JlZW5GaWxsZXJOb2RlKVxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlXG5cbiAgICBjb3VudGVyID0gTWF0aC5tYXgoMCwgY291bnRlciAtIDEpXG5cbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuXG4gICAgICBpZiAocHJveHkuJGVsLnNjcm9sbEludG9WaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldygpIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgZnVsbHNjcmVlbkZpbGxlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUgJiYgc2V0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KGV4aXRGdWxsc2NyZWVuKVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICBzZXRGdWxsc2NyZWVuLFxuICAgIGV4aXRGdWxsc2NyZWVuXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbkZ1bGxzY3JlZW4sXG4gICAgdG9nZ2xlRnVsbHNjcmVlblxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc29ydERhdGUgKGEsIGIpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShhKSkgLSAobmV3IERhdGUoYikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0Qm9vbGVhbiAoYSwgYikge1xuICByZXR1cm4gYSAmJiAhYlxuICAgID8gLTFcbiAgICA6ICghYSAmJiBiID8gMSA6IDApXG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc29ydERhdGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3NvcnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNEYXRlLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVTb3J0UHJvcHMgPSB7XG4gIHNvcnRNZXRob2Q6IEZ1bmN0aW9uLFxuICBiaW5hcnlTdGF0ZVNvcnQ6IEJvb2xlYW4sXG4gIGNvbHVtblNvcnRPcmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA9PT0gJ2FkJyB8fCB2ID09PSAnZGEnLFxuICAgIGRlZmF1bHQ6ICdhZCdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVTb3J0IChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKSB7XG4gIGNvbnN0IGNvbHVtblRvU29ydCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHNvcnRCeSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gc29ydEJ5XG4gICAgICA/IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSkgfHwgbnVsbFxuICAgICAgOiBudWxsXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRTb3J0TWV0aG9kID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnNvcnRNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5zb3J0TWV0aG9kXG4gICAgICA6IChkYXRhLCBzb3J0QnksIGRlc2NlbmRpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2wgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBzb3J0QnkpXG4gICAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwIHx8IGNvbC5maWVsZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBkaXIgPSBkZXNjZW5kaW5nID09PSB0cnVlID8gLTEgOiAxLFxuICAgICAgICAgICAgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IHYgPT4gY29sLmZpZWxkKHYpXG4gICAgICAgICAgICAgIDogdiA9PiB2WyBjb2wuZmllbGQgXVxuXG4gICAgICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgIEEgPSB2YWwoYSksXG4gICAgICAgICAgICAgIEIgPSB2YWwoYilcblxuICAgICAgICAgICAgaWYgKEEgPT09IG51bGwgfHwgQSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAtMSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEIgPT09IG51bGwgfHwgQiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sLnNvcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gY29sLnNvcnQoQSwgQiwgYSwgYikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc051bWJlcihBKSA9PT0gdHJ1ZSAmJiBpc051bWJlcihCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKEEgLSBCKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGF0ZShBKSA9PT0gdHJ1ZSAmJiBpc0RhdGUoQikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNvcnREYXRlKEEsIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIEEgPT09ICdib29sZWFuJyAmJiB0eXBlb2YgQiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFsgQSwgQiBdID0gWyBBLCBCIF0ubWFwKHMgPT4gKHMgKyAnJykudG9Mb2NhbGVTdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICAgICAgICByZXR1cm4gQSA8IEJcbiAgICAgICAgICAgICAgPyAtMSAqIGRpclxuICAgICAgICAgICAgICA6IChBID09PSBCID8gMCA6IGRpcilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICkpXG5cbiAgZnVuY3Rpb24gc29ydCAoY29sIC8qIFN0cmluZyhjb2wgbmFtZSkgb3IgT2JqZWN0KGNvbCBkZWZpbml0aW9uKSAqLykge1xuICAgIGxldCBzb3J0T3JkZXIgPSBwcm9wcy5jb2x1bW5Tb3J0T3JkZXJcblxuICAgIGlmIChpc09iamVjdChjb2wpID09PSB0cnVlKSB7XG4gICAgICBpZiAoY29sLnNvcnRPcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBjb2wuc29ydE9yZGVyXG4gICAgICB9XG5cbiAgICAgIGNvbCA9IGNvbC5uYW1lXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZGVmID0gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gY29sKVxuICAgICAgaWYgKGRlZiAhPT0gdm9pZCAwICYmIGRlZi5zb3J0T3JkZXIpIHtcbiAgICAgICAgc29ydE9yZGVyID0gZGVmLnNvcnRPcmRlclxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICBpZiAoc29ydEJ5ICE9PSBjb2wpIHtcbiAgICAgIHNvcnRCeSA9IGNvbFxuICAgICAgZGVzY2VuZGluZyA9IHNvcnRPcmRlciA9PT0gJ2RhJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5iaW5hcnlTdGF0ZVNvcnQgPT09IHRydWUpIHtcbiAgICAgIGRlc2NlbmRpbmcgPSAhZGVzY2VuZGluZ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZXNjZW5kaW5nID09PSB0cnVlKSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXNjZW5kaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7IC8vIGFzY2VuZGluZ1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gJ2FkJykge1xuICAgICAgICBkZXNjZW5kaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWdpbmF0aW9uKHsgc29ydEJ5LCBkZXNjZW5kaW5nLCBwYWdlOiAxIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbHVtblRvU29ydCxcbiAgICBjb21wdXRlZFNvcnRNZXRob2QsXG4gICAgc29ydFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVGaWx0ZXJQcm9wcyA9IHtcbiAgZmlsdGVyOiBbIFN0cmluZywgT2JqZWN0IF0sXG4gIGZpbHRlck1ldGhvZDogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlRmlsdGVyIChwcm9wcywgc2V0UGFnaW5hdGlvbikge1xuICBjb25zdCBjb21wdXRlZEZpbHRlck1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5maWx0ZXJNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5maWx0ZXJNZXRob2RcbiAgICAgIDogKHJvd3MsIHRlcm1zLCBjb2xzLCBjZWxsVmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlclRlcm1zID0gdGVybXMgPyB0ZXJtcy50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIoXG4gICAgICAgICAgICByb3cgPT4gY29scy5zb21lKGNvbCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNlbGxWYWx1ZShjb2wsIHJvdykgKyAnJ1xuICAgICAgICAgICAgICBjb25zdCBoYXlzdGFjayA9ICh2YWwgPT09ICd1bmRlZmluZWQnIHx8IHZhbCA9PT0gJ251bGwnKSA/ICcnIDogdmFsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobG93ZXJUZXJtcykgIT09IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICApKVxuXG4gIHdhdGNoKFxuICAgICgpID0+IHByb3BzLmZpbHRlcixcbiAgICAoKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0sIHRydWUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgeyBkZWVwOiB0cnVlIH1cbiAgKVxuXG4gIHJldHVybiB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gc2FtZVBhZ2luYXRpb24gKG9sZFBhZywgbmV3UGFnKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBuZXdQYWcpIHtcbiAgICBpZiAobmV3UGFnWyBwcm9wIF0gIT09IG9sZFBhZ1sgcHJvcCBdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZml4UGFnaW5hdGlvbiAocCkge1xuICBpZiAocC5wYWdlIDwgMSkge1xuICAgIHAucGFnZSA9IDFcbiAgfVxuICBpZiAocC5yb3dzUGVyUGFnZSAhPT0gdm9pZCAwICYmIHAucm93c1BlclBhZ2UgPCAxKSB7XG4gICAgcC5yb3dzUGVyUGFnZSA9IDBcbiAgfVxuICByZXR1cm4gcFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgPSB7XG4gIHBhZ2luYXRpb246IE9iamVjdCxcbiAgcm93c1BlclBhZ2VPcHRpb25zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gWyA1LCA3LCAxMCwgMTUsIDIwLCAyNSwgNTAsIDAgXVxuICB9LFxuXG4gICdvblVwZGF0ZTpwYWdpbmF0aW9uJzogWyBGdW5jdGlvbiwgQXJyYXkgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUgKHZtLCBnZXRDZWxsVmFsdWUpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCB9ID0gdm1cblxuICBjb25zdCBpbm5lclBhZ2luYXRpb24gPSByZWYoXG4gICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICBkZXNjZW5kaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICByb3dzUGVyUGFnZTogcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgPyBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnNbIDAgXVxuICAgICAgICA6IDVcbiAgICB9LCBwcm9wcy5wYWdpbmF0aW9uKVxuICApXG5cbiAgY29uc3QgY29tcHV0ZWRQYWdpbmF0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHBhZyA9IHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgICA/IHsgLi4uaW5uZXJQYWdpbmF0aW9uLnZhbHVlLCAuLi5wcm9wcy5wYWdpbmF0aW9uIH1cbiAgICAgIDogaW5uZXJQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gZml4UGFnaW5hdGlvbihwYWcpXG4gIH0pXG5cbiAgY29uc3QgaXNTZXJ2ZXJTaWRlID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NOdW1iZXIgIT09IHZvaWQgMClcblxuICBmdW5jdGlvbiBzZW5kU2VydmVyUmVxdWVzdCAocGFnaW5hdGlvbikge1xuICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbih7XG4gICAgICBwYWdpbmF0aW9uLFxuICAgICAgZmlsdGVyOiBwcm9wcy5maWx0ZXJcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWVzdFNlcnZlckludGVyYWN0aW9uIChwcm9wID0ge30pIHtcbiAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICBlbWl0KCdyZXF1ZXN0Jywge1xuICAgICAgICBwYWdpbmF0aW9uOiBwcm9wLnBhZ2luYXRpb24gfHwgY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgICBmaWx0ZXI6IHByb3AuZmlsdGVyIHx8IHByb3BzLmZpbHRlcixcbiAgICAgICAgZ2V0Q2VsbFZhbHVlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzZXRQYWdpbmF0aW9uICh2YWwsIGZvcmNlU2VydmVyUmVxdWVzdCkge1xuICAgIGNvbnN0IG5ld1BhZ2luYXRpb24gPSBmaXhQYWdpbmF0aW9uKHtcbiAgICAgIC4uLmNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgIC4uLnZhbFxuICAgIH0pXG5cbiAgICBpZiAoc2FtZVBhZ2luYXRpb24oY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLCBuZXdQYWdpbmF0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSAmJiBmb3JjZVNlcnZlclJlcXVlc3QgPT09IHRydWUpIHtcbiAgICAgICAgc2VuZFNlcnZlclJlcXVlc3QobmV3UGFnaW5hdGlvbilcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHNlbmRTZXJ2ZXJSZXF1ZXN0KG5ld1BhZ2luYXRpb24pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9wcy5wYWdpbmF0aW9uICE9PSB2b2lkIDBcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6cGFnaW5hdGlvbicsIG5ld1BhZ2luYXRpb24pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5uZXJQYWdpbmF0aW9uLnZhbHVlID0gbmV3UGFnaW5hdGlvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5uZXJQYWdpbmF0aW9uLFxuICAgIGNvbXB1dGVkUGFnaW5hdGlvbixcbiAgICBpc1NlcnZlclNpZGUsXG5cbiAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgc2V0UGFnaW5hdGlvblxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVBhZ2luYXRpb24gKHZtLCBpbm5lclBhZ2luYXRpb24sIGNvbXB1dGVkUGFnaW5hdGlvbiwgaXNTZXJ2ZXJTaWRlLCBzZXRQYWdpbmF0aW9uLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICBjb25zdCBjb21wdXRlZFJvd3NOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICA/IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzTnVtYmVyIHx8IDBcbiAgICAgIDogZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyLnZhbHVlXG4gICkpXG5cbiAgY29uc3QgZmlyc3RSb3dJbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICByZXR1cm4gKHBhZ2UgLSAxKSAqIHJvd3NQZXJQYWdlXG4gIH0pXG5cbiAgY29uc3QgbGFzdFJvd0luZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIHJldHVybiBwYWdlICogcm93c1BlclBhZ2VcbiAgfSlcblxuICBjb25zdCBpc0ZpcnN0UGFnZSA9IGNvbXB1dGVkKCgpID0+IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5wYWdlID09PSAxKVxuXG4gIGNvbnN0IHBhZ2VzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSA9PT0gMFxuICAgICAgPyAxXG4gICAgICA6IE1hdGgubWF4KFxuICAgICAgICAxLFxuICAgICAgICBNYXRoLmNlaWwoY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlIC8gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlKVxuICAgICAgKVxuICApKVxuXG4gIGNvbnN0IGlzTGFzdFBhZ2UgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgbGFzdFJvd0luZGV4LnZhbHVlID09PSAwXG4gICAgICA/IHRydWVcbiAgICAgIDogY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2UgPj0gcGFnZXNOdW1iZXIudmFsdWVcbiAgKSlcblxuICBjb25zdCBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBvcHRzID0gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmluY2x1ZGVzKGlubmVyUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSlcbiAgICAgID8gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zXG4gICAgICA6IFsgaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlIF0uY29uY2F0KHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucylcblxuICAgIHJldHVybiBvcHRzLm1hcChjb3VudCA9PiAoe1xuICAgICAgbGFiZWw6IGNvdW50ID09PSAwID8gJHEubGFuZy50YWJsZS5hbGxSb3dzIDogJycgKyBjb3VudCxcbiAgICAgIHZhbHVlOiBjb3VudFxuICAgIH0pKVxuICB9KVxuXG4gIHdhdGNoKHBhZ2VzTnVtYmVyLCAobGFzdFBhZ2UsIG9sZExhc3RQYWdlKSA9PiB7XG4gICAgaWYgKGxhc3RQYWdlID09PSBvbGRMYXN0UGFnZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZVxuICAgIGlmIChsYXN0UGFnZSAmJiAhY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RQYWdlIDwgY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBsYXN0UGFnZSB9KVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBmaXJzdFBhZ2UgKCkge1xuICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmV2UGFnZSAoKSB7XG4gICAgY29uc3QgeyBwYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlIC0gMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRQYWdlICgpIHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAobGFzdFJvd0luZGV4LnZhbHVlID4gMCAmJiBwYWdlICogcm93c1BlclBhZ2UgPCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlICsgMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxhc3RQYWdlICgpIHtcbiAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZXNOdW1iZXIudmFsdWUgfSlcbiAgfVxuXG4gIGlmIChwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgeyAuLi5jb21wdXRlZFBhZ2luYXRpb24udmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlyc3RSb3dJbmRleCxcbiAgICBsYXN0Um93SW5kZXgsXG4gICAgaXNGaXJzdFBhZ2UsXG4gICAgaXNMYXN0UGFnZSxcbiAgICBwYWdlc051bWJlcixcbiAgICBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICBmaXJzdFBhZ2UsXG4gICAgcHJldlBhZ2UsXG4gICAgbmV4dFBhZ2UsXG4gICAgbGFzdFBhZ2VcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzID0ge1xuICBzZWxlY3Rpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ25vbmUnLFxuICAgIHZhbGlkYXRvcjogdiA9PiBbICdzaW5nbGUnLCAnbXVsdGlwbGUnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICB9LFxuICBzZWxlY3RlZDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgPSBbICd1cGRhdGU6c2VsZWN0ZWQnLCAnc2VsZWN0aW9uJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd1NlbGVjdGlvbiAocHJvcHMsIGVtaXQsIGNvbXB1dGVkUm93cywgZ2V0Um93S2V5KSB7XG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0ge31cbiAgICBwcm9wcy5zZWxlY3RlZC5tYXAoZ2V0Um93S2V5LnZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBrZXlzWyBrZXkgXSA9IHRydWVcbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH0pXG5cbiAgY29uc3QgaGFzU2VsZWN0aW9uTW9kZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uICE9PSAnbm9uZSdcbiAgfSlcblxuICBjb25zdCBzaW5nbGVTZWxlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiA9PT0gJ3NpbmdsZSdcbiAgfSlcblxuICBjb25zdCBtdWx0aXBsZVNlbGVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uID09PSAnbXVsdGlwbGUnXG4gIH0pXG5cbiAgY29uc3QgYWxsUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoID4gMCAmJiBjb21wdXRlZFJvd3MudmFsdWUuZXZlcnkoXG4gICAgICByb3cgPT4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBnZXRSb3dLZXkudmFsdWUocm93KSBdID09PSB0cnVlXG4gICAgKVxuICApXG5cbiAgY29uc3Qgc29tZVJvd3NTZWxlY3RlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgYWxsUm93c1NlbGVjdGVkLnZhbHVlICE9PSB0cnVlXG4gICAgJiYgY29tcHV0ZWRSb3dzLnZhbHVlLnNvbWUocm93ID0+IHNlbGVjdGVkS2V5cy52YWx1ZVsgZ2V0Um93S2V5LnZhbHVlKHJvdykgXSA9PT0gdHJ1ZSlcbiAgKVxuXG4gIGNvbnN0IHJvd3NTZWxlY3RlZE51bWJlciA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkLmxlbmd0aClcblxuICBmdW5jdGlvbiBpc1Jvd1NlbGVjdGVkIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBrZXkgXSA9PT0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24gKCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZCcsIFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9uIChrZXlzLCByb3dzLCBhZGRlZCwgZXZ0KSB7XG4gICAgZW1pdCgnc2VsZWN0aW9uJywgeyByb3dzLCBhZGRlZCwga2V5cywgZXZ0IH0pXG5cbiAgICBjb25zdCBwYXlsb2FkID0gc2luZ2xlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlXG4gICAgICA/IChhZGRlZCA9PT0gdHJ1ZSA/IHJvd3MgOiBbXSlcbiAgICAgIDogKFxuICAgICAgICAgIGFkZGVkID09PSB0cnVlXG4gICAgICAgICAgICA/IHByb3BzLnNlbGVjdGVkLmNvbmNhdChyb3dzKVxuICAgICAgICAgICAgOiBwcm9wcy5zZWxlY3RlZC5maWx0ZXIoXG4gICAgICAgICAgICAgIHJvdyA9PiBrZXlzLmluY2x1ZGVzKGdldFJvd0tleS52YWx1ZShyb3cpKSA9PT0gZmFsc2VcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgcGF5bG9hZClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFzU2VsZWN0aW9uTW9kZSxcbiAgICBzaW5nbGVTZWxlY3Rpb24sXG4gICAgbXVsdGlwbGVTZWxlY3Rpb24sXG4gICAgYWxsUm93c1NlbGVjdGVkLFxuICAgIHNvbWVSb3dzU2VsZWN0ZWQsXG4gICAgcm93c1NlbGVjdGVkTnVtYmVyLFxuXG4gICAgaXNSb3dTZWxlY3RlZCxcbiAgICBjbGVhclNlbGVjdGlvbixcbiAgICB1cGRhdGVTZWxlY3Rpb25cbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gZ2V0VmFsICh2YWwpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKVxuICAgID8gdmFsLnNsaWNlKClcbiAgICA6IFtdXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd0V4cGFuZFByb3BzID0ge1xuICBleHBhbmRlZDogQXJyYXkgLy8gdi1tb2RlbDpleHBhbmRlZFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyA9IFsgJ3VwZGF0ZTpleHBhbmRlZCcgXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVSb3dFeHBhbmQgKHByb3BzLCBlbWl0KSB7XG4gIGNvbnN0IGlubmVyRXhwYW5kZWQgPSByZWYoZ2V0VmFsKHByb3BzLmV4cGFuZGVkKSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5leHBhbmRlZCwgdmFsID0+IHtcbiAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gZ2V0VmFsKHZhbClcbiAgfSlcblxuICBmdW5jdGlvbiBpc1Jvd0V4cGFuZGVkIChrZXkpIHtcbiAgICByZXR1cm4gaW5uZXJFeHBhbmRlZC52YWx1ZS5pbmNsdWRlcyhrZXkpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRFeHBhbmRlZCAodmFsKSB7XG4gICAgaWYgKHByb3BzLmV4cGFuZGVkICE9PSB2b2lkIDApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpleHBhbmRlZCcsIHZhbClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gdmFsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRXhwYW5kZWQgKGtleSwgYWRkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaW5uZXJFeHBhbmRlZC52YWx1ZS5zbGljZSgpXG4gICAgY29uc3QgaW5kZXggPSB0YXJnZXQuaW5kZXhPZihrZXkpXG5cbiAgICBpZiAoYWRkID09PSB0cnVlKSB7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRhcmdldC5wdXNoKGtleSlcbiAgICAgICAgc2V0RXhwYW5kZWQodGFyZ2V0KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRhcmdldC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzZXRFeHBhbmRlZCh0YXJnZXQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1Jvd0V4cGFuZGVkLFxuICAgIHNldEV4cGFuZGVkLFxuICAgIHVwZGF0ZUV4cGFuZGVkXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb25Qcm9wcyA9IHtcbiAgdmlzaWJsZUNvbHVtbnM6IEFycmF5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbiAocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgaGFzU2VsZWN0aW9uTW9kZSkge1xuICBjb25zdCBjb2xMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5jb2x1bW5zICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2x1bW5zXG4gICAgfVxuXG4gICAgLy8gd2UgaW5mZXIgY29sdW1ucyBmcm9tIGZpcnN0IHJvd1xuICAgIGNvbnN0IHJvdyA9IHByb3BzLnJvd3NbIDAgXVxuXG4gICAgcmV0dXJuIHJvdyAhPT0gdm9pZCAwXG4gICAgICA/IE9iamVjdC5rZXlzKHJvdykubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGFiZWw6IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgZmllbGQ6IG5hbWUsXG4gICAgICAgIGFsaWduOiBpc051bWJlcihyb3dbIG5hbWUgXSkgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSkpXG4gICAgICA6IFtdXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIGNvbnN0IGNvbHMgPSBwcm9wcy52aXNpYmxlQ29sdW1ucyAhPT0gdm9pZCAwXG4gICAgICA/IGNvbExpc3QudmFsdWUuZmlsdGVyKGNvbCA9PiBjb2wucmVxdWlyZWQgPT09IHRydWUgfHwgcHJvcHMudmlzaWJsZUNvbHVtbnMuaW5jbHVkZXMoY29sLm5hbWUpID09PSB0cnVlKVxuICAgICAgOiBjb2xMaXN0LnZhbHVlXG5cbiAgICByZXR1cm4gY29scy5tYXAoY29sID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gY29sLmFsaWduIHx8ICdyaWdodCdcbiAgICAgIGNvbnN0IGFsaWduQ2xhc3MgPSBgdGV4dC0keyBhbGlnbiB9YFxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb2wsXG4gICAgICAgIGFsaWduLFxuICAgICAgICBfX2ljb25DbGFzczogYHEtdGFibGVfX3NvcnQtaWNvbiBxLXRhYmxlX19zb3J0LWljb24tLSR7IGFsaWduIH1gLFxuICAgICAgICBfX3RoQ2xhc3M6IGFsaWduQ2xhc3NcbiAgICAgICAgICArIChjb2wuaGVhZGVyQ2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgY29sLmhlYWRlckNsYXNzZXMgOiAnJylcbiAgICAgICAgICArIChjb2wuc29ydGFibGUgPT09IHRydWUgPyAnIHNvcnRhYmxlJyA6ICcnKVxuICAgICAgICAgICsgKGNvbC5uYW1lID09PSBzb3J0QnkgPyBgIHNvcnRlZCAkeyBkZXNjZW5kaW5nID09PSB0cnVlID8gJ3NvcnQtZGVzYycgOiAnJyB9YCA6ICcnKSxcblxuICAgICAgICBfX3RkU3R5bGU6IGNvbC5zdHlsZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb2wuc3R5bGUgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGNvbC5zdHlsZVxuICAgICAgICAgICAgICAgIDogY29sLnN0eWxlXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBudWxsLFxuXG4gICAgICAgIF9fdGRDbGFzczogY29sLmNsYXNzZXMgIT09IHZvaWQgMFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgICB0eXBlb2YgY29sLmNsYXNzZXMgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlc1xuICAgICAgICAgICAgICAgIDogcm93ID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlcyhyb3cpXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBhbGlnbkNsYXNzXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSB7fVxuICAgIGNvbXB1dGVkQ29scy52YWx1ZS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICBuYW1lc1sgY29sLm5hbWUgXSA9IGNvbFxuICAgIH0pXG4gICAgcmV0dXJuIG5hbWVzXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzcGFuID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy50YWJsZUNvbHNwYW4gIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy50YWJsZUNvbHNwYW5cbiAgICAgIDogY29tcHV0ZWRDb2xzLnZhbHVlLmxlbmd0aCArIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlID8gMSA6IDApXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBjb2xMaXN0LFxuICAgIGNvbXB1dGVkQ29scyxcbiAgICBjb21wdXRlZENvbHNNYXAsXG4gICAgY29tcHV0ZWRDb2xzcGFuXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRVGggZnJvbSAnLi9RVGguanMnXG5cbmltcG9ydCBRU2VwYXJhdG9yIGZyb20gJy4uL3NlcGFyYXRvci9RU2VwYXJhdG9yLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVZpcnR1YWxTY3JvbGwgZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvUVZpcnR1YWxTY3JvbGwuanMnXG5pbXBvcnQgUVNlbGVjdCBmcm9tICcuLi9zZWxlY3QvUVNlbGVjdC5qcydcbmltcG9ydCBRTGluZWFyUHJvZ3Jlc3MgZnJvbSAnLi4vbGluZWFyLXByb2dyZXNzL1FMaW5lYXJQcm9ncmVzcy5qcydcbmltcG9ydCBRQ2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3gvUUNoZWNrYm94LmpzJ1xuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5cbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuL2dldC10YWJsZS1taWRkbGUuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyBjb21tb25WaXJ0UHJvcHNMaXN0IH0gZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvdXNlLXZpcnR1YWwtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZUZ1bGxzY3JlZW4sIHsgdXNlRnVsbHNjcmVlblByb3BzLCB1c2VGdWxsc2NyZWVuRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mdWxsc2NyZWVuLmpzJ1xuXG5pbXBvcnQgeyB1c2VUYWJsZVNvcnQsIHVzZVRhYmxlU29ydFByb3BzIH0gZnJvbSAnLi90YWJsZS1zb3J0LmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVGaWx0ZXIsIHVzZVRhYmxlRmlsdGVyUHJvcHMgfSBmcm9tICcuL3RhYmxlLWZpbHRlci5qcydcbmltcG9ydCB7IHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlLCB1c2VUYWJsZVBhZ2luYXRpb24sIHVzZVRhYmxlUGFnaW5hdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1wYWdpbmF0aW9uLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVSb3dTZWxlY3Rpb24sIHVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMsIHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgfSBmcm9tICcuL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMnXG5pbXBvcnQgeyB1c2VUYWJsZVJvd0V4cGFuZCwgdXNlVGFibGVSb3dFeHBhbmRQcm9wcywgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyB9IGZyb20gJy4vdGFibGUtcm93LWV4cGFuZC5qcydcbmltcG9ydCB7IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uLCB1c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzJ1xuXG5pbXBvcnQgeyBpbmplY3RQcm9wLCBpbmplY3RNdWx0aXBsZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9pbmplY3Qtb2JqLXByb3AuanMnXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3QgYm90dG9tQ2xhc3MgPSAncS10YWJsZV9fYm90dG9tIHJvdyBpdGVtcy1jZW50ZXInXG5cbmNvbnN0IGNvbW1vblZpcnRQcm9wc09iaiA9IHt9XG5jb21tb25WaXJ0UHJvcHNMaXN0LmZvckVhY2gocCA9PiB7IGNvbW1vblZpcnRQcm9wc09ialsgcCBdID0ge30gfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgfSxcbiAgICByb3dLZXk6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBGdW5jdGlvbiBdLFxuICAgICAgZGVmYXVsdDogJ2lkJ1xuICAgIH0sXG5cbiAgICBjb2x1bW5zOiBBcnJheSxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuXG4gICAgaWNvbkZpcnN0UGFnZTogU3RyaW5nLFxuICAgIGljb25QcmV2UGFnZTogU3RyaW5nLFxuICAgIGljb25OZXh0UGFnZTogU3RyaW5nLFxuICAgIGljb25MYXN0UGFnZTogU3RyaW5nLFxuXG4gICAgdGl0bGU6IFN0cmluZyxcblxuICAgIGhpZGVIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBncmlkOiBCb29sZWFuLFxuICAgIGdyaWRIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBzZXBhcmF0b3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdob3Jpem9udGFsJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2NlbGwnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgdmlydHVhbFNjcm9sbDogQm9vbGVhbixcbiAgICB2aXJ0dWFsU2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9LFxuICAgIC4uLmNvbW1vblZpcnRQcm9wc09iaixcblxuICAgIG5vRGF0YUxhYmVsOiBTdHJpbmcsXG4gICAgbm9SZXN1bHRzTGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nTGFiZWw6IFN0cmluZyxcbiAgICBzZWxlY3RlZFJvd3NMYWJlbDogRnVuY3Rpb24sXG4gICAgcm93c1BlclBhZ2VMYWJlbDogU3RyaW5nLFxuICAgIHBhZ2luYXRpb25MYWJlbDogRnVuY3Rpb24sXG5cbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2dyZXktOCdcbiAgICB9LFxuXG4gICAgdGl0bGVDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZVN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVIZWFkZXJTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUhlYWRlckNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDb250YWluZXJDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkQ29udGFpbmVyU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZFN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcblxuICAgIGhpZGVCb3R0b206IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkQmFubmVyOiBCb29sZWFuLFxuICAgIGhpZGVOb0RhdGE6IEJvb2xlYW4sXG4gICAgaGlkZVBhZ2luYXRpb246IEJvb2xlYW4sXG5cbiAgICBvblJvd0NsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0RibGNsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0NvbnRleHRtZW51OiBGdW5jdGlvbixcblxuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VGdWxsc2NyZWVuUHJvcHMsXG5cbiAgICAuLi51c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlRmlsdGVyUHJvcHMsXG4gICAgLi4udXNlVGFibGVQYWdpbmF0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVSb3dFeHBhbmRQcm9wcyxcbiAgICAuLi51c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlU29ydFByb3BzXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAncmVxdWVzdCcsICd2aXJ0dWFsU2Nyb2xsJyxcbiAgICAuLi51c2VGdWxsc2NyZWVuRW1pdHMsXG4gICAgLi4udXNlVGFibGVSb3dFeHBhbmRFbWl0cyxcbiAgICAuLi51c2VUYWJsZVJvd1NlbGVjdGlvbkVtaXRzXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBpbkZ1bGxzY3JlZW4sIHRvZ2dsZUZ1bGxzY3JlZW4gfSA9IHVzZUZ1bGxzY3JlZW4oKVxuXG4gICAgY29uc3QgZ2V0Um93S2V5ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdHlwZW9mIHByb3BzLnJvd0tleSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHByb3BzLnJvd0tleVxuICAgICAgICA6IHJvdyA9PiByb3dbIHByb3BzLnJvd0tleSBdXG4gICAgKSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCB2aXJ0U2Nyb2xsUmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgaGFzVmlydFNjcm9sbCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmdyaWQgIT09IHRydWUgJiYgcHJvcHMudmlydHVhbFNjcm9sbCA9PT0gdHJ1ZSlcblxuICAgIGNvbnN0IGNhcmREZWZhdWx0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJyBxLXRhYmxlX19jYXJkJ1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlX19jYXJkLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBfX2NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXRhYmxlX19jb250YWluZXIgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yIGNvbHVtbiBuby13cmFwYFxuICAgICAgKyAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZ3JpZCcgOiBjYXJkRGVmYXVsdENsYXNzLnZhbHVlKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICAgICsgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgZnVsbHNjcmVlbiBzY3JvbGwnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgX19jb250YWluZXJDbGFzcy52YWx1ZSArIChwcm9wcy5sb2FkaW5nID09PSB0cnVlID8gJyBxLXRhYmxlLS1sb2FkaW5nJyA6ICcnKVxuICAgIClcblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gcHJvcHMudGFibGVTdHlsZSArIHByb3BzLnRhYmxlQ2xhc3MgKyBwcm9wcy50YWJsZUhlYWRlclN0eWxlICsgcHJvcHMudGFibGVIZWFkZXJDbGFzcyArIF9fY29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAoKSA9PiB7IGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUgJiYgdmlydFNjcm9sbFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnJlc2V0KCkgfVxuICAgIClcblxuICAgIGNvbnN0IHtcbiAgICAgIGlubmVyUGFnaW5hdGlvbixcbiAgICAgIGNvbXB1dGVkUGFnaW5hdGlvbixcbiAgICAgIGlzU2VydmVyU2lkZSxcblxuICAgICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uLFxuICAgICAgc2V0UGFnaW5hdGlvblxuICAgIH0gPSB1c2VUYWJsZVBhZ2luYXRpb25TdGF0ZSh2bSwgZ2V0Q2VsbFZhbHVlKVxuXG4gICAgY29uc3QgeyBjb21wdXRlZEZpbHRlck1ldGhvZCB9ID0gdXNlVGFibGVGaWx0ZXIocHJvcHMsIHNldFBhZ2luYXRpb24pXG4gICAgY29uc3QgeyBpc1Jvd0V4cGFuZGVkLCBzZXRFeHBhbmRlZCwgdXBkYXRlRXhwYW5kZWQgfSA9IHVzZVRhYmxlUm93RXhwYW5kKHByb3BzLCBlbWl0KVxuXG4gICAgY29uc3QgZmlsdGVyZWRTb3J0ZWRSb3dzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBwcm9wcy5yb3dzXG5cbiAgICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUgfHwgcm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBzb3J0QnksIGRlc2NlbmRpbmcgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgICBpZiAocHJvcHMuZmlsdGVyKSB7XG4gICAgICAgIHJvd3MgPSBjb21wdXRlZEZpbHRlck1ldGhvZC52YWx1ZShyb3dzLCBwcm9wcy5maWx0ZXIsIGNvbXB1dGVkQ29scy52YWx1ZSwgZ2V0Q2VsbFZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoY29sdW1uVG9Tb3J0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHJvd3MgPSBjb21wdXRlZFNvcnRNZXRob2QudmFsdWUoXG4gICAgICAgICAgcHJvcHMucm93cyA9PT0gcm93cyA/IHJvd3Muc2xpY2UoKSA6IHJvd3MsXG4gICAgICAgICAgc29ydEJ5LFxuICAgICAgICAgIGRlc2NlbmRpbmdcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93c1xuICAgIH0pXG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWUubGVuZ3RoKVxuXG4gICAgY29uc3QgY29tcHV0ZWRSb3dzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IHJvd3MgPSBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWVcblxuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcm93c1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgICAgaWYgKHJvd3NQZXJQYWdlICE9PSAwKSB7XG4gICAgICAgIGlmIChmaXJzdFJvd0luZGV4LnZhbHVlID09PSAwICYmIHByb3BzLnJvd3MgIT09IHJvd3MpIHtcbiAgICAgICAgICBpZiAocm93cy5sZW5ndGggPiBsYXN0Um93SW5kZXgudmFsdWUpIHtcbiAgICAgICAgICAgIHJvd3MgPSByb3dzLnNsaWNlKDAsIGxhc3RSb3dJbmRleC52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcm93cyA9IHJvd3Muc2xpY2UoZmlyc3RSb3dJbmRleC52YWx1ZSwgbGFzdFJvd0luZGV4LnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzXG4gICAgfSlcblxuICAgIGNvbnN0IHtcbiAgICAgIGhhc1NlbGVjdGlvbk1vZGUsXG4gICAgICBzaW5nbGVTZWxlY3Rpb24sXG4gICAgICBtdWx0aXBsZVNlbGVjdGlvbixcbiAgICAgIGFsbFJvd3NTZWxlY3RlZCxcbiAgICAgIHNvbWVSb3dzU2VsZWN0ZWQsXG4gICAgICByb3dzU2VsZWN0ZWROdW1iZXIsXG5cbiAgICAgIGlzUm93U2VsZWN0ZWQsXG4gICAgICBjbGVhclNlbGVjdGlvbixcbiAgICAgIHVwZGF0ZVNlbGVjdGlvblxuICAgIH0gPSB1c2VUYWJsZVJvd1NlbGVjdGlvbihwcm9wcywgZW1pdCwgY29tcHV0ZWRSb3dzLCBnZXRSb3dLZXkpXG5cbiAgICBjb25zdCB7IGNvbExpc3QsIGNvbXB1dGVkQ29scywgY29tcHV0ZWRDb2xzTWFwLCBjb21wdXRlZENvbHNwYW4gfSA9IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGhhc1NlbGVjdGlvbk1vZGUpXG5cbiAgICBjb25zdCB7IGNvbHVtblRvU29ydCwgY29tcHV0ZWRTb3J0TWV0aG9kLCBzb3J0IH0gPSB1c2VUYWJsZVNvcnQocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgY29sTGlzdCwgc2V0UGFnaW5hdGlvbilcblxuICAgIGNvbnN0IHtcbiAgICAgIGZpcnN0Um93SW5kZXgsXG4gICAgICBsYXN0Um93SW5kZXgsXG4gICAgICBpc0ZpcnN0UGFnZSxcbiAgICAgIGlzTGFzdFBhZ2UsXG4gICAgICBwYWdlc051bWJlcixcbiAgICAgIGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLFxuICAgICAgY29tcHV0ZWRSb3dzTnVtYmVyLFxuXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2VcbiAgICB9ID0gdXNlVGFibGVQYWdpbmF0aW9uKHZtLCBpbm5lclBhZ2luYXRpb24sIGNvbXB1dGVkUGFnaW5hdGlvbiwgaXNTZXJ2ZXJTaWRlLCBzZXRQYWdpbmF0aW9uLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIpXG5cbiAgICBjb25zdCBub3RoaW5nVG9EaXNwbGF5ID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRSb3dzLnZhbHVlLmxlbmd0aCA9PT0gMClcblxuICAgIGNvbnN0IHZpcnRQcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHt9XG5cbiAgICAgIGNvbW1vblZpcnRQcm9wc0xpc3RcbiAgICAgICAgLmZvckVhY2gocCA9PiB7IGFjY1sgcCBdID0gcHJvcHNbIHAgXSB9KVxuXG4gICAgICBpZiAoYWNjLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFjYy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgPSBwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/IDI4IDogNDhcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiByZXNldFZpcnR1YWxTY3JvbGwgKCkge1xuICAgICAgaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnJlc2V0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5ICgpIHtcbiAgICAgIGlmIChwcm9wcy5ncmlkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBnZXRHcmlkQm9keSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhlYWRlciA9IHByb3BzLmhpZGVIZWFkZXIgIT09IHRydWUgPyBnZXRUSGVhZCA6IG51bGxcblxuICAgICAgaWYgKGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgdG9wUm93ID0gc2xvdHNbICd0b3Atcm93JyBdXG4gICAgICAgIGNvbnN0IGJvdHRvbVJvdyA9IHNsb3RzWyAnYm90dG9tLXJvdycgXVxuXG4gICAgICAgIGNvbnN0IHZpcnRTbG90cyA9IHtcbiAgICAgICAgICBkZWZhdWx0OiBwcm9wcyA9PiBnZXRUQm9keVRSKHByb3BzLml0ZW0sIHNsb3RzLmJvZHksIHByb3BzLmluZGV4KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvcFJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29uc3QgdG9wQ29udGVudCA9IGgoJ3Rib2R5JywgdG9wUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuXG4gICAgICAgICAgdmlydFNsb3RzLmJlZm9yZSA9IGhlYWRlciA9PT0gbnVsbFxuICAgICAgICAgICAgPyAoKSA9PiB0b3BDb250ZW50XG4gICAgICAgICAgICA6ICgpID0+IFsgaGVhZGVyKCkgXS5jb25jYXQodG9wQ29udGVudClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgICB2aXJ0U2xvdHMuYmVmb3JlID0gaGVhZGVyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm90dG9tUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICB2aXJ0U2xvdHMuYWZ0ZXIgPSAoKSA9PiBoKCd0Ym9keScsIGJvdHRvbVJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBoKFFWaXJ0dWFsU2Nyb2xsLCB7XG4gICAgICAgICAgcmVmOiB2aXJ0U2Nyb2xsUmVmLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy50YWJsZUNsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZVN0eWxlLFxuICAgICAgICAgIC4uLnZpcnRQcm9wcy52YWx1ZSxcbiAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHByb3BzLnZpcnR1YWxTY3JvbGxUYXJnZXQsXG4gICAgICAgICAgaXRlbXM6IGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgICAgICB0eXBlOiAnX19xdGFibGUnLFxuICAgICAgICAgIHRhYmxlQ29sc3BhbjogY29tcHV0ZWRDb2xzcGFuLnZhbHVlLFxuICAgICAgICAgIG9uVmlydHVhbFNjcm9sbDogb25WU2Nyb2xsXG4gICAgICAgIH0sIHZpcnRTbG90cylcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGdldFRCb2R5KClcbiAgICAgIF1cblxuICAgICAgaWYgKGhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgICBjaGlsZC51bnNoaWZ0KGhlYWRlcigpKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0VGFibGVNaWRkbGUoe1xuICAgICAgICBjbGFzczogWyAncS10YWJsZV9fbWlkZGxlIHNjcm9sbCcsIHByb3BzLnRhYmxlQ2xhc3MgXSxcbiAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlU3R5bGVcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvICh0b0luZGV4LCBlZGdlKSB7XG4gICAgICBpZiAodmlydFNjcm9sbFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICB2aXJ0U2Nyb2xsUmVmLnZhbHVlLnNjcm9sbFRvKHRvSW5kZXgsIGVkZ2UpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0b0luZGV4ID0gcGFyc2VJbnQodG9JbmRleCwgMTApXG4gICAgICBjb25zdCByb3dFbCA9IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcihgdGJvZHkgdHI6bnRoLW9mLXR5cGUoJHsgdG9JbmRleCArIDEgfSlgKVxuXG4gICAgICBpZiAocm93RWwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCcucS10YWJsZV9fbWlkZGxlLnNjcm9sbCcpXG4gICAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHJvd0VsLm9mZnNldFRvcCAtIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnRcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gb2Zmc2V0VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA/ICdkZWNyZWFzZScgOiAnaW5jcmVhc2UnXG5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IG9mZnNldFRvcFxuXG4gICAgICAgIGVtaXQoJ3ZpcnR1YWxTY3JvbGwnLCB7XG4gICAgICAgICAgaW5kZXg6IHRvSW5kZXgsXG4gICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICB0bzogaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlIC0gMSxcbiAgICAgICAgICBkaXJlY3Rpb25cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblZTY3JvbGwgKGluZm8pIHtcbiAgICAgIGVtaXQoJ3ZpcnR1YWxTY3JvbGwnLCBpbmZvKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb2dyZXNzICgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoUUxpbmVhclByb2dyZXNzLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19saW5lYXItcHJvZ3Jlc3MnLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgaW5kZXRlcm1pbmF0ZTogdHJ1ZSxcbiAgICAgICAgICB0cmFja0NvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEJvZHlUUiAocm93LCBib2R5U2xvdCwgcGFnZUluZGV4KSB7XG4gICAgICBjb25zdFxuICAgICAgICBrZXkgPSBnZXRSb3dLZXkudmFsdWUocm93KSxcbiAgICAgICAgc2VsZWN0ZWQgPSBpc1Jvd1NlbGVjdGVkKGtleSlcblxuICAgICAgaWYgKGJvZHlTbG90ICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGJvZHlTbG90KFxuICAgICAgICAgIGdldEJvZHlTY29wZSh7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgICBwYWdlSW5kZXgsXG4gICAgICAgICAgICBfX3RyQ2xhc3M6IHNlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICBib2R5Q2VsbCA9IHNsb3RzWyAnYm9keS1jZWxsJyBdLFxuICAgICAgICBjaGlsZCA9IGNvbXB1dGVkQ29scy52YWx1ZS5tYXAoY29sID0+IHtcbiAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgYm9keUNlbGxDb2wgPSBzbG90c1sgYGJvZHktY2VsbC0keyBjb2wubmFtZSB9YCBdLFxuICAgICAgICAgICAgc2xvdCA9IGJvZHlDZWxsQ29sICE9PSB2b2lkIDAgPyBib2R5Q2VsbENvbCA6IGJvZHlDZWxsXG5cbiAgICAgICAgICByZXR1cm4gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgICA/IHNsb3QoZ2V0Qm9keUNlbGxTY29wZSh7IGtleSwgcm93LCBwYWdlSW5kZXgsIGNvbCB9KSlcbiAgICAgICAgICAgIDogaCgndGQnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBjb2wuX190ZENsYXNzKHJvdyksXG4gICAgICAgICAgICAgIHN0eWxlOiBjb2wuX190ZFN0eWxlKHJvdylcbiAgICAgICAgICAgIH0sIGdldENlbGxWYWx1ZShjb2wsIHJvdykpXG4gICAgICAgIH0pXG5cbiAgICAgIGlmIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2JvZHktc2VsZWN0aW9uJyBdXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QoZ2V0Qm9keVNlbGVjdGlvblNjb3BlKHsga2V5LCByb3csIHBhZ2VJbmRleCB9KSlcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBzZWxlY3RlZCxcbiAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKFsga2V5IF0sIFsgcm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RkJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCBjb250ZW50KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7IGtleSwgY2xhc3M6IHsgc2VsZWN0ZWQgfSB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ1Jvd0NsaWNrJywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkRibGNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdSb3dEYmxjbGljaycsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93Q29udGV4dG1lbnUgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25Db250ZXh0bWVudSA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgnUm93Q29udGV4dG1lbnUnLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0cicsIGRhdGEsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRCb2R5ICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGJvZHkgPSBzbG90cy5ib2R5LFxuICAgICAgICB0b3BSb3cgPSBzbG90c1sgJ3RvcC1yb3cnIF0sXG4gICAgICAgIGJvdHRvbVJvdyA9IHNsb3RzWyAnYm90dG9tLXJvdycgXVxuXG4gICAgICBsZXQgY2hpbGQgPSBjb21wdXRlZFJvd3MudmFsdWUubWFwKFxuICAgICAgICAocm93LCBwYWdlSW5kZXgpID0+IGdldFRCb2R5VFIocm93LCBib2R5LCBwYWdlSW5kZXgpXG4gICAgICApXG5cbiAgICAgIGlmICh0b3BSb3cgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IHRvcFJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KS5jb25jYXQoY2hpbGQpXG4gICAgICB9XG4gICAgICBpZiAoYm90dG9tUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQgPSBjaGlsZC5jb25jYXQoYm90dG9tUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGJvZHknLCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5U2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuXG4gICAgICBkYXRhLmNvbHMgPSBkYXRhLmNvbHMubWFwKFxuICAgICAgICBjb2wgPT4gaW5qZWN0UHJvcCh7IC4uLmNvbCB9LCAndmFsdWUnLCAoKSA9PiBnZXRDZWxsVmFsdWUoY29sLCBkYXRhLnJvdykpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keUNlbGxTY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG4gICAgICBpbmplY3RQcm9wKGRhdGEsICd2YWx1ZScsICgpID0+IGdldENlbGxWYWx1ZShkYXRhLmNvbCwgZGF0YS5yb3cpKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5U2VsZWN0aW9uU2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmplY3RCb2R5Q29tbW9uU2NvcGUgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUsXG4gICAgICAgIGNvbHNNYXA6IGNvbXB1dGVkQ29sc01hcC52YWx1ZSxcbiAgICAgICAgc29ydCxcbiAgICAgICAgcm93SW5kZXg6IGZpcnN0Um93SW5kZXgudmFsdWUgKyBkYXRhLnBhZ2VJbmRleCxcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZVxuICAgICAgfSlcblxuICAgICAgaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSAmJiBpbmplY3RQcm9wKFxuICAgICAgICBkYXRhLFxuICAgICAgICAnc2VsZWN0ZWQnLFxuICAgICAgICAoKSA9PiBpc1Jvd1NlbGVjdGVkKGRhdGEua2V5KSxcbiAgICAgICAgKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKFsgZGF0YS5rZXkgXSwgWyBkYXRhLnJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpbmplY3RQcm9wKFxuICAgICAgICBkYXRhLFxuICAgICAgICAnZXhwYW5kJyxcbiAgICAgICAgKCkgPT4gaXNSb3dFeHBhbmRlZChkYXRhLmtleSksXG4gICAgICAgIGFkZGluZyA9PiB7IHVwZGF0ZUV4cGFuZGVkKGRhdGEua2V5LCBhZGRpbmcpIH1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDZWxsVmFsdWUgKGNvbCwgcm93KSB7XG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2YgY29sLmZpZWxkID09PSAnZnVuY3Rpb24nID8gY29sLmZpZWxkKHJvdykgOiByb3dbIGNvbC5maWVsZCBdXG4gICAgICByZXR1cm4gY29sLmZvcm1hdCAhPT0gdm9pZCAwID8gY29sLmZvcm1hdCh2YWwsIHJvdykgOiB2YWxcbiAgICB9XG5cbiAgICBjb25zdCBtYXJnaW5hbHNTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBwYWdpbmF0aW9uOiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICBwYWdlc051bWJlcjogcGFnZXNOdW1iZXIudmFsdWUsXG4gICAgICBpc0ZpcnN0UGFnZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICBpc0xhc3RQYWdlOiBpc0xhc3RQYWdlLnZhbHVlLFxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlLFxuXG4gICAgICBpbkZ1bGxzY3JlZW46IGluRnVsbHNjcmVlbi52YWx1ZSxcbiAgICAgIHRvZ2dsZUZ1bGxzY3JlZW5cbiAgICB9KSlcblxuICAgIGZ1bmN0aW9uIGdldFRvcERpdiAoKSB7XG4gICAgICBjb25zdFxuICAgICAgICB0b3AgPSBzbG90cy50b3AsXG4gICAgICAgIHRvcExlZnQgPSBzbG90c1sgJ3RvcC1sZWZ0JyBdLFxuICAgICAgICB0b3BSaWdodCA9IHNsb3RzWyAndG9wLXJpZ2h0JyBdLFxuICAgICAgICB0b3BTZWxlY3Rpb24gPSBzbG90c1sgJ3RvcC1zZWxlY3Rpb24nIF0sXG4gICAgICAgIGhhc1NlbGVjdGlvbiA9IGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiB0b3BTZWxlY3Rpb24gIT09IHZvaWQgMFxuICAgICAgICAgICYmIHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSA+IDAsXG4gICAgICAgIHRvcENsYXNzID0gJ3EtdGFibGVfX3RvcCByZWxhdGl2ZS1wb3NpdGlvbiByb3cgaXRlbXMtY2VudGVyJ1xuXG4gICAgICBpZiAodG9wICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IHRvcENsYXNzIH0sIFsgdG9wKG1hcmdpbmFsc1Njb3BlLnZhbHVlKSBdKVxuICAgICAgfVxuXG4gICAgICBsZXQgY2hpbGRcblxuICAgICAgaWYgKGhhc1NlbGVjdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZCA9IHRvcFNlbGVjdGlvbihtYXJnaW5hbHNTY29wZS52YWx1ZSkuc2xpY2UoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gW11cblxuICAgICAgICBpZiAodG9wTGVmdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlLWNvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgdG9wTGVmdChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLnRpdGxlKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogWyAncS10YWJsZV9fdGl0bGUnLCBwcm9wcy50aXRsZUNsYXNzIF1cbiAgICAgICAgICAgICAgfSwgcHJvcHMudGl0bGUpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodG9wUmlnaHQgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19zZXBhcmF0b3IgY29sJyB9KVxuICAgICAgICApXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgIHRvcFJpZ2h0KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IHRvcENsYXNzIH0sIGNoaWxkKVxuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlclNlbGVjdGVkVmFsdWUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzb21lUm93c1NlbGVjdGVkLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gbnVsbFxuICAgICAgICA6IGFsbFJvd3NTZWxlY3RlZC52YWx1ZVxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBnZXRUSGVhZCAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGdldFRIZWFkVFIoKVxuXG4gICAgICBpZiAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSAmJiBzbG90cy5sb2FkaW5nID09PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCd0cicsIHsgY2xhc3M6ICdxLXRhYmxlX19wcm9ncmVzcycgfSwgW1xuICAgICAgICAgICAgaCgndGgnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncmVsYXRpdmUtcG9zaXRpb24nLFxuICAgICAgICAgICAgICBjb2xzcGFuOiBjb21wdXRlZENvbHNwYW4udmFsdWVcbiAgICAgICAgICAgIH0sIGdldFByb2dyZXNzKCkpXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGhlYWQnLCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUSGVhZFRSICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGhlYWRlciA9IHNsb3RzLmhlYWRlcixcbiAgICAgICAgaGVhZGVyQ2VsbCA9IHNsb3RzWyAnaGVhZGVyLWNlbGwnIF1cblxuICAgICAgaWYgKGhlYWRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoZWFkZXIoXG4gICAgICAgICAgZ2V0SGVhZGVyU2NvcGUoeyBoZWFkZXI6IHRydWUgfSlcbiAgICAgICAgKS5zbGljZSgpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gY29tcHV0ZWRDb2xzLnZhbHVlLm1hcChjb2wgPT4ge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIGhlYWRlckNlbGxDb2wgPSBzbG90c1sgYGhlYWRlci1jZWxsLSR7IGNvbC5uYW1lIH1gIF0sXG4gICAgICAgICAgc2xvdCA9IGhlYWRlckNlbGxDb2wgIT09IHZvaWQgMCA/IGhlYWRlckNlbGxDb2wgOiBoZWFkZXJDZWxsLFxuICAgICAgICAgIHByb3BzID0gZ2V0SGVhZGVyU2NvcGUoeyBjb2wgfSlcblxuICAgICAgICByZXR1cm4gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KHByb3BzKVxuICAgICAgICAgIDogaChRVGgsIHtcbiAgICAgICAgICAgIGtleTogY29sLm5hbWUsXG4gICAgICAgICAgICBwcm9wc1xuICAgICAgICAgIH0sICgpID0+IGNvbC5sYWJlbClcbiAgICAgIH0pXG5cbiAgICAgIGlmIChzaW5nbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUgJiYgcHJvcHMuZ3JpZCAhPT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RoJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCAnICcpXG4gICAgICAgIClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG11bHRpcGxlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2hlYWRlci1zZWxlY3Rpb24nIF1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChnZXRIZWFkZXJTY29wZSh7fSkpXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IGhlYWRlclNlbGVjdGVkVmFsdWUudmFsdWUsXG4gICAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IG9uTXVsdGlwbGVTZWxlY3Rpb25TZXRcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ3RoJywgeyBjbGFzczogJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyB9LCBjb250ZW50KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ3RyJywge1xuICAgICAgICAgIGNsYXNzOiBwcm9wcy50YWJsZUhlYWRlckNsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZUhlYWRlclN0eWxlXG4gICAgICAgIH0sIGNoaWxkKVxuICAgICAgXVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlclNjb3BlIChkYXRhKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlLFxuICAgICAgICBzb3J0LFxuICAgICAgICBjb2xzTWFwOiBjb21wdXRlZENvbHNNYXAudmFsdWUsXG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2VcbiAgICAgIH0pXG5cbiAgICAgIGlmIChtdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpbmplY3RQcm9wKFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgJ3NlbGVjdGVkJyxcbiAgICAgICAgICAoKSA9PiBoZWFkZXJTZWxlY3RlZFZhbHVlLnZhbHVlLFxuICAgICAgICAgIG9uTXVsdGlwbGVTZWxlY3Rpb25TZXRcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTXVsdGlwbGVTZWxlY3Rpb25TZXQgKHZhbCkge1xuICAgICAgaWYgKHNvbWVSb3dzU2VsZWN0ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdmFsID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgdXBkYXRlU2VsZWN0aW9uKFxuICAgICAgICBjb21wdXRlZFJvd3MudmFsdWUubWFwKGdldFJvd0tleS52YWx1ZSksXG4gICAgICAgIGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgICAgdmFsXG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbmF2SWNvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGljbyA9IFtcbiAgICAgICAgcHJvcHMuaWNvbkZpcnN0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLmZpcnN0UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvblByZXZQYWdlIHx8ICRxLmljb25TZXQudGFibGUucHJldlBhZ2UsXG4gICAgICAgIHByb3BzLmljb25OZXh0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLm5leHRQYWdlLFxuICAgICAgICBwcm9wcy5pY29uTGFzdFBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5sYXN0UGFnZVxuICAgICAgXVxuICAgICAgcmV0dXJuICRxLmxhbmcucnRsID09PSB0cnVlID8gaWNvLnJldmVyc2UoKSA6IGljb1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRCb3R0b21EaXYgKCkge1xuICAgICAgaWYgKHByb3BzLmhpZGVCb3R0b20gPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChub3RoaW5nVG9EaXNwbGF5LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm9wcy5oaWRlTm9EYXRhID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcHJvcHMubG9hZGluZyA9PT0gdHJ1ZVxuICAgICAgICAgID8gcHJvcHMubG9hZGluZ0xhYmVsIHx8ICRxLmxhbmcudGFibGUubG9hZGluZ1xuICAgICAgICAgIDogKHByb3BzLmZpbHRlciA/IHByb3BzLm5vUmVzdWx0c0xhYmVsIHx8ICRxLmxhbmcudGFibGUubm9SZXN1bHRzIDogcHJvcHMubm9EYXRhTGFiZWwgfHwgJHEubGFuZy50YWJsZS5ub0RhdGEpXG5cbiAgICAgICAgY29uc3Qgbm9EYXRhID0gc2xvdHNbICduby1kYXRhJyBdXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbm9EYXRhICE9PSB2b2lkIDBcbiAgICAgICAgICA/IFsgbm9EYXRhKHsgbWVzc2FnZSwgaWNvbjogJHEuaWNvblNldC50YWJsZS53YXJuaW5nLCBmaWx0ZXI6IHByb3BzLmZpbHRlciB9KSBdXG4gICAgICAgICAgOiBbXG4gICAgICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1ub2RhdGEtaWNvbicsXG4gICAgICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS53YXJuaW5nXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzICsgJyBxLXRhYmxlX19ib3R0b20tLW5vZGF0YScgfSwgY2hpbGRyZW4pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGJvdHRvbSA9IHNsb3RzLmJvdHRvbVxuXG4gICAgICBpZiAoYm90dG9tICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzIH0sIFsgYm90dG9tKG1hcmdpbmFsc1Njb3BlLnZhbHVlKSBdKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmhpZGVTZWxlY3RlZEJhbm5lciAhPT0gdHJ1ZSAmJiBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlICYmIHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSA+IDBcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCBbXG4gICAgICAgICAgICAgICAgKHByb3BzLnNlbGVjdGVkUm93c0xhYmVsIHx8ICRxLmxhbmcudGFibGUuc2VsZWN0ZWRSZWNvcmRzKShyb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiBbXVxuXG4gICAgICBpZiAocHJvcHMuaGlkZVBhZ2luYXRpb24gIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogYm90dG9tQ2xhc3MgKyAnIGp1c3RpZnktZW5kJ1xuICAgICAgICB9LCBnZXRQYWdpbmF0aW9uRGl2KGNoaWxkKSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6IGJvdHRvbUNsYXNzIH0sIGNoaWxkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUGFnU2VsZWN0aW9uIChwYWcpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oe1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICByb3dzUGVyUGFnZTogcGFnLnZhbHVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZ2luYXRpb25EaXYgKGNoaWxkKSB7XG4gICAgICBsZXQgY29udHJvbFxuICAgICAgY29uc3RcbiAgICAgICAgeyByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgICBwYWdpbmF0aW9uTGFiZWwgPSBwcm9wcy5wYWdpbmF0aW9uTGFiZWwgfHwgJHEubGFuZy50YWJsZS5wYWdpbmF0aW9uLFxuICAgICAgICBwYWdpbmF0aW9uU2xvdCA9IHNsb3RzLnBhZ2luYXRpb24sXG4gICAgICAgIGhhc09wdHMgPSBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMubGVuZ3RoID4gMVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fc2VwYXJhdG9yIGNvbCcgfSlcbiAgICAgIClcblxuICAgICAgaWYgKGhhc09wdHMgPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6ICdxLXRhYmxlX19ib3R0b20taXRlbScgfSwgW1xuICAgICAgICAgICAgICBwcm9wcy5yb3dzUGVyUGFnZUxhYmVsIHx8ICRxLmxhbmcudGFibGUucmVjb3Jkc1BlclBhZ2VcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgaChRU2VsZWN0LCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fc2VsZWN0IGlubGluZSBxLXRhYmxlX19ib3R0b20taXRlbScsXG4gICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogcm93c1BlclBhZ2UsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLnZhbHVlLFxuICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU6IHJvd3NQZXJQYWdlID09PSAwXG4gICAgICAgICAgICAgICAgPyAkcS5sYW5nLnRhYmxlLmFsbFJvd3NcbiAgICAgICAgICAgICAgICA6IHJvd3NQZXJQYWdlLFxuICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgIGJvcmRlcmxlc3M6IHRydWUsXG4gICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICBvcHRpb25zRGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIG9wdGlvbnNDb3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBvblBhZ1NlbGVjdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChwYWdpbmF0aW9uU2xvdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnRyb2wgPSBwYWdpbmF0aW9uU2xvdChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb250cm9sID0gW1xuICAgICAgICAgIGgoJ3NwYW4nLCByb3dzUGVyUGFnZSAhPT0gMCA/IHsgY2xhc3M6ICdxLXRhYmxlX19ib3R0b20taXRlbScgfSA6IHt9LCBbXG4gICAgICAgICAgICByb3dzUGVyUGFnZVxuICAgICAgICAgICAgICA/IHBhZ2luYXRpb25MYWJlbChmaXJzdFJvd0luZGV4LnZhbHVlICsgMSwgTWF0aC5taW4obGFzdFJvd0luZGV4LnZhbHVlLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpXG4gICAgICAgICAgICAgIDogcGFnaW5hdGlvbkxhYmVsKDEsIGZpbHRlcmVkU29ydGVkUm93c051bWJlci52YWx1ZSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cblxuICAgICAgICBpZiAocm93c1BlclBhZ2UgIT09IDAgJiYgcGFnZXNOdW1iZXIudmFsdWUgPiAxKSB7XG4gICAgICAgICAgY29uc3QgYnRuUHJvcHMgPSB7XG4gICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgZmxhdDogdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgYnRuUHJvcHMuc2l6ZSA9ICdzbSdcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYWdlc051bWJlci52YWx1ZSA+IDIgJiYgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnRmlyc3QnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMCBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0ZpcnN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogZmlyc3RQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnRyb2wucHVzaChcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ1ByZXYnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0ZpcnN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogcHJldlBhZ2VcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdOZXh0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDIgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogbmV4dFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgcGFnZXNOdW1iZXIudmFsdWUgPiAyICYmIGNvbnRyb2wucHVzaChcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ0xhc3QnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMyBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0xhc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBsYXN0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIGNvbnRyb2wpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEdyaWRIZWFkZXIgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBwcm9wcy5ncmlkSGVhZGVyID09PSB0cnVlXG4gICAgICAgID8gW1xuICAgICAgICAgICAgaCgndGFibGUnLCB7IGNsYXNzOiAncS10YWJsZScgfSwgW1xuICAgICAgICAgICAgICBnZXRUSGVhZChoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIDogKFxuICAgICAgICAgICAgcHJvcHMubG9hZGluZyA9PT0gdHJ1ZSAmJiBzbG90cy5sb2FkaW5nID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBnZXRQcm9ncmVzcyhoKVxuICAgICAgICAgICAgICA6IHZvaWQgMFxuICAgICAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19taWRkbGUnIH0sIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEdyaWRCb2R5ICgpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBzbG90cy5pdGVtICE9PSB2b2lkIDBcbiAgICAgICAgPyBzbG90cy5pdGVtXG4gICAgICAgIDogc2NvcGUgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoaWxkID0gc2NvcGUuY29scy5tYXAoXG4gICAgICAgICAgICBjb2wgPT4gaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS1yb3cnIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS10aXRsZScgfSwgWyBjb2wubGFiZWwgXSksXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tdmFsdWUnIH0sIFsgY29sLnZhbHVlIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbICdib2R5LXNlbGVjdGlvbicgXVxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgICAgICA/IHNsb3Qoc2NvcGUpXG4gICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogc2NvcGUuc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0aW9uKFsgc2NvcGUua2V5IF0sIFsgc2NvcGUucm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS1yb3cnIH0sIGNvbnRlbnQpLFxuICAgICAgICAgICAgICBoKFFTZXBhcmF0b3IsIHsgZGFyazogaXNEYXJrLnZhbHVlIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICdxLXRhYmxlX19ncmlkLWl0ZW0tY2FyZCcgKyBjYXJkRGVmYXVsdENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBwcm9wcy5jYXJkQ2xhc3NcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdHlsZTogcHJvcHMuY2FyZFN0eWxlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvcHMub25Sb3dDbGljayAhPT0gdm9pZCAwXG4gICAgICAgICAgICB8fCBwcm9wcy5vblJvd0RibGNsaWNrICE9PSB2b2lkIDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGRhdGEuY2xhc3NbIDAgXSArPSAnIGN1cnNvci1wb2ludGVyJ1xuXG4gICAgICAgICAgICBpZiAocHJvcHMub25Sb3dDbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGRhdGEub25DbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgZW1pdCgnUm93Q2xpY2snLCBldnQsIHNjb3BlLnJvdywgc2NvcGUucGFnZUluZGV4KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5vblJvd0RibGNsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YS5vbkRibGNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBlbWl0KCdSb3dEYmxjbGljaycsIGV2dCwgc2NvcGUucm93LCBzY29wZS5wYWdlSW5kZXgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0gY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0zJ1xuICAgICAgICAgICAgICArIChzY29wZS5zZWxlY3RlZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZV9fZ3JpZC1pdGVtLS1zZWxlY3RlZCcgOiAnJylcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCBkYXRhLCBjaGlsZClcbiAgICAgICAgICBdKVxuICAgICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgJ3EtdGFibGVfX2dyaWQtY29udGVudCByb3cnLFxuICAgICAgICAgIHByb3BzLmNhcmRDb250YWluZXJDbGFzc1xuICAgICAgICBdLFxuICAgICAgICBzdHlsZTogcHJvcHMuY2FyZENvbnRhaW5lclN0eWxlXG4gICAgICB9LCBjb21wdXRlZFJvd3MudmFsdWUubWFwKChyb3csIHBhZ2VJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gaXRlbShnZXRCb2R5U2NvcGUoe1xuICAgICAgICAgIGtleTogZ2V0Um93S2V5LnZhbHVlKHJvdyksXG4gICAgICAgICAgcm93LFxuICAgICAgICAgIHBhZ2VJbmRleFxuICAgICAgICB9KSlcbiAgICAgIH0pKVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kcyBhbmQgbmVlZGVkIGNvbXB1dGVkIHByb3BzXG4gICAgT2JqZWN0LmFzc2lnbih2bS5wcm94eSwge1xuICAgICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uLFxuICAgICAgc2V0UGFnaW5hdGlvbixcbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZSxcbiAgICAgIGlzUm93U2VsZWN0ZWQsXG4gICAgICBjbGVhclNlbGVjdGlvbixcbiAgICAgIGlzUm93RXhwYW5kZWQsXG4gICAgICBzZXRFeHBhbmRlZCxcbiAgICAgIHNvcnQsXG4gICAgICByZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBzY3JvbGxUbyxcbiAgICAgIGdldENlbGxWYWx1ZVxuICAgIH0pXG5cbiAgICBpbmplY3RNdWx0aXBsZVByb3BzKHZtLnByb3h5LCB7XG4gICAgICBmaWx0ZXJlZFNvcnRlZFJvd3M6ICgpID0+IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZSxcbiAgICAgIGNvbXB1dGVkUm93czogKCkgPT4gY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgY29tcHV0ZWRSb3dzTnVtYmVyOiAoKSA9PiBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gWyBnZXRUb3BEaXYoKSBdXG4gICAgICBjb25zdCBkYXRhID0geyByZWY6IHJvb3RSZWYsIGNsYXNzOiBjb250YWluZXJDbGFzcy52YWx1ZSB9XG5cbiAgICAgIGlmIChwcm9wcy5ncmlkID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnB1c2goZ2V0R3JpZEhlYWRlcigpKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgIGNsYXNzOiBbIGRhdGEuY2xhc3MsIHByb3BzLmNhcmRDbGFzcyBdLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkU3R5bGVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgZ2V0Qm9keSgpLFxuICAgICAgICBnZXRCb3R0b21EaXYoKVxuICAgICAgKVxuXG4gICAgICBpZiAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSAmJiBzbG90cy5sb2FkaW5nICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBzbG90cy5sb2FkaW5nKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgZGF0YSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbImRlZiIsImxhc3RQYWdlIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7OztBQU9BLElBQUEsTUFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsRUFDWjtBQUFBLEVBRUQsT0FBTyxDQUFFLE9BQVM7QUFBQSxFQUVsQixNQUFPLE9BQU8sRUFBRSxPQUFPLEtBQUksR0FBSTtBQUM3QixVQUFNLEtBQUssbUJBQW9CO0FBQy9CLFVBQU0sRUFBRSxPQUFPLEVBQUUsR0FBRSxFQUFJLElBQUc7QUFFMUIsVUFBTSxVQUFVLFNBQU87QUFBRSxXQUFLLFNBQVMsR0FBRztBQUFBLElBQUc7QUFFN0MsV0FBTyxNQUFNO0FBQ1gsVUFBSSxNQUFNLFVBQVUsUUFBUTtBQUMxQixlQUFPLEVBQUUsTUFBTTtBQUFBLFVBQ2IsT0FBTyxNQUFNLGNBQWMsT0FBTyw0QkFBNEI7QUFBQSxVQUM5RDtBQUFBLFFBQ1YsR0FBVyxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsTUFDeEI7QUFFRCxVQUFJLEtBQUs7QUFDVCxZQUFNLE9BQU8sR0FBRyxNQUFNO0FBRXRCLFVBQUksTUFBTTtBQUNSLGNBQU0sTUFBTSxNQUFNLFFBQVM7QUFDM0IsWUFBSSxRQUFRLFFBQVE7QUFBRTtBQUFBLFFBQVE7QUFBQSxNQUMvQixPQUNJO0FBQ0gsY0FBTSxNQUFNLE1BQU07QUFBQSxNQUNuQjtBQUVELFVBQUksSUFBSSxhQUFhLE1BQU07QUFDekIsY0FBTSxTQUFTLElBQUksVUFBVSxVQUN6QixZQUNBO0FBRUosZ0JBQVEsWUFBWSxNQUFNLFNBQVMsQ0FBQSxDQUFFO0FBQ3JDLGNBQU87QUFBQSxVQUNMLEVBQUUsT0FBTztBQUFBLFlBQ1AsT0FBTyxJQUFJO0FBQUEsWUFDWCxNQUFNLEdBQUcsUUFBUSxNQUFNO0FBQUEsVUFDbkMsQ0FBVztBQUFB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

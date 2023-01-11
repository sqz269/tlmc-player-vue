import { k as createComponent, h, l as hSlot, v as hUniqueSlot, ar as QIcon, g as getCurrentInstance, N as useDarkProps, P as useDark, c as computed, r as ref, w as watch, bt as onBeforeMount, o as onMounted, aI as onActivated, aH as onDeactivated, n as onBeforeUnmount, _ as getScrollTarget, t as listenOpts, Z as hMergeSlot, bp as useSizeProps, bq as useSize, bB as vmHasRouter, bC as History, ai as isNumber, bD as isDate, aj as isObject, q as nextTick, bE as injectMultipleProps, bF as QCheckbox, bG as injectProp, af as QBtn, aw as QSeparator } from "./index.5f2969d0.js";
import { Q as QList } from "./QList.104c8c2e.js";
import { u as useVirtualScrollProps, b as useVirtualScroll, c as commonVirtPropsList, Q as QSelect } from "./QSelect.6ccec858.js";
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
export { QTable as Q, QTh as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVRhYmxlLmUwMDIwMjk3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvZ2V0LXRhYmxlLW1pZGRsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvUVZpcnR1YWxTY3JvbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2xpbmVhci1wcm9ncmVzcy9RTGluZWFyUHJvZ3Jlc3MuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mdWxsc2NyZWVuLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS9zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1zb3J0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1maWx0ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXBhZ2luYXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXJvdy1leHBhbmQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWNvbHVtbi1zZWxlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90LCBoVW5pcXVlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRoJyxcblxuICBwcm9wczoge1xuICAgIHByb3BzOiBPYmplY3QsXG4gICAgYXV0b1dpZHRoOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IG9uQ2xpY2sgPSBldnQgPT4geyBlbWl0KCdjbGljaycsIGV2dCkgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0aCcsIHtcbiAgICAgICAgICBjbGFzczogcHJvcHMuYXV0b1dpZHRoID09PSB0cnVlID8gJ3EtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnLFxuICAgICAgICAgIG9uQ2xpY2tcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGxldCBjb2wsIGNoaWxkXG4gICAgICBjb25zdCBuYW1lID0gdm0udm5vZGUua2V5XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIGNvbCA9IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXVxuICAgICAgICBpZiAoY29sID09PSB2b2lkIDApIHsgcmV0dXJuIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb2wgPSBwcm9wcy5wcm9wcy5jb2xcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbC5zb3J0YWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBjb2wuYWxpZ24gPT09ICdyaWdodCdcbiAgICAgICAgICA/ICd1bnNoaWZ0J1xuICAgICAgICAgIDogJ3B1c2gnXG5cbiAgICAgICAgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcbiAgICAgICAgY2hpbGRbIGFjdGlvbiBdKFxuICAgICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICAgIGNsYXNzOiBjb2wuX19pY29uQ2xhc3MsXG4gICAgICAgICAgICBuYW1lOiAkcS5pY29uU2V0LnRhYmxlLmFycm93VXBcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBoU2xvdChzbG90cy5kZWZhdWx0KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjbGFzczogY29sLl9fdGhDbGFzc1xuICAgICAgICAgICsgKHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycpLFxuICAgICAgICBzdHlsZTogY29sLmhlYWRlclN0eWxlLFxuICAgICAgICBvbkNsaWNrOiBldnQgPT4ge1xuICAgICAgICAgIGNvbC5zb3J0YWJsZSA9PT0gdHJ1ZSAmJiBwcm9wcy5wcm9wcy5zb3J0KGNvbCkgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgIG9uQ2xpY2soZXZ0KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0aCcsIGRhdGEsIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3Qgc2VwYXJhdG9yVmFsdWVzID0gWyAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcsICdjZWxsJywgJ25vbmUnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FNYXJrdXBUYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICB3cmFwQ2VsbHM6IEJvb2xlYW4sXG5cbiAgICBzZXBhcmF0b3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdob3Jpem9udGFsJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBzZXBhcmF0b3JWYWx1ZXMuaW5jbHVkZXModilcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgdm0ucHJveHkuJHEpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLW1hcmt1cC10YWJsZSBxLXRhYmxlX19jb250YWluZXIgcS10YWJsZV9fY2FyZCdcbiAgICAgICsgYCBxLXRhYmxlLS0keyBwcm9wcy5zZXBhcmF0b3IgfS1zZXBhcmF0b3JgXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFibGUtLWRhcmsgcS10YWJsZV9fY2FyZC0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLXRhYmxlLS1mbGF0JyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtdGFibGUtLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLXRhYmxlLS1zcXVhcmUnIDogJycpXG4gICAgICArIChwcm9wcy53cmFwQ2VsbHMgPT09IGZhbHNlID8gJyBxLXRhYmxlLS1uby13cmFwJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZVxuICAgIH0sIFtcbiAgICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgIF0pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMsIGNvbnRlbnQpIHtcbiAgcmV0dXJuIGgoJ2RpdicsIHByb3BzLCBbXG4gICAgaCgndGFibGUnLCB7IGNsYXNzOiAncS10YWJsZScgfSwgY29udGVudClcbiAgXSlcbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRTGlzdCBmcm9tICcuLi9pdGVtL1FMaXN0LmpzJ1xuaW1wb3J0IFFNYXJrdXBUYWJsZSBmcm9tICcuLi9tYXJrdXAtdGFibGUvUU1hcmt1cFRhYmxlLmpzJ1xuaW1wb3J0IGdldFRhYmxlTWlkZGxlIGZyb20gJy4uL3RhYmxlL2dldC10YWJsZS1taWRkbGUuanMnXG5cbmltcG9ydCB7IHVzZVZpcnR1YWxTY3JvbGwsIHVzZVZpcnR1YWxTY3JvbGxQcm9wcyB9IGZyb20gJy4vdXNlLXZpcnR1YWwtc2Nyb2xsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgY29tcHMgPSB7XG4gIGxpc3Q6IFFMaXN0LFxuICB0YWJsZTogUU1hcmt1cFRhYmxlXG59XG5cbmNvbnN0IHR5cGVPcHRpb25zID0gWyAnbGlzdCcsICd0YWJsZScsICdfX3F0YWJsZScgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVZpcnR1YWxTY3JvbGwnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlVmlydHVhbFNjcm9sbFByb3BzLFxuXG4gICAgdHlwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xpc3QnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVPcHRpb25zLmluY2x1ZGVzKHYpXG4gICAgfSxcblxuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgfSxcblxuICAgIGl0ZW1zRm46IEZ1bmN0aW9uLFxuICAgIGl0ZW1zU2l6ZTogTnVtYmVyLFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9XG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBhdHRycyB9KSB7XG4gICAgbGV0IGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgdmlydHVhbFNjcm9sbExlbmd0aCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLml0ZW1zU2l6ZSA+PSAwICYmIHByb3BzLml0ZW1zRm4gIT09IHZvaWQgMFxuICAgICAgICA/IHBhcnNlSW50KHByb3BzLml0ZW1zU2l6ZSwgMTApXG4gICAgICAgIDogKEFycmF5LmlzQXJyYXkocHJvcHMuaXRlbXMpID8gcHJvcHMuaXRlbXMubGVuZ3RoIDogMClcbiAgICApKVxuXG4gICAgY29uc3Qge1xuICAgICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UsXG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCxcbiAgICAgIHBhZFZpcnR1YWxTY3JvbGwsXG4gICAgICBvblZpcnR1YWxTY3JvbGxFdnRcbiAgICB9ID0gdXNlVmlydHVhbFNjcm9sbCh7XG4gICAgICB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLCBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0LCBnZXRWaXJ0dWFsU2Nyb2xsRWxcbiAgICB9KVxuXG4gICAgY29uc3QgdmlydHVhbFNjcm9sbFNjb3BlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hcEZuID0gKGl0ZW0sIGkpID0+ICh7XG4gICAgICAgIGluZGV4OiB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tICsgaSxcbiAgICAgICAgaXRlbVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIHByb3BzLml0ZW1zRm4gPT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLml0ZW1zLnNsaWNlKHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvKS5tYXAobWFwRm4pXG4gICAgICAgIDogcHJvcHMuaXRlbXNGbih2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50byAtIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20pLm1hcChtYXBGbilcbiAgICB9KVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS12aXJ0dWFsLXNjcm9sbCBxLXZpcnR1YWwtc2Nyb2xsJyArIChwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICctLWhvcml6b250YWwnIDogJy0tdmVydGljYWwnKVxuICAgICAgKyAocHJvcHMuc2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDAgPyAnJyA6ICcgc2Nyb2xsJylcbiAgICApXG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuc2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDAgPyB7fSA6IHsgdGFiaW5kZXg6IDAgfVxuICAgICkpXG5cbiAgICB3YXRjaCh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLCAoKSA9PiB7XG4gICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNjcm9sbFRhcmdldCwgKCkgPT4ge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlydHVhbFNjcm9sbEVsICgpIHtcbiAgICAgIHJldHVybiByb290UmVmLnZhbHVlLiRlbCB8fCByb290UmVmLnZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlydHVhbFNjcm9sbFRhcmdldCAoKSB7XG4gICAgICByZXR1cm4gbG9jYWxTY3JvbGxUYXJnZXRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSBnZXRTY3JvbGxUYXJnZXQoZ2V0VmlydHVhbFNjcm9sbEVsKCksIHByb3BzLnNjcm9sbFRhcmdldClcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uVmlydHVhbFNjcm9sbEV2dCwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uVmlydHVhbFNjcm9sbEV2dCwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9fZ2V0VmlydHVhbENoaWxkcmVuICgpIHtcbiAgICAgIGxldCBjaGlsZCA9IHBhZFZpcnR1YWxTY3JvbGwoXG4gICAgICAgIHByb3BzLnR5cGUgPT09ICdsaXN0JyA/ICdkaXYnIDogJ3Rib2R5JyxcbiAgICAgICAgdmlydHVhbFNjcm9sbFNjb3BlLnZhbHVlLm1hcChzbG90cy5kZWZhdWx0KVxuICAgICAgKVxuXG4gICAgICBpZiAoc2xvdHMuYmVmb3JlICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQgPSBzbG90cy5iZWZvcmUoKS5jb25jYXQoY2hpbGQpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoTWVyZ2VTbG90KHNsb3RzLmFmdGVyLCBjaGlsZClcbiAgICB9XG5cbiAgICBvbkJlZm9yZU1vdW50KCgpID0+IHtcbiAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHNsb3RzLmRlZmF1bHQgPT09IHZvaWQgMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdRVmlydHVhbFNjcm9sbDogZGVmYXVsdCBzY29wZWQgc2xvdCBpcyByZXF1aXJlZCBmb3IgcmVuZGVyaW5nJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9wcy50eXBlID09PSAnX19xdGFibGUnXG4gICAgICAgID8gZ2V0VGFibGVNaWRkbGUoXG4gICAgICAgICAgeyByZWY6IHJvb3RSZWYsIGNsYXNzOiAncS10YWJsZV9fbWlkZGxlICcgKyBjbGFzc2VzLnZhbHVlIH0sXG4gICAgICAgICAgX19nZXRWaXJ0dWFsQ2hpbGRyZW4oKVxuICAgICAgICApXG4gICAgICAgIDogaChjb21wc1sgcHJvcHMudHlwZSBdLCB7XG4gICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICAgIGNsYXNzOiBbIGF0dHJzLmNsYXNzLCBjbGFzc2VzLnZhbHVlIF0sXG4gICAgICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZVxuICAgICAgICB9LCBfX2dldFZpcnR1YWxDaGlsZHJlbilcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVNpemUsIHsgdXNlU2l6ZVByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utc2l6ZS5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGRlZmF1bHRTaXplcyA9IHtcbiAgeHM6IDIsXG4gIHNtOiA0LFxuICBtZDogNixcbiAgbGc6IDEwLFxuICB4bDogMTRcbn1cblxuZnVuY3Rpb24gd2lkdGggKHZhbCwgcmV2ZXJzZSwgJHEpIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2Zvcm06IHJldmVyc2UgPT09IHRydWVcbiAgICAgID8gYHRyYW5zbGF0ZVgoJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnLScgOiAnJyB9MTAwJSkgc2NhbGUzZCgkeyAtdmFsIH0sMSwxKWBcbiAgICAgIDogYHNjYWxlM2QoJHsgdmFsIH0sMSwxKWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxpbmVhclByb2dyZXNzJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VTaXplUHJvcHMsXG5cbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMFxuICAgIH0sXG4gICAgYnVmZmVyOiBOdW1iZXIsXG5cbiAgICBjb2xvcjogU3RyaW5nLFxuICAgIHRyYWNrQ29sb3I6IFN0cmluZyxcblxuICAgIHJldmVyc2U6IEJvb2xlYW4sXG4gICAgc3RyaXBlOiBCb29sZWFuLFxuICAgIGluZGV0ZXJtaW5hdGU6IEJvb2xlYW4sXG4gICAgcXVlcnk6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcblxuICAgIGFuaW1hdGlvblNwZWVkOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAyMTAwXG4gICAgfSxcblxuICAgIGluc3RhbnRGZWVkYmFjazogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG5cbiAgICBjb25zdCBtb3Rpb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlIHx8IHByb3BzLnF1ZXJ5ID09PSB0cnVlKVxuICAgIGNvbnN0IHdpZHRoUmV2ZXJzZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnJldmVyc2UgIT09IHByb3BzLnF1ZXJ5KVxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLihzaXplU3R5bGUudmFsdWUgIT09IG51bGwgPyBzaXplU3R5bGUudmFsdWUgOiB7fSksXG4gICAgICAnLS1xLWxpbmVhci1wcm9ncmVzcy1zcGVlZCc6IGAkeyBwcm9wcy5hbmltYXRpb25TcGVlZCB9bXNgXG4gICAgfSkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzcydcbiAgICAgICsgKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICsgKHByb3BzLnJldmVyc2UgPT09IHRydWUgfHwgcHJvcHMucXVlcnkgPT09IHRydWUgPyAnIHEtbGluZWFyLXByb2dyZXNzLS1yZXZlcnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMucm91bmRlZCA9PT0gdHJ1ZSA/ICcgcm91bmRlZC1ib3JkZXJzJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB3aWR0aChwcm9wcy5idWZmZXIgIT09IHZvaWQgMCA/IHByb3BzLmJ1ZmZlciA6IDEsIHdpZHRoUmV2ZXJzZS52YWx1ZSwgcHJveHkuJHEpKVxuICAgIGNvbnN0IHRyYW5zaXRpb25TdWZmaXggPSBjb21wdXRlZCgoKSA9PiBgd2l0aCR7IHByb3BzLmluc3RhbnRGZWVkYmFjayA9PT0gdHJ1ZSA/ICdvdXQnIDogJycgfS10cmFuc2l0aW9uYClcblxuICAgIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzX190cmFjayBhYnNvbHV0ZS1mdWxsJ1xuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgdHJhbnNpdGlvblN1ZmZpeC52YWx1ZSB9YFxuICAgICAgKyBgIHEtbGluZWFyLXByb2dyZXNzX190cmFjay0tJHsgaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJ2RhcmsnIDogJ2xpZ2h0JyB9YFxuICAgICAgKyAocHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy50cmFja0NvbG9yIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgbW9kZWxTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHdpZHRoKG1vdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiBwcm9wcy52YWx1ZSwgd2lkdGhSZXZlcnNlLnZhbHVlLCBwcm94eS4kcSkpXG4gICAgY29uc3QgbW9kZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsIGFic29sdXRlLWZ1bGwnXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX21vZGVsLS0keyBtb3Rpb24udmFsdWUgPT09IHRydWUgPyAnaW4nIDogJycgfWRldGVybWluYXRlYFxuICAgIClcblxuICAgIGNvbnN0IHN0cmlwZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHsgd2lkdGg6IGAkeyBwcm9wcy52YWx1ZSAqIDEwMCB9JWAgfSkpXG4gICAgY29uc3Qgc3RyaXBlQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtbGluZWFyLXByb2dyZXNzX19zdHJpcGUgYWJzb2x1dGUtJHsgcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgfWBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fc3RyaXBlLS0keyB0cmFuc2l0aW9uU3VmZml4LnZhbHVlIH1gXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGUudmFsdWVcbiAgICAgICAgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBtb2RlbENsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBtb2RlbFN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIHByb3BzLnN0cmlwZSA9PT0gdHJ1ZSAmJiBtb3Rpb24udmFsdWUgPT09IGZhbHNlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogc3RyaXBlQ2xhc3MudmFsdWUsXG4gICAgICAgICAgc3R5bGU6IHN0cmlwZVN0eWxlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXG4gICAgICAgICdhcmlhLXZhbHVlbWluJzogMCxcbiAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiAxLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWVcbiAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgIDogcHJvcHMudmFsdWVcbiAgICAgIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgY2hpbGQpKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IHJlZiwgd2F0Y2gsIG9uQmVmb3JlTW91bnQsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBIaXN0b3J5IGZyb20gJy4uLy4uL2hpc3RvcnkuanMnXG5pbXBvcnQgeyB2bUhhc1JvdXRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0uanMnXG5cbmxldCBjb3VudGVyID0gMFxuXG5leHBvcnQgY29uc3QgdXNlRnVsbHNjcmVlblByb3BzID0ge1xuICBmdWxsc2NyZWVuOiBCb29sZWFuLFxuICBub1JvdXRlRnVsbHNjcmVlbkV4aXQ6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5FbWl0cyA9IFsgJ3VwZGF0ZTpmdWxsc2NyZWVuJywgJ2Z1bGxzY3JlZW4nIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHByb3h5IH0gPSB2bVxuXG4gIGxldCBoaXN0b3J5RW50cnksIGZ1bGxzY3JlZW5GaWxsZXJOb2RlLCBjb250YWluZXJcbiAgY29uc3QgaW5GdWxsc2NyZWVuID0gcmVmKGZhbHNlKVxuXG4gIHZtSGFzUm91dGVyKHZtKSA9PT0gdHJ1ZSAmJiB3YXRjaCgoKSA9PiBwcm94eS4kcm91dGUuZnVsbFBhdGgsICgpID0+IHtcbiAgICBwcm9wcy5ub1JvdXRlRnVsbHNjcmVlbkV4aXQgIT09IHRydWUgJiYgZXhpdEZ1bGxzY3JlZW4oKVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmZ1bGxzY3JlZW4sIHYgPT4ge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHYpIHtcbiAgICAgIHRvZ2dsZUZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfSlcblxuICB3YXRjaChpbkZ1bGxzY3JlZW4sIHYgPT4ge1xuICAgIGVtaXQoJ3VwZGF0ZTpmdWxsc2NyZWVuJywgdilcbiAgICBlbWl0KCdmdWxsc2NyZWVuJywgdilcbiAgfSlcblxuICBmdW5jdGlvbiB0b2dnbGVGdWxsc2NyZWVuICgpIHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICBleGl0RnVsbHNjcmVlbigpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2V0RnVsbHNjcmVlbigpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaW5GdWxsc2NyZWVuLnZhbHVlID0gdHJ1ZVxuICAgIGNvbnRhaW5lciA9IHByb3h5LiRlbC5wYXJlbnROb2RlXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChmdWxsc2NyZWVuRmlsbGVyTm9kZSwgcHJveHkuJGVsKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJveHkuJGVsKVxuXG4gICAgY291bnRlcisrXG4gICAgaWYgKGNvdW50ZXIgPT09IDEpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncS1ib2R5LS1mdWxsc2NyZWVuLW1peGluJylcbiAgICB9XG5cbiAgICBoaXN0b3J5RW50cnkgPSB7XG4gICAgICBoYW5kbGVyOiBleGl0RnVsbHNjcmVlblxuICAgIH1cbiAgICBIaXN0b3J5LmFkZChoaXN0b3J5RW50cnkpXG4gIH1cblxuICBmdW5jdGlvbiBleGl0RnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGhpc3RvcnlFbnRyeSAhPT0gdm9pZCAwKSB7XG4gICAgICBIaXN0b3J5LnJlbW92ZShoaXN0b3J5RW50cnkpXG4gICAgICBoaXN0b3J5RW50cnkgPSB2b2lkIDBcbiAgICB9XG5cbiAgICBjb250YWluZXIucmVwbGFjZUNoaWxkKHByb3h5LiRlbCwgZnVsbHNjcmVlbkZpbGxlck5vZGUpXG4gICAgaW5GdWxsc2NyZWVuLnZhbHVlID0gZmFsc2VcblxuICAgIGNvdW50ZXIgPSBNYXRoLm1heCgwLCBjb3VudGVyIC0gMSlcblxuICAgIGlmIChjb3VudGVyID09PSAwKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3EtYm9keS0tZnVsbHNjcmVlbi1taXhpbicpXG5cbiAgICAgIGlmIChwcm94eS4kZWwuc2Nyb2xsSW50b1ZpZXcgIT09IHZvaWQgMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcHJveHkuJGVsLnNjcm9sbEludG9WaWV3KCkgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkJlZm9yZU1vdW50KCgpID0+IHtcbiAgICBmdWxsc2NyZWVuRmlsbGVyTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICB9KVxuXG4gIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgcHJvcHMuZnVsbHNjcmVlbiA9PT0gdHJ1ZSAmJiBzZXRGdWxsc2NyZWVuKClcbiAgfSlcblxuICBvbkJlZm9yZVVubW91bnQoZXhpdEZ1bGxzY3JlZW4pXG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICB0b2dnbGVGdWxsc2NyZWVuLFxuICAgIHNldEZ1bGxzY3JlZW4sXG4gICAgZXhpdEZ1bGxzY3JlZW5cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGluRnVsbHNjcmVlbixcbiAgICB0b2dnbGVGdWxsc2NyZWVuXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzb3J0RGF0ZSAoYSwgYikge1xuICByZXR1cm4gKG5ldyBEYXRlKGEpKSAtIChuZXcgRGF0ZShiKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRCb29sZWFuIChhLCBiKSB7XG4gIHJldHVybiBhICYmICFiXG4gICAgPyAtMVxuICAgIDogKCFhICYmIGIgPyAxIDogMClcbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBzb3J0RGF0ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc29ydC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc0RhdGUsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVNvcnRQcm9wcyA9IHtcbiAgc29ydE1ldGhvZDogRnVuY3Rpb24sXG4gIGJpbmFyeVN0YXRlU29ydDogQm9vbGVhbixcbiAgY29sdW1uU29ydE9yZGVyOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHZhbGlkYXRvcjogdiA9PiB2ID09PSAnYWQnIHx8IHYgPT09ICdkYScsXG4gICAgZGVmYXVsdDogJ2FkJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVNvcnQgKHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGNvbExpc3QsIHNldFBhZ2luYXRpb24pIHtcbiAgY29uc3QgY29sdW1uVG9Tb3J0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgc29ydEJ5IH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIHJldHVybiBzb3J0QnlcbiAgICAgID8gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gc29ydEJ5KSB8fCBudWxsXG4gICAgICA6IG51bGxcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZFNvcnRNZXRob2QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuc29ydE1ldGhvZCAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnNvcnRNZXRob2RcbiAgICAgIDogKGRhdGEsIHNvcnRCeSwgZGVzY2VuZGluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbCA9IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSlcbiAgICAgICAgICBpZiAoY29sID09PSB2b2lkIDAgfHwgY29sLmZpZWxkID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIGRpciA9IGRlc2NlbmRpbmcgPT09IHRydWUgPyAtMSA6IDEsXG4gICAgICAgICAgICB2YWwgPSB0eXBlb2YgY29sLmZpZWxkID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgID8gdiA9PiBjb2wuZmllbGQodilcbiAgICAgICAgICAgICAgOiB2ID0+IHZbIGNvbC5maWVsZCBdXG5cbiAgICAgICAgICByZXR1cm4gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBsZXRcbiAgICAgICAgICAgICAgQSA9IHZhbChhKSxcbiAgICAgICAgICAgICAgQiA9IHZhbChiKVxuXG4gICAgICAgICAgICBpZiAoQSA9PT0gbnVsbCB8fCBBID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC0xICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQiA9PT0gbnVsbCB8fCBCID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDEgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2wuc29ydCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2wuc29ydChBLCBCLCBhLCBiKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTnVtYmVyKEEpID09PSB0cnVlICYmIGlzTnVtYmVyKEIpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNEYXRlKEEpID09PSB0cnVlICYmIGlzRGF0ZShCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gc29ydERhdGUoQSwgQikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgQSA9PT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiBCID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChBIC0gQikgKiBkaXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgWyBBLCBCIF0gPSBbIEEsIEIgXS5tYXAocyA9PiAocyArICcnKS50b0xvY2FsZVN0cmluZygpLnRvTG93ZXJDYXNlKCkpXG5cbiAgICAgICAgICAgIHJldHVybiBBIDwgQlxuICAgICAgICAgICAgICA/IC0xICogZGlyXG4gICAgICAgICAgICAgIDogKEEgPT09IEIgPyAwIDogZGlyKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgKSlcblxuICBmdW5jdGlvbiBzb3J0IChjb2wgLyogU3RyaW5nKGNvbCBuYW1lKSBvciBPYmplY3QoY29sIGRlZmluaXRpb24pICovKSB7XG4gICAgbGV0IHNvcnRPcmRlciA9IHByb3BzLmNvbHVtblNvcnRPcmRlclxuXG4gICAgaWYgKGlzT2JqZWN0KGNvbCkgPT09IHRydWUpIHtcbiAgICAgIGlmIChjb2wuc29ydE9yZGVyKSB7XG4gICAgICAgIHNvcnRPcmRlciA9IGNvbC5zb3J0T3JkZXJcbiAgICAgIH1cblxuICAgICAgY29sID0gY29sLm5hbWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBkZWYgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBjb2wpXG4gICAgICBpZiAoZGVmICE9PSB2b2lkIDAgJiYgZGVmLnNvcnRPcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBkZWYuc29ydE9yZGVyXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIGlmIChzb3J0QnkgIT09IGNvbCkge1xuICAgICAgc29ydEJ5ID0gY29sXG4gICAgICBkZXNjZW5kaW5nID0gc29ydE9yZGVyID09PSAnZGEnXG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLmJpbmFyeVN0YXRlU29ydCA9PT0gdHJ1ZSkge1xuICAgICAgZGVzY2VuZGluZyA9ICFkZXNjZW5kaW5nXG4gICAgfVxuICAgIGVsc2UgaWYgKGRlc2NlbmRpbmcgPT09IHRydWUpIHtcbiAgICAgIGlmIChzb3J0T3JkZXIgPT09ICdhZCcpIHtcbiAgICAgICAgc29ydEJ5ID0gbnVsbFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGRlc2NlbmRpbmcgPSBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHsgLy8gYXNjZW5kaW5nXG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIGRlc2NlbmRpbmcgPSB0cnVlXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc29ydEJ5ID0gbnVsbFxuICAgICAgfVxuICAgIH1cblxuICAgIHNldFBhZ2luYXRpb24oeyBzb3J0QnksIGRlc2NlbmRpbmcsIHBhZ2U6IDEgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY29sdW1uVG9Tb3J0LFxuICAgIGNvbXB1dGVkU29ydE1ldGhvZCxcbiAgICBzb3J0XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkLCB3YXRjaCwgbmV4dFRpY2sgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZUZpbHRlclByb3BzID0ge1xuICBmaWx0ZXI6IFsgU3RyaW5nLCBPYmplY3QgXSxcbiAgZmlsdGVyTWV0aG9kOiBGdW5jdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVGaWx0ZXIgKHByb3BzLCBzZXRQYWdpbmF0aW9uKSB7XG4gIGNvbnN0IGNvbXB1dGVkRmlsdGVyTWV0aG9kID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmZpbHRlck1ldGhvZCAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLmZpbHRlck1ldGhvZFxuICAgICAgOiAocm93cywgdGVybXMsIGNvbHMsIGNlbGxWYWx1ZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxvd2VyVGVybXMgPSB0ZXJtcyA/IHRlcm1zLnRvTG93ZXJDYXNlKCkgOiAnJ1xuICAgICAgICAgIHJldHVybiByb3dzLmZpbHRlcihcbiAgICAgICAgICAgIHJvdyA9PiBjb2xzLnNvbWUoY29sID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gY2VsbFZhbHVlKGNvbCwgcm93KSArICcnXG4gICAgICAgICAgICAgIGNvbnN0IGhheXN0YWNrID0gKHZhbCA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsID09PSAnbnVsbCcpID8gJycgOiB2YWwudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICByZXR1cm4gaGF5c3RhY2suaW5kZXhPZihsb3dlclRlcm1zKSAhPT0gLTFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICkpXG5cbiAgd2F0Y2goXG4gICAgKCkgPT4gcHJvcHMuZmlsdGVyLFxuICAgICgpID0+IHtcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IDEgfSwgdHJ1ZSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IGRlZXA6IHRydWUgfVxuICApXG5cbiAgcmV0dXJuIHsgY29tcHV0ZWRGaWx0ZXJNZXRob2QgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBzYW1lUGFnaW5hdGlvbiAob2xkUGFnLCBuZXdQYWcpIHtcbiAgZm9yIChjb25zdCBwcm9wIGluIG5ld1BhZykge1xuICAgIGlmIChuZXdQYWdbIHByb3AgXSAhPT0gb2xkUGFnWyBwcm9wIF0pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaXhQYWdpbmF0aW9uIChwKSB7XG4gIGlmIChwLnBhZ2UgPCAxKSB7XG4gICAgcC5wYWdlID0gMVxuICB9XG4gIGlmIChwLnJvd3NQZXJQYWdlICE9PSB2b2lkIDAgJiYgcC5yb3dzUGVyUGFnZSA8IDEpIHtcbiAgICBwLnJvd3NQZXJQYWdlID0gMFxuICB9XG4gIHJldHVybiBwXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVBhZ2luYXRpb25Qcm9wcyA9IHtcbiAgcGFnaW5hdGlvbjogT2JqZWN0LFxuICByb3dzUGVyUGFnZU9wdGlvbnM6IHtcbiAgICB0eXBlOiBBcnJheSxcbiAgICBkZWZhdWx0OiAoKSA9PiBbIDUsIDcsIDEwLCAxNSwgMjAsIDI1LCA1MCwgMCBdXG4gIH0sXG5cbiAgJ29uVXBkYXRlOnBhZ2luYXRpb24nOiBbIEZ1bmN0aW9uLCBBcnJheSBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVBhZ2luYXRpb25TdGF0ZSAodm0sIGdldENlbGxWYWx1ZSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0IH0gPSB2bVxuXG4gIGNvbnN0IGlubmVyUGFnaW5hdGlvbiA9IHJlZihcbiAgICBPYmplY3QuYXNzaWduKHtcbiAgICAgIHNvcnRCeTogbnVsbCxcbiAgICAgIGRlc2NlbmRpbmc6IGZhbHNlLFxuICAgICAgcGFnZTogMSxcbiAgICAgIHJvd3NQZXJQYWdlOiBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICA/IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9uc1sgMCBdXG4gICAgICAgIDogNVxuICAgIH0sIHByb3BzLnBhZ2luYXRpb24pXG4gIClcblxuICBjb25zdCBjb21wdXRlZFBhZ2luYXRpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcGFnID0gcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICAgID8geyAuLi5pbm5lclBhZ2luYXRpb24udmFsdWUsIC4uLnByb3BzLnBhZ2luYXRpb24gfVxuICAgICAgOiBpbm5lclBhZ2luYXRpb24udmFsdWVcblxuICAgIHJldHVybiBmaXhQYWdpbmF0aW9uKHBhZylcbiAgfSlcblxuICBjb25zdCBpc1NlcnZlclNpZGUgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c051bWJlciAhPT0gdm9pZCAwKVxuXG4gIGZ1bmN0aW9uIHNlbmRTZXJ2ZXJSZXF1ZXN0IChwYWdpbmF0aW9uKSB7XG4gICAgcmVxdWVzdFNlcnZlckludGVyYWN0aW9uKHtcbiAgICAgIHBhZ2luYXRpb24sXG4gICAgICBmaWx0ZXI6IHByb3BzLmZpbHRlclxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24gKHByb3AgPSB7fSkge1xuICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgIGVtaXQoJ3JlcXVlc3QnLCB7XG4gICAgICAgIHBhZ2luYXRpb246IHByb3AucGFnaW5hdGlvbiB8fCBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAgIGZpbHRlcjogcHJvcC5maWx0ZXIgfHwgcHJvcHMuZmlsdGVyLFxuICAgICAgICBnZXRDZWxsVmFsdWVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBhZ2luYXRpb24gKHZhbCwgZm9yY2VTZXJ2ZXJSZXF1ZXN0KSB7XG4gICAgY29uc3QgbmV3UGFnaW5hdGlvbiA9IGZpeFBhZ2luYXRpb24oe1xuICAgICAgLi4uY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgLi4udmFsXG4gICAgfSlcblxuICAgIGlmIChzYW1lUGFnaW5hdGlvbihjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsIG5ld1BhZ2luYXRpb24pID09PSB0cnVlKSB7XG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlICYmIGZvcmNlU2VydmVyUmVxdWVzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBzZW5kU2VydmVyUmVxdWVzdChuZXdQYWdpbmF0aW9uKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgc2VuZFNlcnZlclJlcXVlc3QobmV3UGFnaW5hdGlvbilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHByb3BzLnBhZ2luYXRpb24gIT09IHZvaWQgMFxuICAgICAgJiYgcHJvcHNbICdvblVwZGF0ZTpwYWdpbmF0aW9uJyBdICE9PSB2b2lkIDBcbiAgICApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgbmV3UGFnaW5hdGlvbilcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lclBhZ2luYXRpb24udmFsdWUgPSBuZXdQYWdpbmF0aW9uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpbm5lclBhZ2luYXRpb24sXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLFxuICAgIGlzU2VydmVyU2lkZSxcblxuICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICBzZXRQYWdpbmF0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUGFnaW5hdGlvbiAodm0sIGlubmVyUGFnaW5hdGlvbiwgY29tcHV0ZWRQYWdpbmF0aW9uLCBpc1NlcnZlclNpZGUsIHNldFBhZ2luYXRpb24sIGZpbHRlcmVkU29ydGVkUm93c051bWJlcikge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c051bWJlciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgID8gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NOdW1iZXIgfHwgMFxuICAgICAgOiBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIudmFsdWVcbiAgKSlcblxuICBjb25zdCBmaXJzdFJvd0luZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIHJldHVybiAocGFnZSAtIDEpICogcm93c1BlclBhZ2VcbiAgfSlcblxuICBjb25zdCBsYXN0Um93SW5kZXggPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBwYWdlLCByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG4gICAgcmV0dXJuIHBhZ2UgKiByb3dzUGVyUGFnZVxuICB9KVxuXG4gIGNvbnN0IGlzRmlyc3RQYWdlID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2UgPT09IDEpXG5cbiAgY29uc3QgcGFnZXNOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlID09PSAwXG4gICAgICA/IDFcbiAgICAgIDogTWF0aC5tYXgoXG4gICAgICAgIDEsXG4gICAgICAgIE1hdGguY2VpbChjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUgLyBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UpXG4gICAgICApXG4gICkpXG5cbiAgY29uc3QgaXNMYXN0UGFnZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBsYXN0Um93SW5kZXgudmFsdWUgPT09IDBcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZSA+PSBwYWdlc051bWJlci52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IG9wdHMgPSBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnMuaW5jbHVkZXMoaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlKVxuICAgICAgPyBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnNcbiAgICAgIDogWyBpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgXS5jb25jYXQocHJvcHMucm93c1BlclBhZ2VPcHRpb25zKVxuXG4gICAgcmV0dXJuIG9wdHMubWFwKGNvdW50ID0+ICh7XG4gICAgICBsYWJlbDogY291bnQgPT09IDAgPyAkcS5sYW5nLnRhYmxlLmFsbFJvd3MgOiAnJyArIGNvdW50LFxuICAgICAgdmFsdWU6IGNvdW50XG4gICAgfSkpXG4gIH0pXG5cbiAgd2F0Y2gocGFnZXNOdW1iZXIsIChsYXN0UGFnZSwgb2xkTGFzdFBhZ2UpID0+IHtcbiAgICBpZiAobGFzdFBhZ2UgPT09IG9sZExhc3RQYWdlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5wYWdlXG4gICAgaWYgKGxhc3RQYWdlICYmICFjdXJyZW50UGFnZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IDEgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAobGFzdFBhZ2UgPCBjdXJyZW50UGFnZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IGxhc3RQYWdlIH0pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIGZpcnN0UGFnZSAoKSB7XG4gICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IDEgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHByZXZQYWdlICgpIHtcbiAgICBjb25zdCB7IHBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIGlmIChwYWdlID4gMSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IHBhZ2UgLSAxIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbmV4dFBhZ2UgKCkge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIGlmIChsYXN0Um93SW5kZXgudmFsdWUgPiAwICYmIHBhZ2UgKiByb3dzUGVyUGFnZSA8IGNvbXB1dGVkUm93c051bWJlci52YWx1ZSkge1xuICAgICAgc2V0UGFnaW5hdGlvbih7IHBhZ2U6IHBhZ2UgKyAxIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGFzdFBhZ2UgKCkge1xuICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlc051bWJlci52YWx1ZSB9KVxuICB9XG5cbiAgaWYgKHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwKSB7XG4gICAgZW1pdCgndXBkYXRlOnBhZ2luYXRpb24nLCB7IC4uLmNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmaXJzdFJvd0luZGV4LFxuICAgIGxhc3RSb3dJbmRleCxcbiAgICBpc0ZpcnN0UGFnZSxcbiAgICBpc0xhc3RQYWdlLFxuICAgIHBhZ2VzTnVtYmVyLFxuICAgIGNvbXB1dGVkUm93c1BlclBhZ2VPcHRpb25zLFxuICAgIGNvbXB1dGVkUm93c051bWJlcixcblxuICAgIGZpcnN0UGFnZSxcbiAgICBwcmV2UGFnZSxcbiAgICBuZXh0UGFnZSxcbiAgICBsYXN0UGFnZVxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMgPSB7XG4gIHNlbGVjdGlvbjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnbm9uZScsXG4gICAgdmFsaWRhdG9yOiB2ID0+IFsgJ3NpbmdsZScsICdtdWx0aXBsZScsICdub25lJyBdLmluY2x1ZGVzKHYpXG4gIH0sXG4gIHNlbGVjdGVkOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gW11cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0cyA9IFsgJ3VwZGF0ZTpzZWxlY3RlZCcsICdzZWxlY3Rpb24nIF1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlUm93U2VsZWN0aW9uIChwcm9wcywgZW1pdCwgY29tcHV0ZWRSb3dzLCBnZXRSb3dLZXkpIHtcbiAgY29uc3Qgc2VsZWN0ZWRLZXlzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGtleXMgPSB7fVxuICAgIHByb3BzLnNlbGVjdGVkLm1hcChnZXRSb3dLZXkudmFsdWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGtleXNbIGtleSBdID0gdHJ1ZVxuICAgIH0pXG4gICAgcmV0dXJuIGtleXNcbiAgfSlcblxuICBjb25zdCBoYXNTZWxlY3Rpb25Nb2RlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5zZWxlY3Rpb24gIT09ICdub25lJ1xuICB9KVxuXG4gIGNvbnN0IHNpbmdsZVNlbGVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uID09PSAnc2luZ2xlJ1xuICB9KVxuXG4gIGNvbnN0IG11bHRpcGxlU2VsZWN0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy5zZWxlY3Rpb24gPT09ICdtdWx0aXBsZSdcbiAgfSlcblxuICBjb25zdCBhbGxSb3dzU2VsZWN0ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgIGNvbXB1dGVkUm93cy52YWx1ZS5sZW5ndGggPiAwICYmIGNvbXB1dGVkUm93cy52YWx1ZS5ldmVyeShcbiAgICAgIHJvdyA9PiBzZWxlY3RlZEtleXMudmFsdWVbIGdldFJvd0tleS52YWx1ZShyb3cpIF0gPT09IHRydWVcbiAgICApXG4gIClcblxuICBjb25zdCBzb21lUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBhbGxSb3dzU2VsZWN0ZWQudmFsdWUgIT09IHRydWVcbiAgICAmJiBjb21wdXRlZFJvd3MudmFsdWUuc29tZShyb3cgPT4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBnZXRSb3dLZXkudmFsdWUocm93KSBdID09PSB0cnVlKVxuICApXG5cbiAgY29uc3Qgcm93c1NlbGVjdGVkTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2VsZWN0ZWQubGVuZ3RoKVxuXG4gIGZ1bmN0aW9uIGlzUm93U2VsZWN0ZWQgKGtleSkge1xuICAgIHJldHVybiBzZWxlY3RlZEtleXMudmFsdWVbIGtleSBdID09PSB0cnVlXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbiAoKSB7XG4gICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgW10pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTZWxlY3Rpb24gKGtleXMsIHJvd3MsIGFkZGVkLCBldnQpIHtcbiAgICBlbWl0KCdzZWxlY3Rpb24nLCB7IHJvd3MsIGFkZGVkLCBrZXlzLCBldnQgfSlcblxuICAgIGNvbnN0IHBheWxvYWQgPSBzaW5nbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWVcbiAgICAgID8gKGFkZGVkID09PSB0cnVlID8gcm93cyA6IFtdKVxuICAgICAgOiAoXG4gICAgICAgICAgYWRkZWQgPT09IHRydWVcbiAgICAgICAgICAgID8gcHJvcHMuc2VsZWN0ZWQuY29uY2F0KHJvd3MpXG4gICAgICAgICAgICA6IHByb3BzLnNlbGVjdGVkLmZpbHRlcihcbiAgICAgICAgICAgICAgcm93ID0+IGtleXMuaW5jbHVkZXMoZ2V0Um93S2V5LnZhbHVlKHJvdykpID09PSBmYWxzZVxuICAgICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICBlbWl0KCd1cGRhdGU6c2VsZWN0ZWQnLCBwYXlsb2FkKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYXNTZWxlY3Rpb25Nb2RlLFxuICAgIHNpbmdsZVNlbGVjdGlvbixcbiAgICBtdWx0aXBsZVNlbGVjdGlvbixcbiAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgc29tZVJvd3NTZWxlY3RlZCxcbiAgICByb3dzU2VsZWN0ZWROdW1iZXIsXG5cbiAgICBpc1Jvd1NlbGVjdGVkLFxuICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgIHVwZGF0ZVNlbGVjdGlvblxuICB9XG59XG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoIH0gZnJvbSAndnVlJ1xuXG5mdW5jdGlvbiBnZXRWYWwgKHZhbCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpXG4gICAgPyB2YWwuc2xpY2UoKVxuICAgIDogW11cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93RXhwYW5kUHJvcHMgPSB7XG4gIGV4cGFuZGVkOiBBcnJheSAvLyB2LW1vZGVsOmV4cGFuZGVkXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd0V4cGFuZEVtaXRzID0gWyAndXBkYXRlOmV4cGFuZGVkJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd0V4cGFuZCAocHJvcHMsIGVtaXQpIHtcbiAgY29uc3QgaW5uZXJFeHBhbmRlZCA9IHJlZihnZXRWYWwocHJvcHMuZXhwYW5kZWQpKVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmV4cGFuZGVkLCB2YWwgPT4ge1xuICAgIGlubmVyRXhwYW5kZWQudmFsdWUgPSBnZXRWYWwodmFsKVxuICB9KVxuXG4gIGZ1bmN0aW9uIGlzUm93RXhwYW5kZWQgKGtleSkge1xuICAgIHJldHVybiBpbm5lckV4cGFuZGVkLnZhbHVlLmluY2x1ZGVzKGtleSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEV4cGFuZGVkICh2YWwpIHtcbiAgICBpZiAocHJvcHMuZXhwYW5kZWQgIT09IHZvaWQgMCkge1xuICAgICAgZW1pdCgndXBkYXRlOmV4cGFuZGVkJywgdmFsKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlubmVyRXhwYW5kZWQudmFsdWUgPSB2YWxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVFeHBhbmRlZCAoa2V5LCBhZGQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBpbm5lckV4cGFuZGVkLnZhbHVlLnNsaWNlKClcbiAgICBjb25zdCBpbmRleCA9IHRhcmdldC5pbmRleE9mKGtleSlcblxuICAgIGlmIChhZGQgPT09IHRydWUpIHtcbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdGFyZ2V0LnB1c2goa2V5KVxuICAgICAgICBzZXRFeHBhbmRlZCh0YXJnZXQpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGFyZ2V0LnNwbGljZShpbmRleCwgMSlcbiAgICAgIHNldEV4cGFuZGVkKHRhcmdldClcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzUm93RXhwYW5kZWQsXG4gICAgc2V0RXhwYW5kZWQsXG4gICAgdXBkYXRlRXhwYW5kZWRcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMuanMnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzID0ge1xuICB2aXNpYmxlQ29sdW1uczogQXJyYXlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uIChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBoYXNTZWxlY3Rpb25Nb2RlKSB7XG4gIGNvbnN0IGNvbExpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmNvbHVtbnMgIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHByb3BzLmNvbHVtbnNcbiAgICB9XG5cbiAgICAvLyB3ZSBpbmZlciBjb2x1bW5zIGZyb20gZmlyc3Qgcm93XG4gICAgY29uc3Qgcm93ID0gcHJvcHMucm93c1sgMCBdXG5cbiAgICByZXR1cm4gcm93ICE9PSB2b2lkIDBcbiAgICAgID8gT2JqZWN0LmtleXMocm93KS5tYXAobmFtZSA9PiAoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBsYWJlbDogbmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICBmaWVsZDogbmFtZSxcbiAgICAgICAgYWxpZ246IGlzTnVtYmVyKHJvd1sgbmFtZSBdKSA/ICdyaWdodCcgOiAnbGVmdCcsXG4gICAgICAgIHNvcnRhYmxlOiB0cnVlXG4gICAgICB9KSlcbiAgICAgIDogW11cbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgeyBzb3J0QnksIGRlc2NlbmRpbmcgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgY29uc3QgY29scyA9IHByb3BzLnZpc2libGVDb2x1bW5zICE9PSB2b2lkIDBcbiAgICAgID8gY29sTGlzdC52YWx1ZS5maWx0ZXIoY29sID0+IGNvbC5yZXF1aXJlZCA9PT0gdHJ1ZSB8fCBwcm9wcy52aXNpYmxlQ29sdW1ucy5pbmNsdWRlcyhjb2wubmFtZSkgPT09IHRydWUpXG4gICAgICA6IGNvbExpc3QudmFsdWVcblxuICAgIHJldHVybiBjb2xzLm1hcChjb2wgPT4ge1xuICAgICAgY29uc3QgYWxpZ24gPSBjb2wuYWxpZ24gfHwgJ3JpZ2h0J1xuICAgICAgY29uc3QgYWxpZ25DbGFzcyA9IGB0ZXh0LSR7IGFsaWduIH1gXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmNvbCxcbiAgICAgICAgYWxpZ24sXG4gICAgICAgIF9faWNvbkNsYXNzOiBgcS10YWJsZV9fc29ydC1pY29uIHEtdGFibGVfX3NvcnQtaWNvbi0tJHsgYWxpZ24gfWAsXG4gICAgICAgIF9fdGhDbGFzczogYWxpZ25DbGFzc1xuICAgICAgICAgICsgKGNvbC5oZWFkZXJDbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBjb2wuaGVhZGVyQ2xhc3NlcyA6ICcnKVxuICAgICAgICAgICsgKGNvbC5zb3J0YWJsZSA9PT0gdHJ1ZSA/ICcgc29ydGFibGUnIDogJycpXG4gICAgICAgICAgKyAoY29sLm5hbWUgPT09IHNvcnRCeSA/IGAgc29ydGVkICR7IGRlc2NlbmRpbmcgPT09IHRydWUgPyAnc29ydC1kZXNjJyA6ICcnIH1gIDogJycpLFxuXG4gICAgICAgIF9fdGRTdHlsZTogY29sLnN0eWxlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgdHlwZW9mIGNvbC5zdHlsZSAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gKCkgPT4gY29sLnN0eWxlXG4gICAgICAgICAgICAgICAgOiBjb2wuc3R5bGVcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6ICgpID0+IG51bGwsXG5cbiAgICAgICAgX190ZENsYXNzOiBjb2wuY2xhc3NlcyAhPT0gdm9pZCAwXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb2wuY2xhc3NlcyAhPT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAgID8gKCkgPT4gYWxpZ25DbGFzcyArICcgJyArIGNvbC5jbGFzc2VzXG4gICAgICAgICAgICAgICAgOiByb3cgPT4gYWxpZ25DbGFzcyArICcgJyArIGNvbC5jbGFzc2VzKHJvdylcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6ICgpID0+IGFsaWduQ2xhc3NcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGNvbXB1dGVkQ29sc01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBuYW1lcyA9IHt9XG4gICAgY29tcHV0ZWRDb2xzLnZhbHVlLmZvckVhY2goY29sID0+IHtcbiAgICAgIG5hbWVzWyBjb2wubmFtZSBdID0gY29sXG4gICAgfSlcbiAgICByZXR1cm4gbmFtZXNcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHNwYW4gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnRhYmxlQ29sc3BhbiAhPT0gdm9pZCAwXG4gICAgICA/IHByb3BzLnRhYmxlQ29sc3BhblxuICAgICAgOiBjb21wdXRlZENvbHMudmFsdWUubGVuZ3RoICsgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgPyAxIDogMClcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGNvbExpc3QsXG4gICAgY29tcHV0ZWRDb2xzLFxuICAgIGNvbXB1dGVkQ29sc01hcCxcbiAgICBjb21wdXRlZENvbHNwYW5cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFUaCBmcm9tICcuL1FUaC5qcydcblxuaW1wb3J0IFFTZXBhcmF0b3IgZnJvbSAnLi4vc2VwYXJhdG9yL1FTZXBhcmF0b3IuanMnXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRVmlydHVhbFNjcm9sbCBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC9RVmlydHVhbFNjcm9sbC5qcydcbmltcG9ydCBRU2VsZWN0IGZyb20gJy4uL3NlbGVjdC9RU2VsZWN0LmpzJ1xuaW1wb3J0IFFMaW5lYXJQcm9ncmVzcyBmcm9tICcuLi9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzJ1xuaW1wb3J0IFFDaGVja2JveCBmcm9tICcuLi9jaGVja2JveC9RQ2hlY2tib3guanMnXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcblxuaW1wb3J0IGdldFRhYmxlTWlkZGxlIGZyb20gJy4vZ2V0LXRhYmxlLW1pZGRsZS5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB7IGNvbW1vblZpcnRQcm9wc0xpc3QgfSBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC91c2UtdmlydHVhbC1zY3JvbGwuanMnXG5pbXBvcnQgdXNlRnVsbHNjcmVlbiwgeyB1c2VGdWxsc2NyZWVuUHJvcHMsIHVzZUZ1bGxzY3JlZW5FbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZ1bGxzY3JlZW4uanMnXG5cbmltcG9ydCB7IHVzZVRhYmxlU29ydCwgdXNlVGFibGVTb3J0UHJvcHMgfSBmcm9tICcuL3RhYmxlLXNvcnQuanMnXG5pbXBvcnQgeyB1c2VUYWJsZUZpbHRlciwgdXNlVGFibGVGaWx0ZXJQcm9wcyB9IGZyb20gJy4vdGFibGUtZmlsdGVyLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUsIHVzZVRhYmxlUGFnaW5hdGlvbiwgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgfSBmcm9tICcuL3RhYmxlLXBhZ2luYXRpb24uanMnXG5pbXBvcnQgeyB1c2VUYWJsZVJvd1NlbGVjdGlvbiwgdXNlVGFibGVSb3dTZWxlY3Rpb25Qcm9wcywgdXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0cyB9IGZyb20gJy4vdGFibGUtcm93LXNlbGVjdGlvbi5qcydcbmltcG9ydCB7IHVzZVRhYmxlUm93RXhwYW5kLCB1c2VUYWJsZVJvd0V4cGFuZFByb3BzLCB1c2VUYWJsZVJvd0V4cGFuZEVtaXRzIH0gZnJvbSAnLi90YWJsZS1yb3ctZXhwYW5kLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24sIHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMgfSBmcm9tICcuL3RhYmxlLWNvbHVtbi1zZWxlY3Rpb24uanMnXG5cbmltcG9ydCB7IGluamVjdFByb3AsIGluamVjdE11bHRpcGxlUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2luamVjdC1vYmotcHJvcC5qcydcbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBib3R0b21DbGFzcyA9ICdxLXRhYmxlX19ib3R0b20gcm93IGl0ZW1zLWNlbnRlcidcblxuY29uc3QgY29tbW9uVmlydFByb3BzT2JqID0ge31cbmNvbW1vblZpcnRQcm9wc0xpc3QuZm9yRWFjaChwID0+IHsgY29tbW9uVmlydFByb3BzT2JqWyBwIF0gPSB7fSB9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYmxlJyxcblxuICBwcm9wczoge1xuICAgIHJvd3M6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuICAgIHJvd0tleToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIEZ1bmN0aW9uIF0sXG4gICAgICBkZWZhdWx0OiAnaWQnXG4gICAgfSxcblxuICAgIGNvbHVtbnM6IEFycmF5LFxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXG5cbiAgICBpY29uRmlyc3RQYWdlOiBTdHJpbmcsXG4gICAgaWNvblByZXZQYWdlOiBTdHJpbmcsXG4gICAgaWNvbk5leHRQYWdlOiBTdHJpbmcsXG4gICAgaWNvbkxhc3RQYWdlOiBTdHJpbmcsXG5cbiAgICB0aXRsZTogU3RyaW5nLFxuXG4gICAgaGlkZUhlYWRlcjogQm9vbGVhbixcblxuICAgIGdyaWQ6IEJvb2xlYW4sXG4gICAgZ3JpZEhlYWRlcjogQm9vbGVhbixcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIHNlcGFyYXRvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hvcml6b250YWwnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICB3cmFwQ2VsbHM6IEJvb2xlYW4sXG5cbiAgICB2aXJ0dWFsU2Nyb2xsOiBCb29sZWFuLFxuICAgIHZpcnR1YWxTY3JvbGxUYXJnZXQ6IHtcbiAgICAgIGRlZmF1bHQ6IHZvaWQgMFxuICAgIH0sXG4gICAgLi4uY29tbW9uVmlydFByb3BzT2JqLFxuXG4gICAgbm9EYXRhTGFiZWw6IFN0cmluZyxcbiAgICBub1Jlc3VsdHNMYWJlbDogU3RyaW5nLFxuICAgIGxvYWRpbmdMYWJlbDogU3RyaW5nLFxuICAgIHNlbGVjdGVkUm93c0xhYmVsOiBGdW5jdGlvbixcbiAgICByb3dzUGVyUGFnZUxhYmVsOiBTdHJpbmcsXG4gICAgcGFnaW5hdGlvbkxhYmVsOiBGdW5jdGlvbixcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnZ3JleS04J1xuICAgIH0sXG5cbiAgICB0aXRsZUNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUhlYWRlclN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlSGVhZGVyQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENvbnRhaW5lckNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDb250YWluZXJTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZENsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuXG4gICAgaGlkZUJvdHRvbTogQm9vbGVhbixcbiAgICBoaWRlU2VsZWN0ZWRCYW5uZXI6IEJvb2xlYW4sXG4gICAgaGlkZU5vRGF0YTogQm9vbGVhbixcbiAgICBoaWRlUGFnaW5hdGlvbjogQm9vbGVhbixcblxuICAgIG9uUm93Q2xpY2s6IEZ1bmN0aW9uLFxuICAgIG9uUm93RGJsY2xpY2s6IEZ1bmN0aW9uLFxuICAgIG9uUm93Q29udGV4dG1lbnU6IEZ1bmN0aW9uLFxuXG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZUZ1bGxzY3JlZW5Qcm9wcyxcblxuICAgIC4uLnVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVGaWx0ZXJQcm9wcyxcbiAgICAuLi51c2VUYWJsZVBhZ2luYXRpb25Qcm9wcyxcbiAgICAuLi51c2VUYWJsZVJvd0V4cGFuZFByb3BzLFxuICAgIC4uLnVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVTb3J0UHJvcHNcbiAgfSxcblxuICBlbWl0czogW1xuICAgICdyZXF1ZXN0JywgJ3ZpcnR1YWxTY3JvbGwnLFxuICAgIC4uLnVzZUZ1bGxzY3JlZW5FbWl0cyxcbiAgICAuLi51c2VUYWJsZVJvd0V4cGFuZEVtaXRzLFxuICAgIC4uLnVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHNcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IGluRnVsbHNjcmVlbiwgdG9nZ2xlRnVsbHNjcmVlbiB9ID0gdXNlRnVsbHNjcmVlbigpXG5cbiAgICBjb25zdCBnZXRSb3dLZXkgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0eXBlb2YgcHJvcHMucm93S2V5ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcHJvcHMucm93S2V5XG4gICAgICAgIDogcm93ID0+IHJvd1sgcHJvcHMucm93S2V5IF1cbiAgICApKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHZpcnRTY3JvbGxSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBoYXNWaXJ0U2Nyb2xsID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuZ3JpZCAhPT0gdHJ1ZSAmJiBwcm9wcy52aXJ0dWFsU2Nyb2xsID09PSB0cnVlKVxuXG4gICAgY29uc3QgY2FyZERlZmF1bHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAnIHEtdGFibGVfX2NhcmQnXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLXRhYmxlLS1zcXVhcmUnIDogJycpXG4gICAgICArIChwcm9wcy5mbGF0ID09PSB0cnVlID8gJyBxLXRhYmxlLS1mbGF0JyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtdGFibGUtLWJvcmRlcmVkJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IF9fY29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtdGFibGVfX2NvbnRhaW5lciBxLXRhYmxlLS0keyBwcm9wcy5zZXBhcmF0b3IgfS1zZXBhcmF0b3IgY29sdW1uIG5vLXdyYXBgXG4gICAgICArIChwcm9wcy5ncmlkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ncmlkJyA6IGNhcmREZWZhdWx0Q2xhc3MudmFsdWUpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtdGFibGUtLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy53cmFwQ2VsbHMgPT09IGZhbHNlID8gJyBxLXRhYmxlLS1uby13cmFwJyA6ICcnKVxuICAgICAgKyAoaW5GdWxsc2NyZWVuLnZhbHVlID09PSB0cnVlID8gJyBmdWxsc2NyZWVuIHNjcm9sbCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBjb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBfX2NvbnRhaW5lckNsYXNzLnZhbHVlICsgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgPyAnIHEtdGFibGUtLWxvYWRpbmcnIDogJycpXG4gICAgKVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBwcm9wcy50YWJsZVN0eWxlICsgcHJvcHMudGFibGVDbGFzcyArIHByb3BzLnRhYmxlSGVhZGVyU3R5bGUgKyBwcm9wcy50YWJsZUhlYWRlckNsYXNzICsgX19jb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICgpID0+IHsgaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSAmJiB2aXJ0U2Nyb2xsUmVmLnZhbHVlICE9PSBudWxsICYmIHZpcnRTY3JvbGxSZWYudmFsdWUucmVzZXQoKSB9XG4gICAgKVxuXG4gICAgY29uc3Qge1xuICAgICAgaW5uZXJQYWdpbmF0aW9uLFxuICAgICAgY29tcHV0ZWRQYWdpbmF0aW9uLFxuICAgICAgaXNTZXJ2ZXJTaWRlLFxuXG4gICAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgICBzZXRQYWdpbmF0aW9uXG4gICAgfSA9IHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlKHZtLCBnZXRDZWxsVmFsdWUpXG5cbiAgICBjb25zdCB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH0gPSB1c2VUYWJsZUZpbHRlcihwcm9wcywgc2V0UGFnaW5hdGlvbilcbiAgICBjb25zdCB7IGlzUm93RXhwYW5kZWQsIHNldEV4cGFuZGVkLCB1cGRhdGVFeHBhbmRlZCB9ID0gdXNlVGFibGVSb3dFeHBhbmQocHJvcHMsIGVtaXQpXG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvcnRlZFJvd3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgcm93cyA9IHByb3BzLnJvd3NcblxuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSB8fCByb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gcm93c1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICAgIGlmIChwcm9wcy5maWx0ZXIpIHtcbiAgICAgICAgcm93cyA9IGNvbXB1dGVkRmlsdGVyTWV0aG9kLnZhbHVlKHJvd3MsIHByb3BzLmZpbHRlciwgY29tcHV0ZWRDb2xzLnZhbHVlLCBnZXRDZWxsVmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2x1bW5Ub1NvcnQudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgcm93cyA9IGNvbXB1dGVkU29ydE1ldGhvZC52YWx1ZShcbiAgICAgICAgICBwcm9wcy5yb3dzID09PSByb3dzID8gcm93cy5zbGljZSgpIDogcm93cyxcbiAgICAgICAgICBzb3J0QnksXG4gICAgICAgICAgZGVzY2VuZGluZ1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dzXG4gICAgfSlcblxuICAgIGNvbnN0IGZpbHRlcmVkU29ydGVkUm93c051bWJlciA9IGNvbXB1dGVkKCgpID0+IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZS5sZW5ndGgpXG5cbiAgICBjb25zdCBjb21wdXRlZFJvd3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgcm93cyA9IGZpbHRlcmVkU29ydGVkUm93cy52YWx1ZVxuXG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuXG4gICAgICBpZiAocm93c1BlclBhZ2UgIT09IDApIHtcbiAgICAgICAgaWYgKGZpcnN0Um93SW5kZXgudmFsdWUgPT09IDAgJiYgcHJvcHMucm93cyAhPT0gcm93cykge1xuICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA+IGxhc3RSb3dJbmRleC52YWx1ZSkge1xuICAgICAgICAgICAgcm93cyA9IHJvd3Muc2xpY2UoMCwgbGFzdFJvd0luZGV4LnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICByb3dzID0gcm93cy5zbGljZShmaXJzdFJvd0luZGV4LnZhbHVlLCBsYXN0Um93SW5kZXgudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3NcbiAgICB9KVxuXG4gICAgY29uc3Qge1xuICAgICAgaGFzU2VsZWN0aW9uTW9kZSxcbiAgICAgIHNpbmdsZVNlbGVjdGlvbixcbiAgICAgIG11bHRpcGxlU2VsZWN0aW9uLFxuICAgICAgYWxsUm93c1NlbGVjdGVkLFxuICAgICAgc29tZVJvd3NTZWxlY3RlZCxcbiAgICAgIHJvd3NTZWxlY3RlZE51bWJlcixcblxuICAgICAgaXNSb3dTZWxlY3RlZCxcbiAgICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgICAgdXBkYXRlU2VsZWN0aW9uXG4gICAgfSA9IHVzZVRhYmxlUm93U2VsZWN0aW9uKHByb3BzLCBlbWl0LCBjb21wdXRlZFJvd3MsIGdldFJvd0tleSlcblxuICAgIGNvbnN0IHsgY29sTGlzdCwgY29tcHV0ZWRDb2xzLCBjb21wdXRlZENvbHNNYXAsIGNvbXB1dGVkQ29sc3BhbiB9ID0gdXNlVGFibGVDb2x1bW5TZWxlY3Rpb24ocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgaGFzU2VsZWN0aW9uTW9kZSlcblxuICAgIGNvbnN0IHsgY29sdW1uVG9Tb3J0LCBjb21wdXRlZFNvcnRNZXRob2QsIHNvcnQgfSA9IHVzZVRhYmxlU29ydChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKVxuXG4gICAgY29uc3Qge1xuICAgICAgZmlyc3RSb3dJbmRleCxcbiAgICAgIGxhc3RSb3dJbmRleCxcbiAgICAgIGlzRmlyc3RQYWdlLFxuICAgICAgaXNMYXN0UGFnZSxcbiAgICAgIHBhZ2VzTnVtYmVyLFxuICAgICAgY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMsXG4gICAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZVxuICAgIH0gPSB1c2VUYWJsZVBhZ2luYXRpb24odm0sIGlubmVyUGFnaW5hdGlvbiwgY29tcHV0ZWRQYWdpbmF0aW9uLCBpc1NlcnZlclNpZGUsIHNldFBhZ2luYXRpb24sIGZpbHRlcmVkU29ydGVkUm93c051bWJlcilcblxuICAgIGNvbnN0IG5vdGhpbmdUb0Rpc3BsYXkgPSBjb21wdXRlZCgoKSA9PiBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoID09PSAwKVxuXG4gICAgY29uc3QgdmlydFByb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cblxuICAgICAgY29tbW9uVmlydFByb3BzTGlzdFxuICAgICAgICAuZm9yRWFjaChwID0+IHsgYWNjWyBwIF0gPSBwcm9wc1sgcCBdIH0pXG5cbiAgICAgIGlmIChhY2MudmlydHVhbFNjcm9sbEl0ZW1TaXplID09PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9IHByb3BzLmRlbnNlID09PSB0cnVlID8gMjggOiA0OFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHJlc2V0VmlydHVhbFNjcm9sbCAoKSB7XG4gICAgICBoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlICYmIHZpcnRTY3JvbGxSZWYudmFsdWUucmVzZXQoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHkgKCkge1xuICAgICAgaWYgKHByb3BzLmdyaWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGdldEdyaWRCb2R5KClcbiAgICAgIH1cblxuICAgICAgY29uc3QgaGVhZGVyID0gcHJvcHMuaGlkZUhlYWRlciAhPT0gdHJ1ZSA/IGdldFRIZWFkIDogbnVsbFxuXG4gICAgICBpZiAoaGFzVmlydFNjcm9sbC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB0b3BSb3cgPSBzbG90c1sgJ3RvcC1yb3cnIF1cbiAgICAgICAgY29uc3QgYm90dG9tUm93ID0gc2xvdHNbICdib3R0b20tcm93JyBdXG5cbiAgICAgICAgY29uc3QgdmlydFNsb3RzID0ge1xuICAgICAgICAgIGRlZmF1bHQ6IHByb3BzID0+IGdldFRCb2R5VFIocHJvcHMuaXRlbSwgc2xvdHMuYm9keSwgcHJvcHMuaW5kZXgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9wUm93ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25zdCB0b3BDb250ZW50ID0gaCgndGJvZHknLCB0b3BSb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG5cbiAgICAgICAgICB2aXJ0U2xvdHMuYmVmb3JlID0gaGVhZGVyID09PSBudWxsXG4gICAgICAgICAgICA/ICgpID0+IHRvcENvbnRlbnRcbiAgICAgICAgICAgIDogKCkgPT4gWyBoZWFkZXIoKSBdLmNvbmNhdCh0b3BDb250ZW50KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgICAgIHZpcnRTbG90cy5iZWZvcmUgPSBoZWFkZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib3R0b21Sb3cgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHZpcnRTbG90cy5hZnRlciA9ICgpID0+IGgoJ3Rib2R5JywgYm90dG9tUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGgoUVZpcnR1YWxTY3JvbGwsIHtcbiAgICAgICAgICByZWY6IHZpcnRTY3JvbGxSZWYsXG4gICAgICAgICAgY2xhc3M6IHByb3BzLnRhYmxlQ2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlU3R5bGUsXG4gICAgICAgICAgLi4udmlydFByb3BzLnZhbHVlLFxuICAgICAgICAgIHNjcm9sbFRhcmdldDogcHJvcHMudmlydHVhbFNjcm9sbFRhcmdldCxcbiAgICAgICAgICBpdGVtczogY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgICAgIHR5cGU6ICdfX3F0YWJsZScsXG4gICAgICAgICAgdGFibGVDb2xzcGFuOiBjb21wdXRlZENvbHNwYW4udmFsdWUsXG4gICAgICAgICAgb25WaXJ0dWFsU2Nyb2xsOiBvblZTY3JvbGxcbiAgICAgICAgfSwgdmlydFNsb3RzKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgZ2V0VEJvZHkoKVxuICAgICAgXVxuXG4gICAgICBpZiAoaGVhZGVyICE9PSBudWxsKSB7XG4gICAgICAgIGNoaWxkLnVuc2hpZnQoaGVhZGVyKCkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBnZXRUYWJsZU1pZGRsZSh7XG4gICAgICAgIGNsYXNzOiBbICdxLXRhYmxlX19taWRkbGUgc2Nyb2xsJywgcHJvcHMudGFibGVDbGFzcyBdLFxuICAgICAgICBzdHlsZTogcHJvcHMudGFibGVTdHlsZVxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG8gKHRvSW5kZXgsIGVkZ2UpIHtcbiAgICAgIGlmICh2aXJ0U2Nyb2xsUmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHZpcnRTY3JvbGxSZWYudmFsdWUuc2Nyb2xsVG8odG9JbmRleCwgZWRnZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRvSW5kZXggPSBwYXJzZUludCh0b0luZGV4LCAxMClcbiAgICAgIGNvbnN0IHJvd0VsID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKGB0Ym9keSB0cjpudGgtb2YtdHlwZSgkeyB0b0luZGV4ICsgMSB9KWApXG5cbiAgICAgIGlmIChyb3dFbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJy5xLXRhYmxlX19taWRkbGUuc2Nyb2xsJylcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gcm93RWwub2Zmc2V0VG9wIC0gcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVTdGFydFxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBvZmZzZXRUb3AgPCBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID8gJ2RlY3JlYXNlJyA6ICdpbmNyZWFzZSdcblxuICAgICAgICBzY3JvbGxUYXJnZXQuc2Nyb2xsVG9wID0gb2Zmc2V0VG9wXG5cbiAgICAgICAgZW1pdCgndmlydHVhbFNjcm9sbCcsIHtcbiAgICAgICAgICBpbmRleDogdG9JbmRleCxcbiAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgIHRvOiBpbm5lclBhZ2luYXRpb24udmFsdWUucm93c1BlclBhZ2UgLSAxLFxuICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVlNjcm9sbCAoaW5mbykge1xuICAgICAgZW1pdCgndmlydHVhbFNjcm9sbCcsIGluZm8pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaChRTGluZWFyUHJvZ3Jlc3MsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2xpbmVhci1wcm9ncmVzcycsXG4gICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICAgIHRyYWNrQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUQm9keVRSIChyb3csIGJvZHlTbG90LCBwYWdlSW5kZXgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGtleSA9IGdldFJvd0tleS52YWx1ZShyb3cpLFxuICAgICAgICBzZWxlY3RlZCA9IGlzUm93U2VsZWN0ZWQoa2V5KVxuXG4gICAgICBpZiAoYm9keVNsb3QgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gYm9keVNsb3QoXG4gICAgICAgICAgZ2V0Qm9keVNjb3BlKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIHBhZ2VJbmRleCxcbiAgICAgICAgICAgIF9fdHJDbGFzczogc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIGJvZHlDZWxsID0gc2xvdHNbICdib2R5LWNlbGwnIF0sXG4gICAgICAgIGNoaWxkID0gY29tcHV0ZWRDb2xzLnZhbHVlLm1hcChjb2wgPT4ge1xuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBib2R5Q2VsbENvbCA9IHNsb3RzWyBgYm9keS1jZWxsLSR7IGNvbC5uYW1lIH1gIF0sXG4gICAgICAgICAgICBzbG90ID0gYm9keUNlbGxDb2wgIT09IHZvaWQgMCA/IGJvZHlDZWxsQ29sIDogYm9keUNlbGxcblxuICAgICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgID8gc2xvdChnZXRCb2R5Q2VsbFNjb3BlKHsga2V5LCByb3csIHBhZ2VJbmRleCwgY29sIH0pKVxuICAgICAgICAgICAgOiBoKCd0ZCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGNvbC5fX3RkQ2xhc3Mocm93KSxcbiAgICAgICAgICAgICAgc3R5bGU6IGNvbC5fX3RkU3R5bGUocm93KVxuICAgICAgICAgICAgfSwgZ2V0Q2VsbFZhbHVlKGNvbCwgcm93KSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChnZXRCb2R5U2VsZWN0aW9uU2NvcGUoeyBrZXksIHJvdywgcGFnZUluZGV4IH0pKVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBrZXkgXSwgWyByb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGQnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHsga2V5LCBjbGFzczogeyBzZWxlY3RlZCB9IH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25DbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgnUm93Q2xpY2snLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0RibGNsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uRGJsY2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ1Jvd0RibGNsaWNrJywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dDb250ZXh0bWVudSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNvbnRleHRtZW51ID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdSb3dDb250ZXh0bWVudScsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RyJywgZGF0YSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEJvZHkgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgYm9keSA9IHNsb3RzLmJvZHksXG4gICAgICAgIHRvcFJvdyA9IHNsb3RzWyAndG9wLXJvdycgXSxcbiAgICAgICAgYm90dG9tUm93ID0gc2xvdHNbICdib3R0b20tcm93JyBdXG5cbiAgICAgIGxldCBjaGlsZCA9IGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoXG4gICAgICAgIChyb3csIHBhZ2VJbmRleCkgPT4gZ2V0VEJvZHlUUihyb3csIGJvZHksIHBhZ2VJbmRleClcbiAgICAgIClcblxuICAgICAgaWYgKHRvcFJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gdG9wUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pLmNvbmNhdChjaGlsZClcbiAgICAgIH1cbiAgICAgIGlmIChib3R0b21Sb3cgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IGNoaWxkLmNvbmNhdChib3R0b21Sb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0Ym9keScsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlTY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG5cbiAgICAgIGRhdGEuY29scyA9IGRhdGEuY29scy5tYXAoXG4gICAgICAgIGNvbCA9PiBpbmplY3RQcm9wKHsgLi4uY29sIH0sICd2YWx1ZScsICgpID0+IGdldENlbGxWYWx1ZShjb2wsIGRhdGEucm93KSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRCb2R5Q2VsbFNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcbiAgICAgIGluamVjdFByb3AoZGF0YSwgJ3ZhbHVlJywgKCkgPT4gZ2V0Q2VsbFZhbHVlKGRhdGEuY29sLCBkYXRhLnJvdykpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlTZWxlY3Rpb25TY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluamVjdEJvZHlDb21tb25TY29wZSAoZGF0YSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgIGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSxcbiAgICAgICAgY29sc01hcDogY29tcHV0ZWRDb2xzTWFwLnZhbHVlLFxuICAgICAgICBzb3J0LFxuICAgICAgICByb3dJbmRleDogZmlyc3RSb3dJbmRleC52YWx1ZSArIGRhdGEucGFnZUluZGV4LFxuICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlXG4gICAgICB9KVxuXG4gICAgICBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlICYmIGluamVjdFByb3AoXG4gICAgICAgIGRhdGEsXG4gICAgICAgICdzZWxlY3RlZCcsXG4gICAgICAgICgpID0+IGlzUm93U2VsZWN0ZWQoZGF0YS5rZXkpLFxuICAgICAgICAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBkYXRhLmtleSBdLCBbIGRhdGEucm93IF0sIGFkZGluZywgZXZ0KVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGluamVjdFByb3AoXG4gICAgICAgIGRhdGEsXG4gICAgICAgICdleHBhbmQnLFxuICAgICAgICAoKSA9PiBpc1Jvd0V4cGFuZGVkKGRhdGEua2V5KSxcbiAgICAgICAgYWRkaW5nID0+IHsgdXBkYXRlRXhwYW5kZWQoZGF0YS5rZXksIGFkZGluZykgfVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENlbGxWYWx1ZSAoY29sLCByb3cpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHR5cGVvZiBjb2wuZmllbGQgPT09ICdmdW5jdGlvbicgPyBjb2wuZmllbGQocm93KSA6IHJvd1sgY29sLmZpZWxkIF1cbiAgICAgIHJldHVybiBjb2wuZm9ybWF0ICE9PSB2b2lkIDAgPyBjb2wuZm9ybWF0KHZhbCwgcm93KSA6IHZhbFxuICAgIH1cblxuICAgIGNvbnN0IG1hcmdpbmFsc1Njb3BlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHBhZ2luYXRpb246IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgIHBhZ2VzTnVtYmVyOiBwYWdlc051bWJlci52YWx1ZSxcbiAgICAgIGlzRmlyc3RQYWdlOiBpc0ZpcnN0UGFnZS52YWx1ZSxcbiAgICAgIGlzTGFzdFBhZ2U6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2UsXG5cbiAgICAgIGluRnVsbHNjcmVlbjogaW5GdWxsc2NyZWVuLnZhbHVlLFxuICAgICAgdG9nZ2xlRnVsbHNjcmVlblxuICAgIH0pKVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9wRGl2ICgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHRvcCA9IHNsb3RzLnRvcCxcbiAgICAgICAgdG9wTGVmdCA9IHNsb3RzWyAndG9wLWxlZnQnIF0sXG4gICAgICAgIHRvcFJpZ2h0ID0gc2xvdHNbICd0b3AtcmlnaHQnIF0sXG4gICAgICAgIHRvcFNlbGVjdGlvbiA9IHNsb3RzWyAndG9wLXNlbGVjdGlvbicgXSxcbiAgICAgICAgaGFzU2VsZWN0aW9uID0gaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICYmIHRvcFNlbGVjdGlvbiAhPT0gdm9pZCAwXG4gICAgICAgICAgJiYgcm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlID4gMCxcbiAgICAgICAgdG9wQ2xhc3MgPSAncS10YWJsZV9fdG9wIHJlbGF0aXZlLXBvc2l0aW9uIHJvdyBpdGVtcy1jZW50ZXInXG5cbiAgICAgIGlmICh0b3AgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogdG9wQ2xhc3MgfSwgWyB0b3AobWFyZ2luYWxzU2NvcGUudmFsdWUpIF0pXG4gICAgICB9XG5cbiAgICAgIGxldCBjaGlsZFxuXG4gICAgICBpZiAoaGFzU2VsZWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkID0gdG9wU2VsZWN0aW9uKG1hcmdpbmFsc1Njb3BlLnZhbHVlKS5zbGljZSgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBbXVxuXG4gICAgICAgIGlmICh0b3BMZWZ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGUtY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICB0b3BMZWZ0KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcHMudGl0bGUpIHtcbiAgICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBbICdxLXRhYmxlX190aXRsZScsIHByb3BzLnRpdGxlQ2xhc3MgXVxuICAgICAgICAgICAgICB9LCBwcm9wcy50aXRsZSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0b3BSaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX3NlcGFyYXRvciBjb2wnIH0pXG4gICAgICAgIClcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgdG9wUmlnaHQobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogdG9wQ2xhc3MgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVyU2VsZWN0ZWRWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNvbWVSb3dzU2VsZWN0ZWQudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogYWxsUm93c1NlbGVjdGVkLnZhbHVlXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gZ2V0VEhlYWRUUigpXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgPT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ3RyJywgeyBjbGFzczogJ3EtdGFibGVfX3Byb2dyZXNzJyB9LCBbXG4gICAgICAgICAgICBoKCd0aCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdyZWxhdGl2ZS1wb3NpdGlvbicsXG4gICAgICAgICAgICAgIGNvbHNwYW46IGNvbXB1dGVkQ29sc3Bhbi52YWx1ZVxuICAgICAgICAgICAgfSwgZ2V0UHJvZ3Jlc3MoKSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0aGVhZCcsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRIZWFkVFIgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgaGVhZGVyID0gc2xvdHMuaGVhZGVyLFxuICAgICAgICBoZWFkZXJDZWxsID0gc2xvdHNbICdoZWFkZXItY2VsbCcgXVxuXG4gICAgICBpZiAoaGVhZGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIGhlYWRlcihcbiAgICAgICAgICBnZXRIZWFkZXJTY29wZSh7IGhlYWRlcjogdHJ1ZSB9KVxuICAgICAgICApLnNsaWNlKClcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBjb21wdXRlZENvbHMudmFsdWUubWFwKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgaGVhZGVyQ2VsbENvbCA9IHNsb3RzWyBgaGVhZGVyLWNlbGwtJHsgY29sLm5hbWUgfWAgXSxcbiAgICAgICAgICBzbG90ID0gaGVhZGVyQ2VsbENvbCAhPT0gdm9pZCAwID8gaGVhZGVyQ2VsbENvbCA6IGhlYWRlckNlbGwsXG4gICAgICAgICAgcHJvcHMgPSBnZXRIZWFkZXJTY29wZSh7IGNvbCB9KVxuXG4gICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QocHJvcHMpXG4gICAgICAgICAgOiBoKFFUaCwge1xuICAgICAgICAgICAga2V5OiBjb2wubmFtZSxcbiAgICAgICAgICAgIHByb3BzXG4gICAgICAgICAgfSwgKCkgPT4gY29sLmxhYmVsKVxuICAgICAgfSlcblxuICAgICAgaWYgKHNpbmdsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ncmlkICE9PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sICcgJylcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobXVsdGlwbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnaGVhZGVyLXNlbGVjdGlvbicgXVxuICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90KGdldEhlYWRlclNjb3BlKHt9KSlcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRQ2hlY2tib3gsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogaGVhZGVyU2VsZWN0ZWRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGgnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaCgndHInLCB7XG4gICAgICAgICAgY2xhc3M6IHByb3BzLnRhYmxlSGVhZGVyQ2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnRhYmxlSGVhZGVyU3R5bGVcbiAgICAgICAgfSwgY2hpbGQpXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyU2NvcGUgKGRhdGEpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIGNvbHNNYXA6IGNvbXB1dGVkQ29sc01hcC52YWx1ZSxcbiAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZVxuICAgICAgfSlcblxuICAgICAgaWYgKG11bHRpcGxlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGluamVjdFByb3AoXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICAnc2VsZWN0ZWQnLFxuICAgICAgICAgICgpID0+IGhlYWRlclNlbGVjdGVkVmFsdWUudmFsdWUsXG4gICAgICAgICAgb25NdWx0aXBsZVNlbGVjdGlvblNldFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25NdWx0aXBsZVNlbGVjdGlvblNldCAodmFsKSB7XG4gICAgICBpZiAoc29tZVJvd3NTZWxlY3RlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB2YWwgPSBmYWxzZVxuICAgICAgfVxuXG4gICAgICB1cGRhdGVTZWxlY3Rpb24oXG4gICAgICAgIGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoZ2V0Um93S2V5LnZhbHVlKSxcbiAgICAgICAgY29tcHV0ZWRSb3dzLnZhbHVlLFxuICAgICAgICB2YWxcbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBuYXZJY29uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgaWNvID0gW1xuICAgICAgICBwcm9wcy5pY29uRmlyc3RQYWdlIHx8ICRxLmljb25TZXQudGFibGUuZmlyc3RQYWdlLFxuICAgICAgICBwcm9wcy5pY29uUHJldlBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5wcmV2UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvbk5leHRQYWdlIHx8ICRxLmljb25TZXQudGFibGUubmV4dFBhZ2UsXG4gICAgICAgIHByb3BzLmljb25MYXN0UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLmxhc3RQYWdlXG4gICAgICBdXG4gICAgICByZXR1cm4gJHEubGFuZy5ydGwgPT09IHRydWUgPyBpY28ucmV2ZXJzZSgpIDogaWNvXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGdldEJvdHRvbURpdiAoKSB7XG4gICAgICBpZiAocHJvcHMuaGlkZUJvdHRvbSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKG5vdGhpbmdUb0Rpc3BsYXkudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKHByb3BzLmhpZGVOb0RhdGEgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBwcm9wcy5sb2FkaW5nID09PSB0cnVlXG4gICAgICAgICAgPyBwcm9wcy5sb2FkaW5nTGFiZWwgfHwgJHEubGFuZy50YWJsZS5sb2FkaW5nXG4gICAgICAgICAgOiAocHJvcHMuZmlsdGVyID8gcHJvcHMubm9SZXN1bHRzTGFiZWwgfHwgJHEubGFuZy50YWJsZS5ub1Jlc3VsdHMgOiBwcm9wcy5ub0RhdGFMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLm5vRGF0YSlcblxuICAgICAgICBjb25zdCBub0RhdGEgPSBzbG90c1sgJ25vLWRhdGEnIF1cbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBub0RhdGEgIT09IHZvaWQgMFxuICAgICAgICAgID8gWyBub0RhdGEoeyBtZXNzYWdlLCBpY29uOiAkcS5pY29uU2V0LnRhYmxlLndhcm5pbmcsIGZpbHRlcjogcHJvcHMuZmlsdGVyIH0pIF1cbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fYm90dG9tLW5vZGF0YS1pY29uJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAkcS5pY29uU2V0LnRhYmxlLndhcm5pbmdcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgIF1cblxuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgKyAnIHEtdGFibGVfX2JvdHRvbS0tbm9kYXRhJyB9LCBjaGlsZHJlbilcbiAgICAgIH1cblxuICAgICAgY29uc3QgYm90dG9tID0gc2xvdHMuYm90dG9tXG5cbiAgICAgIGlmIChib3R0b20gIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgfSwgWyBib3R0b20obWFyZ2luYWxzU2NvcGUudmFsdWUpIF0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuaGlkZVNlbGVjdGVkQmFubmVyICE9PSB0cnVlICYmIGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgJiYgcm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlID4gMFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIFtcbiAgICAgICAgICAgICAgICAocHJvcHMuc2VsZWN0ZWRSb3dzTGFiZWwgfHwgJHEubGFuZy50YWJsZS5zZWxlY3RlZFJlY29yZHMpKHJvd3NTZWxlY3RlZE51bWJlci52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IFtdXG5cbiAgICAgIGlmIChwcm9wcy5oaWRlUGFnaW5hdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiBib3R0b21DbGFzcyArICcganVzdGlmeS1lbmQnXG4gICAgICAgIH0sIGdldFBhZ2luYXRpb25EaXYoY2hpbGQpKVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogYm90dG9tQ2xhc3MgfSwgY2hpbGQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWdTZWxlY3Rpb24gKHBhZykge1xuICAgICAgc2V0UGFnaW5hdGlvbih7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIHJvd3NQZXJQYWdlOiBwYWcudmFsdWVcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFnaW5hdGlvbkRpdiAoY2hpbGQpIHtcbiAgICAgIGxldCBjb250cm9sXG4gICAgICBjb25zdFxuICAgICAgICB7IHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUsXG4gICAgICAgIHBhZ2luYXRpb25MYWJlbCA9IHByb3BzLnBhZ2luYXRpb25MYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnBhZ2luYXRpb24sXG4gICAgICAgIHBhZ2luYXRpb25TbG90ID0gc2xvdHMucGFnaW5hdGlvbixcbiAgICAgICAgaGFzT3B0cyA9IHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucy5sZW5ndGggPiAxXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19zZXBhcmF0b3IgY29sJyB9KVxuICAgICAgKVxuXG4gICAgICBpZiAoaGFzT3B0cyA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1pdGVtJyB9LCBbXG4gICAgICAgICAgICAgIHByb3BzLnJvd3NQZXJQYWdlTGFiZWwgfHwgJHEubGFuZy50YWJsZS5yZWNvcmRzUGVyUGFnZVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBoKFFTZWxlY3QsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19zZWxlY3QgaW5saW5lIHEtdGFibGVfX2JvdHRvbS1pdGVtJyxcbiAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICBtb2RlbFZhbHVlOiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogY29tcHV0ZWRSb3dzUGVyUGFnZU9wdGlvbnMudmFsdWUsXG4gICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZTogcm93c1BlclBhZ2UgPT09IDBcbiAgICAgICAgICAgICAgICA/ICRxLmxhbmcudGFibGUuYWxsUm93c1xuICAgICAgICAgICAgICAgIDogcm93c1BlclBhZ2UsXG4gICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICAgIG9wdGlvbnNEZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3B0aW9uc0NvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IG9uUGFnU2VsZWN0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2luYXRpb25TbG90ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY29udHJvbCA9IHBhZ2luYXRpb25TbG90KG1hcmdpbmFsc1Njb3BlLnZhbHVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnRyb2wgPSBbXG4gICAgICAgICAgaCgnc3BhbicsIHJvd3NQZXJQYWdlICE9PSAwID8geyBjbGFzczogJ3EtdGFibGVfX2JvdHRvbS1pdGVtJyB9IDoge30sIFtcbiAgICAgICAgICAgIHJvd3NQZXJQYWdlXG4gICAgICAgICAgICAgID8gcGFnaW5hdGlvbkxhYmVsKGZpcnN0Um93SW5kZXgudmFsdWUgKyAxLCBNYXRoLm1pbihsYXN0Um93SW5kZXgudmFsdWUsIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSksIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSlcbiAgICAgICAgICAgICAgOiBwYWdpbmF0aW9uTGFiZWwoMSwgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyLnZhbHVlLCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuXG4gICAgICAgIGlmIChyb3dzUGVyUGFnZSAhPT0gMCAmJiBwYWdlc051bWJlci52YWx1ZSA+IDEpIHtcbiAgICAgICAgICBjb25zdCBidG5Qcm9wcyA9IHtcbiAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgICBmbGF0OiB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb3BzLmRlbnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBidG5Qcm9wcy5zaXplID0gJ3NtJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhZ2VzTnVtYmVyLnZhbHVlID4gMiAmJiBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdGaXJzdCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAwIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBmaXJzdFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnUHJldicsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAxIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBwcmV2UGFnZVxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ05leHQnLFxuICAgICAgICAgICAgICAuLi5idG5Qcm9wcyxcbiAgICAgICAgICAgICAgaWNvbjogbmF2SWNvbi52YWx1ZVsgMiBdLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBpc0xhc3RQYWdlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBuZXh0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBwYWdlc051bWJlci52YWx1ZSA+IDIgJiYgY29udHJvbC5wdXNoKFxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnTGFzdCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAzIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGxhc3RQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgY29udHJvbClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JpZEhlYWRlciAoKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IHByb3BzLmdyaWRIZWFkZXIgPT09IHRydWVcbiAgICAgICAgPyBbXG4gICAgICAgICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBbXG4gICAgICAgICAgICAgIGdldFRIZWFkKGgpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgOiAoXG4gICAgICAgICAgICBwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgPT09IHZvaWQgMFxuICAgICAgICAgICAgICA/IGdldFByb2dyZXNzKGgpXG4gICAgICAgICAgICAgIDogdm9pZCAwXG4gICAgICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX21pZGRsZScgfSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JpZEJvZHkgKCkge1xuICAgICAgY29uc3QgaXRlbSA9IHNsb3RzLml0ZW0gIT09IHZvaWQgMFxuICAgICAgICA/IHNsb3RzLml0ZW1cbiAgICAgICAgOiBzY29wZSA9PiB7XG4gICAgICAgICAgY29uc3QgY2hpbGQgPSBzY29wZS5jb2xzLm1hcChcbiAgICAgICAgICAgIGNvbCA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXJvdycgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXRpdGxlJyB9LCBbIGNvbC5sYWJlbCBdKSxcbiAgICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbS12YWx1ZScgfSwgWyBjb2wudmFsdWUgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1sgJ2JvZHktc2VsZWN0aW9uJyBdXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gc2xvdCAhPT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gc2xvdChzY29wZSlcbiAgICAgICAgICAgICAgOiBbXG4gICAgICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBzY29wZS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiAoYWRkaW5nLCBldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBzY29wZS5rZXkgXSwgWyBzY29wZS5yb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXJvdycgfSwgY29udGVudCksXG4gICAgICAgICAgICAgIGgoUVNlcGFyYXRvciwgeyBkYXJrOiBpc0RhcmsudmFsdWUgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgJ3EtdGFibGVfX2dyaWQtaXRlbS1jYXJkJyArIGNhcmREZWZhdWx0Q2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHByb3BzLmNhcmRDbGFzc1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkU3R5bGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDBcbiAgICAgICAgICAgIHx8IHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZGF0YS5jbGFzc1sgMCBdICs9ICcgY3Vyc29yLXBvaW50ZXInXG5cbiAgICAgICAgICAgIGlmIChwcm9wcy5vblJvd0NsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgZGF0YS5vbkNsaWNrID0gZXZ0ID0+IHtcbiAgICAgICAgICAgICAgICBlbWl0KCdSb3dDbGljaycsIGV2dCwgc2NvcGUucm93LCBzY29wZS5wYWdlSW5kZXgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHByb3BzLm9uUm93RGJsY2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhLm9uRGJsY2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXQoJ1Jvd0RibGNsaWNrJywgZXZ0LCBzY29wZS5yb3csIHNjb3BlLnBhZ2VJbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2dyaWQtaXRlbSBjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTMnXG4gICAgICAgICAgICAgICsgKHNjb3BlLnNlbGVjdGVkID09PSB0cnVlID8gJyBxLXRhYmxlX19ncmlkLWl0ZW0tLXNlbGVjdGVkJyA6ICcnKVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIGRhdGEsIGNoaWxkKVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAncS10YWJsZV9fZ3JpZC1jb250ZW50IHJvdycsXG4gICAgICAgICAgcHJvcHMuY2FyZENvbnRhaW5lckNsYXNzXG4gICAgICAgIF0sXG4gICAgICAgIHN0eWxlOiBwcm9wcy5jYXJkQ29udGFpbmVyU3R5bGVcbiAgICAgIH0sIGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoKHJvdywgcGFnZUluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtKGdldEJvZHlTY29wZSh7XG4gICAgICAgICAga2V5OiBnZXRSb3dLZXkudmFsdWUocm93KSxcbiAgICAgICAgICByb3csXG4gICAgICAgICAgcGFnZUluZGV4XG4gICAgICAgIH0pKVxuICAgICAgfSkpXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzIGFuZCBuZWVkZWQgY29tcHV0ZWQgcHJvcHNcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7XG4gICAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgICBzZXRQYWdpbmF0aW9uLFxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlLFxuICAgICAgaXNSb3dTZWxlY3RlZCxcbiAgICAgIGNsZWFyU2VsZWN0aW9uLFxuICAgICAgaXNSb3dFeHBhbmRlZCxcbiAgICAgIHNldEV4cGFuZGVkLFxuICAgICAgc29ydCxcbiAgICAgIHJlc2V0VmlydHVhbFNjcm9sbCxcbiAgICAgIHNjcm9sbFRvLFxuICAgICAgZ2V0Q2VsbFZhbHVlXG4gICAgfSlcblxuICAgIGluamVjdE11bHRpcGxlUHJvcHModm0ucHJveHksIHtcbiAgICAgIGZpbHRlcmVkU29ydGVkUm93czogKCkgPT4gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlLFxuICAgICAgY29tcHV0ZWRSb3dzOiAoKSA9PiBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICBjb21wdXRlZFJvd3NOdW1iZXI6ICgpID0+IGNvbXB1dGVkUm93c051bWJlci52YWx1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbIGdldFRvcERpdigpIF1cbiAgICAgIGNvbnN0IGRhdGEgPSB7IHJlZjogcm9vdFJlZiwgY2xhc3M6IGNvbnRhaW5lckNsYXNzLnZhbHVlIH1cblxuICAgICAgaWYgKHByb3BzLmdyaWQgPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQucHVzaChnZXRHcmlkSGVhZGVyKCkpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgY2xhc3M6IFsgZGF0YS5jbGFzcywgcHJvcHMuY2FyZENsYXNzIF0sXG4gICAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRTdHlsZVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBnZXRCb2R5KCksXG4gICAgICAgIGdldEJvdHRvbURpdigpXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9wcy5sb2FkaW5nID09PSB0cnVlICYmIHNsb3RzLmxvYWRpbmcgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIHNsb3RzLmxvYWRpbmcoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCBkYXRhLCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4i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

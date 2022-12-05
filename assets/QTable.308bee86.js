import { j as createComponent, h, k as hSlot, x as hUniqueSlot, Q as QIcon, g as getCurrentInstance, K as useDarkProps, M as useDark, c as computed, t as noop, r as ref, w as watch, p as nextTick, b1 as debounce, b5 as onBeforeMount, aZ as onDeactivated, aY as onActivated, q as onBeforeUnmount, o as onMounted, Z as getScrollTarget, v as listenOpts, Y as hMergeSlot, b6 as useFieldProps, b7 as useFieldEmits, b8 as useField, b9 as useFieldState, ba as useSizeProps, bb as useSize, U as hDir, bc as hMergeSlotSafely, aw as Ripple, I as stopAndPrevent, ah as useFormProps, bd as useFormInputNameAttr, be as fieldValueIsFilled, bf as isDeepEqual, bg as onBeforeUpdate, b4 as onUpdated, E as prevent, bh as useKeyComposition, m as stop, bi as normalizeToInterval, aK as isKeyCode, bj as shouldIgnoreKey, bk as QDialog, bl as vmHasRouter, bm as History, af as isNumber, bn as isDate, ag as isObject, bo as injectMultipleProps, bp as QCheckbox, bq as injectProp, l as QBtn, as as QSeparator } from "./index.6d1b1638.js";
import { g as QList, Q as QMenu, a as QItemSection, e as QItemLabel, b as QItem } from "./durationUtils.ada1e9cf.js";
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
let rtlHasScrollBug = false;
{
  const scroller = document.createElement("div");
  const spacer = document.createElement("div");
  scroller.setAttribute("dir", "rtl");
  scroller.style.width = "1px";
  scroller.style.height = "1px";
  scroller.style.overflow = "auto";
  spacer.style.width = "1000px";
  spacer.style.height = "1px";
  document.body.appendChild(scroller);
  scroller.appendChild(spacer);
  scroller.scrollLeft = -1e3;
  rtlHasScrollBug = scroller.scrollLeft >= 0;
  scroller.remove();
}
const aggBucketSize = 1e3;
const scrollToEdges = [
  "start",
  "center",
  "end",
  "start-force",
  "center-force",
  "end-force"
];
const filterProto = Array.prototype.filter;
const setOverflowAnchor = window.getComputedStyle(document.body).overflowAnchor === void 0 ? noop : function(contentEl, index) {
  if (contentEl === null) {
    return;
  }
  cancelAnimationFrame(contentEl._qOverflowAnimationFrame);
  contentEl._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (contentEl === null) {
      return;
    }
    const children = contentEl.children || [];
    filterProto.call(children, (el2) => el2.dataset && el2.dataset.qVsAnchor !== void 0).forEach((el2) => {
      delete el2.dataset.qVsAnchor;
    });
    const el = children[index];
    if (el && el.dataset) {
      el.dataset.qVsAnchor = "";
    }
  });
};
function sumFn(acc, h2) {
  return acc + h2;
}
function getScrollDetails(parent, child, beforeRef, afterRef, horizontal, rtl, stickyStart, stickyEnd) {
  const parentCalc = parent === window ? document.scrollingElement || document.documentElement : parent, propElSize = horizontal === true ? "offsetWidth" : "offsetHeight", details = {
    scrollStart: 0,
    scrollViewSize: -stickyStart - stickyEnd,
    scrollMaxSize: 0,
    offsetStart: -stickyStart,
    offsetEnd: -stickyEnd
  };
  if (horizontal === true) {
    if (parent === window) {
      details.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0;
      details.scrollViewSize += document.documentElement.clientWidth;
    } else {
      details.scrollStart = parentCalc.scrollLeft;
      details.scrollViewSize += parentCalc.clientWidth;
    }
    details.scrollMaxSize = parentCalc.scrollWidth;
    if (rtl === true) {
      details.scrollStart = (rtlHasScrollBug === true ? details.scrollMaxSize - details.scrollViewSize : 0) - details.scrollStart;
    }
  } else {
    if (parent === window) {
      details.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0;
      details.scrollViewSize += document.documentElement.clientHeight;
    } else {
      details.scrollStart = parentCalc.scrollTop;
      details.scrollViewSize += parentCalc.clientHeight;
    }
    details.scrollMaxSize = parentCalc.scrollHeight;
  }
  if (beforeRef !== null) {
    for (let el = beforeRef.previousElementSibling; el !== null; el = el.previousElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetStart += el[propElSize];
      }
    }
  }
  if (afterRef !== null) {
    for (let el = afterRef.nextElementSibling; el !== null; el = el.nextElementSibling) {
      if (el.classList.contains("q-virtual-scroll--skip") === false) {
        details.offsetEnd += el[propElSize];
      }
    }
  }
  if (child !== parent) {
    const parentRect = parentCalc.getBoundingClientRect(), childRect = child.getBoundingClientRect();
    if (horizontal === true) {
      details.offsetStart += childRect.left - parentRect.left;
      details.offsetEnd -= childRect.width;
    } else {
      details.offsetStart += childRect.top - parentRect.top;
      details.offsetEnd -= childRect.height;
    }
    if (parent !== window) {
      details.offsetStart += details.scrollStart;
    }
    details.offsetEnd += details.scrollMaxSize - details.offsetStart;
  }
  return details;
}
function setScroll(parent, scroll, horizontal, rtl) {
  if (scroll === "end") {
    scroll = (parent === window ? document.body : parent)[horizontal === true ? "scrollWidth" : "scrollHeight"];
  }
  if (parent === window) {
    if (horizontal === true) {
      if (rtl === true) {
        scroll = (rtlHasScrollBug === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - scroll;
      }
      window.scrollTo(scroll, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    } else {
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, scroll);
    }
  } else if (horizontal === true) {
    if (rtl === true) {
      scroll = (rtlHasScrollBug === true ? parent.scrollWidth - parent.offsetWidth : 0) - scroll;
    }
    parent.scrollLeft = scroll;
  } else {
    parent.scrollTop = scroll;
  }
}
function sumSize(sizeAgg, size, from, to) {
  if (from >= to) {
    return 0;
  }
  const lastTo = size.length, fromAgg = Math.floor(from / aggBucketSize), toAgg = Math.floor((to - 1) / aggBucketSize) + 1;
  let total = sizeAgg.slice(fromAgg, toAgg).reduce(sumFn, 0);
  if (from % aggBucketSize !== 0) {
    total -= size.slice(fromAgg * aggBucketSize, from).reduce(sumFn, 0);
  }
  if (to % aggBucketSize !== 0 && to !== lastTo) {
    total -= size.slice(to, toAgg * aggBucketSize).reduce(sumFn, 0);
  }
  return total;
}
const commonVirtScrollProps = {
  virtualScrollSliceSize: {
    type: [Number, String],
    default: null
  },
  virtualScrollSliceRatioBefore: {
    type: [Number, String],
    default: 1
  },
  virtualScrollSliceRatioAfter: {
    type: [Number, String],
    default: 1
  },
  virtualScrollItemSize: {
    type: [Number, String],
    default: 24
  },
  virtualScrollStickySizeStart: {
    type: [Number, String],
    default: 0
  },
  virtualScrollStickySizeEnd: {
    type: [Number, String],
    default: 0
  },
  tableColspan: [Number, String]
};
const commonVirtPropsList = Object.keys(commonVirtScrollProps);
const useVirtualScrollProps = {
  virtualScrollHorizontal: Boolean,
  onVirtualScroll: Function,
  ...commonVirtScrollProps
};
function useVirtualScroll({
  virtualScrollLength,
  getVirtualScrollTarget,
  getVirtualScrollEl,
  virtualScrollItemSizeComputed
}) {
  const vm = getCurrentInstance();
  const { props, emit, proxy } = vm;
  const { $q } = proxy;
  let prevScrollStart, prevToIndex, localScrollViewSize, virtualScrollSizesAgg = [], virtualScrollSizes;
  const virtualScrollPaddingBefore = ref(0);
  const virtualScrollPaddingAfter = ref(0);
  const virtualScrollSliceSizeComputed = ref({});
  const beforeRef = ref(null);
  const afterRef = ref(null);
  const contentRef = ref(null);
  const virtualScrollSliceRange = ref({ from: 0, to: 0 });
  const colspanAttr = computed(() => props.tableColspan !== void 0 ? props.tableColspan : 100);
  if (virtualScrollItemSizeComputed === void 0) {
    virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize);
  }
  const needsReset = computed(() => virtualScrollItemSizeComputed.value + ";" + props.virtualScrollHorizontal);
  const needsSliceRecalc = computed(
    () => needsReset.value + ";" + props.virtualScrollSliceRatioBefore + ";" + props.virtualScrollSliceRatioAfter
  );
  watch(needsSliceRecalc, () => {
    setVirtualScrollSize();
  });
  watch(needsReset, reset);
  function reset() {
    localResetVirtualScroll(prevToIndex, true);
  }
  function refresh(toIndex) {
    localResetVirtualScroll(toIndex === void 0 ? prevToIndex : toIndex);
  }
  function scrollTo(toIndex, edge) {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
      return;
    }
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props.virtualScrollHorizontal,
      $q.lang.rtl,
      props.virtualScrollStickySizeStart,
      props.virtualScrollStickySizeEnd
    );
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      Math.min(virtualScrollLength.value - 1, Math.max(0, parseInt(toIndex, 10) || 0)),
      0,
      scrollToEdges.indexOf(edge) > -1 ? edge : prevToIndex > -1 && toIndex > prevToIndex ? "end" : "start"
    );
  }
  function localOnVirtualScrollEvt() {
    const scrollEl = getVirtualScrollTarget();
    if (scrollEl === void 0 || scrollEl === null || scrollEl.nodeType === 8) {
      return;
    }
    const scrollDetails = getScrollDetails(
      scrollEl,
      getVirtualScrollEl(),
      beforeRef.value,
      afterRef.value,
      props.virtualScrollHorizontal,
      $q.lang.rtl,
      props.virtualScrollStickySizeStart,
      props.virtualScrollStickySizeEnd
    ), listLastIndex = virtualScrollLength.value - 1, listEndOffset = scrollDetails.scrollMaxSize - scrollDetails.offsetStart - scrollDetails.offsetEnd - virtualScrollPaddingAfter.value;
    if (prevScrollStart === scrollDetails.scrollStart) {
      return;
    }
    if (scrollDetails.scrollMaxSize <= 0) {
      setVirtualScrollSliceRange(scrollEl, scrollDetails, 0, 0);
      return;
    }
    localScrollViewSize !== scrollDetails.scrollViewSize && setVirtualScrollSize(scrollDetails.scrollViewSize);
    updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
    const scrollMaxStart = Math.floor(scrollDetails.scrollMaxSize - Math.max(scrollDetails.scrollViewSize, scrollDetails.offsetEnd) - Math.min(virtualScrollSizes[listLastIndex], scrollDetails.scrollViewSize / 2));
    if (scrollMaxStart > 0 && Math.ceil(scrollDetails.scrollStart) >= scrollMaxStart) {
      setVirtualScrollSliceRange(
        scrollEl,
        scrollDetails,
        listLastIndex,
        scrollDetails.scrollMaxSize - scrollDetails.offsetEnd - virtualScrollSizesAgg.reduce(sumFn, 0)
      );
      return;
    }
    let toIndex = 0, listOffset = scrollDetails.scrollStart - scrollDetails.offsetStart, offset = listOffset;
    if (listOffset <= listEndOffset && listOffset + scrollDetails.scrollViewSize >= virtualScrollPaddingBefore.value) {
      listOffset -= virtualScrollPaddingBefore.value;
      toIndex = virtualScrollSliceRange.value.from;
      offset = listOffset;
    } else {
      for (let j = 0; listOffset >= virtualScrollSizesAgg[j] && toIndex < listLastIndex; j++) {
        listOffset -= virtualScrollSizesAgg[j];
        toIndex += aggBucketSize;
      }
    }
    while (listOffset > 0 && toIndex < listLastIndex) {
      listOffset -= virtualScrollSizes[toIndex];
      if (listOffset > -scrollDetails.scrollViewSize) {
        toIndex++;
        offset = listOffset;
      } else {
        offset = virtualScrollSizes[toIndex] + listOffset;
      }
    }
    setVirtualScrollSliceRange(
      scrollEl,
      scrollDetails,
      toIndex,
      offset
    );
  }
  function setVirtualScrollSliceRange(scrollEl, scrollDetails, toIndex, offset, align) {
    const alignForce = typeof align === "string" && align.indexOf("-force") > -1;
    const alignEnd = alignForce === true ? align.replace("-force", "") : align;
    const alignRange = alignEnd !== void 0 ? alignEnd : "start";
    let from = Math.max(0, toIndex - virtualScrollSliceSizeComputed.value[alignRange]), to = from + virtualScrollSliceSizeComputed.value.total;
    if (to > virtualScrollLength.value) {
      to = virtualScrollLength.value;
      from = Math.max(0, to - virtualScrollSliceSizeComputed.value.total);
    }
    prevScrollStart = scrollDetails.scrollStart;
    const rangeChanged = from !== virtualScrollSliceRange.value.from || to !== virtualScrollSliceRange.value.to;
    if (rangeChanged === false && alignEnd === void 0) {
      emitScroll(toIndex);
      return;
    }
    const { activeElement } = document;
    const contentEl = contentRef.value;
    if (rangeChanged === true && contentEl !== null && contentEl !== activeElement && contentEl.contains(activeElement) === true) {
      contentEl.addEventListener("focusout", onBlurRefocusFn);
      setTimeout(() => {
        contentEl !== null && contentEl.removeEventListener("focusout", onBlurRefocusFn);
      });
    }
    setOverflowAnchor(contentEl, toIndex - from);
    const sizeBefore = alignEnd !== void 0 ? virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0) : 0;
    if (rangeChanged === true) {
      const tempTo = to >= virtualScrollSliceRange.value.from && from <= virtualScrollSliceRange.value.to ? virtualScrollSliceRange.value.to : to;
      virtualScrollSliceRange.value = { from, to: tempTo };
      virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, from);
      virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
      requestAnimationFrame(() => {
        if (virtualScrollSliceRange.value.to !== to && prevScrollStart === scrollDetails.scrollStart) {
          virtualScrollSliceRange.value = { from: virtualScrollSliceRange.value.from, to };
          virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, to, virtualScrollLength.value);
        }
      });
    }
    requestAnimationFrame(() => {
      if (prevScrollStart !== scrollDetails.scrollStart) {
        return;
      }
      if (rangeChanged === true) {
        updateVirtualScrollSizes(from);
      }
      const sizeAfter = virtualScrollSizes.slice(from, toIndex).reduce(sumFn, 0), posStart = sizeAfter + scrollDetails.offsetStart + virtualScrollPaddingBefore.value, posEnd = posStart + virtualScrollSizes[toIndex];
      let scrollPosition = posStart + offset;
      if (alignEnd !== void 0) {
        const sizeDiff = sizeAfter - sizeBefore;
        const scrollStart = scrollDetails.scrollStart + sizeDiff;
        scrollPosition = alignForce !== true && scrollStart < posStart && posEnd < scrollStart + scrollDetails.scrollViewSize ? scrollStart : alignEnd === "end" ? posEnd - scrollDetails.scrollViewSize : posStart - (alignEnd === "start" ? 0 : Math.round((scrollDetails.scrollViewSize - virtualScrollSizes[toIndex]) / 2));
      }
      prevScrollStart = scrollPosition;
      setScroll(
        scrollEl,
        scrollPosition,
        props.virtualScrollHorizontal,
        $q.lang.rtl
      );
      emitScroll(toIndex);
    });
  }
  function updateVirtualScrollSizes(from) {
    const contentEl = contentRef.value;
    if (contentEl) {
      const children = filterProto.call(
        contentEl.children,
        (el) => el.classList && el.classList.contains("q-virtual-scroll--skip") === false
      ), childrenLength = children.length, sizeFn = props.virtualScrollHorizontal === true ? (el) => el.getBoundingClientRect().width : (el) => el.offsetHeight;
      let index = from, size, diff;
      for (let i = 0; i < childrenLength; ) {
        size = sizeFn(children[i]);
        i++;
        while (i < childrenLength && children[i].classList.contains("q-virtual-scroll--with-prev") === true) {
          size += sizeFn(children[i]);
          i++;
        }
        diff = size - virtualScrollSizes[index];
        if (diff !== 0) {
          virtualScrollSizes[index] += diff;
          virtualScrollSizesAgg[Math.floor(index / aggBucketSize)] += diff;
        }
        index++;
      }
    }
  }
  function onBlurRefocusFn() {
    contentRef.value !== null && contentRef.value !== void 0 && contentRef.value.focus();
  }
  function localResetVirtualScroll(toIndex, fullReset) {
    const defaultSize = 1 * virtualScrollItemSizeComputed.value;
    if (fullReset === true || Array.isArray(virtualScrollSizes) === false) {
      virtualScrollSizes = [];
    }
    const oldVirtualScrollSizesLength = virtualScrollSizes.length;
    virtualScrollSizes.length = virtualScrollLength.value;
    for (let i = virtualScrollLength.value - 1; i >= oldVirtualScrollSizesLength; i--) {
      virtualScrollSizes[i] = defaultSize;
    }
    const jMax = Math.floor((virtualScrollLength.value - 1) / aggBucketSize);
    virtualScrollSizesAgg = [];
    for (let j = 0; j <= jMax; j++) {
      let size = 0;
      const iMax = Math.min((j + 1) * aggBucketSize, virtualScrollLength.value);
      for (let i = j * aggBucketSize; i < iMax; i++) {
        size += virtualScrollSizes[i];
      }
      virtualScrollSizesAgg.push(size);
    }
    prevToIndex = -1;
    prevScrollStart = void 0;
    virtualScrollPaddingBefore.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, 0, virtualScrollSliceRange.value.from);
    virtualScrollPaddingAfter.value = sumSize(virtualScrollSizesAgg, virtualScrollSizes, virtualScrollSliceRange.value.to, virtualScrollLength.value);
    if (toIndex >= 0) {
      updateVirtualScrollSizes(virtualScrollSliceRange.value.from);
      nextTick(() => {
        scrollTo(toIndex);
      });
    } else {
      onVirtualScrollEvt();
    }
  }
  function setVirtualScrollSize(scrollViewSize) {
    if (scrollViewSize === void 0 && typeof window !== "undefined") {
      const scrollEl = getVirtualScrollTarget();
      if (scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
        scrollViewSize = getScrollDetails(
          scrollEl,
          getVirtualScrollEl(),
          beforeRef.value,
          afterRef.value,
          props.virtualScrollHorizontal,
          $q.lang.rtl,
          props.virtualScrollStickySizeStart,
          props.virtualScrollStickySizeEnd
        ).scrollViewSize;
      }
    }
    localScrollViewSize = scrollViewSize;
    const virtualScrollSliceRatioBefore = parseFloat(props.virtualScrollSliceRatioBefore) || 0;
    const virtualScrollSliceRatioAfter = parseFloat(props.virtualScrollSliceRatioAfter) || 0;
    const multiplier = 1 + virtualScrollSliceRatioBefore + virtualScrollSliceRatioAfter;
    const view = scrollViewSize === void 0 || scrollViewSize <= 0 ? 1 : Math.ceil(scrollViewSize / virtualScrollItemSizeComputed.value);
    const baseSize = Math.max(
      1,
      view,
      Math.ceil((props.virtualScrollSliceSize > 0 ? props.virtualScrollSliceSize : 10) / multiplier)
    );
    virtualScrollSliceSizeComputed.value = {
      total: Math.ceil(baseSize * multiplier),
      start: Math.ceil(baseSize * virtualScrollSliceRatioBefore),
      center: Math.ceil(baseSize * (0.5 + virtualScrollSliceRatioBefore)),
      end: Math.ceil(baseSize * (1 + virtualScrollSliceRatioBefore)),
      view
    };
  }
  function padVirtualScroll(tag, content) {
    const paddingSize = props.virtualScrollHorizontal === true ? "width" : "height";
    const style = {
      ["--q-virtual-scroll-item-" + paddingSize]: virtualScrollItemSizeComputed.value + "px"
    };
    return [
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "before",
        ref: beforeRef,
        style: { [paddingSize]: `${virtualScrollPaddingBefore.value}px`, ...style }
      }),
      h(tag, {
        class: "q-virtual-scroll__content",
        key: "content",
        ref: contentRef,
        tabindex: -1
      }, content.flat()),
      tag === "tbody" ? h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef
      }, [
        h("tr", [
          h("td", {
            style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style },
            colspan: colspanAttr.value
          })
        ])
      ]) : h(tag, {
        class: "q-virtual-scroll__padding",
        key: "after",
        ref: afterRef,
        style: { [paddingSize]: `${virtualScrollPaddingAfter.value}px`, ...style }
      })
    ];
  }
  function emitScroll(index) {
    if (prevToIndex !== index) {
      props.onVirtualScroll !== void 0 && emit("virtual-scroll", {
        index,
        from: virtualScrollSliceRange.value.from,
        to: virtualScrollSliceRange.value.to - 1,
        direction: index < prevToIndex ? "decrease" : "increase",
        ref: proxy
      });
      prevToIndex = index;
    }
  }
  setVirtualScrollSize();
  const onVirtualScrollEvt = debounce(
    localOnVirtualScrollEvt,
    $q.platform.is.ios === true ? 120 : 35
  );
  onBeforeMount(() => {
    setVirtualScrollSize();
  });
  let shouldActivate = false;
  onDeactivated(() => {
    shouldActivate = true;
  });
  onActivated(() => {
    if (shouldActivate !== true) {
      return;
    }
    const scrollEl = getVirtualScrollTarget();
    if (prevScrollStart !== void 0 && scrollEl !== void 0 && scrollEl !== null && scrollEl.nodeType !== 8) {
      setScroll(
        scrollEl,
        prevScrollStart,
        props.virtualScrollHorizontal,
        $q.lang.rtl
      );
    } else {
      scrollTo(prevToIndex);
    }
  });
  onBeforeUnmount(() => {
    onVirtualScrollEvt.cancel();
  });
  Object.assign(proxy, { scrollTo, reset, refresh });
  return {
    virtualScrollSliceRange,
    virtualScrollSliceSizeComputed,
    setVirtualScrollSize,
    onVirtualScrollEvt,
    localResetVirtualScroll,
    padVirtualScroll,
    scrollTo,
    reset,
    refresh
  };
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
var QField = createComponent({
  name: "QField",
  inheritAttrs: false,
  props: useFieldProps,
  emits: useFieldEmits,
  setup() {
    return useField(useFieldState());
  }
});
const defaultSizes$1 = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 24
};
var QChip = createComponent({
  name: "QChip",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    dense: Boolean,
    icon: String,
    iconRight: String,
    iconRemove: String,
    iconSelected: String,
    label: [String, Number],
    color: String,
    textColor: String,
    modelValue: {
      type: Boolean,
      default: true
    },
    selected: {
      type: Boolean,
      default: null
    },
    square: Boolean,
    outline: Boolean,
    clickable: Boolean,
    removable: Boolean,
    tabindex: [String, Number],
    disable: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: true
    }
  },
  emits: ["update:modelValue", "update:selected", "remove", "click"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const sizeStyle = useSize(props, defaultSizes$1);
    const hasLeftIcon = computed(() => props.selected === true || props.icon !== void 0);
    const leftIcon = computed(() => props.selected === true ? props.iconSelected || $q.iconSet.chip.selected : props.icon);
    const removeIcon = computed(() => props.iconRemove || $q.iconSet.chip.remove);
    const isClickable = computed(
      () => props.disable === false && (props.clickable === true || props.selected !== null)
    );
    const classes = computed(() => {
      const text = props.outline === true ? props.color || props.textColor : props.textColor;
      return "q-chip row inline no-wrap items-center" + (props.outline === false && props.color !== void 0 ? ` bg-${props.color}` : "") + (text ? ` text-${text} q-chip--colored` : "") + (props.disable === true ? " disabled" : "") + (props.dense === true ? " q-chip--dense" : "") + (props.outline === true ? " q-chip--outline" : "") + (props.selected === true ? " q-chip--selected" : "") + (isClickable.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (props.square === true ? " q-chip--square" : "") + (isDark.value === true ? " q-chip--dark q-dark" : "");
    });
    const attributes = computed(() => props.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: props.tabindex || 0 });
    function onKeyup(e) {
      e.keyCode === 13 && onClick(e);
    }
    function onClick(e) {
      if (!props.disable) {
        emit("update:selected", !props.selected);
        emit("click", e);
      }
    }
    function onRemove(e) {
      if (e.keyCode === void 0 || e.keyCode === 13) {
        stopAndPrevent(e);
        if (props.disable === false) {
          emit("update:modelValue", false);
          emit("remove");
        }
      }
    }
    function getContent() {
      const child = [];
      isClickable.value === true && child.push(
        h("div", { class: "q-focus-helper" })
      );
      hasLeftIcon.value === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--left",
          name: leftIcon.value
        })
      );
      const label = props.label !== void 0 ? [h("div", { class: "ellipsis" }, [props.label])] : void 0;
      child.push(
        h("div", {
          class: "q-chip__content col row no-wrap items-center q-anchor--skip"
        }, hMergeSlotSafely(slots.default, label))
      );
      props.iconRight && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--right",
          name: props.iconRight
        })
      );
      props.removable === true && child.push(
        h(QIcon, {
          class: "q-chip__icon q-chip__icon--remove cursor-pointer",
          name: removeIcon.value,
          ...attributes.value,
          onClick: onRemove,
          onKeyup: onRemove
        })
      );
      return child;
    }
    return () => {
      if (props.modelValue === false) {
        return;
      }
      const data = {
        class: classes.value,
        style: sizeStyle.value
      };
      isClickable.value === true && Object.assign(
        data,
        attributes.value,
        { onClick, onKeyup }
      );
      return hDir(
        "div",
        data,
        getContent(),
        "ripple",
        props.ripple !== false && props.disable !== true,
        () => [[Ripple, props.ripple]]
      );
    };
  }
});
const validateNewValueMode = (v) => ["add", "add-unique", "toggle"].includes(v);
const reEscapeList = ".*+?^${}()|[]\\";
const fieldPropsList = Object.keys(useFieldProps);
var QSelect = createComponent({
  name: "QSelect",
  inheritAttrs: false,
  props: {
    ...useVirtualScrollProps,
    ...useFormProps,
    ...useFieldProps,
    modelValue: {
      required: true
    },
    multiple: Boolean,
    displayValue: [String, Number],
    displayValueHtml: Boolean,
    dropdownIcon: String,
    options: {
      type: Array,
      default: () => []
    },
    optionValue: [Function, String],
    optionLabel: [Function, String],
    optionDisable: [Function, String],
    hideSelected: Boolean,
    hideDropdownIcon: Boolean,
    fillInput: Boolean,
    maxValues: [Number, String],
    optionsDense: Boolean,
    optionsDark: {
      type: Boolean,
      default: null
    },
    optionsSelectedClass: String,
    optionsHtml: Boolean,
    optionsCover: Boolean,
    menuShrink: Boolean,
    menuAnchor: String,
    menuSelf: String,
    menuOffset: Array,
    popupContentClass: String,
    popupContentStyle: [String, Array, Object],
    useInput: Boolean,
    useChips: Boolean,
    newValueMode: {
      type: String,
      validator: validateNewValueMode
    },
    mapOptions: Boolean,
    emitValue: Boolean,
    inputDebounce: {
      type: [Number, String],
      default: 500
    },
    inputClass: [Array, String, Object],
    inputStyle: [Array, String, Object],
    tabindex: {
      type: [String, Number],
      default: 0
    },
    autocomplete: String,
    transitionShow: String,
    transitionHide: String,
    transitionDuration: [String, Number],
    behavior: {
      type: String,
      validator: (v) => ["default", "menu", "dialog"].includes(v),
      default: "default"
    },
    virtualScrollItemSize: {
      type: [Number, String],
      default: void 0
    },
    onNewValue: Function,
    onFilter: Function
  },
  emits: [
    ...useFieldEmits,
    "add",
    "remove",
    "input-value",
    "new-value",
    "keyup",
    "keypress",
    "keydown",
    "filter-abort"
  ],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const menu = ref(false);
    const dialog = ref(false);
    const optionIndex = ref(-1);
    const inputValue = ref("");
    const dialogFieldFocused = ref(false);
    const innerLoadingIndicator = ref(false);
    let inputTimer, innerValueCache, hasDialog, userInputValue, filterId, defaultInputValue, transitionShowComputed, searchBuffer, searchBufferExp;
    const inputRef = ref(null);
    const targetRef = ref(null);
    const menuRef = ref(null);
    const dialogRef = ref(null);
    const menuContentRef = ref(null);
    const nameProp = useFormInputNameAttr(props);
    const onComposition = useKeyComposition(onInput);
    const virtualScrollLength = computed(() => Array.isArray(props.options) ? props.options.length : 0);
    const virtualScrollItemSizeComputed = computed(() => props.virtualScrollItemSize === void 0 ? props.optionsDense === true ? 24 : 48 : props.virtualScrollItemSize);
    const {
      virtualScrollSliceRange,
      virtualScrollSliceSizeComputed,
      localResetVirtualScroll,
      padVirtualScroll,
      onVirtualScrollEvt,
      scrollTo,
      setVirtualScrollSize
    } = useVirtualScroll({
      virtualScrollLength,
      getVirtualScrollTarget,
      getVirtualScrollEl,
      virtualScrollItemSizeComputed
    });
    const state = useFieldState();
    const innerValue = computed(() => {
      const mapNull = props.mapOptions === true && props.multiple !== true, val = props.modelValue !== void 0 && (props.modelValue !== null || mapNull === true) ? props.multiple === true && Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue] : [];
      if (props.mapOptions === true && Array.isArray(props.options) === true) {
        const cache = props.mapOptions === true && innerValueCache !== void 0 ? innerValueCache : [];
        const values = val.map((v) => getOption(v, cache));
        return props.modelValue === null && mapNull === true ? values.filter((v) => v !== null) : values;
      }
      return val;
    });
    const innerFieldProps = computed(() => {
      const acc = {};
      fieldPropsList.forEach((key) => {
        const val = props[key];
        if (val !== void 0) {
          acc[key] = val;
        }
      });
      return acc;
    });
    const isOptionsDark = computed(() => props.optionsDark === null ? state.isDark.value : props.optionsDark);
    const hasValue = computed(() => fieldValueIsFilled(innerValue.value));
    const computedInputClass = computed(() => {
      let cls = "q-field__input q-placeholder col";
      if (props.hideSelected === true || innerValue.value.length === 0) {
        return [cls, props.inputClass];
      }
      cls += " q-field__input--padding";
      return props.inputClass === void 0 ? cls : [cls, props.inputClass];
    });
    const menuContentClass = computed(
      () => (props.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (props.popupContentClass ? " " + props.popupContentClass : "")
    );
    const noOptions = computed(() => virtualScrollLength.value === 0);
    const selectedString = computed(
      () => innerValue.value.map((opt) => getOptionLabel.value(opt)).join(", ")
    );
    const needsHtmlFn = computed(() => props.optionsHtml === true ? () => true : (opt) => opt !== void 0 && opt !== null && opt.html === true);
    const valueAsHtml = computed(() => props.displayValueHtml === true || props.displayValue === void 0 && (props.optionsHtml === true || innerValue.value.some(needsHtmlFn.value)));
    const tabindex = computed(() => state.focused.value === true ? props.tabindex : -1);
    const comboboxAttrs = computed(() => {
      const attrs = {
        tabindex: props.tabindex,
        role: "combobox",
        "aria-label": props.label,
        "aria-autocomplete": props.useInput === true ? "list" : "none",
        "aria-expanded": menu.value === true ? "true" : "false",
        "aria-owns": `${state.targetUid.value}_lb`,
        "aria-controls": `${state.targetUid.value}_lb`
      };
      if (optionIndex.value >= 0) {
        attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
      }
      return attrs;
    });
    const listboxAttrs = computed(() => {
      const attrs = {
        id: `${state.targetUid.value}_lb`,
        role: "listbox",
        "aria-multiselectable": props.multiple === true ? "true" : "false"
      };
      if (optionIndex.value >= 0) {
        attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
      }
      return attrs;
    });
    const selectedScope = computed(() => {
      return innerValue.value.map((opt, i) => ({
        index: i,
        opt,
        html: needsHtmlFn.value(opt),
        selected: true,
        removeAtIndex: removeAtIndexAndFocus,
        toggleOption,
        tabindex: tabindex.value
      }));
    });
    const optionScope = computed(() => {
      if (virtualScrollLength.value === 0) {
        return [];
      }
      const { from, to } = virtualScrollSliceRange.value;
      return props.options.slice(from, to).map((opt, i) => {
        const disable = isOptionDisabled.value(opt) === true;
        const index = from + i;
        const itemProps = {
          clickable: true,
          active: false,
          activeClass: computedOptionsSelectedClass.value,
          manualFocus: true,
          focused: false,
          disable,
          tabindex: -1,
          dense: props.optionsDense,
          dark: isOptionsDark.value,
          role: "option",
          id: `${state.targetUid.value}_${index}`,
          onClick: () => {
            toggleOption(opt);
          }
        };
        if (disable !== true) {
          isOptionSelected(opt) === true && (itemProps.active = true);
          optionIndex.value === index && (itemProps.focused = true);
          itemProps["aria-selected"] = itemProps.active === true ? "true" : "false";
          if ($q.platform.is.desktop === true) {
            itemProps.onMousemove = () => {
              menu.value === true && setOptionIndex(index);
            };
          }
        }
        return {
          index,
          opt,
          html: needsHtmlFn.value(opt),
          label: getOptionLabel.value(opt),
          selected: itemProps.active,
          focused: itemProps.focused,
          toggleOption,
          setOptionIndex,
          itemProps
        };
      });
    });
    const dropdownArrowIcon = computed(() => props.dropdownIcon !== void 0 ? props.dropdownIcon : $q.iconSet.arrow.dropdown);
    const squaredMenu = computed(
      () => props.optionsCover === false && props.outlined !== true && props.standout !== true && props.borderless !== true && props.rounded !== true
    );
    const computedOptionsSelectedClass = computed(() => props.optionsSelectedClass !== void 0 ? props.optionsSelectedClass : props.color !== void 0 ? `text-${props.color}` : "");
    const getOptionValue = computed(() => getPropValueFn(props.optionValue, "value"));
    const getOptionLabel = computed(() => getPropValueFn(props.optionLabel, "label"));
    const isOptionDisabled = computed(() => getPropValueFn(props.optionDisable, "disable"));
    const innerOptionsValue = computed(() => innerValue.value.map((opt) => getOptionValue.value(opt)));
    const inputControlEvents = computed(() => {
      const evt = {
        onInput,
        onChange: onComposition,
        onKeydown: onTargetKeydown,
        onKeyup: onTargetAutocomplete,
        onKeypress: onTargetKeypress,
        onFocus: selectInputText,
        onClick(e) {
          hasDialog === true && stop(e);
        }
      };
      evt.onCompositionstart = evt.onCompositionupdate = evt.onCompositionend = onComposition;
      return evt;
    });
    watch(innerValue, (val) => {
      innerValueCache = val;
      if (props.useInput === true && props.fillInput === true && props.multiple !== true && state.innerLoading.value !== true && (dialog.value !== true && menu.value !== true || hasValue.value !== true)) {
        userInputValue !== true && resetInputValue();
        if (dialog.value === true || menu.value === true) {
          filter("");
        }
      }
    }, { immediate: true });
    watch(() => props.fillInput, resetInputValue);
    watch(menu, updateMenu);
    watch(virtualScrollLength, rerenderMenu);
    function getEmittingOptionValue(opt) {
      return props.emitValue === true ? getOptionValue.value(opt) : opt;
    }
    function removeAtIndex(index) {
      if (index > -1 && index < innerValue.value.length) {
        if (props.multiple === true) {
          const model = props.modelValue.slice();
          emit("remove", { index, value: model.splice(index, 1)[0] });
          emit("update:modelValue", model);
        } else {
          emit("update:modelValue", null);
        }
      }
    }
    function removeAtIndexAndFocus(index) {
      removeAtIndex(index);
      state.focus();
    }
    function add(opt, unique) {
      const val = getEmittingOptionValue(opt);
      if (props.multiple !== true) {
        props.fillInput === true && updateInputValue(
          getOptionLabel.value(opt),
          true,
          true
        );
        emit("update:modelValue", val);
        return;
      }
      if (innerValue.value.length === 0) {
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props.multiple === true ? [val] : val);
        return;
      }
      if (unique === true && isOptionSelected(opt) === true) {
        return;
      }
      if (props.maxValues !== void 0 && props.modelValue.length >= props.maxValues) {
        return;
      }
      const model = props.modelValue.slice();
      emit("add", { index: model.length, value: val });
      model.push(val);
      emit("update:modelValue", model);
    }
    function toggleOption(opt, keepOpen) {
      if (state.editable.value !== true || opt === void 0 || isOptionDisabled.value(opt) === true) {
        return;
      }
      const optValue = getOptionValue.value(opt);
      if (props.multiple !== true) {
        if (keepOpen !== true) {
          updateInputValue(
            props.fillInput === true ? getOptionLabel.value(opt) : "",
            true,
            true
          );
          hidePopup();
        }
        targetRef.value !== null && targetRef.value.focus();
        if (innerValue.value.length === 0 || isDeepEqual(getOptionValue.value(innerValue.value[0]), optValue) !== true) {
          emit("update:modelValue", props.emitValue === true ? optValue : opt);
        }
        return;
      }
      (hasDialog !== true || dialogFieldFocused.value === true) && state.focus();
      selectInputText();
      if (innerValue.value.length === 0) {
        const val = props.emitValue === true ? optValue : opt;
        emit("add", { index: 0, value: val });
        emit("update:modelValue", props.multiple === true ? [val] : val);
        return;
      }
      const model = props.modelValue.slice(), index = innerOptionsValue.value.findIndex((v) => isDeepEqual(v, optValue));
      if (index > -1) {
        emit("remove", { index, value: model.splice(index, 1)[0] });
      } else {
        if (props.maxValues !== void 0 && model.length >= props.maxValues) {
          return;
        }
        const val = props.emitValue === true ? optValue : opt;
        emit("add", { index: model.length, value: val });
        model.push(val);
      }
      emit("update:modelValue", model);
    }
    function setOptionIndex(index) {
      if ($q.platform.is.desktop !== true) {
        return;
      }
      const val = index > -1 && index < virtualScrollLength.value ? index : -1;
      if (optionIndex.value !== val) {
        optionIndex.value = val;
      }
    }
    function moveOptionSelection(offset = 1, skipInputValue) {
      if (menu.value === true) {
        let index = optionIndex.value;
        do {
          index = normalizeToInterval(
            index + offset,
            -1,
            virtualScrollLength.value - 1
          );
        } while (index !== -1 && index !== optionIndex.value && isOptionDisabled.value(props.options[index]) === true);
        if (optionIndex.value !== index) {
          setOptionIndex(index);
          scrollTo(index);
          if (skipInputValue !== true && props.useInput === true && props.fillInput === true) {
            setInputValue(
              index >= 0 ? getOptionLabel.value(props.options[index]) : defaultInputValue
            );
          }
        }
      }
    }
    function getOption(value, valueCache) {
      const fn = (opt) => isDeepEqual(getOptionValue.value(opt), value);
      return props.options.find(fn) || valueCache.find(fn) || value;
    }
    function getPropValueFn(propValue, defaultVal) {
      const val = propValue !== void 0 ? propValue : defaultVal;
      return typeof val === "function" ? val : (opt) => opt !== null && typeof opt === "object" && val in opt ? opt[val] : opt;
    }
    function isOptionSelected(opt) {
      const val = getOptionValue.value(opt);
      return innerOptionsValue.value.find((v) => isDeepEqual(v, val)) !== void 0;
    }
    function selectInputText(e) {
      if (props.useInput === true && targetRef.value !== null && (e === void 0 || targetRef.value === e.target && e.target.value === selectedString.value)) {
        targetRef.value.select();
      }
    }
    function onTargetKeyup(e) {
      if (isKeyCode(e, 27) === true && menu.value === true) {
        stop(e);
        hidePopup();
        resetInputValue();
      }
      emit("keyup", e);
    }
    function onTargetAutocomplete(e) {
      const { value } = e.target;
      if (e.keyCode !== void 0) {
        onTargetKeyup(e);
        return;
      }
      e.target.value = "";
      clearTimeout(inputTimer);
      resetInputValue();
      if (typeof value === "string" && value.length > 0) {
        const needle = value.toLocaleLowerCase();
        const findFn = (extractFn) => {
          const option = props.options.find((opt) => extractFn.value(opt).toLocaleLowerCase() === needle);
          if (option === void 0) {
            return false;
          }
          if (innerValue.value.indexOf(option) === -1) {
            toggleOption(option);
          } else {
            hidePopup();
          }
          return true;
        };
        const fillFn = (afterFilter) => {
          if (findFn(getOptionValue) === true) {
            return;
          }
          if (findFn(getOptionLabel) === true || afterFilter === true) {
            return;
          }
          filter(value, true, () => fillFn(true));
        };
        fillFn();
      } else {
        state.clearValue(e);
      }
    }
    function onTargetKeypress(e) {
      emit("keypress", e);
    }
    function onTargetKeydown(e) {
      emit("keydown", e);
      if (shouldIgnoreKey(e) === true) {
        return;
      }
      const newValueModeValid = inputValue.value.length > 0 && (props.newValueMode !== void 0 || props.onNewValue !== void 0);
      const tabShouldSelect = e.shiftKey !== true && props.multiple !== true && (optionIndex.value > -1 || newValueModeValid === true);
      if (e.keyCode === 27) {
        prevent(e);
        return;
      }
      if (e.keyCode === 9 && tabShouldSelect === false) {
        closeMenu();
        return;
      }
      if (e.target === void 0 || e.target.id !== state.targetUid.value) {
        return;
      }
      if (e.keyCode === 40 && state.innerLoading.value !== true && menu.value === false) {
        stopAndPrevent(e);
        showPopup();
        return;
      }
      if (e.keyCode === 8 && props.hideSelected !== true && inputValue.value.length === 0) {
        if (props.multiple === true && Array.isArray(props.modelValue) === true) {
          removeAtIndex(props.modelValue.length - 1);
        } else if (props.multiple !== true && props.modelValue !== null) {
          emit("update:modelValue", null);
        }
        return;
      }
      if ((e.keyCode === 35 || e.keyCode === 36) && (typeof inputValue.value !== "string" || inputValue.value.length === 0)) {
        stopAndPrevent(e);
        optionIndex.value = -1;
        moveOptionSelection(e.keyCode === 36 ? 1 : -1, props.multiple);
      }
      if ((e.keyCode === 33 || e.keyCode === 34) && virtualScrollSliceSizeComputed.value !== void 0) {
        stopAndPrevent(e);
        optionIndex.value = Math.max(
          -1,
          Math.min(
            virtualScrollLength.value,
            optionIndex.value + (e.keyCode === 33 ? -1 : 1) * virtualScrollSliceSizeComputed.value.view
          )
        );
        moveOptionSelection(e.keyCode === 33 ? 1 : -1, props.multiple);
      }
      if (e.keyCode === 38 || e.keyCode === 40) {
        stopAndPrevent(e);
        moveOptionSelection(e.keyCode === 38 ? -1 : 1, props.multiple);
      }
      const optionsLength = virtualScrollLength.value;
      if (searchBuffer === void 0 || searchBufferExp < Date.now()) {
        searchBuffer = "";
      }
      if (optionsLength > 0 && props.useInput !== true && e.key !== void 0 && e.key.length === 1 && e.altKey === e.ctrlKey && (e.keyCode !== 32 || searchBuffer.length > 0)) {
        menu.value !== true && showPopup(e);
        const char = e.key.toLocaleLowerCase(), keyRepeat = searchBuffer.length === 1 && searchBuffer[0] === char;
        searchBufferExp = Date.now() + 1500;
        if (keyRepeat === false) {
          stopAndPrevent(e);
          searchBuffer += char;
        }
        const searchRe = new RegExp("^" + searchBuffer.split("").map((l) => reEscapeList.indexOf(l) > -1 ? "\\" + l : l).join(".*"), "i");
        let index = optionIndex.value;
        if (keyRepeat === true || index < 0 || searchRe.test(getOptionLabel.value(props.options[index])) !== true) {
          do {
            index = normalizeToInterval(index + 1, -1, optionsLength - 1);
          } while (index !== optionIndex.value && (isOptionDisabled.value(props.options[index]) === true || searchRe.test(getOptionLabel.value(props.options[index])) !== true));
        }
        if (optionIndex.value !== index) {
          nextTick(() => {
            setOptionIndex(index);
            scrollTo(index);
            if (index >= 0 && props.useInput === true && props.fillInput === true) {
              setInputValue(getOptionLabel.value(props.options[index]));
            }
          });
        }
        return;
      }
      if (e.keyCode !== 13 && (e.keyCode !== 32 || props.useInput === true || searchBuffer !== "") && (e.keyCode !== 9 || tabShouldSelect === false)) {
        return;
      }
      e.keyCode !== 9 && stopAndPrevent(e);
      if (optionIndex.value > -1 && optionIndex.value < optionsLength) {
        toggleOption(props.options[optionIndex.value]);
        return;
      }
      if (newValueModeValid === true) {
        const done = (val, mode) => {
          if (mode) {
            if (validateNewValueMode(mode) !== true) {
              return;
            }
          } else {
            mode = props.newValueMode;
          }
          if (val === void 0 || val === null) {
            return;
          }
          updateInputValue("", props.multiple !== true, true);
          const fn = mode === "toggle" ? toggleOption : add;
          fn(val, mode === "add-unique");
          if (props.multiple !== true) {
            targetRef.value !== null && targetRef.value.focus();
            hidePopup();
          }
        };
        if (props.onNewValue !== void 0) {
          emit("new-value", inputValue.value, done);
        } else {
          done(inputValue.value);
        }
        if (props.multiple !== true) {
          return;
        }
      }
      if (menu.value === true) {
        closeMenu();
      } else if (state.innerLoading.value !== true) {
        showPopup();
      }
    }
    function getVirtualScrollEl() {
      return hasDialog === true ? menuContentRef.value : menuRef.value !== null && menuRef.value.__qPortalInnerRef.value !== null ? menuRef.value.__qPortalInnerRef.value : void 0;
    }
    function getVirtualScrollTarget() {
      return getVirtualScrollEl();
    }
    function getSelection() {
      if (props.hideSelected === true) {
        return [];
      }
      if (slots["selected-item"] !== void 0) {
        return selectedScope.value.map((scope) => slots["selected-item"](scope)).slice();
      }
      if (slots.selected !== void 0) {
        return [].concat(slots.selected());
      }
      if (props.useChips === true) {
        return selectedScope.value.map((scope, i) => h(QChip, {
          key: "option-" + i,
          removable: state.editable.value === true && isOptionDisabled.value(scope.opt) !== true,
          dense: true,
          textColor: props.color,
          tabindex: tabindex.value,
          onRemove() {
            scope.removeAtIndex(i);
          }
        }, () => h("span", {
          class: "ellipsis",
          [scope.html === true ? "innerHTML" : "textContent"]: getOptionLabel.value(scope.opt)
        })));
      }
      return [
        h("span", {
          [valueAsHtml.value === true ? "innerHTML" : "textContent"]: props.displayValue !== void 0 ? props.displayValue : selectedString.value
        })
      ];
    }
    function getAllOptions() {
      if (noOptions.value === true) {
        return slots["no-option"] !== void 0 ? slots["no-option"]({ inputValue: inputValue.value }) : void 0;
      }
      const fn = slots.option !== void 0 ? slots.option : (scope) => {
        return h(QItem, {
          key: scope.index,
          ...scope.itemProps
        }, () => {
          return h(
            QItemSection,
            () => h(
              QItemLabel,
              () => h("span", {
                [scope.html === true ? "innerHTML" : "textContent"]: scope.label
              })
            )
          );
        });
      };
      let options = padVirtualScroll("div", optionScope.value.map(fn));
      if (slots["before-options"] !== void 0) {
        options = slots["before-options"]().concat(options);
      }
      return hMergeSlot(slots["after-options"], options);
    }
    function getInput(fromDialog, isTarget) {
      const attrs = isTarget === true ? { ...comboboxAttrs.value, ...state.splitAttrs.attributes.value } : void 0;
      const data = {
        ref: isTarget === true ? targetRef : void 0,
        key: "i_t",
        class: computedInputClass.value,
        style: props.inputStyle,
        value: inputValue.value !== void 0 ? inputValue.value : "",
        type: "search",
        ...attrs,
        id: isTarget === true ? state.targetUid.value : void 0,
        maxlength: props.maxlength,
        autocomplete: props.autocomplete,
        "data-autofocus": fromDialog !== true && props.autofocus === true || void 0,
        disabled: props.disable === true,
        readonly: props.readonly === true,
        ...inputControlEvents.value
      };
      if (fromDialog !== true && hasDialog === true) {
        if (Array.isArray(data.class) === true) {
          data.class = [...data.class, "no-pointer-events"];
        } else {
          data.class += " no-pointer-events";
        }
      }
      return h("input", data);
    }
    function onInput(e) {
      clearTimeout(inputTimer);
      if (e && e.target && e.target.qComposing === true) {
        return;
      }
      setInputValue(e.target.value || "");
      userInputValue = true;
      defaultInputValue = inputValue.value;
      if (state.focused.value !== true && (hasDialog !== true || dialogFieldFocused.value === true)) {
        state.focus();
      }
      if (props.onFilter !== void 0) {
        inputTimer = setTimeout(() => {
          filter(inputValue.value);
        }, props.inputDebounce);
      }
    }
    function setInputValue(val) {
      if (inputValue.value !== val) {
        inputValue.value = val;
        emit("input-value", val);
      }
    }
    function updateInputValue(val, noFiltering, internal) {
      userInputValue = internal !== true;
      if (props.useInput === true) {
        setInputValue(val);
        if (noFiltering === true || internal !== true) {
          defaultInputValue = val;
        }
        noFiltering !== true && filter(val);
      }
    }
    function filter(val, keepClosed, afterUpdateFn) {
      if (props.onFilter === void 0 || keepClosed !== true && state.focused.value !== true) {
        return;
      }
      if (state.innerLoading.value === true) {
        emit("filter-abort");
      } else {
        state.innerLoading.value = true;
        innerLoadingIndicator.value = true;
      }
      if (val !== "" && props.multiple !== true && innerValue.value.length > 0 && userInputValue !== true && val === getOptionLabel.value(innerValue.value[0])) {
        val = "";
      }
      const localFilterId = setTimeout(() => {
        menu.value === true && (menu.value = false);
      }, 10);
      clearTimeout(filterId);
      filterId = localFilterId;
      emit(
        "filter",
        val,
        (fn, afterFn) => {
          if ((keepClosed === true || state.focused.value === true) && filterId === localFilterId) {
            clearTimeout(filterId);
            typeof fn === "function" && fn();
            innerLoadingIndicator.value = false;
            nextTick(() => {
              state.innerLoading.value = false;
              if (state.editable.value === true) {
                if (keepClosed === true) {
                  menu.value === true && hidePopup();
                } else if (menu.value === true) {
                  updateMenu(true);
                } else {
                  menu.value = true;
                }
              }
              typeof afterFn === "function" && nextTick(() => {
                afterFn(proxy);
              });
              typeof afterUpdateFn === "function" && nextTick(() => {
                afterUpdateFn(proxy);
              });
            });
          }
        },
        () => {
          if (state.focused.value === true && filterId === localFilterId) {
            clearTimeout(filterId);
            state.innerLoading.value = false;
            innerLoadingIndicator.value = false;
          }
          menu.value === true && (menu.value = false);
        }
      );
    }
    function getMenu() {
      return h(QMenu, {
        ref: menuRef,
        class: menuContentClass.value,
        style: props.popupContentStyle,
        modelValue: menu.value,
        fit: props.menuShrink !== true,
        cover: props.optionsCover === true && noOptions.value !== true && props.useInput !== true,
        anchor: props.menuAnchor,
        self: props.menuSelf,
        offset: props.menuOffset,
        dark: isOptionsDark.value,
        noParentEvent: true,
        noRefocus: true,
        noFocus: true,
        square: squaredMenu.value,
        transitionShow: props.transitionShow,
        transitionHide: props.transitionHide,
        transitionDuration: props.transitionDuration,
        separateClosePopup: true,
        ...listboxAttrs.value,
        onScrollPassive: onVirtualScrollEvt,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onMenuBeforeHide,
        onShow: onMenuShow
      }, getAllOptions);
    }
    function onMenuBeforeHide(e) {
      onControlPopupHide(e);
      closeMenu();
    }
    function onMenuShow() {
      setVirtualScrollSize();
    }
    function onDialogFieldFocus(e) {
      stop(e);
      targetRef.value !== null && targetRef.value.focus();
      dialogFieldFocused.value = true;
      window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
    }
    function onDialogFieldBlur(e) {
      stop(e);
      nextTick(() => {
        dialogFieldFocused.value = false;
      });
    }
    function getDialog() {
      const content = [
        h(QField, {
          class: `col-auto ${state.fieldClass.value}`,
          ...innerFieldProps.value,
          for: state.targetUid.value,
          dark: isOptionsDark.value,
          square: true,
          loading: innerLoadingIndicator.value,
          itemAligned: false,
          filled: true,
          stackLabel: inputValue.value.length > 0,
          ...state.splitAttrs.listeners.value,
          onFocus: onDialogFieldFocus,
          onBlur: onDialogFieldBlur
        }, {
          ...slots,
          rawControl: () => state.getControl(true),
          before: void 0,
          after: void 0
        })
      ];
      menu.value === true && content.push(
        h("div", {
          ref: menuContentRef,
          class: menuContentClass.value + " scroll",
          style: props.popupContentStyle,
          ...listboxAttrs.value,
          onClick: prevent,
          onScrollPassive: onVirtualScrollEvt
        }, getAllOptions())
      );
      return h(QDialog, {
        ref: dialogRef,
        modelValue: dialog.value,
        position: props.useInput === true ? "top" : void 0,
        transitionShow: transitionShowComputed,
        transitionHide: props.transitionHide,
        transitionDuration: props.transitionDuration,
        onBeforeShow: onControlPopupShow,
        onBeforeHide: onDialogBeforeHide,
        onHide: onDialogHide,
        onShow: onDialogShow
      }, () => h("div", {
        class: "q-select__dialog" + (isOptionsDark.value === true ? " q-select__dialog--dark q-dark" : "") + (dialogFieldFocused.value === true ? " q-select__dialog--focused" : "")
      }, content));
    }
    function onDialogBeforeHide(e) {
      onControlPopupHide(e);
      if (dialogRef.value !== null) {
        dialogRef.value.__updateRefocusTarget(
          state.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")
        );
      }
      state.focused.value = false;
    }
    function onDialogHide(e) {
      hidePopup();
      state.focused.value === false && emit("blur", e);
      resetInputValue();
    }
    function onDialogShow() {
      const el = document.activeElement;
      if ((el === null || el.id !== state.targetUid.value) && targetRef.value !== null && targetRef.value !== el) {
        targetRef.value.focus();
      }
      setVirtualScrollSize();
    }
    function closeMenu() {
      if (dialog.value === true) {
        return;
      }
      optionIndex.value = -1;
      if (menu.value === true) {
        menu.value = false;
      }
      if (state.focused.value === false) {
        clearTimeout(filterId);
        filterId = void 0;
        if (state.innerLoading.value === true) {
          emit("filter-abort");
          state.innerLoading.value = false;
          innerLoadingIndicator.value = false;
        }
      }
    }
    function showPopup(e) {
      if (state.editable.value !== true) {
        return;
      }
      if (hasDialog === true) {
        state.onControlFocusin(e);
        dialog.value = true;
        nextTick(() => {
          state.focus();
        });
      } else {
        state.focus();
      }
      if (props.onFilter !== void 0) {
        filter(inputValue.value);
      } else if (noOptions.value !== true || slots["no-option"] !== void 0) {
        menu.value = true;
      }
    }
    function hidePopup() {
      dialog.value = false;
      closeMenu();
    }
    function resetInputValue() {
      props.useInput === true && updateInputValue(
        props.multiple !== true && props.fillInput === true && innerValue.value.length > 0 ? getOptionLabel.value(innerValue.value[0]) || "" : "",
        true,
        true
      );
    }
    function updateMenu(show) {
      let optionIndex2 = -1;
      if (show === true) {
        if (innerValue.value.length > 0) {
          const val = getOptionValue.value(innerValue.value[0]);
          optionIndex2 = props.options.findIndex((v) => isDeepEqual(getOptionValue.value(v), val));
        }
        localResetVirtualScroll(optionIndex2);
      }
      setOptionIndex(optionIndex2);
    }
    function rerenderMenu(newLength, oldLength) {
      if (menu.value === true && state.innerLoading.value === false) {
        localResetVirtualScroll(-1, true);
        nextTick(() => {
          if (menu.value === true && state.innerLoading.value === false) {
            if (newLength > oldLength) {
              localResetVirtualScroll();
            } else {
              updateMenu(true);
            }
          }
        });
      }
    }
    function updateMenuPosition() {
      if (dialog.value === false && menuRef.value !== null) {
        menuRef.value.updatePosition();
      }
    }
    function onControlPopupShow(e) {
      e !== void 0 && stop(e);
      emit("popup-show", e);
      state.hasPopupOpen = true;
      state.onControlFocusin(e);
    }
    function onControlPopupHide(e) {
      e !== void 0 && stop(e);
      emit("popup-hide", e);
      state.hasPopupOpen = false;
      state.onControlFocusout(e);
    }
    function updatePreState() {
      hasDialog = $q.platform.is.mobile !== true && props.behavior !== "dialog" ? false : props.behavior !== "menu" && (props.useInput === true ? slots["no-option"] !== void 0 || props.onFilter !== void 0 || noOptions.value === false : true);
      transitionShowComputed = $q.platform.is.ios === true && hasDialog === true && props.useInput === true ? "fade" : props.transitionShow;
    }
    onBeforeUpdate(updatePreState);
    onUpdated(updateMenuPosition);
    updatePreState();
    onBeforeUnmount(() => {
      clearTimeout(inputTimer);
    });
    Object.assign(proxy, {
      showPopup,
      hidePopup,
      removeAtIndex,
      add,
      toggleOption,
      getOptionIndex: () => optionIndex.value,
      setOptionIndex,
      moveOptionSelection,
      filter,
      updateMenuPosition,
      updateInputValue,
      isOptionSelected,
      getEmittingOptionValue,
      isOptionDisabled: (...args) => isOptionDisabled.value.apply(null, args) === true,
      getOptionValue: (...args) => getOptionValue.value.apply(null, args),
      getOptionLabel: (...args) => getOptionLabel.value.apply(null, args)
    });
    Object.assign(state, {
      innerValue,
      fieldClass: computed(
        () => `q-select q-field--auto-height q-select--with${props.useInput !== true ? "out" : ""}-input q-select--with${props.useChips !== true ? "out" : ""}-chips q-select--${props.multiple === true ? "multiple" : "single"}`
      ),
      inputRef,
      targetRef,
      hasValue,
      showPopup,
      floatingLabel: computed(
        () => props.hideSelected !== true && hasValue.value === true || typeof inputValue.value === "number" || inputValue.value.length > 0 || fieldValueIsFilled(props.displayValue)
      ),
      getControlChild: () => {
        if (state.editable.value !== false && (dialog.value === true || noOptions.value !== true || slots["no-option"] !== void 0)) {
          return hasDialog === true ? getDialog() : getMenu();
        } else if (state.hasPopupOpen === true) {
          state.hasPopupOpen = false;
        }
      },
      controlEvents: {
        onFocusin(e) {
          state.onControlFocusin(e);
        },
        onFocusout(e) {
          state.onControlFocusout(e, () => {
            resetInputValue();
            closeMenu();
          });
        },
        onClick(e) {
          prevent(e);
          if (hasDialog !== true && menu.value === true) {
            closeMenu();
            targetRef.value !== null && targetRef.value.focus();
            return;
          }
          showPopup(e);
        }
      },
      getControl: (fromDialog) => {
        const child = getSelection();
        const isTarget = fromDialog === true || dialog.value !== true || hasDialog !== true;
        if (props.useInput === true) {
          child.push(getInput(fromDialog, isTarget));
        } else if (state.editable.value === true) {
          const attrs2 = isTarget === true ? comboboxAttrs.value : void 0;
          child.push(
            h("input", {
              ref: isTarget === true ? targetRef : void 0,
              key: "d_t",
              class: "q-select__focus-target",
              id: isTarget === true ? state.targetUid.value : void 0,
              readonly: true,
              "data-autofocus": fromDialog !== true && props.autofocus === true || void 0,
              ...attrs2,
              onKeydown: onTargetKeydown,
              onKeyup: onTargetKeyup,
              onKeypress: onTargetKeypress
            })
          );
          if (isTarget === true && typeof props.autocomplete === "string" && props.autocomplete.length > 0) {
            child.push(
              h("input", {
                class: "q-select__autocomplete-input",
                autocomplete: props.autocomplete,
                tabindex: -1,
                onKeyup: onTargetAutocomplete
              })
            );
          }
        }
        if (nameProp.value !== void 0 && props.disable !== true && innerOptionsValue.value.length > 0) {
          const opts = innerOptionsValue.value.map((value) => h("option", { value, selected: true }));
          child.push(
            h("select", {
              class: "hidden",
              name: nameProp.value,
              multiple: props.multiple
            }, opts)
          );
        }
        const attrs = props.useInput === true || isTarget !== true ? void 0 : state.splitAttrs.attributes.value;
        return h("div", {
          class: "q-field__native row items-center",
          ...attrs
        }, child);
      },
      getInnerAppend: () => props.loading !== true && innerLoadingIndicator.value !== true && props.hideDropdownIcon !== true ? [
        h(QIcon, {
          class: "q-select__dropdown-icon" + (menu.value === true ? " rotate-180" : ""),
          name: dropdownArrowIcon.value
        })
      ] : null
    });
    return useField(state);
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
    const trackClass = computed(
      () => `q-linear-progress__track absolute-full q-linear-progress__track--with${props.instantFeedback === true ? "out" : ""}-transition q-linear-progress__track--${isDark.value === true ? "dark" : "light"}` + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
    );
    const modelStyle = computed(() => width(motion.value === true ? 1 : props.value, widthReverse.value, proxy.$q));
    const modelClass = computed(
      () => `q-linear-progress__model absolute-full q-linear-progress__model--with${props.instantFeedback === true ? "out" : ""}-transition q-linear-progress__model--${motion.value === true ? "in" : ""}determinate`
    );
    const stripeStyle = computed(() => ({ width: `${props.value * 100}%` }));
    const stripeClass = computed(
      () => `q-linear-progress__stripe absolute-${props.reverse === true ? "right" : "left"}`
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
    "virtual-scroll",
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
        const { offsetTop } = rowEl;
        const direction = offsetTop < scrollTarget.scrollTop ? "decrease" : "increase";
        scrollTarget.scrollTop = offsetTop;
        emit("virtual-scroll", {
          index: toIndex,
          from: 0,
          to: innerPagination.value.rowsPerPage - 1,
          direction
        });
      }
    }
    function onVScroll(info) {
      emit("virtual-scroll", info);
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
      data.cols = data.cols.map((col) => {
        const c = { ...col };
        injectProp(c, "value", () => getCellValue(col, data.row));
        return c;
      });
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
export { QTable as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVRhYmxlLjMwOGJlZTg2LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbWFya3VwLXRhYmxlL1FNYXJrdXBUYWJsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvZ2V0LXRhYmxlLW1pZGRsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvcnRsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC91c2UtdmlydHVhbC1zY3JvbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1FWaXJ0dWFsU2Nyb2xsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9maWVsZC9RRmllbGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NoaXAvUUNoaXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NlbGVjdC9RU2VsZWN0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9saW5lYXItcHJvZ3Jlc3MvUUxpbmVhclByb2dyZXNzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZnVsbHNjcmVlbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtc29ydC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFibGUvdGFibGUtZmlsdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1wYWdpbmF0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1yb3ctZXhwYW5kLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJsZS9RVGFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCwgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUaCcsXG5cbiAgcHJvcHM6IHtcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIGF1dG9XaWR0aDogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbICdjbGljaycgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBvbkNsaWNrID0gZXZ0ID0+IHsgZW1pdCgnY2xpY2snLCBldnQpIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMucHJvcHMgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaCgndGgnLCB7XG4gICAgICAgICAgY2xhc3M6IHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgOiAnJyxcbiAgICAgICAgICBvbkNsaWNrXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgICAgfVxuXG4gICAgICBsZXQgY29sLCBjaGlsZFxuICAgICAgY29uc3QgbmFtZSA9IHZtLnZub2RlLmtleVxuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICBjb2wgPSBwcm9wcy5wcm9wcy5jb2xzTWFwWyBuYW1lIF1cbiAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwKSB7IHJldHVybiB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29sID0gcHJvcHMucHJvcHMuY29sXG4gICAgICB9XG5cbiAgICAgIGlmIChjb2wuc29ydGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gY29sLmFsaWduID09PSAncmlnaHQnXG4gICAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICAgIGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG4gICAgICAgIGNoaWxkWyBhY3Rpb24gXShcbiAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICBjbGFzczogY29sLl9faWNvbkNsYXNzLFxuICAgICAgICAgICAgbmFtZTogJHEuaWNvblNldC50YWJsZS5hcnJvd1VwXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IGNvbC5fX3RoQ2xhc3NcbiAgICAgICAgICArIChwcm9wcy5hdXRvV2lkdGggPT09IHRydWUgPyAnIHEtdGFibGUtLWNvbC1hdXRvLXdpZHRoJyA6ICcnKSxcbiAgICAgICAgc3R5bGU6IGNvbC5oZWFkZXJTdHlsZSxcbiAgICAgICAgb25DbGljazogZXZ0ID0+IHtcbiAgICAgICAgICBjb2wuc29ydGFibGUgPT09IHRydWUgJiYgcHJvcHMucHJvcHMuc29ydChjb2wpIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICBvbkNsaWNrKGV2dClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgndGgnLCBkYXRhLCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHNlcGFyYXRvclZhbHVlcyA9IFsgJ2hvcml6b250YWwnLCAndmVydGljYWwnLCAnY2VsbCcsICdub25lJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTWFya3VwVGFibGUnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgc2VwYXJhdG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaG9yaXpvbnRhbCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gc2VwYXJhdG9yVmFsdWVzLmluY2x1ZGVzKHYpXG4gICAgfVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1tYXJrdXAtdGFibGUgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGVfX2NhcmQnXG4gICAgICArIGAgcS10YWJsZS0tJHsgcHJvcHMuc2VwYXJhdG9yIH0tc2VwYXJhdG9yYFxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kYXJrIHEtdGFibGVfX2NhcmQtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFibGUtLWRlbnNlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuZmxhdCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZmxhdCcgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLXRhYmxlLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tc3F1YXJlJyA6ICcnKVxuICAgICAgKyAocHJvcHMud3JhcENlbGxzID09PSBmYWxzZSA/ICcgcS10YWJsZS0tbm8td3JhcCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2Jywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWVcbiAgICB9LCBbXG4gICAgICBoKCd0YWJsZScsIHsgY2xhc3M6ICdxLXRhYmxlJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBjb250ZW50KSB7XG4gIHJldHVybiBoKCdkaXYnLCBwcm9wcywgW1xuICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIGNvbnRlbnQpXG4gIF0pXG59XG4iLCJsZXQgcnRsSGFzU2Nyb2xsQnVnID0gZmFsc2VcblxuLy8gbW9iaWxlIENocm9tZSB0YWtlcyB0aGUgY3Jvd24gZm9yIHRoaXNcbmlmICghX19RVUFTQVJfU1NSX18pIHtcbiAgY29uc3Qgc2Nyb2xsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gIHNjcm9sbGVyLnNldEF0dHJpYnV0ZSgnZGlyJywgJ3J0bCcpXG4gIHNjcm9sbGVyLnN0eWxlLndpZHRoID0gJzFweCdcbiAgc2Nyb2xsZXIuc3R5bGUuaGVpZ2h0ID0gJzFweCdcbiAgc2Nyb2xsZXIuc3R5bGUub3ZlcmZsb3cgPSAnYXV0bydcblxuICBzcGFjZXIuc3R5bGUud2lkdGggPSAnMTAwMHB4J1xuICBzcGFjZXIuc3R5bGUuaGVpZ2h0ID0gJzFweCdcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbGVyKVxuICBzY3JvbGxlci5hcHBlbmRDaGlsZChzcGFjZXIpXG4gIHNjcm9sbGVyLnNjcm9sbExlZnQgPSAtMTAwMFxuXG4gIHJ0bEhhc1Njcm9sbEJ1ZyA9IHNjcm9sbGVyLnNjcm9sbExlZnQgPj0gMFxuXG4gIHNjcm9sbGVyLnJlbW92ZSgpXG59XG5cbmV4cG9ydCB7XG4gIHJ0bEhhc1Njcm9sbEJ1Z1xufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbkJlZm9yZU1vdW50LCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS5qcydcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IHJ0bEhhc1Njcm9sbEJ1ZyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcnRsLmpzJ1xuXG5jb25zdCBhZ2dCdWNrZXRTaXplID0gMTAwMFxuXG5jb25zdCBzY3JvbGxUb0VkZ2VzID0gW1xuICAnc3RhcnQnLFxuICAnY2VudGVyJyxcbiAgJ2VuZCcsXG4gICdzdGFydC1mb3JjZScsXG4gICdjZW50ZXItZm9yY2UnLFxuICAnZW5kLWZvcmNlJ1xuXVxuXG5jb25zdCBmaWx0ZXJQcm90byA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcblxuY29uc3Qgc2V0T3ZlcmZsb3dBbmNob3IgPSBfX1FVQVNBUl9TU1JfXyB8fCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5vdmVyZmxvd0FuY2hvciA9PT0gdm9pZCAwXG4gID8gbm9vcFxuICA6IGZ1bmN0aW9uIChjb250ZW50RWwsIGluZGV4KSB7XG4gICAgaWYgKGNvbnRlbnRFbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoY29udGVudEVsLl9xT3ZlcmZsb3dBbmltYXRpb25GcmFtZSlcbiAgICBjb250ZW50RWwuX3FPdmVyZmxvd0FuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGlmIChjb250ZW50RWwgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gY29udGVudEVsLmNoaWxkcmVuIHx8IFtdXG5cbiAgICAgIGZpbHRlclByb3RvXG4gICAgICAgIC5jYWxsKGNoaWxkcmVuLCBlbCA9PiBlbC5kYXRhc2V0ICYmIGVsLmRhdGFzZXQucVZzQW5jaG9yICE9PSB2b2lkIDApXG4gICAgICAgIC5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBkZWxldGUgZWwuZGF0YXNldC5xVnNBbmNob3JcbiAgICAgICAgfSlcblxuICAgICAgY29uc3QgZWwgPSBjaGlsZHJlblsgaW5kZXggXVxuXG4gICAgICBpZiAoZWwgJiYgZWwuZGF0YXNldCkge1xuICAgICAgICBlbC5kYXRhc2V0LnFWc0FuY2hvciA9ICcnXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5mdW5jdGlvbiBzdW1GbiAoYWNjLCBoKSB7XG4gIHJldHVybiBhY2MgKyBoXG59XG5cbmZ1bmN0aW9uIGdldFNjcm9sbERldGFpbHMgKFxuICBwYXJlbnQsXG4gIGNoaWxkLFxuICBiZWZvcmVSZWYsXG4gIGFmdGVyUmVmLFxuICBob3Jpem9udGFsLFxuICBydGwsXG4gIHN0aWNreVN0YXJ0LFxuICBzdGlja3lFbmRcbikge1xuICBjb25zdFxuICAgIHBhcmVudENhbGMgPSBwYXJlbnQgPT09IHdpbmRvdyA/IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogcGFyZW50LFxuICAgIHByb3BFbFNpemUgPSBob3Jpem9udGFsID09PSB0cnVlID8gJ29mZnNldFdpZHRoJyA6ICdvZmZzZXRIZWlnaHQnLFxuICAgIGRldGFpbHMgPSB7XG4gICAgICBzY3JvbGxTdGFydDogMCxcbiAgICAgIHNjcm9sbFZpZXdTaXplOiAtc3RpY2t5U3RhcnQgLSBzdGlja3lFbmQsXG4gICAgICBzY3JvbGxNYXhTaXplOiAwLFxuICAgICAgb2Zmc2V0U3RhcnQ6IC1zdGlja3lTdGFydCxcbiAgICAgIG9mZnNldEVuZDogLXN0aWNreUVuZFxuICAgIH1cblxuICBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgIGlmIChwYXJlbnQgPT09IHdpbmRvdykge1xuICAgICAgZGV0YWlscy5zY3JvbGxTdGFydCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMFxuICAgICAgZGV0YWlscy5zY3JvbGxWaWV3U2l6ZSArPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gcGFyZW50Q2FsYy5zY3JvbGxMZWZ0XG4gICAgICBkZXRhaWxzLnNjcm9sbFZpZXdTaXplICs9IHBhcmVudENhbGMuY2xpZW50V2lkdGhcbiAgICB9XG4gICAgZGV0YWlscy5zY3JvbGxNYXhTaXplID0gcGFyZW50Q2FsYy5zY3JvbGxXaWR0aFxuXG4gICAgaWYgKHJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgZGV0YWlscy5zY3JvbGxTdGFydCA9IChydGxIYXNTY3JvbGxCdWcgPT09IHRydWUgPyBkZXRhaWxzLnNjcm9sbE1heFNpemUgLSBkZXRhaWxzLnNjcm9sbFZpZXdTaXplIDogMCkgLSBkZXRhaWxzLnNjcm9sbFN0YXJ0XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIGlmIChwYXJlbnQgPT09IHdpbmRvdykge1xuICAgICAgZGV0YWlscy5zY3JvbGxTdGFydCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwXG4gICAgICBkZXRhaWxzLnNjcm9sbFZpZXdTaXplICs9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gcGFyZW50Q2FsYy5zY3JvbGxUb3BcbiAgICAgIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgKz0gcGFyZW50Q2FsYy5jbGllbnRIZWlnaHRcbiAgICB9XG4gICAgZGV0YWlscy5zY3JvbGxNYXhTaXplID0gcGFyZW50Q2FsYy5zY3JvbGxIZWlnaHRcbiAgfVxuXG4gIGlmIChiZWZvcmVSZWYgIT09IG51bGwpIHtcbiAgICBmb3IgKGxldCBlbCA9IGJlZm9yZVJlZi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOyBlbCAhPT0gbnVsbDsgZWwgPSBlbC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdxLXZpcnR1YWwtc2Nyb2xsLS1za2lwJykgPT09IGZhbHNlKSB7XG4gICAgICAgIGRldGFpbHMub2Zmc2V0U3RhcnQgKz0gZWxbIHByb3BFbFNpemUgXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhZnRlclJlZiAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGVsID0gYWZ0ZXJSZWYubmV4dEVsZW1lbnRTaWJsaW5nOyBlbCAhPT0gbnVsbDsgZWwgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtdmlydHVhbC1zY3JvbGwtLXNraXAnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlscy5vZmZzZXRFbmQgKz0gZWxbIHByb3BFbFNpemUgXVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChjaGlsZCAhPT0gcGFyZW50KSB7XG4gICAgY29uc3RcbiAgICAgIHBhcmVudFJlY3QgPSBwYXJlbnRDYWxjLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgY2hpbGRSZWN0ID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICBkZXRhaWxzLm9mZnNldFN0YXJ0ICs9IGNoaWxkUmVjdC5sZWZ0IC0gcGFyZW50UmVjdC5sZWZ0XG4gICAgICBkZXRhaWxzLm9mZnNldEVuZCAtPSBjaGlsZFJlY3Qud2lkdGhcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBkZXRhaWxzLm9mZnNldFN0YXJ0ICs9IGNoaWxkUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcFxuICAgICAgZGV0YWlscy5vZmZzZXRFbmQgLT0gY2hpbGRSZWN0LmhlaWdodFxuICAgIH1cblxuICAgIGlmIChwYXJlbnQgIT09IHdpbmRvdykge1xuICAgICAgZGV0YWlscy5vZmZzZXRTdGFydCArPSBkZXRhaWxzLnNjcm9sbFN0YXJ0XG4gICAgfVxuICAgIGRldGFpbHMub2Zmc2V0RW5kICs9IGRldGFpbHMuc2Nyb2xsTWF4U2l6ZSAtIGRldGFpbHMub2Zmc2V0U3RhcnRcbiAgfVxuXG4gIHJldHVybiBkZXRhaWxzXG59XG5cbmZ1bmN0aW9uIHNldFNjcm9sbCAocGFyZW50LCBzY3JvbGwsIGhvcml6b250YWwsIHJ0bCkge1xuICBpZiAoc2Nyb2xsID09PSAnZW5kJykge1xuICAgIHNjcm9sbCA9IChwYXJlbnQgPT09IHdpbmRvdyA/IGRvY3VtZW50LmJvZHkgOiBwYXJlbnQpW1xuICAgICAgaG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICdzY3JvbGxXaWR0aCcgOiAnc2Nyb2xsSGVpZ2h0J1xuICAgIF1cbiAgfVxuXG4gIGlmIChwYXJlbnQgPT09IHdpbmRvdykge1xuICAgIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgICBpZiAocnRsID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbCA9IChydGxIYXNTY3JvbGxCdWcgPT09IHRydWUgPyBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoIC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoIDogMCkgLSBzY3JvbGxcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyhzY3JvbGwsIHdpbmRvdy5wYWdlWU9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWSB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCAwKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cucGFnZVhPZmZzZXQgfHwgd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDAsIHNjcm9sbClcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgIGlmIChydGwgPT09IHRydWUpIHtcbiAgICAgIHNjcm9sbCA9IChydGxIYXNTY3JvbGxCdWcgPT09IHRydWUgPyBwYXJlbnQuc2Nyb2xsV2lkdGggLSBwYXJlbnQub2Zmc2V0V2lkdGggOiAwKSAtIHNjcm9sbFxuICAgIH1cbiAgICBwYXJlbnQuc2Nyb2xsTGVmdCA9IHNjcm9sbFxuICB9XG4gIGVsc2Uge1xuICAgIHBhcmVudC5zY3JvbGxUb3AgPSBzY3JvbGxcbiAgfVxufVxuXG5mdW5jdGlvbiBzdW1TaXplIChzaXplQWdnLCBzaXplLCBmcm9tLCB0bykge1xuICBpZiAoZnJvbSA+PSB0bykgeyByZXR1cm4gMCB9XG5cbiAgY29uc3RcbiAgICBsYXN0VG8gPSBzaXplLmxlbmd0aCxcbiAgICBmcm9tQWdnID0gTWF0aC5mbG9vcihmcm9tIC8gYWdnQnVja2V0U2l6ZSksXG4gICAgdG9BZ2cgPSBNYXRoLmZsb29yKCh0byAtIDEpIC8gYWdnQnVja2V0U2l6ZSkgKyAxXG5cbiAgbGV0IHRvdGFsID0gc2l6ZUFnZy5zbGljZShmcm9tQWdnLCB0b0FnZykucmVkdWNlKHN1bUZuLCAwKVxuXG4gIGlmIChmcm9tICUgYWdnQnVja2V0U2l6ZSAhPT0gMCkge1xuICAgIHRvdGFsIC09IHNpemUuc2xpY2UoZnJvbUFnZyAqIGFnZ0J1Y2tldFNpemUsIGZyb20pLnJlZHVjZShzdW1GbiwgMClcbiAgfVxuICBpZiAodG8gJSBhZ2dCdWNrZXRTaXplICE9PSAwICYmIHRvICE9PSBsYXN0VG8pIHtcbiAgICB0b3RhbCAtPSBzaXplLnNsaWNlKHRvLCB0b0FnZyAqIGFnZ0J1Y2tldFNpemUpLnJlZHVjZShzdW1GbiwgMClcbiAgfVxuXG4gIHJldHVybiB0b3RhbFxufVxuXG5jb25zdCBjb21tb25WaXJ0U2Nyb2xsUHJvcHMgPSB7XG4gIHZpcnR1YWxTY3JvbGxTbGljZVNpemU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogbnVsbFxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDFcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0FmdGVyOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDFcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogMjRcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZVN0YXJ0OiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcblxuICB2aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZUVuZDoge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG5cbiAgdGFibGVDb2xzcGFuOiBbIE51bWJlciwgU3RyaW5nIF1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbW1vblZpcnRQcm9wc0xpc3QgPSBPYmplY3Qua2V5cyhjb21tb25WaXJ0U2Nyb2xsUHJvcHMpXG5cbmV4cG9ydCBjb25zdCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgPSB7XG4gIHZpcnR1YWxTY3JvbGxIb3Jpem9udGFsOiBCb29sZWFuLFxuICBvblZpcnR1YWxTY3JvbGw6IEZ1bmN0aW9uLFxuICAuLi5jb21tb25WaXJ0U2Nyb2xsUHJvcHNcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZpcnR1YWxTY3JvbGwgKHtcbiAgdmlydHVhbFNjcm9sbExlbmd0aCwgZ2V0VmlydHVhbFNjcm9sbFRhcmdldCwgZ2V0VmlydHVhbFNjcm9sbEVsLFxuICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZCAvLyBvcHRpb25hbFxufSkge1xuICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IHZtXG4gIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgbGV0IHByZXZTY3JvbGxTdGFydCwgcHJldlRvSW5kZXgsIGxvY2FsU2Nyb2xsVmlld1NpemUsIHZpcnR1YWxTY3JvbGxTaXplc0FnZyA9IFtdLCB2aXJ0dWFsU2Nyb2xsU2l6ZXNcblxuICBjb25zdCB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZSA9IHJlZigwKVxuICBjb25zdCB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyID0gcmVmKDApXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZCA9IHJlZih7fSlcblxuICBjb25zdCBiZWZvcmVSZWYgPSByZWYobnVsbClcbiAgY29uc3QgYWZ0ZXJSZWYgPSByZWYobnVsbClcbiAgY29uc3QgY29udGVudFJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlID0gcmVmKHsgZnJvbTogMCwgdG86IDAgfSlcblxuICBjb25zdCBjb2xzcGFuQXR0ciA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy50YWJsZUNvbHNwYW4gIT09IHZvaWQgMCA/IHByb3BzLnRhYmxlQ29sc3BhbiA6IDEwMCkpXG5cbiAgaWYgKHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkID09PSB2b2lkIDApIHtcbiAgICB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSlcbiAgfVxuXG4gIGNvbnN0IG5lZWRzUmVzZXQgPSBjb21wdXRlZCgoKSA9PiB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZC52YWx1ZSArICc7JyArIHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsKVxuXG4gIGNvbnN0IG5lZWRzU2xpY2VSZWNhbGMgPSBjb21wdXRlZCgoKSA9PlxuICAgIG5lZWRzUmVzZXQudmFsdWUgKyAnOycgKyBwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSArICc7JyArIHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXJcbiAgKVxuXG4gIHdhdGNoKG5lZWRzU2xpY2VSZWNhbGMsICgpID0+IHsgc2V0VmlydHVhbFNjcm9sbFNpemUoKSB9KVxuICB3YXRjaChuZWVkc1Jlc2V0LCByZXNldClcblxuICBmdW5jdGlvbiByZXNldCAoKSB7XG4gICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwocHJldlRvSW5kZXgsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiByZWZyZXNoICh0b0luZGV4KSB7XG4gICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwodG9JbmRleCA9PT0gdm9pZCAwID8gcHJldlRvSW5kZXggOiB0b0luZGV4KVxuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVG8gKHRvSW5kZXgsIGVkZ2UpIHtcbiAgICBjb25zdCBzY3JvbGxFbCA9IGdldFZpcnR1YWxTY3JvbGxUYXJnZXQoKVxuXG4gICAgaWYgKHNjcm9sbEVsID09PSB2b2lkIDAgfHwgc2Nyb2xsRWwgPT09IG51bGwgfHwgc2Nyb2xsRWwubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbERldGFpbHMgPSBnZXRTY3JvbGxEZXRhaWxzKFxuICAgICAgc2Nyb2xsRWwsXG4gICAgICBnZXRWaXJ0dWFsU2Nyb2xsRWwoKSxcbiAgICAgIGJlZm9yZVJlZi52YWx1ZSxcbiAgICAgIGFmdGVyUmVmLnZhbHVlLFxuICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAkcS5sYW5nLnJ0bCxcbiAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnQsXG4gICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZUVuZFxuICAgIClcblxuICAgIGxvY2FsU2Nyb2xsVmlld1NpemUgIT09IHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUgJiYgc2V0VmlydHVhbFNjcm9sbFNpemUoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSlcblxuICAgIHNldFZpcnR1YWxTY3JvbGxTbGljZVJhbmdlKFxuICAgICAgc2Nyb2xsRWwsXG4gICAgICBzY3JvbGxEZXRhaWxzLFxuICAgICAgTWF0aC5taW4odmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDEsIE1hdGgubWF4KDAsIHBhcnNlSW50KHRvSW5kZXgsIDEwKSB8fCAwKSksXG4gICAgICAwLFxuICAgICAgc2Nyb2xsVG9FZGdlcy5pbmRleE9mKGVkZ2UpID4gLTEgPyBlZGdlIDogKHByZXZUb0luZGV4ID4gLTEgJiYgdG9JbmRleCA+IHByZXZUb0luZGV4ID8gJ2VuZCcgOiAnc3RhcnQnKVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2FsT25WaXJ0dWFsU2Nyb2xsRXZ0ICgpIHtcbiAgICBjb25zdCBzY3JvbGxFbCA9IGdldFZpcnR1YWxTY3JvbGxUYXJnZXQoKVxuXG4gICAgaWYgKHNjcm9sbEVsID09PSB2b2lkIDAgfHwgc2Nyb2xsRWwgPT09IG51bGwgfHwgc2Nyb2xsRWwubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0XG4gICAgICBzY3JvbGxEZXRhaWxzID0gZ2V0U2Nyb2xsRGV0YWlscyhcbiAgICAgICAgc2Nyb2xsRWwsXG4gICAgICAgIGdldFZpcnR1YWxTY3JvbGxFbCgpLFxuICAgICAgICBiZWZvcmVSZWYudmFsdWUsXG4gICAgICAgIGFmdGVyUmVmLnZhbHVlLFxuICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICAgJHEubGFuZy5ydGwsXG4gICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnQsXG4gICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplRW5kXG4gICAgICApLFxuICAgICAgbGlzdExhc3RJbmRleCA9IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgLSAxLFxuICAgICAgbGlzdEVuZE9mZnNldCA9IHNjcm9sbERldGFpbHMuc2Nyb2xsTWF4U2l6ZSAtIHNjcm9sbERldGFpbHMub2Zmc2V0U3RhcnQgLSBzY3JvbGxEZXRhaWxzLm9mZnNldEVuZCAtIHZpcnR1YWxTY3JvbGxQYWRkaW5nQWZ0ZXIudmFsdWVcblxuICAgIGlmIChwcmV2U2Nyb2xsU3RhcnQgPT09IHNjcm9sbERldGFpbHMuc2Nyb2xsU3RhcnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemUgPD0gMCkge1xuICAgICAgc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2Uoc2Nyb2xsRWwsIHNjcm9sbERldGFpbHMsIDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsb2NhbFNjcm9sbFZpZXdTaXplICE9PSBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplICYmIHNldFZpcnR1YWxTY3JvbGxTaXplKHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUpXG5cbiAgICB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2l6ZXModmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSlcblxuICAgIGNvbnN0IHNjcm9sbE1heFN0YXJ0ID0gTWF0aC5mbG9vcihzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemVcbiAgICAgIC0gTWF0aC5tYXgoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSwgc2Nyb2xsRGV0YWlscy5vZmZzZXRFbmQpXG4gICAgICAtIE1hdGgubWluKHZpcnR1YWxTY3JvbGxTaXplc1sgbGlzdExhc3RJbmRleCBdLCBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplIC8gMikpXG5cbiAgICBpZiAoc2Nyb2xsTWF4U3RhcnQgPiAwICYmIE1hdGguY2VpbChzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0KSA+PSBzY3JvbGxNYXhTdGFydCkge1xuICAgICAgc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBzY3JvbGxEZXRhaWxzLFxuICAgICAgICBsaXN0TGFzdEluZGV4LFxuICAgICAgICBzY3JvbGxEZXRhaWxzLnNjcm9sbE1heFNpemUgLSBzY3JvbGxEZXRhaWxzLm9mZnNldEVuZCAtIHZpcnR1YWxTY3JvbGxTaXplc0FnZy5yZWR1Y2Uoc3VtRm4sIDApXG4gICAgICApXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldFxuICAgICAgdG9JbmRleCA9IDAsXG4gICAgICBsaXN0T2Zmc2V0ID0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCAtIHNjcm9sbERldGFpbHMub2Zmc2V0U3RhcnQsXG4gICAgICBvZmZzZXQgPSBsaXN0T2Zmc2V0XG5cbiAgICBpZiAobGlzdE9mZnNldCA8PSBsaXN0RW5kT2Zmc2V0ICYmIGxpc3RPZmZzZXQgKyBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplID49IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlKSB7XG4gICAgICBsaXN0T2Zmc2V0IC09IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlXG4gICAgICB0b0luZGV4ID0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbVxuICAgICAgb2Zmc2V0ID0gbGlzdE9mZnNldFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBsaXN0T2Zmc2V0ID49IHZpcnR1YWxTY3JvbGxTaXplc0FnZ1sgaiBdICYmIHRvSW5kZXggPCBsaXN0TGFzdEluZGV4OyBqKyspIHtcbiAgICAgICAgbGlzdE9mZnNldCAtPSB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2dbIGogXVxuICAgICAgICB0b0luZGV4ICs9IGFnZ0J1Y2tldFNpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAobGlzdE9mZnNldCA+IDAgJiYgdG9JbmRleCA8IGxpc3RMYXN0SW5kZXgpIHtcbiAgICAgIGxpc3RPZmZzZXQgLT0gdmlydHVhbFNjcm9sbFNpemVzWyB0b0luZGV4IF1cbiAgICAgIGlmIChsaXN0T2Zmc2V0ID4gLXNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUpIHtcbiAgICAgICAgdG9JbmRleCsrXG4gICAgICAgIG9mZnNldCA9IGxpc3RPZmZzZXRcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBvZmZzZXQgPSB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIHRvSW5kZXggXSArIGxpc3RPZmZzZXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZShcbiAgICAgIHNjcm9sbEVsLFxuICAgICAgc2Nyb2xsRGV0YWlscyxcbiAgICAgIHRvSW5kZXgsXG4gICAgICBvZmZzZXRcbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSAoc2Nyb2xsRWwsIHNjcm9sbERldGFpbHMsIHRvSW5kZXgsIG9mZnNldCwgYWxpZ24pIHtcbiAgICBjb25zdCBhbGlnbkZvcmNlID0gdHlwZW9mIGFsaWduID09PSAnc3RyaW5nJyAmJiBhbGlnbi5pbmRleE9mKCctZm9yY2UnKSA+IC0xXG4gICAgY29uc3QgYWxpZ25FbmQgPSBhbGlnbkZvcmNlID09PSB0cnVlID8gYWxpZ24ucmVwbGFjZSgnLWZvcmNlJywgJycpIDogYWxpZ25cbiAgICBjb25zdCBhbGlnblJhbmdlID0gYWxpZ25FbmQgIT09IHZvaWQgMCA/IGFsaWduRW5kIDogJ3N0YXJ0J1xuXG4gICAgbGV0XG4gICAgICBmcm9tID0gTWF0aC5tYXgoMCwgdG9JbmRleCAtIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZVsgYWxpZ25SYW5nZSBdKSxcbiAgICAgIHRvID0gZnJvbSArIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZS50b3RhbFxuXG4gICAgaWYgKHRvID4gdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSkge1xuICAgICAgdG8gPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlXG4gICAgICBmcm9tID0gTWF0aC5tYXgoMCwgdG8gLSB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQudmFsdWUudG90YWwpXG4gICAgfVxuXG4gICAgcHJldlNjcm9sbFN0YXJ0ID0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydFxuXG4gICAgY29uc3QgcmFuZ2VDaGFuZ2VkID0gZnJvbSAhPT0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSB8fCB0byAhPT0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG9cblxuICAgIGlmIChyYW5nZUNoYW5nZWQgPT09IGZhbHNlICYmIGFsaWduRW5kID09PSB2b2lkIDApIHtcbiAgICAgIGVtaXRTY3JvbGwodG9JbmRleClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgYWN0aXZlRWxlbWVudCB9ID0gZG9jdW1lbnRcbiAgICBjb25zdCBjb250ZW50RWwgPSBjb250ZW50UmVmLnZhbHVlXG4gICAgaWYgKFxuICAgICAgcmFuZ2VDaGFuZ2VkID09PSB0cnVlXG4gICAgICAmJiBjb250ZW50RWwgIT09IG51bGxcbiAgICAgICYmIGNvbnRlbnRFbCAhPT0gYWN0aXZlRWxlbWVudFxuICAgICAgJiYgY29udGVudEVsLmNvbnRhaW5zKGFjdGl2ZUVsZW1lbnQpID09PSB0cnVlXG4gICAgKSB7XG4gICAgICBjb250ZW50RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXJSZWZvY3VzRm4pXG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb250ZW50RWwgIT09IG51bGwgJiYgY29udGVudEVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0Jywgb25CbHVyUmVmb2N1c0ZuKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRPdmVyZmxvd0FuY2hvcihjb250ZW50RWwsIHRvSW5kZXggLSBmcm9tKVxuXG4gICAgY29uc3Qgc2l6ZUJlZm9yZSA9IGFsaWduRW5kICE9PSB2b2lkIDAgPyB2aXJ0dWFsU2Nyb2xsU2l6ZXMuc2xpY2UoZnJvbSwgdG9JbmRleCkucmVkdWNlKHN1bUZuLCAwKSA6IDBcblxuICAgIGlmIChyYW5nZUNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgIC8vIHZ1ZSBrZXkgbWF0Y2hpbmcgYWxnb3JpdGhtIHdvcmtzIG9ubHkgaWZcbiAgICAgIC8vIHRoZSBhcnJheSBvZiBWTm9kZXMgY2hhbmdlcyBvbiBvbmx5IG9uZSBvZiB0aGUgZW5kc1xuICAgICAgLy8gc28gd2UgZmlyc3QgY2hhbmdlIG9uZSBlbmQgYW5kIHRoZW4gdGhlIG90aGVyXG5cbiAgICAgIGNvbnN0IHRlbXBUbyA9IHRvID49IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20gJiYgZnJvbSA8PSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50b1xuICAgICAgICA/IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvXG4gICAgICAgIDogdG9cblxuICAgICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUgPSB7IGZyb20sIHRvOiB0ZW1wVG8gfVxuICAgICAgdmlydHVhbFNjcm9sbFBhZGRpbmdCZWZvcmUudmFsdWUgPSBzdW1TaXplKHZpcnR1YWxTY3JvbGxTaXplc0FnZywgdmlydHVhbFNjcm9sbFNpemVzLCAwLCBmcm9tKVxuICAgICAgdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIHRvLCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKVxuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBpZiAodmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8gIT09IHRvICYmIHByZXZTY3JvbGxTdGFydCA9PT0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCkge1xuICAgICAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlID0geyBmcm9tOiB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tLCB0byB9XG4gICAgICAgICAgdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIHRvLCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAvLyBpZiB0aGUgc2Nyb2xsIHdhcyBjaGFuZ2VkIGdpdmUgdXBcbiAgICAgIC8vIChhbm90aGVyIGNhbGwgdG8gc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UgYmVmb3JlIGFuaW1hdGlvbiBmcmFtZSlcbiAgICAgIGlmIChwcmV2U2Nyb2xsU3RhcnQgIT09IHNjcm9sbERldGFpbHMuc2Nyb2xsU3RhcnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChyYW5nZUNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlVmlydHVhbFNjcm9sbFNpemVzKGZyb20pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHNpemVBZnRlciA9IHZpcnR1YWxTY3JvbGxTaXplcy5zbGljZShmcm9tLCB0b0luZGV4KS5yZWR1Y2Uoc3VtRm4sIDApLFxuICAgICAgICBwb3NTdGFydCA9IHNpemVBZnRlciArIHNjcm9sbERldGFpbHMub2Zmc2V0U3RhcnQgKyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSxcbiAgICAgICAgcG9zRW5kID0gcG9zU3RhcnQgKyB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIHRvSW5kZXggXVxuXG4gICAgICBsZXQgc2Nyb2xsUG9zaXRpb24gPSBwb3NTdGFydCArIG9mZnNldFxuXG4gICAgICBpZiAoYWxpZ25FbmQgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCBzaXplRGlmZiA9IHNpemVBZnRlciAtIHNpemVCZWZvcmVcbiAgICAgICAgY29uc3Qgc2Nyb2xsU3RhcnQgPSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0ICsgc2l6ZURpZmZcblxuICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IGFsaWduRm9yY2UgIT09IHRydWUgJiYgc2Nyb2xsU3RhcnQgPCBwb3NTdGFydCAmJiBwb3NFbmQgPCBzY3JvbGxTdGFydCArIHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemVcbiAgICAgICAgICA/IHNjcm9sbFN0YXJ0XG4gICAgICAgICAgOiAoXG4gICAgICAgICAgICAgIGFsaWduRW5kID09PSAnZW5kJ1xuICAgICAgICAgICAgICAgID8gcG9zRW5kIC0gc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZVxuICAgICAgICAgICAgICAgIDogcG9zU3RhcnQgLSAoYWxpZ25FbmQgPT09ICdzdGFydCcgPyAwIDogTWF0aC5yb3VuZCgoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSAtIHZpcnR1YWxTY3JvbGxTaXplc1sgdG9JbmRleCBdKSAvIDIpKVxuICAgICAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBwcmV2U2Nyb2xsU3RhcnQgPSBzY3JvbGxQb3NpdGlvblxuXG4gICAgICBzZXRTY3JvbGwoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBzY3JvbGxQb3NpdGlvbixcbiAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAgICRxLmxhbmcucnRsXG4gICAgICApXG5cbiAgICAgIGVtaXRTY3JvbGwodG9JbmRleClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVmlydHVhbFNjcm9sbFNpemVzIChmcm9tKSB7XG4gICAgY29uc3QgY29udGVudEVsID0gY29udGVudFJlZi52YWx1ZVxuXG4gICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgY29uc3RcbiAgICAgICAgY2hpbGRyZW4gPSBmaWx0ZXJQcm90by5jYWxsKFxuICAgICAgICAgIGNvbnRlbnRFbC5jaGlsZHJlbixcbiAgICAgICAgICBlbCA9PiBlbC5jbGFzc0xpc3QgJiYgZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdxLXZpcnR1YWwtc2Nyb2xsLS1za2lwJykgPT09IGZhbHNlXG4gICAgICAgICksXG4gICAgICAgIGNoaWxkcmVuTGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICBzaXplRm4gPSBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gZWwgPT4gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGhcbiAgICAgICAgICA6IGVsID0+IGVsLm9mZnNldEhlaWdodFxuXG4gICAgICBsZXRcbiAgICAgICAgaW5kZXggPSBmcm9tLFxuICAgICAgICBzaXplLCBkaWZmXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7KSB7XG4gICAgICAgIHNpemUgPSBzaXplRm4oY2hpbGRyZW5bIGkgXSlcbiAgICAgICAgaSsrXG5cbiAgICAgICAgd2hpbGUgKGkgPCBjaGlsZHJlbkxlbmd0aCAmJiBjaGlsZHJlblsgaSBdLmNsYXNzTGlzdC5jb250YWlucygncS12aXJ0dWFsLXNjcm9sbC0td2l0aC1wcmV2JykgPT09IHRydWUpIHtcbiAgICAgICAgICBzaXplICs9IHNpemVGbihjaGlsZHJlblsgaSBdKVxuICAgICAgICAgIGkrK1xuICAgICAgICB9XG5cbiAgICAgICAgZGlmZiA9IHNpemUgLSB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIGluZGV4IF1cblxuICAgICAgICBpZiAoZGlmZiAhPT0gMCkge1xuICAgICAgICAgIHZpcnR1YWxTY3JvbGxTaXplc1sgaW5kZXggXSArPSBkaWZmXG4gICAgICAgICAgdmlydHVhbFNjcm9sbFNpemVzQWdnWyBNYXRoLmZsb29yKGluZGV4IC8gYWdnQnVja2V0U2l6ZSkgXSArPSBkaWZmXG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyUmVmb2N1c0ZuICgpIHtcbiAgICBjb250ZW50UmVmLnZhbHVlICE9PSBudWxsICYmIGNvbnRlbnRSZWYudmFsdWUgIT09IHZvaWQgMCAmJiBjb250ZW50UmVmLnZhbHVlLmZvY3VzKClcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsICh0b0luZGV4LCBmdWxsUmVzZXQpIHtcbiAgICBjb25zdCBkZWZhdWx0U2l6ZSA9IDEgKiB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZC52YWx1ZVxuXG4gICAgaWYgKGZ1bGxSZXNldCA9PT0gdHJ1ZSB8fCBBcnJheS5pc0FycmF5KHZpcnR1YWxTY3JvbGxTaXplcykgPT09IGZhbHNlKSB7XG4gICAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXMgPSBbXVxuICAgIH1cblxuICAgIGNvbnN0IG9sZFZpcnR1YWxTY3JvbGxTaXplc0xlbmd0aCA9IHZpcnR1YWxTY3JvbGxTaXplcy5sZW5ndGhcblxuICAgIHZpcnR1YWxTY3JvbGxTaXplcy5sZW5ndGggPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlXG5cbiAgICBmb3IgKGxldCBpID0gdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDE7IGkgPj0gb2xkVmlydHVhbFNjcm9sbFNpemVzTGVuZ3RoOyBpLS0pIHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTaXplc1sgaSBdID0gZGVmYXVsdFNpemVcbiAgICB9XG5cbiAgICBjb25zdCBqTWF4ID0gTWF0aC5mbG9vcigodmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDEpIC8gYWdnQnVja2V0U2l6ZSlcbiAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2cgPSBbXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IGpNYXg7IGorKykge1xuICAgICAgbGV0IHNpemUgPSAwXG4gICAgICBjb25zdCBpTWF4ID0gTWF0aC5taW4oKGogKyAxKSAqIGFnZ0J1Y2tldFNpemUsIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG4gICAgICBmb3IgKGxldCBpID0gaiAqIGFnZ0J1Y2tldFNpemU7IGkgPCBpTWF4OyBpKyspIHtcbiAgICAgICAgc2l6ZSArPSB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIGkgXVxuICAgICAgfVxuICAgICAgdmlydHVhbFNjcm9sbFNpemVzQWdnLnB1c2goc2l6ZSlcbiAgICB9XG5cbiAgICBwcmV2VG9JbmRleCA9IC0xXG4gICAgcHJldlNjcm9sbFN0YXJ0ID0gdm9pZCAwXG5cbiAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIDAsIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20pXG4gICAgdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvLCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKVxuXG4gICAgaWYgKHRvSW5kZXggPj0gMCkge1xuICAgICAgdXBkYXRlVmlydHVhbFNjcm9sbFNpemVzKHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20pXG4gICAgICBuZXh0VGljaygoKSA9PiB7IHNjcm9sbFRvKHRvSW5kZXgpIH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0KClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSAoc2Nyb2xsVmlld1NpemUpIHtcbiAgICBpZiAoc2Nyb2xsVmlld1NpemUgPT09IHZvaWQgMCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3Qgc2Nyb2xsRWwgPSBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0KClcblxuICAgICAgaWYgKHNjcm9sbEVsICE9PSB2b2lkIDAgJiYgc2Nyb2xsRWwgIT09IG51bGwgJiYgc2Nyb2xsRWwubm9kZVR5cGUgIT09IDgpIHtcbiAgICAgICAgc2Nyb2xsVmlld1NpemUgPSBnZXRTY3JvbGxEZXRhaWxzKFxuICAgICAgICAgIHNjcm9sbEVsLFxuICAgICAgICAgIGdldFZpcnR1YWxTY3JvbGxFbCgpLFxuICAgICAgICAgIGJlZm9yZVJlZi52YWx1ZSxcbiAgICAgICAgICBhZnRlclJlZi52YWx1ZSxcbiAgICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICAgICAkcS5sYW5nLnJ0bCxcbiAgICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsU3RpY2t5U2l6ZVN0YXJ0LFxuICAgICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplRW5kXG4gICAgICAgICkuc2Nyb2xsVmlld1NpemVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2NhbFNjcm9sbFZpZXdTaXplID0gc2Nyb2xsVmlld1NpemVcblxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlID0gcGFyc2VGbG9hdChwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSkgfHwgMFxuICAgIGNvbnN0IHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXIgPSBwYXJzZUZsb2F0KHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXIpIHx8IDBcbiAgICBjb25zdCBtdWx0aXBsaWVyID0gMSArIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlICsgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9BZnRlclxuICAgIGNvbnN0IHZpZXcgPSBzY3JvbGxWaWV3U2l6ZSA9PT0gdm9pZCAwIHx8IHNjcm9sbFZpZXdTaXplIDw9IDBcbiAgICAgID8gMVxuICAgICAgOiBNYXRoLmNlaWwoc2Nyb2xsVmlld1NpemUgLyB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZC52YWx1ZSlcblxuICAgIGNvbnN0IGJhc2VTaXplID0gTWF0aC5tYXgoXG4gICAgICAxLFxuICAgICAgdmlldyxcbiAgICAgIE1hdGguY2VpbCgocHJvcHMudmlydHVhbFNjcm9sbFNsaWNlU2l6ZSA+IDAgPyBwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VTaXplIDogMTApIC8gbXVsdGlwbGllcilcbiAgICApXG5cbiAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQudmFsdWUgPSB7XG4gICAgICB0b3RhbDogTWF0aC5jZWlsKGJhc2VTaXplICogbXVsdGlwbGllciksXG4gICAgICBzdGFydDogTWF0aC5jZWlsKGJhc2VTaXplICogdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUpLFxuICAgICAgY2VudGVyOiBNYXRoLmNlaWwoYmFzZVNpemUgKiAoMC41ICsgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUpKSxcbiAgICAgIGVuZDogTWF0aC5jZWlsKGJhc2VTaXplICogKDEgKyB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSkpLFxuICAgICAgdmlld1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhZFZpcnR1YWxTY3JvbGwgKHRhZywgY29udGVudCkge1xuICAgIGNvbnN0IHBhZGRpbmdTaXplID0gcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAnd2lkdGgnIDogJ2hlaWdodCdcbiAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgIFsgJy0tcS12aXJ0dWFsLXNjcm9sbC1pdGVtLScgKyBwYWRkaW5nU2l6ZSBdOiB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZC52YWx1ZSArICdweCdcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgdGFnID09PSAndGJvZHknXG4gICAgICAgID8gaCh0YWcsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX3BhZGRpbmcnLFxuICAgICAgICAgIGtleTogJ2JlZm9yZScsXG4gICAgICAgICAgcmVmOiBiZWZvcmVSZWZcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ3RyJywgW1xuICAgICAgICAgICAgaCgndGQnLCB7XG4gICAgICAgICAgICAgIHN0eWxlOiB7IFsgcGFkZGluZ1NpemUgXTogYCR7IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlIH1weGAsIC4uLnN0eWxlIH0sXG4gICAgICAgICAgICAgIGNvbHNwYW46IGNvbHNwYW5BdHRyLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICAgIDogaCh0YWcsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX3BhZGRpbmcnLFxuICAgICAgICAgIGtleTogJ2JlZm9yZScsXG4gICAgICAgICAgcmVmOiBiZWZvcmVSZWYsXG4gICAgICAgICAgc3R5bGU6IHsgWyBwYWRkaW5nU2l6ZSBdOiBgJHsgdmlydHVhbFNjcm9sbFBhZGRpbmdCZWZvcmUudmFsdWUgfXB4YCwgLi4uc3R5bGUgfVxuICAgICAgICB9KSxcblxuICAgICAgaCh0YWcsIHtcbiAgICAgICAgY2xhc3M6ICdxLXZpcnR1YWwtc2Nyb2xsX19jb250ZW50JyxcbiAgICAgICAga2V5OiAnY29udGVudCcsXG4gICAgICAgIHJlZjogY29udGVudFJlZixcbiAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICB9LCBjb250ZW50LmZsYXQoKSksXG5cbiAgICAgIHRhZyA9PT0gJ3Rib2R5J1xuICAgICAgICA/IGgodGFnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXZpcnR1YWwtc2Nyb2xsX19wYWRkaW5nJyxcbiAgICAgICAgICBrZXk6ICdhZnRlcicsXG4gICAgICAgICAgcmVmOiBhZnRlclJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgndHInLCBbXG4gICAgICAgICAgICBoKCd0ZCcsIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHsgWyBwYWRkaW5nU2l6ZSBdOiBgJHsgdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZSB9cHhgLCAuLi5zdHlsZSB9LFxuICAgICAgICAgICAgICBjb2xzcGFuOiBjb2xzcGFuQXR0ci52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgICA6IGgodGFnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXZpcnR1YWwtc2Nyb2xsX19wYWRkaW5nJyxcbiAgICAgICAgICBrZXk6ICdhZnRlcicsXG4gICAgICAgICAgcmVmOiBhZnRlclJlZixcbiAgICAgICAgICBzdHlsZTogeyBbIHBhZGRpbmdTaXplIF06IGAkeyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlIH1weGAsIC4uLnN0eWxlIH1cbiAgICAgICAgfSlcbiAgICBdXG4gIH1cblxuICBmdW5jdGlvbiBlbWl0U2Nyb2xsIChpbmRleCkge1xuICAgIGlmIChwcmV2VG9JbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHByb3BzLm9uVmlydHVhbFNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXQoJ3ZpcnR1YWwtc2Nyb2xsJywge1xuICAgICAgICBpbmRleCxcbiAgICAgICAgZnJvbTogdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSxcbiAgICAgICAgdG86IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvIC0gMSxcbiAgICAgICAgZGlyZWN0aW9uOiBpbmRleCA8IHByZXZUb0luZGV4ID8gJ2RlY3JlYXNlJyA6ICdpbmNyZWFzZScsXG4gICAgICAgIHJlZjogcHJveHlcbiAgICAgIH0pXG5cbiAgICAgIHByZXZUb0luZGV4ID0gaW5kZXhcbiAgICB9XG4gIH1cblxuICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpXG4gIGNvbnN0IG9uVmlydHVhbFNjcm9sbEV2dCA9IGRlYm91bmNlKFxuICAgIGxvY2FsT25WaXJ0dWFsU2Nyb2xsRXZ0LFxuICAgICRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSA/IDEyMCA6IDM1XG4gIClcblxuICBvbkJlZm9yZU1vdW50KCgpID0+IHtcbiAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpXG4gIH0pXG5cbiAgbGV0IHNob3VsZEFjdGl2YXRlID0gZmFsc2VcblxuICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICBzaG91bGRBY3RpdmF0ZSA9IHRydWVcbiAgfSlcblxuICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgaWYgKHNob3VsZEFjdGl2YXRlICE9PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICBjb25zdCBzY3JvbGxFbCA9IGdldFZpcnR1YWxTY3JvbGxUYXJnZXQoKVxuXG4gICAgaWYgKHByZXZTY3JvbGxTdGFydCAhPT0gdm9pZCAwICYmIHNjcm9sbEVsICE9PSB2b2lkIDAgJiYgc2Nyb2xsRWwgIT09IG51bGwgJiYgc2Nyb2xsRWwubm9kZVR5cGUgIT09IDgpIHtcbiAgICAgIHNldFNjcm9sbChcbiAgICAgICAgc2Nyb2xsRWwsXG4gICAgICAgIHByZXZTY3JvbGxTdGFydCxcbiAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwsXG4gICAgICAgICRxLmxhbmcucnRsXG4gICAgICApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgc2Nyb2xsVG8ocHJldlRvSW5kZXgpXG4gICAgfVxuICB9KVxuXG4gIF9fUVVBU0FSX1NTUl9fIHx8IG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgb25WaXJ0dWFsU2Nyb2xsRXZ0LmNhbmNlbCgpXG4gIH0pXG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHsgc2Nyb2xsVG8sIHJlc2V0LCByZWZyZXNoIH0pXG5cbiAgcmV0dXJuIHtcbiAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSxcbiAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQsXG5cbiAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSxcbiAgICBvblZpcnR1YWxTY3JvbGxFdnQsXG4gICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgcGFkVmlydHVhbFNjcm9sbCxcblxuICAgIHNjcm9sbFRvLFxuICAgIHJlc2V0LFxuICAgIHJlZnJlc2hcbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlTW91bnQsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFMaXN0IGZyb20gJy4uL2l0ZW0vUUxpc3QuanMnXG5pbXBvcnQgUU1hcmt1cFRhYmxlIGZyb20gJy4uL21hcmt1cC10YWJsZS9RTWFya3VwVGFibGUuanMnXG5pbXBvcnQgZ2V0VGFibGVNaWRkbGUgZnJvbSAnLi4vdGFibGUvZ2V0LXRhYmxlLW1pZGRsZS5qcydcblxuaW1wb3J0IHsgdXNlVmlydHVhbFNjcm9sbCwgdXNlVmlydHVhbFNjcm9sbFByb3BzIH0gZnJvbSAnLi91c2UtdmlydHVhbC1zY3JvbGwuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cyB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBjb21wcyA9IHtcbiAgbGlzdDogUUxpc3QsXG4gIHRhYmxlOiBRTWFya3VwVGFibGVcbn1cblxuY29uc3QgdHlwZU9wdGlvbnMgPSBbICdsaXN0JywgJ3RhYmxlJywgJ19fcXRhYmxlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVmlydHVhbFNjcm9sbCcsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VWaXJ0dWFsU2Nyb2xsUHJvcHMsXG5cbiAgICB0eXBlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbGlzdCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gdHlwZU9wdGlvbnMuaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgaXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuXG4gICAgaXRlbXNGbjogRnVuY3Rpb24sXG4gICAgaXRlbXNTaXplOiBOdW1iZXIsXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHtcbiAgICAgIGRlZmF1bHQ6IHZvaWQgMFxuICAgIH1cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGF0dHJzIH0pIHtcbiAgICBsZXQgbG9jYWxTY3JvbGxUYXJnZXRcbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuaXRlbXNTaXplID49IDAgJiYgcHJvcHMuaXRlbXNGbiAhPT0gdm9pZCAwXG4gICAgICAgID8gcGFyc2VJbnQocHJvcHMuaXRlbXNTaXplLCAxMClcbiAgICAgICAgOiAoQXJyYXkuaXNBcnJheShwcm9wcy5pdGVtcykgPyBwcm9wcy5pdGVtcy5sZW5ndGggOiAwKVxuICAgICkpXG5cbiAgICBjb25zdCB7XG4gICAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSxcbiAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgcGFkVmlydHVhbFNjcm9sbCxcbiAgICAgIG9uVmlydHVhbFNjcm9sbEV2dFxuICAgIH0gPSB1c2VWaXJ0dWFsU2Nyb2xsKHtcbiAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgsIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQsIGdldFZpcnR1YWxTY3JvbGxFbFxuICAgIH0pXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsU2NvcGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAodmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgY29uc3QgbWFwRm4gPSAoaXRlbSwgaSkgPT4gKHtcbiAgICAgICAgaW5kZXg6IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20gKyBpLFxuICAgICAgICBpdGVtXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gcHJvcHMuaXRlbXNGbiA9PT0gdm9pZCAwXG4gICAgICAgID8gcHJvcHMuaXRlbXMuc2xpY2UodmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8pLm1hcChtYXBGbilcbiAgICAgICAgOiBwcm9wcy5pdGVtc0ZuKHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvIC0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSkubWFwKG1hcEZuKVxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXZpcnR1YWwtc2Nyb2xsIHEtdmlydHVhbC1zY3JvbGwnICsgKHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsID09PSB0cnVlID8gJy0taG9yaXpvbnRhbCcgOiAnLS12ZXJ0aWNhbCcpXG4gICAgICArIChwcm9wcy5zY3JvbGxUYXJnZXQgIT09IHZvaWQgMCA/ICcnIDogJyBzY3JvbGwnKVxuICAgIClcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5zY3JvbGxUYXJnZXQgIT09IHZvaWQgMCA/IHt9IDogeyB0YWJpbmRleDogMCB9XG4gICAgKSlcblxuICAgIHdhdGNoKHZpcnR1YWxTY3JvbGxMZW5ndGgsICgpID0+IHtcbiAgICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCAoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsRWwgKCkge1xuICAgICAgcmV0dXJuIHJvb3RSZWYudmFsdWUuJGVsIHx8IHJvb3RSZWYudmFsdWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIHJldHVybiBsb2NhbFNjcm9sbFRhcmdldFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChnZXRWaXJ0dWFsU2Nyb2xsRWwoKSwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25WaXJ0dWFsU2Nyb2xsRXZ0LCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25WaXJ0dWFsU2Nyb2xsRXZ0LCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gdm9pZCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX19nZXRWaXJ0dWFsQ2hpbGRyZW4gKCkge1xuICAgICAgbGV0IGNoaWxkID0gcGFkVmlydHVhbFNjcm9sbChcbiAgICAgICAgcHJvcHMudHlwZSA9PT0gJ2xpc3QnID8gJ2RpdicgOiAndGJvZHknLFxuICAgICAgICB2aXJ0dWFsU2Nyb2xsU2NvcGUudmFsdWUubWFwKHNsb3RzLmRlZmF1bHQpXG4gICAgICApXG5cbiAgICAgIGlmIChzbG90cy5iZWZvcmUgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IHNsb3RzLmJlZm9yZSgpLmNvbmNhdChjaGlsZClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhNZXJnZVNsb3Qoc2xvdHMuYWZ0ZXIsIGNoaWxkKVxuICAgIH1cblxuICAgIG9uQmVmb3JlTW91bnQoKCkgPT4ge1xuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoc2xvdHMuZGVmYXVsdCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1FWaXJ0dWFsU2Nyb2xsOiBkZWZhdWx0IHNjb3BlZCBzbG90IGlzIHJlcXVpcmVkIGZvciByZW5kZXJpbmcnKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByb3BzLnR5cGUgPT09ICdfX3F0YWJsZSdcbiAgICAgICAgPyBnZXRUYWJsZU1pZGRsZShcbiAgICAgICAgICB7IHJlZjogcm9vdFJlZiwgY2xhc3M6ICdxLXRhYmxlX19taWRkbGUgJyArIGNsYXNzZXMudmFsdWUgfSxcbiAgICAgICAgICBfX2dldFZpcnR1YWxDaGlsZHJlbigpXG4gICAgICAgIClcbiAgICAgICAgOiBoKGNvbXBzWyBwcm9wcy50eXBlIF0sIHtcbiAgICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgICAgY2xhc3M6IFsgYXR0cnMuY2xhc3MsIGNsYXNzZXMudmFsdWUgXSxcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlXG4gICAgICAgIH0sIF9fZ2V0VmlydHVhbENoaWxkcmVuKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB1c2VGaWVsZCwgeyB1c2VGaWVsZFN0YXRlLCB1c2VGaWVsZFByb3BzLCB1c2VGaWVsZEVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmllbGQuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUZpZWxkJyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB1c2VGaWVsZFByb3BzLFxuXG4gIGVtaXRzOiB1c2VGaWVsZEVtaXRzLFxuXG4gIHNldHVwICgpIHtcbiAgICByZXR1cm4gdXNlRmllbGQodXNlRmllbGRTdGF0ZSgpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5cbmltcG9ydCBSaXBwbGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9SaXBwbGUuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlU2l6ZSwgeyB1c2VTaXplUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90U2FmZWx5LCBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGRlZmF1bHRTaXplcyA9IHtcbiAgeHM6IDgsXG4gIHNtOiAxMCxcbiAgbWQ6IDE0LFxuICBsZzogMjAsXG4gIHhsOiAyNFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUNoaXAnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZVNpemVQcm9wcyxcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGljb25SaWdodDogU3RyaW5nLFxuICAgIGljb25SZW1vdmU6IFN0cmluZyxcbiAgICBpY29uU2VsZWN0ZWQ6IFN0cmluZyxcbiAgICBsYWJlbDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBzZWxlY3RlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgY2xpY2thYmxlOiBCb29sZWFuLFxuICAgIHJlbW92YWJsZTogQm9vbGVhbixcblxuICAgIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgZGlzYWJsZTogQm9vbGVhbixcblxuICAgIHJpcHBsZToge1xuICAgICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ3VwZGF0ZTpzZWxlY3RlZCcsICdyZW1vdmUnLCAnY2xpY2snIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCBzaXplU3R5bGUgPSB1c2VTaXplKHByb3BzLCBkZWZhdWx0U2l6ZXMpXG5cbiAgICBjb25zdCBoYXNMZWZ0SWNvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkID09PSB0cnVlIHx8IHByb3BzLmljb24gIT09IHZvaWQgMClcblxuICAgIGNvbnN0IGxlZnRJY29uID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuc2VsZWN0ZWQgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5pY29uU2VsZWN0ZWQgfHwgJHEuaWNvblNldC5jaGlwLnNlbGVjdGVkXG4gICAgICAgIDogcHJvcHMuaWNvblxuICAgICkpXG5cbiAgICBjb25zdCByZW1vdmVJY29uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuaWNvblJlbW92ZSB8fCAkcS5pY29uU2V0LmNoaXAucmVtb3ZlKVxuXG4gICAgY29uc3QgaXNDbGlja2FibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gZmFsc2VcbiAgICAgICYmIChwcm9wcy5jbGlja2FibGUgPT09IHRydWUgfHwgcHJvcHMuc2VsZWN0ZWQgIT09IG51bGwpXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHRleHQgPSBwcm9wcy5vdXRsaW5lID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuY29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgICAgIDogcHJvcHMudGV4dENvbG9yXG5cbiAgICAgIHJldHVybiAncS1jaGlwIHJvdyBpbmxpbmUgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICAgICsgKHByb3BzLm91dGxpbmUgPT09IGZhbHNlICYmIHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgICAgICsgKHRleHQgPyBgIHRleHQtJHsgdGV4dCB9IHEtY2hpcC0tY29sb3JlZGAgOiAnJylcbiAgICAgICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJycpXG4gICAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLWNoaXAtLWRlbnNlJyA6ICcnKVxuICAgICAgICArIChwcm9wcy5vdXRsaW5lID09PSB0cnVlID8gJyBxLWNoaXAtLW91dGxpbmUnIDogJycpXG4gICAgICAgICsgKHByb3BzLnNlbGVjdGVkID09PSB0cnVlID8gJyBxLWNoaXAtLXNlbGVjdGVkJyA6ICcnKVxuICAgICAgICArIChpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1jbGlja2FibGUgY3Vyc29yLXBvaW50ZXIgbm9uLXNlbGVjdGFibGUgcS1ob3ZlcmFibGUnIDogJycpXG4gICAgICAgICsgKHByb3BzLnNxdWFyZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1zcXVhcmUnIDogJycpXG4gICAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1jaGlwLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICB9KVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgICAgPyB7IHRhYmluZGV4OiAtMSwgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScgfVxuICAgICAgICA6IHsgdGFiaW5kZXg6IHByb3BzLnRhYmluZGV4IHx8IDAgfVxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBvbktleXVwIChlKSB7XG4gICAgICBlLmtleUNvZGUgPT09IDEzIC8qIEVOVEVSICovICYmIG9uQ2xpY2soZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgICBpZiAoIXByb3BzLmRpc2FibGUpIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgIXByb3BzLnNlbGVjdGVkKVxuICAgICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZW1vdmUgKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IHZvaWQgMCB8fCBlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZmFsc2UpXG4gICAgICAgICAgZW1pdCgncmVtb3ZlJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXVxuXG4gICAgICBpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1mb2N1cy1oZWxwZXInIH0pXG4gICAgICApXG5cbiAgICAgIGhhc0xlZnRJY29uLnZhbHVlID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2hpcF9faWNvbiBxLWNoaXBfX2ljb24tLWxlZnQnLFxuICAgICAgICAgIG5hbWU6IGxlZnRJY29uLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGxhYmVsID0gcHJvcHMubGFiZWwgIT09IHZvaWQgMFxuICAgICAgICA/IFsgaCgnZGl2JywgeyBjbGFzczogJ2VsbGlwc2lzJyB9LCBbIHByb3BzLmxhYmVsIF0pIF1cbiAgICAgICAgOiB2b2lkIDBcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1jaGlwX19jb250ZW50IGNvbCByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXIgcS1hbmNob3ItLXNraXAnXG4gICAgICAgIH0sIGhNZXJnZVNsb3RTYWZlbHkoc2xvdHMuZGVmYXVsdCwgbGFiZWwpKVxuICAgICAgKVxuXG4gICAgICBwcm9wcy5pY29uUmlnaHQgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS1jaGlwX19pY29uIHEtY2hpcF9faWNvbi0tcmlnaHQnLFxuICAgICAgICAgIG5hbWU6IHByb3BzLmljb25SaWdodFxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBwcm9wcy5yZW1vdmFibGUgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS1jaGlwX19pY29uIHEtY2hpcF9faWNvbi0tcmVtb3ZlIGN1cnNvci1wb2ludGVyJyxcbiAgICAgICAgICBuYW1lOiByZW1vdmVJY29uLnZhbHVlLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgICAgb25DbGljazogb25SZW1vdmUsXG4gICAgICAgICAgb25LZXl1cDogb25SZW1vdmVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlID09PSBmYWxzZSkgeyByZXR1cm4gfVxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHNpemVTdHlsZS52YWx1ZVxuICAgICAgfVxuXG4gICAgICBpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBPYmplY3QuYXNzaWduKFxuICAgICAgICBkYXRhLFxuICAgICAgICBhdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICB7IG9uQ2xpY2ssIG9uS2V5dXAgfVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGdldENvbnRlbnQoKSxcbiAgICAgICAgJ3JpcHBsZScsXG4gICAgICAgIHByb3BzLnJpcHBsZSAhPT0gZmFsc2UgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSxcbiAgICAgICAgKCkgPT4gWyBbIFJpcHBsZSwgcHJvcHMucmlwcGxlIF0gXVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVwZGF0ZSwgb25VcGRhdGVkLCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRRmllbGQgZnJvbSAnLi4vZmllbGQvUUZpZWxkLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUUNoaXAgZnJvbSAnLi4vY2hpcC9RQ2hpcC5qcydcblxuaW1wb3J0IFFJdGVtIGZyb20gJy4uL2l0ZW0vUUl0ZW0uanMnXG5pbXBvcnQgUUl0ZW1TZWN0aW9uIGZyb20gJy4uL2l0ZW0vUUl0ZW1TZWN0aW9uLmpzJ1xuaW1wb3J0IFFJdGVtTGFiZWwgZnJvbSAnLi4vaXRlbS9RSXRlbUxhYmVsLmpzJ1xuXG5pbXBvcnQgUU1lbnUgZnJvbSAnLi4vbWVudS9RTWVudS5qcydcbmltcG9ydCBRRGlhbG9nIGZyb20gJy4uL2RpYWxvZy9RRGlhbG9nLmpzJ1xuXG5pbXBvcnQgdXNlRmllbGQsIHsgdXNlRmllbGRTdGF0ZSwgdXNlRmllbGRQcm9wcywgdXNlRmllbGRFbWl0cywgZmllbGRWYWx1ZUlzRmlsbGVkIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmllbGQuanMnXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC91c2UtdmlydHVhbC1zY3JvbGwuanMnXG5pbXBvcnQgeyB1c2VGb3JtUHJvcHMsIHVzZUZvcm1JbnB1dE5hbWVBdHRyIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcbmltcG9ydCB1c2VLZXlDb21wb3NpdGlvbiBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1rZXktY29tcG9zaXRpb24uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaXNEZWVwRXF1YWwgfSBmcm9tICcuLi8uLi91dGlscy9pcy5qcydcbmltcG9ydCB7IHN0b3AsIHByZXZlbnQsIHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBub3JtYWxpemVUb0ludGVydmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc2hvdWxkSWdub3JlS2V5LCBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgdmFsaWRhdGVOZXdWYWx1ZU1vZGUgPSB2ID0+IFsgJ2FkZCcsICdhZGQtdW5pcXVlJywgJ3RvZ2dsZScgXS5pbmNsdWRlcyh2KVxuY29uc3QgcmVFc2NhcGVMaXN0ID0gJy4qKz9eJHt9KCl8W11cXFxcJ1xuY29uc3QgZmllbGRQcm9wc0xpc3QgPSBPYmplY3Qua2V5cyh1c2VGaWVsZFByb3BzKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNlbGVjdCcsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcbiAgICAuLi51c2VGb3JtUHJvcHMsXG4gICAgLi4udXNlRmllbGRQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcblxuICAgIG11bHRpcGxlOiBCb29sZWFuLFxuXG4gICAgZGlzcGxheVZhbHVlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgZGlzcGxheVZhbHVlSHRtbDogQm9vbGVhbixcbiAgICBkcm9wZG93bkljb246IFN0cmluZyxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuXG4gICAgb3B0aW9uVmFsdWU6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuICAgIG9wdGlvbkxhYmVsOiBbIEZ1bmN0aW9uLCBTdHJpbmcgXSxcbiAgICBvcHRpb25EaXNhYmxlOiBbIEZ1bmN0aW9uLCBTdHJpbmcgXSxcblxuICAgIGhpZGVTZWxlY3RlZDogQm9vbGVhbixcbiAgICBoaWRlRHJvcGRvd25JY29uOiBCb29sZWFuLFxuICAgIGZpbGxJbnB1dDogQm9vbGVhbixcblxuICAgIG1heFZhbHVlczogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gICAgb3B0aW9uc0RlbnNlOiBCb29sZWFuLFxuICAgIG9wdGlvbnNEYXJrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgb3B0aW9uc1NlbGVjdGVkQ2xhc3M6IFN0cmluZyxcbiAgICBvcHRpb25zSHRtbDogQm9vbGVhbixcblxuICAgIG9wdGlvbnNDb3ZlcjogQm9vbGVhbixcblxuICAgIG1lbnVTaHJpbms6IEJvb2xlYW4sXG4gICAgbWVudUFuY2hvcjogU3RyaW5nLFxuICAgIG1lbnVTZWxmOiBTdHJpbmcsXG4gICAgbWVudU9mZnNldDogQXJyYXksXG5cbiAgICBwb3B1cENvbnRlbnRDbGFzczogU3RyaW5nLFxuICAgIHBvcHVwQ29udGVudFN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuXG4gICAgdXNlSW5wdXQ6IEJvb2xlYW4sXG4gICAgdXNlQ2hpcHM6IEJvb2xlYW4sXG5cbiAgICBuZXdWYWx1ZU1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdmFsaWRhdGVOZXdWYWx1ZU1vZGVcbiAgICB9LFxuXG4gICAgbWFwT3B0aW9uczogQm9vbGVhbixcbiAgICBlbWl0VmFsdWU6IEJvb2xlYW4sXG5cbiAgICBpbnB1dERlYm91bmNlOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiA1MDBcbiAgICB9LFxuXG4gICAgaW5wdXRDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBpbnB1dFN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgdGFiaW5kZXg6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuXG4gICAgYXV0b2NvbXBsZXRlOiBTdHJpbmcsXG5cbiAgICB0cmFuc2l0aW9uU2hvdzogU3RyaW5nLFxuICAgIHRyYW5zaXRpb25IaWRlOiBTdHJpbmcsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBiZWhhdmlvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2RlZmF1bHQnLCAnbWVudScsICdkaWFsb2cnIF0uaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9LFxuXG4gICAgdmlydHVhbFNjcm9sbEl0ZW1TaXplOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9LFxuXG4gICAgb25OZXdWYWx1ZTogRnVuY3Rpb24sXG4gICAgb25GaWx0ZXI6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VGaWVsZEVtaXRzLFxuICAgICdhZGQnLCAncmVtb3ZlJywgJ2lucHV0LXZhbHVlJywgJ25ldy12YWx1ZScsXG4gICAgJ2tleXVwJywgJ2tleXByZXNzJywgJ2tleWRvd24nLFxuICAgICdmaWx0ZXItYWJvcnQnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBtZW51ID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGRpYWxvZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBvcHRpb25JbmRleCA9IHJlZigtMSlcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gcmVmKCcnKVxuICAgIGNvbnN0IGRpYWxvZ0ZpZWxkRm9jdXNlZCA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBpbm5lckxvYWRpbmdJbmRpY2F0b3IgPSByZWYoZmFsc2UpXG5cbiAgICBsZXQgaW5wdXRUaW1lciwgaW5uZXJWYWx1ZUNhY2hlLFxuICAgICAgaGFzRGlhbG9nLCB1c2VySW5wdXRWYWx1ZSwgZmlsdGVySWQsIGRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgdHJhbnNpdGlvblNob3dDb21wdXRlZCwgc2VhcmNoQnVmZmVyLCBzZWFyY2hCdWZmZXJFeHBcblxuICAgIGNvbnN0IGlucHV0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgbWVudVJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IG1lbnVDb250ZW50UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBuYW1lUHJvcCA9IHVzZUZvcm1JbnB1dE5hbWVBdHRyKHByb3BzKVxuXG4gICAgY29uc3Qgb25Db21wb3NpdGlvbiA9IHVzZUtleUNvbXBvc2l0aW9uKG9uSW5wdXQpXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgQXJyYXkuaXNBcnJheShwcm9wcy5vcHRpb25zKVxuICAgICAgICA/IHByb3BzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgIDogMFxuICAgICkpXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9PT0gdm9pZCAwXG4gICAgICAgID8gKHByb3BzLm9wdGlvbnNEZW5zZSA9PT0gdHJ1ZSA/IDI0IDogNDgpXG4gICAgICAgIDogcHJvcHMudmlydHVhbFNjcm9sbEl0ZW1TaXplXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0LFxuICAgICAgc2Nyb2xsVG8sXG4gICAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZVxuICAgIH0gPSB1c2VWaXJ0dWFsU2Nyb2xsKHtcbiAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgsIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQsIGdldFZpcnR1YWxTY3JvbGxFbCxcbiAgICAgIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkXG4gICAgfSlcblxuICAgIGNvbnN0IHN0YXRlID0gdXNlRmllbGRTdGF0ZSgpXG5cbiAgICBjb25zdCBpbm5lclZhbHVlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgbWFwTnVsbCA9IHByb3BzLm1hcE9wdGlvbnMgPT09IHRydWUgJiYgcHJvcHMubXVsdGlwbGUgIT09IHRydWUsXG4gICAgICAgIHZhbCA9IHByb3BzLm1vZGVsVmFsdWUgIT09IHZvaWQgMCAmJiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gbnVsbCB8fCBtYXBOdWxsID09PSB0cnVlKVxuICAgICAgICAgID8gKHByb3BzLm11bHRpcGxlID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkocHJvcHMubW9kZWxWYWx1ZSkgPyBwcm9wcy5tb2RlbFZhbHVlIDogWyBwcm9wcy5tb2RlbFZhbHVlIF0pXG4gICAgICAgICAgOiBbXVxuXG4gICAgICBpZiAocHJvcHMubWFwT3B0aW9ucyA9PT0gdHJ1ZSAmJiBBcnJheS5pc0FycmF5KHByb3BzLm9wdGlvbnMpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gcHJvcHMubWFwT3B0aW9ucyA9PT0gdHJ1ZSAmJiBpbm5lclZhbHVlQ2FjaGUgIT09IHZvaWQgMFxuICAgICAgICAgID8gaW5uZXJWYWx1ZUNhY2hlXG4gICAgICAgICAgOiBbXVxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWwubWFwKHYgPT4gZ2V0T3B0aW9uKHYsIGNhY2hlKSlcblxuICAgICAgICByZXR1cm4gcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCAmJiBtYXBOdWxsID09PSB0cnVlXG4gICAgICAgICAgPyB2YWx1ZXMuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbClcbiAgICAgICAgICA6IHZhbHVlc1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsXG4gICAgfSlcblxuICAgIGNvbnN0IGlubmVyRmllbGRQcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHt9XG4gICAgICBmaWVsZFByb3BzTGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHByb3BzWyBrZXkgXVxuICAgICAgICBpZiAodmFsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBhY2NbIGtleSBdID0gdmFsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGlzT3B0aW9uc0RhcmsgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5vcHRpb25zRGFyayA9PT0gbnVsbFxuICAgICAgICA/IHN0YXRlLmlzRGFyay52YWx1ZVxuICAgICAgICA6IHByb3BzLm9wdGlvbnNEYXJrXG4gICAgKSlcblxuICAgIGNvbnN0IGhhc1ZhbHVlID0gY29tcHV0ZWQoKCkgPT4gZmllbGRWYWx1ZUlzRmlsbGVkKGlubmVyVmFsdWUudmFsdWUpKVxuXG4gICAgY29uc3QgY29tcHV0ZWRJbnB1dENsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IGNscyA9ICdxLWZpZWxkX19pbnB1dCBxLXBsYWNlaG9sZGVyIGNvbCdcblxuICAgICAgaWYgKHByb3BzLmhpZGVTZWxlY3RlZCA9PT0gdHJ1ZSB8fCBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWyBjbHMsIHByb3BzLmlucHV0Q2xhc3MgXVxuICAgICAgfVxuXG4gICAgICBjbHMgKz0gJyBxLWZpZWxkX19pbnB1dC0tcGFkZGluZydcblxuICAgICAgcmV0dXJuIHByb3BzLmlucHV0Q2xhc3MgPT09IHZvaWQgMFxuICAgICAgICA/IGNsc1xuICAgICAgICA6IFsgY2xzLCBwcm9wcy5pbnB1dENsYXNzIF1cbiAgICB9KVxuXG4gICAgY29uc3QgbWVudUNvbnRlbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAncS12aXJ0dWFsLXNjcm9sbC0taG9yaXpvbnRhbCcgOiAnJylcbiAgICAgICsgKHByb3BzLnBvcHVwQ29udGVudENsYXNzID8gJyAnICsgcHJvcHMucG9wdXBDb250ZW50Q2xhc3MgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBub09wdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRTdHJpbmcgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgaW5uZXJWYWx1ZS52YWx1ZVxuICAgICAgICAubWFwKG9wdCA9PiBnZXRPcHRpb25MYWJlbC52YWx1ZShvcHQpKVxuICAgICAgICAuam9pbignLCAnKVxuICAgIClcblxuICAgIGNvbnN0IG5lZWRzSHRtbEZuID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMub3B0aW9uc0h0bWwgPT09IHRydWVcbiAgICAgICAgPyAoKSA9PiB0cnVlXG4gICAgICAgIDogb3B0ID0+IG9wdCAhPT0gdm9pZCAwICYmIG9wdCAhPT0gbnVsbCAmJiBvcHQuaHRtbCA9PT0gdHJ1ZVxuICAgICkpXG5cbiAgICBjb25zdCB2YWx1ZUFzSHRtbCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc3BsYXlWYWx1ZUh0bWwgPT09IHRydWUgfHwgKFxuICAgICAgICBwcm9wcy5kaXNwbGF5VmFsdWUgPT09IHZvaWQgMCAmJiAoXG4gICAgICAgICAgcHJvcHMub3B0aW9uc0h0bWwgPT09IHRydWVcbiAgICAgICAgICB8fCBpbm5lclZhbHVlLnZhbHVlLnNvbWUobmVlZHNIdG1sRm4udmFsdWUpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApKVxuXG4gICAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnRhYmluZGV4IDogLTEpKVxuXG4gICAgY29uc3QgY29tYm9ib3hBdHRycyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICB0YWJpbmRleDogcHJvcHMudGFiaW5kZXgsXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMubGFiZWwsXG4gICAgICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6IHByb3BzLnVzZUlucHV0ID09PSB0cnVlID8gJ2xpc3QnIDogJ25vbmUnLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IG1lbnUudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1vd25zJzogYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9X2xiYCxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBgJHsgc3RhdGUudGFyZ2V0VWlkLnZhbHVlIH1fbGJgXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSA+PSAwKSB7XG4gICAgICAgIGF0dHJzWyAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JyBdID0gYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9XyR7IG9wdGlvbkluZGV4LnZhbHVlIH1gXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyc1xuICAgIH0pXG5cbiAgICBjb25zdCBsaXN0Ym94QXR0cnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhdHRycyA9IHtcbiAgICAgICAgaWQ6IGAkeyBzdGF0ZS50YXJnZXRVaWQudmFsdWUgfV9sYmAsXG4gICAgICAgIHJvbGU6ICdsaXN0Ym94JyxcbiAgICAgICAgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJzogcHJvcHMubXVsdGlwbGUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSA+PSAwKSB7XG4gICAgICAgIGF0dHJzWyAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JyBdID0gYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9XyR7IG9wdGlvbkluZGV4LnZhbHVlIH1gXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyc1xuICAgIH0pXG5cbiAgICBjb25zdCBzZWxlY3RlZFNjb3BlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIGlubmVyVmFsdWUudmFsdWUubWFwKChvcHQsIGkpID0+ICh7XG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgICBvcHQsXG4gICAgICAgIGh0bWw6IG5lZWRzSHRtbEZuLnZhbHVlKG9wdCksXG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICByZW1vdmVBdEluZGV4OiByZW1vdmVBdEluZGV4QW5kRm9jdXMsXG4gICAgICAgIHRvZ2dsZU9wdGlvbixcbiAgICAgICAgdGFiaW5kZXg6IHRhYmluZGV4LnZhbHVlXG4gICAgICB9KSlcbiAgICB9KVxuXG4gICAgY29uc3Qgb3B0aW9uU2NvcGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAodmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBmcm9tLCB0byB9ID0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWVcblxuICAgICAgcmV0dXJuIHByb3BzLm9wdGlvbnMuc2xpY2UoZnJvbSwgdG8pLm1hcCgob3B0LCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpc2FibGUgPSBpc09wdGlvbkRpc2FibGVkLnZhbHVlKG9wdCkgPT09IHRydWVcbiAgICAgICAgY29uc3QgaW5kZXggPSBmcm9tICsgaVxuXG4gICAgICAgIGNvbnN0IGl0ZW1Qcm9wcyA9IHtcbiAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICBhY3RpdmVDbGFzczogY29tcHV0ZWRPcHRpb25zU2VsZWN0ZWRDbGFzcy52YWx1ZSxcbiAgICAgICAgICBtYW51YWxGb2N1czogdHJ1ZSxcbiAgICAgICAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICAgICAgICBkaXNhYmxlLFxuICAgICAgICAgIHRhYmluZGV4OiAtMSxcbiAgICAgICAgICBkZW5zZTogcHJvcHMub3B0aW9uc0RlbnNlLFxuICAgICAgICAgIGRhcms6IGlzT3B0aW9uc0RhcmsudmFsdWUsXG4gICAgICAgICAgcm9sZTogJ29wdGlvbicsXG4gICAgICAgICAgaWQ6IGAkeyBzdGF0ZS50YXJnZXRVaWQudmFsdWUgfV8keyBpbmRleCB9YCxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7IHRvZ2dsZU9wdGlvbihvcHQpIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgICAgaXNPcHRpb25TZWxlY3RlZChvcHQpID09PSB0cnVlICYmIChpdGVtUHJvcHMuYWN0aXZlID0gdHJ1ZSlcbiAgICAgICAgICBvcHRpb25JbmRleC52YWx1ZSA9PT0gaW5kZXggJiYgKGl0ZW1Qcm9wcy5mb2N1c2VkID0gdHJ1ZSlcblxuICAgICAgICAgIGl0ZW1Qcm9wc1sgJ2FyaWEtc2VsZWN0ZWQnIF0gPSBpdGVtUHJvcHMuYWN0aXZlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJ1xuXG4gICAgICAgICAgaWYgKCRxLnBsYXRmb3JtLmlzLmRlc2t0b3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGl0ZW1Qcm9wcy5vbk1vdXNlbW92ZSA9ICgpID0+IHsgbWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiBzZXRPcHRpb25JbmRleChpbmRleCkgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgb3B0LFxuICAgICAgICAgIGh0bWw6IG5lZWRzSHRtbEZuLnZhbHVlKG9wdCksXG4gICAgICAgICAgbGFiZWw6IGdldE9wdGlvbkxhYmVsLnZhbHVlKG9wdCksXG4gICAgICAgICAgc2VsZWN0ZWQ6IGl0ZW1Qcm9wcy5hY3RpdmUsXG4gICAgICAgICAgZm9jdXNlZDogaXRlbVByb3BzLmZvY3VzZWQsXG4gICAgICAgICAgdG9nZ2xlT3B0aW9uLFxuICAgICAgICAgIHNldE9wdGlvbkluZGV4LFxuICAgICAgICAgIGl0ZW1Qcm9wc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCBkcm9wZG93bkFycm93SWNvbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRyb3Bkb3duSWNvbiAhPT0gdm9pZCAwXG4gICAgICAgID8gcHJvcHMuZHJvcGRvd25JY29uXG4gICAgICAgIDogJHEuaWNvblNldC5hcnJvdy5kcm9wZG93blxuICAgICkpXG5cbiAgICBjb25zdCBzcXVhcmVkTWVudSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vcHRpb25zQ292ZXIgPT09IGZhbHNlXG4gICAgICAmJiBwcm9wcy5vdXRsaW5lZCAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMuc3RhbmRvdXQgIT09IHRydWVcbiAgICAgICYmIHByb3BzLmJvcmRlcmxlc3MgIT09IHRydWVcbiAgICAgICYmIHByb3BzLnJvdW5kZWQgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjb21wdXRlZE9wdGlvbnNTZWxlY3RlZENsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMub3B0aW9uc1NlbGVjdGVkQ2xhc3MgIT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLm9wdGlvbnNTZWxlY3RlZENsYXNzXG4gICAgICAgIDogKHByb3BzLmNvbG9yICE9PSB2b2lkIDAgPyBgdGV4dC0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgICkpXG5cbiAgICAvLyByZXR1cm5zIG1ldGhvZCB0byBnZXQgdmFsdWUgb2YgYW4gb3B0aW9uO1xuICAgIC8vIHRha2VzIGludG8gYWNjb3VudCAnb3B0aW9uLXZhbHVlJyBwcm9wXG4gICAgY29uc3QgZ2V0T3B0aW9uVmFsdWUgPSBjb21wdXRlZCgoKSA9PiBnZXRQcm9wVmFsdWVGbihwcm9wcy5vcHRpb25WYWx1ZSwgJ3ZhbHVlJykpXG5cbiAgICAvLyByZXR1cm5zIG1ldGhvZCB0byBnZXQgbGFiZWwgb2YgYW4gb3B0aW9uO1xuICAgIC8vIHRha2VzIGludG8gYWNjb3VudCAnb3B0aW9uLWxhYmVsJyBwcm9wXG4gICAgY29uc3QgZ2V0T3B0aW9uTGFiZWwgPSBjb21wdXRlZCgoKSA9PiBnZXRQcm9wVmFsdWVGbihwcm9wcy5vcHRpb25MYWJlbCwgJ2xhYmVsJykpXG5cbiAgICAvLyByZXR1cm5zIG1ldGhvZCB0byB0ZWxsIGlmIGFuIG9wdGlvbiBpcyBkaXNhYmxlZDtcbiAgICAvLyB0YWtlcyBpbnRvIGFjY291bnQgJ29wdGlvbi1kaXNhYmxlJyBwcm9wXG4gICAgY29uc3QgaXNPcHRpb25EaXNhYmxlZCA9IGNvbXB1dGVkKCgpID0+IGdldFByb3BWYWx1ZUZuKHByb3BzLm9wdGlvbkRpc2FibGUsICdkaXNhYmxlJykpXG5cbiAgICBjb25zdCBpbm5lck9wdGlvbnNWYWx1ZSA9IGNvbXB1dGVkKCgpID0+IGlubmVyVmFsdWUudmFsdWUubWFwKG9wdCA9PiBnZXRPcHRpb25WYWx1ZS52YWx1ZShvcHQpKSlcblxuICAgIGNvbnN0IGlucHV0Q29udHJvbEV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGV2dCA9IHtcbiAgICAgICAgb25JbnB1dCxcbiAgICAgICAgLy8gU2FmYXJpIDwgMTAuMiAmIFVJV2ViVmlldyBkb2Vzbid0IGZpcmUgY29tcG9zaXRpb25lbmQgd2hlblxuICAgICAgICAvLyBzd2l0Y2hpbmcgZm9jdXMgYmVmb3JlIGNvbmZpcm1pbmcgY29tcG9zaXRpb24gY2hvaWNlXG4gICAgICAgIC8vIHRoaXMgYWxzbyBmaXhlcyB0aGUgaXNzdWUgd2hlcmUgc29tZSBicm93c2VycyBlLmcuIGlPUyBDaHJvbWVcbiAgICAgICAgLy8gZmlyZXMgXCJjaGFuZ2VcIiBpbnN0ZWFkIG9mIFwiaW5wdXRcIiBvbiBhdXRvY29tcGxldGUuXG4gICAgICAgIG9uQ2hhbmdlOiBvbkNvbXBvc2l0aW9uLFxuICAgICAgICBvbktleWRvd246IG9uVGFyZ2V0S2V5ZG93bixcbiAgICAgICAgb25LZXl1cDogb25UYXJnZXRBdXRvY29tcGxldGUsXG4gICAgICAgIG9uS2V5cHJlc3M6IG9uVGFyZ2V0S2V5cHJlc3MsXG4gICAgICAgIG9uRm9jdXM6IHNlbGVjdElucHV0VGV4dCxcbiAgICAgICAgb25DbGljayAoZSkgeyBoYXNEaWFsb2cgPT09IHRydWUgJiYgc3RvcChlKSB9XG4gICAgICB9XG5cbiAgICAgIGV2dC5vbkNvbXBvc2l0aW9uc3RhcnQgPSBldnQub25Db21wb3NpdGlvbnVwZGF0ZSA9IGV2dC5vbkNvbXBvc2l0aW9uZW5kID0gb25Db21wb3NpdGlvblxuXG4gICAgICByZXR1cm4gZXZ0XG4gICAgfSlcblxuICAgIHdhdGNoKGlubmVyVmFsdWUsIHZhbCA9PiB7XG4gICAgICBpbm5lclZhbHVlQ2FjaGUgPSB2YWxcblxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZVxuICAgICAgICAmJiBwcm9wcy5maWxsSW5wdXQgPT09IHRydWVcbiAgICAgICAgJiYgcHJvcHMubXVsdGlwbGUgIT09IHRydWVcbiAgICAgICAgLy8gUHJldmVudCByZS1lbnRlcmluZyBpbiBmaWx0ZXIgd2hpbGUgZmlsdGVyaW5nXG4gICAgICAgIC8vIEFsc28gcHJldmVudCBjbGVhcmluZyBpbnB1dFZhbHVlIHdoaWxlIGZpbHRlcmluZ1xuICAgICAgICAmJiBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgIT09IHRydWVcbiAgICAgICAgJiYgKChkaWFsb2cudmFsdWUgIT09IHRydWUgJiYgbWVudS52YWx1ZSAhPT0gdHJ1ZSkgfHwgaGFzVmFsdWUudmFsdWUgIT09IHRydWUpXG4gICAgICApIHtcbiAgICAgICAgdXNlcklucHV0VmFsdWUgIT09IHRydWUgJiYgcmVzZXRJbnB1dFZhbHVlKClcbiAgICAgICAgaWYgKGRpYWxvZy52YWx1ZSA9PT0gdHJ1ZSB8fCBtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgZmlsdGVyKCcnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgeyBpbW1lZGlhdGU6IHRydWUgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmZpbGxJbnB1dCwgcmVzZXRJbnB1dFZhbHVlKVxuXG4gICAgd2F0Y2gobWVudSwgdXBkYXRlTWVudSlcblxuICAgIHdhdGNoKHZpcnR1YWxTY3JvbGxMZW5ndGgsIHJlcmVuZGVyTWVudSlcblxuICAgIGZ1bmN0aW9uIGdldEVtaXR0aW5nT3B0aW9uVmFsdWUgKG9wdCkge1xuICAgICAgcmV0dXJuIHByb3BzLmVtaXRWYWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IGdldE9wdGlvblZhbHVlLnZhbHVlKG9wdClcbiAgICAgICAgOiBvcHRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBdEluZGV4IChpbmRleCkge1xuICAgICAgaWYgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuc2xpY2UoKVxuICAgICAgICAgIGVtaXQoJ3JlbW92ZScsIHsgaW5kZXgsIHZhbHVlOiBtb2RlbC5zcGxpY2UoaW5kZXgsIDEpWyAwIF0gfSlcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbnVsbClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUF0SW5kZXhBbmRGb2N1cyAoaW5kZXgpIHtcbiAgICAgIHJlbW92ZUF0SW5kZXgoaW5kZXgpXG4gICAgICBzdGF0ZS5mb2N1cygpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkIChvcHQsIHVuaXF1ZSkge1xuICAgICAgY29uc3QgdmFsID0gZ2V0RW1pdHRpbmdPcHRpb25WYWx1ZShvcHQpXG5cbiAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSkge1xuICAgICAgICBwcm9wcy5maWxsSW5wdXQgPT09IHRydWUgJiYgdXBkYXRlSW5wdXRWYWx1ZShcbiAgICAgICAgICBnZXRPcHRpb25MYWJlbC52YWx1ZShvcHQpLFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApXG5cbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWwpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZW1pdCgnYWRkJywgeyBpbmRleDogMCwgdmFsdWU6IHZhbCB9KVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gWyB2YWwgXSA6IHZhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh1bmlxdWUgPT09IHRydWUgJiYgaXNPcHRpb25TZWxlY3RlZChvcHQpID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMubWF4VmFsdWVzICE9PSB2b2lkIDAgJiYgcHJvcHMubW9kZWxWYWx1ZS5sZW5ndGggPj0gcHJvcHMubWF4VmFsdWVzKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBtb2RlbCA9IHByb3BzLm1vZGVsVmFsdWUuc2xpY2UoKVxuXG4gICAgICBlbWl0KCdhZGQnLCB7IGluZGV4OiBtb2RlbC5sZW5ndGgsIHZhbHVlOiB2YWwgfSlcbiAgICAgIG1vZGVsLnB1c2godmFsKVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVPcHRpb24gKG9wdCwga2VlcE9wZW4pIHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSB8fCBvcHQgPT09IHZvaWQgMCB8fCBpc09wdGlvbkRpc2FibGVkLnZhbHVlKG9wdCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9wdFZhbHVlID0gZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KVxuXG4gICAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUpIHtcbiAgICAgICAgaWYgKGtlZXBPcGVuICE9PSB0cnVlKSB7XG4gICAgICAgICAgdXBkYXRlSW5wdXRWYWx1ZShcbiAgICAgICAgICAgIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSA/IGdldE9wdGlvbkxhYmVsLnZhbHVlKG9wdCkgOiAnJyxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaGlkZVBvcHVwKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgIHx8IGlzRGVlcEVxdWFsKGdldE9wdGlvblZhbHVlLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSksIG9wdFZhbHVlKSAhPT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHByb3BzLmVtaXRWYWx1ZSA9PT0gdHJ1ZSA/IG9wdFZhbHVlIDogb3B0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAoaGFzRGlhbG9nICE9PSB0cnVlIHx8IGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSkgJiYgc3RhdGUuZm9jdXMoKVxuXG4gICAgICBzZWxlY3RJbnB1dFRleHQoKVxuXG4gICAgICBpZiAoaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgdmFsID0gcHJvcHMuZW1pdFZhbHVlID09PSB0cnVlID8gb3B0VmFsdWUgOiBvcHRcbiAgICAgICAgZW1pdCgnYWRkJywgeyBpbmRleDogMCwgdmFsdWU6IHZhbCB9KVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHByb3BzLm11bHRpcGxlID09PSB0cnVlID8gWyB2YWwgXSA6IHZhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIG1vZGVsID0gcHJvcHMubW9kZWxWYWx1ZS5zbGljZSgpLFxuICAgICAgICBpbmRleCA9IGlubmVyT3B0aW9uc1ZhbHVlLnZhbHVlLmZpbmRJbmRleCh2ID0+IGlzRGVlcEVxdWFsKHYsIG9wdFZhbHVlKSlcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgZW1pdCgncmVtb3ZlJywgeyBpbmRleCwgdmFsdWU6IG1vZGVsLnNwbGljZShpbmRleCwgMSlbIDAgXSB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChwcm9wcy5tYXhWYWx1ZXMgIT09IHZvaWQgMCAmJiBtb2RlbC5sZW5ndGggPj0gcHJvcHMubWF4VmFsdWVzKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWwgPSBwcm9wcy5lbWl0VmFsdWUgPT09IHRydWUgPyBvcHRWYWx1ZSA6IG9wdFxuXG4gICAgICAgIGVtaXQoJ2FkZCcsIHsgaW5kZXg6IG1vZGVsLmxlbmd0aCwgdmFsdWU6IHZhbCB9KVxuICAgICAgICBtb2RlbC5wdXNoKHZhbClcbiAgICAgIH1cblxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRPcHRpb25JbmRleCAoaW5kZXgpIHtcbiAgICAgIGlmICgkcS5wbGF0Zm9ybS5pcy5kZXNrdG9wICE9PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHZhbCA9IGluZGV4ID4gLTEgJiYgaW5kZXggPCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlXG4gICAgICAgID8gaW5kZXhcbiAgICAgICAgOiAtMVxuXG4gICAgICBpZiAob3B0aW9uSW5kZXgudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBvcHRpb25JbmRleC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1vdmVPcHRpb25TZWxlY3Rpb24gKG9mZnNldCA9IDEsIHNraXBJbnB1dFZhbHVlKSB7XG4gICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsZXQgaW5kZXggPSBvcHRpb25JbmRleC52YWx1ZVxuICAgICAgICBkbyB7XG4gICAgICAgICAgaW5kZXggPSBub3JtYWxpemVUb0ludGVydmFsKFxuICAgICAgICAgICAgaW5kZXggKyBvZmZzZXQsXG4gICAgICAgICAgICAtMSxcbiAgICAgICAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUgLSAxXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChpbmRleCAhPT0gLTEgJiYgaW5kZXggIT09IG9wdGlvbkluZGV4LnZhbHVlICYmIGlzT3B0aW9uRGlzYWJsZWQudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSkgPT09IHRydWUpXG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgICAgIHNldE9wdGlvbkluZGV4KGluZGV4KVxuICAgICAgICAgIHNjcm9sbFRvKGluZGV4KVxuXG4gICAgICAgICAgaWYgKHNraXBJbnB1dFZhbHVlICE9PSB0cnVlICYmIHByb3BzLnVzZUlucHV0ID09PSB0cnVlICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShpbmRleCA+PSAwXG4gICAgICAgICAgICAgID8gZ2V0T3B0aW9uTGFiZWwudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSlcbiAgICAgICAgICAgICAgOiBkZWZhdWx0SW5wdXRWYWx1ZVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE9wdGlvbiAodmFsdWUsIHZhbHVlQ2FjaGUpIHtcbiAgICAgIGNvbnN0IGZuID0gb3B0ID0+IGlzRGVlcEVxdWFsKGdldE9wdGlvblZhbHVlLnZhbHVlKG9wdCksIHZhbHVlKVxuICAgICAgcmV0dXJuIHByb3BzLm9wdGlvbnMuZmluZChmbikgfHwgdmFsdWVDYWNoZS5maW5kKGZuKSB8fCB2YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFByb3BWYWx1ZUZuIChwcm9wVmFsdWUsIGRlZmF1bHRWYWwpIHtcbiAgICAgIGNvbnN0IHZhbCA9IHByb3BWYWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gcHJvcFZhbHVlXG4gICAgICAgIDogZGVmYXVsdFZhbFxuXG4gICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHZhbFxuICAgICAgICA6IG9wdCA9PiAob3B0ICE9PSBudWxsICYmIHR5cGVvZiBvcHQgPT09ICdvYmplY3QnICYmIHZhbCBpbiBvcHQgPyBvcHRbIHZhbCBdIDogb3B0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzT3B0aW9uU2VsZWN0ZWQgKG9wdCkge1xuICAgICAgY29uc3QgdmFsID0gZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KVxuICAgICAgcmV0dXJuIGlubmVyT3B0aW9uc1ZhbHVlLnZhbHVlLmZpbmQodiA9PiBpc0RlZXBFcXVhbCh2LCB2YWwpKSAhPT0gdm9pZCAwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0SW5wdXRUZXh0IChlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLnVzZUlucHV0ID09PSB0cnVlXG4gICAgICAgICYmIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAmJiAoZSA9PT0gdm9pZCAwIHx8ICh0YXJnZXRSZWYudmFsdWUgPT09IGUudGFyZ2V0ICYmIGUudGFyZ2V0LnZhbHVlID09PSBzZWxlY3RlZFN0cmluZy52YWx1ZSkpXG4gICAgICApIHtcbiAgICAgICAgdGFyZ2V0UmVmLnZhbHVlLnNlbGVjdCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UYXJnZXRLZXl1cCAoZSkge1xuICAgICAgLy8gaWYgRVNDIGFuZCB3ZSBoYXZlIGFuIG9wZW5lZCBtZW51XG4gICAgICAvLyB0aGVuIHN0b3AgcHJvcGFnYXRpb24gKG1pZ2h0IGJlIGNhdWdodCBieSBhIFFEaWFsb2dcbiAgICAgIC8vIGFuZCBzbyBpdCB3aWxsIGFsc28gY2xvc2UgdGhlIFFEaWFsb2csIHdoaWNoIGlzIHdyb25nKVxuICAgICAgaWYgKGlzS2V5Q29kZShlLCAyNykgPT09IHRydWUgJiYgbWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdG9wKGUpXG4gICAgICAgIC8vIG9uIEVTQyB3ZSBuZWVkIHRvIGNsb3NlIHRoZSBkaWFsb2cgYWxzb1xuICAgICAgICBoaWRlUG9wdXAoKVxuICAgICAgICByZXNldElucHV0VmFsdWUoKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdrZXl1cCcsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UYXJnZXRBdXRvY29tcGxldGUgKGUpIHtcbiAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0XG5cbiAgICAgIGlmIChlLmtleUNvZGUgIT09IHZvaWQgMCkge1xuICAgICAgICBvblRhcmdldEtleXVwKGUpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBlLnRhcmdldC52YWx1ZSA9ICcnXG4gICAgICBjbGVhclRpbWVvdXQoaW5wdXRUaW1lcilcbiAgICAgIHJlc2V0SW5wdXRWYWx1ZSgpXG5cbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbmVlZGxlID0gdmFsdWUudG9Mb2NhbGVMb3dlckNhc2UoKVxuICAgICAgICBjb25zdCBmaW5kRm4gPSBleHRyYWN0Rm4gPT4ge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHByb3BzLm9wdGlvbnMuZmluZChvcHQgPT4gZXh0cmFjdEZuLnZhbHVlKG9wdCkudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gbmVlZGxlKVxuXG4gICAgICAgICAgaWYgKG9wdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW5uZXJWYWx1ZS52YWx1ZS5pbmRleE9mKG9wdGlvbikgPT09IC0xKSB7XG4gICAgICAgICAgICB0b2dnbGVPcHRpb24ob3B0aW9uKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhpZGVQb3B1cCgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWxsRm4gPSBhZnRlckZpbHRlciA9PiB7XG4gICAgICAgICAgaWYgKGZpbmRGbihnZXRPcHRpb25WYWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZmluZEZuKGdldE9wdGlvbkxhYmVsKSA9PT0gdHJ1ZSB8fCBhZnRlckZpbHRlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZmlsdGVyKHZhbHVlLCB0cnVlLCAoKSA9PiBmaWxsRm4odHJ1ZSkpXG4gICAgICAgIH1cblxuICAgICAgICBmaWxsRm4oKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLmNsZWFyVmFsdWUoZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhcmdldEtleXByZXNzIChlKSB7XG4gICAgICBlbWl0KCdrZXlwcmVzcycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UYXJnZXRLZXlkb3duIChlKSB7XG4gICAgICBlbWl0KCdrZXlkb3duJywgZSlcblxuICAgICAgaWYgKHNob3VsZElnbm9yZUtleShlKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3VmFsdWVNb2RlVmFsaWQgPSBpbnB1dFZhbHVlLnZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICAgJiYgKHByb3BzLm5ld1ZhbHVlTW9kZSAhPT0gdm9pZCAwIHx8IHByb3BzLm9uTmV3VmFsdWUgIT09IHZvaWQgMClcblxuICAgICAgY29uc3QgdGFiU2hvdWxkU2VsZWN0ID0gZS5zaGlmdEtleSAhPT0gdHJ1ZVxuICAgICAgICAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZVxuICAgICAgICAmJiAob3B0aW9uSW5kZXgudmFsdWUgPiAtMSB8fCBuZXdWYWx1ZU1vZGVWYWxpZCA9PT0gdHJ1ZSlcblxuICAgICAgLy8gZXNjYXBlXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICBwcmV2ZW50KGUpIC8vIHByZXZlbnQgY2xlYXJpbmcgdGhlIGlucHV0VmFsdWVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIHRhYlxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gOSAmJiB0YWJTaG91bGRTZWxlY3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGNsb3NlTWVudSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQgPT09IHZvaWQgMCB8fCBlLnRhcmdldC5pZCAhPT0gc3RhdGUudGFyZ2V0VWlkLnZhbHVlKSB7IHJldHVybiB9XG5cbiAgICAgIC8vIGRvd25cbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXlDb2RlID09PSA0MFxuICAgICAgICAmJiBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgIT09IHRydWVcbiAgICAgICAgJiYgbWVudS52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBzaG93UG9wdXAoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gYmFja3NwYWNlXG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5Q29kZSA9PT0gOFxuICAgICAgICAmJiBwcm9wcy5oaWRlU2VsZWN0ZWQgIT09IHRydWVcbiAgICAgICAgJiYgaW5wdXRWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgPT09IHRydWUgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJlbW92ZUF0SW5kZXgocHJvcHMubW9kZWxWYWx1ZS5sZW5ndGggLSAxKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLm11bHRpcGxlICE9PSB0cnVlICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGhvbWUsIGVuZCAtIDM2LCAzNVxuICAgICAgaWYgKFxuICAgICAgICAoZS5rZXlDb2RlID09PSAzNSB8fCBlLmtleUNvZGUgPT09IDM2KVxuICAgICAgICAmJiAodHlwZW9mIGlucHV0VmFsdWUudmFsdWUgIT09ICdzdHJpbmcnIHx8IGlucHV0VmFsdWUudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIG9wdGlvbkluZGV4LnZhbHVlID0gLTFcbiAgICAgICAgbW92ZU9wdGlvblNlbGVjdGlvbihlLmtleUNvZGUgPT09IDM2ID8gMSA6IC0xLCBwcm9wcy5tdWx0aXBsZSlcbiAgICAgIH1cblxuICAgICAgLy8gcGcgdXAsIHBnIGRvd24gLSAzMywgMzRcbiAgICAgIGlmIChcbiAgICAgICAgKGUua2V5Q29kZSA9PT0gMzMgfHwgZS5rZXlDb2RlID09PSAzNClcbiAgICAgICAgJiYgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBvcHRpb25JbmRleC52YWx1ZSA9IE1hdGgubWF4KFxuICAgICAgICAgIC0xLFxuICAgICAgICAgIE1hdGgubWluKFxuICAgICAgICAgICAgdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSxcbiAgICAgICAgICAgIG9wdGlvbkluZGV4LnZhbHVlICsgKGUua2V5Q29kZSA9PT0gMzMgPyAtMSA6IDEpICogdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLnZhbHVlLnZpZXdcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgbW92ZU9wdGlvblNlbGVjdGlvbihlLmtleUNvZGUgPT09IDMzID8gMSA6IC0xLCBwcm9wcy5tdWx0aXBsZSlcbiAgICAgIH1cblxuICAgICAgLy8gdXAsIGRvd25cbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgbW92ZU9wdGlvblNlbGVjdGlvbihlLmtleUNvZGUgPT09IDM4ID8gLTEgOiAxLCBwcm9wcy5tdWx0aXBsZSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3B0aW9uc0xlbmd0aCA9IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWVcblxuICAgICAgLy8gY2xlYXIgc2VhcmNoIGJ1ZmZlciBpZiBleHBpcmVkXG4gICAgICBpZiAoc2VhcmNoQnVmZmVyID09PSB2b2lkIDAgfHwgc2VhcmNoQnVmZmVyRXhwIDwgRGF0ZS5ub3coKSkge1xuICAgICAgICBzZWFyY2hCdWZmZXIgPSAnJ1xuICAgICAgfVxuXG4gICAgICAvLyBrZXlib2FyZCBzZWFyY2ggd2hlbiBub3QgaGF2aW5nIHVzZS1pbnB1dFxuICAgICAgaWYgKFxuICAgICAgICBvcHRpb25zTGVuZ3RoID4gMFxuICAgICAgICAmJiBwcm9wcy51c2VJbnB1dCAhPT0gdHJ1ZVxuICAgICAgICAmJiBlLmtleSAhPT0gdm9pZCAwXG4gICAgICAgICYmIGUua2V5Lmxlbmd0aCA9PT0gMSAvLyBwcmludGFibGUgY2hhclxuICAgICAgICAmJiBlLmFsdEtleSA9PT0gZS5jdHJsS2V5IC8vIG5vdCBrYmQgc2hvcnRjdXRcbiAgICAgICAgJiYgKGUua2V5Q29kZSAhPT0gMzIgfHwgc2VhcmNoQnVmZmVyLmxlbmd0aCA+IDApIC8vIHNwYWNlIGluIG1pZGRsZSBvZiBzZWFyY2hcbiAgICAgICkge1xuICAgICAgICBtZW51LnZhbHVlICE9PSB0cnVlICYmIHNob3dQb3B1cChlKVxuXG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgY2hhciA9IGUua2V5LnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAga2V5UmVwZWF0ID0gc2VhcmNoQnVmZmVyLmxlbmd0aCA9PT0gMSAmJiBzZWFyY2hCdWZmZXJbIDAgXSA9PT0gY2hhclxuXG4gICAgICAgIHNlYXJjaEJ1ZmZlckV4cCA9IERhdGUubm93KCkgKyAxNTAwXG4gICAgICAgIGlmIChrZXlSZXBlYXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgICBzZWFyY2hCdWZmZXIgKz0gY2hhclxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoUmUgPSBuZXcgUmVnRXhwKCdeJyArIHNlYXJjaEJ1ZmZlci5zcGxpdCgnJykubWFwKGwgPT4gKHJlRXNjYXBlTGlzdC5pbmRleE9mKGwpID4gLTEgPyAnXFxcXCcgKyBsIDogbCkpLmpvaW4oJy4qJyksICdpJylcblxuICAgICAgICBsZXQgaW5kZXggPSBvcHRpb25JbmRleC52YWx1ZVxuXG4gICAgICAgIGlmIChrZXlSZXBlYXQgPT09IHRydWUgfHwgaW5kZXggPCAwIHx8IHNlYXJjaFJlLnRlc3QoZ2V0T3B0aW9uTGFiZWwudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSkpICE9PSB0cnVlKSB7XG4gICAgICAgICAgZG8ge1xuICAgICAgICAgICAgaW5kZXggPSBub3JtYWxpemVUb0ludGVydmFsKGluZGV4ICsgMSwgLTEsIG9wdGlvbnNMZW5ndGggLSAxKVxuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAoaW5kZXggIT09IG9wdGlvbkluZGV4LnZhbHVlICYmIChcbiAgICAgICAgICAgIGlzT3B0aW9uRGlzYWJsZWQudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSkgPT09IHRydWVcbiAgICAgICAgICAgIHx8IHNlYXJjaFJlLnRlc3QoZ2V0T3B0aW9uTGFiZWwudmFsdWUocHJvcHMub3B0aW9uc1sgaW5kZXggXSkpICE9PSB0cnVlXG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICBzZXRPcHRpb25JbmRleChpbmRleClcbiAgICAgICAgICAgIHNjcm9sbFRvKGluZGV4KVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSAmJiBwcm9wcy5maWxsSW5wdXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIGVudGVyLCBzcGFjZSAod2hlbiBub3QgdXNpbmcgdXNlLWlucHV0IGFuZCBub3QgaW4gc2VhcmNoKSwgb3IgdGFiICh3aGVuIG5vdCB1c2luZyBtdWx0aXBsZSBhbmQgb3B0aW9uIHNlbGVjdGVkKVxuICAgICAgLy8gc2FtZSB0YXJnZXQgaXMgY2hlY2tlZCBhYm92ZVxuICAgICAgaWYgKFxuICAgICAgICBlLmtleUNvZGUgIT09IDEzXG4gICAgICAgICYmIChlLmtleUNvZGUgIT09IDMyIHx8IHByb3BzLnVzZUlucHV0ID09PSB0cnVlIHx8IHNlYXJjaEJ1ZmZlciAhPT0gJycpXG4gICAgICAgICYmIChlLmtleUNvZGUgIT09IDkgfHwgdGFiU2hvdWxkU2VsZWN0ID09PSBmYWxzZSlcbiAgICAgICkgeyByZXR1cm4gfVxuXG4gICAgICBlLmtleUNvZGUgIT09IDkgJiYgc3RvcEFuZFByZXZlbnQoZSlcblxuICAgICAgaWYgKG9wdGlvbkluZGV4LnZhbHVlID4gLTEgJiYgb3B0aW9uSW5kZXgudmFsdWUgPCBvcHRpb25zTGVuZ3RoKSB7XG4gICAgICAgIHRvZ2dsZU9wdGlvbihwcm9wcy5vcHRpb25zWyBvcHRpb25JbmRleC52YWx1ZSBdKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1ZhbHVlTW9kZVZhbGlkID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGRvbmUgPSAodmFsLCBtb2RlKSA9PiB7XG4gICAgICAgICAgaWYgKG1vZGUpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZU5ld1ZhbHVlTW9kZShtb2RlKSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RlID0gcHJvcHMubmV3VmFsdWVNb2RlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbCA9PT0gdm9pZCAwIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdXBkYXRlSW5wdXRWYWx1ZSgnJywgcHJvcHMubXVsdGlwbGUgIT09IHRydWUsIHRydWUpXG5cbiAgICAgICAgICBjb25zdCBmbiA9IG1vZGUgPT09ICd0b2dnbGUnID8gdG9nZ2xlT3B0aW9uIDogYWRkXG4gICAgICAgICAgZm4odmFsLCBtb2RlID09PSAnYWRkLXVuaXF1ZScpXG5cbiAgICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgICAgICAgaGlkZVBvcHVwKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMub25OZXdWYWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZW1pdCgnbmV3LXZhbHVlJywgaW5wdXRWYWx1ZS52YWx1ZSwgZG9uZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkb25lKGlucHV0VmFsdWUudmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjbG9zZU1lbnUoKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHNob3dQb3B1cCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlydHVhbFNjcm9sbEVsICgpIHtcbiAgICAgIHJldHVybiBoYXNEaWFsb2cgPT09IHRydWVcbiAgICAgICAgPyBtZW51Q29udGVudFJlZi52YWx1ZVxuICAgICAgICA6IChcbiAgICAgICAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZS5fX3FQb3J0YWxJbm5lclJlZi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAgICAgICA/IG1lbnVSZWYudmFsdWUuX19xUG9ydGFsSW5uZXJSZWYudmFsdWVcbiAgICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlydHVhbFNjcm9sbFRhcmdldCAoKSB7XG4gICAgICByZXR1cm4gZ2V0VmlydHVhbFNjcm9sbEVsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZWxlY3Rpb24gKCkge1xuICAgICAgaWYgKHByb3BzLmhpZGVTZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgaWYgKHNsb3RzWyAnc2VsZWN0ZWQtaXRlbScgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZFNjb3BlLnZhbHVlLm1hcChzY29wZSA9PiBzbG90c1sgJ3NlbGVjdGVkLWl0ZW0nIF0oc2NvcGUpKS5zbGljZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChzbG90cy5zZWxlY3RlZCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoc2xvdHMuc2VsZWN0ZWQoKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnVzZUNoaXBzID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZFNjb3BlLnZhbHVlLm1hcCgoc2NvcGUsIGkpID0+IGgoUUNoaXAsIHtcbiAgICAgICAgICBrZXk6ICdvcHRpb24tJyArIGksXG4gICAgICAgICAgcmVtb3ZhYmxlOiBzdGF0ZS5lZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBpc09wdGlvbkRpc2FibGVkLnZhbHVlKHNjb3BlLm9wdCkgIT09IHRydWUsXG4gICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgdGV4dENvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgb25SZW1vdmUgKCkgeyBzY29wZS5yZW1vdmVBdEluZGV4KGkpIH1cbiAgICAgICAgfSwgKCkgPT4gaCgnc3BhbicsIHtcbiAgICAgICAgICBjbGFzczogJ2VsbGlwc2lzJyxcbiAgICAgICAgICBbIHNjb3BlLmh0bWwgPT09IHRydWUgPyAnaW5uZXJIVE1MJyA6ICd0ZXh0Q29udGVudCcgXTogZ2V0T3B0aW9uTGFiZWwudmFsdWUoc2NvcGUub3B0KVxuICAgICAgICB9KSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgWyB2YWx1ZUFzSHRtbC52YWx1ZSA9PT0gdHJ1ZSA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50JyBdOiBwcm9wcy5kaXNwbGF5VmFsdWUgIT09IHZvaWQgMFxuICAgICAgICAgICAgPyBwcm9wcy5kaXNwbGF5VmFsdWVcbiAgICAgICAgICAgIDogc2VsZWN0ZWRTdHJpbmcudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBbGxPcHRpb25zICgpIHtcbiAgICAgIGlmIChub09wdGlvbnMudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHNsb3RzWyAnbm8tb3B0aW9uJyBdICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3RzWyAnbm8tb3B0aW9uJyBdKHsgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZS52YWx1ZSB9KVxuICAgICAgICAgIDogdm9pZCAwXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZuID0gc2xvdHMub3B0aW9uICE9PSB2b2lkIDBcbiAgICAgICAgPyBzbG90cy5vcHRpb25cbiAgICAgICAgOiBzY29wZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGgoUUl0ZW0sIHtcbiAgICAgICAgICAgIGtleTogc2NvcGUuaW5kZXgsXG4gICAgICAgICAgICAuLi5zY29wZS5pdGVtUHJvcHNcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaChcbiAgICAgICAgICAgICAgUUl0ZW1TZWN0aW9uLFxuICAgICAgICAgICAgICAoKSA9PiBoKFxuICAgICAgICAgICAgICAgIFFJdGVtTGFiZWwsXG4gICAgICAgICAgICAgICAgKCkgPT4gaCgnc3BhbicsIHtcbiAgICAgICAgICAgICAgICAgIFsgc2NvcGUuaHRtbCA9PT0gdHJ1ZSA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50JyBdOiBzY29wZS5sYWJlbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgIGxldCBvcHRpb25zID0gcGFkVmlydHVhbFNjcm9sbCgnZGl2Jywgb3B0aW9uU2NvcGUudmFsdWUubWFwKGZuKSlcblxuICAgICAgaWYgKHNsb3RzWyAnYmVmb3JlLW9wdGlvbnMnIF0gIT09IHZvaWQgMCkge1xuICAgICAgICBvcHRpb25zID0gc2xvdHNbICdiZWZvcmUtb3B0aW9ucycgXSgpLmNvbmNhdChvcHRpb25zKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaE1lcmdlU2xvdChzbG90c1sgJ2FmdGVyLW9wdGlvbnMnIF0sIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW5wdXQgKGZyb21EaWFsb2csIGlzVGFyZ2V0KSB7XG4gICAgICBjb25zdCBhdHRycyA9IGlzVGFyZ2V0ID09PSB0cnVlID8geyAuLi5jb21ib2JveEF0dHJzLnZhbHVlLCAuLi5zdGF0ZS5zcGxpdEF0dHJzLmF0dHJpYnV0ZXMudmFsdWUgfSA6IHZvaWQgMFxuXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICByZWY6IGlzVGFyZ2V0ID09PSB0cnVlID8gdGFyZ2V0UmVmIDogdm9pZCAwLFxuICAgICAgICBrZXk6ICdpX3QnLFxuICAgICAgICBjbGFzczogY29tcHV0ZWRJbnB1dENsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUudmFsdWUgIT09IHZvaWQgMCA/IGlucHV0VmFsdWUudmFsdWUgOiAnJyxcbiAgICAgICAgLy8gcmVxdWlyZWQgZm9yIEFuZHJvaWQgaW4gb3JkZXIgdG8gc2hvdyBFTlRFUiBrZXkgd2hlbiBpbiBmb3JtXG4gICAgICAgIHR5cGU6ICdzZWFyY2gnLFxuICAgICAgICAuLi5hdHRycyxcbiAgICAgICAgaWQ6IGlzVGFyZ2V0ID09PSB0cnVlID8gc3RhdGUudGFyZ2V0VWlkLnZhbHVlIDogdm9pZCAwLFxuICAgICAgICBtYXhsZW5ndGg6IHByb3BzLm1heGxlbmd0aCxcbiAgICAgICAgYXV0b2NvbXBsZXRlOiBwcm9wcy5hdXRvY29tcGxldGUsXG4gICAgICAgICdkYXRhLWF1dG9mb2N1cyc6IChmcm9tRGlhbG9nICE9PSB0cnVlICYmIHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSkgfHwgdm9pZCAwLFxuICAgICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSxcbiAgICAgICAgcmVhZG9ubHk6IHByb3BzLnJlYWRvbmx5ID09PSB0cnVlLFxuICAgICAgICAuLi5pbnB1dENvbnRyb2xFdmVudHMudmFsdWVcbiAgICAgIH1cblxuICAgICAgaWYgKGZyb21EaWFsb2cgIT09IHRydWUgJiYgaGFzRGlhbG9nID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuY2xhc3MpID09PSB0cnVlKSB7XG4gICAgICAgICAgZGF0YS5jbGFzcyA9IFsgLi4uZGF0YS5jbGFzcywgJ25vLXBvaW50ZXItZXZlbnRzJyBdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGF0YS5jbGFzcyArPSAnIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdpbnB1dCcsIGRhdGEpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25JbnB1dCAoZSkge1xuICAgICAgY2xlYXJUaW1lb3V0KGlucHV0VGltZXIpXG5cbiAgICAgIGlmIChlICYmIGUudGFyZ2V0ICYmIGUudGFyZ2V0LnFDb21wb3NpbmcgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUgfHwgJycpXG4gICAgICAvLyBtYXJrIGl0IGhlcmUgYXMgdXNlciBpbnB1dCBzbyB0aGF0IGlmIHVwZGF0ZUlucHV0VmFsdWUgaXMgY2FsbGVkXG4gICAgICAvLyBiZWZvcmUgZmlsdGVyIGlzIGNhbGxlZCB0aGUgaW5kaWNhdG9yIGlzIHJlc2V0XG4gICAgICB1c2VySW5wdXRWYWx1ZSA9IHRydWVcbiAgICAgIGRlZmF1bHRJbnB1dFZhbHVlID0gaW5wdXRWYWx1ZS52YWx1ZVxuXG4gICAgICBpZiAoXG4gICAgICAgIHN0YXRlLmZvY3VzZWQudmFsdWUgIT09IHRydWVcbiAgICAgICAgJiYgKGhhc0RpYWxvZyAhPT0gdHJ1ZSB8fCBkaWFsb2dGaWVsZEZvY3VzZWQudmFsdWUgPT09IHRydWUpXG4gICAgICApIHtcbiAgICAgICAgc3RhdGUuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25GaWx0ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICBpbnB1dFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZmlsdGVyKGlucHV0VmFsdWUudmFsdWUpXG4gICAgICAgIH0sIHByb3BzLmlucHV0RGVib3VuY2UpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW5wdXRWYWx1ZSAodmFsKSB7XG4gICAgICBpZiAoaW5wdXRWYWx1ZS52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIGlucHV0VmFsdWUudmFsdWUgPSB2YWxcbiAgICAgICAgZW1pdCgnaW5wdXQtdmFsdWUnLCB2YWwpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlSW5wdXRWYWx1ZSAodmFsLCBub0ZpbHRlcmluZywgaW50ZXJuYWwpIHtcbiAgICAgIHVzZXJJbnB1dFZhbHVlID0gaW50ZXJuYWwgIT09IHRydWVcblxuICAgICAgaWYgKHByb3BzLnVzZUlucHV0ID09PSB0cnVlKSB7XG4gICAgICAgIHNldElucHV0VmFsdWUodmFsKVxuXG4gICAgICAgIGlmIChub0ZpbHRlcmluZyA9PT0gdHJ1ZSB8fCBpbnRlcm5hbCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGRlZmF1bHRJbnB1dFZhbHVlID0gdmFsXG4gICAgICAgIH1cblxuICAgICAgICBub0ZpbHRlcmluZyAhPT0gdHJ1ZSAmJiBmaWx0ZXIodmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpbHRlciAodmFsLCBrZWVwQ2xvc2VkLCBhZnRlclVwZGF0ZUZuKSB7XG4gICAgICBpZiAocHJvcHMub25GaWx0ZXIgPT09IHZvaWQgMCB8fCAoa2VlcENsb3NlZCAhPT0gdHJ1ZSAmJiBzdGF0ZS5mb2N1c2VkLnZhbHVlICE9PSB0cnVlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBlbWl0KCdmaWx0ZXItYWJvcnQnKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9IHRydWVcbiAgICAgICAgaW5uZXJMb2FkaW5nSW5kaWNhdG9yLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHZhbCAhPT0gJydcbiAgICAgICAgJiYgcHJvcHMubXVsdGlwbGUgIT09IHRydWVcbiAgICAgICAgJiYgaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPiAwXG4gICAgICAgICYmIHVzZXJJbnB1dFZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmIHZhbCA9PT0gZ2V0T3B0aW9uTGFiZWwudmFsdWUoaW5uZXJWYWx1ZS52YWx1ZVsgMCBdKVxuICAgICAgKSB7XG4gICAgICAgIHZhbCA9ICcnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxvY2FsRmlsdGVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiAobWVudS52YWx1ZSA9IGZhbHNlKVxuICAgICAgfSwgMTApXG5cbiAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJJZClcbiAgICAgIGZpbHRlcklkID0gbG9jYWxGaWx0ZXJJZFxuXG4gICAgICBlbWl0KFxuICAgICAgICAnZmlsdGVyJyxcbiAgICAgICAgdmFsLFxuICAgICAgICAoZm4sIGFmdGVyRm4pID0+IHtcbiAgICAgICAgICBpZiAoKGtlZXBDbG9zZWQgPT09IHRydWUgfHwgc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSkgJiYgZmlsdGVySWQgPT09IGxvY2FsRmlsdGVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJJZClcblxuICAgICAgICAgICAgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIGZuKClcblxuICAgICAgICAgICAgLy8gaGlkZSBpbmRpY2F0b3IgdG8gYWxsb3cgYXJyb3cgdG8gYW5pbWF0ZVxuICAgICAgICAgICAgaW5uZXJMb2FkaW5nSW5kaWNhdG9yLnZhbHVlID0gZmFsc2VcblxuICAgICAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPSBmYWxzZVxuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChrZWVwQ2xvc2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBtZW51LnZhbHVlID09PSB0cnVlICYmIGhpZGVQb3B1cCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZU1lbnUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBtZW51LnZhbHVlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHR5cGVvZiBhZnRlckZuID09PSAnZnVuY3Rpb24nICYmIG5leHRUaWNrKCgpID0+IHsgYWZ0ZXJGbihwcm94eSkgfSlcbiAgICAgICAgICAgICAgdHlwZW9mIGFmdGVyVXBkYXRlRm4gPT09ICdmdW5jdGlvbicgJiYgbmV4dFRpY2soKCkgPT4geyBhZnRlclVwZGF0ZUZuKHByb3h5KSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSAmJiBmaWx0ZXJJZCA9PT0gbG9jYWxGaWx0ZXJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGZpbHRlcklkKVxuICAgICAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgICAgIGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIG1lbnUudmFsdWUgPT09IHRydWUgJiYgKG1lbnUudmFsdWUgPSBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1lbnUgKCkge1xuICAgICAgcmV0dXJuIGgoUU1lbnUsIHtcbiAgICAgICAgcmVmOiBtZW51UmVmLFxuICAgICAgICBjbGFzczogbWVudUNvbnRlbnRDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHByb3BzLnBvcHVwQ29udGVudFN0eWxlLFxuICAgICAgICBtb2RlbFZhbHVlOiBtZW51LnZhbHVlLFxuICAgICAgICBmaXQ6IHByb3BzLm1lbnVTaHJpbmsgIT09IHRydWUsXG4gICAgICAgIGNvdmVyOiBwcm9wcy5vcHRpb25zQ292ZXIgPT09IHRydWUgJiYgbm9PcHRpb25zLnZhbHVlICE9PSB0cnVlICYmIHByb3BzLnVzZUlucHV0ICE9PSB0cnVlLFxuICAgICAgICBhbmNob3I6IHByb3BzLm1lbnVBbmNob3IsXG4gICAgICAgIHNlbGY6IHByb3BzLm1lbnVTZWxmLFxuICAgICAgICBvZmZzZXQ6IHByb3BzLm1lbnVPZmZzZXQsXG4gICAgICAgIGRhcms6IGlzT3B0aW9uc0RhcmsudmFsdWUsXG4gICAgICAgIG5vUGFyZW50RXZlbnQ6IHRydWUsXG4gICAgICAgIG5vUmVmb2N1czogdHJ1ZSxcbiAgICAgICAgbm9Gb2N1czogdHJ1ZSxcbiAgICAgICAgc3F1YXJlOiBzcXVhcmVkTWVudS52YWx1ZSxcbiAgICAgICAgdHJhbnNpdGlvblNob3c6IHByb3BzLnRyYW5zaXRpb25TaG93LFxuICAgICAgICB0cmFuc2l0aW9uSGlkZTogcHJvcHMudHJhbnNpdGlvbkhpZGUsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IHRydWUsXG4gICAgICAgIC4uLmxpc3Rib3hBdHRycy52YWx1ZSxcbiAgICAgICAgb25TY3JvbGxQYXNzaXZlOiBvblZpcnR1YWxTY3JvbGxFdnQsXG4gICAgICAgIG9uQmVmb3JlU2hvdzogb25Db250cm9sUG9wdXBTaG93LFxuICAgICAgICBvbkJlZm9yZUhpZGU6IG9uTWVudUJlZm9yZUhpZGUsXG4gICAgICAgIG9uU2hvdzogb25NZW51U2hvd1xuICAgICAgfSwgZ2V0QWxsT3B0aW9ucylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1lbnVCZWZvcmVIaWRlIChlKSB7XG4gICAgICBvbkNvbnRyb2xQb3B1cEhpZGUoZSlcbiAgICAgIGNsb3NlTWVudSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25NZW51U2hvdyAoKSB7XG4gICAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EaWFsb2dGaWVsZEZvY3VzIChlKSB7XG4gICAgICBzdG9wKGUpXG4gICAgICB0YXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgdGFyZ2V0UmVmLnZhbHVlLmZvY3VzKClcbiAgICAgIGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9IHRydWVcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cucGFnZVhPZmZzZXQgfHwgd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDAsIDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EaWFsb2dGaWVsZEJsdXIgKGUpIHtcbiAgICAgIHN0b3AoZSlcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgZGlhbG9nRmllbGRGb2N1c2VkLnZhbHVlID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlhbG9nICgpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICAgIGgoUUZpZWxkLCB7XG4gICAgICAgICAgY2xhc3M6IGBjb2wtYXV0byAkeyBzdGF0ZS5maWVsZENsYXNzLnZhbHVlIH1gLFxuICAgICAgICAgIC4uLmlubmVyRmllbGRQcm9wcy52YWx1ZSxcbiAgICAgICAgICBmb3I6IHN0YXRlLnRhcmdldFVpZC52YWx1ZSxcbiAgICAgICAgICBkYXJrOiBpc09wdGlvbnNEYXJrLnZhbHVlLFxuICAgICAgICAgIHNxdWFyZTogdHJ1ZSxcbiAgICAgICAgICBsb2FkaW5nOiBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUsXG4gICAgICAgICAgaXRlbUFsaWduZWQ6IGZhbHNlLFxuICAgICAgICAgIGZpbGxlZDogdHJ1ZSxcbiAgICAgICAgICBzdGFja0xhYmVsOiBpbnB1dFZhbHVlLnZhbHVlLmxlbmd0aCA+IDAsXG4gICAgICAgICAgLi4uc3RhdGUuc3BsaXRBdHRycy5saXN0ZW5lcnMudmFsdWUsXG4gICAgICAgICAgb25Gb2N1czogb25EaWFsb2dGaWVsZEZvY3VzLFxuICAgICAgICAgIG9uQmx1cjogb25EaWFsb2dGaWVsZEJsdXJcbiAgICAgICAgfSwge1xuICAgICAgICAgIC4uLnNsb3RzLFxuICAgICAgICAgIHJhd0NvbnRyb2w6ICgpID0+IHN0YXRlLmdldENvbnRyb2wodHJ1ZSksXG4gICAgICAgICAgYmVmb3JlOiB2b2lkIDAsXG4gICAgICAgICAgYWZ0ZXI6IHZvaWQgMFxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBtZW51LnZhbHVlID09PSB0cnVlICYmIGNvbnRlbnQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogbWVudUNvbnRlbnRSZWYsXG4gICAgICAgICAgY2xhc3M6IG1lbnVDb250ZW50Q2xhc3MudmFsdWUgKyAnIHNjcm9sbCcsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnBvcHVwQ29udGVudFN0eWxlLFxuICAgICAgICAgIC4uLmxpc3Rib3hBdHRycy52YWx1ZSxcbiAgICAgICAgICBvbkNsaWNrOiBwcmV2ZW50LFxuICAgICAgICAgIG9uU2Nyb2xsUGFzc2l2ZTogb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgICAgIH0sIGdldEFsbE9wdGlvbnMoKSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoUURpYWxvZywge1xuICAgICAgICByZWY6IGRpYWxvZ1JlZixcbiAgICAgICAgbW9kZWxWYWx1ZTogZGlhbG9nLnZhbHVlLFxuICAgICAgICBwb3NpdGlvbjogcHJvcHMudXNlSW5wdXQgPT09IHRydWUgPyAndG9wJyA6IHZvaWQgMCxcbiAgICAgICAgdHJhbnNpdGlvblNob3c6IHRyYW5zaXRpb25TaG93Q29tcHV0ZWQsXG4gICAgICAgIHRyYW5zaXRpb25IaWRlOiBwcm9wcy50cmFuc2l0aW9uSGlkZSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIG9uQmVmb3JlU2hvdzogb25Db250cm9sUG9wdXBTaG93LFxuICAgICAgICBvbkJlZm9yZUhpZGU6IG9uRGlhbG9nQmVmb3JlSGlkZSxcbiAgICAgICAgb25IaWRlOiBvbkRpYWxvZ0hpZGUsXG4gICAgICAgIG9uU2hvdzogb25EaWFsb2dTaG93XG4gICAgICB9LCAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1zZWxlY3RfX2RpYWxvZydcbiAgICAgICAgICArIChpc09wdGlvbnNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNlbGVjdF9fZGlhbG9nLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICAgICArIChkaWFsb2dGaWVsZEZvY3VzZWQudmFsdWUgPT09IHRydWUgPyAnIHEtc2VsZWN0X19kaWFsb2ctLWZvY3VzZWQnIDogJycpXG4gICAgICB9LCBjb250ZW50KSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0JlZm9yZUhpZGUgKGUpIHtcbiAgICAgIG9uQ29udHJvbFBvcHVwSGlkZShlKVxuXG4gICAgICBpZiAoZGlhbG9nUmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGRpYWxvZ1JlZi52YWx1ZS5fX3VwZGF0ZVJlZm9jdXNUYXJnZXQoXG4gICAgICAgICAgc3RhdGUucm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCcucS1maWVsZF9fbmF0aXZlID4gW3RhYmluZGV4XTpsYXN0LWNoaWxkJylcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBzdGF0ZS5mb2N1c2VkLnZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0hpZGUgKGUpIHtcbiAgICAgIGhpZGVQb3B1cCgpXG4gICAgICBzdGF0ZS5mb2N1c2VkLnZhbHVlID09PSBmYWxzZSAmJiBlbWl0KCdibHVyJywgZSlcbiAgICAgIHJlc2V0SW5wdXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EaWFsb2dTaG93ICgpIHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgaWYgKFxuICAgICAgICAoZWwgPT09IG51bGwgfHwgZWwuaWQgIT09IHN0YXRlLnRhcmdldFVpZC52YWx1ZSlcbiAgICAgICAgJiYgdGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICYmIHRhcmdldFJlZi52YWx1ZSAhPT0gZWxcbiAgICAgICkge1xuICAgICAgICB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNZW51ICgpIHtcbiAgICAgIGlmIChkaWFsb2cudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIG9wdGlvbkluZGV4LnZhbHVlID0gLTFcblxuICAgICAgaWYgKG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbWVudS52YWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5mb2N1c2VkLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZmlsdGVySWQpXG4gICAgICAgIGZpbHRlcklkID0gdm9pZCAwXG5cbiAgICAgICAgaWYgKHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGVtaXQoJ2ZpbHRlci1hYm9ydCcpXG4gICAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgICBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1BvcHVwIChlKSB7XG4gICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChoYXNEaWFsb2cgPT09IHRydWUpIHtcbiAgICAgICAgc3RhdGUub25Db250cm9sRm9jdXNpbihlKVxuICAgICAgICBkaWFsb2cudmFsdWUgPSB0cnVlXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBzdGF0ZS5mb2N1cygpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25GaWx0ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICBmaWx0ZXIoaW5wdXRWYWx1ZS52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKG5vT3B0aW9ucy52YWx1ZSAhPT0gdHJ1ZSB8fCBzbG90c1sgJ25vLW9wdGlvbicgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG1lbnUudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZVBvcHVwICgpIHtcbiAgICAgIGRpYWxvZy52YWx1ZSA9IGZhbHNlXG4gICAgICBjbG9zZU1lbnUoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0SW5wdXRWYWx1ZSAoKSB7XG4gICAgICBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSAmJiB1cGRhdGVJbnB1dFZhbHVlKFxuICAgICAgICBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5maWxsSW5wdXQgPT09IHRydWUgJiYgaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPiAwXG4gICAgICAgICAgPyBnZXRPcHRpb25MYWJlbC52YWx1ZShpbm5lclZhbHVlLnZhbHVlWyAwIF0pIHx8ICcnXG4gICAgICAgICAgOiAnJyxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1lbnUgKHNob3cpIHtcbiAgICAgIGxldCBvcHRpb25JbmRleCA9IC0xXG5cbiAgICAgIGlmIChzaG93ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCB2YWwgPSBnZXRPcHRpb25WYWx1ZS52YWx1ZShpbm5lclZhbHVlLnZhbHVlWyAwIF0pXG4gICAgICAgICAgb3B0aW9uSW5kZXggPSBwcm9wcy5vcHRpb25zLmZpbmRJbmRleCh2ID0+IGlzRGVlcEVxdWFsKGdldE9wdGlvblZhbHVlLnZhbHVlKHYpLCB2YWwpKVxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwob3B0aW9uSW5kZXgpXG4gICAgICB9XG5cbiAgICAgIHNldE9wdGlvbkluZGV4KG9wdGlvbkluZGV4KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcmVuZGVyTWVudSAobmV3TGVuZ3RoLCBvbGRMZW5ndGgpIHtcbiAgICAgIGlmIChtZW51LnZhbHVlID09PSB0cnVlICYmIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoLTEsIHRydWUpXG5cbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIGlmIChtZW51LnZhbHVlID09PSB0cnVlICYmIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChuZXdMZW5ndGggPiBvbGRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIHVwZGF0ZU1lbnUodHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWVudVBvc2l0aW9uICgpIHtcbiAgICAgIGlmIChkaWFsb2cudmFsdWUgPT09IGZhbHNlICYmIG1lbnVSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgbWVudVJlZi52YWx1ZS51cGRhdGVQb3NpdGlvbigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Db250cm9sUG9wdXBTaG93IChlKSB7XG4gICAgICBlICE9PSB2b2lkIDAgJiYgc3RvcChlKVxuICAgICAgZW1pdCgncG9wdXAtc2hvdycsIGUpXG4gICAgICBzdGF0ZS5oYXNQb3B1cE9wZW4gPSB0cnVlXG4gICAgICBzdGF0ZS5vbkNvbnRyb2xGb2N1c2luKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Db250cm9sUG9wdXBIaWRlIChlKSB7XG4gICAgICBlICE9PSB2b2lkIDAgJiYgc3RvcChlKVxuICAgICAgZW1pdCgncG9wdXAtaGlkZScsIGUpXG4gICAgICBzdGF0ZS5oYXNQb3B1cE9wZW4gPSBmYWxzZVxuICAgICAgc3RhdGUub25Db250cm9sRm9jdXNvdXQoZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQcmVTdGF0ZSAoKSB7XG4gICAgICBoYXNEaWFsb2cgPSAkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgIT09IHRydWUgJiYgcHJvcHMuYmVoYXZpb3IgIT09ICdkaWFsb2cnXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiBwcm9wcy5iZWhhdmlvciAhPT0gJ21lbnUnICYmIChcbiAgICAgICAgICBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBzbG90c1sgJ25vLW9wdGlvbicgXSAhPT0gdm9pZCAwIHx8IHByb3BzLm9uRmlsdGVyICE9PSB2b2lkIDAgfHwgbm9PcHRpb25zLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgIClcblxuICAgICAgdHJhbnNpdGlvblNob3dDb21wdXRlZCA9ICRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSAmJiBoYXNEaWFsb2cgPT09IHRydWUgJiYgcHJvcHMudXNlSW5wdXQgPT09IHRydWVcbiAgICAgICAgPyAnZmFkZSdcbiAgICAgICAgOiBwcm9wcy50cmFuc2l0aW9uU2hvd1xuICAgIH1cblxuICAgIG9uQmVmb3JlVXBkYXRlKHVwZGF0ZVByZVN0YXRlKVxuICAgIG9uVXBkYXRlZCh1cGRhdGVNZW51UG9zaXRpb24pXG5cbiAgICB1cGRhdGVQcmVTdGF0ZSgpXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGlucHV0VGltZXIpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNob3dQb3B1cCwgaGlkZVBvcHVwLFxuICAgICAgcmVtb3ZlQXRJbmRleCwgYWRkLCB0b2dnbGVPcHRpb24sXG4gICAgICBnZXRPcHRpb25JbmRleDogKCkgPT4gb3B0aW9uSW5kZXgudmFsdWUsXG4gICAgICBzZXRPcHRpb25JbmRleCwgbW92ZU9wdGlvblNlbGVjdGlvbixcbiAgICAgIGZpbHRlciwgdXBkYXRlTWVudVBvc2l0aW9uLCB1cGRhdGVJbnB1dFZhbHVlLFxuICAgICAgaXNPcHRpb25TZWxlY3RlZCxcbiAgICAgIGdldEVtaXR0aW5nT3B0aW9uVmFsdWUsXG4gICAgICBpc09wdGlvbkRpc2FibGVkOiAoLi4uYXJncykgPT4gaXNPcHRpb25EaXNhYmxlZC52YWx1ZS5hcHBseShudWxsLCBhcmdzKSA9PT0gdHJ1ZSxcbiAgICAgIGdldE9wdGlvblZhbHVlOiAoLi4uYXJncykgPT4gZ2V0T3B0aW9uVmFsdWUudmFsdWUuYXBwbHkobnVsbCwgYXJncyksXG4gICAgICBnZXRPcHRpb25MYWJlbDogKC4uLmFyZ3MpID0+IGdldE9wdGlvbkxhYmVsLnZhbHVlLmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgfSlcblxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgIGlubmVyVmFsdWUsXG5cbiAgICAgIGZpZWxkQ2xhc3M6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIGBxLXNlbGVjdCBxLWZpZWxkLS1hdXRvLWhlaWdodCBxLXNlbGVjdC0td2l0aCR7IHByb3BzLnVzZUlucHV0ICE9PSB0cnVlID8gJ291dCcgOiAnJyB9LWlucHV0YFxuICAgICAgICArIGAgcS1zZWxlY3QtLXdpdGgkeyBwcm9wcy51c2VDaGlwcyAhPT0gdHJ1ZSA/ICdvdXQnIDogJycgfS1jaGlwc2BcbiAgICAgICAgKyBgIHEtc2VsZWN0LS0keyBwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSA/ICdtdWx0aXBsZScgOiAnc2luZ2xlJyB9YFxuICAgICAgKSxcblxuICAgICAgaW5wdXRSZWYsXG4gICAgICB0YXJnZXRSZWYsXG4gICAgICBoYXNWYWx1ZSxcbiAgICAgIHNob3dQb3B1cCxcblxuICAgICAgZmxvYXRpbmdMYWJlbDogY29tcHV0ZWQoKCkgPT5cbiAgICAgICAgKHByb3BzLmhpZGVTZWxlY3RlZCAhPT0gdHJ1ZSAmJiBoYXNWYWx1ZS52YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgfHwgdHlwZW9mIGlucHV0VmFsdWUudmFsdWUgPT09ICdudW1iZXInXG4gICAgICAgIHx8IGlucHV0VmFsdWUudmFsdWUubGVuZ3RoID4gMFxuICAgICAgICB8fCBmaWVsZFZhbHVlSXNGaWxsZWQocHJvcHMuZGlzcGxheVZhbHVlKVxuICAgICAgKSxcblxuICAgICAgZ2V0Q29udHJvbENoaWxkOiAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgZGlhbG9nLnZhbHVlID09PSB0cnVlIC8vIGRpYWxvZyBhbHdheXMgaGFzIG1lbnUgZGlzcGxheWVkLCBzbyBuZWVkIHRvIHJlbmRlciBpdFxuICAgICAgICAgICAgfHwgbm9PcHRpb25zLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICAgICB8fCBzbG90c1sgJ25vLW9wdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gaGFzRGlhbG9nID09PSB0cnVlID8gZ2V0RGlhbG9nKCkgOiBnZXRNZW51KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5oYXNQb3B1cE9wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBleHBsaWNpdGx5IHNldCBpdCBvdGhlcndpc2UgVEFCIHdpbGwgbm90IGJsdXIgY29tcG9uZW50XG4gICAgICAgICAgc3RhdGUuaGFzUG9wdXBPcGVuID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY29udHJvbEV2ZW50czoge1xuICAgICAgICBvbkZvY3VzaW4gKGUpIHsgc3RhdGUub25Db250cm9sRm9jdXNpbihlKSB9LFxuICAgICAgICBvbkZvY3Vzb3V0IChlKSB7XG4gICAgICAgICAgc3RhdGUub25Db250cm9sRm9jdXNvdXQoZSwgKCkgPT4ge1xuICAgICAgICAgICAgcmVzZXRJbnB1dFZhbHVlKClcbiAgICAgICAgICAgIGNsb3NlTWVudSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljayAoZSkge1xuICAgICAgICAgIC8vIGxhYmVsIGZyb20gUUZpZWxkIHdpbGwgcHJvcGFnYXRlIGNsaWNrIG9uIHRoZSBpbnB1dFxuICAgICAgICAgIHByZXZlbnQoZSlcblxuICAgICAgICAgIGlmIChoYXNEaWFsb2cgIT09IHRydWUgJiYgbWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xvc2VNZW51KClcbiAgICAgICAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2hvd1BvcHVwKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldENvbnRyb2w6IGZyb21EaWFsb2cgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGdldFNlbGVjdGlvbigpXG4gICAgICAgIGNvbnN0IGlzVGFyZ2V0ID0gZnJvbURpYWxvZyA9PT0gdHJ1ZSB8fCBkaWFsb2cudmFsdWUgIT09IHRydWUgfHwgaGFzRGlhbG9nICE9PSB0cnVlXG5cbiAgICAgICAgaWYgKHByb3BzLnVzZUlucHV0ID09PSB0cnVlKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChnZXRJbnB1dChmcm9tRGlhbG9nLCBpc1RhcmdldCkpXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlcmUgY2FuIGJlIG9ubHkgb25lICh3aGVuIGRpYWxvZyBpcyBvcGVuZWQgdGhlIGNvbnRyb2wgaW4gZGlhbG9nIHNob3VsZCBiZSB0YXJnZXQpXG4gICAgICAgIGVsc2UgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgYXR0cnMgPSBpc1RhcmdldCA9PT0gdHJ1ZSA/IGNvbWJvYm94QXR0cnMudmFsdWUgOiB2b2lkIDBcblxuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgcmVmOiBpc1RhcmdldCA9PT0gdHJ1ZSA/IHRhcmdldFJlZiA6IHZvaWQgMCxcbiAgICAgICAgICAgICAga2V5OiAnZF90JyxcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fZm9jdXMtdGFyZ2V0JyxcbiAgICAgICAgICAgICAgaWQ6IGlzVGFyZ2V0ID09PSB0cnVlID8gc3RhdGUudGFyZ2V0VWlkLnZhbHVlIDogdm9pZCAwLFxuICAgICAgICAgICAgICByZWFkb25seTogdHJ1ZSxcbiAgICAgICAgICAgICAgJ2RhdGEtYXV0b2ZvY3VzJzogKGZyb21EaWFsb2cgIT09IHRydWUgJiYgcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlKSB8fCB2b2lkIDAsXG4gICAgICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgICAgICBvbktleWRvd246IG9uVGFyZ2V0S2V5ZG93bixcbiAgICAgICAgICAgICAgb25LZXl1cDogb25UYXJnZXRLZXl1cCxcbiAgICAgICAgICAgICAgb25LZXlwcmVzczogb25UYXJnZXRLZXlwcmVzc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoaXNUYXJnZXQgPT09IHRydWUgJiYgdHlwZW9mIHByb3BzLmF1dG9jb21wbGV0ZSA9PT0gJ3N0cmluZycgJiYgcHJvcHMuYXV0b2NvbXBsZXRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICAgIGgoJ2lucHV0Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAncS1zZWxlY3RfX2F1dG9jb21wbGV0ZS1pbnB1dCcsXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBwcm9wcy5hdXRvY29tcGxldGUsXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIG9uS2V5dXA6IG9uVGFyZ2V0QXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVQcm9wLnZhbHVlICE9PSB2b2lkIDAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBpbm5lck9wdGlvbnNWYWx1ZS52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3Qgb3B0cyA9IGlubmVyT3B0aW9uc1ZhbHVlLnZhbHVlLm1hcCh2YWx1ZSA9PiBoKCdvcHRpb24nLCB7IHZhbHVlLCBzZWxlY3RlZDogdHJ1ZSB9KSlcblxuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgbmFtZTogbmFtZVByb3AudmFsdWUsXG4gICAgICAgICAgICAgIG11bHRpcGxlOiBwcm9wcy5tdWx0aXBsZVxuICAgICAgICAgICAgfSwgb3B0cylcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhdHRycyA9IHByb3BzLnVzZUlucHV0ID09PSB0cnVlIHx8IGlzVGFyZ2V0ICE9PSB0cnVlID8gdm9pZCAwIDogc3RhdGUuc3BsaXRBdHRycy5hdHRyaWJ1dGVzLnZhbHVlXG5cbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtZmllbGRfX25hdGl2ZSByb3cgaXRlbXMtY2VudGVyJyxcbiAgICAgICAgICAuLi5hdHRyc1xuICAgICAgICB9LCBjaGlsZClcbiAgICAgIH0sXG5cbiAgICAgIGdldElubmVyQXBwZW5kOiAoKSA9PiAoXG4gICAgICAgIHByb3BzLmxvYWRpbmcgIT09IHRydWUgJiYgaW5uZXJMb2FkaW5nSW5kaWNhdG9yLnZhbHVlICE9PSB0cnVlICYmIHByb3BzLmhpZGVEcm9wZG93bkljb24gIT09IHRydWVcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiAncS1zZWxlY3RfX2Ryb3Bkb3duLWljb24nICsgKG1lbnUudmFsdWUgPT09IHRydWUgPyAnIHJvdGF0ZS0xODAnIDogJycpLFxuICAgICAgICAgICAgICAgIG5hbWU6IGRyb3Bkb3duQXJyb3dJY29uLnZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBudWxsXG4gICAgICApXG4gICAgfSlcblxuICAgIHJldHVybiB1c2VGaWVsZChzdGF0ZSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlU2l6ZSwgeyB1c2VTaXplUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zaXplLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgZGVmYXVsdFNpemVzID0ge1xuICB4czogMixcbiAgc206IDQsXG4gIG1kOiA2LFxuICBsZzogMTAsXG4gIHhsOiAxNFxufVxuXG5mdW5jdGlvbiB3aWR0aCAodmFsLCByZXZlcnNlLCAkcSkge1xuICByZXR1cm4ge1xuICAgIHRyYW5zZm9ybTogcmV2ZXJzZSA9PT0gdHJ1ZVxuICAgICAgPyBgdHJhbnNsYXRlWCgkeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICctJyA6ICcnIH0xMDAlKSBzY2FsZTNkKCR7IC12YWwgfSwxLDEpYFxuICAgICAgOiBgc2NhbGUzZCgkeyB2YWwgfSwxLDEpYFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTGluZWFyUHJvZ3Jlc3MnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZVNpemVQcm9wcyxcblxuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAwXG4gICAgfSxcbiAgICBidWZmZXI6IE51bWJlcixcblxuICAgIGNvbG9yOiBTdHJpbmcsXG4gICAgdHJhY2tDb2xvcjogU3RyaW5nLFxuXG4gICAgcmV2ZXJzZTogQm9vbGVhbixcbiAgICBzdHJpcGU6IEJvb2xlYW4sXG4gICAgaW5kZXRlcm1pbmF0ZTogQm9vbGVhbixcbiAgICBxdWVyeTogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuXG4gICAgYW5pbWF0aW9uU3BlZWQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDIxMDBcbiAgICB9LFxuXG4gICAgaW5zdGFudEZlZWRiYWNrOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHByb3h5LiRxKVxuICAgIGNvbnN0IHNpemVTdHlsZSA9IHVzZVNpemUocHJvcHMsIGRlZmF1bHRTaXplcylcblxuICAgIGNvbnN0IG1vdGlvbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmluZGV0ZXJtaW5hdGUgPT09IHRydWUgfHwgcHJvcHMucXVlcnkgPT09IHRydWUpXG4gICAgY29uc3Qgd2lkdGhSZXZlcnNlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMucmV2ZXJzZSAhPT0gcHJvcHMucXVlcnkpXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgLi4uKHNpemVTdHlsZS52YWx1ZSAhPT0gbnVsbCA/IHNpemVTdHlsZS52YWx1ZSA6IHt9KSxcbiAgICAgICctLXEtbGluZWFyLXByb2dyZXNzLXNwZWVkJzogYCR7IHByb3BzLmFuaW1hdGlvblNwZWVkIH1tc2BcbiAgICB9KSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtbGluZWFyLXByb2dyZXNzJ1xuICAgICAgKyAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBwcm9wcy5jb2xvciB9YCA6ICcnKVxuICAgICAgKyAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSB8fCBwcm9wcy5xdWVyeSA9PT0gdHJ1ZSA/ICcgcS1saW5lYXItcHJvZ3Jlc3MtLXJldmVyc2UnIDogJycpXG4gICAgICArIChwcm9wcy5yb3VuZGVkID09PSB0cnVlID8gJyByb3VuZGVkLWJvcmRlcnMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgdHJhY2tTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHdpZHRoKHByb3BzLmJ1ZmZlciAhPT0gdm9pZCAwID8gcHJvcHMuYnVmZmVyIDogMSwgd2lkdGhSZXZlcnNlLnZhbHVlLCBwcm94eS4kcSkpXG4gICAgY29uc3QgdHJhY2tDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1saW5lYXItcHJvZ3Jlc3NfX3RyYWNrIGFic29sdXRlLWZ1bGwnXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX3RyYWNrLS13aXRoJHsgcHJvcHMuaW5zdGFudEZlZWRiYWNrID09PSB0cnVlID8gJ291dCcgOiAnJyB9LXRyYW5zaXRpb25gXG4gICAgICArIGAgcS1saW5lYXItcHJvZ3Jlc3NfX3RyYWNrLS0keyBpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnZGFyaycgOiAnbGlnaHQnIH1gXG4gICAgICArIChwcm9wcy50cmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLnRyYWNrQ29sb3IgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBtb2RlbFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gd2lkdGgobW90aW9uLnZhbHVlID09PSB0cnVlID8gMSA6IHByb3BzLnZhbHVlLCB3aWR0aFJldmVyc2UudmFsdWUsIHByb3h5LiRxKSlcbiAgICBjb25zdCBtb2RlbENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxpbmVhci1wcm9ncmVzc19fbW9kZWwgYWJzb2x1dGUtZnVsbCdcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fbW9kZWwtLXdpdGgkeyBwcm9wcy5pbnN0YW50RmVlZGJhY2sgPT09IHRydWUgPyAnb3V0JyA6ICcnIH0tdHJhbnNpdGlvbmBcbiAgICAgICsgYCBxLWxpbmVhci1wcm9ncmVzc19fbW9kZWwtLSR7IG1vdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/ICdpbicgOiAnJyB9ZGV0ZXJtaW5hdGVgXG4gICAgKVxuXG4gICAgY29uc3Qgc3RyaXBlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoeyB3aWR0aDogYCR7IHByb3BzLnZhbHVlICogMTAwIH0lYCB9KSlcbiAgICBjb25zdCBzdHJpcGVDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1saW5lYXItcHJvZ3Jlc3NfX3N0cmlwZSBhYnNvbHV0ZS0keyBwcm9wcy5yZXZlcnNlID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyB9YFxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiB0cmFja0NsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogbW9kZWxDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogbW9kZWxTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5zdHJpcGUgPT09IHRydWUgJiYgbW90aW9uLnZhbHVlID09PSBmYWxzZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHN0cmlwZUNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBzdHJpcGVTdHlsZS52YWx1ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxuICAgICAgICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICAgICAgICdhcmlhLXZhbHVlbWF4JzogMSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5pbmRldGVybWluYXRlID09PSB0cnVlXG4gICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICA6IHByb3BzLnZhbHVlXG4gICAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNoaWxkKSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbkJlZm9yZU1vdW50LCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgSGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5LmpzJ1xuaW1wb3J0IHsgdm1IYXNSb3V0ZXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG5sZXQgY291bnRlciA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZUZ1bGxzY3JlZW5Qcm9wcyA9IHtcbiAgZnVsbHNjcmVlbjogQm9vbGVhbixcbiAgbm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0OiBCb29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCB1c2VGdWxsc2NyZWVuRW1pdHMgPSBbICd1cGRhdGU6ZnVsbHNjcmVlbicsICdmdWxsc2NyZWVuJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cblxuICBsZXQgaGlzdG9yeUVudHJ5LCBmdWxsc2NyZWVuRmlsbGVyTm9kZSwgY29udGFpbmVyXG4gIGNvbnN0IGluRnVsbHNjcmVlbiA9IHJlZihmYWxzZSlcblxuICB2bUhhc1JvdXRlcih2bSkgPT09IHRydWUgJiYgd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCAoKSA9PiB7XG4gICAgcHJvcHMubm9Sb3V0ZUZ1bGxzY3JlZW5FeGl0ICE9PSB0cnVlICYmIGV4aXRGdWxsc2NyZWVuKClcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5mdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBpZiAoaW5GdWxsc2NyZWVuLnZhbHVlICE9PSB2KSB7XG4gICAgICB0b2dnbGVGdWxsc2NyZWVuKClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goaW5GdWxsc2NyZWVuLCB2ID0+IHtcbiAgICBlbWl0KCd1cGRhdGU6ZnVsbHNjcmVlbicsIHYpXG4gICAgZW1pdCgnZnVsbHNjcmVlbicsIHYpXG4gIH0pXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbiAoKSB7XG4gICAgaWYgKGluRnVsbHNjcmVlbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgZXhpdEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNldEZ1bGxzY3JlZW4oKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IHRydWVcbiAgICBjb250YWluZXIgPSBwcm94eS4kZWwucGFyZW50Tm9kZVxuICAgIGNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoZnVsbHNjcmVlbkZpbGxlck5vZGUsIHByb3h5LiRlbClcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb3h5LiRlbClcblxuICAgIGNvdW50ZXIrK1xuICAgIGlmIChjb3VudGVyID09PSAxKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3EtYm9keS0tZnVsbHNjcmVlbi1taXhpbicpXG4gICAgfVxuXG4gICAgaGlzdG9yeUVudHJ5ID0ge1xuICAgICAgaGFuZGxlcjogZXhpdEZ1bGxzY3JlZW5cbiAgICB9XG4gICAgSGlzdG9yeS5hZGQoaGlzdG9yeUVudHJ5KVxuICB9XG5cbiAgZnVuY3Rpb24gZXhpdEZ1bGxzY3JlZW4gKCkge1xuICAgIGlmIChpbkZ1bGxzY3JlZW4udmFsdWUgIT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChoaXN0b3J5RW50cnkgIT09IHZvaWQgMCkge1xuICAgICAgSGlzdG9yeS5yZW1vdmUoaGlzdG9yeUVudHJ5KVxuICAgICAgaGlzdG9yeUVudHJ5ID0gdm9pZCAwXG4gICAgfVxuXG4gICAgY29udGFpbmVyLnJlcGxhY2VDaGlsZChwcm94eS4kZWwsIGZ1bGxzY3JlZW5GaWxsZXJOb2RlKVxuICAgIGluRnVsbHNjcmVlbi52YWx1ZSA9IGZhbHNlXG5cbiAgICBjb3VudGVyID0gTWF0aC5tYXgoMCwgY291bnRlciAtIDEpXG5cbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWZ1bGxzY3JlZW4tbWl4aW4nKVxuXG4gICAgICBpZiAocHJveHkuJGVsLnNjcm9sbEludG9WaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByb3h5LiRlbC5zY3JvbGxJbnRvVmlldygpIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgZnVsbHNjcmVlbkZpbGxlck5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgIHByb3BzLmZ1bGxzY3JlZW4gPT09IHRydWUgJiYgc2V0RnVsbHNjcmVlbigpXG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KGV4aXRGdWxsc2NyZWVuKVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgdG9nZ2xlRnVsbHNjcmVlbixcbiAgICBzZXRGdWxsc2NyZWVuLFxuICAgIGV4aXRGdWxsc2NyZWVuXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBpbkZ1bGxzY3JlZW4sXG4gICAgdG9nZ2xlRnVsbHNjcmVlblxuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc29ydERhdGUgKGEsIGIpIHtcbiAgcmV0dXJuIChuZXcgRGF0ZShhKSkgLSAobmV3IERhdGUoYikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0Qm9vbGVhbiAoYSwgYikge1xuICByZXR1cm4gYSAmJiAhYlxuICAgID8gLTFcbiAgICA6ICghYSAmJiBiID8gMSA6IDApXG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgc29ydERhdGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3NvcnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNEYXRlLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVTb3J0UHJvcHMgPSB7XG4gIHNvcnRNZXRob2Q6IEZ1bmN0aW9uLFxuICBiaW5hcnlTdGF0ZVNvcnQ6IEJvb2xlYW4sXG4gIGNvbHVtblNvcnRPcmRlcjoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA9PT0gJ2FkJyB8fCB2ID09PSAnZGEnLFxuICAgIGRlZmF1bHQ6ICdhZCdcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVTb3J0IChwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBjb2xMaXN0LCBzZXRQYWdpbmF0aW9uKSB7XG4gIGNvbnN0IGNvbHVtblRvU29ydCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHNvcnRCeSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gc29ydEJ5XG4gICAgICA/IGNvbExpc3QudmFsdWUuZmluZChkZWYgPT4gZGVmLm5hbWUgPT09IHNvcnRCeSkgfHwgbnVsbFxuICAgICAgOiBudWxsXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRTb3J0TWV0aG9kID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnNvcnRNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5zb3J0TWV0aG9kXG4gICAgICA6IChkYXRhLCBzb3J0QnksIGRlc2NlbmRpbmcpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2wgPSBjb2xMaXN0LnZhbHVlLmZpbmQoZGVmID0+IGRlZi5uYW1lID09PSBzb3J0QnkpXG4gICAgICAgICAgaWYgKGNvbCA9PT0gdm9pZCAwIHx8IGNvbC5maWVsZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBkaXIgPSBkZXNjZW5kaW5nID09PSB0cnVlID8gLTEgOiAxLFxuICAgICAgICAgICAgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICA/IHYgPT4gY29sLmZpZWxkKHYpXG4gICAgICAgICAgICAgIDogdiA9PiB2WyBjb2wuZmllbGQgXVxuXG4gICAgICAgICAgcmV0dXJuIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgbGV0XG4gICAgICAgICAgICAgIEEgPSB2YWwoYSksXG4gICAgICAgICAgICAgIEIgPSB2YWwoYilcblxuICAgICAgICAgICAgaWYgKEEgPT09IG51bGwgfHwgQSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAtMSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEIgPT09IG51bGwgfHwgQiA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiAxICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sLnNvcnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm4gY29sLnNvcnQoQSwgQiwgYSwgYikgKiBkaXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc051bWJlcihBKSA9PT0gdHJ1ZSAmJiBpc051bWJlcihCKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gKEEgLSBCKSAqIGRpclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRGF0ZShBKSA9PT0gdHJ1ZSAmJiBpc0RhdGUoQikgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNvcnREYXRlKEEsIEIpICogZGlyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIEEgPT09ICdib29sZWFuJyAmJiB0eXBlb2YgQiA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoQSAtIEIpICogZGlyXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFsgQSwgQiBdID0gWyBBLCBCIF0ubWFwKHMgPT4gKHMgKyAnJykudG9Mb2NhbGVTdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuXG4gICAgICAgICAgICByZXR1cm4gQSA8IEJcbiAgICAgICAgICAgICAgPyAtMSAqIGRpclxuICAgICAgICAgICAgICA6IChBID09PSBCID8gMCA6IGRpcilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICkpXG5cbiAgZnVuY3Rpb24gc29ydCAoY29sIC8qIFN0cmluZyhjb2wgbmFtZSkgb3IgT2JqZWN0KGNvbCBkZWZpbml0aW9uKSAqLykge1xuICAgIGxldCBzb3J0T3JkZXIgPSBwcm9wcy5jb2x1bW5Tb3J0T3JkZXJcblxuICAgIGlmIChpc09iamVjdChjb2wpID09PSB0cnVlKSB7XG4gICAgICBpZiAoY29sLnNvcnRPcmRlcikge1xuICAgICAgICBzb3J0T3JkZXIgPSBjb2wuc29ydE9yZGVyXG4gICAgICB9XG5cbiAgICAgIGNvbCA9IGNvbC5uYW1lXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc3QgZGVmID0gY29sTGlzdC52YWx1ZS5maW5kKGRlZiA9PiBkZWYubmFtZSA9PT0gY29sKVxuICAgICAgaWYgKGRlZiAhPT0gdm9pZCAwICYmIGRlZi5zb3J0T3JkZXIpIHtcbiAgICAgICAgc29ydE9yZGVyID0gZGVmLnNvcnRPcmRlclxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB7IHNvcnRCeSwgZGVzY2VuZGluZyB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICBpZiAoc29ydEJ5ICE9PSBjb2wpIHtcbiAgICAgIHNvcnRCeSA9IGNvbFxuICAgICAgZGVzY2VuZGluZyA9IHNvcnRPcmRlciA9PT0gJ2RhJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5iaW5hcnlTdGF0ZVNvcnQgPT09IHRydWUpIHtcbiAgICAgIGRlc2NlbmRpbmcgPSAhZGVzY2VuZGluZ1xuICAgIH1cbiAgICBlbHNlIGlmIChkZXNjZW5kaW5nID09PSB0cnVlKSB7XG4gICAgICBpZiAoc29ydE9yZGVyID09PSAnYWQnKSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkZXNjZW5kaW5nID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7IC8vIGFzY2VuZGluZ1xuICAgICAgaWYgKHNvcnRPcmRlciA9PT0gJ2FkJykge1xuICAgICAgICBkZXNjZW5kaW5nID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHNvcnRCeSA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWdpbmF0aW9uKHsgc29ydEJ5LCBkZXNjZW5kaW5nLCBwYWdlOiAxIH0pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNvbHVtblRvU29ydCxcbiAgICBjb21wdXRlZFNvcnRNZXRob2QsXG4gICAgc29ydFxuICB9XG59XG4iLCJpbXBvcnQgeyBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVGaWx0ZXJQcm9wcyA9IHtcbiAgZmlsdGVyOiBbIFN0cmluZywgT2JqZWN0IF0sXG4gIGZpbHRlck1ldGhvZDogRnVuY3Rpb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRhYmxlRmlsdGVyIChwcm9wcywgc2V0UGFnaW5hdGlvbikge1xuICBjb25zdCBjb21wdXRlZEZpbHRlck1ldGhvZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5maWx0ZXJNZXRob2QgIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy5maWx0ZXJNZXRob2RcbiAgICAgIDogKHJvd3MsIHRlcm1zLCBjb2xzLCBjZWxsVmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBsb3dlclRlcm1zID0gdGVybXMgPyB0ZXJtcy50b0xvd2VyQ2FzZSgpIDogJydcbiAgICAgICAgICByZXR1cm4gcm93cy5maWx0ZXIoXG4gICAgICAgICAgICByb3cgPT4gY29scy5zb21lKGNvbCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGNlbGxWYWx1ZShjb2wsIHJvdykgKyAnJ1xuICAgICAgICAgICAgICBjb25zdCBoYXlzdGFjayA9ICh2YWwgPT09ICd1bmRlZmluZWQnIHx8IHZhbCA9PT0gJ251bGwnKSA/ICcnIDogdmFsLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobG93ZXJUZXJtcykgIT09IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICApKVxuXG4gIHdhdGNoKFxuICAgICgpID0+IHByb3BzLmZpbHRlcixcbiAgICAoKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0sIHRydWUpXG4gICAgICB9KVxuICAgIH0sXG4gICAgeyBkZWVwOiB0cnVlIH1cbiAgKVxuXG4gIHJldHVybiB7IGNvbXB1dGVkRmlsdGVyTWV0aG9kIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gc2FtZVBhZ2luYXRpb24gKG9sZFBhZywgbmV3UGFnKSB7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBuZXdQYWcpIHtcbiAgICBpZiAobmV3UGFnWyBwcm9wIF0gIT09IG9sZFBhZ1sgcHJvcCBdKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gZml4UGFnaW5hdGlvbiAocCkge1xuICBpZiAocC5wYWdlIDwgMSkge1xuICAgIHAucGFnZSA9IDFcbiAgfVxuICBpZiAocC5yb3dzUGVyUGFnZSAhPT0gdm9pZCAwICYmIHAucm93c1BlclBhZ2UgPCAxKSB7XG4gICAgcC5yb3dzUGVyUGFnZSA9IDBcbiAgfVxuICByZXR1cm4gcFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVQYWdpbmF0aW9uUHJvcHMgPSB7XG4gIHBhZ2luYXRpb246IE9iamVjdCxcbiAgcm93c1BlclBhZ2VPcHRpb25zOiB7XG4gICAgdHlwZTogQXJyYXksXG4gICAgZGVmYXVsdDogKCkgPT4gWyA1LCA3LCAxMCwgMTUsIDIwLCAyNSwgNTAsIDAgXVxuICB9LFxuXG4gICdvblVwZGF0ZTpwYWdpbmF0aW9uJzogWyBGdW5jdGlvbiwgQXJyYXkgXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUgKHZtLCBnZXRDZWxsVmFsdWUpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCB9ID0gdm1cblxuICBjb25zdCBpbm5lclBhZ2luYXRpb24gPSByZWYoXG4gICAgT2JqZWN0LmFzc2lnbih7XG4gICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICBkZXNjZW5kaW5nOiBmYWxzZSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICByb3dzUGVyUGFnZTogcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgPyBwcm9wcy5yb3dzUGVyUGFnZU9wdGlvbnNbIDAgXVxuICAgICAgICA6IDVcbiAgICB9LCBwcm9wcy5wYWdpbmF0aW9uKVxuICApXG5cbiAgY29uc3QgY29tcHV0ZWRQYWdpbmF0aW9uID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHBhZyA9IHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgICA/IHsgLi4uaW5uZXJQYWdpbmF0aW9uLnZhbHVlLCAuLi5wcm9wcy5wYWdpbmF0aW9uIH1cbiAgICAgIDogaW5uZXJQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICByZXR1cm4gZml4UGFnaW5hdGlvbihwYWcpXG4gIH0pXG5cbiAgY29uc3QgaXNTZXJ2ZXJTaWRlID0gY29tcHV0ZWQoKCkgPT4gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NOdW1iZXIgIT09IHZvaWQgMClcblxuICBmdW5jdGlvbiBzZW5kU2VydmVyUmVxdWVzdCAocGFnaW5hdGlvbikge1xuICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbih7XG4gICAgICBwYWdpbmF0aW9uLFxuICAgICAgZmlsdGVyOiBwcm9wcy5maWx0ZXJcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWVzdFNlcnZlckludGVyYWN0aW9uIChwcm9wID0ge30pIHtcbiAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICBlbWl0KCdyZXF1ZXN0Jywge1xuICAgICAgICBwYWdpbmF0aW9uOiBwcm9wLnBhZ2luYXRpb24gfHwgY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgICBmaWx0ZXI6IHByb3AuZmlsdGVyIHx8IHByb3BzLmZpbHRlcixcbiAgICAgICAgZ2V0Q2VsbFZhbHVlXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBzZXRQYWdpbmF0aW9uICh2YWwsIGZvcmNlU2VydmVyUmVxdWVzdCkge1xuICAgIGNvbnN0IG5ld1BhZ2luYXRpb24gPSBmaXhQYWdpbmF0aW9uKHtcbiAgICAgIC4uLmNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgIC4uLnZhbFxuICAgIH0pXG5cbiAgICBpZiAoc2FtZVBhZ2luYXRpb24oY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLCBuZXdQYWdpbmF0aW9uKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGlzU2VydmVyU2lkZS52YWx1ZSA9PT0gdHJ1ZSAmJiBmb3JjZVNlcnZlclJlcXVlc3QgPT09IHRydWUpIHtcbiAgICAgICAgc2VuZFNlcnZlclJlcXVlc3QobmV3UGFnaW5hdGlvbilcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHNlbmRTZXJ2ZXJSZXF1ZXN0KG5ld1BhZ2luYXRpb24pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBwcm9wcy5wYWdpbmF0aW9uICE9PSB2b2lkIDBcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6cGFnaW5hdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6cGFnaW5hdGlvbicsIG5ld1BhZ2luYXRpb24pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaW5uZXJQYWdpbmF0aW9uLnZhbHVlID0gbmV3UGFnaW5hdGlvblxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaW5uZXJQYWdpbmF0aW9uLFxuICAgIGNvbXB1dGVkUGFnaW5hdGlvbixcbiAgICBpc1NlcnZlclNpZGUsXG5cbiAgICByZXF1ZXN0U2VydmVySW50ZXJhY3Rpb24sXG4gICAgc2V0UGFnaW5hdGlvblxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVBhZ2luYXRpb24gKHZtLCBpbm5lclBhZ2luYXRpb24sIGNvbXB1dGVkUGFnaW5hdGlvbiwgaXNTZXJ2ZXJTaWRlLCBzZXRQYWdpbmF0aW9uLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICBjb25zdCBjb21wdXRlZFJvd3NOdW1iZXIgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICA/IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzTnVtYmVyIHx8IDBcbiAgICAgIDogZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyLnZhbHVlXG4gICkpXG5cbiAgY29uc3QgZmlyc3RSb3dJbmRleCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICByZXR1cm4gKHBhZ2UgLSAxKSAqIHJvd3NQZXJQYWdlXG4gIH0pXG5cbiAgY29uc3QgbGFzdFJvd0luZGV4ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgcGFnZSwgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZVxuICAgIHJldHVybiBwYWdlICogcm93c1BlclBhZ2VcbiAgfSlcblxuICBjb25zdCBpc0ZpcnN0UGFnZSA9IGNvbXB1dGVkKCgpID0+IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5wYWdlID09PSAxKVxuXG4gIGNvbnN0IHBhZ2VzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSA9PT0gMFxuICAgICAgPyAxXG4gICAgICA6IE1hdGgubWF4KFxuICAgICAgICAxLFxuICAgICAgICBNYXRoLmNlaWwoY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlIC8gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlKVxuICAgICAgKVxuICApKVxuXG4gIGNvbnN0IGlzTGFzdFBhZ2UgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgbGFzdFJvd0luZGV4LnZhbHVlID09PSAwXG4gICAgICA/IHRydWVcbiAgICAgIDogY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLnBhZ2UgPj0gcGFnZXNOdW1iZXIudmFsdWVcbiAgKSlcblxuICBjb25zdCBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBvcHRzID0gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmluY2x1ZGVzKGlubmVyUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSlcbiAgICAgID8gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zXG4gICAgICA6IFsgaW5uZXJQYWdpbmF0aW9uLnZhbHVlLnJvd3NQZXJQYWdlIF0uY29uY2F0KHByb3BzLnJvd3NQZXJQYWdlT3B0aW9ucylcblxuICAgIHJldHVybiBvcHRzLm1hcChjb3VudCA9PiAoe1xuICAgICAgbGFiZWw6IGNvdW50ID09PSAwID8gJHEubGFuZy50YWJsZS5hbGxSb3dzIDogJycgKyBjb3VudCxcbiAgICAgIHZhbHVlOiBjb3VudFxuICAgIH0pKVxuICB9KVxuXG4gIHdhdGNoKHBhZ2VzTnVtYmVyLCAobGFzdFBhZ2UsIG9sZExhc3RQYWdlKSA9PiB7XG4gICAgaWYgKGxhc3RQYWdlID09PSBvbGRMYXN0UGFnZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWUucGFnZVxuICAgIGlmIChsYXN0UGFnZSAmJiAhY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RQYWdlIDwgY3VycmVudFBhZ2UpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBsYXN0UGFnZSB9KVxuICAgIH1cbiAgfSlcblxuICBmdW5jdGlvbiBmaXJzdFBhZ2UgKCkge1xuICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiAxIH0pXG4gIH1cblxuICBmdW5jdGlvbiBwcmV2UGFnZSAoKSB7XG4gICAgY29uc3QgeyBwYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAocGFnZSA+IDEpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlIC0gMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHRQYWdlICgpIHtcbiAgICBjb25zdCB7IHBhZ2UsIHJvd3NQZXJQYWdlIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcbiAgICBpZiAobGFzdFJvd0luZGV4LnZhbHVlID4gMCAmJiBwYWdlICogcm93c1BlclBhZ2UgPCBjb21wdXRlZFJvd3NOdW1iZXIudmFsdWUpIHtcbiAgICAgIHNldFBhZ2luYXRpb24oeyBwYWdlOiBwYWdlICsgMSB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxhc3RQYWdlICgpIHtcbiAgICBzZXRQYWdpbmF0aW9uKHsgcGFnZTogcGFnZXNOdW1iZXIudmFsdWUgfSlcbiAgfVxuXG4gIGlmIChwcm9wc1sgJ29uVXBkYXRlOnBhZ2luYXRpb24nIF0gIT09IHZvaWQgMCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpwYWdpbmF0aW9uJywgeyAuLi5jb21wdXRlZFBhZ2luYXRpb24udmFsdWUgfSlcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZmlyc3RSb3dJbmRleCxcbiAgICBsYXN0Um93SW5kZXgsXG4gICAgaXNGaXJzdFBhZ2UsXG4gICAgaXNMYXN0UGFnZSxcbiAgICBwYWdlc051bWJlcixcbiAgICBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICBjb21wdXRlZFJvd3NOdW1iZXIsXG5cbiAgICBmaXJzdFBhZ2UsXG4gICAgcHJldlBhZ2UsXG4gICAgbmV4dFBhZ2UsXG4gICAgbGFzdFBhZ2VcbiAgfVxufVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzID0ge1xuICBzZWxlY3Rpb246IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ25vbmUnLFxuICAgIHZhbGlkYXRvcjogdiA9PiBbICdzaW5nbGUnLCAnbXVsdGlwbGUnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICB9LFxuICBzZWxlY3RlZDoge1xuICAgIHR5cGU6IEFycmF5LFxuICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgPSBbICd1cGRhdGU6c2VsZWN0ZWQnLCAnc2VsZWN0aW9uJyBdXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZVJvd1NlbGVjdGlvbiAocHJvcHMsIGVtaXQsIGNvbXB1dGVkUm93cywgZ2V0Um93S2V5KSB7XG4gIGNvbnN0IHNlbGVjdGVkS2V5cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBrZXlzID0ge31cbiAgICBwcm9wcy5zZWxlY3RlZC5tYXAoZ2V0Um93S2V5LnZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBrZXlzWyBrZXkgXSA9IHRydWVcbiAgICB9KVxuICAgIHJldHVybiBrZXlzXG4gIH0pXG5cbiAgY29uc3QgaGFzU2VsZWN0aW9uTW9kZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uICE9PSAnbm9uZSdcbiAgfSlcblxuICBjb25zdCBzaW5nbGVTZWxlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgcmV0dXJuIHByb3BzLnNlbGVjdGlvbiA9PT0gJ3NpbmdsZSdcbiAgfSlcblxuICBjb25zdCBtdWx0aXBsZVNlbGVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICByZXR1cm4gcHJvcHMuc2VsZWN0aW9uID09PSAnbXVsdGlwbGUnXG4gIH0pXG5cbiAgY29uc3QgYWxsUm93c1NlbGVjdGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICBjb21wdXRlZFJvd3MudmFsdWUubGVuZ3RoID4gMCAmJiBjb21wdXRlZFJvd3MudmFsdWUuZXZlcnkoXG4gICAgICByb3cgPT4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBnZXRSb3dLZXkudmFsdWUocm93KSBdID09PSB0cnVlXG4gICAgKVxuICApXG5cbiAgY29uc3Qgc29tZVJvd3NTZWxlY3RlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgYWxsUm93c1NlbGVjdGVkLnZhbHVlICE9PSB0cnVlXG4gICAgJiYgY29tcHV0ZWRSb3dzLnZhbHVlLnNvbWUocm93ID0+IHNlbGVjdGVkS2V5cy52YWx1ZVsgZ2V0Um93S2V5LnZhbHVlKHJvdykgXSA9PT0gdHJ1ZSlcbiAgKVxuXG4gIGNvbnN0IHJvd3NTZWxlY3RlZE51bWJlciA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkLmxlbmd0aClcblxuICBmdW5jdGlvbiBpc1Jvd1NlbGVjdGVkIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRLZXlzLnZhbHVlWyBrZXkgXSA9PT0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24gKCkge1xuICAgIGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZCcsIFtdKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0aW9uIChrZXlzLCByb3dzLCBhZGRlZCwgZXZ0KSB7XG4gICAgZW1pdCgnc2VsZWN0aW9uJywgeyByb3dzLCBhZGRlZCwga2V5cywgZXZ0IH0pXG5cbiAgICBjb25zdCBwYXlsb2FkID0gc2luZ2xlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlXG4gICAgICA/IChhZGRlZCA9PT0gdHJ1ZSA/IHJvd3MgOiBbXSlcbiAgICAgIDogKFxuICAgICAgICAgIGFkZGVkID09PSB0cnVlXG4gICAgICAgICAgICA/IHByb3BzLnNlbGVjdGVkLmNvbmNhdChyb3dzKVxuICAgICAgICAgICAgOiBwcm9wcy5zZWxlY3RlZC5maWx0ZXIoXG4gICAgICAgICAgICAgIHJvdyA9PiBrZXlzLmluY2x1ZGVzKGdldFJvd0tleS52YWx1ZShyb3cpKSA9PT0gZmFsc2VcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgZW1pdCgndXBkYXRlOnNlbGVjdGVkJywgcGF5bG9hZClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFzU2VsZWN0aW9uTW9kZSxcbiAgICBzaW5nbGVTZWxlY3Rpb24sXG4gICAgbXVsdGlwbGVTZWxlY3Rpb24sXG4gICAgYWxsUm93c1NlbGVjdGVkLFxuICAgIHNvbWVSb3dzU2VsZWN0ZWQsXG4gICAgcm93c1NlbGVjdGVkTnVtYmVyLFxuXG4gICAgaXNSb3dTZWxlY3RlZCxcbiAgICBjbGVhclNlbGVjdGlvbixcbiAgICB1cGRhdGVTZWxlY3Rpb25cbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCB9IGZyb20gJ3Z1ZSdcblxuZnVuY3Rpb24gZ2V0VmFsICh2YWwpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKVxuICAgID8gdmFsLnNsaWNlKClcbiAgICA6IFtdXG59XG5cbmV4cG9ydCBjb25zdCB1c2VUYWJsZVJvd0V4cGFuZFByb3BzID0ge1xuICBleHBhbmRlZDogQXJyYXkgLy8gdi1tb2RlbDpleHBhbmRlZFxufVxuXG5leHBvcnQgY29uc3QgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyA9IFsgJ3VwZGF0ZTpleHBhbmRlZCcgXVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVGFibGVSb3dFeHBhbmQgKHByb3BzLCBlbWl0KSB7XG4gIGNvbnN0IGlubmVyRXhwYW5kZWQgPSByZWYoZ2V0VmFsKHByb3BzLmV4cGFuZGVkKSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5leHBhbmRlZCwgdmFsID0+IHtcbiAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gZ2V0VmFsKHZhbClcbiAgfSlcblxuICBmdW5jdGlvbiBpc1Jvd0V4cGFuZGVkIChrZXkpIHtcbiAgICByZXR1cm4gaW5uZXJFeHBhbmRlZC52YWx1ZS5pbmNsdWRlcyhrZXkpXG4gIH1cblxuICBmdW5jdGlvbiBzZXRFeHBhbmRlZCAodmFsKSB7XG4gICAgaWYgKHByb3BzLmV4cGFuZGVkICE9PSB2b2lkIDApIHtcbiAgICAgIGVtaXQoJ3VwZGF0ZTpleHBhbmRlZCcsIHZhbClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpbm5lckV4cGFuZGVkLnZhbHVlID0gdmFsXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRXhwYW5kZWQgKGtleSwgYWRkKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gaW5uZXJFeHBhbmRlZC52YWx1ZS5zbGljZSgpXG4gICAgY29uc3QgaW5kZXggPSB0YXJnZXQuaW5kZXhPZihrZXkpXG5cbiAgICBpZiAoYWRkID09PSB0cnVlKSB7XG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRhcmdldC5wdXNoKGtleSlcbiAgICAgICAgc2V0RXhwYW5kZWQodGFyZ2V0KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRhcmdldC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICBzZXRFeHBhbmRlZCh0YXJnZXQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpc1Jvd0V4cGFuZGVkLFxuICAgIHNldEV4cGFuZGVkLFxuICAgIHVwZGF0ZUV4cGFuZGVkXG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlVGFibGVDb2x1bW5TZWxlY3Rpb25Qcm9wcyA9IHtcbiAgdmlzaWJsZUNvbHVtbnM6IEFycmF5XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbiAocHJvcHMsIGNvbXB1dGVkUGFnaW5hdGlvbiwgaGFzU2VsZWN0aW9uTW9kZSkge1xuICBjb25zdCBjb2xMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5jb2x1bW5zICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2x1bW5zXG4gICAgfVxuXG4gICAgLy8gd2UgaW5mZXIgY29sdW1ucyBmcm9tIGZpcnN0IHJvd1xuICAgIGNvbnN0IHJvdyA9IHByb3BzLnJvd3NbIDAgXVxuXG4gICAgcmV0dXJuIHJvdyAhPT0gdm9pZCAwXG4gICAgICA/IE9iamVjdC5rZXlzKHJvdykubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgbGFiZWw6IG5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgZmllbGQ6IG5hbWUsXG4gICAgICAgIGFsaWduOiBpc051bWJlcihyb3dbIG5hbWUgXSkgPyAncmlnaHQnIDogJ2xlZnQnLFxuICAgICAgICBzb3J0YWJsZTogdHJ1ZVxuICAgICAgfSkpXG4gICAgICA6IFtdXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgIGNvbnN0IGNvbHMgPSBwcm9wcy52aXNpYmxlQ29sdW1ucyAhPT0gdm9pZCAwXG4gICAgICA/IGNvbExpc3QudmFsdWUuZmlsdGVyKGNvbCA9PiBjb2wucmVxdWlyZWQgPT09IHRydWUgfHwgcHJvcHMudmlzaWJsZUNvbHVtbnMuaW5jbHVkZXMoY29sLm5hbWUpID09PSB0cnVlKVxuICAgICAgOiBjb2xMaXN0LnZhbHVlXG5cbiAgICByZXR1cm4gY29scy5tYXAoY29sID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gY29sLmFsaWduIHx8ICdyaWdodCdcbiAgICAgIGNvbnN0IGFsaWduQ2xhc3MgPSBgdGV4dC0keyBhbGlnbiB9YFxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5jb2wsXG4gICAgICAgIGFsaWduLFxuICAgICAgICBfX2ljb25DbGFzczogYHEtdGFibGVfX3NvcnQtaWNvbiBxLXRhYmxlX19zb3J0LWljb24tLSR7IGFsaWduIH1gLFxuICAgICAgICBfX3RoQ2xhc3M6IGFsaWduQ2xhc3NcbiAgICAgICAgICArIChjb2wuaGVhZGVyQ2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgY29sLmhlYWRlckNsYXNzZXMgOiAnJylcbiAgICAgICAgICArIChjb2wuc29ydGFibGUgPT09IHRydWUgPyAnIHNvcnRhYmxlJyA6ICcnKVxuICAgICAgICAgICsgKGNvbC5uYW1lID09PSBzb3J0QnkgPyBgIHNvcnRlZCAkeyBkZXNjZW5kaW5nID09PSB0cnVlID8gJ3NvcnQtZGVzYycgOiAnJyB9YCA6ICcnKSxcblxuICAgICAgICBfX3RkU3R5bGU6IGNvbC5zdHlsZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb2wuc3R5bGUgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGNvbC5zdHlsZVxuICAgICAgICAgICAgICAgIDogY29sLnN0eWxlXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBudWxsLFxuXG4gICAgICAgIF9fdGRDbGFzczogY29sLmNsYXNzZXMgIT09IHZvaWQgMFxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgICB0eXBlb2YgY29sLmNsYXNzZXMgIT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICA/ICgpID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlc1xuICAgICAgICAgICAgICAgIDogcm93ID0+IGFsaWduQ2xhc3MgKyAnICcgKyBjb2wuY2xhc3Nlcyhyb3cpXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiAoKSA9PiBhbGlnbkNsYXNzXG4gICAgICB9XG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBjb21wdXRlZENvbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgbmFtZXMgPSB7fVxuICAgIGNvbXB1dGVkQ29scy52YWx1ZS5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICBuYW1lc1sgY29sLm5hbWUgXSA9IGNvbFxuICAgIH0pXG4gICAgcmV0dXJuIG5hbWVzXG4gIH0pXG5cbiAgY29uc3QgY29tcHV0ZWRDb2xzcGFuID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIHJldHVybiBwcm9wcy50YWJsZUNvbHNwYW4gIT09IHZvaWQgMFxuICAgICAgPyBwcm9wcy50YWJsZUNvbHNwYW5cbiAgICAgIDogY29tcHV0ZWRDb2xzLnZhbHVlLmxlbmd0aCArIChoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlID8gMSA6IDApXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBjb2xMaXN0LFxuICAgIGNvbXB1dGVkQ29scyxcbiAgICBjb21wdXRlZENvbHNNYXAsXG4gICAgY29tcHV0ZWRDb2xzcGFuXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRVGggZnJvbSAnLi9RVGguanMnXG5cbmltcG9ydCBRU2VwYXJhdG9yIGZyb20gJy4uL3NlcGFyYXRvci9RU2VwYXJhdG9yLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVZpcnR1YWxTY3JvbGwgZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvUVZpcnR1YWxTY3JvbGwuanMnXG5pbXBvcnQgUVNlbGVjdCBmcm9tICcuLi9zZWxlY3QvUVNlbGVjdC5qcydcbmltcG9ydCBRTGluZWFyUHJvZ3Jlc3MgZnJvbSAnLi4vbGluZWFyLXByb2dyZXNzL1FMaW5lYXJQcm9ncmVzcy5qcydcbmltcG9ydCBRQ2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3gvUUNoZWNrYm94LmpzJ1xuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5cbmltcG9ydCBnZXRUYWJsZU1pZGRsZSBmcm9tICcuL2dldC10YWJsZS1taWRkbGUuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyBjb21tb25WaXJ0UHJvcHNMaXN0IH0gZnJvbSAnLi4vdmlydHVhbC1zY3JvbGwvdXNlLXZpcnR1YWwtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZUZ1bGxzY3JlZW4sIHsgdXNlRnVsbHNjcmVlblByb3BzLCB1c2VGdWxsc2NyZWVuRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mdWxsc2NyZWVuLmpzJ1xuXG5pbXBvcnQgeyB1c2VUYWJsZVNvcnQsIHVzZVRhYmxlU29ydFByb3BzIH0gZnJvbSAnLi90YWJsZS1zb3J0LmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVGaWx0ZXIsIHVzZVRhYmxlRmlsdGVyUHJvcHMgfSBmcm9tICcuL3RhYmxlLWZpbHRlci5qcydcbmltcG9ydCB7IHVzZVRhYmxlUGFnaW5hdGlvblN0YXRlLCB1c2VUYWJsZVBhZ2luYXRpb24sIHVzZVRhYmxlUGFnaW5hdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1wYWdpbmF0aW9uLmpzJ1xuaW1wb3J0IHsgdXNlVGFibGVSb3dTZWxlY3Rpb24sIHVzZVRhYmxlUm93U2VsZWN0aW9uUHJvcHMsIHVzZVRhYmxlUm93U2VsZWN0aW9uRW1pdHMgfSBmcm9tICcuL3RhYmxlLXJvdy1zZWxlY3Rpb24uanMnXG5pbXBvcnQgeyB1c2VUYWJsZVJvd0V4cGFuZCwgdXNlVGFibGVSb3dFeHBhbmRQcm9wcywgdXNlVGFibGVSb3dFeHBhbmRFbWl0cyB9IGZyb20gJy4vdGFibGUtcm93LWV4cGFuZC5qcydcbmltcG9ydCB7IHVzZVRhYmxlQ29sdW1uU2VsZWN0aW9uLCB1c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzIH0gZnJvbSAnLi90YWJsZS1jb2x1bW4tc2VsZWN0aW9uLmpzJ1xuXG5pbXBvcnQgeyBpbmplY3RQcm9wLCBpbmplY3RNdWx0aXBsZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9pbmplY3Qtb2JqLXByb3AuanMnXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3QgYm90dG9tQ2xhc3MgPSAncS10YWJsZV9fYm90dG9tIHJvdyBpdGVtcy1jZW50ZXInXG5cbmNvbnN0IGNvbW1vblZpcnRQcm9wc09iaiA9IHt9XG5jb21tb25WaXJ0UHJvcHNMaXN0LmZvckVhY2gocCA9PiB7IGNvbW1vblZpcnRQcm9wc09ialsgcCBdID0ge30gfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJsZScsXG5cbiAgcHJvcHM6IHtcbiAgICByb3dzOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXG4gICAgfSxcbiAgICByb3dLZXk6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBGdW5jdGlvbiBdLFxuICAgICAgZGVmYXVsdDogJ2lkJ1xuICAgIH0sXG5cbiAgICBjb2x1bW5zOiBBcnJheSxcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxuXG4gICAgaWNvbkZpcnN0UGFnZTogU3RyaW5nLFxuICAgIGljb25QcmV2UGFnZTogU3RyaW5nLFxuICAgIGljb25OZXh0UGFnZTogU3RyaW5nLFxuICAgIGljb25MYXN0UGFnZTogU3RyaW5nLFxuXG4gICAgdGl0bGU6IFN0cmluZyxcblxuICAgIGhpZGVIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBncmlkOiBCb29sZWFuLFxuICAgIGdyaWRIZWFkZXI6IEJvb2xlYW4sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBzZXBhcmF0b3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdob3Jpem9udGFsJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJywgJ2NlbGwnLCAnbm9uZScgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgd3JhcENlbGxzOiBCb29sZWFuLFxuXG4gICAgdmlydHVhbFNjcm9sbDogQm9vbGVhbixcbiAgICB2aXJ0dWFsU2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9LFxuICAgIC4uLmNvbW1vblZpcnRQcm9wc09iaixcblxuICAgIG5vRGF0YUxhYmVsOiBTdHJpbmcsXG4gICAgbm9SZXN1bHRzTGFiZWw6IFN0cmluZyxcbiAgICBsb2FkaW5nTGFiZWw6IFN0cmluZyxcbiAgICBzZWxlY3RlZFJvd3NMYWJlbDogRnVuY3Rpb24sXG4gICAgcm93c1BlclBhZ2VMYWJlbDogU3RyaW5nLFxuICAgIHBhZ2luYXRpb25MYWJlbDogRnVuY3Rpb24sXG5cbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2dyZXktOCdcbiAgICB9LFxuXG4gICAgdGl0bGVDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZVN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIHRhYmxlQ2xhc3M6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgdGFibGVIZWFkZXJTdHlsZTogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICB0YWJsZUhlYWRlckNsYXNzOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDb250YWluZXJDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcbiAgICBjYXJkQ29udGFpbmVyU3R5bGU6IFsgU3RyaW5nLCBBcnJheSwgT2JqZWN0IF0sXG4gICAgY2FyZFN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuICAgIGNhcmRDbGFzczogWyBTdHJpbmcsIEFycmF5LCBPYmplY3QgXSxcblxuICAgIGhpZGVCb3R0b206IEJvb2xlYW4sXG4gICAgaGlkZVNlbGVjdGVkQmFubmVyOiBCb29sZWFuLFxuICAgIGhpZGVOb0RhdGE6IEJvb2xlYW4sXG4gICAgaGlkZVBhZ2luYXRpb246IEJvb2xlYW4sXG5cbiAgICBvblJvd0NsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0RibGNsaWNrOiBGdW5jdGlvbixcbiAgICBvblJvd0NvbnRleHRtZW51OiBGdW5jdGlvbixcblxuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VGdWxsc2NyZWVuUHJvcHMsXG5cbiAgICAuLi51c2VUYWJsZUNvbHVtblNlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlRmlsdGVyUHJvcHMsXG4gICAgLi4udXNlVGFibGVQYWdpbmF0aW9uUHJvcHMsXG4gICAgLi4udXNlVGFibGVSb3dFeHBhbmRQcm9wcyxcbiAgICAuLi51c2VUYWJsZVJvd1NlbGVjdGlvblByb3BzLFxuICAgIC4uLnVzZVRhYmxlU29ydFByb3BzXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAncmVxdWVzdCcsICd2aXJ0dWFsLXNjcm9sbCcsXG4gICAgLi4udXNlRnVsbHNjcmVlbkVtaXRzLFxuICAgIC4uLnVzZVRhYmxlUm93RXhwYW5kRW1pdHMsXG4gICAgLi4udXNlVGFibGVSb3dTZWxlY3Rpb25FbWl0c1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgaW5GdWxsc2NyZWVuLCB0b2dnbGVGdWxsc2NyZWVuIH0gPSB1c2VGdWxsc2NyZWVuKClcblxuICAgIGNvbnN0IGdldFJvd0tleSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHR5cGVvZiBwcm9wcy5yb3dLZXkgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwcm9wcy5yb3dLZXlcbiAgICAgICAgOiByb3cgPT4gcm93WyBwcm9wcy5yb3dLZXkgXVxuICAgICkpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdmlydFNjcm9sbFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGhhc1ZpcnRTY3JvbGwgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5ncmlkICE9PSB0cnVlICYmIHByb3BzLnZpcnR1YWxTY3JvbGwgPT09IHRydWUpXG5cbiAgICBjb25zdCBjYXJkRGVmYXVsdENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICcgcS10YWJsZV9fY2FyZCdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZV9fY2FyZC0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChwcm9wcy5zcXVhcmUgPT09IHRydWUgPyAnIHEtdGFibGUtLXNxdWFyZScgOiAnJylcbiAgICAgICsgKHByb3BzLmZsYXQgPT09IHRydWUgPyAnIHEtdGFibGUtLWZsYXQnIDogJycpXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tYm9yZGVyZWQnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgX19jb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS10YWJsZV9fY29udGFpbmVyIHEtdGFibGUtLSR7IHByb3BzLnNlcGFyYXRvciB9LXNlcGFyYXRvciBjb2x1bW4gbm8td3JhcGBcbiAgICAgICsgKHByb3BzLmdyaWQgPT09IHRydWUgPyAnIHEtdGFibGUtLWdyaWQnIDogY2FyZERlZmF1bHRDbGFzcy52YWx1ZSlcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tZGFyaycgOiAnJylcbiAgICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXRhYmxlLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLndyYXBDZWxscyA9PT0gZmFsc2UgPyAnIHEtdGFibGUtLW5vLXdyYXAnIDogJycpXG4gICAgICArIChpbkZ1bGxzY3JlZW4udmFsdWUgPT09IHRydWUgPyAnIGZ1bGxzY3JlZW4gc2Nyb2xsJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGNvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIF9fY29udGFpbmVyQ2xhc3MudmFsdWUgKyAocHJvcHMubG9hZGluZyA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tbG9hZGluZycgOiAnJylcbiAgICApXG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IHByb3BzLnRhYmxlU3R5bGUgKyBwcm9wcy50YWJsZUNsYXNzICsgcHJvcHMudGFibGVIZWFkZXJTdHlsZSArIHByb3BzLnRhYmxlSGVhZGVyQ2xhc3MgKyBfX2NvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgKCkgPT4geyBoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlICYmIHZpcnRTY3JvbGxSZWYudmFsdWUgIT09IG51bGwgJiYgdmlydFNjcm9sbFJlZi52YWx1ZS5yZXNldCgpIH1cbiAgICApXG5cbiAgICBjb25zdCB7XG4gICAgICBpbm5lclBhZ2luYXRpb24sXG4gICAgICBjb21wdXRlZFBhZ2luYXRpb24sXG4gICAgICBpc1NlcnZlclNpZGUsXG5cbiAgICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICAgIHNldFBhZ2luYXRpb25cbiAgICB9ID0gdXNlVGFibGVQYWdpbmF0aW9uU3RhdGUodm0sIGdldENlbGxWYWx1ZSlcblxuICAgIGNvbnN0IHsgY29tcHV0ZWRGaWx0ZXJNZXRob2QgfSA9IHVzZVRhYmxlRmlsdGVyKHByb3BzLCBzZXRQYWdpbmF0aW9uKVxuICAgIGNvbnN0IHsgaXNSb3dFeHBhbmRlZCwgc2V0RXhwYW5kZWQsIHVwZGF0ZUV4cGFuZGVkIH0gPSB1c2VUYWJsZVJvd0V4cGFuZChwcm9wcywgZW1pdClcblxuICAgIGNvbnN0IGZpbHRlcmVkU29ydGVkUm93cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCByb3dzID0gcHJvcHMucm93c1xuXG4gICAgICBpZiAoaXNTZXJ2ZXJTaWRlLnZhbHVlID09PSB0cnVlIHx8IHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiByb3dzXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgc29ydEJ5LCBkZXNjZW5kaW5nIH0gPSBjb21wdXRlZFBhZ2luYXRpb24udmFsdWVcblxuICAgICAgaWYgKHByb3BzLmZpbHRlcikge1xuICAgICAgICByb3dzID0gY29tcHV0ZWRGaWx0ZXJNZXRob2QudmFsdWUocm93cywgcHJvcHMuZmlsdGVyLCBjb21wdXRlZENvbHMudmFsdWUsIGdldENlbGxWYWx1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbHVtblRvU29ydC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICByb3dzID0gY29tcHV0ZWRTb3J0TWV0aG9kLnZhbHVlKFxuICAgICAgICAgIHByb3BzLnJvd3MgPT09IHJvd3MgPyByb3dzLnNsaWNlKCkgOiByb3dzLFxuICAgICAgICAgIHNvcnRCeSxcbiAgICAgICAgICBkZXNjZW5kaW5nXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvd3NcbiAgICB9KVxuXG4gICAgY29uc3QgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyID0gY29tcHV0ZWQoKCkgPT4gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlLmxlbmd0aClcblxuICAgIGNvbnN0IGNvbXB1dGVkUm93cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGxldCByb3dzID0gZmlsdGVyZWRTb3J0ZWRSb3dzLnZhbHVlXG5cbiAgICAgIGlmIChpc1NlcnZlclNpZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJvd3NcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyByb3dzUGVyUGFnZSB9ID0gY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlXG5cbiAgICAgIGlmIChyb3dzUGVyUGFnZSAhPT0gMCkge1xuICAgICAgICBpZiAoZmlyc3RSb3dJbmRleC52YWx1ZSA9PT0gMCAmJiBwcm9wcy5yb3dzICE9PSByb3dzKSB7XG4gICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gbGFzdFJvd0luZGV4LnZhbHVlKSB7XG4gICAgICAgICAgICByb3dzID0gcm93cy5zbGljZSgwLCBsYXN0Um93SW5kZXgudmFsdWUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHJvd3MgPSByb3dzLnNsaWNlKGZpcnN0Um93SW5kZXgudmFsdWUsIGxhc3RSb3dJbmRleC52YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm93c1xuICAgIH0pXG5cbiAgICBjb25zdCB7XG4gICAgICBoYXNTZWxlY3Rpb25Nb2RlLFxuICAgICAgc2luZ2xlU2VsZWN0aW9uLFxuICAgICAgbXVsdGlwbGVTZWxlY3Rpb24sXG4gICAgICBhbGxSb3dzU2VsZWN0ZWQsXG4gICAgICBzb21lUm93c1NlbGVjdGVkLFxuICAgICAgcm93c1NlbGVjdGVkTnVtYmVyLFxuXG4gICAgICBpc1Jvd1NlbGVjdGVkLFxuICAgICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgICB1cGRhdGVTZWxlY3Rpb25cbiAgICB9ID0gdXNlVGFibGVSb3dTZWxlY3Rpb24ocHJvcHMsIGVtaXQsIGNvbXB1dGVkUm93cywgZ2V0Um93S2V5KVxuXG4gICAgY29uc3QgeyBjb2xMaXN0LCBjb21wdXRlZENvbHMsIGNvbXB1dGVkQ29sc01hcCwgY29tcHV0ZWRDb2xzcGFuIH0gPSB1c2VUYWJsZUNvbHVtblNlbGVjdGlvbihwcm9wcywgY29tcHV0ZWRQYWdpbmF0aW9uLCBoYXNTZWxlY3Rpb25Nb2RlKVxuXG4gICAgY29uc3QgeyBjb2x1bW5Ub1NvcnQsIGNvbXB1dGVkU29ydE1ldGhvZCwgc29ydCB9ID0gdXNlVGFibGVTb3J0KHByb3BzLCBjb21wdXRlZFBhZ2luYXRpb24sIGNvbExpc3QsIHNldFBhZ2luYXRpb24pXG5cbiAgICBjb25zdCB7XG4gICAgICBmaXJzdFJvd0luZGV4LFxuICAgICAgbGFzdFJvd0luZGV4LFxuICAgICAgaXNGaXJzdFBhZ2UsXG4gICAgICBpc0xhc3RQYWdlLFxuICAgICAgcGFnZXNOdW1iZXIsXG4gICAgICBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucyxcbiAgICAgIGNvbXB1dGVkUm93c051bWJlcixcblxuICAgICAgZmlyc3RQYWdlLFxuICAgICAgcHJldlBhZ2UsXG4gICAgICBuZXh0UGFnZSxcbiAgICAgIGxhc3RQYWdlXG4gICAgfSA9IHVzZVRhYmxlUGFnaW5hdGlvbih2bSwgaW5uZXJQYWdpbmF0aW9uLCBjb21wdXRlZFBhZ2luYXRpb24sIGlzU2VydmVyU2lkZSwgc2V0UGFnaW5hdGlvbiwgZmlsdGVyZWRTb3J0ZWRSb3dzTnVtYmVyKVxuXG4gICAgY29uc3Qgbm90aGluZ1RvRGlzcGxheSA9IGNvbXB1dGVkKCgpID0+IGNvbXB1dGVkUm93cy52YWx1ZS5sZW5ndGggPT09IDApXG5cbiAgICBjb25zdCB2aXJ0UHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuXG4gICAgICBjb21tb25WaXJ0UHJvcHNMaXN0XG4gICAgICAgIC5mb3JFYWNoKHAgPT4geyBhY2NbIHAgXSA9IHByb3BzWyBwIF0gfSlcblxuICAgICAgaWYgKGFjYy52aXJ0dWFsU2Nyb2xsSXRlbVNpemUgPT09IHZvaWQgMCkge1xuICAgICAgICBhY2MudmlydHVhbFNjcm9sbEl0ZW1TaXplID0gcHJvcHMuZGVuc2UgPT09IHRydWUgPyAyOCA6IDQ4XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gcmVzZXRWaXJ0dWFsU2Nyb2xsICgpIHtcbiAgICAgIGhhc1ZpcnRTY3JvbGwudmFsdWUgPT09IHRydWUgJiYgdmlydFNjcm9sbFJlZi52YWx1ZS5yZXNldCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keSAoKSB7XG4gICAgICBpZiAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gZ2V0R3JpZEJvZHkoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBoZWFkZXIgPSBwcm9wcy5oaWRlSGVhZGVyICE9PSB0cnVlID8gZ2V0VEhlYWQgOiBudWxsXG5cbiAgICAgIGlmIChoYXNWaXJ0U2Nyb2xsLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IHRvcFJvdyA9IHNsb3RzWyAndG9wLXJvdycgXVxuICAgICAgICBjb25zdCBib3R0b21Sb3cgPSBzbG90c1sgJ2JvdHRvbS1yb3cnIF1cblxuICAgICAgICBjb25zdCB2aXJ0U2xvdHMgPSB7XG4gICAgICAgICAgZGVmYXVsdDogcHJvcHMgPT4gZ2V0VEJvZHlUUihwcm9wcy5pdGVtLCBzbG90cy5ib2R5LCBwcm9wcy5pbmRleClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3BSb3cgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnN0IHRvcENvbnRlbnQgPSBoKCd0Ym9keScsIHRvcFJvdyh7IGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSB9KSlcblxuICAgICAgICAgIHZpcnRTbG90cy5iZWZvcmUgPSBoZWFkZXIgPT09IG51bGxcbiAgICAgICAgICAgID8gKCkgPT4gdG9wQ29udGVudFxuICAgICAgICAgICAgOiAoKSA9PiBbIGhlYWRlcigpIF0uY29uY2F0KHRvcENvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGVhZGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgdmlydFNsb3RzLmJlZm9yZSA9IGhlYWRlclxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvdHRvbVJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgdmlydFNsb3RzLmFmdGVyID0gKCkgPT4gaCgndGJvZHknLCBib3R0b21Sb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaChRVmlydHVhbFNjcm9sbCwge1xuICAgICAgICAgIHJlZjogdmlydFNjcm9sbFJlZixcbiAgICAgICAgICBjbGFzczogcHJvcHMudGFibGVDbGFzcyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMudGFibGVTdHlsZSxcbiAgICAgICAgICAuLi52aXJ0UHJvcHMudmFsdWUsXG4gICAgICAgICAgc2Nyb2xsVGFyZ2V0OiBwcm9wcy52aXJ0dWFsU2Nyb2xsVGFyZ2V0LFxuICAgICAgICAgIGl0ZW1zOiBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICAgICAgdHlwZTogJ19fcXRhYmxlJyxcbiAgICAgICAgICB0YWJsZUNvbHNwYW46IGNvbXB1dGVkQ29sc3Bhbi52YWx1ZSxcbiAgICAgICAgICBvblZpcnR1YWxTY3JvbGw6IG9uVlNjcm9sbFxuICAgICAgICB9LCB2aXJ0U2xvdHMpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBnZXRUQm9keSgpXG4gICAgICBdXG5cbiAgICAgIGlmIChoZWFkZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2hpbGQudW5zaGlmdChoZWFkZXIoKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFRhYmxlTWlkZGxlKHtcbiAgICAgICAgY2xhc3M6IFsgJ3EtdGFibGVfX21pZGRsZSBzY3JvbGwnLCBwcm9wcy50YWJsZUNsYXNzIF0sXG4gICAgICAgIHN0eWxlOiBwcm9wcy50YWJsZVN0eWxlXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUbyAodG9JbmRleCwgZWRnZSkge1xuICAgICAgaWYgKHZpcnRTY3JvbGxSZWYudmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgdmlydFNjcm9sbFJlZi52YWx1ZS5zY3JvbGxUbyh0b0luZGV4LCBlZGdlKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdG9JbmRleCA9IHBhcnNlSW50KHRvSW5kZXgsIDEwKVxuICAgICAgY29uc3Qgcm93RWwgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoYHRib2R5IHRyOm50aC1vZi10eXBlKCR7IHRvSW5kZXggKyAxIH0pYClcblxuICAgICAgaWYgKHJvd0VsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcignLnEtdGFibGVfX21pZGRsZS5zY3JvbGwnKVxuICAgICAgICBjb25zdCB7IG9mZnNldFRvcCB9ID0gcm93RWxcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gb2Zmc2V0VG9wIDwgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA/ICdkZWNyZWFzZScgOiAnaW5jcmVhc2UnXG5cbiAgICAgICAgc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9IG9mZnNldFRvcFxuXG4gICAgICAgIGVtaXQoJ3ZpcnR1YWwtc2Nyb2xsJywge1xuICAgICAgICAgIGluZGV4OiB0b0luZGV4LFxuICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgdG86IGlubmVyUGFnaW5hdGlvbi52YWx1ZS5yb3dzUGVyUGFnZSAtIDEsXG4gICAgICAgICAgZGlyZWN0aW9uXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25WU2Nyb2xsIChpbmZvKSB7XG4gICAgICBlbWl0KCd2aXJ0dWFsLXNjcm9sbCcsIGluZm8pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MgKCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgaChRTGluZWFyUHJvZ3Jlc3MsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX2xpbmVhci1wcm9ncmVzcycsXG4gICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICBpbmRldGVybWluYXRlOiB0cnVlLFxuICAgICAgICAgIHRyYWNrQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgfSlcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUQm9keVRSIChyb3csIGJvZHlTbG90LCBwYWdlSW5kZXgpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGtleSA9IGdldFJvd0tleS52YWx1ZShyb3cpLFxuICAgICAgICBzZWxlY3RlZCA9IGlzUm93U2VsZWN0ZWQoa2V5KVxuXG4gICAgICBpZiAoYm9keVNsb3QgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gYm9keVNsb3QoXG4gICAgICAgICAgZ2V0Qm9keVNjb3BlKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgIHBhZ2VJbmRleCxcbiAgICAgICAgICAgIF9fdHJDbGFzczogc2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIGJvZHlDZWxsID0gc2xvdHNbICdib2R5LWNlbGwnIF0sXG4gICAgICAgIGNoaWxkID0gY29tcHV0ZWRDb2xzLnZhbHVlLm1hcChjb2wgPT4ge1xuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBib2R5Q2VsbENvbCA9IHNsb3RzWyBgYm9keS1jZWxsLSR7IGNvbC5uYW1lIH1gIF0sXG4gICAgICAgICAgICBzbG90ID0gYm9keUNlbGxDb2wgIT09IHZvaWQgMCA/IGJvZHlDZWxsQ29sIDogYm9keUNlbGxcblxuICAgICAgICAgIHJldHVybiBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgID8gc2xvdChnZXRCb2R5Q2VsbFNjb3BlKHsga2V5LCByb3csIHBhZ2VJbmRleCwgY29sIH0pKVxuICAgICAgICAgICAgOiBoKCd0ZCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGNvbC5fX3RkQ2xhc3Mocm93KSxcbiAgICAgICAgICAgICAgc3R5bGU6IGNvbC5fX3RkU3R5bGUocm93KVxuICAgICAgICAgICAgfSwgZ2V0Q2VsbFZhbHVlKGNvbCwgcm93KSlcbiAgICAgICAgfSlcblxuICAgICAgaWYgKGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgY29uc3QgY29udGVudCA9IHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChnZXRCb2R5U2VsZWN0aW9uU2NvcGUoeyBrZXksIHJvdywgcGFnZUluZGV4IH0pKVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNlbGVjdGVkLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogKGFkZGluZywgZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3Rpb24oWyBrZXkgXSwgWyByb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgndGQnLCB7IGNsYXNzOiAncS10YWJsZS0tY29sLWF1dG8td2lkdGgnIH0sIGNvbnRlbnQpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGF0YSA9IHsga2V5LCBjbGFzczogeyBzZWxlY3RlZCB9IH1cblxuICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICBkYXRhLmNsYXNzWyAnY3Vyc29yLXBvaW50ZXInIF0gPSB0cnVlXG4gICAgICAgIGRhdGEub25DbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgZW1pdCgnUm93Q2xpY2snLCBldnQsIHJvdywgcGFnZUluZGV4KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vblJvd0RibGNsaWNrICE9PSB2b2lkIDApIHtcbiAgICAgICAgZGF0YS5jbGFzc1sgJ2N1cnNvci1wb2ludGVyJyBdID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uRGJsY2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgIGVtaXQoJ1Jvd0RibGNsaWNrJywgZXZ0LCByb3csIHBhZ2VJbmRleClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMub25Sb3dDb250ZXh0bWVudSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGRhdGEuY2xhc3NbICdjdXJzb3ItcG9pbnRlcicgXSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNvbnRleHRtZW51ID0gZXZ0ID0+IHtcbiAgICAgICAgICBlbWl0KCdSb3dDb250ZXh0bWVudScsIGV2dCwgcm93LCBwYWdlSW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RyJywgZGF0YSwgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEJvZHkgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgYm9keSA9IHNsb3RzLmJvZHksXG4gICAgICAgIHRvcFJvdyA9IHNsb3RzWyAndG9wLXJvdycgXSxcbiAgICAgICAgYm90dG9tUm93ID0gc2xvdHNbICdib3R0b20tcm93JyBdXG5cbiAgICAgIGxldCBjaGlsZCA9IGNvbXB1dGVkUm93cy52YWx1ZS5tYXAoXG4gICAgICAgIChyb3csIHBhZ2VJbmRleCkgPT4gZ2V0VEJvZHlUUihyb3csIGJvZHksIHBhZ2VJbmRleClcbiAgICAgIClcblxuICAgICAgaWYgKHRvcFJvdyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gdG9wUm93KHsgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlIH0pLmNvbmNhdChjaGlsZClcbiAgICAgIH1cbiAgICAgIGlmIChib3R0b21Sb3cgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IGNoaWxkLmNvbmNhdChib3R0b21Sb3coeyBjb2xzOiBjb21wdXRlZENvbHMudmFsdWUgfSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCd0Ym9keScsIGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlTY29wZSAoZGF0YSkge1xuICAgICAgaW5qZWN0Qm9keUNvbW1vblNjb3BlKGRhdGEpXG5cbiAgICAgIGRhdGEuY29scyA9IGRhdGEuY29scy5tYXAoY29sID0+IHtcbiAgICAgICAgY29uc3QgYyA9IHsgLi4uY29sIH1cbiAgICAgICAgaW5qZWN0UHJvcChjLCAndmFsdWUnLCAoKSA9PiBnZXRDZWxsVmFsdWUoY29sLCBkYXRhLnJvdykpXG4gICAgICAgIHJldHVybiBjXG4gICAgICB9KVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEJvZHlDZWxsU2NvcGUgKGRhdGEpIHtcbiAgICAgIGluamVjdEJvZHlDb21tb25TY29wZShkYXRhKVxuICAgICAgaW5qZWN0UHJvcChkYXRhLCAndmFsdWUnLCAoKSA9PiBnZXRDZWxsVmFsdWUoZGF0YS5jb2wsIGRhdGEucm93KSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm9keVNlbGVjdGlvblNjb3BlIChkYXRhKSB7XG4gICAgICBpbmplY3RCb2R5Q29tbW9uU2NvcGUoZGF0YSlcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5qZWN0Qm9keUNvbW1vblNjb3BlIChkYXRhKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgY29sczogY29tcHV0ZWRDb2xzLnZhbHVlLFxuICAgICAgICBjb2xzTWFwOiBjb21wdXRlZENvbHNNYXAudmFsdWUsXG4gICAgICAgIHNvcnQsXG4gICAgICAgIHJvd0luZGV4OiBmaXJzdFJvd0luZGV4LnZhbHVlICsgZGF0YS5wYWdlSW5kZXgsXG4gICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2VcbiAgICAgIH0pXG5cbiAgICAgIGhhc1NlbGVjdGlvbk1vZGUudmFsdWUgPT09IHRydWUgJiYgaW5qZWN0UHJvcChcbiAgICAgICAgZGF0YSxcbiAgICAgICAgJ3NlbGVjdGVkJyxcbiAgICAgICAgKCkgPT4gaXNSb3dTZWxlY3RlZChkYXRhLmtleSksXG4gICAgICAgIChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIGRhdGEua2V5IF0sIFsgZGF0YS5yb3cgXSwgYWRkaW5nLCBldnQpXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaW5qZWN0UHJvcChcbiAgICAgICAgZGF0YSxcbiAgICAgICAgJ2V4cGFuZCcsXG4gICAgICAgICgpID0+IGlzUm93RXhwYW5kZWQoZGF0YS5rZXkpLFxuICAgICAgICBhZGRpbmcgPT4geyB1cGRhdGVFeHBhbmRlZChkYXRhLmtleSwgYWRkaW5nKSB9XG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2VsbFZhbHVlIChjb2wsIHJvdykge1xuICAgICAgY29uc3QgdmFsID0gdHlwZW9mIGNvbC5maWVsZCA9PT0gJ2Z1bmN0aW9uJyA/IGNvbC5maWVsZChyb3cpIDogcm93WyBjb2wuZmllbGQgXVxuICAgICAgcmV0dXJuIGNvbC5mb3JtYXQgIT09IHZvaWQgMCA/IGNvbC5mb3JtYXQodmFsLCByb3cpIDogdmFsXG4gICAgfVxuXG4gICAgY29uc3QgbWFyZ2luYWxzU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgcGFnaW5hdGlvbjogY29tcHV0ZWRQYWdpbmF0aW9uLnZhbHVlLFxuICAgICAgcGFnZXNOdW1iZXI6IHBhZ2VzTnVtYmVyLnZhbHVlLFxuICAgICAgaXNGaXJzdFBhZ2U6IGlzRmlyc3RQYWdlLnZhbHVlLFxuICAgICAgaXNMYXN0UGFnZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgIGZpcnN0UGFnZSxcbiAgICAgIHByZXZQYWdlLFxuICAgICAgbmV4dFBhZ2UsXG4gICAgICBsYXN0UGFnZSxcblxuICAgICAgaW5GdWxsc2NyZWVuOiBpbkZ1bGxzY3JlZW4udmFsdWUsXG4gICAgICB0b2dnbGVGdWxsc2NyZWVuXG4gICAgfSkpXG5cbiAgICBmdW5jdGlvbiBnZXRUb3BEaXYgKCkge1xuICAgICAgY29uc3RcbiAgICAgICAgdG9wID0gc2xvdHMudG9wLFxuICAgICAgICB0b3BMZWZ0ID0gc2xvdHNbICd0b3AtbGVmdCcgXSxcbiAgICAgICAgdG9wUmlnaHQgPSBzbG90c1sgJ3RvcC1yaWdodCcgXSxcbiAgICAgICAgdG9wU2VsZWN0aW9uID0gc2xvdHNbICd0b3Atc2VsZWN0aW9uJyBdLFxuICAgICAgICBoYXNTZWxlY3Rpb24gPSBoYXNTZWxlY3Rpb25Nb2RlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgJiYgdG9wU2VsZWN0aW9uICE9PSB2b2lkIDBcbiAgICAgICAgICAmJiByb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUgPiAwLFxuICAgICAgICB0b3BDbGFzcyA9ICdxLXRhYmxlX190b3AgcmVsYXRpdmUtcG9zaXRpb24gcm93IGl0ZW1zLWNlbnRlcidcblxuICAgICAgaWYgKHRvcCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiB0b3BDbGFzcyB9LCBbIHRvcChtYXJnaW5hbHNTY29wZS52YWx1ZSkgXSlcbiAgICAgIH1cblxuICAgICAgbGV0IGNoaWxkXG5cbiAgICAgIGlmIChoYXNTZWxlY3Rpb24gPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQgPSB0b3BTZWxlY3Rpb24obWFyZ2luYWxzU2NvcGUudmFsdWUpLnNsaWNlKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IFtdXG5cbiAgICAgICAgaWYgKHRvcExlZnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZS1jb250cm9sJyB9LCBbXG4gICAgICAgICAgICAgIHRvcExlZnQobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wcy50aXRsZSkge1xuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fY29udHJvbCcgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFsgJ3EtdGFibGVfX3RpdGxlJywgcHJvcHMudGl0bGVDbGFzcyBdXG4gICAgICAgICAgICAgIH0sIHByb3BzLnRpdGxlKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRvcFJpZ2h0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fc2VwYXJhdG9yIGNvbCcgfSlcbiAgICAgICAgKVxuICAgICAgICBjaGlsZC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBbXG4gICAgICAgICAgICB0b3BSaWdodChtYXJnaW5hbHNTY29wZS52YWx1ZSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiB0b3BDbGFzcyB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJTZWxlY3RlZFZhbHVlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc29tZVJvd3NTZWxlY3RlZC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IG51bGxcbiAgICAgICAgOiBhbGxSb3dzU2VsZWN0ZWQudmFsdWVcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gZ2V0VEhlYWQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBnZXRUSGVhZFRSKClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgndHInLCB7IGNsYXNzOiAncS10YWJsZV9fcHJvZ3Jlc3MnIH0sIFtcbiAgICAgICAgICAgIGgoJ3RoJywge1xuICAgICAgICAgICAgICBjbGFzczogJ3JlbGF0aXZlLXBvc2l0aW9uJyxcbiAgICAgICAgICAgICAgY29sc3BhbjogY29tcHV0ZWRDb2xzcGFuLnZhbHVlXG4gICAgICAgICAgICB9LCBnZXRQcm9ncmVzcygpKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ3RoZWFkJywgY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VEhlYWRUUiAoKSB7XG4gICAgICBjb25zdFxuICAgICAgICBoZWFkZXIgPSBzbG90cy5oZWFkZXIsXG4gICAgICAgIGhlYWRlckNlbGwgPSBzbG90c1sgJ2hlYWRlci1jZWxsJyBdXG5cbiAgICAgIGlmIChoZWFkZXIgIT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gaGVhZGVyKFxuICAgICAgICAgIGdldEhlYWRlclNjb3BlKHsgaGVhZGVyOiB0cnVlIH0pXG4gICAgICAgICkuc2xpY2UoKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IGNvbXB1dGVkQ29scy52YWx1ZS5tYXAoY29sID0+IHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgICBoZWFkZXJDZWxsQ29sID0gc2xvdHNbIGBoZWFkZXItY2VsbC0keyBjb2wubmFtZSB9YCBdLFxuICAgICAgICAgIHNsb3QgPSBoZWFkZXJDZWxsQ29sICE9PSB2b2lkIDAgPyBoZWFkZXJDZWxsQ29sIDogaGVhZGVyQ2VsbCxcbiAgICAgICAgICBwcm9wcyA9IGdldEhlYWRlclNjb3BlKHsgY29sIH0pXG5cbiAgICAgICAgcmV0dXJuIHNsb3QgIT09IHZvaWQgMFxuICAgICAgICAgID8gc2xvdChwcm9wcylcbiAgICAgICAgICA6IGgoUVRoLCB7XG4gICAgICAgICAgICBrZXk6IGNvbC5uYW1lLFxuICAgICAgICAgICAgcHJvcHNcbiAgICAgICAgICB9LCAoKSA9PiBjb2wubGFiZWwpXG4gICAgICB9KVxuXG4gICAgICBpZiAoc2luZ2xlU2VsZWN0aW9uLnZhbHVlID09PSB0cnVlICYmIHByb3BzLmdyaWQgIT09IHRydWUpIHtcbiAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICBoKCd0aCcsIHsgY2xhc3M6ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgfSwgJyAnKVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChtdWx0aXBsZVNlbGVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBzbG90ID0gc2xvdHNbICdoZWFkZXItc2VsZWN0aW9uJyBdXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3QoZ2V0SGVhZGVyU2NvcGUoe30pKVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFDaGVja2JveCwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBoZWFkZXJTZWxlY3RlZFZhbHVlLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgICAgICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBvbk11bHRpcGxlU2VsZWN0aW9uU2V0XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG5cbiAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICBoKCd0aCcsIHsgY2xhc3M6ICdxLXRhYmxlLS1jb2wtYXV0by13aWR0aCcgfSwgY29udGVudClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW1xuICAgICAgICBoKCd0cicsIHtcbiAgICAgICAgICBjbGFzczogcHJvcHMudGFibGVIZWFkZXJDbGFzcyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMudGFibGVIZWFkZXJTdHlsZVxuICAgICAgICB9LCBjaGlsZClcbiAgICAgIF1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXJTY29wZSAoZGF0YSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgIGNvbHM6IGNvbXB1dGVkQ29scy52YWx1ZSxcbiAgICAgICAgc29ydCxcbiAgICAgICAgY29sc01hcDogY29tcHV0ZWRDb2xzTWFwLnZhbHVlLFxuICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlXG4gICAgICB9KVxuXG4gICAgICBpZiAobXVsdGlwbGVTZWxlY3Rpb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaW5qZWN0UHJvcChcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgICdzZWxlY3RlZCcsXG4gICAgICAgICAgKCkgPT4gaGVhZGVyU2VsZWN0ZWRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICBvbk11bHRpcGxlU2VsZWN0aW9uU2V0XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk11bHRpcGxlU2VsZWN0aW9uU2V0ICh2YWwpIHtcbiAgICAgIGlmIChzb21lUm93c1NlbGVjdGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHZhbCA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZVNlbGVjdGlvbihcbiAgICAgICAgY29tcHV0ZWRSb3dzLnZhbHVlLm1hcChnZXRSb3dLZXkudmFsdWUpLFxuICAgICAgICBjb21wdXRlZFJvd3MudmFsdWUsXG4gICAgICAgIHZhbFxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG5hdkljb24gPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBpY28gPSBbXG4gICAgICAgIHByb3BzLmljb25GaXJzdFBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5maXJzdFBhZ2UsXG4gICAgICAgIHByb3BzLmljb25QcmV2UGFnZSB8fCAkcS5pY29uU2V0LnRhYmxlLnByZXZQYWdlLFxuICAgICAgICBwcm9wcy5pY29uTmV4dFBhZ2UgfHwgJHEuaWNvblNldC50YWJsZS5uZXh0UGFnZSxcbiAgICAgICAgcHJvcHMuaWNvbkxhc3RQYWdlIHx8ICRxLmljb25TZXQudGFibGUubGFzdFBhZ2VcbiAgICAgIF1cbiAgICAgIHJldHVybiAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGljby5yZXZlcnNlKCkgOiBpY29cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0Qm90dG9tRGl2ICgpIHtcbiAgICAgIGlmIChwcm9wcy5oaWRlQm90dG9tID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAobm90aGluZ1RvRGlzcGxheS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJvcHMuaGlkZU5vRGF0YSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHByb3BzLmxvYWRpbmcgPT09IHRydWVcbiAgICAgICAgICA/IHByb3BzLmxvYWRpbmdMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLmxvYWRpbmdcbiAgICAgICAgICA6IChwcm9wcy5maWx0ZXIgPyBwcm9wcy5ub1Jlc3VsdHNMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLm5vUmVzdWx0cyA6IHByb3BzLm5vRGF0YUxhYmVsIHx8ICRxLmxhbmcudGFibGUubm9EYXRhKVxuXG4gICAgICAgIGNvbnN0IG5vRGF0YSA9IHNsb3RzWyAnbm8tZGF0YScgXVxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG5vRGF0YSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBbIG5vRGF0YSh7IG1lc3NhZ2UsIGljb246ICRxLmljb25TZXQudGFibGUud2FybmluZywgZmlsdGVyOiBwcm9wcy5maWx0ZXIgfSkgXVxuICAgICAgICAgIDogW1xuICAgICAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLXRhYmxlX19ib3R0b20tbm9kYXRhLWljb24nLFxuICAgICAgICAgICAgICAgIG5hbWU6ICRxLmljb25TZXQudGFibGUud2FybmluZ1xuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyArICcgcS10YWJsZV9fYm90dG9tLS1ub2RhdGEnIH0sIGNoaWxkcmVuKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBib3R0b20gPSBzbG90cy5ib3R0b21cblxuICAgICAgaWYgKGJvdHRvbSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyB9LCBbIGJvdHRvbShtYXJnaW5hbHNTY29wZS52YWx1ZSkgXSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBwcm9wcy5oaWRlU2VsZWN0ZWRCYW5uZXIgIT09IHRydWUgJiYgaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSAmJiByb3dzU2VsZWN0ZWROdW1iZXIudmFsdWUgPiAwXG4gICAgICAgID8gW1xuICAgICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2JywgW1xuICAgICAgICAgICAgICAgIChwcm9wcy5zZWxlY3RlZFJvd3NMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnNlbGVjdGVkUmVjb3Jkcykocm93c1NlbGVjdGVkTnVtYmVyLnZhbHVlKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIDogW11cblxuICAgICAgaWYgKHByb3BzLmhpZGVQYWdpbmF0aW9uICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IGJvdHRvbUNsYXNzICsgJyBqdXN0aWZ5LWVuZCdcbiAgICAgICAgfSwgZ2V0UGFnaW5hdGlvbkRpdihjaGlsZCkpXG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiBib3R0b21DbGFzcyB9LCBjaGlsZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ1NlbGVjdGlvbiAocGFnKSB7XG4gICAgICBzZXRQYWdpbmF0aW9uKHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgcm93c1BlclBhZ2U6IHBhZy52YWx1ZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYWdpbmF0aW9uRGl2IChjaGlsZCkge1xuICAgICAgbGV0IGNvbnRyb2xcbiAgICAgIGNvbnN0XG4gICAgICAgIHsgcm93c1BlclBhZ2UgfSA9IGNvbXB1dGVkUGFnaW5hdGlvbi52YWx1ZSxcbiAgICAgICAgcGFnaW5hdGlvbkxhYmVsID0gcHJvcHMucGFnaW5hdGlvbkxhYmVsIHx8ICRxLmxhbmcudGFibGUucGFnaW5hdGlvbixcbiAgICAgICAgcGFnaW5hdGlvblNsb3QgPSBzbG90cy5wYWdpbmF0aW9uLFxuICAgICAgICBoYXNPcHRzID0gcHJvcHMucm93c1BlclBhZ2VPcHRpb25zLmxlbmd0aCA+IDFcblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX3NlcGFyYXRvciBjb2wnIH0pXG4gICAgICApXG5cbiAgICAgIGlmIChoYXNPcHRzID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtdGFibGVfX2NvbnRyb2wnIH0sIFtcbiAgICAgICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiAncS10YWJsZV9fYm90dG9tLWl0ZW0nIH0sIFtcbiAgICAgICAgICAgICAgcHJvcHMucm93c1BlclBhZ2VMYWJlbCB8fCAkcS5sYW5nLnRhYmxlLnJlY29yZHNQZXJQYWdlXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIGgoUVNlbGVjdCwge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtdGFibGVfX3NlbGVjdCBpbmxpbmUgcS10YWJsZV9fYm90dG9tLWl0ZW0nLFxuICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHJvd3NQZXJQYWdlLFxuICAgICAgICAgICAgICBvcHRpb25zOiBjb21wdXRlZFJvd3NQZXJQYWdlT3B0aW9ucy52YWx1ZSxcbiAgICAgICAgICAgICAgZGlzcGxheVZhbHVlOiByb3dzUGVyUGFnZSA9PT0gMFxuICAgICAgICAgICAgICAgID8gJHEubGFuZy50YWJsZS5hbGxSb3dzXG4gICAgICAgICAgICAgICAgOiByb3dzUGVyUGFnZSxcbiAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICBib3JkZXJsZXNzOiB0cnVlLFxuICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgb3B0aW9uc0RlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICBvcHRpb25zQ292ZXI6IHRydWUsXG4gICAgICAgICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogb25QYWdTZWxlY3Rpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocGFnaW5hdGlvblNsb3QgIT09IHZvaWQgMCkge1xuICAgICAgICBjb250cm9sID0gcGFnaW5hdGlvblNsb3QobWFyZ2luYWxzU2NvcGUudmFsdWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29udHJvbCA9IFtcbiAgICAgICAgICBoKCdzcGFuJywgcm93c1BlclBhZ2UgIT09IDAgPyB7IGNsYXNzOiAncS10YWJsZV9fYm90dG9tLWl0ZW0nIH0gOiB7fSwgW1xuICAgICAgICAgICAgcm93c1BlclBhZ2VcbiAgICAgICAgICAgICAgPyBwYWdpbmF0aW9uTGFiZWwoZmlyc3RSb3dJbmRleC52YWx1ZSArIDEsIE1hdGgubWluKGxhc3RSb3dJbmRleC52YWx1ZSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKSwgY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlKVxuICAgICAgICAgICAgICA6IHBhZ2luYXRpb25MYWJlbCgxLCBmaWx0ZXJlZFNvcnRlZFJvd3NOdW1iZXIudmFsdWUsIGNvbXB1dGVkUm93c051bWJlci52YWx1ZSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG5cbiAgICAgICAgaWYgKHJvd3NQZXJQYWdlICE9PSAwICYmIHBhZ2VzTnVtYmVyLnZhbHVlID4gMSkge1xuICAgICAgICAgIGNvbnN0IGJ0blByb3BzID0ge1xuICAgICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgIGZsYXQ6IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvcHMuZGVuc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGJ0blByb3BzLnNpemUgPSAnc20nXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFnZXNOdW1iZXIudmFsdWUgPiAyICYmIGNvbnRyb2wucHVzaChcbiAgICAgICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgICAgICBrZXk6ICdwZ0ZpcnN0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDAgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGZpcnN0UGFnZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdQcmV2JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDEgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNGaXJzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IHByZXZQYWdlXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgICAgIGtleTogJ3BnTmV4dCcsXG4gICAgICAgICAgICAgIC4uLmJ0blByb3BzLFxuICAgICAgICAgICAgICBpY29uOiBuYXZJY29uLnZhbHVlWyAyIF0sXG4gICAgICAgICAgICAgIGRpc2FibGU6IGlzTGFzdFBhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG5leHRQYWdlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICAgIHBhZ2VzTnVtYmVyLnZhbHVlID4gMiAmJiBjb250cm9sLnB1c2goXG4gICAgICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICAgICAga2V5OiAncGdMYXN0JyxcbiAgICAgICAgICAgICAgLi4uYnRuUHJvcHMsXG4gICAgICAgICAgICAgIGljb246IG5hdkljb24udmFsdWVbIDMgXSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogaXNMYXN0UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgb25DbGljazogbGFzdFBhZ2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19jb250cm9sJyB9LCBjb250cm9sKVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkSGVhZGVyICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gcHJvcHMuZ3JpZEhlYWRlciA9PT0gdHJ1ZVxuICAgICAgICA/IFtcbiAgICAgICAgICAgIGgoJ3RhYmxlJywgeyBjbGFzczogJ3EtdGFibGUnIH0sIFtcbiAgICAgICAgICAgICAgZ2V0VEhlYWQoaClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgID8gZ2V0UHJvZ3Jlc3MoaClcbiAgICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fbWlkZGxlJyB9LCBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmlkQm9keSAoKSB7XG4gICAgICBjb25zdCBpdGVtID0gc2xvdHMuaXRlbSAhPT0gdm9pZCAwXG4gICAgICAgID8gc2xvdHMuaXRlbVxuICAgICAgICA6IHNjb3BlID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZCA9IHNjb3BlLmNvbHMubWFwKFxuICAgICAgICAgICAgY29sID0+IGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tdGl0bGUnIH0sIFsgY29sLmxhYmVsIF0pLFxuICAgICAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtLXZhbHVlJyB9LCBbIGNvbC52YWx1ZSBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAoaGFzU2VsZWN0aW9uTW9kZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qgc2xvdCA9IHNsb3RzWyAnYm9keS1zZWxlY3Rpb24nIF1cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzbG90ICE9PSB2b2lkIDBcbiAgICAgICAgICAgICAgPyBzbG90KHNjb3BlKVxuICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgIGgoUUNoZWNrYm94LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IHNjb3BlLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgICAgICAgICAgICAnb25VcGRhdGU6bW9kZWxWYWx1ZSc6IChhZGRpbmcsIGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGlvbihbIHNjb3BlLmtleSBdLCBbIHNjb3BlLnJvdyBdLCBhZGRpbmcsIGV2dClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYmxlX19ncmlkLWl0ZW0tcm93JyB9LCBjb250ZW50KSxcbiAgICAgICAgICAgICAgaChRU2VwYXJhdG9yLCB7IGRhcms6IGlzRGFyay52YWx1ZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAncS10YWJsZV9fZ3JpZC1pdGVtLWNhcmQnICsgY2FyZERlZmF1bHRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgcHJvcHMuY2FyZENsYXNzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRTdHlsZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMFxuICAgICAgICAgICAgfHwgcHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBkYXRhLmNsYXNzWyAwIF0gKz0gJyBjdXJzb3ItcG9pbnRlcidcblxuICAgICAgICAgICAgaWYgKHByb3BzLm9uUm93Q2xpY2sgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSBldnQgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXQoJ1Jvd0NsaWNrJywgZXZ0LCBzY29wZS5yb3csIHNjb3BlLnBhZ2VJbmRleClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvcHMub25Sb3dEYmxjbGljayAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGRhdGEub25EYmxjbGljayA9IGV2dCA9PiB7XG4gICAgICAgICAgICAgICAgZW1pdCgnUm93RGJsY2xpY2snLCBldnQsIHNjb3BlLnJvdywgc2NvcGUucGFnZUluZGV4KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS10YWJsZV9fZ3JpZC1pdGVtIGNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMydcbiAgICAgICAgICAgICAgKyAoc2NvcGUuc2VsZWN0ZWQgPT09IHRydWUgPyAnIHEtdGFibGVfX2dyaWQtaXRlbS0tc2VsZWN0ZWQnIDogJycpXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2JywgZGF0YSwgY2hpbGQpXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogW1xuICAgICAgICAgICdxLXRhYmxlX19ncmlkLWNvbnRlbnQgcm93JyxcbiAgICAgICAgICBwcm9wcy5jYXJkQ29udGFpbmVyQ2xhc3NcbiAgICAgICAgXSxcbiAgICAgICAgc3R5bGU6IHByb3BzLmNhcmRDb250YWluZXJTdHlsZVxuICAgICAgfSwgY29tcHV0ZWRSb3dzLnZhbHVlLm1hcCgocm93LCBwYWdlSW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0oZ2V0Qm9keVNjb3BlKHtcbiAgICAgICAgICBrZXk6IGdldFJvd0tleS52YWx1ZShyb3cpLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBwYWdlSW5kZXhcbiAgICAgICAgfSkpXG4gICAgICB9KSlcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHMgYW5kIG5lZWRlZCBjb21wdXRlZCBwcm9wc1xuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHJlcXVlc3RTZXJ2ZXJJbnRlcmFjdGlvbixcbiAgICAgIHNldFBhZ2luYXRpb24sXG4gICAgICBmaXJzdFBhZ2UsXG4gICAgICBwcmV2UGFnZSxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgbGFzdFBhZ2UsXG4gICAgICBpc1Jvd1NlbGVjdGVkLFxuICAgICAgY2xlYXJTZWxlY3Rpb24sXG4gICAgICBpc1Jvd0V4cGFuZGVkLFxuICAgICAgc2V0RXhwYW5kZWQsXG4gICAgICBzb3J0LFxuICAgICAgcmVzZXRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgc2Nyb2xsVG8sXG4gICAgICBnZXRDZWxsVmFsdWVcbiAgICB9KVxuXG4gICAgaW5qZWN0TXVsdGlwbGVQcm9wcyh2bS5wcm94eSwge1xuICAgICAgZmlsdGVyZWRTb3J0ZWRSb3dzOiAoKSA9PiBmaWx0ZXJlZFNvcnRlZFJvd3MudmFsdWUsXG4gICAgICBjb21wdXRlZFJvd3M6ICgpID0+IGNvbXB1dGVkUm93cy52YWx1ZSxcbiAgICAgIGNvbXB1dGVkUm93c051bWJlcjogKCkgPT4gY29tcHV0ZWRSb3dzTnVtYmVyLnZhbHVlXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IFsgZ2V0VG9wRGl2KCkgXVxuICAgICAgY29uc3QgZGF0YSA9IHsgcmVmOiByb290UmVmLCBjbGFzczogY29udGFpbmVyQ2xhc3MudmFsdWUgfVxuXG4gICAgICBpZiAocHJvcHMuZ3JpZCA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZC5wdXNoKGdldEdyaWRIZWFkZXIoKSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICBjbGFzczogWyBkYXRhLmNsYXNzLCBwcm9wcy5jYXJkQ2xhc3MgXSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuY2FyZFN0eWxlXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGdldEJvZHkoKSxcbiAgICAgICAgZ2V0Qm90dG9tRGl2KClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLmxvYWRpbmcgPT09IHRydWUgJiYgc2xvdHMubG9hZGluZyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgc2xvdHMubG9hZGluZygpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIGRhdGEsIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJlbCIsImgiLCJkZWZhdWx0U2l6ZXMiLCJvcHRpb25JbmRleCIsImF0dHJzIiwiZGVmIiwibGFzdFBhZ2UiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7QUFPQSxJQUFBLE1BQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1AsV0FBVztBQUFBLEVBQ1o7QUFBQSxFQUVELE9BQU8sQ0FBRSxPQUFTO0FBQUEsRUFFbEIsTUFBTyxPQUFPLEVBQUUsT0FBTyxLQUFJLEdBQUk7QUFDN0IsVUFBTSxLQUFLLG1CQUFvQjtBQUMvQixVQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUUsRUFBSSxJQUFHO0FBRTFCLFVBQU0sVUFBVSxTQUFPO0FBQUUsV0FBSyxTQUFTLEdBQUc7QUFBQSxJQUFHO0FBRTdDLFdBQU8sTUFBTTtBQUNYLFVBQUksTUFBTSxVQUFVLFFBQVE7QUFDMUIsZUFBTyxFQUFFLE1BQU07QUFBQSxVQUNiLE9BQU8sTUFBTSxjQUFjLE9BQU8sNEJBQTRCO0FBQUEsVUFDOUQ7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

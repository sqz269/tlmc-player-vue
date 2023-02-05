import { k as createComponent, bn as useFieldProps, bo as useFieldEmits, bp as useField, bq as useFieldState, t as useDarkProps, br as useSizeProps, x as useDark, bs as useSize, c as computed, G as hDir, g as getCurrentInstance, h, ae as QIcon, bt as hMergeSlotSafely, an as Ripple, a9 as stopAndPrevent, aL as noop, r as ref, w as watch, D as nextTick, bu as debounce, bv as onBeforeMount, av as onDeactivated, aw as onActivated, n as onBeforeUnmount, a5 as useFormProps, bw as useFormInputNameAttr, bx as fieldValueIsFilled, aH as isDeepEqual, by as onBeforeUpdate, bl as onUpdated, b0 as prevent, bz as useKeyComposition, au as stop, aF as isKeyCode, aG as shouldIgnoreKey, aC as QDialog, M as hMergeSlot } from "./index.47bc951f.js";
import { b as QMenu, Q as QItemSection, a as QItem } from "./QMenu.a93edd36.js";
import { r as rtlHasScrollBug, Q as QItemLabel } from "./rtl.c9bb81c1.js";
import { n as normalizeToInterval } from "./format.a33550d6.js";
var QField = createComponent({
  name: "QField",
  inheritAttrs: false,
  props: useFieldProps,
  emits: useFieldEmits,
  setup() {
    return useField(useFieldState());
  }
});
const defaultSizes = {
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
    removeAriaLabel: String,
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
    const sizeStyle = useSize(props, defaultSizes);
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
    const attributes = computed(() => {
      const chip = props.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: props.tabindex || 0 };
      const remove = {
        ...chip,
        role: "button",
        "aria-hidden": "false",
        "aria-label": props.removeAriaLabel || $q.lang.label.remove
      };
      return { chip, remove };
    });
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
          ...attributes.value.remove,
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
        attributes.value.chip,
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
      props.onVirtualScroll !== void 0 && emit("virtualScroll", {
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
    "inputValue",
    "newValue",
    "keyup",
    "keypress",
    "keydown",
    "filterAbort"
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
    const ariaCurrentValue = computed(() => props.displayValue !== void 0 ? props.displayValue : selectedString.value);
    const needsHtmlFn = computed(() => props.optionsHtml === true ? () => true : (opt) => opt !== void 0 && opt !== null && opt.html === true);
    const valueAsHtml = computed(() => props.displayValueHtml === true || props.displayValue === void 0 && (props.optionsHtml === true || innerValue.value.some(needsHtmlFn.value)));
    const tabindex = computed(() => state.focused.value === true ? props.tabindex : -1);
    const comboboxAttrs = computed(() => {
      const attrs = {
        tabindex: props.tabindex,
        role: "combobox",
        "aria-label": props.label,
        "aria-readonly": props.readonly === true ? "true" : "false",
        "aria-autocomplete": props.useInput === true ? "list" : "none",
        "aria-expanded": menu.value === true ? "true" : "false",
        "aria-controls": `${state.targetUid.value}_lb`
      };
      if (optionIndex.value >= 0) {
        attrs["aria-activedescendant"] = `${state.targetUid.value}_${optionIndex.value}`;
      }
      return attrs;
    });
    const listboxAttrs = computed(() => ({
      id: `${state.targetUid.value}_lb`,
      role: "listbox",
      "aria-multiselectable": props.multiple === true ? "true" : "false"
    }));
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
      if (optionsLength > 0 && props.useInput !== true && e.key !== void 0 && e.key.length === 1 && e.altKey === false && e.ctrlKey === false && e.metaKey === false && (e.keyCode !== 32 || searchBuffer.length > 0)) {
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
          emit("newValue", inputValue.value, done);
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
      return hasDialog === true ? menuContentRef.value : menuRef.value !== null && menuRef.value.contentEl !== null ? menuRef.value.contentEl : void 0;
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
          [valueAsHtml.value === true ? "innerHTML" : "textContent"]: ariaCurrentValue.value
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
        "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
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
        emit("inputValue", val);
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
        emit("filterAbort");
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
          emit("filterAbort");
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
      emit("popupShow", e);
      state.hasPopupOpen = true;
      state.onControlFocusin(e);
    }
    function onControlPopupHide(e) {
      e !== void 0 && stop(e);
      emit("popupHide", e);
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
              value: ariaCurrentValue.value,
              readonly: true,
              "data-autofocus": fromDialog === true || props.autofocus === true || void 0,
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
export { QSelect as Q, QChip as a, useVirtualScroll as b, commonVirtPropsList as c, useVirtualScrollProps as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNlbGVjdC45YWQ0ZGU0MC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9maWVsZC9RRmllbGQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2NoaXAvUUNoaXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL3VzZS12aXJ0dWFsLXNjcm9sbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2VsZWN0L1FTZWxlY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUZpZWxkLCB7IHVzZUZpZWxkU3RhdGUsIHVzZUZpZWxkUHJvcHMsIHVzZUZpZWxkRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1maWVsZC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRmllbGQnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHVzZUZpZWxkUHJvcHMsXG5cbiAgZW1pdHM6IHVzZUZpZWxkRW1pdHMsXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiB1c2VGaWVsZCh1c2VGaWVsZFN0YXRlKCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IFJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1JpcHBsZS5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VTaXplLCB7IHVzZVNpemVQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNpemUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3RTYWZlbHksIGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTaXplcyA9IHtcbiAgeHM6IDgsXG4gIHNtOiAxMCxcbiAgbWQ6IDE0LFxuICBsZzogMjAsXG4gIHhsOiAyNFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUNoaXAnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuICAgIC4uLnVzZVNpemVQcm9wcyxcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuXG4gICAgaWNvbjogU3RyaW5nLFxuICAgIGljb25SaWdodDogU3RyaW5nLFxuICAgIGljb25SZW1vdmU6IFN0cmluZyxcbiAgICBpY29uU2VsZWN0ZWQ6IFN0cmluZyxcbiAgICBsYWJlbDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgY29sb3I6IFN0cmluZyxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICBzZWxlY3RlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgY2xpY2thYmxlOiBCb29sZWFuLFxuICAgIHJlbW92YWJsZTogQm9vbGVhbixcblxuICAgIHJlbW92ZUFyaWFMYWJlbDogU3RyaW5nLFxuXG4gICAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuXG4gICAgcmlwcGxlOiB7XG4gICAgICB0eXBlOiBbIEJvb2xlYW4sIE9iamVjdCBdLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnLCAndXBkYXRlOnNlbGVjdGVkJywgJ3JlbW92ZScsICdjbGljaycgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHNpemVTdHlsZSA9IHVzZVNpemUocHJvcHMsIGRlZmF1bHRTaXplcylcblxuICAgIGNvbnN0IGhhc0xlZnRJY29uID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2VsZWN0ZWQgPT09IHRydWUgfHwgcHJvcHMuaWNvbiAhPT0gdm9pZCAwKVxuXG4gICAgY29uc3QgbGVmdEljb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5zZWxlY3RlZCA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmljb25TZWxlY3RlZCB8fCAkcS5pY29uU2V0LmNoaXAuc2VsZWN0ZWRcbiAgICAgICAgOiBwcm9wcy5pY29uXG4gICAgKSlcblxuICAgIGNvbnN0IHJlbW92ZUljb24gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5pY29uUmVtb3ZlIHx8ICRxLmljb25TZXQuY2hpcC5yZW1vdmUpXG5cbiAgICBjb25zdCBpc0NsaWNrYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlID09PSBmYWxzZVxuICAgICAgJiYgKHByb3BzLmNsaWNrYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5zZWxlY3RlZCAhPT0gbnVsbClcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdGV4dCA9IHByb3BzLm91dGxpbmUgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5jb2xvciB8fCBwcm9wcy50ZXh0Q29sb3JcbiAgICAgICAgOiBwcm9wcy50ZXh0Q29sb3JcblxuICAgICAgcmV0dXJuICdxLWNoaXAgcm93IGlubGluZSBuby13cmFwIGl0ZW1zLWNlbnRlcidcbiAgICAgICAgKyAocHJvcHMub3V0bGluZSA9PT0gZmFsc2UgJiYgcHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuY29sb3IgfWAgOiAnJylcbiAgICAgICAgKyAodGV4dCA/IGAgdGV4dC0keyB0ZXh0IH0gcS1jaGlwLS1jb2xvcmVkYCA6ICcnKVxuICAgICAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnJylcbiAgICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtY2hpcC0tZGVuc2UnIDogJycpXG4gICAgICAgICsgKHByb3BzLm91dGxpbmUgPT09IHRydWUgPyAnIHEtY2hpcC0tb3V0bGluZScgOiAnJylcbiAgICAgICAgKyAocHJvcHMuc2VsZWN0ZWQgPT09IHRydWUgPyAnIHEtY2hpcC0tc2VsZWN0ZWQnIDogJycpXG4gICAgICAgICsgKGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLWNoaXAtLWNsaWNrYWJsZSBjdXJzb3ItcG9pbnRlciBub24tc2VsZWN0YWJsZSBxLWhvdmVyYWJsZScgOiAnJylcbiAgICAgICAgKyAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLWNoaXAtLXNxdWFyZScgOiAnJylcbiAgICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWNoaXAtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgIH0pXG5cbiAgICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY2hpcCA9IHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgICAgPyB7IHRhYmluZGV4OiAtMSwgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScgfVxuICAgICAgICA6IHsgdGFiaW5kZXg6IHByb3BzLnRhYmluZGV4IHx8IDAgfVxuICAgICAgY29uc3QgcmVtb3ZlID0ge1xuICAgICAgICAuLi5jaGlwLFxuICAgICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5yZW1vdmVBcmlhTGFiZWwgfHwgJHEubGFuZy5sYWJlbC5yZW1vdmVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgY2hpcCwgcmVtb3ZlIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25LZXl1cCAoZSkge1xuICAgICAgZS5rZXlDb2RlID09PSAxMyAvKiBFTlRFUiAqLyAmJiBvbkNsaWNrKGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgICAgaWYgKCFwcm9wcy5kaXNhYmxlKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTpzZWxlY3RlZCcsICFwcm9wcy5zZWxlY3RlZClcbiAgICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUmVtb3ZlIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSB2b2lkIDAgfHwgZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgICAgICAgIGVtaXQoJ3JlbW92ZScpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgY2hpbGQucHVzaChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJyB9KVxuICAgICAgKVxuXG4gICAgICBoYXNMZWZ0SWNvbi52YWx1ZSA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWNoaXBfX2ljb24gcS1jaGlwX19pY29uLS1sZWZ0JyxcbiAgICAgICAgICBuYW1lOiBsZWZ0SWNvbi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBjb25zdCBsYWJlbCA9IHByb3BzLmxhYmVsICE9PSB2b2lkIDBcbiAgICAgICAgPyBbIGgoJ2RpdicsIHsgY2xhc3M6ICdlbGxpcHNpcycgfSwgWyBwcm9wcy5sYWJlbCBdKSBdXG4gICAgICAgIDogdm9pZCAwXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2hpcF9fY29udGVudCBjb2wgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyIHEtYW5jaG9yLS1za2lwJ1xuICAgICAgICB9LCBoTWVyZ2VTbG90U2FmZWx5KHNsb3RzLmRlZmF1bHQsIGxhYmVsKSlcbiAgICAgIClcblxuICAgICAgcHJvcHMuaWNvblJpZ2h0ICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2hpcF9faWNvbiBxLWNoaXBfX2ljb24tLXJpZ2h0JyxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5pY29uUmlnaHRcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcHJvcHMucmVtb3ZhYmxlID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtY2hpcF9faWNvbiBxLWNoaXBfX2ljb24tLXJlbW92ZSBjdXJzb3ItcG9pbnRlcicsXG4gICAgICAgICAgbmFtZTogcmVtb3ZlSWNvbi52YWx1ZSxcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlLnJlbW92ZSxcbiAgICAgICAgICBvbkNsaWNrOiBvblJlbW92ZSxcbiAgICAgICAgICBvbktleXVwOiBvblJlbW92ZVxuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IGZhbHNlKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2l6ZVN0eWxlLnZhbHVlXG4gICAgICB9XG5cbiAgICAgIGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlICYmIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGF0dHJpYnV0ZXMudmFsdWUuY2hpcCxcbiAgICAgICAgeyBvbkNsaWNrLCBvbktleXVwIH1cbiAgICAgIClcblxuICAgICAgcmV0dXJuIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBkYXRhLFxuICAgICAgICBnZXRDb250ZW50KCksXG4gICAgICAgICdyaXBwbGUnLFxuICAgICAgICBwcm9wcy5yaXBwbGUgIT09IGZhbHNlICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUsXG4gICAgICAgICgpID0+IFsgWyBSaXBwbGUsIHByb3BzLnJpcHBsZSBdIF1cbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlTW91bnQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlLmpzJ1xuaW1wb3J0IHsgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgcnRsSGFzU2Nyb2xsQnVnIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9ydGwuanMnXG5cbmNvbnN0IGFnZ0J1Y2tldFNpemUgPSAxMDAwXG5cbmNvbnN0IHNjcm9sbFRvRWRnZXMgPSBbXG4gICdzdGFydCcsXG4gICdjZW50ZXInLFxuICAnZW5kJyxcbiAgJ3N0YXJ0LWZvcmNlJyxcbiAgJ2NlbnRlci1mb3JjZScsXG4gICdlbmQtZm9yY2UnXG5dXG5cbmNvbnN0IGZpbHRlclByb3RvID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuXG5jb25zdCBzZXRPdmVyZmxvd0FuY2hvciA9IF9fUVVBU0FSX1NTUl9fIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLm92ZXJmbG93QW5jaG9yID09PSB2b2lkIDBcbiAgPyBub29wXG4gIDogZnVuY3Rpb24gKGNvbnRlbnRFbCwgaW5kZXgpIHtcbiAgICBpZiAoY29udGVudEVsID09PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShjb250ZW50RWwuX3FPdmVyZmxvd0FuaW1hdGlvbkZyYW1lKVxuICAgIGNvbnRlbnRFbC5fcU92ZXJmbG93QW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgaWYgKGNvbnRlbnRFbCA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGRyZW4gPSBjb250ZW50RWwuY2hpbGRyZW4gfHwgW11cblxuICAgICAgZmlsdGVyUHJvdG9cbiAgICAgICAgLmNhbGwoY2hpbGRyZW4sIGVsID0+IGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldC5xVnNBbmNob3IgIT09IHZvaWQgMClcbiAgICAgICAgLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgIGRlbGV0ZSBlbC5kYXRhc2V0LnFWc0FuY2hvclxuICAgICAgICB9KVxuXG4gICAgICBjb25zdCBlbCA9IGNoaWxkcmVuWyBpbmRleCBdXG5cbiAgICAgIGlmIChlbCAmJiBlbC5kYXRhc2V0KSB7XG4gICAgICAgIGVsLmRhdGFzZXQucVZzQW5jaG9yID0gJydcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbmZ1bmN0aW9uIHN1bUZuIChhY2MsIGgpIHtcbiAgcmV0dXJuIGFjYyArIGhcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsRGV0YWlscyAoXG4gIHBhcmVudCxcbiAgY2hpbGQsXG4gIGJlZm9yZVJlZixcbiAgYWZ0ZXJSZWYsXG4gIGhvcml6b250YWwsXG4gIHJ0bCxcbiAgc3RpY2t5U3RhcnQsXG4gIHN0aWNreUVuZFxuKSB7XG4gIGNvbnN0XG4gICAgcGFyZW50Q2FsYyA9IHBhcmVudCA9PT0gd2luZG93ID8gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBwYXJlbnQsXG4gICAgcHJvcEVsU2l6ZSA9IGhvcml6b250YWwgPT09IHRydWUgPyAnb2Zmc2V0V2lkdGgnIDogJ29mZnNldEhlaWdodCcsXG4gICAgZGV0YWlscyA9IHtcbiAgICAgIHNjcm9sbFN0YXJ0OiAwLFxuICAgICAgc2Nyb2xsVmlld1NpemU6IC1zdGlja3lTdGFydCAtIHN0aWNreUVuZCxcbiAgICAgIHNjcm9sbE1heFNpemU6IDAsXG4gICAgICBvZmZzZXRTdGFydDogLXN0aWNreVN0YXJ0LFxuICAgICAgb2Zmc2V0RW5kOiAtc3RpY2t5RW5kXG4gICAgfVxuXG4gIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgaWYgKHBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxYIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCB8fCAwXG4gICAgICBkZXRhaWxzLnNjcm9sbFZpZXdTaXplICs9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRldGFpbHMuc2Nyb2xsU3RhcnQgPSBwYXJlbnRDYWxjLnNjcm9sbExlZnRcbiAgICAgIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgKz0gcGFyZW50Q2FsYy5jbGllbnRXaWR0aFxuICAgIH1cbiAgICBkZXRhaWxzLnNjcm9sbE1heFNpemUgPSBwYXJlbnRDYWxjLnNjcm9sbFdpZHRoXG5cbiAgICBpZiAocnRsID09PSB0cnVlKSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gKHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gdHJ1ZSA/IGRldGFpbHMuc2Nyb2xsTWF4U2l6ZSAtIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgOiAwKSAtIGRldGFpbHMuc2Nyb2xsU3RhcnRcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgaWYgKHBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgICBkZXRhaWxzLnNjcm9sbFN0YXJ0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDBcbiAgICAgIGRldGFpbHMuc2Nyb2xsVmlld1NpemUgKz0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRldGFpbHMuc2Nyb2xsU3RhcnQgPSBwYXJlbnRDYWxjLnNjcm9sbFRvcFxuICAgICAgZGV0YWlscy5zY3JvbGxWaWV3U2l6ZSArPSBwYXJlbnRDYWxjLmNsaWVudEhlaWdodFxuICAgIH1cbiAgICBkZXRhaWxzLnNjcm9sbE1heFNpemUgPSBwYXJlbnRDYWxjLnNjcm9sbEhlaWdodFxuICB9XG5cbiAgaWYgKGJlZm9yZVJlZiAhPT0gbnVsbCkge1xuICAgIGZvciAobGV0IGVsID0gYmVmb3JlUmVmLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7IGVsICE9PSBudWxsOyBlbCA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpIHtcbiAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtdmlydHVhbC1zY3JvbGwtLXNraXAnKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGV0YWlscy5vZmZzZXRTdGFydCArPSBlbFsgcHJvcEVsU2l6ZSBdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGFmdGVyUmVmICE9PSBudWxsKSB7XG4gICAgZm9yIChsZXQgZWwgPSBhZnRlclJlZi5uZXh0RWxlbWVudFNpYmxpbmc7IGVsICE9PSBudWxsOyBlbCA9IGVsLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygncS12aXJ0dWFsLXNjcm9sbC0tc2tpcCcpID09PSBmYWxzZSkge1xuICAgICAgICBkZXRhaWxzLm9mZnNldEVuZCArPSBlbFsgcHJvcEVsU2l6ZSBdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGNoaWxkICE9PSBwYXJlbnQpIHtcbiAgICBjb25zdFxuICAgICAgcGFyZW50UmVjdCA9IHBhcmVudENhbGMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBjaGlsZFJlY3QgPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgaWYgKGhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgIGRldGFpbHMub2Zmc2V0U3RhcnQgKz0gY2hpbGRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnRcbiAgICAgIGRldGFpbHMub2Zmc2V0RW5kIC09IGNoaWxkUmVjdC53aWR0aFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRldGFpbHMub2Zmc2V0U3RhcnQgKz0gY2hpbGRSZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wXG4gICAgICBkZXRhaWxzLm9mZnNldEVuZCAtPSBjaGlsZFJlY3QuaGVpZ2h0XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCAhPT0gd2luZG93KSB7XG4gICAgICBkZXRhaWxzLm9mZnNldFN0YXJ0ICs9IGRldGFpbHMuc2Nyb2xsU3RhcnRcbiAgICB9XG4gICAgZGV0YWlscy5vZmZzZXRFbmQgKz0gZGV0YWlscy5zY3JvbGxNYXhTaXplIC0gZGV0YWlscy5vZmZzZXRTdGFydFxuICB9XG5cbiAgcmV0dXJuIGRldGFpbHNcbn1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsIChwYXJlbnQsIHNjcm9sbCwgaG9yaXpvbnRhbCwgcnRsKSB7XG4gIGlmIChzY3JvbGwgPT09ICdlbmQnKSB7XG4gICAgc2Nyb2xsID0gKHBhcmVudCA9PT0gd2luZG93ID8gZG9jdW1lbnQuYm9keSA6IHBhcmVudClbXG4gICAgICBob3Jpem9udGFsID09PSB0cnVlID8gJ3Njcm9sbFdpZHRoJyA6ICdzY3JvbGxIZWlnaHQnXG4gICAgXVxuICB9XG5cbiAgaWYgKHBhcmVudCA9PT0gd2luZG93KSB7XG4gICAgaWYgKGhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChydGwgPT09IHRydWUpIHtcbiAgICAgICAgc2Nyb2xsID0gKHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gdHJ1ZSA/IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggOiAwKSAtIHNjcm9sbFxuICAgICAgfVxuICAgICAgd2luZG93LnNjcm9sbFRvKHNjcm9sbCwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxZIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wIHx8IDApXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgd2luZG93LnNjcm9sbFRvKHdpbmRvdy5wYWdlWE9mZnNldCB8fCB3aW5kb3cuc2Nyb2xsWCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgMCwgc2Nyb2xsKVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgaWYgKHJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgc2Nyb2xsID0gKHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gdHJ1ZSA/IHBhcmVudC5zY3JvbGxXaWR0aCAtIHBhcmVudC5vZmZzZXRXaWR0aCA6IDApIC0gc2Nyb2xsXG4gICAgfVxuICAgIHBhcmVudC5zY3JvbGxMZWZ0ID0gc2Nyb2xsXG4gIH1cbiAgZWxzZSB7XG4gICAgcGFyZW50LnNjcm9sbFRvcCA9IHNjcm9sbFxuICB9XG59XG5cbmZ1bmN0aW9uIHN1bVNpemUgKHNpemVBZ2csIHNpemUsIGZyb20sIHRvKSB7XG4gIGlmIChmcm9tID49IHRvKSB7IHJldHVybiAwIH1cblxuICBjb25zdFxuICAgIGxhc3RUbyA9IHNpemUubGVuZ3RoLFxuICAgIGZyb21BZ2cgPSBNYXRoLmZsb29yKGZyb20gLyBhZ2dCdWNrZXRTaXplKSxcbiAgICB0b0FnZyA9IE1hdGguZmxvb3IoKHRvIC0gMSkgLyBhZ2dCdWNrZXRTaXplKSArIDFcblxuICBsZXQgdG90YWwgPSBzaXplQWdnLnNsaWNlKGZyb21BZ2csIHRvQWdnKS5yZWR1Y2Uoc3VtRm4sIDApXG5cbiAgaWYgKGZyb20gJSBhZ2dCdWNrZXRTaXplICE9PSAwKSB7XG4gICAgdG90YWwgLT0gc2l6ZS5zbGljZShmcm9tQWdnICogYWdnQnVja2V0U2l6ZSwgZnJvbSkucmVkdWNlKHN1bUZuLCAwKVxuICB9XG4gIGlmICh0byAlIGFnZ0J1Y2tldFNpemUgIT09IDAgJiYgdG8gIT09IGxhc3RUbykge1xuICAgIHRvdGFsIC09IHNpemUuc2xpY2UodG8sIHRvQWdnICogYWdnQnVja2V0U2l6ZSkucmVkdWNlKHN1bUZuLCAwKVxuICB9XG5cbiAgcmV0dXJuIHRvdGFsXG59XG5cbmNvbnN0IGNvbW1vblZpcnRTY3JvbGxQcm9wcyA9IHtcbiAgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZToge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiBudWxsXG4gIH0sXG5cbiAgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogMVxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQWZ0ZXI6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogMVxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZToge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAyNFxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnQ6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogMFxuICB9LFxuXG4gIHZpcnR1YWxTY3JvbGxTdGlja3lTaXplRW5kOiB7XG4gICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcblxuICB0YWJsZUNvbHNwYW46IFsgTnVtYmVyLCBTdHJpbmcgXVxufVxuXG5leHBvcnQgY29uc3QgY29tbW9uVmlydFByb3BzTGlzdCA9IE9iamVjdC5rZXlzKGNvbW1vblZpcnRTY3JvbGxQcm9wcylcblxuZXhwb3J0IGNvbnN0IHVzZVZpcnR1YWxTY3JvbGxQcm9wcyA9IHtcbiAgdmlydHVhbFNjcm9sbEhvcml6b250YWw6IEJvb2xlYW4sXG4gIG9uVmlydHVhbFNjcm9sbDogRnVuY3Rpb24sXG4gIC4uLmNvbW1vblZpcnRTY3JvbGxQcm9wc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlVmlydHVhbFNjcm9sbCAoe1xuICB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLCBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0LCBnZXRWaXJ0dWFsU2Nyb2xsRWwsXG4gIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkIC8vIG9wdGlvbmFsXG59KSB7XG4gIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gdm1cbiAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICBsZXQgcHJldlNjcm9sbFN0YXJ0LCBwcmV2VG9JbmRleCwgbG9jYWxTY3JvbGxWaWV3U2l6ZSwgdmlydHVhbFNjcm9sbFNpemVzQWdnID0gW10sIHZpcnR1YWxTY3JvbGxTaXplc1xuXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlID0gcmVmKDApXG4gIGNvbnN0IHZpcnR1YWxTY3JvbGxQYWRkaW5nQWZ0ZXIgPSByZWYoMClcbiAgY29uc3QgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkID0gcmVmKHt9KVxuXG4gIGNvbnN0IGJlZm9yZVJlZiA9IHJlZihudWxsKVxuICBjb25zdCBhZnRlclJlZiA9IHJlZihudWxsKVxuICBjb25zdCBjb250ZW50UmVmID0gcmVmKG51bGwpXG5cbiAgY29uc3QgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UgPSByZWYoeyBmcm9tOiAwLCB0bzogMCB9KVxuXG4gIGNvbnN0IGNvbHNwYW5BdHRyID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnRhYmxlQ29sc3BhbiAhPT0gdm9pZCAwID8gcHJvcHMudGFibGVDb2xzcGFuIDogMTAwKSlcblxuICBpZiAodmlydHVhbFNjcm9sbEl0ZW1TaXplQ29tcHV0ZWQgPT09IHZvaWQgMCkge1xuICAgIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudmlydHVhbFNjcm9sbEl0ZW1TaXplKVxuICB9XG5cbiAgY29uc3QgbmVlZHNSZXNldCA9IGNvbXB1dGVkKCgpID0+IHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkLnZhbHVlICsgJzsnICsgcHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwpXG5cbiAgY29uc3QgbmVlZHNTbGljZVJlY2FsYyA9IGNvbXB1dGVkKCgpID0+XG4gICAgbmVlZHNSZXNldC52YWx1ZSArICc7JyArIHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlICsgJzsnICsgcHJvcHMudmlydHVhbFNjcm9sbFNsaWNlUmF0aW9BZnRlclxuICApXG5cbiAgd2F0Y2gobmVlZHNTbGljZVJlY2FsYywgKCkgPT4geyBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpIH0pXG4gIHdhdGNoKG5lZWRzUmVzZXQsIHJlc2V0KVxuXG4gIGZ1bmN0aW9uIHJlc2V0ICgpIHtcbiAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbChwcmV2VG9JbmRleCwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlZnJlc2ggKHRvSW5kZXgpIHtcbiAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCh0b0luZGV4ID09PSB2b2lkIDAgPyBwcmV2VG9JbmRleCA6IHRvSW5kZXgpXG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxUbyAodG9JbmRleCwgZWRnZSkge1xuICAgIGNvbnN0IHNjcm9sbEVsID0gZ2V0VmlydHVhbFNjcm9sbFRhcmdldCgpXG5cbiAgICBpZiAoc2Nyb2xsRWwgPT09IHZvaWQgMCB8fCBzY3JvbGxFbCA9PT0gbnVsbCB8fCBzY3JvbGxFbC5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2Nyb2xsRGV0YWlscyA9IGdldFNjcm9sbERldGFpbHMoXG4gICAgICBzY3JvbGxFbCxcbiAgICAgIGdldFZpcnR1YWxTY3JvbGxFbCgpLFxuICAgICAgYmVmb3JlUmVmLnZhbHVlLFxuICAgICAgYWZ0ZXJSZWYudmFsdWUsXG4gICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICRxLmxhbmcucnRsLFxuICAgICAgcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVTdGFydCxcbiAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplRW5kXG4gICAgKVxuXG4gICAgbG9jYWxTY3JvbGxWaWV3U2l6ZSAhPT0gc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSAmJiBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZShzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplKVxuXG4gICAgc2V0VmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UoXG4gICAgICBzY3JvbGxFbCxcbiAgICAgIHNjcm9sbERldGFpbHMsXG4gICAgICBNYXRoLm1pbih2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlIC0gMSwgTWF0aC5tYXgoMCwgcGFyc2VJbnQodG9JbmRleCwgMTApIHx8IDApKSxcbiAgICAgIDAsXG4gICAgICBzY3JvbGxUb0VkZ2VzLmluZGV4T2YoZWRnZSkgPiAtMSA/IGVkZ2UgOiAocHJldlRvSW5kZXggPiAtMSAmJiB0b0luZGV4ID4gcHJldlRvSW5kZXggPyAnZW5kJyA6ICdzdGFydCcpXG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gbG9jYWxPblZpcnR1YWxTY3JvbGxFdnQgKCkge1xuICAgIGNvbnN0IHNjcm9sbEVsID0gZ2V0VmlydHVhbFNjcm9sbFRhcmdldCgpXG5cbiAgICBpZiAoc2Nyb2xsRWwgPT09IHZvaWQgMCB8fCBzY3JvbGxFbCA9PT0gbnVsbCB8fCBzY3JvbGxFbC5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3RcbiAgICAgIHNjcm9sbERldGFpbHMgPSBnZXRTY3JvbGxEZXRhaWxzKFxuICAgICAgICBzY3JvbGxFbCxcbiAgICAgICAgZ2V0VmlydHVhbFNjcm9sbEVsKCksXG4gICAgICAgIGJlZm9yZVJlZi52YWx1ZSxcbiAgICAgICAgYWZ0ZXJSZWYudmFsdWUsXG4gICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsLFxuICAgICAgICAkcS5sYW5nLnJ0bCxcbiAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVTdGFydCxcbiAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVFbmRcbiAgICAgICksXG4gICAgICBsaXN0TGFzdEluZGV4ID0gdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDEsXG4gICAgICBsaXN0RW5kT2Zmc2V0ID0gc2Nyb2xsRGV0YWlscy5zY3JvbGxNYXhTaXplIC0gc2Nyb2xsRGV0YWlscy5vZmZzZXRTdGFydCAtIHNjcm9sbERldGFpbHMub2Zmc2V0RW5kIC0gdmlydHVhbFNjcm9sbFBhZGRpbmdBZnRlci52YWx1ZVxuXG4gICAgaWYgKHByZXZTY3JvbGxTdGFydCA9PT0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHNjcm9sbERldGFpbHMuc2Nyb2xsTWF4U2l6ZSA8PSAwKSB7XG4gICAgICBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZShzY3JvbGxFbCwgc2Nyb2xsRGV0YWlscywgMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxvY2FsU2Nyb2xsVmlld1NpemUgIT09IHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUgJiYgc2V0VmlydHVhbFNjcm9sbFNpemUoc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSlcblxuICAgIHVwZGF0ZVZpcnR1YWxTY3JvbGxTaXplcyh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tKVxuXG4gICAgY29uc3Qgc2Nyb2xsTWF4U3RhcnQgPSBNYXRoLmZsb29yKHNjcm9sbERldGFpbHMuc2Nyb2xsTWF4U2l6ZVxuICAgICAgLSBNYXRoLm1heChzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplLCBzY3JvbGxEZXRhaWxzLm9mZnNldEVuZClcbiAgICAgIC0gTWF0aC5taW4odmlydHVhbFNjcm9sbFNpemVzWyBsaXN0TGFzdEluZGV4IF0sIHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUgLyAyKSlcblxuICAgIGlmIChzY3JvbGxNYXhTdGFydCA+IDAgJiYgTWF0aC5jZWlsKHNjcm9sbERldGFpbHMuc2Nyb2xsU3RhcnQpID49IHNjcm9sbE1heFN0YXJ0KSB7XG4gICAgICBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZShcbiAgICAgICAgc2Nyb2xsRWwsXG4gICAgICAgIHNjcm9sbERldGFpbHMsXG4gICAgICAgIGxpc3RMYXN0SW5kZXgsXG4gICAgICAgIHNjcm9sbERldGFpbHMuc2Nyb2xsTWF4U2l6ZSAtIHNjcm9sbERldGFpbHMub2Zmc2V0RW5kIC0gdmlydHVhbFNjcm9sbFNpemVzQWdnLnJlZHVjZShzdW1GbiwgMClcbiAgICAgIClcblxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0XG4gICAgICB0b0luZGV4ID0gMCxcbiAgICAgIGxpc3RPZmZzZXQgPSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0IC0gc2Nyb2xsRGV0YWlscy5vZmZzZXRTdGFydCxcbiAgICAgIG9mZnNldCA9IGxpc3RPZmZzZXRcblxuICAgIGlmIChsaXN0T2Zmc2V0IDw9IGxpc3RFbmRPZmZzZXQgJiYgbGlzdE9mZnNldCArIHNjcm9sbERldGFpbHMuc2Nyb2xsVmlld1NpemUgPj0gdmlydHVhbFNjcm9sbFBhZGRpbmdCZWZvcmUudmFsdWUpIHtcbiAgICAgIGxpc3RPZmZzZXQgLT0gdmlydHVhbFNjcm9sbFBhZGRpbmdCZWZvcmUudmFsdWVcbiAgICAgIHRvSW5kZXggPSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tXG4gICAgICBvZmZzZXQgPSBsaXN0T2Zmc2V0XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGxpc3RPZmZzZXQgPj0gdmlydHVhbFNjcm9sbFNpemVzQWdnWyBqIF0gJiYgdG9JbmRleCA8IGxpc3RMYXN0SW5kZXg7IGorKykge1xuICAgICAgICBsaXN0T2Zmc2V0IC09IHZpcnR1YWxTY3JvbGxTaXplc0FnZ1sgaiBdXG4gICAgICAgIHRvSW5kZXggKz0gYWdnQnVja2V0U2l6ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlIChsaXN0T2Zmc2V0ID4gMCAmJiB0b0luZGV4IDwgbGlzdExhc3RJbmRleCkge1xuICAgICAgbGlzdE9mZnNldCAtPSB2aXJ0dWFsU2Nyb2xsU2l6ZXNbIHRvSW5kZXggXVxuICAgICAgaWYgKGxpc3RPZmZzZXQgPiAtc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZSkge1xuICAgICAgICB0b0luZGV4KytcbiAgICAgICAgb2Zmc2V0ID0gbGlzdE9mZnNldFxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG9mZnNldCA9IHZpcnR1YWxTY3JvbGxTaXplc1sgdG9JbmRleCBdICsgbGlzdE9mZnNldFxuICAgICAgfVxuICAgIH1cblxuICAgIHNldFZpcnR1YWxTY3JvbGxTbGljZVJhbmdlKFxuICAgICAgc2Nyb2xsRWwsXG4gICAgICBzY3JvbGxEZXRhaWxzLFxuICAgICAgdG9JbmRleCxcbiAgICAgIG9mZnNldFxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFZpcnR1YWxTY3JvbGxTbGljZVJhbmdlIChzY3JvbGxFbCwgc2Nyb2xsRGV0YWlscywgdG9JbmRleCwgb2Zmc2V0LCBhbGlnbikge1xuICAgIGNvbnN0IGFsaWduRm9yY2UgPSB0eXBlb2YgYWxpZ24gPT09ICdzdHJpbmcnICYmIGFsaWduLmluZGV4T2YoJy1mb3JjZScpID4gLTFcbiAgICBjb25zdCBhbGlnbkVuZCA9IGFsaWduRm9yY2UgPT09IHRydWUgPyBhbGlnbi5yZXBsYWNlKCctZm9yY2UnLCAnJykgOiBhbGlnblxuICAgIGNvbnN0IGFsaWduUmFuZ2UgPSBhbGlnbkVuZCAhPT0gdm9pZCAwID8gYWxpZ25FbmQgOiAnc3RhcnQnXG5cbiAgICBsZXRcbiAgICAgIGZyb20gPSBNYXRoLm1heCgwLCB0b0luZGV4IC0gdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLnZhbHVlWyBhbGlnblJhbmdlIF0pLFxuICAgICAgdG8gPSBmcm9tICsgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLnZhbHVlLnRvdGFsXG5cbiAgICBpZiAodG8gPiB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlKSB7XG4gICAgICB0byA9IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWVcbiAgICAgIGZyb20gPSBNYXRoLm1heCgwLCB0byAtIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZS50b3RhbClcbiAgICB9XG5cbiAgICBwcmV2U2Nyb2xsU3RhcnQgPSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0XG5cbiAgICBjb25zdCByYW5nZUNoYW5nZWQgPSBmcm9tICE9PSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS5mcm9tIHx8IHRvICE9PSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50b1xuXG4gICAgaWYgKHJhbmdlQ2hhbmdlZCA9PT0gZmFsc2UgJiYgYWxpZ25FbmQgPT09IHZvaWQgMCkge1xuICAgICAgZW1pdFNjcm9sbCh0b0luZGV4KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudFxuICAgIGNvbnN0IGNvbnRlbnRFbCA9IGNvbnRlbnRSZWYudmFsdWVcbiAgICBpZiAoXG4gICAgICByYW5nZUNoYW5nZWQgPT09IHRydWVcbiAgICAgICYmIGNvbnRlbnRFbCAhPT0gbnVsbFxuICAgICAgJiYgY29udGVudEVsICE9PSBhY3RpdmVFbGVtZW50XG4gICAgICAmJiBjb250ZW50RWwuY29udGFpbnMoYWN0aXZlRWxlbWVudCkgPT09IHRydWVcbiAgICApIHtcbiAgICAgIGNvbnRlbnRFbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIG9uQmx1clJlZm9jdXNGbilcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnRlbnRFbCAhPT0gbnVsbCAmJiBjb250ZW50RWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBvbkJsdXJSZWZvY3VzRm4pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHNldE92ZXJmbG93QW5jaG9yKGNvbnRlbnRFbCwgdG9JbmRleCAtIGZyb20pXG5cbiAgICBjb25zdCBzaXplQmVmb3JlID0gYWxpZ25FbmQgIT09IHZvaWQgMCA/IHZpcnR1YWxTY3JvbGxTaXplcy5zbGljZShmcm9tLCB0b0luZGV4KS5yZWR1Y2Uoc3VtRm4sIDApIDogMFxuXG4gICAgaWYgKHJhbmdlQ2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgLy8gdnVlIGtleSBtYXRjaGluZyBhbGdvcml0aG0gd29ya3Mgb25seSBpZlxuICAgICAgLy8gdGhlIGFycmF5IG9mIFZOb2RlcyBjaGFuZ2VzIG9uIG9ubHkgb25lIG9mIHRoZSBlbmRzXG4gICAgICAvLyBzbyB3ZSBmaXJzdCBjaGFuZ2Ugb25lIGVuZCBhbmQgdGhlbiB0aGUgb3RoZXJcblxuICAgICAgY29uc3QgdGVtcFRvID0gdG8gPj0gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSAmJiBmcm9tIDw9IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLnRvXG4gICAgICAgID8gdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG9cbiAgICAgICAgOiB0b1xuXG4gICAgICB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZSA9IHsgZnJvbSwgdG86IHRlbXBUbyB9XG4gICAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSA9IHN1bVNpemUodmlydHVhbFNjcm9sbFNpemVzQWdnLCB2aXJ0dWFsU2Nyb2xsU2l6ZXMsIDAsIGZyb20pXG4gICAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgdG8sIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50byAhPT0gdG8gJiYgcHJldlNjcm9sbFN0YXJ0ID09PSBzY3JvbGxEZXRhaWxzLnNjcm9sbFN0YXJ0KSB7XG4gICAgICAgICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUgPSB7IGZyb206IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sIHRvIH1cbiAgICAgICAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgdG8sIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIC8vIGlmIHRoZSBzY3JvbGwgd2FzIGNoYW5nZWQgZ2l2ZSB1cFxuICAgICAgLy8gKGFub3RoZXIgY2FsbCB0byBzZXRWaXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZSBiZWZvcmUgYW5pbWF0aW9uIGZyYW1lKVxuICAgICAgaWYgKHByZXZTY3JvbGxTdGFydCAhPT0gc2Nyb2xsRGV0YWlscy5zY3JvbGxTdGFydCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlQ2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2l6ZXMoZnJvbSlcbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgc2l6ZUFmdGVyID0gdmlydHVhbFNjcm9sbFNpemVzLnNsaWNlKGZyb20sIHRvSW5kZXgpLnJlZHVjZShzdW1GbiwgMCksXG4gICAgICAgIHBvc1N0YXJ0ID0gc2l6ZUFmdGVyICsgc2Nyb2xsRGV0YWlscy5vZmZzZXRTdGFydCArIHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlLFxuICAgICAgICBwb3NFbmQgPSBwb3NTdGFydCArIHZpcnR1YWxTY3JvbGxTaXplc1sgdG9JbmRleCBdXG5cbiAgICAgIGxldCBzY3JvbGxQb3NpdGlvbiA9IHBvc1N0YXJ0ICsgb2Zmc2V0XG5cbiAgICAgIGlmIChhbGlnbkVuZCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHNpemVEaWZmID0gc2l6ZUFmdGVyIC0gc2l6ZUJlZm9yZVxuICAgICAgICBjb25zdCBzY3JvbGxTdGFydCA9IHNjcm9sbERldGFpbHMuc2Nyb2xsU3RhcnQgKyBzaXplRGlmZlxuXG4gICAgICAgIHNjcm9sbFBvc2l0aW9uID0gYWxpZ25Gb3JjZSAhPT0gdHJ1ZSAmJiBzY3JvbGxTdGFydCA8IHBvc1N0YXJ0ICYmIHBvc0VuZCA8IHNjcm9sbFN0YXJ0ICsgc2Nyb2xsRGV0YWlscy5zY3JvbGxWaWV3U2l6ZVxuICAgICAgICAgID8gc2Nyb2xsU3RhcnRcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgYWxpZ25FbmQgPT09ICdlbmQnXG4gICAgICAgICAgICAgICAgPyBwb3NFbmQgLSBzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplXG4gICAgICAgICAgICAgICAgOiBwb3NTdGFydCAtIChhbGlnbkVuZCA9PT0gJ3N0YXJ0JyA/IDAgOiBNYXRoLnJvdW5kKChzY3JvbGxEZXRhaWxzLnNjcm9sbFZpZXdTaXplIC0gdmlydHVhbFNjcm9sbFNpemVzWyB0b0luZGV4IF0pIC8gMikpXG4gICAgICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHByZXZTY3JvbGxTdGFydCA9IHNjcm9sbFBvc2l0aW9uXG5cbiAgICAgIHNldFNjcm9sbChcbiAgICAgICAgc2Nyb2xsRWwsXG4gICAgICAgIHNjcm9sbFBvc2l0aW9uLFxuICAgICAgICBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCxcbiAgICAgICAgJHEubGFuZy5ydGxcbiAgICAgIClcblxuICAgICAgZW1pdFNjcm9sbCh0b0luZGV4KVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2l6ZXMgKGZyb20pIHtcbiAgICBjb25zdCBjb250ZW50RWwgPSBjb250ZW50UmVmLnZhbHVlXG5cbiAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICBjb25zdFxuICAgICAgICBjaGlsZHJlbiA9IGZpbHRlclByb3RvLmNhbGwoXG4gICAgICAgICAgY29udGVudEVsLmNoaWxkcmVuLFxuICAgICAgICAgIGVsID0+IGVsLmNsYXNzTGlzdCAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3EtdmlydHVhbC1zY3JvbGwtLXNraXAnKSA9PT0gZmFsc2VcbiAgICAgICAgKSxcbiAgICAgICAgY2hpbGRyZW5MZW5ndGggPSBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgIHNpemVGbiA9IHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsID09PSB0cnVlXG4gICAgICAgICAgPyBlbCA9PiBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxuICAgICAgICAgIDogZWwgPT4gZWwub2Zmc2V0SGVpZ2h0XG5cbiAgICAgIGxldFxuICAgICAgICBpbmRleCA9IGZyb20sXG4gICAgICAgIHNpemUsIGRpZmZcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDspIHtcbiAgICAgICAgc2l6ZSA9IHNpemVGbihjaGlsZHJlblsgaSBdKVxuICAgICAgICBpKytcblxuICAgICAgICB3aGlsZSAoaSA8IGNoaWxkcmVuTGVuZ3RoICYmIGNoaWxkcmVuWyBpIF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdxLXZpcnR1YWwtc2Nyb2xsLS13aXRoLXByZXYnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNpemUgKz0gc2l6ZUZuKGNoaWxkcmVuWyBpIF0pXG4gICAgICAgICAgaSsrXG4gICAgICAgIH1cblxuICAgICAgICBkaWZmID0gc2l6ZSAtIHZpcnR1YWxTY3JvbGxTaXplc1sgaW5kZXggXVxuXG4gICAgICAgIGlmIChkaWZmICE9PSAwKSB7XG4gICAgICAgICAgdmlydHVhbFNjcm9sbFNpemVzWyBpbmRleCBdICs9IGRpZmZcbiAgICAgICAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2dbIE1hdGguZmxvb3IoaW5kZXggLyBhZ2dCdWNrZXRTaXplKSBdICs9IGRpZmZcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXJSZWZvY3VzRm4gKCkge1xuICAgIGNvbnRlbnRSZWYudmFsdWUgIT09IG51bGwgJiYgY29udGVudFJlZi52YWx1ZSAhPT0gdm9pZCAwICYmIGNvbnRlbnRSZWYudmFsdWUuZm9jdXMoKVxuICB9XG5cbiAgZnVuY3Rpb24gbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwgKHRvSW5kZXgsIGZ1bGxSZXNldCkge1xuICAgIGNvbnN0IGRlZmF1bHRTaXplID0gMSAqIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkLnZhbHVlXG5cbiAgICBpZiAoZnVsbFJlc2V0ID09PSB0cnVlIHx8IEFycmF5LmlzQXJyYXkodmlydHVhbFNjcm9sbFNpemVzKSA9PT0gZmFsc2UpIHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTaXplcyA9IFtdXG4gICAgfVxuXG4gICAgY29uc3Qgb2xkVmlydHVhbFNjcm9sbFNpemVzTGVuZ3RoID0gdmlydHVhbFNjcm9sbFNpemVzLmxlbmd0aFxuXG4gICAgdmlydHVhbFNjcm9sbFNpemVzLmxlbmd0aCA9IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWVcblxuICAgIGZvciAobGV0IGkgPSB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlIC0gMTsgaSA+PSBvbGRWaXJ0dWFsU2Nyb2xsU2l6ZXNMZW5ndGg7IGktLSkge1xuICAgICAgdmlydHVhbFNjcm9sbFNpemVzWyBpIF0gPSBkZWZhdWx0U2l6ZVxuICAgIH1cblxuICAgIGNvbnN0IGpNYXggPSBNYXRoLmZsb29yKCh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlIC0gMSkgLyBhZ2dCdWNrZXRTaXplKVxuICAgIHZpcnR1YWxTY3JvbGxTaXplc0FnZyA9IFtdXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gak1heDsgaisrKSB7XG4gICAgICBsZXQgc2l6ZSA9IDBcbiAgICAgIGNvbnN0IGlNYXggPSBNYXRoLm1pbigoaiArIDEpICogYWdnQnVja2V0U2l6ZSwgdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSlcbiAgICAgIGZvciAobGV0IGkgPSBqICogYWdnQnVja2V0U2l6ZTsgaSA8IGlNYXg7IGkrKykge1xuICAgICAgICBzaXplICs9IHZpcnR1YWxTY3JvbGxTaXplc1sgaSBdXG4gICAgICB9XG4gICAgICB2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2cucHVzaChzaXplKVxuICAgIH1cblxuICAgIHByZXZUb0luZGV4ID0gLTFcbiAgICBwcmV2U2Nyb2xsU3RhcnQgPSB2b2lkIDBcblxuICAgIHZpcnR1YWxTY3JvbGxQYWRkaW5nQmVmb3JlLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgMCwgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSlcbiAgICB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlID0gc3VtU2l6ZSh2aXJ0dWFsU2Nyb2xsU2l6ZXNBZ2csIHZpcnR1YWxTY3JvbGxTaXplcywgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUudG8sIHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWUpXG5cbiAgICBpZiAodG9JbmRleCA+PSAwKSB7XG4gICAgICB1cGRhdGVWaXJ0dWFsU2Nyb2xsU2l6ZXModmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UudmFsdWUuZnJvbSlcbiAgICAgIG5leHRUaWNrKCgpID0+IHsgc2Nyb2xsVG8odG9JbmRleCkgfSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBvblZpcnR1YWxTY3JvbGxFdnQoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFZpcnR1YWxTY3JvbGxTaXplIChzY3JvbGxWaWV3U2l6ZSkge1xuICAgIGlmIChzY3JvbGxWaWV3U2l6ZSA9PT0gdm9pZCAwICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBzY3JvbGxFbCA9IGdldFZpcnR1YWxTY3JvbGxUYXJnZXQoKVxuXG4gICAgICBpZiAoc2Nyb2xsRWwgIT09IHZvaWQgMCAmJiBzY3JvbGxFbCAhPT0gbnVsbCAmJiBzY3JvbGxFbC5ub2RlVHlwZSAhPT0gOCkge1xuICAgICAgICBzY3JvbGxWaWV3U2l6ZSA9IGdldFNjcm9sbERldGFpbHMoXG4gICAgICAgICAgc2Nyb2xsRWwsXG4gICAgICAgICAgZ2V0VmlydHVhbFNjcm9sbEVsKCksXG4gICAgICAgICAgYmVmb3JlUmVmLnZhbHVlLFxuICAgICAgICAgIGFmdGVyUmVmLnZhbHVlLFxuICAgICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsLFxuICAgICAgICAgICRxLmxhbmcucnRsLFxuICAgICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxTdGlja3lTaXplU3RhcnQsXG4gICAgICAgICAgcHJvcHMudmlydHVhbFNjcm9sbFN0aWNreVNpemVFbmRcbiAgICAgICAgKS5zY3JvbGxWaWV3U2l6ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvY2FsU2Nyb2xsVmlld1NpemUgPSBzY3JvbGxWaWV3U2l6ZVxuXG4gICAgY29uc3QgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUgPSBwYXJzZUZsb2F0KHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlKSB8fCAwXG4gICAgY29uc3QgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9BZnRlciA9IHBhcnNlRmxvYXQocHJvcHMudmlydHVhbFNjcm9sbFNsaWNlUmF0aW9BZnRlcikgfHwgMFxuICAgIGNvbnN0IG11bHRpcGxpZXIgPSAxICsgdmlydHVhbFNjcm9sbFNsaWNlUmF0aW9CZWZvcmUgKyB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0FmdGVyXG4gICAgY29uc3QgdmlldyA9IHNjcm9sbFZpZXdTaXplID09PSB2b2lkIDAgfHwgc2Nyb2xsVmlld1NpemUgPD0gMFxuICAgICAgPyAxXG4gICAgICA6IE1hdGguY2VpbChzY3JvbGxWaWV3U2l6ZSAvIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkLnZhbHVlKVxuXG4gICAgY29uc3QgYmFzZVNpemUgPSBNYXRoLm1heChcbiAgICAgIDEsXG4gICAgICB2aWV3LFxuICAgICAgTWF0aC5jZWlsKChwcm9wcy52aXJ0dWFsU2Nyb2xsU2xpY2VTaXplID4gMCA/IHByb3BzLnZpcnR1YWxTY3JvbGxTbGljZVNpemUgOiAxMCkgLyBtdWx0aXBsaWVyKVxuICAgIClcblxuICAgIHZpcnR1YWxTY3JvbGxTbGljZVNpemVDb21wdXRlZC52YWx1ZSA9IHtcbiAgICAgIHRvdGFsOiBNYXRoLmNlaWwoYmFzZVNpemUgKiBtdWx0aXBsaWVyKSxcbiAgICAgIHN0YXJ0OiBNYXRoLmNlaWwoYmFzZVNpemUgKiB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSksXG4gICAgICBjZW50ZXI6IE1hdGguY2VpbChiYXNlU2l6ZSAqICgwLjUgKyB2aXJ0dWFsU2Nyb2xsU2xpY2VSYXRpb0JlZm9yZSkpLFxuICAgICAgZW5kOiBNYXRoLmNlaWwoYmFzZVNpemUgKiAoMSArIHZpcnR1YWxTY3JvbGxTbGljZVJhdGlvQmVmb3JlKSksXG4gICAgICB2aWV3XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFkVmlydHVhbFNjcm9sbCAodGFnLCBjb250ZW50KSB7XG4gICAgY29uc3QgcGFkZGluZ1NpemUgPSBwcm9wcy52aXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbCA9PT0gdHJ1ZSA/ICd3aWR0aCcgOiAnaGVpZ2h0J1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgWyAnLS1xLXZpcnR1YWwtc2Nyb2xsLWl0ZW0tJyArIHBhZGRpbmdTaXplIF06IHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkLnZhbHVlICsgJ3B4J1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICB0YWcgPT09ICd0Ym9keSdcbiAgICAgICAgPyBoKHRhZywge1xuICAgICAgICAgIGNsYXNzOiAncS12aXJ0dWFsLXNjcm9sbF9fcGFkZGluZycsXG4gICAgICAgICAga2V5OiAnYmVmb3JlJyxcbiAgICAgICAgICByZWY6IGJlZm9yZVJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgndHInLCBbXG4gICAgICAgICAgICBoKCd0ZCcsIHtcbiAgICAgICAgICAgICAgc3R5bGU6IHsgWyBwYWRkaW5nU2l6ZSBdOiBgJHsgdmlydHVhbFNjcm9sbFBhZGRpbmdCZWZvcmUudmFsdWUgfXB4YCwgLi4uc3R5bGUgfSxcbiAgICAgICAgICAgICAgY29sc3BhbjogY29sc3BhbkF0dHIudmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgICAgOiBoKHRhZywge1xuICAgICAgICAgIGNsYXNzOiAncS12aXJ0dWFsLXNjcm9sbF9fcGFkZGluZycsXG4gICAgICAgICAga2V5OiAnYmVmb3JlJyxcbiAgICAgICAgICByZWY6IGJlZm9yZVJlZixcbiAgICAgICAgICBzdHlsZTogeyBbIHBhZGRpbmdTaXplIF06IGAkeyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0JlZm9yZS52YWx1ZSB9cHhgLCAuLi5zdHlsZSB9XG4gICAgICAgIH0pLFxuXG4gICAgICBoKHRhZywge1xuICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX2NvbnRlbnQnLFxuICAgICAgICBrZXk6ICdjb250ZW50JyxcbiAgICAgICAgcmVmOiBjb250ZW50UmVmLFxuICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgIH0sIGNvbnRlbnQuZmxhdCgpKSxcblxuICAgICAgdGFnID09PSAndGJvZHknXG4gICAgICAgID8gaCh0YWcsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX3BhZGRpbmcnLFxuICAgICAgICAgIGtleTogJ2FmdGVyJyxcbiAgICAgICAgICByZWY6IGFmdGVyUmVmXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCd0cicsIFtcbiAgICAgICAgICAgIGgoJ3RkJywge1xuICAgICAgICAgICAgICBzdHlsZTogeyBbIHBhZGRpbmdTaXplIF06IGAkeyB2aXJ0dWFsU2Nyb2xsUGFkZGluZ0FmdGVyLnZhbHVlIH1weGAsIC4uLnN0eWxlIH0sXG4gICAgICAgICAgICAgIGNvbHNwYW46IGNvbHNwYW5BdHRyLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICAgIDogaCh0YWcsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdmlydHVhbC1zY3JvbGxfX3BhZGRpbmcnLFxuICAgICAgICAgIGtleTogJ2FmdGVyJyxcbiAgICAgICAgICByZWY6IGFmdGVyUmVmLFxuICAgICAgICAgIHN0eWxlOiB7IFsgcGFkZGluZ1NpemUgXTogYCR7IHZpcnR1YWxTY3JvbGxQYWRkaW5nQWZ0ZXIudmFsdWUgfXB4YCwgLi4uc3R5bGUgfVxuICAgICAgICB9KVxuICAgIF1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXRTY3JvbGwgKGluZGV4KSB7XG4gICAgaWYgKHByZXZUb0luZGV4ICE9PSBpbmRleCkge1xuICAgICAgcHJvcHMub25WaXJ0dWFsU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdCgndmlydHVhbFNjcm9sbCcsIHtcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIGZyb206IHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLnZhbHVlLmZyb20sXG4gICAgICAgIHRvOiB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZS50byAtIDEsXG4gICAgICAgIGRpcmVjdGlvbjogaW5kZXggPCBwcmV2VG9JbmRleCA/ICdkZWNyZWFzZScgOiAnaW5jcmVhc2UnLFxuICAgICAgICByZWY6IHByb3h5XG4gICAgICB9KVxuXG4gICAgICBwcmV2VG9JbmRleCA9IGluZGV4XG4gICAgfVxuICB9XG5cbiAgc2V0VmlydHVhbFNjcm9sbFNpemUoKVxuICBjb25zdCBvblZpcnR1YWxTY3JvbGxFdnQgPSBkZWJvdW5jZShcbiAgICBsb2NhbE9uVmlydHVhbFNjcm9sbEV2dCxcbiAgICAkcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUgPyAxMjAgOiAzNVxuICApXG5cbiAgb25CZWZvcmVNb3VudCgoKSA9PiB7XG4gICAgc2V0VmlydHVhbFNjcm9sbFNpemUoKVxuICB9KVxuXG4gIGxldCBzaG91bGRBY3RpdmF0ZSA9IGZhbHNlXG5cbiAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgc2hvdWxkQWN0aXZhdGUgPSB0cnVlXG4gIH0pXG5cbiAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgIGlmIChzaG91bGRBY3RpdmF0ZSAhPT0gdHJ1ZSkgeyByZXR1cm4gfVxuXG4gICAgY29uc3Qgc2Nyb2xsRWwgPSBnZXRWaXJ0dWFsU2Nyb2xsVGFyZ2V0KClcblxuICAgIGlmIChwcmV2U2Nyb2xsU3RhcnQgIT09IHZvaWQgMCAmJiBzY3JvbGxFbCAhPT0gdm9pZCAwICYmIHNjcm9sbEVsICE9PSBudWxsICYmIHNjcm9sbEVsLm5vZGVUeXBlICE9PSA4KSB7XG4gICAgICBzZXRTY3JvbGwoXG4gICAgICAgIHNjcm9sbEVsLFxuICAgICAgICBwcmV2U2Nyb2xsU3RhcnQsXG4gICAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxIb3Jpem9udGFsLFxuICAgICAgICAkcS5sYW5nLnJ0bFxuICAgICAgKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNjcm9sbFRvKHByZXZUb0luZGV4KVxuICAgIH1cbiAgfSlcblxuICBfX1FVQVNBUl9TU1JfXyB8fCBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIG9uVmlydHVhbFNjcm9sbEV2dC5jYW5jZWwoKVxuICB9KVxuXG4gIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHNjcm9sbFRvLCByZXNldCwgcmVmcmVzaCB9KVxuXG4gIHJldHVybiB7XG4gICAgdmlydHVhbFNjcm9sbFNsaWNlUmFuZ2UsXG4gICAgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLFxuXG4gICAgc2V0VmlydHVhbFNjcm9sbFNpemUsXG4gICAgb25WaXJ0dWFsU2Nyb2xsRXZ0LFxuICAgIGxvY2FsUmVzZXRWaXJ0dWFsU2Nyb2xsLFxuICAgIHBhZFZpcnR1YWxTY3JvbGwsXG5cbiAgICBzY3JvbGxUbyxcbiAgICByZXNldCxcbiAgICByZWZyZXNoXG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVwZGF0ZSwgb25VcGRhdGVkLCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRRmllbGQgZnJvbSAnLi4vZmllbGQvUUZpZWxkLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUUNoaXAgZnJvbSAnLi4vY2hpcC9RQ2hpcC5qcydcblxuaW1wb3J0IFFJdGVtIGZyb20gJy4uL2l0ZW0vUUl0ZW0uanMnXG5pbXBvcnQgUUl0ZW1TZWN0aW9uIGZyb20gJy4uL2l0ZW0vUUl0ZW1TZWN0aW9uLmpzJ1xuaW1wb3J0IFFJdGVtTGFiZWwgZnJvbSAnLi4vaXRlbS9RSXRlbUxhYmVsLmpzJ1xuXG5pbXBvcnQgUU1lbnUgZnJvbSAnLi4vbWVudS9RTWVudS5qcydcbmltcG9ydCBRRGlhbG9nIGZyb20gJy4uL2RpYWxvZy9RRGlhbG9nLmpzJ1xuXG5pbXBvcnQgdXNlRmllbGQsIHsgdXNlRmllbGRTdGF0ZSwgdXNlRmllbGRQcm9wcywgdXNlRmllbGRFbWl0cywgZmllbGRWYWx1ZUlzRmlsbGVkIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZmllbGQuanMnXG5pbXBvcnQgeyB1c2VWaXJ0dWFsU2Nyb2xsLCB1c2VWaXJ0dWFsU2Nyb2xsUHJvcHMgfSBmcm9tICcuLi92aXJ0dWFsLXNjcm9sbC91c2UtdmlydHVhbC1zY3JvbGwuanMnXG5pbXBvcnQgeyB1c2VGb3JtUHJvcHMsIHVzZUZvcm1JbnB1dE5hbWVBdHRyIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcbmltcG9ydCB1c2VLZXlDb21wb3NpdGlvbiBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1rZXktY29tcG9zaXRpb24uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaXNEZWVwRXF1YWwgfSBmcm9tICcuLi8uLi91dGlscy9pcy5qcydcbmltcG9ydCB7IHN0b3AsIHByZXZlbnQsIHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBub3JtYWxpemVUb0ludGVydmFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc2hvdWxkSWdub3JlS2V5LCBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgdmFsaWRhdGVOZXdWYWx1ZU1vZGUgPSB2ID0+IFsgJ2FkZCcsICdhZGQtdW5pcXVlJywgJ3RvZ2dsZScgXS5pbmNsdWRlcyh2KVxuY29uc3QgcmVFc2NhcGVMaXN0ID0gJy4qKz9eJHt9KCl8W11cXFxcJ1xuY29uc3QgZmllbGRQcm9wc0xpc3QgPSBPYmplY3Qua2V5cyh1c2VGaWVsZFByb3BzKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNlbGVjdCcsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVZpcnR1YWxTY3JvbGxQcm9wcyxcbiAgICAuLi51c2VGb3JtUHJvcHMsXG4gICAgLi4udXNlRmllbGRQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcblxuICAgIG11bHRpcGxlOiBCb29sZWFuLFxuXG4gICAgZGlzcGxheVZhbHVlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgZGlzcGxheVZhbHVlSHRtbDogQm9vbGVhbixcbiAgICBkcm9wZG93bkljb246IFN0cmluZyxcblxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9LFxuXG4gICAgb3B0aW9uVmFsdWU6IFsgRnVuY3Rpb24sIFN0cmluZyBdLFxuICAgIG9wdGlvbkxhYmVsOiBbIEZ1bmN0aW9uLCBTdHJpbmcgXSxcbiAgICBvcHRpb25EaXNhYmxlOiBbIEZ1bmN0aW9uLCBTdHJpbmcgXSxcblxuICAgIGhpZGVTZWxlY3RlZDogQm9vbGVhbixcbiAgICBoaWRlRHJvcGRvd25JY29uOiBCb29sZWFuLFxuICAgIGZpbGxJbnB1dDogQm9vbGVhbixcblxuICAgIG1heFZhbHVlczogWyBOdW1iZXIsIFN0cmluZyBdLFxuXG4gICAgb3B0aW9uc0RlbnNlOiBCb29sZWFuLFxuICAgIG9wdGlvbnNEYXJrOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgb3B0aW9uc1NlbGVjdGVkQ2xhc3M6IFN0cmluZyxcbiAgICBvcHRpb25zSHRtbDogQm9vbGVhbixcblxuICAgIG9wdGlvbnNDb3ZlcjogQm9vbGVhbixcblxuICAgIG1lbnVTaHJpbms6IEJvb2xlYW4sXG4gICAgbWVudUFuY2hvcjogU3RyaW5nLFxuICAgIG1lbnVTZWxmOiBTdHJpbmcsXG4gICAgbWVudU9mZnNldDogQXJyYXksXG5cbiAgICBwb3B1cENvbnRlbnRDbGFzczogU3RyaW5nLFxuICAgIHBvcHVwQ29udGVudFN0eWxlOiBbIFN0cmluZywgQXJyYXksIE9iamVjdCBdLFxuXG4gICAgdXNlSW5wdXQ6IEJvb2xlYW4sXG4gICAgdXNlQ2hpcHM6IEJvb2xlYW4sXG5cbiAgICBuZXdWYWx1ZU1vZGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdmFsaWRhdGVOZXdWYWx1ZU1vZGVcbiAgICB9LFxuXG4gICAgbWFwT3B0aW9uczogQm9vbGVhbixcbiAgICBlbWl0VmFsdWU6IEJvb2xlYW4sXG5cbiAgICBpbnB1dERlYm91bmNlOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiA1MDBcbiAgICB9LFxuXG4gICAgaW5wdXRDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBpbnB1dFN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgdGFiaW5kZXg6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuXG4gICAgYXV0b2NvbXBsZXRlOiBTdHJpbmcsXG5cbiAgICB0cmFuc2l0aW9uU2hvdzogU3RyaW5nLFxuICAgIHRyYW5zaXRpb25IaWRlOiBTdHJpbmcsXG4gICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBiZWhhdmlvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2RlZmF1bHQnLCAnbWVudScsICdkaWFsb2cnIF0uaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAnZGVmYXVsdCdcbiAgICB9LFxuXG4gICAgdmlydHVhbFNjcm9sbEl0ZW1TaXplOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9LFxuXG4gICAgb25OZXdWYWx1ZTogRnVuY3Rpb24sXG4gICAgb25GaWx0ZXI6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VGaWVsZEVtaXRzLFxuICAgICdhZGQnLCAncmVtb3ZlJywgJ2lucHV0VmFsdWUnLCAnbmV3VmFsdWUnLFxuICAgICdrZXl1cCcsICdrZXlwcmVzcycsICdrZXlkb3duJyxcbiAgICAnZmlsdGVyQWJvcnQnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBtZW51ID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGRpYWxvZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBvcHRpb25JbmRleCA9IHJlZigtMSlcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gcmVmKCcnKVxuICAgIGNvbnN0IGRpYWxvZ0ZpZWxkRm9jdXNlZCA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBpbm5lckxvYWRpbmdJbmRpY2F0b3IgPSByZWYoZmFsc2UpXG5cbiAgICBsZXQgaW5wdXRUaW1lciwgaW5uZXJWYWx1ZUNhY2hlLFxuICAgICAgaGFzRGlhbG9nLCB1c2VySW5wdXRWYWx1ZSwgZmlsdGVySWQsIGRlZmF1bHRJbnB1dFZhbHVlLFxuICAgICAgdHJhbnNpdGlvblNob3dDb21wdXRlZCwgc2VhcmNoQnVmZmVyLCBzZWFyY2hCdWZmZXJFeHBcblxuICAgIGNvbnN0IGlucHV0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgbWVudVJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IG1lbnVDb250ZW50UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBuYW1lUHJvcCA9IHVzZUZvcm1JbnB1dE5hbWVBdHRyKHByb3BzKVxuXG4gICAgY29uc3Qgb25Db21wb3NpdGlvbiA9IHVzZUtleUNvbXBvc2l0aW9uKG9uSW5wdXQpXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsTGVuZ3RoID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgQXJyYXkuaXNBcnJheShwcm9wcy5vcHRpb25zKVxuICAgICAgICA/IHByb3BzLm9wdGlvbnMubGVuZ3RoXG4gICAgICAgIDogMFxuICAgICkpXG5cbiAgICBjb25zdCB2aXJ0dWFsU2Nyb2xsSXRlbVNpemVDb21wdXRlZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZpcnR1YWxTY3JvbGxJdGVtU2l6ZSA9PT0gdm9pZCAwXG4gICAgICAgID8gKHByb3BzLm9wdGlvbnNEZW5zZSA9PT0gdHJ1ZSA/IDI0IDogNDgpXG4gICAgICAgIDogcHJvcHMudmlydHVhbFNjcm9sbEl0ZW1TaXplXG4gICAgKSlcblxuICAgIGNvbnN0IHtcbiAgICAgIHZpcnR1YWxTY3JvbGxTbGljZVJhbmdlLFxuICAgICAgdmlydHVhbFNjcm9sbFNsaWNlU2l6ZUNvbXB1dGVkLFxuICAgICAgbG9jYWxSZXNldFZpcnR1YWxTY3JvbGwsXG4gICAgICBwYWRWaXJ0dWFsU2Nyb2xsLFxuICAgICAgb25WaXJ0dWFsU2Nyb2xsRXZ0LFxuICAgICAgc2Nyb2xsVG8sXG4gICAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZVxuICAgIH0gPSB1c2VWaXJ0dWFsU2Nyb2xsKHtcbiAgICAgIHZpcnR1YWxTY3JvbGxMZW5ndGgsIGdldFZpcnR1YWxTY3JvbGxUYXJnZXQsIGdldFZpcnR1YWxTY3JvbGxFbCxcbiAgICAgIHZpcnR1YWxTY3JvbGxJdGVtU2l6ZUNvbXB1dGVkXG4gICAgfSlcblxuICAgIGNvbnN0IHN0YXRlID0gdXNlRmllbGRTdGF0ZSgpXG5cbiAgICBjb25zdCBpbm5lclZhbHVlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgbWFwTnVsbCA9IHByb3BzLm1hcE9wdGlvbnMgPT09IHRydWUgJiYgcHJvcHMubXVsdGlwbGUgIT09IHRydWUsXG4gICAgICAgIHZhbCA9IHByb3BzLm1vZGVsVmFsdWUgIT09IHZvaWQgMCAmJiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gbnVsbCB8fCBtYXBOdWxsID09PSB0cnVlKVxuICAgICAgICAgID8gKHByb3BzLm11bHRpcGxlID09PSB0cnVlICYmIEFycmF5LmlzQXJyYXkocHJvcHMubW9kZWxWYWx1ZSkgPyBwcm9wcy5tb2RlbFZhbHVlIDogWyBwcm9wcy5tb2RlbFZhbHVlIF0pXG4gICAgICAgICAgOiBbXVxuXG4gICAgICBpZiAocHJvcHMubWFwT3B0aW9ucyA9PT0gdHJ1ZSAmJiBBcnJheS5pc0FycmF5KHByb3BzLm9wdGlvbnMpID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gcHJvcHMubWFwT3B0aW9ucyA9PT0gdHJ1ZSAmJiBpbm5lclZhbHVlQ2FjaGUgIT09IHZvaWQgMFxuICAgICAgICAgID8gaW5uZXJWYWx1ZUNhY2hlXG4gICAgICAgICAgOiBbXVxuICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWwubWFwKHYgPT4gZ2V0T3B0aW9uKHYsIGNhY2hlKSlcblxuICAgICAgICByZXR1cm4gcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCAmJiBtYXBOdWxsID09PSB0cnVlXG4gICAgICAgICAgPyB2YWx1ZXMuZmlsdGVyKHYgPT4gdiAhPT0gbnVsbClcbiAgICAgICAgICA6IHZhbHVlc1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsXG4gICAgfSlcblxuICAgIGNvbnN0IGlubmVyRmllbGRQcm9wcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHt9XG4gICAgICBmaWVsZFByb3BzTGlzdC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHByb3BzWyBrZXkgXVxuICAgICAgICBpZiAodmFsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBhY2NbIGtleSBdID0gdmFsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGlzT3B0aW9uc0RhcmsgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5vcHRpb25zRGFyayA9PT0gbnVsbFxuICAgICAgICA/IHN0YXRlLmlzRGFyay52YWx1ZVxuICAgICAgICA6IHByb3BzLm9wdGlvbnNEYXJrXG4gICAgKSlcblxuICAgIGNvbnN0IGhhc1ZhbHVlID0gY29tcHV0ZWQoKCkgPT4gZmllbGRWYWx1ZUlzRmlsbGVkKGlubmVyVmFsdWUudmFsdWUpKVxuXG4gICAgY29uc3QgY29tcHV0ZWRJbnB1dENsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgbGV0IGNscyA9ICdxLWZpZWxkX19pbnB1dCBxLXBsYWNlaG9sZGVyIGNvbCdcblxuICAgICAgaWYgKHByb3BzLmhpZGVTZWxlY3RlZCA9PT0gdHJ1ZSB8fCBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gWyBjbHMsIHByb3BzLmlucHV0Q2xhc3MgXVxuICAgICAgfVxuXG4gICAgICBjbHMgKz0gJyBxLWZpZWxkX19pbnB1dC0tcGFkZGluZydcblxuICAgICAgcmV0dXJuIHByb3BzLmlucHV0Q2xhc3MgPT09IHZvaWQgMFxuICAgICAgICA/IGNsc1xuICAgICAgICA6IFsgY2xzLCBwcm9wcy5pbnB1dENsYXNzIF1cbiAgICB9KVxuXG4gICAgY29uc3QgbWVudUNvbnRlbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAocHJvcHMudmlydHVhbFNjcm9sbEhvcml6b250YWwgPT09IHRydWUgPyAncS12aXJ0dWFsLXNjcm9sbC0taG9yaXpvbnRhbCcgOiAnJylcbiAgICAgICsgKHByb3BzLnBvcHVwQ29udGVudENsYXNzID8gJyAnICsgcHJvcHMucG9wdXBDb250ZW50Q2xhc3MgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBub09wdGlvbnMgPSBjb21wdXRlZCgoKSA9PiB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKVxuXG4gICAgY29uc3Qgc2VsZWN0ZWRTdHJpbmcgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgaW5uZXJWYWx1ZS52YWx1ZVxuICAgICAgICAubWFwKG9wdCA9PiBnZXRPcHRpb25MYWJlbC52YWx1ZShvcHQpKVxuICAgICAgICAuam9pbignLCAnKVxuICAgIClcblxuICAgIGNvbnN0IGFyaWFDdXJyZW50VmFsdWUgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuZGlzcGxheVZhbHVlICE9PSB2b2lkIDBcbiAgICAgID8gcHJvcHMuZGlzcGxheVZhbHVlXG4gICAgICA6IHNlbGVjdGVkU3RyaW5nLnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IG5lZWRzSHRtbEZuID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMub3B0aW9uc0h0bWwgPT09IHRydWVcbiAgICAgICAgPyAoKSA9PiB0cnVlXG4gICAgICAgIDogb3B0ID0+IG9wdCAhPT0gdm9pZCAwICYmIG9wdCAhPT0gbnVsbCAmJiBvcHQuaHRtbCA9PT0gdHJ1ZVxuICAgICkpXG5cbiAgICBjb25zdCB2YWx1ZUFzSHRtbCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmRpc3BsYXlWYWx1ZUh0bWwgPT09IHRydWUgfHwgKFxuICAgICAgICBwcm9wcy5kaXNwbGF5VmFsdWUgPT09IHZvaWQgMCAmJiAoXG4gICAgICAgICAgcHJvcHMub3B0aW9uc0h0bWwgPT09IHRydWVcbiAgICAgICAgICB8fCBpbm5lclZhbHVlLnZhbHVlLnNvbWUobmVlZHNIdG1sRm4udmFsdWUpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApKVxuXG4gICAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnRhYmluZGV4IDogLTEpKVxuXG4gICAgY29uc3QgY29tYm9ib3hBdHRycyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGF0dHJzID0ge1xuICAgICAgICB0YWJpbmRleDogcHJvcHMudGFiaW5kZXgsXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMubGFiZWwsXG4gICAgICAgICdhcmlhLXJlYWRvbmx5JzogcHJvcHMucmVhZG9ubHkgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1hdXRvY29tcGxldGUnOiBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSA/ICdsaXN0JyA6ICdub25lJyxcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBtZW51LnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiBgJHsgc3RhdGUudGFyZ2V0VWlkLnZhbHVlIH1fbGJgXG4gICAgICB9XG5cbiAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSA+PSAwKSB7XG4gICAgICAgIGF0dHJzWyAnYXJpYS1hY3RpdmVkZXNjZW5kYW50JyBdID0gYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9XyR7IG9wdGlvbkluZGV4LnZhbHVlIH1gXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyc1xuICAgIH0pXG5cbiAgICBjb25zdCBsaXN0Ym94QXR0cnMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgaWQ6IGAkeyBzdGF0ZS50YXJnZXRVaWQudmFsdWUgfV9sYmAsXG4gICAgICByb2xlOiAnbGlzdGJveCcsXG4gICAgICAnYXJpYS1tdWx0aXNlbGVjdGFibGUnOiBwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgICB9KSlcblxuICAgIGNvbnN0IHNlbGVjdGVkU2NvcGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4gaW5uZXJWYWx1ZS52YWx1ZS5tYXAoKG9wdCwgaSkgPT4gKHtcbiAgICAgICAgaW5kZXg6IGksXG4gICAgICAgIG9wdCxcbiAgICAgICAgaHRtbDogbmVlZHNIdG1sRm4udmFsdWUob3B0KSxcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgIHJlbW92ZUF0SW5kZXg6IHJlbW92ZUF0SW5kZXhBbmRGb2N1cyxcbiAgICAgICAgdG9nZ2xlT3B0aW9uLFxuICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWVcbiAgICAgIH0pKVxuICAgIH0pXG5cbiAgICBjb25zdCBvcHRpb25TY29wZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmICh2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbXVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGZyb20sIHRvIH0gPSB2aXJ0dWFsU2Nyb2xsU2xpY2VSYW5nZS52YWx1ZVxuXG4gICAgICByZXR1cm4gcHJvcHMub3B0aW9ucy5zbGljZShmcm9tLCB0bykubWFwKChvcHQsIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGlzYWJsZSA9IGlzT3B0aW9uRGlzYWJsZWQudmFsdWUob3B0KSA9PT0gdHJ1ZVxuICAgICAgICBjb25zdCBpbmRleCA9IGZyb20gKyBpXG5cbiAgICAgICAgY29uc3QgaXRlbVByb3BzID0ge1xuICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIGFjdGl2ZUNsYXNzOiBjb21wdXRlZE9wdGlvbnNTZWxlY3RlZENsYXNzLnZhbHVlLFxuICAgICAgICAgIG1hbnVhbEZvY3VzOiB0cnVlLFxuICAgICAgICAgIGZvY3VzZWQ6IGZhbHNlLFxuICAgICAgICAgIGRpc2FibGUsXG4gICAgICAgICAgdGFiaW5kZXg6IC0xLFxuICAgICAgICAgIGRlbnNlOiBwcm9wcy5vcHRpb25zRGVuc2UsXG4gICAgICAgICAgZGFyazogaXNPcHRpb25zRGFyay52YWx1ZSxcbiAgICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgICBpZDogYCR7IHN0YXRlLnRhcmdldFVpZC52YWx1ZSB9XyR7IGluZGV4IH1gLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHsgdG9nZ2xlT3B0aW9uKG9wdCkgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgICBpc09wdGlvblNlbGVjdGVkKG9wdCkgPT09IHRydWUgJiYgKGl0ZW1Qcm9wcy5hY3RpdmUgPSB0cnVlKVxuICAgICAgICAgIG9wdGlvbkluZGV4LnZhbHVlID09PSBpbmRleCAmJiAoaXRlbVByb3BzLmZvY3VzZWQgPSB0cnVlKVxuXG4gICAgICAgICAgaXRlbVByb3BzWyAnYXJpYS1zZWxlY3RlZCcgXSA9IGl0ZW1Qcm9wcy5hY3RpdmUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnXG5cbiAgICAgICAgICBpZiAoJHEucGxhdGZvcm0uaXMuZGVza3RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaXRlbVByb3BzLm9uTW91c2Vtb3ZlID0gKCkgPT4geyBtZW51LnZhbHVlID09PSB0cnVlICYmIHNldE9wdGlvbkluZGV4KGluZGV4KSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBvcHQsXG4gICAgICAgICAgaHRtbDogbmVlZHNIdG1sRm4udmFsdWUob3B0KSxcbiAgICAgICAgICBsYWJlbDogZ2V0T3B0aW9uTGFiZWwudmFsdWUob3B0KSxcbiAgICAgICAgICBzZWxlY3RlZDogaXRlbVByb3BzLmFjdGl2ZSxcbiAgICAgICAgICBmb2N1c2VkOiBpdGVtUHJvcHMuZm9jdXNlZCxcbiAgICAgICAgICB0b2dnbGVPcHRpb24sXG4gICAgICAgICAgc2V0T3B0aW9uSW5kZXgsXG4gICAgICAgICAgaXRlbVByb3BzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGRyb3Bkb3duQXJyb3dJY29uID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZHJvcGRvd25JY29uICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy5kcm9wZG93bkljb25cbiAgICAgICAgOiAkcS5pY29uU2V0LmFycm93LmRyb3Bkb3duXG4gICAgKSlcblxuICAgIGNvbnN0IHNxdWFyZWRNZW51ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm9wdGlvbnNDb3ZlciA9PT0gZmFsc2VcbiAgICAgICYmIHByb3BzLm91dGxpbmVkICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5zdGFuZG91dCAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMuYm9yZGVybGVzcyAhPT0gdHJ1ZVxuICAgICAgJiYgcHJvcHMucm91bmRlZCAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGNvbXB1dGVkT3B0aW9uc1NlbGVjdGVkQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5vcHRpb25zU2VsZWN0ZWRDbGFzcyAhPT0gdm9pZCAwXG4gICAgICAgID8gcHJvcHMub3B0aW9uc1NlbGVjdGVkQ2xhc3NcbiAgICAgICAgOiAocHJvcHMuY29sb3IgIT09IHZvaWQgMCA/IGB0ZXh0LSR7IHByb3BzLmNvbG9yIH1gIDogJycpXG4gICAgKSlcblxuICAgIC8vIHJldHVybnMgbWV0aG9kIHRvIGdldCB2YWx1ZSBvZiBhbiBvcHRpb247XG4gICAgLy8gdGFrZXMgaW50byBhY2NvdW50ICdvcHRpb24tdmFsdWUnIHByb3BcbiAgICBjb25zdCBnZXRPcHRpb25WYWx1ZSA9IGNvbXB1dGVkKCgpID0+IGdldFByb3BWYWx1ZUZuKHByb3BzLm9wdGlvblZhbHVlLCAndmFsdWUnKSlcblxuICAgIC8vIHJldHVybnMgbWV0aG9kIHRvIGdldCBsYWJlbCBvZiBhbiBvcHRpb247XG4gICAgLy8gdGFrZXMgaW50byBhY2NvdW50ICdvcHRpb24tbGFiZWwnIHByb3BcbiAgICBjb25zdCBnZXRPcHRpb25MYWJlbCA9IGNvbXB1dGVkKCgpID0+IGdldFByb3BWYWx1ZUZuKHByb3BzLm9wdGlvbkxhYmVsLCAnbGFiZWwnKSlcblxuICAgIC8vIHJldHVybnMgbWV0aG9kIHRvIHRlbGwgaWYgYW4gb3B0aW9uIGlzIGRpc2FibGVkO1xuICAgIC8vIHRha2VzIGludG8gYWNjb3VudCAnb3B0aW9uLWRpc2FibGUnIHByb3BcbiAgICBjb25zdCBpc09wdGlvbkRpc2FibGVkID0gY29tcHV0ZWQoKCkgPT4gZ2V0UHJvcFZhbHVlRm4ocHJvcHMub3B0aW9uRGlzYWJsZSwgJ2Rpc2FibGUnKSlcblxuICAgIGNvbnN0IGlubmVyT3B0aW9uc1ZhbHVlID0gY29tcHV0ZWQoKCkgPT4gaW5uZXJWYWx1ZS52YWx1ZS5tYXAob3B0ID0+IGdldE9wdGlvblZhbHVlLnZhbHVlKG9wdCkpKVxuXG4gICAgY29uc3QgaW5wdXRDb250cm9sRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZXZ0ID0ge1xuICAgICAgICBvbklucHV0LFxuICAgICAgICAvLyBTYWZhcmkgPCAxMC4yICYgVUlXZWJWaWV3IGRvZXNuJ3QgZmlyZSBjb21wb3NpdGlvbmVuZCB3aGVuXG4gICAgICAgIC8vIHN3aXRjaGluZyBmb2N1cyBiZWZvcmUgY29uZmlybWluZyBjb21wb3NpdGlvbiBjaG9pY2VcbiAgICAgICAgLy8gdGhpcyBhbHNvIGZpeGVzIHRoZSBpc3N1ZSB3aGVyZSBzb21lIGJyb3dzZXJzIGUuZy4gaU9TIENocm9tZVxuICAgICAgICAvLyBmaXJlcyBcImNoYW5nZVwiIGluc3RlYWQgb2YgXCJpbnB1dFwiIG9uIGF1dG9jb21wbGV0ZS5cbiAgICAgICAgb25DaGFuZ2U6IG9uQ29tcG9zaXRpb24sXG4gICAgICAgIG9uS2V5ZG93bjogb25UYXJnZXRLZXlkb3duLFxuICAgICAgICBvbktleXVwOiBvblRhcmdldEF1dG9jb21wbGV0ZSxcbiAgICAgICAgb25LZXlwcmVzczogb25UYXJnZXRLZXlwcmVzcyxcbiAgICAgICAgb25Gb2N1czogc2VsZWN0SW5wdXRUZXh0LFxuICAgICAgICBvbkNsaWNrIChlKSB7IGhhc0RpYWxvZyA9PT0gdHJ1ZSAmJiBzdG9wKGUpIH1cbiAgICAgIH1cblxuICAgICAgZXZ0Lm9uQ29tcG9zaXRpb25zdGFydCA9IGV2dC5vbkNvbXBvc2l0aW9udXBkYXRlID0gZXZ0Lm9uQ29tcG9zaXRpb25lbmQgPSBvbkNvbXBvc2l0aW9uXG5cbiAgICAgIHJldHVybiBldnRcbiAgICB9KVxuXG4gICAgd2F0Y2goaW5uZXJWYWx1ZSwgdmFsID0+IHtcbiAgICAgIGlubmVyVmFsdWVDYWNoZSA9IHZhbFxuXG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLnVzZUlucHV0ID09PSB0cnVlXG4gICAgICAgICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZVxuICAgICAgICAmJiBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZVxuICAgICAgICAvLyBQcmV2ZW50IHJlLWVudGVyaW5nIGluIGZpbHRlciB3aGlsZSBmaWx0ZXJpbmdcbiAgICAgICAgLy8gQWxzbyBwcmV2ZW50IGNsZWFyaW5nIGlucHV0VmFsdWUgd2hpbGUgZmlsdGVyaW5nXG4gICAgICAgICYmIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiAoKGRpYWxvZy52YWx1ZSAhPT0gdHJ1ZSAmJiBtZW51LnZhbHVlICE9PSB0cnVlKSB8fCBoYXNWYWx1ZS52YWx1ZSAhPT0gdHJ1ZSlcbiAgICAgICkge1xuICAgICAgICB1c2VySW5wdXRWYWx1ZSAhPT0gdHJ1ZSAmJiByZXNldElucHV0VmFsdWUoKVxuICAgICAgICBpZiAoZGlhbG9nLnZhbHVlID09PSB0cnVlIHx8IG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBmaWx0ZXIoJycpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7IGltbWVkaWF0ZTogdHJ1ZSB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZmlsbElucHV0LCByZXNldElucHV0VmFsdWUpXG5cbiAgICB3YXRjaChtZW51LCB1cGRhdGVNZW51KVxuXG4gICAgd2F0Y2godmlydHVhbFNjcm9sbExlbmd0aCwgcmVyZW5kZXJNZW51KVxuXG4gICAgZnVuY3Rpb24gZ2V0RW1pdHRpbmdPcHRpb25WYWx1ZSAob3B0KSB7XG4gICAgICByZXR1cm4gcHJvcHMuZW1pdFZhbHVlID09PSB0cnVlXG4gICAgICAgID8gZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KVxuICAgICAgICA6IG9wdFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUF0SW5kZXggKGluZGV4KSB7XG4gICAgICBpZiAoaW5kZXggPiAtMSAmJiBpbmRleCA8IGlubmVyVmFsdWUudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IG1vZGVsID0gcHJvcHMubW9kZWxWYWx1ZS5zbGljZSgpXG4gICAgICAgICAgZW1pdCgncmVtb3ZlJywgeyBpbmRleCwgdmFsdWU6IG1vZGVsLnNwbGljZShpbmRleCwgMSlbIDAgXSB9KVxuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbW9kZWwpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBudWxsKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQXRJbmRleEFuZEZvY3VzIChpbmRleCkge1xuICAgICAgcmVtb3ZlQXRJbmRleChpbmRleClcbiAgICAgIHN0YXRlLmZvY3VzKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGQgKG9wdCwgdW5pcXVlKSB7XG4gICAgICBjb25zdCB2YWwgPSBnZXRFbWl0dGluZ09wdGlvblZhbHVlKG9wdClcblxuICAgICAgaWYgKHByb3BzLm11bHRpcGxlICE9PSB0cnVlKSB7XG4gICAgICAgIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSAmJiB1cGRhdGVJbnB1dFZhbHVlKFxuICAgICAgICAgIGdldE9wdGlvbkxhYmVsLnZhbHVlKG9wdCksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgIClcblxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBlbWl0KCdhZGQnLCB7IGluZGV4OiAwLCB2YWx1ZTogdmFsIH0pXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgcHJvcHMubXVsdGlwbGUgPT09IHRydWUgPyBbIHZhbCBdIDogdmFsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHVuaXF1ZSA9PT0gdHJ1ZSAmJiBpc09wdGlvblNlbGVjdGVkKG9wdCkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5tYXhWYWx1ZXMgIT09IHZvaWQgMCAmJiBwcm9wcy5tb2RlbFZhbHVlLmxlbmd0aCA+PSBwcm9wcy5tYXhWYWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1vZGVsID0gcHJvcHMubW9kZWxWYWx1ZS5zbGljZSgpXG5cbiAgICAgIGVtaXQoJ2FkZCcsIHsgaW5kZXg6IG1vZGVsLmxlbmd0aCwgdmFsdWU6IHZhbCB9KVxuICAgICAgbW9kZWwucHVzaCh2YWwpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZU9wdGlvbiAob3B0LCBrZWVwT3Blbikge1xuICAgICAgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlICE9PSB0cnVlIHx8IG9wdCA9PT0gdm9pZCAwIHx8IGlzT3B0aW9uRGlzYWJsZWQudmFsdWUob3B0KSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3B0VmFsdWUgPSBnZXRPcHRpb25WYWx1ZS52YWx1ZShvcHQpXG5cbiAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoa2VlcE9wZW4gIT09IHRydWUpIHtcbiAgICAgICAgICB1cGRhdGVJbnB1dFZhbHVlKFxuICAgICAgICAgICAgcHJvcHMuZmlsbElucHV0ID09PSB0cnVlID8gZ2V0T3B0aW9uTGFiZWwudmFsdWUob3B0KSA6ICcnLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgICApXG5cbiAgICAgICAgICBoaWRlUG9wdXAoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsICYmIHRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlubmVyVmFsdWUudmFsdWUubGVuZ3RoID09PSAwXG4gICAgICAgICAgfHwgaXNEZWVwRXF1YWwoZ2V0T3B0aW9uVmFsdWUudmFsdWUoaW5uZXJWYWx1ZS52YWx1ZVsgMCBdKSwgb3B0VmFsdWUpICE9PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgcHJvcHMuZW1pdFZhbHVlID09PSB0cnVlID8gb3B0VmFsdWUgOiBvcHQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIChoYXNEaWFsb2cgIT09IHRydWUgfHwgZGlhbG9nRmllbGRGb2N1c2VkLnZhbHVlID09PSB0cnVlKSAmJiBzdGF0ZS5mb2N1cygpXG5cbiAgICAgIHNlbGVjdElucHV0VGV4dCgpXG5cbiAgICAgIGlmIChpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCB2YWwgPSBwcm9wcy5lbWl0VmFsdWUgPT09IHRydWUgPyBvcHRWYWx1ZSA6IG9wdFxuICAgICAgICBlbWl0KCdhZGQnLCB7IGluZGV4OiAwLCB2YWx1ZTogdmFsIH0pXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgcHJvcHMubXVsdGlwbGUgPT09IHRydWUgPyBbIHZhbCBdIDogdmFsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgbW9kZWwgPSBwcm9wcy5tb2RlbFZhbHVlLnNsaWNlKCksXG4gICAgICAgIGluZGV4ID0gaW5uZXJPcHRpb25zVmFsdWUudmFsdWUuZmluZEluZGV4KHYgPT4gaXNEZWVwRXF1YWwodiwgb3B0VmFsdWUpKVxuXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBlbWl0KCdyZW1vdmUnLCB7IGluZGV4LCB2YWx1ZTogbW9kZWwuc3BsaWNlKGluZGV4LCAxKVsgMCBdIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb3BzLm1heFZhbHVlcyAhPT0gdm9pZCAwICYmIG1vZGVsLmxlbmd0aCA+PSBwcm9wcy5tYXhWYWx1ZXMpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbCA9IHByb3BzLmVtaXRWYWx1ZSA9PT0gdHJ1ZSA/IG9wdFZhbHVlIDogb3B0XG5cbiAgICAgICAgZW1pdCgnYWRkJywgeyBpbmRleDogbW9kZWwubGVuZ3RoLCB2YWx1ZTogdmFsIH0pXG4gICAgICAgIG1vZGVsLnB1c2godmFsKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldE9wdGlvbkluZGV4IChpbmRleCkge1xuICAgICAgaWYgKCRxLnBsYXRmb3JtLmlzLmRlc2t0b3AgIT09IHRydWUpIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3QgdmFsID0gaW5kZXggPiAtMSAmJiBpbmRleCA8IHZpcnR1YWxTY3JvbGxMZW5ndGgudmFsdWVcbiAgICAgICAgPyBpbmRleFxuICAgICAgICA6IC0xXG5cbiAgICAgIGlmIChvcHRpb25JbmRleC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIG9wdGlvbkluZGV4LnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbW92ZU9wdGlvblNlbGVjdGlvbiAob2Zmc2V0ID0gMSwgc2tpcElucHV0VmFsdWUpIHtcbiAgICAgIGlmIChtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IG9wdGlvbkluZGV4LnZhbHVlXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBpbmRleCA9IG5vcm1hbGl6ZVRvSW50ZXJ2YWwoXG4gICAgICAgICAgICBpbmRleCArIG9mZnNldCxcbiAgICAgICAgICAgIC0xLFxuICAgICAgICAgICAgdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZSAtIDFcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGluZGV4ICE9PSAtMSAmJiBpbmRleCAhPT0gb3B0aW9uSW5kZXgudmFsdWUgJiYgaXNPcHRpb25EaXNhYmxlZC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSA9PT0gdHJ1ZSlcblxuICAgICAgICBpZiAob3B0aW9uSW5kZXgudmFsdWUgIT09IGluZGV4KSB7XG4gICAgICAgICAgc2V0T3B0aW9uSW5kZXgoaW5kZXgpXG4gICAgICAgICAgc2Nyb2xsVG8oaW5kZXgpXG5cbiAgICAgICAgICBpZiAoc2tpcElucHV0VmFsdWUgIT09IHRydWUgJiYgcHJvcHMudXNlSW5wdXQgPT09IHRydWUgJiYgcHJvcHMuZmlsbElucHV0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRJbnB1dFZhbHVlKGluZGV4ID49IDBcbiAgICAgICAgICAgICAgPyBnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKVxuICAgICAgICAgICAgICA6IGRlZmF1bHRJbnB1dFZhbHVlXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0T3B0aW9uICh2YWx1ZSwgdmFsdWVDYWNoZSkge1xuICAgICAgY29uc3QgZm4gPSBvcHQgPT4gaXNEZWVwRXF1YWwoZ2V0T3B0aW9uVmFsdWUudmFsdWUob3B0KSwgdmFsdWUpXG4gICAgICByZXR1cm4gcHJvcHMub3B0aW9ucy5maW5kKGZuKSB8fCB2YWx1ZUNhY2hlLmZpbmQoZm4pIHx8IHZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHJvcFZhbHVlRm4gKHByb3BWYWx1ZSwgZGVmYXVsdFZhbCkge1xuICAgICAgY29uc3QgdmFsID0gcHJvcFZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wVmFsdWVcbiAgICAgICAgOiBkZWZhdWx0VmFsXG5cbiAgICAgIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gdmFsXG4gICAgICAgIDogb3B0ID0+IChvcHQgIT09IG51bGwgJiYgdHlwZW9mIG9wdCA9PT0gJ29iamVjdCcgJiYgdmFsIGluIG9wdCA/IG9wdFsgdmFsIF0gOiBvcHQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNPcHRpb25TZWxlY3RlZCAob3B0KSB7XG4gICAgICBjb25zdCB2YWwgPSBnZXRPcHRpb25WYWx1ZS52YWx1ZShvcHQpXG4gICAgICByZXR1cm4gaW5uZXJPcHRpb25zVmFsdWUudmFsdWUuZmluZCh2ID0+IGlzRGVlcEVxdWFsKHYsIHZhbCkpICE9PSB2b2lkIDBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RJbnB1dFRleHQgKGUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMudXNlSW5wdXQgPT09IHRydWVcbiAgICAgICAgJiYgdGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICYmIChlID09PSB2b2lkIDAgfHwgKHRhcmdldFJlZi52YWx1ZSA9PT0gZS50YXJnZXQgJiYgZS50YXJnZXQudmFsdWUgPT09IHNlbGVjdGVkU3RyaW5nLnZhbHVlKSlcbiAgICAgICkge1xuICAgICAgICB0YXJnZXRSZWYudmFsdWUuc2VsZWN0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhcmdldEtleXVwIChlKSB7XG4gICAgICAvLyBpZiBFU0MgYW5kIHdlIGhhdmUgYW4gb3BlbmVkIG1lbnVcbiAgICAgIC8vIHRoZW4gc3RvcCBwcm9wYWdhdGlvbiAobWlnaHQgYmUgY2F1Z2h0IGJ5IGEgUURpYWxvZ1xuICAgICAgLy8gYW5kIHNvIGl0IHdpbGwgYWxzbyBjbG9zZSB0aGUgUURpYWxvZywgd2hpY2ggaXMgd3JvbmcpXG4gICAgICBpZiAoaXNLZXlDb2RlKGUsIDI3KSA9PT0gdHJ1ZSAmJiBtZW51LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHN0b3AoZSlcbiAgICAgICAgLy8gb24gRVNDIHdlIG5lZWQgdG8gY2xvc2UgdGhlIGRpYWxvZyBhbHNvXG4gICAgICAgIGhpZGVQb3B1cCgpXG4gICAgICAgIHJlc2V0SW5wdXRWYWx1ZSgpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2tleXVwJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhcmdldEF1dG9jb21wbGV0ZSAoZSkge1xuICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXRcblxuICAgICAgaWYgKGUua2V5Q29kZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIG9uVGFyZ2V0S2V5dXAoZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGUudGFyZ2V0LnZhbHVlID0gJydcbiAgICAgIGNsZWFyVGltZW91dChpbnB1dFRpbWVyKVxuICAgICAgcmVzZXRJbnB1dFZhbHVlKClcblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBuZWVkbGUgPSB2YWx1ZS50b0xvY2FsZUxvd2VyQ2FzZSgpXG4gICAgICAgIGNvbnN0IGZpbmRGbiA9IGV4dHJhY3RGbiA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uID0gcHJvcHMub3B0aW9ucy5maW5kKG9wdCA9PiBleHRyYWN0Rm4udmFsdWUob3B0KS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSBuZWVkbGUpXG5cbiAgICAgICAgICBpZiAob3B0aW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbm5lclZhbHVlLnZhbHVlLmluZGV4T2Yob3B0aW9uKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRvZ2dsZU9wdGlvbihvcHRpb24pXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGlkZVBvcHVwKClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbGxGbiA9IGFmdGVyRmlsdGVyID0+IHtcbiAgICAgICAgICBpZiAoZmluZEZuKGdldE9wdGlvblZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChmaW5kRm4oZ2V0T3B0aW9uTGFiZWwpID09PSB0cnVlIHx8IGFmdGVyRmlsdGVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmaWx0ZXIodmFsdWUsIHRydWUsICgpID0+IGZpbGxGbih0cnVlKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGZpbGxGbigpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgc3RhdGUuY2xlYXJWYWx1ZShlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGFyZ2V0S2V5cHJlc3MgKGUpIHtcbiAgICAgIGVtaXQoJ2tleXByZXNzJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRhcmdldEtleWRvd24gKGUpIHtcbiAgICAgIGVtaXQoJ2tleWRvd24nLCBlKVxuXG4gICAgICBpZiAoc2hvdWxkSWdub3JlS2V5KGUpID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdWYWx1ZU1vZGVWYWxpZCA9IGlucHV0VmFsdWUudmFsdWUubGVuZ3RoID4gMFxuICAgICAgICAmJiAocHJvcHMubmV3VmFsdWVNb2RlICE9PSB2b2lkIDAgfHwgcHJvcHMub25OZXdWYWx1ZSAhPT0gdm9pZCAwKVxuXG4gICAgICBjb25zdCB0YWJTaG91bGRTZWxlY3QgPSBlLnNoaWZ0S2V5ICE9PSB0cnVlXG4gICAgICAgICYmIHByb3BzLm11bHRpcGxlICE9PSB0cnVlXG4gICAgICAgICYmIChvcHRpb25JbmRleC52YWx1ZSA+IC0xIHx8IG5ld1ZhbHVlTW9kZVZhbGlkID09PSB0cnVlKVxuXG4gICAgICAvLyBlc2NhcGVcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIHByZXZlbnQoZSkgLy8gcHJldmVudCBjbGVhcmluZyB0aGUgaW5wdXRWYWx1ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gdGFiXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSA5ICYmIHRhYlNob3VsZFNlbGVjdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY2xvc2VNZW51KClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldCA9PT0gdm9pZCAwIHx8IGUudGFyZ2V0LmlkICE9PSBzdGF0ZS50YXJnZXRVaWQudmFsdWUpIHsgcmV0dXJuIH1cblxuICAgICAgLy8gZG93blxuICAgICAgaWYgKFxuICAgICAgICBlLmtleUNvZGUgPT09IDQwXG4gICAgICAgICYmIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiBtZW51LnZhbHVlID09PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIHNob3dQb3B1cCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBiYWNrc3BhY2VcbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXlDb2RlID09PSA4XG4gICAgICAgICYmIHByb3BzLmhpZGVTZWxlY3RlZCAhPT0gdHJ1ZVxuICAgICAgICAmJiBpbnB1dFZhbHVlLnZhbHVlLmxlbmd0aCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSAmJiBBcnJheS5pc0FycmF5KHByb3BzLm1vZGVsVmFsdWUpID09PSB0cnVlKSB7XG4gICAgICAgICAgcmVtb3ZlQXRJbmRleChwcm9wcy5tb2RlbFZhbHVlLmxlbmd0aCAtIDEpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcHMubXVsdGlwbGUgIT09IHRydWUgJiYgcHJvcHMubW9kZWxWYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbnVsbClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gaG9tZSwgZW5kIC0gMzYsIDM1XG4gICAgICBpZiAoXG4gICAgICAgIChlLmtleUNvZGUgPT09IDM1IHx8IGUua2V5Q29kZSA9PT0gMzYpXG4gICAgICAgICYmICh0eXBlb2YgaW5wdXRWYWx1ZS52YWx1ZSAhPT0gJ3N0cmluZycgfHwgaW5wdXRWYWx1ZS52YWx1ZS5sZW5ndGggPT09IDApXG4gICAgICApIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgb3B0aW9uSW5kZXgudmFsdWUgPSAtMVxuICAgICAgICBtb3ZlT3B0aW9uU2VsZWN0aW9uKGUua2V5Q29kZSA9PT0gMzYgPyAxIDogLTEsIHByb3BzLm11bHRpcGxlKVxuICAgICAgfVxuXG4gICAgICAvLyBwZyB1cCwgcGcgZG93biAtIDMzLCAzNFxuICAgICAgaWYgKFxuICAgICAgICAoZS5rZXlDb2RlID09PSAzMyB8fCBlLmtleUNvZGUgPT09IDM0KVxuICAgICAgICAmJiB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQudmFsdWUgIT09IHZvaWQgMFxuICAgICAgKSB7XG4gICAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgICAgIG9wdGlvbkluZGV4LnZhbHVlID0gTWF0aC5tYXgoXG4gICAgICAgICAgLTEsXG4gICAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgICB2aXJ0dWFsU2Nyb2xsTGVuZ3RoLnZhbHVlLFxuICAgICAgICAgICAgb3B0aW9uSW5kZXgudmFsdWUgKyAoZS5rZXlDb2RlID09PSAzMyA/IC0xIDogMSkgKiB2aXJ0dWFsU2Nyb2xsU2xpY2VTaXplQ29tcHV0ZWQudmFsdWUudmlld1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBtb3ZlT3B0aW9uU2VsZWN0aW9uKGUua2V5Q29kZSA9PT0gMzMgPyAxIDogLTEsIHByb3BzLm11bHRpcGxlKVxuICAgICAgfVxuXG4gICAgICAvLyB1cCwgZG93blxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICBtb3ZlT3B0aW9uU2VsZWN0aW9uKGUua2V5Q29kZSA9PT0gMzggPyAtMSA6IDEsIHByb3BzLm11bHRpcGxlKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvcHRpb25zTGVuZ3RoID0gdmlydHVhbFNjcm9sbExlbmd0aC52YWx1ZVxuXG4gICAgICAvLyBjbGVhciBzZWFyY2ggYnVmZmVyIGlmIGV4cGlyZWRcbiAgICAgIGlmIChzZWFyY2hCdWZmZXIgPT09IHZvaWQgMCB8fCBzZWFyY2hCdWZmZXJFeHAgPCBEYXRlLm5vdygpKSB7XG4gICAgICAgIHNlYXJjaEJ1ZmZlciA9ICcnXG4gICAgICB9XG5cbiAgICAgIC8vIGtleWJvYXJkIHNlYXJjaCB3aGVuIG5vdCBoYXZpbmcgdXNlLWlucHV0XG4gICAgICBpZiAoXG4gICAgICAgIG9wdGlvbnNMZW5ndGggPiAwXG4gICAgICAgICYmIHByb3BzLnVzZUlucHV0ICE9PSB0cnVlXG4gICAgICAgICYmIGUua2V5ICE9PSB2b2lkIDBcbiAgICAgICAgJiYgZS5rZXkubGVuZ3RoID09PSAxIC8vIHByaW50YWJsZSBjaGFyXG4gICAgICAgICYmIGUuYWx0S2V5ID09PSBmYWxzZSAvLyBub3Qga2JkIHNob3J0Y3V0XG4gICAgICAgICYmIGUuY3RybEtleSA9PT0gZmFsc2UgLy8gbm90IGtiZCBzaG9ydGN1dFxuICAgICAgICAmJiBlLm1ldGFLZXkgPT09IGZhbHNlIC8vIG5vdCBrYmQgc2hvcnRjdXQsIGVzcGVjaWFsbHkgb24gbWFjT1Mgd2l0aCBDb21tYW5kIGtleVxuICAgICAgICAmJiAoZS5rZXlDb2RlICE9PSAzMiB8fCBzZWFyY2hCdWZmZXIubGVuZ3RoID4gMCkgLy8gc3BhY2UgaW4gbWlkZGxlIG9mIHNlYXJjaFxuICAgICAgKSB7XG4gICAgICAgIG1lbnUudmFsdWUgIT09IHRydWUgJiYgc2hvd1BvcHVwKGUpXG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICBjaGFyID0gZS5rZXkudG9Mb2NhbGVMb3dlckNhc2UoKSxcbiAgICAgICAgICBrZXlSZXBlYXQgPSBzZWFyY2hCdWZmZXIubGVuZ3RoID09PSAxICYmIHNlYXJjaEJ1ZmZlclsgMCBdID09PSBjaGFyXG5cbiAgICAgICAgc2VhcmNoQnVmZmVyRXhwID0gRGF0ZS5ub3coKSArIDE1MDBcbiAgICAgICAgaWYgKGtleVJlcGVhdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgICAgIHNlYXJjaEJ1ZmZlciArPSBjaGFyXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWFyY2hSZSA9IG5ldyBSZWdFeHAoJ14nICsgc2VhcmNoQnVmZmVyLnNwbGl0KCcnKS5tYXAobCA9PiAocmVFc2NhcGVMaXN0LmluZGV4T2YobCkgPiAtMSA/ICdcXFxcJyArIGwgOiBsKSkuam9pbignLionKSwgJ2knKVxuXG4gICAgICAgIGxldCBpbmRleCA9IG9wdGlvbkluZGV4LnZhbHVlXG5cbiAgICAgICAgaWYgKGtleVJlcGVhdCA9PT0gdHJ1ZSB8fCBpbmRleCA8IDAgfHwgc2VhcmNoUmUudGVzdChnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSkgIT09IHRydWUpIHtcbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBpbmRleCA9IG5vcm1hbGl6ZVRvSW50ZXJ2YWwoaW5kZXggKyAxLCAtMSwgb3B0aW9uc0xlbmd0aCAtIDEpXG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlIChpbmRleCAhPT0gb3B0aW9uSW5kZXgudmFsdWUgJiYgKFxuICAgICAgICAgICAgaXNPcHRpb25EaXNhYmxlZC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSA9PT0gdHJ1ZVxuICAgICAgICAgICAgfHwgc2VhcmNoUmUudGVzdChnZXRPcHRpb25MYWJlbC52YWx1ZShwcm9wcy5vcHRpb25zWyBpbmRleCBdKSkgIT09IHRydWVcbiAgICAgICAgICApKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbkluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHNldE9wdGlvbkluZGV4KGluZGV4KVxuICAgICAgICAgICAgc2Nyb2xsVG8oaW5kZXgpXG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIHByb3BzLnVzZUlucHV0ID09PSB0cnVlICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKGdldE9wdGlvbkxhYmVsLnZhbHVlKHByb3BzLm9wdGlvbnNbIGluZGV4IF0pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gZW50ZXIsIHNwYWNlICh3aGVuIG5vdCB1c2luZyB1c2UtaW5wdXQgYW5kIG5vdCBpbiBzZWFyY2gpLCBvciB0YWIgKHdoZW4gbm90IHVzaW5nIG11bHRpcGxlIGFuZCBvcHRpb24gc2VsZWN0ZWQpXG4gICAgICAvLyBzYW1lIHRhcmdldCBpcyBjaGVja2VkIGFib3ZlXG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5Q29kZSAhPT0gMTNcbiAgICAgICAgJiYgKGUua2V5Q29kZSAhPT0gMzIgfHwgcHJvcHMudXNlSW5wdXQgPT09IHRydWUgfHwgc2VhcmNoQnVmZmVyICE9PSAnJylcbiAgICAgICAgJiYgKGUua2V5Q29kZSAhPT0gOSB8fCB0YWJTaG91bGRTZWxlY3QgPT09IGZhbHNlKVxuICAgICAgKSB7IHJldHVybiB9XG5cbiAgICAgIGUua2V5Q29kZSAhPT0gOSAmJiBzdG9wQW5kUHJldmVudChlKVxuXG4gICAgICBpZiAob3B0aW9uSW5kZXgudmFsdWUgPiAtMSAmJiBvcHRpb25JbmRleC52YWx1ZSA8IG9wdGlvbnNMZW5ndGgpIHtcbiAgICAgICAgdG9nZ2xlT3B0aW9uKHByb3BzLm9wdGlvbnNbIG9wdGlvbkluZGV4LnZhbHVlIF0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAobmV3VmFsdWVNb2RlVmFsaWQgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgZG9uZSA9ICh2YWwsIG1vZGUpID0+IHtcbiAgICAgICAgICBpZiAobW9kZSkge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRlTmV3VmFsdWVNb2RlKG1vZGUpICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGUgPSBwcm9wcy5uZXdWYWx1ZU1vZGVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsID09PSB2b2lkIDAgfHwgdmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1cGRhdGVJbnB1dFZhbHVlKCcnLCBwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSwgdHJ1ZSlcblxuICAgICAgICAgIGNvbnN0IGZuID0gbW9kZSA9PT0gJ3RvZ2dsZScgPyB0b2dnbGVPcHRpb24gOiBhZGRcbiAgICAgICAgICBmbih2YWwsIG1vZGUgPT09ICdhZGQtdW5pcXVlJylcblxuICAgICAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsICYmIHRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICAgICAgICBoaWRlUG9wdXAoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5vbk5ld1ZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBlbWl0KCduZXdWYWx1ZScsIGlucHV0VmFsdWUudmFsdWUsIGRvbmUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9uZShpbnB1dFZhbHVlLnZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLm11bHRpcGxlICE9PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY2xvc2VNZW51KClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICBzaG93UG9wdXAoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFZpcnR1YWxTY3JvbGxFbCAoKSB7XG4gICAgICByZXR1cm4gaGFzRGlhbG9nID09PSB0cnVlXG4gICAgICAgID8gbWVudUNvbnRlbnRSZWYudmFsdWVcbiAgICAgICAgOiAoXG4gICAgICAgICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWUuY29udGVudEVsICE9PSBudWxsXG4gICAgICAgICAgICAgID8gbWVudVJlZi52YWx1ZS5jb250ZW50RWxcbiAgICAgICAgICAgICAgOiB2b2lkIDBcbiAgICAgICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VmlydHVhbFNjcm9sbFRhcmdldCAoKSB7XG4gICAgICByZXR1cm4gZ2V0VmlydHVhbFNjcm9sbEVsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTZWxlY3Rpb24gKCkge1xuICAgICAgaWYgKHByb3BzLmhpZGVTZWxlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gW11cbiAgICAgIH1cblxuICAgICAgaWYgKHNsb3RzWyAnc2VsZWN0ZWQtaXRlbScgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZFNjb3BlLnZhbHVlLm1hcChzY29wZSA9PiBzbG90c1sgJ3NlbGVjdGVkLWl0ZW0nIF0oc2NvcGUpKS5zbGljZSgpXG4gICAgICB9XG5cbiAgICAgIGlmIChzbG90cy5zZWxlY3RlZCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoc2xvdHMuc2VsZWN0ZWQoKSlcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLnVzZUNoaXBzID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZFNjb3BlLnZhbHVlLm1hcCgoc2NvcGUsIGkpID0+IGgoUUNoaXAsIHtcbiAgICAgICAgICBrZXk6ICdvcHRpb24tJyArIGksXG4gICAgICAgICAgcmVtb3ZhYmxlOiBzdGF0ZS5lZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSAmJiBpc09wdGlvbkRpc2FibGVkLnZhbHVlKHNjb3BlLm9wdCkgIT09IHRydWUsXG4gICAgICAgICAgZGVuc2U6IHRydWUsXG4gICAgICAgICAgdGV4dENvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICB0YWJpbmRleDogdGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgb25SZW1vdmUgKCkgeyBzY29wZS5yZW1vdmVBdEluZGV4KGkpIH1cbiAgICAgICAgfSwgKCkgPT4gaCgnc3BhbicsIHtcbiAgICAgICAgICBjbGFzczogJ2VsbGlwc2lzJyxcbiAgICAgICAgICBbIHNjb3BlLmh0bWwgPT09IHRydWUgPyAnaW5uZXJIVE1MJyA6ICd0ZXh0Q29udGVudCcgXTogZ2V0T3B0aW9uTGFiZWwudmFsdWUoc2NvcGUub3B0KVxuICAgICAgICB9KSkpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbXG4gICAgICAgIGgoJ3NwYW4nLCB7XG4gICAgICAgICAgWyB2YWx1ZUFzSHRtbC52YWx1ZSA9PT0gdHJ1ZSA/ICdpbm5lckhUTUwnIDogJ3RleHRDb250ZW50JyBdOiBhcmlhQ3VycmVudFZhbHVlLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWxsT3B0aW9ucyAoKSB7XG4gICAgICBpZiAobm9PcHRpb25zLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBzbG90c1sgJ25vLW9wdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBzbG90c1sgJ25vLW9wdGlvbicgXSh7IGlucHV0VmFsdWU6IGlucHV0VmFsdWUudmFsdWUgfSlcbiAgICAgICAgICA6IHZvaWQgMFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmbiA9IHNsb3RzLm9wdGlvbiAhPT0gdm9pZCAwXG4gICAgICAgID8gc2xvdHMub3B0aW9uXG4gICAgICAgIDogc2NvcGUgPT4ge1xuICAgICAgICAgIHJldHVybiBoKFFJdGVtLCB7XG4gICAgICAgICAgICBrZXk6IHNjb3BlLmluZGV4LFxuICAgICAgICAgICAgLi4uc2NvcGUuaXRlbVByb3BzXG4gICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGgoXG4gICAgICAgICAgICAgIFFJdGVtU2VjdGlvbixcbiAgICAgICAgICAgICAgKCkgPT4gaChcbiAgICAgICAgICAgICAgICBRSXRlbUxhYmVsLFxuICAgICAgICAgICAgICAgICgpID0+IGgoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgICAgICBbIHNjb3BlLmh0bWwgPT09IHRydWUgPyAnaW5uZXJIVE1MJyA6ICd0ZXh0Q29udGVudCcgXTogc2NvcGUubGFiZWxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICBsZXQgb3B0aW9ucyA9IHBhZFZpcnR1YWxTY3JvbGwoJ2RpdicsIG9wdGlvblNjb3BlLnZhbHVlLm1hcChmbikpXG5cbiAgICAgIGlmIChzbG90c1sgJ2JlZm9yZS1vcHRpb25zJyBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgb3B0aW9ucyA9IHNsb3RzWyAnYmVmb3JlLW9wdGlvbnMnIF0oKS5jb25jYXQob3B0aW9ucylcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGhNZXJnZVNsb3Qoc2xvdHNbICdhZnRlci1vcHRpb25zJyBdLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldElucHV0IChmcm9tRGlhbG9nLCBpc1RhcmdldCkge1xuICAgICAgY29uc3QgYXR0cnMgPSBpc1RhcmdldCA9PT0gdHJ1ZSA/IHsgLi4uY29tYm9ib3hBdHRycy52YWx1ZSwgLi4uc3RhdGUuc3BsaXRBdHRycy5hdHRyaWJ1dGVzLnZhbHVlIH0gOiB2b2lkIDBcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcmVmOiBpc1RhcmdldCA9PT0gdHJ1ZSA/IHRhcmdldFJlZiA6IHZvaWQgMCxcbiAgICAgICAga2V5OiAnaV90JyxcbiAgICAgICAgY2xhc3M6IGNvbXB1dGVkSW5wdXRDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHByb3BzLmlucHV0U3R5bGUsXG4gICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLnZhbHVlICE9PSB2b2lkIDAgPyBpbnB1dFZhbHVlLnZhbHVlIDogJycsXG4gICAgICAgIC8vIHJlcXVpcmVkIGZvciBBbmRyb2lkIGluIG9yZGVyIHRvIHNob3cgRU5URVIga2V5IHdoZW4gaW4gZm9ybVxuICAgICAgICB0eXBlOiAnc2VhcmNoJyxcbiAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgIGlkOiBpc1RhcmdldCA9PT0gdHJ1ZSA/IHN0YXRlLnRhcmdldFVpZC52YWx1ZSA6IHZvaWQgMCxcbiAgICAgICAgbWF4bGVuZ3RoOiBwcm9wcy5tYXhsZW5ndGgsXG4gICAgICAgIGF1dG9jb21wbGV0ZTogcHJvcHMuYXV0b2NvbXBsZXRlLFxuICAgICAgICAnZGF0YS1hdXRvZm9jdXMnOiBmcm9tRGlhbG9nID09PSB0cnVlIHx8IHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSB8fCB2b2lkIDAsXG4gICAgICAgIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlLFxuICAgICAgICByZWFkb25seTogcHJvcHMucmVhZG9ubHkgPT09IHRydWUsXG4gICAgICAgIC4uLmlucHV0Q29udHJvbEV2ZW50cy52YWx1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoZnJvbURpYWxvZyAhPT0gdHJ1ZSAmJiBoYXNEaWFsb2cgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5jbGFzcykgPT09IHRydWUpIHtcbiAgICAgICAgICBkYXRhLmNsYXNzID0gWyAuLi5kYXRhLmNsYXNzLCAnbm8tcG9pbnRlci1ldmVudHMnIF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhLmNsYXNzICs9ICcgbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2lucHV0JywgZGF0YSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbklucHV0IChlKSB7XG4gICAgICBjbGVhclRpbWVvdXQoaW5wdXRUaW1lcilcblxuICAgICAgaWYgKGUgJiYgZS50YXJnZXQgJiYgZS50YXJnZXQucUNvbXBvc2luZyA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSB8fCAnJylcbiAgICAgIC8vIG1hcmsgaXQgaGVyZSBhcyB1c2VyIGlucHV0IHNvIHRoYXQgaWYgdXBkYXRlSW5wdXRWYWx1ZSBpcyBjYWxsZWRcbiAgICAgIC8vIGJlZm9yZSBmaWx0ZXIgaXMgY2FsbGVkIHRoZSBpbmRpY2F0b3IgaXMgcmVzZXRcbiAgICAgIHVzZXJJbnB1dFZhbHVlID0gdHJ1ZVxuICAgICAgZGVmYXVsdElucHV0VmFsdWUgPSBpbnB1dFZhbHVlLnZhbHVlXG5cbiAgICAgIGlmIChcbiAgICAgICAgc3RhdGUuZm9jdXNlZC52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiAoaGFzRGlhbG9nICE9PSB0cnVlIHx8IGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICkge1xuICAgICAgICBzdGF0ZS5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vbkZpbHRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGlucHV0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmaWx0ZXIoaW5wdXRWYWx1ZS52YWx1ZSlcbiAgICAgICAgfSwgcHJvcHMuaW5wdXREZWJvdW5jZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbnB1dFZhbHVlICh2YWwpIHtcbiAgICAgIGlmIChpbnB1dFZhbHVlLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9IHZhbFxuICAgICAgICBlbWl0KCdpbnB1dFZhbHVlJywgdmFsKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUlucHV0VmFsdWUgKHZhbCwgbm9GaWx0ZXJpbmcsIGludGVybmFsKSB7XG4gICAgICB1c2VySW5wdXRWYWx1ZSA9IGludGVybmFsICE9PSB0cnVlXG5cbiAgICAgIGlmIChwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZSkge1xuICAgICAgICBzZXRJbnB1dFZhbHVlKHZhbClcblxuICAgICAgICBpZiAobm9GaWx0ZXJpbmcgPT09IHRydWUgfHwgaW50ZXJuYWwgIT09IHRydWUpIHtcbiAgICAgICAgICBkZWZhdWx0SW5wdXRWYWx1ZSA9IHZhbFxuICAgICAgICB9XG5cbiAgICAgICAgbm9GaWx0ZXJpbmcgIT09IHRydWUgJiYgZmlsdGVyKHZhbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXIgKHZhbCwga2VlcENsb3NlZCwgYWZ0ZXJVcGRhdGVGbikge1xuICAgICAgaWYgKHByb3BzLm9uRmlsdGVyID09PSB2b2lkIDAgfHwgKGtlZXBDbG9zZWQgIT09IHRydWUgJiYgc3RhdGUuZm9jdXNlZC52YWx1ZSAhPT0gdHJ1ZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgZW1pdCgnZmlsdGVyQWJvcnQnKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9IHRydWVcbiAgICAgICAgaW5uZXJMb2FkaW5nSW5kaWNhdG9yLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHZhbCAhPT0gJydcbiAgICAgICAgJiYgcHJvcHMubXVsdGlwbGUgIT09IHRydWVcbiAgICAgICAgJiYgaW5uZXJWYWx1ZS52YWx1ZS5sZW5ndGggPiAwXG4gICAgICAgICYmIHVzZXJJbnB1dFZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmIHZhbCA9PT0gZ2V0T3B0aW9uTGFiZWwudmFsdWUoaW5uZXJWYWx1ZS52YWx1ZVsgMCBdKVxuICAgICAgKSB7XG4gICAgICAgIHZhbCA9ICcnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxvY2FsRmlsdGVySWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbWVudS52YWx1ZSA9PT0gdHJ1ZSAmJiAobWVudS52YWx1ZSA9IGZhbHNlKVxuICAgICAgfSwgMTApXG5cbiAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJJZClcbiAgICAgIGZpbHRlcklkID0gbG9jYWxGaWx0ZXJJZFxuXG4gICAgICBlbWl0KFxuICAgICAgICAnZmlsdGVyJyxcbiAgICAgICAgdmFsLFxuICAgICAgICAoZm4sIGFmdGVyRm4pID0+IHtcbiAgICAgICAgICBpZiAoKGtlZXBDbG9zZWQgPT09IHRydWUgfHwgc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSkgJiYgZmlsdGVySWQgPT09IGxvY2FsRmlsdGVySWQpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChmaWx0ZXJJZClcblxuICAgICAgICAgICAgdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nICYmIGZuKClcblxuICAgICAgICAgICAgLy8gaGlkZSBpbmRpY2F0b3IgdG8gYWxsb3cgYXJyb3cgdG8gYW5pbWF0ZVxuICAgICAgICAgICAgaW5uZXJMb2FkaW5nSW5kaWNhdG9yLnZhbHVlID0gZmFsc2VcblxuICAgICAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPSBmYWxzZVxuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChrZWVwQ2xvc2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBtZW51LnZhbHVlID09PSB0cnVlICYmIGhpZGVQb3B1cCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZU1lbnUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBtZW51LnZhbHVlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHR5cGVvZiBhZnRlckZuID09PSAnZnVuY3Rpb24nICYmIG5leHRUaWNrKCgpID0+IHsgYWZ0ZXJGbihwcm94eSkgfSlcbiAgICAgICAgICAgICAgdHlwZW9mIGFmdGVyVXBkYXRlRm4gPT09ICdmdW5jdGlvbicgJiYgbmV4dFRpY2soKCkgPT4geyBhZnRlclVwZGF0ZUZuKHByb3h5KSB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBpZiAoc3RhdGUuZm9jdXNlZC52YWx1ZSA9PT0gdHJ1ZSAmJiBmaWx0ZXJJZCA9PT0gbG9jYWxGaWx0ZXJJZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGZpbHRlcklkKVxuICAgICAgICAgICAgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgICAgIGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICAgIG1lbnUudmFsdWUgPT09IHRydWUgJiYgKG1lbnUudmFsdWUgPSBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE1lbnUgKCkge1xuICAgICAgcmV0dXJuIGgoUU1lbnUsIHtcbiAgICAgICAgcmVmOiBtZW51UmVmLFxuICAgICAgICBjbGFzczogbWVudUNvbnRlbnRDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHByb3BzLnBvcHVwQ29udGVudFN0eWxlLFxuICAgICAgICBtb2RlbFZhbHVlOiBtZW51LnZhbHVlLFxuICAgICAgICBmaXQ6IHByb3BzLm1lbnVTaHJpbmsgIT09IHRydWUsXG4gICAgICAgIGNvdmVyOiBwcm9wcy5vcHRpb25zQ292ZXIgPT09IHRydWUgJiYgbm9PcHRpb25zLnZhbHVlICE9PSB0cnVlICYmIHByb3BzLnVzZUlucHV0ICE9PSB0cnVlLFxuICAgICAgICBhbmNob3I6IHByb3BzLm1lbnVBbmNob3IsXG4gICAgICAgIHNlbGY6IHByb3BzLm1lbnVTZWxmLFxuICAgICAgICBvZmZzZXQ6IHByb3BzLm1lbnVPZmZzZXQsXG4gICAgICAgIGRhcms6IGlzT3B0aW9uc0RhcmsudmFsdWUsXG4gICAgICAgIG5vUGFyZW50RXZlbnQ6IHRydWUsXG4gICAgICAgIG5vUmVmb2N1czogdHJ1ZSxcbiAgICAgICAgbm9Gb2N1czogdHJ1ZSxcbiAgICAgICAgc3F1YXJlOiBzcXVhcmVkTWVudS52YWx1ZSxcbiAgICAgICAgdHJhbnNpdGlvblNob3c6IHByb3BzLnRyYW5zaXRpb25TaG93LFxuICAgICAgICB0cmFuc2l0aW9uSGlkZTogcHJvcHMudHJhbnNpdGlvbkhpZGUsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IHRydWUsXG4gICAgICAgIC4uLmxpc3Rib3hBdHRycy52YWx1ZSxcbiAgICAgICAgb25TY3JvbGxQYXNzaXZlOiBvblZpcnR1YWxTY3JvbGxFdnQsXG4gICAgICAgIG9uQmVmb3JlU2hvdzogb25Db250cm9sUG9wdXBTaG93LFxuICAgICAgICBvbkJlZm9yZUhpZGU6IG9uTWVudUJlZm9yZUhpZGUsXG4gICAgICAgIG9uU2hvdzogb25NZW51U2hvd1xuICAgICAgfSwgZ2V0QWxsT3B0aW9ucylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk1lbnVCZWZvcmVIaWRlIChlKSB7XG4gICAgICBvbkNvbnRyb2xQb3B1cEhpZGUoZSlcbiAgICAgIGNsb3NlTWVudSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25NZW51U2hvdyAoKSB7XG4gICAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EaWFsb2dGaWVsZEZvY3VzIChlKSB7XG4gICAgICBzdG9wKGUpXG4gICAgICB0YXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgdGFyZ2V0UmVmLnZhbHVlLmZvY3VzKClcbiAgICAgIGRpYWxvZ0ZpZWxkRm9jdXNlZC52YWx1ZSA9IHRydWVcbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh3aW5kb3cucGFnZVhPZmZzZXQgfHwgd2luZG93LnNjcm9sbFggfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0IHx8IDAsIDApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EaWFsb2dGaWVsZEJsdXIgKGUpIHtcbiAgICAgIHN0b3AoZSlcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgZGlhbG9nRmllbGRGb2N1c2VkLnZhbHVlID0gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGlhbG9nICgpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICAgIGgoUUZpZWxkLCB7XG4gICAgICAgICAgY2xhc3M6IGBjb2wtYXV0byAkeyBzdGF0ZS5maWVsZENsYXNzLnZhbHVlIH1gLFxuICAgICAgICAgIC4uLmlubmVyRmllbGRQcm9wcy52YWx1ZSxcbiAgICAgICAgICBmb3I6IHN0YXRlLnRhcmdldFVpZC52YWx1ZSxcbiAgICAgICAgICBkYXJrOiBpc09wdGlvbnNEYXJrLnZhbHVlLFxuICAgICAgICAgIHNxdWFyZTogdHJ1ZSxcbiAgICAgICAgICBsb2FkaW5nOiBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUsXG4gICAgICAgICAgaXRlbUFsaWduZWQ6IGZhbHNlLFxuICAgICAgICAgIGZpbGxlZDogdHJ1ZSxcbiAgICAgICAgICBzdGFja0xhYmVsOiBpbnB1dFZhbHVlLnZhbHVlLmxlbmd0aCA+IDAsXG4gICAgICAgICAgLi4uc3RhdGUuc3BsaXRBdHRycy5saXN0ZW5lcnMudmFsdWUsXG4gICAgICAgICAgb25Gb2N1czogb25EaWFsb2dGaWVsZEZvY3VzLFxuICAgICAgICAgIG9uQmx1cjogb25EaWFsb2dGaWVsZEJsdXJcbiAgICAgICAgfSwge1xuICAgICAgICAgIC4uLnNsb3RzLFxuICAgICAgICAgIHJhd0NvbnRyb2w6ICgpID0+IHN0YXRlLmdldENvbnRyb2wodHJ1ZSksXG4gICAgICAgICAgYmVmb3JlOiB2b2lkIDAsXG4gICAgICAgICAgYWZ0ZXI6IHZvaWQgMFxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBtZW51LnZhbHVlID09PSB0cnVlICYmIGNvbnRlbnQucHVzaChcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogbWVudUNvbnRlbnRSZWYsXG4gICAgICAgICAgY2xhc3M6IG1lbnVDb250ZW50Q2xhc3MudmFsdWUgKyAnIHNjcm9sbCcsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLnBvcHVwQ29udGVudFN0eWxlLFxuICAgICAgICAgIC4uLmxpc3Rib3hBdHRycy52YWx1ZSxcbiAgICAgICAgICBvbkNsaWNrOiBwcmV2ZW50LFxuICAgICAgICAgIG9uU2Nyb2xsUGFzc2l2ZTogb25WaXJ0dWFsU2Nyb2xsRXZ0XG4gICAgICAgIH0sIGdldEFsbE9wdGlvbnMoKSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoUURpYWxvZywge1xuICAgICAgICByZWY6IGRpYWxvZ1JlZixcbiAgICAgICAgbW9kZWxWYWx1ZTogZGlhbG9nLnZhbHVlLFxuICAgICAgICBwb3NpdGlvbjogcHJvcHMudXNlSW5wdXQgPT09IHRydWUgPyAndG9wJyA6IHZvaWQgMCxcbiAgICAgICAgdHJhbnNpdGlvblNob3c6IHRyYW5zaXRpb25TaG93Q29tcHV0ZWQsXG4gICAgICAgIHRyYW5zaXRpb25IaWRlOiBwcm9wcy50cmFuc2l0aW9uSGlkZSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIG9uQmVmb3JlU2hvdzogb25Db250cm9sUG9wdXBTaG93LFxuICAgICAgICBvbkJlZm9yZUhpZGU6IG9uRGlhbG9nQmVmb3JlSGlkZSxcbiAgICAgICAgb25IaWRlOiBvbkRpYWxvZ0hpZGUsXG4gICAgICAgIG9uU2hvdzogb25EaWFsb2dTaG93XG4gICAgICB9LCAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1zZWxlY3RfX2RpYWxvZydcbiAgICAgICAgICArIChpc09wdGlvbnNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNlbGVjdF9fZGlhbG9nLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICAgICArIChkaWFsb2dGaWVsZEZvY3VzZWQudmFsdWUgPT09IHRydWUgPyAnIHEtc2VsZWN0X19kaWFsb2ctLWZvY3VzZWQnIDogJycpXG4gICAgICB9LCBjb250ZW50KSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0JlZm9yZUhpZGUgKGUpIHtcbiAgICAgIG9uQ29udHJvbFBvcHVwSGlkZShlKVxuXG4gICAgICBpZiAoZGlhbG9nUmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGRpYWxvZ1JlZi52YWx1ZS5fX3VwZGF0ZVJlZm9jdXNUYXJnZXQoXG4gICAgICAgICAgc3RhdGUucm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCcucS1maWVsZF9fbmF0aXZlID4gW3RhYmluZGV4XTpsYXN0LWNoaWxkJylcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBzdGF0ZS5mb2N1c2VkLnZhbHVlID0gZmFsc2VcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkRpYWxvZ0hpZGUgKGUpIHtcbiAgICAgIGhpZGVQb3B1cCgpXG4gICAgICBzdGF0ZS5mb2N1c2VkLnZhbHVlID09PSBmYWxzZSAmJiBlbWl0KCdibHVyJywgZSlcbiAgICAgIHJlc2V0SW5wdXRWYWx1ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25EaWFsb2dTaG93ICgpIHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgaWYgKFxuICAgICAgICAoZWwgPT09IG51bGwgfHwgZWwuaWQgIT09IHN0YXRlLnRhcmdldFVpZC52YWx1ZSlcbiAgICAgICAgJiYgdGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICYmIHRhcmdldFJlZi52YWx1ZSAhPT0gZWxcbiAgICAgICkge1xuICAgICAgICB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgfVxuXG4gICAgICBzZXRWaXJ0dWFsU2Nyb2xsU2l6ZSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VNZW51ICgpIHtcbiAgICAgIGlmIChkaWFsb2cudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIG9wdGlvbkluZGV4LnZhbHVlID0gLTFcblxuICAgICAgaWYgKG1lbnUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbWVudS52YWx1ZSA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5mb2N1c2VkLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBjbGVhclRpbWVvdXQoZmlsdGVySWQpXG4gICAgICAgIGZpbHRlcklkID0gdm9pZCAwXG5cbiAgICAgICAgaWYgKHN0YXRlLmlubmVyTG9hZGluZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGVtaXQoJ2ZpbHRlckFib3J0JylcbiAgICAgICAgICBzdGF0ZS5pbm5lckxvYWRpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICAgIGlubmVyTG9hZGluZ0luZGljYXRvci52YWx1ZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93UG9wdXAgKGUpIHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0RpYWxvZyA9PT0gdHJ1ZSkge1xuICAgICAgICBzdGF0ZS5vbkNvbnRyb2xGb2N1c2luKGUpXG4gICAgICAgIGRpYWxvZy52YWx1ZSA9IHRydWVcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHN0YXRlLmZvY3VzKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5mb2N1cygpXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5vbkZpbHRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGZpbHRlcihpbnB1dFZhbHVlLnZhbHVlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAobm9PcHRpb25zLnZhbHVlICE9PSB0cnVlIHx8IHNsb3RzWyAnbm8tb3B0aW9uJyBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgbWVudS52YWx1ZSA9IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlUG9wdXAgKCkge1xuICAgICAgZGlhbG9nLnZhbHVlID0gZmFsc2VcbiAgICAgIGNsb3NlTWVudSgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRJbnB1dFZhbHVlICgpIHtcbiAgICAgIHByb3BzLnVzZUlucHV0ID09PSB0cnVlICYmIHVwZGF0ZUlucHV0VmFsdWUoXG4gICAgICAgIHByb3BzLm11bHRpcGxlICE9PSB0cnVlICYmIHByb3BzLmZpbGxJbnB1dCA9PT0gdHJ1ZSAmJiBpbm5lclZhbHVlLnZhbHVlLmxlbmd0aCA+IDBcbiAgICAgICAgICA/IGdldE9wdGlvbkxhYmVsLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSkgfHwgJydcbiAgICAgICAgICA6ICcnLFxuICAgICAgICB0cnVlLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTWVudSAoc2hvdykge1xuICAgICAgbGV0IG9wdGlvbkluZGV4ID0gLTFcblxuICAgICAgaWYgKHNob3cgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKGlubmVyVmFsdWUudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHZhbCA9IGdldE9wdGlvblZhbHVlLnZhbHVlKGlubmVyVmFsdWUudmFsdWVbIDAgXSlcbiAgICAgICAgICBvcHRpb25JbmRleCA9IHByb3BzLm9wdGlvbnMuZmluZEluZGV4KHYgPT4gaXNEZWVwRXF1YWwoZ2V0T3B0aW9uVmFsdWUudmFsdWUodiksIHZhbCkpXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbChvcHRpb25JbmRleClcbiAgICAgIH1cblxuICAgICAgc2V0T3B0aW9uSW5kZXgob3B0aW9uSW5kZXgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVyZW5kZXJNZW51IChuZXdMZW5ndGgsIG9sZExlbmd0aCkge1xuICAgICAgaWYgKG1lbnUudmFsdWUgPT09IHRydWUgJiYgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgtMSwgdHJ1ZSlcblxuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgaWYgKG1lbnUudmFsdWUgPT09IHRydWUgJiYgc3RhdGUuaW5uZXJMb2FkaW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKG5ld0xlbmd0aCA+IG9sZExlbmd0aCkge1xuICAgICAgICAgICAgICBsb2NhbFJlc2V0VmlydHVhbFNjcm9sbCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgdXBkYXRlTWVudSh0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVNZW51UG9zaXRpb24gKCkge1xuICAgICAgaWYgKGRpYWxvZy52YWx1ZSA9PT0gZmFsc2UgJiYgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBtZW51UmVmLnZhbHVlLnVwZGF0ZVBvc2l0aW9uKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNvbnRyb2xQb3B1cFNob3cgKGUpIHtcbiAgICAgIGUgIT09IHZvaWQgMCAmJiBzdG9wKGUpXG4gICAgICBlbWl0KCdwb3B1cFNob3cnLCBlKVxuICAgICAgc3RhdGUuaGFzUG9wdXBPcGVuID0gdHJ1ZVxuICAgICAgc3RhdGUub25Db250cm9sRm9jdXNpbihlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ29udHJvbFBvcHVwSGlkZSAoZSkge1xuICAgICAgZSAhPT0gdm9pZCAwICYmIHN0b3AoZSlcbiAgICAgIGVtaXQoJ3BvcHVwSGlkZScsIGUpXG4gICAgICBzdGF0ZS5oYXNQb3B1cE9wZW4gPSBmYWxzZVxuICAgICAgc3RhdGUub25Db250cm9sRm9jdXNvdXQoZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQcmVTdGF0ZSAoKSB7XG4gICAgICBoYXNEaWFsb2cgPSAkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgIT09IHRydWUgJiYgcHJvcHMuYmVoYXZpb3IgIT09ICdkaWFsb2cnXG4gICAgICAgID8gZmFsc2VcbiAgICAgICAgOiBwcm9wcy5iZWhhdmlvciAhPT0gJ21lbnUnICYmIChcbiAgICAgICAgICBwcm9wcy51c2VJbnB1dCA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBzbG90c1sgJ25vLW9wdGlvbicgXSAhPT0gdm9pZCAwIHx8IHByb3BzLm9uRmlsdGVyICE9PSB2b2lkIDAgfHwgbm9PcHRpb25zLnZhbHVlID09PSBmYWxzZVxuICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgIClcblxuICAgICAgdHJhbnNpdGlvblNob3dDb21wdXRlZCA9ICRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSAmJiBoYXNEaWFsb2cgPT09IHRydWUgJiYgcHJvcHMudXNlSW5wdXQgPT09IHRydWVcbiAgICAgICAgPyAnZmFkZSdcbiAgICAgICAgOiBwcm9wcy50cmFuc2l0aW9uU2hvd1xuICAgIH1cblxuICAgIG9uQmVmb3JlVXBkYXRlKHVwZGF0ZVByZVN0YXRlKVxuICAgIG9uVXBkYXRlZCh1cGRhdGVNZW51UG9zaXRpb24pXG5cbiAgICB1cGRhdGVQcmVTdGF0ZSgpXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KGlucHV0VGltZXIpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNob3dQb3B1cCwgaGlkZVBvcHVwLFxuICAgICAgcmVtb3ZlQXRJbmRleCwgYWRkLCB0b2dnbGVPcHRpb24sXG4gICAgICBnZXRPcHRpb25JbmRleDogKCkgPT4gb3B0aW9uSW5kZXgudmFsdWUsXG4gICAgICBzZXRPcHRpb25JbmRleCwgbW92ZU9wdGlvblNlbGVjdGlvbixcbiAgICAgIGZpbHRlciwgdXBkYXRlTWVudVBvc2l0aW9uLCB1cGRhdGVJbnB1dFZhbHVlLFxuICAgICAgaXNPcHRpb25TZWxlY3RlZCxcbiAgICAgIGdldEVtaXR0aW5nT3B0aW9uVmFsdWUsXG4gICAgICBpc09wdGlvbkRpc2FibGVkOiAoLi4uYXJncykgPT4gaXNPcHRpb25EaXNhYmxlZC52YWx1ZS5hcHBseShudWxsLCBhcmdzKSA9PT0gdHJ1ZSxcbiAgICAgIGdldE9wdGlvblZhbHVlOiAoLi4uYXJncykgPT4gZ2V0T3B0aW9uVmFsdWUudmFsdWUuYXBwbHkobnVsbCwgYXJncyksXG4gICAgICBnZXRPcHRpb25MYWJlbDogKC4uLmFyZ3MpID0+IGdldE9wdGlvbkxhYmVsLnZhbHVlLmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgfSlcblxuICAgIE9iamVjdC5hc3NpZ24oc3RhdGUsIHtcbiAgICAgIGlubmVyVmFsdWUsXG5cbiAgICAgIGZpZWxkQ2xhc3M6IGNvbXB1dGVkKCgpID0+XG4gICAgICAgIGBxLXNlbGVjdCBxLWZpZWxkLS1hdXRvLWhlaWdodCBxLXNlbGVjdC0td2l0aCR7IHByb3BzLnVzZUlucHV0ICE9PSB0cnVlID8gJ291dCcgOiAnJyB9LWlucHV0YFxuICAgICAgICArIGAgcS1zZWxlY3QtLXdpdGgkeyBwcm9wcy51c2VDaGlwcyAhPT0gdHJ1ZSA/ICdvdXQnIDogJycgfS1jaGlwc2BcbiAgICAgICAgKyBgIHEtc2VsZWN0LS0keyBwcm9wcy5tdWx0aXBsZSA9PT0gdHJ1ZSA/ICdtdWx0aXBsZScgOiAnc2luZ2xlJyB9YFxuICAgICAgKSxcblxuICAgICAgaW5wdXRSZWYsXG4gICAgICB0YXJnZXRSZWYsXG4gICAgICBoYXNWYWx1ZSxcbiAgICAgIHNob3dQb3B1cCxcblxuICAgICAgZmxvYXRpbmdMYWJlbDogY29tcHV0ZWQoKCkgPT5cbiAgICAgICAgKHByb3BzLmhpZGVTZWxlY3RlZCAhPT0gdHJ1ZSAmJiBoYXNWYWx1ZS52YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgfHwgdHlwZW9mIGlucHV0VmFsdWUudmFsdWUgPT09ICdudW1iZXInXG4gICAgICAgIHx8IGlucHV0VmFsdWUudmFsdWUubGVuZ3RoID4gMFxuICAgICAgICB8fCBmaWVsZFZhbHVlSXNGaWxsZWQocHJvcHMuZGlzcGxheVZhbHVlKVxuICAgICAgKSxcblxuICAgICAgZ2V0Q29udHJvbENoaWxkOiAoKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgZGlhbG9nLnZhbHVlID09PSB0cnVlIC8vIGRpYWxvZyBhbHdheXMgaGFzIG1lbnUgZGlzcGxheWVkLCBzbyBuZWVkIHRvIHJlbmRlciBpdFxuICAgICAgICAgICAgfHwgbm9PcHRpb25zLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICAgICB8fCBzbG90c1sgJ25vLW9wdGlvbicgXSAhPT0gdm9pZCAwXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gaGFzRGlhbG9nID09PSB0cnVlID8gZ2V0RGlhbG9nKCkgOiBnZXRNZW51KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdGF0ZS5oYXNQb3B1cE9wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBleHBsaWNpdGx5IHNldCBpdCBvdGhlcndpc2UgVEFCIHdpbGwgbm90IGJsdXIgY29tcG9uZW50XG4gICAgICAgICAgc3RhdGUuaGFzUG9wdXBPcGVuID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgY29udHJvbEV2ZW50czoge1xuICAgICAgICBvbkZvY3VzaW4gKGUpIHsgc3RhdGUub25Db250cm9sRm9jdXNpbihlKSB9LFxuICAgICAgICBvbkZvY3Vzb3V0IChlKSB7XG4gICAgICAgICAgc3RhdGUub25Db250cm9sRm9jdXNvdXQoZSwgKCkgPT4ge1xuICAgICAgICAgICAgcmVzZXRJbnB1dFZhbHVlKClcbiAgICAgICAgICAgIGNsb3NlTWVudSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljayAoZSkge1xuICAgICAgICAgIC8vIGxhYmVsIGZyb20gUUZpZWxkIHdpbGwgcHJvcGFnYXRlIGNsaWNrIG9uIHRoZSBpbnB1dFxuICAgICAgICAgIHByZXZlbnQoZSlcblxuICAgICAgICAgIGlmIChoYXNEaWFsb2cgIT09IHRydWUgJiYgbWVudS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY2xvc2VNZW51KClcbiAgICAgICAgICAgIHRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCAmJiB0YXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2hvd1BvcHVwKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldENvbnRyb2w6IGZyb21EaWFsb2cgPT4ge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGdldFNlbGVjdGlvbigpXG4gICAgICAgIGNvbnN0IGlzVGFyZ2V0ID0gZnJvbURpYWxvZyA9PT0gdHJ1ZSB8fCBkaWFsb2cudmFsdWUgIT09IHRydWUgfHwgaGFzRGlhbG9nICE9PSB0cnVlXG5cbiAgICAgICAgaWYgKHByb3BzLnVzZUlucHV0ID09PSB0cnVlKSB7XG4gICAgICAgICAgY2hpbGQucHVzaChnZXRJbnB1dChmcm9tRGlhbG9nLCBpc1RhcmdldCkpXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlcmUgY2FuIGJlIG9ubHkgb25lICh3aGVuIGRpYWxvZyBpcyBvcGVuZWQgdGhlIGNvbnRyb2wgaW4gZGlhbG9nIHNob3VsZCBiZSB0YXJnZXQpXG4gICAgICAgIGVsc2UgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgYXR0cnMgPSBpc1RhcmdldCA9PT0gdHJ1ZSA/IGNvbWJvYm94QXR0cnMudmFsdWUgOiB2b2lkIDBcblxuICAgICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgICBoKCdpbnB1dCcsIHtcbiAgICAgICAgICAgICAgcmVmOiBpc1RhcmdldCA9PT0gdHJ1ZSA/IHRhcmdldFJlZiA6IHZvaWQgMCxcbiAgICAgICAgICAgICAga2V5OiAnZF90JyxcbiAgICAgICAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fZm9jdXMtdGFyZ2V0JyxcbiAgICAgICAgICAgICAgaWQ6IGlzVGFyZ2V0ID09PSB0cnVlID8gc3RhdGUudGFyZ2V0VWlkLnZhbHVlIDogdm9pZCAwLFxuICAgICAgICAgICAgICB2YWx1ZTogYXJpYUN1cnJlbnRWYWx1ZS52YWx1ZSxcbiAgICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXG4gICAgICAgICAgICAgICdkYXRhLWF1dG9mb2N1cyc6IGZyb21EaWFsb2cgPT09IHRydWUgfHwgcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlIHx8IHZvaWQgMCxcbiAgICAgICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAgICAgIG9uS2V5ZG93bjogb25UYXJnZXRLZXlkb3duLFxuICAgICAgICAgICAgICBvbktleXVwOiBvblRhcmdldEtleXVwLFxuICAgICAgICAgICAgICBvbktleXByZXNzOiBvblRhcmdldEtleXByZXNzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChpc1RhcmdldCA9PT0gdHJ1ZSAmJiB0eXBlb2YgcHJvcHMuYXV0b2NvbXBsZXRlID09PSAnc3RyaW5nJyAmJiBwcm9wcy5hdXRvY29tcGxldGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgICAgaCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fYXV0b2NvbXBsZXRlLWlucHV0JyxcbiAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IHByb3BzLmF1dG9jb21wbGV0ZSxcbiAgICAgICAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgICAgICAgb25LZXl1cDogb25UYXJnZXRBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZVByb3AudmFsdWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGlubmVyT3B0aW9uc1ZhbHVlLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCBvcHRzID0gaW5uZXJPcHRpb25zVmFsdWUudmFsdWUubWFwKHZhbHVlID0+IGgoJ29wdGlvbicsIHsgdmFsdWUsIHNlbGVjdGVkOiB0cnVlIH0pKVxuXG4gICAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICAgIGgoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICBuYW1lOiBuYW1lUHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgbXVsdGlwbGU6IHByb3BzLm11bHRpcGxlXG4gICAgICAgICAgICB9LCBvcHRzKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGF0dHJzID0gcHJvcHMudXNlSW5wdXQgPT09IHRydWUgfHwgaXNUYXJnZXQgIT09IHRydWUgPyB2b2lkIDAgOiBzdGF0ZS5zcGxpdEF0dHJzLmF0dHJpYnV0ZXMudmFsdWVcblxuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGNsYXNzOiAncS1maWVsZF9fbmF0aXZlIHJvdyBpdGVtcy1jZW50ZXInLFxuICAgICAgICAgIC4uLmF0dHJzXG4gICAgICAgIH0sIGNoaWxkKVxuICAgICAgfSxcblxuICAgICAgZ2V0SW5uZXJBcHBlbmQ6ICgpID0+IChcbiAgICAgICAgcHJvcHMubG9hZGluZyAhPT0gdHJ1ZSAmJiBpbm5lckxvYWRpbmdJbmRpY2F0b3IudmFsdWUgIT09IHRydWUgJiYgcHJvcHMuaGlkZURyb3Bkb3duSWNvbiAhPT0gdHJ1ZVxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6ICdxLXNlbGVjdF9fZHJvcGRvd24taWNvbicgKyAobWVudS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcm90YXRlLTE4MCcgOiAnJyksXG4gICAgICAgICAgICAgICAgbmFtZTogZHJvcGRvd25BcnJvd0ljb24udmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHVzZUZpZWxkKHN0YXRlKVxuICB9XG59KVxuIl0sIm5hbWVzIjpbImVsIiwiaCIsIm9wdGlvbkluZGV4IiwiYXR0cnMiXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxJQUFBLFNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sY0FBYztBQUFBLEVBRWQsT0FBTztBQUFBLEVBRVAsT0FBTztBQUFBLEVBRVAsUUFBUztBQUNQLFdBQU8sU0FBUyxlQUFlO0FBQUEsRUFDaEM7QUFDSCxDQUFDO0FDSE0sTUFBTSxlQUFlO0FBQUEsRUFDMUIsSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUFBLEVBQ0osSUFBSTtBQUNOO0FBRUEsSUFBQSxRQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLEdBQUc7QUFBQSxJQUNILEdBQUc7QUFBQSxJQUVILE9BQU87QUFBQSxJQUVQLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLFlBQVk7QUFBQSxJQUNaLGNBQWM7QUFBQSxJQUNkLE9BQU8sQ0FBRSxRQUFRLE1BQVE7QUFBQSxJQUV6QixPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsSUFFWCxZQUFZO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDVjtBQUFBLElBQ0QsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELFFBQVE7QUFBQSxJQUNSLFNBQVM7QUFBQSxJQUNULFdBQVc7QUFBQSxJQUNYLFdB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

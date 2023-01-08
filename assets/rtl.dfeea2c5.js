import { b5 as Platform, r as ref, aQ as isKeyCode, G as prevent, q as nextTick, D as addEvt, w as watch, o as onMounted, n as onBeforeUnmount, g as getCurrentInstance, K as cleanEvt, t as listenOpts, b6 as portalProxyList, z as client, a1 as getScrollbarWidth, k as createComponent, c as computed, h, l as hSlot, N as useDarkProps, at as useRouterLinkProps, P as useDark, b7 as useRouterLink, L as stopAndPrevent, v as hUniqueSlot, M as useModelToggleProps, aE as useTransitionProps, O as useModelToggleEmits, aT as useTick, Q as useTimeout, b0 as useTransition, R as useModelToggle, b1 as usePortal, b8 as addFocusout, I as position, b9 as removeFocusout, ba as removeEscapeKey, _ as getScrollTarget, bb as closePortalMenus, ar as Transition, bc as addEscapeKey, aJ as addFocusFn, bd as childHasFocus } from "./index.211189c8.js";
function clearSelection() {
  if (window.getSelection !== void 0) {
    const selection = window.getSelection();
    if (selection.empty !== void 0) {
      selection.empty();
    } else if (selection.removeAllRanges !== void 0) {
      selection.removeAllRanges();
      Platform.is.mobile !== true && selection.addRange(document.createRange());
    }
  } else if (document.selection !== void 0) {
    document.selection.empty();
  }
}
const useAnchorProps = {
  target: {
    default: true
  },
  noParentEvent: Boolean,
  contextMenu: Boolean
};
function useAnchor({
  showing,
  avoidEmit,
  configureAnchorEl
}) {
  const { props, proxy, emit } = getCurrentInstance();
  const anchorEl = ref(null);
  let touchTimer;
  function canShow(evt) {
    return anchorEl.value === null ? false : evt === void 0 || evt.touches === void 0 || evt.touches.length <= 1;
  }
  const anchorEvents = {};
  if (configureAnchorEl === void 0) {
    Object.assign(anchorEvents, {
      hide(evt) {
        proxy.hide(evt);
      },
      toggle(evt) {
        proxy.toggle(evt);
        evt.qAnchorHandled = true;
      },
      toggleKey(evt) {
        isKeyCode(evt, 13) === true && anchorEvents.toggle(evt);
      },
      contextClick(evt) {
        proxy.hide(evt);
        prevent(evt);
        nextTick(() => {
          proxy.show(evt);
          evt.qAnchorHandled = true;
        });
      },
      prevent,
      mobileTouch(evt) {
        anchorEvents.mobileCleanup(evt);
        if (canShow(evt) !== true) {
          return;
        }
        proxy.hide(evt);
        anchorEl.value.classList.add("non-selectable");
        const target = evt.target;
        addEvt(anchorEvents, "anchor", [
          [target, "touchmove", "mobileCleanup", "passive"],
          [target, "touchend", "mobileCleanup", "passive"],
          [target, "touchcancel", "mobileCleanup", "passive"],
          [anchorEl.value, "contextmenu", "prevent", "notPassive"]
        ]);
        touchTimer = setTimeout(() => {
          proxy.show(evt);
          evt.qAnchorHandled = true;
        }, 300);
      },
      mobileCleanup(evt) {
        anchorEl.value.classList.remove("non-selectable");
        clearTimeout(touchTimer);
        if (showing.value === true && evt !== void 0) {
          clearSelection();
        }
      }
    });
    configureAnchorEl = function(context = props.contextMenu) {
      if (props.noParentEvent === true || anchorEl.value === null) {
        return;
      }
      let evts;
      if (context === true) {
        if (proxy.$q.platform.is.mobile === true) {
          evts = [
            [anchorEl.value, "touchstart", "mobileTouch", "passive"]
          ];
        } else {
          evts = [
            [anchorEl.value, "mousedown", "hide", "passive"],
            [anchorEl.value, "contextmenu", "contextClick", "notPassive"]
          ];
        }
      } else {
        evts = [
          [anchorEl.value, "click", "toggle", "passive"],
          [anchorEl.value, "keyup", "toggleKey", "passive"]
        ];
      }
      addEvt(anchorEvents, "anchor", evts);
    };
  }
  function unconfigureAnchorEl() {
    cleanEvt(anchorEvents, "anchor");
  }
  function setAnchorEl(el) {
    anchorEl.value = el;
    while (anchorEl.value.classList.contains("q-anchor--skip")) {
      anchorEl.value = anchorEl.value.parentNode;
    }
    configureAnchorEl();
  }
  function pickAnchorEl() {
    if (props.target === false || props.target === "" || proxy.$el.parentNode === null) {
      anchorEl.value = null;
    } else if (props.target === true) {
      setAnchorEl(proxy.$el.parentNode);
    } else {
      let el = props.target;
      if (typeof props.target === "string") {
        try {
          el = document.querySelector(props.target);
        } catch (err) {
          el = void 0;
        }
      }
      if (el !== void 0 && el !== null) {
        anchorEl.value = el.$el || el;
        configureAnchorEl();
      } else {
        anchorEl.value = null;
        console.error(`Anchor: target "${props.target}" not found`);
      }
    }
  }
  watch(() => props.contextMenu, (val) => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
      configureAnchorEl(val);
    }
  });
  watch(() => props.target, () => {
    if (anchorEl.value !== null) {
      unconfigureAnchorEl();
    }
    pickAnchorEl();
  });
  watch(() => props.noParentEvent, (val) => {
    if (anchorEl.value !== null) {
      if (val === true) {
        unconfigureAnchorEl();
      } else {
        configureAnchorEl();
      }
    }
  });
  onMounted(() => {
    pickAnchorEl();
    if (avoidEmit !== true && props.modelValue === true && anchorEl.value === null) {
      emit("update:modelValue", false);
    }
  });
  onBeforeUnmount(() => {
    clearTimeout(touchTimer);
    unconfigureAnchorEl();
  });
  return {
    anchorEl,
    canShow,
    anchorEvents
  };
}
function useScrollTarget(props, configureScrollTarget) {
  const localScrollTarget = ref(null);
  let scrollFn;
  function changeScrollEvent(scrollTarget, fn) {
    const fnProp = `${fn !== void 0 ? "add" : "remove"}EventListener`;
    const fnHandler = fn !== void 0 ? fn : scrollFn;
    if (scrollTarget !== window) {
      scrollTarget[fnProp]("scroll", fnHandler, listenOpts.passive);
    }
    window[fnProp]("scroll", fnHandler, listenOpts.passive);
    scrollFn = fn;
  }
  function unconfigureScrollTarget() {
    if (localScrollTarget.value !== null) {
      changeScrollEvent(localScrollTarget.value);
      localScrollTarget.value = null;
    }
  }
  const noParentEventWatcher = watch(() => props.noParentEvent, () => {
    if (localScrollTarget.value !== null) {
      unconfigureScrollTarget();
      configureScrollTarget();
    }
  });
  onBeforeUnmount(noParentEventWatcher);
  return {
    localScrollTarget,
    unconfigureScrollTarget,
    changeScrollEvent
  };
}
let timer;
const { notPassiveCapture } = listenOpts, registeredList = [];
function globalHandler(evt) {
  clearTimeout(timer);
  const target = evt.target;
  if (target === void 0 || target.nodeType === 8 || target.classList.contains("no-pointer-events") === true) {
    return;
  }
  let portalIndex = portalProxyList.length - 1;
  while (portalIndex >= 0) {
    const proxy = portalProxyList[portalIndex].$;
    if (proxy.type.name !== "QDialog") {
      break;
    }
    if (proxy.props.seamless !== true) {
      return;
    }
    portalIndex--;
  }
  for (let i = registeredList.length - 1; i >= 0; i--) {
    const state = registeredList[i];
    if ((state.anchorEl.value === null || state.anchorEl.value.contains(target) === false) && (target === document.body || state.innerRef.value !== null && state.innerRef.value.contains(target) === false)) {
      evt.qClickOutside = true;
      state.onClickOutside(evt);
    } else {
      return;
    }
  }
}
function addClickOutside(clickOutsideProps) {
  registeredList.push(clickOutsideProps);
  if (registeredList.length === 1) {
    document.addEventListener("mousedown", globalHandler, notPassiveCapture);
    document.addEventListener("touchstart", globalHandler, notPassiveCapture);
  }
}
function removeClickOutside(clickOutsideProps) {
  const index = registeredList.findIndex((h2) => h2 === clickOutsideProps);
  if (index > -1) {
    registeredList.splice(index, 1);
    if (registeredList.length === 0) {
      clearTimeout(timer);
      document.removeEventListener("mousedown", globalHandler, notPassiveCapture);
      document.removeEventListener("touchstart", globalHandler, notPassiveCapture);
    }
  }
}
let vpLeft, vpTop;
function validatePosition(pos) {
  const parts = pos.split(" ");
  if (parts.length !== 2) {
    return false;
  }
  if (["top", "center", "bottom"].includes(parts[0]) !== true) {
    console.error("Anchor/Self position must start with one of top/center/bottom");
    return false;
  }
  if (["left", "middle", "right", "start", "end"].includes(parts[1]) !== true) {
    console.error("Anchor/Self position must end with one of left/middle/right/start/end");
    return false;
  }
  return true;
}
function validateOffset(val) {
  if (!val) {
    return true;
  }
  if (val.length !== 2) {
    return false;
  }
  if (typeof val[0] !== "number" || typeof val[1] !== "number") {
    return false;
  }
  return true;
}
const horizontalPos = {
  "start#ltr": "left",
  "start#rtl": "right",
  "end#ltr": "right",
  "end#rtl": "left"
};
["left", "middle", "right"].forEach((pos) => {
  horizontalPos[`${pos}#ltr`] = pos;
  horizontalPos[`${pos}#rtl`] = pos;
});
function parsePosition(pos, rtl) {
  const parts = pos.split(" ");
  return {
    vertical: parts[0],
    horizontal: horizontalPos[`${parts[1]}#${rtl === true ? "rtl" : "ltr"}`]
  };
}
function getAnchorProps(el, offset) {
  let { top, left, right, bottom, width, height } = el.getBoundingClientRect();
  if (offset !== void 0) {
    top -= offset[1];
    left -= offset[0];
    bottom += offset[1];
    right += offset[0];
    width += offset[0];
    height += offset[1];
  }
  return {
    top,
    left,
    right,
    bottom,
    width,
    height,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  };
}
function getTargetProps(el) {
  return {
    top: 0,
    center: el.offsetHeight / 2,
    bottom: el.offsetHeight,
    left: 0,
    middle: el.offsetWidth / 2,
    right: el.offsetWidth
  };
}
function setPosition(cfg) {
  if (client.is.ios === true && window.visualViewport !== void 0) {
    const el = document.body.style;
    const { offsetLeft: left, offsetTop: top } = window.visualViewport;
    if (left !== vpLeft) {
      el.setProperty("--q-pe-left", left + "px");
      vpLeft = left;
    }
    if (top !== vpTop) {
      el.setProperty("--q-pe-top", top + "px");
      vpTop = top;
    }
  }
  let anchorProps;
  const { scrollLeft, scrollTop } = cfg.el;
  if (cfg.absoluteOffset === void 0) {
    anchorProps = getAnchorProps(cfg.anchorEl, cfg.cover === true ? [0, 0] : cfg.offset);
  } else {
    const { top: anchorTop, left: anchorLeft } = cfg.anchorEl.getBoundingClientRect(), top = anchorTop + cfg.absoluteOffset.top, left = anchorLeft + cfg.absoluteOffset.left;
    anchorProps = { top, left, width: 1, height: 1, right: left + 1, center: top, middle: left, bottom: top + 1 };
  }
  let elStyle = {
    maxHeight: cfg.maxHeight,
    maxWidth: cfg.maxWidth,
    visibility: "visible"
  };
  if (cfg.fit === true || cfg.cover === true) {
    elStyle.minWidth = anchorProps.width + "px";
    if (cfg.cover === true) {
      elStyle.minHeight = anchorProps.height + "px";
    }
  }
  Object.assign(cfg.el.style, elStyle);
  const targetProps = getTargetProps(cfg.el), props = {
    top: anchorProps[cfg.anchorOrigin.vertical] - targetProps[cfg.selfOrigin.vertical],
    left: anchorProps[cfg.anchorOrigin.horizontal] - targetProps[cfg.selfOrigin.horizontal]
  };
  applyBoundaries(props, anchorProps, targetProps, cfg.anchorOrigin, cfg.selfOrigin);
  elStyle = {
    top: props.top + "px",
    left: props.left + "px"
  };
  if (props.maxHeight !== void 0) {
    elStyle.maxHeight = props.maxHeight + "px";
    if (anchorProps.height > props.maxHeight) {
      elStyle.minHeight = elStyle.maxHeight;
    }
  }
  if (props.maxWidth !== void 0) {
    elStyle.maxWidth = props.maxWidth + "px";
    if (anchorProps.width > props.maxWidth) {
      elStyle.minWidth = elStyle.maxWidth;
    }
  }
  Object.assign(cfg.el.style, elStyle);
  if (cfg.el.scrollTop !== scrollTop) {
    cfg.el.scrollTop = scrollTop;
  }
  if (cfg.el.scrollLeft !== scrollLeft) {
    cfg.el.scrollLeft = scrollLeft;
  }
}
function applyBoundaries(props, anchorProps, targetProps, anchorOrigin, selfOrigin) {
  const currentHeight = targetProps.bottom, currentWidth = targetProps.right, margin = getScrollbarWidth(), innerHeight = window.innerHeight - margin, innerWidth = document.body.clientWidth;
  if (props.top < 0 || props.top + currentHeight > innerHeight) {
    if (selfOrigin.vertical === "center") {
      props.top = anchorProps[anchorOrigin.vertical] > innerHeight / 2 ? Math.max(0, innerHeight - currentHeight) : 0;
      props.maxHeight = Math.min(currentHeight, innerHeight);
    } else if (anchorProps[anchorOrigin.vertical] > innerHeight / 2) {
      const anchorY = Math.min(
        innerHeight,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.bottom : anchorProps.top
      );
      props.maxHeight = Math.min(currentHeight, anchorY);
      props.top = Math.max(0, anchorY - currentHeight);
    } else {
      props.top = Math.max(
        0,
        anchorOrigin.vertical === "center" ? anchorProps.center : anchorOrigin.vertical === selfOrigin.vertical ? anchorProps.top : anchorProps.bottom
      );
      props.maxHeight = Math.min(currentHeight, innerHeight - props.top);
    }
  }
  if (props.left < 0 || props.left + currentWidth > innerWidth) {
    props.maxWidth = Math.min(currentWidth, innerWidth);
    if (selfOrigin.horizontal === "middle") {
      props.left = anchorProps[anchorOrigin.horizontal] > innerWidth / 2 ? Math.max(0, innerWidth - currentWidth) : 0;
    } else if (anchorProps[anchorOrigin.horizontal] > innerWidth / 2) {
      const anchorX = Math.min(
        innerWidth,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.right : anchorProps.left
      );
      props.maxWidth = Math.min(currentWidth, anchorX);
      props.left = Math.max(0, anchorX - props.maxWidth);
    } else {
      props.left = Math.max(
        0,
        anchorOrigin.horizontal === "middle" ? anchorProps.middle : anchorOrigin.horizontal === selfOrigin.horizontal ? anchorProps.left : anchorProps.right
      );
      props.maxWidth = Math.min(currentWidth, innerWidth - props.left);
    }
  }
}
function between(v, min, max) {
  return max <= min ? min : Math.min(max, Math.max(min, v));
}
function normalizeToInterval(v, min, max) {
  if (max <= min) {
    return min;
  }
  const size = max - min + 1;
  let index = min + (v - min) % size;
  if (index < min) {
    index = size + index;
  }
  return index === 0 ? 0 : index;
}
var QItemSection = createComponent({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var QItem = createComponent({
  name: "QItem",
  props: {
    ...useDarkProps,
    ...useRouterLinkProps,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    const isActionable = computed(
      () => props.clickable === true || hasLink.value === true || props.tag === "label"
    );
    const isClickable = computed(
      () => props.disable !== true && isActionable.value === true
    );
    const classes = computed(
      () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
    );
    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
      };
    });
    function onClick(e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          } else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }
        navigateOnClick(e);
      }
    }
    function onKeyup(e) {
      if (isClickable.value === true && isKeyCode(e, 13) === true) {
        stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }
      emit("keyup", e);
    }
    function getContent() {
      const child = hUniqueSlot(slots.default, []);
      isClickable.value === true && child.unshift(
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef })
      );
      return child;
    }
    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        role: "listitem",
        onClick,
        onKeyup
      };
      if (isClickable.value === true) {
        data.tabindex = props.tabindex || "0";
        Object.assign(data, linkAttrs.value);
      } else if (isActionable.value === true) {
        data["aria-disabled"] = "true";
      }
      return h(
        linkTag.value,
        data,
        getContent()
      );
    };
  }
});
var QItemLabel = createComponent({
  name: "QItemLabel",
  props: {
    overline: Boolean,
    caption: Boolean,
    header: Boolean,
    lines: [Number, String]
  },
  setup(props, { slots }) {
    const parsedLines = computed(() => parseInt(props.lines, 10));
    const classes = computed(
      () => "q-item__label" + (props.overline === true ? " q-item__label--overline text-overline" : "") + (props.caption === true ? " q-item__label--caption text-caption" : "") + (props.header === true ? " q-item__label--header" : "") + (parsedLines.value === 1 ? " ellipsis" : "")
    );
    const style = computed(() => {
      return props.lines !== void 0 && parsedLines.value > 1 ? {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": parsedLines.value
      } : null;
    });
    return () => h("div", {
      style: style.value,
      class: classes.value
    }, hSlot(slots.default));
  }
});
var QMenu = createComponent({
  name: "QMenu",
  inheritAttrs: false,
  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useDarkProps,
    ...useTransitionProps,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: validatePosition
    },
    self: {
      type: String,
      validator: validatePosition
    },
    offset: {
      type: Array,
      validator: validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "escapeKey"
  ],
  setup(props, { slots, emit, attrs }) {
    let refocusTarget = null, absoluteOffset, unwatchPosition, avoidAutoClose;
    const vm = getCurrentInstance();
    const { proxy } = vm;
    const { $q } = proxy;
    const innerRef = ref(null);
    const showing = ref(false);
    const hideOnRouteChange = computed(
      () => props.persistent !== true && props.noRouteDismiss !== true
    );
    const isDark = useDark(props, $q);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transitionProps, transitionStyle } = useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow } = useAnchor({ showing });
    const { hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent);
    const clickOutsideProps = {
      anchorEl,
      innerRef,
      onClickOutside(e) {
        if (props.persistent !== true && showing.value === true) {
          hide(e);
          if (e.type === "touchstart" || e.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e);
          }
          return true;
        }
      }
    };
    const anchorOrigin = computed(
      () => parsePosition(
        props.anchor || (props.cover === true ? "center middle" : "bottom start"),
        $q.lang.rtl
      )
    );
    const selfOrigin = computed(() => props.cover === true ? anchorOrigin.value : parsePosition(props.self || "top start", $q.lang.rtl));
    const menuClass = computed(
      () => (props.square === true ? " q-menu--square" : "") + (isDark.value === true ? " q-menu--dark q-dark" : "")
    );
    const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
    const handlesFocus = computed(
      () => showing.value === true && props.persistent !== true
    );
    watch(handlesFocus, (val) => {
      if (val === true) {
        addEscapeKey(onEscapeKey);
        addClickOutside(clickOutsideProps);
      } else {
        removeEscapeKey(onEscapeKey);
        removeClickOutside(clickOutsideProps);
      }
    });
    function focus() {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node && node.contains(document.activeElement) !== true) {
          node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
          node.focus({ preventScroll: true });
        }
      });
    }
    function handleShow(evt) {
      refocusTarget = props.noRefocus === false ? document.activeElement : null;
      addFocusout(onFocusout);
      showPortal();
      configureScrollTarget();
      absoluteOffset = void 0;
      if (evt !== void 0 && (props.touchPosition || props.contextMenu)) {
        const pos = position(evt);
        if (pos.left !== void 0) {
          const { top, left } = anchorEl.value.getBoundingClientRect();
          absoluteOffset = { left: pos.left - left, top: pos.top - top };
        }
      }
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      if (props.noFocus !== true) {
        document.activeElement.blur();
      }
      registerTick(() => {
        updatePosition();
        props.noFocus !== true && focus();
      });
      registerTimeout(() => {
        if ($q.platform.is.ios === true) {
          avoidAutoClose = props.autoClose;
          innerRef.value.click();
        }
        updatePosition();
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup(true);
      if (refocusTarget !== null && (evt === void 0 || evt.qClickOutside !== true)) {
        ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup(hiding) {
      absoluteOffset = void 0;
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      if (hiding === true || showing.value === true) {
        removeFocusout(onFocusout);
        unconfigureScrollTarget();
        removeClickOutside(clickOutsideProps);
        removeEscapeKey(onEscapeKey);
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        changeScrollEvent(localScrollTarget.value, updatePosition);
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        closePortalMenus(proxy, e);
        emit("click", e);
      } else {
        avoidAutoClose = false;
      }
    }
    function onFocusout(evt) {
      if (handlesFocus.value === true && props.noFocus !== true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus();
      }
    }
    function onEscapeKey(evt) {
      emit("escapeKey");
      hide(evt);
    }
    function updatePosition() {
      const el = innerRef.value;
      if (el === null || anchorEl.value === null) {
        return;
      }
      setPosition({
        el,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        absoluteOffset,
        fit: props.fit,
        cover: props.cover,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function renderPortalContent() {
      return h(
        Transition,
        transitionProps.value,
        () => showing.value === true ? h("div", {
          role: "menu",
          ...attrs,
          ref: innerRef,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + menuClass.value,
            attrs.class
          ],
          style: [
            attrs.style,
            transitionStyle.value
          ],
          ...onEvents.value
        }, hSlot(slots.default)) : null
      );
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(proxy, { focus, updatePosition });
    return renderPortal;
  }
});
let rtlHasScrollBug = false;
{
  const scroller = document.createElement("div");
  scroller.setAttribute("dir", "rtl");
  Object.assign(scroller.style, {
    width: "1px",
    height: "1px",
    overflow: "auto"
  });
  const spacer = document.createElement("div");
  Object.assign(spacer.style, {
    width: "1000px",
    height: "1px"
  });
  document.body.appendChild(scroller);
  scroller.appendChild(spacer);
  scroller.scrollLeft = -1e3;
  rtlHasScrollBug = scroller.scrollLeft >= 0;
  scroller.remove();
}
export { QItemSection as Q, QItem as a, between as b, clearSelection as c, QItemLabel as d, QMenu as e, validateOffset as f, useScrollTarget as g, useAnchor as h, removeClickOutside as i, addClickOutside as j, normalizeToInterval as n, parsePosition as p, rtlHasScrollBug as r, setPosition as s, useAnchorProps as u, validatePosition as v };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnRsLmRmZWVhMmM1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWFuY2hvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNjcm9sbC10YXJnZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL2NsaWNrLW91dHNpZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3Bvc2l0aW9uLWVuZ2luZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL2Zvcm1hdC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvaXRlbS9RSXRlbVNlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2l0ZW0vUUl0ZW0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2l0ZW0vUUl0ZW1MYWJlbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbWVudS9RTWVudS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL3V0aWxzL3ByaXZhdGUvcnRsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF0Zm9ybSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTZWxlY3Rpb24gKCkge1xuICBpZiAod2luZG93LmdldFNlbGVjdGlvbiAhPT0gdm9pZCAwKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAgaWYgKHNlbGVjdGlvbi5lbXB0eSAhPT0gdm9pZCAwKSB7XG4gICAgICBzZWxlY3Rpb24uZW1wdHkoKVxuICAgIH1cbiAgICBlbHNlIGlmIChzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzICE9PSB2b2lkIDApIHtcbiAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKVxuICAgICAgUGxhdGZvcm0uaXMubW9iaWxlICE9PSB0cnVlICYmIHNlbGVjdGlvbi5hZGRSYW5nZShkb2N1bWVudC5jcmVhdGVSYW5nZSgpKVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gIT09IHZvaWQgMCkge1xuICAgIGRvY3VtZW50LnNlbGVjdGlvbi5lbXB0eSgpXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjbGVhclNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5cbmV4cG9ydCBjb25zdCB1c2VBbmNob3JQcm9wcyA9IHtcbiAgdGFyZ2V0OiB7XG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9LFxuICBub1BhcmVudEV2ZW50OiBCb29sZWFuLFxuICBjb250ZXh0TWVudTogQm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe1xuICBzaG93aW5nLFxuICBhdm9pZEVtaXQsIC8vIHJlcXVpcmVkIGZvciBRUG9wdXBQcm94eSAodHJ1ZSlcbiAgY29uZmlndXJlQW5jaG9yRWwgLy8gb3B0aW9uYWxcbn0pIHtcbiAgY29uc3QgeyBwcm9wcywgcHJveHksIGVtaXQgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgY29uc3QgYW5jaG9yRWwgPSByZWYobnVsbClcblxuICBsZXQgdG91Y2hUaW1lclxuXG4gIGZ1bmN0aW9uIGNhblNob3cgKGV2dCkge1xuICAgIC8vIGFib3J0IHdpdGggbm8gcGFyZW50IGNvbmZpZ3VyZWQgb3Igb24gbXVsdGktdG91Y2hcbiAgICByZXR1cm4gYW5jaG9yRWwudmFsdWUgPT09IG51bGxcbiAgICAgID8gZmFsc2VcbiAgICAgIDogKGV2dCA9PT0gdm9pZCAwIHx8IGV2dC50b3VjaGVzID09PSB2b2lkIDAgfHwgZXZ0LnRvdWNoZXMubGVuZ3RoIDw9IDEpXG4gIH1cblxuICBjb25zdCBhbmNob3JFdmVudHMgPSB7fVxuXG4gIGlmIChjb25maWd1cmVBbmNob3JFbCA9PT0gdm9pZCAwKSB7XG4gICAgLy8gZGVmYXVsdCBjb25maWd1cmVBbmNob3JFbCBpcyBkZXNpZ25lZCBmb3JcbiAgICAvLyBRTWVudSAmIFFQb3B1cFByb3h5ICh3aGljaCBpcyB3aHkgaXQncyBoYW5kbGVkIGhlcmUpXG5cbiAgICBPYmplY3QuYXNzaWduKGFuY2hvckV2ZW50cywge1xuICAgICAgaGlkZSAoZXZ0KSB7XG4gICAgICAgIHByb3h5LmhpZGUoZXZ0KVxuICAgICAgfSxcblxuICAgICAgdG9nZ2xlIChldnQpIHtcbiAgICAgICAgcHJveHkudG9nZ2xlKGV2dClcbiAgICAgICAgZXZ0LnFBbmNob3JIYW5kbGVkID0gdHJ1ZVxuICAgICAgfSxcblxuICAgICAgdG9nZ2xlS2V5IChldnQpIHtcbiAgICAgICAgaXNLZXlDb2RlKGV2dCwgMTMpID09PSB0cnVlICYmIGFuY2hvckV2ZW50cy50b2dnbGUoZXZ0KVxuICAgICAgfSxcblxuICAgICAgY29udGV4dENsaWNrIChldnQpIHtcbiAgICAgICAgcHJveHkuaGlkZShldnQpXG4gICAgICAgIHByZXZlbnQoZXZ0KVxuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgcHJveHkuc2hvdyhldnQpXG4gICAgICAgICAgZXZ0LnFBbmNob3JIYW5kbGVkID0gdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSxcblxuICAgICAgcHJldmVudCxcblxuICAgICAgbW9iaWxlVG91Y2ggKGV2dCkge1xuICAgICAgICBhbmNob3JFdmVudHMubW9iaWxlQ2xlYW51cChldnQpXG5cbiAgICAgICAgaWYgKGNhblNob3coZXZ0KSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgcHJveHkuaGlkZShldnQpXG4gICAgICAgIGFuY2hvckVsLnZhbHVlLmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICAgIGFkZEV2dChhbmNob3JFdmVudHMsICdhbmNob3InLCBbXG4gICAgICAgICAgWyB0YXJnZXQsICd0b3VjaG1vdmUnLCAnbW9iaWxlQ2xlYW51cCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hlbmQnLCAnbW9iaWxlQ2xlYW51cCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hjYW5jZWwnLCAnbW9iaWxlQ2xlYW51cCcsICdwYXNzaXZlJyBdLFxuICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdjb250ZXh0bWVudScsICdwcmV2ZW50JywgJ25vdFBhc3NpdmUnIF1cbiAgICAgICAgXSlcblxuICAgICAgICB0b3VjaFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcHJveHkuc2hvdyhldnQpXG4gICAgICAgICAgZXZ0LnFBbmNob3JIYW5kbGVkID0gdHJ1ZVxuICAgICAgICB9LCAzMDApXG4gICAgICB9LFxuXG4gICAgICBtb2JpbGVDbGVhbnVwIChldnQpIHtcbiAgICAgICAgYW5jaG9yRWwudmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICBjbGVhclRpbWVvdXQodG91Y2hUaW1lcilcblxuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBldnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25maWd1cmVBbmNob3JFbCA9IGZ1bmN0aW9uIChjb250ZXh0ID0gcHJvcHMuY29udGV4dE1lbnUpIHtcbiAgICAgIGlmIChwcm9wcy5ub1BhcmVudEV2ZW50ID09PSB0cnVlIHx8IGFuY2hvckVsLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGxldCBldnRzXG5cbiAgICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm94eS4kcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWUpIHtcbiAgICAgICAgICBldnRzID0gW1xuICAgICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ3RvdWNoc3RhcnQnLCAnbW9iaWxlVG91Y2gnLCAncGFzc2l2ZScgXVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBldnRzID0gW1xuICAgICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ21vdXNlZG93bicsICdoaWRlJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAnY29udGV4dG1lbnUnLCAnY29udGV4dENsaWNrJywgJ25vdFBhc3NpdmUnIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBldnRzID0gW1xuICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdjbGljaycsICd0b2dnbGUnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAna2V5dXAnLCAndG9nZ2xlS2V5JywgJ3Bhc3NpdmUnIF1cbiAgICAgICAgXVxuICAgICAgfVxuXG4gICAgICBhZGRFdnQoYW5jaG9yRXZlbnRzLCAnYW5jaG9yJywgZXZ0cylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1bmNvbmZpZ3VyZUFuY2hvckVsICgpIHtcbiAgICBjbGVhbkV2dChhbmNob3JFdmVudHMsICdhbmNob3InKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QW5jaG9yRWwgKGVsKSB7XG4gICAgYW5jaG9yRWwudmFsdWUgPSBlbFxuICAgIHdoaWxlIChhbmNob3JFbC52YWx1ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3EtYW5jaG9yLS1za2lwJykpIHtcbiAgICAgIGFuY2hvckVsLnZhbHVlID0gYW5jaG9yRWwudmFsdWUucGFyZW50Tm9kZVxuICAgIH1cbiAgICBjb25maWd1cmVBbmNob3JFbCgpXG4gIH1cblxuICBmdW5jdGlvbiBwaWNrQW5jaG9yRWwgKCkge1xuICAgIGlmIChwcm9wcy50YXJnZXQgPT09IGZhbHNlIHx8IHByb3BzLnRhcmdldCA9PT0gJycgfHwgcHJveHkuJGVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGFuY2hvckVsLnZhbHVlID0gbnVsbFxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy50YXJnZXQgPT09IHRydWUpIHtcbiAgICAgIHNldEFuY2hvckVsKHByb3h5LiRlbC5wYXJlbnROb2RlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBlbCA9IHByb3BzLnRhcmdldFxuXG4gICAgICBpZiAodHlwZW9mIHByb3BzLnRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvcHMudGFyZ2V0KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBlbCA9IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbCAhPT0gdm9pZCAwICYmIGVsICE9PSBudWxsKSB7XG4gICAgICAgIGFuY2hvckVsLnZhbHVlID0gZWwuJGVsIHx8IGVsXG4gICAgICAgIGNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhbmNob3JFbC52YWx1ZSA9IG51bGxcbiAgICAgICAgY29uc29sZS5lcnJvcihgQW5jaG9yOiB0YXJnZXQgXCIkeyBwcm9wcy50YXJnZXQgfVwiIG5vdCBmb3VuZGApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMuY29udGV4dE1lbnUsIHZhbCA9PiB7XG4gICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1bmNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIGNvbmZpZ3VyZUFuY2hvckVsKHZhbClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMudGFyZ2V0LCAoKSA9PiB7XG4gICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1bmNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICB9XG5cbiAgICBwaWNrQW5jaG9yRWwoKVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLm5vUGFyZW50RXZlbnQsIHZhbCA9PiB7XG4gICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgIHVuY29uZmlndXJlQW5jaG9yRWwoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICBwaWNrQW5jaG9yRWwoKVxuXG4gICAgaWYgKGF2b2lkRW1pdCAhPT0gdHJ1ZSAmJiBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIGFuY2hvckVsLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgIH1cbiAgfSlcblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0b3VjaFRpbWVyKVxuICAgIHVuY29uZmlndXJlQW5jaG9yRWwoKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgYW5jaG9yRWwsXG4gICAgY2FuU2hvdyxcbiAgICBhbmNob3JFdmVudHNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVmLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50IH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChcbiAgcHJvcHMsXG4gIGNvbmZpZ3VyZVNjcm9sbFRhcmdldFxuKSB7XG4gIGNvbnN0IGxvY2FsU2Nyb2xsVGFyZ2V0ID0gcmVmKG51bGwpXG4gIGxldCBzY3JvbGxGblxuXG4gIGZ1bmN0aW9uIGNoYW5nZVNjcm9sbEV2ZW50IChzY3JvbGxUYXJnZXQsIGZuKSB7XG4gICAgY29uc3QgZm5Qcm9wID0gYCR7IGZuICE9PSB2b2lkIDAgPyAnYWRkJyA6ICdyZW1vdmUnIH1FdmVudExpc3RlbmVyYFxuICAgIGNvbnN0IGZuSGFuZGxlciA9IGZuICE9PSB2b2lkIDAgPyBmbiA6IHNjcm9sbEZuXG5cbiAgICBpZiAoc2Nyb2xsVGFyZ2V0ICE9PSB3aW5kb3cpIHtcbiAgICAgIHNjcm9sbFRhcmdldFsgZm5Qcm9wIF0oJ3Njcm9sbCcsIGZuSGFuZGxlciwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgIH1cblxuICAgIHdpbmRvd1sgZm5Qcm9wIF0oJ3Njcm9sbCcsIGZuSGFuZGxlciwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuXG4gICAgc2Nyb2xsRm4gPSBmblxuICB9XG5cbiAgZnVuY3Rpb24gdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgY2hhbmdlU2Nyb2xsRXZlbnQobG9jYWxTY3JvbGxUYXJnZXQudmFsdWUpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC52YWx1ZSA9IG51bGxcbiAgICB9XG4gIH1cblxuICBjb25zdCBub1BhcmVudEV2ZW50V2F0Y2hlciA9IHdhdGNoKCgpID0+IHByb3BzLm5vUGFyZW50RXZlbnQsICgpID0+IHtcbiAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfVxuICB9KVxuXG4gIG9uQmVmb3JlVW5tb3VudChub1BhcmVudEV2ZW50V2F0Y2hlcilcblxuICByZXR1cm4ge1xuICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LFxuICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0LFxuICAgIGNoYW5nZVNjcm9sbEV2ZW50XG4gIH1cbn1cbiIsImltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi9ldmVudC5qcydcbmltcG9ydCB7IHBvcnRhbFByb3h5TGlzdCB9IGZyb20gJy4uL3ByaXZhdGUvcG9ydGFsLmpzJ1xuXG5sZXQgdGltZXJcblxuY29uc3RcbiAgeyBub3RQYXNzaXZlQ2FwdHVyZSB9ID0gbGlzdGVuT3B0cyxcbiAgcmVnaXN0ZXJlZExpc3QgPSBbXVxuXG5mdW5jdGlvbiBnbG9iYWxIYW5kbGVyIChldnQpIHtcbiAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuXG4gIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcblxuICBpZiAoXG4gICAgdGFyZ2V0ID09PSB2b2lkIDBcbiAgICB8fCB0YXJnZXQubm9kZVR5cGUgPT09IDhcbiAgICB8fCB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduby1wb2ludGVyLWV2ZW50cycpID09PSB0cnVlXG4gICkge1xuICAgIHJldHVyblxuICB9XG5cbiAgLy8gY2hlY2sgbGFzdCBwb3J0YWwgdm0gaWYgaXQnc1xuICAvLyBhIFFEaWFsb2cgYW5kIG5vdCBpbiBzZWFtbGVzcyBtb2RlXG4gIGxldCBwb3J0YWxJbmRleCA9IHBvcnRhbFByb3h5TGlzdC5sZW5ndGggLSAxXG5cbiAgd2hpbGUgKHBvcnRhbEluZGV4ID49IDApIHtcbiAgICBjb25zdCBwcm94eSA9IHBvcnRhbFByb3h5TGlzdFsgcG9ydGFsSW5kZXggXS4kXG5cbiAgICBpZiAocHJveHkudHlwZS5uYW1lICE9PSAnUURpYWxvZycpIHtcbiAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgaWYgKHByb3h5LnByb3BzLnNlYW1sZXNzICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwb3J0YWxJbmRleC0tXG4gIH1cblxuICBmb3IgKGxldCBpID0gcmVnaXN0ZXJlZExpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBjb25zdCBzdGF0ZSA9IHJlZ2lzdGVyZWRMaXN0WyBpIF1cblxuICAgIGlmIChcbiAgICAgIChcbiAgICAgICAgc3RhdGUuYW5jaG9yRWwudmFsdWUgPT09IG51bGxcbiAgICAgICAgfHwgc3RhdGUuYW5jaG9yRWwudmFsdWUuY29udGFpbnModGFyZ2V0KSA9PT0gZmFsc2VcbiAgICAgIClcbiAgICAgICYmIChcbiAgICAgICAgdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5XG4gICAgICAgIHx8IChcbiAgICAgICAgICBzdGF0ZS5pbm5lclJlZi52YWx1ZSAhPT0gbnVsbFxuICAgICAgICAgICYmIHN0YXRlLmlubmVyUmVmLnZhbHVlLmNvbnRhaW5zKHRhcmdldCkgPT09IGZhbHNlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApIHtcbiAgICAgIC8vIG1hcmsgdGhlIGV2ZW50IGFzIGJlaW5nIHByb2Nlc3NlZCBieSBjbGlja091dHNpZGVcbiAgICAgIC8vIHVzZWQgdG8gcHJldmVudCByZWZvY3VzIGFmdGVyIG1lbnUgY2xvc2VcbiAgICAgIGV2dC5xQ2xpY2tPdXRzaWRlID0gdHJ1ZVxuICAgICAgc3RhdGUub25DbGlja091dHNpZGUoZXZ0KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xpY2tPdXRzaWRlIChjbGlja091dHNpZGVQcm9wcykge1xuICByZWdpc3RlcmVkTGlzdC5wdXNoKGNsaWNrT3V0c2lkZVByb3BzKVxuXG4gIGlmIChyZWdpc3RlcmVkTGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBnbG9iYWxIYW5kbGVyLCBub3RQYXNzaXZlQ2FwdHVyZSlcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZ2xvYmFsSGFuZGxlciwgbm90UGFzc2l2ZUNhcHR1cmUpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsaWNrT3V0c2lkZSAoY2xpY2tPdXRzaWRlUHJvcHMpIHtcbiAgY29uc3QgaW5kZXggPSByZWdpc3RlcmVkTGlzdC5maW5kSW5kZXgoaCA9PiBoID09PSBjbGlja091dHNpZGVQcm9wcylcblxuICBpZiAoaW5kZXggPiAtMSkge1xuICAgIHJlZ2lzdGVyZWRMaXN0LnNwbGljZShpbmRleCwgMSlcblxuICAgIGlmIChyZWdpc3RlcmVkTGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGdsb2JhbEhhbmRsZXIsIG5vdFBhc3NpdmVDYXB0dXJlKVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGdsb2JhbEhhbmRsZXIsIG5vdFBhc3NpdmVDYXB0dXJlKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi9zY3JvbGwuanMnXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5sZXQgdnBMZWZ0LCB2cFRvcFxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbiAocG9zKSB7XG4gIGNvbnN0IHBhcnRzID0gcG9zLnNwbGl0KCcgJylcbiAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChbICd0b3AnLCAnY2VudGVyJywgJ2JvdHRvbScgXS5pbmNsdWRlcyhwYXJ0c1sgMCBdKSAhPT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FuY2hvci9TZWxmIHBvc2l0aW9uIG11c3Qgc3RhcnQgd2l0aCBvbmUgb2YgdG9wL2NlbnRlci9ib3R0b20nKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChbICdsZWZ0JywgJ21pZGRsZScsICdyaWdodCcsICdzdGFydCcsICdlbmQnIF0uaW5jbHVkZXMocGFydHNbIDEgXSkgIT09IHRydWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBbmNob3IvU2VsZiBwb3NpdGlvbiBtdXN0IGVuZCB3aXRoIG9uZSBvZiBsZWZ0L21pZGRsZS9yaWdodC9zdGFydC9lbmQnKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU9mZnNldCAodmFsKSB7XG4gIGlmICghdmFsKSB7IHJldHVybiB0cnVlIH1cbiAgaWYgKHZhbC5sZW5ndGggIT09IDIpIHsgcmV0dXJuIGZhbHNlIH1cbiAgaWYgKHR5cGVvZiB2YWxbIDAgXSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbFsgMSBdICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmNvbnN0IGhvcml6b250YWxQb3MgPSB7XG4gICdzdGFydCNsdHInOiAnbGVmdCcsXG4gICdzdGFydCNydGwnOiAncmlnaHQnLFxuICAnZW5kI2x0cic6ICdyaWdodCcsXG4gICdlbmQjcnRsJzogJ2xlZnQnXG59XG5cbjtbICdsZWZ0JywgJ21pZGRsZScsICdyaWdodCcgXS5mb3JFYWNoKHBvcyA9PiB7XG4gIGhvcml6b250YWxQb3NbIGAkeyBwb3MgfSNsdHJgIF0gPSBwb3NcbiAgaG9yaXpvbnRhbFBvc1sgYCR7IHBvcyB9I3J0bGAgXSA9IHBvc1xufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUG9zaXRpb24gKHBvcywgcnRsKSB7XG4gIGNvbnN0IHBhcnRzID0gcG9zLnNwbGl0KCcgJylcbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNhbDogcGFydHNbIDAgXSxcbiAgICBob3Jpem9udGFsOiBob3Jpem9udGFsUG9zWyBgJHsgcGFydHNbIDEgXSB9IyR7IHJ0bCA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfWAgXVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmNob3JQcm9wcyAoZWwsIG9mZnNldCkge1xuICBsZXQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgaWYgKG9mZnNldCAhPT0gdm9pZCAwKSB7XG4gICAgdG9wIC09IG9mZnNldFsgMSBdXG4gICAgbGVmdCAtPSBvZmZzZXRbIDAgXVxuICAgIGJvdHRvbSArPSBvZmZzZXRbIDEgXVxuICAgIHJpZ2h0ICs9IG9mZnNldFsgMCBdXG5cbiAgICB3aWR0aCArPSBvZmZzZXRbIDAgXVxuICAgIGhlaWdodCArPSBvZmZzZXRbIDEgXVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3AsXG4gICAgbGVmdCxcbiAgICByaWdodCxcbiAgICBib3R0b20sXG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIG1pZGRsZTogbGVmdCArIChyaWdodCAtIGxlZnQpIC8gMixcbiAgICBjZW50ZXI6IHRvcCArIChib3R0b20gLSB0b3ApIC8gMlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXRQcm9wcyAoZWwpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgY2VudGVyOiBlbC5vZmZzZXRIZWlnaHQgLyAyLFxuICAgIGJvdHRvbTogZWwub2Zmc2V0SGVpZ2h0LFxuICAgIGxlZnQ6IDAsXG4gICAgbWlkZGxlOiBlbC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgcmlnaHQ6IGVsLm9mZnNldFdpZHRoXG4gIH1cbn1cblxuLy8gY2ZnOiB7IGVsLCBhbmNob3JFbCwgYW5jaG9yT3JpZ2luLCBzZWxmT3JpZ2luLCBvZmZzZXQsIGFic29sdXRlT2Zmc2V0LCBjb3ZlciwgZml0LCBtYXhIZWlnaHQsIG1heFdpZHRoIH1cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb3NpdGlvbiAoY2ZnKSB7XG4gIGlmIChjbGllbnQuaXMuaW9zID09PSB0cnVlICYmIHdpbmRvdy52aXN1YWxWaWV3cG9ydCAhPT0gdm9pZCAwKSB7XG4gICAgLy8gdXNlcyB0aGUgcS1wb3NpdGlvbi1lbmdpbmUgQ1NTIGNsYXNzXG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmJvZHkuc3R5bGVcbiAgICBjb25zdCB7IG9mZnNldExlZnQ6IGxlZnQsIG9mZnNldFRvcDogdG9wIH0gPSB3aW5kb3cudmlzdWFsVmlld3BvcnRcblxuICAgIGlmIChsZWZ0ICE9PSB2cExlZnQpIHtcbiAgICAgIGVsLnNldFByb3BlcnR5KCctLXEtcGUtbGVmdCcsIGxlZnQgKyAncHgnKVxuICAgICAgdnBMZWZ0ID0gbGVmdFxuICAgIH1cbiAgICBpZiAodG9wICE9PSB2cFRvcCkge1xuICAgICAgZWwuc2V0UHJvcGVydHkoJy0tcS1wZS10b3AnLCB0b3AgKyAncHgnKVxuICAgICAgdnBUb3AgPSB0b3BcbiAgICB9XG4gIH1cblxuICBsZXQgYW5jaG9yUHJvcHNcblxuICAvLyBzY3JvbGwgcG9zaXRpb24gbWlnaHQgY2hhbmdlXG4gIC8vIGlmIG1heC1oZWlnaHQvLXdpZHRoIGNoYW5nZXMsIHNvIHdlXG4gIC8vIG5lZWQgdG8gcmVzdG9yZSBpdCBhZnRlciB3ZSBjYWxjdWxhdGVcbiAgLy8gdGhlIG5ldyBwb3NpdGlvbmluZ1xuICBjb25zdCB7IHNjcm9sbExlZnQsIHNjcm9sbFRvcCB9ID0gY2ZnLmVsXG5cbiAgaWYgKGNmZy5hYnNvbHV0ZU9mZnNldCA9PT0gdm9pZCAwKSB7XG4gICAgYW5jaG9yUHJvcHMgPSBnZXRBbmNob3JQcm9wcyhjZmcuYW5jaG9yRWwsIGNmZy5jb3ZlciA9PT0gdHJ1ZSA/IFsgMCwgMCBdIDogY2ZnLm9mZnNldClcbiAgfVxuICBlbHNlIHtcbiAgICBjb25zdFxuICAgICAgeyB0b3A6IGFuY2hvclRvcCwgbGVmdDogYW5jaG9yTGVmdCB9ID0gY2ZnLmFuY2hvckVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgdG9wID0gYW5jaG9yVG9wICsgY2ZnLmFic29sdXRlT2Zmc2V0LnRvcCxcbiAgICAgIGxlZnQgPSBhbmNob3JMZWZ0ICsgY2ZnLmFic29sdXRlT2Zmc2V0LmxlZnRcblxuICAgIGFuY2hvclByb3BzID0geyB0b3AsIGxlZnQsIHdpZHRoOiAxLCBoZWlnaHQ6IDEsIHJpZ2h0OiBsZWZ0ICsgMSwgY2VudGVyOiB0b3AsIG1pZGRsZTogbGVmdCwgYm90dG9tOiB0b3AgKyAxIH1cbiAgfVxuXG4gIGxldCBlbFN0eWxlID0ge1xuICAgIG1heEhlaWdodDogY2ZnLm1heEhlaWdodCxcbiAgICBtYXhXaWR0aDogY2ZnLm1heFdpZHRoLFxuICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICB9XG5cbiAgaWYgKGNmZy5maXQgPT09IHRydWUgfHwgY2ZnLmNvdmVyID09PSB0cnVlKSB7XG4gICAgZWxTdHlsZS5taW5XaWR0aCA9IGFuY2hvclByb3BzLndpZHRoICsgJ3B4J1xuICAgIGlmIChjZmcuY292ZXIgPT09IHRydWUpIHtcbiAgICAgIGVsU3R5bGUubWluSGVpZ2h0ID0gYW5jaG9yUHJvcHMuaGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oY2ZnLmVsLnN0eWxlLCBlbFN0eWxlKVxuXG4gIGNvbnN0XG4gICAgdGFyZ2V0UHJvcHMgPSBnZXRUYXJnZXRQcm9wcyhjZmcuZWwpLFxuICAgIHByb3BzID0ge1xuICAgICAgdG9wOiBhbmNob3JQcm9wc1sgY2ZnLmFuY2hvck9yaWdpbi52ZXJ0aWNhbCBdIC0gdGFyZ2V0UHJvcHNbIGNmZy5zZWxmT3JpZ2luLnZlcnRpY2FsIF0sXG4gICAgICBsZWZ0OiBhbmNob3JQcm9wc1sgY2ZnLmFuY2hvck9yaWdpbi5ob3Jpem9udGFsIF0gLSB0YXJnZXRQcm9wc1sgY2ZnLnNlbGZPcmlnaW4uaG9yaXpvbnRhbCBdXG4gICAgfVxuXG4gIGFwcGx5Qm91bmRhcmllcyhwcm9wcywgYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBjZmcuYW5jaG9yT3JpZ2luLCBjZmcuc2VsZk9yaWdpbilcblxuICBlbFN0eWxlID0ge1xuICAgIHRvcDogcHJvcHMudG9wICsgJ3B4JyxcbiAgICBsZWZ0OiBwcm9wcy5sZWZ0ICsgJ3B4J1xuICB9XG5cbiAgaWYgKHByb3BzLm1heEhlaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgZWxTdHlsZS5tYXhIZWlnaHQgPSBwcm9wcy5tYXhIZWlnaHQgKyAncHgnXG5cbiAgICBpZiAoYW5jaG9yUHJvcHMuaGVpZ2h0ID4gcHJvcHMubWF4SGVpZ2h0KSB7XG4gICAgICBlbFN0eWxlLm1pbkhlaWdodCA9IGVsU3R5bGUubWF4SGVpZ2h0XG4gICAgfVxuICB9XG4gIGlmIChwcm9wcy5tYXhXaWR0aCAhPT0gdm9pZCAwKSB7XG4gICAgZWxTdHlsZS5tYXhXaWR0aCA9IHByb3BzLm1heFdpZHRoICsgJ3B4J1xuXG4gICAgaWYgKGFuY2hvclByb3BzLndpZHRoID4gcHJvcHMubWF4V2lkdGgpIHtcbiAgICAgIGVsU3R5bGUubWluV2lkdGggPSBlbFN0eWxlLm1heFdpZHRoXG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmFzc2lnbihjZmcuZWwuc3R5bGUsIGVsU3R5bGUpXG5cbiAgLy8gcmVzdG9yZSBzY3JvbGwgcG9zaXRpb25cbiAgaWYgKGNmZy5lbC5zY3JvbGxUb3AgIT09IHNjcm9sbFRvcCkge1xuICAgIGNmZy5lbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3BcbiAgfVxuICBpZiAoY2ZnLmVsLnNjcm9sbExlZnQgIT09IHNjcm9sbExlZnQpIHtcbiAgICBjZmcuZWwuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnRcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseUJvdW5kYXJpZXMgKHByb3BzLCBhbmNob3JQcm9wcywgdGFyZ2V0UHJvcHMsIGFuY2hvck9yaWdpbiwgc2VsZk9yaWdpbikge1xuICBjb25zdFxuICAgIGN1cnJlbnRIZWlnaHQgPSB0YXJnZXRQcm9wcy5ib3R0b20sXG4gICAgY3VycmVudFdpZHRoID0gdGFyZ2V0UHJvcHMucmlnaHQsXG4gICAgbWFyZ2luID0gZ2V0U2Nyb2xsYmFyV2lkdGgoKSxcbiAgICBpbm5lckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIG1hcmdpbixcbiAgICBpbm5lcldpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aFxuXG4gIGlmIChwcm9wcy50b3AgPCAwIHx8IHByb3BzLnRvcCArIGN1cnJlbnRIZWlnaHQgPiBpbm5lckhlaWdodCkge1xuICAgIGlmIChzZWxmT3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJykge1xuICAgICAgcHJvcHMudG9wID0gYW5jaG9yUHJvcHNbIGFuY2hvck9yaWdpbi52ZXJ0aWNhbCBdID4gaW5uZXJIZWlnaHQgLyAyXG4gICAgICAgID8gTWF0aC5tYXgoMCwgaW5uZXJIZWlnaHQgLSBjdXJyZW50SGVpZ2h0KVxuICAgICAgICA6IDBcbiAgICAgIHByb3BzLm1heEhlaWdodCA9IE1hdGgubWluKGN1cnJlbnRIZWlnaHQsIGlubmVySGVpZ2h0KVxuICAgIH1cbiAgICBlbHNlIGlmIChhbmNob3JQcm9wc1sgYW5jaG9yT3JpZ2luLnZlcnRpY2FsIF0gPiBpbm5lckhlaWdodCAvIDIpIHtcbiAgICAgIGNvbnN0IGFuY2hvclkgPSBNYXRoLm1pbihcbiAgICAgICAgaW5uZXJIZWlnaHQsXG4gICAgICAgIGFuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcidcbiAgICAgICAgICA/IGFuY2hvclByb3BzLmNlbnRlclxuICAgICAgICAgIDogKGFuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gc2VsZk9yaWdpbi52ZXJ0aWNhbCA/IGFuY2hvclByb3BzLmJvdHRvbSA6IGFuY2hvclByb3BzLnRvcClcbiAgICAgIClcbiAgICAgIHByb3BzLm1heEhlaWdodCA9IE1hdGgubWluKGN1cnJlbnRIZWlnaHQsIGFuY2hvclkpXG4gICAgICBwcm9wcy50b3AgPSBNYXRoLm1heCgwLCBhbmNob3JZIC0gY3VycmVudEhlaWdodClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy50b3AgPSBNYXRoLm1heCgwLCBhbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInXG4gICAgICAgID8gYW5jaG9yUHJvcHMuY2VudGVyXG4gICAgICAgIDogKGFuY2hvck9yaWdpbi52ZXJ0aWNhbCA9PT0gc2VsZk9yaWdpbi52ZXJ0aWNhbCA/IGFuY2hvclByb3BzLnRvcCA6IGFuY2hvclByb3BzLmJvdHRvbSlcbiAgICAgIClcbiAgICAgIHByb3BzLm1heEhlaWdodCA9IE1hdGgubWluKGN1cnJlbnRIZWlnaHQsIGlubmVySGVpZ2h0IC0gcHJvcHMudG9wKVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5sZWZ0IDwgMCB8fCBwcm9wcy5sZWZ0ICsgY3VycmVudFdpZHRoID4gaW5uZXJXaWR0aCkge1xuICAgIHByb3BzLm1heFdpZHRoID0gTWF0aC5taW4oY3VycmVudFdpZHRoLCBpbm5lcldpZHRoKVxuICAgIGlmIChzZWxmT3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnKSB7XG4gICAgICBwcm9wcy5sZWZ0ID0gYW5jaG9yUHJvcHNbIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsIF0gPiBpbm5lcldpZHRoIC8gMlxuICAgICAgICA/IE1hdGgubWF4KDAsIGlubmVyV2lkdGggLSBjdXJyZW50V2lkdGgpXG4gICAgICAgIDogMFxuICAgIH1cbiAgICBlbHNlIGlmIChhbmNob3JQcm9wc1sgYW5jaG9yT3JpZ2luLmhvcml6b250YWwgXSA+IGlubmVyV2lkdGggLyAyKSB7XG4gICAgICBjb25zdCBhbmNob3JYID0gTWF0aC5taW4oXG4gICAgICAgIGlubmVyV2lkdGgsXG4gICAgICAgIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJ1xuICAgICAgICAgID8gYW5jaG9yUHJvcHMubWlkZGxlXG4gICAgICAgICAgOiAoYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09IHNlbGZPcmlnaW4uaG9yaXpvbnRhbCA/IGFuY2hvclByb3BzLnJpZ2h0IDogYW5jaG9yUHJvcHMubGVmdClcbiAgICAgIClcbiAgICAgIHByb3BzLm1heFdpZHRoID0gTWF0aC5taW4oY3VycmVudFdpZHRoLCBhbmNob3JYKVxuICAgICAgcHJvcHMubGVmdCA9IE1hdGgubWF4KDAsIGFuY2hvclggLSBwcm9wcy5tYXhXaWR0aClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcm9wcy5sZWZ0ID0gTWF0aC5tYXgoMCwgYW5jaG9yT3JpZ2luLmhvcml6b250YWwgPT09ICdtaWRkbGUnXG4gICAgICAgID8gYW5jaG9yUHJvcHMubWlkZGxlXG4gICAgICAgIDogKGFuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSBzZWxmT3JpZ2luLmhvcml6b250YWwgPyBhbmNob3JQcm9wcy5sZWZ0IDogYW5jaG9yUHJvcHMucmlnaHQpXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhXaWR0aCA9IE1hdGgubWluKGN1cnJlbnRXaWR0aCwgaW5uZXJXaWR0aCAtIHByb3BzLmxlZnQpXG4gICAgfVxuICB9XG59XG4iLCJjb25zdCB1bml0cyA9IFsgJ0InLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInIF1cblxuZXhwb3J0IGZ1bmN0aW9uIGh1bWFuU3RvcmFnZVNpemUgKGJ5dGVzKSB7XG4gIGxldCB1ID0gMFxuXG4gIHdoaWxlIChwYXJzZUludChieXRlcywgMTApID49IDEwMjQgJiYgdSA8IHVuaXRzLmxlbmd0aCAtIDEpIHtcbiAgICBieXRlcyAvPSAxMDI0XG4gICAgKyt1XG4gIH1cblxuICByZXR1cm4gYCR7IGJ5dGVzLnRvRml4ZWQoMSkgfSR7IHVuaXRzWyB1IF0gfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUgKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiZXR3ZWVuICh2LCBtaW4sIG1heCkge1xuICByZXR1cm4gbWF4IDw9IG1pblxuICAgID8gbWluXG4gICAgOiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdikpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVUb0ludGVydmFsICh2LCBtaW4sIG1heCkge1xuICBpZiAobWF4IDw9IG1pbikge1xuICAgIHJldHVybiBtaW5cbiAgfVxuXG4gIGNvbnN0IHNpemUgPSAobWF4IC0gbWluICsgMSlcblxuICBsZXQgaW5kZXggPSBtaW4gKyAodiAtIG1pbikgJSBzaXplXG4gIGlmIChpbmRleCA8IG1pbikge1xuICAgIGluZGV4ID0gc2l6ZSArIGluZGV4XG4gIH1cblxuICByZXR1cm4gaW5kZXggPT09IDAgPyAwIDogaW5kZXggLy8gZml4IGZvciAoLWEgJSBhKSA9PiAtMFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkICh2LCBsZW5ndGggPSAyLCBjaGFyID0gJzAnKSB7XG4gIGlmICh2ID09PSB2b2lkIDAgfHwgdiA9PT0gbnVsbCkge1xuICAgIHJldHVybiB2XG4gIH1cblxuICBjb25zdCB2YWwgPSAnJyArIHZcbiAgcmV0dXJuIHZhbC5sZW5ndGggPj0gbGVuZ3RoXG4gICAgPyB2YWxcbiAgICA6IG5ldyBBcnJheShsZW5ndGggLSB2YWwubGVuZ3RoICsgMSkuam9pbihjaGFyKSArIHZhbFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGh1bWFuU3RvcmFnZVNpemUsXG4gIGNhcGl0YWxpemUsXG4gIGJldHdlZW4sXG4gIG5vcm1hbGl6ZVRvSW50ZXJ2YWwsXG4gIHBhZFxufVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJdGVtU2VjdGlvbicsXG5cbiAgcHJvcHM6IHtcbiAgICBhdmF0YXI6IEJvb2xlYW4sXG4gICAgdGh1bWJuYWlsOiBCb29sZWFuLFxuICAgIHNpZGU6IEJvb2xlYW4sXG4gICAgdG9wOiBCb29sZWFuLFxuICAgIG5vV3JhcDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1pdGVtX19zZWN0aW9uIGNvbHVtbidcbiAgICAgICsgYCBxLWl0ZW1fX3NlY3Rpb24tLSR7IHByb3BzLmF2YXRhciA9PT0gdHJ1ZSB8fCBwcm9wcy5zaWRlID09PSB0cnVlIHx8IHByb3BzLnRodW1ibmFpbCA9PT0gdHJ1ZSA/ICdzaWRlJyA6ICdtYWluJyB9YFxuICAgICAgKyAocHJvcHMudG9wID09PSB0cnVlID8gJyBxLWl0ZW1fX3NlY3Rpb24tLXRvcCBqdXN0aWZ5LXN0YXJ0JyA6ICcganVzdGlmeS1jZW50ZXInKVxuICAgICAgKyAocHJvcHMuYXZhdGFyID09PSB0cnVlID8gJyBxLWl0ZW1fX3NlY3Rpb24tLWF2YXRhcicgOiAnJylcbiAgICAgICsgKHByb3BzLnRodW1ibmFpbCA9PT0gdHJ1ZSA/ICcgcS1pdGVtX19zZWN0aW9uLS10aHVtYm5haWwnIDogJycpXG4gICAgICArIChwcm9wcy5ub1dyYXAgPT09IHRydWUgPyAnIHEtaXRlbV9fc2VjdGlvbi0tbm93cmFwJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVJvdXRlckxpbmssIHsgdXNlUm91dGVyTGlua1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utcm91dGVyLWxpbmsuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJdGVtJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG5cbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgfSxcblxuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgY2xpY2thYmxlOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGluc2V0TGV2ZWw6IE51bWJlcixcblxuICAgIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBmb2N1c2VkOiBCb29sZWFuLFxuICAgIG1hbnVhbEZvY3VzOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJywgJ2tleXVwJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBoYXNMaW5rLCBsaW5rQXR0cnMsIGxpbmtDbGFzcywgbGlua1RhZywgbmF2aWdhdGVPbkNsaWNrIH0gPSB1c2VSb3V0ZXJMaW5rKClcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBpc0FjdGlvbmFibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuY2xpY2thYmxlID09PSB0cnVlXG4gICAgICAgIHx8IGhhc0xpbmsudmFsdWUgPT09IHRydWVcbiAgICAgICAgfHwgcHJvcHMudGFnID09PSAnbGFiZWwnXG4gICAgKVxuXG4gICAgY29uc3QgaXNDbGlja2FibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBpc0FjdGlvbmFibGUudmFsdWUgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWl0ZW0gcS1pdGVtLXR5cGUgcm93IG5vLXdyYXAnXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1pdGVtLS1kZW5zZScgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1pdGVtLS1kYXJrJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGhhc0xpbmsudmFsdWUgPT09IHRydWUgJiYgcHJvcHMuYWN0aXZlID09PSBudWxsXG4gICAgICAgICAgPyBsaW5rQ2xhc3MudmFsdWVcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBgIHEtaXRlbS0tYWN0aXZlJHsgcHJvcHMuYWN0aXZlQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuYWN0aXZlQ2xhc3MgfWAgOiAnJyB9YFxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIHEtaXRlbS0tY2xpY2thYmxlIHEtbGluayBjdXJzb3ItcG9pbnRlciAnXG4gICAgICAgICAgICArIChwcm9wcy5tYW51YWxGb2N1cyA9PT0gdHJ1ZSA/ICdxLW1hbnVhbC1mb2N1c2FibGUnIDogJ3EtZm9jdXNhYmxlIHEtaG92ZXJhYmxlJylcbiAgICAgICAgICAgICsgKHByb3BzLmZvY3VzZWQgPT09IHRydWUgPyAnIHEtbWFudWFsLWZvY3VzYWJsZS0tZm9jdXNlZCcgOiAnJylcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuaW5zZXRMZXZlbCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ1JpZ2h0JyA6ICdMZWZ0J1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgWyAncGFkZGluZycgKyBkaXIgXTogKDE2ICsgcHJvcHMuaW5zZXRMZXZlbCAqIDU2KSArICdweCdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgICAgaWYgKGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChibHVyVGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGUucUtleUV2ZW50ICE9PSB0cnVlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGJsdXJUYXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBibHVyVGFyZ2V0UmVmLnZhbHVlKSB7XG4gICAgICAgICAgICByb290UmVmLnZhbHVlLmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuYXZpZ2F0ZU9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleXVwIChlKSB7XG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgaXNLZXlDb2RlKGUsIDEzKSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuXG4gICAgICAgIC8vIGZvciByaXBwbGVcbiAgICAgICAgZS5xS2V5RXZlbnQgPSB0cnVlXG5cbiAgICAgICAgLy8gZm9yIGNsaWNrIHRyaWdnZXJcbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywgZSlcbiAgICAgICAgZXZ0LnFLZXlFdmVudCA9IHRydWVcbiAgICAgICAgcm9vdFJlZi52YWx1ZS5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH1cblxuICAgICAgZW1pdCgna2V5dXAnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcblxuICAgICAgaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgY2hpbGQudW5zaGlmdChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJywgdGFiaW5kZXg6IC0xLCByZWY6IGJsdXJUYXJnZXRSZWYgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcm9sZTogJ2xpc3RpdGVtJyxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgb25LZXl1cFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YS50YWJpbmRleCA9IHByb3BzLnRhYmluZGV4IHx8ICcwJ1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIGxpbmtBdHRycy52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkYXRhWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChcbiAgICAgICAgbGlua1RhZy52YWx1ZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZ2V0Q29udGVudCgpXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJdGVtTGFiZWwnLFxuXG4gIHByb3BzOiB7XG4gICAgb3ZlcmxpbmU6IEJvb2xlYW4sXG4gICAgY2FwdGlvbjogQm9vbGVhbixcbiAgICBoZWFkZXI6IEJvb2xlYW4sXG4gICAgbGluZXM6IFsgTnVtYmVyLCBTdHJpbmcgXVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgcGFyc2VkTGluZXMgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5saW5lcywgMTApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1pdGVtX19sYWJlbCdcbiAgICAgICsgKHByb3BzLm92ZXJsaW5lID09PSB0cnVlID8gJyBxLWl0ZW1fX2xhYmVsLS1vdmVybGluZSB0ZXh0LW92ZXJsaW5lJyA6ICcnKVxuICAgICAgKyAocHJvcHMuY2FwdGlvbiA9PT0gdHJ1ZSA/ICcgcS1pdGVtX19sYWJlbC0tY2FwdGlvbiB0ZXh0LWNhcHRpb24nIDogJycpXG4gICAgICArIChwcm9wcy5oZWFkZXIgPT09IHRydWUgPyAnIHEtaXRlbV9fbGFiZWwtLWhlYWRlcicgOiAnJylcbiAgICAgICsgKHBhcnNlZExpbmVzLnZhbHVlID09PSAxID8gJyBlbGxpcHNpcycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIHJldHVybiBwcm9wcy5saW5lcyAhPT0gdm9pZCAwICYmIHBhcnNlZExpbmVzLnZhbHVlID4gMVxuICAgICAgICA/IHtcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICctd2Via2l0LWJveCcsXG4gICAgICAgICAgICAnLXdlYmtpdC1ib3gtb3JpZW50JzogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgICctd2Via2l0LWxpbmUtY2xhbXAnOiBwYXJzZWRMaW5lcy52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZVxuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIFRyYW5zaXRpb24sIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQW5jaG9yLCB7IHVzZUFuY2hvclByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtYW5jaG9yLmpzJ1xuaW1wb3J0IHVzZVNjcm9sbFRhcmdldCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zY3JvbGwtdGFyZ2V0LmpzJ1xuaW1wb3J0IHVzZU1vZGVsVG9nZ2xlLCB7IHVzZU1vZGVsVG9nZ2xlUHJvcHMsIHVzZU1vZGVsVG9nZ2xlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1tb2RlbC10b2dnbGUuanMnXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVBvcnRhbCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wb3J0YWwuanMnXG5pbXBvcnQgdXNlVHJhbnNpdGlvbiwgeyB1c2VUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10cmFuc2l0aW9uLmpzJ1xuaW1wb3J0IHVzZVRpY2sgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGljay5qcydcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRpbWVvdXQuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgY2xvc2VQb3J0YWxNZW51cyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcG9ydGFsLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24sIHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgYWRkRXNjYXBlS2V5LCByZW1vdmVFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2VzY2FwZS1rZXkuanMnXG5pbXBvcnQgeyBhZGRGb2N1c291dCwgcmVtb3ZlRm9jdXNvdXQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2ZvY3Vzb3V0LmpzJ1xuaW1wb3J0IHsgY2hpbGRIYXNGb2N1cyB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbS5qcydcbmltcG9ydCB7IGFkZENsaWNrT3V0c2lkZSwgcmVtb3ZlQ2xpY2tPdXRzaWRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jbGljay1vdXRzaWRlLmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcblxuaW1wb3J0IHtcbiAgdmFsaWRhdGVQb3NpdGlvbiwgdmFsaWRhdGVPZmZzZXQsIHNldFBvc2l0aW9uLCBwYXJzZVBvc2l0aW9uXG59IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcG9zaXRpb24tZW5naW5lLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUU1lbnUnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VBbmNob3JQcm9wcyxcbiAgICAuLi51c2VNb2RlbFRvZ2dsZVByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VUcmFuc2l0aW9uUHJvcHMsXG5cbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIGF1dG9DbG9zZTogQm9vbGVhbixcbiAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IEJvb2xlYW4sXG5cbiAgICBub1JvdXRlRGlzbWlzczogQm9vbGVhbixcbiAgICBub1JlZm9jdXM6IEJvb2xlYW4sXG4gICAgbm9Gb2N1czogQm9vbGVhbixcblxuICAgIGZpdDogQm9vbGVhbixcbiAgICBjb3ZlcjogQm9vbGVhbixcblxuICAgIHNxdWFyZTogQm9vbGVhbixcblxuICAgIGFuY2hvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2YWxpZGF0ZVBvc2l0aW9uXG4gICAgfSxcbiAgICBzZWxmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlUG9zaXRpb25cbiAgICB9LFxuICAgIG9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlT2Zmc2V0XG4gICAgfSxcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcblxuICAgIHRvdWNoUG9zaXRpb246IEJvb2xlYW4sXG5cbiAgICBtYXhIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIG1heFdpZHRoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnY2xpY2snLCAnZXNjYXBlS2V5J1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGxldCByZWZvY3VzVGFyZ2V0ID0gbnVsbCwgYWJzb2x1dGVPZmZzZXQsIHVud2F0Y2hQb3NpdGlvbiwgYXZvaWRBdXRvQ2xvc2VcblxuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5IH0gPSB2bVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBpbm5lclJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCBoaWRlT25Sb3V0ZUNoYW5nZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5ub1JvdXRlRGlzbWlzcyAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrLCByZW1vdmVUaWNrIH0gPSB1c2VUaWNrKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG4gICAgY29uc3QgeyB0cmFuc2l0aW9uUHJvcHMsIHRyYW5zaXRpb25TdHlsZSB9ID0gdXNlVHJhbnNpdGlvbihwcm9wcylcbiAgICBjb25zdCB7IGxvY2FsU2Nyb2xsVGFyZ2V0LCBjaGFuZ2VTY3JvbGxFdmVudCwgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgfSA9IHVzZVNjcm9sbFRhcmdldChwcm9wcywgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KVxuXG4gICAgY29uc3QgeyBhbmNob3JFbCwgY2FuU2hvdyB9ID0gdXNlQW5jaG9yKHsgc2hvd2luZyB9KVxuXG4gICAgY29uc3QgeyBoaWRlIH0gPSB1c2VNb2RlbFRvZ2dsZSh7XG4gICAgICBzaG93aW5nLCBjYW5TaG93LCBoYW5kbGVTaG93LCBoYW5kbGVIaWRlLFxuICAgICAgaGlkZU9uUm91dGVDaGFuZ2UsXG4gICAgICBwcm9jZXNzT25Nb3VudDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCB7IHNob3dQb3J0YWwsIGhpZGVQb3J0YWwsIHJlbmRlclBvcnRhbCB9ID0gdXNlUG9ydGFsKHZtLCBpbm5lclJlZiwgcmVuZGVyUG9ydGFsQ29udGVudClcblxuICAgIGNvbnN0IGNsaWNrT3V0c2lkZVByb3BzID0ge1xuICAgICAgYW5jaG9yRWwsXG4gICAgICBpbm5lclJlZixcbiAgICAgIG9uQ2xpY2tPdXRzaWRlIChlKSB7XG4gICAgICAgIGlmIChwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBoaWRlKGUpXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBhbHdheXMgcHJldmVudCB0b3VjaCBldmVudFxuICAgICAgICAgICAgZS50eXBlID09PSAndG91Y2hzdGFydCdcbiAgICAgICAgICAgIC8vIHByZXZlbnQgY2xpY2sgaWYgaXQncyBvbiBhIGRpYWxvZyBiYWNrZHJvcFxuICAgICAgICAgICAgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdxLWRpYWxvZ19fYmFja2Ryb3AnKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYW5jaG9yT3JpZ2luID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHBhcnNlUG9zaXRpb24oXG4gICAgICAgIHByb3BzLmFuY2hvciB8fCAoXG4gICAgICAgICAgcHJvcHMuY292ZXIgPT09IHRydWUgPyAnY2VudGVyIG1pZGRsZScgOiAnYm90dG9tIHN0YXJ0J1xuICAgICAgICApLFxuICAgICAgICAkcS5sYW5nLnJ0bFxuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHNlbGZPcmlnaW4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jb3ZlciA9PT0gdHJ1ZVxuICAgICAgICA/IGFuY2hvck9yaWdpbi52YWx1ZVxuICAgICAgICA6IHBhcnNlUG9zaXRpb24ocHJvcHMuc2VsZiB8fCAndG9wIHN0YXJ0JywgJHEubGFuZy5ydGwpXG4gICAgKSlcblxuICAgIGNvbnN0IG1lbnVDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLW1lbnUtLXNxdWFyZScgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1tZW51LS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBvbkV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmF1dG9DbG9zZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogb25BdXRvQ2xvc2UgfVxuICAgICAgICA6IHt9XG4gICAgKSlcblxuICAgIGNvbnN0IGhhbmRsZXNGb2N1cyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWVcbiAgICApXG5cbiAgICB3YXRjaChoYW5kbGVzRm9jdXMsIHZhbCA9PiB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgIGFkZEVzY2FwZUtleShvbkVzY2FwZUtleSlcbiAgICAgICAgYWRkQ2xpY2tPdXRzaWRlKGNsaWNrT3V0c2lkZVByb3BzKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZUVzY2FwZUtleShvbkVzY2FwZUtleSlcbiAgICAgICAgcmVtb3ZlQ2xpY2tPdXRzaWRlKGNsaWNrT3V0c2lkZVByb3BzKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBmb2N1cyAoKSB7XG4gICAgICBhZGRGb2N1c0ZuKCgpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBpbm5lclJlZi52YWx1ZVxuXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgIT09IHRydWUpIHtcbiAgICAgICAgICBub2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXVt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c11bdGFiaW5kZXhdJylcbiAgICAgICAgICAgIHx8IG5vZGUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10gW3RhYmluZGV4XSwgW2RhdGEtYXV0b2ZvY3VzXSBbdGFiaW5kZXhdJylcbiAgICAgICAgICAgIHx8IG5vZGUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10sIFtkYXRhLWF1dG9mb2N1c10nKVxuICAgICAgICAgICAgfHwgbm9kZVxuICAgICAgICAgIG5vZGUuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvdyAoZXZ0KSB7XG4gICAgICByZWZvY3VzVGFyZ2V0ID0gcHJvcHMubm9SZWZvY3VzID09PSBmYWxzZVxuICAgICAgICA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGFkZEZvY3Vzb3V0KG9uRm9jdXNvdXQpXG5cbiAgICAgIHNob3dQb3J0YWwoKVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcblxuICAgICAgYWJzb2x1dGVPZmZzZXQgPSB2b2lkIDBcblxuICAgICAgaWYgKGV2dCAhPT0gdm9pZCAwICYmIChwcm9wcy50b3VjaFBvc2l0aW9uIHx8IHByb3BzLmNvbnRleHRNZW51KSkge1xuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbihldnQpXG5cbiAgICAgICAgaWYgKHBvcy5sZWZ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gYW5jaG9yRWwudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICBhYnNvbHV0ZU9mZnNldCA9IHsgbGVmdDogcG9zLmxlZnQgLSBsZWZ0LCB0b3A6IHBvcy50b3AgLSB0b3AgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh1bndhdGNoUG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICB1bndhdGNoUG9zaXRpb24gPSB3YXRjaChcbiAgICAgICAgICAoKSA9PiAkcS5zY3JlZW4ud2lkdGggKyAnfCcgKyAkcS5zY3JlZW4uaGVpZ2h0ICsgJ3wnICsgcHJvcHMuc2VsZiArICd8JyArIHByb3BzLmFuY2hvciArICd8JyArICRxLmxhbmcucnRsLFxuICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm5vRm9jdXMgIT09IHRydWUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgIH1cblxuICAgICAgLy8gc2hvdWxkIHJlbW92ZVRpY2soKSBpZiB0aGlzIGdldHMgcmVtb3ZlZFxuICAgICAgcmVnaXN0ZXJUaWNrKCgpID0+IHtcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oKVxuICAgICAgICBwcm9wcy5ub0ZvY3VzICE9PSB0cnVlICYmIGZvY3VzKClcbiAgICAgIH0pXG5cbiAgICAgIC8vIHNob3VsZCByZW1vdmVUaW1lb3V0KCkgaWYgdGhpcyBnZXRzIHJlbW92ZWRcbiAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIHJlcXVpcmVkIGluIG9yZGVyIHRvIGF2b2lkIHRoZSBcImRvdWJsZS10YXAgbmVlZGVkXCIgaXNzdWVcbiAgICAgICAgaWYgKCRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGlmIGF1dG8tY2xvc2UsIHRoZW4gdGhpcyBjbGljayBzaG91bGRcbiAgICAgICAgICAvLyBub3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgICAgICBhdm9pZEF1dG9DbG9zZSA9IHByb3BzLmF1dG9DbG9zZVxuICAgICAgICAgIGlubmVyUmVmLnZhbHVlLmNsaWNrKClcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKClcbiAgICAgICAgc2hvd1BvcnRhbCh0cnVlKSAvLyBkb25lIHNob3dpbmcgcG9ydGFsXG4gICAgICAgIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgICB9LCBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSGlkZSAoZXZ0KSB7XG4gICAgICByZW1vdmVUaWNrKClcbiAgICAgIGhpZGVQb3J0YWwoKVxuXG4gICAgICBhbmNob3JDbGVhbnVwKHRydWUpXG5cbiAgICAgIGlmIChcbiAgICAgICAgcmVmb2N1c1RhcmdldCAhPT0gbnVsbFxuICAgICAgICAmJiAoXG4gICAgICAgICAgLy8gbWVudSB3YXMgaGlkZGVuIGZyb20gY29kZSBvciBFU0MgcGx1Z2luXG4gICAgICAgICAgZXZ0ID09PSB2b2lkIDBcbiAgICAgICAgICAvLyBtZW51IHdhcyBub3QgY2xvc2VkIGZyb20gYSBtb3VzZSBvciB0b3VjaCBjbGlja091dHNpZGVcbiAgICAgICAgICB8fCBldnQucUNsaWNrT3V0c2lkZSAhPT0gdHJ1ZVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgKChldnQgJiYgZXZ0LnR5cGUuaW5kZXhPZigna2V5JykgPT09IDBcbiAgICAgICAgICA/IHJlZm9jdXNUYXJnZXQuY2xvc2VzdCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJylcbiAgICAgICAgICA6IHZvaWQgMFxuICAgICAgICApIHx8IHJlZm9jdXNUYXJnZXQpLmZvY3VzKClcbiAgICAgICAgcmVmb2N1c1RhcmdldCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgLy8gc2hvdWxkIHJlbW92ZVRpbWVvdXQoKSBpZiB0aGlzIGdldHMgcmVtb3ZlZFxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaGlkZVBvcnRhbCh0cnVlKSAvLyBkb25lIGhpZGluZywgbm93IGRlc3Ryb3lcbiAgICAgICAgZW1pdCgnaGlkZScsIGV2dClcbiAgICAgIH0sIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmNob3JDbGVhbnVwIChoaWRpbmcpIHtcbiAgICAgIGFic29sdXRlT2Zmc2V0ID0gdm9pZCAwXG5cbiAgICAgIGlmICh1bndhdGNoUG9zaXRpb24gIT09IHZvaWQgMCkge1xuICAgICAgICB1bndhdGNoUG9zaXRpb24oKVxuICAgICAgICB1bndhdGNoUG9zaXRpb24gPSB2b2lkIDBcbiAgICAgIH1cblxuICAgICAgaWYgKGhpZGluZyA9PT0gdHJ1ZSB8fCBzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJlbW92ZUZvY3Vzb3V0KG9uRm9jdXNvdXQpXG4gICAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgICAgcmVtb3ZlQ2xpY2tPdXRzaWRlKGNsaWNrT3V0c2lkZVByb3BzKVxuICAgICAgICByZW1vdmVFc2NhcGVLZXkob25Fc2NhcGVLZXkpXG4gICAgICB9XG5cbiAgICAgIGlmIChoaWRpbmcgIT09IHRydWUpIHtcbiAgICAgICAgcmVmb2N1c1RhcmdldCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsIHx8IHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlID0gZ2V0U2Nyb2xsVGFyZ2V0KGFuY2hvckVsLnZhbHVlLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICAgIGNoYW5nZVNjcm9sbEV2ZW50KGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlLCB1cGRhdGVQb3NpdGlvbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkF1dG9DbG9zZSAoZSkge1xuICAgICAgLy8gaWYgYXV0by1jbG9zZSwgdGhlbiB0aGUgaW9zIGRvdWJsZS10YXAgZml4IHdoaWNoXG4gICAgICAvLyBpc3N1ZXMgYSBjbGljayBzaG91bGQgbm90IGNsb3NlIHRoZSBtZW51XG4gICAgICBpZiAoYXZvaWRBdXRvQ2xvc2UgIT09IHRydWUpIHtcbiAgICAgICAgY2xvc2VQb3J0YWxNZW51cyhwcm94eSwgZSlcbiAgICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF2b2lkQXV0b0Nsb3NlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3Vzb3V0IChldnQpIHtcbiAgICAgIC8vIHRoZSBmb2N1cyBpcyBub3QgaW4gYSB2dWUgY2hpbGQgY29tcG9uZW50XG4gICAgICBpZiAoXG4gICAgICAgIGhhbmRsZXNGb2N1cy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAmJiBwcm9wcy5ub0ZvY3VzICE9PSB0cnVlXG4gICAgICAgICYmIGNoaWxkSGFzRm9jdXMoaW5uZXJSZWYudmFsdWUsIGV2dC50YXJnZXQpICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgZm9jdXMoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRXNjYXBlS2V5IChldnQpIHtcbiAgICAgIGVtaXQoJ2VzY2FwZUtleScpXG4gICAgICBoaWRlKGV2dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbiAoKSB7XG4gICAgICBjb25zdCBlbCA9IGlubmVyUmVmLnZhbHVlXG5cbiAgICAgIGlmIChlbCA9PT0gbnVsbCB8fCBhbmNob3JFbC52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0UG9zaXRpb24oe1xuICAgICAgICBlbCxcbiAgICAgICAgb2Zmc2V0OiBwcm9wcy5vZmZzZXQsXG4gICAgICAgIGFuY2hvckVsOiBhbmNob3JFbC52YWx1ZSxcbiAgICAgICAgYW5jaG9yT3JpZ2luOiBhbmNob3JPcmlnaW4udmFsdWUsXG4gICAgICAgIHNlbGZPcmlnaW46IHNlbGZPcmlnaW4udmFsdWUsXG4gICAgICAgIGFic29sdXRlT2Zmc2V0LFxuICAgICAgICBmaXQ6IHByb3BzLmZpdCxcbiAgICAgICAgY292ZXI6IHByb3BzLmNvdmVyLFxuICAgICAgICBtYXhIZWlnaHQ6IHByb3BzLm1heEhlaWdodCxcbiAgICAgICAgbWF4V2lkdGg6IHByb3BzLm1heFdpZHRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclBvcnRhbENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIGgoXG4gICAgICAgIFRyYW5zaXRpb24sXG4gICAgICAgIHRyYW5zaXRpb25Qcm9wcy52YWx1ZSxcbiAgICAgICAgKCkgPT4gKFxuICAgICAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgID8gaCgnZGl2Jywge1xuICAgICAgICAgICAgICByb2xlOiAnbWVudScsXG4gICAgICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgJ3EtbWVudSBxLXBvc2l0aW9uLWVuZ2luZSBzY3JvbGwnICsgbWVudUNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICAgIGF0dHJzLmNsYXNzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0eWxlOiBbXG4gICAgICAgICAgICAgICAgYXR0cnMuc3R5bGUsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblN0eWxlLnZhbHVlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIC4uLm9uRXZlbnRzLnZhbHVlXG4gICAgICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICApXG4gICAgICApXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KGFuY2hvckNsZWFudXApXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7IGZvY3VzLCB1cGRhdGVQb3NpdGlvbiB9KVxuXG4gICAgcmV0dXJuIHJlbmRlclBvcnRhbFxuICB9XG59KVxuIiwibGV0IHJ0bEhhc1Njcm9sbEJ1ZyA9IGZhbHNlXG5cbi8vIG1vYmlsZSBDaHJvbWUgdGFrZXMgdGhlIGNyb3duIGZvciB0aGlzXG5pZiAoIV9fUVVBU0FSX1NTUl9fKSB7XG4gIGNvbnN0IHNjcm9sbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2Nyb2xsZXIuc2V0QXR0cmlidXRlKCdkaXInLCAncnRsJylcbiAgT2JqZWN0LmFzc2lnbihzY3JvbGxlci5zdHlsZSwge1xuICAgIHdpZHRoOiAnMXB4JyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG92ZXJmbG93OiAnYXV0bydcbiAgfSlcblxuICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBPYmplY3QuYXNzaWduKHNwYWNlci5zdHlsZSwge1xuICAgIHdpZHRoOiAnMTAwMHB4JyxcbiAgICBoZWlnaHQ6ICcxcHgnXG4gIH0pXG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxlcilcbiAgc2Nyb2xsZXIuYXBwZW5kQ2hpbGQoc3BhY2VyKVxuICBzY3JvbGxlci5zY3JvbGxMZWZ0ID0gLTEwMDBcblxuICBydGxIYXNTY3JvbGxCdWcgPSBzY3JvbGxlci5zY3JvbGxMZWZ0ID49IDBcblxuICBzY3JvbGxlci5yZW1vdmUoKVxufVxuXG5leHBvcnQge1xuICBydGxIYXNTY3JvbGxCdWdcbn1cbiJdLCJuYW1lcyI6WyJoIl0sIm1hcHBpbmdzIjoiO0FBRU8sU0FBUyxp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

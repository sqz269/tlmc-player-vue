import { aX as Platform, r as ref, aw as isKeyCode, aY as prevent, A as nextTick, aG as addEvt, w as watch, o as onMounted, m as onBeforeUnmount, g as getCurrentInstance, aI as cleanEvt, aZ as listenOpts, a_ as portalProxyList, aD as client, J as getScrollbarWidth } from "./index.71ce5da1.js";
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
  let touchTimer = null;
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
          touchTimer = null;
          proxy.show(evt);
          evt.qAnchorHandled = true;
        }, 300);
      },
      mobileCleanup(evt) {
        anchorEl.value.classList.remove("non-selectable");
        if (touchTimer !== null) {
          clearTimeout(touchTimer);
          touchTimer = null;
        }
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
    touchTimer !== null && clearTimeout(touchTimer);
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
const { notPassiveCapture } = listenOpts, registeredList = [];
function globalHandler(evt) {
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
  const index = registeredList.findIndex((h) => h === clickOutsideProps);
  if (index > -1) {
    registeredList.splice(index, 1);
    if (registeredList.length === 0) {
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
    bottom,
    height,
    left,
    right,
    width,
    middle: left + (right - left) / 2,
    center: top + (bottom - top) / 2
  };
}
function getAbsoluteAnchorProps(el, absoluteOffset, offset) {
  let { top, left } = el.getBoundingClientRect();
  top += absoluteOffset.top;
  left += absoluteOffset.left;
  if (offset !== void 0) {
    top += offset[1];
    left += offset[0];
  }
  return {
    top,
    bottom: top + 1,
    height: 1,
    left,
    right: left + 1,
    width: 1,
    middle: left,
    center: top
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
function getTopLeftProps(anchorProps, targetProps, cfg) {
  return {
    top: anchorProps[cfg.anchorOrigin.vertical] - targetProps[cfg.selfOrigin.vertical],
    left: anchorProps[cfg.anchorOrigin.horizontal] - targetProps[cfg.selfOrigin.horizontal]
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
  const { scrollLeft, scrollTop } = cfg.el;
  const anchorProps = cfg.absoluteOffset === void 0 ? getAnchorProps(cfg.anchorEl, cfg.cover === true ? [0, 0] : cfg.offset) : getAbsoluteAnchorProps(cfg.anchorEl, cfg.absoluteOffset, cfg.offset);
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
  const targetProps = getTargetProps(cfg.el);
  let props = getTopLeftProps(anchorProps, targetProps, cfg);
  if (cfg.absoluteOffset === void 0 || cfg.offset === void 0) {
    applyBoundaries(props, anchorProps, targetProps, cfg.anchorOrigin, cfg.selfOrigin);
  } else {
    const { top, left } = props;
    applyBoundaries(props, anchorProps, targetProps, cfg.anchorOrigin, cfg.selfOrigin);
    let hasChanged = false;
    if (props.top !== top) {
      hasChanged = true;
      const offsetY = 2 * cfg.offset[1];
      anchorProps.center = anchorProps.top -= offsetY;
      anchorProps.bottom -= offsetY + 2;
    }
    if (props.left !== left) {
      hasChanged = true;
      const offsetX = 2 * cfg.offset[0];
      anchorProps.middle = anchorProps.left -= offsetX;
      anchorProps.right -= offsetX + 2;
    }
    if (hasChanged === true) {
      props = getTopLeftProps(anchorProps, targetProps, cfg);
      applyBoundaries(props, anchorProps, targetProps, cfg.anchorOrigin, cfg.selfOrigin);
    }
  }
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
export { validateOffset as a, useScrollTarget as b, clearSelection as c, useAnchor as d, addClickOutside as e, parsePosition as p, removeClickOutside as r, setPosition as s, useAnchorProps as u, validatePosition as v };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24tZW5naW5lLjEyNzIwODNiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWFuY2hvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNjcm9sbC10YXJnZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL2NsaWNrLW91dHNpZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3Bvc2l0aW9uLWVuZ2luZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxhdGZvcm0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uICgpIHtcbiAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24gIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgIGlmIChzZWxlY3Rpb24uZW1wdHkgIT09IHZvaWQgMCkge1xuICAgICAgc2VsZWN0aW9uLmVtcHR5KClcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcyAhPT0gdm9pZCAwKSB7XG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgIFBsYXRmb3JtLmlzLm1vYmlsZSAhPT0gdHJ1ZSAmJiBzZWxlY3Rpb24uYWRkUmFuZ2UoZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSlcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICE9PSB2b2lkIDApIHtcbiAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKVxuICB9XG59XG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcydcbmltcG9ydCB7IGFkZEV2dCwgY2xlYW5FdnQsIHByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlQW5jaG9yUHJvcHMgPSB7XG4gIHRhcmdldDoge1xuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSxcbiAgbm9QYXJlbnRFdmVudDogQm9vbGVhbixcbiAgY29udGV4dE1lbnU6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtcbiAgc2hvd2luZyxcbiAgYXZvaWRFbWl0LCAvLyByZXF1aXJlZCBmb3IgUVBvcHVwUHJveHkgKHRydWUpXG4gIGNvbmZpZ3VyZUFuY2hvckVsIC8vIG9wdGlvbmFsXG59KSB7XG4gIGNvbnN0IHsgcHJvcHMsIHByb3h5LCBlbWl0IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0IGFuY2hvckVsID0gcmVmKG51bGwpXG5cbiAgbGV0IHRvdWNoVGltZXIgPSBudWxsXG5cbiAgZnVuY3Rpb24gY2FuU2hvdyAoZXZ0KSB7XG4gICAgLy8gYWJvcnQgd2l0aCBubyBwYXJlbnQgY29uZmlndXJlZCBvciBvbiBtdWx0aS10b3VjaFxuICAgIHJldHVybiBhbmNob3JFbC52YWx1ZSA9PT0gbnVsbFxuICAgICAgPyBmYWxzZVxuICAgICAgOiAoZXZ0ID09PSB2b2lkIDAgfHwgZXZ0LnRvdWNoZXMgPT09IHZvaWQgMCB8fCBldnQudG91Y2hlcy5sZW5ndGggPD0gMSlcbiAgfVxuXG4gIGNvbnN0IGFuY2hvckV2ZW50cyA9IHt9XG5cbiAgaWYgKGNvbmZpZ3VyZUFuY2hvckVsID09PSB2b2lkIDApIHtcbiAgICAvLyBkZWZhdWx0IGNvbmZpZ3VyZUFuY2hvckVsIGlzIGRlc2lnbmVkIGZvclxuICAgIC8vIFFNZW51ICYgUVBvcHVwUHJveHkgKHdoaWNoIGlzIHdoeSBpdCdzIGhhbmRsZWQgaGVyZSlcblxuICAgIE9iamVjdC5hc3NpZ24oYW5jaG9yRXZlbnRzLCB7XG4gICAgICBoaWRlIChldnQpIHtcbiAgICAgICAgcHJveHkuaGlkZShldnQpXG4gICAgICB9LFxuXG4gICAgICB0b2dnbGUgKGV2dCkge1xuICAgICAgICBwcm94eS50b2dnbGUoZXZ0KVxuICAgICAgICBldnQucUFuY2hvckhhbmRsZWQgPSB0cnVlXG4gICAgICB9LFxuXG4gICAgICB0b2dnbGVLZXkgKGV2dCkge1xuICAgICAgICBpc0tleUNvZGUoZXZ0LCAxMykgPT09IHRydWUgJiYgYW5jaG9yRXZlbnRzLnRvZ2dsZShldnQpXG4gICAgICB9LFxuXG4gICAgICBjb250ZXh0Q2xpY2sgKGV2dCkge1xuICAgICAgICBwcm94eS5oaWRlKGV2dClcbiAgICAgICAgcHJldmVudChldnQpXG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICBwcm94eS5zaG93KGV2dClcbiAgICAgICAgICBldnQucUFuY2hvckhhbmRsZWQgPSB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9LFxuXG4gICAgICBwcmV2ZW50LFxuXG4gICAgICBtb2JpbGVUb3VjaCAoZXZ0KSB7XG4gICAgICAgIGFuY2hvckV2ZW50cy5tb2JpbGVDbGVhbnVwKGV2dClcblxuICAgICAgICBpZiAoY2FuU2hvdyhldnQpICE9PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBwcm94eS5oaWRlKGV2dClcbiAgICAgICAgYW5jaG9yRWwudmFsdWUuY2xhc3NMaXN0LmFkZCgnbm9uLXNlbGVjdGFibGUnKVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcbiAgICAgICAgYWRkRXZ0KGFuY2hvckV2ZW50cywgJ2FuY2hvcicsIFtcbiAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNobW92ZScsICdtb2JpbGVDbGVhbnVwJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdtb2JpbGVDbGVhbnVwJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdtb2JpbGVDbGVhbnVwJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ2NvbnRleHRtZW51JywgJ3ByZXZlbnQnLCAnbm90UGFzc2l2ZScgXVxuICAgICAgICBdKVxuXG4gICAgICAgIHRvdWNoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0b3VjaFRpbWVyID0gbnVsbFxuICAgICAgICAgIHByb3h5LnNob3coZXZ0KVxuICAgICAgICAgIGV2dC5xQW5jaG9ySGFuZGxlZCA9IHRydWVcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfSxcblxuICAgICAgbW9iaWxlQ2xlYW51cCAoZXZ0KSB7XG4gICAgICAgIGFuY2hvckVsLnZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICBpZiAodG91Y2hUaW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0b3VjaFRpbWVyKVxuICAgICAgICAgIHRvdWNoVGltZXIgPSBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBldnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25maWd1cmVBbmNob3JFbCA9IGZ1bmN0aW9uIChjb250ZXh0ID0gcHJvcHMuY29udGV4dE1lbnUpIHtcbiAgICAgIGlmIChwcm9wcy5ub1BhcmVudEV2ZW50ID09PSB0cnVlIHx8IGFuY2hvckVsLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGxldCBldnRzXG5cbiAgICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChwcm94eS4kcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWUpIHtcbiAgICAgICAgICBldnRzID0gW1xuICAgICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ3RvdWNoc3RhcnQnLCAnbW9iaWxlVG91Y2gnLCAncGFzc2l2ZScgXVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBldnRzID0gW1xuICAgICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ21vdXNlZG93bicsICdoaWRlJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAnY29udGV4dG1lbnUnLCAnY29udGV4dENsaWNrJywgJ25vdFBhc3NpdmUnIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBldnRzID0gW1xuICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdjbGljaycsICd0b2dnbGUnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAna2V5dXAnLCAndG9nZ2xlS2V5JywgJ3Bhc3NpdmUnIF1cbiAgICAgICAgXVxuICAgICAgfVxuXG4gICAgICBhZGRFdnQoYW5jaG9yRXZlbnRzLCAnYW5jaG9yJywgZXZ0cylcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1bmNvbmZpZ3VyZUFuY2hvckVsICgpIHtcbiAgICBjbGVhbkV2dChhbmNob3JFdmVudHMsICdhbmNob3InKVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0QW5jaG9yRWwgKGVsKSB7XG4gICAgYW5jaG9yRWwudmFsdWUgPSBlbFxuICAgIHdoaWxlIChhbmNob3JFbC52YWx1ZS5jbGFzc0xpc3QuY29udGFpbnMoJ3EtYW5jaG9yLS1za2lwJykpIHtcbiAgICAgIGFuY2hvckVsLnZhbHVlID0gYW5jaG9yRWwudmFsdWUucGFyZW50Tm9kZVxuICAgIH1cbiAgICBjb25maWd1cmVBbmNob3JFbCgpXG4gIH1cblxuICBmdW5jdGlvbiBwaWNrQW5jaG9yRWwgKCkge1xuICAgIGlmIChwcm9wcy50YXJnZXQgPT09IGZhbHNlIHx8IHByb3BzLnRhcmdldCA9PT0gJycgfHwgcHJveHkuJGVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICAgIGFuY2hvckVsLnZhbHVlID0gbnVsbFxuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy50YXJnZXQgPT09IHRydWUpIHtcbiAgICAgIHNldEFuY2hvckVsKHByb3h5LiRlbC5wYXJlbnROb2RlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBlbCA9IHByb3BzLnRhcmdldFxuXG4gICAgICBpZiAodHlwZW9mIHByb3BzLnRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocHJvcHMudGFyZ2V0KVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBlbCA9IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbCAhPT0gdm9pZCAwICYmIGVsICE9PSBudWxsKSB7XG4gICAgICAgIGFuY2hvckVsLnZhbHVlID0gZWwuJGVsIHx8IGVsXG4gICAgICAgIGNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhbmNob3JFbC52YWx1ZSA9IG51bGxcbiAgICAgICAgY29uc29sZS5lcnJvcihgQW5jaG9yOiB0YXJnZXQgXCIkeyBwcm9wcy50YXJnZXQgfVwiIG5vdCBmb3VuZGApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMuY29udGV4dE1lbnUsIHZhbCA9PiB7XG4gICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1bmNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIGNvbmZpZ3VyZUFuY2hvckVsKHZhbClcbiAgICB9XG4gIH0pXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMudGFyZ2V0LCAoKSA9PiB7XG4gICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1bmNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICB9XG5cbiAgICBwaWNrQW5jaG9yRWwoKVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLm5vUGFyZW50RXZlbnQsIHZhbCA9PiB7XG4gICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgIHVuY29uZmlndXJlQW5jaG9yRWwoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICBwaWNrQW5jaG9yRWwoKVxuXG4gICAgaWYgKGF2b2lkRW1pdCAhPT0gdHJ1ZSAmJiBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIGFuY2hvckVsLnZhbHVlID09PSBudWxsKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgIH1cbiAgfSlcblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIHRvdWNoVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lb3V0KHRvdWNoVGltZXIpXG4gICAgdW5jb25maWd1cmVBbmNob3JFbCgpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBhbmNob3JFbCxcbiAgICBjYW5TaG93LFxuICAgIGFuY2hvckV2ZW50c1xuICB9XG59XG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKFxuICBwcm9wcyxcbiAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0XG4pIHtcbiAgY29uc3QgbG9jYWxTY3JvbGxUYXJnZXQgPSByZWYobnVsbClcbiAgbGV0IHNjcm9sbEZuXG5cbiAgZnVuY3Rpb24gY2hhbmdlU2Nyb2xsRXZlbnQgKHNjcm9sbFRhcmdldCwgZm4pIHtcbiAgICBjb25zdCBmblByb3AgPSBgJHsgZm4gIT09IHZvaWQgMCA/ICdhZGQnIDogJ3JlbW92ZScgfUV2ZW50TGlzdGVuZXJgXG4gICAgY29uc3QgZm5IYW5kbGVyID0gZm4gIT09IHZvaWQgMCA/IGZuIDogc2Nyb2xsRm5cblxuICAgIGlmIChzY3JvbGxUYXJnZXQgIT09IHdpbmRvdykge1xuICAgICAgc2Nyb2xsVGFyZ2V0WyBmblByb3AgXSgnc2Nyb2xsJywgZm5IYW5kbGVyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgfVxuXG4gICAgd2luZG93WyBmblByb3AgXSgnc2Nyb2xsJywgZm5IYW5kbGVyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG5cbiAgICBzY3JvbGxGbiA9IGZuXG4gIH1cblxuICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBjaGFuZ2VTY3JvbGxFdmVudChsb2NhbFNjcm9sbFRhcmdldC52YWx1ZSlcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG5vUGFyZW50RXZlbnRXYXRjaGVyID0gd2F0Y2goKCkgPT4gcHJvcHMubm9QYXJlbnRFdmVudCwgKCkgPT4ge1xuICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9XG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KG5vUGFyZW50RXZlbnRXYXRjaGVyKVxuXG4gIHJldHVybiB7XG4gICAgbG9jYWxTY3JvbGxUYXJnZXQsXG4gICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQsXG4gICAgY2hhbmdlU2Nyb2xsRXZlbnRcbiAgfVxufVxuIiwiaW1wb3J0IHsgbGlzdGVuT3B0cyB9IGZyb20gJy4uL2V2ZW50LmpzJ1xuaW1wb3J0IHsgcG9ydGFsUHJveHlMaXN0IH0gZnJvbSAnLi4vcHJpdmF0ZS9wb3J0YWwuanMnXG5cbmxldCB0aW1lciA9IG51bGxcblxuY29uc3RcbiAgeyBub3RQYXNzaXZlQ2FwdHVyZSB9ID0gbGlzdGVuT3B0cyxcbiAgcmVnaXN0ZXJlZExpc3QgPSBbXVxuXG5mdW5jdGlvbiBnbG9iYWxIYW5kbGVyIChldnQpIHtcbiAgaWYgKHRpbWVyICE9PSBudWxsKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgIHRpbWVyID0gbnVsbFxuICB9XG5cbiAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldFxuXG4gIGlmIChcbiAgICB0YXJnZXQgPT09IHZvaWQgMFxuICAgIHx8IHRhcmdldC5ub2RlVHlwZSA9PT0gOFxuICAgIHx8IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25vLXBvaW50ZXItZXZlbnRzJykgPT09IHRydWVcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjaGVjayBsYXN0IHBvcnRhbCB2bSBpZiBpdCdzXG4gIC8vIGEgUURpYWxvZyBhbmQgbm90IGluIHNlYW1sZXNzIG1vZGVcbiAgbGV0IHBvcnRhbEluZGV4ID0gcG9ydGFsUHJveHlMaXN0Lmxlbmd0aCAtIDFcblxuICB3aGlsZSAocG9ydGFsSW5kZXggPj0gMCkge1xuICAgIGNvbnN0IHByb3h5ID0gcG9ydGFsUHJveHlMaXN0WyBwb3J0YWxJbmRleCBdLiRcblxuICAgIGlmIChwcm94eS50eXBlLm5hbWUgIT09ICdRRGlhbG9nJykge1xuICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAocHJveHkucHJvcHMuc2VhbWxlc3MgIT09IHRydWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHBvcnRhbEluZGV4LS1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSByZWdpc3RlcmVkTGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IHN0YXRlID0gcmVnaXN0ZXJlZExpc3RbIGkgXVxuXG4gICAgaWYgKFxuICAgICAgKFxuICAgICAgICBzdGF0ZS5hbmNob3JFbC52YWx1ZSA9PT0gbnVsbFxuICAgICAgICB8fCBzdGF0ZS5hbmNob3JFbC52YWx1ZS5jb250YWlucyh0YXJnZXQpID09PSBmYWxzZVxuICAgICAgKVxuICAgICAgJiYgKFxuICAgICAgICB0YXJnZXQgPT09IGRvY3VtZW50LmJvZHlcbiAgICAgICAgfHwgKFxuICAgICAgICAgIHN0YXRlLmlubmVyUmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICAgJiYgc3RhdGUuaW5uZXJSZWYudmFsdWUuY29udGFpbnModGFyZ2V0KSA9PT0gZmFsc2VcbiAgICAgICAgKVxuICAgICAgKVxuICAgICkge1xuICAgICAgLy8gbWFyayB0aGUgZXZlbnQgYXMgYmVpbmcgcHJvY2Vzc2VkIGJ5IGNsaWNrT3V0c2lkZVxuICAgICAgLy8gdXNlZCB0byBwcmV2ZW50IHJlZm9jdXMgYWZ0ZXIgbWVudSBjbG9zZVxuICAgICAgZXZ0LnFDbGlja091dHNpZGUgPSB0cnVlXG4gICAgICBzdGF0ZS5vbkNsaWNrT3V0c2lkZShldnQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGlja091dHNpZGUgKGNsaWNrT3V0c2lkZVByb3BzKSB7XG4gIHJlZ2lzdGVyZWRMaXN0LnB1c2goY2xpY2tPdXRzaWRlUHJvcHMpXG5cbiAgaWYgKHJlZ2lzdGVyZWRMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGdsb2JhbEhhbmRsZXIsIG5vdFBhc3NpdmVDYXB0dXJlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBnbG9iYWxIYW5kbGVyLCBub3RQYXNzaXZlQ2FwdHVyZSlcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xpY2tPdXRzaWRlIChjbGlja091dHNpZGVQcm9wcykge1xuICBjb25zdCBpbmRleCA9IHJlZ2lzdGVyZWRMaXN0LmZpbmRJbmRleChoID0+IGggPT09IGNsaWNrT3V0c2lkZVByb3BzKVxuXG4gIGlmIChpbmRleCA+IC0xKSB7XG4gICAgcmVnaXN0ZXJlZExpc3Quc3BsaWNlKGluZGV4LCAxKVxuXG4gICAgaWYgKHJlZ2lzdGVyZWRMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHRpbWVyICE9PSBudWxsKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGdsb2JhbEhhbmRsZXIsIG5vdFBhc3NpdmVDYXB0dXJlKVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGdsb2JhbEhhbmRsZXIsIG5vdFBhc3NpdmVDYXB0dXJlKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi9zY3JvbGwuanMnXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5sZXQgdnBMZWZ0LCB2cFRvcFxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQb3NpdGlvbiAocG9zKSB7XG4gIGNvbnN0IHBhcnRzID0gcG9zLnNwbGl0KCcgJylcbiAgaWYgKHBhcnRzLmxlbmd0aCAhPT0gMikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChbICd0b3AnLCAnY2VudGVyJywgJ2JvdHRvbScgXS5pbmNsdWRlcyhwYXJ0c1sgMCBdKSAhPT0gdHJ1ZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0FuY2hvci9TZWxmIHBvc2l0aW9uIG11c3Qgc3RhcnQgd2l0aCBvbmUgb2YgdG9wL2NlbnRlci9ib3R0b20nKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIGlmIChbICdsZWZ0JywgJ21pZGRsZScsICdyaWdodCcsICdzdGFydCcsICdlbmQnIF0uaW5jbHVkZXMocGFydHNbIDEgXSkgIT09IHRydWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBbmNob3IvU2VsZiBwb3NpdGlvbiBtdXN0IGVuZCB3aXRoIG9uZSBvZiBsZWZ0L21pZGRsZS9yaWdodC9zdGFydC9lbmQnKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZU9mZnNldCAodmFsKSB7XG4gIGlmICghdmFsKSB7IHJldHVybiB0cnVlIH1cbiAgaWYgKHZhbC5sZW5ndGggIT09IDIpIHsgcmV0dXJuIGZhbHNlIH1cbiAgaWYgKHR5cGVvZiB2YWxbIDAgXSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHZhbFsgMSBdICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmNvbnN0IGhvcml6b250YWxQb3MgPSB7XG4gICdzdGFydCNsdHInOiAnbGVmdCcsXG4gICdzdGFydCNydGwnOiAncmlnaHQnLFxuICAnZW5kI2x0cic6ICdyaWdodCcsXG4gICdlbmQjcnRsJzogJ2xlZnQnXG59XG5cbjtbICdsZWZ0JywgJ21pZGRsZScsICdyaWdodCcgXS5mb3JFYWNoKHBvcyA9PiB7XG4gIGhvcml6b250YWxQb3NbIGAkeyBwb3MgfSNsdHJgIF0gPSBwb3NcbiAgaG9yaXpvbnRhbFBvc1sgYCR7IHBvcyB9I3J0bGAgXSA9IHBvc1xufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUG9zaXRpb24gKHBvcywgcnRsKSB7XG4gIGNvbnN0IHBhcnRzID0gcG9zLnNwbGl0KCcgJylcbiAgcmV0dXJuIHtcbiAgICB2ZXJ0aWNhbDogcGFydHNbIDAgXSxcbiAgICBob3Jpem9udGFsOiBob3Jpem9udGFsUG9zWyBgJHsgcGFydHNbIDEgXSB9IyR7IHJ0bCA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfWAgXVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbmNob3JQcm9wcyAoZWwsIG9mZnNldCkge1xuICBsZXQgeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHdpZHRoLCBoZWlnaHQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgaWYgKG9mZnNldCAhPT0gdm9pZCAwKSB7XG4gICAgdG9wIC09IG9mZnNldFsgMSBdXG4gICAgbGVmdCAtPSBvZmZzZXRbIDAgXVxuICAgIGJvdHRvbSArPSBvZmZzZXRbIDEgXVxuICAgIHJpZ2h0ICs9IG9mZnNldFsgMCBdXG5cbiAgICB3aWR0aCArPSBvZmZzZXRbIDAgXVxuICAgIGhlaWdodCArPSBvZmZzZXRbIDEgXVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0b3AsIGJvdHRvbSwgaGVpZ2h0LFxuICAgIGxlZnQsIHJpZ2h0LCB3aWR0aCxcbiAgICBtaWRkbGU6IGxlZnQgKyAocmlnaHQgLSBsZWZ0KSAvIDIsXG4gICAgY2VudGVyOiB0b3AgKyAoYm90dG9tIC0gdG9wKSAvIDJcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRBYnNvbHV0ZUFuY2hvclByb3BzIChlbCwgYWJzb2x1dGVPZmZzZXQsIG9mZnNldCkge1xuICBsZXQgeyB0b3AsIGxlZnQgfSA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgdG9wICs9IGFic29sdXRlT2Zmc2V0LnRvcFxuICBsZWZ0ICs9IGFic29sdXRlT2Zmc2V0LmxlZnRcblxuICBpZiAob2Zmc2V0ICE9PSB2b2lkIDApIHtcbiAgICB0b3AgKz0gb2Zmc2V0WyAxIF1cbiAgICBsZWZ0ICs9IG9mZnNldFsgMCBdXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcCwgYm90dG9tOiB0b3AgKyAxLCBoZWlnaHQ6IDEsXG4gICAgbGVmdCwgcmlnaHQ6IGxlZnQgKyAxLCB3aWR0aDogMSxcbiAgICBtaWRkbGU6IGxlZnQsXG4gICAgY2VudGVyOiB0b3BcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0UHJvcHMgKGVsKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIGNlbnRlcjogZWwub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICBib3R0b206IGVsLm9mZnNldEhlaWdodCxcbiAgICBsZWZ0OiAwLFxuICAgIG1pZGRsZTogZWwub2Zmc2V0V2lkdGggLyAyLFxuICAgIHJpZ2h0OiBlbC5vZmZzZXRXaWR0aFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFRvcExlZnRQcm9wcyAoYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBjZmcpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IGFuY2hvclByb3BzWyBjZmcuYW5jaG9yT3JpZ2luLnZlcnRpY2FsIF0gLSB0YXJnZXRQcm9wc1sgY2ZnLnNlbGZPcmlnaW4udmVydGljYWwgXSxcbiAgICBsZWZ0OiBhbmNob3JQcm9wc1sgY2ZnLmFuY2hvck9yaWdpbi5ob3Jpem9udGFsIF0gLSB0YXJnZXRQcm9wc1sgY2ZnLnNlbGZPcmlnaW4uaG9yaXpvbnRhbCBdXG4gIH1cbn1cblxuLy8gY2ZnOiB7IGVsLCBhbmNob3JFbCwgYW5jaG9yT3JpZ2luLCBzZWxmT3JpZ2luLCBvZmZzZXQsIGFic29sdXRlT2Zmc2V0LCBjb3ZlciwgZml0LCBtYXhIZWlnaHQsIG1heFdpZHRoIH1cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb3NpdGlvbiAoY2ZnKSB7XG4gIGlmIChjbGllbnQuaXMuaW9zID09PSB0cnVlICYmIHdpbmRvdy52aXN1YWxWaWV3cG9ydCAhPT0gdm9pZCAwKSB7XG4gICAgLy8gdXNlcyB0aGUgcS1wb3NpdGlvbi1lbmdpbmUgQ1NTIGNsYXNzXG5cbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmJvZHkuc3R5bGVcbiAgICBjb25zdCB7IG9mZnNldExlZnQ6IGxlZnQsIG9mZnNldFRvcDogdG9wIH0gPSB3aW5kb3cudmlzdWFsVmlld3BvcnRcblxuICAgIGlmIChsZWZ0ICE9PSB2cExlZnQpIHtcbiAgICAgIGVsLnNldFByb3BlcnR5KCctLXEtcGUtbGVmdCcsIGxlZnQgKyAncHgnKVxuICAgICAgdnBMZWZ0ID0gbGVmdFxuICAgIH1cbiAgICBpZiAodG9wICE9PSB2cFRvcCkge1xuICAgICAgZWwuc2V0UHJvcGVydHkoJy0tcS1wZS10b3AnLCB0b3AgKyAncHgnKVxuICAgICAgdnBUb3AgPSB0b3BcbiAgICB9XG4gIH1cblxuICAvLyBzY3JvbGwgcG9zaXRpb24gbWlnaHQgY2hhbmdlXG4gIC8vIGlmIG1heC1oZWlnaHQvLXdpZHRoIGNoYW5nZXMsIHNvIHdlXG4gIC8vIG5lZWQgdG8gcmVzdG9yZSBpdCBhZnRlciB3ZSBjYWxjdWxhdGVcbiAgLy8gdGhlIG5ldyBwb3NpdGlvbmluZ1xuICBjb25zdCB7IHNjcm9sbExlZnQsIHNjcm9sbFRvcCB9ID0gY2ZnLmVsXG5cbiAgY29uc3QgYW5jaG9yUHJvcHMgPSBjZmcuYWJzb2x1dGVPZmZzZXQgPT09IHZvaWQgMFxuICAgID8gZ2V0QW5jaG9yUHJvcHMoY2ZnLmFuY2hvckVsLCBjZmcuY292ZXIgPT09IHRydWUgPyBbIDAsIDAgXSA6IGNmZy5vZmZzZXQpXG4gICAgOiBnZXRBYnNvbHV0ZUFuY2hvclByb3BzKGNmZy5hbmNob3JFbCwgY2ZnLmFic29sdXRlT2Zmc2V0LCBjZmcub2Zmc2V0KVxuXG4gIGxldCBlbFN0eWxlID0ge1xuICAgIG1heEhlaWdodDogY2ZnLm1heEhlaWdodCxcbiAgICBtYXhXaWR0aDogY2ZnLm1heFdpZHRoLFxuICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xuICB9XG5cbiAgaWYgKGNmZy5maXQgPT09IHRydWUgfHwgY2ZnLmNvdmVyID09PSB0cnVlKSB7XG4gICAgZWxTdHlsZS5taW5XaWR0aCA9IGFuY2hvclByb3BzLndpZHRoICsgJ3B4J1xuICAgIGlmIChjZmcuY292ZXIgPT09IHRydWUpIHtcbiAgICAgIGVsU3R5bGUubWluSGVpZ2h0ID0gYW5jaG9yUHJvcHMuaGVpZ2h0ICsgJ3B4J1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oY2ZnLmVsLnN0eWxlLCBlbFN0eWxlKVxuXG4gIGNvbnN0IHRhcmdldFByb3BzID0gZ2V0VGFyZ2V0UHJvcHMoY2ZnLmVsKVxuICBsZXQgcHJvcHMgPSBnZXRUb3BMZWZ0UHJvcHMoYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBjZmcpXG5cbiAgaWYgKGNmZy5hYnNvbHV0ZU9mZnNldCA9PT0gdm9pZCAwIHx8IGNmZy5vZmZzZXQgPT09IHZvaWQgMCkge1xuICAgIGFwcGx5Qm91bmRhcmllcyhwcm9wcywgYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBjZmcuYW5jaG9yT3JpZ2luLCBjZmcuc2VsZk9yaWdpbilcbiAgfVxuICBlbHNlIHsgLy8gd2UgaGF2ZSB0b3VjaCBwb3NpdGlvbiBvciBjb250ZXh0IG1lbnUgd2l0aCBvZmZzZXRcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gcHJvcHMgLy8gY2FjaGUgaW5pdGlhbCB2YWx1ZXNcblxuICAgIC8vIGFwcGx5IGluaXRpYWwgYm91bmRhcmllc1xuICAgIGFwcGx5Qm91bmRhcmllcyhwcm9wcywgYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBjZmcuYW5jaG9yT3JpZ2luLCBjZmcuc2VsZk9yaWdpbilcblxuICAgIGxldCBoYXNDaGFuZ2VkID0gZmFsc2VcblxuICAgIC8vIGRpZCBpdCBmbGlwIHZlcnRpY2FsbHk/XG4gICAgaWYgKHByb3BzLnRvcCAhPT0gdG9wKSB7XG4gICAgICBoYXNDaGFuZ2VkID0gdHJ1ZVxuICAgICAgY29uc3Qgb2Zmc2V0WSA9IDIgKiBjZmcub2Zmc2V0WyAxIF1cbiAgICAgIGFuY2hvclByb3BzLmNlbnRlciA9IGFuY2hvclByb3BzLnRvcCAtPSBvZmZzZXRZXG4gICAgICBhbmNob3JQcm9wcy5ib3R0b20gLT0gb2Zmc2V0WSArIDJcbiAgICB9XG5cbiAgICAvLyBkaWQgaXQgZmxpcCBob3Jpem9udGFsbHk/XG4gICAgaWYgKHByb3BzLmxlZnQgIT09IGxlZnQpIHtcbiAgICAgIGhhc0NoYW5nZWQgPSB0cnVlXG4gICAgICBjb25zdCBvZmZzZXRYID0gMiAqIGNmZy5vZmZzZXRbIDAgXVxuICAgICAgYW5jaG9yUHJvcHMubWlkZGxlID0gYW5jaG9yUHJvcHMubGVmdCAtPSBvZmZzZXRYXG4gICAgICBhbmNob3JQcm9wcy5yaWdodCAtPSBvZmZzZXRYICsgMlxuICAgIH1cblxuICAgIGlmIChoYXNDaGFuZ2VkID09PSB0cnVlKSB7XG4gICAgICAvLyByZS1jYWxjdWxhdGUgcHJvcHMgd2l0aCB0aGUgbmV3IGFuY2hvclxuICAgICAgcHJvcHMgPSBnZXRUb3BMZWZ0UHJvcHMoYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBjZmcpXG5cbiAgICAgIC8vIGFuZCByZS1hcHBseSBib3VuZGFyaWVzXG4gICAgICBhcHBseUJvdW5kYXJpZXMocHJvcHMsIGFuY2hvclByb3BzLCB0YXJnZXRQcm9wcywgY2ZnLmFuY2hvck9yaWdpbiwgY2ZnLnNlbGZPcmlnaW4pXG4gICAgfVxuICB9XG5cbiAgZWxTdHlsZSA9IHtcbiAgICB0b3A6IHByb3BzLnRvcCArICdweCcsXG4gICAgbGVmdDogcHJvcHMubGVmdCArICdweCdcbiAgfVxuXG4gIGlmIChwcm9wcy5tYXhIZWlnaHQgIT09IHZvaWQgMCkge1xuICAgIGVsU3R5bGUubWF4SGVpZ2h0ID0gcHJvcHMubWF4SGVpZ2h0ICsgJ3B4J1xuXG4gICAgaWYgKGFuY2hvclByb3BzLmhlaWdodCA+IHByb3BzLm1heEhlaWdodCkge1xuICAgICAgZWxTdHlsZS5taW5IZWlnaHQgPSBlbFN0eWxlLm1heEhlaWdodFxuICAgIH1cbiAgfVxuICBpZiAocHJvcHMubWF4V2lkdGggIT09IHZvaWQgMCkge1xuICAgIGVsU3R5bGUubWF4V2lkdGggPSBwcm9wcy5tYXhXaWR0aCArICdweCdcblxuICAgIGlmIChhbmNob3JQcm9wcy53aWR0aCA+IHByb3BzLm1heFdpZHRoKSB7XG4gICAgICBlbFN0eWxlLm1pbldpZHRoID0gZWxTdHlsZS5tYXhXaWR0aFxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oY2ZnLmVsLnN0eWxlLCBlbFN0eWxlKVxuXG4gIC8vIHJlc3RvcmUgc2Nyb2xsIHBvc2l0aW9uXG4gIGlmIChjZmcuZWwuc2Nyb2xsVG9wICE9PSBzY3JvbGxUb3ApIHtcbiAgICBjZmcuZWwuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gIH1cbiAgaWYgKGNmZy5lbC5zY3JvbGxMZWZ0ICE9PSBzY3JvbGxMZWZ0KSB7XG4gICAgY2ZnLmVsLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlCb3VuZGFyaWVzIChwcm9wcywgYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBhbmNob3JPcmlnaW4sIHNlbGZPcmlnaW4pIHtcbiAgY29uc3RcbiAgICBjdXJyZW50SGVpZ2h0ID0gdGFyZ2V0UHJvcHMuYm90dG9tLFxuICAgIGN1cnJlbnRXaWR0aCA9IHRhcmdldFByb3BzLnJpZ2h0LFxuICAgIG1hcmdpbiA9IGdldFNjcm9sbGJhcldpZHRoKCksXG4gICAgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBtYXJnaW4sXG4gICAgaW5uZXJXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcblxuICBpZiAocHJvcHMudG9wIDwgMCB8fCBwcm9wcy50b3AgKyBjdXJyZW50SGVpZ2h0ID4gaW5uZXJIZWlnaHQpIHtcbiAgICBpZiAoc2VsZk9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHByb3BzLnRvcCA9IGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4udmVydGljYWwgXSA+IGlubmVySGVpZ2h0IC8gMlxuICAgICAgICA/IE1hdGgubWF4KDAsIGlubmVySGVpZ2h0IC0gY3VycmVudEhlaWdodClcbiAgICAgICAgOiAwXG4gICAgICBwcm9wcy5tYXhIZWlnaHQgPSBNYXRoLm1pbihjdXJyZW50SGVpZ2h0LCBpbm5lckhlaWdodClcbiAgICB9XG4gICAgZWxzZSBpZiAoYW5jaG9yUHJvcHNbIGFuY2hvck9yaWdpbi52ZXJ0aWNhbCBdID4gaW5uZXJIZWlnaHQgLyAyKSB7XG4gICAgICBjb25zdCBhbmNob3JZID0gTWF0aC5taW4oXG4gICAgICAgIGlubmVySGVpZ2h0LFxuICAgICAgICBhbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInXG4gICAgICAgICAgPyBhbmNob3JQcm9wcy5jZW50ZXJcbiAgICAgICAgICA6IChhbmNob3JPcmlnaW4udmVydGljYWwgPT09IHNlbGZPcmlnaW4udmVydGljYWwgPyBhbmNob3JQcm9wcy5ib3R0b20gOiBhbmNob3JQcm9wcy50b3ApXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhIZWlnaHQgPSBNYXRoLm1pbihjdXJyZW50SGVpZ2h0LCBhbmNob3JZKVxuICAgICAgcHJvcHMudG9wID0gTWF0aC5tYXgoMCwgYW5jaG9yWSAtIGN1cnJlbnRIZWlnaHQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMudG9wID0gTWF0aC5tYXgoMCwgYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJ1xuICAgICAgICA/IGFuY2hvclByb3BzLmNlbnRlclxuICAgICAgICA6IChhbmNob3JPcmlnaW4udmVydGljYWwgPT09IHNlbGZPcmlnaW4udmVydGljYWwgPyBhbmNob3JQcm9wcy50b3AgOiBhbmNob3JQcm9wcy5ib3R0b20pXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhIZWlnaHQgPSBNYXRoLm1pbihjdXJyZW50SGVpZ2h0LCBpbm5lckhlaWdodCAtIHByb3BzLnRvcClcbiAgICB9XG4gIH1cblxuICBpZiAocHJvcHMubGVmdCA8IDAgfHwgcHJvcHMubGVmdCArIGN1cnJlbnRXaWR0aCA+IGlubmVyV2lkdGgpIHtcbiAgICBwcm9wcy5tYXhXaWR0aCA9IE1hdGgubWluKGN1cnJlbnRXaWR0aCwgaW5uZXJXaWR0aClcbiAgICBpZiAoc2VsZk9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgcHJvcHMubGVmdCA9IGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCBdID4gaW5uZXJXaWR0aCAvIDJcbiAgICAgICAgPyBNYXRoLm1heCgwLCBpbm5lcldpZHRoIC0gY3VycmVudFdpZHRoKVxuICAgICAgICA6IDBcbiAgICB9XG4gICAgZWxzZSBpZiAoYW5jaG9yUHJvcHNbIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsIF0gPiBpbm5lcldpZHRoIC8gMikge1xuICAgICAgY29uc3QgYW5jaG9yWCA9IE1hdGgubWluKFxuICAgICAgICBpbm5lcldpZHRoLFxuICAgICAgICBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZSdcbiAgICAgICAgICA/IGFuY2hvclByb3BzLm1pZGRsZVxuICAgICAgICAgIDogKGFuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSBzZWxmT3JpZ2luLmhvcml6b250YWwgPyBhbmNob3JQcm9wcy5yaWdodCA6IGFuY2hvclByb3BzLmxlZnQpXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhXaWR0aCA9IE1hdGgubWluKGN1cnJlbnRXaWR0aCwgYW5jaG9yWClcbiAgICAgIHByb3BzLmxlZnQgPSBNYXRoLm1heCgwLCBhbmNob3JYIC0gcHJvcHMubWF4V2lkdGgpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMubGVmdCA9IE1hdGgubWF4KDAsIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJ1xuICAgICAgICA/IGFuY2hvclByb3BzLm1pZGRsZVxuICAgICAgICA6IChhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gc2VsZk9yaWdpbi5ob3Jpem9udGFsID8gYW5jaG9yUHJvcHMubGVmdCA6IGFuY2hvclByb3BzLnJpZ2h0KVxuICAgICAgKVxuICAgICAgcHJvcHMubWF4V2lkdGggPSBNYXRoLm1pbihjdXJyZW50V2lkdGgsIGlubmVyV2lkdGggLSBwcm9wcy5sZWZ0KVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFTyxTQUFTLGlCQUFrQjtBQUNoQyxNQUFJLE9BQU8saUJBQWlCLFFBQVE7QUFDbEMsVUFBTSxZQUFZLE9BQU8sYUFBYztBQUN2QyxRQUFJLFVBQVUsVUFBVSxRQUFRO0FBQzlCLGdCQUFVLE1BQU87QUFBQSxJQUNsQixXQUNRLFVBQVUsb0JBQW9CLFFBQVE7QUFDN0MsZ0JBQVUsZ0JBQWlCO0FBQzNCLGVBQVMsR0FBRyxXQUFXLFFBQVEsVUFBVSxTQUFTLFNBQVMsYUFBYTtBQUFBLElBQ3pFO0FBQUEsRUFDRixXQUNRLFNBQVMsY0FBYyxRQUFRO0FBQ3RDLGFBQVMsVUFBVSxNQUFPO0FBQUEsRUFDM0I7QUFDSDtBQ1ZZLE1BQUMsaUJBQWlCO0FBQUEsRUFDNUIsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUNELGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFDZjtBQUVlLFNBQUEsVUFBVTtBQUFBLEVBQ3ZCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRixHQUFHO0FBQ0QsUUFBTSxFQUFFLE9BQU8sT0FBTyxLQUFJLElBQUssbUJBQW9CO0FBRW5ELFFBQU0sV0FBVyxJQUFJLElBQUk7QUFFekIsTUFBSSxhQUFhO0FBRWpCLFdBQVMsUUFBUyxLQUFLO0FBRXJCLFdBQU8sU0FBUyxVQUFVLE9BQ3RCLFFBQ0MsUUFBUSxVQUFVLElBQUksWUFBWSxVQUFVLElBQUksUUFBUSxVQUFVO0FBQUEsRUFDeEU7QUFFRCxRQUFNLGVBQWUsQ0FBRTtBQUV2QixNQUFJLHNCQUFzQixRQUFRO0FB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

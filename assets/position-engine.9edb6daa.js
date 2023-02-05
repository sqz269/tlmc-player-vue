import { a$ as Platform, r as ref, aF as isKeyCode, b0 as prevent, D as nextTick, aN as addEvt, w as watch, o as onMounted, n as onBeforeUnmount, g as getCurrentInstance, aP as cleanEvt, b1 as listenOpts, b2 as portalProxyList, aK as client, N as getScrollbarWidth } from "./index.407507bc.js";
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
  const index = registeredList.findIndex((h) => h === clickOutsideProps);
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
export { validateOffset as a, useScrollTarget as b, clearSelection as c, useAnchor as d, addClickOutside as e, parsePosition as p, removeClickOutside as r, setPosition as s, useAnchorProps as u, validatePosition as v };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24tZW5naW5lLjllZGI2ZGFhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWFuY2hvci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXNjcm9sbC10YXJnZXQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL2NsaWNrLW91dHNpZGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy91dGlscy9wcml2YXRlL3Bvc2l0aW9uLWVuZ2luZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxhdGZvcm0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uICgpIHtcbiAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24gIT09IHZvaWQgMCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKVxuICAgIGlmIChzZWxlY3Rpb24uZW1wdHkgIT09IHZvaWQgMCkge1xuICAgICAgc2VsZWN0aW9uLmVtcHR5KClcbiAgICB9XG4gICAgZWxzZSBpZiAoc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcyAhPT0gdm9pZCAwKSB7XG4gICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgIFBsYXRmb3JtLmlzLm1vYmlsZSAhPT0gdHJ1ZSAmJiBzZWxlY3Rpb24uYWRkUmFuZ2UoZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKSlcbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZG9jdW1lbnQuc2VsZWN0aW9uICE9PSB2b2lkIDApIHtcbiAgICBkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKVxuICB9XG59XG4iLCJpbXBvcnQgeyByZWYsIHdhdGNoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcydcbmltcG9ydCB7IGFkZEV2dCwgY2xlYW5FdnQsIHByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlQW5jaG9yUHJvcHMgPSB7XG4gIHRhcmdldDoge1xuICAgIGRlZmF1bHQ6IHRydWVcbiAgfSxcbiAgbm9QYXJlbnRFdmVudDogQm9vbGVhbixcbiAgY29udGV4dE1lbnU6IEJvb2xlYW5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHtcbiAgc2hvd2luZyxcbiAgYXZvaWRFbWl0LCAvLyByZXF1aXJlZCBmb3IgUVBvcHVwUHJveHkgKHRydWUpXG4gIGNvbmZpZ3VyZUFuY2hvckVsIC8vIG9wdGlvbmFsXG59KSB7XG4gIGNvbnN0IHsgcHJvcHMsIHByb3h5LCBlbWl0IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0IGFuY2hvckVsID0gcmVmKG51bGwpXG5cbiAgbGV0IHRvdWNoVGltZXJcblxuICBmdW5jdGlvbiBjYW5TaG93IChldnQpIHtcbiAgICAvLyBhYm9ydCB3aXRoIG5vIHBhcmVudCBjb25maWd1cmVkIG9yIG9uIG11bHRpLXRvdWNoXG4gICAgcmV0dXJuIGFuY2hvckVsLnZhbHVlID09PSBudWxsXG4gICAgICA/IGZhbHNlXG4gICAgICA6IChldnQgPT09IHZvaWQgMCB8fCBldnQudG91Y2hlcyA9PT0gdm9pZCAwIHx8IGV2dC50b3VjaGVzLmxlbmd0aCA8PSAxKVxuICB9XG5cbiAgY29uc3QgYW5jaG9yRXZlbnRzID0ge31cblxuICBpZiAoY29uZmlndXJlQW5jaG9yRWwgPT09IHZvaWQgMCkge1xuICAgIC8vIGRlZmF1bHQgY29uZmlndXJlQW5jaG9yRWwgaXMgZGVzaWduZWQgZm9yXG4gICAgLy8gUU1lbnUgJiBRUG9wdXBQcm94eSAod2hpY2ggaXMgd2h5IGl0J3MgaGFuZGxlZCBoZXJlKVxuXG4gICAgT2JqZWN0LmFzc2lnbihhbmNob3JFdmVudHMsIHtcbiAgICAgIGhpZGUgKGV2dCkge1xuICAgICAgICBwcm94eS5oaWRlKGV2dClcbiAgICAgIH0sXG5cbiAgICAgIHRvZ2dsZSAoZXZ0KSB7XG4gICAgICAgIHByb3h5LnRvZ2dsZShldnQpXG4gICAgICAgIGV2dC5xQW5jaG9ySGFuZGxlZCA9IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIHRvZ2dsZUtleSAoZXZ0KSB7XG4gICAgICAgIGlzS2V5Q29kZShldnQsIDEzKSA9PT0gdHJ1ZSAmJiBhbmNob3JFdmVudHMudG9nZ2xlKGV2dClcbiAgICAgIH0sXG5cbiAgICAgIGNvbnRleHRDbGljayAoZXZ0KSB7XG4gICAgICAgIHByb3h5LmhpZGUoZXZ0KVxuICAgICAgICBwcmV2ZW50KGV2dClcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHByb3h5LnNob3coZXZ0KVxuICAgICAgICAgIGV2dC5xQW5jaG9ySGFuZGxlZCA9IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0sXG5cbiAgICAgIHByZXZlbnQsXG5cbiAgICAgIG1vYmlsZVRvdWNoIChldnQpIHtcbiAgICAgICAgYW5jaG9yRXZlbnRzLm1vYmlsZUNsZWFudXAoZXZ0KVxuXG4gICAgICAgIGlmIChjYW5TaG93KGV2dCkgIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHByb3h5LmhpZGUoZXZ0KVxuICAgICAgICBhbmNob3JFbC52YWx1ZS5jbGFzc0xpc3QuYWRkKCdub24tc2VsZWN0YWJsZScpXG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldFxuICAgICAgICBhZGRFdnQoYW5jaG9yRXZlbnRzLCAnYW5jaG9yJywgW1xuICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vYmlsZUNsZWFudXAnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoZW5kJywgJ21vYmlsZUNsZWFudXAnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgJ21vYmlsZUNsZWFudXAnLCAncGFzc2l2ZScgXSxcbiAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAnY29udGV4dG1lbnUnLCAncHJldmVudCcsICdub3RQYXNzaXZlJyBdXG4gICAgICAgIF0pXG5cbiAgICAgICAgdG91Y2hUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHByb3h5LnNob3coZXZ0KVxuICAgICAgICAgIGV2dC5xQW5jaG9ySGFuZGxlZCA9IHRydWVcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfSxcblxuICAgICAgbW9iaWxlQ2xlYW51cCAoZXZ0KSB7XG4gICAgICAgIGFuY2hvckVsLnZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRvdWNoVGltZXIpXG5cbiAgICAgICAgaWYgKHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgZXZ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uZmlndXJlQW5jaG9yRWwgPSBmdW5jdGlvbiAoY29udGV4dCA9IHByb3BzLmNvbnRleHRNZW51KSB7XG4gICAgICBpZiAocHJvcHMubm9QYXJlbnRFdmVudCA9PT0gdHJ1ZSB8fCBhbmNob3JFbC52YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBsZXQgZXZ0c1xuXG4gICAgICBpZiAoY29udGV4dCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAocHJveHkuJHEucGxhdGZvcm0uaXMubW9iaWxlID09PSB0cnVlKSB7XG4gICAgICAgICAgZXZ0cyA9IFtcbiAgICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICd0b3VjaHN0YXJ0JywgJ21vYmlsZVRvdWNoJywgJ3Bhc3NpdmUnIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZXZ0cyA9IFtcbiAgICAgICAgICAgIFsgYW5jaG9yRWwudmFsdWUsICdtb3VzZWRvd24nLCAnaGlkZScsICdwYXNzaXZlJyBdLFxuICAgICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ2NvbnRleHRtZW51JywgJ2NvbnRleHRDbGljaycsICdub3RQYXNzaXZlJyBdXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZXZ0cyA9IFtcbiAgICAgICAgICBbIGFuY2hvckVsLnZhbHVlLCAnY2xpY2snLCAndG9nZ2xlJywgJ3Bhc3NpdmUnIF0sXG4gICAgICAgICAgWyBhbmNob3JFbC52YWx1ZSwgJ2tleXVwJywgJ3RvZ2dsZUtleScsICdwYXNzaXZlJyBdXG4gICAgICAgIF1cbiAgICAgIH1cblxuICAgICAgYWRkRXZ0KGFuY2hvckV2ZW50cywgJ2FuY2hvcicsIGV2dHMpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdW5jb25maWd1cmVBbmNob3JFbCAoKSB7XG4gICAgY2xlYW5FdnQoYW5jaG9yRXZlbnRzLCAnYW5jaG9yJylcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFuY2hvckVsIChlbCkge1xuICAgIGFuY2hvckVsLnZhbHVlID0gZWxcbiAgICB3aGlsZSAoYW5jaG9yRWwudmFsdWUuY2xhc3NMaXN0LmNvbnRhaW5zKCdxLWFuY2hvci0tc2tpcCcpKSB7XG4gICAgICBhbmNob3JFbC52YWx1ZSA9IGFuY2hvckVsLnZhbHVlLnBhcmVudE5vZGVcbiAgICB9XG4gICAgY29uZmlndXJlQW5jaG9yRWwoKVxuICB9XG5cbiAgZnVuY3Rpb24gcGlja0FuY2hvckVsICgpIHtcbiAgICBpZiAocHJvcHMudGFyZ2V0ID09PSBmYWxzZSB8fCBwcm9wcy50YXJnZXQgPT09ICcnIHx8IHByb3h5LiRlbC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgICBhbmNob3JFbC52YWx1ZSA9IG51bGxcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMudGFyZ2V0ID09PSB0cnVlKSB7XG4gICAgICBzZXRBbmNob3JFbChwcm94eS4kZWwucGFyZW50Tm9kZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgZWwgPSBwcm9wcy50YXJnZXRcblxuICAgICAgaWYgKHR5cGVvZiBwcm9wcy50YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb3BzLnRhcmdldClcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgZWwgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZWwgIT09IHZvaWQgMCAmJiBlbCAhPT0gbnVsbCkge1xuICAgICAgICBhbmNob3JFbC52YWx1ZSA9IGVsLiRlbCB8fCBlbFxuICAgICAgICBjb25maWd1cmVBbmNob3JFbCgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYW5jaG9yRWwudmFsdWUgPSBudWxsXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEFuY2hvcjogdGFyZ2V0IFwiJHsgcHJvcHMudGFyZ2V0IH1cIiBub3QgZm91bmRgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLmNvbnRleHRNZW51LCB2YWwgPT4ge1xuICAgIGlmIChhbmNob3JFbC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdW5jb25maWd1cmVBbmNob3JFbCgpXG4gICAgICBjb25maWd1cmVBbmNob3JFbCh2YWwpXG4gICAgfVxuICB9KVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLnRhcmdldCwgKCkgPT4ge1xuICAgIGlmIChhbmNob3JFbC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgdW5jb25maWd1cmVBbmNob3JFbCgpXG4gICAgfVxuXG4gICAgcGlja0FuY2hvckVsKClcbiAgfSlcblxuICB3YXRjaCgoKSA9PiBwcm9wcy5ub1BhcmVudEV2ZW50LCB2YWwgPT4ge1xuICAgIGlmIChhbmNob3JFbC52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICB1bmNvbmZpZ3VyZUFuY2hvckVsKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25maWd1cmVBbmNob3JFbCgpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgcGlja0FuY2hvckVsKClcblxuICAgIGlmIChhdm9pZEVtaXQgIT09IHRydWUgJiYgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBhbmNob3JFbC52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBmYWxzZSlcbiAgICB9XG4gIH0pXG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodG91Y2hUaW1lcilcbiAgICB1bmNvbmZpZ3VyZUFuY2hvckVsKClcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGFuY2hvckVsLFxuICAgIGNhblNob3csXG4gICAgYW5jaG9yRXZlbnRzXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlZiwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgbGlzdGVuT3B0cyB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoXG4gIHByb3BzLFxuICBjb25maWd1cmVTY3JvbGxUYXJnZXRcbikge1xuICBjb25zdCBsb2NhbFNjcm9sbFRhcmdldCA9IHJlZihudWxsKVxuICBsZXQgc2Nyb2xsRm5cblxuICBmdW5jdGlvbiBjaGFuZ2VTY3JvbGxFdmVudCAoc2Nyb2xsVGFyZ2V0LCBmbikge1xuICAgIGNvbnN0IGZuUHJvcCA9IGAkeyBmbiAhPT0gdm9pZCAwID8gJ2FkZCcgOiAncmVtb3ZlJyB9RXZlbnRMaXN0ZW5lcmBcbiAgICBjb25zdCBmbkhhbmRsZXIgPSBmbiAhPT0gdm9pZCAwID8gZm4gOiBzY3JvbGxGblxuXG4gICAgaWYgKHNjcm9sbFRhcmdldCAhPT0gd2luZG93KSB7XG4gICAgICBzY3JvbGxUYXJnZXRbIGZuUHJvcCBdKCdzY3JvbGwnLCBmbkhhbmRsZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICB9XG5cbiAgICB3aW5kb3dbIGZuUHJvcCBdKCdzY3JvbGwnLCBmbkhhbmRsZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcblxuICAgIHNjcm9sbEZuID0gZm5cbiAgfVxuXG4gIGZ1bmN0aW9uIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQudmFsdWUgIT09IG51bGwpIHtcbiAgICAgIGNoYW5nZVNjcm9sbEV2ZW50KGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlKVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQudmFsdWUgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgbm9QYXJlbnRFdmVudFdhdGNoZXIgPSB3YXRjaCgoKSA9PiBwcm9wcy5ub1BhcmVudEV2ZW50LCAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlICE9PSBudWxsKSB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH1cbiAgfSlcblxuICBvbkJlZm9yZVVubW91bnQobm9QYXJlbnRFdmVudFdhdGNoZXIpXG5cbiAgcmV0dXJuIHtcbiAgICBsb2NhbFNjcm9sbFRhcmdldCxcbiAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCxcbiAgICBjaGFuZ2VTY3JvbGxFdmVudFxuICB9XG59XG4iLCJpbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vZXZlbnQuanMnXG5pbXBvcnQgeyBwb3J0YWxQcm94eUxpc3QgfSBmcm9tICcuLi9wcml2YXRlL3BvcnRhbC5qcydcblxubGV0IHRpbWVyXG5cbmNvbnN0XG4gIHsgbm90UGFzc2l2ZUNhcHR1cmUgfSA9IGxpc3Rlbk9wdHMsXG4gIHJlZ2lzdGVyZWRMaXN0ID0gW11cblxuZnVuY3Rpb24gZ2xvYmFsSGFuZGxlciAoZXZ0KSB7XG4gIGNsZWFyVGltZW91dCh0aW1lcilcblxuICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG5cbiAgaWYgKFxuICAgIHRhcmdldCA9PT0gdm9pZCAwXG4gICAgfHwgdGFyZ2V0Lm5vZGVUeXBlID09PSA4XG4gICAgfHwgdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbm8tcG9pbnRlci1ldmVudHMnKSA9PT0gdHJ1ZVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIGNoZWNrIGxhc3QgcG9ydGFsIHZtIGlmIGl0J3NcbiAgLy8gYSBRRGlhbG9nIGFuZCBub3QgaW4gc2VhbWxlc3MgbW9kZVxuICBsZXQgcG9ydGFsSW5kZXggPSBwb3J0YWxQcm94eUxpc3QubGVuZ3RoIC0gMVxuXG4gIHdoaWxlIChwb3J0YWxJbmRleCA+PSAwKSB7XG4gICAgY29uc3QgcHJveHkgPSBwb3J0YWxQcm94eUxpc3RbIHBvcnRhbEluZGV4IF0uJFxuXG4gICAgaWYgKHByb3h5LnR5cGUubmFtZSAhPT0gJ1FEaWFsb2cnKSB7XG4gICAgICBicmVha1xuICAgIH1cblxuICAgIGlmIChwcm94eS5wcm9wcy5zZWFtbGVzcyAhPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcG9ydGFsSW5kZXgtLVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IHJlZ2lzdGVyZWRMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3Qgc3RhdGUgPSByZWdpc3RlcmVkTGlzdFsgaSBdXG5cbiAgICBpZiAoXG4gICAgICAoXG4gICAgICAgIHN0YXRlLmFuY2hvckVsLnZhbHVlID09PSBudWxsXG4gICAgICAgIHx8IHN0YXRlLmFuY2hvckVsLnZhbHVlLmNvbnRhaW5zKHRhcmdldCkgPT09IGZhbHNlXG4gICAgICApXG4gICAgICAmJiAoXG4gICAgICAgIHRhcmdldCA9PT0gZG9jdW1lbnQuYm9keVxuICAgICAgICB8fCAoXG4gICAgICAgICAgc3RhdGUuaW5uZXJSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICAgICAmJiBzdGF0ZS5pbm5lclJlZi52YWx1ZS5jb250YWlucyh0YXJnZXQpID09PSBmYWxzZVxuICAgICAgICApXG4gICAgICApXG4gICAgKSB7XG4gICAgICAvLyBtYXJrIHRoZSBldmVudCBhcyBiZWluZyBwcm9jZXNzZWQgYnkgY2xpY2tPdXRzaWRlXG4gICAgICAvLyB1c2VkIHRvIHByZXZlbnQgcmVmb2N1cyBhZnRlciBtZW51IGNsb3NlXG4gICAgICBldnQucUNsaWNrT3V0c2lkZSA9IHRydWVcbiAgICAgIHN0YXRlLm9uQ2xpY2tPdXRzaWRlKGV2dClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsaWNrT3V0c2lkZSAoY2xpY2tPdXRzaWRlUHJvcHMpIHtcbiAgcmVnaXN0ZXJlZExpc3QucHVzaChjbGlja091dHNpZGVQcm9wcylcblxuICBpZiAocmVnaXN0ZXJlZExpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZ2xvYmFsSGFuZGxlciwgbm90UGFzc2l2ZUNhcHR1cmUpXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGdsb2JhbEhhbmRsZXIsIG5vdFBhc3NpdmVDYXB0dXJlKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGlja091dHNpZGUgKGNsaWNrT3V0c2lkZVByb3BzKSB7XG4gIGNvbnN0IGluZGV4ID0gcmVnaXN0ZXJlZExpc3QuZmluZEluZGV4KGggPT4gaCA9PT0gY2xpY2tPdXRzaWRlUHJvcHMpXG5cbiAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICByZWdpc3RlcmVkTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG5cbiAgICBpZiAocmVnaXN0ZXJlZExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBnbG9iYWxIYW5kbGVyLCBub3RQYXNzaXZlQ2FwdHVyZSlcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBnbG9iYWxIYW5kbGVyLCBub3RQYXNzaXZlQ2FwdHVyZSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGdldFNjcm9sbGJhcldpZHRoIH0gZnJvbSAnLi4vc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxubGV0IHZwTGVmdCwgdnBUb3BcblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUG9zaXRpb24gKHBvcykge1xuICBjb25zdCBwYXJ0cyA9IHBvcy5zcGxpdCgnICcpXG4gIGlmIChwYXJ0cy5sZW5ndGggIT09IDIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoWyAndG9wJywgJ2NlbnRlcicsICdib3R0b20nIF0uaW5jbHVkZXMocGFydHNbIDAgXSkgIT09IHRydWUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBbmNob3IvU2VsZiBwb3NpdGlvbiBtdXN0IHN0YXJ0IHdpdGggb25lIG9mIHRvcC9jZW50ZXIvYm90dG9tJylcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBpZiAoWyAnbGVmdCcsICdtaWRkbGUnLCAncmlnaHQnLCAnc3RhcnQnLCAnZW5kJyBdLmluY2x1ZGVzKHBhcnRzWyAxIF0pICE9PSB0cnVlKSB7XG4gICAgY29uc29sZS5lcnJvcignQW5jaG9yL1NlbGYgcG9zaXRpb24gbXVzdCBlbmQgd2l0aCBvbmUgb2YgbGVmdC9taWRkbGUvcmlnaHQvc3RhcnQvZW5kJylcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVPZmZzZXQgKHZhbCkge1xuICBpZiAoIXZhbCkgeyByZXR1cm4gdHJ1ZSB9XG4gIGlmICh2YWwubGVuZ3RoICE9PSAyKSB7IHJldHVybiBmYWxzZSB9XG4gIGlmICh0eXBlb2YgdmFsWyAwIF0gIT09ICdudW1iZXInIHx8IHR5cGVvZiB2YWxbIDEgXSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5jb25zdCBob3Jpem9udGFsUG9zID0ge1xuICAnc3RhcnQjbHRyJzogJ2xlZnQnLFxuICAnc3RhcnQjcnRsJzogJ3JpZ2h0JyxcbiAgJ2VuZCNsdHInOiAncmlnaHQnLFxuICAnZW5kI3J0bCc6ICdsZWZ0J1xufVxuXG47WyAnbGVmdCcsICdtaWRkbGUnLCAncmlnaHQnIF0uZm9yRWFjaChwb3MgPT4ge1xuICBob3Jpem9udGFsUG9zWyBgJHsgcG9zIH0jbHRyYCBdID0gcG9zXG4gIGhvcml6b250YWxQb3NbIGAkeyBwb3MgfSNydGxgIF0gPSBwb3Ncbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBvc2l0aW9uIChwb3MsIHJ0bCkge1xuICBjb25zdCBwYXJ0cyA9IHBvcy5zcGxpdCgnICcpXG4gIHJldHVybiB7XG4gICAgdmVydGljYWw6IHBhcnRzWyAwIF0sXG4gICAgaG9yaXpvbnRhbDogaG9yaXpvbnRhbFBvc1sgYCR7IHBhcnRzWyAxIF0gfSMkeyBydGwgPT09IHRydWUgPyAncnRsJyA6ICdsdHInIH1gIF1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5jaG9yUHJvcHMgKGVsLCBvZmZzZXQpIHtcbiAgbGV0IHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gIGlmIChvZmZzZXQgIT09IHZvaWQgMCkge1xuICAgIHRvcCAtPSBvZmZzZXRbIDEgXVxuICAgIGxlZnQgLT0gb2Zmc2V0WyAwIF1cbiAgICBib3R0b20gKz0gb2Zmc2V0WyAxIF1cbiAgICByaWdodCArPSBvZmZzZXRbIDAgXVxuXG4gICAgd2lkdGggKz0gb2Zmc2V0WyAwIF1cbiAgICBoZWlnaHQgKz0gb2Zmc2V0WyAxIF1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9wLFxuICAgIGxlZnQsXG4gICAgcmlnaHQsXG4gICAgYm90dG9tLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBtaWRkbGU6IGxlZnQgKyAocmlnaHQgLSBsZWZ0KSAvIDIsXG4gICAgY2VudGVyOiB0b3AgKyAoYm90dG9tIC0gdG9wKSAvIDJcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0UHJvcHMgKGVsKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIGNlbnRlcjogZWwub2Zmc2V0SGVpZ2h0IC8gMixcbiAgICBib3R0b206IGVsLm9mZnNldEhlaWdodCxcbiAgICBsZWZ0OiAwLFxuICAgIG1pZGRsZTogZWwub2Zmc2V0V2lkdGggLyAyLFxuICAgIHJpZ2h0OiBlbC5vZmZzZXRXaWR0aFxuICB9XG59XG5cbi8vIGNmZzogeyBlbCwgYW5jaG9yRWwsIGFuY2hvck9yaWdpbiwgc2VsZk9yaWdpbiwgb2Zmc2V0LCBhYnNvbHV0ZU9mZnNldCwgY292ZXIsIGZpdCwgbWF4SGVpZ2h0LCBtYXhXaWR0aCB9XG5leHBvcnQgZnVuY3Rpb24gc2V0UG9zaXRpb24gKGNmZykge1xuICBpZiAoY2xpZW50LmlzLmlvcyA9PT0gdHJ1ZSAmJiB3aW5kb3cudmlzdWFsVmlld3BvcnQgIT09IHZvaWQgMCkge1xuICAgIC8vIHVzZXMgdGhlIHEtcG9zaXRpb24tZW5naW5lIENTUyBjbGFzc1xuXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5LnN0eWxlXG4gICAgY29uc3QgeyBvZmZzZXRMZWZ0OiBsZWZ0LCBvZmZzZXRUb3A6IHRvcCB9ID0gd2luZG93LnZpc3VhbFZpZXdwb3J0XG5cbiAgICBpZiAobGVmdCAhPT0gdnBMZWZ0KSB7XG4gICAgICBlbC5zZXRQcm9wZXJ0eSgnLS1xLXBlLWxlZnQnLCBsZWZ0ICsgJ3B4JylcbiAgICAgIHZwTGVmdCA9IGxlZnRcbiAgICB9XG4gICAgaWYgKHRvcCAhPT0gdnBUb3ApIHtcbiAgICAgIGVsLnNldFByb3BlcnR5KCctLXEtcGUtdG9wJywgdG9wICsgJ3B4JylcbiAgICAgIHZwVG9wID0gdG9wXG4gICAgfVxuICB9XG5cbiAgbGV0IGFuY2hvclByb3BzXG5cbiAgLy8gc2Nyb2xsIHBvc2l0aW9uIG1pZ2h0IGNoYW5nZVxuICAvLyBpZiBtYXgtaGVpZ2h0Ly13aWR0aCBjaGFuZ2VzLCBzbyB3ZVxuICAvLyBuZWVkIHRvIHJlc3RvcmUgaXQgYWZ0ZXIgd2UgY2FsY3VsYXRlXG4gIC8vIHRoZSBuZXcgcG9zaXRpb25pbmdcbiAgY29uc3QgeyBzY3JvbGxMZWZ0LCBzY3JvbGxUb3AgfSA9IGNmZy5lbFxuXG4gIGlmIChjZmcuYWJzb2x1dGVPZmZzZXQgPT09IHZvaWQgMCkge1xuICAgIGFuY2hvclByb3BzID0gZ2V0QW5jaG9yUHJvcHMoY2ZnLmFuY2hvckVsLCBjZmcuY292ZXIgPT09IHRydWUgPyBbIDAsIDAgXSA6IGNmZy5vZmZzZXQpXG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc3RcbiAgICAgIHsgdG9wOiBhbmNob3JUb3AsIGxlZnQ6IGFuY2hvckxlZnQgfSA9IGNmZy5hbmNob3JFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHRvcCA9IGFuY2hvclRvcCArIGNmZy5hYnNvbHV0ZU9mZnNldC50b3AsXG4gICAgICBsZWZ0ID0gYW5jaG9yTGVmdCArIGNmZy5hYnNvbHV0ZU9mZnNldC5sZWZ0XG5cbiAgICBhbmNob3JQcm9wcyA9IHsgdG9wLCBsZWZ0LCB3aWR0aDogMSwgaGVpZ2h0OiAxLCByaWdodDogbGVmdCArIDEsIGNlbnRlcjogdG9wLCBtaWRkbGU6IGxlZnQsIGJvdHRvbTogdG9wICsgMSB9XG4gIH1cblxuICBsZXQgZWxTdHlsZSA9IHtcbiAgICBtYXhIZWlnaHQ6IGNmZy5tYXhIZWlnaHQsXG4gICAgbWF4V2lkdGg6IGNmZy5tYXhXaWR0aCxcbiAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgfVxuXG4gIGlmIChjZmcuZml0ID09PSB0cnVlIHx8IGNmZy5jb3ZlciA9PT0gdHJ1ZSkge1xuICAgIGVsU3R5bGUubWluV2lkdGggPSBhbmNob3JQcm9wcy53aWR0aCArICdweCdcbiAgICBpZiAoY2ZnLmNvdmVyID09PSB0cnVlKSB7XG4gICAgICBlbFN0eWxlLm1pbkhlaWdodCA9IGFuY2hvclByb3BzLmhlaWdodCArICdweCdcbiAgICB9XG4gIH1cblxuICBPYmplY3QuYXNzaWduKGNmZy5lbC5zdHlsZSwgZWxTdHlsZSlcblxuICBjb25zdFxuICAgIHRhcmdldFByb3BzID0gZ2V0VGFyZ2V0UHJvcHMoY2ZnLmVsKSxcbiAgICBwcm9wcyA9IHtcbiAgICAgIHRvcDogYW5jaG9yUHJvcHNbIGNmZy5hbmNob3JPcmlnaW4udmVydGljYWwgXSAtIHRhcmdldFByb3BzWyBjZmcuc2VsZk9yaWdpbi52ZXJ0aWNhbCBdLFxuICAgICAgbGVmdDogYW5jaG9yUHJvcHNbIGNmZy5hbmNob3JPcmlnaW4uaG9yaXpvbnRhbCBdIC0gdGFyZ2V0UHJvcHNbIGNmZy5zZWxmT3JpZ2luLmhvcml6b250YWwgXVxuICAgIH1cblxuICBhcHBseUJvdW5kYXJpZXMocHJvcHMsIGFuY2hvclByb3BzLCB0YXJnZXRQcm9wcywgY2ZnLmFuY2hvck9yaWdpbiwgY2ZnLnNlbGZPcmlnaW4pXG5cbiAgZWxTdHlsZSA9IHtcbiAgICB0b3A6IHByb3BzLnRvcCArICdweCcsXG4gICAgbGVmdDogcHJvcHMubGVmdCArICdweCdcbiAgfVxuXG4gIGlmIChwcm9wcy5tYXhIZWlnaHQgIT09IHZvaWQgMCkge1xuICAgIGVsU3R5bGUubWF4SGVpZ2h0ID0gcHJvcHMubWF4SGVpZ2h0ICsgJ3B4J1xuXG4gICAgaWYgKGFuY2hvclByb3BzLmhlaWdodCA+IHByb3BzLm1heEhlaWdodCkge1xuICAgICAgZWxTdHlsZS5taW5IZWlnaHQgPSBlbFN0eWxlLm1heEhlaWdodFxuICAgIH1cbiAgfVxuICBpZiAocHJvcHMubWF4V2lkdGggIT09IHZvaWQgMCkge1xuICAgIGVsU3R5bGUubWF4V2lkdGggPSBwcm9wcy5tYXhXaWR0aCArICdweCdcblxuICAgIGlmIChhbmNob3JQcm9wcy53aWR0aCA+IHByb3BzLm1heFdpZHRoKSB7XG4gICAgICBlbFN0eWxlLm1pbldpZHRoID0gZWxTdHlsZS5tYXhXaWR0aFxuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5hc3NpZ24oY2ZnLmVsLnN0eWxlLCBlbFN0eWxlKVxuXG4gIC8vIHJlc3RvcmUgc2Nyb2xsIHBvc2l0aW9uXG4gIGlmIChjZmcuZWwuc2Nyb2xsVG9wICE9PSBzY3JvbGxUb3ApIHtcbiAgICBjZmcuZWwuc2Nyb2xsVG9wID0gc2Nyb2xsVG9wXG4gIH1cbiAgaWYgKGNmZy5lbC5zY3JvbGxMZWZ0ICE9PSBzY3JvbGxMZWZ0KSB7XG4gICAgY2ZnLmVsLnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlCb3VuZGFyaWVzIChwcm9wcywgYW5jaG9yUHJvcHMsIHRhcmdldFByb3BzLCBhbmNob3JPcmlnaW4sIHNlbGZPcmlnaW4pIHtcbiAgY29uc3RcbiAgICBjdXJyZW50SGVpZ2h0ID0gdGFyZ2V0UHJvcHMuYm90dG9tLFxuICAgIGN1cnJlbnRXaWR0aCA9IHRhcmdldFByb3BzLnJpZ2h0LFxuICAgIG1hcmdpbiA9IGdldFNjcm9sbGJhcldpZHRoKCksXG4gICAgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBtYXJnaW4sXG4gICAgaW5uZXJXaWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcblxuICBpZiAocHJvcHMudG9wIDwgMCB8fCBwcm9wcy50b3AgKyBjdXJyZW50SGVpZ2h0ID4gaW5uZXJIZWlnaHQpIHtcbiAgICBpZiAoc2VsZk9yaWdpbi52ZXJ0aWNhbCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHByb3BzLnRvcCA9IGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4udmVydGljYWwgXSA+IGlubmVySGVpZ2h0IC8gMlxuICAgICAgICA/IE1hdGgubWF4KDAsIGlubmVySGVpZ2h0IC0gY3VycmVudEhlaWdodClcbiAgICAgICAgOiAwXG4gICAgICBwcm9wcy5tYXhIZWlnaHQgPSBNYXRoLm1pbihjdXJyZW50SGVpZ2h0LCBpbm5lckhlaWdodClcbiAgICB9XG4gICAgZWxzZSBpZiAoYW5jaG9yUHJvcHNbIGFuY2hvck9yaWdpbi52ZXJ0aWNhbCBdID4gaW5uZXJIZWlnaHQgLyAyKSB7XG4gICAgICBjb25zdCBhbmNob3JZID0gTWF0aC5taW4oXG4gICAgICAgIGlubmVySGVpZ2h0LFxuICAgICAgICBhbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdjZW50ZXInXG4gICAgICAgICAgPyBhbmNob3JQcm9wcy5jZW50ZXJcbiAgICAgICAgICA6IChhbmNob3JPcmlnaW4udmVydGljYWwgPT09IHNlbGZPcmlnaW4udmVydGljYWwgPyBhbmNob3JQcm9wcy5ib3R0b20gOiBhbmNob3JQcm9wcy50b3ApXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhIZWlnaHQgPSBNYXRoLm1pbihjdXJyZW50SGVpZ2h0LCBhbmNob3JZKVxuICAgICAgcHJvcHMudG9wID0gTWF0aC5tYXgoMCwgYW5jaG9yWSAtIGN1cnJlbnRIZWlnaHQpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMudG9wID0gTWF0aC5tYXgoMCwgYW5jaG9yT3JpZ2luLnZlcnRpY2FsID09PSAnY2VudGVyJ1xuICAgICAgICA/IGFuY2hvclByb3BzLmNlbnRlclxuICAgICAgICA6IChhbmNob3JPcmlnaW4udmVydGljYWwgPT09IHNlbGZPcmlnaW4udmVydGljYWwgPyBhbmNob3JQcm9wcy50b3AgOiBhbmNob3JQcm9wcy5ib3R0b20pXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhIZWlnaHQgPSBNYXRoLm1pbihjdXJyZW50SGVpZ2h0LCBpbm5lckhlaWdodCAtIHByb3BzLnRvcClcbiAgICB9XG4gIH1cblxuICBpZiAocHJvcHMubGVmdCA8IDAgfHwgcHJvcHMubGVmdCArIGN1cnJlbnRXaWR0aCA+IGlubmVyV2lkdGgpIHtcbiAgICBwcm9wcy5tYXhXaWR0aCA9IE1hdGgubWluKGN1cnJlbnRXaWR0aCwgaW5uZXJXaWR0aClcbiAgICBpZiAoc2VsZk9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJykge1xuICAgICAgcHJvcHMubGVmdCA9IGFuY2hvclByb3BzWyBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCBdID4gaW5uZXJXaWR0aCAvIDJcbiAgICAgICAgPyBNYXRoLm1heCgwLCBpbm5lcldpZHRoIC0gY3VycmVudFdpZHRoKVxuICAgICAgICA6IDBcbiAgICB9XG4gICAgZWxzZSBpZiAoYW5jaG9yUHJvcHNbIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsIF0gPiBpbm5lcldpZHRoIC8gMikge1xuICAgICAgY29uc3QgYW5jaG9yWCA9IE1hdGgubWluKFxuICAgICAgICBpbm5lcldpZHRoLFxuICAgICAgICBhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gJ21pZGRsZSdcbiAgICAgICAgICA/IGFuY2hvclByb3BzLm1pZGRsZVxuICAgICAgICAgIDogKGFuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSBzZWxmT3JpZ2luLmhvcml6b250YWwgPyBhbmNob3JQcm9wcy5yaWdodCA6IGFuY2hvclByb3BzLmxlZnQpXG4gICAgICApXG4gICAgICBwcm9wcy5tYXhXaWR0aCA9IE1hdGgubWluKGN1cnJlbnRXaWR0aCwgYW5jaG9yWClcbiAgICAgIHByb3BzLmxlZnQgPSBNYXRoLm1heCgwLCBhbmNob3JYIC0gcHJvcHMubWF4V2lkdGgpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcHJvcHMubGVmdCA9IE1hdGgubWF4KDAsIGFuY2hvck9yaWdpbi5ob3Jpem9udGFsID09PSAnbWlkZGxlJ1xuICAgICAgICA/IGFuY2hvclByb3BzLm1pZGRsZVxuICAgICAgICA6IChhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCA9PT0gc2VsZk9yaWdpbi5ob3Jpem9udGFsID8gYW5jaG9yUHJvcHMubGVmdCA6IGFuY2hvclByb3BzLnJpZ2h0KVxuICAgICAgKVxuICAgICAgcHJvcHMubWF4V2lkdGggPSBNYXRoLm1pbihjdXJyZW50V2lkdGgsIGlubmVyV2lkdGggLSBwcm9wcy5sZWZ0KVxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFTyxTQUFTLGlCQUFrQjtBQUNoQyxNQUFJLE9BQU8saUJBQWlCLFFBQVE7QUFDbEMsVUFBTSxZQUFZLE9BQU8sYUFBYztBQUN2QyxRQUFJLFVBQVUsVUFBVSxRQUFRO0FBQzlCLGdCQUFVLE1BQU87QUFBQSxJQUNsQixXQUNRLFVBQVUsb0JBQW9CLFFBQVE7QUFDN0MsZ0JBQVUsZ0JBQWlCO0FBQzNCLGVBQVMsR0FBRyxXQUFXLFFBQVEsVUFBVSxTQUFTLFNBQVMsYUFBYTtBQUFBLElBQ3pFO0FBQUEsRUFDRixXQUNRLFNBQVMsY0FBYyxRQUFRO0FBQ3RDLGFBQVMsVUFBVSxNQUFPO0FBQUEsRUFDM0I7QUFDSDtBQ1ZZLE1BQUMsaUJBQWlCO0FBQUEsRUFDNUIsUUFBUTtBQUFBLElBQ04sU0FBUztBQUFBLEVBQ1Y7QUFBQSxFQUNELGVBQWU7QUFBQSxFQUNmLGFBQWE7QUFDZjtBQUVlLFNBQUEsVUFBVTtBQUFBLEVBQ3ZCO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRixHQUFHO0FBQ0QsUUFB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
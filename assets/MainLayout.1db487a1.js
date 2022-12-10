var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField = (obj, key, value2) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
  return value2;
};
import { o as outlinedFavoriteBorder, a as outlinedPlaylistAddCircle, Q as QTooltip, b as outlinedSkipPrevious, c as outlinedPlayArrow, d as outlinedPause, e as outlinedSkipNext, f as outlinedRepeat, g as outlinedShuffle, h as outlinedQueueMusic, i as outlinedPlaylistAdd, j as outlinedPlaylistPlay, k as outlinedHome, l as outlinedSearch, m as outlinedLibraryMusic, n as outlinedRadio, p as outlinedArrowBack, q as outlinedArrowForward, r as outlinedInfo, s as outlinedDarkMode, t as outlinedLightMode } from "./index.cadde48a.js";
import { j as createComponent, c as computed, h, k as hSlot, u as useBtnProps, r as ref, w as watch, o as onMounted, Q as QIcon, l as QBtn, g as getCurrentInstance, m as stop, n as isRuntimeSsrPreHydration, p as nextTick, q as onBeforeUnmount, t as noop, v as listenOpts, i as inject, x as hUniqueSlot, y as layoutKey, z as createDirective, A as client, B as leftClick, C as addEvt, D as preventDraggable, E as prevent, G as position, H as cleanEvt, I as stopAndPrevent, J as useModelToggleProps, K as useDarkProps, L as useModelToggleEmits, M as useDark, N as useTimeout, O as useModelToggle, P as useHistory, R as between, S as withDirectives, U as hDir, V as usePreventScroll, W as provide, X as pageContainerKey, Y as hMergeSlot, Z as getScrollTarget, _ as getVerticalScrollPosition, $ as getHorizontalScrollPosition, a0 as getScrollbarWidth, a1 as reactive, a as onUnmounted, a2 as _export_sfc, a3 as defineComponent, a4 as unref, a5 as openBlock, a6 as createBlock, a7 as withCtx, d as createVNode, a8 as QCardSection, a9 as createBaseVNode, aa as toDisplayString, ab as QCardActions, ac as QCard, ad as createCommentVNode, ae as queueController, af as isNumber, ag as isObject, ah as useFormProps, ai as useFormInject, aj as useFormAttrs, ak as audioController, al as createElementBlock, am as createTextVNode, F as Fragment, an as defineStore, ao as Transition, ap as shallowReactive, aq as useRouterLinkProps, ar as uid$1, as as QSeparator, at as vShow, au as useSpinnerProps, av as useSpinner, aw as Ripple, ax as QAvatar, ay as normalizeClass, az as renderList, aA as useRouter, aB as setCssVar, aC as resolveComponent, b as isRef, aD as KeepAlive, aE as resolveDynamicComponent } from "./index.ec3603dc.js";
import { Q as QMenu, c as clearSelection, d as durationToSeconds, f as formatDuration, s as secondsToDuration, a as QItemSection, b as QItem, e as QItemLabel, g as QList } from "./durationUtils.58a87b4b.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar.b843d900.js";
import { Q as QImg } from "./QImg.e59c5954.js";
var QToolbarTitle = createComponent({
  name: "QToolbarTitle",
  props: {
    shrink: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar__title ellipsis" + (props.shrink === true ? " col-shrink" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
const space = h("div", { class: "q-space" });
var QSpace = createComponent({
  name: "QSpace",
  setup() {
    return () => space;
  }
});
var QBtnGroup = createComponent({
  name: "QBtnGroup",
  props: {
    unelevated: Boolean,
    outline: Boolean,
    flat: Boolean,
    rounded: Boolean,
    square: Boolean,
    push: Boolean,
    stretch: Boolean,
    glossy: Boolean,
    spread: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(() => {
      const cls = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((t) => props[t] === true).map((t) => `q-btn-group--${t}`).join(" ");
      return `q-btn-group row no-wrap${cls.length > 0 ? " " + cls : ""}` + (props.spread === true ? " q-btn-group--spread" : " inline");
    });
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var QBtnDropdown = createComponent({
  name: "QBtnDropdown",
  props: {
    ...useBtnProps,
    modelValue: Boolean,
    split: Boolean,
    dropdownIcon: String,
    contentClass: [Array, String, Object],
    contentStyle: [Array, String, Object],
    cover: Boolean,
    persistent: Boolean,
    noRouteDismiss: Boolean,
    autoClose: Boolean,
    menuAnchor: {
      type: String,
      default: "bottom end"
    },
    menuSelf: {
      type: String,
      default: "top end"
    },
    menuOffset: Array,
    disableMainBtn: Boolean,
    disableDropdown: Boolean,
    noIconAnimation: Boolean
  },
  emits: ["update:modelValue", "click", "before-show", "show", "before-hide", "hide"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const showing = ref(props.modelValue);
    const menuRef = ref(null);
    const attributes = computed(() => {
      const acc = {
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true"
      };
      if (props.disable === true || (props.split === false && props.disableMainBtn === true || props.disableDropdown === true)) {
        acc["aria-disabled"] = "true";
      }
      return acc;
    });
    const iconClass = computed(
      () => "q-btn-dropdown__arrow" + (showing.value === true && props.noIconAnimation === false ? " rotate-180" : "") + (props.split === false ? " q-btn-dropdown__arrow-container" : "")
    );
    watch(() => props.modelValue, (val) => {
      menuRef.value !== null && menuRef.value[val ? "show" : "hide"]();
    });
    watch(() => props.split, hide);
    function onBeforeShow(e) {
      showing.value = true;
      emit("before-show", e);
    }
    function onShow(e) {
      emit("show", e);
      emit("update:modelValue", true);
    }
    function onBeforeHide(e) {
      showing.value = false;
      emit("before-hide", e);
    }
    function onHide(e) {
      emit("hide", e);
      emit("update:modelValue", false);
    }
    function onClick(e) {
      emit("click", e);
    }
    function onClickHide(e) {
      stop(e);
      hide();
      emit("click", e);
    }
    function toggle(evt) {
      menuRef.value !== null && menuRef.value.toggle(evt);
    }
    function show(evt) {
      menuRef.value !== null && menuRef.value.show(evt);
    }
    function hide(evt) {
      menuRef.value !== null && menuRef.value.hide(evt);
    }
    Object.assign(proxy, {
      show,
      hide,
      toggle
    });
    onMounted(() => {
      props.modelValue === true && show();
    });
    return () => {
      const Arrow = [
        h(QIcon, {
          class: iconClass.value,
          name: props.dropdownIcon || proxy.$q.iconSet.arrow.dropdown
        })
      ];
      props.disableDropdown !== true && Arrow.push(
        h(QMenu, {
          ref: menuRef,
          class: props.contentClass,
          style: props.contentStyle,
          cover: props.cover,
          fit: true,
          persistent: props.persistent,
          noRouteDismiss: props.noRouteDismiss,
          autoClose: props.autoClose,
          anchor: props.menuAnchor,
          self: props.menuSelf,
          offset: props.menuOffset,
          separateClosePopup: true,
          onBeforeShow,
          onShow,
          onBeforeHide,
          onHide
        }, slots.default)
      );
      if (props.split === false) {
        return h(QBtn, {
          class: "q-btn-dropdown q-btn-dropdown--simple",
          ...props,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          ...attributes.value,
          onClick
        }, {
          default: () => hSlot(slots.label, []).concat(Arrow),
          loading: slots.loading
        });
      }
      return h(QBtnGroup, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        outline: props.outline,
        flat: props.flat,
        rounded: props.rounded,
        square: props.square,
        push: props.push,
        unelevated: props.unelevated,
        glossy: props.glossy,
        stretch: props.stretch
      }, () => [
        h(QBtn, {
          class: "q-btn-dropdown--current",
          ...props,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          iconRight: props.iconRight,
          round: false,
          onClick: onClickHide
        }, {
          default: slots.label,
          loading: slots.loading
        }),
        h(QBtn, {
          class: "q-btn-dropdown__arrow-container q-anchor--skip",
          ...attributes.value,
          disable: props.disable === true || props.disableDropdown === true,
          outline: props.outline,
          flat: props.flat,
          rounded: props.rounded,
          push: props.push,
          size: props.size,
          color: props.color,
          textColor: props.textColor,
          dense: props.dense,
          ripple: props.ripple
        }, () => Arrow)
      ]);
    };
  }
});
var QToolbar = createComponent({
  name: "QToolbar",
  props: {
    inset: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => "q-toolbar row no-wrap items-center" + (props.inset === true ? " q-toolbar--inset" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
function useCanRender() {
  const canRender = ref(!isRuntimeSsrPreHydration.value);
  if (canRender.value === false) {
    onMounted(() => {
      canRender.value = true;
    });
  }
  return canRender;
}
const hasObserver = typeof ResizeObserver !== "undefined";
const resizeProps = hasObserver === true ? {} : {
  style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",
  url: "about:blank"
};
var QResizeObserver = createComponent({
  name: "QResizeObserver",
  props: {
    debounce: {
      type: [String, Number],
      default: 100
    }
  },
  emits: ["resize"],
  setup(props, { emit }) {
    let timer = null, targetEl, size = { width: -1, height: -1 };
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (timer === null) {
        timer = setTimeout(emitEvent, props.debounce);
      }
    }
    function emitEvent() {
      clearTimeout(timer);
      timer = null;
      if (targetEl) {
        const { offsetWidth: width, offsetHeight: height } = targetEl;
        if (width !== size.width || height !== size.height) {
          size = { width, height };
          emit("resize", size);
        }
      }
    }
    const { proxy } = getCurrentInstance();
    if (hasObserver === true) {
      let observer;
      onMounted(() => {
        nextTick(() => {
          targetEl = proxy.$el.parentNode;
          if (targetEl) {
            observer = new ResizeObserver(trigger);
            observer.observe(targetEl);
            emitEvent();
          }
        });
      });
      onBeforeUnmount(() => {
        clearTimeout(timer);
        if (observer !== void 0) {
          if (observer.disconnect !== void 0) {
            observer.disconnect();
          } else if (targetEl) {
            observer.unobserve(targetEl);
          }
        }
      });
      return noop;
    } else {
      let cleanup = function() {
        clearTimeout(timer);
        if (curDocView !== void 0) {
          if (curDocView.removeEventListener !== void 0) {
            curDocView.removeEventListener("resize", trigger, listenOpts.passive);
          }
          curDocView = void 0;
        }
      }, onObjLoad = function() {
        cleanup();
        if (targetEl && targetEl.contentDocument) {
          curDocView = targetEl.contentDocument.defaultView;
          curDocView.addEventListener("resize", trigger, listenOpts.passive);
          emitEvent();
        }
      };
      const canRender = useCanRender();
      let curDocView;
      onMounted(() => {
        nextTick(() => {
          targetEl = proxy.$el;
          targetEl && onObjLoad();
        });
      });
      onBeforeUnmount(cleanup);
      proxy.trigger = trigger;
      return () => {
        if (canRender.value === true) {
          return h("object", {
            style: resizeProps.style,
            tabindex: -1,
            type: "text/html",
            data: resizeProps.url,
            "aria-hidden": "true",
            onLoad: onObjLoad
          });
        }
      };
    }
  }
});
var QHeader = createComponent({
  name: "QHeader",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    revealOffset: {
      type: Number,
      default: 250
    },
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, () => {
      console.error("QHeader needs to be child of QLayout");
    });
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("H") > -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = size.value - $layout.scroll.value.position;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-header q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-top" + (props.bordered === true ? " q-header--bordered" : "") + (hidden.value === true ? " q-header--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.top, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("header", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch($layout.scroll, (scroll) => {
      props.reveal === true && updateLocal(
        revealed,
        scroll.direction === "up" || scroll.position <= props.revealOffset || scroll.position - scroll.inflectionPoint < 100
      );
    });
    const instance = {};
    $layout.instances.header = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.header === instance) {
        $layout.instances.header = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      child.push(
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      );
      return h("header", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
const modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true
};
const directionList = Object.keys(modifiersAll);
modifiersAll.all = true;
function getModifierDirections(mod) {
  const dir = {};
  for (const direction of directionList) {
    if (mod[direction] === true) {
      dir[direction] = true;
    }
  }
  if (Object.keys(dir).length === 0) {
    return modifiersAll;
  }
  if (dir.horizontal === true) {
    dir.left = dir.right = true;
  } else if (dir.left === true && dir.right === true) {
    dir.horizontal = true;
  }
  if (dir.vertical === true) {
    dir.up = dir.down = true;
  } else if (dir.up === true && dir.down === true) {
    dir.vertical = true;
  }
  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true;
  }
  return dir;
}
function shouldStart(evt, ctx) {
  return ctx.event === void 0 && evt.target !== void 0 && evt.target.draggable !== true && typeof ctx.handler === "function" && evt.target.nodeName.toUpperCase() !== "INPUT" && (evt.qClonedBy === void 0 || evt.qClonedBy.indexOf(ctx.uid) === -1);
}
function getChanges(evt, ctx, isFinal) {
  const pos = position(evt);
  let dir, distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y, absX = Math.abs(distX), absY = Math.abs(distY);
  const direction = ctx.direction;
  if (direction.horizontal === true && direction.vertical !== true) {
    dir = distX < 0 ? "left" : "right";
  } else if (direction.horizontal !== true && direction.vertical === true) {
    dir = distY < 0 ? "up" : "down";
  } else if (direction.up === true && distY < 0) {
    dir = "up";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.down === true && distY > 0) {
    dir = "down";
    if (absX > absY) {
      if (direction.left === true && distX < 0) {
        dir = "left";
      } else if (direction.right === true && distX > 0) {
        dir = "right";
      }
    }
  } else if (direction.left === true && distX < 0) {
    dir = "left";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  } else if (direction.right === true && distX > 0) {
    dir = "right";
    if (absX < absY) {
      if (direction.up === true && distY < 0) {
        dir = "up";
      } else if (direction.down === true && distY > 0) {
        dir = "down";
      }
    }
  }
  let synthetic = false;
  if (dir === void 0 && isFinal === false) {
    if (ctx.event.isFirst === true || ctx.event.lastDir === void 0) {
      return {};
    }
    dir = ctx.event.lastDir;
    synthetic = true;
    if (dir === "left" || dir === "right") {
      pos.left -= distX;
      absX = 0;
      distX = 0;
    } else {
      pos.top -= distY;
      absY = 0;
      distY = 0;
    }
  }
  return {
    synthetic,
    payload: {
      evt,
      touch: ctx.event.mouse !== true,
      mouse: ctx.event.mouse === true,
      position: pos,
      direction: dir,
      isFirst: ctx.event.isFirst,
      isFinal: isFinal === true,
      duration: Date.now() - ctx.event.time,
      distance: {
        x: absX,
        y: absY
      },
      offset: {
        x: distX,
        y: distY
      },
      delta: {
        x: pos.left - ctx.event.lastX,
        y: pos.top - ctx.event.lastY
      }
    }
  };
}
let uid = 0;
var TouchPan = createDirective(
  {
    name: "touch-pan",
    beforeMount(el, { value: value2, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      function handleEvent(evt, mouseEvent) {
        if (modifiers.mouse === true && mouseEvent === true) {
          stopAndPrevent(evt);
        } else {
          modifiers.stop === true && stop(evt);
          modifiers.prevent === true && prevent(evt);
        }
      }
      const ctx = {
        uid: "qvtp_" + uid++,
        handler: value2,
        modifiers,
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", "notPassiveCapture"],
              [document, "mouseup", "end", "passiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "passiveCapture"],
              [target, "touchend", "end", "passiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          ctx.lastEvt = evt;
          if (mouseEvent === true || modifiers.stop === true) {
            if (ctx.direction.all !== true && (mouseEvent !== true || ctx.modifiers.mouseAllDir !== true)) {
              const clone = evt.type.indexOf("mouse") > -1 ? new MouseEvent(evt.type, evt) : new TouchEvent(evt.type, evt);
              evt.defaultPrevented === true && prevent(clone);
              evt.cancelBubble === true && stop(clone);
              Object.assign(clone, {
                qKeyEvent: evt.qKeyEvent,
                qClickOutside: evt.qClickOutside,
                qAnchorHandled: evt.qAnchorHandled,
                qClonedBy: evt.qClonedBy === void 0 ? [ctx.uid] : evt.qClonedBy.concat(ctx.uid)
              });
              ctx.initialEvent = {
                target: evt.target,
                event: clone
              };
            }
            stop(evt);
          }
          const { left, top } = position(evt);
          ctx.event = {
            x: left,
            y: top,
            time: Date.now(),
            mouse: mouseEvent === true,
            detected: false,
            isFirst: true,
            isFinal: false,
            lastX: left,
            lastY: top
          };
        },
        move(evt) {
          if (ctx.event === void 0) {
            return;
          }
          const pos = position(evt), distX = pos.left - ctx.event.x, distY = pos.top - ctx.event.y;
          if (distX === 0 && distY === 0) {
            return;
          }
          ctx.lastEvt = evt;
          const isMouseEvt = ctx.event.mouse === true;
          const start = () => {
            handleEvent(evt, isMouseEvt);
            if (modifiers.preserveCursor !== true) {
              document.documentElement.style.cursor = "grabbing";
            }
            isMouseEvt === true && document.body.classList.add("no-pointer-events--children");
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelayedFn) => {
              ctx.styleCleanup = void 0;
              if (modifiers.preserveCursor !== true) {
                document.documentElement.style.cursor = "";
              }
              document.body.classList.remove("non-selectable");
              if (isMouseEvt === true) {
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelayedFn !== void 0) {
                  setTimeout(() => {
                    remove();
                    withDelayedFn();
                  }, 50);
                } else {
                  remove();
                }
              } else if (withDelayedFn !== void 0) {
                withDelayedFn();
              }
            };
          };
          if (ctx.event.detected === true) {
            ctx.event.isFirst !== true && handleEvent(evt, ctx.event.mouse);
            const { payload, synthetic } = getChanges(evt, ctx, false);
            if (payload !== void 0) {
              if (ctx.handler(payload) === false) {
                ctx.end(evt);
              } else {
                if (ctx.styleCleanup === void 0 && ctx.event.isFirst === true) {
                  start();
                }
                ctx.event.lastX = payload.position.left;
                ctx.event.lastY = payload.position.top;
                ctx.event.lastDir = synthetic === true ? void 0 : payload.direction;
                ctx.event.isFirst = false;
              }
            }
            return;
          }
          if (ctx.direction.all === true || isMouseEvt === true && ctx.modifiers.mouseAllDir === true) {
            start();
            ctx.event.detected = true;
            ctx.move(evt);
            return;
          }
          const absX = Math.abs(distX), absY = Math.abs(distY);
          if (absX !== absY) {
            if (ctx.direction.horizontal === true && absX > absY || ctx.direction.vertical === true && absX < absY || ctx.direction.up === true && absX < absY && distY < 0 || ctx.direction.down === true && absX < absY && distY > 0 || ctx.direction.left === true && absX > absY && distX < 0 || ctx.direction.right === true && absX > absY && distX > 0) {
              ctx.event.detected = true;
              ctx.move(evt);
            } else {
              ctx.end(evt, true);
            }
          }
        },
        end(evt, abort) {
          if (ctx.event === void 0) {
            return;
          }
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          if (abort === true) {
            ctx.styleCleanup !== void 0 && ctx.styleCleanup();
            if (ctx.event.detected !== true && ctx.initialEvent !== void 0) {
              ctx.initialEvent.target.dispatchEvent(ctx.initialEvent.event);
            }
          } else if (ctx.event.detected === true) {
            ctx.event.isFirst === true && ctx.handler(getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx).payload);
            const { payload } = getChanges(evt === void 0 ? ctx.lastEvt : evt, ctx, true);
            const fn = () => {
              ctx.handler(payload);
            };
            if (ctx.styleCleanup !== void 0) {
              ctx.styleCleanup(fn);
            } else {
              fn();
            }
          }
          ctx.event = void 0;
          ctx.initialEvent = void 0;
          ctx.lastEvt = void 0;
        }
      };
      el.__qtouchpan = ctx;
      modifiers.mouse === true && addEvt(ctx, "main", [
        [el, "mousedown", "mouseStart", `passive${modifiers.mouseCapture === true ? "Capture" : ""}`]
      ]);
      client.has.touch === true && addEvt(ctx, "main", [
        [el, "touchstart", "touchStart", `passive${modifiers.capture === true ? "Capture" : ""}`],
        [el, "touchmove", "noop", "notPassiveCapture"]
      ]);
    },
    updated(el, bindings) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchpan;
      if (ctx !== void 0) {
        ctx.event !== void 0 && ctx.end();
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchpan;
      }
    }
  }
);
const duration = 150;
var QDrawer = createComponent({
  name: "QDrawer",
  inheritAttrs: false,
  props: {
    ...useModelToggleProps,
    ...useDarkProps,
    side: {
      type: String,
      default: "left",
      validator: (v) => ["left", "right"].includes(v)
    },
    width: {
      type: Number,
      default: 300
    },
    mini: Boolean,
    miniToOverlay: Boolean,
    miniWidth: {
      type: Number,
      default: 57
    },
    breakpoint: {
      type: Number,
      default: 1023
    },
    showIfAbove: Boolean,
    behavior: {
      type: String,
      validator: (v) => ["default", "desktop", "mobile"].includes(v),
      default: "default"
    },
    bordered: Boolean,
    elevated: Boolean,
    overlay: Boolean,
    persistent: Boolean,
    noSwipeOpen: Boolean,
    noSwipeClose: Boolean,
    noSwipeBackdrop: Boolean
  },
  emits: [
    ...useModelToggleEmits,
    "on-layout",
    "mini-state"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const isDark = useDark(props, $q);
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout } = useTimeout();
    const $layout = inject(layoutKey, () => {
      console.error("QDrawer needs to be child of QLayout");
    });
    let lastDesktopState, timerMini, layoutTotalWidthWatcher;
    const belowBreakpoint = ref(
      props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint
    );
    const isMini = computed(
      () => props.mini === true && belowBreakpoint.value !== true
    );
    const size = computed(() => isMini.value === true ? props.miniWidth : props.width);
    const showing = ref(
      props.showIfAbove === true && belowBreakpoint.value === false ? true : props.modelValue === true
    );
    const hideOnRouteChange = computed(
      () => props.persistent !== true && (belowBreakpoint.value === true || onScreenOverlay.value === true)
    );
    function handleShow(evt, noEvent) {
      addToHistory();
      evt !== false && $layout.animate();
      applyPosition(0);
      if (belowBreakpoint.value === true) {
        const otherInstance = $layout.instances[otherSide.value];
        if (otherInstance !== void 0 && otherInstance.belowBreakpoint === true) {
          otherInstance.hide(false);
        }
        applyBackdrop(1);
        $layout.isContainer.value !== true && preventBodyScroll(true);
      } else {
        applyBackdrop(0);
        evt !== false && setScrollable(false);
      }
      registerTimeout(() => {
        evt !== false && setScrollable(true);
        noEvent !== true && emit("show", evt);
      }, duration);
    }
    function handleHide(evt, noEvent) {
      removeFromHistory();
      evt !== false && $layout.animate();
      applyBackdrop(0);
      applyPosition(stateDirection.value * size.value);
      cleanup();
      noEvent !== true && registerTimeout(() => {
        emit("hide", evt);
      }, duration);
    }
    const { show, hide } = useModelToggle({
      showing,
      hideOnRouteChange,
      handleShow,
      handleHide
    });
    const { addToHistory, removeFromHistory } = useHistory(showing, hide, hideOnRouteChange);
    const instance = {
      belowBreakpoint,
      hide
    };
    const rightSide = computed(() => props.side === "right");
    const stateDirection = computed(
      () => ($q.lang.rtl === true ? -1 : 1) * (rightSide.value === true ? 1 : -1)
    );
    const flagBackdropBg = ref(0);
    const flagPanning = ref(false);
    const flagMiniAnimate = ref(false);
    const flagContentPosition = ref(
      size.value * stateDirection.value
    );
    const otherSide = computed(() => rightSide.value === true ? "left" : "right");
    const offset = computed(() => showing.value === true && belowBreakpoint.value === false && props.overlay === false ? props.miniToOverlay === true ? props.miniWidth : size.value : 0);
    const fixed = computed(
      () => props.overlay === true || props.miniToOverlay === true || $layout.view.value.indexOf(rightSide.value ? "R" : "L") > -1 || $q.platform.is.ios === true && $layout.isContainer.value === true
    );
    const onLayout = computed(
      () => props.overlay === false && showing.value === true && belowBreakpoint.value === false
    );
    const onScreenOverlay = computed(
      () => props.overlay === true && showing.value === true && belowBreakpoint.value === false
    );
    const backdropClass = computed(
      () => "fullscreen q-drawer__backdrop" + (showing.value === false && flagPanning.value === false ? " hidden" : "")
    );
    const backdropStyle = computed(() => ({
      backgroundColor: `rgba(0,0,0,${flagBackdropBg.value * 0.4})`
    }));
    const headerSlot = computed(() => rightSide.value === true ? $layout.rows.value.top[2] === "r" : $layout.rows.value.top[0] === "l");
    const footerSlot = computed(() => rightSide.value === true ? $layout.rows.value.bottom[2] === "r" : $layout.rows.value.bottom[0] === "l");
    const aboveStyle = computed(() => {
      const css = {};
      if ($layout.header.space === true && headerSlot.value === false) {
        if (fixed.value === true) {
          css.top = `${$layout.header.offset}px`;
        } else if ($layout.header.space === true) {
          css.top = `${$layout.header.size}px`;
        }
      }
      if ($layout.footer.space === true && footerSlot.value === false) {
        if (fixed.value === true) {
          css.bottom = `${$layout.footer.offset}px`;
        } else if ($layout.footer.space === true) {
          css.bottom = `${$layout.footer.size}px`;
        }
      }
      return css;
    });
    const style = computed(() => {
      const style2 = {
        width: `${size.value}px`,
        transform: `translateX(${flagContentPosition.value}px)`
      };
      return belowBreakpoint.value === true ? style2 : Object.assign(style2, aboveStyle.value);
    });
    const contentClass = computed(
      () => "q-drawer__content fit " + ($layout.isContainer.value !== true ? "scroll" : "overflow-auto")
    );
    const classes = computed(
      () => `q-drawer q-drawer--${props.side}` + (flagMiniAnimate.value === true ? " q-drawer--mini-animate" : "") + (props.bordered === true ? " q-drawer--bordered" : "") + (isDark.value === true ? " q-drawer--dark q-dark" : "") + (flagPanning.value === true ? " no-transition" : showing.value === true ? "" : " q-layout--prevent-focus") + (belowBreakpoint.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${isMini.value === true ? "mini" : "standard"}` + (fixed.value === true || onLayout.value !== true ? " fixed" : "") + (props.overlay === true || props.miniToOverlay === true ? " q-drawer--on-top" : "") + (headerSlot.value === true ? " q-drawer--top-padding" : ""))
    );
    const openDirective = computed(() => {
      const dir = $q.lang.rtl === true ? props.side : otherSide.value;
      return [[
        TouchPan,
        onOpenPan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const contentCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;
      return [[
        TouchPan,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true
        }
      ]];
    });
    const backdropCloseDirective = computed(() => {
      const dir = $q.lang.rtl === true ? otherSide.value : props.side;
      return [[
        TouchPan,
        onClosePan,
        void 0,
        {
          [dir]: true,
          mouse: true,
          mouseAllDir: true
        }
      ]];
    });
    function updateBelowBreakpoint() {
      updateLocal(belowBreakpoint, props.behavior === "mobile" || props.behavior !== "desktop" && $layout.totalWidth.value <= props.breakpoint);
    }
    watch(belowBreakpoint, (val) => {
      if (val === true) {
        lastDesktopState = showing.value;
        showing.value === true && hide(false);
      } else if (props.overlay === false && props.behavior !== "mobile" && lastDesktopState !== false) {
        if (showing.value === true) {
          applyPosition(0);
          applyBackdrop(0);
          cleanup();
        } else {
          show(false);
        }
      }
    });
    watch(() => props.side, (newSide, oldSide) => {
      if ($layout.instances[oldSide] === instance) {
        $layout.instances[oldSide] = void 0;
        $layout[oldSide].space = false;
        $layout[oldSide].offset = 0;
      }
      $layout.instances[newSide] = instance;
      $layout[newSide].size = size.value;
      $layout[newSide].space = onLayout.value;
      $layout[newSide].offset = offset.value;
    });
    watch($layout.totalWidth, () => {
      if ($layout.isContainer.value === true || document.qScrollPrevented !== true) {
        updateBelowBreakpoint();
      }
    });
    watch(
      () => props.behavior + props.breakpoint,
      updateBelowBreakpoint
    );
    watch($layout.isContainer, (val) => {
      showing.value === true && preventBodyScroll(val !== true);
      val === true && updateBelowBreakpoint();
    });
    watch($layout.scrollbarWidth, () => {
      applyPosition(showing.value === true ? 0 : void 0);
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(onLayout, (val) => {
      emit("on-layout", val);
      updateLayout("space", val);
    });
    watch(rightSide, () => {
      applyPosition();
    });
    watch(size, (val) => {
      applyPosition();
      updateSizeOnLayout(props.miniToOverlay, val);
    });
    watch(() => props.miniToOverlay, (val) => {
      updateSizeOnLayout(val, size.value);
    });
    watch(() => $q.lang.rtl, () => {
      applyPosition();
    });
    watch(() => props.mini, () => {
      if (props.modelValue === true) {
        animateMini();
        $layout.animate();
      }
    });
    watch(isMini, (val) => {
      emit("mini-state", val);
    });
    function applyPosition(position2) {
      if (position2 === void 0) {
        nextTick(() => {
          position2 = showing.value === true ? 0 : size.value;
          applyPosition(stateDirection.value * position2);
        });
      } else {
        if ($layout.isContainer.value === true && rightSide.value === true && (belowBreakpoint.value === true || Math.abs(position2) === size.value)) {
          position2 += stateDirection.value * $layout.scrollbarWidth.value;
        }
        flagContentPosition.value = position2;
      }
    }
    function applyBackdrop(x) {
      flagBackdropBg.value = x;
    }
    function setScrollable(v) {
      const action = v === true ? "remove" : $layout.isContainer.value !== true ? "add" : "";
      action !== "" && document.body.classList[action]("q-body--drawer-toggle");
    }
    function animateMini() {
      clearTimeout(timerMini);
      if (vm.proxy && vm.proxy.$el) {
        vm.proxy.$el.classList.add("q-drawer--mini-animate");
      }
      flagMiniAnimate.value = true;
      timerMini = setTimeout(() => {
        flagMiniAnimate.value = false;
        if (vm && vm.proxy && vm.proxy.$el) {
          vm.proxy.$el.classList.remove("q-drawer--mini-animate");
        }
      }, 150);
    }
    function onOpenPan(evt) {
      if (showing.value !== false) {
        return;
      }
      const width = size.value, position2 = between(evt.distance.x, 0, width);
      if (evt.isFinal === true) {
        const opened = position2 >= Math.min(75, width);
        if (opened === true) {
          show();
        } else {
          $layout.animate();
          applyBackdrop(0);
          applyPosition(stateDirection.value * width);
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(
        ($q.lang.rtl === true ? rightSide.value !== true : rightSide.value) ? Math.max(width - position2, 0) : Math.min(0, position2 - width)
      );
      applyBackdrop(
        between(position2 / width, 0, 1)
      );
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function onClosePan(evt) {
      if (showing.value !== true) {
        return;
      }
      const width = size.value, dir = evt.direction === props.side, position2 = ($q.lang.rtl === true ? dir !== true : dir) ? between(evt.distance.x, 0, width) : 0;
      if (evt.isFinal === true) {
        const opened = Math.abs(position2) < Math.min(75, width);
        if (opened === true) {
          $layout.animate();
          applyBackdrop(1);
          applyPosition(0);
        } else {
          hide();
        }
        flagPanning.value = false;
        return;
      }
      applyPosition(stateDirection.value * position2);
      applyBackdrop(between(1 - position2 / width, 0, 1));
      if (evt.isFirst === true) {
        flagPanning.value = true;
      }
    }
    function cleanup() {
      preventBodyScroll(false);
      setScrollable(true);
    }
    function updateLayout(prop, val) {
      $layout.update(props.side, prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function updateSizeOnLayout(miniToOverlay, size2) {
      updateLayout("size", miniToOverlay === true ? props.miniWidth : size2);
    }
    $layout.instances[props.side] = instance;
    updateSizeOnLayout(props.miniToOverlay, size.value);
    updateLayout("space", onLayout.value);
    updateLayout("offset", offset.value);
    if (props.showIfAbove === true && props.modelValue !== true && showing.value === true && props["onUpdate:modelValue"] !== void 0) {
      emit("update:modelValue", true);
    }
    onMounted(() => {
      emit("on-layout", onLayout.value);
      emit("mini-state", isMini.value);
      lastDesktopState = props.showIfAbove === true;
      const fn = () => {
        const action = showing.value === true ? handleShow : handleHide;
        action(false, true);
      };
      if ($layout.totalWidth.value !== 0) {
        nextTick(fn);
        return;
      }
      layoutTotalWidthWatcher = watch($layout.totalWidth, () => {
        layoutTotalWidthWatcher();
        layoutTotalWidthWatcher = void 0;
        if (showing.value === false && props.showIfAbove === true && belowBreakpoint.value === false) {
          show(false);
        } else {
          fn();
        }
      });
    });
    onBeforeUnmount(() => {
      layoutTotalWidthWatcher !== void 0 && layoutTotalWidthWatcher();
      clearTimeout(timerMini);
      showing.value === true && cleanup();
      if ($layout.instances[props.side] === instance) {
        $layout.instances[props.side] = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = [];
      if (belowBreakpoint.value === true) {
        props.noSwipeOpen === false && child.push(
          withDirectives(
            h("div", {
              key: "open",
              class: `q-drawer__opener fixed-${props.side}`,
              "aria-hidden": "true"
            }),
            openDirective.value
          )
        );
        child.push(
          hDir(
            "div",
            {
              ref: "backdrop",
              class: backdropClass.value,
              style: backdropStyle.value,
              "aria-hidden": "true",
              onClick: hide
            },
            void 0,
            "backdrop",
            props.noSwipeBackdrop !== true && showing.value === true,
            () => backdropCloseDirective.value
          )
        );
      }
      const mini = isMini.value === true && slots.mini !== void 0;
      const content = [
        h(
          "div",
          {
            ...attrs,
            key: "" + mini,
            class: [
              contentClass.value,
              attrs.class
            ]
          },
          mini === true ? slots.mini() : hSlot(slots.default)
        )
      ];
      if (props.elevated === true && showing.value === true) {
        content.push(
          h("div", {
            class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
          })
        );
      }
      child.push(
        hDir(
          "aside",
          { ref: "content", class: classes.value, style: style.value },
          content,
          "contentclose",
          props.noSwipeClose !== true && belowBreakpoint.value === true,
          () => contentCloseDirective.value
        )
      );
      return h("div", { class: "q-drawer-container" }, child);
    };
  }
});
var QPageContainer = createComponent({
  name: "QPageContainer",
  setup(_, { slots }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, () => {
      console.error("QPageContainer needs to be child of QLayout");
    });
    provide(pageContainerKey, true);
    const style = computed(() => {
      const css = {};
      if ($layout.header.space === true) {
        css.paddingTop = `${$layout.header.size}px`;
      }
      if ($layout.right.space === true) {
        css[`padding${$q.lang.rtl === true ? "Left" : "Right"}`] = `${$layout.right.size}px`;
      }
      if ($layout.footer.space === true) {
        css.paddingBottom = `${$layout.footer.size}px`;
      }
      if ($layout.left.space === true) {
        css[`padding${$q.lang.rtl === true ? "Right" : "Left"}`] = `${$layout.left.size}px`;
      }
      return css;
    });
    return () => h("div", {
      class: "q-page-container",
      style: style.value
    }, hSlot(slots.default));
  }
});
var QFooter = createComponent({
  name: "QFooter",
  props: {
    modelValue: {
      type: Boolean,
      default: true
    },
    reveal: Boolean,
    bordered: Boolean,
    elevated: Boolean,
    heightHint: {
      type: [String, Number],
      default: 50
    }
  },
  emits: ["reveal", "focusin"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const $layout = inject(layoutKey, () => {
      console.error("QFooter needs to be child of QLayout");
    });
    const size = ref(parseInt(props.heightHint, 10));
    const revealed = ref(true);
    const windowHeight = ref(
      isRuntimeSsrPreHydration.value === true || $layout.isContainer.value === true ? 0 : window.innerHeight
    );
    const fixed = computed(
      () => props.reveal === true || $layout.view.value.indexOf("F") > -1 || $q.platform.is.ios && $layout.isContainer.value === true
    );
    const containerHeight = computed(() => $layout.isContainer.value === true ? $layout.containerHeight.value : windowHeight.value);
    const offset = computed(() => {
      if (props.modelValue !== true) {
        return 0;
      }
      if (fixed.value === true) {
        return revealed.value === true ? size.value : 0;
      }
      const offset2 = $layout.scroll.value.position + containerHeight.value + size.value - $layout.height.value;
      return offset2 > 0 ? offset2 : 0;
    });
    const hidden = computed(
      () => props.modelValue !== true || fixed.value === true && revealed.value !== true
    );
    const revealOnFocus = computed(
      () => props.modelValue === true && hidden.value === true && props.reveal === true
    );
    const classes = computed(
      () => "q-footer q-layout__section--marginal " + (fixed.value === true ? "fixed" : "absolute") + "-bottom" + (props.bordered === true ? " q-footer--bordered" : "") + (hidden.value === true ? " q-footer--hidden" : "") + (props.modelValue !== true ? " q-layout--prevent-focus" + (fixed.value !== true ? " hidden" : "") : "")
    );
    const style = computed(() => {
      const view = $layout.rows.value.bottom, css = {};
      if (view[0] === "l" && $layout.left.space === true) {
        css[$q.lang.rtl === true ? "right" : "left"] = `${$layout.left.size}px`;
      }
      if (view[2] === "r" && $layout.right.space === true) {
        css[$q.lang.rtl === true ? "left" : "right"] = `${$layout.right.size}px`;
      }
      return css;
    });
    function updateLayout(prop, val) {
      $layout.update("footer", prop, val);
    }
    function updateLocal(prop, val) {
      if (prop.value !== val) {
        prop.value = val;
      }
    }
    function onResize({ height }) {
      updateLocal(size, height);
      updateLayout("size", height);
    }
    function updateRevealed() {
      if (props.reveal !== true) {
        return;
      }
      const { direction, position: position2, inflectionPoint } = $layout.scroll.value;
      updateLocal(revealed, direction === "up" || position2 - inflectionPoint < 100 || $layout.height.value - containerHeight.value - position2 - size.value < 300);
    }
    function onFocusin(evt) {
      if (revealOnFocus.value === true) {
        updateLocal(revealed, true);
      }
      emit("focusin", evt);
    }
    watch(() => props.modelValue, (val) => {
      updateLayout("space", val);
      updateLocal(revealed, true);
      $layout.animate();
    });
    watch(offset, (val) => {
      updateLayout("offset", val);
    });
    watch(() => props.reveal, (val) => {
      val === false && updateLocal(revealed, props.modelValue);
    });
    watch(revealed, (val) => {
      $layout.animate();
      emit("reveal", val);
    });
    watch([size, $layout.scroll, $layout.height], updateRevealed);
    watch(() => $q.screen.height, (val) => {
      $layout.isContainer.value !== true && updateLocal(windowHeight, val);
    });
    const instance = {};
    $layout.instances.footer = instance;
    props.modelValue === true && updateLayout("size", size.value);
    updateLayout("space", props.modelValue);
    updateLayout("offset", offset.value);
    onBeforeUnmount(() => {
      if ($layout.instances.footer === instance) {
        $layout.instances.footer = void 0;
        updateLayout("size", 0);
        updateLayout("offset", 0);
        updateLayout("space", false);
      }
    });
    return () => {
      const child = hMergeSlot(slots.default, [
        h(QResizeObserver, {
          debounce: 0,
          onResize
        })
      ]);
      props.elevated === true && child.push(
        h("div", {
          class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events"
        })
      );
      return h("footer", {
        class: classes.value,
        style: style.value,
        onFocusin
      }, child);
    };
  }
});
const { passive } = listenOpts;
const axisValues = ["both", "horizontal", "vertical"];
var QScrollObserver = createComponent({
  name: "QScrollObserver",
  props: {
    axis: {
      type: String,
      validator: (v) => axisValues.includes(v),
      default: "vertical"
    },
    debounce: [String, Number],
    scrollTarget: {
      default: void 0
    }
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const scroll = {
      position: {
        top: 0,
        left: 0
      },
      direction: "down",
      directionChanged: false,
      delta: {
        top: 0,
        left: 0
      },
      inflectionPoint: {
        top: 0,
        left: 0
      }
    };
    let clearTimer = null, localScrollTarget, parentEl;
    watch(() => props.scrollTarget, () => {
      unconfigureScrollTarget();
      configureScrollTarget();
    });
    function emitEvent() {
      clearTimer !== null && clearTimer();
      const top = Math.max(0, getVerticalScrollPosition(localScrollTarget));
      const left = getHorizontalScrollPosition(localScrollTarget);
      const delta = {
        top: top - scroll.position.top,
        left: left - scroll.position.left
      };
      if (props.axis === "vertical" && delta.top === 0 || props.axis === "horizontal" && delta.left === 0) {
        return;
      }
      const curDir = Math.abs(delta.top) >= Math.abs(delta.left) ? delta.top < 0 ? "up" : "down" : delta.left < 0 ? "left" : "right";
      scroll.position = { top, left };
      scroll.directionChanged = scroll.direction !== curDir;
      scroll.delta = delta;
      if (scroll.directionChanged === true) {
        scroll.direction = curDir;
        scroll.inflectionPoint = scroll.position;
      }
      emit("scroll", { ...scroll });
    }
    function configureScrollTarget() {
      localScrollTarget = getScrollTarget(parentEl, props.scrollTarget);
      localScrollTarget.addEventListener("scroll", trigger, passive);
      trigger(true);
    }
    function unconfigureScrollTarget() {
      if (localScrollTarget !== void 0) {
        localScrollTarget.removeEventListener("scroll", trigger, passive);
        localScrollTarget = void 0;
      }
    }
    function trigger(immediately) {
      if (immediately === true || props.debounce === 0 || props.debounce === "0") {
        emitEvent();
      } else if (clearTimer === null) {
        const [timer, fn] = props.debounce ? [setTimeout(emitEvent, props.debounce), clearTimeout] : [requestAnimationFrame(emitEvent), cancelAnimationFrame];
        clearTimer = () => {
          fn(timer);
          clearTimer = null;
        };
      }
    }
    const { proxy } = getCurrentInstance();
    onMounted(() => {
      parentEl = proxy.$el.parentNode;
      configureScrollTarget();
    });
    onBeforeUnmount(() => {
      clearTimer !== null && clearTimer();
      unconfigureScrollTarget();
    });
    Object.assign(proxy, {
      trigger,
      getPosition: () => scroll
    });
    return noop;
  }
});
var QLayout = createComponent({
  name: "QLayout",
  props: {
    container: Boolean,
    view: {
      type: String,
      default: "hhh lpr fff",
      validator: (v) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(v.toLowerCase())
    },
    onScroll: Function,
    onScrollHeight: Function,
    onResize: Function
  },
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const rootRef = ref(null);
    const height = ref($q.screen.height);
    const width = ref(props.container === true ? 0 : $q.screen.width);
    const scroll = ref({ position: 0, direction: "down", inflectionPoint: 0 });
    const containerHeight = ref(0);
    const scrollbarWidth = ref(isRuntimeSsrPreHydration.value === true ? 0 : getScrollbarWidth());
    const classes = computed(
      () => "q-layout q-layout--" + (props.container === true ? "containerized" : "standard")
    );
    const style = computed(() => props.container === false ? { minHeight: $q.screen.height + "px" } : null);
    const targetStyle = computed(() => scrollbarWidth.value !== 0 ? { [$q.lang.rtl === true ? "left" : "right"]: `${scrollbarWidth.value}px` } : null);
    const targetChildStyle = computed(() => scrollbarWidth.value !== 0 ? {
      [$q.lang.rtl === true ? "right" : "left"]: 0,
      [$q.lang.rtl === true ? "left" : "right"]: `-${scrollbarWidth.value}px`,
      width: `calc(100% + ${scrollbarWidth.value}px)`
    } : null);
    function onPageScroll(data) {
      if (props.container === true || document.qScrollPrevented !== true) {
        const info = {
          position: data.position.top,
          direction: data.direction,
          directionChanged: data.directionChanged,
          inflectionPoint: data.inflectionPoint.top,
          delta: data.delta.top
        };
        scroll.value = info;
        props.onScroll !== void 0 && emit("scroll", info);
      }
    }
    function onPageResize(data) {
      const { height: newHeight, width: newWidth } = data;
      let resized = false;
      if (height.value !== newHeight) {
        resized = true;
        height.value = newHeight;
        props.onScrollHeight !== void 0 && emit("scroll-height", newHeight);
        updateScrollbarWidth();
      }
      if (width.value !== newWidth) {
        resized = true;
        width.value = newWidth;
      }
      if (resized === true && props.onResize !== void 0) {
        emit("resize", data);
      }
    }
    function onContainerResize({ height: height2 }) {
      if (containerHeight.value !== height2) {
        containerHeight.value = height2;
        updateScrollbarWidth();
      }
    }
    function updateScrollbarWidth() {
      if (props.container === true) {
        const width2 = height.value > containerHeight.value ? getScrollbarWidth() : 0;
        if (scrollbarWidth.value !== width2) {
          scrollbarWidth.value = width2;
        }
      }
    }
    let timer;
    const $layout = {
      instances: {},
      view: computed(() => props.view),
      isContainer: computed(() => props.container),
      rootRef,
      height,
      containerHeight,
      scrollbarWidth,
      totalWidth: computed(() => width.value + scrollbarWidth.value),
      rows: computed(() => {
        const rows = props.view.toLowerCase().split(" ");
        return {
          top: rows[0].split(""),
          middle: rows[1].split(""),
          bottom: rows[2].split("")
        };
      }),
      header: reactive({ size: 0, offset: 0, space: false }),
      right: reactive({ size: 300, offset: 0, space: false }),
      footer: reactive({ size: 0, offset: 0, space: false }),
      left: reactive({ size: 300, offset: 0, space: false }),
      scroll,
      animate() {
        if (timer !== void 0) {
          clearTimeout(timer);
        } else {
          document.body.classList.add("q-body--layout-animate");
        }
        timer = setTimeout(() => {
          document.body.classList.remove("q-body--layout-animate");
          timer = void 0;
        }, 155);
      },
      update(part, prop, val) {
        $layout[part][prop] = val;
      }
    };
    provide(layoutKey, $layout);
    if (getScrollbarWidth() > 0) {
      let restoreScrollbar = function() {
        timer2 = null;
        el.classList.remove("hide-scrollbar");
      }, hideScrollbar = function() {
        if (timer2 === null) {
          if (el.scrollHeight > $q.screen.height) {
            return;
          }
          el.classList.add("hide-scrollbar");
        } else {
          clearTimeout(timer2);
        }
        timer2 = setTimeout(restoreScrollbar, 300);
      }, updateScrollEvent = function(action) {
        if (timer2 !== null && action === "remove") {
          clearTimeout(timer2);
          restoreScrollbar();
        }
        window[`${action}EventListener`]("resize", hideScrollbar);
      };
      let timer2 = null;
      const el = document.body;
      watch(
        () => props.container !== true ? "add" : "remove",
        updateScrollEvent
      );
      props.container !== true && updateScrollEvent("add");
      onUnmounted(() => {
        updateScrollEvent("remove");
      });
    }
    return () => {
      const content = hMergeSlot(slots.default, [
        h(QScrollObserver, { onScroll: onPageScroll }),
        h(QResizeObserver, { onResize: onPageResize })
      ]);
      const layout = h("div", {
        class: classes.value,
        style: style.value,
        ref: props.container === true ? void 0 : rootRef,
        tabindex: -1
      }, content);
      if (props.container === true) {
        return h("div", {
          class: "q-layout-container overflow-hidden",
          ref: rootRef
        }, [
          h(QResizeObserver, { onResize: onContainerResize }),
          h("div", {
            class: "absolute-full",
            style: targetStyle.value
          }, [
            h("div", {
              class: "scroll",
              style: targetChildStyle.value
            }, [layout])
          ])
        ]);
      }
      return layout;
    };
  }
});
const _hoisted_1$6 = { class: "text-h6" };
const _hoisted_2$5 = { class: "text-subtitle2" };
const _hoisted_3$5 = { class: "text-subtitle1 text-grey q-py-sm" };
const __default__$5 = {
  name: "TrackInfoCard"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  setup(__props) {
    const songQueue = queueController;
    return (_ctx, _cache) => {
      return unref(songQueue).currentlyPlaying !== void 0 ? (openBlock(), createBlock(QCard, {
        key: 0,
        class: "my-card bg-black",
        flat: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, { horizontal: "" }, {
            default: withCtx(() => [
              createVNode(QImg, {
                style: { "height": "125px", "max-width": "125px" },
                src: unref(songQueue).currentlyPlaying.album.thumbnail.small.url
              }, null, 8, ["src"]),
              createVNode(QCardSection, { class: "justify-around q-py-none" }, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_1$6, toDisplayString(unref(songQueue).currentlyPlaying.name._default), 1),
                  createBaseVNode("div", _hoisted_2$5, toDisplayString(unref(songQueue).currentlyPlaying.album.albumName._default), 1),
                  createBaseVNode("div", _hoisted_3$5, toDisplayString(unref(songQueue).currentlyPlaying.album.albumArtist[0].name), 1)
                ]),
                _: 1
              }),
              createVNode(QCardActions, {
                vertical: "",
                class: "justify-around q-px-md"
              }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    size: "md",
                    color: "red",
                    icon: unref(outlinedFavoriteBorder)
                  }, null, 8, ["icon"]),
                  createVNode(QBtn, {
                    flat: "",
                    round: "",
                    size: "md",
                    color: "accent",
                    icon: unref(outlinedPlaylistAddCircle)
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
var TrackInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "TrackInfoCard.vue"]]);
const markerPrefixClass = "q-slider__marker-labels";
const defaultMarkerConvertFn = (v) => ({ value: v });
const defaultMarkerLabelRenderFn = ({ marker }) => h("div", {
  key: marker.value,
  style: marker.style,
  class: marker.classes
}, marker.label);
const keyCodes = [34, 37, 40, 33, 39, 38];
const useSliderProps = {
  ...useDarkProps,
  ...useFormProps,
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  innerMin: Number,
  innerMax: Number,
  step: {
    type: Number,
    default: 1,
    validator: (v) => v >= 0
  },
  snap: Boolean,
  vertical: Boolean,
  reverse: Boolean,
  hideSelection: Boolean,
  color: String,
  markerLabelsClass: String,
  label: Boolean,
  labelColor: String,
  labelTextColor: String,
  labelAlways: Boolean,
  switchLabelSide: Boolean,
  markers: [Boolean, Number],
  markerLabels: [Boolean, Array, Object, Function],
  switchMarkerLabelsSide: Boolean,
  trackImg: String,
  trackColor: String,
  innerTrackImg: String,
  innerTrackColor: String,
  selectionColor: String,
  selectionImg: String,
  thumbSize: {
    type: String,
    default: "20px"
  },
  trackSize: {
    type: String,
    default: "4px"
  },
  disable: Boolean,
  readonly: Boolean,
  dense: Boolean,
  tabindex: [String, Number],
  thumbColor: String,
  thumbPath: {
    type: String,
    default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
  }
};
const useSliderEmits = ["pan", "update:modelValue", "change"];
function useSlider({ updateValue, updatePosition, getDragging, formAttrs }) {
  const { props, emit, slots, proxy: { $q } } = getCurrentInstance();
  const isDark = useDark(props, $q);
  const injectFormInput = useFormInject(formAttrs);
  const active = ref(false);
  const preventFocus = ref(false);
  const focus = ref(false);
  const dragging = ref(false);
  const axis = computed(() => props.vertical === true ? "--v" : "--h");
  const labelSide = computed(() => "-" + (props.switchLabelSide === true ? "switched" : "standard"));
  const isReversed = computed(() => props.vertical === true ? props.reverse === true : props.reverse !== ($q.lang.rtl === true));
  const innerMin = computed(() => isNaN(props.innerMin) === true || props.innerMin < props.min ? props.min : props.innerMin);
  const innerMax = computed(() => isNaN(props.innerMax) === true || props.innerMax > props.max ? props.max : props.innerMax);
  const editable = computed(() => props.disable !== true && props.readonly !== true && innerMin.value < innerMax.value);
  const decimals = computed(() => (String(props.step).trim().split(".")[1] || "").length);
  const step = computed(() => props.step === 0 ? 1 : props.step);
  const tabindex = computed(() => editable.value === true ? props.tabindex || 0 : -1);
  const trackLen = computed(() => props.max - props.min);
  const innerBarLen = computed(() => innerMax.value - innerMin.value);
  const innerMinRatio = computed(() => convertModelToRatio(innerMin.value));
  const innerMaxRatio = computed(() => convertModelToRatio(innerMax.value));
  const positionProp = computed(() => props.vertical === true ? isReversed.value === true ? "bottom" : "top" : isReversed.value === true ? "right" : "left");
  const sizeProp = computed(() => props.vertical === true ? "height" : "width");
  const thicknessProp = computed(() => props.vertical === true ? "width" : "height");
  const orientation = computed(() => props.vertical === true ? "vertical" : "horizontal");
  const attributes = computed(() => {
    const acc = {
      role: "slider",
      "aria-valuemin": innerMin.value,
      "aria-valuemax": innerMax.value,
      "aria-orientation": orientation.value,
      "data-step": props.step
    };
    if (props.disable === true) {
      acc["aria-disabled"] = "true";
    } else if (props.readonly === true) {
      acc["aria-readonly"] = "true";
    }
    return acc;
  });
  const classes = computed(
    () => `q-slider q-slider${axis.value} q-slider--${active.value === true ? "" : "in"}active inline no-wrap ` + (props.vertical === true ? "row" : "column") + (props.disable === true ? " disabled" : " q-slider--enabled" + (editable.value === true ? " q-slider--editable" : "")) + (focus.value === "both" ? " q-slider--focus" : "") + (props.label || props.labelAlways === true ? " q-slider--label" : "") + (props.labelAlways === true ? " q-slider--label-always" : "") + (isDark.value === true ? " q-slider--dark" : "") + (props.dense === true ? " q-slider--dense q-slider--dense" + axis.value : "")
  );
  function getPositionClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value} ${cls}${axis.value}${labelSide.value}`;
  }
  function getAxisClass(name) {
    const cls = "q-slider__" + name;
    return `${cls} ${cls}${axis.value}`;
  }
  const selectionBarClass = computed(() => {
    const color = props.selectionColor || props.color;
    return "q-slider__selection absolute" + (color !== void 0 ? ` text-${color}` : "");
  });
  const markerClass = computed(() => getAxisClass("markers") + " absolute overflow-hidden");
  const trackContainerClass = computed(() => getAxisClass("track-container"));
  const pinClass = computed(() => getPositionClass("pin"));
  const labelClass = computed(() => getPositionClass("label"));
  const textContainerClass = computed(() => getPositionClass("text-container"));
  const markerLabelsContainerClass = computed(
    () => getPositionClass("marker-labels-container") + (props.markerLabelsClass !== void 0 ? ` ${props.markerLabelsClass}` : "")
  );
  const trackClass = computed(
    () => "q-slider__track relative-position no-outline" + (props.trackColor !== void 0 ? ` bg-${props.trackColor}` : "")
  );
  const trackStyle = computed(() => {
    const acc = { [thicknessProp.value]: props.trackSize };
    if (props.trackImg !== void 0) {
      acc.backgroundImage = `url(${props.trackImg}) !important`;
    }
    return acc;
  });
  const innerBarClass = computed(
    () => "q-slider__inner absolute" + (props.innerTrackColor !== void 0 ? ` bg-${props.innerTrackColor}` : "")
  );
  const innerBarStyle = computed(() => {
    const acc = {
      [positionProp.value]: `${100 * innerMinRatio.value}%`,
      [sizeProp.value]: `${100 * (innerMaxRatio.value - innerMinRatio.value)}%`
    };
    if (props.innerTrackImg !== void 0) {
      acc.backgroundImage = `url(${props.innerTrackImg}) !important`;
    }
    return acc;
  });
  function convertRatioToModel(ratio) {
    const { min, max, step: step2 } = props;
    let model = min + ratio * (max - min);
    if (step2 > 0) {
      const modulo = (model - min) % step2;
      model += (Math.abs(modulo) >= step2 / 2 ? (modulo < 0 ? -1 : 1) * step2 : 0) - modulo;
    }
    if (decimals.value > 0) {
      model = parseFloat(model.toFixed(decimals.value));
    }
    return between(model, innerMin.value, innerMax.value);
  }
  function convertModelToRatio(model) {
    return trackLen.value === 0 ? 0 : (model - props.min) / trackLen.value;
  }
  function getDraggingRatio(evt, dragging2) {
    const pos = position(evt), val = props.vertical === true ? between((pos.top - dragging2.top) / dragging2.height, 0, 1) : between((pos.left - dragging2.left) / dragging2.width, 0, 1);
    return between(
      isReversed.value === true ? 1 - val : val,
      innerMinRatio.value,
      innerMaxRatio.value
    );
  }
  const markerStep = computed(
    () => isNumber(props.markers) === true ? props.markers : step.value
  );
  const markerTicks = computed(() => {
    const acc = [];
    const step2 = markerStep.value;
    const max = props.max;
    let value2 = props.min;
    do {
      acc.push(value2);
      value2 += step2;
    } while (value2 < max);
    acc.push(max);
    return acc;
  });
  const markerLabelClass = computed(() => {
    const prefix = ` ${markerPrefixClass}${axis.value}-`;
    return markerPrefixClass + `${prefix}${props.switchMarkerLabelsSide === true ? "switched" : "standard"}${prefix}${isReversed.value === true ? "rtl" : "ltr"}`;
  });
  const markerLabelsList = computed(() => {
    if (props.markerLabels === false) {
      return null;
    }
    return getMarkerList(props.markerLabels).map((entry, index) => ({
      index,
      value: entry.value,
      label: entry.label || entry.value,
      classes: markerLabelClass.value + (entry.classes !== void 0 ? " " + entry.classes : ""),
      style: {
        ...getMarkerLabelStyle(entry.value),
        ...entry.style || {}
      }
    }));
  });
  const markerScope = computed(() => ({
    markerList: markerLabelsList.value,
    markerMap: markerLabelsMap.value,
    classes: markerLabelClass.value,
    getStyle: getMarkerLabelStyle
  }));
  const markerStyle = computed(() => {
    if (innerBarLen.value !== 0) {
      const size = 100 * markerStep.value / innerBarLen.value;
      return {
        ...innerBarStyle.value,
        backgroundSize: props.vertical === true ? `2px ${size}%` : `${size}% 2px`
      };
    }
    return null;
  });
  function getMarkerList(def) {
    if (def === false) {
      return null;
    }
    if (def === true) {
      return markerTicks.value.map(defaultMarkerConvertFn);
    }
    if (typeof def === "function") {
      return markerTicks.value.map((value2) => {
        const item = def(value2);
        return isObject(item) === true ? { ...item, value: value2 } : { value: value2, label: item };
      });
    }
    const filterFn = ({ value: value2 }) => value2 >= props.min && value2 <= props.max;
    if (Array.isArray(def) === true) {
      return def.map((item) => isObject(item) === true ? item : { value: item }).filter(filterFn);
    }
    return Object.keys(def).map((key) => {
      const item = def[key];
      const value2 = Number(key);
      return isObject(item) === true ? { ...item, value: value2 } : { value: value2, label: item };
    }).filter(filterFn);
  }
  function getMarkerLabelStyle(val) {
    return { [positionProp.value]: `${100 * (val - props.min) / trackLen.value}%` };
  }
  const markerLabelsMap = computed(() => {
    if (props.markerLabels === false) {
      return null;
    }
    const acc = {};
    markerLabelsList.value.forEach((entry) => {
      acc[entry.value] = entry;
    });
    return acc;
  });
  function getMarkerLabelsContent() {
    if (slots["marker-label-group"] !== void 0) {
      return slots["marker-label-group"](markerScope.value);
    }
    const fn = slots["marker-label"] || defaultMarkerLabelRenderFn;
    return markerLabelsList.value.map((marker) => fn({
      marker,
      ...markerScope.value
    }));
  }
  const panDirective = computed(() => {
    return [[
      TouchPan,
      onPan,
      void 0,
      {
        [orientation.value]: true,
        prevent: true,
        stop: true,
        mouse: true,
        mouseAllDir: true
      }
    ]];
  });
  function onPan(event) {
    if (event.isFinal === true) {
      if (dragging.value !== void 0) {
        updatePosition(event.evt);
        event.touch === true && updateValue(true);
        dragging.value = void 0;
        emit("pan", "end");
      }
      active.value = false;
      focus.value = false;
    } else if (event.isFirst === true) {
      dragging.value = getDragging(event.evt);
      updatePosition(event.evt);
      updateValue();
      active.value = true;
      emit("pan", "start");
    } else {
      updatePosition(event.evt);
      updateValue();
    }
  }
  function onBlur() {
    focus.value = false;
  }
  function onActivate(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue();
    preventFocus.value = true;
    active.value = true;
    document.addEventListener("mouseup", onDeactivate, true);
  }
  function onDeactivate() {
    preventFocus.value = false;
    active.value = false;
    updateValue(true);
    onBlur();
    document.removeEventListener("mouseup", onDeactivate, true);
  }
  function onMobileClick(evt) {
    updatePosition(evt, getDragging(evt));
    updateValue(true);
  }
  function onKeyup(evt) {
    if (keyCodes.includes(evt.keyCode)) {
      updateValue(true);
    }
  }
  function getTextContainerStyle(ratio) {
    if (props.vertical === true) {
      return null;
    }
    const p = $q.lang.rtl !== props.reverse ? 1 - ratio : ratio;
    return {
      transform: `translateX(calc(${2 * p - 1} * ${props.thumbSize} / 2 + ${50 - 100 * p}%))`
    };
  }
  function getThumbRenderFn(thumb) {
    const focusClass = computed(() => preventFocus.value === false && (focus.value === thumb.focusValue || focus.value === "both") ? " q-slider--focus" : "");
    const classes2 = computed(
      () => `q-slider__thumb q-slider__thumb${axis.value} q-slider__thumb${axis.value}-${isReversed.value === true ? "rtl" : "ltr"} absolute non-selectable` + focusClass.value + (thumb.thumbColor.value !== void 0 ? ` text-${thumb.thumbColor.value}` : "")
    );
    const style = computed(() => ({
      width: props.thumbSize,
      height: props.thumbSize,
      [positionProp.value]: `${100 * thumb.ratio.value}%`,
      zIndex: focus.value === thumb.focusValue ? 2 : void 0
    }));
    const pinColor = computed(() => thumb.labelColor.value !== void 0 ? ` text-${thumb.labelColor.value}` : "");
    const textContainerStyle = computed(() => getTextContainerStyle(thumb.ratio.value));
    const textClass = computed(() => "q-slider__text" + (thumb.labelTextColor.value !== void 0 ? ` text-${thumb.labelTextColor.value}` : ""));
    return () => {
      const thumbContent = [
        h("svg", {
          class: "q-slider__thumb-shape absolute-full",
          viewBox: "0 0 20 20",
          "aria-hidden": "true"
        }, [
          h("path", { d: props.thumbPath })
        ]),
        h("div", { class: "q-slider__focus-ring fit" })
      ];
      if (props.label === true || props.labelAlways === true) {
        thumbContent.push(
          h("div", {
            class: pinClass.value + " absolute fit no-pointer-events" + pinColor.value
          }, [
            h("div", {
              class: labelClass.value,
              style: { minWidth: props.thumbSize }
            }, [
              h("div", {
                class: textContainerClass.value,
                style: textContainerStyle.value
              }, [
                h("span", { class: textClass.value }, thumb.label.value)
              ])
            ])
          ])
        );
        if (props.name !== void 0 && props.disable !== true) {
          injectFormInput(thumbContent, "push");
        }
      }
      return h("div", {
        class: classes2.value,
        style: style.value,
        ...thumb.getNodeData()
      }, thumbContent);
    };
  }
  function getContent(selectionBarStyle, trackContainerTabindex, trackContainerEvents, injectThumb) {
    const trackContent = [];
    props.innerTrackColor !== "transparent" && trackContent.push(
      h("div", {
        key: "inner",
        class: innerBarClass.value,
        style: innerBarStyle.value
      })
    );
    props.selectionColor !== "transparent" && trackContent.push(
      h("div", {
        key: "selection",
        class: selectionBarClass.value,
        style: selectionBarStyle.value
      })
    );
    props.markers !== false && trackContent.push(
      h("div", {
        key: "marker",
        class: markerClass.value,
        style: markerStyle.value
      })
    );
    injectThumb(trackContent);
    const content = [
      hDir(
        "div",
        {
          key: "trackC",
          class: trackContainerClass.value,
          tabindex: trackContainerTabindex.value,
          ...trackContainerEvents.value
        },
        [
          h("div", {
            class: trackClass.value,
            style: trackStyle.value
          }, trackContent)
        ],
        "slide",
        editable.value,
        () => panDirective.value
      )
    ];
    if (props.markerLabels !== false) {
      const action = props.switchMarkerLabelsSide === true ? "unshift" : "push";
      content[action](
        h("div", {
          key: "markerL",
          class: markerLabelsContainerClass.value
        }, getMarkerLabelsContent())
      );
    }
    return content;
  }
  onBeforeUnmount(() => {
    document.removeEventListener("mouseup", onDeactivate, true);
  });
  return {
    state: {
      active,
      focus,
      preventFocus,
      dragging,
      editable,
      classes,
      tabindex,
      attributes,
      step,
      decimals,
      trackLen,
      innerMin,
      innerMinRatio,
      innerMax,
      innerMaxRatio,
      positionProp,
      sizeProp,
      isReversed
    },
    methods: {
      onActivate,
      onMobileClick,
      onBlur,
      onKeyup,
      getContent,
      getThumbRenderFn,
      convertRatioToModel,
      convertModelToRatio,
      getDraggingRatio
    }
  };
}
const getNodeData = () => ({});
var QSlider = createComponent({
  name: "QSlider",
  props: {
    ...useSliderProps,
    modelValue: {
      required: true,
      default: null,
      validator: (v) => typeof v === "number" || v === null
    },
    labelValue: [String, Number]
  },
  emits: useSliderEmits,
  setup(props, { emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const { state, methods } = useSlider({
      updateValue,
      updatePosition,
      getDragging,
      formAttrs: useFormAttrs(props)
    });
    const rootRef = ref(null);
    const curRatio = ref(0);
    const model = ref(0);
    function normalizeModel() {
      model.value = props.modelValue === null ? state.innerMin.value : between(props.modelValue, state.innerMin.value, state.innerMax.value);
    }
    watch(
      () => `${props.modelValue}|${state.innerMin.value}|${state.innerMax.value}`,
      normalizeModel
    );
    normalizeModel();
    const modelRatio = computed(() => methods.convertModelToRatio(model.value));
    const ratio = computed(() => state.active.value === true ? curRatio.value : modelRatio.value);
    const selectionBarStyle = computed(() => {
      const acc = {
        [state.positionProp.value]: `${100 * state.innerMinRatio.value}%`,
        [state.sizeProp.value]: `${100 * (ratio.value - state.innerMinRatio.value)}%`
      };
      if (props.selectionImg !== void 0) {
        acc.backgroundImage = `url(${props.selectionImg}) !important`;
      }
      return acc;
    });
    const getThumb = methods.getThumbRenderFn({
      focusValue: true,
      getNodeData,
      ratio,
      label: computed(() => props.labelValue !== void 0 ? props.labelValue : model.value),
      thumbColor: computed(() => props.thumbColor || props.color),
      labelColor: computed(() => props.labelColor),
      labelTextColor: computed(() => props.labelTextColor)
    });
    const trackContainerEvents = computed(() => {
      if (state.editable.value !== true) {
        return {};
      }
      return $q.platform.is.mobile === true ? { onClick: methods.onMobileClick } : {
        onMousedown: methods.onActivate,
        onFocus,
        onBlur: methods.onBlur,
        onKeydown,
        onKeyup: methods.onKeyup
      };
    });
    function updateValue(change) {
      if (model.value !== props.modelValue) {
        emit("update:modelValue", model.value);
      }
      change === true && emit("change", model.value);
    }
    function getDragging() {
      return rootRef.value.getBoundingClientRect();
    }
    function updatePosition(event, dragging = state.dragging.value) {
      const ratio2 = methods.getDraggingRatio(event, dragging);
      model.value = methods.convertRatioToModel(ratio2);
      curRatio.value = props.snap !== true || props.step === 0 ? ratio2 : methods.convertModelToRatio(model.value);
    }
    function onFocus() {
      state.focus.value = true;
    }
    function onKeydown(evt) {
      if (!keyCodes.includes(evt.keyCode)) {
        return;
      }
      stopAndPrevent(evt);
      const stepVal = ([34, 33].includes(evt.keyCode) ? 10 : 1) * state.step.value, offset = ([34, 37, 40].includes(evt.keyCode) ? -1 : 1) * (state.isReversed.value === true ? -1 : 1) * (props.vertical === true ? -1 : 1) * stepVal;
      model.value = between(
        parseFloat((model.value + offset).toFixed(state.decimals.value)),
        state.innerMin.value,
        state.innerMax.value
      );
      updateValue();
    }
    return () => {
      const content = methods.getContent(
        selectionBarStyle,
        state.tabindex,
        trackContainerEvents,
        (node) => {
          node.push(getThumb());
        }
      );
      return h("div", {
        ref: rootRef,
        class: state.classes.value + (props.modelValue === null ? " q-slider--no-value" : ""),
        ...state.attributes.value,
        "aria-valuenow": props.modelValue
      }, content);
    };
  }
});
const _hoisted_1$5 = { class: "row full-width justify-center q-pt-sm" };
const _hoisted_2$4 = /* @__PURE__ */ createTextVNode("Previous");
const _hoisted_3$4 = /* @__PURE__ */ createTextVNode("Next");
const _hoisted_4$4 = {
  key: 0,
  class: "row full-width q-pt-lg"
};
const __default__$4 = {
  name: "MediaControl"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  setup(__props) {
    const currentTime = ref(0);
    const songQueue = queueController;
    const isPanningProgress = ref(false);
    queueController.watchCurrentlyPlaying(() => {
      return;
    });
    const paused = computed(() => {
      return audioController.paused.value;
    });
    const onPan = (phase) => {
      if (phase === "start") {
        isPanningProgress.value = true;
      } else {
        console.log(currentTime.value);
        audioController.seek(currentTime.value);
        isPanningProgress.value = false;
      }
    };
    const totalTime = computed(() => {
      if (songQueue.currentlyPlaying !== void 0) {
        return durationToSeconds(songQueue.currentlyPlaying.duration);
      }
      return -1;
    });
    audioController.onProgressTick((time) => {
      if (isPanningProgress.value) {
        return;
      }
      currentTime.value = time;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$5, [
          createVNode(QBtn, {
            fab: "",
            flat: "",
            size: "md",
            icon: unref(outlinedSkipPrevious),
            onClick: _cache[0] || (_cache[0] = ($event) => unref(queueController).playPrevious())
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  _hoisted_2$4
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(QBtn, {
            fab: "",
            class: "q-mx-md",
            round: "",
            size: "md",
            icon: unref(paused) ? unref(outlinedPlayArrow) : unref(outlinedPause),
            onClick: _cache[1] || (_cache[1] = ($event) => unref(audioController).togglePause())
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(audioController).paused ? "Play" : "Pause"), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(QBtn, {
            flat: "",
            fab: "",
            size: "md",
            icon: unref(outlinedSkipNext),
            onClick: _cache[2] || (_cache[2] = ($event) => unref(queueController).playNext())
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  _hoisted_3$4
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"])
        ]),
        unref(songQueue).currentlyPlaying !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_4$4, [
          createVNode(QItemSection, { side: "" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(formatDuration)(unref(secondsToDuration)(currentTime.value))), 1)
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QSlider, {
                modelValue: currentTime.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => currentTime.value = $event),
                onPan,
                min: 0,
                max: unref(totalTime),
                step: 0.1,
                color: "white"
              }, null, 8, ["modelValue", "max", "step"])
            ]),
            _: 1
          }),
          createVNode(QItemSection, { side: "" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(formatDuration)(unref(songQueue).currentlyPlaying.duration)), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var MediaControl = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "MediaControl.vue"]]);
const useQueueDisplayStore = defineStore("queueDisplay", {
  state: () => ({
    show: true
  }),
  actions: {
    open() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    toggle() {
      this.show = !this.show;
    }
  }
});
const _hoisted_1$4 = { class: "row full-width full-height justify-end items-center" };
const _hoisted_2$3 = { class: "col-7 row justify-end" };
const _hoisted_3$3 = /* @__PURE__ */ createTextVNode("Repeat");
const _hoisted_4$3 = /* @__PURE__ */ createTextVNode("Shuffle");
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode("Queue");
const _hoisted_6$1 = { class: "col" };
const __default__$3 = {
  name: "QueueControl"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    const queueShowStatusStore = useQueueDisplayStore();
    const volume = ref(audioController.volume.value * 100);
    watch(volume, () => {
      audioController.volume.value = volume.value / 100;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$3, [
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            icon: unref(outlinedRepeat)
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  _hoisted_3$3
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            icon: unref(outlinedShuffle),
            class: "q-mx-sm"
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  _hoisted_4$3
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"]),
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            icon: unref(outlinedQueueMusic),
            onClick: _cache[0] || (_cache[0] = ($event) => unref(queueShowStatusStore).toggle())
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  _hoisted_5$1
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"])
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          createVNode(QItem, { class: "full-width" }, {
            default: withCtx(() => [
              createVNode(QItemSection, { side: "" }, {
                default: withCtx(() => [
                  createVNode(QIcon, { name: "volume_up" })
                ]),
                _: 1
              }),
              createVNode(QItemSection, null, {
                default: withCtx(() => [
                  createVNode(QSlider, {
                    modelValue: volume.value,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => volume.value = $event),
                    min: 0,
                    max: 100,
                    step: 1,
                    style: { "max-width": "100px" },
                    "thumb-size": "10px",
                    "inner-track-color": "black",
                    "selection-color": "white",
                    "thumb-color": "white",
                    "track-color": "yellow"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
});
var QueueControl = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "QueueControl.vue"]]);
const _hoisted_1$3 = { class: "row full-width full-height justify-evenly" };
const _hoisted_2$2 = { class: "col" };
const _hoisted_3$2 = { class: "col-5" };
const _hoisted_4$2 = { class: "col-3" };
const __default__$2 = {
  name: "PlayerControl"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QToolbar, { class: "q-pa-md" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            createBaseVNode("div", _hoisted_2$2, [
              createVNode(TrackInfoCard)
            ]),
            createBaseVNode("div", _hoisted_3$2, [
              createVNode(MediaControl)
            ]),
            createBaseVNode("div", _hoisted_4$2, [
              createVNode(QueueControl)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
var PlayerControl = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "PlayerControl.vue"]]);
class MediaSessionController {
  constructor(queueCtrl, audioCtrl) {
    __publicField(this, "supportMediaSession");
    __publicField(this, "queueController");
    __publicField(this, "audioController");
    __publicField(this, "audioTag");
    console.log("abcd");
    this.supportMediaSession = "mediaSession" in navigator;
    if (queueCtrl !== void 0) {
      this.queueController = queueCtrl;
    } else {
      this.queueController = queueController;
    }
    if (audioCtrl !== void 0) {
      this.audioController = audioCtrl;
    } else {
      this.audioController = audioController;
    }
    this.initialize();
  }
  initialize() {
    if (!this.supportMediaSession) {
      return;
    }
    this.audioTag = document.createElement("audio");
    this.audioTag.id = "asdf";
    this.audioTag.style.display = "none";
    this.audioTag.src = "https://github.com/anars/blank-audio/raw/master/1-hour-of-silence.mp3";
    this.audioTag.play();
    this.audioTag.loop = true;
    document.body.append(this.audioTag);
    navigator.mediaSession.setActionHandler("play", () => {
      var _a;
      console.log("[MediaSession] Play");
      this.setMediaMetadata();
      (_a = this.audioTag) == null ? void 0 : _a.play();
      this.audioController.unpause();
    });
    navigator.mediaSession.setActionHandler("pause", () => {
      var _a;
      console.log("[MediaSession] Pause");
      this.setMediaMetadata();
      this.audioController.pause();
      (_a = this.audioTag) == null ? void 0 : _a.pause();
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => {
      this.setMediaMetadata();
      this.queueController.playPrevious();
    });
    navigator.mediaSession.setActionHandler("nexttrack", () => {
      this.setMediaMetadata();
      this.queueController.playNext();
    });
    this.queueController.watchCurrentlyPlaying(() => {
      this.onCurrentPlayChanged();
    });
    watch(this.audioController.paused, (curr, prev) => {
      var _a;
      if (curr) {
        this.setMediaMetadata();
      } else {
        this.setMediaMetadata();
        (_a = this.audioTag) == null ? void 0 : _a.pause();
      }
    });
  }
  setMediaMetadata() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const currentlyPlaying = this.queueController.currentlyPlaying;
    if (currentlyPlaying === void 0) {
      return;
    }
    navigator.mediaSession.metadata = new window.MediaMetadata({
      title: (_a = currentlyPlaying == null ? void 0 : currentlyPlaying.name) == null ? void 0 : _a._default,
      artist: (_c = (_b = currentlyPlaying == null ? void 0 : currentlyPlaying.album) == null ? void 0 : _b.albumArtist) == null ? void 0 : _c[0],
      album: (_e = (_d = currentlyPlaying == null ? void 0 : currentlyPlaying.album) == null ? void 0 : _d.albumName) == null ? void 0 : _e._default,
      artwork: [
        {
          src: (_g = (_f = currentlyPlaying == null ? void 0 : currentlyPlaying.album) == null ? void 0 : _f.albumImage) == null ? void 0 : _g.url,
          type: (_i = (_h = currentlyPlaying == null ? void 0 : currentlyPlaying.album) == null ? void 0 : _h.albumImage) == null ? void 0 : _i.assetMime
        }
      ]
    });
  }
  onCurrentPlayChanged() {
    console.log("Currently playing changed");
    this.setMediaMetadata();
  }
}
var QSlideTransition = createComponent({
  name: "QSlideTransition",
  props: {
    appear: Boolean,
    duration: {
      type: Number,
      default: 300
    }
  },
  emits: ["show", "hide"],
  setup(props, { slots, emit }) {
    let animating = false, doneFn, element;
    let timer, timerFallback, animListener, lastEvent;
    function cleanup() {
      doneFn && doneFn();
      doneFn = null;
      animating = false;
      clearTimeout(timer);
      clearTimeout(timerFallback);
      element !== void 0 && element.removeEventListener("transitionend", animListener);
      animListener = null;
    }
    function begin(el, height, done) {
      el.style.overflowY = "hidden";
      if (height !== void 0) {
        el.style.height = `${height}px`;
      }
      el.style.transition = `height ${props.duration}ms cubic-bezier(.25, .8, .50, 1)`;
      animating = true;
      doneFn = done;
    }
    function end(el, event) {
      el.style.overflowY = null;
      el.style.height = null;
      el.style.transition = null;
      cleanup();
      event !== lastEvent && emit(event);
    }
    function onEnter(el, done) {
      let pos = 0;
      element = el;
      if (animating === true) {
        cleanup();
        pos = el.offsetHeight === el.scrollHeight ? 0 : void 0;
      } else {
        lastEvent = "hide";
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        el.style.height = `${el.scrollHeight}px`;
        animListener = (evt) => {
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "show");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    function onLeave(el, done) {
      let pos;
      element = el;
      if (animating === true) {
        cleanup();
      } else {
        lastEvent = "show";
        pos = el.scrollHeight;
      }
      begin(el, pos, done);
      timer = setTimeout(() => {
        el.style.height = 0;
        animListener = (evt) => {
          if (Object(evt) !== evt || evt.target === el) {
            end(el, "hide");
          }
        };
        el.addEventListener("transitionend", animListener);
        timerFallback = setTimeout(animListener, props.duration * 1.1);
      }, 100);
    }
    onBeforeUnmount(() => {
      animating === true && cleanup();
    });
    return () => h(Transition, {
      css: false,
      appear: props.appear,
      onEnter,
      onLeave
    }, slots.default);
  }
});
const itemGroups = shallowReactive({});
const LINK_PROPS = Object.keys(useRouterLinkProps);
var QExpansionItem = createComponent({
  name: "QExpansionItem",
  props: {
    ...useRouterLinkProps,
    ...useModelToggleProps,
    ...useDarkProps,
    icon: String,
    label: String,
    labelLines: [Number, String],
    caption: String,
    captionLines: [Number, String],
    dense: Boolean,
    expandIcon: String,
    expandedIcon: String,
    expandIconClass: [Array, String, Object],
    duration: Number,
    headerInsetLevel: Number,
    contentInsetLevel: Number,
    expandSeparator: Boolean,
    defaultOpened: Boolean,
    expandIconToggle: Boolean,
    switchToggleSide: Boolean,
    denseToggle: Boolean,
    group: String,
    popup: Boolean,
    headerStyle: [Array, String, Object],
    headerClass: [Array, String, Object]
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "after-show",
    "after-hide"
  ],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const showing = ref(
      props.modelValue !== null ? props.modelValue : props.defaultOpened
    );
    const blurTargetRef = ref(null);
    const { hide, toggle } = useModelToggle({ showing });
    let uniqueId, exitGroup;
    const classes = computed(
      () => `q-expansion-item q-item-type q-expansion-item--${showing.value === true ? "expanded" : "collapsed"} q-expansion-item--${props.popup === true ? "popup" : "standard"}`
    );
    const contentStyle = computed(() => {
      if (props.contentInsetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: props.contentInsetLevel * 56 + "px"
      };
    });
    const hasLink = computed(
      () => props.disable !== true && (props.href !== void 0 || props.to !== void 0 && props.to !== null && props.to !== "")
    );
    const linkProps = computed(() => {
      const acc = {};
      LINK_PROPS.forEach((key) => {
        acc[key] = props[key];
      });
      return acc;
    });
    const isClickable = computed(
      () => hasLink.value === true || props.expandIconToggle !== true
    );
    const expansionIcon = computed(() => props.expandedIcon !== void 0 && showing.value === true ? props.expandedIcon : props.expandIcon || $q.iconSet.expansionItem[props.denseToggle === true ? "denseIcon" : "icon"]);
    const activeToggleIcon = computed(
      () => props.disable !== true && (hasLink.value === true || props.expandIconToggle === true)
    );
    watch(() => props.group, (name) => {
      exitGroup !== void 0 && exitGroup();
      name !== void 0 && enterGroup();
    });
    function onHeaderClick(e) {
      hasLink.value !== true && toggle(e);
      emit("click", e);
    }
    function toggleIconKeyboard(e) {
      e.keyCode === 13 && toggleIcon(e, true);
    }
    function toggleIcon(e, keyboard) {
      keyboard !== true && blurTargetRef.value !== null && blurTargetRef.value.focus();
      toggle(e);
      stopAndPrevent(e);
    }
    function onShow() {
      emit("after-show");
    }
    function onHide() {
      emit("after-hide");
    }
    function enterGroup() {
      if (uniqueId === void 0) {
        uniqueId = uid$1();
      }
      if (showing.value === true) {
        itemGroups[props.group] = uniqueId;
      }
      const show = watch(showing, (val) => {
        if (val === true) {
          itemGroups[props.group] = uniqueId;
        } else if (itemGroups[props.group] === uniqueId) {
          delete itemGroups[props.group];
        }
      });
      const group = watch(
        () => itemGroups[props.group],
        (val, oldVal) => {
          if (oldVal === uniqueId && val !== void 0 && val !== uniqueId) {
            hide();
          }
        }
      );
      exitGroup = () => {
        show();
        group();
        if (itemGroups[props.group] === uniqueId) {
          delete itemGroups[props.group];
        }
        exitGroup = void 0;
      };
    }
    function getToggleIcon() {
      const data = {
        class: [
          `q-focusable relative-position cursor-pointer${props.denseToggle === true && props.switchToggleSide === true ? " items-end" : ""}`,
          props.expandIconClass
        ],
        side: props.switchToggleSide !== true,
        avatar: props.switchToggleSide
      };
      const child = [
        h(QIcon, {
          class: "q-expansion-item__toggle-icon" + (props.expandedIcon === void 0 && showing.value === true ? " q-expansion-item__toggle-icon--rotated" : ""),
          name: expansionIcon.value
        })
      ];
      if (activeToggleIcon.value === true) {
        Object.assign(data, {
          tabindex: 0,
          onClick: toggleIcon,
          onKeyup: toggleIconKeyboard
        });
        child.unshift(
          h("div", {
            ref: blurTargetRef,
            class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
            tabindex: -1
          })
        );
      }
      return h(QItemSection, data, () => child);
    }
    function getHeaderChild() {
      let child;
      if (slots.header !== void 0) {
        child = [].concat(slots.header({ expanded: showing.value === true }));
      } else {
        child = [
          h(QItemSection, () => [
            h(QItemLabel, { lines: props.labelLines }, () => props.label || ""),
            props.caption ? h(QItemLabel, { lines: props.captionLines, caption: true }, () => props.caption) : null
          ])
        ];
        props.icon && child[props.switchToggleSide === true ? "push" : "unshift"](
          h(QItemSection, {
            side: props.switchToggleSide === true,
            avatar: props.switchToggleSide !== true
          }, () => h(QIcon, { name: props.icon }))
        );
      }
      props.disable !== true && child[props.switchToggleSide === true ? "unshift" : "push"](
        getToggleIcon()
      );
      return child;
    }
    function getHeader() {
      const data = {
        ref: "item",
        style: props.headerStyle,
        class: props.headerClass,
        dark: isDark.value,
        disable: props.disable,
        dense: props.dense,
        insetLevel: props.headerInsetLevel
      };
      if (isClickable.value === true) {
        data.clickable = true;
        data.onClick = onHeaderClick;
        hasLink.value === true && Object.assign(
          data,
          linkProps.value
        );
      }
      return h(QItem, data, getHeaderChild);
    }
    function getTransitionChild() {
      return withDirectives(
        h("div", {
          key: "e-content",
          class: "q-expansion-item__content relative-position",
          style: contentStyle.value
        }, hSlot(slots.default)),
        [[
          vShow,
          showing.value
        ]]
      );
    }
    function getContent() {
      const node = [
        getHeader(),
        h(QSlideTransition, {
          duration: props.duration,
          onShow,
          onHide
        }, getTransitionChild)
      ];
      if (props.expandSeparator === true) {
        node.push(
          h(QSeparator, {
            class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
            dark: isDark.value
          }),
          h(QSeparator, {
            class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
            dark: isDark.value
          })
        );
      }
      return node;
    }
    props.group !== void 0 && enterGroup();
    onBeforeUnmount(() => {
      exitGroup !== void 0 && exitGroup();
    });
    return () => h("div", { class: classes.value }, [
      h("div", { class: "q-expansion-item__container relative-position" }, getContent())
    ]);
  }
});
const svg = [
  h("g", {
    transform: "matrix(1 0 0 -1 0 80)"
  }, [
    h("rect", {
      width: "10",
      height: "20",
      rx: "3"
    }, [
      h("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "4.3s",
        values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    h("rect", {
      x: "15",
      width: "10",
      height: "80",
      rx: "3"
    }, [
      h("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "2s",
        values: "80;55;33;5;75;23;73;33;12;14;60;80",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    h("rect", {
      x: "30",
      width: "10",
      height: "50",
      rx: "3"
    }, [
      h("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "1.4s",
        values: "50;34;78;23;56;23;34;76;80;54;21;50",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ]),
    h("rect", {
      x: "45",
      width: "10",
      height: "30",
      rx: "3"
    }, [
      h("animate", {
        attributeName: "height",
        begin: "0s",
        dur: "2s",
        values: "30;45;13;80;56;72;45;76;34;23;67;30",
        calcMode: "linear",
        repeatCount: "indefinite"
      })
    ])
  ])
];
var QSpinnerAudio = createComponent({
  name: "QSpinnerAudio",
  props: useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner(props);
    return () => h("svg", {
      class: classes.value,
      fill: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 55 80",
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
  }
});
const _hoisted_1$2 = ["src"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "QueueItem",
  props: {
    trackInfo: null,
    currentlyPlaying: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const paused = computed(() => {
      return audioController.paused.value;
    });
    return (_ctx, _cache) => {
      return props.trackInfo ? withDirectives((openBlock(), createBlock(QItem, {
        key: 0,
        clickable: ""
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QAvatar, { square: "" }, {
                default: withCtx(() => [
                  createBaseVNode("img", {
                    src: props.trackInfo.album.thumbnail.tiny.url
                  }, null, 8, _hoisted_1$2)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, {
                class: normalizeClass({ "text-gt": __props.currentlyPlaying })
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.trackInfo.name._default), 1)
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(QItemLabel, {
                class: normalizeClass({ "text-gt": __props.currentlyPlaying }),
                caption: "",
                lines: "2"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.trackInfo.album.albumName._default), 1)
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          }),
          __props.currentlyPlaying ? (openBlock(), createBlock(QItemSection, {
            key: 0,
            side: ""
          }, {
            default: withCtx(() => [
              !unref(paused) ? (openBlock(), createBlock(QSpinnerAudio, {
                key: 0,
                size: "2em",
                color: "gt"
              })) : createCommentVNode("", true),
              unref(paused) ? (openBlock(), createBlock(QIcon, {
                key: 1,
                size: "2em",
                name: unref(outlinedPause)
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          !__props.currentlyPlaying ? (openBlock(), createBlock(QItemSection, {
            key: 1,
            side: ""
          }, {
            default: withCtx(() => [
              createVNode(QItemLabel, { caption: "" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(formatDuration)(props.trackInfo.duration)), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      })), [
        [Ripple]
      ]) : createCommentVNode("", true);
    };
  }
});
var QueueItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "QueueItem.vue"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DrawerQueue",
  setup(__props) {
    const queuedHistory = computed(() => {
      return queueController.songHistory;
    });
    const queuedFuture = computed(() => {
      return queueController.queue;
    });
    const currentlyPlaying = computed(() => {
      return queueController.currentlyPlaying;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QList, null, {
          default: withCtx(() => [
            createVNode(QExpansionItem, {
              dense: "",
              label: "History",
              "default-opened": ""
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(queuedHistory), (history) => {
                  return openBlock(), createBlock(QueueItem, {
                    key: history.id,
                    "track-info": history,
                    "currently-playing": false
                  }, null, 8, ["track-info"]);
                }), 128)),
                createVNode(QueueItem, {
                  "currently-playing": true,
                  "track-info": unref(currentlyPlaying)
                }, null, 8, ["track-info"])
              ]),
              _: 1
            }),
            createVNode(QExpansionItem, {
              dense: "",
              label: "Next Up",
              "default-opened": ""
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(queuedFuture), (future) => {
                  return openBlock(), createBlock(QueueItem, {
                    key: future.id,
                    "track-info": future,
                    "currently-playing": false
                  }, null, 8, ["track-info"]);
                }), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
var DrawerQueue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "DrawerQueue.vue"]]);
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-medium text-h5" }, " LOGO HERE ", -1);
const _hoisted_2$1 = { class: "text-weight-medium" };
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-medium" }, " Create Playlist ", -1);
const _hoisted_4$1 = { class: "text-weight-medium" };
const __default__$1 = defineComponent({
  name: "DrawerNavigation",
  components: {}
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const router = useRouter();
    const currentPath = computed(() => {
      return router.currentRoute.value.name;
    });
    const navigations = [
      {
        text: "Home",
        icon: outlinedHome,
        route: { name: "home" }
      },
      {
        text: "Search",
        icon: outlinedSearch,
        route: { name: "search" }
      },
      {
        text: "Library",
        icon: outlinedLibraryMusic,
        route: { name: "library" }
      },
      {
        text: "Radio",
        icon: outlinedRadio,
        route: { name: "radio" }
      }
    ];
    const playlistItems = [
      "playlist1",
      "abc",
      "daskdpaosdasd",
      "asdf"
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(QList, { padding: "" }, {
          default: withCtx(() => [
            createVNode(QItem, null, {
              default: withCtx(() => [
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, null, {
                      default: withCtx(() => [
                        _hoisted_1$1
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(QList, { padding: "" }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList(navigations, (link) => {
              return withDirectives(createVNode(QItem, {
                key: link.text,
                clickable: "",
                "inset-level": 0.3,
                to: link.route,
                exact: "",
                active: unref(currentPath) === link.route.name,
                "active-class": "text-white bg-grey-8 text-weight-bolder"
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { avatar: "" }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: link.icon,
                        size: "32px"
                      }, null, 8, ["name"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_2$1, toDisplayString(link.text), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["inset-level", "to", "active"]), [
                [Ripple]
              ]);
            }), 64)),
            createVNode(QSeparator, { class: "q-my-md" }),
            withDirectives((openBlock(), createBlock(QItem, {
              clickable: "",
              "inset-level": 0.3
            }, {
              default: withCtx(() => [
                createVNode(QItemSection, { avatar: "" }, {
                  default: withCtx(() => [
                    createVNode(QIcon, {
                      name: unref(outlinedPlaylistAdd),
                      size: "32px"
                    }, null, 8, ["name"])
                  ]),
                  _: 1
                }),
                createVNode(QItemSection, null, {
                  default: withCtx(() => [
                    createVNode(QItemLabel, null, {
                      default: withCtx(() => [
                        _hoisted_3$1
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["inset-level"])), [
              [Ripple]
            ]),
            (openBlock(), createElementBlock(Fragment, null, renderList(playlistItems, (item) => {
              return withDirectives(createVNode(QItem, {
                key: item,
                clickable: "",
                "inset-level": 0.3
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { avatar: "" }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: unref(outlinedPlaylistPlay),
                        size: "32px"
                      }, null, 8, ["name"])
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_4$1, toDisplayString(item), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["inset-level"]), [
                [Ripple]
              ]);
            }), 64))
          ]),
          _: 1
        })
      ]);
    };
  }
});
var DrawerNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "DrawerNavigation.vue"]]);
const _hoisted_1 = /* @__PURE__ */ createTextVNode("Back");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Forward");
const _hoisted_3 = { class: "q-gutter-sm row items-center no-wrap" };
const _hoisted_4 = /* @__PURE__ */ createTextVNode("About This Site");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Toggle");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Account");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Settings");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Logout");
const __default__ = defineComponent({
  name: "MainLayout",
  components: {
    DrawerNavigation
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    new MediaSessionController();
    const queueDisplayStore = useQueueDisplayStore();
    const showQueue = computed(() => queueDisplayStore.show);
    const q = useQuasar();
    q.dark.set(true);
    setCssVar("primary", "#000000");
    function toggleTheme() {
      q.dark.toggle();
      if (q.dark.isActive) {
        setCssVar("primary", "#000000");
      } else {
        setCssVar("primary", "#ffffff");
      }
    }
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QLayout, { view: "lHh LpR fFf" }, {
        default: withCtx(() => [
          createVNode(QHeader, { bordered: "" }, {
            default: withCtx(() => [
              createVNode(QToolbar, null, {
                default: withCtx(() => [
                  createVNode(QToolbarTitle, null, {
                    default: withCtx(() => [
                      createVNode(QBtn, {
                        round: "",
                        dense: "",
                        flat: "",
                        size: "lg",
                        color: "grey-8",
                        icon: unref(outlinedArrowBack)
                      }, {
                        default: withCtx(() => [
                          createVNode(QTooltip, null, {
                            default: withCtx(() => [
                              _hoisted_1
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["icon"]),
                      createVNode(QBtn, {
                        round: "",
                        dense: "",
                        flat: "",
                        size: "lg",
                        color: "grey-8",
                        icon: unref(outlinedArrowForward)
                      }, {
                        default: withCtx(() => [
                          createVNode(QTooltip, null, {
                            default: withCtx(() => [
                              _hoisted_2
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["icon"])
                    ]),
                    _: 1
                  }),
                  createVNode(QSpace),
                  createBaseVNode("div", _hoisted_3, [
                    _ctx.$q.screen.gt.sm ? (openBlock(), createBlock(QBtn, {
                      key: 0,
                      round: "",
                      dense: "",
                      flat: "",
                      icon: unref(outlinedInfo),
                      onClick: _cache[0] || (_cache[0] = ($event) => unref(queueDisplayStore).toggle())
                    }, {
                      default: withCtx(() => [
                        createVNode(QTooltip, null, {
                          default: withCtx(() => [
                            _hoisted_4
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"])) : createCommentVNode("", true),
                    _ctx.$q.screen.gt.sm ? (openBlock(), createBlock(QBtn, {
                      key: 1,
                      round: "",
                      dense: "",
                      flat: "",
                      icon: unref(q).dark.isActive ? unref(outlinedDarkMode) : unref(outlinedLightMode),
                      onClick: toggleTheme
                    }, {
                      default: withCtx(() => [
                        createVNode(QTooltip, null, {
                          default: withCtx(() => [
                            _hoisted_5
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"])) : createCommentVNode("", true),
                    createVNode(QBtnDropdown, {
                      rounded: "",
                      label: "sqz269",
                      style: { "width": "150px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(QList, null, {
                          default: withCtx(() => [
                            withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, null, {
                                      default: withCtx(() => [
                                        _hoisted_6
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })), [
                              [ClosePopup]
                            ]),
                            withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, null, {
                                      default: withCtx(() => [
                                        _hoisted_7
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })), [
                              [ClosePopup]
                            ]),
                            createVNode(QSeparator, { class: "q-my-md" }),
                            withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
                              default: withCtx(() => [
                                createVNode(QItemSection, null, {
                                  default: withCtx(() => [
                                    createVNode(QItemLabel, null, {
                                      default: withCtx(() => [
                                        _hoisted_8
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })), [
                              [ClosePopup]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QDrawer, {
            "show-if-above": "",
            side: "left",
            width: 270
          }, {
            default: withCtx(() => [
              createVNode(DrawerNavigation)
            ]),
            _: 1
          }),
          createVNode(QDrawer, {
            modelValue: unref(showQueue),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(showQueue) ? showQueue.value = $event : null),
            side: "right",
            width: 270
          }, {
            default: withCtx(() => [
              createVNode(DrawerQueue)
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QPageContainer, null, {
            default: withCtx(() => [
              createVNode(_component_router_view, null, {
                default: withCtx(({ Component }) => [
                  (openBlock(), createBlock(KeepAlive, null, [
                    (openBlock(), createBlock(resolveDynamicComponent(Component)))
                  ], 1024))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QFooter, null, {
            default: withCtx(() => [
              createVNode(PlayerControl)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
var MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "MainLayout.vue"]]);
export { MainLayout as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC4xZGI0ODdhMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyVGl0bGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwYWNlL1FTcGFjZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvYnRuLWdyb3VwL1FCdG5Hcm91cC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvYnRuLWRyb3Bkb3duL1FCdG5Ecm9wZG93bi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdG9vbGJhci9RVG9vbGJhci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhbi1yZW5kZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2hlYWRlci9RSGVhZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS90b3VjaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2RyYXdlci9RRHJhd2VyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdlL1FQYWdlQ29udGFpbmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9mb290ZXIvUUZvb3Rlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2Nyb2xsLW9ic2VydmVyL1FTY3JvbGxPYnNlcnZlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbGF5b3V0L1FMYXlvdXQuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UcmFja0luZm9DYXJkLnZ1ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL3VzZS1zbGlkZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci9RU2xpZGVyLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVkaWFDb250cm9sLnZ1ZSIsIi4uLy4uLy4uL3NyYy9zdG9yZXMvc2hvd1F1ZXVlLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUXVldWVDb250cm9sLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllckNvbnRyb2wudnVlIiwiLi4vLi4vLi4vc3JjL3V0aWxzL01lZGlhU2Vzc2lvbkNvbnRyb2xsZXIudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlLXRyYW5zaXRpb24vUVNsaWRlVHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZXhwYW5zaW9uLWl0ZW0vUUV4cGFuc2lvbkl0ZW0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwaW5uZXIvUVNwaW5uZXJBdWRpby5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1F1ZXVlSXRlbS52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EcmF3ZXJRdWV1ZS52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EcmF3ZXJOYXZpZ2F0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL01haW5MYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbGJhclRpdGxlJyxcblxuICBwcm9wczoge1xuICAgIHNocmluazogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10b29sYmFyX190aXRsZSBlbGxpcHNpcydcbiAgICAgICsgKHByb3BzLnNocmluayA9PT0gdHJ1ZSA/ICcgY29sLXNocmluaycgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBzcGFjZSA9IGgoJ2RpdicsIHsgY2xhc3M6ICdxLXNwYWNlJyB9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNwYWNlJyxcblxuICBzZXR1cCAoKSB7XG4gICAgcmV0dXJuICgpID0+IHNwYWNlXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUJ0bkdyb3VwJyxcblxuICBwcm9wczoge1xuICAgIHVuZWxldmF0ZWQ6IEJvb2xlYW4sXG4gICAgb3V0bGluZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIHB1c2g6IEJvb2xlYW4sXG4gICAgc3RyZXRjaDogQm9vbGVhbixcbiAgICBnbG9zc3k6IEJvb2xlYW4sXG4gICAgc3ByZWFkOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY2xzID0gWyAndW5lbGV2YXRlZCcsICdvdXRsaW5lJywgJ2ZsYXQnLCAncm91bmRlZCcsICdzcXVhcmUnLCAncHVzaCcsICdzdHJldGNoJywgJ2dsb3NzeScgXVxuICAgICAgICAuZmlsdGVyKHQgPT4gcHJvcHNbIHQgXSA9PT0gdHJ1ZSlcbiAgICAgICAgLm1hcCh0ID0+IGBxLWJ0bi1ncm91cC0tJHsgdCB9YCkuam9pbignICcpXG5cbiAgICAgIHJldHVybiBgcS1idG4tZ3JvdXAgcm93IG5vLXdyYXAkeyBjbHMubGVuZ3RoID4gMCA/ICcgJyArIGNscyA6ICcnIH1gXG4gICAgICAgICsgKHByb3BzLnNwcmVhZCA9PT0gdHJ1ZSA/ICcgcS1idG4tZ3JvdXAtLXNwcmVhZCcgOiAnIGlubGluZScpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFCdG5Hcm91cCBmcm9tICcuLi9idG4tZ3JvdXAvUUJ0bkdyb3VwLmpzJ1xuaW1wb3J0IFFNZW51IGZyb20gJy4uL21lbnUvUU1lbnUuanMnXG5cbmltcG9ydCB7IHVzZUJ0blByb3BzIH0gZnJvbSAnLi4vYnRuL3VzZS1idG4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCdG5Ecm9wZG93bicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VCdG5Qcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IEJvb2xlYW4sXG4gICAgc3BsaXQ6IEJvb2xlYW4sXG4gICAgZHJvcGRvd25JY29uOiBTdHJpbmcsXG5cbiAgICBjb250ZW50Q2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgY29udGVudFN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgY292ZXI6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBub1JvdXRlRGlzbWlzczogQm9vbGVhbixcbiAgICBhdXRvQ2xvc2U6IEJvb2xlYW4sXG5cbiAgICBtZW51QW5jaG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tIGVuZCdcbiAgICB9LFxuICAgIG1lbnVTZWxmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndG9wIGVuZCdcbiAgICB9LFxuICAgIG1lbnVPZmZzZXQ6IEFycmF5LFxuXG4gICAgZGlzYWJsZU1haW5CdG46IEJvb2xlYW4sXG4gICAgZGlzYWJsZURyb3Bkb3duOiBCb29sZWFuLFxuXG4gICAgbm9JY29uQW5pbWF0aW9uOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NsaWNrJywgJ2JlZm9yZS1zaG93JywgJ3Nob3cnLCAnYmVmb3JlLWhpZGUnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgY29uc3QgbWVudVJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZSdcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICAgIHx8IChcbiAgICAgICAgICAocHJvcHMuc3BsaXQgPT09IGZhbHNlICYmIHByb3BzLmRpc2FibGVNYWluQnRuID09PSB0cnVlKVxuICAgICAgICAgIHx8IHByb3BzLmRpc2FibGVEcm9wZG93biA9PT0gdHJ1ZVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGljb25DbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1idG4tZHJvcGRvd25fX2Fycm93J1xuICAgICAgKyAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub0ljb25BbmltYXRpb24gPT09IGZhbHNlID8gJyByb3RhdGUtMTgwJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3BsaXQgPT09IGZhbHNlID8gJyBxLWJ0bi1kcm9wZG93bl9fYXJyb3ctY29udGFpbmVyJyA6ICcnKVxuICAgIClcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWVbIHZhbCA/ICdzaG93JyA6ICdoaWRlJyBdKClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc3BsaXQsIGhpZGUpXG5cbiAgICBmdW5jdGlvbiBvbkJlZm9yZVNob3cgKGUpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSB0cnVlXG4gICAgICBlbWl0KCdiZWZvcmUtc2hvdycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TaG93IChlKSB7XG4gICAgICBlbWl0KCdzaG93JywgZSlcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkJlZm9yZUhpZGUgKGUpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgZW1pdCgnYmVmb3JlLWhpZGUnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoZSkge1xuICAgICAgZW1pdCgnaGlkZScsIGUpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrSGlkZSAoZSkge1xuICAgICAgc3RvcChlKVxuICAgICAgaGlkZSgpXG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlIChldnQpIHtcbiAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZS50b2dnbGUoZXZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3cgKGV2dCkge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLnNob3coZXZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGUgKGV2dCkge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLmhpZGUoZXZ0KVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNob3csIGhpZGUsIHRvZ2dsZVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBzaG93KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IEFycm93ID0gW1xuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6IGljb25DbGFzcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5kcm9wZG93bkljb24gfHwgcHJveHkuJHEuaWNvblNldC5hcnJvdy5kcm9wZG93blxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5kaXNhYmxlRHJvcGRvd24gIT09IHRydWUgJiYgQXJyb3cucHVzaChcbiAgICAgICAgaChRTWVudSwge1xuICAgICAgICAgIHJlZjogbWVudVJlZixcbiAgICAgICAgICBjbGFzczogcHJvcHMuY29udGVudENsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5jb250ZW50U3R5bGUsXG4gICAgICAgICAgY292ZXI6IHByb3BzLmNvdmVyLFxuICAgICAgICAgIGZpdDogdHJ1ZSxcbiAgICAgICAgICBwZXJzaXN0ZW50OiBwcm9wcy5wZXJzaXN0ZW50LFxuICAgICAgICAgIG5vUm91dGVEaXNtaXNzOiBwcm9wcy5ub1JvdXRlRGlzbWlzcyxcbiAgICAgICAgICBhdXRvQ2xvc2U6IHByb3BzLmF1dG9DbG9zZSxcbiAgICAgICAgICBhbmNob3I6IHByb3BzLm1lbnVBbmNob3IsXG4gICAgICAgICAgc2VsZjogcHJvcHMubWVudVNlbGYsXG4gICAgICAgICAgb2Zmc2V0OiBwcm9wcy5tZW51T2Zmc2V0LFxuICAgICAgICAgIHNlcGFyYXRlQ2xvc2VQb3B1cDogdHJ1ZSxcbiAgICAgICAgICBvbkJlZm9yZVNob3csXG4gICAgICAgICAgb25TaG93LFxuICAgICAgICAgIG9uQmVmb3JlSGlkZSxcbiAgICAgICAgICBvbkhpZGVcbiAgICAgICAgfSwgc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLnNwbGl0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93biBxLWJ0bi1kcm9wZG93bi0tc2ltcGxlJyxcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLmRpc2FibGVNYWluQnRuID09PSB0cnVlLFxuICAgICAgICAgIG5vV3JhcDogdHJ1ZSxcbiAgICAgICAgICByb3VuZDogZmFsc2UsXG4gICAgICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgICBvbkNsaWNrXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiBoU2xvdChzbG90cy5sYWJlbCwgW10pLmNvbmNhdChBcnJvdyksXG4gICAgICAgICAgbG9hZGluZzogc2xvdHMubG9hZGluZ1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChRQnRuR3JvdXAsIHtcbiAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93biBxLWJ0bi1kcm9wZG93bi0tc3BsaXQgbm8td3JhcCBxLWJ0bi1pdGVtJyxcbiAgICAgICAgb3V0bGluZTogcHJvcHMub3V0bGluZSxcbiAgICAgICAgZmxhdDogcHJvcHMuZmxhdCxcbiAgICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCxcbiAgICAgICAgc3F1YXJlOiBwcm9wcy5zcXVhcmUsXG4gICAgICAgIHB1c2g6IHByb3BzLnB1c2gsXG4gICAgICAgIHVuZWxldmF0ZWQ6IHByb3BzLnVuZWxldmF0ZWQsXG4gICAgICAgIGdsb3NzeTogcHJvcHMuZ2xvc3N5LFxuICAgICAgICBzdHJldGNoOiBwcm9wcy5zdHJldGNoXG4gICAgICB9LCAoKSA9PiBbXG4gICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd24tLWN1cnJlbnQnLFxuICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMuZGlzYWJsZU1haW5CdG4gPT09IHRydWUsXG4gICAgICAgICAgbm9XcmFwOiB0cnVlLFxuICAgICAgICAgIGljb25SaWdodDogcHJvcHMuaWNvblJpZ2h0LFxuICAgICAgICAgIHJvdW5kOiBmYWxzZSxcbiAgICAgICAgICBvbkNsaWNrOiBvbkNsaWNrSGlkZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogc2xvdHMubGFiZWwsXG4gICAgICAgICAgbG9hZGluZzogc2xvdHMubG9hZGluZ1xuICAgICAgICB9KSxcblxuICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICBjbGFzczogJ3EtYnRuLWRyb3Bkb3duX19hcnJvdy1jb250YWluZXIgcS1hbmNob3ItLXNraXAnLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlRHJvcGRvd24gPT09IHRydWUsXG4gICAgICAgICAgb3V0bGluZTogcHJvcHMub3V0bGluZSxcbiAgICAgICAgICBmbGF0OiBwcm9wcy5mbGF0LFxuICAgICAgICAgIHJvdW5kZWQ6IHByb3BzLnJvdW5kZWQsXG4gICAgICAgICAgcHVzaDogcHJvcHMucHVzaCxcbiAgICAgICAgICBzaXplOiBwcm9wcy5zaXplLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICB0ZXh0Q29sb3I6IHByb3BzLnRleHRDb2xvcixcbiAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgcmlwcGxlOiBwcm9wcy5yaXBwbGVcbiAgICAgICAgfSwgKCkgPT4gQXJyb3cpXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbGJhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBpbnNldDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10b29sYmFyIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcidcbiAgICAgICsgKHByb3BzLmluc2V0ID09PSB0cnVlID8gJyBxLXRvb2xiYXItLWluc2V0JyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnXG5cbi8vIHVzaW5nIGl0IHRvIG1hbmFnZSBTU1IgcmVuZGVyaW5nIHdpdGggYmVzdCBwZXJmb3JtYW5jZVxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW5SZW5kZXIgPSByZWYoIWlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSlcblxuICBpZiAoY2FuUmVuZGVyLnZhbHVlID09PSBmYWxzZSkge1xuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjYW5SZW5kZXIudmFsdWUgPSB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjYW5SZW5kZXJcbn1cbiIsImltcG9ydCB7IGgsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQ2FuUmVuZGVyIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhbi1yZW5kZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cywgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCBoYXNPYnNlcnZlciA9IHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcbmNvbnN0IHJlc2l6ZVByb3BzID0gaGFzT2JzZXJ2ZXIgPT09IHRydWVcbiAgPyB7fVxuICA6IHtcbiAgICAgIHN0eWxlOiAnZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTE7JyxcbiAgICAgIHVybDogJ2Fib3V0OmJsYW5rJ1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSZXNpemVPYnNlcnZlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXNpemUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18pIHsgcmV0dXJuIG5vb3AgfVxuXG4gICAgbGV0IHRpbWVyID0gbnVsbCwgdGFyZ2V0RWwsIHNpemUgPSB7IHdpZHRoOiAtMSwgaGVpZ2h0OiAtMSB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyIChpbW1lZGlhdGVseSkge1xuICAgICAgaWYgKGltbWVkaWF0ZWx5ID09PSB0cnVlIHx8IHByb3BzLmRlYm91bmNlID09PSAwIHx8IHByb3BzLmRlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRFdmVudCAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB0aW1lciA9IG51bGxcblxuICAgICAgaWYgKHRhcmdldEVsKSB7XG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHdpZHRoLCBvZmZzZXRIZWlnaHQ6IGhlaWdodCB9ID0gdGFyZ2V0RWxcblxuICAgICAgICBpZiAod2lkdGggIT09IHNpemUud2lkdGggfHwgaGVpZ2h0ICE9PSBzaXplLmhlaWdodCkge1xuICAgICAgICAgIHNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfVxuICAgICAgICAgIGVtaXQoJ3Jlc2l6ZScsIHNpemUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgaWYgKGhhc09ic2VydmVyID09PSB0cnVlKSB7XG4gICAgICBsZXQgb2JzZXJ2ZXJcblxuICAgICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHRhcmdldEVsID0gcHJveHkuJGVsLnBhcmVudE5vZGVcblxuICAgICAgICAgIGlmICh0YXJnZXRFbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIodHJpZ2dlcilcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0RWwpXG4gICAgICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcblxuICAgICAgICBpZiAob2JzZXJ2ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5kaXNjb25uZWN0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0YXJnZXRFbCkgeyAvLyBGRiBmb3IgQW5kcm9pZFxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldEVsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9XG4gICAgZWxzZSB7IC8vIG5vIG9ic2VydmVyLCBzbyBmYWxsYmFjayB0byBvbGQgaWZyYW1lIG1ldGhvZFxuICAgICAgY29uc3QgY2FuUmVuZGVyID0gdXNlQ2FuUmVuZGVyKClcblxuICAgICAgbGV0IGN1ckRvY1ZpZXdcblxuICAgICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcblxuICAgICAgICBpZiAoY3VyRG9jVmlldyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLy8gaU9TIGlzIGZ1enp5LCBuZWVkIHRvIGNoZWNrIGl0IGZpcnN0XG4gICAgICAgICAgaWYgKGN1ckRvY1ZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjdXJEb2NWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRyaWdnZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VyRG9jVmlldyA9IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uT2JqTG9hZCAoKSB7XG4gICAgICAgIGNsZWFudXAoKVxuXG4gICAgICAgIGlmICh0YXJnZXRFbCAmJiB0YXJnZXRFbC5jb250ZW50RG9jdW1lbnQpIHtcbiAgICAgICAgICBjdXJEb2NWaWV3ID0gdGFyZ2V0RWwuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3XG4gICAgICAgICAgY3VyRG9jVmlldy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0cmlnZ2VyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0RWwgPSBwcm94eS4kZWxcbiAgICAgICAgICB0YXJnZXRFbCAmJiBvbk9iakxvYWQoKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgb25CZWZvcmVVbm1vdW50KGNsZWFudXApXG5cbiAgICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kXG4gICAgICBwcm94eS50cmlnZ2VyID0gdHJpZ2dlclxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY2FuUmVuZGVyLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIGgoJ29iamVjdCcsIHtcbiAgICAgICAgICAgIHN0eWxlOiByZXNpemVQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIHRhYmluZGV4OiAtMSwgLy8gZml4IGZvciBGaXJlZm94XG4gICAgICAgICAgICB0eXBlOiAndGV4dC9odG1sJyxcbiAgICAgICAgICAgIGRhdGE6IHJlc2l6ZVByb3BzLnVybCxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgIG9uTG9hZDogb25PYmpMb2FkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FIZWFkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICByZXZlYWxPZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDI1MFxuICAgIH0sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBoZWlnaHRIaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmV2ZWFsJywgJ2ZvY3VzaW4nIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignUUhlYWRlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICB9KVxuXG4gICAgY29uc3Qgc2l6ZSA9IHJlZihwYXJzZUludChwcm9wcy5oZWlnaHRIaW50LCAxMCkpXG4gICAgY29uc3QgcmV2ZWFsZWQgPSByZWYodHJ1ZSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0gnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2l6ZS52YWx1ZSAtICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1oZWFkZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy10b3AnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWhlYWRlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLnRvcCxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2hlYWRlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGwsIHNjcm9sbCA9PiB7XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWUgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsXG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIDw9IHByb3BzLnJldmVhbE9mZnNldFxuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gLSBzY3JvbGwuaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2hlYWRlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJjb25zdCBtb2RpZmllcnNBbGwgPSB7XG4gIGxlZnQ6IHRydWUsXG4gIHJpZ2h0OiB0cnVlLFxuICB1cDogdHJ1ZSxcbiAgZG93bjogdHJ1ZSxcbiAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgdmVydGljYWw6IHRydWVcbn1cblxuY29uc3QgZGlyZWN0aW9uTGlzdCA9IE9iamVjdC5rZXlzKG1vZGlmaWVyc0FsbClcblxubW9kaWZpZXJzQWxsLmFsbCA9IHRydWVcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGlmaWVyRGlyZWN0aW9ucyAobW9kKSB7XG4gIGNvbnN0IGRpciA9IHt9XG5cbiAgZm9yIChjb25zdCBkaXJlY3Rpb24gb2YgZGlyZWN0aW9uTGlzdCkge1xuICAgIGlmIChtb2RbIGRpcmVjdGlvbiBdID09PSB0cnVlKSB7XG4gICAgICBkaXJbIGRpcmVjdGlvbiBdID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhkaXIpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBtb2RpZmllcnNBbGxcbiAgfVxuXG4gIGlmIChkaXIuaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci5sZWZ0ID0gZGlyLnJpZ2h0ID0gdHJ1ZVxuICB9XG4gIGVsc2UgaWYgKGRpci5sZWZ0ID09PSB0cnVlICYmIGRpci5yaWdodCA9PT0gdHJ1ZSkge1xuICAgIGRpci5ob3Jpem9udGFsID0gdHJ1ZVxuICB9XG5cbiAgaWYgKGRpci52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci51cCA9IGRpci5kb3duID0gdHJ1ZVxuICB9XG4gIGVsc2UgaWYgKGRpci51cCA9PT0gdHJ1ZSAmJiBkaXIuZG93biA9PT0gdHJ1ZSkge1xuICAgIGRpci52ZXJ0aWNhbCA9IHRydWVcbiAgfVxuXG4gIGlmIChkaXIuaG9yaXpvbnRhbCA9PT0gdHJ1ZSAmJiBkaXIudmVydGljYWwgPT09IHRydWUpIHtcbiAgICBkaXIuYWxsID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGRpclxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkU3RhcnQgKGV2dCwgY3R4KSB7XG4gIHJldHVybiBjdHguZXZlbnQgPT09IHZvaWQgMFxuICAgICYmIGV2dC50YXJnZXQgIT09IHZvaWQgMFxuICAgICYmIGV2dC50YXJnZXQuZHJhZ2dhYmxlICE9PSB0cnVlXG4gICAgJiYgdHlwZW9mIGN0eC5oYW5kbGVyID09PSAnZnVuY3Rpb24nXG4gICAgJiYgZXZ0LnRhcmdldC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnSU5QVVQnXG4gICAgJiYgKGV2dC5xQ2xvbmVkQnkgPT09IHZvaWQgMCB8fCBldnQucUNsb25lZEJ5LmluZGV4T2YoY3R4LnVpZCkgPT09IC0xKVxufVxuIiwiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRNb2RpZmllckRpcmVjdGlvbnMsIHNob3VsZFN0YXJ0IH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS90b3VjaC5qcydcbmltcG9ydCB7IGFkZEV2dCwgY2xlYW5FdnQsIHBvc2l0aW9uLCBsZWZ0Q2xpY2ssIHByZXZlbnQsIHN0b3AsIHN0b3BBbmRQcmV2ZW50LCBwcmV2ZW50RHJhZ2dhYmxlLCBub29wIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBjbGVhclNlbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IGdldFNTUlByb3BzIGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuZnVuY3Rpb24gZ2V0Q2hhbmdlcyAoZXZ0LCBjdHgsIGlzRmluYWwpIHtcbiAgY29uc3QgcG9zID0gcG9zaXRpb24oZXZ0KVxuICBsZXRcbiAgICBkaXIsXG4gICAgZGlzdFggPSBwb3MubGVmdCAtIGN0eC5ldmVudC54LFxuICAgIGRpc3RZID0gcG9zLnRvcCAtIGN0eC5ldmVudC55LFxuICAgIGFic1ggPSBNYXRoLmFicyhkaXN0WCksXG4gICAgYWJzWSA9IE1hdGguYWJzKGRpc3RZKVxuXG4gIGNvbnN0IGRpcmVjdGlvbiA9IGN0eC5kaXJlY3Rpb25cblxuICBpZiAoZGlyZWN0aW9uLmhvcml6b250YWwgPT09IHRydWUgJiYgZGlyZWN0aW9uLnZlcnRpY2FsICE9PSB0cnVlKSB7XG4gICAgZGlyID0gZGlzdFggPCAwID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5ob3Jpem9udGFsICE9PSB0cnVlICYmIGRpcmVjdGlvbi52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpciA9IGRpc3RZIDwgMCA/ICd1cCcgOiAnZG93bidcbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24udXAgPT09IHRydWUgJiYgZGlzdFkgPCAwKSB7XG4gICAgZGlyID0gJ3VwJ1xuICAgIGlmIChhYnNYID4gYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGRpc3RYIDwgMCkge1xuICAgICAgICBkaXIgPSAnbGVmdCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBkaXN0WCA+IDApIHtcbiAgICAgICAgZGlyID0gJ3JpZ2h0J1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBkaXN0WSA+IDApIHtcbiAgICBkaXIgPSAnZG93bidcbiAgICBpZiAoYWJzWCA+IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBkaXN0WCA8IDApIHtcbiAgICAgICAgZGlyID0gJ2xlZnQnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgZGlzdFggPiAwKSB7XG4gICAgICAgIGRpciA9ICdyaWdodCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgZGlzdFggPCAwKSB7XG4gICAgZGlyID0gJ2xlZnQnXG4gICAgaWYgKGFic1ggPCBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGRpc3RZIDwgMCkge1xuICAgICAgICBkaXIgPSAndXAnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBkaXN0WSA+IDApIHtcbiAgICAgICAgZGlyID0gJ2Rvd24nXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBkaXN0WCA+IDApIHtcbiAgICBkaXIgPSAncmlnaHQnXG4gICAgaWYgKGFic1ggPCBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGRpc3RZIDwgMCkge1xuICAgICAgICBkaXIgPSAndXAnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBkaXN0WSA+IDApIHtcbiAgICAgICAgZGlyID0gJ2Rvd24nXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IHN5bnRoZXRpYyA9IGZhbHNlXG5cbiAgaWYgKGRpciA9PT0gdm9pZCAwICYmIGlzRmluYWwgPT09IGZhbHNlKSB7XG4gICAgaWYgKGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlIHx8IGN0eC5ldmVudC5sYXN0RGlyID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGRpciA9IGN0eC5ldmVudC5sYXN0RGlyXG4gICAgc3ludGhldGljID0gdHJ1ZVxuXG4gICAgaWYgKGRpciA9PT0gJ2xlZnQnIHx8IGRpciA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcG9zLmxlZnQgLT0gZGlzdFhcbiAgICAgIGFic1ggPSAwXG4gICAgICBkaXN0WCA9IDBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwb3MudG9wIC09IGRpc3RZXG4gICAgICBhYnNZID0gMFxuICAgICAgZGlzdFkgPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzeW50aGV0aWMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgZXZ0LFxuICAgICAgdG91Y2g6IGN0eC5ldmVudC5tb3VzZSAhPT0gdHJ1ZSxcbiAgICAgIG1vdXNlOiBjdHguZXZlbnQubW91c2UgPT09IHRydWUsXG4gICAgICBwb3NpdGlvbjogcG9zLFxuICAgICAgZGlyZWN0aW9uOiBkaXIsXG4gICAgICBpc0ZpcnN0OiBjdHguZXZlbnQuaXNGaXJzdCxcbiAgICAgIGlzRmluYWw6IGlzRmluYWwgPT09IHRydWUsXG4gICAgICBkdXJhdGlvbjogRGF0ZS5ub3coKSAtIGN0eC5ldmVudC50aW1lLFxuICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgeDogYWJzWCxcbiAgICAgICAgeTogYWJzWVxuICAgICAgfSxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB4OiBkaXN0WCxcbiAgICAgICAgeTogZGlzdFlcbiAgICAgIH0sXG4gICAgICBkZWx0YToge1xuICAgICAgICB4OiBwb3MubGVmdCAtIGN0eC5ldmVudC5sYXN0WCxcbiAgICAgICAgeTogcG9zLnRvcCAtIGN0eC5ldmVudC5sYXN0WVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sZXQgdWlkID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAndG91Y2gtcGFuJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICd0b3VjaC1wYW4nLFxuXG4gICAgICBiZWZvcmVNb3VudCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgICAgIC8vIGVhcmx5IHJldHVybiwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlICE9PSB0cnVlICYmIGNsaWVudC5oYXMudG91Y2ggIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUV2ZW50IChldnQsIG1vdXNlRXZlbnQpIHtcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlICYmIG1vdXNlRXZlbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RpZmllcnMuc3RvcCA9PT0gdHJ1ZSAmJiBzdG9wKGV2dClcbiAgICAgICAgICAgIG1vZGlmaWVycy5wcmV2ZW50ID09PSB0cnVlICYmIHByZXZlbnQoZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICB1aWQ6ICdxdnRwXycgKyAodWlkKyspLFxuICAgICAgICAgIGhhbmRsZXI6IHZhbHVlLFxuICAgICAgICAgIG1vZGlmaWVycyxcbiAgICAgICAgICBkaXJlY3Rpb246IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhtb2RpZmllcnMpLFxuXG4gICAgICAgICAgbm9vcCxcblxuICAgICAgICAgIG1vdXNlU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSAmJiBsZWZ0Q2xpY2soZXZ0KSkge1xuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgJ21vdmUnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNldXAnLCAnZW5kJywgJ3Bhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdG91Y2hTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcblxuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNobW92ZScsICdtb3ZlJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hjYW5jZWwnLCAnZW5kJywgJ3Bhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hlbmQnLCAnZW5kJywgJ3Bhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgdHJ1ZSlcbiAgICAgICAgICAgIGN0eC5sYXN0RXZ0ID0gZXZ0XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIFN0b3AgcHJvcGFnYXRpb24gc28gcG9zc2libGUgdXBwZXIgdi10b3VjaC1wYW4gZG9uJ3QgY2F0Y2ggdGhpcyBhcyB3ZWxsO1xuICAgICAgICAgICAgKiBJZiB3ZSdyZSBub3QgdGhlIHRhcmdldCAoYmFzZWQgb24gbW9kaWZpZXJzKSwgd2UnbGwgcmUtZW1pdCB0aGUgZXZlbnQgbGF0ZXJcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAobW91c2VFdmVudCA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMuc3RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAqIGFyZSB3ZSBkaXJlY3RseSBzd2l0Y2hpbmcgdG8gZGV0ZWN0ZWQgc3RhdGU/XG4gICAgICAgICAgICAgICogY2xvbmUgZXZlbnQgb25seSBvdGhlcndpc2VcbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uYWxsICE9PSB0cnVlXG4gICAgICAgICAgICAgICAgJiYgKG1vdXNlRXZlbnQgIT09IHRydWUgfHwgY3R4Lm1vZGlmaWVycy5tb3VzZUFsbERpciAhPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBldnQudHlwZS5pbmRleE9mKCdtb3VzZScpID4gLTFcbiAgICAgICAgICAgICAgICAgID8gbmV3IE1vdXNlRXZlbnQoZXZ0LnR5cGUsIGV2dClcbiAgICAgICAgICAgICAgICAgIDogbmV3IFRvdWNoRXZlbnQoZXZ0LnR5cGUsIGV2dClcblxuICAgICAgICAgICAgICAgIGV2dC5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlICYmIHByZXZlbnQoY2xvbmUpXG4gICAgICAgICAgICAgICAgZXZ0LmNhbmNlbEJ1YmJsZSA9PT0gdHJ1ZSAmJiBzdG9wKGNsb25lKVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjbG9uZSwge1xuICAgICAgICAgICAgICAgICAgcUtleUV2ZW50OiBldnQucUtleUV2ZW50LFxuICAgICAgICAgICAgICAgICAgcUNsaWNrT3V0c2lkZTogZXZ0LnFDbGlja091dHNpZGUsXG4gICAgICAgICAgICAgICAgICBxQW5jaG9ySGFuZGxlZDogZXZ0LnFBbmNob3JIYW5kbGVkLFxuICAgICAgICAgICAgICAgICAgcUNsb25lZEJ5OiBldnQucUNsb25lZEJ5ID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgPyBbIGN0eC51aWQgXVxuICAgICAgICAgICAgICAgICAgICA6IGV2dC5xQ2xvbmVkQnkuY29uY2F0KGN0eC51aWQpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGN0eC5pbml0aWFsRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2dC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICBldmVudDogY2xvbmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdG9wKGV2dClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgeyBsZWZ0LCB0b3AgfSA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0ge1xuICAgICAgICAgICAgICB4OiBsZWZ0LFxuICAgICAgICAgICAgICB5OiB0b3AsXG4gICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgIG1vdXNlOiBtb3VzZUV2ZW50ID09PSB0cnVlLFxuICAgICAgICAgICAgICBkZXRlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGlzRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgIGlzRmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBsYXN0WDogbGVmdCxcbiAgICAgICAgICAgICAgbGFzdFk6IHRvcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtb3ZlIChldnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgICAgICAgICAgZGlzdFggPSBwb3MubGVmdCAtIGN0eC5ldmVudC54LFxuICAgICAgICAgICAgICBkaXN0WSA9IHBvcy50b3AgLSBjdHguZXZlbnQueVxuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGJ1Z2d5IGJyb3dzZXIgYmVoYXZpb3IgKGxpa2UgQmxpbmstYmFzZWQgZW5naW5lIG9uZXMgb24gV2luZG93cylcbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSBtb3VzZW1vdmUgZXZlbnQgb2NjdXJzIGV2ZW4gaWYgdGhlcmUncyBubyBtb3ZlbWVudCBhZnRlciBtb3VzZWRvd25cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE2MTQ2NFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NzIxMzQxXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcXVhc2FyZnJhbWV3b3JrL3F1YXNhci9pc3N1ZXMvMTA3MjFcbiAgICAgICAgICAgIGlmIChkaXN0WCA9PT0gMCAmJiBkaXN0WSA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4Lmxhc3RFdnQgPSBldnRcblxuICAgICAgICAgICAgY29uc3QgaXNNb3VzZUV2dCA9IGN0eC5ldmVudC5tb3VzZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZUV2ZW50KGV2dCwgaXNNb3VzZUV2dClcblxuICAgICAgICAgICAgICBpZiAobW9kaWZpZXJzLnByZXNlcnZlQ3Vyc29yICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdncmFiYmluZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpc01vdXNlRXZ0ID09PSB0cnVlICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub24tc2VsZWN0YWJsZScpXG4gICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcblxuICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gd2l0aERlbGF5ZWRGbiA9PiB7XG4gICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHZvaWQgMFxuXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcmVzZXJ2ZUN1cnNvciAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzTW91c2VFdnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aERlbGF5ZWRGbigpXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICB3aXRoRGVsYXllZEZuKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kZXRlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCAhPT0gdHJ1ZSAmJiBoYW5kbGVFdmVudChldnQsIGN0eC5ldmVudC5tb3VzZSlcblxuICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQsIHN5bnRoZXRpYyB9ID0gZ2V0Q2hhbmdlcyhldnQsIGN0eCwgZmFsc2UpXG5cbiAgICAgICAgICAgICAgaWYgKHBheWxvYWQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguaGFuZGxlcihwYXlsb2FkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdHguc3R5bGVDbGVhbnVwID09PSB2b2lkIDAgJiYgY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdFggPSBwYXlsb2FkLnBvc2l0aW9uLmxlZnRcbiAgICAgICAgICAgICAgICAgIGN0eC5ldmVudC5sYXN0WSA9IHBheWxvYWQucG9zaXRpb24udG9wXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdERpciA9IHN5bnRoZXRpYyA9PT0gdHJ1ZSA/IHZvaWQgMCA6IHBheWxvYWQuZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5hbGwgPT09IHRydWVcbiAgICAgICAgICAgICAgfHwgKGlzTW91c2VFdnQgPT09IHRydWUgJiYgY3R4Lm1vZGlmaWVycy5tb3VzZUFsbERpciA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzdGFydCgpXG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kZXRlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgY3R4Lm1vdmUoZXZ0KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgYWJzWCA9IE1hdGguYWJzKGRpc3RYKSxcbiAgICAgICAgICAgICAgYWJzWSA9IE1hdGguYWJzKGRpc3RZKVxuXG4gICAgICAgICAgICBpZiAoYWJzWCAhPT0gYWJzWSkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGN0eC5kaXJlY3Rpb24uaG9yaXpvbnRhbCA9PT0gdHJ1ZSAmJiBhYnNYID4gYWJzWSlcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBhYnNYIDwgYWJzWSlcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBhYnNYIDwgYWJzWSAmJiBkaXN0WSA8IDApXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBhYnNYIDwgYWJzWSAmJiBkaXN0WSA+IDApXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBhYnNYID4gYWJzWSAmJiBkaXN0WCA8IDApXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgYWJzWCA+IGFic1kgJiYgZGlzdFggPiAwKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjdHguZXZlbnQuZGV0ZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmUoZXZ0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0LCB0cnVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVuZCAoZXZ0LCBhYm9ydCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAoYWJvcnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAoKVxuXG4gICAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgIT09IHRydWUgJiYgY3R4LmluaXRpYWxFdmVudCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChjdHguaW5pdGlhbEV2ZW50LmV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUgJiYgY3R4LmhhbmRsZXIoZ2V0Q2hhbmdlcyhldnQgPT09IHZvaWQgMCA/IGN0eC5sYXN0RXZ0IDogZXZ0LCBjdHgpLnBheWxvYWQpXG5cbiAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBnZXRDaGFuZ2VzKGV2dCA9PT0gdm9pZCAwID8gY3R4Lmxhc3RFdnQgOiBldnQsIGN0eCwgdHJ1ZSlcbiAgICAgICAgICAgICAgY29uc3QgZm4gPSAoKSA9PiB7IGN0eC5oYW5kbGVyKHBheWxvYWQpIH1cblxuICAgICAgICAgICAgICBpZiAoY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cChmbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0gdm9pZCAwXG4gICAgICAgICAgICBjdHguaW5pdGlhbEV2ZW50ID0gdm9pZCAwXG4gICAgICAgICAgICBjdHgubGFzdEV2dCA9IHZvaWQgMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLl9fcXRvdWNocGFuID0gY3R4XG5cbiAgICAgICAgbW9kaWZpZXJzLm1vdXNlID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSA/ICdDYXB0dXJlJyA6ICcnIH1gIF1cbiAgICAgICAgXSlcblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2htb3ZlJywgJ25vb3AnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgXSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCBiaW5kaW5ncykge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaHBhblxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChiaW5kaW5ncy5vbGRWYWx1ZSAhPT0gYmluZGluZ3MudmFsdWUpIHtcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICAgIGN0eC5oYW5kbGVyID0gYmluZGluZ3MudmFsdWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdHguZGlyZWN0aW9uID0gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKGJpbmRpbmdzLm1vZGlmaWVycylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hwYW5cblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAvLyBlbWl0IHRoZSBlbmQgZXZlbnQgd2hlbiB0aGUgZGlyZWN0aXZlIGlzIGRlc3Ryb3llZCB3aGlsZSBhY3RpdmVcbiAgICAgICAgICAvLyB0aGlzIGlzIG9ubHkgbmVlZGVkIGluIFRvdWNoUGFuIGJlY2F1c2UgdGhlIHJlc3Qgb2YgdGhlIHRvdWNoIGRpcmVjdGl2ZXMgZG8gbm90IGVtaXQgYW4gZW5kIGV2ZW50XG4gICAgICAgICAgLy8gdGhlIGNvbmRpdGlvbiBpcyBhbHNvIGNoZWNrZWQgaW4gdGhlIHN0YXJ0IG9mIGZ1bmN0aW9uIGJ1dCB3ZSBhdm9pZCB0aGUgY2FsbFxuICAgICAgICAgIGN0eC5ldmVudCAhPT0gdm9pZCAwICYmIGN0eC5lbmQoKVxuXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcbiAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwICE9PSB2b2lkIDAgJiYgY3R4LnN0eWxlQ2xlYW51cCgpXG5cbiAgICAgICAgICBkZWxldGUgZWwuX19xdG91Y2hwYW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsImltcG9ydCB7IGgsIHdpdGhEaXJlY3RpdmVzLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUhpc3RvcnkgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtaGlzdG9yeS5qcydcbmltcG9ydCB1c2VNb2RlbFRvZ2dsZSwgeyB1c2VNb2RlbFRvZ2dsZVByb3BzLCB1c2VNb2RlbFRvZ2dsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzJ1xuaW1wb3J0IHVzZVByZXZlbnRTY3JvbGwgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcHJldmVudC1zY3JvbGwuanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10aW1lb3V0LmpzJ1xuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IGhTbG90LCBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmNvbnN0IGR1cmF0aW9uID0gMTUwXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRHJhd2VyJyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlTW9kZWxUb2dnbGVQcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBzaWRlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbGVmdCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnbGVmdCcsICdyaWdodCcgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwXG4gICAgfSxcblxuICAgIG1pbmk6IEJvb2xlYW4sXG4gICAgbWluaVRvT3ZlcmxheTogQm9vbGVhbixcbiAgICBtaW5pV2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDU3XG4gICAgfSxcblxuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEwMjNcbiAgICB9LFxuICAgIHNob3dJZkFib3ZlOiBCb29sZWFuLFxuXG4gICAgYmVoYXZpb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdkZWZhdWx0JywgJ2Rlc2t0b3AnLCAnbW9iaWxlJyBdLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfSxcblxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGVsZXZhdGVkOiBCb29sZWFuLFxuXG4gICAgb3ZlcmxheTogQm9vbGVhbixcbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIG5vU3dpcGVPcGVuOiBCb29sZWFuLFxuICAgIG5vU3dpcGVDbG9zZTogQm9vbGVhbixcbiAgICBub1N3aXBlQmFja2Ryb3A6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogW1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlRW1pdHMsXG4gICAgJ29uLWxheW91dCcsICdtaW5pLXN0YXRlJ1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IHByZXZlbnRCb2R5U2Nyb2xsIH0gPSB1c2VQcmV2ZW50U2Nyb2xsKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignUURyYXdlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICB9KVxuXG4gICAgbGV0IGxhc3REZXNrdG9wU3RhdGUsIHRpbWVyTWluaSwgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXJcblxuICAgIGNvbnN0IGJlbG93QnJlYWtwb2ludCA9IHJlZihcbiAgICAgIHByb3BzLmJlaGF2aW9yID09PSAnbW9iaWxlJ1xuICAgICAgfHwgKHByb3BzLmJlaGF2aW9yICE9PSAnZGVza3RvcCcgJiYgJGxheW91dC50b3RhbFdpZHRoLnZhbHVlIDw9IHByb3BzLmJyZWFrcG9pbnQpXG4gICAgKVxuXG4gICAgY29uc3QgaXNNaW5pID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1pbmkgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3Qgc2l6ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGlzTWluaS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLm1pbmlXaWR0aFxuICAgICAgICA6IHByb3BzLndpZHRoXG4gICAgKSlcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoXG4gICAgICBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBoaWRlT25Sb3V0ZUNoYW5nZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlXG4gICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IG9uU2NyZWVuT3ZlcmxheS52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTaG93IChldnQsIG5vRXZlbnQpIHtcbiAgICAgIGFkZFRvSGlzdG9yeSgpXG5cbiAgICAgIGV2dCAhPT0gZmFsc2UgJiYgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGFwcGx5UG9zaXRpb24oMClcblxuICAgICAgaWYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvdGhlckluc3RhbmNlID0gJGxheW91dC5pbnN0YW5jZXNbIG90aGVyU2lkZS52YWx1ZSBdXG4gICAgICAgIGlmIChvdGhlckluc3RhbmNlICE9PSB2b2lkIDAgJiYgb3RoZXJJbnN0YW5jZS5iZWxvd0JyZWFrcG9pbnQgPT09IHRydWUpIHtcbiAgICAgICAgICBvdGhlckluc3RhbmNlLmhpZGUoZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBhcHBseUJhY2tkcm9wKDEpXG4gICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgJiYgcHJldmVudEJvZHlTY3JvbGwodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICAgIGV2dCAhPT0gZmFsc2UgJiYgc2V0U2Nyb2xsYWJsZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZXZ0ICE9PSBmYWxzZSAmJiBzZXRTY3JvbGxhYmxlKHRydWUpXG4gICAgICAgIG5vRXZlbnQgIT09IHRydWUgJiYgZW1pdCgnc2hvdycsIGV2dClcbiAgICAgIH0sIGR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUhpZGUgKGV2dCwgbm9FdmVudCkge1xuICAgICAgcmVtb3ZlRnJvbUhpc3RvcnkoKVxuXG4gICAgICBldnQgIT09IGZhbHNlICYmICRsYXlvdXQuYW5pbWF0ZSgpXG5cbiAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiBzaXplLnZhbHVlKVxuXG4gICAgICBjbGVhbnVwKClcblxuICAgICAgbm9FdmVudCAhPT0gdHJ1ZSAmJiByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbWl0KCdoaWRlJywgZXZ0KVxuICAgICAgfSwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaG93LCBoaWRlIH0gPSB1c2VNb2RlbFRvZ2dsZSh7XG4gICAgICBzaG93aW5nLFxuICAgICAgaGlkZU9uUm91dGVDaGFuZ2UsXG4gICAgICBoYW5kbGVTaG93LFxuICAgICAgaGFuZGxlSGlkZVxuICAgIH0pXG5cbiAgICBjb25zdCB7IGFkZFRvSGlzdG9yeSwgcmVtb3ZlRnJvbUhpc3RvcnkgfSA9IHVzZUhpc3Rvcnkoc2hvd2luZywgaGlkZSwgaGlkZU9uUm91dGVDaGFuZ2UpXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgIGJlbG93QnJlYWtwb2ludCxcbiAgICAgIGhpZGVcbiAgICB9XG5cbiAgICBjb25zdCByaWdodFNpZGUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5zaWRlID09PSAncmlnaHQnKVxuXG4gICAgY29uc3Qgc3RhdGVEaXJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgKCRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSAqIChyaWdodFNpZGUudmFsdWUgPT09IHRydWUgPyAxIDogLTEpXG4gICAgKVxuXG4gICAgY29uc3QgZmxhZ0JhY2tkcm9wQmcgPSByZWYoMClcbiAgICBjb25zdCBmbGFnUGFubmluZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBmbGFnTWluaUFuaW1hdGUgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgZmxhZ0NvbnRlbnRQb3NpdGlvbiA9IHJlZiggLy8gc3RhcnRpbmcgd2l0aCBcImhpZGRlblwiIGZvciBTU1JcbiAgICAgIHNpemUudmFsdWUgKiBzdGF0ZURpcmVjdGlvbi52YWx1ZVxuICAgIClcblxuICAgIGNvbnN0IG90aGVyU2lkZSA9IGNvbXB1dGVkKCgpID0+IChyaWdodFNpZGUudmFsdWUgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnKSlcbiAgICBjb25zdCBvZmZzZXQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2UgJiYgcHJvcHMub3ZlcmxheSA9PT0gZmFsc2VcbiAgICAgICAgPyAocHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUudmFsdWUpXG4gICAgICAgIDogMFxuICAgICkpXG5cbiAgICBjb25zdCBmaXhlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSB0cnVlXG4gICAgICB8fCBwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlXG4gICAgICB8fCAkbGF5b3V0LnZpZXcudmFsdWUuaW5kZXhPZihyaWdodFNpZGUudmFsdWUgPyAnUicgOiAnTCcpID4gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBvbkxheW91dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZVxuICAgIClcblxuICAgIGNvbnN0IG9uU2NyZWVuT3ZlcmxheSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSB0cnVlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgKVxuXG4gICAgY29uc3QgYmFja2Ryb3BDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAnZnVsbHNjcmVlbiBxLWRyYXdlcl9fYmFja2Ryb3AnXG4gICAgICArIChzaG93aW5nLnZhbHVlID09PSBmYWxzZSAmJiBmbGFnUGFubmluZy52YWx1ZSA9PT0gZmFsc2UgPyAnIGhpZGRlbicgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBiYWNrZHJvcFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwwLDAsJHsgZmxhZ0JhY2tkcm9wQmcudmFsdWUgKiAwLjQgfSlgXG4gICAgfSkpXG5cbiAgICBjb25zdCBoZWFkZXJTbG90ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5yb3dzLnZhbHVlLnRvcFsgMiBdID09PSAncidcbiAgICAgICAgOiAkbGF5b3V0LnJvd3MudmFsdWUudG9wWyAwIF0gPT09ICdsJ1xuICAgICkpXG5cbiAgICBjb25zdCBmb290ZXJTbG90ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbVsgMiBdID09PSAncidcbiAgICAgICAgOiAkbGF5b3V0LnJvd3MudmFsdWUuYm90dG9tWyAwIF0gPT09ICdsJ1xuICAgICkpXG5cbiAgICBjb25zdCBhYm92ZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3NzID0ge31cblxuICAgICAgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlICYmIGhlYWRlclNsb3QudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy50b3AgPSBgJHsgJGxheW91dC5oZWFkZXIub2Zmc2V0IH1weGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy50b3AgPSBgJHsgJGxheW91dC5oZWFkZXIuc2l6ZSB9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlICYmIGZvb3RlclNsb3QudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy5ib3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIub2Zmc2V0IH1weGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkbGF5b3V0LmZvb3Rlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy5ib3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIuc2l6ZSB9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogYCR7IHNpemUudmFsdWUgfXB4YCxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkeyBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlIH1weClgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBzdHlsZVxuICAgICAgICA6IE9iamVjdC5hc3NpZ24oc3R5bGUsIGFib3ZlU3R5bGUudmFsdWUpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRlbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1kcmF3ZXJfX2NvbnRlbnQgZml0ICdcbiAgICAgICsgKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgPyAnc2Nyb2xsJyA6ICdvdmVyZmxvdy1hdXRvJylcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWRyYXdlciBxLWRyYXdlci0tJHsgcHJvcHMuc2lkZSB9YFxuICAgICAgKyAoZmxhZ01pbmlBbmltYXRlLnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tbWluaS1hbmltYXRlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIG5vLXRyYW5zaXRpb24nXG4gICAgICAgICAgOiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycpXG4gICAgICApXG4gICAgICArIChcbiAgICAgICAgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIGZpeGVkIHEtZHJhd2VyLS1vbi10b3AgcS1kcmF3ZXItLW1vYmlsZSBxLWRyYXdlci0tdG9wLXBhZGRpbmcnXG4gICAgICAgICAgOiBgIHEtZHJhd2VyLS0keyBpc01pbmkudmFsdWUgPT09IHRydWUgPyAnbWluaScgOiAnc3RhbmRhcmQnIH1gXG4gICAgICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgfHwgb25MYXlvdXQudmFsdWUgIT09IHRydWUgPyAnIGZpeGVkJyA6ICcnKVxuICAgICAgICAgICsgKHByb3BzLm92ZXJsYXkgPT09IHRydWUgfHwgcHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLW9uLXRvcCcgOiAnJylcbiAgICAgICAgICArIChoZWFkZXJTbG90LnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tdG9wLXBhZGRpbmcnIDogJycpXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgb3BlbkRpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIHByb3BzLm5vU3dpcGVPcGVuICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHByb3BzLnNpZGUgOiBvdGhlclNpZGUudmFsdWVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25PcGVuUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250ZW50Q2xvc2VEaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBpZiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9Td2lwZUNsb3NlICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IG90aGVyU2lkZS52YWx1ZSA6IHByb3BzLnNpZGVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25DbG9zZVBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgY29uc3QgYmFja2Ryb3BDbG9zZURpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9Td2lwZUJhY2tkcm9wICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IG90aGVyU2lkZS52YWx1ZSA6IHByb3BzLnNpZGVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25DbG9zZVBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQmVsb3dCcmVha3BvaW50ICgpIHtcbiAgICAgIHVwZGF0ZUxvY2FsKGJlbG93QnJlYWtwb2ludCwgKFxuICAgICAgICBwcm9wcy5iZWhhdmlvciA9PT0gJ21vYmlsZSdcbiAgICAgICAgfHwgKHByb3BzLmJlaGF2aW9yICE9PSAnZGVza3RvcCcgJiYgJGxheW91dC50b3RhbFdpZHRoLnZhbHVlIDw9IHByb3BzLmJyZWFrcG9pbnQpXG4gICAgICApKVxuICAgIH1cblxuICAgIHdhdGNoKGJlbG93QnJlYWtwb2ludCwgdmFsID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHsgLy8gZnJvbSBsZyB0byB4c1xuICAgICAgICBsYXN0RGVza3RvcFN0YXRlID0gc2hvd2luZy52YWx1ZVxuICAgICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGhpZGUoZmFsc2UpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgcHJvcHMub3ZlcmxheSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcHJvcHMuYmVoYXZpb3IgIT09ICdtb2JpbGUnXG4gICAgICAgICYmIGxhc3REZXNrdG9wU3RhdGUgIT09IGZhbHNlXG4gICAgICApIHsgLy8gZnJvbSB4cyB0byBsZ1xuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFwcGx5UG9zaXRpb24oMClcbiAgICAgICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICAgICAgY2xlYW51cCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2hvdyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zaWRlLCAobmV3U2lkZSwgb2xkU2lkZSkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaW5zdGFuY2VzWyBvbGRTaWRlIF0gPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzWyBvbGRTaWRlIF0gPSB2b2lkIDBcbiAgICAgICAgJGxheW91dFsgb2xkU2lkZSBdLnNwYWNlID0gZmFsc2VcbiAgICAgICAgJGxheW91dFsgb2xkU2lkZSBdLm9mZnNldCA9IDBcbiAgICAgIH1cblxuICAgICAgJGxheW91dC5pbnN0YW5jZXNbIG5ld1NpZGUgXSA9IGluc3RhbmNlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0uc2l6ZSA9IHNpemUudmFsdWVcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5zcGFjZSA9IG9uTGF5b3V0LnZhbHVlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0ub2Zmc2V0ID0gb2Zmc2V0LnZhbHVlXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQudG90YWxXaWR0aCwgKCkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUgfHwgZG9jdW1lbnQucVNjcm9sbFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVCZWxvd0JyZWFrcG9pbnQoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IHByb3BzLmJlaGF2aW9yICsgcHJvcHMuYnJlYWtwb2ludCxcbiAgICAgIHVwZGF0ZUJlbG93QnJlYWtwb2ludFxuICAgIClcblxuICAgIHdhdGNoKCRsYXlvdXQuaXNDb250YWluZXIsIHZhbCA9PiB7XG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByZXZlbnRCb2R5U2Nyb2xsKHZhbCAhPT0gdHJ1ZSlcbiAgICAgIHZhbCA9PT0gdHJ1ZSAmJiB1cGRhdGVCZWxvd0JyZWFrcG9pbnQoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgkbGF5b3V0LnNjcm9sbGJhcldpZHRoLCAoKSA9PiB7XG4gICAgICBhcHBseVBvc2l0aW9uKHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAwIDogdm9pZCAwKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7IHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgdmFsKSB9KVxuXG4gICAgd2F0Y2gob25MYXlvdXQsIHZhbCA9PiB7XG4gICAgICBlbWl0KCdvbi1sYXlvdXQnLCB2YWwpXG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaChyaWdodFNpZGUsICgpID0+IHsgYXBwbHlQb3NpdGlvbigpIH0pXG5cbiAgICB3YXRjaChzaXplLCB2YWwgPT4ge1xuICAgICAgYXBwbHlQb3NpdGlvbigpXG4gICAgICB1cGRhdGVTaXplT25MYXlvdXQocHJvcHMubWluaVRvT3ZlcmxheSwgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5taW5pVG9PdmVybGF5LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHZhbCwgc2l6ZS52YWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gJHEubGFuZy5ydGwsICgpID0+IHsgYXBwbHlQb3NpdGlvbigpIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5taW5pLCAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBhbmltYXRlTWluaSgpXG4gICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKGlzTWluaSwgdmFsID0+IHsgZW1pdCgnbWluaS1zdGF0ZScsIHZhbCkgfSlcblxuICAgIGZ1bmN0aW9uIGFwcGx5UG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgcG9zaXRpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gMCA6IHNpemUudmFsdWVcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IE1hdGguYWJzKHBvc2l0aW9uKSA9PT0gc2l6ZS52YWx1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcG9zaXRpb24gKz0gc3RhdGVEaXJlY3Rpb24udmFsdWUgKiAkbGF5b3V0LnNjcm9sbGJhcldpZHRoLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJhY2tkcm9wICh4KSB7XG4gICAgICBmbGFnQmFja2Ryb3BCZy52YWx1ZSA9IHhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxhYmxlICh2KSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB2ID09PSB0cnVlXG4gICAgICAgID8gJ3JlbW92ZSdcbiAgICAgICAgOiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdhZGQnIDogJycpXG5cbiAgICAgIGFjdGlvbiAhPT0gJycgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3RbIGFjdGlvbiBdKCdxLWJvZHktLWRyYXdlci10b2dnbGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVNaW5pICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lck1pbmkpXG5cbiAgICAgIGlmICh2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgLy8gbmVlZCB0byBzcGVlZCBpdCB1cCBhbmQgYXBwbHkgaXQgaW1tZWRpYXRlbHksXG4gICAgICAgIC8vIGV2ZW4gZmFzdGVyIHRoYW4gVnVlJ3MgbmV4dFRpY2shXG4gICAgICAgIHZtLnByb3h5LiRlbC5jbGFzc0xpc3QuYWRkKCdxLWRyYXdlci0tbWluaS1hbmltYXRlJylcbiAgICAgIH1cblxuICAgICAgZmxhZ01pbmlBbmltYXRlLnZhbHVlID0gdHJ1ZVxuICAgICAgdGltZXJNaW5pID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGlmICh2bSAmJiB2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgICB2bS5wcm94eS4kZWwuY2xhc3NMaXN0LnJlbW92ZSgncS1kcmF3ZXItLW1pbmktYW5pbWF0ZScpXG4gICAgICAgIH1cbiAgICAgIH0sIDE1MClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk9wZW5QYW4gKGV2dCkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbWlnaHQgY2FwdHVyZSBhbmQgdHJpZ2dlciB0aGlzXG4gICAgICAgIC8vIGV2ZW4gaWYgRHJhd2VyIGhhcyBqdXN0IGJlZW4gb3BlbmVkIChidXQgYW5pbWF0aW9uIGlzIHN0aWxsIHBlbmRpbmcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICB3aWR0aCA9IHNpemUudmFsdWUsXG4gICAgICAgIHBvc2l0aW9uID0gYmV0d2VlbihldnQuZGlzdGFuY2UueCwgMCwgd2lkdGgpXG5cbiAgICAgIGlmIChldnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBwb3NpdGlvbiA+PSBNYXRoLm1pbig3NSwgd2lkdGgpXG5cbiAgICAgICAgaWYgKG9wZW5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNob3coKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiB3aWR0aClcbiAgICAgICAgfVxuXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGFwcGx5UG9zaXRpb24oXG4gICAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHJpZ2h0U2lkZS52YWx1ZSAhPT0gdHJ1ZSA6IHJpZ2h0U2lkZS52YWx1ZSlcbiAgICAgICAgICA/IE1hdGgubWF4KHdpZHRoIC0gcG9zaXRpb24sIDApXG4gICAgICAgICAgOiBNYXRoLm1pbigwLCBwb3NpdGlvbiAtIHdpZHRoKVxuICAgICAgKVxuICAgICAgYXBwbHlCYWNrZHJvcChcbiAgICAgICAgYmV0d2Vlbihwb3NpdGlvbiAvIHdpZHRoLCAwLCAxKVxuICAgICAgKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbG9zZVBhbiAoZXZ0KSB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyBzb21lIGJyb3dzZXJzIG1pZ2h0IGNhcHR1cmUgYW5kIHRyaWdnZXIgdGhpc1xuICAgICAgICAvLyBldmVuIGlmIERyYXdlciBoYXMganVzdCBiZWVuIGNsb3NlZCAoYnV0IGFuaW1hdGlvbiBpcyBzdGlsbCBwZW5kaW5nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBzaXplLnZhbHVlLFxuICAgICAgICBkaXIgPSBldnQuZGlyZWN0aW9uID09PSBwcm9wcy5zaWRlLFxuICAgICAgICBwb3NpdGlvbiA9ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGRpciAhPT0gdHJ1ZSA6IGRpcilcbiAgICAgICAgICA/IGJldHdlZW4oZXZ0LmRpc3RhbmNlLngsIDAsIHdpZHRoKVxuICAgICAgICAgIDogMFxuXG4gICAgICBpZiAoZXZ0LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gTWF0aC5hYnMocG9zaXRpb24pIDwgTWF0aC5taW4oNzUsIHdpZHRoKVxuXG4gICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICBhcHBseUJhY2tkcm9wKGJldHdlZW4oMSAtIHBvc2l0aW9uIC8gd2lkdGgsIDAsIDEpKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChmYWxzZSlcbiAgICAgIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUocHJvcHMuc2lkZSwgcHJvcCwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsIChwcm9wLCB2YWwpIHtcbiAgICAgIGlmIChwcm9wLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemVPbkxheW91dCAobWluaVRvT3ZlcmxheSwgc2l6ZSkge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgbWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUpXG4gICAgfVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IGluc3RhbmNlXG4gICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIG9uTGF5b3V0LnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWVcbiAgICAgICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGVtaXQoJ29uLWxheW91dCcsIG9uTGF5b3V0LnZhbHVlKVxuICAgICAgZW1pdCgnbWluaS1zdGF0ZScsIGlzTWluaS52YWx1ZSlcblxuICAgICAgbGFzdERlc2t0b3BTdGF0ZSA9IHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlXG5cbiAgICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gaGFuZGxlU2hvdyA6IGhhbmRsZUhpZGVcbiAgICAgICAgYWN0aW9uKGZhbHNlLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoJGxheW91dC50b3RhbFdpZHRoLnZhbHVlICE9PSAwKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGFsbCBjb21wdXRlZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIGhhdmUgYmVlbiB1cGRhdGVkIGJlZm9yZSBjYWxsaW5nIGhhbmRsZVNob3cvaGFuZGxlSGlkZSgpXG4gICAgICAgIG5leHRUaWNrKGZuKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgPSB3YXRjaCgkbGF5b3V0LnRvdGFsV2lkdGgsICgpID0+IHtcbiAgICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIoKVxuICAgICAgICBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlciA9IHZvaWQgMFxuXG4gICAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSBmYWxzZSAmJiBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2hvdyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlciAhPT0gdm9pZCAwICYmIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyKClcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lck1pbmkpXG5cbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgY2xlYW51cCgpXG5cbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlc1sgcHJvcHMuc2lkZSBdID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlc1sgcHJvcHMuc2lkZSBdID0gdm9pZCAwXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXVxuXG4gICAgICBpZiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHByb3BzLm5vU3dpcGVPcGVuID09PSBmYWxzZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBrZXk6ICdvcGVuJyxcbiAgICAgICAgICAgICAgY2xhc3M6IGBxLWRyYXdlcl9fb3BlbmVyIGZpeGVkLSR7IHByb3BzLnNpZGUgfWAsXG4gICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBvcGVuRGlyZWN0aXZlLnZhbHVlXG4gICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoRGlyKFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogJ2JhY2tkcm9wJyxcbiAgICAgICAgICAgICAgY2xhc3M6IGJhY2tkcm9wQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHN0eWxlOiBiYWNrZHJvcFN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGhpZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICAnYmFja2Ryb3AnLFxuICAgICAgICAgICAgcHJvcHMubm9Td2lwZUJhY2tkcm9wICE9PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgICAoKSA9PiBiYWNrZHJvcENsb3NlRGlyZWN0aXZlLnZhbHVlXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1pbmkgPSBpc01pbmkudmFsdWUgPT09IHRydWUgJiYgc2xvdHMubWluaSAhPT0gdm9pZCAwXG4gICAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAga2V5OiAnJyArIG1pbmksIC8vIHJlcXVpcmVkIG90aGVyd2lzZSBWdWUgd2lsbCBub3QgZGlmZiBjb3JyZWN0bHlcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgY29udGVudENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgYXR0cnMuY2xhc3NcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG1pbmkgPT09IHRydWVcbiAgICAgICAgICA/IHNsb3RzLm1pbmkoKVxuICAgICAgICAgIDogaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgICAgKVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMuZWxldmF0ZWQgPT09IHRydWUgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250ZW50LnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaERpcihcbiAgICAgICAgICAnYXNpZGUnLFxuICAgICAgICAgIHsgcmVmOiAnY29udGVudCcsIGNsYXNzOiBjbGFzc2VzLnZhbHVlLCBzdHlsZTogc3R5bGUudmFsdWUgfSxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICdjb250ZW50Y2xvc2UnLFxuICAgICAgICAgIHByb3BzLm5vU3dpcGVDbG9zZSAhPT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgKCkgPT4gY29udGVudENsb3NlRGlyZWN0aXZlLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRyYXdlci1jb250YWluZXInIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBwcm92aWRlLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgcGFnZUNvbnRhaW5lcktleSwgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBhZ2VDb250YWluZXInLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignUVBhZ2VDb250YWluZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgfSlcblxuICAgIHByb3ZpZGUocGFnZUNvbnRhaW5lcktleSwgdHJ1ZSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3NzID0ge31cblxuICAgICAgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nVG9wID0gYCR7ICRsYXlvdXQuaGVhZGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQucmlnaHQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyBgcGFkZGluZyR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ0xlZnQnIDogJ1JpZ2h0JyB9YCBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzLnBhZGRpbmdCb3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5sZWZ0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdSaWdodCcgOiAnTGVmdCcgfWAgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1wYWdlLWNvbnRhaW5lcicsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24gfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUZvb3RlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgcmV2ZWFsOiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGVsZXZhdGVkOiBCb29sZWFuLFxuXG4gICAgaGVpZ2h0SGludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3JldmVhbCcsICdmb2N1c2luJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksICgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FGb290ZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgfSlcblxuICAgIGNvbnN0IHNpemUgPSByZWYocGFyc2VJbnQocHJvcHMuaGVpZ2h0SGludCwgMTApKVxuICAgIGNvbnN0IHJldmVhbGVkID0gcmVmKHRydWUpXG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gcmVmKFxuICAgICAgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uLnZhbHVlID09PSB0cnVlIHx8ICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAwXG4gICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgKVxuXG4gICAgY29uc3QgZml4ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgICB8fCAkbGF5b3V0LnZpZXcudmFsdWUuaW5kZXhPZignRicpID4gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5jb250YWluZXJIZWlnaHQudmFsdWVcbiAgICAgICAgOiB3aW5kb3dIZWlnaHQudmFsdWVcbiAgICApKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gJGxheW91dC5zY3JvbGwudmFsdWUucG9zaXRpb24gKyBjb250YWluZXJIZWlnaHQudmFsdWUgKyBzaXplLnZhbHVlIC0gJGxheW91dC5oZWlnaHQudmFsdWVcbiAgICAgIHJldHVybiBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMFxuICAgIH0pXG5cbiAgICBjb25zdCBoaWRkZW4gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSB8fCAoZml4ZWQudmFsdWUgPT09IHRydWUgJiYgcmV2ZWFsZWQudmFsdWUgIT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgcmV2ZWFsT25Gb2N1cyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIGhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWZvb3RlciBxLWxheW91dF9fc2VjdGlvbi0tbWFyZ2luYWwgJ1xuICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgPyAnZml4ZWQnIDogJ2Fic29sdXRlJykgKyAnLWJvdHRvbSdcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWZvb3Rlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChoaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtZm9vdGVyLS1oaWRkZW4nIDogJycpXG4gICAgICArIChcbiAgICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAgID8gJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycgKyAoZml4ZWQudmFsdWUgIT09IHRydWUgPyAnIGhpZGRlbicgOiAnJylcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbSxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2Zvb3RlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJldmVhbGVkICgpIHtcbiAgICAgIGlmIChwcm9wcy5yZXZlYWwgIT09IHRydWUpIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3QgeyBkaXJlY3Rpb24sIHBvc2l0aW9uLCBpbmZsZWN0aW9uUG9pbnQgfSA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlXG5cbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCAoXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ3VwJ1xuICAgICAgICB8fCBwb3NpdGlvbiAtIGluZmxlY3Rpb25Qb2ludCA8IDEwMFxuICAgICAgICB8fCAkbGF5b3V0LmhlaWdodC52YWx1ZSAtIGNvbnRhaW5lckhlaWdodC52YWx1ZSAtIHBvc2l0aW9uIC0gc2l6ZS52YWx1ZSA8IDMwMFxuICAgICAgKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzaW4gKGV2dCkge1xuICAgICAgaWYgKHJldmVhbE9uRm9jdXMudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2ZvY3VzaW4nLCBldnQpXG4gICAgfVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCB2YWwpXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgfSlcblxuICAgIHdhdGNoKG9mZnNldCwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5yZXZlYWwsIHZhbCA9PiB7XG4gICAgICB2YWwgPT09IGZhbHNlICYmIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIH0pXG5cbiAgICB3YXRjaChyZXZlYWxlZCwgdmFsID0+IHtcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICBlbWl0KCdyZXZlYWwnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKFsgc2l6ZSwgJGxheW91dC5zY3JvbGwsICRsYXlvdXQuaGVpZ2h0IF0sIHVwZGF0ZVJldmVhbGVkKVxuXG4gICAgd2F0Y2goKCkgPT4gJHEuc2NyZWVuLmhlaWdodCwgdmFsID0+IHtcbiAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgJiYgdXBkYXRlTG9jYWwod2luZG93SGVpZ2h0LCB2YWwpXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmZvb3RlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmZvb3RlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIF0pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdmb290ZXInLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIG9uRm9jdXNpblxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0LCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBnZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzLCBub29wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5cbmNvbnN0IHsgcGFzc2l2ZSB9ID0gbGlzdGVuT3B0c1xuY29uc3QgYXhpc1ZhbHVlcyA9IFsgJ2JvdGgnLCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNjcm9sbE9ic2VydmVyJyxcblxuICBwcm9wczoge1xuICAgIGF4aXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBheGlzVmFsdWVzLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ3ZlcnRpY2FsJ1xuICAgIH0sXG5cbiAgICBkZWJvdW5jZTogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Njcm9sbCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3Qgc2Nyb2xsID0ge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LFxuXG4gICAgICBkaXJlY3Rpb246ICdkb3duJyxcbiAgICAgIGRpcmVjdGlvbkNoYW5nZWQ6IGZhbHNlLFxuXG4gICAgICBkZWx0YToge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGluZmxlY3Rpb25Qb2ludDoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2xlYXJUaW1lciA9IG51bGwsIGxvY2FsU2Nyb2xsVGFyZ2V0LCBwYXJlbnRFbFxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCAoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBlbWl0RXZlbnQgKCkge1xuICAgICAgY2xlYXJUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVyKClcblxuICAgICAgY29uc3QgdG9wID0gTWF0aC5tYXgoMCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCkpXG4gICAgICBjb25zdCBsZWZ0ID0gZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgICAgdG9wOiB0b3AgLSBzY3JvbGwucG9zaXRpb24udG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0IC0gc2Nyb2xsLnBvc2l0aW9uLmxlZnRcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAocHJvcHMuYXhpcyA9PT0gJ3ZlcnRpY2FsJyAmJiBkZWx0YS50b3AgPT09IDApXG4gICAgICAgIHx8IChwcm9wcy5heGlzID09PSAnaG9yaXpvbnRhbCcgJiYgZGVsdGEubGVmdCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VyRGlyID0gTWF0aC5hYnMoZGVsdGEudG9wKSA+PSBNYXRoLmFicyhkZWx0YS5sZWZ0KVxuICAgICAgICA/IChkZWx0YS50b3AgPCAwID8gJ3VwJyA6ICdkb3duJylcbiAgICAgICAgOiAoZGVsdGEubGVmdCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnKVxuXG4gICAgICBzY3JvbGwucG9zaXRpb24gPSB7IHRvcCwgbGVmdCB9XG4gICAgICBzY3JvbGwuZGlyZWN0aW9uQ2hhbmdlZCA9IHNjcm9sbC5kaXJlY3Rpb24gIT09IGN1ckRpclxuICAgICAgc2Nyb2xsLmRlbHRhID0gZGVsdGFcblxuICAgICAgaWYgKHNjcm9sbC5kaXJlY3Rpb25DaGFuZ2VkID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPSBjdXJEaXJcbiAgICAgICAgc2Nyb2xsLmluZmxlY3Rpb25Qb2ludCA9IHNjcm9sbC5wb3NpdGlvblxuICAgICAgfVxuXG4gICAgICBlbWl0KCdzY3JvbGwnLCB7IC4uLnNjcm9sbCB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChwYXJlbnRFbCwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJpZ2dlciwgcGFzc2l2ZSlcbiAgICAgIHRyaWdnZXIodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmlnZ2VyLCBwYXNzaXZlKVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIgKGltbWVkaWF0ZWx5KSB7XG4gICAgICBpZiAoaW1tZWRpYXRlbHkgPT09IHRydWUgfHwgcHJvcHMuZGVib3VuY2UgPT09IDAgfHwgcHJvcHMuZGVib3VuY2UgPT09ICcwJykge1xuICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2xlYXJUaW1lciA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBbIHRpbWVyLCBmbiBdID0gcHJvcHMuZGVib3VuY2VcbiAgICAgICAgICA/IFsgc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKSwgY2xlYXJUaW1lb3V0IF1cbiAgICAgICAgICA6IFsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGVtaXRFdmVudCksIGNhbmNlbEFuaW1hdGlvbkZyYW1lIF1cblxuICAgICAgICBjbGVhclRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgIGZuKHRpbWVyKVxuICAgICAgICAgIGNsZWFyVGltZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHBhcmVudEVsID0gcHJveHkuJGVsLnBhcmVudE5vZGVcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZXIoKVxuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICB0cmlnZ2VyLFxuICAgICAgZ2V0UG9zaXRpb246ICgpID0+IHNjcm9sbFxuICAgIH0pXG5cbiAgICByZXR1cm4gbm9vcFxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCByZWFjdGl2ZSwgY29tcHV0ZWQsIHdhdGNoLCBwcm92aWRlLCBvblVubW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24gfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgUVNjcm9sbE9ic2VydmVyIGZyb20gJy4uL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTGF5b3V0JyxcblxuICBwcm9wczoge1xuICAgIGNvbnRhaW5lcjogQm9vbGVhbixcbiAgICB2aWV3OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaGhoIGxwciBmZmYnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IC9eKGh8bCloKGh8cikgbHByIChmfGwpZihmfHIpJC8udGVzdCh2LnRvTG93ZXJDYXNlKCkpXG4gICAgfSxcblxuICAgIG9uU2Nyb2xsOiBGdW5jdGlvbixcbiAgICBvblNjcm9sbEhlaWdodDogRnVuY3Rpb24sXG4gICAgb25SZXNpemU6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICAvLyBwYWdlIHJlbGF0ZWRcbiAgICBjb25zdCBoZWlnaHQgPSByZWYoJHEuc2NyZWVuLmhlaWdodClcbiAgICBjb25zdCB3aWR0aCA9IHJlZihwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyAwIDogJHEuc2NyZWVuLndpZHRoKVxuICAgIGNvbnN0IHNjcm9sbCA9IHJlZih7IHBvc2l0aW9uOiAwLCBkaXJlY3Rpb246ICdkb3duJywgaW5mbGVjdGlvblBvaW50OiAwIH0pXG5cbiAgICAvLyBjb250YWluZXIgb25seSBwcm9wXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gcmVmKDApXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSByZWYoaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uLnZhbHVlID09PSB0cnVlID8gMCA6IGdldFNjcm9sbGJhcldpZHRoKCkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxheW91dCBxLWxheW91dC0tJ1xuICAgICAgKyAocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gJ2NvbnRhaW5lcml6ZWQnIDogJ3N0YW5kYXJkJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmNvbnRhaW5lciA9PT0gZmFsc2VcbiAgICAgICAgPyB7IG1pbkhlaWdodDogJHEuc2NyZWVuLmhlaWdodCArICdweCcgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgLy8gdXNlZCBieSBjb250YWluZXIgb25seVxuICAgIGNvbnN0IHRhcmdldFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7IFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF06IGAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGNvbnN0IHRhcmdldENoaWxkU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gMFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIF06IDAsXG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgLSR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weGAsXG4gICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weClgXG4gICAgICAgICAgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gb25QYWdlU2Nyb2xsIChkYXRhKSB7XG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlIHx8IGRvY3VtZW50LnFTY3JvbGxQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbi50b3AsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkYXRhLmRpcmVjdGlvbixcbiAgICAgICAgICBkaXJlY3Rpb25DaGFuZ2VkOiBkYXRhLmRpcmVjdGlvbkNoYW5nZWQsXG4gICAgICAgICAgaW5mbGVjdGlvblBvaW50OiBkYXRhLmluZmxlY3Rpb25Qb2ludC50b3AsXG4gICAgICAgICAgZGVsdGE6IGRhdGEuZGVsdGEudG9wXG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGwudmFsdWUgPSBpbmZvXG4gICAgICAgIHByb3BzLm9uU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsJywgaW5mbylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ2VSZXNpemUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0OiBuZXdIZWlnaHQsIHdpZHRoOiBuZXdXaWR0aCB9ID0gZGF0YVxuICAgICAgbGV0IHJlc2l6ZWQgPSBmYWxzZVxuXG4gICAgICBpZiAoaGVpZ2h0LnZhbHVlICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgcmVzaXplZCA9IHRydWVcbiAgICAgICAgaGVpZ2h0LnZhbHVlID0gbmV3SGVpZ2h0XG4gICAgICAgIHByb3BzLm9uU2Nyb2xsSGVpZ2h0ICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsLWhlaWdodCcsIG5ld0hlaWdodClcbiAgICAgICAgdXBkYXRlU2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgfVxuICAgICAgaWYgKHdpZHRoLnZhbHVlICE9PSBuZXdXaWR0aCkge1xuICAgICAgICByZXNpemVkID0gdHJ1ZVxuICAgICAgICB3aWR0aC52YWx1ZSA9IG5ld1dpZHRoXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNpemVkID09PSB0cnVlICYmIHByb3BzLm9uUmVzaXplICE9PSB2b2lkIDApIHtcbiAgICAgICAgZW1pdCgncmVzaXplJywgZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNvbnRhaW5lclJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgaWYgKGNvbnRhaW5lckhlaWdodC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodC52YWx1ZSA9IGhlaWdodFxuICAgICAgICB1cGRhdGVTY3JvbGxiYXJXaWR0aCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsYmFyV2lkdGggKCkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGhlaWdodC52YWx1ZSA+IGNvbnRhaW5lckhlaWdodC52YWx1ZVxuICAgICAgICAgID8gZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgICAgIDogMFxuXG4gICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSA9IHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGltZXJcblxuICAgIGNvbnN0ICRsYXlvdXQgPSB7XG4gICAgICBpbnN0YW5jZXM6IHt9LFxuICAgICAgdmlldzogY29tcHV0ZWQoKCkgPT4gcHJvcHMudmlldyksXG4gICAgICBpc0NvbnRhaW5lcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuY29udGFpbmVyKSxcblxuICAgICAgcm9vdFJlZixcblxuICAgICAgaGVpZ2h0LFxuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgc2Nyb2xsYmFyV2lkdGgsXG4gICAgICB0b3RhbFdpZHRoOiBjb21wdXRlZCgoKSA9PiB3aWR0aC52YWx1ZSArIHNjcm9sbGJhcldpZHRoLnZhbHVlKSxcblxuICAgICAgcm93czogY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gcHJvcHMudmlldy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IHJvd3NbIDAgXS5zcGxpdCgnJyksXG4gICAgICAgICAgbWlkZGxlOiByb3dzWyAxIF0uc3BsaXQoJycpLFxuICAgICAgICAgIGJvdHRvbTogcm93c1sgMiBdLnNwbGl0KCcnKVxuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgaGVhZGVyOiByZWFjdGl2ZSh7IHNpemU6IDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuICAgICAgcmlnaHQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGZvb3RlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGxlZnQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcblxuICAgICAgc2Nyb2xsLFxuXG4gICAgICBhbmltYXRlICgpIHtcbiAgICAgICAgaWYgKHRpbWVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgICB0aW1lciA9IHZvaWQgMFxuICAgICAgICB9LCAxNTUpXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGUgKHBhcnQsIHByb3AsIHZhbCkge1xuICAgICAgICAkbGF5b3V0WyBwYXJ0IF1bIHByb3AgXSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3ZpZGUobGF5b3V0S2V5LCAkbGF5b3V0KVxuXG4gICAgLy8gcHJldmVudCBzY3JvbGxiYXIgZmxpY2tlciB3aGlsZSByZXNpemluZyB3aW5kb3cgaGVpZ2h0XG4gICAgLy8gaWYgbm8gcGFnZSBzY3JvbGxiYXIgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSAmJiBnZXRTY3JvbGxiYXJXaWR0aCgpID4gMCkge1xuICAgICAgbGV0IHRpbWVyID0gbnVsbFxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3RvcmVTY3JvbGxiYXIgKCkge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1zY3JvbGxiYXInKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoaWRlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIHNjcm9sbGJhciB0aGVuIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuXG4gICAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA+ICRxLnNjcmVlbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQocmVzdG9yZVNjcm9sbGJhciwgMzAwKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxFdmVudCAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCAmJiBhY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHJlc3RvcmVTY3JvbGxiYXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93WyBgJHsgYWN0aW9uIH1FdmVudExpc3RlbmVyYCBdKCdyZXNpemUnLCBoaWRlU2Nyb2xsYmFyKVxuICAgICAgfVxuXG4gICAgICB3YXRjaChcbiAgICAgICAgKCkgPT4gKHByb3BzLmNvbnRhaW5lciAhPT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZScpLFxuICAgICAgICB1cGRhdGVTY3JvbGxFdmVudFxuICAgICAgKVxuXG4gICAgICBwcm9wcy5jb250YWluZXIgIT09IHRydWUgJiYgdXBkYXRlU2Nyb2xsRXZlbnQoJ2FkZCcpXG5cbiAgICAgIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnQoJ3JlbW92ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7IG9uU2Nyb2xsOiBvblBhZ2VTY3JvbGwgfSksXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvblBhZ2VSZXNpemUgfSlcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGxheW91dCA9IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcmVmOiBwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyB2b2lkIDAgOiByb290UmVmLFxuICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgIH0sIGNvbnRlbnQpXG5cbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0LWNvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW4nLFxuICAgICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHsgb25SZXNpemU6IG9uQ29udGFpbmVyUmVzaXplIH0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgICBzdHlsZTogdGFyZ2V0U3R5bGUudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHRhcmdldENoaWxkU3R5bGUudmFsdWVcbiAgICAgICAgICAgIH0sIFsgbGF5b3V0IF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxheW91dFxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZCBjbGFzcz1cIm15LWNhcmQgYmctYmxhY2tcIiBmbGF0IHYtaWY9XCJzb25nUXVldWUuY3VycmVudGx5UGxheWluZyAhPT0gdW5kZWZpbmVkXCI+XG4gICAgPHEtY2FyZC1zZWN0aW9uIGhvcml6b250YWw+XG4gICAgICA8cS1pbWdcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEyNXB4OyBtYXgtd2lkdGg6IDEyNXB4XCJcbiAgICAgICAgOnNyYz1cInNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmFsYnVtLnRodW1ibmFpbC5zbWFsbC51cmxcIlxuICAgICAgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+e3sgc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcubmFtZS5fZGVmYXVsdCB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTJcIj57eyBzb25nUXVldWUuY3VycmVudGx5UGxheWluZy5hbGJ1bS5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxIHRleHQtZ3JleSBxLXB5LXNtXCI+e3sgc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcuYWxidW0uYWxidW1BcnRpc3RbMF0ubmFtZSB9fTwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyB2ZXJ0aWNhbCBjbGFzcz1cImp1c3RpZnktYXJvdW5kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtYnRuIGZsYXQgcm91bmQgc2l6ZT1cIm1kXCIgY29sb3I9XCJyZWRcIiA6aWNvbj1cIm91dGxpbmVkRmF2b3JpdGVCb3JkZXJcIiAvPlxuICAgICAgICA8cS1idG4gZmxhdCByb3VuZCBzaXplPVwibWRcIiBjb2xvcj1cImFjY2VudFwiIDppY29uPVwib3V0bGluZWRQbGF5bGlzdEFkZENpcmNsZVwiIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gIDwvcS1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1RyYWNrSW5mb0NhcmQnXG59XG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheWxpc3RBZGRDaXJjbGUsXG4gIG91dGxpbmVkRmF2b3JpdGVCb3JkZXJcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHtxdWV1ZUNvbnRyb2xsZXJ9IGZyb20gJ2Jvb3Qvc29uZ1F1ZXVlJztcblxuY29uc3Qgc29uZ1F1ZXVlID0gcXVldWVDb250cm9sbGVyO1xuXG4vLyBzb25nUXVldWUuJHN1YnNjcmliZSgobXV0YXRpb24sIHN0YXRlKSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKG11dGF0aW9uLnN0b3JlSWQpXG4vLyAgIGlmIChtdXRhdGlvbi5zdG9yZUlkICE9PSAnY3VycmVudFRyYWNrJykge1xuLy9cbi8vICAgfVxuLy8gICBjb25zb2xlLmxvZyhzdGF0ZS5jdXJyZW50VHJhY2spXG4vLyB9KVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUluamVjdCB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBwb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMuanMnXG5pbXBvcnQgeyBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IG1hcmtlclByZWZpeENsYXNzID0gJ3Etc2xpZGVyX19tYXJrZXItbGFiZWxzJ1xuY29uc3QgZGVmYXVsdE1hcmtlckNvbnZlcnRGbiA9IHYgPT4gKHsgdmFsdWU6IHYgfSlcbmNvbnN0IGRlZmF1bHRNYXJrZXJMYWJlbFJlbmRlckZuID0gKHsgbWFya2VyIH0pID0+IGgoJ2RpdicsIHtcbiAga2V5OiBtYXJrZXIudmFsdWUsXG4gIHN0eWxlOiBtYXJrZXIuc3R5bGUsXG4gIGNsYXNzOiBtYXJrZXIuY2xhc3Nlc1xufSwgbWFya2VyLmxhYmVsKVxuXG4vLyBQR0RPV04sIExFRlQsIERPV04sIFBHVVAsIFJJR0hULCBVUFxuZXhwb3J0IGNvbnN0IGtleUNvZGVzID0gWyAzNCwgMzcsIDQwLCAzMywgMzksIDM4IF1cblxuZXhwb3J0IGNvbnN0IHVzZVNsaWRlclByb3BzID0ge1xuICAuLi51c2VEYXJrUHJvcHMsXG4gIC4uLnVzZUZvcm1Qcm9wcyxcblxuICBtaW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMFxuICB9LFxuICBtYXg6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMTAwXG4gIH0sXG4gIGlubmVyTWluOiBOdW1iZXIsXG4gIGlubmVyTWF4OiBOdW1iZXIsXG5cbiAgc3RlcDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICAgIHZhbGlkYXRvcjogdiA9PiB2ID49IDBcbiAgfSxcblxuICBzbmFwOiBCb29sZWFuLFxuXG4gIHZlcnRpY2FsOiBCb29sZWFuLFxuICByZXZlcnNlOiBCb29sZWFuLFxuXG4gIGhpZGVTZWxlY3Rpb246IEJvb2xlYW4sXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgbWFya2VyTGFiZWxzQ2xhc3M6IFN0cmluZyxcblxuICBsYWJlbDogQm9vbGVhbixcbiAgbGFiZWxDb2xvcjogU3RyaW5nLFxuICBsYWJlbFRleHRDb2xvcjogU3RyaW5nLFxuICBsYWJlbEFsd2F5czogQm9vbGVhbixcbiAgc3dpdGNoTGFiZWxTaWRlOiBCb29sZWFuLFxuXG4gIG1hcmtlcnM6IFsgQm9vbGVhbiwgTnVtYmVyIF0sXG4gIG1hcmtlckxhYmVsczogWyBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBGdW5jdGlvbiBdLFxuICBzd2l0Y2hNYXJrZXJMYWJlbHNTaWRlOiBCb29sZWFuLFxuXG4gIHRyYWNrSW1nOiBTdHJpbmcsXG4gIHRyYWNrQ29sb3I6IFN0cmluZyxcbiAgaW5uZXJUcmFja0ltZzogU3RyaW5nLFxuICBpbm5lclRyYWNrQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uSW1nOiBTdHJpbmcsXG5cbiAgdGh1bWJTaXplOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcyMHB4J1xuICB9LFxuICB0cmFja1NpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzRweCdcbiAgfSxcblxuICBkaXNhYmxlOiBCb29sZWFuLFxuICByZWFkb25seTogQm9vbGVhbixcbiAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICB0aHVtYkNvbG9yOiBTdHJpbmcsXG4gIHRodW1iUGF0aDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnTSA0LCAxMCBhIDYsNiAwIDEsMCAxMiwwIGEgNiw2IDAgMSwwIC0xMiwwJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJFbWl0cyA9IFsgJ3BhbicsICd1cGRhdGU6bW9kZWxWYWx1ZScsICdjaGFuZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgdXBkYXRlVmFsdWUsIHVwZGF0ZVBvc2l0aW9uLCBnZXREcmFnZ2luZywgZm9ybUF0dHJzIH0pIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgc2xvdHMsIHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gIGNvbnN0IGFjdGl2ZSA9IHJlZihmYWxzZSlcbiAgY29uc3QgcHJldmVudEZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBmb2N1cyA9IHJlZihmYWxzZSlcbiAgY29uc3QgZHJhZ2dpbmcgPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgYXhpcyA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICctLXYnIDogJy0taCcpKVxuICBjb25zdCBsYWJlbFNpZGUgPSBjb21wdXRlZCgoKSA9PiAnLScgKyAocHJvcHMuc3dpdGNoTGFiZWxTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcpKVxuXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZVxuICAgICAgOiBwcm9wcy5yZXZlcnNlICE9PSAoJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICkpXG5cbiAgY29uc3QgaW5uZXJNaW4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOYU4ocHJvcHMuaW5uZXJNaW4pID09PSB0cnVlIHx8IHByb3BzLmlubmVyTWluIDwgcHJvcHMubWluXG4gICAgICA/IHByb3BzLm1pblxuICAgICAgOiBwcm9wcy5pbm5lck1pblxuICApKVxuICBjb25zdCBpbm5lck1heCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1heCkgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNYXggPiBwcm9wcy5tYXhcbiAgICAgID8gcHJvcHMubWF4XG4gICAgICA6IHByb3BzLmlubmVyTWF4XG4gICkpXG5cbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZVxuICAgICYmIGlubmVyTWluLnZhbHVlIDwgaW5uZXJNYXgudmFsdWVcbiAgKSlcblxuICBjb25zdCBkZWNpbWFscyA9IGNvbXB1dGVkKCgpID0+IChTdHJpbmcocHJvcHMuc3RlcCkudHJpbSgpLnNwbGl0KCcuJylbIDEgXSB8fCAnJykubGVuZ3RoKVxuICBjb25zdCBzdGVwID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnN0ZXAgPT09IDAgPyAxIDogcHJvcHMuc3RlcCkpXG4gIGNvbnN0IHRhYmluZGV4ID0gY29tcHV0ZWQoKCkgPT4gKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gcHJvcHMudGFiaW5kZXggfHwgMCA6IC0xKSlcblxuICBjb25zdCB0cmFja0xlbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLm1heCAtIHByb3BzLm1pbilcbiAgY29uc3QgaW5uZXJCYXJMZW4gPSBjb21wdXRlZCgoKSA9PiBpbm5lck1heC52YWx1ZSAtIGlubmVyTWluLnZhbHVlKVxuXG4gIGNvbnN0IGlubmVyTWluUmF0aW8gPSBjb21wdXRlZCgoKSA9PiBjb252ZXJ0TW9kZWxUb1JhdGlvKGlubmVyTWluLnZhbHVlKSlcbiAgY29uc3QgaW5uZXJNYXhSYXRpbyA9IGNvbXB1dGVkKCgpID0+IGNvbnZlcnRNb2RlbFRvUmF0aW8oaW5uZXJNYXgudmFsdWUpKVxuXG4gIGNvbnN0IHBvc2l0aW9uUHJvcCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgPyAoaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdib3R0b20nIDogJ3RvcCcpXG4gICAgICA6IChpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JylcbiAgKSlcblxuICBjb25zdCBzaXplUHJvcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdoZWlnaHQnIDogJ3dpZHRoJykpXG4gIGNvbnN0IHRoaWNrbmVzc1Byb3AgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnd2lkdGgnIDogJ2hlaWdodCcpKVxuICBjb25zdCBvcmllbnRhdGlvbiA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcpKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0ge1xuICAgICAgcm9sZTogJ3NsaWRlcicsXG4gICAgICAnYXJpYS12YWx1ZW1pbic6IGlubmVyTWluLnZhbHVlLFxuICAgICAgJ2FyaWEtdmFsdWVtYXgnOiBpbm5lck1heC52YWx1ZSxcbiAgICAgICdhcmlhLW9yaWVudGF0aW9uJzogb3JpZW50YXRpb24udmFsdWUsXG4gICAgICAnZGF0YS1zdGVwJzogcHJvcHMuc3RlcFxuICAgIH1cblxuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICBhY2NbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnJlYWRvbmx5ID09PSB0cnVlKSB7XG4gICAgICBhY2NbICdhcmlhLXJlYWRvbmx5JyBdID0gJ3RydWUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgIGBxLXNsaWRlciBxLXNsaWRlciR7IGF4aXMudmFsdWUgfSBxLXNsaWRlci0tJHsgYWN0aXZlLnZhbHVlID09PSB0cnVlID8gJycgOiAnaW4nIH1hY3RpdmUgaW5saW5lIG5vLXdyYXAgYFxuICAgICsgKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3JvdycgOiAnY29sdW1uJylcbiAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnIHEtc2xpZGVyLS1lbmFibGVkJyArIChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWVkaXRhYmxlJyA6ICcnKSlcbiAgICArIChmb2N1cy52YWx1ZSA9PT0gJ2JvdGgnID8gJyBxLXNsaWRlci0tZm9jdXMnIDogJycpXG4gICAgKyAocHJvcHMubGFiZWwgfHwgcHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1sYWJlbCcgOiAnJylcbiAgICArIChwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWxhYmVsLWFsd2F5cycgOiAnJylcbiAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1kYXJrJyA6ICcnKVxuICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZGVuc2UgcS1zbGlkZXItLWRlbnNlJyArIGF4aXMudmFsdWUgOiAnJylcbiAgKVxuXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uQ2xhc3MgKG5hbWUpIHtcbiAgICBjb25zdCBjbHMgPSAncS1zbGlkZXJfXycgKyBuYW1lXG4gICAgcmV0dXJuIGAkeyBjbHMgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfSR7IGxhYmVsU2lkZS52YWx1ZSB9YFxuICB9XG4gIGZ1bmN0aW9uIGdldEF4aXNDbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNscyA9ICdxLXNsaWRlcl9fJyArIG5hbWVcbiAgICByZXR1cm4gYCR7IGNscyB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9YFxuICB9XG5cbiAgY29uc3Qgc2VsZWN0aW9uQmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgY29sb3IgPSBwcm9wcy5zZWxlY3Rpb25Db2xvciB8fCBwcm9wcy5jb2xvclxuICAgIHJldHVybiAncS1zbGlkZXJfX3NlbGVjdGlvbiBhYnNvbHV0ZSdcbiAgICAgICsgKGNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgY29sb3IgfWAgOiAnJylcbiAgfSlcbiAgY29uc3QgbWFya2VyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRBeGlzQ2xhc3MoJ21hcmtlcnMnKSArICcgYWJzb2x1dGUgb3ZlcmZsb3ctaGlkZGVuJylcbiAgY29uc3QgdHJhY2tDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldEF4aXNDbGFzcygndHJhY2stY29udGFpbmVyJykpXG4gIGNvbnN0IHBpbkNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygncGluJykpXG4gIGNvbnN0IGxhYmVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCdsYWJlbCcpKVxuICBjb25zdCB0ZXh0Q29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCd0ZXh0LWNvbnRhaW5lcicpKVxuICBjb25zdCBtYXJrZXJMYWJlbHNDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgZ2V0UG9zaXRpb25DbGFzcygnbWFya2VyLWxhYmVscy1jb250YWluZXInKVxuICAgICsgKHByb3BzLm1hcmtlckxhYmVsc0NsYXNzICE9PSB2b2lkIDAgPyBgICR7IHByb3BzLm1hcmtlckxhYmVsc0NsYXNzIH1gIDogJycpXG4gIClcblxuICBjb25zdCB0cmFja0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS1zbGlkZXJfX3RyYWNrIHJlbGF0aXZlLXBvc2l0aW9uIG5vLW91dGxpbmUnXG4gICAgKyAocHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy50cmFja0NvbG9yIH1gIDogJycpXG4gIClcbiAgY29uc3QgdHJhY2tTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7IFsgdGhpY2tuZXNzUHJvcC52YWx1ZSBdOiBwcm9wcy50cmFja1NpemUgfVxuICAgIGlmIChwcm9wcy50cmFja0ltZyAhPT0gdm9pZCAwKSB7XG4gICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy50cmFja0ltZyB9KSAhaW1wb3J0YW50YFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgaW5uZXJCYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3Etc2xpZGVyX19pbm5lciBhYnNvbHV0ZSdcbiAgICArIChwcm9wcy5pbm5lclRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuaW5uZXJUcmFja0NvbG9yIH1gIDogJycpXG4gIClcbiAgY29uc3QgaW5uZXJCYXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogaW5uZXJNaW5SYXRpby52YWx1ZSB9JWAsXG4gICAgICBbIHNpemVQcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAoaW5uZXJNYXhSYXRpby52YWx1ZSAtIGlubmVyTWluUmF0aW8udmFsdWUpIH0lYFxuICAgIH1cbiAgICBpZiAocHJvcHMuaW5uZXJUcmFja0ltZyAhPT0gdm9pZCAwKSB7XG4gICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy5pbm5lclRyYWNrSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBmdW5jdGlvbiBjb252ZXJ0UmF0aW9Ub01vZGVsIChyYXRpbykge1xuICAgIGNvbnN0IHsgbWluLCBtYXgsIHN0ZXAgfSA9IHByb3BzXG4gICAgbGV0IG1vZGVsID0gbWluICsgcmF0aW8gKiAobWF4IC0gbWluKVxuXG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICBjb25zdCBtb2R1bG8gPSAobW9kZWwgLSBtaW4pICUgc3RlcFxuICAgICAgbW9kZWwgKz0gKE1hdGguYWJzKG1vZHVsbykgPj0gc3RlcCAvIDIgPyAobW9kdWxvIDwgMCA/IC0xIDogMSkgKiBzdGVwIDogMCkgLSBtb2R1bG9cbiAgICB9XG5cbiAgICBpZiAoZGVjaW1hbHMudmFsdWUgPiAwKSB7XG4gICAgICBtb2RlbCA9IHBhcnNlRmxvYXQobW9kZWwudG9GaXhlZChkZWNpbWFscy52YWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGJldHdlZW4obW9kZWwsIGlubmVyTWluLnZhbHVlLCBpbm5lck1heC52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRNb2RlbFRvUmF0aW8gKG1vZGVsKSB7XG4gICAgcmV0dXJuIHRyYWNrTGVuLnZhbHVlID09PSAwXG4gICAgICA/IDBcbiAgICAgIDogKG1vZGVsIC0gcHJvcHMubWluKSAvIHRyYWNrTGVuLnZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBnZXREcmFnZ2luZ1JhdGlvIChldnQsIGRyYWdnaW5nKSB7XG4gICAgY29uc3RcbiAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICB2YWwgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IGJldHdlZW4oKHBvcy50b3AgLSBkcmFnZ2luZy50b3ApIC8gZHJhZ2dpbmcuaGVpZ2h0LCAwLCAxKVxuICAgICAgICA6IGJldHdlZW4oKHBvcy5sZWZ0IC0gZHJhZ2dpbmcubGVmdCkgLyBkcmFnZ2luZy53aWR0aCwgMCwgMSlcblxuICAgIHJldHVybiBiZXR3ZWVuKFxuICAgICAgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/IDEuMCAtIHZhbCA6IHZhbCxcbiAgICAgIGlubmVyTWluUmF0aW8udmFsdWUsXG4gICAgICBpbm5lck1heFJhdGlvLnZhbHVlXG4gICAgKVxuICB9XG5cbiAgY29uc3QgbWFya2VyU3RlcCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc051bWJlcihwcm9wcy5tYXJrZXJzKSA9PT0gdHJ1ZSA/IHByb3BzLm1hcmtlcnMgOiBzdGVwLnZhbHVlKVxuICApXG5cbiAgY29uc3QgbWFya2VyVGlja3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0gW11cbiAgICBjb25zdCBzdGVwID0gbWFya2VyU3RlcC52YWx1ZVxuICAgIGNvbnN0IG1heCA9IHByb3BzLm1heFxuXG4gICAgbGV0IHZhbHVlID0gcHJvcHMubWluXG4gICAgZG8ge1xuICAgICAgYWNjLnB1c2godmFsdWUpXG4gICAgICB2YWx1ZSArPSBzdGVwXG4gICAgfSB3aGlsZSAodmFsdWUgPCBtYXgpXG5cbiAgICBhY2MucHVzaChtYXgpXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcHJlZml4ID0gYCAkeyBtYXJrZXJQcmVmaXhDbGFzcyB9JHsgYXhpcy52YWx1ZSB9LWBcbiAgICByZXR1cm4gbWFya2VyUHJlZml4Q2xhc3NcbiAgICAgICsgYCR7IHByZWZpeCB9JHsgcHJvcHMuc3dpdGNoTWFya2VyTGFiZWxzU2lkZSA9PT0gdHJ1ZSA/ICdzd2l0Y2hlZCcgOiAnc3RhbmRhcmQnIH1gXG4gICAgICArIGAkeyBwcmVmaXggfSR7IGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncnRsJyA6ICdsdHInIH1gXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyTGFiZWxzTGlzdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICByZXR1cm4gZ2V0TWFya2VyTGlzdChwcm9wcy5tYXJrZXJMYWJlbHMpLm1hcCgoZW50cnksIGluZGV4KSA9PiAoe1xuICAgICAgaW5kZXgsXG4gICAgICB2YWx1ZTogZW50cnkudmFsdWUsXG4gICAgICBsYWJlbDogZW50cnkubGFiZWwgfHwgZW50cnkudmFsdWUsXG4gICAgICBjbGFzc2VzOiBtYXJrZXJMYWJlbENsYXNzLnZhbHVlXG4gICAgICAgICsgKGVudHJ5LmNsYXNzZXMgIT09IHZvaWQgMCA/ICcgJyArIGVudHJ5LmNsYXNzZXMgOiAnJyksXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5nZXRNYXJrZXJMYWJlbFN0eWxlKGVudHJ5LnZhbHVlKSxcbiAgICAgICAgLi4uKGVudHJ5LnN0eWxlIHx8IHt9KVxuICAgICAgfVxuICAgIH0pKVxuICB9KVxuXG4gIGNvbnN0IG1hcmtlclNjb3BlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICBtYXJrZXJMaXN0OiBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLFxuICAgIG1hcmtlck1hcDogbWFya2VyTGFiZWxzTWFwLnZhbHVlLFxuICAgIGNsYXNzZXM6IG1hcmtlckxhYmVsQ2xhc3MudmFsdWUsIC8vIFRPRE8gdHMgZGVmaW5pdGlvblxuICAgIGdldFN0eWxlOiBnZXRNYXJrZXJMYWJlbFN0eWxlXG4gIH0pKVxuXG4gIGNvbnN0IG1hcmtlclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChpbm5lckJhckxlbi52YWx1ZSAhPT0gMCkge1xuICAgICAgY29uc3Qgc2l6ZSA9IDEwMCAqIG1hcmtlclN0ZXAudmFsdWUgLyBpbm5lckJhckxlbi52YWx1ZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbm5lckJhclN0eWxlLnZhbHVlLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICA/IGAycHggJHsgc2l6ZSB9JWBcbiAgICAgICAgICA6IGAkeyBzaXplIH0lIDJweGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxpc3QgKGRlZikge1xuICAgIGlmIChkZWYgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGlmIChkZWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAoZGVmYXVsdE1hcmtlckNvbnZlcnRGbilcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG1hcmtlclRpY2tzLnZhbHVlLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkZWYodmFsdWUpXG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IHsgLi4uaXRlbSwgdmFsdWUgfSA6IHsgdmFsdWUsIGxhYmVsOiBpdGVtIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyRm4gPSAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA+PSBwcm9wcy5taW4gJiYgdmFsdWUgPD0gcHJvcHMubWF4XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZWYpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGVmXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyBpdGVtIDogeyB2YWx1ZTogaXRlbSB9KSlcbiAgICAgICAgLmZpbHRlcihmaWx0ZXJGbilcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGVmKS5tYXAoa2V5ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkZWZbIGtleSBdXG4gICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihrZXkpXG4gICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgfSkuZmlsdGVyKGZpbHRlckZuKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGFiZWxTdHlsZSAodmFsKSB7XG4gICAgcmV0dXJuIHsgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqICh2YWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWUgfSVgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBhY2MgPSB7fVxuICAgIG1hcmtlckxhYmVsc0xpc3QudmFsdWUuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBhY2NbIGVudHJ5LnZhbHVlIF0gPSBlbnRyeVxuICAgIH0pXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsc0NvbnRlbnQgKCkge1xuICAgIGlmIChzbG90c1sgJ21hcmtlci1sYWJlbC1ncm91cCcgXSAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0obWFya2VyU2NvcGUudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgZm4gPSBzbG90c1sgJ21hcmtlci1sYWJlbCcgXSB8fCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGblxuICAgIHJldHVybiBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLm1hcChtYXJrZXIgPT4gZm4oe1xuICAgICAgbWFya2VyLFxuICAgICAgLi4ubWFya2VyU2NvcGUudmFsdWVcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IHBhbkRpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAvLyBpZiBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgIHJldHVybiBbIFtcbiAgICAgIFRvdWNoUGFuLFxuICAgICAgb25QYW4sXG4gICAgICB2b2lkIDAsXG4gICAgICB7XG4gICAgICAgIFsgb3JpZW50YXRpb24udmFsdWUgXTogdHJ1ZSxcbiAgICAgICAgcHJldmVudDogdHJ1ZSxcbiAgICAgICAgc3RvcDogdHJ1ZSxcbiAgICAgICAgbW91c2U6IHRydWUsXG4gICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICB9XG4gICAgXSBdXG4gIH0pXG5cbiAgZnVuY3Rpb24gb25QYW4gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChkcmFnZ2luZy52YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgICAgLy8gb25seSBpZiB0b3VjaCwgYmVjYXVzZSB3ZSBhbHNvIGhhdmUgbW91c2Vkb3duL3VwOlxuICAgICAgICBldmVudC50b3VjaCA9PT0gdHJ1ZSAmJiB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgICAgICBkcmFnZ2luZy52YWx1ZSA9IHZvaWQgMFxuICAgICAgICBlbWl0KCdwYW4nLCAnZW5kJylcbiAgICAgIH1cbiAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG4gICAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgIGRyYWdnaW5nLnZhbHVlID0gZ2V0RHJhZ2dpbmcoZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgICAgYWN0aXZlLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgncGFuJywgJ3N0YXJ0JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyICgpIHtcbiAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkFjdGl2YXRlIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUoKVxuXG4gICAgcHJldmVudEZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRlYWN0aXZhdGUgKCkge1xuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgYWN0aXZlLnZhbHVlID0gZmFsc2VcblxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgb25CbHVyKClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbk1vYmlsZUNsaWNrIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5dXAgKGV2dCkge1xuICAgIGlmIChrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkpIHtcbiAgICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGV4dENvbnRhaW5lclN0eWxlIChyYXRpbykge1xuICAgIGlmIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBwID0gJHEubGFuZy5ydGwgIT09IHByb3BzLnJldmVyc2UgPyAxIC0gcmF0aW8gOiByYXRpb1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKGNhbGMoJHsgMiAqIHAgLSAxIH0gKiAkeyBwcm9wcy50aHVtYlNpemUgfSAvIDIgKyAkeyA1MCAtIDEwMCAqIHAgfSUpKWBcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUaHVtYlJlbmRlckZuICh0aHVtYikge1xuICAgIGNvbnN0IGZvY3VzQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPT09IGZhbHNlICYmIChmb2N1cy52YWx1ZSA9PT0gdGh1bWIuZm9jdXNWYWx1ZSB8fCBmb2N1cy52YWx1ZSA9PT0gJ2JvdGgnKVxuICAgICAgICA/ICcgcS1zbGlkZXItLWZvY3VzJ1xuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2xpZGVyX190aHVtYiBxLXNsaWRlcl9fdGh1bWIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9LSR7IGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncnRsJyA6ICdsdHInIH0gYWJzb2x1dGUgbm9uLXNlbGVjdGFibGVgXG4gICAgICArIGZvY3VzQ2xhc3MudmFsdWVcbiAgICAgICsgKHRodW1iLnRodW1iQ29sb3IudmFsdWUgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0aHVtYi50aHVtYkNvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIGhlaWdodDogcHJvcHMudGh1bWJTaXplLFxuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHRodW1iLnJhdGlvLnZhbHVlIH0lYCxcbiAgICAgIHpJbmRleDogZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgPyAyIDogdm9pZCAwXG4gICAgfSkpXG5cbiAgICBjb25zdCBwaW5Db2xvciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHRodW1iLmxhYmVsQ29sb3IudmFsdWUgIT09IHZvaWQgMFxuICAgICAgICA/IGAgdGV4dC0keyB0aHVtYi5sYWJlbENvbG9yLnZhbHVlIH1gXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgdGV4dENvbnRhaW5lclN0eWxlID0gY29tcHV0ZWQoKCkgPT4gZ2V0VGV4dENvbnRhaW5lclN0eWxlKHRodW1iLnJhdGlvLnZhbHVlKSlcblxuICAgIGNvbnN0IHRleHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNsaWRlcl9fdGV4dCdcbiAgICAgICsgKHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxUZXh0Q29sb3IudmFsdWUgfWAgOiAnJylcbiAgICApKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHRodW1iQ29udGVudCA9IFtcbiAgICAgICAgaCgnc3ZnJywge1xuICAgICAgICAgIGNsYXNzOiAncS1zbGlkZXJfX3RodW1iLXNoYXBlIGFic29sdXRlLWZ1bGwnLFxuICAgICAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgncGF0aCcsIHsgZDogcHJvcHMudGh1bWJQYXRoIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXNsaWRlcl9fZm9jdXMtcmluZyBmaXQnIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5sYWJlbCA9PT0gdHJ1ZSB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHVtYkNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogcGluQ2xhc3MudmFsdWUgKyAnIGFic29sdXRlIGZpdCBuby1wb2ludGVyLWV2ZW50cycgKyBwaW5Db2xvci52YWx1ZVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGxhYmVsQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7IG1pbldpZHRoOiBwcm9wcy50aHVtYlNpemUgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHRleHRDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBzdHlsZTogdGV4dENvbnRhaW5lclN0eWxlLnZhbHVlXG4gICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogdGV4dENsYXNzLnZhbHVlIH0sIHRodW1iLmxhYmVsLnZhbHVlKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgICAgaW5qZWN0Rm9ybUlucHV0KHRodW1iQ29udGVudCwgJ3B1c2gnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIC4uLnRodW1iLmdldE5vZGVEYXRhKClcbiAgICAgIH0sIHRodW1iQ29udGVudClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250ZW50IChzZWxlY3Rpb25CYXJTdHlsZSwgdHJhY2tDb250YWluZXJUYWJpbmRleCwgdHJhY2tDb250YWluZXJFdmVudHMsIGluamVjdFRodW1iKSB7XG4gICAgY29uc3QgdHJhY2tDb250ZW50ID0gW11cblxuICAgIHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnaW5uZXInLFxuICAgICAgICBjbGFzczogaW5uZXJCYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IGlubmVyQmFyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMuc2VsZWN0aW9uQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ3NlbGVjdGlvbicsXG4gICAgICAgIGNsYXNzOiBzZWxlY3Rpb25CYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHNlbGVjdGlvbkJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLm1hcmtlcnMgIT09IGZhbHNlICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdtYXJrZXInLFxuICAgICAgICBjbGFzczogbWFya2VyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBtYXJrZXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBpbmplY3RUaHVtYih0cmFja0NvbnRlbnQpXG5cbiAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0cmFja0MnLFxuICAgICAgICAgIGNsYXNzOiB0cmFja0NvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHRhYmluZGV4OiB0cmFja0NvbnRhaW5lclRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgIC4uLnRyYWNrQ29udGFpbmVyRXZlbnRzLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogdHJhY2tDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgdHJhY2tDb250ZW50KVxuICAgICAgICBdLFxuICAgICAgICAnc2xpZGUnLFxuICAgICAgICBlZGl0YWJsZS52YWx1ZSwgKCkgPT4gcGFuRGlyZWN0aXZlLnZhbHVlXG4gICAgICApXG4gICAgXVxuXG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWVcbiAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgOiAncHVzaCdcblxuICAgICAgY29udGVudFsgYWN0aW9uIF0oXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdtYXJrZXJMJyxcbiAgICAgICAgICBjbGFzczogbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MudmFsdWVcbiAgICAgICAgfSwgZ2V0TWFya2VyTGFiZWxzQ29udGVudCgpKVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50XG4gIH1cblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgYWN0aXZlLFxuICAgICAgZm9jdXMsXG4gICAgICBwcmV2ZW50Rm9jdXMsXG4gICAgICBkcmFnZ2luZyxcblxuICAgICAgZWRpdGFibGUsXG4gICAgICBjbGFzc2VzLFxuICAgICAgdGFiaW5kZXgsXG4gICAgICBhdHRyaWJ1dGVzLFxuXG4gICAgICBzdGVwLFxuICAgICAgZGVjaW1hbHMsXG4gICAgICB0cmFja0xlbixcbiAgICAgIGlubmVyTWluLFxuICAgICAgaW5uZXJNaW5SYXRpbyxcbiAgICAgIGlubmVyTWF4LFxuICAgICAgaW5uZXJNYXhSYXRpbyxcbiAgICAgIHBvc2l0aW9uUHJvcCxcbiAgICAgIHNpemVQcm9wLFxuICAgICAgaXNSZXZlcnNlZFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBvbkFjdGl2YXRlLFxuICAgICAgb25Nb2JpbGVDbGljayxcbiAgICAgIG9uQmx1cixcbiAgICAgIG9uS2V5dXAsXG4gICAgICBnZXRDb250ZW50LFxuICAgICAgZ2V0VGh1bWJSZW5kZXJGbixcbiAgICAgIGNvbnZlcnRSYXRpb1RvTW9kZWwsXG4gICAgICBjb252ZXJ0TW9kZWxUb1JhdGlvLFxuICAgICAgZ2V0RHJhZ2dpbmdSYXRpb1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgdXNlRm9ybUF0dHJzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcblxuaW1wb3J0IHVzZVNsaWRlciwge1xuICB1c2VTbGlkZXJQcm9wcyxcbiAgdXNlU2xpZGVyRW1pdHMsXG4gIGtleUNvZGVzXG59IGZyb20gJy4vdXNlLXNsaWRlci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuY29uc3QgZ2V0Tm9kZURhdGEgPSAoKSA9PiAoe30pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2xpZGVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVNsaWRlclByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVvZiB2ID09PSAnbnVtYmVyJyB8fCB2ID09PSBudWxsXG4gICAgfSxcblxuICAgIGxhYmVsVmFsdWU6IFsgU3RyaW5nLCBOdW1iZXIgXVxuICB9LFxuXG4gIGVtaXRzOiB1c2VTbGlkZXJFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgeyBzdGF0ZSwgbWV0aG9kcyB9ID0gdXNlU2xpZGVyKHtcbiAgICAgIHVwZGF0ZVZhbHVlLCB1cGRhdGVQb3NpdGlvbiwgZ2V0RHJhZ2dpbmcsXG4gICAgICBmb3JtQXR0cnM6IHVzZUZvcm1BdHRycyhwcm9wcylcbiAgICB9KVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGN1clJhdGlvID0gcmVmKDApXG4gICAgY29uc3QgbW9kZWwgPSByZWYoMClcblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsICgpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbFxuICAgICAgICA/IHN0YXRlLmlubmVyTWluLnZhbHVlXG4gICAgICAgIDogYmV0d2Vlbihwcm9wcy5tb2RlbFZhbHVlLCBzdGF0ZS5pbm5lck1pbi52YWx1ZSwgc3RhdGUuaW5uZXJNYXgudmFsdWUpXG4gICAgfVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBgJHsgcHJvcHMubW9kZWxWYWx1ZSB9fCR7IHN0YXRlLmlubmVyTWluLnZhbHVlIH18JHsgc3RhdGUuaW5uZXJNYXgudmFsdWUgfWAsXG4gICAgICBub3JtYWxpemVNb2RlbFxuICAgIClcblxuICAgIG5vcm1hbGl6ZU1vZGVsKClcblxuICAgIGNvbnN0IG1vZGVsUmF0aW8gPSBjb21wdXRlZCgoKSA9PiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpKVxuICAgIGNvbnN0IHJhdGlvID0gY29tcHV0ZWQoKCkgPT4gKHN0YXRlLmFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/IGN1clJhdGlvLnZhbHVlIDogbW9kZWxSYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25CYXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgWyBzdGF0ZS5wb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHN0YXRlLmlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgICBbIHN0YXRlLnNpemVQcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAocmF0aW8udmFsdWUgLSBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlKSB9JWBcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5zZWxlY3Rpb25JbWcgIT09IHZvaWQgMCkge1xuICAgICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy5zZWxlY3Rpb25JbWcgfSkgIWltcG9ydGFudGBcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgY29uc3QgZ2V0VGh1bWIgPSBtZXRob2RzLmdldFRodW1iUmVuZGVyRm4oe1xuICAgICAgZm9jdXNWYWx1ZTogdHJ1ZSxcbiAgICAgIGdldE5vZGVEYXRhLFxuICAgICAgcmF0aW8sXG4gICAgICBsYWJlbDogY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgICBwcm9wcy5sYWJlbFZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHByb3BzLmxhYmVsVmFsdWVcbiAgICAgICAgICA6IG1vZGVsLnZhbHVlXG4gICAgICApKSxcbiAgICAgIHRodW1iQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLnRodW1iQ29sb3IgfHwgcHJvcHMuY29sb3IpLFxuICAgICAgbGFiZWxDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxDb2xvciksXG4gICAgICBsYWJlbFRleHRDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxUZXh0Q29sb3IpXG4gICAgfSlcblxuICAgIGNvbnN0IHRyYWNrQ29udGFpbmVyRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gJHEucGxhdGZvcm0uaXMubW9iaWxlID09PSB0cnVlXG4gICAgICAgID8geyBvbkNsaWNrOiBtZXRob2RzLm9uTW9iaWxlQ2xpY2sgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG9uTW91c2Vkb3duOiBtZXRob2RzLm9uQWN0aXZhdGUsXG4gICAgICAgICAgICBvbkZvY3VzLFxuICAgICAgICAgICAgb25CbHVyOiBtZXRob2RzLm9uQmx1cixcbiAgICAgICAgICAgIG9uS2V5ZG93bixcbiAgICAgICAgICAgIG9uS2V5dXA6IG1ldGhvZHMub25LZXl1cFxuICAgICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUgKGNoYW5nZSkge1xuICAgICAgaWYgKG1vZGVsLnZhbHVlICE9PSBwcm9wcy5tb2RlbFZhbHVlKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbW9kZWwudmFsdWUpXG4gICAgICB9XG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgZW1pdCgnY2hhbmdlJywgbW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmcgKCkge1xuICAgICAgcmV0dXJuIHJvb3RSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbiAoZXZlbnQsIGRyYWdnaW5nID0gc3RhdGUuZHJhZ2dpbmcudmFsdWUpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gbWV0aG9kcy5nZXREcmFnZ2luZ1JhdGlvKGV2ZW50LCBkcmFnZ2luZylcblxuICAgICAgbW9kZWwudmFsdWUgPSBtZXRob2RzLmNvbnZlcnRSYXRpb1RvTW9kZWwocmF0aW8pXG5cbiAgICAgIGN1clJhdGlvLnZhbHVlID0gcHJvcHMuc25hcCAhPT0gdHJ1ZSB8fCBwcm9wcy5zdGVwID09PSAwXG4gICAgICAgID8gcmF0aW9cbiAgICAgICAgOiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1cyAoKSB7XG4gICAgICBzdGF0ZS5mb2N1cy52YWx1ZSA9IHRydWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleWRvd24gKGV2dCkge1xuICAgICAgaWYgKCFrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgY29uc3RcbiAgICAgICAgc3RlcFZhbCA9IChbIDM0LCAzMyBdLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSA/IDEwIDogMSkgKiBzdGF0ZS5zdGVwLnZhbHVlLFxuICAgICAgICBvZmZzZXQgPSAoXG4gICAgICAgICAgKFsgMzQsIDM3LCA0MCBdLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSA/IC0xIDogMSlcbiAgICAgICAgICAqIChzdGF0ZS5pc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gLTEgOiAxKVxuICAgICAgICAgICogKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gLTEgOiAxKSAqIHN0ZXBWYWxcbiAgICAgICAgKVxuXG4gICAgICBtb2RlbC52YWx1ZSA9IGJldHdlZW4oXG4gICAgICAgIHBhcnNlRmxvYXQoKG1vZGVsLnZhbHVlICsgb2Zmc2V0KS50b0ZpeGVkKHN0YXRlLmRlY2ltYWxzLnZhbHVlKSksXG4gICAgICAgIHN0YXRlLmlubmVyTWluLnZhbHVlLFxuICAgICAgICBzdGF0ZS5pbm5lck1heC52YWx1ZVxuICAgICAgKVxuXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZXRob2RzLmdldENvbnRlbnQoXG4gICAgICAgIHNlbGVjdGlvbkJhclN0eWxlLFxuICAgICAgICBzdGF0ZS50YWJpbmRleCxcbiAgICAgICAgdHJhY2tDb250YWluZXJFdmVudHMsXG4gICAgICAgIG5vZGUgPT4geyBub2RlLnB1c2goZ2V0VGh1bWIoKSkgfVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgIGNsYXNzOiBzdGF0ZS5jbGFzc2VzLnZhbHVlICsgKHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGwgPyAnIHEtc2xpZGVyLS1uby12YWx1ZScgOiAnJyksXG4gICAgICAgIC4uLnN0YXRlLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgfSwgY29udGVudClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGp1c3RpZnktY2VudGVyIHEtcHQtc21cIj5cclxuICAgIDxxLWJ0biBmYWIgZmxhdCBzaXplPVwibWRcIiA6aWNvbj1cIm91dGxpbmVkU2tpcFByZXZpb3VzXCIgQGNsaWNrPVwicXVldWVDb250cm9sbGVyLnBsYXlQcmV2aW91cygpXCI+XHJcbiAgICAgIDxxLXRvb2x0aXA+UHJldmlvdXM8L3EtdG9vbHRpcD5cclxuICAgIDwvcS1idG4+XHJcblxyXG4gICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCBzaXplPVwibWRcIiA6aWNvbj1cInBhdXNlZCA/IG91dGxpbmVkUGxheUFycm93IDogb3V0bGluZWRQYXVzZVwiIEBjbGljaz1cImF1ZGlvQ29udHJvbGxlci50b2dnbGVQYXVzZSgpXCI+XHJcbiAgICAgIDxxLXRvb2x0aXA+e3sgYXVkaW9Db250cm9sbGVyLnBhdXNlZCA/IFwiUGxheVwiIDogXCJQYXVzZVwiIH19PC9xLXRvb2x0aXA+XHJcbiAgICA8L3EtYnRuPlxyXG5cclxuICAgIDxxLWJ0biBmbGF0IGZhYiBzaXplPVwibWRcIiA6aWNvbj1cIm91dGxpbmVkU2tpcE5leHRcIiBAY2xpY2s9XCJxdWV1ZUNvbnRyb2xsZXIucGxheU5leHQoKVwiPlxyXG4gICAgICA8cS10b29sdGlwPk5leHQ8L3EtdG9vbHRpcD5cclxuICAgIDwvcS1idG4+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBxLXB0LWxnXCIgdi1pZj1cInNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nICE9PSB1bmRlZmluZWRcIj5cclxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxyXG4gICAgICB7eyBmb3JtYXREdXJhdGlvbihzZWNvbmRzVG9EdXJhdGlvbihjdXJyZW50VGltZSkpIH19XHJcbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxyXG4gICAgPHEtaXRlbS1zZWN0aW9uPlxyXG4gICAgICA8cS1zbGlkZXIgdi1tb2RlbD1cImN1cnJlbnRUaW1lXCJcclxuICAgICAgICAgICAgICAgIEBwYW49XCJvblBhblwiXHJcbiAgICAgICAgICAgICAgICA6bWluPVwiMFwiIDptYXg9XCJ0b3RhbFRpbWVcIiA6c3RlcD1cIjAuMVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCIvPlxyXG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cclxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxyXG4gICAgICB7eyBmb3JtYXREdXJhdGlvbihzb25nUXVldWUuY3VycmVudGx5UGxheWluZy5kdXJhdGlvbikgfX1cclxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ01lZGlhQ29udHJvbCdcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7XHJcbiAgb3V0bGluZWRQbGF5QXJyb3csXHJcbiAgb3V0bGluZWRTa2lwTmV4dCxcclxuICBvdXRsaW5lZFNraXBQcmV2aW91cyxcclxuICBvdXRsaW5lZFBhdXNlXHJcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xyXG5cclxuaW1wb3J0IHtjb21wdXRlZCwgcmVmfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQge2F1ZGlvQ29udHJvbGxlcn0gZnJvbSAnYm9vdC9hdWRpb0NvbnRyb2xsZXInO1xyXG5pbXBvcnQge2R1cmF0aW9uVG9TZWNvbmRzLCBmb3JtYXREdXJhdGlvbiwgc2Vjb25kc1RvRHVyYXRpb259IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcclxuaW1wb3J0IHtxdWV1ZUNvbnRyb2xsZXJ9IGZyb20gJ2Jvb3Qvc29uZ1F1ZXVlJztcclxuXHJcbmNvbnN0IGN1cnJlbnRUaW1lID0gcmVmKDApO1xyXG5jb25zdCBzb25nUXVldWUgPSBxdWV1ZUNvbnRyb2xsZXI7XHJcbmNvbnN0IGlzUGFubmluZ1Byb2dyZXNzID0gcmVmKGZhbHNlKTtcclxuXHJcbnF1ZXVlQ29udHJvbGxlci53YXRjaEN1cnJlbnRseVBsYXlpbmcoKCkgPT4ge1xyXG4gIHJldHVybjtcclxufSlcclxuXHJcbmNvbnN0IHBhdXNlZCA9IGNvbXB1dGVkKCgpID0+IHtcclxuICByZXR1cm4gYXVkaW9Db250cm9sbGVyLnBhdXNlZC52YWx1ZTtcclxufSlcclxuXHJcbmNvbnN0IG9uUGFuID0gKHBoYXNlOiBzdHJpbmcpID0+IHtcclxuICBpZiAocGhhc2UgPT09ICdzdGFydCcpIHtcclxuICAgIGlzUGFubmluZ1Byb2dyZXNzLnZhbHVlID0gdHJ1ZTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50VGltZS52YWx1ZSlcclxuICAgIC8vIFNlZWtcclxuICAgIGF1ZGlvQ29udHJvbGxlci5zZWVrKGN1cnJlbnRUaW1lLnZhbHVlKTtcclxuXHJcbiAgICBpc1Bhbm5pbmdQcm9ncmVzcy52YWx1ZSA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdG90YWxUaW1lID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gIGlmIChzb25nUXVldWUuY3VycmVudGx5UGxheWluZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gZHVyYXRpb25Ub1NlY29uZHMoPHN0cmluZz5zb25nUXVldWUuY3VycmVudGx5UGxheWluZy5kdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gLTE7XHJcbn0pXHJcblxyXG5hdWRpb0NvbnRyb2xsZXIub25Qcm9ncmVzc1RpY2soKHRpbWUpID0+IHtcclxuICBpZiAoaXNQYW5uaW5nUHJvZ3Jlc3MudmFsdWUpXHJcbiAge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBjdXJyZW50VGltZS52YWx1ZSA9IHRpbWU7XHJcbn0pXHJcbjwvc2NyaXB0PlxyXG4iLCJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VRdWV1ZURpc3BsYXlTdG9yZSA9IGRlZmluZVN0b3JlKCdxdWV1ZURpc3BsYXknLCB7XHJcbiAgc3RhdGU6ICgpID0+ICh7XHJcbiAgICBzaG93OiB0cnVlXHJcbiAgfSksXHJcblxyXG4gIGFjdGlvbnM6IHtcclxuICAgIG9wZW4gKCkge1xyXG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xyXG4gICAgfSxcclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvZ2dsZSgpIHtcclxuICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC03IHJvdyBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkUmVwZWF0XCI+XHJcbiAgICAgICAgPHEtdG9vbHRpcD5SZXBlYXQ8L3EtdG9vbHRpcD5cclxuICAgICAgPC9xLWJ0bj5cclxuXHJcbiAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRTaHVmZmxlXCIgY2xhc3M9XCJxLW14LXNtXCI+XHJcbiAgICAgICAgPHEtdG9vbHRpcD5TaHVmZmxlPC9xLXRvb2x0aXA+XHJcbiAgICAgIDwvcS1idG4+XHJcblxyXG4gICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkUXVldWVNdXNpY1wiIEBjbGljaz1cInF1ZXVlU2hvd1N0YXR1c1N0b3JlLnRvZ2dsZSgpXCI+XHJcbiAgICAgICAgPHEtdG9vbHRpcD5RdWV1ZTwvcS10b29sdGlwPlxyXG4gICAgICA8L3EtYnRuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgIDxxLWl0ZW0gY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XHJcbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJ2b2x1bWVfdXBcIi8+XHJcbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XHJcbiAgICAgICAgICA8cS1zbGlkZXJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInZvbHVtZVwiXHJcbiAgICAgICAgICAgIDptaW49XCIwXCJcclxuICAgICAgICAgICAgOm1heD1cIjEwMFwiXHJcbiAgICAgICAgICAgIDpzdGVwPVwiMVwiXHJcbiAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAxMDBweFwiXHJcbiAgICAgICAgICAgIHRodW1iLXNpemU9XCIxMHB4XCJcclxuICAgICAgICAgICAgaW5uZXItdHJhY2stY29sb3I9XCJibGFja1wiXHJcbiAgICAgICAgICAgIHNlbGVjdGlvbi1jb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgICAgdGh1bWItY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgIHRyYWNrLWNvbG9yPVwieWVsbG93XCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgPC9xLWl0ZW0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUXVldWVDb250cm9sJ1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHtcclxuICBvdXRsaW5lZFNodWZmbGUsXHJcbiAgb3V0bGluZWRSZXBlYXQsXHJcbiAgb3V0bGluZWRRdWV1ZU11c2ljLFxyXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcclxuXHJcbmltcG9ydCB7YXVkaW9Db250cm9sbGVyfSBmcm9tICdib290L2F1ZGlvQ29udHJvbGxlcic7XHJcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCB7dXNlUXVldWVEaXNwbGF5U3RvcmV9IGZyb20gJ3N0b3Jlcy9zaG93UXVldWUnO1xyXG5cclxuY29uc3QgcXVldWVTaG93U3RhdHVzU3RvcmUgPSB1c2VRdWV1ZURpc3BsYXlTdG9yZSgpO1xyXG5cclxuY29uc3Qgdm9sdW1lID0gcmVmKGF1ZGlvQ29udHJvbGxlci52b2x1bWUudmFsdWUgKiAxMDApO1xyXG53YXRjaCh2b2x1bWUsICgpID0+IHtcclxuICBhdWRpb0NvbnRyb2xsZXIudm9sdW1lLnZhbHVlID0gdm9sdW1lLnZhbHVlIC8gMTAwO1xyXG59KVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8cS10b29sYmFyIGNsYXNzPVwicS1wYS1tZFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGp1c3RpZnktZXZlbmx5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICA8dHJhY2staW5mby1jYXJkPjwvdHJhY2staW5mby1jYXJkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC01XCI+XHJcbiAgICAgICAgPG1lZGlhLWNvbnRyb2w+PC9tZWRpYS1jb250cm9sPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxyXG4gICAgICAgIDxxdWV1ZS1jb250cm9sPjwvcXVldWUtY29udHJvbD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG4gIDwvcS10b29sYmFyPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdQbGF5ZXJDb250cm9sJ1xyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IFRyYWNrSW5mb0NhcmQgZnJvbSAnY29tcG9uZW50cy9UcmFja0luZm9DYXJkLnZ1ZSc7XHJcbmltcG9ydCBNZWRpYUNvbnRyb2wgZnJvbSAnY29tcG9uZW50cy9NZWRpYUNvbnRyb2wudnVlJztcclxuaW1wb3J0IFF1ZXVlQ29udHJvbCBmcm9tICdjb21wb25lbnRzL1F1ZXVlQ29udHJvbC52dWUnO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSAnc3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlcic7XHJcbmltcG9ydCB7cXVldWVDb250cm9sbGVyfSBmcm9tICdib290L3NvbmdRdWV1ZSc7XHJcbmltcG9ydCB7QXVkaW9Db250cm9sbGVyfSBmcm9tICdzcmMvdXRpbHMvQXVkaW9Db250cm9sbGVyJztcclxuaW1wb3J0IHthdWRpb0NvbnRyb2xsZXJ9IGZyb20gJ2Jvb3QvYXVkaW9Db250cm9sbGVyJztcclxuaW1wb3J0IHt3YXRjaH0gZnJvbSAndnVlJztcclxuXHJcbmNsYXNzIE1lZGlhU2Vzc2lvbkNvbnRyb2xsZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc3VwcG9ydE1lZGlhU2Vzc2lvbjogYm9vbGVhbjtcclxuICBwcml2YXRlIHF1ZXVlQ29udHJvbGxlcjogUXVldWVDb250cm9sbGVyO1xyXG4gIHByaXZhdGUgYXVkaW9Db250cm9sbGVyOiBBdWRpb0NvbnRyb2xsZXI7XHJcblxyXG4gIHByaXZhdGUgYXVkaW9UYWc6IEhUTUxBdWRpb0VsZW1lbnQgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHF1ZXVlQ3RybD86IFF1ZXVlQ29udHJvbGxlciwgYXVkaW9DdHJsPzogQXVkaW9Db250cm9sbGVyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFiY2RcIilcclxuICAgIHRoaXMuc3VwcG9ydE1lZGlhU2Vzc2lvbiA9ICdtZWRpYVNlc3Npb24nIGluIG5hdmlnYXRvcjtcclxuXHJcbiAgICAvLyBNYXliZSBjb252ZXJ0IFF1ZXVlQ29udHJvbGxlciBhbmQgQXVkaW9Db250cm9sbGVyIHRvIHNpbmdsZXRvbj9cclxuICAgIGlmIChxdWV1ZUN0cmwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnF1ZXVlQ29udHJvbGxlciA9IHF1ZXVlQ3RybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIHRoaXMgcXVldWVDb250cm9sbGVyIGlzIGZyb20gYm9vdC9zb25nUXVldWVcclxuICAgICAgdGhpcy5xdWV1ZUNvbnRyb2xsZXIgPSBxdWV1ZUNvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGF1ZGlvQ3RybCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYXVkaW9Db250cm9sbGVyID0gYXVkaW9DdHJsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hdWRpb0NvbnRyb2xsZXIgPSBhdWRpb0NvbnRyb2xsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRpYWxpemUoKSB7XHJcbiAgICBpZiAoIXRoaXMuc3VwcG9ydE1lZGlhU2Vzc2lvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2luY2UgTWVkaWFTZXNzaW9uIHJlcXVpcmVzIGF1ZGlvIHRhZyBhbmQgaG93bGVyanMgZG9lcyBub3QgY3JlYXRlXHJcbiAgICAvLyBhIDxhdWRpbz4gdGFnIHdoZW4gcGxheWluZyBmbGFjLiB3ZSBuZWVkIHRvIGNyZWF0ZSBvdXIgb3duIGF1ZGlvIHRhZ1xyXG5cclxuICAgIHRoaXMuYXVkaW9UYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xyXG4gICAgdGhpcy5hdWRpb1RhZy5pZCA9ICdhc2RmJztcclxuICAgIHRoaXMuYXVkaW9UYWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIHRoaXMuYXVkaW9UYWcuc3JjID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbmFycy9ibGFuay1hdWRpby9yYXcvbWFzdGVyLzEtaG91ci1vZi1zaWxlbmNlLm1wMyc7XHJcbiAgICB0aGlzLmF1ZGlvVGFnLnBsYXkoKTtcclxuICAgIHRoaXMuYXVkaW9UYWcubG9vcCA9IHRydWU7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5hdWRpb1RhZyk7XHJcblxyXG4gICAgbmF2aWdhdG9yLm1lZGlhU2Vzc2lvbi5zZXRBY3Rpb25IYW5kbGVyKCdwbGF5JywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnW01lZGlhU2Vzc2lvbl0gUGxheScpO1xyXG4gICAgICB0aGlzLnNldE1lZGlhTWV0YWRhdGEoKTtcclxuICAgICAgdGhpcy5hdWRpb1RhZz8ucGxheSgpO1xyXG4gICAgICB0aGlzLmF1ZGlvQ29udHJvbGxlci51bnBhdXNlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLnNldEFjdGlvbkhhbmRsZXIoJ3BhdXNlJywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnW01lZGlhU2Vzc2lvbl0gUGF1c2UnKTtcclxuICAgICAgdGhpcy5zZXRNZWRpYU1ldGFkYXRhKCk7XHJcbiAgICAgIHRoaXMuYXVkaW9Db250cm9sbGVyLnBhdXNlKCk7XHJcbiAgICAgIHRoaXMuYXVkaW9UYWc/LnBhdXNlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLnNldEFjdGlvbkhhbmRsZXIoJ3N0b3AnLCAoKSA9PiB7IC8qIENvZGUgZXhjZXJwdGVkLiAqLyB9KTtcclxuICAgIC8vXHJcbiAgICAvLyBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLnNldEFjdGlvbkhhbmRsZXIoJ3NlZWtiYWNrd2FyZCcsICgpID0+IHsgLyogQ29kZSBleGNlcnB0ZWQuICovIH0pO1xyXG4gICAgLy9cclxuICAgIC8vIG5hdmlnYXRvci5tZWRpYVNlc3Npb24uc2V0QWN0aW9uSGFuZGxlcignc2Vla2ZvcndhcmQnLCAoKSA9PiB7IC8qIENvZGUgZXhjZXJwdGVkLiAqLyB9KTtcclxuICAgIC8vXHJcbiAgICAvLyBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLnNldEFjdGlvbkhhbmRsZXIoJ3NlZWt0bycsICgpID0+IHsgLyogQ29kZSBleGNlcnB0ZWQuICovIH0pO1xyXG4gICAgLy9cclxuICAgIG5hdmlnYXRvci5tZWRpYVNlc3Npb24uc2V0QWN0aW9uSGFuZGxlcigncHJldmlvdXN0cmFjaycsICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRNZWRpYU1ldGFkYXRhKCk7XHJcbiAgICAgIHRoaXMucXVldWVDb250cm9sbGVyLnBsYXlQcmV2aW91cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbmF2aWdhdG9yLm1lZGlhU2Vzc2lvbi5zZXRBY3Rpb25IYW5kbGVyKCduZXh0dHJhY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0TWVkaWFNZXRhZGF0YSgpO1xyXG4gICAgICB0aGlzLnF1ZXVlQ29udHJvbGxlci5wbGF5TmV4dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbmF2aWdhdG9yLm1lZGlhU2Vzc2lvbi5zZXRBY3Rpb25IYW5kbGVyKCdza2lwYWQnLCAoKSA9PiB7IC8qIENvZGUgZXhjZXJwdGVkLiAqLyB9KTtcclxuXHJcbiAgICB0aGlzLnF1ZXVlQ29udHJvbGxlci53YXRjaEN1cnJlbnRseVBsYXlpbmcoKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uQ3VycmVudFBsYXlDaGFuZ2VkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB3YXRjaCh0aGlzLmF1ZGlvQ29udHJvbGxlci5wYXVzZWQsIChjdXJyLCBwcmV2KSA9PiB7XHJcbiAgICAgIGlmIChjdXJyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNZWRpYU1ldGFkYXRhKCk7XHJcbiAgICAgICAgLy8gdGhpcy5hdWRpb1RhZz8uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRNZWRpYU1ldGFkYXRhKCk7XHJcbiAgICAgICAgdGhpcy5hdWRpb1RhZz8ucGF1c2UoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0TWVkaWFNZXRhZGF0YSgpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRseVBsYXlpbmcgPSB0aGlzLnF1ZXVlQ29udHJvbGxlci5jdXJyZW50bHlQbGF5aW5nO1xyXG4gICAgaWYgKGN1cnJlbnRseVBsYXlpbmcgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBuYXZpZ2F0b3IubWVkaWFTZXNzaW9uLm1ldGFkYXRhID0gbmV3IHdpbmRvdy5NZWRpYU1ldGFkYXRhKHtcclxuICAgICAgdGl0bGU6IGN1cnJlbnRseVBsYXlpbmc/Lm5hbWU/Ll9kZWZhdWx0LFxyXG4gICAgICBhcnRpc3Q6IGN1cnJlbnRseVBsYXlpbmc/LmFsYnVtPy5hbGJ1bUFydGlzdD8uWzBdLFxyXG4gICAgICBhbGJ1bTogY3VycmVudGx5UGxheWluZz8uYWxidW0/LmFsYnVtTmFtZT8uX2RlZmF1bHQsXHJcbiAgICAgIGFydHdvcms6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBzcmM6IDxzdHJpbmc+Y3VycmVudGx5UGxheWluZz8uYWxidW0/LmFsYnVtSW1hZ2U/LnVybCxcclxuICAgICAgICAgIHR5cGU6IDxzdHJpbmc+Y3VycmVudGx5UGxheWluZz8uYWxidW0/LmFsYnVtSW1hZ2U/LmFzc2V0TWltZVxyXG4gICAgICAgIH1cclxuICAgICAgXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ3VycmVudFBsYXlDaGFuZ2VkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0N1cnJlbnRseSBwbGF5aW5nIGNoYW5nZWQnKVxyXG4gICAgdGhpcy5zZXRNZWRpYU1ldGFkYXRhKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIE1lZGlhU2Vzc2lvbkNvbnRyb2xsZXJcclxufVxyXG4iLCJpbXBvcnQgeyBoLCBvbkJlZm9yZVVubW91bnQsIFRyYW5zaXRpb24gfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlVHJhbnNpdGlvbicsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlYXI6IEJvb2xlYW4sXG4gICAgZHVyYXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAnc2hvdycsICdoaWRlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgbGV0IGFuaW1hdGluZyA9IGZhbHNlLCBkb25lRm4sIGVsZW1lbnRcbiAgICBsZXQgdGltZXIsIHRpbWVyRmFsbGJhY2ssIGFuaW1MaXN0ZW5lciwgbGFzdEV2ZW50XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICAgIGRvbmVGbiAmJiBkb25lRm4oKVxuICAgICAgZG9uZUZuID0gbnVsbFxuICAgICAgYW5pbWF0aW5nID0gZmFsc2VcblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyRmFsbGJhY2spXG4gICAgICBlbGVtZW50ICE9PSB2b2lkIDAgJiYgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgYW5pbUxpc3RlbmVyID0gbnVsbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJlZ2luIChlbCwgaGVpZ2h0LCBkb25lKSB7XG4gICAgICBlbC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgICAgaWYgKGhlaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGAkeyBoZWlnaHQgfXB4YFxuICAgICAgfVxuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgJHsgcHJvcHMuZHVyYXRpb24gfW1zIGN1YmljLWJlemllciguMjUsIC44LCAuNTAsIDEpYFxuXG4gICAgICBhbmltYXRpbmcgPSB0cnVlXG4gICAgICBkb25lRm4gPSBkb25lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kIChlbCwgZXZlbnQpIHtcbiAgICAgIGVsLnN0eWxlLm92ZXJmbG93WSA9IG51bGxcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IG51bGxcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBudWxsXG4gICAgICBjbGVhbnVwKClcbiAgICAgIGV2ZW50ICE9PSBsYXN0RXZlbnQgJiYgZW1pdChldmVudClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVudGVyIChlbCwgZG9uZSkge1xuICAgICAgbGV0IHBvcyA9IDBcbiAgICAgIGVsZW1lbnQgPSBlbFxuXG4gICAgICBpZiAoYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgIGNsZWFudXAoKVxuICAgICAgICBwb3MgPSBlbC5vZmZzZXRIZWlnaHQgPT09IGVsLnNjcm9sbEhlaWdodCA/IDAgOiB2b2lkIDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsYXN0RXZlbnQgPSAnaGlkZSdcbiAgICAgIH1cblxuICAgICAgYmVnaW4oZWwsIHBvcywgZG9uZSlcblxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gYCR7IGVsLnNjcm9sbEhlaWdodCB9cHhgXG4gICAgICAgIGFuaW1MaXN0ZW5lciA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdChldnQpICE9PSBldnQgfHwgZXZ0LnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGVuZChlbCwgJ3Nob3cnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgICB0aW1lckZhbGxiYWNrID0gc2V0VGltZW91dChhbmltTGlzdGVuZXIsIHByb3BzLmR1cmF0aW9uICogMS4xKVxuICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTGVhdmUgKGVsLCBkb25lKSB7XG4gICAgICBsZXQgcG9zXG4gICAgICBlbGVtZW50ID0gZWxcblxuICAgICAgaWYgKGFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhbnVwKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsYXN0RXZlbnQgPSAnc2hvdydcbiAgICAgICAgcG9zID0gZWwuc2Nyb2xsSGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIGJlZ2luKGVsLCBwb3MsIGRvbmUpXG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgYW5pbUxpc3RlbmVyID0gZXZ0ID0+IHtcbiAgICAgICAgICBpZiAoT2JqZWN0KGV2dCkgIT09IGV2dCB8fCBldnQudGFyZ2V0ID09PSBlbCkge1xuICAgICAgICAgICAgZW5kKGVsLCAnaGlkZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBhbmltTGlzdGVuZXIpXG4gICAgICAgIHRpbWVyRmFsbGJhY2sgPSBzZXRUaW1lb3V0KGFuaW1MaXN0ZW5lciwgcHJvcHMuZHVyYXRpb24gKiAxLjEpXG4gICAgICB9LCAxMDApXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBjbGVhbnVwKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoVHJhbnNpdGlvbiwge1xuICAgICAgY3NzOiBmYWxzZSxcbiAgICAgIGFwcGVhcjogcHJvcHMuYXBwZWFyLFxuICAgICAgb25FbnRlcixcbiAgICAgIG9uTGVhdmVcbiAgICB9LCBzbG90cy5kZWZhdWx0KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgc2hhbGxvd1JlYWN0aXZlLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgd2l0aERpcmVjdGl2ZXMsIGdldEN1cnJlbnRJbnN0YW5jZSwgdlNob3csIG9uQmVmb3JlVW5tb3VudCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJdGVtIGZyb20gJy4uL2l0ZW0vUUl0ZW0uanMnXG5pbXBvcnQgUUl0ZW1TZWN0aW9uIGZyb20gJy4uL2l0ZW0vUUl0ZW1TZWN0aW9uLmpzJ1xuaW1wb3J0IFFJdGVtTGFiZWwgZnJvbSAnLi4vaXRlbS9RSXRlbUxhYmVsLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVNsaWRlVHJhbnNpdGlvbiBmcm9tICcuLi9zbGlkZS10cmFuc2l0aW9uL1FTbGlkZVRyYW5zaXRpb24uanMnXG5pbXBvcnQgUVNlcGFyYXRvciBmcm9tICcuLi9zZXBhcmF0b3IvUVNlcGFyYXRvci5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB7IHVzZVJvdXRlckxpbmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJvdXRlci1saW5rLmpzJ1xuaW1wb3J0IHVzZU1vZGVsVG9nZ2xlLCB7IHVzZU1vZGVsVG9nZ2xlUHJvcHMsIHVzZU1vZGVsVG9nZ2xlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1tb2RlbC10b2dnbGUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL3V0aWxzL3VpZC5qcydcblxuY29uc3QgaXRlbUdyb3VwcyA9IHNoYWxsb3dSZWFjdGl2ZSh7fSlcbmNvbnN0IExJTktfUFJPUFMgPSBPYmplY3Qua2V5cyh1c2VSb3V0ZXJMaW5rUHJvcHMpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRXhwYW5zaW9uSXRlbScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG4gICAgLi4udXNlTW9kZWxUb2dnbGVQcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBpY29uOiBTdHJpbmcsXG5cbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGxhYmVsTGluZXM6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIGNhcHRpb246IFN0cmluZyxcbiAgICBjYXB0aW9uTGluZXM6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuXG4gICAgZXhwYW5kSWNvbjogU3RyaW5nLFxuICAgIGV4cGFuZGVkSWNvbjogU3RyaW5nLFxuICAgIGV4cGFuZEljb25DbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBkdXJhdGlvbjogTnVtYmVyLFxuXG4gICAgaGVhZGVySW5zZXRMZXZlbDogTnVtYmVyLFxuICAgIGNvbnRlbnRJbnNldExldmVsOiBOdW1iZXIsXG5cbiAgICBleHBhbmRTZXBhcmF0b3I6IEJvb2xlYW4sXG4gICAgZGVmYXVsdE9wZW5lZDogQm9vbGVhbixcbiAgICBleHBhbmRJY29uVG9nZ2xlOiBCb29sZWFuLFxuICAgIHN3aXRjaFRvZ2dsZVNpZGU6IEJvb2xlYW4sXG4gICAgZGVuc2VUb2dnbGU6IEJvb2xlYW4sXG4gICAgZ3JvdXA6IFN0cmluZyxcbiAgICBwb3B1cDogQm9vbGVhbixcblxuICAgIGhlYWRlclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGhlYWRlckNsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzLFxuICAgICdjbGljaycsICdhZnRlci1zaG93JywgJ2FmdGVyLWhpZGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKFxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gbnVsbFxuICAgICAgICA/IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgOiBwcm9wcy5kZWZhdWx0T3BlbmVkXG4gICAgKVxuXG4gICAgY29uc3QgYmx1clRhcmdldFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgeyBoaWRlLCB0b2dnbGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHsgc2hvd2luZyB9KVxuXG4gICAgbGV0IHVuaXF1ZUlkLCBleGl0R3JvdXBcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtZXhwYW5zaW9uLWl0ZW0gcS1pdGVtLXR5cGUnXG4gICAgICArIGAgcS1leHBhbnNpb24taXRlbS0tJHsgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJyB9YFxuICAgICAgKyBgIHEtZXhwYW5zaW9uLWl0ZW0tLSR7IHByb3BzLnBvcHVwID09PSB0cnVlID8gJ3BvcHVwJyA6ICdzdGFuZGFyZCcgfWBcbiAgICApXG5cbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuY29udGVudEluc2V0TGV2ZWwgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdSaWdodCcgOiAnTGVmdCdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFsgJ3BhZGRpbmcnICsgZGlyIF06IChwcm9wcy5jb250ZW50SW5zZXRMZXZlbCAqIDU2KSArICdweCdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaGFzTGluayA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIChcbiAgICAgICAgcHJvcHMuaHJlZiAhPT0gdm9pZCAwXG4gICAgICAgIHx8IChwcm9wcy50byAhPT0gdm9pZCAwICYmIHByb3BzLnRvICE9PSBudWxsICYmIHByb3BzLnRvICE9PSAnJylcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBsaW5rUHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuICAgICAgTElOS19QUk9QUy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGFjY1sga2V5IF0gPSBwcm9wc1sga2V5IF1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGlzQ2xpY2thYmxlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGhhc0xpbmsudmFsdWUgPT09IHRydWUgfHwgcHJvcHMuZXhwYW5kSWNvblRvZ2dsZSAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGV4cGFuc2lvbkljb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5leHBhbmRlZEljb24gIT09IHZvaWQgMCAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuZXhwYW5kZWRJY29uXG4gICAgICAgIDogcHJvcHMuZXhwYW5kSWNvbiB8fCAkcS5pY29uU2V0LmV4cGFuc2lvbkl0ZW1bIHByb3BzLmRlbnNlVG9nZ2xlID09PSB0cnVlID8gJ2RlbnNlSWNvbicgOiAnaWNvbicgXVxuICAgICkpXG5cbiAgICBjb25zdCBhY3RpdmVUb2dnbGVJY29uID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgKGhhc0xpbmsudmFsdWUgPT09IHRydWUgfHwgcHJvcHMuZXhwYW5kSWNvblRvZ2dsZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5ncm91cCwgbmFtZSA9PiB7XG4gICAgICBleGl0R3JvdXAgIT09IHZvaWQgMCAmJiBleGl0R3JvdXAoKVxuICAgICAgbmFtZSAhPT0gdm9pZCAwICYmIGVudGVyR3JvdXAoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvbkhlYWRlckNsaWNrIChlKSB7XG4gICAgICBoYXNMaW5rLnZhbHVlICE9PSB0cnVlICYmIHRvZ2dsZShlKVxuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUljb25LZXlib2FyZCAoZSkge1xuICAgICAgZS5rZXlDb2RlID09PSAxMyAmJiB0b2dnbGVJY29uKGUsIHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlSWNvbiAoZSwga2V5Ym9hcmQpIHtcbiAgICAgIGtleWJvYXJkICE9PSB0cnVlICYmIGJsdXJUYXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgYmx1clRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICB0b2dnbGUoZSlcbiAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TaG93ICgpIHtcbiAgICAgIGVtaXQoJ2FmdGVyLXNob3cnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoKSB7XG4gICAgICBlbWl0KCdhZnRlci1oaWRlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbnRlckdyb3VwICgpIHtcbiAgICAgIGlmICh1bmlxdWVJZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVuaXF1ZUlkID0gdWlkKClcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSA9IHVuaXF1ZUlkXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNob3cgPSB3YXRjaChzaG93aW5nLCB2YWwgPT4ge1xuICAgICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgICAgaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSA9IHVuaXF1ZUlkXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSA9PT0gdW5pcXVlSWQpIHtcbiAgICAgICAgICBkZWxldGUgaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBncm91cCA9IHdhdGNoKFxuICAgICAgICAoKSA9PiBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdLFxuICAgICAgICAodmFsLCBvbGRWYWwpID0+IHtcbiAgICAgICAgICBpZiAob2xkVmFsID09PSB1bmlxdWVJZCAmJiB2YWwgIT09IHZvaWQgMCAmJiB2YWwgIT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgICBoaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgZXhpdEdyb3VwID0gKCkgPT4ge1xuICAgICAgICBzaG93KClcbiAgICAgICAgZ3JvdXAoKVxuXG4gICAgICAgIGlmIChpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdID09PSB1bmlxdWVJZCkge1xuICAgICAgICAgIGRlbGV0ZSBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdXG4gICAgICAgIH1cblxuICAgICAgICBleGl0R3JvdXAgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2dnbGVJY29uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgJ3EtZm9jdXNhYmxlIHJlbGF0aXZlLXBvc2l0aW9uIGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgKyBgJHsgcHJvcHMuZGVuc2VUb2dnbGUgPT09IHRydWUgJiYgcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSA9PT0gdHJ1ZSA/ICcgaXRlbXMtZW5kJyA6ICcnIH1gLFxuICAgICAgICAgIHByb3BzLmV4cGFuZEljb25DbGFzc1xuICAgICAgICBdLFxuICAgICAgICBzaWRlOiBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlICE9PSB0cnVlLFxuICAgICAgICBhdmF0YXI6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX3RvZ2dsZS1pY29uJ1xuICAgICAgICAgICAgKyAocHJvcHMuZXhwYW5kZWRJY29uID09PSB2b2lkIDAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/ICcgcS1leHBhbnNpb24taXRlbV9fdG9nZ2xlLWljb24tLXJvdGF0ZWQnXG4gICAgICAgICAgICAgIDogJycpLFxuICAgICAgICAgIG5hbWU6IGV4cGFuc2lvbkljb24udmFsdWVcbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgaWYgKGFjdGl2ZVRvZ2dsZUljb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgdGFiaW5kZXg6IDAsXG4gICAgICAgICAgb25DbGljazogdG9nZ2xlSWNvbixcbiAgICAgICAgICBvbktleXVwOiB0b2dnbGVJY29uS2V5Ym9hcmRcbiAgICAgICAgfSlcblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIHJlZjogYmx1clRhcmdldFJlZixcbiAgICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fdG9nZ2xlLWZvY3VzIHEtaWNvbiBxLWZvY3VzLWhlbHBlciBxLWZvY3VzLWhlbHBlci0tcm91bmRlZCcsXG4gICAgICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFJdGVtU2VjdGlvbiwgZGF0YSwgKCkgPT4gY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyQ2hpbGQgKCkge1xuICAgICAgbGV0IGNoaWxkXG5cbiAgICAgIGlmIChzbG90cy5oZWFkZXIgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IFtdLmNvbmNhdChzbG90cy5oZWFkZXIoeyBleHBhbmRlZDogc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSB9KSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IFtcbiAgICAgICAgICBoKFFJdGVtU2VjdGlvbiwgKCkgPT4gW1xuICAgICAgICAgICAgaChRSXRlbUxhYmVsLCB7IGxpbmVzOiBwcm9wcy5sYWJlbExpbmVzIH0sICgpID0+IHByb3BzLmxhYmVsIHx8ICcnKSxcblxuICAgICAgICAgICAgcHJvcHMuY2FwdGlvblxuICAgICAgICAgICAgICA/IGgoUUl0ZW1MYWJlbCwgeyBsaW5lczogcHJvcHMuY2FwdGlvbkxpbmVzLCBjYXB0aW9uOiB0cnVlIH0sICgpID0+IHByb3BzLmNhcHRpb24pXG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIF0pXG4gICAgICAgIF1cblxuICAgICAgICBwcm9wcy5pY29uICYmIGNoaWxkWyBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlID09PSB0cnVlID8gJ3B1c2gnIDogJ3Vuc2hpZnQnIF0oXG4gICAgICAgICAgaChRSXRlbVNlY3Rpb24sIHtcbiAgICAgICAgICAgIHNpZGU6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUsXG4gICAgICAgICAgICBhdmF0YXI6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgIT09IHRydWVcbiAgICAgICAgICB9LCAoKSA9PiBoKFFJY29uLCB7IG5hbWU6IHByb3BzLmljb24gfSkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBjaGlsZFsgcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSA9PT0gdHJ1ZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJyBdKFxuICAgICAgICBnZXRUb2dnbGVJY29uKClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogJ2l0ZW0nLFxuICAgICAgICBzdHlsZTogcHJvcHMuaGVhZGVyU3R5bGUsXG4gICAgICAgIGNsYXNzOiBwcm9wcy5oZWFkZXJDbGFzcyxcbiAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgIGluc2V0TGV2ZWw6IHByb3BzLmhlYWRlckluc2V0TGV2ZWxcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGRhdGEuY2xpY2thYmxlID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uQ2xpY2sgPSBvbkhlYWRlckNsaWNrXG5cbiAgICAgICAgaGFzTGluay52YWx1ZSA9PT0gdHJ1ZSAmJiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgbGlua1Byb3BzLnZhbHVlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUl0ZW0sIGRhdGEsIGdldEhlYWRlckNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRyYW5zaXRpb25DaGlsZCAoKSB7XG4gICAgICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdlLWNvbnRlbnQnLFxuICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fY29udGVudCByZWxhdGl2ZS1wb3NpdGlvbicsXG4gICAgICAgICAgc3R5bGU6IGNvbnRlbnRTdHlsZS52YWx1ZVxuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSksXG4gICAgICAgIFsgW1xuICAgICAgICAgIHZTaG93LFxuICAgICAgICAgIHNob3dpbmcudmFsdWVcbiAgICAgICAgXSBdXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBjb25zdCBub2RlID0gW1xuICAgICAgICBnZXRIZWFkZXIoKSxcblxuICAgICAgICBoKFFTbGlkZVRyYW5zaXRpb24sIHtcbiAgICAgICAgICBkdXJhdGlvbjogcHJvcHMuZHVyYXRpb24sXG4gICAgICAgICAgb25TaG93LFxuICAgICAgICAgIG9uSGlkZVxuICAgICAgICB9LCBnZXRUcmFuc2l0aW9uQ2hpbGQpXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5leHBhbmRTZXBhcmF0b3IgPT09IHRydWUpIHtcbiAgICAgICAgbm9kZS5wdXNoKFxuICAgICAgICAgIGgoUVNlcGFyYXRvciwge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXIgcS1leHBhbnNpb24taXRlbV9fYm9yZGVyLS10b3AgYWJzb2x1dGUtdG9wJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGgoUVNlcGFyYXRvciwge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXIgcS1leHBhbnNpb24taXRlbV9fYm9yZGVyLS1ib3R0b20gYWJzb2x1dGUtYm90dG9tJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG5cbiAgICBwcm9wcy5ncm91cCAhPT0gdm9pZCAwICYmIGVudGVyR3JvdXAoKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGV4aXRHcm91cCAhPT0gdm9pZCAwICYmIGV4aXRHcm91cCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIFtcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19jb250YWluZXIgcmVsYXRpdmUtcG9zaXRpb24nIH0sIGdldENvbnRlbnQoKSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZVNwaW5uZXIsIHsgdXNlU3Bpbm5lclByb3BzIH0gZnJvbSAnLi91c2Utc3Bpbm5lci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IHN2ZyA9IFtcbiAgaCgnZycsIHtcbiAgICB0cmFuc2Zvcm06ICdtYXRyaXgoMSAwIDAgLTEgMCA4MCknXG4gIH0sIFtcbiAgICBoKCdyZWN0Jywge1xuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICcyMCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICc0LjNzJyxcbiAgICAgICAgdmFsdWVzOiAnMjA7NDU7NTc7ODA7NjQ7MzI7NjY7NDU7NjQ7MjM7NjY7MTM7NjQ7NTY7MzQ7MzQ7MjsyMzs3Njs3OTsyMCcsXG4gICAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgICAgfSlcbiAgICBdKSxcbiAgICBoKCdyZWN0Jywge1xuICAgICAgeDogJzE1JyxcbiAgICAgIHdpZHRoOiAnMTAnLFxuICAgICAgaGVpZ2h0OiAnODAnLFxuICAgICAgcng6ICczJ1xuICAgIH0sIFtcbiAgICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdoZWlnaHQnLFxuICAgICAgICBiZWdpbjogJzBzJyxcbiAgICAgICAgZHVyOiAnMnMnLFxuICAgICAgICB2YWx1ZXM6ICc4MDs1NTszMzs1Ozc1OzIzOzczOzMzOzEyOzE0OzYwOzgwJyxcbiAgICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgICB9KVxuICAgIF0pLFxuICAgIGgoJ3JlY3QnLCB7XG4gICAgICB4OiAnMzAnLFxuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICc1MCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICcxLjRzJyxcbiAgICAgICAgdmFsdWVzOiAnNTA7MzQ7Nzg7MjM7NTY7MjM7MzQ7NzY7ODA7NTQ7MjE7NTAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSksXG4gICAgaCgncmVjdCcsIHtcbiAgICAgIHg6ICc0NScsXG4gICAgICB3aWR0aDogJzEwJyxcbiAgICAgIGhlaWdodDogJzMwJyxcbiAgICAgIHJ4OiAnMydcbiAgICB9LCBbXG4gICAgICBoKCdhbmltYXRlJywge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnaGVpZ2h0JyxcbiAgICAgICAgYmVnaW46ICcwcycsXG4gICAgICAgIGR1cjogJzJzJyxcbiAgICAgICAgdmFsdWVzOiAnMzA7NDU7MTM7ODA7NTY7NzI7NDU7NzY7MzQ7MjM7Njc7MzAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSlcbiAgXSlcbl1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGlubmVyQXVkaW8nLFxuXG4gIHByb3BzOiB1c2VTcGlubmVyUHJvcHMsXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgd2lkdGg6IGNTaXplLnZhbHVlLFxuICAgICAgaGVpZ2h0OiBjU2l6ZS52YWx1ZSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgNTUgODAnLFxuICAgICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICB9LCBzdmcpXG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIHYtaWY9XCJwcm9wcy50cmFja0luZm9cIj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgPHEtYXZhdGFyIHNxdWFyZT5cbiAgICAgICAgPGltZyA6c3JjPVwicHJvcHMudHJhY2tJbmZvLmFsYnVtLnRodW1ibmFpbC50aW55LnVybFwiPlxuICAgICAgPC9xLWF2YXRhcj5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgOmNsYXNzPVwieyAndGV4dC1ndCcgOiBjdXJyZW50bHlQbGF5aW5nIH1cIj57eyBwcm9wcy50cmFja0luZm8ubmFtZS5fZGVmYXVsdCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgICAgPHEtaXRlbS1sYWJlbCA6Y2xhc3M9XCJ7ICd0ZXh0LWd0JyA6IGN1cnJlbnRseVBsYXlpbmcgfVwiIGNhcHRpb24gbGluZXM9XCIyXCI+e3sgcHJvcHMudHJhY2tJbmZvLmFsYnVtLmFsYnVtTmFtZS5fZGVmYXVsdCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgdi1pZj1cImN1cnJlbnRseVBsYXlpbmdcIj5cbiAgICAgIDxxLXNwaW5uZXItYXVkaW8gdi1pZj1cIiFwYXVzZWRcIiBzaXplPVwiMmVtXCIgY29sb3I9XCJndFwiIC8+XG4gICAgICA8cS1pY29uIHNpemU9XCIyZW1cIiB2LWlmPVwicGF1c2VkXCIgOm5hbWU9XCJvdXRsaW5lZFBhdXNlXCI+PC9xLWljb24+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZSB2LWlmPVwiIWN1cnJlbnRseVBsYXlpbmdcIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57eyBmb3JtYXREdXJhdGlvbihwcm9wcy50cmFja0luZm8uZHVyYXRpb24pIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPC9xLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtUcmFja1JlYWREdG99IGZyb20gJ2FwcC9tdXNpYy1kYXRhLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7Y29tcHV0ZWQsIGRlZmluZVByb3BzfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtmb3JtYXREdXJhdGlvbn0gZnJvbSAnc3JjL3V0aWxzL2R1cmF0aW9uVXRpbHMnO1xuaW1wb3J0IHthdWRpb0NvbnRyb2xsZXJ9IGZyb20gJ2Jvb3QvYXVkaW9Db250cm9sbGVyJztcbmltcG9ydCB7b3V0bGluZWRQYXVzZX0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5jb25zdCBwYXVzZWQgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBhdWRpb0NvbnRyb2xsZXIucGF1c2VkLnZhbHVlO1xufSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRyYWNrSW5mbzogVHJhY2tSZWFkRHRvLFxuICBjdXJyZW50bHlQbGF5aW5nOiBib29sZWFuXG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHEtbGlzdD5cclxuICAgICAgPHEtZXhwYW5zaW9uLWl0ZW1cclxuICAgICAgICBkZW5zZVxyXG4gICAgICAgIGxhYmVsPVwiSGlzdG9yeVwiXHJcbiAgICAgICAgZGVmYXVsdC1vcGVuZWQ+XHJcblxyXG4gICAgICAgIDxRdWV1ZUl0ZW0gdi1mb3I9XCJoaXN0b3J5IGluIHF1ZXVlZEhpc3RvcnlcIiA6a2V5PVwiaGlzdG9yeS5pZFwiXHJcbiAgICAgICAgICAgICAgICAgICA6dHJhY2staW5mbz1cImhpc3RvcnlcIiA6Y3VycmVudGx5LXBsYXlpbmc9XCJmYWxzZVwiPjwvUXVldWVJdGVtPlxyXG5cclxuICAgICAgICA8UXVldWVJdGVtIDpjdXJyZW50bHktcGxheWluZz1cInRydWVcIiA6dHJhY2staW5mbz1cImN1cnJlbnRseVBsYXlpbmdcIj48L1F1ZXVlSXRlbT5cclxuICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPlxyXG5cclxuICAgICAgPHEtZXhwYW5zaW9uLWl0ZW1cclxuICAgICAgICBkZW5zZVxyXG4gICAgICAgIGxhYmVsPVwiTmV4dCBVcFwiXHJcbiAgICAgICAgZGVmYXVsdC1vcGVuZWQ+XHJcbiAgICAgICAgPFF1ZXVlSXRlbSB2LWZvcj1cImZ1dHVyZSBpbiBxdWV1ZWRGdXR1cmVcIiA6a2V5PVwiZnV0dXJlLmlkXCJcclxuICAgICAgICAgICAgICAgICAgIDp0cmFjay1pbmZvPVwiZnV0dXJlXCIgOmN1cnJlbnRseS1wbGF5aW5nPVwiZmFsc2VcIj48L1F1ZXVlSXRlbT5cclxuICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPlxyXG4gICAgPC9xLWxpc3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxyXG5pbXBvcnQgUXVldWVJdGVtIGZyb20gJ2NvbXBvbmVudHMvUXVldWVJdGVtLnZ1ZSc7XHJcbmltcG9ydCB7cXVldWVDb250cm9sbGVyfSBmcm9tICdib290L3NvbmdRdWV1ZSc7XHJcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XHJcblxyXG5jb25zdCBxdWV1ZWRIaXN0b3J5ID0gY29tcHV0ZWQoKCkgPT4ge1xyXG4gIHJldHVybiBxdWV1ZUNvbnRyb2xsZXIuc29uZ0hpc3Rvcnk7XHJcbn0pXHJcblxyXG5jb25zdCBxdWV1ZWRGdXR1cmUgPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgcmV0dXJuIHF1ZXVlQ29udHJvbGxlci5xdWV1ZTtcclxufSlcclxuXHJcbmNvbnN0IGN1cnJlbnRseVBsYXlpbmcgPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgcmV0dXJuIHF1ZXVlQ29udHJvbGxlci5jdXJyZW50bHlQbGF5aW5nO1xyXG59KVxyXG5cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHEtbGlzdCBwYWRkaW5nPlxyXG4gICAgICA8cS1pdGVtPlxyXG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIHRleHQtaDVcIj5cclxuICAgICAgICAgICAgICBMT0dPIEhFUkVcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XHJcbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgPC9xLWl0ZW0+XHJcbiAgICA8L3EtbGlzdD5cclxuXHJcbiAgICA8cS1saXN0IHBhZGRpbmc+XHJcbiAgICAgIDxxLWl0ZW0gdi1mb3I9XCJsaW5rIGluIG5hdmlnYXRpb25zXCIgOmtleT1cImxpbmsudGV4dFwiXHJcbiAgICAgICAgICAgICAgdi1yaXBwbGUgY2xpY2thYmxlIDppbnNldC1sZXZlbD0wLjNcclxuICAgICAgICAgICAgICA6dG89XCJsaW5rLnJvdXRlXCIgZXhhY3RcclxuICAgICAgICAgICAgICA6YWN0aXZlPVwiY3VycmVudFBhdGggPT09IGxpbmsucm91dGUubmFtZVwiXHJcbiAgICAgICAgICAgICAgYWN0aXZlLWNsYXNzPVwidGV4dC13aGl0ZSBiZy1ncmV5LTggdGV4dC13ZWlnaHQtYm9sZGVyXCI+XHJcbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cclxuICAgICAgICAgIDxxLWljb24gOm5hbWU9XCJsaW5rLmljb25cIiBzaXplPVwiMzJweFwiLz5cclxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxyXG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAge3tsaW5rLnRleHR9fVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cclxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxyXG4gICAgICA8L3EtaXRlbT5cclxuXHJcbiAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cInEtbXktbWRcIiAvPlxyXG5cclxuICAgICAgPHEtaXRlbSB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuMz5cclxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxyXG4gICAgICAgICAgPHEtaWNvbiA6bmFtZT1cIm91dGxpbmVkUGxheWxpc3RBZGRcIiBzaXplPVwiMzJweFwiLz5cclxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxyXG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICBDcmVhdGUgUGxheWxpc3RcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxyXG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XHJcbiAgICAgIDwvcS1pdGVtPlxyXG5cclxuICAgICAgPHEtaXRlbSB2LWZvcj1cIml0ZW0gaW4gcGxheWxpc3RJdGVtc1wiIDprZXk9XCJpdGVtXCJcclxuICAgICAgICAgICAgICB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuMz5cclxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxyXG4gICAgICAgICAgPHEtaWNvbiA6bmFtZT1cIm91dGxpbmVkUGxheWxpc3RQbGF5XCIgc2l6ZT1cIjMycHhcIi8+XHJcbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XHJcbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5cclxuICAgICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxyXG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XHJcbiAgICAgIDwvcS1pdGVtPlxyXG4gICAgPC9xLWxpc3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQge2RlZmluZUNvbXBvbmVudH0gZnJvbSAndnVlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgbmFtZTogJ0RyYXdlck5hdmlnYXRpb24nLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICB9XHJcbn0pXHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHtcclxuICBvdXRsaW5lZEhvbWUsXHJcbiAgb3V0bGluZWRQbGF5bGlzdEFkZCxcclxuICBvdXRsaW5lZFBsYXlsaXN0UGxheSxcclxuICBvdXRsaW5lZFNlYXJjaCxcclxuICBvdXRsaW5lZExpYnJhcnlNdXNpYyxcclxuICBvdXRsaW5lZFJhZGlvXHJcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICd2dWUtcm91dGVyJztcclxuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcclxuXHJcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuY29uc3QgY3VycmVudFBhdGggPSBjb21wdXRlZCgoKSA9PiB7XHJcbiAgcmV0dXJuIHJvdXRlci5jdXJyZW50Um91dGUudmFsdWUubmFtZTtcclxufSlcclxuXHJcbmNvbnN0IG5hdmlnYXRpb25zID0gW1xyXG4gIHtcclxuICAgIHRleHQ6ICdIb21lJyxcclxuICAgIGljb246IG91dGxpbmVkSG9tZSxcclxuICAgIHJvdXRlOiB7IG5hbWU6ICdob21lJyB9XHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiAnU2VhcmNoJyxcclxuICAgIGljb246IG91dGxpbmVkU2VhcmNoLFxyXG4gICAgcm91dGU6IHsgbmFtZTogJ3NlYXJjaCcgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ0xpYnJhcnknLFxyXG4gICAgaWNvbjogb3V0bGluZWRMaWJyYXJ5TXVzaWMsXHJcbiAgICByb3V0ZTogeyBuYW1lOiAnbGlicmFyeScgfVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ1JhZGlvJyxcclxuICAgIGljb246IG91dGxpbmVkUmFkaW8sXHJcbiAgICByb3V0ZTogeyBuYW1lOiAncmFkaW8nIH1cclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IHBsYXlsaXN0SXRlbXMgPSBbXHJcbiAgJ3BsYXlsaXN0MScsXHJcbiAgJ2FiYycsXHJcbiAgJ2Rhc2tkcGFvc2Rhc2QnLFxyXG4gICdhc2RmJ1xyXG5dXHJcblxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxxLWxheW91dCB2aWV3PVwibEhoIExwUiBmRmZcIj5cclxuICAgIDxxLWhlYWRlciBib3JkZXJlZD5cclxuICAgICAgPHEtdG9vbGJhcj5cclxuICAgICAgICA8cS10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgc2l6ZT1cImxnXCIgY29sb3I9XCJncmV5LThcIiA6aWNvbj1cIm91dGxpbmVkQXJyb3dCYWNrXCI+XHJcbiAgICAgICAgICAgIDxxLXRvb2x0aXA+QmFjazwvcS10b29sdGlwPlxyXG4gICAgICAgICAgPC9xLWJ0bj5cclxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IHNpemU9XCJsZ1wiIGNvbG9yPVwiZ3JleS04XCIgOmljb249XCJvdXRsaW5lZEFycm93Rm9yd2FyZFwiPlxyXG4gICAgICAgICAgICA8cS10b29sdGlwPkZvcndhcmQ8L3EtdG9vbHRpcD5cclxuICAgICAgICAgIDwvcS1idG4+XHJcbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XHJcblxyXG4gICAgICAgIDxxLXNwYWNlIC8+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1zbSByb3cgaXRlbXMtY2VudGVyIG5vLXdyYXBcIj5cclxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRJbmZvXCIgdi1pZj1cIiRxLnNjcmVlbi5ndC5zbVwiIEBjbGljaz1cInF1ZXVlRGlzcGxheVN0b3JlLnRvZ2dsZSgpXCI+XHJcbiAgICAgICAgICAgIDxxLXRvb2x0aXA+QWJvdXQgVGhpcyBTaXRlPC9xLXRvb2x0aXA+XHJcbiAgICAgICAgICA8L3EtYnRuPlxyXG4gICAgICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXRcclxuICAgICAgICAgICAgICAgICA6aWNvbj1cInEuZGFyay5pc0FjdGl2ZSA/IG91dGxpbmVkRGFya01vZGUgOiBvdXRsaW5lZExpZ2h0TW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgdi1pZj1cIiRxLnNjcmVlbi5ndC5zbVwiIEBjbGljaz1cInRvZ2dsZVRoZW1lXCI+XHJcbiAgICAgICAgICAgIDxxLXRvb2x0aXA+VG9nZ2xlPC9xLXRvb2x0aXA+XHJcbiAgICAgICAgICA8L3EtYnRuPlxyXG4gICAgICAgICAgPHEtYnRuLWRyb3Bkb3duIHJvdW5kZWQgbGFiZWw9XCJzcXoyNjlcIiBzdHlsZT1cIndpZHRoOiAxNTBweFwiPlxyXG4gICAgICAgICAgICA8cS1saXN0PlxyXG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XHJcbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+QWNjb3VudDwvcS1pdGVtLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L3EtaXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cclxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5TZXR0aW5nczwvcS1pdGVtLWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8L3EtaXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1teS1tZFwiIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XHJcbiAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+TG9nb3V0PC9xLWl0ZW0tbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxyXG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxyXG5cclxuICAgICAgICAgICAgPC9xLWxpc3Q+XHJcbiAgICAgICAgICA8L3EtYnRuLWRyb3Bkb3duPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3EtdG9vbGJhcj5cclxuXHJcbiAgICA8L3EtaGVhZGVyPlxyXG5cclxuICAgIDxxLWRyYXdlciBzaG93LWlmLWFib3ZlIHNpZGU9XCJsZWZ0XCIgOndpZHRoPVwiMjcwXCI+XHJcbiAgICAgIDxkcmF3ZXItbmF2aWdhdGlvbj48L2RyYXdlci1uYXZpZ2F0aW9uPlxyXG4gICAgPC9xLWRyYXdlcj5cclxuXHJcbiAgICA8cS1kcmF3ZXIgdi1tb2RlbD1cInNob3dRdWV1ZVwiIHNpZGU9XCJyaWdodFwiIDp3aWR0aD1cIjI3MFwiPlxyXG4gICAgICA8ZHJhd2VyLXF1ZXVlPjwvZHJhd2VyLXF1ZXVlPlxyXG4gICAgPC9xLWRyYXdlcj5cclxuXHJcbiAgICA8cS1wYWdlLWNvbnRhaW5lcj5cclxuICAgICAgPHJvdXRlci12aWV3IHYtc2xvdD1cInsgQ29tcG9uZW50IH1cIj5cclxuICAgICAgICA8a2VlcC1hbGl2ZT5cclxuICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgPC9rZWVwLWFsaXZlPlxyXG4gICAgICA8L3JvdXRlci12aWV3PlxyXG4gICAgPC9xLXBhZ2UtY29udGFpbmVyPlxyXG5cclxuICAgIDxxLWZvb3Rlcj5cclxuICAgICAgPHBsYXllci1jb250cm9sPjwvcGxheWVyLWNvbnRyb2w+XHJcbiAgICA8L3EtZm9vdGVyPlxyXG5cclxuICA8L3EtbGF5b3V0PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgRHJhd2VyTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0RyYXdlck5hdmlnYXRpb24udnVlJ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xyXG4gIG5hbWU6ICdNYWluTGF5b3V0JyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBEcmF3ZXJOYXZpZ2F0aW9uXHJcbiAgfVxyXG59KTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQge1xyXG4gIG91dGxpbmVkSW5mbyxcclxuICBvdXRsaW5lZEFycm93Rm9yd2FyZCxcclxuICBvdXRsaW5lZEFycm93QmFjayxcclxuICBvdXRsaW5lZExpZ2h0TW9kZSxcclxuICBvdXRsaW5lZERhcmtNb2RlXHJcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xyXG5cclxuaW1wb3J0IHtjb21wdXRlZCwgcmVmfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyB1c2VRdWFzYXIsIHNldENzc1ZhciB9IGZyb20gJ3F1YXNhcic7XHJcbmltcG9ydCBQbGF5ZXJDb250cm9sIGZyb20gJ2NvbXBvbmVudHMvUGxheWVyQ29udHJvbC52dWUnO1xyXG5pbXBvcnQge01lZGlhU2Vzc2lvbkNvbnRyb2xsZXJ9IGZyb20gJ3NyYy91dGlscy9NZWRpYVNlc3Npb25Db250cm9sbGVyJztcclxuaW1wb3J0IHt1c2VRdWV1ZURpc3BsYXlTdG9yZX0gZnJvbSAnc3RvcmVzL3Nob3dRdWV1ZSc7XHJcbmltcG9ydCBEcmF3ZXJRdWV1ZSBmcm9tIFwiY29tcG9uZW50cy9EcmF3ZXJRdWV1ZS52dWVcIjtcclxuXHJcbmNvbnN0IGFiYyA9IG5ldyBNZWRpYVNlc3Npb25Db250cm9sbGVyKCk7XHJcblxyXG5jb25zdCBxdWV1ZURpc3BsYXlTdG9yZSA9IHVzZVF1ZXVlRGlzcGxheVN0b3JlKCk7XHJcblxyXG5jb25zdCBzaG93UXVldWUgPSBjb21wdXRlZCgoKSA9PiBxdWV1ZURpc3BsYXlTdG9yZS5zaG93KVxyXG5cclxuY29uc3QgcSA9IHVzZVF1YXNhcigpO1xyXG5xLmRhcmsuc2V0KHRydWUpXHJcbnNldENzc1ZhcigncHJpbWFyeScsICcjMDAwMDAwJylcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xyXG4gIHEuZGFyay50b2dnbGUoKTtcclxuICBpZiAocS5kYXJrLmlzQWN0aXZlKVxyXG4gIHtcclxuICAgIHNldENzc1ZhcigncHJpbWFyeScsICcjMDAwMDAwJylcclxuICB9XHJcbiAgZWxzZVxyXG4gIHtcclxuICAgIHNldENzc1ZhcigncHJpbWFyeScsICcjZmZmZmZmJylcclxuICB9XHJcbn1cclxuXHJcbjwvc2NyaXB0PlxyXG4iXSwibmFtZXMiOlsib2Zmc2V0IiwidmFsdWUiLCJzdHlsZSIsInBvc2l0aW9uIiwic2l6ZSIsImhlaWdodCIsIndpZHRoIiwidGltZXIiLCJfX2RlZmF1bHRfXyIsInN0ZXAiLCJkcmFnZ2luZyIsImNsYXNzZXMiLCJyYXRpbyIsInVpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLQSxJQUFBLGdCQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNUO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsK0JBQ0csTUFBTSxXQUFXLE9BQU8sZ0JBQWdCO0FBQUEsSUFDNUM7QUFFRCxXQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxRQUFRLE1BQUssR0FBSSxNQUFNLE1BQU0sT0FBTyxDQUFDO0FBQUEsRUFDckU7QUFDSCxDQUFDO0FDaEJELE1BQU0sUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLFVBQVMsQ0FBRTtBQUUzQyxJQUFBLFNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sUUFBUztBQUNQLFdBQU8sTUFBTTtBQUFBLEVBQ2Q7QUFDSCxDQUFDO0FDUEQsSUFBQSxZQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFlBQVk7QUFBQSxJQUNaLFNBQVM7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFB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

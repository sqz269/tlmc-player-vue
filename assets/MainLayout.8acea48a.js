import { o as outlinedFavoriteBorder, a as outlinedPlaylistAddCircle, Q as QTooltip, b as outlinedSkipPrevious, c as outlinedPlayArrow, d as outlinedPause, e as outlinedSkipNext, f as outlinedRepeat, g as outlinedShuffle, h as outlinedQueueMusic, i as outlinedPlaylistAdd, j as outlinedPlaylistPlay, k as outlinedHome, l as outlinedSearch, m as outlinedLibraryMusic, n as outlinedRadio, p as outlinedArrowBack, q as outlinedArrowForward, r as outlinedInfo, s as outlinedDarkMode, t as outlinedLightMode } from "./index.69308892.js";
import { j as createComponent, c as computed, h, k as hSlot, u as useBtnProps, r as ref, w as watch, o as onMounted, Q as QIcon, l as QBtn, g as getCurrentInstance, m as stop, n as isRuntimeSsrPreHydration, p as nextTick, q as onBeforeUnmount, t as noop, v as listenOpts, i as inject, x as hUniqueSlot, y as layoutKey, z as createDirective, A as client, B as leftClick, C as addEvt, D as preventDraggable, E as prevent, G as position, H as cleanEvt, I as stopAndPrevent, J as useModelToggleProps, K as useDarkProps, L as useModelToggleEmits, M as useDark, N as useTimeout, O as useModelToggle, P as useHistory, R as between, S as withDirectives, U as hDir, V as usePreventScroll, W as provide, X as pageContainerKey, Y as hMergeSlot, Z as getScrollTarget, _ as getVerticalScrollPosition, $ as getHorizontalScrollPosition, a0 as getScrollbarWidth, a1 as reactive, a as onUnmounted, a2 as _export_sfc, a3 as defineComponent, a4 as unref, a5 as openBlock, a6 as createBlock, a7 as withCtx, d as createVNode, a8 as QCardSection, a9 as createBaseVNode, aa as toDisplayString, ab as QCardActions, ac as QCard, ad as createCommentVNode, ae as queueController, af as isNumber, ag as isObject, ah as useFormProps, ai as useFormInject, aj as useFormAttrs, ak as audioController, al as createElementBlock, am as createTextVNode, F as Fragment, an as defineStore, ao as Transition, ap as shallowReactive, aq as useRouterLinkProps, ar as uid$1, as as QSeparator, at as vShow, au as useSpinnerProps, av as useSpinner, aw as Ripple, ax as QAvatar, ay as normalizeClass, az as renderList, aA as useRouter, aB as setCssVar, aC as resolveComponent, b as isRef, aD as KeepAlive, aE as resolveDynamicComponent } from "./index.9213390a.js";
import { Q as QMenu, c as clearSelection, d as durationToSeconds, f as formatDuration, s as secondsToDuration, a as QItemSection, b as QItem, e as QItemLabel, g as QList } from "./durationUtils.c1d07bfa.js";
import { u as useQuasar, C as ClosePopup } from "./use-quasar.30d957ef.js";
import { Q as QImg } from "./QImg.be3d4679.js";
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
                  (openBlock(), createBlock(KeepAlive, { include: "HomePage" }, [
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC44YWNlYTQ4YS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyVGl0bGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwYWNlL1FTcGFjZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvYnRuLWdyb3VwL1FCdG5Hcm91cC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvYnRuLWRyb3Bkb3duL1FCdG5Ecm9wZG93bi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdG9vbGJhci9RVG9vbGJhci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhbi1yZW5kZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2hlYWRlci9RSGVhZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS90b3VjaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2RyYXdlci9RRHJhd2VyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdlL1FQYWdlQ29udGFpbmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9mb290ZXIvUUZvb3Rlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2Nyb2xsLW9ic2VydmVyL1FTY3JvbGxPYnNlcnZlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbGF5b3V0L1FMYXlvdXQuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UcmFja0luZm9DYXJkLnZ1ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL3VzZS1zbGlkZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci9RU2xpZGVyLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVkaWFDb250cm9sLnZ1ZSIsIi4uLy4uLy4uL3NyYy9zdG9yZXMvc2hvd1F1ZXVlLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUXVldWVDb250cm9sLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllckNvbnRyb2wudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZS10cmFuc2l0aW9uL1FTbGlkZVRyYW5zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2V4cGFuc2lvbi1pdGVtL1FFeHBhbnNpb25JdGVtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zcGlubmVyL1FTcGlubmVyQXVkaW8uanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9RdWV1ZUl0ZW0udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhd2VyUXVldWUudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhd2VyTmF2aWdhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRvb2xiYXJUaXRsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBzaHJpbms6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdG9vbGJhcl9fdGl0bGUgZWxsaXBzaXMnXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3BhY2UgPSBoKCdkaXYnLCB7IGNsYXNzOiAncS1zcGFjZScgfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGFjZScsXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiAoKSA9PiBzcGFjZVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCdG5Hcm91cCcsXG5cbiAgcHJvcHM6IHtcbiAgICB1bmVsZXZhdGVkOiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBwdXNoOiBCb29sZWFuLFxuICAgIHN0cmV0Y2g6IEJvb2xlYW4sXG4gICAgZ2xvc3N5OiBCb29sZWFuLFxuICAgIHNwcmVhZDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNscyA9IFsgJ3VuZWxldmF0ZWQnLCAnb3V0bGluZScsICdmbGF0JywgJ3JvdW5kZWQnLCAnc3F1YXJlJywgJ3B1c2gnLCAnc3RyZXRjaCcsICdnbG9zc3knIF1cbiAgICAgICAgLmZpbHRlcih0ID0+IHByb3BzWyB0IF0gPT09IHRydWUpXG4gICAgICAgIC5tYXAodCA9PiBgcS1idG4tZ3JvdXAtLSR7IHQgfWApLmpvaW4oJyAnKVxuXG4gICAgICByZXR1cm4gYHEtYnRuLWdyb3VwIHJvdyBuby13cmFwJHsgY2xzLmxlbmd0aCA+IDAgPyAnICcgKyBjbHMgOiAnJyB9YFxuICAgICAgICArIChwcm9wcy5zcHJlYWQgPT09IHRydWUgPyAnIHEtYnRuLWdyb3VwLS1zcHJlYWQnIDogJyBpbmxpbmUnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbk1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcbmltcG9ydCBRQnRuR3JvdXAgZnJvbSAnLi4vYnRuLWdyb3VwL1FCdG5Hcm91cC5qcydcbmltcG9ydCBRTWVudSBmcm9tICcuLi9tZW51L1FNZW51LmpzJ1xuXG5pbXBvcnQgeyB1c2VCdG5Qcm9wcyB9IGZyb20gJy4uL2J0bi91c2UtYnRuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQnRuRHJvcGRvd24nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlQnRuUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiBCb29sZWFuLFxuICAgIHNwbGl0OiBCb29sZWFuLFxuICAgIGRyb3Bkb3duSWNvbjogU3RyaW5nLFxuXG4gICAgY29udGVudENsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGNvbnRlbnRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIGNvdmVyOiBCb29sZWFuLFxuICAgIHBlcnNpc3RlbnQ6IEJvb2xlYW4sXG4gICAgbm9Sb3V0ZURpc21pc3M6IEJvb2xlYW4sXG4gICAgYXV0b0Nsb3NlOiBCb29sZWFuLFxuXG4gICAgbWVudUFuY2hvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2JvdHRvbSBlbmQnXG4gICAgfSxcbiAgICBtZW51U2VsZjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RvcCBlbmQnXG4gICAgfSxcbiAgICBtZW51T2Zmc2V0OiBBcnJheSxcblxuICAgIGRpc2FibGVNYWluQnRuOiBCb29sZWFuLFxuICAgIGRpc2FibGVEcm9wZG93bjogQm9vbGVhbixcblxuICAgIG5vSWNvbkFuaW1hdGlvbjogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScsICdjbGljaycsICdiZWZvcmUtc2hvdycsICdzaG93JywgJ2JlZm9yZS1oaWRlJywgJ2hpZGUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihwcm9wcy5tb2RlbFZhbHVlKVxuICAgIGNvbnN0IG1lbnVSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZVxuICAgICAgICB8fCAoXG4gICAgICAgICAgKHByb3BzLnNwbGl0ID09PSBmYWxzZSAmJiBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSlcbiAgICAgICAgICB8fCBwcm9wcy5kaXNhYmxlRHJvcGRvd24gPT09IHRydWVcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBpY29uQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtYnRuLWRyb3Bkb3duX19hcnJvdydcbiAgICAgICsgKHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9JY29uQW5pbWF0aW9uID09PSBmYWxzZSA/ICcgcm90YXRlLTE4MCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNwbGl0ID09PSBmYWxzZSA/ICcgcS1idG4tZHJvcGRvd25fX2Fycm93LWNvbnRhaW5lcicgOiAnJylcbiAgICApXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlWyB2YWwgPyAnc2hvdycgOiAnaGlkZScgXSgpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNwbGl0LCBoaWRlKVxuXG4gICAgZnVuY3Rpb24gb25CZWZvcmVTaG93IChlKSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgnYmVmb3JlLXNob3cnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2hvdyAoZSkge1xuICAgICAgZW1pdCgnc2hvdycsIGUpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25CZWZvcmVIaWRlIChlKSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIGVtaXQoJ2JlZm9yZS1oaWRlJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkhpZGUgKGUpIHtcbiAgICAgIGVtaXQoJ2hpZGUnLCBlKVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBmYWxzZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbGlja0hpZGUgKGUpIHtcbiAgICAgIHN0b3AoZSlcbiAgICAgIGhpZGUoKVxuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZSAoZXZ0KSB7XG4gICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWUudG9nZ2xlKGV2dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93IChldnQpIHtcbiAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZS5zaG93KGV2dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlIChldnQpIHtcbiAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZS5oaWRlKGV2dClcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBzaG93LCBoaWRlLCB0b2dnbGVcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgc2hvdygpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBBcnJvdyA9IFtcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiBpY29uQ2xhc3MudmFsdWUsXG4gICAgICAgICAgbmFtZTogcHJvcHMuZHJvcGRvd25JY29uIHx8IHByb3h5LiRxLmljb25TZXQuYXJyb3cuZHJvcGRvd25cbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgcHJvcHMuZGlzYWJsZURyb3Bkb3duICE9PSB0cnVlICYmIEFycm93LnB1c2goXG4gICAgICAgIGgoUU1lbnUsIHtcbiAgICAgICAgICByZWY6IG1lbnVSZWYsXG4gICAgICAgICAgY2xhc3M6IHByb3BzLmNvbnRlbnRDbGFzcyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuY29udGVudFN0eWxlLFxuICAgICAgICAgIGNvdmVyOiBwcm9wcy5jb3ZlcixcbiAgICAgICAgICBmaXQ6IHRydWUsXG4gICAgICAgICAgcGVyc2lzdGVudDogcHJvcHMucGVyc2lzdGVudCxcbiAgICAgICAgICBub1JvdXRlRGlzbWlzczogcHJvcHMubm9Sb3V0ZURpc21pc3MsXG4gICAgICAgICAgYXV0b0Nsb3NlOiBwcm9wcy5hdXRvQ2xvc2UsXG4gICAgICAgICAgYW5jaG9yOiBwcm9wcy5tZW51QW5jaG9yLFxuICAgICAgICAgIHNlbGY6IHByb3BzLm1lbnVTZWxmLFxuICAgICAgICAgIG9mZnNldDogcHJvcHMubWVudU9mZnNldCxcbiAgICAgICAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IHRydWUsXG4gICAgICAgICAgb25CZWZvcmVTaG93LFxuICAgICAgICAgIG9uU2hvdyxcbiAgICAgICAgICBvbkJlZm9yZUhpZGUsXG4gICAgICAgICAgb25IaWRlXG4gICAgICAgIH0sIHNsb3RzLmRlZmF1bHQpXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9wcy5zcGxpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGgoUUJ0biwge1xuICAgICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd24gcS1idG4tZHJvcGRvd24tLXNpbXBsZScsXG4gICAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgcm91bmQ6IGZhbHNlLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgICAgb25DbGlja1xuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogKCkgPT4gaFNsb3Qoc2xvdHMubGFiZWwsIFtdKS5jb25jYXQoQXJyb3cpLFxuICAgICAgICAgIGxvYWRpbmc6IHNsb3RzLmxvYWRpbmdcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0bkdyb3VwLCB7XG4gICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd24gcS1idG4tZHJvcGRvd24tLXNwbGl0IG5vLXdyYXAgcS1idG4taXRlbScsXG4gICAgICAgIG91dGxpbmU6IHByb3BzLm91dGxpbmUsXG4gICAgICAgIGZsYXQ6IHByb3BzLmZsYXQsXG4gICAgICAgIHJvdW5kZWQ6IHByb3BzLnJvdW5kZWQsXG4gICAgICAgIHNxdWFyZTogcHJvcHMuc3F1YXJlLFxuICAgICAgICBwdXNoOiBwcm9wcy5wdXNoLFxuICAgICAgICB1bmVsZXZhdGVkOiBwcm9wcy51bmVsZXZhdGVkLFxuICAgICAgICBnbG9zc3k6IHByb3BzLmdsb3NzeSxcbiAgICAgICAgc3RyZXRjaDogcHJvcHMuc3RyZXRjaFxuICAgICAgfSwgKCkgPT4gW1xuICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICBjbGFzczogJ3EtYnRuLWRyb3Bkb3duLS1jdXJyZW50JyxcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLmRpc2FibGVNYWluQnRuID09PSB0cnVlLFxuICAgICAgICAgIG5vV3JhcDogdHJ1ZSxcbiAgICAgICAgICBpY29uUmlnaHQ6IHByb3BzLmljb25SaWdodCxcbiAgICAgICAgICByb3VuZDogZmFsc2UsXG4gICAgICAgICAgb25DbGljazogb25DbGlja0hpZGVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IHNsb3RzLmxhYmVsLFxuICAgICAgICAgIGxvYWRpbmc6IHNsb3RzLmxvYWRpbmdcbiAgICAgICAgfSksXG5cbiAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93bl9fYXJyb3ctY29udGFpbmVyIHEtYW5jaG9yLS1za2lwJyxcbiAgICAgICAgICAuLi5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMuZGlzYWJsZURyb3Bkb3duID09PSB0cnVlLFxuICAgICAgICAgIG91dGxpbmU6IHByb3BzLm91dGxpbmUsXG4gICAgICAgICAgZmxhdDogcHJvcHMuZmxhdCxcbiAgICAgICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuICAgICAgICAgIHB1c2g6IHByb3BzLnB1c2gsXG4gICAgICAgICAgc2l6ZTogcHJvcHMuc2l6ZSxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgdGV4dENvbG9yOiBwcm9wcy50ZXh0Q29sb3IsXG4gICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgIHJpcHBsZTogcHJvcHMucmlwcGxlXG4gICAgICAgIH0sICgpID0+IEFycm93KVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRvb2xiYXInLFxuXG4gIHByb3BzOiB7XG4gICAgaW5zZXQ6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdG9vbGJhciByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIChwcm9wcy5pbnNldCA9PT0gdHJ1ZSA/ICcgcS10b29sYmFyLS1pbnNldCcgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IHJlZiwgb25Nb3VudGVkIH0gZnJvbSAndnVlJ1xuXG4vLyB1c2luZyBpdCB0byBtYW5hZ2UgU1NSIHJlbmRlcmluZyB3aXRoIGJlc3QgcGVyZm9ybWFuY2VcbmltcG9ydCB7IGlzUnVudGltZVNzclByZUh5ZHJhdGlvbiB9IGZyb20gJy4uLy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FuUmVuZGVyID0gcmVmKCFpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24udmFsdWUpXG5cbiAgaWYgKGNhblJlbmRlci52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgY2FuUmVuZGVyLnZhbHVlID0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gY2FuUmVuZGVyXG59XG4iLCJpbXBvcnQgeyBoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlLCBuZXh0VGljayB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUNhblJlbmRlciBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYW4tcmVuZGVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuY29uc3QgaGFzT2JzZXJ2ZXIgPSB0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5jb25zdCByZXNpemVQcm9wcyA9IGhhc09ic2VydmVyID09PSB0cnVlXG4gID8ge31cbiAgOiB7XG4gICAgICBzdHlsZTogJ2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3JpZ2h0OjA7Ym90dG9tOjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdmVyZmxvdzpoaWRkZW47cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Oi0xOycsXG4gICAgICB1cmw6ICdhYm91dDpibGFuaydcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUmVzaXplT2JzZXJ2ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgZGVib3VuY2U6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDEwMFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmVzaXplJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fKSB7IHJldHVybiBub29wIH1cblxuICAgIGxldCB0aW1lciA9IG51bGwsIHRhcmdldEVsLCBzaXplID0geyB3aWR0aDogLTEsIGhlaWdodDogLTEgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciAoaW1tZWRpYXRlbHkpIHtcbiAgICAgIGlmIChpbW1lZGlhdGVseSA9PT0gdHJ1ZSB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gMCB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gJzAnKSB7XG4gICAgICAgIGVtaXRFdmVudCgpXG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoZW1pdEV2ZW50LCBwcm9wcy5kZWJvdW5jZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbWl0RXZlbnQgKCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgdGltZXIgPSBudWxsXG5cbiAgICAgIGlmICh0YXJnZXRFbCkge1xuICAgICAgICBjb25zdCB7IG9mZnNldFdpZHRoOiB3aWR0aCwgb2Zmc2V0SGVpZ2h0OiBoZWlnaHQgfSA9IHRhcmdldEVsXG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSBzaXplLndpZHRoIHx8IGhlaWdodCAhPT0gc2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICBzaXplID0geyB3aWR0aCwgaGVpZ2h0IH1cbiAgICAgICAgICBlbWl0KCdyZXNpemUnLCBzaXplKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGlmIChoYXNPYnNlcnZlciA9PT0gdHJ1ZSkge1xuICAgICAgbGV0IG9ic2VydmVyXG5cbiAgICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0YXJnZXRFbCA9IHByb3h5LiRlbC5wYXJlbnROb2RlXG5cbiAgICAgICAgICBpZiAodGFyZ2V0RWwpIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKHRyaWdnZXIpXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRhcmdldEVsKVxuICAgICAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG5cbiAgICAgICAgaWYgKG9ic2VydmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIuZGlzY29ubmVjdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodGFyZ2V0RWwpIHsgLy8gRkYgZm9yIEFuZHJvaWRcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZSh0YXJnZXRFbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIHJldHVybiBub29wXG4gICAgfVxuICAgIGVsc2UgeyAvLyBubyBvYnNlcnZlciwgc28gZmFsbGJhY2sgdG8gb2xkIGlmcmFtZSBtZXRob2RcbiAgICAgIGNvbnN0IGNhblJlbmRlciA9IHVzZUNhblJlbmRlcigpXG5cbiAgICAgIGxldCBjdXJEb2NWaWV3XG5cbiAgICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG5cbiAgICAgICAgaWYgKGN1ckRvY1ZpZXcgIT09IHZvaWQgMCkge1xuICAgICAgICAgIC8vIGlPUyBpcyBmdXp6eSwgbmVlZCB0byBjaGVjayBpdCBmaXJzdFxuICAgICAgICAgIGlmIChjdXJEb2NWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgY3VyRG9jVmlldy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0cmlnZ2VyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgICAgICAgfVxuICAgICAgICAgIGN1ckRvY1ZpZXcgPSB2b2lkIDBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvbk9iakxvYWQgKCkge1xuICAgICAgICBjbGVhbnVwKClcblxuICAgICAgICBpZiAodGFyZ2V0RWwgJiYgdGFyZ2V0RWwuY29udGVudERvY3VtZW50KSB7XG4gICAgICAgICAgY3VyRG9jVmlldyA9IHRhcmdldEVsLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlld1xuICAgICAgICAgIGN1ckRvY1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdHJpZ2dlciwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgICAgICAgIGVtaXRFdmVudCgpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHRhcmdldEVsID0gcHJveHkuJGVsXG4gICAgICAgICAgdGFyZ2V0RWwgJiYgb25PYmpMb2FkKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZFxuICAgICAgcHJveHkudHJpZ2dlciA9IHRyaWdnZXJcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgaWYgKGNhblJlbmRlci52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiBoKCdvYmplY3QnLCB7XG4gICAgICAgICAgICBzdHlsZTogcmVzaXplUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICB0YWJpbmRleDogLTEsIC8vIGZpeCBmb3IgRmlyZWZveFxuICAgICAgICAgICAgdHlwZTogJ3RleHQvaHRtbCcsXG4gICAgICAgICAgICBkYXRhOiByZXNpemVQcm9wcy51cmwsXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICBvbkxvYWQ6IG9uT2JqTG9hZFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSGVhZGVyJyxcblxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICByZXZlYWw6IEJvb2xlYW4sXG4gICAgcmV2ZWFsT2Zmc2V0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAyNTBcbiAgICB9LFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGVsZXZhdGVkOiBCb29sZWFuLFxuXG4gICAgaGVpZ2h0SGludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3JldmVhbCcsICdmb2N1c2luJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksICgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FIZWFkZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgfSlcblxuICAgIGNvbnN0IHNpemUgPSByZWYocGFyc2VJbnQocHJvcHMuaGVpZ2h0SGludCwgMTApKVxuICAgIGNvbnN0IHJldmVhbGVkID0gcmVmKHRydWUpXG5cbiAgICBjb25zdCBmaXhlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICAgIHx8ICRsYXlvdXQudmlldy52YWx1ZS5pbmRleE9mKCdIJykgPiAtMVxuICAgICAgfHwgKCRxLnBsYXRmb3JtLmlzLmlvcyAmJiAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJldmVhbGVkLnZhbHVlID09PSB0cnVlID8gc2l6ZS52YWx1ZSA6IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9IHNpemUudmFsdWUgLSAkbGF5b3V0LnNjcm9sbC52YWx1ZS5wb3NpdGlvblxuICAgICAgcmV0dXJuIG9mZnNldCA+IDAgPyBvZmZzZXQgOiAwXG4gICAgfSlcblxuICAgIGNvbnN0IGhpZGRlbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgIHx8IChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSAmJiByZXZlYWxlZC52YWx1ZSAhPT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCByZXZlYWxPbkZvY3VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgaGlkZGVuLnZhbHVlID09PSB0cnVlICYmIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtaGVhZGVyIHEtbGF5b3V0X19zZWN0aW9uLS1tYXJnaW5hbCAnXG4gICAgICArIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnKSArICctdG9wJ1xuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtaGVhZGVyLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKGhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWhpZGRlbicgOiAnJylcbiAgICAgICsgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUgPyAnIHEtbGF5b3V0LS1wcmV2ZW50LWZvY3VzJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgdmlldyA9ICRsYXlvdXQucm93cy52YWx1ZS50b3AsXG4gICAgICAgIGNzcyA9IHt9XG5cbiAgICAgIGlmICh2aWV3WyAwIF0gPT09ICdsJyAmJiAkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAodmlld1sgMiBdID09PSAncicgJiYgJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKCdoZWFkZXInLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIHVwZGF0ZUxvY2FsKHNpemUsIGhlaWdodClcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzaW4gKGV2dCkge1xuICAgICAgaWYgKHJldmVhbE9uRm9jdXMudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2ZvY3VzaW4nLCBldnQpXG4gICAgfVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCB2YWwpXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgfSlcblxuICAgIHdhdGNoKG9mZnNldCwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5yZXZlYWwsIHZhbCA9PiB7XG4gICAgICB2YWwgPT09IGZhbHNlICYmIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIH0pXG5cbiAgICB3YXRjaChyZXZlYWxlZCwgdmFsID0+IHtcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICBlbWl0KCdyZXZlYWwnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQuc2Nyb2xsLCBzY3JvbGwgPT4ge1xuICAgICAgcHJvcHMucmV2ZWFsID09PSB0cnVlICYmIHVwZGF0ZUxvY2FsKHJldmVhbGVkLFxuICAgICAgICBzY3JvbGwuZGlyZWN0aW9uID09PSAndXAnXG4gICAgICAgIHx8IHNjcm9sbC5wb3NpdGlvbiA8PSBwcm9wcy5yZXZlYWxPZmZzZXRcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIC0gc2Nyb2xsLmluZmxlY3Rpb25Qb2ludCA8IDEwMFxuICAgICAgKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHt9XG5cbiAgICAkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPSBpbnN0YW5jZVxuICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgdXBkYXRlTGF5b3V0KCdzaXplJywgc2l6ZS52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXMuaGVhZGVyID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPSB2b2lkIDBcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgZmFsc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhVbmlxdWVTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuXG4gICAgICBwcm9wcy5lbGV2YXRlZCA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICBjaGlsZC5wdXNoKFxuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdoZWFkZXInLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIG9uRm9jdXNpblxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiY29uc3QgbW9kaWZpZXJzQWxsID0ge1xuICBsZWZ0OiB0cnVlLFxuICByaWdodDogdHJ1ZSxcbiAgdXA6IHRydWUsXG4gIGRvd246IHRydWUsXG4gIGhvcml6b250YWw6IHRydWUsXG4gIHZlcnRpY2FsOiB0cnVlXG59XG5cbmNvbnN0IGRpcmVjdGlvbkxpc3QgPSBPYmplY3Qua2V5cyhtb2RpZmllcnNBbGwpXG5cbm1vZGlmaWVyc0FsbC5hbGwgPSB0cnVlXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RpZmllckRpcmVjdGlvbnMgKG1vZCkge1xuICBjb25zdCBkaXIgPSB7fVxuXG4gIGZvciAoY29uc3QgZGlyZWN0aW9uIG9mIGRpcmVjdGlvbkxpc3QpIHtcbiAgICBpZiAobW9kWyBkaXJlY3Rpb24gXSA9PT0gdHJ1ZSkge1xuICAgICAgZGlyWyBkaXJlY3Rpb24gXSA9IHRydWVcbiAgICB9XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZGlyKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbW9kaWZpZXJzQWxsXG4gIH1cblxuICBpZiAoZGlyLmhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICBkaXIubGVmdCA9IGRpci5yaWdodCA9IHRydWVcbiAgfVxuICBlbHNlIGlmIChkaXIubGVmdCA9PT0gdHJ1ZSAmJiBkaXIucmlnaHQgPT09IHRydWUpIHtcbiAgICBkaXIuaG9yaXpvbnRhbCA9IHRydWVcbiAgfVxuXG4gIGlmIChkaXIudmVydGljYWwgPT09IHRydWUpIHtcbiAgICBkaXIudXAgPSBkaXIuZG93biA9IHRydWVcbiAgfVxuICBlbHNlIGlmIChkaXIudXAgPT09IHRydWUgJiYgZGlyLmRvd24gPT09IHRydWUpIHtcbiAgICBkaXIudmVydGljYWwgPSB0cnVlXG4gIH1cblxuICBpZiAoZGlyLmhvcml6b250YWwgPT09IHRydWUgJiYgZGlyLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyLmFsbCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiBkaXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFN0YXJ0IChldnQsIGN0eCkge1xuICByZXR1cm4gY3R4LmV2ZW50ID09PSB2b2lkIDBcbiAgICAmJiBldnQudGFyZ2V0ICE9PSB2b2lkIDBcbiAgICAmJiBldnQudGFyZ2V0LmRyYWdnYWJsZSAhPT0gdHJ1ZVxuICAgICYmIHR5cGVvZiBjdHguaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIGV2dC50YXJnZXQubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0lOUFVUJ1xuICAgICYmIChldnQucUNsb25lZEJ5ID09PSB2b2lkIDAgfHwgZXZ0LnFDbG9uZWRCeS5pbmRleE9mKGN0eC51aWQpID09PSAtMSlcbn1cbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kaWZpZXJEaXJlY3Rpb25zLCBzaG91bGRTdGFydCB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvdG91Y2guanMnXG5pbXBvcnQgeyBhZGRFdnQsIGNsZWFuRXZ0LCBwb3NpdGlvbiwgbGVmdENsaWNrLCBwcmV2ZW50LCBzdG9wLCBzdG9wQW5kUHJldmVudCwgcHJldmVudERyYWdnYWJsZSwgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi91dGlscy9wcml2YXRlL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbmZ1bmN0aW9uIGdldENoYW5nZXMgKGV2dCwgY3R4LCBpc0ZpbmFsKSB7XG4gIGNvbnN0IHBvcyA9IHBvc2l0aW9uKGV2dClcbiAgbGV0XG4gICAgZGlyLFxuICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICBkaXN0WSA9IHBvcy50b3AgLSBjdHguZXZlbnQueSxcbiAgICBhYnNYID0gTWF0aC5hYnMoZGlzdFgpLFxuICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICBjb25zdCBkaXJlY3Rpb24gPSBjdHguZGlyZWN0aW9uXG5cbiAgaWYgKGRpcmVjdGlvbi5ob3Jpem9udGFsID09PSB0cnVlICYmIGRpcmVjdGlvbi52ZXJ0aWNhbCAhPT0gdHJ1ZSkge1xuICAgIGRpciA9IGRpc3RYIDwgMCA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24uaG9yaXpvbnRhbCAhPT0gdHJ1ZSAmJiBkaXJlY3Rpb24udmVydGljYWwgPT09IHRydWUpIHtcbiAgICBkaXIgPSBkaXN0WSA8IDAgPyAndXAnIDogJ2Rvd24nXG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGRpc3RZIDwgMCkge1xuICAgIGRpciA9ICd1cCdcbiAgICBpZiAoYWJzWCA+IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBkaXN0WCA8IDApIHtcbiAgICAgICAgZGlyID0gJ2xlZnQnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgZGlzdFggPiAwKSB7XG4gICAgICAgIGRpciA9ICdyaWdodCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgZGlzdFkgPiAwKSB7XG4gICAgZGlyID0gJ2Rvd24nXG4gICAgaWYgKGFic1ggPiBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgZGlzdFggPCAwKSB7XG4gICAgICAgIGRpciA9ICdsZWZ0J1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGRpc3RYID4gMCkge1xuICAgICAgICBkaXIgPSAncmlnaHQnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGRpc3RYIDwgMCkge1xuICAgIGRpciA9ICdsZWZ0J1xuICAgIGlmIChhYnNYIDwgYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBkaXN0WSA8IDApIHtcbiAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgZGlzdFkgPiAwKSB7XG4gICAgICAgIGRpciA9ICdkb3duJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgZGlzdFggPiAwKSB7XG4gICAgZGlyID0gJ3JpZ2h0J1xuICAgIGlmIChhYnNYIDwgYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBkaXN0WSA8IDApIHtcbiAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgZGlzdFkgPiAwKSB7XG4gICAgICAgIGRpciA9ICdkb3duJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCBzeW50aGV0aWMgPSBmYWxzZVxuXG4gIGlmIChkaXIgPT09IHZvaWQgMCAmJiBpc0ZpbmFsID09PSBmYWxzZSkge1xuICAgIGlmIChjdHguZXZlbnQuaXNGaXJzdCA9PT0gdHJ1ZSB8fCBjdHguZXZlbnQubGFzdERpciA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBkaXIgPSBjdHguZXZlbnQubGFzdERpclxuICAgIHN5bnRoZXRpYyA9IHRydWVcblxuICAgIGlmIChkaXIgPT09ICdsZWZ0JyB8fCBkaXIgPT09ICdyaWdodCcpIHtcbiAgICAgIHBvcy5sZWZ0IC09IGRpc3RYXG4gICAgICBhYnNYID0gMFxuICAgICAgZGlzdFggPSAwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcG9zLnRvcCAtPSBkaXN0WVxuICAgICAgYWJzWSA9IDBcbiAgICAgIGRpc3RZID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3ludGhldGljLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGV2dCxcbiAgICAgIHRvdWNoOiBjdHguZXZlbnQubW91c2UgIT09IHRydWUsXG4gICAgICBtb3VzZTogY3R4LmV2ZW50Lm1vdXNlID09PSB0cnVlLFxuICAgICAgcG9zaXRpb246IHBvcyxcbiAgICAgIGRpcmVjdGlvbjogZGlyLFxuICAgICAgaXNGaXJzdDogY3R4LmV2ZW50LmlzRmlyc3QsXG4gICAgICBpc0ZpbmFsOiBpc0ZpbmFsID09PSB0cnVlLFxuICAgICAgZHVyYXRpb246IERhdGUubm93KCkgLSBjdHguZXZlbnQudGltZSxcbiAgICAgIGRpc3RhbmNlOiB7XG4gICAgICAgIHg6IGFic1gsXG4gICAgICAgIHk6IGFic1lcbiAgICAgIH0sXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgeDogZGlzdFgsXG4gICAgICAgIHk6IGRpc3RZXG4gICAgICB9LFxuICAgICAgZGVsdGE6IHtcbiAgICAgICAgeDogcG9zLmxlZnQgLSBjdHguZXZlbnQubGFzdFgsXG4gICAgICAgIHk6IHBvcy50b3AgLSBjdHguZXZlbnQubGFzdFlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubGV0IHVpZCA9IDBcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ3RvdWNoLXBhbicsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtcGFuJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMgfSkge1xuICAgICAgICAvLyBlYXJseSByZXR1cm4sIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmdcbiAgICAgICAgaWYgKG1vZGlmaWVycy5tb3VzZSAhPT0gdHJ1ZSAmJiBjbGllbnQuaGFzLnRvdWNoICE9PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVFdmVudCAoZXZ0LCBtb3VzZUV2ZW50KSB7XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5tb3VzZSA9PT0gdHJ1ZSAmJiBtb3VzZUV2ZW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdG9wQW5kUHJldmVudChldnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnN0b3AgPT09IHRydWUgJiYgc3RvcChldnQpXG4gICAgICAgICAgICBtb2RpZmllcnMucHJldmVudCA9PT0gdHJ1ZSAmJiBwcmV2ZW50KGV2dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgdWlkOiAncXZ0cF8nICsgKHVpZCsrKSxcbiAgICAgICAgICBoYW5kbGVyOiB2YWx1ZSxcbiAgICAgICAgICBtb2RpZmllcnMsXG4gICAgICAgICAgZGlyZWN0aW9uOiBnZXRNb2RpZmllckRpcmVjdGlvbnMobW9kaWZpZXJzKSxcblxuICAgICAgICAgIG5vb3AsXG5cbiAgICAgICAgICBtb3VzZVN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkgJiYgbGVmdENsaWNrKGV2dCkpIHtcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNlbW92ZScsICdtb3ZlJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZXVwJywgJ2VuZCcsICdwYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHRvdWNoU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSkge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG5cbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaG1vdmUnLCAnbW92ZScsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgJ2VuZCcsICdwYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoZW5kJywgJ2VuZCcsICdwYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHN0YXJ0IChldnQsIG1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIHRydWUpXG4gICAgICAgICAgICBjdHgubGFzdEV2dCA9IGV2dFxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIHNvIHBvc3NpYmxlIHVwcGVyIHYtdG91Y2gtcGFuIGRvbid0IGNhdGNoIHRoaXMgYXMgd2VsbDtcbiAgICAgICAgICAgICogSWYgd2UncmUgbm90IHRoZSB0YXJnZXQgKGJhc2VkIG9uIG1vZGlmaWVycyksIHdlJ2xsIHJlLWVtaXQgdGhlIGV2ZW50IGxhdGVyXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKG1vdXNlRXZlbnQgPT09IHRydWUgfHwgbW9kaWZpZXJzLnN0b3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgKiBhcmUgd2UgZGlyZWN0bHkgc3dpdGNoaW5nIHRvIGRldGVjdGVkIHN0YXRlP1xuICAgICAgICAgICAgICAqIGNsb25lIGV2ZW50IG9ubHkgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLmFsbCAhPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICYmIChtb3VzZUV2ZW50ICE9PSB0cnVlIHx8IGN0eC5tb2RpZmllcnMubW91c2VBbGxEaXIgIT09IHRydWUpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lID0gZXZ0LnR5cGUuaW5kZXhPZignbW91c2UnKSA+IC0xXG4gICAgICAgICAgICAgICAgICA/IG5ldyBNb3VzZUV2ZW50KGV2dC50eXBlLCBldnQpXG4gICAgICAgICAgICAgICAgICA6IG5ldyBUb3VjaEV2ZW50KGV2dC50eXBlLCBldnQpXG5cbiAgICAgICAgICAgICAgICBldnQuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSAmJiBwcmV2ZW50KGNsb25lKVxuICAgICAgICAgICAgICAgIGV2dC5jYW5jZWxCdWJibGUgPT09IHRydWUgJiYgc3RvcChjbG9uZSlcblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2xvbmUsIHtcbiAgICAgICAgICAgICAgICAgIHFLZXlFdmVudDogZXZ0LnFLZXlFdmVudCxcbiAgICAgICAgICAgICAgICAgIHFDbGlja091dHNpZGU6IGV2dC5xQ2xpY2tPdXRzaWRlLFxuICAgICAgICAgICAgICAgICAgcUFuY2hvckhhbmRsZWQ6IGV2dC5xQW5jaG9ySGFuZGxlZCxcbiAgICAgICAgICAgICAgICAgIHFDbG9uZWRCeTogZXZ0LnFDbG9uZWRCeSA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgID8gWyBjdHgudWlkIF1cbiAgICAgICAgICAgICAgICAgICAgOiBldnQucUNsb25lZEJ5LmNvbmNhdChjdHgudWlkKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBjdHguaW5pdGlhbEV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBldnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgZXZlbnQ6IGNsb25lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3RvcChldnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSBwb3NpdGlvbihldnQpXG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHtcbiAgICAgICAgICAgICAgeDogbGVmdCxcbiAgICAgICAgICAgICAgeTogdG9wLFxuICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICBtb3VzZTogbW91c2VFdmVudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgZGV0ZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpc0ZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICBpc0ZpbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgbGFzdFg6IGxlZnQsXG4gICAgICAgICAgICAgIGxhc3RZOiB0b3BcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbW92ZSAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICAgICAgICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICAgICAgICAgICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnlcblxuICAgICAgICAgICAgLy8gcHJldmVudCBidWdneSBicm93c2VyIGJlaGF2aW9yIChsaWtlIEJsaW5rLWJhc2VkIGVuZ2luZSBvbmVzIG9uIFdpbmRvd3MpXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgbW91c2Vtb3ZlIGV2ZW50IG9jY3VycyBldmVuIGlmIHRoZXJlJ3Mgbm8gbW92ZW1lbnQgYWZ0ZXIgbW91c2Vkb3duXG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNjE0NjRcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTcyMTM0MVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3F1YXNhcmZyYW1ld29yay9xdWFzYXIvaXNzdWVzLzEwNzIxXG4gICAgICAgICAgICBpZiAoZGlzdFggPT09IDAgJiYgZGlzdFkgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5sYXN0RXZ0ID0gZXZ0XG5cbiAgICAgICAgICAgIGNvbnN0IGlzTW91c2VFdnQgPSBjdHguZXZlbnQubW91c2UgPT09IHRydWVcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVFdmVudChldnQsIGlzTW91c2VFdnQpXG5cbiAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcmVzZXJ2ZUN1cnNvciAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnZ3JhYmJpbmcnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaXNNb3VzZUV2dCA9PT0gdHJ1ZSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXBvaW50ZXItZXZlbnRzLS1jaGlsZHJlbicpXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG5cbiAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHdpdGhEZWxheWVkRm4gPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgIGlmIChtb2RpZmllcnMucHJlc2VydmVDdXJzb3IgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICAgICAgICAgIGlmIChpc01vdXNlRXZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHdpdGhEZWxheWVkRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICAgIHdpdGhEZWxheWVkRm4oKVxuICAgICAgICAgICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgeyByZW1vdmUoKSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpdGhEZWxheWVkRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgd2l0aERlbGF5ZWRGbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgIT09IHRydWUgJiYgaGFuZGxlRXZlbnQoZXZ0LCBjdHguZXZlbnQubW91c2UpXG5cbiAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkLCBzeW50aGV0aWMgfSA9IGdldENoYW5nZXMoZXZ0LCBjdHgsIGZhbHNlKVxuXG4gICAgICAgICAgICAgIGlmIChwYXlsb2FkICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmhhbmRsZXIocGF5bG9hZCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICBjdHguZW5kKGV2dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3R4LnN0eWxlQ2xlYW51cCA9PT0gdm9pZCAwICYmIGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KClcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50Lmxhc3RYID0gcGF5bG9hZC5wb3NpdGlvbi5sZWZ0XG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdFkgPSBwYXlsb2FkLnBvc2l0aW9uLnRvcFxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50Lmxhc3REaXIgPSBzeW50aGV0aWMgPT09IHRydWUgPyB2b2lkIDAgOiBwYXlsb2FkLmRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uYWxsID09PSB0cnVlXG4gICAgICAgICAgICAgIHx8IChpc01vdXNlRXZ0ID09PSB0cnVlICYmIGN0eC5tb2RpZmllcnMubW91c2VBbGxEaXIgPT09IHRydWUpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc3RhcnQoKVxuICAgICAgICAgICAgICBjdHguZXZlbnQuZGV0ZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgIGN0eC5tb3ZlKGV2dClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIGFic1ggPSBNYXRoLmFicyhkaXN0WCksXG4gICAgICAgICAgICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICAgICAgICAgICAgaWYgKGFic1ggIT09IGFic1kpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChjdHguZGlyZWN0aW9uLmhvcml6b250YWwgPT09IHRydWUgJiYgYWJzWCA+IGFic1kpXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24udmVydGljYWwgPT09IHRydWUgJiYgYWJzWCA8IGFic1kpXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24udXAgPT09IHRydWUgJiYgYWJzWCA8IGFic1kgJiYgZGlzdFkgPCAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgYWJzWCA8IGFic1kgJiYgZGlzdFkgPiAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgYWJzWCA+IGFic1kgJiYgZGlzdFggPCAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGFic1ggPiBhYnNZICYmIGRpc3RYID4gMClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY3R4LmV2ZW50LmRldGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlKGV2dClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHguZW5kKGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQgKGV2dCwgYWJvcnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKGFib3J0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgICAgICBpZiAoY3R4LmV2ZW50LmRldGVjdGVkICE9PSB0cnVlICYmIGN0eC5pbml0aWFsRXZlbnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGN0eC5pbml0aWFsRXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoY3R4LmluaXRpYWxFdmVudC5ldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3R4LmV2ZW50LmRldGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlICYmIGN0eC5oYW5kbGVyKGdldENoYW5nZXMoZXZ0ID09PSB2b2lkIDAgPyBjdHgubGFzdEV2dCA6IGV2dCwgY3R4KS5wYXlsb2FkKVxuXG4gICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gZ2V0Q2hhbmdlcyhldnQgPT09IHZvaWQgMCA/IGN0eC5sYXN0RXZ0IDogZXZ0LCBjdHgsIHRydWUpXG4gICAgICAgICAgICAgIGNvbnN0IGZuID0gKCkgPT4geyBjdHguaGFuZGxlcihwYXlsb2FkKSB9XG5cbiAgICAgICAgICAgICAgaWYgKGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAoZm4pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm4oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHZvaWQgMFxuICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudCA9IHZvaWQgMFxuICAgICAgICAgICAgY3R4Lmxhc3RFdnQgPSB2b2lkIDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbC5fX3F0b3VjaHBhbiA9IGN0eFxuXG4gICAgICAgIG1vZGlmaWVycy5tb3VzZSA9PT0gdHJ1ZSAmJiBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICBbIGVsLCAnbW91c2Vkb3duJywgJ21vdXNlU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5tb3VzZUNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJyB9YCBdXG4gICAgICAgIF0pXG5cbiAgICAgICAgY2xpZW50Lmhhcy50b3VjaCA9PT0gdHJ1ZSAmJiBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICBbIGVsLCAndG91Y2hzdGFydCcsICd0b3VjaFN0YXJ0JywgYHBhc3NpdmUkeyBtb2RpZmllcnMuY2FwdHVyZSA9PT0gdHJ1ZSA/ICdDYXB0dXJlJyA6ICcnIH1gIF0sXG4gICAgICAgICAgWyBlbCwgJ3RvdWNobW92ZScsICdub29wJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZ3MpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hwYW5cblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoYmluZGluZ3Mub2xkVmFsdWUgIT09IGJpbmRpbmdzLnZhbHVlKSB7XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgY3R4LmVuZCgpXG4gICAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmdzLnZhbHVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3R4LmRpcmVjdGlvbiA9IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhiaW5kaW5ncy5tb2RpZmllcnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNocGFuXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLy8gZW1pdCB0aGUgZW5kIGV2ZW50IHdoZW4gdGhlIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQgd2hpbGUgYWN0aXZlXG4gICAgICAgICAgLy8gdGhpcyBpcyBvbmx5IG5lZWRlZCBpbiBUb3VjaFBhbiBiZWNhdXNlIHRoZSByZXN0IG9mIHRoZSB0b3VjaCBkaXJlY3RpdmVzIGRvIG5vdCBlbWl0IGFuIGVuZCBldmVudFxuICAgICAgICAgIC8vIHRoZSBjb25kaXRpb24gaXMgYWxzbyBjaGVja2VkIGluIHRoZSBzdGFydCBvZiBmdW5jdGlvbiBidXQgd2UgYXZvaWQgdGhlIGNhbGxcbiAgICAgICAgICBjdHguZXZlbnQgIT09IHZvaWQgMCAmJiBjdHguZW5kKClcblxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ21haW4nKVxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG4gICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAoKVxuXG4gICAgICAgICAgZGVsZXRlIGVsLl9fcXRvdWNocGFuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4pXG4iLCJpbXBvcnQgeyBoLCB3aXRoRGlyZWN0aXZlcywgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VIaXN0b3J5IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWhpc3RvcnkuanMnXG5pbXBvcnQgdXNlTW9kZWxUb2dnbGUsIHsgdXNlTW9kZWxUb2dnbGVQcm9wcywgdXNlTW9kZWxUb2dnbGVFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLW1vZGVsLXRvZ2dsZS5qcydcbmltcG9ydCB1c2VQcmV2ZW50U2Nyb2xsIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXByZXZlbnQtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGltZW91dC5qcydcbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBoU2xvdCwgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5jb25zdCBkdXJhdGlvbiA9IDE1MFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUURyYXdlcicsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgc2lkZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xlZnQnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2xlZnQnLCAncmlnaHQnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH0sXG5cbiAgICBtaW5pOiBCb29sZWFuLFxuICAgIG1pbmlUb092ZXJsYXk6IEJvb2xlYW4sXG4gICAgbWluaVdpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1N1xuICAgIH0sXG5cbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAxMDIzXG4gICAgfSxcbiAgICBzaG93SWZBYm92ZTogQm9vbGVhbixcblxuICAgIGJlaGF2aW9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnZGVmYXVsdCcsICdkZXNrdG9wJywgJ21vYmlsZScgXS5pbmNsdWRlcyh2KSxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgIH0sXG5cbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIG92ZXJsYXk6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBub1N3aXBlT3BlbjogQm9vbGVhbixcbiAgICBub1N3aXBlQ2xvc2U6IEJvb2xlYW4sXG4gICAgbm9Td2lwZUJhY2tkcm9wOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzLFxuICAgICdvbi1sYXlvdXQnLCAnbWluaS1zdGF0ZSdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQsIGF0dHJzIH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSB2bVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBwcmV2ZW50Qm9keVNjcm9sbCB9ID0gdXNlUHJldmVudFNjcm9sbCgpXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksICgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FEcmF3ZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgfSlcblxuICAgIGxldCBsYXN0RGVza3RvcFN0YXRlLCB0aW1lck1pbmksIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyXG5cbiAgICBjb25zdCBiZWxvd0JyZWFrcG9pbnQgPSByZWYoXG4gICAgICBwcm9wcy5iZWhhdmlvciA9PT0gJ21vYmlsZSdcbiAgICAgIHx8IChwcm9wcy5iZWhhdmlvciAhPT0gJ2Rlc2t0b3AnICYmICRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSA8PSBwcm9wcy5icmVha3BvaW50KVxuICAgIClcblxuICAgIGNvbnN0IGlzTWluaSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5taW5pID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IHNpemUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBpc01pbmkudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5taW5pV2lkdGhcbiAgICAgICAgOiBwcm9wcy53aWR0aFxuICAgICkpXG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZVxuICAgICAgICA/IHRydWVcbiAgICAgICAgOiBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgaGlkZU9uUm91dGVDaGFuZ2UgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMucGVyc2lzdGVudCAhPT0gdHJ1ZVxuICAgICAgJiYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSB8fCBvblNjcmVlbk92ZXJsYXkudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvdyAoZXZ0LCBub0V2ZW50KSB7XG4gICAgICBhZGRUb0hpc3RvcnkoKVxuXG4gICAgICBldnQgIT09IGZhbHNlICYmICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICBhcHBseVBvc2l0aW9uKDApXG5cbiAgICAgIGlmIChiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3RoZXJJbnN0YW5jZSA9ICRsYXlvdXQuaW5zdGFuY2VzWyBvdGhlclNpZGUudmFsdWUgXVxuICAgICAgICBpZiAob3RoZXJJbnN0YW5jZSAhPT0gdm9pZCAwICYmIG90aGVySW5zdGFuY2UuYmVsb3dCcmVha3BvaW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgb3RoZXJJbnN0YW5jZS5oaWRlKGZhbHNlKVxuICAgICAgICB9XG5cbiAgICAgICAgYXBwbHlCYWNrZHJvcCgxKVxuICAgICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlICYmIHByZXZlbnRCb2R5U2Nyb2xsKHRydWUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICBldnQgIT09IGZhbHNlICYmIHNldFNjcm9sbGFibGUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7XG4gICAgICAgIGV2dCAhPT0gZmFsc2UgJiYgc2V0U2Nyb2xsYWJsZSh0cnVlKVxuICAgICAgICBub0V2ZW50ICE9PSB0cnVlICYmIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgICB9LCBkdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVIaWRlIChldnQsIG5vRXZlbnQpIHtcbiAgICAgIHJlbW92ZUZyb21IaXN0b3J5KClcblxuICAgICAgZXZ0ICE9PSBmYWxzZSAmJiAkbGF5b3V0LmFuaW1hdGUoKVxuXG4gICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogc2l6ZS52YWx1ZSlcblxuICAgICAgY2xlYW51cCgpXG5cbiAgICAgIG5vRXZlbnQgIT09IHRydWUgJiYgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZW1pdCgnaGlkZScsIGV2dClcbiAgICAgIH0sIGR1cmF0aW9uKVxuICAgIH1cblxuICAgIGNvbnN0IHsgc2hvdywgaGlkZSB9ID0gdXNlTW9kZWxUb2dnbGUoe1xuICAgICAgc2hvd2luZyxcbiAgICAgIGhpZGVPblJvdXRlQ2hhbmdlLFxuICAgICAgaGFuZGxlU2hvdyxcbiAgICAgIGhhbmRsZUhpZGVcbiAgICB9KVxuXG4gICAgY29uc3QgeyBhZGRUb0hpc3RvcnksIHJlbW92ZUZyb21IaXN0b3J5IH0gPSB1c2VIaXN0b3J5KHNob3dpbmcsIGhpZGUsIGhpZGVPblJvdXRlQ2hhbmdlKVxuXG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgICBiZWxvd0JyZWFrcG9pbnQsXG4gICAgICBoaWRlXG4gICAgfVxuXG4gICAgY29uc3QgcmlnaHRTaWRlID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2lkZSA9PT0gJ3JpZ2h0JylcblxuICAgIGNvbnN0IHN0YXRlRGlyZWN0aW9uID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiAocmlnaHRTaWRlLnZhbHVlID09PSB0cnVlID8gMSA6IC0xKVxuICAgIClcblxuICAgIGNvbnN0IGZsYWdCYWNrZHJvcEJnID0gcmVmKDApXG4gICAgY29uc3QgZmxhZ1Bhbm5pbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgZmxhZ01pbmlBbmltYXRlID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGZsYWdDb250ZW50UG9zaXRpb24gPSByZWYoIC8vIHN0YXJ0aW5nIHdpdGggXCJoaWRkZW5cIiBmb3IgU1NSXG4gICAgICBzaXplLnZhbHVlICogc3RhdGVEaXJlY3Rpb24udmFsdWVcbiAgICApXG5cbiAgICBjb25zdCBvdGhlclNpZGUgPSBjb21wdXRlZCgoKSA9PiAocmlnaHRTaWRlLnZhbHVlID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JykpXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlICYmIHByb3BzLm92ZXJsYXkgPT09IGZhbHNlXG4gICAgICAgID8gKHByb3BzLm1pbmlUb092ZXJsYXkgPT09IHRydWUgPyBwcm9wcy5taW5pV2lkdGggOiBzaXplLnZhbHVlKVxuICAgICAgICA6IDBcbiAgICApKVxuXG4gICAgY29uc3QgZml4ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3ZlcmxheSA9PT0gdHJ1ZVxuICAgICAgfHwgcHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YocmlnaHRTaWRlLnZhbHVlID8gJ1InIDogJ0wnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zID09PSB0cnVlICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb25MYXlvdXQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3ZlcmxheSA9PT0gZmFsc2VcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICApXG5cbiAgICBjb25zdCBvblNjcmVlbk92ZXJsYXkgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMub3ZlcmxheSA9PT0gdHJ1ZVxuICAgICAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZVxuICAgIClcblxuICAgIGNvbnN0IGJhY2tkcm9wQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ2Z1bGxzY3JlZW4gcS1kcmF3ZXJfX2JhY2tkcm9wJ1xuICAgICAgKyAoc2hvd2luZy52YWx1ZSA9PT0gZmFsc2UgJiYgZmxhZ1Bhbm5pbmcudmFsdWUgPT09IGZhbHNlID8gJyBoaWRkZW4nIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgYmFja2Ryb3BTdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGByZ2JhKDAsMCwwLCR7IGZsYWdCYWNrZHJvcEJnLnZhbHVlICogMC40IH0pYFxuICAgIH0pKVxuXG4gICAgY29uc3QgaGVhZGVyU2xvdCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQucm93cy52YWx1ZS50b3BbIDIgXSA9PT0gJ3InXG4gICAgICAgIDogJGxheW91dC5yb3dzLnZhbHVlLnRvcFsgMCBdID09PSAnbCdcbiAgICApKVxuXG4gICAgY29uc3QgZm9vdGVyU2xvdCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b21bIDIgXSA9PT0gJ3InXG4gICAgICAgIDogJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbVsgMCBdID09PSAnbCdcbiAgICApKVxuXG4gICAgY29uc3QgYWJvdmVTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNzcyA9IHt9XG5cbiAgICAgIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSAmJiBoZWFkZXJTbG90LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBjc3MudG9wID0gYCR7ICRsYXlvdXQuaGVhZGVyLm9mZnNldCB9cHhgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJGxheW91dC5oZWFkZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgICBjc3MudG9wID0gYCR7ICRsYXlvdXQuaGVhZGVyLnNpemUgfXB4YFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgkbGF5b3V0LmZvb3Rlci5zcGFjZSA9PT0gdHJ1ZSAmJiBmb290ZXJTbG90LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBjc3MuYm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLm9mZnNldCB9cHhgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgICBjc3MuYm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLnNpemUgfXB4YFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IGAkeyBzaXplLnZhbHVlIH1weGAsXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHsgZmxhZ0NvbnRlbnRQb3NpdGlvbi52YWx1ZSB9cHgpYFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gc3R5bGVcbiAgICAgICAgOiBPYmplY3QuYXNzaWduKHN0eWxlLCBhYm92ZVN0eWxlLnZhbHVlKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250ZW50Q2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtZHJhd2VyX19jb250ZW50IGZpdCAnXG4gICAgICArICgkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlID8gJ3Njcm9sbCcgOiAnb3ZlcmZsb3ctYXV0bycpXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1kcmF3ZXIgcS1kcmF3ZXItLSR7IHByb3BzLnNpZGUgfWBcbiAgICAgICsgKGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLW1pbmktYW5pbWF0ZScgOiAnJylcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWRyYXdlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICAgICsgKFxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gJyBuby10cmFuc2l0aW9uJ1xuICAgICAgICAgIDogKHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnKVxuICAgICAgKVxuICAgICAgKyAoXG4gICAgICAgIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgID8gJyBmaXhlZCBxLWRyYXdlci0tb24tdG9wIHEtZHJhd2VyLS1tb2JpbGUgcS1kcmF3ZXItLXRvcC1wYWRkaW5nJ1xuICAgICAgICAgIDogYCBxLWRyYXdlci0tJHsgaXNNaW5pLnZhbHVlID09PSB0cnVlID8gJ21pbmknIDogJ3N0YW5kYXJkJyB9YFxuICAgICAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlIHx8IG9uTGF5b3V0LnZhbHVlICE9PSB0cnVlID8gJyBmaXhlZCcgOiAnJylcbiAgICAgICAgICArIChwcm9wcy5vdmVybGF5ID09PSB0cnVlIHx8IHByb3BzLm1pbmlUb092ZXJsYXkgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1vbi10b3AnIDogJycpXG4gICAgICAgICAgKyAoaGVhZGVyU2xvdC52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLXRvcC1wYWRkaW5nJyA6ICcnKVxuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IG9wZW5EaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBpZiBwcm9wcy5ub1N3aXBlT3BlbiAhPT0gdHJ1ZVxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyBwcm9wcy5zaWRlIDogb3RoZXJTaWRlLnZhbHVlXG5cbiAgICAgIHJldHVybiBbIFtcbiAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgIG9uT3BlblBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgY29uc3QgY29udGVudENsb3NlRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlICYmIHByb3BzLm5vU3dpcGVDbG9zZSAhPT0gdHJ1ZVxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyBvdGhlclNpZGUudmFsdWUgOiBwcm9wcy5zaWRlXG5cbiAgICAgIHJldHVybiBbIFtcbiAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgIG9uQ2xvc2VQYW4sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAge1xuICAgICAgICAgIFsgZGlyIF06IHRydWUsXG4gICAgICAgICAgbW91c2U6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSBdXG4gICAgfSlcblxuICAgIGNvbnN0IGJhY2tkcm9wQ2xvc2VEaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBpZiBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByb3BzLm5vU3dpcGVCYWNrZHJvcCAhPT0gdHJ1ZVxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyBvdGhlclNpZGUudmFsdWUgOiBwcm9wcy5zaWRlXG5cbiAgICAgIHJldHVybiBbIFtcbiAgICAgICAgVG91Y2hQYW4sXG4gICAgICAgIG9uQ2xvc2VQYW4sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAge1xuICAgICAgICAgIFsgZGlyIF06IHRydWUsXG4gICAgICAgICAgbW91c2U6IHRydWUsXG4gICAgICAgICAgbW91c2VBbGxEaXI6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSBdXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUJlbG93QnJlYWtwb2ludCAoKSB7XG4gICAgICB1cGRhdGVMb2NhbChiZWxvd0JyZWFrcG9pbnQsIChcbiAgICAgICAgcHJvcHMuYmVoYXZpb3IgPT09ICdtb2JpbGUnXG4gICAgICAgIHx8IChwcm9wcy5iZWhhdmlvciAhPT0gJ2Rlc2t0b3AnICYmICRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSA8PSBwcm9wcy5icmVha3BvaW50KVxuICAgICAgKSlcbiAgICB9XG5cbiAgICB3YXRjaChiZWxvd0JyZWFrcG9pbnQsIHZhbCA9PiB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7IC8vIGZyb20gbGcgdG8geHNcbiAgICAgICAgbGFzdERlc2t0b3BTdGF0ZSA9IHNob3dpbmcudmFsdWVcbiAgICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBoaWRlKGZhbHNlKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXG4gICAgICAgIHByb3BzLm92ZXJsYXkgPT09IGZhbHNlXG4gICAgICAgICYmIHByb3BzLmJlaGF2aW9yICE9PSAnbW9iaWxlJ1xuICAgICAgICAmJiBsYXN0RGVza3RvcFN0YXRlICE9PSBmYWxzZVxuICAgICAgKSB7IC8vIGZyb20geHMgdG8gbGdcbiAgICAgICAgaWYgKHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKDApXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICAgIGNsZWFudXAoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNob3coZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2lkZSwgKG5ld1NpZGUsIG9sZFNpZGUpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlc1sgb2xkU2lkZSBdID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlc1sgb2xkU2lkZSBdID0gdm9pZCAwXG4gICAgICAgICRsYXlvdXRbIG9sZFNpZGUgXS5zcGFjZSA9IGZhbHNlXG4gICAgICAgICRsYXlvdXRbIG9sZFNpZGUgXS5vZmZzZXQgPSAwXG4gICAgICB9XG5cbiAgICAgICRsYXlvdXQuaW5zdGFuY2VzWyBuZXdTaWRlIF0gPSBpbnN0YW5jZVxuICAgICAgJGxheW91dFsgbmV3U2lkZSBdLnNpemUgPSBzaXplLnZhbHVlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0uc3BhY2UgPSBvbkxheW91dC52YWx1ZVxuICAgICAgJGxheW91dFsgbmV3U2lkZSBdLm9mZnNldCA9IG9mZnNldC52YWx1ZVxuICAgIH0pXG5cbiAgICB3YXRjaCgkbGF5b3V0LnRvdGFsV2lkdGgsICgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlIHx8IGRvY3VtZW50LnFTY3JvbGxQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlQmVsb3dCcmVha3BvaW50KClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBwcm9wcy5iZWhhdmlvciArIHByb3BzLmJyZWFrcG9pbnQsXG4gICAgICB1cGRhdGVCZWxvd0JyZWFrcG9pbnRcbiAgICApXG5cbiAgICB3YXRjaCgkbGF5b3V0LmlzQ29udGFpbmVyLCB2YWwgPT4ge1xuICAgICAgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcmV2ZW50Qm9keVNjcm9sbCh2YWwgIT09IHRydWUpXG4gICAgICB2YWwgPT09IHRydWUgJiYgdXBkYXRlQmVsb3dCcmVha3BvaW50KClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGxiYXJXaWR0aCwgKCkgPT4ge1xuICAgICAgYXBwbHlQb3NpdGlvbihzaG93aW5nLnZhbHVlID09PSB0cnVlID8gMCA6IHZvaWQgMClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4geyB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbCkgfSlcblxuICAgIHdhdGNoKG9uTGF5b3V0LCB2YWwgPT4ge1xuICAgICAgZW1pdCgnb24tbGF5b3V0JywgdmFsKVxuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2gocmlnaHRTaWRlLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goc2l6ZSwgdmFsID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oKVxuICAgICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaVRvT3ZlcmxheSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZVNpemVPbkxheW91dCh2YWwsIHNpemUudmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+ICRxLmxhbmcucnRsLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaSwgKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgYW5pbWF0ZU1pbmkoKVxuICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChpc01pbmksIHZhbCA9PiB7IGVtaXQoJ21pbmktc3RhdGUnLCB2YWwpIH0pXG5cbiAgICBmdW5jdGlvbiBhcHBseVBvc2l0aW9uIChwb3NpdGlvbikge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSB2b2lkIDApIHtcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHBvc2l0aW9uID0gc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBzaXplLnZhbHVlXG4gICAgICAgICAgYXBwbHlQb3NpdGlvbihzdGF0ZURpcmVjdGlvbi52YWx1ZSAqIHBvc2l0aW9uKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgJiYgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgJiYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSB8fCBNYXRoLmFicyhwb3NpdGlvbikgPT09IHNpemUudmFsdWUpXG4gICAgICAgICkge1xuICAgICAgICAgIHBvc2l0aW9uICs9IHN0YXRlRGlyZWN0aW9uLnZhbHVlICogJGxheW91dC5zY3JvbGxiYXJXaWR0aC52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgZmxhZ0NvbnRlbnRQb3NpdGlvbi52YWx1ZSA9IHBvc2l0aW9uXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwbHlCYWNrZHJvcCAoeCkge1xuICAgICAgZmxhZ0JhY2tkcm9wQmcudmFsdWUgPSB4XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2Nyb2xsYWJsZSAodikge1xuICAgICAgY29uc3QgYWN0aW9uID0gdiA9PT0gdHJ1ZVxuICAgICAgICA/ICdyZW1vdmUnXG4gICAgICAgIDogKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgPyAnYWRkJyA6ICcnKVxuXG4gICAgICBhY3Rpb24gIT09ICcnICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0WyBhY3Rpb24gXSgncS1ib2R5LS1kcmF3ZXItdG9nZ2xlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlTWluaSAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJNaW5pKVxuXG4gICAgICBpZiAodm0ucHJveHkgJiYgdm0ucHJveHkuJGVsKSB7XG4gICAgICAgIC8vIG5lZWQgdG8gc3BlZWQgaXQgdXAgYW5kIGFwcGx5IGl0IGltbWVkaWF0ZWx5LFxuICAgICAgICAvLyBldmVuIGZhc3RlciB0aGFuIFZ1ZSdzIG5leHRUaWNrIVxuICAgICAgICB2bS5wcm94eS4kZWwuY2xhc3NMaXN0LmFkZCgncS1kcmF3ZXItLW1pbmktYW5pbWF0ZScpXG4gICAgICB9XG5cbiAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IHRydWVcbiAgICAgIHRpbWVyTWluaSA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmbGFnTWluaUFuaW1hdGUudmFsdWUgPSBmYWxzZVxuICAgICAgICBpZiAodm0gJiYgdm0ucHJveHkgJiYgdm0ucHJveHkuJGVsKSB7XG4gICAgICAgICAgdm0ucHJveHkuJGVsLmNsYXNzTGlzdC5yZW1vdmUoJ3EtZHJhd2VyLS1taW5pLWFuaW1hdGUnKVxuICAgICAgICB9XG4gICAgICB9LCAxNTApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25PcGVuUGFuIChldnQpIHtcbiAgICAgIGlmIChzaG93aW5nLnZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgICAvLyBzb21lIGJyb3dzZXJzIG1pZ2h0IGNhcHR1cmUgYW5kIHRyaWdnZXIgdGhpc1xuICAgICAgICAvLyBldmVuIGlmIERyYXdlciBoYXMganVzdCBiZWVuIG9wZW5lZCAoYnV0IGFuaW1hdGlvbiBpcyBzdGlsbCBwZW5kaW5nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBzaXplLnZhbHVlLFxuICAgICAgICBwb3NpdGlvbiA9IGJldHdlZW4oZXZ0LmRpc3RhbmNlLngsIDAsIHdpZHRoKVxuXG4gICAgICBpZiAoZXZ0LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gcG9zaXRpb24gPj0gTWF0aC5taW4oNzUsIHdpZHRoKVxuXG4gICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBzaG93KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogd2lkdGgpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhcHBseVBvc2l0aW9uKFxuICAgICAgICAoJHEubGFuZy5ydGwgPT09IHRydWUgPyByaWdodFNpZGUudmFsdWUgIT09IHRydWUgOiByaWdodFNpZGUudmFsdWUpXG4gICAgICAgICAgPyBNYXRoLm1heCh3aWR0aCAtIHBvc2l0aW9uLCAwKVxuICAgICAgICAgIDogTWF0aC5taW4oMCwgcG9zaXRpb24gLSB3aWR0aClcbiAgICAgIClcbiAgICAgIGFwcGx5QmFja2Ryb3AoXG4gICAgICAgIGJldHdlZW4ocG9zaXRpb24gLyB3aWR0aCwgMCwgMSlcbiAgICAgIClcblxuICAgICAgaWYgKGV2dC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xvc2VQYW4gKGV2dCkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgLy8gc29tZSBicm93c2VycyBtaWdodCBjYXB0dXJlIGFuZCB0cmlnZ2VyIHRoaXNcbiAgICAgICAgLy8gZXZlbiBpZiBEcmF3ZXIgaGFzIGp1c3QgYmVlbiBjbG9zZWQgKGJ1dCBhbmltYXRpb24gaXMgc3RpbGwgcGVuZGluZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHdpZHRoID0gc2l6ZS52YWx1ZSxcbiAgICAgICAgZGlyID0gZXZ0LmRpcmVjdGlvbiA9PT0gcHJvcHMuc2lkZSxcbiAgICAgICAgcG9zaXRpb24gPSAoJHEubGFuZy5ydGwgPT09IHRydWUgPyBkaXIgIT09IHRydWUgOiBkaXIpXG4gICAgICAgICAgPyBiZXR3ZWVuKGV2dC5kaXN0YW5jZS54LCAwLCB3aWR0aClcbiAgICAgICAgICA6IDBcblxuICAgICAgaWYgKGV2dC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG9wZW5lZCA9IE1hdGguYWJzKHBvc2l0aW9uKSA8IE1hdGgubWluKDc1LCB3aWR0aClcblxuICAgICAgICBpZiAob3BlbmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgICAgICBhcHBseUJhY2tkcm9wKDEpXG4gICAgICAgICAgYXBwbHlQb3NpdGlvbigwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGhpZGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgYXBwbHlQb3NpdGlvbihzdGF0ZURpcmVjdGlvbi52YWx1ZSAqIHBvc2l0aW9uKVxuICAgICAgYXBwbHlCYWNrZHJvcChiZXR3ZWVuKDEgLSBwb3NpdGlvbiAvIHdpZHRoLCAwLCAxKSlcblxuICAgICAgaWYgKGV2dC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgICAgcHJldmVudEJvZHlTY3JvbGwoZmFsc2UpXG4gICAgICBzZXRTY3JvbGxhYmxlKHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKHByb3BzLnNpZGUsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTaXplT25MYXlvdXQgKG1pbmlUb092ZXJsYXksIHNpemUpIHtcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIG1pbmlUb092ZXJsYXkgPT09IHRydWUgPyBwcm9wcy5taW5pV2lkdGggOiBzaXplKVxuICAgIH1cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzWyBwcm9wcy5zaWRlIF0gPSBpbnN0YW5jZVxuICAgIHVwZGF0ZVNpemVPbkxheW91dChwcm9wcy5taW5pVG9PdmVybGF5LCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBvbkxheW91dC52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIGlmIChcbiAgICAgIHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlXG4gICAgICAmJiBwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gIT09IHZvaWQgMFxuICAgICkge1xuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB0cnVlKVxuICAgIH1cblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBlbWl0KCdvbi1sYXlvdXQnLCBvbkxheW91dC52YWx1ZSlcbiAgICAgIGVtaXQoJ21pbmktc3RhdGUnLCBpc01pbmkudmFsdWUpXG5cbiAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZVxuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IGhhbmRsZVNob3cgOiBoYW5kbGVIaWRlXG4gICAgICAgIGFjdGlvbihmYWxzZSwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSAhPT0gMCkge1xuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbGwgY29tcHV0ZWQgcHJvcGVydGllc1xuICAgICAgICAvLyBoYXZlIGJlZW4gdXBkYXRlZCBiZWZvcmUgY2FsbGluZyBoYW5kbGVTaG93L2hhbmRsZUhpZGUoKVxuICAgICAgICBuZXh0VGljayhmbilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyID0gd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyKClcbiAgICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgPSB2b2lkIDBcblxuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gZmFsc2UgJiYgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHNob3coZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm4oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgIT09IHZvaWQgMCAmJiBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlcigpXG4gICAgICBjbGVhclRpbWVvdXQodGltZXJNaW5pKVxuXG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGNsZWFudXAoKVxuXG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgaWYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9wcy5ub1N3aXBlT3BlbiA9PT0gZmFsc2UgJiYgY2hpbGQucHVzaChcbiAgICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAnb3BlbicsXG4gICAgICAgICAgICAgIGNsYXNzOiBgcS1kcmF3ZXJfX29wZW5lciBmaXhlZC0keyBwcm9wcy5zaWRlIH1gLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgb3BlbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaERpcihcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdiYWNrZHJvcCcsXG4gICAgICAgICAgICAgIGNsYXNzOiBiYWNrZHJvcENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogYmFja2Ryb3BTdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBoaWRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgJ2JhY2tkcm9wJyxcbiAgICAgICAgICAgIHByb3BzLm5vU3dpcGVCYWNrZHJvcCAhPT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICAgKCkgPT4gYmFja2Ryb3BDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5pID0gaXNNaW5pLnZhbHVlID09PSB0cnVlICYmIHNsb3RzLm1pbmkgIT09IHZvaWQgMFxuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGtleTogJycgKyBtaW5pLCAvLyByZXF1aXJlZCBvdGhlcndpc2UgVnVlIHdpbGwgbm90IGRpZmYgY29ycmVjdGx5XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIGNvbnRlbnRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIGF0dHJzLmNsYXNzXG4gICAgICAgICAgXVxuICAgICAgICB9LCBtaW5pID09PSB0cnVlXG4gICAgICAgICAgPyBzbG90cy5taW5pKClcbiAgICAgICAgICA6IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICAgIClcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGhEaXIoXG4gICAgICAgICAgJ2FzaWRlJyxcbiAgICAgICAgICB7IHJlZjogJ2NvbnRlbnQnLCBjbGFzczogY2xhc3Nlcy52YWx1ZSwgc3R5bGU6IHN0eWxlLnZhbHVlIH0sXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAnY29udGVudGNsb3NlJyxcbiAgICAgICAgICBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICgpID0+IGNvbnRlbnRDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS1kcmF3ZXItY29udGFpbmVyJyB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgcHJvdmlkZSwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHBhZ2VDb250YWluZXJLZXksIGxheW91dEtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlQ29udGFpbmVyJyxcblxuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksICgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlQ29udGFpbmVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgIH0pXG5cbiAgICBwcm92aWRlKHBhZ2VDb250YWluZXJLZXksIHRydWUpXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNzcyA9IHt9XG5cbiAgICAgIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3MucGFkZGluZ1RvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICgkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdMZWZ0JyA6ICdSaWdodCcgfWAgXSA9IGAkeyAkbGF5b3V0LnJpZ2h0LnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nQm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbIGBwYWRkaW5nJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnIH1gIF0gPSBgJHsgJGxheW91dC5sZWZ0LnNpemUgfXB4YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogJ3EtcGFnZS1jb250YWluZXInLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb290ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIGhlaWdodEhpbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXZlYWwnLCAnZm9jdXNpbicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRm9vdGVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgIH0pXG5cbiAgICBjb25zdCBzaXplID0gcmVmKHBhcnNlSW50KHByb3BzLmhlaWdodEhpbnQsIDEwKSlcbiAgICBjb25zdCByZXZlYWxlZCA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHJlZihcbiAgICAgIGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSB8fCAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gMFxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIClcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0YnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgIDogd2luZG93SGVpZ2h0LnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJldmVhbGVkLnZhbHVlID09PSB0cnVlID8gc2l6ZS52YWx1ZSA6IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uICsgY29udGFpbmVySGVpZ2h0LnZhbHVlICsgc2l6ZS52YWx1ZSAtICRsYXlvdXQuaGVpZ2h0LnZhbHVlXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1mb290ZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy1ib3R0b20nXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1mb290ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWZvb3Rlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICAgICA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnICsgKGZpeGVkLnZhbHVlICE9PSB0cnVlID8gJyBoaWRkZW4nIDogJycpXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgdmlldyA9ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b20sXG4gICAgICAgIGNzcyA9IHt9XG5cbiAgICAgIGlmICh2aWV3WyAwIF0gPT09ICdsJyAmJiAkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAodmlld1sgMiBdID09PSAncicgJiYgJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKCdmb290ZXInLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIHVwZGF0ZUxvY2FsKHNpemUsIGhlaWdodClcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXZlYWxlZCAoKSB7XG4gICAgICBpZiAocHJvcHMucmV2ZWFsICE9PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBwb3NpdGlvbiwgaW5mbGVjdGlvblBvaW50IH0gPSAkbGF5b3V0LnNjcm9sbC52YWx1ZVxuXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgKFxuICAgICAgICBkaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgcG9zaXRpb24gLSBpbmZsZWN0aW9uUG9pbnQgPCAxMDBcbiAgICAgICAgfHwgJGxheW91dC5oZWlnaHQudmFsdWUgLSBjb250YWluZXJIZWlnaHQudmFsdWUgLSBwb3NpdGlvbiAtIHNpemUudmFsdWUgPCAzMDBcbiAgICAgICkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChldnQpIHtcbiAgICAgIGlmIChyZXZlYWxPbkZvY3VzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdmb2N1c2luJywgZXZ0KVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZWFsLCB2YWwgPT4ge1xuICAgICAgdmFsID09PSBmYWxzZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCwgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2gocmV2ZWFsZWQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgZW1pdCgncmV2ZWFsJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaChbIHNpemUsICRsYXlvdXQuc2Nyb2xsLCAkbGF5b3V0LmhlaWdodCBdLCB1cGRhdGVSZXZlYWxlZClcblxuICAgIHdhdGNoKCgpID0+ICRxLnNjcmVlbi5oZWlnaHQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlICYmIHVwZGF0ZUxvY2FsKHdpbmRvd0hlaWdodCwgdmFsKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHt9XG5cbiAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSBpbnN0YW5jZVxuICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgdXBkYXRlTGF5b3V0KCdzaXplJywgc2l6ZS52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSB2b2lkIDBcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgZmFsc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplXG4gICAgICAgIH0pXG4gICAgICBdKVxuXG4gICAgICBwcm9wcy5lbGV2YXRlZCA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZm9vdGVyJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICBvbkZvY3VzaW5cbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IHdhdGNoLCBvbk1vdW50ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cywgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCB7IHBhc3NpdmUgfSA9IGxpc3Rlbk9wdHNcbmNvbnN0IGF4aXNWYWx1ZXMgPSBbICdib3RoJywgJ2hvcml6b250YWwnLCAndmVydGljYWwnIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTY3JvbGxPYnNlcnZlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBheGlzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gYXhpc1ZhbHVlcy5pbmNsdWRlcyh2KSxcbiAgICAgIGRlZmF1bHQ6ICd2ZXJ0aWNhbCdcbiAgICB9LFxuXG4gICAgZGVib3VuY2U6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdzY3JvbGwnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHNjcm9sbCA9IHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSxcblxuICAgICAgZGlyZWN0aW9uOiAnZG93bicsXG4gICAgICBkaXJlY3Rpb25DaGFuZ2VkOiBmYWxzZSxcblxuICAgICAgZGVsdGE6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LFxuXG4gICAgICBpbmZsZWN0aW9uUG9pbnQ6IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNsZWFyVGltZXIgPSBudWxsLCBsb2NhbFNjcm9sbFRhcmdldCwgcGFyZW50RWxcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNjcm9sbFRhcmdldCwgKCkgPT4ge1xuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZW1pdEV2ZW50ICgpIHtcbiAgICAgIGNsZWFyVGltZXIgIT09IG51bGwgJiYgY2xlYXJUaW1lcigpXG5cbiAgICAgIGNvbnN0IHRvcCA9IE1hdGgubWF4KDAsIGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpKVxuICAgICAgY29uc3QgbGVmdCA9IGdldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldClcblxuICAgICAgY29uc3QgZGVsdGEgPSB7XG4gICAgICAgIHRvcDogdG9wIC0gc2Nyb2xsLnBvc2l0aW9uLnRvcCxcbiAgICAgICAgbGVmdDogbGVmdCAtIHNjcm9sbC5wb3NpdGlvbi5sZWZ0XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKHByb3BzLmF4aXMgPT09ICd2ZXJ0aWNhbCcgJiYgZGVsdGEudG9wID09PSAwKVxuICAgICAgICB8fCAocHJvcHMuYXhpcyA9PT0gJ2hvcml6b250YWwnICYmIGRlbHRhLmxlZnQgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGN1ckRpciA9IE1hdGguYWJzKGRlbHRhLnRvcCkgPj0gTWF0aC5hYnMoZGVsdGEubGVmdClcbiAgICAgICAgPyAoZGVsdGEudG9wIDwgMCA/ICd1cCcgOiAnZG93bicpXG4gICAgICAgIDogKGRlbHRhLmxlZnQgPCAwID8gJ2xlZnQnIDogJ3JpZ2h0JylcblxuICAgICAgc2Nyb2xsLnBvc2l0aW9uID0geyB0b3AsIGxlZnQgfVxuICAgICAgc2Nyb2xsLmRpcmVjdGlvbkNoYW5nZWQgPSBzY3JvbGwuZGlyZWN0aW9uICE9PSBjdXJEaXJcbiAgICAgIHNjcm9sbC5kZWx0YSA9IGRlbHRhXG5cbiAgICAgIGlmIChzY3JvbGwuZGlyZWN0aW9uQ2hhbmdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBzY3JvbGwuZGlyZWN0aW9uID0gY3VyRGlyXG4gICAgICAgIHNjcm9sbC5pbmZsZWN0aW9uUG9pbnQgPSBzY3JvbGwucG9zaXRpb25cbiAgICAgIH1cblxuICAgICAgZW1pdCgnc2Nyb2xsJywgeyAuLi5zY3JvbGwgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSBnZXRTY3JvbGxUYXJnZXQocGFyZW50RWwsIHByb3BzLnNjcm9sbFRhcmdldClcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRyaWdnZXIsIHBhc3NpdmUpXG4gICAgICB0cmlnZ2VyKHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJpZ2dlciwgcGFzc2l2ZSlcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyIChpbW1lZGlhdGVseSkge1xuICAgICAgaWYgKGltbWVkaWF0ZWx5ID09PSB0cnVlIHx8IHByb3BzLmRlYm91bmNlID09PSAwIHx8IHByb3BzLmRlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGNsZWFyVGltZXIgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgWyB0aW1lciwgZm4gXSA9IHByb3BzLmRlYm91bmNlXG4gICAgICAgICAgPyBbIHNldFRpbWVvdXQoZW1pdEV2ZW50LCBwcm9wcy5kZWJvdW5jZSksIGNsZWFyVGltZW91dCBdXG4gICAgICAgICAgOiBbIHJlcXVlc3RBbmltYXRpb25GcmFtZShlbWl0RXZlbnQpLCBjYW5jZWxBbmltYXRpb25GcmFtZSBdXG5cbiAgICAgICAgY2xlYXJUaW1lciA9ICgpID0+IHtcbiAgICAgICAgICBmbih0aW1lcilcbiAgICAgICAgICBjbGVhclRpbWVyID0gbnVsbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBwYXJlbnRFbCA9IHByb3h5LiRlbC5wYXJlbnROb2RlXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVyKClcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgdHJpZ2dlcixcbiAgICAgIGdldFBvc2l0aW9uOiAoKSA9PiBzY3JvbGxcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5vb3BcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgcmVhY3RpdmUsIGNvbXB1dGVkLCB3YXRjaCwgcHJvdmlkZSwgb25Vbm1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbGJhcldpZHRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxheW91dCcsXG5cbiAgcHJvcHM6IHtcbiAgICBjb250YWluZXI6IEJvb2xlYW4sXG4gICAgdmlldzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hoaCBscHIgZmZmJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiAvXihofGwpaChofHIpIGxwciAoZnxsKWYoZnxyKSQvLnRlc3Qodi50b0xvd2VyQ2FzZSgpKVxuICAgIH0sXG5cbiAgICBvblNjcm9sbDogRnVuY3Rpb24sXG4gICAgb25TY3JvbGxIZWlnaHQ6IEZ1bmN0aW9uLFxuICAgIG9uUmVzaXplOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgLy8gcGFnZSByZWxhdGVkXG4gICAgY29uc3QgaGVpZ2h0ID0gcmVmKCRxLnNjcmVlbi5oZWlnaHQpXG4gICAgY29uc3Qgd2lkdGggPSByZWYocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gMCA6ICRxLnNjcmVlbi53aWR0aClcbiAgICBjb25zdCBzY3JvbGwgPSByZWYoeyBwb3NpdGlvbjogMCwgZGlyZWN0aW9uOiAnZG93bicsIGluZmxlY3Rpb25Qb2ludDogMCB9KVxuXG4gICAgLy8gY29udGFpbmVyIG9ubHkgcHJvcFxuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHJlZigwKVxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gcmVmKGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBnZXRTY3JvbGxiYXJXaWR0aCgpKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1sYXlvdXQgcS1sYXlvdXQtLSdcbiAgICAgICsgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSA/ICdjb250YWluZXJpemVkJyA6ICdzdGFuZGFyZCcpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jb250YWluZXIgPT09IGZhbHNlXG4gICAgICAgID8geyBtaW5IZWlnaHQ6ICRxLnNjcmVlbi5oZWlnaHQgKyAncHgnIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIC8vIHVzZWQgYnkgY29udGFpbmVyIG9ubHlcbiAgICBjb25zdCB0YXJnZXRTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSAwXG4gICAgICAgID8geyBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgJHsgc2Nyb2xsYmFyV2lkdGgudmFsdWUgfXB4YCB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCB0YXJnZXRDaGlsZFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdOiAwLFxuICAgICAgICAgICAgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcgXTogYC0keyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIG9uUGFnZVNjcm9sbCAoZGF0YSkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSB8fCBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24udG9wLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGF0YS5kaXJlY3Rpb24sXG4gICAgICAgICAgZGlyZWN0aW9uQ2hhbmdlZDogZGF0YS5kaXJlY3Rpb25DaGFuZ2VkLFxuICAgICAgICAgIGluZmxlY3Rpb25Qb2ludDogZGF0YS5pbmZsZWN0aW9uUG9pbnQudG9wLFxuICAgICAgICAgIGRlbHRhOiBkYXRhLmRlbHRhLnRvcFxuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsLnZhbHVlID0gaW5mb1xuICAgICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbCcsIGluZm8pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWdlUmVzaXplIChkYXRhKSB7XG4gICAgICBjb25zdCB7IGhlaWdodDogbmV3SGVpZ2h0LCB3aWR0aDogbmV3V2lkdGggfSA9IGRhdGFcbiAgICAgIGxldCByZXNpemVkID0gZmFsc2VcblxuICAgICAgaWYgKGhlaWdodC52YWx1ZSAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgIHJlc2l6ZWQgPSB0cnVlXG4gICAgICAgIGhlaWdodC52YWx1ZSA9IG5ld0hlaWdodFxuICAgICAgICBwcm9wcy5vblNjcm9sbEhlaWdodCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbC1oZWlnaHQnLCBuZXdIZWlnaHQpXG4gICAgICAgIHVwZGF0ZVNjcm9sbGJhcldpZHRoKClcbiAgICAgIH1cbiAgICAgIGlmICh3aWR0aC52YWx1ZSAhPT0gbmV3V2lkdGgpIHtcbiAgICAgICAgcmVzaXplZCA9IHRydWVcbiAgICAgICAgd2lkdGgudmFsdWUgPSBuZXdXaWR0aFxuICAgICAgfVxuXG4gICAgICBpZiAocmVzaXplZCA9PT0gdHJ1ZSAmJiBwcm9wcy5vblJlc2l6ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGVtaXQoJ3Jlc2l6ZScsIGRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Db250YWluZXJSZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIGlmIChjb250YWluZXJIZWlnaHQudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBjb250YWluZXJIZWlnaHQudmFsdWUgPSBoZWlnaHRcbiAgICAgICAgdXBkYXRlU2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbGJhcldpZHRoICgpIHtcbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBoZWlnaHQudmFsdWUgPiBjb250YWluZXJIZWlnaHQudmFsdWVcbiAgICAgICAgICA/IGdldFNjcm9sbGJhcldpZHRoKClcbiAgICAgICAgICA6IDBcblxuICAgICAgICBpZiAoc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IHdpZHRoKSB7XG4gICAgICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgPSB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRpbWVyXG5cbiAgICBjb25zdCAkbGF5b3V0ID0ge1xuICAgICAgaW5zdGFuY2VzOiB7fSxcbiAgICAgIHZpZXc6IGNvbXB1dGVkKCgpID0+IHByb3BzLnZpZXcpLFxuICAgICAgaXNDb250YWluZXI6IGNvbXB1dGVkKCgpID0+IHByb3BzLmNvbnRhaW5lciksXG5cbiAgICAgIHJvb3RSZWYsXG5cbiAgICAgIGhlaWdodCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCxcbiAgICAgIHNjcm9sbGJhcldpZHRoLFxuICAgICAgdG90YWxXaWR0aDogY29tcHV0ZWQoKCkgPT4gd2lkdGgudmFsdWUgKyBzY3JvbGxiYXJXaWR0aC52YWx1ZSksXG5cbiAgICAgIHJvd3M6IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHByb3BzLnZpZXcudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9wOiByb3dzWyAwIF0uc3BsaXQoJycpLFxuICAgICAgICAgIG1pZGRsZTogcm93c1sgMSBdLnNwbGl0KCcnKSxcbiAgICAgICAgICBib3R0b206IHJvd3NbIDIgXS5zcGxpdCgnJylcbiAgICAgICAgfVxuICAgICAgfSksXG5cbiAgICAgIGhlYWRlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIHJpZ2h0OiByZWFjdGl2ZSh7IHNpemU6IDMwMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG4gICAgICBmb290ZXI6IHJlYWN0aXZlKHsgc2l6ZTogMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG4gICAgICBsZWZ0OiByZWFjdGl2ZSh7IHNpemU6IDMwMCwgb2Zmc2V0OiAwLCBzcGFjZTogZmFsc2UgfSksXG5cbiAgICAgIHNjcm9sbCxcblxuICAgICAgYW5pbWF0ZSAoKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncS1ib2R5LS1sYXlvdXQtYW5pbWF0ZScpXG4gICAgICAgIH1cblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncS1ib2R5LS1sYXlvdXQtYW5pbWF0ZScpXG4gICAgICAgICAgdGltZXIgPSB2b2lkIDBcbiAgICAgICAgfSwgMTU1KVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlIChwYXJ0LCBwcm9wLCB2YWwpIHtcbiAgICAgICAgJGxheW91dFsgcGFydCBdWyBwcm9wIF0gPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwcm92aWRlKGxheW91dEtleSwgJGxheW91dClcblxuICAgIC8vIHByZXZlbnQgc2Nyb2xsYmFyIGZsaWNrZXIgd2hpbGUgcmVzaXppbmcgd2luZG93IGhlaWdodFxuICAgIC8vIGlmIG5vIHBhZ2Ugc2Nyb2xsYmFyIGlzIGFscmVhZHkgcHJlc2VudFxuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18gIT09IHRydWUgJiYgZ2V0U2Nyb2xsYmFyV2lkdGgoKSA+IDApIHtcbiAgICAgIGxldCB0aW1lciA9IG51bGxcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuYm9keVxuXG4gICAgICBmdW5jdGlvbiByZXN0b3JlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgdGltZXIgPSBudWxsXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gaGlkZVNjcm9sbGJhciAoKSB7XG4gICAgICAgIGlmICh0aW1lciA9PT0gbnVsbCkge1xuICAgICAgICAgIC8vIGlmIGl0IGhhcyBubyBzY3JvbGxiYXIgdGhlbiB0aGVyZSdzIG5vdGhpbmcgdG8gZG9cblxuICAgICAgICAgIGlmIChlbC5zY3JvbGxIZWlnaHQgPiAkcS5zY3JlZW4uaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdoaWRlLXNjcm9sbGJhcicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHJlc3RvcmVTY3JvbGxiYXIsIDMwMClcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsRXZlbnQgKGFjdGlvbikge1xuICAgICAgICBpZiAodGltZXIgIT09IG51bGwgJiYgYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICByZXN0b3JlU2Nyb2xsYmFyKClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvd1sgYCR7IGFjdGlvbiB9RXZlbnRMaXN0ZW5lcmAgXSgncmVzaXplJywgaGlkZVNjcm9sbGJhcilcbiAgICAgIH1cblxuICAgICAgd2F0Y2goXG4gICAgICAgICgpID0+IChwcm9wcy5jb250YWluZXIgIT09IHRydWUgPyAnYWRkJyA6ICdyZW1vdmUnKSxcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnRcbiAgICAgIClcblxuICAgICAgcHJvcHMuY29udGFpbmVyICE9PSB0cnVlICYmIHVwZGF0ZVNjcm9sbEV2ZW50KCdhZGQnKVxuXG4gICAgICBvblVubW91bnRlZCgoKSA9PiB7XG4gICAgICAgIHVwZGF0ZVNjcm9sbEV2ZW50KCdyZW1vdmUnKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFTY3JvbGxPYnNlcnZlciwgeyBvblNjcm9sbDogb25QYWdlU2Nyb2xsIH0pLFxuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwgeyBvblJlc2l6ZTogb25QYWdlUmVzaXplIH0pXG4gICAgICBdKVxuXG4gICAgICBjb25zdCBsYXlvdXQgPSBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIHJlZjogcHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gdm9pZCAwIDogcm9vdFJlZixcbiAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICB9LCBjb250ZW50KVxuXG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dC1jb250YWluZXIgb3ZlcmZsb3ctaGlkZGVuJyxcbiAgICAgICAgICByZWY6IHJvb3RSZWZcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvbkNvbnRhaW5lclJlc2l6ZSB9KSxcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ2Fic29sdXRlLWZ1bGwnLFxuICAgICAgICAgICAgc3R5bGU6IHRhcmdldFN0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ3Njcm9sbCcsXG4gICAgICAgICAgICAgIHN0eWxlOiB0YXJnZXRDaGlsZFN0eWxlLnZhbHVlXG4gICAgICAgICAgICB9LCBbIGxheW91dCBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYXlvdXRcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWNhcmQgY2xhc3M9XCJteS1jYXJkIGJnLWJsYWNrXCIgZmxhdCB2LWlmPVwic29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcgIT09IHVuZGVmaW5lZFwiPlxuICAgIDxxLWNhcmQtc2VjdGlvbiBob3Jpem9udGFsPlxuICAgICAgPHEtaW1nXG4gICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAxMjVweDsgbWF4LXdpZHRoOiAxMjVweFwiXG4gICAgICAgIDpzcmM9XCJzb25nUXVldWUuY3VycmVudGx5UGxheWluZy5hbGJ1bS50aHVtYm5haWwuc21hbGwudXJsXCJcbiAgICAgIC8+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbiBjbGFzcz1cImp1c3RpZnktYXJvdW5kIHEtcHktbm9uZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPnt7IHNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLm5hbWUuX2RlZmF1bHQgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUyXCI+e3sgc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcuYWxidW0uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWdyZXkgcS1weS1zbVwiPnt7IHNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmFsYnVtLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX08L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1jYXJkLWFjdGlvbnMgdmVydGljYWwgY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB4LW1kXCI+XG4gICAgICAgIDxxLWJ0biBmbGF0IHJvdW5kIHNpemU9XCJtZFwiIGNvbG9yPVwicmVkXCIgOmljb249XCJvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXCIgLz5cbiAgICAgICAgPHEtYnRuIGZsYXQgcm91bmQgc2l6ZT1cIm1kXCIgY29sb3I9XCJhY2NlbnRcIiA6aWNvbj1cIm91dGxpbmVkUGxheWxpc3RBZGRDaXJjbGVcIiAvPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdUcmFja0luZm9DYXJkJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlsaXN0QWRkQ2lyY2xlLFxuICBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCB7cXVldWVDb250cm9sbGVyfSBmcm9tICdib290L3NvbmdRdWV1ZSc7XG5cbmNvbnN0IHNvbmdRdWV1ZSA9IHF1ZXVlQ29udHJvbGxlcjtcblxuLy8gc29uZ1F1ZXVlLiRzdWJzY3JpYmUoKG11dGF0aW9uLCBzdGF0ZSkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhtdXRhdGlvbi5zdG9yZUlkKVxuLy8gICBpZiAobXV0YXRpb24uc3RvcmVJZCAhPT0gJ2N1cnJlbnRUcmFjaycpIHtcbi8vXG4vLyAgIH1cbi8vICAgY29uc29sZS5sb2coc3RhdGUuY3VycmVudFRyYWNrKVxuLy8gfSlcblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyB1c2VGb3JtUHJvcHMsIHVzZUZvcm1JbmplY3QgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGlzTnVtYmVyLCBpc09iamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBtYXJrZXJQcmVmaXhDbGFzcyA9ICdxLXNsaWRlcl9fbWFya2VyLWxhYmVscydcbmNvbnN0IGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4gPSB2ID0+ICh7IHZhbHVlOiB2IH0pXG5jb25zdCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGbiA9ICh7IG1hcmtlciB9KSA9PiBoKCdkaXYnLCB7XG4gIGtleTogbWFya2VyLnZhbHVlLFxuICBzdHlsZTogbWFya2VyLnN0eWxlLFxuICBjbGFzczogbWFya2VyLmNsYXNzZXNcbn0sIG1hcmtlci5sYWJlbClcblxuLy8gUEdET1dOLCBMRUZULCBET1dOLCBQR1VQLCBSSUdIVCwgVVBcbmV4cG9ydCBjb25zdCBrZXlDb2RlcyA9IFsgMzQsIDM3LCA0MCwgMzMsIDM5LCAzOCBdXG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJQcm9wcyA9IHtcbiAgLi4udXNlRGFya1Byb3BzLFxuICAuLi51c2VGb3JtUHJvcHMsXG5cbiAgbWluOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDBcbiAgfSxcbiAgbWF4OiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEwMFxuICB9LFxuICBpbm5lck1pbjogTnVtYmVyLFxuICBpbm5lck1heDogTnVtYmVyLFxuXG4gIHN0ZXA6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMSxcbiAgICB2YWxpZGF0b3I6IHYgPT4gdiA+PSAwXG4gIH0sXG5cbiAgc25hcDogQm9vbGVhbixcblxuICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgcmV2ZXJzZTogQm9vbGVhbixcblxuICBoaWRlU2VsZWN0aW9uOiBCb29sZWFuLFxuXG4gIGNvbG9yOiBTdHJpbmcsXG4gIG1hcmtlckxhYmVsc0NsYXNzOiBTdHJpbmcsXG5cbiAgbGFiZWw6IEJvb2xlYW4sXG4gIGxhYmVsQ29sb3I6IFN0cmluZyxcbiAgbGFiZWxUZXh0Q29sb3I6IFN0cmluZyxcbiAgbGFiZWxBbHdheXM6IEJvb2xlYW4sXG4gIHN3aXRjaExhYmVsU2lkZTogQm9vbGVhbixcblxuICBtYXJrZXJzOiBbIEJvb2xlYW4sIE51bWJlciBdLFxuICBtYXJrZXJMYWJlbHM6IFsgQm9vbGVhbiwgQXJyYXksIE9iamVjdCwgRnVuY3Rpb24gXSxcbiAgc3dpdGNoTWFya2VyTGFiZWxzU2lkZTogQm9vbGVhbixcblxuICB0cmFja0ltZzogU3RyaW5nLFxuICB0cmFja0NvbG9yOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tJbWc6IFN0cmluZyxcbiAgaW5uZXJUcmFja0NvbG9yOiBTdHJpbmcsXG4gIHNlbGVjdGlvbkNvbG9yOiBTdHJpbmcsXG4gIHNlbGVjdGlvbkltZzogU3RyaW5nLFxuXG4gIHRodW1iU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnMjBweCdcbiAgfSxcbiAgdHJhY2tTaXplOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICc0cHgnXG4gIH0sXG5cbiAgZGlzYWJsZTogQm9vbGVhbixcbiAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gIGRlbnNlOiBCb29sZWFuLFxuXG4gIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgdGh1bWJDb2xvcjogU3RyaW5nLFxuICB0aHVtYlBhdGg6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJ00gNCwgMTAgYSA2LDYgMCAxLDAgMTIsMCBhIDYsNiAwIDEsMCAtMTIsMCdcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyRW1pdHMgPSBbICdwYW4nLCAndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2hhbmdlJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IHVwZGF0ZVZhbHVlLCB1cGRhdGVQb3NpdGlvbiwgZ2V0RHJhZ2dpbmcsIGZvcm1BdHRycyB9KSB7XG4gIGNvbnN0IHsgcHJvcHMsIGVtaXQsIHNsb3RzLCBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICBjb25zdCBpbmplY3RGb3JtSW5wdXQgPSB1c2VGb3JtSW5qZWN0KGZvcm1BdHRycylcblxuICBjb25zdCBhY3RpdmUgPSByZWYoZmFsc2UpXG4gIGNvbnN0IHByZXZlbnRGb2N1cyA9IHJlZihmYWxzZSlcbiAgY29uc3QgZm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGRyYWdnaW5nID0gcmVmKGZhbHNlKVxuXG4gIGNvbnN0IGF4aXMgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnLS12JyA6ICctLWgnKSlcbiAgY29uc3QgbGFiZWxTaWRlID0gY29tcHV0ZWQoKCkgPT4gJy0nICsgKHByb3BzLnN3aXRjaExhYmVsU2lkZSA9PT0gdHJ1ZSA/ICdzd2l0Y2hlZCcgOiAnc3RhbmRhcmQnKSlcblxuICBjb25zdCBpc1JldmVyc2VkID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IHByb3BzLnJldmVyc2UgPT09IHRydWVcbiAgICAgIDogcHJvcHMucmV2ZXJzZSAhPT0gKCRxLmxhbmcucnRsID09PSB0cnVlKVxuICApKVxuXG4gIGNvbnN0IGlubmVyTWluID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWluKSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1pbiA8IHByb3BzLm1pblxuICAgICAgPyBwcm9wcy5taW5cbiAgICAgIDogcHJvcHMuaW5uZXJNaW5cbiAgKSlcbiAgY29uc3QgaW5uZXJNYXggPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOYU4ocHJvcHMuaW5uZXJNYXgpID09PSB0cnVlIHx8IHByb3BzLmlubmVyTWF4ID4gcHJvcHMubWF4XG4gICAgICA/IHByb3BzLm1heFxuICAgICAgOiBwcm9wcy5pbm5lck1heFxuICApKVxuXG4gIGNvbnN0IGVkaXRhYmxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMucmVhZG9ubHkgIT09IHRydWVcbiAgICAmJiBpbm5lck1pbi52YWx1ZSA8IGlubmVyTWF4LnZhbHVlXG4gICkpXG5cbiAgY29uc3QgZGVjaW1hbHMgPSBjb21wdXRlZCgoKSA9PiAoU3RyaW5nKHByb3BzLnN0ZXApLnRyaW0oKS5zcGxpdCgnLicpWyAxIF0gfHwgJycpLmxlbmd0aClcbiAgY29uc3Qgc3RlcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy5zdGVwID09PSAwID8gMSA6IHByb3BzLnN0ZXApKVxuICBjb25zdCB0YWJpbmRleCA9IGNvbXB1dGVkKCgpID0+IChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/IHByb3BzLnRhYmluZGV4IHx8IDAgOiAtMSkpXG5cbiAgY29uc3QgdHJhY2tMZW4gPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5tYXggLSBwcm9wcy5taW4pXG4gIGNvbnN0IGlubmVyQmFyTGVuID0gY29tcHV0ZWQoKCkgPT4gaW5uZXJNYXgudmFsdWUgLSBpbm5lck1pbi52YWx1ZSlcblxuICBjb25zdCBpbm5lck1pblJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1pbi52YWx1ZSkpXG4gIGNvbnN0IGlubmVyTWF4UmF0aW8gPSBjb21wdXRlZCgoKSA9PiBjb252ZXJ0TW9kZWxUb1JhdGlvKGlubmVyTWF4LnZhbHVlKSlcblxuICBjb25zdCBwb3NpdGlvblByb3AgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAnYm90dG9tJyA6ICd0b3AnKVxuICAgICAgOiAoaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcpXG4gICkpXG5cbiAgY29uc3Qgc2l6ZVByb3AgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnaGVpZ2h0JyA6ICd3aWR0aCcpKVxuICBjb25zdCB0aGlja25lc3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3dpZHRoJyA6ICdoZWlnaHQnKSlcbiAgY29uc3Qgb3JpZW50YXRpb24gPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnKSlcblxuICBjb25zdCBhdHRyaWJ1dGVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIHJvbGU6ICdzbGlkZXInLFxuICAgICAgJ2FyaWEtdmFsdWVtaW4nOiBpbm5lck1pbi52YWx1ZSxcbiAgICAgICdhcmlhLXZhbHVlbWF4JzogaW5uZXJNYXgudmFsdWUsXG4gICAgICAnYXJpYS1vcmllbnRhdGlvbic6IG9yaWVudGF0aW9uLnZhbHVlLFxuICAgICAgJ2RhdGEtc3RlcCc6IHByb3BzLnN0ZXBcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgIH1cbiAgICBlbHNlIGlmIChwcm9wcy5yZWFkb25seSA9PT0gdHJ1ZSkge1xuICAgICAgYWNjWyAnYXJpYS1yZWFkb25seScgXSA9ICd0cnVlJ1xuICAgIH1cblxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBgcS1zbGlkZXIgcS1zbGlkZXIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXItLSR7IGFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ2luJyB9YWN0aXZlIGlubGluZSBuby13cmFwIGBcbiAgICArIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdyb3cnIDogJ2NvbHVtbicpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJyBxLXNsaWRlci0tZW5hYmxlZCcgKyAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1lZGl0YWJsZScgOiAnJykpXG4gICAgKyAoZm9jdXMudmFsdWUgPT09ICdib3RoJyA/ICcgcS1zbGlkZXItLWZvY3VzJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwnIDogJycpXG4gICAgKyAocHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1sYWJlbC1hbHdheXMnIDogJycpXG4gICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZGFyaycgOiAnJylcbiAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRlbnNlIHEtc2xpZGVyLS1kZW5zZScgKyBheGlzLnZhbHVlIDogJycpXG4gIClcblxuICBmdW5jdGlvbiBnZXRQb3NpdGlvbkNsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH0keyBsYWJlbFNpZGUudmFsdWUgfWBcbiAgfVxuICBmdW5jdGlvbiBnZXRBeGlzQ2xhc3MgKG5hbWUpIHtcbiAgICBjb25zdCBjbHMgPSAncS1zbGlkZXJfXycgKyBuYW1lXG4gICAgcmV0dXJuIGAkeyBjbHMgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfWBcbiAgfVxuXG4gIGNvbnN0IHNlbGVjdGlvbkJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yID0gcHJvcHMuc2VsZWN0aW9uQ29sb3IgfHwgcHJvcHMuY29sb3JcbiAgICByZXR1cm4gJ3Etc2xpZGVyX19zZWxlY3Rpb24gYWJzb2x1dGUnXG4gICAgICArIChjb2xvciAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycpXG4gIH0pXG4gIGNvbnN0IG1hcmtlckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCdtYXJrZXJzJykgKyAnIGFic29sdXRlIG92ZXJmbG93LWhpZGRlbicpXG4gIGNvbnN0IHRyYWNrQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRBeGlzQ2xhc3MoJ3RyYWNrLWNvbnRhaW5lcicpKVxuICBjb25zdCBwaW5DbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3BpbicpKVxuICBjb25zdCBsYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygnbGFiZWwnKSlcbiAgY29uc3QgdGV4dENvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygndGV4dC1jb250YWluZXInKSlcbiAgY29uc3QgbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgIGdldFBvc2l0aW9uQ2xhc3MoJ21hcmtlci1sYWJlbHMtY29udGFpbmVyJylcbiAgICArIChwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5tYXJrZXJMYWJlbHNDbGFzcyB9YCA6ICcnKVxuICApXG5cbiAgY29uc3QgdHJhY2tDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3Etc2xpZGVyX190cmFjayByZWxhdGl2ZS1wb3NpdGlvbiBuby1vdXRsaW5lJ1xuICAgICsgKHByb3BzLnRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMudHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IHRyYWNrU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0geyBbIHRoaWNrbmVzc1Byb3AudmFsdWUgXTogcHJvcHMudHJhY2tTaXplIH1cbiAgICBpZiAocHJvcHMudHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMudHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGlubmVyQmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9faW5uZXIgYWJzb2x1dGUnXG4gICAgKyAocHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLmlubmVyVHJhY2tDb2xvciB9YCA6ICcnKVxuICApXG4gIGNvbnN0IGlubmVyQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0ge1xuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIGlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgWyBzaXplUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKGlubmVyTWF4UmF0aW8udmFsdWUgLSBpbm5lck1pblJhdGlvLnZhbHVlKSB9JWBcbiAgICB9XG4gICAgaWYgKHByb3BzLmlubmVyVHJhY2tJbWcgIT09IHZvaWQgMCkge1xuICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuaW5uZXJUcmFja0ltZyB9KSAhaW1wb3J0YW50YFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gY29udmVydFJhdGlvVG9Nb2RlbCAocmF0aW8pIHtcbiAgICBjb25zdCB7IG1pbiwgbWF4LCBzdGVwIH0gPSBwcm9wc1xuICAgIGxldCBtb2RlbCA9IG1pbiArIHJhdGlvICogKG1heCAtIG1pbilcblxuICAgIGlmIChzdGVwID4gMCkge1xuICAgICAgY29uc3QgbW9kdWxvID0gKG1vZGVsIC0gbWluKSAlIHN0ZXBcbiAgICAgIG1vZGVsICs9IChNYXRoLmFicyhtb2R1bG8pID49IHN0ZXAgLyAyID8gKG1vZHVsbyA8IDAgPyAtMSA6IDEpICogc3RlcCA6IDApIC0gbW9kdWxvXG4gICAgfVxuXG4gICAgaWYgKGRlY2ltYWxzLnZhbHVlID4gMCkge1xuICAgICAgbW9kZWwgPSBwYXJzZUZsb2F0KG1vZGVsLnRvRml4ZWQoZGVjaW1hbHMudmFsdWUpKVxuICAgIH1cblxuICAgIHJldHVybiBiZXR3ZWVuKG1vZGVsLCBpbm5lck1pbi52YWx1ZSwgaW5uZXJNYXgudmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0TW9kZWxUb1JhdGlvIChtb2RlbCkge1xuICAgIHJldHVybiB0cmFja0xlbi52YWx1ZSA9PT0gMFxuICAgICAgPyAwXG4gICAgICA6IChtb2RlbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmdSYXRpbyAoZXZ0LCBkcmFnZ2luZykge1xuICAgIGNvbnN0XG4gICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgdmFsID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgPyBiZXR3ZWVuKChwb3MudG9wIC0gZHJhZ2dpbmcudG9wKSAvIGRyYWdnaW5nLmhlaWdodCwgMCwgMSlcbiAgICAgICAgOiBiZXR3ZWVuKChwb3MubGVmdCAtIGRyYWdnaW5nLmxlZnQpIC8gZHJhZ2dpbmcud2lkdGgsIDAsIDEpXG5cbiAgICByZXR1cm4gYmV0d2VlbihcbiAgICAgIGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAxLjAgLSB2YWwgOiB2YWwsXG4gICAgICBpbm5lck1pblJhdGlvLnZhbHVlLFxuICAgICAgaW5uZXJNYXhSYXRpby52YWx1ZVxuICAgIClcbiAgfVxuXG4gIGNvbnN0IG1hcmtlclN0ZXAgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOdW1iZXIocHJvcHMubWFya2VycykgPT09IHRydWUgPyBwcm9wcy5tYXJrZXJzIDogc3RlcC52YWx1ZSlcbiAgKVxuXG4gIGNvbnN0IG1hcmtlclRpY2tzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IFtdXG4gICAgY29uc3Qgc3RlcCA9IG1hcmtlclN0ZXAudmFsdWVcbiAgICBjb25zdCBtYXggPSBwcm9wcy5tYXhcblxuICAgIGxldCB2YWx1ZSA9IHByb3BzLm1pblxuICAgIGRvIHtcbiAgICAgIGFjYy5wdXNoKHZhbHVlKVxuICAgICAgdmFsdWUgKz0gc3RlcFxuICAgIH0gd2hpbGUgKHZhbHVlIDwgbWF4KVxuXG4gICAgYWNjLnB1c2gobWF4KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbENsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHByZWZpeCA9IGAgJHsgbWFya2VyUHJlZml4Q2xhc3MgfSR7IGF4aXMudmFsdWUgfS1gXG4gICAgcmV0dXJuIG1hcmtlclByZWZpeENsYXNzXG4gICAgICArIGAkeyBwcmVmaXggfSR7IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJyB9YFxuICAgICAgKyBgJHsgcHJlZml4IH0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9YFxuICB9KVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc0xpc3QgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgcmV0dXJuIGdldE1hcmtlckxpc3QocHJvcHMubWFya2VyTGFiZWxzKS5tYXAoKGVudHJ5LCBpbmRleCkgPT4gKHtcbiAgICAgIGluZGV4LFxuICAgICAgdmFsdWU6IGVudHJ5LnZhbHVlLFxuICAgICAgbGFiZWw6IGVudHJ5LmxhYmVsIHx8IGVudHJ5LnZhbHVlLFxuICAgICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZVxuICAgICAgICArIChlbnRyeS5jbGFzc2VzICE9PSB2b2lkIDAgPyAnICcgKyBlbnRyeS5jbGFzc2VzIDogJycpLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgLi4uZ2V0TWFya2VyTGFiZWxTdHlsZShlbnRyeS52YWx1ZSksXG4gICAgICAgIC4uLihlbnRyeS5zdHlsZSB8fCB7fSlcbiAgICAgIH1cbiAgICB9KSlcbiAgfSlcblxuICBjb25zdCBtYXJrZXJTY29wZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgbWFya2VyTGlzdDogbWFya2VyTGFiZWxzTGlzdC52YWx1ZSxcbiAgICBtYXJrZXJNYXA6IG1hcmtlckxhYmVsc01hcC52YWx1ZSxcbiAgICBjbGFzc2VzOiBtYXJrZXJMYWJlbENsYXNzLnZhbHVlLCAvLyBUT0RPIHRzIGRlZmluaXRpb25cbiAgICBnZXRTdHlsZTogZ2V0TWFya2VyTGFiZWxTdHlsZVxuICB9KSlcblxuICBjb25zdCBtYXJrZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAoaW5uZXJCYXJMZW4udmFsdWUgIT09IDApIHtcbiAgICAgIGNvbnN0IHNpemUgPSAxMDAgKiBtYXJrZXJTdGVwLnZhbHVlIC8gaW5uZXJCYXJMZW4udmFsdWVcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5uZXJCYXJTdHlsZS52YWx1ZSxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBgMnB4ICR7IHNpemUgfSVgXG4gICAgICAgICAgOiBgJHsgc2l6ZSB9JSAycHhgXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMaXN0IChkZWYpIHtcbiAgICBpZiAoZGVmID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBpZiAoZGVmID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKGRlZmF1bHRNYXJrZXJDb252ZXJ0Rm4pXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBkZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAodmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gZGVmKHZhbHVlKVxuICAgICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlckZuID0gKHsgdmFsdWUgfSkgPT4gdmFsdWUgPj0gcHJvcHMubWluICYmIHZhbHVlIDw9IHByb3BzLm1heFxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVmKSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGRlZlxuICAgICAgICAubWFwKGl0ZW0gPT4gKGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8gaXRlbSA6IHsgdmFsdWU6IGl0ZW0gfSkpXG4gICAgICAgIC5maWx0ZXIoZmlsdGVyRm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRlZikubWFwKGtleSA9PiB7XG4gICAgICBjb25zdCBpdGVtID0gZGVmWyBrZXkgXVxuICAgICAgY29uc3QgdmFsdWUgPSBOdW1iZXIoa2V5KVxuICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgIH0pLmZpbHRlcihmaWx0ZXJGbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsU3R5bGUgKHZhbCkge1xuICAgIHJldHVybiB7IFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAodmFsIC0gcHJvcHMubWluKSAvIHRyYWNrTGVuLnZhbHVlIH0lYCB9XG4gIH1cblxuICBjb25zdCBtYXJrZXJMYWJlbHNNYXAgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgYWNjID0ge31cbiAgICBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgYWNjWyBlbnRyeS52YWx1ZSBdID0gZW50cnlcbiAgICB9KVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbHNDb250ZW50ICgpIHtcbiAgICBpZiAoc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0gIT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdKG1hcmtlclNjb3BlLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGZuID0gc2xvdHNbICdtYXJrZXItbGFiZWwnIF0gfHwgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm5cbiAgICByZXR1cm4gbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5tYXAobWFya2VyID0+IGZuKHtcbiAgICAgIG1hcmtlcixcbiAgICAgIC4uLm1hcmtlclNjb3BlLnZhbHVlXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBwYW5EaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgLy8gaWYgZWRpdGFibGUudmFsdWUgPT09IHRydWVcbiAgICByZXR1cm4gWyBbXG4gICAgICBUb3VjaFBhbixcbiAgICAgIG9uUGFuLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBbIG9yaWVudGF0aW9uLnZhbHVlIF06IHRydWUsXG4gICAgICAgIHByZXZlbnQ6IHRydWUsXG4gICAgICAgIHN0b3A6IHRydWUsXG4gICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9uUGFuIChldmVudCkge1xuICAgIGlmIChldmVudC5pc0ZpbmFsID09PSB0cnVlKSB7XG4gICAgICBpZiAoZHJhZ2dpbmcudmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICAgIC8vIG9ubHkgaWYgdG91Y2gsIGJlY2F1c2Ugd2UgYWxzbyBoYXZlIG1vdXNlZG93bi91cDpcbiAgICAgICAgZXZlbnQudG91Y2ggPT09IHRydWUgJiYgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICAgICAgZHJhZ2dpbmcudmFsdWUgPSB2b2lkIDBcbiAgICAgICAgZW1pdCgncGFuJywgJ2VuZCcpXG4gICAgICB9XG4gICAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuICAgICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICBkcmFnZ2luZy52YWx1ZSA9IGdldERyYWdnaW5nKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ3BhbicsICdzdGFydCcpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQmx1ciAoKSB7XG4gICAgZm9jdXMudmFsdWUgPSBmYWxzZVxuICB9XG5cbiAgZnVuY3Rpb24gb25BY3RpdmF0ZSAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKClcblxuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IHRydWVcbiAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25EZWFjdGl2YXRlICgpIHtcbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSBmYWxzZVxuICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG5cbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIG9uQmx1cigpXG5cbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25Nb2JpbGVDbGljayAoZXZ0KSB7XG4gICAgdXBkYXRlUG9zaXRpb24oZXZ0LCBnZXREcmFnZ2luZyhldnQpKVxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbktleXVwIChldnQpIHtcbiAgICBpZiAoa2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRleHRDb250YWluZXJTdHlsZSAocmF0aW8pIHtcbiAgICBpZiAocHJvcHMudmVydGljYWwgPT09IHRydWUpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgY29uc3QgcCA9ICRxLmxhbmcucnRsICE9PSBwcm9wcy5yZXZlcnNlID8gMSAtIHJhdGlvIDogcmF0aW9cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWChjYWxjKCR7IDIgKiBwIC0gMSB9ICogJHsgcHJvcHMudGh1bWJTaXplIH0gLyAyICsgJHsgNTAgLSAxMDAgKiBwIH0lKSlgXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGh1bWJSZW5kZXJGbiAodGh1bWIpIHtcbiAgICBjb25zdCBmb2N1c0NsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJldmVudEZvY3VzLnZhbHVlID09PSBmYWxzZSAmJiAoZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgfHwgZm9jdXMudmFsdWUgPT09ICdib3RoJylcbiAgICAgICAgPyAnIHEtc2xpZGVyLS1mb2N1cydcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLXNsaWRlcl9fdGh1bWIgcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfS0keyBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3J0bCcgOiAnbHRyJyB9IGFic29sdXRlIG5vbi1zZWxlY3RhYmxlYFxuICAgICAgKyBmb2N1c0NsYXNzLnZhbHVlXG4gICAgICArICh0aHVtYi50aHVtYkNvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIudGh1bWJDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIHdpZHRoOiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBoZWlnaHQ6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiB0aHVtYi5yYXRpby52YWx1ZSB9JWAsXG4gICAgICB6SW5kZXg6IGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlID8gMiA6IHZvaWQgMFxuICAgIH0pKVxuXG4gICAgY29uc3QgcGluQ29sb3IgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICB0aHVtYi5sYWJlbENvbG9yLnZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxDb2xvci52YWx1ZSB9YFxuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IHRleHRDb250YWluZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IGdldFRleHRDb250YWluZXJTdHlsZSh0aHVtYi5yYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCB0ZXh0Q2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAncS1zbGlkZXJfX3RleHQnXG4gICAgICArICh0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCB0aHVtYkNvbnRlbnQgPSBbXG4gICAgICAgIGgoJ3N2ZycsIHtcbiAgICAgICAgICBjbGFzczogJ3Etc2xpZGVyX190aHVtYi1zaGFwZSBhYnNvbHV0ZS1mdWxsJyxcbiAgICAgICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ3BhdGgnLCB7IGQ6IHByb3BzLnRodW1iUGF0aCB9KVxuICAgICAgICBdKSxcblxuICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1zbGlkZXJfX2ZvY3VzLXJpbmcgZml0JyB9KVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMubGFiZWwgPT09IHRydWUgfHwgcHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUpIHtcbiAgICAgICAgdGh1bWJDb250ZW50LnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHBpbkNsYXNzLnZhbHVlICsgJyBhYnNvbHV0ZSBmaXQgbm8tcG9pbnRlci1ldmVudHMnICsgcGluQ29sb3IudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiBsYWJlbENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogeyBtaW5XaWR0aDogcHJvcHMudGh1bWJTaXplIH1cbiAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICAgIGNsYXNzOiB0ZXh0Q29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHRleHRDb250YWluZXJTdHlsZS52YWx1ZVxuICAgICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgICAgaCgnc3BhbicsIHsgY2xhc3M6IHRleHRDbGFzcy52YWx1ZSB9LCB0aHVtYi5sYWJlbC52YWx1ZSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChwcm9wcy5uYW1lICE9PSB2b2lkIDAgJiYgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGluamVjdEZvcm1JbnB1dCh0aHVtYkNvbnRlbnQsICdwdXNoJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICAuLi50aHVtYi5nZXROb2RlRGF0YSgpXG4gICAgICB9LCB0aHVtYkNvbnRlbnQpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoc2VsZWN0aW9uQmFyU3R5bGUsIHRyYWNrQ29udGFpbmVyVGFiaW5kZXgsIHRyYWNrQ29udGFpbmVyRXZlbnRzLCBpbmplY3RUaHVtYikge1xuICAgIGNvbnN0IHRyYWNrQ29udGVudCA9IFtdXG5cbiAgICBwcm9wcy5pbm5lclRyYWNrQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ2lubmVyJyxcbiAgICAgICAgY2xhc3M6IGlubmVyQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBpbm5lckJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLnNlbGVjdGlvbkNvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdzZWxlY3Rpb24nLFxuICAgICAgICBjbGFzczogc2VsZWN0aW9uQmFyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzZWxlY3Rpb25CYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5tYXJrZXJzICE9PSBmYWxzZSAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnbWFya2VyJyxcbiAgICAgICAgY2xhc3M6IG1hcmtlckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogbWFya2VyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgaW5qZWN0VGh1bWIodHJhY2tDb250ZW50KVxuXG4gICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiAndHJhY2tDJyxcbiAgICAgICAgICBjbGFzczogdHJhY2tDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICB0YWJpbmRleDogdHJhY2tDb250YWluZXJUYWJpbmRleC52YWx1ZSxcbiAgICAgICAgICAuLi50cmFja0NvbnRhaW5lckV2ZW50cy52YWx1ZVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6IHRyYWNrQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICBzdHlsZTogdHJhY2tTdHlsZS52YWx1ZVxuICAgICAgICAgIH0sIHRyYWNrQ29udGVudClcbiAgICAgICAgXSxcbiAgICAgICAgJ3NsaWRlJyxcbiAgICAgICAgZWRpdGFibGUudmFsdWUsICgpID0+IHBhbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgKVxuICAgIF1cblxuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgIT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlXG4gICAgICAgID8gJ3Vuc2hpZnQnXG4gICAgICAgIDogJ3B1c2gnXG5cbiAgICAgIGNvbnRlbnRbIGFjdGlvbiBdKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnbWFya2VyTCcsXG4gICAgICAgICAgY2xhc3M6IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzLnZhbHVlXG4gICAgICAgIH0sIGdldE1hcmtlckxhYmVsc0NvbnRlbnQoKSlcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGVudFxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25EZWFjdGl2YXRlLCB0cnVlKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGU6IHtcbiAgICAgIGFjdGl2ZSxcbiAgICAgIGZvY3VzLFxuICAgICAgcHJldmVudEZvY3VzLFxuICAgICAgZHJhZ2dpbmcsXG5cbiAgICAgIGVkaXRhYmxlLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIHRhYmluZGV4LFxuICAgICAgYXR0cmlidXRlcyxcblxuICAgICAgc3RlcCxcbiAgICAgIGRlY2ltYWxzLFxuICAgICAgdHJhY2tMZW4sXG4gICAgICBpbm5lck1pbixcbiAgICAgIGlubmVyTWluUmF0aW8sXG4gICAgICBpbm5lck1heCxcbiAgICAgIGlubmVyTWF4UmF0aW8sXG4gICAgICBwb3NpdGlvblByb3AsXG4gICAgICBzaXplUHJvcCxcbiAgICAgIGlzUmV2ZXJzZWRcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb25BY3RpdmF0ZSxcbiAgICAgIG9uTW9iaWxlQ2xpY2ssXG4gICAgICBvbkJsdXIsXG4gICAgICBvbktleXVwLFxuICAgICAgZ2V0Q29udGVudCxcbiAgICAgIGdldFRodW1iUmVuZGVyRm4sXG4gICAgICBjb252ZXJ0UmF0aW9Ub01vZGVsLFxuICAgICAgY29udmVydE1vZGVsVG9SYXRpbyxcbiAgICAgIGdldERyYWdnaW5nUmF0aW9cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZUZvcm1BdHRycyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCB1c2VTbGlkZXIsIHtcbiAgdXNlU2xpZGVyUHJvcHMsXG4gIHVzZVNsaWRlckVtaXRzLFxuICBrZXlDb2Rlc1xufSBmcm9tICcuL3VzZS1zbGlkZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5cbmNvbnN0IGdldE5vZGVEYXRhID0gKCkgPT4gKHt9KVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlcicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VTbGlkZXJQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHwgdiA9PT0gbnVsbFxuICAgIH0sXG5cbiAgICBsYWJlbFZhbHVlOiBbIFN0cmluZywgTnVtYmVyIF1cbiAgfSxcblxuICBlbWl0czogdXNlU2xpZGVyRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHsgc3RhdGUsIG1ldGhvZHMgfSA9IHVzZVNsaWRlcih7XG4gICAgICB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLFxuICAgICAgZm9ybUF0dHJzOiB1c2VGb3JtQXR0cnMocHJvcHMpXG4gICAgfSlcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBjdXJSYXRpbyA9IHJlZigwKVxuICAgIGNvbnN0IG1vZGVsID0gcmVmKDApXG5cbiAgICBmdW5jdGlvbiBub3JtYWxpemVNb2RlbCAoKSB7XG4gICAgICBtb2RlbC52YWx1ZSA9IHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGxcbiAgICAgICAgPyBzdGF0ZS5pbm5lck1pbi52YWx1ZVxuICAgICAgICA6IGJldHdlZW4ocHJvcHMubW9kZWxWYWx1ZSwgc3RhdGUuaW5uZXJNaW4udmFsdWUsIHN0YXRlLmlubmVyTWF4LnZhbHVlKVxuICAgIH1cblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gYCR7IHByb3BzLm1vZGVsVmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1pbi52YWx1ZSB9fCR7IHN0YXRlLmlubmVyTWF4LnZhbHVlIH1gLFxuICAgICAgbm9ybWFsaXplTW9kZWxcbiAgICApXG5cbiAgICBub3JtYWxpemVNb2RlbCgpXG5cbiAgICBjb25zdCBtb2RlbFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKSlcbiAgICBjb25zdCByYXRpbyA9IGNvbXB1dGVkKCgpID0+IChzdGF0ZS5hY3RpdmUudmFsdWUgPT09IHRydWUgPyBjdXJSYXRpby52YWx1ZSA6IG1vZGVsUmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3Qgc2VsZWN0aW9uQmFyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgIFsgc3RhdGUucG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgICAgWyBzdGF0ZS5zaXplUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHJhdGlvLnZhbHVlIC0gc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSkgfSVgXG4gICAgICB9XG4gICAgICBpZiAocHJvcHMuc2VsZWN0aW9uSW1nICE9PSB2b2lkIDApIHtcbiAgICAgICAgYWNjLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHsgcHJvcHMuc2VsZWN0aW9uSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGdldFRodW1iID0gbWV0aG9kcy5nZXRUaHVtYlJlbmRlckZuKHtcbiAgICAgIGZvY3VzVmFsdWU6IHRydWUsXG4gICAgICBnZXROb2RlRGF0YSxcbiAgICAgIHJhdGlvLFxuICAgICAgbGFiZWw6IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICAgcHJvcHMubGFiZWxWYWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgICAgPyBwcm9wcy5sYWJlbFZhbHVlXG4gICAgICAgICAgOiBtb2RlbC52YWx1ZVxuICAgICAgKSksXG4gICAgICB0aHVtYkNvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy50aHVtYkNvbG9yIHx8IHByb3BzLmNvbG9yKSxcbiAgICAgIGxhYmVsQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsQ29sb3IpLFxuICAgICAgbGFiZWxUZXh0Q29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLmxhYmVsVGV4dENvbG9yKVxuICAgIH0pXG5cbiAgICBjb25zdCB0cmFja0NvbnRhaW5lckV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5lZGl0YWJsZS52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuICRxLnBsYXRmb3JtLmlzLm1vYmlsZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogbWV0aG9kcy5vbk1vYmlsZUNsaWNrIH1cbiAgICAgICAgOiB7XG4gICAgICAgICAgICBvbk1vdXNlZG93bjogbWV0aG9kcy5vbkFjdGl2YXRlLFxuICAgICAgICAgICAgb25Gb2N1cyxcbiAgICAgICAgICAgIG9uQmx1cjogbWV0aG9kcy5vbkJsdXIsXG4gICAgICAgICAgICBvbktleWRvd24sXG4gICAgICAgICAgICBvbktleXVwOiBtZXRob2RzLm9uS2V5dXBcbiAgICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVZhbHVlIChjaGFuZ2UpIHtcbiAgICAgIGlmIChtb2RlbC52YWx1ZSAhPT0gcHJvcHMubW9kZWxWYWx1ZSkge1xuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG1vZGVsLnZhbHVlKVxuICAgICAgfVxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIGVtaXQoJ2NoYW5nZScsIG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldERyYWdnaW5nICgpIHtcbiAgICAgIHJldHVybiByb290UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24gKGV2ZW50LCBkcmFnZ2luZyA9IHN0YXRlLmRyYWdnaW5nLnZhbHVlKSB7XG4gICAgICBjb25zdCByYXRpbyA9IG1ldGhvZHMuZ2V0RHJhZ2dpbmdSYXRpbyhldmVudCwgZHJhZ2dpbmcpXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gbWV0aG9kcy5jb252ZXJ0UmF0aW9Ub01vZGVsKHJhdGlvKVxuXG4gICAgICBjdXJSYXRpby52YWx1ZSA9IHByb3BzLnNuYXAgIT09IHRydWUgfHwgcHJvcHMuc3RlcCA9PT0gMFxuICAgICAgICA/IHJhdGlvXG4gICAgICAgIDogbWV0aG9kcy5jb252ZXJ0TW9kZWxUb1JhdGlvKG1vZGVsLnZhbHVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXMgKCkge1xuICAgICAgc3RhdGUuZm9jdXMudmFsdWUgPSB0cnVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LZXlkb3duIChldnQpIHtcbiAgICAgIGlmICgha2V5Q29kZXMuaW5jbHVkZXMoZXZ0LmtleUNvZGUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHN0ZXBWYWwgPSAoWyAzNCwgMzMgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAxMCA6IDEpICogc3RhdGUuc3RlcC52YWx1ZSxcbiAgICAgICAgb2Zmc2V0ID0gKFxuICAgICAgICAgIChbIDM0LCAzNywgNDAgXS5pbmNsdWRlcyhldnQua2V5Q29kZSkgPyAtMSA6IDEpXG4gICAgICAgICAgKiAoc3RhdGUuaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgICAqIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiBzdGVwVmFsXG4gICAgICAgIClcblxuICAgICAgbW9kZWwudmFsdWUgPSBiZXR3ZWVuKFxuICAgICAgICBwYXJzZUZsb2F0KChtb2RlbC52YWx1ZSArIG9mZnNldCkudG9GaXhlZChzdGF0ZS5kZWNpbWFscy52YWx1ZSkpLFxuICAgICAgICBzdGF0ZS5pbm5lck1pbi52YWx1ZSxcbiAgICAgICAgc3RhdGUuaW5uZXJNYXgudmFsdWVcbiAgICAgIClcblxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gbWV0aG9kcy5nZXRDb250ZW50KFxuICAgICAgICBzZWxlY3Rpb25CYXJTdHlsZSxcbiAgICAgICAgc3RhdGUudGFiaW5kZXgsXG4gICAgICAgIHRyYWNrQ29udGFpbmVyRXZlbnRzLFxuICAgICAgICBub2RlID0+IHsgbm9kZS5wdXNoKGdldFRodW1iKCkpIH1cbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiByb290UmVmLFxuICAgICAgICBjbGFzczogc3RhdGUuY2xhc3Nlcy52YWx1ZSArIChwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsID8gJyBxLXNsaWRlci0tbm8tdmFsdWUnIDogJycpLFxuICAgICAgICAuLi5zdGF0ZS5hdHRyaWJ1dGVzLnZhbHVlLFxuICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIH0sIGNvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGgganVzdGlmeS1jZW50ZXIgcS1wdC1zbVwiPlxuICAgIDxxLWJ0biBmYWIgZmxhdCBzaXplPVwibWRcIiA6aWNvbj1cIm91dGxpbmVkU2tpcFByZXZpb3VzXCIgQGNsaWNrPVwicXVldWVDb250cm9sbGVyLnBsYXlQcmV2aW91cygpXCI+XG4gICAgICA8cS10b29sdGlwPlByZXZpb3VzPC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cblxuICAgIDxxLWJ0biBmYWIgY2xhc3M9XCJxLW14LW1kXCIgcm91bmQgc2l6ZT1cIm1kXCIgOmljb249XCJwYXVzZWQgPyBvdXRsaW5lZFBsYXlBcnJvdyA6IG91dGxpbmVkUGF1c2VcIiBAY2xpY2s9XCJhdWRpb0NvbnRyb2xsZXIudG9nZ2xlUGF1c2UoKVwiPlxuICAgICAgPHEtdG9vbHRpcD57eyBhdWRpb0NvbnRyb2xsZXIucGF1c2VkID8gXCJQbGF5XCIgOiBcIlBhdXNlXCIgfX08L3EtdG9vbHRpcD5cbiAgICA8L3EtYnRuPlxuXG4gICAgPHEtYnRuIGZsYXQgZmFiIHNpemU9XCJtZFwiIDppY29uPVwib3V0bGluZWRTa2lwTmV4dFwiIEBjbGljaz1cInF1ZXVlQ29udHJvbGxlci5wbGF5TmV4dCgpXCI+XG4gICAgICA8cS10b29sdGlwPk5leHQ8L3EtdG9vbHRpcD5cbiAgICA8L3EtYnRuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggcS1wdC1sZ1wiIHYtaWY9XCJzb25nUXVldWUuY3VycmVudGx5UGxheWluZyAhPT0gdW5kZWZpbmVkXCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICB7eyBmb3JtYXREdXJhdGlvbihzZWNvbmRzVG9EdXJhdGlvbihjdXJyZW50VGltZSkpIH19XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1zbGlkZXIgdi1tb2RlbD1cImN1cnJlbnRUaW1lXCJcbiAgICAgICAgICAgICAgICBAcGFuPVwib25QYW5cIlxuICAgICAgICAgICAgICAgIDptaW49XCIwXCIgOm1heD1cInRvdGFsVGltZVwiIDpzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCIvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICB7eyBmb3JtYXREdXJhdGlvbihzb25nUXVldWUuY3VycmVudGx5UGxheWluZy5kdXJhdGlvbikgfX1cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNZWRpYUNvbnRyb2wnXG59XG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheUFycm93LFxuICBvdXRsaW5lZFNraXBOZXh0LFxuICBvdXRsaW5lZFNraXBQcmV2aW91cyxcbiAgb3V0bGluZWRQYXVzZVxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7Y29tcHV0ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7YXVkaW9Db250cm9sbGVyfSBmcm9tICdib290L2F1ZGlvQ29udHJvbGxlcic7XG5pbXBvcnQge2R1cmF0aW9uVG9TZWNvbmRzLCBmb3JtYXREdXJhdGlvbiwgc2Vjb25kc1RvRHVyYXRpb259IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcbmltcG9ydCB7cXVldWVDb250cm9sbGVyfSBmcm9tICdib290L3NvbmdRdWV1ZSc7XG5cbmNvbnN0IGN1cnJlbnRUaW1lID0gcmVmKDApO1xuY29uc3Qgc29uZ1F1ZXVlID0gcXVldWVDb250cm9sbGVyO1xuY29uc3QgaXNQYW5uaW5nUHJvZ3Jlc3MgPSByZWYoZmFsc2UpO1xuXG5xdWV1ZUNvbnRyb2xsZXIud2F0Y2hDdXJyZW50bHlQbGF5aW5nKCgpID0+IHtcbiAgcmV0dXJuO1xufSlcblxuY29uc3QgcGF1c2VkID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYXVkaW9Db250cm9sbGVyLnBhdXNlZC52YWx1ZTtcbn0pXG5cbmNvbnN0IG9uUGFuID0gKHBoYXNlOiBzdHJpbmcpID0+IHtcbiAgaWYgKHBoYXNlID09PSAnc3RhcnQnKSB7XG4gICAgaXNQYW5uaW5nUHJvZ3Jlc3MudmFsdWUgPSB0cnVlO1xuICB9XG4gIGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRUaW1lLnZhbHVlKVxuICAgIC8vIFNlZWtcbiAgICBhdWRpb0NvbnRyb2xsZXIuc2VlayhjdXJyZW50VGltZS52YWx1ZSk7XG5cbiAgICBpc1Bhbm5pbmdQcm9ncmVzcy52YWx1ZSA9IGZhbHNlO1xuICB9XG59XG5cbmNvbnN0IHRvdGFsVGltZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgaWYgKHNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZHVyYXRpb25Ub1NlY29uZHMoPHN0cmluZz5zb25nUXVldWUuY3VycmVudGx5UGxheWluZy5kdXJhdGlvbik7XG4gIH1cblxuICByZXR1cm4gLTE7XG59KVxuXG5hdWRpb0NvbnRyb2xsZXIub25Qcm9ncmVzc1RpY2soKHRpbWUpID0+IHtcbiAgaWYgKGlzUGFubmluZ1Byb2dyZXNzLnZhbHVlKVxuICB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGN1cnJlbnRUaW1lLnZhbHVlID0gdGltZTtcbn0pXG48L3NjcmlwdD5cbiIsImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSAncGluaWEnO1xuXG5leHBvcnQgY29uc3QgdXNlUXVldWVEaXNwbGF5U3RvcmUgPSBkZWZpbmVTdG9yZSgncXVldWVEaXNwbGF5Jywge1xuICBzdGF0ZTogKCkgPT4gKHtcbiAgICBzaG93OiB0cnVlXG4gIH0pLFxuXG4gIGFjdGlvbnM6IHtcbiAgICBvcGVuICgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgfSxcblxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gICAgfVxuICB9XG59KTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtNyByb3cganVzdGlmeS1lbmRcIj5cbiAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRSZXBlYXRcIj5cbiAgICAgICAgPHEtdG9vbHRpcD5SZXBlYXQ8L3EtdG9vbHRpcD5cbiAgICAgIDwvcS1idG4+XG5cbiAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRTaHVmZmxlXCIgY2xhc3M9XCJxLW14LXNtXCI+XG4gICAgICAgIDxxLXRvb2x0aXA+U2h1ZmZsZTwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cblxuICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgOmljb249XCJvdXRsaW5lZFF1ZXVlTXVzaWNcIiBAY2xpY2s9XCJxdWV1ZVNob3dTdGF0dXNTdG9yZS50b2dnbGUoKVwiPlxuICAgICAgICA8cS10b29sdGlwPlF1ZXVlPC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgIDxxLWl0ZW0gY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgIDxxLWljb24gbmFtZT1cInZvbHVtZV91cFwiLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLXNsaWRlclxuICAgICAgICAgICAgdi1tb2RlbD1cInZvbHVtZVwiXG4gICAgICAgICAgICA6bWluPVwiMFwiXG4gICAgICAgICAgICA6bWF4PVwiMTAwXCJcbiAgICAgICAgICAgIDpzdGVwPVwiMVwiXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMTAwcHhcIlxuICAgICAgICAgICAgdGh1bWItc2l6ZT1cIjEwcHhcIlxuICAgICAgICAgICAgaW5uZXItdHJhY2stY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICBzZWxlY3Rpb24tY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICB0aHVtYi1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHRyYWNrLWNvbG9yPVwieWVsbG93XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1F1ZXVlQ29udHJvbCdcbn1cbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRTaHVmZmxlLFxuICBvdXRsaW5lZFJlcGVhdCxcbiAgb3V0bGluZWRRdWV1ZU11c2ljLFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7YXVkaW9Db250cm9sbGVyfSBmcm9tICdib290L2F1ZGlvQ29udHJvbGxlcic7XG5pbXBvcnQge2NvbXB1dGVkLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHt1c2VRdWV1ZURpc3BsYXlTdG9yZX0gZnJvbSAnc3RvcmVzL3Nob3dRdWV1ZSc7XG5cbmNvbnN0IHF1ZXVlU2hvd1N0YXR1c1N0b3JlID0gdXNlUXVldWVEaXNwbGF5U3RvcmUoKTtcblxuY29uc3Qgdm9sdW1lID0gcmVmKGF1ZGlvQ29udHJvbGxlci52b2x1bWUudmFsdWUgKiAxMDApO1xud2F0Y2godm9sdW1lLCAoKSA9PiB7XG4gIGF1ZGlvQ29udHJvbGxlci52b2x1bWUudmFsdWUgPSB2b2x1bWUudmFsdWUgLyAxMDA7XG59KVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtdG9vbGJhciBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQganVzdGlmeS1ldmVubHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPHRyYWNrLWluZm8tY2FyZD48L3RyYWNrLWluZm8tY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC01XCI+XG4gICAgICAgIDxtZWRpYS1jb250cm9sPjwvbWVkaWEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgPHF1ZXVlLWNvbnRyb2w+PC9xdWV1ZS1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICA8L3EtdG9vbGJhcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQbGF5ZXJDb250cm9sJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgVHJhY2tJbmZvQ2FyZCBmcm9tICdjb21wb25lbnRzL1RyYWNrSW5mb0NhcmQudnVlJztcbmltcG9ydCBNZWRpYUNvbnRyb2wgZnJvbSAnY29tcG9uZW50cy9NZWRpYUNvbnRyb2wudnVlJztcbmltcG9ydCBRdWV1ZUNvbnRyb2wgZnJvbSAnY29tcG9uZW50cy9RdWV1ZUNvbnRyb2wudnVlJztcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgaCwgb25CZWZvcmVVbm1vdW50LCBUcmFuc2l0aW9uIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTbGlkZVRyYW5zaXRpb24nLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZWFyOiBCb29sZWFuLFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Nob3cnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGxldCBhbmltYXRpbmcgPSBmYWxzZSwgZG9uZUZuLCBlbGVtZW50XG4gICAgbGV0IHRpbWVyLCB0aW1lckZhbGxiYWNrLCBhbmltTGlzdGVuZXIsIGxhc3RFdmVudFxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBkb25lRm4gJiYgZG9uZUZuKClcbiAgICAgIGRvbmVGbiA9IG51bGxcbiAgICAgIGFuaW1hdGluZyA9IGZhbHNlXG5cbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lckZhbGxiYWNrKVxuICAgICAgZWxlbWVudCAhPT0gdm9pZCAwICYmIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGFuaW1MaXN0ZW5lcilcbiAgICAgIGFuaW1MaXN0ZW5lciA9IG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiZWdpbiAoZWwsIGhlaWdodCwgZG9uZSkge1xuICAgICAgZWwuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICAgIGlmIChoZWlnaHQgIT09IHZvaWQgMCkge1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHsgaGVpZ2h0IH1weGBcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0ICR7IHByb3BzLmR1cmF0aW9uIH1tcyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjUwLCAxKWBcblxuICAgICAgYW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgZG9uZUZuID0gZG9uZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCAoZWwsIGV2ZW50KSB7XG4gICAgICBlbC5zdHlsZS5vdmVyZmxvd1kgPSBudWxsXG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBudWxsXG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbFxuICAgICAgY2xlYW51cCgpXG4gICAgICBldmVudCAhPT0gbGFzdEV2ZW50ICYmIGVtaXQoZXZlbnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FbnRlciAoZWwsIGRvbmUpIHtcbiAgICAgIGxldCBwb3MgPSAwXG4gICAgICBlbGVtZW50ID0gZWxcblxuICAgICAgaWYgKGFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgcG9zID0gZWwub2Zmc2V0SGVpZ2h0ID09PSBlbC5zY3JvbGxIZWlnaHQgPyAwIDogdm9pZCAwXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdEV2ZW50ID0gJ2hpZGUnXG4gICAgICB9XG5cbiAgICAgIGJlZ2luKGVsLCBwb3MsIGRvbmUpXG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGAkeyBlbC5zY3JvbGxIZWlnaHQgfXB4YFxuICAgICAgICBhbmltTGlzdGVuZXIgPSBldnQgPT4ge1xuICAgICAgICAgIGlmIChPYmplY3QoZXZ0KSAhPT0gZXZ0IHx8IGV2dC50YXJnZXQgPT09IGVsKSB7XG4gICAgICAgICAgICBlbmQoZWwsICdzaG93JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGFuaW1MaXN0ZW5lcilcbiAgICAgICAgdGltZXJGYWxsYmFjayA9IHNldFRpbWVvdXQoYW5pbUxpc3RlbmVyLCBwcm9wcy5kdXJhdGlvbiAqIDEuMSlcbiAgICAgIH0sIDEwMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxlYXZlIChlbCwgZG9uZSkge1xuICAgICAgbGV0IHBvc1xuICAgICAgZWxlbWVudCA9IGVsXG5cbiAgICAgIGlmIChhbmltYXRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgY2xlYW51cCgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdEV2ZW50ID0gJ3Nob3cnXG4gICAgICAgIHBvcyA9IGVsLnNjcm9sbEhlaWdodFxuICAgICAgfVxuXG4gICAgICBiZWdpbihlbCwgcG9zLCBkb25lKVxuXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgIGFuaW1MaXN0ZW5lciA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdChldnQpICE9PSBldnQgfHwgZXZ0LnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGVuZChlbCwgJ2hpZGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgICB0aW1lckZhbGxiYWNrID0gc2V0VGltZW91dChhbmltTGlzdGVuZXIsIHByb3BzLmR1cmF0aW9uICogMS4xKVxuICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBhbmltYXRpbmcgPT09IHRydWUgJiYgY2xlYW51cCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKFRyYW5zaXRpb24sIHtcbiAgICAgIGNzczogZmFsc2UsXG4gICAgICBhcHBlYXI6IHByb3BzLmFwcGVhcixcbiAgICAgIG9uRW50ZXIsXG4gICAgICBvbkxlYXZlXG4gICAgfSwgc2xvdHMuZGVmYXVsdClcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHNoYWxsb3dSZWFjdGl2ZSwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UsIHZTaG93LCBvbkJlZm9yZVVubW91bnQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSXRlbSBmcm9tICcuLi9pdGVtL1FJdGVtLmpzJ1xuaW1wb3J0IFFJdGVtU2VjdGlvbiBmcm9tICcuLi9pdGVtL1FJdGVtU2VjdGlvbi5qcydcbmltcG9ydCBRSXRlbUxhYmVsIGZyb20gJy4uL2l0ZW0vUUl0ZW1MYWJlbC5qcydcbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFTbGlkZVRyYW5zaXRpb24gZnJvbSAnLi4vc2xpZGUtdHJhbnNpdGlvbi9RU2xpZGVUcmFuc2l0aW9uLmpzJ1xuaW1wb3J0IFFTZXBhcmF0b3IgZnJvbSAnLi4vc2VwYXJhdG9yL1FTZXBhcmF0b3IuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcydcbmltcG9ydCB1c2VNb2RlbFRvZ2dsZSwgeyB1c2VNb2RlbFRvZ2dsZVByb3BzLCB1c2VNb2RlbFRvZ2dsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi91dGlscy91aWQuanMnXG5cbmNvbnN0IGl0ZW1Hcm91cHMgPSBzaGFsbG93UmVhY3RpdmUoe30pXG5jb25zdCBMSU5LX1BST1BTID0gT2JqZWN0LmtleXModXNlUm91dGVyTGlua1Byb3BzKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUV4cGFuc2lvbkl0ZW0nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlUm91dGVyTGlua1Byb3BzLFxuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgaWNvbjogU3RyaW5nLFxuXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBsYWJlbExpbmVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBjYXB0aW9uOiBTdHJpbmcsXG4gICAgY2FwdGlvbkxpbmVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcblxuICAgIGV4cGFuZEljb246IFN0cmluZyxcbiAgICBleHBhbmRlZEljb246IFN0cmluZyxcbiAgICBleHBhbmRJY29uQ2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgZHVyYXRpb246IE51bWJlcixcblxuICAgIGhlYWRlckluc2V0TGV2ZWw6IE51bWJlcixcbiAgICBjb250ZW50SW5zZXRMZXZlbDogTnVtYmVyLFxuXG4gICAgZXhwYW5kU2VwYXJhdG9yOiBCb29sZWFuLFxuICAgIGRlZmF1bHRPcGVuZWQ6IEJvb2xlYW4sXG4gICAgZXhwYW5kSWNvblRvZ2dsZTogQm9vbGVhbixcbiAgICBzd2l0Y2hUb2dnbGVTaWRlOiBCb29sZWFuLFxuICAgIGRlbnNlVG9nZ2xlOiBCb29sZWFuLFxuICAgIGdyb3VwOiBTdHJpbmcsXG4gICAgcG9wdXA6IEJvb2xlYW4sXG5cbiAgICBoZWFkZXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBoZWFkZXJDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnY2xpY2snLCAnYWZ0ZXItc2hvdycsICdhZnRlci1oaWRlJ1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihcbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgIDogcHJvcHMuZGVmYXVsdE9wZW5lZFxuICAgIClcblxuICAgIGNvbnN0IGJsdXJUYXJnZXRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IHsgaGlkZSwgdG9nZ2xlIH0gPSB1c2VNb2RlbFRvZ2dsZSh7IHNob3dpbmcgfSlcblxuICAgIGxldCB1bmlxdWVJZCwgZXhpdEdyb3VwXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWV4cGFuc2lvbi1pdGVtIHEtaXRlbS10eXBlJ1xuICAgICAgKyBgIHEtZXhwYW5zaW9uLWl0ZW0tLSR7IHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCcgfWBcbiAgICAgICsgYCBxLWV4cGFuc2lvbi1pdGVtLS0keyBwcm9wcy5wb3B1cCA9PT0gdHJ1ZSA/ICdwb3B1cCcgOiAnc3RhbmRhcmQnIH1gXG4gICAgKVxuXG4gICAgY29uc3QgY29udGVudFN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLmNvbnRlbnRJbnNldExldmVsID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBbICdwYWRkaW5nJyArIGRpciBdOiAocHJvcHMuY29udGVudEluc2V0TGV2ZWwgKiA1NikgKyAncHgnXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGhhc0xpbmsgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiAoXG4gICAgICAgIHByb3BzLmhyZWYgIT09IHZvaWQgMFxuICAgICAgICB8fCAocHJvcHMudG8gIT09IHZvaWQgMCAmJiBwcm9wcy50byAhPT0gbnVsbCAmJiBwcm9wcy50byAhPT0gJycpXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgbGlua1Byb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cbiAgICAgIExJTktfUFJPUFMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBhY2NbIGtleSBdID0gcHJvcHNbIGtleSBdXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBpc0NsaWNrYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBoYXNMaW5rLnZhbHVlID09PSB0cnVlIHx8IHByb3BzLmV4cGFuZEljb25Ub2dnbGUgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBleHBhbnNpb25JY29uID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZXhwYW5kZWRJY29uICE9PSB2b2lkIDAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmV4cGFuZGVkSWNvblxuICAgICAgICA6IHByb3BzLmV4cGFuZEljb24gfHwgJHEuaWNvblNldC5leHBhbnNpb25JdGVtWyBwcm9wcy5kZW5zZVRvZ2dsZSA9PT0gdHJ1ZSA/ICdkZW5zZUljb24nIDogJ2ljb24nIF1cbiAgICApKVxuXG4gICAgY29uc3QgYWN0aXZlVG9nZ2xlSWNvbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIChoYXNMaW5rLnZhbHVlID09PSB0cnVlIHx8IHByb3BzLmV4cGFuZEljb25Ub2dnbGUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZ3JvdXAsIG5hbWUgPT4ge1xuICAgICAgZXhpdEdyb3VwICE9PSB2b2lkIDAgJiYgZXhpdEdyb3VwKClcbiAgICAgIG5hbWUgIT09IHZvaWQgMCAmJiBlbnRlckdyb3VwKClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25IZWFkZXJDbGljayAoZSkge1xuICAgICAgaGFzTGluay52YWx1ZSAhPT0gdHJ1ZSAmJiB0b2dnbGUoZSlcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVJY29uS2V5Ym9hcmQgKGUpIHtcbiAgICAgIGUua2V5Q29kZSA9PT0gMTMgJiYgdG9nZ2xlSWNvbihlLCB0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUljb24gKGUsIGtleWJvYXJkKSB7XG4gICAgICBrZXlib2FyZCAhPT0gdHJ1ZSAmJiBibHVyVGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsICYmIGJsdXJUYXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgdG9nZ2xlKGUpXG4gICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2hvdyAoKSB7XG4gICAgICBlbWl0KCdhZnRlci1zaG93JylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkhpZGUgKCkge1xuICAgICAgZW1pdCgnYWZ0ZXItaGlkZScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW50ZXJHcm91cCAoKSB7XG4gICAgICBpZiAodW5pcXVlSWQgPT09IHZvaWQgMCkge1xuICAgICAgICB1bmlxdWVJZCA9IHVpZCgpXG4gICAgICB9XG5cbiAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPSB1bmlxdWVJZFxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93ID0gd2F0Y2goc2hvd2luZywgdmFsID0+IHtcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPSB1bmlxdWVJZFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgZGVsZXRlIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgZ3JvdXAgPSB3YXRjaChcbiAgICAgICAgKCkgPT4gaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSxcbiAgICAgICAgKHZhbCwgb2xkVmFsKSA9PiB7XG4gICAgICAgICAgaWYgKG9sZFZhbCA9PT0gdW5pcXVlSWQgJiYgdmFsICE9PSB2b2lkIDAgJiYgdmFsICE9PSB1bmlxdWVJZCkge1xuICAgICAgICAgICAgaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGV4aXRHcm91cCA9ICgpID0+IHtcbiAgICAgICAgc2hvdygpXG4gICAgICAgIGdyb3VwKClcblxuICAgICAgICBpZiAoaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSA9PT0gdW5pcXVlSWQpIHtcbiAgICAgICAgICBkZWxldGUgaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXVxuICAgICAgICB9XG5cbiAgICAgICAgZXhpdEdyb3VwID0gdm9pZCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9nZ2xlSWNvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjbGFzczogW1xuICAgICAgICAgICdxLWZvY3VzYWJsZSByZWxhdGl2ZS1wb3NpdGlvbiBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICsgYCR7IHByb3BzLmRlbnNlVG9nZ2xlID09PSB0cnVlICYmIHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUgPyAnIGl0ZW1zLWVuZCcgOiAnJyB9YCxcbiAgICAgICAgICBwcm9wcy5leHBhbmRJY29uQ2xhc3NcbiAgICAgICAgXSxcbiAgICAgICAgc2lkZTogcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSAhPT0gdHJ1ZSxcbiAgICAgICAgYXZhdGFyOiBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX190b2dnbGUtaWNvbidcbiAgICAgICAgICAgICsgKHByb3BzLmV4cGFuZGVkSWNvbiA9PT0gdm9pZCAwICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgICAgPyAnIHEtZXhwYW5zaW9uLWl0ZW1fX3RvZ2dsZS1pY29uLS1yb3RhdGVkJ1xuICAgICAgICAgICAgICA6ICcnKSxcbiAgICAgICAgICBuYW1lOiBleHBhbnNpb25JY29uLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChhY3RpdmVUb2dnbGVJY29uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgIHRhYmluZGV4OiAwLFxuICAgICAgICAgIG9uQ2xpY2s6IHRvZ2dsZUljb24sXG4gICAgICAgICAgb25LZXl1cDogdG9nZ2xlSWNvbktleWJvYXJkXG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hpbGQudW5zaGlmdChcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICByZWY6IGJsdXJUYXJnZXRSZWYsXG4gICAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX3RvZ2dsZS1mb2N1cyBxLWljb24gcS1mb2N1cy1oZWxwZXIgcS1mb2N1cy1oZWxwZXItLXJvdW5kZWQnLFxuICAgICAgICAgICAgdGFiaW5kZXg6IC0xXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChRSXRlbVNlY3Rpb24sIGRhdGEsICgpID0+IGNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlckNoaWxkICgpIHtcbiAgICAgIGxldCBjaGlsZFxuXG4gICAgICBpZiAoc2xvdHMuaGVhZGVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgY2hpbGQgPSBbXS5jb25jYXQoc2xvdHMuaGVhZGVyKHsgZXhwYW5kZWQ6IHNob3dpbmcudmFsdWUgPT09IHRydWUgfSkpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2hpbGQgPSBbXG4gICAgICAgICAgaChRSXRlbVNlY3Rpb24sICgpID0+IFtcbiAgICAgICAgICAgIGgoUUl0ZW1MYWJlbCwgeyBsaW5lczogcHJvcHMubGFiZWxMaW5lcyB9LCAoKSA9PiBwcm9wcy5sYWJlbCB8fCAnJyksXG5cbiAgICAgICAgICAgIHByb3BzLmNhcHRpb25cbiAgICAgICAgICAgICAgPyBoKFFJdGVtTGFiZWwsIHsgbGluZXM6IHByb3BzLmNhcHRpb25MaW5lcywgY2FwdGlvbjogdHJ1ZSB9LCAoKSA9PiBwcm9wcy5jYXB0aW9uKVxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICBdKVxuICAgICAgICBdXG5cbiAgICAgICAgcHJvcHMuaWNvbiAmJiBjaGlsZFsgcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSA9PT0gdHJ1ZSA/ICdwdXNoJyA6ICd1bnNoaWZ0JyBdKFxuICAgICAgICAgIGgoUUl0ZW1TZWN0aW9uLCB7XG4gICAgICAgICAgICBzaWRlOiBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlID09PSB0cnVlLFxuICAgICAgICAgICAgYXZhdGFyOiBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlICE9PSB0cnVlXG4gICAgICAgICAgfSwgKCkgPT4gaChRSWNvbiwgeyBuYW1lOiBwcm9wcy5pY29uIH0pKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgY2hpbGRbIHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUgPyAndW5zaGlmdCcgOiAncHVzaCcgXShcbiAgICAgICAgZ2V0VG9nZ2xlSWNvbigpXG4gICAgICApXG5cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlciAoKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICByZWY6ICdpdGVtJyxcbiAgICAgICAgc3R5bGU6IHByb3BzLmhlYWRlclN0eWxlLFxuICAgICAgICBjbGFzczogcHJvcHMuaGVhZGVyQ2xhc3MsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICBpbnNldExldmVsOiBwcm9wcy5oZWFkZXJJbnNldExldmVsXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkYXRhLmNsaWNrYWJsZSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gb25IZWFkZXJDbGlja1xuXG4gICAgICAgIGhhc0xpbmsudmFsdWUgPT09IHRydWUgJiYgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGxpbmtQcm9wcy52YWx1ZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFJdGVtLCBkYXRhLCBnZXRIZWFkZXJDaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uQ2hpbGQgKCkge1xuICAgICAgcmV0dXJuIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnZS1jb250ZW50JyxcbiAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX2NvbnRlbnQgcmVsYXRpdmUtcG9zaXRpb24nLFxuICAgICAgICAgIHN0eWxlOiBjb250ZW50U3R5bGUudmFsdWVcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpLFxuICAgICAgICBbIFtcbiAgICAgICAgICB2U2hvdyxcbiAgICAgICAgICBzaG93aW5nLnZhbHVlXG4gICAgICAgIF0gXVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgY29uc3Qgbm9kZSA9IFtcbiAgICAgICAgZ2V0SGVhZGVyKCksXG5cbiAgICAgICAgaChRU2xpZGVUcmFuc2l0aW9uLCB7XG4gICAgICAgICAgZHVyYXRpb246IHByb3BzLmR1cmF0aW9uLFxuICAgICAgICAgIG9uU2hvdyxcbiAgICAgICAgICBvbkhpZGVcbiAgICAgICAgfSwgZ2V0VHJhbnNpdGlvbkNoaWxkKVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMuZXhwYW5kU2VwYXJhdG9yID09PSB0cnVlKSB7XG4gICAgICAgIG5vZGUucHVzaChcbiAgICAgICAgICBoKFFTZXBhcmF0b3IsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fYm9yZGVyIHEtZXhwYW5zaW9uLWl0ZW1fX2JvcmRlci0tdG9wIGFic29sdXRlLXRvcCcsXG4gICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWVcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoKFFTZXBhcmF0b3IsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fYm9yZGVyIHEtZXhwYW5zaW9uLWl0ZW1fX2JvcmRlci0tYm90dG9tIGFic29sdXRlLWJvdHRvbScsXG4gICAgICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWVcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBub2RlXG4gICAgfVxuXG4gICAgcHJvcHMuZ3JvdXAgIT09IHZvaWQgMCAmJiBlbnRlckdyb3VwKClcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBleGl0R3JvdXAgIT09IHZvaWQgMCAmJiBleGl0R3JvdXAoKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBbXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fY29udGFpbmVyIHJlbGF0aXZlLXBvc2l0aW9uJyB9LCBnZXRDb250ZW50KCkpXG4gICAgXSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VTcGlubmVyLCB7IHVzZVNwaW5uZXJQcm9wcyB9IGZyb20gJy4vdXNlLXNwaW5uZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBzdmcgPSBbXG4gIGgoJ2cnLCB7XG4gICAgdHJhbnNmb3JtOiAnbWF0cml4KDEgMCAwIC0xIDAgODApJ1xuICB9LCBbXG4gICAgaCgncmVjdCcsIHtcbiAgICAgIHdpZHRoOiAnMTAnLFxuICAgICAgaGVpZ2h0OiAnMjAnLFxuICAgICAgcng6ICczJ1xuICAgIH0sIFtcbiAgICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdoZWlnaHQnLFxuICAgICAgICBiZWdpbjogJzBzJyxcbiAgICAgICAgZHVyOiAnNC4zcycsXG4gICAgICAgIHZhbHVlczogJzIwOzQ1OzU3OzgwOzY0OzMyOzY2OzQ1OzY0OzIzOzY2OzEzOzY0OzU2OzM0OzM0OzI7MjM7NzY7Nzk7MjAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSksXG4gICAgaCgncmVjdCcsIHtcbiAgICAgIHg6ICcxNScsXG4gICAgICB3aWR0aDogJzEwJyxcbiAgICAgIGhlaWdodDogJzgwJyxcbiAgICAgIHJ4OiAnMydcbiAgICB9LCBbXG4gICAgICBoKCdhbmltYXRlJywge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnaGVpZ2h0JyxcbiAgICAgICAgYmVnaW46ICcwcycsXG4gICAgICAgIGR1cjogJzJzJyxcbiAgICAgICAgdmFsdWVzOiAnODA7NTU7MzM7NTs3NTsyMzs3MzszMzsxMjsxNDs2MDs4MCcsXG4gICAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgICAgfSlcbiAgICBdKSxcbiAgICBoKCdyZWN0Jywge1xuICAgICAgeDogJzMwJyxcbiAgICAgIHdpZHRoOiAnMTAnLFxuICAgICAgaGVpZ2h0OiAnNTAnLFxuICAgICAgcng6ICczJ1xuICAgIH0sIFtcbiAgICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdoZWlnaHQnLFxuICAgICAgICBiZWdpbjogJzBzJyxcbiAgICAgICAgZHVyOiAnMS40cycsXG4gICAgICAgIHZhbHVlczogJzUwOzM0Ozc4OzIzOzU2OzIzOzM0Ozc2OzgwOzU0OzIxOzUwJyxcbiAgICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgICB9KVxuICAgIF0pLFxuICAgIGgoJ3JlY3QnLCB7XG4gICAgICB4OiAnNDUnLFxuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICczMCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICcycycsXG4gICAgICAgIHZhbHVlczogJzMwOzQ1OzEzOzgwOzU2OzcyOzQ1Ozc2OzM0OzIzOzY3OzMwJyxcbiAgICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgICB9KVxuICAgIF0pXG4gIF0pXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3Bpbm5lckF1ZGlvJyxcblxuICBwcm9wczogdXNlU3Bpbm5lclByb3BzLFxuXG4gIHNldHVwIChwcm9wcykge1xuICAgIGNvbnN0IHsgY1NpemUsIGNsYXNzZXMgfSA9IHVzZVNwaW5uZXIocHJvcHMpXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnc3ZnJywge1xuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHdpZHRoOiBjU2l6ZS52YWx1ZSxcbiAgICAgIGhlaWdodDogY1NpemUudmFsdWUsXG4gICAgICB2aWV3Qm94OiAnMCAwIDU1IDgwJyxcbiAgICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgfSwgc3ZnKVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB2LWlmPVwicHJvcHMudHJhY2tJbmZvXCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgIDxxLWF2YXRhciBzcXVhcmU+XG4gICAgICAgIDxpbWcgOnNyYz1cInByb3BzLnRyYWNrSW5mby5hbGJ1bS50aHVtYm5haWwudGlueS51cmxcIj5cbiAgICAgIDwvcS1hdmF0YXI+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsIDpjbGFzcz1cInsgJ3RleHQtZ3QnIDogY3VycmVudGx5UGxheWluZyB9XCI+e3sgcHJvcHMudHJhY2tJbmZvLm5hbWUuX2RlZmF1bHQgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgOmNsYXNzPVwieyAndGV4dC1ndCcgOiBjdXJyZW50bHlQbGF5aW5nIH1cIiBjYXB0aW9uIGxpbmVzPVwiMlwiPnt7IHByb3BzLnRyYWNrSW5mby5hbGJ1bS5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIHYtaWY9XCJjdXJyZW50bHlQbGF5aW5nXCI+XG4gICAgICA8cS1zcGlubmVyLWF1ZGlvIHYtaWY9XCIhcGF1c2VkXCIgc2l6ZT1cIjJlbVwiIGNvbG9yPVwiZ3RcIiAvPlxuICAgICAgPHEtaWNvbiBzaXplPVwiMmVtXCIgdi1pZj1cInBhdXNlZFwiIDpuYW1lPVwib3V0bGluZWRQYXVzZVwiPjwvcS1pY29uPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgdi1pZj1cIiFjdXJyZW50bHlQbGF5aW5nXCI+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgZm9ybWF0RHVyYXRpb24ocHJvcHMudHJhY2tJbmZvLmR1cmF0aW9uKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7VHJhY2tSZWFkRHRvfSBmcm9tICdhcHAvbXVzaWMtZGF0YS1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQge2NvbXB1dGVkLCBkZWZpbmVQcm9wc30gZnJvbSAndnVlJztcbmltcG9ydCB7Zm9ybWF0RHVyYXRpb259IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcbmltcG9ydCB7YXVkaW9Db250cm9sbGVyfSBmcm9tICdib290L2F1ZGlvQ29udHJvbGxlcic7XG5pbXBvcnQge291dGxpbmVkUGF1c2V9IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcblxuY29uc3QgcGF1c2VkID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYXVkaW9Db250cm9sbGVyLnBhdXNlZC52YWx1ZTtcbn0pO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0cmFja0luZm86IFRyYWNrUmVhZER0byxcbiAgY3VycmVudGx5UGxheWluZzogYm9vbGVhblxufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPFByb3BzPigpO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPHEtbGlzdD5cbiAgICAgIDxxLWV4cGFuc2lvbi1pdGVtXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGxhYmVsPVwiSGlzdG9yeVwiXG4gICAgICAgIGRlZmF1bHQtb3BlbmVkPlxuXG4gICAgICAgIDxRdWV1ZUl0ZW0gdi1mb3I9XCJoaXN0b3J5IGluIHF1ZXVlZEhpc3RvcnlcIiA6a2V5PVwiaGlzdG9yeS5pZFwiXG4gICAgICAgICAgICAgICAgICAgOnRyYWNrLWluZm89XCJoaXN0b3J5XCIgOmN1cnJlbnRseS1wbGF5aW5nPVwiZmFsc2VcIj48L1F1ZXVlSXRlbT5cblxuICAgICAgICA8UXVldWVJdGVtIDpjdXJyZW50bHktcGxheWluZz1cInRydWVcIiA6dHJhY2staW5mbz1cImN1cnJlbnRseVBsYXlpbmdcIj48L1F1ZXVlSXRlbT5cbiAgICAgIDwvcS1leHBhbnNpb24taXRlbT5cblxuICAgICAgPHEtZXhwYW5zaW9uLWl0ZW1cbiAgICAgICAgZGVuc2VcbiAgICAgICAgbGFiZWw9XCJOZXh0IFVwXCJcbiAgICAgICAgZGVmYXVsdC1vcGVuZWQ+XG4gICAgICAgIDxRdWV1ZUl0ZW0gdi1mb3I9XCJmdXR1cmUgaW4gcXVldWVkRnV0dXJlXCIgOmtleT1cImZ1dHVyZS5pZFwiXG4gICAgICAgICAgICAgICAgICAgOnRyYWNrLWluZm89XCJmdXR1cmVcIiA6Y3VycmVudGx5LXBsYXlpbmc9XCJmYWxzZVwiPjwvUXVldWVJdGVtPlxuICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPlxuICAgIDwvcS1saXN0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgUXVldWVJdGVtIGZyb20gJ2NvbXBvbmVudHMvUXVldWVJdGVtLnZ1ZSc7XG5pbXBvcnQge3F1ZXVlQ29udHJvbGxlcn0gZnJvbSAnYm9vdC9zb25nUXVldWUnO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcblxuY29uc3QgcXVldWVkSGlzdG9yeSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlQ29udHJvbGxlci5zb25nSGlzdG9yeTtcbn0pXG5cbmNvbnN0IHF1ZXVlZEZ1dHVyZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlQ29udHJvbGxlci5xdWV1ZTtcbn0pXG5cbmNvbnN0IGN1cnJlbnRseVBsYXlpbmcgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBxdWV1ZUNvbnRyb2xsZXIuY3VycmVudGx5UGxheWluZztcbn0pXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxxLWxpc3QgcGFkZGluZz5cbiAgICAgIDxxLWl0ZW0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gdGV4dC1oNVwiPlxuICAgICAgICAgICAgICBMT0dPIEhFUkVcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuXG4gICAgPHEtbGlzdCBwYWRkaW5nPlxuICAgICAgPHEtaXRlbSB2LWZvcj1cImxpbmsgaW4gbmF2aWdhdGlvbnNcIiA6a2V5PVwibGluay50ZXh0XCJcbiAgICAgICAgICAgICAgdi1yaXBwbGUgY2xpY2thYmxlIDppbnNldC1sZXZlbD0wLjNcbiAgICAgICAgICAgICAgOnRvPVwibGluay5yb3V0ZVwiIGV4YWN0XG4gICAgICAgICAgICAgIDphY3RpdmU9XCJjdXJyZW50UGF0aCA9PT0gbGluay5yb3V0ZS5uYW1lXCJcbiAgICAgICAgICAgICAgYWN0aXZlLWNsYXNzPVwidGV4dC13aGl0ZSBiZy1ncmV5LTggdGV4dC13ZWlnaHQtYm9sZGVyXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvbiA6bmFtZT1cImxpbmsuaWNvblwiIHNpemU9XCIzMnB4XCIvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHt7bGluay50ZXh0fX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuXG4gICAgICA8cS1zZXBhcmF0b3IgY2xhc3M9XCJxLW15LW1kXCIgLz5cblxuICAgICAgPHEtaXRlbSB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuMz5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIDpuYW1lPVwib3V0bGluZWRQbGF5bGlzdEFkZFwiIHNpemU9XCIzMnB4XCIvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgQ3JlYXRlIFBsYXlsaXN0XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgIDxxLWl0ZW0gdi1mb3I9XCJpdGVtIGluIHBsYXlsaXN0SXRlbXNcIiA6a2V5PVwiaXRlbVwiXG4gICAgICAgICAgICAgIHYtcmlwcGxlIGNsaWNrYWJsZSA6aW5zZXQtbGV2ZWw9MC4zPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWljb24gOm5hbWU9XCJvdXRsaW5lZFBsYXlsaXN0UGxheVwiIHNpemU9XCIzMnB4XCIvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAge3tpdGVtfX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnR9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdEcmF3ZXJOYXZpZ2F0aW9uJyxcbiAgY29tcG9uZW50czoge1xuICB9XG59KVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZEhvbWUsXG4gIG91dGxpbmVkUGxheWxpc3RBZGQsXG4gIG91dGxpbmVkUGxheWxpc3RQbGF5LFxuICBvdXRsaW5lZFNlYXJjaCxcbiAgb3V0bGluZWRMaWJyYXJ5TXVzaWMsXG4gIG91dGxpbmVkUmFkaW9cbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgY3VycmVudFBhdGggPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLm5hbWU7XG59KVxuXG5jb25zdCBuYXZpZ2F0aW9ucyA9IFtcbiAge1xuICAgIHRleHQ6ICdIb21lJyxcbiAgICBpY29uOiBvdXRsaW5lZEhvbWUsXG4gICAgcm91dGU6IHsgbmFtZTogJ2hvbWUnIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdTZWFyY2gnLFxuICAgIGljb246IG91dGxpbmVkU2VhcmNoLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdzZWFyY2gnIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdMaWJyYXJ5JyxcbiAgICBpY29uOiBvdXRsaW5lZExpYnJhcnlNdXNpYyxcbiAgICByb3V0ZTogeyBuYW1lOiAnbGlicmFyeScgfVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1JhZGlvJyxcbiAgICBpY29uOiBvdXRsaW5lZFJhZGlvLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdyYWRpbycgfVxuICB9XG5dXG5cbmNvbnN0IHBsYXlsaXN0SXRlbXMgPSBbXG4gICdwbGF5bGlzdDEnLFxuICAnYWJjJyxcbiAgJ2Rhc2tkcGFvc2Rhc2QnLFxuICAnYXNkZidcbl1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWxheW91dCB2aWV3PVwibEhoIExwUiBmRmZcIj5cbiAgICA8cS1oZWFkZXIgYm9yZGVyZWQ+XG4gICAgICA8cS10b29sYmFyPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlPlxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IHNpemU9XCJsZ1wiIGNvbG9yPVwiZ3JleS04XCIgOmljb249XCJvdXRsaW5lZEFycm93QmFja1wiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5CYWNrPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCBzaXplPVwibGdcIiBjb2xvcj1cImdyZXktOFwiIDppY29uPVwib3V0bGluZWRBcnJvd0ZvcndhcmRcIj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXA+Rm9yd2FyZDwvcS10b29sdGlwPlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgIDxxLXNwYWNlIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLXNtIHJvdyBpdGVtcy1jZW50ZXIgbm8td3JhcFwiPlxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRJbmZvXCIgdi1pZj1cIiRxLnNjcmVlbi5ndC5zbVwiIEBjbGljaz1cInF1ZXVlRGlzcGxheVN0b3JlLnRvZ2dsZSgpXCI+XG4gICAgICAgICAgICA8cS10b29sdGlwPkFib3V0IFRoaXMgU2l0ZTwvcS10b29sdGlwPlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXRcbiAgICAgICAgICAgICAgICAgOmljb249XCJxLmRhcmsuaXNBY3RpdmUgPyBvdXRsaW5lZERhcmtNb2RlIDogb3V0bGluZWRMaWdodE1vZGVcIlxuICAgICAgICAgICAgICAgICB2LWlmPVwiJHEuc2NyZWVuLmd0LnNtXCIgQGNsaWNrPVwidG9nZ2xlVGhlbWVcIj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXA+VG9nZ2xlPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8cS1idG4tZHJvcGRvd24gcm91bmRlZCBsYWJlbD1cInNxejI2OVwiIHN0eWxlPVwid2lkdGg6IDE1MHB4XCI+XG4gICAgICAgICAgICA8cS1saXN0PlxuICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+QWNjb3VudDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5TZXR0aW5nczwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cInEtbXktbWRcIiAvPlxuXG4gICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5Mb2dvdXQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgPC9xLWJ0bi1kcm9wZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtdG9vbGJhcj5cblxuICAgIDwvcS1oZWFkZXI+XG5cbiAgICA8cS1kcmF3ZXIgc2hvdy1pZi1hYm92ZSBzaWRlPVwibGVmdFwiIDp3aWR0aD1cIjI3MFwiPlxuICAgICAgPGRyYXdlci1uYXZpZ2F0aW9uPjwvZHJhd2VyLW5hdmlnYXRpb24+XG4gICAgPC9xLWRyYXdlcj5cblxuICAgIDxxLWRyYXdlciB2LW1vZGVsPVwic2hvd1F1ZXVlXCIgc2lkZT1cInJpZ2h0XCIgOndpZHRoPVwiMjcwXCI+XG4gICAgICA8ZHJhd2VyLXF1ZXVlPjwvZHJhd2VyLXF1ZXVlPlxuICAgIDwvcS1kcmF3ZXI+XG5cbiAgICA8cS1wYWdlLWNvbnRhaW5lcj5cbiAgICAgIDxyb3V0ZXItdmlldyB2LXNsb3Q9XCJ7IENvbXBvbmVudCB9XCI+XG4gICAgICAgIDxrZWVwLWFsaXZlIGluY2x1ZGU9XCJIb21lUGFnZVwiPlxuICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XG4gICAgICAgIDwva2VlcC1hbGl2ZT5cbiAgICAgIDwvcm91dGVyLXZpZXc+XG4gICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuXG4gICAgPHEtZm9vdGVyPlxuICAgICAgPHBsYXllci1jb250cm9sPjwvcGxheWVyLWNvbnRyb2w+XG4gICAgPC9xLWZvb3Rlcj5cblxuICA8L3EtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCBEcmF3ZXJOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvRHJhd2VyTmF2aWdhdGlvbi52dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTWFpbkxheW91dCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBEcmF3ZXJOYXZpZ2F0aW9uXG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZEluZm8sXG4gIG91dGxpbmVkQXJyb3dGb3J3YXJkLFxuICBvdXRsaW5lZEFycm93QmFjayxcbiAgb3V0bGluZWRMaWdodE1vZGUsXG4gIG91dGxpbmVkRGFya01vZGVcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge2NvbXB1dGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VRdWFzYXIsIHNldENzc1ZhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgUGxheWVyQ29udHJvbCBmcm9tICdjb21wb25lbnRzL1BsYXllckNvbnRyb2wudnVlJztcbmltcG9ydCB7TWVkaWFTZXNzaW9uQ29udHJvbGxlcn0gZnJvbSAnc3JjL3V0aWxzL01lZGlhU2Vzc2lvbkNvbnRyb2xsZXInO1xuaW1wb3J0IHt1c2VRdWV1ZURpc3BsYXlTdG9yZX0gZnJvbSAnc3RvcmVzL3Nob3dRdWV1ZSc7XG5pbXBvcnQgRHJhd2VyUXVldWUgZnJvbSBcImNvbXBvbmVudHMvRHJhd2VyUXVldWUudnVlXCI7XG5cbmNvbnN0IHF1ZXVlRGlzcGxheVN0b3JlID0gdXNlUXVldWVEaXNwbGF5U3RvcmUoKTtcblxuY29uc3Qgc2hvd1F1ZXVlID0gY29tcHV0ZWQoKCkgPT4gcXVldWVEaXNwbGF5U3RvcmUuc2hvdylcblxuY29uc3QgcSA9IHVzZVF1YXNhcigpO1xucS5kYXJrLnNldCh0cnVlKVxuc2V0Q3NzVmFyKCdwcmltYXJ5JywgJyMwMDAwMDAnKVxuXG5mdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgcS5kYXJrLnRvZ2dsZSgpO1xuICBpZiAocS5kYXJrLmlzQWN0aXZlKVxuICB7XG4gICAgc2V0Q3NzVmFyKCdwcmltYXJ5JywgJyMwMDAwMDAnKVxuICB9XG4gIGVsc2VcbiAge1xuICAgIHNldENzc1ZhcigncHJpbWFyeScsICcjZmZmZmZmJylcbiAgfVxufVxuXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJvZmZzZXQiLCJ2YWx1ZSIsInN0eWxlIiwicG9zaXRpb24iLCJzaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0aW1lciIsIl9fZGVmYXVsdF9fIiwic3RlcCIsImRyYWdnaW5nIiwiY2xhc3NlcyIsInJhdGlvIiwidWlkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUtBLElBQUEsZ0JBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Q7QUFBQSxFQUVELE1BQU8sT0FBTyxFQUFFLFNBQVM7QUFDdkIsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QiwrQkFDRyxNQUFNLFdBQVcsT0FBTyxnQkFBZ0I7QUFBQSxJQUM1QztBQUVELFdBQU8sTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLFFBQVEsTUFBSyxHQUFJLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxFQUNyRTtBQUNILENBQUM7QUNoQkQsTUFBTSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sVUFBUyxDQUFFO0FBRTNDLElBQUEsU0FBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixRQUFTO0FBQ1AsV0FBTyxNQUFNO0FBQUEsRUFDZDtBQUNILENBQUM7QUNQRCxJQUFBLFlBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsTUFB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

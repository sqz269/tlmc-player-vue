import { r as ref, L as isRuntimeSsrPreHydration, o as onMounted, k as createComponent, n as onBeforeUnmount, aL as noop, D as nextTick, h, g as getCurrentInstance, b2 as listenOpts, aJ as createDirective, aK as client, aM as leftClick, aN as addEvt, aO as preventDraggable, b1 as prevent, au as stop, a6 as position, aP as cleanEvt, a9 as stopAndPrevent, w as watch, aZ as getScrollTarget, b4 as getVerticalScrollPosition, b5 as getHorizontalScrollPosition } from "./index.98c8768e.js";
import { c as clearSelection } from "./format.e3c7d45c.js";
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
      const init = (stop2) => {
        targetEl = proxy.$el.parentNode;
        if (targetEl) {
          observer = new ResizeObserver(trigger);
          observer.observe(targetEl);
          emitEvent();
        } else if (stop2 !== true) {
          nextTick(() => {
            init(true);
          });
        }
      };
      onMounted(() => {
        init();
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
            if (ctx.direction.all !== true && (mouseEvent !== true || ctx.modifiers.mouseAllDir !== true && ctx.modifiers.mousealldir !== true)) {
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
            let cursor;
            if (modifiers.preserveCursor !== true && modifiers.preservecursor !== true) {
              cursor = document.documentElement.style.cursor || "";
              document.documentElement.style.cursor = "grabbing";
            }
            isMouseEvt === true && document.body.classList.add("no-pointer-events--children");
            document.body.classList.add("non-selectable");
            clearSelection();
            ctx.styleCleanup = (withDelayedFn) => {
              ctx.styleCleanup = void 0;
              if (cursor !== void 0) {
                document.documentElement.style.cursor = cursor;
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
          if (ctx.direction.all === true || isMouseEvt === true && (ctx.modifiers.mouseAllDir === true || ctx.modifiers.mousealldir === true)) {
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
      if (modifiers.mouse === true) {
        const capture = modifiers.mouseCapture === true || modifiers.mousecapture === true ? "Capture" : "";
        addEvt(ctx, "main", [
          [el, "mousedown", "mouseStart", `passive${capture}`]
        ]);
      }
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
    watch(() => proxy.$q.lang.rtl, emitEvent);
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
export { QResizeObserver as Q, TouchPan as T, QScrollObserver as a, getModifierDirections as g, shouldStart as s };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNjcm9sbE9ic2VydmVyLjlmNDhiMWU0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYW4tcmVuZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS90b3VjaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnXG5cbi8vIHVzaW5nIGl0IHRvIG1hbmFnZSBTU1IgcmVuZGVyaW5nIHdpdGggYmVzdCBwZXJmb3JtYW5jZVxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW5SZW5kZXIgPSByZWYoIWlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSlcblxuICBpZiAoY2FuUmVuZGVyLnZhbHVlID09PSBmYWxzZSkge1xuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjYW5SZW5kZXIudmFsdWUgPSB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjYW5SZW5kZXJcbn1cbiIsImltcG9ydCB7IGgsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQ2FuUmVuZGVyIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhbi1yZW5kZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cywgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCBoYXNPYnNlcnZlciA9IHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcbmNvbnN0IHJlc2l6ZVByb3BzID0gaGFzT2JzZXJ2ZXIgPT09IHRydWVcbiAgPyB7fVxuICA6IHtcbiAgICAgIHN0eWxlOiAnZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTE7JyxcbiAgICAgIHVybDogJ2Fib3V0OmJsYW5rJ1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSZXNpemVPYnNlcnZlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXNpemUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18pIHsgcmV0dXJuIG5vb3AgfVxuXG4gICAgbGV0IHRpbWVyID0gbnVsbCwgdGFyZ2V0RWwsIHNpemUgPSB7IHdpZHRoOiAtMSwgaGVpZ2h0OiAtMSB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyIChpbW1lZGlhdGVseSkge1xuICAgICAgaWYgKGltbWVkaWF0ZWx5ID09PSB0cnVlIHx8IHByb3BzLmRlYm91bmNlID09PSAwIHx8IHByb3BzLmRlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRFdmVudCAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB0aW1lciA9IG51bGxcblxuICAgICAgaWYgKHRhcmdldEVsKSB7XG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHdpZHRoLCBvZmZzZXRIZWlnaHQ6IGhlaWdodCB9ID0gdGFyZ2V0RWxcblxuICAgICAgICBpZiAod2lkdGggIT09IHNpemUud2lkdGggfHwgaGVpZ2h0ICE9PSBzaXplLmhlaWdodCkge1xuICAgICAgICAgIHNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfVxuICAgICAgICAgIGVtaXQoJ3Jlc2l6ZScsIHNpemUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgaWYgKGhhc09ic2VydmVyID09PSB0cnVlKSB7XG4gICAgICBsZXQgb2JzZXJ2ZXJcblxuICAgICAgLy8gaW5pdGlhbGl6ZSBhcyBzb29uIGFzIHBvc3NpYmxlXG4gICAgICBjb25zdCBpbml0ID0gc3RvcCA9PiB7XG4gICAgICAgIHRhcmdldEVsID0gcHJveHkuJGVsLnBhcmVudE5vZGVcblxuICAgICAgICBpZiAodGFyZ2V0RWwpIHtcbiAgICAgICAgICBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcih0cmlnZ2VyKVxuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0RWwpXG4gICAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdG9wICE9PSB0cnVlKSB7XG4gICAgICAgICAgbmV4dFRpY2soKCkgPT4geyBpbml0KHRydWUpIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Nb3VudGVkKCgpID0+IHsgaW5pdCgpIH0pXG5cbiAgICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcblxuICAgICAgICBpZiAob2JzZXJ2ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5kaXNjb25uZWN0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0YXJnZXRFbCkgeyAvLyBGRiBmb3IgQW5kcm9pZFxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldEVsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9XG4gICAgZWxzZSB7IC8vIG5vIG9ic2VydmVyLCBzbyBmYWxsYmFjayB0byBvbGQgaWZyYW1lIG1ldGhvZFxuICAgICAgY29uc3QgY2FuUmVuZGVyID0gdXNlQ2FuUmVuZGVyKClcblxuICAgICAgbGV0IGN1ckRvY1ZpZXdcblxuICAgICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcblxuICAgICAgICBpZiAoY3VyRG9jVmlldyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLy8gaU9TIGlzIGZ1enp5LCBuZWVkIHRvIGNoZWNrIGl0IGZpcnN0XG4gICAgICAgICAgaWYgKGN1ckRvY1ZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjdXJEb2NWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRyaWdnZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VyRG9jVmlldyA9IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uT2JqTG9hZCAoKSB7XG4gICAgICAgIGNsZWFudXAoKVxuXG4gICAgICAgIGlmICh0YXJnZXRFbCAmJiB0YXJnZXRFbC5jb250ZW50RG9jdW1lbnQpIHtcbiAgICAgICAgICBjdXJEb2NWaWV3ID0gdGFyZ2V0RWwuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3XG4gICAgICAgICAgY3VyRG9jVmlldy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0cmlnZ2VyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0RWwgPSBwcm94eS4kZWxcbiAgICAgICAgICB0YXJnZXRFbCAmJiBvbk9iakxvYWQoKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgb25CZWZvcmVVbm1vdW50KGNsZWFudXApXG5cbiAgICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kXG4gICAgICBwcm94eS50cmlnZ2VyID0gdHJpZ2dlclxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY2FuUmVuZGVyLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIGgoJ29iamVjdCcsIHtcbiAgICAgICAgICAgIHN0eWxlOiByZXNpemVQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIHRhYmluZGV4OiAtMSwgLy8gZml4IGZvciBGaXJlZm94XG4gICAgICAgICAgICB0eXBlOiAndGV4dC9odG1sJyxcbiAgICAgICAgICAgIGRhdGE6IHJlc2l6ZVByb3BzLnVybCxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgIG9uTG9hZDogb25PYmpMb2FkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiIsImNvbnN0IG1vZGlmaWVyc0FsbCA9IHtcbiAgbGVmdDogdHJ1ZSxcbiAgcmlnaHQ6IHRydWUsXG4gIHVwOiB0cnVlLFxuICBkb3duOiB0cnVlLFxuICBob3Jpem9udGFsOiB0cnVlLFxuICB2ZXJ0aWNhbDogdHJ1ZVxufVxuXG5jb25zdCBkaXJlY3Rpb25MaXN0ID0gT2JqZWN0LmtleXMobW9kaWZpZXJzQWxsKVxuXG5tb2RpZmllcnNBbGwuYWxsID0gdHJ1ZVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zIChtb2QpIHtcbiAgY29uc3QgZGlyID0ge31cblxuICBmb3IgKGNvbnN0IGRpcmVjdGlvbiBvZiBkaXJlY3Rpb25MaXN0KSB7XG4gICAgaWYgKG1vZFsgZGlyZWN0aW9uIF0gPT09IHRydWUpIHtcbiAgICAgIGRpclsgZGlyZWN0aW9uIF0gPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGRpcikubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyc0FsbFxuICB9XG5cbiAgaWYgKGRpci5ob3Jpem9udGFsID09PSB0cnVlKSB7XG4gICAgZGlyLmxlZnQgPSBkaXIucmlnaHQgPSB0cnVlXG4gIH1cbiAgZWxzZSBpZiAoZGlyLmxlZnQgPT09IHRydWUgJiYgZGlyLnJpZ2h0ID09PSB0cnVlKSB7XG4gICAgZGlyLmhvcml6b250YWwgPSB0cnVlXG4gIH1cblxuICBpZiAoZGlyLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyLnVwID0gZGlyLmRvd24gPSB0cnVlXG4gIH1cbiAgZWxzZSBpZiAoZGlyLnVwID09PSB0cnVlICYmIGRpci5kb3duID09PSB0cnVlKSB7XG4gICAgZGlyLnZlcnRpY2FsID0gdHJ1ZVxuICB9XG5cbiAgaWYgKGRpci5ob3Jpem9udGFsID09PSB0cnVlICYmIGRpci52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci5hbGwgPSB0cnVlXG4gIH1cblxuICByZXR1cm4gZGlyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGRTdGFydCAoZXZ0LCBjdHgpIHtcbiAgcmV0dXJuIGN0eC5ldmVudCA9PT0gdm9pZCAwXG4gICAgJiYgZXZ0LnRhcmdldCAhPT0gdm9pZCAwXG4gICAgJiYgZXZ0LnRhcmdldC5kcmFnZ2FibGUgIT09IHRydWVcbiAgICAmJiB0eXBlb2YgY3R4LmhhbmRsZXIgPT09ICdmdW5jdGlvbidcbiAgICAmJiBldnQudGFyZ2V0Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgIT09ICdJTlBVVCdcbiAgICAmJiAoZXZ0LnFDbG9uZWRCeSA9PT0gdm9pZCAwIHx8IGV2dC5xQ2xvbmVkQnkuaW5kZXhPZihjdHgudWlkKSA9PT0gLTEpXG59XG4iLCJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldE1vZGlmaWVyRGlyZWN0aW9ucywgc2hvdWxkU3RhcnQgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL3RvdWNoLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcG9zaXRpb24sIGxlZnRDbGljaywgcHJldmVudCwgc3RvcCwgc3RvcEFuZFByZXZlbnQsIHByZXZlbnREcmFnZ2FibGUsIG5vb3AgfSBmcm9tICcuLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5mdW5jdGlvbiBnZXRDaGFuZ2VzIChldnQsIGN0eCwgaXNGaW5hbCkge1xuICBjb25zdCBwb3MgPSBwb3NpdGlvbihldnQpXG4gIGxldFxuICAgIGRpcixcbiAgICBkaXN0WCA9IHBvcy5sZWZ0IC0gY3R4LmV2ZW50LngsXG4gICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnksXG4gICAgYWJzWCA9IE1hdGguYWJzKGRpc3RYKSxcbiAgICBhYnNZID0gTWF0aC5hYnMoZGlzdFkpXG5cbiAgY29uc3QgZGlyZWN0aW9uID0gY3R4LmRpcmVjdGlvblxuXG4gIGlmIChkaXJlY3Rpb24uaG9yaXpvbnRhbCA9PT0gdHJ1ZSAmJiBkaXJlY3Rpb24udmVydGljYWwgIT09IHRydWUpIHtcbiAgICBkaXIgPSBkaXN0WCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnXG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLmhvcml6b250YWwgIT09IHRydWUgJiYgZGlyZWN0aW9uLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyID0gZGlzdFkgPCAwID8gJ3VwJyA6ICdkb3duJ1xuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBkaXN0WSA8IDApIHtcbiAgICBkaXIgPSAndXAnXG4gICAgaWYgKGFic1ggPiBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgZGlzdFggPCAwKSB7XG4gICAgICAgIGRpciA9ICdsZWZ0J1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGRpc3RYID4gMCkge1xuICAgICAgICBkaXIgPSAncmlnaHQnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGRpc3RZID4gMCkge1xuICAgIGRpciA9ICdkb3duJ1xuICAgIGlmIChhYnNYID4gYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGRpc3RYIDwgMCkge1xuICAgICAgICBkaXIgPSAnbGVmdCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBkaXN0WCA+IDApIHtcbiAgICAgICAgZGlyID0gJ3JpZ2h0J1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBkaXN0WCA8IDApIHtcbiAgICBkaXIgPSAnbGVmdCdcbiAgICBpZiAoYWJzWCA8IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24udXAgPT09IHRydWUgJiYgZGlzdFkgPCAwKSB7XG4gICAgICAgIGRpciA9ICd1cCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGRpc3RZID4gMCkge1xuICAgICAgICBkaXIgPSAnZG93bidcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGRpc3RYID4gMCkge1xuICAgIGRpciA9ICdyaWdodCdcbiAgICBpZiAoYWJzWCA8IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24udXAgPT09IHRydWUgJiYgZGlzdFkgPCAwKSB7XG4gICAgICAgIGRpciA9ICd1cCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGRpc3RZID4gMCkge1xuICAgICAgICBkaXIgPSAnZG93bidcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsZXQgc3ludGhldGljID0gZmFsc2VcblxuICBpZiAoZGlyID09PSB2b2lkIDAgJiYgaXNGaW5hbCA9PT0gZmFsc2UpIHtcbiAgICBpZiAoY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUgfHwgY3R4LmV2ZW50Lmxhc3REaXIgPT09IHZvaWQgMCkge1xuICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgZGlyID0gY3R4LmV2ZW50Lmxhc3REaXJcbiAgICBzeW50aGV0aWMgPSB0cnVlXG5cbiAgICBpZiAoZGlyID09PSAnbGVmdCcgfHwgZGlyID09PSAncmlnaHQnKSB7XG4gICAgICBwb3MubGVmdCAtPSBkaXN0WFxuICAgICAgYWJzWCA9IDBcbiAgICAgIGRpc3RYID0gMFxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHBvcy50b3AgLT0gZGlzdFlcbiAgICAgIGFic1kgPSAwXG4gICAgICBkaXN0WSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN5bnRoZXRpYyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBldnQsXG4gICAgICB0b3VjaDogY3R4LmV2ZW50Lm1vdXNlICE9PSB0cnVlLFxuICAgICAgbW91c2U6IGN0eC5ldmVudC5tb3VzZSA9PT0gdHJ1ZSxcbiAgICAgIHBvc2l0aW9uOiBwb3MsXG4gICAgICBkaXJlY3Rpb246IGRpcixcbiAgICAgIGlzRmlyc3Q6IGN0eC5ldmVudC5pc0ZpcnN0LFxuICAgICAgaXNGaW5hbDogaXNGaW5hbCA9PT0gdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBEYXRlLm5vdygpIC0gY3R4LmV2ZW50LnRpbWUsXG4gICAgICBkaXN0YW5jZToge1xuICAgICAgICB4OiBhYnNYLFxuICAgICAgICB5OiBhYnNZXG4gICAgICB9LFxuICAgICAgb2Zmc2V0OiB7XG4gICAgICAgIHg6IGRpc3RYLFxuICAgICAgICB5OiBkaXN0WVxuICAgICAgfSxcbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIHg6IHBvcy5sZWZ0IC0gY3R4LmV2ZW50Lmxhc3RYLFxuICAgICAgICB5OiBwb3MudG9wIC0gY3R4LmV2ZW50Lmxhc3RZXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmxldCB1aWQgPSAwXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICd0b3VjaC1wYW4nLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ3RvdWNoLXBhbicsXG5cbiAgICAgIGJlZm9yZU1vdW50IChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzIH0pIHtcbiAgICAgICAgLy8gZWFybHkgcmV0dXJuLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgIT09IHRydWUgJiYgY2xpZW50Lmhhcy50b3VjaCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXZlbnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUgJiYgbW91c2VFdmVudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5zdG9wID09PSB0cnVlICYmIHN0b3AoZXZ0KVxuICAgICAgICAgICAgbW9kaWZpZXJzLnByZXZlbnQgPT09IHRydWUgJiYgcHJldmVudChldnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIHVpZDogJ3F2dHBfJyArICh1aWQrKyksXG4gICAgICAgICAgaGFuZGxlcjogdmFsdWUsXG4gICAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICAgIGRpcmVjdGlvbjogZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKG1vZGlmaWVycyksXG5cbiAgICAgICAgICBub29wLFxuXG4gICAgICAgICAgbW91c2VTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpICYmIGxlZnRDbGljayhldnQpKSB7XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZW1vdmUnLCAnbW92ZScsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2V1cCcsICdlbmQnLCAncGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICB0b3VjaFN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldFxuXG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAncGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAncGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzdGFydCAoZXZ0LCBtb3VzZUV2ZW50KSB7XG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCB0cnVlKVxuICAgICAgICAgICAgY3R4Lmxhc3RFdnQgPSBldnRcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICogU3RvcCBwcm9wYWdhdGlvbiBzbyBwb3NzaWJsZSB1cHBlciB2LXRvdWNoLXBhbiBkb24ndCBjYXRjaCB0aGlzIGFzIHdlbGw7XG4gICAgICAgICAgICAqIElmIHdlJ3JlIG5vdCB0aGUgdGFyZ2V0IChiYXNlZCBvbiBtb2RpZmllcnMpLCB3ZSdsbCByZS1lbWl0IHRoZSBldmVudCBsYXRlclxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChtb3VzZUV2ZW50ID09PSB0cnVlIHx8IG1vZGlmaWVycy5zdG9wID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICogYXJlIHdlIGRpcmVjdGx5IHN3aXRjaGluZyB0byBkZXRlY3RlZCBzdGF0ZT9cbiAgICAgICAgICAgICAgKiBjbG9uZSBldmVudCBvbmx5IG90aGVyd2lzZVxuICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5hbGwgIT09IHRydWVcbiAgICAgICAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgICAgICAgICYmIChtb3VzZUV2ZW50ICE9PSB0cnVlIHx8IChjdHgubW9kaWZpZXJzLm1vdXNlQWxsRGlyICE9PSB0cnVlICYmIGN0eC5tb2RpZmllcnMubW91c2VhbGxkaXIgIT09IHRydWUpKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZSA9IGV2dC50eXBlLmluZGV4T2YoJ21vdXNlJykgPiAtMVxuICAgICAgICAgICAgICAgICAgPyBuZXcgTW91c2VFdmVudChldnQudHlwZSwgZXZ0KVxuICAgICAgICAgICAgICAgICAgOiBuZXcgVG91Y2hFdmVudChldnQudHlwZSwgZXZ0KVxuXG4gICAgICAgICAgICAgICAgZXZ0LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUgJiYgcHJldmVudChjbG9uZSlcbiAgICAgICAgICAgICAgICBldnQuY2FuY2VsQnViYmxlID09PSB0cnVlICYmIHN0b3AoY2xvbmUpXG5cbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGNsb25lLCB7XG4gICAgICAgICAgICAgICAgICBxS2V5RXZlbnQ6IGV2dC5xS2V5RXZlbnQsXG4gICAgICAgICAgICAgICAgICBxQ2xpY2tPdXRzaWRlOiBldnQucUNsaWNrT3V0c2lkZSxcbiAgICAgICAgICAgICAgICAgIHFBbmNob3JIYW5kbGVkOiBldnQucUFuY2hvckhhbmRsZWQsXG4gICAgICAgICAgICAgICAgICBxQ2xvbmVkQnk6IGV2dC5xQ2xvbmVkQnkgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgICA/IFsgY3R4LnVpZCBdXG4gICAgICAgICAgICAgICAgICAgIDogZXZ0LnFDbG9uZWRCeS5jb25jYXQoY3R4LnVpZClcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudCA9IHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldDogZXZ0LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgIGV2ZW50OiBjbG9uZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN0b3AoZXZ0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB7IGxlZnQsIHRvcCB9ID0gcG9zaXRpb24oZXZ0KVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB7XG4gICAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICAgIHk6IHRvcCxcbiAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgbW91c2U6IG1vdXNlRXZlbnQgPT09IHRydWUsXG4gICAgICAgICAgICAgIGRldGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgaXNGaXJzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgaXNGaW5hbDogZmFsc2UsXG4gICAgICAgICAgICAgIGxhc3RYOiBsZWZ0LFxuICAgICAgICAgICAgICBsYXN0WTogdG9wXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIG1vdmUgKGV2dCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgICAgICAgICBkaXN0WCA9IHBvcy5sZWZ0IC0gY3R4LmV2ZW50LngsXG4gICAgICAgICAgICAgIGRpc3RZID0gcG9zLnRvcCAtIGN0eC5ldmVudC55XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgYnVnZ3kgYnJvd3NlciBiZWhhdmlvciAobGlrZSBCbGluay1iYXNlZCBlbmdpbmUgb25lcyBvbiBXaW5kb3dzKVxuICAgICAgICAgICAgLy8gd2hlcmUgdGhlIG1vdXNlbW92ZSBldmVudCBvY2N1cnMgZXZlbiBpZiB0aGVyZSdzIG5vIG1vdmVtZW50IGFmdGVyIG1vdXNlZG93blxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTYxNDY0XG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD03MjEzNDFcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9xdWFzYXJmcmFtZXdvcmsvcXVhc2FyL2lzc3Vlcy8xMDcyMVxuICAgICAgICAgICAgaWYgKGRpc3RYID09PSAwICYmIGRpc3RZID09PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHgubGFzdEV2dCA9IGV2dFxuXG4gICAgICAgICAgICBjb25zdCBpc01vdXNlRXZ0ID0gY3R4LmV2ZW50Lm1vdXNlID09PSB0cnVlXG4gICAgICAgICAgICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgaGFuZGxlRXZlbnQoZXZ0LCBpc01vdXNlRXZ0KVxuXG4gICAgICAgICAgICAgIGxldCBjdXJzb3JcbiAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcmVzZXJ2ZUN1cnNvciAhPT0gdHJ1ZSAmJiBtb2RpZmllcnMucHJlc2VydmVjdXJzb3IgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjdXJzb3IgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3Vyc29yIHx8ICcnXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdncmFiYmluZydcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlzTW91c2VFdnQgPT09IHRydWUgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB3aXRoRGVsYXllZEZuID0+IHtcbiAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gdm9pZCAwXG5cbiAgICAgICAgICAgICAgICBpZiAoY3Vyc29yICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgPSBjdXJzb3JcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1zZWxlY3RhYmxlJylcblxuICAgICAgICAgICAgICAgIGlmIChpc01vdXNlRXZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHdpdGhEZWxheWVkRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmUoKVxuICAgICAgICAgICAgICAgICAgICAgIHdpdGhEZWxheWVkRm4oKVxuICAgICAgICAgICAgICAgICAgICB9LCA1MClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgeyByZW1vdmUoKSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdpdGhEZWxheWVkRm4gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgd2l0aERlbGF5ZWRGbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgIT09IHRydWUgJiYgaGFuZGxlRXZlbnQoZXZ0LCBjdHguZXZlbnQubW91c2UpXG5cbiAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkLCBzeW50aGV0aWMgfSA9IGdldENoYW5nZXMoZXZ0LCBjdHgsIGZhbHNlKVxuXG4gICAgICAgICAgICAgIGlmIChwYXlsb2FkICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY3R4LmhhbmRsZXIocGF5bG9hZCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICBjdHguZW5kKGV2dClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY3R4LnN0eWxlQ2xlYW51cCA9PT0gdm9pZCAwICYmIGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0KClcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50Lmxhc3RYID0gcGF5bG9hZC5wb3NpdGlvbi5sZWZ0XG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdFkgPSBwYXlsb2FkLnBvc2l0aW9uLnRvcFxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50Lmxhc3REaXIgPSBzeW50aGV0aWMgPT09IHRydWUgPyB2b2lkIDAgOiBwYXlsb2FkLmRpcmVjdGlvblxuICAgICAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uYWxsID09PSB0cnVlXG4gICAgICAgICAgICAgIC8vIGFjY291bnQgZm9yIFVNRCB0b28gd2hlcmUgbW9kaWZpZXJzIHdpbGwgYmUgbG93ZXJjYXNlZCB0byB3b3JrXG4gICAgICAgICAgICAgIHx8IChpc01vdXNlRXZ0ID09PSB0cnVlICYmIChjdHgubW9kaWZpZXJzLm1vdXNlQWxsRGlyID09PSB0cnVlIHx8IGN0eC5tb2RpZmllcnMubW91c2VhbGxkaXIgPT09IHRydWUpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHN0YXJ0KClcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRldGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICBjdHgubW92ZShldnQpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICBhYnNYID0gTWF0aC5hYnMoZGlzdFgpLFxuICAgICAgICAgICAgICBhYnNZID0gTWF0aC5hYnMoZGlzdFkpXG5cbiAgICAgICAgICAgIGlmIChhYnNYICE9PSBhYnNZKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAoY3R4LmRpcmVjdGlvbi5ob3Jpem9udGFsID09PSB0cnVlICYmIGFic1ggPiBhYnNZKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnZlcnRpY2FsID09PSB0cnVlICYmIGFic1ggPCBhYnNZKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGFic1ggPCBhYnNZICYmIGRpc3RZIDwgMClcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi5kb3duID09PSB0cnVlICYmIGFic1ggPCBhYnNZICYmIGRpc3RZID4gMClcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGFic1ggPiBhYnNZICYmIGRpc3RYIDwgMClcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBhYnNYID4gYWJzWSAmJiBkaXN0WCA+IDApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGN0eC5ldmVudC5kZXRlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBjdHgubW92ZShldnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LmVuZChldnQsIHRydWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZW5kIChldnQsIGFib3J0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChhYm9ydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwICE9PSB2b2lkIDAgJiYgY3R4LnN0eWxlQ2xlYW51cCgpXG5cbiAgICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kZXRlY3RlZCAhPT0gdHJ1ZSAmJiBjdHguaW5pdGlhbEV2ZW50ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBjdHguaW5pdGlhbEV2ZW50LnRhcmdldC5kaXNwYXRjaEV2ZW50KGN0eC5pbml0aWFsRXZlbnQuZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGN0eC5ldmVudC5kZXRlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCA9PT0gdHJ1ZSAmJiBjdHguaGFuZGxlcihnZXRDaGFuZ2VzKGV2dCA9PT0gdm9pZCAwID8gY3R4Lmxhc3RFdnQgOiBldnQsIGN0eCkucGF5bG9hZClcblxuICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGdldENoYW5nZXMoZXZ0ID09PSB2b2lkIDAgPyBjdHgubGFzdEV2dCA6IGV2dCwgY3R4LCB0cnVlKVxuICAgICAgICAgICAgICBjb25zdCBmbiA9ICgpID0+IHsgY3R4LmhhbmRsZXIocGF5bG9hZCkgfVxuXG4gICAgICAgICAgICAgIGlmIChjdHguc3R5bGVDbGVhbnVwICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwKGZuKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZuKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB2b2lkIDBcbiAgICAgICAgICAgIGN0eC5pbml0aWFsRXZlbnQgPSB2b2lkIDBcbiAgICAgICAgICAgIGN0eC5sYXN0RXZ0ID0gdm9pZCAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWwuX19xdG91Y2hwYW4gPSBjdHhcblxuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICBjb25zdCBjYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMubW91c2VjYXB0dXJlID09PSB0cnVlXG4gICAgICAgICAgICA/ICdDYXB0dXJlJ1xuICAgICAgICAgICAgOiAnJ1xuXG4gICAgICAgICAgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgICBbIGVsLCAnbW91c2Vkb3duJywgJ21vdXNlU3RhcnQnLCBgcGFzc2l2ZSR7IGNhcHR1cmUgfWAgXVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2htb3ZlJywgJ25vb3AnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0gLy8gY2Fubm90IGJlIHBhc3NpdmUgKGV4OiBpT1Mgc2Nyb2xsKVxuICAgICAgICBdKVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIGJpbmRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNocGFuXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgaWYgKGJpbmRpbmdzLm9sZFZhbHVlICE9PSBiaW5kaW5ncy52YWx1ZSkge1xuICAgICAgICAgICAgdHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nICYmIGN0eC5lbmQoKVxuICAgICAgICAgICAgY3R4LmhhbmRsZXIgPSBiaW5kaW5ncy52YWx1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGN0eC5kaXJlY3Rpb24gPSBnZXRNb2RpZmllckRpcmVjdGlvbnMoYmluZGluZ3MubW9kaWZpZXJzKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBiZWZvcmVVbm1vdW50IChlbCkge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaHBhblxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIC8vIGVtaXQgdGhlIGVuZCBldmVudCB3aGVuIHRoZSBkaXJlY3RpdmUgaXMgZGVzdHJveWVkIHdoaWxlIGFjdGl2ZVxuICAgICAgICAgIC8vIHRoaXMgaXMgb25seSBuZWVkZWQgaW4gVG91Y2hQYW4gYmVjYXVzZSB0aGUgcmVzdCBvZiB0aGUgdG91Y2ggZGlyZWN0aXZlcyBkbyBub3QgZW1pdCBhbiBlbmQgZXZlbnRcbiAgICAgICAgICAvLyB0aGUgY29uZGl0aW9uIGlzIGFsc28gY2hlY2tlZCBpbiB0aGUgc3RhcnQgb2YgZnVuY3Rpb24gYnV0IHdlIGF2b2lkIHRoZSBjYWxsXG4gICAgICAgICAgY3R4LmV2ZW50ICE9PSB2b2lkIDAgJiYgY3R4LmVuZCgpXG5cbiAgICAgICAgICBjbGVhbkV2dChjdHgsICdtYWluJylcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcblxuICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgIGRlbGV0ZSBlbC5fX3F0b3VjaHBhblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuKVxuIiwiaW1wb3J0IHsgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0LCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBnZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzLCBub29wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5cbmNvbnN0IHsgcGFzc2l2ZSB9ID0gbGlzdGVuT3B0c1xuY29uc3QgYXhpc1ZhbHVlcyA9IFsgJ2JvdGgnLCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNjcm9sbE9ic2VydmVyJyxcblxuICBwcm9wczoge1xuICAgIGF4aXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBheGlzVmFsdWVzLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ3ZlcnRpY2FsJ1xuICAgIH0sXG5cbiAgICBkZWJvdW5jZTogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Njcm9sbCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3Qgc2Nyb2xsID0ge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LFxuXG4gICAgICBkaXJlY3Rpb246ICdkb3duJyxcbiAgICAgIGRpcmVjdGlvbkNoYW5nZWQ6IGZhbHNlLFxuXG4gICAgICBkZWx0YToge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGluZmxlY3Rpb25Qb2ludDoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2xlYXJUaW1lciA9IG51bGwsIGxvY2FsU2Nyb2xsVGFyZ2V0LCBwYXJlbnRFbFxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCAoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBlbWl0RXZlbnQgKCkge1xuICAgICAgY2xlYXJUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVyKClcblxuICAgICAgY29uc3QgdG9wID0gTWF0aC5tYXgoMCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCkpXG4gICAgICBjb25zdCBsZWZ0ID0gZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgICAgdG9wOiB0b3AgLSBzY3JvbGwucG9zaXRpb24udG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0IC0gc2Nyb2xsLnBvc2l0aW9uLmxlZnRcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAocHJvcHMuYXhpcyA9PT0gJ3ZlcnRpY2FsJyAmJiBkZWx0YS50b3AgPT09IDApXG4gICAgICAgIHx8IChwcm9wcy5heGlzID09PSAnaG9yaXpvbnRhbCcgJiYgZGVsdGEubGVmdCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VyRGlyID0gTWF0aC5hYnMoZGVsdGEudG9wKSA+PSBNYXRoLmFicyhkZWx0YS5sZWZ0KVxuICAgICAgICA/IChkZWx0YS50b3AgPCAwID8gJ3VwJyA6ICdkb3duJylcbiAgICAgICAgOiAoZGVsdGEubGVmdCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnKVxuXG4gICAgICBzY3JvbGwucG9zaXRpb24gPSB7IHRvcCwgbGVmdCB9XG4gICAgICBzY3JvbGwuZGlyZWN0aW9uQ2hhbmdlZCA9IHNjcm9sbC5kaXJlY3Rpb24gIT09IGN1ckRpclxuICAgICAgc2Nyb2xsLmRlbHRhID0gZGVsdGFcblxuICAgICAgaWYgKHNjcm9sbC5kaXJlY3Rpb25DaGFuZ2VkID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPSBjdXJEaXJcbiAgICAgICAgc2Nyb2xsLmluZmxlY3Rpb25Qb2ludCA9IHNjcm9sbC5wb3NpdGlvblxuICAgICAgfVxuXG4gICAgICBlbWl0KCdzY3JvbGwnLCB7IC4uLnNjcm9sbCB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChwYXJlbnRFbCwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJpZ2dlciwgcGFzc2l2ZSlcbiAgICAgIHRyaWdnZXIodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmlnZ2VyLCBwYXNzaXZlKVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIgKGltbWVkaWF0ZWx5KSB7XG4gICAgICBpZiAoaW1tZWRpYXRlbHkgPT09IHRydWUgfHwgcHJvcHMuZGVib3VuY2UgPT09IDAgfHwgcHJvcHMuZGVib3VuY2UgPT09ICcwJykge1xuICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2xlYXJUaW1lciA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBbIHRpbWVyLCBmbiBdID0gcHJvcHMuZGVib3VuY2VcbiAgICAgICAgICA/IFsgc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKSwgY2xlYXJUaW1lb3V0IF1cbiAgICAgICAgICA6IFsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGVtaXRFdmVudCksIGNhbmNlbEFuaW1hdGlvbkZyYW1lIF1cblxuICAgICAgICBjbGVhclRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgIGZuKHRpbWVyKVxuICAgICAgICAgIGNsZWFyVGltZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgd2F0Y2goKCkgPT4gcHJveHkuJHEubGFuZy5ydGwsIGVtaXRFdmVudClcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBwYXJlbnRFbCA9IHByb3h5LiRlbC5wYXJlbnROb2RlXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVyKClcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgdHJpZ2dlcixcbiAgICAgIGdldFBvc2l0aW9uOiAoKSA9PiBzY3JvbGxcbiAgICB9KVxuXG4gICAgcmV0dXJuIG5vb3BcbiAgfVxufSlcbiJdLCJuYW1lcyI6WyJzdG9wIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O0FBS2UsU0FBQSxlQUFZO0FBQ3pCLFFBQU0sWUFBWSxJQUFJLENBQUMseUJBQXlCLEtB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

import { r as ref, H as isRuntimeSsrPreHydration, o as onMounted, j as createComponent, m as onBeforeUnmount, aE as noop, A as nextTick, h, g as getCurrentInstance, aZ as listenOpts, aC as createDirective, aD as client, aF as leftClick, aG as addEvt, aH as preventDraggable, aY as prevent, as as stop, a4 as position, aI as cleanEvt, a7 as stopAndPrevent, w as watch, aU as getScrollTarget, a$ as getVerticalScrollPosition, b0 as getHorizontalScrollPosition } from "./index.cfb3cfd5.js";
import { c as clearSelection } from "./position-engine.20287f8e.js";
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
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
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
        timer !== null && clearTimeout(timer);
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
        if (timer !== null) {
          clearTimeout(timer);
          timer = null;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVNjcm9sbE9ic2VydmVyLmJhM2JiNDY1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYW4tcmVuZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS90b3VjaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnXG5cbi8vIHVzaW5nIGl0IHRvIG1hbmFnZSBTU1IgcmVuZGVyaW5nIHdpdGggYmVzdCBwZXJmb3JtYW5jZVxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW5SZW5kZXIgPSByZWYoIWlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSlcblxuICBpZiAoY2FuUmVuZGVyLnZhbHVlID09PSBmYWxzZSkge1xuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjYW5SZW5kZXIudmFsdWUgPSB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjYW5SZW5kZXJcbn1cbiIsImltcG9ydCB7IGgsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQ2FuUmVuZGVyIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhbi1yZW5kZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cywgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCBoYXNPYnNlcnZlciA9IHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcbmNvbnN0IHJlc2l6ZVByb3BzID0gaGFzT2JzZXJ2ZXIgPT09IHRydWVcbiAgPyB7fVxuICA6IHtcbiAgICAgIHN0eWxlOiAnZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTE7JyxcbiAgICAgIHVybDogJ2Fib3V0OmJsYW5rJ1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSZXNpemVPYnNlcnZlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXNpemUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18pIHsgcmV0dXJuIG5vb3AgfVxuXG4gICAgbGV0IHRpbWVyID0gbnVsbCwgdGFyZ2V0RWwsIHNpemUgPSB7IHdpZHRoOiAtMSwgaGVpZ2h0OiAtMSB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyIChpbW1lZGlhdGVseSkge1xuICAgICAgaWYgKGltbWVkaWF0ZWx5ID09PSB0cnVlIHx8IHByb3BzLmRlYm91bmNlID09PSAwIHx8IHByb3BzLmRlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRFdmVudCAoKSB7XG4gICAgICBpZiAodGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldEVsKSB7XG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHdpZHRoLCBvZmZzZXRIZWlnaHQ6IGhlaWdodCB9ID0gdGFyZ2V0RWxcblxuICAgICAgICBpZiAod2lkdGggIT09IHNpemUud2lkdGggfHwgaGVpZ2h0ICE9PSBzaXplLmhlaWdodCkge1xuICAgICAgICAgIHNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfVxuICAgICAgICAgIGVtaXQoJ3Jlc2l6ZScsIHNpemUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgaWYgKGhhc09ic2VydmVyID09PSB0cnVlKSB7XG4gICAgICBsZXQgb2JzZXJ2ZXJcblxuICAgICAgLy8gaW5pdGlhbGl6ZSBhcyBzb29uIGFzIHBvc3NpYmxlXG4gICAgICBjb25zdCBpbml0ID0gc3RvcCA9PiB7XG4gICAgICAgIHRhcmdldEVsID0gcHJveHkuJGVsLnBhcmVudE5vZGVcblxuICAgICAgICBpZiAodGFyZ2V0RWwpIHtcbiAgICAgICAgICBvYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcih0cmlnZ2VyKVxuICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0RWwpXG4gICAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzdG9wICE9PSB0cnVlKSB7XG4gICAgICAgICAgbmV4dFRpY2soKCkgPT4geyBpbml0KHRydWUpIH0pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgb25Nb3VudGVkKCgpID0+IHsgaW5pdCgpIH0pXG5cbiAgICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICAgIHRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZW91dCh0aW1lcilcblxuICAgICAgICBpZiAob2JzZXJ2ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5kaXNjb25uZWN0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0YXJnZXRFbCkgeyAvLyBGRiBmb3IgQW5kcm9pZFxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldEVsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9XG4gICAgZWxzZSB7IC8vIG5vIG9ic2VydmVyLCBzbyBmYWxsYmFjayB0byBvbGQgaWZyYW1lIG1ldGhvZFxuICAgICAgY29uc3QgY2FuUmVuZGVyID0gdXNlQ2FuUmVuZGVyKClcblxuICAgICAgbGV0IGN1ckRvY1ZpZXdcblxuICAgICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJEb2NWaWV3ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAvLyBpT1MgaXMgZnV6enksIG5lZWQgdG8gY2hlY2sgaXQgZmlyc3RcbiAgICAgICAgICBpZiAoY3VyRG9jVmlldy5yZW1vdmVFdmVudExpc3RlbmVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGN1ckRvY1ZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdHJpZ2dlciwgbGlzdGVuT3B0cy5wYXNzaXZlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJEb2NWaWV3ID0gdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25PYmpMb2FkICgpIHtcbiAgICAgICAgY2xlYW51cCgpXG5cbiAgICAgICAgaWYgKHRhcmdldEVsICYmIHRhcmdldEVsLmNvbnRlbnREb2N1bWVudCkge1xuICAgICAgICAgIGN1ckRvY1ZpZXcgPSB0YXJnZXRFbC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXdcbiAgICAgICAgICBjdXJEb2NWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRyaWdnZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICB0YXJnZXRFbCA9IHByb3h5LiRlbFxuICAgICAgICAgIHRhcmdldEVsICYmIG9uT2JqTG9hZCgpXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBvbkJlZm9yZVVubW91bnQoY2xlYW51cClcblxuICAgICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RcbiAgICAgIHByb3h5LnRyaWdnZXIgPSB0cmlnZ2VyXG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlmIChjYW5SZW5kZXIudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gaCgnb2JqZWN0Jywge1xuICAgICAgICAgICAgc3R5bGU6IHJlc2l6ZVByb3BzLnN0eWxlLFxuICAgICAgICAgICAgdGFiaW5kZXg6IC0xLCAvLyBmaXggZm9yIEZpcmVmb3hcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0L2h0bWwnLFxuICAgICAgICAgICAgZGF0YTogcmVzaXplUHJvcHMudXJsLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgb25Mb2FkOiBvbk9iakxvYWRcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIiwiY29uc3QgbW9kaWZpZXJzQWxsID0ge1xuICBsZWZ0OiB0cnVlLFxuICByaWdodDogdHJ1ZSxcbiAgdXA6IHRydWUsXG4gIGRvd246IHRydWUsXG4gIGhvcml6b250YWw6IHRydWUsXG4gIHZlcnRpY2FsOiB0cnVlXG59XG5cbmNvbnN0IGRpcmVjdGlvbkxpc3QgPSBPYmplY3Qua2V5cyhtb2RpZmllcnNBbGwpXG5cbm1vZGlmaWVyc0FsbC5hbGwgPSB0cnVlXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb2RpZmllckRpcmVjdGlvbnMgKG1vZCkge1xuICBjb25zdCBkaXIgPSB7fVxuXG4gIGZvciAoY29uc3QgZGlyZWN0aW9uIG9mIGRpcmVjdGlvbkxpc3QpIHtcbiAgICBpZiAobW9kWyBkaXJlY3Rpb24gXSA9PT0gdHJ1ZSkge1xuICAgICAgZGlyWyBkaXJlY3Rpb24gXSA9IHRydWVcbiAgICB9XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZGlyKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbW9kaWZpZXJzQWxsXG4gIH1cblxuICBpZiAoZGlyLmhvcml6b250YWwgPT09IHRydWUpIHtcbiAgICBkaXIubGVmdCA9IGRpci5yaWdodCA9IHRydWVcbiAgfVxuICBlbHNlIGlmIChkaXIubGVmdCA9PT0gdHJ1ZSAmJiBkaXIucmlnaHQgPT09IHRydWUpIHtcbiAgICBkaXIuaG9yaXpvbnRhbCA9IHRydWVcbiAgfVxuXG4gIGlmIChkaXIudmVydGljYWwgPT09IHRydWUpIHtcbiAgICBkaXIudXAgPSBkaXIuZG93biA9IHRydWVcbiAgfVxuICBlbHNlIGlmIChkaXIudXAgPT09IHRydWUgJiYgZGlyLmRvd24gPT09IHRydWUpIHtcbiAgICBkaXIudmVydGljYWwgPSB0cnVlXG4gIH1cblxuICBpZiAoZGlyLmhvcml6b250YWwgPT09IHRydWUgJiYgZGlyLnZlcnRpY2FsID09PSB0cnVlKSB7XG4gICAgZGlyLmFsbCA9IHRydWVcbiAgfVxuXG4gIHJldHVybiBkaXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZFN0YXJ0IChldnQsIGN0eCkge1xuICByZXR1cm4gY3R4LmV2ZW50ID09PSB2b2lkIDBcbiAgICAmJiBldnQudGFyZ2V0ICE9PSB2b2lkIDBcbiAgICAmJiBldnQudGFyZ2V0LmRyYWdnYWJsZSAhPT0gdHJ1ZVxuICAgICYmIHR5cGVvZiBjdHguaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJ1xuICAgICYmIGV2dC50YXJnZXQubm9kZU5hbWUudG9VcHBlckNhc2UoKSAhPT0gJ0lOUFVUJ1xuICAgICYmIChldnQucUNsb25lZEJ5ID09PSB2b2lkIDAgfHwgZXZ0LnFDbG9uZWRCeS5pbmRleE9mKGN0eC51aWQpID09PSAtMSlcbn1cbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kaWZpZXJEaXJlY3Rpb25zLCBzaG91bGRTdGFydCB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvdG91Y2guanMnXG5pbXBvcnQgeyBhZGRFdnQsIGNsZWFuRXZ0LCBwb3NpdGlvbiwgbGVmdENsaWNrLCBwcmV2ZW50LCBzdG9wLCBzdG9wQW5kUHJldmVudCwgcHJldmVudERyYWdnYWJsZSwgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi91dGlscy9wcml2YXRlL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbmZ1bmN0aW9uIGdldENoYW5nZXMgKGV2dCwgY3R4LCBpc0ZpbmFsKSB7XG4gIGNvbnN0IHBvcyA9IHBvc2l0aW9uKGV2dClcbiAgbGV0XG4gICAgZGlyLFxuICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICBkaXN0WSA9IHBvcy50b3AgLSBjdHguZXZlbnQueSxcbiAgICBhYnNYID0gTWF0aC5hYnMoZGlzdFgpLFxuICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICBjb25zdCBkaXJlY3Rpb24gPSBjdHguZGlyZWN0aW9uXG5cbiAgaWYgKGRpcmVjdGlvbi5ob3Jpem9udGFsID09PSB0cnVlICYmIGRpcmVjdGlvbi52ZXJ0aWNhbCAhPT0gdHJ1ZSkge1xuICAgIGRpciA9IGRpc3RYIDwgMCA/ICdsZWZ0JyA6ICdyaWdodCdcbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24uaG9yaXpvbnRhbCAhPT0gdHJ1ZSAmJiBkaXJlY3Rpb24udmVydGljYWwgPT09IHRydWUpIHtcbiAgICBkaXIgPSBkaXN0WSA8IDAgPyAndXAnIDogJ2Rvd24nXG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGRpc3RZIDwgMCkge1xuICAgIGRpciA9ICd1cCdcbiAgICBpZiAoYWJzWCA+IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBkaXN0WCA8IDApIHtcbiAgICAgICAgZGlyID0gJ2xlZnQnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgZGlzdFggPiAwKSB7XG4gICAgICAgIGRpciA9ICdyaWdodCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgZGlzdFkgPiAwKSB7XG4gICAgZGlyID0gJ2Rvd24nXG4gICAgaWYgKGFic1ggPiBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgZGlzdFggPCAwKSB7XG4gICAgICAgIGRpciA9ICdsZWZ0J1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGRpc3RYID4gMCkge1xuICAgICAgICBkaXIgPSAncmlnaHQnXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGRpc3RYIDwgMCkge1xuICAgIGRpciA9ICdsZWZ0J1xuICAgIGlmIChhYnNYIDwgYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBkaXN0WSA8IDApIHtcbiAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgZGlzdFkgPiAwKSB7XG4gICAgICAgIGRpciA9ICdkb3duJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgZGlzdFggPiAwKSB7XG4gICAgZGlyID0gJ3JpZ2h0J1xuICAgIGlmIChhYnNYIDwgYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBkaXN0WSA8IDApIHtcbiAgICAgICAgZGlyID0gJ3VwJ1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgZGlzdFkgPiAwKSB7XG4gICAgICAgIGRpciA9ICdkb3duJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxldCBzeW50aGV0aWMgPSBmYWxzZVxuXG4gIGlmIChkaXIgPT09IHZvaWQgMCAmJiBpc0ZpbmFsID09PSBmYWxzZSkge1xuICAgIGlmIChjdHguZXZlbnQuaXNGaXJzdCA9PT0gdHJ1ZSB8fCBjdHguZXZlbnQubGFzdERpciA9PT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4ge31cbiAgICB9XG5cbiAgICBkaXIgPSBjdHguZXZlbnQubGFzdERpclxuICAgIHN5bnRoZXRpYyA9IHRydWVcblxuICAgIGlmIChkaXIgPT09ICdsZWZ0JyB8fCBkaXIgPT09ICdyaWdodCcpIHtcbiAgICAgIHBvcy5sZWZ0IC09IGRpc3RYXG4gICAgICBhYnNYID0gMFxuICAgICAgZGlzdFggPSAwXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcG9zLnRvcCAtPSBkaXN0WVxuICAgICAgYWJzWSA9IDBcbiAgICAgIGRpc3RZID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3ludGhldGljLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGV2dCxcbiAgICAgIHRvdWNoOiBjdHguZXZlbnQubW91c2UgIT09IHRydWUsXG4gICAgICBtb3VzZTogY3R4LmV2ZW50Lm1vdXNlID09PSB0cnVlLFxuICAgICAgcG9zaXRpb246IHBvcyxcbiAgICAgIGRpcmVjdGlvbjogZGlyLFxuICAgICAgaXNGaXJzdDogY3R4LmV2ZW50LmlzRmlyc3QsXG4gICAgICBpc0ZpbmFsOiBpc0ZpbmFsID09PSB0cnVlLFxuICAgICAgZHVyYXRpb246IERhdGUubm93KCkgLSBjdHguZXZlbnQudGltZSxcbiAgICAgIGRpc3RhbmNlOiB7XG4gICAgICAgIHg6IGFic1gsXG4gICAgICAgIHk6IGFic1lcbiAgICAgIH0sXG4gICAgICBvZmZzZXQ6IHtcbiAgICAgICAgeDogZGlzdFgsXG4gICAgICAgIHk6IGRpc3RZXG4gICAgICB9LFxuICAgICAgZGVsdGE6IHtcbiAgICAgICAgeDogcG9zLmxlZnQgLSBjdHguZXZlbnQubGFzdFgsXG4gICAgICAgIHk6IHBvcy50b3AgLSBjdHguZXZlbnQubGFzdFlcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubGV0IHVpZCA9IDBcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGlyZWN0aXZlKF9fUVVBU0FSX1NTUl9TRVJWRVJfX1xuICA/IHsgbmFtZTogJ3RvdWNoLXBhbicsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtcGFuJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCB7IHZhbHVlLCBtb2RpZmllcnMgfSkge1xuICAgICAgICAvLyBlYXJseSByZXR1cm4sIHdlIGRvbid0IG5lZWQgdG8gZG8gYW55dGhpbmdcbiAgICAgICAgaWYgKG1vZGlmaWVycy5tb3VzZSAhPT0gdHJ1ZSAmJiBjbGllbnQuaGFzLnRvdWNoICE9PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVFdmVudCAoZXZ0LCBtb3VzZUV2ZW50KSB7XG4gICAgICAgICAgaWYgKG1vZGlmaWVycy5tb3VzZSA9PT0gdHJ1ZSAmJiBtb3VzZUV2ZW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdG9wQW5kUHJldmVudChldnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnN0b3AgPT09IHRydWUgJiYgc3RvcChldnQpXG4gICAgICAgICAgICBtb2RpZmllcnMucHJldmVudCA9PT0gdHJ1ZSAmJiBwcmV2ZW50KGV2dClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdHggPSB7XG4gICAgICAgICAgdWlkOiAncXZ0cF8nICsgKHVpZCsrKSxcbiAgICAgICAgICBoYW5kbGVyOiB2YWx1ZSxcbiAgICAgICAgICBtb2RpZmllcnMsXG4gICAgICAgICAgZGlyZWN0aW9uOiBnZXRNb2RpZmllckRpcmVjdGlvbnMobW9kaWZpZXJzKSxcblxuICAgICAgICAgIG5vb3AsXG5cbiAgICAgICAgICBtb3VzZVN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkgJiYgbGVmdENsaWNrKGV2dCkpIHtcbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNlbW92ZScsICdtb3ZlJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZXVwJywgJ2VuZCcsICdwYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHRvdWNoU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSkge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG5cbiAgICAgICAgICAgICAgYWRkRXZ0KGN0eCwgJ3RlbXAnLCBbXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaG1vdmUnLCAnbW92ZScsICdub3RQYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoY2FuY2VsJywgJ2VuZCcsICdwYXNzaXZlQ2FwdHVyZScgXSxcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNoZW5kJywgJ2VuZCcsICdwYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHN0YXJ0IChldnQsIG1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIHRydWUpXG4gICAgICAgICAgICBjdHgubGFzdEV2dCA9IGV2dFxuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIHNvIHBvc3NpYmxlIHVwcGVyIHYtdG91Y2gtcGFuIGRvbid0IGNhdGNoIHRoaXMgYXMgd2VsbDtcbiAgICAgICAgICAgICogSWYgd2UncmUgbm90IHRoZSB0YXJnZXQgKGJhc2VkIG9uIG1vZGlmaWVycyksIHdlJ2xsIHJlLWVtaXQgdGhlIGV2ZW50IGxhdGVyXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKG1vdXNlRXZlbnQgPT09IHRydWUgfHwgbW9kaWZpZXJzLnN0b3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgKiBhcmUgd2UgZGlyZWN0bHkgc3dpdGNoaW5nIHRvIGRldGVjdGVkIHN0YXRlP1xuICAgICAgICAgICAgICAqIGNsb25lIGV2ZW50IG9ubHkgb3RoZXJ3aXNlXG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLmFsbCAhPT0gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIGFjY291bnQgZm9yIFVNRCB0b28gd2hlcmUgbW9kaWZpZXJzIHdpbGwgYmUgbG93ZXJjYXNlZCB0byB3b3JrXG4gICAgICAgICAgICAgICAgJiYgKG1vdXNlRXZlbnQgIT09IHRydWUgfHwgKGN0eC5tb2RpZmllcnMubW91c2VBbGxEaXIgIT09IHRydWUgJiYgY3R4Lm1vZGlmaWVycy5tb3VzZWFsbGRpciAhPT0gdHJ1ZSkpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lID0gZXZ0LnR5cGUuaW5kZXhPZignbW91c2UnKSA+IC0xXG4gICAgICAgICAgICAgICAgICA/IG5ldyBNb3VzZUV2ZW50KGV2dC50eXBlLCBldnQpXG4gICAgICAgICAgICAgICAgICA6IG5ldyBUb3VjaEV2ZW50KGV2dC50eXBlLCBldnQpXG5cbiAgICAgICAgICAgICAgICBldnQuZGVmYXVsdFByZXZlbnRlZCA9PT0gdHJ1ZSAmJiBwcmV2ZW50KGNsb25lKVxuICAgICAgICAgICAgICAgIGV2dC5jYW5jZWxCdWJibGUgPT09IHRydWUgJiYgc3RvcChjbG9uZSlcblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY2xvbmUsIHtcbiAgICAgICAgICAgICAgICAgIHFLZXlFdmVudDogZXZ0LnFLZXlFdmVudCxcbiAgICAgICAgICAgICAgICAgIHFDbGlja091dHNpZGU6IGV2dC5xQ2xpY2tPdXRzaWRlLFxuICAgICAgICAgICAgICAgICAgcUFuY2hvckhhbmRsZWQ6IGV2dC5xQW5jaG9ySGFuZGxlZCxcbiAgICAgICAgICAgICAgICAgIHFDbG9uZWRCeTogZXZ0LnFDbG9uZWRCeSA9PT0gdm9pZCAwXG4gICAgICAgICAgICAgICAgICAgID8gWyBjdHgudWlkIF1cbiAgICAgICAgICAgICAgICAgICAgOiBldnQucUNsb25lZEJ5LmNvbmNhdChjdHgudWlkKVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBjdHguaW5pdGlhbEV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBldnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgZXZlbnQ6IGNsb25lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3RvcChldnQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHsgbGVmdCwgdG9wIH0gPSBwb3NpdGlvbihldnQpXG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHtcbiAgICAgICAgICAgICAgeDogbGVmdCxcbiAgICAgICAgICAgICAgeTogdG9wLFxuICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICBtb3VzZTogbW91c2VFdmVudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgZGV0ZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpc0ZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICBpc0ZpbmFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgbGFzdFg6IGxlZnQsXG4gICAgICAgICAgICAgIGxhc3RZOiB0b3BcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbW92ZSAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICAgICAgICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICAgICAgICAgICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnlcblxuICAgICAgICAgICAgLy8gcHJldmVudCBidWdneSBicm93c2VyIGJlaGF2aW9yIChsaWtlIEJsaW5rLWJhc2VkIGVuZ2luZSBvbmVzIG9uIFdpbmRvd3MpXG4gICAgICAgICAgICAvLyB3aGVyZSB0aGUgbW91c2Vtb3ZlIGV2ZW50IG9jY3VycyBldmVuIGlmIHRoZXJlJ3Mgbm8gbW92ZW1lbnQgYWZ0ZXIgbW91c2Vkb3duXG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNjE0NjRcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTcyMTM0MVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3F1YXNhcmZyYW1ld29yay9xdWFzYXIvaXNzdWVzLzEwNzIxXG4gICAgICAgICAgICBpZiAoZGlzdFggPT09IDAgJiYgZGlzdFkgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5sYXN0RXZ0ID0gZXZ0XG5cbiAgICAgICAgICAgIGNvbnN0IGlzTW91c2VFdnQgPSBjdHguZXZlbnQubW91c2UgPT09IHRydWVcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICAgICAgICBoYW5kbGVFdmVudChldnQsIGlzTW91c2VFdnQpXG5cbiAgICAgICAgICAgICAgbGV0IGN1cnNvclxuICAgICAgICAgICAgICBpZiAobW9kaWZpZXJzLnByZXNlcnZlQ3Vyc29yICE9PSB0cnVlICYmIG1vZGlmaWVycy5wcmVzZXJ2ZWN1cnNvciAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnNvciA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5jdXJzb3IgfHwgJydcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2dyYWJiaW5nJ1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaXNNb3VzZUV2dCA9PT0gdHJ1ZSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXBvaW50ZXItZXZlbnRzLS1jaGlsZHJlbicpXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm9uLXNlbGVjdGFibGUnKVxuICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG5cbiAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHdpdGhEZWxheWVkRm4gPT4ge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgIGlmIChjdXJzb3IgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9IGN1cnNvclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzTW91c2VFdnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aERlbGF5ZWRGbigpXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICB3aXRoRGVsYXllZEZuKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kZXRlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCAhPT0gdHJ1ZSAmJiBoYW5kbGVFdmVudChldnQsIGN0eC5ldmVudC5tb3VzZSlcblxuICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQsIHN5bnRoZXRpYyB9ID0gZ2V0Q2hhbmdlcyhldnQsIGN0eCwgZmFsc2UpXG5cbiAgICAgICAgICAgICAgaWYgKHBheWxvYWQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguaGFuZGxlcihwYXlsb2FkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdHguc3R5bGVDbGVhbnVwID09PSB2b2lkIDAgJiYgY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdFggPSBwYXlsb2FkLnBvc2l0aW9uLmxlZnRcbiAgICAgICAgICAgICAgICAgIGN0eC5ldmVudC5sYXN0WSA9IHBheWxvYWQucG9zaXRpb24udG9wXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdERpciA9IHN5bnRoZXRpYyA9PT0gdHJ1ZSA/IHZvaWQgMCA6IHBheWxvYWQuZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5hbGwgPT09IHRydWVcbiAgICAgICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICAgICAgfHwgKGlzTW91c2VFdnQgPT09IHRydWUgJiYgKGN0eC5tb2RpZmllcnMubW91c2VBbGxEaXIgPT09IHRydWUgfHwgY3R4Lm1vZGlmaWVycy5tb3VzZWFsbGRpciA9PT0gdHJ1ZSkpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgc3RhcnQoKVxuICAgICAgICAgICAgICBjdHguZXZlbnQuZGV0ZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgIGN0eC5tb3ZlKGV2dClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIGFic1ggPSBNYXRoLmFicyhkaXN0WCksXG4gICAgICAgICAgICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICAgICAgICAgICAgaWYgKGFic1ggIT09IGFic1kpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChjdHguZGlyZWN0aW9uLmhvcml6b250YWwgPT09IHRydWUgJiYgYWJzWCA+IGFic1kpXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24udmVydGljYWwgPT09IHRydWUgJiYgYWJzWCA8IGFic1kpXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24udXAgPT09IHRydWUgJiYgYWJzWCA8IGFic1kgJiYgZGlzdFkgPCAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLmRvd24gPT09IHRydWUgJiYgYWJzWCA8IGFic1kgJiYgZGlzdFkgPiAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgYWJzWCA+IGFic1kgJiYgZGlzdFggPCAwKVxuICAgICAgICAgICAgICAgIHx8IChjdHguZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlICYmIGFic1ggPiBhYnNZICYmIGRpc3RYID4gMClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY3R4LmV2ZW50LmRldGVjdGVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlKGV2dClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdHguZW5kKGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQgKGV2dCwgYWJvcnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcblxuICAgICAgICAgICAgaWYgKGFib3J0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgICAgICBpZiAoY3R4LmV2ZW50LmRldGVjdGVkICE9PSB0cnVlICYmIGN0eC5pbml0aWFsRXZlbnQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGN0eC5pbml0aWFsRXZlbnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoY3R4LmluaXRpYWxFdmVudC5ldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY3R4LmV2ZW50LmRldGVjdGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlICYmIGN0eC5oYW5kbGVyKGdldENoYW5nZXMoZXZ0ID09PSB2b2lkIDAgPyBjdHgubGFzdEV2dCA6IGV2dCwgY3R4KS5wYXlsb2FkKVxuXG4gICAgICAgICAgICAgIGNvbnN0IHsgcGF5bG9hZCB9ID0gZ2V0Q2hhbmdlcyhldnQgPT09IHZvaWQgMCA/IGN0eC5sYXN0RXZ0IDogZXZ0LCBjdHgsIHRydWUpXG4gICAgICAgICAgICAgIGNvbnN0IGZuID0gKCkgPT4geyBjdHguaGFuZGxlcihwYXlsb2FkKSB9XG5cbiAgICAgICAgICAgICAgaWYgKGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAoZm4pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm4oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHZvaWQgMFxuICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudCA9IHZvaWQgMFxuICAgICAgICAgICAgY3R4Lmxhc3RFdnQgPSB2b2lkIDBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbC5fX3F0b3VjaHBhbiA9IGN0eFxuXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgIGNvbnN0IGNhcHR1cmUgPSBtb2RpZmllcnMubW91c2VDYXB0dXJlID09PSB0cnVlIHx8IG1vZGlmaWVycy5tb3VzZWNhcHR1cmUgPT09IHRydWVcbiAgICAgICAgICAgID8gJ0NhcHR1cmUnXG4gICAgICAgICAgICA6ICcnXG5cbiAgICAgICAgICBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgY2FwdHVyZSB9YCBdXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5oYXMudG91Y2ggPT09IHRydWUgJiYgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgWyBlbCwgJ3RvdWNoc3RhcnQnLCAndG91Y2hTdGFydCcsIGBwYXNzaXZlJHsgbW9kaWZpZXJzLmNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJyB9YCBdLFxuICAgICAgICAgIFsgZWwsICd0b3VjaG1vdmUnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXSAvLyBjYW5ub3QgYmUgcGFzc2l2ZSAoZXg6IGlPUyBzY3JvbGwpXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZ3MpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hwYW5cblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoYmluZGluZ3Mub2xkVmFsdWUgIT09IGJpbmRpbmdzLnZhbHVlKSB7XG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgJiYgY3R4LmVuZCgpXG4gICAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmdzLnZhbHVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3R4LmRpcmVjdGlvbiA9IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhiaW5kaW5ncy5tb2RpZmllcnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNocGFuXG5cbiAgICAgICAgaWYgKGN0eCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLy8gZW1pdCB0aGUgZW5kIGV2ZW50IHdoZW4gdGhlIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQgd2hpbGUgYWN0aXZlXG4gICAgICAgICAgLy8gdGhpcyBpcyBvbmx5IG5lZWRlZCBpbiBUb3VjaFBhbiBiZWNhdXNlIHRoZSByZXN0IG9mIHRoZSB0b3VjaCBkaXJlY3RpdmVzIGRvIG5vdCBlbWl0IGFuIGVuZCBldmVudFxuICAgICAgICAgIC8vIHRoZSBjb25kaXRpb24gaXMgYWxzbyBjaGVja2VkIGluIHRoZSBzdGFydCBvZiBmdW5jdGlvbiBidXQgd2UgYXZvaWQgdGhlIGNhbGxcbiAgICAgICAgICBjdHguZXZlbnQgIT09IHZvaWQgMCAmJiBjdHguZW5kKClcblxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ21haW4nKVxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG4gICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAoKVxuXG4gICAgICAgICAgZGVsZXRlIGVsLl9fcXRvdWNocGFuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4pXG4iLCJpbXBvcnQgeyB3YXRjaCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQsIGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24sIGdldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMsIG5vb3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuY29uc3QgeyBwYXNzaXZlIH0gPSBsaXN0ZW5PcHRzXG5jb25zdCBheGlzVmFsdWVzID0gWyAnYm90aCcsICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2Nyb2xsT2JzZXJ2ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgYXhpczoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IGF4aXNWYWx1ZXMuaW5jbHVkZXModiksXG4gICAgICBkZWZhdWx0OiAndmVydGljYWwnXG4gICAgfSxcblxuICAgIGRlYm91bmNlOiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHtcbiAgICAgIGRlZmF1bHQ6IHZvaWQgMFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAnc2Nyb2xsJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCBzY3JvbGwgPSB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGRpcmVjdGlvbjogJ2Rvd24nLFxuICAgICAgZGlyZWN0aW9uQ2hhbmdlZDogZmFsc2UsXG5cbiAgICAgIGRlbHRhOiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfSxcblxuICAgICAgaW5mbGVjdGlvblBvaW50OiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMFxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjbGVhclRpbWVyID0gbnVsbCwgbG9jYWxTY3JvbGxUYXJnZXQsIHBhcmVudEVsXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsICgpID0+IHtcbiAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGVtaXRFdmVudCAoKSB7XG4gICAgICBjbGVhclRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZXIoKVxuXG4gICAgICBjb25zdCB0b3AgPSBNYXRoLm1heCgwLCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSlcbiAgICAgIGNvbnN0IGxlZnQgPSBnZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgIGNvbnN0IGRlbHRhID0ge1xuICAgICAgICB0b3A6IHRvcCAtIHNjcm9sbC5wb3NpdGlvbi50b3AsXG4gICAgICAgIGxlZnQ6IGxlZnQgLSBzY3JvbGwucG9zaXRpb24ubGVmdFxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIChwcm9wcy5heGlzID09PSAndmVydGljYWwnICYmIGRlbHRhLnRvcCA9PT0gMClcbiAgICAgICAgfHwgKHByb3BzLmF4aXMgPT09ICdob3Jpem9udGFsJyAmJiBkZWx0YS5sZWZ0ID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJEaXIgPSBNYXRoLmFicyhkZWx0YS50b3ApID49IE1hdGguYWJzKGRlbHRhLmxlZnQpXG4gICAgICAgID8gKGRlbHRhLnRvcCA8IDAgPyAndXAnIDogJ2Rvd24nKVxuICAgICAgICA6IChkZWx0YS5sZWZ0IDwgMCA/ICdsZWZ0JyA6ICdyaWdodCcpXG5cbiAgICAgIHNjcm9sbC5wb3NpdGlvbiA9IHsgdG9wLCBsZWZ0IH1cbiAgICAgIHNjcm9sbC5kaXJlY3Rpb25DaGFuZ2VkID0gc2Nyb2xsLmRpcmVjdGlvbiAhPT0gY3VyRGlyXG4gICAgICBzY3JvbGwuZGVsdGEgPSBkZWx0YVxuXG4gICAgICBpZiAoc2Nyb2xsLmRpcmVjdGlvbkNoYW5nZWQgPT09IHRydWUpIHtcbiAgICAgICAgc2Nyb2xsLmRpcmVjdGlvbiA9IGN1ckRpclxuICAgICAgICBzY3JvbGwuaW5mbGVjdGlvblBvaW50ID0gc2Nyb2xsLnBvc2l0aW9uXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ3Njcm9sbCcsIHsgLi4uc2Nyb2xsIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KHBhcmVudEVsLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmlnZ2VyLCBwYXNzaXZlKVxuICAgICAgdHJpZ2dlcih0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRyaWdnZXIsIHBhc3NpdmUpXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gdm9pZCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciAoaW1tZWRpYXRlbHkpIHtcbiAgICAgIGlmIChpbW1lZGlhdGVseSA9PT0gdHJ1ZSB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gMCB8fCBwcm9wcy5kZWJvdW5jZSA9PT0gJzAnKSB7XG4gICAgICAgIGVtaXRFdmVudCgpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjbGVhclRpbWVyID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IFsgdGltZXIsIGZuIF0gPSBwcm9wcy5kZWJvdW5jZVxuICAgICAgICAgID8gWyBzZXRUaW1lb3V0KGVtaXRFdmVudCwgcHJvcHMuZGVib3VuY2UpLCBjbGVhclRpbWVvdXQgXVxuICAgICAgICAgIDogWyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZW1pdEV2ZW50KSwgY2FuY2VsQW5pbWF0aW9uRnJhbWUgXVxuXG4gICAgICAgIGNsZWFyVGltZXIgPSAoKSA9PiB7XG4gICAgICAgICAgZm4odGltZXIpXG4gICAgICAgICAgY2xlYXJUaW1lciA9IG51bGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICB3YXRjaCgoKSA9PiBwcm94eS4kcS5sYW5nLnJ0bCwgZW1pdEV2ZW50KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHBhcmVudEVsID0gcHJveHkuJGVsLnBhcmVudE5vZGVcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZXIoKVxuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICB0cmlnZ2VyLFxuICAgICAgZ2V0UG9zaXRpb246ICgpID0+IHNjcm9sbFxuICAgIH0pXG5cbiAgICByZXR1cm4gbm9vcFxuICB9XG59KVxuIl0sIm5hbWVzIjpbInN0b3AiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7QUFLZSxTQUFBLGVBQVk7QUFDekIsUUFBTSxZQUFZLElBQUksQ0FBQyx5QkFBeUIsS0FBSztBQUVyRCxNQUFJLFVBQVUsVUFBVSxPQUFPO0FBQzdCLGNBQVUsTUFBTTtBQUNkLGdCQUFVLFFBQVE7QUFBQSxJQUN4QixDQUFLO0FBQUEsRUFDRjtBQUVELFNBQU87QUFDVDtBQ1JBLE1BQU0sY0FBYyxPQUFPLG1CQUFtQjtBQUM5QyxNQUFNLGNBQWMsZ0JBQWdCLE9BQ2hDLENBQUUsSUFDRjtBQUFBLEVBQ0UsT0FBTztBQUFBLEVBQ1AsS0FBSztBQUNOO0FBRUwsSUFBQSxrQkFBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxVQUFVO0FBQUEsTUFDUixNQUFNLENBQUUsUUFBUSxNQUFRO0FBQUEsTUFDeEIsU0FBUztBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFFRCxPQUFPLENBQUUsUUFBVTtBQUFBLEVBRW5CLE1BQU8sT0FBTyxFQUFFLFFBQVE7QUFHdEIsUUFBSSxRQUFRLE1BQU0sVUFBVSxPQUFPLEVBQUUsT0FBTyxJQUFJLFFBQVEsR0FBSTtBQUU1RCxhQUFTLFFBQVMsYUFBYTtBQUM3QixVQUFJLGdCQUFnQixRQUFRLE1BQU0sYUFBYSxLQUFLLE1BQU0sYUFBYSxLQUFLO0FBQzFFLGtCQUFXO0FBQUEsTUFDWixXQUNRLFVBQVUsTUFBTTtBQUN2QixnQkFBUSxXQUFXLFdBQVcsTUFBTSxRQUFRO0FBQUEsTUFDN0M7QUFBQSxJQUNGO0FBRUQsYUFBUyxZQUFhO0FBQ3BCLFVBQUksVUFBVSxNQUFNO0FBQ2xCLHFCQUFhLEtBQUs7QUFDbEIsZ0JBQVE7QUFBQSxNQUNUO0FBRUQsVUFBSSxVQUFVO0FBQ1osY0FBTSxFQUFFLGFBQWEsT0FBTyxjQUFjLE9BQVEsSUFBRztBQUVyRCxZQUFJLFVBQVUsS0FBSyxTQUFTLFdB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

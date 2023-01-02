import { j as exists, A as AuthTokenFromJSON, B as BaseAPI, J as JSONApiResponse, k as createComponent, c as computed, h, l as hSlot, r as ref, m as isRuntimeSsrPreHydration, o as onMounted, n as nextTick, p as onBeforeUnmount, q as noop, g as getCurrentInstance, t as listenOpts, i as inject, w as watch, u as hUniqueSlot, v as layoutKey, x as createDirective, y as client, z as leftClick, C as addEvt, D as preventDraggable, E as prevent, G as stop, H as position, I as cleanEvt, K as stopAndPrevent, L as useModelToggleProps, M as useDarkProps, N as useModelToggleEmits, O as useDark, P as useTimeout, Q as useModelToggle, R as useHistory, S as between, U as withDirectives, V as hDir, W as usePreventScroll, X as provide, Y as pageContainerKey, Z as hMergeSlot, _ as getScrollTarget, $ as getVerticalScrollPosition, a0 as getHorizontalScrollPosition, a1 as getScrollbarWidth, a2 as reactive, a as onUnmounted, a3 as _export_sfc, a4 as defineComponent, a5 as QueueController, a6 as unref, a7 as openBlock, a8 as createBlock, a9 as withCtx, d as createVNode, aa as QCardSection, ab as createBaseVNode, ac as toDisplayString, ad as QCardActions, ae as QBtn, af as QCard, ag as createCommentVNode, ah as isNumber, ai as isObject, aj as useFormProps, ak as useFormInject, al as useFormAttrs, am as audioController, an as createElementBlock, ao as createTextVNode, F as Fragment, ap as defineStore, aq as QIcon, ar as Transition, as as shallowReactive, at as useRouterLinkProps, au as uid$1, av as QSeparator, aw as vShow, ax as useSpinnerProps, ay as useSpinner, az as Ripple, aA as QAvatar, aB as normalizeClass, aC as renderList, aD as useBtnProps, aE as onDeactivated, aF as onActivated, aG as addFocusFn, aH as formKey, aI as ApiConfigProvider, aJ as QInput, aK as QDialog, aL as useAuthStore, aM as useRouter, aN as setCssVar, aO as resolveComponent, b as isRef, aP as KeepAlive, aQ as resolveDynamicComponent, aR as normalizeStyle } from "./index.bfbdb738.js";
import { o as outlinedFavoriteBorder, a as outlinedPlaylistAddCircle, Q as QTooltip, b as outlinedSkipPrevious, c as outlinedPlayArrow, d as outlinedPause, e as outlinedSkipNext, f as outlinedRepeat, g as outlinedShuffle, h as outlinedQueueMusic, i as outlinedPlaylistAdd, j as outlinedPlaylistPlay, k as outlinedHome, l as outlinedSearch, m as outlinedRadio, n as outlinedLibraryMusic, p as outlinedHistory, q as outlinedArrowBack, r as outlinedArrowForward, s as outlinedInfo, t as outlinedSettings } from "./index.79c53e66.js";
import { c as clearSelection, d as durationToSeconds, f as formatDuration, s as secondsToDuration, Q as QItemSection, a as QItem, b as QItemLabel, e as QList, g as QMenu } from "./QMenu.babff4f4.js";
import { u as useQuasar, C as ClosePopup } from "./ClosePopup.92bbd29c.js";
import { Q as QImg } from "./QImg.f4e44421.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.5acf1885.js";
function LoginResultFromJSON(json) {
  return LoginResultFromJSONTyped(json);
}
function LoginResultFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "jwtToken": !exists(json, "jwtToken") ? void 0 : json["jwtToken"],
    "refreshToken": !exists(json, "refreshToken") ? void 0 : json["refreshToken"],
    "authInfo": !exists(json, "authInfo") ? void 0 : AuthTokenFromJSON(json["authInfo"])
  };
}
function RoleFromJSON(json) {
  return RoleFromJSONTyped(json);
}
function RoleFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "roleName": !exists(json, "roleName") ? void 0 : json["roleName"],
    "users": !exists(json, "users") ? void 0 : json["users"] === null ? null : json["users"].map(UserFromJSON)
  };
}
function UserFromJSON(json) {
  return UserFromJSONTyped(json);
}
function UserFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "userId": json["userId"],
    "userName": json["userName"],
    "password": json["password"],
    "roles": !exists(json, "roles") ? void 0 : json["roles"] === null ? null : json["roles"].map(RoleFromJSON),
    "tokens": !exists(json, "tokens") ? void 0 : json["tokens"] === null ? null : json["tokens"].map(RefreshTokenFromJSON)
  };
}
function RefreshTokenFromJSON(json) {
  return RefreshTokenFromJSONTyped(json);
}
function RefreshTokenFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "tokenId": !exists(json, "tokenId") ? void 0 : json["tokenId"],
    "issuedTime": !exists(json, "issuedTime") ? void 0 : new Date(json["issuedTime"]),
    "userId": !exists(json, "userId") ? void 0 : json["userId"],
    "user": !exists(json, "user") ? void 0 : UserFromJSON(json["user"])
  };
}
function UserCredentialsDtoToJSON(value2) {
  if (value2 === void 0) {
    return void 0;
  }
  if (value2 === null) {
    return null;
  }
  return {
    "userName": value2.userName,
    "password": value2.password
  };
}
class UserApi extends BaseAPI {
  async getAllUsersRaw(initOverrides) {
    const queryParameters = {};
    const headerParameters = {};
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/user/all`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
  }
  async getAllUsers(initOverrides) {
    const response = await this.getAllUsersRaw(initOverrides);
    return await response.value();
  }
  async loginRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/user/login`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: UserCredentialsDtoToJSON(requestParameters.userCredentialsDto)
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => LoginResultFromJSON(jsonValue));
  }
  async login(requestParameters = {}, initOverrides) {
    const response = await this.loginRaw(requestParameters, initOverrides);
    return await response.value();
  }
  async registerRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/user/register`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: UserCredentialsDtoToJSON(requestParameters.userCredentialsDto)
    }, initOverrides);
    return new JSONApiResponse(response);
  }
  async register(requestParameters = {}, initOverrides) {
    const response = await this.registerRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
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
const _hoisted_1$9 = { class: "text-h6" };
const _hoisted_2$8 = { class: "text-subtitle2" };
const _hoisted_3$7 = { class: "text-subtitle1 text-grey q-py-sm" };
const __default__$7 = {
  name: "TrackInfoCard"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  setup(__props) {
    const songQueue = QueueController.getInstance();
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
                  createBaseVNode("div", _hoisted_1$9, toDisplayString(unref(songQueue).currentlyPlaying.name._default), 1),
                  createBaseVNode("div", _hoisted_2$8, toDisplayString(unref(songQueue).currentlyPlaying.album.albumName._default), 1),
                  createBaseVNode("div", _hoisted_3$7, toDisplayString(unref(songQueue).currentlyPlaying.album.albumArtist[0].name), 1)
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
var TrackInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "TrackInfoCard.vue"]]);
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
const _hoisted_1$8 = { class: "row full-width justify-center q-pt-sm" };
const _hoisted_2$7 = /* @__PURE__ */ createTextVNode("Previous");
const _hoisted_3$6 = /* @__PURE__ */ createTextVNode("Next");
const _hoisted_4$4 = {
  key: 0,
  class: "row full-width q-pt-lg"
};
const __default__$6 = {
  name: "MediaControl"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  setup(__props) {
    const currentTime = ref(0);
    const songQueue = QueueController.getInstance();
    const isPanningProgress = ref(false);
    const queueController = QueueController.getInstance();
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
        createBaseVNode("div", _hoisted_1$8, [
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
                  _hoisted_2$7
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
                  _hoisted_3$6
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
var MediaControl = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "MediaControl.vue"]]);
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
const _hoisted_1$7 = { class: "row full-width full-height justify-end items-center" };
const _hoisted_2$6 = { class: "col-7 row justify-end" };
const _hoisted_3$5 = /* @__PURE__ */ createTextVNode("Repeat");
const _hoisted_4$3 = /* @__PURE__ */ createTextVNode("Shuffle");
const _hoisted_5$1 = /* @__PURE__ */ createTextVNode("Queue");
const _hoisted_6 = { class: "col" };
const __default__$5 = {
  name: "QueueControl"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  setup(__props) {
    const queueShowStatusStore = useQueueDisplayStore();
    const volume = ref(audioController.volume.value * 100);
    watch(volume, () => {
      audioController.volume.value = volume.value / 100;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$6, [
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            icon: unref(outlinedRepeat)
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  _hoisted_3$5
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
        createBaseVNode("div", _hoisted_6, [
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
var QueueControl = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "QueueControl.vue"]]);
const _hoisted_1$6 = { class: "row full-width full-height justify-evenly" };
const _hoisted_2$5 = { class: "col" };
const _hoisted_3$4 = { class: "col-5" };
const _hoisted_4$2 = { class: "col-3" };
const __default__$4 = {
  name: "PlayerControl"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QToolbar, { class: "q-pa-md" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$6, [
            createBaseVNode("div", _hoisted_2$5, [
              createVNode(TrackInfoCard)
            ]),
            createBaseVNode("div", _hoisted_3$4, [
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
var PlayerControl = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "PlayerControl.vue"]]);
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
const _hoisted_1$5 = ["src"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
        class: "transparent",
        clickable: ""
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QAvatar, { square: "" }, {
                default: withCtx(() => [
                  createBaseVNode("img", {
                    src: props.trackInfo.album.thumbnail.tiny.url
                  }, null, 8, _hoisted_1$5)
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
var QueueItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "QueueItem.vue"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DrawerQueue",
  setup(__props) {
    let queueController = QueueController.getInstance();
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
var DrawerQueue = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "DrawerQueue.vue"]]);
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
var QForm = createComponent({
  name: "QForm",
  props: {
    autofocus: Boolean,
    noErrorFocus: Boolean,
    noResetFocus: Boolean,
    greedy: Boolean,
    onSubmit: Function
  },
  emits: ["reset", "validation-success", "validation-error"],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const rootRef = ref(null);
    let validateIndex = 0;
    const registeredComponents = [];
    function validate(shouldFocus) {
      const promises = [];
      const focus2 = typeof shouldFocus === "boolean" ? shouldFocus : props.noErrorFocus !== true;
      const index = ++validateIndex;
      const emitEvent = (res, ref2) => {
        emit("validation-" + (res === true ? "success" : "error"), ref2);
      };
      for (let i = 0; i < registeredComponents.length; i++) {
        const comp = registeredComponents[i];
        const valid = comp.validate();
        if (typeof valid.then === "function") {
          promises.push(
            valid.then(
              (valid2) => ({ valid: valid2, comp }),
              (err) => ({ valid: false, comp, err })
            )
          );
        } else if (valid !== true) {
          if (props.greedy === false) {
            emitEvent(false, comp);
            if (focus2 === true && typeof comp.focus === "function") {
              comp.focus();
            }
            return Promise.resolve(false);
          }
          promises.push({ valid: false, comp });
        }
      }
      if (promises.length === 0) {
        emitEvent(true);
        return Promise.resolve(true);
      }
      return Promise.all(promises).then((res) => {
        const errors = res.filter((r) => r.valid !== true);
        if (errors.length === 0) {
          index === validateIndex && emitEvent(true);
          return true;
        }
        const { valid, comp, err } = errors[0];
        if (index === validateIndex) {
          err !== void 0 && console.error(err);
          emitEvent(false, comp);
          if (focus2 === true && valid !== true && typeof comp.focus === "function") {
            comp.focus();
          }
        }
        return false;
      });
    }
    function resetValidation() {
      validateIndex++;
      registeredComponents.forEach((comp) => {
        typeof comp.resetValidation === "function" && comp.resetValidation();
      });
    }
    function submit(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      const index = validateIndex + 1;
      validate().then((val) => {
        if (index === validateIndex && val === true) {
          if (props.onSubmit !== void 0) {
            emit("submit", evt);
          } else if (evt !== void 0 && evt.target !== void 0 && typeof evt.target.submit === "function") {
            evt.target.submit();
          }
        }
      });
    }
    function reset(evt) {
      evt !== void 0 && stopAndPrevent(evt);
      emit("reset");
      nextTick(() => {
        resetValidation();
        if (props.autofocus === true && props.noResetFocus !== true) {
          focus();
        }
      });
    }
    function focus() {
      addFocusFn(() => {
        if (rootRef.value === null) {
          return;
        }
        const target = rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex > -1);
        target !== null && target !== void 0 && target.focus({ preventScroll: true });
      });
    }
    provide(formKey, {
      bindComponent(vmProxy) {
        registeredComponents.push(vmProxy);
      },
      unbindComponent(vmProxy) {
        const index = registeredComponents.indexOf(vmProxy);
        if (index > -1) {
          registeredComponents.splice(index, 1);
        }
      }
    });
    let shouldActivate = false;
    onDeactivated(() => {
      shouldActivate = true;
    });
    onActivated(() => {
      shouldActivate === true && props.autofocus === true && focus();
    });
    onMounted(() => {
      props.autofocus === true && focus();
    });
    Object.assign(vm.proxy, {
      validate,
      resetValidation,
      submit,
      reset,
      focus,
      getValidationComponents: () => registeredComponents
    });
    return () => h("form", {
      class: "q-form",
      ref: rootRef,
      onSubmit: submit,
      onReset: reset
    }, hSlot(slots.default));
  }
});
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Create Account", -1);
const _hoisted_2$4 = { class: "q-pa-md" };
const __default__$3 = defineComponent({
  name: "RegistrationModal"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    const show = ref(false);
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig(false);
    const userApi = new UserApi(apiConfig);
    const $q = useQuasar();
    const onSubmit = (evt) => {
      evt.preventDefault();
      const payload = {
        userCredentialsDto: {
          userName: username.value,
          password: password.value
        }
      };
      console.log("Submitting Register Request");
      userApi.register(payload).then((result) => {
        $q.notify({
          message: "Account Created",
          color: "positive",
          position: "top",
          timeout: 7e3
        });
        show.value = false;
      }).catch((result) => result.response.json().then((r) => {
        $q.notify({
          message: r.detail,
          color: "negative",
          position: "top",
          caption: "Error when creating an account",
          timeout: 7e3
        });
      }));
    };
    const usernameValidator = new RegExp("^[A-Za-z\\d\\-_.]{4,16}$");
    const passwordValidator = new RegExp("^.{6,64}$");
    const username = ref();
    const password = ref();
    const passwordRepeat = ref();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(QDialog), {
        "transition-show": "fade",
        "transition-hide": "fade",
        position: "top",
        modelValue: show.value,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => show.value = $event)
      }, {
        default: withCtx(() => [
          createVNode(QCard, {
            bordered: "",
            class: "q-mt-lg",
            style: { "width": "700px", "max-width": "80vw", "background-color": "rgba(66,66,66,0.97)" }
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1$4
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$4, [
                    createVNode(QForm, {
                      onSubmit,
                      class: "q-gutter-md"
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          dark: "",
                          outlined: "",
                          color: "white",
                          name: "username",
                          modelValue: username.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => username.value = $event),
                          label: "Username",
                          hint: "4-16 Alphanumeric Characters",
                          "lazy-rules": "",
                          rules: [
                            (val) => {
                              if (val.length < 4 || val.length > 16) {
                                return "Username must be between 4-16 characters";
                              } else if (!unref(usernameValidator).test(val)) {
                                return "Username must only consist of Alphanumeric characters";
                              }
                              return true;
                            }
                          ]
                        }, null, 8, ["modelValue", "rules"]),
                        createVNode(QInput, {
                          dark: "",
                          outlined: "",
                          color: "white",
                          type: "password",
                          name: "password",
                          modelValue: password.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
                          label: "Password",
                          hint: "Between 6 - 64 characters",
                          "lazy-rules": "",
                          rules: [(val) => unref(passwordValidator).test(val) || "Password must be between 6 - 64 characters"]
                        }, null, 8, ["modelValue", "rules"]),
                        createVNode(QInput, {
                          dark: "",
                          outlined: "",
                          color: "white",
                          type: "password",
                          modelValue: passwordRepeat.value,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => passwordRepeat.value = $event),
                          label: "Password (Repeat)",
                          "lazy-rules": "",
                          rules: [(val) => val === password.value || "Password does no't match"]
                        }, null, 8, ["modelValue", "rules"]),
                        createBaseVNode("div", null, [
                          createVNode(QBtn, {
                            label: "Create Account",
                            type: "submit",
                            class: "full-width",
                            size: "lg",
                            style: { "background-color": "rgba(255,255,255,0.32)" }
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
var RegistrationModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "RegistrationModal.vue"]]);
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Login", -1);
const _hoisted_2$3 = { class: "q-pa-md" };
const _hoisted_3$3 = /* @__PURE__ */ createTextVNode(" Don't have an account? ");
const __default__$2 = defineComponent({
  name: "LoginModal"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const { setAuthFromLoginResult } = useAuthStore();
    const show = ref(false);
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig(false);
    const userApi = new UserApi(apiConfig);
    const onSubmit = (evt) => {
      evt.preventDefault();
      const payload = {
        userCredentialsDto: {
          userName: username.value,
          password: password.value
        }
      };
      userApi.login(payload).then((result) => {
        $q.notify({
          message: "Logged in",
          color: "positive",
          position: "top",
          timeout: 7e3
        });
        setAuthFromLoginResult(result);
        show.value = false;
      }).catch((result) => result.response.json().then((r) => {
        $q.notify({
          message: r.detail,
          color: "negative",
          position: "top",
          caption: "Error when logging in",
          timeout: 7e3
        });
      }));
    };
    const username = ref();
    const password = ref();
    const $q = useQuasar();
    const showRegisterDialog = () => {
      $q.dialog({
        component: RegistrationModal
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        modelValue: show.value,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => show.value = $event),
        "transition-show": "fade",
        "transition-hide": "fade",
        position: "top"
      }, {
        default: withCtx(() => [
          createVNode(QCard, {
            bordered: "",
            class: "q-mt-lg",
            style: { "width": "700px", "max-width": "80vw", "background-color": "rgba(66,66,66,0.97)" }
          }, {
            default: withCtx(() => [
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  _hoisted_1$3
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$3, [
                    createVNode(QForm, {
                      onSubmit,
                      class: "q-gutter-md"
                    }, {
                      default: withCtx(() => [
                        createVNode(QInput, {
                          outlined: "",
                          color: "white",
                          modelValue: username.value,
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => username.value = $event),
                          label: "Username"
                        }, null, 8, ["modelValue"]),
                        createVNode(QInput, {
                          outlined: "",
                          color: "white",
                          type: "password",
                          modelValue: password.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => password.value = $event),
                          label: "Password"
                        }, null, 8, ["modelValue"]),
                        createBaseVNode("div", null, [
                          createVNode(QBtn, {
                            label: "Login",
                            type: "submit",
                            class: "full-width",
                            size: "lg",
                            style: { "background-color": "rgba(255,255,255,0.2)" }
                          })
                        ]),
                        createVNode(QSeparator),
                        createBaseVNode("div", { class: "full-height text-center" }, [
                          _hoisted_3$3,
                          createBaseVNode("a", {
                            onClick: showRegisterDialog,
                            style: { "text-decoration": "underline", "cursor": "pointer" }
                          }, "Create Account")
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
var LoginModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "LoginModal.vue"]]);
const _hoisted_1$2 = { class: "q-mx-md" };
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode("Account");
const _hoisted_3$2 = /* @__PURE__ */ createTextVNode("Settings");
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode("Logout");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "UserAccountButton",
  setup(__props) {
    const { isLoggedIn, getUsername } = useAuthStore();
    const isLoggedInReactive = computed(() => isLoggedIn);
    const $q = useQuasar();
    const showLoginDialog = () => {
      $q.dialog({
        component: LoginModal
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", null, [
          !unref(isLoggedInReactive) ? (openBlock(), createBlock(QBtn, {
            key: 0,
            onClick: showLoginDialog,
            outline: "",
            "text-color": "white",
            label: "Login",
            size: "md",
            style: { "width": "100px" }
          })) : createCommentVNode("", true)
        ]),
        unref(isLoggedInReactive) ? (openBlock(), createBlock(QBtnDropdown, {
          key: 0,
          rounded: "",
          label: unref(getUsername),
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
                            _hoisted_2$2
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
                            _hoisted_3$2
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
                            _hoisted_4$1
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
        }, 8, ["label"])) : createCommentVNode("", true)
      ]);
    };
  }
});
var UserAccountButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "UserAccountButton.vue"]]);
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-medium text-h5" }, " LOGO HERE ", -1);
const _hoisted_2$1 = { class: "text-weight-medium" };
const _hoisted_3$1 = { class: "text-weight-medium" };
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-medium" }, " Create Playlist ", -1);
const _hoisted_5 = { class: "text-weight-medium" };
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
        text: "Radio",
        icon: outlinedRadio,
        route: { name: "radio" }
      }
    ];
    const collectionNavigations = [
      {
        text: "Library",
        icon: outlinedLibraryMusic,
        route: { name: "library" }
      },
      {
        text: "History",
        icon: outlinedHistory,
        route: { name: "history" }
      },
      {
        text: "Favorite",
        icon: outlinedFavoriteBorder,
        route: { name: "favorite" }
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
                        size: "24px"
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
            createVNode(QSeparator, { class: "q-my-sm" }),
            (openBlock(), createElementBlock(Fragment, null, renderList(collectionNavigations, (link) => {
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
                        size: "24px"
                      }, null, 8, ["name"])
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_3$1, toDisplayString(link.text), 1)
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
                        _hoisted_4
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
                          createBaseVNode("span", _hoisted_5, toDisplayString(item), 1)
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
var MainLayout_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = { class: "q-gutter-sm row items-center no-wrap" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("About");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Settings");
const __default__ = defineComponent({
  name: "MainLayout",
  components: {
    DrawerNavigation
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const router = useRouter();
    const containerBg = usePageContainerBgStyleStore();
    const back = () => {
      router.back();
    };
    const forward = () => {
      router.forward();
    };
    const bgGradient = computed(() => {
      return `linear-gradient(180deg, ${containerBg.getGradient1} 0%, ${containerBg.getGradient2} 30%, rgba(0,0,0,1) 50%)`;
    });
    const queueDisplayStore = useQueueDisplayStore();
    const showQueue = computed(() => queueDisplayStore.show);
    const q = useQuasar();
    q.dark.set(true);
    setCssVar("primary", "#000000");
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(QLayout, { view: "lHh LpR fFf" }, {
        default: withCtx(() => [
          createVNode(QHeader, {
            id: "header",
            bordered: ""
          }, {
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
                        color: "white",
                        icon: unref(outlinedArrowBack),
                        onClick: back
                      }, null, 8, ["icon"]),
                      createVNode(QBtn, {
                        round: "",
                        dense: "",
                        flat: "",
                        size: "lg",
                        color: "white",
                        icon: unref(outlinedArrowForward),
                        onClick: forward
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  }),
                  createVNode(QSpace),
                  createBaseVNode("div", _hoisted_1, [
                    _ctx.$q.screen.gt.sm ? (openBlock(), createBlock(QBtn, {
                      key: 0,
                      round: "",
                      dense: "",
                      flat: "",
                      icon: unref(outlinedInfo)
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
                    }, 8, ["icon"])) : createCommentVNode("", true),
                    _ctx.$q.screen.gt.sm ? (openBlock(), createBlock(QBtn, {
                      key: 1,
                      round: "",
                      dense: "",
                      flat: "",
                      icon: unref(outlinedSettings)
                    }, {
                      default: withCtx(() => [
                        createVNode(QTooltip, null, {
                          default: withCtx(() => [
                            _hoisted_3
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["icon"])) : createCommentVNode("", true),
                    createVNode(UserAccountButton)
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
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(showQueue) ? showQueue.value = $event : null),
            side: "right",
            width: 270
          }, {
            default: withCtx(() => [
              createVNode(DrawerQueue, { id: "queue-drawer" })
            ]),
            _: 1
          }, 8, ["modelValue"]),
          createVNode(QPageContainer, {
            style: normalizeStyle([{ background: unref(bgGradient) }, { "transition": "background, 250ms, linear !important" }])
          }, {
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
          }, 8, ["style"]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC4yODRkYTZkYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvTG9naW5SZXN1bHQudHMiLCIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9Sb2xlLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvVXNlci50cyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvbW9kZWxzL1JlZnJlc2hUb2tlbi50cyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvbW9kZWxzL1VzZXJDcmVkZW50aWFsc0R0by50cyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvYXBpcy9Vc2VyQXBpLnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyVGl0bGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwYWNlL1FTcGFjZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdG9vbGJhci9RVG9vbGJhci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhbi1yZW5kZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2hlYWRlci9RSGVhZGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvdXRpbHMvcHJpdmF0ZS90b3VjaC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2RyYXdlci9RRHJhd2VyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdlL1FQYWdlQ29udGFpbmVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9mb290ZXIvUUZvb3Rlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2Nyb2xsLW9ic2VydmVyL1FTY3JvbGxPYnNlcnZlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvbGF5b3V0L1FMYXlvdXQuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9UcmFja0luZm9DYXJkLnZ1ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL3VzZS1zbGlkZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlci9RU2xpZGVyLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVkaWFDb250cm9sLnZ1ZSIsIi4uLy4uLy4uL3NyYy9zdG9yZXMvc2hvd1F1ZXVlLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUXVldWVDb250cm9sLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1BsYXllckNvbnRyb2wudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZS10cmFuc2l0aW9uL1FTbGlkZVRyYW5zaXRpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2V4cGFuc2lvbi1pdGVtL1FFeHBhbnNpb25JdGVtLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zcGlubmVyL1FTcGlubmVyQXVkaW8uanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9RdWV1ZUl0ZW0udnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhd2VyUXVldWUudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4tZ3JvdXAvUUJ0bkdyb3VwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9idG4tZHJvcGRvd24vUUJ0bkRyb3Bkb3duLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9mb3JtL1FGb3JtLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uTW9kYWwudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9naW5Nb2RhbC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Vc2VyQWNjb3VudEJ1dHRvbi52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EcmF3ZXJOYXZpZ2F0aW9uLnZ1ZSIsIi4uLy4uLy4uL3NyYy9sYXlvdXRzL01haW5MYXlvdXQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgQXV0aFRva2VuIH0gZnJvbSAnLi9BdXRoVG9rZW4nO1xuaW1wb3J0IHtcbiAgICBBdXRoVG9rZW5Gcm9tSlNPTixcbiAgICBBdXRoVG9rZW5Gcm9tSlNPTlR5cGVkLFxuICAgIEF1dGhUb2tlblRvSlNPTixcbn0gZnJvbSAnLi9BdXRoVG9rZW4nO1xuXG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBMb2dpblJlc3VsdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luUmVzdWx0IHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBMb2dpblJlc3VsdFxuICAgICAqL1xuICAgIGp3dFRva2VuPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBMb2dpblJlc3VsdFxuICAgICAqL1xuICAgIHJlZnJlc2hUb2tlbj86IHN0cmluZyB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0F1dGhUb2tlbn1cbiAgICAgKiBAbWVtYmVyb2YgTG9naW5SZXN1bHRcbiAgICAgKi9cbiAgICBhdXRoSW5mbz86IEF1dGhUb2tlbjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBMb2dpblJlc3VsdCBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mTG9naW5SZXN1bHQodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTG9naW5SZXN1bHRGcm9tSlNPTihqc29uOiBhbnkpOiBMb2dpblJlc3VsdCB7XG4gICAgcmV0dXJuIExvZ2luUmVzdWx0RnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblJlc3VsdEZyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogTG9naW5SZXN1bHQge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAnand0VG9rZW4nOiAhZXhpc3RzKGpzb24sICdqd3RUb2tlbicpID8gdW5kZWZpbmVkIDoganNvblsnand0VG9rZW4nXSxcbiAgICAgICAgJ3JlZnJlc2hUb2tlbic6ICFleGlzdHMoanNvbiwgJ3JlZnJlc2hUb2tlbicpID8gdW5kZWZpbmVkIDoganNvblsncmVmcmVzaFRva2VuJ10sXG4gICAgICAgICdhdXRoSW5mbyc6ICFleGlzdHMoanNvbiwgJ2F1dGhJbmZvJykgPyB1bmRlZmluZWQgOiBBdXRoVG9rZW5Gcm9tSlNPTihqc29uWydhdXRoSW5mbyddKSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTG9naW5SZXN1bHRUb0pTT04odmFsdWU/OiBMb2dpblJlc3VsdCB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdqd3RUb2tlbic6IHZhbHVlLmp3dFRva2VuLFxuICAgICAgICAncmVmcmVzaFRva2VuJzogdmFsdWUucmVmcmVzaFRva2VuLFxuICAgICAgICAnYXV0aEluZm8nOiBBdXRoVG9rZW5Ub0pTT04odmFsdWUuYXV0aEluZm8pLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQge1xuICAgIFVzZXJGcm9tSlNPTixcbiAgICBVc2VyRnJvbUpTT05UeXBlZCxcbiAgICBVc2VyVG9KU09OLFxufSBmcm9tICcuL1VzZXInO1xuXG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBSb2xlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9sZSB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUm9sZVxuICAgICAqL1xuICAgIHJvbGVOYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXJyYXk8VXNlcj59XG4gICAgICogQG1lbWJlcm9mIFJvbGVcbiAgICAgKi9cbiAgICB1c2Vycz86IEFycmF5PFVzZXI+IHwgbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBSb2xlIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZSb2xlKHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG5cbiAgICByZXR1cm4gaXNJbnN0YW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJvbGVGcm9tSlNPTihqc29uOiBhbnkpOiBSb2xlIHtcbiAgICByZXR1cm4gUm9sZUZyb21KU09OVHlwZWQoanNvbiwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUm9sZUZyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogUm9sZSB7XG4gICAgaWYgKChqc29uID09PSB1bmRlZmluZWQpIHx8IChqc29uID09PSBudWxsKSkge1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdyb2xlTmFtZSc6ICFleGlzdHMoanNvbiwgJ3JvbGVOYW1lJykgPyB1bmRlZmluZWQgOiBqc29uWydyb2xlTmFtZSddLFxuICAgICAgICAndXNlcnMnOiAhZXhpc3RzKGpzb24sICd1c2VycycpID8gdW5kZWZpbmVkIDogKGpzb25bJ3VzZXJzJ10gPT09IG51bGwgPyBudWxsIDogKGpzb25bJ3VzZXJzJ10gYXMgQXJyYXk8YW55PikubWFwKFVzZXJGcm9tSlNPTikpLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSb2xlVG9KU09OKHZhbHVlPzogUm9sZSB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdyb2xlTmFtZSc6IHZhbHVlLnJvbGVOYW1lLFxuICAgICAgICAndXNlcnMnOiB2YWx1ZS51c2VycyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHZhbHVlLnVzZXJzID09PSBudWxsID8gbnVsbCA6ICh2YWx1ZS51c2VycyBhcyBBcnJheTxhbnk+KS5tYXAoVXNlclRvSlNPTikpLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgUmVmcmVzaFRva2VuIH0gZnJvbSAnLi9SZWZyZXNoVG9rZW4nO1xuaW1wb3J0IHtcbiAgICBSZWZyZXNoVG9rZW5Gcm9tSlNPTixcbiAgICBSZWZyZXNoVG9rZW5Gcm9tSlNPTlR5cGVkLFxuICAgIFJlZnJlc2hUb2tlblRvSlNPTixcbn0gZnJvbSAnLi9SZWZyZXNoVG9rZW4nO1xuaW1wb3J0IHR5cGUgeyBSb2xlIH0gZnJvbSAnLi9Sb2xlJztcbmltcG9ydCB7XG4gICAgUm9sZUZyb21KU09OLFxuICAgIFJvbGVGcm9tSlNPTlR5cGVkLFxuICAgIFJvbGVUb0pTT04sXG59IGZyb20gJy4vUm9sZSc7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVzZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyXG4gICAgICovXG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlclxuICAgICAqL1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlclxuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJvbGU+fVxuICAgICAqIEBtZW1iZXJvZiBVc2VyXG4gICAgICovXG4gICAgcm9sZXM/OiBBcnJheTxSb2xlPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJlZnJlc2hUb2tlbj59XG4gICAgICogQG1lbWJlcm9mIFVzZXJcbiAgICAgKi9cbiAgICB0b2tlbnM/OiBBcnJheTxSZWZyZXNoVG9rZW4+IHwgbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBVc2VyIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZVc2VyKHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJ1c2VySWRcIiBpbiB2YWx1ZTtcbiAgICBpc0luc3RhbmNlID0gaXNJbnN0YW5jZSAmJiBcInVzZXJOYW1lXCIgaW4gdmFsdWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJwYXNzd29yZFwiIGluIHZhbHVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyRnJvbUpTT04oanNvbjogYW55KTogVXNlciB7XG4gICAgcmV0dXJuIFVzZXJGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJGcm9tSlNPTlR5cGVkKGpzb246IGFueSwgaWdub3JlRGlzY3JpbWluYXRvcjogYm9vbGVhbik6IFVzZXIge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndXNlcklkJzoganNvblsndXNlcklkJ10sXG4gICAgICAgICd1c2VyTmFtZSc6IGpzb25bJ3VzZXJOYW1lJ10sXG4gICAgICAgICdwYXNzd29yZCc6IGpzb25bJ3Bhc3N3b3JkJ10sXG4gICAgICAgICdyb2xlcyc6ICFleGlzdHMoanNvbiwgJ3JvbGVzJykgPyB1bmRlZmluZWQgOiAoanNvblsncm9sZXMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsncm9sZXMnXSBhcyBBcnJheTxhbnk+KS5tYXAoUm9sZUZyb21KU09OKSksXG4gICAgICAgICd0b2tlbnMnOiAhZXhpc3RzKGpzb24sICd0b2tlbnMnKSA/IHVuZGVmaW5lZCA6IChqc29uWyd0b2tlbnMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsndG9rZW5zJ10gYXMgQXJyYXk8YW55PikubWFwKFJlZnJlc2hUb2tlbkZyb21KU09OKSksXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJUb0pTT04odmFsdWU/OiBVc2VyIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJJZCc6IHZhbHVlLnVzZXJJZCxcbiAgICAgICAgJ3VzZXJOYW1lJzogdmFsdWUudXNlck5hbWUsXG4gICAgICAgICdwYXNzd29yZCc6IHZhbHVlLnBhc3N3b3JkLFxuICAgICAgICAncm9sZXMnOiB2YWx1ZS5yb2xlcyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHZhbHVlLnJvbGVzID09PSBudWxsID8gbnVsbCA6ICh2YWx1ZS5yb2xlcyBhcyBBcnJheTxhbnk+KS5tYXAoUm9sZVRvSlNPTikpLFxuICAgICAgICAndG9rZW5zJzogdmFsdWUudG9rZW5zID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAodmFsdWUudG9rZW5zID09PSBudWxsID8gbnVsbCA6ICh2YWx1ZS50b2tlbnMgYXMgQXJyYXk8YW55PikubWFwKFJlZnJlc2hUb2tlblRvSlNPTikpLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5pbXBvcnQge1xuICAgIFVzZXJGcm9tSlNPTixcbiAgICBVc2VyRnJvbUpTT05UeXBlZCxcbiAgICBVc2VyVG9KU09OLFxufSBmcm9tICcuL1VzZXInO1xuXG4vKipcbiAqIFxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBSZWZyZXNoVG9rZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWZyZXNoVG9rZW4ge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFJlZnJlc2hUb2tlblxuICAgICAqL1xuICAgIHRva2VuSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0RhdGV9XG4gICAgICogQG1lbWJlcm9mIFJlZnJlc2hUb2tlblxuICAgICAqL1xuICAgIGlzc3VlZFRpbWU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFJlZnJlc2hUb2tlblxuICAgICAqL1xuICAgIHVzZXJJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7VXNlcn1cbiAgICAgKiBAbWVtYmVyb2YgUmVmcmVzaFRva2VuXG4gICAgICovXG4gICAgdXNlcj86IFVzZXI7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBnaXZlbiBvYmplY3QgaW1wbGVtZW50cyB0aGUgUmVmcmVzaFRva2VuIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZSZWZyZXNoVG9rZW4odmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVmcmVzaFRva2VuRnJvbUpTT04oanNvbjogYW55KTogUmVmcmVzaFRva2VuIHtcbiAgICByZXR1cm4gUmVmcmVzaFRva2VuRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWZyZXNoVG9rZW5Gcm9tSlNPTlR5cGVkKGpzb246IGFueSwgaWdub3JlRGlzY3JpbWluYXRvcjogYm9vbGVhbik6IFJlZnJlc2hUb2tlbiB7XG4gICAgaWYgKChqc29uID09PSB1bmRlZmluZWQpIHx8IChqc29uID09PSBudWxsKSkge1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICd0b2tlbklkJzogIWV4aXN0cyhqc29uLCAndG9rZW5JZCcpID8gdW5kZWZpbmVkIDoganNvblsndG9rZW5JZCddLFxuICAgICAgICAnaXNzdWVkVGltZSc6ICFleGlzdHMoanNvbiwgJ2lzc3VlZFRpbWUnKSA/IHVuZGVmaW5lZCA6IChuZXcgRGF0ZShqc29uWydpc3N1ZWRUaW1lJ10pKSxcbiAgICAgICAgJ3VzZXJJZCc6ICFleGlzdHMoanNvbiwgJ3VzZXJJZCcpID8gdW5kZWZpbmVkIDoganNvblsndXNlcklkJ10sXG4gICAgICAgICd1c2VyJzogIWV4aXN0cyhqc29uLCAndXNlcicpID8gdW5kZWZpbmVkIDogVXNlckZyb21KU09OKGpzb25bJ3VzZXInXSksXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZnJlc2hUb2tlblRvSlNPTih2YWx1ZT86IFJlZnJlc2hUb2tlbiB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICd0b2tlbklkJzogdmFsdWUudG9rZW5JZCxcbiAgICAgICAgJ2lzc3VlZFRpbWUnOiB2YWx1ZS5pc3N1ZWRUaW1lID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAodmFsdWUuaXNzdWVkVGltZS50b0lTT1N0cmluZygpKSxcbiAgICAgICAgJ3VzZXJJZCc6IHZhbHVlLnVzZXJJZCxcbiAgICAgICAgJ3VzZXInOiBVc2VyVG9KU09OKHZhbHVlLnVzZXIpLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBBdXRoZW50aWNhdGlvblNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVzZXJDcmVkZW50aWFsc0R0b1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDcmVkZW50aWFsc0R0byB7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlckNyZWRlbnRpYWxzRHRvXG4gICAgICovXG4gICAgdXNlck5hbWU6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyQ3JlZGVudGlhbHNEdG9cbiAgICAgKi9cbiAgICBwYXNzd29yZDogc3RyaW5nO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFVzZXJDcmVkZW50aWFsc0R0byBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mVXNlckNyZWRlbnRpYWxzRHRvKHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJ1c2VyTmFtZVwiIGluIHZhbHVlO1xuICAgIGlzSW5zdGFuY2UgPSBpc0luc3RhbmNlICYmIFwicGFzc3dvcmRcIiBpbiB2YWx1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXNlckNyZWRlbnRpYWxzRHRvRnJvbUpTT04oanNvbjogYW55KTogVXNlckNyZWRlbnRpYWxzRHRvIHtcbiAgICByZXR1cm4gVXNlckNyZWRlbnRpYWxzRHRvRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTlR5cGVkKGpzb246IGFueSwgaWdub3JlRGlzY3JpbWluYXRvcjogYm9vbGVhbik6IFVzZXJDcmVkZW50aWFsc0R0byB7XG4gICAgaWYgKChqc29uID09PSB1bmRlZmluZWQpIHx8IChqc29uID09PSBudWxsKSkge1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICd1c2VyTmFtZSc6IGpzb25bJ3VzZXJOYW1lJ10sXG4gICAgICAgICdwYXNzd29yZCc6IGpzb25bJ3Bhc3N3b3JkJ10sXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJDcmVkZW50aWFsc0R0b1RvSlNPTih2YWx1ZT86IFVzZXJDcmVkZW50aWFsc0R0byB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICd1c2VyTmFtZSc6IHZhbHVlLnVzZXJOYW1lLFxuICAgICAgICAncGFzc3dvcmQnOiB2YWx1ZS5wYXNzd29yZCxcbiAgICB9O1xufVxuXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogQXV0aGVudGljYXRpb25TZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cblxuaW1wb3J0ICogYXMgcnVudGltZSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHtcbiAgTG9naW5SZXN1bHQsXG4gIFByb2JsZW1EZXRhaWxzLFxuICBVc2VyLFxuICBVc2VyQ3JlZGVudGlhbHNEdG8sXG59IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQge1xuICAgIExvZ2luUmVzdWx0RnJvbUpTT04sXG4gICAgTG9naW5SZXN1bHRUb0pTT04sXG4gICAgUHJvYmxlbURldGFpbHNGcm9tSlNPTixcbiAgICBQcm9ibGVtRGV0YWlsc1RvSlNPTixcbiAgICBVc2VyRnJvbUpTT04sXG4gICAgVXNlclRvSlNPTixcbiAgICBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTixcbiAgICBVc2VyQ3JlZGVudGlhbHNEdG9Ub0pTT04sXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXF1ZXN0IHtcbiAgICB1c2VyQ3JlZGVudGlhbHNEdG8/OiBVc2VyQ3JlZGVudGlhbHNEdG87XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVnaXN0ZXJSZXF1ZXN0IHtcbiAgICB1c2VyQ3JlZGVudGlhbHNEdG8/OiBVc2VyQ3JlZGVudGlhbHNEdG87XG59XG5cbi8qKlxuICogXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyQXBpIGV4dGVuZHMgcnVudGltZS5CYXNlQVBJIHtcblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGdldEFsbFVzZXJzUmF3KGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8QXJyYXk8VXNlcj4+PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1ldGVyczogYW55ID0ge307XG5cbiAgICAgICAgY29uc3QgaGVhZGVyUGFyYW1ldGVyczogcnVudGltZS5IVFRQSGVhZGVycyA9IHt9O1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKTsgLy8gSnd0IGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICBwYXRoOiBgL2FwaS91c2VyL2FsbGAsXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1ldGVycyxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5KU09OQXBpUmVzcG9uc2UocmVzcG9uc2UsIChqc29uVmFsdWUpID0+IGpzb25WYWx1ZS5tYXAoVXNlckZyb21KU09OKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWxsVXNlcnMoaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8QXJyYXk8VXNlcj4+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldEFsbFVzZXJzUmF3KGluaXRPdmVycmlkZXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudmFsdWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBsb2dpblJhdyhyZXF1ZXN0UGFyYW1ldGVyczogTG9naW5SZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPExvZ2luUmVzdWx0Pj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvdXNlci9sb2dpbmAsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgYm9keTogVXNlckNyZWRlbnRpYWxzRHRvVG9KU09OKHJlcXVlc3RQYXJhbWV0ZXJzLnVzZXJDcmVkZW50aWFsc0R0byksXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5KU09OQXBpUmVzcG9uc2UocmVzcG9uc2UsIChqc29uVmFsdWUpID0+IExvZ2luUmVzdWx0RnJvbUpTT04oanNvblZhbHVlKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgbG9naW4ocmVxdWVzdFBhcmFtZXRlcnM6IExvZ2luUmVxdWVzdCA9IHt9LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxMb2dpblJlc3VsdD4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMubG9naW5SYXcocmVxdWVzdFBhcmFtZXRlcnMsIGluaXRPdmVycmlkZXMpO1xuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UudmFsdWUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyByZWdpc3RlclJhdyhyZXF1ZXN0UGFyYW1ldGVyczogUmVnaXN0ZXJSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPG9iamVjdD4+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vanNvbic7XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL3VzZXIvcmVnaXN0ZXJgLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgIGJvZHk6IFVzZXJDcmVkZW50aWFsc0R0b1RvSlNPTihyZXF1ZXN0UGFyYW1ldGVycy51c2VyQ3JlZGVudGlhbHNEdG8pLFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuSlNPTkFwaVJlc3BvbnNlPGFueT4ocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIHJlZ2lzdGVyKHJlcXVlc3RQYXJhbWV0ZXJzOiBSZWdpc3RlclJlcXVlc3QgPSB7fSwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZWdpc3RlclJhdyhyZXF1ZXN0UGFyYW1ldGVycywgaW5pdE92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS52YWx1ZSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUb29sYmFyVGl0bGUnLFxuXG4gIHByb3BzOiB7XG4gICAgc2hyaW5rOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRvb2xiYXJfX3RpdGxlIGVsbGlwc2lzJ1xuICAgICAgKyAocHJvcHMuc2hyaW5rID09PSB0cnVlID8gJyBjb2wtc2hyaW5rJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IHNwYWNlID0gaCgnZGl2JywgeyBjbGFzczogJ3Etc3BhY2UnIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3BhY2UnLFxuXG4gIHNldHVwICgpIHtcbiAgICByZXR1cm4gKCkgPT4gc3BhY2VcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVG9vbGJhcicsXG5cbiAgcHJvcHM6IHtcbiAgICBpbnNldDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10b29sYmFyIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlcidcbiAgICAgICsgKHByb3BzLmluc2V0ID09PSB0cnVlID8gJyBxLXRvb2xiYXItLWluc2V0JyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgcmVmLCBvbk1vdW50ZWQgfSBmcm9tICd2dWUnXG5cbi8vIHVzaW5nIGl0IHRvIG1hbmFnZSBTU1IgcmVuZGVyaW5nIHdpdGggYmVzdCBwZXJmb3JtYW5jZVxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjYW5SZW5kZXIgPSByZWYoIWlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSlcblxuICBpZiAoY2FuUmVuZGVyLnZhbHVlID09PSBmYWxzZSkge1xuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBjYW5SZW5kZXIudmFsdWUgPSB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBjYW5SZW5kZXJcbn1cbiIsImltcG9ydCB7IGgsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UsIG5leHRUaWNrIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQ2FuUmVuZGVyIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWNhbi1yZW5kZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cywgbm9vcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCBoYXNPYnNlcnZlciA9IHR5cGVvZiBSZXNpemVPYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcbmNvbnN0IHJlc2l6ZVByb3BzID0gaGFzT2JzZXJ2ZXIgPT09IHRydWVcbiAgPyB7fVxuICA6IHtcbiAgICAgIHN0eWxlOiAnZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtib3R0b206MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO292ZXJmbG93OmhpZGRlbjtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTE7JyxcbiAgICAgIHVybDogJ2Fib3V0OmJsYW5rJ1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FSZXNpemVPYnNlcnZlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXNpemUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGlmIChfX1FVQVNBUl9TU1JfU0VSVkVSX18pIHsgcmV0dXJuIG5vb3AgfVxuXG4gICAgbGV0IHRpbWVyID0gbnVsbCwgdGFyZ2V0RWwsIHNpemUgPSB7IHdpZHRoOiAtMSwgaGVpZ2h0OiAtMSB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyIChpbW1lZGlhdGVseSkge1xuICAgICAgaWYgKGltbWVkaWF0ZWx5ID09PSB0cnVlIHx8IHByb3BzLmRlYm91bmNlID09PSAwIHx8IHByb3BzLmRlYm91bmNlID09PSAnMCcpIHtcbiAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVtaXRFdmVudCAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICB0aW1lciA9IG51bGxcblxuICAgICAgaWYgKHRhcmdldEVsKSB7XG4gICAgICAgIGNvbnN0IHsgb2Zmc2V0V2lkdGg6IHdpZHRoLCBvZmZzZXRIZWlnaHQ6IGhlaWdodCB9ID0gdGFyZ2V0RWxcblxuICAgICAgICBpZiAod2lkdGggIT09IHNpemUud2lkdGggfHwgaGVpZ2h0ICE9PSBzaXplLmhlaWdodCkge1xuICAgICAgICAgIHNpemUgPSB7IHdpZHRoLCBoZWlnaHQgfVxuICAgICAgICAgIGVtaXQoJ3Jlc2l6ZScsIHNpemUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgaWYgKGhhc09ic2VydmVyID09PSB0cnVlKSB7XG4gICAgICBsZXQgb2JzZXJ2ZXJcblxuICAgICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgIHRhcmdldEVsID0gcHJveHkuJGVsLnBhcmVudE5vZGVcblxuICAgICAgICAgIGlmICh0YXJnZXRFbCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIodHJpZ2dlcilcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0RWwpXG4gICAgICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcblxuICAgICAgICBpZiAob2JzZXJ2ZXIgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5kaXNjb25uZWN0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0YXJnZXRFbCkgeyAvLyBGRiBmb3IgQW5kcm9pZFxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKHRhcmdldEVsKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIG5vb3BcbiAgICB9XG4gICAgZWxzZSB7IC8vIG5vIG9ic2VydmVyLCBzbyBmYWxsYmFjayB0byBvbGQgaWZyYW1lIG1ldGhvZFxuICAgICAgY29uc3QgY2FuUmVuZGVyID0gdXNlQ2FuUmVuZGVyKClcblxuICAgICAgbGV0IGN1ckRvY1ZpZXdcblxuICAgICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcblxuICAgICAgICBpZiAoY3VyRG9jVmlldyAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgLy8gaU9TIGlzIGZ1enp5LCBuZWVkIHRvIGNoZWNrIGl0IGZpcnN0XG4gICAgICAgICAgaWYgKGN1ckRvY1ZpZXcucmVtb3ZlRXZlbnRMaXN0ZW5lciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBjdXJEb2NWaWV3LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRyaWdnZXIsIGxpc3Rlbk9wdHMucGFzc2l2ZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgY3VyRG9jVmlldyA9IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uT2JqTG9hZCAoKSB7XG4gICAgICAgIGNsZWFudXAoKVxuXG4gICAgICAgIGlmICh0YXJnZXRFbCAmJiB0YXJnZXRFbC5jb250ZW50RG9jdW1lbnQpIHtcbiAgICAgICAgICBjdXJEb2NWaWV3ID0gdGFyZ2V0RWwuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3XG4gICAgICAgICAgY3VyRG9jVmlldy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0cmlnZ2VyLCBsaXN0ZW5PcHRzLnBhc3NpdmUpXG4gICAgICAgICAgZW1pdEV2ZW50KClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgdGFyZ2V0RWwgPSBwcm94eS4kZWxcbiAgICAgICAgICB0YXJnZXRFbCAmJiBvbk9iakxvYWQoKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgb25CZWZvcmVVbm1vdW50KGNsZWFudXApXG5cbiAgICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kXG4gICAgICBwcm94eS50cmlnZ2VyID0gdHJpZ2dlclxuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY2FuUmVuZGVyLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgcmV0dXJuIGgoJ29iamVjdCcsIHtcbiAgICAgICAgICAgIHN0eWxlOiByZXNpemVQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIHRhYmluZGV4OiAtMSwgLy8gZml4IGZvciBGaXJlZm94XG4gICAgICAgICAgICB0eXBlOiAndGV4dC9odG1sJyxcbiAgICAgICAgICAgIGRhdGE6IHJlc2l6ZVByb3BzLnVybCxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgIG9uTG9hZDogb25PYmpMb2FkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FIZWFkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICByZXZlYWxPZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDI1MFxuICAgIH0sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBoZWlnaHRIaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmV2ZWFsJywgJ2ZvY3VzaW4nIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignUUhlYWRlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICB9KVxuXG4gICAgY29uc3Qgc2l6ZSA9IHJlZihwYXJzZUludChwcm9wcy5oZWlnaHRIaW50LCAxMCkpXG4gICAgY29uc3QgcmV2ZWFsZWQgPSByZWYodHJ1ZSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0gnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2l6ZS52YWx1ZSAtICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1oZWFkZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy10b3AnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWhlYWRlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLnRvcCxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2hlYWRlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGwsIHNjcm9sbCA9PiB7XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWUgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsXG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIDw9IHByb3BzLnJldmVhbE9mZnNldFxuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gLSBzY3JvbGwuaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2hlYWRlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJjb25zdCBtb2RpZmllcnNBbGwgPSB7XG4gIGxlZnQ6IHRydWUsXG4gIHJpZ2h0OiB0cnVlLFxuICB1cDogdHJ1ZSxcbiAgZG93bjogdHJ1ZSxcbiAgaG9yaXpvbnRhbDogdHJ1ZSxcbiAgdmVydGljYWw6IHRydWVcbn1cblxuY29uc3QgZGlyZWN0aW9uTGlzdCA9IE9iamVjdC5rZXlzKG1vZGlmaWVyc0FsbClcblxubW9kaWZpZXJzQWxsLmFsbCA9IHRydWVcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vZGlmaWVyRGlyZWN0aW9ucyAobW9kKSB7XG4gIGNvbnN0IGRpciA9IHt9XG5cbiAgZm9yIChjb25zdCBkaXJlY3Rpb24gb2YgZGlyZWN0aW9uTGlzdCkge1xuICAgIGlmIChtb2RbIGRpcmVjdGlvbiBdID09PSB0cnVlKSB7XG4gICAgICBkaXJbIGRpcmVjdGlvbiBdID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhkaXIpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBtb2RpZmllcnNBbGxcbiAgfVxuXG4gIGlmIChkaXIuaG9yaXpvbnRhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci5sZWZ0ID0gZGlyLnJpZ2h0ID0gdHJ1ZVxuICB9XG4gIGVsc2UgaWYgKGRpci5sZWZ0ID09PSB0cnVlICYmIGRpci5yaWdodCA9PT0gdHJ1ZSkge1xuICAgIGRpci5ob3Jpem9udGFsID0gdHJ1ZVxuICB9XG5cbiAgaWYgKGRpci52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpci51cCA9IGRpci5kb3duID0gdHJ1ZVxuICB9XG4gIGVsc2UgaWYgKGRpci51cCA9PT0gdHJ1ZSAmJiBkaXIuZG93biA9PT0gdHJ1ZSkge1xuICAgIGRpci52ZXJ0aWNhbCA9IHRydWVcbiAgfVxuXG4gIGlmIChkaXIuaG9yaXpvbnRhbCA9PT0gdHJ1ZSAmJiBkaXIudmVydGljYWwgPT09IHRydWUpIHtcbiAgICBkaXIuYWxsID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGRpclxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkU3RhcnQgKGV2dCwgY3R4KSB7XG4gIHJldHVybiBjdHguZXZlbnQgPT09IHZvaWQgMFxuICAgICYmIGV2dC50YXJnZXQgIT09IHZvaWQgMFxuICAgICYmIGV2dC50YXJnZXQuZHJhZ2dhYmxlICE9PSB0cnVlXG4gICAgJiYgdHlwZW9mIGN0eC5oYW5kbGVyID09PSAnZnVuY3Rpb24nXG4gICAgJiYgZXZ0LnRhcmdldC5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpICE9PSAnSU5QVVQnXG4gICAgJiYgKGV2dC5xQ2xvbmVkQnkgPT09IHZvaWQgMCB8fCBldnQucUNsb25lZEJ5LmluZGV4T2YoY3R4LnVpZCkgPT09IC0xKVxufVxuIiwiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IHsgY3JlYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBnZXRNb2RpZmllckRpcmVjdGlvbnMsIHNob3VsZFN0YXJ0IH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS90b3VjaC5qcydcbmltcG9ydCB7IGFkZEV2dCwgY2xlYW5FdnQsIHBvc2l0aW9uLCBsZWZ0Q2xpY2ssIHByZXZlbnQsIHN0b3AsIHN0b3BBbmRQcmV2ZW50LCBwcmV2ZW50RHJhZ2dhYmxlLCBub29wIH0gZnJvbSAnLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBjbGVhclNlbGVjdGlvbiB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvc2VsZWN0aW9uLmpzJ1xuaW1wb3J0IGdldFNTUlByb3BzIGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuZnVuY3Rpb24gZ2V0Q2hhbmdlcyAoZXZ0LCBjdHgsIGlzRmluYWwpIHtcbiAgY29uc3QgcG9zID0gcG9zaXRpb24oZXZ0KVxuICBsZXRcbiAgICBkaXIsXG4gICAgZGlzdFggPSBwb3MubGVmdCAtIGN0eC5ldmVudC54LFxuICAgIGRpc3RZID0gcG9zLnRvcCAtIGN0eC5ldmVudC55LFxuICAgIGFic1ggPSBNYXRoLmFicyhkaXN0WCksXG4gICAgYWJzWSA9IE1hdGguYWJzKGRpc3RZKVxuXG4gIGNvbnN0IGRpcmVjdGlvbiA9IGN0eC5kaXJlY3Rpb25cblxuICBpZiAoZGlyZWN0aW9uLmhvcml6b250YWwgPT09IHRydWUgJiYgZGlyZWN0aW9uLnZlcnRpY2FsICE9PSB0cnVlKSB7XG4gICAgZGlyID0gZGlzdFggPCAwID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5ob3Jpem9udGFsICE9PSB0cnVlICYmIGRpcmVjdGlvbi52ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgIGRpciA9IGRpc3RZIDwgMCA/ICd1cCcgOiAnZG93bidcbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24udXAgPT09IHRydWUgJiYgZGlzdFkgPCAwKSB7XG4gICAgZGlyID0gJ3VwJ1xuICAgIGlmIChhYnNYID4gYWJzWSkge1xuICAgICAgaWYgKGRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlICYmIGRpc3RYIDwgMCkge1xuICAgICAgICBkaXIgPSAnbGVmdCdcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBkaXN0WCA+IDApIHtcbiAgICAgICAgZGlyID0gJ3JpZ2h0J1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIGlmIChkaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBkaXN0WSA+IDApIHtcbiAgICBkaXIgPSAnZG93bidcbiAgICBpZiAoYWJzWCA+IGFic1kpIHtcbiAgICAgIGlmIChkaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBkaXN0WCA8IDApIHtcbiAgICAgICAgZGlyID0gJ2xlZnQnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgZGlzdFggPiAwKSB7XG4gICAgICAgIGRpciA9ICdyaWdodCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxzZSBpZiAoZGlyZWN0aW9uLmxlZnQgPT09IHRydWUgJiYgZGlzdFggPCAwKSB7XG4gICAgZGlyID0gJ2xlZnQnXG4gICAgaWYgKGFic1ggPCBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGRpc3RZIDwgMCkge1xuICAgICAgICBkaXIgPSAndXAnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBkaXN0WSA+IDApIHtcbiAgICAgICAgZGlyID0gJ2Rvd24nXG4gICAgICB9XG4gICAgfVxuICB9XG4gIGVsc2UgaWYgKGRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZSAmJiBkaXN0WCA+IDApIHtcbiAgICBkaXIgPSAncmlnaHQnXG4gICAgaWYgKGFic1ggPCBhYnNZKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uLnVwID09PSB0cnVlICYmIGRpc3RZIDwgMCkge1xuICAgICAgICBkaXIgPSAndXAnXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBkaXN0WSA+IDApIHtcbiAgICAgICAgZGlyID0gJ2Rvd24nXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IHN5bnRoZXRpYyA9IGZhbHNlXG5cbiAgaWYgKGRpciA9PT0gdm9pZCAwICYmIGlzRmluYWwgPT09IGZhbHNlKSB7XG4gICAgaWYgKGN0eC5ldmVudC5pc0ZpcnN0ID09PSB0cnVlIHx8IGN0eC5ldmVudC5sYXN0RGlyID09PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGRpciA9IGN0eC5ldmVudC5sYXN0RGlyXG4gICAgc3ludGhldGljID0gdHJ1ZVxuXG4gICAgaWYgKGRpciA9PT0gJ2xlZnQnIHx8IGRpciA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcG9zLmxlZnQgLT0gZGlzdFhcbiAgICAgIGFic1ggPSAwXG4gICAgICBkaXN0WCA9IDBcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwb3MudG9wIC09IGRpc3RZXG4gICAgICBhYnNZID0gMFxuICAgICAgZGlzdFkgPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzeW50aGV0aWMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgZXZ0LFxuICAgICAgdG91Y2g6IGN0eC5ldmVudC5tb3VzZSAhPT0gdHJ1ZSxcbiAgICAgIG1vdXNlOiBjdHguZXZlbnQubW91c2UgPT09IHRydWUsXG4gICAgICBwb3NpdGlvbjogcG9zLFxuICAgICAgZGlyZWN0aW9uOiBkaXIsXG4gICAgICBpc0ZpcnN0OiBjdHguZXZlbnQuaXNGaXJzdCxcbiAgICAgIGlzRmluYWw6IGlzRmluYWwgPT09IHRydWUsXG4gICAgICBkdXJhdGlvbjogRGF0ZS5ub3coKSAtIGN0eC5ldmVudC50aW1lLFxuICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgeDogYWJzWCxcbiAgICAgICAgeTogYWJzWVxuICAgICAgfSxcbiAgICAgIG9mZnNldDoge1xuICAgICAgICB4OiBkaXN0WCxcbiAgICAgICAgeTogZGlzdFlcbiAgICAgIH0sXG4gICAgICBkZWx0YToge1xuICAgICAgICB4OiBwb3MubGVmdCAtIGN0eC5ldmVudC5sYXN0WCxcbiAgICAgICAgeTogcG9zLnRvcCAtIGN0eC5ldmVudC5sYXN0WVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sZXQgdWlkID0gMFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAndG91Y2gtcGFuJywgZ2V0U1NSUHJvcHMgfVxuICA6IHtcbiAgICAgIG5hbWU6ICd0b3VjaC1wYW4nLFxuXG4gICAgICBiZWZvcmVNb3VudCAoZWwsIHsgdmFsdWUsIG1vZGlmaWVycyB9KSB7XG4gICAgICAgIC8vIGVhcmx5IHJldHVybiwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlICE9PSB0cnVlICYmIGNsaWVudC5oYXMudG91Y2ggIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUV2ZW50IChldnQsIG1vdXNlRXZlbnQpIHtcbiAgICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlICYmIG1vdXNlRXZlbnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBtb2RpZmllcnMuc3RvcCA9PT0gdHJ1ZSAmJiBzdG9wKGV2dClcbiAgICAgICAgICAgIG1vZGlmaWVycy5wcmV2ZW50ID09PSB0cnVlICYmIHByZXZlbnQoZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICB1aWQ6ICdxdnRwXycgKyAodWlkKyspLFxuICAgICAgICAgIGhhbmRsZXI6IHZhbHVlLFxuICAgICAgICAgIG1vZGlmaWVycyxcbiAgICAgICAgICBkaXJlY3Rpb246IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhtb2RpZmllcnMpLFxuXG4gICAgICAgICAgbm9vcCxcblxuICAgICAgICAgIG1vdXNlU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSAmJiBsZWZ0Q2xpY2soZXZ0KSkge1xuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgJ21vdmUnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNldXAnLCAnZW5kJywgJ3Bhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dCwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdG91Y2hTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2dC50YXJnZXRcblxuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNobW92ZScsICdtb3ZlJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hjYW5jZWwnLCAnZW5kJywgJ3Bhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hlbmQnLCAnZW5kJywgJ3Bhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG5cbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgdHJ1ZSlcbiAgICAgICAgICAgIGN0eC5sYXN0RXZ0ID0gZXZ0XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIFN0b3AgcHJvcGFnYXRpb24gc28gcG9zc2libGUgdXBwZXIgdi10b3VjaC1wYW4gZG9uJ3QgY2F0Y2ggdGhpcyBhcyB3ZWxsO1xuICAgICAgICAgICAgKiBJZiB3ZSdyZSBub3QgdGhlIHRhcmdldCAoYmFzZWQgb24gbW9kaWZpZXJzKSwgd2UnbGwgcmUtZW1pdCB0aGUgZXZlbnQgbGF0ZXJcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAobW91c2VFdmVudCA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMuc3RvcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAqIGFyZSB3ZSBkaXJlY3RseSBzd2l0Y2hpbmcgdG8gZGV0ZWN0ZWQgc3RhdGU/XG4gICAgICAgICAgICAgICogY2xvbmUgZXZlbnQgb25seSBvdGhlcndpc2VcbiAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uYWxsICE9PSB0cnVlXG4gICAgICAgICAgICAgICAgJiYgKG1vdXNlRXZlbnQgIT09IHRydWUgfHwgY3R4Lm1vZGlmaWVycy5tb3VzZUFsbERpciAhPT0gdHJ1ZSlcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmUgPSBldnQudHlwZS5pbmRleE9mKCdtb3VzZScpID4gLTFcbiAgICAgICAgICAgICAgICAgID8gbmV3IE1vdXNlRXZlbnQoZXZ0LnR5cGUsIGV2dClcbiAgICAgICAgICAgICAgICAgIDogbmV3IFRvdWNoRXZlbnQoZXZ0LnR5cGUsIGV2dClcblxuICAgICAgICAgICAgICAgIGV2dC5kZWZhdWx0UHJldmVudGVkID09PSB0cnVlICYmIHByZXZlbnQoY2xvbmUpXG4gICAgICAgICAgICAgICAgZXZ0LmNhbmNlbEJ1YmJsZSA9PT0gdHJ1ZSAmJiBzdG9wKGNsb25lKVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjbG9uZSwge1xuICAgICAgICAgICAgICAgICAgcUtleUV2ZW50OiBldnQucUtleUV2ZW50LFxuICAgICAgICAgICAgICAgICAgcUNsaWNrT3V0c2lkZTogZXZ0LnFDbGlja091dHNpZGUsXG4gICAgICAgICAgICAgICAgICBxQW5jaG9ySGFuZGxlZDogZXZ0LnFBbmNob3JIYW5kbGVkLFxuICAgICAgICAgICAgICAgICAgcUNsb25lZEJ5OiBldnQucUNsb25lZEJ5ID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgICAgICAgPyBbIGN0eC51aWQgXVxuICAgICAgICAgICAgICAgICAgICA6IGV2dC5xQ2xvbmVkQnkuY29uY2F0KGN0eC51aWQpXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGN0eC5pbml0aWFsRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICB0YXJnZXQ6IGV2dC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICBldmVudDogY2xvbmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdG9wKGV2dClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgeyBsZWZ0LCB0b3AgfSA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0ge1xuICAgICAgICAgICAgICB4OiBsZWZ0LFxuICAgICAgICAgICAgICB5OiB0b3AsXG4gICAgICAgICAgICAgIHRpbWU6IERhdGUubm93KCksXG4gICAgICAgICAgICAgIG1vdXNlOiBtb3VzZUV2ZW50ID09PSB0cnVlLFxuICAgICAgICAgICAgICBkZXRlY3RlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGlzRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgIGlzRmluYWw6IGZhbHNlLFxuICAgICAgICAgICAgICBsYXN0WDogbGVmdCxcbiAgICAgICAgICAgICAgbGFzdFk6IHRvcFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtb3ZlIChldnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgICAgICAgICAgZGlzdFggPSBwb3MubGVmdCAtIGN0eC5ldmVudC54LFxuICAgICAgICAgICAgICBkaXN0WSA9IHBvcy50b3AgLSBjdHguZXZlbnQueVxuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGJ1Z2d5IGJyb3dzZXIgYmVoYXZpb3IgKGxpa2UgQmxpbmstYmFzZWQgZW5naW5lIG9uZXMgb24gV2luZG93cylcbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSBtb3VzZW1vdmUgZXZlbnQgb2NjdXJzIGV2ZW4gaWYgdGhlcmUncyBubyBtb3ZlbWVudCBhZnRlciBtb3VzZWRvd25cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTE2MTQ2NFxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NzIxMzQxXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcXVhc2FyZnJhbWV3b3JrL3F1YXNhci9pc3N1ZXMvMTA3MjFcbiAgICAgICAgICAgIGlmIChkaXN0WCA9PT0gMCAmJiBkaXN0WSA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4Lmxhc3RFdnQgPSBldnRcblxuICAgICAgICAgICAgY29uc3QgaXNNb3VzZUV2dCA9IGN0eC5ldmVudC5tb3VzZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgIGhhbmRsZUV2ZW50KGV2dCwgaXNNb3VzZUV2dClcblxuICAgICAgICAgICAgICBpZiAobW9kaWZpZXJzLnByZXNlcnZlQ3Vyc29yICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdncmFiYmluZydcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpc01vdXNlRXZ0ID09PSB0cnVlICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub24tc2VsZWN0YWJsZScpXG4gICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uKClcblxuICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gd2l0aERlbGF5ZWRGbiA9PiB7XG4gICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHZvaWQgMFxuXG4gICAgICAgICAgICAgICAgaWYgKG1vZGlmaWVycy5wcmVzZXJ2ZUN1cnNvciAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmN1cnNvciA9ICcnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzTW91c2VFdnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZSgpXG4gICAgICAgICAgICAgICAgICAgICAgd2l0aERlbGF5ZWRGbigpXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAod2l0aERlbGF5ZWRGbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICB3aXRoRGVsYXllZEZuKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kZXRlY3RlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCAhPT0gdHJ1ZSAmJiBoYW5kbGVFdmVudChldnQsIGN0eC5ldmVudC5tb3VzZSlcblxuICAgICAgICAgICAgICBjb25zdCB7IHBheWxvYWQsIHN5bnRoZXRpYyB9ID0gZ2V0Q2hhbmdlcyhldnQsIGN0eCwgZmFsc2UpXG5cbiAgICAgICAgICAgICAgaWYgKHBheWxvYWQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIGlmIChjdHguaGFuZGxlcihwYXlsb2FkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjdHguc3R5bGVDbGVhbnVwID09PSB2b2lkIDAgJiYgY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQoKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdFggPSBwYXlsb2FkLnBvc2l0aW9uLmxlZnRcbiAgICAgICAgICAgICAgICAgIGN0eC5ldmVudC5sYXN0WSA9IHBheWxvYWQucG9zaXRpb24udG9wXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQubGFzdERpciA9IHN5bnRoZXRpYyA9PT0gdHJ1ZSA/IHZvaWQgMCA6IHBheWxvYWQuZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgICBjdHguZXZlbnQuaXNGaXJzdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5hbGwgPT09IHRydWVcbiAgICAgICAgICAgICAgfHwgKGlzTW91c2VFdnQgPT09IHRydWUgJiYgY3R4Lm1vZGlmaWVycy5tb3VzZUFsbERpciA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzdGFydCgpXG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kZXRlY3RlZCA9IHRydWVcbiAgICAgICAgICAgICAgY3R4Lm1vdmUoZXZ0KVxuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgYWJzWCA9IE1hdGguYWJzKGRpc3RYKSxcbiAgICAgICAgICAgICAgYWJzWSA9IE1hdGguYWJzKGRpc3RZKVxuXG4gICAgICAgICAgICBpZiAoYWJzWCAhPT0gYWJzWSkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKGN0eC5kaXJlY3Rpb24uaG9yaXpvbnRhbCA9PT0gdHJ1ZSAmJiBhYnNYID4gYWJzWSlcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBhYnNYIDwgYWJzWSlcbiAgICAgICAgICAgICAgICB8fCAoY3R4LmRpcmVjdGlvbi51cCA9PT0gdHJ1ZSAmJiBhYnNYIDwgYWJzWSAmJiBkaXN0WSA8IDApXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24uZG93biA9PT0gdHJ1ZSAmJiBhYnNYIDwgYWJzWSAmJiBkaXN0WSA+IDApXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZSAmJiBhYnNYID4gYWJzWSAmJiBkaXN0WCA8IDApXG4gICAgICAgICAgICAgICAgfHwgKGN0eC5kaXJlY3Rpb24ucmlnaHQgPT09IHRydWUgJiYgYWJzWCA+IGFic1kgJiYgZGlzdFggPiAwKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjdHguZXZlbnQuZGV0ZWN0ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgY3R4Lm1vdmUoZXZ0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0LCB0cnVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVuZCAoZXZ0LCBhYm9ydCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAoYWJvcnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAoKVxuXG4gICAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgIT09IHRydWUgJiYgY3R4LmluaXRpYWxFdmVudCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY3R4LmluaXRpYWxFdmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChjdHguaW5pdGlhbEV2ZW50LmV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjdHguZXZlbnQuZGV0ZWN0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmlzRmlyc3QgPT09IHRydWUgJiYgY3R4LmhhbmRsZXIoZ2V0Q2hhbmdlcyhldnQgPT09IHZvaWQgMCA/IGN0eC5sYXN0RXZ0IDogZXZ0LCBjdHgpLnBheWxvYWQpXG5cbiAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBnZXRDaGFuZ2VzKGV2dCA9PT0gdm9pZCAwID8gY3R4Lmxhc3RFdnQgOiBldnQsIGN0eCwgdHJ1ZSlcbiAgICAgICAgICAgICAgY29uc3QgZm4gPSAoKSA9PiB7IGN0eC5oYW5kbGVyKHBheWxvYWQpIH1cblxuICAgICAgICAgICAgICBpZiAoY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cChmbilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmbigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0gdm9pZCAwXG4gICAgICAgICAgICBjdHguaW5pdGlhbEV2ZW50ID0gdm9pZCAwXG4gICAgICAgICAgICBjdHgubGFzdEV2dCA9IHZvaWQgMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLl9fcXRvdWNocGFuID0gY3R4XG5cbiAgICAgICAgbW9kaWZpZXJzLm1vdXNlID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSA/ICdDYXB0dXJlJyA6ICcnIH1gIF1cbiAgICAgICAgXSlcblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2htb3ZlJywgJ25vb3AnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgXSlcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZWQgKGVsLCBiaW5kaW5ncykge1xuICAgICAgICBjb25zdCBjdHggPSBlbC5fX3F0b3VjaHBhblxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChiaW5kaW5ncy5vbGRWYWx1ZSAhPT0gYmluZGluZ3MudmFsdWUpIHtcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICAgIGN0eC5oYW5kbGVyID0gYmluZGluZ3MudmFsdWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdHguZGlyZWN0aW9uID0gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKGJpbmRpbmdzLm1vZGlmaWVycylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hwYW5cblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAvLyBlbWl0IHRoZSBlbmQgZXZlbnQgd2hlbiB0aGUgZGlyZWN0aXZlIGlzIGRlc3Ryb3llZCB3aGlsZSBhY3RpdmVcbiAgICAgICAgICAvLyB0aGlzIGlzIG9ubHkgbmVlZGVkIGluIFRvdWNoUGFuIGJlY2F1c2UgdGhlIHJlc3Qgb2YgdGhlIHRvdWNoIGRpcmVjdGl2ZXMgZG8gbm90IGVtaXQgYW4gZW5kIGV2ZW50XG4gICAgICAgICAgLy8gdGhlIGNvbmRpdGlvbiBpcyBhbHNvIGNoZWNrZWQgaW4gdGhlIHN0YXJ0IG9mIGZ1bmN0aW9uIGJ1dCB3ZSBhdm9pZCB0aGUgY2FsbFxuICAgICAgICAgIGN0eC5ldmVudCAhPT0gdm9pZCAwICYmIGN0eC5lbmQoKVxuXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAnbWFpbicpXG4gICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG5cbiAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcbiAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwICE9PSB2b2lkIDAgJiYgY3R4LnN0eWxlQ2xlYW51cCgpXG5cbiAgICAgICAgICBkZWxldGUgZWwuX19xdG91Y2hwYW5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsImltcG9ydCB7IGgsIHdpdGhEaXJlY3RpdmVzLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZUhpc3RvcnkgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtaGlzdG9yeS5qcydcbmltcG9ydCB1c2VNb2RlbFRvZ2dsZSwgeyB1c2VNb2RlbFRvZ2dsZVByb3BzLCB1c2VNb2RlbFRvZ2dsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzJ1xuaW1wb3J0IHVzZVByZXZlbnRTY3JvbGwgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcHJldmVudC1zY3JvbGwuanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10aW1lb3V0LmpzJ1xuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IFRvdWNoUGFuIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvVG91Y2hQYW4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IGhTbG90LCBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmNvbnN0IGR1cmF0aW9uID0gMTUwXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRHJhd2VyJyxcblxuICBpbmhlcml0QXR0cnM6IGZhbHNlLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlTW9kZWxUb2dnbGVQcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBzaWRlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnbGVmdCcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnbGVmdCcsICdyaWdodCcgXS5pbmNsdWRlcyh2KVxuICAgIH0sXG5cbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMzAwXG4gICAgfSxcblxuICAgIG1pbmk6IEJvb2xlYW4sXG4gICAgbWluaVRvT3ZlcmxheTogQm9vbGVhbixcbiAgICBtaW5pV2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDU3XG4gICAgfSxcblxuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDEwMjNcbiAgICB9LFxuICAgIHNob3dJZkFib3ZlOiBCb29sZWFuLFxuXG4gICAgYmVoYXZpb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBbICdkZWZhdWx0JywgJ2Rlc2t0b3AnLCAnbW9iaWxlJyBdLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnXG4gICAgfSxcblxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGVsZXZhdGVkOiBCb29sZWFuLFxuXG4gICAgb3ZlcmxheTogQm9vbGVhbixcbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIG5vU3dpcGVPcGVuOiBCb29sZWFuLFxuICAgIG5vU3dpcGVDbG9zZTogQm9vbGVhbixcbiAgICBub1N3aXBlQmFja2Ryb3A6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogW1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlRW1pdHMsXG4gICAgJ29uLWxheW91dCcsICdtaW5pLXN0YXRlJ1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IHZtXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcbiAgICBjb25zdCB7IHByZXZlbnRCb2R5U2Nyb2xsIH0gPSB1c2VQcmV2ZW50U2Nyb2xsKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignUURyYXdlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICB9KVxuXG4gICAgbGV0IGxhc3REZXNrdG9wU3RhdGUsIHRpbWVyTWluaSwgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXJcblxuICAgIGNvbnN0IGJlbG93QnJlYWtwb2ludCA9IHJlZihcbiAgICAgIHByb3BzLmJlaGF2aW9yID09PSAnbW9iaWxlJ1xuICAgICAgfHwgKHByb3BzLmJlaGF2aW9yICE9PSAnZGVza3RvcCcgJiYgJGxheW91dC50b3RhbFdpZHRoLnZhbHVlIDw9IHByb3BzLmJyZWFrcG9pbnQpXG4gICAgKVxuXG4gICAgY29uc3QgaXNNaW5pID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1pbmkgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlICE9PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3Qgc2l6ZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGlzTWluaS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLm1pbmlXaWR0aFxuICAgICAgICA6IHByb3BzLndpZHRoXG4gICAgKSlcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoXG4gICAgICBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBoaWRlT25Sb3V0ZUNoYW5nZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlXG4gICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IG9uU2NyZWVuT3ZlcmxheS52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTaG93IChldnQsIG5vRXZlbnQpIHtcbiAgICAgIGFkZFRvSGlzdG9yeSgpXG5cbiAgICAgIGV2dCAhPT0gZmFsc2UgJiYgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGFwcGx5UG9zaXRpb24oMClcblxuICAgICAgaWYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvdGhlckluc3RhbmNlID0gJGxheW91dC5pbnN0YW5jZXNbIG90aGVyU2lkZS52YWx1ZSBdXG4gICAgICAgIGlmIChvdGhlckluc3RhbmNlICE9PSB2b2lkIDAgJiYgb3RoZXJJbnN0YW5jZS5iZWxvd0JyZWFrcG9pbnQgPT09IHRydWUpIHtcbiAgICAgICAgICBvdGhlckluc3RhbmNlLmhpZGUoZmFsc2UpXG4gICAgICAgIH1cblxuICAgICAgICBhcHBseUJhY2tkcm9wKDEpXG4gICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgJiYgcHJldmVudEJvZHlTY3JvbGwodHJ1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICAgIGV2dCAhPT0gZmFsc2UgJiYgc2V0U2Nyb2xsYWJsZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZXZ0ICE9PSBmYWxzZSAmJiBzZXRTY3JvbGxhYmxlKHRydWUpXG4gICAgICAgIG5vRXZlbnQgIT09IHRydWUgJiYgZW1pdCgnc2hvdycsIGV2dClcbiAgICAgIH0sIGR1cmF0aW9uKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUhpZGUgKGV2dCwgbm9FdmVudCkge1xuICAgICAgcmVtb3ZlRnJvbUhpc3RvcnkoKVxuXG4gICAgICBldnQgIT09IGZhbHNlICYmICRsYXlvdXQuYW5pbWF0ZSgpXG5cbiAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiBzaXplLnZhbHVlKVxuXG4gICAgICBjbGVhbnVwKClcblxuICAgICAgbm9FdmVudCAhPT0gdHJ1ZSAmJiByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbWl0KCdoaWRlJywgZXZ0KVxuICAgICAgfSwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaG93LCBoaWRlIH0gPSB1c2VNb2RlbFRvZ2dsZSh7XG4gICAgICBzaG93aW5nLFxuICAgICAgaGlkZU9uUm91dGVDaGFuZ2UsXG4gICAgICBoYW5kbGVTaG93LFxuICAgICAgaGFuZGxlSGlkZVxuICAgIH0pXG5cbiAgICBjb25zdCB7IGFkZFRvSGlzdG9yeSwgcmVtb3ZlRnJvbUhpc3RvcnkgfSA9IHVzZUhpc3Rvcnkoc2hvd2luZywgaGlkZSwgaGlkZU9uUm91dGVDaGFuZ2UpXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcbiAgICAgIGJlbG93QnJlYWtwb2ludCxcbiAgICAgIGhpZGVcbiAgICB9XG5cbiAgICBjb25zdCByaWdodFNpZGUgPSBjb21wdXRlZCgoKSA9PiBwcm9wcy5zaWRlID09PSAncmlnaHQnKVxuXG4gICAgY29uc3Qgc3RhdGVEaXJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgKCRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSAqIChyaWdodFNpZGUudmFsdWUgPT09IHRydWUgPyAxIDogLTEpXG4gICAgKVxuXG4gICAgY29uc3QgZmxhZ0JhY2tkcm9wQmcgPSByZWYoMClcbiAgICBjb25zdCBmbGFnUGFubmluZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBmbGFnTWluaUFuaW1hdGUgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgZmxhZ0NvbnRlbnRQb3NpdGlvbiA9IHJlZiggLy8gc3RhcnRpbmcgd2l0aCBcImhpZGRlblwiIGZvciBTU1JcbiAgICAgIHNpemUudmFsdWUgKiBzdGF0ZURpcmVjdGlvbi52YWx1ZVxuICAgIClcblxuICAgIGNvbnN0IG90aGVyU2lkZSA9IGNvbXB1dGVkKCgpID0+IChyaWdodFNpZGUudmFsdWUgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnKSlcbiAgICBjb25zdCBvZmZzZXQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2UgJiYgcHJvcHMub3ZlcmxheSA9PT0gZmFsc2VcbiAgICAgICAgPyAocHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUudmFsdWUpXG4gICAgICAgIDogMFxuICAgICkpXG5cbiAgICBjb25zdCBmaXhlZCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSB0cnVlXG4gICAgICB8fCBwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlXG4gICAgICB8fCAkbGF5b3V0LnZpZXcudmFsdWUuaW5kZXhPZihyaWdodFNpZGUudmFsdWUgPyAnUicgOiAnTCcpID4gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgPT09IHRydWUgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBvbkxheW91dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZVxuICAgIClcblxuICAgIGNvbnN0IG9uU2NyZWVuT3ZlcmxheSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5vdmVybGF5ID09PSB0cnVlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgKVxuXG4gICAgY29uc3QgYmFja2Ryb3BDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAnZnVsbHNjcmVlbiBxLWRyYXdlcl9fYmFja2Ryb3AnXG4gICAgICArIChzaG93aW5nLnZhbHVlID09PSBmYWxzZSAmJiBmbGFnUGFubmluZy52YWx1ZSA9PT0gZmFsc2UgPyAnIGhpZGRlbicgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBiYWNrZHJvcFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYmEoMCwwLDAsJHsgZmxhZ0JhY2tkcm9wQmcudmFsdWUgKiAwLjQgfSlgXG4gICAgfSkpXG5cbiAgICBjb25zdCBoZWFkZXJTbG90ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5yb3dzLnZhbHVlLnRvcFsgMiBdID09PSAncidcbiAgICAgICAgOiAkbGF5b3V0LnJvd3MudmFsdWUudG9wWyAwIF0gPT09ICdsJ1xuICAgICkpXG5cbiAgICBjb25zdCBmb290ZXJTbG90ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcmlnaHRTaWRlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbVsgMiBdID09PSAncidcbiAgICAgICAgOiAkbGF5b3V0LnJvd3MudmFsdWUuYm90dG9tWyAwIF0gPT09ICdsJ1xuICAgICkpXG5cbiAgICBjb25zdCBhYm92ZVN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3NzID0ge31cblxuICAgICAgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlICYmIGhlYWRlclNsb3QudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy50b3AgPSBgJHsgJGxheW91dC5oZWFkZXIub2Zmc2V0IH1weGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy50b3AgPSBgJHsgJGxheW91dC5oZWFkZXIuc2l6ZSB9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlICYmIGZvb3RlclNsb3QudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy5ib3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIub2Zmc2V0IH1weGBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgkbGF5b3V0LmZvb3Rlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNzcy5ib3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIuc2l6ZSB9cHhgXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgICB3aWR0aDogYCR7IHNpemUudmFsdWUgfXB4YCxcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgkeyBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlIH1weClgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBzdHlsZVxuICAgICAgICA6IE9iamVjdC5hc3NpZ24oc3R5bGUsIGFib3ZlU3R5bGUudmFsdWUpXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRlbnRDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1kcmF3ZXJfX2NvbnRlbnQgZml0ICdcbiAgICAgICsgKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgPyAnc2Nyb2xsJyA6ICdvdmVyZmxvdy1hdXRvJylcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWRyYXdlciBxLWRyYXdlci0tJHsgcHJvcHMuc2lkZSB9YFxuICAgICAgKyAoZmxhZ01pbmlBbmltYXRlLnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tbWluaS1hbmltYXRlJyA6ICcnKVxuICAgICAgKyAocHJvcHMuYm9yZGVyZWQgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1ib3JkZXJlZCcgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIG5vLXRyYW5zaXRpb24nXG4gICAgICAgICAgOiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycpXG4gICAgICApXG4gICAgICArIChcbiAgICAgICAgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIGZpeGVkIHEtZHJhd2VyLS1vbi10b3AgcS1kcmF3ZXItLW1vYmlsZSBxLWRyYXdlci0tdG9wLXBhZGRpbmcnXG4gICAgICAgICAgOiBgIHEtZHJhd2VyLS0keyBpc01pbmkudmFsdWUgPT09IHRydWUgPyAnbWluaScgOiAnc3RhbmRhcmQnIH1gXG4gICAgICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgfHwgb25MYXlvdXQudmFsdWUgIT09IHRydWUgPyAnIGZpeGVkJyA6ICcnKVxuICAgICAgICAgICsgKHByb3BzLm92ZXJsYXkgPT09IHRydWUgfHwgcHJvcHMubWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLW9uLXRvcCcgOiAnJylcbiAgICAgICAgICArIChoZWFkZXJTbG90LnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tdG9wLXBhZGRpbmcnIDogJycpXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgb3BlbkRpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIHByb3BzLm5vU3dpcGVPcGVuICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHByb3BzLnNpZGUgOiBvdGhlclNpZGUudmFsdWVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25PcGVuUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250ZW50Q2xvc2VEaXJlY3RpdmUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICAvLyBpZiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9Td2lwZUNsb3NlICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IG90aGVyU2lkZS52YWx1ZSA6IHByb3BzLnNpZGVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25DbG9zZVBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgY29uc3QgYmFja2Ryb3BDbG9zZURpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9Td2lwZUJhY2tkcm9wICE9PSB0cnVlXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IG90aGVyU2lkZS52YWx1ZSA6IHByb3BzLnNpZGVcblxuICAgICAgcmV0dXJuIFsgW1xuICAgICAgICBUb3VjaFBhbixcbiAgICAgICAgb25DbG9zZVBhbixcbiAgICAgICAgdm9pZCAwLFxuICAgICAgICB7XG4gICAgICAgICAgWyBkaXIgXTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZTogdHJ1ZSxcbiAgICAgICAgICBtb3VzZUFsbERpcjogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdIF1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQmVsb3dCcmVha3BvaW50ICgpIHtcbiAgICAgIHVwZGF0ZUxvY2FsKGJlbG93QnJlYWtwb2ludCwgKFxuICAgICAgICBwcm9wcy5iZWhhdmlvciA9PT0gJ21vYmlsZSdcbiAgICAgICAgfHwgKHByb3BzLmJlaGF2aW9yICE9PSAnZGVza3RvcCcgJiYgJGxheW91dC50b3RhbFdpZHRoLnZhbHVlIDw9IHByb3BzLmJyZWFrcG9pbnQpXG4gICAgICApKVxuICAgIH1cblxuICAgIHdhdGNoKGJlbG93QnJlYWtwb2ludCwgdmFsID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHsgLy8gZnJvbSBsZyB0byB4c1xuICAgICAgICBsYXN0RGVza3RvcFN0YXRlID0gc2hvd2luZy52YWx1ZVxuICAgICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGhpZGUoZmFsc2UpXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgcHJvcHMub3ZlcmxheSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcHJvcHMuYmVoYXZpb3IgIT09ICdtb2JpbGUnXG4gICAgICAgICYmIGxhc3REZXNrdG9wU3RhdGUgIT09IGZhbHNlXG4gICAgICApIHsgLy8gZnJvbSB4cyB0byBsZ1xuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGFwcGx5UG9zaXRpb24oMClcbiAgICAgICAgICBhcHBseUJhY2tkcm9wKDApXG4gICAgICAgICAgY2xlYW51cCgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgc2hvdyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zaWRlLCAobmV3U2lkZSwgb2xkU2lkZSkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaW5zdGFuY2VzWyBvbGRTaWRlIF0gPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzWyBvbGRTaWRlIF0gPSB2b2lkIDBcbiAgICAgICAgJGxheW91dFsgb2xkU2lkZSBdLnNwYWNlID0gZmFsc2VcbiAgICAgICAgJGxheW91dFsgb2xkU2lkZSBdLm9mZnNldCA9IDBcbiAgICAgIH1cblxuICAgICAgJGxheW91dC5pbnN0YW5jZXNbIG5ld1NpZGUgXSA9IGluc3RhbmNlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0uc2l6ZSA9IHNpemUudmFsdWVcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5zcGFjZSA9IG9uTGF5b3V0LnZhbHVlXG4gICAgICAkbGF5b3V0WyBuZXdTaWRlIF0ub2Zmc2V0ID0gb2Zmc2V0LnZhbHVlXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQudG90YWxXaWR0aCwgKCkgPT4ge1xuICAgICAgaWYgKCRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUgfHwgZG9jdW1lbnQucVNjcm9sbFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVCZWxvd0JyZWFrcG9pbnQoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IHByb3BzLmJlaGF2aW9yICsgcHJvcHMuYnJlYWtwb2ludCxcbiAgICAgIHVwZGF0ZUJlbG93QnJlYWtwb2ludFxuICAgIClcblxuICAgIHdhdGNoKCRsYXlvdXQuaXNDb250YWluZXIsIHZhbCA9PiB7XG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByZXZlbnRCb2R5U2Nyb2xsKHZhbCAhPT0gdHJ1ZSlcbiAgICAgIHZhbCA9PT0gdHJ1ZSAmJiB1cGRhdGVCZWxvd0JyZWFrcG9pbnQoKVxuICAgIH0pXG5cbiAgICB3YXRjaCgkbGF5b3V0LnNjcm9sbGJhcldpZHRoLCAoKSA9PiB7XG4gICAgICBhcHBseVBvc2l0aW9uKHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAwIDogdm9pZCAwKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7IHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgdmFsKSB9KVxuXG4gICAgd2F0Y2gob25MYXlvdXQsIHZhbCA9PiB7XG4gICAgICBlbWl0KCdvbi1sYXlvdXQnLCB2YWwpXG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaChyaWdodFNpZGUsICgpID0+IHsgYXBwbHlQb3NpdGlvbigpIH0pXG5cbiAgICB3YXRjaChzaXplLCB2YWwgPT4ge1xuICAgICAgYXBwbHlQb3NpdGlvbigpXG4gICAgICB1cGRhdGVTaXplT25MYXlvdXQocHJvcHMubWluaVRvT3ZlcmxheSwgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5taW5pVG9PdmVybGF5LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHZhbCwgc2l6ZS52YWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gJHEubGFuZy5ydGwsICgpID0+IHsgYXBwbHlQb3NpdGlvbigpIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5taW5pLCAoKSA9PiB7XG4gICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBhbmltYXRlTWluaSgpXG4gICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKGlzTWluaSwgdmFsID0+IHsgZW1pdCgnbWluaS1zdGF0ZScsIHZhbCkgfSlcblxuICAgIGZ1bmN0aW9uIGFwcGx5UG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgcG9zaXRpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gMCA6IHNpemUudmFsdWVcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IE1hdGguYWJzKHBvc2l0aW9uKSA9PT0gc2l6ZS52YWx1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcG9zaXRpb24gKz0gc3RhdGVEaXJlY3Rpb24udmFsdWUgKiAkbGF5b3V0LnNjcm9sbGJhcldpZHRoLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJhY2tkcm9wICh4KSB7XG4gICAgICBmbGFnQmFja2Ryb3BCZy52YWx1ZSA9IHhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxhYmxlICh2KSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB2ID09PSB0cnVlXG4gICAgICAgID8gJ3JlbW92ZSdcbiAgICAgICAgOiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdhZGQnIDogJycpXG5cbiAgICAgIGFjdGlvbiAhPT0gJycgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3RbIGFjdGlvbiBdKCdxLWJvZHktLWRyYXdlci10b2dnbGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVNaW5pICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lck1pbmkpXG5cbiAgICAgIGlmICh2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgLy8gbmVlZCB0byBzcGVlZCBpdCB1cCBhbmQgYXBwbHkgaXQgaW1tZWRpYXRlbHksXG4gICAgICAgIC8vIGV2ZW4gZmFzdGVyIHRoYW4gVnVlJ3MgbmV4dFRpY2shXG4gICAgICAgIHZtLnByb3h5LiRlbC5jbGFzc0xpc3QuYWRkKCdxLWRyYXdlci0tbWluaS1hbmltYXRlJylcbiAgICAgIH1cblxuICAgICAgZmxhZ01pbmlBbmltYXRlLnZhbHVlID0gdHJ1ZVxuICAgICAgdGltZXJNaW5pID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGlmICh2bSAmJiB2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgICB2bS5wcm94eS4kZWwuY2xhc3NMaXN0LnJlbW92ZSgncS1kcmF3ZXItLW1pbmktYW5pbWF0ZScpXG4gICAgICAgIH1cbiAgICAgIH0sIDE1MClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk9wZW5QYW4gKGV2dCkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbWlnaHQgY2FwdHVyZSBhbmQgdHJpZ2dlciB0aGlzXG4gICAgICAgIC8vIGV2ZW4gaWYgRHJhd2VyIGhhcyBqdXN0IGJlZW4gb3BlbmVkIChidXQgYW5pbWF0aW9uIGlzIHN0aWxsIHBlbmRpbmcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICB3aWR0aCA9IHNpemUudmFsdWUsXG4gICAgICAgIHBvc2l0aW9uID0gYmV0d2VlbihldnQuZGlzdGFuY2UueCwgMCwgd2lkdGgpXG5cbiAgICAgIGlmIChldnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBwb3NpdGlvbiA+PSBNYXRoLm1pbig3NSwgd2lkdGgpXG5cbiAgICAgICAgaWYgKG9wZW5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNob3coKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiB3aWR0aClcbiAgICAgICAgfVxuXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGFwcGx5UG9zaXRpb24oXG4gICAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHJpZ2h0U2lkZS52YWx1ZSAhPT0gdHJ1ZSA6IHJpZ2h0U2lkZS52YWx1ZSlcbiAgICAgICAgICA/IE1hdGgubWF4KHdpZHRoIC0gcG9zaXRpb24sIDApXG4gICAgICAgICAgOiBNYXRoLm1pbigwLCBwb3NpdGlvbiAtIHdpZHRoKVxuICAgICAgKVxuICAgICAgYXBwbHlCYWNrZHJvcChcbiAgICAgICAgYmV0d2Vlbihwb3NpdGlvbiAvIHdpZHRoLCAwLCAxKVxuICAgICAgKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbG9zZVBhbiAoZXZ0KSB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyBzb21lIGJyb3dzZXJzIG1pZ2h0IGNhcHR1cmUgYW5kIHRyaWdnZXIgdGhpc1xuICAgICAgICAvLyBldmVuIGlmIERyYXdlciBoYXMganVzdCBiZWVuIGNsb3NlZCAoYnV0IGFuaW1hdGlvbiBpcyBzdGlsbCBwZW5kaW5nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBzaXplLnZhbHVlLFxuICAgICAgICBkaXIgPSBldnQuZGlyZWN0aW9uID09PSBwcm9wcy5zaWRlLFxuICAgICAgICBwb3NpdGlvbiA9ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGRpciAhPT0gdHJ1ZSA6IGRpcilcbiAgICAgICAgICA/IGJldHdlZW4oZXZ0LmRpc3RhbmNlLngsIDAsIHdpZHRoKVxuICAgICAgICAgIDogMFxuXG4gICAgICBpZiAoZXZ0LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gTWF0aC5hYnMocG9zaXRpb24pIDwgTWF0aC5taW4oNzUsIHdpZHRoKVxuXG4gICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICBhcHBseUJhY2tkcm9wKGJldHdlZW4oMSAtIHBvc2l0aW9uIC8gd2lkdGgsIDAsIDEpKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChmYWxzZSlcbiAgICAgIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUocHJvcHMuc2lkZSwgcHJvcCwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsIChwcm9wLCB2YWwpIHtcbiAgICAgIGlmIChwcm9wLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemVPbkxheW91dCAobWluaVRvT3ZlcmxheSwgc2l6ZSkge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgbWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUpXG4gICAgfVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IGluc3RhbmNlXG4gICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIG9uTGF5b3V0LnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWVcbiAgICAgICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGVtaXQoJ29uLWxheW91dCcsIG9uTGF5b3V0LnZhbHVlKVxuICAgICAgZW1pdCgnbWluaS1zdGF0ZScsIGlzTWluaS52YWx1ZSlcblxuICAgICAgbGFzdERlc2t0b3BTdGF0ZSA9IHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlXG5cbiAgICAgIGNvbnN0IGZuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gaGFuZGxlU2hvdyA6IGhhbmRsZUhpZGVcbiAgICAgICAgYWN0aW9uKGZhbHNlLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBpZiAoJGxheW91dC50b3RhbFdpZHRoLnZhbHVlICE9PSAwKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGFsbCBjb21wdXRlZCBwcm9wZXJ0aWVzXG4gICAgICAgIC8vIGhhdmUgYmVlbiB1cGRhdGVkIGJlZm9yZSBjYWxsaW5nIGhhbmRsZVNob3cvaGFuZGxlSGlkZSgpXG4gICAgICAgIG5leHRUaWNrKGZuKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgPSB3YXRjaCgkbGF5b3V0LnRvdGFsV2lkdGgsICgpID0+IHtcbiAgICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIoKVxuICAgICAgICBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlciA9IHZvaWQgMFxuXG4gICAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSBmYWxzZSAmJiBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgc2hvdyhmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBmbigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlciAhPT0gdm9pZCAwICYmIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyKClcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lck1pbmkpXG5cbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgY2xlYW51cCgpXG5cbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlc1sgcHJvcHMuc2lkZSBdID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlc1sgcHJvcHMuc2lkZSBdID0gdm9pZCAwXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIGZhbHNlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBbXVxuXG4gICAgICBpZiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHByb3BzLm5vU3dpcGVPcGVuID09PSBmYWxzZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICAgIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBrZXk6ICdvcGVuJyxcbiAgICAgICAgICAgICAgY2xhc3M6IGBxLWRyYXdlcl9fb3BlbmVyIGZpeGVkLSR7IHByb3BzLnNpZGUgfWAsXG4gICAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBvcGVuRGlyZWN0aXZlLnZhbHVlXG4gICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgICBoRGlyKFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogJ2JhY2tkcm9wJyxcbiAgICAgICAgICAgICAgY2xhc3M6IGJhY2tkcm9wQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHN0eWxlOiBiYWNrZHJvcFN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6IGhpZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2b2lkIDAsXG4gICAgICAgICAgICAnYmFja2Ryb3AnLFxuICAgICAgICAgICAgcHJvcHMubm9Td2lwZUJhY2tkcm9wICE9PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgICAoKSA9PiBiYWNrZHJvcENsb3NlRGlyZWN0aXZlLnZhbHVlXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1pbmkgPSBpc01pbmkudmFsdWUgPT09IHRydWUgJiYgc2xvdHMubWluaSAhPT0gdm9pZCAwXG4gICAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgLi4uYXR0cnMsXG4gICAgICAgICAga2V5OiAnJyArIG1pbmksIC8vIHJlcXVpcmVkIG90aGVyd2lzZSBWdWUgd2lsbCBub3QgZGlmZiBjb3JyZWN0bHlcbiAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgY29udGVudENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgYXR0cnMuY2xhc3NcbiAgICAgICAgICBdXG4gICAgICAgIH0sIG1pbmkgPT09IHRydWVcbiAgICAgICAgICA/IHNsb3RzLm1pbmkoKVxuICAgICAgICAgIDogaFNsb3Qoc2xvdHMuZGVmYXVsdClcbiAgICAgICAgKVxuICAgICAgXVxuXG4gICAgICBpZiAocHJvcHMuZWxldmF0ZWQgPT09IHRydWUgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250ZW50LnB1c2goXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY2hpbGQucHVzaChcbiAgICAgICAgaERpcihcbiAgICAgICAgICAnYXNpZGUnLFxuICAgICAgICAgIHsgcmVmOiAnY29udGVudCcsIGNsYXNzOiBjbGFzc2VzLnZhbHVlLCBzdHlsZTogc3R5bGUudmFsdWUgfSxcbiAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICdjb250ZW50Y2xvc2UnLFxuICAgICAgICAgIHByb3BzLm5vU3dpcGVDbG9zZSAhPT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUsXG4gICAgICAgICAgKCkgPT4gY29udGVudENsb3NlRGlyZWN0aXZlLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWRyYXdlci1jb250YWluZXInIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkLCBwcm92aWRlLCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgcGFnZUNvbnRhaW5lcktleSwgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVBhZ2VDb250YWluZXInLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignUVBhZ2VDb250YWluZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgfSlcblxuICAgIHByb3ZpZGUocGFnZUNvbnRhaW5lcktleSwgdHJ1ZSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY3NzID0ge31cblxuICAgICAgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nVG9wID0gYCR7ICRsYXlvdXQuaGVhZGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQucmlnaHQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyBgcGFkZGluZyR7ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ0xlZnQnIDogJ1JpZ2h0JyB9YCBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzLnBhZGRpbmdCb3R0b20gPSBgJHsgJGxheW91dC5mb290ZXIuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAoJGxheW91dC5sZWZ0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdSaWdodCcgOiAnTGVmdCcgfWAgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1wYWdlLWNvbnRhaW5lcicsXG4gICAgICBzdHlsZTogc3R5bGUudmFsdWVcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24gfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUZvb3RlcicsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIH0sXG4gICAgcmV2ZWFsOiBCb29sZWFuLFxuICAgIGJvcmRlcmVkOiBCb29sZWFuLFxuICAgIGVsZXZhdGVkOiBCb29sZWFuLFxuXG4gICAgaGVpZ2h0SGludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNTBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3JldmVhbCcsICdmb2N1c2luJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksICgpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FGb290ZXIgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUUxheW91dCcpXG4gICAgfSlcblxuICAgIGNvbnN0IHNpemUgPSByZWYocGFyc2VJbnQocHJvcHMuaGVpZ2h0SGludCwgMTApKVxuICAgIGNvbnN0IHJldmVhbGVkID0gcmVmKHRydWUpXG4gICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gcmVmKFxuICAgICAgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uLnZhbHVlID09PSB0cnVlIHx8ICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAwXG4gICAgICAgIDogd2luZG93LmlubmVySGVpZ2h0XG4gICAgKVxuXG4gICAgY29uc3QgZml4ZWQgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgICB8fCAkbGF5b3V0LnZpZXcudmFsdWUuaW5kZXhPZignRicpID4gLTFcbiAgICAgIHx8ICgkcS5wbGF0Zm9ybS5pcy5pb3MgJiYgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJGxheW91dC5jb250YWluZXJIZWlnaHQudmFsdWVcbiAgICAgICAgOiB3aW5kb3dIZWlnaHQudmFsdWVcbiAgICApKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gJGxheW91dC5zY3JvbGwudmFsdWUucG9zaXRpb24gKyBjb250YWluZXJIZWlnaHQudmFsdWUgKyBzaXplLnZhbHVlIC0gJGxheW91dC5oZWlnaHQudmFsdWVcbiAgICAgIHJldHVybiBvZmZzZXQgPiAwID8gb2Zmc2V0IDogMFxuICAgIH0pXG5cbiAgICBjb25zdCBoaWRkZW4gPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSB8fCAoZml4ZWQudmFsdWUgPT09IHRydWUgJiYgcmV2ZWFsZWQudmFsdWUgIT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgcmV2ZWFsT25Gb2N1cyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIGhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5yZXZlYWwgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWZvb3RlciBxLWxheW91dF9fc2VjdGlvbi0tbWFyZ2luYWwgJ1xuICAgICAgKyAoZml4ZWQudmFsdWUgPT09IHRydWUgPyAnZml4ZWQnIDogJ2Fic29sdXRlJykgKyAnLWJvdHRvbSdcbiAgICAgICsgKHByb3BzLmJvcmRlcmVkID09PSB0cnVlID8gJyBxLWZvb3Rlci0tYm9yZGVyZWQnIDogJycpXG4gICAgICArIChoaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtZm9vdGVyLS1oaWRkZW4nIDogJycpXG4gICAgICArIChcbiAgICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAgID8gJyBxLWxheW91dC0tcHJldmVudC1mb2N1cycgKyAoZml4ZWQudmFsdWUgIT09IHRydWUgPyAnIGhpZGRlbicgOiAnJylcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLmJvdHRvbSxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2Zvb3RlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJldmVhbGVkICgpIHtcbiAgICAgIGlmIChwcm9wcy5yZXZlYWwgIT09IHRydWUpIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3QgeyBkaXJlY3Rpb24sIHBvc2l0aW9uLCBpbmZsZWN0aW9uUG9pbnQgfSA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlXG5cbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCAoXG4gICAgICAgIGRpcmVjdGlvbiA9PT0gJ3VwJ1xuICAgICAgICB8fCBwb3NpdGlvbiAtIGluZmxlY3Rpb25Qb2ludCA8IDEwMFxuICAgICAgICB8fCAkbGF5b3V0LmhlaWdodC52YWx1ZSAtIGNvbnRhaW5lckhlaWdodC52YWx1ZSAtIHBvc2l0aW9uIC0gc2l6ZS52YWx1ZSA8IDMwMFxuICAgICAgKSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzaW4gKGV2dCkge1xuICAgICAgaWYgKHJldmVhbE9uRm9jdXMudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2ZvY3VzaW4nLCBldnQpXG4gICAgfVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCB2YWwpXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgfSlcblxuICAgIHdhdGNoKG9mZnNldCwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0JywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5yZXZlYWwsIHZhbCA9PiB7XG4gICAgICB2YWwgPT09IGZhbHNlICYmIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIH0pXG5cbiAgICB3YXRjaChyZXZlYWxlZCwgdmFsID0+IHtcbiAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICBlbWl0KCdyZXZlYWwnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKFsgc2l6ZSwgJGxheW91dC5zY3JvbGwsICRsYXlvdXQuaGVpZ2h0IF0sIHVwZGF0ZVJldmVhbGVkKVxuXG4gICAgd2F0Y2goKCkgPT4gJHEuc2NyZWVuLmhlaWdodCwgdmFsID0+IHtcbiAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgIT09IHRydWUgJiYgdXBkYXRlTG9jYWwod2luZG93SGVpZ2h0LCB2YWwpXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmZvb3RlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmZvb3RlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIF0pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdmb290ZXInLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIG9uRm9jdXNpblxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0LCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBnZXRIb3Jpem9udGFsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzLCBub29wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5cbmNvbnN0IHsgcGFzc2l2ZSB9ID0gbGlzdGVuT3B0c1xuY29uc3QgYXhpc1ZhbHVlcyA9IFsgJ2JvdGgnLCAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCcgXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNjcm9sbE9ic2VydmVyJyxcblxuICBwcm9wczoge1xuICAgIGF4aXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBheGlzVmFsdWVzLmluY2x1ZGVzKHYpLFxuICAgICAgZGVmYXVsdDogJ3ZlcnRpY2FsJ1xuICAgIH0sXG5cbiAgICBkZWJvdW5jZTogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Njcm9sbCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3Qgc2Nyb2xsID0ge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwXG4gICAgICB9LFxuXG4gICAgICBkaXJlY3Rpb246ICdkb3duJyxcbiAgICAgIGRpcmVjdGlvbkNoYW5nZWQ6IGZhbHNlLFxuXG4gICAgICBkZWx0YToge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH0sXG5cbiAgICAgIGluZmxlY3Rpb25Qb2ludDoge1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY2xlYXJUaW1lciA9IG51bGwsIGxvY2FsU2Nyb2xsVGFyZ2V0LCBwYXJlbnRFbFxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCAoKSA9PiB7XG4gICAgICB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgICBjb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBlbWl0RXZlbnQgKCkge1xuICAgICAgY2xlYXJUaW1lciAhPT0gbnVsbCAmJiBjbGVhclRpbWVyKClcblxuICAgICAgY29uc3QgdG9wID0gTWF0aC5tYXgoMCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCkpXG4gICAgICBjb25zdCBsZWZ0ID0gZ2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBjb25zdCBkZWx0YSA9IHtcbiAgICAgICAgdG9wOiB0b3AgLSBzY3JvbGwucG9zaXRpb24udG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0IC0gc2Nyb2xsLnBvc2l0aW9uLmxlZnRcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICAocHJvcHMuYXhpcyA9PT0gJ3ZlcnRpY2FsJyAmJiBkZWx0YS50b3AgPT09IDApXG4gICAgICAgIHx8IChwcm9wcy5heGlzID09PSAnaG9yaXpvbnRhbCcgJiYgZGVsdGEubGVmdCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3QgY3VyRGlyID0gTWF0aC5hYnMoZGVsdGEudG9wKSA+PSBNYXRoLmFicyhkZWx0YS5sZWZ0KVxuICAgICAgICA/IChkZWx0YS50b3AgPCAwID8gJ3VwJyA6ICdkb3duJylcbiAgICAgICAgOiAoZGVsdGEubGVmdCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnKVxuXG4gICAgICBzY3JvbGwucG9zaXRpb24gPSB7IHRvcCwgbGVmdCB9XG4gICAgICBzY3JvbGwuZGlyZWN0aW9uQ2hhbmdlZCA9IHNjcm9sbC5kaXJlY3Rpb24gIT09IGN1ckRpclxuICAgICAgc2Nyb2xsLmRlbHRhID0gZGVsdGFcblxuICAgICAgaWYgKHNjcm9sbC5kaXJlY3Rpb25DaGFuZ2VkID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPSBjdXJEaXJcbiAgICAgICAgc2Nyb2xsLmluZmxlY3Rpb25Qb2ludCA9IHNjcm9sbC5wb3NpdGlvblxuICAgICAgfVxuXG4gICAgICBlbWl0KCdzY3JvbGwnLCB7IC4uLnNjcm9sbCB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChwYXJlbnRFbCwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJpZ2dlciwgcGFzc2l2ZSlcbiAgICAgIHRyaWdnZXIodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmNvbmZpZ3VyZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgIT09IHZvaWQgMCkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmlnZ2VyLCBwYXNzaXZlKVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIgKGltbWVkaWF0ZWx5KSB7XG4gICAgICBpZiAoaW1tZWRpYXRlbHkgPT09IHRydWUgfHwgcHJvcHMuZGVib3VuY2UgPT09IDAgfHwgcHJvcHMuZGVib3VuY2UgPT09ICcwJykge1xuICAgICAgICBlbWl0RXZlbnQoKVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoY2xlYXJUaW1lciA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBbIHRpbWVyLCBmbiBdID0gcHJvcHMuZGVib3VuY2VcbiAgICAgICAgICA/IFsgc2V0VGltZW91dChlbWl0RXZlbnQsIHByb3BzLmRlYm91bmNlKSwgY2xlYXJUaW1lb3V0IF1cbiAgICAgICAgICA6IFsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGVtaXRFdmVudCksIGNhbmNlbEFuaW1hdGlvbkZyYW1lIF1cblxuICAgICAgICBjbGVhclRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgIGZuKHRpbWVyKVxuICAgICAgICAgIGNsZWFyVGltZXIgPSBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHBhcmVudEVsID0gcHJveHkuJGVsLnBhcmVudE5vZGVcbiAgICAgIGNvbmZpZ3VyZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBjbGVhclRpbWVyICE9PSBudWxsICYmIGNsZWFyVGltZXIoKVxuICAgICAgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICB0cmlnZ2VyLFxuICAgICAgZ2V0UG9zaXRpb246ICgpID0+IHNjcm9sbFxuICAgIH0pXG5cbiAgICByZXR1cm4gbm9vcFxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCByZWFjdGl2ZSwgY29tcHV0ZWQsIHdhdGNoLCBwcm92aWRlLCBvblVubW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBpc1J1bnRpbWVTc3JQcmVIeWRyYXRpb24gfSBmcm9tICcuLi8uLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgUVNjcm9sbE9ic2VydmVyIGZyb20gJy4uL3Njcm9sbC1vYnNlcnZlci9RU2Nyb2xsT2JzZXJ2ZXIuanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsYmFyV2lkdGggfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBsYXlvdXRLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRTGF5b3V0JyxcblxuICBwcm9wczoge1xuICAgIGNvbnRhaW5lcjogQm9vbGVhbixcbiAgICB2aWV3OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnaGhoIGxwciBmZmYnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IC9eKGh8bCloKGh8cikgbHByIChmfGwpZihmfHIpJC8udGVzdCh2LnRvTG93ZXJDYXNlKCkpXG4gICAgfSxcblxuICAgIG9uU2Nyb2xsOiBGdW5jdGlvbixcbiAgICBvblNjcm9sbEhlaWdodDogRnVuY3Rpb24sXG4gICAgb25SZXNpemU6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICAvLyBwYWdlIHJlbGF0ZWRcbiAgICBjb25zdCBoZWlnaHQgPSByZWYoJHEuc2NyZWVuLmhlaWdodClcbiAgICBjb25zdCB3aWR0aCA9IHJlZihwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyAwIDogJHEuc2NyZWVuLndpZHRoKVxuICAgIGNvbnN0IHNjcm9sbCA9IHJlZih7IHBvc2l0aW9uOiAwLCBkaXJlY3Rpb246ICdkb3duJywgaW5mbGVjdGlvblBvaW50OiAwIH0pXG5cbiAgICAvLyBjb250YWluZXIgb25seSBwcm9wXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gcmVmKDApXG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSByZWYoaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uLnZhbHVlID09PSB0cnVlID8gMCA6IGdldFNjcm9sbGJhcldpZHRoKCkpXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWxheW91dCBxLWxheW91dC0tJ1xuICAgICAgKyAocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gJ2NvbnRhaW5lcml6ZWQnIDogJ3N0YW5kYXJkJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmNvbnRhaW5lciA9PT0gZmFsc2VcbiAgICAgICAgPyB7IG1pbkhlaWdodDogJHEuc2NyZWVuLmhlaWdodCArICdweCcgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgLy8gdXNlZCBieSBjb250YWluZXIgb25seVxuICAgIGNvbnN0IHRhcmdldFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7IFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF06IGAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGNvbnN0IHRhcmdldENoaWxkU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gMFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIFsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnIF06IDAsXG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgLSR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weGAsXG4gICAgICAgICAgICB3aWR0aDogYGNhbGMoMTAwJSArICR7IHNjcm9sbGJhcldpZHRoLnZhbHVlIH1weClgXG4gICAgICAgICAgfVxuICAgICAgICA6IG51bGxcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gb25QYWdlU2Nyb2xsIChkYXRhKSB7XG4gICAgICBpZiAocHJvcHMuY29udGFpbmVyID09PSB0cnVlIHx8IGRvY3VtZW50LnFTY3JvbGxQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IHtcbiAgICAgICAgICBwb3NpdGlvbjogZGF0YS5wb3NpdGlvbi50b3AsXG4gICAgICAgICAgZGlyZWN0aW9uOiBkYXRhLmRpcmVjdGlvbixcbiAgICAgICAgICBkaXJlY3Rpb25DaGFuZ2VkOiBkYXRhLmRpcmVjdGlvbkNoYW5nZWQsXG4gICAgICAgICAgaW5mbGVjdGlvblBvaW50OiBkYXRhLmluZmxlY3Rpb25Qb2ludC50b3AsXG4gICAgICAgICAgZGVsdGE6IGRhdGEuZGVsdGEudG9wXG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGwudmFsdWUgPSBpbmZvXG4gICAgICAgIHByb3BzLm9uU2Nyb2xsICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsJywgaW5mbylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhZ2VSZXNpemUgKGRhdGEpIHtcbiAgICAgIGNvbnN0IHsgaGVpZ2h0OiBuZXdIZWlnaHQsIHdpZHRoOiBuZXdXaWR0aCB9ID0gZGF0YVxuICAgICAgbGV0IHJlc2l6ZWQgPSBmYWxzZVxuXG4gICAgICBpZiAoaGVpZ2h0LnZhbHVlICE9PSBuZXdIZWlnaHQpIHtcbiAgICAgICAgcmVzaXplZCA9IHRydWVcbiAgICAgICAgaGVpZ2h0LnZhbHVlID0gbmV3SGVpZ2h0XG4gICAgICAgIHByb3BzLm9uU2Nyb2xsSGVpZ2h0ICE9PSB2b2lkIDAgJiYgZW1pdCgnc2Nyb2xsLWhlaWdodCcsIG5ld0hlaWdodClcbiAgICAgICAgdXBkYXRlU2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgfVxuICAgICAgaWYgKHdpZHRoLnZhbHVlICE9PSBuZXdXaWR0aCkge1xuICAgICAgICByZXNpemVkID0gdHJ1ZVxuICAgICAgICB3aWR0aC52YWx1ZSA9IG5ld1dpZHRoXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNpemVkID09PSB0cnVlICYmIHByb3BzLm9uUmVzaXplICE9PSB2b2lkIDApIHtcbiAgICAgICAgZW1pdCgncmVzaXplJywgZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNvbnRhaW5lclJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgaWYgKGNvbnRhaW5lckhlaWdodC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodC52YWx1ZSA9IGhlaWdodFxuICAgICAgICB1cGRhdGVTY3JvbGxiYXJXaWR0aCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsYmFyV2lkdGggKCkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGhlaWdodC52YWx1ZSA+IGNvbnRhaW5lckhlaWdodC52YWx1ZVxuICAgICAgICAgID8gZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgICAgIDogMFxuXG4gICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSA9IHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGltZXJcblxuICAgIGNvbnN0ICRsYXlvdXQgPSB7XG4gICAgICBpbnN0YW5jZXM6IHt9LFxuICAgICAgdmlldzogY29tcHV0ZWQoKCkgPT4gcHJvcHMudmlldyksXG4gICAgICBpc0NvbnRhaW5lcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuY29udGFpbmVyKSxcblxuICAgICAgcm9vdFJlZixcblxuICAgICAgaGVpZ2h0LFxuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgc2Nyb2xsYmFyV2lkdGgsXG4gICAgICB0b3RhbFdpZHRoOiBjb21wdXRlZCgoKSA9PiB3aWR0aC52YWx1ZSArIHNjcm9sbGJhcldpZHRoLnZhbHVlKSxcblxuICAgICAgcm93czogY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gcHJvcHMudmlldy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IHJvd3NbIDAgXS5zcGxpdCgnJyksXG4gICAgICAgICAgbWlkZGxlOiByb3dzWyAxIF0uc3BsaXQoJycpLFxuICAgICAgICAgIGJvdHRvbTogcm93c1sgMiBdLnNwbGl0KCcnKVxuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgaGVhZGVyOiByZWFjdGl2ZSh7IHNpemU6IDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuICAgICAgcmlnaHQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGZvb3RlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGxlZnQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcblxuICAgICAgc2Nyb2xsLFxuXG4gICAgICBhbmltYXRlICgpIHtcbiAgICAgICAgaWYgKHRpbWVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgICB0aW1lciA9IHZvaWQgMFxuICAgICAgICB9LCAxNTUpXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGUgKHBhcnQsIHByb3AsIHZhbCkge1xuICAgICAgICAkbGF5b3V0WyBwYXJ0IF1bIHByb3AgXSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3ZpZGUobGF5b3V0S2V5LCAkbGF5b3V0KVxuXG4gICAgLy8gcHJldmVudCBzY3JvbGxiYXIgZmxpY2tlciB3aGlsZSByZXNpemluZyB3aW5kb3cgaGVpZ2h0XG4gICAgLy8gaWYgbm8gcGFnZSBzY3JvbGxiYXIgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSAmJiBnZXRTY3JvbGxiYXJXaWR0aCgpID4gMCkge1xuICAgICAgbGV0IHRpbWVyID0gbnVsbFxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3RvcmVTY3JvbGxiYXIgKCkge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1zY3JvbGxiYXInKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoaWRlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIHNjcm9sbGJhciB0aGVuIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuXG4gICAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA+ICRxLnNjcmVlbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQocmVzdG9yZVNjcm9sbGJhciwgMzAwKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxFdmVudCAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCAmJiBhY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHJlc3RvcmVTY3JvbGxiYXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93WyBgJHsgYWN0aW9uIH1FdmVudExpc3RlbmVyYCBdKCdyZXNpemUnLCBoaWRlU2Nyb2xsYmFyKVxuICAgICAgfVxuXG4gICAgICB3YXRjaChcbiAgICAgICAgKCkgPT4gKHByb3BzLmNvbnRhaW5lciAhPT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZScpLFxuICAgICAgICB1cGRhdGVTY3JvbGxFdmVudFxuICAgICAgKVxuXG4gICAgICBwcm9wcy5jb250YWluZXIgIT09IHRydWUgJiYgdXBkYXRlU2Nyb2xsRXZlbnQoJ2FkZCcpXG5cbiAgICAgIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnQoJ3JlbW92ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7IG9uU2Nyb2xsOiBvblBhZ2VTY3JvbGwgfSksXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvblBhZ2VSZXNpemUgfSlcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGxheW91dCA9IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcmVmOiBwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyB2b2lkIDAgOiByb290UmVmLFxuICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgIH0sIGNvbnRlbnQpXG5cbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0LWNvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW4nLFxuICAgICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHsgb25SZXNpemU6IG9uQ29udGFpbmVyUmVzaXplIH0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgICBzdHlsZTogdGFyZ2V0U3R5bGUudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHRhcmdldENoaWxkU3R5bGUudmFsdWVcbiAgICAgICAgICAgIH0sIFsgbGF5b3V0IF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxheW91dFxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZCBjbGFzcz1cIm15LWNhcmQgYmctYmxhY2tcIiBmbGF0IHYtaWY9XCJzb25nUXVldWUuY3VycmVudGx5UGxheWluZyAhPT0gdW5kZWZpbmVkXCI+XG4gICAgPHEtY2FyZC1zZWN0aW9uIGhvcml6b250YWw+XG4gICAgICA8cS1pbWdcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEyNXB4OyBtYXgtd2lkdGg6IDEyNXB4XCJcbiAgICAgICAgOnNyYz1cInNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmFsYnVtLnRodW1ibmFpbC5zbWFsbC51cmxcIlxuICAgICAgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+e3sgc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcubmFtZS5fZGVmYXVsdCB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTJcIj57eyBzb25nUXVldWUuY3VycmVudGx5UGxheWluZy5hbGJ1bS5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxIHRleHQtZ3JleSBxLXB5LXNtXCI+e3sgc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcuYWxidW0uYWxidW1BcnRpc3RbMF0ubmFtZSB9fTwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyB2ZXJ0aWNhbCBjbGFzcz1cImp1c3RpZnktYXJvdW5kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtYnRuIGZsYXQgcm91bmQgc2l6ZT1cIm1kXCIgY29sb3I9XCJyZWRcIiA6aWNvbj1cIm91dGxpbmVkRmF2b3JpdGVCb3JkZXJcIiAvPlxuICAgICAgICA8cS1idG4gZmxhdCByb3VuZCBzaXplPVwibWRcIiBjb2xvcj1cImFjY2VudFwiIDppY29uPVwib3V0bGluZWRQbGF5bGlzdEFkZENpcmNsZVwiIC8+XG4gICAgICA8L3EtY2FyZC1hY3Rpb25zPlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gIDwvcS1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1RyYWNrSW5mb0NhcmQnXG59XG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheWxpc3RBZGRDaXJjbGUsXG4gIG91dGxpbmVkRmF2b3JpdGVCb3JkZXJcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHtRdWV1ZUNvbnRyb2xsZXJ9IGZyb20gXCJzcmMvdXRpbHMvUXVldWVDb250cm9sbGVyXCI7XG5cblxuY29uc3Qgc29uZ1F1ZXVlID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbi8vIHNvbmdRdWV1ZS4kc3Vic2NyaWJlKChtdXRhdGlvbiwgc3RhdGUpID0+IHtcbi8vICAgY29uc29sZS5sb2cobXV0YXRpb24uc3RvcmVJZClcbi8vICAgaWYgKG11dGF0aW9uLnN0b3JlSWQgIT09ICdjdXJyZW50VHJhY2snKSB7XG4vL1xuLy8gICB9XG4vLyAgIGNvbnNvbGUubG9nKHN0YXRlLmN1cnJlbnRUcmFjaylcbi8vIH0pXG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybVByb3BzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscy9pcy5qcydcbmltcG9ydCB7IGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgbWFya2VyUHJlZml4Q2xhc3MgPSAncS1zbGlkZXJfX21hcmtlci1sYWJlbHMnXG5jb25zdCBkZWZhdWx0TWFya2VyQ29udmVydEZuID0gdiA9PiAoeyB2YWx1ZTogdiB9KVxuY29uc3QgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm4gPSAoeyBtYXJrZXIgfSkgPT4gaCgnZGl2Jywge1xuICBrZXk6IG1hcmtlci52YWx1ZSxcbiAgc3R5bGU6IG1hcmtlci5zdHlsZSxcbiAgY2xhc3M6IG1hcmtlci5jbGFzc2VzXG59LCBtYXJrZXIubGFiZWwpXG5cbi8vIFBHRE9XTiwgTEVGVCwgRE9XTiwgUEdVUCwgUklHSFQsIFVQXG5leHBvcnQgY29uc3Qga2V5Q29kZXMgPSBbIDM0LCAzNywgNDAsIDMzLCAzOSwgMzggXVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyUHJvcHMgPSB7XG4gIC4uLnVzZURhcmtQcm9wcyxcbiAgLi4udXNlRm9ybVByb3BzLFxuXG4gIG1pbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG4gIG1heDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxMDBcbiAgfSxcbiAgaW5uZXJNaW46IE51bWJlcixcbiAgaW5uZXJNYXg6IE51bWJlcixcblxuICBzdGVwOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gICAgdmFsaWRhdG9yOiB2ID0+IHYgPj0gMFxuICB9LFxuXG4gIHNuYXA6IEJvb2xlYW4sXG5cbiAgdmVydGljYWw6IEJvb2xlYW4sXG4gIHJldmVyc2U6IEJvb2xlYW4sXG5cbiAgaGlkZVNlbGVjdGlvbjogQm9vbGVhbixcblxuICBjb2xvcjogU3RyaW5nLFxuICBtYXJrZXJMYWJlbHNDbGFzczogU3RyaW5nLFxuXG4gIGxhYmVsOiBCb29sZWFuLFxuICBsYWJlbENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsVGV4dENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsQWx3YXlzOiBCb29sZWFuLFxuICBzd2l0Y2hMYWJlbFNpZGU6IEJvb2xlYW4sXG5cbiAgbWFya2VyczogWyBCb29sZWFuLCBOdW1iZXIgXSxcbiAgbWFya2VyTGFiZWxzOiBbIEJvb2xlYW4sIEFycmF5LCBPYmplY3QsIEZ1bmN0aW9uIF0sXG4gIHN3aXRjaE1hcmtlckxhYmVsc1NpZGU6IEJvb2xlYW4sXG5cbiAgdHJhY2tJbWc6IFN0cmluZyxcbiAgdHJhY2tDb2xvcjogU3RyaW5nLFxuICBpbm5lclRyYWNrSW1nOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tDb2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25Db2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25JbWc6IFN0cmluZyxcblxuICB0aHVtYlNpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzIwcHgnXG4gIH0sXG4gIHRyYWNrU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnNHB4J1xuICB9LFxuXG4gIGRpc2FibGU6IEJvb2xlYW4sXG4gIHJlYWRvbmx5OiBCb29sZWFuLFxuICBkZW5zZTogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gIHRodW1iQ29sb3I6IFN0cmluZyxcbiAgdGh1bWJQYXRoOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdNIDQsIDEwIGEgNiw2IDAgMSwwIDEyLDAgYSA2LDYgMCAxLDAgLTEyLDAnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNsaWRlckVtaXRzID0gWyAncGFuJywgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NoYW5nZScgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLCBmb3JtQXR0cnMgfSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBzbG90cywgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgY29uc3QgYWN0aXZlID0gcmVmKGZhbHNlKVxuICBjb25zdCBwcmV2ZW50Rm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBkcmFnZ2luZyA9IHJlZihmYWxzZSlcblxuICBjb25zdCBheGlzID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJy0tdicgOiAnLS1oJykpXG4gIGNvbnN0IGxhYmVsU2lkZSA9IGNvbXB1dGVkKCgpID0+ICctJyArIChwcm9wcy5zd2l0Y2hMYWJlbFNpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJykpXG5cbiAgY29uc3QgaXNSZXZlcnNlZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgPyBwcm9wcy5yZXZlcnNlID09PSB0cnVlXG4gICAgICA6IHByb3BzLnJldmVyc2UgIT09ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSlcbiAgKSlcblxuICBjb25zdCBpbm5lck1pbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1pbikgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNaW4gPCBwcm9wcy5taW5cbiAgICAgID8gcHJvcHMubWluXG4gICAgICA6IHByb3BzLmlubmVyTWluXG4gICkpXG4gIGNvbnN0IGlubmVyTWF4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWF4KSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1heCA+IHByb3BzLm1heFxuICAgICAgPyBwcm9wcy5tYXhcbiAgICAgIDogcHJvcHMuaW5uZXJNYXhcbiAgKSlcblxuICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlXG4gICAgJiYgaW5uZXJNaW4udmFsdWUgPCBpbm5lck1heC52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGRlY2ltYWxzID0gY29tcHV0ZWQoKCkgPT4gKFN0cmluZyhwcm9wcy5zdGVwKS50cmltKCkuc3BsaXQoJy4nKVsgMSBdIHx8ICcnKS5sZW5ndGgpXG4gIGNvbnN0IHN0ZXAgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuc3RlcCA9PT0gMCA/IDEgOiBwcm9wcy5zdGVwKSlcbiAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50YWJpbmRleCB8fCAwIDogLTEpKVxuXG4gIGNvbnN0IHRyYWNrTGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubWF4IC0gcHJvcHMubWluKVxuICBjb25zdCBpbm5lckJhckxlbiA9IGNvbXB1dGVkKCgpID0+IGlubmVyTWF4LnZhbHVlIC0gaW5uZXJNaW4udmFsdWUpXG5cbiAgY29uc3QgaW5uZXJNaW5SYXRpbyA9IGNvbXB1dGVkKCgpID0+IGNvbnZlcnRNb2RlbFRvUmF0aW8oaW5uZXJNaW4udmFsdWUpKVxuICBjb25zdCBpbm5lck1heFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1heC52YWx1ZSkpXG5cbiAgY29uc3QgcG9zaXRpb25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IChpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ2JvdHRvbScgOiAndG9wJylcbiAgICAgIDogKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnKVxuICApKVxuXG4gIGNvbnN0IHNpemVQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2hlaWdodCcgOiAnd2lkdGgnKSlcbiAgY29uc3QgdGhpY2tuZXNzUHJvcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd3aWR0aCcgOiAnaGVpZ2h0JykpXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJykpXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICByb2xlOiAnc2xpZGVyJyxcbiAgICAgICdhcmlhLXZhbHVlbWluJzogaW5uZXJNaW4udmFsdWUsXG4gICAgICAnYXJpYS12YWx1ZW1heCc6IGlubmVyTWF4LnZhbHVlLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbi52YWx1ZSxcbiAgICAgICdkYXRhLXN0ZXAnOiBwcm9wcy5zdGVwXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtcmVhZG9ubHknIF0gPSAndHJ1ZSdcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgYHEtc2xpZGVyIHEtc2xpZGVyJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyLS0keyBhY3RpdmUudmFsdWUgPT09IHRydWUgPyAnJyA6ICdpbicgfWFjdGl2ZSBpbmxpbmUgbm8td3JhcCBgXG4gICAgKyAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAncm93JyA6ICdjb2x1bW4nKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcgcS1zbGlkZXItLWVuYWJsZWQnICsgKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZWRpdGFibGUnIDogJycpKVxuICAgICsgKGZvY3VzLnZhbHVlID09PSAnYm90aCcgPyAnIHEtc2xpZGVyLS1mb2N1cycgOiAnJylcbiAgICArIChwcm9wcy5sYWJlbCB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWxhYmVsJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwtYWx3YXlzJyA6ICcnKVxuICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRhcmsnIDogJycpXG4gICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1kZW5zZSBxLXNsaWRlci0tZGVuc2UnICsgYXhpcy52YWx1ZSA6ICcnKVxuICApXG5cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb25DbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNscyA9ICdxLXNsaWRlcl9fJyArIG5hbWVcbiAgICByZXR1cm4gYCR7IGNscyB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9JHsgbGFiZWxTaWRlLnZhbHVlIH1gXG4gIH1cbiAgZnVuY3Rpb24gZ2V0QXhpc0NsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH1gXG4gIH1cblxuICBjb25zdCBzZWxlY3Rpb25CYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjb2xvciA9IHByb3BzLnNlbGVjdGlvbkNvbG9yIHx8IHByb3BzLmNvbG9yXG4gICAgcmV0dXJuICdxLXNsaWRlcl9fc2VsZWN0aW9uIGFic29sdXRlJ1xuICAgICAgKyAoY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnKVxuICB9KVxuICBjb25zdCBtYXJrZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldEF4aXNDbGFzcygnbWFya2VycycpICsgJyBhYnNvbHV0ZSBvdmVyZmxvdy1oaWRkZW4nKVxuICBjb25zdCB0cmFja0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCd0cmFjay1jb250YWluZXInKSlcbiAgY29uc3QgcGluQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCdwaW4nKSlcbiAgY29uc3QgbGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ2xhYmVsJykpXG4gIGNvbnN0IHRleHRDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3RleHQtY29udGFpbmVyJykpXG4gIGNvbnN0IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBnZXRQb3NpdGlvbkNsYXNzKCdtYXJrZXItbGFiZWxzLWNvbnRhaW5lcicpXG4gICAgKyAocHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgfWAgOiAnJylcbiAgKVxuXG4gIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9fdHJhY2sgcmVsYXRpdmUtcG9zaXRpb24gbm8tb3V0bGluZSdcbiAgICArIChwcm9wcy50cmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLnRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHsgWyB0aGlja25lc3NQcm9wLnZhbHVlIF06IHByb3BzLnRyYWNrU2l6ZSB9XG4gICAgaWYgKHByb3BzLnRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnRyYWNrSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBpbm5lckJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS1zbGlkZXJfX2lubmVyIGFic29sdXRlJ1xuICAgICsgKHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5pbm5lclRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCBpbm5lckJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBpbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgIFsgc2l6ZVByb3AudmFsdWUgXTogYCR7IDEwMCAqIChpbm5lck1heFJhdGlvLnZhbHVlIC0gaW5uZXJNaW5SYXRpby52YWx1ZSkgfSVgXG4gICAgfVxuICAgIGlmIChwcm9wcy5pbm5lclRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLmlubmVyVHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRSYXRpb1RvTW9kZWwgKHJhdGlvKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCwgc3RlcCB9ID0gcHJvcHNcbiAgICBsZXQgbW9kZWwgPSBtaW4gKyByYXRpbyAqIChtYXggLSBtaW4pXG5cbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgIGNvbnN0IG1vZHVsbyA9IChtb2RlbCAtIG1pbikgJSBzdGVwXG4gICAgICBtb2RlbCArPSAoTWF0aC5hYnMobW9kdWxvKSA+PSBzdGVwIC8gMiA/IChtb2R1bG8gPCAwID8gLTEgOiAxKSAqIHN0ZXAgOiAwKSAtIG1vZHVsb1xuICAgIH1cblxuICAgIGlmIChkZWNpbWFscy52YWx1ZSA+IDApIHtcbiAgICAgIG1vZGVsID0gcGFyc2VGbG9hdChtb2RlbC50b0ZpeGVkKGRlY2ltYWxzLnZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYmV0d2Vlbihtb2RlbCwgaW5uZXJNaW4udmFsdWUsIGlubmVyTWF4LnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydE1vZGVsVG9SYXRpbyAobW9kZWwpIHtcbiAgICByZXR1cm4gdHJhY2tMZW4udmFsdWUgPT09IDBcbiAgICAgID8gMFxuICAgICAgOiAobW9kZWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERyYWdnaW5nUmF0aW8gKGV2dCwgZHJhZ2dpbmcpIHtcbiAgICBjb25zdFxuICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgIHZhbCA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gYmV0d2VlbigocG9zLnRvcCAtIGRyYWdnaW5nLnRvcCkgLyBkcmFnZ2luZy5oZWlnaHQsIDAsIDEpXG4gICAgICAgIDogYmV0d2VlbigocG9zLmxlZnQgLSBkcmFnZ2luZy5sZWZ0KSAvIGRyYWdnaW5nLndpZHRoLCAwLCAxKVxuXG4gICAgcmV0dXJuIGJldHdlZW4oXG4gICAgICBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gMS4wIC0gdmFsIDogdmFsLFxuICAgICAgaW5uZXJNaW5SYXRpby52YWx1ZSxcbiAgICAgIGlubmVyTWF4UmF0aW8udmFsdWVcbiAgICApXG4gIH1cblxuICBjb25zdCBtYXJrZXJTdGVwID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTnVtYmVyKHByb3BzLm1hcmtlcnMpID09PSB0cnVlID8gcHJvcHMubWFya2VycyA6IHN0ZXAudmFsdWUpXG4gIClcblxuICBjb25zdCBtYXJrZXJUaWNrcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSBbXVxuICAgIGNvbnN0IHN0ZXAgPSBtYXJrZXJTdGVwLnZhbHVlXG4gICAgY29uc3QgbWF4ID0gcHJvcHMubWF4XG5cbiAgICBsZXQgdmFsdWUgPSBwcm9wcy5taW5cbiAgICBkbyB7XG4gICAgICBhY2MucHVzaCh2YWx1ZSlcbiAgICAgIHZhbHVlICs9IHN0ZXBcbiAgICB9IHdoaWxlICh2YWx1ZSA8IG1heClcblxuICAgIGFjYy5wdXNoKG1heClcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyTGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBwcmVmaXggPSBgICR7IG1hcmtlclByZWZpeENsYXNzIH0keyBheGlzLnZhbHVlIH0tYFxuICAgIHJldHVybiBtYXJrZXJQcmVmaXhDbGFzc1xuICAgICAgKyBgJHsgcHJlZml4IH0keyBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICsgYCR7IHByZWZpeCB9JHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfWBcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbHNMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIHJldHVybiBnZXRNYXJrZXJMaXN0KHByb3BzLm1hcmtlckxhYmVscykubWFwKChlbnRyeSwgaW5kZXgpID0+ICh7XG4gICAgICBpbmRleCxcbiAgICAgIHZhbHVlOiBlbnRyeS52YWx1ZSxcbiAgICAgIGxhYmVsOiBlbnRyeS5sYWJlbCB8fCBlbnRyeS52YWx1ZSxcbiAgICAgIGNsYXNzZXM6IG1hcmtlckxhYmVsQ2xhc3MudmFsdWVcbiAgICAgICAgKyAoZW50cnkuY2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgZW50cnkuY2xhc3NlcyA6ICcnKSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC4uLmdldE1hcmtlckxhYmVsU3R5bGUoZW50cnkudmFsdWUpLFxuICAgICAgICAuLi4oZW50cnkuc3R5bGUgfHwge30pXG4gICAgICB9XG4gICAgfSkpXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIG1hcmtlckxpc3Q6IG1hcmtlckxhYmVsc0xpc3QudmFsdWUsXG4gICAgbWFya2VyTWFwOiBtYXJrZXJMYWJlbHNNYXAudmFsdWUsXG4gICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZSwgLy8gVE9ETyB0cyBkZWZpbml0aW9uXG4gICAgZ2V0U3R5bGU6IGdldE1hcmtlckxhYmVsU3R5bGVcbiAgfSkpXG5cbiAgY29uc3QgbWFya2VyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKGlubmVyQmFyTGVuLnZhbHVlICE9PSAwKSB7XG4gICAgICBjb25zdCBzaXplID0gMTAwICogbWFya2VyU3RlcC52YWx1ZSAvIGlubmVyQmFyTGVuLnZhbHVlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlubmVyQmFyU3R5bGUudmFsdWUsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gYDJweCAkeyBzaXplIH0lYFxuICAgICAgICAgIDogYCR7IHNpemUgfSUgMnB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGlzdCAoZGVmKSB7XG4gICAgaWYgKGRlZiA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgaWYgKGRlZiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG1hcmtlclRpY2tzLnZhbHVlLm1hcChkZWZhdWx0TWFya2VyQ29udmVydEZuKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRlZih2YWx1ZSlcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJGbiA9ICh7IHZhbHVlIH0pID0+IHZhbHVlID49IHByb3BzLm1pbiAmJiB2YWx1ZSA8PSBwcm9wcy5tYXhcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRlZikgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkZWZcbiAgICAgICAgLm1hcChpdGVtID0+IChpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IGl0ZW0gOiB7IHZhbHVlOiBpdGVtIH0pKVxuICAgICAgICAuZmlsdGVyKGZpbHRlckZuKVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkZWYpLm1hcChrZXkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGRlZlsga2V5IF1cbiAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGtleSlcbiAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IHsgLi4uaXRlbSwgdmFsdWUgfSA6IHsgdmFsdWUsIGxhYmVsOiBpdGVtIH1cbiAgICB9KS5maWx0ZXIoZmlsdGVyRm4pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbFN0eWxlICh2YWwpIHtcbiAgICByZXR1cm4geyBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHZhbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZSB9JWAgfVxuICB9XG5cbiAgY29uc3QgbWFya2VyTGFiZWxzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGNvbnN0IGFjYyA9IHt9XG4gICAgbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGFjY1sgZW50cnkudmFsdWUgXSA9IGVudHJ5XG4gICAgfSlcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGFiZWxzQ29udGVudCAoKSB7XG4gICAgaWYgKHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBzbG90c1sgJ21hcmtlci1sYWJlbC1ncm91cCcgXShtYXJrZXJTY29wZS52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBmbiA9IHNsb3RzWyAnbWFya2VyLWxhYmVsJyBdIHx8IGRlZmF1bHRNYXJrZXJMYWJlbFJlbmRlckZuXG4gICAgcmV0dXJuIG1hcmtlckxhYmVsc0xpc3QudmFsdWUubWFwKG1hcmtlciA9PiBmbih7XG4gICAgICBtYXJrZXIsXG4gICAgICAuLi5tYXJrZXJTY29wZS52YWx1ZVxuICAgIH0pKVxuICB9XG5cbiAgY29uc3QgcGFuRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIC8vIGlmIGVkaXRhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgcmV0dXJuIFsgW1xuICAgICAgVG91Y2hQYW4sXG4gICAgICBvblBhbixcbiAgICAgIHZvaWQgMCxcbiAgICAgIHtcbiAgICAgICAgWyBvcmllbnRhdGlvbi52YWx1ZSBdOiB0cnVlLFxuICAgICAgICBwcmV2ZW50OiB0cnVlLFxuICAgICAgICBzdG9wOiB0cnVlLFxuICAgICAgICBtb3VzZTogdHJ1ZSxcbiAgICAgICAgbW91c2VBbGxEaXI6IHRydWVcbiAgICAgIH1cbiAgICBdIF1cbiAgfSlcblxuICBmdW5jdGlvbiBvblBhbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGRyYWdnaW5nLnZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgICAvLyBvbmx5IGlmIHRvdWNoLCBiZWNhdXNlIHdlIGFsc28gaGF2ZSBtb3VzZWRvd24vdXA6XG4gICAgICAgIGV2ZW50LnRvdWNoID09PSB0cnVlICYmIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgICAgIGRyYWdnaW5nLnZhbHVlID0gdm9pZCAwXG4gICAgICAgIGVtaXQoJ3BhbicsICdlbmQnKVxuICAgICAgfVxuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2VcbiAgICAgIGZvY3VzLnZhbHVlID0gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgZHJhZ2dpbmcudmFsdWUgPSBnZXREcmFnZ2luZyhldmVudC5ldnQpXG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG4gICAgICBlbWl0KCdwYW4nLCAnc3RhcnQnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXIgKCkge1xuICAgIGZvY3VzLnZhbHVlID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQWN0aXZhdGUgKGV2dCkge1xuICAgIHVwZGF0ZVBvc2l0aW9uKGV2dCwgZ2V0RHJhZ2dpbmcoZXZ0KSlcbiAgICB1cGRhdGVWYWx1ZSgpXG5cbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSB0cnVlXG4gICAgYWN0aXZlLnZhbHVlID0gdHJ1ZVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRGVhY3RpdmF0ZSAoKSB7XG4gICAgcHJldmVudEZvY3VzLnZhbHVlID0gZmFsc2VcbiAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuXG4gICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICBvbkJsdXIoKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9iaWxlQ2xpY2sgKGV2dCkge1xuICAgIHVwZGF0ZVBvc2l0aW9uKGV2dCwgZ2V0RHJhZ2dpbmcoZXZ0KSlcbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25LZXl1cCAoZXZ0KSB7XG4gICAgaWYgKGtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSkge1xuICAgICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUZXh0Q29udGFpbmVyU3R5bGUgKHJhdGlvKSB7XG4gICAgaWYgKHByb3BzLnZlcnRpY2FsID09PSB0cnVlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGNvbnN0IHAgPSAkcS5sYW5nLnJ0bCAhPT0gcHJvcHMucmV2ZXJzZSA/IDEgLSByYXRpbyA6IHJhdGlvXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoY2FsYygkeyAyICogcCAtIDEgfSAqICR7IHByb3BzLnRodW1iU2l6ZSB9IC8gMiArICR7IDUwIC0gMTAwICogcCB9JSkpYFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRodW1iUmVuZGVyRm4gKHRodW1iKSB7XG4gICAgY29uc3QgZm9jdXNDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9PT0gZmFsc2UgJiYgKGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlIHx8IGZvY3VzLnZhbHVlID09PSAnYm90aCcpXG4gICAgICAgID8gJyBxLXNsaWRlci0tZm9jdXMnXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1zbGlkZXJfX3RodW1iIHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfSBxLXNsaWRlcl9fdGh1bWIkeyBheGlzLnZhbHVlIH0tJHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfSBhYnNvbHV0ZSBub24tc2VsZWN0YWJsZWBcbiAgICAgICsgZm9jdXNDbGFzcy52YWx1ZVxuICAgICAgKyAodGh1bWIudGh1bWJDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLnRodW1iQ29sb3IudmFsdWUgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB3aWR0aDogcHJvcHMudGh1bWJTaXplLFxuICAgICAgaGVpZ2h0OiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogdGh1bWIucmF0aW8udmFsdWUgfSVgLFxuICAgICAgekluZGV4OiBmb2N1cy52YWx1ZSA9PT0gdGh1bWIuZm9jdXNWYWx1ZSA/IDIgOiB2b2lkIDBcbiAgICB9KSlcblxuICAgIGNvbnN0IHBpbkNvbG9yID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdGh1bWIubGFiZWxDb2xvci52YWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsQ29sb3IudmFsdWUgfWBcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiBnZXRUZXh0Q29udGFpbmVyU3R5bGUodGh1bWIucmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3QgdGV4dENsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2xpZGVyX190ZXh0J1xuICAgICAgKyAodGh1bWIubGFiZWxUZXh0Q29sb3IudmFsdWUgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgICkpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgdGh1bWJDb250ZW50ID0gW1xuICAgICAgICBoKCdzdmcnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXNsaWRlcl9fdGh1bWItc2hhcGUgYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdwYXRoJywgeyBkOiBwcm9wcy50aHVtYlBhdGggfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3Etc2xpZGVyX19mb2N1cy1yaW5nIGZpdCcgfSlcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmxhYmVsID09PSB0cnVlIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlKSB7XG4gICAgICAgIHRodW1iQ29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiBwaW5DbGFzcy52YWx1ZSArICcgYWJzb2x1dGUgZml0IG5vLXBvaW50ZXItZXZlbnRzJyArIHBpbkNvbG9yLnZhbHVlXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogbGFiZWxDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgbWluV2lkdGg6IHByb3BzLnRodW1iU2l6ZSB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogdGV4dENvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0ZXh0Q29udGFpbmVyU3R5bGUudmFsdWVcbiAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiB0ZXh0Q2xhc3MudmFsdWUgfSwgdGh1bWIubGFiZWwudmFsdWUpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcblxuICAgICAgICBpZiAocHJvcHMubmFtZSAhPT0gdm9pZCAwICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgICBpbmplY3RGb3JtSW5wdXQodGh1bWJDb250ZW50LCAncHVzaCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgLi4udGh1bWIuZ2V0Tm9kZURhdGEoKVxuICAgICAgfSwgdGh1bWJDb250ZW50KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRlbnQgKHNlbGVjdGlvbkJhclN0eWxlLCB0cmFja0NvbnRhaW5lclRhYmluZGV4LCB0cmFja0NvbnRhaW5lckV2ZW50cywgaW5qZWN0VGh1bWIpIHtcbiAgICBjb25zdCB0cmFja0NvbnRlbnQgPSBbXVxuXG4gICAgcHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdpbm5lcicsXG4gICAgICAgIGNsYXNzOiBpbm5lckJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogaW5uZXJCYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5zZWxlY3Rpb25Db2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnc2VsZWN0aW9uJyxcbiAgICAgICAgY2xhc3M6IHNlbGVjdGlvbkJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2VsZWN0aW9uQmFyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMubWFya2VycyAhPT0gZmFsc2UgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ21hcmtlcicsXG4gICAgICAgIGNsYXNzOiBtYXJrZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IG1hcmtlclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIGluamVjdFRodW1iKHRyYWNrQ29udGVudClcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICBoRGlyKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ3RyYWNrQycsXG4gICAgICAgICAgY2xhc3M6IHRyYWNrQ29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgdGFiaW5kZXg6IHRyYWNrQ29udGFpbmVyVGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgLi4udHJhY2tDb250YWluZXJFdmVudHMudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0cmFja0NsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGUudmFsdWVcbiAgICAgICAgICB9LCB0cmFja0NvbnRlbnQpXG4gICAgICAgIF0sXG4gICAgICAgICdzbGlkZScsXG4gICAgICAgIGVkaXRhYmxlLnZhbHVlLCAoKSA9PiBwYW5EaXJlY3RpdmUudmFsdWVcbiAgICAgIClcbiAgICBdXG5cbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzICE9PSBmYWxzZSkge1xuICAgICAgY29uc3QgYWN0aW9uID0gcHJvcHMuc3dpdGNoTWFya2VyTGFiZWxzU2lkZSA9PT0gdHJ1ZVxuICAgICAgICA/ICd1bnNoaWZ0J1xuICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICBjb250ZW50WyBhY3Rpb24gXShcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ21hcmtlckwnLFxuICAgICAgICAgIGNsYXNzOiBtYXJrZXJMYWJlbHNDb250YWluZXJDbGFzcy52YWx1ZVxuICAgICAgICB9LCBnZXRNYXJrZXJMYWJlbHNDb250ZW50KCkpXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbiAgfVxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiB7XG4gICAgICBhY3RpdmUsXG4gICAgICBmb2N1cyxcbiAgICAgIHByZXZlbnRGb2N1cyxcbiAgICAgIGRyYWdnaW5nLFxuXG4gICAgICBlZGl0YWJsZSxcbiAgICAgIGNsYXNzZXMsXG4gICAgICB0YWJpbmRleCxcbiAgICAgIGF0dHJpYnV0ZXMsXG5cbiAgICAgIHN0ZXAsXG4gICAgICBkZWNpbWFscyxcbiAgICAgIHRyYWNrTGVuLFxuICAgICAgaW5uZXJNaW4sXG4gICAgICBpbm5lck1pblJhdGlvLFxuICAgICAgaW5uZXJNYXgsXG4gICAgICBpbm5lck1heFJhdGlvLFxuICAgICAgcG9zaXRpb25Qcm9wLFxuICAgICAgc2l6ZVByb3AsXG4gICAgICBpc1JldmVyc2VkXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uQWN0aXZhdGUsXG4gICAgICBvbk1vYmlsZUNsaWNrLFxuICAgICAgb25CbHVyLFxuICAgICAgb25LZXl1cCxcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBnZXRUaHVtYlJlbmRlckZuLFxuICAgICAgY29udmVydFJhdGlvVG9Nb2RlbCxcbiAgICAgIGNvbnZlcnRNb2RlbFRvUmF0aW8sXG4gICAgICBnZXREcmFnZ2luZ1JhdGlvXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB1c2VGb3JtQXR0cnMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgdXNlU2xpZGVyLCB7XG4gIHVzZVNsaWRlclByb3BzLFxuICB1c2VTbGlkZXJFbWl0cyxcbiAga2V5Q29kZXNcbn0gZnJvbSAnLi91c2Utc2xpZGVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCBnZXROb2RlRGF0YSA9ICgpID0+ICh7fSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTbGlkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlU2xpZGVyUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gdHlwZW9mIHYgPT09ICdudW1iZXInIHx8IHYgPT09IG51bGxcbiAgICB9LFxuXG4gICAgbGFiZWxWYWx1ZTogWyBTdHJpbmcsIE51bWJlciBdXG4gIH0sXG5cbiAgZW1pdHM6IHVzZVNsaWRlckVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCB7IHN0YXRlLCBtZXRob2RzIH0gPSB1c2VTbGlkZXIoe1xuICAgICAgdXBkYXRlVmFsdWUsIHVwZGF0ZVBvc2l0aW9uLCBnZXREcmFnZ2luZyxcbiAgICAgIGZvcm1BdHRyczogdXNlRm9ybUF0dHJzKHByb3BzKVxuICAgIH0pXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY3VyUmF0aW8gPSByZWYoMClcbiAgICBjb25zdCBtb2RlbCA9IHJlZigwKVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplTW9kZWwgKCkge1xuICAgICAgbW9kZWwudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsXG4gICAgICAgID8gc3RhdGUuaW5uZXJNaW4udmFsdWVcbiAgICAgICAgOiBiZXR3ZWVuKHByb3BzLm1vZGVsVmFsdWUsIHN0YXRlLmlubmVyTWluLnZhbHVlLCBzdGF0ZS5pbm5lck1heC52YWx1ZSlcbiAgICB9XG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IGAkeyBwcm9wcy5tb2RlbFZhbHVlIH18JHsgc3RhdGUuaW5uZXJNaW4udmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1heC52YWx1ZSB9YCxcbiAgICAgIG5vcm1hbGl6ZU1vZGVsXG4gICAgKVxuXG4gICAgbm9ybWFsaXplTW9kZWwoKVxuXG4gICAgY29uc3QgbW9kZWxSYXRpbyA9IGNvbXB1dGVkKCgpID0+IG1ldGhvZHMuY29udmVydE1vZGVsVG9SYXRpbyhtb2RlbC52YWx1ZSkpXG4gICAgY29uc3QgcmF0aW8gPSBjb21wdXRlZCgoKSA9PiAoc3RhdGUuYWN0aXZlLnZhbHVlID09PSB0cnVlID8gY3VyUmF0aW8udmFsdWUgOiBtb2RlbFJhdGlvLnZhbHVlKSlcblxuICAgIGNvbnN0IHNlbGVjdGlvbkJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge1xuICAgICAgICBbIHN0YXRlLnBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSB9JWAsXG4gICAgICAgIFsgc3RhdGUuc2l6ZVByb3AudmFsdWUgXTogYCR7IDEwMCAqIChyYXRpby52YWx1ZSAtIHN0YXRlLmlubmVyTWluUmF0aW8udmFsdWUpIH0lYFxuICAgICAgfVxuICAgICAgaWYgKHByb3BzLnNlbGVjdGlvbkltZyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnNlbGVjdGlvbkltZyB9KSAhaW1wb3J0YW50YFxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBnZXRUaHVtYiA9IG1ldGhvZHMuZ2V0VGh1bWJSZW5kZXJGbih7XG4gICAgICBmb2N1c1ZhbHVlOiB0cnVlLFxuICAgICAgZ2V0Tm9kZURhdGEsXG4gICAgICByYXRpbyxcbiAgICAgIGxhYmVsOiBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAgIHByb3BzLmxhYmVsVmFsdWUgIT09IHZvaWQgMFxuICAgICAgICAgID8gcHJvcHMubGFiZWxWYWx1ZVxuICAgICAgICAgIDogbW9kZWwudmFsdWVcbiAgICAgICkpLFxuICAgICAgdGh1bWJDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMudGh1bWJDb2xvciB8fCBwcm9wcy5jb2xvciksXG4gICAgICBsYWJlbENvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYWJlbENvbG9yKSxcbiAgICAgIGxhYmVsVGV4dENvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYWJlbFRleHRDb2xvcilcbiAgICB9KVxuXG4gICAgY29uc3QgdHJhY2tDb250YWluZXJFdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWVcbiAgICAgICAgPyB7IG9uQ2xpY2s6IG1ldGhvZHMub25Nb2JpbGVDbGljayB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgb25Nb3VzZWRvd246IG1ldGhvZHMub25BY3RpdmF0ZSxcbiAgICAgICAgICAgIG9uRm9jdXMsXG4gICAgICAgICAgICBvbkJsdXI6IG1ldGhvZHMub25CbHVyLFxuICAgICAgICAgICAgb25LZXlkb3duLFxuICAgICAgICAgICAgb25LZXl1cDogbWV0aG9kcy5vbktleXVwXG4gICAgICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSAoY2hhbmdlKSB7XG4gICAgICBpZiAobW9kZWwudmFsdWUgIT09IHByb3BzLm1vZGVsVmFsdWUpIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbC52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBlbWl0KCdjaGFuZ2UnLCBtb2RlbC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREcmFnZ2luZyAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uIChldmVudCwgZHJhZ2dpbmcgPSBzdGF0ZS5kcmFnZ2luZy52YWx1ZSkge1xuICAgICAgY29uc3QgcmF0aW8gPSBtZXRob2RzLmdldERyYWdnaW5nUmF0aW8oZXZlbnQsIGRyYWdnaW5nKVxuXG4gICAgICBtb2RlbC52YWx1ZSA9IG1ldGhvZHMuY29udmVydFJhdGlvVG9Nb2RlbChyYXRpbylcblxuICAgICAgY3VyUmF0aW8udmFsdWUgPSBwcm9wcy5zbmFwICE9PSB0cnVlIHx8IHByb3BzLnN0ZXAgPT09IDBcbiAgICAgICAgPyByYXRpb1xuICAgICAgICA6IG1ldGhvZHMuY29udmVydE1vZGVsVG9SYXRpbyhtb2RlbC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzICgpIHtcbiAgICAgIHN0YXRlLmZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5ZG93biAoZXZ0KSB7XG4gICAgICBpZiAoIWtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBjb25zdFxuICAgICAgICBzdGVwVmFsID0gKFsgMzQsIDMzIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gMTAgOiAxKSAqIHN0YXRlLnN0ZXAudmFsdWUsXG4gICAgICAgIG9mZnNldCA9IChcbiAgICAgICAgICAoWyAzNCwgMzcsIDQwIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gLTEgOiAxKVxuICAgICAgICAgICogKHN0YXRlLmlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAtMSA6IDEpXG4gICAgICAgICAgKiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAtMSA6IDEpICogc3RlcFZhbFxuICAgICAgICApXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gYmV0d2VlbihcbiAgICAgICAgcGFyc2VGbG9hdCgobW9kZWwudmFsdWUgKyBvZmZzZXQpLnRvRml4ZWQoc3RhdGUuZGVjaW1hbHMudmFsdWUpKSxcbiAgICAgICAgc3RhdGUuaW5uZXJNaW4udmFsdWUsXG4gICAgICAgIHN0YXRlLmlubmVyTWF4LnZhbHVlXG4gICAgICApXG5cbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IG1ldGhvZHMuZ2V0Q29udGVudChcbiAgICAgICAgc2VsZWN0aW9uQmFyU3R5bGUsXG4gICAgICAgIHN0YXRlLnRhYmluZGV4LFxuICAgICAgICB0cmFja0NvbnRhaW5lckV2ZW50cyxcbiAgICAgICAgbm9kZSA9PiB7IG5vZGUucHVzaChnZXRUaHVtYigpKSB9XG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IHN0YXRlLmNsYXNzZXMudmFsdWUgKyAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCA/ICcgcS1zbGlkZXItLW5vLXZhbHVlJyA6ICcnKSxcbiAgICAgICAgLi4uc3RhdGUuYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICB9LCBjb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGp1c3RpZnktY2VudGVyIHEtcHQtc21cIj5cbiAgICA8cS1idG4gZmFiIGZsYXQgc2l6ZT1cIm1kXCIgOmljb249XCJvdXRsaW5lZFNraXBQcmV2aW91c1wiIEBjbGljaz1cInF1ZXVlQ29udHJvbGxlci5wbGF5UHJldmlvdXMoKVwiPlxuICAgICAgPHEtdG9vbHRpcD5QcmV2aW91czwvcS10b29sdGlwPlxuICAgIDwvcS1idG4+XG5cbiAgICA8cS1idG4gZmFiIGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIHNpemU9XCJtZFwiIDppY29uPVwicGF1c2VkID8gb3V0bGluZWRQbGF5QXJyb3cgOiBvdXRsaW5lZFBhdXNlXCIgQGNsaWNrPVwiYXVkaW9Db250cm9sbGVyLnRvZ2dsZVBhdXNlKClcIj5cbiAgICAgIDxxLXRvb2x0aXA+e3sgYXVkaW9Db250cm9sbGVyLnBhdXNlZCA/IFwiUGxheVwiIDogXCJQYXVzZVwiIH19PC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cblxuICAgIDxxLWJ0biBmbGF0IGZhYiBzaXplPVwibWRcIiA6aWNvbj1cIm91dGxpbmVkU2tpcE5leHRcIiBAY2xpY2s9XCJxdWV1ZUNvbnRyb2xsZXIucGxheU5leHQoKVwiPlxuICAgICAgPHEtdG9vbHRpcD5OZXh0PC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHQtbGdcIiB2LWlmPVwic29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcgIT09IHVuZGVmaW5lZFwiPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAge3sgZm9ybWF0RHVyYXRpb24oc2Vjb25kc1RvRHVyYXRpb24oY3VycmVudFRpbWUpKSB9fVxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtc2xpZGVyIHYtbW9kZWw9XCJjdXJyZW50VGltZVwiXG4gICAgICAgICAgICAgICAgQHBhbj1cIm9uUGFuXCJcbiAgICAgICAgICAgICAgICA6bWluPVwiMFwiIDptYXg9XCJ0b3RhbFRpbWVcIiA6c3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiLz5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAge3sgZm9ybWF0RHVyYXRpb24oc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcuZHVyYXRpb24pIH19XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWVkaWFDb250cm9sJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRTa2lwTmV4dCxcbiAgb3V0bGluZWRTa2lwUHJldmlvdXMsXG4gIG91dGxpbmVkUGF1c2Vcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge2NvbXB1dGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2F1ZGlvQ29udHJvbGxlcn0gZnJvbSAnYm9vdC9hdWRpb0NvbnRyb2xsZXInO1xuaW1wb3J0IHtkdXJhdGlvblRvU2Vjb25kcywgZm9ybWF0RHVyYXRpb24sIHNlY29uZHNUb0R1cmF0aW9ufSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSBcInNyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgY3VycmVudFRpbWUgPSByZWYoMCk7XG5jb25zdCBzb25nUXVldWUgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IGlzUGFubmluZ1Byb2dyZXNzID0gcmVmKGZhbHNlKTtcblxuY29uc3QgcXVldWVDb250cm9sbGVyID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbnF1ZXVlQ29udHJvbGxlci53YXRjaEN1cnJlbnRseVBsYXlpbmcoKCkgPT4ge1xuICByZXR1cm47XG59KVxuXG5jb25zdCBwYXVzZWQgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBhdWRpb0NvbnRyb2xsZXIucGF1c2VkLnZhbHVlO1xufSlcblxuY29uc3Qgb25QYW4gPSAocGhhc2U6IHN0cmluZykgPT4ge1xuICBpZiAocGhhc2UgPT09ICdzdGFydCcpIHtcbiAgICBpc1Bhbm5pbmdQcm9ncmVzcy52YWx1ZSA9IHRydWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgY29uc29sZS5sb2coY3VycmVudFRpbWUudmFsdWUpXG4gICAgLy8gU2Vla1xuICAgIGF1ZGlvQ29udHJvbGxlci5zZWVrKGN1cnJlbnRUaW1lLnZhbHVlKTtcblxuICAgIGlzUGFubmluZ1Byb2dyZXNzLnZhbHVlID0gZmFsc2U7XG4gIH1cbn1cblxuY29uc3QgdG90YWxUaW1lID0gY29tcHV0ZWQoKCkgPT4ge1xuICBpZiAoc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBkdXJhdGlvblRvU2Vjb25kcyg8c3RyaW5nPnNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmR1cmF0aW9uKTtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn0pXG5cbmF1ZGlvQ29udHJvbGxlci5vblByb2dyZXNzVGljaygodGltZSkgPT4ge1xuICBpZiAoaXNQYW5uaW5nUHJvZ3Jlc3MudmFsdWUpXG4gIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY3VycmVudFRpbWUudmFsdWUgPSB0aW1lO1xufSlcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgZGVmaW5lU3RvcmUgfSBmcm9tICdwaW5pYSc7XG5cbmV4cG9ydCBjb25zdCB1c2VRdWV1ZURpc3BsYXlTdG9yZSA9IGRlZmluZVN0b3JlKCdxdWV1ZURpc3BsYXknLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIHNob3c6IHRydWVcbiAgfSksXG5cbiAgYWN0aW9uczoge1xuICAgIG9wZW4gKCkge1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB9XG4gIH1cbn0pO1xuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC03IHJvdyBqdXN0aWZ5LWVuZFwiPlxuICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgOmljb249XCJvdXRsaW5lZFJlcGVhdFwiPlxuICAgICAgICA8cS10b29sdGlwPlJlcGVhdDwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cblxuICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgOmljb249XCJvdXRsaW5lZFNodWZmbGVcIiBjbGFzcz1cInEtbXgtc21cIj5cbiAgICAgICAgPHEtdG9vbHRpcD5TaHVmZmxlPC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuXG4gICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkUXVldWVNdXNpY1wiIEBjbGljaz1cInF1ZXVlU2hvd1N0YXR1c1N0b3JlLnRvZ2dsZSgpXCI+XG4gICAgICAgIDxxLXRvb2x0aXA+UXVldWU8L3EtdG9vbHRpcD5cbiAgICAgIDwvcS1idG4+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgPHEtaXRlbSBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICAgICAgPHEtaWNvbiBuYW1lPVwidm9sdW1lX3VwXCIvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtc2xpZGVyXG4gICAgICAgICAgICB2LW1vZGVsPVwidm9sdW1lXCJcbiAgICAgICAgICAgIDptaW49XCIwXCJcbiAgICAgICAgICAgIDptYXg9XCIxMDBcIlxuICAgICAgICAgICAgOnN0ZXA9XCIxXCJcbiAgICAgICAgICAgIHN0eWxlPVwibWF4LXdpZHRoOiAxMDBweFwiXG4gICAgICAgICAgICB0aHVtYi1zaXplPVwiMTBweFwiXG4gICAgICAgICAgICBpbm5lci10cmFjay1jb2xvcj1cImJsYWNrXCJcbiAgICAgICAgICAgIHNlbGVjdGlvbi1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHRodW1iLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgdHJhY2stY29sb3I9XCJ5ZWxsb3dcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnUXVldWVDb250cm9sJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFNodWZmbGUsXG4gIG91dGxpbmVkUmVwZWF0LFxuICBvdXRsaW5lZFF1ZXVlTXVzaWMsXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcblxuaW1wb3J0IHthdWRpb0NvbnRyb2xsZXJ9IGZyb20gJ2Jvb3QvYXVkaW9Db250cm9sbGVyJztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3VzZVF1ZXVlRGlzcGxheVN0b3JlfSBmcm9tICdzdG9yZXMvc2hvd1F1ZXVlJztcblxuY29uc3QgcXVldWVTaG93U3RhdHVzU3RvcmUgPSB1c2VRdWV1ZURpc3BsYXlTdG9yZSgpO1xuXG5jb25zdCB2b2x1bWUgPSByZWYoYXVkaW9Db250cm9sbGVyLnZvbHVtZS52YWx1ZSAqIDEwMCk7XG53YXRjaCh2b2x1bWUsICgpID0+IHtcbiAgYXVkaW9Db250cm9sbGVyLnZvbHVtZS52YWx1ZSA9IHZvbHVtZS52YWx1ZSAvIDEwMDtcbn0pXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS10b29sYmFyIGNsYXNzPVwicS1wYS1tZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICA8dHJhY2staW5mby1jYXJkPjwvdHJhY2staW5mby1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTVcIj5cbiAgICAgICAgPG1lZGlhLWNvbnRyb2w+PC9tZWRpYS1jb250cm9sPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICA8cXVldWUtY29udHJvbD48L3F1ZXVlLWNvbnRyb2w+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gIDwvcS10b29sYmFyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1BsYXllckNvbnRyb2wnXG59XG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBUcmFja0luZm9DYXJkIGZyb20gJ2NvbXBvbmVudHMvVHJhY2tJbmZvQ2FyZC52dWUnO1xuaW1wb3J0IE1lZGlhQ29udHJvbCBmcm9tICdjb21wb25lbnRzL01lZGlhQ29udHJvbC52dWUnO1xuaW1wb3J0IFF1ZXVlQ29udHJvbCBmcm9tICdjb21wb25lbnRzL1F1ZXVlQ29udHJvbC52dWUnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCBvbkJlZm9yZVVubW91bnQsIFRyYW5zaXRpb24gfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlVHJhbnNpdGlvbicsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlYXI6IEJvb2xlYW4sXG4gICAgZHVyYXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAnc2hvdycsICdoaWRlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgbGV0IGFuaW1hdGluZyA9IGZhbHNlLCBkb25lRm4sIGVsZW1lbnRcbiAgICBsZXQgdGltZXIsIHRpbWVyRmFsbGJhY2ssIGFuaW1MaXN0ZW5lciwgbGFzdEV2ZW50XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICAgIGRvbmVGbiAmJiBkb25lRm4oKVxuICAgICAgZG9uZUZuID0gbnVsbFxuICAgICAgYW5pbWF0aW5nID0gZmFsc2VcblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyRmFsbGJhY2spXG4gICAgICBlbGVtZW50ICE9PSB2b2lkIDAgJiYgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgYW5pbUxpc3RlbmVyID0gbnVsbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJlZ2luIChlbCwgaGVpZ2h0LCBkb25lKSB7XG4gICAgICBlbC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgICAgaWYgKGhlaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGAkeyBoZWlnaHQgfXB4YFxuICAgICAgfVxuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgJHsgcHJvcHMuZHVyYXRpb24gfW1zIGN1YmljLWJlemllciguMjUsIC44LCAuNTAsIDEpYFxuXG4gICAgICBhbmltYXRpbmcgPSB0cnVlXG4gICAgICBkb25lRm4gPSBkb25lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kIChlbCwgZXZlbnQpIHtcbiAgICAgIGVsLnN0eWxlLm92ZXJmbG93WSA9IG51bGxcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IG51bGxcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBudWxsXG4gICAgICBjbGVhbnVwKClcbiAgICAgIGV2ZW50ICE9PSBsYXN0RXZlbnQgJiYgZW1pdChldmVudClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVudGVyIChlbCwgZG9uZSkge1xuICAgICAgbGV0IHBvcyA9IDBcbiAgICAgIGVsZW1lbnQgPSBlbFxuXG4gICAgICBpZiAoYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgIGNsZWFudXAoKVxuICAgICAgICBwb3MgPSBlbC5vZmZzZXRIZWlnaHQgPT09IGVsLnNjcm9sbEhlaWdodCA/IDAgOiB2b2lkIDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsYXN0RXZlbnQgPSAnaGlkZSdcbiAgICAgIH1cblxuICAgICAgYmVnaW4oZWwsIHBvcywgZG9uZSlcblxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gYCR7IGVsLnNjcm9sbEhlaWdodCB9cHhgXG4gICAgICAgIGFuaW1MaXN0ZW5lciA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdChldnQpICE9PSBldnQgfHwgZXZ0LnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGVuZChlbCwgJ3Nob3cnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgICB0aW1lckZhbGxiYWNrID0gc2V0VGltZW91dChhbmltTGlzdGVuZXIsIHByb3BzLmR1cmF0aW9uICogMS4xKVxuICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTGVhdmUgKGVsLCBkb25lKSB7XG4gICAgICBsZXQgcG9zXG4gICAgICBlbGVtZW50ID0gZWxcblxuICAgICAgaWYgKGFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhbnVwKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsYXN0RXZlbnQgPSAnc2hvdydcbiAgICAgICAgcG9zID0gZWwuc2Nyb2xsSGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIGJlZ2luKGVsLCBwb3MsIGRvbmUpXG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgYW5pbUxpc3RlbmVyID0gZXZ0ID0+IHtcbiAgICAgICAgICBpZiAoT2JqZWN0KGV2dCkgIT09IGV2dCB8fCBldnQudGFyZ2V0ID09PSBlbCkge1xuICAgICAgICAgICAgZW5kKGVsLCAnaGlkZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBhbmltTGlzdGVuZXIpXG4gICAgICAgIHRpbWVyRmFsbGJhY2sgPSBzZXRUaW1lb3V0KGFuaW1MaXN0ZW5lciwgcHJvcHMuZHVyYXRpb24gKiAxLjEpXG4gICAgICB9LCAxMDApXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBjbGVhbnVwKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoVHJhbnNpdGlvbiwge1xuICAgICAgY3NzOiBmYWxzZSxcbiAgICAgIGFwcGVhcjogcHJvcHMuYXBwZWFyLFxuICAgICAgb25FbnRlcixcbiAgICAgIG9uTGVhdmVcbiAgICB9LCBzbG90cy5kZWZhdWx0KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgc2hhbGxvd1JlYWN0aXZlLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgd2l0aERpcmVjdGl2ZXMsIGdldEN1cnJlbnRJbnN0YW5jZSwgdlNob3csIG9uQmVmb3JlVW5tb3VudCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJdGVtIGZyb20gJy4uL2l0ZW0vUUl0ZW0uanMnXG5pbXBvcnQgUUl0ZW1TZWN0aW9uIGZyb20gJy4uL2l0ZW0vUUl0ZW1TZWN0aW9uLmpzJ1xuaW1wb3J0IFFJdGVtTGFiZWwgZnJvbSAnLi4vaXRlbS9RSXRlbUxhYmVsLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVNsaWRlVHJhbnNpdGlvbiBmcm9tICcuLi9zbGlkZS10cmFuc2l0aW9uL1FTbGlkZVRyYW5zaXRpb24uanMnXG5pbXBvcnQgUVNlcGFyYXRvciBmcm9tICcuLi9zZXBhcmF0b3IvUVNlcGFyYXRvci5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB7IHVzZVJvdXRlckxpbmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJvdXRlci1saW5rLmpzJ1xuaW1wb3J0IHVzZU1vZGVsVG9nZ2xlLCB7IHVzZU1vZGVsVG9nZ2xlUHJvcHMsIHVzZU1vZGVsVG9nZ2xlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1tb2RlbC10b2dnbGUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL3V0aWxzL3VpZC5qcydcblxuY29uc3QgaXRlbUdyb3VwcyA9IHNoYWxsb3dSZWFjdGl2ZSh7fSlcbmNvbnN0IExJTktfUFJPUFMgPSBPYmplY3Qua2V5cyh1c2VSb3V0ZXJMaW5rUHJvcHMpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRXhwYW5zaW9uSXRlbScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG4gICAgLi4udXNlTW9kZWxUb2dnbGVQcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBpY29uOiBTdHJpbmcsXG5cbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGxhYmVsTGluZXM6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIGNhcHRpb246IFN0cmluZyxcbiAgICBjYXB0aW9uTGluZXM6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuXG4gICAgZXhwYW5kSWNvbjogU3RyaW5nLFxuICAgIGV4cGFuZGVkSWNvbjogU3RyaW5nLFxuICAgIGV4cGFuZEljb25DbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBkdXJhdGlvbjogTnVtYmVyLFxuXG4gICAgaGVhZGVySW5zZXRMZXZlbDogTnVtYmVyLFxuICAgIGNvbnRlbnRJbnNldExldmVsOiBOdW1iZXIsXG5cbiAgICBleHBhbmRTZXBhcmF0b3I6IEJvb2xlYW4sXG4gICAgZGVmYXVsdE9wZW5lZDogQm9vbGVhbixcbiAgICBleHBhbmRJY29uVG9nZ2xlOiBCb29sZWFuLFxuICAgIHN3aXRjaFRvZ2dsZVNpZGU6IEJvb2xlYW4sXG4gICAgZGVuc2VUb2dnbGU6IEJvb2xlYW4sXG4gICAgZ3JvdXA6IFN0cmluZyxcbiAgICBwb3B1cDogQm9vbGVhbixcblxuICAgIGhlYWRlclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGhlYWRlckNsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzLFxuICAgICdjbGljaycsICdhZnRlci1zaG93JywgJ2FmdGVyLWhpZGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKFxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSAhPT0gbnVsbFxuICAgICAgICA/IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgOiBwcm9wcy5kZWZhdWx0T3BlbmVkXG4gICAgKVxuXG4gICAgY29uc3QgYmx1clRhcmdldFJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgeyBoaWRlLCB0b2dnbGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHsgc2hvd2luZyB9KVxuXG4gICAgbGV0IHVuaXF1ZUlkLCBleGl0R3JvdXBcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtZXhwYW5zaW9uLWl0ZW0gcS1pdGVtLXR5cGUnXG4gICAgICArIGAgcS1leHBhbnNpb24taXRlbS0tJHsgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJyB9YFxuICAgICAgKyBgIHEtZXhwYW5zaW9uLWl0ZW0tLSR7IHByb3BzLnBvcHVwID09PSB0cnVlID8gJ3BvcHVwJyA6ICdzdGFuZGFyZCcgfWBcbiAgICApXG5cbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuY29udGVudEluc2V0TGV2ZWwgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdSaWdodCcgOiAnTGVmdCdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFsgJ3BhZGRpbmcnICsgZGlyIF06IChwcm9wcy5jb250ZW50SW5zZXRMZXZlbCAqIDU2KSArICdweCdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaGFzTGluayA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIChcbiAgICAgICAgcHJvcHMuaHJlZiAhPT0gdm9pZCAwXG4gICAgICAgIHx8IChwcm9wcy50byAhPT0gdm9pZCAwICYmIHByb3BzLnRvICE9PSBudWxsICYmIHByb3BzLnRvICE9PSAnJylcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBsaW5rUHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuICAgICAgTElOS19QUk9QUy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGFjY1sga2V5IF0gPSBwcm9wc1sga2V5IF1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGlzQ2xpY2thYmxlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGhhc0xpbmsudmFsdWUgPT09IHRydWUgfHwgcHJvcHMuZXhwYW5kSWNvblRvZ2dsZSAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGV4cGFuc2lvbkljb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5leHBhbmRlZEljb24gIT09IHZvaWQgMCAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuZXhwYW5kZWRJY29uXG4gICAgICAgIDogcHJvcHMuZXhwYW5kSWNvbiB8fCAkcS5pY29uU2V0LmV4cGFuc2lvbkl0ZW1bIHByb3BzLmRlbnNlVG9nZ2xlID09PSB0cnVlID8gJ2RlbnNlSWNvbicgOiAnaWNvbicgXVxuICAgICkpXG5cbiAgICBjb25zdCBhY3RpdmVUb2dnbGVJY29uID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgKGhhc0xpbmsudmFsdWUgPT09IHRydWUgfHwgcHJvcHMuZXhwYW5kSWNvblRvZ2dsZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5ncm91cCwgbmFtZSA9PiB7XG4gICAgICBleGl0R3JvdXAgIT09IHZvaWQgMCAmJiBleGl0R3JvdXAoKVxuICAgICAgbmFtZSAhPT0gdm9pZCAwICYmIGVudGVyR3JvdXAoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvbkhlYWRlckNsaWNrIChlKSB7XG4gICAgICBoYXNMaW5rLnZhbHVlICE9PSB0cnVlICYmIHRvZ2dsZShlKVxuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUljb25LZXlib2FyZCAoZSkge1xuICAgICAgZS5rZXlDb2RlID09PSAxMyAmJiB0b2dnbGVJY29uKGUsIHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlSWNvbiAoZSwga2V5Ym9hcmQpIHtcbiAgICAgIGtleWJvYXJkICE9PSB0cnVlICYmIGJsdXJUYXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgYmx1clRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICB0b2dnbGUoZSlcbiAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TaG93ICgpIHtcbiAgICAgIGVtaXQoJ2FmdGVyLXNob3cnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoKSB7XG4gICAgICBlbWl0KCdhZnRlci1oaWRlJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbnRlckdyb3VwICgpIHtcbiAgICAgIGlmICh1bmlxdWVJZCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHVuaXF1ZUlkID0gdWlkKClcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSA9IHVuaXF1ZUlkXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNob3cgPSB3YXRjaChzaG93aW5nLCB2YWwgPT4ge1xuICAgICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgICAgaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSA9IHVuaXF1ZUlkXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSA9PT0gdW5pcXVlSWQpIHtcbiAgICAgICAgICBkZWxldGUgaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBjb25zdCBncm91cCA9IHdhdGNoKFxuICAgICAgICAoKSA9PiBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdLFxuICAgICAgICAodmFsLCBvbGRWYWwpID0+IHtcbiAgICAgICAgICBpZiAob2xkVmFsID09PSB1bmlxdWVJZCAmJiB2YWwgIT09IHZvaWQgMCAmJiB2YWwgIT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgICBoaWRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgZXhpdEdyb3VwID0gKCkgPT4ge1xuICAgICAgICBzaG93KClcbiAgICAgICAgZ3JvdXAoKVxuXG4gICAgICAgIGlmIChpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdID09PSB1bmlxdWVJZCkge1xuICAgICAgICAgIGRlbGV0ZSBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdXG4gICAgICAgIH1cblxuICAgICAgICBleGl0R3JvdXAgPSB2b2lkIDBcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUb2dnbGVJY29uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgJ3EtZm9jdXNhYmxlIHJlbGF0aXZlLXBvc2l0aW9uIGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgICAgKyBgJHsgcHJvcHMuZGVuc2VUb2dnbGUgPT09IHRydWUgJiYgcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSA9PT0gdHJ1ZSA/ICcgaXRlbXMtZW5kJyA6ICcnIH1gLFxuICAgICAgICAgIHByb3BzLmV4cGFuZEljb25DbGFzc1xuICAgICAgICBdLFxuICAgICAgICBzaWRlOiBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlICE9PSB0cnVlLFxuICAgICAgICBhdmF0YXI6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgY2hpbGQgPSBbXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX3RvZ2dsZS1pY29uJ1xuICAgICAgICAgICAgKyAocHJvcHMuZXhwYW5kZWRJY29uID09PSB2b2lkIDAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/ICcgcS1leHBhbnNpb24taXRlbV9fdG9nZ2xlLWljb24tLXJvdGF0ZWQnXG4gICAgICAgICAgICAgIDogJycpLFxuICAgICAgICAgIG5hbWU6IGV4cGFuc2lvbkljb24udmFsdWVcbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgaWYgKGFjdGl2ZVRvZ2dsZUljb24udmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7XG4gICAgICAgICAgdGFiaW5kZXg6IDAsXG4gICAgICAgICAgb25DbGljazogdG9nZ2xlSWNvbixcbiAgICAgICAgICBvbktleXVwOiB0b2dnbGVJY29uS2V5Ym9hcmRcbiAgICAgICAgfSlcblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIHJlZjogYmx1clRhcmdldFJlZixcbiAgICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fdG9nZ2xlLWZvY3VzIHEtaWNvbiBxLWZvY3VzLWhlbHBlciBxLWZvY3VzLWhlbHBlci0tcm91bmRlZCcsXG4gICAgICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFJdGVtU2VjdGlvbiwgZGF0YSwgKCkgPT4gY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyQ2hpbGQgKCkge1xuICAgICAgbGV0IGNoaWxkXG5cbiAgICAgIGlmIChzbG90cy5oZWFkZXIgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IFtdLmNvbmNhdChzbG90cy5oZWFkZXIoeyBleHBhbmRlZDogc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSB9KSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IFtcbiAgICAgICAgICBoKFFJdGVtU2VjdGlvbiwgKCkgPT4gW1xuICAgICAgICAgICAgaChRSXRlbUxhYmVsLCB7IGxpbmVzOiBwcm9wcy5sYWJlbExpbmVzIH0sICgpID0+IHByb3BzLmxhYmVsIHx8ICcnKSxcblxuICAgICAgICAgICAgcHJvcHMuY2FwdGlvblxuICAgICAgICAgICAgICA/IGgoUUl0ZW1MYWJlbCwgeyBsaW5lczogcHJvcHMuY2FwdGlvbkxpbmVzLCBjYXB0aW9uOiB0cnVlIH0sICgpID0+IHByb3BzLmNhcHRpb24pXG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIF0pXG4gICAgICAgIF1cblxuICAgICAgICBwcm9wcy5pY29uICYmIGNoaWxkWyBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlID09PSB0cnVlID8gJ3B1c2gnIDogJ3Vuc2hpZnQnIF0oXG4gICAgICAgICAgaChRSXRlbVNlY3Rpb24sIHtcbiAgICAgICAgICAgIHNpZGU6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUsXG4gICAgICAgICAgICBhdmF0YXI6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgIT09IHRydWVcbiAgICAgICAgICB9LCAoKSA9PiBoKFFJY29uLCB7IG5hbWU6IHByb3BzLmljb24gfSkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBjaGlsZFsgcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSA9PT0gdHJ1ZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJyBdKFxuICAgICAgICBnZXRUb2dnbGVJY29uKClcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogJ2l0ZW0nLFxuICAgICAgICBzdHlsZTogcHJvcHMuaGVhZGVyU3R5bGUsXG4gICAgICAgIGNsYXNzOiBwcm9wcy5oZWFkZXJDbGFzcyxcbiAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgIGluc2V0TGV2ZWw6IHByb3BzLmhlYWRlckluc2V0TGV2ZWxcbiAgICAgIH1cblxuICAgICAgaWYgKGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGRhdGEuY2xpY2thYmxlID0gdHJ1ZVxuICAgICAgICBkYXRhLm9uQ2xpY2sgPSBvbkhlYWRlckNsaWNrXG5cbiAgICAgICAgaGFzTGluay52YWx1ZSA9PT0gdHJ1ZSAmJiBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgbGlua1Byb3BzLnZhbHVlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUl0ZW0sIGRhdGEsIGdldEhlYWRlckNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRyYW5zaXRpb25DaGlsZCAoKSB7XG4gICAgICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdlLWNvbnRlbnQnLFxuICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fY29udGVudCByZWxhdGl2ZS1wb3NpdGlvbicsXG4gICAgICAgICAgc3R5bGU6IGNvbnRlbnRTdHlsZS52YWx1ZVxuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSksXG4gICAgICAgIFsgW1xuICAgICAgICAgIHZTaG93LFxuICAgICAgICAgIHNob3dpbmcudmFsdWVcbiAgICAgICAgXSBdXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBjb25zdCBub2RlID0gW1xuICAgICAgICBnZXRIZWFkZXIoKSxcblxuICAgICAgICBoKFFTbGlkZVRyYW5zaXRpb24sIHtcbiAgICAgICAgICBkdXJhdGlvbjogcHJvcHMuZHVyYXRpb24sXG4gICAgICAgICAgb25TaG93LFxuICAgICAgICAgIG9uSGlkZVxuICAgICAgICB9LCBnZXRUcmFuc2l0aW9uQ2hpbGQpXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5leHBhbmRTZXBhcmF0b3IgPT09IHRydWUpIHtcbiAgICAgICAgbm9kZS5wdXNoKFxuICAgICAgICAgIGgoUVNlcGFyYXRvciwge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXIgcS1leHBhbnNpb24taXRlbV9fYm9yZGVyLS10b3AgYWJzb2x1dGUtdG9wJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGgoUVNlcGFyYXRvciwge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXIgcS1leHBhbnNpb24taXRlbV9fYm9yZGVyLS1ib3R0b20gYWJzb2x1dGUtYm90dG9tJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG5cbiAgICBwcm9wcy5ncm91cCAhPT0gdm9pZCAwICYmIGVudGVyR3JvdXAoKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGV4aXRHcm91cCAhPT0gdm9pZCAwICYmIGV4aXRHcm91cCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIFtcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19jb250YWluZXIgcmVsYXRpdmUtcG9zaXRpb24nIH0sIGdldENvbnRlbnQoKSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZVNwaW5uZXIsIHsgdXNlU3Bpbm5lclByb3BzIH0gZnJvbSAnLi91c2Utc3Bpbm5lci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IHN2ZyA9IFtcbiAgaCgnZycsIHtcbiAgICB0cmFuc2Zvcm06ICdtYXRyaXgoMSAwIDAgLTEgMCA4MCknXG4gIH0sIFtcbiAgICBoKCdyZWN0Jywge1xuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICcyMCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICc0LjNzJyxcbiAgICAgICAgdmFsdWVzOiAnMjA7NDU7NTc7ODA7NjQ7MzI7NjY7NDU7NjQ7MjM7NjY7MTM7NjQ7NTY7MzQ7MzQ7MjsyMzs3Njs3OTsyMCcsXG4gICAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgICAgfSlcbiAgICBdKSxcbiAgICBoKCdyZWN0Jywge1xuICAgICAgeDogJzE1JyxcbiAgICAgIHdpZHRoOiAnMTAnLFxuICAgICAgaGVpZ2h0OiAnODAnLFxuICAgICAgcng6ICczJ1xuICAgIH0sIFtcbiAgICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdoZWlnaHQnLFxuICAgICAgICBiZWdpbjogJzBzJyxcbiAgICAgICAgZHVyOiAnMnMnLFxuICAgICAgICB2YWx1ZXM6ICc4MDs1NTszMzs1Ozc1OzIzOzczOzMzOzEyOzE0OzYwOzgwJyxcbiAgICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgICB9KVxuICAgIF0pLFxuICAgIGgoJ3JlY3QnLCB7XG4gICAgICB4OiAnMzAnLFxuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICc1MCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICcxLjRzJyxcbiAgICAgICAgdmFsdWVzOiAnNTA7MzQ7Nzg7MjM7NTY7MjM7MzQ7NzY7ODA7NTQ7MjE7NTAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSksXG4gICAgaCgncmVjdCcsIHtcbiAgICAgIHg6ICc0NScsXG4gICAgICB3aWR0aDogJzEwJyxcbiAgICAgIGhlaWdodDogJzMwJyxcbiAgICAgIHJ4OiAnMydcbiAgICB9LCBbXG4gICAgICBoKCdhbmltYXRlJywge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnaGVpZ2h0JyxcbiAgICAgICAgYmVnaW46ICcwcycsXG4gICAgICAgIGR1cjogJzJzJyxcbiAgICAgICAgdmFsdWVzOiAnMzA7NDU7MTM7ODA7NTY7NzI7NDU7NzY7MzQ7MjM7Njc7MzAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSlcbiAgXSlcbl1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGlubmVyQXVkaW8nLFxuXG4gIHByb3BzOiB1c2VTcGlubmVyUHJvcHMsXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgd2lkdGg6IGNTaXplLnZhbHVlLFxuICAgICAgaGVpZ2h0OiBjU2l6ZS52YWx1ZSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgNTUgODAnLFxuICAgICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICB9LCBzdmcpXG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWl0ZW0gY2xhc3M9XCJ0cmFuc3BhcmVudFwiIGNsaWNrYWJsZSB2LXJpcHBsZSB2LWlmPVwicHJvcHMudHJhY2tJbmZvXCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgIDxxLWF2YXRhciBzcXVhcmU+XG4gICAgICAgIDxpbWcgOnNyYz1cInByb3BzLnRyYWNrSW5mby5hbGJ1bS50aHVtYm5haWwudGlueS51cmxcIj5cbiAgICAgIDwvcS1hdmF0YXI+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsIDpjbGFzcz1cInsgJ3RleHQtZ3QnIDogY3VycmVudGx5UGxheWluZyB9XCI+e3sgcHJvcHMudHJhY2tJbmZvLm5hbWUuX2RlZmF1bHQgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgOmNsYXNzPVwieyAndGV4dC1ndCcgOiBjdXJyZW50bHlQbGF5aW5nIH1cIiBjYXB0aW9uIGxpbmVzPVwiMlwiPnt7IHByb3BzLnRyYWNrSW5mby5hbGJ1bS5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIHYtaWY9XCJjdXJyZW50bHlQbGF5aW5nXCI+XG4gICAgICA8cS1zcGlubmVyLWF1ZGlvIHYtaWY9XCIhcGF1c2VkXCIgc2l6ZT1cIjJlbVwiIGNvbG9yPVwiZ3RcIiAvPlxuICAgICAgPHEtaWNvbiBzaXplPVwiMmVtXCIgdi1pZj1cInBhdXNlZFwiIDpuYW1lPVwib3V0bGluZWRQYXVzZVwiPjwvcS1pY29uPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgdi1pZj1cIiFjdXJyZW50bHlQbGF5aW5nXCI+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24+e3sgZm9ybWF0RHVyYXRpb24ocHJvcHMudHJhY2tJbmZvLmR1cmF0aW9uKSB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gIDwvcS1pdGVtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7VHJhY2tSZWFkRHRvfSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcbmltcG9ydCB7Y29tcHV0ZWQsIGRlZmluZVByb3BzfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtmb3JtYXREdXJhdGlvbn0gZnJvbSAnc3JjL3V0aWxzL2R1cmF0aW9uVXRpbHMnO1xuaW1wb3J0IHthdWRpb0NvbnRyb2xsZXJ9IGZyb20gJ2Jvb3QvYXVkaW9Db250cm9sbGVyJztcbmltcG9ydCB7b3V0bGluZWRQYXVzZX0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5jb25zdCBwYXVzZWQgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBhdWRpb0NvbnRyb2xsZXIucGF1c2VkLnZhbHVlO1xufSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRyYWNrSW5mbzogVHJhY2tSZWFkRHRvLFxuICBjdXJyZW50bHlQbGF5aW5nOiBib29sZWFuXG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cS1saXN0PlxuICAgICAgPHEtZXhwYW5zaW9uLWl0ZW1cbiAgICAgICAgZGVuc2VcbiAgICAgICAgbGFiZWw9XCJIaXN0b3J5XCJcbiAgICAgICAgZGVmYXVsdC1vcGVuZWQ+XG5cbiAgICAgICAgPFF1ZXVlSXRlbSB2LWZvcj1cImhpc3RvcnkgaW4gcXVldWVkSGlzdG9yeVwiIDprZXk9XCJoaXN0b3J5LmlkXCJcbiAgICAgICAgICAgICAgICAgICA6dHJhY2staW5mbz1cImhpc3RvcnlcIiA6Y3VycmVudGx5LXBsYXlpbmc9XCJmYWxzZVwiPjwvUXVldWVJdGVtPlxuXG4gICAgICAgIDxRdWV1ZUl0ZW0gOmN1cnJlbnRseS1wbGF5aW5nPVwidHJ1ZVwiIDp0cmFjay1pbmZvPVwiY3VycmVudGx5UGxheWluZ1wiPjwvUXVldWVJdGVtPlxuICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPlxuXG4gICAgICA8cS1leHBhbnNpb24taXRlbVxuICAgICAgICBkZW5zZVxuICAgICAgICBsYWJlbD1cIk5leHQgVXBcIlxuICAgICAgICBkZWZhdWx0LW9wZW5lZD5cbiAgICAgICAgPFF1ZXVlSXRlbSB2LWZvcj1cImZ1dHVyZSBpbiBxdWV1ZWRGdXR1cmVcIiA6a2V5PVwiZnV0dXJlLmlkXCJcbiAgICAgICAgICAgICAgICAgICA6dHJhY2staW5mbz1cImZ1dHVyZVwiIDpjdXJyZW50bHktcGxheWluZz1cImZhbHNlXCI+PC9RdWV1ZUl0ZW0+XG4gICAgICA8L3EtZXhwYW5zaW9uLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBRdWV1ZUl0ZW0gZnJvbSAnY29tcG9uZW50cy9RdWV1ZUl0ZW0udnVlJztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSBcInNyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXJcIjtcblxubGV0IHF1ZXVlQ29udHJvbGxlciA9IFF1ZXVlQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xuXG5jb25zdCBxdWV1ZWRIaXN0b3J5ID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gcXVldWVDb250cm9sbGVyLnNvbmdIaXN0b3J5O1xufSlcblxuY29uc3QgcXVldWVkRnV0dXJlID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gcXVldWVDb250cm9sbGVyLnF1ZXVlO1xufSlcblxuY29uc3QgY3VycmVudGx5UGxheWluZyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlQ29udHJvbGxlci5jdXJyZW50bHlQbGF5aW5nO1xufSlcblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUJ0bkdyb3VwJyxcblxuICBwcm9wczoge1xuICAgIHVuZWxldmF0ZWQ6IEJvb2xlYW4sXG4gICAgb3V0bGluZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIHB1c2g6IEJvb2xlYW4sXG4gICAgc3RyZXRjaDogQm9vbGVhbixcbiAgICBnbG9zc3k6IEJvb2xlYW4sXG4gICAgc3ByZWFkOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY2xzID0gWyAndW5lbGV2YXRlZCcsICdvdXRsaW5lJywgJ2ZsYXQnLCAncm91bmRlZCcsICdzcXVhcmUnLCAncHVzaCcsICdzdHJldGNoJywgJ2dsb3NzeScgXVxuICAgICAgICAuZmlsdGVyKHQgPT4gcHJvcHNbIHQgXSA9PT0gdHJ1ZSlcbiAgICAgICAgLm1hcCh0ID0+IGBxLWJ0bi1ncm91cC0tJHsgdCB9YCkuam9pbignICcpXG5cbiAgICAgIHJldHVybiBgcS1idG4tZ3JvdXAgcm93IG5vLXdyYXAkeyBjbHMubGVuZ3RoID4gMCA/ICcgJyArIGNscyA6ICcnIH1gXG4gICAgICAgICsgKHByb3BzLnNwcmVhZCA9PT0gdHJ1ZSA/ICcgcS1idG4tZ3JvdXAtLXNwcmVhZCcgOiAnIGlubGluZScpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFCdG5Hcm91cCBmcm9tICcuLi9idG4tZ3JvdXAvUUJ0bkdyb3VwLmpzJ1xuaW1wb3J0IFFNZW51IGZyb20gJy4uL21lbnUvUU1lbnUuanMnXG5cbmltcG9ydCB7IHVzZUJ0blByb3BzIH0gZnJvbSAnLi4vYnRuL3VzZS1idG4uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCdG5Ecm9wZG93bicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VCdG5Qcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IEJvb2xlYW4sXG4gICAgc3BsaXQ6IEJvb2xlYW4sXG4gICAgZHJvcGRvd25JY29uOiBTdHJpbmcsXG5cbiAgICBjb250ZW50Q2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgY29udGVudFN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgY292ZXI6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBub1JvdXRlRGlzbWlzczogQm9vbGVhbixcbiAgICBhdXRvQ2xvc2U6IEJvb2xlYW4sXG5cbiAgICBtZW51QW5jaG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tIGVuZCdcbiAgICB9LFxuICAgIG1lbnVTZWxmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndG9wIGVuZCdcbiAgICB9LFxuICAgIG1lbnVPZmZzZXQ6IEFycmF5LFxuXG4gICAgZGlzYWJsZU1haW5CdG46IEJvb2xlYW4sXG4gICAgZGlzYWJsZURyb3Bkb3duOiBCb29sZWFuLFxuXG4gICAgbm9JY29uQW5pbWF0aW9uOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NsaWNrJywgJ2JlZm9yZS1zaG93JywgJ3Nob3cnLCAnYmVmb3JlLWhpZGUnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgY29uc3QgbWVudVJlZiA9IHJlZihudWxsKVxuXG4gICAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZSdcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICAgIHx8IChcbiAgICAgICAgICAocHJvcHMuc3BsaXQgPT09IGZhbHNlICYmIHByb3BzLmRpc2FibGVNYWluQnRuID09PSB0cnVlKVxuICAgICAgICAgIHx8IHByb3BzLmRpc2FibGVEcm9wZG93biA9PT0gdHJ1ZVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGljb25DbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1idG4tZHJvcGRvd25fX2Fycm93J1xuICAgICAgKyAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub0ljb25BbmltYXRpb24gPT09IGZhbHNlID8gJyByb3RhdGUtMTgwJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3BsaXQgPT09IGZhbHNlID8gJyBxLWJ0bi1kcm9wZG93bl9fYXJyb3ctY29udGFpbmVyJyA6ICcnKVxuICAgIClcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWVbIHZhbCA/ICdzaG93JyA6ICdoaWRlJyBdKClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc3BsaXQsIGhpZGUpXG5cbiAgICBmdW5jdGlvbiBvbkJlZm9yZVNob3cgKGUpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSB0cnVlXG4gICAgICBlbWl0KCdiZWZvcmUtc2hvdycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TaG93IChlKSB7XG4gICAgICBlbWl0KCdzaG93JywgZSlcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkJlZm9yZUhpZGUgKGUpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgZW1pdCgnYmVmb3JlLWhpZGUnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoZSkge1xuICAgICAgZW1pdCgnaGlkZScsIGUpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrSGlkZSAoZSkge1xuICAgICAgc3RvcChlKVxuICAgICAgaGlkZSgpXG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlIChldnQpIHtcbiAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZS50b2dnbGUoZXZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3cgKGV2dCkge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLnNob3coZXZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGUgKGV2dCkge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLmhpZGUoZXZ0KVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNob3csIGhpZGUsIHRvZ2dsZVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBzaG93KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IEFycm93ID0gW1xuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6IGljb25DbGFzcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5kcm9wZG93bkljb24gfHwgcHJveHkuJHEuaWNvblNldC5hcnJvdy5kcm9wZG93blxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5kaXNhYmxlRHJvcGRvd24gIT09IHRydWUgJiYgQXJyb3cucHVzaChcbiAgICAgICAgaChRTWVudSwge1xuICAgICAgICAgIHJlZjogbWVudVJlZixcbiAgICAgICAgICBjbGFzczogcHJvcHMuY29udGVudENsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5jb250ZW50U3R5bGUsXG4gICAgICAgICAgY292ZXI6IHByb3BzLmNvdmVyLFxuICAgICAgICAgIGZpdDogdHJ1ZSxcbiAgICAgICAgICBwZXJzaXN0ZW50OiBwcm9wcy5wZXJzaXN0ZW50LFxuICAgICAgICAgIG5vUm91dGVEaXNtaXNzOiBwcm9wcy5ub1JvdXRlRGlzbWlzcyxcbiAgICAgICAgICBhdXRvQ2xvc2U6IHByb3BzLmF1dG9DbG9zZSxcbiAgICAgICAgICBhbmNob3I6IHByb3BzLm1lbnVBbmNob3IsXG4gICAgICAgICAgc2VsZjogcHJvcHMubWVudVNlbGYsXG4gICAgICAgICAgb2Zmc2V0OiBwcm9wcy5tZW51T2Zmc2V0LFxuICAgICAgICAgIHNlcGFyYXRlQ2xvc2VQb3B1cDogdHJ1ZSxcbiAgICAgICAgICBvbkJlZm9yZVNob3csXG4gICAgICAgICAgb25TaG93LFxuICAgICAgICAgIG9uQmVmb3JlSGlkZSxcbiAgICAgICAgICBvbkhpZGVcbiAgICAgICAgfSwgc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLnNwbGl0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93biBxLWJ0bi1kcm9wZG93bi0tc2ltcGxlJyxcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLmRpc2FibGVNYWluQnRuID09PSB0cnVlLFxuICAgICAgICAgIG5vV3JhcDogdHJ1ZSxcbiAgICAgICAgICByb3VuZDogZmFsc2UsXG4gICAgICAgICAgLi4uYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgICBvbkNsaWNrXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiBoU2xvdChzbG90cy5sYWJlbCwgW10pLmNvbmNhdChBcnJvdyksXG4gICAgICAgICAgbG9hZGluZzogc2xvdHMubG9hZGluZ1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChRQnRuR3JvdXAsIHtcbiAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93biBxLWJ0bi1kcm9wZG93bi0tc3BsaXQgbm8td3JhcCBxLWJ0bi1pdGVtJyxcbiAgICAgICAgb3V0bGluZTogcHJvcHMub3V0bGluZSxcbiAgICAgICAgZmxhdDogcHJvcHMuZmxhdCxcbiAgICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCxcbiAgICAgICAgc3F1YXJlOiBwcm9wcy5zcXVhcmUsXG4gICAgICAgIHB1c2g6IHByb3BzLnB1c2gsXG4gICAgICAgIHVuZWxldmF0ZWQ6IHByb3BzLnVuZWxldmF0ZWQsXG4gICAgICAgIGdsb3NzeTogcHJvcHMuZ2xvc3N5LFxuICAgICAgICBzdHJldGNoOiBwcm9wcy5zdHJldGNoXG4gICAgICB9LCAoKSA9PiBbXG4gICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd24tLWN1cnJlbnQnLFxuICAgICAgICAgIC4uLnByb3BzLFxuICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMuZGlzYWJsZU1haW5CdG4gPT09IHRydWUsXG4gICAgICAgICAgbm9XcmFwOiB0cnVlLFxuICAgICAgICAgIGljb25SaWdodDogcHJvcHMuaWNvblJpZ2h0LFxuICAgICAgICAgIHJvdW5kOiBmYWxzZSxcbiAgICAgICAgICBvbkNsaWNrOiBvbkNsaWNrSGlkZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogc2xvdHMubGFiZWwsXG4gICAgICAgICAgbG9hZGluZzogc2xvdHMubG9hZGluZ1xuICAgICAgICB9KSxcblxuICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICBjbGFzczogJ3EtYnRuLWRyb3Bkb3duX19hcnJvdy1jb250YWluZXIgcS1hbmNob3ItLXNraXAnLFxuICAgICAgICAgIC4uLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlRHJvcGRvd24gPT09IHRydWUsXG4gICAgICAgICAgb3V0bGluZTogcHJvcHMub3V0bGluZSxcbiAgICAgICAgICBmbGF0OiBwcm9wcy5mbGF0LFxuICAgICAgICAgIHJvdW5kZWQ6IHByb3BzLnJvdW5kZWQsXG4gICAgICAgICAgcHVzaDogcHJvcHMucHVzaCxcbiAgICAgICAgICBzaXplOiBwcm9wcy5zaXplLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICB0ZXh0Q29sb3I6IHByb3BzLnRleHRDb2xvcixcbiAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgcmlwcGxlOiBwcm9wcy5yaXBwbGVcbiAgICAgICAgfSwgKCkgPT4gQXJyb3cpXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uTW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlLCBuZXh0VGljaywgcHJvdmlkZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBmb3JtS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUZvcm0nLFxuXG4gIHByb3BzOiB7XG4gICAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuICAgIG5vRXJyb3JGb2N1czogQm9vbGVhbixcbiAgICBub1Jlc2V0Rm9jdXM6IEJvb2xlYW4sXG4gICAgZ3JlZWR5OiBCb29sZWFuLFxuXG4gICAgb25TdWJtaXQ6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Jlc2V0JywgJ3ZhbGlkYXRpb24tc3VjY2VzcycsICd2YWxpZGF0aW9uLWVycm9yJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGxldCB2YWxpZGF0ZUluZGV4ID0gMFxuICAgIGNvbnN0IHJlZ2lzdGVyZWRDb21wb25lbnRzID0gW11cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlIChzaG91bGRGb2N1cykge1xuICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXVxuICAgICAgY29uc3QgZm9jdXMgPSB0eXBlb2Ygc2hvdWxkRm9jdXMgPT09ICdib29sZWFuJ1xuICAgICAgICA/IHNob3VsZEZvY3VzXG4gICAgICAgIDogcHJvcHMubm9FcnJvckZvY3VzICE9PSB0cnVlXG5cbiAgICAgIGNvbnN0IGluZGV4ID0gKyt2YWxpZGF0ZUluZGV4XG5cbiAgICAgIGNvbnN0IGVtaXRFdmVudCA9IChyZXMsIHJlZikgPT4ge1xuICAgICAgICBlbWl0KCd2YWxpZGF0aW9uLScgKyAocmVzID09PSB0cnVlID8gJ3N1Y2Nlc3MnIDogJ2Vycm9yJyksIHJlZilcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWdpc3RlcmVkQ29tcG9uZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb21wID0gcmVnaXN0ZXJlZENvbXBvbmVudHNbIGkgXVxuICAgICAgICBjb25zdCB2YWxpZCA9IGNvbXAudmFsaWRhdGUoKVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsaWQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHByb21pc2VzLnB1c2goXG4gICAgICAgICAgICB2YWxpZC50aGVuKFxuICAgICAgICAgICAgICB2YWxpZCA9PiAoeyB2YWxpZCwgY29tcCB9KSxcbiAgICAgICAgICAgICAgZXJyID0+ICh7IHZhbGlkOiBmYWxzZSwgY29tcCwgZXJyIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbGlkICE9PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHByb3BzLmdyZWVkeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGVtaXRFdmVudChmYWxzZSwgY29tcClcblxuICAgICAgICAgICAgaWYgKGZvY3VzID09PSB0cnVlICYmIHR5cGVvZiBjb21wLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbXAuZm9jdXMoKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHByb21pc2VzLnB1c2goeyB2YWxpZDogZmFsc2UsIGNvbXAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGVtaXRFdmVudCh0cnVlKVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihyZXMgPT4ge1xuICAgICAgICBjb25zdCBlcnJvcnMgPSByZXMuZmlsdGVyKHIgPT4gci52YWxpZCAhPT0gdHJ1ZSlcblxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGluZGV4ID09PSB2YWxpZGF0ZUluZGV4ICYmIGVtaXRFdmVudCh0cnVlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IHZhbGlkLCBjb21wLCBlcnIgfSA9IGVycm9yc1sgMCBdXG5cbiAgICAgICAgLy8gaWYgbm90IG91dGRhdGVkIGFscmVhZHlcbiAgICAgICAgaWYgKGluZGV4ID09PSB2YWxpZGF0ZUluZGV4KSB7XG4gICAgICAgICAgZXJyICE9PSB2b2lkIDAgJiYgY29uc29sZS5lcnJvcihlcnIpXG5cbiAgICAgICAgICBlbWl0RXZlbnQoZmFsc2UsIGNvbXApXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBmb2N1cyA9PT0gdHJ1ZVxuICAgICAgICAgICAgJiYgdmFsaWQgIT09IHRydWVcbiAgICAgICAgICAgICYmIHR5cGVvZiBjb21wLmZvY3VzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb21wLmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uICgpIHtcbiAgICAgIHZhbGlkYXRlSW5kZXgrK1xuXG4gICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5mb3JFYWNoKGNvbXAgPT4ge1xuICAgICAgICB0eXBlb2YgY29tcC5yZXNldFZhbGlkYXRpb24gPT09ICdmdW5jdGlvbicgJiYgY29tcC5yZXNldFZhbGlkYXRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXQgKGV2dCkge1xuICAgICAgZXZ0ICE9PSB2b2lkIDAgJiYgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBjb25zdCBpbmRleCA9IHZhbGlkYXRlSW5kZXggKyAxXG5cbiAgICAgIHZhbGlkYXRlKCkudGhlbih2YWwgPT4ge1xuICAgICAgICAvLyBpZiBub3Qgb3V0ZGF0ZWQgJiYgdmFsaWRhdGlvbiBzdWNjZWVkZWRcbiAgICAgICAgaWYgKGluZGV4ID09PSB2YWxpZGF0ZUluZGV4ICYmIHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChwcm9wcy5vblN1Ym1pdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBlbWl0KCdzdWJtaXQnLCBldnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGV2dCAhPT0gdm9pZCAwICYmIGV2dC50YXJnZXQgIT09IHZvaWQgMCAmJiB0eXBlb2YgZXZ0LnRhcmdldC5zdWJtaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2dC50YXJnZXQuc3VibWl0KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQgKGV2dCkge1xuICAgICAgZXZ0ICE9PSB2b2lkIDAgJiYgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBlbWl0KCdyZXNldCcpXG5cbiAgICAgIG5leHRUaWNrKCgpID0+IHsgLy8gYWxsb3cgdXNlcmxhbmQgdG8gcmVzZXQgdmFsdWVzIGJlZm9yZVxuICAgICAgICByZXNldFZhbGlkYXRpb24oKVxuICAgICAgICBpZiAocHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlICYmIHByb3BzLm5vUmVzZXRGb2N1cyAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb2N1cyAoKSB7XG4gICAgICBhZGRGb2N1c0ZuKCgpID0+IHtcbiAgICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgICBjb25zdCB0YXJnZXQgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdLCBbZGF0YS1hdXRvZm9jdXNdJylcbiAgICAgICAgICB8fCBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XScpLCBlbCA9PiBlbC50YWJJbmRleCA+IC0xKVxuXG4gICAgICAgIHRhcmdldCAhPT0gbnVsbCAmJiB0YXJnZXQgIT09IHZvaWQgMCAmJiB0YXJnZXQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHByb3ZpZGUoZm9ybUtleSwge1xuICAgICAgYmluZENvbXBvbmVudCAodm1Qcm94eSkge1xuICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5wdXNoKHZtUHJveHkpXG4gICAgICB9LFxuXG4gICAgICB1bmJpbmRDb21wb25lbnQgKHZtUHJveHkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByZWdpc3RlcmVkQ29tcG9uZW50cy5pbmRleE9mKHZtUHJveHkpXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGxldCBzaG91bGRBY3RpdmF0ZSA9IGZhbHNlXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNob3VsZEFjdGl2YXRlID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBzaG91bGRBY3RpdmF0ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgJiYgZm9jdXMoKVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlICYmIGZvY3VzKClcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbih2bS5wcm94eSwge1xuICAgICAgdmFsaWRhdGUsXG4gICAgICByZXNldFZhbGlkYXRpb24sXG4gICAgICBzdWJtaXQsXG4gICAgICByZXNldCxcbiAgICAgIGZvY3VzLFxuICAgICAgZ2V0VmFsaWRhdGlvbkNvbXBvbmVudHM6ICgpID0+IHJlZ2lzdGVyZWRDb21wb25lbnRzXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdmb3JtJywge1xuICAgICAgY2xhc3M6ICdxLWZvcm0nLFxuICAgICAgcmVmOiByb290UmVmLFxuICAgICAgb25TdWJtaXQ6IHN1Ym1pdCxcbiAgICAgIG9uUmVzZXQ6IHJlc2V0XG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICAgIHBvc2l0aW9uPVwidG9wXCJcblxuICAgIHYtbW9kZWw9XCJzaG93XCJcbiAgPlxuICAgIDxxLWNhcmQgYm9yZGVyZWQgY2xhc3M9XCJxLW10LWxnXCIgc3R5bGU9XCJ3aWR0aDogNzAwcHg7IG1heC13aWR0aDogODB2dzsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2Niw2Niw2NiwwLjk3KTsgXCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+Q3JlYXRlIEFjY291bnQ8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxuXG4gICAgICAgICAgPHEtZm9ybVxuICAgICAgICAgICAgQHN1Ym1pdD1cIm9uU3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1ndXR0ZXItbWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG5cbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgIGhpbnQ9XCI0LTE2IEFscGhhbnVtZXJpYyBDaGFyYWN0ZXJzXCJcblxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICB2YWwgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPCA0IHx8IHZhbC5sZW5ndGggPiAxNilcbiAgICAgICAgICAgICAgICAgICAgeyByZXR1cm4gJ1VzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiA0LTE2IGNoYXJhY3RlcnMnfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXVzZXJuYW1lVmFsaWRhdG9yLnRlc3QodmFsKSlcbiAgICAgICAgICAgICAgICAgICAgeyByZXR1cm4gJ1VzZXJuYW1lIG11c3Qgb25seSBjb25zaXN0IG9mIEFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzJyB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBdXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG5cbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJCZXR3ZWVuIDYgLSA2NCBjaGFyYWN0ZXJzXCJcblxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+IHBhc3N3b3JkVmFsaWRhdG9yLnRlc3QodmFsKSB8fCAnUGFzc3dvcmQgbXVzdCBiZSBiZXR3ZWVuIDYgLSA2NCBjaGFyYWN0ZXJzJyBdXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG5cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkUmVwZWF0XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZCAoUmVwZWF0KVwiXG5cbiAgICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgICA6cnVsZXM9XCJbIHZhbCA9PiB2YWwgPT09IHBhc3N3b3JkIHx8ICdQYXNzd29yZCBkb2VzIG5vXFwndCBtYXRjaCcgXVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cS1idG4gbGFiZWw9XCJDcmVhdGUgQWNjb3VudFwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIiBzaXplPVwibGdcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zMilcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3EtZm9ybT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnR9IGZyb20gXCJ2dWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1JlZ2lzdHJhdGlvbk1vZGFsJ1xufSk7XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7cmVmfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQge1VzZXJBcGksIFJlZ2lzdGVyUmVxdWVzdCwgUHJvYmxlbURldGFpbHN9IGZyb20gXCJhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaVwiO1xuaW1wb3J0IHtRRGlhbG9nLCB1c2VRdWFzYXJ9IGZyb20gXCJxdWFzYXJcIjtcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gXCJzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXJcIjtcblxuY29uc3Qgc2hvdyA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IGFwaUNvbmZpZyA9IEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKGZhbHNlKTtcbmNvbnN0IHVzZXJBcGkgPSBuZXcgVXNlckFwaShhcGlDb25maWcpO1xuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcblxuY29uc3Qgb25TdWJtaXQgPSAoZXZ0OiBTdWJtaXRFdmVudCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBwYXlsb2FkOiBSZWdpc3RlclJlcXVlc3QgPSB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvOiB7XG4gICAgICB1c2VyTmFtZTogdXNlcm5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQudmFsdWVcbiAgICB9XG4gIH07XG5cbiAgY29uc29sZS5sb2coJ1N1Ym1pdHRpbmcgUmVnaXN0ZXIgUmVxdWVzdCcpO1xuICB1c2VyQXBpLnJlZ2lzdGVyKHBheWxvYWQpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgbWVzc2FnZTogJ0FjY291bnQgQ3JlYXRlZCcsXG4gICAgICAgIGNvbG9yOiAncG9zaXRpdmUnLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIHRpbWVvdXQ6IDcwMDBcbiAgICAgIH0pO1xuICAgICAgc2hvdy52YWx1ZSA9IGZhbHNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZXN1bHQpID0+IHJlc3VsdC5yZXNwb25zZS5qc29uKCkudGhlbigocjogUHJvYmxlbURldGFpbHMpID0+IHtcbiAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgIG1lc3NhZ2U6IHIuZGV0YWlsISxcbiAgICAgICAgY29sb3I6ICduZWdhdGl2ZScsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgY2FwdGlvbjogJ0Vycm9yIHdoZW4gY3JlYXRpbmcgYW4gYWNjb3VudCcsXG4gICAgICAgIHRpbWVvdXQ6IDcwMDBcbiAgICAgIH0pO1xuICAgIH0pKTtcbn07XG5cbmNvbnN0IHVzZXJuYW1lVmFsaWRhdG9yID0gbmV3IFJlZ0V4cCgnXltBLVphLXpcXFxcZFxcXFwtXy5dezQsMTZ9JCcpO1xuY29uc3QgcGFzc3dvcmRWYWxpZGF0b3IgPSBuZXcgUmVnRXhwKCdeLns2LDY0fSQnKTtcblxuY29uc3QgdXNlcm5hbWUgPSByZWYoKTtcbmNvbnN0IHBhc3N3b3JkID0gcmVmKCk7XG5jb25zdCBwYXNzd29yZFJlcGVhdCA9IHJlZigpO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHYtbW9kZWw9XCJzaG93XCJcblxuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgPlxuICAgIDxxLWNhcmQgYm9yZGVyZWQgY2xhc3M9XCJxLW10LWxnXCIgc3R5bGU9XCJ3aWR0aDogNzAwcHg7IG1heC13aWR0aDogODB2dzsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2Niw2Niw2NiwwLjk3KTsgXCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+TG9naW48L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxuXG4gICAgICAgICAgPHEtZm9ybVxuICAgICAgICAgICAgQHN1Ym1pdD1cIm9uU3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1ndXR0ZXItbWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxxLWJ0biBsYWJlbD1cIkxvZ2luXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiZnVsbC13aWR0aFwiIHNpemU9XCJsZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZ1bGwtaGVpZ2h0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgQGNsaWNrPVwic2hvd1JlZ2lzdGVyRGlhbG9nXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY3Vyc29yOiBwb2ludGVyO1wiPkNyZWF0ZSBBY2NvdW50PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLWZvcm0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50fSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTG9naW5Nb2RhbCdcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7dXNlUXVhc2FyfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbk1vZGFsIGZyb20gJ2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uTW9kYWwudnVlJztcbmltcG9ydCB7TG9naW5SZXF1ZXN0LCBMb2dpblJlc3VsdCwgUHJvYmxlbURldGFpbHMsIFVzZXJBcGl9IGZyb20gXCJhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaVwiO1xuaW1wb3J0IHt1c2VBdXRoU3RvcmV9IGZyb20gXCJzdG9yZXMvYXV0aERhdGFTdG9yZVwiO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSBcInNyYy91dGlscy9BcGlDb25maWdQcm92aWRlclwiO1xuXG5jb25zdCB7IHNldEF1dGhGcm9tTG9naW5SZXN1bHQgfSA9IHVzZUF1dGhTdG9yZSgpO1xuXG5jb25zdCBzaG93ID0gcmVmKGZhbHNlKTtcblxuY29uc3QgYXBpQ29uZmlnID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoZmFsc2UpO1xuY29uc3QgdXNlckFwaSA9IG5ldyBVc2VyQXBpKGFwaUNvbmZpZyk7XG5cbmNvbnN0IG9uU3VibWl0ID0gKGV2dDogU3VibWl0RXZlbnQgfCBFdmVudCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBwYXlsb2FkOiBMb2dpblJlcXVlc3QgPSB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvOiB7XG4gICAgICB1c2VyTmFtZTogdXNlcm5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQudmFsdWVcbiAgICB9XG4gIH07XG5cbiAgdXNlckFwaS5sb2dpbihwYXlsb2FkKVxuICAgIC50aGVuKChyZXN1bHQ6IExvZ2luUmVzdWx0KSA9PiB7XG4gICAgICAkcS5ub3RpZnkoe1xuICAgICAgICBtZXNzYWdlOiAnTG9nZ2VkIGluJyxcbiAgICAgICAgY29sb3I6ICdwb3NpdGl2ZScsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgdGltZW91dDogNzAwMFxuICAgICAgfSk7XG5cbiAgICAgIHNldEF1dGhGcm9tTG9naW5SZXN1bHQocmVzdWx0KTtcblxuICAgICAgc2hvdy52YWx1ZSA9IGZhbHNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZXN1bHQpID0+IHJlc3VsdC5yZXNwb25zZS5qc29uKCkudGhlbigocjogUHJvYmxlbURldGFpbHMpID0+IHtcbiAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgIG1lc3NhZ2U6IHIuZGV0YWlsISxcbiAgICAgICAgY29sb3I6ICduZWdhdGl2ZScsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgY2FwdGlvbjogJ0Vycm9yIHdoZW4gbG9nZ2luZyBpbicsXG4gICAgICAgIHRpbWVvdXQ6IDcwMDBcbiAgICAgIH0pO1xuICAgIH0pKTtcbn07XG5cbmNvbnN0IHVzZXJuYW1lID0gcmVmKCk7XG5jb25zdCBwYXNzd29yZCA9IHJlZigpO1xuXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBzaG93UmVnaXN0ZXJEaWFsb2cgPSAoKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBSZWdpc3RyYXRpb25Nb2RhbFxuICB9KTtcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicS1teC1tZFwiPlxuICAgIDxkaXY+XG4gICAgICA8cS1idG4gdi1pZj1cIiFpc0xvZ2dlZEluUmVhY3RpdmVcIiBAY2xpY2s9XCJzaG93TG9naW5EaWFsb2dcIiBvdXRsaW5lIHRleHQtY29sb3I9XCJ3aGl0ZVwiIGxhYmVsPVwiTG9naW5cIiBzaXplPVwibWRcIiBzdHlsZT1cIndpZHRoOiAxMDBweFwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8cS1idG4tZHJvcGRvd24gdi1pZj1cImlzTG9nZ2VkSW5SZWFjdGl2ZVwiIHJvdW5kZWQgOmxhYmVsPVwiZ2V0VXNlcm5hbWVcIiBzdHlsZT1cIndpZHRoOiAxNTBweFwiPlxuICAgICAgPHEtbGlzdD5cbiAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkFjY291bnQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+U2V0dGluZ3M8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1zZXBhcmF0b3IgY2xhc3M9XCJxLW15LW1kXCIgLz5cblxuICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+TG9nb3V0PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1idG4tZHJvcGRvd24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJ2NvbXBvbmVudHMvTG9naW5Nb2RhbC52dWUnXG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSBcInF1YXNhclwiO1xuaW1wb3J0IHt1c2VBdXRoU3RvcmV9IGZyb20gXCJzdG9yZXMvYXV0aERhdGFTdG9yZVwiO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHtzdG9yZVRvUmVmc30gZnJvbSBcInBpbmlhXCI7XG5cbmNvbnN0IHsgaXNMb2dnZWRJbiwgZ2V0VXNlcm5hbWUgfSA9IHVzZUF1dGhTdG9yZSgpO1xuXG5jb25zdCBpc0xvZ2dlZEluUmVhY3RpdmUgPSBjb21wdXRlZCgoKSA9PiBpc0xvZ2dlZEluKTtcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHNob3dMb2dpbkRpYWxvZyA9ICgpID0+IHtcbiAgJHEuZGlhbG9nKHtcbiAgICBjb21wb25lbnQ6IExvZ2luTW9kYWxcbiAgfSk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cS1saXN0IHBhZGRpbmc+XG4gICAgICA8cS1pdGVtPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtIHRleHQtaDVcIj5cbiAgICAgICAgICAgICAgTE9HTyBIRVJFXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cblxuICAgIDxxLWxpc3QgcGFkZGluZz5cbiAgICAgIDxxLWl0ZW0gdi1mb3I9XCJsaW5rIGluIG5hdmlnYXRpb25zXCIgOmtleT1cImxpbmsudGV4dFwiXG4gICAgICAgICAgICAgIHYtcmlwcGxlIGNsaWNrYWJsZSA6aW5zZXQtbGV2ZWw9MC4zXG4gICAgICAgICAgICAgIDp0bz1cImxpbmsucm91dGVcIiBleGFjdFxuICAgICAgICAgICAgICA6YWN0aXZlPVwiY3VycmVudFBhdGggPT09IGxpbmsucm91dGUubmFtZVwiXG4gICAgICAgICAgICAgIGFjdGl2ZS1jbGFzcz1cInRleHQtd2hpdGUgYmctZ3JleS04IHRleHQtd2VpZ2h0LWJvbGRlclwiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWljb24gOm5hbWU9XCJsaW5rLmljb25cIiBzaXplPVwiMjRweFwiLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICB7e2xpbmsudGV4dH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cblxuICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1teS1zbVwiIC8+XG5cbiAgICAgIDxxLWl0ZW0gdi1mb3I9XCJsaW5rIGluIGNvbGxlY3Rpb25OYXZpZ2F0aW9uc1wiIDprZXk9XCJsaW5rLnRleHRcIlxuICAgICAgICAgICAgICB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuM1xuICAgICAgICAgICAgICA6dG89XCJsaW5rLnJvdXRlXCIgZXhhY3RcbiAgICAgICAgICAgICAgOmFjdGl2ZT1cImN1cnJlbnRQYXRoID09PSBsaW5rLnJvdXRlLm5hbWVcIlxuICAgICAgICAgICAgICBhY3RpdmUtY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWdyZXktOCB0ZXh0LXdlaWdodC1ib2xkZXJcIj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIDpuYW1lPVwibGluay5pY29uXCIgc2l6ZT1cIjI0cHhcIi8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAge3tsaW5rLnRleHR9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgIDxxLWl0ZW0gdi1yaXBwbGUgY2xpY2thYmxlIDppbnNldC1sZXZlbD0wLjM+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvbiA6bmFtZT1cIm91dGxpbmVkUGxheWxpc3RBZGRcIiBzaXplPVwiMzJweFwiLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICAgIENyZWF0ZSBQbGF5bGlzdFxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuXG4gICAgICA8cS1pdGVtIHYtZm9yPVwiaXRlbSBpbiBwbGF5bGlzdEl0ZW1zXCIgOmtleT1cIml0ZW1cIlxuICAgICAgICAgICAgICB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuMz5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIDpuYW1lPVwib3V0bGluZWRQbGF5bGlzdFBsYXlcIiBzaXplPVwiMzJweFwiLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICAgIHt7aXRlbX19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50fSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnRHJhd2VyTmF2aWdhdGlvbicsXG4gIGNvbXBvbmVudHM6IHtcbiAgfVxufSlcbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRIb21lLFxuICBvdXRsaW5lZFBsYXlsaXN0QWRkLFxuICBvdXRsaW5lZFBsYXlsaXN0UGxheSxcbiAgb3V0bGluZWRTZWFyY2gsXG4gIG91dGxpbmVkTGlicmFyeU11c2ljLFxuICBvdXRsaW5lZFJhZGlvLFxuICBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyLFxuICBvdXRsaW5lZEhpc3Rvcnlcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgY3VycmVudFBhdGggPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLm5hbWU7XG59KVxuXG5jb25zdCBuYXZpZ2F0aW9ucyA9IFtcbiAge1xuICAgIHRleHQ6ICdIb21lJyxcbiAgICBpY29uOiBvdXRsaW5lZEhvbWUsXG4gICAgcm91dGU6IHsgbmFtZTogJ2hvbWUnIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdTZWFyY2gnLFxuICAgIGljb246IG91dGxpbmVkU2VhcmNoLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdzZWFyY2gnIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdSYWRpbycsXG4gICAgaWNvbjogb3V0bGluZWRSYWRpbyxcbiAgICByb3V0ZTogeyBuYW1lOiAncmFkaW8nIH1cbiAgfVxuXVxuXG5jb25zdCBjb2xsZWN0aW9uTmF2aWdhdGlvbnMgPSBbXG4gIHtcbiAgICB0ZXh0OiAnTGlicmFyeScsXG4gICAgaWNvbjogb3V0bGluZWRMaWJyYXJ5TXVzaWMsXG4gICAgcm91dGU6IHsgbmFtZTogJ2xpYnJhcnknIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdIaXN0b3J5JyxcbiAgICBpY29uOiBvdXRsaW5lZEhpc3RvcnksXG4gICAgcm91dGU6IHsgbmFtZTogJ2hpc3RvcnknIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdGYXZvcml0ZScsXG4gICAgaWNvbjogb3V0bGluZWRGYXZvcml0ZUJvcmRlcixcbiAgICByb3V0ZTogeyBuYW1lOiAnZmF2b3JpdGUnIH1cbiAgfVxuXVxuXG5jb25zdCBwbGF5bGlzdEl0ZW1zID0gW1xuICAncGxheWxpc3QxJyxcbiAgJ2FiYycsXG4gICdkYXNrZHBhb3NkYXNkJyxcbiAgJ2FzZGYnXG5dXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1sYXlvdXQgdmlldz1cImxIaCBMcFIgZkZmXCI+XG4gICAgPHEtaGVhZGVyIGlkPVwiaGVhZGVyXCIgYm9yZGVyZWQ+XG4gICAgICA8cS10b29sYmFyPlxuICAgICAgICA8cS10b29sYmFyLXRpdGxlPlxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IHNpemU9XCJsZ1wiIGNvbG9yPVwid2hpdGVcIiA6aWNvbj1cIm91dGxpbmVkQXJyb3dCYWNrXCIgQGNsaWNrPVwiYmFja1wiPlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgc2l6ZT1cImxnXCIgY29sb3I9XCJ3aGl0ZVwiIDppY29uPVwib3V0bGluZWRBcnJvd0ZvcndhcmRcIiBAY2xpY2s9XCJmb3J3YXJkXCI+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XG5cbiAgICAgICAgPHEtc3BhY2UgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItc20gcm93IGl0ZW1zLWNlbnRlciBuby13cmFwXCI+XG4gICAgICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgOmljb249XCJvdXRsaW5lZEluZm9cIiB2LWlmPVwiJHEuc2NyZWVuLmd0LnNtXCI+XG4gICAgICAgICAgICA8cS10b29sdGlwPkFib3V0PC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRTZXR0aW5nc1wiIHYtaWY9XCIkcS5zY3JlZW4uZ3Quc21cIj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXA+U2V0dGluZ3M8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgPFVzZXJBY2NvdW50QnV0dG9uPjwvVXNlckFjY291bnRCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLXRvb2xiYXI+XG5cbiAgICA8L3EtaGVhZGVyPlxuXG4gICAgPHEtZHJhd2VyIHNob3ctaWYtYWJvdmUgc2lkZT1cImxlZnRcIiA6d2lkdGg9XCIyNzBcIj5cbiAgICAgIDxkcmF3ZXItbmF2aWdhdGlvbj48L2RyYXdlci1uYXZpZ2F0aW9uPlxuICAgIDwvcS1kcmF3ZXI+XG5cbiAgICA8cS1kcmF3ZXIgdi1tb2RlbD1cInNob3dRdWV1ZVwiIHNpZGU9XCJyaWdodFwiIDp3aWR0aD1cIjI3MFwiPlxuICAgICAgPGRyYXdlci1xdWV1ZSBpZD1cInF1ZXVlLWRyYXdlclwiPjwvZHJhd2VyLXF1ZXVlPlxuICAgIDwvcS1kcmF3ZXI+XG5cbiAgICA8cS1wYWdlLWNvbnRhaW5lciA6c3R5bGU9XCJ7IGJhY2tncm91bmQ6IGJnR3JhZGllbnQgfVwiIHN0eWxlPVwidHJhbnNpdGlvbjogYmFja2dyb3VuZCwgMjUwbXMsIGxpbmVhciAhaW1wb3J0YW50O1wiPlxuICAgICAgPHJvdXRlci12aWV3IHYtc2xvdD1cInsgQ29tcG9uZW50IH1cIj5cbiAgICAgICAgPGtlZXAtYWxpdmUgaW5jbHVkZT1cIkhvbWVQYWdlXCI+XG4gICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJDb21wb25lbnRcIj48L2NvbXBvbmVudD5cbiAgICAgICAgPC9rZWVwLWFsaXZlPlxuICAgICAgPC9yb3V0ZXItdmlldz5cbiAgICA8L3EtcGFnZS1jb250YWluZXI+XG5cbiAgICA8cS1mb290ZXI+XG4gICAgICA8cGxheWVyLWNvbnRyb2w+PC9wbGF5ZXItY29udHJvbD5cbiAgICA8L3EtZm9vdGVyPlxuXG4gIDwvcS1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnO1xuaW1wb3J0IERyYXdlck5hdmlnYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9EcmF3ZXJOYXZpZ2F0aW9uLnZ1ZSdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYWluTGF5b3V0JyxcbiAgY29tcG9uZW50czoge1xuICAgIERyYXdlck5hdmlnYXRpb25cbiAgfVxufSk7XG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkSW5mbyxcbiAgb3V0bGluZWRBcnJvd0ZvcndhcmQsXG4gIG91dGxpbmVkQXJyb3dCYWNrLFxuICBvdXRsaW5lZExpZ2h0TW9kZSxcbiAgb3V0bGluZWREYXJrTW9kZSxcbiAgb3V0bGluZWRTZXR0aW5nc1xufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7Y29tcHV0ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7IHVzZVF1YXNhciwgc2V0Q3NzVmFyIH0gZnJvbSAncXVhc2FyJztcbmltcG9ydCBQbGF5ZXJDb250cm9sIGZyb20gJ2NvbXBvbmVudHMvUGxheWVyQ29udHJvbC52dWUnO1xuaW1wb3J0IHt1c2VRdWV1ZURpc3BsYXlTdG9yZX0gZnJvbSAnc3RvcmVzL3Nob3dRdWV1ZSc7XG5pbXBvcnQgRHJhd2VyUXVldWUgZnJvbSBcImNvbXBvbmVudHMvRHJhd2VyUXVldWUudnVlXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSBcInN0b3Jlcy9wYWdlQ29udGFpbmVyQmdcIjtcbmltcG9ydCB7c3RvcmVUb1JlZnN9IGZyb20gXCJwaW5pYVwiO1xuaW1wb3J0IFVzZXJBY2NvdW50QnV0dG9uIGZyb20gXCJjb21wb25lbnRzL1VzZXJBY2NvdW50QnV0dG9uLnZ1ZVwiO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgY29udGFpbmVyQmcgPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IGJhY2sgPSAoKSA9PiB7XG4gIHJvdXRlci5iYWNrKCk7XG59XG5cbmNvbnN0IGZvcndhcmQgPSAoKSA9PiB7XG4gIHJvdXRlci5mb3J3YXJkKCk7XG59XG5cbmNvbnN0IGJnR3JhZGllbnQgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBgbGluZWFyLWdyYWRpZW50KDE4MGRlZywgJHtjb250YWluZXJCZy5nZXRHcmFkaWVudDF9IDAlLCAke2NvbnRhaW5lckJnLmdldEdyYWRpZW50Mn0gMzAlLCByZ2JhKDAsMCwwLDEpIDUwJSlgO1xufSk7XG5cbmNvbnN0IHF1ZXVlRGlzcGxheVN0b3JlID0gdXNlUXVldWVEaXNwbGF5U3RvcmUoKTtcblxuY29uc3Qgc2hvd1F1ZXVlID0gY29tcHV0ZWQoKCkgPT4gcXVldWVEaXNwbGF5U3RvcmUuc2hvdylcblxuY29uc3QgcSA9IHVzZVF1YXNhcigpO1xucS5kYXJrLnNldCh0cnVlKVxuc2V0Q3NzVmFyKCdwcmltYXJ5JywgJyMwMDAwMDAnKVxuXG5mdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcbiAgcS5kYXJrLnRvZ2dsZSgpO1xuICBpZiAocS5kYXJrLmlzQWN0aXZlKVxuICB7XG4gICAgc2V0Q3NzVmFyKCdwcmltYXJ5JywgJyMwMDAwMDAnKVxuICB9XG4gIGVsc2VcbiAge1xuICAgIHNldENzc1ZhcigncHJpbWFyeScsICcjZmZmZmZmJylcbiAgfVxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuI3EtYXBwID4gZGl2ID4gZGl2Om50aC1jaGlsZCgzKSA+IGFzaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbn1cblxuI2hlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU0LCA1NCwgMC43KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpO1xufVxuXG4jcXVldWUtZHJhd2VyIHtcbiAgLypiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpOyovXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTYsIDU0LCA1NCwgMC42Myk7XG4gIC8qYmFja2Ryb3AtZmlsdGVyOiBibHVyKDI1cHgpOyovXG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbInZhbHVlIiwicnVudGltZS5CYXNlQVBJIiwicnVudGltZS5KU09OQXBpUmVzcG9uc2UiLCJvZmZzZXQiLCJzdHlsZSIsInBvc2l0aW9uIiwic2l6ZSIsImhlaWdodCIsIndpZHRoIiwidGltZXIiLCJfX2RlZmF1bHRfXyIsInN0ZXAiLCJkcmFnZ2luZyIsImNsYXNzZXMiLCJyYXRpbyIsInVpZCIsImZvY3VzIiwicmVmIiwidmFsaWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQXlETyxTQUFTLG9CQUFvQixNQUF3QjtBQUNqRCxTQUFBLHlCQUF5QixJQUFXO0FBQy9DO0FBRWdCLFNBQUEseUJBQXlCLE1BQVcscUJBQTJDO0FBQ3RGLE1BQUEsU0FBUyxVQUFlLFNBQVMsTUFBTztBQUNsQyxXQUFBO0FBQUEsRUFDWDtBQUNPLFNBQUE7QUFBQSxJQUVILFlBQVksQ0FBQyxPQUFPLE1BQU0sVUFBVSxJQUFJLFNBQVksS0FBSztBQUFBLElBQ3pELGdCQUFnQixDQUFDLE9BQU8sTUFBTSxjQUFjLElBQUksU0FBWSxLQUFLO0FBQUEsSUFDakUsWUFBWSxDQUFDLE9BQU8sTUFBTSxVQUFVLElBQUksU0FBWSxrQkFBa0IsS0FBSyxXQUFXO0FBQUEsRUFBQTtBQUU5RjtBQ3BCTyxTQUFTLGFBQWEsTUFBaUI7QUFDbkMsU0FBQSxrQkFBa0IsSUFBVztBQUN4QztBQUVnQixTQUFBLGtCQUFrQixNQUFXLHFCQUFvQztBQUN4RSxNQUFBLFNBQVMsVUFBZSxTQUFTLE1BQU87QUFDbEMsV0FBQTtBQUFBLEVBQ1g7QUFDTyxTQUFBO0FBQUEsSUFFSCxZQUFZLENBQUMsT0FBTyxNQUFNLFVBQVUsSUFBSSxTQUFZLEtBQUs7QUFBQSxJQUN6RCxTQUFTLENBQUMsT0FBTyxNQUFNLE9BQU8sSUFBSSxTQUFhLEtBQUssYUFBYSxPQUFPLE9BQVEsS0FBSyxTQUF3QixJQUFJLFlBQVk7QUFBQSxFQUFBO0FBRXJJO0FDY08sU0FBUyxhQUFhLE1BQWlCO0FBQ25DLFNBQUEsa0JB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

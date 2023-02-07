import { j as exists, A as AuthTokenFromJSON, B as BaseAPI, J as JSONApiResponse, k as createComponent, c as computed, h, l as hSlot, i as inject, m as emptyRenderFn, r as ref, w as watch, n as onBeforeUnmount, p as hUniqueSlot, g as getCurrentInstance, q as layoutKey, u as useModelToggleProps, t as useDarkProps, v as useModelToggleEmits, x as useDark, y as useTimeout, z as useModelToggle, C as useHistory, o as onMounted, D as nextTick, E as withDirectives, G as hDir, H as usePreventScroll, I as provide, K as pageContainerKey, L as isRuntimeSsrPreHydration, M as hMergeSlot, N as getScrollbarWidth, O as reactive, a as onUnmounted, _ as _export_sfc, P as defineComponent, Q as QueueController, R as queueEvents, S as useRouter, U as openBlock, V as createBlock, W as withCtx, d as createVNode, X as QCardSection, Y as createBaseVNode, Z as toDisplayString, $ as QCardActions, a0 as QBtn, a1 as unref, a2 as QCard, a3 as createCommentVNode, a4 as isNumber, a5 as isObject, a6 as useFormProps, a7 as position, a8 as useFormInject, a9 as useFormAttrs, aa as stopAndPrevent, ab as audioEvents, ac as createElementBlock, ad as createTextVNode, ae as audioController, F as Fragment, af as defineStore, ag as QIcon, ah as Transition, ai as shallowReactive, aj as useRouterLinkProps, ak as uid, al as QSeparator, am as vShow, an as useSpinnerProps, ao as useSpinner, ap as QAvatar, aq as normalizeClass, ar as renderList, as as useBtnProps, at as useTransitionProps, au as getBtnDesignAttr, av as stop, aw as onDeactivated, ax as onActivated, ay as vmIsDestroyed, az as addFocusFn, aA as formKey, aB as ApiConfigProvider, aC as QInput, aD as QDialog, aE as useAuthStore, aF as tabsKey, aG as Ripple, aH as isKeyCode, aI as shouldIgnoreKey, aJ as isDeepEqual, aK as useTick, aL as createDirective, aM as client, aN as noop, aO as leftClick, aP as addEvt, aQ as preventDraggable, aR as cleanEvt, aS as getNormalizedVNodes, aT as KeepAlive, aU as QRadio, aV as setCssVar, aW as resolveComponent, b as isRef, aX as resolveDynamicComponent, aY as normalizeStyle } from "./index.a0cb291c.js";
import { o as outlinedFavoriteBorder, a as outlinedPlaylistAddCircle, Q as QTooltip, b as outlinedSkipPrevious, c as outlinedPlayArrow, d as outlinedPause, e as outlinedSkipNext, f as outlinedRepeat, g as outlinedShuffle, h as outlinedQueueMusic, i as outlinedDelete, j as outlinedPlaylistPlay, k as outlinedLibraryMusic, l as outlinedHistory, m as outlinedHome, n as outlinedSearch, p as outlinedRadio, q as outlinedArrowBack, r as outlinedArrowForward, s as outlinedInfo, t as outlinedSettings } from "./index.ef3265d8.js";
import { Q as QResizeObserver, T as TouchPan, a as QScrollObserver, g as getModifierDirections, s as shouldStart } from "./QScrollObserver.9550fee1.js";
import { b as between } from "./format.a33550d6.js";
import { u as useQuasar } from "./use-quasar.d42054d9.js";
import { Q as QImg } from "./QImg.6f76b7ef.js";
import { A as AddToPlaylistSelector, u as usePlaylistStore } from "./AddToPlaylistSelector.2cf6e889.js";
import { Q as QItemSection, a as QItem, b as QMenu } from "./QMenu.28965936.js";
import { d as durationToSeconds, f as formatDuration, s as secondsToDuration } from "./durationUtils.f059d1b6.js";
import { Q as QItemLabel, r as rtlHasScrollBug } from "./QSelect.323b7d6d.js";
import { Q as QList } from "./QList.b4e8a974.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.77fae424.js";
import { C as ClosePopup, P as PlaylistApi } from "./ClosePopup.23d6e2a9.js";
import { c as clearSelection } from "./position-engine.d67bdca4.js";
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
function OkResultFromJSON(json) {
  return OkResultFromJSONTyped(json);
}
function OkResultFromJSONTyped(json, ignoreDiscriminator) {
  if (json === void 0 || json === null) {
    return json;
  }
  return {
    "statusCode": !exists(json, "statusCode") ? void 0 : json["statusCode"]
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
function UserCredentialsDtoToJSON(value) {
  if (value === void 0) {
    return void 0;
  }
  if (value === null) {
    return null;
  }
  return {
    "userName": value.userName,
    "password": value.password
  };
}
class UserApi extends BaseAPI {
  async apiUserLogoutPostRaw(requestParameters, initOverrides) {
    const queryParameters = {};
    const headerParameters = {};
    headerParameters["Content-Type"] = "application/json";
    if (this.configuration && this.configuration.apiKey) {
      headerParameters["Authorization"] = this.configuration.apiKey("Authorization");
    }
    const response = await this.request({
      path: `/api/user/logout`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.body
    }, initOverrides);
    return new JSONApiResponse(response, (jsonValue) => OkResultFromJSON(jsonValue));
  }
  async apiUserLogoutPost(requestParameters = {}, initOverrides) {
    const response = await this.apiUserLogoutPostRaw(requestParameters, initOverrides);
    return await response.value();
  }
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
    return () => h("div", { class: classes.value, role: "toolbar" }, hSlot(slots.default));
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
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QHeader needs to be child of QLayout");
      return emptyRenderFn;
    }
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
    "onLayout",
    "miniState"
  ],
  setup(props, { slots, emit, attrs }) {
    const vm = getCurrentInstance();
    const { proxy: { $q } } = vm;
    const isDark = useDark(props, $q);
    const { preventBodyScroll } = usePreventScroll();
    const { registerTimeout, removeTimeout } = useTimeout();
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QDrawer needs to be child of QLayout");
      return emptyRenderFn;
    }
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
      if (noEvent !== true) {
        registerTimeout(() => {
          emit("hide", evt);
        }, duration);
      } else {
        removeTimeout();
      }
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
      emit("onLayout", val);
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
      emit("miniState", val);
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
      emit("onLayout", onLayout.value);
      emit("miniState", isMini.value);
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
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QPageContainer needs to be child of QLayout");
      return emptyRenderFn;
    }
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
    const $layout = inject(layoutKey, emptyRenderFn);
    if ($layout === emptyRenderFn) {
      console.error("QFooter needs to be child of QLayout");
      return emptyRenderFn;
    }
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
        props.onScrollHeight !== void 0 && emit("scrollHeight", newHeight);
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
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "TrackInfoCard",
  setup(__props) {
    const songQueue = QueueController.getInstance();
    const currentlyPlaying = ref(null);
    queueEvents.currentPlayingChanged.on(({ prev, curr }) => {
      currentlyPlaying.value = curr;
    });
    const router = useRouter();
    const gotoArtist = () => {
      var _a, _b;
      router.push({ name: "artist", params: { artist: (_b = (_a = songQueue.currentlyPlaying) == null ? void 0 : _a.Track.album) == null ? void 0 : _b.albumArtist[0].name } });
    };
    const gotoAlbum = () => {
      var _a, _b;
      router.push({ name: "album", params: { albumId: (_b = (_a = songQueue.currentlyPlaying) == null ? void 0 : _a.Track.album) == null ? void 0 : _b.id } });
    };
    const gotoTrack = () => {
      var _a;
      router.push({ name: "track", params: { trackId: (_a = songQueue.currentlyPlaying) == null ? void 0 : _a.Track.id } });
    };
    return (_ctx, _cache) => {
      return currentlyPlaying.value !== null ? (openBlock(), createBlock(QCard, {
        key: 0,
        class: "my-card bg-black",
        flat: ""
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, { horizontal: "" }, {
            default: withCtx(() => [
              createVNode(QImg, {
                style: { "height": "125px", "max-width": "125px" },
                src: currentlyPlaying.value.track.album.thumbnail.small.url
              }, null, 8, ["src"]),
              createVNode(QCardSection, { class: "justify-around q-py-none" }, {
                default: withCtx(() => [
                  createBaseVNode("div", {
                    class: "text-h6 link",
                    onClick: gotoTrack
                  }, toDisplayString(currentlyPlaying.value.track.name._default), 1),
                  createBaseVNode("div", {
                    class: "text-subtitle2 link",
                    onClick: gotoAlbum
                  }, toDisplayString(currentlyPlaying.value.track.album.albumName._default), 1),
                  createBaseVNode("div", {
                    class: "text-subtitle1 text-grey q-py-sm link",
                    onClick: gotoArtist
                  }, toDisplayString(currentlyPlaying.value.track.album.albumArtist[0].name), 1)
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
                  }, {
                    default: withCtx(() => [
                      createVNode(AddToPlaylistSelector, {
                        "track-id": currentlyPlaying.value.track.id
                      }, null, 8, ["track-id"])
                    ]),
                    _: 1
                  }, 8, ["icon"])
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
var TrackInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__file", "TrackInfoCard.vue"]]);
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
    let value = props.min;
    do {
      acc.push(value);
      value += step2;
    } while (value < max);
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
      return markerTicks.value.map((value) => {
        const item = def(value);
        return isObject(item) === true ? { ...item, value } : { value, label: item };
      });
    }
    const filterFn = ({ value }) => value >= props.min && value <= props.max;
    if (Array.isArray(def) === true) {
      return def.map((item) => isObject(item) === true ? item : { value: item }).filter(filterFn);
    }
    return Object.keys(def).map((key) => {
      const item = def[key];
      const value = Number(key);
      return isObject(item) === true ? { ...item, value } : { value, label: item };
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
const _hoisted_1$b = { class: "row full-width justify-center q-pt-sm" };
const _hoisted_2$9 = /* @__PURE__ */ createTextVNode("Previous");
const _hoisted_3$8 = /* @__PURE__ */ createTextVNode("Next");
const _hoisted_4$5 = {
  key: 0,
  class: "row full-width q-pt-lg"
};
const __default__$6 = {
  name: "MediaControl"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  setup(__props) {
    const currentTime = ref(0);
    const isPanningProgress = ref(false);
    const isUpdating = ref(false);
    const queueController = QueueController.getInstance();
    const paused = ref(false);
    const currentlyPlaying = ref(null);
    queueEvents.currentPlayingChanged.on(({ prev, curr }) => {
      currentlyPlaying.value = curr;
    });
    audioEvents.playbackPaused.on(() => {
      paused.value = true;
    });
    audioEvents.playbackResumed.on(() => {
      paused.value = false;
    });
    const onPan = (phase) => {
      if (phase === "start") {
        isPanningProgress.value = true;
      } else {
        audioController.seek(currentTime.value);
        setTimeout(() => {
          isPanningProgress.value = false;
        }, 0);
      }
    };
    const onChange = (k) => {
      if (isPanningProgress.value) {
        return;
      }
      isUpdating.value = true;
      audioController.seek(k);
      setTimeout(() => {
        isUpdating.value = false;
      }, 0);
    };
    const totalTime = computed(() => {
      if (currentlyPlaying.value !== null) {
        return durationToSeconds(currentlyPlaying.value.Track.duration);
      }
      return -1;
    });
    audioEvents.playbackProgressed.on(({ prev, curr }) => {
      if (isPanningProgress.value || isUpdating.value) {
        return;
      }
      currentTime.value = curr;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$b, [
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
                  _hoisted_2$9
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
            icon: paused.value ? unref(outlinedPlayArrow) : unref(outlinedPause),
            onClick: _cache[1] || (_cache[1] = ($event) => unref(audioController).togglePause())
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(paused.value ? "Play" : "Pause"), 1)
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
                  _hoisted_3$8
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"])
        ]),
        currentlyPlaying.value !== null ? (openBlock(), createElementBlock("div", _hoisted_4$5, [
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
                "onUpdate:modelValue": [
                  _cache[3] || (_cache[3] = ($event) => currentTime.value = $event),
                  onChange
                ],
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
              createTextVNode(toDisplayString(unref(formatDuration)(currentlyPlaying.value.Track.duration)), 1)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var MediaControl = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__file", "MediaControl.vue"]]);
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
const _hoisted_1$a = { class: "row full-width full-height justify-end items-center" };
const _hoisted_2$8 = { class: "col-7 row justify-end" };
const _hoisted_3$7 = /* @__PURE__ */ createTextVNode("Repeat");
const _hoisted_4$4 = /* @__PURE__ */ createTextVNode("Shuffle");
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode("Queue");
const _hoisted_6$2 = { class: "col" };
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "QueueControl",
  setup(__props) {
    const queueShowStatusStore = useQueueDisplayStore();
    const volume = ref(audioController.volume * 100);
    watch(volume, () => {
      audioController.volume = volume.value / 100;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$a, [
        createBaseVNode("div", _hoisted_2$8, [
          createVNode(QBtn, {
            round: "",
            dense: "",
            flat: "",
            icon: unref(outlinedRepeat)
          }, {
            default: withCtx(() => [
              createVNode(QTooltip, null, {
                default: withCtx(() => [
                  _hoisted_3$7
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
                  _hoisted_4$4
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
                  _hoisted_5$2
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"])
        ]),
        createBaseVNode("div", _hoisted_6$2, [
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
var QueueControl = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__file", "QueueControl.vue"]]);
const _hoisted_1$9 = { class: "row full-width full-height justify-evenly" };
const _hoisted_2$7 = { class: "col" };
const _hoisted_3$6 = { class: "col-5" };
const _hoisted_4$3 = { class: "col-3" };
const __default__$5 = {
  name: "PlayerControl"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QToolbar, { class: "q-pa-md" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$9, [
            createBaseVNode("div", _hoisted_2$7, [
              createVNode(TrackInfoCard)
            ]),
            createBaseVNode("div", _hoisted_3$6, [
              createVNode(MediaControl)
            ]),
            createBaseVNode("div", _hoisted_4$3, [
              createVNode(QueueControl)
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
var PlayerControl = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__file", "PlayerControl.vue"]]);
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
    toggleAriaLabel: String,
    expandIcon: String,
    expandedIcon: String,
    expandIconClass: [Array, String, Object],
    duration: Number,
    headerInsetLevel: Number,
    contentInsetLevel: Number,
    expandSeparator: Boolean,
    defaultOpened: Boolean,
    hideExpandIcon: Boolean,
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
    "afterShow",
    "afterHide"
  ],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const showing = ref(
      props.modelValue !== null ? props.modelValue : props.defaultOpened
    );
    const blurTargetRef = ref(null);
    const targetUid = uid();
    const { show, hide, toggle } = useModelToggle({ showing });
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
    const headerSlotScope = computed(() => ({
      expanded: showing.value === true,
      detailsId: props.targetUid,
      toggle,
      show,
      hide
    }));
    const toggleAriaAttrs = computed(() => {
      const toggleAriaLabel = props.toggleAriaLabel !== void 0 ? props.toggleAriaLabel : $q.lang.label[showing.value === true ? "collapse" : "expand"](props.label);
      return {
        role: "button",
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-controls": targetUid,
        "aria-label": toggleAriaLabel
      };
    });
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
      emit("afterShow");
    }
    function onHide() {
      emit("afterHide");
    }
    function enterGroup() {
      if (uniqueId === void 0) {
        uniqueId = uid();
      }
      if (showing.value === true) {
        itemGroups[props.group] = uniqueId;
      }
      const show2 = watch(showing, (val) => {
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
        show2();
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
          ...toggleAriaAttrs.value,
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
        child = [].concat(slots.header(headerSlotScope.value));
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
      if (props.disable !== true && props.hideExpandIcon !== true) {
        child[props.switchToggleSide === true ? "unshift" : "push"](
          getToggleIcon()
        );
      }
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
        Object.assign(
          data,
          hasLink.value === true ? linkProps.value : toggleAriaAttrs.value
        );
      }
      return h(QItem, data, getHeaderChild);
    }
    function getTransitionChild() {
      return withDirectives(
        h("div", {
          key: "e-content",
          class: "q-expansion-item__content relative-position",
          style: contentStyle.value,
          id: targetUid
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
const _hoisted_1$8 = ["src"];
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "QueueItem",
  props: {
    queueInfo: null,
    trackInfo: null,
    currentlyPlaying: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const queueController = QueueController.getInstance();
    const deleteItem = (evt) => {
      evt.preventDefault();
      queueController.removeQueuedItem(props.queueInfo.ItemId);
    };
    const paused = ref(false);
    audioEvents.playbackStateChanged.on(({ prev, curr }) => {
      paused.value = curr;
    });
    const hovering = ref(false);
    return (_ctx, _cache) => {
      return props.trackInfo ? (openBlock(), createBlock(QItem, {
        key: 0,
        class: "transparent",
        clickable: "",
        onMouseover: _cache[0] || (_cache[0] = ($event) => hovering.value = true),
        onMouseleave: _cache[1] || (_cache[1] = ($event) => hovering.value = false)
      }, {
        default: withCtx(() => [
          createVNode(QItemSection, { avatar: "" }, {
            default: withCtx(() => [
              createVNode(QAvatar, { square: "" }, {
                default: withCtx(() => [
                  createBaseVNode("img", {
                    src: props.trackInfo.album.thumbnail.tiny.url
                  }, null, 8, _hoisted_1$8)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(QItemSection, null, {
            default: withCtx(() => [
              createVNode(QItemLabel, {
                class: normalizeClass(["ellipsis", { "text-gt": __props.currentlyPlaying }])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(props.trackInfo.name._default), 1)
                ]),
                _: 1
              }, 8, ["class"]),
              createVNode(QItemLabel, {
                class: normalizeClass(["ellipsis", { "text-gt": __props.currentlyPlaying }]),
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
          __props.currentlyPlaying && !hovering.value ? (openBlock(), createBlock(QItemSection, {
            key: 0,
            side: ""
          }, {
            default: withCtx(() => [
              !paused.value ? (openBlock(), createBlock(QSpinnerAudio, {
                key: 0,
                size: "2em",
                color: "gt"
              })) : createCommentVNode("", true),
              paused.value ? (openBlock(), createBlock(QIcon, {
                key: 1,
                size: "2em",
                name: unref(outlinedPause)
              }, null, 8, ["name"])) : createCommentVNode("", true)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          hovering.value ? (openBlock(), createBlock(QItemSection, {
            key: 1,
            side: ""
          }, {
            default: withCtx(() => [
              createVNode(QItemLabel, { caption: "" }, {
                default: withCtx(() => [
                  createVNode(QBtn, {
                    icon: unref(outlinedDelete),
                    flat: "",
                    "fab-mini": "",
                    onClick: deleteItem
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true),
          !__props.currentlyPlaying && !hovering.value ? (openBlock(), createBlock(QItemSection, {
            key: 2,
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
      })) : createCommentVNode("", true);
    };
  }
});
var QueueItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "QueueItem.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DrawerQueue",
  setup(__props) {
    const history = ref([]);
    const queue = ref([]);
    const currentlyPlaying = ref(null);
    queueEvents.historyChanged.on(({ prev, curr }) => {
      history.value = curr;
    });
    queueEvents.queueChanged.on(({ prev, curr }) => {
      queue.value.length = 0;
      queue.value.push(...curr);
    });
    queueEvents.currentPlayingChanged.on(({ prev, curr }) => {
      currentlyPlaying.value = curr;
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
                (openBlock(true), createElementBlock(Fragment, null, renderList(history.value, (h2) => {
                  return openBlock(), createBlock(QueueItem, {
                    key: h2.Track.id,
                    "track-info": h2.Track,
                    "queue-info": h2,
                    "currently-playing": false
                  }, null, 8, ["track-info", "queue-info"]);
                }), 128)),
                currentlyPlaying.value ? (openBlock(), createBlock(QueueItem, {
                  key: 0,
                  "currently-playing": true,
                  "track-info": currentlyPlaying.value.Track,
                  "queue-info": currentlyPlaying.value
                }, null, 8, ["track-info", "queue-info"])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(QExpansionItem, {
              dense: "",
              label: "Next Up",
              "default-opened": ""
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(queue.value, (future) => {
                  return openBlock(), createBlock(QueueItem, {
                    key: future.Track.id,
                    "track-info": future.Track,
                    "queue-info": future,
                    "currently-playing": false
                  }, null, 8, ["track-info", "queue-info"]);
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
var DrawerQueue = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "DrawerQueue.vue"]]);
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
const btnPropsList = Object.keys(useBtnProps);
const passBtnProps = (props) => btnPropsList.reduce(
  (acc, key) => {
    const val = props[key];
    if (val !== void 0) {
      acc[key] = val;
    }
    return acc;
  },
  {}
);
var QBtnDropdown = createComponent({
  name: "QBtnDropdown",
  props: {
    ...useBtnProps,
    ...useTransitionProps,
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
    noIconAnimation: Boolean,
    toggleAriaLabel: String
  },
  emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const showing = ref(props.modelValue);
    const menuRef = ref(null);
    const targetUid = uid();
    const ariaAttrs = computed(() => {
      const acc = {
        "aria-expanded": showing.value === true ? "true" : "false",
        "aria-haspopup": "true",
        "aria-controls": targetUid,
        "aria-label": props.toggleAriaLabel || proxy.$q.lang.label[showing.value === true ? "collapse" : "expand"](props.label)
      };
      if (props.disable === true || (props.split === false && props.disableMainBtn === true || props.disableDropdown === true)) {
        acc["aria-disabled"] = "true";
      }
      return acc;
    });
    const iconClass = computed(
      () => "q-btn-dropdown__arrow" + (showing.value === true && props.noIconAnimation === false ? " rotate-180" : "") + (props.split === false ? " q-btn-dropdown__arrow-container" : "")
    );
    const btnDesignAttr = computed(() => getBtnDesignAttr(props));
    const btnProps = computed(() => passBtnProps(props));
    watch(() => props.modelValue, (val) => {
      menuRef.value !== null && menuRef.value[val ? "show" : "hide"]();
    });
    watch(() => props.split, hide);
    function onBeforeShow(e) {
      showing.value = true;
      emit("beforeShow", e);
    }
    function onShow(e) {
      emit("show", e);
      emit("update:modelValue", true);
    }
    function onBeforeHide(e) {
      showing.value = false;
      emit("beforeHide", e);
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
          id: targetUid,
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
          transitionShow: props.transitionShow,
          transitionHide: props.transitionHide,
          transitionDuration: props.transitionDuration,
          onBeforeShow,
          onShow,
          onBeforeHide,
          onHide
        }, slots.default)
      );
      if (props.split === false) {
        return h(QBtn, {
          class: "q-btn-dropdown q-btn-dropdown--simple",
          ...btnProps.value,
          ...ariaAttrs.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick
        }, {
          default: () => hSlot(slots.label, []).concat(Arrow),
          loading: slots.loading
        });
      }
      return h(QBtnGroup, {
        class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",
        rounded: props.rounded,
        square: props.square,
        ...btnDesignAttr.value,
        glossy: props.glossy,
        stretch: props.stretch
      }, () => [
        h(QBtn, {
          class: "q-btn-dropdown--current",
          ...btnProps.value,
          disable: props.disable === true || props.disableMainBtn === true,
          noWrap: true,
          round: false,
          onClick: onClickHide
        }, {
          default: slots.label,
          loading: slots.loading
        }),
        h(QBtn, {
          class: "q-btn-dropdown__arrow-container q-anchor--skip",
          ...ariaAttrs.value,
          ...btnDesignAttr.value,
          disable: props.disable === true || props.disableDropdown === true,
          rounded: props.rounded,
          color: props.color,
          textColor: props.textColor,
          dense: props.dense,
          size: props.size,
          padding: props.padding,
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
  emits: ["reset", "validationSuccess", "validationError"],
  setup(props, { slots, emit }) {
    const vm = getCurrentInstance();
    const rootRef = ref(null);
    let validateIndex = 0;
    const registeredComponents = [];
    function validate(shouldFocus) {
      const focus2 = typeof shouldFocus === "boolean" ? shouldFocus : props.noErrorFocus !== true;
      const index = ++validateIndex;
      const emitEvent = (res, ref2) => {
        emit("validation" + (res === true ? "Success" : "Error"), ref2);
      };
      const validateComponent = (comp) => {
        const valid = comp.validate();
        return typeof valid.then === "function" ? valid.then(
          (valid2) => ({ valid: valid2, comp }),
          (err) => ({ valid: false, comp, err })
        ) : Promise.resolve({ valid, comp });
      };
      const errorsPromise = props.greedy === true ? Promise.all(registeredComponents.map(validateComponent)).then((res) => res.filter((r) => r.valid !== true)) : registeredComponents.reduce(
        (acc, comp) => acc.then(() => {
          return validateComponent(comp).then((r) => {
            if (r.valid === false) {
              return Promise.reject(r);
            }
          });
        }),
        Promise.resolve()
      ).catch((error) => [error]);
      return errorsPromise.then((errors) => {
        if (errors === void 0 || errors.length === 0) {
          index === validateIndex && emitEvent(true);
          return true;
        }
        if (index === validateIndex) {
          const { comp, err } = errors[0];
          err !== void 0 && console.error(err);
          emitEvent(false, comp);
          if (focus2 === true) {
            const activeError = errors.find(({ comp: comp2 }) => typeof comp2.focus === "function" && vmIsDestroyed(comp2.$) === false);
            if (activeError !== void 0) {
              activeError.comp.focus();
            }
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
        const target = rootRef.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || rootRef.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || rootRef.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(rootRef.value.querySelectorAll("[tabindex]"), (el) => el.tabIndex > -1);
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
const _hoisted_1$7 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Create Account", -1);
const _hoisted_2$6 = { class: "q-pa-md" };
const __default__$4 = defineComponent({
  name: "RegistrationModal"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
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
                  _hoisted_1$7
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$6, [
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
                          rules: [(val) => val === password.value || "Password does not match"]
                        }, null, 8, ["modelValue", "rules"]),
                        createBaseVNode("div", null, [
                          createVNode(QBtn, {
                            label: "Create Account",
                            type: "submit",
                            class: "full-width bg-black-a-75",
                            size: "lg"
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
var RegistrationModal = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "RegistrationModal.vue"]]);
const _hoisted_1$6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Login", -1);
const _hoisted_2$5 = { class: "q-pa-md" };
const _hoisted_3$5 = /* @__PURE__ */ createTextVNode(" Don't have an account? ");
const __default__$3 = defineComponent({
  name: "LoginModal"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
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
                  _hoisted_1$6
                ]),
                _: 1
              }),
              createVNode(QSeparator),
              createVNode(QCardSection, null, {
                default: withCtx(() => [
                  createBaseVNode("div", _hoisted_2$5, [
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
                          _hoisted_3$5,
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
var LoginModal = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "LoginModal.vue"]]);
const _hoisted_1$5 = { class: "q-mx-md" };
const _hoisted_2$4 = /* @__PURE__ */ createTextVNode("Account");
const _hoisted_3$4 = /* @__PURE__ */ createTextVNode("Logout");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UserAccountButton",
  setup(__props) {
    const userApi = new UserApi(ApiConfigProvider.getInstance().getApiConfig());
    const authStore = useAuthStore();
    const isLoggedInReactive = computed(() => authStore.isLoggedIn);
    const currentUser = computed(() => authStore.getUsername);
    const $q = useQuasar();
    const showLoginDialog = () => {
      $q.dialog({
        component: LoginModal
      });
    };
    const logout = async () => {
      if (!authStore.refreshToken) {
        return;
      }
      await userApi.apiUserLogoutPost({ body: authStore.refreshToken });
      $q.notify({
        position: "top",
        type: "positive",
        message: "Logged Out"
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
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
          label: unref(currentUser),
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
                            _hoisted_2$4
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
                createVNode(QSeparator, { class: "q-my-sm" }),
                withDirectives((openBlock(), createBlock(QItem, {
                  clickable: "",
                  onClick: logout
                }, {
                  default: withCtx(() => [
                    createVNode(QItemSection, null, {
                      default: withCtx(() => [
                        createVNode(QItemLabel, null, {
                          default: withCtx(() => [
                            _hoisted_3$4
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
var UserAccountButton = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "UserAccountButton.vue"]]);
let id = 0;
const useTabEmits = ["click", "keydown"];
const useTabProps = {
  icon: String,
  label: [Number, String],
  alert: [Boolean, String],
  alertIcon: String,
  name: {
    type: [Number, String],
    default: () => `t_${id++}`
  },
  noCaps: Boolean,
  tabindex: [String, Number],
  disable: Boolean,
  contentClass: String,
  ripple: {
    type: [Boolean, Object],
    default: true
  }
};
function useTab(props, slots, emit, routeData) {
  const $tabs = inject(tabsKey, emptyRenderFn);
  if ($tabs === emptyRenderFn) {
    console.error("QTab/QRouteTab component needs to be child of QTabs");
    return emptyRenderFn;
  }
  const { proxy } = getCurrentInstance();
  const blurTargetRef = ref(null);
  const rootRef = ref(null);
  const tabIndicatorRef = ref(null);
  const ripple = computed(() => props.disable === true || props.ripple === false ? false : Object.assign(
    { keyCodes: [13, 32], early: true },
    props.ripple === true ? {} : props.ripple
  ));
  const isActive = computed(() => $tabs.currentModel.value === props.name);
  const classes = computed(
    () => "q-tab relative-position self-stretch flex flex-center text-center" + (isActive.value === true ? " q-tab--active" + ($tabs.tabProps.value.activeClass ? " " + $tabs.tabProps.value.activeClass : "") + ($tabs.tabProps.value.activeColor ? ` text-${$tabs.tabProps.value.activeColor}` : "") + ($tabs.tabProps.value.activeBgColor ? ` bg-${$tabs.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (props.icon && props.label && $tabs.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (props.noCaps === true || $tabs.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (props.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (routeData !== void 0 ? routeData.linkClass.value : "")
  );
  const innerClass = computed(
    () => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + ($tabs.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
  );
  const tabIndex = computed(() => props.disable === true || $tabs.hasFocus.value === true || isActive.value === false && $tabs.hasActiveTab.value === true ? -1 : props.tabindex || 0);
  function onClick(e, keyboard) {
    if (keyboard !== true && blurTargetRef.value !== null) {
      blurTargetRef.value.focus();
    }
    if (props.disable === true) {
      if (routeData !== void 0 && routeData.hasRouterLink.value === true) {
        stopAndPrevent(e);
      }
      return;
    }
    if (routeData === void 0) {
      $tabs.updateModel({ name: props.name });
      emit("click", e);
      return;
    }
    if (routeData.hasRouterLink.value === true) {
      const go = (opts = {}) => {
        let hardError;
        const reqId = opts.to === void 0 || isDeepEqual(opts.to, props.to) === true ? $tabs.avoidRouteWatcher = uid() : null;
        return routeData.navigateToRouterLink(e, { ...opts, returnRouterError: true }).catch((err) => {
          hardError = err;
        }).then((softError) => {
          if (reqId === $tabs.avoidRouteWatcher) {
            $tabs.avoidRouteWatcher = false;
            if (hardError === void 0 && (softError === void 0 || softError.message.startsWith("Avoided redundant navigation") === true)) {
              $tabs.updateModel({ name: props.name });
            }
          }
          if (opts.returnRouterError === true) {
            return hardError !== void 0 ? Promise.reject(hardError) : softError;
          }
        });
      };
      emit("click", e, go);
      e.defaultPrevented !== true && go();
      return;
    }
    emit("click", e);
  }
  function onKeydown(e) {
    if (isKeyCode(e, [13, 32])) {
      onClick(e, true);
    } else if (shouldIgnoreKey(e) !== true && e.keyCode >= 35 && e.keyCode <= 40 && e.altKey !== true && e.metaKey !== true) {
      $tabs.onKbdNavigate(e.keyCode, proxy.$el) === true && stopAndPrevent(e);
    }
    emit("keydown", e);
  }
  function getContent() {
    const narrow = $tabs.tabProps.value.narrowIndicator, content = [], indicator = h("div", {
      ref: tabIndicatorRef,
      class: [
        "q-tab__indicator",
        $tabs.tabProps.value.indicatorClass
      ]
    });
    props.icon !== void 0 && content.push(
      h(QIcon, {
        class: "q-tab__icon",
        name: props.icon
      })
    );
    props.label !== void 0 && content.push(
      h("div", { class: "q-tab__label" }, props.label)
    );
    props.alert !== false && content.push(
      props.alertIcon !== void 0 ? h(QIcon, {
        class: "q-tab__alert-icon",
        color: props.alert !== true ? props.alert : void 0,
        name: props.alertIcon
      }) : h("div", {
        class: "q-tab__alert" + (props.alert !== true ? ` text-${props.alert}` : "")
      })
    );
    narrow === true && content.push(indicator);
    const node = [
      h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef }),
      h("div", { class: innerClass.value }, hMergeSlot(slots.default, content))
    ];
    narrow === false && node.push(indicator);
    return node;
  }
  const tabData = {
    name: computed(() => props.name),
    rootRef,
    tabIndicatorRef,
    routeData
  };
  onBeforeUnmount(() => {
    $tabs.unregisterTab(tabData);
  });
  onMounted(() => {
    $tabs.registerTab(tabData);
  });
  function renderTab(tag, customData) {
    const data = {
      ref: rootRef,
      class: classes.value,
      tabindex: tabIndex.value,
      role: "tab",
      "aria-selected": isActive.value === true ? "true" : "false",
      "aria-disabled": props.disable === true ? "true" : void 0,
      onClick,
      onKeydown,
      ...customData
    };
    return withDirectives(
      h(tag, data, getContent()),
      [[Ripple, ripple.value]]
    );
  }
  return { renderTab, $tabs };
}
var QTab = createComponent({
  name: "QTab",
  props: useTabProps,
  emits: useTabEmits,
  setup(props, { slots, emit }) {
    const { renderTab } = useTab(props, slots, emit);
    return () => renderTab("div");
  }
});
function getIndicatorClass(color, top, vertical) {
  const pos = vertical === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${top === true ? pos[0] : pos[1]}${color ? ` text-${color}` : ""}`;
}
const alignValues = ["left", "center", "right", "justify"];
var QTabs = createComponent({
  name: "QTabs",
  props: {
    modelValue: [Number, String],
    align: {
      type: String,
      default: "center",
      validator: (v) => alignValues.includes(v)
    },
    breakpoint: {
      type: [String, Number],
      default: 600
    },
    vertical: Boolean,
    shrink: Boolean,
    stretch: Boolean,
    activeClass: String,
    activeColor: String,
    activeBgColor: String,
    indicatorColor: String,
    leftIcon: String,
    rightIcon: String,
    outsideArrows: Boolean,
    mobileArrows: Boolean,
    switchIndicator: Boolean,
    narrowIndicator: Boolean,
    inlineLabel: Boolean,
    noCaps: Boolean,
    dense: Boolean,
    contentClass: String,
    "onUpdate:modelValue": [Function, Array]
  },
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const { registerTick: registerScrollTick } = useTick();
    const { registerTick: registerUpdateArrowsTick } = useTick();
    const { registerTick: registerAnimateTick } = useTick();
    const { registerTimeout: registerFocusTimeout, removeTimeout: removeFocusTimeout } = useTimeout();
    const { registerTimeout: registerScrollToTabTimeout, removeTimeout: removeScrollToTabTimeout } = useTimeout();
    const rootRef = ref(null);
    const contentRef = ref(null);
    const currentModel = ref(props.modelValue);
    const scrollable = ref(false);
    const leftArrow = ref(true);
    const rightArrow = ref(false);
    const justify = ref(false);
    const tabDataList = [];
    const tabDataListLen = ref(0);
    const hasFocus = ref(false);
    let animateTimer, scrollTimer, unwatchRoute;
    const tabProps = computed(() => ({
      activeClass: props.activeClass,
      activeColor: props.activeColor,
      activeBgColor: props.activeBgColor,
      indicatorClass: getIndicatorClass(
        props.indicatorColor,
        props.switchIndicator,
        props.vertical
      ),
      narrowIndicator: props.narrowIndicator,
      inlineLabel: props.inlineLabel,
      noCaps: props.noCaps
    }));
    const hasActiveTab = computed(() => {
      const len = tabDataListLen.value;
      const val = currentModel.value;
      for (let i = 0; i < len; i++) {
        if (tabDataList[i].name.value === val) {
          return true;
        }
      }
      return false;
    });
    const alignClass = computed(() => {
      const align = scrollable.value === true ? "left" : justify.value === true ? "justify" : props.align;
      return `q-tabs__content--align-${align}`;
    });
    const classes = computed(
      () => `q-tabs row no-wrap items-center q-tabs--${scrollable.value === true ? "" : "not-"}scrollable q-tabs--${props.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${props.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${props.mobileArrows === true ? "" : "out"}-arrows` + (props.dense === true ? " q-tabs--dense" : "") + (props.shrink === true ? " col-shrink" : "") + (props.stretch === true ? " self-stretch" : "")
    );
    const innerClass = computed(
      () => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + alignClass.value + (props.contentClass !== void 0 ? ` ${props.contentClass}` : "")
    );
    const domProps = computed(() => props.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" });
    const isRTL = computed(() => props.vertical !== true && $q.lang.rtl === true);
    const rtlPosCorrection = computed(() => rtlHasScrollBug === false && isRTL.value === true);
    watch(isRTL, updateArrows);
    watch(() => props.modelValue, (name) => {
      updateModel({ name, setCurrent: true, skipEmit: true });
    });
    watch(() => props.outsideArrows, recalculateScroll);
    function updateModel({ name, setCurrent, skipEmit }) {
      if (currentModel.value !== name) {
        if (skipEmit !== true && props["onUpdate:modelValue"] !== void 0) {
          emit("update:modelValue", name);
        }
        if (setCurrent === true || props["onUpdate:modelValue"] === void 0) {
          animate(currentModel.value, name);
          currentModel.value = name;
        }
      }
    }
    function recalculateScroll() {
      registerScrollTick(() => {
        updateContainer({
          width: rootRef.value.offsetWidth,
          height: rootRef.value.offsetHeight
        });
      });
    }
    function updateContainer(domSize) {
      if (domProps.value === void 0 || contentRef.value === null) {
        return;
      }
      const size = domSize[domProps.value.container], scrollSize = Math.min(
        contentRef.value[domProps.value.scroll],
        Array.prototype.reduce.call(
          contentRef.value.children,
          (acc, el) => acc + (el[domProps.value.content] || 0),
          0
        )
      ), scroll = size > 0 && scrollSize > size;
      scrollable.value = scroll;
      scroll === true && registerUpdateArrowsTick(updateArrows);
      justify.value = size < parseInt(props.breakpoint, 10);
    }
    function animate(oldName, newName) {
      const oldTab = oldName !== void 0 && oldName !== null && oldName !== "" ? tabDataList.find((tab) => tab.name.value === oldName) : null, newTab = newName !== void 0 && newName !== null && newName !== "" ? tabDataList.find((tab) => tab.name.value === newName) : null;
      if (oldTab && newTab) {
        const oldEl = oldTab.tabIndicatorRef.value, newEl = newTab.tabIndicatorRef.value;
        clearTimeout(animateTimer);
        oldEl.style.transition = "none";
        oldEl.style.transform = "none";
        newEl.style.transition = "none";
        newEl.style.transform = "none";
        const oldPos = oldEl.getBoundingClientRect(), newPos = newEl.getBoundingClientRect();
        newEl.style.transform = props.vertical === true ? `translate3d(0,${oldPos.top - newPos.top}px,0) scale3d(1,${newPos.height ? oldPos.height / newPos.height : 1},1)` : `translate3d(${oldPos.left - newPos.left}px,0,0) scale3d(${newPos.width ? oldPos.width / newPos.width : 1},1,1)`;
        registerAnimateTick(() => {
          animateTimer = setTimeout(() => {
            newEl.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)";
            newEl.style.transform = "none";
          }, 70);
        });
      }
      if (newTab && scrollable.value === true) {
        scrollToTabEl(newTab.rootRef.value);
      }
    }
    function scrollToTabEl(el) {
      const { left, width, top, height } = contentRef.value.getBoundingClientRect(), newPos = el.getBoundingClientRect();
      let offset = props.vertical === true ? newPos.top - top : newPos.left - left;
      if (offset < 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(offset);
        updateArrows();
        return;
      }
      offset += props.vertical === true ? newPos.height - height : newPos.width - width;
      if (offset > 0) {
        contentRef.value[props.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(offset);
        updateArrows();
      }
    }
    function updateArrows() {
      const content = contentRef.value;
      if (content === null) {
        return;
      }
      const rect = content.getBoundingClientRect(), pos = props.vertical === true ? content.scrollTop : Math.abs(content.scrollLeft);
      if (isRTL.value === true) {
        leftArrow.value = Math.ceil(pos + rect.width) < content.scrollWidth - 1;
        rightArrow.value = pos > 0;
      } else {
        leftArrow.value = pos > 0;
        rightArrow.value = props.vertical === true ? Math.ceil(pos + rect.height) < content.scrollHeight : Math.ceil(pos + rect.width) < content.scrollWidth;
      }
    }
    function animScrollTo(value) {
      stopAnimScroll();
      scrollTimer = setInterval(() => {
        if (scrollTowards(value) === true) {
          stopAnimScroll();
        }
      }, 5);
    }
    function scrollToStart() {
      animScrollTo(rtlPosCorrection.value === true ? Number.MAX_SAFE_INTEGER : 0);
    }
    function scrollToEnd() {
      animScrollTo(rtlPosCorrection.value === true ? 0 : Number.MAX_SAFE_INTEGER);
    }
    function stopAnimScroll() {
      clearInterval(scrollTimer);
    }
    function onKbdNavigate(keyCode, fromEl) {
      const tabs = Array.prototype.filter.call(
        contentRef.value.children,
        (el) => el === fromEl || el.matches && el.matches(".q-tab.q-focusable") === true
      );
      const len = tabs.length;
      if (len === 0) {
        return;
      }
      if (keyCode === 36) {
        scrollToTabEl(tabs[0]);
        tabs[0].focus();
        return true;
      }
      if (keyCode === 35) {
        scrollToTabEl(tabs[len - 1]);
        tabs[len - 1].focus();
        return true;
      }
      const dirPrev = keyCode === (props.vertical === true ? 38 : 37);
      const dirNext = keyCode === (props.vertical === true ? 40 : 39);
      const dir = dirPrev === true ? -1 : dirNext === true ? 1 : void 0;
      if (dir !== void 0) {
        const rtlDir = isRTL.value === true ? -1 : 1;
        const index = tabs.indexOf(fromEl) + dir * rtlDir;
        if (index >= 0 && index < len) {
          scrollToTabEl(tabs[index]);
          tabs[index].focus({ preventScroll: true });
        }
        return true;
      }
    }
    const posFn = computed(() => rtlPosCorrection.value === true ? { get: (content) => Math.abs(content.scrollLeft), set: (content, pos) => {
      content.scrollLeft = -pos;
    } } : props.vertical === true ? { get: (content) => content.scrollTop, set: (content, pos) => {
      content.scrollTop = pos;
    } } : { get: (content) => content.scrollLeft, set: (content, pos) => {
      content.scrollLeft = pos;
    } });
    function scrollTowards(value) {
      const content = contentRef.value, { get, set } = posFn.value;
      let done = false, pos = get(content);
      const direction = value < pos ? -1 : 1;
      pos += direction * 5;
      if (pos < 0) {
        done = true;
        pos = 0;
      } else if (direction === -1 && pos <= value || direction === 1 && pos >= value) {
        done = true;
        pos = value;
      }
      set(content, pos);
      updateArrows();
      return done;
    }
    function hasQueryIncluded(targetQuery, matchingQuery) {
      for (const key in targetQuery) {
        if (targetQuery[key] !== matchingQuery[key]) {
          return false;
        }
      }
      return true;
    }
    function updateActiveRoute() {
      let name = null, bestScore = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 };
      const list = tabDataList.filter((tab) => tab.routeData !== void 0 && tab.routeData.hasRouterLink.value === true);
      const { hash: currentHash, query: currentQuery } = proxy.$route;
      const currentQueryLen = Object.keys(currentQuery).length;
      for (const tab of list) {
        const exact = tab.routeData.exact.value === true;
        if (tab.routeData[exact === true ? "linkIsExactActive" : "linkIsActive"].value !== true) {
          continue;
        }
        const { hash, query, matched, href } = tab.routeData.resolvedLink.value;
        const queryLen = Object.keys(query).length;
        if (exact === true) {
          if (hash !== currentHash) {
            continue;
          }
          if (queryLen !== currentQueryLen || hasQueryIncluded(currentQuery, query) === false) {
            continue;
          }
          name = tab.name.value;
          break;
        }
        if (hash !== "" && hash !== currentHash) {
          continue;
        }
        if (queryLen !== 0 && hasQueryIncluded(query, currentQuery) === false) {
          continue;
        }
        const newScore = {
          matchedLen: matched.length,
          queryDiff: currentQueryLen - queryLen,
          hrefLen: href.length - hash.length
        };
        if (newScore.matchedLen > bestScore.matchedLen) {
          name = tab.name.value;
          bestScore = newScore;
          continue;
        } else if (newScore.matchedLen !== bestScore.matchedLen) {
          continue;
        }
        if (newScore.queryDiff < bestScore.queryDiff) {
          name = tab.name.value;
          bestScore = newScore;
        } else if (newScore.queryDiff !== bestScore.queryDiff) {
          continue;
        }
        if (newScore.hrefLen > bestScore.hrefLen) {
          name = tab.name.value;
          bestScore = newScore;
        }
      }
      if (name === null && tabDataList.some((tab) => tab.routeData === void 0 && tab.name.value === currentModel.value) === true) {
        return;
      }
      updateModel({ name, setCurrent: true });
    }
    function onFocusin(e) {
      removeFocusTimeout();
      if (hasFocus.value !== true && rootRef.value !== null && e.target && typeof e.target.closest === "function") {
        const tab = e.target.closest(".q-tab");
        if (tab && rootRef.value.contains(tab) === true) {
          hasFocus.value = true;
          scrollable.value === true && scrollToTabEl(tab);
        }
      }
    }
    function onFocusout() {
      registerFocusTimeout(() => {
        hasFocus.value = false;
      }, 30);
    }
    function verifyRouteModel() {
      if ($tabs.avoidRouteWatcher === false) {
        registerScrollToTabTimeout(updateActiveRoute);
      } else {
        removeScrollToTabTimeout();
      }
    }
    function watchRoute() {
      if (unwatchRoute === void 0) {
        const unwatch = watch(() => proxy.$route.fullPath, verifyRouteModel);
        unwatchRoute = () => {
          unwatch();
          unwatchRoute = void 0;
        };
      }
    }
    function registerTab(tabData) {
      tabDataList.push(tabData);
      tabDataListLen.value++;
      recalculateScroll();
      if (tabData.routeData === void 0 || proxy.$route === void 0) {
        registerScrollToTabTimeout(() => {
          if (scrollable.value === true) {
            const value = currentModel.value;
            const newTab = value !== void 0 && value !== null && value !== "" ? tabDataList.find((tab) => tab.name.value === value) : null;
            newTab && scrollToTabEl(newTab.rootRef.value);
          }
        });
      } else {
        watchRoute();
        if (tabData.routeData.hasRouterLink.value === true) {
          verifyRouteModel();
        }
      }
    }
    function unregisterTab(tabData) {
      tabDataList.splice(tabDataList.indexOf(tabData), 1);
      tabDataListLen.value--;
      recalculateScroll();
      if (unwatchRoute !== void 0 && tabData.routeData !== void 0) {
        if (tabDataList.every((tab) => tab.routeData === void 0) === true) {
          unwatchRoute();
        }
        verifyRouteModel();
      }
    }
    const $tabs = {
      currentModel,
      tabProps,
      hasFocus,
      hasActiveTab,
      registerTab,
      unregisterTab,
      verifyRouteModel,
      updateModel,
      onKbdNavigate,
      avoidRouteWatcher: false
    };
    provide(tabsKey, $tabs);
    function cleanup() {
      clearTimeout(animateTimer);
      stopAnimScroll();
      unwatchRoute !== void 0 && unwatchRoute();
    }
    let hadRouteWatcher;
    onBeforeUnmount(cleanup);
    onDeactivated(() => {
      hadRouteWatcher = unwatchRoute !== void 0;
      cleanup();
    });
    onActivated(() => {
      hadRouteWatcher === true && watchRoute();
      recalculateScroll();
    });
    return () => {
      return h("div", {
        ref: rootRef,
        class: classes.value,
        role: "tablist",
        onFocusin,
        onFocusout
      }, [
        h(QResizeObserver, { onResize: updateContainer }),
        h("div", {
          ref: contentRef,
          class: innerClass.value,
          onScroll: updateArrows
        }, hSlot(slots.default)),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (leftArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.leftIcon || $q.iconSet.tabs[props.vertical === true ? "up" : "left"],
          onMousedownPassive: scrollToStart,
          onTouchstartPassive: scrollToStart,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        }),
        h(QIcon, {
          class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (rightArrow.value === true ? "" : " q-tabs__arrow--faded"),
          name: props.rightIcon || $q.iconSet.tabs[props.vertical === true ? "down" : "right"],
          onMousedownPassive: scrollToEnd,
          onTouchstartPassive: scrollToEnd,
          onMouseupPassive: stopAnimScroll,
          onMouseleavePassive: stopAnimScroll,
          onTouchendPassive: stopAnimScroll
        })
      ]);
    };
  }
});
function parseArg(arg) {
  const data = [0.06, 6, 50];
  if (typeof arg === "string" && arg.length) {
    arg.split(":").forEach((val, index) => {
      const v = parseFloat(val);
      v && (data[index] = v);
    });
  }
  return data;
}
var TouchSwipe = createDirective(
  {
    name: "touch-swipe",
    beforeMount(el, { value, arg, modifiers }) {
      if (modifiers.mouse !== true && client.has.touch !== true) {
        return;
      }
      const mouseCapture = modifiers.mouseCapture === true ? "Capture" : "";
      const ctx = {
        handler: value,
        sensitivity: parseArg(arg),
        direction: getModifierDirections(modifiers),
        noop,
        mouseStart(evt) {
          if (shouldStart(evt, ctx) && leftClick(evt)) {
            addEvt(ctx, "temp", [
              [document, "mousemove", "move", `notPassive${mouseCapture}`],
              [document, "mouseup", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt, true);
          }
        },
        touchStart(evt) {
          if (shouldStart(evt, ctx)) {
            const target = evt.target;
            addEvt(ctx, "temp", [
              [target, "touchmove", "move", "notPassiveCapture"],
              [target, "touchcancel", "end", "notPassiveCapture"],
              [target, "touchend", "end", "notPassiveCapture"]
            ]);
            ctx.start(evt);
          }
        },
        start(evt, mouseEvent) {
          client.is.firefox === true && preventDraggable(el, true);
          const pos = position(evt);
          ctx.event = {
            x: pos.left,
            y: pos.top,
            time: Date.now(),
            mouse: mouseEvent === true,
            dir: false
          };
        },
        move(evt) {
          if (ctx.event === void 0) {
            return;
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            return;
          }
          const time = Date.now() - ctx.event.time;
          if (time === 0) {
            return;
          }
          const pos = position(evt), distX = pos.left - ctx.event.x, absX = Math.abs(distX), distY = pos.top - ctx.event.y, absY = Math.abs(distY);
          if (ctx.event.mouse !== true) {
            if (absX < ctx.sensitivity[1] && absY < ctx.sensitivity[1]) {
              ctx.end(evt);
              return;
            }
          } else if (absX < ctx.sensitivity[2] && absY < ctx.sensitivity[2]) {
            return;
          }
          const velX = absX / time, velY = absY / time;
          if (ctx.direction.vertical === true && absX < absY && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = distY < 0 ? "up" : "down";
          }
          if (ctx.direction.horizontal === true && absX > absY && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = distX < 0 ? "left" : "right";
          }
          if (ctx.direction.up === true && absX < absY && distY < 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "up";
          }
          if (ctx.direction.down === true && absX < absY && distY > 0 && absX < 100 && velY > ctx.sensitivity[0]) {
            ctx.event.dir = "down";
          }
          if (ctx.direction.left === true && absX > absY && distX < 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "left";
          }
          if (ctx.direction.right === true && absX > absY && distX > 0 && absY < 100 && velX > ctx.sensitivity[0]) {
            ctx.event.dir = "right";
          }
          if (ctx.event.dir !== false) {
            stopAndPrevent(evt);
            if (ctx.event.mouse === true) {
              document.body.classList.add("no-pointer-events--children");
              document.body.classList.add("non-selectable");
              clearSelection();
              ctx.styleCleanup = (withDelay) => {
                ctx.styleCleanup = void 0;
                document.body.classList.remove("non-selectable");
                const remove = () => {
                  document.body.classList.remove("no-pointer-events--children");
                };
                if (withDelay === true) {
                  setTimeout(remove, 50);
                } else {
                  remove();
                }
              };
            }
            ctx.handler({
              evt,
              touch: ctx.event.mouse !== true,
              mouse: ctx.event.mouse,
              direction: ctx.event.dir,
              duration: time,
              distance: {
                x: absX,
                y: absY
              }
            });
          } else {
            ctx.end(evt);
          }
        },
        end(evt) {
          if (ctx.event === void 0) {
            return;
          }
          cleanEvt(ctx, "temp");
          client.is.firefox === true && preventDraggable(el, false);
          ctx.styleCleanup !== void 0 && ctx.styleCleanup(true);
          evt !== void 0 && ctx.event.dir !== false && stopAndPrevent(evt);
          ctx.event = void 0;
        }
      };
      el.__qtouchswipe = ctx;
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
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        if (bindings.oldValue !== bindings.value) {
          typeof bindings.value !== "function" && ctx.end();
          ctx.handler = bindings.value;
        }
        ctx.direction = getModifierDirections(bindings.modifiers);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qtouchswipe;
      if (ctx !== void 0) {
        cleanEvt(ctx, "main");
        cleanEvt(ctx, "temp");
        client.is.firefox === true && preventDraggable(el, false);
        ctx.styleCleanup !== void 0 && ctx.styleCleanup();
        delete el.__qtouchswipe;
      }
    }
  }
);
function useCache() {
  const cache = /* @__PURE__ */ new Map();
  return {
    getCache: function(key, obj) {
      return cache[key] === void 0 ? cache[key] = obj : cache[key];
    },
    getCacheWithFn: function(key, fn) {
      return cache[key] === void 0 ? cache[key] = fn() : cache[key];
    }
  };
}
const usePanelChildProps = {
  name: { required: true },
  disable: Boolean
};
const PanelWrapper = {
  setup(_, { slots }) {
    return () => h("div", {
      class: "q-panel scroll",
      role: "tabpanel"
    }, hSlot(slots.default));
  }
};
const usePanelProps = {
  modelValue: {
    required: true
  },
  animated: Boolean,
  infinite: Boolean,
  swipeable: Boolean,
  vertical: Boolean,
  transitionPrev: String,
  transitionNext: String,
  transitionDuration: {
    type: [String, Number],
    default: 300
  },
  keepAlive: Boolean,
  keepAliveInclude: [String, Array, RegExp],
  keepAliveExclude: [String, Array, RegExp],
  keepAliveMax: Number
};
const usePanelEmits = ["update:modelValue", "beforeTransition", "transition"];
function usePanel() {
  const { props, emit, proxy } = getCurrentInstance();
  const { getCacheWithFn } = useCache();
  let panels, forcedPanelTransition;
  const panelIndex = ref(null);
  const panelTransition = ref(null);
  function onSwipe(evt) {
    const dir = props.vertical === true ? "up" : "left";
    goToPanelByOffset((proxy.$q.lang.rtl === true ? -1 : 1) * (evt.direction === dir ? 1 : -1));
  }
  const panelDirectives = computed(() => {
    return [[
      TouchSwipe,
      onSwipe,
      void 0,
      {
        horizontal: props.vertical !== true,
        vertical: props.vertical,
        mouse: true
      }
    ]];
  });
  const transitionPrev = computed(
    () => props.transitionPrev || `slide-${props.vertical === true ? "down" : "right"}`
  );
  const transitionNext = computed(
    () => props.transitionNext || `slide-${props.vertical === true ? "up" : "left"}`
  );
  const transitionStyle = computed(
    () => `--q-transition-duration: ${props.transitionDuration}ms`
  );
  const contentKey = computed(() => typeof props.modelValue === "string" || typeof props.modelValue === "number" ? props.modelValue : String(props.modelValue));
  const keepAliveProps = computed(() => ({
    include: props.keepAliveInclude,
    exclude: props.keepAliveExclude,
    max: props.keepAliveMax
  }));
  const needsUniqueKeepAliveWrapper = computed(
    () => props.keepAliveInclude !== void 0 || props.keepAliveExclude !== void 0
  );
  watch(() => props.modelValue, (newVal, oldVal) => {
    const index = isValidPanelName(newVal) === true ? getPanelIndex(newVal) : -1;
    if (forcedPanelTransition !== true) {
      updatePanelTransition(
        index === -1 ? 0 : index < getPanelIndex(oldVal) ? -1 : 1
      );
    }
    if (panelIndex.value !== index) {
      panelIndex.value = index;
      emit("beforeTransition", newVal, oldVal);
      nextTick(() => {
        emit("transition", newVal, oldVal);
      });
    }
  });
  function nextPanel() {
    goToPanelByOffset(1);
  }
  function previousPanel() {
    goToPanelByOffset(-1);
  }
  function goToPanel(name) {
    emit("update:modelValue", name);
  }
  function isValidPanelName(name) {
    return name !== void 0 && name !== null && name !== "";
  }
  function getPanelIndex(name) {
    return panels.findIndex((panel) => {
      return panel.props.name === name && panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function getEnabledPanels() {
    return panels.filter((panel) => {
      return panel.props.disable !== "" && panel.props.disable !== true;
    });
  }
  function updatePanelTransition(direction) {
    const val = direction !== 0 && props.animated === true && panelIndex.value !== -1 ? "q-transition--" + (direction === -1 ? transitionPrev.value : transitionNext.value) : null;
    if (panelTransition.value !== val) {
      panelTransition.value = val;
    }
  }
  function goToPanelByOffset(direction, startIndex = panelIndex.value) {
    let index = startIndex + direction;
    while (index > -1 && index < panels.length) {
      const opt = panels[index];
      if (opt !== void 0 && opt.props.disable !== "" && opt.props.disable !== true) {
        updatePanelTransition(direction);
        forcedPanelTransition = true;
        emit("update:modelValue", opt.props.name);
        setTimeout(() => {
          forcedPanelTransition = false;
        });
        return;
      }
      index += direction;
    }
    if (props.infinite === true && panels.length > 0 && startIndex !== -1 && startIndex !== panels.length) {
      goToPanelByOffset(direction, direction === -1 ? panels.length : -1);
    }
  }
  function updatePanelIndex() {
    const index = getPanelIndex(props.modelValue);
    if (panelIndex.value !== index) {
      panelIndex.value = index;
    }
    return true;
  }
  function getPanelContentChild() {
    const panel = isValidPanelName(props.modelValue) === true && updatePanelIndex() && panels[panelIndex.value];
    return props.keepAlive === true ? [
      h(KeepAlive, keepAliveProps.value, [
        h(
          needsUniqueKeepAliveWrapper.value === true ? getCacheWithFn(contentKey.value, () => ({ ...PanelWrapper, name: contentKey.value })) : PanelWrapper,
          { key: contentKey.value, style: transitionStyle.value },
          () => panel
        )
      ])
    ] : [
      h("div", {
        class: "q-panel scroll",
        style: transitionStyle.value,
        key: contentKey.value,
        role: "tabpanel"
      }, [panel])
    ];
  }
  function getPanelContent() {
    if (panels.length === 0) {
      return;
    }
    return props.animated === true ? [h(Transition, { name: panelTransition.value }, getPanelContentChild)] : getPanelContentChild();
  }
  function updatePanelsList(slots) {
    panels = getNormalizedVNodes(
      hSlot(slots.default, [])
    ).filter(
      (panel) => panel.props !== null && panel.props.slot === void 0 && isValidPanelName(panel.props.name) === true
    );
    return panels.length;
  }
  function getPanels() {
    return panels;
  }
  Object.assign(proxy, {
    next: nextPanel,
    previous: previousPanel,
    goTo: goToPanel
  });
  return {
    panelIndex,
    panelDirectives,
    updatePanelsList,
    updatePanelIndex,
    getPanelContent,
    getEnabledPanels,
    getPanels,
    isValidPanelName,
    keepAliveProps,
    needsUniqueKeepAliveWrapper,
    goToPanelByOffset,
    goToPanel,
    nextPanel,
    previousPanel
  };
}
var QTabPanel = createComponent({
  name: "QTabPanel",
  props: usePanelChildProps,
  setup(_, { slots }) {
    return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, hSlot(slots.default));
  }
});
var QTabPanels = createComponent({
  name: "QTabPanels",
  props: {
    ...usePanelProps,
    ...useDarkProps
  },
  emits: usePanelEmits,
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const isDark = useDark(props, vm.proxy.$q);
    const { updatePanelsList, getPanelContent, panelDirectives } = usePanel();
    const classes = computed(
      () => "q-tab-panels q-panel-parent" + (isDark.value === true ? " q-tab-panels--dark q-dark" : "")
    );
    return () => {
      updatePanelsList(slots);
      return hDir(
        "div",
        { class: classes.value },
        getPanelContent(),
        "pan",
        props.swipeable,
        () => panelDirectives.value
      );
    };
  }
});
const _hoisted_1$4 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Settings", -1);
const _hoisted_2$3 = { class: "flex justify-center" };
const _hoisted_3$3 = { class: "q-pa-md col" };
const _hoisted_4$2 = { class: "col-all row items-center" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("div", { class: "col-6 text-h6" }, " Homepage Mode: ", -1);
const _hoisted_6$1 = { class: "col-6" };
const _hoisted_7$1 = { class: "q-gutter-sm" };
const _hoisted_8$1 = { class: "q-pa-md col" };
const _hoisted_9$1 = { class: "col-all row items-center" };
const _hoisted_10$1 = /* @__PURE__ */ createBaseVNode("div", { class: "col-6 text-h6" }, " Play Button Behavior: ", -1);
const _hoisted_11$1 = { class: "col-6" };
const _hoisted_12$1 = { class: "q-gutter-sm" };
const __default__$2 = defineComponent({
  name: "SettingsModal"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const tab = ref("");
    const shape = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
        "transition-show": "fade",
        "transition-hide": "fade",
        position: "top"
      }, {
        default: withCtx(() => [
          createVNode(QCard, {
            bordered: "",
            class: "q-mt-lg",
            style: { "width": "700px", "max-width": "80vw", "background-color": "rgb(30,30,30)" }
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
                  createVNode(QCard, { class: "transparent" }, {
                    default: withCtx(() => [
                      createVNode(QTabs, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tab.value = $event),
                        dense: "",
                        "active-color": "white",
                        "indicator-color": "blue",
                        align: "justify",
                        "narrow-indicator": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QTab, {
                            name: "homepage",
                            label: "Homepage"
                          }),
                          createVNode(QTab, {
                            name: "queue",
                            label: "Queue"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      createVNode(QSeparator),
                      createVNode(QTabPanels, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => tab.value = $event),
                        animated: "",
                        class: "transparent"
                      }, {
                        default: withCtx(() => [
                          createVNode(QTabPanel, { name: "homepage" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_2$3, [
                                createBaseVNode("div", _hoisted_3$3, [
                                  createBaseVNode("div", _hoisted_4$2, [
                                    _hoisted_5$1,
                                    createBaseVNode("div", _hoisted_6$1, [
                                      createBaseVNode("div", _hoisted_7$1, [
                                        createVNode(QRadio, {
                                          modelValue: shape.value,
                                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => shape.value = $event),
                                          val: "Infinite Scroll",
                                          label: "Infinite Scroll",
                                          color: "white"
                                        }, null, 8, ["modelValue"]),
                                        createVNode(QRadio, {
                                          modelValue: shape.value,
                                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => shape.value = $event),
                                          val: "Pagination",
                                          label: "Pagination",
                                          color: "white"
                                        }, null, 8, ["modelValue"])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "queue" }, {
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_8$1, [
                                createBaseVNode("div", _hoisted_9$1, [
                                  _hoisted_10$1,
                                  createBaseVNode("div", _hoisted_11$1, [
                                    createBaseVNode("div", _hoisted_12$1, [
                                      createVNode(QRadio, {
                                        modelValue: shape.value,
                                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => shape.value = $event),
                                        val: "Infinite Scroll",
                                        label: "Infinite Scroll",
                                        color: "white"
                                      }, null, 8, ["modelValue"]),
                                      createVNode(QRadio, {
                                        modelValue: shape.value,
                                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => shape.value = $event),
                                        val: "Pagination",
                                        label: "Pagination",
                                        color: "white"
                                      }, null, 8, ["modelValue"])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
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
      });
    };
  }
});
var SettingsModal = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "SettingsModal.vue"]]);
const _hoisted_1$3 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "About", -1);
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { class: "flex justify-center" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Source & Credits")
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createTextVNode("Music Files & Collection");
const _hoisted_4$1 = /* @__PURE__ */ createTextVNode("[Connor_CZ] TLMC v2");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Music Metadata");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Thwiki.cc");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("div", { class: "flex justify-center" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "Source")
], -1);
const _hoisted_8 = /* @__PURE__ */ createTextVNode("TLMC Data Preprocessor");
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" Python3 ");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("TLMC Tagger (Thwiki)");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" Python3 ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Frontend");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Vue.js 3 + Composition API + Typescript + Quasar");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Backend");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Various");
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("div", { class: "flex justify-center" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "text-h6" }, "API Explorer")
], -1);
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Music Data API");
const _hoisted_18 = /* @__PURE__ */ createTextVNode("ASP.NET Core + PostgreSQL");
const _hoisted_19 = /* @__PURE__ */ createTextVNode("Authentication API");
const _hoisted_20 = /* @__PURE__ */ createTextVNode("ASP.NET Core + PostgreSQL");
const _hoisted_21 = /* @__PURE__ */ createTextVNode("Playlist API");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("ASP.NET Core + PostgreSQL");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "AboutDialog",
  setup(__props) {
    const tab = ref("media");
    const apiConfigProvider = ApiConfigProvider.getInstance();
    const authSwaggerUrl = `${apiConfigProvider.basePath}/swagger/auth`;
    const musicDataSwaggerUrl = `${apiConfigProvider.basePath}/swagger/music-data`;
    const playlistSwaggerUrl = `${apiConfigProvider.basePath}/swagger/playlist`;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QDialog, {
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
                  createVNode(QCard, { class: "transparent" }, {
                    default: withCtx(() => [
                      createVNode(QTabs, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => tab.value = $event),
                        dense: "",
                        "active-color": "white",
                        "indicator-color": "blue",
                        align: "justify",
                        "narrow-indicator": ""
                      }, {
                        default: withCtx(() => [
                          createVNode(QTab, {
                            name: "media",
                            label: "Media"
                          }),
                          createVNode(QTab, {
                            name: "code",
                            label: "Code"
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      createVNode(QSeparator),
                      createVNode(QTabPanels, {
                        modelValue: tab.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => tab.value = $event),
                        animated: "",
                        class: "transparent"
                      }, {
                        default: withCtx(() => [
                          createVNode(QTabPanel, { name: "media" }, {
                            default: withCtx(() => [
                              _hoisted_2$2,
                              createVNode(QList, {
                                bordered: "",
                                separator: ""
                              }, {
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    target: "_blank",
                                    href: "https://nyaa.si/view/1570730"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { overline: "" }, {
                                            default: withCtx(() => [
                                              _hoisted_3$2
                                            ]),
                                            _: 1
                                          }),
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
                                    [Ripple]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    target: "_blank",
                                    href: "https://thwiki.cc/"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { overline: "" }, {
                                            default: withCtx(() => [
                                              _hoisted_5
                                            ]),
                                            _: 1
                                          }),
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
                                    [Ripple]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(QTabPanel, { name: "code" }, {
                            default: withCtx(() => [
                              _hoisted_7,
                              createVNode(QList, {
                                bordered: "",
                                separator: ""
                              }, {
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    target: "_blank",
                                    href: "https://github.com/sqz269/TlmcInfoProvider"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { lines: "1" }, {
                                            default: withCtx(() => [
                                              _hoisted_8
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemLabel, {
                                            caption: "",
                                            lines: "2"
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_9
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })), [
                                    [Ripple]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    target: "_blank",
                                    href: "https://github.com/sqz269/TlmcInfoProvider"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { lines: "1" }, {
                                            default: withCtx(() => [
                                              _hoisted_10
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemLabel, {
                                            caption: "",
                                            lines: "2"
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_11
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })), [
                                    [Ripple]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    target: "_blank",
                                    href: "https://github.com/sqz269/music-player"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { lines: "1" }, {
                                            default: withCtx(() => [
                                              _hoisted_12
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemLabel, {
                                            caption: "",
                                            lines: "2"
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_13
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })), [
                                    [Ripple]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    target: "_blank",
                                    href: "https://github.com/sqz269/tlmc-player"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { lines: "1" }, {
                                            default: withCtx(() => [
                                              _hoisted_14
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemLabel, {
                                            caption: "",
                                            lines: "2"
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_15
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })), [
                                    [Ripple]
                                  ])
                                ]),
                                _: 1
                              }),
                              createVNode(QSeparator, { class: "q-py-sm transparent" }),
                              _hoisted_16,
                              createVNode(QList, {
                                bordered: "",
                                separator: ""
                              }, {
                                default: withCtx(() => [
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    target: "_blank",
                                    href: musicDataSwaggerUrl
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { lines: "1" }, {
                                            default: withCtx(() => [
                                              _hoisted_17
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemLabel, {
                                            caption: "",
                                            lines: "2"
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_18
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })), [
                                    [Ripple]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    target: "_blank",
                                    href: authSwaggerUrl
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { lines: "1" }, {
                                            default: withCtx(() => [
                                              _hoisted_19
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemLabel, {
                                            caption: "",
                                            lines: "2"
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_20
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })), [
                                    [Ripple]
                                  ]),
                                  withDirectives((openBlock(), createBlock(QItem, {
                                    clickable: "",
                                    target: "_blank",
                                    href: playlistSwaggerUrl
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(QItemSection, null, {
                                        default: withCtx(() => [
                                          createVNode(QItemLabel, { lines: "1" }, {
                                            default: withCtx(() => [
                                              _hoisted_21
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(QItemLabel, {
                                            caption: "",
                                            lines: "2"
                                          }, {
                                            default: withCtx(() => [
                                              _hoisted_22
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })), [
                                    [Ripple]
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
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
      });
    };
  }
});
var AboutDialog = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "AboutDialog.vue"]]);
var DrawerPlaylistList_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = { class: "text-weight-medium" };
const _hoisted_2$1 = { class: "text-weight-medium" };
const _hoisted_3$1 = /* @__PURE__ */ createTextVNode(" or ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" to create and manage playlists ");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DrawerPlaylistList",
  setup(__props) {
    const authStore = useAuthStore();
    const $q = useQuasar();
    const router = useRouter();
    const playlistStore = usePlaylistStore();
    const playlistItems = computed(() => playlistStore.getPlaylists);
    const isLoggedIn = computed(() => authStore.isLoggedIn);
    const playlistApi = new PlaylistApi(ApiConfigProvider.getInstance().getApiConfig());
    onMounted(async () => {
      if (isLoggedIn.value) {
        let allPlaylists = await playlistApi.getCurrentUserPlaylist();
        let normalPlaylists = allPlaylists.filter((p) => p.type == "Normal");
        playlistStore.setPlaylists(normalPlaylists);
      }
    });
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
    const gotoPlaylist = (playlist) => {
      router.push({ name: "playlist", params: { playlistId: playlist.id } });
    };
    const showRegisterDialog = () => {
      $q.dialog({
        component: RegistrationModal
      });
    };
    const showLoginDialog = () => {
      $q.dialog({
        component: LoginModal
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isLoggedIn) ? (openBlock(), createBlock(QList, { key: 0 }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList(collectionNavigations, (link) => {
              return withDirectives(createVNode(QItem, {
                key: link.text,
                clickable: "",
                "inset-level": 0.3,
                to: link.route,
                exact: "",
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
                          createBaseVNode("span", _hoisted_1$2, toDisplayString(link.text), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["inset-level", "to"]), [
                [Ripple]
              ]);
            }), 64)),
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(playlistItems), (item) => {
              return withDirectives((openBlock(), createBlock(QItem, {
                key: item,
                clickable: "",
                "inset-level": 0.3,
                onClick: ($event) => gotoPlaylist(item)
              }, {
                default: withCtx(() => [
                  createVNode(QItemSection, { avatar: "" }, {
                    default: withCtx(() => [
                      createVNode(QIcon, {
                        name: unref(outlinedPlaylistPlay),
                        size: "24px"
                      }, null, 8, ["name"])
                    ]),
                    _: 1
                  }),
                  createVNode(QItemSection, null, {
                    default: withCtx(() => [
                      createVNode(QItemLabel, null, {
                        default: withCtx(() => [
                          createBaseVNode("span", _hoisted_2$1, toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["inset-level", "onClick"])), [
                [Ripple]
              ]);
            }), 128))
          ]),
          _: 1
        })) : createCommentVNode("", true),
        !unref(isLoggedIn) ? (openBlock(), createBlock(QList, { key: 1 }, {
          default: withCtx(() => [
            createVNode(QItem, { "inset-level": 0.3 }, {
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  createBaseVNode("a", {
                    class: "link",
                    onClick: showLoginDialog
                  }, "Log in"),
                  _hoisted_3$1,
                  createBaseVNode("a", {
                    class: "link",
                    onClick: showRegisterDialog
                  }, "Sign up"),
                  _hoisted_4
                ])
              ]),
              _: 1
            }, 8, ["inset-level"])
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
var DrawerPlaylistList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-56ca8ecc"], ["__file", "DrawerPlaylistList.vue"]]);
const _hoisted_1$1 = { class: "text-weight-medium" };
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
        route: { name: "homePaginate" }
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
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
                          createBaseVNode("span", _hoisted_1$1, toDisplayString(link.text), 1)
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
            }), 64))
          ]),
          _: 1
        }),
        createVNode(QSeparator, { class: "q-my-sm" }),
        createVNode(DrawerPlaylistList)
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
    const bgStyleStore = usePageContainerBgStyleStore();
    const bgGradient1 = computed(() => bgStyleStore.getGradient1);
    const bgGradient2 = computed(() => bgStyleStore.getGradient2);
    const bgGradient = computed(() => {
      return `linear-gradient(180deg, ${bgGradient1.value} 0%, ${bgGradient2.value} 30%, rgba(0,0,0,1) 50%)`;
    });
    const back = () => {
      router.back();
    };
    const forward = () => {
      router.forward();
    };
    const queueDisplayStore = useQueueDisplayStore();
    const showQueue = computed(() => queueDisplayStore.show);
    const q = useQuasar();
    q.dark.set(true);
    setCssVar("primary", "#000000");
    const showSettingsDialog = () => {
      q.dialog({
        component: SettingsModal
      });
    };
    const showAboutDialog = () => {
      q.dialog({
        component: AboutDialog
      });
    };
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
                      icon: unref(outlinedInfo),
                      onClick: showAboutDialog
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
                      icon: unref(outlinedSettings),
                      onClick: showSettingsDialog
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
            width: 250
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
                  (openBlock(), createBlock(KeepAlive, { include: ["HomePagePaginate", "HomePageInfScroll", "ArtistPage"] }, [
                    (openBlock(), createBlock(resolveDynamicComponent(Component)))
                  ], 1024))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["style"]),
          createVNode(QFooter, { class: "border-top-thin" }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC5jOThiZTg4OC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvTG9naW5SZXN1bHQudHMiLCIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9Pa1Jlc3VsdC50cyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvbW9kZWxzL1JvbGUudHMiLCIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9Vc2VyLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvUmVmcmVzaFRva2VuLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvVXNlckNyZWRlbnRpYWxzRHRvLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9hcGlzL1VzZXJBcGkudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Rvb2xiYXIvUVRvb2xiYXJUaXRsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3BhY2UvUVNwYWNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9oZWFkZXIvUUhlYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZHJhd2VyL1FEcmF3ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BhZ2UvUVBhZ2VDb250YWluZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9RRm9vdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9sYXlvdXQvUUxheW91dC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYWNrSW5mb0NhcmQudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZXIvdXNlLXNsaWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL1FTbGlkZXIuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZWRpYUNvbnRyb2wudnVlIiwiLi4vLi4vLi4vc3JjL3N0b3Jlcy9zaG93UXVldWUudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9RdWV1ZUNvbnRyb2wudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUGxheWVyQ29udHJvbC52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlLXRyYW5zaXRpb24vUVNsaWRlVHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZXhwYW5zaW9uLWl0ZW0vUUV4cGFuc2lvbkl0ZW0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwaW5uZXIvUVNwaW5uZXJBdWRpby5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1F1ZXVlSXRlbS52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EcmF3ZXJRdWV1ZS52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi1ncm91cC9RQnRuR3JvdXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi1kcm9wZG93bi9RQnRuRHJvcGRvd24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvcm0vUUZvcm0uanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb25Nb2RhbC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1VzZXJBY2NvdW50QnV0dG9uLnZ1ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy91c2UtdGFiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FUYWIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYnMvUVRhYnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL1RvdWNoU3dpcGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYWNoZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXBhbmVsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWItcGFuZWxzL1FUYWJQYW5lbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFiLXBhbmVscy9RVGFiUGFuZWxzLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3NNb2RhbC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BYm91dERpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EcmF3ZXJQbGF5bGlzdExpc3QudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhd2VyTmF2aWdhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBBdXRoVG9rZW4gfSBmcm9tICcuL0F1dGhUb2tlbic7XG5pbXBvcnQge1xuICAgIEF1dGhUb2tlbkZyb21KU09OLFxuICAgIEF1dGhUb2tlbkZyb21KU09OVHlwZWQsXG4gICAgQXV0aFRva2VuVG9KU09OLFxufSBmcm9tICcuL0F1dGhUb2tlbic7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIExvZ2luUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXN1bHQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVzdWx0XG4gICAgICovXG4gICAgand0VG9rZW4/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVzdWx0XG4gICAgICovXG4gICAgcmVmcmVzaFRva2VuPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXV0aFRva2VufVxuICAgICAqIEBtZW1iZXJvZiBMb2dpblJlc3VsdFxuICAgICAqL1xuICAgIGF1dGhJbmZvPzogQXV0aFRva2VuO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIExvZ2luUmVzdWx0IGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZMb2dpblJlc3VsdCh2YWx1ZTogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgbGV0IGlzSW5zdGFuY2UgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblJlc3VsdEZyb21KU09OKGpzb246IGFueSk6IExvZ2luUmVzdWx0IHtcbiAgICByZXR1cm4gTG9naW5SZXN1bHRGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luUmVzdWx0RnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBMb2dpblJlc3VsdCB7XG4gICAgaWYgKChqc29uID09PSB1bmRlZmluZWQpIHx8IChqc29uID09PSBudWxsKSkge1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdqd3RUb2tlbic6ICFleGlzdHMoanNvbiwgJ2p3dFRva2VuJykgPyB1bmRlZmluZWQgOiBqc29uWydqd3RUb2tlbiddLFxuICAgICAgICAncmVmcmVzaFRva2VuJzogIWV4aXN0cyhqc29uLCAncmVmcmVzaFRva2VuJykgPyB1bmRlZmluZWQgOiBqc29uWydyZWZyZXNoVG9rZW4nXSxcbiAgICAgICAgJ2F1dGhJbmZvJzogIWV4aXN0cyhqc29uLCAnYXV0aEluZm8nKSA/IHVuZGVmaW5lZCA6IEF1dGhUb2tlbkZyb21KU09OKGpzb25bJ2F1dGhJbmZvJ10pLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblJlc3VsdFRvSlNPTih2YWx1ZT86IExvZ2luUmVzdWx0IHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ2p3dFRva2VuJzogdmFsdWUuand0VG9rZW4sXG4gICAgICAgICdyZWZyZXNoVG9rZW4nOiB2YWx1ZS5yZWZyZXNoVG9rZW4sXG4gICAgICAgICdhdXRoSW5mbyc6IEF1dGhUb2tlblRvSlNPTih2YWx1ZS5hdXRoSW5mbyksXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9rUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT2tSZXN1bHQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIE9rUmVzdWx0XG4gICAgICovXG4gICAgc3RhdHVzQ29kZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBPa1Jlc3VsdCBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mT2tSZXN1bHQodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT2tSZXN1bHRGcm9tSlNPTihqc29uOiBhbnkpOiBPa1Jlc3VsdCB7XG4gICAgcmV0dXJuIE9rUmVzdWx0RnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBPa1Jlc3VsdEZyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogT2tSZXN1bHQge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAnc3RhdHVzQ29kZSc6ICFleGlzdHMoanNvbiwgJ3N0YXR1c0NvZGUnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3N0YXR1c0NvZGUnXSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT2tSZXN1bHRUb0pTT04odmFsdWU/OiBPa1Jlc3VsdCB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdzdGF0dXNDb2RlJzogdmFsdWUuc3RhdHVzQ29kZSxcbiAgICB9O1xufVxuXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB7XG4gICAgVXNlckZyb21KU09OLFxuICAgIFVzZXJGcm9tSlNPTlR5cGVkLFxuICAgIFVzZXJUb0pTT04sXG59IGZyb20gJy4vVXNlcic7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFJvbGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb2xlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSb2xlXG4gICAgICovXG4gICAgcm9sZU5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxVc2VyPn1cbiAgICAgKiBAbWVtYmVyb2YgUm9sZVxuICAgICAqL1xuICAgIHVzZXJzPzogQXJyYXk8VXNlcj4gfCBudWxsO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFJvbGUgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VPZlJvbGUodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUm9sZUZyb21KU09OKGpzb246IGFueSk6IFJvbGUge1xuICAgIHJldHVybiBSb2xlRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSb2xlRnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBSb2xlIHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3JvbGVOYW1lJzogIWV4aXN0cyhqc29uLCAncm9sZU5hbWUnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3JvbGVOYW1lJ10sXG4gICAgICAgICd1c2Vycyc6ICFleGlzdHMoanNvbiwgJ3VzZXJzJykgPyB1bmRlZmluZWQgOiAoanNvblsndXNlcnMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsndXNlcnMnXSBhcyBBcnJheTxhbnk+KS5tYXAoVXNlckZyb21KU09OKSksXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJvbGVUb0pTT04odmFsdWU/OiBSb2xlIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3JvbGVOYW1lJzogdmFsdWUucm9sZU5hbWUsXG4gICAgICAgICd1c2Vycyc6IHZhbHVlLnVzZXJzID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAodmFsdWUudXNlcnMgPT09IG51bGwgPyBudWxsIDogKHZhbHVlLnVzZXJzIGFzIEFycmF5PGFueT4pLm1hcChVc2VyVG9KU09OKSksXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgUmVmcmVzaFRva2VuIH0gZnJvbSAnLi9SZWZyZXNoVG9rZW4nO1xuaW1wb3J0IHtcbiAgICBSZWZyZXNoVG9rZW5Gcm9tSlNPTixcbiAgICBSZWZyZXNoVG9rZW5Gcm9tSlNPTlR5cGVkLFxuICAgIFJlZnJlc2hUb2tlblRvSlNPTixcbn0gZnJvbSAnLi9SZWZyZXNoVG9rZW4nO1xuaW1wb3J0IHR5cGUgeyBSb2xlIH0gZnJvbSAnLi9Sb2xlJztcbmltcG9ydCB7XG4gICAgUm9sZUZyb21KU09OLFxuICAgIFJvbGVGcm9tSlNPTlR5cGVkLFxuICAgIFJvbGVUb0pTT04sXG59IGZyb20gJy4vUm9sZSc7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVzZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyXG4gICAgICovXG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlclxuICAgICAqL1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlclxuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJvbGU+fVxuICAgICAqIEBtZW1iZXJvZiBVc2VyXG4gICAgICovXG4gICAgcm9sZXM/OiBBcnJheTxSb2xlPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJlZnJlc2hUb2tlbj59XG4gICAgICogQG1lbWJlcm9mIFVzZXJcbiAgICAgKi9cbiAgICB0b2tlbnM/OiBBcnJheTxSZWZyZXNoVG9rZW4+IHwgbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBVc2VyIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZVc2VyKHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJ1c2VySWRcIiBpbiB2YWx1ZTtcbiAgICBpc0luc3RhbmNlID0gaXNJbnN0YW5jZSAmJiBcInVzZXJOYW1lXCIgaW4gdmFsdWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJwYXNzd29yZFwiIGluIHZhbHVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyRnJvbUpTT04oanNvbjogYW55KTogVXNlciB7XG4gICAgcmV0dXJuIFVzZXJGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJGcm9tSlNPTlR5cGVkKGpzb246IGFueSwgaWdub3JlRGlzY3JpbWluYXRvcjogYm9vbGVhbik6IFVzZXIge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndXNlcklkJzoganNvblsndXNlcklkJ10sXG4gICAgICAgICd1c2VyTmFtZSc6IGpzb25bJ3VzZXJOYW1lJ10sXG4gICAgICAgICdwYXNzd29yZCc6IGpzb25bJ3Bhc3N3b3JkJ10sXG4gICAgICAgICdyb2xlcyc6ICFleGlzdHMoanNvbiwgJ3JvbGVzJykgPyB1bmRlZmluZWQgOiAoanNvblsncm9sZXMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsncm9sZXMnXSBhcyBBcnJheTxhbnk+KS5tYXAoUm9sZUZyb21KU09OKSksXG4gICAgICAgICd0b2tlbnMnOiAhZXhpc3RzKGpzb24sICd0b2tlbnMnKSA/IHVuZGVmaW5lZCA6IChqc29uWyd0b2tlbnMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsndG9rZW5zJ10gYXMgQXJyYXk8YW55PikubWFwKFJlZnJlc2hUb2tlbkZyb21KU09OKSksXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJUb0pTT04odmFsdWU/OiBVc2VyIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJJZCc6IHZhbHVlLnVzZXJJZCxcbiAgICAgICAgJ3VzZXJOYW1lJzogdmFsdWUudXNlck5hbWUsXG4gICAgICAgICdwYXNzd29yZCc6IHZhbHVlLnBhc3N3b3JkLFxuICAgICAgICAncm9sZXMnOiB2YWx1ZS5yb2xlcyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHZhbHVlLnJvbGVzID09PSBudWxsID8gbnVsbCA6ICh2YWx1ZS5yb2xlcyBhcyBBcnJheTxhbnk+KS5tYXAoUm9sZVRvSlNPTikpLFxuICAgICAgICAndG9rZW5zJzogdmFsdWUudG9rZW5zID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAodmFsdWUudG9rZW5zID09PSBudWxsID8gbnVsbCA6ICh2YWx1ZS50b2tlbnMgYXMgQXJyYXk8YW55PikubWFwKFJlZnJlc2hUb2tlblRvSlNPTikpLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cbmltcG9ydCB7IGV4aXN0cywgbWFwVmFsdWVzIH0gZnJvbSAnLi4vcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHtcbiAgICBVc2VyRnJvbUpTT04sXG4gICAgVXNlckZyb21KU09OVHlwZWQsXG4gICAgVXNlclRvSlNPTixcbn0gZnJvbSAnLi9Vc2VyJztcblxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUmVmcmVzaFRva2VuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmcmVzaFRva2VuIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZWZyZXNoVG9rZW5cbiAgICAgKi9cbiAgICB0b2tlbklkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBSZWZyZXNoVG9rZW5cbiAgICAgKi9cbiAgICBpc3N1ZWRUaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZWZyZXNoVG9rZW5cbiAgICAgKi9cbiAgICB1c2VySWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1VzZXJ9XG4gICAgICogQG1lbWJlcm9mIFJlZnJlc2hUb2tlblxuICAgICAqL1xuICAgIHVzZXI/OiBVc2VyO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFJlZnJlc2hUb2tlbiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mUmVmcmVzaFRva2VuKHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG5cbiAgICByZXR1cm4gaXNJbnN0YW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZnJlc2hUb2tlbkZyb21KU09OKGpzb246IGFueSk6IFJlZnJlc2hUb2tlbiB7XG4gICAgcmV0dXJuIFJlZnJlc2hUb2tlbkZyb21KU09OVHlwZWQoanNvbiwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVmcmVzaFRva2VuRnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBSZWZyZXNoVG9rZW4ge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndG9rZW5JZCc6ICFleGlzdHMoanNvbiwgJ3Rva2VuSWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3Rva2VuSWQnXSxcbiAgICAgICAgJ2lzc3VlZFRpbWUnOiAhZXhpc3RzKGpzb24sICdpc3N1ZWRUaW1lJykgPyB1bmRlZmluZWQgOiAobmV3IERhdGUoanNvblsnaXNzdWVkVGltZSddKSksXG4gICAgICAgICd1c2VySWQnOiAhZXhpc3RzKGpzb24sICd1c2VySWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3VzZXJJZCddLFxuICAgICAgICAndXNlcic6ICFleGlzdHMoanNvbiwgJ3VzZXInKSA/IHVuZGVmaW5lZCA6IFVzZXJGcm9tSlNPTihqc29uWyd1c2VyJ10pLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWZyZXNoVG9rZW5Ub0pTT04odmFsdWU/OiBSZWZyZXNoVG9rZW4gfCBudWxsKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndG9rZW5JZCc6IHZhbHVlLnRva2VuSWQsXG4gICAgICAgICdpc3N1ZWRUaW1lJzogdmFsdWUuaXNzdWVkVGltZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHZhbHVlLmlzc3VlZFRpbWUudG9JU09TdHJpbmcoKSksXG4gICAgICAgICd1c2VySWQnOiB2YWx1ZS51c2VySWQsXG4gICAgICAgICd1c2VyJzogVXNlclRvSlNPTih2YWx1ZS51c2VyKSxcbiAgICB9O1xufVxuXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXNlckNyZWRlbnRpYWxzRHRvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNyZWRlbnRpYWxzRHRvIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyQ3JlZGVudGlhbHNEdG9cbiAgICAgKi9cbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFVzZXJDcmVkZW50aWFsc0R0b1xuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBnaXZlbiBvYmplY3QgaW1wbGVtZW50cyB0aGUgVXNlckNyZWRlbnRpYWxzRHRvIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZVc2VyQ3JlZGVudGlhbHNEdG8odmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcbiAgICBpc0luc3RhbmNlID0gaXNJbnN0YW5jZSAmJiBcInVzZXJOYW1lXCIgaW4gdmFsdWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJwYXNzd29yZFwiIGluIHZhbHVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTihqc29uOiBhbnkpOiBVc2VyQ3JlZGVudGlhbHNEdG8ge1xuICAgIHJldHVybiBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJDcmVkZW50aWFsc0R0b0Zyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogVXNlckNyZWRlbnRpYWxzRHRvIHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJOYW1lJzoganNvblsndXNlck5hbWUnXSxcbiAgICAgICAgJ3Bhc3N3b3JkJzoganNvblsncGFzc3dvcmQnXSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXNlckNyZWRlbnRpYWxzRHRvVG9KU09OKHZhbHVlPzogVXNlckNyZWRlbnRpYWxzRHRvIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJOYW1lJzogdmFsdWUudXNlck5hbWUsXG4gICAgICAgICdwYXNzd29yZCc6IHZhbHVlLnBhc3N3b3JkLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cblxuaW1wb3J0ICogYXMgcnVudGltZSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHtcbiAgTG9naW5SZXN1bHQsXG4gIE9rUmVzdWx0LFxuICBQcm9ibGVtRGV0YWlscyxcbiAgVXNlcixcbiAgVXNlckNyZWRlbnRpYWxzRHRvLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgICBMb2dpblJlc3VsdEZyb21KU09OLFxuICAgIExvZ2luUmVzdWx0VG9KU09OLFxuICAgIE9rUmVzdWx0RnJvbUpTT04sXG4gICAgT2tSZXN1bHRUb0pTT04sXG4gICAgUHJvYmxlbURldGFpbHNGcm9tSlNPTixcbiAgICBQcm9ibGVtRGV0YWlsc1RvSlNPTixcbiAgICBVc2VyRnJvbUpTT04sXG4gICAgVXNlclRvSlNPTixcbiAgICBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTixcbiAgICBVc2VyQ3JlZGVudGlhbHNEdG9Ub0pTT04sXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpVXNlckxvZ291dFBvc3RSZXF1ZXN0IHtcbiAgICBib2R5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luUmVxdWVzdCB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvPzogVXNlckNyZWRlbnRpYWxzRHRvO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lzdGVyUmVxdWVzdCB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvPzogVXNlckNyZWRlbnRpYWxzRHRvO1xufVxuXG4vKipcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgVXNlckFwaSBleHRlbmRzIHJ1bnRpbWUuQmFzZUFQSSB7XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBhcGlVc2VyTG9nb3V0UG9zdFJhdyhyZXF1ZXN0UGFyYW1ldGVyczogQXBpVXNlckxvZ291dFBvc3RSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPE9rUmVzdWx0Pj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvdXNlci9sb2dvdXRgLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgIGJvZHk6IHJlcXVlc3RQYXJhbWV0ZXJzLmJvZHkgYXMgYW55LFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuSlNPTkFwaVJlc3BvbnNlKHJlc3BvbnNlLCAoanNvblZhbHVlKSA9PiBPa1Jlc3VsdEZyb21KU09OKGpzb25WYWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGFwaVVzZXJMb2dvdXRQb3N0KHJlcXVlc3RQYXJhbWV0ZXJzOiBBcGlVc2VyTG9nb3V0UG9zdFJlcXVlc3QgPSB7fSwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8T2tSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFwaVVzZXJMb2dvdXRQb3N0UmF3KHJlcXVlc3RQYXJhbWV0ZXJzLCBpbml0T3ZlcnJpZGVzKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnZhbHVlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWxsVXNlcnNSYXcoaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8cnVudGltZS5BcGlSZXNwb25zZTxBcnJheTxVc2VyPj4+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL3VzZXIvYWxsYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLkpTT05BcGlSZXNwb25zZShyZXNwb25zZSwgKGpzb25WYWx1ZSkgPT4ganNvblZhbHVlLm1hcChVc2VyRnJvbUpTT04pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBnZXRBbGxVc2Vycyhpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxBcnJheTxVc2VyPj4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0QWxsVXNlcnNSYXcoaW5pdE92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS52YWx1ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGxvZ2luUmF3KHJlcXVlc3RQYXJhbWV0ZXJzOiBMb2dpblJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8TG9naW5SZXN1bHQ+PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1ldGVyczogYW55ID0ge307XG5cbiAgICAgICAgY29uc3QgaGVhZGVyUGFyYW1ldGVyczogcnVudGltZS5IVFRQSGVhZGVycyA9IHt9O1xuXG4gICAgICAgIGhlYWRlclBhcmFtZXRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKTsgLy8gSnd0IGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICBwYXRoOiBgL2FwaS91c2VyL2xvZ2luYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1ldGVycyxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgICAgICBib2R5OiBVc2VyQ3JlZGVudGlhbHNEdG9Ub0pTT04ocmVxdWVzdFBhcmFtZXRlcnMudXNlckNyZWRlbnRpYWxzRHRvKSxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLkpTT05BcGlSZXNwb25zZShyZXNwb25zZSwgKGpzb25WYWx1ZSkgPT4gTG9naW5SZXN1bHRGcm9tSlNPTihqc29uVmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBsb2dpbihyZXF1ZXN0UGFyYW1ldGVyczogTG9naW5SZXF1ZXN0ID0ge30sIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPExvZ2luUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5sb2dpblJhdyhyZXF1ZXN0UGFyYW1ldGVycywgaW5pdE92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS52YWx1ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIHJlZ2lzdGVyUmF3KHJlcXVlc3RQYXJhbWV0ZXJzOiBSZWdpc3RlclJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8b2JqZWN0Pj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvdXNlci9yZWdpc3RlcmAsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgYm9keTogVXNlckNyZWRlbnRpYWxzRHRvVG9KU09OKHJlcXVlc3RQYXJhbWV0ZXJzLnVzZXJDcmVkZW50aWFsc0R0byksXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5KU09OQXBpUmVzcG9uc2U8YW55PihyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgcmVnaXN0ZXIocmVxdWVzdFBhcmFtZXRlcnM6IFJlZ2lzdGVyUmVxdWVzdCA9IHt9LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlZ2lzdGVyUmF3KHJlcXVlc3RQYXJhbWV0ZXJzLCBpbml0T3ZlcnJpZGVzKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnZhbHVlKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRvb2xiYXJUaXRsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBzaHJpbms6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdG9vbGJhcl9fdGl0bGUgZWxsaXBzaXMnXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3BhY2UgPSBoKCdkaXYnLCB7IGNsYXNzOiAncS1zcGFjZScgfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGFjZScsXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiAoKSA9PiBzcGFjZVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUb29sYmFyJyxcblxuICBwcm9wczoge1xuICAgIGluc2V0OiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRvb2xiYXIgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyAocHJvcHMuaW5zZXQgPT09IHRydWUgPyAnIHEtdG9vbGJhci0taW5zZXQnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUsIHJvbGU6ICd0b29sYmFyJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FIZWFkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICByZXZlYWxPZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDI1MFxuICAgIH0sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBoZWlnaHRIaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmV2ZWFsJywgJ2ZvY3VzaW4nIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUUhlYWRlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHJlZihwYXJzZUludChwcm9wcy5oZWlnaHRIaW50LCAxMCkpXG4gICAgY29uc3QgcmV2ZWFsZWQgPSByZWYodHJ1ZSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0gnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2l6ZS52YWx1ZSAtICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1oZWFkZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy10b3AnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWhlYWRlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLnRvcCxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2hlYWRlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGwsIHNjcm9sbCA9PiB7XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWUgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsXG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIDw9IHByb3BzLnJldmVhbE9mZnNldFxuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gLSBzY3JvbGwuaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2hlYWRlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCB3aXRoRGlyZWN0aXZlcywgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VIaXN0b3J5IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWhpc3RvcnkuanMnXG5pbXBvcnQgdXNlTW9kZWxUb2dnbGUsIHsgdXNlTW9kZWxUb2dnbGVQcm9wcywgdXNlTW9kZWxUb2dnbGVFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLW1vZGVsLXRvZ2dsZS5qcydcbmltcG9ydCB1c2VQcmV2ZW50U2Nyb2xsIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXByZXZlbnQtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGltZW91dC5qcydcbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBoU2xvdCwgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5jb25zdCBkdXJhdGlvbiA9IDE1MFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUURyYXdlcicsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgc2lkZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xlZnQnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2xlZnQnLCAncmlnaHQnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH0sXG5cbiAgICBtaW5pOiBCb29sZWFuLFxuICAgIG1pbmlUb092ZXJsYXk6IEJvb2xlYW4sXG4gICAgbWluaVdpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1N1xuICAgIH0sXG5cbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAxMDIzXG4gICAgfSxcbiAgICBzaG93SWZBYm92ZTogQm9vbGVhbixcblxuICAgIGJlaGF2aW9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnZGVmYXVsdCcsICdkZXNrdG9wJywgJ21vYmlsZScgXS5pbmNsdWRlcyh2KSxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgIH0sXG5cbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIG92ZXJsYXk6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBub1N3aXBlT3BlbjogQm9vbGVhbixcbiAgICBub1N3aXBlQ2xvc2U6IEJvb2xlYW4sXG4gICAgbm9Td2lwZUJhY2tkcm9wOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzLFxuICAgICdvbkxheW91dCcsICdtaW5pU3RhdGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgcHJldmVudEJvZHlTY3JvbGwgfSA9IHVzZVByZXZlbnRTY3JvbGwoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0LCByZW1vdmVUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRHJhd2VyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBsZXQgbGFzdERlc2t0b3BTdGF0ZSwgdGltZXJNaW5pLCBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlclxuXG4gICAgY29uc3QgYmVsb3dCcmVha3BvaW50ID0gcmVmKFxuICAgICAgcHJvcHMuYmVoYXZpb3IgPT09ICdtb2JpbGUnXG4gICAgICB8fCAocHJvcHMuYmVoYXZpb3IgIT09ICdkZXNrdG9wJyAmJiAkbGF5b3V0LnRvdGFsV2lkdGgudmFsdWUgPD0gcHJvcHMuYnJlYWtwb2ludClcbiAgICApXG5cbiAgICBjb25zdCBpc01pbmkgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubWluaSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBzaXplID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgaXNNaW5pLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMubWluaVdpZHRoXG4gICAgICAgIDogcHJvcHMud2lkdGhcbiAgICApKVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihcbiAgICAgIHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGhpZGVPblJvdXRlQ2hhbmdlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWVcbiAgICAgICYmIChiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUgfHwgb25TY3JlZW5PdmVybGF5LnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3cgKGV2dCwgbm9FdmVudCkge1xuICAgICAgYWRkVG9IaXN0b3J5KClcblxuICAgICAgZXZ0ICE9PSBmYWxzZSAmJiAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgYXBwbHlQb3NpdGlvbigwKVxuXG4gICAgICBpZiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG90aGVySW5zdGFuY2UgPSAkbGF5b3V0Lmluc3RhbmNlc1sgb3RoZXJTaWRlLnZhbHVlIF1cbiAgICAgICAgaWYgKG90aGVySW5zdGFuY2UgIT09IHZvaWQgMCAmJiBvdGhlckluc3RhbmNlLmJlbG93QnJlYWtwb2ludCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG90aGVySW5zdGFuY2UuaGlkZShmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSAmJiBwcmV2ZW50Qm9keVNjcm9sbCh0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgZXZ0ICE9PSBmYWxzZSAmJiBzZXRTY3JvbGxhYmxlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBldnQgIT09IGZhbHNlICYmIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICAgICAgbm9FdmVudCAhPT0gdHJ1ZSAmJiBlbWl0KCdzaG93JywgZXZ0KVxuICAgICAgfSwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSGlkZSAoZXZ0LCBub0V2ZW50KSB7XG4gICAgICByZW1vdmVGcm9tSGlzdG9yeSgpXG5cbiAgICAgIGV2dCAhPT0gZmFsc2UgJiYgJGxheW91dC5hbmltYXRlKClcblxuICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgYXBwbHlQb3NpdGlvbihzdGF0ZURpcmVjdGlvbi52YWx1ZSAqIHNpemUudmFsdWUpXG5cbiAgICAgIGNsZWFudXAoKVxuXG4gICAgICBpZiAobm9FdmVudCAhPT0gdHJ1ZSkge1xuICAgICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4geyBlbWl0KCdoaWRlJywgZXZ0KSB9LCBkdXJhdGlvbilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVUaW1lb3V0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHNob3csIGhpZGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHtcbiAgICAgIHNob3dpbmcsXG4gICAgICBoaWRlT25Sb3V0ZUNoYW5nZSxcbiAgICAgIGhhbmRsZVNob3csXG4gICAgICBoYW5kbGVIaWRlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgYWRkVG9IaXN0b3J5LCByZW1vdmVGcm9tSGlzdG9yeSB9ID0gdXNlSGlzdG9yeShzaG93aW5nLCBoaWRlLCBoaWRlT25Sb3V0ZUNoYW5nZSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgYmVsb3dCcmVha3BvaW50LFxuICAgICAgaGlkZVxuICAgIH1cblxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNpZGUgPT09ICdyaWdodCcpXG5cbiAgICBjb25zdCBzdGF0ZURpcmVjdGlvbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDEpICogKHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiAtMSlcbiAgICApXG5cbiAgICBjb25zdCBmbGFnQmFja2Ryb3BCZyA9IHJlZigwKVxuICAgIGNvbnN0IGZsYWdQYW5uaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGZsYWdNaW5pQW5pbWF0ZSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBmbGFnQ29udGVudFBvc2l0aW9uID0gcmVmKCAvLyBzdGFydGluZyB3aXRoIFwiaGlkZGVuXCIgZm9yIFNTUlxuICAgICAgc2l6ZS52YWx1ZSAqIHN0YXRlRGlyZWN0aW9uLnZhbHVlXG4gICAgKVxuXG4gICAgY29uc3Qgb3RoZXJTaWRlID0gY29tcHV0ZWQoKCkgPT4gKHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcpKVxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSAmJiBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgICA/IChwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlID8gcHJvcHMubWluaVdpZHRoIDogc2l6ZS52YWx1ZSlcbiAgICAgICAgOiAwXG4gICAgKSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IHRydWVcbiAgICAgIHx8IHByb3BzLm1pbmlUb092ZXJsYXkgPT09IHRydWVcbiAgICAgIHx8ICRsYXlvdXQudmlldy52YWx1ZS5pbmRleE9mKHJpZ2h0U2lkZS52YWx1ZSA/ICdSJyA6ICdMJykgPiAtMVxuICAgICAgfHwgKCRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSAmJiAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IG9uTGF5b3V0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IGZhbHNlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgKVxuXG4gICAgY29uc3Qgb25TY3JlZW5PdmVybGF5ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICApXG5cbiAgICBjb25zdCBiYWNrZHJvcENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdmdWxsc2NyZWVuIHEtZHJhd2VyX19iYWNrZHJvcCdcbiAgICAgICsgKHNob3dpbmcudmFsdWUgPT09IGZhbHNlICYmIGZsYWdQYW5uaW5nLnZhbHVlID09PSBmYWxzZSA/ICcgaGlkZGVuJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGJhY2tkcm9wU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLDAsMCwkeyBmbGFnQmFja2Ryb3BCZy52YWx1ZSAqIDAuNCB9KWBcbiAgICB9KSlcblxuICAgIGNvbnN0IGhlYWRlclNsb3QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAkbGF5b3V0LnJvd3MudmFsdWUudG9wWyAyIF0gPT09ICdyJ1xuICAgICAgICA6ICRsYXlvdXQucm93cy52YWx1ZS50b3BbIDAgXSA9PT0gJ2wnXG4gICAgKSlcblxuICAgIGNvbnN0IGZvb3RlclNsb3QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAkbGF5b3V0LnJvd3MudmFsdWUuYm90dG9tWyAyIF0gPT09ICdyJ1xuICAgICAgICA6ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b21bIDAgXSA9PT0gJ2wnXG4gICAgKSlcblxuICAgIGNvbnN0IGFib3ZlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjc3MgPSB7fVxuXG4gICAgICBpZiAoJGxheW91dC5oZWFkZXIuc3BhY2UgPT09IHRydWUgJiYgaGVhZGVyU2xvdC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLnRvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5vZmZzZXQgfXB4YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLnRvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUgJiYgZm9vdGVyU2xvdC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLmJvdHRvbSA9IGAkeyAkbGF5b3V0LmZvb3Rlci5vZmZzZXQgfXB4YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLmJvdHRvbSA9IGAkeyAkbGF5b3V0LmZvb3Rlci5zaXplIH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBgJHsgc2l6ZS52YWx1ZSB9cHhgLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7IGZsYWdDb250ZW50UG9zaXRpb24udmFsdWUgfXB4KWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHN0eWxlXG4gICAgICAgIDogT2JqZWN0LmFzc2lnbihzdHlsZSwgYWJvdmVTdHlsZS52YWx1ZSlcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGVudENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWRyYXdlcl9fY29udGVudCBmaXQgJ1xuICAgICAgKyAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdzY3JvbGwnIDogJ292ZXJmbG93LWF1dG8nKVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtZHJhd2VyIHEtZHJhd2VyLS0keyBwcm9wcy5zaWRlIH1gXG4gICAgICArIChmbGFnTWluaUFuaW1hdGUudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1taW5pLWFuaW1hdGUnIDogJycpXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgbm8tdHJhbnNpdGlvbidcbiAgICAgICAgICA6IChzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJycgOiAnIHEtbGF5b3V0LS1wcmV2ZW50LWZvY3VzJylcbiAgICAgIClcbiAgICAgICsgKFxuICAgICAgICBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgZml4ZWQgcS1kcmF3ZXItLW9uLXRvcCBxLWRyYXdlci0tbW9iaWxlIHEtZHJhd2VyLS10b3AtcGFkZGluZydcbiAgICAgICAgICA6IGAgcS1kcmF3ZXItLSR7IGlzTWluaS52YWx1ZSA9PT0gdHJ1ZSA/ICdtaW5pJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICAgICArIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSB8fCBvbkxheW91dC52YWx1ZSAhPT0gdHJ1ZSA/ICcgZml4ZWQnIDogJycpXG4gICAgICAgICAgKyAocHJvcHMub3ZlcmxheSA9PT0gdHJ1ZSB8fCBwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlID8gJyBxLWRyYXdlci0tb24tdG9wJyA6ICcnKVxuICAgICAgICAgICsgKGhlYWRlclNsb3QudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS10b3AtcGFkZGluZycgOiAnJylcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBvcGVuRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgcHJvcHMubm9Td2lwZU9wZW4gIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gcHJvcHMuc2lkZSA6IG90aGVyU2lkZS52YWx1ZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbk9wZW5QYW4sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAge1xuICAgICAgICAgIFsgZGlyIF06IHRydWUsXG4gICAgICAgICAgbW91c2U6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSBdXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRlbnRDbG9zZURpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gb3RoZXJTaWRlLnZhbHVlIDogcHJvcHMuc2lkZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbkNsb3NlUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBjb25zdCBiYWNrZHJvcENsb3NlRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1N3aXBlQmFja2Ryb3AgIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gb3RoZXJTaWRlLnZhbHVlIDogcHJvcHMuc2lkZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbkNsb3NlUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVCZWxvd0JyZWFrcG9pbnQgKCkge1xuICAgICAgdXBkYXRlTG9jYWwoYmVsb3dCcmVha3BvaW50LCAoXG4gICAgICAgIHByb3BzLmJlaGF2aW9yID09PSAnbW9iaWxlJ1xuICAgICAgICB8fCAocHJvcHMuYmVoYXZpb3IgIT09ICdkZXNrdG9wJyAmJiAkbGF5b3V0LnRvdGFsV2lkdGgudmFsdWUgPD0gcHJvcHMuYnJlYWtwb2ludClcbiAgICAgICkpXG4gICAgfVxuXG4gICAgd2F0Y2goYmVsb3dCcmVha3BvaW50LCB2YWwgPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkgeyAvLyBmcm9tIGxnIHRvIHhzXG4gICAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBzaG93aW5nLnZhbHVlXG4gICAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgaGlkZShmYWxzZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgICAmJiBwcm9wcy5iZWhhdmlvciAhPT0gJ21vYmlsZSdcbiAgICAgICAgJiYgbGFzdERlc2t0b3BTdGF0ZSAhPT0gZmFsc2VcbiAgICAgICkgeyAvLyBmcm9tIHhzIHRvIGxnXG4gICAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgYXBwbHlQb3NpdGlvbigwKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzaG93KGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNpZGUsIChuZXdTaWRlLCBvbGRTaWRlKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIG9sZFNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIG9sZFNpZGUgXSA9IHZvaWQgMFxuICAgICAgICAkbGF5b3V0WyBvbGRTaWRlIF0uc3BhY2UgPSBmYWxzZVxuICAgICAgICAkbGF5b3V0WyBvbGRTaWRlIF0ub2Zmc2V0ID0gMFxuICAgICAgfVxuXG4gICAgICAkbGF5b3V0Lmluc3RhbmNlc1sgbmV3U2lkZSBdID0gaW5zdGFuY2VcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5zaXplID0gc2l6ZS52YWx1ZVxuICAgICAgJGxheW91dFsgbmV3U2lkZSBdLnNwYWNlID0gb25MYXlvdXQudmFsdWVcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5vZmZzZXQgPSBvZmZzZXQudmFsdWVcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSB8fCBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUJlbG93QnJlYWtwb2ludCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gcHJvcHMuYmVoYXZpb3IgKyBwcm9wcy5icmVha3BvaW50LFxuICAgICAgdXBkYXRlQmVsb3dCcmVha3BvaW50XG4gICAgKVxuXG4gICAgd2F0Y2goJGxheW91dC5pc0NvbnRhaW5lciwgdmFsID0+IHtcbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJldmVudEJvZHlTY3JvbGwodmFsICE9PSB0cnVlKVxuICAgICAgdmFsID09PSB0cnVlICYmIHVwZGF0ZUJlbG93QnJlYWtwb2ludCgpXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQuc2Nyb2xsYmFyV2lkdGgsICgpID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiB2b2lkIDApXG4gICAgfSlcblxuICAgIHdhdGNoKG9mZnNldCwgdmFsID0+IHsgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpIH0pXG5cbiAgICB3YXRjaChvbkxheW91dCwgdmFsID0+IHtcbiAgICAgIGVtaXQoJ29uTGF5b3V0JywgdmFsKVxuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2gocmlnaHRTaWRlLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goc2l6ZSwgdmFsID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oKVxuICAgICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaVRvT3ZlcmxheSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZVNpemVPbkxheW91dCh2YWwsIHNpemUudmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+ICRxLmxhbmcucnRsLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaSwgKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgYW5pbWF0ZU1pbmkoKVxuICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChpc01pbmksIHZhbCA9PiB7IGVtaXQoJ21pbmlTdGF0ZScsIHZhbCkgfSlcblxuICAgIGZ1bmN0aW9uIGFwcGx5UG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgcG9zaXRpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gMCA6IHNpemUudmFsdWVcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IE1hdGguYWJzKHBvc2l0aW9uKSA9PT0gc2l6ZS52YWx1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcG9zaXRpb24gKz0gc3RhdGVEaXJlY3Rpb24udmFsdWUgKiAkbGF5b3V0LnNjcm9sbGJhcldpZHRoLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJhY2tkcm9wICh4KSB7XG4gICAgICBmbGFnQmFja2Ryb3BCZy52YWx1ZSA9IHhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxhYmxlICh2KSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB2ID09PSB0cnVlXG4gICAgICAgID8gJ3JlbW92ZSdcbiAgICAgICAgOiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdhZGQnIDogJycpXG5cbiAgICAgIGFjdGlvbiAhPT0gJycgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3RbIGFjdGlvbiBdKCdxLWJvZHktLWRyYXdlci10b2dnbGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVNaW5pICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lck1pbmkpXG5cbiAgICAgIGlmICh2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgLy8gbmVlZCB0byBzcGVlZCBpdCB1cCBhbmQgYXBwbHkgaXQgaW1tZWRpYXRlbHksXG4gICAgICAgIC8vIGV2ZW4gZmFzdGVyIHRoYW4gVnVlJ3MgbmV4dFRpY2shXG4gICAgICAgIHZtLnByb3h5LiRlbC5jbGFzc0xpc3QuYWRkKCdxLWRyYXdlci0tbWluaS1hbmltYXRlJylcbiAgICAgIH1cblxuICAgICAgZmxhZ01pbmlBbmltYXRlLnZhbHVlID0gdHJ1ZVxuICAgICAgdGltZXJNaW5pID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGlmICh2bSAmJiB2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgICB2bS5wcm94eS4kZWwuY2xhc3NMaXN0LnJlbW92ZSgncS1kcmF3ZXItLW1pbmktYW5pbWF0ZScpXG4gICAgICAgIH1cbiAgICAgIH0sIDE1MClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk9wZW5QYW4gKGV2dCkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbWlnaHQgY2FwdHVyZSBhbmQgdHJpZ2dlciB0aGlzXG4gICAgICAgIC8vIGV2ZW4gaWYgRHJhd2VyIGhhcyBqdXN0IGJlZW4gb3BlbmVkIChidXQgYW5pbWF0aW9uIGlzIHN0aWxsIHBlbmRpbmcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICB3aWR0aCA9IHNpemUudmFsdWUsXG4gICAgICAgIHBvc2l0aW9uID0gYmV0d2VlbihldnQuZGlzdGFuY2UueCwgMCwgd2lkdGgpXG5cbiAgICAgIGlmIChldnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBwb3NpdGlvbiA+PSBNYXRoLm1pbig3NSwgd2lkdGgpXG5cbiAgICAgICAgaWYgKG9wZW5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNob3coKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiB3aWR0aClcbiAgICAgICAgfVxuXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGFwcGx5UG9zaXRpb24oXG4gICAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHJpZ2h0U2lkZS52YWx1ZSAhPT0gdHJ1ZSA6IHJpZ2h0U2lkZS52YWx1ZSlcbiAgICAgICAgICA/IE1hdGgubWF4KHdpZHRoIC0gcG9zaXRpb24sIDApXG4gICAgICAgICAgOiBNYXRoLm1pbigwLCBwb3NpdGlvbiAtIHdpZHRoKVxuICAgICAgKVxuICAgICAgYXBwbHlCYWNrZHJvcChcbiAgICAgICAgYmV0d2Vlbihwb3NpdGlvbiAvIHdpZHRoLCAwLCAxKVxuICAgICAgKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbG9zZVBhbiAoZXZ0KSB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyBzb21lIGJyb3dzZXJzIG1pZ2h0IGNhcHR1cmUgYW5kIHRyaWdnZXIgdGhpc1xuICAgICAgICAvLyBldmVuIGlmIERyYXdlciBoYXMganVzdCBiZWVuIGNsb3NlZCAoYnV0IGFuaW1hdGlvbiBpcyBzdGlsbCBwZW5kaW5nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBzaXplLnZhbHVlLFxuICAgICAgICBkaXIgPSBldnQuZGlyZWN0aW9uID09PSBwcm9wcy5zaWRlLFxuICAgICAgICBwb3NpdGlvbiA9ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGRpciAhPT0gdHJ1ZSA6IGRpcilcbiAgICAgICAgICA/IGJldHdlZW4oZXZ0LmRpc3RhbmNlLngsIDAsIHdpZHRoKVxuICAgICAgICAgIDogMFxuXG4gICAgICBpZiAoZXZ0LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gTWF0aC5hYnMocG9zaXRpb24pIDwgTWF0aC5taW4oNzUsIHdpZHRoKVxuXG4gICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICBhcHBseUJhY2tkcm9wKGJldHdlZW4oMSAtIHBvc2l0aW9uIC8gd2lkdGgsIDAsIDEpKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChmYWxzZSlcbiAgICAgIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUocHJvcHMuc2lkZSwgcHJvcCwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsIChwcm9wLCB2YWwpIHtcbiAgICAgIGlmIChwcm9wLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemVPbkxheW91dCAobWluaVRvT3ZlcmxheSwgc2l6ZSkge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgbWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUpXG4gICAgfVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IGluc3RhbmNlXG4gICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIG9uTGF5b3V0LnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWVcbiAgICAgICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGVtaXQoJ29uTGF5b3V0Jywgb25MYXlvdXQudmFsdWUpXG4gICAgICBlbWl0KCdtaW5pU3RhdGUnLCBpc01pbmkudmFsdWUpXG5cbiAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZVxuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IGhhbmRsZVNob3cgOiBoYW5kbGVIaWRlXG4gICAgICAgIGFjdGlvbihmYWxzZSwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSAhPT0gMCkge1xuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbGwgY29tcHV0ZWQgcHJvcGVydGllc1xuICAgICAgICAvLyBoYXZlIGJlZW4gdXBkYXRlZCBiZWZvcmUgY2FsbGluZyBoYW5kbGVTaG93L2hhbmRsZUhpZGUoKVxuICAgICAgICBuZXh0VGljayhmbilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyID0gd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyKClcbiAgICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgPSB2b2lkIDBcblxuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gZmFsc2UgJiYgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHNob3coZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm4oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgIT09IHZvaWQgMCAmJiBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlcigpXG4gICAgICBjbGVhclRpbWVvdXQodGltZXJNaW5pKVxuXG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGNsZWFudXAoKVxuXG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgaWYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9wcy5ub1N3aXBlT3BlbiA9PT0gZmFsc2UgJiYgY2hpbGQucHVzaChcbiAgICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAnb3BlbicsXG4gICAgICAgICAgICAgIGNsYXNzOiBgcS1kcmF3ZXJfX29wZW5lciBmaXhlZC0keyBwcm9wcy5zaWRlIH1gLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgb3BlbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaERpcihcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdiYWNrZHJvcCcsXG4gICAgICAgICAgICAgIGNsYXNzOiBiYWNrZHJvcENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogYmFja2Ryb3BTdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBoaWRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgJ2JhY2tkcm9wJyxcbiAgICAgICAgICAgIHByb3BzLm5vU3dpcGVCYWNrZHJvcCAhPT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICAgKCkgPT4gYmFja2Ryb3BDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5pID0gaXNNaW5pLnZhbHVlID09PSB0cnVlICYmIHNsb3RzLm1pbmkgIT09IHZvaWQgMFxuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGtleTogJycgKyBtaW5pLCAvLyByZXF1aXJlZCBvdGhlcndpc2UgVnVlIHdpbGwgbm90IGRpZmYgY29ycmVjdGx5XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIGNvbnRlbnRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIGF0dHJzLmNsYXNzXG4gICAgICAgICAgXVxuICAgICAgICB9LCBtaW5pID09PSB0cnVlXG4gICAgICAgICAgPyBzbG90cy5taW5pKClcbiAgICAgICAgICA6IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICAgIClcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGhEaXIoXG4gICAgICAgICAgJ2FzaWRlJyxcbiAgICAgICAgICB7IHJlZjogJ2NvbnRlbnQnLCBjbGFzczogY2xhc3Nlcy52YWx1ZSwgc3R5bGU6IHN0eWxlLnZhbHVlIH0sXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAnY29udGVudGNsb3NlJyxcbiAgICAgICAgICBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICgpID0+IGNvbnRlbnRDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS1kcmF3ZXItY29udGFpbmVyJyB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgcHJvdmlkZSwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHBhZ2VDb250YWluZXJLZXksIGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlQ29udGFpbmVyJyxcblxuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlQ29udGFpbmVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBwcm92aWRlKHBhZ2VDb250YWluZXJLZXksIHRydWUpXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNzcyA9IHt9XG5cbiAgICAgIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3MucGFkZGluZ1RvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICgkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdMZWZ0JyA6ICdSaWdodCcgfWAgXSA9IGAkeyAkbGF5b3V0LnJpZ2h0LnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nQm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbIGBwYWRkaW5nJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnIH1gIF0gPSBgJHsgJGxheW91dC5sZWZ0LnNpemUgfXB4YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogJ3EtcGFnZS1jb250YWluZXInLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb290ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIGhlaWdodEhpbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXZlYWwnLCAnZm9jdXNpbicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRm9vdGVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gcmVmKHBhcnNlSW50KHByb3BzLmhlaWdodEhpbnQsIDEwKSlcbiAgICBjb25zdCByZXZlYWxlZCA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHJlZihcbiAgICAgIGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSB8fCAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gMFxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIClcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0YnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgIDogd2luZG93SGVpZ2h0LnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJldmVhbGVkLnZhbHVlID09PSB0cnVlID8gc2l6ZS52YWx1ZSA6IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uICsgY29udGFpbmVySGVpZ2h0LnZhbHVlICsgc2l6ZS52YWx1ZSAtICRsYXlvdXQuaGVpZ2h0LnZhbHVlXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1mb290ZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy1ib3R0b20nXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1mb290ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWZvb3Rlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICAgICA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnICsgKGZpeGVkLnZhbHVlICE9PSB0cnVlID8gJyBoaWRkZW4nIDogJycpXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgdmlldyA9ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b20sXG4gICAgICAgIGNzcyA9IHt9XG5cbiAgICAgIGlmICh2aWV3WyAwIF0gPT09ICdsJyAmJiAkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAodmlld1sgMiBdID09PSAncicgJiYgJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKCdmb290ZXInLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIHVwZGF0ZUxvY2FsKHNpemUsIGhlaWdodClcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXZlYWxlZCAoKSB7XG4gICAgICBpZiAocHJvcHMucmV2ZWFsICE9PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBwb3NpdGlvbiwgaW5mbGVjdGlvblBvaW50IH0gPSAkbGF5b3V0LnNjcm9sbC52YWx1ZVxuXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgKFxuICAgICAgICBkaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgcG9zaXRpb24gLSBpbmZsZWN0aW9uUG9pbnQgPCAxMDBcbiAgICAgICAgfHwgJGxheW91dC5oZWlnaHQudmFsdWUgLSBjb250YWluZXJIZWlnaHQudmFsdWUgLSBwb3NpdGlvbiAtIHNpemUudmFsdWUgPCAzMDBcbiAgICAgICkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChldnQpIHtcbiAgICAgIGlmIChyZXZlYWxPbkZvY3VzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdmb2N1c2luJywgZXZ0KVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZWFsLCB2YWwgPT4ge1xuICAgICAgdmFsID09PSBmYWxzZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCwgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2gocmV2ZWFsZWQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgZW1pdCgncmV2ZWFsJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaChbIHNpemUsICRsYXlvdXQuc2Nyb2xsLCAkbGF5b3V0LmhlaWdodCBdLCB1cGRhdGVSZXZlYWxlZClcblxuICAgIHdhdGNoKCgpID0+ICRxLnNjcmVlbi5oZWlnaHQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlICYmIHVwZGF0ZUxvY2FsKHdpbmRvd0hlaWdodCwgdmFsKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHt9XG5cbiAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSBpbnN0YW5jZVxuICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgdXBkYXRlTGF5b3V0KCdzaXplJywgc2l6ZS52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSB2b2lkIDBcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgZmFsc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplXG4gICAgICAgIH0pXG4gICAgICBdKVxuXG4gICAgICBwcm9wcy5lbGV2YXRlZCA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZm9vdGVyJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICBvbkZvY3VzaW5cbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgcmVhY3RpdmUsIGNvbXB1dGVkLCB3YXRjaCwgcHJvdmlkZSwgb25Vbm1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbGJhcldpZHRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxheW91dCcsXG5cbiAgcHJvcHM6IHtcbiAgICBjb250YWluZXI6IEJvb2xlYW4sXG4gICAgdmlldzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hoaCBscHIgZmZmJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiAvXihofGwpaChofHIpIGxwciAoZnxsKWYoZnxyKSQvLnRlc3Qodi50b0xvd2VyQ2FzZSgpKVxuICAgIH0sXG5cbiAgICBvblNjcm9sbDogRnVuY3Rpb24sXG4gICAgb25TY3JvbGxIZWlnaHQ6IEZ1bmN0aW9uLFxuICAgIG9uUmVzaXplOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgLy8gcGFnZSByZWxhdGVkXG4gICAgY29uc3QgaGVpZ2h0ID0gcmVmKCRxLnNjcmVlbi5oZWlnaHQpXG4gICAgY29uc3Qgd2lkdGggPSByZWYocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gMCA6ICRxLnNjcmVlbi53aWR0aClcbiAgICBjb25zdCBzY3JvbGwgPSByZWYoeyBwb3NpdGlvbjogMCwgZGlyZWN0aW9uOiAnZG93bicsIGluZmxlY3Rpb25Qb2ludDogMCB9KVxuXG4gICAgLy8gY29udGFpbmVyIG9ubHkgcHJvcFxuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHJlZigwKVxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gcmVmKGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBnZXRTY3JvbGxiYXJXaWR0aCgpKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1sYXlvdXQgcS1sYXlvdXQtLSdcbiAgICAgICsgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSA/ICdjb250YWluZXJpemVkJyA6ICdzdGFuZGFyZCcpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jb250YWluZXIgPT09IGZhbHNlXG4gICAgICAgID8geyBtaW5IZWlnaHQ6ICRxLnNjcmVlbi5oZWlnaHQgKyAncHgnIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIC8vIHVzZWQgYnkgY29udGFpbmVyIG9ubHlcbiAgICBjb25zdCB0YXJnZXRTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSAwXG4gICAgICAgID8geyBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgJHsgc2Nyb2xsYmFyV2lkdGgudmFsdWUgfXB4YCB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCB0YXJnZXRDaGlsZFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdOiAwLFxuICAgICAgICAgICAgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcgXTogYC0keyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIG9uUGFnZVNjcm9sbCAoZGF0YSkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSB8fCBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24udG9wLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGF0YS5kaXJlY3Rpb24sXG4gICAgICAgICAgZGlyZWN0aW9uQ2hhbmdlZDogZGF0YS5kaXJlY3Rpb25DaGFuZ2VkLFxuICAgICAgICAgIGluZmxlY3Rpb25Qb2ludDogZGF0YS5pbmZsZWN0aW9uUG9pbnQudG9wLFxuICAgICAgICAgIGRlbHRhOiBkYXRhLmRlbHRhLnRvcFxuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsLnZhbHVlID0gaW5mb1xuICAgICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbCcsIGluZm8pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWdlUmVzaXplIChkYXRhKSB7XG4gICAgICBjb25zdCB7IGhlaWdodDogbmV3SGVpZ2h0LCB3aWR0aDogbmV3V2lkdGggfSA9IGRhdGFcbiAgICAgIGxldCByZXNpemVkID0gZmFsc2VcblxuICAgICAgaWYgKGhlaWdodC52YWx1ZSAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgIHJlc2l6ZWQgPSB0cnVlXG4gICAgICAgIGhlaWdodC52YWx1ZSA9IG5ld0hlaWdodFxuICAgICAgICBwcm9wcy5vblNjcm9sbEhlaWdodCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbEhlaWdodCcsIG5ld0hlaWdodClcbiAgICAgICAgdXBkYXRlU2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgfVxuICAgICAgaWYgKHdpZHRoLnZhbHVlICE9PSBuZXdXaWR0aCkge1xuICAgICAgICByZXNpemVkID0gdHJ1ZVxuICAgICAgICB3aWR0aC52YWx1ZSA9IG5ld1dpZHRoXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNpemVkID09PSB0cnVlICYmIHByb3BzLm9uUmVzaXplICE9PSB2b2lkIDApIHtcbiAgICAgICAgZW1pdCgncmVzaXplJywgZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNvbnRhaW5lclJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgaWYgKGNvbnRhaW5lckhlaWdodC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodC52YWx1ZSA9IGhlaWdodFxuICAgICAgICB1cGRhdGVTY3JvbGxiYXJXaWR0aCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsYmFyV2lkdGggKCkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGhlaWdodC52YWx1ZSA+IGNvbnRhaW5lckhlaWdodC52YWx1ZVxuICAgICAgICAgID8gZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgICAgIDogMFxuXG4gICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSA9IHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGltZXJcblxuICAgIGNvbnN0ICRsYXlvdXQgPSB7XG4gICAgICBpbnN0YW5jZXM6IHt9LFxuICAgICAgdmlldzogY29tcHV0ZWQoKCkgPT4gcHJvcHMudmlldyksXG4gICAgICBpc0NvbnRhaW5lcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuY29udGFpbmVyKSxcblxuICAgICAgcm9vdFJlZixcblxuICAgICAgaGVpZ2h0LFxuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgc2Nyb2xsYmFyV2lkdGgsXG4gICAgICB0b3RhbFdpZHRoOiBjb21wdXRlZCgoKSA9PiB3aWR0aC52YWx1ZSArIHNjcm9sbGJhcldpZHRoLnZhbHVlKSxcblxuICAgICAgcm93czogY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gcHJvcHMudmlldy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IHJvd3NbIDAgXS5zcGxpdCgnJyksXG4gICAgICAgICAgbWlkZGxlOiByb3dzWyAxIF0uc3BsaXQoJycpLFxuICAgICAgICAgIGJvdHRvbTogcm93c1sgMiBdLnNwbGl0KCcnKVxuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgaGVhZGVyOiByZWFjdGl2ZSh7IHNpemU6IDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuICAgICAgcmlnaHQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGZvb3RlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGxlZnQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcblxuICAgICAgc2Nyb2xsLFxuXG4gICAgICBhbmltYXRlICgpIHtcbiAgICAgICAgaWYgKHRpbWVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgICB0aW1lciA9IHZvaWQgMFxuICAgICAgICB9LCAxNTUpXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGUgKHBhcnQsIHByb3AsIHZhbCkge1xuICAgICAgICAkbGF5b3V0WyBwYXJ0IF1bIHByb3AgXSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3ZpZGUobGF5b3V0S2V5LCAkbGF5b3V0KVxuXG4gICAgLy8gcHJldmVudCBzY3JvbGxiYXIgZmxpY2tlciB3aGlsZSByZXNpemluZyB3aW5kb3cgaGVpZ2h0XG4gICAgLy8gaWYgbm8gcGFnZSBzY3JvbGxiYXIgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSAmJiBnZXRTY3JvbGxiYXJXaWR0aCgpID4gMCkge1xuICAgICAgbGV0IHRpbWVyID0gbnVsbFxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3RvcmVTY3JvbGxiYXIgKCkge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1zY3JvbGxiYXInKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoaWRlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIHNjcm9sbGJhciB0aGVuIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuXG4gICAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA+ICRxLnNjcmVlbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQocmVzdG9yZVNjcm9sbGJhciwgMzAwKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxFdmVudCAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCAmJiBhY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHJlc3RvcmVTY3JvbGxiYXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93WyBgJHsgYWN0aW9uIH1FdmVudExpc3RlbmVyYCBdKCdyZXNpemUnLCBoaWRlU2Nyb2xsYmFyKVxuICAgICAgfVxuXG4gICAgICB3YXRjaChcbiAgICAgICAgKCkgPT4gKHByb3BzLmNvbnRhaW5lciAhPT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZScpLFxuICAgICAgICB1cGRhdGVTY3JvbGxFdmVudFxuICAgICAgKVxuXG4gICAgICBwcm9wcy5jb250YWluZXIgIT09IHRydWUgJiYgdXBkYXRlU2Nyb2xsRXZlbnQoJ2FkZCcpXG5cbiAgICAgIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnQoJ3JlbW92ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7IG9uU2Nyb2xsOiBvblBhZ2VTY3JvbGwgfSksXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvblBhZ2VSZXNpemUgfSlcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGxheW91dCA9IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcmVmOiBwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyB2b2lkIDAgOiByb290UmVmLFxuICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgIH0sIGNvbnRlbnQpXG5cbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0LWNvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW4nLFxuICAgICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHsgb25SZXNpemU6IG9uQ29udGFpbmVyUmVzaXplIH0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgICBzdHlsZTogdGFyZ2V0U3R5bGUudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHRhcmdldENoaWxkU3R5bGUudmFsdWVcbiAgICAgICAgICAgIH0sIFsgbGF5b3V0IF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxheW91dFxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZCBjbGFzcz1cIm15LWNhcmQgYmctYmxhY2tcIiBmbGF0IHYtaWY9XCJjdXJyZW50bHlQbGF5aW5nICE9PSBudWxsXCI+XG4gICAgPHEtY2FyZC1zZWN0aW9uIGhvcml6b250YWw+XG4gICAgICA8cS1pbWdcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEyNXB4OyBtYXgtd2lkdGg6IDEyNXB4XCJcbiAgICAgICAgOnNyYz1cImN1cnJlbnRseVBsYXlpbmcudHJhY2suYWxidW0udGh1bWJuYWlsLnNtYWxsLnVybFwiXG4gICAgICAvPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB5LW5vbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDYgbGlua1wiIEBjbGljaz1cImdvdG9UcmFja1wiPnt7IGN1cnJlbnRseVBsYXlpbmcudHJhY2submFtZS5fZGVmYXVsdCB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTIgbGlua1wiIEBjbGljaz1cImdvdG9BbGJ1bVwiPnt7IGN1cnJlbnRseVBsYXlpbmcudHJhY2suYWxidW0uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWdyZXkgcS1weS1zbSBsaW5rXCIgQGNsaWNrPVwiZ290b0FydGlzdFwiPnt7IGN1cnJlbnRseVBsYXlpbmcudHJhY2suYWxidW0uYWxidW1BcnRpc3RbMF0ubmFtZSB9fTwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLWNhcmQtYWN0aW9ucyB2ZXJ0aWNhbCBjbGFzcz1cImp1c3RpZnktYXJvdW5kIHEtcHgtbWRcIj5cbiAgICAgICAgPHEtYnRuIGZsYXQgcm91bmQgc2l6ZT1cIm1kXCIgY29sb3I9XCJyZWRcIiA6aWNvbj1cIm91dGxpbmVkRmF2b3JpdGVCb3JkZXJcIiAvPlxuICAgICAgICA8cS1idG4gZmxhdCByb3VuZCBzaXplPVwibWRcIiBjb2xvcj1cImFjY2VudFwiIDppY29uPVwib3V0bGluZWRQbGF5bGlzdEFkZENpcmNsZVwiPlxuICAgICAgICAgIDxBZGRUb1BsYXlsaXN0U2VsZWN0b3IgOnRyYWNrLWlkPVwiY3VycmVudGx5UGxheWluZy50cmFjay5pZFwiPjwvQWRkVG9QbGF5bGlzdFNlbGVjdG9yPlxuICAgICAgICA8L3EtYnRuPlxuICAgICAgPC9xLWNhcmQtYWN0aW9ucz5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICA8L3EtY2FyZD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlsaXN0QWRkQ2lyY2xlLFxuICBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCB7UXVldWVDb250cm9sbGVyLCBRdWV1ZWRUcmFja30gZnJvbSAnc3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlcic7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcbmltcG9ydCBBZGRUb1BsYXlsaXN0U2VsZWN0b3IgZnJvbSBcImNvbXBvbmVudHMvQWRkVG9QbGF5bGlzdFNlbGVjdG9yLnZ1ZVwiO1xuaW1wb3J0IHtjb21wdXRlZCwgcmVmLCB3YXRjaH0gZnJvbSBcInZ1ZVwiO1xuaW1wb3J0IHtxdWV1ZUV2ZW50c30gZnJvbSBcImJvb3QvZXZlbnRCdXNcIjtcblxuY29uc3Qgc29uZ1F1ZXVlID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbmNvbnN0IGN1cnJlbnRseVBsYXlpbmcgPSByZWY8UXVldWVkVHJhY2sgfCBudWxsPihudWxsKTtcblxucXVldWVFdmVudHMuY3VycmVudFBsYXlpbmdDaGFuZ2VkLm9uKCh7cHJldiwgY3Vycn0pID0+IHtcbiAgY3VycmVudGx5UGxheWluZy52YWx1ZSA9IGN1cnJcbn0pXG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBnb3RvQXJ0aXN0ID0gKCkgPT4ge1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhcnRpc3QnLCBwYXJhbXM6IHsgYXJ0aXN0OiBzb25nUXVldWUuY3VycmVudGx5UGxheWluZz8uVHJhY2suYWxidW0/LmFsYnVtQXJ0aXN0IVswXSEubmFtZSB9IH0pXG59XG5cbmNvbnN0IGdvdG9BbGJ1bSA9ICgpID0+IHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAnYWxidW0nLCBwYXJhbXM6IHsgYWxidW1JZDogc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmc/LlRyYWNrLmFsYnVtPy5pZCB9IH0pXG59XG5cbmNvbnN0IGdvdG9UcmFjayA9ICgpID0+IHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAndHJhY2snLCBwYXJhbXM6IHsgdHJhY2tJZDogc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmc/LlRyYWNrLmlkIH0gfSlcbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybVByb3BzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscy9pcy5qcydcbmltcG9ydCB7IGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgbWFya2VyUHJlZml4Q2xhc3MgPSAncS1zbGlkZXJfX21hcmtlci1sYWJlbHMnXG5jb25zdCBkZWZhdWx0TWFya2VyQ29udmVydEZuID0gdiA9PiAoeyB2YWx1ZTogdiB9KVxuY29uc3QgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm4gPSAoeyBtYXJrZXIgfSkgPT4gaCgnZGl2Jywge1xuICBrZXk6IG1hcmtlci52YWx1ZSxcbiAgc3R5bGU6IG1hcmtlci5zdHlsZSxcbiAgY2xhc3M6IG1hcmtlci5jbGFzc2VzXG59LCBtYXJrZXIubGFiZWwpXG5cbi8vIFBHRE9XTiwgTEVGVCwgRE9XTiwgUEdVUCwgUklHSFQsIFVQXG5leHBvcnQgY29uc3Qga2V5Q29kZXMgPSBbIDM0LCAzNywgNDAsIDMzLCAzOSwgMzggXVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyUHJvcHMgPSB7XG4gIC4uLnVzZURhcmtQcm9wcyxcbiAgLi4udXNlRm9ybVByb3BzLFxuXG4gIG1pbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG4gIG1heDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxMDBcbiAgfSxcbiAgaW5uZXJNaW46IE51bWJlcixcbiAgaW5uZXJNYXg6IE51bWJlcixcblxuICBzdGVwOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gICAgdmFsaWRhdG9yOiB2ID0+IHYgPj0gMFxuICB9LFxuXG4gIHNuYXA6IEJvb2xlYW4sXG5cbiAgdmVydGljYWw6IEJvb2xlYW4sXG4gIHJldmVyc2U6IEJvb2xlYW4sXG5cbiAgaGlkZVNlbGVjdGlvbjogQm9vbGVhbixcblxuICBjb2xvcjogU3RyaW5nLFxuICBtYXJrZXJMYWJlbHNDbGFzczogU3RyaW5nLFxuXG4gIGxhYmVsOiBCb29sZWFuLFxuICBsYWJlbENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsVGV4dENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsQWx3YXlzOiBCb29sZWFuLFxuICBzd2l0Y2hMYWJlbFNpZGU6IEJvb2xlYW4sXG5cbiAgbWFya2VyczogWyBCb29sZWFuLCBOdW1iZXIgXSxcbiAgbWFya2VyTGFiZWxzOiBbIEJvb2xlYW4sIEFycmF5LCBPYmplY3QsIEZ1bmN0aW9uIF0sXG4gIHN3aXRjaE1hcmtlckxhYmVsc1NpZGU6IEJvb2xlYW4sXG5cbiAgdHJhY2tJbWc6IFN0cmluZyxcbiAgdHJhY2tDb2xvcjogU3RyaW5nLFxuICBpbm5lclRyYWNrSW1nOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tDb2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25Db2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25JbWc6IFN0cmluZyxcblxuICB0aHVtYlNpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzIwcHgnXG4gIH0sXG4gIHRyYWNrU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnNHB4J1xuICB9LFxuXG4gIGRpc2FibGU6IEJvb2xlYW4sXG4gIHJlYWRvbmx5OiBCb29sZWFuLFxuICBkZW5zZTogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gIHRodW1iQ29sb3I6IFN0cmluZyxcbiAgdGh1bWJQYXRoOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdNIDQsIDEwIGEgNiw2IDAgMSwwIDEyLDAgYSA2LDYgMCAxLDAgLTEyLDAnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNsaWRlckVtaXRzID0gWyAncGFuJywgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NoYW5nZScgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLCBmb3JtQXR0cnMgfSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBzbG90cywgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgY29uc3QgYWN0aXZlID0gcmVmKGZhbHNlKVxuICBjb25zdCBwcmV2ZW50Rm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBkcmFnZ2luZyA9IHJlZihmYWxzZSlcblxuICBjb25zdCBheGlzID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJy0tdicgOiAnLS1oJykpXG4gIGNvbnN0IGxhYmVsU2lkZSA9IGNvbXB1dGVkKCgpID0+ICctJyArIChwcm9wcy5zd2l0Y2hMYWJlbFNpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJykpXG5cbiAgY29uc3QgaXNSZXZlcnNlZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgPyBwcm9wcy5yZXZlcnNlID09PSB0cnVlXG4gICAgICA6IHByb3BzLnJldmVyc2UgIT09ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSlcbiAgKSlcblxuICBjb25zdCBpbm5lck1pbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1pbikgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNaW4gPCBwcm9wcy5taW5cbiAgICAgID8gcHJvcHMubWluXG4gICAgICA6IHByb3BzLmlubmVyTWluXG4gICkpXG4gIGNvbnN0IGlubmVyTWF4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWF4KSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1heCA+IHByb3BzLm1heFxuICAgICAgPyBwcm9wcy5tYXhcbiAgICAgIDogcHJvcHMuaW5uZXJNYXhcbiAgKSlcblxuICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlXG4gICAgJiYgaW5uZXJNaW4udmFsdWUgPCBpbm5lck1heC52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGRlY2ltYWxzID0gY29tcHV0ZWQoKCkgPT4gKFN0cmluZyhwcm9wcy5zdGVwKS50cmltKCkuc3BsaXQoJy4nKVsgMSBdIHx8ICcnKS5sZW5ndGgpXG4gIGNvbnN0IHN0ZXAgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuc3RlcCA9PT0gMCA/IDEgOiBwcm9wcy5zdGVwKSlcbiAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50YWJpbmRleCB8fCAwIDogLTEpKVxuXG4gIGNvbnN0IHRyYWNrTGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubWF4IC0gcHJvcHMubWluKVxuICBjb25zdCBpbm5lckJhckxlbiA9IGNvbXB1dGVkKCgpID0+IGlubmVyTWF4LnZhbHVlIC0gaW5uZXJNaW4udmFsdWUpXG5cbiAgY29uc3QgaW5uZXJNaW5SYXRpbyA9IGNvbXB1dGVkKCgpID0+IGNvbnZlcnRNb2RlbFRvUmF0aW8oaW5uZXJNaW4udmFsdWUpKVxuICBjb25zdCBpbm5lck1heFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1heC52YWx1ZSkpXG5cbiAgY29uc3QgcG9zaXRpb25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IChpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ2JvdHRvbScgOiAndG9wJylcbiAgICAgIDogKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnKVxuICApKVxuXG4gIGNvbnN0IHNpemVQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2hlaWdodCcgOiAnd2lkdGgnKSlcbiAgY29uc3QgdGhpY2tuZXNzUHJvcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd3aWR0aCcgOiAnaGVpZ2h0JykpXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJykpXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICByb2xlOiAnc2xpZGVyJyxcbiAgICAgICdhcmlhLXZhbHVlbWluJzogaW5uZXJNaW4udmFsdWUsXG4gICAgICAnYXJpYS12YWx1ZW1heCc6IGlubmVyTWF4LnZhbHVlLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbi52YWx1ZSxcbiAgICAgICdkYXRhLXN0ZXAnOiBwcm9wcy5zdGVwXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtcmVhZG9ubHknIF0gPSAndHJ1ZSdcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgYHEtc2xpZGVyIHEtc2xpZGVyJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyLS0keyBhY3RpdmUudmFsdWUgPT09IHRydWUgPyAnJyA6ICdpbicgfWFjdGl2ZSBpbmxpbmUgbm8td3JhcCBgXG4gICAgKyAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAncm93JyA6ICdjb2x1bW4nKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcgcS1zbGlkZXItLWVuYWJsZWQnICsgKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZWRpdGFibGUnIDogJycpKVxuICAgICsgKGZvY3VzLnZhbHVlID09PSAnYm90aCcgPyAnIHEtc2xpZGVyLS1mb2N1cycgOiAnJylcbiAgICArIChwcm9wcy5sYWJlbCB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWxhYmVsJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwtYWx3YXlzJyA6ICcnKVxuICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRhcmsnIDogJycpXG4gICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1kZW5zZSBxLXNsaWRlci0tZGVuc2UnICsgYXhpcy52YWx1ZSA6ICcnKVxuICApXG5cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb25DbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNscyA9ICdxLXNsaWRlcl9fJyArIG5hbWVcbiAgICByZXR1cm4gYCR7IGNscyB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9JHsgbGFiZWxTaWRlLnZhbHVlIH1gXG4gIH1cbiAgZnVuY3Rpb24gZ2V0QXhpc0NsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH1gXG4gIH1cblxuICBjb25zdCBzZWxlY3Rpb25CYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjb2xvciA9IHByb3BzLnNlbGVjdGlvbkNvbG9yIHx8IHByb3BzLmNvbG9yXG4gICAgcmV0dXJuICdxLXNsaWRlcl9fc2VsZWN0aW9uIGFic29sdXRlJ1xuICAgICAgKyAoY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnKVxuICB9KVxuICBjb25zdCBtYXJrZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldEF4aXNDbGFzcygnbWFya2VycycpICsgJyBhYnNvbHV0ZSBvdmVyZmxvdy1oaWRkZW4nKVxuICBjb25zdCB0cmFja0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCd0cmFjay1jb250YWluZXInKSlcbiAgY29uc3QgcGluQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCdwaW4nKSlcbiAgY29uc3QgbGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ2xhYmVsJykpXG4gIGNvbnN0IHRleHRDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3RleHQtY29udGFpbmVyJykpXG4gIGNvbnN0IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBnZXRQb3NpdGlvbkNsYXNzKCdtYXJrZXItbGFiZWxzLWNvbnRhaW5lcicpXG4gICAgKyAocHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgfWAgOiAnJylcbiAgKVxuXG4gIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9fdHJhY2sgcmVsYXRpdmUtcG9zaXRpb24gbm8tb3V0bGluZSdcbiAgICArIChwcm9wcy50cmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLnRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHsgWyB0aGlja25lc3NQcm9wLnZhbHVlIF06IHByb3BzLnRyYWNrU2l6ZSB9XG4gICAgaWYgKHByb3BzLnRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnRyYWNrSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBpbm5lckJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS1zbGlkZXJfX2lubmVyIGFic29sdXRlJ1xuICAgICsgKHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5pbm5lclRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCBpbm5lckJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBpbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgIFsgc2l6ZVByb3AudmFsdWUgXTogYCR7IDEwMCAqIChpbm5lck1heFJhdGlvLnZhbHVlIC0gaW5uZXJNaW5SYXRpby52YWx1ZSkgfSVgXG4gICAgfVxuICAgIGlmIChwcm9wcy5pbm5lclRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLmlubmVyVHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRSYXRpb1RvTW9kZWwgKHJhdGlvKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCwgc3RlcCB9ID0gcHJvcHNcbiAgICBsZXQgbW9kZWwgPSBtaW4gKyByYXRpbyAqIChtYXggLSBtaW4pXG5cbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgIGNvbnN0IG1vZHVsbyA9IChtb2RlbCAtIG1pbikgJSBzdGVwXG4gICAgICBtb2RlbCArPSAoTWF0aC5hYnMobW9kdWxvKSA+PSBzdGVwIC8gMiA/IChtb2R1bG8gPCAwID8gLTEgOiAxKSAqIHN0ZXAgOiAwKSAtIG1vZHVsb1xuICAgIH1cblxuICAgIGlmIChkZWNpbWFscy52YWx1ZSA+IDApIHtcbiAgICAgIG1vZGVsID0gcGFyc2VGbG9hdChtb2RlbC50b0ZpeGVkKGRlY2ltYWxzLnZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYmV0d2Vlbihtb2RlbCwgaW5uZXJNaW4udmFsdWUsIGlubmVyTWF4LnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydE1vZGVsVG9SYXRpbyAobW9kZWwpIHtcbiAgICByZXR1cm4gdHJhY2tMZW4udmFsdWUgPT09IDBcbiAgICAgID8gMFxuICAgICAgOiAobW9kZWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERyYWdnaW5nUmF0aW8gKGV2dCwgZHJhZ2dpbmcpIHtcbiAgICBjb25zdFxuICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgIHZhbCA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gYmV0d2VlbigocG9zLnRvcCAtIGRyYWdnaW5nLnRvcCkgLyBkcmFnZ2luZy5oZWlnaHQsIDAsIDEpXG4gICAgICAgIDogYmV0d2VlbigocG9zLmxlZnQgLSBkcmFnZ2luZy5sZWZ0KSAvIGRyYWdnaW5nLndpZHRoLCAwLCAxKVxuXG4gICAgcmV0dXJuIGJldHdlZW4oXG4gICAgICBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gMS4wIC0gdmFsIDogdmFsLFxuICAgICAgaW5uZXJNaW5SYXRpby52YWx1ZSxcbiAgICAgIGlubmVyTWF4UmF0aW8udmFsdWVcbiAgICApXG4gIH1cblxuICBjb25zdCBtYXJrZXJTdGVwID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTnVtYmVyKHByb3BzLm1hcmtlcnMpID09PSB0cnVlID8gcHJvcHMubWFya2VycyA6IHN0ZXAudmFsdWUpXG4gIClcblxuICBjb25zdCBtYXJrZXJUaWNrcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSBbXVxuICAgIGNvbnN0IHN0ZXAgPSBtYXJrZXJTdGVwLnZhbHVlXG4gICAgY29uc3QgbWF4ID0gcHJvcHMubWF4XG5cbiAgICBsZXQgdmFsdWUgPSBwcm9wcy5taW5cbiAgICBkbyB7XG4gICAgICBhY2MucHVzaCh2YWx1ZSlcbiAgICAgIHZhbHVlICs9IHN0ZXBcbiAgICB9IHdoaWxlICh2YWx1ZSA8IG1heClcblxuICAgIGFjYy5wdXNoKG1heClcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyTGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBwcmVmaXggPSBgICR7IG1hcmtlclByZWZpeENsYXNzIH0keyBheGlzLnZhbHVlIH0tYFxuICAgIHJldHVybiBtYXJrZXJQcmVmaXhDbGFzc1xuICAgICAgKyBgJHsgcHJlZml4IH0keyBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICsgYCR7IHByZWZpeCB9JHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfWBcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbHNMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIHJldHVybiBnZXRNYXJrZXJMaXN0KHByb3BzLm1hcmtlckxhYmVscykubWFwKChlbnRyeSwgaW5kZXgpID0+ICh7XG4gICAgICBpbmRleCxcbiAgICAgIHZhbHVlOiBlbnRyeS52YWx1ZSxcbiAgICAgIGxhYmVsOiBlbnRyeS5sYWJlbCB8fCBlbnRyeS52YWx1ZSxcbiAgICAgIGNsYXNzZXM6IG1hcmtlckxhYmVsQ2xhc3MudmFsdWVcbiAgICAgICAgKyAoZW50cnkuY2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgZW50cnkuY2xhc3NlcyA6ICcnKSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC4uLmdldE1hcmtlckxhYmVsU3R5bGUoZW50cnkudmFsdWUpLFxuICAgICAgICAuLi4oZW50cnkuc3R5bGUgfHwge30pXG4gICAgICB9XG4gICAgfSkpXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIG1hcmtlckxpc3Q6IG1hcmtlckxhYmVsc0xpc3QudmFsdWUsXG4gICAgbWFya2VyTWFwOiBtYXJrZXJMYWJlbHNNYXAudmFsdWUsXG4gICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZSwgLy8gVE9ETyB0cyBkZWZpbml0aW9uXG4gICAgZ2V0U3R5bGU6IGdldE1hcmtlckxhYmVsU3R5bGVcbiAgfSkpXG5cbiAgY29uc3QgbWFya2VyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKGlubmVyQmFyTGVuLnZhbHVlICE9PSAwKSB7XG4gICAgICBjb25zdCBzaXplID0gMTAwICogbWFya2VyU3RlcC52YWx1ZSAvIGlubmVyQmFyTGVuLnZhbHVlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlubmVyQmFyU3R5bGUudmFsdWUsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gYDJweCAkeyBzaXplIH0lYFxuICAgICAgICAgIDogYCR7IHNpemUgfSUgMnB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGlzdCAoZGVmKSB7XG4gICAgaWYgKGRlZiA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgaWYgKGRlZiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG1hcmtlclRpY2tzLnZhbHVlLm1hcChkZWZhdWx0TWFya2VyQ29udmVydEZuKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRlZih2YWx1ZSlcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJGbiA9ICh7IHZhbHVlIH0pID0+IHZhbHVlID49IHByb3BzLm1pbiAmJiB2YWx1ZSA8PSBwcm9wcy5tYXhcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRlZikgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkZWZcbiAgICAgICAgLm1hcChpdGVtID0+IChpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IGl0ZW0gOiB7IHZhbHVlOiBpdGVtIH0pKVxuICAgICAgICAuZmlsdGVyKGZpbHRlckZuKVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkZWYpLm1hcChrZXkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGRlZlsga2V5IF1cbiAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGtleSlcbiAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IHsgLi4uaXRlbSwgdmFsdWUgfSA6IHsgdmFsdWUsIGxhYmVsOiBpdGVtIH1cbiAgICB9KS5maWx0ZXIoZmlsdGVyRm4pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbFN0eWxlICh2YWwpIHtcbiAgICByZXR1cm4geyBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHZhbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZSB9JWAgfVxuICB9XG5cbiAgY29uc3QgbWFya2VyTGFiZWxzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGNvbnN0IGFjYyA9IHt9XG4gICAgbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGFjY1sgZW50cnkudmFsdWUgXSA9IGVudHJ5XG4gICAgfSlcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGFiZWxzQ29udGVudCAoKSB7XG4gICAgaWYgKHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBzbG90c1sgJ21hcmtlci1sYWJlbC1ncm91cCcgXShtYXJrZXJTY29wZS52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBmbiA9IHNsb3RzWyAnbWFya2VyLWxhYmVsJyBdIHx8IGRlZmF1bHRNYXJrZXJMYWJlbFJlbmRlckZuXG4gICAgcmV0dXJuIG1hcmtlckxhYmVsc0xpc3QudmFsdWUubWFwKG1hcmtlciA9PiBmbih7XG4gICAgICBtYXJrZXIsXG4gICAgICAuLi5tYXJrZXJTY29wZS52YWx1ZVxuICAgIH0pKVxuICB9XG5cbiAgY29uc3QgcGFuRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIC8vIGlmIGVkaXRhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgcmV0dXJuIFsgW1xuICAgICAgVG91Y2hQYW4sXG4gICAgICBvblBhbixcbiAgICAgIHZvaWQgMCxcbiAgICAgIHtcbiAgICAgICAgWyBvcmllbnRhdGlvbi52YWx1ZSBdOiB0cnVlLFxuICAgICAgICBwcmV2ZW50OiB0cnVlLFxuICAgICAgICBzdG9wOiB0cnVlLFxuICAgICAgICBtb3VzZTogdHJ1ZSxcbiAgICAgICAgbW91c2VBbGxEaXI6IHRydWVcbiAgICAgIH1cbiAgICBdIF1cbiAgfSlcblxuICBmdW5jdGlvbiBvblBhbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGRyYWdnaW5nLnZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgICAvLyBvbmx5IGlmIHRvdWNoLCBiZWNhdXNlIHdlIGFsc28gaGF2ZSBtb3VzZWRvd24vdXA6XG4gICAgICAgIGV2ZW50LnRvdWNoID09PSB0cnVlICYmIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgICAgIGRyYWdnaW5nLnZhbHVlID0gdm9pZCAwXG4gICAgICAgIGVtaXQoJ3BhbicsICdlbmQnKVxuICAgICAgfVxuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2VcbiAgICAgIGZvY3VzLnZhbHVlID0gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgZHJhZ2dpbmcudmFsdWUgPSBnZXREcmFnZ2luZyhldmVudC5ldnQpXG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG4gICAgICBlbWl0KCdwYW4nLCAnc3RhcnQnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXIgKCkge1xuICAgIGZvY3VzLnZhbHVlID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQWN0aXZhdGUgKGV2dCkge1xuICAgIHVwZGF0ZVBvc2l0aW9uKGV2dCwgZ2V0RHJhZ2dpbmcoZXZ0KSlcbiAgICB1cGRhdGVWYWx1ZSgpXG5cbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSB0cnVlXG4gICAgYWN0aXZlLnZhbHVlID0gdHJ1ZVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRGVhY3RpdmF0ZSAoKSB7XG4gICAgcHJldmVudEZvY3VzLnZhbHVlID0gZmFsc2VcbiAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuXG4gICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICBvbkJsdXIoKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9iaWxlQ2xpY2sgKGV2dCkge1xuICAgIHVwZGF0ZVBvc2l0aW9uKGV2dCwgZ2V0RHJhZ2dpbmcoZXZ0KSlcbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25LZXl1cCAoZXZ0KSB7XG4gICAgaWYgKGtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSkge1xuICAgICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUZXh0Q29udGFpbmVyU3R5bGUgKHJhdGlvKSB7XG4gICAgaWYgKHByb3BzLnZlcnRpY2FsID09PSB0cnVlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGNvbnN0IHAgPSAkcS5sYW5nLnJ0bCAhPT0gcHJvcHMucmV2ZXJzZSA/IDEgLSByYXRpbyA6IHJhdGlvXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoY2FsYygkeyAyICogcCAtIDEgfSAqICR7IHByb3BzLnRodW1iU2l6ZSB9IC8gMiArICR7IDUwIC0gMTAwICogcCB9JSkpYFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRodW1iUmVuZGVyRm4gKHRodW1iKSB7XG4gICAgY29uc3QgZm9jdXNDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9PT0gZmFsc2UgJiYgKGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlIHx8IGZvY3VzLnZhbHVlID09PSAnYm90aCcpXG4gICAgICAgID8gJyBxLXNsaWRlci0tZm9jdXMnXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1zbGlkZXJfX3RodW1iIHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfSBxLXNsaWRlcl9fdGh1bWIkeyBheGlzLnZhbHVlIH0tJHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfSBhYnNvbHV0ZSBub24tc2VsZWN0YWJsZWBcbiAgICAgICsgZm9jdXNDbGFzcy52YWx1ZVxuICAgICAgKyAodGh1bWIudGh1bWJDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLnRodW1iQ29sb3IudmFsdWUgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB3aWR0aDogcHJvcHMudGh1bWJTaXplLFxuICAgICAgaGVpZ2h0OiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogdGh1bWIucmF0aW8udmFsdWUgfSVgLFxuICAgICAgekluZGV4OiBmb2N1cy52YWx1ZSA9PT0gdGh1bWIuZm9jdXNWYWx1ZSA/IDIgOiB2b2lkIDBcbiAgICB9KSlcblxuICAgIGNvbnN0IHBpbkNvbG9yID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdGh1bWIubGFiZWxDb2xvci52YWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsQ29sb3IudmFsdWUgfWBcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiBnZXRUZXh0Q29udGFpbmVyU3R5bGUodGh1bWIucmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3QgdGV4dENsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2xpZGVyX190ZXh0J1xuICAgICAgKyAodGh1bWIubGFiZWxUZXh0Q29sb3IudmFsdWUgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgICkpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgdGh1bWJDb250ZW50ID0gW1xuICAgICAgICBoKCdzdmcnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXNsaWRlcl9fdGh1bWItc2hhcGUgYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdwYXRoJywgeyBkOiBwcm9wcy50aHVtYlBhdGggfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3Etc2xpZGVyX19mb2N1cy1yaW5nIGZpdCcgfSlcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmxhYmVsID09PSB0cnVlIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlKSB7XG4gICAgICAgIHRodW1iQ29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiBwaW5DbGFzcy52YWx1ZSArICcgYWJzb2x1dGUgZml0IG5vLXBvaW50ZXItZXZlbnRzJyArIHBpbkNvbG9yLnZhbHVlXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogbGFiZWxDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgbWluV2lkdGg6IHByb3BzLnRodW1iU2l6ZSB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogdGV4dENvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0ZXh0Q29udGFpbmVyU3R5bGUudmFsdWVcbiAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiB0ZXh0Q2xhc3MudmFsdWUgfSwgdGh1bWIubGFiZWwudmFsdWUpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcblxuICAgICAgICBpZiAocHJvcHMubmFtZSAhPT0gdm9pZCAwICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgICBpbmplY3RGb3JtSW5wdXQodGh1bWJDb250ZW50LCAncHVzaCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgLi4udGh1bWIuZ2V0Tm9kZURhdGEoKVxuICAgICAgfSwgdGh1bWJDb250ZW50KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRlbnQgKHNlbGVjdGlvbkJhclN0eWxlLCB0cmFja0NvbnRhaW5lclRhYmluZGV4LCB0cmFja0NvbnRhaW5lckV2ZW50cywgaW5qZWN0VGh1bWIpIHtcbiAgICBjb25zdCB0cmFja0NvbnRlbnQgPSBbXVxuXG4gICAgcHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdpbm5lcicsXG4gICAgICAgIGNsYXNzOiBpbm5lckJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogaW5uZXJCYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5zZWxlY3Rpb25Db2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnc2VsZWN0aW9uJyxcbiAgICAgICAgY2xhc3M6IHNlbGVjdGlvbkJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2VsZWN0aW9uQmFyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMubWFya2VycyAhPT0gZmFsc2UgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ21hcmtlcicsXG4gICAgICAgIGNsYXNzOiBtYXJrZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IG1hcmtlclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIGluamVjdFRodW1iKHRyYWNrQ29udGVudClcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICBoRGlyKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ3RyYWNrQycsXG4gICAgICAgICAgY2xhc3M6IHRyYWNrQ29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgdGFiaW5kZXg6IHRyYWNrQ29udGFpbmVyVGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgLi4udHJhY2tDb250YWluZXJFdmVudHMudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0cmFja0NsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGUudmFsdWVcbiAgICAgICAgICB9LCB0cmFja0NvbnRlbnQpXG4gICAgICAgIF0sXG4gICAgICAgICdzbGlkZScsXG4gICAgICAgIGVkaXRhYmxlLnZhbHVlLCAoKSA9PiBwYW5EaXJlY3RpdmUudmFsdWVcbiAgICAgIClcbiAgICBdXG5cbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzICE9PSBmYWxzZSkge1xuICAgICAgY29uc3QgYWN0aW9uID0gcHJvcHMuc3dpdGNoTWFya2VyTGFiZWxzU2lkZSA9PT0gdHJ1ZVxuICAgICAgICA/ICd1bnNoaWZ0J1xuICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICBjb250ZW50WyBhY3Rpb24gXShcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ21hcmtlckwnLFxuICAgICAgICAgIGNsYXNzOiBtYXJrZXJMYWJlbHNDb250YWluZXJDbGFzcy52YWx1ZVxuICAgICAgICB9LCBnZXRNYXJrZXJMYWJlbHNDb250ZW50KCkpXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbiAgfVxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiB7XG4gICAgICBhY3RpdmUsXG4gICAgICBmb2N1cyxcbiAgICAgIHByZXZlbnRGb2N1cyxcbiAgICAgIGRyYWdnaW5nLFxuXG4gICAgICBlZGl0YWJsZSxcbiAgICAgIGNsYXNzZXMsXG4gICAgICB0YWJpbmRleCxcbiAgICAgIGF0dHJpYnV0ZXMsXG5cbiAgICAgIHN0ZXAsXG4gICAgICBkZWNpbWFscyxcbiAgICAgIHRyYWNrTGVuLFxuICAgICAgaW5uZXJNaW4sXG4gICAgICBpbm5lck1pblJhdGlvLFxuICAgICAgaW5uZXJNYXgsXG4gICAgICBpbm5lck1heFJhdGlvLFxuICAgICAgcG9zaXRpb25Qcm9wLFxuICAgICAgc2l6ZVByb3AsXG4gICAgICBpc1JldmVyc2VkXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uQWN0aXZhdGUsXG4gICAgICBvbk1vYmlsZUNsaWNrLFxuICAgICAgb25CbHVyLFxuICAgICAgb25LZXl1cCxcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBnZXRUaHVtYlJlbmRlckZuLFxuICAgICAgY29udmVydFJhdGlvVG9Nb2RlbCxcbiAgICAgIGNvbnZlcnRNb2RlbFRvUmF0aW8sXG4gICAgICBnZXREcmFnZ2luZ1JhdGlvXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB1c2VGb3JtQXR0cnMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgdXNlU2xpZGVyLCB7XG4gIHVzZVNsaWRlclByb3BzLFxuICB1c2VTbGlkZXJFbWl0cyxcbiAga2V5Q29kZXNcbn0gZnJvbSAnLi91c2Utc2xpZGVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCBnZXROb2RlRGF0YSA9ICgpID0+ICh7fSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTbGlkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlU2xpZGVyUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gdHlwZW9mIHYgPT09ICdudW1iZXInIHx8IHYgPT09IG51bGxcbiAgICB9LFxuXG4gICAgbGFiZWxWYWx1ZTogWyBTdHJpbmcsIE51bWJlciBdXG4gIH0sXG5cbiAgZW1pdHM6IHVzZVNsaWRlckVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCB7IHN0YXRlLCBtZXRob2RzIH0gPSB1c2VTbGlkZXIoe1xuICAgICAgdXBkYXRlVmFsdWUsIHVwZGF0ZVBvc2l0aW9uLCBnZXREcmFnZ2luZyxcbiAgICAgIGZvcm1BdHRyczogdXNlRm9ybUF0dHJzKHByb3BzKVxuICAgIH0pXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY3VyUmF0aW8gPSByZWYoMClcbiAgICBjb25zdCBtb2RlbCA9IHJlZigwKVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplTW9kZWwgKCkge1xuICAgICAgbW9kZWwudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsXG4gICAgICAgID8gc3RhdGUuaW5uZXJNaW4udmFsdWVcbiAgICAgICAgOiBiZXR3ZWVuKHByb3BzLm1vZGVsVmFsdWUsIHN0YXRlLmlubmVyTWluLnZhbHVlLCBzdGF0ZS5pbm5lck1heC52YWx1ZSlcbiAgICB9XG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IGAkeyBwcm9wcy5tb2RlbFZhbHVlIH18JHsgc3RhdGUuaW5uZXJNaW4udmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1heC52YWx1ZSB9YCxcbiAgICAgIG5vcm1hbGl6ZU1vZGVsXG4gICAgKVxuXG4gICAgbm9ybWFsaXplTW9kZWwoKVxuXG4gICAgY29uc3QgbW9kZWxSYXRpbyA9IGNvbXB1dGVkKCgpID0+IG1ldGhvZHMuY29udmVydE1vZGVsVG9SYXRpbyhtb2RlbC52YWx1ZSkpXG4gICAgY29uc3QgcmF0aW8gPSBjb21wdXRlZCgoKSA9PiAoc3RhdGUuYWN0aXZlLnZhbHVlID09PSB0cnVlID8gY3VyUmF0aW8udmFsdWUgOiBtb2RlbFJhdGlvLnZhbHVlKSlcblxuICAgIGNvbnN0IHNlbGVjdGlvbkJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge1xuICAgICAgICBbIHN0YXRlLnBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSB9JWAsXG4gICAgICAgIFsgc3RhdGUuc2l6ZVByb3AudmFsdWUgXTogYCR7IDEwMCAqIChyYXRpby52YWx1ZSAtIHN0YXRlLmlubmVyTWluUmF0aW8udmFsdWUpIH0lYFxuICAgICAgfVxuICAgICAgaWYgKHByb3BzLnNlbGVjdGlvbkltZyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnNlbGVjdGlvbkltZyB9KSAhaW1wb3J0YW50YFxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBnZXRUaHVtYiA9IG1ldGhvZHMuZ2V0VGh1bWJSZW5kZXJGbih7XG4gICAgICBmb2N1c1ZhbHVlOiB0cnVlLFxuICAgICAgZ2V0Tm9kZURhdGEsXG4gICAgICByYXRpbyxcbiAgICAgIGxhYmVsOiBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAgIHByb3BzLmxhYmVsVmFsdWUgIT09IHZvaWQgMFxuICAgICAgICAgID8gcHJvcHMubGFiZWxWYWx1ZVxuICAgICAgICAgIDogbW9kZWwudmFsdWVcbiAgICAgICkpLFxuICAgICAgdGh1bWJDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMudGh1bWJDb2xvciB8fCBwcm9wcy5jb2xvciksXG4gICAgICBsYWJlbENvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYWJlbENvbG9yKSxcbiAgICAgIGxhYmVsVGV4dENvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYWJlbFRleHRDb2xvcilcbiAgICB9KVxuXG4gICAgY29uc3QgdHJhY2tDb250YWluZXJFdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWVcbiAgICAgICAgPyB7IG9uQ2xpY2s6IG1ldGhvZHMub25Nb2JpbGVDbGljayB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgb25Nb3VzZWRvd246IG1ldGhvZHMub25BY3RpdmF0ZSxcbiAgICAgICAgICAgIG9uRm9jdXMsXG4gICAgICAgICAgICBvbkJsdXI6IG1ldGhvZHMub25CbHVyLFxuICAgICAgICAgICAgb25LZXlkb3duLFxuICAgICAgICAgICAgb25LZXl1cDogbWV0aG9kcy5vbktleXVwXG4gICAgICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSAoY2hhbmdlKSB7XG4gICAgICBpZiAobW9kZWwudmFsdWUgIT09IHByb3BzLm1vZGVsVmFsdWUpIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbC52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBlbWl0KCdjaGFuZ2UnLCBtb2RlbC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREcmFnZ2luZyAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uIChldmVudCwgZHJhZ2dpbmcgPSBzdGF0ZS5kcmFnZ2luZy52YWx1ZSkge1xuICAgICAgY29uc3QgcmF0aW8gPSBtZXRob2RzLmdldERyYWdnaW5nUmF0aW8oZXZlbnQsIGRyYWdnaW5nKVxuXG4gICAgICBtb2RlbC52YWx1ZSA9IG1ldGhvZHMuY29udmVydFJhdGlvVG9Nb2RlbChyYXRpbylcblxuICAgICAgY3VyUmF0aW8udmFsdWUgPSBwcm9wcy5zbmFwICE9PSB0cnVlIHx8IHByb3BzLnN0ZXAgPT09IDBcbiAgICAgICAgPyByYXRpb1xuICAgICAgICA6IG1ldGhvZHMuY29udmVydE1vZGVsVG9SYXRpbyhtb2RlbC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzICgpIHtcbiAgICAgIHN0YXRlLmZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5ZG93biAoZXZ0KSB7XG4gICAgICBpZiAoIWtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBjb25zdFxuICAgICAgICBzdGVwVmFsID0gKFsgMzQsIDMzIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gMTAgOiAxKSAqIHN0YXRlLnN0ZXAudmFsdWUsXG4gICAgICAgIG9mZnNldCA9IChcbiAgICAgICAgICAoWyAzNCwgMzcsIDQwIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gLTEgOiAxKVxuICAgICAgICAgICogKHN0YXRlLmlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAtMSA6IDEpXG4gICAgICAgICAgKiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAtMSA6IDEpICogc3RlcFZhbFxuICAgICAgICApXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gYmV0d2VlbihcbiAgICAgICAgcGFyc2VGbG9hdCgobW9kZWwudmFsdWUgKyBvZmZzZXQpLnRvRml4ZWQoc3RhdGUuZGVjaW1hbHMudmFsdWUpKSxcbiAgICAgICAgc3RhdGUuaW5uZXJNaW4udmFsdWUsXG4gICAgICAgIHN0YXRlLmlubmVyTWF4LnZhbHVlXG4gICAgICApXG5cbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IG1ldGhvZHMuZ2V0Q29udGVudChcbiAgICAgICAgc2VsZWN0aW9uQmFyU3R5bGUsXG4gICAgICAgIHN0YXRlLnRhYmluZGV4LFxuICAgICAgICB0cmFja0NvbnRhaW5lckV2ZW50cyxcbiAgICAgICAgbm9kZSA9PiB7IG5vZGUucHVzaChnZXRUaHVtYigpKSB9XG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IHN0YXRlLmNsYXNzZXMudmFsdWUgKyAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCA/ICcgcS1zbGlkZXItLW5vLXZhbHVlJyA6ICcnKSxcbiAgICAgICAgLi4uc3RhdGUuYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICB9LCBjb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGp1c3RpZnktY2VudGVyIHEtcHQtc21cIj5cbiAgICA8cS1idG4gZmFiIGZsYXQgc2l6ZT1cIm1kXCIgOmljb249XCJvdXRsaW5lZFNraXBQcmV2aW91c1wiIEBjbGljaz1cInF1ZXVlQ29udHJvbGxlci5wbGF5UHJldmlvdXMoKVwiPlxuICAgICAgPHEtdG9vbHRpcD5QcmV2aW91czwvcS10b29sdGlwPlxuICAgIDwvcS1idG4+XG5cbiAgICA8cS1idG4gZmFiIGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIHNpemU9XCJtZFwiIDppY29uPVwicGF1c2VkID8gb3V0bGluZWRQbGF5QXJyb3cgOiBvdXRsaW5lZFBhdXNlXCIgQGNsaWNrPVwiYXVkaW9Db250cm9sbGVyLnRvZ2dsZVBhdXNlKClcIj5cbiAgICAgIDxxLXRvb2x0aXA+e3sgcGF1c2VkID8gXCJQbGF5XCIgOiBcIlBhdXNlXCIgfX08L3EtdG9vbHRpcD5cbiAgICA8L3EtYnRuPlxuXG4gICAgPHEtYnRuIGZsYXQgZmFiIHNpemU9XCJtZFwiIDppY29uPVwib3V0bGluZWRTa2lwTmV4dFwiIEBjbGljaz1cInF1ZXVlQ29udHJvbGxlci5wbGF5TmV4dCgpXCI+XG4gICAgICA8cS10b29sdGlwPk5leHQ8L3EtdG9vbHRpcD5cbiAgICA8L3EtYnRuPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggcS1wdC1sZ1wiIHYtaWY9XCJjdXJyZW50bHlQbGF5aW5nICE9PSBudWxsXCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICB7eyBmb3JtYXREdXJhdGlvbihzZWNvbmRzVG9EdXJhdGlvbihjdXJyZW50VGltZSkpIH19XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1zbGlkZXIgdi1tb2RlbD1cImN1cnJlbnRUaW1lXCJcbiAgICAgICAgICAgICAgICBAcGFuPVwib25QYW5cIlxuICAgICAgICAgICAgICAgIEB1cGRhdGU6bW9kZWwtdmFsdWU9XCJvbkNoYW5nZVwiXG4gICAgICAgICAgICAgICAgOm1pbj1cIjBcIiA6bWF4PVwidG90YWxUaW1lXCIgOnN0ZXA9XCIwLjFcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIi8+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgIHt7IGZvcm1hdER1cmF0aW9uKGN1cnJlbnRseVBsYXlpbmcuVHJhY2suZHVyYXRpb24pIH19XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWVkaWFDb250cm9sJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRTa2lwTmV4dCxcbiAgb3V0bGluZWRTa2lwUHJldmlvdXMsXG4gIG91dGxpbmVkUGF1c2Vcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge2NvbXB1dGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2F1ZGlvQ29udHJvbGxlcn0gZnJvbSAnYm9vdC9hdWRpb0NvbnRyb2xsZXInO1xuaW1wb3J0IHtkdXJhdGlvblRvU2Vjb25kcywgZm9ybWF0RHVyYXRpb24sIHNlY29uZHNUb0R1cmF0aW9ufSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlciwgUXVldWVkVHJhY2t9IGZyb20gJ3NyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXInO1xuaW1wb3J0IHthdWRpb0V2ZW50cywgcXVldWVFdmVudHN9IGZyb20gXCJib290L2V2ZW50QnVzXCI7XG5cbmNvbnN0IGN1cnJlbnRUaW1lID0gcmVmKDApO1xuY29uc3QgaXNQYW5uaW5nUHJvZ3Jlc3MgPSByZWYoZmFsc2UpO1xuY29uc3QgaXNVcGRhdGluZyA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IHF1ZXVlQ29udHJvbGxlciA9IFF1ZXVlQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xuXG5jb25zdCBwYXVzZWQgPSByZWYoZmFsc2UpO1xuXG5jb25zdCBjdXJyZW50bHlQbGF5aW5nID0gcmVmPFF1ZXVlZFRyYWNrIHwgbnVsbD4obnVsbCk7XG5cbnF1ZXVlRXZlbnRzLmN1cnJlbnRQbGF5aW5nQ2hhbmdlZC5vbigoe3ByZXYsIGN1cnJ9KSA9PiB7XG4gIGN1cnJlbnRseVBsYXlpbmcudmFsdWUgPSBjdXJyO1xufSlcblxuYXVkaW9FdmVudHMucGxheWJhY2tQYXVzZWQub24oKCkgPT4ge1xuICBwYXVzZWQudmFsdWUgPSB0cnVlXG59KTtcblxuYXVkaW9FdmVudHMucGxheWJhY2tSZXN1bWVkLm9uKCgpID0+IHtcbiAgcGF1c2VkLnZhbHVlID0gZmFsc2U7XG59KTtcblxuY29uc3Qgb25QYW4gPSAocGhhc2U6IHN0cmluZykgPT4ge1xuICBpZiAocGhhc2UgPT09ICdzdGFydCcpIHtcbiAgICBpc1Bhbm5pbmdQcm9ncmVzcy52YWx1ZSA9IHRydWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gU2Vla1xuICAgIGF1ZGlvQ29udHJvbGxlci5zZWVrKGN1cnJlbnRUaW1lLnZhbHVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaXNQYW5uaW5nUHJvZ3Jlc3MudmFsdWUgPSBmYWxzZTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5jb25zdCBvbkNoYW5nZSA9IChrOiB1bmtub3duKSA9PiB7XG4gIGlmIChpc1Bhbm5pbmdQcm9ncmVzcy52YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpc1VwZGF0aW5nLnZhbHVlID0gdHJ1ZTtcbiAgYXVkaW9Db250cm9sbGVyLnNlZWsoPG51bWJlcj5rKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpc1VwZGF0aW5nLnZhbHVlID0gZmFsc2U7XG4gIH0sIDApO1xufVxuXG5jb25zdCB0b3RhbFRpbWUgPSBjb21wdXRlZCgoKSA9PiB7XG4gIGlmIChjdXJyZW50bHlQbGF5aW5nLnZhbHVlICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uVG9TZWNvbmRzKDxzdHJpbmc+Y3VycmVudGx5UGxheWluZy52YWx1ZS5UcmFjay5kdXJhdGlvbik7XG4gIH1cblxuICByZXR1cm4gLTE7XG59KVxuXG5hdWRpb0V2ZW50cy5wbGF5YmFja1Byb2dyZXNzZWQub24oKHtwcmV2LCBjdXJyfSkgPT4ge1xuICBpZiAoaXNQYW5uaW5nUHJvZ3Jlc3MudmFsdWUgfHwgaXNVcGRhdGluZy52YWx1ZSlcbiAge1xuICAgIHJldHVybjtcbiAgfVxuICBjdXJyZW50VGltZS52YWx1ZSA9IGN1cnI7XG59KVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJztcblxuZXhwb3J0IGNvbnN0IHVzZVF1ZXVlRGlzcGxheVN0b3JlID0gZGVmaW5lU3RvcmUoJ3F1ZXVlRGlzcGxheScsIHtcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgc2hvdzogdHJ1ZVxuICB9KSxcblxuICBhY3Rpb25zOiB7XG4gICAgb3BlbiAoKSB7XG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIH1cbiAgfVxufSk7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTcgcm93IGp1c3RpZnktZW5kXCI+XG4gICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkUmVwZWF0XCI+XG4gICAgICAgIDxxLXRvb2x0aXA+UmVwZWF0PC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuXG4gICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkU2h1ZmZsZVwiIGNsYXNzPVwicS1teC1zbVwiPlxuICAgICAgICA8cS10b29sdGlwPlNodWZmbGU8L3EtdG9vbHRpcD5cbiAgICAgIDwvcS1idG4+XG5cbiAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRRdWV1ZU11c2ljXCIgQGNsaWNrPVwicXVldWVTaG93U3RhdHVzU3RvcmUudG9nZ2xlKClcIj5cbiAgICAgICAgPHEtdG9vbHRpcD5RdWV1ZTwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICA8cS1pdGVtIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJ2b2x1bWVfdXBcIi8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1zbGlkZXJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ2b2x1bWVcIlxuICAgICAgICAgICAgOm1pbj1cIjBcIlxuICAgICAgICAgICAgOm1heD1cIjEwMFwiXG4gICAgICAgICAgICA6c3RlcD1cIjFcIlxuICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMHB4XCJcbiAgICAgICAgICAgIHRodW1iLXNpemU9XCIxMHB4XCJcbiAgICAgICAgICAgIGlubmVyLXRyYWNrLWNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgc2VsZWN0aW9uLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgdGh1bWItY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICB0cmFjay1jb2xvcj1cInllbGxvd1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFNodWZmbGUsXG4gIG91dGxpbmVkUmVwZWF0LFxuICBvdXRsaW5lZFF1ZXVlTXVzaWMsXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcblxuaW1wb3J0IHthdWRpb0NvbnRyb2xsZXJ9IGZyb20gJ2Jvb3QvYXVkaW9Db250cm9sbGVyJztcbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7dXNlUXVldWVEaXNwbGF5U3RvcmV9IGZyb20gJ3N0b3Jlcy9zaG93UXVldWUnO1xuXG5jb25zdCBxdWV1ZVNob3dTdGF0dXNTdG9yZSA9IHVzZVF1ZXVlRGlzcGxheVN0b3JlKCk7XG5cbmNvbnN0IHZvbHVtZSA9IHJlZihhdWRpb0NvbnRyb2xsZXIudm9sdW1lICogMTAwKTtcblxud2F0Y2godm9sdW1lLCAoKSA9PiB7XG4gIGF1ZGlvQ29udHJvbGxlci52b2x1bWUgPSB2b2x1bWUudmFsdWUgLyAxMDA7XG59KVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtdG9vbGJhciBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQganVzdGlmeS1ldmVubHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPHRyYWNrLWluZm8tY2FyZD48L3RyYWNrLWluZm8tY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC01XCI+XG4gICAgICAgIDxtZWRpYS1jb250cm9sPjwvbWVkaWEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgPHF1ZXVlLWNvbnRyb2w+PC9xdWV1ZS1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICA8L3EtdG9vbGJhcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQbGF5ZXJDb250cm9sJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgVHJhY2tJbmZvQ2FyZCBmcm9tICdjb21wb25lbnRzL1RyYWNrSW5mb0NhcmQudnVlJztcbmltcG9ydCBNZWRpYUNvbnRyb2wgZnJvbSAnY29tcG9uZW50cy9NZWRpYUNvbnRyb2wudnVlJztcbmltcG9ydCBRdWV1ZUNvbnRyb2wgZnJvbSAnY29tcG9uZW50cy9RdWV1ZUNvbnRyb2wudnVlJztcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgaCwgb25CZWZvcmVVbm1vdW50LCBUcmFuc2l0aW9uIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTbGlkZVRyYW5zaXRpb24nLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZWFyOiBCb29sZWFuLFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Nob3cnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGxldCBhbmltYXRpbmcgPSBmYWxzZSwgZG9uZUZuLCBlbGVtZW50XG4gICAgbGV0IHRpbWVyLCB0aW1lckZhbGxiYWNrLCBhbmltTGlzdGVuZXIsIGxhc3RFdmVudFxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBkb25lRm4gJiYgZG9uZUZuKClcbiAgICAgIGRvbmVGbiA9IG51bGxcbiAgICAgIGFuaW1hdGluZyA9IGZhbHNlXG5cbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lckZhbGxiYWNrKVxuICAgICAgZWxlbWVudCAhPT0gdm9pZCAwICYmIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGFuaW1MaXN0ZW5lcilcbiAgICAgIGFuaW1MaXN0ZW5lciA9IG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiZWdpbiAoZWwsIGhlaWdodCwgZG9uZSkge1xuICAgICAgZWwuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICAgIGlmIChoZWlnaHQgIT09IHZvaWQgMCkge1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHsgaGVpZ2h0IH1weGBcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0ICR7IHByb3BzLmR1cmF0aW9uIH1tcyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjUwLCAxKWBcblxuICAgICAgYW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgZG9uZUZuID0gZG9uZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCAoZWwsIGV2ZW50KSB7XG4gICAgICBlbC5zdHlsZS5vdmVyZmxvd1kgPSBudWxsXG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBudWxsXG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbFxuICAgICAgY2xlYW51cCgpXG4gICAgICBldmVudCAhPT0gbGFzdEV2ZW50ICYmIGVtaXQoZXZlbnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FbnRlciAoZWwsIGRvbmUpIHtcbiAgICAgIGxldCBwb3MgPSAwXG4gICAgICBlbGVtZW50ID0gZWxcblxuICAgICAgaWYgKGFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgcG9zID0gZWwub2Zmc2V0SGVpZ2h0ID09PSBlbC5zY3JvbGxIZWlnaHQgPyAwIDogdm9pZCAwXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdEV2ZW50ID0gJ2hpZGUnXG4gICAgICB9XG5cbiAgICAgIGJlZ2luKGVsLCBwb3MsIGRvbmUpXG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGAkeyBlbC5zY3JvbGxIZWlnaHQgfXB4YFxuICAgICAgICBhbmltTGlzdGVuZXIgPSBldnQgPT4ge1xuICAgICAgICAgIGlmIChPYmplY3QoZXZ0KSAhPT0gZXZ0IHx8IGV2dC50YXJnZXQgPT09IGVsKSB7XG4gICAgICAgICAgICBlbmQoZWwsICdzaG93JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGFuaW1MaXN0ZW5lcilcbiAgICAgICAgdGltZXJGYWxsYmFjayA9IHNldFRpbWVvdXQoYW5pbUxpc3RlbmVyLCBwcm9wcy5kdXJhdGlvbiAqIDEuMSlcbiAgICAgIH0sIDEwMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxlYXZlIChlbCwgZG9uZSkge1xuICAgICAgbGV0IHBvc1xuICAgICAgZWxlbWVudCA9IGVsXG5cbiAgICAgIGlmIChhbmltYXRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgY2xlYW51cCgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdEV2ZW50ID0gJ3Nob3cnXG4gICAgICAgIHBvcyA9IGVsLnNjcm9sbEhlaWdodFxuICAgICAgfVxuXG4gICAgICBiZWdpbihlbCwgcG9zLCBkb25lKVxuXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgIGFuaW1MaXN0ZW5lciA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdChldnQpICE9PSBldnQgfHwgZXZ0LnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGVuZChlbCwgJ2hpZGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgICB0aW1lckZhbGxiYWNrID0gc2V0VGltZW91dChhbmltTGlzdGVuZXIsIHByb3BzLmR1cmF0aW9uICogMS4xKVxuICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBhbmltYXRpbmcgPT09IHRydWUgJiYgY2xlYW51cCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKFRyYW5zaXRpb24sIHtcbiAgICAgIGNzczogZmFsc2UsXG4gICAgICBhcHBlYXI6IHByb3BzLmFwcGVhcixcbiAgICAgIG9uRW50ZXIsXG4gICAgICBvbkxlYXZlXG4gICAgfSwgc2xvdHMuZGVmYXVsdClcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHNoYWxsb3dSZWFjdGl2ZSwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UsIHZTaG93LCBvbkJlZm9yZVVubW91bnQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSXRlbSBmcm9tICcuLi9pdGVtL1FJdGVtLmpzJ1xuaW1wb3J0IFFJdGVtU2VjdGlvbiBmcm9tICcuLi9pdGVtL1FJdGVtU2VjdGlvbi5qcydcbmltcG9ydCBRSXRlbUxhYmVsIGZyb20gJy4uL2l0ZW0vUUl0ZW1MYWJlbC5qcydcbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFTbGlkZVRyYW5zaXRpb24gZnJvbSAnLi4vc2xpZGUtdHJhbnNpdGlvbi9RU2xpZGVUcmFuc2l0aW9uLmpzJ1xuaW1wb3J0IFFTZXBhcmF0b3IgZnJvbSAnLi4vc2VwYXJhdG9yL1FTZXBhcmF0b3IuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcydcbmltcG9ydCB1c2VNb2RlbFRvZ2dsZSwgeyB1c2VNb2RlbFRvZ2dsZVByb3BzLCB1c2VNb2RlbFRvZ2dsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi91dGlscy91aWQuanMnXG5cbmNvbnN0IGl0ZW1Hcm91cHMgPSBzaGFsbG93UmVhY3RpdmUoe30pXG5jb25zdCBMSU5LX1BST1BTID0gT2JqZWN0LmtleXModXNlUm91dGVyTGlua1Byb3BzKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUV4cGFuc2lvbkl0ZW0nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlUm91dGVyTGlua1Byb3BzLFxuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgaWNvbjogU3RyaW5nLFxuXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBsYWJlbExpbmVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBjYXB0aW9uOiBTdHJpbmcsXG4gICAgY2FwdGlvbkxpbmVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcblxuICAgIHRvZ2dsZUFyaWFMYWJlbDogU3RyaW5nLFxuICAgIGV4cGFuZEljb246IFN0cmluZyxcbiAgICBleHBhbmRlZEljb246IFN0cmluZyxcbiAgICBleHBhbmRJY29uQ2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgZHVyYXRpb246IE51bWJlcixcblxuICAgIGhlYWRlckluc2V0TGV2ZWw6IE51bWJlcixcbiAgICBjb250ZW50SW5zZXRMZXZlbDogTnVtYmVyLFxuXG4gICAgZXhwYW5kU2VwYXJhdG9yOiBCb29sZWFuLFxuICAgIGRlZmF1bHRPcGVuZWQ6IEJvb2xlYW4sXG4gICAgaGlkZUV4cGFuZEljb246IEJvb2xlYW4sXG4gICAgZXhwYW5kSWNvblRvZ2dsZTogQm9vbGVhbixcbiAgICBzd2l0Y2hUb2dnbGVTaWRlOiBCb29sZWFuLFxuICAgIGRlbnNlVG9nZ2xlOiBCb29sZWFuLFxuICAgIGdyb3VwOiBTdHJpbmcsXG4gICAgcG9wdXA6IEJvb2xlYW4sXG5cbiAgICBoZWFkZXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBoZWFkZXJDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnY2xpY2snLCAnYWZ0ZXJTaG93JywgJ2FmdGVySGlkZSdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoXG4gICAgICBwcm9wcy5tb2RlbFZhbHVlICE9PSBudWxsXG4gICAgICAgID8gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICA6IHByb3BzLmRlZmF1bHRPcGVuZWRcbiAgICApXG5cbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdGFyZ2V0VWlkID0gdWlkKClcblxuICAgIGNvbnN0IHsgc2hvdywgaGlkZSwgdG9nZ2xlIH0gPSB1c2VNb2RlbFRvZ2dsZSh7IHNob3dpbmcgfSlcblxuICAgIGxldCB1bmlxdWVJZCwgZXhpdEdyb3VwXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWV4cGFuc2lvbi1pdGVtIHEtaXRlbS10eXBlJ1xuICAgICAgKyBgIHEtZXhwYW5zaW9uLWl0ZW0tLSR7IHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCcgfWBcbiAgICAgICsgYCBxLWV4cGFuc2lvbi1pdGVtLS0keyBwcm9wcy5wb3B1cCA9PT0gdHJ1ZSA/ICdwb3B1cCcgOiAnc3RhbmRhcmQnIH1gXG4gICAgKVxuXG4gICAgY29uc3QgY29udGVudFN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLmNvbnRlbnRJbnNldExldmVsID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBbICdwYWRkaW5nJyArIGRpciBdOiAocHJvcHMuY29udGVudEluc2V0TGV2ZWwgKiA1NikgKyAncHgnXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGhhc0xpbmsgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiAoXG4gICAgICAgIHByb3BzLmhyZWYgIT09IHZvaWQgMFxuICAgICAgICB8fCAocHJvcHMudG8gIT09IHZvaWQgMCAmJiBwcm9wcy50byAhPT0gbnVsbCAmJiBwcm9wcy50byAhPT0gJycpXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgbGlua1Byb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cbiAgICAgIExJTktfUFJPUFMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBhY2NbIGtleSBdID0gcHJvcHNbIGtleSBdXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBpc0NsaWNrYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBoYXNMaW5rLnZhbHVlID09PSB0cnVlIHx8IHByb3BzLmV4cGFuZEljb25Ub2dnbGUgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBleHBhbnNpb25JY29uID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZXhwYW5kZWRJY29uICE9PSB2b2lkIDAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmV4cGFuZGVkSWNvblxuICAgICAgICA6IHByb3BzLmV4cGFuZEljb24gfHwgJHEuaWNvblNldC5leHBhbnNpb25JdGVtWyBwcm9wcy5kZW5zZVRvZ2dsZSA9PT0gdHJ1ZSA/ICdkZW5zZUljb24nIDogJ2ljb24nIF1cbiAgICApKVxuXG4gICAgY29uc3QgYWN0aXZlVG9nZ2xlSWNvbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIChoYXNMaW5rLnZhbHVlID09PSB0cnVlIHx8IHByb3BzLmV4cGFuZEljb25Ub2dnbGUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgaGVhZGVyU2xvdFNjb3BlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGV4cGFuZGVkOiBzaG93aW5nLnZhbHVlID09PSB0cnVlLFxuICAgICAgZGV0YWlsc0lkOiBwcm9wcy50YXJnZXRVaWQsXG4gICAgICB0b2dnbGUsXG4gICAgICBzaG93LFxuICAgICAgaGlkZVxuICAgIH0pKVxuXG4gICAgY29uc3QgdG9nZ2xlQXJpYUF0dHJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdG9nZ2xlQXJpYUxhYmVsID0gcHJvcHMudG9nZ2xlQXJpYUxhYmVsICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy50b2dnbGVBcmlhTGFiZWxcbiAgICAgICAgOiAkcS5sYW5nLmxhYmVsWyBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJ2NvbGxhcHNlJyA6ICdleHBhbmQnIF0ocHJvcHMubGFiZWwpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IHRhcmdldFVpZCxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiB0b2dnbGVBcmlhTGFiZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZ3JvdXAsIG5hbWUgPT4ge1xuICAgICAgZXhpdEdyb3VwICE9PSB2b2lkIDAgJiYgZXhpdEdyb3VwKClcbiAgICAgIG5hbWUgIT09IHZvaWQgMCAmJiBlbnRlckdyb3VwKClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25IZWFkZXJDbGljayAoZSkge1xuICAgICAgaGFzTGluay52YWx1ZSAhPT0gdHJ1ZSAmJiB0b2dnbGUoZSlcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVJY29uS2V5Ym9hcmQgKGUpIHtcbiAgICAgIGUua2V5Q29kZSA9PT0gMTMgJiYgdG9nZ2xlSWNvbihlLCB0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUljb24gKGUsIGtleWJvYXJkKSB7XG4gICAgICBrZXlib2FyZCAhPT0gdHJ1ZSAmJiBibHVyVGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsICYmIGJsdXJUYXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgdG9nZ2xlKGUpXG4gICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2hvdyAoKSB7XG4gICAgICBlbWl0KCdhZnRlclNob3cnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoKSB7XG4gICAgICBlbWl0KCdhZnRlckhpZGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVudGVyR3JvdXAgKCkge1xuICAgICAgaWYgKHVuaXF1ZUlkID09PSB2b2lkIDApIHtcbiAgICAgICAgdW5pcXVlSWQgPSB1aWQoKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdID0gdW5pcXVlSWRcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hvdyA9IHdhdGNoKHNob3dpbmcsIHZhbCA9PiB7XG4gICAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgICAgICBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdID0gdW5pcXVlSWRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdID09PSB1bmlxdWVJZCkge1xuICAgICAgICAgIGRlbGV0ZSBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGdyb3VwID0gd2F0Y2goXG4gICAgICAgICgpID0+IGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0sXG4gICAgICAgICh2YWwsIG9sZFZhbCkgPT4ge1xuICAgICAgICAgIGlmIChvbGRWYWwgPT09IHVuaXF1ZUlkICYmIHZhbCAhPT0gdm9pZCAwICYmIHZhbCAhPT0gdW5pcXVlSWQpIHtcbiAgICAgICAgICAgIGhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBleGl0R3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIHNob3coKVxuICAgICAgICBncm91cCgpXG5cbiAgICAgICAgaWYgKGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgZGVsZXRlIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF1cbiAgICAgICAgfVxuXG4gICAgICAgIGV4aXRHcm91cCA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRvZ2dsZUljb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAncS1mb2N1c2FibGUgcmVsYXRpdmUtcG9zaXRpb24gY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICArIGAkeyBwcm9wcy5kZW5zZVRvZ2dsZSA9PT0gdHJ1ZSAmJiBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlID09PSB0cnVlID8gJyBpdGVtcy1lbmQnIDogJycgfWAsXG4gICAgICAgICAgcHJvcHMuZXhwYW5kSWNvbkNsYXNzXG4gICAgICAgIF0sXG4gICAgICAgIHNpZGU6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgIT09IHRydWUsXG4gICAgICAgIGF2YXRhcjogcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fdG9nZ2xlLWljb24nXG4gICAgICAgICAgICArIChwcm9wcy5leHBhbmRlZEljb24gPT09IHZvaWQgMCAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICAgID8gJyBxLWV4cGFuc2lvbi1pdGVtX190b2dnbGUtaWNvbi0tcm90YXRlZCdcbiAgICAgICAgICAgICAgOiAnJyksXG4gICAgICAgICAgbmFtZTogZXhwYW5zaW9uSWNvbi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBpZiAoYWN0aXZlVG9nZ2xlSWNvbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICB0YWJpbmRleDogMCxcbiAgICAgICAgICAuLi50b2dnbGVBcmlhQXR0cnMudmFsdWUsXG4gICAgICAgICAgb25DbGljazogdG9nZ2xlSWNvbixcbiAgICAgICAgICBvbktleXVwOiB0b2dnbGVJY29uS2V5Ym9hcmRcbiAgICAgICAgfSlcblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIHJlZjogYmx1clRhcmdldFJlZixcbiAgICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fdG9nZ2xlLWZvY3VzIHEtaWNvbiBxLWZvY3VzLWhlbHBlciBxLWZvY3VzLWhlbHBlci0tcm91bmRlZCcsXG4gICAgICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFJdGVtU2VjdGlvbiwgZGF0YSwgKCkgPT4gY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyQ2hpbGQgKCkge1xuICAgICAgbGV0IGNoaWxkXG5cbiAgICAgIGlmIChzbG90cy5oZWFkZXIgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IFtdLmNvbmNhdChzbG90cy5oZWFkZXIoaGVhZGVyU2xvdFNjb3BlLnZhbHVlKSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IFtcbiAgICAgICAgICBoKFFJdGVtU2VjdGlvbiwgKCkgPT4gW1xuICAgICAgICAgICAgaChRSXRlbUxhYmVsLCB7IGxpbmVzOiBwcm9wcy5sYWJlbExpbmVzIH0sICgpID0+IHByb3BzLmxhYmVsIHx8ICcnKSxcblxuICAgICAgICAgICAgcHJvcHMuY2FwdGlvblxuICAgICAgICAgICAgICA/IGgoUUl0ZW1MYWJlbCwgeyBsaW5lczogcHJvcHMuY2FwdGlvbkxpbmVzLCBjYXB0aW9uOiB0cnVlIH0sICgpID0+IHByb3BzLmNhcHRpb24pXG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIF0pXG4gICAgICAgIF1cblxuICAgICAgICBwcm9wcy5pY29uICYmIGNoaWxkWyBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlID09PSB0cnVlID8gJ3B1c2gnIDogJ3Vuc2hpZnQnIF0oXG4gICAgICAgICAgaChRSXRlbVNlY3Rpb24sIHtcbiAgICAgICAgICAgIHNpZGU6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUsXG4gICAgICAgICAgICBhdmF0YXI6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgIT09IHRydWVcbiAgICAgICAgICB9LCAoKSA9PiBoKFFJY29uLCB7IG5hbWU6IHByb3BzLmljb24gfSkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMuaGlkZUV4cGFuZEljb24gIT09IHRydWUpIHtcbiAgICAgICAgY2hpbGRbIHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUgPyAndW5zaGlmdCcgOiAncHVzaCcgXShcbiAgICAgICAgICBnZXRUb2dnbGVJY29uKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXIgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcmVmOiAnaXRlbScsXG4gICAgICAgIHN0eWxlOiBwcm9wcy5oZWFkZXJTdHlsZSxcbiAgICAgICAgY2xhc3M6IHByb3BzLmhlYWRlckNsYXNzLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgaW5zZXRMZXZlbDogcHJvcHMuaGVhZGVySW5zZXRMZXZlbFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YS5jbGlja2FibGUgPSB0cnVlXG4gICAgICAgIGRhdGEub25DbGljayA9IG9uSGVhZGVyQ2xpY2tcblxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgaGFzTGluay52YWx1ZSA9PT0gdHJ1ZSA/IGxpbmtQcm9wcy52YWx1ZSA6IHRvZ2dsZUFyaWFBdHRycy52YWx1ZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFJdGVtLCBkYXRhLCBnZXRIZWFkZXJDaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uQ2hpbGQgKCkge1xuICAgICAgcmV0dXJuIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnZS1jb250ZW50JyxcbiAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX2NvbnRlbnQgcmVsYXRpdmUtcG9zaXRpb24nLFxuICAgICAgICAgIHN0eWxlOiBjb250ZW50U3R5bGUudmFsdWUsXG4gICAgICAgICAgaWQ6IHRhcmdldFVpZFxuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSksXG4gICAgICAgIFsgW1xuICAgICAgICAgIHZTaG93LFxuICAgICAgICAgIHNob3dpbmcudmFsdWVcbiAgICAgICAgXSBdXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBjb25zdCBub2RlID0gW1xuICAgICAgICBnZXRIZWFkZXIoKSxcblxuICAgICAgICBoKFFTbGlkZVRyYW5zaXRpb24sIHtcbiAgICAgICAgICBkdXJhdGlvbjogcHJvcHMuZHVyYXRpb24sXG4gICAgICAgICAgb25TaG93LFxuICAgICAgICAgIG9uSGlkZVxuICAgICAgICB9LCBnZXRUcmFuc2l0aW9uQ2hpbGQpXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5leHBhbmRTZXBhcmF0b3IgPT09IHRydWUpIHtcbiAgICAgICAgbm9kZS5wdXNoKFxuICAgICAgICAgIGgoUVNlcGFyYXRvciwge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXIgcS1leHBhbnNpb24taXRlbV9fYm9yZGVyLS10b3AgYWJzb2x1dGUtdG9wJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGgoUVNlcGFyYXRvciwge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXIgcS1leHBhbnNpb24taXRlbV9fYm9yZGVyLS1ib3R0b20gYWJzb2x1dGUtYm90dG9tJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG5cbiAgICBwcm9wcy5ncm91cCAhPT0gdm9pZCAwICYmIGVudGVyR3JvdXAoKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGV4aXRHcm91cCAhPT0gdm9pZCAwICYmIGV4aXRHcm91cCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIFtcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19jb250YWluZXIgcmVsYXRpdmUtcG9zaXRpb24nIH0sIGdldENvbnRlbnQoKSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZVNwaW5uZXIsIHsgdXNlU3Bpbm5lclByb3BzIH0gZnJvbSAnLi91c2Utc3Bpbm5lci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IHN2ZyA9IFtcbiAgaCgnZycsIHtcbiAgICB0cmFuc2Zvcm06ICdtYXRyaXgoMSAwIDAgLTEgMCA4MCknXG4gIH0sIFtcbiAgICBoKCdyZWN0Jywge1xuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICcyMCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICc0LjNzJyxcbiAgICAgICAgdmFsdWVzOiAnMjA7NDU7NTc7ODA7NjQ7MzI7NjY7NDU7NjQ7MjM7NjY7MTM7NjQ7NTY7MzQ7MzQ7MjsyMzs3Njs3OTsyMCcsXG4gICAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgICAgfSlcbiAgICBdKSxcbiAgICBoKCdyZWN0Jywge1xuICAgICAgeDogJzE1JyxcbiAgICAgIHdpZHRoOiAnMTAnLFxuICAgICAgaGVpZ2h0OiAnODAnLFxuICAgICAgcng6ICczJ1xuICAgIH0sIFtcbiAgICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdoZWlnaHQnLFxuICAgICAgICBiZWdpbjogJzBzJyxcbiAgICAgICAgZHVyOiAnMnMnLFxuICAgICAgICB2YWx1ZXM6ICc4MDs1NTszMzs1Ozc1OzIzOzczOzMzOzEyOzE0OzYwOzgwJyxcbiAgICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgICB9KVxuICAgIF0pLFxuICAgIGgoJ3JlY3QnLCB7XG4gICAgICB4OiAnMzAnLFxuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICc1MCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICcxLjRzJyxcbiAgICAgICAgdmFsdWVzOiAnNTA7MzQ7Nzg7MjM7NTY7MjM7MzQ7NzY7ODA7NTQ7MjE7NTAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSksXG4gICAgaCgncmVjdCcsIHtcbiAgICAgIHg6ICc0NScsXG4gICAgICB3aWR0aDogJzEwJyxcbiAgICAgIGhlaWdodDogJzMwJyxcbiAgICAgIHJ4OiAnMydcbiAgICB9LCBbXG4gICAgICBoKCdhbmltYXRlJywge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnaGVpZ2h0JyxcbiAgICAgICAgYmVnaW46ICcwcycsXG4gICAgICAgIGR1cjogJzJzJyxcbiAgICAgICAgdmFsdWVzOiAnMzA7NDU7MTM7ODA7NTY7NzI7NDU7NzY7MzQ7MjM7Njc7MzAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSlcbiAgXSlcbl1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGlubmVyQXVkaW8nLFxuXG4gIHByb3BzOiB1c2VTcGlubmVyUHJvcHMsXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgd2lkdGg6IGNTaXplLnZhbHVlLFxuICAgICAgaGVpZ2h0OiBjU2l6ZS52YWx1ZSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgNTUgODAnLFxuICAgICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICB9LCBzdmcpXG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWl0ZW0gY2xhc3M9XCJ0cmFuc3BhcmVudFwiIGNsaWNrYWJsZSB2LWlmPVwicHJvcHMudHJhY2tJbmZvXCJcbiAgICAgICAgICBAbW91c2VvdmVyPVwiaG92ZXJpbmc9dHJ1ZVwiIEBtb3VzZWxlYXZlPVwiaG92ZXJpbmc9ZmFsc2VcIj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgPHEtYXZhdGFyIHNxdWFyZT5cbiAgICAgICAgPGltZyA6c3JjPVwicHJvcHMudHJhY2tJbmZvLmFsYnVtLnRodW1ibmFpbC50aW55LnVybFwiPlxuICAgICAgPC9xLWF2YXRhcj5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJlbGxpcHNpc1wiIDpjbGFzcz1cInsgJ3RleHQtZ3QnIDogY3VycmVudGx5UGxheWluZyB9XCI+e3sgcHJvcHMudHJhY2tJbmZvLm5hbWUuX2RlZmF1bHQgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJlbGxpcHNpc1wiIDpjbGFzcz1cInsgJ3RleHQtZ3QnIDogY3VycmVudGx5UGxheWluZyB9XCIgY2FwdGlvbiBsaW5lcz1cIjJcIj57eyBwcm9wcy50cmFja0luZm8uYWxidW0uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZSB2LWlmPVwiY3VycmVudGx5UGxheWluZyAmJiAhaG92ZXJpbmdcIj5cbiAgICAgIDxxLXNwaW5uZXItYXVkaW8gdi1pZj1cIiFwYXVzZWRcIiBzaXplPVwiMmVtXCIgY29sb3I9XCJndFwiIC8+XG4gICAgICA8cS1pY29uIHNpemU9XCIyZW1cIiB2LWlmPVwicGF1c2VkXCIgOm5hbWU9XCJvdXRsaW5lZFBhdXNlXCI+PC9xLWljb24+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cblxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIHYtaWY9XCJob3ZlcmluZ1wiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPlxuICAgICAgICA8cS1idG4gOmljb249XCJvdXRsaW5lZERlbGV0ZVwiIGZsYXQgZmFiLW1pbmkgQGNsaWNrPVwiZGVsZXRlSXRlbVwiPjwvcS1idG4+XG4gICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuXG4gICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgdi1pZj1cIiFjdXJyZW50bHlQbGF5aW5nICYmICFob3ZlcmluZ1wiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IGZvcm1hdER1cmF0aW9uKHByb3BzLnRyYWNrSW5mby5kdXJhdGlvbikgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L3EtaXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1RyYWNrUmVhZER0b30gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHtjb21wdXRlZCwgZGVmaW5lUHJvcHMsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7Zm9ybWF0RHVyYXRpb259IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcbmltcG9ydCB7YXVkaW9Db250cm9sbGVyfSBmcm9tICdib290L2F1ZGlvQ29udHJvbGxlcic7XG5pbXBvcnQge291dGxpbmVkUGF1c2UsIG91dGxpbmVkRGVsZXRlfSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQge2F1ZGlvRXZlbnRzfSBmcm9tIFwiYm9vdC9ldmVudEJ1c1wiO1xuaW1wb3J0IHtRdWV1ZUNvbnRyb2xsZXIsIFF1ZXVlZFRyYWNrfSBmcm9tIFwic3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlclwiO1xuXG5jb25zdCBxdWV1ZUNvbnRyb2xsZXIgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcblxuY29uc3QgZGVsZXRlSXRlbSA9IChldnQ6IFBvaW50ZXJFdmVudCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgcXVldWVDb250cm9sbGVyLnJlbW92ZVF1ZXVlZEl0ZW0ocHJvcHMucXVldWVJbmZvLkl0ZW1JZCk7XG59XG5cbmNvbnN0IHBhdXNlZCA9IHJlZihmYWxzZSk7XG5hdWRpb0V2ZW50cy5wbGF5YmFja1N0YXRlQ2hhbmdlZC5vbigoe3ByZXYsIGN1cnJ9KSA9PiB7XG4gIHBhdXNlZC52YWx1ZSA9IGN1cnI7XG59KVxuXG5jb25zdCBob3ZlcmluZyA9IHJlZihmYWxzZSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHF1ZXVlSW5mbzogUXVldWVkVHJhY2ssXG4gIHRyYWNrSW5mbzogVHJhY2tSZWFkRHRvLFxuICBjdXJyZW50bHlQbGF5aW5nOiBib29sZWFuXG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cS1saXN0PlxuICAgICAgPHEtZXhwYW5zaW9uLWl0ZW1cbiAgICAgICAgZGVuc2VcbiAgICAgICAgbGFiZWw9XCJIaXN0b3J5XCJcbiAgICAgICAgZGVmYXVsdC1vcGVuZWQ+XG4gICAgICAgIDxRdWV1ZUl0ZW0gdi1mb3I9XCJoIGluIGhpc3RvcnlcIiA6a2V5PVwiaC5UcmFjay5pZFwiXG4gICAgICAgICAgICAgICAgICAgOnRyYWNrLWluZm89XCJoLlRyYWNrXCIgOnF1ZXVlLWluZm89XCJoXCJcbiAgICAgICAgICAgICAgICAgICA6Y3VycmVudGx5LXBsYXlpbmc9XCJmYWxzZVwiPjwvUXVldWVJdGVtPlxuXG4gICAgICAgIDxRdWV1ZUl0ZW0gdi1pZj1cImN1cnJlbnRseVBsYXlpbmdcIiA6Y3VycmVudGx5LXBsYXlpbmc9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICA6dHJhY2staW5mbz1cImN1cnJlbnRseVBsYXlpbmcuVHJhY2tcIiA6cXVldWUtaW5mbz1cImN1cnJlbnRseVBsYXlpbmdcIj48L1F1ZXVlSXRlbT5cbiAgICAgIDwvcS1leHBhbnNpb24taXRlbT5cblxuICAgICAgPHEtZXhwYW5zaW9uLWl0ZW1cbiAgICAgICAgZGVuc2VcbiAgICAgICAgbGFiZWw9XCJOZXh0IFVwXCJcbiAgICAgICAgZGVmYXVsdC1vcGVuZWQ+XG4gICAgICAgIDxRdWV1ZUl0ZW0gdi1mb3I9XCJmdXR1cmUgaW4gcXVldWVcIiA6a2V5PVwiZnV0dXJlLlRyYWNrLmlkXCJcbiAgICAgICAgICAgICAgICAgICA6dHJhY2staW5mbz1cImZ1dHVyZS5UcmFja1wiIDpxdWV1ZS1pbmZvPVwiZnV0dXJlXCJcbiAgICAgICAgICAgICAgICAgICA6Y3VycmVudGx5LXBsYXlpbmc9XCJmYWxzZVwiPjwvUXVldWVJdGVtPlxuICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPlxuICAgIDwvcS1saXN0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgUXVldWVJdGVtIGZyb20gJ2NvbXBvbmVudHMvUXVldWVJdGVtLnZ1ZSc7XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7UXVldWVkVHJhY2t9IGZyb20gJ3NyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXInO1xuaW1wb3J0IHtxdWV1ZUV2ZW50c30gZnJvbSBcImJvb3QvZXZlbnRCdXNcIjtcblxuY29uc3QgaGlzdG9yeSA9IHJlZjxRdWV1ZWRUcmFja1tdPihbXSk7XG5jb25zdCBxdWV1ZSA9IHJlZjxRdWV1ZWRUcmFja1tdPihbXSk7XG5jb25zdCBjdXJyZW50bHlQbGF5aW5nID0gcmVmPFF1ZXVlZFRyYWNrIHwgbnVsbD4obnVsbCk7XG5cbnF1ZXVlRXZlbnRzLmhpc3RvcnlDaGFuZ2VkLm9uKCh7cHJldiwgY3Vycn0pID0+IHtcbiAgaGlzdG9yeS52YWx1ZSA9IGN1cnI7XG59KTtcblxucXVldWVFdmVudHMucXVldWVDaGFuZ2VkLm9uKCh7cHJldiwgY3Vycn0pID0+IHtcbiAgcXVldWUudmFsdWUubGVuZ3RoID0gMDtcbiAgcXVldWUudmFsdWUucHVzaCguLi5jdXJyKTtcbn0pO1xuXG5xdWV1ZUV2ZW50cy5jdXJyZW50UGxheWluZ0NoYW5nZWQub24oKHtwcmV2LCBjdXJyfSkgPT4ge1xuICBjdXJyZW50bHlQbGF5aW5nLnZhbHVlID0gY3Vycjtcbn0pO1xuXG48L3NjcmlwdD5cbiIsImltcG9ydCB7IGgsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQnRuR3JvdXAnLFxuXG4gIHByb3BzOiB7XG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBvdXRsaW5lOiBCb29sZWFuLFxuICAgIGZsYXQ6IEJvb2xlYW4sXG4gICAgcm91bmRlZDogQm9vbGVhbixcbiAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgcHVzaDogQm9vbGVhbixcbiAgICBzdHJldGNoOiBCb29sZWFuLFxuICAgIGdsb3NzeTogQm9vbGVhbixcbiAgICBzcHJlYWQ6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjbHMgPSBbICd1bmVsZXZhdGVkJywgJ291dGxpbmUnLCAnZmxhdCcsICdyb3VuZGVkJywgJ3NxdWFyZScsICdwdXNoJywgJ3N0cmV0Y2gnLCAnZ2xvc3N5JyBdXG4gICAgICAgIC5maWx0ZXIodCA9PiBwcm9wc1sgdCBdID09PSB0cnVlKVxuICAgICAgICAubWFwKHQgPT4gYHEtYnRuLWdyb3VwLS0keyB0IH1gKS5qb2luKCcgJylcblxuICAgICAgcmV0dXJuIGBxLWJ0bi1ncm91cCByb3cgbm8td3JhcCR7IGNscy5sZW5ndGggPiAwID8gJyAnICsgY2xzIDogJycgfWBcbiAgICAgICAgKyAocHJvcHMuc3ByZWFkID09PSB0cnVlID8gJyBxLWJ0bi1ncm91cC0tc3ByZWFkJyA6ICcgaW5saW5lJylcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5pbXBvcnQgUUJ0bkdyb3VwIGZyb20gJy4uL2J0bi1ncm91cC9RQnRuR3JvdXAuanMnXG5pbXBvcnQgUU1lbnUgZnJvbSAnLi4vbWVudS9RTWVudS5qcydcblxuaW1wb3J0IHsgZ2V0QnRuRGVzaWduQXR0ciwgdXNlQnRuUHJvcHMgfSBmcm9tICcuLi9idG4vdXNlLWJ0bi5qcydcbmltcG9ydCB7IHVzZVRyYW5zaXRpb25Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRyYW5zaXRpb24uanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi91dGlscy91aWQuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCBidG5Qcm9wc0xpc3QgPSBPYmplY3Qua2V5cyh1c2VCdG5Qcm9wcylcblxuZXhwb3J0IGNvbnN0IHBhc3NCdG5Qcm9wcyA9IHByb3BzID0+IGJ0blByb3BzTGlzdC5yZWR1Y2UoXG4gIChhY2MsIGtleSkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IHByb3BzWyBrZXkgXVxuICAgIGlmICh2YWwgIT09IHZvaWQgMCkge1xuICAgICAgYWNjWyBrZXkgXSA9IHZhbFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0sXG4gIHt9XG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRQnRuRHJvcGRvd24nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlQnRuUHJvcHMsXG4gICAgLi4udXNlVHJhbnNpdGlvblByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZTogQm9vbGVhbixcbiAgICBzcGxpdDogQm9vbGVhbixcbiAgICBkcm9wZG93bkljb246IFN0cmluZyxcblxuICAgIGNvbnRlbnRDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBjb250ZW50U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBjb3ZlcjogQm9vbGVhbixcbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIG5vUm91dGVEaXNtaXNzOiBCb29sZWFuLFxuICAgIGF1dG9DbG9zZTogQm9vbGVhbixcblxuICAgIG1lbnVBbmNob3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdib3R0b20gZW5kJ1xuICAgIH0sXG4gICAgbWVudVNlbGY6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICd0b3AgZW5kJ1xuICAgIH0sXG4gICAgbWVudU9mZnNldDogQXJyYXksXG5cbiAgICBkaXNhYmxlTWFpbkJ0bjogQm9vbGVhbixcbiAgICBkaXNhYmxlRHJvcGRvd246IEJvb2xlYW4sXG5cbiAgICBub0ljb25BbmltYXRpb246IEJvb2xlYW4sXG5cbiAgICB0b2dnbGVBcmlhTGFiZWw6IFN0cmluZ1xuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScsICdjbGljaycsICdiZWZvcmVTaG93JywgJ3Nob3cnLCAnYmVmb3JlSGlkZScsICdoaWRlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYocHJvcHMubW9kZWxWYWx1ZSlcbiAgICBjb25zdCBtZW51UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdGFyZ2V0VWlkID0gdWlkKClcblxuICAgIGNvbnN0IGFyaWFBdHRycyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZScsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGFyZ2V0VWlkLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHByb3BzLnRvZ2dsZUFyaWFMYWJlbCB8fCBwcm94eS4kcS5sYW5nLmxhYmVsWyBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJ2NvbGxhcHNlJyA6ICdleHBhbmQnIF0ocHJvcHMubGFiZWwpXG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZVxuICAgICAgICB8fCAoXG4gICAgICAgICAgKHByb3BzLnNwbGl0ID09PSBmYWxzZSAmJiBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSlcbiAgICAgICAgICB8fCBwcm9wcy5kaXNhYmxlRHJvcGRvd24gPT09IHRydWVcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBpY29uQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtYnRuLWRyb3Bkb3duX19hcnJvdydcbiAgICAgICsgKHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJvcHMubm9JY29uQW5pbWF0aW9uID09PSBmYWxzZSA/ICcgcm90YXRlLTE4MCcgOiAnJylcbiAgICAgICsgKHByb3BzLnNwbGl0ID09PSBmYWxzZSA/ICcgcS1idG4tZHJvcGRvd25fX2Fycm93LWNvbnRhaW5lcicgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBidG5EZXNpZ25BdHRyID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduQXR0cihwcm9wcykpXG4gICAgY29uc3QgYnRuUHJvcHMgPSBjb21wdXRlZCgoKSA9PiBwYXNzQnRuUHJvcHMocHJvcHMpKVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgdmFsID0+IHtcbiAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZVsgdmFsID8gJ3Nob3cnIDogJ2hpZGUnIF0oKVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zcGxpdCwgaGlkZSlcblxuICAgIGZ1bmN0aW9uIG9uQmVmb3JlU2hvdyAoZSkge1xuICAgICAgc2hvd2luZy52YWx1ZSA9IHRydWVcbiAgICAgIGVtaXQoJ2JlZm9yZVNob3cnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2hvdyAoZSkge1xuICAgICAgZW1pdCgnc2hvdycsIGUpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25CZWZvcmVIaWRlIChlKSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIGVtaXQoJ2JlZm9yZUhpZGUnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoZSkge1xuICAgICAgZW1pdCgnaGlkZScsIGUpXG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIGZhbHNlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2sgKGUpIHtcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrSGlkZSAoZSkge1xuICAgICAgc3RvcChlKVxuICAgICAgaGlkZSgpXG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlIChldnQpIHtcbiAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZS50b2dnbGUoZXZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3cgKGV2dCkge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLnNob3coZXZ0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGUgKGV2dCkge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLmhpZGUoZXZ0KVxuICAgIH1cblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIHNob3csIGhpZGUsIHRvZ2dsZVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBzaG93KClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IEFycm93ID0gW1xuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6IGljb25DbGFzcy52YWx1ZSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5kcm9wZG93bkljb24gfHwgcHJveHkuJHEuaWNvblNldC5hcnJvdy5kcm9wZG93blxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBwcm9wcy5kaXNhYmxlRHJvcGRvd24gIT09IHRydWUgJiYgQXJyb3cucHVzaChcbiAgICAgICAgaChRTWVudSwge1xuICAgICAgICAgIHJlZjogbWVudVJlZixcbiAgICAgICAgICBpZDogdGFyZ2V0VWlkLFxuICAgICAgICAgIGNsYXNzOiBwcm9wcy5jb250ZW50Q2xhc3MsXG4gICAgICAgICAgc3R5bGU6IHByb3BzLmNvbnRlbnRTdHlsZSxcbiAgICAgICAgICBjb3ZlcjogcHJvcHMuY292ZXIsXG4gICAgICAgICAgZml0OiB0cnVlLFxuICAgICAgICAgIHBlcnNpc3RlbnQ6IHByb3BzLnBlcnNpc3RlbnQsXG4gICAgICAgICAgbm9Sb3V0ZURpc21pc3M6IHByb3BzLm5vUm91dGVEaXNtaXNzLFxuICAgICAgICAgIGF1dG9DbG9zZTogcHJvcHMuYXV0b0Nsb3NlLFxuICAgICAgICAgIGFuY2hvcjogcHJvcHMubWVudUFuY2hvcixcbiAgICAgICAgICBzZWxmOiBwcm9wcy5tZW51U2VsZixcbiAgICAgICAgICBvZmZzZXQ6IHByb3BzLm1lbnVPZmZzZXQsXG4gICAgICAgICAgc2VwYXJhdGVDbG9zZVBvcHVwOiB0cnVlLFxuICAgICAgICAgIHRyYW5zaXRpb25TaG93OiBwcm9wcy50cmFuc2l0aW9uU2hvdyxcbiAgICAgICAgICB0cmFuc2l0aW9uSGlkZTogcHJvcHMudHJhbnNpdGlvbkhpZGUsXG4gICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgICAgb25CZWZvcmVTaG93LFxuICAgICAgICAgIG9uU2hvdyxcbiAgICAgICAgICBvbkJlZm9yZUhpZGUsXG4gICAgICAgICAgb25IaWRlXG4gICAgICAgIH0sIHNsb3RzLmRlZmF1bHQpXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9wcy5zcGxpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGgoUUJ0biwge1xuICAgICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd24gcS1idG4tZHJvcGRvd24tLXNpbXBsZScsXG4gICAgICAgICAgLi4uYnRuUHJvcHMudmFsdWUsXG4gICAgICAgICAgLi4uYXJpYUF0dHJzLnZhbHVlLFxuICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMuZGlzYWJsZU1haW5CdG4gPT09IHRydWUsXG4gICAgICAgICAgbm9XcmFwOiB0cnVlLFxuICAgICAgICAgIHJvdW5kOiBmYWxzZSxcbiAgICAgICAgICBvbkNsaWNrXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiBoU2xvdChzbG90cy5sYWJlbCwgW10pLmNvbmNhdChBcnJvdyksXG4gICAgICAgICAgbG9hZGluZzogc2xvdHMubG9hZGluZ1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChRQnRuR3JvdXAsIHtcbiAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93biBxLWJ0bi1kcm9wZG93bi0tc3BsaXQgbm8td3JhcCBxLWJ0bi1pdGVtJyxcbiAgICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCxcbiAgICAgICAgc3F1YXJlOiBwcm9wcy5zcXVhcmUsXG4gICAgICAgIC4uLmJ0bkRlc2lnbkF0dHIudmFsdWUsXG4gICAgICAgIGdsb3NzeTogcHJvcHMuZ2xvc3N5LFxuICAgICAgICBzdHJldGNoOiBwcm9wcy5zdHJldGNoXG4gICAgICB9LCAoKSA9PiBbXG4gICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd24tLWN1cnJlbnQnLFxuICAgICAgICAgIC4uLmJ0blByb3BzLnZhbHVlLFxuICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMuZGlzYWJsZU1haW5CdG4gPT09IHRydWUsXG4gICAgICAgICAgbm9XcmFwOiB0cnVlLFxuICAgICAgICAgIHJvdW5kOiBmYWxzZSxcbiAgICAgICAgICBvbkNsaWNrOiBvbkNsaWNrSGlkZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogc2xvdHMubGFiZWwsXG4gICAgICAgICAgbG9hZGluZzogc2xvdHMubG9hZGluZ1xuICAgICAgICB9KSxcblxuICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICBjbGFzczogJ3EtYnRuLWRyb3Bkb3duX19hcnJvdy1jb250YWluZXIgcS1hbmNob3ItLXNraXAnLFxuICAgICAgICAgIC4uLmFyaWFBdHRycy52YWx1ZSxcbiAgICAgICAgICAuLi5idG5EZXNpZ25BdHRyLnZhbHVlLFxuICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgcHJvcHMuZGlzYWJsZURyb3Bkb3duID09PSB0cnVlLFxuICAgICAgICAgIHJvdW5kZWQ6IHByb3BzLnJvdW5kZWQsXG4gICAgICAgICAgY29sb3I6IHByb3BzLmNvbG9yLFxuICAgICAgICAgIHRleHRDb2xvcjogcHJvcHMudGV4dENvbG9yLFxuICAgICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgICBzaXplOiBwcm9wcy5zaXplLFxuICAgICAgICAgIHBhZGRpbmc6IHByb3BzLnBhZGRpbmcsXG4gICAgICAgICAgcmlwcGxlOiBwcm9wcy5yaXBwbGVcbiAgICAgICAgfSwgKCkgPT4gQXJyb3cpXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uTW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlLCBuZXh0VGljaywgcHJvdmlkZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBmb3JtS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuaW1wb3J0IHsgdm1Jc0Rlc3Ryb3llZCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvdm0uanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRm9ybScsXG5cbiAgcHJvcHM6IHtcbiAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgbm9FcnJvckZvY3VzOiBCb29sZWFuLFxuICAgIG5vUmVzZXRGb2N1czogQm9vbGVhbixcbiAgICBncmVlZHk6IEJvb2xlYW4sXG5cbiAgICBvblN1Ym1pdDogRnVuY3Rpb25cbiAgfSxcblxuICBlbWl0czogWyAncmVzZXQnLCAndmFsaWRhdGlvblN1Y2Nlc3MnLCAndmFsaWRhdGlvbkVycm9yJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGxldCB2YWxpZGF0ZUluZGV4ID0gMFxuICAgIGNvbnN0IHJlZ2lzdGVyZWRDb21wb25lbnRzID0gW11cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlIChzaG91bGRGb2N1cykge1xuICAgICAgY29uc3QgZm9jdXMgPSB0eXBlb2Ygc2hvdWxkRm9jdXMgPT09ICdib29sZWFuJ1xuICAgICAgICA/IHNob3VsZEZvY3VzXG4gICAgICAgIDogcHJvcHMubm9FcnJvckZvY3VzICE9PSB0cnVlXG5cbiAgICAgIGNvbnN0IGluZGV4ID0gKyt2YWxpZGF0ZUluZGV4XG5cbiAgICAgIGNvbnN0IGVtaXRFdmVudCA9IChyZXMsIHJlZikgPT4ge1xuICAgICAgICBlbWl0KCd2YWxpZGF0aW9uJyArIChyZXMgPT09IHRydWUgPyAnU3VjY2VzcycgOiAnRXJyb3InKSwgcmVmKVxuICAgICAgfVxuXG4gICAgICBjb25zdCB2YWxpZGF0ZUNvbXBvbmVudCA9IGNvbXAgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZCA9IGNvbXAudmFsaWRhdGUoKVxuXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsaWQudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgID8gdmFsaWQudGhlbihcbiAgICAgICAgICAgIHZhbGlkID0+ICh7IHZhbGlkLCBjb21wIH0pLFxuICAgICAgICAgICAgZXJyID0+ICh7IHZhbGlkOiBmYWxzZSwgY29tcCwgZXJyIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKHsgdmFsaWQsIGNvbXAgfSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXJyb3JzUHJvbWlzZSA9IHByb3BzLmdyZWVkeSA9PT0gdHJ1ZVxuICAgICAgICA/IFByb21pc2VcbiAgICAgICAgICAuYWxsKHJlZ2lzdGVyZWRDb21wb25lbnRzLm1hcCh2YWxpZGF0ZUNvbXBvbmVudCkpXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5maWx0ZXIociA9PiByLnZhbGlkICE9PSB0cnVlKSlcbiAgICAgICAgOiByZWdpc3RlcmVkQ29tcG9uZW50c1xuICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAoYWNjLCBjb21wKSA9PiBhY2MudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZUNvbXBvbmVudChjb21wKS50aGVuKHIgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyLnZhbGlkID09PSBmYWxzZSkgeyByZXR1cm4gUHJvbWlzZS5yZWplY3QocikgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgIClcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gWyBlcnJvciBdKVxuXG4gICAgICByZXR1cm4gZXJyb3JzUHJvbWlzZS50aGVuKGVycm9ycyA9PiB7XG4gICAgICAgIGlmIChlcnJvcnMgPT09IHZvaWQgMCB8fCBlcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaW5kZXggPT09IHZhbGlkYXRlSW5kZXggJiYgZW1pdEV2ZW50KHRydWUpXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIG5vdCBvdXRkYXRlZCBhbHJlYWR5XG4gICAgICAgIGlmIChpbmRleCA9PT0gdmFsaWRhdGVJbmRleCkge1xuICAgICAgICAgIGNvbnN0IHsgY29tcCwgZXJyIH0gPSBlcnJvcnNbIDAgXVxuXG4gICAgICAgICAgZXJyICE9PSB2b2lkIDAgJiYgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgZW1pdEV2ZW50KGZhbHNlLCBjb21wKVxuXG4gICAgICAgICAgaWYgKGZvY3VzID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gZm9jdXMgZmlyc3QgbW91bnRlZCBhbmQgYWN0aXZlIGNvbXBvbmVudFxuICAgICAgICAgICAgY29uc3QgYWN0aXZlRXJyb3IgPSBlcnJvcnMuZmluZCgoeyBjb21wIH0pID0+IChcbiAgICAgICAgICAgICAgdHlwZW9mIGNvbXAuZm9jdXMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgJiYgdm1Jc0Rlc3Ryb3llZChjb21wLiQpID09PSBmYWxzZVxuICAgICAgICAgICAgKSlcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUVycm9yICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgYWN0aXZlRXJyb3IuY29tcC5mb2N1cygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbiAoKSB7XG4gICAgICB2YWxpZGF0ZUluZGV4KytcblxuICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHMuZm9yRWFjaChjb21wID0+IHtcbiAgICAgICAgdHlwZW9mIGNvbXAucmVzZXRWYWxpZGF0aW9uID09PSAnZnVuY3Rpb24nICYmIGNvbXAucmVzZXRWYWxpZGF0aW9uKClcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3VibWl0IChldnQpIHtcbiAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgY29uc3QgaW5kZXggPSB2YWxpZGF0ZUluZGV4ICsgMVxuXG4gICAgICB2YWxpZGF0ZSgpLnRoZW4odmFsID0+IHtcbiAgICAgICAgLy8gaWYgbm90IG91dGRhdGVkICYmIHZhbGlkYXRpb24gc3VjY2VlZGVkXG4gICAgICAgIGlmIChpbmRleCA9PT0gdmFsaWRhdGVJbmRleCAmJiB2YWwgPT09IHRydWUpIHtcbiAgICAgICAgICBpZiAocHJvcHMub25TdWJtaXQgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgZW1pdCgnc3VibWl0JywgZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChldnQgIT09IHZvaWQgMCAmJiBldnQudGFyZ2V0ICE9PSB2b2lkIDAgJiYgdHlwZW9mIGV2dC50YXJnZXQuc3VibWl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBldnQudGFyZ2V0LnN1Ym1pdCgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0IChldnQpIHtcbiAgICAgIGV2dCAhPT0gdm9pZCAwICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgZW1pdCgncmVzZXQnKVxuXG4gICAgICBuZXh0VGljaygoKSA9PiB7IC8vIGFsbG93IHVzZXJsYW5kIHRvIHJlc2V0IHZhbHVlcyBiZWZvcmVcbiAgICAgICAgcmVzZXRWYWxpZGF0aW9uKClcbiAgICAgICAgaWYgKHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1Jlc2V0Rm9jdXMgIT09IHRydWUpIHtcbiAgICAgICAgICBmb2N1cygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9jdXMgKCkge1xuICAgICAgYWRkRm9jdXNGbigoKSA9PiB7XG4gICAgICAgIGlmIChyb290UmVmLnZhbHVlID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXVt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c11bdGFiaW5kZXhdJylcbiAgICAgICAgICB8fCByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdIFt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c10gW3RhYmluZGV4XScpXG4gICAgICAgICAgfHwgcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXSwgW2RhdGEtYXV0b2ZvY3VzXScpXG4gICAgICAgICAgfHwgQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChyb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF0nKSwgZWwgPT4gZWwudGFiSW5kZXggPiAtMSlcblxuICAgICAgICB0YXJnZXQgIT09IG51bGwgJiYgdGFyZ2V0ICE9PSB2b2lkIDAgJiYgdGFyZ2V0LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBwcm92aWRlKGZvcm1LZXksIHtcbiAgICAgIGJpbmRDb21wb25lbnQgKHZtUHJveHkpIHtcbiAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHMucHVzaCh2bVByb3h5KVxuICAgICAgfSxcblxuICAgICAgdW5iaW5kQ29tcG9uZW50ICh2bVByb3h5KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcmVnaXN0ZXJlZENvbXBvbmVudHMuaW5kZXhPZih2bVByb3h5KVxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBsZXQgc2hvdWxkQWN0aXZhdGUgPSBmYWxzZVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBzaG91bGRBY3RpdmF0ZSA9IHRydWVcbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2hvdWxkQWN0aXZhdGUgPT09IHRydWUgJiYgcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlICYmIGZvY3VzKClcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBmb2N1cygpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHZhbGlkYXRlLFxuICAgICAgcmVzZXRWYWxpZGF0aW9uLFxuICAgICAgc3VibWl0LFxuICAgICAgcmVzZXQsXG4gICAgICBmb2N1cyxcbiAgICAgIGdldFZhbGlkYXRpb25Db21wb25lbnRzOiAoKSA9PiByZWdpc3RlcmVkQ29tcG9uZW50c1xuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZm9ybScsIHtcbiAgICAgIGNsYXNzOiAncS1mb3JtJyxcbiAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgIG9uU3VibWl0OiBzdWJtaXQsXG4gICAgICBvblJlc2V0OiByZXNldFxuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgICBwb3NpdGlvbj1cInRvcFwiXG5cbiAgICB2LW1vZGVsPVwic2hvd1wiXG4gID5cbiAgICA8cS1jYXJkIGJvcmRlcmVkIGNsYXNzPVwicS1tdC1sZ1wiIHN0eWxlPVwid2lkdGg6IDcwMHB4OyBtYXgtd2lkdGg6IDgwdnc7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsNjYsNjYsMC45Nyk7IFwiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPkNyZWF0ZSBBY2NvdW50PC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtbWRcIj5cblxuICAgICAgICAgIDxxLWZvcm1cbiAgICAgICAgICAgIEBzdWJtaXQ9XCJvblN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzcz1cInEtZ3V0dGVyLW1kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgICBoaW50PVwiNC0xNiBBbHBoYW51bWVyaWMgQ2hhcmFjdGVyc1wiXG5cbiAgICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgICA6cnVsZXM9XCJbXG4gICAgICAgICAgICAgICAgdmFsID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICh2YWwubGVuZ3RoIDwgNCB8fCB2YWwubGVuZ3RoID4gMTYpXG4gICAgICAgICAgICAgICAgICAgIHsgcmV0dXJuICdVc2VybmFtZSBtdXN0IGJlIGJldHdlZW4gNC0xNiBjaGFyYWN0ZXJzJ31cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCF1c2VybmFtZVZhbGlkYXRvci50ZXN0KHZhbCkpXG4gICAgICAgICAgICAgICAgICAgIHsgcmV0dXJuICdVc2VybmFtZSBtdXN0IG9ubHkgY29uc2lzdCBvZiBBbHBoYW51bWVyaWMgY2hhcmFjdGVycycgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH0gXVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBoaW50PVwiQmV0d2VlbiA2IC0gNjQgY2hhcmFjdGVyc1wiXG5cbiAgICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgICA6cnVsZXM9XCJbIHZhbCA9PiBwYXNzd29yZFZhbGlkYXRvci50ZXN0KHZhbCkgfHwgJ1Bhc3N3b3JkIG11c3QgYmUgYmV0d2VlbiA2IC0gNjQgY2hhcmFjdGVycycgXVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICBkYXJrXG4gICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFJlcGVhdFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmQgKFJlcGVhdClcIlxuXG4gICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgOnJ1bGVzPVwiWyB2YWwgPT4gdmFsID09PSBwYXNzd29yZCB8fCAnUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2gnIF1cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHEtYnRuIGxhYmVsPVwiQ3JlYXRlIEFjY291bnRcIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJmdWxsLXdpZHRoIGJnLWJsYWNrLWEtNzVcIiBzaXplPVwibGdcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3EtZm9ybT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnR9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdSZWdpc3RyYXRpb25Nb2RhbCdcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7VXNlckFwaSwgUmVnaXN0ZXJSZXF1ZXN0LCBQcm9ibGVtRGV0YWlsc30gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHtRRGlhbG9nLCB1c2VRdWFzYXJ9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuXG5jb25zdCBzaG93ID0gcmVmKGZhbHNlKTtcblxuY29uc3QgYXBpQ29uZmlnID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoZmFsc2UpO1xuY29uc3QgdXNlckFwaSA9IG5ldyBVc2VyQXBpKGFwaUNvbmZpZyk7XG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBvblN1Ym1pdCA9IChldnQ6IFN1Ym1pdEV2ZW50KSA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHBheWxvYWQ6IFJlZ2lzdGVyUmVxdWVzdCA9IHtcbiAgICB1c2VyQ3JlZGVudGlhbHNEdG86IHtcbiAgICAgIHVzZXJOYW1lOiB1c2VybmFtZS52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC52YWx1ZVxuICAgIH1cbiAgfTtcblxuICB1c2VyQXBpLnJlZ2lzdGVyKHBheWxvYWQpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgbWVzc2FnZTogJ0FjY291bnQgQ3JlYXRlZCcsXG4gICAgICAgIGNvbG9yOiAncG9zaXRpdmUnLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIHRpbWVvdXQ6IDcwMDBcbiAgICAgIH0pO1xuICAgICAgc2hvdy52YWx1ZSA9IGZhbHNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZXN1bHQpID0+IHJlc3VsdC5yZXNwb25zZS5qc29uKCkudGhlbigocjogUHJvYmxlbURldGFpbHMpID0+IHtcbiAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgIG1lc3NhZ2U6IHIuZGV0YWlsISxcbiAgICAgICAgY29sb3I6ICduZWdhdGl2ZScsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgY2FwdGlvbjogJ0Vycm9yIHdoZW4gY3JlYXRpbmcgYW4gYWNjb3VudCcsXG4gICAgICAgIHRpbWVvdXQ6IDcwMDBcbiAgICAgIH0pO1xuICAgIH0pKTtcbn07XG5cbmNvbnN0IHVzZXJuYW1lVmFsaWRhdG9yID0gbmV3IFJlZ0V4cCgnXltBLVphLXpcXFxcZFxcXFwtXy5dezQsMTZ9JCcpO1xuY29uc3QgcGFzc3dvcmRWYWxpZGF0b3IgPSBuZXcgUmVnRXhwKCdeLns2LDY0fSQnKTtcblxuY29uc3QgdXNlcm5hbWUgPSByZWYoKTtcbmNvbnN0IHBhc3N3b3JkID0gcmVmKCk7XG5jb25zdCBwYXNzd29yZFJlcGVhdCA9IHJlZigpO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHYtbW9kZWw9XCJzaG93XCJcblxuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgPlxuICAgIDxxLWNhcmQgYm9yZGVyZWQgY2xhc3M9XCJxLW10LWxnXCIgc3R5bGU9XCJ3aWR0aDogNzAwcHg7IG1heC13aWR0aDogODB2dzsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2Niw2Niw2NiwwLjk3KTsgXCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+TG9naW48L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxuXG4gICAgICAgICAgPHEtZm9ybVxuICAgICAgICAgICAgQHN1Ym1pdD1cIm9uU3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1ndXR0ZXItbWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxxLWJ0biBsYWJlbD1cIkxvZ2luXCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiZnVsbC13aWR0aFwiIHNpemU9XCJsZ1wiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjIpXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cS1zZXBhcmF0b3I+PC9xLXNlcGFyYXRvcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZ1bGwtaGVpZ2h0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gPGEgQGNsaWNrPVwic2hvd1JlZ2lzdGVyRGlhbG9nXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY3Vyc29yOiBwb2ludGVyO1wiPkNyZWF0ZSBBY2NvdW50PC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLWZvcm0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50fSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTG9naW5Nb2RhbCdcbn0pO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7dXNlUXVhc2FyfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbk1vZGFsIGZyb20gJ2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uTW9kYWwudnVlJztcbmltcG9ydCB7TG9naW5SZXF1ZXN0LCBMb2dpblJlc3VsdCwgUHJvYmxlbURldGFpbHMsIFVzZXJBcGl9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7dXNlQXV0aFN0b3JlfSBmcm9tICdzdG9yZXMvYXV0aERhdGFTdG9yZSc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuXG5jb25zdCB7IHNldEF1dGhGcm9tTG9naW5SZXN1bHQgfSA9IHVzZUF1dGhTdG9yZSgpO1xuXG5jb25zdCBzaG93ID0gcmVmKGZhbHNlKTtcblxuY29uc3QgYXBpQ29uZmlnID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoZmFsc2UpO1xuY29uc3QgdXNlckFwaSA9IG5ldyBVc2VyQXBpKGFwaUNvbmZpZyk7XG5cbmNvbnN0IG9uU3VibWl0ID0gKGV2dDogU3VibWl0RXZlbnQgfCBFdmVudCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBwYXlsb2FkOiBMb2dpblJlcXVlc3QgPSB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvOiB7XG4gICAgICB1c2VyTmFtZTogdXNlcm5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQudmFsdWVcbiAgICB9XG4gIH07XG5cbiAgdXNlckFwaS5sb2dpbihwYXlsb2FkKVxuICAgIC50aGVuKChyZXN1bHQ6IExvZ2luUmVzdWx0KSA9PiB7XG4gICAgICAkcS5ub3RpZnkoe1xuICAgICAgICBtZXNzYWdlOiAnTG9nZ2VkIGluJyxcbiAgICAgICAgY29sb3I6ICdwb3NpdGl2ZScsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgdGltZW91dDogNzAwMFxuICAgICAgfSk7XG5cbiAgICAgIHNldEF1dGhGcm9tTG9naW5SZXN1bHQocmVzdWx0KTtcblxuICAgICAgc2hvdy52YWx1ZSA9IGZhbHNlO1xuICAgIH0pXG4gICAgLmNhdGNoKChyZXN1bHQpID0+IHJlc3VsdC5yZXNwb25zZS5qc29uKCkudGhlbigocjogUHJvYmxlbURldGFpbHMpID0+IHtcbiAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgIG1lc3NhZ2U6IHIuZGV0YWlsISxcbiAgICAgICAgY29sb3I6ICduZWdhdGl2ZScsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgY2FwdGlvbjogJ0Vycm9yIHdoZW4gbG9nZ2luZyBpbicsXG4gICAgICAgIHRpbWVvdXQ6IDcwMDBcbiAgICAgIH0pO1xuICAgIH0pKTtcbn07XG5cbmNvbnN0IHVzZXJuYW1lID0gcmVmKCk7XG5jb25zdCBwYXNzd29yZCA9IHJlZigpO1xuXG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBzaG93UmVnaXN0ZXJEaWFsb2cgPSAoKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBSZWdpc3RyYXRpb25Nb2RhbFxuICB9KTtcbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicS1teC1tZFwiPlxuICAgIDxkaXY+XG4gICAgICA8cS1idG4gdi1pZj1cIiFpc0xvZ2dlZEluUmVhY3RpdmVcIiBAY2xpY2s9XCJzaG93TG9naW5EaWFsb2dcIiBvdXRsaW5lIHRleHQtY29sb3I9XCJ3aGl0ZVwiIGxhYmVsPVwiTG9naW5cIiBzaXplPVwibWRcIiBzdHlsZT1cIndpZHRoOiAxMDBweFwiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8cS1idG4tZHJvcGRvd24gdi1pZj1cImlzTG9nZ2VkSW5SZWFjdGl2ZVwiIHJvdW5kZWQgOmxhYmVsPVwiY3VycmVudFVzZXJcIiBzdHlsZT1cIndpZHRoOiAxNTBweFwiPlxuICAgICAgPHEtbGlzdD5cbiAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkFjY291bnQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICA8cS1zZXBhcmF0b3IgY2xhc3M9XCJxLW15LXNtXCIgLz5cblxuICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwIEBjbGljaz1cImxvZ291dFwiPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+TG9nb3V0PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgIDwvcS1saXN0PlxuICAgIDwvcS1idG4tZHJvcGRvd24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJ2NvbXBvbmVudHMvTG9naW5Nb2RhbC52dWUnXG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7dXNlQXV0aFN0b3JlfSBmcm9tICdzdG9yZXMvYXV0aERhdGFTdG9yZSc7XG5pbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtBdXRoQXBpLCBVc2VyQXBpfSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gXCJzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXJcIjtcbmltcG9ydCB7YmlBd2FyZH0gZnJvbSBcIkBxdWFzYXIvZXh0cmFzL2Jvb3RzdHJhcC1pY29uc1wiO1xuXG5jb25zdCB1c2VyQXBpID0gbmV3IFVzZXJBcGkoQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKSk7XG5cbmNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuXG5jb25zdCBpc0xvZ2dlZEluUmVhY3RpdmUgPSBjb21wdXRlZCgoKSA9PiBhdXRoU3RvcmUuaXNMb2dnZWRJbik7XG5jb25zdCBjdXJyZW50VXNlciA9IGNvbXB1dGVkKCgpID0+IGF1dGhTdG9yZS5nZXRVc2VybmFtZSk7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCBzaG93TG9naW5EaWFsb2cgPSAoKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBMb2dpbk1vZGFsXG4gIH0pO1xufVxuXG5jb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gIGlmICghYXV0aFN0b3JlLnJlZnJlc2hUb2tlbikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCByZXN1bHQgPSBhd2FpdCB1c2VyQXBpLmFwaVVzZXJMb2dvdXRQb3N0KHsgYm9keTogYXV0aFN0b3JlLnJlZnJlc2hUb2tlbiB9KTtcbiAgJHEubm90aWZ5KHtcbiAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgdHlwZTogJ3Bvc2l0aXZlJyxcbiAgICBtZXNzYWdlOiAnTG9nZ2VkIE91dCdcbiAgfSk7XG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIGluamVjdCwgb25CZWZvcmVVbm1vdW50LCBvbk1vdW50ZWQsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvUmlwcGxlLmpzJ1xuXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUsIHNob3VsZElnbm9yZUtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuaW1wb3J0IHsgdGFic0tleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL3V0aWxzL3VpZC5qcydcbmltcG9ydCB7IGlzRGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMuanMnXG5cbmxldCBpZCA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZVRhYkVtaXRzID0gWyAnY2xpY2snLCAna2V5ZG93bicgXVxuXG5leHBvcnQgY29uc3QgdXNlVGFiUHJvcHMgPSB7XG4gIGljb246IFN0cmluZyxcbiAgbGFiZWw6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICBhbGVydDogWyBCb29sZWFuLCBTdHJpbmcgXSxcbiAgYWxlcnRJY29uOiBTdHJpbmcsXG5cbiAgbmFtZToge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAoKSA9PiBgdF8keyBpZCsrIH1gXG4gIH0sXG5cbiAgbm9DYXBzOiBCb29sZWFuLFxuXG4gIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG4gIGRpc2FibGU6IEJvb2xlYW4sXG5cbiAgY29udGVudENsYXNzOiBTdHJpbmcsXG5cbiAgcmlwcGxlOiB7XG4gICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBzbG90cywgZW1pdCwgcm91dGVEYXRhKSB7XG4gIGNvbnN0ICR0YWJzID0gaW5qZWN0KHRhYnNLZXksIGVtcHR5UmVuZGVyRm4pXG4gIGlmICgkdGFicyA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1FUYWIvUVJvdXRlVGFiIGNvbXBvbmVudCBuZWVkcyB0byBiZSBjaGlsZCBvZiBRVGFicycpXG4gICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgfVxuXG4gIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgY29uc3QgYmx1clRhcmdldFJlZiA9IHJlZihudWxsKVxuICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gIGNvbnN0IHRhYkluZGljYXRvclJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHJpcHBsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLnJpcHBsZSA9PT0gZmFsc2VcbiAgICAgID8gZmFsc2VcbiAgICAgIDogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgeyBrZXlDb2RlczogWyAxMywgMzIgXSwgZWFybHk6IHRydWUgfSxcbiAgICAgICAgcHJvcHMucmlwcGxlID09PSB0cnVlID8ge30gOiBwcm9wcy5yaXBwbGVcbiAgICAgIClcbiAgKSlcblxuICBjb25zdCBpc0FjdGl2ZSA9IGNvbXB1dGVkKCgpID0+ICR0YWJzLmN1cnJlbnRNb2RlbC52YWx1ZSA9PT0gcHJvcHMubmFtZSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS10YWIgcmVsYXRpdmUtcG9zaXRpb24gc2VsZi1zdHJldGNoIGZsZXggZmxleC1jZW50ZXIgdGV4dC1jZW50ZXInXG4gICAgKyAoXG4gICAgICBpc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IChcbiAgICAgICAgICAgICcgcS10YWItLWFjdGl2ZSdcbiAgICAgICAgICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNsYXNzID8gJyAnICsgJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQ2xhc3MgOiAnJylcbiAgICAgICAgICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNvbG9yID8gYCB0ZXh0LSR7ICR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNvbG9yIH1gIDogJycpXG4gICAgICAgICAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVCZ0NvbG9yID8gYCBiZy0keyAkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVCZ0NvbG9yIH1gIDogJycpXG4gICAgICAgICAgKVxuICAgICAgICA6ICcgcS10YWItLWluYWN0aXZlJ1xuICAgIClcbiAgICArIChwcm9wcy5pY29uICYmIHByb3BzLmxhYmVsICYmICR0YWJzLnRhYlByb3BzLnZhbHVlLmlubGluZUxhYmVsID09PSBmYWxzZSA/ICcgcS10YWItLWZ1bGwnIDogJycpXG4gICAgKyAocHJvcHMubm9DYXBzID09PSB0cnVlIHx8ICR0YWJzLnRhYlByb3BzLnZhbHVlLm5vQ2FwcyA9PT0gdHJ1ZSA/ICcgcS10YWItLW5vLWNhcHMnIDogJycpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJyBxLWZvY3VzYWJsZSBxLWhvdmVyYWJsZSBjdXJzb3ItcG9pbnRlcicpXG4gICAgKyAocm91dGVEYXRhICE9PSB2b2lkIDAgPyByb3V0ZURhdGEubGlua0NsYXNzLnZhbHVlIDogJycpXG4gIClcblxuICBjb25zdCBpbm5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS10YWJfX2NvbnRlbnQgc2VsZi1zdHJldGNoIGZsZXgtY2VudGVyIHJlbGF0aXZlLXBvc2l0aW9uIHEtYW5jaG9yLS1za2lwIG5vbi1zZWxlY3RhYmxlICdcbiAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5pbmxpbmVMYWJlbCA9PT0gdHJ1ZSA/ICdyb3cgbm8td3JhcCBxLXRhYl9fY29udGVudC0taW5saW5lJyA6ICdjb2x1bW4nKVxuICAgICsgKHByb3BzLmNvbnRlbnRDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5jb250ZW50Q2xhc3MgfWAgOiAnJylcbiAgKVxuXG4gIGNvbnN0IHRhYkluZGV4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgIHx8ICR0YWJzLmhhc0ZvY3VzLnZhbHVlID09PSB0cnVlXG4gICAgICB8fCAoaXNBY3RpdmUudmFsdWUgPT09IGZhbHNlICYmICR0YWJzLmhhc0FjdGl2ZVRhYi52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG4gICAgICA/IC0xXG4gICAgICA6IHByb3BzLnRhYmluZGV4IHx8IDBcbiAgKSlcblxuICBmdW5jdGlvbiBvbkNsaWNrIChlLCBrZXlib2FyZCkge1xuICAgIGlmIChrZXlib2FyZCAhPT0gdHJ1ZSAmJiBibHVyVGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBibHVyVGFyZ2V0UmVmLnZhbHVlLmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gd2Ugc2hvdWxkIGhpbmRlciBuYXRpdmUgbmF2aWdhdGlvbiB0aG91Z2hcbiAgICAgIGlmIChyb3V0ZURhdGEgIT09IHZvaWQgMCAmJiByb3V0ZURhdGEuaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZG8gd2UgaGF2ZSBhIFFUYWI/XG4gICAgaWYgKHJvdXRlRGF0YSA9PT0gdm9pZCAwKSB7XG4gICAgICAkdGFicy51cGRhdGVNb2RlbCh7IG5hbWU6IHByb3BzLm5hbWUgfSlcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZURhdGEuaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZ28gPSAob3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIGlmIHJlcXVpcmluZyB0byBnbyB0byBhbm90aGVyIHJvdXRlLCB0aGVuIHdlXG4gICAgICAgIC8vIGxldCB0aGUgUVRhYnMgcm91dGUgd2F0Y2hlciBkbyBpdHMgam9iLFxuICAgICAgICAvLyBvdGhlcndpc2UgZGlyZWN0bHkgc2VsZWN0IHRoaXNcbiAgICAgICAgbGV0IGhhcmRFcnJvclxuICAgICAgICBjb25zdCByZXFJZCA9IG9wdHMudG8gPT09IHZvaWQgMCB8fCBpc0RlZXBFcXVhbChvcHRzLnRvLCBwcm9wcy50bykgPT09IHRydWVcbiAgICAgICAgICA/ICgkdGFicy5hdm9pZFJvdXRlV2F0Y2hlciA9IHVpZCgpKVxuICAgICAgICAgIDogbnVsbFxuXG4gICAgICAgIHJldHVybiByb3V0ZURhdGEubmF2aWdhdGVUb1JvdXRlckxpbmsoZSwgeyAuLi5vcHRzLCByZXR1cm5Sb3V0ZXJFcnJvcjogdHJ1ZSB9KVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4geyBoYXJkRXJyb3IgPSBlcnIgfSlcbiAgICAgICAgICAudGhlbihzb2Z0RXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcUlkID09PSAkdGFicy5hdm9pZFJvdXRlV2F0Y2hlcikge1xuICAgICAgICAgICAgICAkdGFicy5hdm9pZFJvdXRlV2F0Y2hlciA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgLy8gaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgaGFyZCBlcnJvcnMgb3IgYW55IHNvZnQgZXJyb3JzLCBleGNlcHQgZm9yXG4gICAgICAgICAgICAgIC8vIHdoZW4gbmF2aWdhdGluZyB0byB0aGUgc2FtZSByb3V0ZSAob24gYWxsIG90aGVyIHNvZnQgZXJyb3JzLFxuICAgICAgICAgICAgICAvLyBsaWtlIHdoZW4gbmF2aWdhdGlvbiB3YXMgYWJvcnRlZCBpbiBhIG5hdiBndWFyZCwgd2UgZG9uJ3QgYWN0aXZhdGUgdGhpcyB0YWIpXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBoYXJkRXJyb3IgPT09IHZvaWQgMCAmJiAoXG4gICAgICAgICAgICAgICAgICBzb2Z0RXJyb3IgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgfHwgc29mdEVycm9yLm1lc3NhZ2Uuc3RhcnRzV2l0aCgnQXZvaWRlZCByZWR1bmRhbnQgbmF2aWdhdGlvbicpID09PSB0cnVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkdGFicy51cGRhdGVNb2RlbCh7IG5hbWU6IHByb3BzLm5hbWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0cy5yZXR1cm5Sb3V0ZXJFcnJvciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gaGFyZEVycm9yICE9PSB2b2lkIDAgPyBQcm9taXNlLnJlamVjdChoYXJkRXJyb3IpIDogc29mdEVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnY2xpY2snLCBlLCBnbylcbiAgICAgIGUuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSAmJiBnbygpXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93biAoZSkge1xuICAgIGlmIChpc0tleUNvZGUoZSwgWyAxMywgMzIgXSkpIHtcbiAgICAgIG9uQ2xpY2soZSwgdHJ1ZSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBzaG91bGRJZ25vcmVLZXkoZSkgIT09IHRydWVcbiAgICAgICYmIGUua2V5Q29kZSA+PSAzNVxuICAgICAgJiYgZS5rZXlDb2RlIDw9IDQwXG4gICAgICAmJiBlLmFsdEtleSAhPT0gdHJ1ZVxuICAgICAgJiYgZS5tZXRhS2V5ICE9PSB0cnVlXG4gICAgKSB7XG4gICAgICAkdGFicy5vbktiZE5hdmlnYXRlKGUua2V5Q29kZSwgcHJveHkuJGVsKSA9PT0gdHJ1ZSAmJiBzdG9wQW5kUHJldmVudChlKVxuICAgIH1cblxuICAgIGVtaXQoJ2tleWRvd24nLCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgY29uc3RcbiAgICAgIG5hcnJvdyA9ICR0YWJzLnRhYlByb3BzLnZhbHVlLm5hcnJvd0luZGljYXRvcixcbiAgICAgIGNvbnRlbnQgPSBbXSxcbiAgICAgIGluZGljYXRvciA9IGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiB0YWJJbmRpY2F0b3JSZWYsXG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgJ3EtdGFiX19pbmRpY2F0b3InLFxuICAgICAgICAgICR0YWJzLnRhYlByb3BzLnZhbHVlLmluZGljYXRvckNsYXNzXG4gICAgICAgIF1cbiAgICAgIH0pXG5cbiAgICBwcm9wcy5pY29uICE9PSB2b2lkIDAgJiYgY29udGVudC5wdXNoKFxuICAgICAgaChRSWNvbiwge1xuICAgICAgICBjbGFzczogJ3EtdGFiX19pY29uJyxcbiAgICAgICAgbmFtZTogcHJvcHMuaWNvblxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwICYmIGNvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYl9fbGFiZWwnIH0sIHByb3BzLmxhYmVsKVxuICAgIClcblxuICAgIHByb3BzLmFsZXJ0ICE9PSBmYWxzZSAmJiBjb250ZW50LnB1c2goXG4gICAgICBwcm9wcy5hbGVydEljb24gIT09IHZvaWQgMFxuICAgICAgICA/IGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFiX19hbGVydC1pY29uJyxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuYWxlcnQgIT09IHRydWVcbiAgICAgICAgICAgID8gcHJvcHMuYWxlcnRcbiAgICAgICAgICAgIDogdm9pZCAwLFxuICAgICAgICAgIG5hbWU6IHByb3BzLmFsZXJ0SWNvblxuICAgICAgICB9KVxuICAgICAgICA6IGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFiX19hbGVydCdcbiAgICAgICAgICAgICsgKHByb3BzLmFsZXJ0ICE9PSB0cnVlID8gYCB0ZXh0LSR7IHByb3BzLmFsZXJ0IH1gIDogJycpXG4gICAgICAgIH0pXG4gICAgKVxuXG4gICAgbmFycm93ID09PSB0cnVlICYmIGNvbnRlbnQucHVzaChpbmRpY2F0b3IpXG5cbiAgICBjb25zdCBub2RlID0gW1xuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJywgdGFiaW5kZXg6IC0xLCByZWY6IGJsdXJUYXJnZXRSZWYgfSksXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiBpbm5lckNsYXNzLnZhbHVlIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgY29udGVudCkpXG4gICAgXVxuXG4gICAgbmFycm93ID09PSBmYWxzZSAmJiBub2RlLnB1c2goaW5kaWNhdG9yKVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGNvbnN0IHRhYkRhdGEgPSB7XG4gICAgbmFtZTogY29tcHV0ZWQoKCkgPT4gcHJvcHMubmFtZSksXG4gICAgcm9vdFJlZixcbiAgICB0YWJJbmRpY2F0b3JSZWYsXG4gICAgcm91dGVEYXRhXG4gIH1cblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICR0YWJzLnVucmVnaXN0ZXJUYWIodGFiRGF0YSlcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICR0YWJzLnJlZ2lzdGVyVGFiKHRhYkRhdGEpXG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFiICh0YWcsIGN1c3RvbURhdGEpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcmVmOiByb290UmVmLFxuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICB0YWJpbmRleDogdGFiSW5kZXgudmFsdWUsXG4gICAgICByb2xlOiAndGFiJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogaXNBY3RpdmUudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJ3RydWUnIDogdm9pZCAwLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5ZG93bixcbiAgICAgIC4uLmN1c3RvbURhdGFcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoXG4gICAgICBoKHRhZywgZGF0YSwgZ2V0Q29udGVudCgpKSxcbiAgICAgIFsgWyBSaXBwbGUsIHJpcHBsZS52YWx1ZSBdIF1cbiAgICApXG4gIH1cblxuICByZXR1cm4geyByZW5kZXJUYWIsICR0YWJzIH1cbn1cbiIsImltcG9ydCB1c2VUYWIsIHsgdXNlVGFiUHJvcHMsIHVzZVRhYkVtaXRzIH0gZnJvbSAnLi91c2UtdGFiLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWInLFxuXG4gIHByb3BzOiB1c2VUYWJQcm9wcyxcblxuICBlbWl0czogdXNlVGFiRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHJlbmRlclRhYiB9ID0gdXNlVGFiKHByb3BzLCBzbG90cywgZW1pdClcbiAgICByZXR1cm4gKCkgPT4gcmVuZGVyVGFiKCdkaXYnKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSwgcHJvdmlkZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB1c2VUaWNrIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRpY2suanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10aW1lb3V0LmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyB0YWJzS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuaW1wb3J0IHsgcnRsSGFzU2Nyb2xsQnVnIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9ydGwuanMnXG5cbmZ1bmN0aW9uIGdldEluZGljYXRvckNsYXNzIChjb2xvciwgdG9wLCB2ZXJ0aWNhbCkge1xuICBjb25zdCBwb3MgPSB2ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgID8gWyAnbGVmdCcsICdyaWdodCcgXVxuICAgIDogWyAndG9wJywgJ2JvdHRvbScgXVxuXG4gIHJldHVybiBgYWJzb2x1dGUtJHsgdG9wID09PSB0cnVlID8gcG9zWyAwIF0gOiBwb3NbIDEgXSB9JHsgY29sb3IgPyBgIHRleHQtJHsgY29sb3IgfWAgOiAnJyB9YFxufVxuXG5jb25zdCBhbGlnblZhbHVlcyA9IFsgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JywgJ2p1c3RpZnknIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJzJyxcblxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIGFsaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnY2VudGVyJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBhbGlnblZhbHVlcy5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNjAwXG4gICAgfSxcblxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgIHNocmluazogQm9vbGVhbixcbiAgICBzdHJldGNoOiBCb29sZWFuLFxuXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIGFjdGl2ZUJnQ29sb3I6IFN0cmluZyxcbiAgICBpbmRpY2F0b3JDb2xvcjogU3RyaW5nLFxuICAgIGxlZnRJY29uOiBTdHJpbmcsXG4gICAgcmlnaHRJY29uOiBTdHJpbmcsXG5cbiAgICBvdXRzaWRlQXJyb3dzOiBCb29sZWFuLFxuICAgIG1vYmlsZUFycm93czogQm9vbGVhbixcblxuICAgIHN3aXRjaEluZGljYXRvcjogQm9vbGVhbixcblxuICAgIG5hcnJvd0luZGljYXRvcjogQm9vbGVhbixcbiAgICBpbmxpbmVMYWJlbDogQm9vbGVhbixcbiAgICBub0NhcHM6IEJvb2xlYW4sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcblxuICAgIGNvbnRlbnRDbGFzczogU3RyaW5nLFxuXG4gICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBbIEZ1bmN0aW9uLCBBcnJheSBdXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljazogcmVnaXN0ZXJTY3JvbGxUaWNrIH0gPSB1c2VUaWNrKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljazogcmVnaXN0ZXJVcGRhdGVBcnJvd3NUaWNrIH0gPSB1c2VUaWNrKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljazogcmVnaXN0ZXJBbmltYXRlVGljayB9ID0gdXNlVGljaygpXG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dDogcmVnaXN0ZXJGb2N1c1RpbWVvdXQsIHJlbW92ZVRpbWVvdXQ6IHJlbW92ZUZvY3VzVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQ6IHJlZ2lzdGVyU2Nyb2xsVG9UYWJUaW1lb3V0LCByZW1vdmVUaW1lb3V0OiByZW1vdmVTY3JvbGxUb1RhYlRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGNvbnRlbnRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGN1cnJlbnRNb2RlbCA9IHJlZihwcm9wcy5tb2RlbFZhbHVlKVxuICAgIGNvbnN0IHNjcm9sbGFibGUgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgbGVmdEFycm93ID0gcmVmKHRydWUpXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBqdXN0aWZ5ID0gcmVmKGZhbHNlKVxuXG4gICAgY29uc3QgdGFiRGF0YUxpc3QgPSBbXVxuICAgIGNvbnN0IHRhYkRhdGFMaXN0TGVuID0gcmVmKDApXG4gICAgY29uc3QgaGFzRm9jdXMgPSByZWYoZmFsc2UpXG5cbiAgICBsZXQgYW5pbWF0ZVRpbWVyLCBzY3JvbGxUaW1lciwgdW53YXRjaFJvdXRlXG5cbiAgICBjb25zdCB0YWJQcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBhY3RpdmVDbGFzczogcHJvcHMuYWN0aXZlQ2xhc3MsXG4gICAgICBhY3RpdmVDb2xvcjogcHJvcHMuYWN0aXZlQ29sb3IsXG4gICAgICBhY3RpdmVCZ0NvbG9yOiBwcm9wcy5hY3RpdmVCZ0NvbG9yLFxuICAgICAgaW5kaWNhdG9yQ2xhc3M6IGdldEluZGljYXRvckNsYXNzKFxuICAgICAgICBwcm9wcy5pbmRpY2F0b3JDb2xvcixcbiAgICAgICAgcHJvcHMuc3dpdGNoSW5kaWNhdG9yLFxuICAgICAgICBwcm9wcy52ZXJ0aWNhbFxuICAgICAgKSxcbiAgICAgIG5hcnJvd0luZGljYXRvcjogcHJvcHMubmFycm93SW5kaWNhdG9yLFxuICAgICAgaW5saW5lTGFiZWw6IHByb3BzLmlubGluZUxhYmVsLFxuICAgICAgbm9DYXBzOiBwcm9wcy5ub0NhcHNcbiAgICB9KSlcblxuICAgIGNvbnN0IGhhc0FjdGl2ZVRhYiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGxlbiA9IHRhYkRhdGFMaXN0TGVuLnZhbHVlXG4gICAgICBjb25zdCB2YWwgPSBjdXJyZW50TW9kZWwudmFsdWVcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodGFiRGF0YUxpc3RbIGkgXS5uYW1lLnZhbHVlID09PSB2YWwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBjb25zdCBhbGlnbkNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWxpZ24gPSBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJ2xlZnQnXG4gICAgICAgIDogKGp1c3RpZnkudmFsdWUgPT09IHRydWUgPyAnanVzdGlmeScgOiBwcm9wcy5hbGlnbilcblxuICAgICAgcmV0dXJuIGBxLXRhYnNfX2NvbnRlbnQtLWFsaWduLSR7IGFsaWduIH1gXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGFicyByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIGAgcS10YWJzLS0keyBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlID8gJycgOiAnbm90LScgfXNjcm9sbGFibGVgXG4gICAgICArIGAgcS10YWJzLS0keyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcgfWBcbiAgICAgICsgYCBxLXRhYnNfX2Fycm93cy0tJHsgcHJvcHMub3V0c2lkZUFycm93cyA9PT0gdHJ1ZSA/ICdvdXRzaWRlJyA6ICdpbnNpZGUnIH1gXG4gICAgICArIGAgcS10YWJzLS1tb2JpbGUtd2l0aCR7IHByb3BzLm1vYmlsZUFycm93cyA9PT0gdHJ1ZSA/ICcnIDogJ291dCcgfS1hcnJvd3NgXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS10YWJzLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLnNocmluayA9PT0gdHJ1ZSA/ICcgY29sLXNocmluaycgOiAnJylcbiAgICAgICsgKHByb3BzLnN0cmV0Y2ggPT09IHRydWUgPyAnIHNlbGYtc3RyZXRjaCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBpbm5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRhYnNfX2NvbnRlbnQgc2Nyb2xsLS1tb2JpbGUgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyIHNlbGYtc3RyZXRjaCBoaWRlLXNjcm9sbGJhciByZWxhdGl2ZS1wb3NpdGlvbiAnXG4gICAgICArIGFsaWduQ2xhc3MudmFsdWVcbiAgICAgICsgKHByb3BzLmNvbnRlbnRDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5jb250ZW50Q2xhc3MgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBkb21Qcm9wcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8geyBjb250YWluZXI6ICdoZWlnaHQnLCBjb250ZW50OiAnb2Zmc2V0SGVpZ2h0Jywgc2Nyb2xsOiAnc2Nyb2xsSGVpZ2h0JyB9XG4gICAgICAgIDogeyBjb250YWluZXI6ICd3aWR0aCcsIGNvbnRlbnQ6ICdvZmZzZXRXaWR0aCcsIHNjcm9sbDogJ3Njcm9sbFdpZHRoJyB9XG4gICAgKSlcblxuICAgIGNvbnN0IGlzUlRMID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudmVydGljYWwgIT09IHRydWUgJiYgJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICAgY29uc3QgcnRsUG9zQ29ycmVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gZmFsc2UgJiYgaXNSVEwudmFsdWUgPT09IHRydWUpXG5cbiAgICB3YXRjaChpc1JUTCwgdXBkYXRlQXJyb3dzKVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgbmFtZSA9PiB7XG4gICAgICB1cGRhdGVNb2RlbCh7IG5hbWUsIHNldEN1cnJlbnQ6IHRydWUsIHNraXBFbWl0OiB0cnVlIH0pXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm91dHNpZGVBcnJvd3MsIHJlY2FsY3VsYXRlU2Nyb2xsKVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kZWwgKHsgbmFtZSwgc2V0Q3VycmVudCwgc2tpcEVtaXQgfSkge1xuICAgICAgaWYgKGN1cnJlbnRNb2RlbC52YWx1ZSAhPT0gbmFtZSkge1xuICAgICAgICBpZiAoc2tpcEVtaXQgIT09IHRydWUgJiYgcHJvcHNbICdvblVwZGF0ZTptb2RlbFZhbHVlJyBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgc2V0Q3VycmVudCA9PT0gdHJ1ZVxuICAgICAgICAgIHx8IHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSA9PT0gdm9pZCAwXG4gICAgICAgICkge1xuICAgICAgICAgIGFuaW1hdGUoY3VycmVudE1vZGVsLnZhbHVlLCBuYW1lKVxuICAgICAgICAgIGN1cnJlbnRNb2RlbC52YWx1ZSA9IG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2FsY3VsYXRlU2Nyb2xsICgpIHtcbiAgICAgIHJlZ2lzdGVyU2Nyb2xsVGljaygoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNvbnRhaW5lcih7XG4gICAgICAgICAgd2lkdGg6IHJvb3RSZWYudmFsdWUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiByb290UmVmLnZhbHVlLm9mZnNldEhlaWdodFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250YWluZXIgKGRvbVNpemUpIHtcbiAgICAgIC8vIGl0IGNhbiBiZSBjYWxsZWQgZmFzdGVyIHRoYW4gY29tcG9uZW50IGJlaW5nIGluaXRpYWxpemVkXG4gICAgICAvLyBzbyB3ZSBuZWVkIHRvIHByb3RlY3QgYWdhaW5zdCB0aGF0IGNhc2VcbiAgICAgIC8vIChvbmUgZXhhbXBsZSBvZiBzdWNoIGNhc2UgaXMgdGhlIGRvY3MgcmVsZWFzZSBub3RlcyBwYWdlKVxuICAgICAgaWYgKGRvbVByb3BzLnZhbHVlID09PSB2b2lkIDAgfHwgY29udGVudFJlZi52YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBjb25zdFxuICAgICAgICBzaXplID0gZG9tU2l6ZVsgZG9tUHJvcHMudmFsdWUuY29udGFpbmVyIF0sXG4gICAgICAgIHNjcm9sbFNpemUgPSBNYXRoLm1pbihcbiAgICAgICAgICBjb250ZW50UmVmLnZhbHVlWyBkb21Qcm9wcy52YWx1ZS5zY3JvbGwgXSxcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoXG4gICAgICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICAgICAgKGFjYywgZWwpID0+IGFjYyArIChlbFsgZG9tUHJvcHMudmFsdWUuY29udGVudCBdIHx8IDApLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgc2Nyb2xsID0gc2l6ZSA+IDAgJiYgc2Nyb2xsU2l6ZSA+IHNpemUgLy8gd2hlbiB0aGVyZSBpcyBubyB0YWIsIGluIENocm9tZSwgc2l6ZSA9PT0gMCBhbmQgc2Nyb2xsU2l6ZSA9PT0gMVxuXG4gICAgICBzY3JvbGxhYmxlLnZhbHVlID0gc2Nyb2xsXG5cbiAgICAgIC8vIEFycm93cyBuZWVkIHRvIGJlIHVwZGF0ZWQgZXZlbiBpZiB0aGUgc2Nyb2xsIHN0YXR1cyB3YXMgYWxyZWFkeSB0cnVlXG4gICAgICBzY3JvbGwgPT09IHRydWUgJiYgcmVnaXN0ZXJVcGRhdGVBcnJvd3NUaWNrKHVwZGF0ZUFycm93cylcblxuICAgICAganVzdGlmeS52YWx1ZSA9IHNpemUgPCBwYXJzZUludChwcm9wcy5icmVha3BvaW50LCAxMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlIChvbGROYW1lLCBuZXdOYW1lKSB7XG4gICAgICBjb25zdFxuICAgICAgICBvbGRUYWIgPSBvbGROYW1lICE9PSB2b2lkIDAgJiYgb2xkTmFtZSAhPT0gbnVsbCAmJiBvbGROYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG9sZE5hbWUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBuZXdUYWIgPSBuZXdOYW1lICE9PSB2b2lkIDAgJiYgbmV3TmFtZSAhPT0gbnVsbCAmJiBuZXdOYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG5ld05hbWUpXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgIGlmIChvbGRUYWIgJiYgbmV3VGFiKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgb2xkRWwgPSBvbGRUYWIudGFiSW5kaWNhdG9yUmVmLnZhbHVlLFxuICAgICAgICAgIG5ld0VsID0gbmV3VGFiLnRhYkluZGljYXRvclJlZi52YWx1ZVxuXG4gICAgICAgIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG5cbiAgICAgICAgb2xkRWwuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICBvbGRFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcblxuICAgICAgICBjb25zdFxuICAgICAgICAgIG9sZFBvcyA9IG9sZEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIG5ld1BvcyA9IG5ld0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNmb3JtID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICA/IGB0cmFuc2xhdGUzZCgwLCR7IG9sZFBvcy50b3AgLSBuZXdQb3MudG9wIH1weCwwKSBzY2FsZTNkKDEsJHsgbmV3UG9zLmhlaWdodCA/IG9sZFBvcy5oZWlnaHQgLyBuZXdQb3MuaGVpZ2h0IDogMSB9LDEpYFxuICAgICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7IG9sZFBvcy5sZWZ0IC0gbmV3UG9zLmxlZnQgfXB4LDAsMCkgc2NhbGUzZCgkeyBuZXdQb3Mud2lkdGggPyBvbGRQb3Mud2lkdGggLyBuZXdQb3Mud2lkdGggOiAxIH0sMSwxKWBcblxuICAgICAgICAvLyBhbGxvdyBzY29wZSB1cGRhdGVzIHRvIGtpY2sgaW4gKFFSb3V0ZVRhYiBuZWVkcyBtb3JlIHRpbWUpXG4gICAgICAgIHJlZ2lzdGVyQW5pbWF0ZVRpY2soKCkgPT4ge1xuICAgICAgICAgIGFuaW1hdGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSdcbiAgICAgICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuICAgICAgICAgIH0sIDcwKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3VGFiICYmIHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgc2Nyb2xsVG9UYWJFbChuZXdUYWIucm9vdFJlZi52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb1RhYkVsIChlbCkge1xuICAgICAgY29uc3RcbiAgICAgICAgeyBsZWZ0LCB3aWR0aCwgdG9wLCBoZWlnaHQgfSA9IGNvbnRlbnRSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG5ld1BvcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIGxldCBvZmZzZXQgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IG5ld1Bvcy50b3AgLSB0b3AgOiBuZXdQb3MubGVmdCAtIGxlZnRcblxuICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgY29udGVudFJlZi52YWx1ZVsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JyBdICs9IE1hdGguZmxvb3Iob2Zmc2V0KVxuICAgICAgICB1cGRhdGVBcnJvd3MoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgb2Zmc2V0ICs9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gbmV3UG9zLmhlaWdodCAtIGhlaWdodCA6IG5ld1Bvcy53aWR0aCAtIHdpZHRoXG4gICAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICBjb250ZW50UmVmLnZhbHVlWyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnIF0gKz0gTWF0aC5jZWlsKG9mZnNldClcbiAgICAgICAgdXBkYXRlQXJyb3dzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVBcnJvd3MgKCkge1xuICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRSZWYudmFsdWVcbiAgICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHJlY3QgPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBwb3MgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IGNvbnRlbnQuc2Nyb2xsVG9wIDogTWF0aC5hYnMoY29udGVudC5zY3JvbGxMZWZ0KVxuXG4gICAgICBpZiAoaXNSVEwudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbGVmdEFycm93LnZhbHVlID0gTWF0aC5jZWlsKHBvcyArIHJlY3Qud2lkdGgpIDwgY29udGVudC5zY3JvbGxXaWR0aCAtIDFcbiAgICAgICAgcmlnaHRBcnJvdy52YWx1ZSA9IHBvcyA+IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZWZ0QXJyb3cudmFsdWUgPSBwb3MgPiAwXG4gICAgICAgIHJpZ2h0QXJyb3cudmFsdWUgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gTWF0aC5jZWlsKHBvcyArIHJlY3QuaGVpZ2h0KSA8IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgOiBNYXRoLmNlaWwocG9zICsgcmVjdC53aWR0aCkgPCBjb250ZW50LnNjcm9sbFdpZHRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbVNjcm9sbFRvICh2YWx1ZSkge1xuICAgICAgc3RvcEFuaW1TY3JvbGwoKVxuICAgICAgc2Nyb2xsVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChzY3JvbGxUb3dhcmRzKHZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHN0b3BBbmltU2Nyb2xsKClcbiAgICAgICAgfVxuICAgICAgfSwgNSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb1N0YXJ0ICgpIHtcbiAgICAgIGFuaW1TY3JvbGxUbyhydGxQb3NDb3JyZWN0aW9uLnZhbHVlID09PSB0cnVlID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvRW5kICgpIHtcbiAgICAgIGFuaW1TY3JvbGxUbyhydGxQb3NDb3JyZWN0aW9uLnZhbHVlID09PSB0cnVlID8gMCA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BBbmltU2Nyb2xsICgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsVGltZXIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LYmROYXZpZ2F0ZSAoa2V5Q29kZSwgZnJvbUVsKSB7XG4gICAgICBjb25zdCB0YWJzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxuICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICBlbCA9PiBlbCA9PT0gZnJvbUVsIHx8IChlbC5tYXRjaGVzICYmIGVsLm1hdGNoZXMoJy5xLXRhYi5xLWZvY3VzYWJsZScpID09PSB0cnVlKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBsZW4gPSB0YWJzLmxlbmd0aFxuICAgICAgaWYgKGxlbiA9PT0gMCkgeyByZXR1cm4gfVxuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gMzYpIHsgLy8gSG9tZVxuICAgICAgICBzY3JvbGxUb1RhYkVsKHRhYnNbIDAgXSlcbiAgICAgICAgdGFic1sgMCBdLmZvY3VzKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmIChrZXlDb2RlID09PSAzNSkgeyAvLyBFbmRcbiAgICAgICAgc2Nyb2xsVG9UYWJFbCh0YWJzWyBsZW4gLSAxIF0pXG4gICAgICAgIHRhYnNbIGxlbiAtIDEgXS5mb2N1cygpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpclByZXYgPSBrZXlDb2RlID09PSAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAzOCAvKiBBcnJvd1VwICovIDogMzcgLyogQXJyb3dMZWZ0ICovKVxuICAgICAgY29uc3QgZGlyTmV4dCA9IGtleUNvZGUgPT09IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IDQwIC8qIEFycm93RG93biAqLyA6IDM5IC8qIEFycm93UmlnaHQgKi8pXG5cbiAgICAgIGNvbnN0IGRpciA9IGRpclByZXYgPT09IHRydWUgPyAtMSA6IChkaXJOZXh0ID09PSB0cnVlID8gMSA6IHZvaWQgMClcblxuICAgICAgaWYgKGRpciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHJ0bERpciA9IGlzUlRMLnZhbHVlID09PSB0cnVlID8gLTEgOiAxXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFicy5pbmRleE9mKGZyb21FbCkgKyBkaXIgKiBydGxEaXJcblxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbikge1xuICAgICAgICAgIHNjcm9sbFRvVGFiRWwodGFic1sgaW5kZXggXSlcbiAgICAgICAgICB0YWJzWyBpbmRleCBdLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsZXQncyBzcGVlZCB1cCBleGVjdXRpb24gb2YgdGltZS1zZW5zaXRpdmUgc2Nyb2xsVG93YXJkcygpXG4gICAgLy8gd2l0aCBhIGNvbXB1dGVkIHZhcmlhYmxlIGJ5IGRpcmVjdGx5IGFwcGx5aW5nIHRoZSBtaW5pbWFsXG4gICAgLy8gbnVtYmVyIG9mIGluc3RydWN0aW9ucyBvbiBnZXQvc2V0IGZ1bmN0aW9uc1xuICAgIGNvbnN0IHBvc0ZuID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgZ2V0OiBjb250ZW50ID0+IE1hdGguYWJzKGNvbnRlbnQuc2Nyb2xsTGVmdCksIHNldDogKGNvbnRlbnQsIHBvcykgPT4geyBjb250ZW50LnNjcm9sbExlZnQgPSAtcG9zIH0gfVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgICAgID8geyBnZXQ6IGNvbnRlbnQgPT4gY29udGVudC5zY3JvbGxUb3AsIHNldDogKGNvbnRlbnQsIHBvcykgPT4geyBjb250ZW50LnNjcm9sbFRvcCA9IHBvcyB9IH1cbiAgICAgICAgICAgICAgOiB7IGdldDogY29udGVudCA9PiBjb250ZW50LnNjcm9sbExlZnQsIHNldDogKGNvbnRlbnQsIHBvcykgPT4geyBjb250ZW50LnNjcm9sbExlZnQgPSBwb3MgfSB9XG4gICAgICAgICAgKVxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb3dhcmRzICh2YWx1ZSkge1xuICAgICAgY29uc3RcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRSZWYudmFsdWUsXG4gICAgICAgIHsgZ2V0LCBzZXQgfSA9IHBvc0ZuLnZhbHVlXG5cbiAgICAgIGxldFxuICAgICAgICBkb25lID0gZmFsc2UsXG4gICAgICAgIHBvcyA9IGdldChjb250ZW50KVxuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB2YWx1ZSA8IHBvcyA/IC0xIDogMVxuXG4gICAgICBwb3MgKz0gZGlyZWN0aW9uICogNVxuXG4gICAgICBpZiAocG9zIDwgMCkge1xuICAgICAgICBkb25lID0gdHJ1ZVxuICAgICAgICBwb3MgPSAwXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgKGRpcmVjdGlvbiA9PT0gLTEgJiYgcG9zIDw9IHZhbHVlKVxuICAgICAgICB8fCAoZGlyZWN0aW9uID09PSAxICYmIHBvcyA+PSB2YWx1ZSlcbiAgICAgICkge1xuICAgICAgICBkb25lID0gdHJ1ZVxuICAgICAgICBwb3MgPSB2YWx1ZVxuICAgICAgfVxuXG4gICAgICBzZXQoY29udGVudCwgcG9zKVxuICAgICAgdXBkYXRlQXJyb3dzKClcblxuICAgICAgcmV0dXJuIGRvbmVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNRdWVyeUluY2x1ZGVkICh0YXJnZXRRdWVyeSwgbWF0Y2hpbmdRdWVyeSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0UXVlcnkpIHtcbiAgICAgICAgaWYgKHRhcmdldFF1ZXJ5WyBrZXkgXSAhPT0gbWF0Y2hpbmdRdWVyeVsga2V5IF0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIGRvIG5vdCB1c2UgZGlyZWN0bHk7IHVzZSB2ZXJpZnlSb3V0ZU1vZGVsKCkgaW5zdGVhZFxuICAgIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZVJvdXRlICgpIHtcbiAgICAgIGxldCBuYW1lID0gbnVsbCwgYmVzdFNjb3JlID0geyBtYXRjaGVkTGVuOiAwLCBxdWVyeURpZmY6IDk5OTksIGhyZWZMZW46IDAgfVxuXG4gICAgICBjb25zdCBsaXN0ID0gdGFiRGF0YUxpc3QuZmlsdGVyKHRhYiA9PiB0YWIucm91dGVEYXRhICE9PSB2b2lkIDAgJiYgdGFiLnJvdXRlRGF0YS5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKVxuICAgICAgY29uc3QgeyBoYXNoOiBjdXJyZW50SGFzaCwgcXVlcnk6IGN1cnJlbnRRdWVyeSB9ID0gcHJveHkuJHJvdXRlXG4gICAgICBjb25zdCBjdXJyZW50UXVlcnlMZW4gPSBPYmplY3Qua2V5cyhjdXJyZW50UXVlcnkpLmxlbmd0aFxuXG4gICAgICAvLyBWdWUgUm91dGVyIGRvZXMgbm90IGtlZXAgYWNjb3VudCBvZiBoYXNoICYgcXVlcnkgd2hlbiBtYXRjaGluZ1xuICAgICAgLy8gc28gd2UncmUgZG9pbmcgdGhpcyBhcyB3ZWxsXG5cbiAgICAgIGZvciAoY29uc3QgdGFiIG9mIGxpc3QpIHtcbiAgICAgICAgY29uc3QgZXhhY3QgPSB0YWIucm91dGVEYXRhLmV4YWN0LnZhbHVlID09PSB0cnVlXG5cbiAgICAgICAgaWYgKHRhYi5yb3V0ZURhdGFbIGV4YWN0ID09PSB0cnVlID8gJ2xpbmtJc0V4YWN0QWN0aXZlJyA6ICdsaW5rSXNBY3RpdmUnIF0udmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAvLyBpdCBjYW5ub3QgbWF0Y2ggYW55dGhpbmcgYXMgaXQncyBub3QgYWN0aXZlIG5vciBleGFjdC1hY3RpdmVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBoYXNoLCBxdWVyeSwgbWF0Y2hlZCwgaHJlZiB9ID0gdGFiLnJvdXRlRGF0YS5yZXNvbHZlZExpbmsudmFsdWVcbiAgICAgICAgY29uc3QgcXVlcnlMZW4gPSBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoXG5cbiAgICAgICAgaWYgKGV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKGhhc2ggIT09IGN1cnJlbnRIYXNoKSB7XG4gICAgICAgICAgICAvLyBpdCdzIHNldCB0byBleGFjdCBidXQgaXQgZG9lc24ndCBtYXRjaGVzIHRoZSBoYXNoXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHF1ZXJ5TGVuICE9PSBjdXJyZW50UXVlcnlMZW5cbiAgICAgICAgICAgIHx8IGhhc1F1ZXJ5SW5jbHVkZWQoY3VycmVudFF1ZXJ5LCBxdWVyeSkgPT09IGZhbHNlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBpdCdzIHNldCB0byBleGFjdCBidXQgaXQgZG9lc24ndCBtYXRjaGVzIHRoZSBxdWVyeVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB5ZXksIHdlIGZvdW5kIHRoZSBwZXJmZWN0IG1hdGNoIChyb3V0ZSArIGhhc2ggKyBxdWVyeSlcbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc2ggIT09ICcnICYmIGhhc2ggIT09IGN1cnJlbnRIYXNoKSB7XG4gICAgICAgICAgLy8gaXQgaGFzIGhhc2ggYW5kIGl0IGRvZXNuJ3QgbWF0Y2hlc1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcXVlcnlMZW4gIT09IDBcbiAgICAgICAgICAmJiBoYXNRdWVyeUluY2x1ZGVkKHF1ZXJ5LCBjdXJyZW50UXVlcnkpID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBpdCBoYXMgcXVlcnkgYW5kIGl0IGRvZXNuJ3QgaW5jbHVkZXMgdGhlIGN1cnJlbnQgb25lXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Njb3JlID0ge1xuICAgICAgICAgIG1hdGNoZWRMZW46IG1hdGNoZWQubGVuZ3RoLFxuICAgICAgICAgIHF1ZXJ5RGlmZjogY3VycmVudFF1ZXJ5TGVuIC0gcXVlcnlMZW4sXG4gICAgICAgICAgaHJlZkxlbjogaHJlZi5sZW5ndGggLSBoYXNoLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Njb3JlLm1hdGNoZWRMZW4gPiBiZXN0U2NvcmUubWF0Y2hlZExlbikge1xuICAgICAgICAgIC8vIGl0IG1hdGNoZXMgbW9yZSByb3V0ZXMgc28gaXQncyBtb3JlIHNwZWNpZmljIHNvIHdlIHNldCBpdCBhcyBjdXJyZW50IGNoYW1waW9uXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYmVzdFNjb3JlID0gbmV3U2NvcmVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld1Njb3JlLm1hdGNoZWRMZW4gIT09IGJlc3RTY29yZS5tYXRjaGVkTGVuKSB7XG4gICAgICAgICAgLy8gaXQgbWF0Y2hlcyBsZXNzIHJvdXRlcyB0aGFuIHRoZSBjdXJyZW50IGNoYW1waW9uIHNvIHdlIGRpc2NhcmQgaXRcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Njb3JlLnF1ZXJ5RGlmZiA8IGJlc3RTY29yZS5xdWVyeURpZmYpIHtcbiAgICAgICAgICAvLyBxdWVyeSBpcyBjbG9zZXIgdG8gdGhlIGN1cnJlbnQgb25lIHNvIHdlIHNldCBpdCBhcyBjdXJyZW50IGNoYW1waW9uXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYmVzdFNjb3JlID0gbmV3U2NvcmVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdTY29yZS5xdWVyeURpZmYgIT09IGJlc3RTY29yZS5xdWVyeURpZmYpIHtcbiAgICAgICAgICAvLyBpdCBtYXRjaGVzIGxlc3Mgcm91dGVzIHRoYW4gdGhlIGN1cnJlbnQgY2hhbXBpb24gc28gd2UgZGlzY2FyZCBpdFxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2NvcmUuaHJlZkxlbiA+IGJlc3RTY29yZS5ocmVmTGVuKSB7XG4gICAgICAgICAgLy8gaHJlZiBpcyBsZW5ndGhpZXIgc28gaXQncyBtb3JlIHNwZWNpZmljIHNvIHdlIHNldCBpdCBhcyBjdXJyZW50IGNoYW1waW9uXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYmVzdFNjb3JlID0gbmV3U2NvcmVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG5hbWUgPT09IG51bGxcbiAgICAgICAgJiYgdGFiRGF0YUxpc3Quc29tZSh0YWIgPT4gdGFiLnJvdXRlRGF0YSA9PT0gdm9pZCAwICYmIHRhYi5uYW1lLnZhbHVlID09PSBjdXJyZW50TW9kZWwudmFsdWUpID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkbid0IGludGVyZmVyZSBpZiBub24tcm91dGUgdGFiIGlzIGFjdGl2ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdXBkYXRlTW9kZWwoeyBuYW1lLCBzZXRDdXJyZW50OiB0cnVlIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChlKSB7XG4gICAgICByZW1vdmVGb2N1c1RpbWVvdXQoKVxuXG4gICAgICBpZiAoXG4gICAgICAgIGhhc0ZvY3VzLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmIHJvb3RSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICAgJiYgZS50YXJnZXRcbiAgICAgICAgJiYgdHlwZW9mIGUudGFyZ2V0LmNsb3Nlc3QgPT09ICdmdW5jdGlvbidcbiAgICAgICkge1xuICAgICAgICBjb25zdCB0YWIgPSBlLnRhcmdldC5jbG9zZXN0KCcucS10YWInKVxuXG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgaXMgY29udGFpbmVkIGJ5IGEgUVRhYi9RUm91dGVUYWJcbiAgICAgICAgLy8gKGl0IG1pZ2h0IGJlIG90aGVyIGVsZW1lbnRzIGZvY3VzZWQsIGxpa2UgYWRkaXRpb25hbCBRQnRuKVxuICAgICAgICBpZiAodGFiICYmIHJvb3RSZWYudmFsdWUuY29udGFpbnModGFiKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGhhc0ZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgICAgICAgIHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUgJiYgc2Nyb2xsVG9UYWJFbCh0YWIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3Vzb3V0ICgpIHtcbiAgICAgIHJlZ2lzdGVyRm9jdXNUaW1lb3V0KCgpID0+IHsgaGFzRm9jdXMudmFsdWUgPSBmYWxzZSB9LCAzMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2ZXJpZnlSb3V0ZU1vZGVsICgpIHtcbiAgICAgIGlmICgkdGFicy5hdm9pZFJvdXRlV2F0Y2hlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVnaXN0ZXJTY3JvbGxUb1RhYlRpbWVvdXQodXBkYXRlQWN0aXZlUm91dGUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlU2Nyb2xsVG9UYWJUaW1lb3V0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXRjaFJvdXRlICgpIHtcbiAgICAgIGlmICh1bndhdGNoUm91dGUgPT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCB1bndhdGNoID0gd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCB2ZXJpZnlSb3V0ZU1vZGVsKVxuICAgICAgICB1bndhdGNoUm91dGUgPSAoKSA9PiB7XG4gICAgICAgICAgdW53YXRjaCgpXG4gICAgICAgICAgdW53YXRjaFJvdXRlID0gdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWdpc3RlclRhYiAodGFiRGF0YSkge1xuICAgICAgdGFiRGF0YUxpc3QucHVzaCh0YWJEYXRhKVxuICAgICAgdGFiRGF0YUxpc3RMZW4udmFsdWUrK1xuXG4gICAgICByZWNhbGN1bGF0ZVNjcm9sbCgpXG5cbiAgICAgIC8vIGlmIGl0J3MgYSBRVGFiIG9yIHdlIGRvbid0IGhhdmUgVnVlIFJvdXRlclxuICAgICAgaWYgKHRhYkRhdGEucm91dGVEYXRhID09PSB2b2lkIDAgfHwgcHJveHkuJHJvdXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIHBvc2l0aW9uIHRvIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiAoaWYgYW55KVxuICAgICAgICByZWdpc3RlclNjcm9sbFRvVGFiVGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3VycmVudE1vZGVsLnZhbHVlXG4gICAgICAgICAgICBjb25zdCBuZXdUYWIgPSB2YWx1ZSAhPT0gdm9pZCAwICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJ1xuICAgICAgICAgICAgICA/IHRhYkRhdGFMaXN0LmZpbmQodGFiID0+IHRhYi5uYW1lLnZhbHVlID09PSB2YWx1ZSlcbiAgICAgICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgICAgIG5ld1RhYiAmJiBzY3JvbGxUb1RhYkVsKG5ld1RhYi5yb290UmVmLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UgaWYgaXQncyBhIFFSb3V0ZVRhYiB3aXRoIGEgdmFsaWQgbGlua1xuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHJvdXRlXG4gICAgICAgIHdhdGNoUm91dGUoKVxuXG4gICAgICAgIGlmICh0YWJEYXRhLnJvdXRlRGF0YS5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgdmVyaWZ5Um91dGVNb2RlbCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyVGFiICh0YWJEYXRhKSB7XG4gICAgICB0YWJEYXRhTGlzdC5zcGxpY2UodGFiRGF0YUxpc3QuaW5kZXhPZih0YWJEYXRhKSwgMSlcbiAgICAgIHRhYkRhdGFMaXN0TGVuLnZhbHVlLS1cblxuICAgICAgcmVjYWxjdWxhdGVTY3JvbGwoKVxuXG4gICAgICBpZiAodW53YXRjaFJvdXRlICE9PSB2b2lkIDAgJiYgdGFiRGF0YS5yb3V0ZURhdGEgIT09IHZvaWQgMCkge1xuICAgICAgICAvLyB1bndhdGNoIHJvdXRlIGlmIHdlIGRvbid0IGhhdmUgYW55IFFSb3V0ZVRhYnMgbGVmdFxuICAgICAgICBpZiAodGFiRGF0YUxpc3QuZXZlcnkodGFiID0+IHRhYi5yb3V0ZURhdGEgPT09IHZvaWQgMCkgPT09IHRydWUpIHtcbiAgICAgICAgICB1bndhdGNoUm91dGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhlbiB1cGRhdGUgbW9kZWxcbiAgICAgICAgdmVyaWZ5Um91dGVNb2RlbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgJHRhYnMgPSB7XG4gICAgICBjdXJyZW50TW9kZWwsXG4gICAgICB0YWJQcm9wcyxcbiAgICAgIGhhc0ZvY3VzLFxuICAgICAgaGFzQWN0aXZlVGFiLFxuXG4gICAgICByZWdpc3RlclRhYixcbiAgICAgIHVucmVnaXN0ZXJUYWIsXG5cbiAgICAgIHZlcmlmeVJvdXRlTW9kZWwsXG4gICAgICB1cGRhdGVNb2RlbCxcbiAgICAgIG9uS2JkTmF2aWdhdGUsXG5cbiAgICAgIGF2b2lkUm91dGVXYXRjaGVyOiBmYWxzZSAvLyBmYWxzZSB8IHN0cmluZyAodWlkKVxuICAgIH1cblxuICAgIHByb3ZpZGUodGFic0tleSwgJHRhYnMpXG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICAgIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG4gICAgICBzdG9wQW5pbVNjcm9sbCgpXG4gICAgICB1bndhdGNoUm91dGUgIT09IHZvaWQgMCAmJiB1bndhdGNoUm91dGUoKVxuICAgIH1cblxuICAgIGxldCBoYWRSb3V0ZVdhdGNoZXJcblxuICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBoYWRSb3V0ZVdhdGNoZXIgPSB1bndhdGNoUm91dGUgIT09IHZvaWQgMFxuICAgICAgY2xlYW51cCgpXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGhhZFJvdXRlV2F0Y2hlciA9PT0gdHJ1ZSAmJiB3YXRjaFJvdXRlKClcbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICAgICAgb25Gb2N1c2luLFxuICAgICAgICBvbkZvY3Vzb3V0XG4gICAgICB9LCBbXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiB1cGRhdGVDb250YWluZXIgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogY29udGVudFJlZixcbiAgICAgICAgICBjbGFzczogaW5uZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBvblNjcm9sbDogdXBkYXRlQXJyb3dzXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLWxlZnQgYWJzb2x1dGUgcS10YWJfX2ljb24nXG4gICAgICAgICAgICArIChsZWZ0QXJyb3cudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgcS10YWJzX19hcnJvdy0tZmFkZWQnKSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5sZWZ0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9TdGFydCxcbiAgICAgICAgICBvblRvdWNoc3RhcnRQYXNzaXZlOiBzY3JvbGxUb1N0YXJ0LFxuICAgICAgICAgIG9uTW91c2V1cFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uTW91c2VsZWF2ZVBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uVG91Y2hlbmRQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbFxuICAgICAgICB9KSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLXJpZ2h0IGFic29sdXRlIHEtdGFiX19pY29uJ1xuICAgICAgICAgICAgKyAocmlnaHRBcnJvdy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLXRhYnNfX2Fycm93LS1mYWRlZCcpLFxuICAgICAgICAgIG5hbWU6IHByb3BzLnJpZ2h0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2Rvd24nIDogJ3JpZ2h0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Ub3VjaHN0YXJ0UGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Nb3VzZXVwUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Nb3VzZWxlYXZlUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Ub3VjaGVuZFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsXG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kaWZpZXJEaXJlY3Rpb25zLCBzaG91bGRTdGFydCB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvdG91Y2guanMnXG5pbXBvcnQgeyBhZGRFdnQsIGNsZWFuRXZ0LCBwb3NpdGlvbiwgbGVmdENsaWNrLCBzdG9wQW5kUHJldmVudCwgcHJldmVudERyYWdnYWJsZSwgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi91dGlscy9wcml2YXRlL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbmZ1bmN0aW9uIHBhcnNlQXJnIChhcmcpIHtcbiAgLy8gZGVsdGEgKG1pbiB2ZWxvY2l0eSAtLSBkaXN0IC8gdGltZSlcbiAgLy8gbW9iaWxlIG1pbiBkaXN0YW5jZSBvbiBmaXJzdCBtb3ZlXG4gIC8vIGRlc2t0b3AgbWluIGRpc3RhbmNlIHVudGlsIGRlY2lkaW5nIGlmIGl0J3MgYSBzd2lwZSBvciBub3RcbiAgY29uc3QgZGF0YSA9IFsgMC4wNiwgNiwgNTAgXVxuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBhcmcubGVuZ3RoKSB7XG4gICAgYXJnLnNwbGl0KCc6JykuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQodmFsKVxuICAgICAgdiAmJiAoZGF0YVsgaW5kZXggXSA9IHYpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICd0b3VjaC1zd2lwZScsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtc3dpcGUnLFxuXG4gICAgICBiZWZvcmVNb3VudCAoZWwsIHsgdmFsdWUsIGFyZywgbW9kaWZpZXJzIH0pIHtcbiAgICAgICAgLy8gZWFybHkgcmV0dXJuLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgIT09IHRydWUgJiYgY2xpZW50Lmhhcy50b3VjaCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW91c2VDYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSA/ICdDYXB0dXJlJyA6ICcnXG5cbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIGhhbmRsZXI6IHZhbHVlLFxuICAgICAgICAgIHNlbnNpdGl2aXR5OiBwYXJzZUFyZyhhcmcpLFxuICAgICAgICAgIGRpcmVjdGlvbjogZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKG1vZGlmaWVycyksXG5cbiAgICAgICAgICBub29wLFxuXG4gICAgICAgICAgbW91c2VTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpICYmIGxlZnRDbGljayhldnQpKSB7XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZW1vdmUnLCAnbW92ZScsIGBub3RQYXNzaXZlJHsgbW91c2VDYXB0dXJlIH1gIF0sXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNldXAnLCAnZW5kJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHRvdWNoU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSkge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgdHJ1ZSlcblxuICAgICAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oZXZ0KVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB7XG4gICAgICAgICAgICAgIHg6IHBvcy5sZWZ0LFxuICAgICAgICAgICAgICB5OiBwb3MudG9wLFxuICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICBtb3VzZTogbW91c2VFdmVudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgZGlyOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtb3ZlIChldnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kaXIgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpIC0gY3R4LmV2ZW50LnRpbWVcblxuICAgICAgICAgICAgaWYgKHRpbWUgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICAgICAgICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICAgICAgICAgICAgYWJzWCA9IE1hdGguYWJzKGRpc3RYKSxcbiAgICAgICAgICAgICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnksXG4gICAgICAgICAgICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5tb3VzZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBpZiAoYWJzWCA8IGN0eC5zZW5zaXRpdml0eVsgMSBdICYmIGFic1kgPCBjdHguc2Vuc2l0aXZpdHlbIDEgXSkge1xuICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhYnNYIDwgY3R4LnNlbnNpdGl2aXR5WyAyIF0gJiYgYWJzWSA8IGN0eC5zZW5zaXRpdml0eVsgMiBdKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICB2ZWxYID0gYWJzWCAvIHRpbWUsXG4gICAgICAgICAgICAgIHZlbFkgPSBhYnNZIC8gdGltZVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24udmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IGFic1lcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxZID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gZGlzdFkgPCAwID8gJ3VwJyA6ICdkb3duJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uaG9yaXpvbnRhbCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYID4gYWJzWVxuICAgICAgICAgICAgICAmJiBhYnNZIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFggPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSBkaXN0WCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi51cCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WSA8IDBcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxZID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ3VwJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uZG93biA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WSA+IDBcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxZID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ2Rvd24nXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPiBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RYIDwgMFxuICAgICAgICAgICAgICAmJiBhYnNZIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFggPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAnbGVmdCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPiBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RYID4gMFxuICAgICAgICAgICAgICAmJiBhYnNZIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFggPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAncmlnaHQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGlyICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5tb3VzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG5cbiAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gd2l0aERlbGF5ID0+IHtcbiAgICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub24tc2VsZWN0YWJsZScpXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAod2l0aERlbGF5ID09PSB0cnVlKSB7IHNldFRpbWVvdXQocmVtb3ZlLCA1MCkgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjdHguaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgZXZ0LFxuICAgICAgICAgICAgICAgIHRvdWNoOiBjdHguZXZlbnQubW91c2UgIT09IHRydWUsXG4gICAgICAgICAgICAgICAgbW91c2U6IGN0eC5ldmVudC5tb3VzZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGN0eC5ldmVudC5kaXIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRpbWUsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgICAgICAgICAgIHg6IGFic1gsXG4gICAgICAgICAgICAgICAgICB5OiBhYnNZXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAodHJ1ZSlcbiAgICAgICAgICAgIGV2dCAhPT0gdm9pZCAwICYmIGN0eC5ldmVudC5kaXIgIT09IGZhbHNlICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0gdm9pZCAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWwuX19xdG91Y2hzd2lwZSA9IGN0eFxuXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgIGNvbnN0IGNhcHR1cmUgPSBtb2RpZmllcnMubW91c2VDYXB0dXJlID09PSB0cnVlIHx8IG1vZGlmaWVycy5tb3VzZWNhcHR1cmUgPT09IHRydWVcbiAgICAgICAgICAgID8gJ0NhcHR1cmUnXG4gICAgICAgICAgICA6ICcnXG5cbiAgICAgICAgICBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgY2FwdHVyZSB9YCBdXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5oYXMudG91Y2ggPT09IHRydWUgJiYgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgWyBlbCwgJ3RvdWNoc3RhcnQnLCAndG91Y2hTdGFydCcsIGBwYXNzaXZlJHsgbW9kaWZpZXJzLmNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJyB9YCBdLFxuICAgICAgICAgIFsgZWwsICd0b3VjaG1vdmUnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXSAvLyBjYW5ub3QgYmUgcGFzc2l2ZSAoZXg6IGlPUyBzY3JvbGwpXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZ3MpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hzd2lwZVxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChiaW5kaW5ncy5vbGRWYWx1ZSAhPT0gYmluZGluZ3MudmFsdWUpIHtcbiAgICAgICAgICAgIHR5cGVvZiBiaW5kaW5ncy52YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICAgIGN0eC5oYW5kbGVyID0gYmluZGluZ3MudmFsdWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdHguZGlyZWN0aW9uID0gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKGJpbmRpbmdzLm1vZGlmaWVycylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hzd2lwZVxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ21haW4nKVxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG4gICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAoKVxuXG4gICAgICAgICAgZGVsZXRlIGVsLl9fcXRvdWNoc3dpcGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKClcblxuICByZXR1cm4ge1xuICAgIGdldENhY2hlOiBfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgICAgID8gZnVuY3Rpb24gKF8sIG9iaikgeyByZXR1cm4gb2JqIH1cbiAgICAgIDogZnVuY3Rpb24gKGtleSwgb2JqKSB7XG4gICAgICAgIHJldHVybiBjYWNoZVsga2V5IF0gPT09IHZvaWQgMFxuICAgICAgICAgID8gKGNhY2hlWyBrZXkgXSA9IG9iailcbiAgICAgICAgICA6IGNhY2hlWyBrZXkgXVxuICAgICAgfSxcblxuICAgIGdldENhY2hlV2l0aEZuOiBfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgICAgID8gZnVuY3Rpb24gKF8sIGZuKSB7IHJldHVybiBmbigpIH1cbiAgICAgIDogZnVuY3Rpb24gKGtleSwgZm4pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlWyBrZXkgXSA9PT0gdm9pZCAwXG4gICAgICAgICAgPyAoY2FjaGVbIGtleSBdID0gZm4oKSlcbiAgICAgICAgICA6IGNhY2hlWyBrZXkgXVxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSwgVHJhbnNpdGlvbiwgS2VlcEFsaXZlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgVG91Y2hTd2lwZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoU3dpcGUuanMnXG5cbmltcG9ydCB1c2VDYWNoZSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYWNoZS5qcydcblxuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRWTm9kZXMgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlUGFuZWxDaGlsZFByb3BzID0ge1xuICBuYW1lOiB7IHJlcXVpcmVkOiB0cnVlIH0sXG4gIGRpc2FibGU6IEJvb2xlYW5cbn1cblxuY29uc3QgUGFuZWxXcmFwcGVyID0ge1xuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1wYW5lbCBzY3JvbGwnLFxuICAgICAgcm9sZTogJ3RhYnBhbmVsJ1xuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQYW5lbFByb3BzID0ge1xuICBtb2RlbFZhbHVlOiB7XG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcblxuICBhbmltYXRlZDogQm9vbGVhbixcbiAgaW5maW5pdGU6IEJvb2xlYW4sXG4gIHN3aXBlYWJsZTogQm9vbGVhbixcbiAgdmVydGljYWw6IEJvb2xlYW4sXG5cbiAgdHJhbnNpdGlvblByZXY6IFN0cmluZyxcbiAgdHJhbnNpdGlvbk5leHQ6IFN0cmluZyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB7XG4gICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgIGRlZmF1bHQ6IDMwMFxuICB9LFxuXG4gIGtlZXBBbGl2ZTogQm9vbGVhbixcbiAga2VlcEFsaXZlSW5jbHVkZTogWyBTdHJpbmcsIEFycmF5LCBSZWdFeHAgXSxcbiAga2VlcEFsaXZlRXhjbHVkZTogWyBTdHJpbmcsIEFycmF5LCBSZWdFeHAgXSxcbiAga2VlcEFsaXZlTWF4OiBOdW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBhbmVsRW1pdHMgPSBbICd1cGRhdGU6bW9kZWxWYWx1ZScsICdiZWZvcmVUcmFuc2l0aW9uJywgJ3RyYW5zaXRpb24nIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgeyBnZXRDYWNoZVdpdGhGbiB9ID0gdXNlQ2FjaGUoKVxuXG4gIGxldCBwYW5lbHMsIGZvcmNlZFBhbmVsVHJhbnNpdGlvblxuXG4gIGNvbnN0IHBhbmVsSW5kZXggPSByZWYobnVsbClcbiAgY29uc3QgcGFuZWxUcmFuc2l0aW9uID0gcmVmKG51bGwpXG5cbiAgZnVuY3Rpb24gb25Td2lwZSAoZXZ0KSB7XG4gICAgY29uc3QgZGlyID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndXAnIDogJ2xlZnQnXG4gICAgZ29Ub1BhbmVsQnlPZmZzZXQoKHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSAqIChldnQuZGlyZWN0aW9uID09PSBkaXIgPyAxIDogLTEpKVxuICB9XG5cbiAgY29uc3QgcGFuZWxEaXJlY3RpdmVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIC8vIGlmIHByb3BzLnN3aXBlYWJsZVxuICAgIHJldHVybiBbIFtcbiAgICAgIFRvdWNoU3dpcGUsXG4gICAgICBvblN3aXBlLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBob3Jpem9udGFsOiBwcm9wcy52ZXJ0aWNhbCAhPT0gdHJ1ZSxcbiAgICAgICAgdmVydGljYWw6IHByb3BzLnZlcnRpY2FsLFxuICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGNvbnN0IHRyYW5zaXRpb25QcmV2ID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy50cmFuc2l0aW9uUHJldiB8fCBgc2xpZGUtJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnZG93bicgOiAncmlnaHQnIH1gXG4gIClcblxuICBjb25zdCB0cmFuc2l0aW9uTmV4dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMudHJhbnNpdGlvbk5leHQgfHwgYHNsaWRlLSR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0JyB9YFxuICApXG5cbiAgY29uc3QgdHJhbnNpdGlvblN0eWxlID0gY29tcHV0ZWQoXG4gICAgKCkgPT4gYC0tcS10cmFuc2l0aW9uLWR1cmF0aW9uOiAkeyBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfW1zYFxuICApXG5cbiAgY29uc3QgY29udGVudEtleSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICB0eXBlb2YgcHJvcHMubW9kZWxWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHByb3BzLm1vZGVsVmFsdWUgPT09ICdudW1iZXInXG4gICAgICA/IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIDogU3RyaW5nKHByb3BzLm1vZGVsVmFsdWUpXG4gICkpXG5cbiAgY29uc3Qga2VlcEFsaXZlUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIGluY2x1ZGU6IHByb3BzLmtlZXBBbGl2ZUluY2x1ZGUsXG4gICAgZXhjbHVkZTogcHJvcHMua2VlcEFsaXZlRXhjbHVkZSxcbiAgICBtYXg6IHByb3BzLmtlZXBBbGl2ZU1heFxuICB9KSlcblxuICBjb25zdCBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLmtlZXBBbGl2ZUluY2x1ZGUgIT09IHZvaWQgMFxuICAgIHx8IHByb3BzLmtlZXBBbGl2ZUV4Y2x1ZGUgIT09IHZvaWQgMFxuICApXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBpc1ZhbGlkUGFuZWxOYW1lKG5ld1ZhbCkgPT09IHRydWVcbiAgICAgID8gZ2V0UGFuZWxJbmRleChuZXdWYWwpXG4gICAgICA6IC0xXG5cbiAgICBpZiAoZm9yY2VkUGFuZWxUcmFuc2l0aW9uICE9PSB0cnVlKSB7XG4gICAgICB1cGRhdGVQYW5lbFRyYW5zaXRpb24oXG4gICAgICAgIGluZGV4ID09PSAtMSA/IDAgOiAoaW5kZXggPCBnZXRQYW5lbEluZGV4KG9sZFZhbCkgPyAtMSA6IDEpXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHBhbmVsSW5kZXgudmFsdWUgIT09IGluZGV4KSB7XG4gICAgICBwYW5lbEluZGV4LnZhbHVlID0gaW5kZXhcbiAgICAgIGVtaXQoJ2JlZm9yZVRyYW5zaXRpb24nLCBuZXdWYWwsIG9sZFZhbClcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgZW1pdCgndHJhbnNpdGlvbicsIG5ld1ZhbCwgb2xkVmFsKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gbmV4dFBhbmVsICgpIHsgZ29Ub1BhbmVsQnlPZmZzZXQoMSkgfVxuICBmdW5jdGlvbiBwcmV2aW91c1BhbmVsICgpIHsgZ29Ub1BhbmVsQnlPZmZzZXQoLTEpIH1cblxuICBmdW5jdGlvbiBnb1RvUGFuZWwgKG5hbWUpIHtcbiAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG5hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkUGFuZWxOYW1lIChuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgIT09IHZvaWQgMCAmJiBuYW1lICE9PSBudWxsICYmIG5hbWUgIT09ICcnXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYW5lbEluZGV4IChuYW1lKSB7XG4gICAgcmV0dXJuIHBhbmVscy5maW5kSW5kZXgocGFuZWwgPT4ge1xuICAgICAgcmV0dXJuIHBhbmVsLnByb3BzLm5hbWUgPT09IG5hbWVcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gJydcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbmFibGVkUGFuZWxzICgpIHtcbiAgICByZXR1cm4gcGFuZWxzLmZpbHRlcihwYW5lbCA9PiB7XG4gICAgICByZXR1cm4gcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gJydcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW5lbFRyYW5zaXRpb24gKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHZhbCA9IGRpcmVjdGlvbiAhPT0gMCAmJiBwcm9wcy5hbmltYXRlZCA9PT0gdHJ1ZSAmJiBwYW5lbEluZGV4LnZhbHVlICE9PSAtMVxuICAgICAgPyAncS10cmFuc2l0aW9uLS0nICsgKGRpcmVjdGlvbiA9PT0gLTEgPyB0cmFuc2l0aW9uUHJldi52YWx1ZSA6IHRyYW5zaXRpb25OZXh0LnZhbHVlKVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAocGFuZWxUcmFuc2l0aW9uLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHBhbmVsVHJhbnNpdGlvbi52YWx1ZSA9IHZhbFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdvVG9QYW5lbEJ5T2Zmc2V0IChkaXJlY3Rpb24sIHN0YXJ0SW5kZXggPSBwYW5lbEluZGV4LnZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gc3RhcnRJbmRleCArIGRpcmVjdGlvblxuXG4gICAgd2hpbGUgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBwYW5lbHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBvcHQgPSBwYW5lbHNbIGluZGV4IF1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHQgIT09IHZvaWQgMFxuICAgICAgICAmJiBvcHQucHJvcHMuZGlzYWJsZSAhPT0gJydcbiAgICAgICAgJiYgb3B0LnByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICB1cGRhdGVQYW5lbFRyYW5zaXRpb24oZGlyZWN0aW9uKVxuICAgICAgICBmb3JjZWRQYW5lbFRyYW5zaXRpb24gPSB0cnVlXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgb3B0LnByb3BzLm5hbWUpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGZvcmNlZFBhbmVsVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpbmRleCArPSBkaXJlY3Rpb25cbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaW5maW5pdGUgPT09IHRydWUgJiYgcGFuZWxzLmxlbmd0aCA+IDAgJiYgc3RhcnRJbmRleCAhPT0gLTEgJiYgc3RhcnRJbmRleCAhPT0gcGFuZWxzLmxlbmd0aCkge1xuICAgICAgZ29Ub1BhbmVsQnlPZmZzZXQoZGlyZWN0aW9uLCBkaXJlY3Rpb24gPT09IC0xID8gcGFuZWxzLmxlbmd0aCA6IC0xKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhbmVsSW5kZXggKCkge1xuICAgIGNvbnN0IGluZGV4ID0gZ2V0UGFuZWxJbmRleChwcm9wcy5tb2RlbFZhbHVlKVxuXG4gICAgaWYgKHBhbmVsSW5kZXgudmFsdWUgIT09IGluZGV4KSB7XG4gICAgICBwYW5lbEluZGV4LnZhbHVlID0gaW5kZXhcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxDb250ZW50Q2hpbGQgKCkge1xuICAgIGNvbnN0IHBhbmVsID0gaXNWYWxpZFBhbmVsTmFtZShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZVxuICAgICAgJiYgdXBkYXRlUGFuZWxJbmRleCgpXG4gICAgICAmJiBwYW5lbHNbIHBhbmVsSW5kZXgudmFsdWUgXVxuXG4gICAgcmV0dXJuIHByb3BzLmtlZXBBbGl2ZSA9PT0gdHJ1ZVxuICAgICAgPyBbXG4gICAgICAgICAgaChLZWVwQWxpdmUsIGtlZXBBbGl2ZVByb3BzLnZhbHVlLCBbXG4gICAgICAgICAgICBoKFxuICAgICAgICAgICAgICBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/IGdldENhY2hlV2l0aEZuKGNvbnRlbnRLZXkudmFsdWUsICgpID0+ICh7IC4uLlBhbmVsV3JhcHBlciwgbmFtZTogY29udGVudEtleS52YWx1ZSB9KSlcbiAgICAgICAgICAgICAgICA6IFBhbmVsV3JhcHBlcixcbiAgICAgICAgICAgICAgeyBrZXk6IGNvbnRlbnRLZXkudmFsdWUsIHN0eWxlOiB0cmFuc2l0aW9uU3R5bGUudmFsdWUgfSxcbiAgICAgICAgICAgICAgKCkgPT4gcGFuZWxcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtcGFuZWwgc2Nyb2xsJyxcbiAgICAgICAgICAgIHN0eWxlOiB0cmFuc2l0aW9uU3R5bGUudmFsdWUsXG4gICAgICAgICAgICBrZXk6IGNvbnRlbnRLZXkudmFsdWUsXG4gICAgICAgICAgICByb2xlOiAndGFicGFuZWwnXG4gICAgICAgICAgfSwgWyBwYW5lbCBdKVxuICAgICAgICBdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYW5lbENvbnRlbnQgKCkge1xuICAgIGlmIChwYW5lbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHMuYW5pbWF0ZWQgPT09IHRydWVcbiAgICAgID8gWyBoKFRyYW5zaXRpb24sIHsgbmFtZTogcGFuZWxUcmFuc2l0aW9uLnZhbHVlIH0sIGdldFBhbmVsQ29udGVudENoaWxkKSBdXG4gICAgICA6IGdldFBhbmVsQ29udGVudENoaWxkKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhbmVsc0xpc3QgKHNsb3RzKSB7XG4gICAgcGFuZWxzID0gZ2V0Tm9ybWFsaXplZFZOb2RlcyhcbiAgICAgIGhTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuICAgICkuZmlsdGVyKFxuICAgICAgcGFuZWwgPT4gcGFuZWwucHJvcHMgIT09IG51bGxcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuc2xvdCA9PT0gdm9pZCAwXG4gICAgICAgICYmIGlzVmFsaWRQYW5lbE5hbWUocGFuZWwucHJvcHMubmFtZSkgPT09IHRydWVcbiAgICApXG5cbiAgICByZXR1cm4gcGFuZWxzLmxlbmd0aFxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxzICgpIHtcbiAgICByZXR1cm4gcGFuZWxzXG4gIH1cblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgIG5leHQ6IG5leHRQYW5lbCxcbiAgICBwcmV2aW91czogcHJldmlvdXNQYW5lbCxcbiAgICBnb1RvOiBnb1RvUGFuZWxcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhbmVsSW5kZXgsXG4gICAgcGFuZWxEaXJlY3RpdmVzLFxuXG4gICAgdXBkYXRlUGFuZWxzTGlzdCxcbiAgICB1cGRhdGVQYW5lbEluZGV4LFxuXG4gICAgZ2V0UGFuZWxDb250ZW50LFxuICAgIGdldEVuYWJsZWRQYW5lbHMsXG4gICAgZ2V0UGFuZWxzLFxuXG4gICAgaXNWYWxpZFBhbmVsTmFtZSxcblxuICAgIGtlZXBBbGl2ZVByb3BzLFxuICAgIG5lZWRzVW5pcXVlS2VlcEFsaXZlV3JhcHBlcixcblxuICAgIGdvVG9QYW5lbEJ5T2Zmc2V0LFxuICAgIGdvVG9QYW5lbCxcblxuICAgIG5leHRQYW5lbCxcbiAgICBwcmV2aW91c1BhbmVsXG4gIH1cbn1cbiIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZVBhbmVsQ2hpbGRQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXBhbmVsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFiUGFuZWwnLFxuXG4gIHByb3BzOiB1c2VQYW5lbENoaWxkUHJvcHMsXG5cbiAgc2V0dXAgKF8sIHsgc2xvdHMgfSkge1xuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWItcGFuZWwnLCByb2xlOiAndGFicGFuZWwnIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VQYW5lbCwgeyB1c2VQYW5lbFByb3BzLCB1c2VQYW5lbEVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcGFuZWwuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYlBhbmVscycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VQYW5lbFByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wc1xuICB9LFxuXG4gIGVtaXRzOiB1c2VQYW5lbEVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgeyB1cGRhdGVQYW5lbHNMaXN0LCBnZXRQYW5lbENvbnRlbnQsIHBhbmVsRGlyZWN0aXZlcyB9ID0gdXNlUGFuZWwoKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10YWItcGFuZWxzIHEtcGFuZWwtcGFyZW50J1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYi1wYW5lbHMtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1cGRhdGVQYW5lbHNMaXN0KHNsb3RzKVxuXG4gICAgICByZXR1cm4gaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSxcbiAgICAgICAgZ2V0UGFuZWxDb250ZW50KCksXG4gICAgICAgICdwYW4nLFxuICAgICAgICBwcm9wcy5zd2lwZWFibGUsXG4gICAgICAgICgpID0+IHBhbmVsRGlyZWN0aXZlcy52YWx1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdHJhbnNpdGlvbi1zaG93PVwiZmFkZVwiXG4gICAgdHJhbnNpdGlvbi1oaWRlPVwiZmFkZVwiXG4gICAgcG9zaXRpb249XCJ0b3BcIlxuICA+XG4gICAgPHEtY2FyZCBib3JkZXJlZCBjbGFzcz1cInEtbXQtbGdcIiBzdHlsZT1cIndpZHRoOiA3MDBweDsgbWF4LXdpZHRoOiA4MHZ3OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsMzAsMzApOyBcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5TZXR0aW5nczwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQgY2xhc3M9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgICAgIDxxLXRhYnNcblxuICAgICAgICAgICAgdi1tb2RlbD1cInRhYlwiXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgYWN0aXZlLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgaW5kaWNhdG9yLWNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICBhbGlnbj1cImp1c3RpZnlcIlxuICAgICAgICAgICAgbmFycm93LWluZGljYXRvclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLXRhYiBuYW1lPVwiaG9tZXBhZ2VcIiBsYWJlbD1cIkhvbWVwYWdlXCIgLz5cbiAgICAgICAgICAgIDxxLXRhYiBuYW1lPVwicXVldWVcIiBsYWJlbD1cIlF1ZXVlXCIgLz5cbiAgICAgICAgICA8L3EtdGFicz5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICAgICAgPHEtdGFiLXBhbmVscyB2LW1vZGVsPVwidGFiXCIgYW5pbWF0ZWQgY2xhc3M9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJob21lcGFnZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hbGwgcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgdGV4dC1oNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIEhvbWVwYWdlIE1vZGU6XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJzaGFwZVwiIHZhbD1cIkluZmluaXRlIFNjcm9sbFwiIGxhYmVsPVwiSW5maW5pdGUgU2Nyb2xsXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwic2hhcGVcIiB2YWw9XCJQYWdpbmF0aW9uXCIgbGFiZWw9XCJQYWdpbmF0aW9uXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cblxuICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJxdWV1ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZCBjb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWFsbCByb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgdGV4dC1oNlwiPlxuICAgICAgICAgICAgICAgICAgICBQbGF5IEJ1dHRvbiBCZWhhdmlvcjpcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJzaGFwZVwiIHZhbD1cIkluZmluaXRlIFNjcm9sbFwiIGxhYmVsPVwiSW5maW5pdGUgU2Nyb2xsXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cInNoYXBlXCIgdmFsPVwiUGFnaW5hdGlvblwiIGxhYmVsPVwiUGFnaW5hdGlvblwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS10YWItcGFuZWw+XG4gICAgICAgICAgPC9xLXRhYi1wYW5lbHM+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQge2RlZmluZUNvbXBvbmVudH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1NldHRpbmdzTW9kYWwnXG59KTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHRhYiA9IHJlZignJylcbmNvbnN0IHNoYXBlID0gcmVmKCcnKVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgPlxuICAgIDxxLWNhcmQgYm9yZGVyZWQgY2xhc3M9XCJxLW10LWxnXCIgc3R5bGU9XCJ3aWR0aDogNzAwcHg7IG1heC13aWR0aDogODB2dzsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2Niw2Niw2NiwwLjk3KTsgXCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+QWJvdXQ8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkIGNsYXNzPVwidHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICA8cS10YWJzXG5cbiAgICAgICAgICAgIHYtbW9kZWw9XCJ0YWJcIlxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIGFjdGl2ZS1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGluZGljYXRvci1jb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgYWxpZ249XCJqdXN0aWZ5XCJcbiAgICAgICAgICAgIG5hcnJvdy1pbmRpY2F0b3JcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS10YWIgbmFtZT1cIm1lZGlhXCIgbGFiZWw9XCJNZWRpYVwiIC8+XG4gICAgICAgICAgICA8cS10YWIgbmFtZT1cImNvZGVcIiBsYWJlbD1cIkNvZGVcIiAvPlxuICAgICAgICAgIDwvcS10YWJzPlxuXG4gICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgICAgICA8cS10YWItcGFuZWxzIHYtbW9kZWw9XCJ0YWJcIiBhbmltYXRlZCBjbGFzcz1cInRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5Tb3VyY2UgJiBDcmVkaXRzPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cS1saXN0IGJvcmRlcmVkIHNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9ueWFhLnNpL3ZpZXcvMTU3MDczMFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIG92ZXJsaW5lPk11c2ljIEZpbGVzICYgQ29sbGVjdGlvbjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPltDb25ub3JfQ1pdIFRMTUMgdjI8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vdGh3aWtpLmNjL1wiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIG92ZXJsaW5lPk11c2ljIE1ldGFkYXRhPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+VGh3aWtpLmNjPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgIDwvcS10YWItcGFuZWw+XG5cbiAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwiY29kZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+U291cmNlPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cS1saXN0IGJvcmRlcmVkIHNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NxejI2OS9UbG1jSW5mb1Byb3ZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+VExNQyBEYXRhIFByZXByb2Nlc3NvcjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gbGluZXM9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUHl0aG9uM1xuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NxejI2OS9UbG1jSW5mb1Byb3ZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+VExNQyBUYWdnZXIgKFRod2lraSk8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIFB5dGhvbjNcbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zcXoyNjkvbXVzaWMtcGxheWVyXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+RnJvbnRlbmQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPlZ1ZS5qcyAzICsgQ29tcG9zaXRpb24gQVBJICsgVHlwZXNjcmlwdCArIFF1YXNhcjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3F6MjY5L3RsbWMtcGxheWVyXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+QmFja2VuZDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gbGluZXM9XCIyXCI+VmFyaW91czwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1weS1zbSB0cmFuc3BhcmVudFwiPjwvcS1zZXBhcmF0b3I+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkFQSSBFeHBsb3JlcjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cS1saXN0IGJvcmRlcmVkIHNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiA6aHJlZj1cIm11c2ljRGF0YVN3YWdnZXJVcmxcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIj5NdXNpYyBEYXRhIEFQSTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gbGluZXM9XCIyXCI+QVNQLk5FVCBDb3JlICsgUG9zdGdyZVNRTDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIHRhcmdldD1cIl9ibGFua1wiIDpocmVmPVwiYXV0aFN3YWdnZXJVcmxcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIj5BdXRoZW50aWNhdGlvbiBBUEk8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPkFTUC5ORVQgQ29yZSArIFBvc3RncmVTUUw8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiA6aHJlZj1cInBsYXlsaXN0U3dhZ2dlclVybFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlBsYXlsaXN0IEFQSTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gbGluZXM9XCIyXCI+QVNQLk5FVCBDb3JlICsgUG9zdGdyZVNRTDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgIDwvcS10YWItcGFuZWxzPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tIFwic3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyXCI7XG5cbmNvbnN0IHRhYiA9IHJlZignbWVkaWEnKTtcblxuY29uc3QgYXBpQ29uZmlnUHJvdmlkZXIgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpO1xuY29uc3QgYXV0aFN3YWdnZXJVcmwgPSBgJHthcGlDb25maWdQcm92aWRlci5iYXNlUGF0aH0vc3dhZ2dlci9hdXRoYDtcbmNvbnN0IG11c2ljRGF0YVN3YWdnZXJVcmwgPSBgJHthcGlDb25maWdQcm92aWRlci5iYXNlUGF0aH0vc3dhZ2dlci9tdXNpYy1kYXRhYFxuY29uc3QgcGxheWxpc3RTd2FnZ2VyVXJsID0gYCR7YXBpQ29uZmlnUHJvdmlkZXIuYmFzZVBhdGh9L3N3YWdnZXIvcGxheWxpc3RgXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxxLWxpc3Qgdi1pZj1cImlzTG9nZ2VkSW5cIj5cbiAgICAgIDxxLWl0ZW0gdi1mb3I9XCJsaW5rIGluIGNvbGxlY3Rpb25OYXZpZ2F0aW9uc1wiIDprZXk9XCJsaW5rLnRleHRcIlxuICAgICAgICAgICAgICB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuM1xuICAgICAgICAgICAgICA6dG89XCJsaW5rLnJvdXRlXCIgZXhhY3RcbiAgICAgICAgICAgICAgYWN0aXZlLWNsYXNzPVwidGV4dC13aGl0ZSBiZy1ncmV5LTggdGV4dC13ZWlnaHQtYm9sZGVyXCI+XG4gICAgICAgIDwhLS0gICAgICAgICAgICA6YWN0aXZlPVwiY3VycmVudFBhdGggPT09IGxpbmsucm91dGUubmFtZVwiLS0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvbiA6bmFtZT1cImxpbmsuaWNvblwiIHNpemU9XCIyNHB4XCIvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHt7bGluay50ZXh0fX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuXG48IS0tICAgICAgPHEtaXRlbSB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuMz4tLT5cbjwhLS0gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+LS0+XG48IS0tICAgICAgICAgIDxxLWljb24gOm5hbWU9XCJvdXRsaW5lZFBsYXlsaXN0QWRkXCIgc2l6ZT1cIjI0cHhcIi8+LS0+XG48IS0tICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPi0tPlxuPCEtLSAgICAgICAgPHEtaXRlbS1zZWN0aW9uPi0tPlxuPCEtLSAgICAgICAgICA8cS1pdGVtLWxhYmVsPi0tPlxuPCEtLSAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPi0tPlxuPCEtLSAgICAgICAgICAgIENyZWF0ZSBQbGF5bGlzdC0tPlxuPCEtLSAgICAgICAgICA8L3NwYW4+LS0+XG48IS0tICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPi0tPlxuPCEtLSAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj4tLT5cbjwhLS0gICAgICA8L3EtaXRlbT4tLT5cblxuICAgICAgPHEtaXRlbSB2LWZvcj1cIml0ZW0gaW4gcGxheWxpc3RJdGVtc1wiIDprZXk9XCJpdGVtXCJcbiAgICAgICAgICAgICAgdi1yaXBwbGUgY2xpY2thYmxlIDppbnNldC1sZXZlbD0wLjMgQGNsaWNrPVwiZ290b1BsYXlsaXN0KGl0ZW0pXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvbiA6bmFtZT1cIm91dGxpbmVkUGxheWxpc3RQbGF5XCIgc2l6ZT1cIjI0cHhcIi8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICB7e2l0ZW0ubmFtZX19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG5cbiAgICA8cS1saXN0IHYtaWY9XCIhaXNMb2dnZWRJblwiPlxuICAgICAgPHEtaXRlbSA6aW5zZXQtbGV2ZWw9XCIwLjNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBjbGFzcz1cImxpbmtcIiBAY2xpY2s9XCJzaG93TG9naW5EaWFsb2dcIj5Mb2cgaW48L2E+IG9yXG4gICAgICAgICAgPGEgY2xhc3M9XCJsaW5rXCIgQGNsaWNrPVwic2hvd1JlZ2lzdGVyRGlhbG9nXCI+U2lnbiB1cDwvYT5cbiAgICAgICAgICB0byBjcmVhdGUgYW5kIG1hbmFnZSBwbGF5bGlzdHNcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRGYXZvcml0ZUJvcmRlcixcbiAgb3V0bGluZWRIaXN0b3J5LFxuICBvdXRsaW5lZExpYnJhcnlNdXNpYyxcbiAgb3V0bGluZWRQbGF5bGlzdEFkZCxcbiAgb3V0bGluZWRQbGF5bGlzdFBsYXlcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHt1c2VBdXRoU3RvcmV9IGZyb20gJ3N0b3Jlcy9hdXRoRGF0YVN0b3JlJztcbmltcG9ydCB7Y29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbk1vZGFsIGZyb20gJ2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uTW9kYWwudnVlJztcbmltcG9ydCB7dXNlUXVhc2FyfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHtQbGF5bGlzdEFwaSwgUGxheWxpc3RSZWFkRHRvfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tICdjb21wb25lbnRzL0xvZ2luTW9kYWwudnVlJztcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gJ3NyYy91dGlscy9BcGlDb25maWdQcm92aWRlcic7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge3VzZVBsYXlsaXN0U3RvcmV9IGZyb20gXCJzdG9yZXMvcGxheWxpc3RTdG9yZVwiO1xuXG5jb25zdCBhdXRoU3RvcmUgPSB1c2VBdXRoU3RvcmUoKTtcbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHBsYXlsaXN0U3RvcmUgPSB1c2VQbGF5bGlzdFN0b3JlKCk7XG5cbmNvbnN0IHBsYXlsaXN0SXRlbXMgPSBjb21wdXRlZCgoKSA9PiBwbGF5bGlzdFN0b3JlLmdldFBsYXlsaXN0cyk7XG5cbmNvbnN0IGlzTG9nZ2VkSW4gPSBjb21wdXRlZCgoKSA9PiBhdXRoU3RvcmUuaXNMb2dnZWRJbik7XG5cbmNvbnN0IHBsYXlsaXN0QXBpID0gbmV3IFBsYXlsaXN0QXBpKEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKCkpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBpZiAoaXNMb2dnZWRJbi52YWx1ZSkge1xuICAgIGxldCBhbGxQbGF5bGlzdHMgPSBhd2FpdCBwbGF5bGlzdEFwaS5nZXRDdXJyZW50VXNlclBsYXlsaXN0KCk7XG4gICAgbGV0IG5vcm1hbFBsYXlsaXN0cyA9IGFsbFBsYXlsaXN0cy5maWx0ZXIocCA9PiBwLnR5cGUgPT0gJ05vcm1hbCcpO1xuICAgIHBsYXlsaXN0U3RvcmUuc2V0UGxheWxpc3RzKG5vcm1hbFBsYXlsaXN0cyk7XG4gIH1cbn0pXG5cbmNvbnN0IGNvbGxlY3Rpb25OYXZpZ2F0aW9ucyA9IFtcbiAge1xuICAgIHRleHQ6ICdMaWJyYXJ5JyxcbiAgICBpY29uOiBvdXRsaW5lZExpYnJhcnlNdXNpYyxcbiAgICByb3V0ZTogeyBuYW1lOiAnbGlicmFyeScgfVxuICB9LFxuICB7XG4gICAgdGV4dDogJ0hpc3RvcnknLFxuICAgIGljb246IG91dGxpbmVkSGlzdG9yeSxcbiAgICByb3V0ZTogeyBuYW1lOiAnaGlzdG9yeScgfVxuICB9LFxuICB7XG4gICAgdGV4dDogJ0Zhdm9yaXRlJyxcbiAgICBpY29uOiBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdmYXZvcml0ZScgfVxuICB9XG5dXG5cbmNvbnN0IGdvdG9QbGF5bGlzdCA9IChwbGF5bGlzdDogUGxheWxpc3RSZWFkRHRvKSA9PiB7XG4gIHJvdXRlci5wdXNoKHtuYW1lOiAncGxheWxpc3QnLCBwYXJhbXM6IHsgcGxheWxpc3RJZDogcGxheWxpc3QuaWQgfX0pXG59XG5cbmNvbnN0IHNob3dSZWdpc3RlckRpYWxvZyA9ICgpID0+IHtcbiAgJHEuZGlhbG9nKHtcbiAgICBjb21wb25lbnQ6IFJlZ2lzdHJhdGlvbk1vZGFsXG4gIH0pO1xufVxuXG5jb25zdCBzaG93TG9naW5EaWFsb2cgPSAoKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBMb2dpbk1vZGFsXG4gIH0pO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ubGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuPCEtLSAgICA8cS1saXN0IHBhZGRpbmc+LS0+XG48IS0tICAgICAgPHEtaXRlbT4tLT5cbjwhLS0gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj4tLT5cbjwhLS0gICAgICAgICAgPHEtaXRlbS1sYWJlbD4tLT5cbjwhLS0gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSB0ZXh0LWg1XCI+LS0+XG48IS0tICAgICAgICAgICAgICBMT0dPIEhFUkUtLT5cbjwhLS0gICAgICAgICAgICA8L3NwYW4+LS0+XG48IS0tICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPi0tPlxuPCEtLSAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj4tLT5cbjwhLS0gICAgICA8L3EtaXRlbT4tLT5cbjwhLS0gICAgPC9xLWxpc3Q+LS0+XG5cbiAgICA8cS1saXN0IHBhZGRpbmc+XG4gICAgICA8cS1pdGVtIHYtZm9yPVwibGluayBpbiBuYXZpZ2F0aW9uc1wiIDprZXk9XCJsaW5rLnRleHRcIlxuICAgICAgICAgICAgICB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuM1xuICAgICAgICAgICAgICA6dG89XCJsaW5rLnJvdXRlXCIgZXhhY3RcbiAgICAgICAgICAgICAgOmFjdGl2ZT1cImN1cnJlbnRQYXRoID09PSBsaW5rLnJvdXRlLm5hbWVcIlxuICAgICAgICAgICAgICBhY3RpdmUtY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWdyZXktOCB0ZXh0LXdlaWdodC1ib2xkZXJcIj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIDpuYW1lPVwibGluay5pY29uXCIgc2l6ZT1cIjI0cHhcIi8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAge3tsaW5rLnRleHR9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1teS1zbVwiIC8+XG5cbiAgICA8RHJhd2VyUGxheWxpc3RMaXN0PjwvRHJhd2VyUGxheWxpc3RMaXN0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQge2RlZmluZUNvbXBvbmVudH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0RyYXdlck5hdmlnYXRpb24nLFxuICBjb21wb25lbnRzOiB7XG4gIH1cbn0pXG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkSG9tZSxcbiAgb3V0bGluZWRTZWFyY2gsXG4gIG91dGxpbmVkUmFkaW9cbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuaW1wb3J0IERyYXdlclBsYXlsaXN0TGlzdCBmcm9tICdjb21wb25lbnRzL0RyYXdlclBsYXlsaXN0TGlzdC52dWUnO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgY3VycmVudFBhdGggPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLm5hbWU7XG59KVxuXG5jb25zdCBuYXZpZ2F0aW9ucyA9IFtcbiAge1xuICAgIHRleHQ6ICdIb21lJyxcbiAgICBpY29uOiBvdXRsaW5lZEhvbWUsXG4gICAgcm91dGU6IHsgbmFtZTogJ2hvbWVQYWdpbmF0ZScgfVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1NlYXJjaCcsXG4gICAgaWNvbjogb3V0bGluZWRTZWFyY2gsXG4gICAgcm91dGU6IHsgbmFtZTogJ3NlYXJjaCcgfVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1JhZGlvJyxcbiAgICBpY29uOiBvdXRsaW5lZFJhZGlvLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdyYWRpbycgfVxuICB9XG5dXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtbGF5b3V0IHZpZXc9XCJsSGggTHBSIGZGZlwiPlxuICAgIDxxLWhlYWRlciBpZD1cImhlYWRlclwiIGJvcmRlcmVkPlxuICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCBzaXplPVwibGdcIiBjb2xvcj1cIndoaXRlXCIgOmljb249XCJvdXRsaW5lZEFycm93QmFja1wiIEBjbGljaz1cImJhY2tcIj5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IHNpemU9XCJsZ1wiIGNvbG9yPVwid2hpdGVcIiA6aWNvbj1cIm91dGxpbmVkQXJyb3dGb3J3YXJkXCIgQGNsaWNrPVwiZm9yd2FyZFwiPlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgIDxxLXNwYWNlIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLXNtIHJvdyBpdGVtcy1jZW50ZXIgbm8td3JhcFwiPlxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRJbmZvXCIgdi1pZj1cIiRxLnNjcmVlbi5ndC5zbVwiIEBjbGljaz1cInNob3dBYm91dERpYWxvZ1wiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5BYm91dDwvcS10b29sdGlwPlxuICAgICAgICAgIDwvcS1idG4+XG5cbiAgICAgICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkU2V0dGluZ3NcIiB2LWlmPVwiJHEuc2NyZWVuLmd0LnNtXCIgQGNsaWNrPVwic2hvd1NldHRpbmdzRGlhbG9nXCI+XG4gICAgICAgICAgICA8cS10b29sdGlwPlNldHRpbmdzPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxVc2VyQWNjb3VudEJ1dHRvbj48L1VzZXJBY2NvdW50QnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgPC9xLWhlYWRlcj5cblxuICAgIDxxLWRyYXdlciBzaG93LWlmLWFib3ZlIHNpZGU9XCJsZWZ0XCIgOndpZHRoPVwiMjUwXCI+XG4gICAgICA8ZHJhd2VyLW5hdmlnYXRpb24+PC9kcmF3ZXItbmF2aWdhdGlvbj5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtZHJhd2VyIHYtbW9kZWw9XCJzaG93UXVldWVcIiBzaWRlPVwicmlnaHRcIiA6d2lkdGg9XCIyNzBcIj5cbiAgICAgIDxkcmF3ZXItcXVldWUgaWQ9XCJxdWV1ZS1kcmF3ZXJcIj48L2RyYXdlci1xdWV1ZT5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtcGFnZS1jb250YWluZXIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kOiBiZ0dyYWRpZW50IH1cIiBzdHlsZT1cInRyYW5zaXRpb246IGJhY2tncm91bmQsIDI1MG1zLCBsaW5lYXIgIWltcG9ydGFudDtcIj5cbiAgICAgIDxyb3V0ZXItdmlldyB2LXNsb3Q9XCJ7IENvbXBvbmVudCB9XCI+XG4gICAgICAgIDxrZWVwLWFsaXZlIDppbmNsdWRlPVwiWydIb21lUGFnZVBhZ2luYXRlJywgJ0hvbWVQYWdlSW5mU2Nyb2xsJywgJ0FydGlzdFBhZ2UnXVwiPlxuICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XG4gICAgICAgIDwva2VlcC1hbGl2ZT5cbiAgICAgIDwvcm91dGVyLXZpZXc+XG4gICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuXG4gICAgPHEtZm9vdGVyIGNsYXNzPVwiYm9yZGVyLXRvcC10aGluXCI+XG4gICAgICA8cGxheWVyLWNvbnRyb2w+PC9wbGF5ZXItY29udHJvbD5cbiAgICA8L3EtZm9vdGVyPlxuXG4gIDwvcS1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJztcbmltcG9ydCBEcmF3ZXJOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvRHJhd2VyTmF2aWdhdGlvbi52dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTWFpbkxheW91dCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBEcmF3ZXJOYXZpZ2F0aW9uXG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZEluZm8sXG4gIG91dGxpbmVkQXJyb3dGb3J3YXJkLFxuICBvdXRsaW5lZEFycm93QmFjayxcbiAgb3V0bGluZWRTZXR0aW5nc1xufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VRdWFzYXIsIHNldENzc1ZhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgUGxheWVyQ29udHJvbCBmcm9tICdjb21wb25lbnRzL1BsYXllckNvbnRyb2wudnVlJztcbmltcG9ydCB7dXNlUXVldWVEaXNwbGF5U3RvcmV9IGZyb20gJ3N0b3Jlcy9zaG93UXVldWUnO1xuaW1wb3J0IERyYXdlclF1ZXVlIGZyb20gJ2NvbXBvbmVudHMvRHJhd2VyUXVldWUudnVlJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQgVXNlckFjY291bnRCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Vc2VyQWNjb3VudEJ1dHRvbi52dWUnO1xuaW1wb3J0IFNldHRpbmdzTW9kYWwgZnJvbSAnY29tcG9uZW50cy9TZXR0aW5nc01vZGFsLnZ1ZSc7XG5pbXBvcnQgQWJvdXREaWFsb2cgZnJvbSAnY29tcG9uZW50cy9BYm91dERpYWxvZy52dWUnXG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBiZ1N0eWxlU3RvcmUgPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IGJnR3JhZGllbnQxID0gY29tcHV0ZWQoKCkgPT4gYmdTdHlsZVN0b3JlLmdldEdyYWRpZW50MSk7XG5jb25zdCBiZ0dyYWRpZW50MiA9IGNvbXB1dGVkKCgpID0+IGJnU3R5bGVTdG9yZS5nZXRHcmFkaWVudDIpXG5jb25zdCBiZ0dyYWRpZW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgxODBkZWcsICR7YmdHcmFkaWVudDEudmFsdWV9IDAlLCAke2JnR3JhZGllbnQyLnZhbHVlfSAzMCUsIHJnYmEoMCwwLDAsMSkgNTAlKWA7XG59KTtcbmNvbnN0IGJhY2sgPSAoKSA9PiB7XG4gIHJvdXRlci5iYWNrKCk7XG59XG5cbmNvbnN0IGZvcndhcmQgPSAoKSA9PiB7XG4gIHJvdXRlci5mb3J3YXJkKCk7XG59XG5cbmNvbnN0IHF1ZXVlRGlzcGxheVN0b3JlID0gdXNlUXVldWVEaXNwbGF5U3RvcmUoKTtcblxuY29uc3Qgc2hvd1F1ZXVlID0gY29tcHV0ZWQoKCkgPT4gcXVldWVEaXNwbGF5U3RvcmUuc2hvdylcblxuY29uc3QgcSA9IHVzZVF1YXNhcigpO1xucS5kYXJrLnNldCh0cnVlKTtcbnNldENzc1ZhcigncHJpbWFyeScsICcjMDAwMDAwJylcblxuY29uc3Qgc2hvd1NldHRpbmdzRGlhbG9nID0gKCkgPT4ge1xuICBxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBTZXR0aW5nc01vZGFsXG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd0Fib3V0RGlhbG9nID0gKCkgPT4ge1xuICBxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBBYm91dERpYWxvZ1xuICB9KTtcbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiNxLWFwcCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMykgPiBhc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG5cbiNoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NCwgNTQsIDAuNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcbn1cblxuI3F1ZXVlLWRyYXdlciB7XG4gIC8qYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NCwgNTQsIDAuNjMpO1xuICAvKmJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTsqL1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJydW50aW1lLkJhc2VBUEkiLCJydW50aW1lLkpTT05BcGlSZXNwb25zZSIsIm9mZnNldCIsInN0eWxlIiwicG9zaXRpb24iLCJzaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0aW1lciIsInN0ZXAiLCJkcmFnZ2luZyIsImNsYXNzZXMiLCJyYXRpbyIsIl9fZGVmYXVsdF9fIiwic2hvdyIsImZvY3VzIiwicmVmIiwidmFsaWQiLCJjb21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXlETyxTQUFTLG9CQUFvQixNQUF3QjtBQUNqRCxTQUFBLHlCQUF5QixJQUFXO0FBQy9DO0FBRWdCLFNBQUEseUJBQXlCLE1BQVcscUJBQTJDO0FBQ3RGLE1BQUEsU0FBUyxVQUFlLFNBQVMsTUFBTztBQUNsQyxXQUFBO0FBQUEsRUFDWDtBQUNPLFNBQUE7QUFBQSxJQUVILFlBQVksQ0FBQyxPQUFPLE1BQU0sVUFBVSxJQUFJLFNBQVksS0FBSztBQUFBLElBQ3pELGdCQUFnQixDQUFD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

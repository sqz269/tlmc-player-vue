import { j as exists, A as AuthTokenFromJSON, B as BaseAPI, J as JSONApiResponse, k as createComponent, c as computed, h, l as hSlot, i as inject, m as emptyRenderFn, r as ref, w as watch, n as onBeforeUnmount, p as hUniqueSlot, g as getCurrentInstance, q as layoutKey, u as useModelToggleProps, t as useDarkProps, v as useModelToggleEmits, x as useDark, y as useTimeout, z as useModelToggle, C as useHistory, o as onMounted, D as nextTick, E as withDirectives, G as hDir, H as usePreventScroll, I as provide, K as pageContainerKey, L as isRuntimeSsrPreHydration, M as hMergeSlot, N as getScrollbarWidth, O as reactive, a as onUnmounted, _ as _export_sfc, P as defineComponent, Q as QueueController, R as useRouter, S as unref, U as openBlock, V as createBlock, W as withCtx, d as createVNode, X as QCardSection, Y as createBaseVNode, Z as toDisplayString, $ as QCardActions, a0 as QBtn, a1 as QCard, a2 as createCommentVNode, a3 as isNumber, a4 as isObject, a5 as useFormProps, a6 as position, a7 as useFormInject, a8 as useFormAttrs, a9 as stopAndPrevent, aa as audioController, ab as createElementBlock, ac as createTextVNode, F as Fragment, ad as defineStore, ae as QIcon, af as Transition, ag as shallowReactive, ah as useRouterLinkProps, ai as uid, aj as QSeparator, ak as vShow, al as useSpinnerProps, am as useSpinner, an as Ripple, ao as QAvatar, ap as normalizeClass, aq as renderList, ar as useBtnProps, as as useTransitionProps, at as getBtnDesignAttr, au as stop, av as onDeactivated, aw as onActivated, ax as vmIsDestroyed, ay as addFocusFn, az as formKey, aA as ApiConfigProvider, aB as QInput, aC as QDialog, aD as useAuthStore, aE as tabsKey, aF as isKeyCode, aG as shouldIgnoreKey, aH as isDeepEqual, aI as useTick, aJ as createDirective, aK as client, aL as noop, aM as leftClick, aN as addEvt, aO as preventDraggable, aP as cleanEvt, aQ as getNormalizedVNodes, aR as KeepAlive, aS as QRadio, aT as setCssVar, aU as resolveComponent, b as isRef, aV as resolveDynamicComponent, aW as normalizeStyle } from "./index.407507bc.js";
import { o as outlinedFavoriteBorder, a as outlinedPlaylistAddCircle, Q as QTooltip, b as outlinedSkipPrevious, c as outlinedPlayArrow, d as outlinedPause, e as outlinedSkipNext, f as outlinedRepeat, g as outlinedShuffle, h as outlinedQueueMusic, i as outlinedPlaylistPlay, j as outlinedLibraryMusic, k as outlinedHistory, l as outlinedHome, m as outlinedSearch, n as outlinedRadio, p as outlinedArrowBack, q as outlinedArrowForward, r as outlinedInfo, s as outlinedSettings } from "./index.92a09c70.js";
import { Q as QResizeObserver, T as TouchPan, a as QScrollObserver, g as getModifierDirections, s as shouldStart } from "./QScrollObserver.495324e9.js";
import { b as between } from "./format.a33550d6.js";
import { u as useQuasar } from "./use-quasar.164ecdc0.js";
import { Q as QImg } from "./QImg.2972f40c.js";
import { Q as QMenu, a as QItemSection, b as QItem } from "./QItem.1c51f246.js";
import { A as AddToPlaylistMenu, u as usePlaylistStore } from "./AddToPlaylistMenu.a9ae740a.js";
import { d as durationToSeconds, f as formatDuration, s as secondsToDuration } from "./durationUtils.f059d1b6.js";
import { Q as QItemLabel, r as rtlHasScrollBug } from "./QSelect.95a0a7a8.js";
import { Q as QList } from "./QList.025a38ee.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.d364f701.js";
import { C as ClosePopup, P as PlaylistApi } from "./ClosePopup.6ed77ad3.js";
import { c as clearSelection } from "./position-engine.9edb6daa.js";
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
const _hoisted_1$c = { class: "text-h6" };
const _hoisted_2$a = { class: "text-subtitle2" };
const __default__$8 = {
  name: "TrackInfoCard"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  setup(__props) {
    const songQueue = QueueController.getInstance();
    const router = useRouter();
    const gotoArtist = () => {
      var _a, _b;
      router.push({ name: "artist", params: { artist: (_b = (_a = songQueue.currentlyPlaying) == null ? void 0 : _a.album) == null ? void 0 : _b.albumArtist[0].name } });
    };
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
                  createBaseVNode("div", _hoisted_1$c, toDisplayString(unref(songQueue).currentlyPlaying.name._default), 1),
                  createBaseVNode("div", _hoisted_2$a, toDisplayString(unref(songQueue).currentlyPlaying.album.albumName._default), 1),
                  createBaseVNode("div", {
                    class: "text-subtitle1 text-grey q-py-sm cursor-pointer",
                    onClick: gotoArtist
                  }, toDisplayString(unref(songQueue).currentlyPlaying.album.albumArtist[0].name), 1)
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
                      createVNode(QMenu, null, {
                        default: withCtx(() => [
                          createVNode(AddToPlaylistMenu, {
                            "track-id": unref(songQueue).currentlyPlaying.id
                          }, null, 8, ["track-id"])
                        ]),
                        _: 1
                      })
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
const __default__$7 = {
  name: "MediaControl"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  setup(__props) {
    const currentTime = ref(0);
    const songQueue = QueueController.getInstance();
    const isPanningProgress = ref(false);
    const isUpdating = ref(false);
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
      if (songQueue.currentlyPlaying !== void 0) {
        return durationToSeconds(songQueue.currentlyPlaying.duration);
      }
      return -1;
    });
    audioController.onProgressTick((time) => {
      if (isPanningProgress.value || isUpdating.value) {
        return;
      }
      currentTime.value = time;
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
                  _hoisted_3$8
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["icon"])
        ]),
        unref(songQueue).currentlyPlaying !== void 0 ? (openBlock(), createElementBlock("div", _hoisted_4$5, [
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
              createTextVNode(toDisplayString(unref(formatDuration)(unref(songQueue).currentlyPlaying.duration)), 1)
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
const __default__$6 = {
  name: "QueueControl"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  setup(__props) {
    const queueShowStatusStore = useQueueDisplayStore();
    const volume = ref(audioController.volume.value * 100);
    watch(volume, () => {
      audioController.volume.value = volume.value / 100;
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
var QueueItem = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "QueueItem.vue"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
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
    const authStore = useAuthStore();
    const isLoggedInReactive = computed(() => authStore.isLoggedIn);
    const currentUser = computed(() => authStore.getUsername);
    const $q = useQuasar();
    const showLoginDialog = () => {
      $q.dialog({
        component: LoginModal
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
                withDirectives((openBlock(), createBlock(QItem, { clickable: "" }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC4wMTIxYzkxMi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvTG9naW5SZXN1bHQudHMiLCIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9Pa1Jlc3VsdC50cyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvbW9kZWxzL1JvbGUudHMiLCIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9Vc2VyLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvUmVmcmVzaFRva2VuLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvVXNlckNyZWRlbnRpYWxzRHRvLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9hcGlzL1VzZXJBcGkudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Rvb2xiYXIvUVRvb2xiYXJUaXRsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3BhY2UvUVNwYWNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9oZWFkZXIvUUhlYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZHJhd2VyL1FEcmF3ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BhZ2UvUVBhZ2VDb250YWluZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9RRm9vdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9sYXlvdXQvUUxheW91dC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYWNrSW5mb0NhcmQudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZXIvdXNlLXNsaWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL1FTbGlkZXIuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZWRpYUNvbnRyb2wudnVlIiwiLi4vLi4vLi4vc3JjL3N0b3Jlcy9zaG93UXVldWUudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9RdWV1ZUNvbnRyb2wudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUGxheWVyQ29udHJvbC52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlLXRyYW5zaXRpb24vUVNsaWRlVHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZXhwYW5zaW9uLWl0ZW0vUUV4cGFuc2lvbkl0ZW0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwaW5uZXIvUVNwaW5uZXJBdWRpby5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1F1ZXVlSXRlbS52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EcmF3ZXJRdWV1ZS52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi1ncm91cC9RQnRuR3JvdXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi1kcm9wZG93bi9RQnRuRHJvcGRvd24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvcm0vUUZvcm0uanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb25Nb2RhbC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1VzZXJBY2NvdW50QnV0dG9uLnZ1ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy91c2UtdGFiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FUYWIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYnMvUVRhYnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL1RvdWNoU3dpcGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYWNoZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXBhbmVsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWItcGFuZWxzL1FUYWJQYW5lbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFiLXBhbmVscy9RVGFiUGFuZWxzLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3NNb2RhbC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BYm91dERpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EcmF3ZXJQbGF5bGlzdExpc3QudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhd2VyTmF2aWdhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBBdXRoVG9rZW4gfSBmcm9tICcuL0F1dGhUb2tlbic7XG5pbXBvcnQge1xuICAgIEF1dGhUb2tlbkZyb21KU09OLFxuICAgIEF1dGhUb2tlbkZyb21KU09OVHlwZWQsXG4gICAgQXV0aFRva2VuVG9KU09OLFxufSBmcm9tICcuL0F1dGhUb2tlbic7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIExvZ2luUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXN1bHQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVzdWx0XG4gICAgICovXG4gICAgand0VG9rZW4/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVzdWx0XG4gICAgICovXG4gICAgcmVmcmVzaFRva2VuPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXV0aFRva2VufVxuICAgICAqIEBtZW1iZXJvZiBMb2dpblJlc3VsdFxuICAgICAqL1xuICAgIGF1dGhJbmZvPzogQXV0aFRva2VuO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIExvZ2luUmVzdWx0IGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZMb2dpblJlc3VsdCh2YWx1ZTogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgbGV0IGlzSW5zdGFuY2UgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblJlc3VsdEZyb21KU09OKGpzb246IGFueSk6IExvZ2luUmVzdWx0IHtcbiAgICByZXR1cm4gTG9naW5SZXN1bHRGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luUmVzdWx0RnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBMb2dpblJlc3VsdCB7XG4gICAgaWYgKChqc29uID09PSB1bmRlZmluZWQpIHx8IChqc29uID09PSBudWxsKSkge1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdqd3RUb2tlbic6ICFleGlzdHMoanNvbiwgJ2p3dFRva2VuJykgPyB1bmRlZmluZWQgOiBqc29uWydqd3RUb2tlbiddLFxuICAgICAgICAncmVmcmVzaFRva2VuJzogIWV4aXN0cyhqc29uLCAncmVmcmVzaFRva2VuJykgPyB1bmRlZmluZWQgOiBqc29uWydyZWZyZXNoVG9rZW4nXSxcbiAgICAgICAgJ2F1dGhJbmZvJzogIWV4aXN0cyhqc29uLCAnYXV0aEluZm8nKSA/IHVuZGVmaW5lZCA6IEF1dGhUb2tlbkZyb21KU09OKGpzb25bJ2F1dGhJbmZvJ10pLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblJlc3VsdFRvSlNPTih2YWx1ZT86IExvZ2luUmVzdWx0IHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ2p3dFRva2VuJzogdmFsdWUuand0VG9rZW4sXG4gICAgICAgICdyZWZyZXNoVG9rZW4nOiB2YWx1ZS5yZWZyZXNoVG9rZW4sXG4gICAgICAgICdhdXRoSW5mbyc6IEF1dGhUb2tlblRvSlNPTih2YWx1ZS5hdXRoSW5mbyksXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9rUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT2tSZXN1bHQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIE9rUmVzdWx0XG4gICAgICovXG4gICAgc3RhdHVzQ29kZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBPa1Jlc3VsdCBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mT2tSZXN1bHQodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT2tSZXN1bHRGcm9tSlNPTihqc29uOiBhbnkpOiBPa1Jlc3VsdCB7XG4gICAgcmV0dXJuIE9rUmVzdWx0RnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBPa1Jlc3VsdEZyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogT2tSZXN1bHQge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAnc3RhdHVzQ29kZSc6ICFleGlzdHMoanNvbiwgJ3N0YXR1c0NvZGUnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3N0YXR1c0NvZGUnXSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT2tSZXN1bHRUb0pTT04odmFsdWU/OiBPa1Jlc3VsdCB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdzdGF0dXNDb2RlJzogdmFsdWUuc3RhdHVzQ29kZSxcbiAgICB9O1xufVxuXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB7XG4gICAgVXNlckZyb21KU09OLFxuICAgIFVzZXJGcm9tSlNPTlR5cGVkLFxuICAgIFVzZXJUb0pTT04sXG59IGZyb20gJy4vVXNlcic7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFJvbGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb2xlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSb2xlXG4gICAgICovXG4gICAgcm9sZU5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxVc2VyPn1cbiAgICAgKiBAbWVtYmVyb2YgUm9sZVxuICAgICAqL1xuICAgIHVzZXJzPzogQXJyYXk8VXNlcj4gfCBudWxsO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFJvbGUgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VPZlJvbGUodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUm9sZUZyb21KU09OKGpzb246IGFueSk6IFJvbGUge1xuICAgIHJldHVybiBSb2xlRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSb2xlRnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBSb2xlIHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3JvbGVOYW1lJzogIWV4aXN0cyhqc29uLCAncm9sZU5hbWUnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3JvbGVOYW1lJ10sXG4gICAgICAgICd1c2Vycyc6ICFleGlzdHMoanNvbiwgJ3VzZXJzJykgPyB1bmRlZmluZWQgOiAoanNvblsndXNlcnMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsndXNlcnMnXSBhcyBBcnJheTxhbnk+KS5tYXAoVXNlckZyb21KU09OKSksXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJvbGVUb0pTT04odmFsdWU/OiBSb2xlIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3JvbGVOYW1lJzogdmFsdWUucm9sZU5hbWUsXG4gICAgICAgICd1c2Vycyc6IHZhbHVlLnVzZXJzID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAodmFsdWUudXNlcnMgPT09IG51bGwgPyBudWxsIDogKHZhbHVlLnVzZXJzIGFzIEFycmF5PGFueT4pLm1hcChVc2VyVG9KU09OKSksXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgUmVmcmVzaFRva2VuIH0gZnJvbSAnLi9SZWZyZXNoVG9rZW4nO1xuaW1wb3J0IHtcbiAgICBSZWZyZXNoVG9rZW5Gcm9tSlNPTixcbiAgICBSZWZyZXNoVG9rZW5Gcm9tSlNPTlR5cGVkLFxuICAgIFJlZnJlc2hUb2tlblRvSlNPTixcbn0gZnJvbSAnLi9SZWZyZXNoVG9rZW4nO1xuaW1wb3J0IHR5cGUgeyBSb2xlIH0gZnJvbSAnLi9Sb2xlJztcbmltcG9ydCB7XG4gICAgUm9sZUZyb21KU09OLFxuICAgIFJvbGVGcm9tSlNPTlR5cGVkLFxuICAgIFJvbGVUb0pTT04sXG59IGZyb20gJy4vUm9sZSc7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVzZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyXG4gICAgICovXG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlclxuICAgICAqL1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlclxuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJvbGU+fVxuICAgICAqIEBtZW1iZXJvZiBVc2VyXG4gICAgICovXG4gICAgcm9sZXM/OiBBcnJheTxSb2xlPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJlZnJlc2hUb2tlbj59XG4gICAgICogQG1lbWJlcm9mIFVzZXJcbiAgICAgKi9cbiAgICB0b2tlbnM/OiBBcnJheTxSZWZyZXNoVG9rZW4+IHwgbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBVc2VyIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZVc2VyKHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJ1c2VySWRcIiBpbiB2YWx1ZTtcbiAgICBpc0luc3RhbmNlID0gaXNJbnN0YW5jZSAmJiBcInVzZXJOYW1lXCIgaW4gdmFsdWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJwYXNzd29yZFwiIGluIHZhbHVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyRnJvbUpTT04oanNvbjogYW55KTogVXNlciB7XG4gICAgcmV0dXJuIFVzZXJGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJGcm9tSlNPTlR5cGVkKGpzb246IGFueSwgaWdub3JlRGlzY3JpbWluYXRvcjogYm9vbGVhbik6IFVzZXIge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndXNlcklkJzoganNvblsndXNlcklkJ10sXG4gICAgICAgICd1c2VyTmFtZSc6IGpzb25bJ3VzZXJOYW1lJ10sXG4gICAgICAgICdwYXNzd29yZCc6IGpzb25bJ3Bhc3N3b3JkJ10sXG4gICAgICAgICdyb2xlcyc6ICFleGlzdHMoanNvbiwgJ3JvbGVzJykgPyB1bmRlZmluZWQgOiAoanNvblsncm9sZXMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsncm9sZXMnXSBhcyBBcnJheTxhbnk+KS5tYXAoUm9sZUZyb21KU09OKSksXG4gICAgICAgICd0b2tlbnMnOiAhZXhpc3RzKGpzb24sICd0b2tlbnMnKSA/IHVuZGVmaW5lZCA6IChqc29uWyd0b2tlbnMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsndG9rZW5zJ10gYXMgQXJyYXk8YW55PikubWFwKFJlZnJlc2hUb2tlbkZyb21KU09OKSksXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJUb0pTT04odmFsdWU/OiBVc2VyIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJJZCc6IHZhbHVlLnVzZXJJZCxcbiAgICAgICAgJ3VzZXJOYW1lJzogdmFsdWUudXNlck5hbWUsXG4gICAgICAgICdwYXNzd29yZCc6IHZhbHVlLnBhc3N3b3JkLFxuICAgICAgICAncm9sZXMnOiB2YWx1ZS5yb2xlcyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHZhbHVlLnJvbGVzID09PSBudWxsID8gbnVsbCA6ICh2YWx1ZS5yb2xlcyBhcyBBcnJheTxhbnk+KS5tYXAoUm9sZVRvSlNPTikpLFxuICAgICAgICAndG9rZW5zJzogdmFsdWUudG9rZW5zID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAodmFsdWUudG9rZW5zID09PSBudWxsID8gbnVsbCA6ICh2YWx1ZS50b2tlbnMgYXMgQXJyYXk8YW55PikubWFwKFJlZnJlc2hUb2tlblRvSlNPTikpLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cbmltcG9ydCB7IGV4aXN0cywgbWFwVmFsdWVzIH0gZnJvbSAnLi4vcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHtcbiAgICBVc2VyRnJvbUpTT04sXG4gICAgVXNlckZyb21KU09OVHlwZWQsXG4gICAgVXNlclRvSlNPTixcbn0gZnJvbSAnLi9Vc2VyJztcblxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUmVmcmVzaFRva2VuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmcmVzaFRva2VuIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZWZyZXNoVG9rZW5cbiAgICAgKi9cbiAgICB0b2tlbklkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBSZWZyZXNoVG9rZW5cbiAgICAgKi9cbiAgICBpc3N1ZWRUaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZWZyZXNoVG9rZW5cbiAgICAgKi9cbiAgICB1c2VySWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1VzZXJ9XG4gICAgICogQG1lbWJlcm9mIFJlZnJlc2hUb2tlblxuICAgICAqL1xuICAgIHVzZXI/OiBVc2VyO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFJlZnJlc2hUb2tlbiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mUmVmcmVzaFRva2VuKHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG5cbiAgICByZXR1cm4gaXNJbnN0YW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZnJlc2hUb2tlbkZyb21KU09OKGpzb246IGFueSk6IFJlZnJlc2hUb2tlbiB7XG4gICAgcmV0dXJuIFJlZnJlc2hUb2tlbkZyb21KU09OVHlwZWQoanNvbiwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVmcmVzaFRva2VuRnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBSZWZyZXNoVG9rZW4ge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndG9rZW5JZCc6ICFleGlzdHMoanNvbiwgJ3Rva2VuSWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3Rva2VuSWQnXSxcbiAgICAgICAgJ2lzc3VlZFRpbWUnOiAhZXhpc3RzKGpzb24sICdpc3N1ZWRUaW1lJykgPyB1bmRlZmluZWQgOiAobmV3IERhdGUoanNvblsnaXNzdWVkVGltZSddKSksXG4gICAgICAgICd1c2VySWQnOiAhZXhpc3RzKGpzb24sICd1c2VySWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3VzZXJJZCddLFxuICAgICAgICAndXNlcic6ICFleGlzdHMoanNvbiwgJ3VzZXInKSA/IHVuZGVmaW5lZCA6IFVzZXJGcm9tSlNPTihqc29uWyd1c2VyJ10pLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWZyZXNoVG9rZW5Ub0pTT04odmFsdWU/OiBSZWZyZXNoVG9rZW4gfCBudWxsKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndG9rZW5JZCc6IHZhbHVlLnRva2VuSWQsXG4gICAgICAgICdpc3N1ZWRUaW1lJzogdmFsdWUuaXNzdWVkVGltZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHZhbHVlLmlzc3VlZFRpbWUudG9JU09TdHJpbmcoKSksXG4gICAgICAgICd1c2VySWQnOiB2YWx1ZS51c2VySWQsXG4gICAgICAgICd1c2VyJzogVXNlclRvSlNPTih2YWx1ZS51c2VyKSxcbiAgICB9O1xufVxuXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXNlckNyZWRlbnRpYWxzRHRvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNyZWRlbnRpYWxzRHRvIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyQ3JlZGVudGlhbHNEdG9cbiAgICAgKi9cbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFVzZXJDcmVkZW50aWFsc0R0b1xuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBnaXZlbiBvYmplY3QgaW1wbGVtZW50cyB0aGUgVXNlckNyZWRlbnRpYWxzRHRvIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZVc2VyQ3JlZGVudGlhbHNEdG8odmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcbiAgICBpc0luc3RhbmNlID0gaXNJbnN0YW5jZSAmJiBcInVzZXJOYW1lXCIgaW4gdmFsdWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJwYXNzd29yZFwiIGluIHZhbHVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTihqc29uOiBhbnkpOiBVc2VyQ3JlZGVudGlhbHNEdG8ge1xuICAgIHJldHVybiBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJDcmVkZW50aWFsc0R0b0Zyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogVXNlckNyZWRlbnRpYWxzRHRvIHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJOYW1lJzoganNvblsndXNlck5hbWUnXSxcbiAgICAgICAgJ3Bhc3N3b3JkJzoganNvblsncGFzc3dvcmQnXSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXNlckNyZWRlbnRpYWxzRHRvVG9KU09OKHZhbHVlPzogVXNlckNyZWRlbnRpYWxzRHRvIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJOYW1lJzogdmFsdWUudXNlck5hbWUsXG4gICAgICAgICdwYXNzd29yZCc6IHZhbHVlLnBhc3N3b3JkLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cblxuaW1wb3J0ICogYXMgcnVudGltZSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHtcbiAgTG9naW5SZXN1bHQsXG4gIE9rUmVzdWx0LFxuICBQcm9ibGVtRGV0YWlscyxcbiAgVXNlcixcbiAgVXNlckNyZWRlbnRpYWxzRHRvLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgICBMb2dpblJlc3VsdEZyb21KU09OLFxuICAgIExvZ2luUmVzdWx0VG9KU09OLFxuICAgIE9rUmVzdWx0RnJvbUpTT04sXG4gICAgT2tSZXN1bHRUb0pTT04sXG4gICAgUHJvYmxlbURldGFpbHNGcm9tSlNPTixcbiAgICBQcm9ibGVtRGV0YWlsc1RvSlNPTixcbiAgICBVc2VyRnJvbUpTT04sXG4gICAgVXNlclRvSlNPTixcbiAgICBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTixcbiAgICBVc2VyQ3JlZGVudGlhbHNEdG9Ub0pTT04sXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpVXNlckxvZ291dFBvc3RSZXF1ZXN0IHtcbiAgICBib2R5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luUmVxdWVzdCB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvPzogVXNlckNyZWRlbnRpYWxzRHRvO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lzdGVyUmVxdWVzdCB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvPzogVXNlckNyZWRlbnRpYWxzRHRvO1xufVxuXG4vKipcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgVXNlckFwaSBleHRlbmRzIHJ1bnRpbWUuQmFzZUFQSSB7XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBhcGlVc2VyTG9nb3V0UG9zdFJhdyhyZXF1ZXN0UGFyYW1ldGVyczogQXBpVXNlckxvZ291dFBvc3RSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPE9rUmVzdWx0Pj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvdXNlci9sb2dvdXRgLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgIGJvZHk6IHJlcXVlc3RQYXJhbWV0ZXJzLmJvZHkgYXMgYW55LFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuSlNPTkFwaVJlc3BvbnNlKHJlc3BvbnNlLCAoanNvblZhbHVlKSA9PiBPa1Jlc3VsdEZyb21KU09OKGpzb25WYWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGFwaVVzZXJMb2dvdXRQb3N0KHJlcXVlc3RQYXJhbWV0ZXJzOiBBcGlVc2VyTG9nb3V0UG9zdFJlcXVlc3QgPSB7fSwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8T2tSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFwaVVzZXJMb2dvdXRQb3N0UmF3KHJlcXVlc3RQYXJhbWV0ZXJzLCBpbml0T3ZlcnJpZGVzKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnZhbHVlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWxsVXNlcnNSYXcoaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8cnVudGltZS5BcGlSZXNwb25zZTxBcnJheTxVc2VyPj4+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL3VzZXIvYWxsYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLkpTT05BcGlSZXNwb25zZShyZXNwb25zZSwgKGpzb25WYWx1ZSkgPT4ganNvblZhbHVlLm1hcChVc2VyRnJvbUpTT04pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBnZXRBbGxVc2Vycyhpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxBcnJheTxVc2VyPj4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0QWxsVXNlcnNSYXcoaW5pdE92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS52YWx1ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGxvZ2luUmF3KHJlcXVlc3RQYXJhbWV0ZXJzOiBMb2dpblJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8TG9naW5SZXN1bHQ+PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1ldGVyczogYW55ID0ge307XG5cbiAgICAgICAgY29uc3QgaGVhZGVyUGFyYW1ldGVyczogcnVudGltZS5IVFRQSGVhZGVycyA9IHt9O1xuXG4gICAgICAgIGhlYWRlclBhcmFtZXRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKTsgLy8gSnd0IGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICBwYXRoOiBgL2FwaS91c2VyL2xvZ2luYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1ldGVycyxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgICAgICBib2R5OiBVc2VyQ3JlZGVudGlhbHNEdG9Ub0pTT04ocmVxdWVzdFBhcmFtZXRlcnMudXNlckNyZWRlbnRpYWxzRHRvKSxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLkpTT05BcGlSZXNwb25zZShyZXNwb25zZSwgKGpzb25WYWx1ZSkgPT4gTG9naW5SZXN1bHRGcm9tSlNPTihqc29uVmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBsb2dpbihyZXF1ZXN0UGFyYW1ldGVyczogTG9naW5SZXF1ZXN0ID0ge30sIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPExvZ2luUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5sb2dpblJhdyhyZXF1ZXN0UGFyYW1ldGVycywgaW5pdE92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS52YWx1ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIHJlZ2lzdGVyUmF3KHJlcXVlc3RQYXJhbWV0ZXJzOiBSZWdpc3RlclJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8b2JqZWN0Pj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvdXNlci9yZWdpc3RlcmAsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgYm9keTogVXNlckNyZWRlbnRpYWxzRHRvVG9KU09OKHJlcXVlc3RQYXJhbWV0ZXJzLnVzZXJDcmVkZW50aWFsc0R0byksXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5KU09OQXBpUmVzcG9uc2U8YW55PihyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgcmVnaXN0ZXIocmVxdWVzdFBhcmFtZXRlcnM6IFJlZ2lzdGVyUmVxdWVzdCA9IHt9LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlZ2lzdGVyUmF3KHJlcXVlc3RQYXJhbWV0ZXJzLCBpbml0T3ZlcnJpZGVzKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnZhbHVlKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRvb2xiYXJUaXRsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBzaHJpbms6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdG9vbGJhcl9fdGl0bGUgZWxsaXBzaXMnXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3BhY2UgPSBoKCdkaXYnLCB7IGNsYXNzOiAncS1zcGFjZScgfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGFjZScsXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiAoKSA9PiBzcGFjZVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUb29sYmFyJyxcblxuICBwcm9wczoge1xuICAgIGluc2V0OiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRvb2xiYXIgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyAocHJvcHMuaW5zZXQgPT09IHRydWUgPyAnIHEtdG9vbGJhci0taW5zZXQnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUsIHJvbGU6ICd0b29sYmFyJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FIZWFkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICByZXZlYWxPZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDI1MFxuICAgIH0sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBoZWlnaHRIaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmV2ZWFsJywgJ2ZvY3VzaW4nIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUUhlYWRlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHJlZihwYXJzZUludChwcm9wcy5oZWlnaHRIaW50LCAxMCkpXG4gICAgY29uc3QgcmV2ZWFsZWQgPSByZWYodHJ1ZSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0gnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2l6ZS52YWx1ZSAtICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1oZWFkZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy10b3AnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWhlYWRlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLnRvcCxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2hlYWRlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGwsIHNjcm9sbCA9PiB7XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWUgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsXG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIDw9IHByb3BzLnJldmVhbE9mZnNldFxuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gLSBzY3JvbGwuaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2hlYWRlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCB3aXRoRGlyZWN0aXZlcywgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VIaXN0b3J5IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWhpc3RvcnkuanMnXG5pbXBvcnQgdXNlTW9kZWxUb2dnbGUsIHsgdXNlTW9kZWxUb2dnbGVQcm9wcywgdXNlTW9kZWxUb2dnbGVFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLW1vZGVsLXRvZ2dsZS5qcydcbmltcG9ydCB1c2VQcmV2ZW50U2Nyb2xsIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXByZXZlbnQtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGltZW91dC5qcydcbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBoU2xvdCwgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5jb25zdCBkdXJhdGlvbiA9IDE1MFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUURyYXdlcicsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgc2lkZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xlZnQnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2xlZnQnLCAncmlnaHQnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH0sXG5cbiAgICBtaW5pOiBCb29sZWFuLFxuICAgIG1pbmlUb092ZXJsYXk6IEJvb2xlYW4sXG4gICAgbWluaVdpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1N1xuICAgIH0sXG5cbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAxMDIzXG4gICAgfSxcbiAgICBzaG93SWZBYm92ZTogQm9vbGVhbixcblxuICAgIGJlaGF2aW9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnZGVmYXVsdCcsICdkZXNrdG9wJywgJ21vYmlsZScgXS5pbmNsdWRlcyh2KSxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgIH0sXG5cbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIG92ZXJsYXk6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBub1N3aXBlT3BlbjogQm9vbGVhbixcbiAgICBub1N3aXBlQ2xvc2U6IEJvb2xlYW4sXG4gICAgbm9Td2lwZUJhY2tkcm9wOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzLFxuICAgICdvbkxheW91dCcsICdtaW5pU3RhdGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgcHJldmVudEJvZHlTY3JvbGwgfSA9IHVzZVByZXZlbnRTY3JvbGwoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0LCByZW1vdmVUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRHJhd2VyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBsZXQgbGFzdERlc2t0b3BTdGF0ZSwgdGltZXJNaW5pLCBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlclxuXG4gICAgY29uc3QgYmVsb3dCcmVha3BvaW50ID0gcmVmKFxuICAgICAgcHJvcHMuYmVoYXZpb3IgPT09ICdtb2JpbGUnXG4gICAgICB8fCAocHJvcHMuYmVoYXZpb3IgIT09ICdkZXNrdG9wJyAmJiAkbGF5b3V0LnRvdGFsV2lkdGgudmFsdWUgPD0gcHJvcHMuYnJlYWtwb2ludClcbiAgICApXG5cbiAgICBjb25zdCBpc01pbmkgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubWluaSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBzaXplID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgaXNNaW5pLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMubWluaVdpZHRoXG4gICAgICAgIDogcHJvcHMud2lkdGhcbiAgICApKVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihcbiAgICAgIHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGhpZGVPblJvdXRlQ2hhbmdlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWVcbiAgICAgICYmIChiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUgfHwgb25TY3JlZW5PdmVybGF5LnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3cgKGV2dCwgbm9FdmVudCkge1xuICAgICAgYWRkVG9IaXN0b3J5KClcblxuICAgICAgZXZ0ICE9PSBmYWxzZSAmJiAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgYXBwbHlQb3NpdGlvbigwKVxuXG4gICAgICBpZiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG90aGVySW5zdGFuY2UgPSAkbGF5b3V0Lmluc3RhbmNlc1sgb3RoZXJTaWRlLnZhbHVlIF1cbiAgICAgICAgaWYgKG90aGVySW5zdGFuY2UgIT09IHZvaWQgMCAmJiBvdGhlckluc3RhbmNlLmJlbG93QnJlYWtwb2ludCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG90aGVySW5zdGFuY2UuaGlkZShmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSAmJiBwcmV2ZW50Qm9keVNjcm9sbCh0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgZXZ0ICE9PSBmYWxzZSAmJiBzZXRTY3JvbGxhYmxlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBldnQgIT09IGZhbHNlICYmIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICAgICAgbm9FdmVudCAhPT0gdHJ1ZSAmJiBlbWl0KCdzaG93JywgZXZ0KVxuICAgICAgfSwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSGlkZSAoZXZ0LCBub0V2ZW50KSB7XG4gICAgICByZW1vdmVGcm9tSGlzdG9yeSgpXG5cbiAgICAgIGV2dCAhPT0gZmFsc2UgJiYgJGxheW91dC5hbmltYXRlKClcblxuICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgYXBwbHlQb3NpdGlvbihzdGF0ZURpcmVjdGlvbi52YWx1ZSAqIHNpemUudmFsdWUpXG5cbiAgICAgIGNsZWFudXAoKVxuXG4gICAgICBpZiAobm9FdmVudCAhPT0gdHJ1ZSkge1xuICAgICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4geyBlbWl0KCdoaWRlJywgZXZ0KSB9LCBkdXJhdGlvbilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVUaW1lb3V0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHNob3csIGhpZGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHtcbiAgICAgIHNob3dpbmcsXG4gICAgICBoaWRlT25Sb3V0ZUNoYW5nZSxcbiAgICAgIGhhbmRsZVNob3csXG4gICAgICBoYW5kbGVIaWRlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgYWRkVG9IaXN0b3J5LCByZW1vdmVGcm9tSGlzdG9yeSB9ID0gdXNlSGlzdG9yeShzaG93aW5nLCBoaWRlLCBoaWRlT25Sb3V0ZUNoYW5nZSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgYmVsb3dCcmVha3BvaW50LFxuICAgICAgaGlkZVxuICAgIH1cblxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNpZGUgPT09ICdyaWdodCcpXG5cbiAgICBjb25zdCBzdGF0ZURpcmVjdGlvbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDEpICogKHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiAtMSlcbiAgICApXG5cbiAgICBjb25zdCBmbGFnQmFja2Ryb3BCZyA9IHJlZigwKVxuICAgIGNvbnN0IGZsYWdQYW5uaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGZsYWdNaW5pQW5pbWF0ZSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBmbGFnQ29udGVudFBvc2l0aW9uID0gcmVmKCAvLyBzdGFydGluZyB3aXRoIFwiaGlkZGVuXCIgZm9yIFNTUlxuICAgICAgc2l6ZS52YWx1ZSAqIHN0YXRlRGlyZWN0aW9uLnZhbHVlXG4gICAgKVxuXG4gICAgY29uc3Qgb3RoZXJTaWRlID0gY29tcHV0ZWQoKCkgPT4gKHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcpKVxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSAmJiBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgICA/IChwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlID8gcHJvcHMubWluaVdpZHRoIDogc2l6ZS52YWx1ZSlcbiAgICAgICAgOiAwXG4gICAgKSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IHRydWVcbiAgICAgIHx8IHByb3BzLm1pbmlUb092ZXJsYXkgPT09IHRydWVcbiAgICAgIHx8ICRsYXlvdXQudmlldy52YWx1ZS5pbmRleE9mKHJpZ2h0U2lkZS52YWx1ZSA/ICdSJyA6ICdMJykgPiAtMVxuICAgICAgfHwgKCRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSAmJiAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IG9uTGF5b3V0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IGZhbHNlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgKVxuXG4gICAgY29uc3Qgb25TY3JlZW5PdmVybGF5ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICApXG5cbiAgICBjb25zdCBiYWNrZHJvcENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdmdWxsc2NyZWVuIHEtZHJhd2VyX19iYWNrZHJvcCdcbiAgICAgICsgKHNob3dpbmcudmFsdWUgPT09IGZhbHNlICYmIGZsYWdQYW5uaW5nLnZhbHVlID09PSBmYWxzZSA/ICcgaGlkZGVuJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGJhY2tkcm9wU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLDAsMCwkeyBmbGFnQmFja2Ryb3BCZy52YWx1ZSAqIDAuNCB9KWBcbiAgICB9KSlcblxuICAgIGNvbnN0IGhlYWRlclNsb3QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAkbGF5b3V0LnJvd3MudmFsdWUudG9wWyAyIF0gPT09ICdyJ1xuICAgICAgICA6ICRsYXlvdXQucm93cy52YWx1ZS50b3BbIDAgXSA9PT0gJ2wnXG4gICAgKSlcblxuICAgIGNvbnN0IGZvb3RlclNsb3QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAkbGF5b3V0LnJvd3MudmFsdWUuYm90dG9tWyAyIF0gPT09ICdyJ1xuICAgICAgICA6ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b21bIDAgXSA9PT0gJ2wnXG4gICAgKSlcblxuICAgIGNvbnN0IGFib3ZlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjc3MgPSB7fVxuXG4gICAgICBpZiAoJGxheW91dC5oZWFkZXIuc3BhY2UgPT09IHRydWUgJiYgaGVhZGVyU2xvdC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLnRvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5vZmZzZXQgfXB4YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLnRvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUgJiYgZm9vdGVyU2xvdC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLmJvdHRvbSA9IGAkeyAkbGF5b3V0LmZvb3Rlci5vZmZzZXQgfXB4YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLmJvdHRvbSA9IGAkeyAkbGF5b3V0LmZvb3Rlci5zaXplIH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBgJHsgc2l6ZS52YWx1ZSB9cHhgLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7IGZsYWdDb250ZW50UG9zaXRpb24udmFsdWUgfXB4KWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHN0eWxlXG4gICAgICAgIDogT2JqZWN0LmFzc2lnbihzdHlsZSwgYWJvdmVTdHlsZS52YWx1ZSlcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGVudENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWRyYXdlcl9fY29udGVudCBmaXQgJ1xuICAgICAgKyAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdzY3JvbGwnIDogJ292ZXJmbG93LWF1dG8nKVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtZHJhd2VyIHEtZHJhd2VyLS0keyBwcm9wcy5zaWRlIH1gXG4gICAgICArIChmbGFnTWluaUFuaW1hdGUudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1taW5pLWFuaW1hdGUnIDogJycpXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgbm8tdHJhbnNpdGlvbidcbiAgICAgICAgICA6IChzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJycgOiAnIHEtbGF5b3V0LS1wcmV2ZW50LWZvY3VzJylcbiAgICAgIClcbiAgICAgICsgKFxuICAgICAgICBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgZml4ZWQgcS1kcmF3ZXItLW9uLXRvcCBxLWRyYXdlci0tbW9iaWxlIHEtZHJhd2VyLS10b3AtcGFkZGluZydcbiAgICAgICAgICA6IGAgcS1kcmF3ZXItLSR7IGlzTWluaS52YWx1ZSA9PT0gdHJ1ZSA/ICdtaW5pJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICAgICArIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSB8fCBvbkxheW91dC52YWx1ZSAhPT0gdHJ1ZSA/ICcgZml4ZWQnIDogJycpXG4gICAgICAgICAgKyAocHJvcHMub3ZlcmxheSA9PT0gdHJ1ZSB8fCBwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlID8gJyBxLWRyYXdlci0tb24tdG9wJyA6ICcnKVxuICAgICAgICAgICsgKGhlYWRlclNsb3QudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS10b3AtcGFkZGluZycgOiAnJylcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBvcGVuRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgcHJvcHMubm9Td2lwZU9wZW4gIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gcHJvcHMuc2lkZSA6IG90aGVyU2lkZS52YWx1ZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbk9wZW5QYW4sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAge1xuICAgICAgICAgIFsgZGlyIF06IHRydWUsXG4gICAgICAgICAgbW91c2U6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSBdXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRlbnRDbG9zZURpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gb3RoZXJTaWRlLnZhbHVlIDogcHJvcHMuc2lkZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbkNsb3NlUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBjb25zdCBiYWNrZHJvcENsb3NlRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1N3aXBlQmFja2Ryb3AgIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gb3RoZXJTaWRlLnZhbHVlIDogcHJvcHMuc2lkZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbkNsb3NlUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVCZWxvd0JyZWFrcG9pbnQgKCkge1xuICAgICAgdXBkYXRlTG9jYWwoYmVsb3dCcmVha3BvaW50LCAoXG4gICAgICAgIHByb3BzLmJlaGF2aW9yID09PSAnbW9iaWxlJ1xuICAgICAgICB8fCAocHJvcHMuYmVoYXZpb3IgIT09ICdkZXNrdG9wJyAmJiAkbGF5b3V0LnRvdGFsV2lkdGgudmFsdWUgPD0gcHJvcHMuYnJlYWtwb2ludClcbiAgICAgICkpXG4gICAgfVxuXG4gICAgd2F0Y2goYmVsb3dCcmVha3BvaW50LCB2YWwgPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkgeyAvLyBmcm9tIGxnIHRvIHhzXG4gICAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBzaG93aW5nLnZhbHVlXG4gICAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgaGlkZShmYWxzZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgICAmJiBwcm9wcy5iZWhhdmlvciAhPT0gJ21vYmlsZSdcbiAgICAgICAgJiYgbGFzdERlc2t0b3BTdGF0ZSAhPT0gZmFsc2VcbiAgICAgICkgeyAvLyBmcm9tIHhzIHRvIGxnXG4gICAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgYXBwbHlQb3NpdGlvbigwKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzaG93KGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNpZGUsIChuZXdTaWRlLCBvbGRTaWRlKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIG9sZFNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIG9sZFNpZGUgXSA9IHZvaWQgMFxuICAgICAgICAkbGF5b3V0WyBvbGRTaWRlIF0uc3BhY2UgPSBmYWxzZVxuICAgICAgICAkbGF5b3V0WyBvbGRTaWRlIF0ub2Zmc2V0ID0gMFxuICAgICAgfVxuXG4gICAgICAkbGF5b3V0Lmluc3RhbmNlc1sgbmV3U2lkZSBdID0gaW5zdGFuY2VcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5zaXplID0gc2l6ZS52YWx1ZVxuICAgICAgJGxheW91dFsgbmV3U2lkZSBdLnNwYWNlID0gb25MYXlvdXQudmFsdWVcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5vZmZzZXQgPSBvZmZzZXQudmFsdWVcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSB8fCBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUJlbG93QnJlYWtwb2ludCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gcHJvcHMuYmVoYXZpb3IgKyBwcm9wcy5icmVha3BvaW50LFxuICAgICAgdXBkYXRlQmVsb3dCcmVha3BvaW50XG4gICAgKVxuXG4gICAgd2F0Y2goJGxheW91dC5pc0NvbnRhaW5lciwgdmFsID0+IHtcbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJldmVudEJvZHlTY3JvbGwodmFsICE9PSB0cnVlKVxuICAgICAgdmFsID09PSB0cnVlICYmIHVwZGF0ZUJlbG93QnJlYWtwb2ludCgpXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQuc2Nyb2xsYmFyV2lkdGgsICgpID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiB2b2lkIDApXG4gICAgfSlcblxuICAgIHdhdGNoKG9mZnNldCwgdmFsID0+IHsgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpIH0pXG5cbiAgICB3YXRjaChvbkxheW91dCwgdmFsID0+IHtcbiAgICAgIGVtaXQoJ29uTGF5b3V0JywgdmFsKVxuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2gocmlnaHRTaWRlLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goc2l6ZSwgdmFsID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oKVxuICAgICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaVRvT3ZlcmxheSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZVNpemVPbkxheW91dCh2YWwsIHNpemUudmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+ICRxLmxhbmcucnRsLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaSwgKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgYW5pbWF0ZU1pbmkoKVxuICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChpc01pbmksIHZhbCA9PiB7IGVtaXQoJ21pbmlTdGF0ZScsIHZhbCkgfSlcblxuICAgIGZ1bmN0aW9uIGFwcGx5UG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgcG9zaXRpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gMCA6IHNpemUudmFsdWVcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IE1hdGguYWJzKHBvc2l0aW9uKSA9PT0gc2l6ZS52YWx1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcG9zaXRpb24gKz0gc3RhdGVEaXJlY3Rpb24udmFsdWUgKiAkbGF5b3V0LnNjcm9sbGJhcldpZHRoLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJhY2tkcm9wICh4KSB7XG4gICAgICBmbGFnQmFja2Ryb3BCZy52YWx1ZSA9IHhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxhYmxlICh2KSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB2ID09PSB0cnVlXG4gICAgICAgID8gJ3JlbW92ZSdcbiAgICAgICAgOiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdhZGQnIDogJycpXG5cbiAgICAgIGFjdGlvbiAhPT0gJycgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3RbIGFjdGlvbiBdKCdxLWJvZHktLWRyYXdlci10b2dnbGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVNaW5pICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lck1pbmkpXG5cbiAgICAgIGlmICh2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgLy8gbmVlZCB0byBzcGVlZCBpdCB1cCBhbmQgYXBwbHkgaXQgaW1tZWRpYXRlbHksXG4gICAgICAgIC8vIGV2ZW4gZmFzdGVyIHRoYW4gVnVlJ3MgbmV4dFRpY2shXG4gICAgICAgIHZtLnByb3h5LiRlbC5jbGFzc0xpc3QuYWRkKCdxLWRyYXdlci0tbWluaS1hbmltYXRlJylcbiAgICAgIH1cblxuICAgICAgZmxhZ01pbmlBbmltYXRlLnZhbHVlID0gdHJ1ZVxuICAgICAgdGltZXJNaW5pID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGlmICh2bSAmJiB2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgICB2bS5wcm94eS4kZWwuY2xhc3NMaXN0LnJlbW92ZSgncS1kcmF3ZXItLW1pbmktYW5pbWF0ZScpXG4gICAgICAgIH1cbiAgICAgIH0sIDE1MClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk9wZW5QYW4gKGV2dCkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbWlnaHQgY2FwdHVyZSBhbmQgdHJpZ2dlciB0aGlzXG4gICAgICAgIC8vIGV2ZW4gaWYgRHJhd2VyIGhhcyBqdXN0IGJlZW4gb3BlbmVkIChidXQgYW5pbWF0aW9uIGlzIHN0aWxsIHBlbmRpbmcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICB3aWR0aCA9IHNpemUudmFsdWUsXG4gICAgICAgIHBvc2l0aW9uID0gYmV0d2VlbihldnQuZGlzdGFuY2UueCwgMCwgd2lkdGgpXG5cbiAgICAgIGlmIChldnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBwb3NpdGlvbiA+PSBNYXRoLm1pbig3NSwgd2lkdGgpXG5cbiAgICAgICAgaWYgKG9wZW5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNob3coKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiB3aWR0aClcbiAgICAgICAgfVxuXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGFwcGx5UG9zaXRpb24oXG4gICAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHJpZ2h0U2lkZS52YWx1ZSAhPT0gdHJ1ZSA6IHJpZ2h0U2lkZS52YWx1ZSlcbiAgICAgICAgICA/IE1hdGgubWF4KHdpZHRoIC0gcG9zaXRpb24sIDApXG4gICAgICAgICAgOiBNYXRoLm1pbigwLCBwb3NpdGlvbiAtIHdpZHRoKVxuICAgICAgKVxuICAgICAgYXBwbHlCYWNrZHJvcChcbiAgICAgICAgYmV0d2Vlbihwb3NpdGlvbiAvIHdpZHRoLCAwLCAxKVxuICAgICAgKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbG9zZVBhbiAoZXZ0KSB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyBzb21lIGJyb3dzZXJzIG1pZ2h0IGNhcHR1cmUgYW5kIHRyaWdnZXIgdGhpc1xuICAgICAgICAvLyBldmVuIGlmIERyYXdlciBoYXMganVzdCBiZWVuIGNsb3NlZCAoYnV0IGFuaW1hdGlvbiBpcyBzdGlsbCBwZW5kaW5nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBzaXplLnZhbHVlLFxuICAgICAgICBkaXIgPSBldnQuZGlyZWN0aW9uID09PSBwcm9wcy5zaWRlLFxuICAgICAgICBwb3NpdGlvbiA9ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGRpciAhPT0gdHJ1ZSA6IGRpcilcbiAgICAgICAgICA/IGJldHdlZW4oZXZ0LmRpc3RhbmNlLngsIDAsIHdpZHRoKVxuICAgICAgICAgIDogMFxuXG4gICAgICBpZiAoZXZ0LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gTWF0aC5hYnMocG9zaXRpb24pIDwgTWF0aC5taW4oNzUsIHdpZHRoKVxuXG4gICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICBhcHBseUJhY2tkcm9wKGJldHdlZW4oMSAtIHBvc2l0aW9uIC8gd2lkdGgsIDAsIDEpKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChmYWxzZSlcbiAgICAgIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUocHJvcHMuc2lkZSwgcHJvcCwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsIChwcm9wLCB2YWwpIHtcbiAgICAgIGlmIChwcm9wLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemVPbkxheW91dCAobWluaVRvT3ZlcmxheSwgc2l6ZSkge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgbWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUpXG4gICAgfVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IGluc3RhbmNlXG4gICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIG9uTGF5b3V0LnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWVcbiAgICAgICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGVtaXQoJ29uTGF5b3V0Jywgb25MYXlvdXQudmFsdWUpXG4gICAgICBlbWl0KCdtaW5pU3RhdGUnLCBpc01pbmkudmFsdWUpXG5cbiAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZVxuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IGhhbmRsZVNob3cgOiBoYW5kbGVIaWRlXG4gICAgICAgIGFjdGlvbihmYWxzZSwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSAhPT0gMCkge1xuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbGwgY29tcHV0ZWQgcHJvcGVydGllc1xuICAgICAgICAvLyBoYXZlIGJlZW4gdXBkYXRlZCBiZWZvcmUgY2FsbGluZyBoYW5kbGVTaG93L2hhbmRsZUhpZGUoKVxuICAgICAgICBuZXh0VGljayhmbilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyID0gd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyKClcbiAgICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgPSB2b2lkIDBcblxuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gZmFsc2UgJiYgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHNob3coZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm4oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgIT09IHZvaWQgMCAmJiBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlcigpXG4gICAgICBjbGVhclRpbWVvdXQodGltZXJNaW5pKVxuXG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGNsZWFudXAoKVxuXG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgaWYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9wcy5ub1N3aXBlT3BlbiA9PT0gZmFsc2UgJiYgY2hpbGQucHVzaChcbiAgICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAnb3BlbicsXG4gICAgICAgICAgICAgIGNsYXNzOiBgcS1kcmF3ZXJfX29wZW5lciBmaXhlZC0keyBwcm9wcy5zaWRlIH1gLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgb3BlbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaERpcihcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdiYWNrZHJvcCcsXG4gICAgICAgICAgICAgIGNsYXNzOiBiYWNrZHJvcENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogYmFja2Ryb3BTdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBoaWRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgJ2JhY2tkcm9wJyxcbiAgICAgICAgICAgIHByb3BzLm5vU3dpcGVCYWNrZHJvcCAhPT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICAgKCkgPT4gYmFja2Ryb3BDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5pID0gaXNNaW5pLnZhbHVlID09PSB0cnVlICYmIHNsb3RzLm1pbmkgIT09IHZvaWQgMFxuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGtleTogJycgKyBtaW5pLCAvLyByZXF1aXJlZCBvdGhlcndpc2UgVnVlIHdpbGwgbm90IGRpZmYgY29ycmVjdGx5XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIGNvbnRlbnRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIGF0dHJzLmNsYXNzXG4gICAgICAgICAgXVxuICAgICAgICB9LCBtaW5pID09PSB0cnVlXG4gICAgICAgICAgPyBzbG90cy5taW5pKClcbiAgICAgICAgICA6IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICAgIClcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGhEaXIoXG4gICAgICAgICAgJ2FzaWRlJyxcbiAgICAgICAgICB7IHJlZjogJ2NvbnRlbnQnLCBjbGFzczogY2xhc3Nlcy52YWx1ZSwgc3R5bGU6IHN0eWxlLnZhbHVlIH0sXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAnY29udGVudGNsb3NlJyxcbiAgICAgICAgICBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICgpID0+IGNvbnRlbnRDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS1kcmF3ZXItY29udGFpbmVyJyB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgcHJvdmlkZSwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHBhZ2VDb250YWluZXJLZXksIGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlQ29udGFpbmVyJyxcblxuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlQ29udGFpbmVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBwcm92aWRlKHBhZ2VDb250YWluZXJLZXksIHRydWUpXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNzcyA9IHt9XG5cbiAgICAgIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3MucGFkZGluZ1RvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICgkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdMZWZ0JyA6ICdSaWdodCcgfWAgXSA9IGAkeyAkbGF5b3V0LnJpZ2h0LnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nQm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbIGBwYWRkaW5nJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnIH1gIF0gPSBgJHsgJGxheW91dC5sZWZ0LnNpemUgfXB4YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogJ3EtcGFnZS1jb250YWluZXInLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb290ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIGhlaWdodEhpbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXZlYWwnLCAnZm9jdXNpbicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRm9vdGVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gcmVmKHBhcnNlSW50KHByb3BzLmhlaWdodEhpbnQsIDEwKSlcbiAgICBjb25zdCByZXZlYWxlZCA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHJlZihcbiAgICAgIGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSB8fCAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gMFxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIClcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0YnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgIDogd2luZG93SGVpZ2h0LnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJldmVhbGVkLnZhbHVlID09PSB0cnVlID8gc2l6ZS52YWx1ZSA6IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uICsgY29udGFpbmVySGVpZ2h0LnZhbHVlICsgc2l6ZS52YWx1ZSAtICRsYXlvdXQuaGVpZ2h0LnZhbHVlXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1mb290ZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy1ib3R0b20nXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1mb290ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWZvb3Rlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICAgICA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnICsgKGZpeGVkLnZhbHVlICE9PSB0cnVlID8gJyBoaWRkZW4nIDogJycpXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgdmlldyA9ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b20sXG4gICAgICAgIGNzcyA9IHt9XG5cbiAgICAgIGlmICh2aWV3WyAwIF0gPT09ICdsJyAmJiAkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAodmlld1sgMiBdID09PSAncicgJiYgJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKCdmb290ZXInLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIHVwZGF0ZUxvY2FsKHNpemUsIGhlaWdodClcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXZlYWxlZCAoKSB7XG4gICAgICBpZiAocHJvcHMucmV2ZWFsICE9PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBwb3NpdGlvbiwgaW5mbGVjdGlvblBvaW50IH0gPSAkbGF5b3V0LnNjcm9sbC52YWx1ZVxuXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgKFxuICAgICAgICBkaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgcG9zaXRpb24gLSBpbmZsZWN0aW9uUG9pbnQgPCAxMDBcbiAgICAgICAgfHwgJGxheW91dC5oZWlnaHQudmFsdWUgLSBjb250YWluZXJIZWlnaHQudmFsdWUgLSBwb3NpdGlvbiAtIHNpemUudmFsdWUgPCAzMDBcbiAgICAgICkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChldnQpIHtcbiAgICAgIGlmIChyZXZlYWxPbkZvY3VzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdmb2N1c2luJywgZXZ0KVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZWFsLCB2YWwgPT4ge1xuICAgICAgdmFsID09PSBmYWxzZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCwgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2gocmV2ZWFsZWQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgZW1pdCgncmV2ZWFsJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaChbIHNpemUsICRsYXlvdXQuc2Nyb2xsLCAkbGF5b3V0LmhlaWdodCBdLCB1cGRhdGVSZXZlYWxlZClcblxuICAgIHdhdGNoKCgpID0+ICRxLnNjcmVlbi5oZWlnaHQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlICYmIHVwZGF0ZUxvY2FsKHdpbmRvd0hlaWdodCwgdmFsKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHt9XG5cbiAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSBpbnN0YW5jZVxuICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgdXBkYXRlTGF5b3V0KCdzaXplJywgc2l6ZS52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSB2b2lkIDBcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgZmFsc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplXG4gICAgICAgIH0pXG4gICAgICBdKVxuXG4gICAgICBwcm9wcy5lbGV2YXRlZCA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZm9vdGVyJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICBvbkZvY3VzaW5cbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgcmVhY3RpdmUsIGNvbXB1dGVkLCB3YXRjaCwgcHJvdmlkZSwgb25Vbm1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbGJhcldpZHRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxheW91dCcsXG5cbiAgcHJvcHM6IHtcbiAgICBjb250YWluZXI6IEJvb2xlYW4sXG4gICAgdmlldzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hoaCBscHIgZmZmJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiAvXihofGwpaChofHIpIGxwciAoZnxsKWYoZnxyKSQvLnRlc3Qodi50b0xvd2VyQ2FzZSgpKVxuICAgIH0sXG5cbiAgICBvblNjcm9sbDogRnVuY3Rpb24sXG4gICAgb25TY3JvbGxIZWlnaHQ6IEZ1bmN0aW9uLFxuICAgIG9uUmVzaXplOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgLy8gcGFnZSByZWxhdGVkXG4gICAgY29uc3QgaGVpZ2h0ID0gcmVmKCRxLnNjcmVlbi5oZWlnaHQpXG4gICAgY29uc3Qgd2lkdGggPSByZWYocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gMCA6ICRxLnNjcmVlbi53aWR0aClcbiAgICBjb25zdCBzY3JvbGwgPSByZWYoeyBwb3NpdGlvbjogMCwgZGlyZWN0aW9uOiAnZG93bicsIGluZmxlY3Rpb25Qb2ludDogMCB9KVxuXG4gICAgLy8gY29udGFpbmVyIG9ubHkgcHJvcFxuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHJlZigwKVxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gcmVmKGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBnZXRTY3JvbGxiYXJXaWR0aCgpKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1sYXlvdXQgcS1sYXlvdXQtLSdcbiAgICAgICsgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSA/ICdjb250YWluZXJpemVkJyA6ICdzdGFuZGFyZCcpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jb250YWluZXIgPT09IGZhbHNlXG4gICAgICAgID8geyBtaW5IZWlnaHQ6ICRxLnNjcmVlbi5oZWlnaHQgKyAncHgnIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIC8vIHVzZWQgYnkgY29udGFpbmVyIG9ubHlcbiAgICBjb25zdCB0YXJnZXRTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSAwXG4gICAgICAgID8geyBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgJHsgc2Nyb2xsYmFyV2lkdGgudmFsdWUgfXB4YCB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCB0YXJnZXRDaGlsZFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdOiAwLFxuICAgICAgICAgICAgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcgXTogYC0keyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIG9uUGFnZVNjcm9sbCAoZGF0YSkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSB8fCBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24udG9wLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGF0YS5kaXJlY3Rpb24sXG4gICAgICAgICAgZGlyZWN0aW9uQ2hhbmdlZDogZGF0YS5kaXJlY3Rpb25DaGFuZ2VkLFxuICAgICAgICAgIGluZmxlY3Rpb25Qb2ludDogZGF0YS5pbmZsZWN0aW9uUG9pbnQudG9wLFxuICAgICAgICAgIGRlbHRhOiBkYXRhLmRlbHRhLnRvcFxuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsLnZhbHVlID0gaW5mb1xuICAgICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbCcsIGluZm8pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWdlUmVzaXplIChkYXRhKSB7XG4gICAgICBjb25zdCB7IGhlaWdodDogbmV3SGVpZ2h0LCB3aWR0aDogbmV3V2lkdGggfSA9IGRhdGFcbiAgICAgIGxldCByZXNpemVkID0gZmFsc2VcblxuICAgICAgaWYgKGhlaWdodC52YWx1ZSAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgIHJlc2l6ZWQgPSB0cnVlXG4gICAgICAgIGhlaWdodC52YWx1ZSA9IG5ld0hlaWdodFxuICAgICAgICBwcm9wcy5vblNjcm9sbEhlaWdodCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbEhlaWdodCcsIG5ld0hlaWdodClcbiAgICAgICAgdXBkYXRlU2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgfVxuICAgICAgaWYgKHdpZHRoLnZhbHVlICE9PSBuZXdXaWR0aCkge1xuICAgICAgICByZXNpemVkID0gdHJ1ZVxuICAgICAgICB3aWR0aC52YWx1ZSA9IG5ld1dpZHRoXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNpemVkID09PSB0cnVlICYmIHByb3BzLm9uUmVzaXplICE9PSB2b2lkIDApIHtcbiAgICAgICAgZW1pdCgncmVzaXplJywgZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNvbnRhaW5lclJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgaWYgKGNvbnRhaW5lckhlaWdodC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodC52YWx1ZSA9IGhlaWdodFxuICAgICAgICB1cGRhdGVTY3JvbGxiYXJXaWR0aCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsYmFyV2lkdGggKCkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGhlaWdodC52YWx1ZSA+IGNvbnRhaW5lckhlaWdodC52YWx1ZVxuICAgICAgICAgID8gZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgICAgIDogMFxuXG4gICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSA9IHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGltZXJcblxuICAgIGNvbnN0ICRsYXlvdXQgPSB7XG4gICAgICBpbnN0YW5jZXM6IHt9LFxuICAgICAgdmlldzogY29tcHV0ZWQoKCkgPT4gcHJvcHMudmlldyksXG4gICAgICBpc0NvbnRhaW5lcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuY29udGFpbmVyKSxcblxuICAgICAgcm9vdFJlZixcblxuICAgICAgaGVpZ2h0LFxuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgc2Nyb2xsYmFyV2lkdGgsXG4gICAgICB0b3RhbFdpZHRoOiBjb21wdXRlZCgoKSA9PiB3aWR0aC52YWx1ZSArIHNjcm9sbGJhcldpZHRoLnZhbHVlKSxcblxuICAgICAgcm93czogY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gcHJvcHMudmlldy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IHJvd3NbIDAgXS5zcGxpdCgnJyksXG4gICAgICAgICAgbWlkZGxlOiByb3dzWyAxIF0uc3BsaXQoJycpLFxuICAgICAgICAgIGJvdHRvbTogcm93c1sgMiBdLnNwbGl0KCcnKVxuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgaGVhZGVyOiByZWFjdGl2ZSh7IHNpemU6IDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuICAgICAgcmlnaHQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGZvb3RlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGxlZnQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcblxuICAgICAgc2Nyb2xsLFxuXG4gICAgICBhbmltYXRlICgpIHtcbiAgICAgICAgaWYgKHRpbWVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgICB0aW1lciA9IHZvaWQgMFxuICAgICAgICB9LCAxNTUpXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGUgKHBhcnQsIHByb3AsIHZhbCkge1xuICAgICAgICAkbGF5b3V0WyBwYXJ0IF1bIHByb3AgXSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3ZpZGUobGF5b3V0S2V5LCAkbGF5b3V0KVxuXG4gICAgLy8gcHJldmVudCBzY3JvbGxiYXIgZmxpY2tlciB3aGlsZSByZXNpemluZyB3aW5kb3cgaGVpZ2h0XG4gICAgLy8gaWYgbm8gcGFnZSBzY3JvbGxiYXIgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSAmJiBnZXRTY3JvbGxiYXJXaWR0aCgpID4gMCkge1xuICAgICAgbGV0IHRpbWVyID0gbnVsbFxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3RvcmVTY3JvbGxiYXIgKCkge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1zY3JvbGxiYXInKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoaWRlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIHNjcm9sbGJhciB0aGVuIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuXG4gICAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA+ICRxLnNjcmVlbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQocmVzdG9yZVNjcm9sbGJhciwgMzAwKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxFdmVudCAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCAmJiBhY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHJlc3RvcmVTY3JvbGxiYXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93WyBgJHsgYWN0aW9uIH1FdmVudExpc3RlbmVyYCBdKCdyZXNpemUnLCBoaWRlU2Nyb2xsYmFyKVxuICAgICAgfVxuXG4gICAgICB3YXRjaChcbiAgICAgICAgKCkgPT4gKHByb3BzLmNvbnRhaW5lciAhPT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZScpLFxuICAgICAgICB1cGRhdGVTY3JvbGxFdmVudFxuICAgICAgKVxuXG4gICAgICBwcm9wcy5jb250YWluZXIgIT09IHRydWUgJiYgdXBkYXRlU2Nyb2xsRXZlbnQoJ2FkZCcpXG5cbiAgICAgIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnQoJ3JlbW92ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7IG9uU2Nyb2xsOiBvblBhZ2VTY3JvbGwgfSksXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvblBhZ2VSZXNpemUgfSlcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGxheW91dCA9IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcmVmOiBwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyB2b2lkIDAgOiByb290UmVmLFxuICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgIH0sIGNvbnRlbnQpXG5cbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0LWNvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW4nLFxuICAgICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHsgb25SZXNpemU6IG9uQ29udGFpbmVyUmVzaXplIH0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgICBzdHlsZTogdGFyZ2V0U3R5bGUudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHRhcmdldENoaWxkU3R5bGUudmFsdWVcbiAgICAgICAgICAgIH0sIFsgbGF5b3V0IF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxheW91dFxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZCBjbGFzcz1cIm15LWNhcmQgYmctYmxhY2tcIiBmbGF0IHYtaWY9XCJzb25nUXVldWUuY3VycmVudGx5UGxheWluZyAhPT0gdW5kZWZpbmVkXCI+XG4gICAgPHEtY2FyZC1zZWN0aW9uIGhvcml6b250YWw+XG4gICAgICA8cS1pbWdcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEyNXB4OyBtYXgtd2lkdGg6IDEyNXB4XCJcbiAgICAgICAgOnNyYz1cInNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmFsYnVtLnRodW1ibmFpbC5zbWFsbC51cmxcIlxuICAgICAgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+e3sgc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcubmFtZS5fZGVmYXVsdCB9fTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTJcIj57eyBzb25nUXVldWUuY3VycmVudGx5UGxheWluZy5hbGJ1bS5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxIHRleHQtZ3JleSBxLXB5LXNtIGN1cnNvci1wb2ludGVyXCIgQGNsaWNrPVwiZ290b0FydGlzdFwiPnt7IHNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmFsYnVtLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX08L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1jYXJkLWFjdGlvbnMgdmVydGljYWwgY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB4LW1kXCI+XG4gICAgICAgIDxxLWJ0biBmbGF0IHJvdW5kIHNpemU9XCJtZFwiIGNvbG9yPVwicmVkXCIgOmljb249XCJvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXCIgLz5cbiAgICAgICAgPHEtYnRuIGZsYXQgcm91bmQgc2l6ZT1cIm1kXCIgY29sb3I9XCJhY2NlbnRcIiA6aWNvbj1cIm91dGxpbmVkUGxheWxpc3RBZGRDaXJjbGVcIj5cbiAgICAgICAgICA8cS1tZW51PlxuICAgICAgICAgICAgPEFkZFRvUGxheWxpc3RNZW51IDp0cmFjay1pZD1cInNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmlkXCI+PC9BZGRUb1BsYXlsaXN0TWVudT5cbiAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVHJhY2tJbmZvQ2FyZCdcbn1cbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRQbGF5bGlzdEFkZENpcmNsZSxcbiAgb3V0bGluZWRGYXZvcml0ZUJvcmRlclxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSAnc3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlcic7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcbmltcG9ydCBBZGRUb1BsYXlsaXN0TWVudSBmcm9tIFwiY29tcG9uZW50cy9BZGRUb1BsYXlsaXN0TWVudS52dWVcIjtcblxuY29uc3Qgc29uZ1F1ZXVlID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBnb3RvQXJ0aXN0ID0gKCkgPT4ge1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhcnRpc3QnLCBwYXJhbXM6IHsgYXJ0aXN0OiBzb25nUXVldWUuY3VycmVudGx5UGxheWluZz8uYWxidW0/LmFsYnVtQXJ0aXN0IVswXSEubmFtZSB9IH0pXG59XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB7IHVzZUZvcm1Qcm9wcywgdXNlRm9ybUluamVjdCB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWZvcm0uanMnXG5cbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBwb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaXNOdW1iZXIsIGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMuanMnXG5pbXBvcnQgeyBoRGlyIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IG1hcmtlclByZWZpeENsYXNzID0gJ3Etc2xpZGVyX19tYXJrZXItbGFiZWxzJ1xuY29uc3QgZGVmYXVsdE1hcmtlckNvbnZlcnRGbiA9IHYgPT4gKHsgdmFsdWU6IHYgfSlcbmNvbnN0IGRlZmF1bHRNYXJrZXJMYWJlbFJlbmRlckZuID0gKHsgbWFya2VyIH0pID0+IGgoJ2RpdicsIHtcbiAga2V5OiBtYXJrZXIudmFsdWUsXG4gIHN0eWxlOiBtYXJrZXIuc3R5bGUsXG4gIGNsYXNzOiBtYXJrZXIuY2xhc3Nlc1xufSwgbWFya2VyLmxhYmVsKVxuXG4vLyBQR0RPV04sIExFRlQsIERPV04sIFBHVVAsIFJJR0hULCBVUFxuZXhwb3J0IGNvbnN0IGtleUNvZGVzID0gWyAzNCwgMzcsIDQwLCAzMywgMzksIDM4IF1cblxuZXhwb3J0IGNvbnN0IHVzZVNsaWRlclByb3BzID0ge1xuICAuLi51c2VEYXJrUHJvcHMsXG4gIC4uLnVzZUZvcm1Qcm9wcyxcblxuICBtaW46IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMFxuICB9LFxuICBtYXg6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMTAwXG4gIH0sXG4gIGlubmVyTWluOiBOdW1iZXIsXG4gIGlubmVyTWF4OiBOdW1iZXIsXG5cbiAgc3RlcDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxLFxuICAgIHZhbGlkYXRvcjogdiA9PiB2ID49IDBcbiAgfSxcblxuICBzbmFwOiBCb29sZWFuLFxuXG4gIHZlcnRpY2FsOiBCb29sZWFuLFxuICByZXZlcnNlOiBCb29sZWFuLFxuXG4gIGhpZGVTZWxlY3Rpb246IEJvb2xlYW4sXG5cbiAgY29sb3I6IFN0cmluZyxcbiAgbWFya2VyTGFiZWxzQ2xhc3M6IFN0cmluZyxcblxuICBsYWJlbDogQm9vbGVhbixcbiAgbGFiZWxDb2xvcjogU3RyaW5nLFxuICBsYWJlbFRleHRDb2xvcjogU3RyaW5nLFxuICBsYWJlbEFsd2F5czogQm9vbGVhbixcbiAgc3dpdGNoTGFiZWxTaWRlOiBCb29sZWFuLFxuXG4gIG1hcmtlcnM6IFsgQm9vbGVhbiwgTnVtYmVyIF0sXG4gIG1hcmtlckxhYmVsczogWyBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBGdW5jdGlvbiBdLFxuICBzd2l0Y2hNYXJrZXJMYWJlbHNTaWRlOiBCb29sZWFuLFxuXG4gIHRyYWNrSW1nOiBTdHJpbmcsXG4gIHRyYWNrQ29sb3I6IFN0cmluZyxcbiAgaW5uZXJUcmFja0ltZzogU3RyaW5nLFxuICBpbm5lclRyYWNrQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uQ29sb3I6IFN0cmluZyxcbiAgc2VsZWN0aW9uSW1nOiBTdHJpbmcsXG5cbiAgdGh1bWJTaXplOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICcyMHB4J1xuICB9LFxuICB0cmFja1NpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzRweCdcbiAgfSxcblxuICBkaXNhYmxlOiBCb29sZWFuLFxuICByZWFkb25seTogQm9vbGVhbixcbiAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgdGFiaW5kZXg6IFsgU3RyaW5nLCBOdW1iZXIgXSxcblxuICB0aHVtYkNvbG9yOiBTdHJpbmcsXG4gIHRodW1iUGF0aDoge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnTSA0LCAxMCBhIDYsNiAwIDEsMCAxMiwwIGEgNiw2IDAgMSwwIC0xMiwwJ1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VTbGlkZXJFbWl0cyA9IFsgJ3BhbicsICd1cGRhdGU6bW9kZWxWYWx1ZScsICdjaGFuZ2UnIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgdXBkYXRlVmFsdWUsIHVwZGF0ZVBvc2l0aW9uLCBnZXREcmFnZ2luZywgZm9ybUF0dHJzIH0pIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgc2xvdHMsIHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gIGNvbnN0IGluamVjdEZvcm1JbnB1dCA9IHVzZUZvcm1JbmplY3QoZm9ybUF0dHJzKVxuXG4gIGNvbnN0IGFjdGl2ZSA9IHJlZihmYWxzZSlcbiAgY29uc3QgcHJldmVudEZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBmb2N1cyA9IHJlZihmYWxzZSlcbiAgY29uc3QgZHJhZ2dpbmcgPSByZWYoZmFsc2UpXG5cbiAgY29uc3QgYXhpcyA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICctLXYnIDogJy0taCcpKVxuICBjb25zdCBsYWJlbFNpZGUgPSBjb21wdXRlZCgoKSA9PiAnLScgKyAocHJvcHMuc3dpdGNoTGFiZWxTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcpKVxuXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgID8gcHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZVxuICAgICAgOiBwcm9wcy5yZXZlcnNlICE9PSAoJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICkpXG5cbiAgY29uc3QgaW5uZXJNaW4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgaXNOYU4ocHJvcHMuaW5uZXJNaW4pID09PSB0cnVlIHx8IHByb3BzLmlubmVyTWluIDwgcHJvcHMubWluXG4gICAgICA/IHByb3BzLm1pblxuICAgICAgOiBwcm9wcy5pbm5lck1pblxuICApKVxuICBjb25zdCBpbm5lck1heCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1heCkgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNYXggPiBwcm9wcy5tYXhcbiAgICAgID8gcHJvcHMubWF4XG4gICAgICA6IHByb3BzLmlubmVyTWF4XG4gICkpXG5cbiAgY29uc3QgZWRpdGFibGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5yZWFkb25seSAhPT0gdHJ1ZVxuICAgICYmIGlubmVyTWluLnZhbHVlIDwgaW5uZXJNYXgudmFsdWVcbiAgKSlcblxuICBjb25zdCBkZWNpbWFscyA9IGNvbXB1dGVkKCgpID0+IChTdHJpbmcocHJvcHMuc3RlcCkudHJpbSgpLnNwbGl0KCcuJylbIDEgXSB8fCAnJykubGVuZ3RoKVxuICBjb25zdCBzdGVwID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnN0ZXAgPT09IDAgPyAxIDogcHJvcHMuc3RlcCkpXG4gIGNvbnN0IHRhYmluZGV4ID0gY29tcHV0ZWQoKCkgPT4gKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gcHJvcHMudGFiaW5kZXggfHwgMCA6IC0xKSlcblxuICBjb25zdCB0cmFja0xlbiA9IGNvbXB1dGVkKCgpID0+IHByb3BzLm1heCAtIHByb3BzLm1pbilcbiAgY29uc3QgaW5uZXJCYXJMZW4gPSBjb21wdXRlZCgoKSA9PiBpbm5lck1heC52YWx1ZSAtIGlubmVyTWluLnZhbHVlKVxuXG4gIGNvbnN0IGlubmVyTWluUmF0aW8gPSBjb21wdXRlZCgoKSA9PiBjb252ZXJ0TW9kZWxUb1JhdGlvKGlubmVyTWluLnZhbHVlKSlcbiAgY29uc3QgaW5uZXJNYXhSYXRpbyA9IGNvbXB1dGVkKCgpID0+IGNvbnZlcnRNb2RlbFRvUmF0aW8oaW5uZXJNYXgudmFsdWUpKVxuXG4gIGNvbnN0IHBvc2l0aW9uUHJvcCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgPyAoaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdib3R0b20nIDogJ3RvcCcpXG4gICAgICA6IChpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JylcbiAgKSlcblxuICBjb25zdCBzaXplUHJvcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdoZWlnaHQnIDogJ3dpZHRoJykpXG4gIGNvbnN0IHRoaWNrbmVzc1Byb3AgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnd2lkdGgnIDogJ2hlaWdodCcpKVxuICBjb25zdCBvcmllbnRhdGlvbiA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcpKVxuXG4gIGNvbnN0IGF0dHJpYnV0ZXMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0ge1xuICAgICAgcm9sZTogJ3NsaWRlcicsXG4gICAgICAnYXJpYS12YWx1ZW1pbic6IGlubmVyTWluLnZhbHVlLFxuICAgICAgJ2FyaWEtdmFsdWVtYXgnOiBpbm5lck1heC52YWx1ZSxcbiAgICAgICdhcmlhLW9yaWVudGF0aW9uJzogb3JpZW50YXRpb24udmFsdWUsXG4gICAgICAnZGF0YS1zdGVwJzogcHJvcHMuc3RlcFxuICAgIH1cblxuICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlKSB7XG4gICAgICBhY2NbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3BzLnJlYWRvbmx5ID09PSB0cnVlKSB7XG4gICAgICBhY2NbICdhcmlhLXJlYWRvbmx5JyBdID0gJ3RydWUnXG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgIGBxLXNsaWRlciBxLXNsaWRlciR7IGF4aXMudmFsdWUgfSBxLXNsaWRlci0tJHsgYWN0aXZlLnZhbHVlID09PSB0cnVlID8gJycgOiAnaW4nIH1hY3RpdmUgaW5saW5lIG5vLXdyYXAgYFxuICAgICsgKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3JvdycgOiAnY29sdW1uJylcbiAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnIHEtc2xpZGVyLS1lbmFibGVkJyArIChlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWVkaXRhYmxlJyA6ICcnKSlcbiAgICArIChmb2N1cy52YWx1ZSA9PT0gJ2JvdGgnID8gJyBxLXNsaWRlci0tZm9jdXMnIDogJycpXG4gICAgKyAocHJvcHMubGFiZWwgfHwgcHJvcHMubGFiZWxBbHdheXMgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1sYWJlbCcgOiAnJylcbiAgICArIChwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWxhYmVsLWFsd2F5cycgOiAnJylcbiAgICArIChpc0RhcmsudmFsdWUgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1kYXJrJyA6ICcnKVxuICAgICsgKHByb3BzLmRlbnNlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZGVuc2UgcS1zbGlkZXItLWRlbnNlJyArIGF4aXMudmFsdWUgOiAnJylcbiAgKVxuXG4gIGZ1bmN0aW9uIGdldFBvc2l0aW9uQ2xhc3MgKG5hbWUpIHtcbiAgICBjb25zdCBjbHMgPSAncS1zbGlkZXJfXycgKyBuYW1lXG4gICAgcmV0dXJuIGAkeyBjbHMgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfSAkeyBjbHMgfSR7IGF4aXMudmFsdWUgfSR7IGxhYmVsU2lkZS52YWx1ZSB9YFxuICB9XG4gIGZ1bmN0aW9uIGdldEF4aXNDbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNscyA9ICdxLXNsaWRlcl9fJyArIG5hbWVcbiAgICByZXR1cm4gYCR7IGNscyB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9YFxuICB9XG5cbiAgY29uc3Qgc2VsZWN0aW9uQmFyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgY29sb3IgPSBwcm9wcy5zZWxlY3Rpb25Db2xvciB8fCBwcm9wcy5jb2xvclxuICAgIHJldHVybiAncS1zbGlkZXJfX3NlbGVjdGlvbiBhYnNvbHV0ZSdcbiAgICAgICsgKGNvbG9yICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgY29sb3IgfWAgOiAnJylcbiAgfSlcbiAgY29uc3QgbWFya2VyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRBeGlzQ2xhc3MoJ21hcmtlcnMnKSArICcgYWJzb2x1dGUgb3ZlcmZsb3ctaGlkZGVuJylcbiAgY29uc3QgdHJhY2tDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldEF4aXNDbGFzcygndHJhY2stY29udGFpbmVyJykpXG4gIGNvbnN0IHBpbkNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0UG9zaXRpb25DbGFzcygncGluJykpXG4gIGNvbnN0IGxhYmVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCdsYWJlbCcpKVxuICBjb25zdCB0ZXh0Q29udGFpbmVyQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCd0ZXh0LWNvbnRhaW5lcicpKVxuICBjb25zdCBtYXJrZXJMYWJlbHNDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgZ2V0UG9zaXRpb25DbGFzcygnbWFya2VyLWxhYmVscy1jb250YWluZXInKVxuICAgICsgKHByb3BzLm1hcmtlckxhYmVsc0NsYXNzICE9PSB2b2lkIDAgPyBgICR7IHByb3BzLm1hcmtlckxhYmVsc0NsYXNzIH1gIDogJycpXG4gIClcblxuICBjb25zdCB0cmFja0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS1zbGlkZXJfX3RyYWNrIHJlbGF0aXZlLXBvc2l0aW9uIG5vLW91dGxpbmUnXG4gICAgKyAocHJvcHMudHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy50cmFja0NvbG9yIH1gIDogJycpXG4gIClcbiAgY29uc3QgdHJhY2tTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7IFsgdGhpY2tuZXNzUHJvcC52YWx1ZSBdOiBwcm9wcy50cmFja1NpemUgfVxuICAgIGlmIChwcm9wcy50cmFja0ltZyAhPT0gdm9pZCAwKSB7XG4gICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy50cmFja0ltZyB9KSAhaW1wb3J0YW50YFxuICAgIH1cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgaW5uZXJCYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3Etc2xpZGVyX19pbm5lciBhYnNvbHV0ZSdcbiAgICArIChwcm9wcy5pbm5lclRyYWNrQ29sb3IgIT09IHZvaWQgMCA/IGAgYmctJHsgcHJvcHMuaW5uZXJUcmFja0NvbG9yIH1gIDogJycpXG4gIClcbiAgY29uc3QgaW5uZXJCYXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogaW5uZXJNaW5SYXRpby52YWx1ZSB9JWAsXG4gICAgICBbIHNpemVQcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAoaW5uZXJNYXhSYXRpby52YWx1ZSAtIGlubmVyTWluUmF0aW8udmFsdWUpIH0lYFxuICAgIH1cbiAgICBpZiAocHJvcHMuaW5uZXJUcmFja0ltZyAhPT0gdm9pZCAwKSB7XG4gICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy5pbm5lclRyYWNrSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBmdW5jdGlvbiBjb252ZXJ0UmF0aW9Ub01vZGVsIChyYXRpbykge1xuICAgIGNvbnN0IHsgbWluLCBtYXgsIHN0ZXAgfSA9IHByb3BzXG4gICAgbGV0IG1vZGVsID0gbWluICsgcmF0aW8gKiAobWF4IC0gbWluKVxuXG4gICAgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICBjb25zdCBtb2R1bG8gPSAobW9kZWwgLSBtaW4pICUgc3RlcFxuICAgICAgbW9kZWwgKz0gKE1hdGguYWJzKG1vZHVsbykgPj0gc3RlcCAvIDIgPyAobW9kdWxvIDwgMCA/IC0xIDogMSkgKiBzdGVwIDogMCkgLSBtb2R1bG9cbiAgICB9XG5cbiAgICBpZiAoZGVjaW1hbHMudmFsdWUgPiAwKSB7XG4gICAgICBtb2RlbCA9IHBhcnNlRmxvYXQobW9kZWwudG9GaXhlZChkZWNpbWFscy52YWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGJldHdlZW4obW9kZWwsIGlubmVyTWluLnZhbHVlLCBpbm5lck1heC52YWx1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRNb2RlbFRvUmF0aW8gKG1vZGVsKSB7XG4gICAgcmV0dXJuIHRyYWNrTGVuLnZhbHVlID09PSAwXG4gICAgICA/IDBcbiAgICAgIDogKG1vZGVsIC0gcHJvcHMubWluKSAvIHRyYWNrTGVuLnZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBnZXREcmFnZ2luZ1JhdGlvIChldnQsIGRyYWdnaW5nKSB7XG4gICAgY29uc3RcbiAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICB2YWwgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IGJldHdlZW4oKHBvcy50b3AgLSBkcmFnZ2luZy50b3ApIC8gZHJhZ2dpbmcuaGVpZ2h0LCAwLCAxKVxuICAgICAgICA6IGJldHdlZW4oKHBvcy5sZWZ0IC0gZHJhZ2dpbmcubGVmdCkgLyBkcmFnZ2luZy53aWR0aCwgMCwgMSlcblxuICAgIHJldHVybiBiZXR3ZWVuKFxuICAgICAgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/IDEuMCAtIHZhbCA6IHZhbCxcbiAgICAgIGlubmVyTWluUmF0aW8udmFsdWUsXG4gICAgICBpbm5lck1heFJhdGlvLnZhbHVlXG4gICAgKVxuICB9XG5cbiAgY29uc3QgbWFya2VyU3RlcCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc051bWJlcihwcm9wcy5tYXJrZXJzKSA9PT0gdHJ1ZSA/IHByb3BzLm1hcmtlcnMgOiBzdGVwLnZhbHVlKVxuICApXG5cbiAgY29uc3QgbWFya2VyVGlja3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgYWNjID0gW11cbiAgICBjb25zdCBzdGVwID0gbWFya2VyU3RlcC52YWx1ZVxuICAgIGNvbnN0IG1heCA9IHByb3BzLm1heFxuXG4gICAgbGV0IHZhbHVlID0gcHJvcHMubWluXG4gICAgZG8ge1xuICAgICAgYWNjLnB1c2godmFsdWUpXG4gICAgICB2YWx1ZSArPSBzdGVwXG4gICAgfSB3aGlsZSAodmFsdWUgPCBtYXgpXG5cbiAgICBhY2MucHVzaChtYXgpXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgY29uc3QgcHJlZml4ID0gYCAkeyBtYXJrZXJQcmVmaXhDbGFzcyB9JHsgYXhpcy52YWx1ZSB9LWBcbiAgICByZXR1cm4gbWFya2VyUHJlZml4Q2xhc3NcbiAgICAgICsgYCR7IHByZWZpeCB9JHsgcHJvcHMuc3dpdGNoTWFya2VyTGFiZWxzU2lkZSA9PT0gdHJ1ZSA/ICdzd2l0Y2hlZCcgOiAnc3RhbmRhcmQnIH1gXG4gICAgICArIGAkeyBwcmVmaXggfSR7IGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncnRsJyA6ICdsdHInIH1gXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyTGFiZWxzTGlzdCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICByZXR1cm4gZ2V0TWFya2VyTGlzdChwcm9wcy5tYXJrZXJMYWJlbHMpLm1hcCgoZW50cnksIGluZGV4KSA9PiAoe1xuICAgICAgaW5kZXgsXG4gICAgICB2YWx1ZTogZW50cnkudmFsdWUsXG4gICAgICBsYWJlbDogZW50cnkubGFiZWwgfHwgZW50cnkudmFsdWUsXG4gICAgICBjbGFzc2VzOiBtYXJrZXJMYWJlbENsYXNzLnZhbHVlXG4gICAgICAgICsgKGVudHJ5LmNsYXNzZXMgIT09IHZvaWQgMCA/ICcgJyArIGVudHJ5LmNsYXNzZXMgOiAnJyksXG4gICAgICBzdHlsZToge1xuICAgICAgICAuLi5nZXRNYXJrZXJMYWJlbFN0eWxlKGVudHJ5LnZhbHVlKSxcbiAgICAgICAgLi4uKGVudHJ5LnN0eWxlIHx8IHt9KVxuICAgICAgfVxuICAgIH0pKVxuICB9KVxuXG4gIGNvbnN0IG1hcmtlclNjb3BlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICBtYXJrZXJMaXN0OiBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLFxuICAgIG1hcmtlck1hcDogbWFya2VyTGFiZWxzTWFwLnZhbHVlLFxuICAgIGNsYXNzZXM6IG1hcmtlckxhYmVsQ2xhc3MudmFsdWUsIC8vIFRPRE8gdHMgZGVmaW5pdGlvblxuICAgIGdldFN0eWxlOiBnZXRNYXJrZXJMYWJlbFN0eWxlXG4gIH0pKVxuXG4gIGNvbnN0IG1hcmtlclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChpbm5lckJhckxlbi52YWx1ZSAhPT0gMCkge1xuICAgICAgY29uc3Qgc2l6ZSA9IDEwMCAqIG1hcmtlclN0ZXAudmFsdWUgLyBpbm5lckJhckxlbi52YWx1ZVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5pbm5lckJhclN0eWxlLnZhbHVlLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICA/IGAycHggJHsgc2l6ZSB9JWBcbiAgICAgICAgICA6IGAkeyBzaXplIH0lIDJweGBcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbFxuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxpc3QgKGRlZikge1xuICAgIGlmIChkZWYgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGlmIChkZWYgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBtYXJrZXJUaWNrcy52YWx1ZS5tYXAoZGVmYXVsdE1hcmtlckNvbnZlcnRGbilcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIG1hcmtlclRpY2tzLnZhbHVlLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkZWYodmFsdWUpXG4gICAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IHsgLi4uaXRlbSwgdmFsdWUgfSA6IHsgdmFsdWUsIGxhYmVsOiBpdGVtIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVyRm4gPSAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA+PSBwcm9wcy5taW4gJiYgdmFsdWUgPD0gcHJvcHMubWF4XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZWYpID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZGVmXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyBpdGVtIDogeyB2YWx1ZTogaXRlbSB9KSlcbiAgICAgICAgLmZpbHRlcihmaWx0ZXJGbilcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGVmKS5tYXAoa2V5ID0+IHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBkZWZbIGtleSBdXG4gICAgICBjb25zdCB2YWx1ZSA9IE51bWJlcihrZXkpXG4gICAgICByZXR1cm4gaXNPYmplY3QoaXRlbSkgPT09IHRydWUgPyB7IC4uLml0ZW0sIHZhbHVlIH0gOiB7IHZhbHVlLCBsYWJlbDogaXRlbSB9XG4gICAgfSkuZmlsdGVyKGZpbHRlckZuKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGFiZWxTdHlsZSAodmFsKSB7XG4gICAgcmV0dXJuIHsgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqICh2YWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWUgfSVgIH1cbiAgfVxuXG4gIGNvbnN0IG1hcmtlckxhYmVsc01hcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzID09PSBmYWxzZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBhY2MgPSB7fVxuICAgIG1hcmtlckxhYmVsc0xpc3QudmFsdWUuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICBhY2NbIGVudHJ5LnZhbHVlIF0gPSBlbnRyeVxuICAgIH0pXG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGdldE1hcmtlckxhYmVsc0NvbnRlbnQgKCkge1xuICAgIGlmIChzbG90c1sgJ21hcmtlci1sYWJlbC1ncm91cCcgXSAhPT0gdm9pZCAwKSB7XG4gICAgICByZXR1cm4gc2xvdHNbICdtYXJrZXItbGFiZWwtZ3JvdXAnIF0obWFya2VyU2NvcGUudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgZm4gPSBzbG90c1sgJ21hcmtlci1sYWJlbCcgXSB8fCBkZWZhdWx0TWFya2VyTGFiZWxSZW5kZXJGblxuICAgIHJldHVybiBtYXJrZXJMYWJlbHNMaXN0LnZhbHVlLm1hcChtYXJrZXIgPT4gZm4oe1xuICAgICAgbWFya2VyLFxuICAgICAgLi4ubWFya2VyU2NvcGUudmFsdWVcbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IHBhbkRpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAvLyBpZiBlZGl0YWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgIHJldHVybiBbIFtcbiAgICAgIFRvdWNoUGFuLFxuICAgICAgb25QYW4sXG4gICAgICB2b2lkIDAsXG4gICAgICB7XG4gICAgICAgIFsgb3JpZW50YXRpb24udmFsdWUgXTogdHJ1ZSxcbiAgICAgICAgcHJldmVudDogdHJ1ZSxcbiAgICAgICAgc3RvcDogdHJ1ZSxcbiAgICAgICAgbW91c2U6IHRydWUsXG4gICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICB9XG4gICAgXSBdXG4gIH0pXG5cbiAgZnVuY3Rpb24gb25QYW4gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgIGlmIChkcmFnZ2luZy52YWx1ZSAhPT0gdm9pZCAwKSB7XG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgICAgLy8gb25seSBpZiB0b3VjaCwgYmVjYXVzZSB3ZSBhbHNvIGhhdmUgbW91c2Vkb3duL3VwOlxuICAgICAgICBldmVudC50b3VjaCA9PT0gdHJ1ZSAmJiB1cGRhdGVWYWx1ZSh0cnVlKVxuICAgICAgICBkcmFnZ2luZy52YWx1ZSA9IHZvaWQgMFxuICAgICAgICBlbWl0KCdwYW4nLCAnZW5kJylcbiAgICAgIH1cbiAgICAgIGFjdGl2ZS52YWx1ZSA9IGZhbHNlXG4gICAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgIGRyYWdnaW5nLnZhbHVlID0gZ2V0RHJhZ2dpbmcoZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgdXBkYXRlVmFsdWUoKVxuICAgICAgYWN0aXZlLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgncGFuJywgJ3N0YXJ0JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25CbHVyICgpIHtcbiAgICBmb2N1cy52YWx1ZSA9IGZhbHNlXG4gIH1cblxuICBmdW5jdGlvbiBvbkFjdGl2YXRlIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUoKVxuXG4gICAgcHJldmVudEZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgIGFjdGl2ZS52YWx1ZSA9IHRydWVcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbkRlYWN0aXZhdGUgKCkge1xuICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9IGZhbHNlXG4gICAgYWN0aXZlLnZhbHVlID0gZmFsc2VcblxuICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgb25CbHVyKClcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH1cblxuICBmdW5jdGlvbiBvbk1vYmlsZUNsaWNrIChldnQpIHtcbiAgICB1cGRhdGVQb3NpdGlvbihldnQsIGdldERyYWdnaW5nKGV2dCkpXG4gICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5dXAgKGV2dCkge1xuICAgIGlmIChrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkpIHtcbiAgICAgIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VGV4dENvbnRhaW5lclN0eWxlIChyYXRpbykge1xuICAgIGlmIChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSkgeyByZXR1cm4gbnVsbCB9XG5cbiAgICBjb25zdCBwID0gJHEubGFuZy5ydGwgIT09IHByb3BzLnJldmVyc2UgPyAxIC0gcmF0aW8gOiByYXRpb1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKGNhbGMoJHsgMiAqIHAgLSAxIH0gKiAkeyBwcm9wcy50aHVtYlNpemUgfSAvIDIgKyAkeyA1MCAtIDEwMCAqIHAgfSUpKWBcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUaHVtYlJlbmRlckZuICh0aHVtYikge1xuICAgIGNvbnN0IGZvY3VzQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPT09IGZhbHNlICYmIChmb2N1cy52YWx1ZSA9PT0gdGh1bWIuZm9jdXNWYWx1ZSB8fCBmb2N1cy52YWx1ZSA9PT0gJ2JvdGgnKVxuICAgICAgICA/ICcgcS1zbGlkZXItLWZvY3VzJ1xuICAgICAgICA6ICcnXG4gICAgKSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtc2xpZGVyX190aHVtYiBxLXNsaWRlcl9fdGh1bWIkeyBheGlzLnZhbHVlIH0gcS1zbGlkZXJfX3RodW1iJHsgYXhpcy52YWx1ZSB9LSR7IGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncnRsJyA6ICdsdHInIH0gYWJzb2x1dGUgbm9uLXNlbGVjdGFibGVgXG4gICAgICArIGZvY3VzQ2xhc3MudmFsdWVcbiAgICAgICsgKHRodW1iLnRodW1iQ29sb3IudmFsdWUgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0aHVtYi50aHVtYkNvbG9yLnZhbHVlIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IHByb3BzLnRodW1iU2l6ZSxcbiAgICAgIGhlaWdodDogcHJvcHMudGh1bWJTaXplLFxuICAgICAgWyBwb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHRodW1iLnJhdGlvLnZhbHVlIH0lYCxcbiAgICAgIHpJbmRleDogZm9jdXMudmFsdWUgPT09IHRodW1iLmZvY3VzVmFsdWUgPyAyIDogdm9pZCAwXG4gICAgfSkpXG5cbiAgICBjb25zdCBwaW5Db2xvciA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHRodW1iLmxhYmVsQ29sb3IudmFsdWUgIT09IHZvaWQgMFxuICAgICAgICA/IGAgdGV4dC0keyB0aHVtYi5sYWJlbENvbG9yLnZhbHVlIH1gXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgdGV4dENvbnRhaW5lclN0eWxlID0gY29tcHV0ZWQoKCkgPT4gZ2V0VGV4dENvbnRhaW5lclN0eWxlKHRodW1iLnJhdGlvLnZhbHVlKSlcblxuICAgIGNvbnN0IHRleHRDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgICdxLXNsaWRlcl9fdGV4dCdcbiAgICAgICsgKHRodW1iLmxhYmVsVGV4dENvbG9yLnZhbHVlICE9PSB2b2lkIDAgPyBgIHRleHQtJHsgdGh1bWIubGFiZWxUZXh0Q29sb3IudmFsdWUgfWAgOiAnJylcbiAgICApKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IHRodW1iQ29udGVudCA9IFtcbiAgICAgICAgaCgnc3ZnJywge1xuICAgICAgICAgIGNsYXNzOiAncS1zbGlkZXJfX3RodW1iLXNoYXBlIGFic29sdXRlLWZ1bGwnLFxuICAgICAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICB9LCBbXG4gICAgICAgICAgaCgncGF0aCcsIHsgZDogcHJvcHMudGh1bWJQYXRoIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXNsaWRlcl9fZm9jdXMtcmluZyBmaXQnIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5sYWJlbCA9PT0gdHJ1ZSB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSkge1xuICAgICAgICB0aHVtYkNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogcGluQ2xhc3MudmFsdWUgKyAnIGFic29sdXRlIGZpdCBuby1wb2ludGVyLWV2ZW50cycgKyBwaW5Db2xvci52YWx1ZVxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgY2xhc3M6IGxhYmVsQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICAgIHN0eWxlOiB7IG1pbldpZHRoOiBwcm9wcy50aHVtYlNpemUgfVxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHRleHRDb250YWluZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBzdHlsZTogdGV4dENvbnRhaW5lclN0eWxlLnZhbHVlXG4gICAgICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgICAgICBoKCdzcGFuJywgeyBjbGFzczogdGV4dENsYXNzLnZhbHVlIH0sIHRodW1iLmxhYmVsLnZhbHVlKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHByb3BzLm5hbWUgIT09IHZvaWQgMCAmJiBwcm9wcy5kaXNhYmxlICE9PSB0cnVlKSB7XG4gICAgICAgICAgaW5qZWN0Rm9ybUlucHV0KHRodW1iQ29udGVudCwgJ3B1c2gnKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc3R5bGUudmFsdWUsXG4gICAgICAgIC4uLnRodW1iLmdldE5vZGVEYXRhKClcbiAgICAgIH0sIHRodW1iQ29udGVudClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250ZW50IChzZWxlY3Rpb25CYXJTdHlsZSwgdHJhY2tDb250YWluZXJUYWJpbmRleCwgdHJhY2tDb250YWluZXJFdmVudHMsIGluamVjdFRodW1iKSB7XG4gICAgY29uc3QgdHJhY2tDb250ZW50ID0gW11cblxuICAgIHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnaW5uZXInLFxuICAgICAgICBjbGFzczogaW5uZXJCYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IGlubmVyQmFyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMuc2VsZWN0aW9uQ29sb3IgIT09ICd0cmFuc3BhcmVudCcgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ3NlbGVjdGlvbicsXG4gICAgICAgIGNsYXNzOiBzZWxlY3Rpb25CYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHNlbGVjdGlvbkJhclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIHByb3BzLm1hcmtlcnMgIT09IGZhbHNlICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdtYXJrZXInLFxuICAgICAgICBjbGFzczogbWFya2VyQ2xhc3MudmFsdWUsXG4gICAgICAgIHN0eWxlOiBtYXJrZXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBpbmplY3RUaHVtYih0cmFja0NvbnRlbnQpXG5cbiAgICBjb25zdCBjb250ZW50ID0gW1xuICAgICAgaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICd0cmFja0MnLFxuICAgICAgICAgIGNsYXNzOiB0cmFja0NvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHRhYmluZGV4OiB0cmFja0NvbnRhaW5lclRhYmluZGV4LnZhbHVlLFxuICAgICAgICAgIC4uLnRyYWNrQ29udGFpbmVyRXZlbnRzLnZhbHVlXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogdHJhY2tDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIHN0eWxlOiB0cmFja1N0eWxlLnZhbHVlXG4gICAgICAgICAgfSwgdHJhY2tDb250ZW50KVxuICAgICAgICBdLFxuICAgICAgICAnc2xpZGUnLFxuICAgICAgICBlZGl0YWJsZS52YWx1ZSwgKCkgPT4gcGFuRGlyZWN0aXZlLnZhbHVlXG4gICAgICApXG4gICAgXVxuXG4gICAgaWYgKHByb3BzLm1hcmtlckxhYmVscyAhPT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHByb3BzLnN3aXRjaE1hcmtlckxhYmVsc1NpZGUgPT09IHRydWVcbiAgICAgICAgPyAndW5zaGlmdCdcbiAgICAgICAgOiAncHVzaCdcblxuICAgICAgY29udGVudFsgYWN0aW9uIF0oXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdtYXJrZXJMJyxcbiAgICAgICAgICBjbGFzczogbWFya2VyTGFiZWxzQ29udGFpbmVyQ2xhc3MudmFsdWVcbiAgICAgICAgfSwgZ2V0TWFya2VyTGFiZWxzQ29udGVudCgpKVxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBjb250ZW50XG4gIH1cblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbkRlYWN0aXZhdGUsIHRydWUpXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgYWN0aXZlLFxuICAgICAgZm9jdXMsXG4gICAgICBwcmV2ZW50Rm9jdXMsXG4gICAgICBkcmFnZ2luZyxcblxuICAgICAgZWRpdGFibGUsXG4gICAgICBjbGFzc2VzLFxuICAgICAgdGFiaW5kZXgsXG4gICAgICBhdHRyaWJ1dGVzLFxuXG4gICAgICBzdGVwLFxuICAgICAgZGVjaW1hbHMsXG4gICAgICB0cmFja0xlbixcbiAgICAgIGlubmVyTWluLFxuICAgICAgaW5uZXJNaW5SYXRpbyxcbiAgICAgIGlubmVyTWF4LFxuICAgICAgaW5uZXJNYXhSYXRpbyxcbiAgICAgIHBvc2l0aW9uUHJvcCxcbiAgICAgIHNpemVQcm9wLFxuICAgICAgaXNSZXZlcnNlZFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBvbkFjdGl2YXRlLFxuICAgICAgb25Nb2JpbGVDbGljayxcbiAgICAgIG9uQmx1cixcbiAgICAgIG9uS2V5dXAsXG4gICAgICBnZXRDb250ZW50LFxuICAgICAgZ2V0VGh1bWJSZW5kZXJGbixcbiAgICAgIGNvbnZlcnRSYXRpb1RvTW9kZWwsXG4gICAgICBjb252ZXJ0TW9kZWxUb1JhdGlvLFxuICAgICAgZ2V0RHJhZ2dpbmdSYXRpb1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgdXNlRm9ybUF0dHJzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcblxuaW1wb3J0IHVzZVNsaWRlciwge1xuICB1c2VTbGlkZXJQcm9wcyxcbiAgdXNlU2xpZGVyRW1pdHMsXG4gIGtleUNvZGVzXG59IGZyb20gJy4vdXNlLXNsaWRlci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcblxuY29uc3QgZ2V0Tm9kZURhdGEgPSAoKSA9PiAoe30pXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU2xpZGVyJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZVNsaWRlclByb3BzLFxuXG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IHR5cGVvZiB2ID09PSAnbnVtYmVyJyB8fCB2ID09PSBudWxsXG4gICAgfSxcblxuICAgIGxhYmVsVmFsdWU6IFsgU3RyaW5nLCBOdW1iZXIgXVxuICB9LFxuXG4gIGVtaXRzOiB1c2VTbGlkZXJFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgeyBzdGF0ZSwgbWV0aG9kcyB9ID0gdXNlU2xpZGVyKHtcbiAgICAgIHVwZGF0ZVZhbHVlLCB1cGRhdGVQb3NpdGlvbiwgZ2V0RHJhZ2dpbmcsXG4gICAgICBmb3JtQXR0cnM6IHVzZUZvcm1BdHRycyhwcm9wcylcbiAgICB9KVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGN1clJhdGlvID0gcmVmKDApXG4gICAgY29uc3QgbW9kZWwgPSByZWYoMClcblxuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZU1vZGVsICgpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gcHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbFxuICAgICAgICA/IHN0YXRlLmlubmVyTWluLnZhbHVlXG4gICAgICAgIDogYmV0d2Vlbihwcm9wcy5tb2RlbFZhbHVlLCBzdGF0ZS5pbm5lck1pbi52YWx1ZSwgc3RhdGUuaW5uZXJNYXgudmFsdWUpXG4gICAgfVxuXG4gICAgd2F0Y2goXG4gICAgICAoKSA9PiBgJHsgcHJvcHMubW9kZWxWYWx1ZSB9fCR7IHN0YXRlLmlubmVyTWluLnZhbHVlIH18JHsgc3RhdGUuaW5uZXJNYXgudmFsdWUgfWAsXG4gICAgICBub3JtYWxpemVNb2RlbFxuICAgIClcblxuICAgIG5vcm1hbGl6ZU1vZGVsKClcblxuICAgIGNvbnN0IG1vZGVsUmF0aW8gPSBjb21wdXRlZCgoKSA9PiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpKVxuICAgIGNvbnN0IHJhdGlvID0gY29tcHV0ZWQoKCkgPT4gKHN0YXRlLmFjdGl2ZS52YWx1ZSA9PT0gdHJ1ZSA/IGN1clJhdGlvLnZhbHVlIDogbW9kZWxSYXRpby52YWx1ZSkpXG5cbiAgICBjb25zdCBzZWxlY3Rpb25CYXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgWyBzdGF0ZS5wb3NpdGlvblByb3AudmFsdWUgXTogYCR7IDEwMCAqIHN0YXRlLmlubmVyTWluUmF0aW8udmFsdWUgfSVgLFxuICAgICAgICBbIHN0YXRlLnNpemVQcm9wLnZhbHVlIF06IGAkeyAxMDAgKiAocmF0aW8udmFsdWUgLSBzdGF0ZS5pbm5lck1pblJhdGlvLnZhbHVlKSB9JWBcbiAgICAgIH1cbiAgICAgIGlmIChwcm9wcy5zZWxlY3Rpb25JbWcgIT09IHZvaWQgMCkge1xuICAgICAgICBhY2MuYmFja2dyb3VuZEltYWdlID0gYHVybCgkeyBwcm9wcy5zZWxlY3Rpb25JbWcgfSkgIWltcG9ydGFudGBcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgY29uc3QgZ2V0VGh1bWIgPSBtZXRob2RzLmdldFRodW1iUmVuZGVyRm4oe1xuICAgICAgZm9jdXNWYWx1ZTogdHJ1ZSxcbiAgICAgIGdldE5vZGVEYXRhLFxuICAgICAgcmF0aW8sXG4gICAgICBsYWJlbDogY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgICBwcm9wcy5sYWJlbFZhbHVlICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHByb3BzLmxhYmVsVmFsdWVcbiAgICAgICAgICA6IG1vZGVsLnZhbHVlXG4gICAgICApKSxcbiAgICAgIHRodW1iQ29sb3I6IGNvbXB1dGVkKCgpID0+IHByb3BzLnRodW1iQ29sb3IgfHwgcHJvcHMuY29sb3IpLFxuICAgICAgbGFiZWxDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxDb2xvciksXG4gICAgICBsYWJlbFRleHRDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMubGFiZWxUZXh0Q29sb3IpXG4gICAgfSlcblxuICAgIGNvbnN0IHRyYWNrQ29udGFpbmVyRXZlbnRzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHN0YXRlLmVkaXRhYmxlLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gJHEucGxhdGZvcm0uaXMubW9iaWxlID09PSB0cnVlXG4gICAgICAgID8geyBvbkNsaWNrOiBtZXRob2RzLm9uTW9iaWxlQ2xpY2sgfVxuICAgICAgICA6IHtcbiAgICAgICAgICAgIG9uTW91c2Vkb3duOiBtZXRob2RzLm9uQWN0aXZhdGUsXG4gICAgICAgICAgICBvbkZvY3VzLFxuICAgICAgICAgICAgb25CbHVyOiBtZXRob2RzLm9uQmx1cixcbiAgICAgICAgICAgIG9uS2V5ZG93bixcbiAgICAgICAgICAgIG9uS2V5dXA6IG1ldGhvZHMub25LZXl1cFxuICAgICAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUgKGNoYW5nZSkge1xuICAgICAgaWYgKG1vZGVsLnZhbHVlICE9PSBwcm9wcy5tb2RlbFZhbHVlKSB7XG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgbW9kZWwudmFsdWUpXG4gICAgICB9XG4gICAgICBjaGFuZ2UgPT09IHRydWUgJiYgZW1pdCgnY2hhbmdlJywgbW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RHJhZ2dpbmcgKCkge1xuICAgICAgcmV0dXJuIHJvb3RSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbiAoZXZlbnQsIGRyYWdnaW5nID0gc3RhdGUuZHJhZ2dpbmcudmFsdWUpIHtcbiAgICAgIGNvbnN0IHJhdGlvID0gbWV0aG9kcy5nZXREcmFnZ2luZ1JhdGlvKGV2ZW50LCBkcmFnZ2luZylcblxuICAgICAgbW9kZWwudmFsdWUgPSBtZXRob2RzLmNvbnZlcnRSYXRpb1RvTW9kZWwocmF0aW8pXG5cbiAgICAgIGN1clJhdGlvLnZhbHVlID0gcHJvcHMuc25hcCAhPT0gdHJ1ZSB8fCBwcm9wcy5zdGVwID09PSAwXG4gICAgICAgID8gcmF0aW9cbiAgICAgICAgOiBtZXRob2RzLmNvbnZlcnRNb2RlbFRvUmF0aW8obW9kZWwudmFsdWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1cyAoKSB7XG4gICAgICBzdGF0ZS5mb2N1cy52YWx1ZSA9IHRydWVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleWRvd24gKGV2dCkge1xuICAgICAgaWYgKCFrZXlDb2Rlcy5pbmNsdWRlcyhldnQua2V5Q29kZSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgY29uc3RcbiAgICAgICAgc3RlcFZhbCA9IChbIDM0LCAzMyBdLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSA/IDEwIDogMSkgKiBzdGF0ZS5zdGVwLnZhbHVlLFxuICAgICAgICBvZmZzZXQgPSAoXG4gICAgICAgICAgKFsgMzQsIDM3LCA0MCBdLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSA/IC0xIDogMSlcbiAgICAgICAgICAqIChzdGF0ZS5pc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gLTEgOiAxKVxuICAgICAgICAgICogKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gLTEgOiAxKSAqIHN0ZXBWYWxcbiAgICAgICAgKVxuXG4gICAgICBtb2RlbC52YWx1ZSA9IGJldHdlZW4oXG4gICAgICAgIHBhcnNlRmxvYXQoKG1vZGVsLnZhbHVlICsgb2Zmc2V0KS50b0ZpeGVkKHN0YXRlLmRlY2ltYWxzLnZhbHVlKSksXG4gICAgICAgIHN0YXRlLmlubmVyTWluLnZhbHVlLFxuICAgICAgICBzdGF0ZS5pbm5lck1heC52YWx1ZVxuICAgICAgKVxuXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBtZXRob2RzLmdldENvbnRlbnQoXG4gICAgICAgIHNlbGVjdGlvbkJhclN0eWxlLFxuICAgICAgICBzdGF0ZS50YWJpbmRleCxcbiAgICAgICAgdHJhY2tDb250YWluZXJFdmVudHMsXG4gICAgICAgIG5vZGUgPT4geyBub2RlLnB1c2goZ2V0VGh1bWIoKSkgfVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgIGNsYXNzOiBzdGF0ZS5jbGFzc2VzLnZhbHVlICsgKHByb3BzLm1vZGVsVmFsdWUgPT09IG51bGwgPyAnIHEtc2xpZGVyLS1uby12YWx1ZScgOiAnJyksXG4gICAgICAgIC4uLnN0YXRlLmF0dHJpYnV0ZXMudmFsdWUsXG4gICAgICAgICdhcmlhLXZhbHVlbm93JzogcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgfSwgY29udGVudClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBqdXN0aWZ5LWNlbnRlciBxLXB0LXNtXCI+XG4gICAgPHEtYnRuIGZhYiBmbGF0IHNpemU9XCJtZFwiIDppY29uPVwib3V0bGluZWRTa2lwUHJldmlvdXNcIiBAY2xpY2s9XCJxdWV1ZUNvbnRyb2xsZXIucGxheVByZXZpb3VzKClcIj5cbiAgICAgIDxxLXRvb2x0aXA+UHJldmlvdXM8L3EtdG9vbHRpcD5cbiAgICA8L3EtYnRuPlxuXG4gICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCBzaXplPVwibWRcIiA6aWNvbj1cInBhdXNlZCA/IG91dGxpbmVkUGxheUFycm93IDogb3V0bGluZWRQYXVzZVwiIEBjbGljaz1cImF1ZGlvQ29udHJvbGxlci50b2dnbGVQYXVzZSgpXCI+XG4gICAgICA8cS10b29sdGlwPnt7IGF1ZGlvQ29udHJvbGxlci5wYXVzZWQgPyBcIlBsYXlcIiA6IFwiUGF1c2VcIiB9fTwvcS10b29sdGlwPlxuICAgIDwvcS1idG4+XG5cbiAgICA8cS1idG4gZmxhdCBmYWIgc2l6ZT1cIm1kXCIgOmljb249XCJvdXRsaW5lZFNraXBOZXh0XCIgQGNsaWNrPVwicXVldWVDb250cm9sbGVyLnBsYXlOZXh0KClcIj5cbiAgICAgIDxxLXRvb2x0aXA+TmV4dDwvcS10b29sdGlwPlxuICAgIDwvcS1idG4+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBxLXB0LWxnXCIgdi1pZj1cInNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nICE9PSB1bmRlZmluZWRcIj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgIHt7IGZvcm1hdER1cmF0aW9uKHNlY29uZHNUb0R1cmF0aW9uKGN1cnJlbnRUaW1lKSkgfX1cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLXNsaWRlciB2LW1vZGVsPVwiY3VycmVudFRpbWVcIlxuICAgICAgICAgICAgICAgIEBwYW49XCJvblBhblwiXG4gICAgICAgICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIm9uQ2hhbmdlXCJcbiAgICAgICAgICAgICAgICA6bWluPVwiMFwiIDptYXg9XCJ0b3RhbFRpbWVcIiA6c3RlcD1cIjAuMVwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiLz5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAge3sgZm9ybWF0RHVyYXRpb24oc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcuZHVyYXRpb24pIH19XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnTWVkaWFDb250cm9sJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRTa2lwTmV4dCxcbiAgb3V0bGluZWRTa2lwUHJldmlvdXMsXG4gIG91dGxpbmVkUGF1c2Vcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge2NvbXB1dGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2F1ZGlvQ29udHJvbGxlcn0gZnJvbSAnYm9vdC9hdWRpb0NvbnRyb2xsZXInO1xuaW1wb3J0IHtkdXJhdGlvblRvU2Vjb25kcywgZm9ybWF0RHVyYXRpb24sIHNlY29uZHNUb0R1cmF0aW9ufSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSAnc3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlcic7XG5cbmNvbnN0IGN1cnJlbnRUaW1lID0gcmVmKDApO1xuY29uc3Qgc29uZ1F1ZXVlID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5jb25zdCBpc1Bhbm5pbmdQcm9ncmVzcyA9IHJlZihmYWxzZSk7XG5jb25zdCBpc1VwZGF0aW5nID0gcmVmKGZhbHNlKTtcblxuY29uc3QgcXVldWVDb250cm9sbGVyID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbnF1ZXVlQ29udHJvbGxlci53YXRjaEN1cnJlbnRseVBsYXlpbmcoKCkgPT4ge1xuICByZXR1cm47XG59KTtcblxuY29uc3QgcGF1c2VkID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYXVkaW9Db250cm9sbGVyLnBhdXNlZC52YWx1ZTtcbn0pXG5cbmNvbnN0IG9uUGFuID0gKHBoYXNlOiBzdHJpbmcpID0+IHtcbiAgaWYgKHBoYXNlID09PSAnc3RhcnQnKSB7XG4gICAgaXNQYW5uaW5nUHJvZ3Jlc3MudmFsdWUgPSB0cnVlO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFNlZWtcbiAgICBhdWRpb0NvbnRyb2xsZXIuc2VlayhjdXJyZW50VGltZS52YWx1ZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlzUGFubmluZ1Byb2dyZXNzLnZhbHVlID0gZmFsc2U7XG4gICAgfSwgMCk7XG4gIH1cbn1cblxuY29uc3Qgb25DaGFuZ2UgPSAoazogdW5rbm93bikgPT4ge1xuICBpZiAoaXNQYW5uaW5nUHJvZ3Jlc3MudmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaXNVcGRhdGluZy52YWx1ZSA9IHRydWU7XG4gIGF1ZGlvQ29udHJvbGxlci5zZWVrKDxudW1iZXI+ayk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaXNVcGRhdGluZy52YWx1ZSA9IGZhbHNlO1xuICB9LCAwKTtcbn1cblxuY29uc3QgdG90YWxUaW1lID0gY29tcHV0ZWQoKCkgPT4ge1xuICBpZiAoc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBkdXJhdGlvblRvU2Vjb25kcyg8c3RyaW5nPnNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmR1cmF0aW9uKTtcbiAgfVxuXG4gIHJldHVybiAtMTtcbn0pXG5cbmF1ZGlvQ29udHJvbGxlci5vblByb2dyZXNzVGljaygodGltZSkgPT4ge1xuICBpZiAoaXNQYW5uaW5nUHJvZ3Jlc3MudmFsdWUgfHwgaXNVcGRhdGluZy52YWx1ZSlcbiAge1xuICAgIHJldHVybjtcbiAgfVxuICBjdXJyZW50VGltZS52YWx1ZSA9IHRpbWU7XG59KVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJztcblxuZXhwb3J0IGNvbnN0IHVzZVF1ZXVlRGlzcGxheVN0b3JlID0gZGVmaW5lU3RvcmUoJ3F1ZXVlRGlzcGxheScsIHtcbiAgc3RhdGU6ICgpID0+ICh7XG4gICAgc2hvdzogdHJ1ZVxuICB9KSxcblxuICBhY3Rpb25zOiB7XG4gICAgb3BlbiAoKSB7XG4gICAgICB0aGlzLnNob3cgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIH1cbiAgfVxufSk7XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTcgcm93IGp1c3RpZnktZW5kXCI+XG4gICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkUmVwZWF0XCI+XG4gICAgICAgIDxxLXRvb2x0aXA+UmVwZWF0PC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuXG4gICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkU2h1ZmZsZVwiIGNsYXNzPVwicS1teC1zbVwiPlxuICAgICAgICA8cS10b29sdGlwPlNodWZmbGU8L3EtdG9vbHRpcD5cbiAgICAgIDwvcS1idG4+XG5cbiAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRRdWV1ZU11c2ljXCIgQGNsaWNrPVwicXVldWVTaG93U3RhdHVzU3RvcmUudG9nZ2xlKClcIj5cbiAgICAgICAgPHEtdG9vbHRpcD5RdWV1ZTwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICA8cS1pdGVtIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZT5cbiAgICAgICAgICA8cS1pY29uIG5hbWU9XCJ2b2x1bWVfdXBcIi8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1zbGlkZXJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ2b2x1bWVcIlxuICAgICAgICAgICAgOm1pbj1cIjBcIlxuICAgICAgICAgICAgOm1heD1cIjEwMFwiXG4gICAgICAgICAgICA6c3RlcD1cIjFcIlxuICAgICAgICAgICAgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMHB4XCJcbiAgICAgICAgICAgIHRodW1iLXNpemU9XCIxMHB4XCJcbiAgICAgICAgICAgIGlubmVyLXRyYWNrLWNvbG9yPVwiYmxhY2tcIlxuICAgICAgICAgICAgc2VsZWN0aW9uLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgdGh1bWItY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICB0cmFjay1jb2xvcj1cInllbGxvd1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdRdWV1ZUNvbnRyb2wnXG59XG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkU2h1ZmZsZSxcbiAgb3V0bGluZWRSZXBlYXQsXG4gIG91dGxpbmVkUXVldWVNdXNpYyxcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge2F1ZGlvQ29udHJvbGxlcn0gZnJvbSAnYm9vdC9hdWRpb0NvbnRyb2xsZXInO1xuaW1wb3J0IHtyZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHt1c2VRdWV1ZURpc3BsYXlTdG9yZX0gZnJvbSAnc3RvcmVzL3Nob3dRdWV1ZSc7XG5cbmNvbnN0IHF1ZXVlU2hvd1N0YXR1c1N0b3JlID0gdXNlUXVldWVEaXNwbGF5U3RvcmUoKTtcblxuY29uc3Qgdm9sdW1lID0gcmVmKGF1ZGlvQ29udHJvbGxlci52b2x1bWUudmFsdWUgKiAxMDApO1xud2F0Y2godm9sdW1lLCAoKSA9PiB7XG4gIGF1ZGlvQ29udHJvbGxlci52b2x1bWUudmFsdWUgPSB2b2x1bWUudmFsdWUgLyAxMDA7XG59KVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtdG9vbGJhciBjbGFzcz1cInEtcGEtbWRcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQganVzdGlmeS1ldmVubHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgPHRyYWNrLWluZm8tY2FyZD48L3RyYWNrLWluZm8tY2FyZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC01XCI+XG4gICAgICAgIDxtZWRpYS1jb250cm9sPjwvbWVkaWEtY29udHJvbD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgPHF1ZXVlLWNvbnRyb2w+PC9xdWV1ZS1jb250cm9sPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cblxuICA8L3EtdG9vbGJhcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdQbGF5ZXJDb250cm9sJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgVHJhY2tJbmZvQ2FyZCBmcm9tICdjb21wb25lbnRzL1RyYWNrSW5mb0NhcmQudnVlJztcbmltcG9ydCBNZWRpYUNvbnRyb2wgZnJvbSAnY29tcG9uZW50cy9NZWRpYUNvbnRyb2wudnVlJztcbmltcG9ydCBRdWV1ZUNvbnRyb2wgZnJvbSAnY29tcG9uZW50cy9RdWV1ZUNvbnRyb2wudnVlJztcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgaCwgb25CZWZvcmVVbm1vdW50LCBUcmFuc2l0aW9uIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTbGlkZVRyYW5zaXRpb24nLFxuXG4gIHByb3BzOiB7XG4gICAgYXBwZWFyOiBCb29sZWFuLFxuICAgIGR1cmF0aW9uOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAzMDBcbiAgICB9XG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Nob3cnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGxldCBhbmltYXRpbmcgPSBmYWxzZSwgZG9uZUZuLCBlbGVtZW50XG4gICAgbGV0IHRpbWVyLCB0aW1lckZhbGxiYWNrLCBhbmltTGlzdGVuZXIsIGxhc3RFdmVudFxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBkb25lRm4gJiYgZG9uZUZuKClcbiAgICAgIGRvbmVGbiA9IG51bGxcbiAgICAgIGFuaW1hdGluZyA9IGZhbHNlXG5cbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcilcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lckZhbGxiYWNrKVxuICAgICAgZWxlbWVudCAhPT0gdm9pZCAwICYmIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGFuaW1MaXN0ZW5lcilcbiAgICAgIGFuaW1MaXN0ZW5lciA9IG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiZWdpbiAoZWwsIGhlaWdodCwgZG9uZSkge1xuICAgICAgZWwuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbidcbiAgICAgIGlmIChoZWlnaHQgIT09IHZvaWQgMCkge1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBgJHsgaGVpZ2h0IH1weGBcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBgaGVpZ2h0ICR7IHByb3BzLmR1cmF0aW9uIH1tcyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjUwLCAxKWBcblxuICAgICAgYW5pbWF0aW5nID0gdHJ1ZVxuICAgICAgZG9uZUZuID0gZG9uZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuZCAoZWwsIGV2ZW50KSB7XG4gICAgICBlbC5zdHlsZS5vdmVyZmxvd1kgPSBudWxsXG4gICAgICBlbC5zdHlsZS5oZWlnaHQgPSBudWxsXG4gICAgICBlbC5zdHlsZS50cmFuc2l0aW9uID0gbnVsbFxuICAgICAgY2xlYW51cCgpXG4gICAgICBldmVudCAhPT0gbGFzdEV2ZW50ICYmIGVtaXQoZXZlbnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25FbnRlciAoZWwsIGRvbmUpIHtcbiAgICAgIGxldCBwb3MgPSAwXG4gICAgICBlbGVtZW50ID0gZWxcblxuICAgICAgaWYgKGFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgcG9zID0gZWwub2Zmc2V0SGVpZ2h0ID09PSBlbC5zY3JvbGxIZWlnaHQgPyAwIDogdm9pZCAwXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdEV2ZW50ID0gJ2hpZGUnXG4gICAgICB9XG5cbiAgICAgIGJlZ2luKGVsLCBwb3MsIGRvbmUpXG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGAkeyBlbC5zY3JvbGxIZWlnaHQgfXB4YFxuICAgICAgICBhbmltTGlzdGVuZXIgPSBldnQgPT4ge1xuICAgICAgICAgIGlmIChPYmplY3QoZXZ0KSAhPT0gZXZ0IHx8IGV2dC50YXJnZXQgPT09IGVsKSB7XG4gICAgICAgICAgICBlbmQoZWwsICdzaG93JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGFuaW1MaXN0ZW5lcilcbiAgICAgICAgdGltZXJGYWxsYmFjayA9IHNldFRpbWVvdXQoYW5pbUxpc3RlbmVyLCBwcm9wcy5kdXJhdGlvbiAqIDEuMSlcbiAgICAgIH0sIDEwMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxlYXZlIChlbCwgZG9uZSkge1xuICAgICAgbGV0IHBvc1xuICAgICAgZWxlbWVudCA9IGVsXG5cbiAgICAgIGlmIChhbmltYXRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgY2xlYW51cCgpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdEV2ZW50ID0gJ3Nob3cnXG4gICAgICAgIHBvcyA9IGVsLnNjcm9sbEhlaWdodFxuICAgICAgfVxuXG4gICAgICBiZWdpbihlbCwgcG9zLCBkb25lKVxuXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAwXG4gICAgICAgIGFuaW1MaXN0ZW5lciA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdChldnQpICE9PSBldnQgfHwgZXZ0LnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGVuZChlbCwgJ2hpZGUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgICB0aW1lckZhbGxiYWNrID0gc2V0VGltZW91dChhbmltTGlzdGVuZXIsIHByb3BzLmR1cmF0aW9uICogMS4xKVxuICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBhbmltYXRpbmcgPT09IHRydWUgJiYgY2xlYW51cCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKFRyYW5zaXRpb24sIHtcbiAgICAgIGNzczogZmFsc2UsXG4gICAgICBhcHBlYXI6IHByb3BzLmFwcGVhcixcbiAgICAgIG9uRW50ZXIsXG4gICAgICBvbkxlYXZlXG4gICAgfSwgc2xvdHMuZGVmYXVsdClcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHNoYWxsb3dSZWFjdGl2ZSwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UsIHZTaG93LCBvbkJlZm9yZVVubW91bnQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSXRlbSBmcm9tICcuLi9pdGVtL1FJdGVtLmpzJ1xuaW1wb3J0IFFJdGVtU2VjdGlvbiBmcm9tICcuLi9pdGVtL1FJdGVtU2VjdGlvbi5qcydcbmltcG9ydCBRSXRlbUxhYmVsIGZyb20gJy4uL2l0ZW0vUUl0ZW1MYWJlbC5qcydcbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFTbGlkZVRyYW5zaXRpb24gZnJvbSAnLi4vc2xpZGUtdHJhbnNpdGlvbi9RU2xpZGVUcmFuc2l0aW9uLmpzJ1xuaW1wb3J0IFFTZXBhcmF0b3IgZnJvbSAnLi4vc2VwYXJhdG9yL1FTZXBhcmF0b3IuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyB1c2VSb3V0ZXJMaW5rUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yb3V0ZXItbGluay5qcydcbmltcG9ydCB1c2VNb2RlbFRvZ2dsZSwgeyB1c2VNb2RlbFRvZ2dsZVByb3BzLCB1c2VNb2RlbFRvZ2dsZUVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtbW9kZWwtdG9nZ2xlLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi91dGlscy91aWQuanMnXG5cbmNvbnN0IGl0ZW1Hcm91cHMgPSBzaGFsbG93UmVhY3RpdmUoe30pXG5jb25zdCBMSU5LX1BST1BTID0gT2JqZWN0LmtleXModXNlUm91dGVyTGlua1Byb3BzKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUV4cGFuc2lvbkl0ZW0nLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlUm91dGVyTGlua1Byb3BzLFxuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgaWNvbjogU3RyaW5nLFxuXG4gICAgbGFiZWw6IFN0cmluZyxcbiAgICBsYWJlbExpbmVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBjYXB0aW9uOiBTdHJpbmcsXG4gICAgY2FwdGlvbkxpbmVzOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcblxuICAgIHRvZ2dsZUFyaWFMYWJlbDogU3RyaW5nLFxuICAgIGV4cGFuZEljb246IFN0cmluZyxcbiAgICBleHBhbmRlZEljb246IFN0cmluZyxcbiAgICBleHBhbmRJY29uQ2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgZHVyYXRpb246IE51bWJlcixcblxuICAgIGhlYWRlckluc2V0TGV2ZWw6IE51bWJlcixcbiAgICBjb250ZW50SW5zZXRMZXZlbDogTnVtYmVyLFxuXG4gICAgZXhwYW5kU2VwYXJhdG9yOiBCb29sZWFuLFxuICAgIGRlZmF1bHRPcGVuZWQ6IEJvb2xlYW4sXG4gICAgaGlkZUV4cGFuZEljb246IEJvb2xlYW4sXG4gICAgZXhwYW5kSWNvblRvZ2dsZTogQm9vbGVhbixcbiAgICBzd2l0Y2hUb2dnbGVTaWRlOiBCb29sZWFuLFxuICAgIGRlbnNlVG9nZ2xlOiBCb29sZWFuLFxuICAgIGdyb3VwOiBTdHJpbmcsXG4gICAgcG9wdXA6IEJvb2xlYW4sXG5cbiAgICBoZWFkZXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBoZWFkZXJDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnY2xpY2snLCAnYWZ0ZXJTaG93JywgJ2FmdGVySGlkZSdcbiAgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCAkcSlcblxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoXG4gICAgICBwcm9wcy5tb2RlbFZhbHVlICE9PSBudWxsXG4gICAgICAgID8gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICA6IHByb3BzLmRlZmF1bHRPcGVuZWRcbiAgICApXG5cbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgdGFyZ2V0VWlkID0gdWlkKClcblxuICAgIGNvbnN0IHsgc2hvdywgaGlkZSwgdG9nZ2xlIH0gPSB1c2VNb2RlbFRvZ2dsZSh7IHNob3dpbmcgfSlcblxuICAgIGxldCB1bmlxdWVJZCwgZXhpdEdyb3VwXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWV4cGFuc2lvbi1pdGVtIHEtaXRlbS10eXBlJ1xuICAgICAgKyBgIHEtZXhwYW5zaW9uLWl0ZW0tLSR7IHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCcgfWBcbiAgICAgICsgYCBxLWV4cGFuc2lvbi1pdGVtLS0keyBwcm9wcy5wb3B1cCA9PT0gdHJ1ZSA/ICdwb3B1cCcgOiAnc3RhbmRhcmQnIH1gXG4gICAgKVxuXG4gICAgY29uc3QgY29udGVudFN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLmNvbnRlbnRJbnNldExldmVsID09PSB2b2lkIDApIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlyID0gJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnXG4gICAgICByZXR1cm4ge1xuICAgICAgICBbICdwYWRkaW5nJyArIGRpciBdOiAocHJvcHMuY29udGVudEluc2V0TGV2ZWwgKiA1NikgKyAncHgnXG4gICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IGhhc0xpbmsgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiAoXG4gICAgICAgIHByb3BzLmhyZWYgIT09IHZvaWQgMFxuICAgICAgICB8fCAocHJvcHMudG8gIT09IHZvaWQgMCAmJiBwcm9wcy50byAhPT0gbnVsbCAmJiBwcm9wcy50byAhPT0gJycpXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3QgbGlua1Byb3BzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge31cbiAgICAgIExJTktfUFJPUFMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBhY2NbIGtleSBdID0gcHJvcHNbIGtleSBdXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBpc0NsaWNrYWJsZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBoYXNMaW5rLnZhbHVlID09PSB0cnVlIHx8IHByb3BzLmV4cGFuZEljb25Ub2dnbGUgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBleHBhbnNpb25JY29uID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZXhwYW5kZWRJY29uICE9PSB2b2lkIDAgJiYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHByb3BzLmV4cGFuZGVkSWNvblxuICAgICAgICA6IHByb3BzLmV4cGFuZEljb24gfHwgJHEuaWNvblNldC5leHBhbnNpb25JdGVtWyBwcm9wcy5kZW5zZVRvZ2dsZSA9PT0gdHJ1ZSA/ICdkZW5zZUljb24nIDogJ2ljb24nIF1cbiAgICApKVxuXG4gICAgY29uc3QgYWN0aXZlVG9nZ2xlSWNvbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIChoYXNMaW5rLnZhbHVlID09PSB0cnVlIHx8IHByb3BzLmV4cGFuZEljb25Ub2dnbGUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgaGVhZGVyU2xvdFNjb3BlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIGV4cGFuZGVkOiBzaG93aW5nLnZhbHVlID09PSB0cnVlLFxuICAgICAgZGV0YWlsc0lkOiBwcm9wcy50YXJnZXRVaWQsXG4gICAgICB0b2dnbGUsXG4gICAgICBzaG93LFxuICAgICAgaGlkZVxuICAgIH0pKVxuXG4gICAgY29uc3QgdG9nZ2xlQXJpYUF0dHJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgdG9nZ2xlQXJpYUxhYmVsID0gcHJvcHMudG9nZ2xlQXJpYUxhYmVsICE9PSB2b2lkIDBcbiAgICAgICAgPyBwcm9wcy50b2dnbGVBcmlhTGFiZWxcbiAgICAgICAgOiAkcS5sYW5nLmxhYmVsWyBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJ2NvbGxhcHNlJyA6ICdleHBhbmQnIF0ocHJvcHMubGFiZWwpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHJvbGU6ICdidXR0b24nLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IHRhcmdldFVpZCxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiB0b2dnbGVBcmlhTGFiZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZ3JvdXAsIG5hbWUgPT4ge1xuICAgICAgZXhpdEdyb3VwICE9PSB2b2lkIDAgJiYgZXhpdEdyb3VwKClcbiAgICAgIG5hbWUgIT09IHZvaWQgMCAmJiBlbnRlckdyb3VwKClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25IZWFkZXJDbGljayAoZSkge1xuICAgICAgaGFzTGluay52YWx1ZSAhPT0gdHJ1ZSAmJiB0b2dnbGUoZSlcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVJY29uS2V5Ym9hcmQgKGUpIHtcbiAgICAgIGUua2V5Q29kZSA9PT0gMTMgJiYgdG9nZ2xlSWNvbihlLCB0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUljb24gKGUsIGtleWJvYXJkKSB7XG4gICAgICBrZXlib2FyZCAhPT0gdHJ1ZSAmJiBibHVyVGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsICYmIGJsdXJUYXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgdG9nZ2xlKGUpXG4gICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uU2hvdyAoKSB7XG4gICAgICBlbWl0KCdhZnRlclNob3cnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uSGlkZSAoKSB7XG4gICAgICBlbWl0KCdhZnRlckhpZGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVudGVyR3JvdXAgKCkge1xuICAgICAgaWYgKHVuaXF1ZUlkID09PSB2b2lkIDApIHtcbiAgICAgICAgdW5pcXVlSWQgPSB1aWQoKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdID0gdW5pcXVlSWRcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2hvdyA9IHdhdGNoKHNob3dpbmcsIHZhbCA9PiB7XG4gICAgICAgIGlmICh2YWwgPT09IHRydWUpIHtcbiAgICAgICAgICBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdID0gdW5pcXVlSWRcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdID09PSB1bmlxdWVJZCkge1xuICAgICAgICAgIGRlbGV0ZSBpdGVtR3JvdXBzWyBwcm9wcy5ncm91cCBdXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGNvbnN0IGdyb3VwID0gd2F0Y2goXG4gICAgICAgICgpID0+IGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0sXG4gICAgICAgICh2YWwsIG9sZFZhbCkgPT4ge1xuICAgICAgICAgIGlmIChvbGRWYWwgPT09IHVuaXF1ZUlkICYmIHZhbCAhPT0gdm9pZCAwICYmIHZhbCAhPT0gdW5pcXVlSWQpIHtcbiAgICAgICAgICAgIGhpZGUoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBleGl0R3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIHNob3coKVxuICAgICAgICBncm91cCgpXG5cbiAgICAgICAgaWYgKGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgZGVsZXRlIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF1cbiAgICAgICAgfVxuXG4gICAgICAgIGV4aXRHcm91cCA9IHZvaWQgMFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRvZ2dsZUljb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAncS1mb2N1c2FibGUgcmVsYXRpdmUtcG9zaXRpb24gY3Vyc29yLXBvaW50ZXInXG4gICAgICAgICAgICArIGAkeyBwcm9wcy5kZW5zZVRvZ2dsZSA9PT0gdHJ1ZSAmJiBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlID09PSB0cnVlID8gJyBpdGVtcy1lbmQnIDogJycgfWAsXG4gICAgICAgICAgcHJvcHMuZXhwYW5kSWNvbkNsYXNzXG4gICAgICAgIF0sXG4gICAgICAgIHNpZGU6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgIT09IHRydWUsXG4gICAgICAgIGF2YXRhcjogcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGlsZCA9IFtcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fdG9nZ2xlLWljb24nXG4gICAgICAgICAgICArIChwcm9wcy5leHBhbmRlZEljb24gPT09IHZvaWQgMCAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICAgID8gJyBxLWV4cGFuc2lvbi1pdGVtX190b2dnbGUtaWNvbi0tcm90YXRlZCdcbiAgICAgICAgICAgICAgOiAnJyksXG4gICAgICAgICAgbmFtZTogZXhwYW5zaW9uSWNvbi52YWx1ZVxuICAgICAgICB9KVxuICAgICAgXVxuXG4gICAgICBpZiAoYWN0aXZlVG9nZ2xlSWNvbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIHtcbiAgICAgICAgICB0YWJpbmRleDogMCxcbiAgICAgICAgICAuLi50b2dnbGVBcmlhQXR0cnMudmFsdWUsXG4gICAgICAgICAgb25DbGljazogdG9nZ2xlSWNvbixcbiAgICAgICAgICBvbktleXVwOiB0b2dnbGVJY29uS2V5Ym9hcmRcbiAgICAgICAgfSlcblxuICAgICAgICBjaGlsZC51bnNoaWZ0KFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIHJlZjogYmx1clRhcmdldFJlZixcbiAgICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fdG9nZ2xlLWZvY3VzIHEtaWNvbiBxLWZvY3VzLWhlbHBlciBxLWZvY3VzLWhlbHBlci0tcm91bmRlZCcsXG4gICAgICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFJdGVtU2VjdGlvbiwgZGF0YSwgKCkgPT4gY2hpbGQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SGVhZGVyQ2hpbGQgKCkge1xuICAgICAgbGV0IGNoaWxkXG5cbiAgICAgIGlmIChzbG90cy5oZWFkZXIgIT09IHZvaWQgMCkge1xuICAgICAgICBjaGlsZCA9IFtdLmNvbmNhdChzbG90cy5oZWFkZXIoaGVhZGVyU2xvdFNjb3BlLnZhbHVlKSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjaGlsZCA9IFtcbiAgICAgICAgICBoKFFJdGVtU2VjdGlvbiwgKCkgPT4gW1xuICAgICAgICAgICAgaChRSXRlbUxhYmVsLCB7IGxpbmVzOiBwcm9wcy5sYWJlbExpbmVzIH0sICgpID0+IHByb3BzLmxhYmVsIHx8ICcnKSxcblxuICAgICAgICAgICAgcHJvcHMuY2FwdGlvblxuICAgICAgICAgICAgICA/IGgoUUl0ZW1MYWJlbCwgeyBsaW5lczogcHJvcHMuY2FwdGlvbkxpbmVzLCBjYXB0aW9uOiB0cnVlIH0sICgpID0+IHByb3BzLmNhcHRpb24pXG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIF0pXG4gICAgICAgIF1cblxuICAgICAgICBwcm9wcy5pY29uICYmIGNoaWxkWyBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlID09PSB0cnVlID8gJ3B1c2gnIDogJ3Vuc2hpZnQnIF0oXG4gICAgICAgICAgaChRSXRlbVNlY3Rpb24sIHtcbiAgICAgICAgICAgIHNpZGU6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUsXG4gICAgICAgICAgICBhdmF0YXI6IHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgIT09IHRydWVcbiAgICAgICAgICB9LCAoKSA9PiBoKFFJY29uLCB7IG5hbWU6IHByb3BzLmljb24gfSkpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgcHJvcHMuaGlkZUV4cGFuZEljb24gIT09IHRydWUpIHtcbiAgICAgICAgY2hpbGRbIHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUgPyAndW5zaGlmdCcgOiAncHVzaCcgXShcbiAgICAgICAgICBnZXRUb2dnbGVJY29uKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXIgKCkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgcmVmOiAnaXRlbScsXG4gICAgICAgIHN0eWxlOiBwcm9wcy5oZWFkZXJTdHlsZSxcbiAgICAgICAgY2xhc3M6IHByb3BzLmhlYWRlckNsYXNzLFxuICAgICAgICBkYXJrOiBpc0RhcmsudmFsdWUsXG4gICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgIGRlbnNlOiBwcm9wcy5kZW5zZSxcbiAgICAgICAgaW5zZXRMZXZlbDogcHJvcHMuaGVhZGVySW5zZXRMZXZlbFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YS5jbGlja2FibGUgPSB0cnVlXG4gICAgICAgIGRhdGEub25DbGljayA9IG9uSGVhZGVyQ2xpY2tcblxuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgaGFzTGluay52YWx1ZSA9PT0gdHJ1ZSA/IGxpbmtQcm9wcy52YWx1ZSA6IHRvZ2dsZUFyaWFBdHRycy52YWx1ZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFJdGVtLCBkYXRhLCBnZXRIZWFkZXJDaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uQ2hpbGQgKCkge1xuICAgICAgcmV0dXJuIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAga2V5OiAnZS1jb250ZW50JyxcbiAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX2NvbnRlbnQgcmVsYXRpdmUtcG9zaXRpb24nLFxuICAgICAgICAgIHN0eWxlOiBjb250ZW50U3R5bGUudmFsdWUsXG4gICAgICAgICAgaWQ6IHRhcmdldFVpZFxuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSksXG4gICAgICAgIFsgW1xuICAgICAgICAgIHZTaG93LFxuICAgICAgICAgIHNob3dpbmcudmFsdWVcbiAgICAgICAgXSBdXG4gICAgICApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgICBjb25zdCBub2RlID0gW1xuICAgICAgICBnZXRIZWFkZXIoKSxcblxuICAgICAgICBoKFFTbGlkZVRyYW5zaXRpb24sIHtcbiAgICAgICAgICBkdXJhdGlvbjogcHJvcHMuZHVyYXRpb24sXG4gICAgICAgICAgb25TaG93LFxuICAgICAgICAgIG9uSGlkZVxuICAgICAgICB9LCBnZXRUcmFuc2l0aW9uQ2hpbGQpXG4gICAgICBdXG5cbiAgICAgIGlmIChwcm9wcy5leHBhbmRTZXBhcmF0b3IgPT09IHRydWUpIHtcbiAgICAgICAgbm9kZS5wdXNoKFxuICAgICAgICAgIGgoUVNlcGFyYXRvciwge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXIgcS1leHBhbnNpb24taXRlbV9fYm9yZGVyLS10b3AgYWJzb2x1dGUtdG9wJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGgoUVNlcGFyYXRvciwge1xuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXIgcS1leHBhbnNpb24taXRlbV9fYm9yZGVyLS1ib3R0b20gYWJzb2x1dGUtYm90dG9tJyxcbiAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG5cbiAgICBwcm9wcy5ncm91cCAhPT0gdm9pZCAwICYmIGVudGVyR3JvdXAoKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGV4aXRHcm91cCAhPT0gdm9pZCAwICYmIGV4aXRHcm91cCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIFtcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX19jb250YWluZXIgcmVsYXRpdmUtcG9zaXRpb24nIH0sIGdldENvbnRlbnQoKSlcbiAgICBdKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZVNwaW5uZXIsIHsgdXNlU3Bpbm5lclByb3BzIH0gZnJvbSAnLi91c2Utc3Bpbm5lci5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmNvbnN0IHN2ZyA9IFtcbiAgaCgnZycsIHtcbiAgICB0cmFuc2Zvcm06ICdtYXRyaXgoMSAwIDAgLTEgMCA4MCknXG4gIH0sIFtcbiAgICBoKCdyZWN0Jywge1xuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICcyMCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICc0LjNzJyxcbiAgICAgICAgdmFsdWVzOiAnMjA7NDU7NTc7ODA7NjQ7MzI7NjY7NDU7NjQ7MjM7NjY7MTM7NjQ7NTY7MzQ7MzQ7MjsyMzs3Njs3OTsyMCcsXG4gICAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgICAgfSlcbiAgICBdKSxcbiAgICBoKCdyZWN0Jywge1xuICAgICAgeDogJzE1JyxcbiAgICAgIHdpZHRoOiAnMTAnLFxuICAgICAgaGVpZ2h0OiAnODAnLFxuICAgICAgcng6ICczJ1xuICAgIH0sIFtcbiAgICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdoZWlnaHQnLFxuICAgICAgICBiZWdpbjogJzBzJyxcbiAgICAgICAgZHVyOiAnMnMnLFxuICAgICAgICB2YWx1ZXM6ICc4MDs1NTszMzs1Ozc1OzIzOzczOzMzOzEyOzE0OzYwOzgwJyxcbiAgICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgICB9KVxuICAgIF0pLFxuICAgIGgoJ3JlY3QnLCB7XG4gICAgICB4OiAnMzAnLFxuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICc1MCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICcxLjRzJyxcbiAgICAgICAgdmFsdWVzOiAnNTA7MzQ7Nzg7MjM7NTY7MjM7MzQ7NzY7ODA7NTQ7MjE7NTAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSksXG4gICAgaCgncmVjdCcsIHtcbiAgICAgIHg6ICc0NScsXG4gICAgICB3aWR0aDogJzEwJyxcbiAgICAgIGhlaWdodDogJzMwJyxcbiAgICAgIHJ4OiAnMydcbiAgICB9LCBbXG4gICAgICBoKCdhbmltYXRlJywge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnaGVpZ2h0JyxcbiAgICAgICAgYmVnaW46ICcwcycsXG4gICAgICAgIGR1cjogJzJzJyxcbiAgICAgICAgdmFsdWVzOiAnMzA7NDU7MTM7ODA7NTY7NzI7NDU7NzY7MzQ7MjM7Njc7MzAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSlcbiAgXSlcbl1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGlubmVyQXVkaW8nLFxuXG4gIHByb3BzOiB1c2VTcGlubmVyUHJvcHMsXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgd2lkdGg6IGNTaXplLnZhbHVlLFxuICAgICAgaGVpZ2h0OiBjU2l6ZS52YWx1ZSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgNTUgODAnLFxuICAgICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICB9LCBzdmcpXG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWl0ZW0gY2xhc3M9XCJ0cmFuc3BhcmVudFwiIGNsaWNrYWJsZSB2LXJpcHBsZSB2LWlmPVwicHJvcHMudHJhY2tJbmZvXCI+XG4gICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgIDxxLWF2YXRhciBzcXVhcmU+XG4gICAgICAgIDxpbWcgOnNyYz1cInByb3BzLnRyYWNrSW5mby5hbGJ1bS50aHVtYm5haWwudGlueS51cmxcIj5cbiAgICAgIDwvcS1hdmF0YXI+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwiZWxsaXBzaXNcIiA6Y2xhc3M9XCJ7ICd0ZXh0LWd0JyA6IGN1cnJlbnRseVBsYXlpbmcgfVwiPnt7IHByb3BzLnRyYWNrSW5mby5uYW1lLl9kZWZhdWx0IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgICA8cS1pdGVtLWxhYmVsIGNsYXNzPVwiZWxsaXBzaXNcIiA6Y2xhc3M9XCJ7ICd0ZXh0LWd0JyA6IGN1cnJlbnRseVBsYXlpbmcgfVwiIGNhcHRpb24gbGluZXM9XCIyXCI+e3sgcHJvcHMudHJhY2tJbmZvLmFsYnVtLmFsYnVtTmFtZS5fZGVmYXVsdCB9fTwvcS1pdGVtLWxhYmVsPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHNpZGUgdi1pZj1cImN1cnJlbnRseVBsYXlpbmdcIj5cbiAgICAgIDxxLXNwaW5uZXItYXVkaW8gdi1pZj1cIiFwYXVzZWRcIiBzaXplPVwiMmVtXCIgY29sb3I9XCJndFwiIC8+XG4gICAgICA8cS1pY29uIHNpemU9XCIyZW1cIiB2LWlmPVwicGF1c2VkXCIgOm5hbWU9XCJvdXRsaW5lZFBhdXNlXCI+PC9xLWljb24+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZSB2LWlmPVwiIWN1cnJlbnRseVBsYXlpbmdcIj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbj57eyBmb3JtYXREdXJhdGlvbihwcm9wcy50cmFja0luZm8uZHVyYXRpb24pIH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgPC9xLWl0ZW0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtUcmFja1JlYWREdG99IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7Y29tcHV0ZWQsIGRlZmluZVByb3BzfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtmb3JtYXREdXJhdGlvbn0gZnJvbSAnc3JjL3V0aWxzL2R1cmF0aW9uVXRpbHMnO1xuaW1wb3J0IHthdWRpb0NvbnRyb2xsZXJ9IGZyb20gJ2Jvb3QvYXVkaW9Db250cm9sbGVyJztcbmltcG9ydCB7b3V0bGluZWRQYXVzZX0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5jb25zdCBwYXVzZWQgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBhdWRpb0NvbnRyb2xsZXIucGF1c2VkLnZhbHVlO1xufSk7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRyYWNrSW5mbzogVHJhY2tSZWFkRHRvLFxuICBjdXJyZW50bHlQbGF5aW5nOiBib29sZWFuXG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8UHJvcHM+KCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cS1saXN0PlxuICAgICAgPHEtZXhwYW5zaW9uLWl0ZW1cbiAgICAgICAgZGVuc2VcbiAgICAgICAgbGFiZWw9XCJIaXN0b3J5XCJcbiAgICAgICAgZGVmYXVsdC1vcGVuZWQ+XG5cbiAgICAgICAgPFF1ZXVlSXRlbSB2LWZvcj1cImhpc3RvcnkgaW4gcXVldWVkSGlzdG9yeVwiIDprZXk9XCJoaXN0b3J5LmlkXCJcbiAgICAgICAgICAgICAgICAgICA6dHJhY2staW5mbz1cImhpc3RvcnlcIiA6Y3VycmVudGx5LXBsYXlpbmc9XCJmYWxzZVwiPjwvUXVldWVJdGVtPlxuXG4gICAgICAgIDxRdWV1ZUl0ZW0gOmN1cnJlbnRseS1wbGF5aW5nPVwidHJ1ZVwiIDp0cmFjay1pbmZvPVwiY3VycmVudGx5UGxheWluZ1wiPjwvUXVldWVJdGVtPlxuICAgICAgPC9xLWV4cGFuc2lvbi1pdGVtPlxuXG4gICAgICA8cS1leHBhbnNpb24taXRlbVxuICAgICAgICBkZW5zZVxuICAgICAgICBsYWJlbD1cIk5leHQgVXBcIlxuICAgICAgICBkZWZhdWx0LW9wZW5lZD5cbiAgICAgICAgPFF1ZXVlSXRlbSB2LWZvcj1cImZ1dHVyZSBpbiBxdWV1ZWRGdXR1cmVcIiA6a2V5PVwiZnV0dXJlLmlkXCJcbiAgICAgICAgICAgICAgICAgICA6dHJhY2staW5mbz1cImZ1dHVyZVwiIDpjdXJyZW50bHktcGxheWluZz1cImZhbHNlXCI+PC9RdWV1ZUl0ZW0+XG4gICAgICA8L3EtZXhwYW5zaW9uLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCBRdWV1ZUl0ZW0gZnJvbSAnY29tcG9uZW50cy9RdWV1ZUl0ZW0udnVlJztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSAnc3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlcic7XG5cbmxldCBxdWV1ZUNvbnRyb2xsZXIgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcblxuY29uc3QgcXVldWVkSGlzdG9yeSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlQ29udHJvbGxlci5zb25nSGlzdG9yeTtcbn0pXG5cbmNvbnN0IHF1ZXVlZEZ1dHVyZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlQ29udHJvbGxlci5xdWV1ZTtcbn0pXG5cbmNvbnN0IGN1cnJlbnRseVBsYXlpbmcgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBxdWV1ZUNvbnRyb2xsZXIuY3VycmVudGx5UGxheWluZztcbn0pXG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCdG5Hcm91cCcsXG5cbiAgcHJvcHM6IHtcbiAgICB1bmVsZXZhdGVkOiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuICAgIHNxdWFyZTogQm9vbGVhbixcbiAgICBwdXNoOiBCb29sZWFuLFxuICAgIHN0cmV0Y2g6IEJvb2xlYW4sXG4gICAgZ2xvc3N5OiBCb29sZWFuLFxuICAgIHNwcmVhZDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNscyA9IFsgJ3VuZWxldmF0ZWQnLCAnb3V0bGluZScsICdmbGF0JywgJ3JvdW5kZWQnLCAnc3F1YXJlJywgJ3B1c2gnLCAnc3RyZXRjaCcsICdnbG9zc3knIF1cbiAgICAgICAgLmZpbHRlcih0ID0+IHByb3BzWyB0IF0gPT09IHRydWUpXG4gICAgICAgIC5tYXAodCA9PiBgcS1idG4tZ3JvdXAtLSR7IHQgfWApLmpvaW4oJyAnKVxuXG4gICAgICByZXR1cm4gYHEtYnRuLWdyb3VwIHJvdyBuby13cmFwJHsgY2xzLmxlbmd0aCA+IDAgPyAnICcgKyBjbHMgOiAnJyB9YFxuICAgICAgICArIChwcm9wcy5zcHJlYWQgPT09IHRydWUgPyAnIHEtYnRuLWdyb3VwLS1zcHJlYWQnIDogJyBpbmxpbmUnKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbk1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUUJ0biBmcm9tICcuLi9idG4vUUJ0bi5qcydcbmltcG9ydCBRQnRuR3JvdXAgZnJvbSAnLi4vYnRuLWdyb3VwL1FCdG5Hcm91cC5qcydcbmltcG9ydCBRTWVudSBmcm9tICcuLi9tZW51L1FNZW51LmpzJ1xuXG5pbXBvcnQgeyBnZXRCdG5EZXNpZ25BdHRyLCB1c2VCdG5Qcm9wcyB9IGZyb20gJy4uL2J0bi91c2UtYnRuLmpzJ1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdHJhbnNpdGlvbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBzdG9wIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL3V0aWxzL3VpZC5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGJ0blByb3BzTGlzdCA9IE9iamVjdC5rZXlzKHVzZUJ0blByb3BzKVxuXG5leHBvcnQgY29uc3QgcGFzc0J0blByb3BzID0gcHJvcHMgPT4gYnRuUHJvcHNMaXN0LnJlZHVjZShcbiAgKGFjYywga2V5KSA9PiB7XG4gICAgY29uc3QgdmFsID0gcHJvcHNbIGtleSBdXG4gICAgaWYgKHZhbCAhPT0gdm9pZCAwKSB7XG4gICAgICBhY2NbIGtleSBdID0gdmFsXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSxcbiAge31cbilcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FCdG5Ecm9wZG93bicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VCdG5Qcm9wcyxcbiAgICAuLi51c2VUcmFuc2l0aW9uUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiBCb29sZWFuLFxuICAgIHNwbGl0OiBCb29sZWFuLFxuICAgIGRyb3Bkb3duSWNvbjogU3RyaW5nLFxuXG4gICAgY29udGVudENsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGNvbnRlbnRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIGNvdmVyOiBCb29sZWFuLFxuICAgIHBlcnNpc3RlbnQ6IEJvb2xlYW4sXG4gICAgbm9Sb3V0ZURpc21pc3M6IEJvb2xlYW4sXG4gICAgYXV0b0Nsb3NlOiBCb29sZWFuLFxuXG4gICAgbWVudUFuY2hvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2JvdHRvbSBlbmQnXG4gICAgfSxcbiAgICBtZW51U2VsZjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3RvcCBlbmQnXG4gICAgfSxcbiAgICBtZW51T2Zmc2V0OiBBcnJheSxcblxuICAgIGRpc2FibGVNYWluQnRuOiBCb29sZWFuLFxuICAgIGRpc2FibGVEcm9wZG93bjogQm9vbGVhbixcblxuICAgIG5vSWNvbkFuaW1hdGlvbjogQm9vbGVhbixcblxuICAgIHRvZ2dsZUFyaWFMYWJlbDogU3RyaW5nXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NsaWNrJywgJ2JlZm9yZVNob3cnLCAnc2hvdycsICdiZWZvcmVIaWRlJywgJ2hpZGUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihwcm9wcy5tb2RlbFZhbHVlKVxuICAgIGNvbnN0IG1lbnVSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCB0YXJnZXRVaWQgPSB1aWQoKVxuXG4gICAgY29uc3QgYXJpYUF0dHJzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge1xuICAgICAgICAnYXJpYS1leHBhbmRlZCc6IHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgICAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJyxcbiAgICAgICAgJ2FyaWEtY29udHJvbHMnOiB0YXJnZXRVaWQsXG4gICAgICAgICdhcmlhLWxhYmVsJzogcHJvcHMudG9nZ2xlQXJpYUxhYmVsIHx8IHByb3h5LiRxLmxhbmcubGFiZWxbIHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAnY29sbGFwc2UnIDogJ2V4cGFuZCcgXShwcm9wcy5sYWJlbClcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICAgIHx8IChcbiAgICAgICAgICAocHJvcHMuc3BsaXQgPT09IGZhbHNlICYmIHByb3BzLmRpc2FibGVNYWluQnRuID09PSB0cnVlKVxuICAgICAgICAgIHx8IHByb3BzLmRpc2FibGVEcm9wZG93biA9PT0gdHJ1ZVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgYWNjWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGljb25DbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1idG4tZHJvcGRvd25fX2Fycm93J1xuICAgICAgKyAoc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub0ljb25BbmltYXRpb24gPT09IGZhbHNlID8gJyByb3RhdGUtMTgwJyA6ICcnKVxuICAgICAgKyAocHJvcHMuc3BsaXQgPT09IGZhbHNlID8gJyBxLWJ0bi1kcm9wZG93bl9fYXJyb3ctY29udGFpbmVyJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGJ0bkRlc2lnbkF0dHIgPSBjb21wdXRlZCgoKSA9PiBnZXRCdG5EZXNpZ25BdHRyKHByb3BzKSlcbiAgICBjb25zdCBidG5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+IHBhc3NCdG5Qcm9wcyhwcm9wcykpXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlWyB2YWwgPyAnc2hvdycgOiAnaGlkZScgXSgpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNwbGl0LCBoaWRlKVxuXG4gICAgZnVuY3Rpb24gb25CZWZvcmVTaG93IChlKSB7XG4gICAgICBzaG93aW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgZW1pdCgnYmVmb3JlU2hvdycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TaG93IChlKSB7XG4gICAgICBlbWl0KCdzaG93JywgZSlcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkJlZm9yZUhpZGUgKGUpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgZW1pdCgnYmVmb3JlSGlkZScsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IaWRlIChlKSB7XG4gICAgICBlbWl0KCdoaWRlJywgZSlcbiAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgZmFsc2UpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tIaWRlIChlKSB7XG4gICAgICBzdG9wKGUpXG4gICAgICBoaWRlKClcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2dnbGUgKGV2dCkge1xuICAgICAgbWVudVJlZi52YWx1ZSAhPT0gbnVsbCAmJiBtZW51UmVmLnZhbHVlLnRvZ2dsZShldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvdyAoZXZ0KSB7XG4gICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWUuc2hvdyhldnQpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZSAoZXZ0KSB7XG4gICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWUuaGlkZShldnQpXG4gICAgfVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgICAgc2hvdywgaGlkZSwgdG9nZ2xlXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBwcm9wcy5tb2RlbFZhbHVlID09PSB0cnVlICYmIHNob3coKVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgQXJyb3cgPSBbXG4gICAgICAgIGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogaWNvbkNsYXNzLnZhbHVlLFxuICAgICAgICAgIG5hbWU6IHByb3BzLmRyb3Bkb3duSWNvbiB8fCBwcm94eS4kcS5pY29uU2V0LmFycm93LmRyb3Bkb3duXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIHByb3BzLmRpc2FibGVEcm9wZG93biAhPT0gdHJ1ZSAmJiBBcnJvdy5wdXNoKFxuICAgICAgICBoKFFNZW51LCB7XG4gICAgICAgICAgcmVmOiBtZW51UmVmLFxuICAgICAgICAgIGlkOiB0YXJnZXRVaWQsXG4gICAgICAgICAgY2xhc3M6IHByb3BzLmNvbnRlbnRDbGFzcyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuY29udGVudFN0eWxlLFxuICAgICAgICAgIGNvdmVyOiBwcm9wcy5jb3ZlcixcbiAgICAgICAgICBmaXQ6IHRydWUsXG4gICAgICAgICAgcGVyc2lzdGVudDogcHJvcHMucGVyc2lzdGVudCxcbiAgICAgICAgICBub1JvdXRlRGlzbWlzczogcHJvcHMubm9Sb3V0ZURpc21pc3MsXG4gICAgICAgICAgYXV0b0Nsb3NlOiBwcm9wcy5hdXRvQ2xvc2UsXG4gICAgICAgICAgYW5jaG9yOiBwcm9wcy5tZW51QW5jaG9yLFxuICAgICAgICAgIHNlbGY6IHByb3BzLm1lbnVTZWxmLFxuICAgICAgICAgIG9mZnNldDogcHJvcHMubWVudU9mZnNldCxcbiAgICAgICAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvblNob3c6IHByb3BzLnRyYW5zaXRpb25TaG93LFxuICAgICAgICAgIHRyYW5zaXRpb25IaWRlOiBwcm9wcy50cmFuc2l0aW9uSGlkZSxcbiAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICBvbkJlZm9yZVNob3csXG4gICAgICAgICAgb25TaG93LFxuICAgICAgICAgIG9uQmVmb3JlSGlkZSxcbiAgICAgICAgICBvbkhpZGVcbiAgICAgICAgfSwgc2xvdHMuZGVmYXVsdClcbiAgICAgIClcblxuICAgICAgaWYgKHByb3BzLnNwbGl0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93biBxLWJ0bi1kcm9wZG93bi0tc2ltcGxlJyxcbiAgICAgICAgICAuLi5idG5Qcm9wcy52YWx1ZSxcbiAgICAgICAgICAuLi5hcmlhQXR0cnMudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgcm91bmQ6IGZhbHNlLFxuICAgICAgICAgIG9uQ2xpY2tcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IGhTbG90KHNsb3RzLmxhYmVsLCBbXSkuY29uY2F0KEFycm93KSxcbiAgICAgICAgICBsb2FkaW5nOiBzbG90cy5sb2FkaW5nXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFFCdG5Hcm91cCwge1xuICAgICAgICBjbGFzczogJ3EtYnRuLWRyb3Bkb3duIHEtYnRuLWRyb3Bkb3duLS1zcGxpdCBuby13cmFwIHEtYnRuLWl0ZW0nLFxuICAgICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuICAgICAgICBzcXVhcmU6IHByb3BzLnNxdWFyZSxcbiAgICAgICAgLi4uYnRuRGVzaWduQXR0ci52YWx1ZSxcbiAgICAgICAgZ2xvc3N5OiBwcm9wcy5nbG9zc3ksXG4gICAgICAgIHN0cmV0Y2g6IHByb3BzLnN0cmV0Y2hcbiAgICAgIH0sICgpID0+IFtcbiAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93bi0tY3VycmVudCcsXG4gICAgICAgICAgLi4uYnRuUHJvcHMudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlTWFpbkJ0biA9PT0gdHJ1ZSxcbiAgICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgICAgcm91bmQ6IGZhbHNlLFxuICAgICAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tIaWRlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWZhdWx0OiBzbG90cy5sYWJlbCxcbiAgICAgICAgICBsb2FkaW5nOiBzbG90cy5sb2FkaW5nXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGgoUUJ0biwge1xuICAgICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd25fX2Fycm93LWNvbnRhaW5lciBxLWFuY2hvci0tc2tpcCcsXG4gICAgICAgICAgLi4uYXJpYUF0dHJzLnZhbHVlLFxuICAgICAgICAgIC4uLmJ0bkRlc2lnbkF0dHIudmFsdWUsXG4gICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5kaXNhYmxlRHJvcGRvd24gPT09IHRydWUsXG4gICAgICAgICAgcm91bmRlZDogcHJvcHMucm91bmRlZCxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgdGV4dENvbG9yOiBwcm9wcy50ZXh0Q29sb3IsXG4gICAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICAgIHNpemU6IHByb3BzLnNpemUsXG4gICAgICAgICAgcGFkZGluZzogcHJvcHMucGFkZGluZyxcbiAgICAgICAgICByaXBwbGU6IHByb3BzLnJpcHBsZVxuICAgICAgICB9LCAoKSA9PiBBcnJvdylcbiAgICAgIF0pXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCwgb25Nb3VudGVkLCBnZXRDdXJyZW50SW5zdGFuY2UsIG5leHRUaWNrLCBwcm92aWRlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBhZGRGb2N1c0ZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9mb2N1cy1tYW5hZ2VyLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGZvcm1LZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5pbXBvcnQgeyB2bUlzRGVzdHJveWVkIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb3JtJyxcblxuICBwcm9wczoge1xuICAgIGF1dG9mb2N1czogQm9vbGVhbixcbiAgICBub0Vycm9yRm9jdXM6IEJvb2xlYW4sXG4gICAgbm9SZXNldEZvY3VzOiBCb29sZWFuLFxuICAgIGdyZWVkeTogQm9vbGVhbixcblxuICAgIG9uU3VibWl0OiBGdW5jdGlvblxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXNldCcsICd2YWxpZGF0aW9uU3VjY2VzcycsICd2YWxpZGF0aW9uRXJyb3InIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgbGV0IHZhbGlkYXRlSW5kZXggPSAwXG4gICAgY29uc3QgcmVnaXN0ZXJlZENvbXBvbmVudHMgPSBbXVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUgKHNob3VsZEZvY3VzKSB7XG4gICAgICBjb25zdCBmb2N1cyA9IHR5cGVvZiBzaG91bGRGb2N1cyA9PT0gJ2Jvb2xlYW4nXG4gICAgICAgID8gc2hvdWxkRm9jdXNcbiAgICAgICAgOiBwcm9wcy5ub0Vycm9yRm9jdXMgIT09IHRydWVcblxuICAgICAgY29uc3QgaW5kZXggPSArK3ZhbGlkYXRlSW5kZXhcblxuICAgICAgY29uc3QgZW1pdEV2ZW50ID0gKHJlcywgcmVmKSA9PiB7XG4gICAgICAgIGVtaXQoJ3ZhbGlkYXRpb24nICsgKHJlcyA9PT0gdHJ1ZSA/ICdTdWNjZXNzJyA6ICdFcnJvcicpLCByZWYpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHZhbGlkYXRlQ29tcG9uZW50ID0gY29tcCA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gY29tcC52YWxpZGF0ZSgpXG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWxpZC50aGVuID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyB2YWxpZC50aGVuKFxuICAgICAgICAgICAgdmFsaWQgPT4gKHsgdmFsaWQsIGNvbXAgfSksXG4gICAgICAgICAgICBlcnIgPT4gKHsgdmFsaWQ6IGZhbHNlLCBjb21wLCBlcnIgfSlcbiAgICAgICAgICApXG4gICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoeyB2YWxpZCwgY29tcCB9KVxuICAgICAgfVxuXG4gICAgICBjb25zdCBlcnJvcnNQcm9taXNlID0gcHJvcHMuZ3JlZWR5ID09PSB0cnVlXG4gICAgICAgID8gUHJvbWlzZVxuICAgICAgICAgIC5hbGwocmVnaXN0ZXJlZENvbXBvbmVudHMubWFwKHZhbGlkYXRlQ29tcG9uZW50KSlcbiAgICAgICAgICAudGhlbihyZXMgPT4gcmVzLmZpbHRlcihyID0+IHIudmFsaWQgIT09IHRydWUpKVxuICAgICAgICA6IHJlZ2lzdGVyZWRDb21wb25lbnRzXG4gICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgIChhY2MsIGNvbXApID0+IGFjYy50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlQ29tcG9uZW50KGNvbXApLnRoZW4ociA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHIudmFsaWQgPT09IGZhbHNlKSB7IHJldHVybiBQcm9taXNlLnJlamVjdChyKSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgKVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBbIGVycm9yIF0pXG5cbiAgICAgIHJldHVybiBlcnJvcnNQcm9taXNlLnRoZW4oZXJyb3JzID0+IHtcbiAgICAgICAgaWYgKGVycm9ycyA9PT0gdm9pZCAwIHx8IGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpbmRleCA9PT0gdmFsaWRhdGVJbmRleCAmJiBlbWl0RXZlbnQodHJ1ZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm90IG91dGRhdGVkIGFscmVhZHlcbiAgICAgICAgaWYgKGluZGV4ID09PSB2YWxpZGF0ZUluZGV4KSB7XG4gICAgICAgICAgY29uc3QgeyBjb21wLCBlcnIgfSA9IGVycm9yc1sgMCBdXG5cbiAgICAgICAgICBlcnIgIT09IHZvaWQgMCAmJiBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgICBlbWl0RXZlbnQoZmFsc2UsIGNvbXApXG5cbiAgICAgICAgICBpZiAoZm9jdXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIFRyeSB0byBmb2N1cyBmaXJzdCBtb3VudGVkIGFuZCBhY3RpdmUgY29tcG9uZW50XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVFcnJvciA9IGVycm9ycy5maW5kKCh7IGNvbXAgfSkgPT4gKFxuICAgICAgICAgICAgICB0eXBlb2YgY29tcC5mb2N1cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgICAmJiB2bUlzRGVzdHJveWVkKGNvbXAuJCkgPT09IGZhbHNlXG4gICAgICAgICAgICApKVxuXG4gICAgICAgICAgICBpZiAoYWN0aXZlRXJyb3IgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICBhY3RpdmVFcnJvci5jb21wLmZvY3VzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uICgpIHtcbiAgICAgIHZhbGlkYXRlSW5kZXgrK1xuXG4gICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5mb3JFYWNoKGNvbXAgPT4ge1xuICAgICAgICB0eXBlb2YgY29tcC5yZXNldFZhbGlkYXRpb24gPT09ICdmdW5jdGlvbicgJiYgY29tcC5yZXNldFZhbGlkYXRpb24oKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJtaXQgKGV2dCkge1xuICAgICAgZXZ0ICE9PSB2b2lkIDAgJiYgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBjb25zdCBpbmRleCA9IHZhbGlkYXRlSW5kZXggKyAxXG5cbiAgICAgIHZhbGlkYXRlKCkudGhlbih2YWwgPT4ge1xuICAgICAgICAvLyBpZiBub3Qgb3V0ZGF0ZWQgJiYgdmFsaWRhdGlvbiBzdWNjZWVkZWRcbiAgICAgICAgaWYgKGluZGV4ID09PSB2YWxpZGF0ZUluZGV4ICYmIHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChwcm9wcy5vblN1Ym1pdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBlbWl0KCdzdWJtaXQnLCBldnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKGV2dCAhPT0gdm9pZCAwICYmIGV2dC50YXJnZXQgIT09IHZvaWQgMCAmJiB0eXBlb2YgZXZ0LnRhcmdldC5zdWJtaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGV2dC50YXJnZXQuc3VibWl0KClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQgKGV2dCkge1xuICAgICAgZXZ0ICE9PSB2b2lkIDAgJiYgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBlbWl0KCdyZXNldCcpXG5cbiAgICAgIG5leHRUaWNrKCgpID0+IHsgLy8gYWxsb3cgdXNlcmxhbmQgdG8gcmVzZXQgdmFsdWVzIGJlZm9yZVxuICAgICAgICByZXNldFZhbGlkYXRpb24oKVxuICAgICAgICBpZiAocHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlICYmIHByb3BzLm5vUmVzZXRGb2N1cyAhPT0gdHJ1ZSkge1xuICAgICAgICAgIGZvY3VzKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb2N1cyAoKSB7XG4gICAgICBhZGRGb2N1c0ZuKCgpID0+IHtcbiAgICAgICAgaWYgKHJvb3RSZWYudmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgICBjb25zdCB0YXJnZXQgPSByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdW3RhYmluZGV4XSwgW2RhdGEtYXV0b2ZvY3VzXVt0YWJpbmRleF0nKVxuICAgICAgICAgIHx8IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10gW3RhYmluZGV4XSwgW2RhdGEtYXV0b2ZvY3VzXSBbdGFiaW5kZXhdJylcbiAgICAgICAgICB8fCByb290UmVmLnZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdLCBbZGF0YS1hdXRvZm9jdXNdJylcbiAgICAgICAgICB8fCBBcnJheS5wcm90b3R5cGUuZmluZC5jYWxsKHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XScpLCBlbCA9PiBlbC50YWJJbmRleCA+IC0xKVxuXG4gICAgICAgIHRhcmdldCAhPT0gbnVsbCAmJiB0YXJnZXQgIT09IHZvaWQgMCAmJiB0YXJnZXQuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICB9KVxuICAgIH1cblxuICAgIHByb3ZpZGUoZm9ybUtleSwge1xuICAgICAgYmluZENvbXBvbmVudCAodm1Qcm94eSkge1xuICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5wdXNoKHZtUHJveHkpXG4gICAgICB9LFxuXG4gICAgICB1bmJpbmRDb21wb25lbnQgKHZtUHJveHkpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByZWdpc3RlcmVkQ29tcG9uZW50cy5pbmRleE9mKHZtUHJveHkpXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIGxldCBzaG91bGRBY3RpdmF0ZSA9IGZhbHNlXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNob3VsZEFjdGl2YXRlID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBzaG91bGRBY3RpdmF0ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgJiYgZm9jdXMoKVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgcHJvcHMuYXV0b2ZvY3VzID09PSB0cnVlICYmIGZvY3VzKClcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgT2JqZWN0LmFzc2lnbih2bS5wcm94eSwge1xuICAgICAgdmFsaWRhdGUsXG4gICAgICByZXNldFZhbGlkYXRpb24sXG4gICAgICBzdWJtaXQsXG4gICAgICByZXNldCxcbiAgICAgIGZvY3VzLFxuICAgICAgZ2V0VmFsaWRhdGlvbkNvbXBvbmVudHM6ICgpID0+IHJlZ2lzdGVyZWRDb21wb25lbnRzXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdmb3JtJywge1xuICAgICAgY2xhc3M6ICdxLWZvcm0nLFxuICAgICAgcmVmOiByb290UmVmLFxuICAgICAgb25TdWJtaXQ6IHN1Ym1pdCxcbiAgICAgIG9uUmVzZXQ6IHJlc2V0XG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICAgIHBvc2l0aW9uPVwidG9wXCJcblxuICAgIHYtbW9kZWw9XCJzaG93XCJcbiAgPlxuICAgIDxxLWNhcmQgYm9yZGVyZWQgY2xhc3M9XCJxLW10LWxnXCIgc3R5bGU9XCJ3aWR0aDogNzAwcHg7IG1heC13aWR0aDogODB2dzsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2Niw2Niw2NiwwLjk3KTsgXCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+Q3JlYXRlIEFjY291bnQ8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZFwiPlxuXG4gICAgICAgICAgPHEtZm9ybVxuICAgICAgICAgICAgQHN1Ym1pdD1cIm9uU3VibWl0XCJcbiAgICAgICAgICAgIGNsYXNzPVwicS1ndXR0ZXItbWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG5cbiAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAgIGhpbnQ9XCI0LTE2IEFscGhhbnVtZXJpYyBDaGFyYWN0ZXJzXCJcblxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpydWxlcz1cIltcbiAgICAgICAgICAgICAgICB2YWwgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHZhbC5sZW5ndGggPCA0IHx8IHZhbC5sZW5ndGggPiAxNilcbiAgICAgICAgICAgICAgICAgICAgeyByZXR1cm4gJ1VzZXJuYW1lIG11c3QgYmUgYmV0d2VlbiA0LTE2IGNoYXJhY3RlcnMnfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXVzZXJuYW1lVmFsaWRhdG9yLnRlc3QodmFsKSlcbiAgICAgICAgICAgICAgICAgICAgeyByZXR1cm4gJ1VzZXJuYW1lIG11c3Qgb25seSBjb25zaXN0IG9mIEFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzJyB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBdXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG5cbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGhpbnQ9XCJCZXR3ZWVuIDYgLSA2NCBjaGFyYWN0ZXJzXCJcblxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+IHBhc3N3b3JkVmFsaWRhdG9yLnRlc3QodmFsKSB8fCAnUGFzc3dvcmQgbXVzdCBiZSBiZXR3ZWVuIDYgLSA2NCBjaGFyYWN0ZXJzJyBdXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxxLWlucHV0XG4gICAgICAgICAgICAgIGRhcmtcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG5cbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkUmVwZWF0XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZCAoUmVwZWF0KVwiXG5cbiAgICAgICAgICAgICAgbGF6eS1ydWxlc1xuICAgICAgICAgICAgICA6cnVsZXM9XCJbIHZhbCA9PiB2YWwgPT09IHBhc3N3b3JkIHx8ICdQYXNzd29yZCBkb2VzIG5vdCBtYXRjaCcgXVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cS1idG4gbGFiZWw9XCJDcmVhdGUgQWNjb3VudFwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImZ1bGwtd2lkdGggYmctYmxhY2stYS03NVwiIHNpemU9XCJsZ1wiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS1mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQge2RlZmluZUNvbXBvbmVudH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1JlZ2lzdHJhdGlvbk1vZGFsJ1xufSk7XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtVc2VyQXBpLCBSZWdpc3RlclJlcXVlc3QsIFByb2JsZW1EZXRhaWxzfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQge1FEaWFsb2csIHVzZVF1YXNhcn0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gJ3NyYy91dGlscy9BcGlDb25maWdQcm92aWRlcic7XG5cbmNvbnN0IHNob3cgPSByZWYoZmFsc2UpO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZyhmYWxzZSk7XG5jb25zdCB1c2VyQXBpID0gbmV3IFVzZXJBcGkoYXBpQ29uZmlnKTtcbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5cbmNvbnN0IG9uU3VibWl0ID0gKGV2dDogU3VibWl0RXZlbnQpID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgcGF5bG9hZDogUmVnaXN0ZXJSZXF1ZXN0ID0ge1xuICAgIHVzZXJDcmVkZW50aWFsc0R0bzoge1xuICAgICAgdXNlck5hbWU6IHVzZXJuYW1lLnZhbHVlLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLnZhbHVlXG4gICAgfVxuICB9O1xuXG4gIHVzZXJBcGkucmVnaXN0ZXIocGF5bG9hZClcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAkcS5ub3RpZnkoe1xuICAgICAgICBtZXNzYWdlOiAnQWNjb3VudCBDcmVhdGVkJyxcbiAgICAgICAgY29sb3I6ICdwb3NpdGl2ZScsXG4gICAgICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgdGltZW91dDogNzAwMFxuICAgICAgfSk7XG4gICAgICBzaG93LnZhbHVlID0gZmFsc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKHJlc3VsdCkgPT4gcmVzdWx0LnJlc3BvbnNlLmpzb24oKS50aGVuKChyOiBQcm9ibGVtRGV0YWlscykgPT4ge1xuICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgbWVzc2FnZTogci5kZXRhaWwhLFxuICAgICAgICBjb2xvcjogJ25lZ2F0aXZlJyxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICBjYXB0aW9uOiAnRXJyb3Igd2hlbiBjcmVhdGluZyBhbiBhY2NvdW50JyxcbiAgICAgICAgdGltZW91dDogNzAwMFxuICAgICAgfSk7XG4gICAgfSkpO1xufTtcblxuY29uc3QgdXNlcm5hbWVWYWxpZGF0b3IgPSBuZXcgUmVnRXhwKCdeW0EtWmEtelxcXFxkXFxcXC1fLl17NCwxNn0kJyk7XG5jb25zdCBwYXNzd29yZFZhbGlkYXRvciA9IG5ldyBSZWdFeHAoJ14uezYsNjR9JCcpO1xuXG5jb25zdCB1c2VybmFtZSA9IHJlZigpO1xuY29uc3QgcGFzc3dvcmQgPSByZWYoKTtcbmNvbnN0IHBhc3N3b3JkUmVwZWF0ID0gcmVmKCk7XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdi1tb2RlbD1cInNob3dcIlxuXG4gICAgdHJhbnNpdGlvbi1zaG93PVwiZmFkZVwiXG4gICAgdHJhbnNpdGlvbi1oaWRlPVwiZmFkZVwiXG4gICAgcG9zaXRpb249XCJ0b3BcIlxuICA+XG4gICAgPHEtY2FyZCBib3JkZXJlZCBjbGFzcz1cInEtbXQtbGdcIiBzdHlsZT1cIndpZHRoOiA3MDBweDsgbWF4LXdpZHRoOiA4MHZ3OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LDY2LDY2LDAuOTcpOyBcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5Mb2dpbjwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kXCI+XG5cbiAgICAgICAgICA8cS1mb3JtXG4gICAgICAgICAgICBAc3VibWl0PVwib25TdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLWd1dHRlci1tZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHEtYnRuIGxhYmVsPVwiTG9naW5cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJmdWxsLXdpZHRoXCIgc2l6ZT1cImxnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMilcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxxLXNlcGFyYXRvcj48L3Etc2VwYXJhdG9yPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnVsbC1oZWlnaHQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyA8YSBAY2xpY2s9XCJzaG93UmVnaXN0ZXJEaWFsb2dcIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjdXJzb3I6IHBvaW50ZXI7XCI+Q3JlYXRlIEFjY291bnQ8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3EtZm9ybT5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnR9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdMb2dpbk1vZGFsJ1xufSk7XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHt1c2VRdWFzYXJ9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgUmVnaXN0cmF0aW9uTW9kYWwgZnJvbSAnY29tcG9uZW50cy9SZWdpc3RyYXRpb25Nb2RhbC52dWUnO1xuaW1wb3J0IHtMb2dpblJlcXVlc3QsIExvZ2luUmVzdWx0LCBQcm9ibGVtRGV0YWlscywgVXNlckFwaX0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHt1c2VBdXRoU3RvcmV9IGZyb20gJ3N0b3Jlcy9hdXRoRGF0YVN0b3JlJztcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gJ3NyYy91dGlscy9BcGlDb25maWdQcm92aWRlcic7XG5cbmNvbnN0IHsgc2V0QXV0aEZyb21Mb2dpblJlc3VsdCB9ID0gdXNlQXV0aFN0b3JlKCk7XG5cbmNvbnN0IHNob3cgPSByZWYoZmFsc2UpO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZyhmYWxzZSk7XG5jb25zdCB1c2VyQXBpID0gbmV3IFVzZXJBcGkoYXBpQ29uZmlnKTtcblxuY29uc3Qgb25TdWJtaXQgPSAoZXZ0OiBTdWJtaXRFdmVudCB8IEV2ZW50KSA9PiB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHBheWxvYWQ6IExvZ2luUmVxdWVzdCA9IHtcbiAgICB1c2VyQ3JlZGVudGlhbHNEdG86IHtcbiAgICAgIHVzZXJOYW1lOiB1c2VybmFtZS52YWx1ZSxcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC52YWx1ZVxuICAgIH1cbiAgfTtcblxuICB1c2VyQXBpLmxvZ2luKHBheWxvYWQpXG4gICAgLnRoZW4oKHJlc3VsdDogTG9naW5SZXN1bHQpID0+IHtcbiAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgIG1lc3NhZ2U6ICdMb2dnZWQgaW4nLFxuICAgICAgICBjb2xvcjogJ3Bvc2l0aXZlJyxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICB0aW1lb3V0OiA3MDAwXG4gICAgICB9KTtcblxuICAgICAgc2V0QXV0aEZyb21Mb2dpblJlc3VsdChyZXN1bHQpO1xuXG4gICAgICBzaG93LnZhbHVlID0gZmFsc2U7XG4gICAgfSlcbiAgICAuY2F0Y2goKHJlc3VsdCkgPT4gcmVzdWx0LnJlc3BvbnNlLmpzb24oKS50aGVuKChyOiBQcm9ibGVtRGV0YWlscykgPT4ge1xuICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgbWVzc2FnZTogci5kZXRhaWwhLFxuICAgICAgICBjb2xvcjogJ25lZ2F0aXZlJyxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICBjYXB0aW9uOiAnRXJyb3Igd2hlbiBsb2dnaW5nIGluJyxcbiAgICAgICAgdGltZW91dDogNzAwMFxuICAgICAgfSk7XG4gICAgfSkpO1xufTtcblxuY29uc3QgdXNlcm5hbWUgPSByZWYoKTtcbmNvbnN0IHBhc3N3b3JkID0gcmVmKCk7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5cbmNvbnN0IHNob3dSZWdpc3RlckRpYWxvZyA9ICgpID0+IHtcbiAgJHEuZGlhbG9nKHtcbiAgICBjb21wb25lbnQ6IFJlZ2lzdHJhdGlvbk1vZGFsXG4gIH0pO1xufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJxLW14LW1kXCI+XG4gICAgPGRpdj5cbiAgICAgIDxxLWJ0biB2LWlmPVwiIWlzTG9nZ2VkSW5SZWFjdGl2ZVwiIEBjbGljaz1cInNob3dMb2dpbkRpYWxvZ1wiIG91dGxpbmUgdGV4dC1jb2xvcj1cIndoaXRlXCIgbGFiZWw9XCJMb2dpblwiIHNpemU9XCJtZFwiIHN0eWxlPVwid2lkdGg6IDEwMHB4XCIgLz5cbiAgICA8L2Rpdj5cblxuICAgIDxxLWJ0bi1kcm9wZG93biB2LWlmPVwiaXNMb2dnZWRJblJlYWN0aXZlXCIgcm91bmRlZCA6bGFiZWw9XCJjdXJyZW50VXNlclwiIHN0eWxlPVwid2lkdGg6IDE1MHB4XCI+XG4gICAgICA8cS1saXN0PlxuICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LWNsb3NlLXBvcHVwPlxuICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+QWNjb3VudDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cInEtbXktc21cIiAvPlxuXG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5Mb2dvdXQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgPC9xLWxpc3Q+XG4gICAgPC9xLWJ0bi1kcm9wZG93bj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSAnY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSdcbmltcG9ydCB7dXNlUXVhc2FyfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHt1c2VBdXRoU3RvcmV9IGZyb20gJ3N0b3Jlcy9hdXRoRGF0YVN0b3JlJztcbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IGF1dGhTdG9yZSA9IHVzZUF1dGhTdG9yZSgpO1xuXG5jb25zdCBpc0xvZ2dlZEluUmVhY3RpdmUgPSBjb21wdXRlZCgoKSA9PiBhdXRoU3RvcmUuaXNMb2dnZWRJbik7XG5jb25zdCBjdXJyZW50VXNlciA9IGNvbXB1dGVkKCgpID0+IGF1dGhTdG9yZS5nZXRVc2VybmFtZSk7XG5cbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCBzaG93TG9naW5EaWFsb2cgPSAoKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBMb2dpbk1vZGFsXG4gIH0pO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCBpbmplY3QsIG9uQmVmb3JlVW5tb3VudCwgb25Nb3VudGVkLCB3aXRoRGlyZWN0aXZlcywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcblxuaW1wb3J0IFJpcHBsZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1JpcHBsZS5qcydcblxuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlLCBzaG91bGRJZ25vcmVLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcbmltcG9ydCB7IHRhYnNLZXksIGVtcHR5UmVuZGVyRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3N5bWJvbHMuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHVpZCBmcm9tICcuLi8uLi91dGlscy91aWQuanMnXG5pbXBvcnQgeyBpc0RlZXBFcXVhbCB9IGZyb20gJy4uLy4uL3V0aWxzL2lzLmpzJ1xuXG5sZXQgaWQgPSAwXG5cbmV4cG9ydCBjb25zdCB1c2VUYWJFbWl0cyA9IFsgJ2NsaWNrJywgJ2tleWRvd24nIF1cblxuZXhwb3J0IGNvbnN0IHVzZVRhYlByb3BzID0ge1xuICBpY29uOiBTdHJpbmcsXG4gIGxhYmVsOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgYWxlcnQ6IFsgQm9vbGVhbiwgU3RyaW5nIF0sXG4gIGFsZXJ0SWNvbjogU3RyaW5nLFxuXG4gIG5hbWU6IHtcbiAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgZGVmYXVsdDogKCkgPT4gYHRfJHsgaWQrKyB9YFxuICB9LFxuXG4gIG5vQ2FwczogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuICBkaXNhYmxlOiBCb29sZWFuLFxuXG4gIGNvbnRlbnRDbGFzczogU3RyaW5nLFxuXG4gIHJpcHBsZToge1xuICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgZGVmYXVsdDogdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwcm9wcywgc2xvdHMsIGVtaXQsIHJvdXRlRGF0YSkge1xuICBjb25zdCAkdGFicyA9IGluamVjdCh0YWJzS2V5LCBlbXB0eVJlbmRlckZuKVxuICBpZiAoJHRhYnMgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICBjb25zb2xlLmVycm9yKCdRVGFiL1FSb3V0ZVRhYiBjb21wb25lbnQgbmVlZHMgdG8gYmUgY2hpbGQgb2YgUVRhYnMnKVxuICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gIH1cblxuICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gIGNvbnN0IGJsdXJUYXJnZXRSZWYgPSByZWYobnVsbClcbiAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICBjb25zdCB0YWJJbmRpY2F0b3JSZWYgPSByZWYobnVsbClcblxuICBjb25zdCByaXBwbGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBwcm9wcy5yaXBwbGUgPT09IGZhbHNlXG4gICAgICA/IGZhbHNlXG4gICAgICA6IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHsga2V5Q29kZXM6IFsgMTMsIDMyIF0sIGVhcmx5OiB0cnVlIH0sXG4gICAgICAgIHByb3BzLnJpcHBsZSA9PT0gdHJ1ZSA/IHt9IDogcHJvcHMucmlwcGxlXG4gICAgICApXG4gICkpXG5cbiAgY29uc3QgaXNBY3RpdmUgPSBjb21wdXRlZCgoKSA9PiAkdGFicy5jdXJyZW50TW9kZWwudmFsdWUgPT09IHByb3BzLm5hbWUpXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdGFiIHJlbGF0aXZlLXBvc2l0aW9uIHNlbGYtc3RyZXRjaCBmbGV4IGZsZXgtY2VudGVyIHRleHQtY2VudGVyJ1xuICAgICsgKFxuICAgICAgaXNBY3RpdmUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAoXG4gICAgICAgICAgICAnIHEtdGFiLS1hY3RpdmUnXG4gICAgICAgICAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDbGFzcyA/ICcgJyArICR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNsYXNzIDogJycpXG4gICAgICAgICAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDb2xvciA/IGAgdGV4dC0keyAkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVDb2xvciB9YCA6ICcnKVxuICAgICAgICAgICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQmdDb2xvciA/IGAgYmctJHsgJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQmdDb2xvciB9YCA6ICcnKVxuICAgICAgICAgIClcbiAgICAgICAgOiAnIHEtdGFiLS1pbmFjdGl2ZSdcbiAgICApXG4gICAgKyAocHJvcHMuaWNvbiAmJiBwcm9wcy5sYWJlbCAmJiAkdGFicy50YWJQcm9wcy52YWx1ZS5pbmxpbmVMYWJlbCA9PT0gZmFsc2UgPyAnIHEtdGFiLS1mdWxsJyA6ICcnKVxuICAgICsgKHByb3BzLm5vQ2FwcyA9PT0gdHJ1ZSB8fCAkdGFicy50YWJQcm9wcy52YWx1ZS5ub0NhcHMgPT09IHRydWUgPyAnIHEtdGFiLS1uby1jYXBzJyA6ICcnKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcgcS1mb2N1c2FibGUgcS1ob3ZlcmFibGUgY3Vyc29yLXBvaW50ZXInKVxuICAgICsgKHJvdXRlRGF0YSAhPT0gdm9pZCAwID8gcm91dGVEYXRhLmxpbmtDbGFzcy52YWx1ZSA6ICcnKVxuICApXG5cbiAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgJ3EtdGFiX19jb250ZW50IHNlbGYtc3RyZXRjaCBmbGV4LWNlbnRlciByZWxhdGl2ZS1wb3NpdGlvbiBxLWFuY2hvci0tc2tpcCBub24tc2VsZWN0YWJsZSAnXG4gICAgKyAoJHRhYnMudGFiUHJvcHMudmFsdWUuaW5saW5lTGFiZWwgPT09IHRydWUgPyAncm93IG5vLXdyYXAgcS10YWJfX2NvbnRlbnQtLWlubGluZScgOiAnY29sdW1uJylcbiAgICArIChwcm9wcy5jb250ZW50Q2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuY29udGVudENsYXNzIH1gIDogJycpXG4gIClcblxuICBjb25zdCB0YWJJbmRleCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAoXG4gICAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlXG4gICAgICB8fCAkdGFicy5oYXNGb2N1cy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgfHwgKGlzQWN0aXZlLnZhbHVlID09PSBmYWxzZSAmJiAkdGFicy5oYXNBY3RpdmVUYWIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuICAgICAgPyAtMVxuICAgICAgOiBwcm9wcy50YWJpbmRleCB8fCAwXG4gICkpXG5cbiAgZnVuY3Rpb24gb25DbGljayAoZSwga2V5Ym9hcmQpIHtcbiAgICBpZiAoa2V5Ym9hcmQgIT09IHRydWUgJiYgYmx1clRhcmdldFJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgYmx1clRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIC8vIHdlIHNob3VsZCBoaW5kZXIgbmF0aXZlIG5hdmlnYXRpb24gdGhvdWdoXG4gICAgICBpZiAocm91dGVEYXRhICE9PSB2b2lkIDAgJiYgcm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIGRvIHdlIGhhdmUgYSBRVGFiP1xuICAgIGlmIChyb3V0ZURhdGEgPT09IHZvaWQgMCkge1xuICAgICAgJHRhYnMudXBkYXRlTW9kZWwoeyBuYW1lOiBwcm9wcy5uYW1lIH0pXG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAocm91dGVEYXRhLmhhc1JvdXRlckxpbmsudmFsdWUgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGdvID0gKG9wdHMgPSB7fSkgPT4ge1xuICAgICAgICAvLyBpZiByZXF1aXJpbmcgdG8gZ28gdG8gYW5vdGhlciByb3V0ZSwgdGhlbiB3ZVxuICAgICAgICAvLyBsZXQgdGhlIFFUYWJzIHJvdXRlIHdhdGNoZXIgZG8gaXRzIGpvYixcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGRpcmVjdGx5IHNlbGVjdCB0aGlzXG4gICAgICAgIGxldCBoYXJkRXJyb3JcbiAgICAgICAgY29uc3QgcmVxSWQgPSBvcHRzLnRvID09PSB2b2lkIDAgfHwgaXNEZWVwRXF1YWwob3B0cy50bywgcHJvcHMudG8pID09PSB0cnVlXG4gICAgICAgICAgPyAoJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIgPSB1aWQoKSlcbiAgICAgICAgICA6IG51bGxcblxuICAgICAgICByZXR1cm4gcm91dGVEYXRhLm5hdmlnYXRlVG9Sb3V0ZXJMaW5rKGUsIHsgLi4ub3B0cywgcmV0dXJuUm91dGVyRXJyb3I6IHRydWUgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHsgaGFyZEVycm9yID0gZXJyIH0pXG4gICAgICAgICAgLnRoZW4oc29mdEVycm9yID0+IHtcbiAgICAgICAgICAgIGlmIChyZXFJZCA9PT0gJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIpIHtcbiAgICAgICAgICAgICAgJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIgPSBmYWxzZVxuXG4gICAgICAgICAgICAgIC8vIGlmIHdlIGRvbid0IGhhdmUgYW55IGhhcmQgZXJyb3JzIG9yIGFueSBzb2Z0IGVycm9ycywgZXhjZXB0IGZvclxuICAgICAgICAgICAgICAvLyB3aGVuIG5hdmlnYXRpbmcgdG8gdGhlIHNhbWUgcm91dGUgKG9uIGFsbCBvdGhlciBzb2Z0IGVycm9ycyxcbiAgICAgICAgICAgICAgLy8gbGlrZSB3aGVuIG5hdmlnYXRpb24gd2FzIGFib3J0ZWQgaW4gYSBuYXYgZ3VhcmQsIHdlIGRvbid0IGFjdGl2YXRlIHRoaXMgdGFiKVxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaGFyZEVycm9yID09PSB2b2lkIDAgJiYgKFxuICAgICAgICAgICAgICAgICAgc29mdEVycm9yID09PSB2b2lkIDBcbiAgICAgICAgICAgICAgICAgIHx8IHNvZnRFcnJvci5tZXNzYWdlLnN0YXJ0c1dpdGgoJ0F2b2lkZWQgcmVkdW5kYW50IG5hdmlnYXRpb24nKSA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgJHRhYnMudXBkYXRlTW9kZWwoeyBuYW1lOiBwcm9wcy5uYW1lIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdHMucmV0dXJuUm91dGVyRXJyb3IgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhcmRFcnJvciAhPT0gdm9pZCAwID8gUHJvbWlzZS5yZWplY3QoaGFyZEVycm9yKSA6IHNvZnRFcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIGVtaXQoJ2NsaWNrJywgZSwgZ28pXG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUgJiYgZ28oKVxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbWl0KCdjbGljaycsIGUpXG4gIH1cblxuICBmdW5jdGlvbiBvbktleWRvd24gKGUpIHtcbiAgICBpZiAoaXNLZXlDb2RlKGUsIFsgMTMsIDMyIF0pKSB7XG4gICAgICBvbkNsaWNrKGUsIHRydWUpXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgc2hvdWxkSWdub3JlS2V5KGUpICE9PSB0cnVlXG4gICAgICAmJiBlLmtleUNvZGUgPj0gMzVcbiAgICAgICYmIGUua2V5Q29kZSA8PSA0MFxuICAgICAgJiYgZS5hbHRLZXkgIT09IHRydWVcbiAgICAgICYmIGUubWV0YUtleSAhPT0gdHJ1ZVxuICAgICkge1xuICAgICAgJHRhYnMub25LYmROYXZpZ2F0ZShlLmtleUNvZGUsIHByb3h5LiRlbCkgPT09IHRydWUgJiYgc3RvcEFuZFByZXZlbnQoZSlcbiAgICB9XG5cbiAgICBlbWl0KCdrZXlkb3duJywgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgIGNvbnN0XG4gICAgICBuYXJyb3cgPSAkdGFicy50YWJQcm9wcy52YWx1ZS5uYXJyb3dJbmRpY2F0b3IsXG4gICAgICBjb250ZW50ID0gW10sXG4gICAgICBpbmRpY2F0b3IgPSBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogdGFiSW5kaWNhdG9yUmVmLFxuICAgICAgICBjbGFzczogW1xuICAgICAgICAgICdxLXRhYl9faW5kaWNhdG9yJyxcbiAgICAgICAgICAkdGFicy50YWJQcm9wcy52YWx1ZS5pbmRpY2F0b3JDbGFzc1xuICAgICAgICBdXG4gICAgICB9KVxuXG4gICAgcHJvcHMuaWNvbiAhPT0gdm9pZCAwICYmIGNvbnRlbnQucHVzaChcbiAgICAgIGgoUUljb24sIHtcbiAgICAgICAgY2xhc3M6ICdxLXRhYl9faWNvbicsXG4gICAgICAgIG5hbWU6IHByb3BzLmljb25cbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMubGFiZWwgIT09IHZvaWQgMCAmJiBjb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWJfX2xhYmVsJyB9LCBwcm9wcy5sYWJlbClcbiAgICApXG5cbiAgICBwcm9wcy5hbGVydCAhPT0gZmFsc2UgJiYgY29udGVudC5wdXNoKFxuICAgICAgcHJvcHMuYWxlcnRJY29uICE9PSB2b2lkIDBcbiAgICAgICAgPyBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYl9fYWxlcnQtaWNvbicsXG4gICAgICAgICAgY29sb3I6IHByb3BzLmFsZXJ0ICE9PSB0cnVlXG4gICAgICAgICAgICA/IHByb3BzLmFsZXJ0XG4gICAgICAgICAgICA6IHZvaWQgMCxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5hbGVydEljb25cbiAgICAgICAgfSlcbiAgICAgICAgOiBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYl9fYWxlcnQnXG4gICAgICAgICAgICArIChwcm9wcy5hbGVydCAhPT0gdHJ1ZSA/IGAgdGV4dC0keyBwcm9wcy5hbGVydCB9YCA6ICcnKVxuICAgICAgICB9KVxuICAgIClcblxuICAgIG5hcnJvdyA9PT0gdHJ1ZSAmJiBjb250ZW50LnB1c2goaW5kaWNhdG9yKVxuXG4gICAgY29uc3Qgbm9kZSA9IFtcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLWZvY3VzLWhlbHBlcicsIHRhYmluZGV4OiAtMSwgcmVmOiBibHVyVGFyZ2V0UmVmIH0pLFxuICAgICAgaCgnZGl2JywgeyBjbGFzczogaW5uZXJDbGFzcy52YWx1ZSB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIGNvbnRlbnQpKVxuICAgIF1cblxuICAgIG5hcnJvdyA9PT0gZmFsc2UgJiYgbm9kZS5wdXNoKGluZGljYXRvcilcblxuICAgIHJldHVybiBub2RlXG4gIH1cblxuICBjb25zdCB0YWJEYXRhID0ge1xuICAgIG5hbWU6IGNvbXB1dGVkKCgpID0+IHByb3BzLm5hbWUpLFxuICAgIHJvb3RSZWYsXG4gICAgdGFiSW5kaWNhdG9yUmVmLFxuICAgIHJvdXRlRGF0YVxuICB9XG5cbiAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAkdGFicy51bnJlZ2lzdGVyVGFiKHRhYkRhdGEpXG4gIH0pXG5cbiAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAkdGFicy5yZWdpc3RlclRhYih0YWJEYXRhKVxuICB9KVxuXG4gIGZ1bmN0aW9uIHJlbmRlclRhYiAodGFnLCBjdXN0b21EYXRhKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgdGFiaW5kZXg6IHRhYkluZGV4LnZhbHVlLFxuICAgICAgcm9sZTogJ3RhYicsXG4gICAgICAnYXJpYS1zZWxlY3RlZCc6IGlzQWN0aXZlLnZhbHVlID09PSB0cnVlID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgICdhcmlhLWRpc2FibGVkJzogcHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6IHZvaWQgMCxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBvbktleWRvd24sXG4gICAgICAuLi5jdXN0b21EYXRhXG4gICAgfVxuXG4gICAgcmV0dXJuIHdpdGhEaXJlY3RpdmVzKFxuICAgICAgaCh0YWcsIGRhdGEsIGdldENvbnRlbnQoKSksXG4gICAgICBbIFsgUmlwcGxlLCByaXBwbGUudmFsdWUgXSBdXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHsgcmVuZGVyVGFiLCAkdGFicyB9XG59XG4iLCJpbXBvcnQgdXNlVGFiLCB7IHVzZVRhYlByb3BzLCB1c2VUYWJFbWl0cyB9IGZyb20gJy4vdXNlLXRhYi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFiJyxcblxuICBwcm9wczogdXNlVGFiUHJvcHMsXG5cbiAgZW1pdHM6IHVzZVRhYkVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyByZW5kZXJUYWIgfSA9IHVzZVRhYihwcm9wcywgc2xvdHMsIGVtaXQpXG4gICAgcmV0dXJuICgpID0+IHJlbmRlclRhYignZGl2JylcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBnZXRDdXJyZW50SW5zdGFuY2UsIHByb3ZpZGUgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgdXNlVGljayBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10aWNrLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGltZW91dC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgdGFic0tleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcbmltcG9ydCB7IHJ0bEhhc1Njcm9sbEJ1ZyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcnRsLmpzJ1xuXG5mdW5jdGlvbiBnZXRJbmRpY2F0b3JDbGFzcyAoY29sb3IsIHRvcCwgdmVydGljYWwpIHtcbiAgY29uc3QgcG9zID0gdmVydGljYWwgPT09IHRydWVcbiAgICA/IFsgJ2xlZnQnLCAncmlnaHQnIF1cbiAgICA6IFsgJ3RvcCcsICdib3R0b20nIF1cblxuICByZXR1cm4gYGFic29sdXRlLSR7IHRvcCA9PT0gdHJ1ZSA/IHBvc1sgMCBdIDogcG9zWyAxIF0gfSR7IGNvbG9yID8gYCB0ZXh0LSR7IGNvbG9yIH1gIDogJycgfWBcbn1cblxuY29uc3QgYWxpZ25WYWx1ZXMgPSBbICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCcsICdqdXN0aWZ5JyBdXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFicycsXG5cbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiBbIE51bWJlciwgU3RyaW5nIF0sXG5cbiAgICBhbGlnbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2NlbnRlcicsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gYWxpZ25WYWx1ZXMuaW5jbHVkZXModilcbiAgICB9LFxuICAgIGJyZWFrcG9pbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDYwMFxuICAgIH0sXG5cbiAgICB2ZXJ0aWNhbDogQm9vbGVhbixcbiAgICBzaHJpbms6IEJvb2xlYW4sXG4gICAgc3RyZXRjaDogQm9vbGVhbixcblxuICAgIGFjdGl2ZUNsYXNzOiBTdHJpbmcsXG4gICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICBhY3RpdmVCZ0NvbG9yOiBTdHJpbmcsXG4gICAgaW5kaWNhdG9yQ29sb3I6IFN0cmluZyxcbiAgICBsZWZ0SWNvbjogU3RyaW5nLFxuICAgIHJpZ2h0SWNvbjogU3RyaW5nLFxuXG4gICAgb3V0c2lkZUFycm93czogQm9vbGVhbixcbiAgICBtb2JpbGVBcnJvd3M6IEJvb2xlYW4sXG5cbiAgICBzd2l0Y2hJbmRpY2F0b3I6IEJvb2xlYW4sXG5cbiAgICBuYXJyb3dJbmRpY2F0b3I6IEJvb2xlYW4sXG4gICAgaW5saW5lTGFiZWw6IEJvb2xlYW4sXG4gICAgbm9DYXBzOiBCb29sZWFuLFxuXG4gICAgZGVuc2U6IEJvb2xlYW4sXG5cbiAgICBjb250ZW50Q2xhc3M6IFN0cmluZyxcblxuICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogWyBGdW5jdGlvbiwgQXJyYXkgXVxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgeyByZWdpc3RlclRpY2s6IHJlZ2lzdGVyU2Nyb2xsVGljayB9ID0gdXNlVGljaygpXG4gICAgY29uc3QgeyByZWdpc3RlclRpY2s6IHJlZ2lzdGVyVXBkYXRlQXJyb3dzVGljayB9ID0gdXNlVGljaygpXG4gICAgY29uc3QgeyByZWdpc3RlclRpY2s6IHJlZ2lzdGVyQW5pbWF0ZVRpY2sgfSA9IHVzZVRpY2soKVxuXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQ6IHJlZ2lzdGVyRm9jdXNUaW1lb3V0LCByZW1vdmVUaW1lb3V0OiByZW1vdmVGb2N1c1RpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0OiByZWdpc3RlclNjcm9sbFRvVGFiVGltZW91dCwgcmVtb3ZlVGltZW91dDogcmVtb3ZlU2Nyb2xsVG9UYWJUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBjb250ZW50UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBjdXJyZW50TW9kZWwgPSByZWYocHJvcHMubW9kZWxWYWx1ZSlcbiAgICBjb25zdCBzY3JvbGxhYmxlID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGxlZnRBcnJvdyA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSByZWYoZmFsc2UpXG4gICAgY29uc3QganVzdGlmeSA9IHJlZihmYWxzZSlcblxuICAgIGNvbnN0IHRhYkRhdGFMaXN0ID0gW11cbiAgICBjb25zdCB0YWJEYXRhTGlzdExlbiA9IHJlZigwKVxuICAgIGNvbnN0IGhhc0ZvY3VzID0gcmVmKGZhbHNlKVxuXG4gICAgbGV0IGFuaW1hdGVUaW1lciwgc2Nyb2xsVGltZXIsIHVud2F0Y2hSb3V0ZVxuXG4gICAgY29uc3QgdGFiUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYWN0aXZlQ2xhc3M6IHByb3BzLmFjdGl2ZUNsYXNzLFxuICAgICAgYWN0aXZlQ29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yLFxuICAgICAgYWN0aXZlQmdDb2xvcjogcHJvcHMuYWN0aXZlQmdDb2xvcixcbiAgICAgIGluZGljYXRvckNsYXNzOiBnZXRJbmRpY2F0b3JDbGFzcyhcbiAgICAgICAgcHJvcHMuaW5kaWNhdG9yQ29sb3IsXG4gICAgICAgIHByb3BzLnN3aXRjaEluZGljYXRvcixcbiAgICAgICAgcHJvcHMudmVydGljYWxcbiAgICAgICksXG4gICAgICBuYXJyb3dJbmRpY2F0b3I6IHByb3BzLm5hcnJvd0luZGljYXRvcixcbiAgICAgIGlubGluZUxhYmVsOiBwcm9wcy5pbmxpbmVMYWJlbCxcbiAgICAgIG5vQ2FwczogcHJvcHMubm9DYXBzXG4gICAgfSkpXG5cbiAgICBjb25zdCBoYXNBY3RpdmVUYWIgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBsZW4gPSB0YWJEYXRhTGlzdExlbi52YWx1ZVxuICAgICAgY29uc3QgdmFsID0gY3VycmVudE1vZGVsLnZhbHVlXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHRhYkRhdGFMaXN0WyBpIF0ubmFtZS52YWx1ZSA9PT0gdmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgY29uc3QgYWxpZ25DbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGFsaWduID0gc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICdsZWZ0J1xuICAgICAgICA6IChqdXN0aWZ5LnZhbHVlID09PSB0cnVlID8gJ2p1c3RpZnknIDogcHJvcHMuYWxpZ24pXG5cbiAgICAgIHJldHVybiBgcS10YWJzX19jb250ZW50LS1hbGlnbi0keyBhbGlnbiB9YFxuICAgIH0pXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRhYnMgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyBgIHEtdGFicy0tJHsgc2Nyb2xsYWJsZS52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJ25vdC0nIH1zY3JvbGxhYmxlYFxuICAgICAgKyBgIHEtdGFicy0tJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnIH1gXG4gICAgICArIGAgcS10YWJzX19hcnJvd3MtLSR7IHByb3BzLm91dHNpZGVBcnJvd3MgPT09IHRydWUgPyAnb3V0c2lkZScgOiAnaW5zaWRlJyB9YFxuICAgICAgKyBgIHEtdGFicy0tbW9iaWxlLXdpdGgkeyBwcm9wcy5tb2JpbGVBcnJvd3MgPT09IHRydWUgPyAnJyA6ICdvdXQnIH0tYXJyb3dzYFxuICAgICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtdGFicy0tZGVuc2UnIDogJycpXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgICArIChwcm9wcy5zdHJldGNoID09PSB0cnVlID8gJyBzZWxmLXN0cmV0Y2gnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgaW5uZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10YWJzX19jb250ZW50IHNjcm9sbC0tbW9iaWxlIHJvdyBuby13cmFwIGl0ZW1zLWNlbnRlciBzZWxmLXN0cmV0Y2ggaGlkZS1zY3JvbGxiYXIgcmVsYXRpdmUtcG9zaXRpb24gJ1xuICAgICAgKyBhbGlnbkNsYXNzLnZhbHVlXG4gICAgICArIChwcm9wcy5jb250ZW50Q2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuY29udGVudENsYXNzIH1gIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgZG9tUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICA/IHsgY29udGFpbmVyOiAnaGVpZ2h0JywgY29udGVudDogJ29mZnNldEhlaWdodCcsIHNjcm9sbDogJ3Njcm9sbEhlaWdodCcgfVxuICAgICAgICA6IHsgY29udGFpbmVyOiAnd2lkdGgnLCBjb250ZW50OiAnb2Zmc2V0V2lkdGgnLCBzY3JvbGw6ICdzY3JvbGxXaWR0aCcgfVxuICAgICkpXG5cbiAgICBjb25zdCBpc1JUTCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnZlcnRpY2FsICE9PSB0cnVlICYmICRxLmxhbmcucnRsID09PSB0cnVlKVxuICAgIGNvbnN0IHJ0bFBvc0NvcnJlY3Rpb24gPSBjb21wdXRlZCgoKSA9PiBydGxIYXNTY3JvbGxCdWcgPT09IGZhbHNlICYmIGlzUlRMLnZhbHVlID09PSB0cnVlKVxuXG4gICAgd2F0Y2goaXNSVEwsIHVwZGF0ZUFycm93cylcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIG5hbWUgPT4ge1xuICAgICAgdXBkYXRlTW9kZWwoeyBuYW1lLCBzZXRDdXJyZW50OiB0cnVlLCBza2lwRW1pdDogdHJ1ZSB9KVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5vdXRzaWRlQXJyb3dzLCByZWNhbGN1bGF0ZVNjcm9sbClcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsICh7IG5hbWUsIHNldEN1cnJlbnQsIHNraXBFbWl0IH0pIHtcbiAgICAgIGlmIChjdXJyZW50TW9kZWwudmFsdWUgIT09IG5hbWUpIHtcbiAgICAgICAgaWYgKHNraXBFbWl0ICE9PSB0cnVlICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBuYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNldEN1cnJlbnQgPT09IHRydWVcbiAgICAgICAgICB8fCBwcm9wc1sgJ29uVXBkYXRlOm1vZGVsVmFsdWUnIF0gPT09IHZvaWQgMFxuICAgICAgICApIHtcbiAgICAgICAgICBhbmltYXRlKGN1cnJlbnRNb2RlbC52YWx1ZSwgbmFtZSlcbiAgICAgICAgICBjdXJyZW50TW9kZWwudmFsdWUgPSBuYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNhbGN1bGF0ZVNjcm9sbCAoKSB7XG4gICAgICByZWdpc3RlclNjcm9sbFRpY2soKCkgPT4ge1xuICAgICAgICB1cGRhdGVDb250YWluZXIoe1xuICAgICAgICAgIHdpZHRoOiByb290UmVmLnZhbHVlLm9mZnNldFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogcm9vdFJlZi52YWx1ZS5vZmZzZXRIZWlnaHRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQ29udGFpbmVyIChkb21TaXplKSB7XG4gICAgICAvLyBpdCBjYW4gYmUgY2FsbGVkIGZhc3RlciB0aGFuIGNvbXBvbmVudCBiZWluZyBpbml0aWFsaXplZFxuICAgICAgLy8gc28gd2UgbmVlZCB0byBwcm90ZWN0IGFnYWluc3QgdGhhdCBjYXNlXG4gICAgICAvLyAob25lIGV4YW1wbGUgb2Ygc3VjaCBjYXNlIGlzIHRoZSBkb2NzIHJlbGVhc2Ugbm90ZXMgcGFnZSlcbiAgICAgIGlmIChkb21Qcm9wcy52YWx1ZSA9PT0gdm9pZCAwIHx8IGNvbnRlbnRSZWYudmFsdWUgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgc2l6ZSA9IGRvbVNpemVbIGRvbVByb3BzLnZhbHVlLmNvbnRhaW5lciBdLFxuICAgICAgICBzY3JvbGxTaXplID0gTWF0aC5taW4oXG4gICAgICAgICAgY29udGVudFJlZi52YWx1ZVsgZG9tUHJvcHMudmFsdWUuc2Nyb2xsIF0sXG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnJlZHVjZS5jYWxsKFxuICAgICAgICAgICAgY29udGVudFJlZi52YWx1ZS5jaGlsZHJlbixcbiAgICAgICAgICAgIChhY2MsIGVsKSA9PiBhY2MgKyAoZWxbIGRvbVByb3BzLnZhbHVlLmNvbnRlbnQgXSB8fCAwKSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHNjcm9sbCA9IHNpemUgPiAwICYmIHNjcm9sbFNpemUgPiBzaXplIC8vIHdoZW4gdGhlcmUgaXMgbm8gdGFiLCBpbiBDaHJvbWUsIHNpemUgPT09IDAgYW5kIHNjcm9sbFNpemUgPT09IDFcblxuICAgICAgc2Nyb2xsYWJsZS52YWx1ZSA9IHNjcm9sbFxuXG4gICAgICAvLyBBcnJvd3MgbmVlZCB0byBiZSB1cGRhdGVkIGV2ZW4gaWYgdGhlIHNjcm9sbCBzdGF0dXMgd2FzIGFscmVhZHkgdHJ1ZVxuICAgICAgc2Nyb2xsID09PSB0cnVlICYmIHJlZ2lzdGVyVXBkYXRlQXJyb3dzVGljayh1cGRhdGVBcnJvd3MpXG5cbiAgICAgIGp1c3RpZnkudmFsdWUgPSBzaXplIDwgcGFyc2VJbnQocHJvcHMuYnJlYWtwb2ludCwgMTApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSAob2xkTmFtZSwgbmV3TmFtZSkge1xuICAgICAgY29uc3RcbiAgICAgICAgb2xkVGFiID0gb2xkTmFtZSAhPT0gdm9pZCAwICYmIG9sZE5hbWUgIT09IG51bGwgJiYgb2xkTmFtZSAhPT0gJydcbiAgICAgICAgICA/IHRhYkRhdGFMaXN0LmZpbmQodGFiID0+IHRhYi5uYW1lLnZhbHVlID09PSBvbGROYW1lKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgbmV3VGFiID0gbmV3TmFtZSAhPT0gdm9pZCAwICYmIG5ld05hbWUgIT09IG51bGwgJiYgbmV3TmFtZSAhPT0gJydcbiAgICAgICAgICA/IHRhYkRhdGFMaXN0LmZpbmQodGFiID0+IHRhYi5uYW1lLnZhbHVlID09PSBuZXdOYW1lKVxuICAgICAgICAgIDogbnVsbFxuXG4gICAgICBpZiAob2xkVGFiICYmIG5ld1RhYikge1xuICAgICAgICBjb25zdFxuICAgICAgICAgIG9sZEVsID0gb2xkVGFiLnRhYkluZGljYXRvclJlZi52YWx1ZSxcbiAgICAgICAgICBuZXdFbCA9IG5ld1RhYi50YWJJbmRpY2F0b3JSZWYudmFsdWVcblxuICAgICAgICBjbGVhclRpbWVvdXQoYW5pbWF0ZVRpbWVyKVxuXG4gICAgICAgIG9sZEVsLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgb2xkRWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG4gICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSdcbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNmb3JtID0gJ25vbmUnXG5cbiAgICAgICAgY29uc3RcbiAgICAgICAgICBvbGRQb3MgPSBvbGRFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICBuZXdQb3MgPSBuZXdFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zZm9ybSA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgPyBgdHJhbnNsYXRlM2QoMCwkeyBvbGRQb3MudG9wIC0gbmV3UG9zLnRvcCB9cHgsMCkgc2NhbGUzZCgxLCR7IG5ld1Bvcy5oZWlnaHQgPyBvbGRQb3MuaGVpZ2h0IC8gbmV3UG9zLmhlaWdodCA6IDEgfSwxKWBcbiAgICAgICAgICA6IGB0cmFuc2xhdGUzZCgkeyBvbGRQb3MubGVmdCAtIG5ld1Bvcy5sZWZ0IH1weCwwLDApIHNjYWxlM2QoJHsgbmV3UG9zLndpZHRoID8gb2xkUG9zLndpZHRoIC8gbmV3UG9zLndpZHRoIDogMSB9LDEsMSlgXG5cbiAgICAgICAgLy8gYWxsb3cgc2NvcGUgdXBkYXRlcyB0byBraWNrIGluIChRUm91dGVUYWIgbmVlZHMgbW9yZSB0aW1lKVxuICAgICAgICByZWdpc3RlckFuaW1hdGVUaWNrKCgpID0+IHtcbiAgICAgICAgICBhbmltYXRlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIC4yNXMgY3ViaWMtYmV6aWVyKC40LCAwLCAuMiwgMSknXG4gICAgICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcbiAgICAgICAgICB9LCA3MClcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKG5ld1RhYiAmJiBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHNjcm9sbFRvVGFiRWwobmV3VGFiLnJvb3RSZWYudmFsdWUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9UYWJFbCAoZWwpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIHsgbGVmdCwgd2lkdGgsIHRvcCwgaGVpZ2h0IH0gPSBjb250ZW50UmVmLnZhbHVlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBuZXdQb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG4gICAgICBsZXQgb2Zmc2V0ID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyBuZXdQb3MudG9wIC0gdG9wIDogbmV3UG9zLmxlZnQgLSBsZWZ0XG5cbiAgICAgIGlmIChvZmZzZXQgPCAwKSB7XG4gICAgICAgIGNvbnRlbnRSZWYudmFsdWVbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCcgXSArPSBNYXRoLmZsb29yKG9mZnNldClcbiAgICAgICAgdXBkYXRlQXJyb3dzKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIG9mZnNldCArPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IG5ld1Bvcy5oZWlnaHQgLSBoZWlnaHQgOiBuZXdQb3Mud2lkdGggLSB3aWR0aFxuICAgICAgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgY29udGVudFJlZi52YWx1ZVsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JyBdICs9IE1hdGguY2VpbChvZmZzZXQpXG4gICAgICAgIHVwZGF0ZUFycm93cygpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlQXJyb3dzICgpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50UmVmLnZhbHVlXG4gICAgICBpZiAoY29udGVudCA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBjb25zdFxuICAgICAgICByZWN0ID0gY29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgcG9zID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyBjb250ZW50LnNjcm9sbFRvcCA6IE1hdGguYWJzKGNvbnRlbnQuc2Nyb2xsTGVmdClcblxuICAgICAgaWYgKGlzUlRMLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxlZnRBcnJvdy52YWx1ZSA9IE1hdGguY2VpbChwb3MgKyByZWN0LndpZHRoKSA8IGNvbnRlbnQuc2Nyb2xsV2lkdGggLSAxXG4gICAgICAgIHJpZ2h0QXJyb3cudmFsdWUgPSBwb3MgPiAwXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGVmdEFycm93LnZhbHVlID0gcG9zID4gMFxuICAgICAgICByaWdodEFycm93LnZhbHVlID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICA/IE1hdGguY2VpbChwb3MgKyByZWN0LmhlaWdodCkgPCBjb250ZW50LnNjcm9sbEhlaWdodFxuICAgICAgICAgIDogTWF0aC5jZWlsKHBvcyArIHJlY3Qud2lkdGgpIDwgY29udGVudC5zY3JvbGxXaWR0aFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1TY3JvbGxUbyAodmFsdWUpIHtcbiAgICAgIHN0b3BBbmltU2Nyb2xsKClcbiAgICAgIHNjcm9sbFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsVG93YXJkcyh2YWx1ZSkgPT09IHRydWUpIHtcbiAgICAgICAgICBzdG9wQW5pbVNjcm9sbCgpXG4gICAgICAgIH1cbiAgICAgIH0sIDUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG9TdGFydCAoKSB7XG4gICAgICBhbmltU2Nyb2xsVG8ocnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIDogMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb0VuZCAoKSB7XG4gICAgICBhbmltU2Nyb2xsVG8ocnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wQW5pbVNjcm9sbCAoKSB7XG4gICAgICBjbGVhckludGVydmFsKHNjcm9sbFRpbWVyKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2JkTmF2aWdhdGUgKGtleUNvZGUsIGZyb21FbCkge1xuICAgICAgY29uc3QgdGFicyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChcbiAgICAgICAgY29udGVudFJlZi52YWx1ZS5jaGlsZHJlbixcbiAgICAgICAgZWwgPT4gZWwgPT09IGZyb21FbCB8fCAoZWwubWF0Y2hlcyAmJiBlbC5tYXRjaGVzKCcucS10YWIucS1mb2N1c2FibGUnKSA9PT0gdHJ1ZSlcbiAgICAgIClcblxuICAgICAgY29uc3QgbGVuID0gdGFicy5sZW5ndGhcbiAgICAgIGlmIChsZW4gPT09IDApIHsgcmV0dXJuIH1cblxuICAgICAgaWYgKGtleUNvZGUgPT09IDM2KSB7IC8vIEhvbWVcbiAgICAgICAgc2Nyb2xsVG9UYWJFbCh0YWJzWyAwIF0pXG4gICAgICAgIHRhYnNbIDAgXS5mb2N1cygpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gMzUpIHsgLy8gRW5kXG4gICAgICAgIHNjcm9sbFRvVGFiRWwodGFic1sgbGVuIC0gMSBdKVxuICAgICAgICB0YWJzWyBsZW4gLSAxIF0uZm9jdXMoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXJQcmV2ID0ga2V5Q29kZSA9PT0gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gMzggLyogQXJyb3dVcCAqLyA6IDM3IC8qIEFycm93TGVmdCAqLylcbiAgICAgIGNvbnN0IGRpck5leHQgPSBrZXlDb2RlID09PSAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyA0MCAvKiBBcnJvd0Rvd24gKi8gOiAzOSAvKiBBcnJvd1JpZ2h0ICovKVxuXG4gICAgICBjb25zdCBkaXIgPSBkaXJQcmV2ID09PSB0cnVlID8gLTEgOiAoZGlyTmV4dCA9PT0gdHJ1ZSA/IDEgOiB2b2lkIDApXG5cbiAgICAgIGlmIChkaXIgIT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCBydGxEaXIgPSBpc1JUTC52YWx1ZSA9PT0gdHJ1ZSA/IC0xIDogMVxuICAgICAgICBjb25zdCBpbmRleCA9IHRhYnMuaW5kZXhPZihmcm9tRWwpICsgZGlyICogcnRsRGlyXG5cbiAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBsZW4pIHtcbiAgICAgICAgICBzY3JvbGxUb1RhYkVsKHRhYnNbIGluZGV4IF0pXG4gICAgICAgICAgdGFic1sgaW5kZXggXS5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gbGV0J3Mgc3BlZWQgdXAgZXhlY3V0aW9uIG9mIHRpbWUtc2Vuc2l0aXZlIHNjcm9sbFRvd2FyZHMoKVxuICAgIC8vIHdpdGggYSBjb21wdXRlZCB2YXJpYWJsZSBieSBkaXJlY3RseSBhcHBseWluZyB0aGUgbWluaW1hbFxuICAgIC8vIG51bWJlciBvZiBpbnN0cnVjdGlvbnMgb24gZ2V0L3NldCBmdW5jdGlvbnNcbiAgICBjb25zdCBwb3NGbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHJ0bFBvc0NvcnJlY3Rpb24udmFsdWUgPT09IHRydWVcbiAgICAgICAgPyB7IGdldDogY29udGVudCA9PiBNYXRoLmFicyhjb250ZW50LnNjcm9sbExlZnQpLCBzZXQ6IChjb250ZW50LCBwb3MpID0+IHsgY29udGVudC5zY3JvbGxMZWZ0ID0gLXBvcyB9IH1cbiAgICAgICAgOiAoXG4gICAgICAgICAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICA/IHsgZ2V0OiBjb250ZW50ID0+IGNvbnRlbnQuc2Nyb2xsVG9wLCBzZXQ6IChjb250ZW50LCBwb3MpID0+IHsgY29udGVudC5zY3JvbGxUb3AgPSBwb3MgfSB9XG4gICAgICAgICAgICAgIDogeyBnZXQ6IGNvbnRlbnQgPT4gY29udGVudC5zY3JvbGxMZWZ0LCBzZXQ6IChjb250ZW50LCBwb3MpID0+IHsgY29udGVudC5zY3JvbGxMZWZ0ID0gcG9zIH0gfVxuICAgICAgICAgIClcbiAgICApKVxuXG4gICAgZnVuY3Rpb24gc2Nyb2xsVG93YXJkcyAodmFsdWUpIHtcbiAgICAgIGNvbnN0XG4gICAgICAgIGNvbnRlbnQgPSBjb250ZW50UmVmLnZhbHVlLFxuICAgICAgICB7IGdldCwgc2V0IH0gPSBwb3NGbi52YWx1ZVxuXG4gICAgICBsZXRcbiAgICAgICAgZG9uZSA9IGZhbHNlLFxuICAgICAgICBwb3MgPSBnZXQoY29udGVudClcblxuICAgICAgY29uc3QgZGlyZWN0aW9uID0gdmFsdWUgPCBwb3MgPyAtMSA6IDFcblxuICAgICAgcG9zICs9IGRpcmVjdGlvbiAqIDVcblxuICAgICAgaWYgKHBvcyA8IDApIHtcbiAgICAgICAgZG9uZSA9IHRydWVcbiAgICAgICAgcG9zID0gMFxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoXG4gICAgICAgIChkaXJlY3Rpb24gPT09IC0xICYmIHBvcyA8PSB2YWx1ZSlcbiAgICAgICAgfHwgKGRpcmVjdGlvbiA9PT0gMSAmJiBwb3MgPj0gdmFsdWUpXG4gICAgICApIHtcbiAgICAgICAgZG9uZSA9IHRydWVcbiAgICAgICAgcG9zID0gdmFsdWVcbiAgICAgIH1cblxuICAgICAgc2V0KGNvbnRlbnQsIHBvcylcbiAgICAgIHVwZGF0ZUFycm93cygpXG5cbiAgICAgIHJldHVybiBkb25lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzUXVlcnlJbmNsdWRlZCAodGFyZ2V0UXVlcnksIG1hdGNoaW5nUXVlcnkpIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIHRhcmdldFF1ZXJ5KSB7XG4gICAgICAgIGlmICh0YXJnZXRRdWVyeVsga2V5IF0gIT09IG1hdGNoaW5nUXVlcnlbIGtleSBdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBkbyBub3QgdXNlIGRpcmVjdGx5OyB1c2UgdmVyaWZ5Um91dGVNb2RlbCgpIGluc3RlYWRcbiAgICBmdW5jdGlvbiB1cGRhdGVBY3RpdmVSb3V0ZSAoKSB7XG4gICAgICBsZXQgbmFtZSA9IG51bGwsIGJlc3RTY29yZSA9IHsgbWF0Y2hlZExlbjogMCwgcXVlcnlEaWZmOiA5OTk5LCBocmVmTGVuOiAwIH1cblxuICAgICAgY29uc3QgbGlzdCA9IHRhYkRhdGFMaXN0LmZpbHRlcih0YWIgPT4gdGFiLnJvdXRlRGF0YSAhPT0gdm9pZCAwICYmIHRhYi5yb3V0ZURhdGEuaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgIGNvbnN0IHsgaGFzaDogY3VycmVudEhhc2gsIHF1ZXJ5OiBjdXJyZW50UXVlcnkgfSA9IHByb3h5LiRyb3V0ZVxuICAgICAgY29uc3QgY3VycmVudFF1ZXJ5TGVuID0gT2JqZWN0LmtleXMoY3VycmVudFF1ZXJ5KS5sZW5ndGhcblxuICAgICAgLy8gVnVlIFJvdXRlciBkb2VzIG5vdCBrZWVwIGFjY291bnQgb2YgaGFzaCAmIHF1ZXJ5IHdoZW4gbWF0Y2hpbmdcbiAgICAgIC8vIHNvIHdlJ3JlIGRvaW5nIHRoaXMgYXMgd2VsbFxuXG4gICAgICBmb3IgKGNvbnN0IHRhYiBvZiBsaXN0KSB7XG4gICAgICAgIGNvbnN0IGV4YWN0ID0gdGFiLnJvdXRlRGF0YS5leGFjdC52YWx1ZSA9PT0gdHJ1ZVxuXG4gICAgICAgIGlmICh0YWIucm91dGVEYXRhWyBleGFjdCA9PT0gdHJ1ZSA/ICdsaW5rSXNFeGFjdEFjdGl2ZScgOiAnbGlua0lzQWN0aXZlJyBdLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgLy8gaXQgY2Fubm90IG1hdGNoIGFueXRoaW5nIGFzIGl0J3Mgbm90IGFjdGl2ZSBub3IgZXhhY3QtYWN0aXZlXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgaGFzaCwgcXVlcnksIG1hdGNoZWQsIGhyZWYgfSA9IHRhYi5yb3V0ZURhdGEucmVzb2x2ZWRMaW5rLnZhbHVlXG4gICAgICAgIGNvbnN0IHF1ZXJ5TGVuID0gT2JqZWN0LmtleXMocXVlcnkpLmxlbmd0aFxuXG4gICAgICAgIGlmIChleGFjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlmIChoYXNoICE9PSBjdXJyZW50SGFzaCkge1xuICAgICAgICAgICAgLy8gaXQncyBzZXQgdG8gZXhhY3QgYnV0IGl0IGRvZXNuJ3QgbWF0Y2hlcyB0aGUgaGFzaFxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBxdWVyeUxlbiAhPT0gY3VycmVudFF1ZXJ5TGVuXG4gICAgICAgICAgICB8fCBoYXNRdWVyeUluY2x1ZGVkKGN1cnJlbnRRdWVyeSwgcXVlcnkpID09PSBmYWxzZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gaXQncyBzZXQgdG8gZXhhY3QgYnV0IGl0IGRvZXNuJ3QgbWF0Y2hlcyB0aGUgcXVlcnlcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8geWV5LCB3ZSBmb3VuZCB0aGUgcGVyZmVjdCBtYXRjaCAocm91dGUgKyBoYXNoICsgcXVlcnkpXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNoICE9PSAnJyAmJiBoYXNoICE9PSBjdXJyZW50SGFzaCkge1xuICAgICAgICAgIC8vIGl0IGhhcyBoYXNoIGFuZCBpdCBkb2Vzbid0IG1hdGNoZXNcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHF1ZXJ5TGVuICE9PSAwXG4gICAgICAgICAgJiYgaGFzUXVlcnlJbmNsdWRlZChxdWVyeSwgY3VycmVudFF1ZXJ5KSA9PT0gZmFsc2VcbiAgICAgICAgKSB7XG4gICAgICAgICAgLy8gaXQgaGFzIHF1ZXJ5IGFuZCBpdCBkb2Vzbid0IGluY2x1ZGVzIHRoZSBjdXJyZW50IG9uZVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdTY29yZSA9IHtcbiAgICAgICAgICBtYXRjaGVkTGVuOiBtYXRjaGVkLmxlbmd0aCxcbiAgICAgICAgICBxdWVyeURpZmY6IGN1cnJlbnRRdWVyeUxlbiAtIHF1ZXJ5TGVuLFxuICAgICAgICAgIGhyZWZMZW46IGhyZWYubGVuZ3RoIC0gaGFzaC5sZW5ndGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdTY29yZS5tYXRjaGVkTGVuID4gYmVzdFNjb3JlLm1hdGNoZWRMZW4pIHtcbiAgICAgICAgICAvLyBpdCBtYXRjaGVzIG1vcmUgcm91dGVzIHNvIGl0J3MgbW9yZSBzcGVjaWZpYyBzbyB3ZSBzZXQgaXQgYXMgY3VycmVudCBjaGFtcGlvblxuICAgICAgICAgIG5hbWUgPSB0YWIubmFtZS52YWx1ZVxuICAgICAgICAgIGJlc3RTY29yZSA9IG5ld1Njb3JlXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdTY29yZS5tYXRjaGVkTGVuICE9PSBiZXN0U2NvcmUubWF0Y2hlZExlbikge1xuICAgICAgICAgIC8vIGl0IG1hdGNoZXMgbGVzcyByb3V0ZXMgdGhhbiB0aGUgY3VycmVudCBjaGFtcGlvbiBzbyB3ZSBkaXNjYXJkIGl0XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdTY29yZS5xdWVyeURpZmYgPCBiZXN0U2NvcmUucXVlcnlEaWZmKSB7XG4gICAgICAgICAgLy8gcXVlcnkgaXMgY2xvc2VyIHRvIHRoZSBjdXJyZW50IG9uZSBzbyB3ZSBzZXQgaXQgYXMgY3VycmVudCBjaGFtcGlvblxuICAgICAgICAgIG5hbWUgPSB0YWIubmFtZS52YWx1ZVxuICAgICAgICAgIGJlc3RTY29yZSA9IG5ld1Njb3JlXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U2NvcmUucXVlcnlEaWZmICE9PSBiZXN0U2NvcmUucXVlcnlEaWZmKSB7XG4gICAgICAgICAgLy8gaXQgbWF0Y2hlcyBsZXNzIHJvdXRlcyB0aGFuIHRoZSBjdXJyZW50IGNoYW1waW9uIHNvIHdlIGRpc2NhcmQgaXRcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Njb3JlLmhyZWZMZW4gPiBiZXN0U2NvcmUuaHJlZkxlbikge1xuICAgICAgICAgIC8vIGhyZWYgaXMgbGVuZ3RoaWVyIHNvIGl0J3MgbW9yZSBzcGVjaWZpYyBzbyB3ZSBzZXQgaXQgYXMgY3VycmVudCBjaGFtcGlvblxuICAgICAgICAgIG5hbWUgPSB0YWIubmFtZS52YWx1ZVxuICAgICAgICAgIGJlc3RTY29yZSA9IG5ld1Njb3JlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBuYW1lID09PSBudWxsXG4gICAgICAgICYmIHRhYkRhdGFMaXN0LnNvbWUodGFiID0+IHRhYi5yb3V0ZURhdGEgPT09IHZvaWQgMCAmJiB0YWIubmFtZS52YWx1ZSA9PT0gY3VycmVudE1vZGVsLnZhbHVlKSA9PT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIC8vIHdlIHNob3VsZG4ndCBpbnRlcmZlcmUgaWYgbm9uLXJvdXRlIHRhYiBpcyBhY3RpdmVcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZU1vZGVsKHsgbmFtZSwgc2V0Q3VycmVudDogdHJ1ZSB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZSkge1xuICAgICAgcmVtb3ZlRm9jdXNUaW1lb3V0KClcblxuICAgICAgaWYgKFxuICAgICAgICBoYXNGb2N1cy52YWx1ZSAhPT0gdHJ1ZVxuICAgICAgICAmJiByb290UmVmLnZhbHVlICE9PSBudWxsXG4gICAgICAgICYmIGUudGFyZ2V0XG4gICAgICAgICYmIHR5cGVvZiBlLnRhcmdldC5jbG9zZXN0ID09PSAnZnVuY3Rpb24nXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgdGFiID0gZS50YXJnZXQuY2xvc2VzdCgnLnEtdGFiJylcblxuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGlzIGNvbnRhaW5lZCBieSBhIFFUYWIvUVJvdXRlVGFiXG4gICAgICAgIC8vIChpdCBtaWdodCBiZSBvdGhlciBlbGVtZW50cyBmb2N1c2VkLCBsaWtlIGFkZGl0aW9uYWwgUUJ0bilcbiAgICAgICAgaWYgKHRhYiAmJiByb290UmVmLnZhbHVlLmNvbnRhaW5zKHRhYikgPT09IHRydWUpIHtcbiAgICAgICAgICBoYXNGb2N1cy52YWx1ZSA9IHRydWVcbiAgICAgICAgICBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlICYmIHNjcm9sbFRvVGFiRWwodGFiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c291dCAoKSB7XG4gICAgICByZWdpc3RlckZvY3VzVGltZW91dCgoKSA9PiB7IGhhc0ZvY3VzLnZhbHVlID0gZmFsc2UgfSwgMzApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmVyaWZ5Um91dGVNb2RlbCAoKSB7XG4gICAgICBpZiAoJHRhYnMuYXZvaWRSb3V0ZVdhdGNoZXIgPT09IGZhbHNlKSB7XG4gICAgICAgIHJlZ2lzdGVyU2Nyb2xsVG9UYWJUaW1lb3V0KHVwZGF0ZUFjdGl2ZVJvdXRlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZVNjcm9sbFRvVGFiVGltZW91dCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2F0Y2hSb3V0ZSAoKSB7XG4gICAgICBpZiAodW53YXRjaFJvdXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgY29uc3QgdW53YXRjaCA9IHdhdGNoKCgpID0+IHByb3h5LiRyb3V0ZS5mdWxsUGF0aCwgdmVyaWZ5Um91dGVNb2RlbClcbiAgICAgICAgdW53YXRjaFJvdXRlID0gKCkgPT4ge1xuICAgICAgICAgIHVud2F0Y2goKVxuICAgICAgICAgIHVud2F0Y2hSb3V0ZSA9IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJUYWIgKHRhYkRhdGEpIHtcbiAgICAgIHRhYkRhdGFMaXN0LnB1c2godGFiRGF0YSlcbiAgICAgIHRhYkRhdGFMaXN0TGVuLnZhbHVlKytcblxuICAgICAgcmVjYWxjdWxhdGVTY3JvbGwoKVxuXG4gICAgICAvLyBpZiBpdCdzIGEgUVRhYiBvciB3ZSBkb24ndCBoYXZlIFZ1ZSBSb3V0ZXJcbiAgICAgIGlmICh0YWJEYXRhLnJvdXRlRGF0YSA9PT0gdm9pZCAwIHx8IHByb3h5LiRyb3V0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIC8vIHdlIHNob3VsZCBwb3NpdGlvbiB0byB0aGUgY3VycmVudGx5IGFjdGl2ZSB0YWIgKGlmIGFueSlcbiAgICAgICAgcmVnaXN0ZXJTY3JvbGxUb1RhYlRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN1cnJlbnRNb2RlbC52YWx1ZVxuICAgICAgICAgICAgY29uc3QgbmV3VGFiID0gdmFsdWUgIT09IHZvaWQgMCAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gJydcbiAgICAgICAgICAgICAgPyB0YWJEYXRhTGlzdC5maW5kKHRhYiA9PiB0YWIubmFtZS52YWx1ZSA9PT0gdmFsdWUpXG4gICAgICAgICAgICAgIDogbnVsbFxuXG4gICAgICAgICAgICBuZXdUYWIgJiYgc2Nyb2xsVG9UYWJFbChuZXdUYWIucm9vdFJlZi52YWx1ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBlbHNlIGlmIGl0J3MgYSBRUm91dGVUYWIgd2l0aCBhIHZhbGlkIGxpbmtcbiAgICAgIGVsc2Uge1xuICAgICAgICAvLyBzdGFydCB3YXRjaGluZyByb3V0ZVxuICAgICAgICB3YXRjaFJvdXRlKClcblxuICAgICAgICBpZiAodGFiRGF0YS5yb3V0ZURhdGEuaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHZlcmlmeVJvdXRlTW9kZWwoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5yZWdpc3RlclRhYiAodGFiRGF0YSkge1xuICAgICAgdGFiRGF0YUxpc3Quc3BsaWNlKHRhYkRhdGFMaXN0LmluZGV4T2YodGFiRGF0YSksIDEpXG4gICAgICB0YWJEYXRhTGlzdExlbi52YWx1ZS0tXG5cbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcblxuICAgICAgaWYgKHVud2F0Y2hSb3V0ZSAhPT0gdm9pZCAwICYmIHRhYkRhdGEucm91dGVEYXRhICE9PSB2b2lkIDApIHtcbiAgICAgICAgLy8gdW53YXRjaCByb3V0ZSBpZiB3ZSBkb24ndCBoYXZlIGFueSBRUm91dGVUYWJzIGxlZnRcbiAgICAgICAgaWYgKHRhYkRhdGFMaXN0LmV2ZXJ5KHRhYiA9PiB0YWIucm91dGVEYXRhID09PSB2b2lkIDApID09PSB0cnVlKSB7XG4gICAgICAgICAgdW53YXRjaFJvdXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoZW4gdXBkYXRlIG1vZGVsXG4gICAgICAgIHZlcmlmeVJvdXRlTW9kZWwoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0ICR0YWJzID0ge1xuICAgICAgY3VycmVudE1vZGVsLFxuICAgICAgdGFiUHJvcHMsXG4gICAgICBoYXNGb2N1cyxcbiAgICAgIGhhc0FjdGl2ZVRhYixcblxuICAgICAgcmVnaXN0ZXJUYWIsXG4gICAgICB1bnJlZ2lzdGVyVGFiLFxuXG4gICAgICB2ZXJpZnlSb3V0ZU1vZGVsLFxuICAgICAgdXBkYXRlTW9kZWwsXG4gICAgICBvbktiZE5hdmlnYXRlLFxuXG4gICAgICBhdm9pZFJvdXRlV2F0Y2hlcjogZmFsc2UgLy8gZmFsc2UgfCBzdHJpbmcgKHVpZClcbiAgICB9XG5cbiAgICBwcm92aWRlKHRhYnNLZXksICR0YWJzKVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQoYW5pbWF0ZVRpbWVyKVxuICAgICAgc3RvcEFuaW1TY3JvbGwoKVxuICAgICAgdW53YXRjaFJvdXRlICE9PSB2b2lkIDAgJiYgdW53YXRjaFJvdXRlKClcbiAgICB9XG5cbiAgICBsZXQgaGFkUm91dGVXYXRjaGVyXG5cbiAgICBvbkJlZm9yZVVubW91bnQoY2xlYW51cClcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaGFkUm91dGVXYXRjaGVyID0gdW53YXRjaFJvdXRlICE9PSB2b2lkIDBcbiAgICAgIGNsZWFudXAoKVxuICAgIH0pXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBoYWRSb3V0ZVdhdGNoZXIgPT09IHRydWUgJiYgd2F0Y2hSb3V0ZSgpXG4gICAgICByZWNhbGN1bGF0ZVNjcm9sbCgpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICByZWY6IHJvb3RSZWYsXG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICByb2xlOiAndGFibGlzdCcsXG4gICAgICAgIG9uRm9jdXNpbixcbiAgICAgICAgb25Gb2N1c291dFxuICAgICAgfSwgW1xuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwgeyBvblJlc2l6ZTogdXBkYXRlQ29udGFpbmVyIH0pLFxuXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IGNvbnRlbnRSZWYsXG4gICAgICAgICAgY2xhc3M6IGlubmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgb25TY3JvbGw6IHVwZGF0ZUFycm93c1xuICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSksXG5cbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJzX19hcnJvdyBxLXRhYnNfX2Fycm93LS1sZWZ0IGFic29sdXRlIHEtdGFiX19pY29uJ1xuICAgICAgICAgICAgKyAobGVmdEFycm93LnZhbHVlID09PSB0cnVlID8gJycgOiAnIHEtdGFic19fYXJyb3ctLWZhZGVkJyksXG4gICAgICAgICAgbmFtZTogcHJvcHMubGVmdEljb24gfHwgJHEuaWNvblNldC50YWJzWyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd1cCcgOiAnbGVmdCcgXSxcbiAgICAgICAgICBvbk1vdXNlZG93blBhc3NpdmU6IHNjcm9sbFRvU3RhcnQsXG4gICAgICAgICAgb25Ub3VjaHN0YXJ0UGFzc2l2ZTogc2Nyb2xsVG9TdGFydCxcbiAgICAgICAgICBvbk1vdXNldXBQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbCxcbiAgICAgICAgICBvbk1vdXNlbGVhdmVQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbCxcbiAgICAgICAgICBvblRvdWNoZW5kUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGxcbiAgICAgICAgfSksXG5cbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiAncS10YWJzX19hcnJvdyBxLXRhYnNfX2Fycm93LS1yaWdodCBhYnNvbHV0ZSBxLXRhYl9faWNvbidcbiAgICAgICAgICAgICsgKHJpZ2h0QXJyb3cudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgcS10YWJzX19hcnJvdy0tZmFkZWQnKSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5yaWdodEljb24gfHwgJHEuaWNvblNldC50YWJzWyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdkb3duJyA6ICdyaWdodCcgXSxcbiAgICAgICAgICBvbk1vdXNlZG93blBhc3NpdmU6IHNjcm9sbFRvRW5kLFxuICAgICAgICAgIG9uVG91Y2hzdGFydFBhc3NpdmU6IHNjcm9sbFRvRW5kLFxuICAgICAgICAgIG9uTW91c2V1cFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uTW91c2VsZWF2ZVBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uVG91Y2hlbmRQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbFxuICAgICAgICB9KVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9wbHVnaW5zL1BsYXRmb3JtLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldE1vZGlmaWVyRGlyZWN0aW9ucywgc2hvdWxkU3RhcnQgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL3RvdWNoLmpzJ1xuaW1wb3J0IHsgYWRkRXZ0LCBjbGVhbkV2dCwgcG9zaXRpb24sIGxlZnRDbGljaywgc3RvcEFuZFByZXZlbnQsIHByZXZlbnREcmFnZ2FibGUsIG5vb3AgfSBmcm9tICcuLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGNsZWFyU2VsZWN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9zZWxlY3Rpb24uanMnXG5pbXBvcnQgZ2V0U1NSUHJvcHMgZnJvbSAnLi4vdXRpbHMvcHJpdmF0ZS9ub29wLXNzci1kaXJlY3RpdmUtdHJhbnNmb3JtLmpzJ1xuXG5mdW5jdGlvbiBwYXJzZUFyZyAoYXJnKSB7XG4gIC8vIGRlbHRhIChtaW4gdmVsb2NpdHkgLS0gZGlzdCAvIHRpbWUpXG4gIC8vIG1vYmlsZSBtaW4gZGlzdGFuY2Ugb24gZmlyc3QgbW92ZVxuICAvLyBkZXNrdG9wIG1pbiBkaXN0YW5jZSB1bnRpbCBkZWNpZGluZyBpZiBpdCdzIGEgc3dpcGUgb3Igbm90XG4gIGNvbnN0IGRhdGEgPSBbIDAuMDYsIDYsIDUwIF1cblxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgYXJnLmxlbmd0aCkge1xuICAgIGFyZy5zcGxpdCgnOicpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHYgPSBwYXJzZUZsb2F0KHZhbClcbiAgICAgIHYgJiYgKGRhdGFbIGluZGV4IF0gPSB2KVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZGF0YVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAndG91Y2gtc3dpcGUnLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ3RvdWNoLXN3aXBlJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCB7IHZhbHVlLCBhcmcsIG1vZGlmaWVycyB9KSB7XG4gICAgICAgIC8vIGVhcmx5IHJldHVybiwgd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlICE9PSB0cnVlICYmIGNsaWVudC5oYXMudG91Y2ggIT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vdXNlQ2FwdHVyZSA9IG1vZGlmaWVycy5tb3VzZUNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJ1xuXG4gICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICBoYW5kbGVyOiB2YWx1ZSxcbiAgICAgICAgICBzZW5zaXRpdml0eTogcGFyc2VBcmcoYXJnKSxcbiAgICAgICAgICBkaXJlY3Rpb246IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhtb2RpZmllcnMpLFxuXG4gICAgICAgICAgbm9vcCxcblxuICAgICAgICAgIG1vdXNlU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSAmJiBsZWZ0Q2xpY2soZXZ0KSkge1xuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgJ21vdmUnLCBgbm90UGFzc2l2ZSR7IG1vdXNlQ2FwdHVyZSB9YCBdLFxuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZXVwJywgJ2VuZCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBjdHguc3RhcnQoZXZ0LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICB0b3VjaFN0YXJ0IChldnQpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRTdGFydChldnQsIGN0eCkpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZ0LnRhcmdldFxuICAgICAgICAgICAgICBhZGRFdnQoY3R4LCAndGVtcCcsIFtcbiAgICAgICAgICAgICAgICBbIHRhcmdldCwgJ3RvdWNobW92ZScsICdtb3ZlJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hjYW5jZWwnLCAnZW5kJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdLFxuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2hlbmQnLCAnZW5kJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHN0YXJ0IChldnQsIG1vdXNlRXZlbnQpIHtcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIHRydWUpXG5cbiAgICAgICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKGV2dClcblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0ge1xuICAgICAgICAgICAgICB4OiBwb3MubGVmdCxcbiAgICAgICAgICAgICAgeTogcG9zLnRvcCxcbiAgICAgICAgICAgICAgdGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAgICAgICAgbW91c2U6IG1vdXNlRXZlbnQgPT09IHRydWUsXG4gICAgICAgICAgICAgIGRpcjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgbW92ZSAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGlyICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBzdG9wQW5kUHJldmVudChldnQpXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKSAtIGN0eC5ldmVudC50aW1lXG5cbiAgICAgICAgICAgIGlmICh0aW1lID09PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICBwb3MgPSBwb3NpdGlvbihldnQpLFxuICAgICAgICAgICAgICBkaXN0WCA9IHBvcy5sZWZ0IC0gY3R4LmV2ZW50LngsXG4gICAgICAgICAgICAgIGFic1ggPSBNYXRoLmFicyhkaXN0WCksXG4gICAgICAgICAgICAgIGRpc3RZID0gcG9zLnRvcCAtIGN0eC5ldmVudC55LFxuICAgICAgICAgICAgICBhYnNZID0gTWF0aC5hYnMoZGlzdFkpXG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQubW91c2UgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgaWYgKGFic1ggPCBjdHguc2Vuc2l0aXZpdHlbIDEgXSAmJiBhYnNZIDwgY3R4LnNlbnNpdGl2aXR5WyAxIF0pIHtcbiAgICAgICAgICAgICAgICBjdHguZW5kKGV2dClcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYWJzWCA8IGN0eC5zZW5zaXRpdml0eVsgMiBdICYmIGFic1kgPCBjdHguc2Vuc2l0aXZpdHlbIDIgXSkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgdmVsWCA9IGFic1ggLyB0aW1lLFxuICAgICAgICAgICAgICB2ZWxZID0gYWJzWSAvIHRpbWVcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPCBhYnNZXG4gICAgICAgICAgICAgICYmIGFic1ggPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWSA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9IGRpc3RZIDwgMCA/ICd1cCcgOiAnZG93bidcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLmhvcml6b250YWwgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA+IGFic1lcbiAgICAgICAgICAgICAgJiYgYWJzWSA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxYID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gZGlzdFggPCAwID8gJ2xlZnQnIDogJ3JpZ2h0J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24udXAgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IGFic1lcbiAgICAgICAgICAgICAgJiYgZGlzdFkgPCAwXG4gICAgICAgICAgICAgICYmIGFic1ggPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWSA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9ICd1cCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLmRvd24gPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IGFic1lcbiAgICAgICAgICAgICAgJiYgZGlzdFkgPiAwXG4gICAgICAgICAgICAgICYmIGFic1ggPCAxMDBcbiAgICAgICAgICAgICAgJiYgdmVsWSA+IGN0eC5zZW5zaXRpdml0eVsgMCBdXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY3R4LmV2ZW50LmRpciA9ICdkb3duJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24ubGVmdCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYID4gYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WCA8IDBcbiAgICAgICAgICAgICAgJiYgYWJzWSA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxYID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ2xlZnQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5yaWdodCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYID4gYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WCA+IDBcbiAgICAgICAgICAgICAgJiYgYWJzWSA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxYID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ3JpZ2h0J1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3R4LmV2ZW50LmRpciAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICAgICAgICAgIGlmIChjdHguZXZlbnQubW91c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXBvaW50ZXItZXZlbnRzLS1jaGlsZHJlbicpXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdub24tc2VsZWN0YWJsZScpXG4gICAgICAgICAgICAgICAgY2xlYXJTZWxlY3Rpb24oKVxuXG4gICAgICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCA9IHdpdGhEZWxheSA9PiB7XG4gICAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gdm9pZCAwXG5cbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm9uLXNlbGVjdGFibGUnKVxuXG4gICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaWYgKHdpdGhEZWxheSA9PT0gdHJ1ZSkgeyBzZXRUaW1lb3V0KHJlbW92ZSwgNTApIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgeyByZW1vdmUoKSB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY3R4LmhhbmRsZXIoe1xuICAgICAgICAgICAgICAgIGV2dCxcbiAgICAgICAgICAgICAgICB0b3VjaDogY3R4LmV2ZW50Lm1vdXNlICE9PSB0cnVlLFxuICAgICAgICAgICAgICAgIG1vdXNlOiBjdHguZXZlbnQubW91c2UsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBjdHguZXZlbnQuZGlyLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiB0aW1lLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiB7XG4gICAgICAgICAgICAgICAgICB4OiBhYnNYLFxuICAgICAgICAgICAgICAgICAgeTogYWJzWVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjdHguZW5kKGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgZW5kIChldnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xlYW5FdnQoY3R4LCAndGVtcCcpXG4gICAgICAgICAgICBjbGllbnQuaXMuZmlyZWZveCA9PT0gdHJ1ZSAmJiBwcmV2ZW50RHJhZ2dhYmxlKGVsLCBmYWxzZSlcbiAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKHRydWUpXG4gICAgICAgICAgICBldnQgIT09IHZvaWQgMCAmJiBjdHguZXZlbnQuZGlyICE9PSBmYWxzZSAmJiBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgICAgICAgIGN0eC5ldmVudCA9IHZvaWQgMFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLl9fcXRvdWNoc3dpcGUgPSBjdHhcblxuICAgICAgICBpZiAobW9kaWZpZXJzLm1vdXNlID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gYWNjb3VudCBmb3IgVU1EIHRvbyB3aGVyZSBtb2RpZmllcnMgd2lsbCBiZSBsb3dlcmNhc2VkIHRvIHdvcmtcbiAgICAgICAgICBjb25zdCBjYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSB8fCBtb2RpZmllcnMubW91c2VjYXB0dXJlID09PSB0cnVlXG4gICAgICAgICAgICA/ICdDYXB0dXJlJ1xuICAgICAgICAgICAgOiAnJ1xuXG4gICAgICAgICAgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgICBbIGVsLCAnbW91c2Vkb3duJywgJ21vdXNlU3RhcnQnLCBgcGFzc2l2ZSR7IGNhcHR1cmUgfWAgXVxuICAgICAgICAgIF0pXG4gICAgICAgIH1cblxuICAgICAgICBjbGllbnQuaGFzLnRvdWNoID09PSB0cnVlICYmIGFkZEV2dChjdHgsICdtYWluJywgW1xuICAgICAgICAgIFsgZWwsICd0b3VjaHN0YXJ0JywgJ3RvdWNoU3RhcnQnLCBgcGFzc2l2ZSR7IG1vZGlmaWVycy5jYXB0dXJlID09PSB0cnVlID8gJ0NhcHR1cmUnIDogJycgfWAgXSxcbiAgICAgICAgICBbIGVsLCAndG91Y2htb3ZlJywgJ25vb3AnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0gLy8gY2Fubm90IGJlIHBhc3NpdmUgKGV4OiBpT1Mgc2Nyb2xsKVxuICAgICAgICBdKVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIGJpbmRpbmdzKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNoc3dpcGVcblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBpZiAoYmluZGluZ3Mub2xkVmFsdWUgIT09IGJpbmRpbmdzLnZhbHVlKSB7XG4gICAgICAgICAgICB0eXBlb2YgYmluZGluZ3MudmFsdWUgIT09ICdmdW5jdGlvbicgJiYgY3R4LmVuZCgpXG4gICAgICAgICAgICBjdHguaGFuZGxlciA9IGJpbmRpbmdzLnZhbHVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY3R4LmRpcmVjdGlvbiA9IGdldE1vZGlmaWVyRGlyZWN0aW9ucyhiaW5kaW5ncy5tb2RpZmllcnMpXG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGJlZm9yZVVubW91bnQgKGVsKSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IGVsLl9fcXRvdWNoc3dpcGVcblxuICAgICAgICBpZiAoY3R4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICdtYWluJylcbiAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcblxuICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgIT09IHZvaWQgMCAmJiBjdHguc3R5bGVDbGVhbnVwKClcblxuICAgICAgICAgIGRlbGV0ZSBlbC5fX3F0b3VjaHN3aXBlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4pXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpXG5cbiAgcmV0dXJuIHtcbiAgICBnZXRDYWNoZTogX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gICAgICA/IGZ1bmN0aW9uIChfLCBvYmopIHsgcmV0dXJuIG9iaiB9XG4gICAgICA6IGZ1bmN0aW9uIChrZXksIG9iaikge1xuICAgICAgICByZXR1cm4gY2FjaGVbIGtleSBdID09PSB2b2lkIDBcbiAgICAgICAgICA/IChjYWNoZVsga2V5IF0gPSBvYmopXG4gICAgICAgICAgOiBjYWNoZVsga2V5IF1cbiAgICAgIH0sXG5cbiAgICBnZXRDYWNoZVdpdGhGbjogX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gICAgICA/IGZ1bmN0aW9uIChfLCBmbikgeyByZXR1cm4gZm4oKSB9XG4gICAgICA6IGZ1bmN0aW9uIChrZXksIGZuKSB7XG4gICAgICAgIHJldHVybiBjYWNoZVsga2V5IF0gPT09IHZvaWQgMFxuICAgICAgICAgID8gKGNhY2hlWyBrZXkgXSA9IGZuKCkpXG4gICAgICAgICAgOiBjYWNoZVsga2V5IF1cbiAgICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UsIFRyYW5zaXRpb24sIEtlZXBBbGl2ZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFRvdWNoU3dpcGUgZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9Ub3VjaFN3aXBlLmpzJ1xuXG5pbXBvcnQgdXNlQ2FjaGUgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtY2FjaGUuanMnXG5cbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBnZXROb3JtYWxpemVkVk5vZGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS92bS5qcydcblxuZXhwb3J0IGNvbnN0IHVzZVBhbmVsQ2hpbGRQcm9wcyA9IHtcbiAgbmFtZTogeyByZXF1aXJlZDogdHJ1ZSB9LFxuICBkaXNhYmxlOiBCb29sZWFuXG59XG5cbmNvbnN0IFBhbmVsV3JhcHBlciA9IHtcbiAgc2V0dXAgKF8sIHsgc2xvdHMgfSkge1xuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogJ3EtcGFuZWwgc2Nyb2xsJyxcbiAgICAgIHJvbGU6ICd0YWJwYW5lbCdcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXNlUGFuZWxQcm9wcyA9IHtcbiAgbW9kZWxWYWx1ZToge1xuICAgIHJlcXVpcmVkOiB0cnVlXG4gIH0sXG5cbiAgYW5pbWF0ZWQ6IEJvb2xlYW4sXG4gIGluZmluaXRlOiBCb29sZWFuLFxuICBzd2lwZWFibGU6IEJvb2xlYW4sXG4gIHZlcnRpY2FsOiBCb29sZWFuLFxuXG4gIHRyYW5zaXRpb25QcmV2OiBTdHJpbmcsXG4gIHRyYW5zaXRpb25OZXh0OiBTdHJpbmcsXG4gIHRyYW5zaXRpb25EdXJhdGlvbjoge1xuICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICBkZWZhdWx0OiAzMDBcbiAgfSxcblxuICBrZWVwQWxpdmU6IEJvb2xlYW4sXG4gIGtlZXBBbGl2ZUluY2x1ZGU6IFsgU3RyaW5nLCBBcnJheSwgUmVnRXhwIF0sXG4gIGtlZXBBbGl2ZUV4Y2x1ZGU6IFsgU3RyaW5nLCBBcnJheSwgUmVnRXhwIF0sXG4gIGtlZXBBbGl2ZU1heDogTnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCB1c2VQYW5lbEVtaXRzID0gWyAndXBkYXRlOm1vZGVsVmFsdWUnLCAnYmVmb3JlVHJhbnNpdGlvbicsICd0cmFuc2l0aW9uJyBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgeyBwcm9wcywgZW1pdCwgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gIGNvbnN0IHsgZ2V0Q2FjaGVXaXRoRm4gfSA9IHVzZUNhY2hlKClcblxuICBsZXQgcGFuZWxzLCBmb3JjZWRQYW5lbFRyYW5zaXRpb25cblxuICBjb25zdCBwYW5lbEluZGV4ID0gcmVmKG51bGwpXG4gIGNvbnN0IHBhbmVsVHJhbnNpdGlvbiA9IHJlZihudWxsKVxuXG4gIGZ1bmN0aW9uIG9uU3dpcGUgKGV2dCkge1xuICAgIGNvbnN0IGRpciA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0J1xuICAgIGdvVG9QYW5lbEJ5T2Zmc2V0KChwcm94eS4kcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSkgKiAoZXZ0LmRpcmVjdGlvbiA9PT0gZGlyID8gMSA6IC0xKSlcbiAgfVxuXG4gIGNvbnN0IHBhbmVsRGlyZWN0aXZlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAvLyBpZiBwcm9wcy5zd2lwZWFibGVcbiAgICByZXR1cm4gWyBbXG4gICAgICBUb3VjaFN3aXBlLFxuICAgICAgb25Td2lwZSxcbiAgICAgIHZvaWQgMCxcbiAgICAgIHtcbiAgICAgICAgaG9yaXpvbnRhbDogcHJvcHMudmVydGljYWwgIT09IHRydWUsXG4gICAgICAgIHZlcnRpY2FsOiBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgICAgbW91c2U6IHRydWVcbiAgICAgIH1cbiAgICBdIF1cbiAgfSlcblxuICBjb25zdCB0cmFuc2l0aW9uUHJldiA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMudHJhbnNpdGlvblByZXYgfHwgYHNsaWRlLSR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2Rvd24nIDogJ3JpZ2h0JyB9YFxuICApXG5cbiAgY29uc3QgdHJhbnNpdGlvbk5leHQgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLnRyYW5zaXRpb25OZXh0IHx8IGBzbGlkZS0keyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd1cCcgOiAnbGVmdCcgfWBcbiAgKVxuXG4gIGNvbnN0IHRyYW5zaXRpb25TdHlsZSA9IGNvbXB1dGVkKFxuICAgICgpID0+IGAtLXEtdHJhbnNpdGlvbi1kdXJhdGlvbjogJHsgcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uIH1tc2BcbiAgKVxuXG4gIGNvbnN0IGNvbnRlbnRLZXkgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgdHlwZW9mIHByb3BzLm1vZGVsVmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwcm9wcy5tb2RlbFZhbHVlID09PSAnbnVtYmVyJ1xuICAgICAgPyBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICA6IFN0cmluZyhwcm9wcy5tb2RlbFZhbHVlKVxuICApKVxuXG4gIGNvbnN0IGtlZXBBbGl2ZVByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICBpbmNsdWRlOiBwcm9wcy5rZWVwQWxpdmVJbmNsdWRlLFxuICAgIGV4Y2x1ZGU6IHByb3BzLmtlZXBBbGl2ZUV4Y2x1ZGUsXG4gICAgbWF4OiBwcm9wcy5rZWVwQWxpdmVNYXhcbiAgfSkpXG5cbiAgY29uc3QgbmVlZHNVbmlxdWVLZWVwQWxpdmVXcmFwcGVyID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy5rZWVwQWxpdmVJbmNsdWRlICE9PSB2b2lkIDBcbiAgICB8fCBwcm9wcy5rZWVwQWxpdmVFeGNsdWRlICE9PSB2b2lkIDBcbiAgKVxuXG4gIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIChuZXdWYWwsIG9sZFZhbCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gaXNWYWxpZFBhbmVsTmFtZShuZXdWYWwpID09PSB0cnVlXG4gICAgICA/IGdldFBhbmVsSW5kZXgobmV3VmFsKVxuICAgICAgOiAtMVxuXG4gICAgaWYgKGZvcmNlZFBhbmVsVHJhbnNpdGlvbiAhPT0gdHJ1ZSkge1xuICAgICAgdXBkYXRlUGFuZWxUcmFuc2l0aW9uKFxuICAgICAgICBpbmRleCA9PT0gLTEgPyAwIDogKGluZGV4IDwgZ2V0UGFuZWxJbmRleChvbGRWYWwpID8gLTEgOiAxKVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwYW5lbEluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgcGFuZWxJbmRleC52YWx1ZSA9IGluZGV4XG4gICAgICBlbWl0KCdiZWZvcmVUcmFuc2l0aW9uJywgbmV3VmFsLCBvbGRWYWwpXG4gICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgIGVtaXQoJ3RyYW5zaXRpb24nLCBuZXdWYWwsIG9sZFZhbClcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIGZ1bmN0aW9uIG5leHRQYW5lbCAoKSB7IGdvVG9QYW5lbEJ5T2Zmc2V0KDEpIH1cbiAgZnVuY3Rpb24gcHJldmlvdXNQYW5lbCAoKSB7IGdvVG9QYW5lbEJ5T2Zmc2V0KC0xKSB9XG5cbiAgZnVuY3Rpb24gZ29Ub1BhbmVsIChuYW1lKSB7XG4gICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBuYW1lKVxuICB9XG5cbiAgZnVuY3Rpb24gaXNWYWxpZFBhbmVsTmFtZSAobmFtZSkge1xuICAgIHJldHVybiBuYW1lICE9PSB2b2lkIDAgJiYgbmFtZSAhPT0gbnVsbCAmJiBuYW1lICE9PSAnJ1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxJbmRleCAobmFtZSkge1xuICAgIHJldHVybiBwYW5lbHMuZmluZEluZGV4KHBhbmVsID0+IHtcbiAgICAgIHJldHVybiBwYW5lbC5wcm9wcy5uYW1lID09PSBuYW1lXG4gICAgICAgICYmIHBhbmVsLnByb3BzLmRpc2FibGUgIT09ICcnXG4gICAgICAgICYmIHBhbmVsLnByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RW5hYmxlZFBhbmVscyAoKSB7XG4gICAgcmV0dXJuIHBhbmVscy5maWx0ZXIocGFuZWwgPT4ge1xuICAgICAgcmV0dXJuIHBhbmVsLnByb3BzLmRpc2FibGUgIT09ICcnXG4gICAgICAgICYmIHBhbmVsLnByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUGFuZWxUcmFuc2l0aW9uIChkaXJlY3Rpb24pIHtcbiAgICBjb25zdCB2YWwgPSBkaXJlY3Rpb24gIT09IDAgJiYgcHJvcHMuYW5pbWF0ZWQgPT09IHRydWUgJiYgcGFuZWxJbmRleC52YWx1ZSAhPT0gLTFcbiAgICAgID8gJ3EtdHJhbnNpdGlvbi0tJyArIChkaXJlY3Rpb24gPT09IC0xID8gdHJhbnNpdGlvblByZXYudmFsdWUgOiB0cmFuc2l0aW9uTmV4dC52YWx1ZSlcbiAgICAgIDogbnVsbFxuXG4gICAgaWYgKHBhbmVsVHJhbnNpdGlvbi52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICBwYW5lbFRyYW5zaXRpb24udmFsdWUgPSB2YWxcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnb1RvUGFuZWxCeU9mZnNldCAoZGlyZWN0aW9uLCBzdGFydEluZGV4ID0gcGFuZWxJbmRleC52YWx1ZSkge1xuICAgIGxldCBpbmRleCA9IHN0YXJ0SW5kZXggKyBkaXJlY3Rpb25cblxuICAgIHdoaWxlIChpbmRleCA+IC0xICYmIGluZGV4IDwgcGFuZWxzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgb3B0ID0gcGFuZWxzWyBpbmRleCBdXG5cbiAgICAgIGlmIChcbiAgICAgICAgb3B0ICE9PSB2b2lkIDBcbiAgICAgICAgJiYgb3B0LnByb3BzLmRpc2FibGUgIT09ICcnXG4gICAgICAgICYmIG9wdC5wcm9wcy5kaXNhYmxlICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgdXBkYXRlUGFuZWxUcmFuc2l0aW9uKGRpcmVjdGlvbilcbiAgICAgICAgZm9yY2VkUGFuZWxUcmFuc2l0aW9uID0gdHJ1ZVxuICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG9wdC5wcm9wcy5uYW1lKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBmb3JjZWRQYW5lbFRyYW5zaXRpb24gPSBmYWxzZVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXggKz0gZGlyZWN0aW9uXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmluZmluaXRlID09PSB0cnVlICYmIHBhbmVscy5sZW5ndGggPiAwICYmIHN0YXJ0SW5kZXggIT09IC0xICYmIHN0YXJ0SW5kZXggIT09IHBhbmVscy5sZW5ndGgpIHtcbiAgICAgIGdvVG9QYW5lbEJ5T2Zmc2V0KGRpcmVjdGlvbiwgZGlyZWN0aW9uID09PSAtMSA/IHBhbmVscy5sZW5ndGggOiAtMSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW5lbEluZGV4ICgpIHtcbiAgICBjb25zdCBpbmRleCA9IGdldFBhbmVsSW5kZXgocHJvcHMubW9kZWxWYWx1ZSlcblxuICAgIGlmIChwYW5lbEluZGV4LnZhbHVlICE9PSBpbmRleCkge1xuICAgICAgcGFuZWxJbmRleC52YWx1ZSA9IGluZGV4XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhbmVsQ29udGVudENoaWxkICgpIHtcbiAgICBjb25zdCBwYW5lbCA9IGlzVmFsaWRQYW5lbE5hbWUocHJvcHMubW9kZWxWYWx1ZSkgPT09IHRydWVcbiAgICAgICYmIHVwZGF0ZVBhbmVsSW5kZXgoKVxuICAgICAgJiYgcGFuZWxzWyBwYW5lbEluZGV4LnZhbHVlIF1cblxuICAgIHJldHVybiBwcm9wcy5rZWVwQWxpdmUgPT09IHRydWVcbiAgICAgID8gW1xuICAgICAgICAgIGgoS2VlcEFsaXZlLCBrZWVwQWxpdmVQcm9wcy52YWx1ZSwgW1xuICAgICAgICAgICAgaChcbiAgICAgICAgICAgICAgbmVlZHNVbmlxdWVLZWVwQWxpdmVXcmFwcGVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBnZXRDYWNoZVdpdGhGbihjb250ZW50S2V5LnZhbHVlLCAoKSA9PiAoeyAuLi5QYW5lbFdyYXBwZXIsIG5hbWU6IGNvbnRlbnRLZXkudmFsdWUgfSkpXG4gICAgICAgICAgICAgICAgOiBQYW5lbFdyYXBwZXIsXG4gICAgICAgICAgICAgIHsga2V5OiBjb250ZW50S2V5LnZhbHVlLCBzdHlsZTogdHJhbnNpdGlvblN0eWxlLnZhbHVlIH0sXG4gICAgICAgICAgICAgICgpID0+IHBhbmVsXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgOiBbXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgY2xhc3M6ICdxLXBhbmVsIHNjcm9sbCcsXG4gICAgICAgICAgICBzdHlsZTogdHJhbnNpdGlvblN0eWxlLnZhbHVlLFxuICAgICAgICAgICAga2V5OiBjb250ZW50S2V5LnZhbHVlLFxuICAgICAgICAgICAgcm9sZTogJ3RhYnBhbmVsJ1xuICAgICAgICAgIH0sIFsgcGFuZWwgXSlcbiAgICAgICAgXVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxDb250ZW50ICgpIHtcbiAgICBpZiAocGFuZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzLmFuaW1hdGVkID09PSB0cnVlXG4gICAgICA/IFsgaChUcmFuc2l0aW9uLCB7IG5hbWU6IHBhbmVsVHJhbnNpdGlvbi52YWx1ZSB9LCBnZXRQYW5lbENvbnRlbnRDaGlsZCkgXVxuICAgICAgOiBnZXRQYW5lbENvbnRlbnRDaGlsZCgpXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW5lbHNMaXN0IChzbG90cykge1xuICAgIHBhbmVscyA9IGdldE5vcm1hbGl6ZWRWTm9kZXMoXG4gICAgICBoU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcbiAgICApLmZpbHRlcihcbiAgICAgIHBhbmVsID0+IHBhbmVsLnByb3BzICE9PSBudWxsXG4gICAgICAgICYmIHBhbmVsLnByb3BzLnNsb3QgPT09IHZvaWQgMFxuICAgICAgICAmJiBpc1ZhbGlkUGFuZWxOYW1lKHBhbmVsLnByb3BzLm5hbWUpID09PSB0cnVlXG4gICAgKVxuXG4gICAgcmV0dXJuIHBhbmVscy5sZW5ndGhcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFBhbmVscyAoKSB7XG4gICAgcmV0dXJuIHBhbmVsc1xuICB9XG5cbiAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICBuZXh0OiBuZXh0UGFuZWwsXG4gICAgcHJldmlvdXM6IHByZXZpb3VzUGFuZWwsXG4gICAgZ29UbzogZ29Ub1BhbmVsXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwYW5lbEluZGV4LFxuICAgIHBhbmVsRGlyZWN0aXZlcyxcblxuICAgIHVwZGF0ZVBhbmVsc0xpc3QsXG4gICAgdXBkYXRlUGFuZWxJbmRleCxcblxuICAgIGdldFBhbmVsQ29udGVudCxcbiAgICBnZXRFbmFibGVkUGFuZWxzLFxuICAgIGdldFBhbmVscyxcblxuICAgIGlzVmFsaWRQYW5lbE5hbWUsXG5cbiAgICBrZWVwQWxpdmVQcm9wcyxcbiAgICBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIsXG5cbiAgICBnb1RvUGFuZWxCeU9mZnNldCxcbiAgICBnb1RvUGFuZWwsXG5cbiAgICBuZXh0UGFuZWwsXG4gICAgcHJldmlvdXNQYW5lbFxuICB9XG59XG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB1c2VQYW5lbENoaWxkUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wYW5lbC5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYlBhbmVsJyxcblxuICBwcm9wczogdXNlUGFuZWxDaGlsZFByb3BzLFxuXG4gIHNldHVwIChfLCB7IHNsb3RzIH0pIHtcbiAgICByZXR1cm4gKCkgPT4gaCgnZGl2JywgeyBjbGFzczogJ3EtdGFiLXBhbmVsJywgcm9sZTogJ3RhYnBhbmVsJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgdXNlUGFuZWwsIHsgdXNlUGFuZWxQcm9wcywgdXNlUGFuZWxFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXBhbmVsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJQYW5lbHMnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlUGFuZWxQcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHNcbiAgfSxcblxuICBlbWl0czogdXNlUGFuZWxFbWl0cyxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCB2bS5wcm94eS4kcSlcblxuICAgIGNvbnN0IHsgdXBkYXRlUGFuZWxzTGlzdCwgZ2V0UGFuZWxDb250ZW50LCBwYW5lbERpcmVjdGl2ZXMgfSA9IHVzZVBhbmVsKClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGFiLXBhbmVscyBxLXBhbmVsLXBhcmVudCdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS10YWItcGFuZWxzLS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICApXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdXBkYXRlUGFuZWxzTGlzdChzbG90cylcblxuICAgICAgcmV0dXJuIGhEaXIoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sXG4gICAgICAgIGdldFBhbmVsQ29udGVudCgpLFxuICAgICAgICAncGFuJyxcbiAgICAgICAgcHJvcHMuc3dpcGVhYmxlLFxuICAgICAgICAoKSA9PiBwYW5lbERpcmVjdGl2ZXMudmFsdWVcbiAgICAgIClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgPlxuICAgIDxxLWNhcmQgYm9yZGVyZWQgY2xhc3M9XCJxLW10LWxnXCIgc3R5bGU9XCJ3aWR0aDogNzAwcHg7IG1heC13aWR0aDogODB2dzsgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMwLDMwLDMwKTsgXCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+U2V0dGluZ3M8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkIGNsYXNzPVwidHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICA8cS10YWJzXG5cbiAgICAgICAgICAgIHYtbW9kZWw9XCJ0YWJcIlxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIGFjdGl2ZS1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGluZGljYXRvci1jb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgYWxpZ249XCJqdXN0aWZ5XCJcbiAgICAgICAgICAgIG5hcnJvdy1pbmRpY2F0b3JcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS10YWIgbmFtZT1cImhvbWVwYWdlXCIgbGFiZWw9XCJIb21lcGFnZVwiIC8+XG4gICAgICAgICAgICA8cS10YWIgbmFtZT1cInF1ZXVlXCIgbGFiZWw9XCJRdWV1ZVwiIC8+XG4gICAgICAgICAgPC9xLXRhYnM+XG5cbiAgICAgICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgICAgIDxxLXRhYi1wYW5lbHMgdi1tb2RlbD1cInRhYlwiIGFuaW1hdGVkIGNsYXNzPVwidHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwiaG9tZXBhZ2VcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZCBjb2xcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtYWxsIHJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICBIb21lcGFnZSBNb2RlOlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwic2hhcGVcIiB2YWw9XCJJbmZpbml0ZSBTY3JvbGxcIiBsYWJlbD1cIkluZmluaXRlIFNjcm9sbFwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cInNoYXBlXCIgdmFsPVwiUGFnaW5hdGlvblwiIGxhYmVsPVwiUGFnaW5hdGlvblwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS10YWItcGFuZWw+XG5cbiAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwicXVldWVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtbWQgY29sXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hbGwgcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02IHRleHQtaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxheSBCdXR0b24gQmVoYXZpb3I6XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwic2hhcGVcIiB2YWw9XCJJbmZpbml0ZSBTY3JvbGxcIiBsYWJlbD1cIkluZmluaXRlIFNjcm9sbFwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJzaGFwZVwiIHZhbD1cIlBhZ2luYXRpb25cIiBsYWJlbD1cIlBhZ2luYXRpb25cIiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgIDwvcS10YWItcGFuZWxzPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnR9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdTZXR0aW5nc01vZGFsJ1xufSk7XG48L3NjcmlwdD5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuXG5jb25zdCB0YWIgPSByZWYoJycpXG5jb25zdCBzaGFwZSA9IHJlZignJylcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgICBwb3NpdGlvbj1cInRvcFwiXG4gID5cbiAgICA8cS1jYXJkIGJvcmRlcmVkIGNsYXNzPVwicS1tdC1sZ1wiIHN0eWxlPVwid2lkdGg6IDcwMHB4OyBtYXgtd2lkdGg6IDgwdnc7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsNjYsNjYsMC45Nyk7IFwiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPkFib3V0PC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPHEtY2FyZCBjbGFzcz1cInRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgPHEtdGFic1xuXG4gICAgICAgICAgICB2LW1vZGVsPVwidGFiXCJcbiAgICAgICAgICAgIGRlbnNlXG4gICAgICAgICAgICBhY3RpdmUtY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBpbmRpY2F0b3ItY29sb3I9XCJibHVlXCJcbiAgICAgICAgICAgIGFsaWduPVwianVzdGlmeVwiXG4gICAgICAgICAgICBuYXJyb3ctaW5kaWNhdG9yXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtdGFiIG5hbWU9XCJtZWRpYVwiIGxhYmVsPVwiTWVkaWFcIiAvPlxuICAgICAgICAgICAgPHEtdGFiIG5hbWU9XCJjb2RlXCIgbGFiZWw9XCJDb2RlXCIgLz5cbiAgICAgICAgICA8L3EtdGFicz5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICAgICAgPHEtdGFiLXBhbmVscyB2LW1vZGVsPVwidGFiXCIgYW5pbWF0ZWQgY2xhc3M9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+U291cmNlICYgQ3JlZGl0czwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vbnlhYS5zaS92aWV3LzE1NzA3MzBcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBvdmVybGluZT5NdXNpYyBGaWxlcyAmIENvbGxlY3Rpb248L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5bQ29ubm9yX0NaXSBUTE1DIHYyPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3Rod2lraS5jYy9cIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBvdmVybGluZT5NdXNpYyBNZXRhZGF0YTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPlRod2lraS5jYzwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuXG4gICAgICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cImNvZGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPlNvdXJjZTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zcXoyNjkvVGxtY0luZm9Qcm92aWRlclwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlRMTUMgRGF0YSBQcmVwcm9jZXNzb3I8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIFB5dGhvbjNcbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zcXoyNjkvVGxtY0luZm9Qcm92aWRlclwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlRMTUMgVGFnZ2VyIChUaHdpa2kpPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBQeXRob24zXG4gICAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3F6MjY5L211c2ljLXBsYXllclwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPkZyb250ZW5kPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjJcIj5WdWUuanMgMyArIENvbXBvc2l0aW9uIEFQSSArIFR5cGVzY3JpcHQgKyBRdWFzYXI8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NxejI2OS90bG1jLXBsYXllclwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPkJhY2tlbmQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPlZhcmlvdXM8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cInEtcHktc20gdHJhbnNwYXJlbnRcIj48L3Etc2VwYXJhdG9yPlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5BUEkgRXhwbG9yZXI8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPHEtbGlzdCBib3JkZXJlZCBzZXBhcmF0b3I+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdGFyZ2V0PVwiX2JsYW5rXCIgOmhyZWY9XCJtdXNpY0RhdGFTd2FnZ2VyVXJsXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+TXVzaWMgRGF0YSBBUEk8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPkFTUC5ORVQgQ29yZSArIFBvc3RncmVTUUw8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiA6aHJlZj1cImF1dGhTd2FnZ2VyVXJsXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+QXV0aGVudGljYXRpb24gQVBJPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgY2FwdGlvbiBsaW5lcz1cIjJcIj5BU1AuTkVUIENvcmUgKyBQb3N0Z3JlU1FMPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdGFyZ2V0PVwiX2JsYW5rXCIgOmhyZWY9XCJwbGF5bGlzdFN3YWdnZXJVcmxcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIj5QbGF5bGlzdCBBUEk8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPkFTUC5ORVQgQ29yZSArIFBvc3RncmVTUUw8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgIDwvcS1saXN0PlxuICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cbiAgICAgICAgICA8L3EtdGFiLXBhbmVscz5cbiAgICAgICAgPC9xLWNhcmQ+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSBcInNyYy91dGlscy9BcGlDb25maWdQcm92aWRlclwiO1xuXG5jb25zdCB0YWIgPSByZWYoJ21lZGlhJyk7XG5cbmNvbnN0IGFwaUNvbmZpZ1Byb3ZpZGVyID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IGF1dGhTd2FnZ2VyVXJsID0gYCR7YXBpQ29uZmlnUHJvdmlkZXIuYmFzZVBhdGh9L3N3YWdnZXIvYXV0aGA7XG5jb25zdCBtdXNpY0RhdGFTd2FnZ2VyVXJsID0gYCR7YXBpQ29uZmlnUHJvdmlkZXIuYmFzZVBhdGh9L3N3YWdnZXIvbXVzaWMtZGF0YWBcbmNvbnN0IHBsYXlsaXN0U3dhZ2dlclVybCA9IGAke2FwaUNvbmZpZ1Byb3ZpZGVyLmJhc2VQYXRofS9zd2FnZ2VyL3BsYXlsaXN0YFxuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8cS1saXN0IHYtaWY9XCJpc0xvZ2dlZEluXCI+XG4gICAgICA8cS1pdGVtIHYtZm9yPVwibGluayBpbiBjb2xsZWN0aW9uTmF2aWdhdGlvbnNcIiA6a2V5PVwibGluay50ZXh0XCJcbiAgICAgICAgICAgICAgdi1yaXBwbGUgY2xpY2thYmxlIDppbnNldC1sZXZlbD0wLjNcbiAgICAgICAgICAgICAgOnRvPVwibGluay5yb3V0ZVwiIGV4YWN0XG4gICAgICAgICAgICAgIGFjdGl2ZS1jbGFzcz1cInRleHQtd2hpdGUgYmctZ3JleS04IHRleHQtd2VpZ2h0LWJvbGRlclwiPlxuICAgICAgICA8IS0tICAgICAgICAgICAgOmFjdGl2ZT1cImN1cnJlbnRQYXRoID09PSBsaW5rLnJvdXRlLm5hbWVcIi0tPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWljb24gOm5hbWU9XCJsaW5rLmljb25cIiBzaXplPVwiMjRweFwiLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAgICB7e2xpbmsudGV4dH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICA8L3EtaXRlbT5cblxuPCEtLSAgICAgIDxxLWl0ZW0gdi1yaXBwbGUgY2xpY2thYmxlIDppbnNldC1sZXZlbD0wLjM+LS0+XG48IS0tICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPi0tPlxuPCEtLSAgICAgICAgICA8cS1pY29uIDpuYW1lPVwib3V0bGluZWRQbGF5bGlzdEFkZFwiIHNpemU9XCIyNHB4XCIvPi0tPlxuPCEtLSAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj4tLT5cbjwhLS0gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj4tLT5cbjwhLS0gICAgICAgICAgPHEtaXRlbS1sYWJlbD4tLT5cbjwhLS0gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj4tLT5cbjwhLS0gICAgICAgICAgICBDcmVhdGUgUGxheWxpc3QtLT5cbjwhLS0gICAgICAgICAgPC9zcGFuPi0tPlxuPCEtLSAgICAgICAgICA8L3EtaXRlbS1sYWJlbD4tLT5cbjwhLS0gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+LS0+XG48IS0tICAgICAgPC9xLWl0ZW0+LS0+XG5cbiAgICAgIDxxLWl0ZW0gdi1mb3I9XCJpdGVtIGluIHBsYXlsaXN0SXRlbXNcIiA6a2V5PVwiaXRlbVwiXG4gICAgICAgICAgICAgIHYtcmlwcGxlIGNsaWNrYWJsZSA6aW5zZXQtbGV2ZWw9MC4zIEBjbGljaz1cImdvdG9QbGF5bGlzdChpdGVtKVwiPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgICAgIDxxLWljb24gOm5hbWU9XCJvdXRsaW5lZFBsYXlsaXN0UGxheVwiIHNpemU9XCIyNHB4XCIvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPlxuICAgICAgICAgICAge3tpdGVtLm5hbWV9fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuXG4gICAgPHEtbGlzdCB2LWlmPVwiIWlzTG9nZ2VkSW5cIj5cbiAgICAgIDxxLWl0ZW0gOmluc2V0LWxldmVsPVwiMC4zXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGEgY2xhc3M9XCJsaW5rXCIgQGNsaWNrPVwic2hvd0xvZ2luRGlhbG9nXCI+TG9nIGluPC9hPiBvclxuICAgICAgICAgIDxhIGNsYXNzPVwibGlua1wiIEBjbGljaz1cInNob3dSZWdpc3RlckRpYWxvZ1wiPlNpZ24gdXA8L2E+XG4gICAgICAgICAgdG8gY3JlYXRlIGFuZCBtYW5hZ2UgcGxheWxpc3RzXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD5cbmltcG9ydCB7XG4gIG91dGxpbmVkRmF2b3JpdGVCb3JkZXIsXG4gIG91dGxpbmVkSGlzdG9yeSxcbiAgb3V0bGluZWRMaWJyYXJ5TXVzaWMsXG4gIG91dGxpbmVkUGxheWxpc3RBZGQsXG4gIG91dGxpbmVkUGxheWxpc3RQbGF5XG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJztcbmltcG9ydCB7dXNlQXV0aFN0b3JlfSBmcm9tICdzdG9yZXMvYXV0aERhdGFTdG9yZSc7XG5pbXBvcnQge2NvbXB1dGVkLCBvbk1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCBSZWdpc3RyYXRpb25Nb2RhbCBmcm9tICdjb21wb25lbnRzL1JlZ2lzdHJhdGlvbk1vZGFsLnZ1ZSc7XG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSAncXVhc2FyJztcbmltcG9ydCB7UGxheWxpc3RBcGksIFBsYXlsaXN0UmVhZER0b30gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSAnY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHt1c2VQbGF5bGlzdFN0b3JlfSBmcm9tIFwic3RvcmVzL3BsYXlsaXN0U3RvcmVcIjtcblxuY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG5jb25zdCAkcSA9IHVzZVF1YXNhcigpO1xuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5jb25zdCBwbGF5bGlzdFN0b3JlID0gdXNlUGxheWxpc3RTdG9yZSgpO1xuXG5jb25zdCBwbGF5bGlzdEl0ZW1zID0gY29tcHV0ZWQoKCkgPT4gcGxheWxpc3RTdG9yZS5nZXRQbGF5bGlzdHMpO1xuXG5jb25zdCBpc0xvZ2dlZEluID0gY29tcHV0ZWQoKCkgPT4gYXV0aFN0b3JlLmlzTG9nZ2VkSW4pO1xuXG5jb25zdCBwbGF5bGlzdEFwaSA9IG5ldyBQbGF5bGlzdEFwaShBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpKTtcblxub25Nb3VudGVkKGFzeW5jICgpID0+IHtcbiAgaWYgKGlzTG9nZ2VkSW4udmFsdWUpIHtcbiAgICBsZXQgYWxsUGxheWxpc3RzID0gYXdhaXQgcGxheWxpc3RBcGkuZ2V0Q3VycmVudFVzZXJQbGF5bGlzdCgpO1xuICAgIGxldCBub3JtYWxQbGF5bGlzdHMgPSBhbGxQbGF5bGlzdHMuZmlsdGVyKHAgPT4gcC50eXBlID09ICdOb3JtYWwnKTtcbiAgICBwbGF5bGlzdFN0b3JlLnNldFBsYXlsaXN0cyhub3JtYWxQbGF5bGlzdHMpO1xuICB9XG59KVxuXG5jb25zdCBjb2xsZWN0aW9uTmF2aWdhdGlvbnMgPSBbXG4gIHtcbiAgICB0ZXh0OiAnTGlicmFyeScsXG4gICAgaWNvbjogb3V0bGluZWRMaWJyYXJ5TXVzaWMsXG4gICAgcm91dGU6IHsgbmFtZTogJ2xpYnJhcnknIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdIaXN0b3J5JyxcbiAgICBpY29uOiBvdXRsaW5lZEhpc3RvcnksXG4gICAgcm91dGU6IHsgbmFtZTogJ2hpc3RvcnknIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdGYXZvcml0ZScsXG4gICAgaWNvbjogb3V0bGluZWRGYXZvcml0ZUJvcmRlcixcbiAgICByb3V0ZTogeyBuYW1lOiAnZmF2b3JpdGUnIH1cbiAgfVxuXVxuXG5jb25zdCBnb3RvUGxheWxpc3QgPSAocGxheWxpc3Q6IFBsYXlsaXN0UmVhZER0bykgPT4ge1xuICByb3V0ZXIucHVzaCh7bmFtZTogJ3BsYXlsaXN0JywgcGFyYW1zOiB7IHBsYXlsaXN0SWQ6IHBsYXlsaXN0LmlkIH19KVxufVxuXG5jb25zdCBzaG93UmVnaXN0ZXJEaWFsb2cgPSAoKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBSZWdpc3RyYXRpb25Nb2RhbFxuICB9KTtcbn1cblxuY29uc3Qgc2hvd0xvZ2luRGlhbG9nID0gKCkgPT4ge1xuICAkcS5kaWFsb2coe1xuICAgIGNvbXBvbmVudDogTG9naW5Nb2RhbFxuICB9KTtcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbjwhLS0gICAgPHEtbGlzdCBwYWRkaW5nPi0tPlxuPCEtLSAgICAgIDxxLWl0ZW0+LS0+XG48IS0tICAgICAgICA8cS1pdGVtLXNlY3Rpb24+LS0+XG48IS0tICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+LS0+XG48IS0tICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW0gdGV4dC1oNVwiPi0tPlxuPCEtLSAgICAgICAgICAgICAgTE9HTyBIRVJFLS0+XG48IS0tICAgICAgICAgICAgPC9zcGFuPi0tPlxuPCEtLSAgICAgICAgICA8L3EtaXRlbS1sYWJlbD4tLT5cbjwhLS0gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+LS0+XG48IS0tICAgICAgPC9xLWl0ZW0+LS0+XG48IS0tICAgIDwvcS1saXN0Pi0tPlxuXG4gICAgPHEtbGlzdCBwYWRkaW5nPlxuICAgICAgPHEtaXRlbSB2LWZvcj1cImxpbmsgaW4gbmF2aWdhdGlvbnNcIiA6a2V5PVwibGluay50ZXh0XCJcbiAgICAgICAgICAgICAgdi1yaXBwbGUgY2xpY2thYmxlIDppbnNldC1sZXZlbD0wLjNcbiAgICAgICAgICAgICAgOnRvPVwibGluay5yb3V0ZVwiIGV4YWN0XG4gICAgICAgICAgICAgIDphY3RpdmU9XCJjdXJyZW50UGF0aCA9PT0gbGluay5yb3V0ZS5uYW1lXCJcbiAgICAgICAgICAgICAgYWN0aXZlLWNsYXNzPVwidGV4dC13aGl0ZSBiZy1ncmV5LTggdGV4dC13ZWlnaHQtYm9sZGVyXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvbiA6bmFtZT1cImxpbmsuaWNvblwiIHNpemU9XCIyNHB4XCIvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHt7bGluay50ZXh0fX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuICAgIDwvcS1saXN0PlxuICAgIDxxLXNlcGFyYXRvciBjbGFzcz1cInEtbXktc21cIiAvPlxuXG4gICAgPERyYXdlclBsYXlsaXN0TGlzdD48L0RyYXdlclBsYXlsaXN0TGlzdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtkZWZpbmVDb21wb25lbnR9IGZyb20gJ3Z1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdEcmF3ZXJOYXZpZ2F0aW9uJyxcbiAgY29tcG9uZW50czoge1xuICB9XG59KVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZEhvbWUsXG4gIG91dGxpbmVkU2VhcmNoLFxuICBvdXRsaW5lZFJhZGlvXG59IGZyb20gJ0BxdWFzYXIvZXh0cmFzL21hdGVyaWFsLWljb25zLW91dGxpbmVkJ1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcbmltcG9ydCBEcmF3ZXJQbGF5bGlzdExpc3QgZnJvbSAnY29tcG9uZW50cy9EcmF3ZXJQbGF5bGlzdExpc3QudnVlJztcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmNvbnN0IGN1cnJlbnRQYXRoID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gcm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5uYW1lO1xufSlcblxuY29uc3QgbmF2aWdhdGlvbnMgPSBbXG4gIHtcbiAgICB0ZXh0OiAnSG9tZScsXG4gICAgaWNvbjogb3V0bGluZWRIb21lLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdob21lUGFnaW5hdGUnIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdTZWFyY2gnLFxuICAgIGljb246IG91dGxpbmVkU2VhcmNoLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdzZWFyY2gnIH1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdSYWRpbycsXG4gICAgaWNvbjogb3V0bGluZWRSYWRpbyxcbiAgICByb3V0ZTogeyBuYW1lOiAncmFkaW8nIH1cbiAgfVxuXVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWxheW91dCB2aWV3PVwibEhoIExwUiBmRmZcIj5cbiAgICA8cS1oZWFkZXIgaWQ9XCJoZWFkZXJcIiBib3JkZXJlZD5cbiAgICAgIDxxLXRvb2xiYXI+XG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGU+XG4gICAgICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgc2l6ZT1cImxnXCIgY29sb3I9XCJ3aGl0ZVwiIDppY29uPVwib3V0bGluZWRBcnJvd0JhY2tcIiBAY2xpY2s9XCJiYWNrXCI+XG4gICAgICAgICAgPC9xLWJ0bj5cbiAgICAgICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCBzaXplPVwibGdcIiBjb2xvcj1cIndoaXRlXCIgOmljb249XCJvdXRsaW5lZEFycm93Rm9yd2FyZFwiIEBjbGljaz1cImZvcndhcmRcIj5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cblxuICAgICAgICA8cS1zcGFjZSAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1zbSByb3cgaXRlbXMtY2VudGVyIG5vLXdyYXBcIj5cbiAgICAgICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkSW5mb1wiIHYtaWY9XCIkcS5zY3JlZW4uZ3Quc21cIiBAY2xpY2s9XCJzaG93QWJvdXREaWFsb2dcIj5cbiAgICAgICAgICAgIDxxLXRvb2x0aXA+QWJvdXQ8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8L3EtYnRuPlxuXG4gICAgICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgOmljb249XCJvdXRsaW5lZFNldHRpbmdzXCIgdi1pZj1cIiRxLnNjcmVlbi5ndC5zbVwiIEBjbGljaz1cInNob3dTZXR0aW5nc0RpYWxvZ1wiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5TZXR0aW5nczwvcS10b29sdGlwPlxuICAgICAgICAgIDwvcS1idG4+XG5cbiAgICAgICAgICA8VXNlckFjY291bnRCdXR0b24+PC9Vc2VyQWNjb3VudEJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtdG9vbGJhcj5cblxuICAgIDwvcS1oZWFkZXI+XG5cbiAgICA8cS1kcmF3ZXIgc2hvdy1pZi1hYm92ZSBzaWRlPVwibGVmdFwiIDp3aWR0aD1cIjI1MFwiPlxuICAgICAgPGRyYXdlci1uYXZpZ2F0aW9uPjwvZHJhd2VyLW5hdmlnYXRpb24+XG4gICAgPC9xLWRyYXdlcj5cblxuICAgIDxxLWRyYXdlciB2LW1vZGVsPVwic2hvd1F1ZXVlXCIgc2lkZT1cInJpZ2h0XCIgOndpZHRoPVwiMjcwXCI+XG4gICAgICA8ZHJhd2VyLXF1ZXVlIGlkPVwicXVldWUtZHJhd2VyXCI+PC9kcmF3ZXItcXVldWU+XG4gICAgPC9xLWRyYXdlcj5cblxuICAgIDxxLXBhZ2UtY29udGFpbmVyIDpzdHlsZT1cInsgYmFja2dyb3VuZDogYmdHcmFkaWVudCB9XCIgc3R5bGU9XCJ0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLCAyNTBtcywgbGluZWFyICFpbXBvcnRhbnQ7XCI+XG4gICAgICA8cm91dGVyLXZpZXcgdi1zbG90PVwieyBDb21wb25lbnQgfVwiPlxuICAgICAgICA8a2VlcC1hbGl2ZSA6aW5jbHVkZT1cIlsnSG9tZVBhZ2VQYWdpbmF0ZScsICdIb21lUGFnZUluZlNjcm9sbCcsICdBcnRpc3RQYWdlJ11cIj5cbiAgICAgICAgICA8Y29tcG9uZW50IDppcz1cIkNvbXBvbmVudFwiPjwvY29tcG9uZW50PlxuICAgICAgICA8L2tlZXAtYWxpdmU+XG4gICAgICA8L3JvdXRlci12aWV3PlxuICAgIDwvcS1wYWdlLWNvbnRhaW5lcj5cblxuICAgIDxxLWZvb3RlciBjbGFzcz1cImJvcmRlci10b3AtdGhpblwiPlxuICAgICAgPHBsYXllci1jb250cm9sPjwvcGxheWVyLWNvbnRyb2w+XG4gICAgPC9xLWZvb3Rlcj5cblxuICA8L3EtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgRHJhd2VyTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0RyYXdlck5hdmlnYXRpb24udnVlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ01haW5MYXlvdXQnLFxuICBjb21wb25lbnRzOiB7XG4gICAgRHJhd2VyTmF2aWdhdGlvblxuICB9XG59KTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRJbmZvLFxuICBvdXRsaW5lZEFycm93Rm9yd2FyZCxcbiAgb3V0bGluZWRBcnJvd0JhY2ssXG4gIG91dGxpbmVkU2V0dGluZ3Ncbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuXG5pbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgdXNlUXVhc2FyLCBzZXRDc3NWYXIgfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IFBsYXllckNvbnRyb2wgZnJvbSAnY29tcG9uZW50cy9QbGF5ZXJDb250cm9sLnZ1ZSc7XG5pbXBvcnQge3VzZVF1ZXVlRGlzcGxheVN0b3JlfSBmcm9tICdzdG9yZXMvc2hvd1F1ZXVlJztcbmltcG9ydCBEcmF3ZXJRdWV1ZSBmcm9tICdjb21wb25lbnRzL0RyYXdlclF1ZXVlLnZ1ZSc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge3VzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmV9IGZyb20gJ3N0b3Jlcy9wYWdlQ29udGFpbmVyQmcnO1xuaW1wb3J0IFVzZXJBY2NvdW50QnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvVXNlckFjY291bnRCdXR0b24udnVlJztcbmltcG9ydCBTZXR0aW5nc01vZGFsIGZyb20gJ2NvbXBvbmVudHMvU2V0dGluZ3NNb2RhbC52dWUnO1xuaW1wb3J0IEFib3V0RGlhbG9nIGZyb20gJ2NvbXBvbmVudHMvQWJvdXREaWFsb2cudnVlJ1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgYmdTdHlsZVN0b3JlID0gdXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZSgpO1xuXG5jb25zdCBiZ0dyYWRpZW50MSA9IGNvbXB1dGVkKCgpID0+IGJnU3R5bGVTdG9yZS5nZXRHcmFkaWVudDEpO1xuY29uc3QgYmdHcmFkaWVudDIgPSBjb21wdXRlZCgoKSA9PiBiZ1N0eWxlU3RvcmUuZ2V0R3JhZGllbnQyKVxuY29uc3QgYmdHcmFkaWVudCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAke2JnR3JhZGllbnQxLnZhbHVlfSAwJSwgJHtiZ0dyYWRpZW50Mi52YWx1ZX0gMzAlLCByZ2JhKDAsMCwwLDEpIDUwJSlgO1xufSk7XG5jb25zdCBiYWNrID0gKCkgPT4ge1xuICByb3V0ZXIuYmFjaygpO1xufVxuXG5jb25zdCBmb3J3YXJkID0gKCkgPT4ge1xuICByb3V0ZXIuZm9yd2FyZCgpO1xufVxuXG5jb25zdCBxdWV1ZURpc3BsYXlTdG9yZSA9IHVzZVF1ZXVlRGlzcGxheVN0b3JlKCk7XG5cbmNvbnN0IHNob3dRdWV1ZSA9IGNvbXB1dGVkKCgpID0+IHF1ZXVlRGlzcGxheVN0b3JlLnNob3cpXG5cbmNvbnN0IHEgPSB1c2VRdWFzYXIoKTtcbnEuZGFyay5zZXQodHJ1ZSk7XG5zZXRDc3NWYXIoJ3ByaW1hcnknLCAnIzAwMDAwMCcpXG5cbmNvbnN0IHNob3dTZXR0aW5nc0RpYWxvZyA9ICgpID0+IHtcbiAgcS5kaWFsb2coe1xuICAgIGNvbXBvbmVudDogU2V0dGluZ3NNb2RhbFxuICB9KTtcbn07XG5cbmNvbnN0IHNob3dBYm91dERpYWxvZyA9ICgpID0+IHtcbiAgcS5kaWFsb2coe1xuICAgIGNvbXBvbmVudDogQWJvdXREaWFsb2dcbiAgfSk7XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4jcS1hcHAgPiBkaXYgPiBkaXY6bnRoLWNoaWxkKDMpID4gYXNpZGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xufVxuXG4jaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNTQsIDU0LCAwLjcpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7XG59XG5cbiNxdWV1ZS1kcmF3ZXIge1xuICAvKmJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7Ki9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NiwgNTQsIDU0LCAwLjYzKTtcbiAgLypiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjVweCk7Ki9cbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsicnVudGltZS5CYXNlQVBJIiwicnVudGltZS5KU09OQXBpUmVzcG9uc2UiLCJvZmZzZXQiLCJzdHlsZSIsInBvc2l0aW9uIiwic2l6ZSIsImhlaWdodCIsIndpZHRoIiwidGltZXIiLCJfX2RlZmF1bHRfXyIsInN0ZXAiLCJkcmFnZ2luZyIsImNsYXNzZXMiLCJyYXRpbyIsInNob3ciLCJmb2N1cyIsInJlZiIsInZhbGlkIiwiY29tcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF5RE8sU0FBUyxvQkFBb0IsTUFBd0I7QUFDakQsU0FBQSx5QkFBeUIsSUFBVztBQUMvQztBQUVnQixTQUFBLHlCQUF5QixNQUFXLHFCQUEyQztBQUN0RixNQUFBLFNBQVMsVUFBZSxTQUFTLE1BQU87QUFDbEMsV0FBQTtBQUFBLEVBQ1g7QUFDTyxTQUFBO0FBQUEsSUFFSCxZQUFZLENBQUMsT0FBTyxNQUFNLFVBQVUsSUFBSSxTQUFZLEtBQUs7QUFBQSxJQUN6RCxnQkFBZ0IsQ0FBQyxPQUFPLE1BQU0sY0FBYyxJQUFJLFNBQVksS0FBSztBQUFBLElBQ2pFLFlBQVksQ0FBQyxPQUFPLE1BQU0sVUFBVSxJQUFJLFNBQVksa0JBQWtCLEtBQUssV0FBVztBQUFBLEVBQUE7QUFFOUY7QUNqQ08sU0FBUyxpQkFBaUIsTUFBcUI7QUFDM0MsU0FBQSxzQkFBc0IsSUFBVztBQUM1QztBQUVnQixTQUFBLHNCQUFzQixNQUFXLHFCQUF3QztBQUNoRixNQUFBLFNBQVMsVUFBZSxTQUFTLE1BQU87QUFDbEMsV0FBQTtBQUFBLEVBQ1g7QUFDTyxTQUFBO0FBQUEsSUFFSCxjQUFjLENB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

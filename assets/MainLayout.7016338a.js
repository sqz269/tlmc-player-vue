import { j as exists, A as AuthTokenFromJSON, B as BaseAPI, J as JSONApiResponse, k as createComponent, c as computed, h, l as hSlot, i as inject, m as emptyRenderFn, r as ref, w as watch, n as onBeforeUnmount, p as hUniqueSlot, g as getCurrentInstance, q as layoutKey, u as useModelToggleProps, t as useDarkProps, v as useModelToggleEmits, x as useDark, y as useTimeout, z as useModelToggle, C as useHistory, o as onMounted, D as nextTick, E as withDirectives, G as hDir, H as usePreventScroll, I as provide, K as pageContainerKey, L as isRuntimeSsrPreHydration, M as hMergeSlot, N as getScrollbarWidth, O as reactive, a as onUnmounted, _ as _export_sfc, P as defineComponent, Q as QueueController, R as useRouter, S as unref, U as openBlock, V as createBlock, W as withCtx, d as createVNode, X as QCardSection, Y as createBaseVNode, Z as toDisplayString, $ as QCardActions, a0 as QBtn, a1 as QCard, a2 as createCommentVNode, a3 as isNumber, a4 as isObject, a5 as useFormProps, a6 as position, a7 as useFormInject, a8 as useFormAttrs, a9 as stopAndPrevent, aa as audioController, ab as createElementBlock, ac as createTextVNode, F as Fragment, ad as defineStore, ae as QIcon, af as Transition, ag as shallowReactive, ah as useRouterLinkProps, ai as uid, aj as QSeparator, ak as vShow, al as useSpinnerProps, am as useSpinner, an as Ripple, ao as QAvatar, ap as normalizeClass, aq as renderList, ar as useBtnProps, as as useTransitionProps, at as getBtnDesignAttr, au as stop, av as onDeactivated, aw as onActivated, ax as vmIsDestroyed, ay as addFocusFn, az as formKey, aA as ApiConfigProvider, aB as QInput, aC as QDialog, aD as useAuthStore, aE as tabsKey, aF as isKeyCode, aG as shouldIgnoreKey, aH as isDeepEqual, aI as useTick, aJ as createDirective, aK as client, aL as noop, aM as leftClick, aN as addEvt, aO as preventDraggable, aP as cleanEvt, aQ as getNormalizedVNodes, aR as KeepAlive, aS as QRadio, aT as setCssVar, aU as resolveComponent, b as isRef, aV as resolveDynamicComponent, aW as normalizeStyle } from "./index.18e4bb4c.js";
import { o as outlinedFavoriteBorder, a as outlinedPlaylistAddCircle, Q as QTooltip, b as outlinedSkipPrevious, c as outlinedPlayArrow, d as outlinedPause, e as outlinedSkipNext, f as outlinedRepeat, g as outlinedShuffle, h as outlinedQueueMusic, i as outlinedPlaylistPlay, j as outlinedLibraryMusic, k as outlinedHistory, l as outlinedHome, m as outlinedSearch, n as outlinedRadio, p as outlinedArrowBack, q as outlinedArrowForward, r as outlinedInfo, s as outlinedSettings } from "./index.23d39097.js";
import { Q as QResizeObserver, T as TouchPan, a as QScrollObserver, g as getModifierDirections, s as shouldStart } from "./QScrollObserver.2cc20339.js";
import { b as between } from "./format.a33550d6.js";
import { u as useQuasar } from "./use-quasar.50089cc8.js";
import { Q as QImg } from "./QImg.f71d0f96.js";
import { Q as QMenu, a as QItemSection, b as QItem } from "./QItem.7e5b67b2.js";
import { A as AddToPlaylistMenu, u as usePlaylistStore } from "./AddToPlaylistMenu.fdfbf260.js";
import { d as durationToSeconds, f as formatDuration, s as secondsToDuration } from "./durationUtils.f059d1b6.js";
import { Q as QItemLabel, r as rtlHasScrollBug } from "./QSelect.cd208700.js";
import { Q as QList } from "./QList.4b939d7f.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.7b61c3c8.js";
import { C as ClosePopup, P as PlaylistApi } from "./ClosePopup.c77ec73b.js";
import { c as clearSelection } from "./position-engine.852dcea9.js";
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
    const gotoAlbum = () => {
      var _a, _b;
      router.push({ name: "album", params: { albumId: (_b = (_a = songQueue.currentlyPlaying) == null ? void 0 : _a.album) == null ? void 0 : _b.id } });
    };
    const gotoTrack = () => {
      var _a;
      router.push({ name: "track", params: { trackId: (_a = songQueue.currentlyPlaying) == null ? void 0 : _a.id } });
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
                  createBaseVNode("div", {
                    class: "text-h6 link",
                    onClick: gotoTrack
                  }, toDisplayString(unref(songQueue).currentlyPlaying.name._default), 1),
                  createBaseVNode("div", {
                    class: "text-subtitle2 link",
                    onClick: gotoAlbum
                  }, toDisplayString(unref(songQueue).currentlyPlaying.album.albumName._default), 1),
                  createBaseVNode("div", {
                    class: "text-subtitle1 text-grey q-py-sm link",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkxheW91dC43MDE2MzM4YS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvTG9naW5SZXN1bHQudHMiLCIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9Pa1Jlc3VsdC50cyIsIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvbW9kZWxzL1JvbGUudHMiLCIuLi8uLi8uLi9iYWNrZW5kLXNlcnZpY2UtYXBpL21vZGVscy9Vc2VyLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvUmVmcmVzaFRva2VuLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9tb2RlbHMvVXNlckNyZWRlbnRpYWxzRHRvLnRzIiwiLi4vLi4vLi4vYmFja2VuZC1zZXJ2aWNlLWFwaS9hcGlzL1VzZXJBcGkudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Rvb2xiYXIvUVRvb2xiYXJUaXRsZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3BhY2UvUVNwYWNlLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90b29sYmFyL1FUb29sYmFyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9oZWFkZXIvUUhlYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZHJhd2VyL1FEcmF3ZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3BhZ2UvUVBhZ2VDb250YWluZXIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9RRm9vdGVyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9sYXlvdXQvUUxheW91dC5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RyYWNrSW5mb0NhcmQudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9zbGlkZXIvdXNlLXNsaWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc2xpZGVyL1FTbGlkZXIuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZWRpYUNvbnRyb2wudnVlIiwiLi4vLi4vLi4vc3JjL3N0b3Jlcy9zaG93UXVldWUudHMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9RdWV1ZUNvbnRyb2wudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvUGxheWVyQ29udHJvbC52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NsaWRlLXRyYW5zaXRpb24vUVNsaWRlVHJhbnNpdGlvbi5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvZXhwYW5zaW9uLWl0ZW0vUUV4cGFuc2lvbkl0ZW0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwaW5uZXIvUVNwaW5uZXJBdWRpby5qcyIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1F1ZXVlSXRlbS52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EcmF3ZXJRdWV1ZS52dWUiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi1ncm91cC9RQnRuR3JvdXAuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2J0bi1kcm9wZG93bi9RQnRuRHJvcGRvd24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2Zvcm0vUUZvcm0uanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb25Nb2RhbC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Mb2dpbk1vZGFsLnZ1ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1VzZXJBY2NvdW50QnV0dG9uLnZ1ZSIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFicy91c2UtdGFiLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWJzL1FUYWIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYnMvUVRhYnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9kaXJlY3RpdmVzL1RvdWNoU3dpcGUuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYWNoZS5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXBhbmVsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy90YWItcGFuZWxzL1FUYWJQYW5lbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvdGFiLXBhbmVscy9RVGFiUGFuZWxzLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU2V0dGluZ3NNb2RhbC52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BYm91dERpYWxvZy52dWUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EcmF3ZXJQbGF5bGlzdExpc3QudnVlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRHJhd2VyTmF2aWdhdGlvbi52dWUiLCIuLi8uLi8uLi9zcmMvbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBBdXRoVG9rZW4gfSBmcm9tICcuL0F1dGhUb2tlbic7XG5pbXBvcnQge1xuICAgIEF1dGhUb2tlbkZyb21KU09OLFxuICAgIEF1dGhUb2tlbkZyb21KU09OVHlwZWQsXG4gICAgQXV0aFRva2VuVG9KU09OLFxufSBmcm9tICcuL0F1dGhUb2tlbic7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIExvZ2luUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXN1bHQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVzdWx0XG4gICAgICovXG4gICAgand0VG9rZW4/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIExvZ2luUmVzdWx0XG4gICAgICovXG4gICAgcmVmcmVzaFRva2VuPzogc3RyaW5nIHwgbnVsbDtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7QXV0aFRva2VufVxuICAgICAqIEBtZW1iZXJvZiBMb2dpblJlc3VsdFxuICAgICAqL1xuICAgIGF1dGhJbmZvPzogQXV0aFRva2VuO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIExvZ2luUmVzdWx0IGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZMb2dpblJlc3VsdCh2YWx1ZTogb2JqZWN0KTogYm9vbGVhbiB7XG4gICAgbGV0IGlzSW5zdGFuY2UgPSB0cnVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblJlc3VsdEZyb21KU09OKGpzb246IGFueSk6IExvZ2luUmVzdWx0IHtcbiAgICByZXR1cm4gTG9naW5SZXN1bHRGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvZ2luUmVzdWx0RnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBMb2dpblJlc3VsdCB7XG4gICAgaWYgKChqc29uID09PSB1bmRlZmluZWQpIHx8IChqc29uID09PSBudWxsKSkge1xuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdqd3RUb2tlbic6ICFleGlzdHMoanNvbiwgJ2p3dFRva2VuJykgPyB1bmRlZmluZWQgOiBqc29uWydqd3RUb2tlbiddLFxuICAgICAgICAncmVmcmVzaFRva2VuJzogIWV4aXN0cyhqc29uLCAncmVmcmVzaFRva2VuJykgPyB1bmRlZmluZWQgOiBqc29uWydyZWZyZXNoVG9rZW4nXSxcbiAgICAgICAgJ2F1dGhJbmZvJzogIWV4aXN0cyhqc29uLCAnYXV0aEluZm8nKSA/IHVuZGVmaW5lZCA6IEF1dGhUb2tlbkZyb21KU09OKGpzb25bJ2F1dGhJbmZvJ10pLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2dpblJlc3VsdFRvSlNPTih2YWx1ZT86IExvZ2luUmVzdWx0IHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ2p3dFRva2VuJzogdmFsdWUuand0VG9rZW4sXG4gICAgICAgICdyZWZyZXNoVG9rZW4nOiB2YWx1ZS5yZWZyZXNoVG9rZW4sXG4gICAgICAgICdhdXRoSW5mbyc6IEF1dGhUb2tlblRvSlNPTih2YWx1ZS5hdXRoSW5mbyksXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIE9rUmVzdWx0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT2tSZXN1bHQge1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIE9rUmVzdWx0XG4gICAgICovXG4gICAgc3RhdHVzQ29kZT86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBPa1Jlc3VsdCBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mT2tSZXN1bHQodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT2tSZXN1bHRGcm9tSlNPTihqc29uOiBhbnkpOiBPa1Jlc3VsdCB7XG4gICAgcmV0dXJuIE9rUmVzdWx0RnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBPa1Jlc3VsdEZyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogT2tSZXN1bHQge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAnc3RhdHVzQ29kZSc6ICFleGlzdHMoanNvbiwgJ3N0YXR1c0NvZGUnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3N0YXR1c0NvZGUnXSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT2tSZXN1bHRUb0pTT04odmFsdWU/OiBPa1Jlc3VsdCB8IG51bGwpOiBhbnkge1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgICdzdGF0dXNDb2RlJzogdmFsdWUuc3RhdHVzQ29kZSxcbiAgICB9O1xufVxuXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuaW1wb3J0IHR5cGUgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB7XG4gICAgVXNlckZyb21KU09OLFxuICAgIFVzZXJGcm9tSlNPTlR5cGVkLFxuICAgIFVzZXJUb0pTT04sXG59IGZyb20gJy4vVXNlcic7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFJvbGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb2xlIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSb2xlXG4gICAgICovXG4gICAgcm9sZU5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtBcnJheTxVc2VyPn1cbiAgICAgKiBAbWVtYmVyb2YgUm9sZVxuICAgICAqL1xuICAgIHVzZXJzPzogQXJyYXk8VXNlcj4gfCBudWxsO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFJvbGUgaW50ZXJmYWNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFuY2VPZlJvbGUodmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc0luc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUm9sZUZyb21KU09OKGpzb246IGFueSk6IFJvbGUge1xuICAgIHJldHVybiBSb2xlRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSb2xlRnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBSb2xlIHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3JvbGVOYW1lJzogIWV4aXN0cyhqc29uLCAncm9sZU5hbWUnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3JvbGVOYW1lJ10sXG4gICAgICAgICd1c2Vycyc6ICFleGlzdHMoanNvbiwgJ3VzZXJzJykgPyB1bmRlZmluZWQgOiAoanNvblsndXNlcnMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsndXNlcnMnXSBhcyBBcnJheTxhbnk+KS5tYXAoVXNlckZyb21KU09OKSksXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJvbGVUb0pTT04odmFsdWU/OiBSb2xlIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3JvbGVOYW1lJzogdmFsdWUucm9sZU5hbWUsXG4gICAgICAgICd1c2Vycyc6IHZhbHVlLnVzZXJzID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAodmFsdWUudXNlcnMgPT09IG51bGwgPyBudWxsIDogKHZhbHVlLnVzZXJzIGFzIEFycmF5PGFueT4pLm1hcChVc2VyVG9KU09OKSksXG4gICAgfTtcbn1cblxuIiwiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiAqIE11c2ljRGF0YVNlcnZpY2VcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKiBcbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IE9wZW5BUEkgR2VuZXJhdG9yIChodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2gpLlxuICogaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoXG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuaW1wb3J0IHsgZXhpc3RzLCBtYXBWYWx1ZXMgfSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHsgUmVmcmVzaFRva2VuIH0gZnJvbSAnLi9SZWZyZXNoVG9rZW4nO1xuaW1wb3J0IHtcbiAgICBSZWZyZXNoVG9rZW5Gcm9tSlNPTixcbiAgICBSZWZyZXNoVG9rZW5Gcm9tSlNPTlR5cGVkLFxuICAgIFJlZnJlc2hUb2tlblRvSlNPTixcbn0gZnJvbSAnLi9SZWZyZXNoVG9rZW4nO1xuaW1wb3J0IHR5cGUgeyBSb2xlIH0gZnJvbSAnLi9Sb2xlJztcbmltcG9ydCB7XG4gICAgUm9sZUZyb21KU09OLFxuICAgIFJvbGVGcm9tSlNPTlR5cGVkLFxuICAgIFJvbGVUb0pTT04sXG59IGZyb20gJy4vUm9sZSc7XG5cbi8qKlxuICogXG4gKiBAZXhwb3J0XG4gKiBAaW50ZXJmYWNlIFVzZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyXG4gICAgICovXG4gICAgdXNlcklkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlclxuICAgICAqL1xuICAgIHVzZXJOYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgVXNlclxuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJvbGU+fVxuICAgICAqIEBtZW1iZXJvZiBVc2VyXG4gICAgICovXG4gICAgcm9sZXM/OiBBcnJheTxSb2xlPiB8IG51bGw7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge0FycmF5PFJlZnJlc2hUb2tlbj59XG4gICAgICogQG1lbWJlcm9mIFVzZXJcbiAgICAgKi9cbiAgICB0b2tlbnM/OiBBcnJheTxSZWZyZXNoVG9rZW4+IHwgbnVsbDtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGdpdmVuIG9iamVjdCBpbXBsZW1lbnRzIHRoZSBVc2VyIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZVc2VyKHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJ1c2VySWRcIiBpbiB2YWx1ZTtcbiAgICBpc0luc3RhbmNlID0gaXNJbnN0YW5jZSAmJiBcInVzZXJOYW1lXCIgaW4gdmFsdWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJwYXNzd29yZFwiIGluIHZhbHVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyRnJvbUpTT04oanNvbjogYW55KTogVXNlciB7XG4gICAgcmV0dXJuIFVzZXJGcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJGcm9tSlNPTlR5cGVkKGpzb246IGFueSwgaWdub3JlRGlzY3JpbWluYXRvcjogYm9vbGVhbik6IFVzZXIge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndXNlcklkJzoganNvblsndXNlcklkJ10sXG4gICAgICAgICd1c2VyTmFtZSc6IGpzb25bJ3VzZXJOYW1lJ10sXG4gICAgICAgICdwYXNzd29yZCc6IGpzb25bJ3Bhc3N3b3JkJ10sXG4gICAgICAgICdyb2xlcyc6ICFleGlzdHMoanNvbiwgJ3JvbGVzJykgPyB1bmRlZmluZWQgOiAoanNvblsncm9sZXMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsncm9sZXMnXSBhcyBBcnJheTxhbnk+KS5tYXAoUm9sZUZyb21KU09OKSksXG4gICAgICAgICd0b2tlbnMnOiAhZXhpc3RzKGpzb24sICd0b2tlbnMnKSA/IHVuZGVmaW5lZCA6IChqc29uWyd0b2tlbnMnXSA9PT0gbnVsbCA/IG51bGwgOiAoanNvblsndG9rZW5zJ10gYXMgQXJyYXk8YW55PikubWFwKFJlZnJlc2hUb2tlbkZyb21KU09OKSksXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJUb0pTT04odmFsdWU/OiBVc2VyIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJJZCc6IHZhbHVlLnVzZXJJZCxcbiAgICAgICAgJ3VzZXJOYW1lJzogdmFsdWUudXNlck5hbWUsXG4gICAgICAgICdwYXNzd29yZCc6IHZhbHVlLnBhc3N3b3JkLFxuICAgICAgICAncm9sZXMnOiB2YWx1ZS5yb2xlcyA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHZhbHVlLnJvbGVzID09PSBudWxsID8gbnVsbCA6ICh2YWx1ZS5yb2xlcyBhcyBBcnJheTxhbnk+KS5tYXAoUm9sZVRvSlNPTikpLFxuICAgICAgICAndG9rZW5zJzogdmFsdWUudG9rZW5zID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiAodmFsdWUudG9rZW5zID09PSBudWxsID8gbnVsbCA6ICh2YWx1ZS50b2tlbnMgYXMgQXJyYXk8YW55PikubWFwKFJlZnJlc2hUb2tlblRvSlNPTikpLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cbmltcG9ydCB7IGV4aXN0cywgbWFwVmFsdWVzIH0gZnJvbSAnLi4vcnVudGltZSc7XG5pbXBvcnQgdHlwZSB7IFVzZXIgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHtcbiAgICBVc2VyRnJvbUpTT04sXG4gICAgVXNlckZyb21KU09OVHlwZWQsXG4gICAgVXNlclRvSlNPTixcbn0gZnJvbSAnLi9Vc2VyJztcblxuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgUmVmcmVzaFRva2VuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVmcmVzaFRva2VuIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZWZyZXNoVG9rZW5cbiAgICAgKi9cbiAgICB0b2tlbklkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtEYXRlfVxuICAgICAqIEBtZW1iZXJvZiBSZWZyZXNoVG9rZW5cbiAgICAgKi9cbiAgICBpc3N1ZWRUaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBSZWZyZXNoVG9rZW5cbiAgICAgKi9cbiAgICB1c2VySWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHR5cGUge1VzZXJ9XG4gICAgICogQG1lbWJlcm9mIFJlZnJlc2hUb2tlblxuICAgICAqL1xuICAgIHVzZXI/OiBVc2VyO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gb2JqZWN0IGltcGxlbWVudHMgdGhlIFJlZnJlc2hUb2tlbiBpbnRlcmZhY2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW5jZU9mUmVmcmVzaFRva2VuKHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICBsZXQgaXNJbnN0YW5jZSA9IHRydWU7XG5cbiAgICByZXR1cm4gaXNJbnN0YW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlZnJlc2hUb2tlbkZyb21KU09OKGpzb246IGFueSk6IFJlZnJlc2hUb2tlbiB7XG4gICAgcmV0dXJuIFJlZnJlc2hUb2tlbkZyb21KU09OVHlwZWQoanNvbiwgZmFsc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVmcmVzaFRva2VuRnJvbUpTT05UeXBlZChqc29uOiBhbnksIGlnbm9yZURpc2NyaW1pbmF0b3I6IGJvb2xlYW4pOiBSZWZyZXNoVG9rZW4ge1xuICAgIGlmICgoanNvbiA9PT0gdW5kZWZpbmVkKSB8fCAoanNvbiA9PT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndG9rZW5JZCc6ICFleGlzdHMoanNvbiwgJ3Rva2VuSWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3Rva2VuSWQnXSxcbiAgICAgICAgJ2lzc3VlZFRpbWUnOiAhZXhpc3RzKGpzb24sICdpc3N1ZWRUaW1lJykgPyB1bmRlZmluZWQgOiAobmV3IERhdGUoanNvblsnaXNzdWVkVGltZSddKSksXG4gICAgICAgICd1c2VySWQnOiAhZXhpc3RzKGpzb24sICd1c2VySWQnKSA/IHVuZGVmaW5lZCA6IGpzb25bJ3VzZXJJZCddLFxuICAgICAgICAndXNlcic6ICFleGlzdHMoanNvbiwgJ3VzZXInKSA/IHVuZGVmaW5lZCA6IFVzZXJGcm9tSlNPTihqc29uWyd1c2VyJ10pLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZWZyZXNoVG9rZW5Ub0pTT04odmFsdWU/OiBSZWZyZXNoVG9rZW4gfCBudWxsKTogYW55IHtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIFxuICAgICAgICAndG9rZW5JZCc6IHZhbHVlLnRva2VuSWQsXG4gICAgICAgICdpc3N1ZWRUaW1lJzogdmFsdWUuaXNzdWVkVGltZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogKHZhbHVlLmlzc3VlZFRpbWUudG9JU09TdHJpbmcoKSksXG4gICAgICAgICd1c2VySWQnOiB2YWx1ZS51c2VySWQsXG4gICAgICAgICd1c2VyJzogVXNlclRvSlNPTih2YWx1ZS51c2VyKSxcbiAgICB9O1xufVxuXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogTXVzaWNEYXRhU2VydmljZVxuICogTm8gZGVzY3JpcHRpb24gcHJvdmlkZWQgKGdlbmVyYXRlZCBieSBPcGVuYXBpIEdlbmVyYXRvciBodHRwczovL2dpdGh1Yi5jb20vb3BlbmFwaXRvb2xzL29wZW5hcGktZ2VuZXJhdG9yKVxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuXG5pbXBvcnQgeyBleGlzdHMsIG1hcFZhbHVlcyB9IGZyb20gJy4uL3J1bnRpbWUnO1xuLyoqXG4gKiBcbiAqIEBleHBvcnRcbiAqIEBpbnRlcmZhY2UgVXNlckNyZWRlbnRpYWxzRHRvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckNyZWRlbnRpYWxzRHRvIHtcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyQ3JlZGVudGlhbHNEdG9cbiAgICAgKi9cbiAgICB1c2VyTmFtZTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFVzZXJDcmVkZW50aWFsc0R0b1xuICAgICAqL1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBnaXZlbiBvYmplY3QgaW1wbGVtZW50cyB0aGUgVXNlckNyZWRlbnRpYWxzRHRvIGludGVyZmFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluc3RhbmNlT2ZVc2VyQ3JlZGVudGlhbHNEdG8odmFsdWU6IG9iamVjdCk6IGJvb2xlYW4ge1xuICAgIGxldCBpc0luc3RhbmNlID0gdHJ1ZTtcbiAgICBpc0luc3RhbmNlID0gaXNJbnN0YW5jZSAmJiBcInVzZXJOYW1lXCIgaW4gdmFsdWU7XG4gICAgaXNJbnN0YW5jZSA9IGlzSW5zdGFuY2UgJiYgXCJwYXNzd29yZFwiIGluIHZhbHVlO1xuXG4gICAgcmV0dXJuIGlzSW5zdGFuY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTihqc29uOiBhbnkpOiBVc2VyQ3JlZGVudGlhbHNEdG8ge1xuICAgIHJldHVybiBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTlR5cGVkKGpzb24sIGZhbHNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJDcmVkZW50aWFsc0R0b0Zyb21KU09OVHlwZWQoanNvbjogYW55LCBpZ25vcmVEaXNjcmltaW5hdG9yOiBib29sZWFuKTogVXNlckNyZWRlbnRpYWxzRHRvIHtcbiAgICBpZiAoKGpzb24gPT09IHVuZGVmaW5lZCkgfHwgKGpzb24gPT09IG51bGwpKSB7XG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJOYW1lJzoganNvblsndXNlck5hbWUnXSxcbiAgICAgICAgJ3Bhc3N3b3JkJzoganNvblsncGFzc3dvcmQnXSxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXNlckNyZWRlbnRpYWxzRHRvVG9KU09OKHZhbHVlPzogVXNlckNyZWRlbnRpYWxzRHRvIHwgbnVsbCk6IGFueSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBcbiAgICAgICAgJ3VzZXJOYW1lJzogdmFsdWUudXNlck5hbWUsXG4gICAgICAgICdwYXNzd29yZCc6IHZhbHVlLnBhc3N3b3JkLFxuICAgIH07XG59XG5cbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyoqXG4gKiBNdXNpY0RhdGFTZXJ2aWNlXG4gKiBObyBkZXNjcmlwdGlvbiBwcm92aWRlZCAoZ2VuZXJhdGVkIGJ5IE9wZW5hcGkgR2VuZXJhdG9yIGh0dHBzOi8vZ2l0aHViLmNvbS9vcGVuYXBpdG9vbHMvb3BlbmFwaS1nZW5lcmF0b3IpXG4gKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIE9wZW5BUEkgZG9jdW1lbnQ6IDEuMFxuICogXG4gKlxuICogTk9URTogVGhpcyBjbGFzcyBpcyBhdXRvIGdlbmVyYXRlZCBieSBPcGVuQVBJIEdlbmVyYXRvciAoaHR0cHM6Ly9vcGVuYXBpLWdlbmVyYXRvci50ZWNoKS5cbiAqIGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cblxuaW1wb3J0ICogYXMgcnVudGltZSBmcm9tICcuLi9ydW50aW1lJztcbmltcG9ydCB0eXBlIHtcbiAgTG9naW5SZXN1bHQsXG4gIE9rUmVzdWx0LFxuICBQcm9ibGVtRGV0YWlscyxcbiAgVXNlcixcbiAgVXNlckNyZWRlbnRpYWxzRHRvLFxufSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtcbiAgICBMb2dpblJlc3VsdEZyb21KU09OLFxuICAgIExvZ2luUmVzdWx0VG9KU09OLFxuICAgIE9rUmVzdWx0RnJvbUpTT04sXG4gICAgT2tSZXN1bHRUb0pTT04sXG4gICAgUHJvYmxlbURldGFpbHNGcm9tSlNPTixcbiAgICBQcm9ibGVtRGV0YWlsc1RvSlNPTixcbiAgICBVc2VyRnJvbUpTT04sXG4gICAgVXNlclRvSlNPTixcbiAgICBVc2VyQ3JlZGVudGlhbHNEdG9Gcm9tSlNPTixcbiAgICBVc2VyQ3JlZGVudGlhbHNEdG9Ub0pTT04sXG59IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBpVXNlckxvZ291dFBvc3RSZXF1ZXN0IHtcbiAgICBib2R5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luUmVxdWVzdCB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvPzogVXNlckNyZWRlbnRpYWxzRHRvO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlZ2lzdGVyUmVxdWVzdCB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvPzogVXNlckNyZWRlbnRpYWxzRHRvO1xufVxuXG4vKipcbiAqIFxuICovXG5leHBvcnQgY2xhc3MgVXNlckFwaSBleHRlbmRzIHJ1bnRpbWUuQmFzZUFQSSB7XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBhcGlVc2VyTG9nb3V0UG9zdFJhdyhyZXF1ZXN0UGFyYW1ldGVyczogQXBpVXNlckxvZ291dFBvc3RSZXF1ZXN0LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxydW50aW1lLkFwaVJlc3BvbnNlPE9rUmVzdWx0Pj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvdXNlci9sb2dvdXRgLFxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgIGJvZHk6IHJlcXVlc3RQYXJhbWV0ZXJzLmJvZHkgYXMgYW55LFxuICAgICAgICB9LCBpbml0T3ZlcnJpZGVzKTtcblxuICAgICAgICByZXR1cm4gbmV3IHJ1bnRpbWUuSlNPTkFwaVJlc3BvbnNlKHJlc3BvbnNlLCAoanNvblZhbHVlKSA9PiBPa1Jlc3VsdEZyb21KU09OKGpzb25WYWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGFwaVVzZXJMb2dvdXRQb3N0KHJlcXVlc3RQYXJhbWV0ZXJzOiBBcGlVc2VyTG9nb3V0UG9zdFJlcXVlc3QgPSB7fSwgaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8T2tSZXN1bHQ+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmFwaVVzZXJMb2dvdXRQb3N0UmF3KHJlcXVlc3RQYXJhbWV0ZXJzLCBpbml0T3ZlcnJpZGVzKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnZhbHVlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgZ2V0QWxsVXNlcnNSYXcoaW5pdE92ZXJyaWRlcz86IFJlcXVlc3RJbml0IHwgcnVudGltZS5Jbml0T3ZlcnJpZGVGdW5jdGlvbik6IFByb21pc2U8cnVudGltZS5BcGlSZXNwb25zZTxBcnJheTxVc2VyPj4+IHtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbWV0ZXJzOiBhbnkgPSB7fTtcblxuICAgICAgICBjb25zdCBoZWFkZXJQYXJhbWV0ZXJzOiBydW50aW1lLkhUVFBIZWFkZXJzID0ge307XG5cbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbiAmJiB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzW1wiQXV0aG9yaXphdGlvblwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkoXCJBdXRob3JpemF0aW9uXCIpOyAvLyBKd3QgYXV0aGVudGljYXRpb25cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHBhdGg6IGAvYXBpL3VzZXIvYWxsYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLkpTT05BcGlSZXNwb25zZShyZXNwb25zZSwgKGpzb25WYWx1ZSkgPT4ganNvblZhbHVlLm1hcChVc2VyRnJvbUpTT04pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBnZXRBbGxVc2Vycyhpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxBcnJheTxVc2VyPj4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ2V0QWxsVXNlcnNSYXcoaW5pdE92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS52YWx1ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIGxvZ2luUmF3KHJlcXVlc3RQYXJhbWV0ZXJzOiBMb2dpblJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8TG9naW5SZXN1bHQ+PiB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1ldGVyczogYW55ID0ge307XG5cbiAgICAgICAgY29uc3QgaGVhZGVyUGFyYW1ldGVyczogcnVudGltZS5IVFRQSGVhZGVycyA9IHt9O1xuXG4gICAgICAgIGhlYWRlclBhcmFtZXRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24gJiYgdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgICAgICAgICAgaGVhZGVyUGFyYW1ldGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24uYXBpS2V5KFwiQXV0aG9yaXphdGlvblwiKTsgLy8gSnd0IGF1dGhlbnRpY2F0aW9uXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdCh7XG4gICAgICAgICAgICBwYXRoOiBgL2FwaS91c2VyL2xvZ2luYCxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyUGFyYW1ldGVycyxcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgICAgICBib2R5OiBVc2VyQ3JlZGVudGlhbHNEdG9Ub0pTT04ocmVxdWVzdFBhcmFtZXRlcnMudXNlckNyZWRlbnRpYWxzRHRvKSxcbiAgICAgICAgfSwgaW5pdE92ZXJyaWRlcyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBydW50aW1lLkpTT05BcGlSZXNwb25zZShyZXNwb25zZSwgKGpzb25WYWx1ZSkgPT4gTG9naW5SZXN1bHRGcm9tSlNPTihqc29uVmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBhc3luYyBsb2dpbihyZXF1ZXN0UGFyYW1ldGVyczogTG9naW5SZXF1ZXN0ID0ge30sIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPExvZ2luUmVzdWx0PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5sb2dpblJhdyhyZXF1ZXN0UGFyYW1ldGVycywgaW5pdE92ZXJyaWRlcyk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS52YWx1ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqL1xuICAgIGFzeW5jIHJlZ2lzdGVyUmF3KHJlcXVlc3RQYXJhbWV0ZXJzOiBSZWdpc3RlclJlcXVlc3QsIGluaXRPdmVycmlkZXM/OiBSZXF1ZXN0SW5pdCB8IHJ1bnRpbWUuSW5pdE92ZXJyaWRlRnVuY3Rpb24pOiBQcm9taXNlPHJ1bnRpbWUuQXBpUmVzcG9uc2U8b2JqZWN0Pj4ge1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtZXRlcnM6IGFueSA9IHt9O1xuXG4gICAgICAgIGNvbnN0IGhlYWRlclBhcmFtZXRlcnM6IHJ1bnRpbWUuSFRUUEhlYWRlcnMgPSB7fTtcblxuICAgICAgICBoZWFkZXJQYXJhbWV0ZXJzWydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJztcblxuICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uICYmIHRoaXMuY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgICAgIGhlYWRlclBhcmFtZXRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLmFwaUtleShcIkF1dGhvcml6YXRpb25cIik7IC8vIEp3dCBhdXRoZW50aWNhdGlvblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlcXVlc3Qoe1xuICAgICAgICAgICAgcGF0aDogYC9hcGkvdXNlci9yZWdpc3RlcmAsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlclBhcmFtZXRlcnMsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnlQYXJhbWV0ZXJzLFxuICAgICAgICAgICAgYm9keTogVXNlckNyZWRlbnRpYWxzRHRvVG9KU09OKHJlcXVlc3RQYXJhbWV0ZXJzLnVzZXJDcmVkZW50aWFsc0R0byksXG4gICAgICAgIH0sIGluaXRPdmVycmlkZXMpO1xuXG4gICAgICAgIHJldHVybiBuZXcgcnVudGltZS5KU09OQXBpUmVzcG9uc2U8YW55PihyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICovXG4gICAgYXN5bmMgcmVnaXN0ZXIocmVxdWVzdFBhcmFtZXRlcnM6IFJlZ2lzdGVyUmVxdWVzdCA9IHt9LCBpbml0T3ZlcnJpZGVzPzogUmVxdWVzdEluaXQgfCBydW50aW1lLkluaXRPdmVycmlkZUZ1bmN0aW9uKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlZ2lzdGVyUmF3KHJlcXVlc3RQYXJhbWV0ZXJzLCBpbml0T3ZlcnJpZGVzKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLnZhbHVlKCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRvb2xiYXJUaXRsZScsXG5cbiAgcHJvcHM6IHtcbiAgICBzaHJpbms6IEJvb2xlYW5cbiAgfSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMgfSkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdG9vbGJhcl9fdGl0bGUgZWxsaXBzaXMnXG4gICAgICArIChwcm9wcy5zaHJpbmsgPT09IHRydWUgPyAnIGNvbC1zaHJpbmsnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3BhY2UgPSBoKCdkaXYnLCB7IGNsYXNzOiAncS1zcGFjZScgfSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGFjZScsXG5cbiAgc2V0dXAgKCkge1xuICAgIHJldHVybiAoKSA9PiBzcGFjZVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUb29sYmFyJyxcblxuICBwcm9wczoge1xuICAgIGluc2V0OiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRvb2xiYXIgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJ1xuICAgICAgKyAocHJvcHMuaW5zZXQgPT09IHRydWUgPyAnIHEtdG9vbGJhci0taW5zZXQnIDogJycpXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUsIHJvbGU6ICd0b29sYmFyJyB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbkJlZm9yZVVubW91bnQsIGluamVjdCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FIZWFkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICByZXZlYWxPZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDI1MFxuICAgIH0sXG4gICAgYm9yZGVyZWQ6IEJvb2xlYW4sXG4gICAgZWxldmF0ZWQ6IEJvb2xlYW4sXG5cbiAgICBoZWlnaHRIaW50OiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiA1MFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAncmV2ZWFsJywgJ2ZvY3VzaW4nIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCAkbGF5b3V0ID0gaW5qZWN0KGxheW91dEtleSwgZW1wdHlSZW5kZXJGbilcbiAgICBpZiAoJGxheW91dCA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgICAgY29uc29sZS5lcnJvcignUUhlYWRlciBuZWVkcyB0byBiZSBjaGlsZCBvZiBRTGF5b3V0JylcbiAgICAgIHJldHVybiBlbXB0eVJlbmRlckZuXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHJlZihwYXJzZUludChwcm9wcy5oZWlnaHRIaW50LCAxMCkpXG4gICAgY29uc3QgcmV2ZWFsZWQgPSByZWYodHJ1ZSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0gnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3Qgb2Zmc2V0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIDBcbiAgICAgIH1cbiAgICAgIGlmIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gcmV2ZWFsZWQudmFsdWUgPT09IHRydWUgPyBzaXplLnZhbHVlIDogMFxuICAgICAgfVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gc2l6ZS52YWx1ZSAtICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZVxuICAgICAgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1oZWFkZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy10b3AnXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1oZWFkZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWhlYWRlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdHJ1ZSA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnIDogJycpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdFxuICAgICAgICB2aWV3ID0gJGxheW91dC5yb3dzLnZhbHVlLnRvcCxcbiAgICAgICAgY3NzID0ge31cblxuICAgICAgaWYgKHZpZXdbIDAgXSA9PT0gJ2wnICYmICRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdID0gYCR7ICRsYXlvdXQubGVmdC5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICh2aWV3WyAyIF0gPT09ICdyJyAmJiAkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnbGVmdCcgOiAncmlnaHQnIF0gPSBgJHsgJGxheW91dC5yaWdodC5zaXplIH1weGBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNzc1xuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUoJ2hlYWRlcicsIHByb3AsIHZhbClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMb2NhbCAocHJvcCwgdmFsKSB7XG4gICAgICBpZiAocHJvcC52YWx1ZSAhPT0gdmFsKSB7XG4gICAgICAgIHByb3AudmFsdWUgPSB2YWxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgdXBkYXRlTG9jYWwoc2l6ZSwgaGVpZ2h0KVxuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgaGVpZ2h0KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRm9jdXNpbiAoZXZ0KSB7XG4gICAgICBpZiAocmV2ZWFsT25Gb2N1cy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnZm9jdXNpbicsIGV2dClcbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICB9KVxuXG4gICAgd2F0Y2gob2Zmc2V0LCB2YWwgPT4ge1xuICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVhbCwgdmFsID0+IHtcbiAgICAgIHZhbCA9PT0gZmFsc2UgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHByb3BzLm1vZGVsVmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKHJldmVhbGVkLCB2YWwgPT4ge1xuICAgICAgJGxheW91dC5hbmltYXRlKClcbiAgICAgIGVtaXQoJ3JldmVhbCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC5zY3JvbGwsIHNjcm9sbCA9PiB7XG4gICAgICBwcm9wcy5yZXZlYWwgPT09IHRydWUgJiYgdXBkYXRlTG9jYWwocmV2ZWFsZWQsXG4gICAgICAgIHNjcm9sbC5kaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgc2Nyb2xsLnBvc2l0aW9uIDw9IHByb3BzLnJldmVhbE9mZnNldFxuICAgICAgICB8fCBzY3JvbGwucG9zaXRpb24gLSBzY3JvbGwuaW5mbGVjdGlvblBvaW50IDwgMTAwXG4gICAgICApXG4gICAgfSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge31cblxuICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IGluc3RhbmNlXG4gICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiB1cGRhdGVMYXlvdXQoJ3NpemUnLCBzaXplLnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBwcm9wcy5tb2RlbFZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmICgkbGF5b3V0Lmluc3RhbmNlcy5oZWFkZXIgPT09IGluc3RhbmNlKSB7XG4gICAgICAgICRsYXlvdXQuaW5zdGFuY2VzLmhlYWRlciA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIGNoaWxkLnB1c2goXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0X19zaGFkb3cgYWJzb2x1dGUtZnVsbCBvdmVyZmxvdy1oaWRkZW4gbm8tcG9pbnRlci1ldmVudHMnXG4gICAgICAgIH0pXG4gICAgICApXG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemVcbiAgICAgICAgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGgoJ2hlYWRlcicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgb25Gb2N1c2luXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCB3aXRoRGlyZWN0aXZlcywgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VIaXN0b3J5IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWhpc3RvcnkuanMnXG5pbXBvcnQgdXNlTW9kZWxUb2dnbGUsIHsgdXNlTW9kZWxUb2dnbGVQcm9wcywgdXNlTW9kZWxUb2dnbGVFbWl0cyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLW1vZGVsLXRvZ2dsZS5qcydcbmltcG9ydCB1c2VQcmV2ZW50U2Nyb2xsIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXByZXZlbnQtc2Nyb2xsLmpzJ1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGltZW91dC5qcydcbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBoU2xvdCwgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5jb25zdCBkdXJhdGlvbiA9IDE1MFxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUURyYXdlcicsXG5cbiAgaW5oZXJpdEF0dHJzOiBmYWxzZSxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZU1vZGVsVG9nZ2xlUHJvcHMsXG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgc2lkZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xlZnQnLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IFsgJ2xlZnQnLCAncmlnaHQnIF0uaW5jbHVkZXModilcbiAgICB9LFxuXG4gICAgd2lkdGg6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH0sXG5cbiAgICBtaW5pOiBCb29sZWFuLFxuICAgIG1pbmlUb092ZXJsYXk6IEJvb2xlYW4sXG4gICAgbWluaVdpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1N1xuICAgIH0sXG5cbiAgICBicmVha3BvaW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiAxMDIzXG4gICAgfSxcbiAgICBzaG93SWZBYm92ZTogQm9vbGVhbixcblxuICAgIGJlaGF2aW9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gWyAnZGVmYXVsdCcsICdkZXNrdG9wJywgJ21vYmlsZScgXS5pbmNsdWRlcyh2KSxcbiAgICAgIGRlZmF1bHQ6ICdkZWZhdWx0J1xuICAgIH0sXG5cbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIG92ZXJsYXk6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBub1N3aXBlT3BlbjogQm9vbGVhbixcbiAgICBub1N3aXBlQ2xvc2U6IEJvb2xlYW4sXG4gICAgbm9Td2lwZUJhY2tkcm9wOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzLFxuICAgICdvbkxheW91dCcsICdtaW5pU3RhdGUnXG4gIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0LCBhdHRycyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gdm1cblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgcHJldmVudEJvZHlTY3JvbGwgfSA9IHVzZVByZXZlbnRTY3JvbGwoKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaW1lb3V0LCByZW1vdmVUaW1lb3V0IH0gPSB1c2VUaW1lb3V0KClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRHJhd2VyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBsZXQgbGFzdERlc2t0b3BTdGF0ZSwgdGltZXJNaW5pLCBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlclxuXG4gICAgY29uc3QgYmVsb3dCcmVha3BvaW50ID0gcmVmKFxuICAgICAgcHJvcHMuYmVoYXZpb3IgPT09ICdtb2JpbGUnXG4gICAgICB8fCAocHJvcHMuYmVoYXZpb3IgIT09ICdkZXNrdG9wJyAmJiAkbGF5b3V0LnRvdGFsV2lkdGgudmFsdWUgPD0gcHJvcHMuYnJlYWtwb2ludClcbiAgICApXG5cbiAgICBjb25zdCBpc01pbmkgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubWluaSA9PT0gdHJ1ZSAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgIT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBzaXplID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgaXNNaW5pLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMubWluaVdpZHRoXG4gICAgICAgIDogcHJvcHMud2lkdGhcbiAgICApKVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihcbiAgICAgIHByb3BzLnNob3dJZkFib3ZlID09PSB0cnVlICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgPyB0cnVlXG4gICAgICAgIDogcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGhpZGVPblJvdXRlQ2hhbmdlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWVcbiAgICAgICYmIChiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWUgfHwgb25TY3JlZW5PdmVybGF5LnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3cgKGV2dCwgbm9FdmVudCkge1xuICAgICAgYWRkVG9IaXN0b3J5KClcblxuICAgICAgZXZ0ICE9PSBmYWxzZSAmJiAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgYXBwbHlQb3NpdGlvbigwKVxuXG4gICAgICBpZiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG90aGVySW5zdGFuY2UgPSAkbGF5b3V0Lmluc3RhbmNlc1sgb3RoZXJTaWRlLnZhbHVlIF1cbiAgICAgICAgaWYgKG90aGVySW5zdGFuY2UgIT09IHZvaWQgMCAmJiBvdGhlckluc3RhbmNlLmJlbG93QnJlYWtwb2ludCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIG90aGVySW5zdGFuY2UuaGlkZShmYWxzZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSAmJiBwcmV2ZW50Qm9keVNjcm9sbCh0cnVlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgZXZ0ICE9PSBmYWxzZSAmJiBzZXRTY3JvbGxhYmxlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBldnQgIT09IGZhbHNlICYmIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICAgICAgbm9FdmVudCAhPT0gdHJ1ZSAmJiBlbWl0KCdzaG93JywgZXZ0KVxuICAgICAgfSwgZHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSGlkZSAoZXZ0LCBub0V2ZW50KSB7XG4gICAgICByZW1vdmVGcm9tSGlzdG9yeSgpXG5cbiAgICAgIGV2dCAhPT0gZmFsc2UgJiYgJGxheW91dC5hbmltYXRlKClcblxuICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgYXBwbHlQb3NpdGlvbihzdGF0ZURpcmVjdGlvbi52YWx1ZSAqIHNpemUudmFsdWUpXG5cbiAgICAgIGNsZWFudXAoKVxuXG4gICAgICBpZiAobm9FdmVudCAhPT0gdHJ1ZSkge1xuICAgICAgICByZWdpc3RlclRpbWVvdXQoKCkgPT4geyBlbWl0KCdoaWRlJywgZXZ0KSB9LCBkdXJhdGlvbilcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZW1vdmVUaW1lb3V0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHNob3csIGhpZGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHtcbiAgICAgIHNob3dpbmcsXG4gICAgICBoaWRlT25Sb3V0ZUNoYW5nZSxcbiAgICAgIGhhbmRsZVNob3csXG4gICAgICBoYW5kbGVIaWRlXG4gICAgfSlcblxuICAgIGNvbnN0IHsgYWRkVG9IaXN0b3J5LCByZW1vdmVGcm9tSGlzdG9yeSB9ID0gdXNlSGlzdG9yeShzaG93aW5nLCBoaWRlLCBoaWRlT25Sb3V0ZUNoYW5nZSlcblxuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgICAgYmVsb3dCcmVha3BvaW50LFxuICAgICAgaGlkZVxuICAgIH1cblxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGNvbXB1dGVkKCgpID0+IHByb3BzLnNpZGUgPT09ICdyaWdodCcpXG5cbiAgICBjb25zdCBzdGF0ZURpcmVjdGlvbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoJHEubGFuZy5ydGwgPT09IHRydWUgPyAtMSA6IDEpICogKHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZSA/IDEgOiAtMSlcbiAgICApXG5cbiAgICBjb25zdCBmbGFnQmFja2Ryb3BCZyA9IHJlZigwKVxuICAgIGNvbnN0IGZsYWdQYW5uaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGZsYWdNaW5pQW5pbWF0ZSA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBmbGFnQ29udGVudFBvc2l0aW9uID0gcmVmKCAvLyBzdGFydGluZyB3aXRoIFwiaGlkZGVuXCIgZm9yIFNTUlxuICAgICAgc2l6ZS52YWx1ZSAqIHN0YXRlRGlyZWN0aW9uLnZhbHVlXG4gICAgKVxuXG4gICAgY29uc3Qgb3RoZXJTaWRlID0gY29tcHV0ZWQoKCkgPT4gKHJpZ2h0U2lkZS52YWx1ZSA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcpKVxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSAmJiBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgICA/IChwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlID8gcHJvcHMubWluaVdpZHRoIDogc2l6ZS52YWx1ZSlcbiAgICAgICAgOiAwXG4gICAgKSlcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IHRydWVcbiAgICAgIHx8IHByb3BzLm1pbmlUb092ZXJsYXkgPT09IHRydWVcbiAgICAgIHx8ICRsYXlvdXQudmlldy52YWx1ZS5pbmRleE9mKHJpZ2h0U2lkZS52YWx1ZSA/ICdSJyA6ICdMJykgPiAtMVxuICAgICAgfHwgKCRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSAmJiAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IG9uTGF5b3V0ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IGZhbHNlXG4gICAgICAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAmJiBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IGZhbHNlXG4gICAgKVxuXG4gICAgY29uc3Qgb25TY3JlZW5PdmVybGF5ID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm92ZXJsYXkgPT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gZmFsc2VcbiAgICApXG5cbiAgICBjb25zdCBiYWNrZHJvcENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdmdWxsc2NyZWVuIHEtZHJhd2VyX19iYWNrZHJvcCdcbiAgICAgICsgKHNob3dpbmcudmFsdWUgPT09IGZhbHNlICYmIGZsYWdQYW5uaW5nLnZhbHVlID09PSBmYWxzZSA/ICcgaGlkZGVuJyA6ICcnKVxuICAgIClcblxuICAgIGNvbnN0IGJhY2tkcm9wU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBgcmdiYSgwLDAsMCwkeyBmbGFnQmFja2Ryb3BCZy52YWx1ZSAqIDAuNCB9KWBcbiAgICB9KSlcblxuICAgIGNvbnN0IGhlYWRlclNsb3QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAkbGF5b3V0LnJvd3MudmFsdWUudG9wWyAyIF0gPT09ICdyJ1xuICAgICAgICA6ICRsYXlvdXQucm93cy52YWx1ZS50b3BbIDAgXSA9PT0gJ2wnXG4gICAgKSlcblxuICAgIGNvbnN0IGZvb3RlclNsb3QgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgPyAkbGF5b3V0LnJvd3MudmFsdWUuYm90dG9tWyAyIF0gPT09ICdyJ1xuICAgICAgICA6ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b21bIDAgXSA9PT0gJ2wnXG4gICAgKSlcblxuICAgIGNvbnN0IGFib3ZlU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBjc3MgPSB7fVxuXG4gICAgICBpZiAoJGxheW91dC5oZWFkZXIuc3BhY2UgPT09IHRydWUgJiYgaGVhZGVyU2xvdC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLnRvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5vZmZzZXQgfXB4YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCRsYXlvdXQuaGVhZGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLnRvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJGxheW91dC5mb290ZXIuc3BhY2UgPT09IHRydWUgJiYgZm9vdGVyU2xvdC52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGZpeGVkLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLmJvdHRvbSA9IGAkeyAkbGF5b3V0LmZvb3Rlci5vZmZzZXQgfXB4YFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY3NzLmJvdHRvbSA9IGAkeyAkbGF5b3V0LmZvb3Rlci5zaXplIH1weGBcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBgJHsgc2l6ZS52YWx1ZSB9cHhgLFxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7IGZsYWdDb250ZW50UG9zaXRpb24udmFsdWUgfXB4KWBcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHN0eWxlXG4gICAgICAgIDogT2JqZWN0LmFzc2lnbihzdHlsZSwgYWJvdmVTdHlsZS52YWx1ZSlcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGVudENsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWRyYXdlcl9fY29udGVudCBmaXQgJ1xuICAgICAgKyAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdzY3JvbGwnIDogJ292ZXJmbG93LWF1dG8nKVxuICAgIClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgYHEtZHJhd2VyIHEtZHJhd2VyLS0keyBwcm9wcy5zaWRlIH1gXG4gICAgICArIChmbGFnTWluaUFuaW1hdGUudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS1taW5pLWFuaW1hdGUnIDogJycpXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1kcmF3ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLWRyYXdlci0tZGFyayBxLWRhcmsnIDogJycpXG4gICAgICArIChcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgbm8tdHJhbnNpdGlvbidcbiAgICAgICAgICA6IChzaG93aW5nLnZhbHVlID09PSB0cnVlID8gJycgOiAnIHEtbGF5b3V0LS1wcmV2ZW50LWZvY3VzJylcbiAgICAgIClcbiAgICAgICsgKFxuICAgICAgICBiZWxvd0JyZWFrcG9pbnQudmFsdWUgPT09IHRydWVcbiAgICAgICAgICA/ICcgZml4ZWQgcS1kcmF3ZXItLW9uLXRvcCBxLWRyYXdlci0tbW9iaWxlIHEtZHJhd2VyLS10b3AtcGFkZGluZydcbiAgICAgICAgICA6IGAgcS1kcmF3ZXItLSR7IGlzTWluaS52YWx1ZSA9PT0gdHJ1ZSA/ICdtaW5pJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICAgICArIChmaXhlZC52YWx1ZSA9PT0gdHJ1ZSB8fCBvbkxheW91dC52YWx1ZSAhPT0gdHJ1ZSA/ICcgZml4ZWQnIDogJycpXG4gICAgICAgICAgKyAocHJvcHMub3ZlcmxheSA9PT0gdHJ1ZSB8fCBwcm9wcy5taW5pVG9PdmVybGF5ID09PSB0cnVlID8gJyBxLWRyYXdlci0tb24tdG9wJyA6ICcnKVxuICAgICAgICAgICsgKGhlYWRlclNsb3QudmFsdWUgPT09IHRydWUgPyAnIHEtZHJhd2VyLS10b3AtcGFkZGluZycgOiAnJylcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBvcGVuRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgcHJvcHMubm9Td2lwZU9wZW4gIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gcHJvcHMuc2lkZSA6IG90aGVyU2lkZS52YWx1ZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbk9wZW5QYW4sXG4gICAgICAgIHZvaWQgMCxcbiAgICAgICAge1xuICAgICAgICAgIFsgZGlyIF06IHRydWUsXG4gICAgICAgICAgbW91c2U6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSBdXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRlbnRDbG9zZURpcmVjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIGlmIGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gb3RoZXJTaWRlLnZhbHVlIDogcHJvcHMuc2lkZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbkNsb3NlUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBjb25zdCBiYWNrZHJvcENsb3NlRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgLy8gaWYgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSAmJiBwcm9wcy5ub1N3aXBlQmFja2Ryb3AgIT09IHRydWVcbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gb3RoZXJTaWRlLnZhbHVlIDogcHJvcHMuc2lkZVxuXG4gICAgICByZXR1cm4gWyBbXG4gICAgICAgIFRvdWNoUGFuLFxuICAgICAgICBvbkNsb3NlUGFuLFxuICAgICAgICB2b2lkIDAsXG4gICAgICAgIHtcbiAgICAgICAgICBbIGRpciBdOiB0cnVlLFxuICAgICAgICAgIG1vdXNlOiB0cnVlLFxuICAgICAgICAgIG1vdXNlQWxsRGlyOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0gXVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVCZWxvd0JyZWFrcG9pbnQgKCkge1xuICAgICAgdXBkYXRlTG9jYWwoYmVsb3dCcmVha3BvaW50LCAoXG4gICAgICAgIHByb3BzLmJlaGF2aW9yID09PSAnbW9iaWxlJ1xuICAgICAgICB8fCAocHJvcHMuYmVoYXZpb3IgIT09ICdkZXNrdG9wJyAmJiAkbGF5b3V0LnRvdGFsV2lkdGgudmFsdWUgPD0gcHJvcHMuYnJlYWtwb2ludClcbiAgICAgICkpXG4gICAgfVxuXG4gICAgd2F0Y2goYmVsb3dCcmVha3BvaW50LCB2YWwgPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkgeyAvLyBmcm9tIGxnIHRvIHhzXG4gICAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBzaG93aW5nLnZhbHVlXG4gICAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgaGlkZShmYWxzZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICBwcm9wcy5vdmVybGF5ID09PSBmYWxzZVxuICAgICAgICAmJiBwcm9wcy5iZWhhdmlvciAhPT0gJ21vYmlsZSdcbiAgICAgICAgJiYgbGFzdERlc2t0b3BTdGF0ZSAhPT0gZmFsc2VcbiAgICAgICkgeyAvLyBmcm9tIHhzIHRvIGxnXG4gICAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgYXBwbHlQb3NpdGlvbigwKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMClcbiAgICAgICAgICBjbGVhbnVwKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzaG93KGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNpZGUsIChuZXdTaWRlLCBvbGRTaWRlKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIG9sZFNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIG9sZFNpZGUgXSA9IHZvaWQgMFxuICAgICAgICAkbGF5b3V0WyBvbGRTaWRlIF0uc3BhY2UgPSBmYWxzZVxuICAgICAgICAkbGF5b3V0WyBvbGRTaWRlIF0ub2Zmc2V0ID0gMFxuICAgICAgfVxuXG4gICAgICAkbGF5b3V0Lmluc3RhbmNlc1sgbmV3U2lkZSBdID0gaW5zdGFuY2VcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5zaXplID0gc2l6ZS52YWx1ZVxuICAgICAgJGxheW91dFsgbmV3U2lkZSBdLnNwYWNlID0gb25MYXlvdXQudmFsdWVcbiAgICAgICRsYXlvdXRbIG5ld1NpZGUgXS5vZmZzZXQgPSBvZmZzZXQudmFsdWVcbiAgICB9KVxuXG4gICAgd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZSB8fCBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUJlbG93QnJlYWtwb2ludCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKFxuICAgICAgKCkgPT4gcHJvcHMuYmVoYXZpb3IgKyBwcm9wcy5icmVha3BvaW50LFxuICAgICAgdXBkYXRlQmVsb3dCcmVha3BvaW50XG4gICAgKVxuXG4gICAgd2F0Y2goJGxheW91dC5pc0NvbnRhaW5lciwgdmFsID0+IHtcbiAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWUgJiYgcHJldmVudEJvZHlTY3JvbGwodmFsICE9PSB0cnVlKVxuICAgICAgdmFsID09PSB0cnVlICYmIHVwZGF0ZUJlbG93QnJlYWtwb2ludCgpXG4gICAgfSlcblxuICAgIHdhdGNoKCRsYXlvdXQuc2Nyb2xsYmFyV2lkdGgsICgpID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiB2b2lkIDApXG4gICAgfSlcblxuICAgIHdhdGNoKG9mZnNldCwgdmFsID0+IHsgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCB2YWwpIH0pXG5cbiAgICB3YXRjaChvbkxheW91dCwgdmFsID0+IHtcbiAgICAgIGVtaXQoJ29uTGF5b3V0JywgdmFsKVxuICAgICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2gocmlnaHRTaWRlLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goc2l6ZSwgdmFsID0+IHtcbiAgICAgIGFwcGx5UG9zaXRpb24oKVxuICAgICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaVRvT3ZlcmxheSwgdmFsID0+IHtcbiAgICAgIHVwZGF0ZVNpemVPbkxheW91dCh2YWwsIHNpemUudmFsdWUpXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+ICRxLmxhbmcucnRsLCAoKSA9PiB7IGFwcGx5UG9zaXRpb24oKSB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubWluaSwgKCkgPT4ge1xuICAgICAgaWYgKHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgYW5pbWF0ZU1pbmkoKVxuICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaChpc01pbmksIHZhbCA9PiB7IGVtaXQoJ21pbmlTdGF0ZScsIHZhbCkgfSlcblxuICAgIGZ1bmN0aW9uIGFwcGx5UG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICBpZiAocG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgcG9zaXRpb24gPSBzaG93aW5nLnZhbHVlID09PSB0cnVlID8gMCA6IHNpemUudmFsdWVcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiByaWdodFNpZGUudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAmJiAoYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlIHx8IE1hdGguYWJzKHBvc2l0aW9uKSA9PT0gc2l6ZS52YWx1ZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcG9zaXRpb24gKz0gc3RhdGVEaXJlY3Rpb24udmFsdWUgKiAkbGF5b3V0LnNjcm9sbGJhcldpZHRoLnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnQ29udGVudFBvc2l0aW9uLnZhbHVlID0gcG9zaXRpb25cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseUJhY2tkcm9wICh4KSB7XG4gICAgICBmbGFnQmFja2Ryb3BCZy52YWx1ZSA9IHhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGxhYmxlICh2KSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB2ID09PSB0cnVlXG4gICAgICAgID8gJ3JlbW92ZSdcbiAgICAgICAgOiAoJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSAhPT0gdHJ1ZSA/ICdhZGQnIDogJycpXG5cbiAgICAgIGFjdGlvbiAhPT0gJycgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3RbIGFjdGlvbiBdKCdxLWJvZHktLWRyYXdlci10b2dnbGUnKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVNaW5pICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lck1pbmkpXG5cbiAgICAgIGlmICh2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgLy8gbmVlZCB0byBzcGVlZCBpdCB1cCBhbmQgYXBwbHkgaXQgaW1tZWRpYXRlbHksXG4gICAgICAgIC8vIGV2ZW4gZmFzdGVyIHRoYW4gVnVlJ3MgbmV4dFRpY2shXG4gICAgICAgIHZtLnByb3h5LiRlbC5jbGFzc0xpc3QuYWRkKCdxLWRyYXdlci0tbWluaS1hbmltYXRlJylcbiAgICAgIH1cblxuICAgICAgZmxhZ01pbmlBbmltYXRlLnZhbHVlID0gdHJ1ZVxuICAgICAgdGltZXJNaW5pID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZsYWdNaW5pQW5pbWF0ZS52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGlmICh2bSAmJiB2bS5wcm94eSAmJiB2bS5wcm94eS4kZWwpIHtcbiAgICAgICAgICB2bS5wcm94eS4kZWwuY2xhc3NMaXN0LnJlbW92ZSgncS1kcmF3ZXItLW1pbmktYW5pbWF0ZScpXG4gICAgICAgIH1cbiAgICAgIH0sIDE1MClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbk9wZW5QYW4gKGV2dCkge1xuICAgICAgaWYgKHNob3dpbmcudmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgIC8vIHNvbWUgYnJvd3NlcnMgbWlnaHQgY2FwdHVyZSBhbmQgdHJpZ2dlciB0aGlzXG4gICAgICAgIC8vIGV2ZW4gaWYgRHJhd2VyIGhhcyBqdXN0IGJlZW4gb3BlbmVkIChidXQgYW5pbWF0aW9uIGlzIHN0aWxsIHBlbmRpbmcpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICB3aWR0aCA9IHNpemUudmFsdWUsXG4gICAgICAgIHBvc2l0aW9uID0gYmV0d2VlbihldnQuZGlzdGFuY2UueCwgMCwgd2lkdGgpXG5cbiAgICAgIGlmIChldnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBvcGVuZWQgPSBwb3NpdGlvbiA+PSBNYXRoLm1pbig3NSwgd2lkdGgpXG5cbiAgICAgICAgaWYgKG9wZW5lZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHNob3coKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICRsYXlvdXQuYW5pbWF0ZSgpXG4gICAgICAgICAgYXBwbHlCYWNrZHJvcCgwKVxuICAgICAgICAgIGFwcGx5UG9zaXRpb24oc3RhdGVEaXJlY3Rpb24udmFsdWUgKiB3aWR0aClcbiAgICAgICAgfVxuXG4gICAgICAgIGZsYWdQYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGFwcGx5UG9zaXRpb24oXG4gICAgICAgICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IHJpZ2h0U2lkZS52YWx1ZSAhPT0gdHJ1ZSA6IHJpZ2h0U2lkZS52YWx1ZSlcbiAgICAgICAgICA/IE1hdGgubWF4KHdpZHRoIC0gcG9zaXRpb24sIDApXG4gICAgICAgICAgOiBNYXRoLm1pbigwLCBwb3NpdGlvbiAtIHdpZHRoKVxuICAgICAgKVxuICAgICAgYXBwbHlCYWNrZHJvcChcbiAgICAgICAgYmV0d2Vlbihwb3NpdGlvbiAvIHdpZHRoLCAwLCAxKVxuICAgICAgKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbG9zZVBhbiAoZXZ0KSB7XG4gICAgICBpZiAoc2hvd2luZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAvLyBzb21lIGJyb3dzZXJzIG1pZ2h0IGNhcHR1cmUgYW5kIHRyaWdnZXIgdGhpc1xuICAgICAgICAvLyBldmVuIGlmIERyYXdlciBoYXMganVzdCBiZWVuIGNsb3NlZCAoYnV0IGFuaW1hdGlvbiBpcyBzdGlsbCBwZW5kaW5nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgd2lkdGggPSBzaXplLnZhbHVlLFxuICAgICAgICBkaXIgPSBldnQuZGlyZWN0aW9uID09PSBwcm9wcy5zaWRlLFxuICAgICAgICBwb3NpdGlvbiA9ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IGRpciAhPT0gdHJ1ZSA6IGRpcilcbiAgICAgICAgICA/IGJldHdlZW4oZXZ0LmRpc3RhbmNlLngsIDAsIHdpZHRoKVxuICAgICAgICAgIDogMFxuXG4gICAgICBpZiAoZXZ0LmlzRmluYWwgPT09IHRydWUpIHtcbiAgICAgICAgY29uc3Qgb3BlbmVkID0gTWF0aC5hYnMocG9zaXRpb24pIDwgTWF0aC5taW4oNzUsIHdpZHRoKVxuXG4gICAgICAgIGlmIChvcGVuZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgICAgIGFwcGx5QmFja2Ryb3AoMSlcbiAgICAgICAgICBhcHBseVBvc2l0aW9uKDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaGlkZSgpXG4gICAgICAgIH1cblxuICAgICAgICBmbGFnUGFubmluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBhcHBseVBvc2l0aW9uKHN0YXRlRGlyZWN0aW9uLnZhbHVlICogcG9zaXRpb24pXG4gICAgICBhcHBseUJhY2tkcm9wKGJldHdlZW4oMSAtIHBvc2l0aW9uIC8gd2lkdGgsIDAsIDEpKVxuXG4gICAgICBpZiAoZXZ0LmlzRmlyc3QgPT09IHRydWUpIHtcbiAgICAgICAgZmxhZ1Bhbm5pbmcudmFsdWUgPSB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cCAoKSB7XG4gICAgICBwcmV2ZW50Qm9keVNjcm9sbChmYWxzZSlcbiAgICAgIHNldFNjcm9sbGFibGUodHJ1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVMYXlvdXQgKHByb3AsIHZhbCkge1xuICAgICAgJGxheW91dC51cGRhdGUocHJvcHMuc2lkZSwgcHJvcCwgdmFsKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxvY2FsIChwcm9wLCB2YWwpIHtcbiAgICAgIGlmIChwcm9wLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgICAgcHJvcC52YWx1ZSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNpemVPbkxheW91dCAobWluaVRvT3ZlcmxheSwgc2l6ZSkge1xuICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgbWluaVRvT3ZlcmxheSA9PT0gdHJ1ZSA/IHByb3BzLm1pbmlXaWR0aCA6IHNpemUpXG4gICAgfVxuXG4gICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IGluc3RhbmNlXG4gICAgdXBkYXRlU2l6ZU9uTGF5b3V0KHByb3BzLm1pbmlUb092ZXJsYXksIHNpemUudmFsdWUpXG4gICAgdXBkYXRlTGF5b3V0KCdzcGFjZScsIG9uTGF5b3V0LnZhbHVlKVxuICAgIHVwZGF0ZUxheW91dCgnb2Zmc2V0Jywgb2Zmc2V0LnZhbHVlKVxuXG4gICAgaWYgKFxuICAgICAgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWVcbiAgICAgICYmIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICYmIHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSAhPT0gdm9pZCAwXG4gICAgKSB7XG4gICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRydWUpXG4gICAgfVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIGVtaXQoJ29uTGF5b3V0Jywgb25MYXlvdXQudmFsdWUpXG4gICAgICBlbWl0KCdtaW5pU3RhdGUnLCBpc01pbmkudmFsdWUpXG5cbiAgICAgIGxhc3REZXNrdG9wU3RhdGUgPSBwcm9wcy5zaG93SWZBYm92ZSA9PT0gdHJ1ZVxuXG4gICAgICBjb25zdCBmbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/IGhhbmRsZVNob3cgOiBoYW5kbGVIaWRlXG4gICAgICAgIGFjdGlvbihmYWxzZSwgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgaWYgKCRsYXlvdXQudG90YWxXaWR0aC52YWx1ZSAhPT0gMCkge1xuICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCBhbGwgY29tcHV0ZWQgcHJvcGVydGllc1xuICAgICAgICAvLyBoYXZlIGJlZW4gdXBkYXRlZCBiZWZvcmUgY2FsbGluZyBoYW5kbGVTaG93L2hhbmRsZUhpZGUoKVxuICAgICAgICBuZXh0VGljayhmbilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyID0gd2F0Y2goJGxheW91dC50b3RhbFdpZHRoLCAoKSA9PiB7XG4gICAgICAgIGxheW91dFRvdGFsV2lkdGhXYXRjaGVyKClcbiAgICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgPSB2b2lkIDBcblxuICAgICAgICBpZiAoc2hvd2luZy52YWx1ZSA9PT0gZmFsc2UgJiYgcHJvcHMuc2hvd0lmQWJvdmUgPT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIHNob3coZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm4oKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgbGF5b3V0VG90YWxXaWR0aFdhdGNoZXIgIT09IHZvaWQgMCAmJiBsYXlvdXRUb3RhbFdpZHRoV2F0Y2hlcigpXG4gICAgICBjbGVhclRpbWVvdXQodGltZXJNaW5pKVxuXG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIGNsZWFudXAoKVxuXG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9PT0gaW5zdGFuY2UpIHtcbiAgICAgICAgJGxheW91dC5pbnN0YW5jZXNbIHByb3BzLnNpZGUgXSA9IHZvaWQgMFxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NpemUnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIDApXG4gICAgICAgIHVwZGF0ZUxheW91dCgnc3BhY2UnLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gW11cblxuICAgICAgaWYgKGJlbG93QnJlYWtwb2ludC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBwcm9wcy5ub1N3aXBlT3BlbiA9PT0gZmFsc2UgJiYgY2hpbGQucHVzaChcbiAgICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAga2V5OiAnb3BlbicsXG4gICAgICAgICAgICAgIGNsYXNzOiBgcS1kcmF3ZXJfX29wZW5lciBmaXhlZC0keyBwcm9wcy5zaWRlIH1gLFxuICAgICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZSdcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgb3BlbkRpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuXG4gICAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgICAgaERpcihcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6ICdiYWNrZHJvcCcsXG4gICAgICAgICAgICAgIGNsYXNzOiBiYWNrZHJvcENsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICBzdHlsZTogYmFja2Ryb3BTdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgICBvbkNsaWNrOiBoaWRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdm9pZCAwLFxuICAgICAgICAgICAgJ2JhY2tkcm9wJyxcbiAgICAgICAgICAgIHByb3BzLm5vU3dpcGVCYWNrZHJvcCAhPT0gdHJ1ZSAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICAgKCkgPT4gYmFja2Ryb3BDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtaW5pID0gaXNNaW5pLnZhbHVlID09PSB0cnVlICYmIHNsb3RzLm1pbmkgIT09IHZvaWQgMFxuICAgICAgY29uc3QgY29udGVudCA9IFtcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgIGtleTogJycgKyBtaW5pLCAvLyByZXF1aXJlZCBvdGhlcndpc2UgVnVlIHdpbGwgbm90IGRpZmYgY29ycmVjdGx5XG4gICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgIGNvbnRlbnRDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIGF0dHJzLmNsYXNzXG4gICAgICAgICAgXVxuICAgICAgICB9LCBtaW5pID09PSB0cnVlXG4gICAgICAgICAgPyBzbG90cy5taW5pKClcbiAgICAgICAgICA6IGhTbG90KHNsb3RzLmRlZmF1bHQpXG4gICAgICAgIClcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmVsZXZhdGVkID09PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1sYXlvdXRfX3NoYWRvdyBhYnNvbHV0ZS1mdWxsIG92ZXJmbG93LWhpZGRlbiBuby1wb2ludGVyLWV2ZW50cydcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNoaWxkLnB1c2goXG4gICAgICAgIGhEaXIoXG4gICAgICAgICAgJ2FzaWRlJyxcbiAgICAgICAgICB7IHJlZjogJ2NvbnRlbnQnLCBjbGFzczogY2xhc3Nlcy52YWx1ZSwgc3R5bGU6IHN0eWxlLnZhbHVlIH0sXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAnY29udGVudGNsb3NlJyxcbiAgICAgICAgICBwcm9wcy5ub1N3aXBlQ2xvc2UgIT09IHRydWUgJiYgYmVsb3dCcmVha3BvaW50LnZhbHVlID09PSB0cnVlLFxuICAgICAgICAgICgpID0+IGNvbnRlbnRDbG9zZURpcmVjdGl2ZS52YWx1ZVxuICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7IGNsYXNzOiAncS1kcmF3ZXItY29udGFpbmVyJyB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCwgcHJvdmlkZSwgaW5qZWN0LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHBhZ2VDb250YWluZXJLZXksIGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdlQ29udGFpbmVyJyxcblxuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgJGxheW91dCA9IGluamVjdChsYXlvdXRLZXksIGVtcHR5UmVuZGVyRm4pXG4gICAgaWYgKCRsYXlvdXQgPT09IGVtcHR5UmVuZGVyRm4pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1FQYWdlQ29udGFpbmVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBwcm92aWRlKHBhZ2VDb250YWluZXJLZXksIHRydWUpXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGNzcyA9IHt9XG5cbiAgICAgIGlmICgkbGF5b3V0LmhlYWRlci5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3MucGFkZGluZ1RvcCA9IGAkeyAkbGF5b3V0LmhlYWRlci5zaXplIH1weGBcbiAgICAgIH1cbiAgICAgIGlmICgkbGF5b3V0LnJpZ2h0LnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzc1sgYHBhZGRpbmckeyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdMZWZ0JyA6ICdSaWdodCcgfWAgXSA9IGAkeyAkbGF5b3V0LnJpZ2h0LnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQuZm9vdGVyLnNwYWNlID09PSB0cnVlKSB7XG4gICAgICAgIGNzcy5wYWRkaW5nQm90dG9tID0gYCR7ICRsYXlvdXQuZm9vdGVyLnNpemUgfXB4YFxuICAgICAgfVxuICAgICAgaWYgKCRsYXlvdXQubGVmdC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbIGBwYWRkaW5nJHsgJHEubGFuZy5ydGwgPT09IHRydWUgPyAnUmlnaHQnIDogJ0xlZnQnIH1gIF0gPSBgJHsgJGxheW91dC5sZWZ0LnNpemUgfXB4YFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3NzXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7XG4gICAgICBjbGFzczogJ3EtcGFnZS1jb250YWluZXInLFxuICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlXG4gICAgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25CZWZvcmVVbm1vdW50LCBpbmplY3QsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhNZXJnZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGxheW91dEtleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FGb290ZXInLFxuXG4gIHByb3BzOiB7XG4gICAgbW9kZWxWYWx1ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9LFxuICAgIHJldmVhbDogQm9vbGVhbixcbiAgICBib3JkZXJlZDogQm9vbGVhbixcbiAgICBlbGV2YXRlZDogQm9vbGVhbixcblxuICAgIGhlaWdodEhpbnQ6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDUwXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICdyZXZlYWwnLCAnZm9jdXNpbicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcblxuICAgIGNvbnN0ICRsYXlvdXQgPSBpbmplY3QobGF5b3V0S2V5LCBlbXB0eVJlbmRlckZuKVxuICAgIGlmICgkbGF5b3V0ID09PSBlbXB0eVJlbmRlckZuKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdRRm9vdGVyIG5lZWRzIHRvIGJlIGNoaWxkIG9mIFFMYXlvdXQnKVxuICAgICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gcmVmKHBhcnNlSW50KHByb3BzLmhlaWdodEhpbnQsIDEwKSlcbiAgICBjb25zdCByZXZlYWxlZCA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHJlZihcbiAgICAgIGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSB8fCAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gMFxuICAgICAgICA6IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIClcblxuICAgIGNvbnN0IGZpeGVkID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLnJldmVhbCA9PT0gdHJ1ZVxuICAgICAgfHwgJGxheW91dC52aWV3LnZhbHVlLmluZGV4T2YoJ0YnKSA+IC0xXG4gICAgICB8fCAoJHEucGxhdGZvcm0uaXMuaW9zICYmICRsYXlvdXQuaXNDb250YWluZXIudmFsdWUgPT09IHRydWUpXG4gICAgKVxuXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJGxheW91dC5pc0NvbnRhaW5lci52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/ICRsYXlvdXQuY29udGFpbmVySGVpZ2h0LnZhbHVlXG4gICAgICAgIDogd2luZG93SGVpZ2h0LnZhbHVlXG4gICAgKSlcblxuICAgIGNvbnN0IG9mZnNldCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5tb2RlbFZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBpZiAoZml4ZWQudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHJldmVhbGVkLnZhbHVlID09PSB0cnVlID8gc2l6ZS52YWx1ZSA6IDBcbiAgICAgIH1cbiAgICAgIGNvbnN0IG9mZnNldCA9ICRsYXlvdXQuc2Nyb2xsLnZhbHVlLnBvc2l0aW9uICsgY29udGFpbmVySGVpZ2h0LnZhbHVlICsgc2l6ZS52YWx1ZSAtICRsYXlvdXQuaGVpZ2h0LnZhbHVlXG4gICAgICByZXR1cm4gb2Zmc2V0ID4gMCA/IG9mZnNldCA6IDBcbiAgICB9KVxuXG4gICAgY29uc3QgaGlkZGVuID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWUgfHwgKGZpeGVkLnZhbHVlID09PSB0cnVlICYmIHJldmVhbGVkLnZhbHVlICE9PSB0cnVlKVxuICAgIClcblxuICAgIGNvbnN0IHJldmVhbE9uRm9jdXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMubW9kZWxWYWx1ZSA9PT0gdHJ1ZSAmJiBoaWRkZW4udmFsdWUgPT09IHRydWUgJiYgcHJvcHMucmV2ZWFsID09PSB0cnVlXG4gICAgKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1mb290ZXIgcS1sYXlvdXRfX3NlY3Rpb24tLW1hcmdpbmFsICdcbiAgICAgICsgKGZpeGVkLnZhbHVlID09PSB0cnVlID8gJ2ZpeGVkJyA6ICdhYnNvbHV0ZScpICsgJy1ib3R0b20nXG4gICAgICArIChwcm9wcy5ib3JkZXJlZCA9PT0gdHJ1ZSA/ICcgcS1mb290ZXItLWJvcmRlcmVkJyA6ICcnKVxuICAgICAgKyAoaGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLWZvb3Rlci0taGlkZGVuJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IHRydWVcbiAgICAgICAgICA/ICcgcS1sYXlvdXQtLXByZXZlbnQtZm9jdXMnICsgKGZpeGVkLnZhbHVlICE9PSB0cnVlID8gJyBoaWRkZW4nIDogJycpXG4gICAgICAgICAgOiAnJ1xuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3RcbiAgICAgICAgdmlldyA9ICRsYXlvdXQucm93cy52YWx1ZS5ib3R0b20sXG4gICAgICAgIGNzcyA9IHt9XG5cbiAgICAgIGlmICh2aWV3WyAwIF0gPT09ICdsJyAmJiAkbGF5b3V0LmxlZnQuc3BhY2UgPT09IHRydWUpIHtcbiAgICAgICAgY3NzWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXSA9IGAkeyAkbGF5b3V0LmxlZnQuc2l6ZSB9cHhgXG4gICAgICB9XG4gICAgICBpZiAodmlld1sgMiBdID09PSAncicgJiYgJGxheW91dC5yaWdodC5zcGFjZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjc3NbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdID0gYCR7ICRsYXlvdXQucmlnaHQuc2l6ZSB9cHhgXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjc3NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTGF5b3V0IChwcm9wLCB2YWwpIHtcbiAgICAgICRsYXlvdXQudXBkYXRlKCdmb290ZXInLCBwcm9wLCB2YWwpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTG9jYWwgKHByb3AsIHZhbCkge1xuICAgICAgaWYgKHByb3AudmFsdWUgIT09IHZhbCkge1xuICAgICAgICBwcm9wLnZhbHVlID0gdmFsXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUgKHsgaGVpZ2h0IH0pIHtcbiAgICAgIHVwZGF0ZUxvY2FsKHNpemUsIGhlaWdodClcbiAgICAgIHVwZGF0ZUxheW91dCgnc2l6ZScsIGhlaWdodClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVSZXZlYWxlZCAoKSB7XG4gICAgICBpZiAocHJvcHMucmV2ZWFsICE9PSB0cnVlKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHsgZGlyZWN0aW9uLCBwb3NpdGlvbiwgaW5mbGVjdGlvblBvaW50IH0gPSAkbGF5b3V0LnNjcm9sbC52YWx1ZVxuXG4gICAgICB1cGRhdGVMb2NhbChyZXZlYWxlZCwgKFxuICAgICAgICBkaXJlY3Rpb24gPT09ICd1cCdcbiAgICAgICAgfHwgcG9zaXRpb24gLSBpbmZsZWN0aW9uUG9pbnQgPCAxMDBcbiAgICAgICAgfHwgJGxheW91dC5oZWlnaHQudmFsdWUgLSBjb250YWluZXJIZWlnaHQudmFsdWUgLSBwb3NpdGlvbiAtIHNpemUudmFsdWUgPCAzMDBcbiAgICAgICkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChldnQpIHtcbiAgICAgIGlmIChyZXZlYWxPbkZvY3VzLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHVwZGF0ZUxvY2FsKHJldmVhbGVkLCB0cnVlKVxuICAgICAgfVxuXG4gICAgICBlbWl0KCdmb2N1c2luJywgZXZ0KVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgdmFsKVxuICAgICAgdXBkYXRlTG9jYWwocmV2ZWFsZWQsIHRydWUpXG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgIH0pXG5cbiAgICB3YXRjaChvZmZzZXQsIHZhbCA9PiB7XG4gICAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIHZhbClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZWFsLCB2YWwgPT4ge1xuICAgICAgdmFsID09PSBmYWxzZSAmJiB1cGRhdGVMb2NhbChyZXZlYWxlZCwgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB9KVxuXG4gICAgd2F0Y2gocmV2ZWFsZWQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmFuaW1hdGUoKVxuICAgICAgZW1pdCgncmV2ZWFsJywgdmFsKVxuICAgIH0pXG5cbiAgICB3YXRjaChbIHNpemUsICRsYXlvdXQuc2Nyb2xsLCAkbGF5b3V0LmhlaWdodCBdLCB1cGRhdGVSZXZlYWxlZClcblxuICAgIHdhdGNoKCgpID0+ICRxLnNjcmVlbi5oZWlnaHQsIHZhbCA9PiB7XG4gICAgICAkbGF5b3V0LmlzQ29udGFpbmVyLnZhbHVlICE9PSB0cnVlICYmIHVwZGF0ZUxvY2FsKHdpbmRvd0hlaWdodCwgdmFsKVxuICAgIH0pXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IHt9XG5cbiAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSBpbnN0YW5jZVxuICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgdXBkYXRlTGF5b3V0KCdzaXplJywgc2l6ZS52YWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgcHJvcHMubW9kZWxWYWx1ZSlcbiAgICB1cGRhdGVMYXlvdXQoJ29mZnNldCcsIG9mZnNldC52YWx1ZSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoJGxheW91dC5pbnN0YW5jZXMuZm9vdGVyID09PSBpbnN0YW5jZSkge1xuICAgICAgICAkbGF5b3V0Lmluc3RhbmNlcy5mb290ZXIgPSB2b2lkIDBcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdzaXplJywgMClcbiAgICAgICAgdXBkYXRlTGF5b3V0KCdvZmZzZXQnLCAwKVxuICAgICAgICB1cGRhdGVMYXlvdXQoJ3NwYWNlJywgZmFsc2UpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW1xuICAgICAgICBoKFFSZXNpemVPYnNlcnZlciwge1xuICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgIG9uUmVzaXplXG4gICAgICAgIH0pXG4gICAgICBdKVxuXG4gICAgICBwcm9wcy5lbGV2YXRlZCA9PT0gdHJ1ZSAmJiBjaGlsZC5wdXNoKFxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWxheW91dF9fc2hhZG93IGFic29sdXRlLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIG5vLXBvaW50ZXItZXZlbnRzJ1xuICAgICAgICB9KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZm9vdGVyJywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICBvbkZvY3VzaW5cbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGgsIHJlZiwgcmVhY3RpdmUsIGNvbXB1dGVkLCB3YXRjaCwgcHJvdmlkZSwgb25Vbm1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgaXNSdW50aW1lU3NyUHJlSHlkcmF0aW9uIH0gZnJvbSAnLi4vLi4vcGx1Z2lucy9QbGF0Zm9ybS5qcydcblxuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGdldFNjcm9sbGJhcldpZHRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgbGF5b3V0S2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUxheW91dCcsXG5cbiAgcHJvcHM6IHtcbiAgICBjb250YWluZXI6IEJvb2xlYW4sXG4gICAgdmlldzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2hoaCBscHIgZmZmJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiAvXihofGwpaChofHIpIGxwciAoZnxsKWYoZnxyKSQvLnRlc3Qodi50b0xvd2VyQ2FzZSgpKVxuICAgIH0sXG5cbiAgICBvblNjcm9sbDogRnVuY3Rpb24sXG4gICAgb25TY3JvbGxIZWlnaHQ6IEZ1bmN0aW9uLFxuICAgIG9uUmVzaXplOiBGdW5jdGlvblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgLy8gcGFnZSByZWxhdGVkXG4gICAgY29uc3QgaGVpZ2h0ID0gcmVmKCRxLnNjcmVlbi5oZWlnaHQpXG4gICAgY29uc3Qgd2lkdGggPSByZWYocHJvcHMuY29udGFpbmVyID09PSB0cnVlID8gMCA6ICRxLnNjcmVlbi53aWR0aClcbiAgICBjb25zdCBzY3JvbGwgPSByZWYoeyBwb3NpdGlvbjogMCwgZGlyZWN0aW9uOiAnZG93bicsIGluZmxlY3Rpb25Qb2ludDogMCB9KVxuXG4gICAgLy8gY29udGFpbmVyIG9ubHkgcHJvcFxuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IHJlZigwKVxuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gcmVmKGlzUnVudGltZVNzclByZUh5ZHJhdGlvbi52YWx1ZSA9PT0gdHJ1ZSA/IDAgOiBnZXRTY3JvbGxiYXJXaWR0aCgpKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1sYXlvdXQgcS1sYXlvdXQtLSdcbiAgICAgICsgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSA/ICdjb250YWluZXJpemVkJyA6ICdzdGFuZGFyZCcpXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jb250YWluZXIgPT09IGZhbHNlXG4gICAgICAgID8geyBtaW5IZWlnaHQ6ICRxLnNjcmVlbi5oZWlnaHQgKyAncHgnIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIC8vIHVzZWQgYnkgY29udGFpbmVyIG9ubHlcbiAgICBjb25zdCB0YXJnZXRTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHNjcm9sbGJhcldpZHRoLnZhbHVlICE9PSAwXG4gICAgICAgID8geyBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ2xlZnQnIDogJ3JpZ2h0JyBdOiBgJHsgc2Nyb2xsYmFyV2lkdGgudmFsdWUgfXB4YCB9XG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCB0YXJnZXRDaGlsZFN0eWxlID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgc2Nyb2xsYmFyV2lkdGgudmFsdWUgIT09IDBcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBbICRxLmxhbmcucnRsID09PSB0cnVlID8gJ3JpZ2h0JyA6ICdsZWZ0JyBdOiAwLFxuICAgICAgICAgICAgWyAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdsZWZ0JyA6ICdyaWdodCcgXTogYC0keyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGBjYWxjKDEwMCUgKyAkeyBzY3JvbGxiYXJXaWR0aC52YWx1ZSB9cHgpYFxuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgKSlcblxuICAgIGZ1bmN0aW9uIG9uUGFnZVNjcm9sbCAoZGF0YSkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSB8fCBkb2N1bWVudC5xU2Nyb2xsUHJldmVudGVkICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGluZm8gPSB7XG4gICAgICAgICAgcG9zaXRpb246IGRhdGEucG9zaXRpb24udG9wLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGF0YS5kaXJlY3Rpb24sXG4gICAgICAgICAgZGlyZWN0aW9uQ2hhbmdlZDogZGF0YS5kaXJlY3Rpb25DaGFuZ2VkLFxuICAgICAgICAgIGluZmxlY3Rpb25Qb2ludDogZGF0YS5pbmZsZWN0aW9uUG9pbnQudG9wLFxuICAgICAgICAgIGRlbHRhOiBkYXRhLmRlbHRhLnRvcFxuICAgICAgICB9XG5cbiAgICAgICAgc2Nyb2xsLnZhbHVlID0gaW5mb1xuICAgICAgICBwcm9wcy5vblNjcm9sbCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbCcsIGluZm8pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25QYWdlUmVzaXplIChkYXRhKSB7XG4gICAgICBjb25zdCB7IGhlaWdodDogbmV3SGVpZ2h0LCB3aWR0aDogbmV3V2lkdGggfSA9IGRhdGFcbiAgICAgIGxldCByZXNpemVkID0gZmFsc2VcblxuICAgICAgaWYgKGhlaWdodC52YWx1ZSAhPT0gbmV3SGVpZ2h0KSB7XG4gICAgICAgIHJlc2l6ZWQgPSB0cnVlXG4gICAgICAgIGhlaWdodC52YWx1ZSA9IG5ld0hlaWdodFxuICAgICAgICBwcm9wcy5vblNjcm9sbEhlaWdodCAhPT0gdm9pZCAwICYmIGVtaXQoJ3Njcm9sbEhlaWdodCcsIG5ld0hlaWdodClcbiAgICAgICAgdXBkYXRlU2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgfVxuICAgICAgaWYgKHdpZHRoLnZhbHVlICE9PSBuZXdXaWR0aCkge1xuICAgICAgICByZXNpemVkID0gdHJ1ZVxuICAgICAgICB3aWR0aC52YWx1ZSA9IG5ld1dpZHRoXG4gICAgICB9XG5cbiAgICAgIGlmIChyZXNpemVkID09PSB0cnVlICYmIHByb3BzLm9uUmVzaXplICE9PSB2b2lkIDApIHtcbiAgICAgICAgZW1pdCgncmVzaXplJywgZGF0YSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNvbnRhaW5lclJlc2l6ZSAoeyBoZWlnaHQgfSkge1xuICAgICAgaWYgKGNvbnRhaW5lckhlaWdodC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lckhlaWdodC52YWx1ZSA9IGhlaWdodFxuICAgICAgICB1cGRhdGVTY3JvbGxiYXJXaWR0aCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsYmFyV2lkdGggKCkge1xuICAgICAgaWYgKHByb3BzLmNvbnRhaW5lciA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGhlaWdodC52YWx1ZSA+IGNvbnRhaW5lckhlaWdodC52YWx1ZVxuICAgICAgICAgID8gZ2V0U2Nyb2xsYmFyV2lkdGgoKVxuICAgICAgICAgIDogMFxuXG4gICAgICAgIGlmIChzY3JvbGxiYXJXaWR0aC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgICBzY3JvbGxiYXJXaWR0aC52YWx1ZSA9IHdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgdGltZXJcblxuICAgIGNvbnN0ICRsYXlvdXQgPSB7XG4gICAgICBpbnN0YW5jZXM6IHt9LFxuICAgICAgdmlldzogY29tcHV0ZWQoKCkgPT4gcHJvcHMudmlldyksXG4gICAgICBpc0NvbnRhaW5lcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuY29udGFpbmVyKSxcblxuICAgICAgcm9vdFJlZixcblxuICAgICAgaGVpZ2h0LFxuICAgICAgY29udGFpbmVySGVpZ2h0LFxuICAgICAgc2Nyb2xsYmFyV2lkdGgsXG4gICAgICB0b3RhbFdpZHRoOiBjb21wdXRlZCgoKSA9PiB3aWR0aC52YWx1ZSArIHNjcm9sbGJhcldpZHRoLnZhbHVlKSxcblxuICAgICAgcm93czogY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgICBjb25zdCByb3dzID0gcHJvcHMudmlldy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcgJylcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB0b3A6IHJvd3NbIDAgXS5zcGxpdCgnJyksXG4gICAgICAgICAgbWlkZGxlOiByb3dzWyAxIF0uc3BsaXQoJycpLFxuICAgICAgICAgIGJvdHRvbTogcm93c1sgMiBdLnNwbGl0KCcnKVxuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgaGVhZGVyOiByZWFjdGl2ZSh7IHNpemU6IDAsIG9mZnNldDogMCwgc3BhY2U6IGZhbHNlIH0pLFxuICAgICAgcmlnaHQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGZvb3RlcjogcmVhY3RpdmUoeyBzaXplOiAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcbiAgICAgIGxlZnQ6IHJlYWN0aXZlKHsgc2l6ZTogMzAwLCBvZmZzZXQ6IDAsIHNwYWNlOiBmYWxzZSB9KSxcblxuICAgICAgc2Nyb2xsLFxuXG4gICAgICBhbmltYXRlICgpIHtcbiAgICAgICAgaWYgKHRpbWVyICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdxLWJvZHktLWxheW91dC1hbmltYXRlJylcbiAgICAgICAgICB0aW1lciA9IHZvaWQgMFxuICAgICAgICB9LCAxNTUpXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGUgKHBhcnQsIHByb3AsIHZhbCkge1xuICAgICAgICAkbGF5b3V0WyBwYXJ0IF1bIHByb3AgXSA9IHZhbFxuICAgICAgfVxuICAgIH1cblxuICAgIHByb3ZpZGUobGF5b3V0S2V5LCAkbGF5b3V0KVxuXG4gICAgLy8gcHJldmVudCBzY3JvbGxiYXIgZmxpY2tlciB3aGlsZSByZXNpemluZyB3aW5kb3cgaGVpZ2h0XG4gICAgLy8gaWYgbm8gcGFnZSBzY3JvbGxiYXIgaXMgYWxyZWFkeSBwcmVzZW50XG4gICAgaWYgKF9fUVVBU0FSX1NTUl9TRVJWRVJfXyAhPT0gdHJ1ZSAmJiBnZXRTY3JvbGxiYXJXaWR0aCgpID4gMCkge1xuICAgICAgbGV0IHRpbWVyID0gbnVsbFxuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5ib2R5XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3RvcmVTY3JvbGxiYXIgKCkge1xuICAgICAgICB0aW1lciA9IG51bGxcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1zY3JvbGxiYXInKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBoaWRlU2Nyb2xsYmFyICgpIHtcbiAgICAgICAgaWYgKHRpbWVyID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gaWYgaXQgaGFzIG5vIHNjcm9sbGJhciB0aGVuIHRoZXJlJ3Mgbm90aGluZyB0byBkb1xuXG4gICAgICAgICAgaWYgKGVsLnNjcm9sbEhlaWdodCA+ICRxLnNjcmVlbi5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUtc2Nyb2xsYmFyJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpXG4gICAgICAgIH1cblxuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQocmVzdG9yZVNjcm9sbGJhciwgMzAwKVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxFdmVudCAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCAmJiBhY3Rpb24gPT09ICdyZW1vdmUnKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgICAgIHJlc3RvcmVTY3JvbGxiYXIoKVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93WyBgJHsgYWN0aW9uIH1FdmVudExpc3RlbmVyYCBdKCdyZXNpemUnLCBoaWRlU2Nyb2xsYmFyKVxuICAgICAgfVxuXG4gICAgICB3YXRjaChcbiAgICAgICAgKCkgPT4gKHByb3BzLmNvbnRhaW5lciAhPT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZScpLFxuICAgICAgICB1cGRhdGVTY3JvbGxFdmVudFxuICAgICAgKVxuXG4gICAgICBwcm9wcy5jb250YWluZXIgIT09IHRydWUgJiYgdXBkYXRlU2Nyb2xsRXZlbnQoJ2FkZCcpXG5cbiAgICAgIG9uVW5tb3VudGVkKCgpID0+IHtcbiAgICAgICAgdXBkYXRlU2Nyb2xsRXZlbnQoJ3JlbW92ZScpXG4gICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gaE1lcmdlU2xvdChzbG90cy5kZWZhdWx0LCBbXG4gICAgICAgIGgoUVNjcm9sbE9ic2VydmVyLCB7IG9uU2Nyb2xsOiBvblBhZ2VTY3JvbGwgfSksXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiBvblBhZ2VSZXNpemUgfSlcbiAgICAgIF0pXG5cbiAgICAgIGNvbnN0IGxheW91dCA9IGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcmVmOiBwcm9wcy5jb250YWluZXIgPT09IHRydWUgPyB2b2lkIDAgOiByb290UmVmLFxuICAgICAgICB0YWJpbmRleDogLTFcbiAgICAgIH0sIGNvbnRlbnQpXG5cbiAgICAgIGlmIChwcm9wcy5jb250YWluZXIgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtbGF5b3V0LWNvbnRhaW5lciBvdmVyZmxvdy1oaWRkZW4nLFxuICAgICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgICB9LCBbXG4gICAgICAgICAgaChRUmVzaXplT2JzZXJ2ZXIsIHsgb25SZXNpemU6IG9uQ29udGFpbmVyUmVzaXplIH0pLFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAnYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgICBzdHlsZTogdGFyZ2V0U3R5bGUudmFsdWVcbiAgICAgICAgICB9LCBbXG4gICAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnc2Nyb2xsJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHRhcmdldENoaWxkU3R5bGUudmFsdWVcbiAgICAgICAgICAgIH0sIFsgbGF5b3V0IF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxheW91dFxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtY2FyZCBjbGFzcz1cIm15LWNhcmQgYmctYmxhY2tcIiBmbGF0IHYtaWY9XCJzb25nUXVldWUuY3VycmVudGx5UGxheWluZyAhPT0gdW5kZWZpbmVkXCI+XG4gICAgPHEtY2FyZC1zZWN0aW9uIGhvcml6b250YWw+XG4gICAgICA8cS1pbWdcbiAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEyNXB4OyBtYXgtd2lkdGg6IDEyNXB4XCJcbiAgICAgICAgOnNyYz1cInNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmFsYnVtLnRodW1ibmFpbC5zbWFsbC51cmxcIlxuICAgICAgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uIGNsYXNzPVwianVzdGlmeS1hcm91bmQgcS1weS1ub25lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2IGxpbmtcIiBAY2xpY2s9XCJnb3RvVHJhY2tcIj57eyBzb25nUXVldWUuY3VycmVudGx5UGxheWluZy5uYW1lLl9kZWZhdWx0IH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMiBsaW5rXCIgQGNsaWNrPVwiZ290b0FsYnVtXCI+e3sgc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcuYWxidW0uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMSB0ZXh0LWdyZXkgcS1weS1zbSBsaW5rXCIgQGNsaWNrPVwiZ290b0FydGlzdFwiPnt7IHNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmFsYnVtLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX08L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1jYXJkLWFjdGlvbnMgdmVydGljYWwgY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB4LW1kXCI+XG4gICAgICAgIDxxLWJ0biBmbGF0IHJvdW5kIHNpemU9XCJtZFwiIGNvbG9yPVwicmVkXCIgOmljb249XCJvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXCIgLz5cbiAgICAgICAgPHEtYnRuIGZsYXQgcm91bmQgc2l6ZT1cIm1kXCIgY29sb3I9XCJhY2NlbnRcIiA6aWNvbj1cIm91dGxpbmVkUGxheWxpc3RBZGRDaXJjbGVcIj5cbiAgICAgICAgICA8cS1tZW51PlxuICAgICAgICAgICAgPEFkZFRvUGxheWxpc3RNZW51IDp0cmFjay1pZD1cInNvbmdRdWV1ZS5jdXJyZW50bHlQbGF5aW5nLmlkXCI+PC9BZGRUb1BsYXlsaXN0TWVudT5cbiAgICAgICAgICA8L3EtbWVudT5cbiAgICAgICAgPC9xLWJ0bj5cbiAgICAgIDwvcS1jYXJkLWFjdGlvbnM+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnVHJhY2tJbmZvQ2FyZCdcbn1cbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRQbGF5bGlzdEFkZENpcmNsZSxcbiAgb3V0bGluZWRGYXZvcml0ZUJvcmRlclxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSAnc3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlcic7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcbmltcG9ydCBBZGRUb1BsYXlsaXN0TWVudSBmcm9tIFwiY29tcG9uZW50cy9BZGRUb1BsYXlsaXN0TWVudS52dWVcIjtcblxuY29uc3Qgc29uZ1F1ZXVlID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBnb3RvQXJ0aXN0ID0gKCkgPT4ge1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhcnRpc3QnLCBwYXJhbXM6IHsgYXJ0aXN0OiBzb25nUXVldWUuY3VycmVudGx5UGxheWluZz8uYWxidW0/LmFsYnVtQXJ0aXN0IVswXSEubmFtZSB9IH0pXG59XG5cbmNvbnN0IGdvdG9BbGJ1bSA9ICgpID0+IHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAnYWxidW0nLCBwYXJhbXM6IHsgYWxidW1JZDogc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmc/LmFsYnVtPy5pZCB9IH0pXG59XG5cbmNvbnN0IGdvdG9UcmFjayA9ICgpID0+IHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAndHJhY2snLCBwYXJhbXM6IHsgdHJhY2tJZDogc29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmc/LmlkIH0gfSlcbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgb25CZWZvcmVVbm1vdW50LCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBUb3VjaFBhbiBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoUGFuLmpzJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHsgdXNlRm9ybVByb3BzLCB1c2VGb3JtSW5qZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZm9ybS5qcydcblxuaW1wb3J0IHsgYmV0d2VlbiB9IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC5qcydcbmltcG9ydCB7IHBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBpc051bWJlciwgaXNPYmplY3QgfSBmcm9tICcuLi8uLi91dGlscy9pcy5qcydcbmltcG9ydCB7IGhEaXIgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgbWFya2VyUHJlZml4Q2xhc3MgPSAncS1zbGlkZXJfX21hcmtlci1sYWJlbHMnXG5jb25zdCBkZWZhdWx0TWFya2VyQ29udmVydEZuID0gdiA9PiAoeyB2YWx1ZTogdiB9KVxuY29uc3QgZGVmYXVsdE1hcmtlckxhYmVsUmVuZGVyRm4gPSAoeyBtYXJrZXIgfSkgPT4gaCgnZGl2Jywge1xuICBrZXk6IG1hcmtlci52YWx1ZSxcbiAgc3R5bGU6IG1hcmtlci5zdHlsZSxcbiAgY2xhc3M6IG1hcmtlci5jbGFzc2VzXG59LCBtYXJrZXIubGFiZWwpXG5cbi8vIFBHRE9XTiwgTEVGVCwgRE9XTiwgUEdVUCwgUklHSFQsIFVQXG5leHBvcnQgY29uc3Qga2V5Q29kZXMgPSBbIDM0LCAzNywgNDAsIDMzLCAzOSwgMzggXVxuXG5leHBvcnQgY29uc3QgdXNlU2xpZGVyUHJvcHMgPSB7XG4gIC4uLnVzZURhcmtQcm9wcyxcbiAgLi4udXNlRm9ybVByb3BzLFxuXG4gIG1pbjoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwXG4gIH0sXG4gIG1heDoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAxMDBcbiAgfSxcbiAgaW5uZXJNaW46IE51bWJlcixcbiAgaW5uZXJNYXg6IE51bWJlcixcblxuICBzdGVwOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDEsXG4gICAgdmFsaWRhdG9yOiB2ID0+IHYgPj0gMFxuICB9LFxuXG4gIHNuYXA6IEJvb2xlYW4sXG5cbiAgdmVydGljYWw6IEJvb2xlYW4sXG4gIHJldmVyc2U6IEJvb2xlYW4sXG5cbiAgaGlkZVNlbGVjdGlvbjogQm9vbGVhbixcblxuICBjb2xvcjogU3RyaW5nLFxuICBtYXJrZXJMYWJlbHNDbGFzczogU3RyaW5nLFxuXG4gIGxhYmVsOiBCb29sZWFuLFxuICBsYWJlbENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsVGV4dENvbG9yOiBTdHJpbmcsXG4gIGxhYmVsQWx3YXlzOiBCb29sZWFuLFxuICBzd2l0Y2hMYWJlbFNpZGU6IEJvb2xlYW4sXG5cbiAgbWFya2VyczogWyBCb29sZWFuLCBOdW1iZXIgXSxcbiAgbWFya2VyTGFiZWxzOiBbIEJvb2xlYW4sIEFycmF5LCBPYmplY3QsIEZ1bmN0aW9uIF0sXG4gIHN3aXRjaE1hcmtlckxhYmVsc1NpZGU6IEJvb2xlYW4sXG5cbiAgdHJhY2tJbWc6IFN0cmluZyxcbiAgdHJhY2tDb2xvcjogU3RyaW5nLFxuICBpbm5lclRyYWNrSW1nOiBTdHJpbmcsXG4gIGlubmVyVHJhY2tDb2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25Db2xvcjogU3RyaW5nLFxuICBzZWxlY3Rpb25JbWc6IFN0cmluZyxcblxuICB0aHVtYlNpemU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogJzIwcHgnXG4gIH0sXG4gIHRyYWNrU2l6ZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBkZWZhdWx0OiAnNHB4J1xuICB9LFxuXG4gIGRpc2FibGU6IEJvb2xlYW4sXG4gIHJlYWRvbmx5OiBCb29sZWFuLFxuICBkZW5zZTogQm9vbGVhbixcblxuICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gIHRodW1iQ29sb3I6IFN0cmluZyxcbiAgdGh1bWJQYXRoOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGRlZmF1bHQ6ICdNIDQsIDEwIGEgNiw2IDAgMSwwIDEyLDAgYSA2LDYgMCAxLDAgLTEyLDAnXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNsaWRlckVtaXRzID0gWyAncGFuJywgJ3VwZGF0ZTptb2RlbFZhbHVlJywgJ2NoYW5nZScgXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyB1cGRhdGVWYWx1ZSwgdXBkYXRlUG9zaXRpb24sIGdldERyYWdnaW5nLCBmb3JtQXR0cnMgfSkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBzbG90cywgcHJveHk6IHsgJHEgfSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgY29uc3QgaW5qZWN0Rm9ybUlucHV0ID0gdXNlRm9ybUluamVjdChmb3JtQXR0cnMpXG5cbiAgY29uc3QgYWN0aXZlID0gcmVmKGZhbHNlKVxuICBjb25zdCBwcmV2ZW50Rm9jdXMgPSByZWYoZmFsc2UpXG4gIGNvbnN0IGZvY3VzID0gcmVmKGZhbHNlKVxuICBjb25zdCBkcmFnZ2luZyA9IHJlZihmYWxzZSlcblxuICBjb25zdCBheGlzID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJy0tdicgOiAnLS1oJykpXG4gIGNvbnN0IGxhYmVsU2lkZSA9IGNvbXB1dGVkKCgpID0+ICctJyArIChwcm9wcy5zd2l0Y2hMYWJlbFNpZGUgPT09IHRydWUgPyAnc3dpdGNoZWQnIDogJ3N0YW5kYXJkJykpXG5cbiAgY29uc3QgaXNSZXZlcnNlZCA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgPyBwcm9wcy5yZXZlcnNlID09PSB0cnVlXG4gICAgICA6IHByb3BzLnJldmVyc2UgIT09ICgkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSlcbiAgKSlcblxuICBjb25zdCBpbm5lck1pbiA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBpc05hTihwcm9wcy5pbm5lck1pbikgPT09IHRydWUgfHwgcHJvcHMuaW5uZXJNaW4gPCBwcm9wcy5taW5cbiAgICAgID8gcHJvcHMubWluXG4gICAgICA6IHByb3BzLmlubmVyTWluXG4gICkpXG4gIGNvbnN0IGlubmVyTWF4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTmFOKHByb3BzLmlubmVyTWF4KSA9PT0gdHJ1ZSB8fCBwcm9wcy5pbm5lck1heCA+IHByb3BzLm1heFxuICAgICAgPyBwcm9wcy5tYXhcbiAgICAgIDogcHJvcHMuaW5uZXJNYXhcbiAgKSlcblxuICBjb25zdCBlZGl0YWJsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIHByb3BzLnJlYWRvbmx5ICE9PSB0cnVlXG4gICAgJiYgaW5uZXJNaW4udmFsdWUgPCBpbm5lck1heC52YWx1ZVxuICApKVxuXG4gIGNvbnN0IGRlY2ltYWxzID0gY29tcHV0ZWQoKCkgPT4gKFN0cmluZyhwcm9wcy5zdGVwKS50cmltKCkuc3BsaXQoJy4nKVsgMSBdIHx8ICcnKS5sZW5ndGgpXG4gIGNvbnN0IHN0ZXAgPSBjb21wdXRlZCgoKSA9PiAocHJvcHMuc3RlcCA9PT0gMCA/IDEgOiBwcm9wcy5zdGVwKSlcbiAgY29uc3QgdGFiaW5kZXggPSBjb21wdXRlZCgoKSA9PiAoZWRpdGFibGUudmFsdWUgPT09IHRydWUgPyBwcm9wcy50YWJpbmRleCB8fCAwIDogLTEpKVxuXG4gIGNvbnN0IHRyYWNrTGVuID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMubWF4IC0gcHJvcHMubWluKVxuICBjb25zdCBpbm5lckJhckxlbiA9IGNvbXB1dGVkKCgpID0+IGlubmVyTWF4LnZhbHVlIC0gaW5uZXJNaW4udmFsdWUpXG5cbiAgY29uc3QgaW5uZXJNaW5SYXRpbyA9IGNvbXB1dGVkKCgpID0+IGNvbnZlcnRNb2RlbFRvUmF0aW8oaW5uZXJNaW4udmFsdWUpKVxuICBjb25zdCBpbm5lck1heFJhdGlvID0gY29tcHV0ZWQoKCkgPT4gY29udmVydE1vZGVsVG9SYXRpbyhpbm5lck1heC52YWx1ZSkpXG5cbiAgY29uc3QgcG9zaXRpb25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICA/IChpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gJ2JvdHRvbScgOiAndG9wJylcbiAgICAgIDogKGlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAncmlnaHQnIDogJ2xlZnQnKVxuICApKVxuXG4gIGNvbnN0IHNpemVQcm9wID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2hlaWdodCcgOiAnd2lkdGgnKSlcbiAgY29uc3QgdGhpY2tuZXNzUHJvcCA9IGNvbXB1dGVkKCgpID0+IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd3aWR0aCcgOiAnaGVpZ2h0JykpXG4gIGNvbnN0IG9yaWVudGF0aW9uID0gY29tcHV0ZWQoKCkgPT4gKHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJykpXG5cbiAgY29uc3QgYXR0cmlidXRlcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSB7XG4gICAgICByb2xlOiAnc2xpZGVyJyxcbiAgICAgICdhcmlhLXZhbHVlbWluJzogaW5uZXJNaW4udmFsdWUsXG4gICAgICAnYXJpYS12YWx1ZW1heCc6IGlubmVyTWF4LnZhbHVlLFxuICAgICAgJ2FyaWEtb3JpZW50YXRpb24nOiBvcmllbnRhdGlvbi52YWx1ZSxcbiAgICAgICdkYXRhLXN0ZXAnOiBwcm9wcy5zdGVwXG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtZGlzYWJsZWQnIF0gPSAndHJ1ZSdcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcHMucmVhZG9ubHkgPT09IHRydWUpIHtcbiAgICAgIGFjY1sgJ2FyaWEtcmVhZG9ubHknIF0gPSAndHJ1ZSdcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgYHEtc2xpZGVyIHEtc2xpZGVyJHsgYXhpcy52YWx1ZSB9IHEtc2xpZGVyLS0keyBhY3RpdmUudmFsdWUgPT09IHRydWUgPyAnJyA6ICdpbicgfWFjdGl2ZSBpbmxpbmUgbm8td3JhcCBgXG4gICAgKyAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAncm93JyA6ICdjb2x1bW4nKVxuICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcgcS1zbGlkZXItLWVuYWJsZWQnICsgKGVkaXRhYmxlLnZhbHVlID09PSB0cnVlID8gJyBxLXNsaWRlci0tZWRpdGFibGUnIDogJycpKVxuICAgICsgKGZvY3VzLnZhbHVlID09PSAnYm90aCcgPyAnIHEtc2xpZGVyLS1mb2N1cycgOiAnJylcbiAgICArIChwcm9wcy5sYWJlbCB8fCBwcm9wcy5sYWJlbEFsd2F5cyA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWxhYmVsJyA6ICcnKVxuICAgICsgKHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlID8gJyBxLXNsaWRlci0tbGFiZWwtYWx3YXlzJyA6ICcnKVxuICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zbGlkZXItLWRhcmsnIDogJycpXG4gICAgKyAocHJvcHMuZGVuc2UgPT09IHRydWUgPyAnIHEtc2xpZGVyLS1kZW5zZSBxLXNsaWRlci0tZGVuc2UnICsgYXhpcy52YWx1ZSA6ICcnKVxuICApXG5cbiAgZnVuY3Rpb24gZ2V0UG9zaXRpb25DbGFzcyAobmFtZSkge1xuICAgIGNvbnN0IGNscyA9ICdxLXNsaWRlcl9fJyArIG5hbWVcbiAgICByZXR1cm4gYCR7IGNscyB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9ICR7IGNscyB9JHsgYXhpcy52YWx1ZSB9JHsgbGFiZWxTaWRlLnZhbHVlIH1gXG4gIH1cbiAgZnVuY3Rpb24gZ2V0QXhpc0NsYXNzIChuYW1lKSB7XG4gICAgY29uc3QgY2xzID0gJ3Etc2xpZGVyX18nICsgbmFtZVxuICAgIHJldHVybiBgJHsgY2xzIH0gJHsgY2xzIH0keyBheGlzLnZhbHVlIH1gXG4gIH1cblxuICBjb25zdCBzZWxlY3Rpb25CYXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBjb2xvciA9IHByb3BzLnNlbGVjdGlvbkNvbG9yIHx8IHByb3BzLmNvbG9yXG4gICAgcmV0dXJuICdxLXNsaWRlcl9fc2VsZWN0aW9uIGFic29sdXRlJ1xuICAgICAgKyAoY29sb3IgIT09IHZvaWQgMCA/IGAgdGV4dC0keyBjb2xvciB9YCA6ICcnKVxuICB9KVxuICBjb25zdCBtYXJrZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldEF4aXNDbGFzcygnbWFya2VycycpICsgJyBhYnNvbHV0ZSBvdmVyZmxvdy1oaWRkZW4nKVxuICBjb25zdCB0cmFja0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT4gZ2V0QXhpc0NsYXNzKCd0cmFjay1jb250YWluZXInKSlcbiAgY29uc3QgcGluQ2xhc3MgPSBjb21wdXRlZCgoKSA9PiBnZXRQb3NpdGlvbkNsYXNzKCdwaW4nKSlcbiAgY29uc3QgbGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ2xhYmVsJykpXG4gIGNvbnN0IHRleHRDb250YWluZXJDbGFzcyA9IGNvbXB1dGVkKCgpID0+IGdldFBvc2l0aW9uQ2xhc3MoJ3RleHQtY29udGFpbmVyJykpXG4gIGNvbnN0IG1hcmtlckxhYmVsc0NvbnRhaW5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICBnZXRQb3NpdGlvbkNsYXNzKCdtYXJrZXItbGFiZWxzLWNvbnRhaW5lcicpXG4gICAgKyAocHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMubWFya2VyTGFiZWxzQ2xhc3MgfWAgOiAnJylcbiAgKVxuXG4gIGNvbnN0IHRyYWNrQ2xhc3MgPSBjb21wdXRlZCgoKSA9PlxuICAgICdxLXNsaWRlcl9fdHJhY2sgcmVsYXRpdmUtcG9zaXRpb24gbm8tb3V0bGluZSdcbiAgICArIChwcm9wcy50cmFja0NvbG9yICE9PSB2b2lkIDAgPyBgIGJnLSR7IHByb3BzLnRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCB0cmFja1N0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHsgWyB0aGlja25lc3NQcm9wLnZhbHVlIF06IHByb3BzLnRyYWNrU2l6ZSB9XG4gICAgaWYgKHByb3BzLnRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnRyYWNrSW1nIH0pICFpbXBvcnRhbnRgXG4gICAgfVxuICAgIHJldHVybiBhY2NcbiAgfSlcblxuICBjb25zdCBpbm5lckJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS1zbGlkZXJfX2lubmVyIGFic29sdXRlJ1xuICAgICsgKHByb3BzLmlubmVyVHJhY2tDb2xvciAhPT0gdm9pZCAwID8gYCBiZy0keyBwcm9wcy5pbm5lclRyYWNrQ29sb3IgfWAgOiAnJylcbiAgKVxuICBjb25zdCBpbm5lckJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgIFsgcG9zaXRpb25Qcm9wLnZhbHVlIF06IGAkeyAxMDAgKiBpbm5lck1pblJhdGlvLnZhbHVlIH0lYCxcbiAgICAgIFsgc2l6ZVByb3AudmFsdWUgXTogYCR7IDEwMCAqIChpbm5lck1heFJhdGlvLnZhbHVlIC0gaW5uZXJNaW5SYXRpby52YWx1ZSkgfSVgXG4gICAgfVxuICAgIGlmIChwcm9wcy5pbm5lclRyYWNrSW1nICE9PSB2b2lkIDApIHtcbiAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLmlubmVyVHJhY2tJbWcgfSkgIWltcG9ydGFudGBcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9KVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRSYXRpb1RvTW9kZWwgKHJhdGlvKSB7XG4gICAgY29uc3QgeyBtaW4sIG1heCwgc3RlcCB9ID0gcHJvcHNcbiAgICBsZXQgbW9kZWwgPSBtaW4gKyByYXRpbyAqIChtYXggLSBtaW4pXG5cbiAgICBpZiAoc3RlcCA+IDApIHtcbiAgICAgIGNvbnN0IG1vZHVsbyA9IChtb2RlbCAtIG1pbikgJSBzdGVwXG4gICAgICBtb2RlbCArPSAoTWF0aC5hYnMobW9kdWxvKSA+PSBzdGVwIC8gMiA/IChtb2R1bG8gPCAwID8gLTEgOiAxKSAqIHN0ZXAgOiAwKSAtIG1vZHVsb1xuICAgIH1cblxuICAgIGlmIChkZWNpbWFscy52YWx1ZSA+IDApIHtcbiAgICAgIG1vZGVsID0gcGFyc2VGbG9hdChtb2RlbC50b0ZpeGVkKGRlY2ltYWxzLnZhbHVlKSlcbiAgICB9XG5cbiAgICByZXR1cm4gYmV0d2Vlbihtb2RlbCwgaW5uZXJNaW4udmFsdWUsIGlubmVyTWF4LnZhbHVlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydE1vZGVsVG9SYXRpbyAobW9kZWwpIHtcbiAgICByZXR1cm4gdHJhY2tMZW4udmFsdWUgPT09IDBcbiAgICAgID8gMFxuICAgICAgOiAobW9kZWwgLSBwcm9wcy5taW4pIC8gdHJhY2tMZW4udmFsdWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERyYWdnaW5nUmF0aW8gKGV2dCwgZHJhZ2dpbmcpIHtcbiAgICBjb25zdFxuICAgICAgcG9zID0gcG9zaXRpb24oZXZ0KSxcbiAgICAgIHZhbCA9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8gYmV0d2VlbigocG9zLnRvcCAtIGRyYWdnaW5nLnRvcCkgLyBkcmFnZ2luZy5oZWlnaHQsIDAsIDEpXG4gICAgICAgIDogYmV0d2VlbigocG9zLmxlZnQgLSBkcmFnZ2luZy5sZWZ0KSAvIGRyYWdnaW5nLndpZHRoLCAwLCAxKVxuXG4gICAgcmV0dXJuIGJldHdlZW4oXG4gICAgICBpc1JldmVyc2VkLnZhbHVlID09PSB0cnVlID8gMS4wIC0gdmFsIDogdmFsLFxuICAgICAgaW5uZXJNaW5SYXRpby52YWx1ZSxcbiAgICAgIGlubmVyTWF4UmF0aW8udmFsdWVcbiAgICApXG4gIH1cblxuICBjb25zdCBtYXJrZXJTdGVwID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIGlzTnVtYmVyKHByb3BzLm1hcmtlcnMpID09PSB0cnVlID8gcHJvcHMubWFya2VycyA6IHN0ZXAudmFsdWUpXG4gIClcblxuICBjb25zdCBtYXJrZXJUaWNrcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBhY2MgPSBbXVxuICAgIGNvbnN0IHN0ZXAgPSBtYXJrZXJTdGVwLnZhbHVlXG4gICAgY29uc3QgbWF4ID0gcHJvcHMubWF4XG5cbiAgICBsZXQgdmFsdWUgPSBwcm9wcy5taW5cbiAgICBkbyB7XG4gICAgICBhY2MucHVzaCh2YWx1ZSlcbiAgICAgIHZhbHVlICs9IHN0ZXBcbiAgICB9IHdoaWxlICh2YWx1ZSA8IG1heClcblxuICAgIGFjYy5wdXNoKG1heClcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyTGFiZWxDbGFzcyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBwcmVmaXggPSBgICR7IG1hcmtlclByZWZpeENsYXNzIH0keyBheGlzLnZhbHVlIH0tYFxuICAgIHJldHVybiBtYXJrZXJQcmVmaXhDbGFzc1xuICAgICAgKyBgJHsgcHJlZml4IH0keyBwcm9wcy5zd2l0Y2hNYXJrZXJMYWJlbHNTaWRlID09PSB0cnVlID8gJ3N3aXRjaGVkJyA6ICdzdGFuZGFyZCcgfWBcbiAgICAgICsgYCR7IHByZWZpeCB9JHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfWBcbiAgfSlcblxuICBjb25zdCBtYXJrZXJMYWJlbHNMaXN0ID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIHJldHVybiBnZXRNYXJrZXJMaXN0KHByb3BzLm1hcmtlckxhYmVscykubWFwKChlbnRyeSwgaW5kZXgpID0+ICh7XG4gICAgICBpbmRleCxcbiAgICAgIHZhbHVlOiBlbnRyeS52YWx1ZSxcbiAgICAgIGxhYmVsOiBlbnRyeS5sYWJlbCB8fCBlbnRyeS52YWx1ZSxcbiAgICAgIGNsYXNzZXM6IG1hcmtlckxhYmVsQ2xhc3MudmFsdWVcbiAgICAgICAgKyAoZW50cnkuY2xhc3NlcyAhPT0gdm9pZCAwID8gJyAnICsgZW50cnkuY2xhc3NlcyA6ICcnKSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIC4uLmdldE1hcmtlckxhYmVsU3R5bGUoZW50cnkudmFsdWUpLFxuICAgICAgICAuLi4oZW50cnkuc3R5bGUgfHwge30pXG4gICAgICB9XG4gICAgfSkpXG4gIH0pXG5cbiAgY29uc3QgbWFya2VyU2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIG1hcmtlckxpc3Q6IG1hcmtlckxhYmVsc0xpc3QudmFsdWUsXG4gICAgbWFya2VyTWFwOiBtYXJrZXJMYWJlbHNNYXAudmFsdWUsXG4gICAgY2xhc3NlczogbWFya2VyTGFiZWxDbGFzcy52YWx1ZSwgLy8gVE9ETyB0cyBkZWZpbml0aW9uXG4gICAgZ2V0U3R5bGU6IGdldE1hcmtlckxhYmVsU3R5bGVcbiAgfSkpXG5cbiAgY29uc3QgbWFya2VyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgaWYgKGlubmVyQmFyTGVuLnZhbHVlICE9PSAwKSB7XG4gICAgICBjb25zdCBzaXplID0gMTAwICogbWFya2VyU3RlcC52YWx1ZSAvIGlubmVyQmFyTGVuLnZhbHVlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmlubmVyQmFyU3R5bGUudmFsdWUsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gYDJweCAkeyBzaXplIH0lYFxuICAgICAgICAgIDogYCR7IHNpemUgfSUgMnB4YFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsXG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGlzdCAoZGVmKSB7XG4gICAgaWYgKGRlZiA9PT0gZmFsc2UpIHsgcmV0dXJuIG51bGwgfVxuXG4gICAgaWYgKGRlZiA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIG1hcmtlclRpY2tzLnZhbHVlLm1hcChkZWZhdWx0TWFya2VyQ29udmVydEZuKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZGVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gbWFya2VyVGlja3MudmFsdWUubWFwKHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGRlZih2YWx1ZSlcbiAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGl0ZW0pID09PSB0cnVlID8geyAuLi5pdGVtLCB2YWx1ZSB9IDogeyB2YWx1ZSwgbGFiZWw6IGl0ZW0gfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWx0ZXJGbiA9ICh7IHZhbHVlIH0pID0+IHZhbHVlID49IHByb3BzLm1pbiAmJiB2YWx1ZSA8PSBwcm9wcy5tYXhcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGRlZikgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkZWZcbiAgICAgICAgLm1hcChpdGVtID0+IChpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IGl0ZW0gOiB7IHZhbHVlOiBpdGVtIH0pKVxuICAgICAgICAuZmlsdGVyKGZpbHRlckZuKVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkZWYpLm1hcChrZXkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGRlZlsga2V5IF1cbiAgICAgIGNvbnN0IHZhbHVlID0gTnVtYmVyKGtleSlcbiAgICAgIHJldHVybiBpc09iamVjdChpdGVtKSA9PT0gdHJ1ZSA/IHsgLi4uaXRlbSwgdmFsdWUgfSA6IHsgdmFsdWUsIGxhYmVsOiBpdGVtIH1cbiAgICB9KS5maWx0ZXIoZmlsdGVyRm4pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRNYXJrZXJMYWJlbFN0eWxlICh2YWwpIHtcbiAgICByZXR1cm4geyBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogKHZhbCAtIHByb3BzLm1pbikgLyB0cmFja0xlbi52YWx1ZSB9JWAgfVxuICB9XG5cbiAgY29uc3QgbWFya2VyTGFiZWxzTWFwID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5tYXJrZXJMYWJlbHMgPT09IGZhbHNlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGNvbnN0IGFjYyA9IHt9XG4gICAgbWFya2VyTGFiZWxzTGlzdC52YWx1ZS5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGFjY1sgZW50cnkudmFsdWUgXSA9IGVudHJ5XG4gICAgfSlcbiAgICByZXR1cm4gYWNjXG4gIH0pXG5cbiAgZnVuY3Rpb24gZ2V0TWFya2VyTGFiZWxzQ29udGVudCAoKSB7XG4gICAgaWYgKHNsb3RzWyAnbWFya2VyLWxhYmVsLWdyb3VwJyBdICE9PSB2b2lkIDApIHtcbiAgICAgIHJldHVybiBzbG90c1sgJ21hcmtlci1sYWJlbC1ncm91cCcgXShtYXJrZXJTY29wZS52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBmbiA9IHNsb3RzWyAnbWFya2VyLWxhYmVsJyBdIHx8IGRlZmF1bHRNYXJrZXJMYWJlbFJlbmRlckZuXG4gICAgcmV0dXJuIG1hcmtlckxhYmVsc0xpc3QudmFsdWUubWFwKG1hcmtlciA9PiBmbih7XG4gICAgICBtYXJrZXIsXG4gICAgICAuLi5tYXJrZXJTY29wZS52YWx1ZVxuICAgIH0pKVxuICB9XG5cbiAgY29uc3QgcGFuRGlyZWN0aXZlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIC8vIGlmIGVkaXRhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgcmV0dXJuIFsgW1xuICAgICAgVG91Y2hQYW4sXG4gICAgICBvblBhbixcbiAgICAgIHZvaWQgMCxcbiAgICAgIHtcbiAgICAgICAgWyBvcmllbnRhdGlvbi52YWx1ZSBdOiB0cnVlLFxuICAgICAgICBwcmV2ZW50OiB0cnVlLFxuICAgICAgICBzdG9wOiB0cnVlLFxuICAgICAgICBtb3VzZTogdHJ1ZSxcbiAgICAgICAgbW91c2VBbGxEaXI6IHRydWVcbiAgICAgIH1cbiAgICBdIF1cbiAgfSlcblxuICBmdW5jdGlvbiBvblBhbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGRyYWdnaW5nLnZhbHVlICE9PSB2b2lkIDApIHtcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oZXZlbnQuZXZ0KVxuICAgICAgICAvLyBvbmx5IGlmIHRvdWNoLCBiZWNhdXNlIHdlIGFsc28gaGF2ZSBtb3VzZWRvd24vdXA6XG4gICAgICAgIGV2ZW50LnRvdWNoID09PSB0cnVlICYmIHVwZGF0ZVZhbHVlKHRydWUpXG4gICAgICAgIGRyYWdnaW5nLnZhbHVlID0gdm9pZCAwXG4gICAgICAgIGVtaXQoJ3BhbicsICdlbmQnKVxuICAgICAgfVxuICAgICAgYWN0aXZlLnZhbHVlID0gZmFsc2VcbiAgICAgIGZvY3VzLnZhbHVlID0gZmFsc2VcbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnQuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgZHJhZ2dpbmcudmFsdWUgPSBnZXREcmFnZ2luZyhldmVudC5ldnQpXG4gICAgICB1cGRhdGVQb3NpdGlvbihldmVudC5ldnQpXG4gICAgICB1cGRhdGVWYWx1ZSgpXG4gICAgICBhY3RpdmUudmFsdWUgPSB0cnVlXG4gICAgICBlbWl0KCdwYW4nLCAnc3RhcnQnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHVwZGF0ZVBvc2l0aW9uKGV2ZW50LmV2dClcbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkJsdXIgKCkge1xuICAgIGZvY3VzLnZhbHVlID0gZmFsc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQWN0aXZhdGUgKGV2dCkge1xuICAgIHVwZGF0ZVBvc2l0aW9uKGV2dCwgZ2V0RHJhZ2dpbmcoZXZ0KSlcbiAgICB1cGRhdGVWYWx1ZSgpXG5cbiAgICBwcmV2ZW50Rm9jdXMudmFsdWUgPSB0cnVlXG4gICAgYWN0aXZlLnZhbHVlID0gdHJ1ZVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRGVhY3RpdmF0ZSAoKSB7XG4gICAgcHJldmVudEZvY3VzLnZhbHVlID0gZmFsc2VcbiAgICBhY3RpdmUudmFsdWUgPSBmYWxzZVxuXG4gICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICBvbkJsdXIoKVxuXG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTW9iaWxlQ2xpY2sgKGV2dCkge1xuICAgIHVwZGF0ZVBvc2l0aW9uKGV2dCwgZ2V0RHJhZ2dpbmcoZXZ0KSlcbiAgICB1cGRhdGVWYWx1ZSh0cnVlKVxuICB9XG5cbiAgZnVuY3Rpb24gb25LZXl1cCAoZXZ0KSB7XG4gICAgaWYgKGtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSkge1xuICAgICAgdXBkYXRlVmFsdWUodHJ1ZSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRUZXh0Q29udGFpbmVyU3R5bGUgKHJhdGlvKSB7XG4gICAgaWYgKHByb3BzLnZlcnRpY2FsID09PSB0cnVlKSB7IHJldHVybiBudWxsIH1cblxuICAgIGNvbnN0IHAgPSAkcS5sYW5nLnJ0bCAhPT0gcHJvcHMucmV2ZXJzZSA/IDEgLSByYXRpbyA6IHJhdGlvXG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoY2FsYygkeyAyICogcCAtIDEgfSAqICR7IHByb3BzLnRodW1iU2l6ZSB9IC8gMiArICR7IDUwIC0gMTAwICogcCB9JSkpYFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRodW1iUmVuZGVyRm4gKHRodW1iKSB7XG4gICAgY29uc3QgZm9jdXNDbGFzcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByZXZlbnRGb2N1cy52YWx1ZSA9PT0gZmFsc2UgJiYgKGZvY3VzLnZhbHVlID09PSB0aHVtYi5mb2N1c1ZhbHVlIHx8IGZvY3VzLnZhbHVlID09PSAnYm90aCcpXG4gICAgICAgID8gJyBxLXNsaWRlci0tZm9jdXMnXG4gICAgICAgIDogJydcbiAgICApKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1zbGlkZXJfX3RodW1iIHEtc2xpZGVyX190aHVtYiR7IGF4aXMudmFsdWUgfSBxLXNsaWRlcl9fdGh1bWIkeyBheGlzLnZhbHVlIH0tJHsgaXNSZXZlcnNlZC52YWx1ZSA9PT0gdHJ1ZSA/ICdydGwnIDogJ2x0cicgfSBhYnNvbHV0ZSBub24tc2VsZWN0YWJsZWBcbiAgICAgICsgZm9jdXNDbGFzcy52YWx1ZVxuICAgICAgKyAodGh1bWIudGh1bWJDb2xvci52YWx1ZSAhPT0gdm9pZCAwID8gYCB0ZXh0LSR7IHRodW1iLnRodW1iQ29sb3IudmFsdWUgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBzdHlsZSA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICB3aWR0aDogcHJvcHMudGh1bWJTaXplLFxuICAgICAgaGVpZ2h0OiBwcm9wcy50aHVtYlNpemUsXG4gICAgICBbIHBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogdGh1bWIucmF0aW8udmFsdWUgfSVgLFxuICAgICAgekluZGV4OiBmb2N1cy52YWx1ZSA9PT0gdGh1bWIuZm9jdXNWYWx1ZSA/IDIgOiB2b2lkIDBcbiAgICB9KSlcblxuICAgIGNvbnN0IHBpbkNvbG9yID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgdGh1bWIubGFiZWxDb2xvci52YWx1ZSAhPT0gdm9pZCAwXG4gICAgICAgID8gYCB0ZXh0LSR7IHRodW1iLmxhYmVsQ29sb3IudmFsdWUgfWBcbiAgICAgICAgOiAnJ1xuICAgICkpXG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyU3R5bGUgPSBjb21wdXRlZCgoKSA9PiBnZXRUZXh0Q29udGFpbmVyU3R5bGUodGh1bWIucmF0aW8udmFsdWUpKVxuXG4gICAgY29uc3QgdGV4dENsYXNzID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgJ3Etc2xpZGVyX190ZXh0J1xuICAgICAgKyAodGh1bWIubGFiZWxUZXh0Q29sb3IudmFsdWUgIT09IHZvaWQgMCA/IGAgdGV4dC0keyB0aHVtYi5sYWJlbFRleHRDb2xvci52YWx1ZSB9YCA6ICcnKVxuICAgICkpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgdGh1bWJDb250ZW50ID0gW1xuICAgICAgICBoKCdzdmcnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXNsaWRlcl9fdGh1bWItc2hhcGUgYWJzb2x1dGUtZnVsbCcsXG4gICAgICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgIH0sIFtcbiAgICAgICAgICBoKCdwYXRoJywgeyBkOiBwcm9wcy50aHVtYlBhdGggfSlcbiAgICAgICAgXSksXG5cbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3Etc2xpZGVyX19mb2N1cy1yaW5nIGZpdCcgfSlcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmxhYmVsID09PSB0cnVlIHx8IHByb3BzLmxhYmVsQWx3YXlzID09PSB0cnVlKSB7XG4gICAgICAgIHRodW1iQ29udGVudC5wdXNoKFxuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiBwaW5DbGFzcy52YWx1ZSArICcgYWJzb2x1dGUgZml0IG5vLXBvaW50ZXItZXZlbnRzJyArIHBpbkNvbG9yLnZhbHVlXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogbGFiZWxDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgbWluV2lkdGg6IHByb3BzLnRodW1iU2l6ZSB9XG4gICAgICAgICAgICB9LCBbXG4gICAgICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogdGV4dENvbnRhaW5lckNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB0ZXh0Q29udGFpbmVyU3R5bGUudmFsdWVcbiAgICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICAgIGgoJ3NwYW4nLCB7IGNsYXNzOiB0ZXh0Q2xhc3MudmFsdWUgfSwgdGh1bWIubGFiZWwudmFsdWUpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIClcblxuICAgICAgICBpZiAocHJvcHMubmFtZSAhPT0gdm9pZCAwICYmIHByb3BzLmRpc2FibGUgIT09IHRydWUpIHtcbiAgICAgICAgICBpbmplY3RGb3JtSW5wdXQodGh1bWJDb250ZW50LCAncHVzaCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgLi4udGh1bWIuZ2V0Tm9kZURhdGEoKVxuICAgICAgfSwgdGh1bWJDb250ZW50KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldENvbnRlbnQgKHNlbGVjdGlvbkJhclN0eWxlLCB0cmFja0NvbnRhaW5lclRhYmluZGV4LCB0cmFja0NvbnRhaW5lckV2ZW50cywgaW5qZWN0VGh1bWIpIHtcbiAgICBjb25zdCB0cmFja0NvbnRlbnQgPSBbXVxuXG4gICAgcHJvcHMuaW5uZXJUcmFja0NvbG9yICE9PSAndHJhbnNwYXJlbnQnICYmIHRyYWNrQ29udGVudC5wdXNoKFxuICAgICAgaCgnZGl2Jywge1xuICAgICAgICBrZXk6ICdpbm5lcicsXG4gICAgICAgIGNsYXNzOiBpbm5lckJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogaW5uZXJCYXJTdHlsZS52YWx1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5zZWxlY3Rpb25Db2xvciAhPT0gJ3RyYW5zcGFyZW50JyAmJiB0cmFja0NvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnc2VsZWN0aW9uJyxcbiAgICAgICAgY2xhc3M6IHNlbGVjdGlvbkJhckNsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogc2VsZWN0aW9uQmFyU3R5bGUudmFsdWVcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgcHJvcHMubWFya2VycyAhPT0gZmFsc2UgJiYgdHJhY2tDb250ZW50LnB1c2goXG4gICAgICBoKCdkaXYnLCB7XG4gICAgICAgIGtleTogJ21hcmtlcicsXG4gICAgICAgIGNsYXNzOiBtYXJrZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IG1hcmtlclN0eWxlLnZhbHVlXG4gICAgICB9KVxuICAgIClcblxuICAgIGluamVjdFRodW1iKHRyYWNrQ29udGVudClcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbXG4gICAgICBoRGlyKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGtleTogJ3RyYWNrQycsXG4gICAgICAgICAgY2xhc3M6IHRyYWNrQ29udGFpbmVyQ2xhc3MudmFsdWUsXG4gICAgICAgICAgdGFiaW5kZXg6IHRyYWNrQ29udGFpbmVyVGFiaW5kZXgudmFsdWUsXG4gICAgICAgICAgLi4udHJhY2tDb250YWluZXJFdmVudHMudmFsdWVcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiB0cmFja0NsYXNzLnZhbHVlLFxuICAgICAgICAgICAgc3R5bGU6IHRyYWNrU3R5bGUudmFsdWVcbiAgICAgICAgICB9LCB0cmFja0NvbnRlbnQpXG4gICAgICAgIF0sXG4gICAgICAgICdzbGlkZScsXG4gICAgICAgIGVkaXRhYmxlLnZhbHVlLCAoKSA9PiBwYW5EaXJlY3RpdmUudmFsdWVcbiAgICAgIClcbiAgICBdXG5cbiAgICBpZiAocHJvcHMubWFya2VyTGFiZWxzICE9PSBmYWxzZSkge1xuICAgICAgY29uc3QgYWN0aW9uID0gcHJvcHMuc3dpdGNoTWFya2VyTGFiZWxzU2lkZSA9PT0gdHJ1ZVxuICAgICAgICA/ICd1bnNoaWZ0J1xuICAgICAgICA6ICdwdXNoJ1xuXG4gICAgICBjb250ZW50WyBhY3Rpb24gXShcbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ21hcmtlckwnLFxuICAgICAgICAgIGNsYXNzOiBtYXJrZXJMYWJlbHNDb250YWluZXJDbGFzcy52YWx1ZVxuICAgICAgICB9LCBnZXRNYXJrZXJMYWJlbHNDb250ZW50KCkpXG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRlbnRcbiAgfVxuXG4gIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uRGVhY3RpdmF0ZSwgdHJ1ZSlcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiB7XG4gICAgICBhY3RpdmUsXG4gICAgICBmb2N1cyxcbiAgICAgIHByZXZlbnRGb2N1cyxcbiAgICAgIGRyYWdnaW5nLFxuXG4gICAgICBlZGl0YWJsZSxcbiAgICAgIGNsYXNzZXMsXG4gICAgICB0YWJpbmRleCxcbiAgICAgIGF0dHJpYnV0ZXMsXG5cbiAgICAgIHN0ZXAsXG4gICAgICBkZWNpbWFscyxcbiAgICAgIHRyYWNrTGVuLFxuICAgICAgaW5uZXJNaW4sXG4gICAgICBpbm5lck1pblJhdGlvLFxuICAgICAgaW5uZXJNYXgsXG4gICAgICBpbm5lck1heFJhdGlvLFxuICAgICAgcG9zaXRpb25Qcm9wLFxuICAgICAgc2l6ZVByb3AsXG4gICAgICBpc1JldmVyc2VkXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIG9uQWN0aXZhdGUsXG4gICAgICBvbk1vYmlsZUNsaWNrLFxuICAgICAgb25CbHVyLFxuICAgICAgb25LZXl1cCxcbiAgICAgIGdldENvbnRlbnQsXG4gICAgICBnZXRUaHVtYlJlbmRlckZuLFxuICAgICAgY29udmVydFJhdGlvVG9Nb2RlbCxcbiAgICAgIGNvbnZlcnRNb2RlbFRvUmF0aW8sXG4gICAgICBnZXREcmFnZ2luZ1JhdGlvXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyB1c2VGb3JtQXR0cnMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1mb3JtLmpzJ1xuXG5pbXBvcnQgdXNlU2xpZGVyLCB7XG4gIHVzZVNsaWRlclByb3BzLFxuICB1c2VTbGlkZXJFbWl0cyxcbiAga2V5Q29kZXNcbn0gZnJvbSAnLi91c2Utc2xpZGVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGJldHdlZW4gfSBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQuanMnXG5pbXBvcnQgeyBzdG9wQW5kUHJldmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuXG5jb25zdCBnZXROb2RlRGF0YSA9ICgpID0+ICh7fSlcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTbGlkZXInLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlU2xpZGVyUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB2YWxpZGF0b3I6IHYgPT4gdHlwZW9mIHYgPT09ICdudW1iZXInIHx8IHYgPT09IG51bGxcbiAgICB9LFxuXG4gICAgbGFiZWxWYWx1ZTogWyBTdHJpbmcsIE51bWJlciBdXG4gIH0sXG5cbiAgZW1pdHM6IHVzZVNsaWRlckVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5OiB7ICRxIH0gfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCB7IHN0YXRlLCBtZXRob2RzIH0gPSB1c2VTbGlkZXIoe1xuICAgICAgdXBkYXRlVmFsdWUsIHVwZGF0ZVBvc2l0aW9uLCBnZXREcmFnZ2luZyxcbiAgICAgIGZvcm1BdHRyczogdXNlRm9ybUF0dHJzKHByb3BzKVxuICAgIH0pXG5cbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gICAgY29uc3QgY3VyUmF0aW8gPSByZWYoMClcbiAgICBjb25zdCBtb2RlbCA9IHJlZigwKVxuXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplTW9kZWwgKCkge1xuICAgICAgbW9kZWwudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlID09PSBudWxsXG4gICAgICAgID8gc3RhdGUuaW5uZXJNaW4udmFsdWVcbiAgICAgICAgOiBiZXR3ZWVuKHByb3BzLm1vZGVsVmFsdWUsIHN0YXRlLmlubmVyTWluLnZhbHVlLCBzdGF0ZS5pbm5lck1heC52YWx1ZSlcbiAgICB9XG5cbiAgICB3YXRjaChcbiAgICAgICgpID0+IGAkeyBwcm9wcy5tb2RlbFZhbHVlIH18JHsgc3RhdGUuaW5uZXJNaW4udmFsdWUgfXwkeyBzdGF0ZS5pbm5lck1heC52YWx1ZSB9YCxcbiAgICAgIG5vcm1hbGl6ZU1vZGVsXG4gICAgKVxuXG4gICAgbm9ybWFsaXplTW9kZWwoKVxuXG4gICAgY29uc3QgbW9kZWxSYXRpbyA9IGNvbXB1dGVkKCgpID0+IG1ldGhvZHMuY29udmVydE1vZGVsVG9SYXRpbyhtb2RlbC52YWx1ZSkpXG4gICAgY29uc3QgcmF0aW8gPSBjb21wdXRlZCgoKSA9PiAoc3RhdGUuYWN0aXZlLnZhbHVlID09PSB0cnVlID8gY3VyUmF0aW8udmFsdWUgOiBtb2RlbFJhdGlvLnZhbHVlKSlcblxuICAgIGNvbnN0IHNlbGVjdGlvbkJhclN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWNjID0ge1xuICAgICAgICBbIHN0YXRlLnBvc2l0aW9uUHJvcC52YWx1ZSBdOiBgJHsgMTAwICogc3RhdGUuaW5uZXJNaW5SYXRpby52YWx1ZSB9JWAsXG4gICAgICAgIFsgc3RhdGUuc2l6ZVByb3AudmFsdWUgXTogYCR7IDEwMCAqIChyYXRpby52YWx1ZSAtIHN0YXRlLmlubmVyTWluUmF0aW8udmFsdWUpIH0lYFxuICAgICAgfVxuICAgICAgaWYgKHByb3BzLnNlbGVjdGlvbkltZyAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGFjYy5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7IHByb3BzLnNlbGVjdGlvbkltZyB9KSAhaW1wb3J0YW50YFxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY1xuICAgIH0pXG5cbiAgICBjb25zdCBnZXRUaHVtYiA9IG1ldGhvZHMuZ2V0VGh1bWJSZW5kZXJGbih7XG4gICAgICBmb2N1c1ZhbHVlOiB0cnVlLFxuICAgICAgZ2V0Tm9kZURhdGEsXG4gICAgICByYXRpbyxcbiAgICAgIGxhYmVsOiBjb21wdXRlZCgoKSA9PiAoXG4gICAgICAgIHByb3BzLmxhYmVsVmFsdWUgIT09IHZvaWQgMFxuICAgICAgICAgID8gcHJvcHMubGFiZWxWYWx1ZVxuICAgICAgICAgIDogbW9kZWwudmFsdWVcbiAgICAgICkpLFxuICAgICAgdGh1bWJDb2xvcjogY29tcHV0ZWQoKCkgPT4gcHJvcHMudGh1bWJDb2xvciB8fCBwcm9wcy5jb2xvciksXG4gICAgICBsYWJlbENvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYWJlbENvbG9yKSxcbiAgICAgIGxhYmVsVGV4dENvbG9yOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5sYWJlbFRleHRDb2xvcilcbiAgICB9KVxuXG4gICAgY29uc3QgdHJhY2tDb250YWluZXJFdmVudHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc3RhdGUuZWRpdGFibGUudmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAkcS5wbGF0Zm9ybS5pcy5tb2JpbGUgPT09IHRydWVcbiAgICAgICAgPyB7IG9uQ2xpY2s6IG1ldGhvZHMub25Nb2JpbGVDbGljayB9XG4gICAgICAgIDoge1xuICAgICAgICAgICAgb25Nb3VzZWRvd246IG1ldGhvZHMub25BY3RpdmF0ZSxcbiAgICAgICAgICAgIG9uRm9jdXMsXG4gICAgICAgICAgICBvbkJsdXI6IG1ldGhvZHMub25CbHVyLFxuICAgICAgICAgICAgb25LZXlkb3duLFxuICAgICAgICAgICAgb25LZXl1cDogbWV0aG9kcy5vbktleXVwXG4gICAgICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSAoY2hhbmdlKSB7XG4gICAgICBpZiAobW9kZWwudmFsdWUgIT09IHByb3BzLm1vZGVsVmFsdWUpIHtcbiAgICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBtb2RlbC52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBlbWl0KCdjaGFuZ2UnLCBtb2RlbC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREcmFnZ2luZyAoKSB7XG4gICAgICByZXR1cm4gcm9vdFJlZi52YWx1ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uIChldmVudCwgZHJhZ2dpbmcgPSBzdGF0ZS5kcmFnZ2luZy52YWx1ZSkge1xuICAgICAgY29uc3QgcmF0aW8gPSBtZXRob2RzLmdldERyYWdnaW5nUmF0aW8oZXZlbnQsIGRyYWdnaW5nKVxuXG4gICAgICBtb2RlbC52YWx1ZSA9IG1ldGhvZHMuY29udmVydFJhdGlvVG9Nb2RlbChyYXRpbylcblxuICAgICAgY3VyUmF0aW8udmFsdWUgPSBwcm9wcy5zbmFwICE9PSB0cnVlIHx8IHByb3BzLnN0ZXAgPT09IDBcbiAgICAgICAgPyByYXRpb1xuICAgICAgICA6IG1ldGhvZHMuY29udmVydE1vZGVsVG9SYXRpbyhtb2RlbC52YWx1ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3VzICgpIHtcbiAgICAgIHN0YXRlLmZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uS2V5ZG93biAoZXZ0KSB7XG4gICAgICBpZiAoIWtleUNvZGVzLmluY2x1ZGVzKGV2dC5rZXlDb2RlKSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc3RvcEFuZFByZXZlbnQoZXZ0KVxuXG4gICAgICBjb25zdFxuICAgICAgICBzdGVwVmFsID0gKFsgMzQsIDMzIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gMTAgOiAxKSAqIHN0YXRlLnN0ZXAudmFsdWUsXG4gICAgICAgIG9mZnNldCA9IChcbiAgICAgICAgICAoWyAzNCwgMzcsIDQwIF0uaW5jbHVkZXMoZXZ0LmtleUNvZGUpID8gLTEgOiAxKVxuICAgICAgICAgICogKHN0YXRlLmlzUmV2ZXJzZWQudmFsdWUgPT09IHRydWUgPyAtMSA6IDEpXG4gICAgICAgICAgKiAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAtMSA6IDEpICogc3RlcFZhbFxuICAgICAgICApXG5cbiAgICAgIG1vZGVsLnZhbHVlID0gYmV0d2VlbihcbiAgICAgICAgcGFyc2VGbG9hdCgobW9kZWwudmFsdWUgKyBvZmZzZXQpLnRvRml4ZWQoc3RhdGUuZGVjaW1hbHMudmFsdWUpKSxcbiAgICAgICAgc3RhdGUuaW5uZXJNaW4udmFsdWUsXG4gICAgICAgIHN0YXRlLmlubmVyTWF4LnZhbHVlXG4gICAgICApXG5cbiAgICAgIHVwZGF0ZVZhbHVlKClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IG1ldGhvZHMuZ2V0Q29udGVudChcbiAgICAgICAgc2VsZWN0aW9uQmFyU3R5bGUsXG4gICAgICAgIHN0YXRlLnRhYmluZGV4LFxuICAgICAgICB0cmFja0NvbnRhaW5lckV2ZW50cyxcbiAgICAgICAgbm9kZSA9PiB7IG5vZGUucHVzaChnZXRUaHVtYigpKSB9XG4gICAgICApXG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IHN0YXRlLmNsYXNzZXMudmFsdWUgKyAocHJvcHMubW9kZWxWYWx1ZSA9PT0gbnVsbCA/ICcgcS1zbGlkZXItLW5vLXZhbHVlJyA6ICcnKSxcbiAgICAgICAgLi4uc3RhdGUuYXR0cmlidXRlcy52YWx1ZSxcbiAgICAgICAgJ2FyaWEtdmFsdWVub3cnOiBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICB9LCBjb250ZW50KVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGp1c3RpZnktY2VudGVyIHEtcHQtc21cIj5cbiAgICA8cS1idG4gZmFiIGZsYXQgc2l6ZT1cIm1kXCIgOmljb249XCJvdXRsaW5lZFNraXBQcmV2aW91c1wiIEBjbGljaz1cInF1ZXVlQ29udHJvbGxlci5wbGF5UHJldmlvdXMoKVwiPlxuICAgICAgPHEtdG9vbHRpcD5QcmV2aW91czwvcS10b29sdGlwPlxuICAgIDwvcS1idG4+XG5cbiAgICA8cS1idG4gZmFiIGNsYXNzPVwicS1teC1tZFwiIHJvdW5kIHNpemU9XCJtZFwiIDppY29uPVwicGF1c2VkID8gb3V0bGluZWRQbGF5QXJyb3cgOiBvdXRsaW5lZFBhdXNlXCIgQGNsaWNrPVwiYXVkaW9Db250cm9sbGVyLnRvZ2dsZVBhdXNlKClcIj5cbiAgICAgIDxxLXRvb2x0aXA+e3sgYXVkaW9Db250cm9sbGVyLnBhdXNlZCA/IFwiUGxheVwiIDogXCJQYXVzZVwiIH19PC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cblxuICAgIDxxLWJ0biBmbGF0IGZhYiBzaXplPVwibWRcIiA6aWNvbj1cIm91dGxpbmVkU2tpcE5leHRcIiBAY2xpY2s9XCJxdWV1ZUNvbnRyb2xsZXIucGxheU5leHQoKVwiPlxuICAgICAgPHEtdG9vbHRpcD5OZXh0PC9xLXRvb2x0aXA+XG4gICAgPC9xLWJ0bj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHQtbGdcIiB2LWlmPVwic29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcgIT09IHVuZGVmaW5lZFwiPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAge3sgZm9ybWF0RHVyYXRpb24oc2Vjb25kc1RvRHVyYXRpb24oY3VycmVudFRpbWUpKSB9fVxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgPHEtc2xpZGVyIHYtbW9kZWw9XCJjdXJyZW50VGltZVwiXG4gICAgICAgICAgICAgICAgQHBhbj1cIm9uUGFuXCJcbiAgICAgICAgICAgICAgICBAdXBkYXRlOm1vZGVsLXZhbHVlPVwib25DaGFuZ2VcIlxuICAgICAgICAgICAgICAgIDptaW49XCIwXCIgOm1heD1cInRvdGFsVGltZVwiIDpzdGVwPVwiMC4xXCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCIvPlxuICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgPHEtaXRlbS1zZWN0aW9uIHNpZGU+XG4gICAgICB7eyBmb3JtYXREdXJhdGlvbihzb25nUXVldWUuY3VycmVudGx5UGxheWluZy5kdXJhdGlvbikgfX1cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdNZWRpYUNvbnRyb2wnXG59XG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkUGxheUFycm93LFxuICBvdXRsaW5lZFNraXBOZXh0LFxuICBvdXRsaW5lZFNraXBQcmV2aW91cyxcbiAgb3V0bGluZWRQYXVzZVxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7Y29tcHV0ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7YXVkaW9Db250cm9sbGVyfSBmcm9tICdib290L2F1ZGlvQ29udHJvbGxlcic7XG5pbXBvcnQge2R1cmF0aW9uVG9TZWNvbmRzLCBmb3JtYXREdXJhdGlvbiwgc2Vjb25kc1RvRHVyYXRpb259IGZyb20gJ3NyYy91dGlscy9kdXJhdGlvblV0aWxzJztcbmltcG9ydCB7UXVldWVDb250cm9sbGVyfSBmcm9tICdzcmMvdXRpbHMvUXVldWVDb250cm9sbGVyJztcblxuY29uc3QgY3VycmVudFRpbWUgPSByZWYoMCk7XG5jb25zdCBzb25nUXVldWUgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcbmNvbnN0IGlzUGFubmluZ1Byb2dyZXNzID0gcmVmKGZhbHNlKTtcbmNvbnN0IGlzVXBkYXRpbmcgPSByZWYoZmFsc2UpO1xuXG5jb25zdCBxdWV1ZUNvbnRyb2xsZXIgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcblxucXVldWVDb250cm9sbGVyLndhdGNoQ3VycmVudGx5UGxheWluZygoKSA9PiB7XG4gIHJldHVybjtcbn0pO1xuXG5jb25zdCBwYXVzZWQgPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiBhdWRpb0NvbnRyb2xsZXIucGF1c2VkLnZhbHVlO1xufSlcblxuY29uc3Qgb25QYW4gPSAocGhhc2U6IHN0cmluZykgPT4ge1xuICBpZiAocGhhc2UgPT09ICdzdGFydCcpIHtcbiAgICBpc1Bhbm5pbmdQcm9ncmVzcy52YWx1ZSA9IHRydWU7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gU2Vla1xuICAgIGF1ZGlvQ29udHJvbGxlci5zZWVrKGN1cnJlbnRUaW1lLnZhbHVlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaXNQYW5uaW5nUHJvZ3Jlc3MudmFsdWUgPSBmYWxzZTtcbiAgICB9LCAwKTtcbiAgfVxufVxuXG5jb25zdCBvbkNoYW5nZSA9IChrOiB1bmtub3duKSA9PiB7XG4gIGlmIChpc1Bhbm5pbmdQcm9ncmVzcy52YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpc1VwZGF0aW5nLnZhbHVlID0gdHJ1ZTtcbiAgYXVkaW9Db250cm9sbGVyLnNlZWsoPG51bWJlcj5rKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpc1VwZGF0aW5nLnZhbHVlID0gZmFsc2U7XG4gIH0sIDApO1xufVxuXG5jb25zdCB0b3RhbFRpbWUgPSBjb21wdXRlZCgoKSA9PiB7XG4gIGlmIChzb25nUXVldWUuY3VycmVudGx5UGxheWluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGR1cmF0aW9uVG9TZWNvbmRzKDxzdHJpbmc+c29uZ1F1ZXVlLmN1cnJlbnRseVBsYXlpbmcuZHVyYXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIC0xO1xufSlcblxuYXVkaW9Db250cm9sbGVyLm9uUHJvZ3Jlc3NUaWNrKCh0aW1lKSA9PiB7XG4gIGlmIChpc1Bhbm5pbmdQcm9ncmVzcy52YWx1ZSB8fCBpc1VwZGF0aW5nLnZhbHVlKVxuICB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGN1cnJlbnRUaW1lLnZhbHVlID0gdGltZTtcbn0pXG48L3NjcmlwdD5cbiIsImltcG9ydCB7IGRlZmluZVN0b3JlIH0gZnJvbSAncGluaWEnO1xuXG5leHBvcnQgY29uc3QgdXNlUXVldWVEaXNwbGF5U3RvcmUgPSBkZWZpbmVTdG9yZSgncXVldWVEaXNwbGF5Jywge1xuICBzdGF0ZTogKCkgPT4gKHtcbiAgICBzaG93OiB0cnVlXG4gIH0pLFxuXG4gIGFjdGlvbnM6IHtcbiAgICBvcGVuICgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWU7XG4gICAgfSxcblxuICAgIGNsb3NlKCkge1xuICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgfSxcblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gICAgfVxuICB9XG59KTtcbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIGZ1bGwtaGVpZ2h0IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlclwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtNyByb3cganVzdGlmeS1lbmRcIj5cbiAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRSZXBlYXRcIj5cbiAgICAgICAgPHEtdG9vbHRpcD5SZXBlYXQ8L3EtdG9vbHRpcD5cbiAgICAgIDwvcS1idG4+XG5cbiAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRTaHVmZmxlXCIgY2xhc3M9XCJxLW14LXNtXCI+XG4gICAgICAgIDxxLXRvb2x0aXA+U2h1ZmZsZTwvcS10b29sdGlwPlxuICAgICAgPC9xLWJ0bj5cblxuICAgICAgPHEtYnRuIHJvdW5kIGRlbnNlIGZsYXQgOmljb249XCJvdXRsaW5lZFF1ZXVlTXVzaWNcIiBAY2xpY2s9XCJxdWV1ZVNob3dTdGF0dXNTdG9yZS50b2dnbGUoKVwiPlxuICAgICAgICA8cS10b29sdGlwPlF1ZXVlPC9xLXRvb2x0aXA+XG4gICAgICA8L3EtYnRuPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgIDxxLWl0ZW0gY2xhc3M9XCJmdWxsLXdpZHRoXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlPlxuICAgICAgICAgIDxxLWljb24gbmFtZT1cInZvbHVtZV91cFwiLz5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgIDxxLXNsaWRlclxuICAgICAgICAgICAgdi1tb2RlbD1cInZvbHVtZVwiXG4gICAgICAgICAgICA6bWluPVwiMFwiXG4gICAgICAgICAgICA6bWF4PVwiMTAwXCJcbiAgICAgICAgICAgIDpzdGVwPVwiMVwiXG4gICAgICAgICAgICBzdHlsZT1cIm1heC13aWR0aDogMTAwcHhcIlxuICAgICAgICAgICAgdGh1bWItc2l6ZT1cIjEwcHhcIlxuICAgICAgICAgICAgaW5uZXItdHJhY2stY29sb3I9XCJibGFja1wiXG4gICAgICAgICAgICBzZWxlY3Rpb24tY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICB0aHVtYi1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHRyYWNrLWNvbG9yPVwieWVsbG93XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1F1ZXVlQ29udHJvbCdcbn1cbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRTaHVmZmxlLFxuICBvdXRsaW5lZFJlcGVhdCxcbiAgb3V0bGluZWRRdWV1ZU11c2ljLFxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7YXVkaW9Db250cm9sbGVyfSBmcm9tICdib290L2F1ZGlvQ29udHJvbGxlcic7XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3VzZVF1ZXVlRGlzcGxheVN0b3JlfSBmcm9tICdzdG9yZXMvc2hvd1F1ZXVlJztcblxuY29uc3QgcXVldWVTaG93U3RhdHVzU3RvcmUgPSB1c2VRdWV1ZURpc3BsYXlTdG9yZSgpO1xuXG5jb25zdCB2b2x1bWUgPSByZWYoYXVkaW9Db250cm9sbGVyLnZvbHVtZS52YWx1ZSAqIDEwMCk7XG53YXRjaCh2b2x1bWUsICgpID0+IHtcbiAgYXVkaW9Db250cm9sbGVyLnZvbHVtZS52YWx1ZSA9IHZvbHVtZS52YWx1ZSAvIDEwMDtcbn0pXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS10b29sYmFyIGNsYXNzPVwicS1wYS1tZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aCBmdWxsLWhlaWdodCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICA8dHJhY2staW5mby1jYXJkPjwvdHJhY2staW5mby1jYXJkPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTVcIj5cbiAgICAgICAgPG1lZGlhLWNvbnRyb2w+PC9tZWRpYS1jb250cm9sPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICA8cXVldWUtY29udHJvbD48L3F1ZXVlLWNvbnRyb2w+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuXG4gIDwvcS10b29sYmFyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1BsYXllckNvbnRyb2wnXG59XG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCBUcmFja0luZm9DYXJkIGZyb20gJ2NvbXBvbmVudHMvVHJhY2tJbmZvQ2FyZC52dWUnO1xuaW1wb3J0IE1lZGlhQ29udHJvbCBmcm9tICdjb21wb25lbnRzL01lZGlhQ29udHJvbC52dWUnO1xuaW1wb3J0IFF1ZXVlQ29udHJvbCBmcm9tICdjb21wb25lbnRzL1F1ZXVlQ29udHJvbC52dWUnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCBvbkJlZm9yZVVubW91bnQsIFRyYW5zaXRpb24gfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNsaWRlVHJhbnNpdGlvbicsXG5cbiAgcHJvcHM6IHtcbiAgICBhcHBlYXI6IEJvb2xlYW4sXG4gICAgZHVyYXRpb246IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDMwMFxuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAnc2hvdycsICdoaWRlJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgbGV0IGFuaW1hdGluZyA9IGZhbHNlLCBkb25lRm4sIGVsZW1lbnRcbiAgICBsZXQgdGltZXIsIHRpbWVyRmFsbGJhY2ssIGFuaW1MaXN0ZW5lciwgbGFzdEV2ZW50XG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICAgIGRvbmVGbiAmJiBkb25lRm4oKVxuICAgICAgZG9uZUZuID0gbnVsbFxuICAgICAgYW5pbWF0aW5nID0gZmFsc2VcblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyRmFsbGJhY2spXG4gICAgICBlbGVtZW50ICE9PSB2b2lkIDAgJiYgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgYW5pbUxpc3RlbmVyID0gbnVsbFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJlZ2luIChlbCwgaGVpZ2h0LCBkb25lKSB7XG4gICAgICBlbC5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJ1xuICAgICAgaWYgKGhlaWdodCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGAkeyBoZWlnaHQgfXB4YFxuICAgICAgfVxuICAgICAgZWwuc3R5bGUudHJhbnNpdGlvbiA9IGBoZWlnaHQgJHsgcHJvcHMuZHVyYXRpb24gfW1zIGN1YmljLWJlemllciguMjUsIC44LCAuNTAsIDEpYFxuXG4gICAgICBhbmltYXRpbmcgPSB0cnVlXG4gICAgICBkb25lRm4gPSBkb25lXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW5kIChlbCwgZXZlbnQpIHtcbiAgICAgIGVsLnN0eWxlLm92ZXJmbG93WSA9IG51bGxcbiAgICAgIGVsLnN0eWxlLmhlaWdodCA9IG51bGxcbiAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb24gPSBudWxsXG4gICAgICBjbGVhbnVwKClcbiAgICAgIGV2ZW50ICE9PSBsYXN0RXZlbnQgJiYgZW1pdChldmVudClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVudGVyIChlbCwgZG9uZSkge1xuICAgICAgbGV0IHBvcyA9IDBcbiAgICAgIGVsZW1lbnQgPSBlbFxuXG4gICAgICBpZiAoYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgIGNsZWFudXAoKVxuICAgICAgICBwb3MgPSBlbC5vZmZzZXRIZWlnaHQgPT09IGVsLnNjcm9sbEhlaWdodCA/IDAgOiB2b2lkIDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsYXN0RXZlbnQgPSAnaGlkZSdcbiAgICAgIH1cblxuICAgICAgYmVnaW4oZWwsIHBvcywgZG9uZSlcblxuICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gYCR7IGVsLnNjcm9sbEhlaWdodCB9cHhgXG4gICAgICAgIGFuaW1MaXN0ZW5lciA9IGV2dCA9PiB7XG4gICAgICAgICAgaWYgKE9iamVjdChldnQpICE9PSBldnQgfHwgZXZ0LnRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgICAgIGVuZChlbCwgJ3Nob3cnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgYW5pbUxpc3RlbmVyKVxuICAgICAgICB0aW1lckZhbGxiYWNrID0gc2V0VGltZW91dChhbmltTGlzdGVuZXIsIHByb3BzLmR1cmF0aW9uICogMS4xKVxuICAgICAgfSwgMTAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTGVhdmUgKGVsLCBkb25lKSB7XG4gICAgICBsZXQgcG9zXG4gICAgICBlbGVtZW50ID0gZWxcblxuICAgICAgaWYgKGFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICBjbGVhbnVwKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsYXN0RXZlbnQgPSAnc2hvdydcbiAgICAgICAgcG9zID0gZWwuc2Nyb2xsSGVpZ2h0XG4gICAgICB9XG5cbiAgICAgIGJlZ2luKGVsLCBwb3MsIGRvbmUpXG5cbiAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IDBcbiAgICAgICAgYW5pbUxpc3RlbmVyID0gZXZ0ID0+IHtcbiAgICAgICAgICBpZiAoT2JqZWN0KGV2dCkgIT09IGV2dCB8fCBldnQudGFyZ2V0ID09PSBlbCkge1xuICAgICAgICAgICAgZW5kKGVsLCAnaGlkZScpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBhbmltTGlzdGVuZXIpXG4gICAgICAgIHRpbWVyRmFsbGJhY2sgPSBzZXRUaW1lb3V0KGFuaW1MaXN0ZW5lciwgcHJvcHMuZHVyYXRpb24gKiAxLjEpXG4gICAgICB9LCAxMDApXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBjbGVhbnVwKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoVHJhbnNpdGlvbiwge1xuICAgICAgY3NzOiBmYWxzZSxcbiAgICAgIGFwcGVhcjogcHJvcHMuYXBwZWFyLFxuICAgICAgb25FbnRlcixcbiAgICAgIG9uTGVhdmVcbiAgICB9LCBzbG90cy5kZWZhdWx0KVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgc2hhbGxvd1JlYWN0aXZlLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgd2l0aERpcmVjdGl2ZXMsIGdldEN1cnJlbnRJbnN0YW5jZSwgdlNob3csIG9uQmVmb3JlVW5tb3VudCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJdGVtIGZyb20gJy4uL2l0ZW0vUUl0ZW0uanMnXG5pbXBvcnQgUUl0ZW1TZWN0aW9uIGZyb20gJy4uL2l0ZW0vUUl0ZW1TZWN0aW9uLmpzJ1xuaW1wb3J0IFFJdGVtTGFiZWwgZnJvbSAnLi4vaXRlbS9RSXRlbUxhYmVsLmpzJ1xuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVNsaWRlVHJhbnNpdGlvbiBmcm9tICcuLi9zbGlkZS10cmFuc2l0aW9uL1FTbGlkZVRyYW5zaXRpb24uanMnXG5pbXBvcnQgUVNlcGFyYXRvciBmcm9tICcuLi9zZXBhcmF0b3IvUVNlcGFyYXRvci5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB7IHVzZVJvdXRlckxpbmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJvdXRlci1saW5rLmpzJ1xuaW1wb3J0IHVzZU1vZGVsVG9nZ2xlLCB7IHVzZU1vZGVsVG9nZ2xlUHJvcHMsIHVzZU1vZGVsVG9nZ2xlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1tb2RlbC10b2dnbGUuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL3V0aWxzL3VpZC5qcydcblxuY29uc3QgaXRlbUdyb3VwcyA9IHNoYWxsb3dSZWFjdGl2ZSh7fSlcbmNvbnN0IExJTktfUFJPUFMgPSBPYmplY3Qua2V5cyh1c2VSb3V0ZXJMaW5rUHJvcHMpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRRXhwYW5zaW9uSXRlbScsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG4gICAgLi4udXNlTW9kZWxUb2dnbGVQcm9wcyxcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBpY29uOiBTdHJpbmcsXG5cbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGxhYmVsTGluZXM6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIGNhcHRpb246IFN0cmluZyxcbiAgICBjYXB0aW9uTGluZXM6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIGRlbnNlOiBCb29sZWFuLFxuXG4gICAgdG9nZ2xlQXJpYUxhYmVsOiBTdHJpbmcsXG4gICAgZXhwYW5kSWNvbjogU3RyaW5nLFxuICAgIGV4cGFuZGVkSWNvbjogU3RyaW5nLFxuICAgIGV4cGFuZEljb25DbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBkdXJhdGlvbjogTnVtYmVyLFxuXG4gICAgaGVhZGVySW5zZXRMZXZlbDogTnVtYmVyLFxuICAgIGNvbnRlbnRJbnNldExldmVsOiBOdW1iZXIsXG5cbiAgICBleHBhbmRTZXBhcmF0b3I6IEJvb2xlYW4sXG4gICAgZGVmYXVsdE9wZW5lZDogQm9vbGVhbixcbiAgICBoaWRlRXhwYW5kSWNvbjogQm9vbGVhbixcbiAgICBleHBhbmRJY29uVG9nZ2xlOiBCb29sZWFuLFxuICAgIHN3aXRjaFRvZ2dsZVNpZGU6IEJvb2xlYW4sXG4gICAgZGVuc2VUb2dnbGU6IEJvb2xlYW4sXG4gICAgZ3JvdXA6IFN0cmluZyxcbiAgICBwb3B1cDogQm9vbGVhbixcblxuICAgIGhlYWRlclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGhlYWRlckNsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdXG4gIH0sXG5cbiAgZW1pdHM6IFtcbiAgICAuLi51c2VNb2RlbFRvZ2dsZUVtaXRzLFxuICAgICdjbGljaycsICdhZnRlclNob3cnLCAnYWZ0ZXJIaWRlJ1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gICAgY29uc3Qgc2hvd2luZyA9IHJlZihcbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgIDogcHJvcHMuZGVmYXVsdE9wZW5lZFxuICAgIClcblxuICAgIGNvbnN0IGJsdXJUYXJnZXRSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCB0YXJnZXRVaWQgPSB1aWQoKVxuXG4gICAgY29uc3QgeyBzaG93LCBoaWRlLCB0b2dnbGUgfSA9IHVzZU1vZGVsVG9nZ2xlKHsgc2hvd2luZyB9KVxuXG4gICAgbGV0IHVuaXF1ZUlkLCBleGl0R3JvdXBcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtZXhwYW5zaW9uLWl0ZW0gcS1pdGVtLXR5cGUnXG4gICAgICArIGAgcS1leHBhbnNpb24taXRlbS0tJHsgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJyB9YFxuICAgICAgKyBgIHEtZXhwYW5zaW9uLWl0ZW0tLSR7IHByb3BzLnBvcHVwID09PSB0cnVlID8gJ3BvcHVwJyA6ICdzdGFuZGFyZCcgfWBcbiAgICApXG5cbiAgICBjb25zdCBjb250ZW50U3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuY29udGVudEluc2V0TGV2ZWwgPT09IHZvaWQgMCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXIgPSAkcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdSaWdodCcgOiAnTGVmdCdcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFsgJ3BhZGRpbmcnICsgZGlyIF06IChwcm9wcy5jb250ZW50SW5zZXRMZXZlbCAqIDU2KSArICdweCdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgaGFzTGluayA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIChcbiAgICAgICAgcHJvcHMuaHJlZiAhPT0gdm9pZCAwXG4gICAgICAgIHx8IChwcm9wcy50byAhPT0gdm9pZCAwICYmIHByb3BzLnRvICE9PSBudWxsICYmIHByb3BzLnRvICE9PSAnJylcbiAgICAgIClcbiAgICApXG5cbiAgICBjb25zdCBsaW5rUHJvcHMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7fVxuICAgICAgTElOS19QUk9QUy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGFjY1sga2V5IF0gPSBwcm9wc1sga2V5IF1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcblxuICAgIGNvbnN0IGlzQ2xpY2thYmxlID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGhhc0xpbmsudmFsdWUgPT09IHRydWUgfHwgcHJvcHMuZXhwYW5kSWNvblRvZ2dsZSAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGV4cGFuc2lvbkljb24gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5leHBhbmRlZEljb24gIT09IHZvaWQgMCAmJiBzaG93aW5nLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gcHJvcHMuZXhwYW5kZWRJY29uXG4gICAgICAgIDogcHJvcHMuZXhwYW5kSWNvbiB8fCAkcS5pY29uU2V0LmV4cGFuc2lvbkl0ZW1bIHByb3BzLmRlbnNlVG9nZ2xlID09PSB0cnVlID8gJ2RlbnNlSWNvbicgOiAnaWNvbicgXVxuICAgICkpXG5cbiAgICBjb25zdCBhY3RpdmVUb2dnbGVJY29uID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgKGhhc0xpbmsudmFsdWUgPT09IHRydWUgfHwgcHJvcHMuZXhwYW5kSWNvblRvZ2dsZSA9PT0gdHJ1ZSlcbiAgICApXG5cbiAgICBjb25zdCBoZWFkZXJTbG90U2NvcGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgZXhwYW5kZWQ6IHNob3dpbmcudmFsdWUgPT09IHRydWUsXG4gICAgICBkZXRhaWxzSWQ6IHByb3BzLnRhcmdldFVpZCxcbiAgICAgIHRvZ2dsZSxcbiAgICAgIHNob3csXG4gICAgICBoaWRlXG4gICAgfSkpXG5cbiAgICBjb25zdCB0b2dnbGVBcmlhQXR0cnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCB0b2dnbGVBcmlhTGFiZWwgPSBwcm9wcy50b2dnbGVBcmlhTGFiZWwgIT09IHZvaWQgMFxuICAgICAgICA/IHByb3BzLnRvZ2dsZUFyaWFMYWJlbFxuICAgICAgICA6ICRxLmxhbmcubGFiZWxbIHNob3dpbmcudmFsdWUgPT09IHRydWUgPyAnY29sbGFwc2UnIDogJ2V4cGFuZCcgXShwcm9wcy5sYWJlbClcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGFyZ2V0VWlkLFxuICAgICAgICAnYXJpYS1sYWJlbCc6IHRvZ2dsZUFyaWFMYWJlbFxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5ncm91cCwgbmFtZSA9PiB7XG4gICAgICBleGl0R3JvdXAgIT09IHZvaWQgMCAmJiBleGl0R3JvdXAoKVxuICAgICAgbmFtZSAhPT0gdm9pZCAwICYmIGVudGVyR3JvdXAoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBvbkhlYWRlckNsaWNrIChlKSB7XG4gICAgICBoYXNMaW5rLnZhbHVlICE9PSB0cnVlICYmIHRvZ2dsZShlKVxuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZUljb25LZXlib2FyZCAoZSkge1xuICAgICAgZS5rZXlDb2RlID09PSAxMyAmJiB0b2dnbGVJY29uKGUsIHRydWUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9nZ2xlSWNvbiAoZSwga2V5Ym9hcmQpIHtcbiAgICAgIGtleWJvYXJkICE9PSB0cnVlICYmIGJsdXJUYXJnZXRSZWYudmFsdWUgIT09IG51bGwgJiYgYmx1clRhcmdldFJlZi52YWx1ZS5mb2N1cygpXG4gICAgICB0b2dnbGUoZSlcbiAgICAgIHN0b3BBbmRQcmV2ZW50KGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TaG93ICgpIHtcbiAgICAgIGVtaXQoJ2FmdGVyU2hvdycpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25IaWRlICgpIHtcbiAgICAgIGVtaXQoJ2FmdGVySGlkZScpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW50ZXJHcm91cCAoKSB7XG4gICAgICBpZiAodW5pcXVlSWQgPT09IHZvaWQgMCkge1xuICAgICAgICB1bmlxdWVJZCA9IHVpZCgpXG4gICAgICB9XG5cbiAgICAgIGlmIChzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPSB1bmlxdWVJZFxuICAgICAgfVxuXG4gICAgICBjb25zdCBzaG93ID0gd2F0Y2goc2hvd2luZywgdmFsID0+IHtcbiAgICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPSB1bmlxdWVJZFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF0gPT09IHVuaXF1ZUlkKSB7XG4gICAgICAgICAgZGVsZXRlIGl0ZW1Hcm91cHNbIHByb3BzLmdyb3VwIF1cbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgY29uc3QgZ3JvdXAgPSB3YXRjaChcbiAgICAgICAgKCkgPT4gaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSxcbiAgICAgICAgKHZhbCwgb2xkVmFsKSA9PiB7XG4gICAgICAgICAgaWYgKG9sZFZhbCA9PT0gdW5pcXVlSWQgJiYgdmFsICE9PSB2b2lkIDAgJiYgdmFsICE9PSB1bmlxdWVJZCkge1xuICAgICAgICAgICAgaGlkZSgpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGV4aXRHcm91cCA9ICgpID0+IHtcbiAgICAgICAgc2hvdygpXG4gICAgICAgIGdyb3VwKClcblxuICAgICAgICBpZiAoaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXSA9PT0gdW5pcXVlSWQpIHtcbiAgICAgICAgICBkZWxldGUgaXRlbUdyb3Vwc1sgcHJvcHMuZ3JvdXAgXVxuICAgICAgICB9XG5cbiAgICAgICAgZXhpdEdyb3VwID0gdm9pZCAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VG9nZ2xlSWNvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjbGFzczogW1xuICAgICAgICAgICdxLWZvY3VzYWJsZSByZWxhdGl2ZS1wb3NpdGlvbiBjdXJzb3ItcG9pbnRlcidcbiAgICAgICAgICAgICsgYCR7IHByb3BzLmRlbnNlVG9nZ2xlID09PSB0cnVlICYmIHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUgPyAnIGl0ZW1zLWVuZCcgOiAnJyB9YCxcbiAgICAgICAgICBwcm9wcy5leHBhbmRJY29uQ2xhc3NcbiAgICAgICAgXSxcbiAgICAgICAgc2lkZTogcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSAhPT0gdHJ1ZSxcbiAgICAgICAgYXZhdGFyOiBwcm9wcy5zd2l0Y2hUb2dnbGVTaWRlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNoaWxkID0gW1xuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX190b2dnbGUtaWNvbidcbiAgICAgICAgICAgICsgKHByb3BzLmV4cGFuZGVkSWNvbiA9PT0gdm9pZCAwICYmIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgICAgPyAnIHEtZXhwYW5zaW9uLWl0ZW1fX3RvZ2dsZS1pY29uLS1yb3RhdGVkJ1xuICAgICAgICAgICAgICA6ICcnKSxcbiAgICAgICAgICBuYW1lOiBleHBhbnNpb25JY29uLnZhbHVlXG4gICAgICAgIH0pXG4gICAgICBdXG5cbiAgICAgIGlmIChhY3RpdmVUb2dnbGVJY29uLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgIHRhYmluZGV4OiAwLFxuICAgICAgICAgIC4uLnRvZ2dsZUFyaWFBdHRycy52YWx1ZSxcbiAgICAgICAgICBvbkNsaWNrOiB0b2dnbGVJY29uLFxuICAgICAgICAgIG9uS2V5dXA6IHRvZ2dsZUljb25LZXlib2FyZFxuICAgICAgICB9KVxuXG4gICAgICAgIGNoaWxkLnVuc2hpZnQoXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgcmVmOiBibHVyVGFyZ2V0UmVmLFxuICAgICAgICAgICAgY2xhc3M6ICdxLWV4cGFuc2lvbi1pdGVtX190b2dnbGUtZm9jdXMgcS1pY29uIHEtZm9jdXMtaGVscGVyIHEtZm9jdXMtaGVscGVyLS1yb3VuZGVkJyxcbiAgICAgICAgICAgIHRhYmluZGV4OiAtMVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUl0ZW1TZWN0aW9uLCBkYXRhLCAoKSA9PiBjaGlsZClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRIZWFkZXJDaGlsZCAoKSB7XG4gICAgICBsZXQgY2hpbGRcblxuICAgICAgaWYgKHNsb3RzLmhlYWRlciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNoaWxkID0gW10uY29uY2F0KHNsb3RzLmhlYWRlcihoZWFkZXJTbG90U2NvcGUudmFsdWUpKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoaWxkID0gW1xuICAgICAgICAgIGgoUUl0ZW1TZWN0aW9uLCAoKSA9PiBbXG4gICAgICAgICAgICBoKFFJdGVtTGFiZWwsIHsgbGluZXM6IHByb3BzLmxhYmVsTGluZXMgfSwgKCkgPT4gcHJvcHMubGFiZWwgfHwgJycpLFxuXG4gICAgICAgICAgICBwcm9wcy5jYXB0aW9uXG4gICAgICAgICAgICAgID8gaChRSXRlbUxhYmVsLCB7IGxpbmVzOiBwcm9wcy5jYXB0aW9uTGluZXMsIGNhcHRpb246IHRydWUgfSwgKCkgPT4gcHJvcHMuY2FwdGlvbilcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuXG4gICAgICAgIHByb3BzLmljb24gJiYgY2hpbGRbIHByb3BzLnN3aXRjaFRvZ2dsZVNpZGUgPT09IHRydWUgPyAncHVzaCcgOiAndW5zaGlmdCcgXShcbiAgICAgICAgICBoKFFJdGVtU2VjdGlvbiwge1xuICAgICAgICAgICAgc2lkZTogcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIGF2YXRhcjogcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSAhPT0gdHJ1ZVxuICAgICAgICAgIH0sICgpID0+IGgoUUljb24sIHsgbmFtZTogcHJvcHMuaWNvbiB9KSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBwcm9wcy5oaWRlRXhwYW5kSWNvbiAhPT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZFsgcHJvcHMuc3dpdGNoVG9nZ2xlU2lkZSA9PT0gdHJ1ZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJyBdKFxuICAgICAgICAgIGdldFRvZ2dsZUljb24oKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjaGlsZFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEhlYWRlciAoKSB7XG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICByZWY6ICdpdGVtJyxcbiAgICAgICAgc3R5bGU6IHByb3BzLmhlYWRlclN0eWxlLFxuICAgICAgICBjbGFzczogcHJvcHMuaGVhZGVyQ2xhc3MsXG4gICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgZGVuc2U6IHByb3BzLmRlbnNlLFxuICAgICAgICBpbnNldExldmVsOiBwcm9wcy5oZWFkZXJJbnNldExldmVsXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0NsaWNrYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkYXRhLmNsaWNrYWJsZSA9IHRydWVcbiAgICAgICAgZGF0YS5vbkNsaWNrID0gb25IZWFkZXJDbGlja1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgZGF0YSxcbiAgICAgICAgICBoYXNMaW5rLnZhbHVlID09PSB0cnVlID8gbGlua1Byb3BzLnZhbHVlIDogdG9nZ2xlQXJpYUF0dHJzLnZhbHVlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUl0ZW0sIGRhdGEsIGdldEhlYWRlckNoaWxkKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFRyYW5zaXRpb25DaGlsZCAoKSB7XG4gICAgICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBrZXk6ICdlLWNvbnRlbnQnLFxuICAgICAgICAgIGNsYXNzOiAncS1leHBhbnNpb24taXRlbV9fY29udGVudCByZWxhdGl2ZS1wb3NpdGlvbicsXG4gICAgICAgICAgc3R5bGU6IGNvbnRlbnRTdHlsZS52YWx1ZSxcbiAgICAgICAgICBpZDogdGFyZ2V0VWlkXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKSxcbiAgICAgICAgWyBbXG4gICAgICAgICAgdlNob3csXG4gICAgICAgICAgc2hvd2luZy52YWx1ZVxuICAgICAgICBdIF1cbiAgICAgIClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb250ZW50ICgpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBbXG4gICAgICAgIGdldEhlYWRlcigpLFxuXG4gICAgICAgIGgoUVNsaWRlVHJhbnNpdGlvbiwge1xuICAgICAgICAgIGR1cmF0aW9uOiBwcm9wcy5kdXJhdGlvbixcbiAgICAgICAgICBvblNob3csXG4gICAgICAgICAgb25IaWRlXG4gICAgICAgIH0sIGdldFRyYW5zaXRpb25DaGlsZClcbiAgICAgIF1cblxuICAgICAgaWYgKHByb3BzLmV4cGFuZFNlcGFyYXRvciA9PT0gdHJ1ZSkge1xuICAgICAgICBub2RlLnB1c2goXG4gICAgICAgICAgaChRU2VwYXJhdG9yLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX2JvcmRlciBxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXItLXRvcCBhYnNvbHV0ZS10b3AnLFxuICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaChRU2VwYXJhdG9yLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX2JvcmRlciBxLWV4cGFuc2lvbi1pdGVtX19ib3JkZXItLWJvdHRvbSBhYnNvbHV0ZS1ib3R0b20nLFxuICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZVxuICAgIH1cblxuICAgIHByb3BzLmdyb3VwICE9PSB2b2lkIDAgJiYgZW50ZXJHcm91cCgpXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgZXhpdEdyb3VwICE9PSB2b2lkIDAgJiYgZXhpdEdyb3VwKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgW1xuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZXhwYW5zaW9uLWl0ZW1fX2NvbnRhaW5lciByZWxhdGl2ZS1wb3NpdGlvbicgfSwgZ2V0Q29udGVudCgpKVxuICAgIF0pXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlU3Bpbm5lciwgeyB1c2VTcGlubmVyUHJvcHMgfSBmcm9tICcuL3VzZS1zcGlubmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3ZnID0gW1xuICBoKCdnJywge1xuICAgIHRyYW5zZm9ybTogJ21hdHJpeCgxIDAgMCAtMSAwIDgwKSdcbiAgfSwgW1xuICAgIGgoJ3JlY3QnLCB7XG4gICAgICB3aWR0aDogJzEwJyxcbiAgICAgIGhlaWdodDogJzIwJyxcbiAgICAgIHJ4OiAnMydcbiAgICB9LCBbXG4gICAgICBoKCdhbmltYXRlJywge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnaGVpZ2h0JyxcbiAgICAgICAgYmVnaW46ICcwcycsXG4gICAgICAgIGR1cjogJzQuM3MnLFxuICAgICAgICB2YWx1ZXM6ICcyMDs0NTs1Nzs4MDs2NDszMjs2Njs0NTs2NDsyMzs2NjsxMzs2NDs1NjszNDszNDsyOzIzOzc2Ozc5OzIwJyxcbiAgICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgICB9KVxuICAgIF0pLFxuICAgIGgoJ3JlY3QnLCB7XG4gICAgICB4OiAnMTUnLFxuICAgICAgd2lkdGg6ICcxMCcsXG4gICAgICBoZWlnaHQ6ICc4MCcsXG4gICAgICByeDogJzMnXG4gICAgfSwgW1xuICAgICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgICAgYXR0cmlidXRlTmFtZTogJ2hlaWdodCcsXG4gICAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgICBkdXI6ICcycycsXG4gICAgICAgIHZhbHVlczogJzgwOzU1OzMzOzU7NzU7MjM7NzM7MzM7MTI7MTQ7NjA7ODAnLFxuICAgICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICAgIH0pXG4gICAgXSksXG4gICAgaCgncmVjdCcsIHtcbiAgICAgIHg6ICczMCcsXG4gICAgICB3aWR0aDogJzEwJyxcbiAgICAgIGhlaWdodDogJzUwJyxcbiAgICAgIHJ4OiAnMydcbiAgICB9LCBbXG4gICAgICBoKCdhbmltYXRlJywge1xuICAgICAgICBhdHRyaWJ1dGVOYW1lOiAnaGVpZ2h0JyxcbiAgICAgICAgYmVnaW46ICcwcycsXG4gICAgICAgIGR1cjogJzEuNHMnLFxuICAgICAgICB2YWx1ZXM6ICc1MDszNDs3ODsyMzs1NjsyMzszNDs3Njs4MDs1NDsyMTs1MCcsXG4gICAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgICAgfSlcbiAgICBdKSxcbiAgICBoKCdyZWN0Jywge1xuICAgICAgeDogJzQ1JyxcbiAgICAgIHdpZHRoOiAnMTAnLFxuICAgICAgaGVpZ2h0OiAnMzAnLFxuICAgICAgcng6ICczJ1xuICAgIH0sIFtcbiAgICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6ICdoZWlnaHQnLFxuICAgICAgICBiZWdpbjogJzBzJyxcbiAgICAgICAgZHVyOiAnMnMnLFxuICAgICAgICB2YWx1ZXM6ICczMDs0NTsxMzs4MDs1Njs3Mjs0NTs3NjszNDsyMzs2NzszMCcsXG4gICAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgICAgfSlcbiAgICBdKVxuICBdKVxuXVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNwaW5uZXJBdWRpbycsXG5cbiAgcHJvcHM6IHVzZVNwaW5uZXJQcm9wcyxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBjb25zdCB7IGNTaXplLCBjbGFzc2VzIH0gPSB1c2VTcGlubmVyKHByb3BzKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ3N2ZycsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICB3aWR0aDogY1NpemUudmFsdWUsXG4gICAgICBoZWlnaHQ6IGNTaXplLnZhbHVlLFxuICAgICAgdmlld0JveDogJzAgMCA1NSA4MCcsXG4gICAgICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgIH0sIHN2ZylcbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtaXRlbSBjbGFzcz1cInRyYW5zcGFyZW50XCIgY2xpY2thYmxlIHYtcmlwcGxlIHYtaWY9XCJwcm9wcy50cmFja0luZm9cIj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gYXZhdGFyPlxuICAgICAgPHEtYXZhdGFyIHNxdWFyZT5cbiAgICAgICAgPGltZyA6c3JjPVwicHJvcHMudHJhY2tJbmZvLmFsYnVtLnRodW1ibmFpbC50aW55LnVybFwiPlxuICAgICAgPC9xLWF2YXRhcj5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJlbGxpcHNpc1wiIDpjbGFzcz1cInsgJ3RleHQtZ3QnIDogY3VycmVudGx5UGxheWluZyB9XCI+e3sgcHJvcHMudHJhY2tJbmZvLm5hbWUuX2RlZmF1bHQgfX08L3EtaXRlbS1sYWJlbD5cbiAgICAgIDxxLWl0ZW0tbGFiZWwgY2xhc3M9XCJlbGxpcHNpc1wiIDpjbGFzcz1cInsgJ3RleHQtZ3QnIDogY3VycmVudGx5UGxheWluZyB9XCIgY2FwdGlvbiBsaW5lcz1cIjJcIj57eyBwcm9wcy50cmFja0luZm8uYWxidW0uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9xLWl0ZW0tbGFiZWw+XG4gICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICA8cS1pdGVtLXNlY3Rpb24gc2lkZSB2LWlmPVwiY3VycmVudGx5UGxheWluZ1wiPlxuICAgICAgPHEtc3Bpbm5lci1hdWRpbyB2LWlmPVwiIXBhdXNlZFwiIHNpemU9XCIyZW1cIiBjb2xvcj1cImd0XCIgLz5cbiAgICAgIDxxLWljb24gc2l6ZT1cIjJlbVwiIHYtaWY9XCJwYXVzZWRcIiA6bmFtZT1cIm91dGxpbmVkUGF1c2VcIj48L3EtaWNvbj5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgIDxxLWl0ZW0tc2VjdGlvbiBzaWRlIHYtaWY9XCIhY3VycmVudGx5UGxheWluZ1wiPlxuICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uPnt7IGZvcm1hdER1cmF0aW9uKHByb3BzLnRyYWNrSW5mby5kdXJhdGlvbikgfX08L3EtaXRlbS1sYWJlbD5cbiAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICA8L3EtaXRlbT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1RyYWNrUmVhZER0b30gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IHtjb21wdXRlZCwgZGVmaW5lUHJvcHN9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge2Zvcm1hdER1cmF0aW9ufSBmcm9tICdzcmMvdXRpbHMvZHVyYXRpb25VdGlscyc7XG5pbXBvcnQge2F1ZGlvQ29udHJvbGxlcn0gZnJvbSAnYm9vdC9hdWRpb0NvbnRyb2xsZXInO1xuaW1wb3J0IHtvdXRsaW5lZFBhdXNlfSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmNvbnN0IHBhdXNlZCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIGF1ZGlvQ29udHJvbGxlci5wYXVzZWQudmFsdWU7XG59KTtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdHJhY2tJbmZvOiBUcmFja1JlYWREdG8sXG4gIGN1cnJlbnRseVBsYXlpbmc6IGJvb2xlYW5cbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczxQcm9wcz4oKTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxxLWxpc3Q+XG4gICAgICA8cS1leHBhbnNpb24taXRlbVxuICAgICAgICBkZW5zZVxuICAgICAgICBsYWJlbD1cIkhpc3RvcnlcIlxuICAgICAgICBkZWZhdWx0LW9wZW5lZD5cblxuICAgICAgICA8UXVldWVJdGVtIHYtZm9yPVwiaGlzdG9yeSBpbiBxdWV1ZWRIaXN0b3J5XCIgOmtleT1cImhpc3RvcnkuaWRcIlxuICAgICAgICAgICAgICAgICAgIDp0cmFjay1pbmZvPVwiaGlzdG9yeVwiIDpjdXJyZW50bHktcGxheWluZz1cImZhbHNlXCI+PC9RdWV1ZUl0ZW0+XG5cbiAgICAgICAgPFF1ZXVlSXRlbSA6Y3VycmVudGx5LXBsYXlpbmc9XCJ0cnVlXCIgOnRyYWNrLWluZm89XCJjdXJyZW50bHlQbGF5aW5nXCI+PC9RdWV1ZUl0ZW0+XG4gICAgICA8L3EtZXhwYW5zaW9uLWl0ZW0+XG5cbiAgICAgIDxxLWV4cGFuc2lvbi1pdGVtXG4gICAgICAgIGRlbnNlXG4gICAgICAgIGxhYmVsPVwiTmV4dCBVcFwiXG4gICAgICAgIGRlZmF1bHQtb3BlbmVkPlxuICAgICAgICA8UXVldWVJdGVtIHYtZm9yPVwiZnV0dXJlIGluIHF1ZXVlZEZ1dHVyZVwiIDprZXk9XCJmdXR1cmUuaWRcIlxuICAgICAgICAgICAgICAgICAgIDp0cmFjay1pbmZvPVwiZnV0dXJlXCIgOmN1cnJlbnRseS1wbGF5aW5nPVwiZmFsc2VcIj48L1F1ZXVlSXRlbT5cbiAgICAgIDwvcS1leHBhbnNpb24taXRlbT5cbiAgICA8L3EtbGlzdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IFF1ZXVlSXRlbSBmcm9tICdjb21wb25lbnRzL1F1ZXVlSXRlbS52dWUnO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcbmltcG9ydCB7UXVldWVDb250cm9sbGVyfSBmcm9tICdzcmMvdXRpbHMvUXVldWVDb250cm9sbGVyJztcblxubGV0IHF1ZXVlQ29udHJvbGxlciA9IFF1ZXVlQ29udHJvbGxlci5nZXRJbnN0YW5jZSgpO1xuXG5jb25zdCBxdWV1ZWRIaXN0b3J5ID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gcXVldWVDb250cm9sbGVyLnNvbmdIaXN0b3J5O1xufSlcblxuY29uc3QgcXVldWVkRnV0dXJlID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gcXVldWVDb250cm9sbGVyLnF1ZXVlO1xufSlcblxuY29uc3QgY3VycmVudGx5UGxheWluZyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgcmV0dXJuIHF1ZXVlQ29udHJvbGxlci5jdXJyZW50bHlQbGF5aW5nO1xufSlcblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBoLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUJ0bkdyb3VwJyxcblxuICBwcm9wczoge1xuICAgIHVuZWxldmF0ZWQ6IEJvb2xlYW4sXG4gICAgb3V0bGluZTogQm9vbGVhbixcbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG4gICAgc3F1YXJlOiBCb29sZWFuLFxuICAgIHB1c2g6IEJvb2xlYW4sXG4gICAgc3RyZXRjaDogQm9vbGVhbixcbiAgICBnbG9zc3k6IEJvb2xlYW4sXG4gICAgc3ByZWFkOiBCb29sZWFuXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzIH0pIHtcbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgY2xzID0gWyAndW5lbGV2YXRlZCcsICdvdXRsaW5lJywgJ2ZsYXQnLCAncm91bmRlZCcsICdzcXVhcmUnLCAncHVzaCcsICdzdHJldGNoJywgJ2dsb3NzeScgXVxuICAgICAgICAuZmlsdGVyKHQgPT4gcHJvcHNbIHQgXSA9PT0gdHJ1ZSlcbiAgICAgICAgLm1hcCh0ID0+IGBxLWJ0bi1ncm91cC0tJHsgdCB9YCkuam9pbignICcpXG5cbiAgICAgIHJldHVybiBgcS1idG4tZ3JvdXAgcm93IG5vLXdyYXAkeyBjbHMubGVuZ3RoID4gMCA/ICcgJyArIGNscyA6ICcnIH1gXG4gICAgICAgICsgKHByb3BzLnNwcmVhZCA9PT0gdHJ1ZSA/ICcgcS1idG4tZ3JvdXAtLXNwcmVhZCcgOiAnIGlubGluZScpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgUUljb24gZnJvbSAnLi4vaWNvbi9RSWNvbi5qcydcbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFCdG5Hcm91cCBmcm9tICcuLi9idG4tZ3JvdXAvUUJ0bkdyb3VwLmpzJ1xuaW1wb3J0IFFNZW51IGZyb20gJy4uL21lbnUvUU1lbnUuanMnXG5cbmltcG9ydCB7IGdldEJ0bkRlc2lnbkF0dHIsIHVzZUJ0blByb3BzIH0gZnJvbSAnLi4vYnRuL3VzZS1idG4uanMnXG5pbXBvcnQgeyB1c2VUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10cmFuc2l0aW9uLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IHN0b3AgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB1aWQgZnJvbSAnLi4vLi4vdXRpbHMvdWlkLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgYnRuUHJvcHNMaXN0ID0gT2JqZWN0LmtleXModXNlQnRuUHJvcHMpXG5cbmV4cG9ydCBjb25zdCBwYXNzQnRuUHJvcHMgPSBwcm9wcyA9PiBidG5Qcm9wc0xpc3QucmVkdWNlKFxuICAoYWNjLCBrZXkpID0+IHtcbiAgICBjb25zdCB2YWwgPSBwcm9wc1sga2V5IF1cbiAgICBpZiAodmFsICE9PSB2b2lkIDApIHtcbiAgICAgIGFjY1sga2V5IF0gPSB2YWxcbiAgICB9XG4gICAgcmV0dXJuIGFjY1xuICB9LFxuICB7fVxuKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUJ0bkRyb3Bkb3duJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZUJ0blByb3BzLFxuICAgIC4uLnVzZVRyYW5zaXRpb25Qcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IEJvb2xlYW4sXG4gICAgc3BsaXQ6IEJvb2xlYW4sXG4gICAgZHJvcGRvd25JY29uOiBTdHJpbmcsXG5cbiAgICBjb250ZW50Q2xhc3M6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgY29udGVudFN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgY292ZXI6IEJvb2xlYW4sXG4gICAgcGVyc2lzdGVudDogQm9vbGVhbixcbiAgICBub1JvdXRlRGlzbWlzczogQm9vbGVhbixcbiAgICBhdXRvQ2xvc2U6IEJvb2xlYW4sXG5cbiAgICBtZW51QW5jaG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYm90dG9tIGVuZCdcbiAgICB9LFxuICAgIG1lbnVTZWxmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAndG9wIGVuZCdcbiAgICB9LFxuICAgIG1lbnVPZmZzZXQ6IEFycmF5LFxuXG4gICAgZGlzYWJsZU1haW5CdG46IEJvb2xlYW4sXG4gICAgZGlzYWJsZURyb3Bkb3duOiBCb29sZWFuLFxuXG4gICAgbm9JY29uQW5pbWF0aW9uOiBCb29sZWFuLFxuXG4gICAgdG9nZ2xlQXJpYUxhYmVsOiBTdHJpbmdcbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnLCAnY2xpY2snLCAnYmVmb3JlU2hvdycsICdzaG93JywgJ2JlZm9yZUhpZGUnLCAnaGlkZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBzaG93aW5nID0gcmVmKHByb3BzLm1vZGVsVmFsdWUpXG4gICAgY29uc3QgbWVudVJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHRhcmdldFVpZCA9IHVpZCgpXG5cbiAgICBjb25zdCBhcmlhQXR0cnMgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBjb25zdCBhY2MgPSB7XG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IHRhcmdldFVpZCxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy50b2dnbGVBcmlhTGFiZWwgfHwgcHJveHkuJHEubGFuZy5sYWJlbFsgc2hvd2luZy52YWx1ZSA9PT0gdHJ1ZSA/ICdjb2xsYXBzZScgOiAnZXhwYW5kJyBdKHByb3BzLmxhYmVsKVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgICAgfHwgKFxuICAgICAgICAgIChwcm9wcy5zcGxpdCA9PT0gZmFsc2UgJiYgcHJvcHMuZGlzYWJsZU1haW5CdG4gPT09IHRydWUpXG4gICAgICAgICAgfHwgcHJvcHMuZGlzYWJsZURyb3Bkb3duID09PSB0cnVlXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBhY2NbICdhcmlhLWRpc2FibGVkJyBdID0gJ3RydWUnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgY29uc3QgaWNvbkNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWJ0bi1kcm9wZG93bl9fYXJyb3cnXG4gICAgICArIChzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByb3BzLm5vSWNvbkFuaW1hdGlvbiA9PT0gZmFsc2UgPyAnIHJvdGF0ZS0xODAnIDogJycpXG4gICAgICArIChwcm9wcy5zcGxpdCA9PT0gZmFsc2UgPyAnIHEtYnRuLWRyb3Bkb3duX19hcnJvdy1jb250YWluZXInIDogJycpXG4gICAgKVxuXG4gICAgY29uc3QgYnRuRGVzaWduQXR0ciA9IGNvbXB1dGVkKCgpID0+IGdldEJ0bkRlc2lnbkF0dHIocHJvcHMpKVxuICAgIGNvbnN0IGJ0blByb3BzID0gY29tcHV0ZWQoKCkgPT4gcGFzc0J0blByb3BzKHByb3BzKSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm1vZGVsVmFsdWUsIHZhbCA9PiB7XG4gICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWVbIHZhbCA/ICdzaG93JyA6ICdoaWRlJyBdKClcbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc3BsaXQsIGhpZGUpXG5cbiAgICBmdW5jdGlvbiBvbkJlZm9yZVNob3cgKGUpIHtcbiAgICAgIHNob3dpbmcudmFsdWUgPSB0cnVlXG4gICAgICBlbWl0KCdiZWZvcmVTaG93JywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblNob3cgKGUpIHtcbiAgICAgIGVtaXQoJ3Nob3cnLCBlKVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB0cnVlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uQmVmb3JlSGlkZSAoZSkge1xuICAgICAgc2hvd2luZy52YWx1ZSA9IGZhbHNlXG4gICAgICBlbWl0KCdiZWZvcmVIaWRlJywgZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkhpZGUgKGUpIHtcbiAgICAgIGVtaXQoJ2hpZGUnLCBlKVxuICAgICAgZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCBmYWxzZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkNsaWNrIChlKSB7XG4gICAgICBlbWl0KCdjbGljaycsIGUpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25DbGlja0hpZGUgKGUpIHtcbiAgICAgIHN0b3AoZSlcbiAgICAgIGhpZGUoKVxuICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvZ2dsZSAoZXZ0KSB7XG4gICAgICBtZW51UmVmLnZhbHVlICE9PSBudWxsICYmIG1lbnVSZWYudmFsdWUudG9nZ2xlKGV2dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93IChldnQpIHtcbiAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZS5zaG93KGV2dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlIChldnQpIHtcbiAgICAgIG1lbnVSZWYudmFsdWUgIT09IG51bGwgJiYgbWVudVJlZi52YWx1ZS5oaWRlKGV2dClcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7XG4gICAgICBzaG93LCBoaWRlLCB0b2dnbGVcbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHByb3BzLm1vZGVsVmFsdWUgPT09IHRydWUgJiYgc2hvdygpXG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBBcnJvdyA9IFtcbiAgICAgICAgaChRSWNvbiwge1xuICAgICAgICAgIGNsYXNzOiBpY29uQ2xhc3MudmFsdWUsXG4gICAgICAgICAgbmFtZTogcHJvcHMuZHJvcGRvd25JY29uIHx8IHByb3h5LiRxLmljb25TZXQuYXJyb3cuZHJvcGRvd25cbiAgICAgICAgfSlcbiAgICAgIF1cblxuICAgICAgcHJvcHMuZGlzYWJsZURyb3Bkb3duICE9PSB0cnVlICYmIEFycm93LnB1c2goXG4gICAgICAgIGgoUU1lbnUsIHtcbiAgICAgICAgICByZWY6IG1lbnVSZWYsXG4gICAgICAgICAgaWQ6IHRhcmdldFVpZCxcbiAgICAgICAgICBjbGFzczogcHJvcHMuY29udGVudENsYXNzLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5jb250ZW50U3R5bGUsXG4gICAgICAgICAgY292ZXI6IHByb3BzLmNvdmVyLFxuICAgICAgICAgIGZpdDogdHJ1ZSxcbiAgICAgICAgICBwZXJzaXN0ZW50OiBwcm9wcy5wZXJzaXN0ZW50LFxuICAgICAgICAgIG5vUm91dGVEaXNtaXNzOiBwcm9wcy5ub1JvdXRlRGlzbWlzcyxcbiAgICAgICAgICBhdXRvQ2xvc2U6IHByb3BzLmF1dG9DbG9zZSxcbiAgICAgICAgICBhbmNob3I6IHByb3BzLm1lbnVBbmNob3IsXG4gICAgICAgICAgc2VsZjogcHJvcHMubWVudVNlbGYsXG4gICAgICAgICAgb2Zmc2V0OiBwcm9wcy5tZW51T2Zmc2V0LFxuICAgICAgICAgIHNlcGFyYXRlQ2xvc2VQb3B1cDogdHJ1ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uU2hvdzogcHJvcHMudHJhbnNpdGlvblNob3csXG4gICAgICAgICAgdHJhbnNpdGlvbkhpZGU6IHByb3BzLnRyYW5zaXRpb25IaWRlLFxuICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICAgIG9uQmVmb3JlU2hvdyxcbiAgICAgICAgICBvblNob3csXG4gICAgICAgICAgb25CZWZvcmVIaWRlLFxuICAgICAgICAgIG9uSGlkZVxuICAgICAgICB9LCBzbG90cy5kZWZhdWx0KVxuICAgICAgKVxuXG4gICAgICBpZiAocHJvcHMuc3BsaXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBoKFFCdG4sIHtcbiAgICAgICAgICBjbGFzczogJ3EtYnRuLWRyb3Bkb3duIHEtYnRuLWRyb3Bkb3duLS1zaW1wbGUnLFxuICAgICAgICAgIC4uLmJ0blByb3BzLnZhbHVlLFxuICAgICAgICAgIC4uLmFyaWFBdHRycy52YWx1ZSxcbiAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLmRpc2FibGVNYWluQnRuID09PSB0cnVlLFxuICAgICAgICAgIG5vV3JhcDogdHJ1ZSxcbiAgICAgICAgICByb3VuZDogZmFsc2UsXG4gICAgICAgICAgb25DbGlja1xuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVmYXVsdDogKCkgPT4gaFNsb3Qoc2xvdHMubGFiZWwsIFtdKS5jb25jYXQoQXJyb3cpLFxuICAgICAgICAgIGxvYWRpbmc6IHNsb3RzLmxvYWRpbmdcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0bkdyb3VwLCB7XG4gICAgICAgIGNsYXNzOiAncS1idG4tZHJvcGRvd24gcS1idG4tZHJvcGRvd24tLXNwbGl0IG5vLXdyYXAgcS1idG4taXRlbScsXG4gICAgICAgIHJvdW5kZWQ6IHByb3BzLnJvdW5kZWQsXG4gICAgICAgIHNxdWFyZTogcHJvcHMuc3F1YXJlLFxuICAgICAgICAuLi5idG5EZXNpZ25BdHRyLnZhbHVlLFxuICAgICAgICBnbG9zc3k6IHByb3BzLmdsb3NzeSxcbiAgICAgICAgc3RyZXRjaDogcHJvcHMuc3RyZXRjaFxuICAgICAgfSwgKCkgPT4gW1xuICAgICAgICBoKFFCdG4sIHtcbiAgICAgICAgICBjbGFzczogJ3EtYnRuLWRyb3Bkb3duLS1jdXJyZW50JyxcbiAgICAgICAgICAuLi5idG5Qcm9wcy52YWx1ZSxcbiAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLmRpc2FibGVNYWluQnRuID09PSB0cnVlLFxuICAgICAgICAgIG5vV3JhcDogdHJ1ZSxcbiAgICAgICAgICByb3VuZDogZmFsc2UsXG4gICAgICAgICAgb25DbGljazogb25DbGlja0hpZGVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlZmF1bHQ6IHNsb3RzLmxhYmVsLFxuICAgICAgICAgIGxvYWRpbmc6IHNsb3RzLmxvYWRpbmdcbiAgICAgICAgfSksXG5cbiAgICAgICAgaChRQnRuLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLWJ0bi1kcm9wZG93bl9fYXJyb3ctY29udGFpbmVyIHEtYW5jaG9yLS1za2lwJyxcbiAgICAgICAgICAuLi5hcmlhQXR0cnMudmFsdWUsXG4gICAgICAgICAgLi4uYnRuRGVzaWduQXR0ci52YWx1ZSxcbiAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLmRpc2FibGVEcm9wZG93biA9PT0gdHJ1ZSxcbiAgICAgICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuICAgICAgICAgIGNvbG9yOiBwcm9wcy5jb2xvcixcbiAgICAgICAgICB0ZXh0Q29sb3I6IHByb3BzLnRleHRDb2xvcixcbiAgICAgICAgICBkZW5zZTogcHJvcHMuZGVuc2UsXG4gICAgICAgICAgc2l6ZTogcHJvcHMuc2l6ZSxcbiAgICAgICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxuICAgICAgICAgIHJpcHBsZTogcHJvcHMucmlwcGxlXG4gICAgICAgIH0sICgpID0+IEFycm93KVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbk1vdW50ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSwgbmV4dFRpY2ssIHByb3ZpZGUgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgc3RvcEFuZFByZXZlbnQgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGFkZEZvY3VzRm4gfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2ZvY3VzLW1hbmFnZXIuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgZm9ybUtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcbmltcG9ydCB7IHZtSXNEZXN0cm95ZWQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUZvcm0nLFxuXG4gIHByb3BzOiB7XG4gICAgYXV0b2ZvY3VzOiBCb29sZWFuLFxuICAgIG5vRXJyb3JGb2N1czogQm9vbGVhbixcbiAgICBub1Jlc2V0Rm9jdXM6IEJvb2xlYW4sXG4gICAgZ3JlZWR5OiBCb29sZWFuLFxuXG4gICAgb25TdWJtaXQ6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ3Jlc2V0JywgJ3ZhbGlkYXRpb25TdWNjZXNzJywgJ3ZhbGlkYXRpb25FcnJvcicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICBsZXQgdmFsaWRhdGVJbmRleCA9IDBcbiAgICBjb25zdCByZWdpc3RlcmVkQ29tcG9uZW50cyA9IFtdXG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZSAoc2hvdWxkRm9jdXMpIHtcbiAgICAgIGNvbnN0IGZvY3VzID0gdHlwZW9mIHNob3VsZEZvY3VzID09PSAnYm9vbGVhbidcbiAgICAgICAgPyBzaG91bGRGb2N1c1xuICAgICAgICA6IHByb3BzLm5vRXJyb3JGb2N1cyAhPT0gdHJ1ZVxuXG4gICAgICBjb25zdCBpbmRleCA9ICsrdmFsaWRhdGVJbmRleFxuXG4gICAgICBjb25zdCBlbWl0RXZlbnQgPSAocmVzLCByZWYpID0+IHtcbiAgICAgICAgZW1pdCgndmFsaWRhdGlvbicgKyAocmVzID09PSB0cnVlID8gJ1N1Y2Nlc3MnIDogJ0Vycm9yJyksIHJlZilcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWRhdGVDb21wb25lbnQgPSBjb21wID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWQgPSBjb21wLnZhbGlkYXRlKClcblxuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbGlkLnRoZW4gPT09ICdmdW5jdGlvbidcbiAgICAgICAgICA/IHZhbGlkLnRoZW4oXG4gICAgICAgICAgICB2YWxpZCA9PiAoeyB2YWxpZCwgY29tcCB9KSxcbiAgICAgICAgICAgIGVyciA9PiAoeyB2YWxpZDogZmFsc2UsIGNvbXAsIGVyciB9KVxuICAgICAgICAgIClcbiAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSh7IHZhbGlkLCBjb21wIH0pXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVycm9yc1Byb21pc2UgPSBwcm9wcy5ncmVlZHkgPT09IHRydWVcbiAgICAgICAgPyBQcm9taXNlXG4gICAgICAgICAgLmFsbChyZWdpc3RlcmVkQ29tcG9uZW50cy5tYXAodmFsaWRhdGVDb21wb25lbnQpKVxuICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuZmlsdGVyKHIgPT4gci52YWxpZCAhPT0gdHJ1ZSkpXG4gICAgICAgIDogcmVnaXN0ZXJlZENvbXBvbmVudHNcbiAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgKGFjYywgY29tcCkgPT4gYWNjLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVDb21wb25lbnQoY29tcCkudGhlbihyID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoci52YWxpZCA9PT0gZmFsc2UpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KHIpIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgICApXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IFsgZXJyb3IgXSlcblxuICAgICAgcmV0dXJuIGVycm9yc1Byb21pc2UudGhlbihlcnJvcnMgPT4ge1xuICAgICAgICBpZiAoZXJyb3JzID09PSB2b2lkIDAgfHwgZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGluZGV4ID09PSB2YWxpZGF0ZUluZGV4ICYmIGVtaXRFdmVudCh0cnVlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3Qgb3V0ZGF0ZWQgYWxyZWFkeVxuICAgICAgICBpZiAoaW5kZXggPT09IHZhbGlkYXRlSW5kZXgpIHtcbiAgICAgICAgICBjb25zdCB7IGNvbXAsIGVyciB9ID0gZXJyb3JzWyAwIF1cblxuICAgICAgICAgIGVyciAhPT0gdm9pZCAwICYmIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICAgIGVtaXRFdmVudChmYWxzZSwgY29tcClcblxuICAgICAgICAgIGlmIChmb2N1cyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gVHJ5IHRvIGZvY3VzIGZpcnN0IG1vdW50ZWQgYW5kIGFjdGl2ZSBjb21wb25lbnRcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUVycm9yID0gZXJyb3JzLmZpbmQoKHsgY29tcCB9KSA9PiAoXG4gICAgICAgICAgICAgIHR5cGVvZiBjb21wLmZvY3VzID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAgICYmIHZtSXNEZXN0cm95ZWQoY29tcC4kKSA9PT0gZmFsc2VcbiAgICAgICAgICAgICkpXG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVFcnJvciAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIGFjdGl2ZUVycm9yLmNvbXAuZm9jdXMoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldFZhbGlkYXRpb24gKCkge1xuICAgICAgdmFsaWRhdGVJbmRleCsrXG5cbiAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICAgIHR5cGVvZiBjb21wLnJlc2V0VmFsaWRhdGlvbiA9PT0gJ2Z1bmN0aW9uJyAmJiBjb21wLnJlc2V0VmFsaWRhdGlvbigpXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1Ym1pdCAoZXZ0KSB7XG4gICAgICBldnQgIT09IHZvaWQgMCAmJiBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGNvbnN0IGluZGV4ID0gdmFsaWRhdGVJbmRleCArIDFcblxuICAgICAgdmFsaWRhdGUoKS50aGVuKHZhbCA9PiB7XG4gICAgICAgIC8vIGlmIG5vdCBvdXRkYXRlZCAmJiB2YWxpZGF0aW9uIHN1Y2NlZWRlZFxuICAgICAgICBpZiAoaW5kZXggPT09IHZhbGlkYXRlSW5kZXggJiYgdmFsID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHByb3BzLm9uU3VibWl0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGVtaXQoJ3N1Ym1pdCcsIGV2dClcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoZXZ0ICE9PSB2b2lkIDAgJiYgZXZ0LnRhcmdldCAhPT0gdm9pZCAwICYmIHR5cGVvZiBldnQudGFyZ2V0LnN1Ym1pdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZXZ0LnRhcmdldC5zdWJtaXQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCAoZXZ0KSB7XG4gICAgICBldnQgIT09IHZvaWQgMCAmJiBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgIGVtaXQoJ3Jlc2V0JylcblxuICAgICAgbmV4dFRpY2soKCkgPT4geyAvLyBhbGxvdyB1c2VybGFuZCB0byByZXNldCB2YWx1ZXMgYmVmb3JlXG4gICAgICAgIHJlc2V0VmFsaWRhdGlvbigpXG4gICAgICAgIGlmIChwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgJiYgcHJvcHMubm9SZXNldEZvY3VzICE9PSB0cnVlKSB7XG4gICAgICAgICAgZm9jdXMoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvY3VzICgpIHtcbiAgICAgIGFkZEZvY3VzRm4oKCkgPT4ge1xuICAgICAgICBpZiAocm9vdFJlZi52YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c11bdGFiaW5kZXhdLCBbZGF0YS1hdXRvZm9jdXNdW3RhYmluZGV4XScpXG4gICAgICAgICAgfHwgcm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXSBbdGFiaW5kZXhdLCBbZGF0YS1hdXRvZm9jdXNdIFt0YWJpbmRleF0nKVxuICAgICAgICAgIHx8IHJvb3RSZWYudmFsdWUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10sIFtkYXRhLWF1dG9mb2N1c10nKVxuICAgICAgICAgIHx8IEFycmF5LnByb3RvdHlwZS5maW5kLmNhbGwocm9vdFJlZi52YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdJyksIGVsID0+IGVsLnRhYkluZGV4ID4gLTEpXG5cbiAgICAgICAgdGFyZ2V0ICE9PSBudWxsICYmIHRhcmdldCAhPT0gdm9pZCAwICYmIHRhcmdldC5mb2N1cyh7IHByZXZlbnRTY3JvbGw6IHRydWUgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJvdmlkZShmb3JtS2V5LCB7XG4gICAgICBiaW5kQ29tcG9uZW50ICh2bVByb3h5KSB7XG4gICAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzLnB1c2godm1Qcm94eSlcbiAgICAgIH0sXG5cbiAgICAgIHVuYmluZENvbXBvbmVudCAodm1Qcm94eSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IHJlZ2lzdGVyZWRDb21wb25lbnRzLmluZGV4T2Yodm1Qcm94eSlcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgbGV0IHNob3VsZEFjdGl2YXRlID0gZmFsc2VcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2hvdWxkQWN0aXZhdGUgPSB0cnVlXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNob3VsZEFjdGl2YXRlID09PSB0cnVlICYmIHByb3BzLmF1dG9mb2N1cyA9PT0gdHJ1ZSAmJiBmb2N1cygpXG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBwcm9wcy5hdXRvZm9jdXMgPT09IHRydWUgJiYgZm9jdXMoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7XG4gICAgICB2YWxpZGF0ZSxcbiAgICAgIHJlc2V0VmFsaWRhdGlvbixcbiAgICAgIHN1Ym1pdCxcbiAgICAgIHJlc2V0LFxuICAgICAgZm9jdXMsXG4gICAgICBnZXRWYWxpZGF0aW9uQ29tcG9uZW50czogKCkgPT4gcmVnaXN0ZXJlZENvbXBvbmVudHNcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ2Zvcm0nLCB7XG4gICAgICBjbGFzczogJ3EtZm9ybScsXG4gICAgICByZWY6IHJvb3RSZWYsXG4gICAgICBvblN1Ym1pdDogc3VibWl0LFxuICAgICAgb25SZXNldDogcmVzZXRcbiAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdHJhbnNpdGlvbi1zaG93PVwiZmFkZVwiXG4gICAgdHJhbnNpdGlvbi1oaWRlPVwiZmFkZVwiXG4gICAgcG9zaXRpb249XCJ0b3BcIlxuXG4gICAgdi1tb2RlbD1cInNob3dcIlxuICA+XG4gICAgPHEtY2FyZCBib3JkZXJlZCBjbGFzcz1cInEtbXQtbGdcIiBzdHlsZT1cIndpZHRoOiA3MDBweDsgbWF4LXdpZHRoOiA4MHZ3OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LDY2LDY2LDAuOTcpOyBcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5DcmVhdGUgQWNjb3VudDwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kXCI+XG5cbiAgICAgICAgICA8cS1mb3JtXG4gICAgICAgICAgICBAc3VibWl0PVwib25TdWJtaXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJxLWd1dHRlci1tZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcblxuICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgaGludD1cIjQtMTYgQWxwaGFudW1lcmljIENoYXJhY3RlcnNcIlxuXG4gICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgOnJ1bGVzPVwiW1xuICAgICAgICAgICAgICAgIHZhbCA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAodmFsLmxlbmd0aCA8IDQgfHwgdmFsLmxlbmd0aCA+IDE2KVxuICAgICAgICAgICAgICAgICAgICB7IHJldHVybiAnVXNlcm5hbWUgbXVzdCBiZSBiZXR3ZWVuIDQtMTYgY2hhcmFjdGVycyd9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmICghdXNlcm5hbWVWYWxpZGF0b3IudGVzdCh2YWwpKVxuICAgICAgICAgICAgICAgICAgICB7IHJldHVybiAnVXNlcm5hbWUgbXVzdCBvbmx5IGNvbnNpc3Qgb2YgQWxwaGFudW1lcmljIGNoYXJhY3RlcnMnIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9IF1cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcblxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaGludD1cIkJldHdlZW4gNiAtIDY0IGNoYXJhY3RlcnNcIlxuXG4gICAgICAgICAgICAgIGxhenktcnVsZXNcbiAgICAgICAgICAgICAgOnJ1bGVzPVwiWyB2YWwgPT4gcGFzc3dvcmRWYWxpZGF0b3IudGVzdCh2YWwpIHx8ICdQYXNzd29yZCBtdXN0IGJlIGJldHdlZW4gNiAtIDY0IGNoYXJhY3RlcnMnIF1cIlxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPHEtaW5wdXRcbiAgICAgICAgICAgICAgZGFya1xuICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcblxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRSZXBlYXRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkIChSZXBlYXQpXCJcblxuICAgICAgICAgICAgICBsYXp5LXJ1bGVzXG4gICAgICAgICAgICAgIDpydWxlcz1cIlsgdmFsID0+IHZhbCA9PT0gcGFzc3dvcmQgfHwgJ1Bhc3N3b3JkIGRvZXMgbm90IG1hdGNoJyBdXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxxLWJ0biBsYWJlbD1cIkNyZWF0ZSBBY2NvdW50XCIgdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiZnVsbC13aWR0aCBiZy1ibGFjay1hLTc1XCIgc2l6ZT1cImxnXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9xLWZvcm0+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgIDwvcS1jYXJkPlxuICA8L3EtZGlhbG9nPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmltcG9ydCB7ZGVmaW5lQ29tcG9uZW50fSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnUmVnaXN0cmF0aW9uTW9kYWwnXG59KTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge1VzZXJBcGksIFJlZ2lzdGVyUmVxdWVzdCwgUHJvYmxlbURldGFpbHN9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7UURpYWxvZywgdXNlUXVhc2FyfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSAnc3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyJztcblxuY29uc3Qgc2hvdyA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IGFwaUNvbmZpZyA9IEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKGZhbHNlKTtcbmNvbnN0IHVzZXJBcGkgPSBuZXcgVXNlckFwaShhcGlDb25maWcpO1xuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcblxuY29uc3Qgb25TdWJtaXQgPSAoZXZ0OiBTdWJtaXRFdmVudCkgPT4ge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICBjb25zdCBwYXlsb2FkOiBSZWdpc3RlclJlcXVlc3QgPSB7XG4gICAgdXNlckNyZWRlbnRpYWxzRHRvOiB7XG4gICAgICB1c2VyTmFtZTogdXNlcm5hbWUudmFsdWUsXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQudmFsdWVcbiAgICB9XG4gIH07XG5cbiAgdXNlckFwaS5yZWdpc3RlcihwYXlsb2FkKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICRxLm5vdGlmeSh7XG4gICAgICAgIG1lc3NhZ2U6ICdBY2NvdW50IENyZWF0ZWQnLFxuICAgICAgICBjb2xvcjogJ3Bvc2l0aXZlJyxcbiAgICAgICAgcG9zaXRpb246ICd0b3AnLFxuICAgICAgICB0aW1lb3V0OiA3MDAwXG4gICAgICB9KTtcbiAgICAgIHNob3cudmFsdWUgPSBmYWxzZTtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVzdWx0KSA9PiByZXN1bHQucmVzcG9uc2UuanNvbigpLnRoZW4oKHI6IFByb2JsZW1EZXRhaWxzKSA9PiB7XG4gICAgICAkcS5ub3RpZnkoe1xuICAgICAgICBtZXNzYWdlOiByLmRldGFpbCEsXG4gICAgICAgIGNvbG9yOiAnbmVnYXRpdmUnLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIGNhcHRpb246ICdFcnJvciB3aGVuIGNyZWF0aW5nIGFuIGFjY291bnQnLFxuICAgICAgICB0aW1lb3V0OiA3MDAwXG4gICAgICB9KTtcbiAgICB9KSk7XG59O1xuXG5jb25zdCB1c2VybmFtZVZhbGlkYXRvciA9IG5ldyBSZWdFeHAoJ15bQS1aYS16XFxcXGRcXFxcLV8uXXs0LDE2fSQnKTtcbmNvbnN0IHBhc3N3b3JkVmFsaWRhdG9yID0gbmV3IFJlZ0V4cCgnXi57Niw2NH0kJyk7XG5cbmNvbnN0IHVzZXJuYW1lID0gcmVmKCk7XG5jb25zdCBwYXNzd29yZCA9IHJlZigpO1xuY29uc3QgcGFzc3dvcmRSZXBlYXQgPSByZWYoKTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8cS1kaWFsb2dcbiAgICB2LW1vZGVsPVwic2hvd1wiXG5cbiAgICB0cmFuc2l0aW9uLXNob3c9XCJmYWRlXCJcbiAgICB0cmFuc2l0aW9uLWhpZGU9XCJmYWRlXCJcbiAgICBwb3NpdGlvbj1cInRvcFwiXG4gID5cbiAgICA8cS1jYXJkIGJvcmRlcmVkIGNsYXNzPVwicS1tdC1sZ1wiIHN0eWxlPVwid2lkdGg6IDcwMHB4OyBtYXgtd2lkdGg6IDgwdnc7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsNjYsNjYsMC45Nyk7IFwiPlxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPkxvZ2luPC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtcGEtbWRcIj5cblxuICAgICAgICAgIDxxLWZvcm1cbiAgICAgICAgICAgIEBzdWJtaXQ9XCJvblN1Ym1pdFwiXG4gICAgICAgICAgICBjbGFzcz1cInEtZ3V0dGVyLW1kXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8cS1pbnB1dFxuICAgICAgICAgICAgICBvdXRsaW5lZFxuICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cS1idG4gbGFiZWw9XCJMb2dpblwiIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIiBzaXplPVwibGdcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4yKVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmdWxsLWhlaWdodCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICBEb24ndCBoYXZlIGFuIGFjY291bnQ/IDxhIEBjbGljaz1cInNob3dSZWdpc3RlckRpYWxvZ1wiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGN1cnNvcjogcG9pbnRlcjtcIj5DcmVhdGUgQWNjb3VudDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcS1mb3JtPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQge2RlZmluZUNvbXBvbmVudH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0xvZ2luTW9kYWwnXG59KTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3VzZVF1YXNhcn0gZnJvbSAncXVhc2FyJztcbmltcG9ydCBSZWdpc3RyYXRpb25Nb2RhbCBmcm9tICdjb21wb25lbnRzL1JlZ2lzdHJhdGlvbk1vZGFsLnZ1ZSc7XG5pbXBvcnQge0xvZ2luUmVxdWVzdCwgTG9naW5SZXN1bHQsIFByb2JsZW1EZXRhaWxzLCBVc2VyQXBpfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQge3VzZUF1dGhTdG9yZX0gZnJvbSAnc3RvcmVzL2F1dGhEYXRhU3RvcmUnO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSAnc3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyJztcblxuY29uc3QgeyBzZXRBdXRoRnJvbUxvZ2luUmVzdWx0IH0gPSB1c2VBdXRoU3RvcmUoKTtcblxuY29uc3Qgc2hvdyA9IHJlZihmYWxzZSk7XG5cbmNvbnN0IGFwaUNvbmZpZyA9IEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKGZhbHNlKTtcbmNvbnN0IHVzZXJBcGkgPSBuZXcgVXNlckFwaShhcGlDb25maWcpO1xuXG5jb25zdCBvblN1Ym1pdCA9IChldnQ6IFN1Ym1pdEV2ZW50IHwgRXZlbnQpID0+IHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgcGF5bG9hZDogTG9naW5SZXF1ZXN0ID0ge1xuICAgIHVzZXJDcmVkZW50aWFsc0R0bzoge1xuICAgICAgdXNlck5hbWU6IHVzZXJuYW1lLnZhbHVlLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLnZhbHVlXG4gICAgfVxuICB9O1xuXG4gIHVzZXJBcGkubG9naW4ocGF5bG9hZClcbiAgICAudGhlbigocmVzdWx0OiBMb2dpblJlc3VsdCkgPT4ge1xuICAgICAgJHEubm90aWZ5KHtcbiAgICAgICAgbWVzc2FnZTogJ0xvZ2dlZCBpbicsXG4gICAgICAgIGNvbG9yOiAncG9zaXRpdmUnLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIHRpbWVvdXQ6IDcwMDBcbiAgICAgIH0pO1xuXG4gICAgICBzZXRBdXRoRnJvbUxvZ2luUmVzdWx0KHJlc3VsdCk7XG5cbiAgICAgIHNob3cudmFsdWUgPSBmYWxzZTtcbiAgICB9KVxuICAgIC5jYXRjaCgocmVzdWx0KSA9PiByZXN1bHQucmVzcG9uc2UuanNvbigpLnRoZW4oKHI6IFByb2JsZW1EZXRhaWxzKSA9PiB7XG4gICAgICAkcS5ub3RpZnkoe1xuICAgICAgICBtZXNzYWdlOiByLmRldGFpbCEsXG4gICAgICAgIGNvbG9yOiAnbmVnYXRpdmUnLFxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXG4gICAgICAgIGNhcHRpb246ICdFcnJvciB3aGVuIGxvZ2dpbmcgaW4nLFxuICAgICAgICB0aW1lb3V0OiA3MDAwXG4gICAgICB9KTtcbiAgICB9KSk7XG59O1xuXG5jb25zdCB1c2VybmFtZSA9IHJlZigpO1xuY29uc3QgcGFzc3dvcmQgPSByZWYoKTtcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcblxuY29uc3Qgc2hvd1JlZ2lzdGVyRGlhbG9nID0gKCkgPT4ge1xuICAkcS5kaWFsb2coe1xuICAgIGNvbXBvbmVudDogUmVnaXN0cmF0aW9uTW9kYWxcbiAgfSk7XG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInEtbXgtbWRcIj5cbiAgICA8ZGl2PlxuICAgICAgPHEtYnRuIHYtaWY9XCIhaXNMb2dnZWRJblJlYWN0aXZlXCIgQGNsaWNrPVwic2hvd0xvZ2luRGlhbG9nXCIgb3V0bGluZSB0ZXh0LWNvbG9yPVwid2hpdGVcIiBsYWJlbD1cIkxvZ2luXCIgc2l6ZT1cIm1kXCIgc3R5bGU9XCJ3aWR0aDogMTAwcHhcIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPHEtYnRuLWRyb3Bkb3duIHYtaWY9XCJpc0xvZ2dlZEluUmVhY3RpdmVcIiByb3VuZGVkIDpsYWJlbD1cImN1cnJlbnRVc2VyXCIgc3R5bGU9XCJ3aWR0aDogMTUwcHhcIj5cbiAgICAgIDxxLWxpc3Q+XG4gICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtY2xvc2UtcG9wdXA+XG4gICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgPHEtaXRlbS1sYWJlbD5BY2NvdW50PC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1teS1zbVwiIC8+XG5cbiAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1jbG9zZS1wb3B1cD5cbiAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICA8cS1pdGVtLWxhYmVsPkxvZ291dDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICA8L3EtbGlzdD5cbiAgICA8L3EtYnRuLWRyb3Bkb3duPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCIgc2V0dXA+XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tICdjb21wb25lbnRzL0xvZ2luTW9kYWwudnVlJ1xuaW1wb3J0IHt1c2VRdWFzYXJ9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQge3VzZUF1dGhTdG9yZX0gZnJvbSAnc3RvcmVzL2F1dGhEYXRhU3RvcmUnO1xuaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcblxuY29uc3QgYXV0aFN0b3JlID0gdXNlQXV0aFN0b3JlKCk7XG5cbmNvbnN0IGlzTG9nZ2VkSW5SZWFjdGl2ZSA9IGNvbXB1dGVkKCgpID0+IGF1dGhTdG9yZS5pc0xvZ2dlZEluKTtcbmNvbnN0IGN1cnJlbnRVc2VyID0gY29tcHV0ZWQoKCkgPT4gYXV0aFN0b3JlLmdldFVzZXJuYW1lKTtcblxuY29uc3QgJHEgPSB1c2VRdWFzYXIoKTtcbmNvbnN0IHNob3dMb2dpbkRpYWxvZyA9ICgpID0+IHtcbiAgJHEuZGlhbG9nKHtcbiAgICBjb21wb25lbnQ6IExvZ2luTW9kYWxcbiAgfSk7XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT5cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIGluamVjdCwgb25CZWZvcmVVbm1vdW50LCBvbk1vdW50ZWQsIHdpdGhEaXJlY3RpdmVzLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRSWNvbiBmcm9tICcuLi9pY29uL1FJY29uLmpzJ1xuXG5pbXBvcnQgUmlwcGxlIGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvUmlwcGxlLmpzJ1xuXG5pbXBvcnQgeyBoTWVyZ2VTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUsIHNob3VsZElnbm9yZUtleSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuaW1wb3J0IHsgdGFic0tleSwgZW1wdHlSZW5kZXJGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgdWlkIGZyb20gJy4uLy4uL3V0aWxzL3VpZC5qcydcbmltcG9ydCB7IGlzRGVlcEVxdWFsIH0gZnJvbSAnLi4vLi4vdXRpbHMvaXMuanMnXG5cbmxldCBpZCA9IDBcblxuZXhwb3J0IGNvbnN0IHVzZVRhYkVtaXRzID0gWyAnY2xpY2snLCAna2V5ZG93bicgXVxuXG5leHBvcnQgY29uc3QgdXNlVGFiUHJvcHMgPSB7XG4gIGljb246IFN0cmluZyxcbiAgbGFiZWw6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICBhbGVydDogWyBCb29sZWFuLCBTdHJpbmcgXSxcbiAgYWxlcnRJY29uOiBTdHJpbmcsXG5cbiAgbmFtZToge1xuICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICBkZWZhdWx0OiAoKSA9PiBgdF8keyBpZCsrIH1gXG4gIH0sXG5cbiAgbm9DYXBzOiBCb29sZWFuLFxuXG4gIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG4gIGRpc2FibGU6IEJvb2xlYW4sXG5cbiAgY29udGVudENsYXNzOiBTdHJpbmcsXG5cbiAgcmlwcGxlOiB7XG4gICAgdHlwZTogWyBCb29sZWFuLCBPYmplY3QgXSxcbiAgICBkZWZhdWx0OiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBzbG90cywgZW1pdCwgcm91dGVEYXRhKSB7XG4gIGNvbnN0ICR0YWJzID0gaW5qZWN0KHRhYnNLZXksIGVtcHR5UmVuZGVyRm4pXG4gIGlmICgkdGFicyA9PT0gZW1wdHlSZW5kZXJGbikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1FUYWIvUVJvdXRlVGFiIGNvbXBvbmVudCBuZWVkcyB0byBiZSBjaGlsZCBvZiBRVGFicycpXG4gICAgcmV0dXJuIGVtcHR5UmVuZGVyRm5cbiAgfVxuXG4gIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgY29uc3QgYmx1clRhcmdldFJlZiA9IHJlZihudWxsKVxuICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG4gIGNvbnN0IHRhYkluZGljYXRvclJlZiA9IHJlZihudWxsKVxuXG4gIGNvbnN0IHJpcHBsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICBwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IHByb3BzLnJpcHBsZSA9PT0gZmFsc2VcbiAgICAgID8gZmFsc2VcbiAgICAgIDogT2JqZWN0LmFzc2lnbihcbiAgICAgICAgeyBrZXlDb2RlczogWyAxMywgMzIgXSwgZWFybHk6IHRydWUgfSxcbiAgICAgICAgcHJvcHMucmlwcGxlID09PSB0cnVlID8ge30gOiBwcm9wcy5yaXBwbGVcbiAgICAgIClcbiAgKSlcblxuICBjb25zdCBpc0FjdGl2ZSA9IGNvbXB1dGVkKCgpID0+ICR0YWJzLmN1cnJlbnRNb2RlbC52YWx1ZSA9PT0gcHJvcHMubmFtZSlcblxuICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS10YWIgcmVsYXRpdmUtcG9zaXRpb24gc2VsZi1zdHJldGNoIGZsZXggZmxleC1jZW50ZXIgdGV4dC1jZW50ZXInXG4gICAgKyAoXG4gICAgICBpc0FjdGl2ZS52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IChcbiAgICAgICAgICAgICcgcS10YWItLWFjdGl2ZSdcbiAgICAgICAgICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNsYXNzID8gJyAnICsgJHRhYnMudGFiUHJvcHMudmFsdWUuYWN0aXZlQ2xhc3MgOiAnJylcbiAgICAgICAgICAgICsgKCR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNvbG9yID8gYCB0ZXh0LSR7ICR0YWJzLnRhYlByb3BzLnZhbHVlLmFjdGl2ZUNvbG9yIH1gIDogJycpXG4gICAgICAgICAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVCZ0NvbG9yID8gYCBiZy0keyAkdGFicy50YWJQcm9wcy52YWx1ZS5hY3RpdmVCZ0NvbG9yIH1gIDogJycpXG4gICAgICAgICAgKVxuICAgICAgICA6ICcgcS10YWItLWluYWN0aXZlJ1xuICAgIClcbiAgICArIChwcm9wcy5pY29uICYmIHByb3BzLmxhYmVsICYmICR0YWJzLnRhYlByb3BzLnZhbHVlLmlubGluZUxhYmVsID09PSBmYWxzZSA/ICcgcS10YWItLWZ1bGwnIDogJycpXG4gICAgKyAocHJvcHMubm9DYXBzID09PSB0cnVlIHx8ICR0YWJzLnRhYlByb3BzLnZhbHVlLm5vQ2FwcyA9PT0gdHJ1ZSA/ICcgcS10YWItLW5vLWNhcHMnIDogJycpXG4gICAgKyAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSA/ICcgZGlzYWJsZWQnIDogJyBxLWZvY3VzYWJsZSBxLWhvdmVyYWJsZSBjdXJzb3ItcG9pbnRlcicpXG4gICAgKyAocm91dGVEYXRhICE9PSB2b2lkIDAgPyByb3V0ZURhdGEubGlua0NsYXNzLnZhbHVlIDogJycpXG4gIClcblxuICBjb25zdCBpbm5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAncS10YWJfX2NvbnRlbnQgc2VsZi1zdHJldGNoIGZsZXgtY2VudGVyIHJlbGF0aXZlLXBvc2l0aW9uIHEtYW5jaG9yLS1za2lwIG5vbi1zZWxlY3RhYmxlICdcbiAgICArICgkdGFicy50YWJQcm9wcy52YWx1ZS5pbmxpbmVMYWJlbCA9PT0gdHJ1ZSA/ICdyb3cgbm8td3JhcCBxLXRhYl9fY29udGVudC0taW5saW5lJyA6ICdjb2x1bW4nKVxuICAgICsgKHByb3BzLmNvbnRlbnRDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5jb250ZW50Q2xhc3MgfWAgOiAnJylcbiAgKVxuXG4gIGNvbnN0IHRhYkluZGV4ID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgIChcbiAgICAgIHByb3BzLmRpc2FibGUgPT09IHRydWVcbiAgICAgIHx8ICR0YWJzLmhhc0ZvY3VzLnZhbHVlID09PSB0cnVlXG4gICAgICB8fCAoaXNBY3RpdmUudmFsdWUgPT09IGZhbHNlICYmICR0YWJzLmhhc0FjdGl2ZVRhYi52YWx1ZSA9PT0gdHJ1ZSlcbiAgICApXG4gICAgICA/IC0xXG4gICAgICA6IHByb3BzLnRhYmluZGV4IHx8IDBcbiAgKSlcblxuICBmdW5jdGlvbiBvbkNsaWNrIChlLCBrZXlib2FyZCkge1xuICAgIGlmIChrZXlib2FyZCAhPT0gdHJ1ZSAmJiBibHVyVGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICBibHVyVGFyZ2V0UmVmLnZhbHVlLmZvY3VzKClcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gd2Ugc2hvdWxkIGhpbmRlciBuYXRpdmUgbmF2aWdhdGlvbiB0aG91Z2hcbiAgICAgIGlmIChyb3V0ZURhdGEgIT09IHZvaWQgMCAmJiByb3V0ZURhdGEuaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gZG8gd2UgaGF2ZSBhIFFUYWI/XG4gICAgaWYgKHJvdXRlRGF0YSA9PT0gdm9pZCAwKSB7XG4gICAgICAkdGFicy51cGRhdGVNb2RlbCh7IG5hbWU6IHByb3BzLm5hbWUgfSlcbiAgICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZURhdGEuaGFzUm91dGVyTGluay52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZ28gPSAob3B0cyA9IHt9KSA9PiB7XG4gICAgICAgIC8vIGlmIHJlcXVpcmluZyB0byBnbyB0byBhbm90aGVyIHJvdXRlLCB0aGVuIHdlXG4gICAgICAgIC8vIGxldCB0aGUgUVRhYnMgcm91dGUgd2F0Y2hlciBkbyBpdHMgam9iLFxuICAgICAgICAvLyBvdGhlcndpc2UgZGlyZWN0bHkgc2VsZWN0IHRoaXNcbiAgICAgICAgbGV0IGhhcmRFcnJvclxuICAgICAgICBjb25zdCByZXFJZCA9IG9wdHMudG8gPT09IHZvaWQgMCB8fCBpc0RlZXBFcXVhbChvcHRzLnRvLCBwcm9wcy50bykgPT09IHRydWVcbiAgICAgICAgICA/ICgkdGFicy5hdm9pZFJvdXRlV2F0Y2hlciA9IHVpZCgpKVxuICAgICAgICAgIDogbnVsbFxuXG4gICAgICAgIHJldHVybiByb3V0ZURhdGEubmF2aWdhdGVUb1JvdXRlckxpbmsoZSwgeyAuLi5vcHRzLCByZXR1cm5Sb3V0ZXJFcnJvcjogdHJ1ZSB9KVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4geyBoYXJkRXJyb3IgPSBlcnIgfSlcbiAgICAgICAgICAudGhlbihzb2Z0RXJyb3IgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcUlkID09PSAkdGFicy5hdm9pZFJvdXRlV2F0Y2hlcikge1xuICAgICAgICAgICAgICAkdGFicy5hdm9pZFJvdXRlV2F0Y2hlciA9IGZhbHNlXG5cbiAgICAgICAgICAgICAgLy8gaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgaGFyZCBlcnJvcnMgb3IgYW55IHNvZnQgZXJyb3JzLCBleGNlcHQgZm9yXG4gICAgICAgICAgICAgIC8vIHdoZW4gbmF2aWdhdGluZyB0byB0aGUgc2FtZSByb3V0ZSAob24gYWxsIG90aGVyIHNvZnQgZXJyb3JzLFxuICAgICAgICAgICAgICAvLyBsaWtlIHdoZW4gbmF2aWdhdGlvbiB3YXMgYWJvcnRlZCBpbiBhIG5hdiBndWFyZCwgd2UgZG9uJ3QgYWN0aXZhdGUgdGhpcyB0YWIpXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBoYXJkRXJyb3IgPT09IHZvaWQgMCAmJiAoXG4gICAgICAgICAgICAgICAgICBzb2Z0RXJyb3IgPT09IHZvaWQgMFxuICAgICAgICAgICAgICAgICAgfHwgc29mdEVycm9yLm1lc3NhZ2Uuc3RhcnRzV2l0aCgnQXZvaWRlZCByZWR1bmRhbnQgbmF2aWdhdGlvbicpID09PSB0cnVlXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAkdGFicy51cGRhdGVNb2RlbCh7IG5hbWU6IHByb3BzLm5hbWUgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0cy5yZXR1cm5Sb3V0ZXJFcnJvciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gaGFyZEVycm9yICE9PSB2b2lkIDAgPyBQcm9taXNlLnJlamVjdChoYXJkRXJyb3IpIDogc29mdEVycm9yXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgZW1pdCgnY2xpY2snLCBlLCBnbylcbiAgICAgIGUuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSAmJiBnbygpXG5cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGVtaXQoJ2NsaWNrJywgZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uS2V5ZG93biAoZSkge1xuICAgIGlmIChpc0tleUNvZGUoZSwgWyAxMywgMzIgXSkpIHtcbiAgICAgIG9uQ2xpY2soZSwgdHJ1ZSlcbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBzaG91bGRJZ25vcmVLZXkoZSkgIT09IHRydWVcbiAgICAgICYmIGUua2V5Q29kZSA+PSAzNVxuICAgICAgJiYgZS5rZXlDb2RlIDw9IDQwXG4gICAgICAmJiBlLmFsdEtleSAhPT0gdHJ1ZVxuICAgICAgJiYgZS5tZXRhS2V5ICE9PSB0cnVlXG4gICAgKSB7XG4gICAgICAkdGFicy5vbktiZE5hdmlnYXRlKGUua2V5Q29kZSwgcHJveHkuJGVsKSA9PT0gdHJ1ZSAmJiBzdG9wQW5kUHJldmVudChlKVxuICAgIH1cblxuICAgIGVtaXQoJ2tleWRvd24nLCBlKVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q29udGVudCAoKSB7XG4gICAgY29uc3RcbiAgICAgIG5hcnJvdyA9ICR0YWJzLnRhYlByb3BzLnZhbHVlLm5hcnJvd0luZGljYXRvcixcbiAgICAgIGNvbnRlbnQgPSBbXSxcbiAgICAgIGluZGljYXRvciA9IGgoJ2RpdicsIHtcbiAgICAgICAgcmVmOiB0YWJJbmRpY2F0b3JSZWYsXG4gICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgJ3EtdGFiX19pbmRpY2F0b3InLFxuICAgICAgICAgICR0YWJzLnRhYlByb3BzLnZhbHVlLmluZGljYXRvckNsYXNzXG4gICAgICAgIF1cbiAgICAgIH0pXG5cbiAgICBwcm9wcy5pY29uICE9PSB2b2lkIDAgJiYgY29udGVudC5wdXNoKFxuICAgICAgaChRSWNvbiwge1xuICAgICAgICBjbGFzczogJ3EtdGFiX19pY29uJyxcbiAgICAgICAgbmFtZTogcHJvcHMuaWNvblxuICAgICAgfSlcbiAgICApXG5cbiAgICBwcm9wcy5sYWJlbCAhPT0gdm9pZCAwICYmIGNvbnRlbnQucHVzaChcbiAgICAgIGgoJ2RpdicsIHsgY2xhc3M6ICdxLXRhYl9fbGFiZWwnIH0sIHByb3BzLmxhYmVsKVxuICAgIClcblxuICAgIHByb3BzLmFsZXJ0ICE9PSBmYWxzZSAmJiBjb250ZW50LnB1c2goXG4gICAgICBwcm9wcy5hbGVydEljb24gIT09IHZvaWQgMFxuICAgICAgICA/IGgoUUljb24sIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFiX19hbGVydC1pY29uJyxcbiAgICAgICAgICBjb2xvcjogcHJvcHMuYWxlcnQgIT09IHRydWVcbiAgICAgICAgICAgID8gcHJvcHMuYWxlcnRcbiAgICAgICAgICAgIDogdm9pZCAwLFxuICAgICAgICAgIG5hbWU6IHByb3BzLmFsZXJ0SWNvblxuICAgICAgICB9KVxuICAgICAgICA6IGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtdGFiX19hbGVydCdcbiAgICAgICAgICAgICsgKHByb3BzLmFsZXJ0ICE9PSB0cnVlID8gYCB0ZXh0LSR7IHByb3BzLmFsZXJ0IH1gIDogJycpXG4gICAgICAgIH0pXG4gICAgKVxuXG4gICAgbmFycm93ID09PSB0cnVlICYmIGNvbnRlbnQucHVzaChpbmRpY2F0b3IpXG5cbiAgICBjb25zdCBub2RlID0gW1xuICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJywgdGFiaW5kZXg6IC0xLCByZWY6IGJsdXJUYXJnZXRSZWYgfSksXG4gICAgICBoKCdkaXYnLCB7IGNsYXNzOiBpbm5lckNsYXNzLnZhbHVlIH0sIGhNZXJnZVNsb3Qoc2xvdHMuZGVmYXVsdCwgY29udGVudCkpXG4gICAgXVxuXG4gICAgbmFycm93ID09PSBmYWxzZSAmJiBub2RlLnB1c2goaW5kaWNhdG9yKVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGNvbnN0IHRhYkRhdGEgPSB7XG4gICAgbmFtZTogY29tcHV0ZWQoKCkgPT4gcHJvcHMubmFtZSksXG4gICAgcm9vdFJlZixcbiAgICB0YWJJbmRpY2F0b3JSZWYsXG4gICAgcm91dGVEYXRhXG4gIH1cblxuICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICR0YWJzLnVucmVnaXN0ZXJUYWIodGFiRGF0YSlcbiAgfSlcblxuICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICR0YWJzLnJlZ2lzdGVyVGFiKHRhYkRhdGEpXG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFiICh0YWcsIGN1c3RvbURhdGEpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgcmVmOiByb290UmVmLFxuICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICB0YWJpbmRleDogdGFiSW5kZXgudmFsdWUsXG4gICAgICByb2xlOiAndGFiJyxcbiAgICAgICdhcmlhLXNlbGVjdGVkJzogaXNBY3RpdmUudmFsdWUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJ3RydWUnIDogdm9pZCAwLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uS2V5ZG93bixcbiAgICAgIC4uLmN1c3RvbURhdGFcbiAgICB9XG5cbiAgICByZXR1cm4gd2l0aERpcmVjdGl2ZXMoXG4gICAgICBoKHRhZywgZGF0YSwgZ2V0Q29udGVudCgpKSxcbiAgICAgIFsgWyBSaXBwbGUsIHJpcHBsZS52YWx1ZSBdIF1cbiAgICApXG4gIH1cblxuICByZXR1cm4geyByZW5kZXJUYWIsICR0YWJzIH1cbn1cbiIsImltcG9ydCB1c2VUYWIsIHsgdXNlVGFiUHJvcHMsIHVzZVRhYkVtaXRzIH0gZnJvbSAnLi91c2UtdGFiLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWInLFxuXG4gIHByb3BzOiB1c2VUYWJQcm9wcyxcblxuICBlbWl0czogdXNlVGFiRW1pdHMsXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHJlbmRlclRhYiB9ID0gdXNlVGFiKHByb3BzLCBzbG90cywgZW1pdClcbiAgICByZXR1cm4gKCkgPT4gcmVuZGVyVGFiKCdkaXYnKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uQmVmb3JlVW5tb3VudCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSwgcHJvdmlkZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFJY29uIGZyb20gJy4uL2ljb24vUUljb24uanMnXG5pbXBvcnQgUVJlc2l6ZU9ic2VydmVyIGZyb20gJy4uL3Jlc2l6ZS1vYnNlcnZlci9RUmVzaXplT2JzZXJ2ZXIuanMnXG5cbmltcG9ydCB1c2VUaWNrIGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRpY2suanMnXG5pbXBvcnQgdXNlVGltZW91dCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10aW1lb3V0LmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5pbXBvcnQgeyB0YWJzS2V5IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9zeW1ib2xzLmpzJ1xuaW1wb3J0IHsgcnRsSGFzU2Nyb2xsQnVnIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9ydGwuanMnXG5cbmZ1bmN0aW9uIGdldEluZGljYXRvckNsYXNzIChjb2xvciwgdG9wLCB2ZXJ0aWNhbCkge1xuICBjb25zdCBwb3MgPSB2ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgID8gWyAnbGVmdCcsICdyaWdodCcgXVxuICAgIDogWyAndG9wJywgJ2JvdHRvbScgXVxuXG4gIHJldHVybiBgYWJzb2x1dGUtJHsgdG9wID09PSB0cnVlID8gcG9zWyAwIF0gOiBwb3NbIDEgXSB9JHsgY29sb3IgPyBgIHRleHQtJHsgY29sb3IgfWAgOiAnJyB9YFxufVxuXG5jb25zdCBhbGlnblZhbHVlcyA9IFsgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0JywgJ2p1c3RpZnknIF1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FUYWJzJyxcblxuICBwcm9wczoge1xuICAgIG1vZGVsVmFsdWU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcblxuICAgIGFsaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnY2VudGVyJyxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiBhbGlnblZhbHVlcy5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgYnJlYWtwb2ludDoge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogNjAwXG4gICAgfSxcblxuICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuICAgIHNocmluazogQm9vbGVhbixcbiAgICBzdHJldGNoOiBCb29sZWFuLFxuXG4gICAgYWN0aXZlQ2xhc3M6IFN0cmluZyxcbiAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIGFjdGl2ZUJnQ29sb3I6IFN0cmluZyxcbiAgICBpbmRpY2F0b3JDb2xvcjogU3RyaW5nLFxuICAgIGxlZnRJY29uOiBTdHJpbmcsXG4gICAgcmlnaHRJY29uOiBTdHJpbmcsXG5cbiAgICBvdXRzaWRlQXJyb3dzOiBCb29sZWFuLFxuICAgIG1vYmlsZUFycm93czogQm9vbGVhbixcblxuICAgIHN3aXRjaEluZGljYXRvcjogQm9vbGVhbixcblxuICAgIG5hcnJvd0luZGljYXRvcjogQm9vbGVhbixcbiAgICBpbmxpbmVMYWJlbDogQm9vbGVhbixcbiAgICBub0NhcHM6IEJvb2xlYW4sXG5cbiAgICBkZW5zZTogQm9vbGVhbixcblxuICAgIGNvbnRlbnRDbGFzczogU3RyaW5nLFxuXG4gICAgJ29uVXBkYXRlOm1vZGVsVmFsdWUnOiBbIEZ1bmN0aW9uLCBBcnJheSBdXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCB7IHByb3h5IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljazogcmVnaXN0ZXJTY3JvbGxUaWNrIH0gPSB1c2VUaWNrKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljazogcmVnaXN0ZXJVcGRhdGVBcnJvd3NUaWNrIH0gPSB1c2VUaWNrKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGljazogcmVnaXN0ZXJBbmltYXRlVGljayB9ID0gdXNlVGljaygpXG5cbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dDogcmVnaXN0ZXJGb2N1c1RpbWVvdXQsIHJlbW92ZVRpbWVvdXQ6IHJlbW92ZUZvY3VzVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG4gICAgY29uc3QgeyByZWdpc3RlclRpbWVvdXQ6IHJlZ2lzdGVyU2Nyb2xsVG9UYWJUaW1lb3V0LCByZW1vdmVUaW1lb3V0OiByZW1vdmVTY3JvbGxUb1RhYlRpbWVvdXQgfSA9IHVzZVRpbWVvdXQoKVxuXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGNvbnRlbnRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGN1cnJlbnRNb2RlbCA9IHJlZihwcm9wcy5tb2RlbFZhbHVlKVxuICAgIGNvbnN0IHNjcm9sbGFibGUgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgbGVmdEFycm93ID0gcmVmKHRydWUpXG4gICAgY29uc3QgcmlnaHRBcnJvdyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBqdXN0aWZ5ID0gcmVmKGZhbHNlKVxuXG4gICAgY29uc3QgdGFiRGF0YUxpc3QgPSBbXVxuICAgIGNvbnN0IHRhYkRhdGFMaXN0TGVuID0gcmVmKDApXG4gICAgY29uc3QgaGFzRm9jdXMgPSByZWYoZmFsc2UpXG5cbiAgICBsZXQgYW5pbWF0ZVRpbWVyLCBzY3JvbGxUaW1lciwgdW53YXRjaFJvdXRlXG5cbiAgICBjb25zdCB0YWJQcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICBhY3RpdmVDbGFzczogcHJvcHMuYWN0aXZlQ2xhc3MsXG4gICAgICBhY3RpdmVDb2xvcjogcHJvcHMuYWN0aXZlQ29sb3IsXG4gICAgICBhY3RpdmVCZ0NvbG9yOiBwcm9wcy5hY3RpdmVCZ0NvbG9yLFxuICAgICAgaW5kaWNhdG9yQ2xhc3M6IGdldEluZGljYXRvckNsYXNzKFxuICAgICAgICBwcm9wcy5pbmRpY2F0b3JDb2xvcixcbiAgICAgICAgcHJvcHMuc3dpdGNoSW5kaWNhdG9yLFxuICAgICAgICBwcm9wcy52ZXJ0aWNhbFxuICAgICAgKSxcbiAgICAgIG5hcnJvd0luZGljYXRvcjogcHJvcHMubmFycm93SW5kaWNhdG9yLFxuICAgICAgaW5saW5lTGFiZWw6IHByb3BzLmlubGluZUxhYmVsLFxuICAgICAgbm9DYXBzOiBwcm9wcy5ub0NhcHNcbiAgICB9KSlcblxuICAgIGNvbnN0IGhhc0FjdGl2ZVRhYiA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGxlbiA9IHRhYkRhdGFMaXN0TGVuLnZhbHVlXG4gICAgICBjb25zdCB2YWwgPSBjdXJyZW50TW9kZWwudmFsdWVcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAodGFiRGF0YUxpc3RbIGkgXS5uYW1lLnZhbHVlID09PSB2YWwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0pXG5cbiAgICBjb25zdCBhbGlnbkNsYXNzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgYWxpZ24gPSBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICAgID8gJ2xlZnQnXG4gICAgICAgIDogKGp1c3RpZnkudmFsdWUgPT09IHRydWUgPyAnanVzdGlmeScgOiBwcm9wcy5hbGlnbilcblxuICAgICAgcmV0dXJuIGBxLXRhYnNfX2NvbnRlbnQtLWFsaWduLSR7IGFsaWduIH1gXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGFicyByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIGAgcS10YWJzLS0keyBzY3JvbGxhYmxlLnZhbHVlID09PSB0cnVlID8gJycgOiAnbm90LScgfXNjcm9sbGFibGVgXG4gICAgICArIGAgcS10YWJzLS0keyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcgfWBcbiAgICAgICsgYCBxLXRhYnNfX2Fycm93cy0tJHsgcHJvcHMub3V0c2lkZUFycm93cyA9PT0gdHJ1ZSA/ICdvdXRzaWRlJyA6ICdpbnNpZGUnIH1gXG4gICAgICArIGAgcS10YWJzLS1tb2JpbGUtd2l0aCR7IHByb3BzLm1vYmlsZUFycm93cyA9PT0gdHJ1ZSA/ICcnIDogJ291dCcgfS1hcnJvd3NgXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS10YWJzLS1kZW5zZScgOiAnJylcbiAgICAgICsgKHByb3BzLnNocmluayA9PT0gdHJ1ZSA/ICcgY29sLXNocmluaycgOiAnJylcbiAgICAgICsgKHByb3BzLnN0cmV0Y2ggPT09IHRydWUgPyAnIHNlbGYtc3RyZXRjaCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBpbm5lckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXRhYnNfX2NvbnRlbnQgc2Nyb2xsLS1tb2JpbGUgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyIHNlbGYtc3RyZXRjaCBoaWRlLXNjcm9sbGJhciByZWxhdGl2ZS1wb3NpdGlvbiAnXG4gICAgICArIGFsaWduQ2xhc3MudmFsdWVcbiAgICAgICsgKHByb3BzLmNvbnRlbnRDbGFzcyAhPT0gdm9pZCAwID8gYCAkeyBwcm9wcy5jb250ZW50Q2xhc3MgfWAgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBkb21Qcm9wcyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgID8geyBjb250YWluZXI6ICdoZWlnaHQnLCBjb250ZW50OiAnb2Zmc2V0SGVpZ2h0Jywgc2Nyb2xsOiAnc2Nyb2xsSGVpZ2h0JyB9XG4gICAgICAgIDogeyBjb250YWluZXI6ICd3aWR0aCcsIGNvbnRlbnQ6ICdvZmZzZXRXaWR0aCcsIHNjcm9sbDogJ3Njcm9sbFdpZHRoJyB9XG4gICAgKSlcblxuICAgIGNvbnN0IGlzUlRMID0gY29tcHV0ZWQoKCkgPT4gcHJvcHMudmVydGljYWwgIT09IHRydWUgJiYgJHEubGFuZy5ydGwgPT09IHRydWUpXG4gICAgY29uc3QgcnRsUG9zQ29ycmVjdGlvbiA9IGNvbXB1dGVkKCgpID0+IHJ0bEhhc1Njcm9sbEJ1ZyA9PT0gZmFsc2UgJiYgaXNSVEwudmFsdWUgPT09IHRydWUpXG5cbiAgICB3YXRjaChpc1JUTCwgdXBkYXRlQXJyb3dzKVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgbmFtZSA9PiB7XG4gICAgICB1cGRhdGVNb2RlbCh7IG5hbWUsIHNldEN1cnJlbnQ6IHRydWUsIHNraXBFbWl0OiB0cnVlIH0pXG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLm91dHNpZGVBcnJvd3MsIHJlY2FsY3VsYXRlU2Nyb2xsKVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlTW9kZWwgKHsgbmFtZSwgc2V0Q3VycmVudCwgc2tpcEVtaXQgfSkge1xuICAgICAgaWYgKGN1cnJlbnRNb2RlbC52YWx1ZSAhPT0gbmFtZSkge1xuICAgICAgICBpZiAoc2tpcEVtaXQgIT09IHRydWUgJiYgcHJvcHNbICdvblVwZGF0ZTptb2RlbFZhbHVlJyBdICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG5hbWUpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgc2V0Q3VycmVudCA9PT0gdHJ1ZVxuICAgICAgICAgIHx8IHByb3BzWyAnb25VcGRhdGU6bW9kZWxWYWx1ZScgXSA9PT0gdm9pZCAwXG4gICAgICAgICkge1xuICAgICAgICAgIGFuaW1hdGUoY3VycmVudE1vZGVsLnZhbHVlLCBuYW1lKVxuICAgICAgICAgIGN1cnJlbnRNb2RlbC52YWx1ZSA9IG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY2FsY3VsYXRlU2Nyb2xsICgpIHtcbiAgICAgIHJlZ2lzdGVyU2Nyb2xsVGljaygoKSA9PiB7XG4gICAgICAgIHVwZGF0ZUNvbnRhaW5lcih7XG4gICAgICAgICAgd2lkdGg6IHJvb3RSZWYudmFsdWUub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiByb290UmVmLnZhbHVlLm9mZnNldEhlaWdodFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250YWluZXIgKGRvbVNpemUpIHtcbiAgICAgIC8vIGl0IGNhbiBiZSBjYWxsZWQgZmFzdGVyIHRoYW4gY29tcG9uZW50IGJlaW5nIGluaXRpYWxpemVkXG4gICAgICAvLyBzbyB3ZSBuZWVkIHRvIHByb3RlY3QgYWdhaW5zdCB0aGF0IGNhc2VcbiAgICAgIC8vIChvbmUgZXhhbXBsZSBvZiBzdWNoIGNhc2UgaXMgdGhlIGRvY3MgcmVsZWFzZSBub3RlcyBwYWdlKVxuICAgICAgaWYgKGRvbVByb3BzLnZhbHVlID09PSB2b2lkIDAgfHwgY29udGVudFJlZi52YWx1ZSA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBjb25zdFxuICAgICAgICBzaXplID0gZG9tU2l6ZVsgZG9tUHJvcHMudmFsdWUuY29udGFpbmVyIF0sXG4gICAgICAgIHNjcm9sbFNpemUgPSBNYXRoLm1pbihcbiAgICAgICAgICBjb250ZW50UmVmLnZhbHVlWyBkb21Qcm9wcy52YWx1ZS5zY3JvbGwgXSxcbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucmVkdWNlLmNhbGwoXG4gICAgICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICAgICAgKGFjYywgZWwpID0+IGFjYyArIChlbFsgZG9tUHJvcHMudmFsdWUuY29udGVudCBdIHx8IDApLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgc2Nyb2xsID0gc2l6ZSA+IDAgJiYgc2Nyb2xsU2l6ZSA+IHNpemUgLy8gd2hlbiB0aGVyZSBpcyBubyB0YWIsIGluIENocm9tZSwgc2l6ZSA9PT0gMCBhbmQgc2Nyb2xsU2l6ZSA9PT0gMVxuXG4gICAgICBzY3JvbGxhYmxlLnZhbHVlID0gc2Nyb2xsXG5cbiAgICAgIC8vIEFycm93cyBuZWVkIHRvIGJlIHVwZGF0ZWQgZXZlbiBpZiB0aGUgc2Nyb2xsIHN0YXR1cyB3YXMgYWxyZWFkeSB0cnVlXG4gICAgICBzY3JvbGwgPT09IHRydWUgJiYgcmVnaXN0ZXJVcGRhdGVBcnJvd3NUaWNrKHVwZGF0ZUFycm93cylcblxuICAgICAganVzdGlmeS52YWx1ZSA9IHNpemUgPCBwYXJzZUludChwcm9wcy5icmVha3BvaW50LCAxMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlIChvbGROYW1lLCBuZXdOYW1lKSB7XG4gICAgICBjb25zdFxuICAgICAgICBvbGRUYWIgPSBvbGROYW1lICE9PSB2b2lkIDAgJiYgb2xkTmFtZSAhPT0gbnVsbCAmJiBvbGROYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG9sZE5hbWUpXG4gICAgICAgICAgOiBudWxsLFxuICAgICAgICBuZXdUYWIgPSBuZXdOYW1lICE9PSB2b2lkIDAgJiYgbmV3TmFtZSAhPT0gbnVsbCAmJiBuZXdOYW1lICE9PSAnJ1xuICAgICAgICAgID8gdGFiRGF0YUxpc3QuZmluZCh0YWIgPT4gdGFiLm5hbWUudmFsdWUgPT09IG5ld05hbWUpXG4gICAgICAgICAgOiBudWxsXG5cbiAgICAgIGlmIChvbGRUYWIgJiYgbmV3VGFiKSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgICAgb2xkRWwgPSBvbGRUYWIudGFiSW5kaWNhdG9yUmVmLnZhbHVlLFxuICAgICAgICAgIG5ld0VsID0gbmV3VGFiLnRhYkluZGljYXRvclJlZi52YWx1ZVxuXG4gICAgICAgIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG5cbiAgICAgICAgb2xkRWwuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICBvbGRFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xuICAgICAgICBuZXdFbC5zdHlsZS50cmFuc2Zvcm0gPSAnbm9uZSdcblxuICAgICAgICBjb25zdFxuICAgICAgICAgIG9sZFBvcyA9IG9sZEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgIG5ld1BvcyA9IG5ld0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNmb3JtID0gcHJvcHMudmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICA/IGB0cmFuc2xhdGUzZCgwLCR7IG9sZFBvcy50b3AgLSBuZXdQb3MudG9wIH1weCwwKSBzY2FsZTNkKDEsJHsgbmV3UG9zLmhlaWdodCA/IG9sZFBvcy5oZWlnaHQgLyBuZXdQb3MuaGVpZ2h0IDogMSB9LDEpYFxuICAgICAgICAgIDogYHRyYW5zbGF0ZTNkKCR7IG9sZFBvcy5sZWZ0IC0gbmV3UG9zLmxlZnQgfXB4LDAsMCkgc2NhbGUzZCgkeyBuZXdQb3Mud2lkdGggPyBvbGRQb3Mud2lkdGggLyBuZXdQb3Mud2lkdGggOiAxIH0sMSwxKWBcblxuICAgICAgICAvLyBhbGxvdyBzY29wZSB1cGRhdGVzIHRvIGtpY2sgaW4gKFFSb3V0ZVRhYiBuZWVkcyBtb3JlIHRpbWUpXG4gICAgICAgIHJlZ2lzdGVyQW5pbWF0ZVRpY2soKCkgPT4ge1xuICAgICAgICAgIGFuaW1hdGVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbmV3RWwuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKSdcbiAgICAgICAgICAgIG5ld0VsLnN0eWxlLnRyYW5zZm9ybSA9ICdub25lJ1xuICAgICAgICAgIH0sIDcwKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3VGFiICYmIHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgc2Nyb2xsVG9UYWJFbChuZXdUYWIucm9vdFJlZi52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb1RhYkVsIChlbCkge1xuICAgICAgY29uc3RcbiAgICAgICAgeyBsZWZ0LCB3aWR0aCwgdG9wLCBoZWlnaHQgfSA9IGNvbnRlbnRSZWYudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIG5ld1BvcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cbiAgICAgIGxldCBvZmZzZXQgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IG5ld1Bvcy50b3AgLSB0b3AgOiBuZXdQb3MubGVmdCAtIGxlZnRcblxuICAgICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgY29udGVudFJlZi52YWx1ZVsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JyBdICs9IE1hdGguZmxvb3Iob2Zmc2V0KVxuICAgICAgICB1cGRhdGVBcnJvd3MoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgb2Zmc2V0ICs9IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gbmV3UG9zLmhlaWdodCAtIGhlaWdodCA6IG5ld1Bvcy53aWR0aCAtIHdpZHRoXG4gICAgICBpZiAob2Zmc2V0ID4gMCkge1xuICAgICAgICBjb250ZW50UmVmLnZhbHVlWyBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnIF0gKz0gTWF0aC5jZWlsKG9mZnNldClcbiAgICAgICAgdXBkYXRlQXJyb3dzKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVBcnJvd3MgKCkge1xuICAgICAgY29uc3QgY29udGVudCA9IGNvbnRlbnRSZWYudmFsdWVcbiAgICAgIGlmIChjb250ZW50ID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHJlY3QgPSBjb250ZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICBwb3MgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IGNvbnRlbnQuc2Nyb2xsVG9wIDogTWF0aC5hYnMoY29udGVudC5zY3JvbGxMZWZ0KVxuXG4gICAgICBpZiAoaXNSVEwudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbGVmdEFycm93LnZhbHVlID0gTWF0aC5jZWlsKHBvcyArIHJlY3Qud2lkdGgpIDwgY29udGVudC5zY3JvbGxXaWR0aCAtIDFcbiAgICAgICAgcmlnaHRBcnJvdy52YWx1ZSA9IHBvcyA+IDBcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZWZ0QXJyb3cudmFsdWUgPSBwb3MgPiAwXG4gICAgICAgIHJpZ2h0QXJyb3cudmFsdWUgPSBwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZVxuICAgICAgICAgID8gTWF0aC5jZWlsKHBvcyArIHJlY3QuaGVpZ2h0KSA8IGNvbnRlbnQuc2Nyb2xsSGVpZ2h0XG4gICAgICAgICAgOiBNYXRoLmNlaWwocG9zICsgcmVjdC53aWR0aCkgPCBjb250ZW50LnNjcm9sbFdpZHRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYW5pbVNjcm9sbFRvICh2YWx1ZSkge1xuICAgICAgc3RvcEFuaW1TY3JvbGwoKVxuICAgICAgc2Nyb2xsVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChzY3JvbGxUb3dhcmRzKHZhbHVlKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHN0b3BBbmltU2Nyb2xsKClcbiAgICAgICAgfVxuICAgICAgfSwgNSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb1N0YXJ0ICgpIHtcbiAgICAgIGFuaW1TY3JvbGxUbyhydGxQb3NDb3JyZWN0aW9uLnZhbHVlID09PSB0cnVlID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNjcm9sbFRvRW5kICgpIHtcbiAgICAgIGFuaW1TY3JvbGxUbyhydGxQb3NDb3JyZWN0aW9uLnZhbHVlID09PSB0cnVlID8gMCA6IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3BBbmltU2Nyb2xsICgpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoc2Nyb2xsVGltZXIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25LYmROYXZpZ2F0ZSAoa2V5Q29kZSwgZnJvbUVsKSB7XG4gICAgICBjb25zdCB0YWJzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKFxuICAgICAgICBjb250ZW50UmVmLnZhbHVlLmNoaWxkcmVuLFxuICAgICAgICBlbCA9PiBlbCA9PT0gZnJvbUVsIHx8IChlbC5tYXRjaGVzICYmIGVsLm1hdGNoZXMoJy5xLXRhYi5xLWZvY3VzYWJsZScpID09PSB0cnVlKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBsZW4gPSB0YWJzLmxlbmd0aFxuICAgICAgaWYgKGxlbiA9PT0gMCkgeyByZXR1cm4gfVxuXG4gICAgICBpZiAoa2V5Q29kZSA9PT0gMzYpIHsgLy8gSG9tZVxuICAgICAgICBzY3JvbGxUb1RhYkVsKHRhYnNbIDAgXSlcbiAgICAgICAgdGFic1sgMCBdLmZvY3VzKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmIChrZXlDb2RlID09PSAzNSkgeyAvLyBFbmRcbiAgICAgICAgc2Nyb2xsVG9UYWJFbCh0YWJzWyBsZW4gLSAxIF0pXG4gICAgICAgIHRhYnNbIGxlbiAtIDEgXS5mb2N1cygpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpclByZXYgPSBrZXlDb2RlID09PSAocHJvcHMudmVydGljYWwgPT09IHRydWUgPyAzOCAvKiBBcnJvd1VwICovIDogMzcgLyogQXJyb3dMZWZ0ICovKVxuICAgICAgY29uc3QgZGlyTmV4dCA9IGtleUNvZGUgPT09IChwcm9wcy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/IDQwIC8qIEFycm93RG93biAqLyA6IDM5IC8qIEFycm93UmlnaHQgKi8pXG5cbiAgICAgIGNvbnN0IGRpciA9IGRpclByZXYgPT09IHRydWUgPyAtMSA6IChkaXJOZXh0ID09PSB0cnVlID8gMSA6IHZvaWQgMClcblxuICAgICAgaWYgKGRpciAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGNvbnN0IHJ0bERpciA9IGlzUlRMLnZhbHVlID09PSB0cnVlID8gLTEgOiAxXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFicy5pbmRleE9mKGZyb21FbCkgKyBkaXIgKiBydGxEaXJcblxuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGxlbikge1xuICAgICAgICAgIHNjcm9sbFRvVGFiRWwodGFic1sgaW5kZXggXSlcbiAgICAgICAgICB0YWJzWyBpbmRleCBdLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsZXQncyBzcGVlZCB1cCBleGVjdXRpb24gb2YgdGltZS1zZW5zaXRpdmUgc2Nyb2xsVG93YXJkcygpXG4gICAgLy8gd2l0aCBhIGNvbXB1dGVkIHZhcmlhYmxlIGJ5IGRpcmVjdGx5IGFwcGx5aW5nIHRoZSBtaW5pbWFsXG4gICAgLy8gbnVtYmVyIG9mIGluc3RydWN0aW9ucyBvbiBnZXQvc2V0IGZ1bmN0aW9uc1xuICAgIGNvbnN0IHBvc0ZuID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcnRsUG9zQ29ycmVjdGlvbi52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgZ2V0OiBjb250ZW50ID0+IE1hdGguYWJzKGNvbnRlbnQuc2Nyb2xsTGVmdCksIHNldDogKGNvbnRlbnQsIHBvcykgPT4geyBjb250ZW50LnNjcm9sbExlZnQgPSAtcG9zIH0gfVxuICAgICAgICA6IChcbiAgICAgICAgICAgIHByb3BzLnZlcnRpY2FsID09PSB0cnVlXG4gICAgICAgICAgICAgID8geyBnZXQ6IGNvbnRlbnQgPT4gY29udGVudC5zY3JvbGxUb3AsIHNldDogKGNvbnRlbnQsIHBvcykgPT4geyBjb250ZW50LnNjcm9sbFRvcCA9IHBvcyB9IH1cbiAgICAgICAgICAgICAgOiB7IGdldDogY29udGVudCA9PiBjb250ZW50LnNjcm9sbExlZnQsIHNldDogKGNvbnRlbnQsIHBvcykgPT4geyBjb250ZW50LnNjcm9sbExlZnQgPSBwb3MgfSB9XG4gICAgICAgICAgKVxuICAgICkpXG5cbiAgICBmdW5jdGlvbiBzY3JvbGxUb3dhcmRzICh2YWx1ZSkge1xuICAgICAgY29uc3RcbiAgICAgICAgY29udGVudCA9IGNvbnRlbnRSZWYudmFsdWUsXG4gICAgICAgIHsgZ2V0LCBzZXQgfSA9IHBvc0ZuLnZhbHVlXG5cbiAgICAgIGxldFxuICAgICAgICBkb25lID0gZmFsc2UsXG4gICAgICAgIHBvcyA9IGdldChjb250ZW50KVxuXG4gICAgICBjb25zdCBkaXJlY3Rpb24gPSB2YWx1ZSA8IHBvcyA/IC0xIDogMVxuXG4gICAgICBwb3MgKz0gZGlyZWN0aW9uICogNVxuXG4gICAgICBpZiAocG9zIDwgMCkge1xuICAgICAgICBkb25lID0gdHJ1ZVxuICAgICAgICBwb3MgPSAwXG4gICAgICB9XG4gICAgICBlbHNlIGlmIChcbiAgICAgICAgKGRpcmVjdGlvbiA9PT0gLTEgJiYgcG9zIDw9IHZhbHVlKVxuICAgICAgICB8fCAoZGlyZWN0aW9uID09PSAxICYmIHBvcyA+PSB2YWx1ZSlcbiAgICAgICkge1xuICAgICAgICBkb25lID0gdHJ1ZVxuICAgICAgICBwb3MgPSB2YWx1ZVxuICAgICAgfVxuXG4gICAgICBzZXQoY29udGVudCwgcG9zKVxuICAgICAgdXBkYXRlQXJyb3dzKClcblxuICAgICAgcmV0dXJuIGRvbmVcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNRdWVyeUluY2x1ZGVkICh0YXJnZXRRdWVyeSwgbWF0Y2hpbmdRdWVyeSkge1xuICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGFyZ2V0UXVlcnkpIHtcbiAgICAgICAgaWYgKHRhcmdldFF1ZXJ5WyBrZXkgXSAhPT0gbWF0Y2hpbmdRdWVyeVsga2V5IF0pIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIGRvIG5vdCB1c2UgZGlyZWN0bHk7IHVzZSB2ZXJpZnlSb3V0ZU1vZGVsKCkgaW5zdGVhZFxuICAgIGZ1bmN0aW9uIHVwZGF0ZUFjdGl2ZVJvdXRlICgpIHtcbiAgICAgIGxldCBuYW1lID0gbnVsbCwgYmVzdFNjb3JlID0geyBtYXRjaGVkTGVuOiAwLCBxdWVyeURpZmY6IDk5OTksIGhyZWZMZW46IDAgfVxuXG4gICAgICBjb25zdCBsaXN0ID0gdGFiRGF0YUxpc3QuZmlsdGVyKHRhYiA9PiB0YWIucm91dGVEYXRhICE9PSB2b2lkIDAgJiYgdGFiLnJvdXRlRGF0YS5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKVxuICAgICAgY29uc3QgeyBoYXNoOiBjdXJyZW50SGFzaCwgcXVlcnk6IGN1cnJlbnRRdWVyeSB9ID0gcHJveHkuJHJvdXRlXG4gICAgICBjb25zdCBjdXJyZW50UXVlcnlMZW4gPSBPYmplY3Qua2V5cyhjdXJyZW50UXVlcnkpLmxlbmd0aFxuXG4gICAgICAvLyBWdWUgUm91dGVyIGRvZXMgbm90IGtlZXAgYWNjb3VudCBvZiBoYXNoICYgcXVlcnkgd2hlbiBtYXRjaGluZ1xuICAgICAgLy8gc28gd2UncmUgZG9pbmcgdGhpcyBhcyB3ZWxsXG5cbiAgICAgIGZvciAoY29uc3QgdGFiIG9mIGxpc3QpIHtcbiAgICAgICAgY29uc3QgZXhhY3QgPSB0YWIucm91dGVEYXRhLmV4YWN0LnZhbHVlID09PSB0cnVlXG5cbiAgICAgICAgaWYgKHRhYi5yb3V0ZURhdGFbIGV4YWN0ID09PSB0cnVlID8gJ2xpbmtJc0V4YWN0QWN0aXZlJyA6ICdsaW5rSXNBY3RpdmUnIF0udmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAvLyBpdCBjYW5ub3QgbWF0Y2ggYW55dGhpbmcgYXMgaXQncyBub3QgYWN0aXZlIG5vciBleGFjdC1hY3RpdmVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBoYXNoLCBxdWVyeSwgbWF0Y2hlZCwgaHJlZiB9ID0gdGFiLnJvdXRlRGF0YS5yZXNvbHZlZExpbmsudmFsdWVcbiAgICAgICAgY29uc3QgcXVlcnlMZW4gPSBPYmplY3Qua2V5cyhxdWVyeSkubGVuZ3RoXG5cbiAgICAgICAgaWYgKGV4YWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKGhhc2ggIT09IGN1cnJlbnRIYXNoKSB7XG4gICAgICAgICAgICAvLyBpdCdzIHNldCB0byBleGFjdCBidXQgaXQgZG9lc24ndCBtYXRjaGVzIHRoZSBoYXNoXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHF1ZXJ5TGVuICE9PSBjdXJyZW50UXVlcnlMZW5cbiAgICAgICAgICAgIHx8IGhhc1F1ZXJ5SW5jbHVkZWQoY3VycmVudFF1ZXJ5LCBxdWVyeSkgPT09IGZhbHNlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBpdCdzIHNldCB0byBleGFjdCBidXQgaXQgZG9lc24ndCBtYXRjaGVzIHRoZSBxdWVyeVxuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB5ZXksIHdlIGZvdW5kIHRoZSBwZXJmZWN0IG1hdGNoIChyb3V0ZSArIGhhc2ggKyBxdWVyeSlcbiAgICAgICAgICBuYW1lID0gdGFiLm5hbWUudmFsdWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc2ggIT09ICcnICYmIGhhc2ggIT09IGN1cnJlbnRIYXNoKSB7XG4gICAgICAgICAgLy8gaXQgaGFzIGhhc2ggYW5kIGl0IGRvZXNuJ3QgbWF0Y2hlc1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgcXVlcnlMZW4gIT09IDBcbiAgICAgICAgICAmJiBoYXNRdWVyeUluY2x1ZGVkKHF1ZXJ5LCBjdXJyZW50UXVlcnkpID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBpdCBoYXMgcXVlcnkgYW5kIGl0IGRvZXNuJ3QgaW5jbHVkZXMgdGhlIGN1cnJlbnQgb25lXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1Njb3JlID0ge1xuICAgICAgICAgIG1hdGNoZWRMZW46IG1hdGNoZWQubGVuZ3RoLFxuICAgICAgICAgIHF1ZXJ5RGlmZjogY3VycmVudFF1ZXJ5TGVuIC0gcXVlcnlMZW4sXG4gICAgICAgICAgaHJlZkxlbjogaHJlZi5sZW5ndGggLSBoYXNoLmxlbmd0aFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Njb3JlLm1hdGNoZWRMZW4gPiBiZXN0U2NvcmUubWF0Y2hlZExlbikge1xuICAgICAgICAgIC8vIGl0IG1hdGNoZXMgbW9yZSByb3V0ZXMgc28gaXQncyBtb3JlIHNwZWNpZmljIHNvIHdlIHNldCBpdCBhcyBjdXJyZW50IGNoYW1waW9uXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYmVzdFNjb3JlID0gbmV3U2NvcmVcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld1Njb3JlLm1hdGNoZWRMZW4gIT09IGJlc3RTY29yZS5tYXRjaGVkTGVuKSB7XG4gICAgICAgICAgLy8gaXQgbWF0Y2hlcyBsZXNzIHJvdXRlcyB0aGFuIHRoZSBjdXJyZW50IGNoYW1waW9uIHNvIHdlIGRpc2NhcmQgaXRcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1Njb3JlLnF1ZXJ5RGlmZiA8IGJlc3RTY29yZS5xdWVyeURpZmYpIHtcbiAgICAgICAgICAvLyBxdWVyeSBpcyBjbG9zZXIgdG8gdGhlIGN1cnJlbnQgb25lIHNvIHdlIHNldCBpdCBhcyBjdXJyZW50IGNoYW1waW9uXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYmVzdFNjb3JlID0gbmV3U2NvcmVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdTY29yZS5xdWVyeURpZmYgIT09IGJlc3RTY29yZS5xdWVyeURpZmYpIHtcbiAgICAgICAgICAvLyBpdCBtYXRjaGVzIGxlc3Mgcm91dGVzIHRoYW4gdGhlIGN1cnJlbnQgY2hhbXBpb24gc28gd2UgZGlzY2FyZCBpdFxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3U2NvcmUuaHJlZkxlbiA+IGJlc3RTY29yZS5ocmVmTGVuKSB7XG4gICAgICAgICAgLy8gaHJlZiBpcyBsZW5ndGhpZXIgc28gaXQncyBtb3JlIHNwZWNpZmljIHNvIHdlIHNldCBpdCBhcyBjdXJyZW50IGNoYW1waW9uXG4gICAgICAgICAgbmFtZSA9IHRhYi5uYW1lLnZhbHVlXG4gICAgICAgICAgYmVzdFNjb3JlID0gbmV3U2NvcmVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIG5hbWUgPT09IG51bGxcbiAgICAgICAgJiYgdGFiRGF0YUxpc3Quc29tZSh0YWIgPT4gdGFiLnJvdXRlRGF0YSA9PT0gdm9pZCAwICYmIHRhYi5uYW1lLnZhbHVlID09PSBjdXJyZW50TW9kZWwudmFsdWUpID09PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkbid0IGludGVyZmVyZSBpZiBub24tcm91dGUgdGFiIGlzIGFjdGl2ZVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdXBkYXRlTW9kZWwoeyBuYW1lLCBzZXRDdXJyZW50OiB0cnVlIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Gb2N1c2luIChlKSB7XG4gICAgICByZW1vdmVGb2N1c1RpbWVvdXQoKVxuXG4gICAgICBpZiAoXG4gICAgICAgIGhhc0ZvY3VzLnZhbHVlICE9PSB0cnVlXG4gICAgICAgICYmIHJvb3RSZWYudmFsdWUgIT09IG51bGxcbiAgICAgICAgJiYgZS50YXJnZXRcbiAgICAgICAgJiYgdHlwZW9mIGUudGFyZ2V0LmNsb3Nlc3QgPT09ICdmdW5jdGlvbidcbiAgICAgICkge1xuICAgICAgICBjb25zdCB0YWIgPSBlLnRhcmdldC5jbG9zZXN0KCcucS10YWInKVxuXG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgaXMgY29udGFpbmVkIGJ5IGEgUVRhYi9RUm91dGVUYWJcbiAgICAgICAgLy8gKGl0IG1pZ2h0IGJlIG90aGVyIGVsZW1lbnRzIGZvY3VzZWQsIGxpa2UgYWRkaXRpb25hbCBRQnRuKVxuICAgICAgICBpZiAodGFiICYmIHJvb3RSZWYudmFsdWUuY29udGFpbnModGFiKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGhhc0ZvY3VzLnZhbHVlID0gdHJ1ZVxuICAgICAgICAgIHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUgJiYgc2Nyb2xsVG9UYWJFbCh0YWIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3Vzb3V0ICgpIHtcbiAgICAgIHJlZ2lzdGVyRm9jdXNUaW1lb3V0KCgpID0+IHsgaGFzRm9jdXMudmFsdWUgPSBmYWxzZSB9LCAzMClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2ZXJpZnlSb3V0ZU1vZGVsICgpIHtcbiAgICAgIGlmICgkdGFicy5hdm9pZFJvdXRlV2F0Y2hlciA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmVnaXN0ZXJTY3JvbGxUb1RhYlRpbWVvdXQodXBkYXRlQWN0aXZlUm91dGUpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVtb3ZlU2Nyb2xsVG9UYWJUaW1lb3V0KClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YXRjaFJvdXRlICgpIHtcbiAgICAgIGlmICh1bndhdGNoUm91dGUgPT09IHZvaWQgMCkge1xuICAgICAgICBjb25zdCB1bndhdGNoID0gd2F0Y2goKCkgPT4gcHJveHkuJHJvdXRlLmZ1bGxQYXRoLCB2ZXJpZnlSb3V0ZU1vZGVsKVxuICAgICAgICB1bndhdGNoUm91dGUgPSAoKSA9PiB7XG4gICAgICAgICAgdW53YXRjaCgpXG4gICAgICAgICAgdW53YXRjaFJvdXRlID0gdm9pZCAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWdpc3RlclRhYiAodGFiRGF0YSkge1xuICAgICAgdGFiRGF0YUxpc3QucHVzaCh0YWJEYXRhKVxuICAgICAgdGFiRGF0YUxpc3RMZW4udmFsdWUrK1xuXG4gICAgICByZWNhbGN1bGF0ZVNjcm9sbCgpXG5cbiAgICAgIC8vIGlmIGl0J3MgYSBRVGFiIG9yIHdlIGRvbid0IGhhdmUgVnVlIFJvdXRlclxuICAgICAgaWYgKHRhYkRhdGEucm91dGVEYXRhID09PSB2b2lkIDAgfHwgcHJveHkuJHJvdXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgLy8gd2Ugc2hvdWxkIHBvc2l0aW9uIHRvIHRoZSBjdXJyZW50bHkgYWN0aXZlIHRhYiAoaWYgYW55KVxuICAgICAgICByZWdpc3RlclNjcm9sbFRvVGFiVGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgaWYgKHNjcm9sbGFibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3VycmVudE1vZGVsLnZhbHVlXG4gICAgICAgICAgICBjb25zdCBuZXdUYWIgPSB2YWx1ZSAhPT0gdm9pZCAwICYmIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSAnJ1xuICAgICAgICAgICAgICA/IHRhYkRhdGFMaXN0LmZpbmQodGFiID0+IHRhYi5uYW1lLnZhbHVlID09PSB2YWx1ZSlcbiAgICAgICAgICAgICAgOiBudWxsXG5cbiAgICAgICAgICAgIG5ld1RhYiAmJiBzY3JvbGxUb1RhYkVsKG5ld1RhYi5yb290UmVmLnZhbHVlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIGVsc2UgaWYgaXQncyBhIFFSb3V0ZVRhYiB3aXRoIGEgdmFsaWQgbGlua1xuICAgICAgZWxzZSB7XG4gICAgICAgIC8vIHN0YXJ0IHdhdGNoaW5nIHJvdXRlXG4gICAgICAgIHdhdGNoUm91dGUoKVxuXG4gICAgICAgIGlmICh0YWJEYXRhLnJvdXRlRGF0YS5oYXNSb3V0ZXJMaW5rLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgdmVyaWZ5Um91dGVNb2RlbCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bnJlZ2lzdGVyVGFiICh0YWJEYXRhKSB7XG4gICAgICB0YWJEYXRhTGlzdC5zcGxpY2UodGFiRGF0YUxpc3QuaW5kZXhPZih0YWJEYXRhKSwgMSlcbiAgICAgIHRhYkRhdGFMaXN0TGVuLnZhbHVlLS1cblxuICAgICAgcmVjYWxjdWxhdGVTY3JvbGwoKVxuXG4gICAgICBpZiAodW53YXRjaFJvdXRlICE9PSB2b2lkIDAgJiYgdGFiRGF0YS5yb3V0ZURhdGEgIT09IHZvaWQgMCkge1xuICAgICAgICAvLyB1bndhdGNoIHJvdXRlIGlmIHdlIGRvbid0IGhhdmUgYW55IFFSb3V0ZVRhYnMgbGVmdFxuICAgICAgICBpZiAodGFiRGF0YUxpc3QuZXZlcnkodGFiID0+IHRhYi5yb3V0ZURhdGEgPT09IHZvaWQgMCkgPT09IHRydWUpIHtcbiAgICAgICAgICB1bndhdGNoUm91dGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhlbiB1cGRhdGUgbW9kZWxcbiAgICAgICAgdmVyaWZ5Um91dGVNb2RlbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgJHRhYnMgPSB7XG4gICAgICBjdXJyZW50TW9kZWwsXG4gICAgICB0YWJQcm9wcyxcbiAgICAgIGhhc0ZvY3VzLFxuICAgICAgaGFzQWN0aXZlVGFiLFxuXG4gICAgICByZWdpc3RlclRhYixcbiAgICAgIHVucmVnaXN0ZXJUYWIsXG5cbiAgICAgIHZlcmlmeVJvdXRlTW9kZWwsXG4gICAgICB1cGRhdGVNb2RlbCxcbiAgICAgIG9uS2JkTmF2aWdhdGUsXG5cbiAgICAgIGF2b2lkUm91dGVXYXRjaGVyOiBmYWxzZSAvLyBmYWxzZSB8IHN0cmluZyAodWlkKVxuICAgIH1cblxuICAgIHByb3ZpZGUodGFic0tleSwgJHRhYnMpXG5cbiAgICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICAgIGNsZWFyVGltZW91dChhbmltYXRlVGltZXIpXG4gICAgICBzdG9wQW5pbVNjcm9sbCgpXG4gICAgICB1bndhdGNoUm91dGUgIT09IHZvaWQgMCAmJiB1bndhdGNoUm91dGUoKVxuICAgIH1cblxuICAgIGxldCBoYWRSb3V0ZVdhdGNoZXJcblxuICAgIG9uQmVmb3JlVW5tb3VudChjbGVhbnVwKVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBoYWRSb3V0ZVdhdGNoZXIgPSB1bndhdGNoUm91dGUgIT09IHZvaWQgMFxuICAgICAgY2xlYW51cCgpXG4gICAgfSlcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGhhZFJvdXRlV2F0Y2hlciA9PT0gdHJ1ZSAmJiB3YXRjaFJvdXRlKClcbiAgICAgIHJlY2FsY3VsYXRlU2Nyb2xsKClcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHJvbGU6ICd0YWJsaXN0JyxcbiAgICAgICAgb25Gb2N1c2luLFxuICAgICAgICBvbkZvY3Vzb3V0XG4gICAgICB9LCBbXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7IG9uUmVzaXplOiB1cGRhdGVDb250YWluZXIgfSksXG5cbiAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgIHJlZjogY29udGVudFJlZixcbiAgICAgICAgICBjbGFzczogaW5uZXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBvblNjcm9sbDogdXBkYXRlQXJyb3dzXG4gICAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLWxlZnQgYWJzb2x1dGUgcS10YWJfX2ljb24nXG4gICAgICAgICAgICArIChsZWZ0QXJyb3cudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgcS10YWJzX19hcnJvdy0tZmFkZWQnKSxcbiAgICAgICAgICBuYW1lOiBwcm9wcy5sZWZ0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9TdGFydCxcbiAgICAgICAgICBvblRvdWNoc3RhcnRQYXNzaXZlOiBzY3JvbGxUb1N0YXJ0LFxuICAgICAgICAgIG9uTW91c2V1cFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uTW91c2VsZWF2ZVBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsLFxuICAgICAgICAgIG9uVG91Y2hlbmRQYXNzaXZlOiBzdG9wQW5pbVNjcm9sbFxuICAgICAgICB9KSxcblxuICAgICAgICBoKFFJY29uLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXRhYnNfX2Fycm93IHEtdGFic19fYXJyb3ctLXJpZ2h0IGFic29sdXRlIHEtdGFiX19pY29uJ1xuICAgICAgICAgICAgKyAocmlnaHRBcnJvdy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBxLXRhYnNfX2Fycm93LS1mYWRlZCcpLFxuICAgICAgICAgIG5hbWU6IHByb3BzLnJpZ2h0SWNvbiB8fCAkcS5pY29uU2V0LnRhYnNbIHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ2Rvd24nIDogJ3JpZ2h0JyBdLFxuICAgICAgICAgIG9uTW91c2Vkb3duUGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Ub3VjaHN0YXJ0UGFzc2l2ZTogc2Nyb2xsVG9FbmQsXG4gICAgICAgICAgb25Nb3VzZXVwUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Nb3VzZWxlYXZlUGFzc2l2ZTogc3RvcEFuaW1TY3JvbGwsXG4gICAgICAgICAgb25Ub3VjaGVuZFBhc3NpdmU6IHN0b3BBbmltU2Nyb2xsXG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiIsImltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL3BsdWdpbnMvUGxhdGZvcm0uanMnXG5cbmltcG9ydCB7IGNyZWF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgZ2V0TW9kaWZpZXJEaXJlY3Rpb25zLCBzaG91bGRTdGFydCB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvdG91Y2guanMnXG5pbXBvcnQgeyBhZGRFdnQsIGNsZWFuRXZ0LCBwb3NpdGlvbiwgbGVmdENsaWNrLCBzdG9wQW5kUHJldmVudCwgcHJldmVudERyYWdnYWJsZSwgbm9vcCB9IGZyb20gJy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgY2xlYXJTZWxlY3Rpb24gfSBmcm9tICcuLi91dGlscy9wcml2YXRlL3NlbGVjdGlvbi5qcydcbmltcG9ydCBnZXRTU1JQcm9wcyBmcm9tICcuLi91dGlscy9wcml2YXRlL25vb3Atc3NyLWRpcmVjdGl2ZS10cmFuc2Zvcm0uanMnXG5cbmZ1bmN0aW9uIHBhcnNlQXJnIChhcmcpIHtcbiAgLy8gZGVsdGEgKG1pbiB2ZWxvY2l0eSAtLSBkaXN0IC8gdGltZSlcbiAgLy8gbW9iaWxlIG1pbiBkaXN0YW5jZSBvbiBmaXJzdCBtb3ZlXG4gIC8vIGRlc2t0b3AgbWluIGRpc3RhbmNlIHVudGlsIGRlY2lkaW5nIGlmIGl0J3MgYSBzd2lwZSBvciBub3RcbiAgY29uc3QgZGF0YSA9IFsgMC4wNiwgNiwgNTAgXVxuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJyAmJiBhcmcubGVuZ3RoKSB7XG4gICAgYXJnLnNwbGl0KCc6JykuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgdiA9IHBhcnNlRmxvYXQodmFsKVxuICAgICAgdiAmJiAoZGF0YVsgaW5kZXggXSA9IHYpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURpcmVjdGl2ZShfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgPyB7IG5hbWU6ICd0b3VjaC1zd2lwZScsIGdldFNTUlByb3BzIH1cbiAgOiB7XG4gICAgICBuYW1lOiAndG91Y2gtc3dpcGUnLFxuXG4gICAgICBiZWZvcmVNb3VudCAoZWwsIHsgdmFsdWUsIGFyZywgbW9kaWZpZXJzIH0pIHtcbiAgICAgICAgLy8gZWFybHkgcmV0dXJuLCB3ZSBkb24ndCBuZWVkIHRvIGRvIGFueXRoaW5nXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgIT09IHRydWUgJiYgY2xpZW50Lmhhcy50b3VjaCAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbW91c2VDYXB0dXJlID0gbW9kaWZpZXJzLm1vdXNlQ2FwdHVyZSA9PT0gdHJ1ZSA/ICdDYXB0dXJlJyA6ICcnXG5cbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIGhhbmRsZXI6IHZhbHVlLFxuICAgICAgICAgIHNlbnNpdGl2aXR5OiBwYXJzZUFyZyhhcmcpLFxuICAgICAgICAgIGRpcmVjdGlvbjogZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKG1vZGlmaWVycyksXG5cbiAgICAgICAgICBub29wLFxuXG4gICAgICAgICAgbW91c2VTdGFydCAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkU3RhcnQoZXZ0LCBjdHgpICYmIGxlZnRDbGljayhldnQpKSB7XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgZG9jdW1lbnQsICdtb3VzZW1vdmUnLCAnbW92ZScsIGBub3RQYXNzaXZlJHsgbW91c2VDYXB0dXJlIH1gIF0sXG4gICAgICAgICAgICAgICAgWyBkb2N1bWVudCwgJ21vdXNldXAnLCAnZW5kJywgJ25vdFBhc3NpdmVDYXB0dXJlJyBdXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIGN0eC5zdGFydChldnQsIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHRvdWNoU3RhcnQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YXJ0KGV2dCwgY3R4KSkge1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldnQudGFyZ2V0XG4gICAgICAgICAgICAgIGFkZEV2dChjdHgsICd0ZW1wJywgW1xuICAgICAgICAgICAgICAgIFsgdGFyZ2V0LCAndG91Y2htb3ZlJywgJ21vdmUnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGNhbmNlbCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF0sXG4gICAgICAgICAgICAgICAgWyB0YXJnZXQsICd0b3VjaGVuZCcsICdlbmQnLCAnbm90UGFzc2l2ZUNhcHR1cmUnIF1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgY3R4LnN0YXJ0KGV2dClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3RhcnQgKGV2dCwgbW91c2VFdmVudCkge1xuICAgICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgdHJ1ZSlcblxuICAgICAgICAgICAgY29uc3QgcG9zID0gcG9zaXRpb24oZXZ0KVxuXG4gICAgICAgICAgICBjdHguZXZlbnQgPSB7XG4gICAgICAgICAgICAgIHg6IHBvcy5sZWZ0LFxuICAgICAgICAgICAgICB5OiBwb3MudG9wLFxuICAgICAgICAgICAgICB0aW1lOiBEYXRlLm5vdygpLFxuICAgICAgICAgICAgICBtb3VzZTogbW91c2VFdmVudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgZGlyOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBtb3ZlIChldnQpIHtcbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5kaXIgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHN0b3BBbmRQcmV2ZW50KGV2dClcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBEYXRlLm5vdygpIC0gY3R4LmV2ZW50LnRpbWVcblxuICAgICAgICAgICAgaWYgKHRpbWUgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgIHBvcyA9IHBvc2l0aW9uKGV2dCksXG4gICAgICAgICAgICAgIGRpc3RYID0gcG9zLmxlZnQgLSBjdHguZXZlbnQueCxcbiAgICAgICAgICAgICAgYWJzWCA9IE1hdGguYWJzKGRpc3RYKSxcbiAgICAgICAgICAgICAgZGlzdFkgPSBwb3MudG9wIC0gY3R4LmV2ZW50LnksXG4gICAgICAgICAgICAgIGFic1kgPSBNYXRoLmFicyhkaXN0WSlcblxuICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5tb3VzZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBpZiAoYWJzWCA8IGN0eC5zZW5zaXRpdml0eVsgMSBdICYmIGFic1kgPCBjdHguc2Vuc2l0aXZpdHlbIDEgXSkge1xuICAgICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChhYnNYIDwgY3R4LnNlbnNpdGl2aXR5WyAyIF0gJiYgYWJzWSA8IGN0eC5zZW5zaXRpdml0eVsgMiBdKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICB2ZWxYID0gYWJzWCAvIHRpbWUsXG4gICAgICAgICAgICAgIHZlbFkgPSBhYnNZIC8gdGltZVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24udmVydGljYWwgPT09IHRydWVcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IGFic1lcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxZID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gZGlzdFkgPCAwID8gJ3VwJyA6ICdkb3duJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uaG9yaXpvbnRhbCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYID4gYWJzWVxuICAgICAgICAgICAgICAmJiBhYnNZIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFggPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSBkaXN0WCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi51cCA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WSA8IDBcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxZID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ3VwJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGN0eC5kaXJlY3Rpb24uZG93biA9PT0gdHJ1ZVxuICAgICAgICAgICAgICAmJiBhYnNYIDwgYWJzWVxuICAgICAgICAgICAgICAmJiBkaXN0WSA+IDBcbiAgICAgICAgICAgICAgJiYgYWJzWCA8IDEwMFxuICAgICAgICAgICAgICAmJiB2ZWxZID4gY3R4LnNlbnNpdGl2aXR5WyAwIF1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjdHguZXZlbnQuZGlyID0gJ2Rvd24nXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgY3R4LmRpcmVjdGlvbi5sZWZ0ID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPiBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RYIDwgMFxuICAgICAgICAgICAgICAmJiBhYnNZIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFggPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAnbGVmdCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBjdHguZGlyZWN0aW9uLnJpZ2h0ID09PSB0cnVlXG4gICAgICAgICAgICAgICYmIGFic1ggPiBhYnNZXG4gICAgICAgICAgICAgICYmIGRpc3RYID4gMFxuICAgICAgICAgICAgICAmJiBhYnNZIDwgMTAwXG4gICAgICAgICAgICAgICYmIHZlbFggPiBjdHguc2Vuc2l0aXZpdHlbIDAgXVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGN0eC5ldmVudC5kaXIgPSAncmlnaHQnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdHguZXZlbnQuZGlyICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICBzdG9wQW5kUHJldmVudChldnQpXG5cbiAgICAgICAgICAgICAgaWYgKGN0eC5ldmVudC5tb3VzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbm8tcG9pbnRlci1ldmVudHMtLWNoaWxkcmVuJylcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vbi1zZWxlY3RhYmxlJylcbiAgICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbigpXG5cbiAgICAgICAgICAgICAgICBjdHguc3R5bGVDbGVhbnVwID0gd2l0aERlbGF5ID0+IHtcbiAgICAgICAgICAgICAgICAgIGN0eC5zdHlsZUNsZWFudXAgPSB2b2lkIDBcblxuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdub24tc2VsZWN0YWJsZScpXG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCduby1wb2ludGVyLWV2ZW50cy0tY2hpbGRyZW4nKVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAod2l0aERlbGF5ID09PSB0cnVlKSB7IHNldFRpbWVvdXQocmVtb3ZlLCA1MCkgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7IHJlbW92ZSgpIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjdHguaGFuZGxlcih7XG4gICAgICAgICAgICAgICAgZXZ0LFxuICAgICAgICAgICAgICAgIHRvdWNoOiBjdHguZXZlbnQubW91c2UgIT09IHRydWUsXG4gICAgICAgICAgICAgICAgbW91c2U6IGN0eC5ldmVudC5tb3VzZSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGN0eC5ldmVudC5kaXIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IHRpbWUsXG4gICAgICAgICAgICAgICAgZGlzdGFuY2U6IHtcbiAgICAgICAgICAgICAgICAgIHg6IGFic1gsXG4gICAgICAgICAgICAgICAgICB5OiBhYnNZXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGN0eC5lbmQoZXZ0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBlbmQgKGV2dCkge1xuICAgICAgICAgICAgaWYgKGN0eC5ldmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGVhbkV2dChjdHgsICd0ZW1wJylcbiAgICAgICAgICAgIGNsaWVudC5pcy5maXJlZm94ID09PSB0cnVlICYmIHByZXZlbnREcmFnZ2FibGUoZWwsIGZhbHNlKVxuICAgICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAodHJ1ZSlcbiAgICAgICAgICAgIGV2dCAhPT0gdm9pZCAwICYmIGN0eC5ldmVudC5kaXIgIT09IGZhbHNlICYmIHN0b3BBbmRQcmV2ZW50KGV2dClcblxuICAgICAgICAgICAgY3R4LmV2ZW50ID0gdm9pZCAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWwuX19xdG91Y2hzd2lwZSA9IGN0eFxuXG4gICAgICAgIGlmIChtb2RpZmllcnMubW91c2UgPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBhY2NvdW50IGZvciBVTUQgdG9vIHdoZXJlIG1vZGlmaWVycyB3aWxsIGJlIGxvd2VyY2FzZWQgdG8gd29ya1xuICAgICAgICAgIGNvbnN0IGNhcHR1cmUgPSBtb2RpZmllcnMubW91c2VDYXB0dXJlID09PSB0cnVlIHx8IG1vZGlmaWVycy5tb3VzZWNhcHR1cmUgPT09IHRydWVcbiAgICAgICAgICAgID8gJ0NhcHR1cmUnXG4gICAgICAgICAgICA6ICcnXG5cbiAgICAgICAgICBhZGRFdnQoY3R4LCAnbWFpbicsIFtcbiAgICAgICAgICAgIFsgZWwsICdtb3VzZWRvd24nLCAnbW91c2VTdGFydCcsIGBwYXNzaXZlJHsgY2FwdHVyZSB9YCBdXG4gICAgICAgICAgXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNsaWVudC5oYXMudG91Y2ggPT09IHRydWUgJiYgYWRkRXZ0KGN0eCwgJ21haW4nLCBbXG4gICAgICAgICAgWyBlbCwgJ3RvdWNoc3RhcnQnLCAndG91Y2hTdGFydCcsIGBwYXNzaXZlJHsgbW9kaWZpZXJzLmNhcHR1cmUgPT09IHRydWUgPyAnQ2FwdHVyZScgOiAnJyB9YCBdLFxuICAgICAgICAgIFsgZWwsICd0b3VjaG1vdmUnLCAnbm9vcCcsICdub3RQYXNzaXZlQ2FwdHVyZScgXSAvLyBjYW5ub3QgYmUgcGFzc2l2ZSAoZXg6IGlPUyBzY3JvbGwpXG4gICAgICAgIF0pXG4gICAgICB9LFxuXG4gICAgICB1cGRhdGVkIChlbCwgYmluZGluZ3MpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hzd2lwZVxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGlmIChiaW5kaW5ncy5vbGRWYWx1ZSAhPT0gYmluZGluZ3MudmFsdWUpIHtcbiAgICAgICAgICAgIHR5cGVvZiBiaW5kaW5ncy52YWx1ZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjdHguZW5kKClcbiAgICAgICAgICAgIGN0eC5oYW5kbGVyID0gYmluZGluZ3MudmFsdWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdHguZGlyZWN0aW9uID0gZ2V0TW9kaWZpZXJEaXJlY3Rpb25zKGJpbmRpbmdzLm1vZGlmaWVycylcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xdG91Y2hzd2lwZVxuXG4gICAgICAgIGlmIChjdHggIT09IHZvaWQgMCkge1xuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ21haW4nKVxuICAgICAgICAgIGNsZWFuRXZ0KGN0eCwgJ3RlbXAnKVxuXG4gICAgICAgICAgY2xpZW50LmlzLmZpcmVmb3ggPT09IHRydWUgJiYgcHJldmVudERyYWdnYWJsZShlbCwgZmFsc2UpXG4gICAgICAgICAgY3R4LnN0eWxlQ2xlYW51cCAhPT0gdm9pZCAwICYmIGN0eC5zdHlsZUNsZWFudXAoKVxuXG4gICAgICAgICAgZGVsZXRlIGVsLl9fcXRvdWNoc3dpcGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbilcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2FjaGUgPSBuZXcgTWFwKClcblxuICByZXR1cm4ge1xuICAgIGdldENhY2hlOiBfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgICAgID8gZnVuY3Rpb24gKF8sIG9iaikgeyByZXR1cm4gb2JqIH1cbiAgICAgIDogZnVuY3Rpb24gKGtleSwgb2JqKSB7XG4gICAgICAgIHJldHVybiBjYWNoZVsga2V5IF0gPT09IHZvaWQgMFxuICAgICAgICAgID8gKGNhY2hlWyBrZXkgXSA9IG9iailcbiAgICAgICAgICA6IGNhY2hlWyBrZXkgXVxuICAgICAgfSxcblxuICAgIGdldENhY2hlV2l0aEZuOiBfX1FVQVNBUl9TU1JfU0VSVkVSX19cbiAgICAgID8gZnVuY3Rpb24gKF8sIGZuKSB7IHJldHVybiBmbigpIH1cbiAgICAgIDogZnVuY3Rpb24gKGtleSwgZm4pIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlWyBrZXkgXSA9PT0gdm9pZCAwXG4gICAgICAgICAgPyAoY2FjaGVbIGtleSBdID0gZm4oKSlcbiAgICAgICAgICA6IGNhY2hlWyBrZXkgXVxuICAgICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSwgVHJhbnNpdGlvbiwgS2VlcEFsaXZlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgVG91Y2hTd2lwZSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL1RvdWNoU3dpcGUuanMnXG5cbmltcG9ydCB1c2VDYWNoZSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1jYWNoZS5qcydcblxuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IGdldE5vcm1hbGl6ZWRWTm9kZXMgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3ZtLmpzJ1xuXG5leHBvcnQgY29uc3QgdXNlUGFuZWxDaGlsZFByb3BzID0ge1xuICBuYW1lOiB7IHJlcXVpcmVkOiB0cnVlIH0sXG4gIGRpc2FibGU6IEJvb2xlYW5cbn1cblxuY29uc3QgUGFuZWxXcmFwcGVyID0ge1xuICBzZXR1cCAoXywgeyBzbG90cyB9KSB7XG4gICAgcmV0dXJuICgpID0+IGgoJ2RpdicsIHtcbiAgICAgIGNsYXNzOiAncS1wYW5lbCBzY3JvbGwnLFxuICAgICAgcm9sZTogJ3RhYnBhbmVsJ1xuICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VQYW5lbFByb3BzID0ge1xuICBtb2RlbFZhbHVlOiB7XG4gICAgcmVxdWlyZWQ6IHRydWVcbiAgfSxcblxuICBhbmltYXRlZDogQm9vbGVhbixcbiAgaW5maW5pdGU6IEJvb2xlYW4sXG4gIHN3aXBlYWJsZTogQm9vbGVhbixcbiAgdmVydGljYWw6IEJvb2xlYW4sXG5cbiAgdHJhbnNpdGlvblByZXY6IFN0cmluZyxcbiAgdHJhbnNpdGlvbk5leHQ6IFN0cmluZyxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB7XG4gICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgIGRlZmF1bHQ6IDMwMFxuICB9LFxuXG4gIGtlZXBBbGl2ZTogQm9vbGVhbixcbiAga2VlcEFsaXZlSW5jbHVkZTogWyBTdHJpbmcsIEFycmF5LCBSZWdFeHAgXSxcbiAga2VlcEFsaXZlRXhjbHVkZTogWyBTdHJpbmcsIEFycmF5LCBSZWdFeHAgXSxcbiAga2VlcEFsaXZlTWF4OiBOdW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVBhbmVsRW1pdHMgPSBbICd1cGRhdGU6bW9kZWxWYWx1ZScsICdiZWZvcmVUcmFuc2l0aW9uJywgJ3RyYW5zaXRpb24nIF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHByb3BzLCBlbWl0LCBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgY29uc3QgeyBnZXRDYWNoZVdpdGhGbiB9ID0gdXNlQ2FjaGUoKVxuXG4gIGxldCBwYW5lbHMsIGZvcmNlZFBhbmVsVHJhbnNpdGlvblxuXG4gIGNvbnN0IHBhbmVsSW5kZXggPSByZWYobnVsbClcbiAgY29uc3QgcGFuZWxUcmFuc2l0aW9uID0gcmVmKG51bGwpXG5cbiAgZnVuY3Rpb24gb25Td2lwZSAoZXZ0KSB7XG4gICAgY29uc3QgZGlyID0gcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAndXAnIDogJ2xlZnQnXG4gICAgZ29Ub1BhbmVsQnlPZmZzZXQoKHByb3h5LiRxLmxhbmcucnRsID09PSB0cnVlID8gLTEgOiAxKSAqIChldnQuZGlyZWN0aW9uID09PSBkaXIgPyAxIDogLTEpKVxuICB9XG5cbiAgY29uc3QgcGFuZWxEaXJlY3RpdmVzID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIC8vIGlmIHByb3BzLnN3aXBlYWJsZVxuICAgIHJldHVybiBbIFtcbiAgICAgIFRvdWNoU3dpcGUsXG4gICAgICBvblN3aXBlLFxuICAgICAgdm9pZCAwLFxuICAgICAge1xuICAgICAgICBob3Jpem9udGFsOiBwcm9wcy52ZXJ0aWNhbCAhPT0gdHJ1ZSxcbiAgICAgICAgdmVydGljYWw6IHByb3BzLnZlcnRpY2FsLFxuICAgICAgICBtb3VzZTogdHJ1ZVxuICAgICAgfVxuICAgIF0gXVxuICB9KVxuXG4gIGNvbnN0IHRyYW5zaXRpb25QcmV2ID0gY29tcHV0ZWQoKCkgPT5cbiAgICBwcm9wcy50cmFuc2l0aW9uUHJldiB8fCBgc2xpZGUtJHsgcHJvcHMudmVydGljYWwgPT09IHRydWUgPyAnZG93bicgOiAncmlnaHQnIH1gXG4gIClcblxuICBjb25zdCB0cmFuc2l0aW9uTmV4dCA9IGNvbXB1dGVkKCgpID0+XG4gICAgcHJvcHMudHJhbnNpdGlvbk5leHQgfHwgYHNsaWRlLSR7IHByb3BzLnZlcnRpY2FsID09PSB0cnVlID8gJ3VwJyA6ICdsZWZ0JyB9YFxuICApXG5cbiAgY29uc3QgdHJhbnNpdGlvblN0eWxlID0gY29tcHV0ZWQoXG4gICAgKCkgPT4gYC0tcS10cmFuc2l0aW9uLWR1cmF0aW9uOiAkeyBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24gfW1zYFxuICApXG5cbiAgY29uc3QgY29udGVudEtleSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICB0eXBlb2YgcHJvcHMubW9kZWxWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHByb3BzLm1vZGVsVmFsdWUgPT09ICdudW1iZXInXG4gICAgICA/IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgIDogU3RyaW5nKHByb3BzLm1vZGVsVmFsdWUpXG4gICkpXG5cbiAgY29uc3Qga2VlcEFsaXZlUHJvcHMgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgIGluY2x1ZGU6IHByb3BzLmtlZXBBbGl2ZUluY2x1ZGUsXG4gICAgZXhjbHVkZTogcHJvcHMua2VlcEFsaXZlRXhjbHVkZSxcbiAgICBtYXg6IHByb3BzLmtlZXBBbGl2ZU1heFxuICB9KSlcblxuICBjb25zdCBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIgPSBjb21wdXRlZCgoKSA9PlxuICAgIHByb3BzLmtlZXBBbGl2ZUluY2x1ZGUgIT09IHZvaWQgMFxuICAgIHx8IHByb3BzLmtlZXBBbGl2ZUV4Y2x1ZGUgIT09IHZvaWQgMFxuICApXG5cbiAgd2F0Y2goKCkgPT4gcHJvcHMubW9kZWxWYWx1ZSwgKG5ld1ZhbCwgb2xkVmFsKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBpc1ZhbGlkUGFuZWxOYW1lKG5ld1ZhbCkgPT09IHRydWVcbiAgICAgID8gZ2V0UGFuZWxJbmRleChuZXdWYWwpXG4gICAgICA6IC0xXG5cbiAgICBpZiAoZm9yY2VkUGFuZWxUcmFuc2l0aW9uICE9PSB0cnVlKSB7XG4gICAgICB1cGRhdGVQYW5lbFRyYW5zaXRpb24oXG4gICAgICAgIGluZGV4ID09PSAtMSA/IDAgOiAoaW5kZXggPCBnZXRQYW5lbEluZGV4KG9sZFZhbCkgPyAtMSA6IDEpXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHBhbmVsSW5kZXgudmFsdWUgIT09IGluZGV4KSB7XG4gICAgICBwYW5lbEluZGV4LnZhbHVlID0gaW5kZXhcbiAgICAgIGVtaXQoJ2JlZm9yZVRyYW5zaXRpb24nLCBuZXdWYWwsIG9sZFZhbClcbiAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgZW1pdCgndHJhbnNpdGlvbicsIG5ld1ZhbCwgb2xkVmFsKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG5cbiAgZnVuY3Rpb24gbmV4dFBhbmVsICgpIHsgZ29Ub1BhbmVsQnlPZmZzZXQoMSkgfVxuICBmdW5jdGlvbiBwcmV2aW91c1BhbmVsICgpIHsgZ29Ub1BhbmVsQnlPZmZzZXQoLTEpIH1cblxuICBmdW5jdGlvbiBnb1RvUGFuZWwgKG5hbWUpIHtcbiAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIG5hbWUpXG4gIH1cblxuICBmdW5jdGlvbiBpc1ZhbGlkUGFuZWxOYW1lIChuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgIT09IHZvaWQgMCAmJiBuYW1lICE9PSBudWxsICYmIG5hbWUgIT09ICcnXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYW5lbEluZGV4IChuYW1lKSB7XG4gICAgcmV0dXJuIHBhbmVscy5maW5kSW5kZXgocGFuZWwgPT4ge1xuICAgICAgcmV0dXJuIHBhbmVsLnByb3BzLm5hbWUgPT09IG5hbWVcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gJydcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbmFibGVkUGFuZWxzICgpIHtcbiAgICByZXR1cm4gcGFuZWxzLmZpbHRlcihwYW5lbCA9PiB7XG4gICAgICByZXR1cm4gcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gJydcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW5lbFRyYW5zaXRpb24gKGRpcmVjdGlvbikge1xuICAgIGNvbnN0IHZhbCA9IGRpcmVjdGlvbiAhPT0gMCAmJiBwcm9wcy5hbmltYXRlZCA9PT0gdHJ1ZSAmJiBwYW5lbEluZGV4LnZhbHVlICE9PSAtMVxuICAgICAgPyAncS10cmFuc2l0aW9uLS0nICsgKGRpcmVjdGlvbiA9PT0gLTEgPyB0cmFuc2l0aW9uUHJldi52YWx1ZSA6IHRyYW5zaXRpb25OZXh0LnZhbHVlKVxuICAgICAgOiBudWxsXG5cbiAgICBpZiAocGFuZWxUcmFuc2l0aW9uLnZhbHVlICE9PSB2YWwpIHtcbiAgICAgIHBhbmVsVHJhbnNpdGlvbi52YWx1ZSA9IHZhbFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdvVG9QYW5lbEJ5T2Zmc2V0IChkaXJlY3Rpb24sIHN0YXJ0SW5kZXggPSBwYW5lbEluZGV4LnZhbHVlKSB7XG4gICAgbGV0IGluZGV4ID0gc3RhcnRJbmRleCArIGRpcmVjdGlvblxuXG4gICAgd2hpbGUgKGluZGV4ID4gLTEgJiYgaW5kZXggPCBwYW5lbHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBvcHQgPSBwYW5lbHNbIGluZGV4IF1cblxuICAgICAgaWYgKFxuICAgICAgICBvcHQgIT09IHZvaWQgMFxuICAgICAgICAmJiBvcHQucHJvcHMuZGlzYWJsZSAhPT0gJydcbiAgICAgICAgJiYgb3B0LnByb3BzLmRpc2FibGUgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICB1cGRhdGVQYW5lbFRyYW5zaXRpb24oZGlyZWN0aW9uKVxuICAgICAgICBmb3JjZWRQYW5lbFRyYW5zaXRpb24gPSB0cnVlXG4gICAgICAgIGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgb3B0LnByb3BzLm5hbWUpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGZvcmNlZFBhbmVsVHJhbnNpdGlvbiA9IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpbmRleCArPSBkaXJlY3Rpb25cbiAgICB9XG5cbiAgICBpZiAocHJvcHMuaW5maW5pdGUgPT09IHRydWUgJiYgcGFuZWxzLmxlbmd0aCA+IDAgJiYgc3RhcnRJbmRleCAhPT0gLTEgJiYgc3RhcnRJbmRleCAhPT0gcGFuZWxzLmxlbmd0aCkge1xuICAgICAgZ29Ub1BhbmVsQnlPZmZzZXQoZGlyZWN0aW9uLCBkaXJlY3Rpb24gPT09IC0xID8gcGFuZWxzLmxlbmd0aCA6IC0xKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhbmVsSW5kZXggKCkge1xuICAgIGNvbnN0IGluZGV4ID0gZ2V0UGFuZWxJbmRleChwcm9wcy5tb2RlbFZhbHVlKVxuXG4gICAgaWYgKHBhbmVsSW5kZXgudmFsdWUgIT09IGluZGV4KSB7XG4gICAgICBwYW5lbEluZGV4LnZhbHVlID0gaW5kZXhcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxDb250ZW50Q2hpbGQgKCkge1xuICAgIGNvbnN0IHBhbmVsID0gaXNWYWxpZFBhbmVsTmFtZShwcm9wcy5tb2RlbFZhbHVlKSA9PT0gdHJ1ZVxuICAgICAgJiYgdXBkYXRlUGFuZWxJbmRleCgpXG4gICAgICAmJiBwYW5lbHNbIHBhbmVsSW5kZXgudmFsdWUgXVxuXG4gICAgcmV0dXJuIHByb3BzLmtlZXBBbGl2ZSA9PT0gdHJ1ZVxuICAgICAgPyBbXG4gICAgICAgICAgaChLZWVwQWxpdmUsIGtlZXBBbGl2ZVByb3BzLnZhbHVlLCBbXG4gICAgICAgICAgICBoKFxuICAgICAgICAgICAgICBuZWVkc1VuaXF1ZUtlZXBBbGl2ZVdyYXBwZXIudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/IGdldENhY2hlV2l0aEZuKGNvbnRlbnRLZXkudmFsdWUsICgpID0+ICh7IC4uLlBhbmVsV3JhcHBlciwgbmFtZTogY29udGVudEtleS52YWx1ZSB9KSlcbiAgICAgICAgICAgICAgICA6IFBhbmVsV3JhcHBlcixcbiAgICAgICAgICAgICAgeyBrZXk6IGNvbnRlbnRLZXkudmFsdWUsIHN0eWxlOiB0cmFuc2l0aW9uU3R5bGUudmFsdWUgfSxcbiAgICAgICAgICAgICAgKCkgPT4gcGFuZWxcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICA6IFtcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICBjbGFzczogJ3EtcGFuZWwgc2Nyb2xsJyxcbiAgICAgICAgICAgIHN0eWxlOiB0cmFuc2l0aW9uU3R5bGUudmFsdWUsXG4gICAgICAgICAgICBrZXk6IGNvbnRlbnRLZXkudmFsdWUsXG4gICAgICAgICAgICByb2xlOiAndGFicGFuZWwnXG4gICAgICAgICAgfSwgWyBwYW5lbCBdKVxuICAgICAgICBdXG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYW5lbENvbnRlbnQgKCkge1xuICAgIGlmIChwYW5lbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHMuYW5pbWF0ZWQgPT09IHRydWVcbiAgICAgID8gWyBoKFRyYW5zaXRpb24sIHsgbmFtZTogcGFuZWxUcmFuc2l0aW9uLnZhbHVlIH0sIGdldFBhbmVsQ29udGVudENoaWxkKSBdXG4gICAgICA6IGdldFBhbmVsQ29udGVudENoaWxkKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBhbmVsc0xpc3QgKHNsb3RzKSB7XG4gICAgcGFuZWxzID0gZ2V0Tm9ybWFsaXplZFZOb2RlcyhcbiAgICAgIGhTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuICAgICkuZmlsdGVyKFxuICAgICAgcGFuZWwgPT4gcGFuZWwucHJvcHMgIT09IG51bGxcbiAgICAgICAgJiYgcGFuZWwucHJvcHMuc2xvdCA9PT0gdm9pZCAwXG4gICAgICAgICYmIGlzVmFsaWRQYW5lbE5hbWUocGFuZWwucHJvcHMubmFtZSkgPT09IHRydWVcbiAgICApXG5cbiAgICByZXR1cm4gcGFuZWxzLmxlbmd0aFxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGFuZWxzICgpIHtcbiAgICByZXR1cm4gcGFuZWxzXG4gIH1cblxuICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgT2JqZWN0LmFzc2lnbihwcm94eSwge1xuICAgIG5leHQ6IG5leHRQYW5lbCxcbiAgICBwcmV2aW91czogcHJldmlvdXNQYW5lbCxcbiAgICBnb1RvOiBnb1RvUGFuZWxcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhbmVsSW5kZXgsXG4gICAgcGFuZWxEaXJlY3RpdmVzLFxuXG4gICAgdXBkYXRlUGFuZWxzTGlzdCxcbiAgICB1cGRhdGVQYW5lbEluZGV4LFxuXG4gICAgZ2V0UGFuZWxDb250ZW50LFxuICAgIGdldEVuYWJsZWRQYW5lbHMsXG4gICAgZ2V0UGFuZWxzLFxuXG4gICAgaXNWYWxpZFBhbmVsTmFtZSxcblxuICAgIGtlZXBBbGl2ZVByb3BzLFxuICAgIG5lZWRzVW5pcXVlS2VlcEFsaXZlV3JhcHBlcixcblxuICAgIGdvVG9QYW5lbEJ5T2Zmc2V0LFxuICAgIGdvVG9QYW5lbCxcblxuICAgIG5leHRQYW5lbCxcbiAgICBwcmV2aW91c1BhbmVsXG4gIH1cbn1cbiIsImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IHVzZVBhbmVsQ2hpbGRQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXBhbmVsLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGFiUGFuZWwnLFxuXG4gIHByb3BzOiB1c2VQYW5lbENoaWxkUHJvcHMsXG5cbiAgc2V0dXAgKF8sIHsgc2xvdHMgfSkge1xuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiAncS10YWItcGFuZWwnLCByb2xlOiAndGFicGFuZWwnIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcbmltcG9ydCB1c2VQYW5lbCwgeyB1c2VQYW5lbFByb3BzLCB1c2VQYW5lbEVtaXRzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtcGFuZWwuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaERpciB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVRhYlBhbmVscycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VQYW5lbFByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wc1xuICB9LFxuXG4gIGVtaXRzOiB1c2VQYW5lbEVtaXRzLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsIHZtLnByb3h5LiRxKVxuXG4gICAgY29uc3QgeyB1cGRhdGVQYW5lbHNMaXN0LCBnZXRQYW5lbENvbnRlbnQsIHBhbmVsRGlyZWN0aXZlcyB9ID0gdXNlUGFuZWwoKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS10YWItcGFuZWxzIHEtcGFuZWwtcGFyZW50J1xuICAgICAgKyAoaXNEYXJrLnZhbHVlID09PSB0cnVlID8gJyBxLXRhYi1wYW5lbHMtLWRhcmsgcS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB1cGRhdGVQYW5lbHNMaXN0KHNsb3RzKVxuXG4gICAgICByZXR1cm4gaERpcihcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSxcbiAgICAgICAgZ2V0UGFuZWxDb250ZW50KCksXG4gICAgICAgICdwYW4nLFxuICAgICAgICBwcm9wcy5zd2lwZWFibGUsXG4gICAgICAgICgpID0+IHBhbmVsRGlyZWN0aXZlcy52YWx1ZVxuICAgICAgKVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtZGlhbG9nXG4gICAgdHJhbnNpdGlvbi1zaG93PVwiZmFkZVwiXG4gICAgdHJhbnNpdGlvbi1oaWRlPVwiZmFkZVwiXG4gICAgcG9zaXRpb249XCJ0b3BcIlxuICA+XG4gICAgPHEtY2FyZCBib3JkZXJlZCBjbGFzcz1cInEtbXQtbGdcIiBzdHlsZT1cIndpZHRoOiA3MDBweDsgbWF4LXdpZHRoOiA4MHZ3OyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzAsMzAsMzApOyBcIj5cbiAgICAgIDxxLWNhcmQtc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5TZXR0aW5nczwvZGl2PlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxxLWNhcmQgY2xhc3M9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgICAgIDxxLXRhYnNcblxuICAgICAgICAgICAgdi1tb2RlbD1cInRhYlwiXG4gICAgICAgICAgICBkZW5zZVxuICAgICAgICAgICAgYWN0aXZlLWNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgaW5kaWNhdG9yLWNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICBhbGlnbj1cImp1c3RpZnlcIlxuICAgICAgICAgICAgbmFycm93LWluZGljYXRvclxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxxLXRhYiBuYW1lPVwiaG9tZXBhZ2VcIiBsYWJlbD1cIkhvbWVwYWdlXCIgLz5cbiAgICAgICAgICAgIDxxLXRhYiBuYW1lPVwicXVldWVcIiBsYWJlbD1cIlF1ZXVlXCIgLz5cbiAgICAgICAgICA8L3EtdGFicz5cblxuICAgICAgICAgIDxxLXNlcGFyYXRvciAvPlxuXG4gICAgICAgICAgPHEtdGFiLXBhbmVscyB2LW1vZGVsPVwidGFiXCIgYW5pbWF0ZWQgY2xhc3M9XCJ0cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJob21lcGFnZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLXBhLW1kIGNvbFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1hbGwgcm93IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgdGV4dC1oNlwiPlxuICAgICAgICAgICAgICAgICAgICAgIEhvbWVwYWdlIE1vZGU6XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJzaGFwZVwiIHZhbD1cIkluZmluaXRlIFNjcm9sbFwiIGxhYmVsPVwiSW5maW5pdGUgU2Nyb2xsXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cS1yYWRpbyB2LW1vZGVsPVwic2hhcGVcIiB2YWw9XCJQYWdpbmF0aW9uXCIgbGFiZWw9XCJQYWdpbmF0aW9uXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9xLXRhYi1wYW5lbD5cblxuICAgICAgICAgICAgPHEtdGFiLXBhbmVsIG5hbWU9XCJxdWV1ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicS1wYS1tZCBjb2xcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWFsbCByb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTYgdGV4dC1oNlwiPlxuICAgICAgICAgICAgICAgICAgICBQbGF5IEJ1dHRvbiBCZWhhdmlvcjpcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxxLXJhZGlvIHYtbW9kZWw9XCJzaGFwZVwiIHZhbD1cIkluZmluaXRlIFNjcm9sbFwiIGxhYmVsPVwiSW5maW5pdGUgU2Nyb2xsXCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHEtcmFkaW8gdi1tb2RlbD1cInNoYXBlXCIgdmFsPVwiUGFnaW5hdGlvblwiIGxhYmVsPVwiUGFnaW5hdGlvblwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcS10YWItcGFuZWw+XG4gICAgICAgICAgPC9xLXRhYi1wYW5lbHM+XG4gICAgICAgIDwvcS1jYXJkPlxuICAgICAgPC9xLWNhcmQtc2VjdGlvbj5cbiAgICA8L3EtY2FyZD5cbiAgPC9xLWRpYWxvZz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQge2RlZmluZUNvbXBvbmVudH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ1NldHRpbmdzTW9kYWwnXG59KTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IHRhYiA9IHJlZignJylcbmNvbnN0IHNoYXBlID0gcmVmKCcnKVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLWRpYWxvZ1xuICAgIHRyYW5zaXRpb24tc2hvdz1cImZhZGVcIlxuICAgIHRyYW5zaXRpb24taGlkZT1cImZhZGVcIlxuICAgIHBvc2l0aW9uPVwidG9wXCJcbiAgPlxuICAgIDxxLWNhcmQgYm9yZGVyZWQgY2xhc3M9XCJxLW10LWxnXCIgc3R5bGU9XCJ3aWR0aDogNzAwcHg7IG1heC13aWR0aDogODB2dzsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2Niw2Niw2NiwwLjk3KTsgXCI+XG4gICAgICA8cS1jYXJkLXNlY3Rpb24+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg1XCI+QWJvdXQ8L2Rpdj5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgICA8cS1zZXBhcmF0b3IgLz5cblxuICAgICAgPHEtY2FyZC1zZWN0aW9uPlxuICAgICAgICA8cS1jYXJkIGNsYXNzPVwidHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICA8cS10YWJzXG5cbiAgICAgICAgICAgIHYtbW9kZWw9XCJ0YWJcIlxuICAgICAgICAgICAgZGVuc2VcbiAgICAgICAgICAgIGFjdGl2ZS1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIGluZGljYXRvci1jb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgYWxpZ249XCJqdXN0aWZ5XCJcbiAgICAgICAgICAgIG5hcnJvdy1pbmRpY2F0b3JcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cS10YWIgbmFtZT1cIm1lZGlhXCIgbGFiZWw9XCJNZWRpYVwiIC8+XG4gICAgICAgICAgICA8cS10YWIgbmFtZT1cImNvZGVcIiBsYWJlbD1cIkNvZGVcIiAvPlxuICAgICAgICAgIDwvcS10YWJzPlxuXG4gICAgICAgICAgPHEtc2VwYXJhdG9yIC8+XG5cbiAgICAgICAgICA8cS10YWItcGFuZWxzIHYtbW9kZWw9XCJ0YWJcIiBhbmltYXRlZCBjbGFzcz1cInRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICA8cS10YWItcGFuZWwgbmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj5Tb3VyY2UgJiBDcmVkaXRzPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cS1saXN0IGJvcmRlcmVkIHNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9ueWFhLnNpL3ZpZXcvMTU3MDczMFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIG92ZXJsaW5lPk11c2ljIEZpbGVzICYgQ29sbGVjdGlvbjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsPltDb25ub3JfQ1pdIFRMTUMgdjI8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vdGh3aWtpLmNjL1wiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIG92ZXJsaW5lPk11c2ljIE1ldGFkYXRhPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWw+VGh3aWtpLmNjPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuICAgICAgICAgICAgICA8L3EtbGlzdD5cbiAgICAgICAgICAgIDwvcS10YWItcGFuZWw+XG5cbiAgICAgICAgICAgIDxxLXRhYi1wYW5lbCBuYW1lPVwiY29kZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWg2XCI+U291cmNlPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cS1saXN0IGJvcmRlcmVkIHNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NxejI2OS9UbG1jSW5mb1Byb3ZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+VExNQyBEYXRhIFByZXByb2Nlc3NvcjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gbGluZXM9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUHl0aG9uM1xuICAgICAgICAgICAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3NxejI2OS9UbG1jSW5mb1Byb3ZpZGVyXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+VExNQyBUYWdnZXIgKFRod2lraSk8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIFB5dGhvbjNcbiAgICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDwvcS1pdGVtPlxuXG4gICAgICAgICAgICAgICAgPHEtaXRlbSBjbGlja2FibGUgdi1yaXBwbGUgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9zcXoyNjkvbXVzaWMtcGxheWVyXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+RnJvbnRlbmQ8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPlZ1ZS5qcyAzICsgQ29tcG9zaXRpb24gQVBJICsgVHlwZXNjcmlwdCArIFF1YXNhcjwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vc3F6MjY5L3RsbWMtcGxheWVyXCI+XG4gICAgICAgICAgICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tbGFiZWwgbGluZXM9XCIxXCI+QmFja2VuZDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gbGluZXM9XCIyXCI+VmFyaW91czwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1weS1zbSB0cmFuc3BhcmVudFwiPjwvcS1zZXBhcmF0b3I+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNlwiPkFQSSBFeHBsb3JlcjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cS1saXN0IGJvcmRlcmVkIHNlcGFyYXRvcj5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiA6aHJlZj1cIm11c2ljRGF0YVN3YWdnZXJVcmxcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIj5NdXNpYyBEYXRhIEFQSTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gbGluZXM9XCIyXCI+QVNQLk5FVCBDb3JlICsgUG9zdGdyZVNRTDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cblxuICAgICAgICAgICAgICAgIDxxLWl0ZW0gY2xpY2thYmxlIHYtcmlwcGxlIHRhcmdldD1cIl9ibGFua1wiIDpocmVmPVwiYXV0aFN3YWdnZXJVcmxcIj5cbiAgICAgICAgICAgICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBsaW5lcz1cIjFcIj5BdXRoZW50aWNhdGlvbiBBUEk8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHEtaXRlbS1sYWJlbCBjYXB0aW9uIGxpbmVzPVwiMlwiPkFTUC5ORVQgQ29yZSArIFBvc3RncmVTUUw8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPC9xLWl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8cS1pdGVtIGNsaWNrYWJsZSB2LXJpcHBsZSB0YXJnZXQ9XCJfYmxhbmtcIiA6aHJlZj1cInBsYXlsaXN0U3dhZ2dlclVybFwiPlxuICAgICAgICAgICAgICAgICAgPHEtaXRlbS1zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGxpbmVzPVwiMVwiPlBsYXlsaXN0IEFQSTwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8cS1pdGVtLWxhYmVsIGNhcHRpb24gbGluZXM9XCIyXCI+QVNQLk5FVCBDb3JlICsgUG9zdGdyZVNRTDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L3EtaXRlbT5cbiAgICAgICAgICAgICAgPC9xLWxpc3Q+XG4gICAgICAgICAgICA8L3EtdGFiLXBhbmVsPlxuICAgICAgICAgIDwvcS10YWItcGFuZWxzPlxuICAgICAgICA8L3EtY2FyZD5cbiAgICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gICAgPC9xLWNhcmQ+XG4gIDwvcS1kaWFsb2c+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tIFwic3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyXCI7XG5cbmNvbnN0IHRhYiA9IHJlZignbWVkaWEnKTtcblxuY29uc3QgYXBpQ29uZmlnUHJvdmlkZXIgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpO1xuY29uc3QgYXV0aFN3YWdnZXJVcmwgPSBgJHthcGlDb25maWdQcm92aWRlci5iYXNlUGF0aH0vc3dhZ2dlci9hdXRoYDtcbmNvbnN0IG11c2ljRGF0YVN3YWdnZXJVcmwgPSBgJHthcGlDb25maWdQcm92aWRlci5iYXNlUGF0aH0vc3dhZ2dlci9tdXNpYy1kYXRhYFxuY29uc3QgcGxheWxpc3RTd2FnZ2VyVXJsID0gYCR7YXBpQ29uZmlnUHJvdmlkZXIuYmFzZVBhdGh9L3N3YWdnZXIvcGxheWxpc3RgXG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxxLWxpc3Qgdi1pZj1cImlzTG9nZ2VkSW5cIj5cbiAgICAgIDxxLWl0ZW0gdi1mb3I9XCJsaW5rIGluIGNvbGxlY3Rpb25OYXZpZ2F0aW9uc1wiIDprZXk9XCJsaW5rLnRleHRcIlxuICAgICAgICAgICAgICB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuM1xuICAgICAgICAgICAgICA6dG89XCJsaW5rLnJvdXRlXCIgZXhhY3RcbiAgICAgICAgICAgICAgYWN0aXZlLWNsYXNzPVwidGV4dC13aGl0ZSBiZy1ncmV5LTggdGV4dC13ZWlnaHQtYm9sZGVyXCI+XG4gICAgICAgIDwhLS0gICAgICAgICAgICA6YWN0aXZlPVwiY3VycmVudFBhdGggPT09IGxpbmsucm91dGUubmFtZVwiLS0+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvbiA6bmFtZT1cImxpbmsuaWNvblwiIHNpemU9XCIyNHB4XCIvPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgICA8cS1pdGVtLXNlY3Rpb24+XG4gICAgICAgICAgPHEtaXRlbS1sYWJlbD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgIHt7bGluay50ZXh0fX1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3EtaXRlbS1sYWJlbD5cbiAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj5cbiAgICAgIDwvcS1pdGVtPlxuXG48IS0tICAgICAgPHEtaXRlbSB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuMz4tLT5cbjwhLS0gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+LS0+XG48IS0tICAgICAgICAgIDxxLWljb24gOm5hbWU9XCJvdXRsaW5lZFBsYXlsaXN0QWRkXCIgc2l6ZT1cIjI0cHhcIi8+LS0+XG48IS0tICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPi0tPlxuPCEtLSAgICAgICAgPHEtaXRlbS1zZWN0aW9uPi0tPlxuPCEtLSAgICAgICAgICA8cS1pdGVtLWxhYmVsPi0tPlxuPCEtLSAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bVwiPi0tPlxuPCEtLSAgICAgICAgICAgIENyZWF0ZSBQbGF5bGlzdC0tPlxuPCEtLSAgICAgICAgICA8L3NwYW4+LS0+XG48IS0tICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPi0tPlxuPCEtLSAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj4tLT5cbjwhLS0gICAgICA8L3EtaXRlbT4tLT5cblxuICAgICAgPHEtaXRlbSB2LWZvcj1cIml0ZW0gaW4gcGxheWxpc3RJdGVtc1wiIDprZXk9XCJpdGVtXCJcbiAgICAgICAgICAgICAgdi1yaXBwbGUgY2xpY2thYmxlIDppbnNldC1sZXZlbD0wLjMgQGNsaWNrPVwiZ290b1BsYXlsaXN0KGl0ZW0pXCI+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbiBhdmF0YXI+XG4gICAgICAgICAgPHEtaWNvbiA6bmFtZT1cIm91dGxpbmVkUGxheWxpc3RQbGF5XCIgc2l6ZT1cIjI0cHhcIi8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC13ZWlnaHQtbWVkaXVtXCI+XG4gICAgICAgICAgICB7e2l0ZW0ubmFtZX19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG5cbiAgICA8cS1saXN0IHYtaWY9XCIhaXNMb2dnZWRJblwiPlxuICAgICAgPHEtaXRlbSA6aW5zZXQtbGV2ZWw9XCIwLjNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YSBjbGFzcz1cImxpbmtcIiBAY2xpY2s9XCJzaG93TG9naW5EaWFsb2dcIj5Mb2cgaW48L2E+IG9yXG4gICAgICAgICAgPGEgY2xhc3M9XCJsaW5rXCIgQGNsaWNrPVwic2hvd1JlZ2lzdGVyRGlhbG9nXCI+U2lnbiB1cDwvYT5cbiAgICAgICAgICB0byBjcmVhdGUgYW5kIG1hbmFnZSBwbGF5bGlzdHNcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3EtaXRlbT5cbiAgICA8L3EtbGlzdD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiIHNldHVwPlxuaW1wb3J0IHtcbiAgb3V0bGluZWRGYXZvcml0ZUJvcmRlcixcbiAgb3V0bGluZWRIaXN0b3J5LFxuICBvdXRsaW5lZExpYnJhcnlNdXNpYyxcbiAgb3V0bGluZWRQbGF5bGlzdEFkZCxcbiAgb3V0bGluZWRQbGF5bGlzdFBsYXlcbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnO1xuaW1wb3J0IHt1c2VBdXRoU3RvcmV9IGZyb20gJ3N0b3Jlcy9hdXRoRGF0YVN0b3JlJztcbmltcG9ydCB7Y29tcHV0ZWQsIG9uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IFJlZ2lzdHJhdGlvbk1vZGFsIGZyb20gJ2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uTW9kYWwudnVlJztcbmltcG9ydCB7dXNlUXVhc2FyfSBmcm9tICdxdWFzYXInO1xuaW1wb3J0IHtQbGF5bGlzdEFwaSwgUGxheWxpc3RSZWFkRHRvfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQgTG9naW5Nb2RhbCBmcm9tICdjb21wb25lbnRzL0xvZ2luTW9kYWwudnVlJztcbmltcG9ydCB7QXBpQ29uZmlnUHJvdmlkZXJ9IGZyb20gJ3NyYy91dGlscy9BcGlDb25maWdQcm92aWRlcic7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge3VzZVBsYXlsaXN0U3RvcmV9IGZyb20gXCJzdG9yZXMvcGxheWxpc3RTdG9yZVwiO1xuXG5jb25zdCBhdXRoU3RvcmUgPSB1c2VBdXRoU3RvcmUoKTtcbmNvbnN0ICRxID0gdXNlUXVhc2FyKCk7XG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbmNvbnN0IHBsYXlsaXN0U3RvcmUgPSB1c2VQbGF5bGlzdFN0b3JlKCk7XG5cbmNvbnN0IHBsYXlsaXN0SXRlbXMgPSBjb21wdXRlZCgoKSA9PiBwbGF5bGlzdFN0b3JlLmdldFBsYXlsaXN0cyk7XG5cbmNvbnN0IGlzTG9nZ2VkSW4gPSBjb21wdXRlZCgoKSA9PiBhdXRoU3RvcmUuaXNMb2dnZWRJbik7XG5cbmNvbnN0IHBsYXlsaXN0QXBpID0gbmV3IFBsYXlsaXN0QXBpKEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKCkpO1xuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBpZiAoaXNMb2dnZWRJbi52YWx1ZSkge1xuICAgIGxldCBhbGxQbGF5bGlzdHMgPSBhd2FpdCBwbGF5bGlzdEFwaS5nZXRDdXJyZW50VXNlclBsYXlsaXN0KCk7XG4gICAgbGV0IG5vcm1hbFBsYXlsaXN0cyA9IGFsbFBsYXlsaXN0cy5maWx0ZXIocCA9PiBwLnR5cGUgPT0gJ05vcm1hbCcpO1xuICAgIHBsYXlsaXN0U3RvcmUuc2V0UGxheWxpc3RzKG5vcm1hbFBsYXlsaXN0cyk7XG4gIH1cbn0pXG5cbmNvbnN0IGNvbGxlY3Rpb25OYXZpZ2F0aW9ucyA9IFtcbiAge1xuICAgIHRleHQ6ICdMaWJyYXJ5JyxcbiAgICBpY29uOiBvdXRsaW5lZExpYnJhcnlNdXNpYyxcbiAgICByb3V0ZTogeyBuYW1lOiAnbGlicmFyeScgfVxuICB9LFxuICB7XG4gICAgdGV4dDogJ0hpc3RvcnknLFxuICAgIGljb246IG91dGxpbmVkSGlzdG9yeSxcbiAgICByb3V0ZTogeyBuYW1lOiAnaGlzdG9yeScgfVxuICB9LFxuICB7XG4gICAgdGV4dDogJ0Zhdm9yaXRlJyxcbiAgICBpY29uOiBvdXRsaW5lZEZhdm9yaXRlQm9yZGVyLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdmYXZvcml0ZScgfVxuICB9XG5dXG5cbmNvbnN0IGdvdG9QbGF5bGlzdCA9IChwbGF5bGlzdDogUGxheWxpc3RSZWFkRHRvKSA9PiB7XG4gIHJvdXRlci5wdXNoKHtuYW1lOiAncGxheWxpc3QnLCBwYXJhbXM6IHsgcGxheWxpc3RJZDogcGxheWxpc3QuaWQgfX0pXG59XG5cbmNvbnN0IHNob3dSZWdpc3RlckRpYWxvZyA9ICgpID0+IHtcbiAgJHEuZGlhbG9nKHtcbiAgICBjb21wb25lbnQ6IFJlZ2lzdHJhdGlvbk1vZGFsXG4gIH0pO1xufVxuXG5jb25zdCBzaG93TG9naW5EaWFsb2cgPSAoKSA9PiB7XG4gICRxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBMb2dpbk1vZGFsXG4gIH0pO1xufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ubGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuPCEtLSAgICA8cS1saXN0IHBhZGRpbmc+LS0+XG48IS0tICAgICAgPHEtaXRlbT4tLT5cbjwhLS0gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj4tLT5cbjwhLS0gICAgICAgICAgPHEtaXRlbS1sYWJlbD4tLT5cbjwhLS0gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtd2VpZ2h0LW1lZGl1bSB0ZXh0LWg1XCI+LS0+XG48IS0tICAgICAgICAgICAgICBMT0dPIEhFUkUtLT5cbjwhLS0gICAgICAgICAgICA8L3NwYW4+LS0+XG48IS0tICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPi0tPlxuPCEtLSAgICAgICAgPC9xLWl0ZW0tc2VjdGlvbj4tLT5cbjwhLS0gICAgICA8L3EtaXRlbT4tLT5cbjwhLS0gICAgPC9xLWxpc3Q+LS0+XG5cbiAgICA8cS1saXN0IHBhZGRpbmc+XG4gICAgICA8cS1pdGVtIHYtZm9yPVwibGluayBpbiBuYXZpZ2F0aW9uc1wiIDprZXk9XCJsaW5rLnRleHRcIlxuICAgICAgICAgICAgICB2LXJpcHBsZSBjbGlja2FibGUgOmluc2V0LWxldmVsPTAuM1xuICAgICAgICAgICAgICA6dG89XCJsaW5rLnJvdXRlXCIgZXhhY3RcbiAgICAgICAgICAgICAgOmFjdGl2ZT1cImN1cnJlbnRQYXRoID09PSBsaW5rLnJvdXRlLm5hbWVcIlxuICAgICAgICAgICAgICBhY3RpdmUtY2xhc3M9XCJ0ZXh0LXdoaXRlIGJnLWdyZXktOCB0ZXh0LXdlaWdodC1ib2xkZXJcIj5cbiAgICAgICAgPHEtaXRlbS1zZWN0aW9uIGF2YXRhcj5cbiAgICAgICAgICA8cS1pY29uIDpuYW1lPVwibGluay5pY29uXCIgc2l6ZT1cIjI0cHhcIi8+XG4gICAgICAgIDwvcS1pdGVtLXNlY3Rpb24+XG4gICAgICAgIDxxLWl0ZW0tc2VjdGlvbj5cbiAgICAgICAgICA8cS1pdGVtLWxhYmVsPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXdlaWdodC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAge3tsaW5rLnRleHR9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvcS1pdGVtLWxhYmVsPlxuICAgICAgICA8L3EtaXRlbS1zZWN0aW9uPlxuICAgICAgPC9xLWl0ZW0+XG4gICAgPC9xLWxpc3Q+XG4gICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1teS1zbVwiIC8+XG5cbiAgICA8RHJhd2VyUGxheWxpc3RMaXN0PjwvRHJhd2VyUGxheWxpc3RMaXN0PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQge2RlZmluZUNvbXBvbmVudH0gZnJvbSAndnVlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgbmFtZTogJ0RyYXdlck5hdmlnYXRpb24nLFxuICBjb21wb25lbnRzOiB7XG4gIH1cbn0pXG48L3NjcmlwdD5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7XG4gIG91dGxpbmVkSG9tZSxcbiAgb3V0bGluZWRTZWFyY2gsXG4gIG91dGxpbmVkUmFkaW9cbn0gZnJvbSAnQHF1YXNhci9leHRyYXMvbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge2NvbXB1dGVkfSBmcm9tICd2dWUnO1xuaW1wb3J0IERyYXdlclBsYXlsaXN0TGlzdCBmcm9tICdjb21wb25lbnRzL0RyYXdlclBsYXlsaXN0TGlzdC52dWUnO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuY29uc3QgY3VycmVudFBhdGggPSBjb21wdXRlZCgoKSA9PiB7XG4gIHJldHVybiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLm5hbWU7XG59KVxuXG5jb25zdCBuYXZpZ2F0aW9ucyA9IFtcbiAge1xuICAgIHRleHQ6ICdIb21lJyxcbiAgICBpY29uOiBvdXRsaW5lZEhvbWUsXG4gICAgcm91dGU6IHsgbmFtZTogJ2hvbWVQYWdpbmF0ZScgfVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1NlYXJjaCcsXG4gICAgaWNvbjogb3V0bGluZWRTZWFyY2gsXG4gICAgcm91dGU6IHsgbmFtZTogJ3NlYXJjaCcgfVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1JhZGlvJyxcbiAgICBpY29uOiBvdXRsaW5lZFJhZGlvLFxuICAgIHJvdXRlOiB7IG5hbWU6ICdyYWRpbycgfVxuICB9XG5dXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgPHEtbGF5b3V0IHZpZXc9XCJsSGggTHBSIGZGZlwiPlxuICAgIDxxLWhlYWRlciBpZD1cImhlYWRlclwiIGJvcmRlcmVkPlxuICAgICAgPHEtdG9vbGJhcj5cbiAgICAgICAgPHEtdG9vbGJhci10aXRsZT5cbiAgICAgICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCBzaXplPVwibGdcIiBjb2xvcj1cIndoaXRlXCIgOmljb249XCJvdXRsaW5lZEFycm93QmFja1wiIEBjbGljaz1cImJhY2tcIj5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IHNpemU9XCJsZ1wiIGNvbG9yPVwid2hpdGVcIiA6aWNvbj1cIm91dGxpbmVkQXJyb3dGb3J3YXJkXCIgQGNsaWNrPVwiZm9yd2FyZFwiPlxuICAgICAgICAgIDwvcS1idG4+XG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxuXG4gICAgICAgIDxxLXNwYWNlIC8+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLXNtIHJvdyBpdGVtcy1jZW50ZXIgbm8td3JhcFwiPlxuICAgICAgICAgIDxxLWJ0biByb3VuZCBkZW5zZSBmbGF0IDppY29uPVwib3V0bGluZWRJbmZvXCIgdi1pZj1cIiRxLnNjcmVlbi5ndC5zbVwiIEBjbGljaz1cInNob3dBYm91dERpYWxvZ1wiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5BYm91dDwvcS10b29sdGlwPlxuICAgICAgICAgIDwvcS1idG4+XG5cbiAgICAgICAgICA8cS1idG4gcm91bmQgZGVuc2UgZmxhdCA6aWNvbj1cIm91dGxpbmVkU2V0dGluZ3NcIiB2LWlmPVwiJHEuc2NyZWVuLmd0LnNtXCIgQGNsaWNrPVwic2hvd1NldHRpbmdzRGlhbG9nXCI+XG4gICAgICAgICAgICA8cS10b29sdGlwPlNldHRpbmdzPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxVc2VyQWNjb3VudEJ1dHRvbj48L1VzZXJBY2NvdW50QnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcS10b29sYmFyPlxuXG4gICAgPC9xLWhlYWRlcj5cblxuICAgIDxxLWRyYXdlciBzaG93LWlmLWFib3ZlIHNpZGU9XCJsZWZ0XCIgOndpZHRoPVwiMjUwXCI+XG4gICAgICA8ZHJhd2VyLW5hdmlnYXRpb24+PC9kcmF3ZXItbmF2aWdhdGlvbj5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtZHJhd2VyIHYtbW9kZWw9XCJzaG93UXVldWVcIiBzaWRlPVwicmlnaHRcIiA6d2lkdGg9XCIyNzBcIj5cbiAgICAgIDxkcmF3ZXItcXVldWUgaWQ9XCJxdWV1ZS1kcmF3ZXJcIj48L2RyYXdlci1xdWV1ZT5cbiAgICA8L3EtZHJhd2VyPlxuXG4gICAgPHEtcGFnZS1jb250YWluZXIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kOiBiZ0dyYWRpZW50IH1cIiBzdHlsZT1cInRyYW5zaXRpb246IGJhY2tncm91bmQsIDI1MG1zLCBsaW5lYXIgIWltcG9ydGFudDtcIj5cbiAgICAgIDxyb3V0ZXItdmlldyB2LXNsb3Q9XCJ7IENvbXBvbmVudCB9XCI+XG4gICAgICAgIDxrZWVwLWFsaXZlIDppbmNsdWRlPVwiWydIb21lUGFnZVBhZ2luYXRlJywgJ0hvbWVQYWdlSW5mU2Nyb2xsJywgJ0FydGlzdFBhZ2UnXVwiPlxuICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiQ29tcG9uZW50XCI+PC9jb21wb25lbnQ+XG4gICAgICAgIDwva2VlcC1hbGl2ZT5cbiAgICAgIDwvcm91dGVyLXZpZXc+XG4gICAgPC9xLXBhZ2UtY29udGFpbmVyPlxuXG4gICAgPHEtZm9vdGVyIGNsYXNzPVwiYm9yZGVyLXRvcC10aGluXCI+XG4gICAgICA8cGxheWVyLWNvbnRyb2w+PC9wbGF5ZXItY29udHJvbD5cbiAgICA8L3EtZm9vdGVyPlxuXG4gIDwvcS1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJztcbmltcG9ydCBEcmF3ZXJOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvRHJhd2VyTmF2aWdhdGlvbi52dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTWFpbkxheW91dCcsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBEcmF3ZXJOYXZpZ2F0aW9uXG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZEluZm8sXG4gIG91dGxpbmVkQXJyb3dGb3J3YXJkLFxuICBvdXRsaW5lZEFycm93QmFjayxcbiAgb3V0bGluZWRTZXR0aW5nc1xufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cbmltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgeyB1c2VRdWFzYXIsIHNldENzc1ZhciB9IGZyb20gJ3F1YXNhcic7XG5pbXBvcnQgUGxheWVyQ29udHJvbCBmcm9tICdjb21wb25lbnRzL1BsYXllckNvbnRyb2wudnVlJztcbmltcG9ydCB7dXNlUXVldWVEaXNwbGF5U3RvcmV9IGZyb20gJ3N0b3Jlcy9zaG93UXVldWUnO1xuaW1wb3J0IERyYXdlclF1ZXVlIGZyb20gJ2NvbXBvbmVudHMvRHJhd2VyUXVldWUudnVlJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICd2dWUtcm91dGVyJztcbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQgVXNlckFjY291bnRCdXR0b24gZnJvbSAnY29tcG9uZW50cy9Vc2VyQWNjb3VudEJ1dHRvbi52dWUnO1xuaW1wb3J0IFNldHRpbmdzTW9kYWwgZnJvbSAnY29tcG9uZW50cy9TZXR0aW5nc01vZGFsLnZ1ZSc7XG5pbXBvcnQgQWJvdXREaWFsb2cgZnJvbSAnY29tcG9uZW50cy9BYm91dERpYWxvZy52dWUnXG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBiZ1N0eWxlU3RvcmUgPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IGJnR3JhZGllbnQxID0gY29tcHV0ZWQoKCkgPT4gYmdTdHlsZVN0b3JlLmdldEdyYWRpZW50MSk7XG5jb25zdCBiZ0dyYWRpZW50MiA9IGNvbXB1dGVkKCgpID0+IGJnU3R5bGVTdG9yZS5nZXRHcmFkaWVudDIpXG5jb25zdCBiZ0dyYWRpZW50ID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgxODBkZWcsICR7YmdHcmFkaWVudDEudmFsdWV9IDAlLCAke2JnR3JhZGllbnQyLnZhbHVlfSAzMCUsIHJnYmEoMCwwLDAsMSkgNTAlKWA7XG59KTtcbmNvbnN0IGJhY2sgPSAoKSA9PiB7XG4gIHJvdXRlci5iYWNrKCk7XG59XG5cbmNvbnN0IGZvcndhcmQgPSAoKSA9PiB7XG4gIHJvdXRlci5mb3J3YXJkKCk7XG59XG5cbmNvbnN0IHF1ZXVlRGlzcGxheVN0b3JlID0gdXNlUXVldWVEaXNwbGF5U3RvcmUoKTtcblxuY29uc3Qgc2hvd1F1ZXVlID0gY29tcHV0ZWQoKCkgPT4gcXVldWVEaXNwbGF5U3RvcmUuc2hvdylcblxuY29uc3QgcSA9IHVzZVF1YXNhcigpO1xucS5kYXJrLnNldCh0cnVlKTtcbnNldENzc1ZhcigncHJpbWFyeScsICcjMDAwMDAwJylcblxuY29uc3Qgc2hvd1NldHRpbmdzRGlhbG9nID0gKCkgPT4ge1xuICBxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBTZXR0aW5nc01vZGFsXG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd0Fib3V0RGlhbG9nID0gKCkgPT4ge1xuICBxLmRpYWxvZyh7XG4gICAgY29tcG9uZW50OiBBYm91dERpYWxvZ1xuICB9KTtcbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiNxLWFwcCA+IGRpdiA+IGRpdjpudGgtY2hpbGQoMykgPiBhc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG5cbiNoZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NCwgNTQsIDAuNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTtcbn1cblxuI3F1ZXVlLWRyYXdlciB7XG4gIC8qYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTsqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NCwgNTQsIDAuNjMpO1xuICAvKmJhY2tkcm9wLWZpbHRlcjogYmx1cigyNXB4KTsqL1xufVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJydW50aW1lLkJhc2VBUEkiLCJydW50aW1lLkpTT05BcGlSZXNwb25zZSIsIm9mZnNldCIsInN0eWxlIiwicG9zaXRpb24iLCJzaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJ0aW1lciIsIl9fZGVmYXVsdF9fIiwic3RlcCIsImRyYWdnaW5nIiwiY2xhc3NlcyIsInJhdGlvIiwic2hvdyIsImZvY3VzIiwicmVmIiwidmFsaWQiLCJjb21wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQXlETyxTQUFTLG9CQUFvQixNQUF3QjtBQUNqRCxTQUFBLHlCQUF5QixJQUFXO0FBQy9DO0FBRWdCLFNBQUEseUJBQXlCLE1BQVcscUJBQTJDO0FBQ3RGLE1BQUEsU0FBUyxVQUFlLFNBQVMsTUFBTztBQUNsQyxXQUFBO0FBQUEsRUFDWDtBQUNPLFNBQUE7QUFBQSxJQUVILFlBQVksQ0FBQyxPQUFPLE1BQU0sVUFBVSxJQUFJLFNBQVksS0FBSztBQUFBLElB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

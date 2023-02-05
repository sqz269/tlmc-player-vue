import { k as createComponent, c as computed, h, l as hSlot, t as useDarkProps, ah as useRouterLinkProps, x as useDark, b5 as useRouterLink, r as ref, g as getCurrentInstance, aF as isKeyCode, a9 as stopAndPrevent, p as hUniqueSlot, u as useModelToggleProps, as as useTransitionProps, v as useModelToggleEmits, aI as useTick, y as useTimeout, aX as useTransition, z as useModelToggle, aY as usePortal, w as watch, b6 as addFocusout, a6 as position, b7 as removeFocusout, b8 as removeEscapeKey, aZ as getScrollTarget, b9 as closePortalMenus, af as Transition, n as onBeforeUnmount, ba as addEscapeKey, ay as addFocusFn, bb as childHasFocus } from "./index.47bc951f.js";
import { u as useAnchorProps, v as validatePosition, a as validateOffset, b as useScrollTarget, d as useAnchor, p as parsePosition, r as removeClickOutside, s as setPosition, e as addClickOutside } from "./position-engine.16a45534.js";
var QItemSection = createComponent({
  name: "QItemSection",
  props: {
    avatar: Boolean,
    thumbnail: Boolean,
    side: Boolean,
    top: Boolean,
    noWrap: Boolean
  },
  setup(props, { slots }) {
    const classes = computed(
      () => `q-item__section column q-item__section--${props.avatar === true || props.side === true || props.thumbnail === true ? "side" : "main"}` + (props.top === true ? " q-item__section--top justify-start" : " justify-center") + (props.avatar === true ? " q-item__section--avatar" : "") + (props.thumbnail === true ? " q-item__section--thumbnail" : "") + (props.noWrap === true ? " q-item__section--nowrap" : "")
    );
    return () => h("div", { class: classes.value }, hSlot(slots.default));
  }
});
var QItem = createComponent({
  name: "QItem",
  props: {
    ...useDarkProps,
    ...useRouterLinkProps,
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Boolean,
      default: null
    },
    clickable: Boolean,
    dense: Boolean,
    insetLevel: Number,
    tabindex: [String, Number],
    focused: Boolean,
    manualFocus: Boolean
  },
  emits: ["click", "keyup"],
  setup(props, { slots, emit }) {
    const { proxy: { $q } } = getCurrentInstance();
    const isDark = useDark(props, $q);
    const { hasLink, linkAttrs, linkClass, linkTag, navigateOnClick } = useRouterLink();
    const rootRef = ref(null);
    const blurTargetRef = ref(null);
    const isActionable = computed(
      () => props.clickable === true || hasLink.value === true || props.tag === "label"
    );
    const isClickable = computed(
      () => props.disable !== true && isActionable.value === true
    );
    const classes = computed(
      () => "q-item q-item-type row no-wrap" + (props.dense === true ? " q-item--dense" : "") + (isDark.value === true ? " q-item--dark" : "") + (hasLink.value === true && props.active === null ? linkClass.value : props.active === true ? ` q-item--active${props.activeClass !== void 0 ? ` ${props.activeClass}` : ""}` : "") + (props.disable === true ? " disabled" : "") + (isClickable.value === true ? " q-item--clickable q-link cursor-pointer " + (props.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (props.focused === true ? " q-manual-focusable--focused" : "") : "")
    );
    const style = computed(() => {
      if (props.insetLevel === void 0) {
        return null;
      }
      const dir = $q.lang.rtl === true ? "Right" : "Left";
      return {
        ["padding" + dir]: 16 + props.insetLevel * 56 + "px"
      };
    });
    function onClick(e) {
      if (isClickable.value === true) {
        if (blurTargetRef.value !== null) {
          if (e.qKeyEvent !== true && document.activeElement === rootRef.value) {
            blurTargetRef.value.focus();
          } else if (document.activeElement === blurTargetRef.value) {
            rootRef.value.focus();
          }
        }
        navigateOnClick(e);
      }
    }
    function onKeyup(e) {
      if (isClickable.value === true && isKeyCode(e, 13) === true) {
        stopAndPrevent(e);
        e.qKeyEvent = true;
        const evt = new MouseEvent("click", e);
        evt.qKeyEvent = true;
        rootRef.value.dispatchEvent(evt);
      }
      emit("keyup", e);
    }
    function getContent() {
      const child = hUniqueSlot(slots.default, []);
      isClickable.value === true && child.unshift(
        h("div", { class: "q-focus-helper", tabindex: -1, ref: blurTargetRef })
      );
      return child;
    }
    return () => {
      const data = {
        ref: rootRef,
        class: classes.value,
        style: style.value,
        role: "listitem",
        onClick,
        onKeyup
      };
      if (isClickable.value === true) {
        data.tabindex = props.tabindex || "0";
        Object.assign(data, linkAttrs.value);
      } else if (isActionable.value === true) {
        data["aria-disabled"] = "true";
      }
      return h(
        linkTag.value,
        data,
        getContent()
      );
    };
  }
});
var QMenu = createComponent({
  name: "QMenu",
  inheritAttrs: false,
  props: {
    ...useAnchorProps,
    ...useModelToggleProps,
    ...useDarkProps,
    ...useTransitionProps,
    persistent: Boolean,
    autoClose: Boolean,
    separateClosePopup: Boolean,
    noRouteDismiss: Boolean,
    noRefocus: Boolean,
    noFocus: Boolean,
    fit: Boolean,
    cover: Boolean,
    square: Boolean,
    anchor: {
      type: String,
      validator: validatePosition
    },
    self: {
      type: String,
      validator: validatePosition
    },
    offset: {
      type: Array,
      validator: validateOffset
    },
    scrollTarget: {
      default: void 0
    },
    touchPosition: Boolean,
    maxHeight: {
      type: String,
      default: null
    },
    maxWidth: {
      type: String,
      default: null
    }
  },
  emits: [
    ...useModelToggleEmits,
    "click",
    "escapeKey"
  ],
  setup(props, { slots, emit, attrs }) {
    let refocusTarget = null, absoluteOffset, unwatchPosition, avoidAutoClose;
    const vm = getCurrentInstance();
    const { proxy } = vm;
    const { $q } = proxy;
    const innerRef = ref(null);
    const showing = ref(false);
    const hideOnRouteChange = computed(
      () => props.persistent !== true && props.noRouteDismiss !== true
    );
    const isDark = useDark(props, $q);
    const { registerTick, removeTick } = useTick();
    const { registerTimeout } = useTimeout();
    const { transitionProps, transitionStyle } = useTransition(props);
    const { localScrollTarget, changeScrollEvent, unconfigureScrollTarget } = useScrollTarget(props, configureScrollTarget);
    const { anchorEl, canShow } = useAnchor({ showing });
    const { hide } = useModelToggle({
      showing,
      canShow,
      handleShow,
      handleHide,
      hideOnRouteChange,
      processOnMount: true
    });
    const { showPortal, hidePortal, renderPortal } = usePortal(vm, innerRef, renderPortalContent);
    const clickOutsideProps = {
      anchorEl,
      innerRef,
      onClickOutside(e) {
        if (props.persistent !== true && showing.value === true) {
          hide(e);
          if (e.type === "touchstart" || e.target.classList.contains("q-dialog__backdrop")) {
            stopAndPrevent(e);
          }
          return true;
        }
      }
    };
    const anchorOrigin = computed(
      () => parsePosition(
        props.anchor || (props.cover === true ? "center middle" : "bottom start"),
        $q.lang.rtl
      )
    );
    const selfOrigin = computed(() => props.cover === true ? anchorOrigin.value : parsePosition(props.self || "top start", $q.lang.rtl));
    const menuClass = computed(
      () => (props.square === true ? " q-menu--square" : "") + (isDark.value === true ? " q-menu--dark q-dark" : "")
    );
    const onEvents = computed(() => props.autoClose === true ? { onClick: onAutoClose } : {});
    const handlesFocus = computed(
      () => showing.value === true && props.persistent !== true
    );
    watch(handlesFocus, (val) => {
      if (val === true) {
        addEscapeKey(onEscapeKey);
        addClickOutside(clickOutsideProps);
      } else {
        removeEscapeKey(onEscapeKey);
        removeClickOutside(clickOutsideProps);
      }
    });
    function focus() {
      addFocusFn(() => {
        let node = innerRef.value;
        if (node && node.contains(document.activeElement) !== true) {
          node = node.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || node.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || node.querySelector("[autofocus], [data-autofocus]") || node;
          node.focus({ preventScroll: true });
        }
      });
    }
    function handleShow(evt) {
      refocusTarget = props.noRefocus === false ? document.activeElement : null;
      addFocusout(onFocusout);
      showPortal();
      configureScrollTarget();
      absoluteOffset = void 0;
      if (evt !== void 0 && (props.touchPosition || props.contextMenu)) {
        const pos = position(evt);
        if (pos.left !== void 0) {
          const { top, left } = anchorEl.value.getBoundingClientRect();
          absoluteOffset = { left: pos.left - left, top: pos.top - top };
        }
      }
      if (unwatchPosition === void 0) {
        unwatchPosition = watch(
          () => $q.screen.width + "|" + $q.screen.height + "|" + props.self + "|" + props.anchor + "|" + $q.lang.rtl,
          updatePosition
        );
      }
      if (props.noFocus !== true) {
        document.activeElement.blur();
      }
      registerTick(() => {
        updatePosition();
        props.noFocus !== true && focus();
      });
      registerTimeout(() => {
        if ($q.platform.is.ios === true) {
          avoidAutoClose = props.autoClose;
          innerRef.value.click();
        }
        updatePosition();
        showPortal(true);
        emit("show", evt);
      }, props.transitionDuration);
    }
    function handleHide(evt) {
      removeTick();
      hidePortal();
      anchorCleanup(true);
      if (refocusTarget !== null && (evt === void 0 || evt.qClickOutside !== true)) {
        ((evt && evt.type.indexOf("key") === 0 ? refocusTarget.closest('[tabindex]:not([tabindex^="-"])') : void 0) || refocusTarget).focus();
        refocusTarget = null;
      }
      registerTimeout(() => {
        hidePortal(true);
        emit("hide", evt);
      }, props.transitionDuration);
    }
    function anchorCleanup(hiding) {
      absoluteOffset = void 0;
      if (unwatchPosition !== void 0) {
        unwatchPosition();
        unwatchPosition = void 0;
      }
      if (hiding === true || showing.value === true) {
        removeFocusout(onFocusout);
        unconfigureScrollTarget();
        removeClickOutside(clickOutsideProps);
        removeEscapeKey(onEscapeKey);
      }
      if (hiding !== true) {
        refocusTarget = null;
      }
    }
    function configureScrollTarget() {
      if (anchorEl.value !== null || props.scrollTarget !== void 0) {
        localScrollTarget.value = getScrollTarget(anchorEl.value, props.scrollTarget);
        changeScrollEvent(localScrollTarget.value, updatePosition);
      }
    }
    function onAutoClose(e) {
      if (avoidAutoClose !== true) {
        closePortalMenus(proxy, e);
        emit("click", e);
      } else {
        avoidAutoClose = false;
      }
    }
    function onFocusout(evt) {
      if (handlesFocus.value === true && props.noFocus !== true && childHasFocus(innerRef.value, evt.target) !== true) {
        focus();
      }
    }
    function onEscapeKey(evt) {
      emit("escapeKey");
      hide(evt);
    }
    function updatePosition() {
      const el = innerRef.value;
      if (el === null || anchorEl.value === null) {
        return;
      }
      setPosition({
        el,
        offset: props.offset,
        anchorEl: anchorEl.value,
        anchorOrigin: anchorOrigin.value,
        selfOrigin: selfOrigin.value,
        absoluteOffset,
        fit: props.fit,
        cover: props.cover,
        maxHeight: props.maxHeight,
        maxWidth: props.maxWidth
      });
    }
    function renderPortalContent() {
      return h(
        Transition,
        transitionProps.value,
        () => showing.value === true ? h("div", {
          role: "menu",
          ...attrs,
          ref: innerRef,
          tabindex: -1,
          class: [
            "q-menu q-position-engine scroll" + menuClass.value,
            attrs.class
          ],
          style: [
            attrs.style,
            transitionStyle.value
          ],
          ...onEvents.value
        }, hSlot(slots.default)) : null
      );
    }
    onBeforeUnmount(anchorCleanup);
    Object.assign(proxy, { focus, updatePosition });
    return renderPortal;
  }
});
export { QItemSection as Q, QItem as a, QMenu as b };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUU1lbnUuYTkzZWRkMzYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvaXRlbS9RSXRlbVNlY3Rpb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2l0ZW0vUUl0ZW0uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL21lbnUvUU1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaCwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJdGVtU2VjdGlvbicsXG5cbiAgcHJvcHM6IHtcbiAgICBhdmF0YXI6IEJvb2xlYW4sXG4gICAgdGh1bWJuYWlsOiBCb29sZWFuLFxuICAgIHNpZGU6IEJvb2xlYW4sXG4gICAgdG9wOiBCb29sZWFuLFxuICAgIG5vV3JhcDogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1pdGVtX19zZWN0aW9uIGNvbHVtbidcbiAgICAgICsgYCBxLWl0ZW1fX3NlY3Rpb24tLSR7IHByb3BzLmF2YXRhciA9PT0gdHJ1ZSB8fCBwcm9wcy5zaWRlID09PSB0cnVlIHx8IHByb3BzLnRodW1ibmFpbCA9PT0gdHJ1ZSA/ICdzaWRlJyA6ICdtYWluJyB9YFxuICAgICAgKyAocHJvcHMudG9wID09PSB0cnVlID8gJyBxLWl0ZW1fX3NlY3Rpb24tLXRvcCBqdXN0aWZ5LXN0YXJ0JyA6ICcganVzdGlmeS1jZW50ZXInKVxuICAgICAgKyAocHJvcHMuYXZhdGFyID09PSB0cnVlID8gJyBxLWl0ZW1fX3NlY3Rpb24tLWF2YXRhcicgOiAnJylcbiAgICAgICsgKHByb3BzLnRodW1ibmFpbCA9PT0gdHJ1ZSA/ICcgcS1pdGVtX19zZWN0aW9uLS10aHVtYm5haWwnIDogJycpXG4gICAgICArIChwcm9wcy5ub1dyYXAgPT09IHRydWUgPyAnIHEtaXRlbV9fc2VjdGlvbi0tbm93cmFwJyA6ICcnKVxuICAgIClcblxuICAgIHJldHVybiAoKSA9PiBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVJvdXRlckxpbmssIHsgdXNlUm91dGVyTGlua1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2Utcm91dGVyLWxpbmsuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcbmltcG9ydCB7IHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBpc0tleUNvZGUgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2tleS1jb21wb3NpdGlvbi5qcydcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJdGVtJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VSb3V0ZXJMaW5rUHJvcHMsXG5cbiAgICB0YWc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdkaXYnXG4gICAgfSxcblxuICAgIGFjdGl2ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgY2xpY2thYmxlOiBCb29sZWFuLFxuICAgIGRlbnNlOiBCb29sZWFuLFxuICAgIGluc2V0TGV2ZWw6IE51bWJlcixcblxuICAgIHRhYmluZGV4OiBbIFN0cmluZywgTnVtYmVyIF0sXG5cbiAgICBmb2N1c2VkOiBCb29sZWFuLFxuICAgIG1hbnVhbEZvY3VzOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2NsaWNrJywgJ2tleXVwJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eTogeyAkcSB9IH0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG4gICAgY29uc3QgeyBoYXNMaW5rLCBsaW5rQXR0cnMsIGxpbmtDbGFzcywgbGlua1RhZywgbmF2aWdhdGVPbkNsaWNrIH0gPSB1c2VSb3V0ZXJMaW5rKClcblxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcbiAgICBjb25zdCBibHVyVGFyZ2V0UmVmID0gcmVmKG51bGwpXG5cbiAgICBjb25zdCBpc0FjdGlvbmFibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuY2xpY2thYmxlID09PSB0cnVlXG4gICAgICAgIHx8IGhhc0xpbmsudmFsdWUgPT09IHRydWVcbiAgICAgICAgfHwgcHJvcHMudGFnID09PSAnbGFiZWwnXG4gICAgKVxuXG4gICAgY29uc3QgaXNDbGlja2FibGUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgcHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBpc0FjdGlvbmFibGUudmFsdWUgPT09IHRydWVcbiAgICApXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWl0ZW0gcS1pdGVtLXR5cGUgcm93IG5vLXdyYXAnXG4gICAgICArIChwcm9wcy5kZW5zZSA9PT0gdHJ1ZSA/ICcgcS1pdGVtLS1kZW5zZScgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1pdGVtLS1kYXJrJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGhhc0xpbmsudmFsdWUgPT09IHRydWUgJiYgcHJvcHMuYWN0aXZlID09PSBudWxsXG4gICAgICAgICAgPyBsaW5rQ2xhc3MudmFsdWVcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgcHJvcHMuYWN0aXZlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgPyBgIHEtaXRlbS0tYWN0aXZlJHsgcHJvcHMuYWN0aXZlQ2xhc3MgIT09IHZvaWQgMCA/IGAgJHsgcHJvcHMuYWN0aXZlQ2xhc3MgfWAgOiAnJyB9YFxuICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgICsgKHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAnIGRpc2FibGVkJyA6ICcnKVxuICAgICAgKyAoXG4gICAgICAgIGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlXG4gICAgICAgICAgPyAnIHEtaXRlbS0tY2xpY2thYmxlIHEtbGluayBjdXJzb3ItcG9pbnRlciAnXG4gICAgICAgICAgICArIChwcm9wcy5tYW51YWxGb2N1cyA9PT0gdHJ1ZSA/ICdxLW1hbnVhbC1mb2N1c2FibGUnIDogJ3EtZm9jdXNhYmxlIHEtaG92ZXJhYmxlJylcbiAgICAgICAgICAgICsgKHByb3BzLmZvY3VzZWQgPT09IHRydWUgPyAnIHEtbWFudWFsLWZvY3VzYWJsZS0tZm9jdXNlZCcgOiAnJylcbiAgICAgICAgICA6ICcnXG4gICAgICApXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBpZiAocHJvcHMuaW5zZXRMZXZlbCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpciA9ICRxLmxhbmcucnRsID09PSB0cnVlID8gJ1JpZ2h0JyA6ICdMZWZ0J1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgWyAncGFkZGluZycgKyBkaXIgXTogKDE2ICsgcHJvcHMuaW5zZXRMZXZlbCAqIDU2KSArICdweCdcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gb25DbGljayAoZSkge1xuICAgICAgaWYgKGlzQ2xpY2thYmxlLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChibHVyVGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgaWYgKGUucUtleUV2ZW50ICE9PSB0cnVlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgICAgIGJsdXJUYXJnZXRSZWYudmFsdWUuZm9jdXMoKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBibHVyVGFyZ2V0UmVmLnZhbHVlKSB7XG4gICAgICAgICAgICByb290UmVmLnZhbHVlLmZvY3VzKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuYXZpZ2F0ZU9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbktleXVwIChlKSB7XG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgaXNLZXlDb2RlKGUsIDEzKSA9PT0gdHJ1ZSkge1xuICAgICAgICBzdG9wQW5kUHJldmVudChlKVxuXG4gICAgICAgIC8vIGZvciByaXBwbGVcbiAgICAgICAgZS5xS2V5RXZlbnQgPSB0cnVlXG5cbiAgICAgICAgLy8gZm9yIGNsaWNrIHRyaWdnZXJcbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywgZSlcbiAgICAgICAgZXZ0LnFLZXlFdmVudCA9IHRydWVcbiAgICAgICAgcm9vdFJlZi52YWx1ZS5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH1cblxuICAgICAgZW1pdCgna2V5dXAnLCBlKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgY29uc3QgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcblxuICAgICAgaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUgJiYgY2hpbGQudW5zaGlmdChcbiAgICAgICAgaCgnZGl2JywgeyBjbGFzczogJ3EtZm9jdXMtaGVscGVyJywgdGFiaW5kZXg6IC0xLCByZWY6IGJsdXJUYXJnZXRSZWYgfSlcbiAgICAgIClcblxuICAgICAgcmV0dXJuIGNoaWxkXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHJlZjogcm9vdFJlZixcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIHN0eWxlOiBzdHlsZS52YWx1ZSxcbiAgICAgICAgcm9sZTogJ2xpc3RpdGVtJyxcbiAgICAgICAgb25DbGljayxcbiAgICAgICAgb25LZXl1cFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNDbGlja2FibGUudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgZGF0YS50YWJpbmRleCA9IHByb3BzLnRhYmluZGV4IHx8ICcwJ1xuICAgICAgICBPYmplY3QuYXNzaWduKGRhdGEsIGxpbmtBdHRycy52YWx1ZSlcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQWN0aW9uYWJsZS52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBkYXRhWyAnYXJpYS1kaXNhYmxlZCcgXSA9ICd0cnVlJ1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaChcbiAgICAgICAgbGlua1RhZy52YWx1ZSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZ2V0Q29udGVudCgpXG4gICAgICApXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIFRyYW5zaXRpb24sIG9uQmVmb3JlVW5tb3VudCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlQW5jaG9yLCB7IHVzZUFuY2hvclByb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtYW5jaG9yLmpzJ1xuaW1wb3J0IHVzZVNjcm9sbFRhcmdldCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1zY3JvbGwtdGFyZ2V0LmpzJ1xuaW1wb3J0IHVzZU1vZGVsVG9nZ2xlLCB7IHVzZU1vZGVsVG9nZ2xlUHJvcHMsIHVzZU1vZGVsVG9nZ2xlRW1pdHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1tb2RlbC10b2dnbGUuanMnXG5pbXBvcnQgdXNlRGFyaywgeyB1c2VEYXJrUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1kYXJrLmpzJ1xuaW1wb3J0IHVzZVBvcnRhbCBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1wb3J0YWwuanMnXG5pbXBvcnQgdXNlVHJhbnNpdGlvbiwgeyB1c2VUcmFuc2l0aW9uUHJvcHMgfSBmcm9tICcuLi8uLi9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS10cmFuc2l0aW9uLmpzJ1xuaW1wb3J0IHVzZVRpY2sgZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtdGljay5qcydcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXRpbWVvdXQuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IHsgY2xvc2VQb3J0YWxNZW51cyB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcG9ydGFsLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgcG9zaXRpb24sIHN0b3BBbmRQcmV2ZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IHsgYWRkRXNjYXBlS2V5LCByZW1vdmVFc2NhcGVLZXkgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2VzY2FwZS1rZXkuanMnXG5pbXBvcnQgeyBhZGRGb2N1c291dCwgcmVtb3ZlRm9jdXNvdXQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2ZvY3Vzb3V0LmpzJ1xuaW1wb3J0IHsgY2hpbGRIYXNGb2N1cyB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbS5qcydcbmltcG9ydCB7IGFkZENsaWNrT3V0c2lkZSwgcmVtb3ZlQ2xpY2tPdXRzaWRlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jbGljay1vdXRzaWRlLmpzJ1xuaW1wb3J0IHsgYWRkRm9jdXNGbiB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvZm9jdXMtbWFuYWdlci5qcydcblxuaW1wb3J0IHtcbiAgdmFsaWRhdGVQb3NpdGlvbiwgdmFsaWRhdGVPZmZzZXQsIHNldFBvc2l0aW9uLCBwYXJzZVBvc2l0aW9uXG59IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcG9zaXRpb24tZW5naW5lLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUU1lbnUnLFxuXG4gIGluaGVyaXRBdHRyczogZmFsc2UsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VBbmNob3JQcm9wcyxcbiAgICAuLi51c2VNb2RlbFRvZ2dsZVByb3BzLFxuICAgIC4uLnVzZURhcmtQcm9wcyxcbiAgICAuLi51c2VUcmFuc2l0aW9uUHJvcHMsXG5cbiAgICBwZXJzaXN0ZW50OiBCb29sZWFuLFxuICAgIGF1dG9DbG9zZTogQm9vbGVhbixcbiAgICBzZXBhcmF0ZUNsb3NlUG9wdXA6IEJvb2xlYW4sXG5cbiAgICBub1JvdXRlRGlzbWlzczogQm9vbGVhbixcbiAgICBub1JlZm9jdXM6IEJvb2xlYW4sXG4gICAgbm9Gb2N1czogQm9vbGVhbixcblxuICAgIGZpdDogQm9vbGVhbixcbiAgICBjb3ZlcjogQm9vbGVhbixcblxuICAgIHNxdWFyZTogQm9vbGVhbixcblxuICAgIGFuY2hvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsaWRhdG9yOiB2YWxpZGF0ZVBvc2l0aW9uXG4gICAgfSxcbiAgICBzZWxmOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlUG9zaXRpb25cbiAgICB9LFxuICAgIG9mZnNldDoge1xuICAgICAgdHlwZTogQXJyYXksXG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRlT2Zmc2V0XG4gICAgfSxcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcblxuICAgIHRvdWNoUG9zaXRpb246IEJvb2xlYW4sXG5cbiAgICBtYXhIZWlnaHQ6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIG1heFdpZHRoOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbXG4gICAgLi4udXNlTW9kZWxUb2dnbGVFbWl0cyxcbiAgICAnY2xpY2snLCAnZXNjYXBlS2V5J1xuICBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCwgYXR0cnMgfSkge1xuICAgIGxldCByZWZvY3VzVGFyZ2V0ID0gbnVsbCwgYWJzb2x1dGVPZmZzZXQsIHVud2F0Y2hQb3NpdGlvbiwgYXZvaWRBdXRvQ2xvc2VcblxuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7IHByb3h5IH0gPSB2bVxuICAgIGNvbnN0IHsgJHEgfSA9IHByb3h5XG5cbiAgICBjb25zdCBpbm5lclJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IHNob3dpbmcgPSByZWYoZmFsc2UpXG5cbiAgICBjb25zdCBoaWRlT25Sb3V0ZUNoYW5nZSA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlXG4gICAgICAmJiBwcm9wcy5ub1JvdXRlRGlzbWlzcyAhPT0gdHJ1ZVxuICAgIClcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuICAgIGNvbnN0IHsgcmVnaXN0ZXJUaWNrLCByZW1vdmVUaWNrIH0gPSB1c2VUaWNrKClcbiAgICBjb25zdCB7IHJlZ2lzdGVyVGltZW91dCB9ID0gdXNlVGltZW91dCgpXG4gICAgY29uc3QgeyB0cmFuc2l0aW9uUHJvcHMsIHRyYW5zaXRpb25TdHlsZSB9ID0gdXNlVHJhbnNpdGlvbihwcm9wcylcbiAgICBjb25zdCB7IGxvY2FsU2Nyb2xsVGFyZ2V0LCBjaGFuZ2VTY3JvbGxFdmVudCwgdW5jb25maWd1cmVTY3JvbGxUYXJnZXQgfSA9IHVzZVNjcm9sbFRhcmdldChwcm9wcywgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KVxuXG4gICAgY29uc3QgeyBhbmNob3JFbCwgY2FuU2hvdyB9ID0gdXNlQW5jaG9yKHsgc2hvd2luZyB9KVxuXG4gICAgY29uc3QgeyBoaWRlIH0gPSB1c2VNb2RlbFRvZ2dsZSh7XG4gICAgICBzaG93aW5nLCBjYW5TaG93LCBoYW5kbGVTaG93LCBoYW5kbGVIaWRlLFxuICAgICAgaGlkZU9uUm91dGVDaGFuZ2UsXG4gICAgICBwcm9jZXNzT25Nb3VudDogdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCB7IHNob3dQb3J0YWwsIGhpZGVQb3J0YWwsIHJlbmRlclBvcnRhbCB9ID0gdXNlUG9ydGFsKHZtLCBpbm5lclJlZiwgcmVuZGVyUG9ydGFsQ29udGVudClcblxuICAgIGNvbnN0IGNsaWNrT3V0c2lkZVByb3BzID0ge1xuICAgICAgYW5jaG9yRWwsXG4gICAgICBpbm5lclJlZixcbiAgICAgIG9uQ2xpY2tPdXRzaWRlIChlKSB7XG4gICAgICAgIGlmIChwcm9wcy5wZXJzaXN0ZW50ICE9PSB0cnVlICYmIHNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBoaWRlKGUpXG5cbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAvLyBhbHdheXMgcHJldmVudCB0b3VjaCBldmVudFxuICAgICAgICAgICAgZS50eXBlID09PSAndG91Y2hzdGFydCdcbiAgICAgICAgICAgIC8vIHByZXZlbnQgY2xpY2sgaWYgaXQncyBvbiBhIGRpYWxvZyBiYWNrZHJvcFxuICAgICAgICAgICAgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdxLWRpYWxvZ19fYmFja2Ryb3AnKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgc3RvcEFuZFByZXZlbnQoZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYW5jaG9yT3JpZ2luID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIHBhcnNlUG9zaXRpb24oXG4gICAgICAgIHByb3BzLmFuY2hvciB8fCAoXG4gICAgICAgICAgcHJvcHMuY292ZXIgPT09IHRydWUgPyAnY2VudGVyIG1pZGRsZScgOiAnYm90dG9tIHN0YXJ0J1xuICAgICAgICApLFxuICAgICAgICAkcS5sYW5nLnJ0bFxuICAgICAgKVxuICAgIClcblxuICAgIGNvbnN0IHNlbGZPcmlnaW4gPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBwcm9wcy5jb3ZlciA9PT0gdHJ1ZVxuICAgICAgICA/IGFuY2hvck9yaWdpbi52YWx1ZVxuICAgICAgICA6IHBhcnNlUG9zaXRpb24ocHJvcHMuc2VsZiB8fCAndG9wIHN0YXJ0JywgJHEubGFuZy5ydGwpXG4gICAgKSlcblxuICAgIGNvbnN0IG1lbnVDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAocHJvcHMuc3F1YXJlID09PSB0cnVlID8gJyBxLW1lbnUtLXNxdWFyZScgOiAnJylcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1tZW51LS1kYXJrIHEtZGFyaycgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBvbkV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIHByb3BzLmF1dG9DbG9zZSA9PT0gdHJ1ZVxuICAgICAgICA/IHsgb25DbGljazogb25BdXRvQ2xvc2UgfVxuICAgICAgICA6IHt9XG4gICAgKSlcblxuICAgIGNvbnN0IGhhbmRsZXNGb2N1cyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBzaG93aW5nLnZhbHVlID09PSB0cnVlICYmIHByb3BzLnBlcnNpc3RlbnQgIT09IHRydWVcbiAgICApXG5cbiAgICB3YXRjaChoYW5kbGVzRm9jdXMsIHZhbCA9PiB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgICAgIGFkZEVzY2FwZUtleShvbkVzY2FwZUtleSlcbiAgICAgICAgYWRkQ2xpY2tPdXRzaWRlKGNsaWNrT3V0c2lkZVByb3BzKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlbW92ZUVzY2FwZUtleShvbkVzY2FwZUtleSlcbiAgICAgICAgcmVtb3ZlQ2xpY2tPdXRzaWRlKGNsaWNrT3V0c2lkZVByb3BzKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBmb2N1cyAoKSB7XG4gICAgICBhZGRGb2N1c0ZuKCgpID0+IHtcbiAgICAgICAgbGV0IG5vZGUgPSBpbm5lclJlZi52YWx1ZVxuXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgIT09IHRydWUpIHtcbiAgICAgICAgICBub2RlID0gbm9kZS5xdWVyeVNlbGVjdG9yKCdbYXV0b2ZvY3VzXVt0YWJpbmRleF0sIFtkYXRhLWF1dG9mb2N1c11bdGFiaW5kZXhdJylcbiAgICAgICAgICAgIHx8IG5vZGUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10gW3RhYmluZGV4XSwgW2RhdGEtYXV0b2ZvY3VzXSBbdGFiaW5kZXhdJylcbiAgICAgICAgICAgIHx8IG5vZGUucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10sIFtkYXRhLWF1dG9mb2N1c10nKVxuICAgICAgICAgICAgfHwgbm9kZVxuICAgICAgICAgIG5vZGUuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvdyAoZXZ0KSB7XG4gICAgICByZWZvY3VzVGFyZ2V0ID0gcHJvcHMubm9SZWZvY3VzID09PSBmYWxzZVxuICAgICAgICA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgICAgOiBudWxsXG5cbiAgICAgIGFkZEZvY3Vzb3V0KG9uRm9jdXNvdXQpXG5cbiAgICAgIHNob3dQb3J0YWwoKVxuICAgICAgY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcblxuICAgICAgYWJzb2x1dGVPZmZzZXQgPSB2b2lkIDBcblxuICAgICAgaWYgKGV2dCAhPT0gdm9pZCAwICYmIChwcm9wcy50b3VjaFBvc2l0aW9uIHx8IHByb3BzLmNvbnRleHRNZW51KSkge1xuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbihldnQpXG5cbiAgICAgICAgaWYgKHBvcy5sZWZ0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gYW5jaG9yRWwudmFsdWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICBhYnNvbHV0ZU9mZnNldCA9IHsgbGVmdDogcG9zLmxlZnQgLSBsZWZ0LCB0b3A6IHBvcy50b3AgLSB0b3AgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh1bndhdGNoUG9zaXRpb24gPT09IHZvaWQgMCkge1xuICAgICAgICB1bndhdGNoUG9zaXRpb24gPSB3YXRjaChcbiAgICAgICAgICAoKSA9PiAkcS5zY3JlZW4ud2lkdGggKyAnfCcgKyAkcS5zY3JlZW4uaGVpZ2h0ICsgJ3wnICsgcHJvcHMuc2VsZiArICd8JyArIHByb3BzLmFuY2hvciArICd8JyArICRxLmxhbmcucnRsLFxuICAgICAgICAgIHVwZGF0ZVBvc2l0aW9uXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm5vRm9jdXMgIT09IHRydWUpIHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgIH1cblxuICAgICAgLy8gc2hvdWxkIHJlbW92ZVRpY2soKSBpZiB0aGlzIGdldHMgcmVtb3ZlZFxuICAgICAgcmVnaXN0ZXJUaWNrKCgpID0+IHtcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oKVxuICAgICAgICBwcm9wcy5ub0ZvY3VzICE9PSB0cnVlICYmIGZvY3VzKClcbiAgICAgIH0pXG5cbiAgICAgIC8vIHNob3VsZCByZW1vdmVUaW1lb3V0KCkgaWYgdGhpcyBnZXRzIHJlbW92ZWRcbiAgICAgIHJlZ2lzdGVyVGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIHJlcXVpcmVkIGluIG9yZGVyIHRvIGF2b2lkIHRoZSBcImRvdWJsZS10YXAgbmVlZGVkXCIgaXNzdWVcbiAgICAgICAgaWYgKCRxLnBsYXRmb3JtLmlzLmlvcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgIC8vIGlmIGF1dG8tY2xvc2UsIHRoZW4gdGhpcyBjbGljayBzaG91bGRcbiAgICAgICAgICAvLyBub3QgY2xvc2UgdGhlIG1lbnVcbiAgICAgICAgICBhdm9pZEF1dG9DbG9zZSA9IHByb3BzLmF1dG9DbG9zZVxuICAgICAgICAgIGlubmVyUmVmLnZhbHVlLmNsaWNrKClcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKClcbiAgICAgICAgc2hvd1BvcnRhbCh0cnVlKSAvLyBkb25lIHNob3dpbmcgcG9ydGFsXG4gICAgICAgIGVtaXQoJ3Nob3cnLCBldnQpXG4gICAgICB9LCBwcm9wcy50cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlSGlkZSAoZXZ0KSB7XG4gICAgICByZW1vdmVUaWNrKClcbiAgICAgIGhpZGVQb3J0YWwoKVxuXG4gICAgICBhbmNob3JDbGVhbnVwKHRydWUpXG5cbiAgICAgIGlmIChcbiAgICAgICAgcmVmb2N1c1RhcmdldCAhPT0gbnVsbFxuICAgICAgICAmJiAoXG4gICAgICAgICAgLy8gbWVudSB3YXMgaGlkZGVuIGZyb20gY29kZSBvciBFU0MgcGx1Z2luXG4gICAgICAgICAgZXZ0ID09PSB2b2lkIDBcbiAgICAgICAgICAvLyBtZW51IHdhcyBub3QgY2xvc2VkIGZyb20gYSBtb3VzZSBvciB0b3VjaCBjbGlja091dHNpZGVcbiAgICAgICAgICB8fCBldnQucUNsaWNrT3V0c2lkZSAhPT0gdHJ1ZVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgKChldnQgJiYgZXZ0LnR5cGUuaW5kZXhPZigna2V5JykgPT09IDBcbiAgICAgICAgICA/IHJlZm9jdXNUYXJnZXQuY2xvc2VzdCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4Xj1cIi1cIl0pJylcbiAgICAgICAgICA6IHZvaWQgMFxuICAgICAgICApIHx8IHJlZm9jdXNUYXJnZXQpLmZvY3VzKClcbiAgICAgICAgcmVmb2N1c1RhcmdldCA9IG51bGxcbiAgICAgIH1cblxuICAgICAgLy8gc2hvdWxkIHJlbW92ZVRpbWVvdXQoKSBpZiB0aGlzIGdldHMgcmVtb3ZlZFxuICAgICAgcmVnaXN0ZXJUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaGlkZVBvcnRhbCh0cnVlKSAvLyBkb25lIGhpZGluZywgbm93IGRlc3Ryb3lcbiAgICAgICAgZW1pdCgnaGlkZScsIGV2dClcbiAgICAgIH0sIHByb3BzLnRyYW5zaXRpb25EdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmNob3JDbGVhbnVwIChoaWRpbmcpIHtcbiAgICAgIGFic29sdXRlT2Zmc2V0ID0gdm9pZCAwXG5cbiAgICAgIGlmICh1bndhdGNoUG9zaXRpb24gIT09IHZvaWQgMCkge1xuICAgICAgICB1bndhdGNoUG9zaXRpb24oKVxuICAgICAgICB1bndhdGNoUG9zaXRpb24gPSB2b2lkIDBcbiAgICAgIH1cblxuICAgICAgaWYgKGhpZGluZyA9PT0gdHJ1ZSB8fCBzaG93aW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIHJlbW92ZUZvY3Vzb3V0KG9uRm9jdXNvdXQpXG4gICAgICAgIHVuY29uZmlndXJlU2Nyb2xsVGFyZ2V0KClcbiAgICAgICAgcmVtb3ZlQ2xpY2tPdXRzaWRlKGNsaWNrT3V0c2lkZVByb3BzKVxuICAgICAgICByZW1vdmVFc2NhcGVLZXkob25Fc2NhcGVLZXkpXG4gICAgICB9XG5cbiAgICAgIGlmIChoaWRpbmcgIT09IHRydWUpIHtcbiAgICAgICAgcmVmb2N1c1RhcmdldCA9IG51bGxcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb25maWd1cmVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGFuY2hvckVsLnZhbHVlICE9PSBudWxsIHx8IHByb3BzLnNjcm9sbFRhcmdldCAhPT0gdm9pZCAwKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlID0gZ2V0U2Nyb2xsVGFyZ2V0KGFuY2hvckVsLnZhbHVlLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG4gICAgICAgIGNoYW5nZVNjcm9sbEV2ZW50KGxvY2FsU2Nyb2xsVGFyZ2V0LnZhbHVlLCB1cGRhdGVQb3NpdGlvbilcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkF1dG9DbG9zZSAoZSkge1xuICAgICAgLy8gaWYgYXV0by1jbG9zZSwgdGhlbiB0aGUgaW9zIGRvdWJsZS10YXAgZml4IHdoaWNoXG4gICAgICAvLyBpc3N1ZXMgYSBjbGljayBzaG91bGQgbm90IGNsb3NlIHRoZSBtZW51XG4gICAgICBpZiAoYXZvaWRBdXRvQ2xvc2UgIT09IHRydWUpIHtcbiAgICAgICAgY2xvc2VQb3J0YWxNZW51cyhwcm94eSwgZSlcbiAgICAgICAgZW1pdCgnY2xpY2snLCBlKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGF2b2lkQXV0b0Nsb3NlID0gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkZvY3Vzb3V0IChldnQpIHtcbiAgICAgIC8vIHRoZSBmb2N1cyBpcyBub3QgaW4gYSB2dWUgY2hpbGQgY29tcG9uZW50XG4gICAgICBpZiAoXG4gICAgICAgIGhhbmRsZXNGb2N1cy52YWx1ZSA9PT0gdHJ1ZVxuICAgICAgICAmJiBwcm9wcy5ub0ZvY3VzICE9PSB0cnVlXG4gICAgICAgICYmIGNoaWxkSGFzRm9jdXMoaW5uZXJSZWYudmFsdWUsIGV2dC50YXJnZXQpICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgZm9jdXMoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uRXNjYXBlS2V5IChldnQpIHtcbiAgICAgIGVtaXQoJ2VzY2FwZUtleScpXG4gICAgICBoaWRlKGV2dClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbiAoKSB7XG4gICAgICBjb25zdCBlbCA9IGlubmVyUmVmLnZhbHVlXG5cbiAgICAgIGlmIChlbCA9PT0gbnVsbCB8fCBhbmNob3JFbC52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0UG9zaXRpb24oe1xuICAgICAgICBlbCxcbiAgICAgICAgb2Zmc2V0OiBwcm9wcy5vZmZzZXQsXG4gICAgICAgIGFuY2hvckVsOiBhbmNob3JFbC52YWx1ZSxcbiAgICAgICAgYW5jaG9yT3JpZ2luOiBhbmNob3JPcmlnaW4udmFsdWUsXG4gICAgICAgIHNlbGZPcmlnaW46IHNlbGZPcmlnaW4udmFsdWUsXG4gICAgICAgIGFic29sdXRlT2Zmc2V0LFxuICAgICAgICBmaXQ6IHByb3BzLmZpdCxcbiAgICAgICAgY292ZXI6IHByb3BzLmNvdmVyLFxuICAgICAgICBtYXhIZWlnaHQ6IHByb3BzLm1heEhlaWdodCxcbiAgICAgICAgbWF4V2lkdGg6IHByb3BzLm1heFdpZHRoXG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclBvcnRhbENvbnRlbnQgKCkge1xuICAgICAgcmV0dXJuIGgoXG4gICAgICAgIFRyYW5zaXRpb24sXG4gICAgICAgIHRyYW5zaXRpb25Qcm9wcy52YWx1ZSxcbiAgICAgICAgKCkgPT4gKFxuICAgICAgICAgIHNob3dpbmcudmFsdWUgPT09IHRydWVcbiAgICAgICAgICAgID8gaCgnZGl2Jywge1xuICAgICAgICAgICAgICByb2xlOiAnbWVudScsXG4gICAgICAgICAgICAgIC4uLmF0dHJzLFxuICAgICAgICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICAgICAgICB0YWJpbmRleDogLTEsXG4gICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgJ3EtbWVudSBxLXBvc2l0aW9uLWVuZ2luZSBzY3JvbGwnICsgbWVudUNsYXNzLnZhbHVlLFxuICAgICAgICAgICAgICAgIGF0dHJzLmNsYXNzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0eWxlOiBbXG4gICAgICAgICAgICAgICAgYXR0cnMuc3R5bGUsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblN0eWxlLnZhbHVlXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIC4uLm9uRXZlbnRzLnZhbHVlXG4gICAgICAgICAgICB9LCBoU2xvdChzbG90cy5kZWZhdWx0KSlcbiAgICAgICAgICAgIDogbnVsbFxuICAgICAgICApXG4gICAgICApXG4gICAgfVxuXG4gICAgb25CZWZvcmVVbm1vdW50KGFuY2hvckNsZWFudXApXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7IGZvY3VzLCB1cGRhdGVQb3NpdGlvbiB9KVxuXG4gICAgcmV0dXJuIHJlbmRlclBvcnRhbFxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBS0EsSUFBQSxlQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNUO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sVUFBVTtBQUFBLE1BQVMsTUFDdkIsMkNBQ3dCLE1BQU0sV0FBVyxRQUFRLE1BQU0sU0FBUyxRQUFRLE1BQU0sY0FBYyxPQUFPLFNBQVMsWUFDekcsTUFBTSxRQUFRLE9BQU8sd0NBQXdDLHNCQUM3RCxNQUFNLFdBQVcsT0FBTyw2QkFBNkIsT0FDckQsTUFBTSxjQUFjLE9BQU8sZ0NBQWdDLE9BQzNELE1BQU0sV0FBVyxPQUFPLDZCQUE2QjtBQUFBLElBQ3pEO0FBRUQsV0FBTyxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sUUFBUSxNQUFLLEdBQUksTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLEVBQ3JFO0FBQ0gsQ0FBQztBQ2xCRCxJQUFBLFFBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBQ0gsR0FBRztBQUFBLElBRUgsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUVELFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFFRCxXQUFXO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFFWixVQUFVLENBQUUsUUFBUSxNQUFRO0FBQUEsSUFFNUIsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Q7QUFBQSxFQUVELE9BQU8sQ0FBRSxTQUFT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

import { j as createComponent, q as useDarkProps, bx as btnDesignOptions, v as useDark, c as computed, r as ref, w as watch, by as btnPadding, bz as getBtnDesign, aw as isKeyCode, h, bv as QInput, g as getCurrentInstance, Y as QBtn, _ as _export_sfc, M as defineComponent, aN as ApiConfigProvider, bA as AlbumApi, O as useRouter, o as onMounted, bd as onUpdated, P as openBlock, R as createBlock, S as withCtx, V as createBaseVNode, a9 as createElementBlock, ao as renderList, F as Fragment, d as createVNode, bB as QToggle } from "./index.fd5c2d10.js";
import { b as between } from "./format.a33550d6.js";
import { a as QSelect } from "./QSelect.825f47be.js";
import { Q as QPage } from "./QPage.7d8f62d6.js";
import { A as AlbumCard } from "./AlbumCard.a24aaaef.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.25a77dcb.js";
import "./QMenu.28fab95b.js";
import "./position-engine.ea8432e3.js";
function getBool(val, otherwise) {
  return [true, false].includes(val) ? val : otherwise;
}
var QPagination = createComponent({
  name: "QPagination",
  props: {
    ...useDarkProps,
    modelValue: {
      type: Number,
      required: true
    },
    min: {
      type: [Number, String],
      default: 1
    },
    max: {
      type: [Number, String],
      required: true
    },
    maxPages: {
      type: [Number, String],
      default: 0,
      validator: (v) => (typeof v === "string" ? parseInt(v, 10) : v) >= 0
    },
    inputStyle: [Array, String, Object],
    inputClass: [Array, String, Object],
    size: String,
    disable: Boolean,
    input: Boolean,
    iconPrev: String,
    iconNext: String,
    iconFirst: String,
    iconLast: String,
    toFn: Function,
    boundaryLinks: {
      type: Boolean,
      default: null
    },
    boundaryNumbers: {
      type: Boolean,
      default: null
    },
    directionLinks: {
      type: Boolean,
      default: null
    },
    ellipses: {
      type: Boolean,
      default: null
    },
    ripple: {
      type: [Boolean, Object],
      default: null
    },
    round: Boolean,
    rounded: Boolean,
    flat: Boolean,
    outline: Boolean,
    unelevated: Boolean,
    push: Boolean,
    glossy: Boolean,
    color: {
      type: String,
      default: "primary"
    },
    textColor: String,
    activeDesign: {
      type: String,
      default: "",
      values: (v) => v === "" || btnDesignOptions.includes(v)
    },
    activeColor: String,
    activeTextColor: String,
    gutter: String,
    padding: {
      type: String,
      default: "3px 2px"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance();
    const { $q } = proxy;
    const isDark = useDark(props, $q);
    const minProp = computed(() => parseInt(props.min, 10));
    const maxProp = computed(() => parseInt(props.max, 10));
    const maxPagesProp = computed(() => parseInt(props.maxPages, 10));
    const inputPlaceholder = computed(() => model.value + " / " + maxProp.value);
    const boundaryLinksProp = computed(() => getBool(props.boundaryLinks, props.input));
    const boundaryNumbersProp = computed(() => getBool(props.boundaryNumbers, !props.input));
    const directionLinksProp = computed(() => getBool(props.directionLinks, props.input));
    const ellipsesProp = computed(() => getBool(props.ellipses, !props.input));
    const newPage = ref(null);
    const model = computed({
      get: () => props.modelValue,
      set: (val) => {
        val = parseInt(val, 10);
        if (props.disable || isNaN(val)) {
          return;
        }
        const value = between(val, minProp.value, maxProp.value);
        if (props.modelValue !== value) {
          emit("update:modelValue", value);
        }
      }
    });
    watch(() => `${minProp.value}|${maxProp.value}`, () => {
      model.value = props.modelValue;
    });
    const classes = computed(
      () => "q-pagination row no-wrap items-center" + (props.disable === true ? " disabled" : "")
    );
    const gutterProp = computed(() => props.gutter in btnPadding ? `${btnPadding[props.gutter]}px` : props.gutter || null);
    const gutterStyle = computed(() => gutterProp.value !== null ? `--q-pagination-gutter-parent:-${gutterProp.value};--q-pagination-gutter-child:${gutterProp.value}` : null);
    const icons = computed(() => {
      const ico = [
        props.iconFirst || $q.iconSet.pagination.first,
        props.iconPrev || $q.iconSet.pagination.prev,
        props.iconNext || $q.iconSet.pagination.next,
        props.iconLast || $q.iconSet.pagination.last
      ];
      return $q.lang.rtl === true ? ico.reverse() : ico;
    });
    const attrs = computed(() => ({
      "aria-disabled": props.disable === true ? "true" : "false",
      role: "navigation"
    }));
    const btnDesignProp = computed(() => getBtnDesign(props, "flat"));
    const btnProps = computed(() => ({
      [btnDesignProp.value]: true,
      round: props.round,
      rounded: props.rounded,
      padding: props.padding,
      color: props.color,
      textColor: props.textColor,
      size: props.size,
      ripple: props.ripple !== null ? props.ripple : true
    }));
    const btnActiveDesignProp = computed(() => {
      const acc = { [btnDesignProp.value]: false };
      if (props.activeDesign !== "") {
        acc[props.activeDesign] = true;
      }
      return acc;
    });
    const activeBtnProps = computed(() => ({
      ...btnActiveDesignProp.value,
      color: props.activeColor || props.color,
      textColor: props.activeTextColor || props.textColor
    }));
    const btnConfig = computed(() => {
      let maxPages = Math.max(
        maxPagesProp.value,
        1 + (ellipsesProp.value ? 2 : 0) + (boundaryNumbersProp.value ? 2 : 0)
      );
      const acc = {
        pgFrom: minProp.value,
        pgTo: maxProp.value,
        ellipsesStart: false,
        ellipsesEnd: false,
        boundaryStart: false,
        boundaryEnd: false,
        marginalStyle: {
          minWidth: `${Math.max(2, String(maxProp.value).length)}em`
        }
      };
      if (maxPagesProp.value && maxPages < maxProp.value - minProp.value + 1) {
        maxPages = 1 + Math.floor(maxPages / 2) * 2;
        acc.pgFrom = Math.max(minProp.value, Math.min(maxProp.value - maxPages + 1, props.modelValue - Math.floor(maxPages / 2)));
        acc.pgTo = Math.min(maxProp.value, acc.pgFrom + maxPages - 1);
        if (boundaryNumbersProp.value) {
          acc.boundaryStart = true;
          acc.pgFrom++;
        }
        if (ellipsesProp.value && acc.pgFrom > minProp.value + (boundaryNumbersProp.value ? 1 : 0)) {
          acc.ellipsesStart = true;
          acc.pgFrom++;
        }
        if (boundaryNumbersProp.value) {
          acc.boundaryEnd = true;
          acc.pgTo--;
        }
        if (ellipsesProp.value && acc.pgTo < maxProp.value - (boundaryNumbersProp.value ? 1 : 0)) {
          acc.ellipsesEnd = true;
          acc.pgTo--;
        }
      }
      return acc;
    });
    function set(value) {
      model.value = value;
    }
    function setByOffset(offset) {
      model.value = model.value + offset;
    }
    const inputEvents = computed(() => {
      function updateModel() {
        model.value = newPage.value;
        newPage.value = null;
      }
      return {
        "onUpdate:modelValue": (val) => {
          newPage.value = val;
        },
        onKeyup: (e) => {
          isKeyCode(e, 13) === true && updateModel();
        },
        onBlur: updateModel
      };
    });
    function getBtn(cfg, page, active) {
      const data = {
        "aria-label": page,
        "aria-current": "false",
        ...btnProps.value,
        ...cfg
      };
      if (active === true) {
        Object.assign(data, {
          "aria-current": "true",
          ...activeBtnProps.value
        });
      }
      if (page !== void 0) {
        if (props.toFn !== void 0) {
          data.to = props.toFn(page);
        } else {
          data.onClick = () => {
            set(page);
          };
        }
      }
      return h(QBtn, data);
    }
    Object.assign(proxy, { set, setByOffset });
    return () => {
      const contentStart = [];
      const contentEnd = [];
      let contentMiddle;
      if (boundaryLinksProp.value === true) {
        contentStart.push(
          getBtn({
            key: "bls",
            disable: props.disable || props.modelValue <= minProp.value,
            icon: icons.value[0]
          }, minProp.value)
        );
        contentEnd.unshift(
          getBtn({
            key: "ble",
            disable: props.disable || props.modelValue >= maxProp.value,
            icon: icons.value[3]
          }, maxProp.value)
        );
      }
      if (directionLinksProp.value === true) {
        contentStart.push(
          getBtn({
            key: "bdp",
            disable: props.disable || props.modelValue <= minProp.value,
            icon: icons.value[1]
          }, props.modelValue - 1)
        );
        contentEnd.unshift(
          getBtn({
            key: "bdn",
            disable: props.disable || props.modelValue >= maxProp.value,
            icon: icons.value[2]
          }, props.modelValue + 1)
        );
      }
      if (props.input !== true) {
        contentMiddle = [];
        const { pgFrom, pgTo, marginalStyle: style } = btnConfig.value;
        if (btnConfig.value.boundaryStart === true) {
          const active = minProp.value === props.modelValue;
          contentStart.push(
            getBtn({
              key: "bns",
              style,
              disable: props.disable,
              label: minProp.value
            }, minProp.value, active)
          );
        }
        if (btnConfig.value.boundaryEnd === true) {
          const active = maxProp.value === props.modelValue;
          contentEnd.unshift(
            getBtn({
              key: "bne",
              style,
              disable: props.disable,
              label: maxProp.value
            }, maxProp.value, active)
          );
        }
        if (btnConfig.value.ellipsesStart === true) {
          contentStart.push(
            getBtn({
              key: "bes",
              style,
              disable: props.disable,
              label: "\u2026",
              ripple: false
            }, pgFrom - 1)
          );
        }
        if (btnConfig.value.ellipsesEnd === true) {
          contentEnd.unshift(
            getBtn({
              key: "bee",
              style,
              disable: props.disable,
              label: "\u2026",
              ripple: false
            }, pgTo + 1)
          );
        }
        for (let i = pgFrom; i <= pgTo; i++) {
          contentMiddle.push(
            getBtn({
              key: `bpg${i}`,
              style,
              disable: props.disable,
              label: i
            }, i, i === props.modelValue)
          );
        }
      }
      return h("div", {
        class: classes.value,
        ...attrs.value
      }, [
        h("div", {
          class: "q-pagination__content row no-wrap items-center",
          style: gutterStyle.value
        }, [
          ...contentStart,
          props.input === true ? h(QInput, {
            class: "inline",
            style: { width: `${inputPlaceholder.value.length / 1.5}em` },
            type: "number",
            dense: true,
            value: newPage.value,
            disable: props.disable,
            dark: isDark.value,
            borderless: true,
            inputClass: props.inputClass,
            inputStyle: props.inputStyle,
            placeholder: inputPlaceholder.value,
            min: minProp.value,
            max: maxProp.value,
            ...inputEvents.value
          }) : h("div", {
            class: "q-pagination__middle row justify-center"
          }, contentMiddle),
          ...contentEnd
        ])
      ]);
    };
  }
});
const _hoisted_1 = { class: "row q-gutter-md justify-evenly" };
const _hoisted_2 = {
  class: "q-pa-lg q-mt-lg flex flex-center justify-between",
  style: { "border-top": "1px solid #545454" }
};
const _hoisted_3 = { class: "row" };
const _hoisted_4 = { class: "q-gutter-md" };
const _hoisted_5 = { class: "row" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "flex items-center q-mx-md" }, [
  /* @__PURE__ */ createBaseVNode("div", null, "Albums per page:")
], -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomePagePaginate",
  setup(__props) {
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
    const albumApi = new AlbumApi(apiConfig);
    const displayAlbums = ref([]);
    usePageContainerBgStyleStore();
    const router = useRouter();
    const current = ref(1);
    const model = ref("50");
    const value = ref(true);
    const options = ["25", "50", "75", "100"];
    const page = ref();
    const onPageChange = (pg) => {
      loadPage(pg);
    };
    function loadPage(index, bypassPushRoute = false) {
      if (!bypassPushRoute) {
        router.push({ name: "homePaginate", params: { page: current.value } });
      }
      albumApi.getAlbums({ start: (index - 1) * 50, limit: 50 }).then((resp) => {
        displayAlbums.value = resp;
        window.scroll({
          top: 0,
          left: 0,
          behavior: "auto"
        });
      });
    }
    onMounted(async () => {
      const page2 = Number.parseInt(router.currentRoute.value.params.page || "1");
      current.value = page2;
      loadPage(page2);
      watch(() => router.currentRoute.value.params.page, (to, from) => {
        if (router.currentRoute.value.name !== "homePaginate") {
          return;
        }
        let toPage = Number.parseInt(to);
        if (Number.isNaN(toPage)) {
          current.value = 1;
          loadPage(1);
        }
        if (toPage !== current.value) {
          current.value = toPage;
          loadPage(toPage, true);
        }
      });
    });
    onUpdated(async () => {
      const page2 = Number.parseInt(router.currentRoute.value.params.page || "1");
      current.value = page2;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, {
        padding: "",
        ref: page.value
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(displayAlbums.value, (album, index) => {
              return openBlock(), createBlock(AlbumCard, {
                key: index,
                "album-info": album
              }, null, 8, ["album-info"]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createVNode(QToggle, {
                color: "blue",
                modelValue: value.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
                label: "Auto Advance",
                "left-label": ""
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_4, [
              createVNode(QPagination, {
                color: "grey",
                "text-color": "white",
                modelValue: current.value,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => current.value = $event),
                  onPageChange
                ],
                max: "236",
                "max-pages": "7",
                "direction-links": "",
                gutter: "20px",
                size: "18px",
                outline: ""
              }, null, 8, ["modelValue"])
            ]),
            createBaseVNode("div", _hoisted_5, [
              _hoisted_6,
              createVNode(QSelect, {
                dense: "",
                modelValue: model.value,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => model.value = $event),
                options
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        _: 1
      }, 512);
    };
  }
});
var HomePagePaginate = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "HomePagePaginate.vue"]]);
export { HomePagePaginate as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VQYWdpbmF0ZS41NDRlM2RlNS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1FQYWdpbmF0aW9uLmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0hvbWVQYWdlUGFnaW5hdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgd2F0Y2gsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFJbnB1dCBmcm9tICcuLi9pbnB1dC9RSW5wdXQuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyBidG5EZXNpZ25PcHRpb25zLCBidG5QYWRkaW5nLCBnZXRCdG5EZXNpZ24gfSBmcm9tICcuLi9idG4vdXNlLWJ0bi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5cbmZ1bmN0aW9uIGdldEJvb2wgKHZhbCwgb3RoZXJ3aXNlKSB7XG4gIHJldHVybiBbIHRydWUsIGZhbHNlIF0uaW5jbHVkZXModmFsKVxuICAgID8gdmFsXG4gICAgOiBvdGhlcndpc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdpbmF0aW9uJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBtaW46IHtcbiAgICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICAgIGRlZmF1bHQ6IDFcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1heFBhZ2VzOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IChcbiAgICAgICAgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHYsIDEwKSA6IHYpID49IDBcbiAgICAgIClcbiAgICB9LFxuXG4gICAgaW5wdXRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBpbnB1dENsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgc2l6ZTogU3RyaW5nLFxuXG4gICAgZGlzYWJsZTogQm9vbGVhbixcblxuICAgIGlucHV0OiBCb29sZWFuLFxuXG4gICAgaWNvblByZXY6IFN0cmluZyxcbiAgICBpY29uTmV4dDogU3RyaW5nLFxuICAgIGljb25GaXJzdDogU3RyaW5nLFxuICAgIGljb25MYXN0OiBTdHJpbmcsXG5cbiAgICB0b0ZuOiBGdW5jdGlvbixcblxuICAgIGJvdW5kYXJ5TGlua3M6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBib3VuZGFyeU51bWJlcnM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBkaXJlY3Rpb25MaW5rczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGVsbGlwc2VzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHJvdW5kOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBwdXNoOiBCb29sZWFuLFxuICAgIGdsb3NzeTogQm9vbGVhbixcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeSdcbiAgICB9LFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgYWN0aXZlRGVzaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIHZhbHVlczogdiA9PiB2ID09PSAnJyB8fCBidG5EZXNpZ25PcHRpb25zLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIGFjdGl2ZVRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgZ3V0dGVyOiBTdHJpbmcsXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzNweCAycHgnXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgICBjb25zdCBtaW5Qcm9wID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMubWluLCAxMCkpXG4gICAgY29uc3QgbWF4UHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heCwgMTApKVxuICAgIGNvbnN0IG1heFBhZ2VzUHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heFBhZ2VzLCAxMCkpXG5cbiAgICBjb25zdCBpbnB1dFBsYWNlaG9sZGVyID0gY29tcHV0ZWQoKCkgPT4gbW9kZWwudmFsdWUgKyAnIC8gJyArIG1heFByb3AudmFsdWUpXG4gICAgY29uc3QgYm91bmRhcnlMaW5rc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBnZXRCb29sKHByb3BzLmJvdW5kYXJ5TGlua3MsIHByb3BzLmlucHV0KSlcbiAgICBjb25zdCBib3VuZGFyeU51bWJlcnNQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5ib3VuZGFyeU51bWJlcnMsICFwcm9wcy5pbnB1dCkpXG4gICAgY29uc3QgZGlyZWN0aW9uTGlua3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5kaXJlY3Rpb25MaW5rcywgcHJvcHMuaW5wdXQpKVxuICAgIGNvbnN0IGVsbGlwc2VzUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJvb2wocHJvcHMuZWxsaXBzZXMsICFwcm9wcy5pbnB1dCkpXG5cbiAgICBjb25zdCBuZXdQYWdlID0gcmVmKG51bGwpXG4gICAgY29uc3QgbW9kZWwgPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IHByb3BzLm1vZGVsVmFsdWUsXG4gICAgICBzZXQ6IHZhbCA9PiB7XG4gICAgICAgIHZhbCA9IHBhcnNlSW50KHZhbCwgMTApXG4gICAgICAgIGlmIChwcm9wcy5kaXNhYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGJldHdlZW4odmFsLCBtaW5Qcm9wLnZhbHVlLCBtYXhQcm9wLnZhbHVlKVxuICAgICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IGAkeyBtaW5Qcm9wLnZhbHVlIH18JHsgbWF4UHJvcC52YWx1ZSB9YCwgKCkgPT4ge1xuICAgICAgbW9kZWwudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtcGFnaW5hdGlvbiByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBndXR0ZXJQcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZ3V0dGVyIGluIGJ0blBhZGRpbmdcbiAgICAgICAgPyBgJHsgYnRuUGFkZGluZ1sgcHJvcHMuZ3V0dGVyIF0gfXB4YFxuICAgICAgICA6IHByb3BzLmd1dHRlciB8fCBudWxsXG4gICAgKSlcbiAgICBjb25zdCBndXR0ZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGd1dHRlclByb3AudmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBgLS1xLXBhZ2luYXRpb24tZ3V0dGVyLXBhcmVudDotJHsgZ3V0dGVyUHJvcC52YWx1ZSB9Oy0tcS1wYWdpbmF0aW9uLWd1dHRlci1jaGlsZDokeyBndXR0ZXJQcm9wLnZhbHVlIH1gXG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCBpY29ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGljbyA9IFtcbiAgICAgICAgcHJvcHMuaWNvbkZpcnN0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5maXJzdCxcbiAgICAgICAgcHJvcHMuaWNvblByZXYgfHwgJHEuaWNvblNldC5wYWdpbmF0aW9uLnByZXYsXG4gICAgICAgIHByb3BzLmljb25OZXh0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5uZXh0LFxuICAgICAgICBwcm9wcy5pY29uTGFzdCB8fCAkcS5pY29uU2V0LnBhZ2luYXRpb24ubGFzdFxuICAgICAgXVxuICAgICAgcmV0dXJuICRxLmxhbmcucnRsID09PSB0cnVlID8gaWNvLnJldmVyc2UoKSA6IGljb1xuICAgIH0pXG5cbiAgICBjb25zdCBhdHRycyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgcm9sZTogJ25hdmlnYXRpb24nXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5EZXNpZ25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduKHByb3BzLCAnZmxhdCcpKVxuICAgIGNvbnN0IGJ0blByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIFsgYnRuRGVzaWduUHJvcC52YWx1ZSBdOiB0cnVlLFxuXG4gICAgICByb3VuZDogcHJvcHMucm91bmQsXG4gICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuXG4gICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxuXG4gICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICB0ZXh0Q29sb3I6IHByb3BzLnRleHRDb2xvcixcblxuICAgICAgc2l6ZTogcHJvcHMuc2l6ZSxcbiAgICAgIHJpcHBsZTogcHJvcHMucmlwcGxlICE9PSBudWxsXG4gICAgICAgID8gcHJvcHMucmlwcGxlXG4gICAgICAgIDogdHJ1ZVxuICAgIH0pKVxuXG4gICAgY29uc3QgYnRuQWN0aXZlRGVzaWduUHJvcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIHdlIGFsc28gcmVzZXQgbm9uLWFjdGl2ZSBkZXNpZ25cbiAgICAgIGNvbnN0IGFjYyA9IHsgWyBidG5EZXNpZ25Qcm9wLnZhbHVlIF06IGZhbHNlIH1cbiAgICAgIGlmIChwcm9wcy5hY3RpdmVEZXNpZ24gIT09ICcnKSB7XG4gICAgICAgIGFjY1sgcHJvcHMuYWN0aXZlRGVzaWduIF0gPSB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcbiAgICBjb25zdCBhY3RpdmVCdG5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi5idG5BY3RpdmVEZXNpZ25Qcm9wLnZhbHVlLFxuICAgICAgY29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yIHx8IHByb3BzLmNvbG9yLFxuICAgICAgdGV4dENvbG9yOiBwcm9wcy5hY3RpdmVUZXh0Q29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5Db25maWcgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgbWF4UGFnZXMgPSBNYXRoLm1heChcbiAgICAgICAgbWF4UGFnZXNQcm9wLnZhbHVlLFxuICAgICAgICAxICsgKGVsbGlwc2VzUHJvcC52YWx1ZSA/IDIgOiAwKSArIChib3VuZGFyeU51bWJlcnNQcm9wLnZhbHVlID8gMiA6IDApXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgcGdGcm9tOiBtaW5Qcm9wLnZhbHVlLFxuICAgICAgICBwZ1RvOiBtYXhQcm9wLnZhbHVlLFxuICAgICAgICBlbGxpcHNlc1N0YXJ0OiBmYWxzZSxcbiAgICAgICAgZWxsaXBzZXNFbmQ6IGZhbHNlLFxuICAgICAgICBib3VuZGFyeVN0YXJ0OiBmYWxzZSxcbiAgICAgICAgYm91bmRhcnlFbmQ6IGZhbHNlLFxuICAgICAgICBtYXJnaW5hbFN0eWxlOiB7XG4gICAgICAgICAgbWluV2lkdGg6IGAkeyBNYXRoLm1heCgyLCBTdHJpbmcobWF4UHJvcC52YWx1ZSkubGVuZ3RoKSB9ZW1gXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1heFBhZ2VzUHJvcC52YWx1ZSAmJiBtYXhQYWdlcyA8IChtYXhQcm9wLnZhbHVlIC0gbWluUHJvcC52YWx1ZSArIDEpKSB7XG4gICAgICAgIG1heFBhZ2VzID0gMSArIE1hdGguZmxvb3IobWF4UGFnZXMgLyAyKSAqIDJcbiAgICAgICAgYWNjLnBnRnJvbSA9IE1hdGgubWF4KG1pblByb3AudmFsdWUsIE1hdGgubWluKG1heFByb3AudmFsdWUgLSBtYXhQYWdlcyArIDEsIHByb3BzLm1vZGVsVmFsdWUgLSBNYXRoLmZsb29yKG1heFBhZ2VzIC8gMikpKVxuICAgICAgICBhY2MucGdUbyA9IE1hdGgubWluKG1heFByb3AudmFsdWUsIGFjYy5wZ0Zyb20gKyBtYXhQYWdlcyAtIDEpXG5cbiAgICAgICAgaWYgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUpIHtcbiAgICAgICAgICBhY2MuYm91bmRhcnlTdGFydCA9IHRydWVcbiAgICAgICAgICBhY2MucGdGcm9tKytcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGxpcHNlc1Byb3AudmFsdWUgJiYgYWNjLnBnRnJvbSA+IChtaW5Qcm9wLnZhbHVlICsgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUgPyAxIDogMCkpKSB7XG4gICAgICAgICAgYWNjLmVsbGlwc2VzU3RhcnQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnRnJvbSsrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSkge1xuICAgICAgICAgIGFjYy5ib3VuZGFyeUVuZCA9IHRydWVcbiAgICAgICAgICBhY2MucGdUby0tXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxsaXBzZXNQcm9wLnZhbHVlICYmIGFjYy5wZ1RvIDwgKG1heFByb3AudmFsdWUgLSAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSA/IDEgOiAwKSkpIHtcbiAgICAgICAgICBhY2MuZWxsaXBzZXNFbmQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnVG8tLVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0ICh2YWx1ZSkge1xuICAgICAgbW9kZWwudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEJ5T2Zmc2V0IChvZmZzZXQpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gbW9kZWwudmFsdWUgKyBvZmZzZXRcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dEV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsICgpIHtcbiAgICAgICAgbW9kZWwudmFsdWUgPSBuZXdQYWdlLnZhbHVlXG4gICAgICAgIG5ld1BhZ2UudmFsdWUgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsID0+IHsgbmV3UGFnZS52YWx1ZSA9IHZhbCB9LFxuICAgICAgICBvbktleXVwOiBlID0+IHsgaXNLZXlDb2RlKGUsIDEzKSA9PT0gdHJ1ZSAmJiB1cGRhdGVNb2RlbCgpIH0sXG4gICAgICAgIG9uQmx1cjogdXBkYXRlTW9kZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0QnRuIChjZmcsIHBhZ2UsIGFjdGl2ZSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwYWdlLFxuICAgICAgICAnYXJpYS1jdXJyZW50JzogJ2ZhbHNlJyxcbiAgICAgICAgLi4uYnRuUHJvcHMudmFsdWUsXG4gICAgICAgIC4uLmNmZ1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICdhcmlhLWN1cnJlbnQnOiAndHJ1ZScsXG4gICAgICAgICAgLi4uYWN0aXZlQnRuUHJvcHMudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICBpZiAocHJvcHMudG9GbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGF0YS50byA9IHByb3BzLnRvRm4ocGFnZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSAoKSA9PiB7IHNldChwYWdlKSB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0biwgZGF0YSlcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHNldCwgc2V0QnlPZmZzZXQgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50U3RhcnQgPSBbXVxuICAgICAgY29uc3QgY29udGVudEVuZCA9IFtdXG4gICAgICBsZXQgY29udGVudE1pZGRsZVxuXG4gICAgICBpZiAoYm91bmRhcnlMaW5rc1Byb3AudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JscycsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPD0gbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAwIF1cbiAgICAgICAgICB9LCBtaW5Qcm9wLnZhbHVlKVxuICAgICAgICApXG5cbiAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdibGUnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlID49IG1heFByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMyBdXG4gICAgICAgICAgfSwgbWF4UHJvcC52YWx1ZSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uTGlua3NQcm9wLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdiZHAnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlIDw9IG1pblByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMSBdXG4gICAgICAgICAgfSwgcHJvcHMubW9kZWxWYWx1ZSAtIDEpXG4gICAgICAgIClcblxuICAgICAgICBjb250ZW50RW5kLnVuc2hpZnQoXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JkbicsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPj0gbWF4UHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAyIF1cbiAgICAgICAgICB9LCBwcm9wcy5tb2RlbFZhbHVlICsgMSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuaW5wdXQgIT09IHRydWUpIHsgLy8gaGFzIGJ1dHRvbnMgaW5zdGVhZCBvZiBpbnB1dGJveFxuICAgICAgICBjb250ZW50TWlkZGxlID0gW11cbiAgICAgICAgY29uc3QgeyBwZ0Zyb20sIHBnVG8sIG1hcmdpbmFsU3R5bGU6IHN0eWxlIH0gPSBidG5Db25maWcudmFsdWVcblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmJvdW5kYXJ5U3RhcnQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBtaW5Qcm9wLnZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6ICdibnMnLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6IG1pblByb3AudmFsdWVcbiAgICAgICAgICAgIH0sIG1pblByb3AudmFsdWUsIGFjdGl2ZSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmJvdW5kYXJ5RW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gbWF4UHJvcC52YWx1ZSA9PT0gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICAgIGNvbnRlbnRFbmQudW5zaGlmdChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogJ2JuZScsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogbWF4UHJvcC52YWx1ZVxuICAgICAgICAgICAgfSwgbWF4UHJvcC52YWx1ZSwgYWN0aXZlKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuZWxsaXBzZXNTdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYmVzJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiAn4oCmJyxcbiAgICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwgcGdGcm9tIC0gMSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmVsbGlwc2VzRW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYmVlJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiAn4oCmJyxcbiAgICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwgcGdUbyArIDEpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBnRnJvbTsgaSA8PSBwZ1RvOyBpKyspIHtcbiAgICAgICAgICBjb250ZW50TWlkZGxlLnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6IGBicGckeyBpIH1gLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6IGlcbiAgICAgICAgICAgIH0sIGksIGkgPT09IHByb3BzLm1vZGVsVmFsdWUpXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAuLi5hdHRycy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXBhZ2luYXRpb25fX2NvbnRlbnQgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJyxcbiAgICAgICAgICBzdHlsZTogZ3V0dGVyU3R5bGUudmFsdWVcbiAgICAgICAgfSwgW1xuICAgICAgICAgIC4uLmNvbnRlbnRTdGFydCxcblxuICAgICAgICAgIHByb3BzLmlucHV0ID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoUUlucHV0LCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGAkeyBpbnB1dFBsYWNlaG9sZGVyLnZhbHVlLmxlbmd0aCAvIDEuNSB9ZW1gIH0sXG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IG5ld1BhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzczogcHJvcHMuaW5wdXRDbGFzcyxcbiAgICAgICAgICAgICAgaW5wdXRTdHlsZTogcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0UGxhY2Vob2xkZXIudmFsdWUsXG4gICAgICAgICAgICAgIG1pbjogbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgbWF4OiBtYXhQcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAuLi5pbnB1dEV2ZW50cy52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtcGFnaW5hdGlvbl9fbWlkZGxlIHJvdyBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgIH0sIGNvbnRlbnRNaWRkbGUpLFxuXG4gICAgICAgICAgLi4uY29udGVudEVuZFxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZyA6cmVmPVwicGFnZVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyBxLWd1dHRlci1tZCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgPEFsYnVtQ2FyZCB2LWZvcj1cIihhbGJ1bSwgaW5kZXgpIGluIGRpc3BsYXlBbGJ1bXNcIiA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICA6YWxidW0taW5mbz1cImFsYnVtXCI+XG4gICAgICA8L0FsYnVtQ2FyZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJxLXBhLWxnIHEtbXQtbGcgZmxleCBmbGV4LWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiBzdHlsZT1cImJvcmRlci10b3A6IDFweCBzb2xpZCAjNTQ1NDU0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwidmFsdWVcIiBsYWJlbD1cIkF1dG8gQWR2YW5jZVwiIGxlZnQtbGFiZWwgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItbWRcIj5cbiAgICAgICAgPHEtcGFnaW5hdGlvblxuICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudFwiXG4gICAgICAgICAgbWF4PVwiMjM2XCJcbiAgICAgICAgICBtYXgtcGFnZXM9XCI3XCJcbiAgICAgICAgICBkaXJlY3Rpb24tbGlua3NcbiAgICAgICAgICBndXR0ZXI9XCIyMHB4XCJcbiAgICAgICAgICBzaXplPVwiMThweFwiXG4gICAgICAgICAgb3V0bGluZVxuXG4gICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIm9uUGFnZUNoYW5nZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcS1teC1tZFwiPlxuICAgICAgICAgIDxkaXY+QWxidW1zIHBlciBwYWdlOjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHEtc2VsZWN0IGRlbnNlIHYtbW9kZWw9XCJtb2RlbFwiIDpvcHRpb25zPVwib3B0aW9uc1wiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0FsYnVtQXBpLCBBbGJ1bVJlYWREdG99IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7b25Nb3VudGVkLCBvblVwZGF0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQWxidW1DYXJkIGZyb20gJ2NvbXBvbmVudHMvQWxidW1DYXJkLnZ1ZSc7XG5cbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpO1xuY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcblxuY29uc3QgZGlzcGxheUFsYnVtcyA9IHJlZjxBbGJ1bVJlYWREdG9bXT4oW10pXG5cbmNvbnN0IHsgc2V0Q29sb3JzIH0gPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgY3VycmVudCA9IHJlZigxKTtcblxuY29uc3QgbW9kZWwgPSByZWYoJzUwJyk7XG5jb25zdCB2YWx1ZSA9IHJlZih0cnVlKTtcbmNvbnN0IG9wdGlvbnMgPSBbJzI1JywgJzUwJywgJzc1JywgJzEwMCddO1xuXG5jb25zdCBwYWdlID0gcmVmPEVsZW1lbnQ+KCk7XG5cbmNvbnN0IG9uUGFnZUNoYW5nZSA9IChwZzogbnVtYmVyKSA9PiB7XG4gIGxvYWRQYWdlKHBnKTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKGluZGV4OiBudW1iZXIsIGJ5cGFzc1B1c2hSb3V0ZT1mYWxzZSkge1xuICBpZiAoIWJ5cGFzc1B1c2hSb3V0ZSlcbiAge1xuICAgIHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWVQYWdpbmF0ZScsIHBhcmFtczogeyBwYWdlOiBjdXJyZW50LnZhbHVlIH0gfSlcbiAgfVxuXG4gIGFsYnVtQXBpLmdldEFsYnVtcyh7c3RhcnQ6IChpbmRleCAtIDEpICogNTAsIGxpbWl0OiA1MH0pLnRoZW4oKHJlc3ApID0+IHtcbiAgICBkaXNwbGF5QWxidW1zLnZhbHVlID0gcmVzcDtcbiAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogJ2F1dG8nXG4gICAgfSlcbiAgfSk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBOdW1iZXIucGFyc2VJbnQoPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlIHx8ICcxJyk7XG4gIGN1cnJlbnQudmFsdWUgPSBwYWdlO1xuICBsb2FkUGFnZShwYWdlKTtcblxuICB3YXRjaCgoKSA9PiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlLCAodG8sIGZyb20pID0+IHtcbiAgICBpZiAocm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5uYW1lICE9PSAnaG9tZVBhZ2luYXRlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBBbHNvIG5lZWQgdG8gY2hlY2sgaWZcbiAgICBsZXQgdG9QYWdlID0gTnVtYmVyLnBhcnNlSW50KDxzdHJpbmc+dG8pO1xuICAgIGlmIChOdW1iZXIuaXNOYU4odG9QYWdlKSkge1xuICAgICAgY3VycmVudC52YWx1ZSA9IDE7XG4gICAgICBsb2FkUGFnZSgxKTtcbiAgICB9XG4gICAgaWYgKHRvUGFnZSAhPT0gY3VycmVudC52YWx1ZSl7XG4gICAgICBjdXJyZW50LnZhbHVlID0gdG9QYWdlO1xuICAgICAgbG9hZFBhZ2UodG9QYWdlLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGFnZSA9IE51bWJlci5wYXJzZUludCg8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLnBhZ2UgfHwgJzEnKTtcbiAgY3VycmVudC52YWx1ZSA9IHBhZ2U7XG59KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFZQSxTQUFTLFFBQVMsS0FBSyxXQUFXO0FBQ2hDLFNBQU8sQ0FBRSxNQUFNLE9BQVEsU0FBUyxHQUFHLElBQy9CLE1BQ0E7QUFDTjtBQUVBLElBQUEsY0FBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFFSCxZQUFZO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWDtBQUFBLElBQ0QsS0FBSztBQUFBLE1BQ0gsTUFBTSxDQUFFLFFBQVEsTUFBUTtBQUFBLE1BQ3hCLFNBQVM7QUFBQSxJQUNWO0FBQUEsSUFDRCxLQUFLO0FBQUEsTUFDSCxNQUFNLENBQUUsUUFBUSxNQUFRO0FBQUEsTUFDeEIsVUFBVTtBQUFBLElBQ1g7QUFBQSxJQUNELFVBQVU7QUFBQSxNQUNSLE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsTUFDVCxXQUFXLFFBQ1IsT0FBTyxNQUFNLFdBQVcsU0FBUyxHQUFHLEVBQUUsSUFBSSxNQUFNO0FBQUEsSUFFcEQ7QUFBQSxJQUVELFlBQVksQ0FBRSxPQUFPLFFBQVEsTUFBUTtBQUFBLElBQ3JDLFlBQVksQ0FBRSxPQUFPLFFBQVEsTUFBUTtBQUFBLElBRXJDLE1BQU07QUFBQSxJQUVOLFNBQVM7QUFBQSxJQUVULE9BQU87QUFBQSxJQUVQLFVBQVU7QUFBQSxJQUNWLFVBQVU7QUFBQSxJQUNWLFdBQVc7QUFBQSxJQUNYLFVBQVU7QUFBQSxJQUVWLE1BQU07QUFBQSxJQUVOLGVBQWU7QUFBQSxNQUNiLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNWO0FB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

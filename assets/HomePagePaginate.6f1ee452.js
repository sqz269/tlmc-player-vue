import { k as createComponent, t as useDarkProps, bf as btnDesignOptions, x as useDark, c as computed, r as ref, w as watch, bg as btnPadding, bh as getBtnDesign, aF as isKeyCode, h, aB as QInput, g as getCurrentInstance, a0 as QBtn, _ as _export_sfc, P as defineComponent, aA as ApiConfigProvider, bi as AlbumApi, R as useRouter, o as onMounted, bj as onUpdated, U as openBlock, V as createBlock, W as withCtx, Y as createBaseVNode, ab as createElementBlock, aq as renderList, F as Fragment, d as createVNode, bk as QToggle } from "./index.45451307.js";
import { b as between } from "./format.60347260.js";
import { Q as QSelect } from "./QSelect.ca1a20bb.js";
import { Q as QPage } from "./QPage.0ffa0e9d.js";
import { A as AlbumCard } from "./AlbumCard.19e9b6e1.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.4313d33a.js";
import "./rtl.6f981b96.js";
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
const _hoisted_1 = { class: "row q-gutter-md" };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VQYWdpbmF0ZS42ZjFlZTQ1Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1FQYWdpbmF0aW9uLmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0hvbWVQYWdlUGFnaW5hdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgd2F0Y2gsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFJbnB1dCBmcm9tICcuLi9pbnB1dC9RSW5wdXQuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyBidG5EZXNpZ25PcHRpb25zLCBidG5QYWRkaW5nLCBnZXRCdG5EZXNpZ24gfSBmcm9tICcuLi9idG4vdXNlLWJ0bi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5cbmZ1bmN0aW9uIGdldEJvb2wgKHZhbCwgb3RoZXJ3aXNlKSB7XG4gIHJldHVybiBbIHRydWUsIGZhbHNlIF0uaW5jbHVkZXModmFsKVxuICAgID8gdmFsXG4gICAgOiBvdGhlcndpc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdpbmF0aW9uJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBtaW46IHtcbiAgICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICAgIGRlZmF1bHQ6IDFcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1heFBhZ2VzOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IChcbiAgICAgICAgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHYsIDEwKSA6IHYpID49IDBcbiAgICAgIClcbiAgICB9LFxuXG4gICAgaW5wdXRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBpbnB1dENsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgc2l6ZTogU3RyaW5nLFxuXG4gICAgZGlzYWJsZTogQm9vbGVhbixcblxuICAgIGlucHV0OiBCb29sZWFuLFxuXG4gICAgaWNvblByZXY6IFN0cmluZyxcbiAgICBpY29uTmV4dDogU3RyaW5nLFxuICAgIGljb25GaXJzdDogU3RyaW5nLFxuICAgIGljb25MYXN0OiBTdHJpbmcsXG5cbiAgICB0b0ZuOiBGdW5jdGlvbixcblxuICAgIGJvdW5kYXJ5TGlua3M6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBib3VuZGFyeU51bWJlcnM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBkaXJlY3Rpb25MaW5rczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGVsbGlwc2VzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHJvdW5kOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBwdXNoOiBCb29sZWFuLFxuICAgIGdsb3NzeTogQm9vbGVhbixcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeSdcbiAgICB9LFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgYWN0aXZlRGVzaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIHZhbHVlczogdiA9PiB2ID09PSAnJyB8fCBidG5EZXNpZ25PcHRpb25zLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIGFjdGl2ZVRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgZ3V0dGVyOiBTdHJpbmcsXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzNweCAycHgnXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgICBjb25zdCBtaW5Qcm9wID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMubWluLCAxMCkpXG4gICAgY29uc3QgbWF4UHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heCwgMTApKVxuICAgIGNvbnN0IG1heFBhZ2VzUHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heFBhZ2VzLCAxMCkpXG5cbiAgICBjb25zdCBpbnB1dFBsYWNlaG9sZGVyID0gY29tcHV0ZWQoKCkgPT4gbW9kZWwudmFsdWUgKyAnIC8gJyArIG1heFByb3AudmFsdWUpXG4gICAgY29uc3QgYm91bmRhcnlMaW5rc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBnZXRCb29sKHByb3BzLmJvdW5kYXJ5TGlua3MsIHByb3BzLmlucHV0KSlcbiAgICBjb25zdCBib3VuZGFyeU51bWJlcnNQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5ib3VuZGFyeU51bWJlcnMsICFwcm9wcy5pbnB1dCkpXG4gICAgY29uc3QgZGlyZWN0aW9uTGlua3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5kaXJlY3Rpb25MaW5rcywgcHJvcHMuaW5wdXQpKVxuICAgIGNvbnN0IGVsbGlwc2VzUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJvb2wocHJvcHMuZWxsaXBzZXMsICFwcm9wcy5pbnB1dCkpXG5cbiAgICBjb25zdCBuZXdQYWdlID0gcmVmKG51bGwpXG4gICAgY29uc3QgbW9kZWwgPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IHByb3BzLm1vZGVsVmFsdWUsXG4gICAgICBzZXQ6IHZhbCA9PiB7XG4gICAgICAgIHZhbCA9IHBhcnNlSW50KHZhbCwgMTApXG4gICAgICAgIGlmIChwcm9wcy5kaXNhYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGJldHdlZW4odmFsLCBtaW5Qcm9wLnZhbHVlLCBtYXhQcm9wLnZhbHVlKVxuICAgICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IGAkeyBtaW5Qcm9wLnZhbHVlIH18JHsgbWF4UHJvcC52YWx1ZSB9YCwgKCkgPT4ge1xuICAgICAgbW9kZWwudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtcGFnaW5hdGlvbiByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBndXR0ZXJQcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZ3V0dGVyIGluIGJ0blBhZGRpbmdcbiAgICAgICAgPyBgJHsgYnRuUGFkZGluZ1sgcHJvcHMuZ3V0dGVyIF0gfXB4YFxuICAgICAgICA6IHByb3BzLmd1dHRlciB8fCBudWxsXG4gICAgKSlcbiAgICBjb25zdCBndXR0ZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGd1dHRlclByb3AudmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBgLS1xLXBhZ2luYXRpb24tZ3V0dGVyLXBhcmVudDotJHsgZ3V0dGVyUHJvcC52YWx1ZSB9Oy0tcS1wYWdpbmF0aW9uLWd1dHRlci1jaGlsZDokeyBndXR0ZXJQcm9wLnZhbHVlIH1gXG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCBpY29ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGljbyA9IFtcbiAgICAgICAgcHJvcHMuaWNvbkZpcnN0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5maXJzdCxcbiAgICAgICAgcHJvcHMuaWNvblByZXYgfHwgJHEuaWNvblNldC5wYWdpbmF0aW9uLnByZXYsXG4gICAgICAgIHByb3BzLmljb25OZXh0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5uZXh0LFxuICAgICAgICBwcm9wcy5pY29uTGFzdCB8fCAkcS5pY29uU2V0LnBhZ2luYXRpb24ubGFzdFxuICAgICAgXVxuICAgICAgcmV0dXJuICRxLmxhbmcucnRsID09PSB0cnVlID8gaWNvLnJldmVyc2UoKSA6IGljb1xuICAgIH0pXG5cbiAgICBjb25zdCBhdHRycyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgcm9sZTogJ25hdmlnYXRpb24nXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5EZXNpZ25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduKHByb3BzLCAnZmxhdCcpKVxuICAgIGNvbnN0IGJ0blByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIFsgYnRuRGVzaWduUHJvcC52YWx1ZSBdOiB0cnVlLFxuXG4gICAgICByb3VuZDogcHJvcHMucm91bmQsXG4gICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuXG4gICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxuXG4gICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICB0ZXh0Q29sb3I6IHByb3BzLnRleHRDb2xvcixcblxuICAgICAgc2l6ZTogcHJvcHMuc2l6ZSxcbiAgICAgIHJpcHBsZTogcHJvcHMucmlwcGxlICE9PSBudWxsXG4gICAgICAgID8gcHJvcHMucmlwcGxlXG4gICAgICAgIDogdHJ1ZVxuICAgIH0pKVxuXG4gICAgY29uc3QgYnRuQWN0aXZlRGVzaWduUHJvcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIHdlIGFsc28gcmVzZXQgbm9uLWFjdGl2ZSBkZXNpZ25cbiAgICAgIGNvbnN0IGFjYyA9IHsgWyBidG5EZXNpZ25Qcm9wLnZhbHVlIF06IGZhbHNlIH1cbiAgICAgIGlmIChwcm9wcy5hY3RpdmVEZXNpZ24gIT09ICcnKSB7XG4gICAgICAgIGFjY1sgcHJvcHMuYWN0aXZlRGVzaWduIF0gPSB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcbiAgICBjb25zdCBhY3RpdmVCdG5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi5idG5BY3RpdmVEZXNpZ25Qcm9wLnZhbHVlLFxuICAgICAgY29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yIHx8IHByb3BzLmNvbG9yLFxuICAgICAgdGV4dENvbG9yOiBwcm9wcy5hY3RpdmVUZXh0Q29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5Db25maWcgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgbWF4UGFnZXMgPSBNYXRoLm1heChcbiAgICAgICAgbWF4UGFnZXNQcm9wLnZhbHVlLFxuICAgICAgICAxICsgKGVsbGlwc2VzUHJvcC52YWx1ZSA/IDIgOiAwKSArIChib3VuZGFyeU51bWJlcnNQcm9wLnZhbHVlID8gMiA6IDApXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgcGdGcm9tOiBtaW5Qcm9wLnZhbHVlLFxuICAgICAgICBwZ1RvOiBtYXhQcm9wLnZhbHVlLFxuICAgICAgICBlbGxpcHNlc1N0YXJ0OiBmYWxzZSxcbiAgICAgICAgZWxsaXBzZXNFbmQ6IGZhbHNlLFxuICAgICAgICBib3VuZGFyeVN0YXJ0OiBmYWxzZSxcbiAgICAgICAgYm91bmRhcnlFbmQ6IGZhbHNlLFxuICAgICAgICBtYXJnaW5hbFN0eWxlOiB7XG4gICAgICAgICAgbWluV2lkdGg6IGAkeyBNYXRoLm1heCgyLCBTdHJpbmcobWF4UHJvcC52YWx1ZSkubGVuZ3RoKSB9ZW1gXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1heFBhZ2VzUHJvcC52YWx1ZSAmJiBtYXhQYWdlcyA8IChtYXhQcm9wLnZhbHVlIC0gbWluUHJvcC52YWx1ZSArIDEpKSB7XG4gICAgICAgIG1heFBhZ2VzID0gMSArIE1hdGguZmxvb3IobWF4UGFnZXMgLyAyKSAqIDJcbiAgICAgICAgYWNjLnBnRnJvbSA9IE1hdGgubWF4KG1pblByb3AudmFsdWUsIE1hdGgubWluKG1heFByb3AudmFsdWUgLSBtYXhQYWdlcyArIDEsIHByb3BzLm1vZGVsVmFsdWUgLSBNYXRoLmZsb29yKG1heFBhZ2VzIC8gMikpKVxuICAgICAgICBhY2MucGdUbyA9IE1hdGgubWluKG1heFByb3AudmFsdWUsIGFjYy5wZ0Zyb20gKyBtYXhQYWdlcyAtIDEpXG5cbiAgICAgICAgaWYgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUpIHtcbiAgICAgICAgICBhY2MuYm91bmRhcnlTdGFydCA9IHRydWVcbiAgICAgICAgICBhY2MucGdGcm9tKytcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGxpcHNlc1Byb3AudmFsdWUgJiYgYWNjLnBnRnJvbSA+IChtaW5Qcm9wLnZhbHVlICsgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUgPyAxIDogMCkpKSB7XG4gICAgICAgICAgYWNjLmVsbGlwc2VzU3RhcnQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnRnJvbSsrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSkge1xuICAgICAgICAgIGFjYy5ib3VuZGFyeUVuZCA9IHRydWVcbiAgICAgICAgICBhY2MucGdUby0tXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxsaXBzZXNQcm9wLnZhbHVlICYmIGFjYy5wZ1RvIDwgKG1heFByb3AudmFsdWUgLSAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSA/IDEgOiAwKSkpIHtcbiAgICAgICAgICBhY2MuZWxsaXBzZXNFbmQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnVG8tLVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0ICh2YWx1ZSkge1xuICAgICAgbW9kZWwudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEJ5T2Zmc2V0IChvZmZzZXQpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gbW9kZWwudmFsdWUgKyBvZmZzZXRcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dEV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsICgpIHtcbiAgICAgICAgbW9kZWwudmFsdWUgPSBuZXdQYWdlLnZhbHVlXG4gICAgICAgIG5ld1BhZ2UudmFsdWUgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsID0+IHsgbmV3UGFnZS52YWx1ZSA9IHZhbCB9LFxuICAgICAgICBvbktleXVwOiBlID0+IHsgaXNLZXlDb2RlKGUsIDEzKSA9PT0gdHJ1ZSAmJiB1cGRhdGVNb2RlbCgpIH0sXG4gICAgICAgIG9uQmx1cjogdXBkYXRlTW9kZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0QnRuIChjZmcsIHBhZ2UsIGFjdGl2ZSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwYWdlLFxuICAgICAgICAnYXJpYS1jdXJyZW50JzogJ2ZhbHNlJyxcbiAgICAgICAgLi4uYnRuUHJvcHMudmFsdWUsXG4gICAgICAgIC4uLmNmZ1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICdhcmlhLWN1cnJlbnQnOiAndHJ1ZScsXG4gICAgICAgICAgLi4uYWN0aXZlQnRuUHJvcHMudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICBpZiAocHJvcHMudG9GbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGF0YS50byA9IHByb3BzLnRvRm4ocGFnZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSAoKSA9PiB7IHNldChwYWdlKSB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0biwgZGF0YSlcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHNldCwgc2V0QnlPZmZzZXQgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50U3RhcnQgPSBbXVxuICAgICAgY29uc3QgY29udGVudEVuZCA9IFtdXG4gICAgICBsZXQgY29udGVudE1pZGRsZVxuXG4gICAgICBpZiAoYm91bmRhcnlMaW5rc1Byb3AudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JscycsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPD0gbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAwIF1cbiAgICAgICAgICB9LCBtaW5Qcm9wLnZhbHVlKVxuICAgICAgICApXG5cbiAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdibGUnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlID49IG1heFByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMyBdXG4gICAgICAgICAgfSwgbWF4UHJvcC52YWx1ZSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uTGlua3NQcm9wLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdiZHAnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlIDw9IG1pblByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMSBdXG4gICAgICAgICAgfSwgcHJvcHMubW9kZWxWYWx1ZSAtIDEpXG4gICAgICAgIClcblxuICAgICAgICBjb250ZW50RW5kLnVuc2hpZnQoXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JkbicsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPj0gbWF4UHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAyIF1cbiAgICAgICAgICB9LCBwcm9wcy5tb2RlbFZhbHVlICsgMSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuaW5wdXQgIT09IHRydWUpIHsgLy8gaGFzIGJ1dHRvbnMgaW5zdGVhZCBvZiBpbnB1dGJveFxuICAgICAgICBjb250ZW50TWlkZGxlID0gW11cbiAgICAgICAgY29uc3QgeyBwZ0Zyb20sIHBnVG8sIG1hcmdpbmFsU3R5bGU6IHN0eWxlIH0gPSBidG5Db25maWcudmFsdWVcblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmJvdW5kYXJ5U3RhcnQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBtaW5Qcm9wLnZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6ICdibnMnLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6IG1pblByb3AudmFsdWVcbiAgICAgICAgICAgIH0sIG1pblByb3AudmFsdWUsIGFjdGl2ZSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmJvdW5kYXJ5RW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gbWF4UHJvcC52YWx1ZSA9PT0gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICAgIGNvbnRlbnRFbmQudW5zaGlmdChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogJ2JuZScsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogbWF4UHJvcC52YWx1ZVxuICAgICAgICAgICAgfSwgbWF4UHJvcC52YWx1ZSwgYWN0aXZlKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuZWxsaXBzZXNTdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYmVzJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiAn4oCmJyxcbiAgICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwgcGdGcm9tIC0gMSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmVsbGlwc2VzRW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYmVlJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiAn4oCmJyxcbiAgICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwgcGdUbyArIDEpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBnRnJvbTsgaSA8PSBwZ1RvOyBpKyspIHtcbiAgICAgICAgICBjb250ZW50TWlkZGxlLnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6IGBicGckeyBpIH1gLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6IGlcbiAgICAgICAgICAgIH0sIGksIGkgPT09IHByb3BzLm1vZGVsVmFsdWUpXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAuLi5hdHRycy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXBhZ2luYXRpb25fX2NvbnRlbnQgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJyxcbiAgICAgICAgICBzdHlsZTogZ3V0dGVyU3R5bGUudmFsdWVcbiAgICAgICAgfSwgW1xuICAgICAgICAgIC4uLmNvbnRlbnRTdGFydCxcblxuICAgICAgICAgIHByb3BzLmlucHV0ID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoUUlucHV0LCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGAkeyBpbnB1dFBsYWNlaG9sZGVyLnZhbHVlLmxlbmd0aCAvIDEuNSB9ZW1gIH0sXG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IG5ld1BhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzczogcHJvcHMuaW5wdXRDbGFzcyxcbiAgICAgICAgICAgICAgaW5wdXRTdHlsZTogcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0UGxhY2Vob2xkZXIudmFsdWUsXG4gICAgICAgICAgICAgIG1pbjogbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgbWF4OiBtYXhQcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAuLi5pbnB1dEV2ZW50cy52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtcGFnaW5hdGlvbl9fbWlkZGxlIHJvdyBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgIH0sIGNvbnRlbnRNaWRkbGUpLFxuXG4gICAgICAgICAgLi4uY29udGVudEVuZFxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZyA6cmVmPVwicGFnZVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyBxLWd1dHRlci1tZFwiPlxuICAgICAgPEFsYnVtQ2FyZCB2LWZvcj1cIihhbGJ1bSwgaW5kZXgpIGluIGRpc3BsYXlBbGJ1bXNcIiA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICA6YWxidW0taW5mbz1cImFsYnVtXCI+XG4gICAgICA8L0FsYnVtQ2FyZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJxLXBhLWxnIHEtbXQtbGcgZmxleCBmbGV4LWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiBzdHlsZT1cImJvcmRlci10b3A6IDFweCBzb2xpZCAjNTQ1NDU0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwidmFsdWVcIiBsYWJlbD1cIkF1dG8gQWR2YW5jZVwiIGxlZnQtbGFiZWwgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItbWRcIj5cbiAgICAgICAgPHEtcGFnaW5hdGlvblxuICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudFwiXG4gICAgICAgICAgbWF4PVwiMjM2XCJcbiAgICAgICAgICBtYXgtcGFnZXM9XCI3XCJcbiAgICAgICAgICBkaXJlY3Rpb24tbGlua3NcbiAgICAgICAgICBndXR0ZXI9XCIyMHB4XCJcbiAgICAgICAgICBzaXplPVwiMThweFwiXG4gICAgICAgICAgb3V0bGluZVxuXG4gICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIm9uUGFnZUNoYW5nZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcS1teC1tZFwiPlxuICAgICAgICAgIDxkaXY+QWxidW1zIHBlciBwYWdlOjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHEtc2VsZWN0IGRlbnNlIHYtbW9kZWw9XCJtb2RlbFwiIDpvcHRpb25zPVwib3B0aW9uc1wiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0FsYnVtQXBpLCBBbGJ1bVJlYWREdG99IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7b25Nb3VudGVkLCBvblVwZGF0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQWxidW1DYXJkIGZyb20gJ2NvbXBvbmVudHMvQWxidW1DYXJkLnZ1ZSc7XG5cbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpO1xuY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcblxuY29uc3QgZGlzcGxheUFsYnVtcyA9IHJlZjxBbGJ1bVJlYWREdG9bXT4oW10pXG5cbmNvbnN0IHsgc2V0Q29sb3JzIH0gPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgY3VycmVudCA9IHJlZigxKTtcblxuY29uc3QgbW9kZWwgPSByZWYoJzUwJyk7XG5jb25zdCB2YWx1ZSA9IHJlZih0cnVlKTtcbmNvbnN0IG9wdGlvbnMgPSBbJzI1JywgJzUwJywgJzc1JywgJzEwMCddO1xuXG5jb25zdCBwYWdlID0gcmVmPEVsZW1lbnQ+KCk7XG5cbmNvbnN0IG9uUGFnZUNoYW5nZSA9IChwZzogbnVtYmVyKSA9PiB7XG4gIGxvYWRQYWdlKHBnKTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKGluZGV4OiBudW1iZXIsIGJ5cGFzc1B1c2hSb3V0ZT1mYWxzZSkge1xuICBpZiAoIWJ5cGFzc1B1c2hSb3V0ZSlcbiAge1xuICAgIHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWVQYWdpbmF0ZScsIHBhcmFtczogeyBwYWdlOiBjdXJyZW50LnZhbHVlIH0gfSlcbiAgfVxuXG4gIGFsYnVtQXBpLmdldEFsYnVtcyh7c3RhcnQ6IChpbmRleCAtIDEpICogNTAsIGxpbWl0OiA1MH0pLnRoZW4oKHJlc3ApID0+IHtcbiAgICBkaXNwbGF5QWxidW1zLnZhbHVlID0gcmVzcDtcbiAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogJ2F1dG8nXG4gICAgfSlcbiAgfSk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBOdW1iZXIucGFyc2VJbnQoPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlIHx8ICcxJyk7XG4gIGN1cnJlbnQudmFsdWUgPSBwYWdlO1xuICBsb2FkUGFnZShwYWdlKTtcblxuICB3YXRjaCgoKSA9PiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlLCAodG8sIGZyb20pID0+IHtcbiAgICBsZXQgdG9QYWdlID0gTnVtYmVyLnBhcnNlSW50KDxzdHJpbmc+dG8pO1xuICAgIGlmIChOdW1iZXIuaXNOYU4odG9QYWdlKSkge1xuICAgICAgY3VycmVudC52YWx1ZSA9IDE7XG4gICAgICBsb2FkUGFnZSgxKTtcbiAgICB9XG4gICAgaWYgKHRvUGFnZSAhPT0gY3VycmVudC52YWx1ZSl7XG4gICAgICBjdXJyZW50LnZhbHVlID0gdG9QYWdlO1xuICAgICAgbG9hZFBhZ2UodG9QYWdlLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGFnZSA9IE51bWJlci5wYXJzZUludCg8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLnBhZ2UgfHwgJzEnKTtcbiAgY3VycmVudC52YWx1ZSA9IHBhZ2U7XG59KVxuPC9z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

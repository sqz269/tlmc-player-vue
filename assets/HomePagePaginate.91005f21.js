import { k as createComponent, t as useDarkProps, bx as btnDesignOptions, x as useDark, c as computed, r as ref, w as watch, by as btnPadding, bz as getBtnDesign, aF as isKeyCode, h, aB as QInput, g as getCurrentInstance, a0 as QBtn, _ as _export_sfc, P as defineComponent, aA as ApiConfigProvider, bA as AlbumApi, R as useRouter, o as onMounted, bh as onUpdated, U as openBlock, V as createBlock, W as withCtx, Y as createBaseVNode, ab as createElementBlock, aq as renderList, F as Fragment, d as createVNode, bB as QToggle } from "./index.b87ff47c.js";
import { b as between } from "./format.a33550d6.js";
import { a as QSelect } from "./QSelect.dccdf4ba.js";
import { Q as QPage } from "./QPage.efd07f4e.js";
import { A as AlbumCard } from "./AlbumCard.aa4a51c3.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.3b03914f.js";
import "./QItem.2dfe0bb5.js";
import "./position-engine.fe93c0f4.js";
import "./QImg.b306e3b8.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VQYWdpbmF0ZS45MTAwNWYyMS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9wYWdpbmF0aW9uL1FQYWdpbmF0aW9uLmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0hvbWVQYWdlUGFnaW5hdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGgsIHJlZiwgd2F0Y2gsIGNvbXB1dGVkLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRQnRuIGZyb20gJy4uL2J0bi9RQnRuLmpzJ1xuaW1wb3J0IFFJbnB1dCBmcm9tICcuLi9pbnB1dC9RSW5wdXQuanMnXG5cbmltcG9ydCB1c2VEYXJrLCB7IHVzZURhcmtQcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLWRhcmsuanMnXG5pbXBvcnQgeyBidG5EZXNpZ25PcHRpb25zLCBidG5QYWRkaW5nLCBnZXRCdG5EZXNpZ24gfSBmcm9tICcuLi9idG4vdXNlLWJ0bi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgaXNLZXlDb2RlIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9rZXktY29tcG9zaXRpb24uanMnXG5cbmZ1bmN0aW9uIGdldEJvb2wgKHZhbCwgb3RoZXJ3aXNlKSB7XG4gIHJldHVybiBbIHRydWUsIGZhbHNlIF0uaW5jbHVkZXModmFsKVxuICAgID8gdmFsXG4gICAgOiBvdGhlcndpc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FQYWdpbmF0aW9uJyxcblxuICBwcm9wczoge1xuICAgIC4uLnVzZURhcmtQcm9wcyxcblxuICAgIG1vZGVsVmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBtaW46IHtcbiAgICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICAgIGRlZmF1bHQ6IDFcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIG1heFBhZ2VzOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiAwLFxuICAgICAgdmFsaWRhdG9yOiB2ID0+IChcbiAgICAgICAgKHR5cGVvZiB2ID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHYsIDEwKSA6IHYpID49IDBcbiAgICAgIClcbiAgICB9LFxuXG4gICAgaW5wdXRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBpbnB1dENsYXNzOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuXG4gICAgc2l6ZTogU3RyaW5nLFxuXG4gICAgZGlzYWJsZTogQm9vbGVhbixcblxuICAgIGlucHV0OiBCb29sZWFuLFxuXG4gICAgaWNvblByZXY6IFN0cmluZyxcbiAgICBpY29uTmV4dDogU3RyaW5nLFxuICAgIGljb25GaXJzdDogU3RyaW5nLFxuICAgIGljb25MYXN0OiBTdHJpbmcsXG5cbiAgICB0b0ZuOiBGdW5jdGlvbixcblxuICAgIGJvdW5kYXJ5TGlua3M6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBib3VuZGFyeU51bWJlcnM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBkaXJlY3Rpb25MaW5rczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGVsbGlwc2VzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICByaXBwbGU6IHtcbiAgICAgIHR5cGU6IFsgQm9vbGVhbiwgT2JqZWN0IF0sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcblxuICAgIHJvdW5kOiBCb29sZWFuLFxuICAgIHJvdW5kZWQ6IEJvb2xlYW4sXG5cbiAgICBmbGF0OiBCb29sZWFuLFxuICAgIG91dGxpbmU6IEJvb2xlYW4sXG4gICAgdW5lbGV2YXRlZDogQm9vbGVhbixcbiAgICBwdXNoOiBCb29sZWFuLFxuICAgIGdsb3NzeTogQm9vbGVhbixcblxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAncHJpbWFyeSdcbiAgICB9LFxuICAgIHRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgYWN0aXZlRGVzaWduOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIHZhbHVlczogdiA9PiB2ID09PSAnJyB8fCBidG5EZXNpZ25PcHRpb25zLmluY2x1ZGVzKHYpXG4gICAgfSxcbiAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgIGFjdGl2ZVRleHRDb2xvcjogU3RyaW5nLFxuXG4gICAgZ3V0dGVyOiBTdHJpbmcsXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJzNweCAycHgnXG4gICAgfVxuICB9LFxuXG4gIGVtaXRzOiBbICd1cGRhdGU6bW9kZWxWYWx1ZScgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgZW1pdCB9KSB7XG4gICAgY29uc3QgeyBwcm94eSB9ID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBjb25zdCB7ICRxIH0gPSBwcm94eVxuXG4gICAgY29uc3QgaXNEYXJrID0gdXNlRGFyayhwcm9wcywgJHEpXG5cbiAgICBjb25zdCBtaW5Qcm9wID0gY29tcHV0ZWQoKCkgPT4gcGFyc2VJbnQocHJvcHMubWluLCAxMCkpXG4gICAgY29uc3QgbWF4UHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heCwgMTApKVxuICAgIGNvbnN0IG1heFBhZ2VzUHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1heFBhZ2VzLCAxMCkpXG5cbiAgICBjb25zdCBpbnB1dFBsYWNlaG9sZGVyID0gY29tcHV0ZWQoKCkgPT4gbW9kZWwudmFsdWUgKyAnIC8gJyArIG1heFByb3AudmFsdWUpXG4gICAgY29uc3QgYm91bmRhcnlMaW5rc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBnZXRCb29sKHByb3BzLmJvdW5kYXJ5TGlua3MsIHByb3BzLmlucHV0KSlcbiAgICBjb25zdCBib3VuZGFyeU51bWJlcnNQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5ib3VuZGFyeU51bWJlcnMsICFwcm9wcy5pbnB1dCkpXG4gICAgY29uc3QgZGlyZWN0aW9uTGlua3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5kaXJlY3Rpb25MaW5rcywgcHJvcHMuaW5wdXQpKVxuICAgIGNvbnN0IGVsbGlwc2VzUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJvb2wocHJvcHMuZWxsaXBzZXMsICFwcm9wcy5pbnB1dCkpXG5cbiAgICBjb25zdCBuZXdQYWdlID0gcmVmKG51bGwpXG4gICAgY29uc3QgbW9kZWwgPSBjb21wdXRlZCh7XG4gICAgICBnZXQ6ICgpID0+IHByb3BzLm1vZGVsVmFsdWUsXG4gICAgICBzZXQ6IHZhbCA9PiB7XG4gICAgICAgIHZhbCA9IHBhcnNlSW50KHZhbCwgMTApXG4gICAgICAgIGlmIChwcm9wcy5kaXNhYmxlIHx8IGlzTmFOKHZhbCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWx1ZSA9IGJldHdlZW4odmFsLCBtaW5Qcm9wLnZhbHVlLCBtYXhQcm9wLnZhbHVlKVxuICAgICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IGAkeyBtaW5Qcm9wLnZhbHVlIH18JHsgbWF4UHJvcC52YWx1ZSB9YCwgKCkgPT4ge1xuICAgICAgbW9kZWwudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtcGFnaW5hdGlvbiByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBndXR0ZXJQcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZ3V0dGVyIGluIGJ0blBhZGRpbmdcbiAgICAgICAgPyBgJHsgYnRuUGFkZGluZ1sgcHJvcHMuZ3V0dGVyIF0gfXB4YFxuICAgICAgICA6IHByb3BzLmd1dHRlciB8fCBudWxsXG4gICAgKSlcbiAgICBjb25zdCBndXR0ZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGd1dHRlclByb3AudmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBgLS1xLXBhZ2luYXRpb24tZ3V0dGVyLXBhcmVudDotJHsgZ3V0dGVyUHJvcC52YWx1ZSB9Oy0tcS1wYWdpbmF0aW9uLWd1dHRlci1jaGlsZDokeyBndXR0ZXJQcm9wLnZhbHVlIH1gXG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCBpY29ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGljbyA9IFtcbiAgICAgICAgcHJvcHMuaWNvbkZpcnN0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5maXJzdCxcbiAgICAgICAgcHJvcHMuaWNvblByZXYgfHwgJHEuaWNvblNldC5wYWdpbmF0aW9uLnByZXYsXG4gICAgICAgIHByb3BzLmljb25OZXh0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5uZXh0LFxuICAgICAgICBwcm9wcy5pY29uTGFzdCB8fCAkcS5pY29uU2V0LnBhZ2luYXRpb24ubGFzdFxuICAgICAgXVxuICAgICAgcmV0dXJuICRxLmxhbmcucnRsID09PSB0cnVlID8gaWNvLnJldmVyc2UoKSA6IGljb1xuICAgIH0pXG5cbiAgICBjb25zdCBhdHRycyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgcm9sZTogJ25hdmlnYXRpb24nXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5EZXNpZ25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduKHByb3BzLCAnZmxhdCcpKVxuICAgIGNvbnN0IGJ0blByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIFsgYnRuRGVzaWduUHJvcC52YWx1ZSBdOiB0cnVlLFxuXG4gICAgICByb3VuZDogcHJvcHMucm91bmQsXG4gICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuXG4gICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxuXG4gICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICB0ZXh0Q29sb3I6IHByb3BzLnRleHRDb2xvcixcblxuICAgICAgc2l6ZTogcHJvcHMuc2l6ZSxcbiAgICAgIHJpcHBsZTogcHJvcHMucmlwcGxlICE9PSBudWxsXG4gICAgICAgID8gcHJvcHMucmlwcGxlXG4gICAgICAgIDogdHJ1ZVxuICAgIH0pKVxuXG4gICAgY29uc3QgYnRuQWN0aXZlRGVzaWduUHJvcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIHdlIGFsc28gcmVzZXQgbm9uLWFjdGl2ZSBkZXNpZ25cbiAgICAgIGNvbnN0IGFjYyA9IHsgWyBidG5EZXNpZ25Qcm9wLnZhbHVlIF06IGZhbHNlIH1cbiAgICAgIGlmIChwcm9wcy5hY3RpdmVEZXNpZ24gIT09ICcnKSB7XG4gICAgICAgIGFjY1sgcHJvcHMuYWN0aXZlRGVzaWduIF0gPSB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcbiAgICBjb25zdCBhY3RpdmVCdG5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi5idG5BY3RpdmVEZXNpZ25Qcm9wLnZhbHVlLFxuICAgICAgY29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yIHx8IHByb3BzLmNvbG9yLFxuICAgICAgdGV4dENvbG9yOiBwcm9wcy5hY3RpdmVUZXh0Q29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5Db25maWcgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgbWF4UGFnZXMgPSBNYXRoLm1heChcbiAgICAgICAgbWF4UGFnZXNQcm9wLnZhbHVlLFxuICAgICAgICAxICsgKGVsbGlwc2VzUHJvcC52YWx1ZSA/IDIgOiAwKSArIChib3VuZGFyeU51bWJlcnNQcm9wLnZhbHVlID8gMiA6IDApXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgcGdGcm9tOiBtaW5Qcm9wLnZhbHVlLFxuICAgICAgICBwZ1RvOiBtYXhQcm9wLnZhbHVlLFxuICAgICAgICBlbGxpcHNlc1N0YXJ0OiBmYWxzZSxcbiAgICAgICAgZWxsaXBzZXNFbmQ6IGZhbHNlLFxuICAgICAgICBib3VuZGFyeVN0YXJ0OiBmYWxzZSxcbiAgICAgICAgYm91bmRhcnlFbmQ6IGZhbHNlLFxuICAgICAgICBtYXJnaW5hbFN0eWxlOiB7XG4gICAgICAgICAgbWluV2lkdGg6IGAkeyBNYXRoLm1heCgyLCBTdHJpbmcobWF4UHJvcC52YWx1ZSkubGVuZ3RoKSB9ZW1gXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1heFBhZ2VzUHJvcC52YWx1ZSAmJiBtYXhQYWdlcyA8IChtYXhQcm9wLnZhbHVlIC0gbWluUHJvcC52YWx1ZSArIDEpKSB7XG4gICAgICAgIG1heFBhZ2VzID0gMSArIE1hdGguZmxvb3IobWF4UGFnZXMgLyAyKSAqIDJcbiAgICAgICAgYWNjLnBnRnJvbSA9IE1hdGgubWF4KG1pblByb3AudmFsdWUsIE1hdGgubWluKG1heFByb3AudmFsdWUgLSBtYXhQYWdlcyArIDEsIHByb3BzLm1vZGVsVmFsdWUgLSBNYXRoLmZsb29yKG1heFBhZ2VzIC8gMikpKVxuICAgICAgICBhY2MucGdUbyA9IE1hdGgubWluKG1heFByb3AudmFsdWUsIGFjYy5wZ0Zyb20gKyBtYXhQYWdlcyAtIDEpXG5cbiAgICAgICAgaWYgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUpIHtcbiAgICAgICAgICBhY2MuYm91bmRhcnlTdGFydCA9IHRydWVcbiAgICAgICAgICBhY2MucGdGcm9tKytcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGxpcHNlc1Byb3AudmFsdWUgJiYgYWNjLnBnRnJvbSA+IChtaW5Qcm9wLnZhbHVlICsgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUgPyAxIDogMCkpKSB7XG4gICAgICAgICAgYWNjLmVsbGlwc2VzU3RhcnQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnRnJvbSsrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSkge1xuICAgICAgICAgIGFjYy5ib3VuZGFyeUVuZCA9IHRydWVcbiAgICAgICAgICBhY2MucGdUby0tXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxsaXBzZXNQcm9wLnZhbHVlICYmIGFjYy5wZ1RvIDwgKG1heFByb3AudmFsdWUgLSAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSA/IDEgOiAwKSkpIHtcbiAgICAgICAgICBhY2MuZWxsaXBzZXNFbmQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnVG8tLVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0ICh2YWx1ZSkge1xuICAgICAgbW9kZWwudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEJ5T2Zmc2V0IChvZmZzZXQpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gbW9kZWwudmFsdWUgKyBvZmZzZXRcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dEV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsICgpIHtcbiAgICAgICAgbW9kZWwudmFsdWUgPSBuZXdQYWdlLnZhbHVlXG4gICAgICAgIG5ld1BhZ2UudmFsdWUgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsID0+IHsgbmV3UGFnZS52YWx1ZSA9IHZhbCB9LFxuICAgICAgICBvbktleXVwOiBlID0+IHsgaXNLZXlDb2RlKGUsIDEzKSA9PT0gdHJ1ZSAmJiB1cGRhdGVNb2RlbCgpIH0sXG4gICAgICAgIG9uQmx1cjogdXBkYXRlTW9kZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0QnRuIChjZmcsIHBhZ2UsIGFjdGl2ZSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwYWdlLFxuICAgICAgICAnYXJpYS1jdXJyZW50JzogJ2ZhbHNlJyxcbiAgICAgICAgLi4uYnRuUHJvcHMudmFsdWUsXG4gICAgICAgIC4uLmNmZ1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICdhcmlhLWN1cnJlbnQnOiAndHJ1ZScsXG4gICAgICAgICAgLi4uYWN0aXZlQnRuUHJvcHMudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICBpZiAocHJvcHMudG9GbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGF0YS50byA9IHByb3BzLnRvRm4ocGFnZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSAoKSA9PiB7IHNldChwYWdlKSB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0biwgZGF0YSlcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHNldCwgc2V0QnlPZmZzZXQgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50U3RhcnQgPSBbXVxuICAgICAgY29uc3QgY29udGVudEVuZCA9IFtdXG4gICAgICBsZXQgY29udGVudE1pZGRsZVxuXG4gICAgICBpZiAoYm91bmRhcnlMaW5rc1Byb3AudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JscycsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPD0gbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAwIF1cbiAgICAgICAgICB9LCBtaW5Qcm9wLnZhbHVlKVxuICAgICAgICApXG5cbiAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdibGUnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlID49IG1heFByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMyBdXG4gICAgICAgICAgfSwgbWF4UHJvcC52YWx1ZSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uTGlua3NQcm9wLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdiZHAnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlIDw9IG1pblByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMSBdXG4gICAgICAgICAgfSwgcHJvcHMubW9kZWxWYWx1ZSAtIDEpXG4gICAgICAgIClcblxuICAgICAgICBjb250ZW50RW5kLnVuc2hpZnQoXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JkbicsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPj0gbWF4UHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAyIF1cbiAgICAgICAgICB9LCBwcm9wcy5tb2RlbFZhbHVlICsgMSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuaW5wdXQgIT09IHRydWUpIHsgLy8gaGFzIGJ1dHRvbnMgaW5zdGVhZCBvZiBpbnB1dGJveFxuICAgICAgICBjb250ZW50TWlkZGxlID0gW11cbiAgICAgICAgY29uc3QgeyBwZ0Zyb20sIHBnVG8sIG1hcmdpbmFsU3R5bGU6IHN0eWxlIH0gPSBidG5Db25maWcudmFsdWVcblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmJvdW5kYXJ5U3RhcnQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBtaW5Qcm9wLnZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6ICdibnMnLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6IG1pblByb3AudmFsdWVcbiAgICAgICAgICAgIH0sIG1pblByb3AudmFsdWUsIGFjdGl2ZSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmJvdW5kYXJ5RW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgYWN0aXZlID0gbWF4UHJvcC52YWx1ZSA9PT0gcHJvcHMubW9kZWxWYWx1ZVxuICAgICAgICAgIGNvbnRlbnRFbmQudW5zaGlmdChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogJ2JuZScsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogbWF4UHJvcC52YWx1ZVxuICAgICAgICAgICAgfSwgbWF4UHJvcC52YWx1ZSwgYWN0aXZlKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuZWxsaXBzZXNTdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYmVzJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiAn4oCmJyxcbiAgICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwgcGdGcm9tIC0gMSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnRuQ29uZmlnLnZhbHVlLmVsbGlwc2VzRW5kID09PSB0cnVlKSB7XG4gICAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYmVlJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiAn4oCmJyxcbiAgICAgICAgICAgICAgcmlwcGxlOiBmYWxzZVxuICAgICAgICAgICAgfSwgcGdUbyArIDEpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBnRnJvbTsgaSA8PSBwZ1RvOyBpKyspIHtcbiAgICAgICAgICBjb250ZW50TWlkZGxlLnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6IGBicGckeyBpIH1gLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6IGlcbiAgICAgICAgICAgIH0sIGksIGkgPT09IHByb3BzLm1vZGVsVmFsdWUpXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgICAuLi5hdHRycy52YWx1ZVxuICAgICAgfSwgW1xuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6ICdxLXBhZ2luYXRpb25fX2NvbnRlbnQgcm93IG5vLXdyYXAgaXRlbXMtY2VudGVyJyxcbiAgICAgICAgICBzdHlsZTogZ3V0dGVyU3R5bGUudmFsdWVcbiAgICAgICAgfSwgW1xuICAgICAgICAgIC4uLmNvbnRlbnRTdGFydCxcblxuICAgICAgICAgIHByb3BzLmlucHV0ID09PSB0cnVlXG4gICAgICAgICAgICA/IGgoUUlucHV0LCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAnaW5saW5lJyxcbiAgICAgICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IGAkeyBpbnB1dFBsYWNlaG9sZGVyLnZhbHVlLmxlbmd0aCAvIDEuNSB9ZW1gIH0sXG4gICAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICBkZW5zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWU6IG5ld1BhZ2UudmFsdWUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGRhcms6IGlzRGFyay52YWx1ZSxcbiAgICAgICAgICAgICAgYm9yZGVybGVzczogdHJ1ZSxcbiAgICAgICAgICAgICAgaW5wdXRDbGFzczogcHJvcHMuaW5wdXRDbGFzcyxcbiAgICAgICAgICAgICAgaW5wdXRTdHlsZTogcHJvcHMuaW5wdXRTdHlsZSxcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGlucHV0UGxhY2Vob2xkZXIudmFsdWUsXG4gICAgICAgICAgICAgIG1pbjogbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgICAgbWF4OiBtYXhQcm9wLnZhbHVlLFxuICAgICAgICAgICAgICAuLi5pbnB1dEV2ZW50cy52YWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogaCgnZGl2Jywge1xuICAgICAgICAgICAgICBjbGFzczogJ3EtcGFnaW5hdGlvbl9fbWlkZGxlIHJvdyBqdXN0aWZ5LWNlbnRlcidcbiAgICAgICAgICAgIH0sIGNvbnRlbnRNaWRkbGUpLFxuXG4gICAgICAgICAgLi4uY29udGVudEVuZFxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZyA6cmVmPVwicGFnZVwiPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyBxLWd1dHRlci1tZCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgPEFsYnVtQ2FyZCB2LWZvcj1cIihhbGJ1bSwgaW5kZXgpIGluIGRpc3BsYXlBbGJ1bXNcIiA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICA6YWxidW0taW5mbz1cImFsYnVtXCI+XG4gICAgICA8L0FsYnVtQ2FyZD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJxLXBhLWxnIHEtbXQtbGcgZmxleCBmbGV4LWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiBzdHlsZT1cImJvcmRlci10b3A6IDFweCBzb2xpZCAjNTQ1NDU0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxxLXRvZ2dsZSBjb2xvcj1cImJsdWVcIiB2LW1vZGVsPVwidmFsdWVcIiBsYWJlbD1cIkF1dG8gQWR2YW5jZVwiIGxlZnQtbGFiZWwgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItbWRcIj5cbiAgICAgICAgPHEtcGFnaW5hdGlvblxuICAgICAgICAgIGNvbG9yPVwiZ3JleVwiXG4gICAgICAgICAgdGV4dC1jb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICB2LW1vZGVsPVwiY3VycmVudFwiXG4gICAgICAgICAgbWF4PVwiMjM2XCJcbiAgICAgICAgICBtYXgtcGFnZXM9XCI3XCJcbiAgICAgICAgICBkaXJlY3Rpb24tbGlua3NcbiAgICAgICAgICBndXR0ZXI9XCIyMHB4XCJcbiAgICAgICAgICBzaXplPVwiMThweFwiXG4gICAgICAgICAgb3V0bGluZVxuXG4gICAgICAgICAgQHVwZGF0ZTptb2RlbC12YWx1ZT1cIm9uUGFnZUNoYW5nZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcS1teC1tZFwiPlxuICAgICAgICAgIDxkaXY+QWxidW1zIHBlciBwYWdlOjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHEtc2VsZWN0IGRlbnNlIHYtbW9kZWw9XCJtb2RlbFwiIDpvcHRpb25zPVwib3B0aW9uc1wiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0FsYnVtQXBpLCBBbGJ1bVJlYWREdG99IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7b25Nb3VudGVkLCBvblVwZGF0ZWQsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQWxidW1DYXJkIGZyb20gJ2NvbXBvbmVudHMvQWxidW1DYXJkLnZ1ZSc7XG5cbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpO1xuY29uc3QgYWxidW1BcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcblxuY29uc3QgZGlzcGxheUFsYnVtcyA9IHJlZjxBbGJ1bVJlYWREdG9bXT4oW10pXG5cbmNvbnN0IHsgc2V0Q29sb3JzIH0gPSB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlKCk7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuY29uc3QgY3VycmVudCA9IHJlZigxKTtcblxuY29uc3QgbW9kZWwgPSByZWYoJzUwJyk7XG5jb25zdCB2YWx1ZSA9IHJlZih0cnVlKTtcbmNvbnN0IG9wdGlvbnMgPSBbJzI1JywgJzUwJywgJzc1JywgJzEwMCddO1xuXG5jb25zdCBwYWdlID0gcmVmPEVsZW1lbnQ+KCk7XG5cbmNvbnN0IG9uUGFnZUNoYW5nZSA9IChwZzogbnVtYmVyKSA9PiB7XG4gIGxvYWRQYWdlKHBnKTtcbn07XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKGluZGV4OiBudW1iZXIsIGJ5cGFzc1B1c2hSb3V0ZT1mYWxzZSkge1xuICBpZiAoIWJ5cGFzc1B1c2hSb3V0ZSlcbiAge1xuICAgIHJvdXRlci5wdXNoKHsgbmFtZTogJ2hvbWVQYWdpbmF0ZScsIHBhcmFtczogeyBwYWdlOiBjdXJyZW50LnZhbHVlIH0gfSlcbiAgfVxuXG4gIGFsYnVtQXBpLmdldEFsYnVtcyh7c3RhcnQ6IChpbmRleCAtIDEpICogNTAsIGxpbWl0OiA1MH0pLnRoZW4oKHJlc3ApID0+IHtcbiAgICBkaXNwbGF5QWxidW1zLnZhbHVlID0gcmVzcDtcbiAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBiZWhhdmlvcjogJ2F1dG8nXG4gICAgfSlcbiAgfSk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBhZ2UgPSBOdW1iZXIucGFyc2VJbnQoPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlIHx8ICcxJyk7XG4gIGN1cnJlbnQudmFsdWUgPSBwYWdlO1xuICBsb2FkUGFnZShwYWdlKTtcblxuICB3YXRjaCgoKSA9PiByb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5wYWdlLCAodG8sIGZyb20pID0+IHtcbiAgICBpZiAocm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5uYW1lICE9PSAnaG9tZVBhZ2luYXRlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBBbHNvIG5lZWQgdG8gY2hlY2sgaWZcbiAgICBsZXQgdG9QYWdlID0gTnVtYmVyLnBhcnNlSW50KDxzdHJpbmc+dG8pO1xuICAgIGlmIChOdW1iZXIuaXNOYU4odG9QYWdlKSkge1xuICAgICAgY3VycmVudC52YWx1ZSA9IDE7XG4gICAgICBsb2FkUGFnZSgxKTtcbiAgICB9XG4gICAgaWYgKHRvUGFnZSAhPT0gY3VycmVudC52YWx1ZSl7XG4gICAgICBjdXJyZW50LnZhbHVlID0gdG9QYWdlO1xuICAgICAgbG9hZFBhZ2UodG9QYWdlLCB0cnVlKTtcbiAgICB9XG4gIH0pO1xufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcGFnZSA9IE51bWJlci5wYXJzZUludCg8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLnBhZ2UgfHwgJzEnKTtcbiAgY3VycmVudC52YWx1ZSA9IHBhZ2U7XG59KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBWUEsU0FBUyxRQUFTLEtBQUssV0FBVztBQUNoQyxTQUFPLENBQUUsTUFBTSxPQUFRLFNBQVMsR0FBRyxJQUMvQixNQUNBO0FBQ047QUFFQSxJQUFBLGNBQWUsZ0JBQWdCO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBRU4sT0FBTztBQUFBLElBQ0wsR0FBRztBQUFBLElBRUgsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1g7QUFBQSxJQUNELEtBQUs7QUFBQSxNQUNILE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElBQ0QsS0FBSztBQUFBLE1BQ0gsTUFBTSxDQUFFLFFBQVEsTUFBUTtBQUFBLE1BQ3hCLFVBQVU7QUFBQSxJQUNYO0FBQUEsSUFDRCxVQUFVO0FBQUEsTUFDUixNQUFNLENBQUUsUUFBUSxNQUFRO0FBQUEsTUFDeEIsU0FBUztBQUFBLE1BQ1QsV0FBVyxRQUNSLE9BQU8sTUFBTSxXQUFXLFNBQVMsR0FBRyxFQUFFLElBQUksTUFBTTtBQUFBLElBRXBEO0FBQUEsSUFFRCxZQUFZLENBQUUsT0FBTyxRQUFRLE1BQVE7QUFBQSxJQUNyQyxZQUFZLENBQUUsT0FBTyxRQUFRLE1BQVE7QUFBQSxJQUVyQyxNQUFNO0FBQUEsSUFFTixTQUFTO0FBQUEsSUFFVCxPQUFPO0FBQUEsSUFFUCxVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsSUFFVixNQUFNO0FBQUEsSUFFTixlQUFlO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDVjtB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

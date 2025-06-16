import { c as createComponent, a as useDarkProps, bq as btnDesignOptions, d as useDark, g as computed, r as ref, w as watch, br as btnPadding, bs as getBtnDesign, aI as isKeyCode, m as h, L as QInput, t as getCurrentInstance, N as QBtn } from "./index.8df2ea7a.js";
import { b as between } from "./QSelect.2cf6d795.js";
const SortOrder = {
  Ascending: "Ascending",
  Descending: "Descending"
};
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
        if (props.disable || isNaN(val))
          return;
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
            icon: icons.value[0],
            "aria-label": $q.lang.pagination.first
          }, minProp.value)
        );
        contentEnd.unshift(
          getBtn({
            key: "ble",
            disable: props.disable || props.modelValue >= maxProp.value,
            icon: icons.value[3],
            "aria-label": $q.lang.pagination.last
          }, maxProp.value)
        );
      }
      if (directionLinksProp.value === true) {
        contentStart.push(
          getBtn({
            key: "bdp",
            disable: props.disable || props.modelValue <= minProp.value,
            icon: icons.value[1],
            "aria-label": $q.lang.pagination.prev
          }, props.modelValue - 1)
        );
        contentEnd.unshift(
          getBtn({
            key: "bdn",
            disable: props.disable || props.modelValue >= maxProp.value,
            icon: icons.value[2],
            "aria-label": $q.lang.pagination.next
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
export { QPagination as Q, SortOrder as S };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVBhZ2luYXRpb24uMWMwMWM5YWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2JhY2tlbmQtc2VydmljZS1hcGkvZGlzdC9lc20vbW9kZWxzL1NvcnRPcmRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9RUGFnaW5hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qKlxuICogVGxtY1BsYXllckJhY2tlbmRcbiAqIE5vIGRlc2NyaXB0aW9uIHByb3ZpZGVkIChnZW5lcmF0ZWQgYnkgT3BlbmFwaSBHZW5lcmF0b3IgaHR0cHM6Ly9naXRodWIuY29tL29wZW5hcGl0b29scy9vcGVuYXBpLWdlbmVyYXRvcilcbiAqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgT3BlbkFQSSBkb2N1bWVudDogMS4wXG4gKlxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuLyoqXG4gKlxuICogQGV4cG9ydFxuICovXG5leHBvcnQgY29uc3QgU29ydE9yZGVyID0ge1xuICAgIEFzY2VuZGluZzogJ0FzY2VuZGluZycsXG4gICAgRGVzY2VuZGluZzogJ0Rlc2NlbmRpbmcnXG59O1xuZXhwb3J0IGZ1bmN0aW9uIFNvcnRPcmRlckZyb21KU09OKGpzb24pIHtcbiAgICByZXR1cm4gU29ydE9yZGVyRnJvbUpTT05UeXBlZChqc29uLCBmYWxzZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gU29ydE9yZGVyRnJvbUpTT05UeXBlZChqc29uLCBpZ25vcmVEaXNjcmltaW5hdG9yKSB7XG4gICAgcmV0dXJuIGpzb247XG59XG5leHBvcnQgZnVuY3Rpb24gU29ydE9yZGVyVG9KU09OKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IHsgaCwgcmVmLCB3YXRjaCwgY29tcHV0ZWQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IFFCdG4gZnJvbSAnLi4vYnRuL1FCdG4uanMnXG5pbXBvcnQgUUlucHV0IGZyb20gJy4uL2lucHV0L1FJbnB1dC5qcydcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS51c2UtZGFyay91c2UtZGFyay5qcydcbmltcG9ydCB7IGJ0bkRlc2lnbk9wdGlvbnMsIGJ0blBhZGRpbmcsIGdldEJ0bkRlc2lnbiB9IGZyb20gJy4uL2J0bi91c2UtYnRuLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlLmNyZWF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0L2Zvcm1hdC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUua2V5Ym9hcmQva2V5LWNvbXBvc2l0aW9uLmpzJ1xuXG5mdW5jdGlvbiBnZXRCb29sICh2YWwsIG90aGVyd2lzZSkge1xuICByZXR1cm4gWyB0cnVlLCBmYWxzZSBdLmluY2x1ZGVzKHZhbClcbiAgICA/IHZhbFxuICAgIDogb3RoZXJ3aXNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRUGFnaW5hdGlvbicsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VEYXJrUHJvcHMsXG5cbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgbWluOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiAxXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIHR5cGU6IFsgTnVtYmVyLCBTdHJpbmcgXSxcbiAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBtYXhQYWdlczoge1xuICAgICAgdHlwZTogWyBOdW1iZXIsIFN0cmluZyBdLFxuICAgICAgZGVmYXVsdDogMCxcbiAgICAgIHZhbGlkYXRvcjogdiA9PiAoXG4gICAgICAgICh0eXBlb2YgdiA9PT0gJ3N0cmluZycgPyBwYXJzZUludCh2LCAxMCkgOiB2KSA+PSAwXG4gICAgICApXG4gICAgfSxcblxuICAgIGlucHV0U3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG4gICAgaW5wdXRDbGFzczogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIHNpemU6IFN0cmluZyxcblxuICAgIGRpc2FibGU6IEJvb2xlYW4sXG5cbiAgICBpbnB1dDogQm9vbGVhbixcblxuICAgIGljb25QcmV2OiBTdHJpbmcsXG4gICAgaWNvbk5leHQ6IFN0cmluZyxcbiAgICBpY29uRmlyc3Q6IFN0cmluZyxcbiAgICBpY29uTGFzdDogU3RyaW5nLFxuXG4gICAgdG9GbjogRnVuY3Rpb24sXG5cbiAgICBib3VuZGFyeUxpbmtzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgYm91bmRhcnlOdW1iZXJzOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgZGlyZWN0aW9uTGlua3M6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBlbGxpcHNlczoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuXG4gICAgcmlwcGxlOiB7XG4gICAgICB0eXBlOiBbIEJvb2xlYW4sIE9iamVjdCBdLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICByb3VuZDogQm9vbGVhbixcbiAgICByb3VuZGVkOiBCb29sZWFuLFxuXG4gICAgZmxhdDogQm9vbGVhbixcbiAgICBvdXRsaW5lOiBCb29sZWFuLFxuICAgIHVuZWxldmF0ZWQ6IEJvb2xlYW4sXG4gICAgcHVzaDogQm9vbGVhbixcbiAgICBnbG9zc3k6IEJvb2xlYW4sXG5cbiAgICBjb2xvcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgfSxcbiAgICB0ZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIGFjdGl2ZURlc2lnbjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJycsXG4gICAgICB2YWx1ZXM6IHYgPT4gdiA9PT0gJycgfHwgYnRuRGVzaWduT3B0aW9ucy5pbmNsdWRlcyh2KVxuICAgIH0sXG4gICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICBhY3RpdmVUZXh0Q29sb3I6IFN0cmluZyxcblxuICAgIGd1dHRlcjogU3RyaW5nLFxuICAgIHBhZGRpbmc6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICczcHggMnB4J1xuICAgIH1cbiAgfSxcblxuICBlbWl0czogWyAndXBkYXRlOm1vZGVsVmFsdWUnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IGVtaXQgfSkge1xuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgY29uc3QgeyAkcSB9ID0gcHJveHlcblxuICAgIGNvbnN0IGlzRGFyayA9IHVzZURhcmsocHJvcHMsICRxKVxuXG4gICAgY29uc3QgbWluUHJvcCA9IGNvbXB1dGVkKCgpID0+IHBhcnNlSW50KHByb3BzLm1pbiwgMTApKVxuICAgIGNvbnN0IG1heFByb3AgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5tYXgsIDEwKSlcbiAgICBjb25zdCBtYXhQYWdlc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBwYXJzZUludChwcm9wcy5tYXhQYWdlcywgMTApKVxuXG4gICAgY29uc3QgaW5wdXRQbGFjZWhvbGRlciA9IGNvbXB1dGVkKCgpID0+IG1vZGVsLnZhbHVlICsgJyAvICcgKyBtYXhQcm9wLnZhbHVlKVxuICAgIGNvbnN0IGJvdW5kYXJ5TGlua3NQcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0Qm9vbChwcm9wcy5ib3VuZGFyeUxpbmtzLCBwcm9wcy5pbnB1dCkpXG4gICAgY29uc3QgYm91bmRhcnlOdW1iZXJzUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJvb2wocHJvcHMuYm91bmRhcnlOdW1iZXJzLCAhcHJvcHMuaW5wdXQpKVxuICAgIGNvbnN0IGRpcmVjdGlvbkxpbmtzUHJvcCA9IGNvbXB1dGVkKCgpID0+IGdldEJvb2wocHJvcHMuZGlyZWN0aW9uTGlua3MsIHByb3BzLmlucHV0KSlcbiAgICBjb25zdCBlbGxpcHNlc1Byb3AgPSBjb21wdXRlZCgoKSA9PiBnZXRCb29sKHByb3BzLmVsbGlwc2VzLCAhcHJvcHMuaW5wdXQpKVxuXG4gICAgY29uc3QgbmV3UGFnZSA9IHJlZihudWxsKVxuICAgIGNvbnN0IG1vZGVsID0gY29tcHV0ZWQoe1xuICAgICAgZ2V0OiAoKSA9PiBwcm9wcy5tb2RlbFZhbHVlLFxuICAgICAgc2V0OiB2YWwgPT4ge1xuICAgICAgICB2YWwgPSBwYXJzZUludCh2YWwsIDEwKVxuICAgICAgICBpZiAocHJvcHMuZGlzYWJsZSB8fCBpc05hTih2YWwpKSByZXR1cm5cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IGJldHdlZW4odmFsLCBtaW5Qcm9wLnZhbHVlLCBtYXhQcm9wLnZhbHVlKVxuICAgICAgICBpZiAocHJvcHMubW9kZWxWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IGAkeyBtaW5Qcm9wLnZhbHVlIH18JHsgbWF4UHJvcC52YWx1ZSB9YCwgKCkgPT4ge1xuICAgICAgbW9kZWwudmFsdWUgPSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtcGFnaW5hdGlvbiByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInXG4gICAgICArIChwcm9wcy5kaXNhYmxlID09PSB0cnVlID8gJyBkaXNhYmxlZCcgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBndXR0ZXJQcm9wID0gY29tcHV0ZWQoKCkgPT4gKFxuICAgICAgcHJvcHMuZ3V0dGVyIGluIGJ0blBhZGRpbmdcbiAgICAgICAgPyBgJHsgYnRuUGFkZGluZ1sgcHJvcHMuZ3V0dGVyIF0gfXB4YFxuICAgICAgICA6IHByb3BzLmd1dHRlciB8fCBudWxsXG4gICAgKSlcbiAgICBjb25zdCBndXR0ZXJTdHlsZSA9IGNvbXB1dGVkKCgpID0+IChcbiAgICAgIGd1dHRlclByb3AudmFsdWUgIT09IG51bGxcbiAgICAgICAgPyBgLS1xLXBhZ2luYXRpb24tZ3V0dGVyLXBhcmVudDotJHsgZ3V0dGVyUHJvcC52YWx1ZSB9Oy0tcS1wYWdpbmF0aW9uLWd1dHRlci1jaGlsZDokeyBndXR0ZXJQcm9wLnZhbHVlIH1gXG4gICAgICAgIDogbnVsbFxuICAgICkpXG5cbiAgICBjb25zdCBpY29ucyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGNvbnN0IGljbyA9IFtcbiAgICAgICAgcHJvcHMuaWNvbkZpcnN0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5maXJzdCxcbiAgICAgICAgcHJvcHMuaWNvblByZXYgfHwgJHEuaWNvblNldC5wYWdpbmF0aW9uLnByZXYsXG4gICAgICAgIHByb3BzLmljb25OZXh0IHx8ICRxLmljb25TZXQucGFnaW5hdGlvbi5uZXh0LFxuICAgICAgICBwcm9wcy5pY29uTGFzdCB8fCAkcS5pY29uU2V0LnBhZ2luYXRpb24ubGFzdFxuICAgICAgXVxuICAgICAgcmV0dXJuICRxLmxhbmcucnRsID09PSB0cnVlID8gaWNvLnJldmVyc2UoKSA6IGljb1xuICAgIH0pXG5cbiAgICBjb25zdCBhdHRycyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAnYXJpYS1kaXNhYmxlZCc6IHByb3BzLmRpc2FibGUgPT09IHRydWUgPyAndHJ1ZScgOiAnZmFsc2UnLFxuICAgICAgcm9sZTogJ25hdmlnYXRpb24nXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5EZXNpZ25Qcm9wID0gY29tcHV0ZWQoKCkgPT4gZ2V0QnRuRGVzaWduKHByb3BzLCAnZmxhdCcpKVxuICAgIGNvbnN0IGJ0blByb3BzID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIFsgYnRuRGVzaWduUHJvcC52YWx1ZSBdOiB0cnVlLFxuXG4gICAgICByb3VuZDogcHJvcHMucm91bmQsXG4gICAgICByb3VuZGVkOiBwcm9wcy5yb3VuZGVkLFxuXG4gICAgICBwYWRkaW5nOiBwcm9wcy5wYWRkaW5nLFxuXG4gICAgICBjb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICB0ZXh0Q29sb3I6IHByb3BzLnRleHRDb2xvcixcblxuICAgICAgc2l6ZTogcHJvcHMuc2l6ZSxcbiAgICAgIHJpcHBsZTogcHJvcHMucmlwcGxlICE9PSBudWxsXG4gICAgICAgID8gcHJvcHMucmlwcGxlXG4gICAgICAgIDogdHJ1ZVxuICAgIH0pKVxuXG4gICAgY29uc3QgYnRuQWN0aXZlRGVzaWduUHJvcCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIC8vIHdlIGFsc28gcmVzZXQgbm9uLWFjdGl2ZSBkZXNpZ25cbiAgICAgIGNvbnN0IGFjYyA9IHsgWyBidG5EZXNpZ25Qcm9wLnZhbHVlIF06IGZhbHNlIH1cbiAgICAgIGlmIChwcm9wcy5hY3RpdmVEZXNpZ24gIT09ICcnKSB7XG4gICAgICAgIGFjY1sgcHJvcHMuYWN0aXZlRGVzaWduIF0gPSB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjXG4gICAgfSlcbiAgICBjb25zdCBhY3RpdmVCdG5Qcm9wcyA9IGNvbXB1dGVkKCgpID0+ICh7XG4gICAgICAuLi5idG5BY3RpdmVEZXNpZ25Qcm9wLnZhbHVlLFxuICAgICAgY29sb3I6IHByb3BzLmFjdGl2ZUNvbG9yIHx8IHByb3BzLmNvbG9yLFxuICAgICAgdGV4dENvbG9yOiBwcm9wcy5hY3RpdmVUZXh0Q29sb3IgfHwgcHJvcHMudGV4dENvbG9yXG4gICAgfSkpXG5cbiAgICBjb25zdCBidG5Db25maWcgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICBsZXQgbWF4UGFnZXMgPSBNYXRoLm1heChcbiAgICAgICAgbWF4UGFnZXNQcm9wLnZhbHVlLFxuICAgICAgICAxICsgKGVsbGlwc2VzUHJvcC52YWx1ZSA/IDIgOiAwKSArIChib3VuZGFyeU51bWJlcnNQcm9wLnZhbHVlID8gMiA6IDApXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGFjYyA9IHtcbiAgICAgICAgcGdGcm9tOiBtaW5Qcm9wLnZhbHVlLFxuICAgICAgICBwZ1RvOiBtYXhQcm9wLnZhbHVlLFxuICAgICAgICBlbGxpcHNlc1N0YXJ0OiBmYWxzZSxcbiAgICAgICAgZWxsaXBzZXNFbmQ6IGZhbHNlLFxuICAgICAgICBib3VuZGFyeVN0YXJ0OiBmYWxzZSxcbiAgICAgICAgYm91bmRhcnlFbmQ6IGZhbHNlLFxuICAgICAgICBtYXJnaW5hbFN0eWxlOiB7XG4gICAgICAgICAgbWluV2lkdGg6IGAkeyBNYXRoLm1heCgyLCBTdHJpbmcobWF4UHJvcC52YWx1ZSkubGVuZ3RoKSB9ZW1gXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1heFBhZ2VzUHJvcC52YWx1ZSAmJiBtYXhQYWdlcyA8IChtYXhQcm9wLnZhbHVlIC0gbWluUHJvcC52YWx1ZSArIDEpKSB7XG4gICAgICAgIG1heFBhZ2VzID0gMSArIE1hdGguZmxvb3IobWF4UGFnZXMgLyAyKSAqIDJcbiAgICAgICAgYWNjLnBnRnJvbSA9IE1hdGgubWF4KG1pblByb3AudmFsdWUsIE1hdGgubWluKG1heFByb3AudmFsdWUgLSBtYXhQYWdlcyArIDEsIHByb3BzLm1vZGVsVmFsdWUgLSBNYXRoLmZsb29yKG1heFBhZ2VzIC8gMikpKVxuICAgICAgICBhY2MucGdUbyA9IE1hdGgubWluKG1heFByb3AudmFsdWUsIGFjYy5wZ0Zyb20gKyBtYXhQYWdlcyAtIDEpXG5cbiAgICAgICAgaWYgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUpIHtcbiAgICAgICAgICBhY2MuYm91bmRhcnlTdGFydCA9IHRydWVcbiAgICAgICAgICBhY2MucGdGcm9tKytcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGxpcHNlc1Byb3AudmFsdWUgJiYgYWNjLnBnRnJvbSA+IChtaW5Qcm9wLnZhbHVlICsgKGJvdW5kYXJ5TnVtYmVyc1Byb3AudmFsdWUgPyAxIDogMCkpKSB7XG4gICAgICAgICAgYWNjLmVsbGlwc2VzU3RhcnQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnRnJvbSsrXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSkge1xuICAgICAgICAgIGFjYy5ib3VuZGFyeUVuZCA9IHRydWVcbiAgICAgICAgICBhY2MucGdUby0tXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxsaXBzZXNQcm9wLnZhbHVlICYmIGFjYy5wZ1RvIDwgKG1heFByb3AudmFsdWUgLSAoYm91bmRhcnlOdW1iZXJzUHJvcC52YWx1ZSA/IDEgOiAwKSkpIHtcbiAgICAgICAgICBhY2MuZWxsaXBzZXNFbmQgPSB0cnVlXG4gICAgICAgICAgYWNjLnBnVG8tLVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2V0ICh2YWx1ZSkge1xuICAgICAgbW9kZWwudmFsdWUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEJ5T2Zmc2V0IChvZmZzZXQpIHtcbiAgICAgIG1vZGVsLnZhbHVlID0gbW9kZWwudmFsdWUgKyBvZmZzZXRcbiAgICB9XG5cbiAgICBjb25zdCBpbnB1dEV2ZW50cyA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1vZGVsICgpIHtcbiAgICAgICAgbW9kZWwudmFsdWUgPSBuZXdQYWdlLnZhbHVlXG4gICAgICAgIG5ld1BhZ2UudmFsdWUgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgICdvblVwZGF0ZTptb2RlbFZhbHVlJzogdmFsID0+IHsgbmV3UGFnZS52YWx1ZSA9IHZhbCB9LFxuICAgICAgICBvbktleXVwOiBlID0+IHsgaXNLZXlDb2RlKGUsIDEzKSA9PT0gdHJ1ZSAmJiB1cGRhdGVNb2RlbCgpIH0sXG4gICAgICAgIG9uQmx1cjogdXBkYXRlTW9kZWxcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gZ2V0QnRuIChjZmcsIHBhZ2UsIGFjdGl2ZSkge1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwYWdlLFxuICAgICAgICAnYXJpYS1jdXJyZW50JzogJ2ZhbHNlJyxcbiAgICAgICAgLi4uYnRuUHJvcHMudmFsdWUsXG4gICAgICAgIC4uLmNmZ1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwge1xuICAgICAgICAgICdhcmlhLWN1cnJlbnQnOiAndHJ1ZScsXG4gICAgICAgICAgLi4uYWN0aXZlQnRuUHJvcHMudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgaWYgKHBhZ2UgIT09IHZvaWQgMCkge1xuICAgICAgICBpZiAocHJvcHMudG9GbiAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgZGF0YS50byA9IHByb3BzLnRvRm4ocGFnZSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkYXRhLm9uQ2xpY2sgPSAoKSA9PiB7IHNldChwYWdlKSB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoUUJ0biwgZGF0YSlcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBPYmplY3QuYXNzaWduKHByb3h5LCB7IHNldCwgc2V0QnlPZmZzZXQgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50U3RhcnQgPSBbXVxuICAgICAgY29uc3QgY29udGVudEVuZCA9IFtdXG4gICAgICBsZXQgY29udGVudE1pZGRsZVxuXG4gICAgICBpZiAoYm91bmRhcnlMaW5rc1Byb3AudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JscycsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPD0gbWluUHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAwIF0sXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICRxLmxhbmcucGFnaW5hdGlvbi5maXJzdFxuICAgICAgICAgIH0sIG1pblByb3AudmFsdWUpXG4gICAgICAgIClcblxuICAgICAgICBjb250ZW50RW5kLnVuc2hpZnQoXG4gICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgIGtleTogJ2JsZScsXG4gICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlIHx8IHByb3BzLm1vZGVsVmFsdWUgPj0gbWF4UHJvcC52YWx1ZSxcbiAgICAgICAgICAgIGljb246IGljb25zLnZhbHVlWyAzIF0sXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICRxLmxhbmcucGFnaW5hdGlvbi5sYXN0XG4gICAgICAgICAgfSwgbWF4UHJvcC52YWx1ZSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uTGlua3NQcm9wLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRlbnRTdGFydC5wdXNoKFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdiZHAnLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlIDw9IG1pblByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMSBdLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAkcS5sYW5nLnBhZ2luYXRpb24ucHJldlxuICAgICAgICAgIH0sIHByb3BzLm1vZGVsVmFsdWUgLSAxKVxuICAgICAgICApXG5cbiAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICBrZXk6ICdiZG4nLFxuICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSB8fCBwcm9wcy5tb2RlbFZhbHVlID49IG1heFByb3AudmFsdWUsXG4gICAgICAgICAgICBpY29uOiBpY29ucy52YWx1ZVsgMiBdLFxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAkcS5sYW5nLnBhZ2luYXRpb24ubmV4dFxuICAgICAgICAgIH0sIHByb3BzLm1vZGVsVmFsdWUgKyAxKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5pbnB1dCAhPT0gdHJ1ZSkgeyAvLyBoYXMgYnV0dG9ucyBpbnN0ZWFkIG9mIGlucHV0Ym94XG4gICAgICAgIGNvbnRlbnRNaWRkbGUgPSBbXVxuICAgICAgICBjb25zdCB7IHBnRnJvbSwgcGdUbywgbWFyZ2luYWxTdHlsZTogc3R5bGUgfSA9IGJ0bkNvbmZpZy52YWx1ZVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuYm91bmRhcnlTdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IGFjdGl2ZSA9IG1pblByb3AudmFsdWUgPT09IHByb3BzLm1vZGVsVmFsdWVcbiAgICAgICAgICBjb250ZW50U3RhcnQucHVzaChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogJ2JucycsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogbWluUHJvcC52YWx1ZVxuICAgICAgICAgICAgfSwgbWluUHJvcC52YWx1ZSwgYWN0aXZlKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuYm91bmRhcnlFbmQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCBhY3RpdmUgPSBtYXhQcm9wLnZhbHVlID09PSBwcm9wcy5tb2RlbFZhbHVlXG4gICAgICAgICAgY29udGVudEVuZC51bnNoaWZ0KFxuICAgICAgICAgICAgZ2V0QnRuKHtcbiAgICAgICAgICAgICAga2V5OiAnYm5lJyxcbiAgICAgICAgICAgICAgc3R5bGUsXG4gICAgICAgICAgICAgIGRpc2FibGU6IHByb3BzLmRpc2FibGUsXG4gICAgICAgICAgICAgIGxhYmVsOiBtYXhQcm9wLnZhbHVlXG4gICAgICAgICAgICB9LCBtYXhQcm9wLnZhbHVlLCBhY3RpdmUpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ0bkNvbmZpZy52YWx1ZS5lbGxpcHNlc1N0YXJ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgY29udGVudFN0YXJ0LnB1c2goXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6ICdiZXMnLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6ICfigKYnLFxuICAgICAgICAgICAgICByaXBwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCBwZ0Zyb20gLSAxKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidG5Db25maWcudmFsdWUuZWxsaXBzZXNFbmQgPT09IHRydWUpIHtcbiAgICAgICAgICBjb250ZW50RW5kLnVuc2hpZnQoXG4gICAgICAgICAgICBnZXRCdG4oe1xuICAgICAgICAgICAgICBrZXk6ICdiZWUnLFxuICAgICAgICAgICAgICBzdHlsZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgbGFiZWw6ICfigKYnLFxuICAgICAgICAgICAgICByaXBwbGU6IGZhbHNlXG4gICAgICAgICAgICB9LCBwZ1RvICsgMSlcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gcGdGcm9tOyBpIDw9IHBnVG87IGkrKykge1xuICAgICAgICAgIGNvbnRlbnRNaWRkbGUucHVzaChcbiAgICAgICAgICAgIGdldEJ0bih7XG4gICAgICAgICAgICAgIGtleTogYGJwZyR7IGkgfWAsXG4gICAgICAgICAgICAgIHN0eWxlLFxuICAgICAgICAgICAgICBkaXNhYmxlOiBwcm9wcy5kaXNhYmxlLFxuICAgICAgICAgICAgICBsYWJlbDogaVxuICAgICAgICAgICAgfSwgaSwgaSA9PT0gcHJvcHMubW9kZWxWYWx1ZSlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIC4uLmF0dHJzLnZhbHVlXG4gICAgICB9LCBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICBjbGFzczogJ3EtcGFnaW5hdGlvbl9fY29udGVudCByb3cgbm8td3JhcCBpdGVtcy1jZW50ZXInLFxuICAgICAgICAgIHN0eWxlOiBndXR0ZXJTdHlsZS52YWx1ZVxuICAgICAgICB9LCBbXG4gICAgICAgICAgLi4uY29udGVudFN0YXJ0LFxuXG4gICAgICAgICAgcHJvcHMuaW5wdXQgPT09IHRydWVcbiAgICAgICAgICAgID8gaChRSW5wdXQsIHtcbiAgICAgICAgICAgICAgY2xhc3M6ICdpbmxpbmUnLFxuICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogYCR7IGlucHV0UGxhY2Vob2xkZXIudmFsdWUubGVuZ3RoIC8gMS41IH1lbWAgfSxcbiAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgIGRlbnNlOiB0cnVlLFxuICAgICAgICAgICAgICB2YWx1ZTogbmV3UGFnZS52YWx1ZSxcbiAgICAgICAgICAgICAgZGlzYWJsZTogcHJvcHMuZGlzYWJsZSxcbiAgICAgICAgICAgICAgZGFyazogaXNEYXJrLnZhbHVlLFxuICAgICAgICAgICAgICBib3JkZXJsZXNzOiB0cnVlLFxuICAgICAgICAgICAgICBpbnB1dENsYXNzOiBwcm9wcy5pbnB1dENsYXNzLFxuICAgICAgICAgICAgICBpbnB1dFN0eWxlOiBwcm9wcy5pbnB1dFN0eWxlLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogaW5wdXRQbGFjZWhvbGRlci52YWx1ZSxcbiAgICAgICAgICAgICAgbWluOiBtaW5Qcm9wLnZhbHVlLFxuICAgICAgICAgICAgICBtYXg6IG1heFByb3AudmFsdWUsXG4gICAgICAgICAgICAgIC4uLmlucHV0RXZlbnRzLnZhbHVlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBoKCdkaXYnLCB7XG4gICAgICAgICAgICAgIGNsYXNzOiAncS1wYWdpbmF0aW9uX19taWRkbGUgcm93IGp1c3RpZnktY2VudGVyJ1xuICAgICAgICAgICAgfSwgY29udGVudE1pZGRsZSksXG5cbiAgICAgICAgICAuLi5jb250ZW50RW5kXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQWlCWSxNQUFDLFlBQVk7QUFBQSxFQUNyQixXQUFXO0FBQUEsRUFDWCxZQUFZO0FBQ2hCO0FDUkEsU0FBUyxRQUFTLEtBQUssV0FBVztBQUNoQyxTQUFPLENBQUUsTUFBTSxPQUFRLFNBQVMsR0FB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

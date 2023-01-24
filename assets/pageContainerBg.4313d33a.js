import { c as computed, k as createComponent, r as ref, w as watch, n as onBeforeUnmount, h, af as Transition, l as hSlot, a$ as QSpinner, ad as defineStore } from "./index.45451307.js";
const useRatioProps = {
  ratio: [String, Number]
};
function useRatio(props, naturalRatio) {
  return computed(() => {
    const ratio = Number(
      props.ratio || (naturalRatio !== void 0 ? naturalRatio.value : void 0)
    );
    return isNaN(ratio) !== true && ratio > 0 ? { paddingBottom: `${100 / ratio}%` } : null;
  });
}
const defaultRatio = 16 / 9;
var QImg = createComponent({
  name: "QImg",
  props: {
    ...useRatioProps,
    src: String,
    srcset: String,
    sizes: String,
    alt: String,
    crossorigin: String,
    decoding: String,
    referrerpolicy: String,
    draggable: Boolean,
    loading: {
      type: String,
      default: "lazy"
    },
    fetchpriority: {
      type: String,
      default: "auto"
    },
    width: String,
    height: String,
    initialRatio: {
      type: [Number, String],
      default: defaultRatio
    },
    placeholderSrc: String,
    fit: {
      type: String,
      default: "cover"
    },
    position: {
      type: String,
      default: "50% 50%"
    },
    imgClass: String,
    imgStyle: Object,
    noSpinner: Boolean,
    noNativeMenu: Boolean,
    noTransition: Boolean,
    spinnerColor: String,
    spinnerSize: String
  },
  emits: ["load", "error"],
  setup(props, { slots, emit }) {
    const naturalRatio = ref(props.initialRatio);
    const ratioStyle = useRatio(props, naturalRatio);
    let loadTimer;
    const images = [
      ref(null),
      ref(getPlaceholderSrc())
    ];
    const position = ref(0);
    const isLoading = ref(false);
    const hasError = ref(false);
    const classes = computed(
      () => `q-img q-img--${props.noNativeMenu === true ? "no-" : ""}menu`
    );
    const style = computed(() => ({
      width: props.width,
      height: props.height
    }));
    const imgClass = computed(
      () => `q-img__image ${props.imgClass !== void 0 ? props.imgClass + " " : ""}q-img__image--with${props.noTransition === true ? "out" : ""}-transition`
    );
    const imgStyle = computed(() => ({
      ...props.imgStyle,
      objectFit: props.fit,
      objectPosition: props.position
    }));
    watch(() => getCurrentSrc(), addImage);
    function getCurrentSrc() {
      return props.src || props.srcset || props.sizes ? {
        src: props.src,
        srcset: props.srcset,
        sizes: props.sizes
      } : null;
    }
    function getPlaceholderSrc() {
      return props.placeholderSrc !== void 0 ? { src: props.placeholderSrc } : null;
    }
    function addImage(imgProps) {
      clearTimeout(loadTimer);
      hasError.value = false;
      if (imgProps === null) {
        isLoading.value = false;
        images[position.value ^ 1].value = getPlaceholderSrc();
      } else {
        isLoading.value = true;
      }
      images[position.value].value = imgProps;
    }
    function onLoad({ target }) {
      if (loadTimer === null) {
        return;
      }
      clearTimeout(loadTimer);
      naturalRatio.value = target.naturalHeight === 0 ? 0.5 : target.naturalWidth / target.naturalHeight;
      waitForCompleteness(target, 1);
    }
    function waitForCompleteness(target, count) {
      if (loadTimer === null || count === 1e3) {
        return;
      }
      if (target.complete === true) {
        onReady(target);
      } else {
        loadTimer = setTimeout(() => {
          waitForCompleteness(target, count + 1);
        }, 50);
      }
    }
    function onReady(img) {
      if (loadTimer === null) {
        return;
      }
      position.value = position.value ^ 1;
      images[position.value].value = null;
      isLoading.value = false;
      hasError.value = false;
      emit("load", img.currentSrc || img.src);
    }
    function onError(err) {
      clearTimeout(loadTimer);
      isLoading.value = false;
      hasError.value = true;
      images[position.value].value = null;
      images[position.value ^ 1].value = getPlaceholderSrc();
      emit("error", err);
    }
    function getImage(index) {
      const img = images[index].value;
      const data = {
        key: "img_" + index,
        class: imgClass.value,
        style: imgStyle.value,
        crossorigin: props.crossorigin,
        decoding: props.decoding,
        referrerpolicy: props.referrerpolicy,
        height: props.height,
        width: props.width,
        loading: props.loading,
        fetchpriority: props.fetchpriority,
        "aria-hidden": "true",
        draggable: props.draggable,
        ...img
      };
      if (position.value === index) {
        data.class += " q-img__image--waiting";
        Object.assign(data, { onLoad, onError });
      } else {
        data.class += " q-img__image--loaded";
      }
      return h(
        "div",
        { class: "q-img__container absolute-full", key: "img" + index },
        h("img", data)
      );
    }
    function getContent() {
      if (isLoading.value !== true) {
        return h("div", {
          key: "content",
          class: "q-img__content absolute-full q-anchor--skip"
        }, hSlot(slots[hasError.value === true ? "error" : "default"]));
      }
      return h("div", {
        key: "loading",
        class: "q-img__loading absolute-full flex flex-center"
      }, slots.loading !== void 0 ? slots.loading() : props.noSpinner === true ? void 0 : [
        h(QSpinner, {
          color: props.spinnerColor,
          size: props.spinnerSize
        })
      ]);
    }
    {
      {
        addImage(getCurrentSrc());
      }
      onBeforeUnmount(() => {
        clearTimeout(loadTimer);
        loadTimer = null;
      });
    }
    return () => {
      const content = [];
      if (ratioStyle.value !== null) {
        content.push(
          h("div", { key: "filler", style: ratioStyle.value })
        );
      }
      if (hasError.value !== true) {
        if (images[0].value !== null) {
          content.push(getImage(0));
        }
        if (images[1].value !== null) {
          content.push(getImage(1));
        }
      }
      content.push(
        h(Transition, { name: "q-transition--fade" }, getContent)
      );
      return h("div", {
        class: classes.value,
        style: style.value,
        role: "img",
        "aria-label": props.alt
      }, content);
    };
  }
});
const usePageContainerBgStyleStore = defineStore("pageContainerBgStyleStore", {
  state: () => ({
    gradient1: "000000FF",
    gradient2: "000000FF"
  }),
  actions: {
    setColors(color) {
      this.gradient1 = color[0];
      this.gradient2 = color[1];
    }
  },
  getters: {
    getGradient1: (state) => {
      return `#${state.gradient1}`;
    },
    getGradient2: (state) => {
      return `#${state.gradient2}`;
    }
  }
});
export { QImg as Q, usePageContainerBgStyleStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUNvbnRhaW5lckJnLjQzMTNkMzNhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb3NhYmxlcy9wcml2YXRlL3VzZS1yYXRpby5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvaW1nL1FJbWcuanMiLCIuLi8uLi8uLi9zcmMvc3RvcmVzL3BhZ2VDb250YWluZXJCZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcblxuZXhwb3J0IGNvbnN0IHVzZVJhdGlvUHJvcHMgPSB7XG4gIHJhdGlvOiBbIFN0cmluZywgTnVtYmVyIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb3BzLCBuYXR1cmFsUmF0aW8pIHtcbiAgLy8gcmV0dXJuIHJhdGlvU3R5bGVcbiAgcmV0dXJuIGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCByYXRpbyA9IE51bWJlcihcbiAgICAgIHByb3BzLnJhdGlvIHx8IChuYXR1cmFsUmF0aW8gIT09IHZvaWQgMCA/IG5hdHVyYWxSYXRpby52YWx1ZSA6IHZvaWQgMClcbiAgICApXG5cbiAgICByZXR1cm4gaXNOYU4ocmF0aW8pICE9PSB0cnVlICYmIHJhdGlvID4gMFxuICAgICAgPyB7IHBhZGRpbmdCb3R0b206IGAkeyAxMDAgLyByYXRpbyB9JWAgfVxuICAgICAgOiBudWxsXG4gIH0pXG59XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBvbkJlZm9yZVVubW91bnQsIFRyYW5zaXRpb24gfSBmcm9tICd2dWUnXG5cbmltcG9ydCBRU3Bpbm5lciBmcm9tICcuLi9zcGlubmVyL1FTcGlubmVyLmpzJ1xuXG5pbXBvcnQgdXNlUmF0aW8sIHsgdXNlUmF0aW9Qcm9wcyB9IGZyb20gJy4uLy4uL2NvbXBvc2FibGVzL3ByaXZhdGUvdXNlLXJhdGlvLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IGRlZmF1bHRSYXRpbyA9IDE2IC8gOVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUltZycsXG5cbiAgcHJvcHM6IHtcbiAgICAuLi51c2VSYXRpb1Byb3BzLFxuXG4gICAgc3JjOiBTdHJpbmcsXG4gICAgc3Jjc2V0OiBTdHJpbmcsXG4gICAgc2l6ZXM6IFN0cmluZyxcblxuICAgIGFsdDogU3RyaW5nLFxuICAgIGNyb3Nzb3JpZ2luOiBTdHJpbmcsXG4gICAgZGVjb2Rpbmc6IFN0cmluZyxcbiAgICByZWZlcnJlcnBvbGljeTogU3RyaW5nLFxuXG4gICAgZHJhZ2dhYmxlOiBCb29sZWFuLFxuXG4gICAgbG9hZGluZzoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2xhenknXG4gICAgfSxcbiAgICBmZXRjaHByaW9yaXR5OiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiAnYXV0bydcbiAgICB9LFxuICAgIHdpZHRoOiBTdHJpbmcsXG4gICAgaGVpZ2h0OiBTdHJpbmcsXG4gICAgaW5pdGlhbFJhdGlvOiB7XG4gICAgICB0eXBlOiBbIE51bWJlciwgU3RyaW5nIF0sXG4gICAgICBkZWZhdWx0OiBkZWZhdWx0UmF0aW9cbiAgICB9LFxuXG4gICAgcGxhY2Vob2xkZXJTcmM6IFN0cmluZyxcblxuICAgIGZpdDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogJ2NvdmVyJ1xuICAgIH0sXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICc1MCUgNTAlJ1xuICAgIH0sXG5cbiAgICBpbWdDbGFzczogU3RyaW5nLFxuICAgIGltZ1N0eWxlOiBPYmplY3QsXG5cbiAgICBub1NwaW5uZXI6IEJvb2xlYW4sXG4gICAgbm9OYXRpdmVNZW51OiBCb29sZWFuLFxuICAgIG5vVHJhbnNpdGlvbjogQm9vbGVhbixcblxuICAgIHNwaW5uZXJDb2xvcjogU3RyaW5nLFxuICAgIHNwaW5uZXJTaXplOiBTdHJpbmdcbiAgfSxcblxuICBlbWl0czogWyAnbG9hZCcsICdlcnJvcicgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IG5hdHVyYWxSYXRpbyA9IHJlZihwcm9wcy5pbml0aWFsUmF0aW8pXG4gICAgY29uc3QgcmF0aW9TdHlsZSA9IHVzZVJhdGlvKHByb3BzLCBuYXR1cmFsUmF0aW8pXG5cbiAgICBsZXQgbG9hZFRpbWVyXG5cbiAgICBjb25zdCBpbWFnZXMgPSBbXG4gICAgICByZWYobnVsbCksXG4gICAgICByZWYoZ2V0UGxhY2Vob2xkZXJTcmMoKSlcbiAgICBdXG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHJlZigwKVxuXG4gICAgY29uc3QgaXNMb2FkaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGhhc0Vycm9yID0gcmVmKGZhbHNlKVxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBgcS1pbWcgcS1pbWctLSR7IHByb3BzLm5vTmF0aXZlTWVudSA9PT0gdHJ1ZSA/ICduby0nIDogJycgfW1lbnVgXG4gICAgKVxuXG4gICAgY29uc3Qgc3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoe1xuICAgICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBwcm9wcy5oZWlnaHRcbiAgICB9KSlcblxuICAgIGNvbnN0IGltZ0NsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIGBxLWltZ19faW1hZ2UgJHsgcHJvcHMuaW1nQ2xhc3MgIT09IHZvaWQgMCA/IHByb3BzLmltZ0NsYXNzICsgJyAnIDogJycgfWBcbiAgICAgICsgYHEtaW1nX19pbWFnZS0td2l0aCR7IHByb3BzLm5vVHJhbnNpdGlvbiA9PT0gdHJ1ZSA/ICdvdXQnIDogJycgfS10cmFuc2l0aW9uYFxuICAgIClcblxuICAgIGNvbnN0IGltZ1N0eWxlID0gY29tcHV0ZWQoKCkgPT4gKHtcbiAgICAgIC4uLnByb3BzLmltZ1N0eWxlLFxuICAgICAgb2JqZWN0Rml0OiBwcm9wcy5maXQsXG4gICAgICBvYmplY3RQb3NpdGlvbjogcHJvcHMucG9zaXRpb25cbiAgICB9KSlcblxuICAgIHdhdGNoKCgpID0+IGdldEN1cnJlbnRTcmMoKSwgYWRkSW1hZ2UpXG5cbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3JjICgpIHtcbiAgICAgIHJldHVybiBwcm9wcy5zcmMgfHwgcHJvcHMuc3Jjc2V0IHx8IHByb3BzLnNpemVzXG4gICAgICAgID8ge1xuICAgICAgICAgICAgc3JjOiBwcm9wcy5zcmMsXG4gICAgICAgICAgICBzcmNzZXQ6IHByb3BzLnNyY3NldCxcbiAgICAgICAgICAgIHNpemVzOiBwcm9wcy5zaXplc1xuICAgICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXJTcmMgKCkge1xuICAgICAgcmV0dXJuIHByb3BzLnBsYWNlaG9sZGVyU3JjICE9PSB2b2lkIDBcbiAgICAgICAgPyB7IHNyYzogcHJvcHMucGxhY2Vob2xkZXJTcmMgfVxuICAgICAgICA6IG51bGxcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbWFnZSAoaW1nUHJvcHMpIHtcbiAgICAgIGNsZWFyVGltZW91dChsb2FkVGltZXIpXG4gICAgICBoYXNFcnJvci52YWx1ZSA9IGZhbHNlXG5cbiAgICAgIGlmIChpbWdQcm9wcyA9PT0gbnVsbCkge1xuICAgICAgICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF4gMSBdLnZhbHVlID0gZ2V0UGxhY2Vob2xkZXJTcmMoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlzTG9hZGluZy52YWx1ZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaW1hZ2VzWyBwb3NpdGlvbi52YWx1ZSBdLnZhbHVlID0gaW1nUHJvcHNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkxvYWQgKHsgdGFyZ2V0IH0pIHtcbiAgICAgIC8vIGlmIGNvbXBvbmVudCBoYXMgYmVlbiBhbHJlYWR5IGRlc3Ryb3llZFxuICAgICAgaWYgKGxvYWRUaW1lciA9PT0gbnVsbCkgeyByZXR1cm4gfVxuXG4gICAgICBjbGVhclRpbWVvdXQobG9hZFRpbWVyKVxuXG4gICAgICBuYXR1cmFsUmF0aW8udmFsdWUgPSB0YXJnZXQubmF0dXJhbEhlaWdodCA9PT0gMFxuICAgICAgICA/IDAuNVxuICAgICAgICA6IHRhcmdldC5uYXR1cmFsV2lkdGggLyB0YXJnZXQubmF0dXJhbEhlaWdodFxuXG4gICAgICB3YWl0Rm9yQ29tcGxldGVuZXNzKHRhcmdldCwgMSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3YWl0Rm9yQ29tcGxldGVuZXNzICh0YXJnZXQsIGNvdW50KSB7XG4gICAgICAvLyBwcm90ZWN0IGFnYWluc3QgcnVubmluZyBmb3JldmVyXG4gICAgICBpZiAobG9hZFRpbWVyID09PSBudWxsIHx8IGNvdW50ID09PSAxMDAwKSB7IHJldHVybiB9XG5cbiAgICAgIGlmICh0YXJnZXQuY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgb25SZWFkeSh0YXJnZXQpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbG9hZFRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2FpdEZvckNvbXBsZXRlbmVzcyh0YXJnZXQsIGNvdW50ICsgMSlcbiAgICAgICAgfSwgNTApXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZWFkeSAoaW1nKSB7XG4gICAgICAvLyBpZiBjb21wb25lbnQgaGFzIGJlZW4gYWxyZWFkeSBkZXN0cm95ZWRcbiAgICAgIGlmIChsb2FkVGltZXIgPT09IG51bGwpIHsgcmV0dXJuIH1cblxuICAgICAgcG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi52YWx1ZSBeIDFcbiAgICAgIGltYWdlc1sgcG9zaXRpb24udmFsdWUgXS52YWx1ZSA9IG51bGxcbiAgICAgIGlzTG9hZGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICBoYXNFcnJvci52YWx1ZSA9IGZhbHNlXG4gICAgICBlbWl0KCdsb2FkJywgaW1nLmN1cnJlbnRTcmMgfHwgaW1nLnNyYylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkVycm9yIChlcnIpIHtcbiAgICAgIGNsZWFyVGltZW91dChsb2FkVGltZXIpXG4gICAgICBpc0xvYWRpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgaGFzRXJyb3IudmFsdWUgPSB0cnVlXG4gICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF0udmFsdWUgPSBudWxsXG4gICAgICBpbWFnZXNbIHBvc2l0aW9uLnZhbHVlIF4gMSBdLnZhbHVlID0gZ2V0UGxhY2Vob2xkZXJTcmMoKVxuICAgICAgZW1pdCgnZXJyb3InLCBlcnIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0SW1hZ2UgKGluZGV4KSB7XG4gICAgICBjb25zdCBpbWcgPSBpbWFnZXNbIGluZGV4IF0udmFsdWVcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAga2V5OiAnaW1nXycgKyBpbmRleCxcbiAgICAgICAgY2xhc3M6IGltZ0NsYXNzLnZhbHVlLFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUudmFsdWUsXG4gICAgICAgIGNyb3Nzb3JpZ2luOiBwcm9wcy5jcm9zc29yaWdpbixcbiAgICAgICAgZGVjb2Rpbmc6IHByb3BzLmRlY29kaW5nLFxuICAgICAgICByZWZlcnJlcnBvbGljeTogcHJvcHMucmVmZXJyZXJwb2xpY3ksXG4gICAgICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgICAgICB3aWR0aDogcHJvcHMud2lkdGgsXG4gICAgICAgIGxvYWRpbmc6IHByb3BzLmxvYWRpbmcsXG4gICAgICAgIGZldGNocHJpb3JpdHk6IHByb3BzLmZldGNocHJpb3JpdHksXG4gICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgZHJhZ2dhYmxlOiBwcm9wcy5kcmFnZ2FibGUsXG4gICAgICAgIC4uLmltZ1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24udmFsdWUgPT09IGluZGV4KSB7XG4gICAgICAgIGRhdGEuY2xhc3MgKz0gJyBxLWltZ19faW1hZ2UtLXdhaXRpbmcnXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgeyBvbkxvYWQsIG9uRXJyb3IgfSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBkYXRhLmNsYXNzICs9ICcgcS1pbWdfX2ltYWdlLS1sb2FkZWQnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzczogJ3EtaW1nX19jb250YWluZXIgYWJzb2x1dGUtZnVsbCcsIGtleTogJ2ltZycgKyBpbmRleCB9LFxuICAgICAgICBoKCdpbWcnLCBkYXRhKVxuICAgICAgKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldENvbnRlbnQgKCkge1xuICAgICAgaWYgKGlzTG9hZGluZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICAgIGtleTogJ2NvbnRlbnQnLFxuICAgICAgICAgIGNsYXNzOiAncS1pbWdfX2NvbnRlbnQgYWJzb2x1dGUtZnVsbCBxLWFuY2hvci0tc2tpcCdcbiAgICAgICAgfSwgaFNsb3Qoc2xvdHNbIGhhc0Vycm9yLnZhbHVlID09PSB0cnVlID8gJ2Vycm9yJyA6ICdkZWZhdWx0JyBdKSlcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAga2V5OiAnbG9hZGluZycsXG4gICAgICAgIGNsYXNzOiAncS1pbWdfX2xvYWRpbmcgYWJzb2x1dGUtZnVsbCBmbGV4IGZsZXgtY2VudGVyJ1xuICAgICAgfSwgKFxuICAgICAgICBzbG90cy5sb2FkaW5nICE9PSB2b2lkIDBcbiAgICAgICAgICA/IHNsb3RzLmxvYWRpbmcoKVxuICAgICAgICAgIDogKFxuICAgICAgICAgICAgICBwcm9wcy5ub1NwaW5uZXIgPT09IHRydWVcbiAgICAgICAgICAgICAgICA/IHZvaWQgMFxuICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICBoKFFTcGlubmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHByb3BzLnNwaW5uZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiBwcm9wcy5zcGlubmVyU2l6ZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgKSlcbiAgICB9XG5cbiAgICBpZiAoX19RVUFTQVJfU1NSX1NFUlZFUl9fICE9PSB0cnVlKSB7XG4gICAgICBpZiAoX19RVUFTQVJfU1NSX0NMSUVOVF9fKSB7XG4gICAgICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICAgICAgYWRkSW1hZ2UoZ2V0Q3VycmVudFNyYygpKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGFkZEltYWdlKGdldEN1cnJlbnRTcmMoKSlcbiAgICAgIH1cblxuICAgICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGxvYWRUaW1lcilcbiAgICAgICAgbG9hZFRpbWVyID0gbnVsbFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IFtdXG5cbiAgICAgIGlmIChyYXRpb1N0eWxlLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnRlbnQucHVzaChcbiAgICAgICAgICBoKCdkaXYnLCB7IGtleTogJ2ZpbGxlcicsIHN0eWxlOiByYXRpb1N0eWxlLnZhbHVlIH0pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKGhhc0Vycm9yLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIGlmIChpbWFnZXNbIDAgXS52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnQucHVzaChnZXRJbWFnZSgwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbWFnZXNbIDEgXS52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnRlbnQucHVzaChnZXRJbWFnZSgxKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb250ZW50LnB1c2goXG4gICAgICAgIGgoVHJhbnNpdGlvbiwgeyBuYW1lOiAncS10cmFuc2l0aW9uLS1mYWRlJyB9LCBnZXRDb250ZW50KVxuICAgICAgKVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgICAgc3R5bGU6IHN0eWxlLnZhbHVlLFxuICAgICAgICByb2xlOiAnaW1nJyxcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiBwcm9wcy5hbHRcbiAgICAgIH0sIGNvbnRlbnQpXG4gICAgfVxuICB9XG59KVxuIiwiaW1wb3J0IHsgZGVmaW5lU3RvcmUgfSBmcm9tICdwaW5pYSc7XG5pbXBvcnQge3N0YXR9IGZyb20gXCJmc1wiO1xuXG5leHBvcnQgY29uc3QgdXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZSA9IGRlZmluZVN0b3JlKCdwYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlJywge1xuICBzdGF0ZTogKCkgPT4gKHtcbiAgICBncmFkaWVudDE6ICcwMDAwMDBGRicsXG4gICAgZ3JhZGllbnQyOiAnMDAwMDAwRkYnXG4gIH0pLFxuXG4gIGFjdGlvbnM6IHtcbiAgICBzZXRDb2xvcnMoY29sb3I6IHN0cmluZ1tdKSB7XG4gICAgICB0aGlzLmdyYWRpZW50MSA9IGNvbG9yWzBdO1xuICAgICAgdGhpcy5ncmFkaWVudDIgPSBjb2xvclsxXTtcbiAgICB9XG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBnZXRHcmFkaWVudDE6IChzdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIGAjJHtzdGF0ZS5ncmFkaWVudDF9YDtcbiAgICB9LFxuICAgIGdldEdyYWRpZW50MjogKHN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4gYCMke3N0YXRlLmdyYWRpZW50Mn1gO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVPLE1BQU0sZ0JBQWdCO0FBQUEsRUFDM0IsT0FBTyxDQUFFLFFBQVEsTUFBUTtBQUMzQjtBQUVlLFNBQUEsU0FBVSxPQUFPLGNBQWM7QUFFNUMsU0FBTyxTQUFTLE1BQU07QUFDcEIsVUFBTSxRQUFRO0FBQUEsTUFDWixNQUFNLFVBQVUsaUJBQWlCLFNBQVMsYUFBYSxRQUFRO0FBQUEsSUFDaEU7QUFFRCxXQUFPLE1BQU0sS0FBSyxNQUFNLFFBQVEsUUFBUSxJQUNwQyxFQUFFLGVBQWUsR0FBSSxNQUFNLFNBQVcsSUFDdEM7QUFBQSxFQUNSLENBQUc7QUFDSDtBQ1JBLE1BQU0sZUFBZSxLQUFLO0FBRTFCLElBQUEsT0FBZSxnQkFBZ0I7QUFBQSxFQUM3QixNQUFNO0FBQUEsRUFFTixPQUFPO0FBQUEsSUFDTCxHQUFHO0FBQUEsSUFFSCxLQUFLO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFFUCxLQUFLO0FBQUEsSUFDTCxhQUFhO0FBQUEsSUFDYixVQUFVO0FBQUEsSUFDVixnQkFBZ0I7QUFBQSxJQUVoQixXQUFXO0FBQUEsSUFFWCxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDVjtBQUFBLElBQ0QsZUFBZTtBQUFBLE1BQ2IsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLElBQ1Y7QUFBQSxJQUNELE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLGNBQWM7QUFBQSxNQUNaLE1BQU0sQ0FBRSxRQUFRLE1BQVE7QUFBQSxNQUN4QixTQUFTO0FBQUEsSUFDVjtBQUFBLElB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

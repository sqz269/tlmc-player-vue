import { E as defineComponent, T as unref, bd as renderSlot, G as openBlock, U as createElementBlock, _ as _export_sfc, be as LoadingStatus } from "./index.8df2ea7a.js";
const _hoisted_1 = { key: 3 };
const _sfc_main = defineComponent({
  __name: "LoadableElement",
  props: {
    stateController: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return props.stateController.status.value === unref(LoadingStatus).Loading ? renderSlot(_ctx.$slots, "loading", { key: 0 }) : props.stateController.status.value === unref(LoadingStatus).Error ? renderSlot(_ctx.$slots, "error", {
        key: 1,
        error: props.stateController.error.value
      }) : props.stateController.status.value === unref(LoadingStatus).Success ? renderSlot(_ctx.$slots, "default", {
        key: 2,
        data: props.stateController.state.value
      }) : (openBlock(), createElementBlock("div", _hoisted_1, "Loadable Element controller's state is never updated. Did you update the controller state or requested load?"));
    };
  }
});
var LoadableElement = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "LoadableElement.vue"]]);
export { LoadableElement as L };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGFibGVFbGVtZW50LmU0ZDQ3MGFjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVFbGVtZW50LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxzbG90XG4gICAgdi1pZj1cInByb3BzLnN0YXRlQ29udHJvbGxlci5zdGF0dXMudmFsdWUgPT09IExvYWRpbmdTdGF0dXMuTG9hZGluZ1wiXG4gICAgbmFtZT1cImxvYWRpbmdcIlxuICAvPlxuICA8c2xvdFxuICAgIHYtZWxzZS1pZj1cInByb3BzLnN0YXRlQ29udHJvbGxlci5zdGF0dXMudmFsdWUgPT09IExvYWRpbmdTdGF0dXMuRXJyb3JcIlxuICAgIG5hbWU9XCJlcnJvclwiXG4gICAgOmVycm9yPVwicHJvcHMuc3RhdGVDb250cm9sbGVyLmVycm9yLnZhbHVlXCJcbiAgLz5cbiAgPHNsb3RcbiAgICB2LWVsc2UtaWY9XCJwcm9wcy5zdGF0ZUNvbnRyb2xsZXIuc3RhdHVzLnZhbHVlID09PSBMb2FkaW5nU3RhdHVzLlN1Y2Nlc3NcIlxuICAgIDpkYXRhPVwicHJvcHMuc3RhdGVDb250cm9sbGVyLnN0YXRlLnZhbHVlXCJcbiAgLz5cbiAgPGRpdiB2LWVsc2U+TG9hZGFibGUgRWxlbWVudCBjb250cm9sbGVyJ3Mgc3RhdGUgaXMgbmV2ZXIgdXBkYXRlZC4gRGlkIHlvdSB1cGRhdGUgdGhlIGNvbnRyb2xsZXIgc3RhdGUgb3IgcmVxdWVzdGVkXG4gICAgbG9hZD88L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCIgZ2VuZXJpYz1cIlRcIj5cbmltcG9ydCB7IGRlZmluZVByb3BzIH0gZnJvbSAndnVlJztcbmltcG9ydCB7IExvYWRpbmdTdGF0dXMsIExvYWRhYmxlU3RhdGUgfSBmcm9tICcuL0xvYWRhYmxlQ29udHJvbGxlcic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBzdGF0ZUNvbnRyb2xsZXI6IExvYWRhYmxlU3RhdGU8VD47XG59PigpO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFzQkEsVUFBTSxRQUFROzs7Ozs7Ozs7Ozs7OzsifQ==

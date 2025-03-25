import { _ as _export_sfc, E as defineComponent, b9 as Logger, i as inject, ba as TrackApi, bb as apiConfigurationProvider, bc as useLoadableController, w as watch, o as onMounted, G as openBlock, H as createBlock, I as withCtx, J as createVNode, R as createBaseVNode, a7 as QSpinner, T as unref } from "./index.67231471.js";
import { Q as QPage } from "./QPage.0cc62060.js";
import { L as LoadableElement } from "./LoadableElement.5abfd192.js";
const _sfc_main$1 = {};
function _sfc_render(_ctx, _cache) {
  return " Bruh ";
}
var LyricsScrollingRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "LyricsScrollingRenderer.vue"]]);
const _hoisted_1 = { class: "row col-all justify-center" };
const _sfc_main = defineComponent({
  __name: "LyricsPage",
  setup(__props) {
    Logger.getLogger("LyricsPage");
    const queueService = inject("queueService");
    const audioService = inject("audioService");
    const trackApi = new TrackApi(apiConfigurationProvider.getApiConfiguration());
    const controller = useLoadableController();
    const loadLyrics = async () => {
      controller.setLoading();
      if ((queueService == null ? void 0 : queueService.currentTrack.value) == null) {
        controller.setSuccess(null);
        return;
      }
      const currentTrack = queueService == null ? void 0 : queueService.currentTrack.value;
      if (!currentTrack.track.hasLyrics) {
        controller.setSuccess(null);
        return;
      }
      const result = await trackApi.getLyrics({ trackId: currentTrack.track.id });
      controller.setSuccess(result);
    };
    if (audioService) {
      watch(audioService.position, async (valNew, valOld) => {
        console.log(valNew == null ? void 0 : valNew.toSeconds());
      });
    }
    onMounted(async () => {
      await loadLyrics();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => [
          createVNode(LoadableElement, { "state-controller": unref(controller) }, {
            loading: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createVNode(QSpinner, {
                  color: "primary",
                  size: "3em"
                })
              ])
            ]),
            default: withCtx(() => [
              createVNode(LyricsScrollingRenderer)
            ]),
            _: 1
          }, 8, ["state-controller"])
        ]),
        _: 1
      });
    };
  }
});
var LyricsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "LyricsPage.vue"]]);
export { LyricsPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTHlyaWNzUGFnZS4wZDc5MTdhMy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0x5cmljc1BhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZT5cbiAgICA8TG9hZGFibGVFbGVtZW50IDpzdGF0ZS1jb250cm9sbGVyPVwiY29udHJvbGxlclwiPlxuICAgICAgPHRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGNvbC1hbGwganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8cS1zcGlubmVyIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCIzZW1cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cIlwiPlxuICAgICAgICA8IS0tIHt7IGRhdGEgfX0gLS0+XG4gICAgICAgICAgPEx5cmljc1Njcm9sbGluZ1JlbmRlcmVyPjwvTHlyaWNzU2Nyb2xsaW5nUmVuZGVyZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvTG9hZGFibGVFbGVtZW50PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7IEx5cmljc1JlYWREdG8sIFRyYWNrQXBpIH0gZnJvbSAnYXBwL2JhY2tlbmQtc2VydmljZS1hcGknO1xuaW1wb3J0IEx5cmljc1Njcm9sbGluZ1JlbmRlcmVyIGZyb20gJ3NyYy9jb21wb25lbnRzL0x5cmljc1Njcm9sbGluZ1JlbmRlcmVyL0x5cmljc1Njcm9sbGluZ1JlbmRlcmVyLnZ1ZSc7XG5pbXBvcnQgeyBhcGlDb25maWd1cmF0aW9uUHJvdmlkZXIgfSBmcm9tICdzcmMvc2VydmljZXMvX3NlcnZpY2VzJztcbmltcG9ydCBBdWRpb1NlcnZpY2UgZnJvbSAnc3JjL3NlcnZpY2VzL2RvbWFpbi9BdWRpb1NlcnZpY2UnO1xuaW1wb3J0IFF1ZXVlU2VydmljZSBmcm9tICdzcmMvc2VydmljZXMvZG9tYWluL1F1ZXVlU2VydmljZSc7XG5pbXBvcnQgeyB1c2VMb2FkYWJsZUNvbnRyb2xsZXIgfSBmcm9tICdzcmMvdXRpbHMvTG9hZGFibGUvTG9hZGFibGVDb250cm9sbGVyJztcbmltcG9ydCBMb2FkYWJsZUVsZW1lbnQgZnJvbSAnc3JjL3V0aWxzL0xvYWRhYmxlL0xvYWRhYmxlRWxlbWVudC52dWUnO1xuaW1wb3J0IExvZ2dlciBmcm9tICdzcmMvdXRpbHMvTG9nZ2VyJztcbmltcG9ydCB7IGluamVjdCwgb25Nb3VudGVkLCB3YXRjaCB9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IGxvZ2dlciA9IExvZ2dlci5nZXRMb2dnZXIoJ0x5cmljc1BhZ2UnKTtcblxuY29uc3QgcXVldWVTZXJ2aWNlID0gaW5qZWN0PFF1ZXVlU2VydmljZT4oJ3F1ZXVlU2VydmljZScpO1xuY29uc3QgYXVkaW9TZXJ2aWNlID0gaW5qZWN0PEF1ZGlvU2VydmljZT4oJ2F1ZGlvU2VydmljZScpO1xuXG5jb25zdCB0cmFja0FwaSA9IG5ldyBUcmFja0FwaShhcGlDb25maWd1cmF0aW9uUHJvdmlkZXIuZ2V0QXBpQ29uZmlndXJhdGlvbigpKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSB1c2VMb2FkYWJsZUNvbnRyb2xsZXI8THlyaWNzUmVhZER0byB8IG51bGw+KCk7XG5cbmNvbnN0IGxvYWRMeXJpY3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnRyb2xsZXIuc2V0TG9hZGluZygpO1xuICBcbiAgaWYgKHF1ZXVlU2VydmljZT8uY3VycmVudFRyYWNrLnZhbHVlID09IG51bGwpIHtcbiAgICBjb250cm9sbGVyLnNldFN1Y2Nlc3MobnVsbCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFRyYWNrID0gcXVldWVTZXJ2aWNlPy5jdXJyZW50VHJhY2sudmFsdWU7XG5cbiAgaWYgKCFjdXJyZW50VHJhY2sudHJhY2suaGFzTHlyaWNzKSB7XG4gICAgY29udHJvbGxlci5zZXRTdWNjZXNzKG51bGwpO1xuICAgIHJldHVybjtcbiAgfVxuICBcbiAgLy8gTG9hZCBseXJpY3NcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdHJhY2tBcGkuZ2V0THlyaWNzKHsgdHJhY2tJZDogY3VycmVudFRyYWNrLnRyYWNrLmlkISB9KTtcblxuICBjb250cm9sbGVyLnNldFN1Y2Nlc3MocmVzdWx0KTtcbn1cblxuaWYgKGF1ZGlvU2VydmljZSkge1xuICB3YXRjaChhdWRpb1NlcnZpY2UucG9zaXRpb24hLCBhc3luYyAodmFsTmV3LCB2YWxPbGQpID0+IHtcbiAgICBjb25zb2xlLmxvZyh2YWxOZXc/LnRvU2Vjb25kcygpKVxuICB9KVxufVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBsb2FkTHlyaWNzKCk7XG59KTtcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQTZCZSxXQUFPLFVBQVUsWUFBWTtBQUV0QyxVQUFBLGVBQWUsT0FBcUIsY0FBYztBQUNsRCxVQUFBLGVBQWUsT0FBcUIsY0FBYztBQUV4RCxVQUFNLFdBQVcsSUFBSSxTQUFTLHlCQUF5QixvQkFBcUIsQ0FBQTtBQUM1RSxVQUFNLGFBQWE7QUFFbkIsVUFBTSxhQUFhLFlBQVk7QUFDN0IsaUJBQVcsV0FBVztBQUVsQixXQUFBLDZDQUFjLGFBQWEsVUFBUyxNQUFNO0FBQzVDLG1CQUFXLFdBQVcsSUFBSTtBQUMxQjtBQUFBLE1BQ0Y7QUFFTSxZQUFBLGVBQWUsNkNBQWMsYUFBYTtBQUU1QyxVQUFBLENBQUMsYUFBYSxNQUFNLFdBQVc7QUFDakMsbUJBQVcsV0FBVyxJQUFJO0FBQzFCO0FBQUEsTUFDRjtBQUdNLFlBQUEsU0FBUyxNQUFNLFNBQVMsVUFBVSxFQUFFLFNBQVMsYUFBYSxNQUFNLEdBQUEsQ0FBSztBQUUzRSxpQkFBVyxXQUFXLE1BQU07QUFBQSxJQUFBO0FBRzlCLFFBQUksY0FBYztBQUNoQixZQUFNLGFBQWEsVUFBVyxPQUFPLFFBQVEsV0FBVztBQUM5QyxnQkFBQSxJQUFJLGlDQUFRLFdBQVc7QUFBQSxNQUFBLENBQ2hDO0FBQUEsSUFDSDtBQUVBLGNBQVUsWUFBWTtBQUNwQixZQUFNLFdBQVc7QUFBQSxJQUFBLENBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

import { Q as QSpinnerDots, a as QInfiniteScroll } from "./QInfiniteScroll.f91da545.js";
import { Q as QPage } from "./QPage.2920d128.js";
import { _ as _export_sfc, P as defineComponent, r as ref, Q as QueueController, aA as ApiConfigProvider, bi as AlbumApi, R as useRouter, o as onMounted, av as onDeactivated, aw as onActivated, U as openBlock, V as createBlock, W as withCtx, d as createVNode, Y as createBaseVNode, ab as createElementBlock, aq as renderList, F as Fragment, S as unref } from "./index.77ca7030.js";
import { C as CircleApi } from "./CircleApi.e79521fe.js";
import { A as AlbumCard } from "./AlbumCard.edc08352.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.42df1679.js";
const _hoisted_1 = { class: "q-gutter-md row" };
const _hoisted_2 = { class: "row justify-center q-my-md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArtistPage",
  setup(__props) {
    const infScroll = ref();
    const queueController = QueueController.getInstance();
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
    new AlbumApi(apiConfig);
    const circleApi = new CircleApi(apiConfig);
    const router = useRouter();
    const displayAlbums = ref([]);
    const { setColors } = usePageContainerBgStyleStore();
    let currArtist;
    function loadArtist(start, limit) {
      let artist = router.currentRoute.value.params.artist;
      const isId = /^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$/.test(artist);
      if (isId) {
        return circleApi.getCircleAlbumsById({
          id: artist,
          start,
          limit
        });
      }
      return circleApi.getCircleAlbumsByName({
        name: artist,
        start,
        limit
      });
    }
    function onLoad(index, done) {
      loadArtist(index * 50, 50).then((resp) => {
        var _a;
        if (resp.length === 0) {
          (_a = infScroll.value) == null ? void 0 : _a.stop();
          done();
        }
        displayAlbums.value.push(...resp);
        done();
      });
    }
    onMounted(async () => {
      var _a;
      let artist = router.currentRoute.value.params.artist;
      if (artist !== currArtist) {
        currArtist = artist;
        (_a = infScroll.value) == null ? void 0 : _a.setIndex(0);
        displayAlbums.value.length = 0;
      }
      displayAlbums.value.push(...await loadArtist(0, 50));
    });
    onDeactivated(() => {
      var _a;
      (_a = infScroll.value) == null ? void 0 : _a.stop();
    });
    onActivated(async () => {
      var _a, _b, _c, _d;
      let artist = router.currentRoute.value.params.artist;
      if (artist !== currArtist) {
        currArtist = artist;
        (_a = infScroll.value) == null ? void 0 : _a.setIndex(0);
        displayAlbums.value.length = 0;
        displayAlbums.value.push(...await loadArtist(0, 50));
      }
      (_b = infScroll.value) == null ? void 0 : _b.resume();
      if (queueController.currentlyPlaying !== void 0) {
        const color = (_d = (_c = queueController.currentlyPlaying.album) == null ? void 0 : _c.thumbnail) == null ? void 0 : _d.colors;
        if (color) {
          setColors(color);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { padding: "" }, {
        default: withCtx(() => [
          createVNode(unref(QInfiniteScroll), {
            class: "row items-start q-gutter-md flex",
            onLoad,
            offset: 300,
            ref_key: "infScroll",
            ref: infScroll
          }, {
            loading: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QSpinnerDots, {
                  color: "primary",
                  size: "40px"
                })
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(displayAlbums.value, (album, index) => {
                  return openBlock(), createBlock(AlbumCard, {
                    key: index,
                    "album-info": album
                  }, null, 8, ["album-info"]);
                }), 128))
              ])
            ]),
            _: 1
          }, 512)
        ]),
        _: 1
      });
    };
  }
});
var ArtistPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "ArtistPage.vue"]]);
export { ArtistPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aXN0UGFnZS45N2FmYjNhNy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0FydGlzdFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBwYWRkaW5nPlxuICAgIDxxLWluZmluaXRlLXNjcm9sbCBjbGFzcz1cInJvdyBpdGVtcy1zdGFydCBxLWd1dHRlci1tZCBmbGV4XCIgQGxvYWQ9XCJvbkxvYWRcIiA6b2Zmc2V0PVwiMzAwXCIgcmVmPVwiaW5mU2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItbWQgcm93XCI+XG4gICAgICAgIDxBbGJ1bUNhcmQgdi1mb3I9XCIoYWxidW0sIGluZGV4KSBpbiBkaXNwbGF5QWxidW1zXCIgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICA6YWxidW0taW5mbz1cImFsYnVtXCI+XG4gICAgICAgIDwvQWxidW1DYXJkPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bG9hZGluZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBxLW15LW1kXCI+XG4gICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1pbmZpbml0ZS1zY3JvbGw+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHtBbGJ1bUFwaSwgQWxidW1SZWFkRHRvLCBDaXJjbGVBcGl9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7b25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFsYnVtQ2FyZCBmcm9tICdjb21wb25lbnRzL0FsYnVtQ2FyZC52dWUnO1xuaW1wb3J0IHtRSW5maW5pdGVTY3JvbGx9IGZyb20gJ3F1YXNhcic7XG5cbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuaW1wb3J0IHtRdWV1ZUNvbnRyb2xsZXJ9IGZyb20gJ3NyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXInO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJ2dWUtcm91dGVyXCI7XG4gIGltcG9ydCB7YmlBd2FyZH0gZnJvbSBcIkBxdWFzYXIvZXh0cmFzL2Jvb3RzdHJhcC1pY29uc1wiO1xuXG5jb25zdCBpbmZTY3JvbGwgPSByZWY8UUluZmluaXRlU2Nyb2xsPigpO1xuXG5jb25zdCBxdWV1ZUNvbnRyb2xsZXIgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcblxuY29uc3QgYXBpQ29uZmlnID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKTtcbmNvbnN0IGFsYnVtQXBpID0gbmV3IEFsYnVtQXBpKGFwaUNvbmZpZyk7XG5jb25zdCBjaXJjbGVBcGkgPSBuZXcgQ2lyY2xlQXBpKGFwaUNvbmZpZyk7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBkaXNwbGF5QWxidW1zID0gcmVmPEFsYnVtUmVhZER0b1tdPihbXSlcblxuY29uc3QgeyBzZXRDb2xvcnMgfSA9IHVzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUoKTtcblxubGV0IGN1cnJBcnRpc3Q6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gbG9hZEFydGlzdChzdGFydDogbnVtYmVyLCBsaW1pdDogbnVtYmVyKTogUHJvbWlzZTxBbGJ1bVJlYWREdG9bXT4ge1xuICAvLyBDaGVjayBpZiB0aGUgcGFyYW0gaXMgYW4gdXVpZCBvciBhcnRpc3QgbmFtZVxuICBsZXQgYXJ0aXN0ID0gPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hcnRpc3Q7XG5cbiAgY29uc3QgaXNJZCA9IC9eWzAtOWEtZkEtRl17OH1cXFxcYi1bMC05YS1mQS1GXXs0fVxcXFxiLVswLTlhLWZBLUZdezR9XFxcXGItWzAtOWEtZkEtRl17NH1cXFxcYi1bMC05YS1mQS1GXXsxMn0kLy50ZXN0KGFydGlzdCk7XG4gIGlmIChpc0lkKSB7XG4gICAgcmV0dXJuIGNpcmNsZUFwaS5nZXRDaXJjbGVBbGJ1bXNCeUlkKHtcbiAgICAgIGlkOiBhcnRpc3QsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBsaW1pdDogbGltaXRcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjaXJjbGVBcGkuZ2V0Q2lyY2xlQWxidW1zQnlOYW1lKHtcbiAgICBuYW1lOiBhcnRpc3QsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGxpbWl0OiBsaW1pdFxuICB9KVxufVxuXG5mdW5jdGlvbiBvbkxvYWQoaW5kZXg6IG51bWJlciwgZG9uZTogKHN0b3A/OiBib29sZWFuKSA9PiB2b2lkKSB7XG4gIGxvYWRBcnRpc3QoaW5kZXggKiA1MCwgNTApLnRoZW4oKHJlc3ApID0+IHtcbiAgICBpZiAocmVzcC5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZlNjcm9sbC52YWx1ZT8uc3RvcCgpO1xuICAgICAgZG9uZSgpO1xuICAgIH1cblxuICAgIGRpc3BsYXlBbGJ1bXMudmFsdWUucHVzaCguLi5yZXNwKTtcbiAgICBkb25lKCk7XG4gIH0pXG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGxldCBhcnRpc3QgPSA8c3RyaW5nPnJvdXRlci5jdXJyZW50Um91dGUudmFsdWUucGFyYW1zLmFydGlzdDtcbiAgaWYgKGFydGlzdCAhPT0gY3VyckFydGlzdCkge1xuICAgIGN1cnJBcnRpc3QgPSBhcnRpc3Q7XG4gICAgaW5mU2Nyb2xsLnZhbHVlPy5zZXRJbmRleCgwKTtcbiAgICBkaXNwbGF5QWxidW1zLnZhbHVlLmxlbmd0aCA9IDA7XG4gIH1cbiAgZGlzcGxheUFsYnVtcy52YWx1ZS5wdXNoKC4uLmF3YWl0IGxvYWRBcnRpc3QoMCwgNTApKVxufSlcblxub25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gIGluZlNjcm9sbC52YWx1ZT8uc3RvcCgpO1xufSlcblxub25BY3RpdmF0ZWQoYXN5bmMgKCkgPT4ge1xuICBsZXQgYXJ0aXN0ID0gPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hcnRpc3Q7XG4gIGlmIChhcnRpc3QgIT09IGN1cnJBcnRpc3QpIHtcbiAgICBjdXJyQXJ0aXN0ID0gYXJ0aXN0O1xuICAgIGluZlNjcm9sbC52YWx1ZT8uc2V0SW5kZXgoMCk7XG4gICAgZGlzcGxheUFsYnVtcy52YWx1ZS5sZW5ndGggPSAwO1xuICAgIGRpc3BsYXlBbGJ1bXMudmFsdWUucHVzaCguLi5hd2FpdCBsb2FkQXJ0aXN0KDAsIDUwKSk7XG4gIH1cblxuICBpbmZTY3JvbGwudmFsdWU/LnJlc3VtZSgpO1xuICBpZiAocXVldWVDb250cm9sbGVyLmN1cnJlbnRseVBsYXlpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGNvbG9yID0gcXVldWVDb250cm9sbGVyLmN1cnJlbnRseVBsYXlpbmcuYWxidW0/LnRodW1ibmFpbD8uY29sb3JzO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgc2V0Q29sb3JzKGNvbG9yKTtcbiAgICB9XG4gIH1cbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQThCQSxVQUFNLFlBQVk7QUFFWixVQUFBLGtCQUFrQixnQkFBZ0I7QUFFeEMsVUFBTSxZQUFZLGtCQUFrQixZQUFZLEVBQUUsYUFBYTtBQUM5QyxRQUFJLFNBQVMsU0FBUztBQUNqQyxVQUFBLFlBQVksSUFBSSxVQUFVLFNBQVM7QUFFekMsVUFBTSxTQUFTO0FBRVQsVUFBQSxnQkFBZ0IsSUFBb0IsQ0FBQSxDQUFFO0FBRXRDLFVBQUEsRUFBRSxjQUFjO0FBRWxCLFFBQUE7QUFFSyxhQUFBLFdBQVcsT0FBZSxPQUF3QztBQUV6RSxVQUFJLFNBQWlCLE9BQU8sYUFBYSxNQUFNLE9BQU87QUFFaEQsWUFBQSxPQUFPLDRGQUE0RixLQUFLLE1BQU07QUFDcEgsVUFBSSxNQUFNO0FBQ1IsZUFBTyxVQUFVLG9CQUFvQjtBQUFBLFVBQ25DLElBQUk7QUFBQSxVQUNKO0FBQUEsVUFDQTtBQUFBLFFBQUEsQ0FDRDtBQUFBLE1BQ0g7QUFFQSxhQUFPLFVBQVUsc0JBQXNCO0FBQUEsUUFDckMsTUFBTTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsTUFBQSxDQUNEO0FBQUEsSUFDSDtBQUVTLGFBQUEsT0FBTyxPQUFlLE1BQWdDO0FBQzdELGlCQUFXLFFBQVEsSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVM7O0FBQ3BDLFlBQUEsS0FBSyxXQUFXLEdBQUc7QUFDckIsMEJBQVUsVUFBVixtQkFBaUI7QUFDWjtRQUNQO0FBRWMsc0JBQUEsTUFBTSxLQUFLLEdBQUcsSUFBSTtBQUMzQjtNQUFBLENBQ047QUFBQSxJQUNIO0FBRUEsY0FBVSxZQUFZOztBQUNwQixVQUFJLFNBQWlCLE9BQU8sYUFBYSxNQUFNLE9BQU87QUFDdEQsVUFBSSxXQUFXLFlBQVk7QUFDWixxQkFBQTtBQUNILHdCQUFBLFVBQUEsbUJBQU8sU0FBUztBQUMxQixzQkFBYyxNQUFNLFNBQVM7QUFBQSxNQUMvQjtBQUNBLG9CQUFjLE1BQU0sS0FBSyxHQUFHLE1BQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztBQUFBLElBQUEsQ0FDcEQ7QUFFRCxrQkFBYyxNQUFNOztBQUNsQixzQkFBVSxVQUFWLG1CQUFpQjtBQUFBLElBQUssQ0FDdkI7QUFFRCxnQkFBWSxZQUFZOztBQUN0QixVQUFJLFNBQWlCLE9BQU8sYUFBYSxNQUFNLE9BQU87QUFDdEQsVUFBSSxXQUFXLFlBQVk7QUFDWixxQkFBQTtBQUNILHdCQUFBLFVBQUEsbUJBQU8sU0FBUztBQUMxQixzQkFBYyxNQUFNLFNBQVM7QUFDN0Isc0JBQWMsTUFBTSxLQUFLLEdBQUcsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQUEsTUFDckQ7QUFFQSxzQkFBVSxVQUFWLG1CQUFpQjtBQUNiLFVBQUEsZ0JBQWdCLHFCQUFxQixRQUFXO0FBQ2xELGNBQU0sU0FBUSwyQkFBZ0IsaUJBQWlCLFVBQWpDLG1CQUF3QyxjQUF4QyxtQkFBbUQ7QUFDakUsWUFBSSxPQUFPO0FBQ1Qsb0JBQVUsS0FBSztBQUFBLFFBQ2pCO0FBQUEsTUFDRjtBQUFBLElBQUEsQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9

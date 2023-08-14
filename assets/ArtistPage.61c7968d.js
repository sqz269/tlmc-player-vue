import { Q as QSpinnerDots, a as QInfiniteScroll } from "./QInfiniteScroll.bca27333.js";
import { Q as QPage } from "./QPage.dcab3bc9.js";
import { _ as _export_sfc, M as defineComponent, r as ref, Q as QueueController, aN as ApiConfigProvider, bA as AlbumApi, O as useRouter, o as onMounted, aA as onDeactivated, aB as onActivated, P as openBlock, R as createBlock, S as withCtx, d as createVNode, V as createBaseVNode, aa as createElementBlock, ao as renderList, F as Fragment, Z as unref } from "./index.cfb3cfd5.js";
import { C as CircleApi } from "./CircleApi.8760b9c5.js";
import { A as AlbumCard } from "./AlbumCard.538859fb.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.c683e50b.js";
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
    async function loadArtist(start, limit) {
      let artist = router.currentRoute.value.params.artist;
      const isId = /^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$/.test(artist);
      if (isId) {
        (await circleApi.getCircleAlbumsById({
          id: artist,
          start,
          limit
        })).albums;
      }
      return (await circleApi.getCircleAlbumsByName({
        name: artist,
        start,
        limit
      })).albums;
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
      if (queueController.currentlyPlaying !== null) {
        const color = (_d = (_c = queueController.currentlyPlaying.Track.album) == null ? void 0 : _c.thumbnail) == null ? void 0 : _d.colors;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJ0aXN0UGFnZS42MWM3OTY4ZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhZ2VzL0FydGlzdFBhZ2UudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPHEtcGFnZSBwYWRkaW5nPlxuICAgIDxxLWluZmluaXRlLXNjcm9sbCBjbGFzcz1cInJvdyBpdGVtcy1zdGFydCBxLWd1dHRlci1tZCBmbGV4XCIgQGxvYWQ9XCJvbkxvYWRcIiA6b2Zmc2V0PVwiMzAwXCIgcmVmPVwiaW5mU2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicS1ndXR0ZXItbWQgcm93XCI+XG4gICAgICAgIDxBbGJ1bUNhcmQgdi1mb3I9XCIoYWxidW0sIGluZGV4KSBpbiBkaXNwbGF5QWxidW1zXCIgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICA6YWxidW0taW5mbz1cImFsYnVtXCI+XG4gICAgICAgIDwvQWxidW1DYXJkPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bG9hZGluZz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdXN0aWZ5LWNlbnRlciBxLW15LW1kXCI+XG4gICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCI0MHB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvcS1pbmZpbml0ZS1zY3JvbGw+XG4gIDwvcS1wYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbiAgaW1wb3J0IHtBbGJ1bUFwaSwgQWxidW1SZWFkRHRvLCBDaXJjbGVBcGl9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7b25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uTW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFsYnVtQ2FyZCBmcm9tICdjb21wb25lbnRzL0FsYnVtQ2FyZC52dWUnO1xuaW1wb3J0IHtRSW5maW5pdGVTY3JvbGx9IGZyb20gJ3F1YXNhcic7XG5cbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSAnc3RvcmVzL3BhZ2VDb250YWluZXJCZyc7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tICdzcmMvdXRpbHMvQXBpQ29uZmlnUHJvdmlkZXInO1xuaW1wb3J0IHtRdWV1ZUNvbnRyb2xsZXJ9IGZyb20gJ3NyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXInO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJ2dWUtcm91dGVyXCI7XG4gIGltcG9ydCB7YmlBd2FyZH0gZnJvbSBcIkBxdWFzYXIvZXh0cmFzL2Jvb3RzdHJhcC1pY29uc1wiO1xuXG5jb25zdCBpbmZTY3JvbGwgPSByZWY8UUluZmluaXRlU2Nyb2xsPigpO1xuXG5jb25zdCBxdWV1ZUNvbnRyb2xsZXIgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcblxuY29uc3QgYXBpQ29uZmlnID0gQXBpQ29uZmlnUHJvdmlkZXIuZ2V0SW5zdGFuY2UoKS5nZXRBcGlDb25maWcoKTtcbmNvbnN0IGFsYnVtQXBpID0gbmV3IEFsYnVtQXBpKGFwaUNvbmZpZyk7XG5jb25zdCBjaXJjbGVBcGkgPSBuZXcgQ2lyY2xlQXBpKGFwaUNvbmZpZyk7XG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5jb25zdCBkaXNwbGF5QWxidW1zID0gcmVmPEFsYnVtUmVhZER0b1tdPihbXSlcblxuY29uc3QgeyBzZXRDb2xvcnMgfSA9IHVzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUoKTtcblxubGV0IGN1cnJBcnRpc3Q6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuYXN5bmMgZnVuY3Rpb24gbG9hZEFydGlzdChzdGFydDogbnVtYmVyLCBsaW1pdDogbnVtYmVyKTogUHJvbWlzZTxBbGJ1bVJlYWREdG9bXT4ge1xuICAvLyBDaGVjayBpZiB0aGUgcGFyYW0gaXMgYW4gdXVpZCBvciBhcnRpc3QgbmFtZVxuICBsZXQgYXJ0aXN0ID0gPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hcnRpc3Q7XG5cbiAgY29uc3QgaXNJZCA9IC9eWzAtOWEtZkEtRl17OH1cXFxcYi1bMC05YS1mQS1GXXs0fVxcXFxiLVswLTlhLWZBLUZdezR9XFxcXGItWzAtOWEtZkEtRl17NH1cXFxcYi1bMC05YS1mQS1GXXsxMn0kLy50ZXN0KGFydGlzdCk7XG4gIGlmIChpc0lkKSB7XG4gICAgKGF3YWl0IGNpcmNsZUFwaS5nZXRDaXJjbGVBbGJ1bXNCeUlkKHtcbiAgICAgIGlkOiBhcnRpc3QsXG4gICAgICBzdGFydDogc3RhcnQsXG4gICAgICBsaW1pdDogbGltaXRcbiAgICB9KSkuYWxidW1zO1xuICB9XG5cbiAgcmV0dXJuIChhd2FpdCBjaXJjbGVBcGkuZ2V0Q2lyY2xlQWxidW1zQnlOYW1lKHtcbiAgICBuYW1lOiBhcnRpc3QsXG4gICAgc3RhcnQ6IHN0YXJ0LFxuICAgIGxpbWl0OiBsaW1pdFxuICB9KSkuYWxidW1zITtcbn1cblxuZnVuY3Rpb24gb25Mb2FkKGluZGV4OiBudW1iZXIsIGRvbmU6IChzdG9wPzogYm9vbGVhbikgPT4gdm9pZCkge1xuICBsb2FkQXJ0aXN0KGluZGV4ICogNTAsIDUwKS50aGVuKChyZXNwKSA9PiB7XG4gICAgaWYgKHJlc3AubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZTY3JvbGwudmFsdWU/LnN0b3AoKTtcbiAgICAgIGRvbmUoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5QWxidW1zLnZhbHVlLnB1c2goLi4ucmVzcCk7XG4gICAgZG9uZSgpO1xuICB9KVxufVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBsZXQgYXJ0aXN0ID0gPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy5hcnRpc3Q7XG4gIGlmIChhcnRpc3QgIT09IGN1cnJBcnRpc3QpIHtcbiAgICBjdXJyQXJ0aXN0ID0gYXJ0aXN0O1xuICAgIGluZlNjcm9sbC52YWx1ZT8uc2V0SW5kZXgoMCk7XG4gICAgZGlzcGxheUFsYnVtcy52YWx1ZS5sZW5ndGggPSAwO1xuICB9XG4gIGRpc3BsYXlBbGJ1bXMudmFsdWUucHVzaCguLi5hd2FpdCBsb2FkQXJ0aXN0KDAsIDUwKSlcbn0pXG5cbm9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICBpbmZTY3JvbGwudmFsdWU/LnN0b3AoKTtcbn0pXG5cbm9uQWN0aXZhdGVkKGFzeW5jICgpID0+IHtcbiAgbGV0IGFydGlzdCA9IDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMuYXJ0aXN0O1xuICBpZiAoYXJ0aXN0ICE9PSBjdXJyQXJ0aXN0KSB7XG4gICAgY3VyckFydGlzdCA9IGFydGlzdDtcbiAgICBpbmZTY3JvbGwudmFsdWU/LnNldEluZGV4KDApO1xuICAgIGRpc3BsYXlBbGJ1bXMudmFsdWUubGVuZ3RoID0gMDtcbiAgICBkaXNwbGF5QWxidW1zLnZhbHVlLnB1c2goLi4uYXdhaXQgbG9hZEFydGlzdCgwLCA1MCkpO1xuICB9XG5cbiAgaW5mU2Nyb2xsLnZhbHVlPy5yZXN1bWUoKTtcbiAgaWYgKHF1ZXVlQ29udHJvbGxlci5jdXJyZW50bHlQbGF5aW5nICE9PSBudWxsKSB7XG4gICAgY29uc3QgY29sb3IgPSBxdWV1ZUNvbnRyb2xsZXIuY3VycmVudGx5UGxheWluZy5UcmFjay5hbGJ1bT8udGh1bWJuYWlsPy5jb2xvcnM7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBzZXRDb2xvcnMoY29sb3IpO1xuICAgIH1cbiAgfVxufSlcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBOEJBLFVBQU0sWUFBWTtBQUVaLFVBQUEsa0JBQWtCLGdCQUFnQjtBQUV4QyxVQUFNLFlBQVksa0JBQWtCLFlBQVksRUFBRSxhQUFhO0FBQzlDLFFBQUksU0FBUyxTQUFTO0FBQ2pDLFVBQUEsWUFBWSxJQUFJLFVBQVUsU0FBUztBQUV6QyxVQUFNLFNBQVM7QUFFVCxVQUFBLGdCQUFnQixJQUFvQixDQUFBLENBQUU7QUFFdEMsVUFBQSxFQUFFLGNBQWM7QUFFbEIsUUFBQTtBQUVXLG1CQUFBLFdBQVcsT0FBZSxPQUF3QztBQUUvRSxVQUFJLFNBQWlCLE9BQU8sYUFBYSxNQUFNLE9BQU87QUFFaEQsWUFBQSxPQUFPLDRGQUE0RixLQUFLLE1BQU07QUFDcEgsVUFBSSxNQUFNO0FBQ1AsU0FBQSxNQUFNLFVBQVUsb0JBQW9CO0FBQUEsVUFDbkMsSUFBSTtBQUFBLFVBQ0o7QUFBQSxVQUNBO0FBQUEsUUFDRCxDQUFBLEdBQUc7QUFBQSxNQUNOO0FBRVEsY0FBQSxNQUFNLFVBQVUsc0JBQXNCO0FBQUEsUUFDNUMsTUFBTTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsTUFDRCxDQUFBLEdBQUc7QUFBQSxJQUNOO0FBRVMsYUFBQSxPQUFPLE9BQWUsTUFBZ0M7QUFDN0QsaUJBQVcsUUFBUSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsU0FBUzs7QUFDcEMsWUFBQSxLQUFLLFdBQVcsR0FBRztBQUNyQiwwQkFBVSxVQUFWLG1CQUFpQjtBQUNaO1FBQ1A7QUFFYyxzQkFBQSxNQUFNLEtBQUssR0FBRyxJQUFJO0FBQzNCO01BQUEsQ0FDTjtBQUFBLElBQ0g7QUFFQSxjQUFVLFlBQVk7O0FBQ3BCLFVBQUksU0FBaUIsT0FBTyxhQUFhLE1BQU0sT0FBTztBQUN0RCxVQUFJLFdBQVcsWUFBWTtBQUNaLHFCQUFBO0FBQ0gsd0JBQUEsVUFBQSxtQkFBTyxTQUFTO0FBQzFCLHNCQUFjLE1BQU0sU0FBUztBQUFBLE1BQy9CO0FBQ0Esb0JBQWMsTUFBTSxLQUFLLEdBQUcsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQUEsSUFBQSxDQUNwRDtBQUVELGtCQUFjLE1BQU07O0FBQ2xCLHNCQUFVLFVBQVYsbUJBQWlCO0FBQUEsSUFBSyxDQUN2QjtBQUVELGdCQUFZLFlBQVk7O0FBQ3RCLFVBQUksU0FBaUIsT0FBTyxhQUFhLE1BQU0sT0FBTztBQUN0RCxVQUFJLFdBQVcsWUFBWTtBQUNaLHFCQUFBO0FBQ0gsd0JBQUEsVUFBQSxtQkFBTyxTQUFTO0FBQzFCLHNCQUFjLE1BQU0sU0FBUztBQUM3QixzQkFBYyxNQUFNLEtBQUssR0FBRyxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFBQSxNQUNyRDtBQUVBLHNCQUFVLFVBQVYsbUJBQWlCO0FBQ2IsVUFBQSxnQkFBZ0IscUJBQXFCLE1BQU07QUFDN0MsY0FBTSxTQUFRLDJCQUFnQixpQkFBaUIsTUFBTSxVQUF2QyxtQkFBOEMsY0FBOUMsbUJBQXlEO0FBQ3ZFLFlBQUksT0FBTztBQUNULG9CQUFVLEtBQUs7QUFBQSxRQUNqQjtBQUFBLE1BQ0Y7QUFBQSxJQUFBLENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

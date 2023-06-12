import { Q as QSpinnerDots, a as QInfiniteScroll } from "./QInfiniteScroll.48d13d07.js";
import { Q as QPage } from "./QPage.bd93809f.js";
import { _ as _export_sfc, P as defineComponent, r as ref, Q as QueueController, aB as ApiConfigProvider, bB as AlbumApi, o as onMounted, aw as onDeactivated, ax as onActivated, U as openBlock, V as createBlock, W as withCtx, d as createVNode, Y as createBaseVNode, ac as createElementBlock, ar as renderList, F as Fragment, a1 as unref } from "./index.f02977bc.js";
import { A as AlbumCard } from "./AlbumCard.54d0235e.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.fbd784ff.js";
import "./QImg.8b00b657.js";
const _hoisted_1 = { class: "q-gutter-md row" };
const _hoisted_2 = { class: "row justify-center q-my-md" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HomePageInfScroll",
  setup(__props) {
    const infScroll = ref();
    const queueController = QueueController.getInstance();
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
    const albumApi = new AlbumApi(apiConfig);
    const displayAlbums = ref([]);
    const { setColors } = usePageContainerBgStyleStore();
    function onLoad(index, done) {
      albumApi.getAlbums({ start: index * 50, limit: 50 }).then((resp) => {
        displayAlbums.value.push(...resp);
        done();
      });
    }
    onMounted(async () => {
      displayAlbums.value.push(...await albumApi.getAlbums({ limit: 50 }));
    });
    onDeactivated(() => {
      var _a;
      (_a = infScroll.value) == null ? void 0 : _a.stop();
    });
    onActivated(() => {
      var _a, _b, _c;
      (_a = infScroll.value) == null ? void 0 : _a.resume();
      if (queueController.currentlyPlaying !== void 0) {
        const color = (_c = (_b = queueController.currentlyPlaying.album) == null ? void 0 : _b.thumbnail) == null ? void 0 : _c.colors;
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
var HomePageInfScroll = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "HomePageInfScroll.vue"]]);
export { HomePageInfScroll as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VJbmZTY3JvbGwuN2ZiZDQzMWUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYWdlcy9Ib21lUGFnZUluZlNjcm9sbC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8cS1wYWdlIHBhZGRpbmc+XG4gICAgPHEtaW5maW5pdGUtc2Nyb2xsIGNsYXNzPVwicm93IGl0ZW1zLXN0YXJ0IHEtZ3V0dGVyLW1kIGZsZXhcIiBAbG9hZD1cIm9uTG9hZFwiIDpvZmZzZXQ9XCIzMDBcIiByZWY9XCJpbmZTY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1tZCByb3dcIj5cbiAgICAgICAgPEFsYnVtQ2FyZCB2LWZvcj1cIihhbGJ1bSwgaW5kZXgpIGluIGRpc3BsYXlBbGJ1bXNcIiA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgIDphbGJ1bS1pbmZvPVwiYWxidW1cIj5cbiAgICAgICAgPC9BbGJ1bUNhcmQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIHEtbXktbWRcIj5cbiAgICAgICAgICA8cS1zcGlubmVyLWRvdHMgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLWluZmluaXRlLXNjcm9sbD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtBbGJ1bUFwaSwgQWxidW1SZWFkRHRvfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQge29uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbk1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCBBbGJ1bUNhcmQgZnJvbSAnY29tcG9uZW50cy9BbGJ1bUNhcmQudnVlJztcbmltcG9ydCB7UUluZmluaXRlU2Nyb2xsfSBmcm9tICdxdWFzYXInO1xuXG5pbXBvcnQge3VzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmV9IGZyb20gJ3N0b3Jlcy9wYWdlQ29udGFpbmVyQmcnO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSAnc3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyJztcbmltcG9ydCB7UXVldWVDb250cm9sbGVyfSBmcm9tICdzcmMvdXRpbHMvUXVldWVDb250cm9sbGVyJztcblxuY29uc3QgaW5mU2Nyb2xsID0gcmVmPFFJbmZpbml0ZVNjcm9sbD4oKTtcblxuY29uc3QgcXVldWVDb250cm9sbGVyID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbmNvbnN0IGFwaUNvbmZpZyA9IEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKCk7XG5jb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShhcGlDb25maWcpO1xuXG5jb25zdCBkaXNwbGF5QWxidW1zID0gcmVmPEFsYnVtUmVhZER0b1tdPihbXSlcblxuY29uc3QgeyBzZXRDb2xvcnMgfSA9IHVzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUoKTtcblxuZnVuY3Rpb24gb25Mb2FkKGluZGV4OiBudW1iZXIsIGRvbmU6IChzdG9wPzogYm9vbGVhbikgPT4gdm9pZCkge1xuICBhbGJ1bUFwaS5nZXRBbGJ1bXMoe3N0YXJ0OiBpbmRleCAqIDUwLCBsaW1pdDogNTB9KS50aGVuKChyZXNwKSA9PiB7XG4gICAgZGlzcGxheUFsYnVtcy52YWx1ZS5wdXNoKC4uLnJlc3ApO1xuICAgIGRvbmUoKTtcbiAgfSk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGRpc3BsYXlBbGJ1bXMudmFsdWUucHVzaCguLi5hd2FpdCBhbGJ1bUFwaS5nZXRBbGJ1bXMoe2xpbWl0OiA1MH0pKVxufSlcblxuLy8gb25Vbm1vdW50ZWQoKCkgPT4ge1xuLy9cbi8vIH0pXG5cbm9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICBpbmZTY3JvbGwudmFsdWU/LnN0b3AoKTtcbn0pXG5cbm9uQWN0aXZhdGVkKCgpID0+IHtcbiAgaW5mU2Nyb2xsLnZhbHVlPy5yZXN1bWUoKTtcbiAgaWYgKHF1ZXVlQ29udHJvbGxlci5jdXJyZW50bHlQbGF5aW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb2xvciA9IHF1ZXVlQ29udHJvbGxlci5jdXJyZW50bHlQbGF5aW5nLmFsYnVtPy50aHVtYm5haWw/LmNvbG9ycztcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHNldENvbG9ycyhjb2xvcik7XG4gICAgfVxuICB9XG59KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUE0QkEsVUFBTSxZQUFZO0FBRVosVUFBQSxrQkFBa0IsZ0JBQWdCO0FBRXhDLFVBQU0sWUFBWSxrQkFBa0IsWUFBWSxFQUFFLGFBQWE7QUFDekQsVUFBQSxXQUFXLElBQUksU0FBUyxTQUFTO0FBRWpDLFVBQUEsZ0JBQWdCLElBQW9CLENBQUEsQ0FBRTtBQUV0QyxVQUFBLEVBQUUsY0FBYztBQUViLGFBQUEsT0FBTyxPQUFlLE1BQWdDO0FBQ3BELGVBQUEsVUFBVSxFQUFDLE9BQU8sUUFBUSxJQUFJLE9BQU8sR0FBRyxDQUFBLEVBQUUsS0FBSyxDQUFDLFNBQVM7QUFDbEQsc0JBQUEsTUFBTSxLQUFLLEdBQUcsSUFBSTtBQUMzQjtNQUFBLENBQ047QUFBQSxJQUNIO0FBRUEsY0FBVSxZQUFZO0FBQ04sb0JBQUEsTUFBTSxLQUFLLEdBQUcsTUFBTSxTQUFTLFVBQVUsRUFBQyxPQUFPLEdBQUcsQ0FBQSxDQUFDO0FBQUEsSUFBQSxDQUNsRTtBQU1ELGtCQUFjLE1BQU07O0FBQ2xCLHNCQUFVLFVBQVYsbUJBQWlCO0FBQUEsSUFBSyxDQUN2QjtBQUVELGdCQUFZLE1BQU07O0FBQ2hCLHNCQUFVLFVBQVYsbUJBQWlCO0FBQ2IsVUFBQSxnQkFBZ0IscUJBQXFCLFFBQVc7QUFDbEQsY0FBTSxTQUFRLDJCQUFnQixpQkFBaUIsVUFBakMsbUJBQXdDLGNBQXhDLG1CQUFtRDtBQUNqRSxZQUFJLE9BQU87QUFDVCxvQkFBVSxLQUFLO0FBQUEsUUFDakI7QUFBQSxNQUNGO0FBQUEsSUFBQSxDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

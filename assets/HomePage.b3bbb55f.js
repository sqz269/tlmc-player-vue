import { h, k as createComponent, ax as useSpinnerProps, ay as useSpinner, a3 as _export_sfc, a4 as defineComponent, r as ref, w as watch, aM as useRouter, U as withDirectives, az as Ripple, a7 as openBlock, a8 as createBlock, a9 as withCtx, ag as createCommentVNode, d as createVNode, ab as createBaseVNode, ac as toDisplayString, aa as QCardSection, af as QCard, c as computed, aF as onActivated, aE as onDeactivated, p as onBeforeUnmount, o as onMounted, u as hUniqueSlot, l as hSlot, t as listenOpts, b8 as getScrollHeight, n as nextTick, $ as getVerticalScrollPosition, b9 as setVerticalScrollPosition, _ as getScrollTarget, ba as height, bb as debounce, g as getCurrentInstance, a5 as QueueController, aI as ApiConfigProvider, bc as AlbumApi, a as onUnmounted, an as createElementBlock, aC as renderList, F as Fragment, a6 as unref } from "./index.bfbdb738.js";
import { Q as QPage } from "./QPage.0eafd9a5.js";
import { Q as QImg } from "./QImg.f4e44421.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.5acf1885.js";
const svg = [
  h("circle", {
    cx: "15",
    cy: "15",
    r: "15"
  }, [
    h("animate", {
      attributeName: "r",
      from: "15",
      to: "15",
      begin: "0s",
      dur: "0.8s",
      values: "15;9;15",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    h("animate", {
      attributeName: "fill-opacity",
      from: "1",
      to: "1",
      begin: "0s",
      dur: "0.8s",
      values: "1;.5;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ]),
  h("circle", {
    cx: "60",
    cy: "15",
    r: "9",
    "fill-opacity": ".3"
  }, [
    h("animate", {
      attributeName: "r",
      from: "9",
      to: "9",
      begin: "0s",
      dur: "0.8s",
      values: "9;15;9",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    h("animate", {
      attributeName: "fill-opacity",
      from: ".5",
      to: ".5",
      begin: "0s",
      dur: "0.8s",
      values: ".5;1;.5",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ]),
  h("circle", {
    cx: "105",
    cy: "15",
    r: "15"
  }, [
    h("animate", {
      attributeName: "r",
      from: "15",
      to: "15",
      begin: "0s",
      dur: "0.8s",
      values: "15;9;15",
      calcMode: "linear",
      repeatCount: "indefinite"
    }),
    h("animate", {
      attributeName: "fill-opacity",
      from: "1",
      to: "1",
      begin: "0s",
      dur: "0.8s",
      values: "1;.5;1",
      calcMode: "linear",
      repeatCount: "indefinite"
    })
  ])
];
var QSpinnerDots = createComponent({
  name: "QSpinnerDots",
  props: useSpinnerProps,
  setup(props) {
    const { cSize, classes } = useSpinner(props);
    return () => h("svg", {
      class: classes.value,
      fill: "currentColor",
      width: cSize.value,
      height: cSize.value,
      viewBox: "0 0 120 30",
      xmlns: "http://www.w3.org/2000/svg"
    }, svg);
  }
});
var AlbumCard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-focus-helper cursor-pointer relative-position" }, null, -1);
const _hoisted_2$1 = { class: "text-subtitle1" };
const _hoisted_3 = { class: "text-subtitle2" };
const __default__$1 = {
  name: "AlbumCard"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    albumInfo: null
  },
  setup(__props) {
    const props = __props;
    const hovering = ref(false);
    watch(hovering, () => {
      console.log("hovering changed");
    });
    const router = useRouter();
    function navToAlbum() {
      const albumId = props.albumInfo.id;
      router.push({ name: "album", params: { albumId } });
    }
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(QCard, {
        class: "album-card cursor-pointer",
        style: { "width": "245px" },
        onClick: navToAlbum
      }, {
        default: withCtx(() => {
          var _a, _b;
          return [
            _hoisted_1$1,
            ((_b = (_a = props.albumInfo.thumbnail) == null ? void 0 : _a.medium) == null ? void 0 : _b.url) ? (openBlock(), createBlock(QImg, {
              key: 0,
              src: props.albumInfo.thumbnail.medium.url,
              style: { "width": "210px", "height": "210px" },
              class: "q-mx-md q-mt-md",
              "img-class": "rounded-borders",
              ratio: "1"
            }, null, 8, ["src"])) : createCommentVNode("", true),
            createVNode(QCardSection, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_2$1, toDisplayString(props.albumInfo.albumName._default), 1),
                createBaseVNode("div", _hoisted_3, toDisplayString(props.albumInfo.albumArtist[0].name), 1)
              ]),
              _: 1
            })
          ];
        }),
        _: 1
      })), [
        [Ripple]
      ]);
    };
  }
});
var AlbumCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "AlbumCard.vue"]]);
const { passive } = listenOpts;
var QInfiniteScroll = createComponent({
  name: "QInfiniteScroll",
  props: {
    offset: {
      type: Number,
      default: 500
    },
    debounce: {
      type: [String, Number],
      default: 100
    },
    scrollTarget: {
      default: void 0
    },
    initialIndex: Number,
    disable: Boolean,
    reverse: Boolean
  },
  emits: ["load"],
  setup(props, { slots, emit }) {
    const isFetching = ref(false);
    const isWorking = ref(true);
    const rootRef = ref(null);
    let index = props.initialIndex || 0;
    let localScrollTarget, poll;
    const classes = computed(
      () => "q-infinite-scroll__loading" + (isFetching.value === true ? "" : " invisible")
    );
    function immediatePoll() {
      if (props.disable === true || isFetching.value === true || isWorking.value === false) {
        return;
      }
      const scrollHeight = getScrollHeight(localScrollTarget), scrollPosition = getVerticalScrollPosition(localScrollTarget), containerHeight = height(localScrollTarget);
      if (props.reverse === false) {
        if (Math.round(scrollPosition + containerHeight + props.offset) >= Math.round(scrollHeight)) {
          trigger();
        }
      } else if (Math.round(scrollPosition) <= props.offset) {
        trigger();
      }
    }
    function trigger() {
      if (props.disable === true || isFetching.value === true || isWorking.value === false) {
        return;
      }
      index++;
      isFetching.value = true;
      const heightBefore = getScrollHeight(localScrollTarget);
      emit("load", index, (isDone) => {
        if (isWorking.value === true) {
          isFetching.value = false;
          nextTick(() => {
            if (props.reverse === true) {
              const heightAfter = getScrollHeight(localScrollTarget), scrollPosition = getVerticalScrollPosition(localScrollTarget), heightDifference = heightAfter - heightBefore;
              setVerticalScrollPosition(localScrollTarget, scrollPosition + heightDifference);
            }
            if (isDone === true) {
              stop();
            } else if (rootRef.value) {
              rootRef.value.closest("body") && poll();
            }
          });
        }
      });
    }
    function reset() {
      index = 0;
    }
    function resume() {
      if (isWorking.value === false) {
        isWorking.value = true;
        localScrollTarget.addEventListener("scroll", poll, passive);
      }
      immediatePoll();
    }
    function stop() {
      if (isWorking.value === true) {
        isWorking.value = false;
        isFetching.value = false;
        localScrollTarget.removeEventListener("scroll", poll, passive);
        if (poll !== void 0 && poll.cancel !== void 0) {
          poll.cancel();
        }
      }
    }
    function updateScrollTarget() {
      if (localScrollTarget && isWorking.value === true) {
        localScrollTarget.removeEventListener("scroll", poll, passive);
      }
      localScrollTarget = getScrollTarget(rootRef.value, props.scrollTarget);
      if (isWorking.value === true) {
        localScrollTarget.addEventListener("scroll", poll, passive);
        if (props.reverse === true) {
          const scrollHeight = getScrollHeight(localScrollTarget), containerHeight = height(localScrollTarget);
          setVerticalScrollPosition(localScrollTarget, scrollHeight - containerHeight);
        }
        immediatePoll();
      }
    }
    function setIndex(newIndex) {
      index = newIndex;
    }
    function setDebounce(val) {
      val = parseInt(val, 10);
      const oldPoll = poll;
      poll = val <= 0 ? immediatePoll : debounce(immediatePoll, isNaN(val) === true ? 100 : val);
      if (localScrollTarget && isWorking.value === true) {
        if (oldPoll !== void 0) {
          localScrollTarget.removeEventListener("scroll", oldPoll, passive);
        }
        localScrollTarget.addEventListener("scroll", poll, passive);
      }
    }
    watch(() => props.disable, (val) => {
      if (val === true) {
        stop();
      } else {
        resume();
      }
    });
    watch(() => props.reverse, (val) => {
      if (isFetching.value === false && isWorking.value === true) {
        immediatePoll();
      }
    });
    watch(() => props.scrollTarget, updateScrollTarget);
    watch(() => props.debounce, setDebounce);
    let scrollPos = false;
    onActivated(() => {
      if (scrollPos !== false && localScrollTarget) {
        setVerticalScrollPosition(localScrollTarget, scrollPos);
      }
    });
    onDeactivated(() => {
      scrollPos = localScrollTarget ? getVerticalScrollPosition(localScrollTarget) : false;
    });
    onBeforeUnmount(() => {
      if (isWorking.value === true) {
        localScrollTarget.removeEventListener("scroll", poll, passive);
      }
    });
    onMounted(() => {
      setDebounce(props.debounce);
      updateScrollTarget();
    });
    const vm = getCurrentInstance();
    Object.assign(vm.proxy, {
      poll: () => {
        poll !== void 0 && poll();
      },
      trigger,
      stop,
      reset,
      resume,
      setIndex
    });
    return () => {
      const child = hUniqueSlot(slots.default, []);
      if (props.disable !== true && isWorking.value === true) {
        child[props.reverse === false ? "push" : "unshift"](
          h("div", { class: classes.value }, hSlot(slots.loading))
        );
      }
      return h("div", {
        class: "q-infinite-scroll",
        ref: rootRef
      }, child);
    };
  }
});
const _hoisted_1 = { class: "q-gutter-md row" };
const _hoisted_2 = { class: "row justify-center q-my-md" };
const __default__ = defineComponent({});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "HomePage",
  setup(__props) {
    const infScroll = ref();
    const queueController = QueueController.getInstance();
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
    const albumApi = new AlbumApi(apiConfig);
    const displayAlbums = ref([]);
    const { setColors } = usePageContainerBgStyleStore();
    function onLoad(index, done) {
      console.log(index);
      albumApi.getAlbums({ start: index * 50, limit: 50 }).then((resp) => {
        console.log("Fetched " + resp.length + " items");
        displayAlbums.value.push(...resp);
        done();
      });
    }
    onMounted(async () => {
      console.log(`Fetch (Exist ${displayAlbums.value.length})`);
      displayAlbums.value.push(...await albumApi.getAlbums({ limit: 50 }));
    });
    onUnmounted(() => {
      console.log("Unmounted");
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
var HomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "HomePage.vue"]]);
export { HomePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuYjNiYmI1NWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci9RU3Bpbm5lckRvdHMuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bUNhcmQudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pbmZpbml0ZS1zY3JvbGwvUUluZmluaXRlU2Nyb2xsLmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0hvbWVQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlU3Bpbm5lciwgeyB1c2VTcGlubmVyUHJvcHMgfSBmcm9tICcuL3VzZS1zcGlubmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3ZnID0gW1xuICBoKCdjaXJjbGUnLCB7XG4gICAgY3g6ICcxNScsXG4gICAgY3k6ICcxNScsXG4gICAgcjogJzE1J1xuICB9LCBbXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIGZyb206ICcxNScsXG4gICAgICB0bzogJzE1JyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxNTs5OzE1JyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KSxcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgICBmcm9tOiAnMScsXG4gICAgICB0bzogJzEnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzE7LjU7MScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSlcbiAgXSksXG4gIGgoJ2NpcmNsZScsIHtcbiAgICBjeDogJzYwJyxcbiAgICBjeTogJzE1JyxcbiAgICByOiAnOScsXG4gICAgJ2ZpbGwtb3BhY2l0eSc6ICcuMydcbiAgfSwgW1xuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICBmcm9tOiAnOScsXG4gICAgICB0bzogJzknLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzk7MTU7OScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSksXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdmaWxsLW9wYWNpdHknLFxuICAgICAgZnJvbTogJy41JyxcbiAgICAgIHRvOiAnLjUnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJy41OzE7LjUnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pXG4gIF0pLFxuICBoKCdjaXJjbGUnLCB7XG4gICAgY3g6ICcxMDUnLFxuICAgIGN5OiAnMTUnLFxuICAgIHI6ICcxNSdcbiAgfSwgW1xuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICBmcm9tOiAnMTUnLFxuICAgICAgdG86ICcxNScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnMTU7OTsxNScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSksXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdmaWxsLW9wYWNpdHknLFxuICAgICAgZnJvbTogJzEnLFxuICAgICAgdG86ICcxJyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxOy41OzEnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pXG4gIF0pXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3Bpbm5lckRvdHMnLFxuXG4gIHByb3BzOiB1c2VTcGlubmVyUHJvcHMsXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgd2lkdGg6IGNTaXplLnZhbHVlLFxuICAgICAgaGVpZ2h0OiBjU2l6ZS52YWx1ZSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMTIwIDMwJyxcbiAgICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgfSwgc3ZnKVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8IS0tVE9ETzogZG9uJ3QgaGFyZGNvZGUgY2FyZCB3aWR0aCBvciBzdW0sIGlkay0tPlxuICA8cS1jYXJkIHYtcmlwcGxlIGNsYXNzPVwiYWxidW0tY2FyZCBjdXJzb3ItcG9pbnRlclwiIHN0eWxlPVwid2lkdGg6IDI0NXB4O1wiICBAY2xpY2s9XCJuYXZUb0FsYnVtXCI+XG4gICAgPGRpdiBjbGFzcz1cInEtZm9jdXMtaGVscGVyIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlLXBvc2l0aW9uXCI+XG4gICAgPC9kaXY+XG4gICAgPHEtaW1nXG4gICAgICB2LWlmPVwicHJvcHMuYWxidW1JbmZvLnRodW1ibmFpbD8ubWVkaXVtPy51cmxcIlxuICAgICAgOnNyYz1wcm9wcy5hbGJ1bUluZm8udGh1bWJuYWlsLm1lZGl1bS51cmxcbiAgICAgIHN0eWxlPVwid2lkdGg6IDIxMHB4OyBoZWlnaHQ6IDIxMHB4O1wiXG4gICAgICBjbGFzcz1cInEtbXgtbWQgcS1tdC1tZFwiXG4gICAgICBpbWctY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIlxuICAgICAgcmF0aW89XCIxXCI+XG4gICAgPC9xLWltZz5cblxuPCEtLSAgICA8ZGl2IGNsYXNzPVwicm93IHEtcGEtbWQganVzdGlmeS1zdGFydFwiPi0tPlxuICAgIDxxLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgcHJvcHMuYWxidW1JbmZvLmFsYnVtTmFtZS5fZGVmYXVsdCB9fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUyXCI+e3sgcHJvcHMuYWxidW1JbmZvLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX08L2Rpdj5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuPCEtLSAgICA8L2Rpdj4tLT5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQWxidW1DYXJkJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge2RlZmluZVByb3BzLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvIH0gZnJvbSBcImFwcC9iYWNrZW5kLXNlcnZpY2UtYXBpXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAndnVlLXJvdXRlcic7XG5cbmNvbnN0IGhvdmVyaW5nID0gcmVmKGZhbHNlKTtcblxud2F0Y2goaG92ZXJpbmcsICgpID0+IHtcbiAgY29uc29sZS5sb2coJ2hvdmVyaW5nIGNoYW5nZWQnKTtcbn0pXG5cbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5mdW5jdGlvbiBuYXZUb0FsYnVtKCkge1xuICBjb25zdCBhbGJ1bUlkOiBzdHJpbmcgPSA8c3RyaW5nPnByb3BzLmFsYnVtSW5mby5pZDtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAnYWxidW0nLCBwYXJhbXM6IHsgYWxidW1JZDogYWxidW1JZCB9IH0pXG59XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuICBhbGJ1bUluZm86IEFsYnVtUmVhZER0b1xufT4oKTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4uYWxidW0tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MCkgIWltcG9ydGFudDtcbn1cblxuLmFsYnVtLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgzMywzMywzMywuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDE5MywgMTkzLCAwLjQpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIGNvbG9yLCAyMDBtcyBsaW5lYXIgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS5qcydcbmltcG9ydCB7IGhlaWdodCB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCwgZ2V0U2Nyb2xsSGVpZ2h0LCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cyB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHsgcGFzc2l2ZSB9ID0gbGlzdGVuT3B0c1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUluZmluaXRlU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIG9mZnNldDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNTAwXG4gICAgfSxcblxuICAgIGRlYm91bmNlOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAxMDBcbiAgICB9LFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9LFxuXG4gICAgaW5pdGlhbEluZGV4OiBOdW1iZXIsXG5cbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuICAgIHJldmVyc2U6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAnbG9hZCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IGlzRmV0Y2hpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaXNXb3JraW5nID0gcmVmKHRydWUpXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgbGV0IGluZGV4ID0gcHJvcHMuaW5pdGlhbEluZGV4IHx8IDBcbiAgICBsZXQgbG9jYWxTY3JvbGxUYXJnZXQsIHBvbGxcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtaW5maW5pdGUtc2Nyb2xsX19sb2FkaW5nJ1xuICAgICAgKyAoaXNGZXRjaGluZy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBpbnZpc2libGUnKVxuICAgIClcblxuICAgIGZ1bmN0aW9uIGltbWVkaWF0ZVBvbGwgKCkge1xuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgaXNGZXRjaGluZy52YWx1ZSA9PT0gdHJ1ZSB8fCBpc1dvcmtpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICBzY3JvbGxIZWlnaHQgPSBnZXRTY3JvbGxIZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICBjb250YWluZXJIZWlnaHQgPSBoZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgIGlmIChwcm9wcy5yZXZlcnNlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoTWF0aC5yb3VuZChzY3JvbGxQb3NpdGlvbiArIGNvbnRhaW5lckhlaWdodCArIHByb3BzLm9mZnNldCkgPj0gTWF0aC5yb3VuZChzY3JvbGxIZWlnaHQpKSB7XG4gICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24pIDw9IHByb3BzLm9mZnNldCkge1xuICAgICAgICB0cmlnZ2VyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyICgpIHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgfHwgaXNXb3JraW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgICAgaXNGZXRjaGluZy52YWx1ZSA9IHRydWVcblxuICAgICAgY29uc3QgaGVpZ2h0QmVmb3JlID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBlbWl0KCdsb2FkJywgaW5kZXgsIGlzRG9uZSA9PiB7XG4gICAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBpc0ZldGNoaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIGhlaWdodEFmdGVyID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICAgICAgICAgIGhlaWdodERpZmZlcmVuY2UgPSBoZWlnaHRBZnRlciAtIGhlaWdodEJlZm9yZVxuXG4gICAgICAgICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uICsgaGVpZ2h0RGlmZmVyZW5jZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzRG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzdG9wKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgICAgICAgcm9vdFJlZi52YWx1ZS5jbG9zZXN0KCdib2R5JykgJiYgcG9sbCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCAoKSB7XG4gICAgICBpbmRleCA9IDBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUgKCkge1xuICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNXb3JraW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuXG4gICAgICBpbW1lZGlhdGVQb2xsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wICgpIHtcbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaXNXb3JraW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgaXNGZXRjaGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICAgIGlmIChwb2xsICE9PSB2b2lkIDAgJiYgcG9sbC5jYW5jZWwgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHBvbGwuY2FuY2VsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgJiYgaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG5cbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KHJvb3RSZWYudmFsdWUsIHByb3BzLnNjcm9sbFRhcmdldClcblxuICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuXG4gICAgICAgIGlmIChwcm9wcy5yZXZlcnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldCksXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQgPSBoZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0LCBzY3JvbGxIZWlnaHQgLSBjb250YWluZXJIZWlnaHQpXG4gICAgICAgIH1cblxuICAgICAgICBpbW1lZGlhdGVQb2xsKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbmRleCAobmV3SW5kZXgpIHtcbiAgICAgIGluZGV4ID0gbmV3SW5kZXhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREZWJvdW5jZSAodmFsKSB7XG4gICAgICB2YWwgPSBwYXJzZUludCh2YWwsIDEwKVxuXG4gICAgICBjb25zdCBvbGRQb2xsID0gcG9sbFxuXG4gICAgICBwb2xsID0gdmFsIDw9IDBcbiAgICAgICAgPyBpbW1lZGlhdGVQb2xsXG4gICAgICAgIDogZGVib3VuY2UoaW1tZWRpYXRlUG9sbCwgaXNOYU4odmFsKSA9PT0gdHJ1ZSA/IDEwMCA6IHZhbClcblxuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAob2xkUG9sbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb2xkUG9sbCwgcGFzc2l2ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZGlzYWJsZSwgdmFsID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHsgc3RvcCgpIH1cbiAgICAgIGVsc2UgeyByZXN1bWUoKSB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVyc2UsIHZhbCA9PiB7XG4gICAgICBpZiAoaXNGZXRjaGluZy52YWx1ZSA9PT0gZmFsc2UgJiYgaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGltbWVkaWF0ZVBvbGwoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsIHVwZGF0ZVNjcm9sbFRhcmdldClcbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5kZWJvdW5jZSwgc2V0RGVib3VuY2UpXG5cbiAgICBsZXQgc2Nyb2xsUG9zID0gZmFsc2VcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGlmIChzY3JvbGxQb3MgIT09IGZhbHNlICYmIGxvY2FsU2Nyb2xsVGFyZ2V0KSB7XG4gICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQsIHNjcm9sbFBvcylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBzY3JvbGxQb3MgPSBsb2NhbFNjcm9sbFRhcmdldFxuICAgICAgICA/IGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpXG4gICAgICAgIDogZmFsc2VcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHNldERlYm91bmNlKHByb3BzLmRlYm91bmNlKVxuXG4gICAgICB1cGRhdGVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgT2JqZWN0LmFzc2lnbih2bS5wcm94eSwge1xuICAgICAgcG9sbDogKCkgPT4geyBwb2xsICE9PSB2b2lkIDAgJiYgcG9sbCgpIH0sXG4gICAgICB0cmlnZ2VyLCBzdG9wLCByZXNldCwgcmVzdW1lLCBzZXRJbmRleFxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcblxuICAgICAgaWYgKHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkWyBwcm9wcy5yZXZlcnNlID09PSBmYWxzZSA/ICdwdXNoJyA6ICd1bnNoaWZ0JyBdKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMubG9hZGluZykpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWluZmluaXRlLXNjcm9sbCcsXG4gICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIHBhZGRpbmc+XG4gICAgPHEtaW5maW5pdGUtc2Nyb2xsIGNsYXNzPVwicm93IGl0ZW1zLXN0YXJ0IHEtZ3V0dGVyLW1kIGZsZXhcIiBAbG9hZD1cIm9uTG9hZFwiIDpvZmZzZXQ9XCIzMDBcIiByZWY9XCJpbmZTY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1tZCByb3dcIj5cbiAgICAgICAgPEFsYnVtQ2FyZCB2LWZvcj1cIihhbGJ1bSwgaW5kZXgpIGluIGRpc3BsYXlBbGJ1bXNcIiA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgIDphbGJ1bS1pbmZvPVwiYWxidW1cIj5cbiAgICAgICAgPC9BbGJ1bUNhcmQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIHEtbXktbWRcIj5cbiAgICAgICAgICA8cS1zcGlubmVyLWRvdHMgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLWluZmluaXRlLXNjcm9sbD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHtcbiAgLy8gbmFtZTogJ1BhZ2VOYW1lJ1xufSlcbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtBbGJ1bUFwaSwgQWxidW1SZWFkRHRvfSBmcm9tIFwiYXBwL2JhY2tlbmQtc2VydmljZS1hcGlcIjtcbmltcG9ydCB7b25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uTW91bnRlZCwgb25Vbm1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCBBbGJ1bUNhcmQgZnJvbSAnY29tcG9uZW50cy9BbGJ1bUNhcmQudnVlJztcbmltcG9ydCB7UUluZmluaXRlU2Nyb2xsfSBmcm9tICdxdWFzYXInO1xuXG5pbXBvcnQge3VzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmV9IGZyb20gXCJzdG9yZXMvcGFnZUNvbnRhaW5lckJnXCI7XG5pbXBvcnQge0FwaUNvbmZpZ1Byb3ZpZGVyfSBmcm9tIFwic3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyXCI7XG5pbXBvcnQge1F1ZXVlQ29udHJvbGxlcn0gZnJvbSBcInNyYy91dGlscy9RdWV1ZUNvbnRyb2xsZXJcIjtcblxuY29uc3QgaW5mU2Nyb2xsID0gcmVmPFFJbmZpbml0ZVNjcm9sbD4oKTtcblxuY29uc3QgcXVldWVDb250cm9sbGVyID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbmNvbnN0IGFwaUNvbmZpZyA9IEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKCk7XG5jb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShhcGlDb25maWcpO1xuXG5jb25zdCBkaXNwbGF5QWxidW1zID0gcmVmPEFsYnVtUmVhZER0b1tdPihbXSlcblxuY29uc3QgeyBzZXRDb2xvcnMgfSA9IHVzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUoKTtcblxuZnVuY3Rpb24gb25Mb2FkKGluZGV4OiBudW1iZXIsIGRvbmU6IChzdG9wPzogYm9vbGVhbikgPT4gdm9pZCkge1xuICBjb25zb2xlLmxvZyhpbmRleClcbiAgYWxidW1BcGkuZ2V0QWxidW1zKHtzdGFydDogaW5kZXggKiA1MCwgbGltaXQ6IDUwfSkudGhlbigocmVzcCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaGVkICcgKyByZXNwLmxlbmd0aCArICcgaXRlbXMnKVxuICAgIGRpc3BsYXlBbGJ1bXMudmFsdWUucHVzaCguLi5yZXNwKTtcbiAgICBkb25lKCk7XG4gIH0pO1xufVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRmV0Y2ggKEV4aXN0ICR7ZGlzcGxheUFsYnVtcy52YWx1ZS5sZW5ndGh9KWApO1xuICBkaXNwbGF5QWxidW1zLnZhbHVlLnB1c2goLi4uYXdhaXQgYWxidW1BcGkuZ2V0QWxidW1zKHtsaW1pdDogNTB9KSlcbn0pXG5cbm9uVW5tb3VudGVkKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ1VubW91bnRlZCcpXG59KVxuXG5vbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgaW5mU2Nyb2xsLnZhbHVlPy5zdG9wKCk7XG59KVxuXG5vbkFjdGl2YXRlZCgoKSA9PiB7XG4gIGluZlNjcm9sbC52YWx1ZT8ucmVzdW1lKCk7XG4gIGlmIChxdWV1ZUNvbnRyb2xsZXIuY3VycmVudGx5UGxheWluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgY29sb3IgPSBxdWV1ZUNvbnRyb2xsZXIuY3VycmVudGx5UGxheWluZy5hbGJ1bT8udGh1bWJuYWlsPy5jb2xvcnM7XG4gICAgaWYgKGNvbG9yKSB7XG4gICAgICBzZXRDb2xvcnMoY29sb3IpO1xuICAgIH1cbiAgfVxufSlcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbIl9fZGVmYXVsdF9fIl0sIm1hcHBpbmdzIjoiOzs7O0FBTUEsTUFBTSxNQUFNO0FBQUEsRUFDVixFQUFFLFVBQVU7QUFBQSxJQUNWLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLEdBQUc7QUFBQSxFQUNQLEdBQUs7QUFBQSxJQUNELEVBQUUsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLElBQ25CLENBQUs7QUFBQSxJQUNELEVBQUUsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLElBQ25CLENBQUs7QUFBQSxFQUNMLENBQUc7QUFBQSxFQUNELEVBQUUsVUFBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osR0FBRztBQUFBLElBQ0gsZ0JBQWdCO0FBQUEsRUFDcEIsR0FBSztBQUFBLElBQ0Qs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

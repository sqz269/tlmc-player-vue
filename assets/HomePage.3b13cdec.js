import { h, j as createComponent, au as useSpinnerProps, av as useSpinner, a2 as _export_sfc, a3 as defineComponent, r as ref, w as watch, aA as useRouter, S as withDirectives, aw as Ripple, a5 as openBlock, a6 as createBlock, a7 as withCtx, ad as createCommentVNode, d as createVNode, a9 as createBaseVNode, aa as toDisplayString, a8 as QCardSection, ac as QCard, c as computed, aY as onActivated, aZ as onDeactivated, q as onBeforeUnmount, o as onMounted, x as hUniqueSlot, k as hSlot, v as listenOpts, a_ as getScrollHeight, p as nextTick, _ as getVerticalScrollPosition, a$ as setVerticalScrollPosition, Z as getScrollTarget, b0 as height, b1 as debounce, g as getCurrentInstance, b2 as AlbumApi, b3 as apiConfig, a as onUnmounted, al as createElementBlock, az as renderList, F as Fragment, a4 as unref } from "./index.e1084ec4.js";
import { Q as QPage } from "./QPage.f56883a0.js";
import { Q as QImg } from "./QImg.276e5a6d.js";
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
    const albumApi = new AlbumApi(apiConfig);
    const displayAlbums = ref([]);
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
      var _a;
      (_a = infScroll.value) == null ? void 0 : _a.resume();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuM2IxM2NkZWMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci9RU3Bpbm5lckRvdHMuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bUNhcmQudnVlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pbmZpbml0ZS1zY3JvbGwvUUluZmluaXRlU2Nyb2xsLmpzIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0hvbWVQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlU3Bpbm5lciwgeyB1c2VTcGlubmVyUHJvcHMgfSBmcm9tICcuL3VzZS1zcGlubmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3ZnID0gW1xuICBoKCdjaXJjbGUnLCB7XG4gICAgY3g6ICcxNScsXG4gICAgY3k6ICcxNScsXG4gICAgcjogJzE1J1xuICB9LCBbXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIGZyb206ICcxNScsXG4gICAgICB0bzogJzE1JyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxNTs5OzE1JyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KSxcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgICBmcm9tOiAnMScsXG4gICAgICB0bzogJzEnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzE7LjU7MScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSlcbiAgXSksXG4gIGgoJ2NpcmNsZScsIHtcbiAgICBjeDogJzYwJyxcbiAgICBjeTogJzE1JyxcbiAgICByOiAnOScsXG4gICAgJ2ZpbGwtb3BhY2l0eSc6ICcuMydcbiAgfSwgW1xuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICBmcm9tOiAnOScsXG4gICAgICB0bzogJzknLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzk7MTU7OScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSksXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdmaWxsLW9wYWNpdHknLFxuICAgICAgZnJvbTogJy41JyxcbiAgICAgIHRvOiAnLjUnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJy41OzE7LjUnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pXG4gIF0pLFxuICBoKCdjaXJjbGUnLCB7XG4gICAgY3g6ICcxMDUnLFxuICAgIGN5OiAnMTUnLFxuICAgIHI6ICcxNSdcbiAgfSwgW1xuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICBmcm9tOiAnMTUnLFxuICAgICAgdG86ICcxNScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnMTU7OTsxNScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSksXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdmaWxsLW9wYWNpdHknLFxuICAgICAgZnJvbTogJzEnLFxuICAgICAgdG86ICcxJyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxOy41OzEnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pXG4gIF0pXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3Bpbm5lckRvdHMnLFxuXG4gIHByb3BzOiB1c2VTcGlubmVyUHJvcHMsXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgd2lkdGg6IGNTaXplLnZhbHVlLFxuICAgICAgaGVpZ2h0OiBjU2l6ZS52YWx1ZSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMTIwIDMwJyxcbiAgICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgfSwgc3ZnKVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8IS0tVE9ETzogZG9uJ3QgaGFyZGNvZGUgY2FyZCB3aWR0aCBvciBzdW0sIGlkay0tPlxuICA8cS1jYXJkIHYtcmlwcGxlIGNsYXNzPVwiYWxidW0tY2FyZCBjdXJzb3ItcG9pbnRlclwiIHN0eWxlPVwid2lkdGg6IDI0NXB4O1wiICBAY2xpY2s9XCJuYXZUb0FsYnVtXCI+XG4gICAgPGRpdiBjbGFzcz1cInEtZm9jdXMtaGVscGVyIGN1cnNvci1wb2ludGVyIHJlbGF0aXZlLXBvc2l0aW9uXCI+XG4gICAgPC9kaXY+XG4gICAgPHEtaW1nXG4gICAgICB2LWlmPVwicHJvcHMuYWxidW1JbmZvLnRodW1ibmFpbD8ubWVkaXVtPy51cmxcIlxuICAgICAgOnNyYz1wcm9wcy5hbGJ1bUluZm8udGh1bWJuYWlsLm1lZGl1bS51cmxcbiAgICAgIHN0eWxlPVwid2lkdGg6IDIxMHB4OyBoZWlnaHQ6IDIxMHB4O1wiXG4gICAgICBjbGFzcz1cInEtbXgtbWQgcS1tdC1tZFwiXG4gICAgICBpbWctY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIlxuICAgICAgcmF0aW89XCIxXCI+XG4gICAgPC9xLWltZz5cblxuPCEtLSAgICA8ZGl2IGNsYXNzPVwicm93IHEtcGEtbWQganVzdGlmeS1zdGFydFwiPi0tPlxuICAgIDxxLWNhcmQtc2VjdGlvbj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCI+e3sgcHJvcHMuYWxidW1JbmZvLmFsYnVtTmFtZS5fZGVmYXVsdCB9fTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUyXCI+e3sgcHJvcHMuYWxidW1JbmZvLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfX08L2Rpdj5cbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxuPCEtLSAgICA8L2Rpdj4tLT5cbiAgPC9xLWNhcmQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQWxidW1DYXJkJ1xufVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge2RlZmluZVByb3BzLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHsgQWxidW1SZWFkRHRvIH0gZnJvbSAnYXBwL211c2ljLWRhdGEtc2VydmljZS1hcGknO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCBob3ZlcmluZyA9IHJlZihmYWxzZSk7XG5cbndhdGNoKGhvdmVyaW5nLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdob3ZlcmluZyBjaGFuZ2VkJyk7XG59KVxuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuZnVuY3Rpb24gbmF2VG9BbGJ1bSgpIHtcbiAgY29uc3QgYWxidW1JZDogc3RyaW5nID0gPHN0cmluZz5wcm9wcy5hbGJ1bUluZm8uaWQ7XG4gIHJvdXRlci5wdXNoKHsgbmFtZTogJ2FsYnVtJywgcGFyYW1zOiB7IGFsYnVtSWQ6IGFsYnVtSWQgfSB9KVxufVxuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcbiAgYWxidW1JbmZvOiBBbGJ1bVJlYWREdG9cbn0+KCk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmFsYnVtLWNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiYSgzMywzMywzMywuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuMik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgbGluZWFyO1xufVxuPC9zdHlsZT5cbiIsImltcG9ydCB7IGgsIHJlZiwgY29tcHV0ZWQsIHdhdGNoLCBvbk1vdW50ZWQsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbkJlZm9yZVVubW91bnQsIG5leHRUaWNrLCBnZXRDdXJyZW50SW5zdGFuY2UgfSBmcm9tICd2dWUnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlLmpzJ1xuaW1wb3J0IHsgaGVpZ2h0IH0gZnJvbSAnLi4vLi4vdXRpbHMvZG9tLmpzJ1xuaW1wb3J0IHsgZ2V0U2Nyb2xsVGFyZ2V0LCBnZXRTY3JvbGxIZWlnaHQsIGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24sIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24gfSBmcm9tICcuLi8uLi91dGlscy9zY3JvbGwuanMnXG5pbXBvcnQgeyBsaXN0ZW5PcHRzIH0gZnJvbSAnLi4vLi4vdXRpbHMvZXZlbnQuanMnXG5pbXBvcnQgeyBoU2xvdCwgaFVuaXF1ZVNsb3QgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL3JlbmRlci5qcydcblxuY29uc3QgeyBwYXNzaXZlIH0gPSBsaXN0ZW5PcHRzXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRSW5maW5pdGVTY3JvbGwnLFxuXG4gIHByb3BzOiB7XG4gICAgb2Zmc2V0OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICBkZWZhdWx0OiA1MDBcbiAgICB9LFxuXG4gICAgZGVib3VuY2U6IHtcbiAgICAgIHR5cGU6IFsgU3RyaW5nLCBOdW1iZXIgXSxcbiAgICAgIGRlZmF1bHQ6IDEwMFxuICAgIH0sXG5cbiAgICBzY3JvbGxUYXJnZXQ6IHtcbiAgICAgIGRlZmF1bHQ6IHZvaWQgMFxuICAgIH0sXG5cbiAgICBpbml0aWFsSW5kZXg6IE51bWJlcixcblxuICAgIGRpc2FibGU6IEJvb2xlYW4sXG4gICAgcmV2ZXJzZTogQm9vbGVhblxuICB9LFxuXG4gIGVtaXRzOiBbICdsb2FkJyBdLFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cywgZW1pdCB9KSB7XG4gICAgY29uc3QgaXNGZXRjaGluZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBpc1dvcmtpbmcgPSByZWYodHJ1ZSlcbiAgICBjb25zdCByb290UmVmID0gcmVmKG51bGwpXG5cbiAgICBsZXQgaW5kZXggPSBwcm9wcy5pbml0aWFsSW5kZXggfHwgMFxuICAgIGxldCBsb2NhbFNjcm9sbFRhcmdldCwgcG9sbFxuXG4gICAgY29uc3QgY2xhc3NlcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1pbmZpbml0ZS1zY3JvbGxfX2xvYWRpbmcnXG4gICAgICArIChpc0ZldGNoaW5nLnZhbHVlID09PSB0cnVlID8gJycgOiAnIGludmlzaWJsZScpXG4gICAgKVxuXG4gICAgZnVuY3Rpb24gaW1tZWRpYXRlUG9sbCAoKSB7XG4gICAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBpc0ZldGNoaW5nLnZhbHVlID09PSB0cnVlIHx8IGlzV29ya2luZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0XG4gICAgICAgIHNjcm9sbEhlaWdodCA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldCksXG4gICAgICAgIHNjcm9sbFBvc2l0aW9uID0gZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCksXG4gICAgICAgIGNvbnRhaW5lckhlaWdodCA9IGhlaWdodChsb2NhbFNjcm9sbFRhcmdldClcblxuICAgICAgaWYgKHByb3BzLnJldmVyc2UgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChNYXRoLnJvdW5kKHNjcm9sbFBvc2l0aW9uICsgY29udGFpbmVySGVpZ2h0ICsgcHJvcHMub2Zmc2V0KSA+PSBNYXRoLnJvdW5kKHNjcm9sbEhlaWdodCkpIHtcbiAgICAgICAgICB0cmlnZ2VyKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoTWF0aC5yb3VuZChzY3JvbGxQb3NpdGlvbikgPD0gcHJvcHMub2Zmc2V0KSB7XG4gICAgICAgIHRyaWdnZXIoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXIgKCkge1xuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgaXNGZXRjaGluZy52YWx1ZSA9PT0gdHJ1ZSB8fCBpc1dvcmtpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpbmRleCsrXG4gICAgICBpc0ZldGNoaW5nLnZhbHVlID0gdHJ1ZVxuXG4gICAgICBjb25zdCBoZWlnaHRCZWZvcmUgPSBnZXRTY3JvbGxIZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgIGVtaXQoJ2xvYWQnLCBpbmRleCwgaXNEb25lID0+IHtcbiAgICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGlzRmV0Y2hpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICAgIG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5yZXZlcnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgICAgaGVpZ2h0QWZ0ZXIgPSBnZXRTY3JvbGxIZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uID0gZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCksXG4gICAgICAgICAgICAgICAgaGVpZ2h0RGlmZmVyZW5jZSA9IGhlaWdodEFmdGVyIC0gaGVpZ2h0QmVmb3JlXG5cbiAgICAgICAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCwgc2Nyb2xsUG9zaXRpb24gKyBoZWlnaHREaWZmZXJlbmNlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNEb25lID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHN0b3AoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocm9vdFJlZi52YWx1ZSkge1xuICAgICAgICAgICAgICByb290UmVmLnZhbHVlLmNsb3Nlc3QoJ2JvZHknKSAmJiBwb2xsKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0ICgpIHtcbiAgICAgIGluZGV4ID0gMFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3VtZSAoKSB7XG4gICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBpc1dvcmtpbmcudmFsdWUgPSB0cnVlXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG5cbiAgICAgIGltbWVkaWF0ZVBvbGwoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0b3AgKCkge1xuICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpc1dvcmtpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICBpc0ZldGNoaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcbiAgICAgICAgaWYgKHBvbGwgIT09IHZvaWQgMCAmJiBwb2xsLmNhbmNlbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgcG9sbC5jYW5jZWwoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsVGFyZ2V0ICgpIHtcbiAgICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldCAmJiBpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcbiAgICAgIH1cblxuICAgICAgbG9jYWxTY3JvbGxUYXJnZXQgPSBnZXRTY3JvbGxUYXJnZXQocm9vdFJlZi52YWx1ZSwgcHJvcHMuc2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG5cbiAgICAgICAgaWYgKHByb3BzLnJldmVyc2UgPT09IHRydWUpIHtcbiAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgICAgIGNvbnRhaW5lckhlaWdodCA9IGhlaWdodChsb2NhbFNjcm9sbFRhcmdldClcblxuICAgICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQsIHNjcm9sbEhlaWdodCAtIGNvbnRhaW5lckhlaWdodClcbiAgICAgICAgfVxuXG4gICAgICAgIGltbWVkaWF0ZVBvbGwoKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEluZGV4IChuZXdJbmRleCkge1xuICAgICAgaW5kZXggPSBuZXdJbmRleFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldERlYm91bmNlICh2YWwpIHtcbiAgICAgIHZhbCA9IHBhcnNlSW50KHZhbCwgMTApXG5cbiAgICAgIGNvbnN0IG9sZFBvbGwgPSBwb2xsXG5cbiAgICAgIHBvbGwgPSB2YWwgPD0gMFxuICAgICAgICA/IGltbWVkaWF0ZVBvbGxcbiAgICAgICAgOiBkZWJvdW5jZShpbW1lZGlhdGVQb2xsLCBpc05hTih2YWwpID09PSB0cnVlID8gMTAwIDogdmFsKVxuXG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgJiYgaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlmIChvbGRQb2xsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvbGRQb2xsLCBwYXNzaXZlKVxuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5kaXNhYmxlLCB2YWwgPT4ge1xuICAgICAgaWYgKHZhbCA9PT0gdHJ1ZSkgeyBzdG9wKCkgfVxuICAgICAgZWxzZSB7IHJlc3VtZSgpIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMucmV2ZXJzZSwgdmFsID0+IHtcbiAgICAgIGlmIChpc0ZldGNoaW5nLnZhbHVlID09PSBmYWxzZSAmJiBpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaW1tZWRpYXRlUG9sbCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNjcm9sbFRhcmdldCwgdXBkYXRlU2Nyb2xsVGFyZ2V0KVxuICAgIHdhdGNoKCgpID0+IHByb3BzLmRlYm91bmNlLCBzZXREZWJvdW5jZSlcblxuICAgIGxldCBzY3JvbGxQb3MgPSBmYWxzZVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFBvcyAhPT0gZmFsc2UgJiYgbG9jYWxTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCwgc2Nyb2xsUG9zKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNjcm9sbFBvcyA9IGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgICAgID8gZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldClcbiAgICAgICAgOiBmYWxzZVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgc2V0RGVib3VuY2UocHJvcHMuZGVib3VuY2UpXG5cbiAgICAgIHVwZGF0ZVNjcm9sbFRhcmdldCgpXG4gICAgfSlcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIGNvbnN0IHZtID0gZ2V0Q3VycmVudEluc3RhbmNlKClcbiAgICBPYmplY3QuYXNzaWduKHZtLnByb3h5LCB7XG4gICAgICBwb2xsOiAoKSA9PiB7IHBvbGwgIT09IHZvaWQgMCAmJiBwb2xsKCkgfSxcbiAgICAgIHRyaWdnZXIsIHN0b3AsIHJlc2V0LCByZXN1bWUsIHNldEluZGV4XG4gICAgfSlcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZCA9IGhVbmlxdWVTbG90KHNsb3RzLmRlZmF1bHQsIFtdKVxuXG4gICAgICBpZiAocHJvcHMuZGlzYWJsZSAhPT0gdHJ1ZSAmJiBpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGRbIHByb3BzLnJldmVyc2UgPT09IGZhbHNlID8gJ3B1c2gnIDogJ3Vuc2hpZnQnIF0oXG4gICAgICAgICAgaCgnZGl2JywgeyBjbGFzczogY2xhc3Nlcy52YWx1ZSB9LCBoU2xvdChzbG90cy5sb2FkaW5nKSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaCgnZGl2Jywge1xuICAgICAgICBjbGFzczogJ3EtaW5maW5pdGUtc2Nyb2xsJyxcbiAgICAgICAgcmVmOiByb290UmVmXG4gICAgICB9LCBjaGlsZClcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2UgcGFkZGluZz5cbiAgICA8cS1pbmZpbml0ZS1zY3JvbGwgY2xhc3M9XCJyb3cgaXRlbXMtc3RhcnQgcS1ndXR0ZXItbWQgZmxleFwiIEBsb2FkPVwib25Mb2FkXCIgOm9mZnNldD1cIjMwMFwiIHJlZj1cImluZlNjcm9sbFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInEtZ3V0dGVyLW1kIHJvd1wiPlxuICAgICAgICA8QWxidW1DYXJkIHYtZm9yPVwiKGFsYnVtLCBpbmRleCkgaW4gZGlzcGxheUFsYnVtc1wiIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgOmFsYnVtLWluZm89XCJhbGJ1bVwiPlxuICAgICAgICA8L0FsYnVtQ2FyZD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dGVtcGxhdGUgdi1zbG90OmxvYWRpbmc+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXIgcS1teS1tZFwiPlxuICAgICAgICAgIDxxLXNwaW5uZXItZG90cyBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwiNDBweFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3EtaW5maW5pdGUtc2Nyb2xsPlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICAvLyBuYW1lOiAnUGFnZU5hbWUnXG59KVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge0FsYnVtQXBpLCBBbGJ1bVJlYWREdG99IGZyb20gJ2FwcC9tdXNpYy1kYXRhLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7YXBpQ29uZmlnfSBmcm9tICdib290L2JhY2tlbmQtYXBpJztcbmltcG9ydCB7b25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uTW91bnRlZCwgb25Vbm1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCBBbGJ1bUNhcmQgZnJvbSAnY29tcG9uZW50cy9BbGJ1bUNhcmQudnVlJztcbmltcG9ydCB7UUluZmluaXRlU2Nyb2xsfSBmcm9tICdxdWFzYXInO1xuXG5jb25zdCBpbmZTY3JvbGwgPSByZWY8UUluZmluaXRlU2Nyb2xsPigpO1xuXG5jb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShhcGlDb25maWcpO1xuXG5jb25zdCBkaXNwbGF5QWxidW1zID0gcmVmPEFsYnVtUmVhZER0b1tdPihbXSlcblxuZnVuY3Rpb24gb25Mb2FkKGluZGV4OiBudW1iZXIsIGRvbmU6IChzdG9wPzogYm9vbGVhbikgPT4gdm9pZCkge1xuICBjb25zb2xlLmxvZyhpbmRleClcbiAgYWxidW1BcGkuZ2V0QWxidW1zKHtzdGFydDogaW5kZXggKiA1MCwgbGltaXQ6IDUwfSkudGhlbigocmVzcCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaGVkICcgKyByZXNwLmxlbmd0aCArICcgaXRlbXMnKVxuICAgIGRpc3BsYXlBbGJ1bXMudmFsdWUucHVzaCguLi5yZXNwKTtcbiAgICBkb25lKCk7XG4gIH0pO1xufVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhgRmV0Y2ggKEV4aXN0ICR7ZGlzcGxheUFsYnVtcy52YWx1ZS5sZW5ndGh9KWApO1xuICBkaXNwbGF5QWxidW1zLnZhbHVlLnB1c2goLi4uYXdhaXQgYWxidW1BcGkuZ2V0QWxidW1zKHtsaW1pdDogNTB9KSlcbn0pXG5cbm9uVW5tb3VudGVkKCgpID0+IHtcbiAgY29uc29sZS5sb2coJ1VubW91bnRlZCcpXG59KVxuXG5vbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgaW5mU2Nyb2xsLnZhbHVlPy5zdG9wKCk7XG59KVxuXG5vbkFjdGl2YXRlZCgoKSA9PiB7XG4gIGluZlNjcm9sbC52YWx1ZT8ucmVzdW1lKCk7XG59KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX19kZWZhdWx0X18iXSwibWFwcGluZ3MiOiI7OztBQU1BLE1BQU0sTUFBTTtBQUFBLEVBQ1YsRUFBRSxVQUFVO0FBQUEsSUFDVixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixHQUFHO0FBQUEsRUFDUCxHQUFLO0FBQUEsSUFDRCxFQUFFLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxJQUNuQixDQUFLO0FBQUEsSUFDRCxFQUFFLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxN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

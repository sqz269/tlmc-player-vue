import { h, k as createComponent, ax as useSpinnerProps, ay as useSpinner, r as ref, c as computed, w as watch, aH as onActivated, aG as onDeactivated, n as onBeforeUnmount, o as onMounted, v as hUniqueSlot, l as hSlot, t as listenOpts, by as getScrollHeight, q as nextTick, $ as getVerticalScrollPosition, bz as setVerticalScrollPosition, _ as getScrollTarget, bA as height, bs as debounce, g as getCurrentInstance, a3 as _export_sfc, a4 as defineComponent, a5 as QueueController, aL as ApiConfigProvider, bi as AlbumApi, a7 as openBlock, a8 as createBlock, a9 as withCtx, d as createVNode, ab as createBaseVNode, an as createElementBlock, aC as renderList, F as Fragment, a6 as unref } from "./index.211189c8.js";
import { Q as QPage } from "./QPage.87c152ea.js";
import { A as AlbumCard } from "./AlbumCard.dcf5b024.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.45c4cc03.js";
import "./QImg.033a0657.js";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VJbmZTY3JvbGwuZDZlNzgxYjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci9RU3Bpbm5lckRvdHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2luZmluaXRlLXNjcm9sbC9RSW5maW5pdGVTY3JvbGwuanMiLCIuLi8uLi8uLi9zcmMvcGFnZXMvSG9tZVBhZ2VJbmZTY3JvbGwudnVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VTcGlubmVyLCB7IHVzZVNwaW5uZXJQcm9wcyB9IGZyb20gJy4vdXNlLXNwaW5uZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBzdmcgPSBbXG4gIGgoJ2NpcmNsZScsIHtcbiAgICBjeDogJzE1JyxcbiAgICBjeTogJzE1JyxcbiAgICByOiAnMTUnXG4gIH0sIFtcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ3InLFxuICAgICAgZnJvbTogJzE1JyxcbiAgICAgIHRvOiAnMTUnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzE1Ozk7MTUnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pLFxuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAnZmlsbC1vcGFjaXR5JyxcbiAgICAgIGZyb206ICcxJyxcbiAgICAgIHRvOiAnMScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnMTsuNTsxJyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KVxuICBdKSxcbiAgaCgnY2lyY2xlJywge1xuICAgIGN4OiAnNjAnLFxuICAgIGN5OiAnMTUnLFxuICAgIHI6ICc5JyxcbiAgICAnZmlsbC1vcGFjaXR5JzogJy4zJ1xuICB9LCBbXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIGZyb206ICc5JyxcbiAgICAgIHRvOiAnOScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnOTsxNTs5JyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KSxcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgICBmcm9tOiAnLjUnLFxuICAgICAgdG86ICcuNScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnLjU7MTsuNScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSlcbiAgXSksXG4gIGgoJ2NpcmNsZScsIHtcbiAgICBjeDogJzEwNScsXG4gICAgY3k6ICcxNScsXG4gICAgcjogJzE1J1xuICB9LCBbXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIGZyb206ICcxNScsXG4gICAgICB0bzogJzE1JyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxNTs5OzE1JyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KSxcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgICBmcm9tOiAnMScsXG4gICAgICB0bzogJzEnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzE7LjU7MScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSlcbiAgXSlcbl1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGlubmVyRG90cycsXG5cbiAgcHJvcHM6IHVzZVNwaW5uZXJQcm9wcyxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBjb25zdCB7IGNTaXplLCBjbGFzc2VzIH0gPSB1c2VTcGlubmVyKHByb3BzKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ3N2ZycsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICB3aWR0aDogY1NpemUudmFsdWUsXG4gICAgICBoZWlnaHQ6IGNTaXplLnZhbHVlLFxuICAgICAgdmlld0JveDogJzAgMCAxMjAgMzAnLFxuICAgICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICB9LCBzdmcpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS5qcydcbmltcG9ydCB7IGhlaWdodCB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCwgZ2V0U2Nyb2xsSGVpZ2h0LCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cyB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHsgcGFzc2l2ZSB9ID0gbGlzdGVuT3B0c1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUluZmluaXRlU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIG9mZnNldDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNTAwXG4gICAgfSxcblxuICAgIGRlYm91bmNlOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAxMDBcbiAgICB9LFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9LFxuXG4gICAgaW5pdGlhbEluZGV4OiBOdW1iZXIsXG5cbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuICAgIHJldmVyc2U6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAnbG9hZCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IGlzRmV0Y2hpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaXNXb3JraW5nID0gcmVmKHRydWUpXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuXG4gICAgbGV0IGluZGV4ID0gcHJvcHMuaW5pdGlhbEluZGV4IHx8IDBcbiAgICBsZXQgbG9jYWxTY3JvbGxUYXJnZXQsIHBvbGxcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtaW5maW5pdGUtc2Nyb2xsX19sb2FkaW5nJ1xuICAgICAgKyAoaXNGZXRjaGluZy52YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogJyBpbnZpc2libGUnKVxuICAgIClcblxuICAgIGZ1bmN0aW9uIGltbWVkaWF0ZVBvbGwgKCkge1xuICAgICAgaWYgKHByb3BzLmRpc2FibGUgPT09IHRydWUgfHwgaXNGZXRjaGluZy52YWx1ZSA9PT0gdHJ1ZSB8fCBpc1dvcmtpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdFxuICAgICAgICBzY3JvbGxIZWlnaHQgPSBnZXRTY3JvbGxIZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICBjb250YWluZXJIZWlnaHQgPSBoZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgIGlmIChwcm9wcy5yZXZlcnNlID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoTWF0aC5yb3VuZChzY3JvbGxQb3NpdGlvbiArIGNvbnRhaW5lckhlaWdodCArIHByb3BzLm9mZnNldCkgPj0gTWF0aC5yb3VuZChzY3JvbGxIZWlnaHQpKSB7XG4gICAgICAgICAgdHJpZ2dlcigpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24pIDw9IHByb3BzLm9mZnNldCkge1xuICAgICAgICB0cmlnZ2VyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyICgpIHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgfHwgaXNXb3JraW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaW5kZXgrK1xuICAgICAgaXNGZXRjaGluZy52YWx1ZSA9IHRydWVcblxuICAgICAgY29uc3QgaGVpZ2h0QmVmb3JlID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBlbWl0KCdsb2FkJywgaW5kZXgsIGlzRG9uZSA9PiB7XG4gICAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICBpc0ZldGNoaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgICBuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIGhlaWdodEFmdGVyID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgICAgICAgICBzY3JvbGxQb3NpdGlvbiA9IGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICAgICAgICAgIGhlaWdodERpZmZlcmVuY2UgPSBoZWlnaHRBZnRlciAtIGhlaWdodEJlZm9yZVxuXG4gICAgICAgICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uICsgaGVpZ2h0RGlmZmVyZW5jZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzRG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICBzdG9wKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJvb3RSZWYudmFsdWUpIHtcbiAgICAgICAgICAgICAgcm9vdFJlZi52YWx1ZS5jbG9zZXN0KCdib2R5JykgJiYgcG9sbCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldCAoKSB7XG4gICAgICBpbmRleCA9IDBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUgKCkge1xuICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaXNXb3JraW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuXG4gICAgICBpbW1lZGlhdGVQb2xsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wICgpIHtcbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaXNXb3JraW5nLnZhbHVlID0gZmFsc2VcbiAgICAgICAgaXNGZXRjaGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICAgIGlmIChwb2xsICE9PSB2b2lkIDAgJiYgcG9sbC5jYW5jZWwgIT09IHZvaWQgMCkge1xuICAgICAgICAgIHBvbGwuY2FuY2VsKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFRhcmdldCAoKSB7XG4gICAgICBpZiAobG9jYWxTY3JvbGxUYXJnZXQgJiYgaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG5cbiAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0ID0gZ2V0U2Nyb2xsVGFyZ2V0KHJvb3RSZWYudmFsdWUsIHByb3BzLnNjcm9sbFRhcmdldClcblxuICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuXG4gICAgICAgIGlmIChwcm9wcy5yZXZlcnNlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldCksXG4gICAgICAgICAgICBjb250YWluZXJIZWlnaHQgPSBoZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpXG5cbiAgICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0LCBzY3JvbGxIZWlnaHQgLSBjb250YWluZXJIZWlnaHQpXG4gICAgICAgIH1cblxuICAgICAgICBpbW1lZGlhdGVQb2xsKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbmRleCAobmV3SW5kZXgpIHtcbiAgICAgIGluZGV4ID0gbmV3SW5kZXhcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREZWJvdW5jZSAodmFsKSB7XG4gICAgICB2YWwgPSBwYXJzZUludCh2YWwsIDEwKVxuXG4gICAgICBjb25zdCBvbGRQb2xsID0gcG9sbFxuXG4gICAgICBwb2xsID0gdmFsIDw9IDBcbiAgICAgICAgPyBpbW1lZGlhdGVQb2xsXG4gICAgICAgIDogZGVib3VuY2UoaW1tZWRpYXRlUG9sbCwgaXNOYU4odmFsKSA9PT0gdHJ1ZSA/IDEwMCA6IHZhbClcblxuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAob2xkUG9sbCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb2xkUG9sbCwgcGFzc2l2ZSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG4gICAgfVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZGlzYWJsZSwgdmFsID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHsgc3RvcCgpIH1cbiAgICAgIGVsc2UgeyByZXN1bWUoKSB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVyc2UsIHZhbCA9PiB7XG4gICAgICBpZiAoaXNGZXRjaGluZy52YWx1ZSA9PT0gZmFsc2UgJiYgaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGltbWVkaWF0ZVBvbGwoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5zY3JvbGxUYXJnZXQsIHVwZGF0ZVNjcm9sbFRhcmdldClcbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5kZWJvdW5jZSwgc2V0RGVib3VuY2UpXG5cbiAgICBsZXQgc2Nyb2xsUG9zID0gZmFsc2VcblxuICAgIG9uQWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIGlmIChzY3JvbGxQb3MgIT09IGZhbHNlICYmIGxvY2FsU2Nyb2xsVGFyZ2V0KSB7XG4gICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQsIHNjcm9sbFBvcylcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25EZWFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBzY3JvbGxQb3MgPSBsb2NhbFNjcm9sbFRhcmdldFxuICAgICAgICA/IGdldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24obG9jYWxTY3JvbGxUYXJnZXQpXG4gICAgICAgIDogZmFsc2VcbiAgICB9KVxuXG4gICAgb25CZWZvcmVVbm1vdW50KCgpID0+IHtcbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25Nb3VudGVkKCgpID0+IHtcbiAgICAgIHNldERlYm91bmNlKHByb3BzLmRlYm91bmNlKVxuXG4gICAgICB1cGRhdGVTY3JvbGxUYXJnZXQoKVxuICAgIH0pXG5cbiAgICAvLyBleHBvc2UgcHVibGljIG1ldGhvZHNcbiAgICBjb25zdCB2bSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG4gICAgT2JqZWN0LmFzc2lnbih2bS5wcm94eSwge1xuICAgICAgcG9sbDogKCkgPT4geyBwb2xsICE9PSB2b2lkIDAgJiYgcG9sbCgpIH0sXG4gICAgICB0cmlnZ2VyLCBzdG9wLCByZXNldCwgcmVzdW1lLCBzZXRJbmRleFxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY2hpbGQgPSBoVW5pcXVlU2xvdChzbG90cy5kZWZhdWx0LCBbXSlcblxuICAgICAgaWYgKHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGNoaWxkWyBwcm9wcy5yZXZlcnNlID09PSBmYWxzZSA/ICdwdXNoJyA6ICd1bnNoaWZ0JyBdKFxuICAgICAgICAgIGgoJ2RpdicsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMubG9hZGluZykpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWluZmluaXRlLXNjcm9sbCcsXG4gICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIiwiPHRlbXBsYXRlPlxuICA8cS1wYWdlIHBhZGRpbmc+XG4gICAgPHEtaW5maW5pdGUtc2Nyb2xsIGNsYXNzPVwicm93IGl0ZW1zLXN0YXJ0IHEtZ3V0dGVyLW1kIGZsZXhcIiBAbG9hZD1cIm9uTG9hZFwiIDpvZmZzZXQ9XCIzMDBcIiByZWY9XCJpbmZTY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1tZCByb3dcIj5cbiAgICAgICAgPEFsYnVtQ2FyZCB2LWZvcj1cIihhbGJ1bSwgaW5kZXgpIGluIGRpc3BsYXlBbGJ1bXNcIiA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgIDphbGJ1bS1pbmZvPVwiYWxidW1cIj5cbiAgICAgICAgPC9BbGJ1bUNhcmQ+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY2VudGVyIHEtbXktbWRcIj5cbiAgICAgICAgICA8cS1zcGlubmVyLWRvdHMgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cIjQwcHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9xLWluZmluaXRlLXNjcm9sbD5cbiAgPC9xLXBhZ2U+XG48L3RlbXBsYXRlPlxuXG48IS0tPHNjcmlwdCBsYW5nPVwidHNcIj4tLT5cbjwhLS1pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnLS0+XG48IS0tZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHstLT5cbjwhLS0gIC8vIG5hbWU6ICdQYWdlTmFtZSctLT5cbjwhLS19KS0tPlxuPCEtLTwvc2NyaXB0Pi0tPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtBbGJ1bUFwaSwgQWxidW1SZWFkRHRvfSBmcm9tICdhcHAvYmFja2VuZC1zZXJ2aWNlLWFwaSc7XG5pbXBvcnQge29uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbk1vdW50ZWQsIHJlZn0gZnJvbSAndnVlJztcbmltcG9ydCBBbGJ1bUNhcmQgZnJvbSAnY29tcG9uZW50cy9BbGJ1bUNhcmQudnVlJztcbmltcG9ydCB7UUluZmluaXRlU2Nyb2xsfSBmcm9tICdxdWFzYXInO1xuXG5pbXBvcnQge3VzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmV9IGZyb20gJ3N0b3Jlcy9wYWdlQ29udGFpbmVyQmcnO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSAnc3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyJztcbmltcG9ydCB7UXVldWVDb250cm9sbGVyfSBmcm9tICdzcmMvdXRpbHMvUXVldWVDb250cm9sbGVyJztcblxuY29uc3QgaW5mU2Nyb2xsID0gcmVmPFFJbmZpbml0ZVNjcm9sbD4oKTtcblxuY29uc3QgcXVldWVDb250cm9sbGVyID0gUXVldWVDb250cm9sbGVyLmdldEluc3RhbmNlKCk7XG5cbmNvbnN0IGFwaUNvbmZpZyA9IEFwaUNvbmZpZ1Byb3ZpZGVyLmdldEluc3RhbmNlKCkuZ2V0QXBpQ29uZmlnKCk7XG5jb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShhcGlDb25maWcpO1xuXG5jb25zdCBkaXNwbGF5QWxidW1zID0gcmVmPEFsYnVtUmVhZER0b1tdPihbXSlcblxuY29uc3QgeyBzZXRDb2xvcnMgfSA9IHVzZVBhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUoKTtcblxuZnVuY3Rpb24gb25Mb2FkKGluZGV4OiBudW1iZXIsIGRvbmU6IChzdG9wPzogYm9vbGVhbikgPT4gdm9pZCkge1xuICBhbGJ1bUFwaS5nZXRBbGJ1bXMoe3N0YXJ0OiBpbmRleCAqIDUwLCBsaW1pdDogNTB9KS50aGVuKChyZXNwKSA9PiB7XG4gICAgZGlzcGxheUFsYnVtcy52YWx1ZS5wdXNoKC4uLnJlc3ApO1xuICAgIGRvbmUoKTtcbiAgfSk7XG59XG5cbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XG4gIGRpc3BsYXlBbGJ1bXMudmFsdWUucHVzaCguLi5hd2FpdCBhbGJ1bUFwaS5nZXRBbGJ1bXMoe2xpbWl0OiA1MH0pKVxufSlcblxuLy8gb25Vbm1vdW50ZWQoKCkgPT4ge1xuLy9cbi8vIH0pXG5cbm9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICBpbmZTY3JvbGwudmFsdWU/LnN0b3AoKTtcbn0pXG5cbm9uQWN0aXZhdGVkKCgpID0+IHtcbiAgaW5mU2Nyb2xsLnZhbHVlPy5yZXN1bWUoKTtcbiAgaWYgKHF1ZXVlQ29udHJvbGxlci5jdXJyZW50bHlQbGF5aW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb2xvciA9IHF1ZXVlQ29udHJvbGxlci5jdXJyZW50bHlQbGF5aW5nLmFsYnVtPy50aHVtYm5haWw/LmNvbG9ycztcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIHNldENvbG9ycyhjb2xvcik7XG4gICAgfVxuICB9XG59KVxuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNQSxNQUFNLE1BQU07QUFBQSxFQUNWLEVBQUUsVUFBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osR0FBRztBQUFBLEVBQ1AsR0FBSztBQUFBLElBQ0QsRUFBRSxXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsSUFDbkIsQ0FBSztBQUFBLElBQ0QsRUFBRSxXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsSUFDbkIsQ0FBSztBQUFBLEVBQ0wsQ0FBRztBQUFBLEVBQ0QsRUFBRSxVQUFVO0FBQUEsSUFDVixJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsSUFDSixHQUFHO0FBQUEsSUFDSCxnQkFBZ0I7QUFBQSxFQUNwQixHQUFLO0FBQUEsSUFDRCxFQUFFLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLE1BQU07QUFBQSxNQUNOLElBQUk7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxJQUNuQixD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

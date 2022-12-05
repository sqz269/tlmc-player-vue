import { h, j as createComponent, au as useSpinnerProps, av as useSpinner, r as ref, c as computed, w as watch, aY as onActivated, aZ as onDeactivated, q as onBeforeUnmount, o as onMounted, x as hUniqueSlot, k as hSlot, v as listenOpts, a_ as getScrollHeight, p as nextTick, _ as getVerticalScrollPosition, a$ as setVerticalScrollPosition, Z as getScrollTarget, b0 as height, b1 as debounce, g as getCurrentInstance, a2 as _export_sfc, a3 as defineComponent, aA as useRouter, S as withDirectives, aw as Ripple, a5 as openBlock, a6 as createBlock, a7 as withCtx, a4 as unref, ad as createCommentVNode, d as createVNode, a9 as createBaseVNode, aa as toDisplayString, a8 as QCardSection, ac as QCard, b2 as AlbumApi, b3 as apiConfig, a as onUnmounted, al as createElementBlock, az as renderList, F as Fragment } from "./index.8aadcb4c.js";
import { Q as QPage } from "./QPage.2c100235.js";
import { Q as QImg } from "./QImg.f6fff003.js";
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
        default: withCtx(() => [
          _hoisted_1$1,
          unref(props).albumInfo.albumImage ? (openBlock(), createBlock(QImg, {
            key: 0,
            src: unref(props).albumInfo.albumImage.url,
            style: { "width": "210px", "height": "210px" },
            class: "q-mx-md q-mt-md",
            "img-class": "rounded-borders",
            ratio: "1"
          }, null, 8, ["src"])) : createCommentVNode("", true),
          createVNode(QCardSection, null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2$1, toDisplayString(unref(props).albumInfo.albumName._default), 1),
              createBaseVNode("div", _hoisted_3, toDisplayString(unref(props).albumInfo.albumArtist[0].name), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      })), [
        [Ripple]
      ]);
    };
  }
});
var AlbumCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "AlbumCard.vue"]]);
const _hoisted_1 = { class: "q-gutter-md row" };
const _hoisted_2 = { class: "row justify-center q-my-md" };
const __default__ = defineComponent({});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "HomePage",
  setup(__props) {
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
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, { padding: "" }, {
        default: withCtx(() => [
          createVNode(QInfiniteScroll, {
            class: "row items-start q-gutter-md flex",
            onLoad,
            offset: 300
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
          })
        ]),
        _: 1
      });
    };
  }
});
var HomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "HomePage.vue"]]);
export { HomePage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2UuYmFmZDM4ODEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9xdWFzYXIvc3JjL2NvbXBvbmVudHMvc3Bpbm5lci9RU3Bpbm5lckRvdHMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL2luZmluaXRlLXNjcm9sbC9RSW5maW5pdGVTY3JvbGwuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bUNhcmQudnVlIiwiLi4vLi4vLi4vc3JjL3BhZ2VzL0hvbWVQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgdXNlU3Bpbm5lciwgeyB1c2VTcGlubmVyUHJvcHMgfSBmcm9tICcuL3VzZS1zcGlubmVyLmpzJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcblxuY29uc3Qgc3ZnID0gW1xuICBoKCdjaXJjbGUnLCB7XG4gICAgY3g6ICcxNScsXG4gICAgY3k6ICcxNScsXG4gICAgcjogJzE1J1xuICB9LCBbXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIGZyb206ICcxNScsXG4gICAgICB0bzogJzE1JyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxNTs5OzE1JyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KSxcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgICBmcm9tOiAnMScsXG4gICAgICB0bzogJzEnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzE7LjU7MScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSlcbiAgXSksXG4gIGgoJ2NpcmNsZScsIHtcbiAgICBjeDogJzYwJyxcbiAgICBjeTogJzE1JyxcbiAgICByOiAnOScsXG4gICAgJ2ZpbGwtb3BhY2l0eSc6ICcuMydcbiAgfSwgW1xuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICBmcm9tOiAnOScsXG4gICAgICB0bzogJzknLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzk7MTU7OScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSksXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdmaWxsLW9wYWNpdHknLFxuICAgICAgZnJvbTogJy41JyxcbiAgICAgIHRvOiAnLjUnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJy41OzE7LjUnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pXG4gIF0pLFxuICBoKCdjaXJjbGUnLCB7XG4gICAgY3g6ICcxMDUnLFxuICAgIGN5OiAnMTUnLFxuICAgIHI6ICcxNSdcbiAgfSwgW1xuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAncicsXG4gICAgICBmcm9tOiAnMTUnLFxuICAgICAgdG86ICcxNScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnMTU7OTsxNScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSksXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdmaWxsLW9wYWNpdHknLFxuICAgICAgZnJvbTogJzEnLFxuICAgICAgdG86ICcxJyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxOy41OzEnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pXG4gIF0pXG5dXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRU3Bpbm5lckRvdHMnLFxuXG4gIHByb3BzOiB1c2VTcGlubmVyUHJvcHMsXG5cbiAgc2V0dXAgKHByb3BzKSB7XG4gICAgY29uc3QgeyBjU2l6ZSwgY2xhc3NlcyB9ID0gdXNlU3Bpbm5lcihwcm9wcylcblxuICAgIHJldHVybiAoKSA9PiBoKCdzdmcnLCB7XG4gICAgICBjbGFzczogY2xhc3Nlcy52YWx1ZSxcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgICAgd2lkdGg6IGNTaXplLnZhbHVlLFxuICAgICAgaGVpZ2h0OiBjU2l6ZS52YWx1ZSxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMTIwIDMwJyxcbiAgICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgfSwgc3ZnKVxuICB9XG59KVxuIiwiaW1wb3J0IHsgaCwgcmVmLCBjb21wdXRlZCwgd2F0Y2gsIG9uTW91bnRlZCwgb25BY3RpdmF0ZWQsIG9uRGVhY3RpdmF0ZWQsIG9uQmVmb3JlVW5tb3VudCwgbmV4dFRpY2ssIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UuanMnXG5pbXBvcnQgeyBoZWlnaHQgfSBmcm9tICcuLi8uLi91dGlscy9kb20uanMnXG5pbXBvcnQgeyBnZXRTY3JvbGxUYXJnZXQsIGdldFNjcm9sbEhlaWdodCwgZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3Njcm9sbC5qcydcbmltcG9ydCB7IGxpc3Rlbk9wdHMgfSBmcm9tICcuLi8uLi91dGlscy9ldmVudC5qcydcbmltcG9ydCB7IGhTbG90LCBoVW5pcXVlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuXG5jb25zdCB7IHBhc3NpdmUgfSA9IGxpc3Rlbk9wdHNcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FJbmZpbml0ZVNjcm9sbCcsXG5cbiAgcHJvcHM6IHtcbiAgICBvZmZzZXQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDUwMFxuICAgIH0sXG5cbiAgICBkZWJvdW5jZToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwXG4gICAgfSxcblxuICAgIHNjcm9sbFRhcmdldDoge1xuICAgICAgZGVmYXVsdDogdm9pZCAwXG4gICAgfSxcblxuICAgIGluaXRpYWxJbmRleDogTnVtYmVyLFxuXG4gICAgZGlzYWJsZTogQm9vbGVhbixcbiAgICByZXZlcnNlOiBCb29sZWFuXG4gIH0sXG5cbiAgZW1pdHM6IFsgJ2xvYWQnIF0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICBjb25zdCBpc0ZldGNoaW5nID0gcmVmKGZhbHNlKVxuICAgIGNvbnN0IGlzV29ya2luZyA9IHJlZih0cnVlKVxuICAgIGNvbnN0IHJvb3RSZWYgPSByZWYobnVsbClcblxuICAgIGxldCBpbmRleCA9IHByb3BzLmluaXRpYWxJbmRleCB8fCAwXG4gICAgbGV0IGxvY2FsU2Nyb2xsVGFyZ2V0LCBwb2xsXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWluZmluaXRlLXNjcm9sbF9fbG9hZGluZydcbiAgICAgICsgKGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgaW52aXNpYmxlJylcbiAgICApXG5cbiAgICBmdW5jdGlvbiBpbW1lZGlhdGVQb2xsICgpIHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgfHwgaXNXb3JraW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPSBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgY29udGFpbmVySGVpZ2h0ID0gaGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBpZiAocHJvcHMucmV2ZXJzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24gKyBjb250YWluZXJIZWlnaHQgKyBwcm9wcy5vZmZzZXQpID49IE1hdGgucm91bmQoc2Nyb2xsSGVpZ2h0KSkge1xuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChNYXRoLnJvdW5kKHNjcm9sbFBvc2l0aW9uKSA8PSBwcm9wcy5vZmZzZXQpIHtcbiAgICAgICAgdHJpZ2dlcigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciAoKSB7XG4gICAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBpc0ZldGNoaW5nLnZhbHVlID09PSB0cnVlIHx8IGlzV29ya2luZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICAgIGlzRmV0Y2hpbmcudmFsdWUgPSB0cnVlXG5cbiAgICAgIGNvbnN0IGhlaWdodEJlZm9yZSA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldClcblxuICAgICAgZW1pdCgnbG9hZCcsIGluZGV4LCBpc0RvbmUgPT4ge1xuICAgICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgaXNGZXRjaGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLnJldmVyc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICBoZWlnaHRBZnRlciA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldCksXG4gICAgICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb24gPSBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgICAgICAgICBoZWlnaHREaWZmZXJlbmNlID0gaGVpZ2h0QWZ0ZXIgLSBoZWlnaHRCZWZvcmVcblxuICAgICAgICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3NpdGlvbiArIGhlaWdodERpZmZlcmVuY2UpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0RvbmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgc3RvcCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyb290UmVmLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHJvb3RSZWYudmFsdWUuY2xvc2VzdCgnYm9keScpICYmIHBvbGwoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQgKCkge1xuICAgICAgaW5kZXggPSAwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lICgpIHtcbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlzV29ya2luZy52YWx1ZSA9IHRydWVcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcbiAgICAgIH1cblxuICAgICAgaW1tZWRpYXRlUG9sbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCAoKSB7XG4gICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlzV29ya2luZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGlzRmV0Y2hpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgICBpZiAocG9sbCAhPT0gdm9pZCAwICYmIHBvbGwuY2FuY2VsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBwb2xsLmNhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChyb290UmVmLnZhbHVlLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG5cbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcblxuICAgICAgICBpZiAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBnZXRTY3JvbGxIZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0ID0gaGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCwgc2Nyb2xsSGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0KVxuICAgICAgICB9XG5cbiAgICAgICAgaW1tZWRpYXRlUG9sbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW5kZXggKG5ld0luZGV4KSB7XG4gICAgICBpbmRleCA9IG5ld0luZGV4XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGVib3VuY2UgKHZhbCkge1xuICAgICAgdmFsID0gcGFyc2VJbnQodmFsLCAxMClcblxuICAgICAgY29uc3Qgb2xkUG9sbCA9IHBvbGxcblxuICAgICAgcG9sbCA9IHZhbCA8PSAwXG4gICAgICAgID8gaW1tZWRpYXRlUG9sbFxuICAgICAgICA6IGRlYm91bmNlKGltbWVkaWF0ZVBvbGwsIGlzTmFOKHZhbCkgPT09IHRydWUgPyAxMDAgOiB2YWwpXG5cbiAgICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldCAmJiBpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKG9sZFBvbGwgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9sZFBvbGwsIHBhc3NpdmUpXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhdGNoKCgpID0+IHByb3BzLmRpc2FibGUsIHZhbCA9PiB7XG4gICAgICBpZiAodmFsID09PSB0cnVlKSB7IHN0b3AoKSB9XG4gICAgICBlbHNlIHsgcmVzdW1lKCkgfVxuICAgIH0pXG5cbiAgICB3YXRjaCgoKSA9PiBwcm9wcy5yZXZlcnNlLCB2YWwgPT4ge1xuICAgICAgaWYgKGlzRmV0Y2hpbmcudmFsdWUgPT09IGZhbHNlICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpbW1lZGlhdGVQb2xsKClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuc2Nyb2xsVGFyZ2V0LCB1cGRhdGVTY3JvbGxUYXJnZXQpXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZGVib3VuY2UsIHNldERlYm91bmNlKVxuXG4gICAgbGV0IHNjcm9sbFBvcyA9IGZhbHNlXG5cbiAgICBvbkFjdGl2YXRlZCgoKSA9PiB7XG4gICAgICBpZiAoc2Nyb2xsUG9zICE9PSBmYWxzZSAmJiBsb2NhbFNjcm9sbFRhcmdldCkge1xuICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3MpXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uRGVhY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgc2Nyb2xsUG9zID0gbG9jYWxTY3JvbGxUYXJnZXRcbiAgICAgICAgPyBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KVxuICAgICAgICA6IGZhbHNlXG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudCgoKSA9PiB7XG4gICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHBvbGwsIHBhc3NpdmUpXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uTW91bnRlZCgoKSA9PiB7XG4gICAgICBzZXREZWJvdW5jZShwcm9wcy5kZWJvdW5jZSlcblxuICAgICAgdXBkYXRlU2Nyb2xsVGFyZ2V0KClcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHBvbGw6ICgpID0+IHsgcG9sbCAhPT0gdm9pZCAwICYmIHBvbGwoKSB9LFxuICAgICAgdHJpZ2dlciwgc3RvcCwgcmVzZXQsIHJlc3VtZSwgc2V0SW5kZXhcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlICE9PSB0cnVlICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZFsgcHJvcHMucmV2ZXJzZSA9PT0gZmFsc2UgPyAncHVzaCcgOiAndW5zaGlmdCcgXShcbiAgICAgICAgICBoKCdkaXYnLCB7IGNsYXNzOiBjbGFzc2VzLnZhbHVlIH0sIGhTbG90KHNsb3RzLmxvYWRpbmcpKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoKCdkaXYnLCB7XG4gICAgICAgIGNsYXNzOiAncS1pbmZpbml0ZS1zY3JvbGwnLFxuICAgICAgICByZWY6IHJvb3RSZWZcbiAgICAgIH0sIGNoaWxkKVxuICAgIH1cbiAgfVxufSlcbiIsIjx0ZW1wbGF0ZT5cclxuICA8IS0tVE9ETzogZG9uJ3QgaGFyZGNvZGUgY2FyZCB3aWR0aCBvciBzdW0sIGlkay0tPlxyXG4gIDxxLWNhcmQgdi1yaXBwbGUgY2xhc3M9XCJhbGJ1bS1jYXJkIGN1cnNvci1wb2ludGVyXCIgc3R5bGU9XCJ3aWR0aDogMjQ1cHg7XCIgIEBjbGljaz1cIm5hdlRvQWxidW1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJxLWZvY3VzLWhlbHBlciBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZS1wb3NpdGlvblwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8cS1pbWdcclxuICAgICAgdi1pZj1cInByb3BzLmFsYnVtSW5mby5hbGJ1bUltYWdlXCJcclxuICAgICAgOnNyYz1wcm9wcy5hbGJ1bUluZm8uYWxidW1JbWFnZS51cmxcclxuICAgICAgc3R5bGU9XCJ3aWR0aDogMjEwcHg7IGhlaWdodDogMjEwcHg7XCJcclxuICAgICAgY2xhc3M9XCJxLW14LW1kIHEtbXQtbWRcIlxyXG4gICAgICBpbWctY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIlxyXG4gICAgICByYXRpbz1cIjFcIj5cclxuICAgIDwvcS1pbWc+XHJcblxyXG48IS0tICAgIDxkaXYgY2xhc3M9XCJyb3cgcS1wYS1tZCBqdXN0aWZ5LXN0YXJ0XCI+LS0+XHJcbiAgICA8cS1jYXJkLXNlY3Rpb24+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBwcm9wcy5hbGJ1bUluZm8uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMlwiPnt7IHByb3BzLmFsYnVtSW5mby5hbGJ1bUFydGlzdFswXS5uYW1lIH19PC9kaXY+XHJcbiAgICA8L3EtY2FyZC1zZWN0aW9uPlxyXG48IS0tICAgIDwvZGl2Pi0tPlxyXG4gIDwvcS1jYXJkPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdBbGJ1bUNhcmQnXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQge2RlZmluZVByb3BzLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgeyBBbGJ1bVJlYWREdG8gfSBmcm9tICdhcHAvbXVzaWMtZGF0YS1zZXJ2aWNlLWFwaSc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICd2dWUtcm91dGVyJztcclxuXHJcbmNvbnN0IGhvdmVyaW5nID0gcmVmKGZhbHNlKTtcclxuXHJcbndhdGNoKGhvdmVyaW5nLCAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ2hvdmVyaW5nIGNoYW5nZWQnKTtcclxufSlcclxuXHJcbmNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuZnVuY3Rpb24gbmF2VG9BbGJ1bSgpIHtcclxuICBjb25zdCBhbGJ1bUlkOiBzdHJpbmcgPSA8c3RyaW5nPnByb3BzLmFsYnVtSW5mby5pZDtcclxuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhbGJ1bScsIHBhcmFtczogeyBhbGJ1bUlkOiBhbGJ1bUlkIH0gfSlcclxufVxyXG5cclxudmFyIHByb3BzID0gZGVmaW5lUHJvcHM8e1xyXG4gIGFsYnVtSW5mbzogQWxidW1SZWFkRHRvXHJcbn0+KCk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uYWxidW0tY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYmEoMzMsMzMsMzMsLjIpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAuMik7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBsaW5lYXI7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxxLXBhZ2UgcGFkZGluZz5cclxuICAgIDxxLWluZmluaXRlLXNjcm9sbCBjbGFzcz1cInJvdyBpdGVtcy1zdGFydCBxLWd1dHRlci1tZCBmbGV4XCIgQGxvYWQ9XCJvbkxvYWRcIiA6b2Zmc2V0PVwiMzAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJxLWd1dHRlci1tZCByb3dcIj5cclxuICAgICAgICA8QWxidW1DYXJkIHYtZm9yPVwiKGFsYnVtLCBpbmRleCkgaW4gZGlzcGxheUFsYnVtc1wiIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICA6YWxidW0taW5mbz1cImFsYnVtXCI+XHJcbiAgICAgICAgPC9BbGJ1bUNhcmQ+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHRlbXBsYXRlIHYtc2xvdDpsb2FkaW5nPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jZW50ZXIgcS1teS1tZFwiPlxyXG4gICAgICAgICAgPHEtc3Bpbm5lci1kb3RzIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCI0MHB4XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvcS1pbmZpbml0ZS1zY3JvbGw+XHJcbiAgPC9xLXBhZ2U+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XHJcbiAgLy8gbmFtZTogJ1BhZ2VOYW1lJ1xyXG59KVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XHJcbmltcG9ydCB7QWxidW1BcGksIEFsYnVtUmVhZER0b30gZnJvbSAnYXBwL211c2ljLWRhdGEtc2VydmljZS1hcGknO1xyXG5pbXBvcnQge2FwaUNvbmZpZ30gZnJvbSAnYm9vdC9iYWNrZW5kLWFwaSc7XHJcbmltcG9ydCB7b25Nb3VudGVkLCBvblVubW91bnRlZCwgcmVmfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgQWxidW1DYXJkIGZyb20gJ2NvbXBvbmVudHMvQWxidW1DYXJkLnZ1ZSc7XHJcblxyXG5jb25zdCBhbGJ1bUFwaSA9IG5ldyBBbGJ1bUFwaShhcGlDb25maWcpO1xyXG5cclxuY29uc3QgZGlzcGxheUFsYnVtcyA9IHJlZjxBbGJ1bVJlYWREdG9bXT4oW10pXHJcblxyXG5mdW5jdGlvbiBvbkxvYWQoaW5kZXg6IG51bWJlciwgZG9uZTogKHN0b3A/OiBib29sZWFuKSA9PiB2b2lkKSB7XHJcbiAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgYWxidW1BcGkuZ2V0QWxidW1zKHtzdGFydDogaW5kZXggKiA1MCwgbGltaXQ6IDUwfSkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ0ZldGNoZWQgJyArIHJlc3AubGVuZ3RoICsgJyBpdGVtcycpXHJcbiAgICBkaXNwbGF5QWxidW1zLnZhbHVlLnB1c2goLi4ucmVzcCk7XHJcbiAgICBkb25lKCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm9uTW91bnRlZChhc3luYyAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYEZldGNoIChFeGlzdCAke2Rpc3BsYXlBbGJ1bXMudmFsdWUubGVuZ3RofSlgKTtcclxuICBkaXNwbGF5QWxidW1zLnZhbHVlLnB1c2goLi4uYXdhaXQgYWxidW1BcGkuZ2V0QWxidW1zKHtsaW1pdDogNTB9KSlcclxufSlcclxuXHJcbm9uVW5tb3VudGVkKCgpID0+IHtcclxuICBjb25zb2xlLmxvZygnVW5tb3VudGVkJylcclxufSlcclxuPC9zY3JpcHQ+XHJcbiJdLCJuYW1lcyI6WyJfX2RlZmF1bHRfXyJdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsTUFBTSxNQUFNO0FBQUEsRUFDVixFQUFFLFVBQVU7QUFBQSxJQUNWLElBQUk7QUFBQSxJQUNKLElBQUk7QUFBQSxJQUNKLEdBQUc7QUFBQSxFQUNQLEdBQUs7QUFBQSxJQUNELEVBQUUsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLElBQ25CLENBQUs7QUFBQSxJQUNELEVBQUUsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsTUFBTTtBQUFBLE1BQ04sSUFBSTtBQUFBLE1BQ0osT0FBTztB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

import { h, j as createComponent, ak as useSpinnerProps, al as useSpinner, r as ref, c as computed, w as watch, aB as onActivated, aA as onDeactivated, m as onBeforeUnmount, o as onMounted, n as hUniqueSlot, k as hSlot, aY as listenOpts, bB as getScrollHeight, A as nextTick, a_ as getVerticalScrollPosition, bC as setVerticalScrollPosition, aU as getScrollTarget, bD as height, b7 as debounce, g as getCurrentInstance } from "./index.b3ce9310.js";
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
    const loadingRef = ref(null);
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
    function updateSvgAnimations(isRetry) {
      if (renderLoadingSlot.value === true) {
        if (loadingRef.value === null) {
          isRetry !== true && nextTick(() => {
            updateSvgAnimations(true);
          });
          return;
        }
        const action = `${isFetching.value === true ? "un" : ""}pauseAnimations`;
        Array.from(loadingRef.value.getElementsByTagName("svg")).forEach((el) => {
          el[action]();
        });
      }
    }
    const renderLoadingSlot = computed(() => props.disable !== true && isWorking.value === true);
    watch([isFetching, renderLoadingSlot], () => {
      updateSvgAnimations();
    });
    watch(() => props.disable, (val) => {
      if (val === true) {
        stop();
      } else {
        resume();
      }
    });
    watch(() => props.reverse, () => {
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
      isFetching.value === false && updateSvgAnimations();
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
      if (renderLoadingSlot.value === true) {
        child[props.reverse === false ? "push" : "unshift"](
          h("div", { ref: loadingRef, class: classes.value }, hSlot(slots.loading))
        );
      }
      return h("div", {
        class: "q-infinite-scroll",
        ref: rootRef
      }, child);
    };
  }
});
export { QSpinnerDots as Q, QInfiniteScroll as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUUluZmluaXRlU2Nyb2xsLmQzYWZjYzNjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3NwaW5uZXIvUVNwaW5uZXJEb3RzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9uZW50cy9pbmZpbml0ZS1zY3JvbGwvUUluZmluaXRlU2Nyb2xsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGggfSBmcm9tICd2dWUnXG5cbmltcG9ydCB1c2VTcGlubmVyLCB7IHVzZVNwaW5uZXJQcm9wcyB9IGZyb20gJy4vdXNlLXNwaW5uZXIuanMnXG5cbmltcG9ydCB7IGNyZWF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvY3JlYXRlLmpzJ1xuXG5jb25zdCBzdmcgPSBbXG4gIGgoJ2NpcmNsZScsIHtcbiAgICBjeDogJzE1JyxcbiAgICBjeTogJzE1JyxcbiAgICByOiAnMTUnXG4gIH0sIFtcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ3InLFxuICAgICAgZnJvbTogJzE1JyxcbiAgICAgIHRvOiAnMTUnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzE1Ozk7MTUnLFxuICAgICAgY2FsY01vZGU6ICdsaW5lYXInLFxuICAgICAgcmVwZWF0Q291bnQ6ICdpbmRlZmluaXRlJ1xuICAgIH0pLFxuICAgIGgoJ2FuaW1hdGUnLCB7XG4gICAgICBhdHRyaWJ1dGVOYW1lOiAnZmlsbC1vcGFjaXR5JyxcbiAgICAgIGZyb206ICcxJyxcbiAgICAgIHRvOiAnMScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnMTsuNTsxJyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KVxuICBdKSxcbiAgaCgnY2lyY2xlJywge1xuICAgIGN4OiAnNjAnLFxuICAgIGN5OiAnMTUnLFxuICAgIHI6ICc5JyxcbiAgICAnZmlsbC1vcGFjaXR5JzogJy4zJ1xuICB9LCBbXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIGZyb206ICc5JyxcbiAgICAgIHRvOiAnOScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnOTsxNTs5JyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KSxcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgICBmcm9tOiAnLjUnLFxuICAgICAgdG86ICcuNScsXG4gICAgICBiZWdpbjogJzBzJyxcbiAgICAgIGR1cjogJzAuOHMnLFxuICAgICAgdmFsdWVzOiAnLjU7MTsuNScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSlcbiAgXSksXG4gIGgoJ2NpcmNsZScsIHtcbiAgICBjeDogJzEwNScsXG4gICAgY3k6ICcxNScsXG4gICAgcjogJzE1J1xuICB9LCBbXG4gICAgaCgnYW5pbWF0ZScsIHtcbiAgICAgIGF0dHJpYnV0ZU5hbWU6ICdyJyxcbiAgICAgIGZyb206ICcxNScsXG4gICAgICB0bzogJzE1JyxcbiAgICAgIGJlZ2luOiAnMHMnLFxuICAgICAgZHVyOiAnMC44cycsXG4gICAgICB2YWx1ZXM6ICcxNTs5OzE1JyxcbiAgICAgIGNhbGNNb2RlOiAnbGluZWFyJyxcbiAgICAgIHJlcGVhdENvdW50OiAnaW5kZWZpbml0ZSdcbiAgICB9KSxcbiAgICBoKCdhbmltYXRlJywge1xuICAgICAgYXR0cmlidXRlTmFtZTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgICBmcm9tOiAnMScsXG4gICAgICB0bzogJzEnLFxuICAgICAgYmVnaW46ICcwcycsXG4gICAgICBkdXI6ICcwLjhzJyxcbiAgICAgIHZhbHVlczogJzE7LjU7MScsXG4gICAgICBjYWxjTW9kZTogJ2xpbmVhcicsXG4gICAgICByZXBlYXRDb3VudDogJ2luZGVmaW5pdGUnXG4gICAgfSlcbiAgXSlcbl1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcG9uZW50KHtcbiAgbmFtZTogJ1FTcGlubmVyRG90cycsXG5cbiAgcHJvcHM6IHVzZVNwaW5uZXJQcm9wcyxcblxuICBzZXR1cCAocHJvcHMpIHtcbiAgICBjb25zdCB7IGNTaXplLCBjbGFzc2VzIH0gPSB1c2VTcGlubmVyKHByb3BzKVxuXG4gICAgcmV0dXJuICgpID0+IGgoJ3N2ZycsIHtcbiAgICAgIGNsYXNzOiBjbGFzc2VzLnZhbHVlLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICB3aWR0aDogY1NpemUudmFsdWUsXG4gICAgICBoZWlnaHQ6IGNTaXplLnZhbHVlLFxuICAgICAgdmlld0JveDogJzAgMCAxMjAgMzAnLFxuICAgICAgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICB9LCBzdmcpXG4gIH1cbn0pXG4iLCJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgb25Nb3VudGVkLCBvbkFjdGl2YXRlZCwgb25EZWFjdGl2YXRlZCwgb25CZWZvcmVVbm1vdW50LCBuZXh0VGljaywgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZS5qcydcbmltcG9ydCB7IGhlaWdodCB9IGZyb20gJy4uLy4uL3V0aWxzL2RvbS5qcydcbmltcG9ydCB7IGdldFNjcm9sbFRhcmdldCwgZ2V0U2Nyb2xsSGVpZ2h0LCBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uLCBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgbGlzdGVuT3B0cyB9IGZyb20gJy4uLy4uL3V0aWxzL2V2ZW50LmpzJ1xuaW1wb3J0IHsgaFNsb3QsIGhVbmlxdWVTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmNvbnN0IHsgcGFzc2l2ZSB9ID0gbGlzdGVuT3B0c1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUUluZmluaXRlU2Nyb2xsJyxcblxuICBwcm9wczoge1xuICAgIG9mZnNldDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogNTAwXG4gICAgfSxcblxuICAgIGRlYm91bmNlOiB7XG4gICAgICB0eXBlOiBbIFN0cmluZywgTnVtYmVyIF0sXG4gICAgICBkZWZhdWx0OiAxMDBcbiAgICB9LFxuXG4gICAgc2Nyb2xsVGFyZ2V0OiB7XG4gICAgICBkZWZhdWx0OiB2b2lkIDBcbiAgICB9LFxuXG4gICAgaW5pdGlhbEluZGV4OiBOdW1iZXIsXG5cbiAgICBkaXNhYmxlOiBCb29sZWFuLFxuICAgIHJldmVyc2U6IEJvb2xlYW5cbiAgfSxcblxuICBlbWl0czogWyAnbG9hZCcgXSxcblxuICBzZXR1cCAocHJvcHMsIHsgc2xvdHMsIGVtaXQgfSkge1xuICAgIGNvbnN0IGlzRmV0Y2hpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgaXNXb3JraW5nID0gcmVmKHRydWUpXG4gICAgY29uc3Qgcm9vdFJlZiA9IHJlZihudWxsKVxuICAgIGNvbnN0IGxvYWRpbmdSZWYgPSByZWYobnVsbClcblxuICAgIGxldCBpbmRleCA9IHByb3BzLmluaXRpYWxJbmRleCB8fCAwXG4gICAgbGV0IGxvY2FsU2Nyb2xsVGFyZ2V0LCBwb2xsXG5cbiAgICBjb25zdCBjbGFzc2VzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLWluZmluaXRlLXNjcm9sbF9fbG9hZGluZydcbiAgICAgICsgKGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgPyAnJyA6ICcgaW52aXNpYmxlJylcbiAgICApXG5cbiAgICBmdW5jdGlvbiBpbW1lZGlhdGVQb2xsICgpIHtcbiAgICAgIGlmIChwcm9wcy5kaXNhYmxlID09PSB0cnVlIHx8IGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgfHwgaXNXb3JraW5nLnZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgY29uc3RcbiAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gZ2V0U2Nyb2xsSGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24gPSBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgY29udGFpbmVySGVpZ2h0ID0gaGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICBpZiAocHJvcHMucmV2ZXJzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKE1hdGgucm91bmQoc2Nyb2xsUG9zaXRpb24gKyBjb250YWluZXJIZWlnaHQgKyBwcm9wcy5vZmZzZXQpID49IE1hdGgucm91bmQoc2Nyb2xsSGVpZ2h0KSkge1xuICAgICAgICAgIHRyaWdnZXIoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChNYXRoLnJvdW5kKHNjcm9sbFBvc2l0aW9uKSA8PSBwcm9wcy5vZmZzZXQpIHtcbiAgICAgICAgdHJpZ2dlcigpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlciAoKSB7XG4gICAgICBpZiAocHJvcHMuZGlzYWJsZSA9PT0gdHJ1ZSB8fCBpc0ZldGNoaW5nLnZhbHVlID09PSB0cnVlIHx8IGlzV29ya2luZy52YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGluZGV4KytcbiAgICAgIGlzRmV0Y2hpbmcudmFsdWUgPSB0cnVlXG5cbiAgICAgIGNvbnN0IGhlaWdodEJlZm9yZSA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldClcblxuICAgICAgZW1pdCgnbG9hZCcsIGluZGV4LCBpc0RvbmUgPT4ge1xuICAgICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgaXNGZXRjaGluZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgICAgbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLnJldmVyc2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICBoZWlnaHRBZnRlciA9IGdldFNjcm9sbEhlaWdodChsb2NhbFNjcm9sbFRhcmdldCksXG4gICAgICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb24gPSBnZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0KSxcbiAgICAgICAgICAgICAgICBoZWlnaHREaWZmZXJlbmNlID0gaGVpZ2h0QWZ0ZXIgLSBoZWlnaHRCZWZvcmVcblxuICAgICAgICAgICAgICBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uKGxvY2FsU2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3NpdGlvbiArIGhlaWdodERpZmZlcmVuY2UpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpc0RvbmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgc3RvcCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyb290UmVmLnZhbHVlKSB7XG4gICAgICAgICAgICAgIHJvb3RSZWYudmFsdWUuY2xvc2VzdCgnYm9keScpICYmIHBvbGwoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQgKCkge1xuICAgICAgaW5kZXggPSAwXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lICgpIHtcbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGlzV29ya2luZy52YWx1ZSA9IHRydWVcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcbiAgICAgIH1cblxuICAgICAgaW1tZWRpYXRlUG9sbCgpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcCAoKSB7XG4gICAgICBpZiAoaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgIGlzV29ya2luZy52YWx1ZSA9IGZhbHNlXG4gICAgICAgIGlzRmV0Y2hpbmcudmFsdWUgPSBmYWxzZVxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgICBpZiAocG9sbCAhPT0gdm9pZCAwICYmIHBvbGwuY2FuY2VsICE9PSB2b2lkIDApIHtcbiAgICAgICAgICBwb2xsLmNhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGxUYXJnZXQgKCkge1xuICAgICAgaWYgKGxvY2FsU2Nyb2xsVGFyZ2V0ICYmIGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuXG4gICAgICBsb2NhbFNjcm9sbFRhcmdldCA9IGdldFNjcm9sbFRhcmdldChyb290UmVmLnZhbHVlLCBwcm9wcy5zY3JvbGxUYXJnZXQpXG5cbiAgICAgIGlmIChpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgbG9jYWxTY3JvbGxUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgcG9sbCwgcGFzc2l2ZSlcblxuICAgICAgICBpZiAocHJvcHMucmV2ZXJzZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQgPSBnZXRTY3JvbGxIZWlnaHQobG9jYWxTY3JvbGxUYXJnZXQpLFxuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0ID0gaGVpZ2h0KGxvY2FsU2Nyb2xsVGFyZ2V0KVxuXG4gICAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCwgc2Nyb2xsSGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0KVxuICAgICAgICB9XG5cbiAgICAgICAgaW1tZWRpYXRlUG9sbCgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW5kZXggKG5ld0luZGV4KSB7XG4gICAgICBpbmRleCA9IG5ld0luZGV4XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGVib3VuY2UgKHZhbCkge1xuICAgICAgdmFsID0gcGFyc2VJbnQodmFsLCAxMClcblxuICAgICAgY29uc3Qgb2xkUG9sbCA9IHBvbGxcblxuICAgICAgcG9sbCA9IHZhbCA8PSAwXG4gICAgICAgID8gaW1tZWRpYXRlUG9sbFxuICAgICAgICA6IGRlYm91bmNlKGltbWVkaWF0ZVBvbGwsIGlzTmFOKHZhbCkgPT09IHRydWUgPyAxMDAgOiB2YWwpXG5cbiAgICAgIGlmIChsb2NhbFNjcm9sbFRhcmdldCAmJiBpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaWYgKG9sZFBvbGwgIT09IHZvaWQgMCkge1xuICAgICAgICAgIGxvY2FsU2Nyb2xsVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9sZFBvbGwsIHBhc3NpdmUpXG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVN2Z0FuaW1hdGlvbnMgKGlzUmV0cnkpIHtcbiAgICAgIGlmIChyZW5kZXJMb2FkaW5nU2xvdC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAobG9hZGluZ1JlZi52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIGlzUmV0cnkgIT09IHRydWUgJiYgbmV4dFRpY2soKCkgPT4geyB1cGRhdGVTdmdBbmltYXRpb25zKHRydWUpIH0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHBhdXNlIHN2ZyBhbmltYXRpb25zIChpZiBhbnkpIHdoZW4gaGlkaW5nXG4gICAgICAgIC8vIG90aGVyd2lzZSB0aGUgYnJvd3NlciB3aWxsIGtlZXAgb24gcmVjYWxjdWxhdGluZyB0aGUgc3R5bGVcbiAgICAgICAgY29uc3QgYWN0aW9uID0gYCR7IGlzRmV0Y2hpbmcudmFsdWUgPT09IHRydWUgPyAndW4nIDogJycgfXBhdXNlQW5pbWF0aW9uc2BcbiAgICAgICAgQXJyYXkuZnJvbShsb2FkaW5nUmVmLnZhbHVlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzdmcnKSkuZm9yRWFjaChlbCA9PiB7XG4gICAgICAgICAgZWxbIGFjdGlvbiBdKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJMb2FkaW5nU2xvdCA9IGNvbXB1dGVkKCgpID0+IHByb3BzLmRpc2FibGUgIT09IHRydWUgJiYgaXNXb3JraW5nLnZhbHVlID09PSB0cnVlKVxuXG4gICAgd2F0Y2goWyBpc0ZldGNoaW5nLCByZW5kZXJMb2FkaW5nU2xvdCBdLCAoKSA9PiB7IHVwZGF0ZVN2Z0FuaW1hdGlvbnMoKSB9KVxuXG4gICAgd2F0Y2goKCkgPT4gcHJvcHMuZGlzYWJsZSwgdmFsID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHRydWUpIHsgc3RvcCgpIH1cbiAgICAgIGVsc2UgeyByZXN1bWUoKSB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnJldmVyc2UsICgpID0+IHtcbiAgICAgIGlmIChpc0ZldGNoaW5nLnZhbHVlID09PSBmYWxzZSAmJiBpc1dvcmtpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgaW1tZWRpYXRlUG9sbCgpXG4gICAgICB9XG4gICAgfSlcblxuICAgIHdhdGNoKCgpID0+IHByb3BzLnNjcm9sbFRhcmdldCwgdXBkYXRlU2Nyb2xsVGFyZ2V0KVxuICAgIHdhdGNoKCgpID0+IHByb3BzLmRlYm91bmNlLCBzZXREZWJvdW5jZSlcblxuICAgIGxldCBzY3JvbGxQb3MgPSBmYWxzZVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFBvcyAhPT0gZmFsc2UgJiYgbG9jYWxTY3JvbGxUYXJnZXQpIHtcbiAgICAgICAgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldCwgc2Nyb2xsUG9zKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNjcm9sbFBvcyA9IGxvY2FsU2Nyb2xsVGFyZ2V0XG4gICAgICAgID8gZ2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbihsb2NhbFNjcm9sbFRhcmdldClcbiAgICAgICAgOiBmYWxzZVxuICAgIH0pXG5cbiAgICBvbkJlZm9yZVVubW91bnQoKCkgPT4ge1xuICAgICAgaWYgKGlzV29ya2luZy52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBsb2NhbFNjcm9sbFRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBwb2xsLCBwYXNzaXZlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbk1vdW50ZWQoKCkgPT4ge1xuICAgICAgc2V0RGVib3VuY2UocHJvcHMuZGVib3VuY2UpXG4gICAgICB1cGRhdGVTY3JvbGxUYXJnZXQoKVxuXG4gICAgICBpc0ZldGNoaW5nLnZhbHVlID09PSBmYWxzZSAmJiB1cGRhdGVTdmdBbmltYXRpb25zKClcbiAgICB9KVxuXG4gICAgLy8gZXhwb3NlIHB1YmxpYyBtZXRob2RzXG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIE9iamVjdC5hc3NpZ24odm0ucHJveHksIHtcbiAgICAgIHBvbGw6ICgpID0+IHsgcG9sbCAhPT0gdm9pZCAwICYmIHBvbGwoKSB9LFxuICAgICAgdHJpZ2dlciwgc3RvcCwgcmVzZXQsIHJlc3VtZSwgc2V0SW5kZXhcbiAgICB9KVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkID0gaFVuaXF1ZVNsb3Qoc2xvdHMuZGVmYXVsdCwgW10pXG5cbiAgICAgIGlmIChyZW5kZXJMb2FkaW5nU2xvdC52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICBjaGlsZFsgcHJvcHMucmV2ZXJzZSA9PT0gZmFsc2UgPyAncHVzaCcgOiAndW5zaGlmdCcgXShcbiAgICAgICAgICBoKCdkaXYnLCB7IHJlZjogbG9hZGluZ1JlZiwgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMubG9hZGluZykpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6ICdxLWluZmluaXRlLXNjcm9sbCcsXG4gICAgICAgIHJlZjogcm9vdFJlZlxuICAgICAgfSwgY2hpbGQpXG4gICAgfVxuICB9XG59KVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFNQSxNQUFNLE1BQU07QUFBQSxFQUNWLEVBQUUsVUFBVTtBQUFBLElBQ1YsSUFBSTtBQUFBLElBQ0osSUFBSTtBQUFBLElBQ0osR0FBRztBQUFBLEVBQ1AsR0FBSztBQUFBLElBQ0QsRUFBRSxXQUFXO0FBQUEsTUFDWCxlQUFlO0FBQUEsTUFDZixNQUFNO0FBQUEsTUFDTixJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixhQUFh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

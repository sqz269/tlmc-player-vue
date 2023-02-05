import { Q as QImg } from "./QImg.0473b14f.js";
import { k as createComponent, t as useDarkProps, r as ref, x as useDark, c as computed, bu as debounce, w as watch, av as onDeactivated, aw as onActivated, n as onBeforeUnmount, h, M as hMergeSlot, E as withDirectives, g as getCurrentInstance, bM as setHorizontalScrollPosition, bB as setVerticalScrollPosition, _ as _export_sfc, P as defineComponent, R as useRouter, an as Ripple, U as openBlock, V as createBlock, W as withCtx, d as createVNode, S as unref, X as QCardSection, Y as createBaseVNode, Z as toDisplayString, aj as QSeparator, a1 as QCard, bN as pushScopeId, bO as popScopeId, Q as QueueController, aA as ApiConfigProvider, bk as AlbumApi, o as onMounted, bl as onUpdated, ab as createElementBlock, a2 as createCommentVNode, a0 as QBtn, F as Fragment, aq as renderList, ac as createTextVNode } from "./index.47bc951f.js";
import { Q as QTooltip, c as outlinedPlayArrow, w as outlinedStarBorder, v as outlinedMoreHoriz } from "./index.221c4e13.js";
import { Q as QResizeObserver, a as QScrollObserver, T as TouchPan } from "./QScrollObserver.eded4c93.js";
import { b as between } from "./format.a33550d6.js";
import { Q as QPage } from "./QPage.92cb7a58.js";
import { C as CircleApi } from "./CircleApi.20754981.js";
import { f as formatDuration } from "./durationUtils.f059d1b6.js";
import { u as usePageContainerBgStyleStore } from "./pageContainerBg.aef9d798.js";
import { u as useQuasar } from "./use-quasar.50103501.js";
import { A as AlbumCard } from "./AlbumCard.21668a17.js";
import "./position-engine.16a45534.js";
const axisList = ["vertical", "horizontal"];
const dirProps = {
  vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" },
  horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" }
};
const panOpts = {
  prevent: true,
  mouse: true,
  mouseAllDir: true
};
const getMinThumbSize = (size) => size >= 250 ? 50 : Math.ceil(size / 5);
var QScrollArea = createComponent({
  name: "QScrollArea",
  props: {
    ...useDarkProps,
    thumbStyle: Object,
    verticalThumbStyle: Object,
    horizontalThumbStyle: Object,
    barStyle: [Array, String, Object],
    verticalBarStyle: [Array, String, Object],
    horizontalBarStyle: [Array, String, Object],
    contentStyle: [Array, String, Object],
    contentActiveStyle: [Array, String, Object],
    delay: {
      type: [String, Number],
      default: 1e3
    },
    visible: {
      type: Boolean,
      default: null
    },
    tabindex: [String, Number],
    onScroll: Function
  },
  setup(props, { slots, emit }) {
    const tempShowing = ref(false);
    const panning = ref(false);
    const hover = ref(false);
    const container = {
      vertical: ref(0),
      horizontal: ref(0)
    };
    const scroll = {
      vertical: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      },
      horizontal: {
        ref: ref(null),
        position: ref(0),
        size: ref(0)
      }
    };
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    let timer, panRefPos;
    const targetRef = ref(null);
    const classes = computed(
      () => "q-scrollarea" + (isDark.value === true ? " q-scrollarea--dark" : "")
    );
    scroll.vertical.percentage = computed(() => {
      const diff = scroll.vertical.size.value - container.vertical.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(scroll.vertical.position.value / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.vertical.thumbHidden = computed(
      () => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.vertical.size.value <= container.vertical.value + 1
    );
    scroll.vertical.thumbStart = computed(
      () => scroll.vertical.percentage.value * (container.vertical.value - scroll.vertical.thumbSize.value)
    );
    scroll.vertical.thumbSize = computed(
      () => Math.round(
        between(
          container.vertical.value * container.vertical.value / scroll.vertical.size.value,
          getMinThumbSize(container.vertical.value),
          container.vertical.value
        )
      )
    );
    scroll.vertical.style = computed(() => {
      return {
        ...props.thumbStyle,
        ...props.verticalThumbStyle,
        top: `${scroll.vertical.thumbStart.value}px`,
        height: `${scroll.vertical.thumbSize.value}px`
      };
    });
    scroll.vertical.thumbClass = computed(
      () => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")
    );
    scroll.vertical.barClass = computed(
      () => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (scroll.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")
    );
    scroll.horizontal.percentage = computed(() => {
      const diff = scroll.horizontal.size.value - container.horizontal.value;
      if (diff <= 0) {
        return 0;
      }
      const p = between(Math.abs(scroll.horizontal.position.value) / diff, 0, 1);
      return Math.round(p * 1e4) / 1e4;
    });
    scroll.horizontal.thumbHidden = computed(
      () => (props.visible === null ? hover.value : props.visible) !== true && tempShowing.value === false && panning.value === false || scroll.horizontal.size.value <= container.horizontal.value + 1
    );
    scroll.horizontal.thumbStart = computed(
      () => scroll.horizontal.percentage.value * (container.horizontal.value - scroll.horizontal.thumbSize.value)
    );
    scroll.horizontal.thumbSize = computed(
      () => Math.round(
        between(
          container.horizontal.value * container.horizontal.value / scroll.horizontal.size.value,
          getMinThumbSize(container.horizontal.value),
          container.horizontal.value
        )
      )
    );
    scroll.horizontal.style = computed(() => {
      return {
        ...props.thumbStyle,
        ...props.horizontalThumbStyle,
        [proxy.$q.lang.rtl === true ? "right" : "left"]: `${scroll.horizontal.thumbStart.value}px`,
        width: `${scroll.horizontal.thumbSize.value}px`
      };
    });
    scroll.horizontal.thumbClass = computed(
      () => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")
    );
    scroll.horizontal.barClass = computed(
      () => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (scroll.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")
    );
    const mainStyle = computed(() => scroll.vertical.thumbHidden.value === true && scroll.horizontal.thumbHidden.value === true ? props.contentStyle : props.contentActiveStyle);
    const thumbVertDir = [[
      TouchPan,
      (e) => {
        onPanThumb(e, "vertical");
      },
      void 0,
      { vertical: true, ...panOpts }
    ]];
    const thumbHorizDir = [[
      TouchPan,
      (e) => {
        onPanThumb(e, "horizontal");
      },
      void 0,
      { horizontal: true, ...panOpts }
    ]];
    function getScroll() {
      const info = {};
      axisList.forEach((axis) => {
        const data = scroll[axis];
        info[axis + "Position"] = data.position.value;
        info[axis + "Percentage"] = data.percentage.value;
        info[axis + "Size"] = data.size.value;
        info[axis + "ContainerSize"] = container[axis].value;
      });
      return info;
    }
    const emitScroll = debounce(() => {
      const info = getScroll();
      info.ref = proxy;
      emit("scroll", info);
    }, 0);
    function localSetScrollPosition(axis, offset, duration) {
      if (axisList.includes(axis) === false) {
        console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
        return;
      }
      const fn = axis === "vertical" ? setVerticalScrollPosition : setHorizontalScrollPosition;
      fn(targetRef.value, offset, duration);
    }
    function updateContainer({ height, width }) {
      let change = false;
      if (container.vertical.value !== height) {
        container.vertical.value = height;
        change = true;
      }
      if (container.horizontal.value !== width) {
        container.horizontal.value = width;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScroll({ position }) {
      let change = false;
      if (scroll.vertical.position.value !== position.top) {
        scroll.vertical.position.value = position.top;
        change = true;
      }
      if (scroll.horizontal.position.value !== position.left) {
        scroll.horizontal.position.value = position.left;
        change = true;
      }
      change === true && startTimer();
    }
    function updateScrollSize({ height, width }) {
      if (scroll.horizontal.size.value !== width) {
        scroll.horizontal.size.value = width;
        startTimer();
      }
      if (scroll.vertical.size.value !== height) {
        scroll.vertical.size.value = height;
        startTimer();
      }
    }
    function onPanThumb(e, axis) {
      const data = scroll[axis];
      if (e.isFirst === true) {
        if (data.thumbHidden.value === true) {
          return;
        }
        panRefPos = data.position.value;
        panning.value = true;
      } else if (panning.value !== true) {
        return;
      }
      if (e.isFinal === true) {
        panning.value = false;
      }
      const dProp = dirProps[axis];
      const containerSize = container[axis].value;
      const multiplier = (data.size.value - containerSize) / (containerSize - data.thumbSize.value);
      const distance = e.distance[dProp.dist];
      const pos = panRefPos + (e.direction === dProp.dir ? 1 : -1) * distance * multiplier;
      setScroll(pos, axis);
    }
    function onMousedown(evt, axis) {
      const data = scroll[axis];
      if (data.thumbHidden.value !== true) {
        const offset = evt[dirProps[axis].offset];
        if (offset < data.thumbStart.value || offset > data.thumbStart.value + data.thumbSize.value) {
          const pos = offset - data.thumbSize.value / 2;
          setScroll(pos / container[axis].value * data.size.value, axis);
        }
        if (data.ref.value !== null) {
          data.ref.value.dispatchEvent(new MouseEvent(evt.type, evt));
        }
      }
    }
    function onVerticalMousedown(evt) {
      onMousedown(evt, "vertical");
    }
    function onHorizontalMousedown(evt) {
      onMousedown(evt, "horizontal");
    }
    function startTimer() {
      if (tempShowing.value === true) {
        clearTimeout(timer);
      } else {
        tempShowing.value = true;
      }
      timer = setTimeout(() => {
        tempShowing.value = false;
      }, props.delay);
      props.onScroll !== void 0 && emitScroll();
    }
    function setScroll(offset, axis) {
      targetRef.value[dirProps[axis].scroll] = offset;
    }
    function onMouseenter() {
      hover.value = true;
    }
    function onMouseleave() {
      hover.value = false;
    }
    let scrollPosition = null;
    watch(() => proxy.$q.lang.rtl, (rtl) => {
      if (targetRef.value !== null) {
        setHorizontalScrollPosition(
          targetRef.value,
          Math.abs(scroll.horizontal.position.value) * (rtl === true ? -1 : 1)
        );
      }
    });
    onDeactivated(() => {
      scrollPosition = {
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      };
    });
    onActivated(() => {
      if (scrollPosition === null) {
        return;
      }
      const scrollTarget = targetRef.value;
      if (scrollTarget !== null) {
        setHorizontalScrollPosition(scrollTarget, scrollPosition.left);
        setVerticalScrollPosition(scrollTarget, scrollPosition.top);
      }
    });
    onBeforeUnmount(emitScroll.cancel);
    Object.assign(proxy, {
      getScrollTarget: () => targetRef.value,
      getScroll,
      getScrollPosition: () => ({
        top: scroll.vertical.position.value,
        left: scroll.horizontal.position.value
      }),
      getScrollPercentage: () => ({
        top: scroll.vertical.percentage.value,
        left: scroll.horizontal.percentage.value
      }),
      setScrollPosition: localSetScrollPosition,
      setScrollPercentage(axis, percentage, duration) {
        localSetScrollPosition(
          axis,
          percentage * (scroll[axis].size.value - container[axis].value) * (axis === "horizontal" && proxy.$q.lang.rtl === true ? -1 : 1),
          duration
        );
      }
    });
    return () => {
      return h("div", {
        class: classes.value,
        onMouseenter,
        onMouseleave
      }, [
        h("div", {
          ref: targetRef,
          class: "q-scrollarea__container scroll relative-position fit hide-scrollbar",
          tabindex: props.tabindex !== void 0 ? props.tabindex : void 0
        }, [
          h("div", {
            class: "q-scrollarea__content absolute",
            style: mainStyle.value
          }, hMergeSlot(slots.default, [
            h(QResizeObserver, {
              debounce: 0,
              onResize: updateScrollSize
            })
          ])),
          h(QScrollObserver, {
            axis: "both",
            onScroll: updateScroll
          })
        ]),
        h(QResizeObserver, {
          debounce: 0,
          onResize: updateContainer
        }),
        h("div", {
          class: scroll.vertical.barClass.value,
          style: [props.barStyle, props.verticalBarStyle],
          "aria-hidden": "true",
          onMousedown: onVerticalMousedown
        }),
        h("div", {
          class: scroll.horizontal.barClass.value,
          style: [props.barStyle, props.horizontalBarStyle],
          "aria-hidden": "true",
          onMousedown: onHorizontalMousedown
        }),
        withDirectives(
          h("div", {
            ref: scroll.vertical.ref,
            class: scroll.vertical.thumbClass.value,
            style: scroll.vertical.style.value,
            "aria-hidden": "true"
          }),
          thumbVertDir
        ),
        withDirectives(
          h("div", {
            ref: scroll.horizontal.ref,
            class: scroll.horizontal.thumbClass.value,
            style: scroll.horizontal.style.value,
            "aria-hidden": "true"
          }),
          thumbHorizDir
        )
      ]);
    };
  }
});
var AlbumCardLong_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-04e0786a"), n = n(), popScopeId(), n);
const _hoisted_1$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "text-subtitle2" }, "Album", -1));
const _hoisted_2$1 = { class: "text-h6" };
const _hoisted_3$1 = { class: "text-subtitle1" };
const _hoisted_4$1 = { class: "text-subtitle1" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AlbumCardLong",
  props: {
    albumInfo: null
  },
  setup(__props) {
    const props = __props;
    const router = useRouter();
    function navToAlbum() {
      const albumId = props.albumInfo.id;
      router.push({ name: "album", params: { albumId } });
    }
    const getAlbumImage = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return ((_c = (_b = (_a = props.albumInfo) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.medium) == null ? void 0 : _c.url) === null ? "http://via.placeholder.com/640x360" : (_f = (_e = (_d = props.albumInfo) == null ? void 0 : _d.thumbnail) == null ? void 0 : _e.medium) == null ? void 0 : _f.url;
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(QCard, {
        class: "album-card-long q-pa-md",
        onClick: navToAlbum
      }, {
        default: withCtx(() => [
          createVNode(QCardSection, { horizontal: "" }, {
            default: withCtx(() => [
              createVNode(QImg, {
                "img-class": "rounded-borders",
                style: { "height": "125px", "max-width": "125px" },
                src: unref(getAlbumImage)
              }, null, 8, ["src"]),
              createVNode(QCardSection, { class: "justify-around q-py-none" }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    _hoisted_1$1,
                    createBaseVNode("div", _hoisted_2$1, toDisplayString(__props.albumInfo.albumName._default), 1),
                    createVNode(QSeparator, { class: "q-my-sm" }),
                    createBaseVNode("div", _hoisted_3$1, toDisplayString(__props.albumInfo.tracks.length) + " Tracks", 1),
                    createBaseVNode("div", _hoisted_4$1, toDisplayString((_a = __props.albumInfo.releaseDate) == null ? void 0 : _a.toLocaleDateString()), 1)
                  ];
                }),
                _: 1
              })
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
var AlbumCardLong = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-04e0786a"], ["__file", "AlbumCardLong.vue"]]);
const _hoisted_1 = {
  key: 0,
  class: "row full-width q-px-none q-pt-lg"
};
const _hoisted_2 = {
  class: "col-4 q-px-md",
  style: { "max-width": "230px" }
};
const _hoisted_3 = { class: "col-8" };
const _hoisted_4 = { class: "row full-width full-height items-end" };
const _hoisted_5 = { class: "col-12" };
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("div", { class: "text-h5" }, "Track", -1);
const _hoisted_7 = { class: "q-mb-sm-sm q-mb-none q-mt-md" };
const _hoisted_8 = { class: "col-12" };
const _hoisted_9 = { class: "row full-width" };
const _hoisted_10 = {
  key: 0,
  class: "text-subtitle1"
};
const _hoisted_11 = { class: "text-subtitle1" };
const _hoisted_12 = { class: "page-section-blur col-all q-mt-lg row" };
const _hoisted_13 = { class: "col-12 q-pt-md" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Play");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Save");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("More");
const _hoisted_17 = { class: "col-12 q-pt-md q-px-md" };
const _hoisted_18 = { class: "row" };
const _hoisted_19 = { class: "col-12" };
const _hoisted_20 = { class: "col-12 q-my-lg" };
const _hoisted_21 = { class: "col-12" };
const _hoisted_22 = { class: "text-h5" };
const _hoisted_23 = { class: "row no-wrap" };
const __default__ = defineComponent({
  name: "PageName"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const q = useQuasar();
    const songQueue = QueueController.getInstance();
    const router = useRouter();
    const { setColors } = usePageContainerBgStyleStore();
    const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
    const trackApi = new AlbumApi(apiConfig);
    const artistApi = new CircleApi(apiConfig);
    const trackInfo = ref();
    const albumInfo = ref();
    const trackList = ref();
    const artistRecommend = ref();
    const getAlbumImage = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      return ((_c = (_b = (_a = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.medium) == null ? void 0 : _c.url) === null ? "http://via.placeholder.com/640x360" : (_f = (_e = (_d = albumInfo == null ? void 0 : albumInfo.value) == null ? void 0 : _d.thumbnail) == null ? void 0 : _e.medium) == null ? void 0 : _f.url;
    });
    const gotoArtist = () => {
      router.push({ name: "artist", params: { artist: albumInfo.value.albumArtist[0].name } });
    };
    async function setTrackPage(trackId) {
      var _a, _b, _c, _d, _e, _f, _g;
      trackInfo.value = await trackApi.getTrack({ id: trackId });
      albumInfo.value = await trackApi.getAlbum({ id: (_b = (_a = trackInfo.value) == null ? void 0 : _a.album) == null ? void 0 : _b.id });
      artistRecommend.value = await artistApi.getCircleAlbumsById({ id: (_d = (_c = albumInfo.value) == null ? void 0 : _c.albumArtist[0]) == null ? void 0 : _d.name, limit: 20 });
      trackList.value = (_e = albumInfo.value) == null ? void 0 : _e.tracks;
      setColors((_g = (_f = albumInfo.value) == null ? void 0 : _f.thumbnail) == null ? void 0 : _g.colors);
    }
    async function playTrack(addToFront = true, playImmediately = true) {
      var _a;
      await songQueue.addTrackToQueueById((_a = trackInfo.value) == null ? void 0 : _a.id, addToFront, playImmediately);
      q.notify({
        position: "top",
        type: "secondary",
        message: "Added to Queue"
      });
    }
    onMounted(async () => {
      await setTrackPage(router.currentRoute.value.params.trackId);
    });
    onUpdated(async () => {
      await setTrackPage(router.currentRoute.value.params.trackId);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(QPage, null, {
        default: withCtx(() => {
          var _a;
          return [
            trackInfo.value && albumInfo.value && artistRecommend.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(QImg, {
                  src: unref(getAlbumImage),
                  ratio: "1"
                }, null, 8, ["src"])
              ]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    _hoisted_6,
                    createBaseVNode("h3", _hoisted_7, toDisplayString(trackInfo.value.name._default), 1)
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", {
                        class: "text-subtitle1 text-bold cursor-pointer",
                        onClick: gotoArtist
                      }, toDisplayString(albumInfo.value.albumArtist[0].name), 1),
                      albumInfo.value.releaseDate ? (openBlock(), createBlock(QSeparator, {
                        key: 0,
                        vertical: "",
                        spaced: ""
                      })) : createCommentVNode("", true),
                      createBaseVNode("div", null, [
                        albumInfo.value.releaseDate ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString((_a = albumInfo.value.releaseDate) == null ? void 0 : _a.toLocaleDateString()), 1)) : createCommentVNode("", true)
                      ]),
                      createVNode(QSeparator, {
                        vertical: "",
                        spaced: ""
                      }),
                      createBaseVNode("div", _hoisted_11, toDisplayString(unref(formatDuration)(trackInfo.value.duration)), 1)
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  createVNode(QBtn, {
                    fab: "",
                    class: "q-mx-md",
                    round: "",
                    icon: unref(outlinedPlayArrow),
                    color: "black",
                    "text-color": "white",
                    onClick: playTrack
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          _hoisted_14
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode(QBtn, {
                    fab: "",
                    flat: "",
                    class: "q-mx-md",
                    round: "",
                    icon: unref(outlinedStarBorder)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          _hoisted_15
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"]),
                  createVNode(QBtn, {
                    fab: "",
                    flat: "",
                    class: "q-mx-md",
                    round: "",
                    icon: unref(outlinedMoreHoriz)
                  }, {
                    default: withCtx(() => [
                      createVNode(QTooltip, null, {
                        default: withCtx(() => [
                          _hoisted_16
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["icon"])
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(AlbumCardLong, { "album-info": albumInfo.value }, null, 8, ["album-info"])
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createVNode(QSeparator)
                    ]),
                    createBaseVNode("div", _hoisted_21, [
                      createBaseVNode("div", _hoisted_22, " More From " + toDisplayString(albumInfo.value.albumArtist[0].name), 1),
                      createVNode(QScrollArea, {
                        class: "full-width",
                        style: { "height": "350px" }
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_23, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(artistRecommend.value, (album, index) => {
                              return openBlock(), createBlock(AlbumCard, {
                                key: index,
                                "album-info": album
                              }, null, 8, ["album-info"]);
                            }), 128))
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true)
          ];
        }),
        _: 1
      });
    };
  }
});
var TrackPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "TrackPage.vue"]]);
export { TrackPage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2tQYWdlLmUxMjA5ZjhmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3Njcm9sbC1hcmVhL1FTY3JvbGxBcmVhLmpzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWxidW1DYXJkTG9uZy52dWUiLCIuLi8uLi8uLi9zcmMvcGFnZXMvVHJhY2tQYWdlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCByZWYsIGNvbXB1dGVkLCB3YXRjaCwgd2l0aERpcmVjdGl2ZXMsIG9uQWN0aXZhdGVkLCBvbkRlYWN0aXZhdGVkLCBvbkJlZm9yZVVubW91bnQsIGdldEN1cnJlbnRJbnN0YW5jZSB9IGZyb20gJ3Z1ZSdcblxuaW1wb3J0IHVzZURhcmssIHsgdXNlRGFya1Byb3BzIH0gZnJvbSAnLi4vLi4vY29tcG9zYWJsZXMvcHJpdmF0ZS91c2UtZGFyay5qcydcblxuaW1wb3J0IFFSZXNpemVPYnNlcnZlciBmcm9tICcuLi9yZXNpemUtb2JzZXJ2ZXIvUVJlc2l6ZU9ic2VydmVyLmpzJ1xuaW1wb3J0IFFTY3JvbGxPYnNlcnZlciBmcm9tICcuLi9zY3JvbGwtb2JzZXJ2ZXIvUVNjcm9sbE9ic2VydmVyLmpzJ1xuXG5pbXBvcnQgVG91Y2hQYW4gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9Ub3VjaFBhbi5qcydcblxuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9jcmVhdGUuanMnXG5pbXBvcnQgeyBiZXR3ZWVuIH0gZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LmpzJ1xuaW1wb3J0IHsgc2V0VmVydGljYWxTY3JvbGxQb3NpdGlvbiwgc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Nyb2xsLmpzJ1xuaW1wb3J0IHsgaE1lcmdlU2xvdCB9IGZyb20gJy4uLy4uL3V0aWxzL3ByaXZhdGUvcmVuZGVyLmpzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJy4uLy4uL3V0aWxzL2RlYm91bmNlLmpzJ1xuXG5jb25zdCBheGlzTGlzdCA9IFsgJ3ZlcnRpY2FsJywgJ2hvcml6b250YWwnIF1cbmNvbnN0IGRpclByb3BzID0ge1xuICB2ZXJ0aWNhbDogeyBvZmZzZXQ6ICdvZmZzZXRZJywgc2Nyb2xsOiAnc2Nyb2xsVG9wJywgZGlyOiAnZG93bicsIGRpc3Q6ICd5JyB9LFxuICBob3Jpem9udGFsOiB7IG9mZnNldDogJ29mZnNldFgnLCBzY3JvbGw6ICdzY3JvbGxMZWZ0JywgZGlyOiAncmlnaHQnLCBkaXN0OiAneCcgfVxufVxuY29uc3QgcGFuT3B0cyA9IHtcbiAgcHJldmVudDogdHJ1ZSxcbiAgbW91c2U6IHRydWUsXG4gIG1vdXNlQWxsRGlyOiB0cnVlXG59XG5cbmNvbnN0IGdldE1pblRodW1iU2l6ZSA9IHNpemUgPT4gKHNpemUgPj0gMjUwID8gNTAgOiBNYXRoLmNlaWwoc2l6ZSAvIDUpKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wb25lbnQoe1xuICBuYW1lOiAnUVNjcm9sbEFyZWEnLFxuXG4gIHByb3BzOiB7XG4gICAgLi4udXNlRGFya1Byb3BzLFxuXG4gICAgdGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIHZlcnRpY2FsVGh1bWJTdHlsZTogT2JqZWN0LFxuICAgIGhvcml6b250YWxUaHVtYlN0eWxlOiBPYmplY3QsXG5cbiAgICBiYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICB2ZXJ0aWNhbEJhclN0eWxlOiBbIEFycmF5LCBTdHJpbmcsIE9iamVjdCBdLFxuICAgIGhvcml6b250YWxCYXJTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcblxuICAgIGNvbnRlbnRTdHlsZTogWyBBcnJheSwgU3RyaW5nLCBPYmplY3QgXSxcbiAgICBjb250ZW50QWN0aXZlU3R5bGU6IFsgQXJyYXksIFN0cmluZywgT2JqZWN0IF0sXG5cbiAgICBkZWxheToge1xuICAgICAgdHlwZTogWyBTdHJpbmcsIE51bWJlciBdLFxuICAgICAgZGVmYXVsdDogMTAwMFxuICAgIH0sXG5cbiAgICB2aXNpYmxlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG5cbiAgICB0YWJpbmRleDogWyBTdHJpbmcsIE51bWJlciBdLFxuXG4gICAgb25TY3JvbGw6IEZ1bmN0aW9uXG4gIH0sXG5cbiAgc2V0dXAgKHByb3BzLCB7IHNsb3RzLCBlbWl0IH0pIHtcbiAgICAvLyBzdGF0ZSBtYW5hZ2VtZW50XG4gICAgY29uc3QgdGVtcFNob3dpbmcgPSByZWYoZmFsc2UpXG4gICAgY29uc3QgcGFubmluZyA9IHJlZihmYWxzZSlcbiAgICBjb25zdCBob3ZlciA9IHJlZihmYWxzZSlcblxuICAgIC8vIG90aGVyLi4uXG4gICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgdmVydGljYWw6IHJlZigwKSxcbiAgICAgIGhvcml6b250YWw6IHJlZigwKVxuICAgIH1cblxuICAgIGNvbnN0IHNjcm9sbCA9IHtcbiAgICAgIHZlcnRpY2FsOiB7XG4gICAgICAgIHJlZjogcmVmKG51bGwpLFxuICAgICAgICBwb3NpdGlvbjogcmVmKDApLFxuICAgICAgICBzaXplOiByZWYoMClcbiAgICAgIH0sXG5cbiAgICAgIGhvcml6b250YWw6IHtcbiAgICAgICAgcmVmOiByZWYobnVsbCksXG4gICAgICAgIHBvc2l0aW9uOiByZWYoMCksXG4gICAgICAgIHNpemU6IHJlZigwKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHsgcHJveHkgfSA9IGdldEN1cnJlbnRJbnN0YW5jZSgpXG5cbiAgICBjb25zdCBpc0RhcmsgPSB1c2VEYXJrKHByb3BzLCBwcm94eS4kcSlcblxuICAgIGxldCB0aW1lciwgcGFuUmVmUG9zXG5cbiAgICBjb25zdCB0YXJnZXRSZWYgPSByZWYobnVsbClcblxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3Etc2Nyb2xsYXJlYSdcbiAgICAgICsgKGlzRGFyay52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhLS1kYXJrJyA6ICcnKVxuICAgIClcblxuICAgIHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC52ZXJ0aWNhbC5zaXplLnZhbHVlIC0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICBpZiAoZGlmZiA8PSAwKSB7IHJldHVybiAwIH1cbiAgICAgIGNvbnN0IHAgPSBiZXR3ZWVuKHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSAvIGRpZmYsIDAsIDEpXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChwICogMTAwMDApIC8gMTAwMDBcbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoXG4gICAgICAgIChwcm9wcy52aXNpYmxlID09PSBudWxsID8gaG92ZXIudmFsdWUgOiBwcm9wcy52aXNpYmxlKSAhPT0gdHJ1ZVxuICAgICAgICAmJiB0ZW1wU2hvd2luZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcGFubmluZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICkgfHwgc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgPD0gY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICsgMVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBzY3JvbGwudmVydGljYWwucGVyY2VudGFnZS52YWx1ZSAqIChjb250YWluZXIudmVydGljYWwudmFsdWUgLSBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlKVxuICAgIClcbiAgICBzY3JvbGwudmVydGljYWwudGh1bWJTaXplID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgIE1hdGgucm91bmQoXG4gICAgICAgIGJldHdlZW4oXG4gICAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlICogY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlIC8gc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUsXG4gICAgICAgICAgZ2V0TWluVGh1bWJTaXplKGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSksXG4gICAgICAgICAgY29udGFpbmVyLnZlcnRpY2FsLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLnN0eWxlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvcHMudGh1bWJTdHlsZSxcbiAgICAgICAgLi4ucHJvcHMudmVydGljYWxUaHVtYlN0eWxlLFxuICAgICAgICB0b3A6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTdGFydC52YWx1ZSB9cHhgLFxuICAgICAgICBoZWlnaHQ6IGAkeyBzY3JvbGwudmVydGljYWwudGh1bWJTaXplLnZhbHVlIH1weGBcbiAgICAgIH1cbiAgICB9KVxuICAgIHNjcm9sbC52ZXJ0aWNhbC50aHVtYkNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX3RodW1iIHEtc2Nyb2xsYXJlYV9fdGh1bWItLXYgYWJzb2x1dGUtcmlnaHQnXG4gICAgICArIChzY3JvbGwudmVydGljYWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgPyAnIHEtc2Nyb2xsYXJlYV9fdGh1bWItLWludmlzaWJsZScgOiAnJylcbiAgICApXG4gICAgc2Nyb2xsLnZlcnRpY2FsLmJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX2JhciBxLXNjcm9sbGFyZWFfX2Jhci0tdiBhYnNvbHV0ZS1yaWdodCdcbiAgICAgICsgKHNjcm9sbC52ZXJ0aWNhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX19iYXItLWludmlzaWJsZScgOiAnJylcbiAgICApXG5cbiAgICBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgICAgY29uc3QgZGlmZiA9IHNjcm9sbC5ob3Jpem9udGFsLnNpemUudmFsdWUgLSBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZVxuICAgICAgaWYgKGRpZmYgPD0gMCkgeyByZXR1cm4gMCB9XG4gICAgICBjb25zdCBwID0gYmV0d2VlbihNYXRoLmFicyhzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZSkgLyBkaWZmLCAwLCAxKVxuICAgICAgcmV0dXJuIE1hdGgucm91bmQocCAqIDEwMDAwKSAvIDEwMDAwXG4gICAgfSlcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbiA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAoXG4gICAgICAgIChwcm9wcy52aXNpYmxlID09PSBudWxsID8gaG92ZXIudmFsdWUgOiBwcm9wcy52aXNpYmxlKSAhPT0gdHJ1ZVxuICAgICAgICAmJiB0ZW1wU2hvd2luZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICAgJiYgcGFubmluZy52YWx1ZSA9PT0gZmFsc2VcbiAgICAgICkgfHwgc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSA8PSBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSArIDFcbiAgICApXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJTdGFydCA9IGNvbXB1dGVkKCgpID0+XG4gICAgICBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlLnZhbHVlICogKGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlIC0gc2Nyb2xsLmhvcml6b250YWwudGh1bWJTaXplLnZhbHVlKVxuICAgIClcbiAgICBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgTWF0aC5yb3VuZChcbiAgICAgICAgYmV0d2VlbihcbiAgICAgICAgICBjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSAqIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlIC8gc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSxcbiAgICAgICAgICBnZXRNaW5UaHVtYlNpemUoY29udGFpbmVyLmhvcml6b250YWwudmFsdWUpLFxuICAgICAgICAgIGNvbnRhaW5lci5ob3Jpem9udGFsLnZhbHVlXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICAgc2Nyb2xsLmhvcml6b250YWwuc3R5bGUgPSBjb21wdXRlZCgoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcm9wcy50aHVtYlN0eWxlLFxuICAgICAgICAuLi5wcm9wcy5ob3Jpem9udGFsVGh1bWJTdHlsZSxcbiAgICAgICAgWyBwcm94eS4kcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/ICdyaWdodCcgOiAnbGVmdCcgXTogYCR7IHNjcm9sbC5ob3Jpem9udGFsLnRodW1iU3RhcnQudmFsdWUgfXB4YCxcbiAgICAgICAgd2lkdGg6IGAkeyBzY3JvbGwuaG9yaXpvbnRhbC50aHVtYlNpemUudmFsdWUgfXB4YFxuICAgICAgfVxuICAgIH0pXG4gICAgc2Nyb2xsLmhvcml6b250YWwudGh1bWJDbGFzcyA9IGNvbXB1dGVkKCgpID0+XG4gICAgICAncS1zY3JvbGxhcmVhX190aHVtYiBxLXNjcm9sbGFyZWFfX3RodW1iLS1oIGFic29sdXRlLWJvdHRvbSdcbiAgICAgICsgKHNjcm9sbC5ob3Jpem9udGFsLnRodW1iSGlkZGVuLnZhbHVlID09PSB0cnVlID8gJyBxLXNjcm9sbGFyZWFfX3RodW1iLS1pbnZpc2libGUnIDogJycpXG4gICAgKVxuICAgIHNjcm9sbC5ob3Jpem9udGFsLmJhckNsYXNzID0gY29tcHV0ZWQoKCkgPT5cbiAgICAgICdxLXNjcm9sbGFyZWFfX2JhciBxLXNjcm9sbGFyZWFfX2Jhci0taCBhYnNvbHV0ZS1ib3R0b20nXG4gICAgICArIChzY3JvbGwuaG9yaXpvbnRhbC50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSA/ICcgcS1zY3JvbGxhcmVhX19iYXItLWludmlzaWJsZScgOiAnJylcbiAgICApXG5cbiAgICBjb25zdCBtYWluU3R5bGUgPSBjb21wdXRlZCgoKSA9PiAoXG4gICAgICBzY3JvbGwudmVydGljYWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWUgJiYgc2Nyb2xsLmhvcml6b250YWwudGh1bWJIaWRkZW4udmFsdWUgPT09IHRydWVcbiAgICAgICAgPyBwcm9wcy5jb250ZW50U3R5bGVcbiAgICAgICAgOiBwcm9wcy5jb250ZW50QWN0aXZlU3R5bGVcbiAgICApKVxuXG4gICAgY29uc3QgdGh1bWJWZXJ0RGlyID0gWyBbXG4gICAgICBUb3VjaFBhbixcbiAgICAgIGUgPT4geyBvblBhblRodW1iKGUsICd2ZXJ0aWNhbCcpIH0sXG4gICAgICB2b2lkIDAsXG4gICAgICB7IHZlcnRpY2FsOiB0cnVlLCAuLi5wYW5PcHRzIH1cbiAgICBdIF1cblxuICAgIGNvbnN0IHRodW1iSG9yaXpEaXIgPSBbIFtcbiAgICAgIFRvdWNoUGFuLFxuICAgICAgZSA9PiB7IG9uUGFuVGh1bWIoZSwgJ2hvcml6b250YWwnKSB9LFxuICAgICAgdm9pZCAwLFxuICAgICAgeyBob3Jpem9udGFsOiB0cnVlLCAuLi5wYW5PcHRzIH1cbiAgICBdIF1cblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbCAoKSB7XG4gICAgICBjb25zdCBpbmZvID0ge31cblxuICAgICAgYXhpc0xpc3QuZm9yRWFjaChheGlzID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG5cbiAgICAgICAgaW5mb1sgYXhpcyArICdQb3NpdGlvbicgXSA9IGRhdGEucG9zaXRpb24udmFsdWVcbiAgICAgICAgaW5mb1sgYXhpcyArICdQZXJjZW50YWdlJyBdID0gZGF0YS5wZXJjZW50YWdlLnZhbHVlXG4gICAgICAgIGluZm9bIGF4aXMgKyAnU2l6ZScgXSA9IGRhdGEuc2l6ZS52YWx1ZVxuICAgICAgICBpbmZvWyBheGlzICsgJ0NvbnRhaW5lclNpemUnIF0gPSBjb250YWluZXJbIGF4aXMgXS52YWx1ZVxuICAgICAgfSlcblxuICAgICAgcmV0dXJuIGluZm9cbiAgICB9XG5cbiAgICAvLyB3ZSBoYXZlIGxvdHMgb2YgbGlzdGVuZXJzLCBzb1xuICAgIC8vIGVuc3VyZSB3ZSdyZSBub3QgZW1pdHRpbmcgc2FtZSBpbmZvXG4gICAgLy8gbXVsdGlwbGUgdGltZXNcbiAgICBjb25zdCBlbWl0U2Nyb2xsID0gZGVib3VuY2UoKCkgPT4ge1xuICAgICAgY29uc3QgaW5mbyA9IGdldFNjcm9sbCgpXG4gICAgICBpbmZvLnJlZiA9IHByb3h5XG4gICAgICBlbWl0KCdzY3JvbGwnLCBpbmZvKVxuICAgIH0sIDApXG5cbiAgICBmdW5jdGlvbiBsb2NhbFNldFNjcm9sbFBvc2l0aW9uIChheGlzLCBvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoYXhpc0xpc3QuaW5jbHVkZXMoYXhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tRU2Nyb2xsQXJlYV06IHdyb25nIGZpcnN0IHBhcmFtIG9mIHNldFNjcm9sbFBvc2l0aW9uICh2ZXJ0aWNhbC9ob3Jpem9udGFsKScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBmbiA9IGF4aXMgPT09ICd2ZXJ0aWNhbCdcbiAgICAgICAgPyBzZXRWZXJ0aWNhbFNjcm9sbFBvc2l0aW9uXG4gICAgICAgIDogc2V0SG9yaXpvbnRhbFNjcm9sbFBvc2l0aW9uXG5cbiAgICAgIGZuKHRhcmdldFJlZi52YWx1ZSwgb2Zmc2V0LCBkdXJhdGlvbilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVDb250YWluZXIgKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgICBsZXQgY2hhbmdlID0gZmFsc2VcblxuICAgICAgaWYgKGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNvbnRhaW5lci52ZXJ0aWNhbC52YWx1ZSA9IGhlaWdodFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChjb250YWluZXIuaG9yaXpvbnRhbC52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgY29udGFpbmVyLmhvcml6b250YWwudmFsdWUgPSB3aWR0aFxuICAgICAgICBjaGFuZ2UgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGNoYW5nZSA9PT0gdHJ1ZSAmJiBzdGFydFRpbWVyKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY3JvbGwgKHsgcG9zaXRpb24gfSkge1xuICAgICAgbGV0IGNoYW5nZSA9IGZhbHNlXG5cbiAgICAgIGlmIChzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgIT09IHBvc2l0aW9uLnRvcCkge1xuICAgICAgICBzY3JvbGwudmVydGljYWwucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi50b3BcbiAgICAgICAgY2hhbmdlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUgIT09IHBvc2l0aW9uLmxlZnQpIHtcbiAgICAgICAgc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUgPSBwb3NpdGlvbi5sZWZ0XG4gICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgIH1cblxuICAgICAgY2hhbmdlID09PSB0cnVlICYmIHN0YXJ0VGltZXIoKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbFNpemUgKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG4gICAgICBpZiAoc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSAhPT0gd2lkdGgpIHtcbiAgICAgICAgc2Nyb2xsLmhvcml6b250YWwuc2l6ZS52YWx1ZSA9IHdpZHRoXG4gICAgICAgIHN0YXJ0VGltZXIoKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2Nyb2xsLnZlcnRpY2FsLnNpemUudmFsdWUgIT09IGhlaWdodCkge1xuICAgICAgICBzY3JvbGwudmVydGljYWwuc2l6ZS52YWx1ZSA9IGhlaWdodFxuICAgICAgICBzdGFydFRpbWVyKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblBhblRodW1iIChlLCBheGlzKSB7XG4gICAgICBjb25zdCBkYXRhID0gc2Nyb2xsWyBheGlzIF1cblxuICAgICAgaWYgKGUuaXNGaXJzdCA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAoZGF0YS50aHVtYkhpZGRlbi52YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgcGFuUmVmUG9zID0gZGF0YS5wb3NpdGlvbi52YWx1ZVxuICAgICAgICBwYW5uaW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAocGFubmluZy52YWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGUuaXNGaW5hbCA9PT0gdHJ1ZSkge1xuICAgICAgICBwYW5uaW5nLnZhbHVlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY29uc3QgZFByb3AgPSBkaXJQcm9wc1sgYXhpcyBdXG4gICAgICBjb25zdCBjb250YWluZXJTaXplID0gY29udGFpbmVyWyBheGlzIF0udmFsdWVcblxuICAgICAgY29uc3QgbXVsdGlwbGllciA9IChkYXRhLnNpemUudmFsdWUgLSBjb250YWluZXJTaXplKSAvIChjb250YWluZXJTaXplIC0gZGF0YS50aHVtYlNpemUudmFsdWUpXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IGUuZGlzdGFuY2VbIGRQcm9wLmRpc3QgXVxuICAgICAgY29uc3QgcG9zID0gcGFuUmVmUG9zICsgKGUuZGlyZWN0aW9uID09PSBkUHJvcC5kaXIgPyAxIDogLTEpICogZGlzdGFuY2UgKiBtdWx0aXBsaWVyXG5cbiAgICAgIHNldFNjcm9sbChwb3MsIGF4aXMpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWRvd24gKGV2dCwgYXhpcykge1xuICAgICAgY29uc3QgZGF0YSA9IHNjcm9sbFsgYXhpcyBdXG5cbiAgICAgIGlmIChkYXRhLnRodW1iSGlkZGVuLnZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGV2dFsgZGlyUHJvcHNbIGF4aXMgXS5vZmZzZXQgXVxuICAgICAgICBpZiAob2Zmc2V0IDwgZGF0YS50aHVtYlN0YXJ0LnZhbHVlIHx8IG9mZnNldCA+IGRhdGEudGh1bWJTdGFydC52YWx1ZSArIGRhdGEudGh1bWJTaXplLnZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgcG9zID0gb2Zmc2V0IC0gZGF0YS50aHVtYlNpemUudmFsdWUgLyAyXG4gICAgICAgICAgc2V0U2Nyb2xsKHBvcyAvIGNvbnRhaW5lclsgYXhpcyBdLnZhbHVlICogZGF0YS5zaXplLnZhbHVlLCBheGlzKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWN0aXZhdGUgdGh1bWIgcGFuXG4gICAgICAgIGlmIChkYXRhLnJlZi52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGRhdGEucmVmLnZhbHVlLmRpc3BhdGNoRXZlbnQobmV3IE1vdXNlRXZlbnQoZXZ0LnR5cGUsIGV2dCkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblZlcnRpY2FsTW91c2Vkb3duIChldnQpIHtcbiAgICAgIG9uTW91c2Vkb3duKGV2dCwgJ3ZlcnRpY2FsJylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvbkhvcml6b250YWxNb3VzZWRvd24gKGV2dCkge1xuICAgICAgb25Nb3VzZWRvd24oZXZ0LCAnaG9yaXpvbnRhbCcpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRUaW1lciAoKSB7XG4gICAgICBpZiAodGVtcFNob3dpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRlbXBTaG93aW5nLnZhbHVlID0gdHJ1ZVxuICAgICAgfVxuXG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyB0ZW1wU2hvd2luZy52YWx1ZSA9IGZhbHNlIH0sIHByb3BzLmRlbGF5KVxuICAgICAgcHJvcHMub25TY3JvbGwgIT09IHZvaWQgMCAmJiBlbWl0U2Nyb2xsKClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTY3JvbGwgKG9mZnNldCwgYXhpcykge1xuICAgICAgdGFyZ2V0UmVmLnZhbHVlWyBkaXJQcm9wc1sgYXhpcyBdLnNjcm9sbCBdID0gb2Zmc2V0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Nb3VzZWVudGVyICgpIHtcbiAgICAgIGhvdmVyLnZhbHVlID0gdHJ1ZVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uTW91c2VsZWF2ZSAoKSB7XG4gICAgICBob3Zlci52YWx1ZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IHNjcm9sbFBvc2l0aW9uID0gbnVsbFxuXG4gICAgd2F0Y2goKCkgPT4gcHJveHkuJHEubGFuZy5ydGwsIHJ0bCA9PiB7XG4gICAgICBpZiAodGFyZ2V0UmVmLnZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgIHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICB0YXJnZXRSZWYudmFsdWUsXG4gICAgICAgICAgTWF0aC5hYnMoc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWUpICogKHJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSlcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvbkRlYWN0aXZhdGVkKCgpID0+IHtcbiAgICAgIHNjcm9sbFBvc2l0aW9uID0ge1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wb3NpdGlvbi52YWx1ZSxcbiAgICAgICAgbGVmdDogc2Nyb2xsLmhvcml6b250YWwucG9zaXRpb24udmFsdWVcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgb25BY3RpdmF0ZWQoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbFBvc2l0aW9uID09PSBudWxsKSB7IHJldHVybiB9XG5cbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IHRhcmdldFJlZi52YWx1ZVxuXG4gICAgICBpZiAoc2Nyb2xsVGFyZ2V0ICE9PSBudWxsKSB7XG4gICAgICAgIHNldEhvcml6b250YWxTY3JvbGxQb3NpdGlvbihzY3JvbGxUYXJnZXQsIHNjcm9sbFBvc2l0aW9uLmxlZnQpXG4gICAgICAgIHNldFZlcnRpY2FsU2Nyb2xsUG9zaXRpb24oc2Nyb2xsVGFyZ2V0LCBzY3JvbGxQb3NpdGlvbi50b3ApXG4gICAgICB9XG4gICAgfSlcblxuICAgIG9uQmVmb3JlVW5tb3VudChlbWl0U2Nyb2xsLmNhbmNlbClcblxuICAgIC8vIGV4cG9zZSBwdWJsaWMgbWV0aG9kc1xuICAgIE9iamVjdC5hc3NpZ24ocHJveHksIHtcbiAgICAgIGdldFNjcm9sbFRhcmdldDogKCkgPT4gdGFyZ2V0UmVmLnZhbHVlLFxuICAgICAgZ2V0U2Nyb2xsLFxuICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246ICgpID0+ICh7XG4gICAgICAgIHRvcDogc2Nyb2xsLnZlcnRpY2FsLnBvc2l0aW9uLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wb3NpdGlvbi52YWx1ZVxuICAgICAgfSksXG4gICAgICBnZXRTY3JvbGxQZXJjZW50YWdlOiAoKSA9PiAoe1xuICAgICAgICB0b3A6IHNjcm9sbC52ZXJ0aWNhbC5wZXJjZW50YWdlLnZhbHVlLFxuICAgICAgICBsZWZ0OiBzY3JvbGwuaG9yaXpvbnRhbC5wZXJjZW50YWdlLnZhbHVlXG4gICAgICB9KSxcbiAgICAgIHNldFNjcm9sbFBvc2l0aW9uOiBsb2NhbFNldFNjcm9sbFBvc2l0aW9uLFxuICAgICAgc2V0U2Nyb2xsUGVyY2VudGFnZSAoYXhpcywgcGVyY2VudGFnZSwgZHVyYXRpb24pIHtcbiAgICAgICAgbG9jYWxTZXRTY3JvbGxQb3NpdGlvbihcbiAgICAgICAgICBheGlzLFxuICAgICAgICAgIHBlcmNlbnRhZ2VcbiAgICAgICAgICAgICogKHNjcm9sbFsgYXhpcyBdLnNpemUudmFsdWUgLSBjb250YWluZXJbIGF4aXMgXS52YWx1ZSlcbiAgICAgICAgICAgICogKGF4aXMgPT09ICdob3Jpem9udGFsJyAmJiBwcm94eS4kcS5sYW5nLnJ0bCA9PT0gdHJ1ZSA/IC0xIDogMSksXG4gICAgICAgICAgZHVyYXRpb25cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmV0dXJuIGgoJ2RpdicsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUsXG4gICAgICAgIG9uTW91c2VlbnRlcixcbiAgICAgICAgb25Nb3VzZWxlYXZlXG4gICAgICB9LCBbXG4gICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICByZWY6IHRhcmdldFJlZixcbiAgICAgICAgICBjbGFzczogJ3Etc2Nyb2xsYXJlYV9fY29udGFpbmVyIHNjcm9sbCByZWxhdGl2ZS1wb3NpdGlvbiBmaXQgaGlkZS1zY3JvbGxiYXInLFxuICAgICAgICAgIHRhYmluZGV4OiBwcm9wcy50YWJpbmRleCAhPT0gdm9pZCAwID8gcHJvcHMudGFiaW5kZXggOiB2b2lkIDBcbiAgICAgICAgfSwgW1xuICAgICAgICAgIGgoJ2RpdicsIHtcbiAgICAgICAgICAgIGNsYXNzOiAncS1zY3JvbGxhcmVhX19jb250ZW50IGFic29sdXRlJyxcbiAgICAgICAgICAgIHN0eWxlOiBtYWluU3R5bGUudmFsdWVcbiAgICAgICAgICB9LCBoTWVyZ2VTbG90KHNsb3RzLmRlZmF1bHQsIFtcbiAgICAgICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgICAgIGRlYm91bmNlOiAwLFxuICAgICAgICAgICAgICBvblJlc2l6ZTogdXBkYXRlU2Nyb2xsU2l6ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSksXG5cbiAgICAgICAgICBoKFFTY3JvbGxPYnNlcnZlciwge1xuICAgICAgICAgICAgYXhpczogJ2JvdGgnLFxuICAgICAgICAgICAgb25TY3JvbGw6IHVwZGF0ZVNjcm9sbFxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuXG4gICAgICAgIGgoUVJlc2l6ZU9ic2VydmVyLCB7XG4gICAgICAgICAgZGVib3VuY2U6IDAsXG4gICAgICAgICAgb25SZXNpemU6IHVwZGF0ZUNvbnRhaW5lclxuICAgICAgICB9KSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHNjcm9sbC52ZXJ0aWNhbC5iYXJDbGFzcy52YWx1ZSxcbiAgICAgICAgICBzdHlsZTogWyBwcm9wcy5iYXJTdHlsZSwgcHJvcHMudmVydGljYWxCYXJTdHlsZSBdLFxuICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICBvbk1vdXNlZG93bjogb25WZXJ0aWNhbE1vdXNlZG93blxuICAgICAgICB9KSxcblxuICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgY2xhc3M6IHNjcm9sbC5ob3Jpem9udGFsLmJhckNsYXNzLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBbIHByb3BzLmJhclN0eWxlLCBwcm9wcy5ob3Jpem9udGFsQmFyU3R5bGUgXSxcbiAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgb25Nb3VzZWRvd246IG9uSG9yaXpvbnRhbE1vdXNlZG93blxuICAgICAgICB9KSxcblxuICAgICAgICB3aXRoRGlyZWN0aXZlcyhcbiAgICAgICAgICBoKCdkaXYnLCB7XG4gICAgICAgICAgICByZWY6IHNjcm9sbC52ZXJ0aWNhbC5yZWYsXG4gICAgICAgICAgICBjbGFzczogc2Nyb2xsLnZlcnRpY2FsLnRodW1iQ2xhc3MudmFsdWUsXG4gICAgICAgICAgICBzdHlsZTogc2Nyb2xsLnZlcnRpY2FsLnN0eWxlLnZhbHVlLFxuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGh1bWJWZXJ0RGlyXG4gICAgICAgICksXG5cbiAgICAgICAgd2l0aERpcmVjdGl2ZXMoXG4gICAgICAgICAgaCgnZGl2Jywge1xuICAgICAgICAgICAgcmVmOiBzY3JvbGwuaG9yaXpvbnRhbC5yZWYsXG4gICAgICAgICAgICBjbGFzczogc2Nyb2xsLmhvcml6b250YWwudGh1bWJDbGFzcy52YWx1ZSxcbiAgICAgICAgICAgIHN0eWxlOiBzY3JvbGwuaG9yaXpvbnRhbC5zdHlsZS52YWx1ZSxcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHRodW1iSG9yaXpEaXJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICB9XG4gIH1cbn0pXG4iLCI8dGVtcGxhdGU+XG4gIDxxLWNhcmQgdi1yaXBwbGUgY2xhc3M9XCJhbGJ1bS1jYXJkLWxvbmcgcS1wYS1tZFwiIEBjbGljaz1cIm5hdlRvQWxidW1cIj5cbiAgICA8cS1jYXJkLXNlY3Rpb24gaG9yaXpvbnRhbD5cbiAgICAgIDxxLWltZ1xuICAgICAgICBpbWctY2xhc3M9XCJyb3VuZGVkLWJvcmRlcnNcIlxuICAgICAgICBzdHlsZT1cImhlaWdodDogMTI1cHg7IG1heC13aWR0aDogMTI1cHhcIlxuICAgICAgICA6c3JjPVwiZ2V0QWxidW1JbWFnZVwiXG4gICAgICAvPlxuXG4gICAgICA8cS1jYXJkLXNlY3Rpb24gY2xhc3M9XCJqdXN0aWZ5LWFyb3VuZCBxLXB5LW5vbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUyXCI+QWxidW08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDZcIj57eyBhbGJ1bUluZm8uYWxidW1OYW1lLl9kZWZhdWx0IH19PC9kaXY+XG5cbiAgICAgICAgPHEtc2VwYXJhdG9yIGNsYXNzPVwicS1teS1zbVwiPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IGFsYnVtSW5mby50cmFja3MubGVuZ3RoIH19IFRyYWNrczwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTFcIj57eyBhbGJ1bUluZm8ucmVsZWFzZURhdGU/LnRvTG9jYWxlRGF0ZVN0cmluZygpIH19PC9kaXY+XG4gICAgICA8L3EtY2FyZC1zZWN0aW9uPlxuICAgICAgPCEtLSAgICAgICAgICAgICAgICAgIDxxLWNhcmQtYWN0aW9ucyB2ZXJ0aWNhbCBjbGFzcz1cImp1c3RpZnktYXJvdW5kIHEtcHgtbWRcIj4tLT5cbiAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDxxLWJ0biBmbGF0IHJvdW5kIHNpemU9XCJtZFwiIGNvbG9yPVwicmVkXCIgOmljb249XCJvdXRsaW5lZEZhdm9yaXRlQm9yZGVyXCIgLz4tLT5cbiAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgIDxxLWJ0biBmbGF0IHJvdW5kIHNpemU9XCJtZFwiIGNvbG9yPVwiYWNjZW50XCIgOmljb249XCJvdXRsaW5lZFBsYXlsaXN0QWRkQ2lyY2xlXCIgLz4tLT5cbiAgICAgIDwhLS0gICAgICAgICAgICAgICAgICA8L3EtY2FyZC1hY3Rpb25zPi0tPlxuICAgIDwvcS1jYXJkLXNlY3Rpb24+XG4gIDwvcS1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7Y29tcHV0ZWQsIGRlZmluZVByb3BzfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQge0FsYnVtUmVhZER0b30gZnJvbSBcImFwcC9iYWNrZW5kLXNlcnZpY2UtYXBpXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmZ1bmN0aW9uIG5hdlRvQWxidW0oKSB7XG4gIGNvbnN0IGFsYnVtSWQ6IHN0cmluZyA9IDxzdHJpbmc+cHJvcHMuYWxidW1JbmZvLmlkO1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhbGJ1bScsIHBhcmFtczogeyBhbGJ1bUlkOiBhbGJ1bUlkIH0gfSlcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGFsYnVtSW5mbzogQWxidW1SZWFkRHRvXG59PigpO1xuXG5jb25zdCBnZXRBbGJ1bUltYWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gcHJvcHMuYWxidW1JbmZvPy50aHVtYm5haWw/Lm1lZGl1bT8udXJsID09PSBudWxsID9cbiAgICAnaHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vNjQweDM2MCcgOiBwcm9wcy5hbGJ1bUluZm8/LnRodW1ibmFpbD8ubWVkaXVtPy51cmxcbn0pXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5hbGJ1bS1jYXJkLWxvbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpICFpbXBvcnRhbnQ7XG59XG5cbi5hbGJ1bS1jYXJkLWxvbmc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMTkzLCAxOTMsIDAuMikgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciwgY29sb3IsIDIwMG1zIGxpbmVhciAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gIDxxLXBhZ2U+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBmdWxsLXdpZHRoIHEtcHgtbm9uZSBxLXB0LWxnXCIgdi1pZj1cInRyYWNrSW5mbyAmJiBhbGJ1bUluZm8gJiYgYXJ0aXN0UmVjb21tZW5kXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTQgcS1weC1tZFwiIHN0eWxlPVwibWF4LXdpZHRoOiAyMzBweFwiPlxuICAgICAgICA8cS1pbWdcbiAgICAgICAgICA6c3JjPVwiZ2V0QWxidW1JbWFnZVwiXG4gICAgICAgICAgcmF0aW89XCIxXCI+XG4gICAgICAgIDwvcS1pbWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZ1bGwtd2lkdGggZnVsbC1oZWlnaHQgaXRlbXMtZW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtaDVcIj5UcmFjazwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicS1tYi1zbS1zbSBxLW1iLW5vbmUgcS1tdC1tZFwiPnt7IHRyYWNrSW5mby5uYW1lLl9kZWZhdWx0IH19PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZnVsbC13aWR0aFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1zdWJ0aXRsZTEgdGV4dC1ib2xkIGN1cnNvci1wb2ludGVyXCIgQGNsaWNrPVwiZ290b0FydGlzdFwiPlxuICAgICAgICAgICAgICAgIHt7IGFsYnVtSW5mby5hbGJ1bUFydGlzdFswXS5uYW1lIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxxLXNlcGFyYXRvciB2ZXJ0aWNhbCBzcGFjZWQgdi1pZj1cImFsYnVtSW5mby5yZWxlYXNlRGF0ZVwiPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtc3VidGl0bGUxXCIgdi1pZj1cImFsYnVtSW5mby5yZWxlYXNlRGF0ZVwiPlxuICAgICAgICAgICAgICAgICAge3sgYWxidW1JbmZvLnJlbGVhc2VEYXRlPy50b0xvY2FsZURhdGVTdHJpbmcoKSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8cS1zZXBhcmF0b3IgdmVydGljYWwgc3BhY2VkPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IGZvcm1hdER1cmF0aW9uKHRyYWNrSW5mby5kdXJhdGlvbikgfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2Utc2VjdGlvbi1ibHVyIGNvbC1hbGwgcS1tdC1sZyByb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBxLXB0LW1kXCI+XG4gICAgICAgICAgPHEtYnRuIGZhYiBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkUGxheUFycm93XCIgY29sb3I9XCJibGFja1wiIHRleHQtY29sb3I9XCJ3aGl0ZVwiIEBjbGljaz1cInBsYXlUcmFja1wiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5QbGF5PC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkU3RhckJvcmRlclwiPlxuICAgICAgICAgICAgPHEtdG9vbHRpcD5TYXZlPC9xLXRvb2x0aXA+XG4gICAgICAgICAgPC9xLWJ0bj5cblxuICAgICAgICAgIDxxLWJ0biBmYWIgZmxhdCBjbGFzcz1cInEtbXgtbWRcIiByb3VuZCA6aWNvbj1cIm91dGxpbmVkTW9yZUhvcml6XCI+XG4gICAgICAgICAgICA8cS10b29sdGlwPk1vcmU8L3EtdG9vbHRpcD5cbiAgICAgICAgICA8L3EtYnRuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtcHQtbWQgcS1weC1tZFwiPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICA8QWxidW1DYXJkTG9uZyA6YWxidW0taW5mbz1cImFsYnVtSW5mb1wiPjwvQWxidW1DYXJkTG9uZz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIHEtbXktbGdcIj5cbiAgICAgICAgICAgICAgPHEtc2VwYXJhdG9yPjwvcS1zZXBhcmF0b3I+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1oNVwiPlxuICAgICAgICAgICAgICAgIE1vcmUgRnJvbSB7eyBhbGJ1bUluZm8uYWxidW1BcnRpc3RbMF0ubmFtZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHEtc2Nyb2xsLWFyZWEgY2xhc3M9XCJmdWxsLXdpZHRoXCIgc3R5bGU9XCJoZWlnaHQ6IDM1MHB4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBuby13cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8QWxidW1DYXJkIHYtZm9yPVwiKGFsYnVtLCBpbmRleCkgaW4gYXJ0aXN0UmVjb21tZW5kXCIgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsYnVtLWluZm89XCJhbGJ1bVwiPlxuICAgICAgICAgICAgICAgICAgPC9BbGJ1bUNhcmQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvcS1zY3JvbGwtYXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3EtcGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnUGFnZU5hbWUnXG59KVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge1xuICBvdXRsaW5lZFBsYXlBcnJvdyxcbiAgb3V0bGluZWRNb3JlSG9yaXosXG4gIG91dGxpbmVkU3RhckJvcmRlclxufSBmcm9tICdAcXVhc2FyL2V4dHJhcy9tYXRlcmlhbC1pY29ucy1vdXRsaW5lZCc7XG5cblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQge0FsYnVtQXBpLCBDaXJjbGVBcGl9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IEFsYnVtUmVhZER0bywgVHJhY2tSZWFkRHRvLCBPcmlnaW5hbFRyYWNrUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7IGNvbXB1dGVkLCBvbk1vdW50ZWQsIG9uVXBkYXRlZCwgcmVmIH0gZnJvbSAndnVlJztcbmltcG9ydCB7Zm9ybWF0RHVyYXRpb24sIHN1bUR1cmF0aW9uc30gZnJvbSAnc3JjL3V0aWxzL2R1cmF0aW9uVXRpbHMnO1xuaW1wb3J0IHtBcGlDb25maWdQcm92aWRlcn0gZnJvbSAnc3JjL3V0aWxzL0FwaUNvbmZpZ1Byb3ZpZGVyJztcbmltcG9ydCB7dXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZX0gZnJvbSBcInN0b3Jlcy9wYWdlQ29udGFpbmVyQmdcIjtcbmltcG9ydCB7UXVldWVDb250cm9sbGVyfSBmcm9tIFwic3JjL3V0aWxzL1F1ZXVlQ29udHJvbGxlclwiO1xuaW1wb3J0IEFsYnVtQ2FyZExvbmcgZnJvbSBcImNvbXBvbmVudHMvQWxidW1DYXJkTG9uZy52dWVcIjtcbmltcG9ydCB7dXNlUXVhc2FyfSBmcm9tIFwicXVhc2FyXCI7XG5pbXBvcnQgQWxidW1DYXJkIGZyb20gXCJjb21wb25lbnRzL0FsYnVtQ2FyZC52dWVcIjtcblxuY29uc3QgcSA9IHVzZVF1YXNhcigpO1xuXG5jb25zdCBzb25nUXVldWUgPSBRdWV1ZUNvbnRyb2xsZXIuZ2V0SW5zdGFuY2UoKTtcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmNvbnN0IHtzZXRDb2xvcnN9ID0gdXNlUGFnZUNvbnRhaW5lckJnU3R5bGVTdG9yZSgpO1xuXG5jb25zdCBhcGlDb25maWcgPSBBcGlDb25maWdQcm92aWRlci5nZXRJbnN0YW5jZSgpLmdldEFwaUNvbmZpZygpO1xuY29uc3QgdHJhY2tBcGkgPSBuZXcgQWxidW1BcGkoYXBpQ29uZmlnKTtcbmNvbnN0IGFydGlzdEFwaSA9IG5ldyBDaXJjbGVBcGkoYXBpQ29uZmlnKTtcbmNvbnN0IHRyYWNrSW5mbyA9IHJlZjxUcmFja1JlYWREdG8+KCk7XG5jb25zdCBhbGJ1bUluZm8gPSByZWY8QWxidW1SZWFkRHRvPigpO1xuY29uc3QgdHJhY2tMaXN0ID0gcmVmPFRyYWNrUmVhZER0b1tdPigpO1xuY29uc3QgYXJ0aXN0UmVjb21tZW5kID0gcmVmPEFsYnVtUmVhZER0b1tdPigpO1xuXG5jb25zdCBnZXRBbGJ1bUltYWdlID0gY29tcHV0ZWQoKCkgPT4ge1xuICByZXR1cm4gYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybCA9PT0gbnVsbCA/XG4gICAgJ2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzY0MHgzNjAnIDogYWxidW1JbmZvPy52YWx1ZT8udGh1bWJuYWlsPy5tZWRpdW0/LnVybFxufSlcblxuY29uc3QgZ290b0FydGlzdCA9ICgpID0+IHtcbiAgcm91dGVyLnB1c2goeyBuYW1lOiAnYXJ0aXN0JywgcGFyYW1zOiB7IGFydGlzdDogYWxidW1JbmZvLnZhbHVlLmFsYnVtQXJ0aXN0WzBdLm5hbWUgfSB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRUcmFja1BhZ2UodHJhY2tJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIC8vIEZldGNoIHRyYWNrXG4gIHRyYWNrSW5mby52YWx1ZSA9IGF3YWl0IHRyYWNrQXBpLmdldFRyYWNrKHtpZDogdHJhY2tJZH0pO1xuICBhbGJ1bUluZm8udmFsdWUgPSBhd2FpdCB0cmFja0FwaS5nZXRBbGJ1bSh7aWQ6IHRyYWNrSW5mby52YWx1ZT8uYWxidW0/LmlkfSk7XG4gIGFydGlzdFJlY29tbWVuZC52YWx1ZSA9IGF3YWl0IGFydGlzdEFwaS5nZXRDaXJjbGVBbGJ1bXNCeUlkKHtpZDogYWxidW1JbmZvLnZhbHVlPy5hbGJ1bUFydGlzdFswXT8ubmFtZSwgbGltaXQ6IDIwfSk7XG5cbiAgdHJhY2tMaXN0LnZhbHVlID0gYWxidW1JbmZvLnZhbHVlPy50cmFja3M7XG5cbiAgc2V0Q29sb3JzKDxzdHJpbmdbXT5hbGJ1bUluZm8udmFsdWU/LnRodW1ibmFpbD8uY29sb3JzKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcGxheVRyYWNrKGFkZFRvRnJvbnQ9dHJ1ZSwgcGxheUltbWVkaWF0ZWx5PXRydWUpIHtcbiAgYXdhaXQgc29uZ1F1ZXVlLmFkZFRyYWNrVG9RdWV1ZUJ5SWQoPHN0cmluZz4gdHJhY2tJbmZvLnZhbHVlPy5pZCwgYWRkVG9Gcm9udCwgcGxheUltbWVkaWF0ZWx5KTtcbiAgcS5ub3RpZnkoe1xuICAgIHBvc2l0aW9uOiAndG9wJyxcbiAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcbiAgICBtZXNzYWdlOiAnQWRkZWQgdG8gUXVldWUnXG4gIH0pO1xufVxuXG5vbk1vdW50ZWQoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzZXRUcmFja1BhZ2UoPHN0cmluZz5yb3V0ZXIuY3VycmVudFJvdXRlLnZhbHVlLnBhcmFtcy50cmFja0lkKVxufSlcblxub25VcGRhdGVkKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgc2V0VHJhY2tQYWdlKDxzdHJpbmc+cm91dGVyLmN1cnJlbnRSb3V0ZS52YWx1ZS5wYXJhbXMudHJhY2tJZClcbn0pXG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFlQSxNQUFNLFdBQVcsQ0FBRSxZQUFZLFlBQWM7QUFDN0MsTUFBTSxXQUFXO0FBQUEsRUFDZixVQUFVLEVBQUUsUUFBUSxXQUFXLFFBQVEsYUFBYSxLQUFLLFFBQVEsTUFBTSxJQUFLO0FBQUEsRUFDNUUsWUFBWSxFQUFFLFFBQVEs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

import { Q as QImg } from "./QImg.f71d0f96.js";
import { _ as _export_sfc, P as defineComponent, R as useRouter, E as withDirectives, an as Ripple, U as openBlock, V as createBlock, W as withCtx, a2 as createCommentVNode, d as createVNode, Y as createBaseVNode, Z as toDisplayString, X as QCardSection, a1 as QCard } from "./index.18e4bb4c.js";
var AlbumCard_vue_vue_type_style_index_0_lang = "";
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "q-focus-helper cursor-pointer relative-position" }, null, -1);
const _hoisted_2 = { class: "text-subtitle1" };
const _hoisted_3 = { class: "text-subtitle2" };
const __default__ = {
  name: "AlbumCard"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
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
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(QCard, {
        class: "album-card cursor-pointer",
        style: { "width": "245px" },
        onClick: navToAlbum
      }, {
        default: withCtx(() => {
          var _a, _b;
          return [
            _hoisted_1,
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
                createBaseVNode("div", _hoisted_2, toDisplayString(props.albumInfo.albumName._default), 1),
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
var AlbumCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "AlbumCard.vue"]]);
export { AlbumCard as A };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxidW1DYXJkLjdiYWQ2NGFhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BbGJ1bUNhcmQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPCEtLVRPRE86IGRvbid0IGhhcmRjb2RlIGNhcmQgd2lkdGggb3Igc3VtLCBpZGstLT5cbiAgPHEtY2FyZCB2LXJpcHBsZSBjbGFzcz1cImFsYnVtLWNhcmQgY3Vyc29yLXBvaW50ZXJcIiBzdHlsZT1cIndpZHRoOiAyNDVweDtcIiAgQGNsaWNrPVwibmF2VG9BbGJ1bVwiPlxuICAgIDxkaXYgY2xhc3M9XCJxLWZvY3VzLWhlbHBlciBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZS1wb3NpdGlvblwiPlxuICAgIDwvZGl2PlxuICAgIDxxLWltZ1xuICAgICAgdi1pZj1cInByb3BzLmFsYnVtSW5mby50aHVtYm5haWw/Lm1lZGl1bT8udXJsXCJcbiAgICAgIDpzcmM9cHJvcHMuYWxidW1JbmZvLnRodW1ibmFpbC5tZWRpdW0udXJsXG4gICAgICBzdHlsZT1cIndpZHRoOiAyMTBweDsgaGVpZ2h0OiAyMTBweDtcIlxuICAgICAgY2xhc3M9XCJxLW14LW1kIHEtbXQtbWRcIlxuICAgICAgaW1nLWNsYXNzPVwicm91bmRlZC1ib3JkZXJzXCJcbiAgICAgIHJhdGlvPVwiMVwiPlxuICAgIDwvcS1pbWc+XG5cbjwhLS0gICAgPGRpdiBjbGFzcz1cInJvdyBxLXBhLW1kIGp1c3RpZnktc3RhcnRcIj4tLT5cbiAgICA8cS1jYXJkLXNlY3Rpb24+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMVwiPnt7IHByb3BzLmFsYnVtSW5mby5hbGJ1bU5hbWUuX2RlZmF1bHQgfX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXN1YnRpdGxlMlwiPnt7IHByb3BzLmFsYnVtSW5mby5hbGJ1bUFydGlzdFswXS5uYW1lIH19PC9kaXY+XG4gICAgPC9xLWNhcmQtc2VjdGlvbj5cbjwhLS0gICAgPC9kaXY+LS0+XG4gIDwvcS1jYXJkPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBsYW5nPVwidHNcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0FsYnVtQ2FyZCdcbn1cbjwvc2NyaXB0PlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtkZWZpbmVQcm9wc30gZnJvbSAndnVlJztcbmltcG9ydCB7IEFsYnVtUmVhZER0byB9IGZyb20gJ2FwcC9iYWNrZW5kLXNlcnZpY2UtYXBpJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICd2dWUtcm91dGVyJztcblxuLy8gY29uc3QgaG92ZXJpbmcgPSByZWYoZmFsc2UpO1xuXG4vLyB3YXRjaChob3ZlcmluZywgKCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZygnaG92ZXJpbmcgY2hhbmdlZCcpO1xuLy8gfSlcblxuY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbmZ1bmN0aW9uIG5hdlRvQWxidW0oKSB7XG4gIGNvbnN0IGFsYnVtSWQ6IHN0cmluZyA9IDxzdHJpbmc+cHJvcHMuYWxidW1JbmZvLmlkO1xuICByb3V0ZXIucHVzaCh7IG5hbWU6ICdhbGJ1bScsIHBhcmFtczogeyBhbGJ1bUlkOiBhbGJ1bUlkIH0gfSlcbn1cblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wczx7XG4gIGFsYnVtSW5mbzogQWxidW1SZWFkRHRvXG59PigpO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi5hbGJ1bS1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUwKSAhaW1wb3J0YW50O1xufVxuXG4uYWxidW0tY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMzMsMzMsMzMsLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCAxOTMsIDE5MywgMC40KSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciwgMjAwbXMgbGluZWFyICFpbXBvcnRhbnQ7XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQXlCQSxNQUFlLGNBQUE7QUFBQSxFQUNiLE1BQU07QUFDUjs7Ozs7Ozs7QUFjQSxVQUFNLFNBQVM7QUFFZixhQUFTLGFBQWE7QUFDZCxZQUFBLFVBQTBCLE1BQU0sVUFBVTtBQUN6QyxhQUFBLEtBQUssRUFBRSxNQUFNLFNBQVMsUUFBUSxFQUFFLFdBQW9CO0FBQUEsSUFDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=

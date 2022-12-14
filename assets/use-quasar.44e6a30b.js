import { z as createDirective, aU as getPortalProxy, aV as closePortals, aK as isKeyCode, i as inject, aW as quasarKey } from "./index.e1084ec4.js";
function getDepth(value) {
  if (value === false) {
    return 0;
  }
  if (value === true || value === void 0) {
    return 1;
  }
  const depth = parseInt(value, 10);
  return isNaN(depth) ? 0 : depth;
}
var ClosePopup = createDirective(
  {
    name: "close-popup",
    beforeMount(el, { value }) {
      const ctx = {
        depth: getDepth(value),
        handler(evt) {
          ctx.depth !== 0 && setTimeout(() => {
            const proxy = getPortalProxy(el);
            if (proxy !== void 0) {
              closePortals(proxy, evt, ctx.depth);
            }
          });
        },
        handlerKey(evt) {
          isKeyCode(evt, 13) === true && ctx.handler(evt);
        }
      };
      el.__qclosepopup = ctx;
      el.addEventListener("click", ctx.handler);
      el.addEventListener("keyup", ctx.handlerKey);
    },
    updated(el, { value, oldValue }) {
      if (value !== oldValue) {
        el.__qclosepopup.depth = getDepth(value);
      }
    },
    beforeUnmount(el) {
      const ctx = el.__qclosepopup;
      el.removeEventListener("click", ctx.handler);
      el.removeEventListener("keyup", ctx.handlerKey);
      delete el.__qclosepopup;
    }
  }
);
function useQuasar() {
  return inject(quasarKey);
}
export { ClosePopup as C, useQuasar as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlLXF1YXNhci40NGU2YTMwYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvZGlyZWN0aXZlcy9DbG9zZVBvcHVwLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1YXNhci9zcmMvY29tcG9zYWJsZXMvdXNlLXF1YXNhci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGNsb3NlUG9ydGFscywgZ2V0UG9ydGFsUHJveHkgfSBmcm9tICcuLi91dGlscy9wcml2YXRlL3BvcnRhbC5qcydcbmltcG9ydCB7IGlzS2V5Q29kZSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUva2V5LWNvbXBvc2l0aW9uLmpzJ1xuaW1wb3J0IGdldFNTUlByb3BzIGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvbm9vcC1zc3ItZGlyZWN0aXZlLXRyYW5zZm9ybS5qcydcblxuLypcbiAqIGRlcHRoXG4gKiAgIDwgMCAgLS0+IGNsb3NlIGFsbCBjaGFpblxuICogICAwICAgIC0tPiBkaXNhYmxlZFxuICogICA+IDAgIC0tPiBjbG9zZSBjaGFpbiB1cCB0byBOIHBhcmVudFxuICovXG5cbmZ1bmN0aW9uIGdldERlcHRoICh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuICBpZiAodmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IHZvaWQgMCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBjb25zdCBkZXB0aCA9IHBhcnNlSW50KHZhbHVlLCAxMClcbiAgcmV0dXJuIGlzTmFOKGRlcHRoKSA/IDAgOiBkZXB0aFxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEaXJlY3RpdmUoX19RVUFTQVJfU1NSX1NFUlZFUl9fXG4gID8geyBuYW1lOiAnY2xvc2UtcG9wdXAnLCBnZXRTU1JQcm9wcyB9XG4gIDoge1xuICAgICAgbmFtZTogJ2Nsb3NlLXBvcHVwJyxcblxuICAgICAgYmVmb3JlTW91bnQgKGVsLCB7IHZhbHVlIH0pIHtcbiAgICAgICAgY29uc3QgY3R4ID0ge1xuICAgICAgICAgIGRlcHRoOiBnZXREZXB0aCh2YWx1ZSksXG5cbiAgICAgICAgICBoYW5kbGVyIChldnQpIHtcbiAgICAgICAgICAgIC8vIGFsbG93IEBjbGljayB0byBiZSBlbWl0dGVkXG4gICAgICAgICAgICBjdHguZGVwdGggIT09IDAgJiYgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByb3h5ID0gZ2V0UG9ydGFsUHJveHkoZWwpXG4gICAgICAgICAgICAgIGlmIChwcm94eSAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VQb3J0YWxzKHByb3h5LCBldnQsIGN0eC5kZXB0aClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgaGFuZGxlcktleSAoZXZ0KSB7XG4gICAgICAgICAgICBpc0tleUNvZGUoZXZ0LCAxMykgPT09IHRydWUgJiYgY3R4LmhhbmRsZXIoZXZ0KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVsLl9fcWNsb3NlcG9wdXAgPSBjdHhcblxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGN0eC5oYW5kbGVyKVxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGN0eC5oYW5kbGVyS2V5KVxuICAgICAgfSxcblxuICAgICAgdXBkYXRlZCAoZWwsIHsgdmFsdWUsIG9sZFZhbHVlIH0pIHtcbiAgICAgICAgaWYgKHZhbHVlICE9PSBvbGRWYWx1ZSkge1xuICAgICAgICAgIGVsLl9fcWNsb3NlcG9wdXAuZGVwdGggPSBnZXREZXB0aCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgYmVmb3JlVW5tb3VudCAoZWwpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gZWwuX19xY2xvc2Vwb3B1cFxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGN0eC5oYW5kbGVyKVxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGN0eC5oYW5kbGVyS2V5KVxuICAgICAgICBkZWxldGUgZWwuX19xY2xvc2Vwb3B1cFxuICAgICAgfVxuICAgIH1cbilcbiIsImltcG9ydCB7IGluamVjdCB9IGZyb20gJ3Z1ZSdcbmltcG9ydCB7IHF1YXNhcktleSB9IGZyb20gJy4uL3V0aWxzL3ByaXZhdGUvc3ltYm9scy5qcydcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSAkcSBpbnN0YW5jZS5cbiAqIEVxdWl2YWxlbnQgdG8gYHRoaXMuJHFgIGluc2lkZSB0ZW1wbGF0ZXMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVF1YXNhciAoKSB7XG4gIHJldHVybiBpbmplY3QocXVhc2FyS2V5KVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFZQSxTQUFTLFNBQVUsT0FBTztBQUN4QixNQUFJLFVBQVUsT0FBTztBQUNuQixXQUFPO0FBQUEsRUFDUjtBQUNELE1BQUksVUFBVSxRQUFRLFVBQVUsUUFBUTtBQUN0QyxXQUFPO0FBQUEsRUFDUjtBQUVELFFBQU0sUUFBUSxTQUFTLE9BQU8sRUFBRTtBQUNoQyxTQUFPLE1BQU0sS0FBSyxJQUFJLElBQUk7QUFDNUI7QUFFQSxJQUFBLGFBQWU7QUFBQSxFQUVYO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFFTixZQUFhLElBQUksRUFBRSxTQUFTO0FBQzFCLFlBQU0sTUFBTTtBQUFBLFFBQ1YsT0FBTyxTQUFTLEtBQUs7QUFBQSxRQUVyQixRQUFTLEtBQUs7QUFFWixjQUFJLFVBQVUsS0FBSyxXQUFXLE1BQU07QUFDbEMsa0JBQU0sUUFBUSxlQUFlLEVBQUU7QUFDL0IsZ0JBQUksVUFBVSxRQUFRO0FBQ3BCLDJCQUFhLE9BQU8sS0FBSyxJQUFJLEtBQUs7QUFBQSxZQUNuQztBQUFBLFVBQ2YsQ0FBYTtBQUFBLFFBQ0Y7QUFBQSxRQUVELFdBQVksS0FBSztBQUNmLG9CQUFVLEtBQUssRUFBRSxNQUFNLFFBQVEsSUFBSSxRQUFRLEdBQUc7QUFBQSxRQUMvQztBQUFBLE1BQ0Y7QUFFRCxTQUFHLGdCQUFnQjtBQUVuQixTQUFHLGlCQUFpQixTQUFTLElBQUksT0FBTztBQUN4QyxTQUFHLGlCQUFpQixTQUFTLElBQUksVUFBVTtBQUFBLElBQzVDO0FBQUEsSUFFRCxRQUFTLElBQUksRUFBRSxPQUFPLFNBQVEsR0FBSTtBQUNoQyxVQUFJLFVBQVUsVUFBVTtBQUN0QixXQUFHLGNBQWMsUUFBUSxTQUFTLEtBQUs7QUFBQSxNQUN4QztBQUFBLElBQ0Y7QUFBQSxJQUVELGNBQWUsSUFBSTtBQUNqQixZQUFNLE1BQU0sR0FBRztBQUNmLFNBQUcsb0JBQW9CLFNBQVMsSUFBSSxPQUFPO0FBQzNDLFNBQUcsb0JBQW9CLFNBQVMsSUFBSSxVQUFVO0FBQzlDLGFBQU8sR0FBRztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQ0w7QUM1RGUsU0FBUyxZQUFhO0FBQ25DLFNBQU8sT0FBTyxTQUFTO0FBQ3pCOzsifQ==

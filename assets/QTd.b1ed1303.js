import { j as createComponent, c as computed, h, k as hSlot, g as getCurrentInstance } from "./index.e1084ec4.js";
var QTd = createComponent({
  name: "QTd",
  props: {
    props: Object,
    autoWidth: Boolean,
    noHover: Boolean
  },
  setup(props, { slots }) {
    const vm = getCurrentInstance();
    const classes = computed(
      () => "q-td" + (props.autoWidth === true ? " q-table--col-auto-width" : "") + (props.noHover === true ? " q-td--no-hover" : "") + " "
    );
    return () => {
      if (props.props === void 0) {
        return h("td", { class: classes.value }, hSlot(slots.default));
      }
      const name = vm.vnode.key;
      const col = (props.props.colsMap !== void 0 ? props.props.colsMap[name] : null) || props.props.col;
      if (col === void 0) {
        return;
      }
      const { row } = props.props;
      return h("td", {
        class: classes.value + col.__tdClass(row),
        style: col.__tdStyle(row)
      }, hSlot(slots.default));
    };
  }
});
export { QTd as Q };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUVRkLmIxZWQxMzAzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcXVhc2FyL3NyYy9jb21wb25lbnRzL3RhYmxlL1FUZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoLCBjb21wdXRlZCwgZ2V0Q3VycmVudEluc3RhbmNlIH0gZnJvbSAndnVlJ1xuXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi91dGlscy9wcml2YXRlL2NyZWF0ZS5qcydcbmltcG9ydCB7IGhTbG90IH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJpdmF0ZS9yZW5kZXIuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdRVGQnLFxuXG4gIHByb3BzOiB7XG4gICAgcHJvcHM6IE9iamVjdCxcbiAgICBhdXRvV2lkdGg6IEJvb2xlYW4sXG4gICAgbm9Ib3ZlcjogQm9vbGVhblxuICB9LFxuXG4gIHNldHVwIChwcm9wcywgeyBzbG90cyB9KSB7XG4gICAgY29uc3Qgdm0gPSBnZXRDdXJyZW50SW5zdGFuY2UoKVxuICAgIGNvbnN0IGNsYXNzZXMgPSBjb21wdXRlZCgoKSA9PlxuICAgICAgJ3EtdGQnICsgKHByb3BzLmF1dG9XaWR0aCA9PT0gdHJ1ZSA/ICcgcS10YWJsZS0tY29sLWF1dG8td2lkdGgnIDogJycpXG4gICAgICArIChwcm9wcy5ub0hvdmVyID09PSB0cnVlID8gJyBxLXRkLS1uby1ob3ZlcicgOiAnJylcbiAgICAgICsgJyAnXG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChwcm9wcy5wcm9wcyA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBoKCd0ZCcsIHsgY2xhc3M6IGNsYXNzZXMudmFsdWUgfSwgaFNsb3Qoc2xvdHMuZGVmYXVsdCkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5hbWUgPSB2bS52bm9kZS5rZXlcbiAgICAgIGNvbnN0IGNvbCA9IChcbiAgICAgICAgKHByb3BzLnByb3BzLmNvbHNNYXAgIT09IHZvaWQgMCA/IHByb3BzLnByb3BzLmNvbHNNYXBbIG5hbWUgXSA6IG51bGwpXG4gICAgICAgIHx8IHByb3BzLnByb3BzLmNvbFxuICAgICAgKVxuXG4gICAgICBpZiAoY29sID09PSB2b2lkIDApIHsgcmV0dXJuIH1cblxuICAgICAgY29uc3QgeyByb3cgfSA9IHByb3BzLnByb3BzXG5cbiAgICAgIHJldHVybiBoKCd0ZCcsIHtcbiAgICAgICAgY2xhc3M6IGNsYXNzZXMudmFsdWUgKyBjb2wuX190ZENsYXNzKHJvdyksXG4gICAgICAgIHN0eWxlOiBjb2wuX190ZFN0eWxlKHJvdylcbiAgICAgIH0sIGhTbG90KHNsb3RzLmRlZmF1bHQpKVxuICAgIH1cbiAgfVxufSlcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsSUFBQSxNQUFlLGdCQUFnQjtBQUFBLEVBQzdCLE1BQU07QUFBQSxFQUVOLE9BQU87QUFBQSxJQUNMLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxFQUNWO0FBQUEsRUFFRCxNQUFPLE9BQU8sRUFBRSxTQUFTO0FBQ3ZCLFVBQU0sS0FBSyxtQkFBb0I7QUFDL0IsVUFBTSxVQUFVO0FBQUEsTUFBUyxNQUN2QixVQUFVLE1BQU0sY0FBYyxPQUFPLDZCQUE2QixPQUMvRCxNQUFNLFlBQVksT0FBTyxvQkFBb0IsTUFDOUM7QUFBQSxJQUNIO0FBRUQsV0FBTyxNQUFNO0FBQ1gsVUFBSSxNQUFNLFVBQVUsUUFBUTtBQUMxQixlQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sUUFBUSxNQUFLLEdBQUksTUFBTSxNQUFNLE9BQU8sQ0FBQztBQUFBLE1BQzlEO0FBRUQsWUFBTSxPQUFPLEdBQUcsTUFBTTtBQUN0QixZQUFNLE9BQ0gsTUFBTSxNQUFNLFlBQVksU0FBUyxNQUFNLE1BQU0sUUFBUyxRQUFTLFNBQzdELE1BQU0sTUFBTTtBQUdqQixVQUFJLFFBQVEsUUFBUTtBQUFFO0FBQUEsTUFBUTtBQUU5QixZQUFNLEVBQUUsUUFBUSxNQUFNO0FBRXRCLGFBQU8sRUFBRSxNQUFNO0FBQUEsUUFDYixPQUFPLFFBQVEsUUFBUSxJQUFJLFVBQVUsR0FBRztBQUFBLFFBQ3hDLE9BQU8sSUFBSSxVQUFVLEdBQUc7QUFBQSxNQUNoQyxHQUFTLE1BQU0sTUFBTSxPQUFPLENBQUM7QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFDSCxDQUFDOzsifQ==

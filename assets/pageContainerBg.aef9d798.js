import { ad as defineStore } from "./index.47bc951f.js";
const usePageContainerBgStyleStore = defineStore("pageContainerBgStyleStore", {
  state: () => ({
    gradient1: "000000FF",
    gradient2: "000000FF"
  }),
  actions: {
    setColors(color) {
      this.gradient1 = color[0];
      this.gradient2 = color[1];
    }
  },
  getters: {
    getGradient1: (state) => {
      return `#${state.gradient1}`;
    },
    getGradient2: (state) => {
      return `#${state.gradient2}`;
    }
  }
});
export { usePageContainerBgStyleStore as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUNvbnRhaW5lckJnLmFlZjlkNzk4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc3RvcmVzL3BhZ2VDb250YWluZXJCZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWZpbmVTdG9yZSB9IGZyb20gJ3BpbmlhJztcbmltcG9ydCB7c3RhdH0gZnJvbSBcImZzXCI7XG5cbmV4cG9ydCBjb25zdCB1c2VQYWdlQ29udGFpbmVyQmdTdHlsZVN0b3JlID0gZGVmaW5lU3RvcmUoJ3BhZ2VDb250YWluZXJCZ1N0eWxlU3RvcmUnLCB7XG4gIHN0YXRlOiAoKSA9PiAoe1xuICAgIGdyYWRpZW50MTogJzAwMDAwMEZGJyxcbiAgICBncmFkaWVudDI6ICcwMDAwMDBGRidcbiAgfSksXG5cbiAgYWN0aW9uczoge1xuICAgIHNldENvbG9ycyhjb2xvcjogc3RyaW5nW10pIHtcbiAgICAgIHRoaXMuZ3JhZGllbnQxID0gY29sb3JbMF07XG4gICAgICB0aGlzLmdyYWRpZW50MiA9IGNvbG9yWzFdO1xuICAgIH1cbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIGdldEdyYWRpZW50MTogKHN0YXRlKSA9PiB7XG4gICAgICByZXR1cm4gYCMke3N0YXRlLmdyYWRpZW50MX1gO1xuICAgIH0sXG4gICAgZ2V0R3JhZGllbnQyOiAoc3RhdGUpID0+IHtcbiAgICAgIHJldHVybiBgIyR7c3RhdGUuZ3JhZGllbnQyfWA7XG4gICAgfVxuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR2EsTUFBQSwrQkFBK0IsWUFBWSw2QkFBNkI7QUFBQSxFQUNuRixPQUFPLE9BQU87QUFBQSxJQUNaLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxFQUFBO0FBQUEsRUFHYixTQUFTO0FBQUEsSUFDUCxVQUFVLE9BQWlCO0FBQ3pCLFdBQUssWUFBWSxNQUFNO0FBQ3ZCLFdBQUssWUFBWSxNQUFNO0FBQUEsSUFDekI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxjQUFjLENBQUMsVUFBVTtBQUN2QixhQUFPLElBQUksTUFBTTtBQUFBLElBQ25CO0FBQUEsSUFDQSxjQUFjLENBQUMsVUFBVTtBQUN2QixhQUFPLElBQUksTUFBTTtBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUNGLENBQUM7OyJ9

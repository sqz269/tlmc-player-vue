import { defineStore } from 'pinia';
import {stat} from "fs";

export const usePageContainerBgStyleStore = defineStore('pageContainerBgStyleStore', {
  state: () => ({
    gradient1: '000000FF',
    gradient2: '000000FF'
  }),

  actions: {
    setColors(color: string[]) {
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

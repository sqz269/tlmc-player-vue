import { defineStore } from 'pinia';

export const useQueueDisplayStore = defineStore('queueDisplay', {
  state: () => ({
    show: true
  }),

  actions: {
    open () {
      this.show = true;
    },

    close() {
      this.show = false;
    },

    toggle() {
      this.show = !this.show;
    }
  }
});

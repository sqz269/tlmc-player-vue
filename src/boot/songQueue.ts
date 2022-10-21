import { boot } from 'quasar/wrappers'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {QueueController} from 'src/utils/QueueController';
import app from 'src/App.vue';
import {mediaSessionController} from "boot/mediaSession";

const queueController = new QueueController();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.queueController = queueController;

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  app.config.globalProperties.$queueControl = queueController;
})

export {
  queueController
}

import { boot } from 'quasar/wrappers'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {QueueController} from 'src/utils/QueueController';
import app from 'src/App.vue';

const queueController = new QueueController();

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  app.config.globalProperties.$queueControl = queueController;
})

export {
  queueController
}

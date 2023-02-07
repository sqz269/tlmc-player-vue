import { boot } from 'quasar/wrappers'
import {AudioEvents, QueueEvents} from "src/utils/Events";
import {createEventBus} from "ts-event-bus";
import * as events from "events";

const queueEvents = createEventBus({events: QueueEvents});
const audioEvents = createEventBus({events: AudioEvents});

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app}) => {
  // something to do
  app.config.globalProperties.$queueEvents = queueEvents;
  app.config.globalProperties.$audioEvents = audioEvents;
})

export { queueEvents, audioEvents }

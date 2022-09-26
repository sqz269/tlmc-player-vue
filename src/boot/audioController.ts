import { boot } from 'quasar/wrappers'
import {AudioController} from 'src/utils/AudioController';

const audioController = new AudioController();

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app}) => {
  // something to do
  app.config.globalProperties.$audioController = audioController;
})

export { audioController }

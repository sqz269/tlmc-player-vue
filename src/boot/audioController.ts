import { boot } from 'quasar/wrappers'
import AudioControllerHls from "src/AudioControllers/AudioControllerHls";
import MediaSessionController from "src/AudioControllers/MediaSessionController";

const audioController = AudioControllerHls.Instance;
const mediaSessionController = MediaSessionController.Instance;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.audioController = audioController;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.mediaSessionController = mediaSessionController;

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app}) => {
  // something to do
  app.config.globalProperties.$audioController = audioController;
})

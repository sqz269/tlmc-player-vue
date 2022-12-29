import { boot } from 'quasar/wrappers'
import {AudioController} from 'src/utils/AudioController';
import {AuthController} from "src/auth/AuthController";

const authController = new AuthController();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.authController = authController;

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app}) => {
  // something to do
  app.config.globalProperties.$audioController = authController;
})

export { authController }

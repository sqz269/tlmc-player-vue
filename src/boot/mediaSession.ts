import { boot } from 'quasar/wrappers'

import {MediaSessionController} from 'src/utils/MediaSessionController'

const mediaSessionController = new MediaSessionController();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.mediaSessionController = mediaSessionController;


// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
})

export {
  mediaSessionController
}

import { boot } from 'quasar/wrappers'

import {Configuration} from "app/backend-service-api";
import {AuthMiddleware} from "src/auth/AuthMiddleware";

const apiConfig = new Configuration({
  // basePath: 'http://10.8.0.1:30007',
  // basePath: 'http://nms.testing.internal.com',
  basePath: 'http://192.168.29.117:31168',
  // basePath: 'https://music.marisad.me'
  // basePath: 'http://localhost:5217'
  middleware: [
    new AuthMiddleware()
  ]
});

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app}) => {
  // something to do
  // app.config.globalProperties.$musicApi = apiConfig
})

export { apiConfig }

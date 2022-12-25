import { boot } from 'quasar/wrappers'

import {Configuration} from "app/backend-service-api";

const BASE_PATH = 'http://192.168.29.117:31168';

const apiConfig = new Configuration({
  // basePath: 'http://10.8.0.1:30007',
  basePath: BASE_PATH
  // basePath: 'https://music.marisad.me'
  // basePath: 'http://localhost:5217'
});

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app}) => {
  // something to do
  // app.config.globalProperties.$musicApi = apiConfig
})

export { apiConfig }

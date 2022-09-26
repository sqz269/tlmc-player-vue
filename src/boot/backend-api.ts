import { boot } from 'quasar/wrappers'
import {AlbumApi, Configuration} from 'app/music-data-service-api';

const apiConfig = new Configuration({
  basePath: 'http://staging.internal.com:30007',
  // basePath: 'http://localhost:1172'
})

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app}) => {
  // something to do
  app.config.globalProperties.$musicApi = apiConfig
})

export { apiConfig }

import { boot } from 'quasar/wrappers'
import { Configuration } from 'app/music-data-service-api';

const apiConfig = new Configuration({
  // basePath: 'http://10.8.0.1:30007',
  // basePath: 'http://192.168.88.252:30162'
  basePath: 'https://music.marisad.me'
  // basePath: 'http://localhost:1172'
})

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app}) => {
  // something to do
  app.config.globalProperties.$musicApi = apiConfig
})

export { apiConfig }

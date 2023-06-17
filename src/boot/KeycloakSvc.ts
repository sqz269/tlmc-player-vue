import {boot} from 'quasar/wrappers'
import {KeycloakController} from "src/utils/KeycloakController";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app}) => {
  window.$keycloak = KeycloakController.Instance;
})

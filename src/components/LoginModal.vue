<template>
  <q-dialog
    v-model="show"

    transition-show="fade"
    transition-hide="fade"
    position="top"
  >
    <q-card bordered class="q-mt-lg" style="width: 700px; max-width: 80vw; background-color: rgba(66,66,66,0.97); ">
      <q-card-section>
        <div class="text-h5">Login</div>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <div class="q-pa-md">

          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              outlined
              color="white"
              v-model="username"
              label="Username"
            />

            <q-input
              outlined
              color="white"
              type="password"
              v-model="password"
              label="Password"
            />

            <div>
              <q-btn label="Login" type="submit" class="full-width" size="lg" style="background-color: rgba(255,255,255,0.2)"/>
            </div>
            <q-separator></q-separator>

            <div class="full-height text-center">
              Don't have an account? <a @click="showRegisterDialog" style="text-decoration: underline; cursor: pointer;">Create Account</a>
            </div>
          </q-form>

        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'LoginModal'
});
</script>

<script lang="ts" setup>
import {ref} from 'vue';
import {useQuasar} from 'quasar';
import RegistrationModal from 'components/RegistrationModal.vue';
import {LoginRequest, LoginResult, ProblemDetails, UserApi} from 'app/backend-service-api';
import {useAuthStore} from 'stores/authDataStore';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';

const { setAuthFromLoginResult } = useAuthStore();

const show = ref(false);

const apiConfig = ApiConfigProvider.getInstance().getApiConfig(false);
const userApi = new UserApi(apiConfig);

const onSubmit = (evt: SubmitEvent | Event) => {
  evt.preventDefault();

  const payload: LoginRequest = {
    userCredentialsDto: {
      userName: username.value,
      password: password.value
    }
  };

  userApi.login(payload)
    .then((result: LoginResult) => {
      $q.notify({
        message: 'Logged in',
        color: 'positive',
        position: 'top',
        timeout: 7000
      });

      setAuthFromLoginResult(result);

      show.value = false;
    })
    .catch((result) => result.response.json().then((r: ProblemDetails) => {
      $q.notify({
        message: r.detail!,
        color: 'negative',
        position: 'top',
        caption: 'Error when logging in',
        timeout: 7000
      });
    }));
};

const username = ref();
const password = ref();

const $q = useQuasar();

const showRegisterDialog = () => {
  $q.dialog({
    component: RegistrationModal
  });
}
</script>

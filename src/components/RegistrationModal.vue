<template>
  <q-dialog
    transition-show="fade"
    transition-hide="fade"
    position="top"

    v-model="show"
  >
    <q-card bordered class="q-mt-lg" style="width: 700px; max-width: 80vw; background-color: rgba(66,66,66,0.97); ">
      <q-card-section>
        <div class="text-h5">Create Account</div>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <div class="q-pa-md">

          <q-form
            @submit="onSubmit"
            class="q-gutter-md"
          >
            <q-input
              dark
              outlined
              color="white"

              name="username"
              v-model="username"
              label="Username"
              hint="4-16 Alphanumeric Characters"

              lazy-rules
              :rules="[
                val => {
                  if (val.length < 4 || val.length > 16)
                    { return 'Username must be between 4-16 characters'}
                  else if (!usernameValidator.test(val))
                    { return 'Username must only consist of Alphanumeric characters' }
                  return true;
              } ]"
            />

            <q-input
              dark
              outlined
              color="white"
              type="password"

              name="password"
              v-model="password"
              label="Password"
              hint="Between 6 - 64 characters"

              lazy-rules
              :rules="[ val => passwordValidator.test(val) || 'Password must be between 6 - 64 characters' ]"
            />

            <q-input
              dark
              outlined
              color="white"

              type="password"
              v-model="passwordRepeat"
              label="Password (Repeat)"

              lazy-rules
              :rules="[ val => val === password || 'Password does not match' ]"
            />

            <div>
              <q-btn label="Create Account" type="submit" class="full-width bg-black-a-75" size="lg"/>
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
  name: 'RegistrationModal'
});
</script>

<script lang="ts" setup>
import {ref} from 'vue';
import {UserApi, RegisterRequest, ProblemDetails} from 'app/backend-service-api';
import {QDialog, useQuasar} from 'quasar';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import LoginModal from "components/LoginModal.vue";

const props = defineProps<{
  showLogin: boolean
}>();

const show = ref(false);

const apiConfig = ApiConfigProvider.getInstance().getApiConfig(false);
const userApi = new UserApi(apiConfig);
const $q = useQuasar();

const onSubmit = (evt: SubmitEvent) => {
  evt.preventDefault();

  const payload: RegisterRequest = {
    userCredentialsDto: {
      userName: username.value,
      password: password.value
    }
  };

  userApi.register(payload)
    .then((result) => {
      $q.notify({
        message: 'Account Created',
        color: 'positive',
        position: 'top',
        timeout: 7000
      });
      if (props.showLogin) {
        $q.dialog({
          component: LoginModal
        });
      }
      show.value = false;
    })
    .catch((result) => result.response.json().then((r: ProblemDetails) => {
      $q.notify({
        message: r.detail!,
        color: 'negative',
        position: 'top',
        caption: 'Error when creating an account',
        timeout: 7000
      });
      if (props.showLogin) {
        $q.dialog({
          component: LoginModal
        });
      }
      show.value = false;
    }));
};

const usernameValidator = new RegExp('^[A-Za-z\\d\\-_.]{4,16}$');
const passwordValidator = new RegExp('^.{6,64}$');

const username = ref();
const password = ref();
const passwordRepeat = ref();
</script>

<template>
  <q-dialog
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
              <q-btn label="Login" type="submit" class="full-width" size="lg" style="background-color: rgba(255,255,255,0.32)"/>
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

const onSubmit = ref();

const username = ref();
const password = ref();

const $q = useQuasar();

const showRegisterDialog = () => {
  $q.dialog({
    component: RegistrationModal
  });
}
</script>

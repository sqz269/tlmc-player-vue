<template>
  <q-dialog
    transition-show="fade"
    transition-hide="fade"
    position="top"
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
              :rules="[ val => val === password || 'Password does no\'t match' ]"
            />

            <div>
              <q-btn label="Create Account" type="submit" class="full-width" size="lg" style="background-color: rgba(255,255,255,0.32)"/>
            </div>
          </q-form>

        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'RegistrationModal'
});
</script>

<script lang="ts" setup>
import {ref} from "vue";

const onSubmit = ref();

const usernameValidator = new RegExp('^[A-Za-z\\d\\-_.]{4,16}$');
const passwordValidator = new RegExp('^.{6,64}$');

const username = ref();
const password = ref();
const passwordRepeat = ref();
</script>

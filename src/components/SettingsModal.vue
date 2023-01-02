<template>
  <q-dialog
    transition-show="fade"
    transition-hide="fade"
    position="top"
  >
    <q-card bordered class="q-mt-lg" style="width: 700px; max-width: 80vw; background-color: rgba(66,66,66,0.97); ">
      <q-card-section>
        <div class="text-h5">Settings</div>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <div class="q-pa-md">
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SettingsModal'
});
</script>

<script lang="ts" setup>
import {ref} from 'vue';
import {useQuasar} from 'quasar';
import RegistrationModal from 'components/RegistrationModal.vue';

const show = ref(false);
const $q = useQuasar();

</script>

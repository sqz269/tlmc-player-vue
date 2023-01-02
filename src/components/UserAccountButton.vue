<template>
  <div class="q-mx-md">
    <div>
      <q-btn v-if="!isLoggedInReactive" @click="showLoginDialog" outline text-color="white" label="Login" size="md" style="width: 100px" />
    </div>

    <q-btn-dropdown v-if="isLoggedInReactive" rounded :label="getUsername" style="width: 150px">
      <q-list>
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Account</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-md" />

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts" setup>
import LoginModal from 'components/LoginModal.vue'
import {useQuasar} from "quasar";
import {useAuthStore} from "stores/authDataStore";
import {computed} from "vue";
import {storeToRefs} from "pinia";

const { isLoggedIn, getUsername } = useAuthStore();

const isLoggedInReactive = computed(() => isLoggedIn);

const $q = useQuasar();
const showLoginDialog = () => {
  $q.dialog({
    component: LoginModal
  });
}
</script>

<style scoped>

</style>

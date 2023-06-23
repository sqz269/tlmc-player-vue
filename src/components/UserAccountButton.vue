<template>
  <div class="q-mx-md">
    <div>
      <q-btn v-if="!isLoggedInReactive" @click="login" outline text-color="white" label="Login" size="md" style="width: 100px" />
    </div>

    <q-btn-dropdown v-if="isLoggedInReactive" rounded :label="usernameReactive">
      <q-list>
        <q-item clickable v-close-popup @click="modifyAccount">
          <q-item-section>
            <q-item-label>Account</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator class="q-my-sm" />

        <q-item clickable v-close-popup @click="logout">
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-btn-dropdown>
  </div>
</template>

<script lang="ts" setup>
import {useAuthStore} from 'stores/authDataStore';
import {computed} from 'vue';
import {KeycloakController} from "src/utils/KeycloakController";

const authStore = useAuthStore();

const isLoggedInReactive = computed(() => authStore.isAuthenticated);
const usernameReactive = computed(() => authStore.username);

const keycloakController = KeycloakController.Instance;

function login() {
  keycloakController.Login();
}

function modifyAccount() {
  keycloakController.ModifyAccount();
}

function logout() {
  keycloakController.Logout();
}
</script>

<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<script setup lang="ts">
import {onMounted} from 'vue';
import {useAuthStore} from "stores/authDataStore";
import {QueueController} from "src/utils/QueueController";

onMounted(() => {
  let authStore = useAuthStore();
  authStore.loadAuthFromLocalStorage();

  QueueController.getInstance().init();
})
</script>

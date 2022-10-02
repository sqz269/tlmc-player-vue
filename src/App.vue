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
import {queueController} from 'boot/songQueue';

onMounted(() => {
  queueController.init();
})
</script>

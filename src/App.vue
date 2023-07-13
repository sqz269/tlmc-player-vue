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
import {QueueController} from 'src/utils/QueueController';
import {QueueEvents} from "src/utils/Events";
import {queueEvents} from "boot/eventBus";
import MediaSessionController from "src/AudioControllers/MediaSessionController";

let mediaSession: MediaSessionController = MediaSessionController.Instance;

console.log("Binding QueueEvents.currentPlayingChanged");
queueEvents.currentPlayingChanged.on((data) => {
  console.dir(data);
});

onMounted(() => {
  QueueController.getInstance().init();
})
</script>

<template>
  <div>
    <q-list>
      <q-expansion-item
        dense
        label="History"
        default-opened>

        <QueueItem v-for="history in queuedHistory" :key="history.id"
                   :track-info="history" :currently-playing="false"></QueueItem>

        <QueueItem :currently-playing="true" :track-info="currentlyPlaying"></QueueItem>
      </q-expansion-item>

      <q-expansion-item
        dense
        label="Next Up"
        default-opened>
        <QueueItem v-for="future in queuedFuture" :key="future.id"
                   :track-info="future" :currently-playing="false"></QueueItem>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts" setup>
import QueueItem from 'components/QueueItem.vue';
import {queueController} from 'boot/songQueue';
import {computed} from 'vue';

const queuedHistory = computed(() => {
  return queueController.songHistory;
})

const queuedFuture = computed(() => {
  return queueController.queue;
})

const currentlyPlaying = computed(() => {
  return queueController.currentlyPlaying;
})

</script>

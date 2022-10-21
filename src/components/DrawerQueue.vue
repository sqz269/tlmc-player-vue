<template>
  <div>
    <q-list>
      <q-item-label header>Queue</q-item-label>

      <QueueItem v-for="history in queuedHistory" :key="history.id"
                :track-info="history"></QueueItem>

      <QueueItem v-for="future in queuedFuture" :key="future.id"
                 :track-info="future"></QueueItem>
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

</script>

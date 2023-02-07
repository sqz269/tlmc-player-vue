<template>
  <div>
    <q-list>
      <q-expansion-item
        dense
        label="History"
        default-opened>
        <QueueItem v-for="h in history" :key="h.Track.id"
                   :track-info="h.Track" :queue-info="h"
                   :currently-playing="false"></QueueItem>

        <QueueItem v-if="currentlyPlaying" :currently-playing="true"
                   :track-info="currentlyPlaying.Track" :queue-info="currentlyPlaying"></QueueItem>
      </q-expansion-item>

      <q-expansion-item
        dense
        label="Next Up"
        default-opened>
        <QueueItem v-for="future in queue" :key="future.Track.id"
                   :track-info="future.Track" :queue-info="future"
                   :currently-playing="false"></QueueItem>
      </q-expansion-item>
    </q-list>
  </div>
</template>

<script lang="ts" setup>
import QueueItem from 'components/QueueItem.vue';
import {ref} from 'vue';
import {QueuedTrack} from 'src/utils/QueueController';
import {queueEvents} from "boot/eventBus";

const history = ref<QueuedTrack[]>([]);
const queue = ref<QueuedTrack[]>([]);
const currentlyPlaying = ref<QueuedTrack | null>(null);

queueEvents.historyChanged.on(({prev, curr}) => {
  history.value = curr;
});

queueEvents.queueChanged.on(({prev, curr}) => {
  queue.value.length = 0;
  queue.value.push(...curr);
});

queueEvents.currentPlayingChanged.on(({prev, curr}) => {
  currentlyPlaying.value = curr;
});

</script>

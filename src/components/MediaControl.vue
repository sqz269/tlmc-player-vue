<template>
  <div class="row full-width justify-center q-pt-sm">
    <q-btn fab flat size="md" :icon="outlinedSkipPrevious" @click="queueController.playPrevious()">
      <q-tooltip>Previous</q-tooltip>
    </q-btn>

    <q-btn fab class="q-mx-md" round size="md" :icon="paused ? outlinedPlayArrow : outlinedPause" @click="audioController.togglePause()">
      <q-tooltip>{{ audioController.paused ? "Play" : "Pause" }}</q-tooltip>
    </q-btn>

    <q-btn flat fab size="md" :icon="outlinedSkipNext" @click="queueController.playNext()">
      <q-tooltip>Next</q-tooltip>
    </q-btn>
  </div>

  <div class="row full-width q-pt-lg" v-if="songQueue.currentlyPlaying !== undefined">
    <q-item-section side>
      {{ formatDuration(secondsToDuration(currentTime)) }}
    </q-item-section>
    <q-item-section>
      <q-slider v-model="currentTime"
                @pan="onPan"
                @update:model-value="onChange"
                :min="0" :max="totalTime" :step="0.1"
                color="white"/>
    </q-item-section>
    <q-item-section side>
      {{ formatDuration(songQueue.currentlyPlaying.duration) }}
    </q-item-section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'MediaControl'
}
</script>

<script setup lang="ts">
import {
  outlinedPlayArrow,
  outlinedSkipNext,
  outlinedSkipPrevious,
  outlinedPause
} from '@quasar/extras/material-icons-outlined';

import {computed, ref} from 'vue';
import {audioController} from 'boot/audioController';
import {durationToSeconds, formatDuration, secondsToDuration} from 'src/utils/durationUtils';
import {QueueController} from 'src/utils/QueueController';

const currentTime = ref(0);
const songQueue = QueueController.getInstance();
const isPanningProgress = ref(false);
const isUpdating = ref(false);

const queueController = QueueController.getInstance();

queueController.watchCurrentlyPlaying(() => {
  return;
});

const paused = computed(() => {
  return audioController.paused.value;
})

const onPan = (phase: string) => {
  if (phase === 'start') {
    isPanningProgress.value = true;
  }
  else {
    // Seek
    audioController.seek(currentTime.value);

    setTimeout(() => {
      isPanningProgress.value = false;
    }, 0);
  }
}

const onChange = (k: unknown) => {
  isUpdating.value = true;
  audioController.seek(currentTime.value);

  setTimeout(() => {
    isUpdating.value = false;
  }, 0);
}

const totalTime = computed(() => {
  if (songQueue.currentlyPlaying !== undefined) {
    return durationToSeconds(<string>songQueue.currentlyPlaying.duration);
  }

  return -1;
})

audioController.onProgressTick((time) => {
  if (isPanningProgress.value || isUpdating.value)
  {
    return;
  }
  currentTime.value = time;
})
</script>

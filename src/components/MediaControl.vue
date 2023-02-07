<template>
  <div class="row full-width justify-center q-pt-sm">
    <q-btn fab flat size="md" :icon="outlinedSkipPrevious" @click="queueController.playPrevious()">
      <q-tooltip>Previous</q-tooltip>
    </q-btn>

    <q-btn fab class="q-mx-md" round size="md" :icon="paused ? outlinedPlayArrow : outlinedPause" @click="audioController.togglePause()">
      <q-tooltip>{{ paused ? "Play" : "Pause" }}</q-tooltip>
    </q-btn>

    <q-btn flat fab size="md" :icon="outlinedSkipNext" @click="queueController.playNext()">
      <q-tooltip>Next</q-tooltip>
    </q-btn>
  </div>

  <div class="row full-width q-pt-lg" v-if="currentlyPlaying !== null">
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
      {{ formatDuration(currentlyPlaying.Track.duration) }}
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
import {QueueController, QueuedTrack} from 'src/utils/QueueController';
import {audioEvents, queueEvents} from "boot/eventBus";

const currentTime = ref(0);
const isPanningProgress = ref(false);
const isUpdating = ref(false);

const queueController = QueueController.getInstance();

const paused = ref(false);

const currentlyPlaying = ref<QueuedTrack | null>(null);

queueEvents.currentPlayingChanged.on(({prev, curr}) => {
  currentlyPlaying.value = curr;
})

audioEvents.playbackPaused.on(() => {
  paused.value = true
});

audioEvents.playbackResumed.on(() => {
  paused.value = false;
});

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
  if (isPanningProgress.value) {
    return;
  }
  isUpdating.value = true;
  audioController.seek(<number>k);

  setTimeout(() => {
    isUpdating.value = false;
  }, 0);
}

const totalTime = computed(() => {
  if (currentlyPlaying.value !== null) {
    return durationToSeconds(<string>currentlyPlaying.value.Track.duration);
  }

  return -1;
})

audioEvents.playbackProgressed.on(({prev, curr}) => {
  if (isPanningProgress.value || isUpdating.value)
  {
    return;
  }
  currentTime.value = curr;
})
</script>

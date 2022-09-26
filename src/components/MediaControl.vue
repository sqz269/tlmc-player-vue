<template>
  <div class="row full-width justify-center q-pt-sm">
    <q-btn fab flat size="md" :icon="outlinedSkipPrevious">
      <q-tooltip>Previous</q-tooltip>
    </q-btn>

    <q-btn fab class="q-mx-md" round size="md" :icon="outlinedPlayArrow" @click="audioController.togglePause()">
      <q-tooltip>Play</q-tooltip>
    </q-btn>

    <q-btn flat fab size="md" :icon="outlinedSkipNext">
      <q-tooltip>Next</q-tooltip>
    </q-btn>
  </div>

  <div class="row full-width q-pt-lg" v-if="songQueue.currentTrack !== null">
    <q-item-section side>
      {{ formatDuration(secondsToDuration(currentTime)) }}
    </q-item-section>
    <q-item-section>
      <q-slider v-model="currentTime"
                @pan="onPan"
                :min="0" :max="totalTime" :step="0.1"
                color="white"/>
    </q-item-section>
    <q-item-section side>
      {{ formatDuration(songQueue.currentTrack.duration) }}
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
} from '@quasar/extras/material-icons-outlined';

import {TrackReadDto} from 'app/music-data-service-api';
import {computed, ref, watch} from 'vue';
import {useSongQueueStore} from 'stores/songQueue';
import {audioController} from 'boot/audioController';
import {durationToSeconds, formatDuration, secondsToDuration} from 'src/utils/durationUtils';

const currentTime = ref(0);
const songQueue = useSongQueueStore();
const isPanningProgress = ref(false);

const onPan = (phase: string) => {
  if (phase === 'start') {
    isPanningProgress.value = true;
  }
  else {
    console.log(currentTime.value)
    // Seek
    audioController.seek(currentTime.value);

    isPanningProgress.value = false;
  }
}

const totalTime = computed(() => {
  if (songQueue.currentTrack !== null) {
    return durationToSeconds(<string>songQueue.currentTrack.duration);
  }

  return -1;
})

audioController.onPlaybackComplete(() => {
  playNext();
})

audioController.onProgressTick((time) => {
  if (isPanningProgress.value)
  {
    return;
  }
  currentTime.value = time;
})

watch(songQueue.queue, () => {
  if (songQueue.getCurrentlyPlaying === null) {
    playNext();
  }
})

function playNext() {
  if (songQueue.queue.length === 0 ||
      songQueue.queueIndex >= songQueue.queue.length) {
    console.log('Attempted to play next from an empty queue');
    return;
  }

  songQueue.queueIndex++;
  const song: TrackReadDto = songQueue.queue[songQueue.queueIndex]
  songQueue.currentTrack = song;

  audioController.playTrack(<string>song.trackFile?.url);
}
</script>

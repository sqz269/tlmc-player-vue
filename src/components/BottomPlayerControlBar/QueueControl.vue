<template>
  <div class="row full-width full-height justify-end items-center">
    <div class="col-8 row justify-end">
      <q-btn
        round
        dense
        flat
        :icon="outlinedLyrics"
        class="q-mx-sm"
        v-if="hasLyrics"
        @click="gotoLyricsPage"
      >
        <q-tooltip>Lyrics</q-tooltip>
      </q-btn>


      <q-btn
        round
        dense
        flat
        :icon="outlinedRepeat"
        class="q-mx-sm"
      >
        <q-tooltip>Repeat</q-tooltip>
      </q-btn>

      <q-btn
        round
        dense
        flat
        :icon="outlinedShuffle"
        class="q-mx-sm"
      >
        <q-tooltip>Shuffle</q-tooltip>
      </q-btn>

      <q-btn
        round
        dense
        flat
        :icon="outlinedQueueMusic"
        class="q-mx-sm"
        @click="gotoQueuePage"
      >
        <q-tooltip>Queue</q-tooltip>
      </q-btn>

      <q-btn
        round
        dense
        flat
        :icon="matRadio"
        class="q-mx-sm"
        :color="radioService?.isActive.value ? 'primary' : 'disabled'"
        @click="radioService?.toggle()"
      >
        <q-tooltip>{{ radioService?.isActive }}</q-tooltip>
      </q-btn>
    </div>
    <div class="col">
      <q-item class="full-width">
        <q-item-section side>
          <q-icon name="volume_up" />
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="volume"
            :min="0"
            :max="1"
            :step="0.01"
            style="max-width: 100px"
            thumb-size="10px"
          />
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  outlinedQueueMusic,
  outlinedRepeat,
  outlinedShuffle,
  outlinedLyrics
} from '@quasar/extras/material-icons-outlined';
import { matRadio } from '@quasar/extras/material-icons';
import { computed, inject, reactive, ref, watch } from 'vue';
import RadioService from 'src/services/domain/RadioService';
import AudioService from 'src/services/domain/AudioService';
import { useRouter } from 'vue-router';
import QueueService from 'src/services/domain/QueueService';

// Injected props
const $router = useRouter();

const queueService = inject<QueueService>('queueService');
const radioService = inject<RadioService>('radioService');
const audioService = inject<AudioService>('audioService');

const volume = ref(1);
const hasLyrics = computed(() => {
  if (queueService?.currentTrack !== null)
  {
    return queueService?.currentTrack.value?.track.hasLyrics;
  }

  return false;
})

const gotoLyricsPage = () => {
  $router.push({
    name: 'Lyrics'
  })
}

const gotoQueuePage = () => {
  $router.push({
    name: 'Queue'
  });
};

// Watch volume changes
watch(volume, (newVolume) => {
  audioService?.setVolume(newVolume);
});
</script>

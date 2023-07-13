<template>
  <div class="row full-width full-height justify-end items-center">
    <div class="col-7 row justify-end">
      <q-btn round dense flat :icon="outlinedRepeat">
        <q-tooltip>Repeat</q-tooltip>
      </q-btn>

      <q-btn round dense flat :icon="outlinedShuffle" class="q-mx-sm">
        <q-tooltip>Shuffle</q-tooltip>
      </q-btn>

      <q-btn round dense flat :icon="outlinedQueueMusic" @click="queueShowStatusStore.toggle()">
        <q-tooltip>Queue</q-tooltip>
      </q-btn>
    </div>
    <div class="col">
      <q-item class="full-width">
        <q-item-section side>
          <q-icon name="volume_up"/>
        </q-item-section>
        <q-item-section>
          <q-slider
            v-model="volume"
            :min="0"
            :max="100"
            :step="1"
            style="max-width: 100px"
            thumb-size="10px"
            inner-track-color="black"
            selection-color="white"
            thumb-color="white"
            track-color="yellow"
          />
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  outlinedShuffle,
  outlinedRepeat,
  outlinedQueueMusic,
} from '@quasar/extras/material-icons-outlined';

import {ref, watch} from 'vue';
import {useQueueDisplayStore} from 'stores/showQueue';
import AudioControllerHls from "src/AudioControllers/AudioControllerHls";

const audioController = AudioControllerHls.Instance;

const queueShowStatusStore = useQueueDisplayStore();

const volume = ref(audioController.volume * 100);

watch(volume, () => {
  audioController.volume = volume.value / 100;
})

</script>

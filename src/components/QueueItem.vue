<template>
  <q-item class="transparent" clickable v-if="props.trackInfo"
          @mouseover="hovering=true" @mouseleave="hovering=false">
    <q-item-section avatar>
      <q-avatar square>
        <img :src="props.trackInfo.album.thumbnail.tiny.url">
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label class="ellipsis" :class="{ 'text-gt' : currentlyPlaying }">{{ props.trackInfo.name._default }}</q-item-label>
      <q-item-label class="ellipsis" :class="{ 'text-gt' : currentlyPlaying }" caption lines="2">{{ props.trackInfo.album.albumName._default }}</q-item-label>
    </q-item-section>
    <q-item-section side v-if="currentlyPlaying && !hovering">
      <q-spinner-audio v-if="!paused" size="2em" color="gt" />
      <q-icon size="2em" v-if="paused" :name="outlinedPause"></q-icon>
    </q-item-section>

    <q-item-section side v-if="hovering">
      <q-item-label caption>
        <q-btn :icon="outlinedDelete" flat fab-mini @click="deleteItem"></q-btn>
      </q-item-label>
    </q-item-section>

    <q-item-section side v-if="!currentlyPlaying && !hovering">
      <q-item-label caption>{{ formatDuration(props.trackInfo.duration) }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import {TrackReadDto} from 'app/backend-service-api';
import {computed, defineProps, ref} from 'vue';
import {formatDuration} from 'src/utils/durationUtils';
import {audioController} from 'boot/audioController';
import {outlinedPause, outlinedDelete} from '@quasar/extras/material-icons-outlined';
import {audioEvents} from "boot/eventBus";
import {QueueController, QueuedTrack} from "src/utils/QueueController";

const queueController = QueueController.getInstance();

const deleteItem = (evt: PointerEvent) => {
  evt.preventDefault();
  queueController.removeQueuedItem(props.queueInfo.ItemId);
}

const paused = ref(false);
audioEvents.playbackStateChanged.on(({prev, curr}) => {
  paused.value = curr;
})

const hovering = ref(false);

interface Props {
  queueInfo: QueuedTrack,
  trackInfo: TrackReadDto,
  currentlyPlaying: boolean
}

const props = defineProps<Props>();
</script>

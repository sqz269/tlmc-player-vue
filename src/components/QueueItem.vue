<template>
  <q-item clickable v-ripple v-if="props.trackInfo">
    <q-item-section avatar>
      <q-avatar square>
        <img :src="this.props.trackInfo.album.albumImage.url">
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{ 'text-gt' : currentlyPlaying }">{{ this.props.trackInfo.name._default }}</q-item-label>
      <q-item-label :class="{ 'text-gt' : currentlyPlaying }" caption lines="2">{{ this.props.trackInfo.album.albumName._default }}</q-item-label>
    </q-item-section>
    <q-item-section side v-if="currentlyPlaying">
      <q-spinner-audio v-if="!paused" size="2em" color="gt" />
      <q-icon size="2em" v-if="paused" :name="outlinedPause"></q-icon>
    </q-item-section>
    <q-item-section side v-if="!currentlyPlaying">
      <q-item-label caption>{{ formatDuration(this.props.trackInfo.duration) }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import {TrackReadDto} from 'app/music-data-service-api';
import {computed, defineProps} from 'vue';
import {formatDuration} from 'src/utils/durationUtils';
import {audioController} from 'boot/audioController';
import {outlinedPause} from '@quasar/extras/material-icons-outlined';

const paused = computed(() => {
  return audioController.paused.value;
});

interface Props {
  trackInfo: TrackReadDto,
  currentlyPlaying: boolean
}

const props = defineProps<Props>();
</script>

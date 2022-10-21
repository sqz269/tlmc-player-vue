<template>
  <q-item clickable v-ripple v-if="props.trackInfo">
    <q-item-section avatar>
      <q-avatar square>
        <img :src="this.props.trackInfo.album.albumImage.url">
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ this.props.trackInfo.name._default }}</q-item-label>
      <q-item-label caption lines="2">{{ this.props.trackInfo.album.albumName._default }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import {TrackReadDto} from 'app/music-data-service-api';
import {defineProps} from 'vue';

interface Props {
  trackInfo: TrackReadDto
}

const props = defineProps<Props>();
</script>

<style scoped>

</style>

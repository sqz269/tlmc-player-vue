<template>
  <q-card class="my-card bg-black" flat v-if="currentlyPlaying !== null">
    <q-card-section horizontal>
      <q-img
        style="height: 125px; max-width: 125px"
        :src="currentlyPlaying.track.album.thumbnail.small.url"
      />

      <q-card-section class="justify-around q-py-none">
        <div class="text-h6 link" @click="gotoTrack">{{ currentlyPlaying.track.name._default }}</div>
        <div class="text-subtitle2 link" @click="gotoAlbum">{{ currentlyPlaying.track.album.albumName._default }}</div>
        <div class="text-subtitle1 text-grey q-py-sm link" @click="gotoArtist">{{ currentlyPlaying.track.album.albumArtist[0].name }}</div>
      </q-card-section>
      <q-card-actions vertical class="justify-around q-px-md">
        <q-btn flat round size="md" color="red" :icon="outlinedFavoriteBorder" />
        <q-btn flat round size="md" color="accent" :icon="outlinedPlaylistAddCircle">
          <AddToPlaylistSelector :track-id="currentlyPlaying.track.id"></AddToPlaylistSelector>
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import {
  outlinedPlaylistAddCircle,
  outlinedFavoriteBorder
} from '@quasar/extras/material-icons-outlined';
import {QueueController, QueuedTrack} from 'src/utils/QueueController';
import {useRouter} from "vue-router";
import AddToPlaylistSelector from "components/AddToPlaylistSelector.vue";
import {computed, ref, watch} from "vue";
import {queueEvents} from "boot/eventBus";

const songQueue = QueueController.getInstance();

const currentlyPlaying = ref<QueuedTrack | null>(null);

queueEvents.currentPlayingChanged.on(({prev, curr}) => {
  currentlyPlaying.value = curr
})

const router = useRouter();

const gotoArtist = () => {
  router.push({ name: 'artist', params: { artist: songQueue.currentlyPlaying?.Track.album?.albumArtist![0]!.name } })
}

const gotoAlbum = () => {
  router.push({ name: 'album', params: { albumId: songQueue.currentlyPlaying?.Track.album?.id } })
}

const gotoTrack = () => {
  router.push({ name: 'track', params: { trackId: songQueue.currentlyPlaying?.Track.id } })
}
</script>

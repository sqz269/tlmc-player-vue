<template>
  <q-card class="my-card bg-black" flat v-if="songQueue.currentlyPlaying !== undefined">
    <q-card-section horizontal>
      <q-img
        style="height: 125px; max-width: 125px"
        :src="songQueue.currentlyPlaying.album.thumbnail.small.url"
      />

      <q-card-section class="justify-around q-py-none">
        <div class="text-h6 link" @click="gotoTrack">{{ songQueue.currentlyPlaying.name._default }}</div>
        <div class="text-subtitle2 link" @click="gotoAlbum">{{ songQueue.currentlyPlaying.album.albumName._default }}</div>
        <div class="text-subtitle1 text-grey q-py-sm link" @click="gotoArtist">{{ songQueue.currentlyPlaying.album.albumArtist[0].name }}</div>
      </q-card-section>
      <q-card-actions vertical class="justify-around q-px-md">
        <q-btn flat round size="md" color="red" :icon="outlinedFavoriteBorder" />
        <q-btn flat round size="md" color="accent" :icon="outlinedPlaylistAddCircle">
          <q-menu>
            <AddToPlaylistMenu :track-id="songQueue.currentlyPlaying.id"></AddToPlaylistMenu>
          </q-menu>
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
export default {
  name: 'TrackInfoCard'
}
</script>

<script setup lang="ts">
import {
  outlinedPlaylistAddCircle,
  outlinedFavoriteBorder
} from '@quasar/extras/material-icons-outlined';
import {QueueController} from 'src/utils/QueueController';
import {useRouter} from "vue-router";
import AddToPlaylistMenu from "components/AddToPlaylistMenu.vue";

const songQueue = QueueController.getInstance();

const router = useRouter();

const gotoArtist = () => {
  router.push({ name: 'artist', params: { artist: songQueue.currentlyPlaying?.album?.albumArtist![0]!.name } })
}

const gotoAlbum = () => {
  router.push({ name: 'album', params: { albumId: songQueue.currentlyPlaying?.album?.id } })
}

const gotoTrack = () => {
  router.push({ name: 'track', params: { trackId: songQueue.currentlyPlaying?.id } })
}
</script>

<template>
  <q-card v-ripple class="album-card-long q-pa-md" @click="navToAlbum">
    <q-card-section horizontal>
      <q-img
        img-class="rounded-borders"
        style="height: 125px; max-width: 125px"
        :src="getAlbumImage"
      />

      <q-card-section class="justify-around q-py-none">
        <div class="text-subtitle2">Album</div>
        <div class="text-h6">{{ albumInfo.albumName._default }}</div>

        <q-separator class="q-my-sm"></q-separator>
        <div class="text-subtitle1">{{ albumInfo.tracks.length }} Tracks</div>
        <div class="text-subtitle1">{{ albumInfo.releaseDate?.toLocaleDateString() }}</div>
      </q-card-section>
      <!--                  <q-card-actions vertical class="justify-around q-px-md">-->
      <!--                    <q-btn flat round size="md" color="red" :icon="outlinedFavoriteBorder" />-->
      <!--                    <q-btn flat round size="md" color="accent" :icon="outlinedPlaylistAddCircle" />-->
      <!--                  </q-card-actions>-->
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";
import {AlbumReadDto} from "app/backend-service-api";
import {useRouter} from "vue-router";

const router = useRouter();

function navToAlbum() {
  const albumId: string = <string>props.albumInfo.id;
  router.push({ name: 'album', params: { albumId: albumId } })
}

const props = defineProps<{
  albumInfo: AlbumReadDto
}>();

const getAlbumImage = computed(() => {
  return props.albumInfo?.thumbnail?.medium?.url === null ?
    'http://via.placeholder.com/640x360' : props.albumInfo?.thumbnail?.medium?.url
})
</script>

<style scoped>
.album-card-long {
  background-color: rgba(0, 0, 0, 0.35) !important;
}

.album-card-long:hover {
  background-color: rgba(197, 193, 193, 0.2) !important;
  transition: background-color, color, 200ms linear !important;
  cursor: pointer !important;
}
</style>

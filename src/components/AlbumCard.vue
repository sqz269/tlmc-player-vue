<template>
  <!--TODO: don't hardcode card width or sum, idk-->
  <q-card v-ripple class="album-card cursor-pointer" style="width: 245px;"  @click="navToAlbum">
    <div class="q-focus-helper cursor-pointer relative-position">
    </div>
    <q-img
      v-if="props.albumInfo.thumbnail?.medium?.url"
      :src=props.albumInfo.thumbnail.medium.url
      style="width: 210px; height: 210px;"
      class="q-mx-md q-mt-md"
      img-class="rounded-borders"
      ratio="1">
    </q-img>

<!--    <div class="row q-pa-md justify-start">-->
    <q-card-section>

      <div class="text-subtitle1">{{ props.albumInfo.albumName._default }}</div>
      <div class="text-subtitle2">{{ props.albumInfo.albumArtist[0].name }}</div>
    </q-card-section>
<!--    </div>-->
  </q-card>
</template>

<script lang="ts">
export default {
  name: 'AlbumCard'
}
</script>

<script setup lang="ts">
import {defineProps} from 'vue';
import { AlbumReadDto } from 'app/backend-service-api';
import {useRouter} from 'vue-router';

// const hovering = ref(false);

// watch(hovering, () => {
//   console.log('hovering changed');
// })

const router = useRouter();

function navToAlbum() {
  const albumId: string = <string>props.albumInfo.id;
  router.push({ name: 'album', params: { albumId: albumId } })
}

const props = defineProps<{
  albumInfo: AlbumReadDto
}>();
</script>

<style>
.album-card {
  background-color: rgba(0, 0, 0, 0.50) !important;
}

.album-card:hover {
  box-shadow: 0 0 15px rgba(33,33,33,.2) !important;
  background-color: rgba(197, 193, 193, 0.4) !important;
  color: #ffffff !important;
  transition: background-color, color, 200ms linear !important;
}
</style>

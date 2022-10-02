<template>
  <!--TODO: don't hardcode card width or sum, idk-->
  <q-card v-ripple class="cursor-pointer" style="width: 245px;" @mouseover="hovering"  @click="navToAlbum">
    <div class="q-focus-helper cursor-pointer relative-position">
    </div>
    <q-img
      v-if="props.albumInfo.albumImage"
      :src=props.albumInfo.albumImage.url
      style="width: 210px; height: 210px;"
      class="q-mx-md q-mt-md"
      img-class="rounded-borders"
      ratio="1">
    </q-img>

<!--    <div class="row q-pa-md justify-start">-->
    <q-card-section>

      <div class="text-subtitle1">{{ props.albumInfo.albumName._default }}</div>
      <div class="text-subtitle2">{{ props.albumInfo.albumArtist[0] }}</div>
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
import {defineProps, ref} from 'vue';
import { AlbumReadDto } from 'app/music-data-service-api';
import {useRouter} from 'vue-router';

const hovering = ref(false);

const router = useRouter();

function navToAlbum() {
  const albumId: string = <string>props.albumInfo.id;
  router.push({ name: 'album', params: { albumId: albumId } })
}

var props = defineProps<{
  albumInfo: AlbumReadDto
}>();
</script>

<template>
  <q-page padding>
    <q-infinite-scroll class="row items-start q-gutter-md flex" @load="onLoad" :offset="300" ref="infScroll">
      <div class="q-gutter-md row">
        <AlbumCard v-for="(album, index) in displayAlbums" :key="index"
                   :album-info="album">
        </AlbumCard>
      </div>

      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </q-page>
</template>

<script setup lang="ts">
  import {AlbumApi, AlbumReadDto, CircleApi} from 'app/backend-service-api';
import {onActivated, onDeactivated, onMounted, ref} from 'vue';
import AlbumCard from 'components/AlbumCard.vue';
import {QInfiniteScroll} from 'quasar';

import {usePageContainerBgStyleStore} from 'stores/pageContainerBg';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {QueueController} from 'src/utils/QueueController';
import {useRouter} from "vue-router";
  import {biAward} from "@quasar/extras/bootstrap-icons";

const infScroll = ref<QInfiniteScroll>();

const queueController = QueueController.getInstance();

const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
const albumApi = new AlbumApi(apiConfig);
const circleApi = new CircleApi(apiConfig);

const router = useRouter();

const displayAlbums = ref<AlbumReadDto[]>([])

const { setColors } = usePageContainerBgStyleStore();

let currArtist: string | undefined;

async function loadArtist(start: number, limit: number): Promise<AlbumReadDto[]> {
  // Check if the param is an uuid or artist name
  let artist = <string>router.currentRoute.value.params.artist;

  const isId = /^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$/.test(artist);
  if (isId) {
    (await circleApi.getCircleAlbumsById({
      id: artist,
      start: start,
      limit: limit
    })).albums;
  }

  return (await circleApi.getCircleAlbumsByName({
    name: artist,
    start: start,
    limit: limit
  })).albums!;
}

function onLoad(index: number, done: (stop?: boolean) => void) {
  loadArtist(index * 50, 50).then((resp) => {
    if (resp.length === 0) {
      infScroll.value?.stop();
      done();
    }

    displayAlbums.value.push(...resp);
    done();
  })
}

onMounted(async () => {
  let artist = <string>router.currentRoute.value.params.artist;
  if (artist !== currArtist) {
    currArtist = artist;
    infScroll.value?.setIndex(0);
    displayAlbums.value.length = 0;
  }
  displayAlbums.value.push(...await loadArtist(0, 50))
})

onDeactivated(() => {
  infScroll.value?.stop();
})

onActivated(async () => {
  let artist = <string>router.currentRoute.value.params.artist;
  if (artist !== currArtist) {
    currArtist = artist;
    infScroll.value?.setIndex(0);
    displayAlbums.value.length = 0;
    displayAlbums.value.push(...await loadArtist(0, 50));
  }

  infScroll.value?.resume();
  if (queueController.currentlyPlaying !== null) {
    const color = queueController.currentlyPlaying.Track.album?.thumbnail?.colors;
    if (color) {
      setColors(color);
    }
  }
})
</script>

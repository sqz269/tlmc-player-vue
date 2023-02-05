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
import {AlbumApi, AlbumReadDto} from 'app/backend-service-api';
import {onActivated, onDeactivated, onMounted, ref} from 'vue';
import AlbumCard from 'components/AlbumCard.vue';
import {QInfiniteScroll} from 'quasar';

import {usePageContainerBgStyleStore} from 'stores/pageContainerBg';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {QueueController} from 'src/utils/QueueController';

const infScroll = ref<QInfiniteScroll>();

const queueController = QueueController.getInstance();

const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
const albumApi = new AlbumApi(apiConfig);

const displayAlbums = ref<AlbumReadDto[]>([])

const { setColors } = usePageContainerBgStyleStore();

function onLoad(index: number, done: (stop?: boolean) => void) {
  albumApi.getAlbums({start: index * 50, limit: 50}).then((resp) => {
    displayAlbums.value.push(...resp);
    done();
  });
}

onMounted(async () => {
  displayAlbums.value.push(...await albumApi.getAlbums({limit: 50}))
})

// onUnmounted(() => {
//
// })

onDeactivated(() => {
  infScroll.value?.stop();
})

onActivated(() => {
  infScroll.value?.resume();
  if (queueController.currentlyPlaying !== undefined) {
    const color = queueController.currentlyPlaying.album?.thumbnail?.colors;
    if (color) {
      setColors(color);
    }
  }
})
</script>

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

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  // name: 'PageName'
})
</script>

<script setup lang="ts">
import {AlbumApi, AlbumReadDto} from 'app/music-data-service-api';
import {apiConfig} from 'boot/backend-api';
import {onActivated, onDeactivated, onMounted, onUnmounted, ref} from 'vue';
import AlbumCard from 'components/AlbumCard.vue';
import {QInfiniteScroll} from 'quasar';
import {queueController} from "boot/songQueue";
import {usePageContainerBgStyleStore} from "stores/pageContainerBg";

const infScroll = ref<QInfiniteScroll>();

const albumApi = new AlbumApi(apiConfig);

const displayAlbums = ref<AlbumReadDto[]>([])

const { setColors } = usePageContainerBgStyleStore();

function onLoad(index: number, done: (stop?: boolean) => void) {
  console.log(index)
  albumApi.getAlbums({start: index * 50, limit: 50}).then((resp) => {
    console.log('Fetched ' + resp.length + ' items')
    displayAlbums.value.push(...resp);
    done();
  });
}

onMounted(async () => {
  console.log(`Fetch (Exist ${displayAlbums.value.length})`);
  displayAlbums.value.push(...await albumApi.getAlbums({limit: 50}))
})

onUnmounted(() => {
  console.log('Unmounted')
})

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

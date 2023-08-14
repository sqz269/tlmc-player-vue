<template>
  <q-page padding :ref="page">

    <div class="row q-gutter-md justify-evenly">
      <AlbumCard v-for="(album, index) in displayAlbums" :key="index"
                 :album-info="album">
      </AlbumCard>
    </div>

    <div class="q-pa-lg q-mt-lg flex flex-center justify-between" style="border-top: 1px solid #545454">
      <div class="row">
        <q-toggle color="blue" v-model="value" label="Auto Advance" left-label />
      </div>

      <div class="q-gutter-md">
        <q-pagination
          color="grey"
          text-color="white"
          v-model="current"
          max="236"
          max-pages="7"
          direction-links
          gutter="20px"
          size="18px"
          outline

          @update:model-value="onPageChange"
        />
      </div>

      <div class="row">
        <div class="flex items-center q-mx-md">
          <div>Albums per page:</div>
        </div>
        <q-select dense v-model="model" :options="options"/>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {AlbumApi, AlbumReadDto} from 'app/backend-service-api';
import {onMounted, onUpdated, ref, watch} from 'vue';
import AlbumCard from 'components/AlbumCard.vue';

import {usePageContainerBgStyleStore} from 'stores/pageContainerBg';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {useRouter} from 'vue-router';

const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
const albumApi = new AlbumApi(apiConfig);

const displayAlbums = ref<AlbumReadDto[]>([])

const { setColors } = usePageContainerBgStyleStore();

const router = useRouter();
const current = ref(1);

const model = ref('50');
const value = ref(true);
const options = ['25', '50', '75', '100'];

const page = ref<Element>();

const onPageChange = (pg: number) => {
  loadPage(pg);
};

function loadPage(index: number, bypassPushRoute=false) {
  if (!bypassPushRoute)
  {
    router.push({ name: 'homePaginate', params: { page: current.value } })
  }

  albumApi.getAlbums({start: (index - 1) * 50, limit: 50}).then((resp) => {
    displayAlbums.value = resp.albums!;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'auto'
    })
  });
}

onMounted(async () => {
  const page = Number.parseInt(<string>router.currentRoute.value.params.page || '1');
  current.value = page;
  loadPage(page);

  watch(() => router.currentRoute.value.params.page, (to, from) => {
    if (router.currentRoute.value.name !== 'homePaginate') {
      return;
    }
    // Also need to check if
    let toPage = Number.parseInt(<string>to);
    if (Number.isNaN(toPage)) {
      current.value = 1;
      loadPage(1);
    }
    if (toPage !== current.value){
      current.value = toPage;
      loadPage(toPage, true);
    }
  });
})

onUpdated(async () => {
  const page = Number.parseInt(<string>router.currentRoute.value.params.page || '1');
  current.value = page;
})
</script>

<template>
  <q-page>
    <div class="row full-width q-px-none q-pt-lg" v-if="trackInfo && albumInfo && artistRecommend">
      <div class="col-4 q-px-md" style="max-width: 230px">
        <q-img
          :src="getAlbumImage"
          ratio="1">
        </q-img>
      </div>
      <div class="col-8">
        <div class="row full-width full-height items-end">
          <div class="col-12">
            <div class="text-h5">Track</div>
            <h3 class="q-mb-sm-sm q-mb-none q-mt-md">{{ trackInfo.name._default }}</h3>
          </div>

          <div class="col-12">
            <div class="row full-width">
              <div class="text-subtitle1 text-bold cursor-pointer" @click="gotoArtist">
                {{ albumInfo.albumArtist[0].name }}
              </div>

              <q-separator vertical spaced v-if="albumInfo.releaseDate"></q-separator>
              <div>
                <div class="text-subtitle1" v-if="albumInfo.releaseDate">
                  {{ albumInfo.releaseDate?.toLocaleDateString() }}
                </div>
              </div>

              <q-separator vertical spaced></q-separator>
              <div class="text-subtitle1">{{ formatDuration(trackInfo.duration) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-section-blur col-all q-mt-lg row">
        <div class="col-12 q-pt-md">
          <q-btn fab class="q-mx-md" round :icon="outlinedPlayArrow" color="black" text-color="white" @click="playTrack">
            <q-tooltip>Play</q-tooltip>
          </q-btn>

          <q-btn fab flat class="q-mx-md" round :icon="outlinedStarBorder">
            <q-tooltip>Save</q-tooltip>
          </q-btn>

          <q-btn fab flat class="q-mx-md" round :icon="outlinedMoreHoriz">
            <q-tooltip>More</q-tooltip>
          </q-btn>
        </div>

        <div class="col-12 q-pt-md q-px-md">

          <div class="row">
            <div class="col-12">
              <AlbumCardLong :album-info="albumInfo"></AlbumCardLong>
            </div>

            <div class="col-12 q-my-lg">
              <q-separator></q-separator>
            </div>

            <div class="col-12">
              <div class="text-h5">
                More From {{ albumInfo.albumArtist[0].name }}
              </div>
              <q-scroll-area class="full-width" style="height: 350px">
                <div class="row no-wrap">
                  <AlbumCard v-for="(album, index) in artistRecommend" :key="index"
                             :album-info="album">
                  </AlbumCard>
                </div>
              </q-scroll-area>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PageName'
})
</script>

<script setup lang="ts">
import {
  outlinedPlayArrow,
  outlinedMoreHoriz,
  outlinedStarBorder
} from '@quasar/extras/material-icons-outlined';


import { useRouter } from 'vue-router';
import {AlbumApi, CircleApi} from 'app/backend-service-api';
import { AlbumReadDto, TrackReadDto, OriginalTrackReadDto } from 'app/backend-service-api';
import { computed, onMounted, onUpdated, ref } from 'vue';
import {formatDuration, sumDurations} from 'src/utils/durationUtils';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {usePageContainerBgStyleStore} from "stores/pageContainerBg";
import {QueueController} from "src/utils/QueueController";
import AlbumCardLong from "components/AlbumCardLong.vue";
import {useQuasar} from "quasar";
import AlbumCard from "components/AlbumCard.vue";

const q = useQuasar();

const songQueue = QueueController.getInstance();

const router = useRouter();

const {setColors} = usePageContainerBgStyleStore();

const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
const trackApi = new AlbumApi(apiConfig);
const artistApi = new CircleApi(apiConfig);
const trackInfo = ref<TrackReadDto>();
const albumInfo = ref<AlbumReadDto>();
const trackList = ref<TrackReadDto[]>();
const artistRecommend = ref<AlbumReadDto[]>();

const getAlbumImage = computed(() => {
  return albumInfo?.value?.thumbnail?.medium?.url === null ?
    'http://via.placeholder.com/640x360' : albumInfo?.value?.thumbnail?.medium?.url
})

const gotoArtist = () => {
  router.push({ name: 'artist', params: { artist: albumInfo.value.albumArtist[0].name } })
}

async function setTrackPage(trackId: string): Promise<void> {
  // Fetch track
  trackInfo.value = await trackApi.getTrack({id: trackId});
  albumInfo.value = await trackApi.getAlbum({id: trackInfo.value?.album?.id});
  artistRecommend.value = await artistApi.getCircleAlbumsById({id: albumInfo.value?.albumArtist[0]?.name, limit: 20});

  trackList.value = albumInfo.value?.tracks;

  setColors(<string[]>albumInfo.value?.thumbnail?.colors);
}

async function playTrack(addToFront=true, playImmediately=true) {
  await songQueue.addTrackToQueueById(<string> trackInfo.value?.id, addToFront, playImmediately);
  q.notify({
    position: 'top',
    type: 'secondary',
    message: 'Added to Queue'
  });
}

onMounted(async () => {
  await setTrackPage(<string>router.currentRoute.value.params.trackId)
})

onUpdated(async () => {
  await setTrackPage(<string>router.currentRoute.value.params.trackId)
})
</script>

<template>
  <q-page padding>
    <div class="row full-width" v-if="albumInfo">
      <div class="col-4 q-px-md" style="max-width: 230px">
        <q-img
          :src=albumInfo.albumImage.url
          ratio="1">
        </q-img>
      </div>
      <div class="col-8">
        <div class="row full-width full-height items-end">
          <div class="col-12">
            <div class="text-body1">Album</div>
            <h3 class="q-mb-sm-sm q-mb-none q-mt-md">{{ albumInfo.albumName._default }}</h3>
          </div>

          <div class="col-12">
            <div class="row full-width">
              <div class="text-subtitle1 text-bold">
                {{ albumInfo.albumArtist[0] }}
              </div>

              <q-separator vertical spaced v-if="albumInfo.releaseDate"></q-separator>
              <div>
                <div class="text-subtitle1" v-if="albumInfo.releaseDate">
                  {{ albumInfo.releaseDate?.toLocaleDateString() }}
                </div>
              </div>

              <q-separator vertical spaced></q-separator>
              <div class="text-subtitle1">{{ albumInfo.tracks.length }} Tracks</div>
              <q-separator vertical spaced></q-separator>
              <div class="text-subtitle1">{{ totalDuration }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 q-pt-md">
        <q-btn fab class="q-mx-md" round :icon="outlinedPlayArrow" color="black" text-color="white">
          <q-tooltip>Play</q-tooltip>
        </q-btn>

        <q-btn fab flat class="q-mx-md" round :icon="outlinedStarBorder">
          <q-tooltip>Save</q-tooltip>
        </q-btn>

        <q-btn fab flat class="q-mx-md" round :icon="outlinedMoreHoriz">
          <q-tooltip>More</q-tooltip>
        </q-btn>
      </div>

      <div class="col-12 q-pt-md">
        <q-table :rows="trackList"
                 :columns="columns"
                 :pagination="pagination"
                 separator="none"
                 row-key="index"
                 flat
                 hide-bottom
                 virtual-scroll
                 hide-pagination>
          <template v-slot:body-cell-index="props">
            <q-td :props="props">
              <div>
                <q-btn flat round
                       @mouseover="hoveringWhich = props.value" @mouseleave="hoveringWhich = undefined"
                       @click="playTrack(props.value)"
                       :label="hoveringWhich !== props.value ? props.value : undefined"
                       :icon="hoveringWhich === props.value ? outlinedPlayArrow : undefined">
                </q-btn>
              </div>
              <div class="my-table-details">
                {{ props.row.details }}
              </div>
            </q-td>
          </template>
        </q-table>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AlbumPage'
})
</script>

<script setup lang="ts">
import {
  outlinedPlayArrow,
  outlinedMoreHoriz,
  outlinedStarBorder
} from '@quasar/extras/material-icons-outlined';

import {computed, onMounted, onUpdated, ref, watch} from 'vue';
import { apiConfig } from 'boot/backend-api';
import { AlbumApi } from 'app/music-data-service-api';
import { AlbumReadDto, TrackReadDto } from 'app/music-data-service-api';
import { useRouter } from 'vue-router';
import { formatDuration, sumDurations } from 'src/utils/durationUtils';
import {useSongQueueStore} from 'stores/songQueue';
import {useQuasar} from "quasar";

const router = useRouter();
const q = useQuasar();

const hoveringWhich = ref<number>();

const albumApi = new AlbumApi(apiConfig);
const albumInfo = ref<AlbumReadDto>();
const trackList = ref<TrackReadDto[]>();

const songQueue = useSongQueueStore();

function playTrack(trackIndex: string) {
  const trackIndexNum = parseInt(trackIndex);
  trackList.value?.forEach(track => {
    if (track.index === trackIndexNum) {
      if (track.trackFile?.url !== null) {
        songQueue.addTrackToQueue(<string>track.id);
        q.notify({
          position: 'top',
          type: 'info',
          message: 'Added to Queue'
        })
      }
    }
  })
}

async function fetchAlbum(albumId: string): Promise<AlbumReadDto> {
  return albumApi.getAlbum({id: albumId});
}

async function setAlbumPage() {
  albumInfo.value = await fetchAlbum(<string>router.currentRoute.value.params.albumId);
  if (albumInfo.value?.tracks) {
    albumInfo.value?.tracks.sort((ta, tb) => {
      return ta.index! - tb.index!
    })
    console.log(albumInfo.value)
    trackList.value = albumInfo.value?.tracks;
  }
}

onMounted(async () => {
  await setAlbumPage();
})

onUpdated(async () => {
  await setAlbumPage();
})

const columns = [
  {
    name: 'index',
    required: true,
    label: '#',
    align: 'center',
    field: (row: TrackReadDto) => row.index,
    format: (val: number) => `${val}`,
    style: 'width: 100px',
    sortable: true
  },
  {
    name: 'title',
    required: true,
    label: 'TITLE',
    align: 'left',
    field: (row: TrackReadDto) => row.name?._default,
    format: (val: number) => `${val}`,
    classes: 'text-bold',
    sortable: false
  },
  {
    name: 'duration',
    required: true,
    label: 'DURATION',
    align: 'right',
    field: (row: TrackReadDto) => row.duration,
    format: (val: string) => `${formatDuration(val)}`,
    classes: 'text-bold',
    sortable: false
  }
]

let totalDuration = computed(() => {
  let allDurations: string[] = []
  albumInfo.value?.tracks?.forEach(t => {
    if (t.duration) allDurations.push(t.duration)
  });
  return sumDurations(allDurations);
})

const pagination = {
  rowsPerPage: 0,
  descending: true
}
</script>

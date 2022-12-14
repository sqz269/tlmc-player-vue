<template>
  <q-page padding>
    <div class="row full-width" v-if="albumInfo">
      <div class="col-4 q-px-md" style="max-width: 230px">
        <q-img
          :src=getAlbumImage
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
                {{ albumInfo.albumArtist[0].name }}
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
        <q-btn fab class="q-mx-md" round :icon="outlinedPlayArrow" color="black" text-color="white" @click="playAlbum">
          <q-tooltip>Play</q-tooltip>
        </q-btn>

        <q-btn fab flat class="q-mx-md" round :icon="outlinedStarBorder">
          <q-tooltip>Save</q-tooltip>
        </q-btn>

        <q-btn fab flat class="q-mx-md" round :icon="outlinedMoreHoriz">
          <q-menu fit anchor="center middle" self="top middle">
            <q-list>
              <q-item clickable v-close-popup class="bg-dark" @click="viewMetadata">
                <q-item-section avatar>
                  <q-avatar :icon="outlinedDescription" />
                </q-item-section>
                <q-item-section>View Full Metadata</q-item-section>
              </q-item>
              <q-item clickable v-close-popup class="bg-dark">
                <q-item-section avatar>
                  <q-avatar :icon="outlinedTipsAndUpdates" />
                </q-item-section>
                <q-item-section>Suggest an Edit</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>

      <div class="col-12 q-pt-md q-px-md">
        <q-table :rows="trackList"
                 :columns="columns"
                 :pagination="pagination"
                 separator="none"
                 row-key="id"
                 flat
                 hide-bottom
                 virtual-scroll
                 hide-pagination>
          <template v-slot:body-cell-index="props">
            <q-td :props="props">
              <q-btn flat
                     @mouseover="hoveringWhich = props.key" @mouseleave="hoveringWhich = undefined"
                     @click="playTrack(props.key)"
                     :label="hoveringWhich !== props.key ? props.value : undefined"
                     :icon="hoveringWhich === props.key ? outlinedPlayArrow : undefined">
              </q-btn>
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
  outlinedStarBorder,
  outlinedDescription,
  outlinedTipsAndUpdates
} from '@quasar/extras/material-icons-outlined';

import {computed, onMounted, onUpdated, ref} from 'vue';
import { apiConfig } from 'boot/backend-api';
import {AlbumApi, OriginalTrackReadDto} from 'app/music-data-service-api';
import { AlbumReadDto, TrackReadDto } from 'app/music-data-service-api';
import { useRouter } from 'vue-router';
import { formatDuration, sumDurations } from 'src/utils/durationUtils';
import {useQuasar} from 'quasar';
import {queueController} from 'boot/songQueue';

const router = useRouter();
const q = useQuasar();

const hoveringWhich = ref<number>();

const albumApi = new AlbumApi(apiConfig);
const albumInfo = ref<AlbumReadDto>();
const trackList = ref<TrackReadDto[]>();

const songQueue = queueController;

const getAlbumImage = computed(() => {
  return albumInfo?.value?.thumbnail?.medium?.url === null ?
      'http://via.placeholder.com/640x360' : albumInfo?.value?.thumbnail?.medium?.url
})

function viewMetadata() {
  router.push({ name: 'albumMetadata', params: { albumId: albumInfo.value?.id } })
}

function playAlbum() {
  trackList.value?.sort((e1, e2) => {
    return <number>e2.index - <number>e1.index;
  });

  console.log(trackList.value)

  q.notify({
    position: 'top',
    type: 'secondary',
    message: `Added ${trackList.value?.length} tracks to Queue`
  })

  const toadd = <string[]>trackList.value?.map(e => e?.id).reverse();
  console.log(toadd);
  songQueue.addTrackToQueueByIdBatch(toadd, true, true);
}

async function playTrack(trackId: string) {
  let trackToPlay = null;
  if (!trackList.value) {
    alert('Empty Tracklist');
    return;
  }

  for (let track of trackList.value) {
    if (track.id == trackId) {
      trackToPlay = track;
      break
    }
  }

  if (trackToPlay === null) {
    console.log('Invalid Index. No Index: ' + trackId + '. in track list.');
    return;
  }

  await songQueue.addTrackToQueueById(<string> trackToPlay.id, true, true);
  q.notify({
    position: 'top',
    type: 'secondary',
    message: 'Added to Queue'
  });
}

async function fetchAlbum(albumId: string): Promise<AlbumReadDto> {
  return albumApi.getAlbum({id: albumId});
}

async function setAlbumPage() {
  albumInfo.value = await fetchAlbum(<string>router.currentRoute.value.params.albumId);
  if (albumInfo.value?.tracks) {
    albumInfo.value?.tracks.sort((ta, tb) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return ta.index! - tb.index!
    })
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
    sortable: false
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
    name: 'original',
    required: false,
    label: 'ORIGINAL',
    align: 'left',
    field: (row: TrackReadDto) => row.original,
    format: (val: OriginalTrackReadDto[]) => val.map(e => e.title?._default).join(' │ '),
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

<template>
  <q-page>
    <div class="row full-width q-px-none q-pt-lg" v-if="albumInfo">
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

      <div class="page-section-blur col-all q-mt-lg row">

        <div class="col-12 q-pt-md">
          <q-btn fab class="q-mx-md" round :icon="outlinedPlayArrow" color="black" text-color="white" @click="playAlbum">
            <q-tooltip>Play</q-tooltip>

            <q-menu
              class="bg-black border border-white"

              touch-position
              context-menu
            >
              <q-list style="min-width: 150px;">
                <q-item clickable v-close-popup>
                  <q-item-section @click="playAlbum(true, false)">Play Next</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section @click="playAlbum(false, false)">Add to Queue</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>

          <q-btn fab flat class="q-mx-md" round :icon="outlinedFavoriteBorder">
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
                   class="transparent"
                   :columns="columns"
                   :pagination="pagination"
                   separator="none"
                   row-key="id"
                   flat
                   hide-bottom
                   virtual-scroll
                   hide-pagination>
            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th v-for="col in props.cols" :key="col.name" :props="props"
                  class="text-grey border-bottom-thin">
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>

            <template v-slot:body-cell-index="props">
              <q-td :props="props" class="q-pa-sm">
                <q-btn flat round
                       class="text-grey-5"
                       size="13px"
                       @mouseover="hoveringWhich = props.key" @mouseleave="hoveringWhich = undefined"
                       @click="playTrack(props.key)"
                       :label="hoveringWhich !== props.key ? props.value : undefined"
                       :icon="hoveringWhich === props.key ? outlinedPlayArrow : undefined"
                >
                </q-btn>
              </q-td>
            </template>

            <template v-slot:body-cell-title="props">
              <q-td :props="props">
                <div class="flex row items-center text-subtitle1 text-bold">
                  {{ props.value }}
                </div>
              </q-td>
            </template>

            <template v-slot:body-cell="props">
              <q-td :props="props">
                {{props.value}}
              </q-td>
              <q-menu
                class="bg-black border border-white"

                touch-position
                context-menu
              >
                <q-list style="min-width: 150px;">
                  <q-item clickable v-close-popup>
                    <q-item-section @click="playTrack(props.key, true, false)">Play Next</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section @click="playTrack(props.key, false, false)">Add to Queue</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>Add to Playlist</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section>View Metadata</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </template>

          </q-table>
        </div>

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
  outlinedFavoriteBorder,
  outlinedDescription,
  outlinedTipsAndUpdates
} from '@quasar/extras/material-icons-outlined';

import {computed, onMounted, onUpdated, ref} from 'vue';
import {AlbumApi, OriginalTrackReadDto} from 'app/backend-service-api';
import { AlbumReadDto, TrackReadDto } from 'app/backend-service-api';
import { useRouter } from 'vue-router';
import { formatDuration, sumDurations } from 'src/utils/durationUtils';
import {useQuasar} from 'quasar';
import {usePageContainerBgStyleStore} from 'stores/pageContainerBg';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {QueueController} from 'src/utils/QueueController';

const router = useRouter();
const q = useQuasar();
const { setColors } = usePageContainerBgStyleStore();

const hoveringWhich = ref<number>();

const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
const albumApi = new AlbumApi(apiConfig);
const albumInfo = ref<AlbumReadDto>();
const trackList = ref<TrackReadDto[]>();

const songQueue = QueueController.getInstance();

const getAlbumImage = computed(() => {
  return albumInfo?.value?.thumbnail?.medium?.url === null ?
      'http://via.placeholder.com/640x360' : albumInfo?.value?.thumbnail?.medium?.url
})

function viewMetadata() {
  router.push({ name: 'albumMetadata', params: { albumId: albumInfo.value?.id } })
}

function playAlbum(addToFront=true, playImmediately=true) {
  trackList.value?.sort((e1, e2) => {
    return <number>e2.index - <number>e1.index;
  });

  q.notify({
    position: 'top',
    type: 'secondary',
    message: `Added ${trackList.value?.length} tracks to Queue`
  })

  const toadd = <string[]>trackList.value?.map(e => e?.id).reverse();
  songQueue.addTrackToQueueByIdBatch(toadd, addToFront, playImmediately);
}

async function playTrack(trackId: string, addToFront=true, playImmediately=true) {
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
    alert('Invalid Index. No Index: ' + trackId + '. in track list.');
    return;
  }

  await songQueue.addTrackToQueueById(<string> trackToPlay.id, addToFront, playImmediately);
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
  setColors(<string[]>albumInfo.value?.thumbnail?.colors);
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
    style: 'width: 24px',
    sortable: false
  },
  {
    name: 'title',
    required: true,
    label: 'TITLE',
    align: 'left',
    field: (row: TrackReadDto) => row.name?._default,
    format: (val: number) => `${val}`,
    classes: 'text-h4',
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
    classes: 'text-grey-4',
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

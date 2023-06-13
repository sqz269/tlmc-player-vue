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
            <div class="text-h5">Album</div>
            <h3 class="q-mb-sm-sm q-mb-none q-mt-md">{{ albumInfo.albumName._default }}</h3>
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

              <q-separator v-if="albumInfo.numberOfDiscs === 1" vertical spaced></q-separator>
              <div v-if="albumInfo.numberOfDiscs === 1" class="text-subtitle1">{{ albumInfo.tracks.length }} Tracks</div>
              <q-separator v-if="albumInfo.numberOfDiscs === 1" vertical spaced></q-separator>
              <div v-if="albumInfo.numberOfDiscs === 1" class="text-subtitle1">{{ totalDuration }}</div>

              <q-separator vertical spaced></q-separator>
              <div v-if="albumInfo.numberOfDiscs > 1">
                <div class="text-subtitle1"> {{ albumInfo.numberOfDiscs }} Discs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section-blur col-all q-mt-lg row">

        <div class="col-12 q-pt-md">
          <q-btn fab class="q-mx-md" round :icon="outlinedPlayArrow" color="black" text-color="white" @click="playAlbum">
            <q-tooltip>Play</q-tooltip>

            <q-menu
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
                <q-item clickable v-close-popup @click="viewMetadata">
                  <q-item-section avatar>
                    <q-avatar :icon="outlinedDescription" />
                  </q-item-section>
                  <q-item-section>View Full Metadata</q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section avatar>
                    <q-avatar :icon="outlinedTipsAndUpdates" />
                  </q-item-section>
                  <q-item-section>Suggest an Edit</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

        <div v-for="[discName, tracks] in trackMap" v-bind:key="discName" class="col-12 q-pt-md q-px-md q-pb-lg">
          <div v-if="trackMap.size > 1" class="full-width bg-filter-blur-10 bg-white-a-5 q-ma-none q-pa-none border-bottom border-white">
            <q-chip square size="xl" class="bg-transparent">
              <q-avatar :icon="matAlbum" text-color="white" size="2.7em" />
              {{ discName }}
            </q-chip>
          </div>
          <q-table :rows="tracks"
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
                  <div class="underline-on-hover pointer-on-hover" @click="gotoTrack(props.key)">
                    {{ props.value }}
                  </div>
                </div>
              </q-td>
            </template>

            <template v-slot:body-cell-original="props">
              <q-td :props="props">
                <q-chip square class="bg-white-a-5" v-for="prop in props.value" :key="prop.id">
                  {{ prop.title.en }}
                </q-chip>
              </q-td>
            </template>

            <template v-slot:body-cell="props">
              <q-td :props="props">
                {{props.value}}
              </q-td>
              <q-menu context-menu>
                <q-list style="min-width: 150px;">
                  <q-item clickable v-close-popup>
                    <q-item-section @click="playTrack(props.key, true, false)">Play Next</q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section @click="playTrack(props.key, false, false)">Add to Queue</q-item-section>
                  </q-item>

                  <AddToPlaylistMenu :track-id="props.key"></AddToPlaylistMenu>

                  <q-item clickable v-close-popup>
                    <q-item-section @click="copyTrackUrl(props.key)">Copy Track Url</q-item-section>
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
  outlinedPlaylistAdd,
  outlinedDiscFull,
  outlinedAlbum,
  outlinedDescription,
  outlinedTipsAndUpdates
} from '@quasar/extras/material-icons-outlined';

import {
  matAlbum
} from '@quasar/extras/material-icons';

import {computed, onMounted, onUpdated, ref} from 'vue';
import {AlbumApi} from 'app/backend-service-api';
import { AlbumReadDto, TrackReadDto } from 'app/backend-service-api';
import { useRouter } from 'vue-router';
import { formatDuration, sumDurations } from 'src/utils/durationUtils';
import {useQuasar} from 'quasar';
import {usePageContainerBgStyleStore} from 'stores/pageContainerBg';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {QueueController} from 'src/utils/QueueController';
import AddToPlaylistMenu from "components/AddToPlaylistMenu.vue";

const router = useRouter();
const q = useQuasar();
const { setColors } = usePageContainerBgStyleStore();

const hoveringWhich = ref<number>();

const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
const albumApi = new AlbumApi(apiConfig);
const albumInfo = ref<AlbumReadDto>();

const trackMap = ref<Map<string, TrackReadDto[]>>();

const songQueue = QueueController.getInstance();

const copyTrackUrl = (trackId: string) => {
  const loc = router.resolve({ name: 'track', params: { trackId: trackId }});
  console.log(loc);

  let url = new URL(window.location.origin);
  url.pathname = window.location.pathname;
  url.hash = loc.href;

  navigator.clipboard.writeText(url.toString());
}

const gotoArtist = () => {
  router.push({ name: 'artist', params: { artist: albumInfo.value!.albumArtist![0].name } })
}

const gotoTrack = (trackId: string) => {
  router.push({ name: 'track', params: { trackId: trackId } })
}

const getAlbumImage = computed(() => {
  return albumInfo?.value?.thumbnail?.medium?.url === null ?
      'http://via.placeholder.com/640x360' : albumInfo?.value?.thumbnail?.medium?.url
})

function viewMetadata() {
  router.push({ name: 'albumMetadata', params: { albumId: albumInfo.value?.id } })
}

function playAlbum(addToFront=true, playImmediately=true) {
  const albumTrackList = trackMap.value;

  let trackIds: string[] = [];
  trackMap.value?.forEach((value, key) => {
    value.forEach((track) => {
      trackIds.push(track.id!);
    });
  });

  q.notify({
    position: 'top',
    type: 'secondary',
    message: `Adding ${trackIds.length} tracks to Queue`
  })

  songQueue.addTrackToQueueByIdBatch(trackIds, addToFront, playImmediately);
}

async function playTrack(trackId: string, addToFront=true, playImmediately=true) {
  await songQueue.addTrackToQueueById(<string> trackId, addToFront, playImmediately);
  q.notify({
    position: 'top',
    type: 'secondary',
    message: 'Added to Queue'
  });
}

async function fetchAlbum(albumId: string): Promise<AlbumReadDto> {
  return albumApi.getAlbum({id: albumId});
}

async function setAlbumPageMultiDisc() {
  console.log('setAlbumPageMultiDisc')
  if (!albumInfo.value?.childAlbums) {
    return;
  }

  const childAlbums = albumInfo.value.childAlbums;
  // sort child albums by disc number
  childAlbums.sort((a, b) => {
    return a.discNumber! - b.discNumber!;
  });

  for (const childAlbum of childAlbums) {
    let album = await fetchAlbum(childAlbum.id!);
    if (album.tracks) {
      album.tracks.sort((ta, tb) => {
        return ta.index! - tb.index!
      });

      let discName;
      if (!childAlbum.discName) {
        discName = 'Disc ' + childAlbum.discNumber;
      }
      else {
        discName = `${childAlbum.discName} (DISC ${childAlbum.discNumber})`;
      }

      trackMap.value?.set(discName, album.tracks);
    } else {
      alert(`${album.id} has no tracks`);
    }
  }
}

async function setAlbumPage() {
  trackMap.value = new Map<string, TrackReadDto[]>();
  albumInfo.value = await fetchAlbum(<string>router.currentRoute.value.params.albumId);
  if (albumInfo.value?.thumbnail) {
    setColors(<string[]>albumInfo.value?.thumbnail?.colors);
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  if (albumInfo.value?.numberOfDiscs! > 1) {
    await setAlbumPageMultiDisc();
    return;
  }

  if (albumInfo.value?.tracks) {
    albumInfo.value?.tracks.sort((ta, tb) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return ta.index! - tb.index!
    })
    // trackList.value = albumInfo.value?.tracks;
    trackMap.value?.set('', albumInfo.value?.tracks);
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
    // format: (val: OriginalTrackReadDto[]) => val.map(e => e.title?.en).join(' │ '),
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

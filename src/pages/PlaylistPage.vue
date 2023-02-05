<template>
  <q-page>
    <div class="row full-width q-px-none q-pt-lg" v-if="playlistItemsExist">
      <div class="col-4 q-px-md" style="max-width: 230px">
        <q-img
          ratio="1">
        </q-img>
      </div>
      <div class="col-8">
        <div class="row full-width full-height items-end">
          <div class="col-12">
            <div class="text-h5">Playlist</div>
            <h3 class="q-mb-sm-sm q-mb-none q-mt-md">{{ playlistMetadata.name }}</h3>
          </div>

          <div class="col-12">
            <div class="row full-width">
              <div>
                <div class="text-subtitle1">
                  {{ playlistMetadata.visibility }}
                </div>
              </div>

              <q-separator vertical spaced></q-separator>
              <div class="text-subtitle1">{{ playlistMetadata.numberOfTracks }} Tracks</div>

              <q-separator vertical spaced></q-separator>
              <div class="text-subtitle1">{{ playlistMetadata.lastModified.toLocaleDateString() }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="page-section-blur col-all q-mt-lg row">

        <div class="col-12 q-pt-md">
          <q-btn fab class="q-mx-md" round :icon="outlinedPlayArrow" color="black" text-color="white" @click="playPlaylist">
            <q-tooltip>Play</q-tooltip>

            <q-menu
              class="border border-white"
              touch-position
              context-menu
            >
              <q-list style="min-width: 150px;">
                <q-item clickable v-close-popup @click="playPlaylist(true, false)">
                  <q-item-section>Play Next</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="playPlaylist(false, false)">
                  <q-item-section>Add to Queue</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
        <div class="col-12 q-pt-md q-px-md">
          <q-card class="my-card bg-transparent q-py-sm" flat>
            <q-card-section horizontal>
              <q-card-section class="justify-around q-py-none q-px-sm flex column">
                <div class="text-subtitle2 text-center">#</div>
              </q-card-section>

              <q-img
                style="height: 50px; max-width: 50px"
              />

              <div class="row full-width">
                <q-card-section class="justify-around q-py-none col-7 flex column">
                  <div class="text-subtitle1 ellipsis">Title</div>
                </q-card-section>

                <q-card-section class="justify-around q-py-none col-4 flex column">
                  <div class="text-caption">Date Added</div>
                </q-card-section>
                <q-card-section class="justify-around q-py-none col-1 flex column">
                  <div class="text-caption">Duration</div>
                </q-card-section>
              </div>
            </q-card-section>
          </q-card>

          <q-card class="my-card bg-transparent q-py-sm" flat v-for="item in playlistItemsExist" :key="item.Track.id">
            <q-card-section horizontal>
              <q-card-section class="justify-around q-py-none q-px-md flex column">
                <div class="text-subtitle2 text-center">{{ item.Playlist.index }}</div>
              </q-card-section>

              <q-img
                style="height: 50px; max-width: 50px"
                :src="item.Track.album.thumbnail?.tiny.url"
              />

              <div class="row full-width">
                <q-card-section class="justify-around q-py-none col-7">
                  <div class="text-subtitle1 ellipsis">{{ item.Track.name._default }}</div>
                  <div class="text-caption">{{ item.Track.album.albumName._default }}</div>
                </q-card-section>

                <q-card-section class="justify-around q-py-none col-4 flex column">
                  <div class="text-caption">{{ item.Playlist.dateAdded.toLocaleDateString() }}</div>
                </q-card-section>
                <q-card-section class="justify-around q-py-none col-1 flex column">
                  <div class="text-caption">{{ formatDuration(item.Track.duration) }}</div>
                </q-card-section>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {
  outlinedPlayArrow
} from '@quasar/extras/material-icons-outlined';

import {AlbumApi, PlaylistApi, PlaylistItemReadDto, TrackReadDto, PlaylistReadDto} from 'app/backend-service-api';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {onMounted, onUpdated, ref, watch} from 'vue';
import {useRouter} from 'vue-router';
import {formatDuration} from 'src/utils/durationUtils';
import {QueueController} from "src/utils/QueueController";

const playlistApi = new PlaylistApi(ApiConfigProvider.getInstance().getApiConfig());
const albumApi = new AlbumApi(ApiConfigProvider.getInstance().getApiConfig());

const router = useRouter();

interface PlaylistEntry {
  Track: TrackReadDto,
  Playlist: PlaylistItemReadDto
}

const playlistMetadata = ref<PlaylistReadDto>()
const playlistItemsExist = ref<PlaylistEntry[]>();
const playlistItemsNotFound = ref<string[]>();


const songQueue = QueueController.getInstance();

const playPlaylist = (addToFront=true, playImmediately=true) => {
  const tracks = playlistItemsExist.value?.map(e => e.Track.id);

  songQueue.addTrackToQueueByIdBatch(tracks, addToFront, playImmediately);
}

async function setPlaylistPage() {
  let playlistId = <string>router.currentRoute.value.params.playlistId;

  let playlistItems = await playlistApi.getPlaylist({playlistId: playlistId});

  playlistMetadata.value = playlistItems;

  let trackIds = playlistItems.tracks?.map(p => p.trackId!);

  let trackPlaylistItemMap = new Map(
    playlistItems.tracks?.map(p => [p.trackId!, p] as [string, PlaylistItemReadDto]));

  if (!trackIds) {
    return;
  }

  let trackObj = await albumApi.getTracks({
    requestBody: trackIds
  });

  if (!trackObj.tracks) {
    alert('Invalid AlbumApi.GetTracks response. Invalid Track Attribute');
    return;
  }

  let playlistEntries: PlaylistEntry[] = trackObj.tracks?.map(o => {
    return {
      Track: o,
      Playlist: trackPlaylistItemMap.get(o.id!)
    } as PlaylistEntry;
  });

  playlistEntries.sort((a, b) => a.Playlist.index! - b.Playlist.index!);

  playlistItemsExist.value = playlistEntries;
  playlistItemsNotFound.value = trackObj.notFound!
}

onMounted(async () => {
  await setPlaylistPage();

  watch(() => router.currentRoute.value.params.playlistId, (to, from) => {
    if (router.currentRoute.value.name !== 'playlist') {
      return;
    }
    // Also need to check if
    setPlaylistPage();
  });
})

const columns = [
  {
    name: 'index',
    required: true,
    label: '#',
    align: 'center',
    field: (row: PlaylistEntry) => row.Playlist.index,
    format: (val: number) => `${val}`,
    style: 'width: 24px',
    sortable: false
  },
  {
    name: 'title',
    required: true,
    label: 'TITLE',
    align: 'left',
    field: (row: PlaylistEntry) => row.Track?.name?._default,
    format: (val: number) => `${val}`,
    classes: 'text-h4',
    sortable: false
  },
  {
    name: 'album',
    required: false,
    label: 'ALBUM',
    align: 'left',
    field: (row: PlaylistEntry) => row.Track.album?.albumName?._default,
    // format: (val: OriginalTrackReadDto[]) => val.map(e => e.title?.en).join(' │ '),
    classes: 'text-bold',
    sortable: false
  },
  {
    name: 'date',
    required: true,
    label: 'DATE ADDED',
    align: 'right',
    field: (row: PlaylistEntry) => row.Playlist.dateAdded,
    format: (val: Date) => `${val.toLocaleDateString()}`,
    classes: 'text-grey-4',
    sortable: false
  },
  {
    name: 'duration',
    required: true,
    label: 'DURATION',
    align: 'right',
    field: (row: PlaylistEntry) => row.Track.duration,
    format: (val: string) => `${formatDuration(val)}`,
    classes: 'text-grey-4',
    sortable: false
  }
]

const pagination = {
  rowsPerPage: 0,
  descending: true
}
</script>

<style scoped>

.border-sharp {
  border-radius: 0px !important;
}

.border {
  border: 1px solid !important;
}

.border-black-tp50 {
  border-color: rgba(255, 255, 255, 0.50) !important;
}

</style>

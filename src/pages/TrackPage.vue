<template>
  <q-page padding>
    <div class="row full-width" v-if="trackInfo">
      <div class="col-4 q-px-md" style="max-width: 230px">
        <q-img
          :src="albumInfo.albumImage.url"
          ratio="1">
        </q-img>
      </div>
      <div class="col-8">
        <div class="row full-width full-height items-end">
          <div class="col-12">
            <div class="text-body1">Track</div>
            <h3 class="q-mb-sm-sm q-mb-none q-mt-md">{{ trackInfo.name._default }}</h3>
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
              <div class="text-subtitle1">{{ formatDuration(trackInfo.duration) }}</div>
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
        <q-table :rows="originalTracks"
                 :columns="originalColumns"
                 :pagination="pagination"
                 title="Original"
                 separator="horizontal"
                 row-key="index"
                 flat
                 hide-bottom
                 virtual-scroll
                 hide-pagination>
          <!--          <template v-slot:body-cell-index>-->

          <!--          </template>-->
        </q-table>
      </div>

      <div class="col-12 q-pt-md">
        <q-table :rows="trackMetadata"
                 :columns="metadataColumns"
                 :pagination="pagination"
                 title="Metadata"
                 separator="cell"
                 row-key="index"
                 flat
                 hide-bottom
                 virtual-scroll
                 hide-header
                 hide-pagination>
          <!--          <template v-slot:body-cell-index>-->
          <!--          </template>-->
        </q-table>
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
import { apiConfig } from 'boot/backend-api';
import { AlbumApi } from "app/backend-service-api";
import { AlbumReadDto, TrackReadDto, OriginalTrackReadDto } from 'app/music-data-service-api';
import { computed, onMounted, onUpdated, ref } from 'vue';
import { formatDuration } from 'src/utils/durationUtils';

type Metadata = { name: string, value: string };

const metadataColumns = [
  {
    name: 'metadata',
    label: 'FIELD',
    align: 'left',
    field: (row: Metadata) => row.name
  },
  {
    name: 'value',
    label: 'VALUE',
    align: 'left',
    field: (row: Metadata) => row.value
  }
]

const originalColumns = [
  {
    name: 'metadata',
    label: 'Track',
    align: 'left',
    field: (row: Metadata) => row.value
  },
  {
    name: 'value',
    label: 'Album',
    align: 'left',
    field: (row: Metadata) => row.name
  }
]

const pagination = {
  rowsPerPage: 0,
  descending: true,
  field: (row: Metadata) => row.value
}

const router = useRouter();

const trackApi = new AlbumApi(apiConfig);
const trackInfo = ref<TrackReadDto>();
const albumInfo = ref<AlbumReadDto>();

const trackMetadata = computed(() => {
  if (trackInfo.value)
    return fmtMetadata(trackInfo.value);
  return null;
})

const originalTracks = computed(() => {
  if (trackInfo.value)
    return fmtOriginalTracks(trackInfo.value);
  return null;
})

/**
 * Extract Original track info from the API response object
 * @param track
 */
function fmtOriginalTracks(track: TrackReadDto): Metadata[] {
  const originals: Metadata[] = []
  if (track.original)
  {
    for (let i = 0; i < track.original.length; i++) {
      const original: OriginalTrackReadDto = track.original[i];

      const originalAlbumName = original?.album?.fullName?._default;
      if (!originalAlbumName)
      {
        console.log("One of the original album's name is undefined")
        continue;
      }

      originals.push({name: originalAlbumName, value: <string>original.title?.en})
    }
  }

  return originals;
}

function fmtMetadata(track: TrackReadDto): Metadata[] {
  const metadata: Metadata[] = [];
  const metadataIndex = [
    'staff',
    'arrangement',
    'vocalist',
    'lyricist',
    'genre'
  ]

  const trackDict = track as { [key: string]: string[] | null }
  for (let knownDataIndex of metadataIndex) {
    const d = trackDict[knownDataIndex]
    console.log(d)
    if (d?.length != 0) {
      metadata.push({name: knownDataIndex, value: d.join(',')});
    }
  }

  return metadata;
}

async function setTrackPage(trackId: string): Promise<void> {
  // Fetch track
  trackInfo.value = await trackApi.getTrack({id: trackId})
  albumInfo.value = trackInfo.value?.album;
  console.log(trackInfo.value);
}

onMounted(async () => {
  console.log('Mounted');
  await setTrackPage(<string>router.currentRoute.value.params.trackId)
  console.log(fmtOriginalTracks(<TrackReadDto>trackInfo.value))
  console.log(fmtMetadata(<TrackReadDto>trackInfo.value))
})

onUpdated(async () => {
  console.log('Updated')
  await setTrackPage(<string>router.currentRoute.value.params.trackId)
  console.log(fmtOriginalTracks(<TrackReadDto>trackInfo.value));
})
</script>

<template>
  <q-page padding>
    <div class="row full-width" v-if="albumInfo">
      <div class="col-4 q-px-md" style="max-width: 230px">
        <q-img
          :src="getAlbumImage"
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
              <div class="text-subtitle1">{{ albumInfo.id }}</div>
            </div>
          </div>
        </div>
      </div>
<!--      <div class="col-12 q-pt-md">-->
<!--        <q-btn fab-mini class="q-mx-md" round :icon="outlinedEdit">-->
<!--          <q-tooltip>Edit</q-tooltip>-->
<!--        </q-btn>-->
<!--      </div>-->
    </div>

    <div class="q-pa-md">
      <q-table
        title="ALBUM METADATA"
        :rows="albumMetadata"
        :columns="albumMetadataColumns"
        row-key="field"
        virtual-scroll
        hide-pagination
        :pagination="pagination"
      />
    </div>

    <div class="q-pa-md">
      <q-table
        title="ALBUM ASSETS"
        :rows="albumAssets"
        :columns="albumAssetColumn"
        row-key="name"
        virtual-scroll
        hide-pagination
        :pagination="pagination"
      >
        <template v-slot:body-cell-id="props">
          <q-td :props="props">
            <div>
              <q-btn :label="props.value.assetId"
                     :href="props.value.url" target="_blank"
                     unelevated></q-btn>
            </div>
            <div class="my-table-details">
              {{ props.row.details }}
            </div>
          </q-td>
        </template>
      </q-table>
    </div>

    <div class="q-pa-md">
      <q-table
        title="TRACKS"
        :rows="trackList"
        :columns="tracksColumn"
        row-key="name"
        virtual-scroll
        hide-pagination
        :pagination="pagination"
      />
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
  outlinedOpenInNew
} from '@quasar/extras/material-icons-outlined';

import {computed, onMounted, onUpdated, ref} from 'vue';
import { apiConfig } from 'boot/backend-api';
import { AlbumApi } from 'app/music-data-service-api';
import { AlbumReadDto, TrackReadDto, AssetReadDto } from 'app/music-data-service-api';
import { useRouter } from 'vue-router';
import { formatDuration, sumDurations } from 'src/utils/durationUtils';

const router = useRouter();

const albumApi = new AlbumApi(apiConfig);
const albumInfo = ref<AlbumReadDto>();
const trackList = ref<TrackReadDto[]>();
const albumAssets = ref<AssetReadDto[]>([]);
const albumMetadata = ref<Metadata[]>([]);

const getAlbumImage = computed(() => {
  return albumInfo?.value?.thumbnail?.medium?.url === null ? 'http://via.placeholder.com/640x360'
    : albumInfo?.value?.thumbnail?.medium?.url
})


async function fetchAlbum(albumId: string): Promise<AlbumReadDto> {
  return albumApi.getAlbum({id: albumId});
}

function setAlbumMetadata(albumData: AlbumReadDto) {
  const metadata: Metadata[] = [];
  const metadataIndex = [
    'releaseDate',
    'releaseConvention',
    'catalogNumber',
    'numberOfDiscs',
    'website',
    'albumArtist',
    'dataSource'
  ]

  const albumDict = albumData as { [key: string]: string }

  for (let key of metadataIndex) {
    const  d = albumDict[key];
    console.log(d);
    if (d) {
      metadata.push({name: key, value: d});
    }
  }

  albumMetadata.value = metadata;
}

function setAlbumAsset() {
  // TODO: NEWEST UPDATE CHANGED OTHERIMAGES TO OTHERFILES
  if (albumInfo.value?.thumbnail?.original) {
    albumAssets.value?.push(albumInfo.value?.thumbnail.original)
  }

  if (albumInfo.value?.otherFiles) {
    albumAssets.value?.push(...albumInfo.value?.otherFiles);
  }

  trackList.value?.forEach(e => {
    if (e.trackFile)
      albumAssets.value?.push(e?.trackFile);
  })
}

async function setAlbumPage() {
  trackList.value = [];
  albumInfo.value = undefined;
  albumAssets.value = [];
  albumMetadata.value =[];

  const albumData = await fetchAlbum(<string>router.currentRoute.value.params.albumId);
  albumInfo.value = albumData;
  if (albumInfo.value?.tracks) {
    albumInfo.value?.tracks.sort((ta, tb) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return ta.index! - tb.index!
    })
    console.log(albumInfo.value)
    trackList.value = albumInfo.value?.tracks;

    setAlbumAsset();
    setAlbumMetadata(albumData);
  }
}

onMounted(async () => {
  await setAlbumPage();
})

onUpdated(async () => {
  await setAlbumPage();
})

const tracksColumn = [
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
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: (row: TrackReadDto) => row.id,
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

const albumAssetColumn = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: (row: AssetReadDto) => row,
    classes: 'text-bold',
    sortable: false
  },
  {
    name: 'name',
    required: true,
    label: 'NAME',
    align: 'left',
    field: (row: AssetReadDto) => row.assetName,
    format: (val: string) => `${val}`,
    classes: 'text-bold',
    sortable: false
  },
  {
    name: 'mime',
    required: true,
    label: 'MIME',
    align: 'left',
    field: (row: AssetReadDto) => row.assetMime,
    format: (val: string) => `${val}`,
    classes: 'text-bold',
    sortable: false
  },
  {
    name: 'large',
    required: true,
    label: 'LARGE',
    align: 'right',
    field: (row: AssetReadDto) => row.large,
    format: (val: string) => `${val}`,
    classes: 'text-bold',
    sortable: false
  }
]

type Metadata = {name: string, value: string}

const albumMetadataColumns = [
  {
    name: 'field',
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

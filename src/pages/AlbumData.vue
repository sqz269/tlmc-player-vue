<template>
  <q-page>
    <div class="row full-width q-px-none q-pt-lg" v-if="albumInfo">
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

    <div class="page-section-blur col-all q-mt-lg row q-pb-lg">
      <div class="col-all q-pt-md q-px-md">
        <q-table
          title="ALBUM METADATA"
          :rows="albumMetadata"
          :columns="albumMetadataColumns"
          row-key="field"
          hide-pagination
          :pagination="pagination"
          class="transparent"
          separator="none"
          flat
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" :props="props"
                    class="text-grey border-bottom-thin">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>
        </q-table>
      </div>

      <div class="col-all q-pt-md q-px-md">
        <q-table
          title="ALBUM ASSETS"
          :rows="albumAssets"
          :columns="albumAssetColumn"
          row-key="name"
          hide-pagination
          :pagination="pagination"
          class="transparent"
          separator="none"
          flat
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" :props="props"
                    class="text-grey border-bottom-thin">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>
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

      <div class="col-all q-pt-md q-px-md">
        <q-table
          title="TRACKS"
          :rows="trackList"
          :columns="tracksColumn"
          row-key="name"
          hide-pagination
          :pagination="pagination"
          class="transparent"
          separator="none"
          flat
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" :props="props"
                    class="text-grey border-bottom-thin">
                {{ col.label }}
              </q-th>
            </q-tr>
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
import {computed, onMounted, ref} from 'vue';
import { AlbumApi } from 'app/backend-service-api';
import { AlbumReadDto, TrackReadDto, AssetReadDto } from 'app/backend-service-api';
import { useRouter } from 'vue-router';
import { formatDuration } from 'src/utils/durationUtils';
import {usePageContainerBgStyleStore} from 'stores/pageContainerBg';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';

const router = useRouter();

const { setColors } = usePageContainerBgStyleStore();

const apiConfig = ApiConfigProvider.getInstance().getApiConfig();
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
    /* TODO */
    // 'website',
    // 'albumArtist',
    // 'dataSource'
  ]

  const albumDict = albumData as { [key: string]: string }

  for (let key of metadataIndex) {
    const  d = albumDict[key];
    if (d) {
      metadata.push({name: key, value: d});
    }
  }

  albumMetadata.value = metadata;
}

function setAlbumAsset() {
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
  setColors(<string[]>albumData?.thumbnail?.colors);
  albumInfo.value = albumData;
  if (albumInfo.value?.tracks) {
    albumInfo.value?.tracks.sort((ta, tb) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return ta.index! - tb.index!
    })
    trackList.value = albumInfo.value?.tracks;

    setAlbumAsset();
    setAlbumMetadata(albumData);
  }
}

onMounted(async () => {
  await setAlbumPage();
})

// onUpdated(async () => {
//   await setAlbumPage();
// })

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

// let totalDuration = computed(() => {
//   let allDurations: string[] = []
//   albumInfo.value?.tracks?.forEach(t => {
//     if (t.duration) allDurations.push(t.duration)
//   });
//   return sumDurations(allDurations);
// })

const pagination = {
  rowsPerPage: 0,
  descending: true
}
</script>

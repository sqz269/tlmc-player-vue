<template>
  <q-dialog
    position="top"
    backdrop-filter="blur(3px)"
  >
    <q-card style="max-width: 100vw; min-width: 60vw; max-height: 90vh; margin-top: 5vh; border-radius: 5px;">
      <q-card-section>
        <div class="text-h6">Lyrics</div>
      </q-card-section>

      <q-card-section>
        <LoadableElement :state-controller="controller">
          <template #loading>
            <div class="row col-all justify-center">
              <q-spinner color="primary" size="3em" />
            </div>
          </template>

          <template #default="">
            <q-table
              flat
              bordered
              dense
              class="bg-transparent"
              row-key="index"
              hide-bottom
              virtual-scroll
              :rows-per-page-options="[0]"
              :columns="tableColumnsCustomized"
              :rows="tableRows"
            >
            </q-table>
          </template>
        </LoadableElement>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { LyricsReadDto, TrackApi } from 'app/backend-service-api';
import { apiConfigurationProvider } from 'src/services/_services';
import { useLoadableController } from 'src/utils/Loadable/LoadableController';
import LoadableElement from 'src/utils/Loadable/LoadableElement.vue';
import { onMounted } from 'vue';

// Props
const props = defineProps<{
  trackId: string
}>();

// Controller
const controller = useLoadableController<LyricsReadDto>();
const trackApi = new TrackApi(apiConfigurationProvider.getApiConfiguration());

const tableColumnsCustomized = [
  { name: 'time', label: 'Time', align: 'left', field: 'time', sortable: false },
]

const tableRows: Array<{[key: string]: string}> = [];

const constructUiElements = (lyricsDto: LyricsReadDto) => {
  const possibleLangs: Set<string> = new Set();
  lyricsDto.variants?.forEach((variant) => {
    // iterate over lines
    variant.lines?.forEach((line) => {
      const base: {[key: string]: string} = {
        'time': line.time || '-',
      };

      line.blocks?.forEach((block) => {
        possibleLangs.add(block.lang!);
        base[block.lang!] = block.text!;
      });

      tableRows.push(base);
    })
  });
  possibleLangs.forEach((lang) => {
    tableColumnsCustomized.push({
      name: lang,
      label: lang,
      align: 'left',
      field: lang,
      sortable: false
    })
  })
}

// Fetch Lyrics Data
onMounted(async () => {
  controller.setLoading();
  try {
    const result = await trackApi.getLyrics({ trackId: props.trackId });

    constructUiElements(result);

    console.log(tableRows);

    controller.setSuccess(result);
  } catch (error) {
    controller.setError(error as Error);
  }
});
</script>

<style scoped>
/* Styling to keep the layout neat */
.q-table {
  max-height: 50vh;
  overflow-y: auto;
}
</style>

<template>
  <q-page>
    <LoadableElement :state-controller="controller">
      <template #loading>
        <div class="row col-all justify-center">
          <q-spinner color="primary" size="3em" />
        </div>
      </template>

      <template #default="">
        <!-- {{ data }} -->
          <LyricsScrollingRenderer></LyricsScrollingRenderer>
      </template>
    </LoadableElement>
  </q-page>
</template>


<script setup lang="ts">
import { LyricsReadDto, TrackApi } from 'app/backend-service-api';
import LyricsScrollingRenderer from 'src/components/LyricsScrollingRenderer/LyricsScrollingRenderer.vue';
import { apiConfigurationProvider } from 'src/services/_services';
import AudioService from 'src/services/domain/AudioService';
import QueueService from 'src/services/domain/QueueService';
import { useLoadableController } from 'src/utils/Loadable/LoadableController';
import LoadableElement from 'src/utils/Loadable/LoadableElement.vue';
import Logger from 'src/utils/Logger';
import { inject, onMounted, watch } from 'vue';

const logger = Logger.getLogger('LyricsPage');

const queueService = inject<QueueService>('queueService');
const audioService = inject<AudioService>('audioService');

const trackApi = new TrackApi(apiConfigurationProvider.getApiConfiguration());
const controller = useLoadableController<LyricsReadDto | null>();

const loadLyrics = async () => {
  controller.setLoading();
  
  if (queueService?.currentTrack.value == null) {
    controller.setSuccess(null);
    return;
  }

  const currentTrack = queueService?.currentTrack.value;

  if (!currentTrack.track.hasLyrics) {
    controller.setSuccess(null);
    return;
  }
  
  // Load lyrics
  const result = await trackApi.getLyrics({ trackId: currentTrack.track.id! });

  controller.setSuccess(result);
}

if (audioService) {
  watch(audioService.position!, async (valNew, valOld) => {
    console.log(valNew?.toSeconds())
  })
}

onMounted(async () => {
  await loadLyrics();
});
</script>

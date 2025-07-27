<template>
  <router-view />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { onBeforeMount, provide } from 'vue';
import * as services from 'src/services/_services';
import type AuthenticationService from './services/domain/AuthenticationService';
import type AudioService from './services/domain/AudioService';
import type ApiConfigurationProvider from './services/domain/ApiConfigurationProvider';
import type UserProfileService from './services/domain/UserProfileService';
import type QueueService from './services/domain/QueueService';
import type RadioService from './services/domain/RadioService';
import type PlaylistService from './services/domain/PlaylistService';
import type { Configuration } from 'app/backend-service-api';
import type GlobalStaticDataProvider from './services/domain/GlobalStaticDataProvider';
import Logger from './utils/Logger';
import GlobalConfiguration from './GlobalConfiguration';

Logger.setLevel(GlobalConfiguration.LOGGING_LEVEL);

provide<AudioService>('audioService', services.audioService);
provide<AuthenticationService>('authService', services.authService);
provide<ApiConfigurationProvider<Configuration>>(
  'apiConfigProvider',
  services.apiConfigurationProvider
);
provide<UserProfileService>('userProfileService', services.userProfileService);

provide<QueueService>('queueService', services.queueService);
provide<RadioService>('radioService', services.radioService);
provide<PlaylistService>('playlistService', services.playlistService);

provide<GlobalStaticDataProvider>('globalStaticDataProvider', services.staticStatsProvider);

onBeforeMount(() => {
  services.initialize()
});

const $q = useQuasar()

$q.dark.set(true)
</script>

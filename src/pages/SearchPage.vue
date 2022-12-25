<template>
  <q-page padding>
    <!-- content -->
    {{this.$route}}
    {{a()}}
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  // name: 'PageName'

  methods: {
    a() {
      console.log(this.$route)
    }
  }
})
</script>

<script setup lang="ts">
import {
  outlinedPlayArrow,
  outlinedMoreHoriz,
  outlinedStarBorder
} from '@quasar/extras/material-icons-outlined';

import { onMounted, onUpdated, ref } from 'vue';
import { musicApiConfig } from 'boot/backend-api';
import { AlbumApi } from 'app/music-data-service-api';
import { AlbumReadDto, TrackReadDto } from 'app/music-data-service-api';

</script>

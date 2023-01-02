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
import { apiConfig } from 'boot/backend-api';
import { AlbumApi } from "app/backend-service-api";
import { AlbumReadDto, TrackReadDto } from "app/backend-service-api";

</script>

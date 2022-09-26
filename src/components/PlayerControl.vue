<template>
  <q-toolbar class="q-pa-md">
    <div class="row full-width full-height justify-evenly">
      <div class="col">
        <track-info-card></track-info-card>
      </div>
      <div class="col-5">
        <media-control></media-control>
      </div>

      <div class="col-3">
        <queue-control></queue-control>
      </div>
    </div>


  </q-toolbar>
</template>

<script lang="ts">
export default {
  name: 'PlayerControl'
}
</script>

<script setup lang="ts">
import TrackInfoCard from 'components/TrackInfoCard.vue';
import MediaControl from 'components/MediaControl.vue';
import QueueControl from 'components/QueueControl.vue';
</script>

<style scoped>

</style>

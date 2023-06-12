<template>
  <q-card class="card bg-transparent q-py-sm">
    <q-card-section horizontal>
      <q-card-section class="justify-around q-py-none q-px-md flex column">
        <div class="text-subtitle2 text-center">
          <q-btn flat round
                 class="text-grey-5"
                 size="13px"
                 :icon="outlinedPlayArrow"
          ></q-btn>
        </div>
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
</template>

<script setup lang="ts">
import {
  outlinedPlayArrow,
} from '@quasar/extras/material-icons-outlined';
import {formatDuration} from 'src/utils/durationUtils';
import {PlaylistEntry} from "src/utils/HelperInterface";

const props = defineProps<{
  item: PlaylistEntry
}>();
</script>

<style scoped>
.card {
  transition: box-shadow, background-color, 0.5s;
}

.card:hover {
  box-shadow: 0 3px 5px -1px rgba(255, 255, 255, 0.2), 0 5px 8px rgba(255, 255, 255, 0.14), 0 1px 14px rgba(255, 255, 255, 0.12);
  background-color: rgba(42, 42, 42, 0.44) !important;
  /*border: solid 1px rgba(87, 87, 87, 0.55);*/
}
</style>

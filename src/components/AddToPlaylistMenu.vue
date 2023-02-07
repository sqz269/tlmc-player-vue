<template>
  <q-item clickable>
    <q-item-section>Add To Playlist</q-item-section>
    <q-item-section side>
      <q-icon name="keyboard_arrow_right" />
    </q-item-section>
    <AddToPlaylistSelector :track-id="props.trackId"></AddToPlaylistSelector>
  </q-item>
</template>

<script setup lang="ts">
import AddToPlaylistSelector from 'components/AddToPlaylistSelector.vue';
const props = defineProps<{
  trackId: string
}>();
</script>

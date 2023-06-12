<template>
  <q-menu
    anchor="top end"
    self="top start"
  >
    <q-list style="min-width: 150px;">
      <q-item class="q-mt-sm" clickable @click="onPlaylistCreateBtnClick" v-if="!playlistCreateActive">
        <q-item-section side>
          <q-icon name="playlist_add" size="24px" class="q-px-sm"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>Create Playlist</q-item-label>
        </q-item-section>
      </q-item>

      <div class="row no-wrap q-px-md q-pt-md" v-if="playlistCreateActive">
        <div class="column">
          <div class="text-subtitle1 q-mb-sm">Create Playlist</div>
          <q-input standout="bg-primary text-white" input-style="color: #FFFFFF" v-model="playlistName" label="Name"/>
          <q-select v-model="playlistVisibility" :options="visibilityOptions"
                    label="Visibility"
                    popup-content-style="background-color: #000000" />
          <q-btn outline class="q-mt-sm" label="Create" @click="createPlaylist" />
        </div>
      </div>

      <q-separator spaced />
      <q-item tag="label" v-ripple v-for="(item) in playlists" :key="item.id">
        <q-item-section side top>
          <q-checkbox :val="item.id" v-model="playlistStatus"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>

<script setup lang="ts">
import {usePlaylistStore} from 'stores/playlistStore';
import {computed, onMounted, ref, watch} from 'vue';
import {PlaylistApi, PlaylistItemApi, PlaylistVisibility} from "app/backend-service-api";
import {ApiConfigProvider} from "src/utils/ApiConfigProvider";
import {useQuasar} from "quasar";
const props = defineProps<{
  trackId: string
}>();

let firstActivate = true;

const $q = useQuasar();
const playlistStore = usePlaylistStore();

const playlists = computed(() => {
  const pl = playlistStore.getPlaylists;
  return pl.sort((a, b) => (a.lastModified!.getTime() - b.lastModified!.getTime())).reverse()
});
const playlistApi = new PlaylistApi(ApiConfigProvider.getInstance().getApiConfig());
const playlistItemApi = new PlaylistItemApi(ApiConfigProvider.getInstance().getApiConfig());

const onPlaylistCreateBtnClick = () => { playlistCreateActive.value = true }
const playlistCreateActive = ref(false);
const playlistName = ref();
const playlistVisibility = ref(PlaylistVisibility.Private);
const visibilityOptions = [PlaylistVisibility.Public, PlaylistVisibility.Unlisted, PlaylistVisibility.Private]
const createPlaylist = async () => {
  const result = await playlistApi.createPlaylist({
    playlistCreateRequest: {
      name: playlistName.value,
      visibility: playlistVisibility.value
    }
  });

  playlistStore.addPlaylist(result);
  $q.notify({
    position: 'top',
    type: 'secondary',
    message: `Playlist Created`
  });

  // const r = await playlistItemApi.addPlaylistItemToPlaylist({playlistItemAddRequest: {
  //     playlistId: result.id!,
  //     playlistItemId: props.trackId
  //   }});

  playlistStatus.value.push(result.id!);

  $q.notify({
    position: 'top',
    type: 'secondary',
    message: `Added to Playlist`
  });

  playlistCreateActive.value = false;
}

let playlistStatus = ref<string[]>([]);

watch(playlistStatus, async (value, oldValue) => {
  if (firstActivate) {
    firstActivate = false;
    return;
  }
  const difference = value!
    .filter(x => !oldValue!.includes(x))
    .concat(oldValue!.filter(x => !value!.includes(x)));

  if (!difference || difference.length == 0) {
    return;
  }

  if (difference.length > 1) {
    alert(`Playlist Delta > 1 (Actual: ${difference.length}). Cannot proceed`)
  }

  const isAdd = value.length > oldValue.length;
  const adm = isAdd ? 'Added' : 'Removed';
  console.log(adm.toString() + difference.toString())

  if (isAdd) {
    const result = await playlistItemApi.addPlaylistItemToPlaylist({
      playlistItemAddRequest: {
        playlistItemId: props.trackId,
        playlistId: difference[0]
      }
    });

    playlistStore.addPlaylistItem(difference[0], result);
    $q.notify({
      position: 'top',
      type: 'secondary',
      message: `Added to Playlist`
    });
  } else {
    const result = await playlistItemApi.deletePlaylistItemFromPlaylist({
      playlistItemDeleteRequest: {
        playlistItemId: props.trackId,
        playlistId: difference[0]
      }
    });

    playlistStore.removePlaylistItem(difference[0], props.trackId);
    $q.notify({
      position: 'top',
      type: 'secondary',
      message: `Deleted from Playlist`
    });
  }
}, {deep: true})

onMounted(() => {
  playlistStatus.value = playlists.value.filter(i => playlistStore.hasPlaylistItem(i.id!, props.trackId)).map(e => e.id!);
})
</script>

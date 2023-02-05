<template>
  <div>
    <q-list v-if="isLoggedIn">
      <q-item v-for="link in collectionNavigations" :key="link.text"
              v-ripple clickable :inset-level=0.3
              :to="link.route" exact
              active-class="text-white bg-grey-8 text-weight-bolder">
        <!--            :active="currentPath === link.route.name"-->
        <q-item-section avatar>
          <q-icon :name="link.icon" size="24px"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <span class="text-weight-medium">
              {{link.text}}
            </span>
          </q-item-label>
        </q-item-section>
      </q-item>

<!--      <q-item v-ripple clickable :inset-level=0.3>-->
<!--        <q-item-section avatar>-->
<!--          <q-icon :name="outlinedPlaylistAdd" size="24px"/>-->
<!--        </q-item-section>-->
<!--        <q-item-section>-->
<!--          <q-item-label>-->
<!--          <span class="text-weight-medium">-->
<!--            Create Playlist-->
<!--          </span>-->
<!--          </q-item-label>-->
<!--        </q-item-section>-->
<!--      </q-item>-->

      <q-item v-for="item in playlistItems" :key="item"
              v-ripple clickable :inset-level=0.3 @click="gotoPlaylist(item)">
        <q-item-section avatar>
          <q-icon :name="outlinedPlaylistPlay" size="24px"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>
          <span class="text-weight-medium">
            {{item.name}}
          </span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list v-if="!isLoggedIn">
      <q-item :inset-level="0.3">
        <div>
          <a class="link" @click="showLoginDialog">Log in</a> or
          <a class="link" @click="showRegisterDialog">Sign up</a>
          to create and manage playlists
        </div>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts" setup>
import {
  outlinedFavoriteBorder,
  outlinedHistory,
  outlinedLibraryMusic,
  outlinedPlaylistAdd,
  outlinedPlaylistPlay
} from '@quasar/extras/material-icons-outlined';
import {useAuthStore} from 'stores/authDataStore';
import {computed, onMounted, ref} from 'vue';
import RegistrationModal from 'components/RegistrationModal.vue';
import {useQuasar} from 'quasar';
import {PlaylistApi, PlaylistReadDto} from 'app/backend-service-api';
import LoginModal from 'components/LoginModal.vue';
import {ApiConfigProvider} from 'src/utils/ApiConfigProvider';
import {useRouter} from 'vue-router';
import {usePlaylistStore} from "stores/playlistStore";

const authStore = useAuthStore();
const $q = useQuasar();
const router = useRouter();
const playlistStore = usePlaylistStore();

const playlistItems = computed(() => playlistStore.getPlaylists);

const isLoggedIn = computed(() => authStore.isLoggedIn);

const playlistApi = new PlaylistApi(ApiConfigProvider.getInstance().getApiConfig());

onMounted(async () => {
  if (isLoggedIn.value) {
    let allPlaylists = await playlistApi.getCurrentUserPlaylist();
    let normalPlaylists = allPlaylists.filter(p => p.type == 'Normal');
    playlistStore.setPlaylists(normalPlaylists);
  }
})

const collectionNavigations = [
  {
    text: 'Library',
    icon: outlinedLibraryMusic,
    route: { name: 'library' }
  },
  {
    text: 'History',
    icon: outlinedHistory,
    route: { name: 'history' }
  },
  {
    text: 'Favorite',
    icon: outlinedFavoriteBorder,
    route: { name: 'favorite' }
  }
]

const gotoPlaylist = (playlist: PlaylistReadDto) => {
  router.push({name: 'playlist', params: { playlistId: playlist.id }})
}

const showRegisterDialog = () => {
  $q.dialog({
    component: RegistrationModal
  });
}

const showLoginDialog = () => {
  $q.dialog({
    component: LoginModal
  });
}
</script>

<style scoped>
.link {
  cursor: pointer;
  text-decoration: underline;
}
</style>

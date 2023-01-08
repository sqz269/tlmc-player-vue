<template>
  <div>
    <q-list padding>
      <q-item>
        <q-item-section>
          <q-item-label>
            <span class="text-weight-medium text-h5">
              LOGO HERE
            </span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list padding>
      <q-item v-for="link in navigations" :key="link.text"
              v-ripple clickable :inset-level=0.3
              :to="link.route" exact
              :active="currentPath === link.route.name"
              active-class="text-white bg-grey-8 text-weight-bolder">
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

      <q-separator class="q-my-sm" />

      <q-item v-for="link in collectionNavigations" :key="link.text"
              v-ripple clickable :inset-level=0.3
              :to="link.route" exact
              :active="currentPath === link.route.name"
              active-class="text-white bg-grey-8 text-weight-bolder">
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

      <q-item v-ripple clickable :inset-level=0.3>
        <q-item-section avatar>
          <q-icon :name="outlinedPlaylistAdd" size="24px"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>
          <span class="text-weight-medium">
            Create Playlist
          </span>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item v-for="item in playlistItems" :key="item"
              v-ripple clickable :inset-level=0.3>
        <q-item-section avatar>
          <q-icon :name="outlinedPlaylistPlay" size="32px"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>
          <span class="text-weight-medium">
            {{item}}
          </span>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DrawerNavigation',
  components: {
  }
})
</script>

<script setup lang="ts">
import {
  outlinedHome,
  outlinedPlaylistAdd,
  outlinedPlaylistPlay,
  outlinedSearch,
  outlinedLibraryMusic,
  outlinedRadio,
  outlinedFavoriteBorder,
  outlinedHistory
} from '@quasar/extras/material-icons-outlined'
import {useRouter} from 'vue-router';
import {computed} from 'vue';

const router = useRouter();

const currentPath = computed(() => {
  return router.currentRoute.value.name;
})

const navigations = [
  {
    text: 'Home',
    icon: outlinedHome,
    route: { name: 'home' }
  },
  {
    text: 'Search',
    icon: outlinedSearch,
    route: { name: 'search' }
  },
  {
    text: 'Radio',
    icon: outlinedRadio,
    route: { name: 'radio' }
  }
]

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

const playlistItems = [
]

</script>

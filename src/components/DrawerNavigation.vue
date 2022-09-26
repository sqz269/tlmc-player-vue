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
              v-ripple clickable inset-level=0.3>
        <q-item-section avatar>
          <q-icon :name="link.icon" size="32px"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>
            <span class="text-weight-medium">
              {{link.text}}
            </span>
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator class="q-my-md" />

      <q-item v-ripple clickable inset-level=0.3>
        <q-item-section avatar>
          <q-icon :name="outlinedPlaylistAdd" size="32px"/>
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
              v-ripple clickable inset-level=0.3>
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
  outlinedRadio
} from '@quasar/extras/material-icons-outlined'
import {useQuasar} from 'quasar';
import {useRoute} from 'vue-router';

const route = useRoute();

const navigations = [
  {
    text: 'Home',
    icon: outlinedHome,
    route: ''
  },
  {
    text: 'Search',
    icon: outlinedSearch,
    route: ''
  },
  {
    text: 'Library',
    icon: outlinedLibraryMusic,
    route: ''
  },
  {
    text: 'Radio',
    icon: outlinedRadio,
    route: ''
  }
]

const playlistItems = [
  'playlist1',
  'abc',
  'daskdpaosdasd',
  'asdf'
]

</script>

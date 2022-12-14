<template>
  <q-layout view="lHh LpR fFf">
    <q-header bordered>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn round dense flat size="lg" color="grey-8" :icon="outlinedArrowBack">
            <q-tooltip>Back</q-tooltip>
          </q-btn>
          <q-btn round dense flat size="lg" color="grey-8" :icon="outlinedArrowForward">
            <q-tooltip>Forward</q-tooltip>
          </q-btn>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat :icon="outlinedInfo" v-if="$q.screen.gt.sm" @click="queueDisplayStore.toggle()">
            <q-tooltip>About This Site</q-tooltip>
          </q-btn>
          <q-btn round dense flat
                 :icon="q.dark.isActive ? outlinedDarkMode : outlinedLightMode"
                 v-if="$q.screen.gt.sm" @click="toggleTheme">
            <q-tooltip>Toggle</q-tooltip>
          </q-btn>
          <q-btn-dropdown rounded label="sqz269" style="width: 150px">
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Account</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Settings</q-item-label>
                </q-item-section>
              </q-item>

              <q-separator class="q-my-md" />

              <q-item clickable v-close-popup>
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above side="left" :width="270">
      <drawer-navigation></drawer-navigation>
    </q-drawer>

    <q-drawer v-model="showQueue" side="right" :width="270">
      <drawer-queue></drawer-queue>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <keep-alive include="HomePage">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </q-page-container>

    <q-footer>
      <player-control></player-control>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DrawerNavigation from '../components/DrawerNavigation.vue'
export default defineComponent({
  name: 'MainLayout',
  components: {
    DrawerNavigation
  }
});
</script>

<script setup lang="ts">
import {
  outlinedInfo,
  outlinedArrowForward,
  outlinedArrowBack,
  outlinedLightMode,
  outlinedDarkMode
} from '@quasar/extras/material-icons-outlined';

import {computed, ref} from 'vue';
import { useQuasar, setCssVar } from 'quasar';
import PlayerControl from 'components/PlayerControl.vue';
import {MediaSessionController} from 'src/utils/MediaSessionController';
import {useQueueDisplayStore} from 'stores/showQueue';
import DrawerQueue from "components/DrawerQueue.vue";

const queueDisplayStore = useQueueDisplayStore();

const showQueue = computed(() => queueDisplayStore.show)

const q = useQuasar();
q.dark.set(true)
setCssVar('primary', '#000000')

function toggleTheme() {
  q.dark.toggle();
  if (q.dark.isActive)
  {
    setCssVar('primary', '#000000')
  }
  else
  {
    setCssVar('primary', '#ffffff')
  }
}

</script>

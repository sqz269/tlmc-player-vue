<template>
  <q-layout view="lHh LpR fFf">
    <q-header id="header" bordered>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn round dense flat size="lg" color="white" :icon="outlinedArrowBack" @click="back">
          </q-btn>
          <q-btn round dense flat size="lg" color="white" :icon="outlinedArrowForward" @click="forward">
          </q-btn>
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat :icon="outlinedInfo" v-if="$q.screen.gt.sm" @click="showAboutDialog">
            <q-tooltip>About</q-tooltip>
          </q-btn>

          <q-btn round dense flat :icon="outlinedSettings" v-if="$q.screen.gt.sm" @click="showSettingsDialog">
            <q-tooltip>Settings</q-tooltip>
          </q-btn>

          <UserAccountButton></UserAccountButton>
        </div>
      </q-toolbar>

    </q-header>

    <q-drawer show-if-above side="left" :width="250">
      <drawer-navigation></drawer-navigation>
    </q-drawer>

    <q-drawer v-model="showQueue" side="right" :width="270">
      <drawer-queue id="queue-drawer"></drawer-queue>
    </q-drawer>

    <q-page-container :style="{ background: bgGradient }" style="transition: background, 250ms, linear !important;">
      <router-view v-slot="{ Component }">
        <keep-alive :include="['HomePagePaginate', 'HomePageInfScroll', 'ArtistPage']">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </q-page-container>

    <q-footer class="border-top-thin">
      <player-control></player-control>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
  outlinedSettings
} from '@quasar/extras/material-icons-outlined';

import {computed} from 'vue';
import { useQuasar, setCssVar } from 'quasar';
import PlayerControl from 'components/PlayerControl.vue';
import {useQueueDisplayStore} from 'stores/showQueue';
import DrawerQueue from 'components/DrawerQueue.vue';
import {useRouter} from 'vue-router';
import {usePageContainerBgStyleStore} from 'stores/pageContainerBg';
import UserAccountButton from 'components/UserAccountButton.vue';
import SettingsModal from 'components/SettingsModal.vue';
import AboutDialog from 'components/AboutDialog.vue'

const router = useRouter();

const bgStyleStore = usePageContainerBgStyleStore();

const bgGradient1 = computed(() => bgStyleStore.getGradient1);
const bgGradient2 = computed(() => bgStyleStore.getGradient2)
const bgGradient = computed(() => {
  return `linear-gradient(180deg, ${bgGradient1.value} 0%, ${bgGradient2.value} 50%, rgba(0,0,0,1) 90%)`;
});
const back = () => {
  router.back();
}

const forward = () => {
  router.forward();
}

const queueDisplayStore = useQueueDisplayStore();

const showQueue = computed(() => queueDisplayStore.show)

const q = useQuasar();
q.dark.set(true);
setCssVar('primary', '#000000')

const showSettingsDialog = () => {
  q.dialog({
    component: SettingsModal
  });
};

const showAboutDialog = () => {
  q.dialog({
    component: AboutDialog
  });
}

</script>

<style>
#q-app > div > div:nth-child(3) > aside {
  background-color: rgba(0, 0, 0, 0.65);
}

#header {
  background-color: rgba(56, 54, 54, 0.7);
  backdrop-filter: blur(25px);
}

#queue-drawer {
  /*background: rgba(255,255,255,0.07);*/
  background-color: rgba(56, 54, 54, 0.63);
  /*backdrop-filter: blur(25px);*/
}
</style>

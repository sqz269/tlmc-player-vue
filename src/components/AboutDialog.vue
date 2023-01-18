<template>
  <q-dialog
    transition-show="fade"
    transition-hide="fade"
    position="top"
  >
    <q-card bordered class="q-mt-lg" style="width: 700px; max-width: 80vw; background-color: rgba(66,66,66,0.97); ">
      <q-card-section>
        <div class="text-h5">About</div>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <q-card class="transparent">
          <q-tabs

            v-model="tab"
            dense
            active-color="white"
            indicator-color="blue"
            align="justify"
            narrow-indicator
          >
            <q-tab name="media" label="Media" />
            <q-tab name="code" label="Code" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated class="transparent">
            <q-tab-panel name="media">
              <div class="flex justify-center">
                <div class="text-h6">Source & Credits</div>
              </div>
              <q-list bordered separator>
                <q-item clickable v-ripple target="_blank" href="https://nyaa.si/view/1570730">
                  <q-item-section>
                    <q-item-label overline>Music Files & Collection</q-item-label>
                    <q-item-label>[Connor_CZ] TLMC v2</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple target="_blank" href="https://thwiki.cc/">
                  <q-item-section>
                    <q-item-label overline>Music Metadata</q-item-label>
                    <q-item-label>Thwiki.cc</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-tab-panel>

            <q-tab-panel name="code">
              <div class="flex justify-center">
                <div class="text-h6">Source</div>
              </div>
              <q-list bordered separator>
                <q-item clickable v-ripple target="_blank" href="https://github.com/sqz269/TlmcInfoProvider">
                  <q-item-section>
                    <q-item-label lines="1">TLMC Data Preprocessor</q-item-label>
                    <q-item-label caption lines="2">
                      Python3
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple target="_blank" href="https://github.com/sqz269/TlmcInfoProvider">
                  <q-item-section>
                    <q-item-label lines="1">TLMC Tagger (Thwiki)</q-item-label>
                    <q-item-label caption lines="2">
                      Python3
                    </q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple target="_blank" href="https://github.com/sqz269/music-player">
                  <q-item-section>
                    <q-item-label lines="1">Frontend</q-item-label>
                    <q-item-label caption lines="2">Vue.js 3 + Composition API + Typescript + Quasar</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple target="_blank" href="https://github.com/sqz269/tlmc-player">
                  <q-item-section>
                    <q-item-label lines="1">Backend</q-item-label>
                    <q-item-label caption lines="2">Various</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>

              <q-separator class="q-py-sm transparent"></q-separator>

              <div class="flex justify-center">
                <div class="text-h6">API Explorer</div>
              </div>

              <q-list bordered separator>
                <q-item clickable v-ripple target="_blank" :href="musicDataSwaggerUrl">
                  <q-item-section>
                    <q-item-label lines="1">Music Data API</q-item-label>
                    <q-item-label caption lines="2">ASP.NET Core + PostgreSQL</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple target="_blank" :href="authSwaggerUrl">
                  <q-item-section>
                    <q-item-label lines="1">Authentication API</q-item-label>
                    <q-item-label caption lines="2">ASP.NET Core + PostgreSQL</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple target="_blank" :href="playlistSwaggerUrl">
                  <q-item-section>
                    <q-item-label lines="1">Playlist API</q-item-label>
                    <q-item-label caption lines="2">ASP.NET Core + PostgreSQL</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {ApiConfigProvider} from "src/utils/ApiConfigProvider";

const tab = ref('media');

const apiConfigProvider = ApiConfigProvider.getInstance();
const authSwaggerUrl = `${apiConfigProvider.basePath}/swagger/auth`;
const musicDataSwaggerUrl = `${apiConfigProvider.basePath}/swagger/music-data`
const playlistSwaggerUrl = `${apiConfigProvider.basePath}/swagger/playlist`

</script>

<style scoped>

</style>

<template>
  <q-dialog
    transition-show="fade"
    transition-hide="fade"
    position="top"
  >
    <q-card bordered class="q-mt-lg" style="width: 700px; max-width: 80vw; background-color: rgb(30,30,30); ">
      <q-card-section>
        <div class="text-h5">Settings</div>
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
            <q-tab name="homepage" label="Homepage" />
            <q-tab name="queue" label="Queue" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated class="transparent">
            <q-tab-panel name="homepage">
              <div class="flex justify-center">
                <div class="q-pa-md col">
                  <div class="col-all row items-center">
                    <div class="col-6 text-h6">
                      Homepage Mode:
                    </div>
                    <div class="col-6">
                      <div class="q-gutter-sm">
                        <q-radio v-model="shape" val="Infinite Scroll" label="Infinite Scroll" color="white" />
                        <q-radio v-model="shape" val="Pagination" label="Pagination" color="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="queue">
              <div class="q-pa-md col">
                <div class="col-all row items-center">
                  <div class="col-6 text-h6">
                    Play Button Behavior:
                  </div>
                  <div class="col-6">
                    <div class="q-gutter-sm">
                      <q-radio v-model="shape" val="Infinite Scroll" label="Infinite Scroll" color="white" />
                      <q-radio v-model="shape" val="Pagination" label="Pagination" color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'SettingsModal'
});
</script>

<script lang="ts" setup>
import {ref} from 'vue';

const tab = ref('')
const shape = ref('')
</script>

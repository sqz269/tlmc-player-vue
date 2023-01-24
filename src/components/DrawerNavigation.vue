<template>
  <div>
<!--    <q-list padding>-->
<!--      <q-item>-->
<!--        <q-item-section>-->
<!--          <q-item-label>-->
<!--            <span class="text-weight-medium text-h5">-->
<!--              LOGO HERE-->
<!--            </span>-->
<!--          </q-item-label>-->
<!--        </q-item-section>-->
<!--      </q-item>-->
<!--    </q-list>-->

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
    </q-list>
    <q-separator class="q-my-sm" />

    <DrawerPlaylistList></DrawerPlaylistList>
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
  outlinedSearch,
  outlinedRadio
} from '@quasar/extras/material-icons-outlined'
import {useRouter} from 'vue-router';
import {computed} from 'vue';
import DrawerPlaylistList from 'components/DrawerPlaylistList.vue';

const router = useRouter();

const currentPath = computed(() => {
  return router.currentRoute.value.name;
})

const navigations = [
  {
    text: 'Home',
    icon: outlinedHome,
    route: { name: 'homePaginate' }
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
</script>

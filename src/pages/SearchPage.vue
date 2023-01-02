<template>
  <q-page padding>
    <!-- content -->
    {{this.$route}}
    {{a()}}
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  // name: 'PageName'

  methods: {
    a() {
      console.log(this.$route)
    }
  }
})
</script>

<script setup lang="ts">
</script>

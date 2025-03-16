<template>
  <slot v-if="query.isLoading" name="loading" />
  <slot v-else-if="query.isError" name="error" :error="query.error" />
  <slot v-else-if="query.isSuccess" :data="query.data" />
  <div v-else>
    Loadable Element controller's state is never updated. Did you update the controller state or request load?
  </div>
</template>

<script setup lang="ts" generic="T">
import { defineProps } from 'vue';
import { useQueryResults } from '@tanstack/vue-query';

const props = defineProps<{
  query: UseQueryResult<T, Error>;
}>();
</script>


<script setup lang="ts">
  defineProps({
      isLoading: Boolean,
    })
</script>

<template>
  <div v-if="isLoading" class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>
<script setup lang="ts">
const { $bs } = useNuxtApp();

// Testing if Bootstrap JS files was loadded correctly
onMounted(() => {
  try {
    const collapse = new $bs.Collapse('#navbarSupportedContent');
    collapse.show();
  } catch (e) {
    console.log('Bootstrap error: ', e);
  }
});

const defaultLayout: string = "default";
</script>

<template>
  <NuxtLayout :name="defaultLayout">
      <NuxtPage />
  </NuxtLayout>
</template>


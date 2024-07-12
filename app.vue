
<script setup lang="ts">
  const layout: string = 'my-layout';
  const blogLayout: string = 'blog-layout';
</script>


<template>
  <div>
    <h1>Home page </h1>
    <NuxtLayout :name="layout" />

    <!-- <NuxtLayout :name="blogLayout" /> -->
    <NuxtPage />
  </div>
</template>



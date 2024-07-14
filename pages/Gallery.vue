<script setup lang="ts">

const { data: gallery, refresh } = await useAsyncData('get', () => 
  $fetch(`https://picsum.photos/v2/list`) );
console.log(gallery)

</script>

<template>
  <h2>Gallery</h2>
  <ul>
    <li v-for="(image, index) in gallery" :key="`image-${index}`"> 
    {{ image.id }}
    {{ image.author }}
    <img :src="image.download_url" width="100"/>
    </li>
  </ul>
</template>

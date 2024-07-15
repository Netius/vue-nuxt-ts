<script setup lang="ts">

const { data: gallery, refresh } = await useAsyncData('get', () => 
  $fetch(`https://picsum.photos/v2/list`) );
  console.log(gallery)

</script>

<template>
  <h1>Image nuxt modules</h1>
  <p>Installed nuxt/image v.1 and imported in modules</p>
  <a href="https://image.nuxt.com/" target="_blank" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">https://image.nuxt.com/</a>

  <div class="row">
    <div class="col-md-4" v-for="(image, index) in gallery.slice(0, 12)" :key="`image-${index}`">
      <div class="card my-3">
        <NuxtImg 
          :src="image.download_url" 
          :placeholder="[30, 20]"
          
          class="rounded card-img-top"
          loading="lazy"
          fit="cover"
          format="webp"
          quality="20"
          />
        <div class="card-body">
          <h5 class="card-title">{{ image.author }}</h5>
          <p>Image link:</p>
          <a :href="image.url" target="_blank" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Link to image</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const { data: gallery, refresh } = await useAsyncData('get', () => 
  $fetch(`https://picsum.photos/v2/list`) );

</script>

<template>
  <h1>Image nuxt modules</h1>
  <p>Installed nuxt/image v.1 and imported in modules</p>
  <div class="row">
    <div class="col-md-4" v-for="(image, index) in gallery" :key="`image-${index}`">
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
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: Number
})
const { data: quote, pending, error } = await useFetch(() => `https://dummyjson.com/quotes/${props.id || 1}`)

</script>

<template>
    <div class="card p-3">
      <div class="card-body">
        <h3 class="card-title mb-4">Quote</h3>
        <!-- <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> -->
        <NuxtLoadingIndicator v-if="pending" :duration="1000" :throttle="1000"/>
        <pre v-else-if="error">Could not load quote: {{ error.data }}</pre>
        <figure v-else class="quote">
          <blockquote>{{ quote.quote }}</blockquote>
          <figcaption class="card-subtitle text-body-secondary">&mdash; {{ quote.author }}</figcaption>
        </figure>
      </div>
    </div>
</template>

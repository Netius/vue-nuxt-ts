<script setup lang="ts">
const props = defineProps({
  id: Number
})
let counter = ref(1);
const { data: quote, pending, error } = await useFetch(() => `https://dummyjson.com/quotes/${counter.value || 1}`)

const increment = (count: number): any => {
  return counter.value += count;
}

const decrease = (count: number): number => {
  return counter.value -= count;

}
</script>

<template>
  <div class="mb-3">
    <button :disabled="counter == 1" class="btn btn-danger me-3" @click="decrease(1)">Forrige</button>
    <button class="btn btn-success" @click="increment(1)">Neste</button>
  </div>

  <div class="card p-3">
    <div class="card-body">
      <h3 class="card-title mb-4">Quote</h3>
      <!-- <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6> -->
      <NuxtLoadingIndicator v-if="pending" :duration="1000" :throttle="1000" />
      <pre v-else-if="error">Could not load quote: {{ error.data }}</pre>
      <figure v-else class="quote">
        <span class="float-end">ID: {{ quote.id }}</span>
        <blockquote>{{ quote.quote }}</blockquote>
        <figcaption class="card-subtitle text-body-secondary">&mdash; {{ quote.author }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<template>
  <div>
    {{ counter }}
    <button @click="increment(1)">Plus</button>
    <button @click="decrease(1)">Minus</button>
    <!-- Show Nuxt progress indicator on page change -->
     <TheQuote :id="counter"/>
    <!-- <NuxtPage /> -->
  </div>
</template>

<script setup lang="ts">
  let counter = ref(1);
  

  const increment = (count: number) : any => {
    return counter.value += count;
  }

  const decrease = (count: number) : number => {
    return counter.value -= count;
  }



</script>
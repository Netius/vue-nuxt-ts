<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>

<template>
  <div>
    <h1>useState for state management</h1>
    <p>In this example, we use a component-local counter state. Any other component that uses useState('counter') shares the same reactive state.</p>
    <p class="h4 mt-4">Counter: {{ counter }}</p>
    <button class="btn btn-primary me-2" @click="counter++">
      +
    </button>
    <button class="btn btn-danger" @click="counter--">
      -
    </button>
  </div>
</template>
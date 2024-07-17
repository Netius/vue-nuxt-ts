<template>
  <div>
    <h1>Dynamic route</h1>
    <p>Using [...slug] to control routes and links.</p>
    <div class="mt-5 text-center">
      <span class="alert alert-warning px-5 h4">Page "{{ $route.params.slug[0] }}" not found!</span>
    </div>
  </div>
</template>
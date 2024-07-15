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

const layout: string = "my-layout";
const blogLayout: string = "blog-layout";
</script>

<template>

  <h1>Home page</h1>

  <VDropdown :distance="6">
    <!-- This will be the popover reference (for the events and position) -->
    <button>Click me</button>

    <!-- This will be the content of the popover -->
    <template #popper>
      <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
      <p>
        {{ msg }}
      </p>
    </template>
  </VDropdown>


  <VTooltip>
    <a>Sponsor me</a>

    <template #popper>
      Help me fund my Open Source work!
    </template>
  </VTooltip>

  <VMenu>
    <button>Documentation</button>

    <template #popper>
      <button>Guide</button>
      <button>API Reference</button>
    </template>
  </VMenu>

  <NuxtLayout :name="layout" />

  <!-- <NuxtLayout :name="blogLayout" /> -->
  <NuxtPage />

</template>

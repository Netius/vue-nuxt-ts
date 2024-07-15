<template>
  <h1>Floating-vue plugin</h1>
  <p>Showing how to use installed plugin Floating-vue v.5</p>
  <a href="https://floating-vue.starpad.dev/guide/component" target="_blank" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">https://floating-vue.starpad.dev/guide/component</a>

  <div class="text-center">
    <h2 class="my-5">Examples of components</h2>

    <VDropdown :distance="6">
      <!-- This will be the popover reference (for the events and position) -->
      <button class="btn btn-primary">Click: VDropdown</button>

      <!-- This will be the content of the popover -->
      <template #popper>
        <p class="p-3 mx-3">
          This is a VDropdown tooltip
        </p>
      </template>
    </VDropdown>


    <VTooltip class="mt-4">
      <a href="#" class="link-primary">Mouse over: VTooltip</a>

      <template #popper>
        Help me fund my Open Source work!
      </template>
    </VTooltip>

    <VMenu class="mt-4">
      <button class="btn btn-secondary">VMenu: Documentation</button>

      <template #popper>
        <button class="btn btn-dark">Guide</button>
        <button class="btn btn-outline-secondary">API Reference</button>
      </template>
    </VMenu>
  </div>
</template>


<script setup lang="ts">
import {
  vTooltip,
  vClosePopper,
  Dropdown,
  Tooltip,
  Menu
} from 'floating-vue'

const layout: string = "my-layout";
const blogLayout: string = "blog-layout";
</script>

<template>
  <div>
    <h1>Home page</h1>
    <Dropdown>
      <button>Click me</button>
    </Dropdown>

    <Tooltip>
      <a>Sponsor me</a>
    </Tooltip>

    <Menu>
      <button>Documentation</button>
    </Menu>

    <button v-tooltip="'msg'">Hover me</button>

    <NuxtLayout :name="layout" />

    <!-- <NuxtLayout :name="blogLayout" /> -->
    <NuxtPage />
  </div>
</template>

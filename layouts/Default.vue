<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-success-subtle">
      <div class="container">
        <a class="navbar-brand" href="/bootstrap">Vue3-Nuxt3</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/bootstrap" class="nav-link">Bootstrap</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/imagenuxt" class="nav-link">Image Nuxt</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/floating" class="nav-link">Floating vue</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/usefetch" class="nav-link">useFetch</NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                User
              </a>
              <ul class="dropdown-menu">
                <li>
                  <NuxtLink to="../user/post" class="dropdown-item">Post</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="../user/profile" class="dropdown-item">Profile</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- Output the page content -->
  <div class="container my-4 wrapper">
    <slot />
  </div>

  <AppFooter />
</template>

<style scoped>
.wrapper{
  min-height: calc(100vh - 176px);
}
</style>
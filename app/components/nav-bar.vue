<template>
  <div class="navbar bg-accent text-accent-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl hover:text-accent normal-case">
        Travel Log
      </NuxtLink>
    </div>
    <div class="navbar-end ">
      <theme-toggle />
      <signin-button />
    </div>
  </div>
</template>

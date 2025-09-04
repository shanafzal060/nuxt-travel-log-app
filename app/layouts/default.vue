<script setup lang="ts">
const store = useAuthStore();

await store.init();
</script>

<template>
  <div>
    <nav-bar />
    <slot />
  </div>
</template>

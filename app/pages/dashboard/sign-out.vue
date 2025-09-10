<script setup lang="ts">
import { useAuthStore } from "~~/stores/auth";

const store = useAuthStore();

onMounted(() => {
  store.signOut();
  navigateTo("/");
});
</script>

<template>
  <div>
    <span class="loading loading-ring loading-lg" />
  </div>
</template>

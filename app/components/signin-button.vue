<script lang="ts" setup>
import { useAuthStore } from "~~/stores/auth";

const store = useAuthStore();
</script>

<template>
  <div>
    <button :disabled="store.loading" class="btn btn-accent" @click="store.signIn">
      Sign In with Github
      <span v-if="store.loading" class="loading loading-spinner" />
      <icon v-else name="tabler:brand-github" size="20" />
    </button>
  </div>
</template>

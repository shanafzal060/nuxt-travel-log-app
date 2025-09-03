<script lang="ts" setup>
import { useAuthStore } from "~~/stores/auth";

const store = useAuthStore();
</script>

<template>
  <div>
    <div v-if="store.user && !store.loading" class="dropdown dropdown-end">
      <div tabindex="0" role="button" class=" mr-4">
        <div v-if="store.user.image" class="avatar avatar-online">
          <div class="w-8 rounded-full">
            <img :src="store.user.image" :alt="store.user.name">
          </div>
        </div>
        <div v-else class="btn">
          {{ store.user.name }}
        </div>
      </div>
      <ul tabindex="0" class="dropdown-content menu bg-accent rounded-box z-1 w-52 p-2 shadow-sm">
        <li>
          <a @click="store.signOut">
            <icon name="tabler:logout-2" size="20" />Sign Out</a>
        </li>
      </ul>
    </div>
    <button v-else :disabled="store.loading" class="btn btn-accent" @click="store.signIn">
      Sign In with Github
      <span v-if="store.loading" class="loading loading-spinner" />
      <icon v-else name="tabler:brand-github" size="20" />
    </button>
  </div>
</template>

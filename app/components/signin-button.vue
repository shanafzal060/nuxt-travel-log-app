<script lang="ts" setup>
import { useAuthStore } from "~~/stores/auth";
import { computed, onMounted } from "vue";

const store = useAuthStore();

// Initialize auth on component mount
onMounted(() => {
  store.init();
});
// Handle the case where user might be null
const hasUser = computed(() => store.user && !store.loading);
</script>

<template>
  <div>
    <div v-if="hasUser" class="dropdown dropdown-end">
      <div tabindex="0" role="button" class=" mr-4">
        <div v-if="store.user?.image" class="avatar avatar-online">
          <div class="w-8 rounded-full">
            <img :src="store.user.image" :alt="store.user.name">
          </div>
        </div>
        <div v-else class="btn">
          {{ store.user.name || 'User' }}
        </div>
      </div>
      <ul tabindex="0" class="dropdown-content menu bg-accent rounded-box z-1 w-52 p-2 shadow-sm mt-5">
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

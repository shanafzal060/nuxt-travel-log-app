<script setup lang="ts">
import { useAuthStore } from "~~/stores/auth";
import { onMounted, ref } from "vue";

const store = useAuthStore();

await store.init();

const isSidebarOpen = ref(true);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
  localStorage.setItem("isSidebarOpen", isSidebarOpen.value ? "true" : "false");
}

onMounted(() => {
  const savedState = localStorage.getItem("isSidebarOpen");
  if (savedState !== null) {
    isSidebarOpen.value = savedState === "true";
  }
},
);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <nav-bar />
    <main class="flex-1 flex">
      <!-- Sidebar -->
      <div class="border-r border-accent" :class="[isSidebarOpen ? 'w-40' : 'w-15']">
        <div class="flex mt-1" :class="[!isSidebarOpen ? 'justify-center' : 'justify-end']" @click="toggleSidebar()">
          <icon v-if="isSidebarOpen" name="tabler:chevron-left" size="24" class="btn hover:bg-accent!" />
          <icon v-else name="tabler:chevron-right" size="24" class="btn hover:bg-accent!" />
        </div>

        <sidebar-button icon="tabler:map" label="location" :is-sidebar-open="isSidebarOpen" href="/dashboard/location" />
        <sidebar-button icon="tabler:circle-plus-filled" label="Add location" :is-sidebar-open="isSidebarOpen" href="/dashboard/add-location" />
        <div class="divider m-0 p-0" />
        <sidebar-button icon="tabler:logout-2" label="sign out" :is-sidebar-open="isSidebarOpen" href="/dashboard/sign-out" />
      </div>
      <!-- Page Content -->
      <div class="flex-1 p-4">
        <slot />
      </div>
    </main>
  </div>
</template>

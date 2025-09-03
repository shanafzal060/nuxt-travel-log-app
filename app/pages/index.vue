<script lang="ts" setup>
import { useAuthStore } from "~~/stores/auth";

const store = useAuthStore();
</script>

<template>
  <div class="hero bg-base-200  container mx-auto my-auto h-100 mt-14">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Travel Log
        </h1>
        <p class="py-6">
          Keep track of your travels and adventures.Add locations,Photos and notes to create a digital journal of your journeys.
        </p>

        <signin-button v-if="!store.user" />
        <div v-else class="btn bg-accent">
          <NuxtLink to="/dashboard">
            Go To Dashbord
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

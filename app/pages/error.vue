<script lang="ts" setup>

</script>

<template>
  <div class="card card-solid bg-pink-300 w-96 mx-auto mt-4">
    <div class="card-body">
      <h2 class="card-title justify-center">
        <icon name="tabler:face-id-error" size="20" />
        OHH no!! Its 404
      </h2>
      <p>The page you visited is not found.Please go back to Home page</p>
      <div class="card-actions justify-center">
        <NuxtLink class="btn btn-accent" to="/">
          Go Home
          <icon name="tabler:arrow-left" size="20" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

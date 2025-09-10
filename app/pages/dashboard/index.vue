<script lang="ts" setup>
onMounted(() => {
  const router = useRouter();
  router.push("dashboard/location");
});
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline text-white">
      Dashboard Home
    </h1>
  </div>
</template>

<style scoped>

</style>

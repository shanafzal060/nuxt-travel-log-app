<script setup lang="ts">
import { computed } from "vue";

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-6">
    <!-- this hidden checkbox controls the state -->
    <input v-model="isDark" type="checkbox">

    <!-- sun icon -->
    <icon class="swap-on" name="tabler:sun" size="24" />

    <!-- moon icon -->
    <icon class="swap-off" name="tabler:moon" size="24" />

  </label>
</template>

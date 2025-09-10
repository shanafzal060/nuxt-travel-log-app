<script setup lang="ts">
const props = defineProps<{
  icon: string;
  label: string;
  isSidebarOpen: boolean;
  href: string;
}>();

const route = useRoute();
</script>

<template>
  <div class="tooltip tooltip-right " :data-tip="!props.isSidebarOpen ? props.label : ''">
    <NuxtLink :to="props.href" class="flex flex-row  items-center ml-2 my-1 hover:bg-accent/40 rounded-md p-2" :class="[route.path === props.href ? 'bg-accent/30' : '', props.isSidebarOpen ? 'justify-start' : 'justify-center']">
      <Icon :name="props.icon" class="text-2xl transition-all duration-300 " />
      <transition name="grow">
        <div v-if="props.isSidebarOpen" class="btn bg-transparent border-0 p-0 capitalize shadow-none ml-1">
          {{ props.label }}
        </div>
      </transition>
    </NuxtLink>
  </div>
</template>

<style scoped>
.grow-enter-active {
  animation: grow 0.2s;
}
.grow-leave-active {
  animation: grow 0.3s reverse;
}
@keyframes grow {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>

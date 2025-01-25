<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div class="flex flex-col w-[100vw] items-center">
    <div class="max-w-7xl w-full flex-col flex items-center">
      <HeaderComponent />
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>

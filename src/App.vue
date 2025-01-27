<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="h-[25vh] bg-gray-200 fixed w-[100vw] z-10" />
  <div class="relative flex flex-col w-[100vw] items-center bg-gray-200 z-20">
    <div class="max-w-7xl w-full flex-col flex items-center">
      <HeaderComponent />
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped></style>

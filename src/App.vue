<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="relative flex flex-col w-[100vw] items-center bg-pink z-20">
    <HeaderComponent />
    <RouterView />
  </div>
  <SideBar />
</template>

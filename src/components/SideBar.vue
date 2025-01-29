<script setup lang="ts">
import { PhX } from '@phosphor-icons/vue'
import { sideBarStore } from '@/state/sideBar'
import { SECTIONS } from '@/utils/constants/sections'
import { computed } from 'vue'
import RoundButtonComponent from './atoms/RoundButtonComponent.vue'

const onClick = (id: string) => {
  sideBarStore.toggle()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const className = computed(() => {
  const baseClass =
    'p-4 border-r-1 border-gray-900 side-bar overflow-hidden fixed sm:w-64 w-[100vw] top-0 bottom-0 bg-gray-300 z-30 '
  return `${baseClass} ${sideBarStore.isOpen ? 'left-0' : 'sm:-left-64 left-[-100vw]'}`
})
</script>

<template>
  <div :class="className">
    <div class="flex justify-between w-full">
      <h4>Kim & Arnaud</h4>
      <RoundButtonComponent @click="sideBarStore.toggle()">
        <PhX size="32" />
      </RoundButtonComponent>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <div
        v-for="section in SECTIONS"
        :key="section.id"
        class="cursor-pointer"
        @click="onClick(section.id)"
      >
        <h5>{{ section.label }}</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
.side-bar {
  transition: left 0.3s;
}
</style>

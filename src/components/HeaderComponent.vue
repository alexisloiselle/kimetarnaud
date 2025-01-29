<script setup lang="ts">
import { sideBarStore } from '@/state/sideBar'
import { PhList } from '@phosphor-icons/vue'
import RoundButtonComponent from '@/components/atoms/RoundButtonComponent.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <header
    class="w-full py-8 px-8 fixed top-0 right-0 left-0 bg-gray-200 border-b-1 border-gray-400"
  >
    <div class="flex w-full justify-between">
      <RoundButtonComponent v-if="isHomePage" @click="sideBarStore.toggle()">
        <PhList :size="32" />
      </RoundButtonComponent>
      <div v-if="!isHomePage" />
      <RouterLink to="/">
        <h1>K&A</h1>
      </RouterLink>
    </div>
  </header>
</template>

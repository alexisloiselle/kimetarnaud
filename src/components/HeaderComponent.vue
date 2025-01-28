<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Button from '@/components/atoms/ButtonComponent.vue'

const route = useRoute()
const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <header class="w-full py-8 px-4 pr-6">
    <div class="flex justify-between items-center">
      <RouterLink to="/">
        <h1>K&A</h1>
      </RouterLink>
      <RouterLink id="form-button" to="/formulaire" v-if="isHomePage">
        <Button> Je veux participer </Button>
      </RouterLink>
    </div>
  </header>
</template>

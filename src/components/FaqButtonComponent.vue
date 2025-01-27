<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isFaq = computed(() => route.path === '/faq')
</script>

<template>
  <RouterLink to="faq" v-if="!isFaq">
    <span class="text-lg text-white">FAQ →</span>
  </RouterLink>
</template>

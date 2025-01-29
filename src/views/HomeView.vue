<script setup lang="ts">
import { SECTIONS } from '@/utils/constants/sections'
</script>

<template>
  <div v-for="section in SECTIONS" :key="section.id" class="w-full">
    <component :is="section.Component" :id="section.id" />
  </div>
</template>

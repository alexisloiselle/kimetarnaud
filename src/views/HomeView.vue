<script setup lang="ts">
import { SECTIONS } from '@/utils/constants/sections'
</script>

<template>
  <div v-for="(section, index) in SECTIONS" :key="section.id" class="w-full">
    <component
      :is="section.Component"
      :id="section.id"
      :class="index % 2 === 0 ? 'bg-pink' : 'bg-gray'"
    />
  </div>
</template>

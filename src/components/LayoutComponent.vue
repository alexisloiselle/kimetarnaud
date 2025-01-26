<script setup lang="ts">
import ImageComponent from '@/components/ImageComponent.vue'
</script>

<template>
  <div class="mt-16 flex w-full gap-8 lg:flex-row flex-col px-4 pr-6 mb-32">
    <div class="flex-3 items-center flex-col flex">
      <h1 class="lg:text-7xl! text-[3.25rem]!">Kim & Arnaud</h1>
      <slot name="up" />
      <div class="lg:hidden">
        <ImageComponent />
      </div>
      <slot name="down" />
    </div>
    <div class="flex-2 lg:block hidden"><ImageComponent /></div>
  </div>
</template>

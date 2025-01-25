<script setup lang="ts">
import ImageComponent from '@/components/ImageComponent.vue'
</script>

<template>
  <div class="mt-16 flex w-full gap-8 xl:flex-row flex-col xl:px-0 px-4 mb-32">
    <div class="flex-3 items-center flex-col flex">
      <h1 class="xl:text-7xl! text-[3.25rem]!">Kim & Arnaud</h1>
      <slot name="up" />
      <div class="xl:hidden">
        <ImageComponent />
      </div>
      <slot name="down" />
    </div>
    <div class="flex-2 xl:block hidden"><ImageComponent /></div>
  </div>
</template>

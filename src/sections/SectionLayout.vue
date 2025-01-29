<script setup lang="ts">
type Props = {
  id: string
  fullScreen?: boolean
}

const props = defineProps<Props>()

let className = 'flex flex-col items-center w-full border-b-12 border-gray-300 section'
if (props.fullScreen) {
  className += ' full-screen'
}
</script>

<template>
  <div :id="id" :class="className">
    <div class="flex flex-col items-center px-4 w-full pb-28 pt-16">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section {
  padding-top: var(--header-height);
}
.full-screen {
  min-height: calc(100vh);
}
</style>

<script setup lang="ts">
defineProps({
  type: { type: String as () => 'button' | 'reset' | 'submit', default: 'button' },
})
</script>

<template>
  <button :type="type" class="text-xl border-2 rounded-md p-2 hover:bg-gray-300 active:bg-gray-300">
    <slot></slot>
  </button>
</template>

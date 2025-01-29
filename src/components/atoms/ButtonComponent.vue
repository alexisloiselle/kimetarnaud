<script setup lang="ts">
defineProps({
  type: { type: String as () => 'button' | 'reset' | 'submit', default: 'button' },
})
</script>

<template>
  <button :type="type" class="button text-xl border-2 rounded-md p-2">
    <slot></slot>
  </button>
</template>

<style scoped>
.button:hover,
.button:active {
  background-color: var(--gray);
}
</style>

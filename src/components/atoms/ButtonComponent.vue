<script setup lang="ts">
type Props = {
  type: 'button' | 'reset' | 'submit'
}

const { type = 'button' } = defineProps<Props>()
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

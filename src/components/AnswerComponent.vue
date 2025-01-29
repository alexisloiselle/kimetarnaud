<script setup lang="ts">
type Props = {
  answer: string
}

defineProps<Props>()
</script>

<template>
  <p class="pl-8">{{ answer }}</p>
</template>

<script setup lang="ts">
type Props = {
  question: string
}

defineProps<Props>()
</script>

<template>
  <h3>{{ question }}</h3>
</template>

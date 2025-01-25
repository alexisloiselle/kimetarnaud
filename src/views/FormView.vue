<script setup lang="ts">
import FormComponent from '@/components/FormComponent.vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
</script>

<template>
  <LayoutComponent>
    <template v-slot:down><FormComponent /></template>
  </LayoutComponent>
</template>

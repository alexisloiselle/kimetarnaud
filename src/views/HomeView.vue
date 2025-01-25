<script setup lang="ts">
import AdresseComponent from '@/components/AdresseComponent.vue'
import DateComponent from '@/components/DateComponent.vue'
import HistoireComponent from '@/components/HistoireComponent.vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
</script>

<template>
  <LayoutComponent>
    <template v-slot:up>
      <DateComponent />
      <AdresseComponent />
    </template>
    <template v-slot:down>
      <HistoireComponent />
    </template>
  </LayoutComponent>
</template>

<script setup lang="ts">
import HistoireComponent from '@/components/HistoireComponent.vue'
import SectionLayout from './SectionLayout.vue'
import SectionContent from './SectionContent.vue'

type Props = {
  id: string
}

defineProps<Props>()
</script>

<template>
  <SectionLayout :id="id">
    <SectionContent>
      <h2 class="text-center">Une petite histoire</h2>
      <HistoireComponent />
    </SectionContent>
  </SectionLayout>
</template>

<script setup lang="ts">
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
      <h2>Photos</h2>
      À venir
    </SectionContent>
  </SectionLayout>
</template>

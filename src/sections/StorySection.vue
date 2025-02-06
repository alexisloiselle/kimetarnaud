<script setup lang="ts">
import StoryComponent from '@/components/StoryComponent.vue'
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
      <h2 class="text-center">Notre petite histoire</h2>
      <StoryComponent />
    </SectionContent>
  </SectionLayout>
</template>

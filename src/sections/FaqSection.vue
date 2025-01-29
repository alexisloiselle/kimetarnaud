<script setup lang="ts">
import { FAQ_CONTENT } from '@/utils/constants/faq'
import SectionLayout from './SectionLayout.vue'
import QuestionComponent from '@/components/QuestionComponent.vue'
import AnswerComponent from '@/components/AnswerComponent.vue'
import SectionContent from './SectionContent.vue'

type Props = {
  id: string
}

defineProps<Props>()
</script>

<template>
  <SectionLayout :id="id">
    <SectionContent>
      <h2>FAQ</h2>
      <div class="flex flex-col gap-8">
        <div v-for="faqEntry in FAQ_CONTENT" :key="faqEntry.question" class="flex flex-col gap-4">
          <QuestionComponent :question="faqEntry.question" />
          <AnswerComponent :answer="faqEntry.answer" />
        </div>
      </div>
    </SectionContent>
  </SectionLayout>
</template>

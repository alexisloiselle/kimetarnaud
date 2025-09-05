<script setup lang="ts">
import SectionLayout from './SectionLayout.vue'
import SectionContent from './SectionContent.vue'

const programUrl =
  'https://coydypbyhlqsxwnkpubs.supabase.co/storage/v1/object/public/assets/ProgrammeDeroulement%20-%20K&A%202025.pdf'

type Props = {
  id: string
}

defineProps<Props>()
</script>

<template>
  <SectionLayout :id="id">
    <SectionContent>
      <h2>Déroulement</h2>
      <div class="flex flex-col items-center justify-center gap-4">
        <a :href="programUrl" target="_blank" class="button text-xl border-2 rounded-md p-2">
          Consulter le programme
        </a>
      </div>
    </SectionContent>
  </SectionLayout>
</template>

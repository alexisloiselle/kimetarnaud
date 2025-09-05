<script setup lang="ts">
import SectionLayout from './SectionLayout.vue'
import SectionContent from './SectionContent.vue'

const quizUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScr4do87Gkbr0CMSZUSmT2HGBBGzEsBVkUzKuBbvs5tSsJuRA/viewform'

type Props = {
  id: string
}

defineProps<Props>()
</script>

<template>
  <SectionLayout :id="id">
    <SectionContent>
      <h2>Connaissez-vous les mariés ?</h2>
      <div class="flex flex-col items-center justify-center gap-4">
        <p class="text-center">
          Croyez-vous bien connaître les mariés ?<br />Cliquez
          <a
            :href="quizUrl"
            class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
            target="_blank"
            >ici</a
          >
          pour le découvrir !
        </p>
      </div>
    </SectionContent>
  </SectionLayout>
</template>

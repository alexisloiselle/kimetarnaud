<script setup lang="ts">
import SectionLayout from '@/sections/SectionLayout.vue'
import SectionContent from '@/sections/SectionContent.vue'

const menuUrl =
  'https://coydypbyhlqsxwnkpubs.supabase.co/storage/v1/object/public/assets/Menu%20mariage%2001-09-2025.pdf'

const drinksUrl =
  'https://coydypbyhlqsxwnkpubs.supabase.co/storage/v1/object/public/assets/Breuvages.pdf'

type Props = {
  id: string
}

defineProps<Props>()
</script>

<template>
  <SectionLayout :id="id">
    <SectionContent>
      <h2>Menus</h2>
      <div class="flex flex-col items-center justify-center gap-4">
        <a :href="menuUrl" target="_blank" class="button text-xl border-2 rounded-md p-2">
          Menu de nourriture
        </a>
        <a :href="drinksUrl" target="_blank" class="button text-xl border-2 rounded-md p-2">
          Menu de boissons
        </a>
      </div>
    </SectionContent>
  </SectionLayout>
</template>

<style scoped>
.button:hover,
.button:active {
  background-color: var(--gray);
}
</style>

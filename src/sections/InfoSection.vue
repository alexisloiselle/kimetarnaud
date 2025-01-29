<script setup lang="ts">
import SectionLayout from './SectionLayout.vue'
import DateComponent from '@/components/DateComponent.vue'
import AdresseComponent from '@/components/AdresseComponent.vue'
import ImageComponent from '@/components/ImageComponent.vue'
import Button from '@/components/atoms/ButtonComponent.vue'

type Props = {
  id: string
}

defineProps<Props>()
</script>

<template>
  <SectionLayout :id="id" :fullScreen="true">
    <div class="flex gap-8 justify-evenly w-full">
      <ImageComponent class="hidden lg:block" />
      <div class="flex-col flex items-center justify-evenly gap-8">
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-center">Kim & Arnaud</h1>
          <DateComponent />
          <AdresseComponent />
        </div>
        <RouterLink to="/formulaire">
          <Button>RSVP</Button>
        </RouterLink>
        <ImageComponent class="block lg:hidden" />
      </div>
    </div>
  </SectionLayout>
</template>

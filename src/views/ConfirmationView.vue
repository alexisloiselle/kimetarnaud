<script setup lang="ts">
import ButtonComponent from '@/components/atoms/ButtonComponent.vue'
import SectionLayout from '@/sections/SectionLayout.vue'
</script>

<template>
  <SectionLayout id="confirmation" :fullScreen="true">
    <h1 class="text-center mt-24 lg:mt-48 max-w-128">Merci!</h1>
    <h1 class="text-center mt-16 max-w-128">On a hâte de vous voir!</h1>
    <RouterLink to="/" class="mt-32">
      <ButtonComponent>Retour à l'accueil</ButtonComponent>
    </RouterLink>
  </SectionLayout>
</template>

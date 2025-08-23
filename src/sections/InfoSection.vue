<script setup lang="ts">
import SectionLayout from './SectionLayout.vue'
import DateComponent from '@/components/DateComponent.vue'
import AddressComponent from '@/components/AddressComponent.vue'
import ImageComponent from '@/components/ImageComponent.vue'
import Button from '@/components/atoms/ButtonComponent.vue'

type Props = {
  id: string
}

defineProps<Props>()
</script>

<template>
  <SectionLayout :id="id" :fullScreen="true">
    <div class="flex gap-8 justify-evenly w-full grow">
      <ImageComponent class="hidden lg:block" />
      <div class="flex-col flex items-center justify-evenly gap-8">
        <div class="flex flex-col items-center gap-4">
          <h1 class="text-center moon-time text-[6rem]! text-light-orange">
            Kim<span class="leckerli-one text-lg text-wine-red align-[8px]"
              >&nbsp;&nbsp;&&nbsp;</span
            >Arnaud
          </h1>
          <DateComponent />
          <AddressComponent />

          <p class="text-center max-w-96 mt-8">
            Heure d'arrivée entre 16h30 et 17h00<br />Début de la cérémonie à 17h00
          </p>

          <p class="text-center max-w-96 mt-8">
            On voit notre mariage comme la mise en commun de nos proches: un événement simple et
            chaleureux pour célébrer avec les personnes qui nous ont permis de grandir ensemble.
          </p>
        </div>
        <div class="flex flex-col items-center gap-4">
          <RouterLink to="/formulaire">
            <Button>RSVP</Button>
          </RouterLink>
          <p class="text-center max-w-72 mt-8">
            SVP veuillez soumettre à nouveau votre choix de nourriture
          </p>
        </div>
        <ImageComponent class="block lg:hidden" />
      </div>
    </div>
  </SectionLayout>
</template>

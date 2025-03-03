<script setup lang="ts">
import { ref } from 'vue'
import FullNameField from '@/components/fields/FullNameField.vue'
import MenuField from '@/components/fields/MenuField.vue'
import AllergiesField from '@/components/fields/AllergiesField.vue'
import SpecialRequestField from '@/components/fields/SpecialRequestField.vue'
import Button from '@/components/atoms/ButtonComponent.vue'
import router from '@/router'
import { addFormSubmission, logError } from '@/services/supabase'
import SectionLayout from '@/sections/SectionLayout.vue'

const form = ref({
  fullName: '',
  selectedMenu: '',
  allergies: '',
  specialRequest: '',
})

const errors = ref({
  fullName: false,
  selectedMenu: false,
})

async function submitForm() {
  errors.value.fullName = !form.value.fullName.trim()
  errors.value.selectedMenu = !form.value.selectedMenu

  if (!errors.value.fullName && !errors.value.selectedMenu) {
    try {
      await addFormSubmission({
        full_name: form.value.fullName,
        menu_choice: form.value.selectedMenu,
        allergies: form.value.allergies,
        special_request: form.value.specialRequest,
      })

      router.push({ name: 'confirmation' })
    } catch (error) {
      await logError(JSON.stringify(error))
      console.error(error)
    }
  }
}
</script>

<template>
  <SectionLayout id="form" :fullScreen="true">
    <form
      @submit.prevent="submitForm"
      class="space-y-4 w-full max-w-xl pt-16 flex flex-col items-center"
    >
      <div class="mt-4 w-full">
        <FullNameField v-model="form.fullName" :error="errors.fullName" />
      </div>
      <div class="mt-4 w-full">
        <MenuField v-model="form.selectedMenu" :error="errors.selectedMenu" />
      </div>
      <div class="mt-4 w-full">
        <AllergiesField v-model="form.allergies" />
      </div>
      <div class="mt-4 w-full">
        <SpecialRequestField v-model="form.specialRequest" />
      </div>
      <Button type="submit" class="mt-20 w-48">RSVP</Button>
    </form>
  </SectionLayout>
</template>

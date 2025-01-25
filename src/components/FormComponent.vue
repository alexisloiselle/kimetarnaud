<script setup lang="ts">
import { ref } from 'vue'
import FullNameField from '@/components/fields/FullNameField.vue'
import MenuField from '@/components/fields/MenuField.vue'
import SpecialRequestField from '@/components/fields/SpecialRequestField.vue'
import Button from '@/components/atoms/ButtonComponent.vue'
import router from '@/router'
import { addFormSubmission, logError } from '@/services/supabase'

const form = ref({
  fullName: '',
  selectedMenu: '',
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
  <form @submit.prevent="submitForm" class="space-y-4 mt-16 w-full flex flex-col items-center">
    <div class="mt-16 w-full">
      <FullNameField v-model="form.fullName" :error="errors.fullName" />
    </div>
    <div class="mt-16 w-full">
      <MenuField v-model="form.selectedMenu" :error="errors.selectedMenu" />
    </div>
    <div class="mt-16 w-full">
      <SpecialRequestField v-model="form.specialRequest" />
    </div>
    <Button type="submit" class="mt-20 w-48">J'y participe</Button>
  </form>
</template>

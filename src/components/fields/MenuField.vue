<script setup lang="ts">
import SelectInput from '@/components/atoms/SelectInput.vue'

type Props = {
  modelValue: string
  error?: boolean
}

const { error = false } = defineProps<Props>()
defineEmits(['update:modelValue'])

const menuOptions = [
  { value: 'fish', label: 'Omble chevalier, purée de légumes, sauce vierge verte' },
  { value: 'meat', label: "Contre-filet de New York ciselé (cuisson médium-saignant), pommes de terre rôties, sauce au poivre" },
  { value: 'vegetarian', label: 'Option végétarienne' },
]
</script>

<template>
  <SelectInput
    id="selectedMenu"
    label="Choix du menu*"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :options="menuOptions"
    :error="error"
    errorMessage="Veuillez choisir un menu."
  />
</template>

<script setup lang="ts">
import SelectInput from '@/components/atoms/SelectInput.vue'

defineProps({
  modelValue: { type: String, required: true },
  error: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])

const menuOptions = [
  { value: 'classic', label: 'Menu Classique' },
  { value: 'vegetarian', label: 'Menu Végétarien' },
  { value: 'gourmet', label: 'Menu Gourmet' },
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

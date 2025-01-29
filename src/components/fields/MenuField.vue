<script setup lang="ts">
import SelectInput from '@/components/atoms/SelectInput.vue'

defineProps({
  modelValue: { type: String, required: true },
  error: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])

const menuOptions = [
  { value: 'seafood', label: 'Option fruits de mer: Risotto aux fruits de mer' },
  { value: 'meat', label: "Option viande : Osso bucco avec légumes d'accompagnement" },
  { value: 'vegetarian', label: 'Option végétarienne : encore en création' },
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

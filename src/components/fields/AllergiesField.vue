<script setup lang="ts">
import TextInput from '@/components/atoms/TextInput.vue'

type Props = {
  modelValue: string
}

defineProps<Props>()
defineEmits(['update:modelValue'])
</script>

<template>
  <TextInput
    id="allergies"
    label="Allergies ou restrictions alimentaires"
    sublabel="*SVP préciser si restrictions femmes enceintes, vous référer au menu si nécessaire"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    placeholder="Vos allergies, si applicable"
  />
</template>

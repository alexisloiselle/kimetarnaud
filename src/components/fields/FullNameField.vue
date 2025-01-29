<script setup lang="ts">
import TextInput from '@/components/atoms/TextInput.vue'

type Props = {
  modelValue: string
  error?: boolean
}

const { error = false } = defineProps<Props>()
defineEmits(['update:modelValue'])
</script>

<template>
  <TextInput
    id="fullName"
    label="Nom complet*"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :error="error"
    errorMessage="Le nom complet est requis."
    placeholder="Entrez votre nom complet"
  />
</template>

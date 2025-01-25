<script setup lang="ts">
import TextInput from '@/components/atoms/TextInput.vue'

defineProps({
  modelValue: { type: String, required: true },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <TextInput
    id="specialRequest"
    label="Demande spéciale musicale"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    placeholder="Dark Horses by Katy Perry"
  />
</template>

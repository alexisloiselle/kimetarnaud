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
    label="Allergies alimentaires"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    placeholder="Vos allergies, si applicalbe"
  />
</template>

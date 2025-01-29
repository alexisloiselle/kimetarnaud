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
    id="specialRequest"
    label="Demandes spéciales musicales"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    placeholder="Dark Horses by Katy Perry"
  />
</template>

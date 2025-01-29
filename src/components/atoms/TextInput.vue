<script setup lang="ts">
type Props = {
  id: string
  label: string
  modelValue: string
  error?: boolean
  errorMessage?: string
  placeholder?: string
}

const { error = false, errorMessage = '', placeholder = '' } = defineProps<Props>()
defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label :for="id" class="block text-lg">{{ label }}</label>
    <input
      type="text"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="mt-4 block w-full rounded-md border-2 py-2 px-4 placeholder:text-sm placeholder:text-gray-500"
      :class="{ 'border-red-700': error }"
      :placeholder="placeholder"
    />
    <p v-if="error" class="text-sm text-red-700 mt-1">{{ errorMessage }}</p>
  </div>
</template>

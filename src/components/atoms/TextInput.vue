<script setup lang="ts">
defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: String, required: true },
  error: { type: Boolean, default: false },
  errorMessage: { type: String, default: '' },
  placeholder: { type: String, default: '' },
})

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

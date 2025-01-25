<script setup lang="ts">
import CaretIcon from '@/components/icons/CaretIcon.vue'

defineProps({
  id: { type: String, required: true },
  label: { type: String, required: true },
  modelValue: { type: String, required: true },
  options: { type: Array as () => Array<{ value: string; label: string }>, required: true },
  error: { type: Boolean, default: false },
  errorMessage: { type: String, default: '' },
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label :for="id" class="block text-lg">{{ label }}</label>
    <div
      class="mt-4 w-full rounded-md border-2 py-2 px-4 flex justify-between"
      :class="{ 'border-red-700': error }"
    >
      <select
        :id="id"
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        class="w-full appearance-none focus:outline-none text-sm leading-[1.4rem]!"
      >
        <option value="" disabled>Sélectionnez une option</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <div class="pointer-events-none inset-y-0 right-0 flex items-center">
        <CaretIcon />
      </div>
    </div>
    <p v-if="error" class="text-sm text-red-700 mt-1">{{ errorMessage }}</p>
  </div>
</template>

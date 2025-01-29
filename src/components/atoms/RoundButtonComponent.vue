<template>
  <div
    class="round-button border-1 border-white cursor-pointer flex justify-center items-center w-12 h-12 rounded-full bg-white"
  >
    <slot />
  </div>
</template>

<style scoped>
.round-button {
  transition: border-color 0.3s;
}

.round-button:hover {
  border-color: var(--color-gray-900);
}
</style>

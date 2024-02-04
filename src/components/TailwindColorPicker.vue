<!-- Main Component -->
<template>
  <div>
    <button @click="togglePicker">Open Color Picker</button>

    <div v-show="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="flex flex-col bg-white rounded p-4 h-4/5 overflow-auto w-3/5">
        <button @click="closePicker" class="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <!-- Kategorie kolorów -->
        <div class="grid grid-cols-1 gap-4 mt-4">
          <TailwindCSSColors />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import TailwindCSSColors from './TailwindCSSColors.vue';

const isVisible = ref(true);

const closePicker = () => {
  isVisible.value = false;
};

const togglePicker = () => {
  isVisible.value = !isVisible.value;
};

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closePicker();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Dodaj style wg potrzeb */
</style>

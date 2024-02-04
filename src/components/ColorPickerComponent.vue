<!-- ColorPickerComponent.vue -->
<template>
  <div class="flex p-4">
    <div class="flex justify-center items-center">
      <h1 class="text-white">Colors</h1>
    </div>
    <div @click="isSwatchOpen = true" class="w-32 h-32 cursor-pointer" :style="{ backgroundColor: selectedColor }"></div>
    <div v-if="isSwatchOpen"
      class="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center"
      @click="isSwatchOpen = false">
      <div class="grid grid-cols-8 gap-2 p-4">
        <div v-for="swatch in colorSwatches" :key="swatch.name" @click="handleColorClick(swatch.color)"
          class="w-10 h-10 cursor-pointer" :style="{ backgroundColor: swatch.color }"></div>
      </div>
    </div>
    <div class="max-w-md mx-auto px-4 flex justify-center items-center">
      <ul class="flex items-center flex-wrap gap-4">
        <li v-for="(color, index) in colors" :key="color.id" class="flex-none relative">
          <label :for="color.bg" class="block w-8 h-8">
            <input :id="color.bg" type="radio" name="color" class="sr-only peer" />
            <span @click="toggleColorPicker(index)" :style="{ backgroundColor: color.bg }" :class="[
              'inline-flex justify-center items-center w-full h-full rounded-lg cursor-pointer duration-150',
              color.ring,
              { 'ring ring-offset-2': index === selectedColorIndex && colorPickerVisible },
            ]">
              <svg v-if="index !== selectedColorIndex" @click.stop="removeColor(index)" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke="white" class="absolute bottom-5 left-5 w-4 h-4 cursor-pointer">
                <rect width="24" height="24" rx="60" fill="red" stroke="none" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </span>
          </label>
        </li>
      </ul>

      <!-- Panel wyboru kolorów -->
      <div v-if="colorPickerVisible" class="absolute top-0 left-0 mt-10">
        <!-- Użyj komponentu TailwindColorPicker -->
        <TailwindColorPicker @selected="handleColorSelection" />
        <!-- Panel customowego wyboru koloru -->
        <div class="my-2">
          <input v-model="customColor" type="color" class="w-8 h-8 rounded-lg" />
        </div>

        <!-- Guzik zatwierdzenia -->
        <button @click="applyColor" class="px-2 py-1 text-white bg-blue-500 rounded-md">
          Apply
        </button>
      </div>

      <button @click="addColor" :disabled="colors.length >= 8" class="ml-4 px-2 py-1 text-white bg-blue-500 rounded-md">
        {{ colors.length >= 8 ? 'Maximum' : 'Add Color' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import TailwindColorPicker from '../components/TailwindColorPicker.vue';

const colors = ref([
  { id: 1, bg: '#2563EB', ring: 'ring-[#2563EB]' },
  { id: 2, bg: '#8B5CF6', ring: 'ring-[#8B5CF6]' },
  // ... Możesz dodać tutaj więcej domyślnych kolorów
]);

const selectedColorIndex = ref(null);
const colorPickerVisible = ref(false);
const customColor = ref('#ffffff');
const selectedColor = ref(null);

const toggleColorPicker = (index) => {
  selectedColorIndex.value = index;
  colorPickerVisible.value = true;
};

const removeColor = (index) => {
  colors.value.splice(index, 1);
  if (selectedColorIndex.value === index) {
    selectedColorIndex.value = null;
    colorPickerVisible.value = false;
  }
};

const addColor = () => {
  if (colors.value.length < 8) {
    const newColor = {
      id: colors.value.length + 1,
      bg: generateRandomColor(),
      ring: generateRandomColor(),
    };
    colors.value = [...colors.value, newColor];
  }
};

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const applyColor = () => {
  // Tutaj dodaj logikę zmiany koloru na podstawie wyboru użytkownika
  // Możesz użyć zarówno wartości z palety Tailwind CSS, jak i koloru customowego
  const selectedColorValue = selectedColor.value || customColor.value;
  colors.value[selectedColorIndex.value].bg = selectedColorValue;
  selectedColorIndex.value = null;
  colorPickerVisible.value = false;
};

const handleColorSelection = (selectedColorHex) => {
  console.log('Selected color:', selectedColorHex);
  selectedColor.value = selectedColorHex;
  // Tutaj możesz obsłużyć wybór koloru w głównym komponencie
};

</script>

<style scoped>
/* Dodaj style wg potrzeb */
</style>

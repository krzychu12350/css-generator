<template>
    <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="flex flex-col bg-white rounded p-4 w-3/5">
            <button @click="closePalette"
                class="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-800 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>

            <!-- Paleta kolorów -->
            <div class="grid grid-cols-11 gap-2 mt-4">
                <div v-for="(color, index) in colors" :key="index" @click="selectPaletteColor(color.value)"
                    class="relative flex items-center gap-x-3 w-full cursor-pointer sm:block sm:space-y-1.5">
                    <div :class="color.value" class="h-8 w-8 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 mr-2">
                    </div>
                    <div class="px-0.5">
                        <div class="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">{{ color.label }}
                        </div>
                        <div
                            class="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
                            {{ color.hex }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const { visible, colors } = defineProps(['visible', 'colors']);
const { selectPaletteColor, closePalette } = defineEmits();
</script>
  
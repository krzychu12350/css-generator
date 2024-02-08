<template>
  <div class="flex p-4">
    <div class="flex justify-center items-center">
      <h1 class="text-white">Colors</h1>
    </div>

    <div class="max-w-md mx-auto px-4 flex justify-center items-center">
      <!-- <h2 class="text-gray-800 font-medium">Pick your favorite color</h2> -->
      <ul class="flex flex-col items-center flex-wrap gap-4">
        <li v-for="(item, idx) in colors" :key="idx" class="flex-none">
          <div class="flex">
            <Slider :initial-value="100" label="color"></Slider>
            <label :for="item.bg" class="block relative w-8 h-8">
              <input
                :id="item.bg"
                type="radio"
                :checked="idx === 1"
                name="color"
                class="sr-only peer"
              />
              <span
                :class="[
                  'inline-flex justify-center items-center w-full h-full rounded-md peer-checked:ring ring-offset-2 cursor-pointer duration-150',
                  item.bg,
                  item.ring,
                ]"
              ></span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 text-white absolute inset-0 m-auto z-0 pointer-events-none hidden peer-checked:block duration-150"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Slider from "./Silder.vue";
const colors = ref([
  { bg: "bg-[#2563EB]", ring: "ring-[#2563EB]" },
  { bg: "bg-[#8B5CF6]", ring: "ring-[#8B5CF6]" },
  { bg: "bg-[#DB2777]", ring: "ring-[#DB2777]" },
  { bg: "bg-[#475569]", ring: "ring-[#475569]" },
  { bg: "bg-[#EA580C]", ring: "ring-[#EA580C]" },
]);
</script>

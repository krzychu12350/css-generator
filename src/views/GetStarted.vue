<template>
  <SidebarComponent></SidebarComponent>
  <div class="max-w-screen-xl mx-auto px-4 md:px-8 mt-4 mb-4">
    <h3 class="text-gray-800 text-xl font-bold sm:text-2xl">Gradient preview</h3>
    <p class="text-gray-600 mt-2">
      Choose colors, angles, and transitions to create eye-catching visual effects for
      your website.
    </p>
  </div>
  <TabsComponent></TabsComponent>
  <div class="max-w-md mx-auto px-4">
    <h2 class="text-gray-800 font-medium">Pick your favorite color</h2>
    <ul class="mt-4 flex items-center flex-wrap gap-4">
      <li v-for="(item, idx) in colors" :key="idx" class="flex-none">
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
              'inline-flex justify-center items-center w-full h-full rounded-full peer-checked:ring ring-offset-2 cursor-pointer duration-150',
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
      </li>
    </ul>
  </div>

  <div class="relative max-w-xs mx-auto mt-12">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-2.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
    <select
      class="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
    >
      <option>Project manager</option>
      <option>Software engineer</option>
      <option>IT manager</option>
      <option>UI / UX designer</option>
    </select>
  </div>

  <div class="max-w-md mx-auto px-4">
    <label class="text-gray-600"> Amount </label>
    <div class="relative mt-2 max-w-xs text-gray-500">
      <input
        type="number"
        min="1"
        max="20"
        placeholder="1"
        class="w-full pl-2 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
      />
    </div>
    <Slider></Slider>
  </div>
  <GradientContainer class="w-50"></GradientContainer>
</template>
<script setup lang="ts">
import TabsComponent from "../components/TabsComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import GradientContainer from "../components/GradientContainer.vue";
import Slider from "../components/Silder.vue";
import { ref } from "vue";

const colors = ref([
  { bg: "bg-[#2563EB]", ring: "ring-[#2563EB]" },
  { bg: "bg-[#8B5CF6]", ring: "ring-[#8B5CF6]" },
  { bg: "bg-[#DB2777]", ring: "ring-[#DB2777]" },
  { bg: "bg-[#475569]", ring: "ring-[#475569]" },
  { bg: "bg-[#EA580C]", ring: "ring-[#EA580C]" },
]);
</script>

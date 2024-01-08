<template>
  <!-- <div class="flex">
    <SidebarComponent></SidebarComponent>
    <div class="flex justify-center items-center h-screen">
      <GradientContainer class="ml-12 mt-12"></GradientContainer>
    </div>
  </div> -->
  <div class="flex">
    <div class="">
      <SidebarComponent></SidebarComponent>
    </div>
    <div class="w-full h-screen flex items-center justify-center p-4 relative">
      <GradientContainer class=""></GradientContainer>
      <div class="absolute">
        <div class="bg-white p-4 bg-opacity-20 rounded-md w-50">
          <!-- <span class="text-white font-bold p-2">Control panel</span> -->
          <ColorPickerComponent></ColorPickerComponent>
          <DirectionPickerComponent></DirectionPickerComponent>
          <Slider label="Speed"></Slider>
          <Slider label="Zoom"></Slider>
          <div class="flex p-4">
            <button
              className="p-2 float-right text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-500 active:bg-indigo-700"
            >
              Generate
            </button>
          </div>
        </div>
        <div class="bg-white p-4 bg-opacity-20 rounded-md w-50 mt-4">
          <TabsComponent></TabsComponent>
          <div class="flex p-4">
            <button
              className="p-2 float-right text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-500 active:bg-indigo-700"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="max-w-screen-xl mx-auto px-4 md:px-8 mt-4 mb-4">
    <h3 class="text-gray-800 text-xl font-bold sm:text-2xl">Gradient preview</h3>
    <p class="text-gray-600 mt-2">
      Choose colors, angles, and transitions to create eye-catching visual effects for
      your website.
    </p>
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
    <Slider label="Speed"></Slider>
    <Slider label="Zoom"></Slider>
  </div> -->
</template>
<script setup lang="ts">
import TabsComponent from "../components/TabsComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import GradientContainer from "../components/GradientContainer.vue";
import Slider from "../components/Silder.vue";
import ColorPickerComponent from "../components/ColorPickerComponent.vue";
import DirectionPickerComponent from "../components/DirectionPickerComponent.vue";
</script>

<template>
  <GradientContainer class=""></GradientContainer>
  <div class="absolute">
    <div class="bg-white p-4 bg-opacity-20 rounded-md w-50">
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
</template>
<script setup lang="ts">
import TabsComponent from "../atom/TabsComponent.vue";

import GradientContainer from "../atom/GradientContainer.vue";
import Slider from "../atom/Silder.vue";
import ColorPickerComponent from "../atom/ColorPickerComponent.vue";
import DirectionPickerComponent from "../atom/DirectionPickerComponent.vue";
</script>

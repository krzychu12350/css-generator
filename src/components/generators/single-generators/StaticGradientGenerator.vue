<template>
  <GradientContainer :gradientStyle="gradientTailwindClasses"></GradientContainer>
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
import GradientContainer from "../common/GradientContainer.vue";
import Slider from "../atom/Silder.vue";
import ColorPickerComponent from "../atom/ColorPickerComponent.vue";
import DirectionPickerComponent from "../atom/DirectionPickerComponent.vue";
import { ref, computed } from "vue";
// import useEventsBus from "../composables/eventBus";
import { CssToTailwindTranslator } from "css-to-tailwind-translator";
import { twj } from "tw-to-css";

const colors = ref<string[]>(["#ff8a00", "#e52e71", "#0075ff"]);
const currentColorIndex = ref(0);
// const { emit } = useEventsBus();
let conversionResult = ref();

const gradientStyle = computed(() => ({
  background: `linear-gradient(90deg, ${colors.value[currentColorIndex.value]}, ${
    colors.value[(currentColorIndex.value + 1) % colors.value.length]
  }, ${colors.value[(currentColorIndex.value + 2) % colors.value.length]})`,
}));

// console.log(gradientStyle);
// const gradientTailwindClasses = computed(
//   "bg-gradient-to-r from-#ff8a00 via-#e52e71 to-#0075ff"
// );

const gradientTailwindClasses = ref(
  // "bg-gradient-to-r from-#ff8a00 via-#e52e71 to-#0075ff"
  "bg-gradient-to-r from-green-400 via-red-600 to-blue-500"
);

const cssCode = '{ "background": "linear-gradient(90deg, #ff8a00, #e52e71, #0075ff)" }';
conversionResult.value = CssToTailwindTranslator(cssCode);

const styleInline = twj("bg-gradient-to-r from-green-400 to-blue-500", {
  minify: false,
  merge: false,
});
console.log(styleInline);
</script>

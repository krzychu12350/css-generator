<template>
  <GeneratorTemplate>
    <template v-slot:result-container>
      <GradientContainer :gradientStyle="gradientTailwindClasses"></GradientContainer>
    </template>

    <template v-slot:config-panel>
      <div class="flex">
        <Button text="Linear"></Button>
        <Button text="Radical"></Button>
      </div>
      <ColorPickerComponent></ColorPickerComponent>
      <!-- <DirectionPickerComponent></DirectionPickerComponent> -->
      <Slider
        :initialValue="90"
        label="Directon"
        @valueChanged="handleChangedDirection"
      ></Slider>
      <!-- <Slider
        :initialValue="10"
        label="Speed"
        @valueChanged="handleChangedSpeed"
      ></Slider> -->
      <!-- <Slider :initialValue="10" label="Zoom" @valueChanged="handleChangedZoom"></Slider> -->
      <div class="flex justify-between">
        <Button text="Generate"></Button>
        <Button text="Save as"></Button>
      </div>
    </template>

    <template v-slot:source-config-panel>
      <TabsComponent></TabsComponent>
      <Button text="Copy"></Button>
    </template>
  </GeneratorTemplate>
</template>
<script setup lang="ts">
import GeneratorTemplate from "../atom/GeneratorTemplate.vue";
import TabsComponent from "../atom/TabsComponent.vue";
import GradientContainer from "../common/GradientContainer.vue";
import Slider from "../atom/Silder.vue";
import ColorPickerComponent from "../atom/ColorPickerComponent.vue";
// import DirectionPickerComponent from "../atom/DirectionPickerComponent.vue";
import { ref, computed } from "vue";
import Button from "../atom/Button.vue";
// import useEventsBus from "../composables/eventBus";
import { CssToTailwindTranslator } from "css-to-tailwind-translator";
import { twj } from "tw-to-css";

const zoom = ref(0);
const speed = ref(0);
const direction = ref(0);

const handleChangedZoom = (newValue: number) => {
  zoom.value = newValue;
  console.log("Current zoom value" + zoom.value);
};
const handleChangedSpeed = (newValue: number) => {
  speed.value = newValue;
  console.log("Current speed value" + speed.value);
};

const handleChangedDirection = (newValue: number) => {
  direction.value = newValue;
  console.log("Current direction value" + direction.value);
};

const colors = ref<string[]>(["#ff8a00", "#e52e71", "#0075ff"]);
const currentColorIndex = ref(0);
// const { emit } = useEventsBus();
let conversionResult = ref();

const gradientStyle = computed(() => ({
  background: `linear-gradient(90deg, ${colors.value[currentColorIndex.value]}, ${
    colors.value[(currentColorIndex.value + 1) % colors.value.length]
  }, ${colors.value[(currentColorIndex.value + 2) % colors.value.length]})`,
}));
console.log(gradientStyle);
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

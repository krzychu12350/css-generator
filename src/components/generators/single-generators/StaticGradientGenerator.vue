<template>
  <GeneratorTemplate>
    <template v-slot:result-container>
      <GradientContainer
        gradientStyle="bg-gradient-to-r from-fuchsia-700 via-red-100 via-amber-900 to-blue-800"
      ></GradientContainer>
    </template>

    <template v-slot:config-panel>
      <div class="flex">
        <Button text="Linear"></Button>
        <Button text="Radical"></Button>
      </div>
      <TailwindColorPicker></TailwindColorPicker>

      <ColorPickerComponent
        @inital-colors-set="setInitalColorsSet"
        @colorsSetChanged="handleChangedColorsSet"
      ></ColorPickerComponent>
      <!-- <DirectionPickerComponent></DirectionPickerComponent> -->
      <Slider
        :initialValue="gradientProperties.direction"
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
        <Button text="Generate" @click="generateStaticGradient"></Button>
        <Button text="Save as"></Button>
      </div>
    </template>
    <template v-slot:source-config-panel>
      <p>{{ gradientTailwindClasses }}</p>
      <!-- <TabsComponent></TabsComponent>
      <Button text="Copy"></Button> -->
    </template>
  </GeneratorTemplate>
</template>
<script setup lang="ts">
import GeneratorTemplate from "../atom/GeneratorTemplate.vue";
// import TabsComponent from "../atom/TabsComponent.vue";
import GradientContainer from "../common/GradientContainer.vue";
import Slider from "../atom/Silder.vue";
import ColorPickerComponent from "../atom/ColorPickerComponent.vue";
import TailwindColorPicker from "../atom/TailwindColorPicker.vue";
// import DirectionPickerComponent from "../atom/DirectionPickerComponent.vue";
import { ref, watch, computed, ComputedRef, onBeforeMount } from "vue";
import Button from "../atom/Button.vue";
import useEventsBus from "../../../composables/eventBus";
import { getRandomColors } from "../../../utils/colors-functions";

const { bus } = useEventsBus();
// let gradientTailwindClasses = ref("");
// const emit = defineEmits(["gradient-properties-changed"]);
// import { CssToTailwindTranslator } from "css-to-tailwind-translator";
// import { twj } from "tw-to-css";
let componentKey = ref(0);

// const forceRerender = () => {
//   componentKey.value += 1;
// };

let gradientProperties = ref({
  colors: [],
  direction: 90,
});

onBeforeMount(() => {
  gradientProperties.value.colors = getRandomColors(4);
});

watch(
  () => bus.value.get("inital-colors-set"),
  (data) => {
    console.log(data[0].colors);
    gradientProperties.value.colors = data[0].colors;
    // gradientTailwindClasses = generateGradient(data[0].colors);
    // forceRerender();
  }
);
// const colors = ref(getRandomColors(4));
// const zoom = ref(0);
// const speed = ref(0);
// const direction = ref(0);

// const handleChangedZoom = (newValue: number) => {
//   zoom.value = newValue;
//   console.log("Current zoom value" + zoom.value);
// };
// const handleChangedSpeed = (newValue: number) => {
//   speed.value = newValue;
//   console.log("Current speed value" + speed.value);
// };

const setInitalColorsSet = (colors: any) => {
  gradientProperties.value.colors = colors;
  // gradientTailwindClasses = generateGradient(colors);
  // console.log(gradientTailwindClasses.value);
};

const handleChangedColorsSet = (colors: any) => {
  gradientProperties.value.colors = colors;
  // gradientTailwindClasses = generateGradient(colors);
  // console.log(gradientTailwindClasses.value);
  // gradientTailwindClasses.value = generateGradient(gradientProperties.value.colors);
  // console.log(gradientTailwindClasses.value);
  // console.log(gradientProperties.value);
  // console.log(generateGradient(gradientProperties.value.colors));
};

const handleChangedDirection = (newValue: number) => {
  gradientProperties.value.direction = newValue;
  console.log("Current direction value" + gradientProperties.value.direction);
};

const generateGradient = (colors: any) => {
  let gradient = "bg-gradient-to-r";

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    // gradient += ` ${color.name}`;
    if (i === 0) {
      gradient += " from";
    } else if (i === colors.length - 1) {
      gradient += " to";
    } else {
      gradient += " via";
    }
    gradient += `-${color.name}/${color.opacity}`;
    // gradient += `-${color.name}`;
  }

  return gradient;
};

// const colors = ref<string[]>(["#ff8a00", "#e52e71", "#0075ff"]);
// const currentColorIndex = ref(0);
// let conversionResult = ref();
// const gradientStyle = computed(() => ({
//   background: `linear-gradient(90deg, ${colors.value[currentColorIndex.value]}, ${
//     colors.value[(currentColorIndex.value + 1) % colors.value.length]
//   }, ${colors.value[(currentColorIndex.value + 2) % colors.value.length]})`,
// }));
// console.log(gradientStyle);
// console.log(gradientStyle);
let gradientTailwindClasses: ComputedRef<string> = computed(() => {
  return generateGradient(gradientProperties.value.colors);
  //return "bg-gradient-to-r from-fuchsia-800/100 via-pink-900/100 via-teal-800/100 to-blue-300/100";
});
//"bg-gradient-to-r from-#ff8a00 via-#e52e71 to-#0075ff"

// const gradientTailwindClasses: Ref<string> = ref(
//   // "bg-gradient-to-r from-#ff8a00 via-#e52e71 to-#0075ff"
//   // "bg-gradient-to-r from-green-400 via-red-600 to-blue-500/80"
//   // "bg-gradient-to-r from-rose-900 via-black-300 via-blue-300 to-rose-400"
//   "bg-gradient-to-r from-emerald-300/100 via-orange-200/100 via-indigo-400/100 to-fuchsia-800/54"
// );

// watch(gradientProperties, () => {
//   gradientTailwindClasses.value = generateGradient(gradientProperties.value.colors);
//   console.log(gradientTailwindClasses.value);
// });
function generateStaticGradient() {
  // gradientTailwindClasses.value = generateGradient(gradientProperties.value.colors);
  // emit("gradient-properties-changed", { props: gradientTailwindClasses.value });
  // forceRerender();
  // emit("gradient-properties-changed", { message: "Hello from child!" });
  // console.log(gradientTailwindClasses.value);
}
// let gradientTailwindClasses = ref(generateGradient(gradientProperties.value.colors));

// const cssCode = '{ "background": "linear-gradient(90deg, #ff8a00, #e52e71, #0075ff)" }';
// conversionResult.value = CssToTailwindTranslator(cssCode);

// const styleInline = twj("bg-gradient-to-r from-green-400 to-blue-500", {
//   minify: false,
//   merge: false,
// });
// console.log(styleInline);
</script>

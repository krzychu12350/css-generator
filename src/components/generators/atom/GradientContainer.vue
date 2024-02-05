<!-- GradientContainer.vue -->
<template>
  <div
    class="gradient-container rounded-md"
    @click="animateGradient"
    :style="gradientStyle"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// import useEventsBus from "../composables/eventBus";
import { CssToTailwindTranslator } from "css-to-tailwind-translator";
// import { twi } from "tw-to-css";
const colors = ref<string[]>(["#ff8a00", "#e52e71", "#0075ff"]);
const currentColorIndex = ref(0);
// const { emit } = useEventsBus();
let conversionResult = ref();
const animateGradient = () => {
  currentColorIndex.value = (currentColorIndex.value + 1) % colors.value.length;
};

const gradientStyle = computed(() => ({
  background: `linear-gradient(90deg, ${colors.value[currentColorIndex.value]}, ${
    colors.value[(currentColorIndex.value + 1) % colors.value.length]
  }, ${colors.value[(currentColorIndex.value + 2) % colors.value.length]})`,
}));
const cssCode = '{ "background": "linear-gradient(90deg, #ff8a00, #e52e71, #0075ff)" }';
conversionResult.value = CssToTailwindTranslator(cssCode);
//@ts-ignore
const gradientTailwindClasses = computed(
  () => "bg-gradient-to-r from-#ff8a00 via-#e52e71 to-#0075ff"
);
</script>

<style scoped>
.gradient-container {
  width: 100%;
  height: 100%;
  transition: background 2s ease-in-out;
  cursor: pointer;
  /* position: relative; */
}
</style>

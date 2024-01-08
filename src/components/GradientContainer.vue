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

const colors = ref<string[]>(["#ff8a00", "#e52e71", "#0075ff"]);
const currentColorIndex = ref(0);

const animateGradient = () => {
  currentColorIndex.value = (currentColorIndex.value + 1) % colors.value.length;
};

const gradientStyle = computed(() => ({
  background: `linear-gradient(45deg, ${colors.value[currentColorIndex.value]}, ${
    colors.value[(currentColorIndex.value + 1) % colors.value.length]
  }, ${colors.value[(currentColorIndex.value + 2) % colors.value.length]})`,
}));
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

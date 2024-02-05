<!-- GradientContainer.vue
@click="animateGradient"
:style="props.gradientStyle"
-->
<template>
  <div class="gradient-container rounded-md" :class="props.gradientStyle"></div>
</template>

<script setup lang="ts">
const props = defineProps({
  gradientStyle: {
    type: String,
    required: true,
    default: () => "",
  },
});
console.log(props.gradientStyle);
// const animateGradient = () => {
//   currentColorIndex.value = (currentColorIndex.value + 1) % colors.value.length;
// };
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

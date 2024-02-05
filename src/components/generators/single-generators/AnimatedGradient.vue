<template>
  <div
    :style="{ '--duration': animationDuration + 's' }"
    :class="{ 'animated-gradient': isAnimated }"
  ></div>
  <button @click="toggleAnimation">Toggle Animation</button>
  <label>
    Animation Duration:
    <input v-model.number="animationDuration" type="number" min="1" />
  </label>
  <h1>Duration in seconds: {{ animationDuration }}</h1>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isAnimated = ref(true);
const animationDuration = ref<number>(2);

const toggleAnimation = () => {
  isAnimated.value = !isAnimated.value;
};
</script>

<style scoped>
.animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #08f71c, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientAnimation var(--duration) ease infinite;
  height: 100vh;
  width: 100%;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

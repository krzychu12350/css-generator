<template>
  <div class="animated-gradient-container">
    <!-- Your component content -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.animated-gradient-container {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Set text color to be visible on the gradient */
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
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

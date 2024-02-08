<template>
  <!-- Named slot for 'result-container' -->
  <slot name="result-container"> </slot>

  <div class="absolute">
    <div class="bg-white p-4 bg-opacity-20 rounded-md w-50">
      <!-- Named slot for 'config-panel' -->
      <slot name="config-panel"></slot>
    </div>
    <div class="bg-white p-4 bg-opacity-20 rounded-md w-50 mt-4">
      <!-- Named slot for 'source-code-panel' -->
      <slot name="source-config-panel"></slot>
    </div>
  </div>
</template>

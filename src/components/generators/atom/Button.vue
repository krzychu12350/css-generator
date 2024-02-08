<template>
  <div class="flex p-4">
    <button
      className="p-2 float-right text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-500 active:bg-indigo-700"
    >
      {{ props.text }}
    </button>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: () => "",
  },
});
</script>

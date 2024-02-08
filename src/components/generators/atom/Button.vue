<template>
  <button
    className="p-2 text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-500 active:bg-indigo-700 w-[10rem]"
  >
    {{ props.text }}
  </button>
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

<style scoped>
.primary-button {
  width: 200px;
}
</style>

<!-- GradientContainer.vue
@click="animateGradient"
:style="props.gradientStyle"
-->
<template>
  <div :key="componentKey" :class="['gradient-container rounded-md', classes]">
    {{ componentKey }}
    {{ classes }}
    <input type="number" min="1" v-model="value" />
  </div>
</template>

<script setup lang="ts">
import { Ref, computed, onMounted, ref, watch } from "vue";
import useEventsBus from "../../../composables/eventBus";

const { bus } = useEventsBus();
let componentKey = ref(0);
const props = defineProps({
  gradientStyle: {
    type: String,
    required: true,
    default: () => "",
  },
});

let gradient: Ref<string> = ref(props.gradientStyle);
let value = ref(100);
let classes = computed(() => {
  return `bg-gradient-to-r from-fuchsia-700 via-red-100 via-amber-900 to-red-800 opacity-${value.value}`;
});

// Watch for changes in the value
watch(value, () => {
  // Increment the component key to force a reload
  componentKey.value++;
});

onMounted(() => {
  console.log(gradient.value);
});

watch(
  () => bus.value.get("gradient-properties-changed"),
  (data) => {
    gradient.value = data[0].props;
    console.log(gradient.value);
  }
);

// watch(
//   () => props.gradientStyle,
//   (newValue) => {
//     console.log("Data from parent updated:", newValue);
//     gradient.value = newValue;
//   }
// );

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

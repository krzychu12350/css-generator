<template>
  <div class="flex p-4">
    <div class="flex justify-center items-center">
      <h1 class="text-white">Colors</h1>
    </div>

    <div class="max-w-md mx-auto px-4 flex justify-center items-center">
      <ul class="flex flex-col items-center flex-wrap gap-4">
        <li v-for="(color, idx) in colors" :key="idx" class="flex-none">
          <div class="flex">
            <Slider
              :initial-value="100"
              :label="color.name"
              @valueChanged="(value) => handleChangedTransparency(value, idx)"
            ></Slider>

            <label :for="color.bg" class="block relative w-8 h-8">
              <input
                :id="color.bg"
                type="radio"
                :checked="idx === 1"
                name="color"
                class="sr-only peer"
              />
              <span
                :class="[
                  'inline-flex justify-center items-center w-full h-full rounded-md peer-checked:ring ring-offset-2 cursor-pointer duration-150',
                  color.bg,
                  color.ring,
                ]"
              ></span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import Slider from "./Silder.vue";
import { getRandomColors } from "../../../utils/colors-functions";
// import useEventsBus from "../../../composables/eventBus";

// const { emit } = useEventsBus();

const emiter = defineEmits(["colorsSetChanged", "inital-colors-set"]);

const colors = ref(getRandomColors(4));

const handleChangedTransparency = (newValue: number, idx: number) => {
  // Update the opacity of the color at the specified index
  colors.value[idx].opacity = newValue; // Convert back to a decimal value
  // console.log("Current opacity value:", idx, newValue);
  // console.log(colors.value);
  emiter("colorsSetChanged", colors.value);
};

onBeforeMount(() => {
  emiter("inital-colors-set", { colors: colors.value });
});

// onBeforeMount(() => {
//   randomColors.value = getRandomColors(2);
//   console.log("Random Colors Array:", randomColors.value);
// });

// const colors = ref([
//   { bg: "bg-[#2563EB]", ring: "ring-[#2563EB]" },
//   { bg: "bg-[#8B5CF6]", ring: "ring-[#8B5CF6]" },
//   { bg: "bg-[#DB2777]", ring: "ring-[#DB2777]" },
//   { bg: "bg-[#475569]", ring: "ring-[#475569]" },
//   { bg: "bg-[#EA580C]", ring: "ring-[#EA580C]" },
// ]);
// const colors = ref<Array<Object>>(randomColors);

// const colors: Ref<Array<Object>> = ref(randomColors);

// const colors: Ref<any> = ref(randomColors);

// console.log(colors.value);
</script>

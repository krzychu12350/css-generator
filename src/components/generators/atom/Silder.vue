<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from "radix-vue";

const sliderValue = ref([50]);
const props = defineProps({
  label: {
    type: String,
    required: true,
    default: () => "",
  },
});
</script>

<template>
  <div class="flex p-4">
    <!-- <h1>{{ sliderValue }}</h1> -->
    <div>
      <h1 class="text-white">{{ props.label }} - {{ sliderValue }}</h1>
    </div>
    <div class="ml-4">
      <SliderRoot
        v-model="sliderValue"
        class="relative flex items-center select-none touch-none w-[200px] h-5"
        :max="100"
        :step="1"
      >
        <SliderTrack class="bg-blackA10 relative grow rounded-full h-[3px]">
          <SliderRange class="absolute bg-white rounded-full h-full" />
        </SliderTrack>
        <SliderThumb
          class="block w-5 h-5 bg-blue shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
          aria-label="Volume"
        />
      </SliderRoot>
    </div>
  </div>
</template>

<template>
  <component :is="selected"></component>
</template>

<script setup lang="ts">
import { watch, shallowRef } from "vue";
import useEventsBus from "../../composables/eventBus";
import StaticGradientGenerator from "./single-generators/StaticGradientGenerator.vue";
import AnimatedGradientGenerator from "./single-generators/AnimatedGradientGenerator.vue";
import CustomShapeGenerator from "./single-generators/CustomShapeGenerator.vue";

const { bus } = useEventsBus();
let selected = shallowRef(StaticGradientGenerator);

watch(
  () => bus.value.get("setActiveTab"),
  (tab) => {
    let componentName = tab[0].tab_name + "Generator".replace(/\s/g, "");

    changeSelectedComponent(componentName);
  }
);

function changeSelectedComponent(componentName: string) {
  console.log(componentName);
  if (componentName == "StaticGradientGenerator")
    selected.value = StaticGradientGenerator;
  else if (componentName == "AnimatedGradientGenerator")
    selected.value = AnimatedGradientGenerator;
  else if (componentName == "CustomShapeGenerator") selected.value = CustomShapeGenerator;
}
</script>

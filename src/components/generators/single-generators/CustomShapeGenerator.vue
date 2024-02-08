<template>
  <GeneratorTemplate>
    <template v-slot:result-container> </template>

    <template v-slot:config-panel>
      <ColorPickerComponent></ColorPickerComponent>
    </template>

    <template v-slot:source-config-panel>
      <TabsComponent></TabsComponent>
      <Button text="Copy"></Button>
    </template>
  </GeneratorTemplate>
</template>
<script setup lang="ts">
import GeneratorTemplate from "../atom/GeneratorTemplate.vue";
</script>

<template>
  <TabsRoot class="max-w-screen-xl mx-auto" v-model="selectedTab">
    <TabsList
      class="hidden gap-x-3 py-1 overflow-x-auto px-px text-sm sm:flex"
      aria-label="Manage your account"
    >
      <TabsTrigger
        v-for="(item, idx) in tabItems"
        :key="idx"
        class="data-[state=active]:bg-gray-100 data-[state=active]:text-gray-700 data-[state=active]:shadow-sm outline-gray-800 py-1.5 px-3 rounded-lg duration-150 text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-100 font-medium"
        :value="item"
        @click="generateCode(item)"
      >
        {{ item }}
      </TabsTrigger>
    </TabsList>
    <div class="relative text-gray-500 sm:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="pointer-events-none w-5 h-5 absolute right-2 inset-y-0 my-auto"
      >
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd"
        />
      </svg>
      <select
        v-model="selectedTab"
        class="py-2 px-3 w-full bg-transparent appearance-none outline-none border rounded-lg shadow-sm focus:border-gray-800 text-sm"
      >
        <option v-for="(item, idx) in tabItems" :key="idx" :value="item">
          {{ item }}
        </option>
      </select>
    </div>
    <TabsContent
      v-for="(item, idx) in tabItems"
      :key="idx"
      class="py-6"
      :value="item"
      theme="light"
    >
      <p class="text-xs leading-normal">
        <!-- This is <b>{{ item }}</b> Tab Code: -->
        {{ sourceCode }}
      </p>
      <!-- <CodeEditor v-model="sourceCode" theme="atom-one-dark"></CodeEditor> -->
    </TabsContent>
  </TabsRoot>
  <!-- <Editor
    lang="css"
    codeValue="{text-align: center}"
    codeLines="true"
    fontSize="10px"
  ></Editor> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
/*
    codeValue="{
    text-align: center
}"
*/
// @ts-ignore
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "radix-vue";
import { GradientGenerator } from "../../../services/GradientGenerator";
//@ts-ignore
import Editor from "./Editor.vue";
// import hljs from "highlight.js";
// @ts-ignore
// import CodeEditor from "simple-code-editor";

const selectedTab = ref("CSS");
const sourceCode = ref("");
const tabItems = ["CSS", "Tailwind", "React", "Vue", "Angular"];

// const handleTabChange = (e: any) => {
//   console.log("tes");
//   selectedTab.value = e.target.value;
// };

function generateCode(technology: string) {
  // alert(technology);
  if (technology === "CSS") {
    sourceCode.value = GradientGenerator.generateCss();
  } else if (technology === "Tailwind") {
    sourceCode.value = GradientGenerator.generateTailwindCode();
  } else if (technology === "React") {
    sourceCode.value = GradientGenerator.generateReactComponentCode();
  } else if (technology === "Vue") {
    sourceCode.value = GradientGenerator.generateVueComponentCode();
  } else if (technology === "Angular") {
    sourceCode.value = GradientGenerator.generateAngularComponentCode();
  }
}

onMounted(() => {
  sourceCode.value = GradientGenerator.generateCss();
});
</script>

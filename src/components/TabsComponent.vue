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
    <TabsContent v-for="(item, idx) in tabItems" :key="idx" class="py-6" :value="item">
      <p class="text-xs leading-normal">
        This is <b>{{ item }}</b> Tab
      </p>
    </TabsContent>
  </TabsRoot>
</template>

<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "radix-vue";

const selectedTab = ref("CSS");

const tabItems = ["CSS", "Tailwind", "React", "Vue", "Angular"];

// const handleTabChange = (e: any) => {
//   selectedTab.value = e.target.value;
// };
</script>

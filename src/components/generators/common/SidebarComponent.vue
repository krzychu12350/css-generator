<template>
  <nav
    class="z-40 top-0 left-0 w-full border-r bg-white space-y-8 overflow-auto sm:w-80 h-screen"
  >
    <div class="sticky top-0 space-y-8 bg-white">
      <div class="h-20 flex items-center px-4 border-b md:px-8">
        <a href="javascript:void(0)" class="flex-none">
          <img src="https://floatui.com/logo.svg" width="140" class="mx-auto" />
        </a>
      </div>
      <!-- <div class="px-4 md:px-8">
          <div class="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="email"
              class="w-full pl-12 pr-3 py-2 bg-white text-sm text-gray-500 bg-transparent outline-none border ring-blue-600 focus:ring-2 shadow-sm rounded-lg duration-200"
              placeholder="Search..."
            />
          </div>
        </div> -->
    </div>
    <div class="text-[0.9rem] space-y-6">
      <div class="cursor-pointer" v-for="(tab, index) in tabs">
        <h3
          @click="changeCurrentTab(tab, index)"
          class="pb-3 px-4 font-medium text-gray-800 md:px-8 hover:text-gray-900"
        >
          {{ tab.name }}
        </h3>
        <!-- <div class="text-gray-600 px-4 md:px-8">
            <ul>
              <li v-for="(item, index) in lessons.rustLessons" :key="index">
                <a
                  :href="item.href"
                  class="block w-full py-2 px-4 border-l hover:border-indigo-600 hover:text-gray-900 duration-150 text-gray-500"
                  >{{ item.name }}</a
                >
              </li>
            </ul>
          </div> -->
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import useEventsBus from "../../../composables/eventBus";
import { reactive, onMounted } from "vue";

const { emit } = useEventsBus();

const tabs = reactive([
  { name: "Static Gradient", current: false },
  { name: "Animated Gradient", current: false },
  { name: "Custom Shape", current: false },
]);

function changeCurrentTab(tab: { name: string }, index: number) {
  tabs.map((t) => {
    t.current = false;
  });
  tabs[index].current = true;
  console.log(tab.name.replace(/\s/g, ""));
  emit("setActiveTab", { tab_name: tab.name.replace(/\s/g, "") });
}

onMounted(() => {});
// export default {
//   data() {
//     return {
//       lessons: {
//         rustLessons: [
//           { name: "Introduction to Rust", href: "javascript:void(0)" },
//           { name: "Installing and Setting up Rust", href: "javascript:void(0)" },
//           { name: "Basic Syntax and Data Types", href: "javascript:void(0)" },
//           { name: "Control Flow Statements", href: "javascript:void(0)" },
//           { name: "Functions and Modules", href: "javascript:void(0)" },
//           { name: "Ownership and Borrowing", href: "javascript:void(0)" },
//           { name: "Structs and Enums", href: "javascript:void(0)" },
//           { name: "Traits and Generics", href: "javascript:void(0)" },
//         ],
//         cargoLessons: [
//           { name: "Introduction to Cargo", href: "javascript:void(0)" },
//           { name: "Installing and Configuring Cargo", href: "javascript:void(0)" },
//           { name: "Basic Cargo Commands", href: "javascript:void(0)" },
//           { name: "Working with Dependencies", href: "javascript:void(0)" },
//           { name: "Rust Workspaces with Cargo", href: "javascript:void(0)" },
//           { name: "Ownership and Borrowing", href: "javascript:void(0)" },
//           { name: "Structs and Enums", href: "javascript:void(0)" },
//           { name: "Traits and Generics", href: "javascript:void(0)" },
//         ],
//       },
//     };
//   },
// };
</script>

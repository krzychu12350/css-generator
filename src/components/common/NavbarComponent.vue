<template>
  <nav class="bg-white w-full top-0 z-20">
    <div class="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
      <div class="flex items-center justify-between py-3 lg:py-4 lg:block">
        <router-link :to="{ name: 'home' }">
          <img
            src="https://www.floatui.com/logo.svg"
            width="120"
            height="50"
            alt="Float UI logo"
          />
        </router-link>
        <div class="lg:hidden">
          <button
            class="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
            @click="menuOpen()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              :class="[open ? 'block' : 'hidden']"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              :class="[open ? 'hidden' : 'block']"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto"
        :class="[open ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden']"
      >
        <div class="p-2">
          <ul class="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
            <!-- <li class="mt-8 mb-8 lg:mt-0 lg:mb-0">
              <a href="javascript:void(0)" class="text-gray-600 hover:text-indigo-600">
                Contact
              </a>
            </li> -->
            <li class="mt-4 lg:mt-0">
              <router-link
                :to="{ name: 'login' }"
                class="py-3 px-4 text-center border text-gray-600 hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
              >
                Login
              </router-link>
            </li>
            <li class="mt-8 lg:mt-0">
              <router-link
                :to="{ name: 'login' }"
                class="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
              >
                Sign Up
              </router-link>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <ul
            class="justify-center items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0"
          >
            <li
              v-for="(link, index) in navigation"
              :key="index"
              class="text-gray-600 hover:text-indigo-600"
            >
              <router-link :to="link.router">{{ link.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.sticky-nav {
  animation: sticky-nav 300ms;
}

@keyframes sticky-nav {
  0% {
    transform: translateY(-6em);
  }

  100% {
    transform: translateY(0);
  }
}
</style>

<script setup lang="ts">
import { ref, reactive } from "vue";

const navigation = reactive([
  { title: "Generators", router: "/generators" },
  { title: "Pricing", router: "/pricing" },
  { title: "Blog", router: "/blog" },
]);

let open = ref(false);

function menuOpen() {
  open.value = !open.value;
}
</script>

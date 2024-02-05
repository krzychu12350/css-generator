<template>
  <main>
    <div
      class="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8"
    >
      <div class="max-w-lg mx-auto space-y-3 text-center">
        <div className="pb-2">
          <img src="https://floatui.com/logo.svg" width="{150}" className="mx-auto" />
        </div>
        <p class="text-gray-800 text-4xl font-semibold sm:text-5xl">Page not found</p>
        <p class="text-gray-600">
          Sorry, the page you are looking for could not be found or has been removed.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <router-link
            :to="{ name: 'home' }"
            class="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg"
          >
            Go back
          </router-link>
          <a
            href="javascript:void(0)"
            class="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg"
          >
            Contact support
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

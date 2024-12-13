<template>
  <div
    class="group relative aspect-[16/9] bg-[#202229] rounded-lg flex items-center justify-center overflow-hidden perspective-1000 shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-105 hover:shadow-xl"
  >
    <!-- Icon or Image -->
    <img
      class="w-full transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-90 group-hover:opacity-50"
      :src="data.img"
      alt="Gemini Icon"
    />

    <!-- Content -->
    <div
      class="absolute flex flex-col justify-evenly inset-0 p-5 bg-[#202229] [transform:rotateX(-90deg)] origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.42, 0, 1, 0.47)] group-hover:[transform:rotateX(0deg)]"
    >
      <h3 class="text-xl font-bold text-[#f9b703]">{{ data.title }}</h3>
      <p class="mt-2 text-sm text-white">
        {{ data.description }}
      </p>
      <div class="flex justify-center gap-2 mt-4">
        <a
          :href="data.codeLink"
          target="_blank"
          class="px-4 cursor-pointer py-2 text-white transition bg-[#f9b703] rounded-md hover:bg-yellow-600"
        >
          View Code
        </a>
        <a
          v-if="!(data.demoLink === '#')"
          :href="data.demoLink"
          target="_blank"
          class="px-4 cursor-pointer py-2 text-[#f9b703] transition border border-[#f9b703] rounded-md hover:bg-[#f9b703]/10"
          @click="handleDemoClick"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style>
.perspective-1000 {
  perspective: 1000px;
}
</style>

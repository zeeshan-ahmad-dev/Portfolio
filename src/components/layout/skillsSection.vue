<template>
  <section
    class="bg-[#050505] py-8 border-t-[2px] border-[#ffffff0b] text-white text-center md:px-20 lg:py-10"
  >
    <h2 class="mb-4 text-4xl font-bold md:text-5xl">
      My <span class="text-[#f9b703]">Skills</span>
    </h2>
    <p
      class="mx-auto mb-10 text-sm leading-relaxed text-gray-300 md:text-base lg:w-3/4"
    >
      I build modern web applications using a mix of frontend and backend
      technologies.
    </p>

    <div class="flex flex-wrap gap-5 px-5 justify-evenly py-14">
      <div class="flex flex-col items-center gap-3 w-fit">
        <RadialProgress :progress="80" />
        JavaScript
      </div>
      <div class="flex flex-col items-center gap-3 w-fit">
        <RadialProgress :progress="85" />
        Tailwind CSS
      </div>
      <div class="flex flex-col items-center gap-3 w-fit">
        <RadialProgress :progress="80" />
        Vue.js
      </div>
      <div class="flex flex-col items-center gap-3 w-fit">
        <RadialProgress :progress="75" />
        Node.js
      </div>
      <div class="flex flex-col items-center gap-3 w-fit">
        <RadialProgress :progress="70" />
        MongoDB/MySQL
      </div>
    </div>
    
    <!-- View More Button -->
    <div class="flex justify-center w-full">
      <router-link
        class="bg-[#f9b703] text-black font-semibold hover:shadow-lg transition-all border-none px-5 py-2 text-sm sm:text-base sm:px-6 sm:py-3 my-4 gap-2 rounded-full hover:bg-yellow-400"
        to="/skills"
        aria-label="View more Projects"
      >
        View More Skills
      </router-link>
    </div>
  </section>
</template>

<script setup>
import RadialProgress from "../common/RadialProgress.vue";
</script>

<template>
  <section
    class="bg-[#050505] py-8 border-t-[1px] border-[#ffffff0b] text-white text-center md:px-20 lg:py-10"
  >
    <!-- Header -->
    <div class="px-6 mt-10 text-center lg:px-20">
      <h2 class="mb-4 text-3xl font-extrabold tracking-wide md:text-4xl">
        Explore My <span class="text-[#f9b703]">Projects</span>
      </h2>
      <p
        class="mx-auto text-sm leading-relaxed text-gray-300 md:text-base lg:w-3/4"
      >
        A glimpse into my projects, from responsive frontend interfaces to
        full-stack web applications built with Vue.js, React, Node.js, Express,
        MongoDB, and Tailwind CSS. Each project reflects my focus on clean code,
        practical solutions, and engaging user experiences.
      </p>
    </div>

    <!-- Projects Grid -->
    <section
      class="grid grid-cols-1 gap-8 px-6 mt-8 mb-6 md:grid-cols-2 lg:px-20"
    >
      <div
        v-for="(project, index) of projects"
        :key="index"
        class="relative overflow-hidden transition-transform duration-300 border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-lg"
      >
        <img
          :src="project.img"
          :alt="project.alt"
          class="w-full h-auto"
        />
        <div
          class="absolute inset-0 flex items-center justify-center text-lg font-medium text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 hover:opacity-100"
        >
          {{ project.title }}
        </div>
      </div>
    </section>

    <!-- View More Button -->
    <div class="flex justify-center w-full">
      <router-link
        class="bg-[#f9b703] text-black font-semibold hover:shadow-lg transition-all border-none px-5 py-2 text-sm sm:text-base sm:px-6 sm:py-3 my-4 gap-2 rounded-full hover:bg-yellow-400"
        to="/projects"
        aria-label="View more Projects"
      >
        View More
      </router-link>
    </div>
  </section>
</template>

<script setup>
import assets from '../../assets/assets';

const projects = [
  {
    img: assets.Gemini,
    alt: "Gemini Project",
    title: "Gemini Project"
  },
  {
    img: assets.SoloLevelX,
    alt: "SoloLevelX",
    title: "SoloLevelX"
  },
  {
    img: assets.Lugx,
    alt: "Lugx Project",
    title: "Lugx Project"
  },
  {
    img: assets.Dashboard,
    alt: "Dashboard Project",
    title: "Dashboard Project"
  }
];

</script>

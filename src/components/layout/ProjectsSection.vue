<template>
  <section class="relative bg-[#080808] overflow-hidden">

    <!-- Grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(249,183,3,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,183,3,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>

    <!-- Glow orb -->
    <div class="absolute top-[-50px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[rgba(249,183,3,0.05)] blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-20">

      <!-- Header -->
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-4xl font-extrabold text-white md:text-5xl">
          My <span class="text-[#f9b703]">Projects.</span>
        </h2>
        <p class="text-[#888] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          A selection of things I have built, from full-stack web apps to frontend interfaces.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 gap-5 mb-10 md:grid-cols-2">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group relative overflow-hidden rounded-xl border border-[rgba(249,183,3,0.12)] hover:border-[rgba(249,183,3,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-pointer"
        >
          <!-- Image -->
          <img
            :src="project.img"
            :alt="project.alt"
            class="object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />

          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-[rgba(8,8,8,0.75)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-5">
            <h3 class="text-lg font-bold tracking-wide text-white transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
              {{ project.title }}
            </h3>
          </div>
        </div>
      </div>

      <!-- View More -->
      <div class="flex justify-center">
        <router-link
          to="/projects"
          class="inline-flex items-center gap-2 bg-[#f9b703] hover:bg-[#ffc929] text-black font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(249,183,3,0.35)]"
        >
          View All Projects
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import assets from '../../assets/assets';

const projects = [
  {
    img: assets.Gemini,
    alt: "Gemini Project",
    title: "Gemini Clone"
  },
  {
    img: assets.SoloLevelX,
    alt: "SoloLevelX",
    title: "SoloLevelX"
  },
  {
    img: assets.Lugx,
    alt: "Lugx Project",
    title: "Lugx Gaming"
  },
  {
    img: assets.Dashboard,
    alt: "Dashboard Project",
    title: "Dashboard"
  }
];
</script>
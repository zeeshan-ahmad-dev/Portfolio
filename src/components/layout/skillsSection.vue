<template>
  <section class="relative bg-[#080808] overflow-hidden">

    <!-- Grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(249,183,3,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,183,3,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>

    <!-- Glow orb -->
    <div class="absolute bottom-[-50px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[rgba(249,183,3,0.05)] blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-20">

      <!-- Header -->
      <div class="mb-12 text-center">
        <h2 class="mb-4 text-4xl font-extrabold text-white md:text-5xl">
          My <span class="text-[#f9b703]">Skills.</span>
        </h2>
        <p class="text-[#888] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          I build modern web applications using a mix of frontend and backend technologies.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-4 gap-4 mb-12 sm:grid-cols-4 md:grid-cols-8">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group flex flex-col items-center gap-3 p-5 rounded-xl border border-[rgba(249,183,3,0.1)] hover:border-[rgba(249,183,3,0.35)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(249,183,3,0.04)] transition-all duration-300 hover:-translate-y-1"
        >
          <img :src="skill.icon" :alt="skill.name" class="object-contain w-8 h-8" />
          <span class="text-[#888] group-hover:text-white text-xs font-medium transition-colors duration-300">{{ skill.name }}</span>
        </div>
      </div>

      <!-- View More -->
      <div class="flex justify-center">
        <router-link
          to="/skills"
          class="inline-flex items-center gap-2 bg-[#f9b703] hover:bg-[#ffc929] text-black font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(249,183,3,0.35)]"
        >
          View All Skills
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];
</script>
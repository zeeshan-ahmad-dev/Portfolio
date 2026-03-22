<template>
  <section class="relative bg-[#080808] min-h-screen overflow-hidden">

    <!-- Grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(249,183,3,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,183,3,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>

    <!-- Glow orbs -->
    <div class="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[rgba(249,183,3,0.06)] blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[-50px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[rgba(249,183,3,0.04)] blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-20">

      <!-- Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-extrabold text-white md:text-5xl">
          My <span class="text-[#f9b703]">Skills.</span>
        </h2>
        <p class="text-[#888] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          The tech stack behind my web development projects.
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="group flex flex-col items-center gap-3 p-5 rounded-xl border border-[rgba(249,183,3,0.1)] hover:border-[rgba(249,183,3,0.35)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(249,183,3,0.04)] transition-all duration-300 hover:-translate-y-1"
        >
          <img :src="tech.icon" :alt="tech.name" class="object-contain w-10 h-10" />
          <span class="text-[#888] group-hover:text-white text-xs font-medium transition-colors duration-300 text-center">{{ tech.name }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const technologies = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];
</script>

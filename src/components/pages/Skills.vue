<template>
  <section
    class="bg-[#050505] px-6 pb-5 border-[1px] border-[#ffffff0b] text-white pt-32 md:px-20 md:pt-40 lg:pt-36 text-center"
  >
    <h2 class="mb-6 text-xl font-bold text-[#f9b703] md:text-4xl">My Skills</h2>
    <p class="mb-10 font-semibold text-gray-400">
      The Tech Stack Behind My Web Development Projects
    </p>
    <div
      class="grid grid-cols-2 gap-6 mb-16 md:mb-28 lg:mb-20 sm:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="flex flex-col items-center p-4 transition-transfrom duration-300 rounded-lg bg-[#191919] hover:scale-105"
      >
        <img :src="tech.icon" :alt="tech.name" class="h-16 mb-4" />
        <p class="text-lg font-semibold">{{ tech.name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const technologies = [
  { name: "HTML5", icon: "./src/assets/html.webp" },
  { name: "CSS3", icon: "./src/assets/css.webp" },
  { name: "JavaScript", icon: "./src/assets/js.webp" },
  { name: "jQuery", icon: "./src/assets/jquery.png" },
  { name: "Tailwind CSS", icon: "./src/assets/tailwind.png" },
  { name: "Vue.js", icon: "./src/assets/vue.png" },
  { name: "git", icon: "./src/assets/git.webp" },
  { name: "github", icon: "./src/assets/github.webp" },
];
</script>

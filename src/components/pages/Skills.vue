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
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
  { name: "Tailwind CSS", icon: "/tailwind.png" },
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

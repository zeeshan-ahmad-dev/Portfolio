<template>
  <section
    class="bg-[#050505] px-6 pb-5 border-[1px] border-[#ffffff0b] text-white pt-32 md:px-20 md:pt-40 lg:pt-36 text-center"
  >
    <!-- Header Section -->
    <div>
      <h2 class="mb-6 text-2xl font-bold md:text-4xl">
        My Awesome <span class="text-[#f9b703]">Projects</span>
      </h2>
      <p class="mb-10 font-semibold text-gray-400">
        I create modern, responsive websites using Vue, jQuery, and Tailwind
        CSS, delivering clean code and intuitive user experiences.
      </p>
    </div>

    <!-- Project List Section -->
    <div class="flex flex-col gap-10 mb-6">
      <!-- Rendering each project category using ProjectListContainer component -->
      <ProjectListContainer
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
import ProjectListContainer from "../common/ProjectListContainer.vue";

// Project data array containing categories and their respective projects
const projects = [
  {
    title: "Full Stack Projects",
    data: [
      {
        title: "SoloLevelX",
        img: "/Projects/SoloLevelX.png",
        description:
          "A full stack gamified fitness tracker inspired by Solo Leveling anime with 200+ registerations.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Solo-Level-X",
        demoLink: "https://sololevelx.vercel.app/",
      },
      {
        title: "Instagram Clone",
        img: "/Projects/Insta_clone.png",
        description:
          "An Instagram clone created with MEVN stack featuring features like signup/signin, posts, Like a post, comment on a post etc with authentications",
        codeLink: "https://github.com/zeeshan-ahmad-dev/instagram_clone",
        demoLink: "#",
      },
    ],
  },
  {
    title: "Vue Projects",
    data: [
      {
        title: "Gemini",
        img: "/Projects/gemini1.png",
        description:
          "A web app built with Vue.js that demonstrates clean UI design and responsive layouts.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Gemini",
        demoLink: "https://geminiz.netlify.app/",
      },
      {
        title: "Ecommerce Site",
        img: "/Projects/makeupMastery.jpeg",
        description:
          "An ecommerce platform focused on beauty products, showcasing user-friendly navigation and design.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/MakeupMastery",
        demoLink: "#",
      },
      {
        title: "Movie-Insight",
        img: "/Projects/movie-insight.png",
        description:
          "A Vue.js app for browsing and discovering movie information with a stylish interface.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Movie-Insight",
        demoLink: "https://movie-insight-z.netlify.app/",
      },
    ],
  },
  {
    title: "HTML/CSS/JavaScript Projects",
    data: [
      {
        title: "Youtube Clone",
        img: "/Projects/Youtube.png",
        description:
          "A clone of YouTube's frontend, replicating the platform's layout and design for practice.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/youtube-clone/",
        demoLink: "#",
      },
      {
        title: "TubeWizard",
        img: "/Projects/TubeWizard.png",
        description:
          "An interactive video management tool built with HTML, CSS, and JavaScript.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Tube-wizar/",
        demoLink: "https://zeeshan-ahmad-dev.github.io/Tube-wizar/",
      },
      {
        title: "Pixel Art Editor",
        img: "/Projects/PixelArt.png",
        description:
          "A fun and intuitive pixel art editor with grid-based drawing capabilities.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Pixel-Art-Editor",
        demoLink: "https://zeeshan-ahmad-dev.github.io/Pixel-Art-Editor/",
      },
    ],
  },
  {
    title: "JQuery Project",
    data: [
      {
        title: "Personal Dashboard",
        img: "/Projects/dashboard.png",
        description:
          "A personal productivity dashboard featuring task tracking, weather updates, and more.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Personal-Dashboard",
        demoLink: "https://zeeshan-ahmad-dev.github.io/Personal-Dashboard/",
      },
      {
        title: "Movie Mania",
        img: "/Projects/movieMania.png",
        description:
          "A movie discovery site powered by jQuery for seamless interactions and content display.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/movie-mania/",
        demoLink: "https://zeeshan-ahmad-dev.github.io/movie-mania",
      },
    ],
  },
  {
    title: "Tailwind Project",
    data: [
      {
        title: "LugX Gaming",
        img: "/Projects/lugx.png",
        description:
          "A gaming website built with Tailwind CSS, featuring a sleek and modern design.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Gaming-site",
        demoLink: "https://gaming-lugx.netlify.app/",
      },
      {
        title: "Netflix UI Clone",
        img: "/Projects/Netflix.png",
        description:
          "A responsive Netflix UI clone created with Tailwind CSS for a real-world design experience.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Netflix",
        demoLink: "https://neflix-ui-clone.netlify.app/",
      },
    ],
  },
];
</script>

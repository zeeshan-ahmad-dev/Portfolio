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
          My <span class="text-[#f9b703]">Projects.</span>
        </h2>
        <p class="text-[#888] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          A collection of things I have built across full-stack, frontend, and UI projects.
        </p>
      </div>

      <!-- Project Categories -->
      <div class="flex flex-col gap-14">
        <ProjectListContainer
          v-for="(project, index) in projects"
          :key="index"
          :project="project"
        />
      </div>

    </div>
  </section>
</template>

<script setup>
import ProjectListContainer from "../common/ProjectListContainer.vue";
import assets from "../../assets/assets";

const projects = [
  {
    title: "Full Stack Projects",
    data: [
      {
        title: "SoloLevelX",
        img: assets.SoloLevelX,
        description: "A full-stack gamified fitness tracking platform inspired by Solo Leveling, featuring user authentication, progress tracking, and a dynamic leaderboard with 700+ registered users.",
        demoLink: "https://sololevelx.vercel.app/",
      },
      {
        title: "Instagram Clone",
        img: assets.Insta,
        description: "A MEVN stack social media application with secure authentication, post creation, likes, and comments, implementing RESTful APIs and protected routes.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/instagram_clone",
        demoLink: "#",
      },
      {
        title: "Bookora",
        img: assets.Bookora,
        description: "A MERN stack ecommerce bookstore with secure authentication, cart functionality, and Stripe test payment integration.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/bookora",
        demoLink: "https://bookora-z.vercel.app/",
      },
    ],
  },
  {
    title: "Vue Projects",
    data: [
      {
        title: "Gemini Clone",
        img: assets.Gemini,
        description: "A Vue.js Gemini UI clone demonstrating clean component architecture and responsive design.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Gemini",
        demoLink: "https://geminiz.netlify.app/",
      },
      {
        title: "Ecommerce Site",
        img: assets.Ecommerce,
        description: "A beauty products ecommerce platform built with Vue.js, showcasing user-friendly navigation and design.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/MakeupMastery",
        demoLink: "#",
      },
      {
        title: "Movie Insight",
        img: assets.MovieInsight,
        description: "A Vue.js app for browsing and discovering movie information with a stylish interface.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Movie-Insight",
        demoLink: "https://movie-insight-z.netlify.app/",
      },
    ],
  },
  {
    title: "HTML / CSS / JavaScript",
    data: [
      {
        title: "YouTube Clone",
        img: assets.Youtube,
        description: "A frontend clone of YouTube replicating the platform's layout and design.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/youtube-clone/",
        demoLink: "#",
      },
      {
        title: "TubeWizard",
        img: assets.TubeWizard,
        description: "An interactive video management tool built with HTML, CSS, and JavaScript.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Tube-wizar/",
        demoLink: "https://zeeshan-ahmad-dev.github.io/Tube-wizar/",
      },
      {
        title: "Pixel Art Editor",
        img: assets.PixelArt,
        description: "A fun and intuitive pixel art editor with grid-based drawing capabilities.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Pixel-Art-Editor",
        demoLink: "https://zeeshan-ahmad-dev.github.io/Pixel-Art-Editor/",
      },
    ],
  },
  {
    title: "jQuery Projects",
    data: [
      {
        title: "Personal Dashboard",
        img: assets.Dashboard,
        description: "A personal productivity dashboard featuring task tracking, weather updates, and more.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Personal-Dashboard",
        demoLink: "https://zeeshan-ahmad-dev.github.io/Personal-Dashboard/",
      },
      {
        title: "Movie Mania",
        img: assets.MovieMania,
        description: "A movie discovery site powered by jQuery for seamless interactions and content display.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/movie-mania/",
        demoLink: "https://zeeshan-ahmad-dev.github.io/movie-mania",
      },
    ],
  },
  {
    title: "Tailwind Projects",
    data: [
      {
        title: "LugX Gaming",
        img: assets.Lugx,
        description: "A gaming website built with Tailwind CSS, featuring a sleek and modern design.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Gaming-site",
        demoLink: "https://gaming-lugx.netlify.app/",
      },
      {
        title: "Netflix UI Clone",
        img: assets.Netflix,
        description: "A responsive Netflix UI clone created with Tailwind CSS for a real-world design experience.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Netflix",
        demoLink: "https://neflix-ui-clone.netlify.app/",
      },
    ],
  },
];
</script>
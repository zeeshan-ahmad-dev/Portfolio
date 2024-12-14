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
      <ProjectListContainer :projects="projects[0]" />
      <ProjectListContainer :projects="projects[1]" />
      <ProjectListContainer :projects="projects[2]" />
      <ProjectListContainer :projects="projects[3]" />
    </div>
  </section>
</template>

<script setup>
import ProjectListContainer from "../common/ProjectListContainer.vue";

// Importing images
import geminiImg from "/assets/gemini1.png";
import makeupMasteryImg from "/assets/makeupMastery.jpeg";
import movieInsightImg from "/assets/movie-insight.png";

import youtubeImg from "/assets/youtube.png";
import tubeWizardImg from "/assets/TubeWizard.png";
import pixelArtImg from "/assets/PixelArt.png";

import dashboardImg from "/assets/dashboard.png";
import movieManiaImg from "/assets/movieMania.png";

import lugxImg from "/assets/Lugx.png";
import netflixImg from "/assets/Netflix.png";

// Project data array containing categories and their respective projects
const projects = [
  {
    title: "Vue Projects",
    data: [
      {
        title: "Gemini",
        img: geminiImg,
        description:
          "This is a description of the card content. You can customize it.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Gemini",
        demoLink: "https://geminiz.netlify.app/",
      },
      {
        title: "Ecommerce Site",
        img: makeupMasteryImg,
        description:
          "This is a description of the card content. You can customize it.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/MakeupMastery",
        demoLink: "#",
      },
      {
        title: "Movie-Insight",
        img: movieInsightImg,
        description:
          "This is a description of the card content. You can customize it.",
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
        img: youtubeImg,
        description:
          "This is a description of the card content. You can customize it.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/youtube-clone/",
        demoLink: "#",
      },
      {
        title: "TubeWizard",
        img: tubeWizardImg,
        description:
          "This is a description of the card content. You can customize it.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Tube-wizar/",
        demoLink: "https://zeeshan-ahmad-dev.github.io/Tube-wizar/",
      },
      {
        title: "Pixel Art Editor",
        img: pixelArtImg,
        description:
          "This is a description of the card content. You can customize it.",
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
        img: dashboardImg,
        description:
          "This is a description of the card content. You can customize it.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Personal-Dashboard",
        demoLink: "https://zeeshan-ahmad-dev.github.io/Personal-Dashboard/",
      },
      {
        title: "Movie Mania",
        img: movieManiaImg,
        description:
          "This is a description of the card content. You can customize it.",
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
        img: lugxImg,
        description:
          "This is a description of the card content. You can customize it.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Gaming-site",
        demoLink: "https://gaming-lugx.netlify.app/",
      },
      {
        title: "Netflix UI Clone",
        img: netflixImg,
        description:
          "This is a description of the card content. You can customize it.",
        codeLink: "https://github.com/zeeshan-ahmad-dev/Netflix",
        demoLink: "https://neflix-ui-clone.netlify.app/",
      },
    ],
  },
];
</script>

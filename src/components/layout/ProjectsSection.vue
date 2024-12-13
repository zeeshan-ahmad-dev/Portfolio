<template>
    <section
      class="bg-[#050505] py-8 border-t-[1px] border-[#ffffff0b] text-white text-center md:px-20 lg:py-10"
    >
      <!-- Header -->
      <div class="px-6 mt-10 text-center lg:px-20">
        <h2 class="mb-4 text-3xl font-extrabold tracking-wide md:text-4xl">
          Explore My <span class="text-[#f9b703]">Projects</span>
        </h2>
        <p class="mx-auto text-sm leading-relaxed text-gray-300 md:text-base lg:w-3/4">
          I'm a frontend developer specializing in creating modern, responsive user interfaces with Vue.js and Tailwind CSS. My focus is on crafting clean, efficient code and delivering exceptional user experiences.
        </p>
      </div>
  
      <!-- Projects Grid -->
      <section class="grid grid-cols-1 gap-8 px-6 mt-8 mb-6 md:grid-cols-2 lg:px-20">
        <div
          class="relative overflow-hidden transition-transform duration-300 border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-lg"
        >
          <img
            src="../../assets/ProjectImages/gemini1.png"
            alt="Gemini Project"
            class="w-full h-auto"
          />
          <div
            class="absolute inset-0 flex items-center justify-center text-lg font-medium text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 hover:opacity-100"
          >
            Gemini Project
          </div>
        </div>
  
        <div
          class="relative overflow-hidden transition-transform duration-300 border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-lg"
        >
          <img
            src="../../assets/ProjectImages/TubeWizard.png"
            alt="Tube Wizard"
            class="w-full h-auto"
          />
          <div
            class="absolute inset-0 flex items-center justify-center text-lg font-medium text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 hover:opacity-100"
          >
            Tube Wizard
          </div>
        </div>
  
        <div
          class="relative overflow-hidden transition-transform duration-300 border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-lg"
        >
          <img
            src="../../assets/ProjectImages/lugx.png"
            alt="Lugx Project"
            class="w-full h-auto"
          />
          <div
            class="absolute inset-0 flex items-center justify-center text-lg font-medium text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 hover:opacity-100"
          >
            Lugx Project
          </div>
        </div>
  
        <div
          class="relative overflow-hidden transition-transform duration-300 border-2 border-yellow-300 rounded-lg hover:scale-105 hover:shadow-lg"
        >
          <img
            src="../../assets/ProjectImages/dashboard.png"
            alt="Dashboard Project"
            class="w-full h-auto"
          />
          <div
            class="absolute inset-0 flex items-center justify-center text-lg font-medium text-white transition-opacity duration-300 bg-black opacity-0 bg-opacity-60 hover:opacity-100"
          >
            Dashboard Project
          </div>
        </div>
      </section>
  
      <!-- View More Button -->
      <div class="flex justify-center w-full">
        <a
          class="bg-[#f9b703] text-black font-semibold hover:shadow-lg transition-all border-none px-5 py-2 text-sm sm:text-base sm:px-6 sm:py-3 my-4 gap-2 rounded-full hover:bg-yellow-400"
          href="../../assets/ProjectImages/Zeeshan Ahmad (1).pdf.pdf"
          download
          aria-label="Download my portfolio as PDF"
        >
          View More
        </a>
      </div>
    </section>
  </template>
  
  <script setup></script>
  
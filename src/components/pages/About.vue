<template>
  <main class="bg-[#050505]">
    <section
      class="bg-[#050505] mt-[60px] border-b-[1px] border-[#ffffff0b] text-white flex lg:grid lg:grid-cols-2 lg:place-items-center md:px-20 lg:px-16 md:py-6 lg:py-20 flex-col items-center"
    >
      <!-- Left side - Image -->
      <div
        class="mt-16 lg:mt-2 rounded-full border-[#f9b703] group flex justify-center"
      >
        <img
          class="w-[80%] max-w-[380px] md:max-w-[400px] lg:max-w-[480px] aspect-square rounded-full shadow-[0px_0px_10px_5px_rgba(249,183,3,0.8)] group-hover:shadow-[0px_0px_30px_10px_rgba(249,183,3,0.8)] transition-shadow duration-300 object-cover"
          :src="assets.Avatar"
          alt="Your Image"
        />
      </div>
      <!-- Right Side - Description -->
      <div class="px-6 mt-14 md:mt-10">
        <h4 class="mb-3 text-xl md:text-2xl">About Me</h4>
        <h3 class="mb-5 text-2xl md:text-3xl">
          Expert <span class="text-[#f9b703]">Full Stack Developer</span>
        </h3>
        <p class="mb-8 text-gray-200 md:text-lg">
          I'm Zeeshan Ahmad, a full stack developer building dynamic,
          responsive, and user-focused websites. I work with Vue.js, React.js, Tailwind
          CSS, jQuery, Node.js, Express, and databases like MongoDB and MySQL to
          create real-world projects with clean code and practical interfaces.
        </p>
        <div class="my-10">
          <div class="grid flex-col gap-4 lg:grid-cols-2 md:flex-row md:gap-4">
            <div class="flex items-center gap-2">
              <div class="text-3xl font-extrabold text-[#f9b703]">
                <svg
                  class="w-8 h-8 p-1 border-2 border-[#f9b703] rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <p
                class="font-semibold text-gray-400 sm:font-bold hover:text-[#f9b703]"
              >
                Full Stack Developer
              </p>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-3xl font-extrabold text-[#f9b703]">
                <svg
                  class="w-8 h-8 p-1 border-2 border-[#f9b703] rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <p
                class="font-semibold text-gray-400 sm:font-bold hover:text-[#f9b703]"
              >
                Building modern web apps with clean architecture
              </p>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-3xl font-extrabold text-[#f9b703]">
                <svg
                  class="w-8 h-8 p-1 border-2 border-[#f9b703] rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <p
                class="font-semibold text-gray-400 sm:font-bold hover:text-[#f9b703]"
              >
                Focused on quality, speed, and scalability
              </p>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-3xl font-extrabold text-[#f9b703]">
                <svg
                  class="w-8 h-8 p-1 border-2 border-[#f9b703] rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </div>
              <p
                class="font-semibold text-gray-400 sm:font-bold hover:text-[#f9b703]"
              >
                Innovation & Learning Focused
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!---------- Education Section ----------->
    <section
      class="w-full px-6 py-16 border-[1px] border-[#ffffff0b] mx-auto sm:px-10 lg:px-20 max-w-screen-2xl animate-fadeIn"
    >
      <!-- Education Section -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-white">Education</h1>
        <div class="grid gap-8 mt-12 md:grid-cols-2">
          <!-- Education Items -->
          <div
            class="p-6 text-center transition-transform duration-300 transform bg-[#191919] rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <div class="mb-4 text-5xl text-[#f9b703]">
              <i class="fas fa-book"></i>
            </div>
            <h3 class="text-xl font-bold text-[#f9b703]">Matriculation</h3>
            <p class="mt-2 font-bold text-gray-200">
              F.G Public School Nowshera Cantt No.1(for boys)
            </p>
            <p class="font-medium text-gray-500">2021 - 2023</p>
          </div>
          <div
            class="p-6 text-center transition-transform duration-300 transform bg-[#191919] rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <div class="mb-4 text-5xl text-[#f9b703]">
              <i class="fas fa-school"></i>
            </div>
            <h3 class="text-xl font-bold text-[#f9b703]">
              Intermediate (Computer Science)
            </h3>
            <p class="mt-2 font-bold text-gray-200">
              F.G Degree College Nowshera Cantt
            </p>
            <p class="font-medium text-gray-500">2023 - 2025</p>
          </div>
          <div
            class="p-6 text-center transition-transform duration-300 transform bg-[#191919] rounded-lg shadow-lg hover:-translate-y-2 hover:shadow-2xl"
          >
            <div class="mb-4 text-5xl text-[#f9b703]">
              <i class="fas fa-school"></i>
            </div>
            <h3 class="text-xl font-bold text-[#f9b703]">
              BS Software Engineering (In Progress)
            </h3>
            <p class="mt-2 font-bold text-gray-200">
              Virtual University of Pakistan
            </p>
            <p class="font-medium text-gray-500">2025 - present</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section
      class="w-full text-white px-6 py-16 border-t border-[#ffffff0b] max-w-screen-2xl mx-auto text-center"
    >
      <h2 class="mb-10 text-4xl font-bold">Skills</h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="p-6 bg-[#191919] rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="text-5xl text-[#f9b703] mb-4">
            <i class="fas fa-code"></i>
          </div>
          <h3 class="text-xl font-bold text-[#f9b703]">Frontend & UI/UX</h3>
          <p class="mt-2 text-gray-200">
            Vue.js, React, Tailwind CSS, animations, and responsive layouts
          </p>
        </div>

        <div
          class="p-6 bg-[#191919] rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="text-5xl text-[#f9b703] mb-4">
            <i class="fas fa-database"></i>
          </div>
          <h3 class="text-xl font-bold text-[#f9b703]">Backend Development</h3>
          <p class="mt-2 text-gray-200">
            Node.js, Express.js, MongoDB, MySQL, RESTful APIs
          </p>
        </div>

        <div
          class="p-6 bg-[#191919] rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
        >
          <div class="text-5xl text-[#f9b703] mb-4">
            <i class="fas fa-code-branch"></i>
          </div>
          <h3 class="text-xl font-bold text-[#f9b703]">
            Version Control & Workflow
          </h3>
          <p class="mt-2 text-gray-200">
            Git, GitHub
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import assets from '../../assets/assets';

</script>

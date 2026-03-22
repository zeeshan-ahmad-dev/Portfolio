<template>
  <main class="bg-[#080808]">
    <!-- Hero About Section -->
    <section class="relative bg-[#080808] mt-[60px] overflow-hidden">
      <!-- Grid background -->
      <div
        class="absolute inset-0 bg-[linear-gradient(rgba(249,183,3,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,183,3,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"
      ></div>
      <div
        class="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[rgba(249,183,3,0.06)] blur-[100px] pointer-events-none"
      ></div>

      <div
        class="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-20 flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-16"
      >
        <!-- Left: Image -->
        <div
          class="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]"
        >
          <div
            class="absolute -inset-1 rounded-full p-[3px] bg-[conic-gradient(from_0deg,#f9b703,transparent_40%,transparent_60%,#f9b703_100%)] animate-spin [animation-duration:5s]"
          ></div>
          <div class="w-full relative h-full rounded-full bg-[#080808] p-1.5">
            <img
              :src="assets.Avatar"
              alt="Zeeshan Ahmad"
              class="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>

        <!-- Right: Text -->
        <div class="text-center lg:text-left">
          <h2 class="mb-6 text-4xl font-extrabold text-white md:text-5xl">
            About <span class="text-[#f9b703]">Me.</span>
          </h2>
          <p class="text-[#888] leading-relaxed text-sm md:text-base mb-5">
            I'm <b>Zeeshan Ahmad</b>, a self-taught Full Stack Developer with a genuine passion for
            building things. I enjoy the entire process, from idea to a working
            product that real people use. Writing clean, functional code across
            the MERN and MEVN stacks is what I do best.
          </p>
          <p class="text-[#888] leading-relaxed text-sm md:text-base">
            I'm always working on something new, pushing my skills further and
            exploring better ways to solve problems.
          </p>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section
      class="relative bg-[#080808] overflow-hidden border-t border-[rgba(249,183,3,0.08)]"
    >
      <div
        class="absolute bottom-[-50px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[rgba(249,183,3,0.04)] blur-[100px] pointer-events-none"
      ></div>

      <div class="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-20">
        <div class="mb-12 text-center">
          <h2 class="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Education<span class="text-[#f9b703]">.</span>
          </h2>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <div
            v-for="edu in education"
            :key="edu.title"
            class="group p-6 rounded-xl border border-[rgba(249,183,3,0.1)] hover:border-[rgba(249,183,3,0.35)] bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(249,183,3,0.03)] transition-all duration-300 hover:-translate-y-1"
          >
            <div class="text-[#f9b703] text-2xl mb-4">
              <i :class="edu.icon"></i>
            </div>
            <h3 class="mb-1 text-base font-bold text-white">{{ edu.title }}</h3>
            <p class="text-[#888] text-sm mb-1">{{ edu.school }}</p>
            <p class="text-[#555] text-xs">{{ edu.period }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import assets from "../../assets/assets";

const education = [
  {
    icon: "fas fa-book",
    title: "Matriculation",
    school: "F.G Public School Nowshera Cantt",
    period: "2021 - 2023",
  },
  {
    icon: "fas fa-school",
    title: "Intermediate (Computer Science)",
    school: "F.G Degree College Nowshera Cantt",
    period: "2023 - 2025",
  },
  {
    icon: "fas fa-graduation-cap",
    title: "BS Software Engineering",
    school: "Virtual University of Pakistan",
    period: "2025 - Present",
  },
];
</script>

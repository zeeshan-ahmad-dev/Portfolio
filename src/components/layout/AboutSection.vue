<template>
  <section class="relative bg-[#080808] overflow-hidden">

    <!-- Grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(249,183,3,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,183,3,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>

    <!-- Glow orb -->
    <div class="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-[rgba(249,183,3,0.05)] blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-20 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-16">

      <!-- Left: Image -->
      <div class="relative flex items-center justify-center">
        <div class="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]">
          <div class="absolute -inset-1 rounded-full p-[3px] bg-[conic-gradient(from_0deg,#f9b703,transparent_40%,transparent_60%,#f9b703_100%)] animate-spin [animation-duration:5s]">
          </div>
          <div class="w-full relative h-full rounded-full bg-[#080808] p-1.5">
            <img :src="assets.Avatar" alt="Zeeshan Ahmad" class="object-cover w-full h-full rounded-full" />
          </div>
        </div>
      </div>

      <!-- Right: Text -->
      <div class="text-center lg:text-left">

        <h2 class="mb-6 text-4xl font-extrabold text-white md:text-5xl">
          About <span class="text-[#f9b703]">Me.</span>
        </h2>

        <p class="text-[#888] leading-relaxed text-sm md:text-base mb-6">
          I'm <span class="font-semibold text-white">Zeeshan Ahmad</span>, a self-taught Full Stack Developer with a genuine passion for building things. I enjoy the entire process, from idea to a working product that real people use. Writing clean, functional code across the MERN and MEVN stacks is what I do best.
        </p>

        <p class="text-[#888] leading-relaxed text-sm md:text-base mb-10">
          I'm always working on something new, pushing my skills further and exploring better ways to solve problems.
        </p>

        <router-link
          to="/about"
          class="inline-flex items-center gap-2 bg-[#f9b703] hover:bg-[#ffc929] text-black font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(249,183,3,0.35)]"
        >
          Read More
        </router-link>

      </div>

    </div>
  </section>
</template>

<script setup>
import assets from '../../assets/assets';
</script>
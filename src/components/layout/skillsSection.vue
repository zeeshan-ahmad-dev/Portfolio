<template>
  <section
    class="bg-[#050505] py-8 border-t-[2px] border-[#ffffff0b] text-white text-center md:px-20 lg:py-10"
  >
    <h2 class="mb-8 text-4xl font-bold md:text-5xl">
      My <span class="text-[#f9b703]">Skills</span>
    </h2>
    <div class="flex flex-wrap gap-5 px-5 justify-evenly py-14">
        <div class="flex flex-col items-center gap-3 w-fit">
            <RadialProgress :progress="85"/>
            HTML/CSS
        </div>
        <div class="flex flex-col items-center gap-3 w-fit">
            <RadialProgress :progress="80"/>
            JavaScript
        </div>
        <div class="flex flex-col items-center gap-3 w-fit">
            <RadialProgress :progress="85"/>
            Tailwind
        </div>
        <div class="flex flex-col items-center gap-3 w-fit">
            <RadialProgress :progress="80"/>
            JQuery
        </div>
        <div class="flex flex-col items-center gap-3 w-fit">
            <RadialProgress :progress="75"/>
            Vue.js
        </div>
    </div>
  </section>
</template>

<script setup>
import RadialProgress from '../common/RadialProgress.vue';


</script>

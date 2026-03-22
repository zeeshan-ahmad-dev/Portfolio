<template>
  <section class="relative bg-[#080808] mt-[60px] min-h-screen flex items-center overflow-hidden">

    <!-- Grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(249,183,3,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(249,183,3,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>

    <!-- Glow orbs -->
    <div class="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[rgba(249,183,3,0.07)] blur-[100px] animate-pulse pointer-events-none"></div>
    <div class="absolute bottom-[50px] left-[-50px] w-[300px] h-[300px] rounded-full bg-[rgba(249,183,3,0.04)] blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 py-16 flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center gap-12 lg:gap-16">

      <!-- Left: Text -->
      <div class="text-center lg:text-left">

        <!-- Name -->
        <h1 class="mb-3 text-5xl font-extrabold leading-none text-white md:text-6xl lg:text-7xl">
          Zeeshan<span class="text-[#f9b703]">.</span>
        </h1>

        <!-- Typed role -->
        <div class="min-h-[2.5rem] mb-5">
          <span class="text-xl md:text-2xl font-semibold text-[#f9b703] tracking-wide">
            {{ typedText }}<span :class="isCursorVisible ? 'opacity-100' : 'opacity-0'" class="transition-opacity">|</span>
          </span>
        </div>

        <!-- Description -->
        <p class="text-[#888] leading-relaxed text-sm md:text-base max-w-[480px] mx-auto lg:mx-0 mb-8">
          Full Stack Developer (MERN/MEVN) with 2 years of hands-on experience building and deploying web applications. I enjoy turning ideas into real projects and helping clients bring their designs to life.
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-4 mb-10 lg:justify-start">
          <a
            href="/Zeeshan-Ahmad-CV.pdf"
            download
            class="flex items-center gap-2 bg-[#f9b703] hover:bg-[#ffc929] text-black font-semibold text-sm px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(249,183,3,0.35)]"
          >
            <i class="text-xs fa-solid fa-download"></i>
            Download CV
          </a>
          <a
            href="https://github.com/zeeshan-ahmad-dev"
            target="_blank"
            class="text-[#888] hover:text-[#f9b703] text-sm font-medium transition-colors duration-200"
          >
            View GitHub →
          </a>
        </div>

        <!-- Social icons -->
        <div class="flex justify-center mt-8 lg:justify-start">
          <IconsList />
        </div>

      </div>

      <!-- Right: Image -->
      <div class="relative flex items-center justify-center">
        <!-- Spinning ring -->
        <div class="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]">
          <div class="absolute -inset-1 rounded-full p-[3px] bg-[conic-gradient(from_0deg,#f9b703,transparent_40%,transparent_60%,#f9b703_100%)] animate-spin [animation-duration:5s]">
          </div>
          <div class="w-full relative h-full rounded-full bg-[#080808] p-1.5">
            <img
              :src="assets.Avatar"
              alt="Zeeshan Ahmad"
              class="object-cover w-full h-full rounded-full"
            />
          </div>
        </div>

        <!-- Floating tags -->
        <div class="absolute top-[10%] right-0 bg-[rgba(10,10,10,0.9)] border border-[rgba(249,183,3,0.2)] text-[#f9b703] text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm animate-bounce [animation-duration:3s]">
          Vue.js
        </div>
        <div class="absolute bottom-[20%] right-[-10px] bg-[rgba(10,10,10,0.9)] border border-[rgba(249,183,3,0.2)] text-[#f9b703] text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm animate-bounce [animation-duration:4s] [animation-delay:0.5s]">
          Node.js
        </div>
        <div class="absolute top-[50%] left-0 bg-[rgba(10,10,10,0.9)] border border-[rgba(249,183,3,0.2)] text-[#f9b703] text-xs font-semibold tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm animate-bounce [animation-duration:3.5s] [animation-delay:1s]">
          React
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import IconsList from "../common/IconsList.vue";
import assets from "../../assets/assets";

const typedText = ref("");
const fullText = ["Full Stack Developer", "MERN / MEVN Stack", "Vue & React"];
const typingSpeed = 100;
const backspacingSpeed = 50;
const delayBetweenStrings = 1800;

let currentStringIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let cursorIntervalId = null;
const isCursorVisible = ref(true);

function typeText() {
  if (isDeleting) {
    typedText.value = fullText[currentStringIndex].slice(0, currentCharIndex);
    currentCharIndex--;
    if (currentCharIndex === 0) {
      isDeleting = false;
      currentStringIndex = (currentStringIndex + 1) % fullText.length;
      setTimeout(typeText, delayBetweenStrings);
    } else {
      setTimeout(typeText, backspacingSpeed);
    }
  } else {
    typedText.value = fullText[currentStringIndex].slice(0, currentCharIndex);
    currentCharIndex++;
    if (currentCharIndex === fullText[currentStringIndex].length + 1) {
      isDeleting = true;
      setTimeout(typeText, delayBetweenStrings);
    } else {
      setTimeout(typeText, typingSpeed);
    }
  }
}

onMounted(() => {
  typeText();
  cursorIntervalId = setInterval(() => {
    isCursorVisible.value = !isCursorVisible.value;
  }, 500);
});

onBeforeUnmount(() => {
  if (cursorIntervalId) clearInterval(cursorIntervalId);
});
</script>
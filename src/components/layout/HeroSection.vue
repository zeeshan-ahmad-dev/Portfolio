<template>
  <section class="bg-[#050505] mt-[60px] border-[1px] border-[#ffffff0b] text-white flex lg:grid lg:grid-cols-2 lg:place-items-center  md:px-20 md:py-6 lg:py-20 flex-col-reverse items-center">
    <!-- Left Side - Description -->
    <div class="px-6 mt-10 text-center lg:text-left">
      <h1 class="text-4xl font-bold">Hi, I'm</h1>
      <br />
      <div class="h-fit min-h-12">
        <h3 class="text-3xl text-[#F9B703] font-semibold">
          {{ typedText
          }}<span v-if="isCursorVisible" class="inline-block font-semibold"
            >|</span
          >
        </h3>
      </div>
      <p class="my-4">
        I'm Zeeshan Ahmad a passionate Frontend Developer skilled in Vue js, jQuery, and
        Tailwind. I focus on creating responsive and visually stunning web
        experiences, bringing designs to life with precision and creativity.
      </p>

      <div class="flex flex-col items-center gap-5 my-5 lg:items-start">
        <!-- Social Links -->
        <IconsList />
        <a
          class="bg-[#f9b703] hover:shadow-[0px_0px_10px_2px_rgba(249,183,3,0.8)] transition-all border-none px-4 py-2 my-3 gap-2 rounded-full flex items-center justify-center"
          href="/assets/My CV(Zeeshan Ahmad).pdf"
          download
          ><i class="fa-solid fa-download animate-bounce"></i>Download CV</a
        >
      </div>
    </div>
    <!-- Right Side - Image -->
    <div class="mt-16 lg:mt-2 rounded-full border-[#f9b703] group flex justify-center">
  <img
    class="w-[80%] max-w-[380px] md:max-w-[400px] lg:max-w-[480px] aspect-square rounded-full shadow-[0px_0px_10px_5px_rgba(249,183,3,0.8)] group-hover:shadow-[0px_0px_30px_10px_rgba(249,183,3,0.8)] transition-shadow duration-300 object-cover"
    src="../../assets/Its me.jpg"
    alt="Your Image"
  />
</div>
  </section>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount } from "vue";
import IconsList from "../common/IconsList.vue";

const typedText = ref("");
const fullText = ["Zeeshan Ahmad", "Frontend Developer"];
const typingSpeed = 110;
const backspacingSpeed = 50;
const delayBetweenStrings = 1000;

let currentStringIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let cursorIntervalId = null;

const isCursorVisible = ref(true);

function typeText() {
  if (isDeleting) {
    // Delete characters
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
    // Type characters
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

  // Start blinking cursor
  cursorIntervalId = setInterval(() => {
    isCursorVisible.value = !isCursorVisible.value;
  }, 500); // Adjust this value to change blinking speed
});

onBeforeUnmount(() => {
  if (cursorIntervalId) {
    clearInterval(cursorIntervalId); // Clear the interval to avoid memory leaks
  }
});
</script>

<style scoped>
span {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>

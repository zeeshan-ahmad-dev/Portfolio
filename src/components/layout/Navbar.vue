<template>
  <header class="fixed top-0 z-50 w-full">
    <nav
      aria-label="Main Navigation"
      class="relative px-6 py-6 lg:px-24 bg-[#050505]"
    >
      <div class="relative z-50 flex justify-between">
        <h1 class="text-xl font-bold text-white lg:text-3xl">
          Portfolio <span style="color: #f9b703">Z.</span>
        </h1>
        <ul class="hidden gap-6 text-lg font-medium text-white md:flex">
          <li class="relative group">
            <router-link
              to="/"
              aria-current="page"
              class="hover:text-[#f9b703]"
              active-class="text-[#f9b703]"
              >Home</router-link
            >
            <span
              class="absolute left-0 bottom-0 w-0 h-1 bg-[#f9b703] transition-all duration-300 group-hover:w-full"
            ></span>
          </li>
          <li class="relative group">
            <router-link
              to="about"
              class="hover:text-[#f9b703]"
              active-class="text-[#f9b703]"
              >About</router-link
            >
            <span
              class="absolute left-0 bottom-0 w-0 h-1 bg-[#f9b703] transition-all duration-300 group-hover:w-full"
            ></span>
          </li>
          <li class="relative group">
            <router-link
              to="projects"
              class="hover:text-[#f9b703]"
              active-class="text-[#f9b703]"
              >Projects</router-link
            >
            <span
              class="absolute left-0 bottom-0 w-0 h-1 bg-[#f9b703] transition-all duration-300 group-hover:w-full"
            ></span>
          </li>
          <li class="relative group">
            <router-link
              to="skills"
              class="hover:text-[#f9b703]"
              active-class="text-[#f9b703]"
              >Skills</router-link
            >
            <span
              class="absolute left-0 bottom-0 w-0 h-1 bg-[#f9b703] transition-all duration-300 group-hover:w-full"
            ></span>
          </li>
          <li class="relative group">
            <router-link
              to="contact"
              class="hover:text-[#f9b703]"
              active-class="text-[#f9b703]"
              >Contact</router-link
            >
            <span
              class="absolute left-0 bottom-0 w-0 h-1 bg-[#f9b703] transition-all duration-300 group-hover:w-full"
            ></span>
          </li>
        </ul>

        <!-- For smaller screens -->
        <button @click="toggleMenu" class="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <transition name="navbar" appear>
        <ul
          v-show="isMenuOpen"
          class="absolute top-full left-0 z-40 w-full px-6 py-4 space-y-4 text-lg font-semibold text-center text-white bg-[#060606] md:hidden"
        >
          <li>
            <router-link
              to="/"
              class="block hover:text-[#F9B703]"
              active-class="text-[#F9B703]"
              @click="toggleMenu"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="block hover:text-[#F9B703]"
              active-class="text-[#F9B703]"
              @click="toggleMenu"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              to="/projects"
              class="block hover:text-[#F9B703]"
              active-class="text-[#F9B703]"
              @click="toggleMenu"
              >Projects</router-link
            >
          </li>
          <li>
            <router-link
              to="/skills"
              class="block hover:text-[#F9B703]"
              active-class="text-[#F9B703]"
              @click="toggleMenu"
              >Skills</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              class="block hover:text-[#F9B703]"
              active-class="text-[#F9B703]"
              @click="toggleMenu"
              >Contact</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style>
/* Enter Classes */
.navbar-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.navbar-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.navbar-enter-active {
  transition: all 0.3s ease;
}

/* Leave Classes */
.navbar-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.navbar-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.navbar-leave-active {
  transition: all 0.3s ease-in;
}
</style>

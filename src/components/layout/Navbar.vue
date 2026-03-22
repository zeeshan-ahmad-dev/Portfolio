<template>
  <header class="fixed top-0 z-50 w-full">
    <nav class="px-6 py-4 lg:px-32 bg-[rgba(8,8,8,0.85)] backdrop-blur-md border-b-2 border-[rgba(249,183,3,0.08)]">
      <div class="flex justify-between items-center max-w-[1200px] mx-auto">

        <!-- Logo -->
        <router-link to="/" class="text-xl font-extrabold tracking-tight text-white lg:text-2xl">
          Zeeshan<span class="text-[#f9b703]">.</span>
        </router-link>

        <!-- Desktop links -->
        <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-[#888]">
          <li v-for="link in links" :key="link.to">
            <router-link
              :to="link.to"
              class="transition-colors duration-200 hover:text-white"
              active-class="text-[#f9b703] hover:text-[#f9b703]"
            >{{ link.label }}</router-link>
          </li>
          <li>
            <a
              href="/Zeeshan-Ahmad-CV.pdf"
              download
              class="flex items-center gap-2 bg-[#f9b703] hover:bg-[#ffc929] text-black font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <i class="text-xs fa-solid fa-download"></i>
              Download CV
            </a>
          </li>
        </ul>

        <!-- Mobile menu button -->
        <button @click="toggleMenu" class="text-white md:hidden">
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>

      <!-- Mobile menu -->
      <transition name="navbar" appear>
        <ul
          v-show="isMenuOpen"
          class="md:hidden mt-4 pb-4 space-y-3 text-sm font-medium text-center border-t border-[rgba(249,183,3,0.08)] pt-4"
        >
          <li v-for="link in links" :key="link.to">
            <router-link
              :to="link.to"
              class="block py-1 text-[#888] hover:text-white transition-colors duration-200"
              active-class="text-[#f9b703] hover:text-[#f9b703]"
              @click="toggleMenu"
            >{{ link.label }}</router-link>
          </li>
          <li>
            <a
              href="/Zeeshan-Ahmad-CV.pdf"
              download
              class="inline-flex items-center gap-2 bg-[#f9b703] text-black font-semibold text-sm px-4 py-2 rounded-lg mt-2"
            >
              <i class="text-xs fa-solid fa-download"></i>
              Download CV
            </a>
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

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];
</script>

<style>
.navbar-enter-from { opacity: 0; transform: translateY(-10px); }
.navbar-enter-to { opacity: 1; transform: translateY(0); }
.navbar-enter-active { transition: all 0.3s ease; }
.navbar-leave-from { opacity: 1; transform: translateY(0); }
.navbar-leave-to { opacity: 0; transform: translateY(-10px); }
.navbar-leave-active { transition: all 0.3s ease-in; }
</style>
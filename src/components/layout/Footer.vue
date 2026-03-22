<template>
  <footer class="bg-[#050505] border-t-2 border-[rgba(249,183,3,0.2)]">
    <div class="max-w-[1200px] mx-auto px-6 md:px-12 py-8">

      <!-- Top row -->
      <div class="flex flex-col items-center justify-between gap-6 md:flex-row">

        <!-- Logo -->
        <router-link to="/" class="text-xl font-extrabold tracking-tight text-white">
          Zeeshan<span class="text-[#f9b703]">.</span>
        </router-link>

        <!-- Nav links -->
        <ul class="flex flex-wrap justify-center gap-5 text-xs font-medium text-[#666]">
          <li v-for="link in links" :key="link.to">
            <router-link :to="link.to" class="hover:text-[#f9b703] transition-colors duration-200">
              {{ link.label }}
            </router-link>
          </li>
        </ul>

        <!-- Social icons -->
        <IconList />

      </div>

      <!-- Divider -->
      <div class="w-full h-px bg-[rgba(255,255,255,0.05)] my-6"></div>

      <!-- Bottom row -->
      <p class="text-center text-[#444] text-xs">
        © {{ new Date().getFullYear() }} Zeeshan Ahmad. All rights reserved.
      </p>

    </div>
  </footer>
</template>

<script setup>
import IconList from "../common/IconsList.vue";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];
</script>
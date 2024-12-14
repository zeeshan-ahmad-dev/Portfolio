<template>
    <footer class="py-14 bg-gradient-to-t from-[#050505] to-[#1a1a1a] flex flex-col items-center gap-5">
      <IconList />
      <ul class="flex flex-wrap justify-center gap-6 text-sm font-medium text-white sm:text-lg">
        <li>
          <router-link
              to="/"
              class="block hover:text-[#F9B703]"
              >Home</router-link>
        </li>
        <li>
          <router-link
              to="/about"
              class="block hover:text-[#F9B703]"
              >About</router-link>
        </li>
        <li>
          <router-link
              to="/projects"
              class="block hover:text-[#F9B703]"
              >Projects</router-link>
          </li>
        <li>
          <router-link
              to="/skills"
              class="block hover:text-[#F9B703]"
              active-class="text-[#F9B703]"
            >
          </router-link>
        </li>
        <li>
          <router-link
              to="/contact"
              class="block hover:text-[#F9B703]"
              >Contact</router-link
            >
        </li>
      </ul>
      <div class="w-full mt-4 overflow-hidden max-w-screen-2xl mx-auto text-center lg:text-[16px] lg:font-semibold text-gray-400">
        <p>Crafted with passion and precision by <b>Zeeshan Ahmad</b>.</p>
        <p>© All Rights Reserved by Zeeshan Ahmad</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  import IconList from "../common/IconsList.vue";
  </script>
  
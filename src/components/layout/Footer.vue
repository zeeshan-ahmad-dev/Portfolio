<template>
    <footer class="py-14 bg-gradient-to-t from-[#050505] to-[#1a1a1a] flex flex-col items-center gap-5">
      <IconList />
      <ul class="flex flex-wrap justify-center gap-6 text-sm font-medium text-white sm:text-lg">
        <li>
          <a href="#home" aria-current="page" class="hover:text-[#f9b703] transition">Home</a>
        </li>
        <li>
          <a href="#about" class="hover:text-[#f9b703] transition">About</a>
        </li>
        <li>
          <a href="#projects" class="hover:text-[#f9b703] transition">Projects</a>
        </li>
        <li>
          <a href="#skills" class="hover:text-[#f9b703] transition">Skills</a>
        </li>
        <li>
          <a href="#contact" class="hover:text-[#f9b703] transition">Contact</a>
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
  
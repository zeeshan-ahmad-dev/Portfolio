<template>
  <div>
    <h3 class="text-center text-lg font-semibold text-[#f9b703] uppercase tracking-widest mb-5 pb-2 border-b border-[rgba(249,183,3,0.12)]">
      {{ project.title }}
    </h3>
    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="(item, index) in project.data" :key="index" :data="item" />
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "../common/ProjectCard.vue";

defineProps({
  project: Object
});
</script>
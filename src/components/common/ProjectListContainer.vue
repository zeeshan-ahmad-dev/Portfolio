<template>
  <div class="text-center">
    <h3 class="mb-5 text-xl font-bold text-white">{{ projects.title }}</h3>
    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="(project, index) in projects.data" :key="index">
        <ProjectCard :data="project" />
      </template>
    </div>
  </div>
</template>

<script setup>
import ProjectCard from "../common/ProjectCard.vue";

defineProps({
  projects: Object
})
</script>

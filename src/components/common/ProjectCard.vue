<template>
  <div
    class="group relative aspect-[16/9] rounded-xl overflow-hidden border border-[rgba(249,183,3,0.12)] hover:border-[rgba(249,183,3,0.35)] shadow-[0_5px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] perspective-1000"
  >
    <!-- Image -->
    <img
      class="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-90 group-hover:opacity-40"
      :src="data.img"
      :alt="data.title"
    />

    <!-- Flip content -->
    <div
      class="absolute inset-0 flex flex-col justify-between p-5 bg-[rgba(8,8,8,0.95)] backface-hidden [transform:rotateX(-90deg)] origin-bottom transition-transform duration-300 ease-[cubic-bezier(0.42,0,1,0.47)] group-hover:[transform:rotateX(0deg)]"
    >
      <div>
        <h3 class="mb-2 text-lg font-bold text-white">{{ data.title }}</h3>
        <p class="text-xs text-[#888] leading-relaxed">{{ data.description }}</p>
      </div>
      <div class="flex gap-2">
        <a
          v-if="data.codeLink"
          :href="data.codeLink"
          target="_blank"
          class="flex-1 text-center text-xs font-semibold px-3 py-2 bg-[#f9b703] hover:bg-[#ffc929] text-black rounded-lg transition-all duration-200"
        >
          View Code
        </a>
        <a
          v-if="data.demoLink && data.demoLink !== '#'"
          :href="data.demoLink"
          target="_blank"
          class="flex-1 text-center text-xs font-semibold px-3 py-2 border border-[rgba(249,183,3,0.4)] text-[#f9b703] hover:bg-[rgba(249,183,3,0.08)] rounded-lg transition-all duration-200"
        >
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style>
.perspective-1000 {
  perspective: 1000px;
}
</style>
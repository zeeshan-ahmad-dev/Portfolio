<template>
  <section
    class="bg-[#050505] py-5 border-[1px] border-[#ffffff0b] text-white flex lg:grid lg:grid-cols-2 lg:place-items-center md:px-20 md:py-6 lg:py-24 flex-col-reverse items-center"
  >
    <!-- Left Side - Image -->
    <div
      class="my-12  lg:my-2 rounded-full border-[#f9b703] group flex justify-center"
    >
      <img
        class="w-[80%] max-w-[380px] md:max-w-[400px] lg:max-w-[480px] aspect-square rounded-full shadow-[0px_0px_10px_5px_rgba(249,183,3,0.8)] group-hover:shadow-[0px_0px_30px_10px_rgba(249,183,3,0.8)] transition-shadow duration-300 object-cover"
        src="../../assets/Its me.jpg"
        alt="Your Image"
      />
    </div>

    <!-- Right Side - Description -->
    <div class="px-6 mt-10 text-center lg:px-0 lg:text-left">
        <h2 class="mb-8 text-4xl font-bold md:text-5xl">About <span class="text-[#f9b703]">Me</span></h2>
        <p>Hello! I am <b>Zeeshan Ahmad</b>, a dedicated frontend developer with a flair for designing and building engaging, responsive, and visually appealing web experiences. I enjoy transforming ideas into reality through code, ensuring functionality and aesthetics work hand in hand. My development journey is driven by a passion for innovation and a constant desire to grow and refine my skills.</p>

        <div class="flex justify-center mt-5 lg:justify-start">
            <a
            class="bg-[#f9b703] hover:shadow-[0px_0px_10px_2px_rgba(249,183,3,0.8)] transition-all border-none font-semibold tracking-widest px-6 py-2 my-3 gap-2 rounded-full flex items-center justify-center"
            href="#"
            download
            >Read More</a
            >
        </div>
    </div>
  </section>
</template>

<script setup></script>

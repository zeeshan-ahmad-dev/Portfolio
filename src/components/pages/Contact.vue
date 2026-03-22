<template>
  <section class="relative bg-[#080808] min-h-screen overflow-hidden">

    <!-- Grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(249,183,3,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(249,183,3,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"></div>

    <!-- Glow orbs -->
    <div class="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[rgba(249,183,3,0.06)] blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-[-50px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[rgba(249,183,3,0.04)] blur-[100px] pointer-events-none"></div>

    <div class="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-20">

      <!-- Header -->
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-extrabold text-white md:text-5xl">
          Get in <span class="text-[#f9b703]">Touch.</span>
        </h2>
        <p class="text-[#888] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          Have a project in mind or just want to say hello? Feel free to reach out.
        </p>
      </div>

      <!-- Contact Grid -->
      <div class="grid gap-6 md:grid-cols-2">

        <!-- Form -->
        <div class="p-8 rounded-xl border border-[rgba(249,183,3,0.12)] bg-[rgba(255,255,255,0.02)]">
          <h3 class="mb-8 text-xl font-bold text-white">Send a Message</h3>
          <form action="https://formsubmit.co/za5743759@email.com" method="POST" class="flex flex-col gap-6">

            <div class="relative group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                class="w-full py-3 text-white bg-transparent border-none outline-none text-sm placeholder-[#555]"
              />
              <div class="absolute bottom-0 left-0 w-full h-px bg-[rgba(255,255,255,0.08)] group-focus-within:bg-[#f9b703] transition-colors duration-200"></div>
            </div>

            <div class="relative group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                class="w-full py-3 text-white bg-transparent border-none outline-none text-sm placeholder-[#555]"
              />
              <div class="absolute bottom-0 left-0 w-full h-px bg-[rgba(255,255,255,0.08)] group-focus-within:bg-[#f9b703] transition-colors duration-200"></div>
            </div>

            <div class="relative group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                class="w-full py-3 text-white bg-transparent border-none outline-none text-sm placeholder-[#555]"
              />
              <div class="absolute bottom-0 left-0 w-full h-px bg-[rgba(255,255,255,0.08)] group-focus-within:bg-[#f9b703] transition-colors duration-200"></div>
            </div>

            <div class="relative group">
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                required
                class="w-full py-3 text-white bg-transparent border-none outline-none text-sm placeholder-[#555] resize-none"
              ></textarea>
              <div class="absolute bottom-0 left-0 w-full h-px bg-[rgba(255,255,255,0.08)] group-focus-within:bg-[#f9b703] transition-colors duration-200"></div>
            </div>

            <button
              type="submit"
              class="w-full bg-[#f9b703] hover:bg-[#ffc929] text-black font-semibold text-sm py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(249,183,3,0.35)]"
            >
              Send Message
            </button>

          </form>
        </div>

        <!-- Contact Info -->
        <div class="p-8 rounded-xl border border-[rgba(249,183,3,0.12)] bg-[rgba(255,255,255,0.02)] flex flex-col justify-between">
          <div>
            <h3 class="mb-2 text-xl font-bold text-white">Contact Information</h3>
            <p class="text-[#555] text-sm mb-10">Open for any suggestion or just a chat.</p>

            <div class="flex flex-col gap-6">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-[rgba(249,183,3,0.08)] border border-[rgba(249,183,3,0.2)] flex items-center justify-center text-[#f9b703] flex-shrink-0">
                  <i class="text-xs fa-solid fa-phone"></i>
                </div>
                <div>
                  <p class="text-[#555] text-xs mb-0.5">Phone</p>
                  <p class="text-sm font-medium text-white">0304-5759756</p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-10 h-10 rounded-lg bg-[rgba(249,183,3,0.08)] border border-[rgba(249,183,3,0.2)] flex items-center justify-center text-[#f9b703] flex-shrink-0">
                  <i class="text-xs fa-regular fa-envelope"></i>
                </div>
                <div>
                  <p class="text-[#555] text-xs mb-0.5">Email</p>
                  <p class="text-sm font-medium text-white">za5743759@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup></script>
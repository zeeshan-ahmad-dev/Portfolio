<template>
  <section
    class="text-white text-center bg-[#050505] border-[1px] border-[#ffffff0b] pt-36 pb-14 px-4 md:px-20 md:pt-40 lg:pt-36"
  >
    <h2 class="mb-6 text-3xl font-bold md:text-4xl">
      Get in <span class="text-[#f9b703]">Touch</span>
    </h2>
    <p class="mb-10 font-semibold text-gray-400">
      I love to hear from you! Whether you have a question, need support, or
      just want to say hello, feel free to reach out to me.
    </p>

    <div class="overflow-hidden text-left rounded-xl md:grid md:grid-cols-2">
      <div class="bg-[#272A34] py-10 px-5 md:px-10">
        <h3 class="mb-12 text-3xl">Write us</h3>
        <form action="https://formsubmit.co/za5743759@email.com" method="post">
          <!-- Name -->
          <div class="relative w-full mb-5 group focus-within">
            <input
              type="text"
              id="name"
              placeholder="Name"
              name="name"
              class="w-full py-3 text-gray-200 bg-transparent border-none outline-none"
              required
            />
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500 group-focus-within:bg-gray-300 transition-colors duration-100"
            ></div>
          </div>

          <!-- Email -->
          <div class="relative w-full mb-5 group focus-within">
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              class="w-full py-3 text-gray-200 bg-transparent border-none outline-none"
              required
            />
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500 group-focus-within:bg-gray-300 transition-colors duration-100"
            ></div>
          </div>

          <!-- Subject -->
          <div class="relative w-full mb-5 group focus-within">
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              name="subject"
              class="w-full py-3 text-gray-200 bg-transparent border-none outline-none"
              required
            />
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500 group-focus-within:bg-gray-300 transition-colors duration-100"
            ></div>
          </div>

          <!-- Text Area -->
          <div class="relative w-full mb-5 group focus-within">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              class="w-full py-3 text-gray-200 bg-transparent border-none outline-none"
              required
            ></textarea>
            <div
              class="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500 group-focus-within:bg-gray-300 transition-colors duration-100"
            ></div>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            class="bg-[#f9b703] hover:shadow-[0px_0px_10px_2px_rgba(249,183,3,0.8)] transition-all border-none px-4 py-3 my-3 gap-2 rounded-sm"
          >
            Send Message
          </button>
        </form>
        <!-- Contact Info -->
      </div>
      <div class="bg-[#1C1E25] py-10 px-5 md:py-12 md:px-8">
        <h3 class="mb-2 text-xl md:text-2xl">Contact Information</h3>
        <p class="text-[#666666]">
          We're open for any suggestion or just to have a chat
        </p>
        <div class="md:space-y-4">
          <div class="flex flex-col w-full">
            <div class="flex items-center gap-3 pt-5">
              <span
                class="bg-[#202229] hover:bg-gray-500 text-white h-[45px] w-[45px] rounded-full flex items-center justify-center text-sm md:text-lg md:h-[50px] md:w-[50px]"
                ><i class="fa-solid fa-phone"></i
              ></span>
              <p>
                Phone: <span class="text-[#666666] ml-1">0304-5759756</span>
              </p>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-3 pt-5">
              <div
                class="bg-[#202229] hover:bg-gray-500 text-white h-[45px] w-[45px] rounded-full flex items-center justify-center text-sm md:text-lg md:h-[50px] md:w-[50px]"
              >
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <p class="w-[80%]">
                Address:
                <span class="text-[#666666]"
                  >Hakim abad, Nowshera, KPK, Pakistan</span
                >
              </p>
            </div>
          </div>
          <div class="flex flex-col w-max">
            <div class="flex items-center gap-3 pt-5">
              <span
                class="bg-[#202229] hover:bg-gray-500 text-white h-[45px] w-[45px] rounded-full flex items-center justify-center text-sm md:text-lg md:h-[50px] md:w-[50px]"
                ><i class="fa-regular fa-envelope"></i
              ></span>
              <p>
                Email:
                <span class="ml-1 text-[#666666]">za5743759@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

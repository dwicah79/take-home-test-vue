<template>
  <section class="hero flex justify-center bg-gray-100 pt-10">
    <div
      class="container relative mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-12 md:pt-10 md:pb-40 z-10"
    >
      <div
        class="absolute w-[100px] h-[100px] bg-primary-20 -top-8 -left-0 md:w-[180px] md:h-[180px] md:top-5 md:left-24 rounded-full"
      ></div>
      <div class="text-left max-w-lg">
        <p class="text-red-500 font-semibold text-lg md:text-2xl">We Are Here</p>
        <h1 class="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          IT Consultant & <br class="hidden md:inline" />
          Outsourcing
        </h1>
        <p class="text-gray-600 text-lg mt-4">
          We believe that technology is for every business. From roadside stall business to publicly
          listed business. Elevate your business with technology.
        </p>
        <router-link
          to="/contact-us"
          class="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1"
        >
          Contact Us
        </router-link>
      </div>
      <div class="grid grid-cols-2 gap-4 max-w-2xl">
        <img src="../assets/images/hero1.png" alt="Consulting" class="rounded-tl-[5em] shadow-md" />
        <img src="../assets/images/hero2.png" alt="Tech Analysis" class="shadow-md" />
        <img src="../assets/images/hero3.png" alt="Coding" class="rounded-bl-[5em] shadow-md" />
        <img src="../assets/images/hero4.png" alt="Teamwork" class="rounded-br-[5em] shadow-md" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>

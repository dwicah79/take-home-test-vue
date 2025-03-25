<template>
  <div class="relative h-[300px] md:h-[550px] md:w-[100em] w-full max-w-5xl">
    <img
      src="../assets/images/aboutus.png"
      alt="Tentang Perusahaan"
      class="w-full h-full object-cover rounded-tl-3xl rounded-br-3xl"
    />
    <div
      class="absolute top-0 w-full md:-right-28 md:top-1/2 md:-translate-y-1/2 h-full sm:w-3/4 md:w-[25em] md:h-[20em] bg-primary-100 bg-opacity-90 p-6 md:p-12 flex flex-col justify-center shadow-lg rounded-lg"
    >
      <div class="max-w-md text-center md:text-left">
        <h1 class="text-2xl md:text-4xl font-semibold text-white mb-3">About Us</h1>
        <p class="text-white mb-4 leading-relaxed text-justify text-sm md:text-base">
          As an Information Technology Outsourcing (IT Outsourcing) company, we help your business
          to grow through qualified human resources.
        </p>
        <router-link
          to="/aboutus"
          class="block text-center md:inline-block p-3 rounded-lg bg-white text-primary-100 hover:bg-gray-200 hover:text-primary-80 transition-colors"
          >About Our Company</router-link
        >
      </div>
    </div>
  </div>
</template>

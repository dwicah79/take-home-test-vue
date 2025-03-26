<template>
  <div class="bg-gray-100 w-full flex justify-center items-center md:px-40 md:py-20">
    <div class="relative w-full md:h-[26em] overflow-hidden flex justify-center items-center">
      <img
        src="../assets/images/taglineimage.png"
        alt="Tagline Image"
        class="w-full h-full object-cover md:rounded-xl"
      />
      <div class="absolute inset-0 bg-black opacity-50 md:rounded-xl"></div>
      <div class="absolute flex flex-col items-center space-y-4">
        <h1 class="text-center font-bold text-white text-xl md:text-5xl px-6">
          Build your Career while building inclusive technology with us
        </h1>
        <router-link
          to="/join"
          class="p-3 w-fit rounded-lg bg-primary-100 text-white hover:bg-white hover:text-primary-100 transition-colors bottom-10"
          >Join Now</router-link
        >
      </div>
    </div>
  </div>
</template>

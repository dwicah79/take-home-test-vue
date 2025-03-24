<template>
  <section class="flex justify-center bg-gray-100 pt-10">
    <div
      class="container relative mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-12 md:pt-10 md:pb-40 z-10"
    >
      <div
        class="absolute w-[100px] h-[100px] bg-primary-20 -top-8 -left-0 md:w-[180px] md:h-[180px] md:top-5 md:left-24 rounded-full"
      ></div>
      <div class="text-left max-w-lg">
        <p class="text-primary-100 font-semibold text-lg md:text-2xl">
          {{ currentTranslations.weAreHere }}
        </p>
        <h1 class="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          {{ currentTranslations.itConsulting }} <br class="hidden md:inline" />
          {{ currentTranslations.outsourcing }}
        </h1>
        <p class="text-gray-600 text-lg mt-4">
          {{ currentTranslations.techForBusiness }}
        </p>
        <router-link
          to="/contact-us"
          class="mt-6 inline-block bg-primary-100 hover:bg-primary-80 text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:-translate-y-1"
        >
          {{ currentTranslations.contactUs }}
        </router-link>
      </div>
      <div class="grid grid-cols-2 gap-4 max-w-2xl">
        <img
          src="../assets/images/hero1.png"
          alt="Consulting"
          class="md:rounded-tl-[5em] rounded-lg shadow-md"
        />
        <img src="../assets/images/hero2.png" alt="Tech Analysis" class="shadow-md" />
        <img
          src="../assets/images/hero3.png"
          alt="Coding"
          class="md:rounded-bl-[5em] rounded-lg shadow-md"
        />
        <img
          src="../assets/images/hero4.png"
          alt="Teamwork"
          class="md:rounded-br-[5em] rounded-lg shadow-md"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLanguageStore } from '../stores/language'
import { storeToRefs } from 'pinia'

const languageStore = useLanguageStore()
const { currentTranslations } = storeToRefs(languageStore)
</script>

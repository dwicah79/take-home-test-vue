<template>
  <div class="navbar bg-base-100 shadow-sm md:px-32 font-semibold relative z-20">
    <div class="flex-1">
      <router-link to="/">
        <img src="../assets/images/logo.png" class="w-24" alt="" />
      </router-link>
    </div>

    <div class="hidden md:flex flex-none">
      <ul class="menu menu-horizontal px-1 font-poppins">
        <li>
          <details ref="servicesDetails" class="relative" @click.stop="toggleDropdown('services')">
            <summary>{{ currentTranslations.services }}</summary>
            <ul
              v-show="openDropdown === 'services'"
              class="bg-base-100 rounded-xl p-2 w-[28rem] grid grid-cols-2 gap-5 absolute top-11 -left-10"
              @click.stop
            >
              <div>
                <li class="menu-title">
                  <router-link
                    to="/it-outsourcing"
                    class="text-secondary-100 text-md hover:text-primary-100 hover:cursor-pointer font-bold"
                  >
                    {{ currentTranslations.itOutsourcing }}
                  </router-link>
                </li>
                <ol class="list-disc pl-10 text-black text-xs">
                  <li class="list-item">
                    <router-link
                      to="/independent-staff-augmentation"
                      class="hover:bg-white hover:text-primary-100 whitespace-nowrap"
                    >
                      {{ currentTranslations.independentStaff }}
                    </router-link>
                  </li>
                  <li class="list-item">
                    <router-link
                      to="/team-augmentation"
                      class="hover:bg-white hover:text-primary-100 whitespace-nowrap"
                    >
                      {{ currentTranslations.teamAugmentation }}
                    </router-link>
                  </li>
                  <ol class="list-item">
                    <li>
                      <router-link
                        to="/it-managed-services"
                        class="hover:bg-white hover:text-primary-100 whitespace-nowrap text-xs"
                      >
                        {{ currentTranslations.itManagedServices }}
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        to="/it-managed-services"
                        class="hover:bg-white hover:text-primary-100 whitespace-nowrap text-xs"
                      >
                        {{ currentTranslations.softwareDevelopment }}
                      </router-link>
                    </li>
                  </ol>
                </ol>
              </div>
              <div>
                <li class="menu-title">
                  <router-link
                    to="/digital-transformation"
                    class="font-bold text-secondary-100 text-md hover:text-primary-100 hover:cursor-pointer"
                  >
                    {{ currentTranslations.digitalTransformation }}
                  </router-link>
                </li>
                <ol class="list-disc pl-10 text-xs">
                  <li class="list-item">
                    <router-link to="/digitisation" class="hover:bg-white hover:text-primary-100">
                      {{ currentTranslations.digitisation }}
                    </router-link>
                  </li>
                  <li class="list-item">
                    <router-link to="/digitalisation" class="hover:bg-white hover:text-primary-100">
                      {{ currentTranslations.digitalisation }}
                    </router-link>
                  </li>
                </ol>
              </div>
            </ul>
          </details>
        </li>

        <li>
          <details ref="aboutDetails" @click.stop="toggleDropdown('about')">
            <summary>{{ currentTranslations.about }}</summary>
            <ul
              v-show="openDropdown === 'about'"
              class="bg-base-100 rounded-t-none px-5 w-36"
              @click.stop
            >
              <li>
                <router-link
                  to="/about-mgs"
                  class="bg-white hover:text-primary-100 text-secondary-100"
                >
                  {{ currentTranslations.aboutMgs }}
                </router-link>
              </li>
              <li>
                <router-link
                  to="/case-study"
                  class="bg-white hover:text-primary-100 text-secondary-100"
                >
                  {{ currentTranslations.caseStudy }}
                </router-link>
              </li>
              <li>
                <router-link to="/blog" class="bg-white hover:text-primary-100 text-secondary-100">
                  {{ currentTranslations.blog }}
                </router-link>
              </li>
            </ul>
          </details>
        </li>

        <li>
          <router-link to="/career" class="hover:text-primary-100">
            {{ currentTranslations.career }}
          </router-link>
        </li>

        <li>
          <details ref="languageDetails" @click.stop="toggleDropdown('language')">
            <summary>{{ currentLanguage }}</summary>
            <ul
              v-if="openDropdown === 'language'"
              class="bg-base-100 rounded-t-none p-2"
              @click.stop
            >
              <li>
                <a @click="setLanguage('en')" class="hover:text-primary-100 cursor-pointer">
                  {{ translations.en.english }}
                </a>
              </li>
              <li>
                <a @click="setLanguage('id')" class="hover:text-primary-100 cursor-pointer">
                  {{ translations.id.indonesian }}
                </a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>

    <div class="md:hidden flex-none">
      <button class="btn btn-square btn-ghost" @click="toggleMobileMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-5 h-5 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
      @click="toggleMobileMenu"
    ></div>

    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="translate-x-0"
      leave-to-class="-translate-x-full"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-20"
      >
        <div class="p-4">
          <button class="btn btn-ghost absolute right-2 top-2" @click="toggleMobileMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div class="mt-10 space-y-2">
            <div class="collapse collapse-arrow">
              <input type="checkbox" v-model="mobileDropdowns.services" />
              <div class="collapse-title font-medium">
                {{ currentTranslations.services }}
              </div>
              <div class="collapse-content">
                <div class="grid grid-cols-1 gap-4 p-2">
                  <div>
                    <router-link
                      to="/it-outsourcing"
                      class="block text-secondary-100 hover:text-primary-100 font-bold mb-2"
                    >
                      {{ currentTranslations.itOutsourcing }}
                    </router-link>
                    <ul class="pl-4 space-y-2 text-sm">
                      <li>
                        <router-link
                          to="/independent-staff-augmentation"
                          class="block hover:text-primary-100"
                        >
                          {{ currentTranslations.independentStaff }}
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/team-augmentation" class="block hover:text-primary-100">
                          {{ currentTranslations.teamAugmentation }}
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/it-managed-services" class="block hover:text-primary-100">
                          {{ currentTranslations.itManagedServices }}
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/it-managed-services" class="block hover:text-primary-100">
                          {{ currentTranslations.softwareDevelopment }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <router-link
                      to="/digital-transformation"
                      class="block text-secondary-100 hover:text-primary-100 font-bold mb-2"
                    >
                      {{ currentTranslations.digitalTransformation }}
                    </router-link>
                    <ul class="pl-4 space-y-2 text-sm">
                      <li>
                        <router-link to="/digitisation" class="block hover:text-primary-100">
                          {{ currentTranslations.digitisation }}
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/digitalisation" class="block hover:text-primary-100">
                          {{ currentTranslations.digitalisation }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="collapse collapse-arrow">
              <input type="checkbox" v-model="mobileDropdowns.about" />
              <div class="collapse-title font-medium">
                {{ currentTranslations.about }}
              </div>
              <div class="collapse-content">
                <ul class="space-y-2">
                  <li>
                    <router-link to="/about-mgs" class="block hover:text-primary-100">
                      {{ currentTranslations.aboutMgs }}
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/case-study" class="block hover:text-primary-100">
                      {{ currentTranslations.caseStudy }}
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/blog" class="block hover:text-primary-100">
                      {{ currentTranslations.blog }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>

            <router-link to="/career" class="block px-4 py-2 hover:text-primary-100">
              {{ currentTranslations.career }}
            </router-link>

            <div class="collapse collapse-arrow">
              <input type="checkbox" v-model="mobileDropdowns.language" />
              <div class="collapse-title font-medium">
                {{ currentLanguage }}
              </div>
              <div class="collapse-content">
                <ul>
                  <li>
                    <a
                      @click="setLanguageMobile('en')"
                      class="block px-4 py-2 hover:text-primary-100 cursor-pointer"
                    >
                      {{ translations.en.english }}
                    </a>
                  </li>
                  <li>
                    <a
                      @click="setLanguageMobile('id')"
                      class="block px-4 py-2 hover:text-primary-100 cursor-pointer"
                    >
                      {{ translations.id.indonesian }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguageStore } from '../stores/language'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const languageStore = useLanguageStore()
const { currentLanguage, currentTranslations, translations } = storeToRefs(languageStore)

const servicesDetails = ref(null)
const aboutDetails = ref(null)
const languageDetails = ref(null)

const openDropdown = ref(null)
const isMobileMenuOpen = ref(false)
const mobileDropdowns = ref({
  services: false,
  about: false,
  language: false,
})

const toggleDropdown = (dropdown) => {
  openDropdown.value = openDropdown.value === dropdown ? null : dropdown
}

const isLanguageDropdownOpen = ref(false)

const toggleLanguageDropdown = () => {
  isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
}

const setLanguage = (lang) => {
  languageStore.setLanguage(lang)
  isLanguageDropdownOpen.value = false
}

const setLanguageMobile = (lang) => {
  setLanguage(lang)
  isMobileMenuOpen.value = false
  mobileDropdowns.value = {
    services: false,
    about: false,
    language: false,
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (!isMobileMenuOpen.value) {
    mobileDropdowns.value = {
      services: false,
      about: false,
      language: false,
    }
  }
}

const route = useRoute()
const hideNavbar = computed(() => route.meta.hideNavbar)
</script>

<style scoped>
.router-link-exact-active {
  @apply text-primary-100;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateX(-100%);
}
</style>

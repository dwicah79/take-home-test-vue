<template>
  <div class="navbar bg-base-100 shadow-sm md:px-32 font-semibold relative z-20">
    <div class="flex-1">
      <router-link to="/">
        <img src="../assets/images/logo.png" class="w-24" alt="" />
      </router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 font-poppins">
        <li>
          <details>
            <summary>{{ currentTranslations.services }}</summary>
            <ul class="bg-base-100 rounded-t-none p-2 w-[25rem] grid grid-cols-2 gap-2">
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
                      class="hover:bg-white hover:text-primary-100"
                    >
                      {{ currentTranslations.independentStaff }}
                    </router-link>
                  </li>
                  <li class="list-item">
                    <router-link
                      to="/team-augmentation"
                      class="hover:bg-white hover:text-primary-100"
                    >
                      {{ currentTranslations.teamAugmentation }}
                    </router-link>
                  </li>
                  <li class="list-item">
                    <router-link
                      to="/it-managed-services"
                      class="hover:bg-white hover:text-primary-100"
                    >
                      {{ currentTranslations.itManagedServices }}
                    </router-link>
                  </li>
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
          <details>
            <summary>{{ currentTranslations.about }}</summary>
            <ul class="bg-base-100 rounded-t-none px-5 w-36">
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
          <details>
            <summary>{{ currentLanguage }}</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
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
  </div>
</template>

<script setup>
import { useLanguageStore } from '../stores/language'
import { storeToRefs } from 'pinia'

const languageStore = useLanguageStore()
const { currentLanguage, currentTranslations, translations } = storeToRefs(languageStore)

const setLanguage = (lang) => {
  languageStore.setLanguage(lang)
}
</script>

<style scoped>
.router-link-exact-active {
  @apply text-primary-100;
}
</style>

<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import { useServicesStore } from '@/stores/service'
import { useLanguageStore } from '@/stores/language'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import CardSkeleton from '@/components/CardSkeletonComponent.vue'

const servicesStore = useServicesStore()
const languageStore = useLanguageStore()
const { currentLanguage, currentTranslations } = storeToRefs(languageStore)

watch(
  currentLanguage,
  (newLang) => {
    servicesStore.fetchServices(newLang.toLowerCase())
  },
  { immediate: true },
)
</script>

<template>
  <main>
    <HeroComponent />

    <SectionComponent
      :title="currentTranslations.whatWeHave || 'What we Have'"
      :subtitle="currentTranslations.services || 'Our Services'"
      :Image="true"
      imageSrc="/src/assets/images/vector.png"
      backgroundColor="bg-white"
      imagePosition="top-left"
    >
      <!-- <template v-if="servicesStore.loading">
        <CardSkeleton />
      </template>

      <template v-else-if="servicesStore.error">
        <div class="text-red-500 text-center py-8">Error: {{ servicesStore.error }}</div>
      </template>

      <template v-else-if="!servicesStore.hasServices">
        <div class="text-center py-12 text-gray-500">No services available in this language</div>
      </template>

      <template v-else>
      </template> -->
      <CardComponent
        v-for="service in servicesStore.services"
        :key="service.id"
        :title="service.title"
        :description="service.description"
        :iconSrc="service.iconSrc"
        :link="service.link"
      />
    </SectionComponent>
  </main>
</template>

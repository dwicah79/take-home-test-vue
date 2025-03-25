<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import { useServicesStore } from '@/stores/service'
import { useLanguageStore } from '@/stores/language'
import { onMounted, watch } from 'vue'
import { storeToRefs } from 'pinia'
import CardSkeleton from '@/components/CardSkeletonComponent.vue'
import { useWhiesStore } from '@/stores/Whies'

const servicesStore = useServicesStore()
const languageStore = useLanguageStore()
const { currentLanguage, currentTranslations } = storeToRefs(languageStore)

const whiesStore = useWhiesStore()

onMounted(async () => {
  await whiesStore.fetchWhies()
})
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
      <CardComponent
        v-for="service in servicesStore.services"
        :key="service.id"
        :title="service.title"
        :description="service.description"
        :has-hover-effect="true"
        :iconSrc="service.iconSrc"
        :link="service.link"
        line-type="double"
        line-color="bg-primary-100"
      />
    </SectionComponent>

    <SectionComponent
      :title="currentTranslations.whymgs || 'Why mgs ?'"
      :subtitle="currentTranslations.reason || 'Reason whymgs is the right place'"
      :Image="false"
      image-src="false"
      backgroundColor="bg-gray-100"
    >
      <CardComponent
        v-for="item in whiesStore.whies"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :has-hover-effect="false"
        line-type="gradient"
        :gradient-colors="['from-primary-100', 'via-primary-20', 'to-white']"
      />
    </SectionComponent>
  </main>
</template>

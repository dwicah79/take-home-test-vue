<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import SectionComponent from '@/components/SectionComponent.vue'
</script>

<template>
  <main>
    <HeroComponent />
    <SectionComponent
      title="What we Have"
      subtitle="Our Services"
      :Image="true"
      imageSrc="/src/assets/images/vector.png"
      backgroundColor="bg-white"
      imagePosition="top-left"
    />
  </main>
</template>

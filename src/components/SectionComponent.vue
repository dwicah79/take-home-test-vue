<template>
  <section :class="backgroundColor" class="w-full h-screen flex justify-center relative">
    <div v-if="Image" class="absolute" :class="imagePositionClass">
      <img :src="imageSrc" alt="Sample Image" class="mt-5" />
    </div>
    <div class="flex flex-col item-center font-semibold mt-10 md:mt-32">
      <h1 class="text-center text-primary-100 text-xl md:text-2xl">{{ title }}</h1>
      <h1 class="text-center text-2xl text-secondary-100 md:text-5xl">{{ subtitle }}</h1>

      <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  Image: {
    type: Boolean,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  imagePosition: {
    type: String,
    default: 'top-left',
    validator: (value) =>
      ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center'].includes(value),
  },
})

const imagePositionClass = computed(() => {
  return {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
    center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
  }[props.imagePosition]
})
</script>

<template>
  <div
    class="relative group bg-white p-6 md:p-14 rounded-lg shadow-md border border-slate-300 w-full hover:shadow-lg transition-all duration-300 hover:bg-primary-20"
  >
    <div class="flex justify-start px-5">
      <template v-if="iconSrc">
        <img
          :src="iconSrc"
          :alt="title"
          class="w-12 h-12 object-contain"
          @error="handleImageError"
          v-show="!imageError"
        />
      </template>
      <div
        v-if="!iconSrc || imageError"
        class="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center"
      >
        <font-awesome-icon :icon="['fas', 'question']" class="text-2xl text-gray-400" />
      </div>
    </div>

    <h3 class="font-bold text-lg text-gray-900 mt-4 px-5">{{ title }}</h3>
    <div class="flex gap-1 px-5">
      <div class="w-16 h-1 bg-red-600 mt-2"></div>
      <div class="w-16 h-1 bg-red-600 mt-2"></div>
    </div>
    <p class="text-gray-600 mt-4 px-5">
      {{ description }}
    </p>

    <div
      class="absolute top-1/2 -translate-y-1/2 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <a v-if="link" :href="link" class="p-5 bg-primary-100 rounded-full">
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-white text-xl" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Service Title',
  },
  description: {
    type: String,
    default: 'Service description will appear here',
  },
  iconSrc: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '#',
  },
})

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}
</script>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, computed } from 'vue'

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
    default: '',
  },
  hasHoverEffect: {
    type: Boolean,
    default: true,
  },
  hasRedHover: {
    type: Boolean,
    default: false,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  lineType: {
    type: String,
    default: 'double',
    validator: (value) => ['double', 'gradient'].includes(value),
  },
  lineColor: {
    type: String,
    default: 'bg-red-600',
  },
  gradientColors: {
    type: Array,
    default: () => ['from-red-500', 'to-red-300'],
  },
})

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

const colorMap = {
  'red-500': 'bg-red-500',
  'red-300': 'bg-red-300',
  'red-600': 'bg-red-600',
  'blue-500': 'bg-blue-500',
  'blue-300': 'bg-blue-300',
  'green-600': 'bg-green-600',
}

const firstLineClass = computed(() => {
  if (props.lineType === 'gradient') {
    return `bg-gradient-to-r ${props.gradientColors.join(' ')}`
  }
  return props.lineColor
})

const secondLineClass = computed(() => props.lineColor)
</script>

<template>
  <div
    class="relative group bg-white p-6 md:p-14 rounded-lg shadow-md border border-slate-300 w-full transition-all duration-300"
    :class="{
      'hover:shadow-lg hover:bg-primary-20': hasHoverEffect,
      'hover:bg-red-50': hasRedHover,
    }"
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
      <div
        class="h-1 mt-2"
        :class="[firstLineClass, lineType === 'gradient' ? 'w-full' : 'w-16']"
      ></div>

      <div v-if="lineType === 'double'" class="w-16 h-1 mt-2" :class="secondLineClass"></div>
    </div>
    <p class="text-gray-600 mt-4 px-5">
      {{ description }}
    </p>

    <div
      v-if="showArrow && link"
      class="absolute top-1/2 -translate-y-1/2 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <a :href="link" class="p-5 bg-primary-100 rounded-full">
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="text-white text-xl" />
      </a>
    </div>
  </div>
</template>

import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useServicesStore = defineStore('services', () => {
  const services = ref([])
  const loading = ref(false)
  const error = ref(null)
  const baseUrl =
    import.meta.env.VITE_BASE_URL || 'https://strapi-admin.megagigasolusindo.co.id/api'

  const fetchServices = async (locale = 'en') => {
    try {
      loading.value = true
      error.value = null
      services.value = []

      const params = {
        populate: '*',
        publicationState: 'live',
      }

      if (locale !== 'en') {
        params.locale = locale
      }

      const response = await axios.get(`${baseUrl}/services`, { params })
      services.value = response.data.data.map((service) => ({
        id: service.id,
        title: service.title || 'No title available',
        description: service.description || 'No description available',
        iconSrc: service.icon?.data?.attributes?.url || '',
        link: service.link || '#',
      }))

      if (services.value.length === 0 && locale !== 'en') {
        console.warn(`No services found for locale: ${locale}, falling back to English`)
        await fetchServices('en')
      }
    } catch (err) {
      error.value = err.response?.data?.error?.message || err.message || 'Failed to fetch services'
      console.error('API Error:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    services,
    loading,
    error,
    fetchServices,
    hasServices: computed(() => services.value.length > 0),
  }
})

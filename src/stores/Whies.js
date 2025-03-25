import { defineStore } from 'pinia'
import axios from 'axios'

export const useWhiesStore = defineStore('whies', {
  state: () => ({
    whies: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchWhies() {
      try {
        this.loading = true
        const baseUrl =
          import.meta.env.VITE_BASE_URL || 'https://strapi-admin.megagigasolusindo.co.id/api'
        const response = await axios.get(`${baseUrl}/whies`)
        this.whies =
          response.data.data?.map((item) => {
            if (item.title && item.description) {
              return {
                id: item.id,
                title: item.title,
                description: item.description,
                iconSrc: item.icon,
              }
            } else if (item.attributes) {
              return {
                id: item.id,
                title: item.attributes.title,
                description: item.attributes.description,
                iconSrc: item.attributes.icon,
              }
            }
            return {
              id: item.id,
              title: 'No title',
              description: 'No description',
              iconSrc: 'no icon',
            }
          }) || []
      } catch (error) {
        this.error = error.message
        console.error('Error details:', error.response?.data || error)
      } finally {
        this.loading = false
      }
    },
  },
})

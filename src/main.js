import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useLanguageStore } from './stores/language'
import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

const languageStore = useLanguageStore()
languageStore.setLanguage(localStorage.getItem('language') || 'en')

app.mount('#app')

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useLanguageStore } from './stores/language'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowRight, faQuestion, faInstagram, faFacebook, faTwitter, faLinkedin)

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)

const languageStore = useLanguageStore()
languageStore.setLanguage(localStorage.getItem('language') || 'en')

app.mount('#app')

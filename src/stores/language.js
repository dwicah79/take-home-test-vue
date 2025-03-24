import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    locale: localStorage.getItem('language') || 'en',
    translations: {
      en: {
        services: 'Our Services',
        itOutsourcing: 'IT Outsourcing',
        independentStaff: 'Independent Staff Augmentation',
        teamAugmentation: 'Team Augmentation',
        itManagedServices: 'IT Managed Services',
        softwareDevelopment: 'Software Development',
        digitalTransformation: 'Digital Transformation',
        digitisation: 'Digitisation',
        digitalisation: 'Digitalisation',
        about: 'About',
        aboutMgs: 'About MGS',
        caseStudy: 'Case Study',
        blog: 'Blog',
        career: 'Career',
        english: 'English',
        indonesian: 'Bahasa Indonesia',
        weAreHere: 'We Are Here',
        itConsulting: 'IT Consultant',
        outsourcing: 'Outsourcing',
        techForBusiness:
          'We believe that technology is for every business. From roadside stall business to publicly listed business. Elevate your business with technology.',
        contactUs: 'Contact Us',
        currentLanguage: 'EN',
      },
      id: {
        services: 'Layanan Kami',
        itOutsourcing: 'Outsourcing IT',
        independentStaff: 'Peningkatan Staf Independen',
        teamAugmentation: 'Peningkatan Tim',
        itManagedServices: 'Layanan Manajemen IT ',
        softwareDevelopment: 'Pengembangan Perangkat Lunak',
        digitalTransformation: 'Transformasi Digital',
        digitisation: 'Digitisasi',
        digitalisation: 'Digitalisasi',
        about: 'Tentang',
        aboutMgs: 'Tentang MGS',
        caseStudy: 'Studi Kasus',
        blog: 'Blog',
        career: 'Karir',
        english: 'Inggris',
        indonesian: 'Bahasa Indonesia',
        weAreHere: 'Kami Hadir',
        itConsulting: 'Konsultan IT',
        outsourcing: 'Outsourcing',
        techForBusiness:
          'Kami percaya teknologi untuk semua bisnis. Dari usaha pinggir jalan hingga perusahaan publik. Tingkatkan bisnis Anda dengan teknologi.',
        contactUs: 'Hubungi Kami',
        currentLanguage: 'ID',
      },
    },
  }),
  actions: {
    setLanguage(lang) {
      this.locale = lang
      localStorage.setItem('language', lang)
      window.dispatchEvent(new Event('language-changed'))
    },
  },
  getters: {
    currentLanguage: (state) => state.locale.toUpperCase(),
    currentTranslations: (state) => state.translations[state.locale],
  },
})

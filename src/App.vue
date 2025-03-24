<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
</script>

<template>
  <div id="app">
    <header>
      <NavBarComponent />
    </header>
    <router-view />
  </div>
</template>

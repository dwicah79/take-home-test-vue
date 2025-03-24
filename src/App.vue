<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
</script>

<template>
  <div id="app">
    <header>
      <div class="fixed w-full z-50 top-0">
        <NavBarComponent />
      </div>
    </header>
    <router-view />
  </div>
</template>

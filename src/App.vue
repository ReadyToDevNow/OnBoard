<script setup>
//import HelloWorld from './components/HelloWorld.vue'
//import TheDashboard from './views/TheDashboard.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <router-link to="/about"></router-link>
  </header>
  <router-view></router-view>

  <!--<TheDashboard /> -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
  -->
</template>

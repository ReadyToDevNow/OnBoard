<script setup></script>

<template>
  <div class="layout-sidebar bg-gray-700">
    <!--<div class="bg-zinc-900 ml-16 mr-16 absolute inset-y-0 top-16 left-0 w-72"> -->
    <div class="flex flex-col justify-center items-center font-bold mt-4">
      <div>Accueil</div>
      <router-link to="about">Dashboard</router-link>
      <router-link to="analytics">Analytics</router-link>
      <router-link to="discover">Discover</router-link>
      <router-link to="sales">Sales</router-link>
      <router-link to="SmartHome">Smart Home</router-link>
    </div>
  </div>
</template>
<style scoped>
.layout-sidebar {
  position: fixed;
  width: 16rem;
  height: calc(100vh - 8rem);
  z-index: 999;
  overflow-y: auto;
  user-select: none;
  top: 6rem;
  left: 2rem;
}
</style>

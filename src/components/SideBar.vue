<script setup></script>

<template>
  <div class="bg-blue-900 absolute inset-y-0 top-16 left-0 w-72">
    <div class="flex flex-col justify-center items-center font-bold text-white mt-4">
      <div>Accueil</div>
      <div>Dashboard</div>
      <router-link to="analytics">Analytics</router-link>
      <router-link to="discover">Discover</router-link>
      <router-link to="sales">Sales</router-link>
      <router-link to="SmartHome">Smart Home</router-link>
    </div>
  </div>
</template>

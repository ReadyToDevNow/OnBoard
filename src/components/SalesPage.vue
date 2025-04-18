<template>
  <div class="p-6 bg-[#254159] min-h-screen text-white space-y-6">
    <!-- Barre de recherche + boutons -->
    <div class="flex flex-col md:flex-row items-center gap-4">
      <input
        v-model="search"
        type="text"
        placeholder="Rechercher..."
        class="w-full md:w-1/3 bg-[#51768C] text-white placeholder-white px-4 py-2 rounded"
      />
      <div class="flex gap-2">
        <button class="bg-[#F27405] hover:bg-[#F24405] text-white px-4 py-2 rounded">
          Filtrer
        </button>
        <button class="bg-[#88B0BF] hover:bg-[#51768C] text-white px-4 py-2 rounded">
          Exporter
        </button>
      </div>
    </div>

    <!-- Carte + graphique -->
    <div class="bg-white text-black rounded-2xl shadow-lg p-6">
      <h2 class="text-xl font-bold mb-4">Statistiques mensuelles</h2>
      <BarChart />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BarChart from './BarChart.vue'

const search = ref('')
</script>

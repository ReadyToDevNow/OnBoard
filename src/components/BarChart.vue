<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script setup>
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Title } from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Valeur',
      data: [400, 300, 500, 200, 700],
      backgroundColor: '#F27405',
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#254159',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#254159',
      },
    },
    y: {
      ticks: {
        color: '#254159',
      },
    },
  },
}
</script>

<template>
  <div id="app">
    <SideBar />
    <AnalyticsPage />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import AnalyticsPage from '@/components/AnalyticsPage.vue'

export default {
  components: {
    SideBar,
    AnalyticsPage,
  },
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  background-color: rgba(128, 128, 128, 0.158);
}
</style>

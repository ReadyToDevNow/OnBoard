<template>
  <div class="dashboard">
    <h1>OnBoard</h1>
    <div class="dashboard-grid">
      <SideBar />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
  components: {
    SideBar,
  },
}
</script>

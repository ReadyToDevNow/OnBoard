<template>
  <div class="dashboard">
    <SideBar />
    <HeadBar />
    <DashBoard />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import DashBoard from '@/components/DashBoard.vue'

export default {
  components: {
    SideBar,
    HeadBar,
    DashBoard,
  },
}
</script>

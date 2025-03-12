<template>
  <div class="dashboard">
    <SideBar />
    <HeadBar />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'

export default {
  components: {
    SideBar,
    HeadBar,
  },
}
</script>

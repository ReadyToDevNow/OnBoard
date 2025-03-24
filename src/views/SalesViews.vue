<template>
  <div>
    <HeadBar />
    <SideBar />
    <SalesPage />
  </div>
</template>

<script>
import HeadBar from '@/components/HeadBar.vue'
import SideBar from '@/components/SideBar.vue'
import SalesPage from '@/components/SalesPage.vue'

export default {
  components: {
    HeadBar,
    SideBar,
    SalesPage,
  },
}
</script>

<style></style>

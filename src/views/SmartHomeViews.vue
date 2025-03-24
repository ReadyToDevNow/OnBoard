<template>
  <div>
    <HeadBar />
    <SideBar />
    <SmartHomePage />
  </div>
</template>

<script>
import HeadBar from '@/components/HeadBar.vue'
import SideBar from '@/components/SideBar.vue'
import SmartHomePage from '@/components/SmartHomePage.vue'
export default {
  components: {
    HeadBar,
    SideBar,
    SmartHomePage,
  },
}
</script>

<style></style>

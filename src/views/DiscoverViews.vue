<template>
  <div>
    <HeadBar />
    <SideBar />
    <DiscoverPage />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import HeadBar from '@/components/HeadBar.vue'
import DiscoverPage from '@/components/DiscoverPage.vue'

export default {
  components: {
    SideBar,
    HeadBar,
    DiscoverPage,
  },
}
</script>

<style></style>

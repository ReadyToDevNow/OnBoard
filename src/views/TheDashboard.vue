<template>
  <div class="dashboard">
    <h1>Open Source API Dashboard</h1>
    <div class="dashboard-grid">
      <UserList />
      <PostList />
      <TodoList />
    </div>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import PostList from '@/components/PostList.vue'
import TodoList from '@/components/TodoList.vue'

export default {
  components: {
    UserList,
    PostList,
    TodoList,
  },
}
</script>

<style scoped>
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>

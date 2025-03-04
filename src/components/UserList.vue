<template>
  <div class="user-list">
    <h2>Users</h2>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.email }})</li>
    </ul>
    <p v-else>Loading users...</p>
  </div>
</template>

<script>
import { api } from '@/services/apiService.js'

export default {
  data() {
    return {
      users: [],
    }
  },
  async mounted() {
    try {
      const response = await api.get('/users')
      this.users = response.data.slice(0, 5) // Limit to 5 users
    } catch (error) {
      console.error('Error fetching users', error)
    }
  },
}
</script>

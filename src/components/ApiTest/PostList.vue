<template>
  <div class="post-list">
    <h2>Recent Posts</h2>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body.slice(0, 100) }}...</p>
      </li>
    </ul>
    <p v-else>Loading posts...</p>
  </div>
</template>

<script>
import { api } from '@/services/apiService.js'

export default {
  data() {
    return {
      posts: [],
    }
  },
  async mounted() {
    try {
      const response = await api.get('/posts')
      this.posts = response.data.slice(0, 2) // Limit to 3 posts
    } catch (error) {
      console.error('Error fetching posts', error)
    }
  },
}
</script>

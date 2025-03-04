<template>
  <div class="todo-list">
    <h2>Todo List</h2>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.id">
        <input type="checkbox" :checked="todo.completed" disabled />
        {{ todo.title }}
      </li>
    </ul>
    <p v-else>Loading todos...</p>
  </div>
</template>

<script>
import { api } from '@/services/apiService.js'

export default {
  data() {
    return {
      todos: [],
    }
  },
  async mounted() {
    try {
      const response = await api.get('/todos')
      this.todos = response.data.slice(0, 5) // Limit to 5 todos
    } catch (error) {
      console.error('Error fetching todos', error)
    }
  },
}
</script>

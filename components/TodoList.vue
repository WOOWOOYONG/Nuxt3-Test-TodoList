<script setup lang="ts">
import { useTodoStore } from '~/stores/todoStore'

defineProps<{ todos: TodoItem[] }>()
const { toggleTodo, deleteTodo } = useTodoStore()
</script>

<template>
  <ul v-if="todos.length > 0" class="border-b-2 border-gray-300 pb-4 text-lg">
    <li
      v-for="todo in todos"
      :key="todo.id"
      class="cur <div></div>sor-pointer mb-4 flex items-center justify-between"
    >
      <div
        class="flex-grow cursor-pointer"
        :class="{ 'text-decoration-line: line-through': todo.completed }"
        @click="toggleTodo(todo.id)"
      >
        <input type="checkbox" :checked="todo.completed" class="cursor-pointer" />
        <span class="pl-4">{{ todo.title }}</span>
      </div>
      <button class="cursor-pointer" type="button" @click="deleteTodo(todo.id)">
        <Icon name="material-symbols:delete-outline" class="text-2xl hover:text-orange-600" />
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useTodoStore } from '~/stores/todoStore'
const { todos, undoneCount, filteredTodos } = storeToRefs(useTodoStore())
const { addTodo } = useTodoStore()

const { data } = await useFetch<TodoItem[]>('/api/todos')
if (data.value) {
  todos.value = data.value
}

const todo = ref('')

const submitNewTodo = (newTodo: string) => {
  addTodo(newTodo)
  todo.value = ''
}
</script>

<template>
  <section class="container mx-auto flex flex-col items-center justify-center py-20">
    <h1 class="mb-10 text-3xl font-medium">待辦事項</h1>
    <div class="rounded-md bg-[#f5f5f5] px-12 pb-8 pt-6 shadow">
      <TodoStatusTab />
      <div class="mb-10 flex items-center gap-2">
        <TodoInput v-model.trim="todo" @keypress.enter="submitNewTodo(todo)" />
        <BaseButton btn-type="green" :disabled="!todo" @click="submitNewTodo(todo)">
          新增
        </BaseButton>
      </div>
      <TodoList :todos="filteredTodos" />
      <p v-if="undoneCount" class="mt-4 text-right text-lg">目前共有{{ undoneCount }}項待完成</p>
      <p v-else class="mt-4 text-right text-lg">目前沒有待辦囉～</p>
    </div>
  </section>
</template>

<style scoped></style>

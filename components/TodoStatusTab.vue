<script setup lang="ts">
import { useTodoStore } from '~/stores/todoStore'
const tabs = reactive([
  {
    state: 'all',
    text: '全部'
  },
  {
    state: 'undone',
    text: '待完成'
  },
  {
    state: 'done',
    text: '已完成'
  }
])

const { filteredState } = storeToRefs(useTodoStore())
const { changeState } = useTodoStore()
</script>
<template>
  <ul class="mb-6 flex justify-between gap-2">
    <li
      v-for="(tab, index) in tabs"
      :key="index"
      class="cursor-pointer px-2 pb-1"
      :class="{ 'border-b-2  border-black': tab.state === filteredState }"
      @click="changeState(tab.state)"
    >
      {{ tab.text }}
    </li>
  </ul>
</template>

<style scoped></style>

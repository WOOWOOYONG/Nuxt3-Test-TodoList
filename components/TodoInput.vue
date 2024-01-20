<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const todo = computed({
  get() {
    return props.modelValue
  },
  set(newVal) {
    emit('update:modelValue', newVal)
  }
})

const todoInput = ref<HTMLInputElement | null>(null)

onMounted(() => {
  todoInput.value?.focus()
})
</script>

<template>
  <div>
    <input
      ref="todoInput"
      v-model="todo"
      type="text"
      placeholder="來做點事吧！"
      class="rounded px-2 py-1 text-lg"
    />
  </div>
</template>

<style scoped></style>

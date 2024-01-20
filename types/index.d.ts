export {}

declare global {

  interface TodoItem {
    id: number
    title: string
    completed: boolean
  }

  interface NewTodo {
    id: string
    title: string
  }

}

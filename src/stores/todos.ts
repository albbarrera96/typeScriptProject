import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', () => {
    
    const state = ref({
        "todos": [
            "Learn Vue 3",
            "Learn Pinia",
            "Learn TypeScript",
            "Learn Vite"
        ],
    })
    const newTodo = ref('')
    const addTodo = () => {
        state.value.todos.push(newTodo.value);
        newTodo.value = '';
    }
    const removeTodo = (index: number) => {
        state.value.todos.splice(index, 1);
    }
    return { state, addTodo, newTodo, removeTodo }
})
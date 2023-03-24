<template>
    <div class="container my-4">
        <h2 class="fw-bold">Todo List</h2>
        <div class="card shadow-sm mt-4">
            <div class="card-body">
                <div class="card-title">
                    <div class="input-group">
                        <span class="input-group-text">Todo Title</span>
                        <input type="text" class="form-control" placeholder="Add a new todo" v-model="todosStore.newTodo">
                        <button class="btn btn-success" @click="todosStore.addTodo">Add Todo</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4 g-2">
            <div class="col-3" v-for="todo in todosStore.state.todos">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="card-title d-flex">
                            <span>
                                <i class="fa-solid fa-trash text-danger" @click="todosStore.removeTodo" style="cursor: pointer;"></i>
                            </span>
                            <h5 class="ms-4">{{ todo }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center my-4">
            <router-link to="/">Go Back</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useTodosStore } from '../stores/todos'

const todosStore = useTodosStore();


</script>
<template>
    <div class="container mt-4">
        <h2 class="fw-bold">Counter</h2>
        <div class="card shadow-sm my-4 py-4">
            <div class="text-center">
                <span>
                    <h3 class="mt-4">Counter Value: {{ counterStore.count }}</h3>
                </span>
                <div class="d-flex justify-content-center mt-4">
                    <button class="btn btn-danger mx-2" @click="counterStore.doubleDecrement">-2</button>
                    <button class="btn btn-warning mx-2" @click="counterStore.decrement">-1</button>
                    <button class="btn btn-primary mx-2" @click="counterStore.increment">+1</button>
                    <button class="btn btn-success mx-2" @click="counterStore.doubleCount">+2</button>
                </div>
            </div>    
        </div>
        <div class="text-center my-4">
            <router-link to="/">Go Back</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const counterStore = useCounterStore();


</script>
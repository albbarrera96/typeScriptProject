<template>
  <div class="container">
    <div class="card my-4 shadow-sm">
      <div class="card-body text-center">
        <h1 class="card-title">Welcome!</h1>
        <p class="card-text">This is my TypeScript Test Project</p>
      </div>
    </div>
    <h3>Plese, select what you'd like to test</h3>
    <div class="row mt-4 g-2">
      <div class="col-lg-4 col-md-6">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <h4 class="card-title">Lucky Numbers</h4>
            <p class="card-text">Random generated Numbers</p>
            <router-link to="/luckynumbers"><button class="btn btn-primary">Click here</button></router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <h4 class="card-title">Todo List</h4>
            <p class="card-text">Vue3 + TypeScript + Pinia</p>
            <router-link to="/todolist"><button class="btn btn-primary">Click here</button></router-link>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card shadow-sm">
          <div class="card-body text-center">
            <h4 class="card-title">Counter</h4>
            <p class="card-text">Pinia's counter with some TypeScript on it</p>
            <router-link to="/counter"><button class="btn btn-primary">Click here</button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {

}
</script>

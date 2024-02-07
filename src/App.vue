<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" :to="{ name: 'Home' }"> Kossie Coder </router-link>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'Todos' }"> Todos </router-link>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" :to="{ name: 'Notice' }"> Notice </router-link>
      </li>
    </ul>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { provide } from "vue";

export default {
  provide() {
    return {
      theme: "light", // 주입할 데이터
    };
  },
};
</script>

<style></style>

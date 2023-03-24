<script setup>
import Header from "@/components/header/Header.vue";
import Main from "@/components/Main.vue"
</script>

<template>
  <div class="main-div">
  <Header/>
  <br/>
  <Main/>
  </div>
</template>

<style>
@import 'bootstrap';
@import './assets/css/bootstrap.min.css';
@import 'assets/main.css';

.main-div{
  border:1px solid black;
  box-sizing: border-box;
  width: 125vh;
  height: 100vh;
}

</style>

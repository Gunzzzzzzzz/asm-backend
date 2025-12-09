<template>
  <div class="container mt-5">
    <h1 class="mb-4">LAB 7 — Vue 3 Solutions</h1>

    <section class="mb-5">
      <h3>Bài 1: Todo App</h3>
      <TodoApp />
    </section>

    <hr />

    <section class="mb-5">
      <h3>Bài 2: Login Form</h3>
      <LoginForm />
    </section>

    <hr />

    <section class="mb-5">
      <h3>Bài 3: Register Form</h3>
      <RegisterForm />
    </section>

    <hr />

    <section class="mb-5">
      <h3>Bài 4: Comment (components)</h3>
      <Bai4 />
    </section>

  </div>
</template>

<script setup>
//import TodoApp from './components/TodoApp.vue'
//import LoginForm from './components/LoginForm.vue'
import RegisterForm from './components/RegisterForm.vue'
import Bai4 from './components/Bai4/Bai4.vue'
</script>

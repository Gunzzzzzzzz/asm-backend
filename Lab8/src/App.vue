<template>
  <div class="bg-gray-50 min-h-screen">
    <Navbar />

    <div class="max-w-5xl mx-auto p-6">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

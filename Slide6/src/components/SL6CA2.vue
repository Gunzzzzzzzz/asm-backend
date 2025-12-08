<template >
    <div class="container">
  <h1 >slide6</h1>
  <button @click="seen = !seen" v-html="seen ? 'Ẩn' : 'Hiện'"></button>

  <h3 v-if="seen">Đây là v-if</h3>
  <h4 v-show="seen">Đây là v-show</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const seen = ref(false); 
</script>
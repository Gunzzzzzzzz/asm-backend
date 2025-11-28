
<script setup>

import { ref } from 'vue';

const userInput = ref('FPL');

</script>

<template>

<!-- hai chiều (v-model) -->
  <div class="p-5">
    <input v-model="userInput" placeholder="Nhập dữ liệu vào đây" />
    <p>Giá trị bạn nhập: {{ userInput }}</p>
  </div>

</template>

<style scoped></style>
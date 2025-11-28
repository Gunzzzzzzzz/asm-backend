<script setup>

import { reactive } from 'vue';

// khởi tạo đối tượng thông tin người dùng sử dụng (reactive dùng cho nhiều giá trị)
// nhiều giá trị đơn (đa giá trị)
const userInfor = reactive({
  name: '',
  age: null,
  email: ''
})

</script>

<template>

  <!-- sử dụng v-model (2 chiều), và đa giá trị (reactive) -->
  <div class="">
    <h1>Thông tin cá nhân</h1>

    <form>

      <div class="mb-3">
        <label>Họ và tên: </label>
        <input v-model="userInfor.name" type="text" class="form-control" placeholder="Nhập họ và tên" />
      </div>

      <div class="mb-3">
        <label>Tuổi: </label>
        <input v-model="userInfor.age" type="number" class="form-control" placeholder="Nhập tuổi" />
      </div>

      <div class="mb-3">
        <label>Email: </label>
        <input v-model="userInfor.email" type="email" class="form-control" placeholder="Nhập email" />
      </div>

    </form>

    <!-- hiển thị thông tin ngay sau khi nhập dữ liệu từ bàn phím -->
    <div class="info-display mt-4 p-3 bg-dark text-white rounded">
      <h2>Thông tin đã nhập:</h2>
      <p><strong>Họ và tên: </strong> {{ userInfor.name }} </p>
      <p><strong>Tuổi: </strong> {{ userInfor.age }} </p>
      <p><strong>Email: </strong> {{ userInfor.email }} </p>
    </div>

  </div>

</template>

<style scoped></style>
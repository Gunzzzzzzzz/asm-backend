<template>
<div class="m-5 col-sm-3">
    <h2>Đăng Nhập</h2>
    <form @submit.prevent="handleLogin">
        <div class="mb-3">
            <label for="username">Tên đăng nhập: </label>
            <input type="text" class="form-control" id="username" v-model="username"
             placeholder="Nhập tên đăng nhập" />
        </div>
        <div class="mb-3">
            <label for="password">Mật khẩu: </label>
            <input type="password" class="form-control" id="password" v-model="password"
             placeholder="Nhập mật khẩu" />
        </div>
        <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </form>
</div>
</template>

<script setup>
import { ref } from 'vue';

// Khai báo biến lưu dữ liệu form đăng nhập
const username = ref('');
const password = ref('');

// Khai báo sự kiện emit
const emit = defineEmits(['loggedIn']);

// Hàm xử lý đăng nhập
function handleLogin() {
    if (username.value && password.value) {
        // phát sự kiện 'loggedIn' và truyền username lên component cha
        emit('loggedIn', username.value);
    } else {
        alert('Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu.');
    }
}
</script>
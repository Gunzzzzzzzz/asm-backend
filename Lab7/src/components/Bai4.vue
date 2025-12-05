<template>
<div>
    <LoginComponent 
        v-if="!isLoggedIn" 
        @loggedIn="handleLoginSuccess" />
    <div v-else> 
        <CommentComponent :username="loggedInUser" />
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
// Import các component đã tạo
import LoginComponent from './LoginComponent.vue';
import CommentComponent from './CommentComponent.vue';

// Quản lý trạng thái đăng nhập và tên người dùng đã đăng nhập
const isLoggedIn = ref(false);
const loggedInUser = ref('');

// Xử lý khi người dùng đăng nhập thành công (nhận username từ emit)
function handleLoginSuccess(username) {
    loggedInUser.value = username;
    isLoggedIn.value = true;
}

// Hàm xử lý Đăng xuất
function logout() {
    isLoggedIn.value = false;
    loggedInUser.value = '';
}
</script>
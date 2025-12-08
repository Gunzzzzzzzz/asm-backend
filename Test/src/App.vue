<script setup>
import { ref } from 'vue';
import Bai4 from './components/bai4.vue'; // Đảm bảo đường dẫn file là chính xác
import Postlist from './components/Postlist.vue'; // Đảm bảo đường dẫn file là chính xác

// Khai báo mảng để lưu trữ dữ liệu sinh viên/điểm
const studentPosts = ref([]);

// Hàm xử lý sự kiện 'add-student' từ component Bai4
const handleAddStudent = (newStudentData) => {
    // Thêm dữ liệu sinh viên mới vào đầu mảng
    studentPosts.value.unshift(newStudentData);
    // Có thể thêm logic kiểm tra trùng MSSV nếu cần
};
</script>

<template>
    <div class="container my-5">
        <h1 class="text-center mb-5"> Ứng dụng Quản lý Điểm</h1>

        <div class="row">
            <div class="col-lg-4 mb-4">
                <Bai4 @add-student="handleAddStudent" />
            </div>

            <div class="col-lg-8">
                <Postlist :posts="studentPosts" />
            </div>
        </div>

    </div>
</template>

<style>
/* Đảm bảo CSS framework (như Bootstrap) đã được import trong main.js hoặc index.html */
body {
    background-color: #f8f9fa;
}
</style>
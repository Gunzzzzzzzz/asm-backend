<template>
  <!-- Navbar cố định (fixed-top) dùng Bootstrap 5 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
    <div class="container-fluid">
      <!-- Logo hoặc Tên ứng dụng -->
      <a class="navbar-brand fw-bold text-warning" href="#" @click.prevent="$emit('changeView', 'home')">
        <i class="bi bi-newspaper me-2"></i> TIN TỨC FPT
      </a>

      <!-- Nút toggle cho mobile -->
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nội dung Menu và Nút chức năng -->
      <div class="collapse navbar-collapse" id="navbarNav">
        
        <!-- Các liên kết điều hướng chính (luôn hiển thị) -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$emit('changeView', 'home')">
              <i class="bi bi-house-door-fill me-1"></i> Trang Chủ
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$emit('changeView', 'article-list')">
              <i class="bi bi-list-columns-reverse me-1"></i> Danh Sách Bài Viết
            </a>
          </li>
          
          <!-- Nút Đăng Bài (Chỉ hiển thị khi đã đăng nhập) -->
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link text-success fw-semibold" href="#" @click.prevent="$emit('changeView', 'article-post')">
              <i class="bi bi-plus-square-fill me-1"></i> Đăng Bài Mới
            </a>
          </li>
        </ul>

        <!-- Khu vực nút chức năng bên phải (Login/Profile/Logout) -->
        <div class="d-flex">
          
          <!-- Trạng thái ĐÃ ĐĂNG NHẬP -->
          <template v-if="isLoggedIn">
            <button 
              class="btn btn-outline-warning me-2" 
              type="button"
              @click="$emit('changeView', 'profile')"
            >
              <i class="bi bi-person-circle me-1"></i> Hồ Sơ
            </button>
            <button 
              class="btn btn-danger" 
              type="button"
              @click="$emit('logout')"
            >
              <i class="bi bi-box-arrow-right me-1"></i> Đăng Xuất
            </button>
          </template>

          <!-- Trạng thái CHƯA ĐĂNG NHẬP -->
          <template v-else>
            <button 
              class="btn btn-success me-2" 
              type="button"
              @click="$emit('changeView', 'login')"
            >
              <i class="bi bi-box-arrow-in-right me-1"></i> Đăng Nhập
            </button>
            <button 
              class="btn btn-info" 
              type="button"
              @click="$emit('changeView', 'register')"
            >
              <i class="bi bi-person-plus-fill me-1"></i> Đăng Ký
            </button>
          </template>

        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

// Định nghĩa Props nhận từ App.vue
defineProps({
  isLoggedIn: {
    type: Boolean,
    required: true
  }
});

// Định nghĩa Emits để gửi sự kiện lên App.vue
const emits = defineEmits(['changeView', 'logout']);

/* Lưu ý: 
  - @click.prevent được sử dụng để ngăn chặn hành vi tải lại trang mặc định của thẻ <a>.
  - Sau đó, emits('changeView', 'ten_view') sẽ được gửi lên App.vue để thay đổi component hiển thị.
*/
</script>

<style scoped>
/* Import icon Bootstrap (giả lập) */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.navbar-brand {
    font-size: 1.5rem;
}

.nav-link {
    transition: color 0.2s ease;
}

.nav-link:hover {
    color: #ffc107 !important; /* Màu vàng khi hover */
}
</style>
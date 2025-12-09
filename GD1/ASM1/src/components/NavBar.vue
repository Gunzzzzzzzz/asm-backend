<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold text-warning" href="#" @click.prevent="$emit('changeView', 'home')">
        <i class="bi bi-newspaper me-2"></i> TIN TỨC FPT
      </a>

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

      <div class="collapse navbar-collapse" id="navbarNav">
        
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
          
          <li class="nav-item" v-if="isLoggedIn">
            <a class="nav-link text-success fw-semibold" href="#" @click.prevent="$emit('changeView', 'article-post')">
              <i class="bi bi-plus-square-fill me-1"></i> Đăng Bài Mới
            </a>
          </li>
        </ul>

        <div class="d-flex">
          
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
// Không cần import thủ công defineProps, defineEmits
defineProps({
  isLoggedIn: {
    type: Boolean,
    required: true
  }
});

const emits = defineEmits(['changeView', 'logout']);
</script>

<style scoped>
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
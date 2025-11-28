<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow-lg p-4">
          <h2 class="card-title text-center text-primary mb-4">Đăng Nhập Tài Khoản</h2>
          
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="loginEmail" class="form-label">Email / Tên người dùng</label>
              <input
                type="text"
                class="form-control"
                id="loginEmail"
                v-model="emailOrUsername"
                required
              />
            </div>
            <div class="mb-3">
              <label for="loginPassword" class="form-label">Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                id="loginPassword"
                v-model="password"
                required
              />
            </div>
            
            <button type="submit" class="btn btn-primary w-100 mt-3">Đăng Nhập</button>
          </form>

          <p class="text-center mt-4">
            Chưa có tài khoản? 
            <!-- Bấm vào đây sẽ chuyển view sang 'register' -->
            <button class="btn btn-link p-0 align-baseline" @click="$emit('changeView', 'register')">
              Đăng ký ngay
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emailOrUsername = ref('');
const password = ref('');

// Khai báo sự kiện sẽ gửi lên App.vue
const emits = defineEmits(['login-success', 'changeView']);

const login = () => {
  // --- LOGIC XỬ LÝ THỰC TẾ SẼ NẰM Ở ĐÂY (CALL API) ---
  
  // Kiểm tra giả lập: Nếu có dữ liệu thì đăng nhập thành công
  if (emailOrUsername.value && password.value) {
    // Giả lập đăng nhập thành công và gửi event lên App.vue
    emits('login-success', emailOrUsername.value);
    
    // Xóa dữ liệu form
    emailOrUsername.value = '';
    password.value = '';
  } else {
    alert('Vui lòng nhập đầy đủ Email/Tên người dùng và Mật khẩu.');
  }
};
</script>

<style scoped>
/* Optional styling for better visual */
.card {
  border-radius: 12px;
}
</style>
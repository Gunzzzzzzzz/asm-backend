<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="card shadow-lg p-4">
          <h2 class="card-title text-center text-success mb-4">Đăng Ký Tài Khoản Mới</h2>
          
          <form @submit.prevent="register">
            <div class="mb-3">
              <label for="registerUsername" class="form-label">Tên người dùng</label>
              <input
                type="text"
                class="form-control"
                id="registerUsername"
                v-model="username"
                required
              />
            </div>
            <div class="mb-3">
              <label for="registerEmail" class="form-label">Địa chỉ Email</label>
              <input
                type="email"
                class="form-control"
                id="registerEmail"
                v-model="email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="registerPassword" class="form-label">Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                id="registerPassword"
                v-model="password"
                required
              />
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Xác nhận Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                v-model="confirmPassword"
                required
              />
              <small v-if="password !== confirmPassword && confirmPassword" class="text-danger">Mật khẩu xác nhận không khớp.</small>
            </div>
            
            <button type="submit" class="btn btn-success w-100 mt-3" :disabled="password !== confirmPassword">Đăng Ký</button>
          </form>

          <p class="text-center mt-4">
            Đã có tài khoản? 
            <!-- Bấm vào đây sẽ chuyển view sang 'login' -->
            <button class="btn btn-link p-0 align-baseline" @click="$emit('changeView', 'login')">
              Đăng nhập
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

// Khai báo sự kiện sẽ gửi lên App.vue
const emits = defineEmits(['register-success', 'changeView']);

const register = () => {
  // --- LOGIC XỬ LÝ THỰC TẾ SẼ NẰM Ở ĐÂY (CALL API) ---

  if (password.value !== confirmPassword.value) {
    alert('Mật khẩu xác nhận không khớp.');
    return;
  }
  
  // Kiểm tra giả lập: Nếu có dữ liệu và mật khẩu khớp thì đăng ký thành công
  if (username.value && email.value && password.value) {
    // Giả lập đăng ký thành công và gửi event lên App.vue
    emits('register-success', username.value);

    // Xóa dữ liệu form
    username.value = '';
    email.value = '';
    password.value = '';
    confirmPassword.value = '';
  } else {
    alert('Vui lòng nhập đầy đủ thông tin để đăng ký.');
  }
};
</script>

<style scoped>
.card {
  border-radius: 12px;
}
</style>
<script setup>
import { ref } from 'vue';
import axios from 'axios';

const emailOrUsername = ref('');
const password = ref('');
const emits = defineEmits(['login-success', 'changeView']);

const login = async () => {
  if (emailOrUsername.value && password.value) {
    try {
      // Tìm user trong db.json có username trùng khớp
      const res = await axios.get(`http://localhost:3000/users?username=${emailOrUsername.value}`);
      
      if (res.data.length > 0) {
        const user = res.data[0];
        // Kiểm tra mật khẩu
        if (user.password === password.value) {
           // Gửi toàn bộ thông tin user lên App.vue
           emits('login-success', user);
        } else {
           alert('Sai mật khẩu!');
        }
      } else {
        alert('Tài khoản không tồn tại!');
      }
    } catch (error) {
      console.error(error);
      alert('Lỗi kết nối Server! Hãy chắc chắn bạn đã chạy lệnh: json-server --watch db.json');
    }
  } else {
    alert('Vui lòng nhập đầy đủ thông tin.');
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <div class="card shadow-lg border-0 rounded-lg">
          <div class="card-header bg-success text-white text-center py-3">
            <h3 class="mb-0 fw-bold"><i class="bi bi-box-arrow-in-right me-2"></i>Đăng Nhập</h3>
          </div>
          <div class="card-body p-4">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label fw-semibold">Tên đăng nhập</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="username" 
                  v-model="emailOrUsername" 
                  placeholder="Nhập tên đăng nhập..."
                  required
                >
              </div>
              
              <div class="mb-4">
                <label for="password" class="form-label fw-semibold">Mật khẩu</label>
                <input 
                  type="password" 
                  class="form-control" 
                  id="password" 
                  v-model="password" 
                  placeholder="Nhập mật khẩu..."
                  required
                >
              </div>

              <div class="d-grid">
                <button type="submit" class="btn btn-success py-2 fs-5 fw-bold">
                  Đăng Nhập
                </button>
              </div>
            </form>
          </div>
          <div class="card-footer text-center py-3">
            <div class="small">
              Chưa có tài khoản? 
              <a href="#" class="text-success fw-bold text-decoration-none" @click.prevent="emits('changeView', 'register')">
                Đăng ký ngay!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
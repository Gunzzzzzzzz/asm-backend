<script setup>
import { ref } from 'vue';
import axios from 'axios';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const emits = defineEmits(['register-success', 'changeView']);

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Mật khẩu xác nhận không khớp.');
    return;
  }

  if (username.value && email.value && password.value) {
    try {
      // Kiểm tra xem user đã tồn tại chưa
      const checkRes = await axios.get(`http://localhost:3000/users?username=${username.value}`);
      if (checkRes.data.length > 0) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
      }

      // Tạo user mới
      const newUser = {
        username: username.value,
        email: email.value,
        password: password.value,
        fullName: username.value, 
        bio: 'Thành viên mới'
      };

      await axios.post('http://localhost:3000/users', newUser);
      emits('register-success');
      
    } catch (error) {
      console.error(error);
      alert('Lỗi khi đăng ký!');
    }
  } else {
    alert('Vui lòng nhập đầy đủ thông tin.');
  }
};
</script>

<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-lg border-0 rounded-lg">
          <div class="card-header bg-info text-white text-center py-3">
            <h3 class="mb-0 fw-bold"><i class="bi bi-person-plus-fill me-2"></i>Đăng Ký Tài Khoản</h3>
          </div>
          <div class="card-body p-4">
            <form @submit.prevent="register">
              <div class="row mb-3">
                <div class="col-md-6">
                   <label class="form-label fw-semibold">Tên đăng nhập</label>
                   <input type="text" class="form-control" v-model="username" required>
                </div>
                <div class="col-md-6">
                   <label class="form-label fw-semibold">Email</label>
                   <input type="email" class="form-control" v-model="email" required>
                </div>
              </div>
              
              <div class="row mb-3">
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Mật khẩu</label>
                  <input type="password" class="form-control" v-model="password" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Xác nhận mật khẩu</label>
                  <input type="password" class="form-control" v-model="confirmPassword" required>
                </div>
              </div>

              <div class="d-grid mt-4">
                <button type="submit" class="btn btn-info text-white py-2 fs-5 fw-bold">
                  Đăng Ký
                </button>
              </div>
            </form>
          </div>
          <div class="card-footer text-center py-3">
            <div class="small">
              Đã có tài khoản? 
              <a href="#" class="text-info fw-bold text-decoration-none" @click.prevent="emits('changeView', 'login')">
                Đăng nhập tại đây
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
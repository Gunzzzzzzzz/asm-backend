<template>
  <div class="card p-3 col-sm-6">
    <div v-if="!isLoggedIn">
      <h4>Form Đăng nhập</h4>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label>Email:</label>
          <input type="email" v-model="email" class="form-control" placeholder="Nhập email" />
          <div v-if="emailError" class="text-danger small">{{ emailError }}</div>
        </div>
        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input type="password" v-model="password" class="form-control" placeholder="Nhập mật khẩu" />
          <div v-if="passwordError" class="text-danger small">{{ passwordError }}</div>
        </div>
        <button class="btn btn-primary" type="submit">Đăng nhập</button>
      </form>
    </div>

    <div v-else>
      <h4>Chào mừng, {{ email }}!</h4>
      <button class="btn btn-secondary" @click="logout">Đăng xuất</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isLoggedIn = ref(false)
const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const login = () => {
  emailError.value = ''
  passwordError.value = ''

  if (!email.value) emailError.value = 'Email là bắt buộc.'
  else if (!emailRegex.test(email.value)) emailError.value = 'Email không hợp lệ.'

  if (!password.value) passwordError.value = 'Mật khẩu là bắt buộc.'

  if (!emailError.value && !passwordError.value) {
    isLoggedIn.value = true
  }
}

const logout = () => {
  isLoggedIn.value = false
  email.value = ''
  password.value = ''
}
</script>

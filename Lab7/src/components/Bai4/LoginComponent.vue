<template>
  <div class="card p-3 mb-3 col-sm-6">
    <h5>Login Component</h5>
    <form @submit.prevent="handleLogin">
      <div class="mb-2">
        <label>Tên</label>
        <input v-model="name" class="form-control" />
      </div>
      <div class="mb-2">
        <label>Mật khẩu</label>
        <input v-model="password" type="password" class="form-control" />
      </div>
      <button class="btn btn-primary" type="submit">Đăng nhập</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'

const emit = defineEmits(['login'])

const name = ref('')
const password = ref('')

// Danh sách tài khoản cố định
const accounts = [
  { name: 'admin', password: '123456' },
  { name: 'thanh', password: '123' }
]

const handleLogin = () => {
  if (!name.value || !password.value) {
    alert('Nhập đầy đủ thông tin')
    return
  }

  // Tìm tài khoản
  const user = accounts.find(acc => acc.name === name.value)

  if (!user) {
    alert('Tài khoản không tồn tại')
    return
  }

  if (user.password !== password.value) {
    alert('Sai mật khẩu')
    return
  }

  // Đăng nhập thành công
  emit('login', { name: user.name })
  password.value = ''
}
</script>

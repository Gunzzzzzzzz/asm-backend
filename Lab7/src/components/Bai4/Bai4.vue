<template>
  <div>
    <LoginComponent v-if="!user" @login="onLogin" />
    <div v-else>
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5>Đã đăng nhập: {{ user.name }}</h5>
        <button class="btn btn-secondary" @click="logout">Đăng xuất</button>
      </div>
      <CommentComponent :user="user" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LoginComponent from './LoginComponent.vue'
import CommentComponent from './CommentComponent.vue'

const user = ref(null)

const onLogin = (payload) => {
  user.value = { name: payload.name }
}

const logout = () => {
  user.value = null
}
</script>

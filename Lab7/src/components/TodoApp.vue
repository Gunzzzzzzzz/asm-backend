<template>
  <div class="card p-3">
    <form @submit.prevent="addTask" class="mb-3">
      <div class="input-group">
        <input v-model="taskText" placeholder="Nhập công việc" class="form-control" />
        <button class="btn btn-primary" type="submit">Thêm công việc</button>
      </div>
    </form>

    <ul class="list-group">
      <li v-for="(t, idx) in tasks" :key="t.id" class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <input type="checkbox" v-model="t.done" />
          <span :style="{ textDecoration: t.done ? 'line-through' : 'none' }" class="ms-2">{{ t.text }}</span>
        </div>
        <div>
          <button class="btn btn-sm btn-danger" @click="removeTask(idx)">Xóa</button>
        </div>
      </li>
    </ul>

    <div class="mt-3">
      <small>Tổng: {{ tasks.length }} — Đã hoàn thành: {{ completedCount }}</small>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const taskText = ref('')
const tasks = ref([
  { id: 1, text: 'Ví dụ: Học Vue', done: false }
])
let nextId = 2

const addTask = () => {
  const text = taskText.value.trim()
  if (!text) return
  tasks.value.push({ id: nextId++, text, done: false })
  taskText.value = ''
}

const removeTask = (idx) => {
  tasks.value.splice(idx, 1)
}

const completedCount = computed(() => tasks.value.filter(t => t.done).length)
</script>

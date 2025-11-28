<template>
  <div>
    <h1>{{ greeting }}</h1>

    <button
      :title="buttonTitle"
      @click="changeGreeting"
      class="btn"
      aria-label="Change greeting"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const buttonTitle = ref('Xin chào')
const buttonText = ref('Click để thay đổi')
const greeting = ref('Nguyễn Lê Quốc Thắng')

function changeGreeting() {
  buttonTitle.value = 'Hi'
  buttonText.value = 'Đã thay đổi'
  greeting.value = 'FPT'
}
</script>

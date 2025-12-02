<template>
  <div class="container mt-5">
    <h3>Bài 2:</h3>

    <div class="mb-3">
        <label for="monthInput" class="form-label">Nhập tháng của bạn:</label>
        <input 
            type="number" 
            id="monthInput" 
            class="form-control" 
            v-model.number="month"
            min="1" 
            max="12"
            step="1"
        />
    </div>

    <div class="alert mt-3" 
        :class="{ 
            'alert-danger': season.isError, // Dùng isError để xác định màu đỏ
            'alert-info': !season.isError // Dùng !isError để xác định màu xanh/lam
        }">
        <p :style="{ color: season.isError ? 'red' : 'inherit' }">
            {{ season.message }}
        </p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const month = ref(1);

const season = computed(() => {
    const m = month.value;

 
    if (m < 1 || m > 12) {
        return {
            message: "Vui lòng nhập tháng từ 1 đến 12!",
            isError: true
        };
    }
    
    // 2. Xác định Mùa
    if (m <= 3) { // 1, 2, 3
        return { message: "Mùa Xuân", isError: false };
    } else if (m <= 6) { // 4, 5, 6
        return { message: "Mùa Hè", isError: false };
    } else if (m <= 9) { // 7, 8, 9
        return { message: "Mùa Thu", isError: false };
    } else { // 10, 11, 12
        return { message: "Mùa Đông", isError: false };
    }
});
</script>
<template>
  <div class="container mt-5">
    <h2> Bài 1</h2>
    
    <div class="mb-3">
      <label for="dtbInput" class="form-label">Nhập điểm của bạn:</label>
      <input 
        type="text" 
        id="dtbInput" 
        class="form-control" 
        v-model.number="dtb" 
        min="0" 
        max="10"
        step="0.1"
      />
    </div>

    <div class="alert alert-primary mt-3">
      <p v-if="dtb !== null && dtb !== '' && !isNaN(parseFloat(dtb))">
        Điểm Trung Bình: {{ dtb }}
        <br>
        Xếp loại: {{ loai }}
      </p>
      <p v-else>
        Vui lòng nhập điểm trung bình (từ 0 đến 10) để xem xếp loại.
      </p>
    </div>
  </div>
</template>

<script setup>

import { ref, computed } from 'vue';

const dtb = ref(null);

const loai = computed(() => {
    const score = parseFloat(dtb.value);

    if (isNaN(score) || score === null) {
        return "";
    }
    

    if (score < 5.0) {
        return "Yếu"; 
    } else if (score < 6.5) { 
        return "Trung bình"; 
    } else if (score < 8.0) { 
        return "Khá"; 
    } else if (score < 9.0) { 
        return "Giỏi"; 
    } else { 
        return "Xuất sắc"; 
    }
});
</script>
<script setup>
import { ref } from 'vue';

const MSSV = ref('');
const HoTen = ref('');
const Toan = ref('');
const Ly = ref('');
const Hoa = ref('');

// Đổi tên sự kiện thành 'add-student' để rõ nghĩa hơn
const emit = defineEmits(['add-student']);

function submitForm() {
    // Kiểm tra tính hợp lệ đơn giản
    if (!MSSV.value || !HoTen.value || !Toan.value || !Ly.value || !Hoa.value ) return;

    // Chuyển điểm thành số (number) trước khi gửi
    const toanDiem = parseFloat(Toan.value);
    const lyDiem = parseFloat(Ly.value);
    const hoaDiem = parseFloat(Hoa.value);

    // Kiểm tra xem các giá trị nhập vào có phải là số hợp lệ không
    if (isNaN(toanDiem) || isNaN(lyDiem) || isNaN(hoaDiem)) {
        alert("Điểm nhập vào phải là số!");
        return;
    }

    emit("add-student", {
        MSSV: MSSV.value,
        HoTen: HoTen.value,
        Toan: toanDiem, // Dùng giá trị số đã chuyển đổi
        Ly: lyDiem,     // Dùng giá trị số đã chuyển đổi
        Hoa: hoaDiem    // Dùng giá trị số đã chuyển đổi
    });

    // Reset form
    MSSV.value = "";
    HoTen.value = "";
    Toan.value = "";
    Ly.value = "";
    Hoa.value = "";
}
</script>

<template>
    <div class="p-4 rounded shadow-sm border bg-white">
        <h3 class="text-center mb-3">Nhập điểm Sinh viên</h3>

        <input v-model="MSSV" type="text" class="form-control mb-2" placeholder="MSSV">
        <input v-model="HoTen" type="text" class="form-control mb-2" placeholder="Họ Tên">
        <input v-model="Toan" type="number" class="form-control mb-2" placeholder="Toán" min="0" max="10" step="0.1">
        <input v-model="Ly" type="text" class="form-control mb-2" placeholder="Lý" min="0" max="10" step="0.1">
        <input v-model="Hoa" type="text" class="form-control mb-2" placeholder="Hóa" min="0" max="10" step="0.1">

        <div class="text-center">
            <button class="btn btn-primary px-4" @click="submitForm">Thêm</button>
        </div>
    </div>
</template>
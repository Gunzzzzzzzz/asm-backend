<script setup>
import { ref } from 'vue';

const MaSP = ref('');
const TenSP = ref('');
const SoLuong = ref('');
const GiaTien = ref('');

const emit = defineEmits(['add-post']);

function submitForm() {
    if (!MaSP.value || !TenSP.value || !SoLuong.value || !GiaTien.value) return;

    emit("add-post", {
        MaSP: MaSP.value,
        TenSP: TenSP.value,
        SoLuong: SoLuong.value,
        GiaTien: GiaTien.value
    });

    MaSP.value = "";
    TenSP.value = "";
    SoLuong.value = "";
    GiaTien.value = "";
}
</script>

<template>
    <h3 class="text-center mb-3">Tạo bài viết mới</h3>

    <input v-model="MaSP" type="text" class="form-control mb-2" placeholder="Mã Sản phẩm">
    <input v-model="TenSP" type="text" class="form-control mb-2" placeholder="Tên Sản phẩm">
    <input v-model="SoLuong" type="number" class="form-control mb-2" placeholder="Số lượng">
    <input v-model="GiaTien" type="numbertext" class="form-control mb-2" placeholder="Giá tiền">

    <div class="text-center">
        <button class="btn btn-primary px-4" @click="submitForm">Đăng bài</button>
    </div>
</template>

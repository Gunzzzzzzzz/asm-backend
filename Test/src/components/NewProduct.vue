<script setup>

import { ref } from 'vue';

// sử dụng defineemits đê emit sk
const emit = defineEmits(['add-post'])

const MaSP = ref('')
const TenSP = ref('')
const SL = ref('')
const Gia = ref('')

function submitPost() {
    if (title.value && content.value && author.value) {
        const newPost = {
            MaSP: MaSP.value,
            TenSP: TenSP.value,
            SL: SL.value,
            Gia: Gia.value
        }

    // gửi sự kiện add-post với dl của bài viết
    emit('add-post', newPost)

    //reset fields
    MaSP.value = ''
    TenSP.value = ''
    SL.value = ''
    Gia.value = ''

    } // end if

}// end function

</script>

<template>

    <div>
        <h2>Tạo bài viết mới</h2>
        <input v-model="MaSP" placeholder="Ma SP" />
        <input v-model="TenSP" placeholder="Tên SP" />
        <input v-model="SL" placeholder="So Luong" />
        <input v-model="Gia" placeholder="Gia" />
        <textarea v-model="content" placeholder="Nội dung bài viết"></textarea>
        <button @click="submitPost">ĐĂNG BÀI</button>
    </div>

</template>

<style>
input,
textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

</style>
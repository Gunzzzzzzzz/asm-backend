<script setup>
import { defineProps } from 'vue';

defineProps({
    posts: {
        type: Array,
        required: true,
    }
});
</script>

<template>
    <div class="mt-5">

        <h2 class="text-center mb-4">Danh sách bài viết</h2>

        <table class="table table-bordered w-75 mx-auto align-middle">
            <thead class="table-light text-center">
                <tr>
                    <th style="width: 25%;">Ma SP</th>
                    <th style="width: 25%;">Ten SP</th>
                    <th style="width: 25%;">So Luong</th>
                    <th style="width: 25%;">Gia Tien</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(post, index) in posts" :key="index">
                    <td class="text-center">{{ index + 1 }}</td>
                    <td>{{ post.TenSP }}</td>
                    <td>{{ post.SoLuong }}</td>
                    <td>{{ post.GiaTien }}</td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

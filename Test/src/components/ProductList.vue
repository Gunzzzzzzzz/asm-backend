<script setup>

import { defineProps } from 'vue';

// định nghĩa props
defineProps ({
    posts: {
        type: Array,
        required: true,
    }
});

</script>

<template>

    <div>
        <h2>Danh sách tạo bài viết mới</h2>

        <!-- <div v-for="(post, index) in posts" :key="index" :class="{ highlighted: post.title.length > 20 }"
            :style="{ backgroundColor: post.backgroundColor, color: post.textColor }" class="post">
            <h3 class="text-success">{{ post.title }}</h3>
            <h4 class="text-danger"> {{ post.author }} </h4>
            <p> {{ post.content }} </p>
        </div> -->

        <table class="table table-striped ">
            <thead class="table-dark">
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Ma SP</th>
                    <th scope="col">Ten SP</th>
                    <th scope="col">So luong</th>
                    <th scope="col">Gia</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post, index) in posts" :key="index">
                <th scope="row">{{ index+1 }}</th>
                    <td>{{ post.MaSP }}</td>
                    <td>{{ post.TenSP }}</td>
                    <td>{{ post.SL }}</td>
                    <td>{{ post.Gia }}</td>
                </tr>
            </tbody>
        </table>


    </div>

</template>

<style scoped>

.post {
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.highlighted {
    border: 2px solid lightgray;
}

</style>
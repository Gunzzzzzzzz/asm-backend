<script setup>
import { ref } from 'vue';
import CreatePost from './components/CreatePost.vue';
import PostList from './components/Postlist.vue';

// State chính của ứng dụng
const posts = ref([]);

// Hàm xử lý sự kiện: Nhận bài đăng mới từ CreatePost và thêm vào mảng
function addPost(post) {
    // Thêm post mới vào đầu mảng để hiển thị bài mới nhất trước
    posts.value.unshift(post); 
}
</script>

<template>
    <div id="app">
       
        <CreatePost @add-post="addPost" />

        <hr>

        <PostList :posts="posts" />
    </div>
</template>

<style scoped>
#app {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: sans-serif;
}
hr {
    margin: 20px 0;
    border-color: #eee;
}
</style>
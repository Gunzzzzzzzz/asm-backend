<script setup>
import { ref } from 'vue';

import bai4 from './components/bai4.vue'
import Postlist from './components/Postlist.vue';

const posts = ref([])

function addPost(post) {
    posts.value.push(post)  
}
</script>

<template>
<div id="app" class="container py-4">

    <h1 class="text-center mb-4">Ứng dụng Blog nhỏ với Vue.js</h1>

    <bai4 @add-post="addPost" />

    <Postlist :posts="posts" />
</div>
</template>

<style scoped>
#app {
    max-width: 800px;
    margin: 0 auto;
}
</style>

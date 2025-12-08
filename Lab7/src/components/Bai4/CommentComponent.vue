<template>
  <div class="col-sm-8">
    <h2>Bình luận bài viết</h2>

    <div class="card">
      <img src="/images/anh1.jpg" alt="hình ảnh" />

      <div class="card-body">
        <h5 class="card-title">8 loại rau củ giàu canxi</h5>
        <p class="card-text">
          Canxi là khoáng chất thiết yếu đối với cơ thể người.
          Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất.
          Có 8 loại rau củ giàu canxi…
        </p>
      </div>
    </div>

    <!-- Form bình luận -->
    <form @submit.prevent="submitComment" class="mt-3">
      <textarea
        id="commentText"
        cols="60"
        v-model="commentText"
        placeholder="Nhập bình luận của bạn"
      ></textarea>

      <br />
      <button type="submit" class="btn btn-success">Gửi bình luận</button>
    </form>

    <!-- Danh sách bình luận -->
    <div v-if="comments.length" class="mt-3">
      <h5>Danh sách các bình luận:</h5>

      <ul style="list-style-type: circle;">
        <li v-for="(comment, index) in comments" :key="index">
          <p>
            <strong>{{ comment.name }}:</strong>
            {{ comment.text }}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  user: Object
})

const commentText = ref("")
const comments = ref([])

function submitComment() {
  if (commentText.value.trim() !== "") {
    comments.value.push({
      name: props.user.name,
      text: commentText.value
    })
    commentText.value = ""
  }
}
</script>


<script setup>
import { ref } from 'vue';

const props = defineProps({
  // Bài viết chi tiết (đã được tìm kiếm từ App.vue)
  article: Object, 
  // Danh sách bình luận liên quan đến bài viết này
  comments: Array, 
  // Trạng thái đăng nhập
  isLoggedIn: Boolean,
  // Thông tin người dùng hiện tại để hiển thị tác giả bình luận
  currentUser: Object
});

const emit = defineEmits(['post-comment', 'change-view']);

const newCommentText = ref('');

const handlePostComment = () => {
  if (!newCommentText.value.trim()) {
    alert("Vui lòng nhập nội dung bình luận.");
    return;
  }
  
  // Tạo đối tượng bình luận mới
  const newComment = {
    articleId: props.article.id,
    author: props.currentUser.username, // Lấy tên đăng nhập hiện tại
    text: newCommentText.value.trim(),
    date: new Date().toLocaleDateString('vi-VN'),
  };
  
  emit('post-comment', newComment);
  newCommentText.value = ''; // Reset form
};
</script>

<template>
  <div v-if="article" class="max-w-4xl mx-auto p-6 lg:p-8">
    <button @click="emit('change-view', 'article-list')" class="text-indigo-600 hover:text-indigo-800 font-medium mb-4 flex items-center transition duration-300">
        <i class="fas fa-arrow-left mr-2"></i> Quay lại Danh sách
    </button>
    
    <div class="bg-white shadow-2xl rounded-xl p-8 border-t-8 border-blue-600">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4">{{ article.title }}</h1>
      <p class="text-sm text-gray-500 mb-6 border-b pb-3">
        Tác giả: <span class="font-semibold text-blue-600">{{ article.author }}</span> | Ngày đăng: {{ article.date }}
      </p>

      <img :src="article.imageUrl" :alt="article.title" class="w-full h-auto rounded-lg shadow-lg mb-8">

      <div class="prose max-w-none text-gray-700 leading-relaxed space-y-4">
        <p>{{ article.content || 'Đây là nội dung chi tiết của bài viết. (Dữ liệu giả định)' }}</p>
        <p>Phần nội dung này sẽ trình bày sâu hơn về chủ đề của bài viết. Trong môi trường thực tế, nội dung này thường dài hơn phần trích dẫn (excerpt).</p>
      </div>
    </div>
    
    <div class="mt-10">
      <h3 class="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
        <i class="far fa-comments text-blue-500 mr-2"></i> Bình Luận ({{ comments.length }})
      </h3>

      <div class="bg-gray-100 p-6 rounded-xl shadow-inner mb-6" v-if="isLoggedIn">
        <h4 class="text-xl font-semibold text-gray-700 mb-3">Đăng Bình Luận Của Bạn</h4>
        <form @submit.prevent="handlePostComment">
          <textarea 
            v-model="newCommentText" 
            rows="3" 
            placeholder="Viết bình luận của bạn tại đây..."
            class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-y"
          ></textarea>
          <button 
            type="submit" 
            class="mt-3 py-2 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Gửi Bình Luận
          </button>
        </form>
      </div>
      <div v-else class="p-4 bg-yellow-100 border border-yellow-300 rounded-lg text-yellow-800 mb-6">
          <i class="fas fa-exclamation-triangle mr-2"></i> Bạn cần <a href="#" @click.prevent="emit('change-view', 'login')" class="font-bold underline">Đăng Nhập</a> để đăng bình luận.
      </div>


      <div class="space-y-4">
        <div v-for="comment in comments" :key="comment.id" class="flex space-x-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            {{ comment.author.charAt(0).toUpperCase() }}
          </div>
          <div>
            <div class="font-semibold text-gray-800">{{ comment.author }}</div>
            <div class="text-sm text-gray-500">{{ comment.date }}</div>
            <p class="mt-1 text-gray-700">{{ comment.text }}</p>
          </div>
        </div>
        <div v-if="comments.length === 0" class="text-center py-5 text-gray-500">
            Chưa có bình luận nào. Hãy là người đầu tiên!
        </div>
      </div>
    </div>
  </div>
</template>
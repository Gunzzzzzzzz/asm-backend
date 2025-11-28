<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  // Nhận danh sách bài viết từ App.vue
  articles: Array 
});

// Định nghĩa sự kiện (event) để thông báo cho App.vue biết người dùng muốn xem bài viết nào
const emit = defineEmits(['view-article']); 

/**
 * Xử lý khi người dùng nhấp vào xem chi tiết bài viết.
 * Gửi sự kiện 'view-article' cùng với ID của bài viết được chọn.
 * @param {number} id - ID của bài viết.
 */
const viewArticle = (id) => {
    emit('view-article', id);
};
</script>

<template>
  <div class="max-w-4xl mx-auto p-6 lg:p-8">
    <h2 class="text-4xl font-extrabold text-gray-900 mb-8 border-b-4 border-indigo-500 pb-2">
      <i class="fas fa-list-alt text-indigo-500 mr-2"></i> Danh Sách Bài Viết
    </h2>

    <div v-if="articles && articles.length" class="space-y-6">
      <div v-for="article in articles" :key="article.id" class="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl hover:ring-2 hover:ring-indigo-300">
        <!-- Ảnh đại diện -->
        <div class="md:w-1/4 flex-shrink-0">
          <!-- Sử dụng thuộc tính object-cover để đảm bảo ảnh không bị méo -->
          <img :src="article.imageUrl" :alt="article.title" class="w-full h-40 object-cover md:h-full">
        </div>
        
        <!-- Nội dung -->
        <div class="p-6 md:w-3/4">
          <!-- Tiêu đề: Khi click sẽ chuyển sang trang chi tiết -->
          <a href="#" @click.prevent="viewArticle(article.id)" class="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition block cursor-pointer">
            {{ article.title }}
          </a>
          <p class="text-gray-600 text-sm mb-3 line-clamp-2">{{ article.excerpt }}</p>
          <div class="flex justify-between items-center text-xs text-gray-500">
            <span class="font-semibold text-indigo-700">Tác giả: {{ article.author }}</span>
            <span>Ngày: {{ article.date }}</span>
          </div>
          <div class="mt-3">
              <!-- Nút Đọc thêm: Khi click sẽ chuyển sang trang chi tiết -->
              <a href="#" @click.prevent="viewArticle(article.id)" class="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition">
                  Đọc thêm 
                  <i class="fas fa-arrow-right ml-1 text-xs"></i>
              </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Trường hợp không có bài viết -->
    <div v-else class="text-center p-10 bg-yellow-50 border border-yellow-200 rounded-xl shadow-md">
      <p class="text-xl text-yellow-700 font-semibold">Hiện chưa có bài viết nào được đăng.</p>
      <p class="text-yellow-600 mt-2">Vui lòng quay lại sau hoặc thử đăng nhập để tạo bài viết mới!</p>
    </div>
  </div>
</template>
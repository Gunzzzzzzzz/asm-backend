<template>
  <div class="container my-5" style="padding-top: 20px;">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-10">
        <div class="card shadow-lg p-4 border-0">
          <h2 class="card-title text-center text-primary mb-4 fw-bold">
            <i class="bi bi-pencil-square me-2"></i> Đăng Bài Viết Mới
          </h2>
          
          <form @submit.prevent="submitArticle">
            <div class="mb-3">
              <label for="articleTitle" class="form-label fw-semibold">Tiêu đề Bài viết</label>
              <input
                type="text"
                class="form-control"
                id="articleTitle"
                v-model="article.title"
                placeholder="Nhập tiêu đề bài viết (tối đa 100 ký tự)"
                maxlength="100"
                required
              />
            </div>

            <div class="mb-3">
              <label for="articleContent" class="form-label fw-semibold">Nội dung</label>
              <textarea
                class="form-control"
                id="articleContent"
                v-model="article.content"
                rows="8"
                placeholder="Viết nội dung bài viết chi tiết..."
                required
              ></textarea>
            </div>

            <div class="mb-4 p-3 border rounded bg-light">
              <label for="articleImage" class="form-label fw-semibold d-block">Ảnh Minh họa (Tùy chọn)</label>
              <input
                type="file"
                class="form-control"
                id="articleImage"
                accept="image/*"
                @change="handleImageUpload"
              />
              
              <div v-if="article.imageUrl" class="mt-3 text-center">
                <img :src="article.imageUrl" alt="Image Preview" class="img-fluid rounded shadow-sm" style="max-height: 250px; object-fit: cover; border: 1px solid #ddd;">
                <p class="mt-2 text-muted"><small>Tên tệp: <strong>{{ imageFileName }}</strong></small></p>
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary w-100 mt-3 fs-5 shadow">
              <i class="bi bi-send-fill me-2"></i> Đăng Bài Ngay
            </button>
            
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emits = defineEmits(['article-posted', 'changeView']);

const article = ref({
  title: '',
  content: '',
  imageUrl: '' 
});

const imageFileName = ref('');

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    imageFileName.value = file.name;

    const reader = new FileReader();
    reader.onload = (e) => {
        // Lưu data URL để hiển thị preview
        article.value.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);

  } else {
    imageFileName.value = '';
    article.value.imageUrl = '';
  }
};

const submitArticle = () => {
  if (!article.value.title || !article.value.content) {
    console.error('Vui lòng nhập đầy đủ Tiêu đề và Nội dung bài viết.');
    return;
  }

  // Tạo đối tượng bài viết mới
  const newArticle = {
    id: Date.now(), // ID duy nhất
    title: article.value.title,
    content: article.value.content,
    imageUrl: article.value.imageUrl || "https://placehold.co/150x100/eeeeee/333333?text=No+Image",
    author: 'Người Dùng Đã Đăng Nhập', // Giả định tác giả
    date: new Date().toLocaleDateString('vi-VN'), // Ngày đăng
    excerpt: article.value.content.substring(0, 100).trim() + (article.value.content.length > 100 ? '...' : '')
  };

  // Phát sự kiện lên App.vue
  emits('article-posted', newArticle);
  
  // Reset form và chuyển về trang danh sách bài viết
  article.value.title = '';
  article.value.content = '';
  article.value.imageUrl = '';
  imageFileName.value = '';
  const imageInput = document.getElementById('articleImage');
  if (imageInput) imageInput.value = '';

  emits('changeView', 'article-list'); // Chuyển sang trang danh sách bài viết sau khi đăng thành công

};
</script>

<style scoped>
/* QUAN TRỌNG: @import phải luôn nằm ở dòng đầu tiên */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

.card {
  border-radius: 12px;
}
.container {
  margin-top: 20px;
  min-height: calc(100vh - 80px); 
}
</style>
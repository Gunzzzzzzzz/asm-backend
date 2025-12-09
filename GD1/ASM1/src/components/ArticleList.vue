<script setup>
// Không cần import defineProps, defineEmits vì là macro tự động trong <script setup>

const props = defineProps({
  articles: Array 
});

const emit = defineEmits(['view-article']); 

const viewArticle = (id) => {
    emit('view-article', id);
};
</script>

<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold text-primary text-uppercase">
        <i class="bi bi-collection-fill me-2"></i> Danh Sách Bài Viết
      </h2>
      <p class="text-muted">Cập nhật những tin tức mới nhất, nóng hổi nhất</p>
      <hr class="w-25 mx-auto border-primary opacity-100">
    </div>

    <div v-if="articles && articles.length > 0" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      
      <div class="col" v-for="article in articles" :key="article.id">
        <div class="card h-100 shadow-sm border-0 hover-card">
          
          <div class="position-relative overflow-hidden" style="height: 200px;">
             <img 
               :src="article.imageUrl" 
               class="card-img-top w-100 h-100 object-fit-cover transition-img" 
               :alt="article.title"
               @click="viewArticle(article.id)"
               style="cursor: pointer;"
             >
             <span class="badge bg-primary position-absolute top-0 end-0 m-2 rounded-pill">Mới</span>
          </div>

          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold">
              <a href="#" @click.prevent="viewArticle(article.id)" class="text-decoration-none text-dark link-primary-hover">
                {{ article.title }}
              </a>
            </h5>
            
            <p class="card-text text-muted flex-grow-1 small">
              {{ article.excerpt }}
            </p>

            <div class="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
               <div class="d-flex align-items-center text-muted small">
                  <i class="bi bi-person-circle me-1"></i> {{ article.author }}
               </div>
               <div class="d-flex align-items-center text-muted small">
                  <i class="bi bi-calendar3 me-1"></i> {{ article.date }}
               </div>
            </div>
          </div>

          <div class="card-footer bg-white border-top-0 pb-3">
             <button @click="viewArticle(article.id)" class="btn btn-outline-primary w-100 rounded-pill">
                Đọc tiếp <i class="bi bi-arrow-right ms-1"></i>
             </button>
          </div>
        </div>
      </div>

    </div>
    
    <div v-else class="alert alert-warning text-center shadow-sm p-5" role="alert">
      <i class="bi bi-inbox fs-1 d-block mb-3"></i>
      <h4 class="alert-heading">Chưa có bài viết nào!</h4>
      <p>Hiện tại hệ thống chưa có dữ liệu bài viết. Vui lòng quay lại sau.</p>
    </div>

  </div>
</template>

<style scoped>
/* Import Icons nếu chưa có ở file khác */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

/* CSS tùy chỉnh để làm đẹp thêm */
.object-fit-cover {
  object-fit: cover; /* Giúp ảnh không bị méo */
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-card:hover {
  transform: translateY(-5px); /* Hiệu ứng nhấc card lên khi di chuột */
  box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
}

.link-primary-hover:hover {
  color: #0d6efd !important; /* Màu xanh Bootstrap khi hover tiêu đề */
}

/* Hiệu ứng zoom nhẹ cho ảnh */
.transition-img {
  transition: transform 0.5s ease;
}
.hover-card:hover .transition-img {
  transform: scale(1.05);
}

/* Giới hạn số dòng text để các card bằng nhau */
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Tối đa 2 dòng tiêu đề */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Tối đa 3 dòng mô tả */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
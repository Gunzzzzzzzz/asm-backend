<template>
  <div class="row">
    <div class="col-sm-4">
      <h2 class="text-info mb-3">Về tôi</h2>
      <div class="card card-frame mb-3">
        <div class="card-white p-3">
          <img
            src="../assets/images/avatar.png"
            alt="avatar"
            class="profile-avatar"
          />
          <h5 class="card-title">Giới thiệu bản thân</h5>
          <p class="small text-muted">
            TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập
            <br />
            <em>Châm ngôn:</em> Ta không được chọn nơi mình sinh ra, nhưng ta được
            chọn cách mình sẽ sống
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-8">
      <div class="container mt-5">
        <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>
        <div class="row">
          <div
            class="col-sm-4 mb-4"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="card h-100 shadow-sm">
              <img
                :src="item.image"
                class="card-img-top"
                alt="Hình ảnh"
                @error="handleImageError"
              />

              <div class="card-body d-flex flex-column">
                <h3 class="card-title">{{ item.title }}</h3>
                <p class="card-text flex-grow-1">{{ item.content }}</p>

                <button
                  class="btn btn-info mt-2"
                  @click="showDetail(item.title)"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // Dùng ref nếu muốn thay đổi dữ liệu

import img1 from '../assets/images/banner1.jpg'; 
import img2 from '../assets/images/banner2.jpg'; 
import img3 from '../assets/images/banner3.jpg'; 

const items = ([
    {
        title: '8 loại rau củ quả giàu canxi', 
        content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất.', 
        image: img1
    },
    {
        title: 'Các loại gia vị tốt cho sức khỏe', 
        content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn.',
        image: img2
    },
    {
        title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
        content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cũng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim.', 
        image: img3
    },
]);
// Khai báo phương thức (method) dùng với v-on [cite: 790, 961]
const showDetail = (title) => {
    alert(`Bạn đã chọn xem chi tiết bài: ${title}`);
};

// Phương thức xử lý lỗi khi ảnh không load (tùy chọn)
const handleImageError = (event) => {
    event.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found'; 
    event.target.alt = 'Ảnh không tìm thấy';
};

</script>

<style scoped>
.card-img-top {
    /* Thiết lập kích thước cố định cho hình ảnh để đồng bộ hóa card */
    width: 100%;
    height: 200px;
    object-fit: cover;
}
/* Đảm bảo các card có cùng chiều cao trong container flex */
.h-100 {
    height: 100%;
}
</style>
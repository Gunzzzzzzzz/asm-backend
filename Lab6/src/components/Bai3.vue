<template>
    <div class="container mt-4"> 
        <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
        
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
                        :alt="item.title"
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
</template>

<script setup>
import { ref } from 'vue';

// *Lưu ý: Bạn phải đảm bảo các file ảnh này tồn tại trong thư mục ../assets/images/
import img1 from '../assets/images/banner1.jpg'; 
import img2 from '../assets/images/banner2.jpg'; 
import img3 from '../assets/images/banner3.jpg'; 

const items = ref([
    {
        title: '8 loại rau củ quả giàu canxi', 
        content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...', 
        image: img1 
    },
    {
        title: 'Các loại gia vị tốt cho sức khỏe', 
        content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn...',
        image: img2
    },
    {
        title: '9 loại đậu bổ dưỡng nên dùng nhiều', 
        content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim.', 
        image: img3
    },
]);

const showDetail = (title) => {
    alert(`Bạn đã chọn xem chi tiết bài: ${title}`);
};

const handleImageError = (event) => {
    // Placeholder dự phòng cho ảnh bị lỗi
    event.target.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found'; 
    event.target.alt = 'Ảnh không tìm thấy';
};
</script>

<style scoped>

</style>
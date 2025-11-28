<template>
  <div class="container my-4">
    <div class="row">
      <!-- CỘT CHÍNH - COL-8 (Tin tức lớn, Tin tức nhỏ) -->
      <div class="col-lg-8 col-md-12">
        
        <!-- KHỐI 1: TIN TỨC LỚN (FEATURED NEWS) - GIỮ NGUYÊN -->
        <div class="main-article shadow-sm mb-4 border rounded">
          <div class="row g-0">
            <div class="col-md-5">
              <!-- Ảnh minh họa 1 -->
              <img src="/IMG/Anh1.png" class="img-fluid rounded-start h-100 object-fit-cover" alt="Tin tức chính" />
            </div>
            <div class="col-md-7 p-4">
              <h1 class="fw-bold text-dark">
                'Không có cháu Phong, cha con tôi chết rồi', Chuyện người hùng chèo ghe cứu dân giữa lũ dữ
              </h1>
              <p class="text-muted"><small>Giữa lũ dữ ở xã Hòa Thịnh, anh Phong chèo ghe cứu hàng xóm thoát chết...</small></p>
              <p>Câu nói 'Không có cháu Phong, cha con tôi chết rồi' khiến cả xóm nghẹn lại.</p>
              <button class="btn btn-sm btn-outline-primary mt-2">Đọc chi tiết</button>
            </div>
          </div>
        </div>

        <!-- KHỐI 2: TIN TỨC ĐỘT PHÁ - NẰM NGANG DUY NHẤT (ĐÃ CHỈNH SỬA) -->
        <h4 class="mt-4 mb-3 border-bottom pb-2 text-info fw-bold">TIN TỨC ĐẶC BIỆT TRONG TUẦN</h4>
        <div class="main-article shadow-lg mb-4 border border-info rounded">
            <div class="row g-0">
                <div class="col-md-4">
                    <!-- Ảnh minh họa ngang - 40% chiều rộng -->
                    <img src="/IMG/GDP.png" class="img-fluid rounded-start h-100 object-fit-cover" alt="Tin tức đột phá" />
                </div>
                <div class="col-md-8 p-4 d-flex flex-column justify-content-center">
                    <!-- Nội dung - 60% chiều rộng -->
                    <h5 class="fw-semibold text-info mb-2">KINH TẾ | PHÂN TÍCH</h5>
                    <h2 class="fw-bold text-dark">
                        Tăng trưởng GDP năm 2025: Những thách thức và cơ hội mới cho Việt Nam
                    </h2>
                    <p class="text-muted"><small>Bộ Kế hoạch và Đầu tư vừa công bố các kịch bản tăng trưởng cho năm tới, nhấn mạnh vai trò của đầu tư công và xuất khẩu. Phân tích chuyên sâu về các ngành công nghiệp mũi nhọn.</small></p>
                    <button class="btn btn-sm btn-info mt-2 align-self-start">Xem báo cáo đầy đủ</button>
                </div>
            </div>
        </div>
        <!-- KẾT THÚC KHỐI 2 ĐÃ CHỈNH SỬA -->

        <!-- KHỐI 3: BANNER Quảng cáo/Chủ đề Lớn - GIỮ NGUYÊN -->
        <div class="text-center p-3 my-4 bg-danger text-white rounded shadow-sm">
          <h3 class="m-0 fw-bold">TIẾN TỚI ĐẠI HỘI XIV CỦA ĐẢNG</h3>
        </div>

        <!-- KHỐI 4: THÊM TIN TỨC KHÁC... - GIỮ NGUYÊN -->
        <h4 class="mt-4 mb-3 border-bottom pb-2">Tin Tức Khác</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex align-items-center">
              <img src="/IMG/U23.png" class="me-3 rounded" style="width: 80px; height: 80px;" alt="Hình ảnh bài viết" />
              <div class="flex-grow-1">
                <a href="#" class="text-dark fw-semibold text-decoration-none">Tuyển U.23 Việt Nam nguy cơ bị đổi địa điểm thi đấu SEA Games</a>
                <p class="text-muted mb-0"><small>Ngày 24/11, ban tổ chức SEA Games 32 đã thông báo...</small></p>
              </div>
          </li>
          <li class="list-group-item d-flex align-items-center">
              <img src="/IMG/Xang.png" class="me-3 rounded" style="width: 80px; height: 80px;" alt="Hình ảnh bài viết" />
              <div class="flex-grow-1">
                <a href="#" class="text-dark fw-semibold text-decoration-none">Giá xăng dầu hôm nay: Đồng loạt tăng giá bán lẻ, xăng RON 95 vượt 24.000 đồng/lít</a>
                <p class="text-muted mb-0"><small>Từ 15h chiều nay, giá xăng E5 RON 92 tăng 500 đồng...</small></p>
              </div>
          </li>
        </ul>
        
      </div>

      <!-- CỘT PHỤ - COL-4 (Thông tin, Quảng cáo) - GIỮ NGUYÊN -->
      <div class="col-lg-4 col-md-12">
        
        <!-- KHỐI 5: TÁCH TAB (TIN MỚI / ĐỌC NHIỀU) - GIỮ NGUYÊN -->
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="new-tab" data-bs-toggle="tab" data-bs-target="#new-tab-pane" type="button" role="tab" aria-controls="new-tab-pane" aria-selected="true">Tin mới</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="read-tab" data-bs-toggle="tab" data-bs-target="#read-tab-pane" type="button" role="tab" aria-controls="read-tab-pane" aria-selected="false">Đọc nhiều</button>
          </li>
        </ul>
        
        <div class="tab-content border border-top-0 p-3 rounded-bottom shadow-sm" id="myTabContent">
          <!-- Nội dung tab Tin mới -->
          <div class="tab-pane fade show active" id="new-tab-pane" role="tabpanel" aria-labelledby="new-tab" tabindex="0">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Tân Chủ tịch TP.Huế chỉ đạo mới về tăng trưởng và cơ chế đặc thù</li>
              <li class="list-group-item">Ngày mới với tin sức khỏe: Lưu ý gì khi uống nước để tốt cho thận?</li>
              <li class="list-group-item">Đi bộ buổi sáng: Muốn thêm lợi ích, đừng quên trách trả quần thuộc này!</li>
              <li class="list-group-item">Uống sữa tươi sau buổi tập, lợi ích cho cơ bắp nhiều hơn bạn nghĩ</li>
              <li class="list-group-item">Uống ít nước khi tập gym: Nguy cơ người tập không ngờ tới</li>
              <li class="list-group-item">U.23 Việt Nam nguy cơ bị đổi địa điểm thi đấu SEA Games</li>
            </ul>
            <button class="btn btn-sm btn-link mt-2 p-0">Xem thêm »</button>
          </div>
          <!-- Nội dung tab Đọc nhiều -->
          <div class="tab-pane fade" id="read-tab-pane" role="tabpanel" aria-labelledby="read-tab" tabindex="0">
            <p class="text-muted">Tính năng đang được phát triển...</p>
          </div>
        </div>
        
        <!-- KHỐI 6: QUẢNG CÁO - GIỮ NGUYÊN -->
        <div class="advertisement mt-4 text-center">
            <img src="/IMG/Quangcao.png" class="img-fluid rounded shadow-sm" alt="Quảng cáo" />
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
// Không cần logic Vue đặc biệt cho component hiển thị tĩnh này
</script>

<style scoped>
.main-article {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  overflow: hidden; /* Cần thiết để rounded-start hoạt động đúng */
}
.main-article:hover {
  transform: translateY(-2px);
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
}
.list-group-item {
    border-left: none;
    border-right: none;
    padding: 0.75rem 0.5rem;
}
</style>

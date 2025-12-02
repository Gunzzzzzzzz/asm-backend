<template>
    <div class="dark-wrapper">
      <div class="app-container container mt-5 p-4 rounded">
        <div class="row">
  
          <div class="col-md-4 form-section p-3">
            <h3 class="title-left">Thêm học sinh</h3>
            
            <form @submit.prevent="submitForm">
              
              <div class="mb-3">
                <label for="name" class="form-label">Họ tên:</label>
                <input 
                  type="text" 
                  class="form-control" 
                  v-model="student.name" 
                  id="name" 
                  required 
                />
              </div>
              
              <div class="mb-3">
                <label for="score" class="form-label">Điểm:</label>
                <input 
                  type="number" 
                  class="form-control" 
                  v-model.number="student.score" 
                  id="score" 
                  min="0" 
                  max="10" 
                  required 
                />
              </div>
              
              <div class="mb-4">
                <label for="dob" class="form-label">Ngày sinh:</label>
                <input 
                  type="date" 
                  class="form-control" 
                  v-model="student.dob" 
                  id="dob" 
                  required 
                />
              </div>
              
              <button type="submit" :class="['btn', isEditing ? 'btn-warning' : 'btn-success']">
                {{ isEditing ? 'Cập nhật' : 'Thêm' }}
              </button>
            </form>
          </div>
  
          <div class="col-md-8 list-section p-3">
            <h3 class="title-right">Danh sách học sinh</h3>
            
            <table class="table table-hover">
              <thead>
                <tr>
                  <th class="col-name">Họ và tên</th>
                  <th class="col-score">Điểm</th>
                  <th class="col-dob">Ngày sinh</th>
                  <th class="col-action" colspan="2"></th> </tr>
              </thead>
              <tbody>
                <tr v-for="(stu, index) in students" :key="index">
                  <td>{{ stu.name }}</td>
                  <td class="text-center">{{ stu.score }}</td>
                  <td>{{ stu.dob }}</td>
                  <td class="action-cell">
                    <button class="btn btn-sm btn-warning" @click="editStudent(index)">Sửa</button>
                  </td>
                  <td class="action-cell">
                    <button class="btn btn-sm btn-danger" @click="deleteStudent(index)">Xóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  
        </div>
      </div>
    </div>
    </template>
<script setup>
import { ref } from 'vue'

// --- Dữ liệu Quản lý Trạng thái ---

// Danh sách học sinh (Mảng chứa các đối tượng học sinh)
const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
])

// Đối tượng học sinh hiện tại (Dùng cho Form để thêm/sửa)
const student = ref({
  name: '',
  score: null, // Dùng null cho điểm số khi form trống
  dob: ''
})

// Biến trạng thái để xác định Form đang ở chế độ Sửa (true) hay Thêm (false)
let isEditing = ref(false)
// Lưu trữ index của học sinh đang được sửa
let editingIndex = ref(null)

// --- Các Hàm Xử lý ---

// 1. Hàm đặt lại Form về trạng thái ban đầu
function resetForm() {
  student.value = {
    name: '',
    score: null,
    dob: ''
  }
}

// 2. Hàm Thêm/Cập nhật học sinh (Gắn vào sự kiện @submit.prevent của <form>)
function submitForm() {
  if (isEditing.value) {
    // Chế độ Cập nhật:
    // Cập nhật thông tin học sinh bằng cách tạo bản sao mới của đối tượng student.value
    students.value[editingIndex.value] = { ...student.value }
    isEditing.value = false
    editingIndex.value = null
  } else {
    // Chế độ Thêm mới:
    // Thêm học sinh mới vào danh sách
    students.value.push({ ...student.value }) // Tạo bản sao để tránh tham chiếu
  }
  // Sau khi thêm/cập nhật, reset form
  resetForm()
}

// 3. Hàm Sửa học sinh (Gắn vào nút Sửa trong danh sách)
function editStudent(index) {
  // Lấy dữ liệu của học sinh được chọn và đưa lên Form
  student.value = { ...students.value[index] } // Dùng spread (...) để tạo bản sao, tránh sửa trực tiếp vào students
  isEditing.value = true
  editingIndex.value = index
}

// 4. Hàm Xóa học sinh (Gắn vào nút Xóa trong danh sách)
function deleteStudent(index) {
  // Sử dụng splice để xóa 1 phần tử tại vị trí index
  students.value.splice(index, 1)
}
</script>


/* src/components/Bai4.vue */
<style scoped>
/* Bỏ .dark-wrapper vì ta đã đặt nền đen trong App.vue */

/* 2. Container chính: Màu trắng/sáng của nội dung */
.app-container {
    max-width: 1000px; /* Giữ giới hạn chiều rộng nội dung chính */
    background-color: #ffffff;
    box-shadow: none; 
    margin-left: auto; /* Căn giữa */
    margin-right: auto; /* Căn giữa */
}

/* 3. Tiêu đề (Headers) - Đã căn chỉnh để trông giống ảnh mẫu */
h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: #000;
}

/* Tùy chỉnh tiêu đề Form */
.title-left {
    padding-left: 12px;
}

/* Tùy chỉnh tiêu đề Danh sách */
.title-right {
    padding-left: 15px;
}

/* 4. Table - Điều chỉnh cho giống hình ảnh */
.table {
    margin-top: 15px; 
}

.table thead th {
    font-weight: bold;
    color: #000;
    border-bottom: 2px solid #dee2e6;
    padding-bottom: 8px;
    font-size: 1rem;
}

.table tbody td {
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: none;
}

/* Điều chỉnh độ rộng cột */
.col-name { width: 35%; }
.col-score { width: 10%; text-align: center; }
.col-dob { width: 25%; }
.col-action { width: 15%; } /* Độ rộng cho 2 cột hành động cộng lại */

/* Bỏ padding thừa ở cột hành động */
.table thead th:nth-child(4) { /* Cột chứa colspan=2 */
    padding-left: 0;
    padding-right: 0;
}

.action-cell {
    padding: 0 5px !important;
    width: 60px; /* Chia đều 120px cho 2 cột hành động */
}

/* Nút Thêm/Cập nhật chính */
.form-section button[type="submit"] {
    width: 80px; 
}
</style>
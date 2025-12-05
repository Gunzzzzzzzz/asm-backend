<template>
  <div class="container mt-5">

    <h2 class="text-center mb-4">Bài 4 –Nhập sản phẩm</h2>

    <!-- FORM -->
    <form @submit.prevent="handleSubmit" class="card p-3 mb-4">
      
      <div class="mb-3">
        <label>Mã SP:</label>
        <input v-model="form.code" type="text" class="form-control" required>
      </div>

      <div class="mb-3">
        <label>Tên:</label>
        <input v-model="form.name" type="text" class="form-control" required>
      </div>

      <div class="mb-3">
        <label>Giá:</label>
        <input v-model.number="form.price" type="number" class="form-control" required>
      </div>

      <div class="mb-3">
        <label>Giảm giá (%):</label>
        <input v-model.number="form.discount" type="number" class="" required>
      </div>

      <button class="btn btn-primary">
        {{ editingIndex === -1 ? 'Thêm' : 'Cập nhật' }}
      </button>

    </form>

    <!-- TABLE -->
     <h3 class="mb-4 text-danger">Danh sách SP</h3>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>STT</th>
          <th>Mã SP</th>
          <th>Tên SP</th>
          <th>Giá</th>
          <th>Giá sau giảm</th>
          <th>Hành động</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(p, index) in products" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ p.code }}</td>
          <td>{{ p.name }}</td>
          <td>{{ p.price.toLocaleString() }} đ</td>
          <td>{{ calcDiscount(p).toLocaleString() }} đ</td>
          <td>
            <button class="btn btn-warning btn-sm me-2" @click="editProduct(index)">Sửa</button>
            <button class="btn btn-danger btn-sm" @click="deleteProduct(index)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([])

const form = ref({
  code: '',
  name: '',
  price: '',
  discount: ''
})

const editingIndex = ref(-1)


const calcDiscount = (p) => {
  return p.price - (p.price * p.discount / 100)
}


const handleSubmit = () => {
  if (editingIndex.value === -1) {
   
    products.value.push({ ...form.value })
  } else {
 
    products.value[editingIndex.value] = { ...form.value }
    editingIndex.value = -1
  }

 
  form.value = { code: '', name: '', price: '', discount: '' }
}


const editProduct = (index) => {
  editingIndex.value = index
  form.value = { ...products.value[index] }
}


const deleteProduct = (index) => {
  products.value.splice(index, 1)
}
</script>
<template>
  <div class="container mt-4">
    <div class="row border p-4">

      <!-- FORM ĐĂNG KÝ -->
      <div class="col-md-6">
        <h4><strong>Form Đăng Ký</strong></h4>

        <div class="mt-3">
          <label>Họ tên:</label>
          <input type="text" class="form-control" v-model="name">
        </div>

        <div class="mt-3">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>

        <div class="mt-3">
          <label>Mật khẩu:</label>
          <input type="password" class="form-control" v-model="password">
        </div>

        <div class="mt-3">
          <label>Ngày sinh:</label>
          <input type="date" class="form-control" v-model="birthday">
        </div>

        <div class="mt-3">
          <label>Giới tính:</label><br>
          <input type="radio" value="Nam" v-model="gender"> Nam
          <input type="radio" value="Nữ" v-model="gender" class="ms-2"> Nữ
          <input type="radio" value="Khác" v-model="gender" class="ms-2"> Khác
        </div>

        <div class="mt-3">
          <label>Ngôn ngữ:</label><br>

          <input type="checkbox" value="Tiếng Việt" v-model="languages"> Tiếng Việt
          <input type="checkbox" value="Tiếng Anh" v-model="languages" class="ms-2"> Tiếng Anh
          <input type="checkbox" value="Tiếng Nhật" v-model="languages" class="ms-2"> Tiếng Nhật
        </div>

        <button class="btn btn-primary mt-3" @click="submitForm">
          Đăng ký
        </button>
      </div>


      <!-- THÔNG TIN ĐÃ ĐĂNG KÝ -->
      <div class="col-md-6">
        <h4><strong>Thông tin đã đăng ký:</strong></h4>

        <div v-if="submitted" class="mt-3">
          <p><strong>Họ tên:</strong> {{ name }}</p>
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>Ngày sinh:</strong> {{ birthday }}</p>
          <p><strong>Giới tính:</strong> {{ gender }}</p>
          <p><strong>Ngôn ngữ:</strong> {{ languages.join(', ') }}</p>
        </div>

        <div v-else class="text-secondary mt-3">
          Chưa có thông tin đăng ký...
        </div>

        <!-- HIỂN THỊ DANH SÁCH USER -->
        <div class="mt-4">
          <h5>Danh sách tài khoản đã đăng kí:</h5>
          <ul>
            <li v-for="(u, index) in users" :key="index">
              {{ u.username }} - {{ u.password }}
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      birthday: "",
      gender: "",
      languages: [],
      submitted: false,

      // 👉 MẢNG LƯU USER
      users: []
    };
  },
  methods: {
    submitForm() {
      if (!this.name || !this.email || !this.password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
      }

      // 👉 LƯU USER VÀO MẢNG users
      this.users.push({
        username: this.email,
        password: this.password
      });

      this.submitted = true;
    }
  }
};
</script>

<style>
.container {
  max-width: 900px;
}
</style>

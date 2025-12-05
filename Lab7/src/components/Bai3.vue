<template>
<div class="container p-5">
    <div class="row">
        <div class="col-sm-6">
            <h3 class="mb-4">Form Đăng Ký</h3>
            <form @submit.prevent="handleRegister">
                
                <div class="mb-3">
                    <label class="form-label">Họ tên:</label>
                    <input type="text" class="form-control" v-model="fullname" placeholder="Nhập họ tên">
                </div>

                <div class="mb-3">
                    <label class="form-label">Email:</label>
                    <input type="email" class="form-control" v-model="email" placeholder="Nhập email">
                </div>

                <div class="mb-3">
                    <label class="form-label">Mật khẩu:</label>
                    <input type="password" class="form-control" v-model="password" placeholder="Nhập mật khẩu">
                </div>

                <div class="mb-3">
                    <label class="form-label">Ngày sinh:</label>
                    <input type="date" class="form-control" v-model="dob">
                </div>
                
                <div class="mb-3">
                    <label class="form-label d-block">Giới tính:</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="genderNam" value="Nam" v-model="gender">
                        <label class="form-check-label" for="genderNam">Nam</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="genderNu" value="Nữ" v-model="gender">
                        <label class="form-check-label" for="genderNu">Nữ</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="genderKhac" value="Khác" v-model="gender">
                        <label class="form-check-label" for="genderKhac">Khác</label>
                    </div>
                </div>

                <div class="mb-4">
                    <label class="form-label d-block">Ngôn ngữ:</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="langTV" value="Tiếng Việt" v-model="languages">
                        <label class="form-check-label" for="langTV">Tiếng Việt</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="langTA" value="Tiếng Anh" v-model="languages">
                        <label class="form-check-label" for="langTA">Tiếng Anh</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="langTN" value="Tiếng Nhật" v-model="languages">
                        <label class="form-check-label" for="langTN">Tiếng Nhật</label>
                    </div>
                </div>
                
                <button type="submit" class="btn btn-primary">Đăng ký</button>
            </form>
        </div>

        <div class="col-sm-6" v-if="isRegistered">
            <h3 class="mb-4">Thông tin đã đăng ký:</h3>
            <div class="card p-3 bg-light">
                <p><strong>Họ tên:</strong> {{ registeredInfo.fullname }}</p>
                <p><strong>Email:</strong> {{ registeredInfo.email }}</p>
                <p><strong>Ngày sinh:</strong> {{ registeredInfo.dob }}</p>
                <p><strong>Giới tính:</strong> {{ registeredInfo.gender }}</p>
                <p><strong>Ngôn ngữ:</strong> {{ registeredInfo.languages }}</p>
            </div>
        </div>
    </div>
</div>
</template>



<script setup>
import { ref } from 'vue';

// Dữ liệu Form
const fullname = ref('');
const email = ref('');
const password = ref(''); // Không hiển thị sau khi đăng ký
const dob = ref('');
const gender = ref(''); // Radio button
const languages = ref([]); // Checkboxes

// Trạng thái đã đăng ký
const isRegistered = ref(false);

// Thông tin hiển thị sau khi đăng ký (Dùng để hiển thị lên view)
const registeredInfo = ref({});

// Hàm xử lý khi nhấn nút "Đăng ký"
const handleRegister = () => {
    // Ứng dụng bài học về phần Binding đơn giản [cite: 158]
    if (fullname.value && email.value && dob.value && gender.value && languages.value.length > 0) {
        // Lưu thông tin (trừ Mật khẩu)
        registeredInfo.value = {
            fullname: fullname.value,
            email: email.value,
            dob: dob.value,
            gender: gender.value,
            languages: languages.value.join(', ') // Chuyển mảng ngôn ngữ thành chuỗi
        };
        isRegistered.value = true;
    } else {
        alert('Vui lòng điền đầy đủ và chính xác thông tin.');
    }
};

</script>
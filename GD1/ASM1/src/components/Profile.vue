<template>
  <div class="container my-5" style="padding-top: 20px;">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-lg p-4 border-0">
          <h2 class="card-title text-center text-success mb-4 fw-bold">
            <i class="bi bi-person-circle me-2"></i> Hồ Sơ Người Dùng
          </h2>

          <h3 class="h5 text-primary mb-3">Thông tin cơ bản</h3>
          <form @submit.prevent="handleUpdateGeneral">
            <div class="mb-3">
              <label for="username" class="form-label fw-semibold">Tên đăng nhập</label>
              <input
                type="text"
                class="form-control bg-light"
                :value="localProfile.username"
                disabled
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label fw-semibold">Email (GMAIL)</label>
              <input
                type="email"
                class="form-control"
                v-model="localProfile.email"
                required
              />
            </div>

            <div class="mb-3">
              <label for="fullName" class="form-label fw-semibold">Tên đầy đủ</label>
              <input
                type="text"
                class="form-control"
                v-model="localProfile.fullName"
              />
            </div>

            <div class="mb-4">
              <label for="bio" class="form-label fw-semibold">Giới thiệu bản thân</label>
              <textarea
                class="form-control"
                v-model="localProfile.bio"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-success w-100 mt-2 fs-5 shadow">
              <i class="bi bi-floppy-fill me-2"></i> Lưu Thông Tin Chung
            </button>
          </form>

          <hr class="my-5 border-success"/>

          <h3 class="h5 text-danger mb-3">Thay đổi Mật khẩu</h3>
          <p class="text-muted small">
            <i class="bi bi-shield-lock-fill me-1"></i> Để bảo mật, mật khẩu hiện tại không được hiển thị. Chỉ điền vào các trường dưới đây nếu bạn muốn thay đổi mật khẩu.
          </p>
          <form @submit.prevent="handleUpdatePassword">
            <div class="mb-3">
              <label for="newPassword" class="form-label fw-semibold">Mật khẩu mới</label>
              <input
                type="password"
                class="form-control"
                v-model="passwordData.newPassword"
                placeholder="Nhập mật khẩu mới (ít nhất 6 ký tự)"
                minlength="6"
              />
            </div>
            
            <div class="mb-4">
              <label for="confirmPassword" class="form-label fw-semibold">Xác nhận Mật khẩu mới</label>
              <input
                type="password"
                class="form-control"
                v-model="passwordData.confirmPassword"
                placeholder="Nhập lại mật khẩu mới"
                minlength="6"
              />
            </div>

            <button type="submit" class="btn btn-danger w-100 mt-2 fs-5 shadow">
              <i class="bi bi-key-fill me-2"></i> Đổi Mật Khẩu
            </button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  // userProfile hiện tại từ App.vue
  userProfile: {
    type: Object,
    required: true
  }
});

const emits = defineEmits(['update-profile', 'update-password']);

// Tạo bản sao cục bộ của props để chỉnh sửa thông tin chung
const localProfile = ref({ ...props.userProfile });

// State riêng cho việc đổi mật khẩu (không nên lưu vào localProfile)
const passwordData = ref({
  newPassword: '',
  confirmPassword: ''
});

// Đồng bộ hóa localProfile khi props thay đổi
watch(() => props.userProfile, (newProfile) => {
  localProfile.value = { ...newProfile };
}, { deep: true });


// Xử lý cập nhật thông tin chung (Email, Tên, Bio)
const handleUpdateGeneral = () => {
  if (!localProfile.value.email) {
    console.error("Email không được để trống!");
    return;
  }
  
  // Phát sự kiện lên App.vue để cập nhật thông tin chung
  emits('update-profile', localProfile.value);

  // Sau khi lưu, có thể hiển thị thông báo thành công
  alert(`Cập nhật thông tin chung thành công cho ${localProfile.value.username}!`);
};

// Xử lý cập nhật mật khẩu
const handleUpdatePassword = () => {
  const newPass = passwordData.value.newPassword;
  const confirmPass = passwordData.value.confirmPassword;

  if (!newPass) {
    alert("Vui lòng nhập Mật khẩu mới!");
    return;
  }
  
  if (newPass.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }

  if (newPass !== confirmPass) {
    alert("Mật khẩu mới và xác nhận mật khẩu không khớp!");
    return;
  }

  // Phát sự kiện lên App.vue để xử lý đổi mật khẩu
  emits('update-password', newPass);

  // Reset form mật khẩu sau khi gửi thành công
  passwordData.value.newPassword = '';
  passwordData.value.confirmPassword = '';
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
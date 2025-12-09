<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios'; // Đừng quên: npm install axios

// --- I. IMPORTS CÁC COMPONENTS ---
import NavBar from './components/NavBar.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import HomePage from './components/HomePage.vue';
import ArticleList from './components/ArticleList.vue'; 
import ArticlePost from './components/ArticlePost.vue'; 
import ArticleDetail from './components/ArticleDetail.vue'; 

// --- II. TRẠNG THÁI CHUNG ---
const isLoggedIn = ref(false); 
const currentView = ref('home'); 
const selectedArticleId = ref(null); 
const allArticles = ref([]); // Mảng rỗng, sẽ fetch từ API
const allComments = ref([]); // Mảng rỗng, sẽ fetch từ API

const userProfile = ref({
    username: 'guest',
    email: '',
    fullName: 'Khách',
    bio: ''
});

// --- FETCH DATA TỪ DB.JSON ---
const fetchArticles = async () => {
  try {
    const res = await axios.get('http://localhost:3000/articles');
    allArticles.value = res.data.reverse(); // Đảo ngược để bài mới nhất lên đầu
  } catch (error) {
    console.error("Lỗi lấy bài viết:", error);
  }
};

const fetchComments = async () => {
  try {
    const res = await axios.get('http://localhost:3000/comments');
    allComments.value = res.data;
  } catch (error) {
    console.error("Lỗi lấy bình luận:", error);
  }
};

// Gọi API khi App khởi chạy
onMounted(() => {
    fetchArticles();
    fetchComments();
});

// --- III. LOGIC TÍNH TOÁN ---
const currentArticle = computed(() => {
    // Lưu ý: JSON Server trả về ID có thể là string hoặc number, nên dùng == thay vì ===
    return allArticles.value.find(a => a.id == selectedArticleId.value) || null;
});

const currentComments = computed(() => {
    // Lọc bình luận theo articleId từ danh sách tổng
    return allComments.value
        .filter(c => c.articleId == selectedArticleId.value)
        .reverse(); // Bình luận mới nhất lên đầu
});

const currentComponent = computed(() => {
    switch (currentView.value) {
        case 'login': return Login;
        case 'register': return Register;
        case 'profile': return isLoggedIn.value ? Profile : Login; 
        case 'article-list': return ArticleList;
        case 'article-detail': return ArticleDetail;
        case 'article-post': return isLoggedIn.value ? ArticlePost : Login; 
        case 'home': default: return HomePage;
    }
});

// --- IV. HÀM XỬ LÝ (ACTIONS) ---

// Xử lý đăng nhập thành công (Nhận user object từ Login.vue)
const handleLoginSuccess = (user) => {
    isLoggedIn.value = true;
    userProfile.value = user; // Gán thông tin user từ DB
    currentView.value = 'article-list'; 
    console.log(`Chào mừng ${user.username} đã quay trở lại!`); 
};

// Xử lý đăng ký thành công
const handleRegisterSuccess = () => {
    currentView.value = 'login';
    alert("Đăng ký thành công! Vui lòng đăng nhập.");
};

const handleLogout = () => {
    isLoggedIn.value = false;
    currentView.value = 'home';
    userProfile.value = { username: 'guest', fullName: 'Khách' };
};

// Cập nhật thông tin cá nhân lên Server
const handleUpdateProfile = async (updatedData) => {
    try {
        // updatedData cần chứa id của user để biết update ai
        await axios.patch(`http://localhost:3000/users/${userProfile.value.id}`, updatedData);
        userProfile.value = { ...userProfile.value, ...updatedData };
        alert('Cập nhật hồ sơ thành công!');
    } catch (error) {
        console.error("Lỗi cập nhật hồ sơ:", error);
    }
};

// Đăng bài viết mới lên Server
const handleArticlePosted = async (newArticle) => {
    try {
        await axios.post('http://localhost:3000/articles', newArticle);
        await fetchArticles(); // Load lại danh sách bài viết
        currentView.value = 'article-list'; 
    } catch (error) {
        console.error("Lỗi đăng bài:", error);
    }
};

// Đăng bình luận mới lên Server
const handlePostComment = async (newComment) => {
    try {
        await axios.post('http://localhost:3000/comments', newComment);
        // Thay vì fetch lại toàn bộ, ta có thể push vào mảng local để nhanh hơn
        allComments.value.push(newComment); 
        // Hoặc an toàn nhất là fetch lại:
        // await fetchComments();
    } catch (error) {
        console.error("Lỗi đăng bình luận:", error);
    }
};

const handleViewArticle = (articleId) => {
    selectedArticleId.value = articleId;
    currentView.value = 'article-detail';
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 pb-10">
    <NavBar 
      :isLoggedIn="isLoggedIn" 
      @change-view="currentView = $event"
      @logout="handleLogout"
    />
    <main class="mt-5 pt-4">
      <component 
        :is="currentComponent"
        @login-success="handleLoginSuccess"
        @register-success="handleRegisterSuccess"
        @change-view="currentView = $event"
        :articles="allArticles" 
        @article-posted="handleArticlePosted"
        :user-profile="userProfile"
        @update-profile="handleUpdateProfile"
        @view-article="handleViewArticle"        
        :article="currentArticle"
        :comments="currentComments"
        :is-logged-in="isLoggedIn"
        :current-user="userProfile"
        @post-comment="handlePostComment"
      />
    </main>
  </div>
</template>

<style>
/* CSS giữ nguyên như cũ */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
body { font-family: 'Inter', sans-serif; }
</style>
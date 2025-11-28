<script setup>
import { ref, computed } from 'vue';

// --- I. IMPORTS CÁC COMPONENTS ---
import NavBar from './components/NavBar.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Profile from './components/Profile.vue';
import HomePage from './components/HomePage.vue';
import ArticleList from './components/ArticleList.vue'; 
import ArticlePost from './components/ArticlePost.vue'; 
import ArticleDetail from './components/ArticleDetail.vue'; 

// --- II. TRẠNG THÁI CHUNG CỦA ỨNG DỤNG ---
const isLoggedIn = ref(false); 
const currentView = ref('home'); 
const selectedArticleId = ref(null); 

// --- State Hồ Sơ Người Dùng (Dùng cho Profile và Tác giả Bình luận) ---
const userProfile = ref({
    username: 'guest',
    email: 'guest@fpt.edu.vn',
    fullName: 'Khách',
    bio: 'Thông tin cơ bản.'
});


// --- State Lưu Trữ Bài Viết (Dữ liệu giả lập) ---
const initialArticles = [
  { id: 1, title: "Giá xăng dầu hôm nay: Đồng loạt tăng giá bán lẻ, xăng RON 95 vượt 24.000 đồng/lít", author: "Minh Anh", date: "25/11/2025", excerpt: "Từ 15h chiều nay, giá xăng E5 RON 92 tăng 500 đồng và giá xăng RON 95 tăng 600 đồng...", imageUrl: "https://placehold.co/400x250/333333/white?text=Tin+Moi", content: "Nội dung chi tiết 1: Kể từ 15h chiều nay, giá xăng E5 RON 92 tăng 500 đồng/lít, xăng RON 95 tăng 600 đồng/lít. Đây là lần điều chỉnh tăng thứ hai liên tiếp trong tháng, do ảnh hưởng từ giá dầu thô thế giới. Việc tăng giá bán lẻ sẽ có tác động đáng kể đến chi phí vận tải và giá hàng hóa tiêu dùng trong nước." },
  { id: 2, title: "Lợi ích không ngờ của việc uống đủ nước khi tập gym", author: "Hà Phương", date: "24/11/2025", excerpt: "Việc duy trì đủ nước không chỉ giúp tăng hiệu suất mà còn ngăn ngừa nguy cơ chấn thương không đáng có...", imageUrl: "https://placehold.co/400x250/003366/white?text=Suc+Khoe", content: "Nội dung chi tiết 2: Uống đủ nước không chỉ là cách để giải khát mà còn là yếu tố then chốt giúp cơ bắp hoạt động hiệu quả, duy trì thân nhiệt và vận chuyển chất dinh dưỡng. Thiếu nước có thể dẫn đến mệt mỏi sớm, chuột rút và giảm sức bền đáng kể trong quá trình tập luyện. Hãy đảm bảo bạn uống nước trước, trong và sau buổi tập." },
  { id: 3, title: "Kháng kháng sinh ngày càng phức tạp: Giải pháp từ các nhà khoa học", author: "Khoa học", date: "23/11/2025", excerpt: "Chứng vi khuẩn phế cầu gây bệnh hô hấp đang giảm đáng kể mức độ nhạy cảm với các kháng sinh...", imageUrl: "https://placehold.co/400x250/990000/white?text=Y+Te", content: "Nội dung chi tiết 3: Tình trạng kháng kháng sinh đang là mối đe dọa toàn cầu. Các nhà khoa học đang nghiên cứu các loại thuốc kháng sinh mới, cũng như phát triển liệu pháp phage và liệu pháp miễn dịch để đối phó với các siêu vi khuẩn đã kháng thuốc. Giáo dục cộng đồng về việc sử dụng kháng sinh đúng cách là cực kỳ quan trọng." },
];
const allArticles = ref(initialArticles);

// --- State Lưu Trữ Bình Luận (Key là Article ID) ---
// Giả lập dữ liệu bình luận ban đầu
const allComments = ref({
    1: [
        { id: 101, author: "Admin", text: "Bài viết này rất kịp thời! Cảm ơn tác giả.", date: "25/11/2025" },
        { id: 102, author: "UserDemo", text: "Giá xăng tăng cao quá, ảnh hưởng nặng nề đến sinh hoạt.", date: "25/11/2025" },
    ],
    2: [
        { id: 201, author: "FitnessGuru", text: "Uống đủ nước là chìa khóa để tập gym hiệu quả hơn.", date: "24/11/2025" },
    ],
    3: [],
});

// --- III. LOGIC TÍNH TOÁN (Computed Properties) ---

// Bài viết đang được hiển thị chi tiết (dựa trên selectedArticleId)
const currentArticle = computed(() => {
    return allArticles.value.find(a => a.id === selectedArticleId.value) || null;
});

// Bình luận cho bài viết đang hiển thị chi tiết
const currentComments = computed(() => {
    return allComments.value[selectedArticleId.value] || [];
});

// Component hiện tại cần hiển thị (dựa trên currentView)
const currentComponent = computed(() => {
    switch (currentView.value) {
        case 'login':
            return Login;
        case 'register':
            return Register;
        case 'profile':
            return isLoggedIn.value ? Profile : Login; 
        case 'article-list':
            return ArticleList;
        case 'article-detail': 
            return ArticleDetail;
        case 'article-post': 
            return isLoggedIn.value ? ArticlePost : Login; 
        case 'home':
        default:
            return HomePage;
    }
});

// --- IV. HÀM XỬ LÝ (Methods) ---

const handleLoginSuccess = (username) => {
    isLoggedIn.value = true;
    currentView.value = 'article-list'; 
    userProfile.value = {
        username: username,
        email: `${username}@fpt.edu.vn`,
        fullName: 'Tên Đầy Đủ Của Bạn',
        bio: 'Tôi là thành viên mới và rất thích đọc tin tức.'
    };
    console.log(`Chào mừng ${username} đã quay trở lại!`); 
};

const handleRegisterSuccess = (username) => {
    currentView.value = 'login';
    console.log(`Đăng ký thành công cho ${username}. Mời bạn đăng nhập!`);
};

const handleLogout = () => {
    isLoggedIn.value = false;
    currentView.value = 'home';
    selectedArticleId.value = null; 
    userProfile.value = { username: 'guest', email: 'guest@fpt.edu.vn', fullName: 'Khách', bio: 'Thông tin cơ bản.' };
    console.log("Bạn đã đăng xuất thành công!");
};

const handleUpdateProfile = (updatedData) => {
    userProfile.value = { ...userProfile.value, ...updatedData };
    console.log('Cập nhật hồ sơ thành công!');
};

const handleArticlePosted = (newArticle) => {
    // Gán ID mới (giả lập ID duy nhất)
    const newId = allArticles.value.length > 0 ? Math.max(...allArticles.value.map(a => a.id)) + 1 : 1;
    const articleWithId = { ...newArticle, id: newId };
    
    // Thêm bài viết mới vào đầu mảng
    allArticles.value.unshift(articleWithId);
    // Khởi tạo mảng bình luận rỗng cho bài viết mới
    allComments.value[newId] = []; 
    console.log(`Bài viết "${newArticle.title}" đã được đăng thành công!`);
    currentView.value = 'article-list'; // Tự động chuyển sang danh sách
};

// MỚI: Xử lý xem bài viết chi tiết
const handleViewArticle = (articleId) => {
    selectedArticleId.value = articleId;
    currentView.value = 'article-detail';
};

// MỚI: Xử lý đăng bình luận
const handlePostComment = (newComment) => {
    const articleId = newComment.articleId;
    
    if (!allComments.value[articleId]) {
        allComments.value[articleId] = [];
    }
    
    // Thêm ID cho bình luận (giả lập ID duy nhất)
    const newCommentWithId = { ...newComment, id: Date.now() + Math.random() };
    
    // Thêm bình luận vào danh sách (đặt ở đầu)
    allComments.value[articleId].unshift(newCommentWithId);
    
    // Thêm thông báo
    console.log(`Bình luận đã được đăng bởi ${newComment.author} cho bài viết ID ${articleId}!`);
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 pb-10">
    <!-- Thanh điều hướng chung -->
    <NavBar 
      :isLoggedIn="isLoggedIn" 
      @change-view="currentView = $event"
      @logout="handleLogout"
    />
    
    <main class="mt-5 pt-4">
      <!-- Component được hiển thị động -->
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
/* Đảm bảo Tailwind CSS được sử dụng và đặt font chữ đẹp */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

body {
    font-family: 'Inter', sans-serif;
}
/* Giả định Tailwind CSS đã được cấu hình <main class="mt-5 pt-4"> */
</style>


// File: src/main.js (hoặc src/main.ts)

import { createApp } from 'vue';
import App from './App.vue';

// BƯỚC QUAN TRỌNG: CÀI ĐẶT BOOTSTRAP THUẦN
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Cần thiết cho các component JS (như Collapse/Tooltip)

createApp(App).mount('#app');
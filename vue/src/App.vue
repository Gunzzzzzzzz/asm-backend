<template>
  <div class="container py-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">VueShop</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ms-auto">
            <li v-if="!user" class="nav-item"><a class="nav-link" href="#" @click.prevent="view='login'">Đăng nhập</a></li>
            <li v-if="!user" class="nav-item"><a class="nav-link" href="#" @click.prevent="view='register'">Đăng ký</a></li>
            <li v-if="user" class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">{{ user.name }}</a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="#" @click.prevent="view='profile'">Hồ sơ</a></li>
                <li><a class="dropdown-item" href="#" @click.prevent="logout">Đăng xuất</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div v-if="view==='home'">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3>Sản phẩm (Vue)</h3>
        <button v-if="user" class="btn btn-success" @click="view='create'">Thêm</button>
      </div>
      <div class="row g-3">
        <div class="col-12 col-md-6" v-for="p in products" :key="p.id">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ p.title }}</h5>
              <p class="card-text text-truncate">{{ p.desc }}</p>
              <div class="d-flex justify-content-between">
                <small class="text-muted">{{ authorName(p.authorId) }}</small>
                <div>
                  <button class="btn btn-sm btn-primary" @click="open(p.id)">Xem</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="view==='create'" class="mx-auto" style="max-width:720px">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Thêm sản phẩm</h5>
          <form @submit.prevent="create">
            <input v-model="f.title" class="form-control mb-2" placeholder="Tiêu đề" required>
            <textarea v-model="f.desc" class="form-control mb-2" rows="4" placeholder="Mô tả"></textarea>
            <button class="btn btn-primary">Lưu</button>
            <button class="btn btn-link" @click.prevent="view='home'">Hủy</button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="view==='login'" class="mx-auto" style="max-width:420px">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Đăng nhập</h5>
          <form @submit.prevent="login">
            <input v-model="a.email" type="email" class="form-control mb-2" placeholder="Email" required>
            <input v-model="a.pw" type="password" class="form-control mb-2" placeholder="Mật khẩu" required>
            <button class="btn btn-primary">Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="view==='register'" class="mx-auto" style="max-width:420px">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Đăng ký</h5>
          <form @submit.prevent="register">
            <input v-model="r.name" class="form-control mb-2" placeholder="Họ tên" required>
            <input v-model="r.email" type="email" class="form-control mb-2" placeholder="Email" required>
            <input v-model="r.pw" type="password" class="form-control mb-2" placeholder="Mật khẩu" required>
            <button class="btn btn-success">Tạo</button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="view==='profile'" class="mx-auto" style="max-width:640px">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Hồ sơ</h5>
          <div v-if="user">
            <input v-model="p.name" class="form-control mb-2">
            <input v-model="p.email" class="form-control mb-2" disabled>
            <button class="btn btn-primary" @click="saveProfile">Lưu</button>
          </div>
          <div v-else><p>Vui lòng đăng nhập</p></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const stateKey = 'vue-demo-state'
const raw = localStorage.getItem(stateKey)
const state = reactive(raw ? JSON.parse(raw) : {
  users: [{ id:1, name:'Admin', email:'admin@example.com', pw:'admin' }],
  currentUserId: null,
  products: [{ id:1, authorId:1, title:'Demo SP', desc:'Mô tả ngắn'}],
  nextIds: { user:2, product:2 }
})

const view = ref('home')
const f = reactive({ title:'', desc:'' })
const a = reactive({ email:'', pw:'' })
const r = reactive({ name:'', email:'', pw:'' })
const p = reactive({ name:'', email:'' })

const user = computed(() => state.users.find(u=>u.id===state.currentUserId) || null)
const products = state.products

function save(){ localStorage.setItem(stateKey, JSON.stringify(state)) }
function authorName(id){ const u = state.users.find(x=>x.id===id); return u?u.name:'Khách' }

function register(){ if(state.users.some(u=>u.email===r.email)) return alert('Email tồn tại'); const id = state.nextIds.user++; state.users.push({ id, name:r.name, email:r.email, pw:r.pw }); save(); alert('Đăng ký xong'); view.value='login' }
function login(){ const u = state.users.find(x=>x.email===a.email && x.pw===a.pw); if(!u) return alert('Không đúng'); state.currentUserId = u.id; p.name=u.name; p.email=u.email; save(); view.value='home' }
function logout(){ state.currentUserId = null; save(); view.value='home' }
function create(){ if(!user.value) return alert('Đăng nhập'); const id = state.nextIds.product++; state.products.unshift({ id, authorId:user.value.id, title:f.title, desc:f.desc }); f.title=''; f.desc=''; save(); view.value='home' }
function open(id){ const item = state.products.find(x=>x.id===id); alert(item.title + '\n\n' + item.desc) }
function saveProfile(){ if(!user.value) return alert('Đăng nhập'); user.value.name = p.name; save(); alert('Đã lưu') }

// expose
const logoutFn = logout
const createFn = create
const openFn = open
const registerFn = register
const loginFn = login
const saveProfileFn = saveProfile

// assign to template
const exports = { view, f, a, r, p, user, products, authorName, create:createFn, open:openFn, register:registerFn, login:loginFn, logout:logoutFn, saveProfile:saveProfileFn }
Object.assign(window, { __vue_demo_state: state })
</script>

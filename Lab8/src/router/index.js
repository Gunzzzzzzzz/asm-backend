import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'
import UserProfile from '../views/UserProfile.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import ProfileInfo from '../views/profile/ProfileInfo.vue'
import ProfileSettings from '../views/profile/ProfileSettings.vue'

function isAuthenticated() {
  return localStorage.getItem("auth") === "true"
}

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/blog', name: 'BlogList', component: BlogList },
  { path: '/blog/:id', name: 'BlogPost', component: BlogPost },
  {
    path: '/profile',
    name: 'UserProfile',
    component: UserProfile,
    alias: '/me',
    children: [
      { path: 'info', component: ProfileInfo },
      { path: 'settings', component: ProfileSettings }
    ]
  },
  { path: '/login', name: 'Login', component: Login },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) next({ name: 'Login' })
      else next()
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

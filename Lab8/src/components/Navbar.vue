<template>
  <nav class="bg-white shadow px-6 py-3 flex justify-between items-center">
    <h1 class="text-xl font-semibold text-blue-600">MyBlog</h1>

    <div class="flex gap-4">
      <router-link class="text-gray-700 hover:text-blue-600" to="/">Home</router-link>
      <router-link class="text-gray-700 hover:text-blue-600" to="/blog">Blog</router-link>
      <router-link class="text-gray-700 hover:text-blue-600" to="/profile">Profile</router-link>
      <router-link class="text-gray-700 hover:text-blue-600" to="/dashboard">Dashboard</router-link>

      <router-link 
        class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700" 
        to="/login"
      >Login</router-link>
    </div>
  </nav>
</template>

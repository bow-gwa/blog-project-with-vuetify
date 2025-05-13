<template>
    <v-app-bar color="orange" density="comfortable" class="nav-bar">
      <v-container class="d-flex align-center justify-space-between">
        <!-- Navigation Links -->
        <div class="nav-links d-flex align-center flex-wrap">
          <v-toolbar-title class="nav-title">My Website</v-toolbar-title>

          <!-- <router-link v-for="(link, i) in links" :key="i" :to="link.to" class="nav-btn">
            {{ link.text }}
          </router-link> -->

                    <!-- looping through as seen above brings issues when it comes to the auth buttons so i'll just have each link separately as below-->
            <router-link to="/" class="auth-btn">Home</router-link>
            <router-link to="/About" class="auth-btn">Blog Posts</router-link>
            <router-link to="/create" class="auth-btn">Create Post</router-link>
            <router-link to="/tags/:tag" class="auth-btn">Topics(tags)</router-link>

        </div>
  
        <v-spacer></v-spacer>
  
        <!-- Authentication Buttons -->
        <div class="auth-buttons d-flex align-center flex-wrap">
          <router-link to="/VuetifySignin" class="auth-btn">Login</router-link>
          <router-link to="/VuetifySignup" class="auth-btn">Sign Up</router-link>
        </div>
      </v-container>
    </v-app-bar>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';
  
  //const router = useRouter();
  
  const { logout, error } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      // if (!error.value) {
      //   console.log("user logged out")
      // }
    }

  </script>
  
  <style>
  .nav-bar {
    padding: 0 16px;
  }
  
  .nav-btn,
  .auth-btn {
    text-decoration: none;
    padding: 8px 12px;
    color: white;
  }
  
  .nav-btn:hover,
  .auth-btn:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
  </style>
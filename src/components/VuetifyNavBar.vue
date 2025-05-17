<template>
    <v-app-bar color="orange" density="comfortable" class="nav-bar">
      <v-container class="d-flex align-center justify-space-between">
        <!-- Navigation Links -->
        <div class="nav-links d-flex align-center flex-wrap">
          <v-toolbar-title class="nav-title">Socialeyes</v-toolbar-title>

          <!-- <router-link v-for="(link, i) in links" :key="i" :to="link.to" class="nav-btn">
            {{ link.text }}
          </router-link> -->

                    <!-- looping through as seen above brings issues when it comes to the auth buttons so i'll just have each link separately as below-->
            <router-link to="/" class="auth-btn">Home</router-link>
            <router-link to="/posts" class="auth-btn">Blog Posts</router-link>
            <router-link to="/create" class="auth-btn">Create Post</router-link>
            <!-- <router-link to="/tags" class="auth-btn">Topics(tags)</router-link> -->

        </div>
        <v-spacer></v-spacer>
  
        <!-- Authentication Buttons -->
        <div v-if="!user"  class="auth-buttons d-flex align-center flex-wrap">
          <router-link to="/signin" class="auth-btn">Login</router-link>
          <router-link to="/signup" class="auth-btn">Sign Up</router-link>
        </div>
      </v-container>

                <!-- for authenticated users -->
                <v-container v-if="user" class="user-container" >
        <div>
        <p>Hey there {{ user.displayName }}</p>
        <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button style="background-color:orange" @click="handleClick">Logout</button>
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
.user-container {
  margin-top: 5px;
  margin-bottom: 20px; /* Adjust based on navbar height */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
  width: 100%;
}

.v-app-bar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}


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

  .nav-title {
    margin-right: 30px;
    margin-left: -20px
  }
  </style>
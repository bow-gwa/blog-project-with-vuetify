<!-- CP ZIWANI CAROUSEL -->
<template>
  <div class="carousel-container">
    <swiper
      :loop="true"
      :pagination="{ clickable: true }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, i) in slides" :key="i">
        <div class="swiper-slide-content">
          <img :src="slide.image" alt="Slide Image" class="slide-image">
          <h1 class="slide-title">{{ slide.title }}</h1>
          <p class="slide-description">{{ slide.description }}</p>
          <a :href="slide.link" class="slide-button">{{ slide.buttonText }}</a>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules'; // ✅ Ensuring Navigation Works
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination]; // ✅ Enables Swiper Controls

const slides = ref([
  {
    image: "https://via.placeholder.com/800x400?text=Knowledge+Hub",
    title: "Knowledge Hub",
    description: "Biblically-aligned resources for Kingdom business.",
    buttonText: "Explore",
    link: "/knowledge-hub"
  },
  {
    image: "https://via.placeholder.com/800x400?text=Business+Insights",
    title: "Business Insights",
    description: "Learn ethical entrepreneurship strategies.",
    buttonText: "Learn More",
    link: "/business-insights"
  },
  {
    image: "https://via.placeholder.com/800x400?text=Community+Impact",
    title: "Community Impact",
    description: "Join a network of purpose-driven leaders.",
    buttonText: "Join Us",
    link: "/community-impact"
  }
]);
</script>

<style scoped>
/* 🚀 Fix Navbar Overlap */
.carousel-container {
  margin-top: 80px; /* Adjust this value to match your navbar height */
  width: 100%;
  height: 450px;
  padding-top: 20px;
}

/* Swiper Styling */
.mySwiper {
  width: 100%;
  height: 100%;
}

/* Slide Content */
.swiper-slide-content {
  text-align: center;
  padding: 20px;
}

/* Image Styling */
.slide-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

/* Text Styling */
.slide-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
}

.slide-description {
  font-size: 16px;
  margin-bottom: 15px;
}

/* Button Styling */
.slide-button {
  padding: 10px 20px;
  background: orange;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  display: inline-block;
}

.slide-button:hover {
  background: darkorange;
}

/* ✅ Fix Navigation Arrows */
.swiper-button-next,
.swiper-button-prev {
  color: orange; /* Make navigation arrows visible */
  font-size: 20px;
  z-index: 100;
}
</style>

##############

<!-- CP NAVBAR -->

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

  #############################
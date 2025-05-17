
<!-- 13.05.2025 1023 HOMEVIEW CP VERSION WHICH LOOKS GOOD BUT THE IMAGE DOESTNT SPREAD ACROSS THE PAGE  -->
<template>
  <div v-if="error">{{ error }}</div>
  <div id="image-container">
    <!-- <p>Socialeyes</p> -->
  <!-- <img src="https://images.unsplash.com/photo-1628517290972-74a92219db50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhbiUyMGZhbWlseXxlbnwwfHwwfHx8MA%3D%3D" alt="Image 1"> -->
  <img src="https://images.unsplash.com/photo-1643818653783-2f818a205bb6?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1">
  <img src="https://images.unsplash.com/photo-1559968870-77048b6aa65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBjb21tdW5pdHl8ZW58MHx8MHx8fDA%3D" alt="Image 2">
  <img src="https://images.unsplash.com/photo-1722072391426-964abfef1924?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxhZnJpY2FuJTIwbWFya2V0cGxhY2V8ZW58MHx8MHx8fDA%3D" alt="Image 3">
</div>
 <!-- <div v-if="slides.length" class="carousel-container">
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
 </div> -->
 <!-- <div v-else>
   <Spinner />
 </div> -->
 <div>
    <h1>About Socialeyes</h1>
    <p>Welcome to Socialeyes, a dedicated space where we explore the complexities of society, human interactions, and the ever-changing world around us. Our platform is built on a passion for uncovering the stories, challenges, and triumphs that define our communities, cultures, and way of life. We believe that open conversations pave the way for understanding, and through our blog, we aim to shed light on the pressing social matters that shape our collective future.

At Socialeyes, we delve into thought-provoking discussions on topics such as social justice, inequality, cultural shifts, and the evolving role of technology in everyday life. Our mission is to provide insightful perspectives that inspire dialogue and encourage deeper reflection on the issues that truly matter. Whether it's addressing systemic challenges, celebrating societal progress, or questioning the norms we often take for granted, we seek to create a space that fosters awareness and understanding.

Our writers, contributors, and community members come from diverse backgrounds, offering a broad spectrum of experiences and viewpoints. We believe that every voice matters, and by sharing real-life stories and well-researched articles, we aim to bridge gaps between different perspectives. Our commitment is to present content that is not only informative but also encourages engagement and action—whether that be personal reflection, community involvement, or advocacy for meaningful change.

Join us as we embark on this journey of exploration and enlightenment. Through well-researched articles, interviews, and personal stories, we hope to create a hub where knowledge, empathy, and discussion thrive. Society is constantly evolving, and so should our understanding of it—let’s navigate this world together, one conversation at a time.</p>
   </div>
</template>

<script setup>
import Spinner from '../components/Spinner.vue'
import getSlides from "../composables/getSlides"
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import { ref } from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [Navigation, Pagination];

const { slides, error, load } = getSlides();

load();
</script>

<style scoped>
/* 🚀 Fix Navbar Overlap */
.carousel-container {
 margin-top: 80px;
 width: 100%;
 height: 500px; /* Increased height */
 display: flex;
 justify-content: center;
 align-items: center;
}

/* Swiper Styling */
.mySwiper {
 width: 100%;
 height: 100%;
}

/* ✅ Fix Image Zoom & Maintain Aspect Ratio */
.slide-image {
 width: 100%; /* Limits image width */
max-height: 250px;
/* Restricts height */

 object-fit: contain; /* Prevents zooming */
 border-radius: 10px;
}

/* Center Content in Each Slide */
.swiper-slide-content {
 text-align: center;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
}

/* Improve Title & Description Structure */
.slide-title {
 font-size: 22px;
 font-weight: bold;
 margin-top: 10px;
}

.slide-description {
 font-size: 16px;
 margin: 10px 0;
}

/* ✅ Better Button Positioning */
.slide-button {
 padding: 10px 20px;
 background: orange;
 color: white;
 text-decoration: none;
 border-radius: 5px;
 display: inline-block;
 margin-top: 10px;
}

.slide-button:hover {
 background: darkorange;
}

/* ✅ Fix Navigation Arrows */
.swiper-button-next,
.swiper-button-prev {
 color: orange;
 font-size: 20px;
 z-index: 100;
}

.swiper-slide-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Keeps text and buttons centered */
  align-items: center;
  text-align: center;
  height: 100%; /* Prevents unwanted shifting */
}

body {
  overflow: scroll;
}

/* assets/images */
#image-container {
  display: flex;
  justify-content: space-between;
  margin-top: 100px; /* Adjust spacing below the header */
  margin-right: 70px;
  margin-bottom: 50px
}

#image-container img {
  width: 30%; /* Adjust image size */
  height: auto;
  border: 1px solid #ddd; /* Optional: Adds a border to each image */
  border-radius: 5px; /* Optional: Rounds the corners of each image */
}


</style>

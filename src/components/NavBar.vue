<template>
    <header>
      <div v-if="!user">
      <p>Welcome to ...</p>
      <h1>The Amazing Blog</h1>
    </div>

      <nav v-if="user">
        <h1>Socialeyes</h1>
        <p>A window to society</p>
        
        <div>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Create' }">Create Post</router-link>
        </div>
    <div>
        <p>Hey there {{ user.displayName }}</p>
        <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button style="background-color:orange" @click="handleClick">Logout</button>
  </nav>
    </header>
  <!-- <img src="../assets/images/italy.jpg" alt="" style="width: 200px; height: 100px "> -->
  <img src="../assets/images/italy.jpg" alt="image">

  <div id="image-container">
  <img src="../assets/images/FAMILY pexels-ario-stories-278509849-29801855.jpg" alt="Image 1">
  <img src="../assets/images/FAITH pexels-jibarofoto-2774570.jpg" alt="Image 2">
  <img src="../assets/images/SOCIETY pexels-detty-image-2148597567-30179960.jpg" alt="Image 3">
</div>
  </template>
  
  <script>
import getUser from '@/composables/getUser';
import useLogout from '@/composables/useLogout';

  export default {
    setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      // if (!error.value) {
      //   console.log("user logged out")
      // }
    }

    return { handleClick, user }
  }
  }
  </script>
  
  <style>
    header {
       display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 10px; 
      
    }
    header h1 {
      /* color: #dfdfdf; */
      font-size: 48px;
    }
    header a {
      color: #bbb;
      text-decoration: none;
      margin-left: 20px;
    }
    header a.router-link-active {
      color: #444;
      font-weight: bold;
    }



/* Navigation-specific additions to stabilize links */
header nav {
  display: flex; /* Ensures links are horizontally aligned */
  justify-content: flex-end; /* Pushes links to the right */
  gap: 20px; /* Adds space between links */
}

header nav a {
  position: relative; /* Keeps links in place */
  padding: 5px 10px; /* Adds padding for click area and visual balance */
  font-size: 16px; /* Consistent font size for readability */
}

    /* assets/images */
    #image-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px; /* Adjust spacing below the header */
}

#image-container img {
  width: 30%; /* Adjust image size */
  height: auto;
  border: 1px solid #ddd; /* Optional: Adds a border to each image */
  border-radius: 5px; /* Optional: Rounds the corners of each image */
}

button {
    text-decoration: none;
    background: #5ae4ca;
    color: white;
    font-weight: bold;
    border: 0;
    border-radius: 20px;
    padding: 10px 20px;
  }




  </style>
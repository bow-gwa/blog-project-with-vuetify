<!-- <template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
</template> -->

<!-- cp version with image -->
<template>
  <div class="post">
    <img :src="post.imageUrl" alt="Post Image" class="post-image" />
    <div class="post-content">
      <router-link :to="{ name: 'Details', params: { id: post.id }}">
        <h3>{{ post.title }}</h3>
      </router-link>
      
      <p>{{ snippet }}</p>
      <span v-for="tag in post.tags" :key="tag">
        #{{ tag }}
      </span>
    </div>
  </div>
</template>


<script>
import { computed } from "vue"

export default {
    props: ["post"],
    emits: ["delete-post"],
    setup(props, { emit }) {
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + "...."
        });

        const deletePost = (postId) => {
          emit("delete-post", postId) // Emits an event to parent to handle post deletion
        }

        return { snippet, deletePost }
    }
  }
</script>

<!-- <style scoped>
/* 
.post {
  all: unset;
} */

.post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
    /* background-color: #c9302c; */
  }
  .post h3 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h3::before {
    content: "";
    display: block;
    /* width: 100%; */ 
    /* changed to the width below as suggested by cp to keep text from overflowing out of the orange background */
    width: calc(100% + 40px); /* Adjust dynamically to fit text */
    box-sizing: border-box; /* Prevent padding-related overflow */
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
    
  }

  /* Styling for delete button */
.delete-button {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  color: white;
  background-color: #d9534f;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #c9302c;
}
</style> -->


<!-- cp styling -->
<style scoped>
.post {
  display: flex;
  align-items: center;
  background: #f4f4f4;
  border-radius: 12px;
  padding: 20px;
  margin: 20px 40px;
  border: 1px solid #ddd;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.post:hover {
  transform: scale(1.03);
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

/* Post image */
.post-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
}

/* Post content */
.post-content {
  flex: 1;
}

.post h3 {
  font-size: 24px;
  font-weight: bold;
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
}

.post h3::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 0;
  width: calc(100% + 16px);
  height: 100%;
  background: linear-gradient(135deg, #ff7b00, #ff5500);
  z-index: -1;
  transform: skewX(-5deg);
  border-radius: 5px;
}

.post p {
  font-size: 18px;
  color: #444;
  line-height: 1.6;
  margin-bottom: 10px;
}

/* Tags */
.post span {
  display: inline-block;
  background: #ff7b00;
  color: white;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 6px;
  margin-right: 6px;
  font-weight: bold;
}

.post span:hover {
  background: #ff5500;
}

/* Delete button */
.delete-button {
  display: inline-block;
  margin-top: 15px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #e63946;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
}

.delete-button:hover {
  background-color: #b52a35;
  transform: scale(1.05);
}
</style>


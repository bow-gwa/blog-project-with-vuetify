<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <img :src="post.imageUrl" alt="Post Image" class="post-image" />
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">Delete Post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import getPost from '../composables/getPost';
import Spinner from '@/components/Spinner.vue';
import { projectFirestore } from '@/firebase/config';

export default {
props: ["id"],
components: { Spinner },

setup(props) {
  
  const router = useRouter()

 const { post, error, load } = getPost(props.id)

 load()


 const handleClick = async () => {
      try {
        // Delete the post using the Firestore document ID
        await projectFirestore.collection("posts").doc(props.id).delete();

        // Navigate to the home page after deletion
        router.push({ name: "Home" });
      } catch (err) {
        console.error("Error deleting post:", err);
      }
    };

 return { post, error, handleClick }
 }
}
</script>


<!-- <style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
  padding: 10px 15px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button.delete:hover {
  background-color: #c9302c;
}
</style> -->


/* cp version 2 of styling */
<style scoped>
/* Make the post take up most of the page */
.post {
  max-width: 90%; /* Use more of the screen width */
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Make the image wider */
.post-image {
  width: 100%; /* Full width */
  max-height: 400px; /* Taller */
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

/* Post title */
.post h3 {
  font-size: 32px; /* Larger */
  font-weight: bold;
  color: #222;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 4px solid #ff7b00;
}

/* Make the text take up more space */
.post p {
  font-size: 20px; /* Bigger text */
  color: #555;
  line-height: 1.8;
  text-align: left;
  margin-top: 15px;
  padding: 0 30px; /* Wider padding */
}

/* Make the delete button wider */
button.delete {
  display: block;
  width: 200px; /* Wider */
  margin: 20px auto;
  padding: 14px 22px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: #e63946;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
}

button.delete:hover {
  background-color: #b52a35;
  transform: scale(1.05);
}
</style>

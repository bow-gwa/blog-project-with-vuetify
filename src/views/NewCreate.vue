<template>
    <div class="post create-post">
      <div class="post-content">
        <h3>Create a New Post</h3>
        <form @submit.prevent="handleSubmit">
          <label>Title:</label>
          <input v-model="title" type="text" required>
  
          <label>Content:</label>
          <textarea v-model="body" required></textarea>

          <label>Image URL:</label>
  <input v-model="imageUrl" type="text" placeholder="Paste your image URL here">
  
          <label>Tags (hit enter to add)</label>
          <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown">
  
          <div class="tags-container">
            <span v-for="tag in tags" :key="tag" class="tag-pill">#{{ tag }}</span>
          </div>
  
          <button class="submit-button">Add Post</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { projectFirestore, timestamp } from "@/firebase/config";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const title = ref("");
      const body = ref("");
      const imageUrl = ref("");
      const tag = ref("");
      const tags = ref([]);
      const router = useRouter();
  
      const handleKeydown = () => {
        if (tag.value.trim() && !tags.value.includes(tag.value)) {
          tags.value.push(tag.value.trim());
        }
        tag.value = "";
      };
  
      const handleSubmit = async () => {
        const post = {
          title: title.value,
          body: body.value,
          tags: tags.value,
          imageUrl: imageUrl.value, // Include image URL
          createdAt: timestamp()
        };
  
        await projectFirestore.collection("posts").add(post);
        router.push({ name: "Home" });
      };
  
      return { title, body, tag, handleKeydown, tags, imageUrl,  handleSubmit };
    }
  };
  </script>
  
  <style scoped>
  .create-post {
    display: flex;
    align-items: center;
    background: #f4f4f4;
    border-radius: 12px;
    padding: 20px;
    margin: 80px 40px 20px; /* Pushes content below navbar */
    border: 1px solid #ddd;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    flex-direction: column;
  }
  
  .create-post:hover {
    transform: scale(1.03);
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
  }
  
  .post-content {
    width: 100%;
  }
  
  h3 {
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
  
  h3::before {
    content: "";
    position: absolute;
    left: -8px;
    top: 0;
    width: calc(100% + 16px);
    height: 100%;
    background: linear-gradient(135deg, #ff5500);
    z-index: -1;
    transform: skewX(-5deg);
    border-radius: 5px;
  }
  
  /* ✅ Labels with full background */
  label {
    display: block;
    width: fit-content;
    padding: 8px 16px;
    background: linear-gradient(135deg, #ff5500); /* Matching title */
    color: black;
    font-size: 18px;
    border-radius: 6px;
    margin-top: 20px;
  }

  label::before {
  content: none; /* Prevents additional background layers */
}

  


  
  /* ✅ Form Styling */
  form {
    width: 100%;
    max-width: 480px;
  }
  
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #ddd;
  }
  
  textarea {
    height: 160px;
  }
  
  /* ✅ Styled Submit Button */
  .submit-button {
    display: block;
    margin-top: 20px;
    background: #ff7b00;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }
  
  .submit-button:hover {
    background: #ff5500;
  }
  
  /* ✅ Tags Container */
  .tags-container {
    margin-top: 10px;
  }
  
  .tag-pill {
    display: inline-block;
    background: #ff7b00;
    color: white;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 6px;
    margin-right: 6px;
    font-weight: bold;
  }
  
  .tag-pill:hover {
    background: #ff5500;
  }
  </style>
  
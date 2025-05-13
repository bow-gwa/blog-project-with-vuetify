<template>
    <v-form @submit.prevent="handleSubmit">
        <!-- <v-text-field 
        style="background-color: aqua;"
              v-model="displayName"
              label="Username"
              prepend-inner-icon="mdi-account-circle"
              variant="outlined"
              density="comfortable"
              persistent-placeholder
            /> -->
        <v-text-field 
              v-model="email"
              label="Email"
              prepend-inner-icon="mdi-email"
              variant="outlined"
              density="comfortable"
              persistent-placeholder
            />    
        <v-text-field 
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-inner-icon="mdi-lock"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showPassword = !showPassword"
              variant="outlined"
              density="comfortable"
              persistent-placeholder
            />
            <v-container v-if="error"  class="error">{{ error }}</v-container>
            <!-- SLOT Placeholder where the parent component can inject content -->
    <slot></slot>
    </v-form>
 
</template>

<script>
import useLogin from "@/composables/useLogin"
import { ref } from "vue"


  
  export default {
     setup(_, { emit }) {
      //refs
     
      const email = ref("")
      const password = ref("")
      const showPassword =ref(false)


      const { error, login } = useLogin()


  //original code
    //   const handleSubmit = async () => {
    //     await login(email.value, password.value)
    //     if (!error.value) {
    //       context.emit("login")
    //   }
    // }

    // cp suggested i change to what is below because "If context.emit("login") is used instead of defineEmits(), it won't work in Vue 3 Composition API."

const handleSubmit = async () => {
    console.log("Emitting login event...");
 
 try { 
  error.value = "";
  await login(email.value, password.value);
if (!error.value) {
  emit("login"); // Emit the event correctly
  }
} catch (err) {
        error.value = err.message || "Login failed. Please try again.";
        console.error("Login failed:", err); 
};
  }
      return { email, password, handleSubmit, error, showPassword }
     
  }
}
  </script>
  
  <style>
  .v-icon {
  display: inline-block !important;
}

.error {
  color: red;
  font-weight: bold;
}
  </style>
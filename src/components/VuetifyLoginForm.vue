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
            
            <!-- Forgot Password Link -->
        <v-btn text class="forgot-password" @click="forgotPassword">
            Forgot Password?
        </v-btn>
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
 
     // Basic validation
     if (!email.value || !password.value) {
        error.value = "Email and password are required.";
        return;
    }
    
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

  const forgotPassword = () => {
            if (!email.value) {
                error.value = "Please enter your email to reset password.";
                return;
            }
            if (email.value){alert (`Password reset link sent to ${email.value}`)}
            // You can integrate this with your password reset API
            console.log(`Password reset link sent to ${email.value}`);
        }

      return { email, password, handleSubmit, error, showPassword, forgotPassword }
     
  }
}
  </script>
  
  <style>
  .forgot-password {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
  .v-icon {
  display: inline-block !important;
}

.error {
  color: red;
  font-weight: bold;
}
  </style>
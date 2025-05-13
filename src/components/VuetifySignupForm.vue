<template>
    <v-form @submit.prevent="handleSubmit">
        <v-text-field 
              v-model="displayName"
              label="Username"
              prepend-inner-icon="mdi-account-circle"
              variant="outlined"
              density="comfortable"
              persistent-placeholder
            />
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
import useSignup from "@/composables/useSignup"
import { ref  } from "vue"
import { defineEmits } from 'vue';


export default {
  setup(_, { emit }) {
    
    // alternative
    const { error, signup } = useSignup()

   // const emit = defineEmits(["signup"]); // Correctly define emitted event
     //refs
    const displayName = ref("")
    const email = ref("");
    const password = ref("");
    const showPassword = ref(false);

    const handleSubmit = async () => {
      try {
        error.value = "";
        await signup(email.value, password.value, displayName.value)
      if (!error.value) {
          emit("signup")
        }
      } catch (err) {
        error.value = err.message || "Signup failed. Please try again.";
        console.error("Signup failed:", err);
  }
   }
   return { displayName, email, password, showPassword, handleSubmit, error }
}
}

</script>

<style>
.error {
  color: red;
  font-weight: bold;
}
</style>
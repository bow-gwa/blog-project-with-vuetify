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
    <v-container v-if="error" class="error">{{ error }}</v-container>
    <slot></slot>
  </v-form>
</template>

<script>
import useSignup from "@/composables/useSignup"
import { ref } from "vue"

export default {
  setup(_, { emit }) {
  
    const { error, signup } = useSignup();

    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const showPassword = ref(false);

    const handleSubmit = async () => {
  error.value = ""; // Reset error before validation
  
  // ✅ Basic Validation: Check for empty fields
  if (!displayName.value || !email.value || !password.value) {
    error.value = "Username, Email, and Password are required.";
    return;
  }

  // ✅ Improved Validation: Check email format
  const emailRegex = /.+@.+\..+/;
  if (!emailRegex.test(email.value)) {
    error.value = "Invalid email format. Please enter a valid email.";
    return;
  }

  // ✅ Improved Validation: Ensure password strength
  if (password.value.length < 6) {
    error.value = "Password must be at least 6 characters long.";
    return;
  }

  try {
    await signup(email.value, password.value, displayName.value);
    
    if (!error.value) {
      emit("signup"); // ✅ Emit signup event after successful validation
    }
  } catch (err) {
    error.value = err.message || "Signup failed. Please try again.";
    console.error("Signup Error:", err);
  }
};


    return { displayName, email, password, showPassword, handleSubmit, error };
  }
};
</script>

<style>
.error {
  color: red;
  font-weight: bold;
}
</style>

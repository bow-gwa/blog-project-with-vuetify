<template>
  <form @submit.prevent="handleSumbit">
    <input type="text" required placeholder="display name" v-model="displayName">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import useSignup from "@/composables/useSignup"
import { ref } from "vue"

export default {
   setup(props, context) {
    const { error, signup } = useSignup()

    //refs
    const displayName = ref("")
    const email = ref("")
    const password = ref("")

    const handleSumbit = async () => {
      await signup(email.value, password.value, displayName.value)
      if (!error.value) {
          context.emit("signup")
      }
    }

    return { displayName, email, password, handleSumbit, error }
   }
}
</script>

<style>

</style>
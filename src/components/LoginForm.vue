
 <template>
   <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      
      <input type="password" required placeholder="password" v-model="password">
      <div class="error">{{ error }}</div>
      <button style="background-color:orange">Login</button>
    </form>
  </template>
  

   <!-- cp version below -->
   <!-- <template>
    <v-app>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="handleSubmit">
            <v-text-field 
              v-model="email"
              label="Email"
              type="email"
              prepend-icon="mdi-account"
              required
            />
            <v-text-field 
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              required
            />
            <v-alert v-if="error" type="error">{{ error }}</v-alert>
            <v-btn type="submit" color="primary" class="mt-3">Login</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-app>
  </template> -->

<!-- vuetify version below -->
<!-- <template>
    <v-app>
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field 
            v-model="email"
            label= "Email"
            prepend-icon="mdi-account"
            type="email"
            required
            />
            <v-text-field 
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-icon="mdi-lock"
              :append-icon= "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              required
            /> -->
            <!-- Forgot password? Click here -->
          <!-- </v-form>
        </v-card-text>
        <v-divider></v-divider> -->
        <!-- Don't have an accout? -->
        <!-- <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-app>
    </template> -->

  <script>
import useLogin from "@/composables/useLogin"
import { ref } from "vue"

  
  export default {
     setup(props, context) {
      //refs
      const email = ref("")
      const password = ref("")
      const showPassword =ref(false)


      const { error, login } = useLogin()
  
      const handleSubmit = async () => {
        await login(email.value, password.value)
        if (!error.value) {
          context.emit("login")
      }
    }
  
      return { email, password, handleSubmit, error, showPassword }
     }
  }
  </script>
  
  <style>
  .v-icon {
  display: inline-block !important;
}
  </style> 
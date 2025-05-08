<!-- <template>
  <v-app>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label= "Username"
          prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon= "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
          Forgot password? Click here
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      Don't have an accout?
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions> -->
      <!-- <p>Don't have an accout?</p> -->
    <!-- </v-card>
  </v-app>
</template> -->

<!-- cp version compatible with vue 3 -->

<!-- <template>
  <v-app>
    <v-container class="d-flex justify-center">
      <v-card width="400" class="mx-auto mt-5">
        <v-card-title>
          <h1 class="text-h4">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field 
              label="Username"
              prepend-inner-icon="mdi-account-circle"
            />
            <v-text-field 
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-inner-icon="mdi-lock"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showPassword = !showPassword"
            />
            <p class="mt-2">Forgot password? <a href="#">Click here</a></p>
            <v-btn type="submit" variant="tonal" color="primary">Submit</v-btn>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <p class="mt-2">Don't have an account?</p>
        <v-card-actions>
          <v-btn variant="tonal" color="success">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="tonal" color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>


<script>
import { ref } from "vue";

export default {
  name: 'App',

  setup() {
    const showPassword = ref(false);
    return { showPassword };
  }
};
</script>-->

<!-- ANOTHER CP VERSION -->
<template>
  <v-app>
    <v-container class="d-flex justify-center align-center fill-height">
      <v-card width="400" class="mx-auto mt-5 pa-5">
        <v-card-title class="text-center">
          <h1 class="text-h4">Login</h1>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field 
              label="Username"
              prepend-inner-icon="mdi-account-circle"
              variant="outlined"
              density="comfortable"
              persistent-placeholder
            />
            <v-text-field 
              :type="showPassword ? 'text' : 'password'"
              label="Password"
              prepend-inner-icon="mdi-lock"
              :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append-inner="showPassword = !showPassword"
              variant="outlined"
              density="comfortable"
              persistent-placeholder
            />
            <p class="mt-2 text-center">
              Forgot password? <a href="#" class="text-primary">Click here</a>
            </p>
            <v-btn 
              type="submit" 
              variant="tonal" 
              color="primary" 
              block 
              class="mt-3"
            >
              Submit
            </v-btn>
          </v-form>
        </v-card-text>
        <v-divider class="mt-4"></v-divider>
        <p class="mt-2 text-center">Don't have an account?</p>
        <v-card-actions class="justify-space-between">
          <v-btn variant="tonal" color="success">Register</v-btn>
          <v-btn variant="tonal" color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { ref } from "vue";

export default {
  name: 'App',
  setup() {
    const showPassword = ref(false);
    return { showPassword };
  }
};
</script>



<!-- <script> -->
//import HelloWorld from './components/HelloWorld';
// import { ref } from "vue"
// import useLogin from "@/composables/useLogin"
// import { ref } from "vue"

// export default {
//   setup(props, context) {
//       //refs
//       const email = ref("")
//       const password = ref("")
//       const showPassword =ref(false)


//       const { error, login } = useLogin()
  
//       const handleSubmit = async () => {
//         await login(email.value, password.value)
//         if (!error.value) {
//           context.emit("login")
//       }
//     }
  
//       return { email, password, handleSubmit, error, showPassword }
//      }
//   }
<!-- </script> -->

<style scoped>
/* Reset all inherited styles for this component */
.no-style, .no-style * {
  all: unset;
}
.v-label::before {
    background: transparent !important;
}

</style>
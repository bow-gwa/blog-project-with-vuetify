<template> 
<v-app> 
<!-- <h1>The Amazing Blog</h1> -->
<!-- <NavBar /> -->
 <VuetifyNavBar />
  <router-view/>
</v-app>  
</template>

<script>
//import NavBar from "./components/NavBar.vue"
import VuetifyNavBar from "./components/VuetifyNavBar.vue"
export default {
components: { VuetifyNavBar }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>

<!-- <template>

  <Navigation />
  <router-view  />

</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
components: { Navigation }  
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
}
</style> -->

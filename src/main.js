import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/main.css"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'



// import firebase auth service
import { projectAuth } from './firebase/config'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
let app

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
      },
  })

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        .use(router)
        .use(vuetify)
        .mount('#app')
    }
})



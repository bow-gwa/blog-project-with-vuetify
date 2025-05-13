import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from "../views/Details.vue"
import Create from "../views/Create.vue"
import Tag from '@/views/Tag.vue'
import Realtime from '@/views/RealTime.vue'
import SignIn from '@/views/SignIn.vue'
import VuetifySignin from '@/views/VuetifySignin.vue'
import { projectAuth } from "@/firebase/config";

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
      next({ name: "VuetifySignin" })
  } else {
      next()
  }
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
      next({ name: "Home" })
  } else {
      next()
  }
}

const routes = [
  // {
  //   path: "/Signin",
  //   name: "SignIn",
  //   component: SignIn,
  //   beforeEnter: requireNoAuth
  // },
 
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    //beforeEnter: requireNoAuth
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
    beforeEnter: requireNoAuth
  },
  {
    path:"/create",
    name: "Create",
    component: Create,
    beforeEnter: requireAuth
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
    beforeEnter: requireNoAuth
  },
  {
    path: "/realtime",
    name: "Realtime",
    component: Realtime,
    beforeEnter: requireAuth
  },
  {
    path: "/VuetifySignin",
    name: "VuetifySignin",
    component: VuetifySignin,
   // beforeEnter: requireNoAuth
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

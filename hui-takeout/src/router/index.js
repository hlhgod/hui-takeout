import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Order from '../views/Order/Order.vue'
import Search from '../views/Search/Search.vue'
import Profiles from '../views/Profiles/Profiles.vue'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/profiles',
    name: 'Profiles',
    component: Profiles,
    meta:{
      showFooter:true
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta:{
      showFooter:false
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

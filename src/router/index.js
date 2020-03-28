import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=() => import('../views/Home.vue')
const detail=() => import('../views/detail.vue')
const tongji=() => import('../views/tongji.vue')
const love=() => import('../views/love.vue')
const recommon=() => import('../views/recommon.vue')
const Search=() => import('../views/Search.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/tongji',
    name: 'tongji',
    component:tongji
  },
  {
    path: '/love',
    name: 'love',
    component:love
  },
  {
    path: '/recommon',
    name: 'recommon',
    component:recommon
  },
  {
    path: '/search',
    name: 'search',
    component:Search
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

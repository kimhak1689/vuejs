import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('./../views/Dashboard')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('./../views/News')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('./../views/User')
  },
  {
    path: '/my-profile',
    name: 'my-profile',
    component: () => import('./../views/MyProfile')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

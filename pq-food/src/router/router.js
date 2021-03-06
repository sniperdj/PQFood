import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/business/home/pqhome.vue'
import MyError from '@/common/views/error.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'error',
      component: MyError
    },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router

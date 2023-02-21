import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta:{
      page:true
    },
    component: ()=>import('../views/HomeView.vue')
  },
  {
    path: '/categoy',
    name: 'categoy',
    meta:{
      page:true
    },
    component: () => import('../views/CategoryView.vue')
  },
  {
    path: '/topics',
    name: 'topics',
    meta:{
      page:true
    },
    component: () => import('../views/TopicsView.vue')
  },
  {
    path: '/info',
    name: 'info',
    meta:{
      page:true
    },
    component: () => import('../views/InfoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

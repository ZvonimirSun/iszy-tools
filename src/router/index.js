import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UUID from '@/views/encrypt/uuid'
import mtpLoans from '@/views/money/mtpLoans'

const routes = [
  {
    path: '/',
    name: '首页',
    component: Home,
    meta: {
      title: '首页',
      requiresAuth: false
    }
  },
  {
    path: '/encrypt/uuid',
    name: 'UUID在线生成',
    component: UUID
  },
  {
    path: '/money/mtpLoans',
    name: '多次提前还贷计算器',
    component: mtpLoans
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index'),
    meta: {
      title: '登录',
      requiresAuth: false
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  { path: '/:catchAll(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

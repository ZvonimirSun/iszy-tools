import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ISZY 工具集合',
    component: () => import('@/views/Home.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/encrypt/uuid',
    name: 'UUID在线生成工具',
    component: () => import('@/views/encrypt/uuid.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/money/mtqLoans',
    name: '多次提前还贷计算器',
    component: () => import('@/views/money/mtqLoans.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/common/imgHosting',
    name: '极简图床(加工中)',
    component: () => import('@/views/common/imgHosting.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      requiresAuth: false
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  { path: '/:catchAll(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

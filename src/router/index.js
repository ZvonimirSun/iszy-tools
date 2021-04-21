import { createRouter, createWebHistory } from 'vue-router'
import widgets from '@/views/index.js'
import tools from '@/assets/tools.json'

let routes = [
  {
    path: '/',
    name: 'ISZY 工具集合',
    component: () => import('@/views/Home.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

for (const tmp of tools) {
  if (Array.isArray(tmp.children) && tmp.children.length > 0) {
    for (const tool of tmp.children) {
      if (!/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1,}$/.test(tool.link)) {
        const path = (tmp.link || '') + (tool.link || '')
        const tmp1 = path.match('[^/]+(?!.*/)')
        if (tmp1.length > 0 && widgets[tmp1[0]]) {
          routes.push({
            path: path,
            name: tool.name,
            component: widgets[tmp1[0]],
            meta: {
              requiresAuth: false
            }
          })
        }
      }
    }
  }
}

routes = routes.concat([
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'ISZY 工具集合',
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
    name: '401',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    hidden: true
  }
])

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

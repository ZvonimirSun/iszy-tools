import { createRouter, createWebHistory } from 'vue-router'
import widgets from '@/views'
import tools from '@/assets/tools.json'
import priTools from '@/assets/priTools.json'
import store from '@/store'

let routes = [
  {
    path: '/',
    name: 'ISZY工具集合',
    component: () => import('@/views/Home.vue'),
    meta: {
      requiresAuth: false
    }
  }
]

for (const tmp of tools) {
  if (Array.isArray(tmp.children) && tmp.children.length > 0) {
    for (const tool of tmp.children) {
      if (!/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link)) {
        if (routes.filter(item => (item.name === tool.name)).length === 0) {
          const path = (tmp.link || '') + (tool.link || '')
          const tmp1 = path.match('[^/]+(?!.*/)')
          if (tmp1.length > 0 && widgets[tmp1[0]]) {
            routes.push({
              path: path,
              name: tool.name,
              component: widgets[tmp1[0]],
              meta: {
                requiresAuth: false,
                statistics: tool.statistics !== false
              }
            })
          }
        }
      }
    }
  }
}

for (const tool of priTools) {
  const tmp = tool.link.match('[^/]+(?!.*/)')
  routes.push({
    path: tool.link,
    name: tool.name,
    component: widgets[tmp[0]],
    meta: {
      requiresAuth: false,
      statistics: false
    }
  })
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
    path: '/redirect',
    name: 'redirect',
    beforeEnter (to) {
      if (to.query.url) {
        window.location.href = to.query.url
      }
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    hidden: true
  }
])

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.afterEach((to, from, next) => {
  if (to.name && to.meta.statistics) {
    store.dispatch('favorite/access', { name: to.name, link: to.path })
  }
})

export default router

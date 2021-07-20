import { createRouter, createWebHistory } from 'vue-router'
import widgets from '@/views'
import tools from '@/views/tools.json'
import priTools from '@/views/priTools.json'
import store from '@/store'

let routes = [
  {
    path: '/',
    name: 'ISZY工具集合',
    component: () => import('@/views/Home.vue')
  }
]

// 加入所有工具路由
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
                statistics: tool.statistics !== false
              }
            })
          }
        }
      }
    }
  }
}

// 加入私有工具路由
for (const tool of priTools) {
  const tmp = tool.link.match('[^/]+(?!.*/)')
  routes.push({
    path: tool.link,
    name: tool.name,
    component: widgets[tmp[0]],
    meta: {
      statistics: false
    }
  })
}

// 加入固定页面路由
routes = routes.concat([
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'ISZY 工具集合'
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
    beforeEnter (to, from, next) {
      if (to.query.url) {
        window.location.href = to.query.url
        next()
      } else {
        next('/')
      }
    },
    hidden: true
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

// 路由白名单
const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to, from, next) => {
  // 恢复持久化数据
  await store.restored
  // 权限控制
  const currentUser = store.getters.currentUser
  if (currentUser || whiteList.indexOf(to.path) !== -1 || !to.meta.requiresAuth) {
    document.title = getPageTitle(to.meta.title || to.name)
    if (to.name && to.meta.statistics) {
      await store.dispatch('favorite/access', { name: to.name, link: to.path })
    }
    next()
  } else {
    // other pages that do not have permission to access are redirected to the login page.
    next(`/login?redirect=${to.path}`)
  }
})

function getPageTitle (pageTitle) {
  if (pageTitle && pageTitle !== 'ISZY工具集合') {
    return `${pageTitle} - ISZY工具集合`
  }
  return 'ISZY工具集合'
}

export default router

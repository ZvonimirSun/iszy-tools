import { createRouter, createWebHistory } from 'vue-router'
import tools from '@/views/tools.json'
import store from '@/store'
import { merge } from 'lodash-es'

const vueFiles = import.meta.glob('../views/**/*.vue')

const modules = {}

for (const key in vueFiles) {
  if (!key.includes('/child/')) {
    let tmpKey = key.slice(8, -4)
    let path = '/'
    if (tmpKey.endsWith('index')) {
      tmpKey = tmpKey.slice(0, -6)
    }
    if (tmpKey) {
      const tmp1 = tmpKey.split('/')
      path += tmp1[tmp1.length - 1]
    }
    modules[path] = { path, component: vueFiles[key] }
  }
}

// 加入所有工具路由
for (const tmp of tools) {
  if (Array.isArray(tmp.children) && tmp.children.length > 0) {
    for (const tool of tmp.children) {
      if (!/^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+)+$/.test(tool.link)) {
        const path = (tmp.link || '') + (tool.link || '')
        if (modules[path]) {
          modules[path] = merge(modules[path], {
            name: tool.name,
            meta: {
              statistics: tool.statistics !== false,
              layout: tool.layout,
              type: 'tool'
            }
          })
        }
      }
    }
  }
}

let routes = []

for (const item in modules) {
  routes.push(modules[item])
}

// 加入固定页面路由
routes = routes.concat([
  {
    path: '/logout',
    name: '登出',
    beforeEnter (to, from, next) {
      store.dispatch('user/logout').then(() => {
        next(from.fullPath)
      })
    }
  },
  {
    path: '/redirect',
    beforeEnter (to, from, next) {
      if (to.query.url) {
        window.location.href = to.query.url
      } else {
        next('/')
      }
    }
  },
  {
    path: '/:any(.*)/:catchAll(.*)',
    beforeEnter (to, from, next) {
      if (to?.params?.catchAll) { next(to.params.catchAll) } else { next('/404') }
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
])

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 路由白名单
const whiteList = ['/login', '/logout']

router.beforeEach(async (to, from, next) => {
  // 恢复持久化数据
  await store.restored
  // 权限控制
  const currentUser = store.getters.currentUser
  if (currentUser || whiteList.indexOf(to.path) !== -1 || !to.meta.requiresAuth) {
    document.title = getPageTitle(to.meta.title || to.name)
    if (to.name && to.meta.statistics) {
      await store.commit('user/access', { name: to.name, link: to.path })
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

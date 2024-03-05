import type {
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteLocationRaw,
  RouteRecordRaw,
} from 'vue-router'
import {
  RouterView,
  createRouter,
  createWebHistory,
} from 'vue-router'
import type { DefineComponent } from 'vue'
import { isExternalLink } from '@/utils/common'
import config from '@/config'
import { Home, Offline, Page403, Page404, Redirect } from '@/pages'

const toolsStore = useToolsStore()
const userStore = useUserStore()

const vueFiles = import.meta.glob(['@/tools/**/*.vue', '!@/tools/**/child/**/*']) as Record<string, () => Promise<DefineComponent>>

const routeMap: Record<string, RouteRecordRaw> = {}

for (const key in vueFiles) {
  let tmpKey = key.slice(11, -4)
  if (tmpKey.endsWith('index')) {
    tmpKey = tmpKey.slice(0, -6)
  }

  let path = '/'
  if (tmpKey) {
    const tmp1 = tmpKey.split('/')
    path += tmp1[tmp1.length - 1]
  }

  routeMap[path] = {
    path,
    component: vueFiles[key],
  }
}

let routes: RouteRecordRaw[] = []

// 加入所有工具路由
for (const tool of toolsStore.toolItemsWithInternal) {
  if (!isExternalLink(tool.link)) {
    const {
      name,
      link,
      ...meta
    } = tool
    const path = link || ''
    if (routeMap[path]) {
      if (tool.type !== 'internal') {
        meta.type = 'tool'
      }
      routeMap[path].name = name
      routeMap[path].meta = meta
      routes.push(routeMap[path])
    }
  }
}

const internalRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '首页',
    component: Home,
  },
  {
    path: '/404',
    name: '404',
    component: Page404,
  },
  {
    path: '/403',
    name: '403',
    component: Page403,
  },
  {
    path: '/redirect',
    name: '重定向',
    component: Redirect,
  },
  {
    path: '/offline',
    name: '离线',
    component: Offline,
  },
  {
    path: '/logout',
    name: '登出',
    component: () => h(RouterView),
    beforeEnter: (_, from, next) => {
      userStore.logout().then(() => next(from))
    },
  },
  {
    path: '/:any(.*)/:catchAll(.*)',
    name: 'redirect',
    redirect: (to): RouteLocationRaw => {
      if (to?.params?.catchAll) {
        return {
          path: `/${to.params.catchAll}`,
          query: to.query,
        }
      }
      else {
        return '/404'
      }
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  },
]

// 加入固定页面路由
routes = routes.concat(internalRoutes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext) => {
  userStore.checkToken().then()
  // 在线应用离线直接跳转
  if (to.meta.offline === false && !navigator.onLine) {
    next('/offline')
    return
  }
  // 白名单或无需权限直接跳过
  if (config.whiteList.includes(to.path) || !to.meta.requiresAuth) {
    next()
    return
  }
  // 权限控制
  const isLogged = await userStore.checkToken()
  if (!isLogged) {
    // 未登录跳转
    next(`/login?redirect=${to.path}`)
  }
  else {
    // 检查权限
    const haveAccess = userStore.checkAccess(to.meta.requiresAuth)
    if (haveAccess) {
      // 有权限
      next()
    }
    else {
      // 没有权限
      next('/403')
    }
  }
})

router.afterEach((to, _, failure) => {
  if (!failure) {
    document.title = getPageTitle(to.meta.title || to.name?.toString())
    if (to.name && to.meta.type === 'tool') {
      let name: string
      if (typeof to.name === 'string') {
        name = to.name
      }
      else {
        name = to.name.toString()
      }
      toolsStore.access({ name, link: to.path })
    }
  }

  function getPageTitle(pageTitle?: string) {
    if (pageTitle && pageTitle !== config.zhName) {
      return `${pageTitle} - ${config.zhName}`
    }
    return config.zhName
  }
})

export default router

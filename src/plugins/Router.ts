import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  RouteRecordRaw,
  RouterOptions
} from 'vue-router'
import { merge } from 'lodash-es'
import type { DefineComponent } from 'vue'
import { isExternalLink } from '@/utils/common'
import config from '@/config'
import { Home, Offline, Page404, Page403, Redirect } from '@/pages'

const toolsStore = useToolsStore()

const vueFiles = import.meta.glob('../views/**/*.vue') as Record<string, () => Promise<DefineComponent>>

const modules: Record<string, {
  path: string,
  component: () => Promise<DefineComponent> | DefineComponent
}> = {}

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
    modules[path] = {
      path,
      component: () => defineAsyncComponent({
        loader: vueFiles[key],
        delay: 200,
        timeout: 3000,
        errorComponent: Offline
      })
    }
  }
}

let routes: RouteRecordRaw[] = []

// 加入所有工具路由
for (const tool of toolsStore.toolItemsWithInternal) {
  if (!isExternalLink(tool.link)) {
    const {
      name, link, ...meta
    } = tool
    const path = link || ''
    if (modules[path]) {
      if (tool.type !== 'internal') {
        modules[path] = merge(modules[path], {
          name,
          meta: {
            ...meta,
            type: 'tool'
          }
        })
      } else {
        modules[path] = merge(modules[path], {
          name,
          meta
        })
      }
      routes.push(modules[path])
    }
  }
}

// 加入固定页面路由
routes = routes.concat([
  {
    path: '/',
    name: '首页',
    component: Home
  },
  {
    path: '/404',
    name: '404',
    component: Page404
  },
  {
    path: '/403',
    name: '403',
    component: Page403
  },
  {
    path: '/redirect',
    name: '重定向',
    component: Redirect
  },
  {
    path: '/offline',
    name: '离线',
    component: Offline
  },
  {
    path: '/logout',
    name: '登出'
  },
  {
    path: '/:any(.*)/:catchAll(.*)',
    name: 'redirect',
    beforeEnter (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
      if (to?.params?.catchAll) {
        next(to.params.catchAll as string)
      } else {
        next('/404')
      }
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
] as RouteRecordRaw[])

const options: RouterOptions = {
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
}

const router = createRouter(options)

// 路由白名单
const whiteList = ['/login', '/logout']

router.beforeEach(checkAuth)

async function checkAuth (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  let _to = to
  let redirected = false
  if (to.path === '/logout') {
    redirected = true
    _to = from
    if (navigator.onLine) {
      await useUserStore().logout()
    }
  }
  // 权限控制
  const isLogged = await useUserStore().checkToken()
  if (_to.meta.offline === false && !navigator.onLine) {
    next('/offline')
    return
  }
  if (whiteList.indexOf(_to.path) !== -1 || !_to.meta.requiresAuth) {
    goNext()
  } else if (!isLogged) {
    // other pages that do not have permission to access are redirected to the login page.
    next(`/login?redirect=${_to.path}`)
  } else {
    const haveAccess = useUserStore().checkAccess(_to.meta.requiresAuth)
    if (haveAccess) {
      goNext()
    } else {
      next('/403')
    }
  }

  function goNext () {
    document.title = getPageTitle(_to.meta.title || _to.name?.toString())
    if (_to.name && _to.meta.statistics !== false) {
      let name:string
      if (typeof _to.name === 'string') {
        name = _to.name
      } else {
        name = _to.name.toString()
      }
      toolsStore.access({ name, link: _to.path })
    }
    if (redirected) {
      next(_to.path)
    } else {
      next()
    }
  }
}

function getPageTitle (pageTitle: string | undefined | null) {
  if (pageTitle && pageTitle !== config.zhName) {
    return `${pageTitle} - ${config.zhName}`
  }
  return config.zhName
}

export default router

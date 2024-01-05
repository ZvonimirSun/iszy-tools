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
    modules[path] = { path, component: vueFiles[key] }
  }
}

let routes: RouteRecordRaw[] = []

// 加入所有工具路由
for (const tmp of toolsStore.toolMenusWithInternal) {
  if (Array.isArray(tmp.children) && tmp.children.length > 0) {
    for (const tool of tmp.children) {
      if (!/^(http(s)?:\/\/)\w+\S+(\.\S+)+$/.test(tool.link)) {
        const path = (tmp.link || '') + (tool.link || '')
        if (modules[path]) {
          if (tool.type !== 'internal') {
            modules[path] = merge(modules[path], {
              name: tool.name,
              meta: {
                statistics: tool.statistics !== false,
                layout: tool.layout,
                type: 'tool',
                requiresAuth: tool.requiresAuth
              }
            })
          } else {
            modules[path] = merge(modules[path], {
              name: tool.name,
              meta: {
                requiresAuth: tool.requiresAuth
              }
            })
          }
          routes.push(modules[path])
        }
      }
    }
  }
}

// 加入固定页面路由
routes = routes.concat([
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
  if (isLogged || whiteList.indexOf(_to.path) !== -1 || !_to.meta.requiresAuth) {
    document.title = getPageTitle(_to.meta.title || _to.name?.toString())
    if (_to.name && _to.meta.statistics) {
      let name:string
      if (typeof _to.name === 'string') {
        name = _to.name
      } else {
        name = _to.name.toString()
      }
      useUserStore().access({ name, link: _to.path })
    }
    if (redirected) {
      next(_to.path)
    } else {
      next()
    }
  } else {
    // other pages that do not have permission to access are redirected to the login page.
    next(`/login?redirect=${_to.path}`)
  }
}

function getPageTitle (pageTitle: string | undefined | null) {
  if (pageTitle && pageTitle !== 'ISZY工具集合') {
    return `${pageTitle} - ISZY工具集合`
  }
  return 'ISZY工具集合'
}

export default router

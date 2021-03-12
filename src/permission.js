import router from '@/router'
import store from '@/store'
import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async (to, from, next) => {
  document.title = getPageTitle(to.name || to.meta.title)
  const currentUser = store.getters.currentUser
  if (currentUser) {
    next()
    // if (to.path === '/login') {
    //   // if is logged in, redirect to the home page
    //   next({ path: '/' })
    // } else {
    //   next()
    // }
  } else {
    if (whiteList.indexOf(to.path) !== -1 || !to.meta.requiresAuth) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})

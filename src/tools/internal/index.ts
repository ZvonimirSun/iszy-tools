import type { ToolItem } from '@/types/tool'

export const internalTools: ToolItem[] = [
  {
    name: '登录',
    link: '/login',
    type: 'internal',
  },
  {
    name: '注册',
    link: '/register',
    type: 'internal',
  },
  {
    parent: '/settings',
    name: '用户管理',
    link: '/userManager',
    requiresAuth: {
      roles: ['superadmin'],
    },
  },
  {
    parent: '/settings',
    name: '个人中心',
    link: '/personalCenter',
    requiresAuth: true,
  },
]

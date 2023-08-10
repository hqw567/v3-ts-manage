import { nanoid } from 'nanoid'
import type { RouteRecordRaw } from 'vue-router'

export const baseRoutes: any[] = [
  {
    id: nanoid(),
    isRouter: true,

    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      isMenu: true,
      name: '首页',
      icon: 'House',
    },
  },
  {
    id: nanoid(),
    isRouter: true,

    path: '/ai-creations',
    component: () => import('@/views/ai-creations/index.vue'),
    meta: {
      name: 'AI创作',
      icon: 'EditPen',
    },
  },
  {
    id: nanoid(),
    isRouter: true,
    isMenu: true,
    path: '/admin',
    component: () => import('@/views/admin/index.vue'),
    meta: {
      isMenu: true,
      name: '后台管理员',
      icon: 'Tickets',
    },
  },
  {
    id: nanoid(),
    isRouter: true,

    path: '/users',
    component: () => import('@/views/users/index.vue'),
    meta: {
      name: '用户列表',
      icon: 'User',
    },
  },
  {
    id: nanoid(),
    isRouter: true,
    isMenu: true,
    path: '/member-card',
    component: () => import('@/views/member-card/index.vue'),
    meta: {
      isMenu: true,
      name: '会员卡',
      icon: 'Postcard',
    },
  },
  {
    id: nanoid(),
    isRouter: true,

    path: '/manage-orders',
    component: () => import('@/views/manage-orders/index.vue'),
    meta: {
      name: '订单管理',
      icon: 'FolderOpened',
    },
  },
  {
    id: nanoid(),
    isRouter: true,
    isMenu: true,
    path: 'statistics',
    redirect: 'statistics/api-usage',
    meta: {
      isMenu: true,
      name: '数据统计',
      icon: 'FolderOpened',
    },
    children: [
      {
        id: nanoid(),
        isRouter: true,

        path: '/statistics/api-usage',
        component: () => import('@/views/statistics/api-usage/index.vue'),
        meta: {
          name: '接口使用情况',
        },
      },
      {
        id: nanoid(),
        isRouter: true,

        path: '/statistics/traffic',
        component: () => import('@/views/statistics/traffic/index.vue'),
        meta: {
          name: '浏览量',
        },
      },
    ],
  },
  {
    id: nanoid(),
    isRouter: true,

    path: '/money-flow',
    component: () => import('@/views/money-flow/index.vue'),
    meta: {
      isMenu: true,
      name: '财务流水',
      icon: 'Money',
    },
  },
  {
    id: nanoid(),
    isRouter: true,

    path: '/settings',
    redirect: 'llm-api',
    meta: {
      isMenu: true,
      name: '基本设置',
      icon: 'Setting',
    },
    children: [
      {
        id: nanoid(),
        isRouter: true,
        path: '/settings/llm-api',
        component: () => import('@/views/settings/llm-api/index.vue'),
        meta: {
          name: '大模型接口',
        },
      },
      {
        id: nanoid(),
        isRouter: true,
        path: '/settings/guide',
        component: () => import('@/views/settings/guide/index.vue'),
        meta: {
          name: '默认引导',
        },
      },
      {
        id: nanoid(),
        isRouter: true,
        path: '/settings/pay-settings',
        component: () => import('@/views/settings/pay-settings/index.vue'),
        meta: {
          name: '支付设置',
        },
      },
      {
        id: nanoid(),
        isRouter: true,
        path: '/settings/faq',
        component: () => import('@/views/settings/faq/index.vue'),
        meta: {
          name: '常见问题',
        },
      },
      {
        id: nanoid(),
        isRouter: true,
        path: '/settings/terms',
        component: () => import('@/views/settings/terms/index.vue'),
        meta: {
          name: '用户协议',
        },
      },
      {
        id: nanoid(),
        isRouter: true,
        path: '/settings/about',
        component: () => import('@/views/settings/about/index.vue'),
        meta: {
          name: '关于我们',
        },
      },
    ],
  },
]

export const buildMenus = (routes: RouteRecordRaw[]): RouteRecordRaw[] => {
  return routes.reduce((menus: RouteRecordRaw[], route: RouteRecordRaw) => {
    if (route?.meta?.isMenu) {
      menus.push(route)
    }

    if (route.children) {
      menus.push(...buildMenus(route.children))
    }

    return menus
  }, [])
}

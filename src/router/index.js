import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  //油气田按日填报新增
  {
    path: '/dayAdd',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/dayAdd',
        component: () => import('@/views/oilgasday/dayAdd')
      }
    ]
  },
  {
    path: '/monthAdd',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/monthAdd',
        component: () => import('@/views/youqitian/monthAdd')
      }
    ]
  },

   /* {
      path: '/',
      component: Layout,
      redirect: 'noRedirect',
      children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '煤气田填报', icon: 'meiqi' }
      }]
    },*/

  /*{
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
*/
  /*{
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },*/

  /* {
     path: '/nested',
     component: Layout,
     redirect: '/nested/menu1',
     name: 'Nested',
     meta: {
       title: 'Nested',
       icon: 'nested'
     },
     children: [
       {
         path: 'menu1',
         component: () => import('@/views/nested/menu1/index'), // Parent router-view
         name: 'Menu1',
         meta: { title: 'Menu1' },
         children: [
           {
             path: 'menu1-1',
             component: () => import('@/views/nested/menu1/menu1-1'),
             name: 'Menu1-1',
             meta: { title: 'Menu1-1' }
           },
           {
             path: 'menu1-2',
             component: () => import('@/views/nested/menu1/menu1-2'),
             name: 'Menu1-2',
             meta: { title: 'Menu1-2' },
             children: [
               {
                 path: 'menu1-2-1',
                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                 name: 'Menu1-2-1',
                 meta: { title: 'Menu1-2-1' }
               },
               {
                 path: 'menu1-2-2',
                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                 name: 'Menu1-2-2',
                 meta: { title: 'Menu1-2-2' }
               }
             ]
           },
           {
             path: 'menu1-3',
             component: () => import('@/views/nested/menu1/menu1-3'),
             name: 'Menu1-3',
             meta: { title: 'Menu1-3' }
           }
         ]
       },
       {
         path: 'menu2',
         component: () => import('@/views/nested/menu2/index'),
         name: 'Menu2',
         meta: { title: 'menu2' }
       }
     ]
   },

   {
     path: 'external-link',
     component: Layout,
     children: [
       {
         path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
         meta: { title: 'External Link', icon: 'link' }
       }
     ]
   },*/

    {
      path: '/guotuziyuan',
      component: Layout,
      children: [
        {
          path: 'guotuziyuan',
          name: 'guotuziyuan',
          component: () => import('@/views/guotuziyuan/index'),
          meta: { title: '国土资源厅按年填报', icon: 'dashboard' }
        }
      ]
    },
    {
      path: '/meizhiqi',
      component: Layout,
      meta: { title: '煤制气填报', icon: 'dashboard' },
      children: [
        {
          path: 'gasMonth',
          name: 'gasMonth',
          component: () => import('@/views/meizhiqi/gasFieldMonth'),
          meta: { title: '按月填报', icon: 'dashboard' }
        },
        {
          path: 'gasDay',
          name: 'gasDay',
          component: () => import('@/views/meizhiqi/gasFieldDay'),
          meta: { title: '企业信息填报', icon: 'dashboard' }
        }
      ]
    },
    {
      path: '/meizhiyou',
      component: Layout,
      meta: { title: '煤制油填报', icon: 'dashboard' },
      children: [
        {
          path: 'gasMonth',
          name: 'gasMonth',
          component: () => import('@/views/meizhiyou/gasFieldMonth'),
          meta: { title: '按月填报', icon: 'dashboard' }
        },
        {
          path: 'gasDay',
          name: 'gasDay',
          component: () => import('@/views/meizhiyou/gasFieldDay'),
          meta: { title: '企业信息填报', icon: 'dashboard' }
        }
      ]
    },
    {
      path: '/chenpinyou',
      component: Layout,
      meta: { title: '成品油销售企业填报', icon: 'dashboard' },
      children: [
        {
          path: 'chenpinyou1',
          name: 'chenpinyou1',
          component: () => import('@/views/chenpinyou/chenpinyou1'),
          meta: { title: '库存按月填报', icon: 'dashboard' }
        },
        {
          path: 'chenpinyou2',
          name: 'chenpinyou2',
          component: () => import('@/views/chenpinyou/chenpinyou2'),
          meta: { title: '销售按月填报', icon: 'dashboard' }
        },
        {
          path: 'chenpinyou3',
          name: 'chenpinyou3',
          component: () => import('@/views/chenpinyou/chenpinyou3'),
          meta: { title: '企业信息填报', icon: 'dashboard' }
        }
      ]
    },
    {
      path: '/lianyou',
      component: Layout,
      meta: { title: '炼油厂填报', icon: 'dashboard' },
      children: [
        {
          path: 'gasFieldMonth',
          name: 'gasFieldMonth',
          component: () => import('@/views/lianyou/gasFieldMonth'),
          meta: { title: '按月填报', icon: 'dashboard' }
        },
        {
          path: 'gasFieldDay',
          name: 'gasFieldDay',
          component: () => import('@/views/lianyou/gasFieldDay'),
          meta: { title: '企业信息填报', icon: 'dashboard' }
        }
      ]
    },
    {
      path: '/guandao',
      component: Layout,
      meta: { title: '管道企业填报', icon: 'dashboard' },
      children: [
        {
          path: 'gasFieldDay',
          name: 'gasFieldDay',
          component: () => import('@/views/guandao/gasFieldDay'),
          meta: { title: '按日填报', icon: 'dashboard' }
        },
        {
          path: 'gasFieldMonth',
          name: 'gasFieldMonth',
          component: () => import('@/views/guandao/gasFieldMonth'),
          meta: { title: '管道信息按月填报', icon: 'dashboard' }
        }
      ]
    },
    {
      path: '/ranqi',
      component: Layout,
      meta: { title: '城市燃气企业填报', icon: 'dashboard' },
      children: [
        {
          path: 'ranqi1',
          name: 'ranqi1',
          component: () => import('@/views/ranqi/ranqi1'),
          meta: { title: '按日填报', icon: 'dashboard' }
        },
        {
          path: 'ranqi2',
          name: 'ranqi2',
          component: () => import('@/views/ranqi/ranqi2'),
          meta: { title: '调峰按日填报', icon: 'dashboard' }
        },
        {
          path: 'ranqi3',
          name: 'ranqi3',
          component: () => import('@/views/ranqi/ranqi3'),
          meta: { title: '按年填报', icon: 'dashboard' }
        }
      ]
    },

    {
      path: '/nengyuanju',
      component: Layout,
      children: [{
        path: 'nengyuanju',
        name: 'nengyuanju',
        component: () => import('@/views/nengyuanju/gasFieldMonth'),
        meta: { title: '能源局按年填报', icon: 'dashboard' }
      }]
    },
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

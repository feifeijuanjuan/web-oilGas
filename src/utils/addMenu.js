import Layout from '@/layout'
import router from '@/router'
import store from '@/store'

/*
export const initMenu = (() => {
  let menu = [
    {
      path: '/',
      component: Layout,
      redirect: 'dashboard',
      meta: {
        title: '煤气田企业填报',
        icon: 'nested'
      },
      children: [{
        path: 'gasFieldDay',
        name: 'gasFieldDay',
        component: () => import('@/views/meiqitian/gasFieldDay'),
        meta: { title: '按日填报', icon: 'meiqi' }
      },
        {
          path: 'gasFieldMonth',
          name: 'gasFieldMonth',
          component: () => import('@/views/meiqitian/gasFieldMonth'),
          meta: { title: '按月填报', icon: 'meiqi' }
        }
      ]
    },
    {
      path: '/lianyou',
      component: Layout,
      children: [{
        path: 'lianyou',
        name: 'lianyou',
        component: () => import('@/views/lianyou/index'),
        meta: { title: '炼油厂填报', icon: 'dashboard' }
      }]
    },
    {
      path: '/meizhiyou',
      component: Layout,
      children: [{
        path: 'meizhiyou',
        name: 'meizhiyou',
        component: () => import('@/views/meizhiyou/index'),
        meta: { title: '煤制油填报', icon: 'dashboard' }
      }]
    },
    {
      path: '/meizhiqi',
      component: Layout,
      children: [{
        path: 'meizhiqi',
        name: 'meizhiqi',
        component: () => import('@/views/meizhiqi/index'),
        meta: { title: '煤制气填报', icon: 'dashboard' }
      }]
    },
    {
      path: '/ranqi',
      component: Layout,
      children: [{
        path: 'ranqi',
        name: 'ranqi',
        component: () => import('@/views/ranqi/index'),
        meta: { title: '城市燃气填报', icon: 'dashboard' }
      }]
    },
    {
      path: '/chenpinyou',
      component: Layout,
      children: [{
        path: 'chenpinyou',
        name: 'chenpinyou',
        component: () => import('@/views/chenpinyou/index'),
        meta: { title: '成品油销售填报', icon: 'dashboard' }
      }]
    },
    {
      path: '/guandao',
      component: Layout,
      children: [{
        path: 'guandao',
        name: 'guandao',
        component: () => import('@/views/guandao/index'),
        meta: { title: '管道公司填报', icon: 'dashboard' }
      }]
    },
    {
      path: '/mengshi',
      component: Layout,
      children: [{
        path: 'mengshi',
        name: 'mengshi',
        component: () => import('@/views/mengshi/index'),
        meta: { title: '盟市填报', icon: 'dashboard' }
      }]
    }
  ]
  // 最后添加
  const unfound = { path: '*', redirect: '/404', hidden: true }
  menu.push(unfound)
  var router1 = router.options.routes
  router.addRoutes(menu) //动态挂载路由
  router.options.routes = router1.concat(menu) //路由合并
  // 把格式化路由放进VUEX
  store.dispatch('user/addRouter', menu).then(data => {
  })
})
*/

import Layout from '@/layout'
import router from '@/router'
import store from '@/store'

export const initMenu = ((menu) => {
  let filterMenu = handleMenu(menu)
  const unfound = { path: '*', redirect: '/404', hidden: true }
  filterMenu.push(unfound)
  var router1 = router.options.routes
  router.addRoutes(filterMenu) //动态挂载路由
  router.options.routes = router1.concat(filterMenu) //路由合并
  // 把格式化路由放进VUEX
  store.dispatch('user/addRouter', filterMenu).then(data => {
  })
})

export const handleMenu = ((menu) => {
  const menuList = []
  menu.forEach((item, index) => {
    if (item.children.length === 0) {
      menuList.push(
        {
          path: item.href,
          component: Layout,
          children: [{
            path: item.href,
            name: item.name,
            component: resolve => require([`@/views${item.href}`], resolve),
            meta: { title: item.name, icon: 'menu' }
          }
          ]
        }
      )
    } else {
      const childList = []
      item.children.forEach((i, idx) => {
        childList.push(
          {
            path: i.href,
            name: i.name,
            component: resolve => require([`@/views${i.href}`], resolve),
            meta: { title: i.name, icon: 'circle' }
          }
        )
      })
      menuList.push({
        path: item.href,
        component: Layout,
        meta: { title: item.name, icon: 'menu' },
        children: childList
      })
    }
  })
  return menuList
})

export const filterMenu = ((menu) => {
  const menuList = []
  menu.forEach((item, index) => {
    if (item.children.length === 0) {
      menuList.push(
        {
          id: item.id,
          menuId: item.menuId,
          label: item.name
        }
      )
    } else {
      const childList = []
      item.children.forEach((i, idx) => {
        childList.push(
          {
            id: i.id,
            label: i.name,
            menuId: i.menuId
          }
        )
      })
      menuList.push({
        id: item.id,
        label: item.name,
        menuId: item.menuId,
        children: childList
      })
    }
  })
  return menuList
})

export const orgTree = ((menu) => {
  const menuList = []
  menu.forEach((item, index) => {
    if (item.children.length === 0) {
      menuList.push(
        {
          id: item.id,
          orgId: item.orgId,
          label: item.name
        }
      )
    } else {
      const childList = []
      item.children.forEach((i, idx) => {
        childList.push(
          {
            id: i.id,
            orgId: i.orgId,
            label: i.name
          }
        )
      })
      menuList.push({
        id: item.id,
        label: item.name,
        orgId: item.orgId,
        children: childList
      })
    }
  })
  return menuList
})

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

export const filterMenu = ((menu) => {
  const result = []
  const mItem = {
    path: '',
    meta: { title: '', icon: '' },
    component: Layout,
    children: []
  }
  const mItemChild = {
    path: '',
    name: '',
    meta: { title: '', icon: '' },
    component: (() => {

    })
  }
  menu.forEach(function(item) {
    mItem.path = item.href
    mItem.meta.title = item.name
    mItem.meta.icon = item.icon
    item.children.forEach(function(cItem) {
      mItemChild.path = cItem.href
      mItemChild.name = cItem.href
      mItemChild.meta.title = cItem.name
      mItemChild.meta.icon = cItem.icon
      mItemChild.component = (() => {
        import('@/views' + item.href + '/' + cItem.href)
      })
      mItem.children.push(mItemChild)
    })

    result.push(mItem)
  })
  return result
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
            meta: { title: item.name, icon: item.icon }
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
            meta: { title: i.name, icon: i.icon }
          }
        )
      })
      menuList.push({
        path: item.href,
        component: Layout,
        meta: { title: item.name, icon: 'dashboard' },
        children: childList
      })
    }
  })
  return menuList
})

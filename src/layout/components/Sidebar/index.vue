<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import store from '@/store'
import { userList } from '@/api/user'
import { initMenu } from '@/utils/addMenu'
import router from '@/router'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    /*  userList().then(res => {
         if (res.body) {
           initMenu(res.body)
         }
       })*/
    routes() {
      // return this.$router.options.routes
      return store.getters.setRouters
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      if (path === '/dayAdd') {
        return '/oilgasday/list'
      } else if (path === '/monthAdd') {
        return '/oilgasmonth/gasList'
      } else if (path === '/oilAdd') {
        return '/oilgasmonth/oilList'
      } else if (path === '/guotuGasAdd') {
        return '/guotu/gasList'
      } else if (path === '/guotuOilAdd') {
        return '/guotu/oilList'
      } else if (path === '/coalgasAdd') {
        return '/coalgas/list'
      } else if (path === '/coalgasEnterpriseAdd') {
        return '/enterprise/coalgasList'
      } else if (path === '/coaloilEnterpriseAdd') {
        return '/enterprise/coaloilList'
      } else if (path === '/lianchangAdd') {
        return '/enterprise/lianchangList'
      } else if (path === '/coaloilAdd') {
        return '/coaloil/list'
      } else if (path === '/chengpinyoudepotAdd') {
        return '/chengpinyoudepot/list'
      } else if (path === '/chengpinyousaleAdd') {
        return '/chengpinyousale/list'
      } else if (path === '/refineryAdd') {
        return '/refinery/list'
      } else if (path === '/crudeAdd') {
        return '/pipelineday/crudeList'
      } else if (path === '/gasAdd') {
        return '/pipelineday/gasList'
      } else if (path === '/productAdd') {
        return '/pipelineday/productList'
      } else if (path === '/pipelinemonthAdd') {
        return '/pipelinemonth/list'
      } else if (path === '/citygasdayAdd') {
        return '/citygasday/list'
      } else if (path === '/citygasyearAdd') {
        return '/citygasyear/list'
      } else if (path === '/citygaspeekdayAdd') {
        return '/citygaspeekday/list'
      } else if (path === '/nengyuanjuyearAdd') {
        return '/nengyuanjuyear/list'
      } else if (path === '/emergencyAdd') {
        return '/emergency/list'
      } else if (path === '/gasreleaseAdd') {
        return '/gasrelease/list'
      } else {
        return path
      }
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

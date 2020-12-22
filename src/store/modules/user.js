import { login, logout, userList } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import Layout from '@/layout'
import { initMenu } from '@/utils/addMenu'
import { MessageBox, Message } from 'element-ui'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    userId: '',
    setRouters: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_USERID: (state, userId) => {
    state.userId = userId
  },
  SET_ROUTER: (state, setRouters) => {
    state.setRouters = setRouters
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        if (response.code === 0) {
          const { sid, user } = response.body
          commit('SET_TOKEN', sid)
          commit('SET_NAME', user.name)
          commit('SET_USERID', user.userId)
          setToken(sid)
          userList().then(res => {
            initMenu(res.body)
            router.push({ path: this.redirect || router.options.routes[2].children.length===1?router.options.routes[2].path:router.options.routes[2].path+router.options.routes[2].children(0).path })
            this.loading = false
          })
        } else {
          Message({
            message: '用户名或密码错误',
            type: 'error',
            duration: 5 * 1000
          })
        }
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  },
  addRouter({ commit }, menus) {
    return new Promise((resolve, reject) => {
      commit('SET_ROUTER', menus)
      resolve(menus)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}


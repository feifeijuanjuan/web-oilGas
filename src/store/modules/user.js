import { login, logout } from '@/api/user'
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
          console.log(sid)
          // initMenu()
          commit('SET_TOKEN', sid)
          commit('SET_NAME', user.name)
          commit('SET_USERID', user.userId)
          setToken(sid)
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

  // get user info
  /*getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      let param = { token: state.token }
      getInfo(param).then(response => {
        const data = response

        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { name, avatar } = data
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },*/

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


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//创建一个store仓库
const store = new Vuex.Store({
//state用来存放数据的对象
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, token) {
      state.Authorization = token;
      localStorage.setItem('Authorization', token);
    }
  }
})

export default store;

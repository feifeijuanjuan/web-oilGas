import axios from 'axios';
import QS from 'qs';
import {Message} from 'element-ui'
import store from '@/store'
import router from '../router';
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 200000, // request timeout
  withCredentials:false,
  crossDomain:false
})
// 请求头
service.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
/**
 * 设置相应拦截器
 */
// request interceptor
service.interceptors.request.use(
  config => {
    if (store.state.Authorization) {
      config.headers['token'] = store.state.Authorization;
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
);
// response interceptor
service.interceptors.response.use(
  response => {
    if (response.data.code === 401) {
      //token过期失效，跳转登录页
      Message.error('token失效，请重新登陆!');
      localStorage.removeItem('Authorization');
      router.push('/login')
    }
    return response
  },
  error => {
    Message.error('请求失败，请检查网络!');
  }
);

// 封装get方法
export function get(url, params) {
  return new Promise((resolve, reject) => {
    if(!params){
      params = {
        timestamp: new Date().getTime()
      }
    }else {
      Object.assign(params, {
        timestamp: new Date().getTime()
      })
    }
    service.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}
// post方法封装
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, params, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}


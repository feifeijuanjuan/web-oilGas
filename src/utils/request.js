import axios from 'axios'
import Qs from 'qs'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
  // baseURL: 'http://210.73.216.32:8081/oilgas-background/',
  // baseURL: 'http://t95vuv.natappfree.cc/oilgas-background',
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  crossDomain: true
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['authSid'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
/*service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 0) {
      Message({
        // message: res.message || '网络请求失败',
        message: '网络请求失败',
        type: 'error',
        duration: 5 * 1000
      })

    /!*  if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))*!/
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      // message: error.message,
      message: '网络请求失败',
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)*/

// 封装get方法
export function get(url, params) {
  return new Promise((resolve, reject) => {
    if (!params) {
      params = {
        timestamp: new Date().getTime()
      }
    } else {
      Object.assign(params, {
        timestamp: new Date().getTime()
      })
    }
    service.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * 以RequestParams的形式传递参数
 * @param {} url
 * @param {*} data
 */
export function postParams(url, data) {
  return new Promise((resolve, reject) => {
    service({
      method: 'post',
      url: url,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: QS.stringify(data)
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
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
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export function deletefn(url, params) {
  return new Promise((resolve, reject) => {
    service.delete(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    })
      .catch(err => {
        reject(err.data)
        Message({ message: '加载失败', type: 'error' })
      })
  })
}

export default service

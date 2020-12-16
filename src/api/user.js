import request from '@/utils/request'
import {get, post} from '@/utils/request';
// export function login(data) {
//   return request({
//     url: '/vue-admin-template/user/login',
//     method: 'post',
//     data
//   })
// }
export const login = params => post(`/vue-admin-template/user/login`, params)
// export const getInfo = params => get(`/vue-admin-template/user/info`, params)
export const getInfo = params => get(`/vue-admin-template/user/info`, params)
// export const logout = params => post(`/vue-admin-template/user/logout`, params);
/*export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}*/

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

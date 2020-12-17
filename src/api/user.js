import request from '@/utils/request'
import { get, post } from '@/utils/request'

export const login = params => post(`/vue-admin-template/user/login`, params)
export const getInfo = params => get(`/vue-admin-template/user/info`, params)
export const logout = () => post(`/vue-admin-template/user/logout`)


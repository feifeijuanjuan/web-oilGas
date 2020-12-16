// 引入axios封装
import {get, post, imgAxios, deletefn} from './http';
// 登录
export const login = params => post(`/vue-admin-template/user/login`, params);
// 退出登录
export const logout = () => post(`/user/logout`);
// 密码修改
export const changePwd = params => post(`/user/changePwd`, params);

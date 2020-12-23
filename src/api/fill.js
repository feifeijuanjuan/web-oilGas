import { get, post, deletefn } from '@/utils/request'

// 油气田企业按日填报
// 查询
export const list = params => post(`/oilgasday/list`, params)
// 保存
export const save = params => post(`/oilgasday/save`, params)
// 更新
export const update = params => get(`/oilgasday/select/${params}`)
// 删除
export const deleteList = params => deletefn(`/oilgasday/delete/${params}`)

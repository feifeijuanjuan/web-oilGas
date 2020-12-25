import { get, post, deletefn } from '@/utils/request'

// 油气田企业按日填报
// 查询
export const list = params => post(`/oilgasday/list`, params)
// 保存
export const save = params => post(`/oilgasday/save`, params)
// 更新
export const update = params => get(`/oilgasday/select/${params}`)
// 删除
// export const deleteList = params => deletefn(`/oilgasday/delete/${params}`)
export const oilgasdaySwitchs = params => post(`/oilgasday/switchs`, params)

// 油气田企业按月填报
// 查询
export const oilgasmonthList = params => post('/oilgasmonth/list', params)
// 保存
export const oilgasmonthSave = params => post('/oilgasmonth/save', params)
// 更新
export const oilgasmonthUpdate = params => get(`/oilgasmonth/select/${params}`)
// 删除
export const oilgasmonthSwitchs = params => post(`/oilgasmonth/switchs`, params)

// 国土资源厅按年填报
// 查询
export const guotuYearList = params => post('/guotu/yearList', params)
// 保存
export const guotuSave = params => post('/guotu/save', params)
// 更新
export const guotuUpdate = params => get(`/guotu/select/${params}`)
// 删除
export const guotuSwitchs = params => post(`/guotu/switchs`, params)

// 煤制气企业按月填报
// 查询
export const coalgasList = params => post('/coalgas/list', params)
// 保存
export const coalgasSave = params => post('/coalgas/save', params)
// 更新
export const coalgasUpdate = params => get(`/coalgas/select/${params}`)
// 删除
export const coalgasSwitchs = params => post(`/coalgas/switchs`, params)

// 企业信息填报接口
// 查询
export const enterpriseList = params => post('/enterprise/list', params)
// 保存
export const enterpriseSave = params => post('/enterprise/save', params)
// 更新
export const enterpriseUpdate = params => get(`/enterprise/select/${params}`)
// 删除
export const enterpriseSwitchs = params => post(`/enterprise/switchs`, params)

// 煤制油填报接口
// 查询
export const coaloilList = params => post('/coaloil/list', params)
// 保存
export const coaloilSave = params => post('/coaloil/save', params)
// 更新
export const coaloilUpdate = params => get(`/coaloil/select/${params}`)
// 删除
export const coaloilSwitchs = params => post(`/coaloil/switchs`, params)

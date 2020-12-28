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

// 成品油销售企业销售填报
// 查询
export const chengpinyousalelList = params => post('/chengpinyousale/list', params)
// 保存
export const chengpinyousalelSave = params => post('/chengpinyousale/save', params)
// 更新
export const chengpinyousaleUpdate = params => get(`/chengpinyousale/select/${params}`)
// 删除
export const chengpinyousaleSwitchs = params => post(`/chengpinyousale/switchs`, params)

// 成品油销售企业库存填报
// 查询
export const chengpinyoudepotlList = params => post('/chengpinyoudepot/list', params)
// 保存
export const chengpinyoudepotSave = params => post('/chengpinyoudepot/save', params)
// 更新
export const chengpinyoudepotUpdate = params => get(`/chengpinyoudepot/select/${params}`)
// 删除
export const chengpinyoudepotSwitchs = params => post(`/chengpinyoudepot/switchs`, params)

// 炼油厂企业填报
// 查询
export const refinerylList = params => post('/refinery/list', params)
// 保存
export const refinerySave = params => post('/refinery/save', params)
// 更新
export const refineryUpdate = params => get(`/refinery/select/${params}`)
// 删除
export const refinerySwitchs = params => post(`/refinery/switchs`, params)

// 管道企业按日填报
// 查询
export const pipelinedaylList = params => post('/pipelineday/list', params)
// 保存
export const pipelinedaysave = params => post('/pipelineday/save', params)
// 更新
export const pipelinedayUpdate = params => get(`/pipelineday/select/${params}`)
// 删除
export const pipelinedaySwitchs = params => post(`/pipelineday/switchs`, params)

// 管道企业管道信息填报
// 查询
export const pipelinemonthlList = params => post('/pipelinemonth/list', params)
// 保存
export const pipelinemonthsave = params => post('/pipelinemonth/save', params)
// 更新
export const pipelinemonthUpdate = params => get(`/pipelinemonth/select/${params}`)
// 删除
export const pipelinemonthSwitchs = params => post(`/pipelinemonth/switchs`, params)

// 城市燃气企业按年填报
// 查询
export const citygasyearlList = params => post('/citygasyear/list', params)
// 保存
export const citygasyearhsave = params => post('/citygasyear/save', params)
// 更新
export const citygasyearUpdate = params => get(`/citygasyear/select/${params}`)
// 删除
export const citygasyearSwitchs = params => post(`/citygasyear/switchs`, params)

// 城市燃气企业按日填报
// 查询
export const citygasdaylList = params => post('/citygasday/list', params)
// 保存
export const citygasdayrhsave = params => post('/citygasday/save', params)
// 更新
export const citygasdayUpdate = params => get(`/citygasday/select/${params}`)
// 删除
export const citygasdaySwitchs = params => post(`/citygasday/switchs`, params)

// 城燃企业按日调峰填报
// 查询
export const citygaspeekdaylList = params => post('/citygaspeekday/list', params)
// 保存
export const citygaspeekdaysave = params => post('/citygaspeekday/save', params)
// 更新
export const citygaspeekdayUpdate = params => get(`/citygaspeekday/select/${params}`)
// 删除
export const citygaspeekdaySwitchs = params => post(`/citygaspeekday/switchs`, params)

// 能源局填报-按年填报
// 查询
export const nengyuanjuyearList = params => post('/nengyuanjuyear/list', params)
// 保存
export const nengyuanjuyearsave = params => post('/nengyuanjuyear/save', params)
// 更新
export const nengyuanjuyearUpdate = params => get(`/nengyuanjuyear/select/${params}`)
// 删除
export const nengyuanjuyearSwitchs = params => post(`/nengyuanjuyear/switchs`, params)

// 能源局-应急调峰事件填报
// 查询
export const emergencyList = params => post('/emergency/list', params)
// 保存
export const emergencysave = params => post('/emergency/save', params)
// 更新
export const emergencyUpdate = params => get(`/emergency/select/${params}`)
// 删除
export const emergencSwitchs = params => post(`/emergency/switchs`, params)

// 能源局-储气释放填报
// 查询
export const gasreleaseList = params => post('/gasrelease/list', params)
// 保存
export const gasreleasesave = params => post('/gasrelease/save', params)
// 更新
export const gasreleaseUpdate = params => get(`/gasrelease/select/${params}`)
// 删除
export const gasreleaseSwitchs = params => post(`/gasrelease/switchs`, params)

// 字典表
export const dic = () => get('/dict/init')

// 煤制气企业信息填报
export const coalgasEnterpriseList = params => post('/enterprise/coalgasList', params)
// 煤制油企业信息填报
export const coaloilEnterpriseList = params => post('/enterprise/coaloilList', params)
// 炼厂企业信息填报
export const lianchangEnterpriseList = params => post('/enterprise/lianchangList', params)

<template>
<!--  煤制气按月填报-->
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="fromSearch" size="small" label-width="80px" class="form-box clearfix">
        <div class="search-input">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="企业名称" label-width="90px">
                <el-input v-model="fromSearch.oilGasName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="起止日期">
                <el-date-picker
                  v-model="fromSearch.time"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                  value-format="yyyy-MM-dd"
                  :clearable="false"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="状态">
                <el-select v-model="fromSearch.status" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="search-btn">
          <el-form-item label-width="0">
            <el-button type="primary" icon="el-icon-search" @click="list((1,pageSize))">查询</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="table-wrapper">
      <div class="handel-btn">
        <div class="submenu-title">
          按月填报
        </div>
        <div>
          <el-button size="small" class="btn-add" style="margin-bottom: 10px;" @click="handleAdd"><i
            class="icon iconfont i-add"
          >&#xe880;</i>新增
          </el-button>
          <el-button size="small" class="btn-edit" style="margin-bottom: 10px;" @click="handleEdit"><i
            class="icon iconfont i-edit"
          >&#xe630;</i>编辑
          </el-button>
          <el-button size="small" class="btn-del" style="margin-bottom: 10px;" @click="handleDel"><i
            class="icon iconfont i-del"
          >&#xe614;</i>删除
          </el-button>
        </div>
      </div>
      <table-cmp
        :loading="loading"
        :table-data="tableData"
        :table-label="tableLabel"
        :total="total"
        :checkbox="checkbox"
        :pageSize="pageSize"
        :currentPage="currentPage"
        @handleSelectionChange="handleSelectionChange"
        @handleCurrentChange="handleCurrentChange"
        @handleSizeChange="handleSizeChange"
      >
      </table-cmp>
    </div>

  </div>
</template>

<script>
import TableCmp from '@/components/TableCmp'
/*1企业名称、2时间、3盟市名称、4计划粉煤月加工量、5粉煤月加工量、6平均负荷率、
7计划平均负荷率、8水资源用量、9单位产品原料消耗、10单位产品综合能耗、11单位产品新鲜水耗、12煤制气产量、
13煤制气月供应量、14管道气供应量、15CNG供应量、16LNG供应量、17终端消费量、18化工消费量、19火力发电消费量、20供热消费量、21工业消费量、22生活消费量、23建筑业消费量、24商业消费量、25交通消费量、26调峰煤制气用量、27煤制气计划月供应量、28煤制气消费量、29状态*/
export default {
  name: 'Dashboard',
  components: { TableCmp },
  data() {
    return {
      expandForm: false,
      count: 3,
      total: 0,
      currentPage: 1,
      pageSize: 50,
      fromSearch: {
        oil: '',
        time: ''
      },
      loading: false,
      tableData: [],
      tableLabel: [
        { label: '企业名称', param: 'enterName', minWidth: 150 },
        { label: '时间', param: 'recordDate', minWidth: 150 },
        { label: '盟市', param: 'leagueCityName', minWidth: 150 },
        { label: '计划粉煤月加工量', param: 'coalProcessMonth', minWidth: 150 },
        { label: '粉煤月加工量', param: 'pulverizedCoalProcessingCapacity', minWidth: 150 },
        { label: '平均负荷率', param: 'avgLoadRate', minWidth: 150 },
        { label: '计划平均负荷率', param: 'planAvgLoadRate', minWidth: 150 },
        { label: '水资源用量', param: 'waterUse', minWidth: 150 },
        { label: '单位产品原料消耗', param: 'unitProductRawSales', minWidth: 150 },
        { label: '单位产品综合能耗', param: 'unitProductComprehensiveEnergySales', minWidth: 150 },
        { label: '单位产品新鲜水耗', param: 'unitProductFreshWaterSales', minWidth: 150 },
        { label: '煤制气产量', param: 'gasYield', minWidth: 150 },
        { label: '煤制气月供应量', param: 'gasSupply', minWidth: 150 },
        { label: '管道气供应量', param: 'pipelineGasSupply', minWidth: 150 },
        { label: 'CNG供应量', param: 'cngSupply', minWidth: 150 },
        { label: 'LNG供应量', param: 'lngSupply', minWidth: 150 },
        { label: '终端消费量', param: 'householdSales', minWidth: 150 },
        { label: '化工消费量', param: 'chemicalConsumption', minWidth: 150 },
        { label: '火力发电消费量', param: 'thermalPowerSales', minWidth: 150 },
        { label: '供热消费量', param: 'heatingSales', minWidth: 150 },
        { label: '工业消费量', param: 'industrySales', minWidth: 150 },
        { label: '生活消费量', param: 'lifeSales', minWidth: 150 },
        { label: '建筑业消费量', param: 'constructionIndustrySales', minWidth: 150 },
        { label: '商业消费量', param: 'businessSales', minWidth: 150 },
        { label: '交通消费量', param: 'trafficSales', minWidth: 150 },
        { label: '调峰煤制气用量', param: 'peakShavingSales', minWidth: 150 },
        { label: '煤制气计划月供应量', param: 'gasPlanMonthSupply', minWidth: 150 },
        { label: '煤制气消费量', param: 'gasConsumption' , minWidth: 150}
      ],
      tableOption: {
        label: '操作',
        width: '200',
        options: [
          { label: '修改', methods: 'edit' },
          { label: '删除', methods: 'delete' }
        ]
      },
      rowId: '',
      dialogStatu: '',//判断新增还是修改页面
      dialogFormVisible: false
    }
  },
  methods: {
    fasFieldTable() {
      console.log(12222)
    },
    getMsgDialog(data) {
      console.log(data)
      this.dialogFormVisible = data
    },
    handleButton(val) {
      if (val.methods === 'edit') {
        this.rowId = 'fafd'
        this.dialogStatu = 'update'
        this.dialogFormVisible = true
      }
    },
    handleCurrentChange() {

    },
    handleSizeChange() {

    },
    handleAdd() {
      const params = {
        title: '新增',
        statu: 'create'
      }
      this.$router.push({ path: '/coalgasAdd', query: params })
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-container {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }


}
</style>

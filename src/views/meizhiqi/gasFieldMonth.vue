<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="fromSearch" size="small" class="form-box clearfix">
        <div class="item search-input">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="企业名称" label-width="90px">
                <el-input :model="fromSearch.one"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="盟市名称" label-width="90px">
                <el-input :model="fromSearch.one"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="起止日期" label-width="90px">
                <el-date-picker
                  v-model="fromSearch.time"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="item search-btn">
          <el-form-item>
            <el-button type="primary" @click="submitForm('fromSearch')">查询</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div>
      <el-button size="small" type="primary" style="margin-bottom: 10px;" @click="handleAdd">添加</el-button>
    </div>
    <table-cmp
      :loading="loading"
      :table-data="tableData"
      :table-label="tableLabel"
      :table-option="tableOption"
      :total="total"
      :pageSize="pageSize"
      :currentPage="currentPage"
      @handleButton="handleButton"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    >
    </table-cmp>
    <!--    弹窗-->
    <gas-field-month-add :rowId="rowId" :fasFieldTable="fasFieldTable" :dialogStatu="dialogStatu"
                         :dialogFormVisible="dialogFormVisible"
                         @func="getMsgDialog"
    ></gas-field-month-add>

  </div>
</template>

<script>
import TableCmp from '@/components/TableCmp'
import gasFieldMonthAdd from '@/views/meizhiqi/gasFieldMonthAdd'
/*1企业名称、2时间、3盟市名称、4计划粉煤月加工量、5粉煤月加工量、6平均负荷率、
7计划平均负荷率、8水资源用量、9单位产品原料消耗、10单位产品综合能耗、11单位产品新鲜水耗、12煤制气产量、
13煤制气月供应量、14管道气供应量、15CNG供应量、16LNG供应量、17终端消费量、18化工消费量、19火力发电消费量、20供热消费量、21工业消费量、22生活消费量、23建筑业消费量、24商业消费量、25交通消费量、26调峰煤制气用量、27煤制气计划月供应量、28煤制气消费量、29状态*/
export default {
  name: 'Dashboard',
  components: { TableCmp, gasFieldMonthAdd },
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
        { label: '企业名称', param: 'stationCode', minWidth: 150 },
        { label: '时间', param: 'baseStationCode', minWidth: 150 },
        { label: '盟市', param: 'baseStationCode', minWidth: 150 },
        { label: '计划粉煤月加工量', param: 'laneCode', minWidth: 150 },
        { label: '粉煤月加工量', param: 'positionCode', minWidth: 150 },
        { label: '平均负荷率', param: 'positionCode', minWidth: 150 },
        { label: '计划平均负荷率', param: 'positionCode', minWidth: 150 },
        { label: '水资源用量', param: 'positionCode', minWidth: 150 },
        { label: '单位产品原料消耗', param: 'positionCode', minWidth: 150 },
        { label: '单位产品综合能耗', param: 'positionCode', minWidth: 150 },
        { label: '单位产品新鲜水耗', param: 'positionCode', minWidth: 150 },
        { label: '煤制气产量', param: 'positionCode', minWidth: 150 },
        { label: '煤制气月供应量', param: 'positionCode', minWidth: 150 },
        { label: '管道气供应量', param: 'positionCode', minWidth: 150 },
        { label: 'CNG供应量', param: 'positionCode', minWidth: 150 },
        { label: 'LNG供应量', param: 'positionCode', minWidth: 150 },
        { label: '终端消费量', param: 'positionCode', minWidth: 150 },
        { label: '化工消费量', param: 'positionCode', minWidth: 150 },
        { label: '火力发电消费量', param: 'positionCode', minWidth: 150 },
        { label: '供热消费量', param: 'positionCode', minWidth: 150 },
        { label: '工业消费量', param: 'positionCode', minWidth: 150 },
        { label: '生活消费量', param: 'positionCode', minWidth: 150 },
        { label: '建筑业消费量', param: 'positionCode', minWidth: 150 },
        { label: '商业消费量', param: 'positionCode', minWidth: 150 },
        { label: '交通消费量', param: 'positionCode', minWidth: 150 },
        { label: '调峰煤制气用量', param: 'positionCode', minWidth: 150 },
        { label: '煤制气计划月供应量', param: 'positionCode', minWidth: 150 },
        { label: '煤制气消费量', param: 'positionCode' }
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
      this.dialogStatu = 'create'
      this.dialogFormVisible = true
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

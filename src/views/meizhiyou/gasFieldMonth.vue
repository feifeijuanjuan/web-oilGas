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
import gasFieldMonthAdd from '@/views/meizhiyou/gasFieldMonthAdd'
/*1企业名称、2时间、3状态、4计划粉煤月加工量、5粉煤月加工量、6平均负荷率、
7计划平均负荷率、8水资源用量、9单位产品原料消耗、10单位产品综合能耗、11单位产品新鲜水耗、12石脑油产量、
13柴油产量、14液化气产量、15干气产量、16石脑油供应量、17柴油供应量、18液化气供应量、19干气供应量、20石脑油销售量、21柴油销售量、22液化气销售量、23干气销售量、24汽运供应量、25管输供应量、26工程车辆销售量、27城市交通销售量、28工业销售量、乙烯原料销售量、调合汽油销售量、重整原料销售量、原料煤价格、煤制油品价格、呼和浩特市销售量、包头市销售量、乌海市销售量、赤峰市销售量、通辽市销售量、鄂尔多斯市销售量、
呼伦贝尔市销售量、巴彦淖尔市销售量、乌兰察布市销售量、锡林格勒盟销售量、阿拉善盟销售量、兴安盟销售量、煤制油月产量（万吨）、计划煤制油月产量（万吨）、*/
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
        { label: '企业名称', param: 'stationCode' },
        { label: '时间', param: 'baseStationCode' },
        { label: '粉煤月加工量(万吨)', param: 'positionCode' },
        { label: '平均负荷率', param: 'positionCode' },
        { label: '水资源用量(万吨)', param: 'positionCode' },
        { label: '单位产品原料消耗', param: 'positionCode' },
        { label: '单位产品综合能耗', param: 'positionCode' },
        { label: '单位产品新鲜水耗', param: 'positionCode' },
        { label: '石脑油产量', param: 'positionCode' },
        { label: '柴油产量', param: 'positionCode' },
        { label: '液化气产量', param: 'positionCode' }
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

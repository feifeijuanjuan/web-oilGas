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
        { label: '企业名称', param: 'enterName' },
        { label: '时间', param: 'recordDate' },
        { label: '计划粉煤月加工量', param: 'coalProcessMonth' },
        { label: '粉煤月加工量(万吨)', param: 'pulverizedCoalProcessingCapacity' },
        { label: '平均负荷率', param: 'avgLoadRate' },
        { label: '计划平均负荷率', param: 'planAvgLoadRate' },
        { label: '水资源用量(万吨)', param: 'waterUse' },
        { label: '单位产品原料消耗', param: 'rawCoalConsumption' },
        { label: '单位产品综合能耗', param: 'unitProductComprehensiveEnergySales' },
        { label: '单位产品新鲜水耗', param: 'unitProductFreshWaterConsumption' },
        { label: '石脑油产量', param: 'yieldNaphtha' },
        { label: '柴油产量', param: 'yieldDieselOil' },
        { label: '液化气产量', param: 'yieldLpg' },
        { label: '干气产量', param: 'yieldDryGas' },
        { label: '石脑油供应量', param: 'monthSupplyNaphtha' },
        { label: '煤制油月产量（万吨）', param: 'coalOilMonthProduct' },
        { label: '计划煤制油月产量（万吨）', param: 'coalOilPlanMonthProduct' },
        { label: '柴油供应量', param: 'monthSupplyDieselOil' },
        { label: '液化气供应量', param: 'monthSupplyLpg' },
        { label: '干气供应量', param: 'monthSupplyDryGas' },
        { label: '石脑油销售量', param: 'naphthaSales' },
        { label: '柴油销售量', param: 'dieselOilSales' },
        { label: '液化气销售量', param: 'lgpSales' },
        { label: '干气销售量', param: 'dryGasSales' },
        { label: '汽运供应量', param: 'supplyBusTrans' },
        { label: '管输供应量', param: 'supplyPipeTrans' },
        { label: '工程车辆销售量', param: 'projectBusSales' },
        { label: '城市交通销售量', param: 'cityTrafficSales' },
        { label: '工业销售量', param: 'industrySales' },
        { label: '乙烯原料销售量', param: 'c2h4MaterialSales' },
        { label: '调合汽油销售量', param: 'mixGasolineSales' },
        { label: '重整原料销售量', param: 'reformMaterialSales' },
        { label: '原料煤价格', param: 'rawCoalPrice' },
        { label: '煤制油品价格', param: 'coalOilPrice' },
        { label: '呼和浩特市销售量', param: 'huhehaoteSales' },
        { label: '包头市销售量', param: 'baotouSales' },
        { label: '乌海市销售量', param: 'wuhaiSales' },
        { label: '赤峰市销售量', param: 'chifengSales' },
        { label: '通辽市销售量', param: 'tongliaoSales' },
        { label: '鄂尔多斯市销售量', param: 'eerduosiSales' },
        { label: '呼伦贝尔市销售量', param: 'hulunbeierSales' },
        { label: '巴彦淖尔市销售量', param: 'bayannaoerSales' },
        { label: '乌兰察布市销售量', param: 'wulanchabuSales' },
        { label: '锡林格勒盟销售量', param: 'xilingelemengSales' },
        { label: '阿拉善盟销售量', param: 'alashanmengSales' },
        { label: '兴安盟销售量', param: 'xinganmengSales' }
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

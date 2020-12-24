<template>
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
/*1企业名称、2时间、3状态、4计划粉煤月加工量、5粉煤月加工量、6平均负荷率、
7计划平均负荷率、8水资源用量、9单位产品原料消耗、10单位产品综合能耗、11单位产品新鲜水耗、12石脑油产量、
13柴油产量、14液化气产量、15干气产量、16石脑油供应量、17柴油供应量、18液化气供应量、19干气供应量、20石脑油销售量、21柴油销售量、22液化气销售量、23干气销售量、24汽运供应量、25管输供应量、26工程车辆销售量、27城市交通销售量、28工业销售量、乙烯原料销售量、调合汽油销售量、重整原料销售量、原料煤价格、煤制油品价格、呼和浩特市销售量、包头市销售量、乌海市销售量、赤峰市销售量、通辽市销售量、鄂尔多斯市销售量、
呼伦贝尔市销售量、巴彦淖尔市销售量、乌兰察布市销售量、锡林格勒盟销售量、阿拉善盟销售量、兴安盟销售量、煤制油月产量（万吨）、计划煤制油月产量（万吨）、*/
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
        { label: '企业名称', param: 'enterName', minWidth: 120 },
        { label: '时间', param: 'recordDate', minWidth: 120 },
        { label: '计划粉煤月加工量', param: 'coalProcessMonth', minWidth: 150 },
        { label: '粉煤月加工量(万吨)', param: 'pulverizedCoalProcessingCapacity', minWidth: 150 },
        { label: '平均负荷率', param: 'avgLoadRate', minWidth: 150 },
        { label: '计划平均负荷率', param: 'planAvgLoadRate', minWidth: 150 },
        { label: '水资源用量(万吨)', param: 'waterUse', minWidth: 150 },
        { label: '单位产品原料消耗', param: 'rawCoalConsumption', minWidth: 150 },
        { label: '单位产品综合能耗', param: 'unitProductComprehensiveEnergySales', minWidth: 150 },
        { label: '单位产品新鲜水耗', param: 'unitProductFreshWaterConsumption', minWidth: 150 },
        { label: '石脑油产量', param: 'yieldNaphtha', minWidth: 150 },
        { label: '柴油产量', param: 'yieldDieselOil', minWidth: 150 },
        { label: '液化气产量', param: 'yieldLpg', minWidth: 150 },
        { label: '干气产量', param: 'yieldDryGas', minWidth: 150 },
        { label: '石脑油供应量', param: 'monthSupplyNaphtha', minWidth: 150 },
        { label: '煤制油月产量', param: 'coalOilMonthProduct', minWidth: 150 },
        { label: '计划煤制油月产量', param: 'coalOilPlanMonthProduct', minWidth: 150 },
        { label: '柴油供应量', param: 'monthSupplyDieselOil', minWidth: 150 },
        { label: '液化气供应量', param: 'monthSupplyLpg', minWidth: 150 },
        { label: '干气供应量', param: 'monthSupplyDryGas', minWidth: 150 },
        { label: '石脑油销售量', param: 'naphthaSales', minWidth: 150 },
        { label: '柴油销售量', param: 'dieselOilSales', minWidth: 150 },
        { label: '液化气销售量', param: 'lgpSales', minWidth: 150 },
        { label: '干气销售量', param: 'dryGasSales', minWidth: 150 },
        { label: '汽运供应量', param: 'supplyBusTrans', minWidth: 150 },
        { label: '管输供应量', param: 'supplyPipeTrans', minWidth: 150 },
        { label: '工程车辆销售量', param: 'projectBusSales', minWidth: 150 },
        { label: '城市交通销售量', param: 'cityTrafficSales', minWidth: 150 },
        { label: '工业销售量', param: 'industrySales', minWidth: 150 },
        { label: '乙烯原料销售量', param: 'c2h4MaterialSales', minWidth: 150 },
        { label: '调合汽油销售量', param: 'mixGasolineSales', minWidth: 150 },
        { label: '重整原料销售量', param: 'reformMaterialSales', minWidth: 150 },
        { label: '原料煤价格', param: 'rawCoalPrice', minWidth: 150 },
        { label: '煤制油品价格', param: 'coalOilPrice', minWidth: 150 },
        { label: '呼和浩特市销售量', param: 'huhehaoteSales', minWidth: 150 },
        { label: '包头市销售量', param: 'baotouSales', minWidth: 150 },
        { label: '乌海市销售量', param: 'wuhaiSales', minWidth: 150 },
        { label: '赤峰市销售量', param: 'chifengSales', minWidth: 150 },
        { label: '通辽市销售量', param: 'tongliaoSales', minWidth: 150 },
        { label: '鄂尔多斯市销售量', param: 'eerduosiSales', minWidth: 150 },
        { label: '呼伦贝尔市销售量', param: 'hulunbeierSales', minWidth: 150 },
        { label: '巴彦淖尔市销售量', param: 'bayannaoerSales', minWidth: 150 },
        { label: '乌兰察布市销售量', param: 'wulanchabuSales', minWidth: 150 },
        { label: '锡林格勒盟销售量', param: 'xilingelemengSales', minWidth: 150 },
        { label: '阿拉善盟销售量', param: 'alashanmengSales', minWidth: 150 },
        { label: '兴安盟销售量', param: 'xinganmengSales', minWidth: 150 }
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
      this.$router.push({ path: '/coaloilAdd', query: params })
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

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
import gasFieldMonthAdd from '@/views/lianyou/gasFieldMonthAdd'
/*1企业名称、2时间、3盟市名称、4状态、
原油月加工量、原油计划月加工量、成品油产量、计划成品油月产量、计划负荷率、平均负荷率、
89#汽油产量、92#汽油产量、95#汽油产量、
负35号柴油产量、负20号柴油产量、负10号柴油产量、0号柴油产量、
煤油产量*/
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
        { label: '企业名称', param: 'enterName', minWidth: 150 },
        { label: '时间', param: 'recordDate', minWidth: 150 },
        { label: '原油月加工量', param: 'crudeOilProcessingCapacity', minWidth: 150 },
        { label: '原油计划月加工量', param: 'oilPlanMonthProcess', minWidth: 180 },
        { label: '成品油产量', param: 'yieldProductedOil', minWidth: 150 },
        { label: '计划成品油月产量', param: 'productedOilPlanMonthProduct', minWidth: 180 },
        { label: '计划负荷率', param: 'planLoadRate', minWidth: 150 },
        { label: '平均负荷率', param: 'avgLoadRate', minWidth: 150 },
        { label: '89#汽油产量', param: 'yieldGasoline89', minWidth: 180 },
        { label: '92#汽油产量', param: 'yieldGasoline92', minWidth: 150 },
        { label: '95#汽油产量', param: 'yieldGasoline95', minWidth: 180 },
        { label: '负35号柴油产量', param: 'yieldDieseOilMinus35', minWidth: 180 },
        { label: '负20号柴油产量', param: 'yieldDieselOilMinus20', minWidth: 180 },
        { label: '负10号柴油产量', param: 'yieldDieselOilMinus10', minWidth: 180 },
        { label: '0号柴油产量', param: 'yieldDieselOil0', minWidth: 180 },
        { label: '煤油产量', param: 'yieldAviationCoal', minWidth: 150 }
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

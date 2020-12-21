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
    <chenpinyou2-add :rowId="rowId" :fasFieldTable="fasFieldTable" :dialogStatu="dialogStatu"
                     :dialogFormVisible="dialogFormVisible"
                     @func="getMsgDialog"></chenpinyou2-add>

  </div>
</template>

<script>
import TableCmp from '@/components/TableCmp'
import chenpinyou2Add from '@/views/chenpinyou/chenpinyou2Add'
/*1企业名称、2时间、3盟市名称、
89#汽油销售量、92#汽油销售量、95#汽油销售量、
0#柴油销售量、负35#柴油销售量、负10#柴油销售量、负20#柴油销费量、
煤油销费量、
柴油消费量预测值、汽油消费量预测、
成品油区内消费量、成品油区外消费量*/
export default {
  name: 'Dashboard',
  components: { TableCmp, chenpinyou2Add },
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
        { label: '盟市', param: 'positionCode' },
        { label: '89#汽油销售量', param: 'positionCode' },
        { label: '92#汽油销售量', param: 'positionCode' },
        { label: '95#汽油销售量', param: 'positionCode' },
        { label: '0#柴油销售量', param: 'positionCode' },
        { label: '负35#柴油销售量', param: 'positionCode' },
        { label: '负10#柴油销售量', param: 'positionCode' },
        { label: '负20#柴油销费量', param: 'positionCode' },
        { label: '煤油销费量', param: 'positionCode' },
        { label: '柴油消费量预测值', param: 'positionCode' },
        { label: '汽油消费量预测', param: 'positionCode' },
        { label: '成品油区内消费量', param: 'positionCode' },
        { label: '成品油区外消费量', param: 'positionCode' }
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

<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="fromSearch" size="small" class="form-box clearfix">
        <div class="item search-input">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="管道名" label-width="90px">
                <el-input :model="fromSearch.one"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="管道类型" label-width="120px">
                <el-select v-model="fromSearch.oil" placeholder="请选择">
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
            <el-col :span="8">
              <el-form-item label="企业名称" label-width="90px">
                <el-input :model="fromSearch.one"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
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
import gasFieldMonthAdd from '@/views/guandao/gasFieldMonthAdd'
/*1管道名、2管道类型、3企业名称、4时间、5区内里程、6运送能力、7管道长度、
8设计压力、9末站压力阈值、10末站压力实际值、11区内起点、12区内终点、
13设计输气（油）能力、14实际输气（油）能力、15管径、16投产时间、17负责人、18状态*/
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
      options: [{
        value: '选项1',
        label: '原油'
      },
        {
          value: '选项2',
          label: '天然气'
        }
      ],
      fromSearch: {
        oil: '',
        time: ''
      },
      loading: false,
      tableData: [],
      tableLabel: [
        { label: '管道名', param: 'stationCode', minWidth: 150 },
        { label: '时间', param: 'baseStationCode', minWidth: 150 },
        { label: '管道类型', param: 'laneCode', minWidth: 150 },
        { label: '企业名称', param: 'positionCode', minWidth: 150 },
        { label: '区内里程', param: 'positionCode', minWidth: 150 },
        { label: '运送能力', param: 'positionCode', minWidth: 150 },
        { label: '管道长度', param: 'positionCode', minWidth: 150 },
        { label: '设计压力', param: 'positionCode', minWidth: 150 },
        { label: '末站压力阈值', param: 'positionCode', minWidth: 180 },
        { label: '末站压力实际值', param: 'positionCode', minWidth: 180 },
        { label: '区内起点', param: 'positionCode', minWidth: 150 },
        { label: '区内终点', param: 'positionCode', minWidth: 150 },
        { label: '设计输气（油）能力', param: 'positionCode', minWidth: 180 },
        { label: '实际输气（油）能力', param: 'positionCode', minWidth: 180 },
        { label: '管径', param: 'positionCode', minWidth: 150 },
        { label: '投产时间', param: 'positionCode', minWidth: 150 },
        { label: '负责人', param: 'positionCode', minWidth: 150 }
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

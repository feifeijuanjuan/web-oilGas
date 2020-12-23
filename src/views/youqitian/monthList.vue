<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="fromSearch" size="small" label-width="80px" class="form-box clearfix">
        <div class="search-input">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="油气田名称" label-width="90px">
                <el-input :model="fromSearch.one"></el-input>
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
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="状态">
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
          </el-row>
        </div>
        <div class="search-btn">
          <el-form-item label-width="0">
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
import gasFieldMonthAdd from '@/views/youqitian/monthAdd'
/*1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
7月产量、8计划月产量、9月供应量、10计划月供应量、11区内供应量、12区外供应量、
13月产能、14综合能源消费量、15状态*/
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
      tableData: [
        {
          stationCode: '伊泰煤制油',
          baseStationCode: '',
          laneCode: '',
          positionCode: ''
        },
        {
          stationCode: '伊泰煤制油',
          baseStationCode: '',
          laneCode: '',
          positionCode: ''
        },
        {
          stationCode: '伊泰煤制油',
          baseStationCode: '',
          laneCode: '',
          positionCode: ''
        },
        {
          stationCode: '伊泰煤制油',
          baseStationCode: '',
          laneCode: '',
          positionCode: ''
        },
        {
          stationCode: '伊泰煤制油',
          baseStationCode: '',
          laneCode: '',
          positionCode: ''
        },
        {
          stationCode: '伊泰煤制油',
          baseStationCode: '',
          laneCode: '',
          positionCode: ''
        }
      ],
      tableLabel: [
        { label: '油气田名称', param: 'stationCode' },
        { label: '时间', param: 'baseStationCode' },
        { label: '油气田区域类型', param: 'laneCode' },
        { label: '油气田区域名称', param: 'laneCode' },
        { label: '集团标识', param: 'laneCode' },
        { label: '盟市名称', param: 'positionCode' },
        { label: '月产量', param: 'positionCode' },
        { label: '计划月产量', param: 'positionCode' },
        { label: '月供应量', param: 'positionCode' },
        { label: '计划月供应量', param: 'positionCode' },
        { label: '区内供应量', param: 'positionCode' },
        { label: '区外供应量', param: 'positionCode' },
        { label: '月产能', param: 'positionCode' },
        { label: '综合能源消费量', param: 'positionCode' },
        { label: '状态', param: 'positionCode' }
      ],
      tableOption: {
        label: '操作',
        width: '200',
        options: [
          { label: '编辑', methods: 'edit' },
          // { label: '删除', methods: 'delete' }
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

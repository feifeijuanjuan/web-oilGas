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
      <el-button size="small" type="primary" style="margin-bottom: 10px;" @click="handleAdd">新增</el-button>
      <el-button size="small" type="primary" style="margin-bottom: 10px;" @click="handleEdit">编辑</el-button>
<!--      <el-button size="small" type="danger" style="margin-bottom: 10px;" @click="handleEdit">删除</el-button>-->
    </div>
    <table-cmp
      :loading="loading"
      :table-data="tableData"
      :table-label="tableLabel"
      :total="total"
      :pageSize="pageSize"
      :currentPage="currentPage"
      :tableSwitch="tableSwitch"
      @handleSelectionChange="handleSelectionChange"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
      @changeSwitch="changeSwitch"
    >
    </table-cmp>
    <!--    &lt;!&ndash;    弹窗&ndash;&gt;
        <gas-field-day-add :rowId="rowId" :fasFieldTable="fasFieldTable" :dialogStatu="dialogStatu"
                           :dialogFormVisible="dialogFormVisible"
                           @func="getMsgDialog"
        ></gas-field-day-add>-->

  </div>
</template>

<script>
import TableCmp from '@/components/TableCmp'
// import gasFieldDayAdd from '@/views/youqitian/dayAdd'
/*1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
7天然气日产量、8天然气日供气量、9天然气计划日供气量、10天然气日供气合同量、11直供管道公司日供气量、
12直供甲醇厂日供气量、
13直供合成氨日供气量、
14直供液化工厂日供气量、15状态*/
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
      options: [
        {
          value: '',
          label: '全部'
        },
        {
          value: '选项1',
          label: '冻结'
        },
        {
          value: '选项2',
          label: '启用'
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
          positionCode: '',
          state: '0'
        },
        {
          stationCode: '伊泰煤制油',
          baseStationCode: '',
          laneCode: '',
          positionCode: '',
          state: '100'
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
        { label: '油气田名称', param: 'stationCode', minWidth: '150' },
        { label: '时间', param: 'baseStationCode', minWidth: '150' },
        { label: '油气田区域类型', param: 'baseStationCode', minWidth: '180' },
        { label: '油气田区域名称', param: 'baseStationCode', minWidth: '180' },
        { label: '集团标识', param: 'baseStationCode', minWidth: '180' },
        { label: '盟市名称', param: 'baseStationCode', minWidth: '180' },
        { label: '天然气日产量(万立方米)', param: 'laneCode', minWidth: '180' },
        { label: '天然气日供气量(万立方米)', param: 'laneCode', minWidth: '180' },
        { label: '天然气计划日供气量(万立方米)', param: 'laneCode', minWidth: '180' },
        { label: '天然气日供气合同量(万立方米)', param: 'positionCode', minWidth: '180' },
        { label: '直供管道公司日供气量(万立方米)', param: 'positionCode', minWidth: '180' },
        { label: '直供甲醛厂日供气量(万立方米)', param: 'positionCode', minWidth: '180' },
        { label: '直供合成氨日供气量(万立方米)', param: 'positionCode', minWidth: '180' },
        { label: '直供液化工厂日供气量(万立方米)', param: 'positionCode', minWidth: '180' },
        { label: '状态', param: 'state'}
      ],
      selectedRows: [],
      tableSwitch: {
        label: '状态',
        width: '200',
        paramItem: 'state',
        methods: 'switch',
        activeValue:'100',
        inactiveValue:'0'
      },
      rowId: ''
    }
  },
  methods: {

    /*handleButton(val) {
      if (val.methods === 'edit') {
        this.rowId = 'fafd'
      }
    },*/
    handleCurrentChange() {

    },
    handleSizeChange() {

    },
    //新增
    handleAdd() {
      this.$router.push({ path: '/dayAdd', query: { rowList: 123 } })
    },
    // 编辑
    handleEdit() {
      console.log(this.selectedRows)

    },
    handleSelectionChange(val) {
      const arr = []
      val.map((item) => {
        arr.push(item.dataId)
      })
      this.selectedRows = arr
    },
    changeSwitch(val) {
      console.log(val.row.state)
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

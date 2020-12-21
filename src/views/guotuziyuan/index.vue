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
              <el-form-item label="盟市名称">
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
    <gas-field-day-add :rowId="rowId" :fasFieldTable="fasFieldTable" :dialogStatu="dialogStatu"
                       :dialogFormVisible="dialogFormVisible"
                       @func="getMsgDialog"
    ></gas-field-day-add>

  </div>
</template>

<script>
import TableCmp from '@/components/TableCmp'
import gasFieldDayAdd from '@/views/guotuziyuan/gasFieldDayAdd'
/*1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
7累计探明地质储量、8剩余技术可采储量、9剩余经济可采储量、10储采比、11油气田人数、12远景资源量、
13预测储量、14控制储量、15油气田面积、16状态*/
export default {
  name: 'Dashboard',
  components: { TableCmp, gasFieldDayAdd },
  data() {
    return {
      expandForm: false,
      count: 3,
      total: 0,
      currentPage: 1,
      pageSize: 50,
      options: [{
        value: '选项1',
        label: '安塞油田'
      }],
      fromSearch: {
        oil: '',
        time: ''
      },
      loading: false,
      tableData: [{
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
        { label: '天然气日供气量(万立方)', param: 'laneCode' },
        { label: '天然气日供气合同量(万立方)', param: 'positionCode' },
        { label: '直供管道公司日供气量(万立方)', param: 'positionCode' },
        { label: '直供甲醛日供气量(万立方)', param: 'positionCode' },
        { label: '直供合成氨日供气量(万立方)', param: 'positionCode' },
        { label: '直供液化工厂日供气量(万立方)', param: 'positionCode' }
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

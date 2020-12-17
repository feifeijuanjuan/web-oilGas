<template>
  <div>
    <div class="filter-container">
      <el-form :model="gasFieldDay" size="small" :inline="true" class="form-box">
        <el-form-item label="油田">
          <el-select v-model="gasFieldDay.oil" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="起止日期">
          <el-date-picker
            v-model="gasFieldDay.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('gasFieldDay')">查询</el-button>
        </el-form-item>
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
import gasFieldDayAdd from '@/views/dashboard/gasFieldDayAdd'

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
      gasFieldDay: {
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
        { label: '天然气日供气量', param: 'baseStationCode' },
        { label: '天然气日供气合同量', param: 'laneCode' },
        { label: '时间', param: 'positionCode' }
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
    getMsgDialog(data){
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

  .form-box {
    display: flex;
  }
}
</style>

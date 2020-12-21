<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="fromSearch" size="small" class="form-box clearfix">
        <div class="item search-input">
          <el-row :gutter="20">
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
import gasFieldMonthAdd from '@/views/nengyuanju/gasFieldMonthAdd'
/*盟市名称、时间
盟市储气设施总容积
地方政府日均三天计划储气量
地方政府日均三天实际储气量
盟市租赁储罐数量
盟市自建储罐数量
天然气历史缺口量
盟市储气日调用量
盟市气化装置数量
盟市气化装置日均气化量*/
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
        { label: '盟市', param: 'stationCode' },
        { label: '时间', param: 'baseStationCode' },
        { label: '盟市储气设施总容积', param: 'laneCode' },
        { label: '地方政府日均三天计划储气量', param: 'positionCode' },
        { label: '地方政府日均三天实际储气量', param: 'positionCode' },
        { label: '盟市租赁储罐数量', param: 'positionCode' },
        { label: '盟市自建储罐数量', param: 'positionCode' },
        { label: '天然气历史缺口量', param: 'positionCode' },
        { label: '盟市储气日调用量', param: 'positionCode' },
        { label: '盟市气化装置数量', param: 'positionCode' },
        { label: '盟市气化装置日均气化量', param: 'positionCode' }
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

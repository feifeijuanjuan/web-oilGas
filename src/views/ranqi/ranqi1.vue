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
    <ranqi1-add :rowId="rowId" :fasFieldTable="fasFieldTable" :dialogStatu="dialogStatu"
                     :dialogFormVisible="dialogFormVisible"
                     @func="getMsgDialog"
    >
    </ranqi1-add>

  </div>
</template>

<script>
import TableCmp from '@/components/TableCmp'
import ranqi1Add from '@/views/ranqi/ranqi1Add'
/*企业名称、盟市名称、时间、状态、
天然气消费量、天然气需求量、天然气供应合同量、天然气计划日供气量、
工业用户天然气消费量、商业用户天然气消费量、建筑业天然气消费量、生活销售天然气销售量、供暖天然气销售量、
可中断工业消费量、不可中断工业消费量、
居民用气量天然气日消费量(万立方米)、民生用气量天然气日消费量(万立方米)、社会车辆用气天然气日消费量(万立方米)、商业用户天然气日消费量(万立方米)、工业燃料天然气日消费量(万立方米)、
甲醇天然气日消费量(万立方米)、化肥天然气日消费量(万立方米)、LNG天然气日消费量(万立方米）*/
export default {
  name: 'Dashboard',
  components: { TableCmp, ranqi1Add },
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
        { label: '天然气消费量', param: 'positionCode' },
        { label: '天然气需求量', param: 'positionCode' },
        { label: '天然气供应合同量', param: 'positionCode' },
        { label: '天然气计划日供气量', param: 'positionCode' },
        { label: '工业用户天然气消费量', param: 'positionCode' }
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

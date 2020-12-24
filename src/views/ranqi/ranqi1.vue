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
          按日填报
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
/*企业名称、盟市名称、时间、状态、
天然气消费量、天然气需求量、天然气供应合同量、天然气计划日供气量、
工业用户天然气消费量、商业用户天然气消费量、建筑业天然气消费量、生活销售天然气销售量、供暖天然气销售量、
可中断工业消费量、不可中断工业消费量、
居民用气量天然气日消费量(万立方米)、民生用气量天然气日消费量(万立方米)、社会车辆用气天然气日消费量(万立方米)、商业用户天然气日消费量(万立方米)、工业燃料天然气日消费量(万立方米)、
甲醇天然气日消费量(万立方米)、化肥天然气日消费量(万立方米)、LNG天然气日消费量(万立方米）*/
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
        { label: '企业名称', param: 'stationCode',minWidth:120 },
        { label: '时间', param: 'baseStationCode',minWidth:120 },
        { label: '盟市', param: 'positionCode' ,minWidth:120},
        { label: '天然气消费量', param: 'positionCode',minWidth:120 },
        { label: '天然气需求量', param: 'positionCode',minWidth:120 },
        { label: '天然气供应合同量', param: 'positionCode' ,minWidth:150},
        { label: '天然气计划日供气量', param: 'positionCode' ,minWidth:150},
        { label: '工业用户天然气消费量', param: 'positionCode' ,minWidth:180},
        { label: '商业用户天然气消费量', param: 'positionCode' ,minWidth:180},
        { label: '建筑业天然气消费量', param: 'positionCode' ,minWidth:150},
        { label: '生活销售天然气销售量', param: 'positionCode' ,minWidth:180},
        { label: '供暖天然气销售量', param: 'positionCode',minWidth:150 },
        { label: '可中断工业消费量', param: 'positionCode',minWidth:150 },
        { label: '不可中断工业消费量', param: 'positionCode',minWidth:150 },
        { label: '居民用气量天然气日消费量', param: 'positionCode',minWidth:200 },
        { label: '民生用气量天然气日消费量', param: 'positionCode',minWidth:200 },
        { label: '社会车辆用气天然气日消费量', param: 'positionCode' ,minWidth:200},
        { label: '商业用户天然气日消费量', param: 'positionCode',minWidth:180 },
        { label: '工业燃料天然气日消费量', param: 'positionCode',minWidth:180 },
        { label: '甲醇天然气日消费量', param: 'positionCode',minWidth:180 },
        { label: '化肥天然气日消费量', param: 'positionCode',minWidth:180 },
        { label: 'LNG天然气日消费量', param: 'positionCode' ,minWidth:180},
        { label: '状态', param: 'positionCode',minWidth:120 }
      ]
    }
  },
  methods: {
    fasFieldTable() {
      console.log(1222)
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

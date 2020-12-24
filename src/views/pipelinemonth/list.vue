<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="fromSearch" size="small" label-width="80px" class="form-box clearfix">
        <div class="search-input">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="管线名" label-width="90px">
                <el-input v-model="fromSearch.oilGasName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="管道类型">
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
      const params = {
        title: '新增',
        statu: 'create'
      }
      this.$router.push({ path: '/pipelinemonthAdd', query: params })

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

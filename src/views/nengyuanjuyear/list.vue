<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="fromSearch" size="small" label-width="80px" class="form-box clearfix">
        <div class="search-input">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="盟市名称" label-width="90px">
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
          按年填报
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
        { label: '盟市', param: 'stationCode', minWidth: 120 },
        { label: '时间', param: 'baseStationCode', minWidth: 120 },
        { label: '盟市储气设施总容积', param: 'laneCode', minWidth: 180 },
        { label: '地方政府日均三天计划储气量', param: 'positionCode', minWidth: 210 },
        { label: '地方政府日均三天实际储气量', param: 'positionCode', minWidth: 210 },
        { label: '盟市租赁储罐数量', param: 'positionCode', minWidth: 160 },
        { label: '盟市自建储罐数量', param: 'positionCode', minWidth: 160 },
        { label: '天然气历史缺口量', param: 'positionCode', minWidth: 160 },
        { label: '盟市储气日调用量', param: 'positionCode', minWidth: 160 },
        { label: '盟市气化装置数量', param: 'positionCode', minWidth: 160 },
        { label: '盟市气化装置日均气化量', param: 'positionCode', minWidth: 180 }
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
      this.$router.push({ path: '/nengyuanjuyearAdd', query: params })
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

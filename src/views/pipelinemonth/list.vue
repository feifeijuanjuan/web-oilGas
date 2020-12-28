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
                <el-select v-model="fromSearch.pipelineType" placeholder="请选择">
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
          管道信息填报
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
import {pipelinemonthlList,pipelinemonthSwitchs} from '@/api/fill'
/*1管道名、2管道类别、3企业名称、4企业性质、5企业地址、
6时间、7管径、8境内里程、9设计运输能力（亿立方米/年）、
10投产时间、11全线起点位置、12全线终点位置、13区内起点、
14区内终点、15设计压力、16法人代表、17安全负责人、18安全负责人电话 、
19是否运行*/
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
        { label: '管道名', param: 'pipelineName', minWidth: 150 },
        { label: '管道类别', param: 'pipelineType', minWidth: 150 },
        { label: '企业名称', param: 'enterName', minWidth: 150 },
        { label: '企业性质', param: 'enterType', minWidth: 150 },
        { label: '企业地址', param: 'enterAddress', minWidth: 150 },
        { label: '时间', param: 'recordDate', minWidth: 150 },
        { label: '管径', param: 'pipelineDiamete', minWidth: 150 },
        { label: '境内里程', param: 'pipelineLength', minWidth: 150 },
        { label: '设计运输能力', param: 'transportPower', minWidth: 180 },
        { label: '投产时间', param: 'dateIncreaseInvest', minWidth: 180 },
        { label: '全线起点位置', param: 'startPipeline', minWidth: 150 },
        { label: '全线终点位置', param: 'endPipeline', minWidth: 150 },
        { label: '区内起点', param: 'startInPipeline', minWidth: 180 },
        { label: '区内终点', param: 'endInPipeline', minWidth: 180 },
        { label: '设计压力', param: 'designPressure', minWidth: 150 },
        { label: '法人代表', param: 'legalRepresentative', minWidth: 150 },
        { label: '安全负责人', param: 'chargeUser', minWidth: 150 },
        { label: '安全负责人电话', param: 'userPhone', minWidth: 150 },
        { label: '是否运行', param: 'isUse', minWidth: 150 }
      ]
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

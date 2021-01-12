<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="fromSearch" size="small" label-width="80px" class="form-box clearfix">
        <div class="search-input">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="日志名称" label-width="90px">
                <el-input v-model="fromSearch.param"></el-input>
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
      <table-cmp
        :loading="loading"
        :table-data="tableData"
        :table-label="tableLabel"
        :total="total"
        :pageSize="pageSize"
        :currentPage="currentPage"
        @handleCurrentChange="handleCurrentChange"
        @handleSizeChange="handleSizeChange"
      >
      </table-cmp>
    </div>

  </div>
</template>

<script>
import TableCmp from '@/components/TableCmp'
import { secLogList } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'Dashboard',
  components: { TableCmp },
  data() {
    return {
      count: 3,
      total: 0,
      currentPage: 1,
      pageSize: 10,
      fromSearch: {
        param: ''
      },
      loading: false,
      tableData: [],
      tableLabel: [
        { label: 'ip地址', param: 'ip' },
        { label: '功能名称', param: 'method' },
        { label: '操作类型', param: 'operType' },
        { label: '参数', param: 'args' },
        { label: '登录id', param: 'employeeName' },
        { label: '操作时间', param: 'visitTime' }
      ]
    }
  },
  created() {
    // 初始化查询列表
    this.list(1, this.pageSize)
  },
  methods: {
    // 查询列表
    list() {
      this.loading = true
      const params = {
        pageNumber: this.currentPage,
        pageSize: this.pageSize,
        param: this.fromSearch.param
      }
      secLogList(params).then((res) => {
        if (res.code === 0) {
          this.tableData = res.body.data
          this.total = res.body.total
        } else {
          Message({
            message: '网络请求失败',
            type: 'error',
            duration: 5 * 1000
          })
        }
      })
      this.loading = false
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.list(val, this.pageSize)
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.currentPage = 1
      this.list(this.currentPage, val)
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

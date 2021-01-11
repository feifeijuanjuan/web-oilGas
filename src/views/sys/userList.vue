<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="fromSearch" size="small" label-width="80px" class="form-box clearfix">
        <div class="search-input">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="用户名称" label-width="90px">
                <el-input v-model="fromSearch.name"></el-input>
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
          用户管理
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
import {userPage,userDelete} from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'Dashboard',
  components: { TableCmp },
  data() {
    return {
      checkbox: true,
      count: 3,
      total: 0,
      currentPage: 1,
      pageSize: 10,
      fromSearch: {
        enterName: '',
        time: ''
      },
      loading: false,
      tableData: [],
      tableLabel: [
        { label: '用户名称', param: 'name' },
        { label: '登录用户名', param: 'nickName' },
        { label: '工号', param: 'no' },
        { label: '邮箱', param: 'email' },
        { label: '电话', param: 'mobile' },
        { label: '组织机构', param: 'orgId' },
        { label: '状态', param: 'status' }
      ],
      selectedRows: [],
      enterNameAry:[]
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
        pageNo: this.currentPage,
        pageSize: this.pageSize,
        key: this.fromSearch.name
      }
      userPage(params).then((res) => {
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
    },
    handleAdd() {
      const params = {
        title: '新增',
        statu: 'create'
      }
      this.$router.push({ path: '/userListAdd', query: params })
    },
    // 编辑
    handleEdit() {
      if (this.selectedRows.length === 1) {
        const params = {
          title: '编辑',
          id: this.selectedRows[0],
          statu: 'update'
        }
        this.$router.push({ path: '/userListAdd', query: params })

      } else {
        Message({
          message: '请选择一条数据进行编辑',
          type: 'error',
          duration: 5 * 1000
        })
      }
    },
    // 删除
    handleDel() {
      if (this.selectedRows.length > 0) {
        this.$confirm('确认删除选择数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const params = {
            userIds: this.selectedRows
          }
          userDelete(params).then((res) => {
            if (res.code === 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.list(this.currentPage, this.pageSize)
            } else {
              this.$message({
                type: 'error',
                message: '删除失败!'
              })
            }
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })

      } else {
        Message({
          message: '请选择一条数据进行删除',
          type: 'error',
          duration: 5 * 1000
        })
      }
    },
    handleSelectionChange(val) {
      const arr = []
      val.map((item) => {
        arr.push(item.id)
      })
      this.selectedRows = arr
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

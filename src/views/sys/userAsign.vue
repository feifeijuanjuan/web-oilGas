<template>
  <div class="app-container">
    <div class="form-add"><span class="first">角色管理</span>
      <span class="first-line">></span>
      <span class="first">分配用户</span>
    </div>

    <div class="table-wrapper">
      <el-form :model="fromSearch" size="small" label-width="80px" class="form-box clearfix">
        <div class="search-input">
          <el-row :gutter="20">
            <el-col :span="10">
              <el-form-item label="组织机构" label-width="90px">
                <el-cascader
                  v-model="fromSearch.orgName"
                  placeholder="请选择组织机构"
                  :props="{ checkStrictly: true }"
                  :options="orgOptions"
                  @change="handleChange"
                  clearable
                ></el-cascader>
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
    <div class="form-footer-btn">
      <el-button class="close-btn" @click="close">取 消</el-button>
      <el-button class="confrim-btn" type="primary"
                 @click="assign()"
      >确 定
      </el-button>
    </div>
  </div>
</template>

<script>
import { usersRole, userList, setUsersRole, orgList, dic } from '@/api/fill'
import TableCmp from '@/components/TableCmp'
import { orgCascader } from '@/utils/addMenu'

export default {
  name: 'userAsign',
  components: { TableCmp },
  data() {
    return {
      /* checkList: [],
       List: [] //用户列表数组*/
      total: 0,
      checkbox: true,
      currentPage: 1,
      pageSize: 10,
      fromSearch: {
        orgName: null,
        time: '',
        name: '',
        name1: ''
      },
      loading: false,
      tableData: [],
      tableLabel: [
        { label: '用户名称', param: 'name' },
        { label: '登录用户名', param: 'nickName' },
        { label: '工号', param: 'no' },
        { label: '邮箱', param: 'email' },
        { label: '电话', param: 'mobile' },
        { label: '组织机构', param: 'orgName' }
      ],
      selectedRows: [],
      orgOptions: []
    }
  },
  created() {
    this.orgList()
    this.usersRole()
  },
  methods: {
    orgList() {
      orgList().then((res) => {
        if (res.code === 0) {
          const data = res.body
          this.orgOptions = orgCascader(data)
          console.log(this.orgOptions)
        }
      })
    },
    handleChange(val) {
      if (val.length > 0) {
        this.fromSearch.orgName = val[val.length - 1]
      } else {
        this.fromSearch.orgName = ''
      }
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
    handleSelectionChange(val) {
      const arr = []
      val.map((item) => {
        arr.push(item.id)
      })
      this.selectedRows = arr
    },
    // 查询所有用户列表
    list() {
      this.loading = true
      userList().then((res) => {
        if (res.code === 0) {
          this.List = res.body
        } else {
          this.$notify({
            message: '网络请求失败',
            type: 'error',
            offset: 100
          })
        }
      })
      this.loading = false
    },
    // 查询当前角色下的用户
    usersRole() {
      usersRole({ id: this.$route.query.id }).then((res) => {
        if (res.code === 0) {
          this.checkList = res.body
        } else {
          this.$notify({
            message: '加载失败',
            type: 'error',
            offset: 100
          })
        }

      })
    },
    // 取消
    close() {
      this.$router.push('/sys/roleList')
    },
    //分 配用户
    assign() {
      const params = {
        roleId: this.$route.query.id,
        userIds: this.checkList
      }
      params.userIds = params.userIds.toString()
      setUsersRole(params).then((res) => {
        if (res.code === 0) {
          this.$notify({
            message: '分配用户成功',
            type: 'success',
            offset: 100
          })
          this.$router.push('/sys/roleList')
        } else {
          this.$notify({
            message: '分配用户失败',
            type: 'error',
            offset: 100
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

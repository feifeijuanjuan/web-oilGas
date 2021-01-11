<template>
  <div class="app-container">
    <div class="form-add"><span class="first">角色管理</span>
      <span class="first-line">></span>
      <span class="first">分配用户</span>
    </div>
    <div class="form-wrapper">
      <el-form class="form-box clearfix">
        <el-checkbox-group v-model="checkList">
          <el-checkbox v-for="item in List" :label="item.id">{{ item.name }}</el-checkbox>
        </el-checkbox-group>
      </el-form>
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
import { usersRole, userList, setUsersRole } from '@/api/fill'
import { Message } from 'element-ui'
import Qs from 'qs'

export default {
  name: 'userAsign',
  data() {
    return {
      checkList: [],
      List: [] //用户列表数组
    }
  },
  created() {
    this.list()
    this.usersRole()
  },
  methods: {
    // 查询所有用户列表
    list() {
      this.loading = true
      userList().then((res) => {
        if (res.code === 0) {
          this.List = res.body
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
    //查询当前角色下的用户
    usersRole() {
      usersRole({ id: this.$route.query.id }).then((res) => {
        if (res.code === 0) {
          this.checkList = res.body
        } else {
          Message({
            message: '加载失败',
            type: 'error',
            duration: 5 * 1000
          })
        }

      })
    },
    // 取消
    close() {
      this.$router.push('/sys/roleList')
    },
    //分配用户
    assign() {
      const params = {
        roleId: this.$route.query.id,
        userIds: this.checkList
      }
      params.userIds = params.userIds.toString()
      setUsersRole(params).then((res) => {
        if (res.code === 0) {
          Message({
            message: '分配用户成功',
            type: 'success',
            duration: 5 * 1000
          })
          this.$router.push('/sys/roleList')
        } else {
          Message({
            message: '分配用户失败',
            type: 'error',
            duration: 5 * 1000
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

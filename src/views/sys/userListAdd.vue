<template>
  <div class="app-container">
    <div class="form-add"><span class="first">用户管理</span>
      <span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" :rules="rules" ref="ruleForm" size="small" label-width="140px"
               class="form-box clearfix"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="组织机构">
              <el-select v-model="editForm.orgId" placeholder="请选择组织机构" ref="selectReport">
                <el-option
                  :label="editForm.orgName"
                  :value="editForm.orgId"
                  style="min-height: 200px;overflow: auto;background-color:#fff"
                >
                  <el-tree
                    ref="selectTree"
                    :data="treeData"
                    highlight-current
                    :props="defaultProps"
                    node-key="orgId"
                    @node-click="handleNodeClick"
                  ></el-tree>
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="name" label="用户名称">
              <el-input v-model="editForm.name"></el-input>
            </el-form-item>

          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="登录用户名">
              <el-input v-model="editForm.nickName"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工号">
              <el-input v-model="editForm.no"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="editForm.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话">
              <el-input v-model="editForm.mobile"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="状态">
              <el-select v-model="editForm.status">
                <el-option v-for="item in statuAry" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="form-footer-btn">
      <el-button class="close-btn" @click="close">取 消</el-button>
      <el-button class="confrim-btn" type="primary"
                 @click="statu==='create'?createData('editForm'):updateData('editForm')"
      >确 定
      </el-button>
    </div>
  </div>

</template>

<script>
import { userAdd, userUpdate, userShow, orgList } from '@/api/fill'

import { orgTree } from '@/utils/addMenu'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        name: '',
        nickName: '',
        no: '',
        email: '',
        mobile: '',
        orgId: '',
        status: '',
        orgName: ''
      },
      statuAry: [
        {
          value: 0,
          label: '未激活'
        },
        {
          value: 1,
          label: '激活'
        }
      ],
      rules: {
        email: [
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      },
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {
    this.pageTitle = this.$route.query.title
    this.statu = this.$route.query.statu
  },
  mounted() {
    if (this.statu !== 'create') {
      this.update()
    } else {
      this.getMenu()
    }
  },
  methods: {
    getMenu() {
      orgList().then((res) => {
        if (res.code === 0) {
          this.treeData = orgTree(res.body)
          this.$nextTick(function() {
            this.$refs.selectTree.setCurrentKey(this.editForm.orgId)
          })
        } else {
          this.$notify({
            message: '请求失败',
            type: 'error',
            offset: 100
          })
        }
      })
    },
    handleNodeClick(data) {
      this.editForm.orgName = data.label
      this.editForm.orgId = data.id
      this.$refs.selectReport.blur()
    },
    // 数据回显
    update() {
      userShow(this.$route.query.id).then((res) => {
        if (res.code === 0) {
          this.editForm = res.body
          this.getMenu()
        } else {
          this.$notify({
            message: '请求失败',
            type: 'error',
            offset: 100
          })
        }
      })
    },
    close() {
      this.$router.push('/sys/userList')
    },
    // 新增保存
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          userAdd(this.editForm).then((res) => {
            if (res.code === 0) {
              this.$notify({
                message: '保存成功',
                type: 'success',
                offset: 100
              })
              this.$router.push('/sys/userList')
            } else {
              this.$notify({
                message: '保存失败' + (res.body == '已存在该记录！' ? ',' + res.body : ''),
                type: 'error',
                offset: 100
              })
            }
          })
        } else {
          return false
        }
      })
    },
    // 编辑保存
    updateData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          userUpdate(this.editForm).then((res) => {
            if (res.code === 0) {
              this.$notify({
                message: '修改成功',
                type: 'success',
                offset: 100
              })
              this.$router.push('/sys/userList')
            } else {
              this.$notify({
                message: '修改失败' + (res.body == '已存在该记录！' ? ',' + res.body : ''),
                type: 'error',
                offset: 100
              })
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

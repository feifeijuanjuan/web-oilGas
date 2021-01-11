<template>
  <div class="app-container">
    <div class="form-add"><span class="first">组织机构管理</span><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" ref="ruleForm" size="small" label-width="140px"
               class="form-box clearfix"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="父级组织机构">
              <el-select v-model="editForm.label" placeholder="请选择父级组织机构" ref="selectReport">
                <el-option
                  :label="editForm.label"
                  :value="editForm.parentId"
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
            <el-form-item label="组织机构名称">
              <el-input v-model="editForm.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="是否显示">
              <el-radio v-model="editForm.isShow" :label=true>是</el-radio>
              <el-radio v-model="editForm.isShow" :label=false>否</el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="排序">
              <el-input v-model="editForm.sort"></el-input>
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
import { orgList, orgAdd, orgShow, orgUpdate } from '@/api/fill'
import { Message } from 'element-ui'
import { orgTree } from '@/utils/addMenu'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        parentId: '',
        label: '',
        isShow: true,
        sort: '',
        name: '',
        id: ''
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
            this.$refs.selectTree.setCurrentKey(this.editForm.parentId)
          })
        } else {
          Message({
            message: '请求失败',
            type: 'error',
            duration: 5 * 1000
          })
        }
      })
    },
    handleNodeClick(data) {
      this.editForm.label = data.label
      this.editForm.parentId = data.id
      this.$refs.selectReport.blur()
    },
    // 数据回显
    update() {
      console.log(this.$route.query.id)
      orgShow(this.$route.query.id).then((res) => {
        if (res.code === 0) {
          const data = res.body
          this.editForm.parentId = data.parentCode
          this.editForm.isShow = data.isDisable
          this.editForm.sort = data.orgOrder
          this.editForm.name = data.orgName
          this.editForm.id = data.orgCode
          this.editForm.label = data.parentName
          this.getMenu()
        } else {
          Message({
            message: '请求失败',
            type: 'error',
            duration: 5 * 1000
          })
        }
      })
    },
    close() {
      this.$router.push('/sys/orgList')
    },
    // 新增保存
    createData() {
      orgAdd(this.editForm).then((res) => {
        if (res.code === 0) {
          Message({
            message: '保存成功',
            type: 'error',
            duration: 5 * 1000
          })
          this.$router.push('/sys/orgList')
        } else {
          Message({
            message: '保存失败',
            type: 'error',
            duration: 5 * 1000
          })
        }
      })
    },
    // 编辑保存
    updateData() {
      orgUpdate(this.editForm).then((res) => {
        if (res.code === 0) {
          Message({
            message: '保存成功',
            type: 'error',
            duration: 5 * 1000
          })
          this.$router.push('/sys/orgList')
        } else {
          Message({
            message: '保存失败',
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

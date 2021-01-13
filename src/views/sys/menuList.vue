<template>
  <div class="app-container">
    <div class="filter-container" style="padding-bottom: 15px;">
      <div class="handel-btn">
        <div class="submenu-title">
          菜单管理
        </div>
        <div>

          <el-button size="small" class="btn-add" style="margin-bottom: 10px;" @click="handleAdd">
            <i
              class="icon iconfont i-add"
            >&#xe880;</i>新增
          </el-button>
          <el-button size="small" class="btn-edit" style="margin-bottom: 10px;"
                     @click="handleEdit"
          ><i
            class="icon iconfont i-edit"
          >&#xe630;</i>编辑
          </el-button>
          <el-button size="small" class="btn-del" style="margin-bottom: 10px;" @click="handleDel">
            <i
              class="icon iconfont i-del"
            >&#xe614;</i>删除
          </el-button>
        </div>
      </div>
      <el-tree
        ref="tree"
        :data="treeData"
        :props="defaultProps"
        show-checkbox
        :check-strictly=true
      ></el-tree>
    </div>
  </div>
</template>

<script>
import { menuList, menuDelete } from '@/api/fill'
import { filterMenu } from '@/utils/addMenu'
import { Message } from 'element-ui'

export default {
  data() {
    return {
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {
    this.getMenu()
  },
  methods: {
    getMenu() {
      menuList().then((res) => {
        if (res.code === 0) {
          this.treeData = filterMenu(res.body)
        }
      })
    },
    handleNodeClick(data) {
      console.log(data)
    },
    handleAdd() {
      const param = {
        title: '新增',
        statu: 'create'
      }
      this.$router.push({ path: '/menuListAdd', query: param })
    },
    handleEdit() {
      const checkTree = this.$refs.tree.getCheckedNodes() //获取选中的节点
      if (checkTree.length === 1) {
        const param = {
          title: '编辑',
          statu: 'update',
          id: checkTree[0].menuId
        }
        this.$router.push({ path: '/menuListAdd', query: param })
      } else {
        console.log(11111)
        this.$message({
          message: '请选择一条数据进行编辑',
          type: 'error'
        })
        /* Message({
           message: '请选择一条数据进行编辑',
           type: 'error',
         })*/
      }
    },
    handleDel() {
      const checkTree = this.$refs.tree.getCheckedNodes()
      const checkTreeIds = []
      checkTree.forEach((item, index) => {
        checkTreeIds.push(item.menuId)
      })
      if (checkTreeIds.length > 0) {
        this.$confirm('确认删除选择数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const params = {
            'menuIds': checkTreeIds
          }
          params.menuIds = params.menuIds.toString()
          menuDelete(params).then((res) => {
            if (res.code === 0) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              this.getMenu()
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
        this.$message({
          message: '请选择一条数据进行删除',
          type: 'error'
        })
      }
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

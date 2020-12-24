<template>
  <div class="app-container">
    <div class="form-add"><span class="first">能源局填报</span>
      <span class="first-line">></span>
      <span class="first">按年填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="200px" class="form-box clearfix">
<!--        /*盟市名称、时间
        盟市储气设施总容积
        地方政府日均三天计划储气量
        地方政府日均三天实际储气量
        盟市租赁储罐数量
        盟市自建储罐数量
        天然气历史缺口量
        盟市储气日调用量
        盟市气化装置数量
        盟市气化装置日均气化量*/-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="no-unit" >
              <el-date-picker
                v-model="editForm.time"
                placeholder="请选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市储气设施总容积">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地方政府日均三天计划储气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="地方政府日均三天实际储气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="盟市租赁储罐数量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">个</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市自建储罐数量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="天然气历史缺口量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市储气日调用量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="盟市气化装置数量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">个</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市气化装置日均气化量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="form-footer-btn" >
      <el-button  class="close-btn" @click="close">取 消</el-button>
      <el-button class="confrim-btn" type="primary"
                 @click="dialogStatu==='create'?createData('editForm'):updateData('editForm')">确 定
      </el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'editFormAdd',
  props: {
    rowId: {
      type: String,
      default: ''
    },
    dialogStatu: {
      type: String,
      default: ''
    },
    fasFieldTable: {
      type: Function,
      default: null
    },
    dialogFormVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editForm: {
        one: ''
      },
      options: [{
        value: '选项1',
        label: '安塞油田'
      }]
    }
  },
  created() {
    this.pageTitle = this.$route.query.title
    this.statu = this.$route.query.statu
  },
  mounted() {
  },
  methods: {
    close() {
      this.$router.push('/nengyuanjuyear/list')
    },
    createData() {
      this.$router.push('/nengyuanjuyear/list')
    },
    updateData() {
      this.$router.push('/nengyuanjuyear/list')
    }
  }
}
</script>

<style scoped>

</style>

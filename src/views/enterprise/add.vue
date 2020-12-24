<template>
  <div>
    <div class="form-add"><span class="first">煤制气企业填报</span>
      <span class="first-line">></span>
      <span class="first">企业信息填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="90px" class="form-box clearfix">
        <!--        /*1企业名称、2时间、3企业性质、4税收、5企业人数、6状态*/-->

        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" >
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期">
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
            <el-form-item label="企业性质">
              <el-select v-model="editForm.oil" placeholder="请选择">
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
          <el-col :span="12">
            <el-form-item label="税收">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业人数">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="form-footer-btn" >
        <el-button class="close-btn" @click="close">取 消</el-button>
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
      this.$router.push('/enterprise/list')
    },
    createData() {
      this.$router.push('/enterprise/list')
    },
    updateData() {
      this.$router.push('/enterprise/list')
    }
  }
}
</script>

<style scoped>

</style>

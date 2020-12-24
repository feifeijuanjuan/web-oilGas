<template>
  <div class="app-container">
    <div class="form-add"><span class="first">管道企业填报</span>
      <span class="first-line">></span>
      <span class="first">按日填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="110px" class="form-box clearfix">
<!--        /*1企业名称、2时间、3盟市名称、管线名、管线进油量、管线出油量、
        管线管存量、管线累计输油、城市燃气接收量、甲醇接收量、化肥接收量、lng接收气量、状态*/-->

        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="no-unit" >
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
            <el-form-item label="盟市名称" class="no-unit" >
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="管线名" class="no-unit" >
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="管线进油量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="管线出油量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="管线管存量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="管线累计输油">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="城市燃气接收量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="甲醇接收量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="化肥接收量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="lng接收气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="状态" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
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
      this.$router.push('/pipelineday/list')
    },
    createData() {
      this.$router.push('/pipelineday/list')
    },
    updateData() {
      this.$router.push('/pipelineday/list')
    }
  }
}
</script>

<style scoped>

</style>

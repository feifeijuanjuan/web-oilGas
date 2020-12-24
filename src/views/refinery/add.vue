<template>
  <div class="app-container">
    <div class="form-add"><span class="first">炼厂企业填报</span>
      <span class="first-line">></span>
      <span class="first">按月填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="140px" class="form-box clearfix">
<!--        /*1企业名称、2时间、3盟市名称、4状态、
        原油月加工量、原油计划月加工量、成品油产量、计划成品油月产量、计划负荷率、平均负荷率、
        89#汽油产量、92#汽油产量、95#汽油产量、
        负35号柴油产量、负20号柴油产量、负10号柴油产量、0号柴油产量、
        煤油产量*/-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="no-unit">
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
            <el-form-item label="盟市名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="原油月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="原油计划月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="成品油产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计划成品油月产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="计划负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="89#汽油产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="92#汽油产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="95#汽油产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负35号柴油产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="负20号柴油产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负10号柴油产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="0号柴油产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label=" 煤油产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
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
      this.$router.push('/refinery/list')
    },
    createData() {
      this.$router.push('/refinery/list')
    },
    updateData() {
      this.$router.push('/refinery/list')
    }
  }
}
</script>

<style scoped>

</style>

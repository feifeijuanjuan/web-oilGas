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
      <el-form :model="editForm" :rules="rules" ref="ruleForm" size="small" label-width="160px"
               class="form-box clearfix"
      >
        <!--        /*1企业名称、2时间、3盟市名称、管线名、管线进油量、管线出油量、
                管线管存量、管线累计输油、城市燃气接收量、甲醇接收量、化肥接收量、lng接收气量、状态*/-->

        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="no-unit" prop="enterName">
              <el-select v-model="editForm.enterName" placeholder="请选择企业名称" clearable>
                <el-option
                  v-for="item in enterNameAry"
                  :key="item.dictItemName"
                  :label="item.dictItemName"
                  :value="item.dictItemName"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="no-unit" prop="recordDate">
              <el-date-picker
                v-model="editForm.recordDate"
                value-format="yyyy-MM-dd"
                placeholder="请选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="管线名" class="no-unit">
              <el-select v-model="editForm.pipelineName" placeholder="请选择管线名" clearable>
                <el-option
                  v-for="item in pipelineNameTypeAry"
                  :key="item.typeName"
                  :label="item.typeName"
                  :value="item.typeName"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="管线进油量">
              <el-input placeholder="请输入内容" v-model="editForm.pipelineInputVolume">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="管线出油量">
              <el-input placeholder="请输入内容" v-model="editForm.pipelineOutputVolume">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="管线管存量">
              <el-input placeholder="请输入内容" v-model="editForm.pipelineStock">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="管线累计输油">
              <el-input placeholder="请输入内容" v-model="editForm.pipelineCumulativeVolume">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="末站压力阈值" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.pressureThreshold">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="末站压力实际值" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.pressureActualValue">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设计输油能力" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.runPlanPressure">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="实际输油能力" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.runPressure">
              </el-input>
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
import { dic, pipelinedaysave, pipelinedayUpdate } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        recordDate: '',
        enterName: '',
        pipelineName: '',
        pipelineInputVolume: '',
        pipelineOutputVolume: '',
        pipelineStock: '',
        pipelineCumulativeVolume: '',
        pressureThreshold: '',
        pressureActualValue: '',
        runPlanPressure: '',
        runPressure: ''
      },
      rules: {
        enterName: [
          { required: true, message: '请选择企业名称', trigger: 'change' }
        ],
        recordDate: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
      pipelineNameTypeAry: [],
      enterNameAry:[]
    }
  },
  created() {
    this.pageTitle = this.$route.query.title
    this.statu = this.$route.query.statu
    this.dic()
  },
  mounted() {
    if (this.statu !== 'create') {
      this.update()
    }
  },
  methods: {
    dic() {
      dic().then((res) => {
        if (res.success) {
          const pipelineNameType = res.data.yuanyouguandao
          const enterName=res.data.enterName
          this.pipelineNameTypeAry = pipelineNameType
          this.enterNameAry=enterName
        } else {
          Message({
            message: '网络请求失败',
            type: 'error',
            duration: 5 * 1000
          })
        }
      })
    },
    // 数据回显
    update() {
      pipelinedayUpdate(this.$route.query.id).then((res) => {
        if (res.code === 0) {
          this.editForm = res.body
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
      this.$router.push('/pipelineday/crudeList')
    },
    // 新增保存
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          const param = this.editForm
          param['pipelineType'] = '原油管线'
          pipelinedaysave(param).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/pipelineday/crudeList')
            } else {
              Message({
                message: '保存失败',
                type: 'error',
                duration: 5 * 1000
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
          const param = this.editForm
          param['pipelineType'] = '原油管线'
          pipelinedaysave(param).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/pipelineday/crudeList')
            } else {
              Message({
                message: '修改失败',
                type: 'error',
                duration: 5 * 1000
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

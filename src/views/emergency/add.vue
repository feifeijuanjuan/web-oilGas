<template>
  <div class="app-container">
    <div class="form-add"><span class="first">能源局填报</span>
      <span class="first-line">></span>
      <span class="first">应急调峰事件填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="160px" :rules="rules" ref="ruleForm"
               class="form-box clearfix"
      >
<!--        /*league_city_name盟市名称（地区）
        enter_name		企业（管理方）
        response_level	响应等级
        peak_object		调峰对象
        specific_measure	具体措施
        record_date		调峰时间*/-->

        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市名称" class="" prop="leagueCityName">
              <el-select v-model="editForm.leagueCityName">
                <el-option
                  v-for="item in leagueCityTypeAry"
                  :key="item.dictItemName"
                  :label="item.dictItemName"
                  :value="item.dictItemName"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="" prop="recordDate">
              <el-date-picker
                v-model="editForm.recordDate"
                placeholder="请选择日期"
                value-format="yyyy-MM-dd"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="">
              <el-select v-model="editForm.enterName">
                <el-option
                  v-for="item in enterNameAry"
                  :key="item.typeId"
                  :label="item.typeName"
                  :value="item.typeName"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="响应等级" class="">
              <el-input placeholder="请输入内容" v-model="editForm.responseLevel">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="调峰对象" class="">
            <el-input placeholder="请输入内容" v-model="editForm.specificMeasure">
            </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="具体措施" class="">
              <el-input placeholder="请输入内容" v-model="editForm.specificMeasure">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="form-footer-btn">
      <el-button class="close-btn" @click="close">取 消</el-button>
      <el-button class="confrim-btn" @click="statu==='create'?createData('editForm'):updateData('editForm')">确 定
      </el-button>
    </div>

  </div>

</template>

<script>
import { emergencyUpdate, emergencysave, dic } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      leagueCityTypeAry: [],//盟市名称
      enterNameAry:[],
      editForm: {
        recordDate:'',
        leagueCityName:'',
        enterName:'',
        responseLevel:'',
        peakObject:'',
        specificMeasure:''
      },
      pageTitle: '',
      statu: '',
      rules: {
        leagueCityName: [
          { required: true, message: '请输入盟市名称', trigger: 'change' }
        ],
        recordDate: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
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
          const data = res.data.leagueCityType
          const enterName=res.data.nengyuanju
          this.leagueCityTypeAry = data
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
      emergencyUpdate(this.$route.query.id).then((res) => {
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
    // 取消
    close() {
      this.$router.push('/emergency/list')
    },
    // 新增保存
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          emergencysave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/emergency/list')
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
          emergencysave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/emergency/list')
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
.text-center {
  text-align: center;
}
</style>

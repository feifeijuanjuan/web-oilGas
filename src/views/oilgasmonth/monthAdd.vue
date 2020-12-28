<template>
  <div class="app-container">
    <div class="form-add"><span class="first">油气田企业填报</span>
      <span class="first-line">></span>
      <span class="first">按月填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" :rules="rules" ref="ruleForm" label-width="110px"
               class="form-box clearfix"
      >
        <!--        /*1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
                7月产量、8计划月产量、9月供应量、10计划月供应量、11区内供应量、12区外供应量、
                13月产能、14综合能源消费量、15状态*/-->

        <el-row>
          <el-col :span="12">
            <el-form-item label="油气田名称" class="no-unit" prop="oilGasName">
              <el-input placeholder="请输入内容" v-model="editForm.oilGasName">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="no-unit" prop="recordDate">
              <el-date-picker
                v-model="editForm.recordDate"
                type="month"
                value-format="yyyy-MM-dd"
                placeholder="请选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
<!--        <el-row>
          <el-col :span="12">
            <el-form-item label="油气田区域类型" class="no-unit">
              <el-select v-model="editForm.oilGasAreaType" placeholder="请选择">
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
            <el-form-item label="油气田区域名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.oilGasAreaName">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业结构" class="no-unit">
              <el-select v-model="editForm.groupType" placeholder="请选择">
                <el-option
                  v-for="item in optionsGroupType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="盟市名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.leagueCityName">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="月产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldOilGas">
                <template slot="append">{{ unit }}</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计划月产量">
              <el-input placeholder="请输入内容" v-model="editForm.oilGasPlanMonthYield">
                <template slot="append">{{ unit }}</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="月供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyOilGas">
                <template slot="append">{{ unit }}</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计划月供应量">
              <el-input placeholder="请输入内容" v-model="editForm.oilGasPlanMonthSupply">
                <template slot="append">{{ unit }}</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="区内供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyInOilGas">
                <template slot="append">{{ unit }}</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="区外供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyOutOilGas">
                <template slot="append">{{ unit }}</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="月产能">
              <el-input placeholder="请输入内容" v-model="editForm.capacityOilGas">
                <template slot="append">{{ unit }}</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="综合能源消费量">
              <el-input placeholder="请输入内容" v-model="editForm.energyConsumption">
                <template slot="append">{{ unit }}</template>
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
import { oilgasmonthUpdate, oilgasmonthSave } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        oilGasName: '',
        recordDate: '',
        oilGasAreaType: '',
        oilGasAreaName: '',
        groupType: '',
        leagueCityName: '',
        yieldOilGas: '',
        oilGasPlanMonthYield: '',
        supplyOilGas: '',
        oilGasPlanMonthSupply: '',
        supplyInOilGas: '',
        supplyOutOilGas: '',
        capacityOilGas: '',
        energyConsumption: ''
      },
      pageTitle: '',
      statu: '',
      options: [
        {
          value: 1,
          label: '油田'
        },
        {
          value: 2,
          label: '气田'
        }
      ],
      optionsGroupType: [
        {
          value: 1,
          label: '中石化'
        },
        {
          value: 2,
          label: '中石油'
        }
      ],
      unit: '万吨',
      rules: {
        oilGasName: [
          { required: true, message: '请输入油气田名称', trigger: 'blur' }
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
  },
  mounted() {
    if (this.statu !== 'create') {
      this.update()
    }
  },
  methods: {
    // 数据回显
    update() {
      oilgasmonthUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/oilgasmonth/list')
    },
    // 新增保存
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          oilgasmonthSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/oilgasmonth/list')
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
          oilgasmonthSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/oilgasmonth/list')
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

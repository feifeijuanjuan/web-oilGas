<template>
  <div class="app-container">
    <h3 style="border-bottom: 1px solid #f7f7f7;font-weight: normal;padding-bottom: 10px">{{ pageTitle }}</h3>
    <el-form :model="editForm" size="small" label-width="110px" class="form-box clearfix">
      <!--        /*1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
              7月产量、8计划月产量、9月供应量、10计划月供应量、11区内供应量、12区外供应量、
              13月产能、14综合能源消费量、15状态*/-->

      <el-row>
        <el-col :span="12">
          <el-form-item label="油气田名称" class="no-unit">
            <el-input placeholder="请输入内容" v-model="editForm.oilGasName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="日期" class="no-unit">
            <el-date-picker
              v-model="editForm.recordDate"
              placeholder="请选择日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="油气田区域类型" class="no-unit">
            <el-select v-model="editForm.oilGasAreaType" placeholder="请选择" @change="changeUint">
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
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="集团标识" class="no-unit">
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
            <el-input placeholder="请输入内容" v-model="editForm.one">
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
      <el-row>
        <el-col :span="12">
          <el-form-item label="状态" class="no-unit">
            <el-select v-model="editForm.status" placeholder="请选择">
              <el-option
                v-for="item in optionsStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="text-center" style="margin-top: 30px">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="dialogStatu==='create'?createData('editForm'):updateData('editForm')">确 定
      </el-button>
    </div>
  </div>

</template>

<script>
import { save, update } from '@/api/fill'
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
        yieldOilGas: '',
        oilGasPlanMonthYield: '',
        supplyOilGas: '',
        oilGasPlanMonthSupply: '',
        supplyInOilGas: '',
        supplyOutOilGas: '',
        capacityOilGas: '',
        energyConsumption: '',
        status: ''
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
      optionsStatus: [
        {
          value: 1,
          label: '启用'
        },
        {
          value: 2,
          label: '禁用'
        },
        {
          value: 3,
          label: '删除'
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
      ]
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
      update(this.$route.query.id).then((res) => {
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
      save(this.editForm).then((res) => {
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
    },
    // 编辑保存
    updateData() {
      save(this.editForm).then((res) => {
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
    }
  }
}
</script>

<style scoped>

</style>

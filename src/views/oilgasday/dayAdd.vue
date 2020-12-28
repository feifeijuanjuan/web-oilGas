<template>
  <div class="app-container">
    <div class="form-add"><span class="first">油气田企业填报</span>
      <span class="first-line">></span>
      <span class="first">按日填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="160px" :rules="rules" ref="ruleForm"
               class="form-box clearfix"
      >
        <!--        1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
                7天然气日产量、8天然气日供气量、9天然气计划日供气量、10天然气日供气合同量、11直供管道公司日供气量、
                12直供甲醇厂日供气量、
                13直供合成氨日供气量、
                14直供液化工厂日供气量、-->

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
                placeholder="请选择日期"
                value-format="yyyy-MM-dd"
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
            <el-form-item label="天然气日产量">
              <el-input placeholder="请输入内容" v-model="editForm.dayYieldNaGas">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="天然气日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.daySupplyNaGas">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="天然气计划日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.dayPlanSupplyNaGas">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="天然气日供气合同量">
              <el-input placeholder="请输入内容" v-model="editForm.daySupplyNaGasContract">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="直供管道公司日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.daySupplyPipelineCompany">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="直供甲醇厂日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.daySupplyCh3oh">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="直供合成氨日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.daySupplyNh3">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="直供液化工厂日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.daySupplyLiquPlant">
                <template slot="append">万立方米</template>
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
import { update, save } from '@/api/fill'
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
        dayYieldNaGas: '',
        daySupplyNaGas: '',
        dayPlanSupplyNaGas: '',
        daySupplyNaGasContract: '',
        daySupplyPipelineCompany: '',
        daySupplyCh3oh: '',
        daySupplyNh3: '',
        daySupplyLiquPlant: ''
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
      this.$router.push('/oilgasday/list')
    },
    // 新增保存
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          save(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/oilgasday/list')
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
          save(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/oilgasday/list')
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

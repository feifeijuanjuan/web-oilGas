<template>
  <div class="app-container">
    <div class="form-add"><span class="first">国土资源厅按年填报</span>
      <span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" :rules="rules" ref="ruleForm" label-width="130px"
               class="form-box clearfix"
      >
        <!--        /*1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
                7累计探明地质储量、8剩余技术可采储量、9剩余经济可采储量、10储采比、11油气田人数、12远景资源量、
                13预测储量、14控制储量、15油气田面积、16状态*/-->

        <el-row>
          <el-col :span="12">
            <el-form-item label="气田名称" class="no-unit" prop="oilGasName">
              <el-input placeholder="请输入内容" v-model="editForm.oilGasName">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="no-unit" prop="recordDate">
              <el-date-picker
                v-model="editForm.recordDate"
                placeholder="请选择日期"
                type="year"
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
            <el-form-item label="累计探明地质储量">
              <el-input placeholder="请输入内容" v-model="editForm.reservesCumulativeKnow">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="剩余技术可采储量">
              <el-input placeholder="请输入内容" v-model="editForm.recoveryReservesSurplusTech">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="剩余经济可采储量">
              <el-input placeholder="请输入内容" v-model="editForm.recoveryReservesSurplusEcon">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="储采比">
              <el-input placeholder="请输入内容" v-model="editForm.reserveProductionRatio">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="气田人数" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.peopleNum">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="远景资源量">
              <el-input placeholder="请输入内容" v-model="editForm.prospectiveResources">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="预测储量">
              <el-input placeholder="请输入内容" v-model="editForm.predictedReserves">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="控制储量">
              <el-input placeholder="请输入内容" v-model="editForm.controlReserve">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="气田面积">
              <el-input placeholder="请输入内容" v-model="editForm.oilGasSize">
                <template slot="append">万立方米</template>
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
import { guotuSave, guotuUpdate } from '@/api/fill'
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
        groupType:'',
        leagueCityName: '',
        reservesCumulativeKnow: '',
        recoveryReservesSurplusTech: '',
        recoveryReservesSurplusEcon: '',
        reserveProductionRatio: '',
        peopleNum: '',
        prospectiveResources: '',
        predictedReserves: '',
        controlReserve: '',
        oilGasSize: ''
      },
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
      rules: {
        oilGasName: [
          { required: true, message: '请输入气田名称', trigger: 'blur' }
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
      guotuUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/guotu/gasList')
    },
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          guotuSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/guotu/gasList')
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

    updateData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          guotuSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/guotu/gasList')
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

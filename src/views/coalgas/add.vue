<template>
  <div class="app-container">
    <div class="form-add"><span class="first">煤制气企业填报</span>
      <span class="first-line">></span>
      <span class="first">按月填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" :rules="rules" ref="ruleForm"

               size="small" label-width="140px" class="form-box clearfix"
      >
        <!--        /*1企业名称、2时间、3盟市名称、4计划粉煤月加工量、5粉煤月加工量、6平均负荷率、
                7计划平均负荷率、8水资源用量、9单位产品原料消耗、10单位产品综合能耗、11单位产品新鲜水耗、12煤制气产量、
                13煤制气月供应量、14管道气供应量、15CNG供应量、16LNG供应量、17终端消费量、18化工消费量、19火力发电消费量、20供热消费量、21工业消费量、22生活消费量、23建筑业消费量、24商业消费量、25交通消费量、26调峰煤制气用量、27煤制气计划月供应量、28煤制气消费量、29状态*/-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="no-unit" prop="enterName">
              <el-input placeholder="请输入内容" v-model="editForm.enterName">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="no-unit" prop="recordDate">
              <el-date-picker
                v-model="editForm.recordDate"
                value-format="yyyy-MM-dd"
                type="month"
                placeholder="请选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.leagueCityName">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="煤制气产量">
              <el-input placeholder="请输入内容" v-model="editForm.gasYield">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="计划煤制气（天然气）产量">
              <el-input placeholder="请输入内容" v-model="editForm.gasPlanMonthProduct">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="粉煤月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.pulverizedCoalProcessingCapacity">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="计划粉煤月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.coalProcessMonth">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.avgLoadRate">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="计划平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.planAvgLoadRate">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="水资源用量">
              <el-input placeholder="请输入内容" v-model="editForm.waterUse">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="单位产品原料消耗">
              <el-input placeholder="请输入内容" v-model="editForm.unitProductRawSales">
                <template slot="append">吨标煤/吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单位产品综合能耗">
              <el-input placeholder="请输入内容" v-model="editForm.unitProductComprehensiveEnergySales">
                <template slot="append">吨标煤/吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="单位产品新鲜水耗">
              <el-input placeholder="请输入内容" v-model="editForm.unitProductFreshWaterSales">
                <template slot="append">吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="煤制气供应量">
              <el-input placeholder="请输入内容" v-model="editForm.gasSupply">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="煤制气计划月供应量">
              <el-input placeholder="请输入内容" v-model="editForm.gasPlanMonthSupply">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="管道气供应量">
              <el-input placeholder="请输入内容" v-model="editForm.pipelineGasSupply">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="CNG供应量">
              <el-input placeholder="请输入内容" v-model="editForm.cngSupply">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="LNG供应量">
              <el-input placeholder="请输入内容" v-model="editForm.lngSupply">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="煤制气消费量">
              <el-input placeholder="请输入内容" v-model="editForm.gasConsumption">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="终端消费量">
              <el-input placeholder="请输入内容" v-model="editForm.householdSales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="化工消费量">
              <el-input placeholder="请输入内容" v-model="editForm.chemicalConsumption">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="火力发电消费量">
              <el-input placeholder="请输入内容" v-model="editForm.thermalPowerSales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="工业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.industrySales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="供热消费量">
              <el-input placeholder="请输入内容" v-model="editForm.heatingSales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="建筑业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.constructionIndustrySales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.businessSales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="交通消费量">
              <el-input placeholder="请输入内容" v-model="editForm.trafficSales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="生活消费量">
              <el-input placeholder="请输入内容" v-model="editForm.lifeSales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>

          <el-col :span="12">
            <el-form-item label="调峰煤制气用量">
              <el-input placeholder="请输入内容" v-model="editForm.peakShavingSales">
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
import { coalgasSave, coalgasUpdate } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        enterName: '',
        recordDate: '',
        leagueCityName: '',
        coalProcessMonth: '',
        gasPlanMonthProduct: '',
        pulverizedCoalProcessingCapacity: '',
        avgLoadRate: '',
        planAvgLoadRate: '',
        waterUse: '',
        unitProductRawSales: '',
        unitProductComprehensiveEnergySales: '',
        unitProductFreshWaterSales: '',
        gasYield: '',
        gasSupply: '',
        pipelineGasSupply: '',
        cngSupply: '',
        lngSupply: '',
        householdSales: '',
        chemicalConsumption: '',
        thermalPowerSales: '',
        heatingSales: '',
        industrySales: '',
        lifeSales: '',
        constructionIndustrySales: '',
        businessSales: '',
        trafficSales: '',
        peakShavingSales: '',
        gasPlanMonthSupply: '',
        gasConsumption: ''
      },
      rules: {
        enterName: [
          { required: true, message: '请输入企业名称', trigger: 'blur' }
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
      coalgasUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/coalgas/list')
    },
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          coalgasSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/coalgas/list')
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
          coalgasSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/coalgas/list')
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

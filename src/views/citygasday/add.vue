<template>
  <div class="app-container">
    <div class="form-add"><span class="first">城市燃气企业填报</span>
      <span class="first-line">></span>
      <span class="first">按日填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" :rules="rules" ref="ruleForm" size="small" label-width="180px"
               class="form-box clearfix"
      >
        <!--        /*企业名称、盟市名称、时间、状态、
                天然气消费量、天然气需求量、天然气供应合同量、天然气计划日供气量、
                工业用户天然气消费量、商业用户天然气消费量、建筑业天然气消费量、生活销售天然气销售量、供暖天然气销售量、
                可中断工业消费量、不可中断工业消费量、
                居民用气量天然气日消费量(万立方米)、民生用气量天然气日消费量(万立方米)、社会车辆用气天然气日消费量(万立方米)、商业用户天然气日消费量(万立方米)、工业燃料天然气日消费量(万立方米)、
                甲醇天然气日消费量(万立方米)、化肥天然气日消费量(万立方米)、LNG天然气日消费量(万立方米）*-->
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
            <el-form-item label="天然气消费量">
              <el-input placeholder="请输入内容" v-model="editForm.naturalGasSales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="天然气需求量">
              <el-input placeholder="请输入内容" v-model="editForm.gasDemand">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="天然气供应合同量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyNaGasContract">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="天然气计划日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.naturalGasPlanSupply">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="可中断工业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.interruptibleUserSales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="不可中断工业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.uninterruptibleUserSales">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="居民用气量天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.householdSalesDay">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="民生用气量天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.livelihoodSalesDay">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="社会车辆用气天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.cityTrafficSalesDay">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="商业用户天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.businessSalesDay">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工业燃料天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.industrySalesDay">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="甲醇天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.methanolSalesDay">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="化肥天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.fertilizerSalesDay">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="LNG天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.lngSalesDay">
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
import { citygasdayrhsave, citygasdayUpdate } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        recordDate: '',
        enterName: '',
        leagueCityName: '',
        naturalGasSales: '',
        gasDemand: '',
        supplyNaGasContract: '',
        naturalGasPlanSupply: '',
        interruptibleUserSales: '',
        uninterruptibleUserSales: '',
        householdSalesDay: '',
        livelihoodSalesDay: '',
        cityTrafficSalesDay: '',
        businessSalesDay: '',
        industrySalesDay: '',
        methanolSalesDay: '',
        fertilizerSalesDay: '',
        lngSalesDay: ''

      },
      rules: {
        enterName: [
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
      citygasdayUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/citygasday/list')
    },
    // 新增保存
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          citygasdayrhsave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/citygasday/list')
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
          citygasdayrhsave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/citygasday/list')
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

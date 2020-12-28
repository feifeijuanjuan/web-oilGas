<template>
  <div class="app-container">
    <div class="form-add"><span class="first">成品油销售企业填报</span>
      <span class="first-line">></span>
      <span class="first">销售按月填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" :rules="rules" ref="ruleForm" size="small" label-width="140px"
               class="form-box clearfix">
        <!--        1企业名称、2时间、3盟市名称、
                89#汽油销售量、92#汽油销售量、95#汽油销售量、
                0#柴油销售量、负35#柴油销售量、负10#柴油销售量、负20#柴油销费量、
                煤油销费量、
                柴油消费量预测值、汽油消费量预测、
                成品油区内消费量、成品油区外消费量-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="no-unit" prop="enterName">
              <el-select v-model="editForm.enterName" placeholder="请选择">
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
                type="month"
                value-format="yyyy-MM-dd"
                v-model="editForm.recordDate"
                placeholder="请选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市名称" class="no-unit">
              <el-select v-model="editForm.leagueCityName" placeholder="请选择">
                <el-option
                  v-for="item in leagueCityNameAry"
                  :key="item.dictItemName"
                  :label="item.dictItemName"
                  :value="item.dictItemName"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="89#汽油销售量">
              <el-input placeholder="请输入内容" v-model="editForm.salesGasoline89">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="92#汽油销售量">
              <el-input placeholder="请输入内容" v-model="editForm.salesGasoline92">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="95#汽油销售量">
              <el-input placeholder="请输入内容" v-model="editForm.salesGasoline95">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="0#柴油销售量">
              <el-input placeholder="请输入内容" v-model="editForm.salesDieselOil0">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负35#柴油销售量">
              <el-input placeholder="请输入内容" v-model="editForm.salesDieselOilMinus35">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="负10#柴油销售量">
              <el-input placeholder="请输入内容" v-model="editForm.salesDieselOilMinus10">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负20#柴油销费量">
              <el-input placeholder="请输入内容" v-model="editForm.salesDieselOilMinus20">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="煤油销费量">
              <el-input placeholder="请输入内容" v-model="editForm.aviationCoalSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="柴油消费量预测值">
              <el-input placeholder="请输入内容" v-model="editForm.salesPlanDieselOil">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="汽油消费量预测">
              <el-input placeholder="请输入内容" v-model="editForm.salesPlanGasoline">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="成品油区内消费量">
              <el-input placeholder="请输入内容" v-model="editForm.productedOilInAreaSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="成品油区外消费量">
              <el-input placeholder="请输入内容" v-model="editForm.productedOilOutAreaSales">
                <template slot="append">万吨</template>
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
import { chengpinyousalelSave, chengpinyousaleUpdate, dic } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        enterName: '',
        recordDate: '',
        leagueCityName: '',
        salesGasoline89: '',
        salesGasoline92: '',
        salesGasoline95: '',
        salesDieselOil0: '',
        salesDieselOilMinus35: '',
        salesDieselOilMinus10: '',
        salesDieselOilMinus20: '',
        aviationCoalSales: '',
        salesPlanDieselOil: '',
        salesPlanGasoline: '',
        productedOilInAreaSales: '',
        productedOilOutAreaSales: ''
      },
      leagueCityNameAry:[],
      enterNameAry:[],
      rules: {
        enterName: [
          { required: true, message: '请选择企业名称', trigger: 'change' }
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
          const data = res.data
          const leagueCityType = data.leagueCityType
          const enterName=data.enterName
          this.leagueCityNameAry = leagueCityType
          this.enterNameAry=enterName

        }
      })
    },
    // 数据回显
    update() {
      chengpinyousaleUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/chengpinyousale/list')
    },
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          chengpinyousalelSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/chengpinyousale/list')
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
          chengpinyousalelSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/chengpinyousale/list')
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

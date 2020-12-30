<template>
  <div class="app-container">
    <div class="form-add"><span class="first">煤制油企业填报</span>
      <span class="first-line">></span>
      <span class="first">按月填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" :rules="rules" ref="ruleForm" size="small" label-width="140px"
               class="form-box clearfix"
      >
        <!--        /*1企业名称、2时间、3状态、4计划粉煤月加工量、5粉煤月加工量、6平均负荷率、
                7计划平均负荷率、8水资源用量、9单位产品原料消耗、10单位产品综合能耗、11单位产品新鲜水耗、12石脑油产量、
                13柴油产量、14液化气产量、15干气产量、16石脑油供应量、17柴油供应量、18液化气供应量、19干气供应量、20石脑油销售量、
                21柴油销售量、22液化气销售量、23干气销售量、24汽运供应量、25管输供应量、26工程车辆销售量、27城市交通销售量、28工业销售量、
                乙烯原料销售量、调合汽油销售量、重整原料销售量、原料煤价格、煤制油品价格、呼和浩特市销售量、包头市销售量、乌海市销售量、
                赤峰市销售量、通辽市销售量、鄂尔多斯市销售量、
                呼伦贝尔市销售量、巴彦淖尔市销售量、乌兰察布市销售量、锡林格勒盟销售量、阿拉善盟销售量、兴安盟销售量、煤制油月产量（万吨）、计划煤制油月产量（万吨）、*/-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="no-unit" prop="enterName">
              <el-select v-model="editForm.enterName" clearable>
                <el-option
                  v-for="item in enterNameAry"
                  :key="item.typeName"
                  :label="item.typeName"
                  :value="item.typeName"
                >
                </el-option>
              </el-select>
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
        <el-row>
          <el-col :span="12">
            <el-form-item label="煤制油月产量">
              <el-input placeholder="请输入内容" v-model="editForm.coalOilMonthProduct">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计划煤制油月产量">
              <el-input placeholder="请输入内容" v-model="editForm.coalOilPlanMonthProduct">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="粉煤月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.pulverizedCoalProcessingCapacity">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计划粉煤月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.coalProcessMonth">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>


        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.avgLoadRate">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计划平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.planAvgLoadRate">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="水资源用量">
              <el-input placeholder="请输入内容" v-model="editForm.waterUse">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单位产品原料消耗">
              <el-input placeholder="请输入内容" v-model="editForm.rawCoalConsumption">
                <template slot="append">吨标煤/吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="单位产品综合能耗">
              <el-input placeholder="请输入内容" v-model="editForm.unitProductComprehensiveEnergySales">
                <template slot="append">吨标煤/吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单位产品新鲜水耗">
              <el-input placeholder="请输入内容" v-model="editForm.unitProductFreshWaterConsumption">
                <template slot="append">吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="石脑油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldNaphtha">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="柴油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldDieselOil">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="液化气产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldLpg">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="干气产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldDryGas">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="石脑油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.monthSupplyNaphtha">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="柴油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.monthSupplyDieselOil">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="液化气供应量">
              <el-input placeholder="请输入内容" v-model="editForm.monthSupplyLpg">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="干气供应量">
              <el-input placeholder="请输入内容" v-model="editForm.monthSupplyDryGas">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="汽运供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyBusTrans">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="管输供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyPipeTrans">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="柴油销售量">
              <el-input placeholder="请输入内容" v-model="editForm.dieselOilSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="液化气销售量">
              <el-input placeholder="请输入内容" v-model="editForm.lgpSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="石脑油销售量">
              <el-input placeholder="请输入内容" v-model="editForm.naphthaSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="干气销售量">
              <el-input placeholder="请输入内容" v-model="editForm.dryGasSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="工程车辆销售量">
              <el-input placeholder="请输入内容" v-model="editForm.projectBusSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="城市交通销售量">
              <el-input placeholder="请输入内容" v-model="editForm.cityTrafficSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="工业销售量">
              <el-input placeholder="请输入内容" v-model="editForm.industrySales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="乙烯原料销售量">
              <el-input placeholder="请输入内容" v-model="editForm.c2h4MaterialSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="调合汽油销售量">
              <el-input placeholder="请输入内容" v-model="editForm.mixGasolineSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="重整原料销售量">
              <el-input placeholder="请输入内容" v-model="editForm.reformMaterialSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="原料煤价格">
              <el-input placeholder="请输入内容" v-model="editForm.rawCoalPrice">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="煤制油品价格">
              <el-input placeholder="请输入内容" v-model="editForm.coalOilPrice">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="呼和浩特市销售量">
              <el-input placeholder="请输入内容" v-model="editForm.huhehaoteSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="包头市销售量">
              <el-input placeholder="请输入内容" v-model="editForm.baotouSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="乌海市销售量">
              <el-input placeholder="请输入内容" v-model="editForm.wuhaiSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="赤峰市销售量">
              <el-input placeholder="请输入内容" v-model="editForm.chifengSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="通辽市销售量">
              <el-input placeholder="请输入内容" v-model="editForm.tongliaoSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="鄂尔多斯市销售量">
              <el-input placeholder="请输入内容" v-model="editForm.eerduosiSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="呼伦贝尔市销售量">
              <el-input placeholder="请输入内容" v-model="editForm.hulunbeierSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="巴彦淖尔市销售量">
              <el-input placeholder="请输入内容" v-model="editForm.bayannaoerSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="乌兰察布市销售量">
              <el-input placeholder="请输入内容" v-model="editForm.wulanchabuSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="锡林格勒盟销售量">
              <el-input placeholder="请输入内容" v-model="editForm.xilingelemengSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="阿拉善盟销售量">
              <el-input placeholder="请输入内容" v-model="editForm.alashanmengSales">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="兴安盟销售量">
              <el-input placeholder="请输入内容" v-model="editForm.xinganmengSales">
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
import { coaloilSave, coaloilUpdate, dic } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        enterName: '',
        recordDate: '',
        coalProcessMonth: '',
        pulverizedCoalProcessingCapacity: '',
        avgLoadRate: '',
        planAvgLoadRate: '',
        waterUse: '',
        rawCoalConsumption: '',
        unitProductComprehensiveEnergySales: '',
        unitProductFreshWaterConsumption: '',
        yieldNaphtha: '',
        yieldDieselOil: '',
        yieldLpg: '',
        yieldDryGas: '',
        monthSupplyNaphtha: '',
        monthSupplyDieselOil: '',
        monthSupplyLpg: '',
        monthSupplyDryGas: '',
        naphthaSales: '',
        dieselOilSales: '',
        lgpSales: '',
        dryGasSales: '',
        supplyBusTrans: '',
        supplyPipeTrans: '',
        projectBusSales: '',
        cityTrafficSales: '',
        industrySales: '',
        c2h4MaterialSales: '',
        mixGasolineSales: '',
        reformMaterialSales: '',
        rawCoalPrice: '',
        coalOilPrice: '',
        huhehaoteSales: '',
        baotouSales: '',
        wuhaiSales: '',
        chifengSales: '',
        eerduosiSales: '',
        hulunbeierSales: '',
        bayannaoerSales: '',
        wulanchabuSales: '',
        xilingelemengSales: '',
        alashanmengSales: '',
        xinganmengSales: '',
        coalOilMonthProduct: '',
        tongliaoSales: '',
        coalOilPlanMonthProduct: ''

      },
      rules: {
        enterName: [
          { required: true, message: '请选择企业名称', trigger: 'change' }
        ],
        recordDate: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
      enterNameAry: []
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
          const enterName = res.data.meizhiyou
          this.enterNameAry = enterName
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
      coaloilUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/coaloil/list')
    },
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          coaloilSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/coaloil/list')
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
          coaloilSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/coaloil/list')
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

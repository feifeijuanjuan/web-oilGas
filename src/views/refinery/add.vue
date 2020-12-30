<template>
  <div class="app-container">
    <div class="form-add"><span class="first">炼厂企业填报</span>
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
        <!--        /*1企业名称、2时间、3盟市名称、4状态、
                原油月加工量、原油计划月加工量、成品油产量、计划成品油月产量、计划负荷率、平均负荷率、
                89#汽油产量、92#汽油产量、95#汽油产量、
                负35号柴油产量、负20号柴油产量、负10号柴油产量、0号柴油产量、
                煤油产量*/-->
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
            <el-form-item label="原油月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.crudeOilProcessingCapacity">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="原油计划月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.oilPlanMonthProcess">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="成品油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldProductedOil">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计划成品油月产量">
              <el-input placeholder="请输入内容" v-model="editForm.productedOilPlanMonthProduct">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="计划负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.planLoadRate">
                <template slot="append">%</template>
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
            <el-form-item label="89#汽油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldGasoline89">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="92#汽油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldGasoline92">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="95#汽油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldGasoline95">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负35号柴油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldDieselOilMinus35">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="负20号柴油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldDieselOilMinus20">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负10号柴油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldDieselOilMinus10">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="0号柴油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldDieselOil0">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label=" 煤油产量">
              <el-input placeholder="请输入内容" v-model="editForm.yieldAviationCoal">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="成品油区外调入量">
              <el-input placeholder="请输入内容" v-model="editForm.productedOilTransferInVolume">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label=" 呼炼供应量">
              <el-input placeholder="请输入内容" v-model="editForm.productedOilRefineInVolume">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="总调出量">
              <el-input placeholder="请输入内容" v-model="editForm.productedOilTransferOutVolume">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label=" 89#汽油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyGasoline89">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="92#汽油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyGasoline92">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="95#汽油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyGasoline95">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="0#柴油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyDieselOil0">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负10#柴油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyDieselOilMinus10">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="负20#柴油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyDieselOilMinus20">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="负35#柴油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.supplyDieselOilMinus35">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="煤油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.aviationCoalSupply">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商业的成品油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.businessProductedOilSupply">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="交通的成品油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.trafficProductedOilSupply">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工业的成品油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.industryProductedOilSupply">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="农业的成品油供应量">
              <el-input placeholder="请输入内容" v-model="editForm.agriculturalProductedOilSupply">
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
import { dic, refinerySave, refineryUpdate } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        enterName: '',
        recordDate: '',
        crudeOilProcessingCapacity: '',
        oilPlanMonthProcess: '',
        yieldProductedOil: '',
        productedOilPlanMonthProduct: '',
        planLoadRate: '',
        avgLoadRate: '',
        yieldGasoline89: '',
        yieldGasoline92: '',
        yieldGasoline95: '',
        yieldDieselOilMinus35: '',
        yieldDieselOilMinus20: '',
        yieldDieselOilMinus10: '',
        yieldDieselOil0: '',
        yieldAviationCoal: '',
        productedOilTransferInVolume: '',
        productedOilRefineInVolume: '',
        productedOilTransferOutVolume: '',
        supplyGasoline89: '',
        supplyGasoline92: '',
        supplyGasoline95: '',
        supplyDieselOil0: '',
        supplyDieselOilMinus10: '',
        supplyDieselOilMinus20: '',
        supplyDieselOilMinus35: '',
        aviationCoalSupply: '',
        businessProductedOilSupply: '',
        trafficProductedOilSupply: '',
        industryProductedOilSupply: '',
        agriculturalProductedOilSupply: ''

      },
      rules: {
        enterName: [
          { required: true, message: '请选择企业名称', trigger: 'change' }
        ],
        recordDate: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
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
          const enterName = res.data.lianchang
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
      refineryUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/refinery/list')
    },
    // 新增保存
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          refinerySave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/refinery/list')
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
          refinerySave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/refinery/list')
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

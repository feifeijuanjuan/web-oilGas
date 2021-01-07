<template>
  <div class="app-container">
    <div class="form-add"><span class="first">城市燃气企业填报</span>
      <span class="first-line">></span>
      <span class="first">调峰按日填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" :rules="rules" ref="ruleForm" size="small" label-width="160px"
               class="form-box clearfix"
      >
        <!--        企业名称、盟市名称、时间、状态
                已建储气能力(万立方米)
                正在建设储气能力(万立方米)
                待建设储气能力(万立方米)
                城燃企业5%实际储气量
                城燃企业5%计划储气量-->

        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="no-unit" prop="enterName">
              <el-select v-model="editForm.enterName">
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
                type="year"
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
            <el-form-item label="城燃企业5%计划储气量">
              <el-input placeholder="请输入内容" v-model="editForm.plannedStorageEnterprise">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
<!--          <el-col :span="12">
            <el-form-item label="已建储气能力">
              <el-input placeholder="请输入内容" v-model="editForm.gasStorageCapacityHaveBuilt">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>-->
        </el-row>
<!--        <el-row>
          <el-col :span="12">
            <el-form-item label="正在建设储气能力">
              <el-input placeholder="请输入内容" v-model="editForm.gasStorageCapacityUnderConstruction">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="待建设储气能力">
              <el-input placeholder="请输入内容" v-model="editForm.gasStorageCapacityToBuild">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>-->
        <el-row>
<!--          <el-col :span="12">
            <el-form-item label="城燃企业5%实际储气量">
              <el-input placeholder="请输入内容" v-model="editForm.actualStorageEnterprise">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>-->

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
import { citygasyearhsave, citygasyearUpdate, dic } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        recordDate: '',
        enterName: '',
        leagueCityName: '',
        gasStorageCapacityHaveBuilt: '',
        gasStorageCapacityUnderConstruction: '',
        gasStorageCapacityToBuild: '',
        actualStorageEnterprise: '',
        plannedStorageEnterprise: ''
      },
      rules: {
        enterName: [
          { required: true, message: '请选择企业名称', trigger: 'change' }
        ],
        recordDate: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ]
      },
      leagueCityTypeAry:[],
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
          const data = res.data.leagueCityType
          const enterName=res.data.chengshiranqi
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
      citygasyearUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/citygasyear/list')
    },
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          citygasyearhsave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/citygasyear/list')
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
          citygasyearhsave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/citygasyear/list')
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

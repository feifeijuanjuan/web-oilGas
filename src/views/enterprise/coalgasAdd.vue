<template>
  <div>
    <div class="form-add"><span class="first">煤制气企业填报</span>
      <span class="first-line">></span>
      <span class="first">企业信息填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" :rules="rules" ref="ruleForm" size="small" label-width="90px"
               class="form-box clearfix"
      >
        <!--        /*1企业名称、2时间、3企业性质、4税收、5企业人数、6状态*/-->

        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" prop="enterName">
              <el-input placeholder="请输入内容" v-model="editForm.enterName">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="企业性质">
              <el-select v-model="editForm.enterpriseEconomyType">
                <el-option
                  v-for="item in enterpriseEconomyTypeAry"
                  :key="item.dictItemName"
                  :label="item.dictItemName"
                  :value="item.dictItemName"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="产能">
              <el-input placeholder="请输入内容" v-model="editForm.proCapacity">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="税收">
              <el-input placeholder="请输入内容" v-model="editForm.taxRevenue">
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业人数">
              <el-input placeholder="请输入内容" v-model="editForm.employeesNum">
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
import { dic, enterpriseSave, enterpriseUpdate } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',

  data() {
    return {
      enterpriseEconomyTypeAry: [],
      editForm: {
        enterName: '',
        enterpriseEconomyType: '',
        proCapacity:'',
        taxRevenue: '',
        employeesNum: ''
      },
      rules: {
        enterName: [
          { required: true, message: '请输入企业名称', trigger: 'blur' }
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
          const data = res.data.enterpriseEconomyType
          this.enterpriseEconomyTypeAry = data
        } else {
          Message({
            message: '请求失败',
            type: 'error',
            duration: 5 * 1000
          })
        }
      })
    },
    // 数据回显
    update() {
      enterpriseUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/enterprise/coalgasList')
    },
    // 新增保存
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          const parms = this.editForm
          parms['enterpriseType'] = '煤制气企业'
          enterpriseSave(parms).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/enterprise/coalgasList')
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
          const parms = this.editForm
          parms['enterpriseType'] = '煤制气企业'
          enterpriseSave(parms).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/enterprise/coalgasList')
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

<template>
  <div class="app-container">
    <div class="form-add"><span class="first">能源局填报</span>
      <span class="first-line">></span>
      <span class="first">地方政府储气填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="160px" :rules="rules" ref="ruleForm"
               class="form-box clearfix"
      >

        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市名称" class="no-unit" prop="leagueCityName">
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
        <el-row>
          <el-col :span="12">
            <el-form-item label="地方政府" class="no-unit">
              <el-select v-model="editForm.enterName" clearable>
                <el-option
                  v-for="item in enterNameAry"
                  :key="item.typeId"
                  :label="item.typeName"
                  :value="item.typeName"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地方政府3天计划储气量">
              <el-input placeholder="请输入内容" v-model="editForm.plannedStorageGovernment"
                        type="number"
                        @input="minMax('plannedStorageGovernment',editForm.plannedStorageGovernment)"
              >
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>

        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="地方政府3天实际储气量">
              <el-input placeholder="请输入内容" v-model="editForm.actualStorageGovernment"
                        type="number"
                        @input="minMax('actualStorageGovernment',editForm.actualStorageGovernment)"
              >
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
import { governmentyearUpdate, governmentyearSave, dic } from '@/api/fill'


export default {
  name: 'editFormAdd',
  data() {
    return {
      leagueCityTypeAry: [],//盟市名称
      enterNameAry: [],
      editForm: {
        recordDate: '',
        leagueCityName: '',
        enterName: '',
        actualStorageGovernment: '',
        plannedStorageGovernment: ''
      },
      pageTitle: '',
      statu: '',
      rules: {
        leagueCityName: [
          { required: true, message: '请选择盟市名称', trigger: 'change' }
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
    minMax(name, value) {
      if (value < 0) {
        this.editForm[name] = 0
      } else if (value > 1000000) {
        this.editForm[name] = 1000000
      }
    },
    dic() {
      dic().then((res) => {
        if (res.success) {
          const data = res.data.leagueCityType
          const enterName = res.data.nengyuanju
          this.leagueCityTypeAry = data
          this.enterNameAry = enterName
        } else {
          this.$notify({
            message: '网络请求失败',
            type: 'error',
            offset: 100
          })
        }
      })
    },
    // 数据回显
    update() {
      governmentyearUpdate(this.$route.query.id).then((res) => {
        if (res.code === 0) {
          this.editForm = res.body
        } else {
          this.$notify({
            message: '请求失败',
            type: 'error',
            offset: 100
          })
        }
      })
    },
    // 取消
    close() {
      this.$router.push('/governmentyear/list')
    },
    // 新增保存
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          governmentyearSave(this.editForm).then((res) => {
            if (res.code === 0) {
              this.$notify({
                message: '保存成功',
                type: 'success',
                offset: 100
              })
              this.$router.push('/governmentyear/list')
            } else {
              this.$notify({
                message: '保存失败' + (res.body == '已存在该记录！' ? ',' + res.body : ''),
                type: 'error',
                offset: 100
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
          governmentyearSave(this.editForm).then((res) => {
            if (res.code === 0) {
              this.$notify({
                message: '修改成功',
                type: 'success',
                offset: 100
              })
              this.$router.push('/governmentyear/list')
            } else {
              this.$notify({
                message: '修改失败' + (res.body == '已存在该记录！' ? ',' + res.body : ''),
                type: 'error',
                offset: 100
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

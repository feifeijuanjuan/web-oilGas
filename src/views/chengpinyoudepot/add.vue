<template>
  <div class="app-container">
    <div class="form-add"><span class="first">成品油销售企业填报</span>
      <span class="first-line">></span>
      <span class="first">库存按月填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" :rules="rules" ref="ruleForm" label-width="140px"
               class="form-box clearfix"
      >
        <!--        // 1企业名称、2时间、3盟市名称、油库汽油总库存、油库柴油总库存、油库煤油总库存、油库原油总库存、状态-->
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
            <el-form-item label="盟市名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.leagueCityName">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="油库汽油总库存">
              <el-input placeholder="请输入内容" v-model="editForm.gasolineInventoryOilDepot">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="油库柴油总库存">
              <el-input placeholder="请输入内容" v-model="editForm.dieselInventoryOilDepot">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="油库煤油总库存">
              <el-input placeholder="请输入内容" v-model="editForm.aviationCoalInventoryOilDepot">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="油库原油总库存">
              <el-input placeholder="请输入内容" v-model="editForm.crudeInventoryOilDepot">
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
import { chengpinyoudepotSave, chengpinyoudepotUpdate } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        recordDate: '',
        enterName: '',
        leagueCityName: '',
        gasolineInventoryOilDepot: '',
        dieselInventoryOilDepot: '',
        aviationCoalInventoryOilDepot: '',
        crudeInventoryOilDepot: ''
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
      chengpinyoudepotUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/chengpinyoudepot/list')
    },
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          chengpinyoudepotSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/chengpinyoudepot/list')
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
          chengpinyoudepotSave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/chengpinyoudepot/list')
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

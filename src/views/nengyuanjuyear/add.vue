<template>
  <div class="app-container">
    <div class="form-add"><span class="first">能源局填报</span>
      <span class="first-line">></span>
      <span class="first">按年填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" :rules="rules" ref="ruleForm" size="small" label-width="200px"
               class="form-box clearfix"
      >
        <!--        /*盟市名称、时间
                盟市储气设施总容积
                地方政府日均三天计划储气量
                地方政府日均三天实际储气量
                盟市租赁储罐数量
                盟市自建储罐数量
                天然气历史缺口量
                盟市储气日调用量
                盟市气化装置数量
                盟市气化装置日均气化量*/-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市名称" class="no-unit" prop="leagueCityName">
              <el-input placeholder="请输入内容" v-model="editForm.leagueCityName">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="no-unit" prop="recordDate">
              <el-date-picker
                type="year"
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
            <el-form-item label="储罐容积">
              <el-input placeholder="请输入内容" v-model="editForm.tankVolume">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="计划储气量">
              <el-input placeholder="请输入内容" v-model="editForm.plannedStorageGovernment">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="实际储气量">
              <el-input placeholder="请输入内容" v-model="editForm.actualStorageGovernment">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="盟市租赁储罐数量">
              <el-input placeholder="请输入内容" v-model="editForm.tankRent">
                <template slot="append">个</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市自建储罐数量">
              <el-input placeholder="请输入内容" v-model="editForm.tankSelf">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="天然气历史缺口量">
              <el-input placeholder="请输入内容" v-model="editForm.naGasBreach">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市储气日调用量">
              <el-input placeholder="请输入内容" v-model="editForm.naGasInvoke">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="盟市气化装置数量">
              <el-input placeholder="请输入内容" v-model="editForm.apparatusNum">
                <template slot="append">个</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="盟市气化装置日均气化量">
              <el-input placeholder="请输入内容" v-model="editForm.apparatusGasContent">
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
import {nengyuanjuyearsave, nengyuanjuyearUpdate } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        recordDate: '',
        leagueCityName: '',
        tankVolume: '',
        plannedStorageGovernment: '',
        actualStorageGovernment: '',
        tankRent: '',
        tankSelf: '',
        naGasBreach: '',
        naGasInvoke: '',
        apparatusNum: '',
        apparatusGasContent: ''
      },
      rules: {
        leagueCityName: [
          { required: true, message: '请输入盟市名称', trigger: 'blur' }
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
      nengyuanjuyearUpdate(this.$route.query.id).then((res) => {
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
      this.$router.push('/nengyuanjuyear/list')
    },
    createData() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          nengyuanjuyearsave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '保存成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/nengyuanjuyear/list')
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
          nengyuanjuyearsave(this.editForm).then((res) => {
            if (res.code === 0) {
              Message({
                message: '修改成功',
                type: 'success',
                duration: 5 * 1000
              })
              this.$router.push('/nengyuanjuyear/list')
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

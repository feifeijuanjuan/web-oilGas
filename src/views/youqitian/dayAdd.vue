<template>
  <div class="app-container form-wrapper">
    <h3 style="border-bottom: 1px solid #f7f7f7;font-weight: normal;padding-bottom: 10px">{{ pageTitle }}</h3>
    <el-form :model="editForm" size="small" label-width="160px" class="form-box clearfix">
      <!--        1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
              7天然气日产量、8天然气日供气量、9天然气计划日供气量、10天然气日供气合同量、11直供管道公司日供气量、
              12直供甲醇厂日供气量、
              13直供合成氨日供气量、
              14直供液化工厂日供气量、15状态-->

      <el-row>
        <el-col :span="12">
          <el-form-item label="油气田名称" class="no-unit">
            <el-input placeholder="请输入内容" v-model="editForm.oilGasName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="日期" class="no-unit">
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
          <el-form-item label="油气田区域类型" class="no-unit">
            <el-select v-model="editForm.oilGasAreaType" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="油气田区域名称" class="no-unit">
            <el-input placeholder="请输入内容" v-model="editForm.oilGasAreaName">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="集团标识" class="no-unit">
            <el-select v-model="editForm.groupType" placeholder="请选择">
              <el-option
                v-for="item in optionsGroupType"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="盟市名称" class="no-unit">
            <el-input placeholder="请输入内容" v-model="editForm.leagueCityName">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="天然气日产量">
            <el-input placeholder="请输入内容" v-model="editForm.dayYieldNaGas">
              <template slot="append">Nm3</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="天然气日供气量">
            <el-input placeholder="请输入内容" v-model="editForm.daySupplyNaGas">
              <template slot="append">Nm3</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="天然气计划日供气量">
            <el-input placeholder="请输入内容" v-model="editForm.dayPlanSupplyNaGas">
              <template slot="append">Nm3</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="天然气日供气合同量">
            <el-input placeholder="请输入内容" v-model="editForm.daySupplyNaGasContract">
              <template slot="append">Nm3</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="直供管道公司日供气量">
            <el-input placeholder="请输入内容" v-model="editForm.daySupplyPipelineCompany">
              <template slot="append">Nm3</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="直供甲醇厂日供气量">
            <el-input placeholder="请输入内容" v-model="editForm.daySupplyCh3oh">
              <template slot="append">Nm3</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="直供合成氨日供气量">
            <el-input placeholder="请输入内容" v-model="editForm.daySupplyNh3">
              <template slot="append">Nm3</template>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="直供液化工厂日供气量">
            <el-input placeholder="请输入内容" v-model="editForm.daySupplyLiquPlant">
              <template slot="append">Nm3</template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="状态" class="no-unit">
            <el-select v-model="editForm.status" placeholder="请选择">
              <el-option
                v-for="item in optionsStatus"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="text-center" style="margin-top: 30px">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="statu==='create'?createData('editForm'):updateData('editForm')">确 定
      </el-button>
    </div>
  </div>

</template>

<script>
import { update, save } from '@/api/fill'
import { Message } from 'element-ui'

export default {
  name: 'editFormAdd',
  data() {
    return {
      editForm: {
        oilGasName: '',
        recordDate: '',
        oilGasAreaType: '1',
        oilGasAreaName: '',
        groupType: '',
        dayYieldNaGas: '',
        daySupplyNaGas: '',
        dayPlanSupplyNaGas: '',
        daySupplyNaGasContract: '',
        daySupplyPipelineCompany: '',
        daySupplyCh3oh: '',
        daySupplyNh3: '',
        daySupplyLiquPlant: '',
        status: ''
      },
      pageTitle: '',
      statu: '',
      options: [
        {
          value: 1,
          label: '油田'
        },
        {
          value: 2,
          label: '气田'
        }
      ],
      optionsStatus: [
        {
          value: 1,
          label: '启用'
        },
        {
          value: 2,
          label: '禁用'
        },
        {
          value: 3,
          label: '删除'
        }
      ],
      optionsGroupType: [
        {
          value: 1,
          label: '中石化'
        },
        {
          value: 2,
          label: '中石油'
        }
      ],
      unit: '万吨'
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
    //根据不同油气田区域类型显示不同单位
    changeUint() {
      this.editForm.oilGasAreaType == 1 ? this.unit = '万吨' : this.unit = '万立方米'
    },
    // 数据回显
    update() {
      update(this.$route.query.id).then((res) => {
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
    // 取消
    close() {
      this.$router.push('/oilgasday/list')
    },
    // 新增保存
    createData() {
      save(this.editForm).then((res) => {
        if (res.code === 0) {
          Message({
            message: '保存成功',
            type: 'success',
            duration: 5 * 1000
          })
          this.$router.push('/oilgasday/list')
        } else {
          Message({
            message: '保存失败',
            type: 'error',
            duration: 5 * 1000
          })
        }
      })
    },
    // 编辑保存
    updateData() {
      save(this.editForm).then((res) => {
        if (res.code === 0) {
          Message({
            message: '修改成功',
            type: 'success',
            duration: 5 * 1000
          })
          this.$router.push('/oilgasday/list')
        } else {
          Message({
            message: '修改失败',
            type: 'error',
            duration: 5 * 1000
          })
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

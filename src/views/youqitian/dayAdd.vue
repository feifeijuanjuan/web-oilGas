<template>
  <div class="app-container">
    <h3 style="border-bottom: 1px solid #f7f7f7;font-weight: normal;padding-bottom: 10px">修改</h3>
      <el-form :model="editForm" size="small" label-width="160px" class="form-box clearfix">
        <!--        1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
                7天然气日产量、8天然气日供气量、9天然气计划日供气量、10天然气日供气合同量、11直供管道公司日供气量、
                12直供甲醇厂日供气量、
                13直供合成氨日供气量、
                14直供液化工厂日供气量、15状态-->

        <el-row>
          <el-col :span="12">
            <el-form-item label="油气田名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="no-unit">
              <el-date-picker
                v-model="editForm.time"
                placeholder="请选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="油气田区域类型" class="no-unit">
              <el-select v-model="editForm.oil" placeholder="请选择">
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
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="集团标识" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="盟市名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="天然气日产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="天然气日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="天然气计划日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="天然气日供气合同量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="直供管道公司日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="直供甲醇厂日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="直供合成氨日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="直供液化工厂日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="状态" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="text-center" style="margin-top: 30px">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="dialogStatu==='create'?createData('editForm'):updateData('editForm')">确 定
        </el-button>
      </div>
  </div>

</template>

<script>
export default {
  name: 'editFormAdd',
  props: {
    rowId: {
      type: String,
      default: ''
    },
    dialogStatu: {
      type: String,
      default: ''
    },
    fasFieldTable: {
      type: Function,
      default: null
    },
    dialogFormVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      editForm: {
        one: ''
      },
      options: [{
        value: '选项1',
        label: '安塞油田'
      }]
    }
  },
  mounted() {
  },
  methods: {
    close() {
      this.$router.push('/youqitian/dayList')
    },
    createData() {
      this.$emit('func', false)
      this.fasFieldTable()
    },
    updateData() {
      this.$emit('func', false)
      this.fasFieldTable()
    }
  }
}
</script>

<style scoped>
.text-center{
  text-align: center;
}
</style>

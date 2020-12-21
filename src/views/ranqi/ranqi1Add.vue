<template>
  <div>
    <el-dialog :title="dialogStatu==='create'?'新增':'修改'" :visible.sync="dialogFormVisible" width="60%">
      <el-form :model="editForm" size="small" label-width="180px" class="form-box clearfix">
<!--        /*企业名称、盟市名称、时间、状态、
        天然气消费量、天然气需求量、天然气供应合同量、天然气计划日供气量、
        工业用户天然气消费量、商业用户天然气消费量、建筑业天然气消费量、生活销售天然气销售量、供暖天然气销售量、
        可中断工业消费量、不可中断工业消费量、
        居民用气量天然气日消费量(万立方米)、民生用气量天然气日消费量(万立方米)、社会车辆用气天然气日消费量(万立方米)、商业用户天然气日消费量(万立方米)、工业燃料天然气日消费量(万立方米)、
        甲醇天然气日消费量(万立方米)、化肥天然气日消费量(万立方米)、LNG天然气日消费量(万立方米）*-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="no-unit">
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
            <el-form-item label="盟市名称" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="天然气消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="天然气需求量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="天然气供应合同量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="天然气计划日供气量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="工业用户天然气消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="商业用户天然气消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="建筑业天然气消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="生活销售天然气销售量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="供暖天然气销售量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="可中断工业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="不可中断工业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="居民用气量天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="民生用气量天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="社会车辆用气天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商业用户天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="工业燃料天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="甲醇天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="化肥天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="LNG天然气日消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方米</template>
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
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="dialogStatu==='create'?createData('editForm'):updateData('editForm')">确 定
        </el-button>
      </div>
    </el-dialog>
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
      this.$emit('func', false)
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

</style>

<template>
  <div>
    <el-dialog :title="dialogStatu==='create'?'新增':'修改'" :visible.sync="dialogFormVisible" width="70%">
      <el-form :model="editForm" size="small" label-width="130px" class="form-box clearfix">
        <el-divider content-position="left">模块一</el-divider>
        <div class="clearfix">
          <el-col :span="8">
            <el-form-item label="粉煤加工量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位产品综合耗能">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">吨标煤/千立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="粉煤加工量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位产品综合耗能">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">吨标煤/吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="粉煤加工量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位产品综合耗能">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">吨标煤/吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="粉煤加工量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </div>

        <el-divider content-position="left">模块二</el-divider>
        <div class="clearfix">
          <el-row>
            <el-col :span="8">
              <el-form-item label="单位产品综合耗能">
                <el-input placeholder="请输入内容" v-model="editForm.one">
                  <template slot="append">吨标煤/吨</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="粉煤加工量">
                <el-input placeholder="请输入内容" v-model="editForm.one">
                  <template slot="append">万吨</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="平均负荷率">
                <el-input placeholder="请输入内容" v-model="editForm.one">
                  <template slot="append">%</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="单位产品综合耗能">
                <el-input placeholder="请输入内容" v-model="editForm.one">
                  <template slot="append">吨标煤/吨</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="粉煤加工量">
                <el-input placeholder="请输入内容" v-model="editForm.one">
                  <template slot="append">万吨</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="平均负荷率">
                <el-input placeholder="请输入内容" v-model="editForm.one">
                  <template slot="append">%</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="单位产品综合耗能">
                <el-input placeholder="请输入内容" v-model="editForm.one">
                  <template slot="append">吨标煤/吨</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="粉煤加工量">
                <el-input placeholder="请输入内容" v-model="editForm.one">
                  <template slot="append">万吨</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="平均负荷率">
                <el-input placeholder="请输入内容" v-model="editForm.one">
                  <template slot="append">%</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

        </div>


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
      }
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

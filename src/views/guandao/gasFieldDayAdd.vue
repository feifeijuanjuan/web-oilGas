<template>
  <div>
    <el-dialog :title="dialogStatu==='create'?'新增':'修改'" :visible.sync="dialogFormVisible" width="60%">
      <el-form :model="editForm" size="small" label-width="120px" class="form-box clearfix">
        <el-col :span="12">
          <el-form-item label="天然气日供气量">
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
        <el-col :span="12">
          <el-form-item label="天然气日供气量">
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
        <el-col :span="12">
          <el-form-item label="天然气日供气量">
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
        <el-col :span="12">
          <el-form-item label="天然气日供气量">
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

<template>
  <div>
    <div class="filter-container">
      <el-form :model="bdcBaseForm" ref="bdcBaseForm" size="small" >
        <el-row :gutter="8" size="mini">
          <el-col :span="4">
            <el-form-item>
              <el-input placeholder="" v-model="bdcBaseForm.stationCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-input placeholder="" v-model="bdcBaseForm.baseStationCode"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <el-button type="primary" @click="submitForm('bdcBaseForm')">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div>
      <el-button size="small" type="primary" style="margin-bottom: 10px;" @click="handleAdd">添加</el-button>
    </div>
    <table-cmp
      :loading="loading"
      :table-data="tableData"
      :table-label="tableLabel"
      :table-option="tableOption"
      :total="total"
      :pageSize="pageSize"
      :currentPage="currentPage"
      @handleButton="handleButton"
      @handleCurrentChange="handleCurrentChange"
      @handleSizeChange="handleSizeChange"
    >
    </table-cmp>
    <!--    弹窗-->
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TableCmp from '@/components/TableCmp'

export default {
  name: 'Dashboard',
  components: { TableCmp },
  data() {
    return {
      expandForm: false,
      count: 3,
      total: 0,
      currentPage: 1,
      pageSize: 50,
      dialogFormVisible: false,//弹框是否显示
      dialogFlag: '',//标题
      row: {},
      bdcBaseForm: {
        stationCode: undefined,
        baseStationCode: undefined
      },
      loading: false,
      tableData: [{
        stationCode: '伊泰煤制油',
        baseStationCode: '',
        laneCode: '',
        positionCode: ''
      },
        {
          stationCode: '伊泰煤制油',
          baseStationCode: '',
          laneCode: '',
          positionCode: ''
        }
      ],
      tableLabel: [
        { label: '油气田名称', param: 'stationCode' },
        { label: '天然气日供气量', param: 'baseStationCode' },
        { label: '天然气日供气合同量', param: 'laneCode' },
        { label: '时间', param: 'positionCode' }
      ],
      tableOption: {
        label: '操作',
        width: '200',
        options: [
          { label: '修改', methods: 'edit' },
          { label: '删除', methods: 'delete' }
        ]
      }
    }
  },
  methods: {
    handleButton() {

    },
    handleCurrentChange() {

    },
    handleSizeChange() {

    },
    handleAdd() {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>

<template>
  <div class="app-container">
    <div class="form-add"><span class="first">煤制气企业填报</span>
      <span class="first-line">></span>
      <span class="first">按月填报</span
      ><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="140px" class="form-box clearfix">
        <!--        /*1企业名称、2时间、3盟市名称、4计划粉煤月加工量、5粉煤月加工量、6平均负荷率、
                7计划平均负荷率、8水资源用量、9单位产品原料消耗、10单位产品综合能耗、11单位产品新鲜水耗、12煤制气产量、
                13煤制气月供应量、14管道气供应量、15CNG供应量、16LNG供应量、17终端消费量、18化工消费量、19火力发电消费量、20供热消费量、21工业消费量、22生活消费量、23建筑业消费量、24商业消费量、25交通消费量、26调峰煤制气用量、27煤制气计划月供应量、28煤制气消费量、29状态*/-->
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
            <el-form-item label="计划粉煤月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="粉煤月加工量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="计划平均负荷率">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">%</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="水资源用量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万吨</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="单位产品原料消耗">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">吨标煤/千立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="单位产品综合能耗">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">吨标煤/千立方</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="单位产品新鲜水耗">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">吨/千立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="煤制气产量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="煤制气月供应量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="管道气供应量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="CNG供应量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="LNG供应量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="终端消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="化工消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="火力发电消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="供热消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="工业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="生活消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="建筑业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="商业消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="交通消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="调峰煤制气用量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="煤制气计划月供应量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="煤制气消费量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">万立方</template>
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
    </div>
      <div class="form-footer-btn">
        <el-button  class="close-btn" @click="close">取 消</el-button>
        <el-button class="confrim-btn" type="primary"
                   @click="dialogStatu==='create'?createData('editForm'):updateData('editForm')">确 定
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
  created() {
    this.pageTitle = this.$route.query.title
    this.statu = this.$route.query.statu
  },
  mounted() {
  },
  methods: {
    close() {
      this.$router.push('/coalgas/list')
    },
    createData() {
      this.$router.push('/coalgas/list')
    },
    updateData() {
      this.$router.push('/coalgas/list')
    }
  }
}
</script>

<style scoped>

</style>

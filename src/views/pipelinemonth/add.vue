<template>
  <div class="app-container">
    <div class="form-add"><span class="first">管道企业填报</span>
      <span class="first-line">></span>
      <span class="first">管道信息填报</span><span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="140px" class="form-box clearfix">
        <!--        /*1管道名、2管道类型、3企业名称、4时间、5区内里程、6运送能力、7管道长度、
        8设计压力、9末站压力阈值、10末站压力实际值、11区内起点、12区内终点、
        13设计输气（油）能力、14实际输气（油）能力、15管径、16投产时间、17负责人、18状态*/-->
        <el-row>
          <el-col :span="12">
            <el-form-item label="管道名" class="no-unit">
              <el-input v-model="editForm.pipelineName" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="管道类别" class="no-unit">
              <el-input v-model="editForm.pipelineType" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业名称" class="no-unit">
              <el-input v-model="editForm.enterName" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="企业性质" class="no-unit">
              <el-input v-model="editForm.enterType" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="企业地址" class="no-unit">
              <el-input v-model="editForm.enterAddress" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="日期" class="no-unit">
              <el-date-picker
                v-model="editForm.recordDate"
                placeholder="请选择日期"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="管径">
              <el-input v-model="editForm.pipelineDiamete" placeholder="请输入内容">
                <template slot="append">毫米</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="境内里程">
              <el-input v-model="editForm.pipelineLength" placeholder="请输入内容">
                <template slot="append">km</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="设计运输能力">
              <el-input v-model="editForm.transportPower" placeholder="请输入内容">
              <template slot="append">亿立方米/年</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="投产时间" class="no-unit">
              <el-date-picker
                v-model="editForm.dateIncreaseInvest"
                placeholder="请选择日期"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="全线起点位置" class="no-unit">
              <el-input v-model="editForm.startPipeline" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="全线终点位置" class="no-unit">
              <el-input v-model="editForm.endPipeline" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="区内起点" class="no-unit">
              <el-input v-model="editForm.startInPipeline" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="区内终点" class="no-unit">
              <el-input v-model="editForm.endInPipeline" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="设计压力" class="no-unit">
              <el-input v-model="editForm.designPressure" placeholder="请输入内容">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="法人代表" class="no-unit">
              <el-input v-model="editForm.legalRepresentative" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="安全负责人" class="no-unit">
              <el-input v-model="editForm.chargeUser" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="安全负责人电话" class="no-unit">
              <el-input v-model="editForm.userPhone" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="是否运行" class="no-unit">
              <el-input v-model="editForm.isUse" placeholder="请输入内容"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="form-footer-btn">
      <el-button class="close-btn" @click="close">取 消</el-button>
      <el-button
        class="confrim-btn"
        type="primary"
        @click="statu==='create'?createData('editForm'):updateData('editForm')"
      >确 定
      </el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'EditFormAdd',
  data() {
    return {
      editForm: {
        pipelineName: '',
        pipelineType: '',
        enterName: '',
        enterType: '',
        enterAddress: '',
        recordDate: '',
        pipelineDiamete: '',
        pipelineLength: '',
        transportPower: '',
        dateIncreaseInvest: '',
        startPipeline: '',
        endPipeline: '',
        startInPipeline: '',
        endInPipeline: '',
        designPressure: '',
        legalRepresentative: '',
        chargeUser: '',
        userPhone: '',
        isUse: ''
      }
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
      this.$router.push('/pipelinemonth/list')
    },
    createData() {
      this.$router.push('/pipelinemonth/list')
    },
    updateData() {
      this.$router.push('/pipelinemonth/list')
    }
  }
}
</script>

<style scoped>

</style>

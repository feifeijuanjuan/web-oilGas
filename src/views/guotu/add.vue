<template>
  <div class="app-container">
    <div class="form-add"><span class="first">国土资源厅按年填报</span>
      <span class="first-line">></span>
      <span class="second">{{ pageTitle }}
      </span></div>
    <div class="form-wrapper">
      <h3 class="form-wrapper-title">{{ pageTitle }}</h3>
      <el-form :model="editForm" size="small" label-width="130px" class="form-box clearfix">
        <!--        /*1油气田名称、2时间、3油气田区域类型、4油气田区域名称、5集团标识、6盟市名称、
                7累计探明地质储量、8剩余技术可采储量、9剩余经济可采储量、10储采比、11油气田人数、12远景资源量、
                13预测储量、14控制储量、15油气田面积、16状态*/-->

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
            <el-form-item label="累计探明地质储量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="剩余技术可采储量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="剩余经济可采储量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="储采比">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="油气田人数" class="no-unit">
              <el-input placeholder="请输入内容" v-model="editForm.one">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="远景资源量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="预测储量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="控制储量">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="油气田面积">
              <el-input placeholder="请输入内容" v-model="editForm.one">
                <template slot="append">Nm3</template>
              </el-input>
            </el-form-item>
          </el-col>
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
      <el-button class="close-btn" @click="close">取 消</el-button>
      <el-button class="confrim-btn" type="primary"
                 @click="dialogStatu==='create'?createData('editForm'):updateData('editForm')"
      >确 定
      </el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'editFormAdd',
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
      this.$router.push('/guotu/yearList')
    },
    createData() {
      this.$router.push('/guotu/yearList')
    },
    updateData() {
      this.$router.push('/guotu/yearList')
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="按日填报" name="first">
        <child1></child1>
      </el-tab-pane>
      <el-tab-pane label="按月填报" name="second">
        <child2></child2>
      </el-tab-pane>
      <el-tab-pane label="按年填报" name="third">
        <child3></child3>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import gasFieldDay from '@/views/guandao/gasFieldDay'
import gasFieldMonth from '@/views/guandao/gasFieldMonth'
import gasFieldYear from '@/views/guandao/gasFieldYear'

export default {
  name: 'Dashboard',
  components: {
    child1: gasFieldDay,
    child2: gasFieldMonth,
    child3: gasFieldYear
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
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

<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="按日填报" name="first">
        <child1></child1>
      </el-tab-pane>
      <el-tab-pane label="按年填报" name="second">
        <child2></child2>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import gasFieldDay from '@/views/mengshi/gasFieldDay'
import gasFieldYear from '@/views/mengshi/gasFieldYear'

export default {
  name: 'Dashboard',
  components: {
    child1: gasFieldDay,
    child2: gasFieldYear
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

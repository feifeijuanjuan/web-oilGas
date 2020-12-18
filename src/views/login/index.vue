<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
             label-position="left"
    >

      <div class="title-container">
        <h3 class="title">账号登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="请输入密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
        </span>
      </el-form-item>
      <el-checkbox label="记住密码" v-model="loginForm.checked" class="check-box"></el-checkbox>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;"
                 @click.native.prevent="handleLogin"
      >登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import Layout from '@/layout'
import router from '@/router'
import store from '@/store'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入正确的密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        checked: false
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            let menus = [
              {
                path: '/',
                component: Layout,
                redirect: 'dashboard',
                children: [{
                  path: 'dashboard',
                  name: 'Dashboard',
                  component: () => import('@/views/dashboard/index'),
                  meta: { title: '煤气田填报', icon: 'meiqi' }
                }]
              },
              {
                path: '/lianyou',
                component: Layout,
                children: [{
                  path: 'lianyou',
                  name: 'lianyou',
                  component: () => import('@/views/lianyou/index'),
                  meta: { title: '炼油厂填报', icon: 'dashboard' }
                }]
              },
              {
                path: '/meizhiyou',
                component: Layout,
                children: [{
                  path: 'meizhiyou',
                  name: 'meizhiyou',
                  component: () => import('@/views/meizhiyou/index'),
                  meta: { title: '煤制油填报', icon: 'dashboard' }
                }]
              },
              {
                path: '/meizhiqi',
                component: Layout,
                children: [{
                  path: 'meizhiqi',
                  name: 'meizhiqi',
                  component: () => import('@/views/meizhiqi/index'),
                  meta: { title: '煤制气填报', icon: 'dashboard' }
                }]
              },
              {
                path: '/ranqi',
                component: Layout,
                children: [{
                  path: 'ranqi',
                  name: 'ranqi',
                  component: () => import('@/views/ranqi/index'),
                  meta: { title: '城市燃气填报', icon: 'dashboard' }
                }]
              },
              {
                path: '/chenpinyou',
                component: Layout,
                children: [{
                  path: 'chenpinyou',
                  name: 'chenpinyou',
                  component: () => import('@/views/chenpinyou/index'),
                  meta: { title: '成品油销售填报', icon: 'dashboard' }
                }]
              },
              {
                path: '/guandao',
                component: Layout,
                children: [{
                  path: 'guandao',
                  name: 'guandao',
                  component: () => import('@/views/guandao/index'),
                  meta: { title: '管道公司填报', icon: 'dashboard' }
                }]
              },
              {
                path: '/mengshi',
                component: Layout,
                children: [{
                  path: 'mengshi',
                  name: 'mengshi',
                  component: () => import('@/views/mengshi/index'),
                  meta: { title: '盟市填报', icon: 'dashboard' }
                }]
              }
            ]
            // 最后添加
            let unfound = { path: '*', redirect: '/404', hidden: true }
            menus.push(unfound)
            var router1 = router.options.routes
            router.addRoutes(menus) //动态挂载路由
            router.options.routes = router1.concat(menus) //路由合并
            // 把格式化路由放进VUEX
           /* store.dispatch('user/addRoutes', menus).then(data => {
            })*/
            console.log(this.redirect)
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  background: url('../../assets/login/login.jpg') no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;

  .el-input {
    display: inline-block;
    height: 40px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 40px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  .el-form-item__content {
    line-height: 40px;
    background-color: #5478b1;
  }

  .el-button--primary {
    background-color: #83b1de;
    border-color: #83b1de;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 360px;
    max-width: 100%;
    padding: 50px 35px 15px 35px;
    margin: 0 auto;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .6);
    box-shadow: 0 0 8px #5a799b;

    .check-box {
      margin-bottom: 22px;
      color: #fff;
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 0 5px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: #6f9ed3;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 1px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

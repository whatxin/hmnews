<template>
  <div class="container">
    <div class="login-wrap">
      <van-nav-bar title="登录" />
      <form action="/" method="POST">
        <van-cell-group>
          <van-field v-validate="'required|mobile'" name="mobile" :error-message="errors.first('mobile')" v-model="user.mobile" required label="手机号" placeholder="请输入手机号" clearable />
          <van-field v-model="user.code" required label="验证码" placeholder="请输入验证码" type="password" />
        </van-cell-group>
        <van-button type="info" block @click.prevent="login" :loading='loading'>登录</van-button>
      </form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login'
export default {
  name: 'login',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      },
      loading: false
    }
  },
  methods: {
    async login () {
      this.loading = true
      try {
        this.$validator.validate().then(async valid => {
          if (!valid) {
            this.loading = false
            return
          }
          const data = await login(this.user)
          console.log(data)
          this.$store.commit('setUser', data)
          this.$router.push({ path: '/' })
        })
      } catch (error) {
        this.loading = false
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  background: #0096fa;
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>

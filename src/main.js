import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import Vant from 'vant'
import VeeValidate, { Validator } from 'vee-validate'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
import zhCN from 'vee-validate/dist/locale/zh_CN'

Vue.use(Vuex)
Vue.use(Vant)
Vue.use(VeeValidate)
Validator.localize('zh_CN', zhCN)
Validator.extend('mobile', {
  getMessage: field => field + '格式不正确',
  validate: value => {
    return (
      value.length === 11 && /^((13|15|16|18|19)[0-9]{1})\d{8}$/.test(value)
    )
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

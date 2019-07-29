import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
import Vuex from 'vuex'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vuex)

Vue.use(Vant)

const store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    setCount (state, countt) {
      if (typeof (countt) === 'number') {
        state.count = countt
        return
      }
      state.count = 300
    }
  },
  actions: {
    getCount (countxt) {
      console.log('ashdjf')
      setTimeout(() => {
        const countt = 20000000000
        countxt.commit('setCount', countt)
      }, 1000)
    }
  }

})

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')

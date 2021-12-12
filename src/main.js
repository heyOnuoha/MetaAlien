import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import Plugins from './Plugins'
import store from './store'

Vue.config.productionTip = false
Vue.ethereum = window.ethereum
Vue.web3 = window.web3

Vue.use(Vuex)
Vue.use(Plugins)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')

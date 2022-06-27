import Vue from 'vue'
import App from './App.vue'
import router from './router'

import reset from './style/reset.css'
Vue.config.productionTip = false

new Vue({
  reset,
  router,
  render: h => h(App)
}).$mount('#app')

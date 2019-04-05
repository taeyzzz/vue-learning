import Vue from 'vue'
import routes from './routes'
import storeVuex from './store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router: routes,
  store: storeVuex,
  render: h => h(App),
}).$mount('#app')

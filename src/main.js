import Vue from 'vue'
import routes from './routes'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router: routes,
  render: h => h(App),
}).$mount('#app')

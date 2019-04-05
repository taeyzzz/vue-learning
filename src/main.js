import Vue from 'vue'
import Vuetify from 'vuetify'

import routes from './routes'
import storeVuex from './store'
import App from './App.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false

import 'vuetify/dist/vuetify.min.css'

new Vue({
  router: routes,
  store: storeVuex,
  render: h => h(App),
}).$mount('#app')

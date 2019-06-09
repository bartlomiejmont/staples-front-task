import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

import Paginate from 'vuejs-paginate'
const compiler = require('vue-template-compiler')
Vue.component('paginate', Paginate)

new Vue({
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios'
import lodash from 'lodash'
import moment from 'moment'
import '@mdi/font/css/materialdesignicons.css'

window._ = lodash()
window.axios = new Axios.create({
    baseURL : 'http://127.0.0.1:8000/',
    timeout : 10000
})
window.axios.defaults.headers.common['Authorization'] = `Token 8dd06af430873e3158b9b2a834371f4c855d7076`;


window.moment = moment()
moment.locale('th')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

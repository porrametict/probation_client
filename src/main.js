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
    baseURL: 'http://127.0.0.1:8000/',
    // baseURL: 'http://127.0.0.1:8001/',
    timeout: 10000
})

Vue.prototype.getTHDate= function (date=null) {
    moment.locale('th');
    if (date==null) {
        return moment().format('l')
    }else {
        return moment(date).format('l')
    }
}

if (localStorage.getItem('access_token')) {
    window.axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('access_token')}`;
}

window.moment = moment()
moment.locale('th')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')

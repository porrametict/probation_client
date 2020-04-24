import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios'
import lodash from 'lodash'
import moment from 'moment'
import '@mdi/font/css/materialdesignicons.css'
import VueMask from 'v-mask'
Vue.use(VueMask);
const baseURL = process.env.VUE_APP_BASE_BACKEND_URL
window._ = lodash()
window.axios = new Axios.create({
    baseURL: baseURL,
    timeout: 10000
})
Vue.prototype.getTHDate = function (date = null) {
    moment.locale('th');
    if (date == null) {
        return moment().format('l')
    } else {
        return moment(date).format('l')
    }
}

if (localStorage.getItem('access_token')) {
    window.axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('access_token')}`;
}

window.moment = moment()
moment.locale('th')

Vue.config.productionTip = false

const VueGoogleMaps = require('vue2-google-maps');

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAA4xy46J4VXUz-MK2XLMtK6Eglw99H5Us',
        v: '3.34',
        libraries: 'places'
    }
})


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')

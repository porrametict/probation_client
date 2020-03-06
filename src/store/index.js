import Vue from 'vue'
import Vuex from 'vuex'
import during_probation_form from "./modules/during_probation_form";
import after_probation_form from "./modules/after_probation_form";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        during_probation_form: during_probation_form,
        after_probation_form: after_probation_form,
    }
})

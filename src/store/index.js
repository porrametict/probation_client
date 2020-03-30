import Vue from 'vue'
import Vuex from 'vuex'
import during_probation_form from "./modules/during_probation_form";
import after_probation_form from "./modules/after_probation_form";
import account from "./modules/account";
import drawer from "./modules/drawer";
import assignment from "./modules/assignment";
import districtSelect from "./modules/districtSelect";
import probation_case from "./modules/probation_case";
import rehabilitation_case from "./modules/rehabilitation_case";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        account: account,
        assignment : assignment,
        during_probation_form: during_probation_form,
        after_probation_form: after_probation_form,
        districtSelect: districtSelect,
        drawer: drawer,
        probation_case: probation_case,
        rehabilitation_case: rehabilitation_case,
    }
})

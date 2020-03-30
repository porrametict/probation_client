export default {
    state: {
        drawer: null,
    },
    mutations: {
        SET_DRAWER (state, val) {
            state.drawer = val
            console.log(val,state.drawer)
        }
    },
    actions: {

    },

}
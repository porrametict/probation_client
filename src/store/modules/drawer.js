export default {
    state: {
        drawer: true,
    },
    mutations: {
        // SET_DRAWER (state, val) {
        //     state.drawer = val
        //     console.log(val,state.drawer)
        // },
        toggle(state) {
            console.log(state.drawer)
            state.drawer  =  !state.drawer;
            console.log(state.drawer)
        }
    },
    actions: {

    },
    getters:{
        getDrawerState(state) {
            return state.drawer;
        }
    }
}
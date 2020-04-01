export default {
    namespaced: true,
    state: {
        offenders: null
    },
    mutations: {
        setOffenders(state, data) {
            state.offenders = data
        }
    },
    actions: {
        async getOffenderNoPaginate(context) {
            return await axios.get('api/v1/offender-no-paginate/')
                .then((response) => {
                    context.commit('setOffenders', response.data)
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        },
    }, getters: {
        getOffender: (state) => (id) => {
            let offender = {}
            state.offenders.forEach(e => {
                if (e.id === id) {
                    offender = e
                    return 0
                }
            })
            return offender
        },
    }
}
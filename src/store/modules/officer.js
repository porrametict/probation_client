export default {
    namespaced: true,
    state: {
        officers: null
    },
    mutations: {
        setOfficers(state, data) {
            state.officers = data
        }
    },
    actions: {
        async getListUser(context, params) {
            return await axios.get('api/v1/officer-user/', params = {params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async getOfficerNoPaginate(context) {
            return await axios.get('api/v1/officer-no-paginate/')
                .then((response) => {
                    context.commit('setOfficers', response.data)
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        }
    },
    getters: {
        getOfficer: (state) => (id) => {
            let officer = {}
            state.officers.forEach(e => {
                if (e.id === id) {
                    officer = e
                    return 0
                }
            })
            return officer
        },
    }
}
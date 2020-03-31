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
        async getVolunteerNoPaginate(context) {
            return await axios.get('api/v1/officer-no-paginate/')
                .then((response) => {
                    context.commit('setOfficers', response.data)
                    return response.data
                }).catch((error) => {
                    console.error(error)
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
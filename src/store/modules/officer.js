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
        async getUserDetail(context, id) {
            return await axios.get(`api/v1/officer-user/${id}/`,)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async updateUser(context, params) {
            let id = params.id
            return await axios.put(`api/v1/officer-user/${id}/`, params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async deleteUser(context, id) {
            return await axios.delete(`api/v1/officer-user/${id}/`)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
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
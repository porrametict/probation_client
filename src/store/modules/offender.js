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
        async getListUser(context, params) {
            return await axios.get('api/v1/offender/', params = {params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async getUserDetail(context, id) {
            return await axios.get(`api/v1/offender/${id}/`,)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async updateUser(context, params) {
            let id = params.id
            return await axios.put(`api/v1/offender/${id}/`, params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async deleteUser(context, id) {
            return await axios.delete(`api/v1/offender/${id}/`)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
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

        async createAddress(context, params) {
            return await axios.post(`api/v1/offender-address/`, params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async updateAddress(context, params) {
            let id = params.id
            return await axios.put(`api/v1/offender-address/${id}/`, params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async deleteAddress(context, id) {
            return await axios.delete(`api/v1/offender-address/${id}/`)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
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
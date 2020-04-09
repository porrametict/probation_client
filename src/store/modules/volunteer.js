import {breaking} from "vuetify/lib/util/console";

export default {
    namespaced: true,
    state: {
        volunteers: null
    },
    mutations: {
        setVolunteers(state, data) {
            state.volunteers = data
        }
    },
    actions: {
        async getListUser(context, params) {
            return await axios.get('api/v1/volunteer-user/', params = {params})
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async getUserDetail(context, id) {
            return await axios.get(`api/v1/volunteer-user/${id}/`,)
                .then((response) => {
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async updateUser(context, params) {
            let id = params.id
            return await axios.put(`api/v1/volunteer-user/${id}/`, params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async deleteUser(context, id) {
            return await axios.delete(`api/v1/volunteer-user/${id}/`)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async getVolunteerNoPaginate(context) {
            return await axios.get('api/v1/volunteer-no-paginate/')
                .then((response) => {
                    context.commit('setVolunteers', response.data)
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                })
        }
    },
    getters: {
        getVolunteer: (state) => (id) => {
            let volunteer = {}
            state.volunteers.forEach(e => {
                if (e.id === id) {
                    volunteer = e
                    return 0
                }
            })
            return volunteer
        },
    }

}
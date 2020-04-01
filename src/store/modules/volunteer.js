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
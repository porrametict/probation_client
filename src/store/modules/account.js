export default {
    namespaced: true,
    state: {
        user_profile: null
    },
    mutations: {
        setUser(state, data) {
            state.user_profile = data
        }
    },
    actions: {
        async login(context, params) {
            return await axios.post('rest-auth/login/', params)
                .then((response) => {
                    localStorage.setItem('access_token', response.data.key)
                    window.axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('access_token')}`;
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async getUser(context) {
            return await axios.get('rest-auth/user-profile/')
                .then((response) => {
                    context.commit('setUser', response.data)
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },
        async updateUser(context,params) {
            return await axios.put('rest-auth/user-profile/',params)
                .then((response) => {
                    context.dispatch("success/setSuccess", response.data, {root: true});
                    context.commit('setUser', response.data)
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        },

        logout(context) {
            localStorage.clear()
        },
        createUser: async function(){
            return await axios.post('rest-auth/registration-full/')
                .then((response) => {
                    context.commit('setUser', response.data)
                    return response.data
                }).catch((error) => {
                    context.dispatch("error/setError", error.response.data, {root: true});
                    return null
                });
        }
    },

}